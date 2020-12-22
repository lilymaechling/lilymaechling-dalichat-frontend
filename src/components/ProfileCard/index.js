import React from 'react';
import { Link } from 'react-router-dom';

import ProfileIcon from '../ProfileIcon';
import VerifiedUser from '../../../public/icons/verified_user.svg';
import './ProfileCard.scss';

const ProfileCard = ({
  fullName, profileUrl, username, blurb, portfolioUrl, numPosts, uid, className = '',
}) => (
  <div className={`profile-card-container ${className}`}>
    <VerifiedUser />
    <ProfileIcon imgUrl={profileUrl} username={username} uid={uid} className="profile-image" />
    <Link to={`/user/${uid}`} className="portfolio-card-name">{fullName}</Link>
    <Link to={`/user/${uid}`} className="portfolio-card-username">@{username}</Link>

    {blurb && <p className="portfolio-card-blurb">{blurb}</p>}
    {portfolioUrl && <a href={portfolioUrl} className="portfolio-card-portfolio-url">{portfolioUrl}</a>}
    <p className="portfolio-card-posts">{numPosts} posts</p>
  </div>
);

export default ProfileCard;
