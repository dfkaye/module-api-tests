module-api-tests
================

Explores side-effects, anti-patterns in the commonjs exports api, because some 
things just can't be assumed.

tests
-----

View the test page on 
<a href='https://rawgithub.com/dfkaye/module-api-tests/master/test.html' 
   target='_new' title='opens new window or tab'>rawgithub</a>.
      

module.exports === exports === this ...
---------------------------------------

__...unless you overwrite or reassign module.exports or exports:__

overwrite module.exports, assign attrs to exports and/or this:

    module.exports = { name: 'module.exports' };
    
    exports.name = 'exports';
    this.name ='this';

overwrite exports, assign attrs to module.exports and/or this:

    module.exports.name = 'module.exports';
    
    exports = { name: exports' };
    this.name ='this';
    
__module.exports wins in both cases:__

    require('module-test').name === 'module.exports';

    
adding attributes to this, exports or module-exports:

    module.exports.name = 'module.exports';
    exports.name = 'exports';
    this.name ='this';
    
__last assignment wins:__

    require('assignment').name === 'this';

    
jasmine-node
------------

Misko Hevery's (mhevery) [jasmine-node](https://github.com/mhevery/jasmine-node) 
package was used to drive these tests initially.

    jasmine-node --verbose ./test/

    
testem
------

Toby Ho's (@airporty) [testem](https://github.com/airportyh/testem) package was 
used to drive these tests in the browser as well as on node.  

The testem.json file defines a custom test page to run jasmine tests in browsers

    testem 
    
...and defines a launcher for jasmine-node:

    testem -l jasmine-node
  
... and using the <code>before_tests</code> hook to run <code>browserify</code>.


browserify
----------

James Halliday's (@substack) node-to-browser source bundler utility, 
[browserify](https://github.com/substack/node-browserify):

    browserify ./test/suite.spec.js > ./test/bundle.spec.js

    
rawgithub
---------

The custom test page can be viewed on 
<a href='https://rawgithub.com/dfkaye/module-api-tests/master/test.html' 
   target='_new' title='opens new window or tab'>rawgithub</a>, 
Ryan Grove's (@yaypie) invaluable service for remote viewing your repo's html in 
a browser so you don't have to run a server locally.

(Note: The testem script does not execute on rawgithub, only the jasmine and test 
scripts in the browserified bundle.)
