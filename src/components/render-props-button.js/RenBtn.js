import React from 'react';

function RenBtn({cnt,inc,dec}) {
    return (
        <div>
            {cnt}
            <button onClick={inc}>+</button>
            <button onClick={dec}>-</button>
        </div>
    );
}

export default RenBtn;