import React from "react";

import "./header.css";
import forest from "../../assets/forest.jpg";

export default function Header() {
  return (
    <div className="header">
      <div className="col">
        <div className="row">
          <div className="headerTitles">
            <span className="headerTitleSm">Your Creative</span>
            <span className="headerTitleLg">Blog</span>
          </div>
        </div>
        <img className="headerImg" src={forest} alt="" />
      </div>
    </div>
  );
}
