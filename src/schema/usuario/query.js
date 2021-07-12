
const { GraphQLList } = require('graphql')
const u_controller = require('./u.controllers')
const type_usuario = require('./type')

const query = {
    usuarios: {
        type: new GraphQLList(type_usuario),
        resolve: u_controller.get_usuarios
    }
}
module.exports = query;