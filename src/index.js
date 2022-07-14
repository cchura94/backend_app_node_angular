import express from "express"
var cors = require('cors')
// importar modulos locales
import { Route } from "./router"


// variables auxiliares
const PORT = process.env.PORT || 3000

// iniciamos la app con express
const app = express()


app.use(cors())

// para cargar archivos estaticos
app.use(express.static('public'))

// para req.body
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded


// habilitar rutas
app.use('/api', Route)

// Levantar el Servidor
app.listen(PORT, () => {
    console.log(`Servidor levantado en http://127.0.0.1:${PORT}`);
});
