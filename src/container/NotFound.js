import React from 'react';
import { Route } from 'react-router-dom';

const Status = ({ code, children }) => {
  return <Route render={({ staticContext }) => {
    if (staticContext) {
      // 404
      staticContext.code = code;
    }

    return children;
  }}></Route>
};

const NotFound = props => {
  return <Status code="404">
    <h1>404, the page is not found</h1>
  </Status>
}

export default NotFound;