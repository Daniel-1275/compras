
const { GraphQLList } = require('graphql')
const e_controller = require('./e.controllers')
const type_empresa = require('./type')

const query = {
    empresas: {
        type: new GraphQLList(type_empresa),
        resolve: e_controller.get_empresas
    }
}
module.exports = query;