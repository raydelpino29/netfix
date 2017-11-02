import React from 'react';
import { Link } from 'react-router-dom';
import CategoryIndexContainer from '../videos/category_index_container';
import HeaderContainer from '../header/header_container';

class Landing extends React.Component {
  constructor(props){
    super(props);
  }

  render () {
    if (this.props.currentUser) {
      return (
        <div className="landing-background">
          <div className="landing">
            <HeaderContainer />
            <div className="temp-welcome">
              <h1>Hi There, {this.props.currentUser.email}!</h1>
              <button onClick={this.props.logout}>Logout</button>
            </div>
            <p className="background-heading"><h1>Netfix</h1><h2>Original</h2>
              <p className="subtitle">Watch Bob Vila's 5 Tips on Pest Control</p>
              <div className="synopsis">Who else but the classic Bob Vila would know the best Tips
                 for putting an end to the pesky critters within your home? Watch this Netfix
                 Original to find out what you can do to stop these tiny home invaders.
              </div>
            </p>
            <CategoryIndexContainer />
          </div>
        </div>
      );
    } else {
      return (
        <div className="pre-login-background">
          <h1 className="temp-logo">Netfix</h1>
          <div className="join-info">
            <p className="whats-next">See what's next.</p>
            <p className="anytime">Watch Anywhere. Cancel Anytime.</p>
            <button className="join-button" ><Link to="/signup">Join Free For a Month</Link></button>
          </div>
          <button className="sign-in-button"><Link to="/login">Sign In</Link></button>
        </div>
        )
      }
    };
  }

export default Landing;
