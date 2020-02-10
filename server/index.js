import React from 'react';
import ReactDom from 'react-dom/server';
import express from 'express';
import fs from 'fs';
import path from 'path';
import { StaticRouter, matchPath, Route, Switch } from 'react-router-dom';
import routes from '../src/App';
import { Provider } from 'react-redux'
import Header from '../src/component/Header';
import { getServerStore } from '../src/store/store';
import serverConfig from './config';

const proxy = require('http-proxy-middleware');


const store = getServerStore()
const app = express();
app.use(express.static('public'));

// 服务端对api做代理.
// 这样的话, api就不要设置跨域相关的配置了.
app.use(
  '/api',
  proxy({ target: 'http://localhost:8083', changeOrigin: true })
);

const wrapPromise = fn => {
  return new Promise(resolve => {
    fn().then(resolve).catch(ex => {
      console.log(ex.message);
      resolve(ex);
    })
  })
}

const csrRender = res => {
  const fileName = path.resolve(process.cwd(), 'public/index.csr.html');
  const html = fs.readFileSync(fileName, 'utf-8');
  res.send(html);
};

app.get('*', (req, res) => {
  // url开启csr降级处理方案.
  if(serverConfig.csr || req.query._mode === 'csr'){
    console.log('开启csr渲染');
    return csrRender(res);
  }

  const promises = [];
  routes.some(route => {
    const match = matchPath(req.path, route);
    if (match) {
      const { loadData } = route.component;
      if (loadData) {
        // 当有其中的某些api出错时, 采取降级的方案. 
        // 避免整个页面无法显示.
        promises.push(wrapPromise(() => loadData(store)))
        // promises.push(loadData(store));
      }
    }
  });

  // Promise.all
  // Promise.allSettled
  Promise.all(promises).then(() => {
    const context = {
      css: []
    };
    // 将react组件, 解析成html.
    const content = ReactDom.renderToString(
      <Provider store={store}>
        <StaticRouter location={req.url} context={context}>
          <Header />
          <Switch>
            {routes.map(route => (
              <Route path={route.path} exact={route.exact} component={route.component} />
            ))}
          </Switch>
        </StaticRouter>
      </Provider>
    );

    if (context.code) {
      res.status(context.code);
    }

    // 跳转.
    if(context.action === 'REPLACE'){
      res.redirect(301, context.url);
    }

    const css = context.css.join('\n');

    res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Document</title>
      <style>${css}</style>
    </head>
    <body>
      <div id="app">${content}</div>
      <script>window.__context=${JSON.stringify(store.getState())}</script>
      <script src="/bundle.js"></script>
    </body>
    </html>
  `);
  }).catch(ex => {
    res.send('error');
  })
});

app.listen(8082, () => {
  console.log('监听端口8082');
})