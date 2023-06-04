import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {getPosts} from '../features/getDataSlice';
import { Link } from 'react-router-dom';

const Home = () => {
  // const [readMore,setReadMore] = useState(false);

  const dispatch = useDispatch();
  const {posts,loading} = useSelector((state)=> state.posts)

  useEffect(() => {
    dispatch(getPosts())
  },[dispatch]);

  if(loading) return <div class="spinner"></div>
  return (
    <div>
        <h2>Social Media App</h2>
        <div className='cardContainer'>
        {
          posts.map((post) => (
            <div className='card' key={post.id}>
           <img src={`https://picsum.photos/200?${post.id}`} alt='cardImg' />
              <p>User ID: {post.id}</p>
              <p>Title: {post.title.slice(0,15)}...</p>
              <p>Body: {post.body.slice(0,30)}
              
              <Link to={`/detail/${post.id}`}> &nbsp;
                 <span style={{color:'white',fontWeight:'800'}}>Read More...</span>
              </Link>

              </p>
              
            </div>
          ))
        }
        </div>
    </div>
  );
}

export default Home;
