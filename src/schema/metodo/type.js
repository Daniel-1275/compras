const {GraphQLObjectType, GraphQLString, GraphQLInt } = require('graphql')

const metodo = new GraphQLObjectType({
    name: 'metodo',
    fields: () => ({
        id_metodo: { type: GraphQLInt },
        descripcion_metodo: { type: GraphQLString }
    })
})
module.exports = metodo;