import React from 'react';
import './ProfileIcon.scss';

const ProfileIcon = ({
  imgUrl = '', username = '', onClick = () => {}, className = '',
}) => (
  <img className={`profile-icon ${className}`} src={imgUrl} alt={`profile of user ${username}`} />
);

export default ProfileIcon;
