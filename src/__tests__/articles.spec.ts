/** Import main dependences */
import dotenv from 'dotenv';
import 'pretty-console-colors';

import ARTICLES from '../__mocks__/articles';

// Set config docenv by file.
dotenv.config();

const request = require('supertest')(`${process.env.HOST}:${process.env.PORT}`);

describe('[ARTICLES]', () => {

  it(`[GET /articles] Get all documents`, async () => {
    // Define request with url and method
    let _request = request.get('/articles');

    // Send request
    const result = await _request.send();

    // Define expect
    expect(result.status).toBe(200);
    expect(typeof result.body).toBe('object');
    expect(result.body).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          title: expect.any(String),
          resume: expect.any(String),
          excerpt: expect.any(String),
          _id: expect.any(String),
          _rev: expect.any(String)
        })
      ])
    );
  });

  it(`[POST /articles] Save document ARTICLES[0]`, async () => {
    // Define request with url and method
    let _request = request.post('/articles');
    
    // Send request
    const result = await _request.send(ARTICLES[0]);

    // Define expect
    expect(result.status).toBe(200);
    expect(typeof result.body).toBe('object');
    expect(result.body).toEqual(
      expect.objectContaining({
        title: ARTICLES[0].title,
        resume: ARTICLES[0].resume,
        excerpt: ARTICLES[0].excerpt,
        _id: ARTICLES[0]._id,
        _rev: expect.any(String)
      })
    );
  });

  it(`[GET /articles/${ARTICLES[0]._id}] Get document ARTICLES[0]`, async () => {
    // Define request with url and method
    let _request = request.get(`/articles/${ARTICLES[0]._id}`);
    
    // Send request
    const result = await _request.send();

    // Define expect
    expect(result.status).toBe(200);
    expect(typeof result.body).toBe('object');
    expect(result.body).toEqual(
      expect.objectContaining({
        title: ARTICLES[0].title,
        resume: ARTICLES[0].resume,
        excerpt: ARTICLES[0].excerpt,
        _id: ARTICLES[0]._id,
        _rev: expect.any(String)
      })
    );
  });

  it(`[PUT /articles/${ARTICLES[0]._id}]`, async () => {
    // Define request with url and method
    let _request = request.put(`/articles/${ARTICLES[0]._id}`);
    
    // Send request
    const result = await _request.send(ARTICLES[1]);

    // Define expect
    expect(result.status).toBe(200);
    expect(typeof result.body).toBe('object');
    expect(result.body).toEqual(
      expect.objectContaining({
        title: ARTICLES[1].title,
        resume: ARTICLES[1].resume,
        excerpt: ARTICLES[1].excerpt,
        _id: ARTICLES[0]._id,
        _rev: expect.any(String)
      })
    );
  });

  it(`[DELETE /articles/${ARTICLES[0]._id}]`, async () => {
    // Define request with url and method
    let _request = request.delete(`/articles/${ARTICLES[0]._id}`);
    
    // Send request
    const result = await _request.send();

    // Define expect
    expect(result.status).toBe(200);
    expect(typeof result.body).toBe('object');
    expect(result.body).toEqual(
      expect.objectContaining({
        ok: true,
        id: ARTICLES[0]._id,
        rev: expect.any(String)
      })
    );
  });
});