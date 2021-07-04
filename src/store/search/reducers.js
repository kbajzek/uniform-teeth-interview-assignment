import { SEARCH_BEGIN, SEARCH_SUCCESS, SEARCH_FAILED, SEARCH_DISMISS_ERROR } from './types';

const initialState = {
    searchString: '',
    values: [],
    loading: false,
    loaded: false,
    errors: [],
}

const reducer = (state = initialState, action) => {
    let updatedState;

    switch (action.type) {
        case SEARCH_BEGIN:
            updatedState = {
                ...state,
                loading: true,
                errors: []
            }
            return updatedState;
        case SEARCH_SUCCESS:
            updatedState = {
                ...state,
                values: action.result,
                searchString: action.searchString,
                loading: false,
                loaded: true,
                errors: []
            }
            return updatedState;
        case SEARCH_FAILED:
            updatedState = {
                ...state,
                loading: false,
                errors: [...state.errors, action.error]
            }
            return updatedState;
        case SEARCH_DISMISS_ERROR:
            updatedState = {
                ...state,
                errors: []
            }
            return updatedState;
        default: 
            return state;
    }
}

export default reducer;