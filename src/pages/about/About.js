import React from 'react';
import { useSelector } from 'react-redux';

function About(props) {
    const{data,loading} = useSelector((state)=>state.users)
    
    return (
        <div className='about__container'>
            <h1>About</h1>
            {
                loading ? "plz wait" :
                    data?.map((ele, i) => {
                        return <p key={i}>{ele.name}</p>
                    })
            }
        </div>
    );
}

export default About;