const {ObjectID} = require('mongodb');
const jwt = require('jsonwebtoken');
const expect = require('expect');
const request = require('supertest')
const db = require('../../_helpers/db');
const {app} = require('../../server');
const User = db.User;

const userOneID = new ObjectID();
const userTwoID = new ObjectID();
const users = [{
    _id: userOneID,
    username: "userone",
    name: "Pepe",
    email: "userone@gmail.com",
    password: "useronepassword",
  }, {
    _id: userTwoID,
    username: "usertwo",
    name: "Pepa",
    email: "usertwo@gmail.com",
    password: "usertwopassword",
  }]

  describe('POST /users/register', () => {
    it('should create a user', (done) => {
      const {email, password, username, name} = users[0];
      request(app)
        .post('/users/register')
        .send({email, password, username, name})
        .expect(200)
        .expect((res) => {
          expect(res.body.email).toBe(email);
          expect(res.body.username).toBe(username);
        })
        .end((err) => {
          if(err) return done(err);
          User.findOne({username: username}).then((user) => {
            expect(user).not.toBeNull();
          });
          User.deleteOne({username: username}).then( () => {
            done();
          });
        });
    });

    it('should return validation errors if request is invaild', (done) => {
      request(app)
        .post('/users/register')
        .send({
          username: "",
          password: "sd3"
        })
        .expect(400)
        .end(done);
    });

    it('should not create user if username is in use', (done) => {
      request(app)
        .post('/users/register')
        .send({
          username: 'chacho',
          password: "12345678"
        })
        .expect(400)
        .end(done);
    });
  });

  describe('POST /users/authenticate', () => {
    it('should login user and return auh token', (done) => {
      request(app)
      .post('/users/authenticate')
      .send({
        username: 'test',
        password: 'test'
      })
      .expect(200)
      .expect((res) => {
        expect(res.body.token).not.toBeNull();
      })
      .end((err, res) => {
        if(err) return done(err);
        done()
      })
    });

    it('should return validation errors if request is invaild', (done) => {
      request(app)
        .post('/users/authenticate')
        .send({
          username: "test",
          password: "test123"
        })
        .expect(400)
        .end(done);
    });

    it('should not log in if username is in use', (done) => {
      request(app)
        .post('/users/authenticate')
        .send({
          username: 'test123',
          password: "12345678"
        })
        .expect(400)
        .end(done);
    });
  });

  describe('GET /users/*', () => {
    it('should return Invalid Token if not authenticated', (done) => {
      request(app)
        .get('/users/')
        .expect(401)
        .expect((res) => {
          expect(res.body.message).toEqual('Invalid Token');
        })
        .end(done);
    });
  });