
const { GraphQLList } = require('graphql')
const tdi_controller = require('./tdi.controllers')
const type_tipo_documento_identificacion = require('./type')

const query = {
    tipos_documentos_identificacion: {
        type: new GraphQLList(type_tipo_documento_identificacion),
        resolve: tdi_controller.get_tipos_documentos_indentificacion
    }
}
module.exports = query;