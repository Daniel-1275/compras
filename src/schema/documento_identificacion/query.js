const { GraphQLList } = require('graphql')
const di_controller = require('./di.controllers')
const type_documento_identificacion = require('./type')

const query = {
    documentos_identificacion: {
        type: new GraphQLList(type_documento_identificacion),
        resolve: di_controller.get_documentos_identificacion
    }
}
module.exports = query;