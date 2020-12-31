/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Link } from 'react-router-dom';

import ActionTypes from '../../../state/helpers';
import Button from '../../generic/Button';

import BannerImage from '../../../../public/images/auth_sidebar.png';
import './SignInPanel.scss';

const SignInPanel = ({
  authenticated, history,
  setError, clearError, signInUser,
}) => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  React.useEffect(() => { if (authenticated) { history.push('/'); } }, [authenticated]);

  // ?: This is being removed from DOM and reloaded to DOM on AUTH_USER request
  const handleSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (!username) {
      setError(ActionTypes.AUTH_USER, 'Please enter a username!');
    } else if (!password) {
      setError(ActionTypes.AUTH_USER, 'Please enter a password!');
    } else {
      clearError(ActionTypes.AUTH_USER);
      signInUser(username, password);
    }
  };

  return (
    <div id="signin-container">
      <div id="signin-banner-container">
        <img id="signin-banner" src={BannerImage} alt="sign in banner" />
      </div>
      <form id="signin-content" onSubmit={handleSubmit}>
        <h1>Sign In</h1>
        <h2>Welcome Back!</h2>

        <div className="signin-input-container">
          <label htmlFor="signin-username">Username</label>
          <input id="signin-username" type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>

        <div className="signin-input-container">
          <label htmlFor="signin-password">Password</label>
          <input id="signin-password" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>

        <Button label="Sign In" isSubmit className="signin-submit-button" />

        <p>Don&apos;t have an account? <Link to="/signup">Sign Up</Link></p>
        <p>Forgot your password? <a href="mailto:contact@dali.dartmouth.edu">Click Here</a></p>
      </form>
    </div>
  );
};

export default SignInPanel;
