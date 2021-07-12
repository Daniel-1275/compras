
const { GraphQLList } = require('graphql')
const to_controller = require('./to.controllers')
const type_transaccion_operacion = require('./type')

const query = {
    transacciones_operacion: {
        type: new GraphQLList(type_transaccion_operacion),
        resolve: to_controller.get_transacciones_operaciones
    }
}
module.exports = query;