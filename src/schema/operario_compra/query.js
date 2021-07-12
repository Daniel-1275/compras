
const { GraphQLList } = require('graphql')
const oc_controller = require('./oc.controllers')
const type_operario_compra = require('./type')

const query = {
    operarios_compra: {
        type: new GraphQLList(type_operario_compra),
        resolve: oc_controller.get_operarios_compra
    }
}
module.exports = query;