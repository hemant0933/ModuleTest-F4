import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../features/getDataSlice";
import { Link } from "react-router-dom";

const Home = () => {
  // const [readMore,setReadMore] = useState(false);

  const dispatch = useDispatch();
  const { posts, loading } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  if (loading) return (
  <div class="loader">
    <div class="loader-square one"></div>
    <div class="loader-square two"></div>
    <div class="loader-square three"></div>
    <div class="loader-square four"></div>
    <div class="loader-square five"></div>
    <div class="loader-square six"></div>
    <div class="loader-square seven"></div>
  </div>)
  
  return (
    <div>
      <p style={{fontSize:'30px',paddingBottom:'1rem',borderBottom:'1px solid white'}}>Social Media App</p>
      <div className="cardContainer">
        {posts.map((post) => (
          <div className="card" key={post.id}>
            <img src={`https://picsum.photos/200?${post.id}`} alt="cardImg" />
            <p>User ID: {post.id}</p>
            <p>Title: {post.title.slice(0, 15)}...</p>
            <p>
              Body: {post.body.slice(0, 30)}
              <Link to={`/detail/${post.id}`}>
                {" "}
                <span style={{ color: "white"}}>
                  Read More...
                </span>
              </Link>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
