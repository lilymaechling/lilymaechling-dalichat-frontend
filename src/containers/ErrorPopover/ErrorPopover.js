import React from 'react';
import ErrorOutline from '../../../public/icons/error_outline.svg';
import './ErrorPopover.scss';

const ErrorPopover = ({
  errorMessage, errorType = '', clearCurrent,
}) => {
  React.useEffect(() => {
    if (errorMessage) {
      const timeout = setTimeout(() => {
        clearCurrent();
      }, 5000);

      return () => clearTimeout(timeout);
    } return null;
  }, [errorMessage]);

  return (
    <div id="error-popover-container" className={errorMessage ? ' active' : ''}>
      <div id="error-title-container">
        <ErrorOutline />
        <p id="error-title">{errorType ? `${errorType} Error` : 'Error'}</p>
      </div>

      <p id="error-content">{errorMessage}</p>
    </div>
  );
};

export default ErrorPopover;
