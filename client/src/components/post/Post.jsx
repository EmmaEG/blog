import React from 'react';
import { Link } from 'react-router-dom';

import waterfall from '../../assets/waterfall.jpg';
import './post.css';

export default function Post({ post }) {
  return (
    <div className='card border-light text-center mb-4'>
      {post.photo && (
        <img className='image img-fluid' src={post.photo} alt='photo card' />
      )}
      <div className='card-body'>
        <Link to={`/post/${post._id}`} className="link">
          <h5 className='card-title'>{post.title}</h5>
        </Link>
        {post.categories.map((c) => {
          <h6 className='categories text-muted'>{c.name}</h6>;
        })}
        <p className='postDesc card-text'>{post.desc}</p>
        <p className='card-text'>
          <small className='text-muted'>
            {new Date(post.createdAt).toDateString()}
          </small>
        </p>
      </div>
    </div>
  );
}
