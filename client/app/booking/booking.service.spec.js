'use strict';

describe('Service: booking', function () {

  // load the service's module
  beforeEach(module('yotemplateApp'));

  // instantiate service
  var booking;
  beforeEach(inject(function (_booking_) {
    booking = _booking_;
  }));

  it('should do something', function () {
    expect(!!booking).to.be.true;
  });

});
