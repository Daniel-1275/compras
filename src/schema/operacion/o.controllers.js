
const operacion_metodo_controller = require('../operacion_metodo/om.controllers')
const get_operaciones = async (parent, args, context, info) => {
    const client = await context.db.connect()
    try{
        const res = await client.query(`
            SELECT * FROM operacion
        `);
        const operaciones = []
        for(const row of res.rows){
            operaciones.push({
                id_operacion: row.id_operacion,
                descripcion_operacion: row.descripcion_operacion,
                ... await operacion_metodo_controller.get_metodos_secuencia(row.id_operacion, client)
            });
        }
        return operaciones;
    }catch(e){
        console.log(e)
    }finally {
        client.release()
    }
}
module.exports = {
    get_operaciones
};