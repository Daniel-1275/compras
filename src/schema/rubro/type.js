const {GraphQLObjectType, GraphQLString, GraphQLInt } = require('graphql')

const rubro = new GraphQLObjectType({
    name: 'rubro',
    fields: () => ({
        id_rubro: { type: GraphQLInt },
        descripcion_rubro: { type: GraphQLString }
    })
})
module.exports = rubro;