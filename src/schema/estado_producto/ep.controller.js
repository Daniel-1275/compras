const get_estado_prodcuto = async (parent, args, context, info) => {
    const client = await context.db.connect()
    try{
        const res = await client.query(`
            SELECT * FROM estado_producto;
        `);
        return res.rows;
    }catch(e){
        console.log(e)
    }finally {
        client.release()
    }
}
module.exports = {
    get_estado_prodcuto
};