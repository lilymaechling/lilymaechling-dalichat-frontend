/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Link } from 'react-router-dom';

import Button from '../../generic/Button';
import ActionTypes from '../../../state/helpers';
import BannerImage from '../../../../public/images/auth_sidebar.png';

import '../SignInPanel/SignInPanel.scss';

const SignUpPanel = ({
  authenticated, history, setError, clearError, signUpUser,
}) => {
  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  React.useEffect(() => { if (authenticated) { history.push('/'); } }, [authenticated]);

  // ?: This is being removed from DOM and reloaded to DOM on AUTH_USER request
  const handleSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (!firstName) {
      setError(ActionTypes.AUTH_USER, 'Please enter your first name!');
    } else if (!lastName) {
      setError(ActionTypes.AUTH_USER, 'Please enter your last name!');
    } else if (!email) {
      setError(ActionTypes.AUTH_USER, 'Please enter an email address!');
    } else if (!username) {
      setError(ActionTypes.AUTH_USER, 'Please enter a username!');
    } else if (!password) {
      setError(ActionTypes.AUTH_USER, 'Please enter a password!');
    } else {
      clearError(ActionTypes.AUTH_USER);
      signUpUser(email, username, password, firstName, lastName);
    }
  };

  return (
    <div id="signin-container">
      <div id="signin-banner-container"><img id="signin-banner" src={BannerImage} alt="sign in banner" /></div>
      <form id="signin-content" onSubmit={handleSubmit}>
        <h1>Sign Up</h1>
        <h2>Welcome to DALIChat!</h2>

        <div className="signin-input-container">
          <label htmlFor="signup-firstname">First Name</label>
          <input
            id="signup-firstname"
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>

        <div className="signin-input-container">
          <label htmlFor="signup-lastname">Last Name</label>
          <input
            id="signup-lastname"
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>

        <div className="signin-input-container">
          <label htmlFor="signup-email">Email</label>
          <input
            id="signup-email"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="signin-input-container">
          <label htmlFor="signup-username">Username</label>
          <input
            id="signup-username"
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="signin-input-container">
          <label htmlFor="signup-password">Password</label>
          <input
            id="signup-password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <Button label="Sign Up" isSubmit className="signin-submit-button" />

        <p>Already have an account? <Link to="/signin">Sign In</Link></p>
      </form>
    </div>
  );
};

export default SignUpPanel;
