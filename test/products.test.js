const request = require('supertest')
const express = require('express')
const apiRouter = require('../routes/api')

const app = express()
app.use(express.json())
app.use('/api', apiRouter)

describe('Products API', () => {
  test('GET /api/products returns list and GET /api/products/:id returns item', async () => {
    const res = await request(app).get('/api/products')
    expect(res.statusCode).toBe(200)
    expect(res.body).toHaveProperty('success', true)
    expect(Array.isArray(res.body.data)).toBe(true)
    const first = res.body.data[0]
    expect(first).toHaveProperty('id')

    const detail = await request(app).get(`/api/products/${first.id}`)
    expect(detail.statusCode).toBe(200)
    expect(detail.body).toHaveProperty('success', true)
    expect(detail.body.data).toHaveProperty('id', first.id)
  })
})
