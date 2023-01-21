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


    return (
        <div className='login__container'>
            <h1>Login</h1>
        </div>
    );
}

export default Login;