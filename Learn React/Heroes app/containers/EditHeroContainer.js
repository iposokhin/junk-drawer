import { connect } from 'react-redux';
import { EditHero } from '../components/EditHero';
import { editHero } from '../actions/action-creators';

const mapStateToProps = ( { heroes, selectedHero } ) => {
  return {
    hero: heroes[ selectedHero ]
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