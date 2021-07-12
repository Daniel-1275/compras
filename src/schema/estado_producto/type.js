const {GraphQLObjectType, GraphQLString, GraphQLInt } = require('graphql')

const estado_producto = new GraphQLObjectType({
    name: 'estado_producto',
    fields: () => ({
        id_estado: { type: GraphQLInt },
        nombre: { type: GraphQLString }
    })
})
module.exports = estado_producto;