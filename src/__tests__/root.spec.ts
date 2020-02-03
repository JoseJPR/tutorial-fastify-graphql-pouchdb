/** Import main dependences */
import dotenv from 'dotenv';
import 'pretty-console-colors';

// Set config docenv by file.
dotenv.config();

const request = require('supertest')(`${process.env.HOST}:${process.env.PORT}`);

describe('[ROOT]', () => {

  it(`[GET /]`, async () => {
    // Define request with url and method
    let _request = request.get("/");
    
    // Send request
    const result = await _request.send();

    // Define expect
    expect(result.status).toBe(200);
    expect(typeof result.body).toBe("object");
    expect(result.body).toEqual(
      expect.objectContaining({
        result: expect.any(String)
      })
    );
  })

  it(`[POST /]`, async () => {
    // Define request with url and method
    let _request = request.post("/");
    // Send request
    const result = await _request.send();

    // Define expect
    expect(result.status).toBe(404);
    expect(typeof result.body).toBe("object");
    expect(result.body).toEqual(
      expect.objectContaining({
        error: expect.any(String),
        message: expect.any(String),
        statusCode: expect.any(Number)
      })
    );
  })

  it(`[PUT /]`, async () => {
    // Define request with url and method
    let _request = request.put("/");
    // Send request
    const result = await _request.send();

    // Define expect
    expect(result.status).toBe(404);
    expect(typeof result.body).toBe("object");
    expect(result.body).toEqual(
      expect.objectContaining({
        error: expect.any(String),
        message: expect.any(String),
        statusCode: expect.any(Number)
      })
    );
  })

  it(`[DELETE /]`, async () => {
    // Define request with url and method
    let _request = request.delete("/");
    // Send request
    const result = await _request.send();

    // Define expect
    expect(result.status).toBe(404);
    expect(typeof result.body).toBe("object");
    expect(result.body).toEqual(
      expect.objectContaining({
        error: expect.any(String),
        message: expect.any(String),
        statusCode: expect.any(Number)
      })
    );
  })
});
