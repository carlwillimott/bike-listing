import {connect} from 'react-redux';
import BikeList from '../components/BikeList';
import {getSortedBikeList} from '../actions';

const mapStateToProps = (state, props) => {
	// Not happy about this - but need to restrucutre the reducer.
	return {
		bikes: getSortedBikeList(state[state.length - 1], props.bikes)
	}
};

const mapDispatchToProps = (dispatch) => {
};

// Wrap the component with the container so we have access to the store.
const SortedBikeList = connect(
    mapStateToProps,
    null
)(BikeList);

export default SortedBikeList;
