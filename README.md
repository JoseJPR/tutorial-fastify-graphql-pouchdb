# Tutorial Fastify with GraphQL and PouchDB

[![standard-readme compliant](https://img.shields.io/badge/readme%20style-standard-brightgreen.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)
[![Twitter: JoseJ_PR](https://img.shields.io/twitter/url?color=1991DA&label=Twitter%20%40JoseJ_PR&logo=twitter&logoColor=FFFFFF&style=flat-square&url=https%3A%2F%2Ftwitter.com%2FJoseJ_PR)](https://twitter.com/JoseJ_PR)

![Banner](./assets/banner.jpg)

## 🔖 Description

Tutorial and Examples of how to work with Fastify, GraphQL and PouchDB. Working via REST API and GraphQL API with Postman and GraphiQL.

## 📹 Video Demo

The following videos shows how you can work with this project and execute request to the REST API from Postman and to the GraphQL API from Postman and from GraphiQL.

* Run NPM Install and create seed for the first Start. \
[![Video 1](./assets/youtube.svg)](https://youtu.be/yGok2F_uwnc)

* How work with Rest API via Postman \
[![Video 2](./assets/youtube.svg)](https://youtu.be/e4fMmqM9wmU)

* How work with GraphQL API via Postman \
[![Video 3](./assets/youtube.svg)](https://youtu.be/XVdTICKYBjs)

* How work with GraphQL API via GraphiQL \
[![Video 4](./assets/youtube.svg)](https://youtu.be/ohtADcIkfQI)

## 📌 Methodologies and Guidelines

List of methodologies and tools used in this project for compliance with Quality Assurance Code (QAC)

* TypeScript, These projects provide templates which include TypeScript support. \
  [NPM TypeScript](https://www.npmjs.com/package/typescript)
* ESTlint, tool for identifying and reporting on patterns found in ECMAScript/JavaScript code. \
  [NPM ESLint](https://www.npmjs.com/package/eslint) \
  [NPM ESLint | Airbnb](https://www.npmjs.com/package/eslint-config-airbnb)
* Jest, delightful JavaScript Testing. \
  [NPM Jest](https://www.npmjs.com/package/jest)
* SuperTest, HTTP assertions made easy via superagent. \
  [NPM SuperTest](https://www.npmjs.com/package/supertest)
* Mozilla, Standard HTTP response status codes. \
  [HTTP Status MOZILLA](https://developer.mozilla.org/es/docs/Web/HTTP/Status)

## ⚡️ Technologies and Tools

The project structure has been created with Yeoman and Generator Standard REST API Projects.

* [Yeoman](https://yeoman.io/)
* [Yeoman | Generator Standard REST API Projects](https://github.com/JoseJPR/yeoman-generator-rest-api-projects)

The main libraries and tools used in this project are:

* [Fastify](https://www.fastify.io/)
* [GraphQL](https://graphql.org/)
* [PouchDB](https://pouchdb.com/)

## ✅ Prerequisites

In order to work with this project, your local environment must have at least the following versions:

* NodeJS Version: 12.xx
* NPM Version: 6.12.0

## 🌀 Workflow HTTP REST API

With these two graphs I want to expose the life cycle when we use the endpoints with GraphQL and without it.

**Fastify and PouchDB**
![Banner](./assets/fastify-puchdb.png)

**Fastify, GraphQL and PouchDB**
![Banner](./assets/fastify-graphql-puchdb.png)

## 📐 How to work with this project

You have to do the following steps to be able to work with this project.

### 1️⃣ Install NodeJS Dependencies
To work with this project locally and to be able to deploy in different environments, it is necessary to install the NPM dependencies.

```bash
# Install npm dependencies
$npm i
```

### 2️⃣ Development

To add the seed for /articles endpoints you will have to execute the following command:

```bash
# Seed
$npm run create:seed
```

To run the project locally and to develop you will have to execute the following command _(You will see a message on your terminal with the address and port of the local server)_:

```bash
# Run
$npm run start:watch
```

To run the unit tests of this project you will have to execute the following command:

```bash
# Tests
$npm run test
```

## 🔌 Enviroments files

If you have selected one or more environments you will see an env file for each environment that you can modify. The complete list of the .env files that you should have in the "env" folder should be:

* .env.local

## 📂 Code scaffolding

```any
/
├── assets 🌈               # Images Sources.
├── doc
|   ├── api 🚠              # Api Versions.
|   ├── qac 🔰              # Quality Assurance Code.
├── env 🔌                  # Configure enviroments deploy.
├── src
|   ├── __mocks__ 👻        # Mocks data for test.
|   ├── __tests__ 🚥        # Unit tests.
|   ├── config              # Generic config.
|   ├── controllers         # Controllers.
|   ├── libs                # Custom libreries and tools.
|   ├── resolvers           # GraphQL Resolvers.
|   ├── routes              # Routes.
|   ├── services            # Services.
|   ├── shemas              # GraphQL Shemas.
|   ├── types               # TypeScript types.
|   └── ...
└── ...
```

## 📦 Core and Libraries

This project is based on the Fastify framework as a core for the development of the project structure and with custom libraries.

## 🚠 API Documentation

| Version | DOC | Postman |
| ------- | --- | ------- |
| REST | [More Info](./doc/api/REST.md)| [Collection](./doc/api/postman-collection-rest.json) |
| GraphQL | [More Info](./doc/api/GRAPHQL.md)| [Collection](./doc/api/postman-collection-graphql.json) |

## 🔮 GraphiQL

GraphiQL is the reference implementation of this monorepo, GraphQL IDE, an official project under the GraphQL Foundation.

You can to work with the GraphiQL IDE in your browser.

* [GraphiQL Info and Examples](./doc/api/GRAPHIQL.md)

## ⛽️ Review and Update Dependences

For review and update all npm dependences of this project you need install in global npm package "npm-check-updates" npm module.

```bash
# Install and Run
$npm i -g npm-check-updates

# Run library to check npm modules
$ncu
```

## Happy Code

Created with JavaScript, lot of ❤️ and a few ☕️

## This README.md file has been written keeping in mind

* [GitHub Markdown](https://guides.github.com/features/mastering-markdown/)
* [Emoji Cheat Sheet](https://www.webfx.com/tools/emoji-cheat-sheet/)
