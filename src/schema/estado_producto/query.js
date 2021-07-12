const { GraphQLList } = require('graphql')
const ep_controller = require('./ep.controller')
const type_estado_producto = require('./type')

const query = {
    estados_producto: {
        type: new GraphQLList(type_estado_producto),
        resolve: ep_controller.get_estado_producto
    }
}
module.exports = query;