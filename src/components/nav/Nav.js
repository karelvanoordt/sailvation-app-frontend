import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/nav.css';
import {
  FaTwitter, FaFacebook, FaVimeo, FaInstagram, FaPinterest,
} from 'react-icons/fa';
import img from '../../styles/Sail.png';

function Nav() {
  const updateStorage = () => {
    localStorage.setItem('cruiseId', 0);
  };
  return (
    <div className="nav-con">
      <div className="logo-con">
        <img src={img} alt="Sailvation logo" className="logo" />
      </div>
      <nav className="links-con">
        <ul>
          <li className="nav-cruise">
            <Link to="/">Cruises</Link>
          </li>
          <li className="nav-cruise">
            <Link to="/reservations">Reservations</Link>
          </li>
          <li className="nav-cruise">
            <Link to="/cruises/reservation" onClick={updateStorage}>Make a reservation</Link>
          </li>
          {/* <li>
            <Link to="/cruises/:id/reservation/:id/destination">Destinations</Link>
          </li> */}
          <li className="nav-cruise">
            <Link to="/login">Login</Link>
          </li>
          <li className="nav-cruise">
            <Link to="/signup">Sign Up</Link>
          </li>
        </ul>
      </nav>
      <section>
        <div className="icons">
          <FaTwitter style={{ color: 'black', fontSize: '1rem', margin: '6px' }} />
          <FaFacebook style={{ color: 'black', fontSize: '1rem', margin: '6px' }} />
          <FaVimeo style={{ color: 'black', fontSize: '1rem', margin: '6px' }} />
          <FaInstagram style={{ color: 'black', fontSize: '1rem', margin: '6px' }} />
          <FaPinterest style={{ color: 'black', fontSize: '1rem', margin: '6px' }} />
        </div>
        <div className="pub">
          <p>
            &copy;
            {' '}
            {new Date().getFullYear()}
            {' '}
            Sailvation Cruises.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Nav;
