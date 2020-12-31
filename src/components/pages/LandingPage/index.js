import React from 'react';
import { Link } from 'react-router-dom';

import HeaderLogo from '../../../../public/icons/dali_logo.svg';
import FooterGraphic from '../../../../public/images/landing_footer.png';

import './LandingPage.scss';

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
          Dartmouth’s own social media app, made by the DALI Lab.
          A close-knit community of like-minded individuals
          dedicated to inclusivity and continued learning.
        </p>

        <Link to="/signup" className="landing-link large">Sign Up Now</Link>
      </main>

      <img id="landing-footer-graphic" src={FooterGraphic} alt="presentational landing graphics" />
    </div>
  );
};

export default Landing;
