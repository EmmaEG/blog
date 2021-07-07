import React from "react";

import Header from "../../header/Header";
import Posts from "../../posts/Posts";
import Sidebar from "../../sidebar/Sidebar";

import "./home.css";

export default function Home() {
  return (
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <Header />
            <div className="row mt-4">
              <div className="col-lg-9 col-md-9">
                <Posts />
              </div>
              <div className="col-lg-3 col-md-3 sidebar">
                <Sidebar />
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}
