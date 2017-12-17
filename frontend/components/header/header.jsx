

import React from 'react';
import { Link } from 'react-router-dom';
import SearchInputContainer from './search_input_container';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchAllCategories();
  }

  render() {
    const links = Object.values(this.props.categories).map((category, idx) => {
      let itemClass = "browse-item"
      switch(category.name) {
        case "Food":
          return (
            <div key={idx} className={itemClass}>
              <Link key={idx} to={`/category/${category.id}`}>
                <i className="fa fa-cutlery" aria-hidden="true"></i><p>{category.name}</p></Link>
            </div>
          )
        case "Housework":
          return (
            <div key={idx} className={itemClass}>
              <Link key={idx} to={`/category/${category.id}`}><i className="fa fa-home" aria-hidden="true"></i><p>{category.name}</p></Link>
            </div>
          )
        case "Music":
          return (
            <div key={idx} className={itemClass}>
              <Link key={idx} to={`/category/${category.id}`}><i className="fa fa-music" aria-hidden="true"></i><p>{category.name}</p></Link>
            </div>
          )
        case "Automobiles":
          return (
            <div key={idx} className={itemClass}>
              <Link key={idx} to={`/category/${category.id}`}><i className="fa fa-car" aria-hidden="true"></i><p>{category.name}</p></Link>
            </div>
          )

        default:
          return
      }
    });
    links.unshift(

    )
    let headerClass = "header";
    let headerLeftClass = "header-left";
    let profileClass = "profile"
    let profileListClass = "profile-list";
    let email = this.props.currentUser ? this.props.currentUser.email : null;

    if (this.props.classIndicator) {
      headerClass = "no-vids-header";
      headerLeftClass = "no-vids-left";
      profileClass += " no-vids-profile";
      profileListClass += " no-vids-logout"
    }
    if (this.props.headerClass === "show-page") {
      headerClass = "header category-page"
    } else if (!this.props.currentUser || this.props.location.pathname.includes("/video")) {
      headerClass = "header splash"
    }

    return (
      <nav>
        <ul className={headerClass}>
          <li>
            <ul className={headerLeftClass}>
              <Link to='/'><li className="logo"><img className="temp-logo" src="https://s3.us-east-2.amazonaws.com/netfix-dev/videos/thumbnails/000/000/netfix.png" /></li></Link>
              <ul className="browse">Browse <i className="fa fa-caret-down" aria-hidden="true"></i>
                <div className="browse-list">
                  <div className="browse-item">
                    <Link to="/myList">
                      <i className="fa fa-list" aria-hidden="true"></i>
                      <p>My List</p>
                    </Link>
                  </div>
                  {links}
                </div>
              </ul>
            </ul>
          </li>
          <li>
            <ul className='header-right'>
              <SearchInputContainer location={this.props.location} history={this.props.history}/>
              <ul className={profileClass}><i className="fa fa-user" aria-hidden="true"></i>{email}
                <div className={profileListClass}>
                  <button onClick={this.props.logout}>Logout of NetFix</button>
                </div>
              </ul>
            </ul>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Header;
