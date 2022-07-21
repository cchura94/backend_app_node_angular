# Comandos Sequelize
## para Generar models y migraciones
```
npx sequelize-cli model:generate --name Usuario --attributes username:string,email:string,password:string,estado:boolean

npx sequelize-cli model:generate --name Categoria --attributes nombre:string,detalle:text

npx sequelize-cli model:generate --name Producto --attributes nombre:string,precio:decimal,stock:integer,imagen:string,estado:boolean,descripcion:text,categoriaId:integer

npx sequelize-cli model:generate --name Cliente --attributes nombre_completo:string,ci_nit:string,telefono:string,correo:string

npx sequelize-cli model:generate --name Pedido --attributes fecha_pedido:date,nro_factura:string,userId:integer,estado:integer,clienteId:integer
``` 