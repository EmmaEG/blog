import React from "react";

import waterfall from "../assets/waterfall.jpg";
import "./post.css";

export default function Post() {
  return (
    <div>
      <img className="img-fluid" src={waterfall} alt="" />
      <div className="postInfo">
        <span className="postCat">Music</span>
        <span className="postCat">Life</span>
      </div>
      <span className="postTitle">
        Lorem ipsum dolor sit amet.
      </span>
      <hr />
      <span className="postDate">1 hour ago</span>
    </div>
  );
}
