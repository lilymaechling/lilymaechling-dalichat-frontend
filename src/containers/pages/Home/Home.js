import React from 'react';
import { Helmet } from 'react-helmet';

import PostCreate from '../../../components/PostCreate';
import ProfileCard from '../../../components/ProfileCard';
import LoadingIcon from '../../../components/LoadingIcon';
import HeaderImage from '../../../components/HeaderImage';

import Post from '../../Post';
import TabContainer from '../../Tabs/TabContainer';

import { generateMetaTitleFromPage } from '../../../constants';
import FileDelete from '../../../../public/icons/file-delete.svg';

import './Home.scss';

const Home = ({
  userId, user, postResults, isLoading, errorMessage,
  fetchUserPosts, postSearch, createPost, deletePostById,
}) => {
  const [activeTab, setActiveTab] = React.useState('Your Posts');
  const [content, setContent] = React.useState('');

  React.useEffect(() => {
    if (activeTab === 'Your Posts') {
      if (userId) { fetchUserPosts(userId); }
    } else {
      postSearch();
    }
  }, [activeTab]);

  const {
    fullName, profileUrl, username, blurb, portfolioUrl, numPosts, backgroundUrl,
  } = user;

  const onPostSubmit = (e) => {
    e.preventDefault();
    createPost(
      content, userId,
      { successCallback: () => window.location.reload() },
    );
  };

  return (
    <div id="home-container">
      <Helmet>
        <title>{generateMetaTitleFromPage('Home')}</title>
      </Helmet>

      <HeaderImage
        backgroundUrl={backgroundUrl}
        className="home-header-image"
      />

      {isLoading
        ? <LoadingIcon />
        : (
          <main id="home-content-container">
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
                  <div key={post._id} className="home-post-container">
                    <Post
                      postContent={post}
                      className="home-post delete"
                    />
                    <button
                      type="button"
                      className="home-post-delete"
                      onClick={() => deletePostById(post._id)}
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
                    <div key={post._id} className="home-post-container">
                      <Post
                        postContent={post}
                        className="home-post"
                      />
                    </div>
                  ))}
              </div>
            </TabContainer>
          </main>
        )}
    </div>
  );
};

export default Home;
