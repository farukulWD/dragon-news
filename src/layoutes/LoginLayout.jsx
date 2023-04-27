import React from 'react';
import NaviagationBar from '../pages/shared/navigationBar/NaviagationBar';
import { Outlet } from 'react-router-dom';

const LoginLayout = () => {
    return (
        <div>
            <NaviagationBar></NaviagationBar>
            <Outlet></Outlet>
        </div>
    );
};

export default LoginLayout;