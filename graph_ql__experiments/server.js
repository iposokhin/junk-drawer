import {
  GraphQLBoolean,
  GraphQLID,
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
} from 'graphql';

import Koa from 'koa';
import Router from 'koa-router';
import graphqlHTTP from 'koa-graphql';

import UserFactorie from './factories/user';

const User = new GraphQLObjectType( {
  name: 'User',
  fields: {
    id: {
      type: GraphQLID,
    },
    name: {
      type: GraphQLString,
    },
  }
} )

const Root = new GraphQLObjectType( {
  name: 'Root',
  fields: {
    hello: {
      type: GraphQLString,
      resolve: () => "Hello world!!!",
    },
    user: {
      type: User,
      resolve: () => UserFactorie.build(),
    },
    userList: {
      type: new GraphQLList( User ),
      args: {
        num: {
          type: GraphQLInt,
          defaultValue: 10
        }
      },
      resolve: ( obj, { num, ...args } ) => UserFactorie.buildList( num ),
    }
  }
} )

const schema = new GraphQLSchema( {
  query: Root
} )

const app = new Koa();
const router = new Router();

router.all('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: true
}));

app.use(router.routes()).use(router.allowedMethods());

module.exports = app
