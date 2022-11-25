import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuthContext } from '../context/auth_context';

const ProtectedRoute = ({ children, hasAdmin }) => {
    const { user } = useAuthContext();
    if (hasAdmin) {
        console.log('ssssssssssssssssssssssssssssaaaaaaaaaaa');
        return <Navigate to='/' replace></Navigate>
    }
    // if (user) {

    // };
    return children;
};

export default ProtectedRoute;