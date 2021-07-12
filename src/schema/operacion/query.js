
const { GraphQLList } = require('graphql')
const o_controller = require('./o.controllers')
const type_operacion = require('./type')

const query = {
    operaciones: {
        type: new GraphQLList(type_operacion),
        resolve: o_controller.get_operaciones
    }
}
module.exports = query;