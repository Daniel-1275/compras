
const transaccion_operacion_controller = require('../transaccion_operacion/to.controllers')
const get_transacciones = async (parent, args, context, info) => {
    const client = await context.db.connect()
    try{
        const res = await client.query(`
            SELECT * FROM transaccion;
        `);
        const transacciones = []
        for(const row of res.rows){
            transacciones.push({
                id_transaccion: row.id_transaccion,
                descripcion_transaccion: row.descripcion_transaccion,
                ... await transaccion_operacion_controller.get_operaciones_secuencia(row.id_transaccion, client)
            });
        }
        return transacciones;
    }catch(e){
        console.log(e)
    }finally {
        client.release()
    }
}
module.exports = {
    get_transacciones
};