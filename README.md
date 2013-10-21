module-api-tests
================

Explores side-effects, anti-patterns in the commonjs exports api, because some 
things just can't be assumed.

module.exports === exports === this ...
---------------------------------------

__...unless you overwrite or reassign <code>module.exports</code> or <code>exports</code>:__

1. Overwrite <code>module.exports</code>, assign attrs to <code>exports</code> and/or <code>this</code>:

    module.exports = { name: 'module.exports' };
    
    exports.name = 'exports';
    this.name ='this';

2. Overwrite <code>exports</code>, assign attrs to <code>module.exports</code> and/or <code>this</code>:

    module.exports.name = 'module.exports';
    
    exports = { name: exports' };
    this.name ='this';
    
    
In both cases, __module.exports wins__:

    require('module-test').name === 'module.exports';

3. And unlike the AMD define() pattern:

    delete module.exports;
    return 'something else'; // return this explicitly
    
returning a value explicitly from a module with a return statement does not export that value.  Again, 
__module.exports wins__.

4. Adding attributes to <code>this</code>, <code>exports</code> or <code>module.exports</code>:

    module.exports.name = 'module.exports';
    exports.name = 'exports';
    this.name ='this';
    
In this case, __last assignment wins:__

    require('assignment').name === 'this';


tests
-----

View the generated test page on 
<a href='https://rawgithub.com/dfkaye/module-api-tests/master/test.html' 
   target='_new' title='opens new window or tab'>rawgithub</a>.
      

jasmine-node
------------

Misko Hevery's (mhevery) [jasmine-node](https://github.com/mhevery/jasmine-node) 
package was used to drive these tests initially.

    jasmine-node --verbose ./test/suite.spec.js

    
testem
------

Toby Ho's (@airporty) [testem](https://github.com/airportyh/testem) package was 
used to drive these tests in the browser as well as on node.  

The testem.json file defines a custom test page to run jasmine tests in browsers

    testem 
    
...and defines a launcher for jasmine-node:

    testem -l jasmine-node
  
... and uses the <code>before_tests</code> hook to run <code>browserify</code>.


browserify
----------

James Halliday's (@substack) node-to-browser source bundler utility, 
[browserify](https://github.com/substack/node-browserify):

    browserify ./test/suite.spec.js > ./test/bundle-spec.js

... is used to generated the html-only version of all the javascript tests used 
by both testem and viewable in a standalone page on rawgithub.


rawgithub
---------

The custom test page can be viewed on 
<a href='https://rawgithub.com/dfkaye/module-api-tests/master/test.html' 
   target='_new' title='opens new window or tab'>rawgithub</a>, 
Ryan Grove's (@yaypie) invaluable service for remote viewing your repo's html in 
a browser so you don't have to run a server locally.

(Note: The testem script does not execute on rawgithub, only the jasmine and test 
scripts in the browserified bundle.)
