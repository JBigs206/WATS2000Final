'use strict';

describe('Service: citysearch', function () {

  // load the service's module
  beforeEach(module('wats2000FinalApp'));

  // instantiate service
  var citysearch;
  beforeEach(inject(function (_citysearch_) {
    citysearch = _citysearch_;
  }));

  it('should do something', function () {
    expect(!!citysearch).toBe(true);
  });

});
