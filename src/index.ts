/**
 * Wrapper Fastify Application
 * @description Wrapper class for define versions of Fastify Application.
 */

/** Import main dependences */
import dotenv from 'dotenv';
import fs from 'fs';
import fastify from 'fastify';
import GQL from 'fastify-gql';
import { makeExecutableSchema } from 'graphql-tools';

// Set config docenv by file.
dotenv.config();

/** Create Fastify App */
const app: fastify.FastifyInstance = fastify({
  logger: process.env.LOGGER, // This param can be true or false for show logs.
});

/** Register all routes */
const registerRoutes = async (): Promise<void> => {
  // Load files ts or js of endpoints folder for create routes.
  const files = fs.readdirSync(`${__dirname}/config/endpoints`);
  files.forEach(async (file: string) => {
    try {
      // Get extension file for only load .js or .ts files.
      const ext = file.split('.');
      if (ext.length === 2 && process.env.EXTENSIONS.split(',').includes(ext[ext.length - 1])) {
        const endpoint = await import(`./config/endpoints/${file}`);
        const route = await import(`./routes/${endpoint.default[0].file}`);
        app.register(route.default, { prefix: endpoint.default[0].prefix });
      }
    } catch (err) {
      console.error(err);
      throw err;
    }
  });
}

/** Register GraphQL */
const registerGraphQL = async (): Promise<void> => {
  // Load files ts or js of collections folder for create routes.
  const files = fs.readdirSync(`${__dirname}/config/collections`);
  files.forEach(async (file: string) => {
    try {
      // Get extension file for only load .js or .ts files.
      const ext = file.split('.');
      if (ext.length === 2 && process.env.EXTENSIONS.split(',').includes(ext[ext.length - 1])) {
        const collection = await import(`./config/collections/${file}`);
        const schema = await import(`./shemas/${collection.default[0].shema}`);
        const resolver = await import(`./resolvers/${collection.default[0].resolver}`);
        app.register(GQL, {
          schema: makeExecutableSchema({ typeDefs: schema.default, resolvers: resolver.default }),
          graphiql: true,
        })
      }
    } catch (err) {
      console.error(err);
      throw err;
    }
  });
}

/** Run the server! */
(async (): Promise<void> => {
  try {
    // Import all Fastify routes.
    await registerRoutes();
    // Import all GraphQL collections.
    await registerGraphQL();
    // Set port and host from enviroment vars.
    await app.listen(Number(process.env.PORT), process.env.HOST);
    console.info(`🚀 Server listening on ${process.env.HOST} with port ${process.env.PORT}`);
    console.info(`🔮 GraphiQL IDE listening on /graphiql`);
    console.info(`🔗 GraphQL HTTP listening on /graphql`);
  } catch (err) {
    console.error(err);
  }
})();
