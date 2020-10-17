*API para login de usuarios con token-session. Solamente sera el backend.*

---

## 1. Comenzando

Para obtener el proyecto debemos:

```jsx
git clone https://github.com/lucabecci/API-passport-jwt
//copiamos el directorio
```

## 2. Pre-requisitos

Que necesitamos para un buen funcionamiento del directorio:

- node.JS > 10.x
- npm > 6.x

## 3. Instalación

Para tener un entorno de desarrollo de este proyecto tenemos que: 

```jsx
Con npm: 
cd REST-passport //entramos al directorio.
npm install //instalamos las dependencias del proyecto.
npm run dev //podemos correrlo con el script dev(se ejecuta con nodemon).
//o
npm start //podemos correrlo con el script start(se ejecuta con node).

Con yarn:
cd REST-passport //entramos al directorio.
yarn install //instalamos las dependencias del proyecto.
yarn run dev //podemos correrlo con el script dev(se ejecuta con tsc-watch).
//o
yarn run build //generamos el codigo de prod.
yarn run start //ejecutamos el codigo de prod con node.
```

## 4. Estructura del proyecto:

```javascript
|-- dist
|-- node_modules
|-- src
    |-- config
        |-- config.ts
    |-- controllers
        |-- user.controller.ts
    |-- database
        |-- database.ts
    |-- middlewares
        |-- passport.ts
    |-- models
        |-- User.ts
    |-- routes
        |-- auth.routes.ts
        |-- special.routes.ts
    |-- app.ts
    |-- index.ts
|--.gitignore
|--.prettierignore
|-- .prettierrc
|-- commitlint.config.js
|-- package.json
|-- README.md
|-- tsconfig.json
|-- yarn.lock
```

## 4. Construido con:

Herramientas que utilice para crear esta API:

Produccion:

- [express](https://expressjs.com) - Infraestructura de aplicaciones web Node.js.
- [morgan](https://www.npmjs.com/package/morgan) - Es un middleware para registrador de solicitudes HTTP para node.js.
- [jsonwebtoken](https://www.npmjs.com/package/uuid) - Para la creación de UUID RFC4122.
- [passport](https://www.npmjs.com/package/rimraf) - El comando de UNIX rm -rf para node.
- [passport-jwt](https://www.npmjs.com/package/multer) - Middleware de node.js para el manejo multipart/form-data, que se usa principalmente para cargar archivos.
- [mongoose](https://mongoosejs.com/) - Biblioteca basada en esquemas para modelar los datos de su aplicación.
- [cors](https://www.npmjs.com/package/cors) - CORS is a node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options.
- [bcrypt](https://www.npmjs.com/package/bcryptjs) - Optimized bcrypt in JavaScript with zero dependencies.

Desarrollo: 

- [tsc-watch](https://www.npmjs.com/package/ts-node) - Ejecución de TypeScript y REPL para node.js.
- [typescript](https://www.typescriptlang.org/) - Superconjunto de JavaScript, que añade tipos estáticos y objetos basados en clases.
- [husky](https://www.npmjs.com/package/husky) - Husky es una herramienta que puede prevenir el mal git commit, git push y más. También podemos utilizarla para realizar varias ejecuciones de scripts antes de hacer un commit o un push.
- [commitlint](https://commitlint.js.org/#/) - Herramienta para utilizar una convención de commits, nuestro caso es Conventional Comits.
- [prettier](https://prettier.io/) - Es una herramienta que sirve como  formateador de código.

## 5. Versionado

Para el versionado se utilizo [ConventionalCommits](https://www.conventionalcommits.org/en/v1.0.0/)

## 6. Autor

***Luca Becci -** trabajo y documentación.*

- [github](https://github.com/lucabecci)
- [twitter](https://twitter.com/lucabecci)