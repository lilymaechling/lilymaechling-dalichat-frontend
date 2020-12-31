import React from 'react';
import DefaultBackground from '../../../../public/images/default_background.png';
import './HeaderImage.scss';

const HeaderImage = ({ backgroundUrl = '', className = '' }) => (
  <div className={`header-image-container ${className}`}>
    <img
      className="header-image"
      src={backgroundUrl || DefaultBackground}
      alt="profile background"
    />
  </div>
);

export default HeaderImage;
