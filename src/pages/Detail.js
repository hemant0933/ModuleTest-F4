import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";

const Detail = () => {
  const { id } = useParams();

  const { posts } = useSelector((state) => state.posts);
  const item = posts.find((item) => item.id === Number(id));

  if (!item) {
    return <div>Loading...</div>;
  }
  return (
    <div className="detailDiv">
      <h1>Detail Page</h1>
      <img src={`https://picsum.photos/200?random=${posts.id}`} alt="cardImg" />
      <h2>
        <b>Title:</b> {item.title}
      </h2>
      <p>
        <b>Body:</b> {item.body}
      </p>
      <p>
        <b>User ID:</b> {item.id}
      </p>

      <p style={{ color: "red" }}>
        * On clicking the readmore the image could be different but content is
        same.
      </p>
    </div>
  );
};

export default Detail;
