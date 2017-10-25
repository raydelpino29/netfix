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
      <div className='pre-login-background'>
        <div className='join-info'>
          <p className='whats-next'>See what's next.</p>
          <p className='anytime'>Watch Anywhere. Cancel Anytime.</p>
          <button className='join-button' ><Link to='/signup'>Join Free For a Month</Link></button>
        </div>
        <button className='sign-in-button'><Link to='/login'>Sign In</Link></button>
      </div>
    )
  }
};

export default Header;
