import { connect } from 'react-redux';
import { HeroesList } from '../components/HeroesList.js';

const mapStateToProps = ( { heroes } ) => {
  return {
    heroes: heroes
  }
}

const HeroesListContainer = connect(
  mapStateToProps
)( HeroesList );

export default HeroesListContainer;