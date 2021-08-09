import React from 'react';
import Post from '../post/Post';

import './posts.css';

export default function Posts() {
  return (
    <div className='posts'>
      <div className='row'>
        <div className='col-lg-6 col-md-6'>
          <Post />
          <Post />
          <Post />
        </div>
        <div className='col-lg-6 col-md-6'>
          <Post />
          <Post />
          <Post />
        </div>
      </div>
    </div>
  );
}
