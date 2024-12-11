/*import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { useAuth } from "../../store/auth";


export const Navbar = () => {
  const { isLoggedIn } = useAuth();
    return (
      <>
        <header>
          <div className="container">
            <div className="logo-brand">
              <NavLink to="/">OnlineVoting </NavLink>
            </div>
  
            <nav>
              <ul>
                <li>
                  <NavLink to="/"> Home </NavLink>
                </li>
                <li>
                  <NavLink to="/about"> About </NavLink>
                </li>
                <li>
                  <NavLink to="/voting"> Voting </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard"> Dashboard </NavLink>
                </li>
                <li>
                  <NavLink to="/contact"> Contact </NavLink>
                </li>
                {isLoggedIn ? (
                <li>
                  <NavLink to="/logout">Logout</NavLink>
                </li>
              ) : (
                <>
                  <li>
                    <NavLink to="/register"> Register </NavLink>
                  </li>
                  <li>
                    <NavLink to="/login"> Login </NavLink>
                  </li>
                </>
              )}
              </ul>
            </nav>
          </div>
        </header>
      </>
    );
};*/



import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { IoMenu, IoClose } from "react-icons/io5";
import "./Navbar.css";
import { useAuth } from "../../store/auth";

const Navbar = () => {

  const { isLoggedIn } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="navbar-container">
        <NavLink to="/" className="navbar-logo">
          OnlineVoting
        </NavLink>
        <div className="menu-icon" onClick={toggleMenu}>
          {isMenuOpen ? <IoClose className="icon" /> : <IoMenu className="icon" />}
        </div>
        <nav className={`nav-menu ${isMenuOpen ? "active" : ""}`}>
          <ul className="nav-list">
            <li className="nav-item">
              <NavLink to="/" className="nav-link" onClick={closeMenu}>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/voting" className="nav-link" onClick={closeMenu}>
                Voting
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/dashboard" className="nav-link" onClick={closeMenu}>
                Dashboard
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/contact" className="nav-link" onClick={closeMenu}>
                Contact
              </NavLink>
            </li>
            {/*
            <li className="nav-item">
              <NavLink to="/login" className="nav-link" onClick={closeMenu}>
                Login
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/register" className="nav-link" onClick={closeMenu}>
                Register
              </NavLink>
            </li>*/}
            {isLoggedIn ? (
                <li>
                  <NavLink to="/logout" className="nav-link" onClick={closeMenu}>Logout </NavLink>
                </li>
              ) : (
                <>
                  <li>
                    <NavLink to="/register" className="nav-link" onClick={closeMenu}> Register </NavLink>
                  </li>
                  <li>
                    <NavLink to="/login" className="nav-link" onClick={closeMenu}> Login </NavLink>
                  </li>
                </>
              )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;




