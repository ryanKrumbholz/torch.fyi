import React from 'react';
import {BrowserRouter as Router, Link} from "react-router-dom";
import './header.sass';

var Header = props => {
  return (
    <div className="header">
      <Link to="/"><h1>Torch.fyi</h1></Link>
      <ul>
        <Router>
          {props.list}
        </Router>
      </ul>
    </div>
  );
}

export default Header;
