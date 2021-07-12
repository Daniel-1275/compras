const get_rubros = async (parent, args, context, info) => {
    const client = await context.db.connect()
    try{
        const res = await client.query(`
            SELECT * FROM rubro;
        `);
        return res.rows;
    }catch(e){
        console.log(e)
    }finally {
        client.release()
    }
}

module.exports = {
    get_rubros
};