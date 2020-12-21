import React from 'react';
import { connect } from 'react-redux';

import ActionTypes from '../../../state/actions';
import { fetchUserPosts, createPost } from '../../../state/actions/postActions';
import { postSearch } from '../../../state/actions/searchActions';
import { createLoadingSelector, createErrorSelector } from '../../../state/actions/requestActions';

import TabContainer from '../../TabContainer';

import PostCreate from '../../../components/PostCreate';
import ProfileCard from '../../../components/ProfileCard';
import LoadingIcon from '../../../components/LoadingIcon';
import Post from '../../Post';

import './Home.scss';

const Home = ({
  userId, user, postResults,
  isLoading, errorMessage, ...props
}) => {
  const [activeTab, setActiveTab] = React.useState('Your Feed');
  const [content, setContent] = React.useState('');

  React.useEffect(() => {
    if (activeTab === 'Your Feed') {
      if (userId) { props.fetchUserPosts(userId); }
    } else {
      props.postSearch();
    }
  }, [activeTab]);

  const {
    fullName, profileUrl, username, blurb, portfolioUrl, numPosts,
  } = user;

  const onPostSubmit = (e) => {
    e.preventDefault();
    props.createPost(
      content, userId,
      { successCallback: () => window.location.reload() },
    );
  };

  return (
    <div id="home-container">
      {isLoading
        ? <LoadingIcon />
        : (
          <>
            <div id="home-left-container">
              <ProfileCard
                fullName={fullName}
                profileUrl={profileUrl}
                username={username}
                blurb={blurb}
                portfolioUrl={portfolioUrl}
                numPosts={numPosts}
                className="home-profile-container"
              />

              <PostCreate
                value={content}
                onChange={(e) => setContent(e.target.value)}
                onSubmit={onPostSubmit}
                className="home-post-create"
              />
            </div>

            <TabContainer
              user={user}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            >
              <div label="Your Feed">
                {postResults.map((post) => (
                  <Post
                    postContent={post}
                    onProfileClick={() => {}}
                    className="home-post"
                    key={post._id}
                  />
                ))}
              </div>

              <div label="New Posts">
                {isLoading
                  ? <LoadingIcon />
                  : postResults.map((post) => (
                    <Post
                      postContent={post}
                      onProfileClick={() => {}}
                      className="home-post"
                      key={post._id}
                    />
                  ))}
              </div>
            </TabContainer>
          </>
        )}
    </div>
  );
};

const loadActions = [ActionTypes.AUTH_USER, ActionTypes.POST_SEARCH];
const loadingSelector = createLoadingSelector([ActionTypes.POST_SEARCH]);
const errorSelector = createErrorSelector(loadActions);

const mapStateToProps = (state) => ({
  userId: state.auth.userId,
  user: state.auth.users?.[state.auth.userId] || {},

  // TODO: Make this id population into a helper function
  postResults: state.post.results?.reduce((accum, id) => [...accum, state.post.posts?.[id]], []) || [],

  isLoading: loadingSelector(state),
  errorMessage: errorSelector(state),
});

export default connect(mapStateToProps, {
  fetchUserPosts, createPost, postSearch,
})(Home);
