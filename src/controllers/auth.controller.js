import models from "./../models"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

/**
 * Login (autenticación)
 * @param {*} req solicitud
 * @param {*} res respuesta
 * @returns returna un token mas el usuario
 */
export async function login(req, res) {
    
    const { email, password } = req.body;

    // busqueda de un usuario por email
    let user = await models.Usuario.findOne({
        where: {
            email: email
        }
    })

    // si el usuario no existe
    if(!user){
        return res.status(422).send({
            mensaje: "Credenciales incorrectas"
        })
    }

    // verificar la contraseña
    let correcto = await bcrypt.compare(password, user.password);
    if(correcto){
        // generar token
        let payload = {
            id: user.id,
            email: user.email,
            time: new Date()
        }

        const token = jwt.sign(payload, "MI_CODIGO_SECRETO", {
            expiresIn: 60*60
        })

        res.status(200).send({
            access_token: token,
            usuario: user,
            error: false
        })
    }else{
        return res.status(422).send({
            mensaje: "Contraseña incorrectas"
        })
    }
}

/**
 * Registro de nuevo usuarios
 * @param {body} req datos de solicitud
 * @param {*} res respuesta para el servidor
 */
export const registro = async function(req, res){
    let user = await models.Usuario.findOne({
        where: {
            email: req.body.email
        }
    })

    if(!user){
        // cifrar la contraseña
        let pass_cifrado = await bcrypt.hash(req.body.password, 12)
        req.body.password = pass_cifrado
        await models.Usuario.create(req.body)
        res.status(200).send({mensaje: "Usuario registrado"})
    }else{
        res.status(200).send({mensaje: "El correo ya está registrado"})
    }
}


export const perfil = (req, res) =>{
    res.json({mensaje: "estás logueado..."})
}

