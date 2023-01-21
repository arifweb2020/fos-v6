import React from 'react';
import './Home.scss';
import { useDispatch, useSelector } from 'react-redux';
import { userAsync } from '../../store/extra-reducers/testSlice';
import { useEffect } from 'react';

function Home(props) {
    const { data, loading } = useSelector((state) => state.users);
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(userAsync())
    }, [dispatch])

    return (
        <div className='container home__conatiner'>
            <h1>Home page <button className='mybtn'>css</button></h1>
            {
                loading ? "plz wait" :
                    data?.map((ele, i) => {
                        return <p key={i}>{ele.name}</p>
                    })
            }
        </div>
    );
}

export default Home;