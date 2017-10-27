import React from 'react';

const Header = () => {
  return (
    <nav>
      <ul className="header">
        <li>
          <ul className="header-left">
            <li className="logo">Netfix</li>
            <li className='browse'>Browse</li>
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
};

export default Header;
