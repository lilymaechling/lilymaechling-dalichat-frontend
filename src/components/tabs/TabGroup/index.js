import React from 'react';
import ProfileCard from '../../profile/ProfileCard';
import TabContainer from '../TabContainer';

import './TabGroup.scss';

const TabGroup = ({
  activeTab,
  setActiveTab,
  updateUrls = false,
  urlBase = '',
  className = '',
  imageUrl,
  username,
  blurb,
  portfolioUrl,
  fullName,
  numPosts,
  uid,
  children,
}) => (
  <div className={`tabgroup-container ${className}`}>
    <ProfileCard
      className="tabgroup-profile-card"
      imageUrl={imageUrl}
      uid={uid}
      username={username}
      portfolioUrl={portfolioUrl}
      blurb={blurb}
      fullName={fullName}
      numPosts={numPosts}
    />

    <TabContainer
      className="tabgroup-tab-container"
      activeTab={activeTab}
      setActiveTab={setActiveTab}
      updateUrls={updateUrls}
      urlBase={urlBase}
    >
      {children}
    </TabContainer>
  </div>
);

export default TabGroup;
