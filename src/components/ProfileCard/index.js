import React from 'react';
import ProfileIcon from '../ProfileIcon';
import VerifiedUser from '../../../public/icons/verified_user.svg';
import './ProfileCard.scss';

const ProfileCard = ({
  fullName, profileUrl, username, blurb, portfolioUrl, numPosts, className = '',
}) => (
  <div className={`profile-card-container ${className}`}>
    <VerifiedUser />
    <ProfileIcon imgUrl={profileUrl} username={username} className="profile-image" />
    <div className="portfolio-card-name">{fullName}</div>
    <div className="portfolio-card-username">@{username}</div>

    {blurb && <p className="portfolio-card-blurb">{blurb}</p>}
    {portfolioUrl && <a href={portfolioUrl} className="portfolio-card-portfolio-url">{portfolioUrl}</a>}
    <p className="portfolio-card-posts">{numPosts} posts</p>
  </div>
);

export default ProfileCard;
