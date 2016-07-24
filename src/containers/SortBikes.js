import {connect} from 'react-redux';
import {sortBikes} from '../actions';
import Sort from '../components/Sort';

const mapStateToProps = (state) => {

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
    null,
    mapDispatchToProps
)(Sort);

export default SortBikes;
