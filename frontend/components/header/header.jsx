import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let foodPath;
    let houseworkPath;
    let musicPath;
    let autoPath;
    let fashionPath;
    return (
      <nav>
        <ul className="header">
          <li>
            <ul className="header-left">
              <li className="logo">Netfix</li>
              <ul className='browse'>Browse
                <div className="browse-list">
                  <Link to='/'>My List</Link>
                  <Link to='/'>Food</Link>
                  <Link to='/'>Housework</Link>
                  <Link to='/'>Music</Link>
                  <Link to='/'>Automobiles</Link>
                  <Link to='/'>Fashion</Link>
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
