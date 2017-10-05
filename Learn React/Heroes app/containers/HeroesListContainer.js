import { connect } from 'react-redux';
import { HeroesList } from '../components/HeroesList';
import { selectHero, removeHero } from '../actions/action-creators';

const mapStateToProps = ( { heroes, selectedHero } ) => {
  return {
    heroes: heroes,
    selectedHero: selectedHero
  }
}

const mapDispatchToProps = ( dispatch, ownProperty ) => {
  return {
    onHeroClick: ( id ) => {
      dispatch( selectHero( id ) );
    },
    onRemoveClick: ( id, selected ) => {
      if ( selected ) {
        dispatch( selectHero( null ) );
      }
      dispatch( removeHero( id ) );
    }
  }
}

const HeroesListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)( HeroesList );

export default HeroesListContainer;