import React, { useContext, useState } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import { Context } from "../../context/Context";
import axios from "axios";

import "./settings.css";
// import waterfall from "../../assets/waterfall.jpg";

const Settings = () => {
  const { user, dispacth } = useContext(Context);
  const [file, setFile] = useState(null);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const publicFolder = "http://localhost:5000/images/";

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispacth({ type: "UPDATE_START" });
    const updatedUser = {
      userId: user._id,
      username,
      email,
      password,
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      updatedUser.profilePic = filename;
      try {
        await axios.post("/upload", data);
      } catch (error) {}
    }
    try {
      const res = await axios.put(`/users/${user._id}`, updatedUser);
      dispacth({ type: "UPDATE_SUCCESS", payload: res.data });
    } catch (error) {
      dispacth({ type: "UPDATE_FAILURE" });
    }
  };

  return (
    <div className="container-fluid mt-4">
      <div className="row p-3">
        <div className="col-lg-9 col-md-12 col-sm-12 settings">
          <div className="row">
            <div className="account d-flex justify-content-between">
              <div className="title">
                <h3 className="settingsTitle mb-5">Update Your Account</h3>
              </div>
              <div className="delete text-center d-flex justify-content-between">
                <p className="settingsTitle">Delete Account</p>
                <i className="deleteIcon far fa-trash-alt m-1"></i>
              </div>
            </div>
            <div className="col">
              <div className="img">
                <img
                  className="setimage"
                  src={
                    file
                      ? URL.createObjectURL(file)
                      : publicFolder + user.profilePic
                  }
                  alt="..."
                />
                <label htmlFor="fileInput">
                  <i className="settingsIcon fas fa-user-circle"></i>
                </label>
                <input
                  type="file"
                  id="fileInput"
                  style={{ display: "none" }}
                  onChange={(e) => setFile(e.target.files[0])}
                />
              </div>
              <form className="writeForm mt-4" onSubmit={handleSubmit}>
                <label className="form-label">Username</label>
                <div className="writeFormGroup d-flex mb-3">
                  <input
                    type="text"
                    placeholder={user.username}
                    className="form-control"
                    autoFocus={true}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                <label className="form-label">Email</label>
                <div className="writeFormGroup mb-3">
                  <input
                    type="email"
                    placeholder={user.email}
                    className="form-control"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <label className="col-form-label">Password</label>
                <div className="writeFormGroup mb-3">
                  <input
                    type="password"
                    className="form-control"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <span className="form-text">
                    Must be 8-20 characters long.
                  </span>
                </div>
                <button type="submit" className="btn btn-outline-secondary">
                  Update
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="col-lg-3 sidebar">
          <Sidebar />
        </div>
      </div>
    </div>
  );
};

export default Settings;
