/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Helmet } from 'react-helmet';

import ActionTypes from '../../../state/actionCreators';

import TabContainer from '../../Tabs/TabContainer';
import Button from '../../../components/Button';
import HeaderImage from '../../../components/HeaderImage';

import { generateMetaTitleFromPage } from '../../../constants';
import './Settings.scss';

const tabs = {
  personalization: 'Personalization',
  authentication: 'Authentication',
};

const Settings = ({
  userId, user, match, location, history,
  isLoading, errorMessage, updateUserById, setError,
}) => {
  // Sets default tab to 'Personalization' if match param 'tab' is invalid
  const [activeTab, setActiveTab] = React.useState(tabs?.[match?.params?.tab?.toLowerCase()] || tabs.personalization);

  // Personalization State
  const [firstName, setFirstName] = React.useState(user.firstName || '');
  const [lastName, setLastName] = React.useState(user.lastName || '');
  const [profileUrl, setProfileUrl] = React.useState(user.profileUrl || '');
  const [backgroundUrl, setBackgroundUrl] = React.useState(user.backgroundUrl || '');
  const [portfolioUrl, setPortfolioUrl] = React.useState(user.portfolioUrl || '');
  const [blurb, setBlurb] = React.useState(user.blurb || '');

  // Authentication State
  const [username, setUsername] = React.useState(user.username || '');
  const [oldPassword, setOldPassword] = React.useState('');
  const [newPassword, setNewPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');

  const handleSettingsUpdate = (e) => {
    e.preventDefault();

    // Check that password is being updated and that all required fields are included
    const isUpdatingPassword = !!oldPassword || !!newPassword || !!confirmPassword;
    const missingPasswordUpdateField = !oldPassword || !newPassword || !confirmPassword;
    const passwordsMatch = newPassword === confirmPassword;

    switch (activeTab) {
      case tabs.personalization:
        updateUserById(user._id, {
          firstName, lastName, profileUrl, backgroundUrl, portfolioUrl, blurb,
        },
        { successCallback: () => { window.location.reload(); } });
        break;
      case tabs.authentication:
        if (isUpdatingPassword && missingPasswordUpdateField) {
          setError(ActionTypes.FETCH_USER, 'Include all required fields to update password');
        } else if (!passwordsMatch) {
          setError(ActionTypes.FETCH_USER, 'Passwords don\'t match');
        } else {
          updateUserById(user._id, {
            username, authPassword: oldPassword, password: newPassword,
          }, { successCallback: () => window.location.reload() });
        }
        break;
      default:
        // eslint-disable-next-line no-console
        console.error('No registered tab selected');
    }
  };

  return (
    <div id="settings-container">
      <Helmet>
        <title>{generateMetaTitleFromPage('Settings')}</title>
      </Helmet>

      <HeaderImage
        backgroundUrl={user?.backgroundUrl}
        className="settings-header-image"
      />

      <main id="settings-content-container">
        <TabContainer
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          updateUrls
          urlBase="/settings"
        >
          <div label="Personalization">
            <form onSubmit={handleSettingsUpdate}>
              <fieldset>
                <legend>Change Name</legend>

                <div className="settings-input-container">
                  <label htmlFor="settings-first-name">First Name</label>
                  <input
                    id="settings-first-name"
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder="Enter first name"
                  />
                </div>
                <div className="settings-input-container">
                  <label htmlFor="settings-last-name">Last Name</label>
                  <input
                    id="settings-last-name"
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder="Enter last name"
                  />
                </div>
              </fieldset>

              <fieldset>
                <legend>Visual Identity</legend>

                <div className="settings-input-container">
                  <label htmlFor="settings-profile-photo">Profile Photo URL</label>
                  <input
                    id="settings-profile-photo"
                    type="url"
                    value={profileUrl}
                    onChange={(e) => setProfileUrl(e.target.value)}
                    placeholder="Enter url link to your profile photo (200px by 200px recommended)"
                  />
                </div>

                <div className="settings-input-container">
                  <label htmlFor="settings-background-banner">Background Banner URL</label>
                  <input
                    id="settings-background-banner"
                    type="url"
                    value={backgroundUrl}
                    onChange={(e) => setBackgroundUrl(e.target.value)}
                    placeholder="Enter url link to background banner (1920px by 600px recommended)"
                  />
                </div>

                <div className="settings-input-container">
                  <label htmlFor="settings-portfolio-url">Personal Portfolio URL</label>
                  <input
                    id="settings-portfolio-url"
                    type="url"
                    value={portfolioUrl}
                    onChange={(e) => setPortfolioUrl(e.target.value)}
                    placeholder="Enter url link to your personal portfolio website"
                  />
                </div>
              </fieldset>

              <fieldset>
                <legend>Personal Content</legend>

                <div className="settings-input-container">
                  <label htmlFor="settings-profile-blurb">Profile Blurb (max 100 characters)</label>
                  <textarea
                    id="settings-profile-blurb"
                    type="url"
                    value={blurb}
                    onChange={(e) => setBlurb(e.target.value)}
                    maxLength={100}
                    placeholder="Enter a short blurb about yourself (max 100 characters)"
                  />
                </div>
              </fieldset>

              <Button
                label="Update Preferences"
                isSubmit
              />
            </form>
          </div>

          <div label="Authentication">
            <form onSubmit={handleSettingsUpdate}>
              <fieldset>
                <legend>Sign Out</legend>
                <Button
                  label="Sign Out"
                  onClick={() => history.push('/signout')}
                  className="settings-signout-button"
                />
              </fieldset>

              <fieldset>
                <legend>Change Username</legend>

                <div className="settings-input-container">
                  <label htmlFor="settings-username">Username</label>
                  <input
                    id="settings-username"
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Enter username"
                  />
                </div>
              </fieldset>

              <fieldset>
                <legend>Change Password</legend>

                <div className="settings-input-container">
                  <label htmlFor="settings-old-password">Old Password</label>
                  <input
                    id="settings-old-password"
                    type="password"
                    value={oldPassword}
                    onChange={(e) => setOldPassword(e.target.value)}
                    placeholder="Enter old password"
                  />
                </div>

                <div className="settings-input-container">
                  <label htmlFor="settings-new-password">New Password</label>
                  <input
                    id="settings-new-password"
                    type="password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    placeholder="Enter new password"
                  />
                </div>

                <div className="settings-input-container">
                  <label htmlFor="settings-confirm-password">Confirm Password</label>
                  <input
                    id="settings-confirm-password"
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Confirm new password"
                  />
                </div>
              </fieldset>

              <Button
                label="Update Preferences"
                isSubmit
              />
            </form>
          </div>
        </TabContainer>
      </main>
    </div>
  );
};

export default Settings;
