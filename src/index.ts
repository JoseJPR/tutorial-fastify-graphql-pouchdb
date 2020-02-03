/**
 * Wrapper Fastify Application
 * @description Wrapper class for define versions of Fastify Application.
 */

/** Import main dependences */
import dotenv from 'dotenv';
import fs from 'fs';
import fastify from 'fastify';

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

/** Run the server! */
(async (): Promise<void> => {
  try {
    // Import all routes
    await registerRoutes();
    // Set port and host from enviroment vars.
    await app.listen(Number(process.env.PORT), process.env.HOST);
    console.info(`server listening on ${process.env.HOST} with port ${process.env.PORT}`);
  } catch (err) {
    console.error(err);
  }
})();
