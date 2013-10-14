module-api-tests
================

explores interesting side-effects and anti-patterns in the exports api

module.exports === exports === this ...
---------------------------------------

...unless you overwrite or reassign module.exports or exports to another object.

overwrite module.exports, assign attrs to exports and/or this:

    module.exports = { name: 'module.exports' };
    
    exports.name = 'exports';
    this.name ='this';

overwrite exports, assign attrs to module.exports and/or this:

    module.exports.name = 'module.exports';
    exports = { name: exports' };
    this.name ='this';
    
*module.exports wins in both cases:*

    require('module-test').name === 'module.exports';

    
adding attributes to this, exports or module-exports:

    module.exports.name = 'module.exports';
    exports.name = 'exports';
    this.name ='this';
    
*last assignment wins:*

    require('assignment').name === 'this';

    
jasmine-node
------------

misko hevery's fine jasmine-node module was used to drive these tests initially.

    jasmine-node --verbose ./test/

    
testem
------

toby ho's magnificent testem package was used to drive these tests in the 
browser as well as on node.  

testem.json defines a custom test page to run jasmine tests in browser

    testem 
    
and defines a launcher for jasmine-node

    testem -l jasmine-node
  
uses before_tests hook to run browserify


browserify
----------

james halliday's nice node-to-browser src file bundler

    browserify ./test/suite.spec.js > ./test/bundle.spec.js

    
rawgithub
---------

The custom test page can be viewed on rawgithub, ryan grove's invaluable service 
for remoting your repo's html into a browser so your friends and family can view 
the page).  

The testem script does not execute on rawgithub, only the jasmine and test 
scripts in the browserified bundle.
