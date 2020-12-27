import { requestStates } from '../helpers';

/**
* Generates valid "success" payload given a response object and additional custom parameters
* * Note: Use this whenever not using `createAsyncActionCreator` to correctly interface with reducers
* @param {*} response - Axios Response
* @param {*} customParams - Any additional parameters to inject into action.payload
* @param {*} subField - A subfield of `response.data` to send as the `data` field of the payload
*/
export function generateSuccessPayload(response, customParams = {}, subField = '') {
  return ({ data: subField ? response.data[subField] : response.data, code: response.status, ...customParams });
}

/**
 * Generates valid "failure" payload given an error object and additional custom parameters
 * * Note: Use this whenever not using `createAsyncActionCreator` to correctly interface with reducers
 * @param {*} error - Javascript error object
 * @param {*} customParams - Any additional parameters to inject into action.payload
 */
export function generateFailurePayload(error, customParams = {}) {
  return ({ message: error.response?.data?.message || error.message || 'No message found', code: error.response?.status || error.code || null, ...customParams });
}

/**
 * A function which standardizes the creation of asynchronous action creators. This allows for standardization in the creation and maintenance of reducers.
 * * Note: This function is intended to reduce boilerplate code. If additional customization is needed, see `generateSuccessPayload` and `generateFailurePayload`
 * @param {*} dispatch - Redux dispatch function
 * @param {*} actionName - Name of action to manage (e.g. ActionTypes.FETCH_USER)
 * @param {*} axiosFetchCallback - async function that fetches data for action creator
 * @param {*} config - Config object containing additional configuration fields
 *
 * Optional `config` fields:
 * * `successCallback` - Function called on success of request (passed request object)
 * * `failureCallback` - Function called on failure of request (passed error object)
 * * `additionalPayloadFields` - Additional fields to include on top level of success action payload (e.g. object id for deleting user)
 * * `responseSubfield` - Loads `response.data[subfield]` into success payload instead of `response.data`
 */
async function createAsyncActionCreator(dispatch, actionName, axiosFetchCallback, config = {}) {
  try {
    dispatch({ type: `${actionName}_${requestStates.REQUEST}` });
    const response = await axiosFetchCallback();
    dispatch({ type: `${actionName}_${requestStates.SUCCESS}`, payload: generateSuccessPayload(response, config?.additionalPayloadFields || {}, config?.responseSubfield || '') });
    if (config.successCallback) { config.successCallback(response); }
  } catch (error) {
    dispatch({ type: `${actionName}_${requestStates.FAILURE}`, payload: generateFailurePayload(error) });
    if (config.failureCallback) { config.failureCallback(error); }
  }
}

export default createAsyncActionCreator;
