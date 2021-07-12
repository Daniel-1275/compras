
const { GraphQLList } = require('graphql')
const m_controller = require('./m.controllers')
const type_metodo = require('./type')

const query = {
    metodos: {
        type: new GraphQLList(type_metodo),
        resolve: m_controller.get_metodos
    }
}
module.exports = query;