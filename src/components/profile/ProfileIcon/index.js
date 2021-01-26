import React from 'react';
import './ProfileIcon.scss';

const ProfileIcon = ({
  imageUrl, username, uid, className,
}) => (
  <div className={`profile-icon-container ${className}`}>
    <img className="profile-icon" src={imageUrl} alt={`profile of user ${username}`} />
  </div>
);

export default ProfileIcon;
