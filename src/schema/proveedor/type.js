const {GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLScalarType, GraphQLList, GraphQLFloat } = require('graphql')

const proveedor = new GraphQLObjectType({
    name: 'proveedor',
    fields: () => ({
        id_proveedor: { type: GraphQLInt },
        nacionalidad: { type: require('../nacionalidad/type') },
        usuario: { type: require('../usuario/type') },
        nacionalidad: { type: require('../nacionalidad/type') },
        cotizaciones_ganadas: { type: GraphQLInt },
        entregas_cumplidas: { type: GraphQLInt },
        entregas_no_cumplidas: { type: GraphQLInt },
        entregas_destiempo: { type: GraphQLInt },
        cant_cotizaciones: { type: GraphQLInt },
        fecha_reg_prov: { type: GraphQLString },
        calif_prov: { type: GraphQLFloat },
    })
})
module.exports = proveedor;