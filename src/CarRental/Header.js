import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'; // For custom styles

const Header = () => {
  return (
    <header className='container-fluid px-5 fixed-header'>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            <h4 style={{ fontFamily: "'Oswald', sans-serif" }}>
              <span className='text-danger'>Priya</span> Car Travels
            </h4>
          </NavLink>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
            aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link custom-nav" to="/">
                  <span className="first-letter">H</span>ome
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link custom-nav" to="/About">
                  <span className="first-letter">A</span>bout
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link custom-nav" to="/Services">
                  <span className="first-letter">S</span>ervices
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link custom-nav" to="/Cars">
                  <span className="first-letter">C</span>ars
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link custom-nav" to="/Contact">
                  <span className="first-letter">C</span>ontact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
