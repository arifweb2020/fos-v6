import React from 'react';
import Navbar from './../navbar/Navbar';

function MainContainer({ props, children }) {
    return (
        <>
            <Navbar {...props} />
            {children}
        </>
    );
}

export default MainContainer;