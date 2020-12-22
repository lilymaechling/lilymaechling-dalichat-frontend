import React from 'react';
import { connect } from 'react-redux';

import ActionTypes from '../../../state/actions';
import { createLoadingSelector } from '../../../state/actions/requestActions';
import { fetchUserPosts } from '../../../state/actions/postActions';
import { fetchUserById } from '../../../state/actions/userActions';

import Post from '../../Post';
import TabGroup from '../../TabGroup';
import LoadingIcon from '../../../components/LoadingIcon';

import './UserPage.scss';

const UserPage = ({
  match, location, history,
  user, userPosts, userIsLoading, postsAreLoading, ...props
}) => {
  const { id } = match.params;
  const [activeTab, setActiveTab] = React.useState('Featured Posts');

  React.useEffect(() => {
    if (!user) { props.fetchUserById(id); }
    props.fetchUserPosts(id);
  }, [id]);

  return (
    <div id="user-page-container">
      { userIsLoading
        ? <LoadingIcon />
        : (
          <TabGroup
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            user={user || {}}
          >
            <div label="Featured Posts">
              {postsAreLoading
                ? <LoadingIcon />
                : userPosts.map((post) => (
                  <Post
                    postContent={post}
                    className="user-page-post"
                    key={post?._id || ''}
                  />
                ))}
            </div>
          </TabGroup>
        )}
    </div>
  );
};

const watchActions = [ActionTypes.AUTH_USER];
const userLoadingSelector = createLoadingSelector([...watchActions, ActionTypes.FETCH_USER]);
const resultsLoadingSelector = createLoadingSelector([...watchActions, ActionTypes.POST_SEARCH]);

const mapStateToProps = (state, ownProps) => ({
  user: state.auth.users?.[ownProps.match.params?.id || ''],
  userPosts: state.post.results?.reduce((accum, id) => [...accum, state.post.posts?.[id]], []) || [],
  userIsLoading: userLoadingSelector(state),
  postsAreLoading: resultsLoadingSelector(state),
});

export default connect(mapStateToProps, { fetchUserPosts, fetchUserById })(UserPage);
