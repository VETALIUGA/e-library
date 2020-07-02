import React from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';

const Header = (props) => {
    return (
        <section className="section header__section">
            <div className="container header__container">
                <div className="grid header__grid">
                    <div className="grid-item header__grid-item">
                        <h1 className="header__name">E-library</h1>
                    </div>
                    <div className="grid-item header__grid-item">
                        <nav className="header__navigation">
                            <Link className="header__navigation-link" to="/">Books grid</Link>
                        </nav>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Header;