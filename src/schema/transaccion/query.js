
const { GraphQLList } = require('graphql')
const t_controller = require('./t.controllers')
const type_transaccion= require('./type')

const query = {
    transacciones: {
        type: new GraphQLList(type_transaccion),
        resolve: t_controller.get_transacciones
    }
}
module.exports = query;