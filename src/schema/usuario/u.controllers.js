const contacto_controller = require('../contacto/c.controllers')
const get_usuarios = async (parent, args, context, info) => {
    const client = await context.db.connect()
    try{
        const res = await client.query(`
            SELECT
                U.id_usuario,
                U.nombre,
                U.contrasenia,
                D.id_doc_ident,
                T.id_tipo_doc_ident,
                T.nombre as "nombre_tipo",
                T.descripcion as "descripcion_tipo",
                T.cantidad_digitos as "cantidad_digitos_tipo",
                D.valor
            FROM usuario U
            INNER JOIN documento_identificacion D
            ON U.id_doc_ident = D.id_doc_ident
            INNER JOIN tipo_documento_identificacion T
            ON D.id_tipo_doc_ident = T.id_tipo_doc_ident;
        `);
        usuarios = []
        for(const row of res.rows){
            usuarios.push({
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
                    valor: row.valor
                },
                contactos: await contacto_controller.get_contactos_user(row.id_usuario, client)
            })
        }
        return usuarios;
    }catch(e){
        console.log(e)
    }finally {
        client.release()
    }
}
module.exports = {
    get_usuarios
};