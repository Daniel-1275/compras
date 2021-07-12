
const { GraphQLList } = require('graphql')
const tc_controller = require('./tc.controllers')
const type_tipo_contacto = require('./type')

const query = {
    tipos_contacto: {
        type: new GraphQLList(type_tipo_contacto),
        resolve: tc_controller.get_tipos_contacto
    }
}
module.exports = query;