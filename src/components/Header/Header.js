import React from 'react';
import './Header.scss';
import { NavLink } from 'react-router-dom';

const Header = (props) => (
  <section className="section header__section">
    <div className="container header__container">
      <div className="grid header__grid">
        <div className="grid-item header__grid-item">
          <h1 className="article article--lg header__name">E-library</h1>
        </div>
        <div className="grid-item header__grid-item">
          <nav className="header__navigation">
            <NavLink className="header__navigation-link" activeClassName="header__navigation-link--active" exact to="/" >Books grid</NavLink>
            <NavLink className="header__navigation-link" activeClassName="header__navigation-link--active" to="/newBook">Add book</NavLink>
          </nav>
        </div>
      </div>
    </div>
  </section>
);

export default Header;
