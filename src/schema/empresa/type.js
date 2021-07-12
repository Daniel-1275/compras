const {GraphQLObjectType, GraphQLString, GraphQLInt } = require('graphql')

const empresa = new GraphQLObjectType({
    name: 'empresa',
    fields: () => ({
        id_empresa: { type: GraphQLInt },
        nombre: { type: GraphQLString }
    })
})
module.exports = empresa;