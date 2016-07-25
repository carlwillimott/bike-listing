// Simply store the data in localstorage.
// @todo - implement a try / catch to deal with read issues.
export const getPersistedData = () => {
    const state = localStorage.getItem('bike-listing');
    if (state === null) {
        return undefined;
    }
    return JSON.parse(state);
};

export const setPersistedData = (store) => {
    localStorage.setItem('bike-listing', JSON.stringify(store));
};
