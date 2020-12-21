import React from 'react';
import { connect } from 'react-redux';

import ActionTypes from '../../state/actions';
import { likePost } from '../../state/actions/postActions';
import { createLoadingSelector } from '../../state/actions/requestActions';

import PostContent from '../../components/PostContent';
import ProfileIcon from '../../components/ProfileIcon';
import './Post.scss';
import LoadingIcon from '../../components/LoadingIcon';

const Post = ({
  postContent = {}, onProfileClick, userId,
  isLoading, className = '', ...props
}) => {
  return (
    (isLoading
      ? <LoadingIcon />
      : (
        <div className={`post-container ${className}`}>
          <ProfileIcon
            imgUrl={postContent.owner?.profileUrl}
            username={postContent.owner?.username}
            onClick={onProfileClick}
            className="post-owner-profile"
          />

          <PostContent
            fullName={postContent.owner?.fullName}
            isVerified={postContent.owner?.isVerified}
            username={postContent.owner?.username}
            numLikes={postContent.numLikes}
            userHasLiked={postContent.likes?.includes(userId)}
            content={postContent.content}
            onLikeClick={() => props.likePost(postContent._id, userId)}
            onNameClick={onProfileClick}
            className="post-content-container"
          />
        </div>
      ))
  );
};

const loadingSelector = createLoadingSelector([ActionTypes.AUTH_USER]);

const mapStateToProps = (state) => ({
  userId: state.auth.userId,
  isLoading: loadingSelector(state),
});

export default connect(mapStateToProps, { likePost })(Post);
