import React from 'react';

import HeartFilled from '../../../public/icons/heart_filled.svg';
import HeartEmpty from '../../../public/icons/heart_empty.svg';

import VerifiedUser from '../../../public/icons/verified_user.svg';

import './PostContent.scss';

const PostContent = ({
  fullName, isVerified, username, numLikes, userHasLiked, content,
  onLikeClick, onNameClick, className = '',
}) => (
  <div className={`post-content-container ${className}`}>
    <div className="post-header-container">
      <div className="post-header-left-container">
        <div className="post-name-container">{fullName}</div>
        {isVerified ? <VerifiedUser /> : null}
        <p className="post-username">@{username}</p>
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
