
const om_controller = require('../operacion_metodo/om.controllers')
const get_transacciones_operaciones = async (parent, args, context, info) => {
    const client = await context.db.connect()
    try{
        const res = await client.query(`
            SELECT * FROM transaccion_operacion
        `);
        return res.rows
    }catch(e){
        console.log(e)
    }finally {
        client.release()
    }
}
const get_operaciones_secuencia = async (id_transaccion, client) => {
    
    const res = await client.query(`
        SELECT
            O.id_operacion,
            O.descripcion_operacion,
            _TO.secuencia as "secuencia_operacion"
        FROM transaccion T
        INNER JOIN transaccion_operacion _TO
        ON T.id_transaccion = _TO.id_transaccion
        INNER JOIN operacion O
        ON _TO.id_operacion = O.id_operacion
        WHERE T.id_transaccion = ${id_transaccion};
    `)
    const operaciones = []
    const secuencia_operacion = []
    for(const row of res.rows){
        secuencia_operacion.push(row.secuencia_operacion)
        operaciones.push({
            id_operacion: row.id_operacion,
            descripcion_operacion: row.descripcion_operacion,
            ... await om_controller.get_metodos_secuencia(row.id_operacion, client)
         })
    }
    
    return {
        operaciones: operaciones,
        secuencia: secuencia_operacion
    }
}
module.exports = {
    get_transacciones_operaciones,
    get_operaciones_secuencia
};