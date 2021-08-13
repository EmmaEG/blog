import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';

import './singlePost.css';
import waterfall from '../../assets/waterfall.jpg';

export default function SinglePost() {
  const location = useLocation();
  const path = location.pathname.split('/')[2]; // to cut id
  const [post, setPost] = useState({});

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get('/posts/' + path);
      setPost(res.data);
    };
    getPost();
  }, [path]);

  return (
    <>
      <div className='card border-light text-center mb-4'>
        {post.photo && (
          <img className='image img-fluid' src={post.photo} alt='photo' />
        )}
        <div className='card-body'>
          <div className='card-title'>
            <h3 className='title'>{post.title}</h3>
            {/* <h6 className="categories text-muted">Life</h6> */}
          </div>

          <div className=''>
            <p className='card-text'>
              Author:
              <Link to={`/?user=${post.username}`} className='link'>
                <b> {post.username}</b>
              </Link>
            </p>

            <div className='actions d-flex justify-content-between'>
              <p className='card-text'>
                <small className='text-muted'>
                  {new Date(post.createdAt).toDateString()}
                </small>
              </p>
              <p className='card-text'>
                <a href='#'>
                  <i className='far fa-edit'></i>
                </a>
                <a href='#'>
                  <i className='far fa-trash-alt'></i>
                </a>
              </p>
            </div>
            <p className='singlePost'>{post.desc}</p>
          </div>
        </div>
      </div>
    </>
  );
}
