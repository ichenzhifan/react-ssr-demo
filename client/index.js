import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import { getClientStore } from '../src/store/store';
import Header from '../src/component/Header';
import routes from '../src/App';
const store = getClientStore();

const Page = (
  <Provider store={store}>
    <BrowserRouter>
      <Header />

      <Switch>
        {routes.map(route => (
          <Route path={route.path} exact={route.exact} component={route.component} />
        ))}
      </Switch>
    </BrowserRouter>
  </Provider>
)

if (window.__context) {
  // ssr
  // 注水.
  ReactDom.hydrate(Page, document.getElementById('app'));
} else {
  // csr
  ReactDom.render(Page, document.getElementById('app'));
}

