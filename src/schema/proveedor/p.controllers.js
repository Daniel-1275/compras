const contacto_controller = require('../contacto/c.controllers')
const get_proveedores = async (parent, args, context, info) => {
    const client = await context.db.connect()
    try{
        
        const res = await client.query(`
            SELECT
                Prov.id_proveedor,
                N.id_nacionalidad,
                N.descripcion as "descripcion_nacionalidad",
                U.id_usuario,
                U.nombre as "nombre_usuario",
                U.contrasenia,
                D.id_doc_ident,
                T.id_tipo_doc_ident,
                T.nombre as "nombre_tipo",
                T.descripcion as "descripcion_tipo",
                T.cantidad_digitos as "cantidad_digitos_tipo",
                D.valor as "valor_doc_ident",
                Prov.cotizaciones_ganadas,
                Prov.entregas_cumplidas,
                Prov.entregas_no_cumplidas,
                Prov.entregas_destiempo,
                Prov.cant_cotizaciones,
                Prov.fecha_reg_prov,
                Prov.calif_prov
            FROM proveedor Prov
            INNER JOIN nacionalidad N
            ON Prov.id_nacionalidad = N.id_nacionalidad
            INNER JOIN usuario U
            ON Prov.id_proveedor = U.id_usuario
            INNER JOIN documento_identificacion D
            ON U.id_doc_ident = D.id_doc_ident
            INNER JOIN tipo_documento_identificacion T
            ON D.id_tipo_doc_ident = T.id_tipo_doc_ident;
        `);
        const proveedores = []
        for(const row of res.rows){
            proveedores.push({
                id_proveedor: row.id_proveedor,
                nacionalidad:{
                    id_nacionalidad: row.id_nacionalidad,
                    descripcion: row.descripcion_nacionalidad
                },
                usuario: {
                    id_usuario: row.id_usuario,
                    nombre: row.nombre_usuario,
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
                cotizaciones_ganadas: row.cotizaciones_ganadas,
                entregas_cumplidas: row.entregas_cumplidas,
                entregas_no_cumplidas: row.entregas_no_cumplidas,
                entregas_destiempo: row.entregas_destiempo,
                cant_cotizaciones: row.cant_cotizaciones,
                fecha_reg_prov: row.fecha_reg_prov,
                calif_prov: row.calif_prov
            })
        }
        return proveedores;
    }catch(e){
        console.log(e)
    }finally {
        client.release()
    }
}
module.exports = {
    get_proveedores
};