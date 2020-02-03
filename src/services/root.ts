/**
 * Wrapper Root Services
 * @description Wrapper class for define all bussines logic for root.
 */

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
   */
  handler = async (): Promise<ObjectType> => new Promise((resolve) => {
    resolve({
      result: '⭐️ Hi! From a NodeJS Application with Fastify.',
    });
  })
}

export default new Main();
