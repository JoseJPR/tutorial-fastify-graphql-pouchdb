/**
 * Wrapper Root Controllers
 * @description Wrapper class for define all bussines logic for root.
 */

/** Import main dependences */
import fastify from 'fastify';

/** Import all Services */
import ServiceRoot from '../services/root';

/** Import all Types */
import { ObjectType } from '../types/object';

class Main {
  /**
   * @function handler
   *
   * @description Business logic for handler root.
   *
   * @author Jose J Perez Rivas | @JoseJPR
   *
   * @param {fastify.DefaultQuery} request - request object of route.
   * @param {fastify.DefaultQuery} reply - reply object of route.
   *
   */
  handler = async (
    request: fastify.DefaultQuery,
    reply: fastify.DefaultQuery,
  ): Promise<void> => {
    // Declare main variables for set code number and respone object.
    let code: number;
    let response: ObjectType = {};

    try {
      code = 200;
      response = await ServiceRoot.handler();
    } catch (e) {
      code = 400;
      response = e;
    }
    // Set status and send of reply
    reply.code(code);
    reply.send(response);
  }
}

export default new Main();
