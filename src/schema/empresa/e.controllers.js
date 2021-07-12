const get_empresas = async (parent, args, context, info) => {
    const client = await context.db.connect()
    try{
        const res = await client.query(`
            SELECT * FROM empresa;
        `);
        return res.rows;
    }catch(e){
        console.log(e)
    }finally {
        client.release()
    }
}
module.exports = {
    get_empresas
};