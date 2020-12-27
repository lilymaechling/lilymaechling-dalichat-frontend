import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { signOutUser } from '../../../state/actionCreators/authActionCreators';

class SearchPane extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div>
        <NavLink to="/" onClick={() => this.props.signOutUser()}>Sign Out</NavLink>
      </div>
    );
  }
}

export default connect(null, { signOutUser })(SearchPane);
