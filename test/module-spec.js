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