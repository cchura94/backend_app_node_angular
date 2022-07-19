import { Router } from "express"
import * as authController from './../controllers/auth.controller'
import * as authMiddleware from "./../middlewares/auth.middleware"
import * as usuarioController from './../controllers/usuario.controller'

export const Route = Router()
// rutas AUTH
Route.post('/auth/login', authController.login);
Route.post('/auth/registro', authController.registro);

Route.get('/auth/perfil', authMiddleware.auth, authController.perfil);

// rutas usuario
Route.get('/usuario', usuarioController.listaUsuarios);
Route.post('/usuario', authMiddleware.auth, usuarioController.guardarUsuario);
Route.get('/usuario/:id', usuarioController.mostrarUsuario);
Route.put('/usuario/:id', authMiddleware.auth, usuarioController.modificarUsuario);
Route.delete('/usuario/:id', authMiddleware.auth, usuarioController.eliminarUsuario);
