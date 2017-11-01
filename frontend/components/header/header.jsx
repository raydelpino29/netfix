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

    const links = Object.values(this.props.categories).map((category) => {
      return <Link to={`/category/${category.id}`}>{category.name}</Link>
    });

    return (

      <nav>
        <ul className="header">
          <li>
            <ul className="header-left">
              <li className="logo">Netfix</li>
              <ul className='browse'>Browse
                <div className="browse-list">
                  <Link to="/myList">My List</Link>
                  {links}
                </div>
              </ul>
            </ul>
          </li>
          <li>
            <ul className='header-right'>
              <li className='search'>Search</li>
              <li className='profile'>Profile</li>
            </ul>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Header;
