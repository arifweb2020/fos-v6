import React from 'react';
import './Loader.scss'

function Loader(props) {
    return (
        <div className='spinLoader'>
            <div className='spinner-border text-primary circle' role='status'>
                <span className='sr-only' ></span>
            </div>
        </div>
    );
}

export default Loader;