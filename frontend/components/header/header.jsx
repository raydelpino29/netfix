import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let foodId;
    let houseworkId;
    let musicId;
    let autoId;
    let fashionId;
    Object.values(this.props.categories).forEach((category) => {
      if (category.name === "Food" ) {
        foodId = category.id;
      } else if (category.name === "Housework" ) {
        houseworkId = category.id;
      } else if (category.name === "Music") {
        musicId = category.id;
      } else if (category.name === "Automobiles") {
        autoId = category.id;
      } else if (category.name === "Fashion") {
        fashionId = category.id;
      }
    });
    return (
      <nav>
        <ul className="header">
          <li>
            <ul className="header-left">
              <li className="logo">Netfix</li>
              <ul className='browse'>Browse
                <div className="browse-list">
                  <Link to="/category/myList">My List</Link>
                  <Link to={`/category/${foodId}`}>Food</Link>
                  <Link to={`/category/${houseworkId}`}>Housework</Link>
                  <Link to={`/category/${musicId}`}>Music</Link>
                  <Link to={`/category/${autoId}`}>Automobiles</Link>
                  <Link to={`/category/${fashionId}`}>Fashion</Link>
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
