import React from "react";

import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";

import "./home.css";

export default function Home() {
  return (
    <>
      <Header />
      <div className="home">
        <div className="container-fluid mt-4">
          <div className="row">
            <div className="col-lg-9">
              <Posts />
            </div>
            <div className="col-lg-3 sidebar">
              <Sidebar />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
