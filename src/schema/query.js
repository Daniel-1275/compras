
const { GraphQLObjectType } = require('graphql')
const query_tipo_documento_identificacion = require('./tipo_documento_identificacion/query')
const query_documento_identificacion = require('./documento_identificacion/query')
const query_usuario = require('./usuario/query')
const query_rol_operario = require('./rol_operario/query')
const query_operario_compra = require('./operario_compra/query')
const query_tipo_contacto = require('./tipo_contacto/query')
const query_contacto = require('./contacto/query')
const query_empresa = require('./empresa/query')
const query_area = require('./area/query')
const query_metodo = require('./metodo/query')
const query_operacion = require('./operacion/query')
const query_operacion_metodo = require('./operacion_metodo/query')
const query_transaccion = require('./transaccion/query')
const query_transaccion_operacion = require('./transaccion_operacion/query')
const query_nacionalidad = require('./nacionalidad/query')
const query_proveedor = require('./proveedor/query')
const query_rubro = require('./rubro/query')
const query_familia = require('./familia/query')

const query_estado_producto = require('./estado_producto/query')
const rootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: () => ({
      ...query_tipo_documento_identificacion,
      ...query_documento_identificacion,
      ...query_usuario,
      ...query_rol_operario,
      ...query_operario_compra,
      ...query_tipo_contacto,
      ...query_contacto,
      ...query_empresa,
      ...query_area,
      ...query_metodo,
      ...query_operacion,
      ...query_operacion_metodo,
      ...query_transaccion,
      ...query_transaccion_operacion,
      ...query_nacionalidad,
      ...query_proveedor,
      ...query_rubro,
      ...query_familia,

      ...query_estado_producto
    })
  });
module.exports = rootQuery;
