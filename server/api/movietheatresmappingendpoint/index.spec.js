'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var movietheatresmappingendpointCtrlStub = {
  index: 'movietheatresmappingendpointCtrl.index',
  show: 'movietheatresmappingendpointCtrl.show',
  create: 'movietheatresmappingendpointCtrl.create',
  update: 'movietheatresmappingendpointCtrl.update',
  destroy: 'movietheatresmappingendpointCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var movietheatresmappingendpointIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './movietheatresmappingendpoint.controller': movietheatresmappingendpointCtrlStub
});

describe('Movietheatresmappingendpoint API Router:', function() {

  it('should return an express router instance', function() {
    expect(movietheatresmappingendpointIndex).to.equal(routerStub);
  });

  describe('GET /api/movietheatresmappingendpoints', function() {

    it('should route to movietheatresmappingendpoint.controller.index', function() {
      expect(routerStub.get
        .withArgs('/', 'movietheatresmappingendpointCtrl.index')
        ).to.have.been.calledOnce;
    });

  });

  describe('GET /api/movietheatresmappingendpoints/:id', function() {

    it('should route to movietheatresmappingendpoint.controller.show', function() {
      expect(routerStub.get
        .withArgs('/:id', 'movietheatresmappingendpointCtrl.show')
        ).to.have.been.calledOnce;
    });

  });

  describe('POST /api/movietheatresmappingendpoints', function() {

    it('should route to movietheatresmappingendpoint.controller.create', function() {
      expect(routerStub.post
        .withArgs('/', 'movietheatresmappingendpointCtrl.create')
        ).to.have.been.calledOnce;
    });

  });

  describe('PUT /api/movietheatresmappingendpoints/:id', function() {

    it('should route to movietheatresmappingendpoint.controller.update', function() {
      expect(routerStub.put
        .withArgs('/:id', 'movietheatresmappingendpointCtrl.update')
        ).to.have.been.calledOnce;
    });

  });

  describe('PATCH /api/movietheatresmappingendpoints/:id', function() {

    it('should route to movietheatresmappingendpoint.controller.update', function() {
      expect(routerStub.patch
        .withArgs('/:id', 'movietheatresmappingendpointCtrl.update')
        ).to.have.been.calledOnce;
    });

  });

  describe('DELETE /api/movietheatresmappingendpoints/:id', function() {

    it('should route to movietheatresmappingendpoint.controller.destroy', function() {
      expect(routerStub.delete
        .withArgs('/:id', 'movietheatresmappingendpointCtrl.destroy')
        ).to.have.been.calledOnce;
    });

  });

});
