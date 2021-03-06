import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import Authentication from '../Authentication';

const Header = () => (
    <header className="p-3 bg-dark text-white">
        <div className="container-fluid">
            <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                <Link to="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
                    <svg
                        className="bi me-2"
                        width="40"
                        height="32"
                        role="img"
                        aria-label="Bootstrap"
                        viewBox="0 0 118 94"
                        fill="#fff"
                    >
                        <use xlinkHref="#bootstrap"></use>
                    </svg>
                </Link>

                <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                <li><NavLink to="/" className="nav-link px-2 text-secondary">Home</NavLink></li>
                <li><NavLink to="/pricing" className="nav-link px-2 text-white">Pricing</NavLink></li>
                <li><NavLink to="/faq" className="nav-link px-2 text-white">FAQs</NavLink></li>
                <li><NavLink to="/about" className="nav-link px-2 text-white">About</NavLink></li>
                </ul>

                <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
                    <input
                        type="search"
                        className="form-control form-control-dark"
                        placeholder="Search..."
                        aria-label="Search"
                    />
                </form>

                
                <Authentication />
                
            </div>
        </div>
    </header>
);


export default Header;
