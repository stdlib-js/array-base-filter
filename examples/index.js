/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

var discreteUniform = require( '@stdlib/random-array-discrete-uniform' );
var isPositiveInteger = require( '@stdlib/assert-is-positive-integer' ).isPrimitive;
var naryFunction = require( '@stdlib/utils-nary-function' );
var filter = require( './../lib' );

var x = discreteUniform( 10, -5, 5, {
	'dtype': 'int32'
});
// returns <Int32Array>

var out = filter( x, naryFunction( isPositiveInteger, 1 ) );
// returns <Int32Array>

console.log( x );
console.log( out );
