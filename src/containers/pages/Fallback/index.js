import React from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';

import Button from '../../../components/Button';
import { generateMetaTitleFromPage } from '../../../constants';

import './Fallback.scss';
import HeaderImage from '../../../components/HeaderImage';

const Fallback = ({
  user, history, location, match,
}) => {
  return (
    <div id="fallback-container">
      <Helmet>
        <title>{generateMetaTitleFromPage('Page Not Found')}</title>
      </Helmet>

      <HeaderImage
        backgroundUrl={user?.backgroundUrl}
        className="fallback-header-image"
      />

      <main id="fallback-content-container">
        <h1>404</h1>
        <h2>This isn&apos;t a page :\</h2>
        <Button
          label="Go Home"
          onClick={() => history.push('/')}
        />
      </main>
      {/* <div>Uh oh... URL Not Found! Please contact the system administrator.</div> */}
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.auth.users?.[state.auth.userId] || {},
});

export default connect(mapStateToProps, {})(Fallback);
