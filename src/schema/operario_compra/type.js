const {GraphQLObjectType, GraphQLInt } = require('graphql')

const operario_compra = new GraphQLObjectType({
    name: 'operario_compra',
    fields: () => ({
        id_operario: { type: GraphQLInt },
        usuario: {type: require('../usuario/type') },
        rol_operario: { type: require('../rol_operario/type') },
        cant_pedidos_atendidos: { type: GraphQLInt },
        cant_reclamos_revisados: { type: GraphQLInt },
        cant_cotizaciones: { type: GraphQLInt }
    })
})
module.exports = operario_compra;