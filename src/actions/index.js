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

export const getSortedBikeList = (sortClass, bikes) => {
    if (sortClass === undefined) {
        return bikes;
    }
    // @todo - Need to handle the sort order now.
    return bikes;

}
