import models from "../models"


/**
 * 
 * http.//127.0.0.1:3000/api/producto?page=1$limit=10
 *  
 */
export async function listaPaginacion(req, res) {

    try {
        // paginar
        let page = req.query.page;
        let limit = req.query.limit;

        let offset = 0+(page-1)*10;

        let lista_productos = await models.Producto.findAndCountAll({
            limit: limit,
            offset: offset
        });

        res.status(200).json(lista_productos)

        
    } catch (error) {
        res.status(500).json({
            mensaje: "Problemas con el servidor",
            error: error
        })
        
    }
    
}