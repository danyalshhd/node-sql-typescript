import request from "supertest";
import { app } from '../../app'

it('returns an error if invalid request is provided', async () => {
    await request(app)
        .post('/api/quotes')
        .send({
            title: ''
        })
        .expect(404)
})

it('returns 201 if valid request is provided', async () => {
    await request(app)
        .get('/users')
        .send()
        .expect(200)
})
