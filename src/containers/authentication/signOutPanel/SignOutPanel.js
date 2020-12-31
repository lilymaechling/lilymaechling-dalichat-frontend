import React from 'react';
import { Redirect } from 'react-router-dom';

const SignOutPanel = ({ signOutUser }) => {
  React.useEffect(() => {
    signOutUser();
  }, []);
  return (<Redirect to="/" />);
};

export default SignOutPanel;
