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
    debugger
    const links = Object.values(this.props.categories).map((category, idx) => {
      return <Link key={idx} to={`/category/${category.id}`}>{category.name}</Link>
    });

    let headerClass = "header";
    let headerLeftClass = "header-left";
    let profileClass = "profile"
    let profileListClass = "profile-list";

    if (this.props.classIndicator) {
      headerClass = "no-vids-header";
      headerLeftClass = "no-vids-left";
      profileClass += " no-vids-profile";
      profileListClass += " no-vids-logout"
    }

    if (this.props.headerClass === "show-page") {
      headerClass = "header category-page"
    } else if (this.props.headerClass === "splash") {
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
                  <Link to="/myList">My List</Link>
                  {links}
                </div>
              </ul>
            </ul>
          </li>
          <li>
            <SearchInputContainer location={this.props.location} history={this.props.history}/>
            <ul className='header-right'>
              <ul className={profileClass}><i className="fa fa-user" aria-hidden="true"></i> Profile
                <div className={profileListClass}>
                  <button onClick={this.props.logout}>Logout</button>
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
