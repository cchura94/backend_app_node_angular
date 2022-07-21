import { Router } from "express"
import * as authController from './../controllers/auth.controller'
import * as authMiddleware from "./../middlewares/auth.middleware"
import * as usuarioController from './../controllers/usuario.controller'
import * as categoriaController from './../controllers/categoria.controller'
import * as productoController from './../controllers/producto.controller'


export const Route = Router()
// rutas AUTH
Route.post('/auth/login', authController.login);
Route.post('/auth/registro', authController.registro);

Route.get('/auth/perfil', authMiddleware.auth, authController.perfil);

// rutas usuario
Route.get('/usuario', authMiddleware.auth, usuarioController.listaUsuarios);
Route.post('/usuario', authMiddleware.auth, usuarioController.guardarUsuario);
Route.get('/usuario/:id', authMiddleware.auth, usuarioController.mostrarUsuario);
Route.put('/usuario/:id', authMiddleware.auth, usuarioController.modificarUsuario);
Route.delete('/usuario/:id', authMiddleware.auth, usuarioController.eliminarUsuario);

// rutas categoria
Route.get('/categoria', authMiddleware.auth, categoriaController.listaCategoria);
Route.post('/categoria', authMiddleware.auth, categoriaController.guardarCategoria);
Route.get('/categoria/:id', authMiddleware.auth, categoriaController.mostrarCategoria);
Route.put('/categoria/:id', authMiddleware.auth, categoriaController.modificarCategoria);
Route.delete('/categoria/:id', authMiddleware.auth, categoriaController.eliminarCategoria);

// rutas producto
Route.get('/producto', authMiddleware.auth, productoController.listaPaginacion);
