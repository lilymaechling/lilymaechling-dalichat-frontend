import React from 'react';
import './ErrorPopover.scss';

const ErrorPopover = ({ className, title, content }) => (
  <div id={`error-popover-conatiner ${className}`}>
    <div id="error-title-conatiner">
      <div id="error-title">
        {title}
      </div>
    </div>
    <div id="error-content">
      {content}
    </div>
  </div>
);

export default ErrorPopover;
