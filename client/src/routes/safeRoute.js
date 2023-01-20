import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { isLogin } from '../store/selectors/selectors';

const PrivateRoute = () => {
    const auth = useSelector(isLogin);
    return auth ? <Outlet /> : <Navigate to="/auth" />;
}

export default PrivateRoute;