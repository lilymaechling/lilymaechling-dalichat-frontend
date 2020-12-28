import React from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import queryString from 'querystring';

import ActionTypes from '../../../state/actionCreators';
import { postSearch, userSearch } from '../../../state/actionCreators/searchActionCreators';
import { createErrorSelector, createLoadingSelector } from '../../../state/actionCreators/requestActionCreators';

import TabGroup from '../../TabGroup';
import Post from '../../Post';

import LoadingIcon from '../../../components/LoadingIcon';
import HeaderImage from '../../../components/HeaderImage';

import { generateMetaTitleFromPage } from '../../../constants';
import './Search.scss';

const Search = ({
  userId, user, users, posts, postResults, userResults,
  isLoading, errorMessage, ...props
}) => {
  const [activeTab, setActiveTab] = React.useState('Featured Posts');
  const query = queryString.parse(props.history.location.search.slice(1))?.query || '';

  React.useEffect(() => {
    props.postSearch({ query });
    props.userSearch({ query });
  }, [props.history.location.search]);

  return (
    <div id="search-container">
      <Helmet>
        <title>{generateMetaTitleFromPage('Search')}</title>
      </Helmet>

      <HeaderImage
        backgroundUrl={user?.backgroundUrl}
        className="search-header-image"
      />

      <main id="search-content-container">
        {isLoading
          ? <LoadingIcon />
          : (
            <div className="search-tabgroup-container">
              {userResults.length ? userResults.map((userResult) => {
                return (
                  <TabGroup
                    user={userResult}
                    activeTab={activeTab}
                    setActiveTab={setActiveTab}
                    key={userResult._id}
                  >
                    <div label="Featured Posts">
                      {userResult.posts.map((postId) => {
                        return (
                          <Post
                            postContent={posts?.[postId] || {}}
                            className="search-post"
                            key={postId}
                          />
                        );
                      })}
                    </div>
                  </TabGroup>
                );
              }) : (
                <p className="search-noresults-container">
                  No user results found for query &quot;{query}&quot;
                </p>
              )}
              <div>
                {postResults.length ? postResults.map((post) => (
                  <Post
                    postContent={post}
                    className="search-post"
                    key={post._id}
                  />
                )) : (
                  <p className="search-noresults-container">
                    No post results found for query &quot;{query}&quot;
                  </p>
                )}
              </div>
            </div>
          )}
      </main>
    </div>
  );
};

const loadActions = [ActionTypes.AUTH_USER, ActionTypes.FETCH_POSTS];
const loadingSelector = createLoadingSelector([ActionTypes.POST_SEARCH, ActionTypes.USER_SEARCH]);
const errorSelector = createErrorSelector(loadActions);

const mapStateToProps = (state) => ({
  userId: state.auth.userId,
  user: state.auth.users?.[state.auth.userId] || {},

  posts: state.post.posts,
  users: state.auth.users,

  postResults: state.post.results?.reduce((accum, id) => [...accum, state.post.posts?.[id]], []) || [],
  userResults: state.auth.results?.reduce((accum, id) => [...accum, state.auth.users?.[id]], []) || [],
  numResults: state.post.numResults,

  isLoading: loadingSelector(state),
  errorMessage: errorSelector(state),
});

export default connect(mapStateToProps, { postSearch, userSearch })(Search);
