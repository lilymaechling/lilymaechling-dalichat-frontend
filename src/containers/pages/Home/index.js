import React from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';

import ActionTypes from '../../../state/actionCreators';
import { fetchUserPosts, createPost, deletePostById } from '../../../state/actionCreators/postActionCreators';
import { postSearch } from '../../../state/actionCreators/searchActionCreators';
import { createLoadingSelector, createErrorSelector } from '../../../state/actionCreators/requestActionCreators';

import TabContainer from '../../TabContainer';

import PostCreate from '../../../components/PostCreate';
import ProfileCard from '../../../components/ProfileCard';
import LoadingIcon from '../../../components/LoadingIcon';
import Post from '../../Post';

import { generateMetaTitleFromPage } from '../../../constants';
import FileDelete from '../../../../public/icons/file-delete.svg';

import './Home.scss';

const Home = ({
  userId, user, postResults,
  isLoading, errorMessage, ...props
}) => {
  const [activeTab, setActiveTab] = React.useState('Your Posts');
  const [content, setContent] = React.useState('');

  React.useEffect(() => {
    if (activeTab === 'Your Posts') {
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
      <Helmet>
        <title>{generateMetaTitleFromPage('Home')}</title>
      </Helmet>

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
                uid={userId}
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
              <div label="Your Posts">
                {postResults.map((post) => (
                  <div className="home-post-container">
                    <Post
                      postContent={post}
                      className="home-post delete"
                      key={post?._id || ''}
                    />
                    <button
                      type="button"
                      className="home-post-delete"
                      onClick={() => props.deletePostById(post._id || '')}
                    >
                      <FileDelete />
                      <p>Delete Post</p>
                    </button>
                  </div>
                ))}
              </div>

              <div label="New Posts">
                {isLoading
                  ? <LoadingIcon />
                  : postResults.map((post) => (
                    <div className="home-post-container">
                      <Post
                        postContent={post}
                        className="home-post"
                        key={post?._id || ''}
                      />
                    </div>
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
  fetchUserPosts, createPost, postSearch, deletePostById,
})(Home);
