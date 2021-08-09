import React from "react";

import "./singlePost.css";
import waterfall from "../../assets/waterfall.jpg";

export default function SinglePost() {
  return (
    <>
      <div className="card border-light text-center mb-4">
        <img className="image img-fluid" src={waterfall} alt="..." />
        <div className="card-body">
          <div className="card-title">
            <h3 className="title">Card title</h3>
            {/* <h6 className="categories text-muted">Life</h6> */}
          </div>

          <div className="">
            <p className="card-text">
              Author: <b>Emma</b>
            </p>

            <div className="actions d-flex justify-content-between">
              <p className="card-text">
                <small className="text-muted">Last updated 3 mins ago</small>
              </p>
              <p className="card-text">
                <a href="#">
                  <i className="far fa-edit"></i>
                </a>
                <a href="#">
                  <i className="far fa-trash-alt"></i>
                </a>
              </p>
            </div>
            <p className="singlePost">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
              nostrum dolore, mollitia maiores quidem dolorem fugiat autem amet
              neque eligendi recusandae voluptatem iure atque cum voluptates
              velit. Lorem ipsum dolor sit amet consectetur adipisicing
              elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Officia nostrum dolore, mollitia maiores quidem dolorem fugiat
              autem amet neque eligendi recusandae voluptatem iure atque cum
              voluptates velit. Lorem ipsum dolor sit amet consectetur
              adipisicing elit.Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Officia nostrum dolore, mollitia maiores quidem
              dolorem fugiat autem amet neque eligendi recusandae voluptatem
              iure atque cum voluptates velit. Lorem ipsum dolor sit amet
              consectetur adipisicing elit.Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Officia nostrum dolore, mollitia
              maiores quidem dolorem fugiat autem amet neque eligendi recusandae
              voluptatem iure atque cum voluptates velit. Lorem ipsum dolor sit
              amet consectetur adipisicing elit.Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Officia nostrum dolore, mollitia
              maiores quidem dolorem fugiat autem amet neque eligendi recusandae
              voluptatem iure atque cum voluptates velit. Lorem ipsum dolor sit
              amet consectetur adipisicing elit.Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Officia nostrum dolore, mollitia
              maiores quidem dolorem fugiat autem amet neque eligendi recusandae
              voluptatem iure atque cum voluptates velit. Lorem ipsum dolor sit
              amet consectetur adipisicing elit.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
