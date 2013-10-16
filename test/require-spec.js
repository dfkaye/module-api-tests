// require-spec.js

describe('module-exports assignment', function () {

    var m = require('./overwritten-module-exports');

    it('should be \'module.exports\'', function () {
        expect(m.name).toBe('module.exports');
    });
    
    it('should not be \'exports\'', function () {
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

describe('require exports modified last', function () {

    var m = require('./exports-last');
    
    it('should return \'exports last\'', function () {
        expect(m.name).toBe('exports last');
    });   
});

describe('require this modified last', function () {

    var m = require('./this-last');
    
    it('should return \'this last\'', function () {
        expect(m.name).toBe('this last');
    });   
});

describe('return-vs-exports from a module file', function () {

    var m = require('./return-vs-exports');
    
    describe('delete module.exports', function () {
        it('should not export the return value', function () {
            expect(m).not.toBeDefined();
        });
    });
});