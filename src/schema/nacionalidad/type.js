const {GraphQLObjectType, GraphQLString, GraphQLInt } = require('graphql')

const nacionalidad = new GraphQLObjectType({
    name: 'nacionalidad',
    fields: () => ({
        id_nacionalidad: { type: GraphQLInt },
        descripcion: { type: GraphQLString }
    })
})
module.exports = nacionalidad;