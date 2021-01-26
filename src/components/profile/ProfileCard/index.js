import React from 'react';
import './ProfileCard.scss';
import ProfileIcon from '../ProfileIcon';

const ProfileCard = ({
  imageUrl, username, uid, className, blurb, portfolioUrl, fullName, numPosts,
}) => (
  <div className={`profile-card-container ${className}`}>
    <svg />
    <ProfileIcon imageUrl={imageUrl} uid={uid} username={username} className="profile-image" />
    <a href="/user/{uid}" className="portfolio-card-name">{fullName}</a>
    <a href="/user/{uid}" className="portfolio-card-username">{username}</a>
    <div>{blurb && <p>{blurb}</p>}</div>
    <div className="portfolio-card-portfolio-url">{portfolioUrl && <a href={portfolioUrl}>{portfolioUrl}</a>}</div>
    <p className="portfolio-card-posts">{numPosts} posts</p>
  </div>
);

export default ProfileCard;
