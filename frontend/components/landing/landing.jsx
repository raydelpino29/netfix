import React from 'react';
import { Link } from 'react-router-dom';
import CategoryIndexContainer from '../videos/category_index_container';
import HeaderContainer from '../header/header_container';

class Landing extends React.Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount () {
    this.props.fetchAllVideos();
    this.props.fetchAllListItems();
  }

  handleClick () {
    if (this.props.myListStatus === "added") {
      debugger
      this.props.deleteListItem(this.props.myListVid.id);
    } else if (this.props.myListStatus === "not added") {
    this.props.createListItem({ user_id: this.props.currentUser.id,
      video_id: this.props.landingVideo.id });
    }
  }

  render () {
    let videoId;
    if (this.props.landingVideo) {
      videoId = this.props.landingVideo.id;
    }
    debugger
    if (this.props.currentUser) {
      return (
        <div className="landing-background">
          <div className="landing">
            <HeaderContainer />
            <div className="blurb">
              <div className="background-heading">
                <h1 className="blurb-title">Netfix Original</h1>
                <div className="subtitle">Watch Bob Vila's 5 Tips on Pest Control:</div>
                <div className="synopsis">Who else but the classic Bob Vila would know the best Tips
                   for putting an end to the pesky critters within your home?
                </div>
                <Link to={`/video/${videoId}`}><button>Play</button></Link>
                <button onClick={this.handleClick}>My List</button>
              </div>
            </div>
            <CategoryIndexContainer />
          </div>
        </div>
      );
    } else {
      return (
        <div className="pre-login-background">
          <img className="temp-logo" src="https://s3.us-east-2.amazonaws.com/netfix-dev/videos/thumbnails/000/000/netfix.png" />
          <div className="join-info">
            <p className="whats-next">See what's next.</p>
            <p className="anytime">Watch Anywhere. Cancel Anytime.</p>
            <Link to="/signup"><button className="join-button" >Join Free For a Month</button></Link>
          </div>
          <Link to="/login"><button className="sign-in-button">Sign In</button></Link>
        </div>
        )
      }
    };
  }

export default Landing;
