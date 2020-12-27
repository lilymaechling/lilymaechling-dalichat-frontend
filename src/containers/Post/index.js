import React from 'react';
import { connect } from 'react-redux';

import ActionTypes from '../../state/actionCreators';
import { likePost } from '../../state/actionCreators/postActionCreators';
import { createLoadingSelector } from '../../state/actionCreators/requestActionCreators';

import PostContent from '../../components/PostContent';
import ProfileIcon from '../../components/ProfileIcon';
import './Post.scss';
import LoadingIcon from '../../components/LoadingIcon';

const Post = ({
  postContent = {}, userId,
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
            onLikeClick={() => props.likePost(postContent._id, userId)}
            uid={postContent.owner?._id || ''}
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
