import React from 'react';
import { Helmet } from 'react-helmet';

import { generateMetaTitleFromPage } from '../../constants';
import './Fallback.scss';

const Fallback = () => {
  return (
    <div id="fallback-container">
      <Helmet>
        <title>{generateMetaTitleFromPage('Page Not Found')}</title>
      </Helmet>

      <div>Uh oh... URL Not Found! Please contact the system administrator.</div>
    </div>
  );
};

export default Fallback;
