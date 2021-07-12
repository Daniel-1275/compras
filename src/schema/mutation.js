const { GraphQLObjectType } = require("graphql");

const mutation_tipo_documento_identificacion = require('./tipo_documento_identificacion/mutation');
const rootMutationType = new GraphQLObjectType({
    name: 'RootMutationType',
    fields: () => ({
        ...mutation_tipo_documento_identificacion
    })
})
module.exports = rootMutationType;