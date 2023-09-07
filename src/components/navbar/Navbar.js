import React from 'react';
import { Link, useLocation  } from 'react-router-dom';
const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="main-nav">
      <Link className="main-nav-logo" to="/">
      <img
          className="main-nav-logo-image"
          src="./img/argentBankLogo.png"
          alt="Argent Bank Logo"
        />
      </Link>
      <div>
        {location.pathname === '/User' ? (
          <>
            <Link className="main-nav-item" to="/User">
              <i className="fa fa-user-circle"></i>
              Tony
            </Link>
            <Link className="main-nav-item" to="/">
              <i className="fa fa-sign-out"></i>
              Sign Out
            </Link>
          </>
        ) : (
          <Link className="main-nav-item" to="/SignIn">
            <i className="fa fa-user-circle"></i>
            Sign In
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
