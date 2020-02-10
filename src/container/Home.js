import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { getHomeList } from '../store/home';

function Home(props) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // 客户端获取
    if(!props.list || !props.list.length){
      props.getHomeList();
    }    
  }, [])

  return <div>
    <h1>Hi, {props.title} {count}</h1>
    <button onClick={() => setCount(count + 1)}>add</button>
    <hr />

    <ul>
      {
        props.list ? props.list.map(item => {
          return <li key={item.id}>{item.name}</li>
        }): null
      }
    </ul>
  </div>
}

/**
 * 模仿next的做法.
 */
Home.loadData = store=>{
  return store.dispatch(getHomeList())
}

export default connect(
  state => ({
    list: state.home.list
  }),
  {
    getHomeList
  }
)(Home);