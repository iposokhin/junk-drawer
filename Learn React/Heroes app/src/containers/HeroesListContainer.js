import { connect } from 'react-redux';
import { HeroesList } from '../components/HeroesList';
import { selectHero, removeHero, addToTop, removeFromTop } from '../actions/action-creators';

const mapStateToProps = ( { heroes, selectedHero, top } ) => {
  return {
    heroes: heroes,
    selectedHero: selectedHero,
    top: top
  }
}

const mapDispatchToProps = ( dispatch ) => {
  return {
    onHeroClick: ( id ) => {
      dispatch( selectHero( id ) );
    },
    onRemoveClick: ( id ) => {
      dispatch( removeHero( id ) );
    },
    onAddToTopClick: ( id ) => {
      dispatch( addToTop( id ) );
    },
    onRemoveFromTopClick: ( id ) => {
      dispatch( removeFromTop( id ) );
    }
  }
}

const HeroesListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)( HeroesList );

export default HeroesListContainer;