import React from 'react';
import { connect } from 'react-redux';

import { clearCurrent } from '../../state/actionCreators/requestActionCreators';

import ErrorOutline from '../../../public/icons/error_outline.svg';
import './ErrorPopover.scss';

const ErrorPopover = ({
  errorMessage, errorType = '', ...props
}) => {
  React.useEffect(() => {
    if (errorMessage) {
      const timeout = setTimeout(() => {
        props.clearCurrent();
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

const mapStateToProps = (state) => ({
  errorMessage: state.request.current,
});

export default connect(mapStateToProps, { clearCurrent })(ErrorPopover);
