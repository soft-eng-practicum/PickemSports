describe('true', function() {
  it('Should be true', function() {
    expect(true).toBeTruthy();
  });
});


describe ('auth fac', function() {
  var authService;
  var window = null;

  beforeEach(function() {
    module('sportsApp.services.auth');

    inject(function($injector) {
      authService = $injector.get('authService');
    });

    window = { localStorage: {'sportsApp-token': "hello"} };
  });

  it('should save token', function() {
    expect(window.localStorage['sportsApp-token']).toBe('hello');
    authService.saveToken('hi');
    expect(authService.getToken()).toBe('hi');
  });

});


