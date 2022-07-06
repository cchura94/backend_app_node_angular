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

## Inicializar un nuevo repostorio local
- para clonar un repositorio existente
```bash
git clone
```
- para crear un nuevo repositorio
```bash
git init
```

