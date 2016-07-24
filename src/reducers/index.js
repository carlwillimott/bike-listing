import {SORT_BIKES} from '../constants/ActionTypes';

// Handle all of the dispatched actions within the store.
export const sortBikes = (state = [], action) => {
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
