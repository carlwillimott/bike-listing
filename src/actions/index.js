import Rx from 'rxjs/Rx';
import {SORT_BIKES} from '../constants/ActionTypes';

// @todo - Hook this into Redux.
export const fetchBikes = () => {

    const path = 'https://raw.githubusercontent.com/jujhars13/jujhars13/master/bikes.json';

    return Rx.Observable.fromPromise(
        fetch(path).then((result) => result.json())
    );

};

export const sortBikes = (sortClass) => {
    return {
        type: SORT_BIKES,
        sortClass
    }
};

// Helper function to handle the order of the bikes.
export const getSortedBikeList = (state, bikes) => {

    if (state === undefined) {
        return bikes;
    }

    let sort = state.sortClass;

    if (sort === 'none') {
        return bikes;
    }

    let target = [];
    let others = [];

    // Build two arrays and merge them for the sort.
    bikes.forEach((item) => {
        if (item.class.indexOf(sort) > -1) {
            target.push(item);
        } else {
            others.push(item);
        }
    });

    return target.concat(others);

}
