/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/**
 * @path ch15/15.2/15.2.3/15.2.3.6/15.2.3.6-3-218.js
 * @description Object.defineProperty - 'Attributes' is a Function object which implements its own [[Get]] method to access the 'get' property (8.10.5 step 7.a)
 */


function testcase() {
        var obj = {};

        var funObj = function () { };

        funObj.get = function () {
            return "functionGetProperty";
        };

        Object.defineProperty(obj, "property", funObj);

        return obj.property === "functionGetProperty";
    }
runTestCase(testcase);
