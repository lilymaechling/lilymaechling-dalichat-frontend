import React from 'react';
import { connect } from 'react-redux';
// import queryString from 'query-string';
import queryString from 'querystring';

import ActionTypes from '../../../state/actions';
import { postSearch, userSearch } from '../../../state/actions/searchActions';
import { createErrorSelector, createLoadingSelector } from '../../../state/actions/requestActions';
// import withLoading from '../../../hocs/withLoading';

import TabGroup from '../../TabGroup';
import LoadingIcon from '../../../components/LoadingIcon';
import Post from '../../Post';

import './Search.scss';

const Search = ({
  userId, postResults, userResults, isLoading, errorMessage, ...props
}) => {
  const [activeTab, setActiveTab] = React.useState('Recent Posts');

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
                >
                  <div label="Recent Posts">
                    {user.posts.map((post) => (
                      <Post
                        postContent={post}
                        onProfileClick={() => {}}
                        className="search-post"
                        key={post._id}
                      />
                    ))}
                  </div>

                  {/* <div label="Popular Posts">
                      {isLoading
                        ? <LoadingIcon />
                        : userResults.map((post) => (
                          <Post
                            postContent={post}
                            onProfileClick={() => {}}
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
                  onProfileClick={() => {}}
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
  postResults: state.post.results,
  userResults: state.auth.results,
  numResults: state.post.numResults,
  isLoading: loadingSelector(state),
  errorMessage: errorSelector(state),
});

export default connect(mapStateToProps, { postSearch, userSearch })(Search);
