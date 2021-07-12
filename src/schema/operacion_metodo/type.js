const {GraphQLObjectType, GraphQLInt } = require('graphql')

const operacion_metodo = new GraphQLObjectType({
    name: 'operacion_metodo',
    fields: () => ({
        id_operacion: { type: GraphQLInt },
        id_metodo: { type: GraphQLInt },
        secuencia: { type: GraphQLInt }
    })
})
module.exports = operacion_metodo;