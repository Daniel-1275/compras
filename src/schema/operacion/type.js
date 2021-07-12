const {GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLList } = require('graphql')

const operacion = new GraphQLObjectType({
    name: 'operacion',
    fields: () => ({
        id_operacion: { type: GraphQLInt },
        metodos: { type: GraphQLList(require('../metodo/type')) },
        secuencia: {type: GraphQLList(GraphQLInt) },
        descripcion_operacion: { type: GraphQLString }
    })
})
module.exports = operacion;