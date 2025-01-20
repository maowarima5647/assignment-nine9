import React, { useContext } from 'react';
import { Authcontext } from './Authprovider';
import { Navigate } from 'react-router-dom';

const Privaterout = ({children}) => {
    const {user} = useContext(Authcontext)
    if(user) {
        return children;
    }
    return (
        <Navigate to='/login'></Navigate>
    );
};

export default Privaterout;