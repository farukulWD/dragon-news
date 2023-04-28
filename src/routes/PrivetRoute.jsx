import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

const PrivetRoute = ({children}) => {
    const {user,loader}=useContext(AuthContext);
    const location = useLocation();

    if (loader) {
        return <div style={{height:"300px"}} className='d-flex justify-content-center align-items-center'><Spinner  animation="border" variant="primary" /></div>
    }

    if (user) {
        return children;
    }
    return <Navigate state={{from: location}} to="/login" replace></Navigate> ;
};

export default PrivetRoute;