/**
 * Wrapper Articles Resolvers
 * @description Wrapper class for define all bussines logic for articles.
 */

/** Import all Services */
import ServiceArticle from '../services/articles';

/** Import all Types */
import { ObjectType } from '../types/object';

const resolvers = {
  /**
   * @name Query
   *
   * @description Queries for all Articles.
   *
   */
  Query: {
    /**
     * @function getAll
     *
     * @description Business logic for getAll Articles.
     *
     * @author Jose J Perez Rivas | @JoseJPR
     *
     */
    getAll: async (): Promise<void> => {
      return await ServiceArticle.getAll();
    },

    /**
     * @function getOne
     *
     * @description Business logic for getOne Article.
     *
     * @author Jose J Perez Rivas | @JoseJPR
     *
     */
    getOne: async (_: ObjectType, params: ObjectType): Promise<void> => {
      return await ServiceArticle.getOne(params._id);
    },
  },

  /**
   * @function Mutation
   *
   * @description Mutations GraphQL for Articles.
   *
   */
  Mutation: {
    /**
     * @function create
     *
     * @description Business logic for create Article.
     *
     * @author Jose J Perez Rivas | @JoseJPR
     *
     */
    create: async (_: ObjectType, { input }): Promise<void> => {
      return await ServiceArticle.create(input);
    },

    /**
     * @function update
     *
     * @description Business logic for deleteById Article.
     *
     * @author Jose J Perez Rivas | @JoseJPR
     *
     */
    update: async (_: ObjectType, { _id, input }): Promise<void> => {
      return await ServiceArticle.update(_id, input);
    },
    
    /**
     * @function delete
     *
     * @description Business logic for delete Article.
     *
     * @author Jose J Perez Rivas | @JoseJPR
     *
     */
    delete: async (_: ObjectType, params: ObjectType): Promise<void> => {
      return await ServiceArticle.delete(params._id);
    },
  }
}

export default resolvers;