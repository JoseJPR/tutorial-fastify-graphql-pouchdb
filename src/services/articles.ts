/**
 * Wrapper Articles Services
 * @description Wrapper class for define all bussines logic for articles.
 */

/** Import main dependences */
import pouchdb from '../libs/pouchdb';

/** Import all Types */
import { ObjectType } from '../types/object';

class Main {
  /**
   * @function getAll
   *
   * @description Business logic for get all articles.
   *
   * @author Jose J Perez Rivas | @JoseJPR
   *
   */
  getAll = async (): Promise<void> => {
    // Get all document of db.
    try {
      return await pouchdb.getAll();
    } catch (e) {
      return e;
    }
  }

  /**
   * @function getOne
   *
   * @description Business logic for get an articles by Id.
   *
   * @author Jose J Perez Rivas | @JoseJPR
   *
   * @param {any} id - Document ID.
   *
   */
  getOne = async (id: any): Promise<void> => {
    // Get document of db by id.
    try {
      return await pouchdb.getOne(id);
    } catch (e) {
      return e;
    }
  }

  /**
   * @function create
   *
   * @description Business logic for create an article.
   *
   * @author Jose J Perez Rivas | @JoseJPR
   *
   * @param {ObjectType} data - Document for save.
   *
   */
  create = async (data: ObjectType): Promise<void> => {
    // Create document.
    try {
      return await pouchdb.create(data);
    } catch (e) {
      return e;
    }
  }

  /**
   * @function update
   *
   * @description Business logic for update an article.
   *
   * @author Jose J Perez Rivas | @JoseJPR
   *
   * @param {ObjectType} data - Document for update.
   *
   */
  update = async (id: string, data: ObjectType): Promise<void> => {
    // Create document.
    try {
      return await pouchdb.update(id, data);
    } catch (e) {
      return e;
    }
  }

  /**
   * @function delete
   *
   * @description Business logic for delete an article by Id.
   *
   * @author Jose J Perez Rivas | @JoseJPR
   *
   * @param {any} id - Document ID.
   *
   */
  delete = async (id: string): Promise<void> => {
    // Get document of db by id.
    try {
      return await pouchdb.delete(id);
    } catch (e) {
      return e;
    }
  }
}

export default new Main();
