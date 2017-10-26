import React from 'react';
import { Link } from 'react-router-dom';
import CategoryIndexContainer from '../videos/category_index_container';
import Header from '../header/header';

const Landing = ({currentUser, logout}) => {
  if (currentUser) {
    return (
      <div>
        <Header />
        <h1>Hi There, {currentUser.email}!</h1>
        <button onClick={logout}>Logout</button>
        <CategoryIndexContainer />
      </div>
    );
  } else {
    return (
      <div className='pre-login-background'>
        <h1 className='temp-logo'>Netfix</h1>
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

export default Landing;
