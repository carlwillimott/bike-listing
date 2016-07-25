import {connect} from 'react-redux';
import {sortBikes} from '../actions';
import Sort from '../components/Sort';

const mapStateToProps = (state, props) => {
    // This would work better if the recuder was an object instead of an array.
    if (Array.isArray(state)) {
        return {
            selected: state[state.length - 1].sortClass
        }
    }
    return state;
};

const mapDispatchToProps = (dispatch) => {
    return {
        onSortChange: (current) => {
            dispatch(sortBikes(current));
        }
    }
};

// Wrap the component with the container so we have access to the store.
const SortBikes = connect(
    mapStateToProps,
    mapDispatchToProps
)(Sort);

export default SortBikes;
