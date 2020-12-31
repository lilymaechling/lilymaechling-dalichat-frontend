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
  match, history, user, userPosts, userLoading, postsLoading,
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

      {userLoading || user ? (
        <>
          <HeaderImage
            backgroundUrl={user?.backgroundUrl}
            className="user-page-header-image"
          />

          <main id="user-page-content-container">
            {userLoading
              ? <LoadingIcon />
              : (
                <TabGroup
                  activeTab={activeTab}
                  setActiveTab={setActiveTab}
                  user={user || {}}
                >
                  <div label="Featured Posts">
                    {postsLoading
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
      ) : <Fallback history={history} />}
    </div>
  );
};

export default UserPage;
