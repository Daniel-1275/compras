
const { GraphQLList } = require('graphql')
const f_controller = require('./f.controllers')
const familia = require('./type')

const query = {
    familias: {
        type: new GraphQLList(familia),
        resolve: f_controller.get_familias
    }
}
module.exports = query;