# Instalar y Habilitar Sequelize y Sequelize-CLI
- para migraciones, modelos, seeders y conexion con BD

## 1. Instalar Sequelize
```bash
npm i sequelize
```
## 2. Instalar Sequelize-cli
```bash
npm install --save-dev sequelize-cli
```
## 3. Configurar .sequlizerc

```js
const path = require('path');

module.exports = {
  'config': path.resolve('src/config', 'database.json'),
  'models-path': path.resolve('src', 'models'),
  'seeders-path': path.resolve('src', 'seeders'),
  'migrations-path': path.resolve('src', 'migrations')
};
```
## 4. Iniciar un nuevo proyecto con sequilize-cli
```bash
npx sequelize-cli init
``` 

------
# Comandos de GIT y Github
## Descargar e Instalar GIT
```
https://git-scm.com/
```
- Luego Instalar
- Para configurar agregar usuario y correo y luego ejecutar 
```
git config --global user.name "su nombre"
git config --global user.email "micorreo@mail.com"
```
- Crear una cuenta github, bitbucket o Gitlab

## Inicializar un nuevo repostorio local o clonar
- para clonar un repositorio existente
```bash
git clone
```
- para crear un nuevo repositorio
```bash
git init
```
- para ingnorar archivos y o carpetas
- creamos un archivo (.gitignore) y registramos los archivo o carpetas
```
/node_modules
/dist
package-lock.json
.env
```
## Registrar el repositorio remote (GITHUB, BITBUCKET O GITLAB)
- En este caso con GITHUB
```
git remote add origin https://github.com/cchura94/backend_app_node_angular.git
```
-----
##  Para agregar todos los archivos al (index)
```
git add .
```
## Para agreegar o registrar los cambios agregamos un mensaje commit (head)
```
git commit -m "Configuracion base de proyecto node"
```
## Para subir tosos los cambios al repositorio remoto
```
git push -u origin master
```