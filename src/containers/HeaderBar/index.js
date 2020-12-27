import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import queryString from 'querystring';

import { postSearch, userSearch } from '../../state/actionCreators/searchActionCreators';

import ProfileIcon from '../../components/ProfileIcon';
import SearchDark from '../../../public/icons/search_dark.svg';

import './HeaderBar.scss';

const HeaderBar = ({
  user, match, location, history, ...props
}) => {
  const [query, setQuery] = React.useState(queryString.parse(location.search.slice(1))?.query || '');

  const onSubmit = async (e) => {
    e.preventDefault();
    history.push(`/search?query=${query || ''}`);
  };

  return (
    <div id="header-bar-container">
      <header>
        <form onSubmit={onSubmit}>
          <SearchDark />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search or posts or users"
          />
        </form>

        <div id="header-bar-profile-container">
          <p>Hey {user?.firstName || 'there'}!</p>
          <ProfileIcon
            imgUrl={user?.profileUrl || ''}
            username={user?.username || ''}
            uid={user._id}
          />
        </div>
      </header>
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.auth.users?.[state.auth.userId] || {},
});

export default withRouter(connect(mapStateToProps, { postSearch, userSearch })(HeaderBar));
