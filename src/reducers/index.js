import {SORT_BIKES} from '../constants/ActionTypes';

// We take this default when we don't have an option selected.
const defaultState = {
    sortClass: SORT_BIKES,
    type: 'none'
};

// Handle all of the dispatched actions within the store.
export const sortBikes = (state = defaultState, action) => {
    switch(action.type) {
        case SORT_BIKES:
            return [
                ...state,
                {
                    sortClass: action.sortClass,
                    type: action.type
                }
            ]
        default:
            return state;
    }
};
