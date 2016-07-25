import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux'
import App from './components/App';
import {sortBikes} from './reducers'
import {getPersistedData, setPersistedData} from './store';

let persisted = getPersistedData();
let store = createStore(sortBikes, persisted);

// Console a list of dispatched actions.
store.subscribe(() => {
    let state = store.getState();
    console.log(state);
    setPersistedData(state);
});

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
);
