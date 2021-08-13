import React from 'react';
import { ErrorMessage, Field, Form, Formik } from 'formik';

import './login.css';
import { Link } from 'react-router-dom';

const Login = () => {
  const initialValues = {
    email: '',
    password: '',
  };

  return (
    <div className='container-fluid login'>
      <div className='row'>
        <div className='col-lg-4 offset-lg-4 col-md-6 offset-md-3 col-sm-8 offset-sm-2 mt-3'>
          <h1 className='title text-center mb-3'>Login</h1>
          <div className='loginform mt-1 mb-3'>
            <Formik
              initialValues={initialValues}
              // onSubmit={}
              validate={(values) => {
                const errors = {};
                if (!values.email) {
                  errors.email = 'Email is required';
                } else if (
                  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                  errors.email = 'Invalid email address';
                }
                if (!values.password) {
                  errors.password = 'Password is required';
                } else if (values.password.length < 6) {
                  errors.password = 'password must be 6 characters';
                }
                return errors;
              }}
            >
              {(formik) => {
                return (
                  <Form className='p-4'>
                    <div className='mb-3'>
                      <label className='form-label'>Email address</label>
                      <Field
                        className='form-control mb-2'
                        type='email'
                        name='email'
                        placeholder='Enter an email'
                        autoFocus
                      />
                      <ErrorMessage
                        className='mb-2 p-2 text-center fw-bold'
                        name='email'
                        component='p'
                      />
                    </div>
                    <div className='mb-3'>
                      <label className='form-label'>Password</label>
                      <Field
                        className='form-control mb-2'
                        type='password'
                        name='password'
                        placeholder='Enter a password'
                      />
                      <ErrorMessage
                        className='mb-2 p-2 text-center fw-bold'
                        name='password'
                        component='div'
                      />
                    </div>
                    <div className='button text-center mb-3'>
                      <button
                        type='submit'
                        className='btn'
                        disabled={!formik.isValid}
                        style={{ background: 'lightcoral' }}
                      >
                        Login
                      </button>
                    </div>
                    <div className='loginlink text-center'>
                      <h6>¿You don't have an account yet?</h6>
                      <Link to='/register'>Register</Link>
                      {/* <button
                        className='btn'
                        style={{ background: 'lightskyblue' }}
                      >
                        Regitser
                      </button> */}
                    </div>
                  </Form>
                );
              }}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
