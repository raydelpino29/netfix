import React from 'react';
import { Link } from 'react-router-dom';
import CategoryIndexContainer from '../videos/category_index_container';
import Header from '../header/header';

class Landing extends React.Component {
  constructor(props){
    super(props);
  }

  render () {
    if (this.props.currentUser) {
      return (
        <div className='landing-background'>
          <div className='landing'>
            <Header />
            <div className='temp-welcome'>
              <h1>Hi There, {this.props.currentUser.email}!</h1>
              <button onClick={this.props.logout}>Logout</button>
            </div>
            <CategoryIndexContainer />
          </div>
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
  }

export default Landing;
