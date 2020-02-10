const express = require('express');
const puppeteer = require('puppeteer');

const app = express();

const cache = {};
const render = async (req, res) => {
  const baseUrl = 'http://localhost:8082';
  const url = baseUrl + req.url;
  if(cache[url]){
    return res.send(cache[url])
  }

  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url, {waitUntil: 'networkidle0'});
  const content = await page.content();
  await browser.close();

  res.send(content);
};

app.get('*', (req, res) => {
  if(req.url === '/favicon.ico'){
    return res.send({});
  }

  render(req, res)
})

app.listen(8084);