import React from 'react';
import './Home.scss';
import { useDispatch, useSelector } from 'react-redux';
import { userAsync, getUser } from '../../store/extra-reducers/testSlice';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import RenderProps from '../../components/render-props/RenderProps';
import Counter from '../../components/render-counter/Counter';
import RenBtn from '../../components/render-props-button.js/RenBtn';

function Home(props) {


    const { userDetails } = useSelector((state) => state.users);
    const [data, setData] = useState();
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch();
    const navigate = useNavigate();


    const [users,setUsers]=useState([])
    const total = 4;
    const [next , setNext] = useState(total)
    const [compl,setCompl]= useState(false)

    useEffect(()=>{
   (async ()=>{
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const res1 = await res.json();
    setUsers(res1)
   })()
    },[])

    

const moreData = ()=>{
    setNext((prev) => prev + 4)

    if (next >= users.length) {
        setCompl(true)
      } else {
        setCompl(false)
      }
}

const lessData=()=>{
    setNext(4)
}

    useEffect(() => {
        dispatch(userAsync()).then((res) => {
            console.log("res ", res.payload)
            setData(res.payload)
            setLoading(false)
        })

    }, [dispatch])

    return (
        <div className='container home__conatiner'>
            <div className='load'>
                {
                    users?.slice(0,next)?.map((ele)=>{
                        return <h1>{ele.name}</h1>
                    })
                }
               {
                compl ?  <button className='btn btn-md btn-primary' onClick={lessData}>show less</button>
                 : <button className='btn btn-md btn-primary' onClick={moreData}>load more</button> 
               }
                
            </div>
            {/* <RenderProps render={()=> "render props"}/> */}
            {/* passing as aprops */}
            <RenderProps render={(param) => param} />

            <Counter render={(cc, increment, decrement) => (<RenBtn cnt={cc} inc={increment} dec={decrement} />)} />

            <p>user from redux - {userDetails.title}</p>
            <h1>Home page <button className='mybtn'>css</button></h1>

            {
                loading ? "plz wait" :
                    data?.slice(0,2).map((ele, i) => {
                        return <h4 key={i} onClick={() => navigate(`/about/${ele.id}`)} style={{ cursor: 'pointer' }}>{ele.title}</h4>
                    })
            }
        </div>
    );
}

export default Home;