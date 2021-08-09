const superTest = require('supertest')

const mongoose = require('mongoose')

describe('A new user is posted to the database', () => {
  const app = require('../index')
  const request = superTest(app)
  const User = mongoose.connection.model('User')

  beforeAll(async () => {})

  afterAll(async () => {
    app.close()
    await mongoose.connection.dropDatabase()
    await mongoose.disconnect()
  })

  it('should save a user to the database', (done) => {
    const firstName = 'Willy'
    const lastName = 'Wonka'
    const email = 'willy@thechocolatefactory.com'
    const password = 'codeworks'

    request
      .post('/register')
      .set('Content-Type', 'application/json')
      .send({ firstName, lastName, email, password })
      .expect(200)
      .end(() => {
        User.find((err, users) => {
          expect(users.length).toBe(1)
          done()
        })
      })
  })

  it('should retrieve the requested user from the database', (done) => {
    const email = 'willy@thechocolatefactory.com'
    const password = 'codeworks'

    request
      .post('/login')
      .set('Content-Type', 'application/json')
      .send({ email, password })
      .expect(200)
      .end(() => {
        User.find((err, users) => {
          console.log('ussssserrrssss', users[0])
          expect(users[0].email).toBe(email)
          done()
        })
      })
  })

  it('should add users toi watchlist', done => {
    const firstName = 'John';
    const lastName = 'Doe';
    const email = 'johndoe@xxx.com';
    const password = 'xxx';

    const option = {
      symbol: 'symbol',
      description: 'description'
    }

    request
      .post('/register')
      .set('Content-Type', 'application/json')
      .send({ firstName, lastName, email, password })
      .expect(200)
      .then(() => {
        request
          .post('/addToWl')
          .set('Content-Type', 'application/json')
          .send({ email, option })
          .expect(200)
          .then(() => {
            request
            .post('/login')
            .set('Content-Type', 'application/json')
            .send({ email, password })
            .expect(200)
            .end(() => {
              User.find((err, users) => {
                expect(users[0].watchlist).toContain(option)
                done()
              })
          })
      })
    })
  })
})
