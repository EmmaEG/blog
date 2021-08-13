import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

import Header from '../../components/header/Header';
import Posts from '../../components/posts/Posts';
import Sidebar from '../../components/sidebar/Sidebar';

import './home.css';

export default function Home() {
  const [posts, setposts] = useState([]);
  const {search} = useLocation(); // useLocation always returns the current url

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get('/posts' + search);
      // console.log(res);
      setposts(res.data);
    };
    fetchPosts();
  }, [search]);

  return (
    <>
      <Header />
      <div className='home'>
        <div className='container-fluid mt-4'>
          <div className='row'>
            <div className='col-lg-9'>
              <Posts posts={posts} />
            </div>
            <div className='col-lg-3 sidebar'>
              <Sidebar />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
