import React from 'react';
import './Home.scss';
import { useDispatch, useSelector } from 'react-redux';
import { userAsync } from '../../store/extra-reducers/testSlice';
import { useEffect, useState } from 'react';

function Home(props) {
    // const { data, loading } = useSelector((state) => state.users);
    const [data,setData]=useState();
    const [loading,setLoading]=useState(true);
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(userAsync()).then((res)=>{
            console.log("res " , res.payload)
            setData(res.payload)
            setLoading(false)
        })
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