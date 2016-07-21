import Rx from 'rxjs/Rx';

export const fetchBikes = () => {
	const path = 'https://raw.githubusercontent.com/jujhars13/jujhars13/master/bikes.json';
	return Rx.Observable.fromPromise(fetch(path).then((result) => result.json()));
};
