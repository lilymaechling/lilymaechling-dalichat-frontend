import React from 'react';
import { Helmet } from 'react-helmet';

import Fallback from '../Fallback';

import LoadingIcon from '../../generic/LoadingIcon';
import HeaderImage from '../../layout/HeaderImage';

import Post from '../../posts/Post';
import TabGroup from '../../tabs/TabGroup';

import { generateMetaTitleFromPage } from '../../../constants';
import './UserPage.scss';

const UserPage = ({
  match, location, history,
  user, userPosts, userIsLoading, postsAreLoading,
  fetchUserById, fetchUserPosts,
}) => {
  const { id } = match.params;
  const [activeTab, setActiveTab] = React.useState('Featured Posts');

  React.useEffect(() => {
    if (!user) { fetchUserById(id); }
    fetchUserPosts(id);
  }, [id]);

  return (
    <div id="user-page-container">
      <Helmet>
        <title>{generateMetaTitleFromPage(user?.fullName || 'User Not Found')}</title>
      </Helmet>

      {userIsLoading || user ? (
        <>
          <HeaderImage
            backgroundUrl={user?.backgroundUrl}
            className="user-page-header-image"
          />

          <main id="user-page-content-container">
            {userIsLoading
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
                          key={post._id}
                        />
                      ))}
                  </div>
                </TabGroup>
              )}
          </main>
        </>
      ) : (
        <Fallback
          history={history}
          match={match}
          location={location}
        />
      )}
    </div>
  );
};

export default UserPage;
