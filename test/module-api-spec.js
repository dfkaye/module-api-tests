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