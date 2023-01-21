import React from 'react';
import LoginNav from './../login-nav/LoginNav';

function LoginConatiner({ props, children }) {
    return (
        <>
            <LoginNav {...props} />
            {children}
        </>
    );
}

export default LoginConatiner;