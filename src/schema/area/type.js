const {GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLScalarType, GraphQLList } = require('graphql')

const area = new GraphQLObjectType({
    name: 'area',
    fields: () => ({
        id_area: { type: GraphQLInt },
        nombre: { type: GraphQLString },
        usuario: { type: require('../usuario/type') },
        empresa: { type: require('../empresa/type') },
        cant_reclamos_realizados: { type: GraphQLInt },
        cant_reclamos_rechazados: { type: GraphQLInt },
        cant_pedidos_realizados: { type: GraphQLInt },
        cant_pedidos_rechazados: { type: GraphQLInt },
    })
})


module.exports = area;
