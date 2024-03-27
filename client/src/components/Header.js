import React from 'react';
import logo from '../images/oorigines_logo.png';
import search_icon from '../images/search_icon.png'
import cart_icon from '../images/shopping_cart.png'
import favorite_icon from '../images/favorite_icon.png'
import profile_icon from '../images/profile_icon.png'
import './Header.css'; // Import CSS for header styling

const Header = () => {
  return (
    <header>
    <div className="header">
      <img src={logo} alt="Logo" />
    </div>
      <div className="header-icons">
        <div className="search">
          <img src={search_icon} alt="search icon" />
          {/* Add search functionality here */}
        </div>
        <div className="cart">
        <img src={cart_icon} alt="cart icon" />
          {/* Add shopping cart functionality here */}
        </div>
        <div className="favorite">
        <img src={favorite_icon} alt="favorite icon" />
          {/* Add favorite functionality here */}
        </div>
        <div className="profile">
        <img src={profile_icon} alt="profile icon" />
          {/* Add profile functionality here */}
        </div>
      </div>
    </header>
  );
};

export default Header;
