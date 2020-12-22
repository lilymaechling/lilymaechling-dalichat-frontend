import React from 'react';
import { Link } from 'react-router-dom';
import DefaultBackground from '../../../public/images/default_background.png';
import './ProfileIcon.scss';

const ProfileIcon = ({
  imgUrl, username, uid, className = '',
}) => (
  <Link className={`profile-icon-container ${className}`} to={`/user/${uid}`}>
    {imgUrl
      ? <img className="profile-icon" src={imgUrl} alt={`profile of user ${username}`} />
      : <img className="profile-icon" src={DefaultBackground} alt="default profile" />}
  </Link>
);

export default ProfileIcon;
