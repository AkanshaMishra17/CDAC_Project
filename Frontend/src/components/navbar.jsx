import React from 'react';
import { Link } from 'react-router-dom';
import LogoImage from './../assets/logo.png';
//import 'bootstrap/dist/css/bootstrap.min.css';

export function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/home">
          <img src={LogoImage} alt="Logo" style={styles.logo} />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/home" style={styles.navLink}>Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/cart" style={styles.navLink}>Cart</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/order" style={styles.navLink}>Orders</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/profile" style={styles.navLink}>Profile</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/categoryadd" style={styles.navLink}>Add Menu</Link>
            </li>
          </ul>
        </div>
      </div>
      <style jsx>{`
        .navbar {
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        .nav-link {
          transition: color 0.3s ease;
        }
        .nav-link:hover {
          color: #0056b3;
        }
        .navbar-brand img {
          transition: transform 0.3s ease;
        }
        .navbar-brand img:hover {
          transform: scale(1.1);
        }
      `}</style>
    </nav>
  );
}

const styles = {
  logo: {
    width: '60px',
    height: '60px',
  },
  navLink: {
    fontSize: '1.2rem',
    color: '#007bff',
  },
};

export default Navbar;
