
const { GraphQLList } = require('graphql')
const ro_controller = require('./ro.controllers')
const type_rol_operario = require('./type')

const query = {
    roles_operario: {
        type: new GraphQLList(type_rol_operario),
        resolve: ro_controller.get_roles_operario
    }
}
module.exports = query;