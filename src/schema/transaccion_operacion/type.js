const {GraphQLObjectType, GraphQLInt } = require('graphql')

const transaccion_operacion = new GraphQLObjectType({
    name: 'transaccion_operacion',
    fields: () => ({
        id_transaccion: { type: GraphQLInt },
        id_operacion: { type: GraphQLInt },
        secuencia: {type: GraphQLInt }
    })
})
module.exports = transaccion_operacion;