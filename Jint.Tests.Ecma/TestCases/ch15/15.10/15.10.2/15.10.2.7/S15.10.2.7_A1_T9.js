// Copyright 2009 the Sputnik authors.  All rights reserved.
/**
 * The production QuantifierPrefix :: { DecimalDigits , DecimalDigits } evaluates as ...
 *
 * @path ch15/15.10/15.10.2/15.10.2.7/S15.10.2.7_A1_T9.js
 * @description Execute /b{42,93}c/.exec("aaabbbbcccddeeeefffff") and check results
 */

__executed = /b{42,93}c/.test("aaabbbbcccddeeeefffff");

//CHECK#1
if (__executed) {
	$ERROR('#1: /b{42,93}c/.test("aaabbbbcccddeeeefffff") === false');
}


