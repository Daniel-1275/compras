const {GraphQLObjectType, GraphQLString, GraphQLInt } = require('graphql')

const familia = new GraphQLObjectType({
    name: 'familia',
    fields: () => ({
        id_familia: { type: GraphQLInt },
        descripcion_familia: { type: GraphQLString },
        rubro: {type: require('../rubro/type')}
    })
})
module.exports = familia;