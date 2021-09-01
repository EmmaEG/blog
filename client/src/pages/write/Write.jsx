import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { Context } from "../../context/Context";

import "./write.css";
// import waterfall from "../../assets/waterfall.jpg";

export default function Write() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState(null);
  const { user } = useContext(Context);

  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      username: user.username,
      title,
      desc,
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      newPost.photo = filename;
      try {
        await axios.post("/upload", data);
      } catch (error) {}
    }
    try {
      const res = await axios.post("/posts", newPost);
      history.push(`/post/${res.data._id}`);
    } catch (error) {}
  };

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-lg-8 offset-lg-2 col-md-8 offset-md-2">
          <div className="img">
            {file && (
              <img
                className="image"
                src={URL.createObjectURL(file)}
                alt=""
              />
            )}
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-8 offset-lg-2 col-md-8 offset-md-2">
          <form className="writeForm mt-4" onSubmit={handleSubmit}>
            <div className="writeFormGroup d-flex mb-3">
              <label htmlFor="fileInput">
                <i className="writeIcon fas fa-plus-circle"></i>
              </label>
              <input
                type="file"
                id="fileInput"
                style={{ display: "none" }}
                onChange={(e) => setFile(e.target.files[0])}
              />
              <input
                type="text"
                placeholder="Title"
                className="form-control"
                autoFocus={true}
                onChange={e=>setTitle(e.target.value)}
              />
            </div>
            <div className="writeFormGroup mb-3">
              <textarea
                className="form-control"
                type="text"
                placeholder="Tell your story..."
                onChange={e=>setDesc(e.target.value)}
              ></textarea>
            </div>
            <button
              className="btn btn-outline-secondary"
              type="submit"
            >
              Publish
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
