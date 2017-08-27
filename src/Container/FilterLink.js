import { connect } from 'react-redux';
import Link from '../Components/Link';

const mapStateToLinkProps = (state, ownProps) => {
	return {
		active: state.visibilityFilter === ownProps.filter
	}
};

const mapDispatchToLinkProps = (dispatch, ownProps) => {
	return {
		onClick: () => {
			dispatch({
				type: 'SET_VISIBILITY',
				filter: ownProps.filter
			})
		}
	}
};

const FilterLink = connect(
	mapStateToLinkProps,
	mapDispatchToLinkProps
)(Link);

export default FilterLink;