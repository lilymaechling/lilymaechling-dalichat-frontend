import React from 'react';
import Button from './generic/Button';
import ProfileCard from './profile/ProfileCard';
import TabGroup from './tabs/TabGroup';
import Tab from './tabs/Tab';
// import TabContainer from './tabs/TabContainer';

const App = () => (
  <div style={{ backgroundColor: 'lightgray', height: 1000 }}>
    <div>
      This is my button.
      <Button label="Test Label" onClick={() => console.log('clicked!')} />
    </div>
    <div>
      This is my profile card.
      <ProfileCard imageUrl="./src/resources/lily_profile.jpg" username="@lilymaechling" fullName="Lily Maechling" className="" blurb="I am '23 at Dartmouth" uid="" numPosts="2" portfolioUrl="" />
    </div>
    <div>
      This is my tab group.
      <TabGroup imageUrl="./src/resources/lily_profile.jpg"
        username="@lilymaechling"
        fullName="Lily Maechling"
        className=""
        blurb="I am '23 at Dartmouth"
        uid=""
        numPosts="2"
        activeTab="Popular Posts"
        setActiveTab={() => console.log('set active tab')}
        portfolioUrl=""
      >
        {/* <TabContainer activeTab="Popular Posts" setActiveTab={() => console.log('set active tab')}> */}
        <Tab isActive label="Popular Posts" onClick={() => console.log('Popular Posts')} />
        <Tab isActive={false} label="New Posts" onClick={() => console.log('New Posts')} />
      </TabGroup>
    </div>
  </div>
);

export default App;
