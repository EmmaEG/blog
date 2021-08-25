import React, { useContext } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { Link } from "react-router-dom";
import axios from "axios";
import { Context } from "../../context/Context";

import "./login.css";

const Login = () => {
  const initialValues = {
    username: "",
    password: "",
  };

  // const { user, dispacth, isFetching } = useContext(Context);
  const { dispacth, isFetching } = useContext(Context);

  const handleSubmit = async (values, { resetForm }) => {
    dispacth({ type: "LOGIN_START" });
    try {
      const res = await axios.post("/auth/login", {
        username: values.username,
        password: values.password,
      });
      dispacth({ type: "LOGIN_SUCCESS", payload: res.data });
      // resetForm({});
      // history.push("/login");
    } catch (error) {
      dispacth({ type: "LOGIN_FAILURE" });
      // resetForm({});
      // console.log(error);
      // toast("invalid username or email, tries with another", {
      //   position: "bottom-center",
      //   type: "error",
      //   autoClose: 2000,
      // });
    }
  };

  // console.log(user);
  // console.log(isFetching);

  return (
    <div className="container-fluid login">
      <div className="row">
        <div className="col-lg-4 offset-lg-4 col-md-6 offset-md-3 col-sm-8 offset-sm-2 mt-3">
          <h1 className="title text-center mb-3">Login</h1>
          <div className="loginform mt-1 mb-3">
            <Formik
              initialValues={initialValues}
              onSubmit={handleSubmit}
              validate={(values) => {
                const errors = {};
                if (!values.username) {
                  errors.username = "Username is required";
                }
                if (!values.password) {
                  errors.password = "Password is required";
                } else if (values.password.length < 6) {
                  errors.password = "password must be 6 characters";
                }
                return errors;
              }}
            >
              {(formik) => {
                return (
                  <Form className="p-4">
                    <div className="mb-3">
                      <label className="form-label">Username</label>
                      <Field
                        className="form-control mb-2"
                        type="text"
                        name="username"
                        placeholder="Enter a username"
                        autoFocus
                      />
                      <ErrorMessage
                        className="mb-2 p-2 text-center fw-bold"
                        name="username"
                        component="p"
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Password</label>
                      <Field
                        className="form-control mb-2"
                        type="password"
                        name="password"
                        placeholder="Enter a password"
                      />
                      <ErrorMessage
                        className="mb-2 p-2 text-center fw-bold"
                        name="password"
                        component="div"
                      />
                    </div>
                    <div className="button text-center mb-3">
                      <button
                        type="submit"
                        className="btn"
                        disabled={!formik.isValid || isFetching}
                        style={{ background: "lightcoral" }}
                      >
                        Login
                      </button>
                    </div>
                    <div className="loginlink text-center">
                      <h6>¿You don't have an account yet?</h6>
                      <Link to="/register">Register</Link>
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
