import React from 'react';
import {Route} from 'react-router-dom';
import Home from './container/Home';
import About from './container/About';
import User from './container/User';
import NotFound from './container/NotFound';
import './main.css'

// export default (
//   <div>
//     <Route path="/" exact component={Home}/>
//     <Route path="/about" exact component={About}/>
//   </div>
// );

export default [
  {
    path: '/',
    component: Home,
    exact: true,
    key: 'home'
  },
  {
    path: '/user',
    component: User,
    exact: true,
    key: 'user'
  },
  {
    path: '/about',
    component: About,
    exact: true,
    key: 'about'
  },
  {
    component: NotFound,
    key: 'notfound'
  }
]