import { createStore, applyMiddleware,combineReducers } from 'redux';
import thunk from 'redux-thunk';
import axios from 'axios';
import homeReducer from './home';
import userReducer from './user';

const reducer = combineReducers({
  home: homeReducer,
  user: userReducer
});

const serverAxios = axios.create({
  baseURL: 'http://localhost:8083/'
});

const clientAxios = axios.create({
  baseURL: '/'
});

// export default store;
export const getServerStore = ()=>{
  return createStore(reducer, applyMiddleware(thunk.withExtraArgument(serverAxios)));
}

export const getClientStore = ()=>{
  const defaultStore = window.__context || {};
  return createStore(reducer, defaultStore, applyMiddleware(thunk.withExtraArgument(clientAxios)));
}