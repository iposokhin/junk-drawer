import { connect } from 'react-redux';
import { MyHero } from '../components/MyHero';

const mapStateToProps = ( { heroes, selectedHero } ) => {
  if ( heroes && selectedHero !== null ) {
    return {
      hero: heroes[ selectedHero ]
    }
  }
  return {
    hero: null
  }
}

const MyHeroContainer = connect(
  mapStateToProps
)( MyHero );

export default MyHeroContainer;