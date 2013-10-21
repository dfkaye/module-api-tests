// global-spec.js

global || (global = window);

//global.test = null;

require('./test-global.js');

describe('global-spec', function() {
 
  it('should see test as a global', function() {
    expect(test).toBe(global.test);
    expect(test()).toBe('test called');
  });
  
});