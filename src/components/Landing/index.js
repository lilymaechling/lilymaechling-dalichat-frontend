import React from 'react';
import { Link } from 'react-router-dom';

import HeaderLogo from '../../../public/icons/dali_logo.svg';
import FooterGraphic from '../../../public/images/landing_footer.png';

import './Landing.scss';

const Landing = () => {
  return (
    <div id="landing-container">
      <div id="landing-header-container">
        <HeaderLogo />
        <nav id="landing-nav-container">
          <Link to="/signin" className="landing-link clear">Sign In</Link>
          <Link to="/signup" className="landing-link">Sign Up</Link>
        </nav>
      </div>

      <main id="landing-main-content">
        <h1>Welcome to DALIChat</h1>
        <h2>Dartmouth&apos;s own social media app</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat.
        </p>

        <Link to="/signup" className="landing-link large">Sign Up Now</Link>
      </main>

      <img id="landing-footer-graphic" src={FooterGraphic} alt="presentational landing graphics" />
    </div>
  );
};

export default Landing;
