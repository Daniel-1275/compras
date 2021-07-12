const {GraphQLObjectType, GraphQLString, GraphQLInt } = require('graphql')

const rol_operario = new GraphQLObjectType({
    name: 'rol_operario',
    fields: () => ({
        id_rol_operario: { type: GraphQLInt },
        nombre: { type: GraphQLString },
        descripcion: { type: GraphQLString }
    })
})
module.exports = rol_operario;