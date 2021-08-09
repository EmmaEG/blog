import React from "react";

import waterfall from "../../assets/waterfall.jpg";
import "./post.css";

export default function Post() {
  return (
    <div className="card border-light text-center mb-4">
      <img className="image img-fluid" src={waterfall} alt="..." />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <h6 className="categories text-muted">Life</h6>
        <p className="postDesc card-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
          nostrum dolore, mollitia maiores quidem dolorem fugiat autem amet
          neque eligendi recusandae voluptatem iure atque cum voluptates velit.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
          nostrum dolore, mollitia maiores quidem dolorem fugiat autem amet
          neque eligendi recusandae voluptatem iure atque cum voluptates velit.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
          nostrum dolore, mollitia maiores quidem dolorem fugiat autem amet
          neque eligendi recusandae voluptatem iure atque cum voluptates velit.
          Nulla, at rerum?
        </p>
        <p className="card-text">
          <small className="text-muted">Last updated 3 mins ago</small>
        </p>
      </div>
    </div>
  );
}
