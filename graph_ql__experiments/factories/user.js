import { Factory } from 'rosie';
import faker from 'faker';

const User = Factory.define( 'user' )
  .sequence( 'id' )
  .attr( 'name', () => faker.name.findName() )

module.exports = User;
