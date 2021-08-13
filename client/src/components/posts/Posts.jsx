import React from 'react';
import Post from '../post/Post';

import './posts.css';

export default function Posts({ posts }) {
  return (
    <div className='posts'>
      <div className='row'>
        {posts.map((p) => (
          <div className='col-lg-6 col-md-6'>
            <Post post={p} />
          </div>
        ))}
      </div>
    </div>
  );
}
