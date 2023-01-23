import React from 'react';
import './Home.scss';
import { useDispatch, useSelector } from 'react-redux';
import { userAsync ,getUser} from '../../store/extra-reducers/testSlice';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Home(props) {
    

    const { userDetails} = useSelector((state) => state.users);
    const [data,setData]=useState();
    const [loading,setLoading]=useState(true);
    const dispatch = useDispatch();
    const navigate = useNavigate();

   


    
    useEffect(() => {
        dispatch(userAsync()).then((res)=>{
            console.log("res " , res.payload)
            setData(res.payload)
            setLoading(false)
        })
       
    }, [dispatch])

    return (
        <div className='container home__conatiner'>
            <p>user from redux - {userDetails.title}</p>
            <h1>Home page <button className='mybtn'>css</button></h1>
         
            {
                loading ? "plz wait" :
                    data?.map((ele, i) => {
                        return <h4 key={i} onClick={()=>navigate(`/about/${ele.id}`)} style={{cursor:'pointer'}}>{ele.title}</h4>
                    })
            }
        </div>
    );
}

export default Home;