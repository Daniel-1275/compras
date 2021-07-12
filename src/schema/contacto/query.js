
const { GraphQLList } = require('graphql')
const c_controller = require('./c.controllers')
const type_contacto = require('./type')

const query = {
    contactos: {
        type: new GraphQLList(type_contacto),
        resolve: c_controller.get_contactos
    }
}
module.exports = query;