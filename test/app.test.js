const request = require('supertest');
const app = require('/home/ec2-user/sample-node-project'); // path to your app.js

describe('GET /', () => {
  it('should return a 200 status code', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
  });
});

