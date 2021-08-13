import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import picture from '../../assets/pictureTopbar.jpg';
import './sidebar.css';

export default function Sidebar() {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get('/categories');
      setCats(res.data);
    };
    getCats();
  }, []);

  return (
    <>
      <div className='sidebarItem'>
        <span className='sidebarTitle'>ABOUT ME</span>
        <img className='img-fluid' src={picture} alt='' />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
      <div className='sidebarItem'>
        <span className='sidebarTitle'>CATEGORIES</span>
        <ul className='sidebarList'>
          {cats.map((c) => (
            <Link to={`/?cat=${c.name}`} className='link'>
              <li className='sidebarListItem'>{c.name}</li>
            </Link>
          ))}
        </ul>
      </div>
      <div className='sidebarItem'>
        <span className='sidebarTitle'>FOLLOW US</span>
        <div className='sidebarSocial'>
          <i className='sidebarIcon fab fa-twitter-square'></i>
          <i className='sidebarIcon fab fa-instagram-square'></i>
          <i className='sidebarIcon fab fa-pinterest-square'></i>
          <i className='sidebarIcon fab fa-facebook-square'></i>
        </div>
      </div>
    </>
  );
}
