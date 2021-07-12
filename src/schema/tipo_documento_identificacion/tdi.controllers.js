const get_tipos_documentos_indentificacion = async (parent, args, context, info) => {
    const client = await context.db.connect()
    try{
        const res = await client.query(`
            SELECT * FROM tipo_documento_identificacion;
        `);
        return res.rows;
    }catch(e){
        console.log(e)
    }finally {
        client.release()
    }
}

const create_tipo_documento_identificacion = async (parent, args, context, info) => {
    const client = await context.db.connect()
    try{
        const {nombre, descripcion, cantidad_digitos} = args.tipo_documento_identificacion;
      
        const query = `
            INSERT INTO tipo_documento_identificacion
            (nombre, descripcion, cantidad_digitos)
            VALUES($1, $2, $3) RETURNING id_tipo_doc_ident`;
        
        const res = await client.query(query, [nombre, descripcion, cantidad_digitos]);
        const id = res.rows[0]["id_tipo_doc_ident"]
        
        const res2 = await client.query('SELECT * FROM tipo_documento_identificacion WHERE id_tipo_doc_ident=$1', [id])
        return res2.rows[0];

    }catch(e){
        console.log(e);
    }finally{
        client.release()
    }
}
module.exports = {
    get_tipos_documentos_indentificacion,
    create_tipo_documento_identificacion
};
