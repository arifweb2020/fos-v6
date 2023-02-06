import React, { useState, useEffect } from 'react';
import './Home.scss';
import useDebounce from '../../hooks/useDebounce';


function Home(props) {

    const [data, setData] = useState([]);
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false);
    const [errors, setErrors] = useState(false);

    const [search,setSearch] = useState("")
    const[sdata,setSdata] = useState([]);
    const debounce = useDebounce(search,700)

    

    const getData = async () => {
        const res = await fetch("https://fakestoreapi.com/products");
        return await res.json();
    };

    const getuser = async () => {
        const res = await fetch("https://dummyjson.com/products");
        return await res.json();
    };

    useEffect(() => {
        Promise.all([getData(), getuser()])
            .then(([res1, res2]) => {
                setData(res1)
                setUser(res2)
                setLoading(false)
            }).catch((err) => {
                setError(true)
            })
    }, []);


    // const handleChange = (e)=>{
    //   const{value} = e.target;
    //   setSearch(value)
    //   fetch(`https://demo.dataverse.org/api/search?q=${value}`).
    //   then((res)=>res.json())
    //   .then((res)=>{
    //     setSdata(res.data.items)
    //   })
    // }

    useEffect(() => {
        if(debounce) {
            searchData(debounce);
        }else {
          console.log('Something else')
        }
      },[debounce]) 

    const searchData = (text) => {
        fetch(`https://demo.dataverse.org/api/search?q=${text}`)
        .then((res) => res.json())
        .then((response) => {
          console.log('Reponse', response);
          setSdata(response.data.items)
        })
      }

      const [items, setItems] = useState(['item1', 'item2', 'item3']);

      const handleDelete = (index) => {
        const newItems = [...items];
        newItems.splice(index, 1);
        setItems(newItems);
      };
    
      const handleSelectMultiple = (e) => {
        const selectedIndexes = Array.from(e.target.selectedOptions).map((option) => option.index);
    
        let newItems = [...items];
    
        selectedIndexes.forEach((index) => {
          newItems.splice(index, 1);
        });
    
        setItems(newItems);
      };
    return (
        <div className='container home__conatiner'>
<div>
      <select  onChange={handleSelectMultiple}>
        {items.map((item, index) => (
          <option key={index} value={item}>{item}</option>))}
      </select>

      <ul>{items.map((item, index) => (
        <li key={index}>{item}<button onClick={() => handleDelete(index)}>Delete</button></li>) )}</ul>  

    </div>  
        <input type="text" value={search} onChange={(e)=>setSearch(e.target.value)} />

        {
            sdata.length > 0 && search.length > 0 ?
            <>
            {
                sdata?.map((ele)=>{
                    return <p>{ele.name}</p>
                })
            }
            </> : "No data"
        }

            <div>
                {error ? "some error" :
                    loading ? "wait " :
                        data.length === 0 ? "no data found" :
                            <>{data?.slice(0, 2)?.map((ele) => <h1>{ele?.title}</h1>)}</>
                }
            </div>

            <div>
                {errors ? "some error" :
                    loading ? "wait " :
                        user?.products?.length === 0 ? "no data found" :
                            <>{user?.products?.slice(0, 5)?.map((ele) => <h1>{ele.title}</h1>)}</>
                }
            </div>


            {/* {Object?.keys(user?.products)?.length && user?.products?.slice(0,5)?.map((ele) => <h1>{ele.title}</h1>)} */}
        </div>
    );
}

export default Home;

//Multiple Selection & Deletion Of List Items in react hooks