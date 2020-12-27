import React from 'react';
import { connect } from 'react-redux';
// import queryString from 'query-string';
import queryString from 'querystring';

import ActionTypes from '../../../state/actionCreators';
import { postSearch, userSearch } from '../../../state/actionCreators/searchActionCreators';
import { createErrorSelector, createLoadingSelector } from '../../../state/actionCreators/requestActionCreators';
// import withLoading from '../../../hocs/withLoading';

import TabGroup from '../../TabGroup';
import LoadingIcon from '../../../components/LoadingIcon';
import Post from '../../Post';

import './Search.scss';

const Search = ({
  userId, users, posts, postResults, userResults,
  isLoading, errorMessage, ...props
}) => {
  const [activeTab, setActiveTab] = React.useState('Featured Posts');

  let query = '';
  React.useEffect(() => {
    query = queryString.parse(props.history.location.search.slice(1))?.query || '';
    props.postSearch({ query });
    props.userSearch({ query });
  }, []);

  return (
    <div id="search-container">
      {isLoading
        ? <LoadingIcon />
        : (
          <div className="search-tabgroup-container">
            {userResults.map((user) => {
              return (
                <TabGroup
                  user={user}
                  activeTab={activeTab}
                  setActiveTab={setActiveTab}
                  key={user._id}
                >
                  <div label="Featured Posts">
                    {user.posts.map((postId) => {
                      return (
                        <Post
                          postContent={posts?.[postId] || {}}
                          key={postId}
                          className="search-post"
                        />
                      );
                    })}
                  </div>

                  {/* <div label="Popular Posts">
                      {isLoading
                        ? <LoadingIcon />
                        : userResults.map((post) => (
                          <Post
                            postContent={post}
                            className="search-post"
                            key={post._id}
                          />
                        ))}
                    </div> */}
                </TabGroup>
              );
            })}
            <div>
              {postResults.map((post) => (
                <Post
                  postContent={post}
                  className="search-post"
                  key={post._id}
                />
              ))}
            </div>
          </div>
        )}
    </div>
  );
};

const loadActions = [ActionTypes.AUTH_USER, ActionTypes.FETCH_POSTS];
const loadingSelector = createLoadingSelector([ActionTypes.POST_SEARCH, ActionTypes.USER_SEARCH]);
const errorSelector = createErrorSelector(loadActions);

const mapStateToProps = (state) => ({
  userId: state.auth.userId,
  posts: state.post.posts,
  users: state.auth.users,

  postResults: state.post.results?.reduce((accum, id) => [...accum, state.post.posts?.[id]], []) || [],
  userResults: state.auth.results?.reduce((accum, id) => [...accum, state.auth.users?.[id]], []) || [],

  numResults: state.post.numResults,
  isLoading: loadingSelector(state),
  errorMessage: errorSelector(state),
});

export default connect(mapStateToProps, { postSearch, userSearch })(Search);
