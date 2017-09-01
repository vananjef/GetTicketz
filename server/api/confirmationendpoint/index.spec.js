'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var confirmationendpointCtrlStub = {
  index: 'confirmationendpointCtrl.index',
  show: 'confirmationendpointCtrl.show',
  create: 'confirmationendpointCtrl.create',
  update: 'confirmationendpointCtrl.update',
  destroy: 'confirmationendpointCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var confirmationendpointIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './confirmationendpoint.controller': confirmationendpointCtrlStub
});

describe('Confirmationendpoint API Router:', function() {

  it('should return an express router instance', function() {
    expect(confirmationendpointIndex).to.equal(routerStub);
  });

  describe('GET /api/confirmationendpoints', function() {

    it('should route to confirmationendpoint.controller.index', function() {
      expect(routerStub.get
        .withArgs('/', 'confirmationendpointCtrl.index')
        ).to.have.been.calledOnce;
    });

  });

  describe('GET /api/confirmationendpoints/:id', function() {

    it('should route to confirmationendpoint.controller.show', function() {
      expect(routerStub.get
        .withArgs('/:id', 'confirmationendpointCtrl.show')
        ).to.have.been.calledOnce;
    });

  });

  describe('POST /api/confirmationendpoints', function() {

    it('should route to confirmationendpoint.controller.create', function() {
      expect(routerStub.post
        .withArgs('/', 'confirmationendpointCtrl.create')
        ).to.have.been.calledOnce;
    });

  });

  describe('PUT /api/confirmationendpoints/:id', function() {

    it('should route to confirmationendpoint.controller.update', function() {
      expect(routerStub.put
        .withArgs('/:id', 'confirmationendpointCtrl.update')
        ).to.have.been.calledOnce;
    });

  });

  describe('PATCH /api/confirmationendpoints/:id', function() {

    it('should route to confirmationendpoint.controller.update', function() {
      expect(routerStub.patch
        .withArgs('/:id', 'confirmationendpointCtrl.update')
        ).to.have.been.calledOnce;
    });

  });

  describe('DELETE /api/confirmationendpoints/:id', function() {

    it('should route to confirmationendpoint.controller.destroy', function() {
      expect(routerStub.delete
        .withArgs('/:id', 'confirmationendpointCtrl.destroy')
        ).to.have.been.calledOnce;
    });

  });

});
