import React from 'react';
import { Helmet } from 'react-helmet';

import TabContainer from '../../tabs/TabContainer';
import Post from '../../posts/Post';

import LoadingIcon from '../../generic/LoadingIcon';
import HeaderImage from '../../layout/HeaderImage';

import { generateMetaTitleFromPage } from '../../../utils';
import './Explore.scss';

const Explore = ({
  user, postResults, postsLoading, postSearch,
}) => {
  const [activeTab, setActiveTab] = React.useState('New Posts');
  React.useEffect(() => {
    if (activeTab === 'New Posts') {
      postSearch();
    } else {
      postSearch({ field: 'likes' });
    }
  }, [activeTab]);

  return (
    <div id="explore-container">
      <Helmet>
        <title>{generateMetaTitleFromPage('Explore')}</title>
      </Helmet>

      <HeaderImage
        backgroundUrl={user?.backgroundUrl}
        className="explore-header-image"
      />

      <main id="explore-content-container">
        <TabContainer
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        >
          <div label="New Posts">
            {postsLoading ? <LoadingIcon />
              : postResults.map((post) => (
                <Post
                  postContent={post}
                  className="explore-post"
                  key={post._id}
                />
              ))}
          </div>

          <div label="Popular Posts">
            {postsLoading ? <LoadingIcon />
              : postResults.map((post) => (
                <Post
                  postContent={post}
                  className="explore-post"
                  key={post._id}
                />
              ))}
          </div>
        </TabContainer>
      </main>
    </div>
  );
};

export default Explore;
