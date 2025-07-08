const request = require('supertest');
const app = require('../server');

describe('POST /login', () => {
  test('returns success with valid credentials', async () => {
    const res = await request(app)
      .post('/login')
      .send({ username: 'admin', password: 'password' });
    expect(res.statusCode).toBe(200);
    expect(res.body.message).toBe('Login successful');
  });

  test('returns 401 with invalid credentials', async () => {
    const res = await request(app)
      .post('/login')
      .send({ username: 'admin', password: 'wrong' });
    expect(res.statusCode).toBe(401);
    expect(res.body.message).toBe('Invalid credentials');
  });
});
