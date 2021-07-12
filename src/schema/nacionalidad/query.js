
const { GraphQLList } = require('graphql')
const n_controller = require('./n.controllers')
const nacionalidad = require('./type')

const query = {
    nacionalidades: {
        type: new GraphQLList(nacionalidad),
        resolve: n_controller.get_nacionalidades
    }
}
module.exports = query;