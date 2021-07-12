const contacto_controller = require('../contacto/c.controllers')
const get_areas = async (parent, args, context, info) => {
    const client = await context.db.connect()
    try{
        const res = await client.query(`
            SELECT
                A.id_area,
                A.nombre as "nombre_area",
                E.id_empresa,
                E.nombre as "nombre_empresa",
                U.id_usuario,
                U.nombre as "nombre_usuario",
                U.contrasenia,
                D.id_doc_ident,
                T.id_tipo_doc_ident,
                T.nombre as "nombre_tipo",
                T.descripcion as "descripcion_tipo",
                T.cantidad_digitos as "cantidad_digitos_tipo",
                D.valor as "valor_doc_ident",
                A.cant_reclamos_realizados,
                A.cant_reclamos_rechazados,
                A.cant_pedidos_realizados,
                A.cant_pedidos_rechazados
            FROM area A
            INNER JOIN empresa E
            ON A.id_empresa = E.id_empresa
            INNER JOIN usuario U
            ON A.id_area = U.id_usuario
            INNER JOIN documento_identificacion D
            ON U.id_doc_ident = D.id_doc_ident
            INNER JOIN tipo_documento_identificacion T
            ON D.id_tipo_doc_ident = T.id_tipo_doc_ident;    
        `);
        const areas = []
        for(const row of res.rows){
            areas.push({
                id_area: row.id_area,
                nombre: row.nombre_area,
                empresa: {
                    id_empresa: row.id_empresa,
                    nombre: row.nombre_empresa
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
                cant_reclamos_realizados: row.cant_reclamos_realizados,
	            cant_reclamos_rechazados: row.cant_reclamos_rechazados,
	            cant_pedidos_realizados: row.cant_pedidos_realizados,
	            cant_pedidos_rechazados: row.cant_pedidos_rechazados
            })
        }
        return areas;
    }catch(e){
        console.log(e)
    }finally {
        client.release()
    }
}
module.exports = {
    get_areas
};