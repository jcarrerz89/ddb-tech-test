const { ApolloServer, gql } = require('apollo-server');
const { typeDefs } = require('./schema');

const {resolvers} = require('./resolvers');

const URL = '/graphql'

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});

process.on('SIGINT', function() {
  process.exit(0);
});