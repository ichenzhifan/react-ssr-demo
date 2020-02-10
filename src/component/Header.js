import React from 'react';
import {Link} from 'react-router-dom';
import styles from './Header.css';
import withStyle from '../withStyle';

const Header = (props) => {
  return (<div className={styles.bg}>
    <Link to="/">Home</Link> | 
    <Link to="/about">About</Link> | 
    <Link to="/user">User</Link>
  </div>)
}

export default withStyle(Header, styles);