;(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
// exports-last

this.name = 'this first';
exports.name = 'exports last';

},{}],2:[function(require,module,exports){
//module-api-spec

var _this = this;

describe('module', function(){

  it('should be module', function(){
    expect(module).toBe(module);
  });
  
  describe('module.exports', function(){
  
    it('should be exports', function(){
      expect(module.exports).toBe(exports);
    });
  
    it('should be this', function(){
      expect(module.exports).toBe(_this);
    });
  });
  
  describe('exports', function(){
  
    it('should be this', function(){
      expect(exports).toBe(_this);
    });
  });

});
},{}],3:[function(require,module,exports){
// module.spec

var _this = this;
var ex = exports;
var mex = module.exports;

describe('module.spec', function() {

  afterEach(function() {
    exports = ex;
    module.exports = mex;
  });
  
  describe('overwriting module.exports', function() {
    beforeEach(function () {
        
        module.exports = { name : 'module.spec' };
        expect(module.exports.name).toBe('module.spec');
    });
    
    it('should no longer point to exports', function () {
        expect(exports).not.toBe(module.exports);
    });
    
    it('should no longer point to this', function () {
        expect(_this).not.toBe(module.exports);
    });
  });
  
  describe('overwriting exports', function() {
  
    beforeEach(function () {
        exports = { name : 'exports.spec' };
        expect(exports.name).toBe('exports.spec');
    });
    
    it('should no longer point to module.exports', function () {
        expect(exports).not.toBe(module.exports);
    });
    
    it('should no longer point to this', function () {
        expect(_this).not.toBe(exports);
    });    
  });
  
  describe('appending to module.exports', function() {

    var attr = 'testing module.exports';

    beforeEach(function () {
        module.exports.attr = attr;
        expect(module.exports.attr).toBe(attr);
    });
    
    it('should see value on exports', function () {
        expect(exports.attr).toBe(attr);
    });
    
    it('should see value on this', function () {
        expect(_this.attr).toBe(attr);
    });    
  });
  
  describe('appending to exports', function() {
  
    var attr = 'testing exports';
    
    beforeEach(function () {
        exports.attr = attr;
        expect(exports.attr).toBe(attr);
    });
    
    it('should see value on module.exports', function () {
        expect(module.exports.attr).toBe(attr);
    });
    
    it('should see value on this', function () {
        expect(_this.attr).toBe(attr);
    });    
  });

  describe('appending to _this', function() {
  
    var attr = 'testing _this';
  
    beforeEach(function () {
        _this.attr = attr;
        expect(_this.attr).toBe(attr);
    });
    
    it('should see value on exports', function () {
        expect(exports.attr).toBe(attr);
    });
    
    it('should see value on module.exports', function () {
        expect(module.exports.attr).toBe(attr);
    });    
  }); 

  
});
},{}],4:[function(require,module,exports){
// overwritten-exports.js

// require(file).name === undefined
exports = { name: 'exports' };

},{}],5:[function(require,module,exports){
// overwritten-module-exports.js

// module.exports should win

module.exports = { name: 'module.exports' };
exports.name = 'exports';
this.name ='this';

},{}],6:[function(require,module,exports){
// require-spec.js

describe('module-exports assignment', function () {

    var m = require('./overwritten-module-exports');

    it('should be module.exports', function () {
        expect(m.name).toBe('module.exports');
    });
    
    it('should not be exports', function () {
        expect(m.name).not.toBe('exports');
    });
    
    it('should not be \'this\'', function () {
        expect(m.name).not.toBe('this');
    });     
});

describe('require an overwritten exports', function () {

    var m = require('./overwritten-exports');
    
    it('should return an empty object', function () {
        expect(m.name).not.toBeDefined();
    });   
});

describe('require exports before this', function () {

    var m = require('./exports-last');
    
    it('should return exports first', function () {
        expect(m.name).toBe('exports last');
    });   
});

describe('require this before exports', function () {

    var m = require('./this-last');
    
    it('should return an empty object', function () {
        expect(m.name).toBe('this last');
    });   
});
},{"./exports-last":1,"./overwritten-exports":4,"./overwritten-module-exports":5,"./this-last":8}],7:[function(require,module,exports){
require ('./module-api-spec');
require ('./module-spec');
require ('./require-spec');



},{"./module-api-spec":2,"./module-spec":3,"./require-spec":6}],8:[function(require,module,exports){
// this-last

exports.name = 'exports first';
this.name = 'this last';

},{}]},{},[7])
;