import { connect } from 'react-redux';
import { setVisibilityFilters } from '../actions/action_creators';
import Link from '../components/Link';

const mapStateToProps = ( state, ownProps )=> {
  return {
    active: ownProps.filter === state.visibilityFilter
  }
}

const mapDispatchToProps = ( dispatch, ownProps ) => {
  return {
    onClick: () => {
      dispatch( setVisibilityFilters( ownProps.filter ) )
    }
  }
}

const FilterLink = connect(
  mapStateToProps,
  mapDispatchToProps
)( Link );

export default FilterLink;