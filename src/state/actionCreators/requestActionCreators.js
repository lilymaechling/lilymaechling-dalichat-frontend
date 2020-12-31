import ActionTypes, { requestStates } from '../helpers';

/**
 * Returns a function that can be added directly to a mapStateToProps object
 * that will determine if any of the passed actions are loading
 */
export const createLoadingSelector = (actions) => (state) => {
  // actions not passed as an array
  if (!Array.isArray(actions)) { return false; }

  // Returns true only if all passed actions aren't loading
  return actions.some((action) => state.request?.[action]?.loading === true);
};

/**
 * Returns a function that can be added directly to a mapStateToProps object
 * that will return the first error message associated with the array of actions (if any)
 */
export const createErrorSelector = (actions) => (state) => {
  // actions not passed as an array
  if (!Array.isArray(actions)) { return () => ''; }

  // Returns the first found error message
  return actions.reduce((accum, action) => {
    const message = state.request?.[action]?.message;
    if (message) return [...accum, message];
    else return accum;
  }, [])[0] || '';
};

/**
 * A function to manually set an error message in the error redux store
 * @param {*} action
 * @param {*} errorMessage
 */
export function setError(action, errorMessage) {
  return (dispatch) => {
    return dispatch({ type: `${action}_${requestStates.FAILURE}`, payload: { message: errorMessage } });
  };
}

/**
 * A function to manually clear an error from the redux store
 * @param {*} action
 */
export function clearError(action) {
  return (dispatch) => {
    return dispatch({ type: `${action}_${requestStates.CLEAR_ERR}`, payload: { message: '' } });
  };
}

/**
 * Clears current error message held in redux state
 */
export function clearCurrent() {
  return (dispatch) => {
    return dispatch({ type: ActionTypes.CLEAR_CURRENT });
  };
}
