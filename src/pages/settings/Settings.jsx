import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";

import "./settings.css";
import waterfall from "../../assets/waterfall.jpg";

export default function Settings() {
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
                <img className="setimage" src={waterfall} alt="..." />
                <label htmlFor="fileInput">
                  <i className="settingsIcon fas fa-user-circle"></i>
                </label>
                <input type="file" id="fileInput" style={{ display: "none" }} />
              </div>
              <form className="writeForm mt-4">
                <label className="form-label">
                  Username
                </label>
                <div className="writeFormGroup d-flex mb-3">
                  <input
                    type="text"
                    placeholder="Santiago"
                    className="form-control"
                    autoFocus={true}
                  />
                </div>
                <label className="form-label">
                  Email
                </label>
                <div className="writeFormGroup mb-3">
                  <input
                    type="email"
                    placeholder="santiago@hotmail.com"
                    className="form-control"
                  />
                </div>
                <label className="col-form-label">
                  Password
                </label>
                <div className="writeFormGroup mb-3">
                  <input type="password" className="form-control" />
                  <span className="form-text">Must be 8-20 characters long.</span>
                </div>
                <button type="button" className="btn btn-outline-secondary">
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
}
