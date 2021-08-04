import React from 'react';

import './write.css';
import waterfall from '../../assets/waterfall.jpg';

export default function Write() {
  return (
    <div className='container mt-4'>
      <div className='row'>
        <div className='col-lg-8 offset-lg-2 col-md-8 offset-md-2'>
          <div className='img'>
            <img className='image' src={waterfall} alt='...' />
          </div>
        </div>
      </div>
      <div className='row'>
        <div className='col-lg-8 offset-lg-2 col-md-8 offset-md-2'>
          <form className='writeForm mt-4'>
            <div className='writeFormGroup d-flex mb-3'>
              <label htmlFor='fileInput'>
                <i className='writeIcon fas fa-plus-circle'></i>
              </label>
              <input type='file' id='fileInput' style={{ display: 'none' }} />
              <input
                type='text'
                placeholder='Title'
                className='form-control'
                autoFocus={true}
              />
            </div>
            <div className='writeFormGroup mb-3'>
              <textarea
                className='form-control'
                type='text'
                placeholder='Tell your story...'
              ></textarea>
            </div>
            <button type='button' className='btn btn-outline-secondary'>
              Publish
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
