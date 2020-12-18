import React from 'react';
import PostContent from '../PostContent';
import ProfileIcon from '../ProfileIcon';
import './Post.scss';

const Post = ({ postContent, onLikeClick, onProfileClick }) => {
  return (
    <div className="post-container">
      <ProfileIcon
        imgUrl={postContent?.owner?.profileUrl}
        username={postContent?.owner?.username}
        onClick={onProfileClick}
        className="post-owner-profile"
      />

      <PostContent
        fullName={postContent.owner.fullName}
        isVerified={postContent.owner.isVerified}
        username={postContent.owner.username}
        likes={postContent.likes}
        userHasLiked={false}
        content={postContent.content}
        onLikeClick={onLikeClick}
        onNameClick={onProfileClick}
      />
    </div>
  );
};

export default Post;
