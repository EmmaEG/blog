import React from 'react';
import { Link } from 'react-router-dom';

import './topbar.css';
import picture from '../../assets/pictureTopbar.jpg';
// import logo from '../../assets/logo.png';

export default function topbar() {
  const user = false;

  return (
    <div className='container-fluid sticky-top'>
      <div className='row'>
        <nav className='navbar navbar-expand-lg navbar-light text-center sticky-top'>
          {/* <div className="col-lg-3 d-lg-none">
              <a className="navbar-brand" href="/">
                <img className="navbar-img" src={logo} alt=""/>
              </a>
            </div> */}

          <button
            className='navbar-toggler ms-auto'
            type='button'
            data-toggle='collapse'
            data-target='#navbar'
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>

          <div className='collapse navbar-collapse' id='navbar'>
            <div className='col-lg-3'>
              <ul className='nav-item'>
                <i className='topIcon fab fa-instagram-square'></i>
                <i className='topIcon fab fa-pinterest-square'></i>
                <i className='topIcon fab fa-facebook-square'></i>
                <i className='topIcon fab fa-twitter-square'></i>
              </ul>
            </div>

            <div className='col-lg-6'>
              <ul className='nav-item'>
                <li className='nav-item'>
                  <Link className='link' to='/'>
                    HOME
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link className='link' to='/'>
                    ABOUT
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link className='link' to='/'>
                    CONTACT
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link className='link' to='/write'>
                    WRITE
                  </Link>
                </li>
                <li className='nav-item'>{user && 'LOGOUT'}</li>
              </ul>
            </div>

            <div className='col-lg-3'>
              {user ? (
                <>
                  <img className='topImg' src={picture} alt='' />
                  <i className='topSearchIcon fas fa-search'></i>
                </>
              ) : (
                <ul>
                  <li className='nav-item'>
                    <Link className='link' to='/login'>
                      LOGIN
                    </Link>
                  </li>
                </ul>
              )}
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}