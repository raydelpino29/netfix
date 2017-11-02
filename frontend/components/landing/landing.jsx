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
            <div className="blurb">
              <p className="background-heading"><h1 className="blurb-title">Netfix Original</h1>
                <p className="subtitle">Watch Bob Vila's 5 Tips on Pest Control:</p>
                <div className="synopsis">Who else but the classic Bob Vila would know the best Tips
                   for putting an end to the pesky critters within your home?
                </div>
              </p>
              <div className="blurb-buttons">
                <button className="play-button"><i class="fa fa-play" aria-hidden="true"></i>Play</button>
                <button className="list-button"><i class="fa fa-plus" aria-hidden="true"></i>My List</button>
              </div>
            </div>
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
