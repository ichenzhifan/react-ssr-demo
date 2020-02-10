import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { getUserInfo } from '../store/user';

function User(props) {
  return <div>
    <h1>Hi, {props.user.name} {props.user.age}</h1>
  </div>
}

/**
 * 模仿next的做法.
 */
User.loadData = store=>{
  return store.dispatch(getUserInfo())
}

export default connect(
  state => ({
    user: state.user
  }),
  {
    getUserInfo
  }
)(User);