
// CRUD
const get_documentos_identificacion = async (parent, args, context, info) => {
    const client = await context.db.connect()
    try{
        const res = await client.query(`
            SELECT
                D.id_doc_ident,
                T.id_tipo_doc_ident,
                T.nombre,
                T.descripcion,
                T.cantidad_digitos,
                D.valor
            FROM documento_identificacion D
            INNER JOIN tipo_documento_identificacion T
            ON D.id_tipo_doc_ident = T.id_tipo_doc_ident;
        `);
        
        docs_ident = []
        for(const row of res.rows){
            doc_ident = {
                id_doc_ident: row.id_doc_ident,
                tipo_doc_ident: {
                    id_tipo_doc_ident: row.id_doc_ident,
                    nombre: row.nombre,
                    descripcion: row.descripcion,
                    cantidad_digitos: row.cantidad_digitos
                },
                valor: row.valor
            }
            docs_ident.push(doc_ident);
        }
        return docs_ident
    }catch(e){
        console.log(e)
    }finally {
        client.release()
    }
}

module.exports = {
    get_documentos_identificacion
};