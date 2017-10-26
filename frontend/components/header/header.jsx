import React from 'react';

const Header = () => {
  return (
    <nav>
      <ul className="header">
        <li className='logo' >Netfix</li>
        <li className='browse'>Browse</li>
        <li className='search'>Search</li>
        <li className='profile'>Profile</li>
      </ul>
    </nav>
  );
};

export default Header;
