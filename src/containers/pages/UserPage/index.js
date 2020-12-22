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
  user, userPosts, isLoading, ...props
}) => {
  const { id } = match.params;
  const [activeTab, setActiveTab] = React.useState('Featured Posts');

  React.useEffect(() => {
    if (!user) {
      props.fetchUserById(id);
      props.fetchUserPosts(id);
    }
  }, []);

  return (
    <div id="user-page-container">
      { isLoading
        ? <LoadingIcon />
        : (
          <TabGroup
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            user={user || {}}
          >
            <div label="Featured Posts">
              {isLoading
                ? <LoadingIcon />
                : userPosts.map((post) => (
                  <Post
                    postContent={post}
                    onProfileClick={() => {}}
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

const watchActions = [ActionTypes.AUTH_USER, ActionTypes.FETCH_USER];
const loadingSelector = createLoadingSelector(watchActions);

const mapStateToProps = (state, ownProps) => ({
  user: state.auth.users?.[ownProps.match.params?.id || ''],
  userPosts: state.post.results?.reduce((accum, id) => [...accum, state.post.posts?.[id]], []) || [],
  isLoading: loadingSelector(state),
});

export default connect(mapStateToProps, { fetchUserPosts, fetchUserById })(UserPage);
