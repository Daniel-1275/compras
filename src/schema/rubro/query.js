
const { GraphQLList } = require('graphql')
const r_controller = require('./r.controllers')
const rubro = require('./type')

const query = {
    rubros: {
        type: new GraphQLList(rubro),
        resolve: r_controller.get_rubros
    }
}
module.exports = query;