import models from "../models"


/**
 * 
 * http.//127.0.0.1:3000/api/producto?page=1$limit=10
 *  
 */
export async function listaPaginacion(req, res) {

    try {
        // paginar
        let page = parseInt(req.query.page);
        let limit = parseInt(req.query.limit) 

        let offset = 0+(page-1)*10;


        let lista_pedidos = await models.Pedido.findAndCountAll({
            offset: offset,
            limit: limit,
            // include: models.Categoria
        });
console.log(lista_pedidos)

        res.status(200).json(lista_pedidos)

        
    } catch (error) {
        res.status(500).json({
            mensaje: "Problemas con el servidor",
            error: error
        })
        
    }
    
}

export const guardarPedido = async function(req, res){
    // let id = req.params.id;
    let datos = req.body;

    await models.Pedido.create(datos);
    res.status(200).json({mensaje: "Pedido Registrado", error: false})
}