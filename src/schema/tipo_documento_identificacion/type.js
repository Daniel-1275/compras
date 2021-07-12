const {GraphQLObjectType, GraphQLString, GraphQLInt } = require('graphql')

const tipo_documento_identificacion = new GraphQLObjectType({
    name: 'tipo_documento_identificacion',
    fields: () => ({
        id_tipo_doc_ident: { type: GraphQLString },
        nombre: { type: GraphQLString },
        descripcion: { type: GraphQLString },
        cantidad_digitos: { type: GraphQLInt }
    })
})
module.exports = tipo_documento_identificacion;