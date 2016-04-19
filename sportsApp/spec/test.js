describe('true', function() {
  it('Should be true', function() {
    expect(true).toBeTruthy();
  });
});


describe ('authService', function() {
  var authService;
  var windows;

  beforeEach(function() {
    module('sportsApp.services.auth');

    inject(function($injector) {
      authService = $injector.get('authService');
    });

    windows = { localStorage: {'sportsApp-token': "hello"} };
  });

  it('should save token', function() {
    expect(windows.localStorage['sportsApp-token']).toBe('hello');
    authService.saveToken('hi');
    expect(authService.getToken()).toBe('hi');
  });

});


