import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchAllCategories();
  }

  render() {

    const links = Object.values(this.props.categories).map((category, idx) => {
      return <Link key={idx} to={`/category/${category.id}`}>{category.name}</Link>
    });

    return (

      <nav>
        <ul className="header">
          <li>
            <ul className="header-left">
              <li className="logo"><img className="temp-logo" src="https://s3.us-east-2.amazonaws.com/netfix-dev/videos/thumbnails/000/000/netfix.png" />
</li>
              <ul className='browse'>Browse <i className="fa fa-caret-down" aria-hidden="true"></i>
                <div className="browse-list">
                  <Link to="/myList">My List</Link>
                  {links}
                </div>
              </ul>
            </ul>
          </li>
          <li>
            <ul className='header-right'>
              <ul className='profile'>Profile
                <div className="profile-list">
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
