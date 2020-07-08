import React from 'react';
import Landing from './pages/landing/landing';
import About from './pages/about/about';
import Pricing from './pages/pricing/pricing';
import Login from './pages/login/login';
import SignUp from './pages/signUp/signUp';
import CreateTalent from './pages/createTalent/createTalent';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.sass';


var App = () => {

  return (
    <Router>
    <Switch>
          <Route path="/" exact component={Landing}/>
          <Route path="/create_talent" exact component={CreateTalent}/>
          <Route path="/sign_up" exact component={SignUp}/>
          <Route path="/about" exact component={About}/>
          <Route path="/pricing" exact component={Pricing}/>
          <Route path="/login" exact component={Login}/>
          <Route path="/dashboard" exact component={Login}/>
          <Route path="/copyright" exact component={Login}/>
          <Route path="/privacy_center" exact component={Login}/>
          <Route path="/help_center" exact component={Login}/>
        </Switch>
    </Router>
  );
}

export default App;
