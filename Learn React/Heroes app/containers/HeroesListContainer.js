import { connect } from 'react-redux';
import { HeroesList } from '../components/HeroesList';
import { selectHero } from '../actions/action-creators';

const mapStateToProps = ( { heroes } ) => {
  return {
    heroes: heroes
  }
}

const mapDispatchToProps = ( dispatch ) => {
  return {
    onHeroClick: ( id ) => {
      dispatch( selectHero( id ) );
    }
  }
}

const HeroesListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)( HeroesList );

export default HeroesListContainer;