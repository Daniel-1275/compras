const get_operaciones_metodo = async (parent, args, context, info) => {
    const client = await context.db.connect()
    try{
        const res = await client.query(`
            SELECT * FROM operacion_metodo;
        `);
        
        return res.rows;
    }catch(e){
        console.log(e)
    }finally {
        client.release()
    }
}
const get_metodos_secuencia = async (id_operacion, client) => {
    try{
        const res = await client.query(`
            SELECT
                M.id_metodo,
                M.descripcion_metodo,
                OM.secuencia as "secuencia_metodo"
            FROM operacion O
            INNER JOIN operacion_metodo OM
            ON O.id_operacion = OM.id_operacion
            INNER JOIN metodo M
            ON OM.id_metodo = M.id_metodo
            WHERE O.id_operacion = ${id_operacion};
        `);
        const metodos = [];
        const secuencia_metodo = [];
        for(const row of res.rows){
            metodos.push({
                id_metodo: row.id_metodo,
                descripcion_metodo: row.descripcion_metodo
            })
            secuencia_metodo.push(row.secuencia_metodo)
        }

        return {
            metodos: metodos,
            secuencia: secuencia_metodo
        }

    }catch(e){
        console.log(e)
    }
}
    
module.exports = {
    get_operaciones_metodo,
    get_metodos_secuencia
};