import { connect } from 'react-redux';
import { EditHero } from '../components/EditHero';
import { editHero } from '../actions/action-creators';

const mapStateToProps = ( { heroes, selectedHero }, ownProps ) => {
  return {
    hero: heroes[ selectedHero ],
    goBack: ownProps.history.goBack
  }
}

const mapDispatchToProps = ( dispatch ) => {
  return {
    onChangeHeroName: ( id, name ) => {
      dispatch( editHero( id, name ) );
    }
  }
}

const EditHeroContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)( EditHero );

export default EditHeroContainer;