
const { GraphQLList } = require('graphql')
const a_controller = require('./a.controllers')
const type_area = require('./type')

const query = {
    areas: {
        type: new GraphQLList(type_area),
        resolve: a_controller.get_areas
    }
}
module.exports = query;