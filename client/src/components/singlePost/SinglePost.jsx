import React, { useContext, useEffect, useState } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import axios from "axios";

import "./singlePost.css";
import waterfall from "../../assets/waterfall.jpg";
import { Context } from "../../context/Context";

export default function SinglePost() {
  const location = useLocation();
  const path = location.pathname.split("/")[2]; // to cut id
  const [post, setPost] = useState({});
  const publicFolder = "http://localhost:5000/images/";
  const { user } = useContext(Context);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [updateMode, setUpdateMode] = useState(false);

  const history = useHistory();

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get("/posts/" + path);
      setPost(res.data);
      setTitle(res.data.title);
      setDesc(res.data.desc);
    };
    getPost();
  }, [path]);

  const handleDelte = async () => {
    // need username in api function {username:user.username}
    try {
      await axios.delete(`/posts/${post._id}`, {
        data: { username: user.username },
      });
      history.push("/");
    } catch (error) {}
  };

  const handleUpdate = async () => {
    try {
      await axios.put(`/posts/${post._id}`, {
        username: user.username,
        title,
        desc,
      });
      // history.go(0); // reload
      setUpdateMode(false);
    } catch (error) {}
  };

  console.log(post.username === user.username);

  return (
    <>
      <div className="card border-light text-center mb-4">
        {post.photo && (
          <img className="image" src={publicFolder + post.photo} alt="photo" />
        )}
        <div className="card-body">
          {updateMode ? (
            <div className="card-title">
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="titleInput"
                autoFocus
              />
            </div>
          ) : (
            <div className="card-title">
              <h3 className="title">{title}</h3>
              {/* <h6 className="categories text-muted">Life</h6> */}
            </div>
          )}

          <div>
            <p className="card-text">
              Author:
              <Link to={`/?user=${post.username}`} className="link">
                <b> {post.username}</b>
              </Link>
            </p>

            <div className="actions d-flex justify-content-between">
              <p className="card-text">
                <small className="text-muted">
                  {new Date(post.createdAt).toDateString()}
                </small>
              </p>
              {post.username === user?.username && (
                <p className="card-text">
                  <a>
                    <i
                      className="far fa-edit"
                      onClick={() => setUpdateMode(true)}
                    ></i>
                  </a>
                  <a>
                    <i className="far fa-trash-alt" onClick={handleDelte}></i>
                  </a>
                </p>
              )}
            </div>
            {updateMode ? (
              <textarea
                className="singlePostDesc"
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
              ></textarea>
            ) : (
              <p className="singlePost">{desc}</p>
            )}
          </div>
        </div>
        {updateMode && (
          <button
            type="button"
            className="btn btn-outline-secondary"
            type="submit"
            onClick={handleUpdate}
          >
            Update
          </button>
        )}
      </div>
    </>
  );
}
