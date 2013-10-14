// overwritten-module-exports.js

// module.exports should win

module.exports = { name: 'module.exports' };
exports.name = 'exports';
this.name ='this';
