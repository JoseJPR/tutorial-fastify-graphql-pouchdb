/**
 * Wrapper Articles Route
 * @description Wrapper class for define versions of Articles Route.
 */

/** Import main dependencies */
import fastify from 'fastify';

/** Import all Controllers */
import ControllerArticle from '../controllers/articles';

/** Import all Types */
import { ObjectType } from '../types/object';

const Main = (
  app: fastify.FastifyInstance,
  opts: ObjectType,
  done: any,
): any => {
  // Set Route with GET method.
  app.route({
    method: 'GET',
    url: '/',
    handler: async (request: ObjectType, reply: ObjectType) => {
      await ControllerArticle.getAll(request, reply);
    },
  });

  // Set Route with GET method.
  app.route({
    method: 'GET',
    url: '/:id',
    handler: async (request: ObjectType, reply: ObjectType) => {
      await ControllerArticle.getOne(request, reply);
    },
  });

  // Set Route with POST method.
  app.route({
    method: 'POST',
    url: '/',
    handler: async (request: ObjectType, reply: ObjectType) => {
      await ControllerArticle.create(request, reply);
    },
  });

  // Set Route with PUT method.
  app.route({
    method: 'PUT',
    url: '/:id',
    handler: async (request: ObjectType, reply: ObjectType) => {
      await ControllerArticle.update(request, reply);
    },
  });

  // Set Route with DELETE method.
  app.route({
    method: 'DELETE',
    url: '/:id',
    handler: async (request: ObjectType, reply: ObjectType) => {
      await ControllerArticle.delete(request, reply);
    },
  });

  done();
};

export default Main;
