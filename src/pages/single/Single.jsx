import React from "react";

import Sidebar from "../../components/sidebar/Sidebar";
import SinglePost from "../../components/singlePost/SinglePost";

export default function Single () {
  return (
    <div className="container-fluid mt-4">
      <div className="row p-3">
        <div className="col-lg-9 col-md-12">
          <SinglePost />
        </div>
        <div className="col-lg-3 sidebar">
          <Sidebar />
        </div>
      </div>
    </div>
  );
};
