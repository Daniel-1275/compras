const {GraphQLObjectType, GraphQLString, GraphQLInt } = require('graphql')

const contacto = new GraphQLObjectType({
    name: 'contacto',
    fields: () => ({
        id_usuario: { type: GraphQLInt },
        tipo_contacto: { type: require('../tipo_contacto/type') },
        valor: { type: GraphQLString }
    })
})
module.exports = contacto;