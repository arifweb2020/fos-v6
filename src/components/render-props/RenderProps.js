import React from 'react';

function RenderProps(props) {
    return (
        <div>
            {/* {props.render()} */}
            {/* passing as para */}
            {props.render("arif")}
        </div>
    );
}

export default RenderProps;