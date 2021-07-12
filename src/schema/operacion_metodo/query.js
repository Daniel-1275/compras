
const { GraphQLList } = require('graphql')
const om_controller = require('./om.controllers')
const type_operacion_metodo = require('./type')

const query = {
    operaciones_metodo: {
        type: new GraphQLList(type_operacion_metodo),
        resolve: om_controller.get_operaciones_metodo
    }
}
module.exports = query;