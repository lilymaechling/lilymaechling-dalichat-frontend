import React from 'react';
import { connect } from 'react-redux';

import withLoading from '../../../hocs/withLoading';

import ActionTypes from '../../../state/actions';
import { fetchPosts, updatePostByID } from '../../../state/actions/postActions';
import { createErrorSelector } from '../../../state/actions/requestActions';

import TabContainer from '../../TabContainer';
import ProfileCard from '../../../components/ProfileCard';
import Post from '../../Post';

const SearchPane = ({
  results, numResults, isLoading, errorMessage,
}) => {
  const [activeTab, setActiveTab] = React.useState('Your Feed');

  return (
    <div>
      {isLoading ? 'Loading results...' : (errorMessage
        || (
        <>
          {/* Number of results available for given query and filter options */}
          {/* Check if there have been results loaded or if there is an array of posts in redux */}
          <p>{numResults || (results?.length) ? numResults || results.length : 0} results</p>

          {/* Go through passed data array and break into SearchItem elements */}
          {results && results.length ? (
            <TabContainer
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            >
              <div label="Your Feed">
                {results.map((element) => {
                  const { owner } = element;
                  return (
                    <>
                      <ProfileCard
                        fullName={owner.fullName}
                        profileUrl={owner.profileUrl}
                        username={owner.username}
                        blurb={owner.blurb}
                        portfolioUrl={owner.portfolioUrl}
                        numPosts={owner.posts?.length || 0}
                      />

                      <Post
                        key={element.id || element._id}
                        postContent={element}
                        onNameClick={() => console.log(`Name clicked on post by ${owner.username}`)}
                      />
                    </>
                  );
                })}
              </div>
              <div label="New Posts">
                New posts here!
              </div>
            </TabContainer>
          ) : null}
        </>
        )
      )}
    </div>
  );
};

// Import loading state and error messages of specified actions from redux state
const selectedActions = [ActionTypes.POST_SEARCH, ActionTypes.FETCH_POSTS];
const errorSelector = createErrorSelector(selectedActions);

const mapStateToProps = (state) => ({
  results: state.post.results,
  numResults: state.post.numResults,
  errorMessage: errorSelector(state),
});

// Waits for fetchPosts action to resolve or reject
const LoadingSearchPane = withLoading(SearchPane, selectedActions);

export default connect(mapStateToProps, { fetchPosts, updatePostByID })(LoadingSearchPane);
