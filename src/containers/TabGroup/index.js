import React from 'react';
import TabContainer from '../TabContainer';
import ProfileCard from '../../components/ProfileCard';
import './TabGroup.scss';

const TabGroup = ({
  activeTab, setActiveTab, user, children, className = '',
}) => {
  const {
    fullName, profileUrl, username, blurb, portfolioUrl, numPosts,
  } = user;

  return (
    <div className={`tabgroup-container ${className}`}>
      <ProfileCard
        fullName={fullName}
        profileUrl={profileUrl}
        username={username}
        blurb={blurb}
        portfolioUrl={portfolioUrl}
        numPosts={numPosts}
        className="tabgroup-profile-card"
      />

      <TabContainer
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        className="tabgroup-tab-container"
      >
        {children}
      </TabContainer>
    </div>
  );
};

export default TabGroup;
