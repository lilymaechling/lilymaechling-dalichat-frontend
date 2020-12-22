import React from 'react';
import { Link } from 'react-router-dom';

import HeartFilled from '../../../public/icons/heart_filled.svg';
import HeartEmpty from '../../../public/icons/heart_empty.svg';

import VerifiedUser from '../../../public/icons/verified_user.svg';

import './PostContent.scss';

const PostContent = ({
  fullName, isVerified, username, numLikes, userHasLiked, content, uid,
  onLikeClick, className = '',
}) => (
  <div className={`post-content-container ${className}`}>
    <div className="post-header-container">
      <div className="post-header-left-container">
        <Link to={`/user/${uid}`} className="post-name-container">{fullName}</Link>
        {isVerified ? <VerifiedUser /> : null}
        <Link to={`/user/${uid}`} className="post-username">@{username}</Link>
      </div>

      <button type="button" onClick={onLikeClick} className="post-likes-container">
        {userHasLiked ? <HeartFilled /> : <HeartEmpty />}
        <p>{numLikes}</p>
      </button>
    </div>

    <p className="post-content">{content}</p>
  </div>
);

export default PostContent;
