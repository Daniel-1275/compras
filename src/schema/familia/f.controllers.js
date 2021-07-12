const get_familias = async (parent, args, context, info) => {
    const client = await context.db.connect()
    try{
        const res = await client.query(`
            SELECT 
                F.id_familia,
                F.descripcion_familia,
                R.id_rubro,
                R.descripcion_rubro
            FROM familia F
            INNER JOIN rubro R
            ON F.id_rubro = R.id_rubro;
        `);
        const familias = []
        for(const row of res.rows){
            familias.push({
                id_familia: row.id_familia,
                descripcion_familia: row.descripcion_familia,
                rubro: {
                    id_rubro: row.id_rubro,
                    descripcion_rubro: row.descripcion_rubro
                }
            })
        }
        return familias;
    }catch(e){
        console.log(e)
    }finally {
        client.release()
    }
}

module.exports = {
    get_familias
};