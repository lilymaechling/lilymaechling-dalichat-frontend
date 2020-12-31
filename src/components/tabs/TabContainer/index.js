// Resource: https://www.digitalocean.com/community/tutorials/react-tabs-component

import React from 'react';
import { useHistory } from 'react-router-dom';
import Tab from '../Tab';

import './TabContainer.scss';

const TabContainer = ({
  activeTab, setActiveTab, updateUrls = false, urlBase = '', className = '', children,
}) => {
  const childrenArray = React.Children.toArray(children);
  const history = useHistory();

  return (
    <div className={`tab-container-container ${className}`}>
      <ol className="tab-list">
        {childrenArray.map((child) => {
          const { label } = child.props;
          return (
            <Tab
              isActive={activeTab === label}
              label={label}
              key={label}
              onClick={() => {
                if (updateUrls) { history.push(`${urlBase}/${label.toLowerCase()}`); }
                setActiveTab(label);
              }}
            />
          );
        })}
      </ol>
      <div className="tab-container-content">
        {childrenArray.find((child) => child.props.label === activeTab)?.props?.children || 'Tab Empty'}
      </div>
    </div>
  );
};

export default TabContainer;
