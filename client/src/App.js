import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Home from './pages/home/Home';
import TopBar from './components/topbar/TopBar';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Single from './pages/single/Single';
import Write from './pages/write/Write';
import Settings from './pages/settings/Settings';

function App() {
  const user = false;

  return (
    <Router>
      <TopBar />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/register'>{user ? <Home /> : <Register />}</Route>
        <Route path='/login'>{user ? <Home /> : <Login />}</Route>
        <Route path='/write'>{user ? <Write /> : <Login />}</Route>
        <Route path='/settings'>{user ? <Settings /> : <Login />}</Route>
        <Route path='/post/:postId'>
          <Single />
        </Route>
      </Switch>
      <ToastContainer />
    </Router>
  );
}

export default App;
