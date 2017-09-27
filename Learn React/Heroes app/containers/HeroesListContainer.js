import { connect } from 'react-redux';
import { HeroesList } from '../components/HeroesList.js';

const mapStateToProps = ( state ) => {
  return {
    heroes: state.heroes
  }
}

const HeroesListContainer = connect(
  mapStateToProps
)( HeroesList );

export default HeroesListContainer;