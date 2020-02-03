/**
 * Wrapper Root Route
 * @description Wrapper class for define versions of Root Route.
 */

/** Import main dependencies */
import fastify from 'fastify';

/** Import all Controllers */
import ControllerRoot from '../controllers/root';

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
      await ControllerRoot.handler(request, reply);
    },
  });

  done();
};

export default Main;
