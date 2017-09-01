'use strict';

var app = require('../..');
import request from 'supertest';

var newMovietheatresmappingendpoint;

describe('Movietheatresmappingendpoint API:', function() {

  describe('GET /api/movietheatresmappingendpoints', function() {
    var movietheatresmappingendpoints;

    beforeEach(function(done) {
      request(app)
        .get('/api/movietheatresmappingendpoints')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          movietheatresmappingendpoints = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      expect(movietheatresmappingendpoints).to.be.instanceOf(Array);
    });

  });

  describe('POST /api/movietheatresmappingendpoints', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/movietheatresmappingendpoints')
        .send({
          name: 'New Movietheatresmappingendpoint',
          info: 'This is the brand new movietheatresmappingendpoint!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          newMovietheatresmappingendpoint = res.body;
          done();
        });
    });

    it('should respond with the newly created movietheatresmappingendpoint', function() {
      expect(newMovietheatresmappingendpoint.name).to.equal('New Movietheatresmappingendpoint');
      expect(newMovietheatresmappingendpoint.info).to.equal('This is the brand new movietheatresmappingendpoint!!!');
    });

  });

  describe('GET /api/movietheatresmappingendpoints/:id', function() {
    var movietheatresmappingendpoint;

    beforeEach(function(done) {
      request(app)
        .get('/api/movietheatresmappingendpoints/' + newMovietheatresmappingendpoint._id)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          movietheatresmappingendpoint = res.body;
          done();
        });
    });

    afterEach(function() {
      movietheatresmappingendpoint = {};
    });

    it('should respond with the requested movietheatresmappingendpoint', function() {
      expect(movietheatresmappingendpoint.name).to.equal('New Movietheatresmappingendpoint');
      expect(movietheatresmappingendpoint.info).to.equal('This is the brand new movietheatresmappingendpoint!!!');
    });

  });

  describe('PUT /api/movietheatresmappingendpoints/:id', function() {
    var updatedMovietheatresmappingendpoint;

    beforeEach(function(done) {
      request(app)
        .put('/api/movietheatresmappingendpoints/' + newMovietheatresmappingendpoint._id)
        .send({
          name: 'Updated Movietheatresmappingendpoint',
          info: 'This is the updated movietheatresmappingendpoint!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          updatedMovietheatresmappingendpoint = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedMovietheatresmappingendpoint = {};
    });

    it('should respond with the updated movietheatresmappingendpoint', function() {
      expect(updatedMovietheatresmappingendpoint.name).to.equal('Updated Movietheatresmappingendpoint');
      expect(updatedMovietheatresmappingendpoint.info).to.equal('This is the updated movietheatresmappingendpoint!!!');
    });

  });

  describe('DELETE /api/movietheatresmappingendpoints/:id', function() {

    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete('/api/movietheatresmappingendpoints/' + newMovietheatresmappingendpoint._id)
        .expect(204)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when movietheatresmappingendpoint does not exist', function(done) {
      request(app)
        .delete('/api/movietheatresmappingendpoints/' + newMovietheatresmappingendpoint._id)
        .expect(404)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

  });

});
