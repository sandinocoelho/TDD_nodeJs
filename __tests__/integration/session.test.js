const request = require('supertest');
const { User } = require('../../src/app/models');
const truncate = require('../utils/truncate');

const app = require('../../src/app');

describe('Authentication', () => {
    beforeEach(async () => {
        await truncate();
    });

    it('should authenticate with valid token', async (done) => {
        const user = await User.create({
            name:'Diego',
            email:'diego@rocketseat.com.br',
            password:'123456'
        })
        done();
        ;

        const response = await request(app)
            .post('/sessions')
            .send({
                email: user.email,
                password:'123456'
            })
        expect(response.status).toBe(200);
    })

})
