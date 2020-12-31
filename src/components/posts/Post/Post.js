import React from 'react';

import PostContent from '../PostContent';
import ProfileIcon from '../../profile/ProfileIcon';

import './Post.scss';

const Post = ({
  postContent = {}, className = '',
  userId, likePost,
}) => (
  <div className={`post-container ${className}`}>
    <ProfileIcon
      imgUrl={postContent.owner?.profileUrl}
      username={postContent.owner?.username}
      uid={postContent.owner?._id || ''}
      className="post-owner-profile"
    />

    <PostContent
      fullName={postContent.owner?.fullName}
      isVerified={postContent.owner?.isVerified}
      username={postContent.owner?.username}
      numLikes={postContent.numLikes}
      userHasLiked={postContent.likes?.includes(userId)}
      content={postContent.content}
      onLikeClick={() => likePost(postContent._id, userId)}
      uid={postContent.owner?._id || ''}
      className="post-content-container"
    />
  </div>
);

export default Post;
