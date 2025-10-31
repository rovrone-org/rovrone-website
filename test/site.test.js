const request = require('supertest')
const express = require('express')
const apiRouter = require('../routes/api')

const app = express()
app.use(express.json())
app.use('/api', apiRouter)

describe('API basic tests', () => {
  test('GET /api/site returns success structure', async () => {
    const res = await request(app).get('/api/site')
    expect(res.statusCode).toBe(200)
    expect(res.body).toHaveProperty('success', true)
    expect(res.body).toHaveProperty('data')
  })
})
