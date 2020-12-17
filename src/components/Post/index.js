import React from 'react';

import HeartFilled from '../../../public/icons/heart_filled.svg';
import HeartEmpty from '../../../public/icons/heart_empty.svg';

import VerifiedUser from '../../../public/icons/verified_user.svg';

import './Post.scss';

function Post({
  fullName, isVerified, username, likes, userHasLiked, content,
  onLikeClick, onNameClick,
}) {
  return (
    <div className="post-container">
      <div className="post-header-container">
        <div className="post-header-left-container">
          <div className="post-name-container">{fullName}</div>
          {isVerified ? <VerifiedUser /> : null}
          <p className="post-username">@{username}</p>
        </div>

        <button type="button" onClick={onLikeClick} className="post-likes-container">
          {userHasLiked ? <HeartFilled /> : <HeartEmpty />}
          <p>{likes}</p>
        </button>
      </div>

      <p className="post-content">{content}</p>
    </div>
  );
}

export default Post;
