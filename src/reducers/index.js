import {SORT_BIKES} from '../constants/ActionTypes';

export const sortBikes = (state = [], action) => {
    switch(action.type) {
        case SORT_BIKES:
            return [
                {
                    class: state
                }
            ]
        default:
            return state;
    }
};
