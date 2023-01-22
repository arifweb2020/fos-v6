import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { singleuserAsync } from '../../store/extra-reducers/testSlice';

function About(props) {
    const { singleuser, loading } = useSelector((state) => state.users);
    const { id } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        //dispatch(singleuserAsync(id)) u can this way also
        dispatch(singleuserAsync({ userId: id }))
    }, [dispatch, id])

    return (
        <div className='container about__container mt-3'>
            <h1>About</h1>
            {
                loading ? "plz wait" :
                    <>
                        <h3>{singleuser.title}</h3>
                        <p>{singleuser.body}</p>
                    </>


            }
        </div>
    );
}

export default About;