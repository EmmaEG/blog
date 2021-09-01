import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";

import picture from "../../assets/pictureTopbar.jpg";
import "./sidebar.css";

export default function Sidebar() {
  const [cats, setCats] = useState([]);
  const { user } = useContext(Context);
  const publicFolder = "http://localhost:5000/images/";

  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get("/categories");
      setCats(res.data);
    };
    getCats();
  }, []);

  return (
    <>
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        {user ? (
          <img
            className="img-fluid"
            src={publicFolder + user.profilePic}
            alt=""
          />
        ) : (
          <img className="img-fluid" src={picture} alt="" />
        )}

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          {cats.map((c) => (
            <Link to={`/?cat=${c.name}`} className="link">
              <li className="sidebarListItem">{c.name}</li>
            </Link>
          ))}
        <li className="sidebarListItem">Life</li>
        <li className="sidebarListItem">Music</li>
        <li className="sidebarListItem">Sport</li>
        <li className="sidebarListItem">Style</li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-twitter-square"></i>
          <i className="sidebarIcon fab fa-instagram-square"></i>
          <i className="sidebarIcon fab fa-pinterest-square"></i>
          <i className="sidebarIcon fab fa-facebook-square"></i>
        </div>
      </div>
    </>
  );
}
