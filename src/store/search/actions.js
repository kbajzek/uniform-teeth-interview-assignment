import { SEARCH_BEGIN, SEARCH_SUCCESS, SEARCH_FAILED, SEARCH_DISMISS_ERROR } from './types';

export const searchBegin = (searchString) => ({ type: SEARCH_BEGIN, searchString });
export const searchSuccess = (result, searchString) => ({ type: SEARCH_SUCCESS, result, searchString });
export const searchFailed = (error) => ({ type: SEARCH_FAILED, error });
export const searchDismissError = () => ({ type: SEARCH_DISMISS_ERROR });