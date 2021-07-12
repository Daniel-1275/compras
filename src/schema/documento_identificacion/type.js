const { GraphQLObjectType, GraphQLString, GraphQLInt } = require("graphql");


const documento_identificacion = new GraphQLObjectType({
    name: 'documento_identificacion',
    fields: () => ({
        id_doc_ident: { type: GraphQLInt},
        tipo_doc_ident: { type: require('../tipo_documento_identificacion/type') },
        valor: { type: GraphQLString }
    })
})
module.exports = documento_identificacion;