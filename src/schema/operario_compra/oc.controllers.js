const contacto_controller = require('../contacto/c.controllers')
const get_operarios_compra = async (parent, args, context, info) => {
    const client = await context.db.connect()
    try{
        const res = await client.query(`
            SELECT
                O.id_operario,
                U.id_usuario,
                U.nombre,
                U.contrasenia,
                D.id_doc_ident,
                T.id_tipo_doc_ident,
                T.nombre as "nombre_tipo",
                T.descripcion as "descripcion_tipo",
                T.cantidad_digitos as "cantidad_digitos_tipo",
                D.valor as "valor_doc_ident",
                ro.id_rol_operario,
                ro.nombre as "nombre_rol",
                ro.descripcion as "descripcion_rol",
                O.cant_pedidos_atendidos,
                O.cant_reclamos_revisados,
                O.cant_cotizaciones
            FROM operario_compra O
            INNER JOIN rol_operario ro
            ON O.id_rol_operario = ro.id_rol_operario
            INNER JOIN usuario U
            ON O.id_operario = U.id_usuario
            INNER JOIN documento_identificacion D
            ON U.id_doc_ident = D.id_doc_ident
            INNER JOIN tipo_documento_identificacion T
            ON D.id_tipo_doc_ident = T.id_tipo_doc_ident;
        `);
        const ops = []
        for(const row of res.rows){
            ops.push({
                id_operario: row.id_operario,
                usuario: {
                    id_usuario: row.id_usuario,
                    nombre: row.nombre,
                    contrasenia: row.contrasenia,
                    doc_ident: {
                        id_doc_ident: row.id_doc_ident,
                        tipo_doc_ident: {
                            id_tipo_doc_ident: row.id_tipo_doc_ident,
                            nombre: row.nombre_tipo,
                            descripcion: row.descripcion_tipo,
                            cantidad_digitos: row.cantidad_digitos_tipo 
                        },
                        valor: row.valor_doc_ident,
                    },
                    contactos: await contacto_controller.get_contactos_user(row.id_usuario, client)
                },
                rol_operario: {
                    id_rol_operario: row.id_rol_operario,
                    nombre: row.nombre_rol,
                    descripcion: row.descripcion_rol
                },
                cant_pedidos_atendidos: row.cant_pedidos_atendidos,
                cant_reclamos_revisados: row.cant_reclamos_revisados,
                cant_cotizaciones: row.cant_cotizaciones
            })
        }
        return ops
    }catch(e){
        console.log(e)
    }finally {
        client.release()
    }
}
module.exports = {
    get_operarios_compra
};