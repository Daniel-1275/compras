
const { GraphQLList } = require('graphql')
const p_controller = require('./p.controllers')
const type_proveedor = require('./type')

const query = {
    proveedores: {
        type: new GraphQLList(type_proveedor),
        resolve: p_controller.get_proveedores
    }
}
module.exports = query;