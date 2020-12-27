import { requestStates } from '../actionCreators';

// eslint-disable-next-line import/prefer-default-export
export function getCaseSelector(actionType) {
  return `${actionType}_${requestStates.SUCCESS}`;
}
