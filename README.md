* API for user login with token-session. It will only be the backend. *

---

## 1. Starting

To obtain the project we must:

```jsx
git clone https://github.com/lucabecci/API-passport-jwt
//we copy the directory
```

## 2. Pre-requirements

What we need for the directory to function properly:

- node.JS > 10.x
- npm > 6.x

## 3. Installation

To have a development environment for this project we have to:

```jsx
With npm: 
cd REST-passport //we entered the directory.
npm install //we install the project dependencies.
npm run dev //we can run it with the dev script (it runs with nodemon).
//o
npm start //we can run it with the start script (it is executed with node).

With yarn:
cd REST-passport //we entered the directory.
yarn install //we install the project dependencies.
yarn run dev //we can run it with the dev script (run with tsc-watch).
//o
yarn run build //we generate the prod code.
yarn run start //we execute the prod code with node.
```

## 4. Project structure:

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

## 4. Built with:

Tools you use to create this API:

Production:

- [express](https://expressjs.com) - Fast, unopinionated, minimalist web framework for node.
- [morgan](https://www.npmjs.com/package/morgan) - HTTP request logger middleware for node.js
- [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken) - An implementation of JSON Web Tokens.
- [passport](https://www.npmjs.com/package/passport) - Passport is Express-compatible authentication middleware for Node.js.
- [passport-jwt](https://www.npmjs.com/package/passport-jwt) - A Passport strategy for authenticating with a JSON Web Token.
- [mongoose](https://mongoosejs.com/) - Mongoose is a MongoDB object modeling tool designed to work in an asynchronous environment. Mongoose supports both promises and callbacks.
- [cors](https://www.npmjs.com/package/cors) - CORS is a node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options.
- [bcrypt](https://www.npmjs.com/package/bcryptjs) - Optimized bcrypt in JavaScript with zero dependencies.

Developing: 

- [tsc-watch](https://www.npmjs.com/package/tsc-watch) - tsc-watch was created to allow an easy dev process with TypeScript. Commonly used to restart a node server, similar to nodemon but for TypeScript.
- [typescript](https://www.typescriptlang.org/) - TypeScript is a language for application-scale JavaScript. 
- [husky](https://www.npmjs.com/package/husky) - Husky can prevent bad git commit, git push and more 🐶 woof!
- [commitlint](https://commitlint.js.org/#/) - commitlint helps your team adhering to a commit convention. By supporting npm-installed configurations it makes sharing of commit conventions easy.
- [prettier](https://prettier.io/) - Prettier is an opinionated code formatter. 

## 5. versioned

For the versioning, [ConventionalCommits] was used (https://www.conventionalcommits.org/en/v1.0.0/)

## 6. Author

***Luca Becci -** code practise and documentation*

- [github](https://github.com/lucabecci)
- [twitter](https://twitter.com/lucabecci)