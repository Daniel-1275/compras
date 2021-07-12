const {GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLList } = require('graphql')

const usuario = new GraphQLObjectType({
    name: 'usuario',
    fields: () => ({
        id_usuario: { type: GraphQLInt },
        nombre: { type: GraphQLString },
        contrasenia: { type: GraphQLString },
        doc_ident: { type: require("../documento_identificacion/type") },
        contactos: { type: GraphQLList(require("../contacto/type"))}
    })
})
module.exports = usuario;