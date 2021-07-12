
const get_contactos_user = async (id_usuario, client) => {
    const res = await client.query(`
        SELECT 
            TC.id_tipo_contacto,
            TC.nombre,
            TC.descripcion,
            C.valor
        FROM contacto C
        INNER JOIN tipo_contacto TC
        ON C.id_tipo_contacto = TC.id_tipo_contacto
        WHERE C.id_usuario = ${id_usuario};
    `);
    contactos = []
    for(const row of res.rows){
        contactos.push({
            id_usuario: id_usuario,
            tipo_contacto: {
                id_tipo_contacto: row.id_tipo_contacto,
                nombre: row.nombre,
                descripcion: row.descripcion
            },
            valor: row.valor
        })
    }
    return contactos;

}
const get_contactos = async (parent, args, context, info) => {
    const client = await context.db.connect()
    try{
        const res = await client.query(`
            SELECT
                C.id_usuario,
                TC.id_tipo_contacto,
                TC.nombre as "nombre_tipo_contacto",
                TC.descripcion as "descripcion_tipo_contacto",
                C.valor
            FROM contacto C
            INNER JOIN tipo_contacto TC
            ON C.id_tipo_contacto = TC.id_tipo_contacto;
        `);
        contactos = []
        for(const row of res.rows){
            contactos.push({
                id_usuario: row.id_usuario,
                tipo_contacto: {
                    id_tipo_contacto: row.id_tipo_contacto,
                    nombre: row.nombre_tipo_contacto,
                    descripcion: row.descripcion_tipo_contacto
                },
                valor: row.valor
            })
        }
        return contactos;
    }catch(e){
        console.log(e)
    }finally {
        client.release()
    }
}
module.exports = {
    get_contactos,
    get_contactos_user
};