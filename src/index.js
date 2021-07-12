const { ApolloServer } = require('apollo-server');
const { GraphQLSchema } = require('graphql');

// Config variables de entorno
require('dotenv').config()

const query = require('./schema/query')
const mutation = require('./schema/mutation')
const server = new ApolloServer({
    schema:  new GraphQLSchema({
        query,
        mutation
    }),
    context: {
        db: require('./db/database')
    }
});
// The `listen` method launches a web server.
server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});