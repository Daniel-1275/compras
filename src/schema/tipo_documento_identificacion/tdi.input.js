const { GraphQLInputObjectType, GraphQLString, GraphQLInt } = require("graphql");

const tipo_documento_identitificacionInput = new GraphQLInputObjectType({
    name: 'tipo_documento_identitificacionInput',
    fields: {
        nombre: {type: GraphQLString, require: true},
        descripcion: {type: GraphQLString, require: true},
        cantidad_digitos: {type: GraphQLInt, require: true}
    }
})
module.exports = tipo_documento_identitificacionInput;