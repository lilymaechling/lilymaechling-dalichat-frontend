import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { signOutUser } from '../../../state/actionCreators/authActionCreators';

const SignOutPanel = (props) => {
  React.useEffect(() => {
    props.signOutUser();
  }, []);
  return (<Redirect to="/" />);
};

export default connect(null, { signOutUser })(SignOutPanel);
