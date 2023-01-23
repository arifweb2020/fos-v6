import React from 'react';
import { useNavigate } from 'react-router-dom';

function Login(props) {
    const navigate = useNavigate()

    React.useEffect(() => {
        const token = null

        if (token === null) {
            navigate("/login")
        }
        else {
            navigate("/")
        }
        
    }, [navigate])


    const loginHn = async()=>{

        const res = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        const res1 = await res.json();
        console.log(res1)
        localStorage.setItem('red' , JSON.stringify(res1))
       

        navigate("/")
    }

    return (
        <div className='login__container'>
            <h1>Login</h1>
            <button onClick={loginHn}>Login</button>
        </div>
    );
}

export default Login;