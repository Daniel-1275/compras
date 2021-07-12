const {GraphQLObjectType, GraphQLString, GraphQLInt } = require('graphql')

const tipo_contacto = new GraphQLObjectType({
    name: 'tipo_contacto',
    fields: () => ({
        id_tipo_contacto: { type: GraphQLInt },
        nombre: { type: GraphQLString },
        descripcion: { type: GraphQLString }
    })
})
module.exports = tipo_contacto;