const {GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLList } = require('graphql')

const transaccion = new GraphQLObjectType({
    name: 'transaccion',
    fields: () => ({
        id_transaccion: { type: GraphQLInt },
        operaciones: { type: GraphQLList(require('../operacion/type')) },
        secuencia: {type: GraphQLList(GraphQLInt) },
        descripcion_transaccion: { type: GraphQLString }
    })
})
module.exports = transaccion;