const get_metodos = async (parent, args, context, info) => {
    const client = await context.db.connect()
    try{
        const res = await client.query(`
            SELECT * FROM metodo
        `);
        
        return res.rows;
    }catch(e){
        console.log(e)
    }finally {
        client.release()
    }
}
module.exports = {
    get_metodos
};