/* eslint-disable no-underscore-dangle */
/* eslint-disable @typescript-eslint/camelcase */
/**
 * Wrapper PouchDB Library
 * @description Wrapper class for define all bussines logic for work with DB.
 */

/** Import main dependences */
import PouchDB from 'pouchdb';

/** Import all Types */
import { ObjectType } from '../types/object';

class Main {
  db: any;

  constructor() {
    this.db = new PouchDB(process.env.POUCHDB_NAME);
  }

  /**
  * @function getAll
  *
  * @description For get all documents of DB.
  *
  * @author Jose J Perez Rivas | @JoseJPR
  *
  */
  getAll = async (): Promise<any> => {
    // Get all documents function.
    try {
      const result = await this.db.allDocs({
        include_docs: true,
      });
      return result.rows.map((e: ObjectType) => e.doc);
    } catch (e) {
      return e;
    }
  }

  /**
  * @function getOne
  *
  * @description For get one document of DB by id.
  *
  * @author Jose J Perez Rivas | @JoseJPR
  *
  */
  getOne = async (id: string): Promise<any> => {
    // Get all documents function.
    try {
      return await this.db.get(id);
    } catch (e) {
      return e;
    }
  }

  /**
  * @function create
  *
  * @description For create document of DB.
  *
  * @author Jose J Perez Rivas | @JoseJPR
  *
  */
  create = async (document: ObjectType): Promise<any> => {
    // Create document function.
    try {
      const created = await this.db.post(document);
      return await this.db.get(created.id);
    } catch (e) {
      return e;
    }
  }

  /**
  * @function update
  *
  * @description For update document of DB.
  *
  * @author Jose J Perez Rivas | @JoseJPR
  *
  */
  update = async (_id: string, document: ObjectType): Promise<any> => {
    // Get all documents function.
    try {
      const fullDocument = document;
      const result = await this.db.get(_id);
      fullDocument._id = _id;
      fullDocument._rev = result._rev;
      const updated = await this.db.put(fullDocument);
      return await this.db.get(updated.id);
    } catch (e) {
      return e;
    }
  }

  /**
  * @function delete
  *
  * @description For delete document of DB by id.
  *
  * @author Jose J Perez Rivas | @JoseJPR
  *
  */
  delete = async (_id: string): Promise<any> => {
    // Get all documents function.
    try {
      const result = await this.db.get(_id);
      return await this.db.remove(_id, result._rev);
    } catch (e) {
      return e;
    }
  }
}

export default new Main();
 