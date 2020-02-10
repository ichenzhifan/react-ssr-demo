const express = require('express');
const app = express();

app.get('/api/course/list', (req, res) => {
  // 跨域支持.
  // res.header('Access-Control-Allow-Origin', '*');
  // res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE');
  // res.header('Content-Type', 'application/json;charset=utf-8')

  res.json({
    code: 0,
    list: [
      { name: 'web', id: 1 },
      { name: 'h5', id: 2 },
      { name: 'java', id: 3 },
      { name: 'js', id: 4 }
    ]
  })
});

app.get('/api/user/detail', (req, res) => {
  // 跨域支持.
  // res.header('Access-Control-Allow-Origin', '*');
  // res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE');
  // res.header('Content-Type', 'application/json;charset=utf-8')

  res.json({
    code: 0,
    data:{
      name: 'Jack',
      age: 18
    }
  })
});

app.listen(8083, () => {
  console.log('mock(8083) is starting')
});