const request = require('supertest');
const { app, server } = require('../server');
const books = require('../data/booksData');

// Docs https://jestjs.io/docs/setup-teardown

afterAll(done => {
  server.close(done);
});

describe('Books API Tests', () => {
  beforeEach(() => {
    books.length = 0;
    books.push(
      { id: '1', title: 'Book 1', author: 'Ayad 1', publish_date: '2024-05-31T00:00:00.000Z', price: 9.99 },
      { id: '2', title: 'Book 2', author: 'Ayad 2', publish_date: '2024-05-31T00:00:00.000Z', price: 19.99 },
      { id: '3', title: 'Book 3', author: 'Ayad 3', publish_date: '2024-05-31T00:00:00.000Z', price: 29.99 }
    );
  });

  test('create a new book', async () => {
    const newBook = { id: '4', title: 'Book 4', author: 'Ayad 4', publish_date: '2024-05-31T00:00:00.000Z', price: 39.99 };
    const response = await request(app).post('/api/v1/books').send(newBook);
    expect(response.status).toBe(201);
    expect(response.body).toMatchObject(newBook);
    expect(books.length).toBe(4);
  });

  test('get a book by ID', async () => {
    const response = await request(app).get('/api/v1/books/1');
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('title', 'Book 1');
  });

  test('update a book by ID', async () => {
    const updatedBook = { id: '1', title: 'Updated Book 1', author: 'Updated Author 1', publish_date: '2024-05-31T00:00:00.000Z', price: 19.99 };
    const response = await request(app).put('/api/v1/books/1').send(updatedBook);
    expect(response.status).toBe(200);
    expect(response.body).toMatchObject(updatedBook);
  });

  test('delete a book by ID', async () => {
    const response = await request(app).delete('/api/v1/books/1');
    expect(response.status).toBe(200);
    expect(books.length).toBe(2);
  });

  test('get all books', async () => {
    const response = await request(app).get('/api/v1/books');
    expect(response.status).toBe(200);
    expect(response.body).toBeInstanceOf(Array);
    expect(response.body.length).toBe(3);
  });
});
