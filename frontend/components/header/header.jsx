import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({currentUser, logout}) => {
  if (currentUser) {
    return (
      <div>
        <h1>Hi There, {currentUser.email}!</h1>
        <button onClick={logout}>Logout</button>
      </div>
    );
  } else {
    return (
      <div>
        <button><Link to='/signup'>Join Free For a Month</Link></button>
        <button><Link to='/login'>Sign In</Link></button>
      </div>
    )
  }
};

export default Header;
