import React from 'react';
import { Navigate } from 'react-router-dom';
import  isLogin  from '../Login/isLogin';

const PrivateRoute = ({ children }) => {
  return !isLogin ? <Navigate to='/Login' /> : children;
  console.log(isLogin);
};

export default PrivateRoute;