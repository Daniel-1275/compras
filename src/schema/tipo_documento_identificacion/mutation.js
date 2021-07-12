const tipo_documento_identificacion = require("./type");
const tdi_controller = require('./tdi.controllers');
const tdi_input = require('./tdi.input');
const mutation = {
    create_tipo_documento_identificacion: {
        type: tipo_documento_identificacion,
        args: {
            tipo_documento_identificacion: { type: tdi_input, required: true}
        },
        resolve: tdi_controller.create_tipo_documento_identificacion
    }
}
module.exports = mutation;