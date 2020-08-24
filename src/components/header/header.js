import React from 'react';
import './header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="shop-header row">
      <Link to="/">
        <div className="logo text-dark">HotDOGS</div>
      </Link>
      <Link to="/cart">
        <div className="shopping-cart">
          <i className="cart-icon fa fa-shopping-cart" />
          addHotDog
        </div>
      </Link>
    </header>
  );
};

export default Header;
