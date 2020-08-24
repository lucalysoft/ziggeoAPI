/**
 * react-ziggeo - Ziggeo's react component for easy react application deployment
 * @version v4.6.2
 * @author Ziggeo Inc
 * @link https://ziggeo.com
 * @license Apache-2.0
 * @version of Ziggeo ~2.39.16
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["ReactZiggeo"] = factory(require("react"));
	else
		root["ReactZiggeo"] = factory(root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_50__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/static/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 335);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(3);
var core = __webpack_require__(7);
var hide = __webpack_require__(14);
var redefine = __webpack_require__(11);
var ctx = __webpack_require__(19);
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if (target) redefine(target, key, out, type & $export.U);
    // export
    if (exports[key] != out) hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};
global.core = core;
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(4);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 3 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(61)('wks');
var uid = __webpack_require__(36);
var Symbol = __webpack_require__(3).Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(22);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 7 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.12' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(2)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(1);
var IE8_DOM_DEFINE = __webpack_require__(102);
var toPrimitive = __webpack_require__(27);
var dP = Object.defineProperty;

exports.f = __webpack_require__(8) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(24);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(3);
var hide = __webpack_require__(14);
var has = __webpack_require__(13);
var SRC = __webpack_require__(36)('src');
var $toString = __webpack_require__(167);
var TO_STRING = 'toString';
var TPL = ('' + $toString).split(TO_STRING);

__webpack_require__(7).inspectSource = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(0);
var fails = __webpack_require__(2);
var defined = __webpack_require__(24);
var quot = /"/g;
// B.2.3.2.1 CreateHTML(string, tag, attribute, value)
var createHTML = function (string, tag, attribute, value) {
  var S = String(defined(string));
  var p1 = '<' + tag;
  if (attribute !== '') p1 += ' ' + attribute + '="' + String(value).replace(quot, '&quot;') + '"';
  return p1 + '>' + S + '</' + tag + '>';
};
module.exports = function (NAME, exec) {
  var O = {};
  O[NAME] = exec(createHTML);
  $export($export.P + $export.F * fails(function () {
    var test = ''[NAME]('"');
    return test !== test.toLowerCase() || test.split('"').length > 3;
  }), 'String', O);
};


/***/ }),
/* 13 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(9);
var createDesc = __webpack_require__(34);
module.exports = __webpack_require__(8) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(46);
var defined = __webpack_require__(24);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__(2);

module.exports = function (method, arg) {
  return !!method && fails(function () {
    // eslint-disable-next-line no-useless-call
    arg ? method.call(null, function () { /* empty */ }, 1) : method.call(null);
  });
};


/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

// 0 -> Array#forEach
// 1 -> Array#map
// 2 -> Array#filter
// 3 -> Array#some
// 4 -> Array#every
// 5 -> Array#find
// 6 -> Array#findIndex
var ctx = __webpack_require__(19);
var IObject = __webpack_require__(46);
var toObject = __webpack_require__(10);
var toLength = __webpack_require__(6);
var asc = __webpack_require__(98);
module.exports = function (TYPE, $create) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  var create = $create || asc;
  return function ($this, callbackfn, that) {
    var O = toObject($this);
    var self = IObject(O);
    var f = ctx(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var val, res;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      val = self[index];
      res = f(val, index, O);
      if (TYPE) {
        if (IS_MAP) result[index] = res;   // map
        else if (res) switch (TYPE) {
          case 3: return true;             // some
          case 5: return val;              // find
          case 6: return index;            // findIndex
          case 2: result.push(val);        // filter
        } else if (IS_EVERY) return false; // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
  };
};


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(17);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(47);
var createDesc = __webpack_require__(34);
var toIObject = __webpack_require__(15);
var toPrimitive = __webpack_require__(27);
var has = __webpack_require__(13);
var IE8_DOM_DEFINE = __webpack_require__(102);
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(8) ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(0);
var core = __webpack_require__(7);
var fails = __webpack_require__(2);
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),
/* 22 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),
/* 23 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 24 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

if (__webpack_require__(8)) {
  var LIBRARY = __webpack_require__(29);
  var global = __webpack_require__(3);
  var fails = __webpack_require__(2);
  var $export = __webpack_require__(0);
  var $typed = __webpack_require__(62);
  var $buffer = __webpack_require__(88);
  var ctx = __webpack_require__(19);
  var anInstance = __webpack_require__(38);
  var propertyDesc = __webpack_require__(34);
  var hide = __webpack_require__(14);
  var redefineAll = __webpack_require__(40);
  var toInteger = __webpack_require__(22);
  var toLength = __webpack_require__(6);
  var toIndex = __webpack_require__(121);
  var toAbsoluteIndex = __webpack_require__(35);
  var toPrimitive = __webpack_require__(27);
  var has = __webpack_require__(13);
  var classof = __webpack_require__(45);
  var isObject = __webpack_require__(4);
  var toObject = __webpack_require__(10);
  var isArrayIter = __webpack_require__(75);
  var create = __webpack_require__(30);
  var getPrototypeOf = __webpack_require__(32);
  var gOPN = __webpack_require__(31).f;
  var getIterFn = __webpack_require__(90);
  var uid = __webpack_require__(36);
  var wks = __webpack_require__(5);
  var createArrayMethod = __webpack_require__(18);
  var createArrayIncludes = __webpack_require__(52);
  var speciesConstructor = __webpack_require__(48);
  var ArrayIterators = __webpack_require__(91);
  var Iterators = __webpack_require__(39);
  var $iterDetect = __webpack_require__(58);
  var setSpecies = __webpack_require__(41);
  var arrayFill = __webpack_require__(68);
  var arrayCopyWithin = __webpack_require__(96);
  var $DP = __webpack_require__(9);
  var $GOPD = __webpack_require__(20);
  var dP = $DP.f;
  var gOPD = $GOPD.f;
  var RangeError = global.RangeError;
  var TypeError = global.TypeError;
  var Uint8Array = global.Uint8Array;
  var ARRAY_BUFFER = 'ArrayBuffer';
  var SHARED_BUFFER = 'Shared' + ARRAY_BUFFER;
  var BYTES_PER_ELEMENT = 'BYTES_PER_ELEMENT';
  var PROTOTYPE = 'prototype';
  var ArrayProto = Array[PROTOTYPE];
  var $ArrayBuffer = $buffer.ArrayBuffer;
  var $DataView = $buffer.DataView;
  var arrayForEach = createArrayMethod(0);
  var arrayFilter = createArrayMethod(2);
  var arraySome = createArrayMethod(3);
  var arrayEvery = createArrayMethod(4);
  var arrayFind = createArrayMethod(5);
  var arrayFindIndex = createArrayMethod(6);
  var arrayIncludes = createArrayIncludes(true);
  var arrayIndexOf = createArrayIncludes(false);
  var arrayValues = ArrayIterators.values;
  var arrayKeys = ArrayIterators.keys;
  var arrayEntries = ArrayIterators.entries;
  var arrayLastIndexOf = ArrayProto.lastIndexOf;
  var arrayReduce = ArrayProto.reduce;
  var arrayReduceRight = ArrayProto.reduceRight;
  var arrayJoin = ArrayProto.join;
  var arraySort = ArrayProto.sort;
  var arraySlice = ArrayProto.slice;
  var arrayToString = ArrayProto.toString;
  var arrayToLocaleString = ArrayProto.toLocaleString;
  var ITERATOR = wks('iterator');
  var TAG = wks('toStringTag');
  var TYPED_CONSTRUCTOR = uid('typed_constructor');
  var DEF_CONSTRUCTOR = uid('def_constructor');
  var ALL_CONSTRUCTORS = $typed.CONSTR;
  var TYPED_ARRAY = $typed.TYPED;
  var VIEW = $typed.VIEW;
  var WRONG_LENGTH = 'Wrong length!';

  var $map = createArrayMethod(1, function (O, length) {
    return allocate(speciesConstructor(O, O[DEF_CONSTRUCTOR]), length);
  });

  var LITTLE_ENDIAN = fails(function () {
    // eslint-disable-next-line no-undef
    return new Uint8Array(new Uint16Array([1]).buffer)[0] === 1;
  });

  var FORCED_SET = !!Uint8Array && !!Uint8Array[PROTOTYPE].set && fails(function () {
    new Uint8Array(1).set({});
  });

  var toOffset = function (it, BYTES) {
    var offset = toInteger(it);
    if (offset < 0 || offset % BYTES) throw RangeError('Wrong offset!');
    return offset;
  };

  var validate = function (it) {
    if (isObject(it) && TYPED_ARRAY in it) return it;
    throw TypeError(it + ' is not a typed array!');
  };

  var allocate = function (C, length) {
    if (!(isObject(C) && TYPED_CONSTRUCTOR in C)) {
      throw TypeError('It is not a typed array constructor!');
    } return new C(length);
  };

  var speciesFromList = function (O, list) {
    return fromList(speciesConstructor(O, O[DEF_CONSTRUCTOR]), list);
  };

  var fromList = function (C, list) {
    var index = 0;
    var length = list.length;
    var result = allocate(C, length);
    while (length > index) result[index] = list[index++];
    return result;
  };

  var addGetter = function (it, key, internal) {
    dP(it, key, { get: function () { return this._d[internal]; } });
  };

  var $from = function from(source /* , mapfn, thisArg */) {
    var O = toObject(source);
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var iterFn = getIterFn(O);
    var i, length, values, result, step, iterator;
    if (iterFn != undefined && !isArrayIter(iterFn)) {
      for (iterator = iterFn.call(O), values = [], i = 0; !(step = iterator.next()).done; i++) {
        values.push(step.value);
      } O = values;
    }
    if (mapping && aLen > 2) mapfn = ctx(mapfn, arguments[2], 2);
    for (i = 0, length = toLength(O.length), result = allocate(this, length); length > i; i++) {
      result[i] = mapping ? mapfn(O[i], i) : O[i];
    }
    return result;
  };

  var $of = function of(/* ...items */) {
    var index = 0;
    var length = arguments.length;
    var result = allocate(this, length);
    while (length > index) result[index] = arguments[index++];
    return result;
  };

  // iOS Safari 6.x fails here
  var TO_LOCALE_BUG = !!Uint8Array && fails(function () { arrayToLocaleString.call(new Uint8Array(1)); });

  var $toLocaleString = function toLocaleString() {
    return arrayToLocaleString.apply(TO_LOCALE_BUG ? arraySlice.call(validate(this)) : validate(this), arguments);
  };

  var proto = {
    copyWithin: function copyWithin(target, start /* , end */) {
      return arrayCopyWithin.call(validate(this), target, start, arguments.length > 2 ? arguments[2] : undefined);
    },
    every: function every(callbackfn /* , thisArg */) {
      return arrayEvery(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    },
    fill: function fill(value /* , start, end */) { // eslint-disable-line no-unused-vars
      return arrayFill.apply(validate(this), arguments);
    },
    filter: function filter(callbackfn /* , thisArg */) {
      return speciesFromList(this, arrayFilter(validate(this), callbackfn,
        arguments.length > 1 ? arguments[1] : undefined));
    },
    find: function find(predicate /* , thisArg */) {
      return arrayFind(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
    },
    findIndex: function findIndex(predicate /* , thisArg */) {
      return arrayFindIndex(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
    },
    forEach: function forEach(callbackfn /* , thisArg */) {
      arrayForEach(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    },
    indexOf: function indexOf(searchElement /* , fromIndex */) {
      return arrayIndexOf(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
    },
    includes: function includes(searchElement /* , fromIndex */) {
      return arrayIncludes(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
    },
    join: function join(separator) { // eslint-disable-line no-unused-vars
      return arrayJoin.apply(validate(this), arguments);
    },
    lastIndexOf: function lastIndexOf(searchElement /* , fromIndex */) { // eslint-disable-line no-unused-vars
      return arrayLastIndexOf.apply(validate(this), arguments);
    },
    map: function map(mapfn /* , thisArg */) {
      return $map(validate(this), mapfn, arguments.length > 1 ? arguments[1] : undefined);
    },
    reduce: function reduce(callbackfn /* , initialValue */) { // eslint-disable-line no-unused-vars
      return arrayReduce.apply(validate(this), arguments);
    },
    reduceRight: function reduceRight(callbackfn /* , initialValue */) { // eslint-disable-line no-unused-vars
      return arrayReduceRight.apply(validate(this), arguments);
    },
    reverse: function reverse() {
      var that = this;
      var length = validate(that).length;
      var middle = Math.floor(length / 2);
      var index = 0;
      var value;
      while (index < middle) {
        value = that[index];
        that[index++] = that[--length];
        that[length] = value;
      } return that;
    },
    some: function some(callbackfn /* , thisArg */) {
      return arraySome(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    },
    sort: function sort(comparefn) {
      return arraySort.call(validate(this), comparefn);
    },
    subarray: function subarray(begin, end) {
      var O = validate(this);
      var length = O.length;
      var $begin = toAbsoluteIndex(begin, length);
      return new (speciesConstructor(O, O[DEF_CONSTRUCTOR]))(
        O.buffer,
        O.byteOffset + $begin * O.BYTES_PER_ELEMENT,
        toLength((end === undefined ? length : toAbsoluteIndex(end, length)) - $begin)
      );
    }
  };

  var $slice = function slice(start, end) {
    return speciesFromList(this, arraySlice.call(validate(this), start, end));
  };

  var $set = function set(arrayLike /* , offset */) {
    validate(this);
    var offset = toOffset(arguments[1], 1);
    var length = this.length;
    var src = toObject(arrayLike);
    var len = toLength(src.length);
    var index = 0;
    if (len + offset > length) throw RangeError(WRONG_LENGTH);
    while (index < len) this[offset + index] = src[index++];
  };

  var $iterators = {
    entries: function entries() {
      return arrayEntries.call(validate(this));
    },
    keys: function keys() {
      return arrayKeys.call(validate(this));
    },
    values: function values() {
      return arrayValues.call(validate(this));
    }
  };

  var isTAIndex = function (target, key) {
    return isObject(target)
      && target[TYPED_ARRAY]
      && typeof key != 'symbol'
      && key in target
      && String(+key) == String(key);
  };
  var $getDesc = function getOwnPropertyDescriptor(target, key) {
    return isTAIndex(target, key = toPrimitive(key, true))
      ? propertyDesc(2, target[key])
      : gOPD(target, key);
  };
  var $setDesc = function defineProperty(target, key, desc) {
    if (isTAIndex(target, key = toPrimitive(key, true))
      && isObject(desc)
      && has(desc, 'value')
      && !has(desc, 'get')
      && !has(desc, 'set')
      // TODO: add validation descriptor w/o calling accessors
      && !desc.configurable
      && (!has(desc, 'writable') || desc.writable)
      && (!has(desc, 'enumerable') || desc.enumerable)
    ) {
      target[key] = desc.value;
      return target;
    } return dP(target, key, desc);
  };

  if (!ALL_CONSTRUCTORS) {
    $GOPD.f = $getDesc;
    $DP.f = $setDesc;
  }

  $export($export.S + $export.F * !ALL_CONSTRUCTORS, 'Object', {
    getOwnPropertyDescriptor: $getDesc,
    defineProperty: $setDesc
  });

  if (fails(function () { arrayToString.call({}); })) {
    arrayToString = arrayToLocaleString = function toString() {
      return arrayJoin.call(this);
    };
  }

  var $TypedArrayPrototype$ = redefineAll({}, proto);
  redefineAll($TypedArrayPrototype$, $iterators);
  hide($TypedArrayPrototype$, ITERATOR, $iterators.values);
  redefineAll($TypedArrayPrototype$, {
    slice: $slice,
    set: $set,
    constructor: function () { /* noop */ },
    toString: arrayToString,
    toLocaleString: $toLocaleString
  });
  addGetter($TypedArrayPrototype$, 'buffer', 'b');
  addGetter($TypedArrayPrototype$, 'byteOffset', 'o');
  addGetter($TypedArrayPrototype$, 'byteLength', 'l');
  addGetter($TypedArrayPrototype$, 'length', 'e');
  dP($TypedArrayPrototype$, TAG, {
    get: function () { return this[TYPED_ARRAY]; }
  });

  // eslint-disable-next-line max-statements
  module.exports = function (KEY, BYTES, wrapper, CLAMPED) {
    CLAMPED = !!CLAMPED;
    var NAME = KEY + (CLAMPED ? 'Clamped' : '') + 'Array';
    var GETTER = 'get' + KEY;
    var SETTER = 'set' + KEY;
    var TypedArray = global[NAME];
    var Base = TypedArray || {};
    var TAC = TypedArray && getPrototypeOf(TypedArray);
    var FORCED = !TypedArray || !$typed.ABV;
    var O = {};
    var TypedArrayPrototype = TypedArray && TypedArray[PROTOTYPE];
    var getter = function (that, index) {
      var data = that._d;
      return data.v[GETTER](index * BYTES + data.o, LITTLE_ENDIAN);
    };
    var setter = function (that, index, value) {
      var data = that._d;
      if (CLAMPED) value = (value = Math.round(value)) < 0 ? 0 : value > 0xff ? 0xff : value & 0xff;
      data.v[SETTER](index * BYTES + data.o, value, LITTLE_ENDIAN);
    };
    var addElement = function (that, index) {
      dP(that, index, {
        get: function () {
          return getter(this, index);
        },
        set: function (value) {
          return setter(this, index, value);
        },
        enumerable: true
      });
    };
    if (FORCED) {
      TypedArray = wrapper(function (that, data, $offset, $length) {
        anInstance(that, TypedArray, NAME, '_d');
        var index = 0;
        var offset = 0;
        var buffer, byteLength, length, klass;
        if (!isObject(data)) {
          length = toIndex(data);
          byteLength = length * BYTES;
          buffer = new $ArrayBuffer(byteLength);
        } else if (data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER) {
          buffer = data;
          offset = toOffset($offset, BYTES);
          var $len = data.byteLength;
          if ($length === undefined) {
            if ($len % BYTES) throw RangeError(WRONG_LENGTH);
            byteLength = $len - offset;
            if (byteLength < 0) throw RangeError(WRONG_LENGTH);
          } else {
            byteLength = toLength($length) * BYTES;
            if (byteLength + offset > $len) throw RangeError(WRONG_LENGTH);
          }
          length = byteLength / BYTES;
        } else if (TYPED_ARRAY in data) {
          return fromList(TypedArray, data);
        } else {
          return $from.call(TypedArray, data);
        }
        hide(that, '_d', {
          b: buffer,
          o: offset,
          l: byteLength,
          e: length,
          v: new $DataView(buffer)
        });
        while (index < length) addElement(that, index++);
      });
      TypedArrayPrototype = TypedArray[PROTOTYPE] = create($TypedArrayPrototype$);
      hide(TypedArrayPrototype, 'constructor', TypedArray);
    } else if (!fails(function () {
      TypedArray(1);
    }) || !fails(function () {
      new TypedArray(-1); // eslint-disable-line no-new
    }) || !$iterDetect(function (iter) {
      new TypedArray(); // eslint-disable-line no-new
      new TypedArray(null); // eslint-disable-line no-new
      new TypedArray(1.5); // eslint-disable-line no-new
      new TypedArray(iter); // eslint-disable-line no-new
    }, true)) {
      TypedArray = wrapper(function (that, data, $offset, $length) {
        anInstance(that, TypedArray, NAME);
        var klass;
        // `ws` module bug, temporarily remove validation length for Uint8Array
        // https://github.com/websockets/ws/pull/645
        if (!isObject(data)) return new Base(toIndex(data));
        if (data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER) {
          return $length !== undefined
            ? new Base(data, toOffset($offset, BYTES), $length)
            : $offset !== undefined
              ? new Base(data, toOffset($offset, BYTES))
              : new Base(data);
        }
        if (TYPED_ARRAY in data) return fromList(TypedArray, data);
        return $from.call(TypedArray, data);
      });
      arrayForEach(TAC !== Function.prototype ? gOPN(Base).concat(gOPN(TAC)) : gOPN(Base), function (key) {
        if (!(key in TypedArray)) hide(TypedArray, key, Base[key]);
      });
      TypedArray[PROTOTYPE] = TypedArrayPrototype;
      if (!LIBRARY) TypedArrayPrototype.constructor = TypedArray;
    }
    var $nativeIterator = TypedArrayPrototype[ITERATOR];
    var CORRECT_ITER_NAME = !!$nativeIterator
      && ($nativeIterator.name == 'values' || $nativeIterator.name == undefined);
    var $iterator = $iterators.values;
    hide(TypedArray, TYPED_CONSTRUCTOR, true);
    hide(TypedArrayPrototype, TYPED_ARRAY, NAME);
    hide(TypedArrayPrototype, VIEW, true);
    hide(TypedArrayPrototype, DEF_CONSTRUCTOR, TypedArray);

    if (CLAMPED ? new TypedArray(1)[TAG] != NAME : !(TAG in TypedArrayPrototype)) {
      dP(TypedArrayPrototype, TAG, {
        get: function () { return NAME; }
      });
    }

    O[NAME] = TypedArray;

    $export($export.G + $export.W + $export.F * (TypedArray != Base), O);

    $export($export.S, NAME, {
      BYTES_PER_ELEMENT: BYTES
    });

    $export($export.S + $export.F * fails(function () { Base.of.call(TypedArray, 1); }), NAME, {
      from: $from,
      of: $of
    });

    if (!(BYTES_PER_ELEMENT in TypedArrayPrototype)) hide(TypedArrayPrototype, BYTES_PER_ELEMENT, BYTES);

    $export($export.P, NAME, proto);

    setSpecies(NAME);

    $export($export.P + $export.F * FORCED_SET, NAME, { set: $set });

    $export($export.P + $export.F * !CORRECT_ITER_NAME, NAME, $iterators);

    if (!LIBRARY && TypedArrayPrototype.toString != arrayToString) TypedArrayPrototype.toString = arrayToString;

    $export($export.P + $export.F * fails(function () {
      new TypedArray(1).slice();
    }), NAME, { slice: $slice });

    $export($export.P + $export.F * (fails(function () {
      return [1, 2].toLocaleString() != new TypedArray([1, 2]).toLocaleString();
    }) || !fails(function () {
      TypedArrayPrototype.toLocaleString.call([1, 2]);
    })), NAME, { toLocaleString: $toLocaleString });

    Iterators[NAME] = CORRECT_ITER_NAME ? $nativeIterator : $iterator;
    if (!LIBRARY && !CORRECT_ITER_NAME) hide(TypedArrayPrototype, ITERATOR, $iterator);
  };
} else module.exports = function () { /* empty */ };


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(36)('meta');
var isObject = __webpack_require__(4);
var has = __webpack_require__(13);
var setDesc = __webpack_require__(9).f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(2)(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(4);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

// 22.1.3.31 Array.prototype[@@unscopables]
var UNSCOPABLES = __webpack_require__(5)('unscopables');
var ArrayProto = Array.prototype;
if (ArrayProto[UNSCOPABLES] == undefined) __webpack_require__(14)(ArrayProto, UNSCOPABLES, {});
module.exports = function (key) {
  ArrayProto[UNSCOPABLES][key] = true;
};


/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = false;


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(1);
var dPs = __webpack_require__(111);
var enumBugKeys = __webpack_require__(71);
var IE_PROTO = __webpack_require__(82)('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(70)('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(73).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(113);
var hiddenKeys = __webpack_require__(71).concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(13);
var toObject = __webpack_require__(10);
var IE_PROTO = __webpack_require__(82)('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(113);
var enumBugKeys = __webpack_require__(71);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(22);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),
/* 36 */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(4);
module.exports = function (it, TYPE) {
  if (!isObject(it) || it._t !== TYPE) throw TypeError('Incompatible receiver, ' + TYPE + ' required!');
  return it;
};


/***/ }),
/* 38 */
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};


/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

var redefine = __webpack_require__(11);
module.exports = function (target, src, safe) {
  for (var key in src) redefine(target, key, src[key], safe);
  return target;
};


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(3);
var dP = __webpack_require__(9);
var DESCRIPTORS = __webpack_require__(8);
var SPECIES = __webpack_require__(5)('species');

module.exports = function (KEY) {
  var C = global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
};


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(9).f;
var has = __webpack_require__(13);
var TAG = __webpack_require__(5)('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(0);
var defined = __webpack_require__(24);
var fails = __webpack_require__(2);
var spaces = __webpack_require__(86);
var space = '[' + spaces + ']';
var non = '\u200b\u0085';
var ltrim = RegExp('^' + space + space + '*');
var rtrim = RegExp(space + space + '*$');

var exporter = function (KEY, exec, ALIAS) {
  var exp = {};
  var FORCE = fails(function () {
    return !!spaces[KEY]() || non[KEY]() != non;
  });
  var fn = exp[KEY] = FORCE ? exec(trim) : spaces[KEY];
  if (ALIAS) exp[ALIAS] = fn;
  $export($export.P + $export.F * FORCE, 'String', exp);
};

// 1 -> String#trimLeft
// 2 -> String#trimRight
// 3 -> String#trim
var trim = exporter.trim = function (string, TYPE) {
  string = String(defined(string));
  if (TYPE & 1) string = string.replace(ltrim, '');
  if (TYPE & 2) string = string.replace(rtrim, '');
  return string;
};

module.exports = exporter;


/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return ziggeoRecorderAttributesPropTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return ziggeoPlayerAttributesPropTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ziggeoAudioRecorderAttributesPropTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return ziggeoAudioPlayerAttributesPropTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return ziggeoRecorderEmbeddingEventsPropTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return ziggeoPlayerEmbeddingEventsPropTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return ziggeoCommonEmbeddingEventsPropTypes; });
/* unused harmony export ziggeoMethods */
/* unused harmony export ziggeoApiEventsPropTypes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return reactCustomOptions; });
/* unused harmony export ziggeoApplicationEvents */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return ziggeoRecorderApplicationOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ziggeoPlayerApplicationOptions; });
/* unused harmony export screenRecorderOptions */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_prop_types__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_prop_types__);
 // ####################### Player/Recorder Attributes #############################
// When using HTML embed methods, all parameters should be prefixed with ziggeo-
// https://ziggeo.com/docs/sdks/javascript/browser-integration/parameters#javascript-revision=v1-r29&javascript-version=v2

var ziggeoRecorderAttributesPropTypes = {
  // Presentational parameters
  'width': __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_prop_types__["oneOfType"])([__WEBPACK_IMPORTED_MODULE_0_prop_types__["number"], __WEBPACK_IMPORTED_MODULE_0_prop_types__["string"]]),
  'height': __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_prop_types__["oneOfType"])([__WEBPACK_IMPORTED_MODULE_0_prop_types__["number"], __WEBPACK_IMPORTED_MODULE_0_prop_types__["string"]]),
  'responsive': __WEBPACK_IMPORTED_MODULE_0_prop_types__["bool"],
  'faceoutline': __WEBPACK_IMPORTED_MODULE_0_prop_types__["bool"],
  'skipinitial': __WEBPACK_IMPORTED_MODULE_0_prop_types__["bool"],
  'skipinitialonrerecord': __WEBPACK_IMPORTED_MODULE_0_prop_types__["bool"],
  'picksnapshots': __WEBPACK_IMPORTED_MODULE_0_prop_types__["bool"],
  'countdown': __WEBPACK_IMPORTED_MODULE_0_prop_types__["number"],
  'stream-width': __WEBPACK_IMPORTED_MODULE_0_prop_types__["number"],
  'stream-height': __WEBPACK_IMPORTED_MODULE_0_prop_types__["number"],
  'nofullscreen': __WEBPACK_IMPORTED_MODULE_0_prop_types__["bool"],
  'snapshotmax': __WEBPACK_IMPORTED_MODULE_0_prop_types__["number"],
  'gallerysnapshots': __WEBPACK_IMPORTED_MODULE_0_prop_types__["number"],
  'localplayback': __WEBPACK_IMPORTED_MODULE_0_prop_types__["bool"],
  'stretch': __WEBPACK_IMPORTED_MODULE_0_prop_types__["bool"],
  'stretchwidth': __WEBPACK_IMPORTED_MODULE_0_prop_types__["bool"],
  'stretchheight': __WEBPACK_IMPORTED_MODULE_0_prop_types__["bool"],
  'theme': __WEBPACK_IMPORTED_MODULE_0_prop_types__["string"],
  'themecolor': __WEBPACK_IMPORTED_MODULE_0_prop_types__["string"],
  'autorecord': __WEBPACK_IMPORTED_MODULE_0_prop_types__["bool"],
  'primaryrecord': __WEBPACK_IMPORTED_MODULE_0_prop_types__["bool"],
  'flip-camera': __WEBPACK_IMPORTED_MODULE_0_prop_types__["bool"],
  "flipscreen": __WEBPACK_IMPORTED_MODULE_0_prop_types__["bool"],
  // Will affect as true, if flip-camera also set as true
  'early-rerecord': __WEBPACK_IMPORTED_MODULE_0_prop_types__["bool"],
  'sharevideo': __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_prop_types__["arrayOf"])(__WEBPACK_IMPORTED_MODULE_0_prop_types__["string"]),
  'transcript-language': __WEBPACK_IMPORTED_MODULE_0_prop_types__["string"],
  'allowtexttrackupload': __WEBPACK_IMPORTED_MODULE_0_prop_types__["bool"],
  'uploadlocales': __WEBPACK_IMPORTED_MODULE_0_prop_types__["array"],
  'audio-test-mandatory': __WEBPACK_IMPORTED_MODULE_0_prop_types__["bool"],
  'playermodeifexists': __WEBPACK_IMPORTED_MODULE_0_prop_types__["bool"],
  'rerecordableifexists': __WEBPACK_IMPORTED_MODULE_0_prop_types__["bool"],
  'preview-effect-profile': __WEBPACK_IMPORTED_MODULE_0_prop_types__["string"],
  'popup-width': __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_prop_types__["oneOfType"])([__WEBPACK_IMPORTED_MODULE_0_prop_types__["number"], __WEBPACK_IMPORTED_MODULE_0_prop_types__["string"]]),
  'popup-height': __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_prop_types__["oneOfType"])([__WEBPACK_IMPORTED_MODULE_0_prop_types__["number"], __WEBPACK_IMPORTED_MODULE_0_prop_types__["string"]]),
  'snapshotfrommobilecapture': __WEBPACK_IMPORTED_MODULE_0_prop_types__["bool"],
  // Security parameters
  'server-auth': __WEBPACK_IMPORTED_MODULE_0_prop_types__["string"],
  'client-auth': __WEBPACK_IMPORTED_MODULE_0_prop_types__["string"],
  'expiration-days': __WEBPACK_IMPORTED_MODULE_0_prop_types__["number"],
  // Video management parameters
  'recordingwidth': __WEBPACK_IMPORTED_MODULE_0_prop_types__["number"],
  'recordingheight': __WEBPACK_IMPORTED_MODULE_0_prop_types__["number"],
  'minuploadingwidth': __WEBPACK_IMPORTED_MODULE_0_prop_types__["number"],
  'maxuploadingwidth': __WEBPACK_IMPORTED_MODULE_0_prop_types__["number"],
  'minuploadingheight': __WEBPACK_IMPORTED_MODULE_0_prop_types__["number"],
  'maxuploadingheight': __WEBPACK_IMPORTED_MODULE_0_prop_types__["number"],
  'video': __WEBPACK_IMPORTED_MODULE_0_prop_types__["string"],
  'auto-crop': __WEBPACK_IMPORTED_MODULE_0_prop_types__["bool"],
  'auto-pad': __WEBPACK_IMPORTED_MODULE_0_prop_types__["bool"],
  '_key': __WEBPACK_IMPORTED_MODULE_0_prop_types__["string"],
  "rtmpstreamtype": __WEBPACK_IMPORTED_MODULE_0_prop_types__["string"],
  "rtmpmicrophonecodec": __WEBPACK_IMPORTED_MODULE_0_prop_types__["string"],
  'timelimit': __WEBPACK_IMPORTED_MODULE_0_prop_types__["number"],
  'timeminlimit': __WEBPACK_IMPORTED_MODULE_0_prop_types__["number"],
  'video-profile': __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_prop_types__["oneOfType"])([__WEBPACK_IMPORTED_MODULE_0_prop_types__["string"], __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_prop_types__["arrayOf"])(__WEBPACK_IMPORTED_MODULE_0_prop_types__["string"])]),
  'effect-profile': __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_prop_types__["oneOfType"])([__WEBPACK_IMPORTED_MODULE_0_prop_types__["string"], __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_prop_types__["arrayOf"])(__WEBPACK_IMPORTED_MODULE_0_prop_types__["string"])]),
  'meta-profile': __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_prop_types__["oneOfType"])([__WEBPACK_IMPORTED_MODULE_0_prop_types__["string"], __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_prop_types__["arrayOf"])(__WEBPACK_IMPORTED_MODULE_0_prop_types__["string"])]),
  'cpu-friendly': __WEBPACK_IMPORTED_MODULE_0_prop_types__["bool"],
  'enforce-duration': __WEBPACK_IMPORTED_MODULE_0_prop_types__["bool"],
  'noaudio': __WEBPACK_IMPORTED_MODULE_0_prop_types__["bool"],
  'source': __WEBPACK_IMPORTED_MODULE_0_prop_types__["string"],
  'framerate': __WEBPACK_IMPORTED_MODULE_0_prop_types__["number"],
  'framerate-warning': __WEBPACK_IMPORTED_MODULE_0_prop_types__["string"],
  'snapshottype': __WEBPACK_IMPORTED_MODULE_0_prop_types__["string"],
  'videobitrate': __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_prop_types__["oneOfType"])([__WEBPACK_IMPORTED_MODULE_0_prop_types__["number"], __WEBPACK_IMPORTED_MODULE_0_prop_types__["string"]]),
  'audiobitrate': __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_prop_types__["oneOfType"])([__WEBPACK_IMPORTED_MODULE_0_prop_types__["number"], __WEBPACK_IMPORTED_MODULE_0_prop_types__["string"]]),
  'microphone-volume': __WEBPACK_IMPORTED_MODULE_0_prop_types__["number"],
  'custom-covershots': __WEBPACK_IMPORTED_MODULE_0_prop_types__["bool"],
  'selectfirstcovershotonskip': __WEBPACK_IMPORTED_MODULE_0_prop_types__["bool"],
  'picksnapshotmandatory': __WEBPACK_IMPORTED_MODULE_0_prop_types__["bool"],
  'pausable': __WEBPACK_IMPORTED_MODULE_0_prop_types__["bool"],
  'snapshotfromuploader': __WEBPACK_IMPORTED_MODULE_0_prop_types__["bool"],
  'allowmultistreams': __WEBPACK_IMPORTED_MODULE_0_prop_types__["bool"],
  'multistreamreversable': __WEBPACK_IMPORTED_MODULE_0_prop_types__["bool"],
  'multistreamdraggable': __WEBPACK_IMPORTED_MODULE_0_prop_types__["bool"],
  'multistreamresizeable': __WEBPACK_IMPORTED_MODULE_0_prop_types__["bool"],
  'addstreamproportional': __WEBPACK_IMPORTED_MODULE_0_prop_types__["bool"],
  'addstreampositionx': __WEBPACK_IMPORTED_MODULE_0_prop_types__["number"],
  'addstreampositiony': __WEBPACK_IMPORTED_MODULE_0_prop_types__["number"],
  'addstreampositionwidth': __WEBPACK_IMPORTED_MODULE_0_prop_types__["number"],
  'addstreampositionheight': __WEBPACK_IMPORTED_MODULE_0_prop_types__["number"],
  'addstreamminwidth': __WEBPACK_IMPORTED_MODULE_0_prop_types__["number"],
  'addstreamminheight': __WEBPACK_IMPORTED_MODULE_0_prop_types__["number"],
  'fullscreenmandatory': __WEBPACK_IMPORTED_MODULE_0_prop_types__["bool"],
  'fittodimensions': __WEBPACK_IMPORTED_MODULE_0_prop_types__["bool"],
  'outsource-selectors': __WEBPACK_IMPORTED_MODULE_0_prop_types__["string"],
  'screenrecordmandatory': __WEBPACK_IMPORTED_MODULE_0_prop_types__["bool"],
  'media-orientation': __WEBPACK_IMPORTED_MODULE_0_prop_types__["string"],
  'pickcovershotframe': __WEBPACK_IMPORTED_MODULE_0_prop_types__["bool"],
  'allowtrim': __WEBPACK_IMPORTED_MODULE_0_prop_types__["bool"],
  'trimoverlay': __WEBPACK_IMPORTED_MODULE_0_prop_types__["bool"],
  'aspectratio': __WEBPACK_IMPORTED_MODULE_0_prop_types__["number"],
  'pauseonclick': __WEBPACK_IMPORTED_MODULE_0_prop_types__["bool"],
  // Data parameters
  'tags': __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_prop_types__["arrayOf"])(__WEBPACK_IMPORTED_MODULE_0_prop_types__["string"]),
  'custom-data': __WEBPACK_IMPORTED_MODULE_0_prop_types__["object"],
  'title': __WEBPACK_IMPORTED_MODULE_0_prop_types__["string"],
  'description': __WEBPACK_IMPORTED_MODULE_0_prop_types__["string"],
  // Operational parameters
  'manual_upload': __WEBPACK_IMPORTED_MODULE_0_prop_types__["bool"],
  'rerecordable': __WEBPACK_IMPORTED_MODULE_0_prop_types__["bool"],
  'allowupload': __WEBPACK_IMPORTED_MODULE_0_prop_types__["bool"],
  'allowscreen': __WEBPACK_IMPORTED_MODULE_0_prop_types__["bool"],
  'allowrecord': __WEBPACK_IMPORTED_MODULE_0_prop_types__["bool"],
  'display-timer': __WEBPACK_IMPORTED_MODULE_0_prop_types__["bool"],
  'force-overwrite': __WEBPACK_IMPORTED_MODULE_0_prop_types__["bool"],
  'autoplay': __WEBPACK_IMPORTED_MODULE_0_prop_types__["bool"],
  'recordings': __WEBPACK_IMPORTED_MODULE_0_prop_types__["number"],
  'allowedextensions': __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_prop_types__["arrayOf"])(__WEBPACK_IMPORTED_MODULE_0_prop_types__["string"]),
  'application': __WEBPACK_IMPORTED_MODULE_0_prop_types__["string"],
  //	oneOfType([object, string]),
  'filesizelimit': __WEBPACK_IMPORTED_MODULE_0_prop_types__["number"],
  'flashincognitosupport': __WEBPACK_IMPORTED_MODULE_0_prop_types__["bool"],
  'simulate': __WEBPACK_IMPORTED_MODULE_0_prop_types__["bool"],
  'allowcustomupload': __WEBPACK_IMPORTED_MODULE_0_prop_types__["bool"],
  'manual-upload': __WEBPACK_IMPORTED_MODULE_0_prop_types__["bool"],
  'camerafacefront': __WEBPACK_IMPORTED_MODULE_0_prop_types__["bool"],
  'createthumbnails': __WEBPACK_IMPORTED_MODULE_0_prop_types__["bool"],
  'skipseconds': __WEBPACK_IMPORTED_MODULE_0_prop_types__["number"],
  'showsettingsmenu': __WEBPACK_IMPORTED_MODULE_0_prop_types__["bool"],
  // As a property show/hide from users
  'hidevolumebar': __WEBPACK_IMPORTED_MODULE_0_prop_types__["bool"],
  'recordermode': __WEBPACK_IMPORTED_MODULE_0_prop_types__["bool"],
  'forceflash': __WEBPACK_IMPORTED_MODULE_0_prop_types__["bool"],
  'noflash': __WEBPACK_IMPORTED_MODULE_0_prop_types__["bool"],
  'manualsubmit': __WEBPACK_IMPORTED_MODULE_0_prop_types__["bool"],
  'initialseek': __WEBPACK_IMPORTED_MODULE_0_prop_types__["number"],
  'playfullscreenonmobile': __WEBPACK_IMPORTED_MODULE_0_prop_types__["bool"],
  'playwhenvisible': __WEBPACK_IMPORTED_MODULE_0_prop_types__["bool"],
  'playonclick': __WEBPACK_IMPORTED_MODULE_0_prop_types__["bool"],
  'disableseeking': __WEBPACK_IMPORTED_MODULE_0_prop_types__["bool"],
  'disablepause': __WEBPACK_IMPORTED_MODULE_0_prop_types__["bool"],
  'pauseonplay': __WEBPACK_IMPORTED_MODULE_0_prop_types__["bool"],
  'onlyaudio': __WEBPACK_IMPORTED_MODULE_0_prop_types__["bool"],
  'airplay': __WEBPACK_IMPORTED_MODULE_0_prop_types__["bool"],
  'chromecast': __WEBPACK_IMPORTED_MODULE_0_prop_types__["bool"],
  'preload': __WEBPACK_IMPORTED_MODULE_0_prop_types__["bool"],
  'delete-old-streams': __WEBPACK_IMPORTED_MODULE_0_prop_types__["bool"],
  'lazy-application': __WEBPACK_IMPORTED_MODULE_0_prop_types__["bool"],
  'allowcancel': __WEBPACK_IMPORTED_MODULE_0_prop_types__["bool"],
  'orientation': __WEBPACK_IMPORTED_MODULE_0_prop_types__["string"],
  'popup': __WEBPACK_IMPORTED_MODULE_0_prop_types__["bool"],
  'popup-stretch': __WEBPACK_IMPORTED_MODULE_0_prop_types__["bool"],
  // Form and HTML parameters
  'input-bind': __WEBPACK_IMPORTED_MODULE_0_prop_types__["string"],
  'form-accept': __WEBPACK_IMPORTED_MODULE_0_prop_types__["string"]
};
var ziggeoPlayerAttributesPropTypes = {
  // Presentational parameters
  'width': __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_prop_types__["oneOfType"])([__WEBPACK_IMPORTED_MODULE_0_prop_types__["number"], __WEBPACK_IMPORTED_MODULE_0_prop_types__["string"]]),
  'height': __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_prop_types__["oneOfType"])([__WEBPACK_IMPORTED_MODULE_0_prop_types__["number"], __WEBPACK_IMPORTED_MODULE_0_prop_types__["string"]]),
  'responsive': __WEBPACK_IMPORTED_MODULE_0_prop_types__["bool"],
  'skipinitial': __WEBPACK_IMPORTED_MODULE_0_prop_types__["bool"],
  'picksnapshots': __WEBPACK_IMPORTED_MODULE_0_prop_types__["bool"],
  'countdown': __WEBPACK_IMPORTED_MODULE_0_prop_types__["number"],
  'stream-width': __WEBPACK_IMPORTED_MODULE_0_prop_types__["number"],
  'stream-height': __WEBPACK_IMPORTED_MODULE_0_prop_types__["number"],
  'nofullscreen': __WEBPACK_IMPORTED_MODULE_0_prop_types__["bool"],
  'localplayback': __WEBPACK_IMPORTED_MODULE_0_prop_types__["bool"],
  'theme': __WEBPACK_IMPORTED_MODULE_0_prop_types__["string"],
  'themecolor': __WEBPACK_IMPORTED_MODULE_0_prop_types__["string"],
  'sharevideo': __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_prop_types__["arrayOf"])(__WEBPACK_IMPORTED_MODULE_0_prop_types__["string"]),
  'loop': __WEBPACK_IMPORTED_MODULE_0_prop_types__["bool"],
  'loopall': __WEBPACK_IMPORTED_MODULE_0_prop_types__["bool"],
  'volume': __WEBPACK_IMPORTED_MODULE_0_prop_types__["number"],
  'showduration': __WEBPACK_IMPORTED_MODULE_0_prop_types__["bool"],
  'uploadlocales': __WEBPACK_IMPORTED_MODULE_0_prop_types__["array"],
  'allowtexttrackupload': __WEBPACK_IMPORTED_MODULE_0_prop_types__["bool"],
  'audio-transcription-as-subtitles': __WEBPACK_IMPORTED_MODULE_0_prop_types__["bool"],
  'playlist': __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_prop_types__["oneOfType"])([__WEBPACK_IMPORTED_MODULE_0_prop_types__["array"], __WEBPACK_IMPORTED_MODULE_0_prop_types__["string"]]),
  'popup': __WEBPACK_IMPORTED_MODULE_0_prop_types__["bool"],
  'popup-stretch': __WEBPACK_IMPORTED_MODULE_0_prop_types__["bool"],
  'popup-width': __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_prop_types__["oneOfType"])([__WEBPACK_IMPORTED_MODULE_0_prop_types__["number"], __WEBPACK_IMPORTED_MODULE_0_prop_types__["string"]]),
  'popup-height': __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_prop_types__["oneOfType"])([__WEBPACK_IMPORTED_MODULE_0_prop_types__["number"], __WEBPACK_IMPORTED_MODULE_0_prop_types__["string"]]),
  'videofitstrategy': __WEBPACK_IMPORTED_MODULE_0_prop_types__["string"],
  'posterfitstrategy': __WEBPACK_IMPORTED_MODULE_0_prop_types__["string"],
  // Security parameters
  'server-auth': __WEBPACK_IMPORTED_MODULE_0_prop_types__["string"],
  'client-auth': __WEBPACK_IMPORTED_MODULE_0_prop_types__["string"],
  'stretch': __WEBPACK_IMPORTED_MODULE_0_prop_types__["bool"],
  'hideoninactivity': __WEBPACK_IMPORTED_MODULE_0_prop_types__["bool"],
  'hidebarafter': __WEBPACK_IMPORTED_MODULE_0_prop_types__["number"],
  // in milliseconds
  'preventinteraction': __WEBPACK_IMPORTED_MODULE_0_prop_types__["bool"],
  'stretchwidth': __WEBPACK_IMPORTED_MODULE_0_prop_types__["bool"],
  'stretchheight': __WEBPACK_IMPORTED_MODULE_0_prop_types__["bool"],
  // Video management parameters
  'video': __WEBPACK_IMPORTED_MODULE_0_prop_types__["string"].isRequired,
  'stream': __WEBPACK_IMPORTED_MODULE_0_prop_types__["string"],
  '_key': __WEBPACK_IMPORTED_MODULE_0_prop_types__["string"],
  'effect-profile': __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_prop_types__["oneOfType"])([__WEBPACK_IMPORTED_MODULE_0_prop_types__["string"], __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_prop_types__["arrayOf"])(__WEBPACK_IMPORTED_MODULE_0_prop_types__["string"])]),
  'video-profile': __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_prop_types__["oneOfType"])([__WEBPACK_IMPORTED_MODULE_0_prop_types__["string"], __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_prop_types__["arrayOf"])(__WEBPACK_IMPORTED_MODULE_0_prop_types__["string"])]),
  'noaudio': __WEBPACK_IMPORTED_MODULE_0_prop_types__["bool"],
  'poster': __WEBPACK_IMPORTED_MODULE_0_prop_types__["string"],
  'source': __WEBPACK_IMPORTED_MODULE_0_prop_types__["string"],
  'framerate': __WEBPACK_IMPORTED_MODULE_0_prop_types__["number"],
  'videobitrate': __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_prop_types__["oneOfType"])([__WEBPACK_IMPORTED_MODULE_0_prop_types__["number"], __WEBPACK_IMPORTED_MODULE_0_prop_types__["string"]]),
  'audiobitrate': __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_prop_types__["oneOfType"])([__WEBPACK_IMPORTED_MODULE_0_prop_types__["number"], __WEBPACK_IMPORTED_MODULE_0_prop_types__["string"]]),
  // Data parameters
  'tags': __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_prop_types__["arrayOf"])(__WEBPACK_IMPORTED_MODULE_0_prop_types__["string"]),
  'custom-data': __WEBPACK_IMPORTED_MODULE_0_prop_types__["object"],
  'title': __WEBPACK_IMPORTED_MODULE_0_prop_types__["string"],
  'description': __WEBPACK_IMPORTED_MODULE_0_prop_types__["string"],
  // Operational parameters
  'allowpip': __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_prop_types__["oneOfType"])([__WEBPACK_IMPORTED_MODULE_0_prop_types__["bool"], __WEBPACK_IMPORTED_MODULE_0_prop_types__["func"]]),
  // Disable Picture-In-Picture by default, Has to be boolean. Need present func also because of Ziggeo internally used as function
  'autoplay': __WEBPACK_IMPORTED_MODULE_0_prop_types__["bool"],
  'application': __WEBPACK_IMPORTED_MODULE_0_prop_types__["string"],
  // oneOfType([object, string]),
  'flashincognitosupport': __WEBPACK_IMPORTED_MODULE_0_prop_types__["bool"],
  'forceflash': __WEBPACK_IMPORTED_MODULE_0_prop_types__["bool"],
  'noflash': __WEBPACK_IMPORTED_MODULE_0_prop_types__["bool"],
  'initialseek': __WEBPACK_IMPORTED_MODULE_0_prop_types__["number"],
  'playfullscreenonmobile': __WEBPACK_IMPORTED_MODULE_0_prop_types__["bool"],
  'playwhenvisible': __WEBPACK_IMPORTED_MODULE_0_prop_types__["bool"],
  'playonclick': __WEBPACK_IMPORTED_MODULE_0_prop_types__["bool"],
  'disableseeking': __WEBPACK_IMPORTED_MODULE_0_prop_types__["bool"],
  'disablepause': __WEBPACK_IMPORTED_MODULE_0_prop_types__["bool"],
  'pauseonplay': __WEBPACK_IMPORTED_MODULE_0_prop_types__["bool"],
  'onlyaudio': __WEBPACK_IMPORTED_MODULE_0_prop_types__["bool"],
  'airplay': __WEBPACK_IMPORTED_MODULE_0_prop_types__["bool"],
  'chromecast': __WEBPACK_IMPORTED_MODULE_0_prop_types__["bool"],
  'preload': __WEBPACK_IMPORTED_MODULE_0_prop_types__["bool"],
  'lazy-application': __WEBPACK_IMPORTED_MODULE_0_prop_types__["bool"],
  'preroll': __WEBPACK_IMPORTED_MODULE_0_prop_types__["bool"],
  'vast': __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_prop_types__["arrayOf"])(__WEBPACK_IMPORTED_MODULE_0_prop_types__["object"]),
  // Form and HTML parameters
  'input-bind': __WEBPACK_IMPORTED_MODULE_0_prop_types__["string"],
  'form-accept': __WEBPACK_IMPORTED_MODULE_0_prop_types__["string"] // // handle special cases
  // handleVideo: function(props, propName, componentName) {
  //     if( (props['video'] === undefined || props['video'].length < 1) &&
  //         (props['video-profile'] === undefined || props['video-profile'].length < 1)
  //     ) {
  //         return new Error(
  //             'Please provide with video or video-profile token to component' +
  //             ' `' + componentName + '`. Validation failed'
  //         )
  //     }
  // },

};
var ziggeoAudioRecorderAttributesPropTypes = {
  // Presentational parameters
  'width': __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_prop_types__["oneOfType"])([__WEBPACK_IMPORTED_MODULE_0_prop_types__["number"], __WEBPACK_IMPORTED_MODULE_0_prop_types__["string"]]),
  'height': __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_prop_types__["oneOfType"])([__WEBPACK_IMPORTED_MODULE_0_prop_types__["number"], __WEBPACK_IMPORTED_MODULE_0_prop_types__["string"]]),
  'responsive': __WEBPACK_IMPORTED_MODULE_0_prop_types__["bool"],
  'skipinitial': __WEBPACK_IMPORTED_MODULE_0_prop_types__["bool"],
  'skipinitialonrerecord': __WEBPACK_IMPORTED_MODULE_0_prop_types__["bool"],
  'countdown': __WEBPACK_IMPORTED_MODULE_0_prop_types__["number"],
  'nofullscreen': __WEBPACK_IMPORTED_MODULE_0_prop_types__["bool"],
  'localplayback': __WEBPACK_IMPORTED_MODULE_0_prop_types__["bool"],
  'theme': __WEBPACK_IMPORTED_MODULE_0_prop_types__["string"],
  'themecolor': __WEBPACK_IMPORTED_MODULE_0_prop_types__["string"],
  'autorecord': __WEBPACK_IMPORTED_MODULE_0_prop_types__["bool"],
  'primaryrecord': __WEBPACK_IMPORTED_MODULE_0_prop_types__["bool"],
  'early-rerecord': __WEBPACK_IMPORTED_MODULE_0_prop_types__["bool"],
  'transcript-language': __WEBPACK_IMPORTED_MODULE_0_prop_types__["string"],
  'allowtexttrackupload': __WEBPACK_IMPORTED_MODULE_0_prop_types__["bool"],
  'uploadlocales': __WEBPACK_IMPORTED_MODULE_0_prop_types__["array"],
  'audio-test-mandatory': __WEBPACK_IMPORTED_MODULE_0_prop_types__["bool"],
  'playermodeifexists': __WEBPACK_IMPORTED_MODULE_0_prop_types__["bool"],
  'rerecordableifexists': __WEBPACK_IMPORTED_MODULE_0_prop_types__["bool"],
  'popup-width': __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_prop_types__["oneOfType"])([__WEBPACK_IMPORTED_MODULE_0_prop_types__["number"], __WEBPACK_IMPORTED_MODULE_0_prop_types__["string"]]),
  'popup-height': __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_prop_types__["oneOfType"])([__WEBPACK_IMPORTED_MODULE_0_prop_types__["number"], __WEBPACK_IMPORTED_MODULE_0_prop_types__["string"]]),
  // Security parameters
  'server-auth': __WEBPACK_IMPORTED_MODULE_0_prop_types__["string"],
  'client-auth': __WEBPACK_IMPORTED_MODULE_0_prop_types__["string"],
  'expiration-days': __WEBPACK_IMPORTED_MODULE_0_prop_types__["number"],
  // Video management parameters
  'audio': __WEBPACK_IMPORTED_MODULE_0_prop_types__["string"],
  '_key': __WEBPACK_IMPORTED_MODULE_0_prop_types__["string"],
  "rtmpstreamtype": __WEBPACK_IMPORTED_MODULE_0_prop_types__["string"],
  "rtmpmicrophonecodec": __WEBPACK_IMPORTED_MODULE_0_prop_types__["string"],
  'timelimit': __WEBPACK_IMPORTED_MODULE_0_prop_types__["number"],
  'timeminlimit': __WEBPACK_IMPORTED_MODULE_0_prop_types__["number"],
  'audio-profile': __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_prop_types__["oneOfType"])([__WEBPACK_IMPORTED_MODULE_0_prop_types__["string"], __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_prop_types__["arrayOf"])(__WEBPACK_IMPORTED_MODULE_0_prop_types__["string"])]),
  'effect-profile': __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_prop_types__["oneOfType"])([__WEBPACK_IMPORTED_MODULE_0_prop_types__["string"], __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_prop_types__["arrayOf"])(__WEBPACK_IMPORTED_MODULE_0_prop_types__["string"])]),
  'meta-profile': __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_prop_types__["oneOfType"])([__WEBPACK_IMPORTED_MODULE_0_prop_types__["string"], __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_prop_types__["arrayOf"])(__WEBPACK_IMPORTED_MODULE_0_prop_types__["string"])]),
  'enforce-duration': __WEBPACK_IMPORTED_MODULE_0_prop_types__["bool"],
  'source': __WEBPACK_IMPORTED_MODULE_0_prop_types__["string"],
  'audiobitrate': __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_prop_types__["oneOfType"])([__WEBPACK_IMPORTED_MODULE_0_prop_types__["number"], __WEBPACK_IMPORTED_MODULE_0_prop_types__["string"]]),
  'microphone-volume': __WEBPACK_IMPORTED_MODULE_0_prop_types__["number"],
  'pausable': __WEBPACK_IMPORTED_MODULE_0_prop_types__["bool"],
  // Data parameters
  'tags': __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_prop_types__["arrayOf"])(__WEBPACK_IMPORTED_MODULE_0_prop_types__["string"]),
  'custom-data': __WEBPACK_IMPORTED_MODULE_0_prop_types__["object"],
  'title': __WEBPACK_IMPORTED_MODULE_0_prop_types__["string"],
  'description': __WEBPACK_IMPORTED_MODULE_0_prop_types__["string"],
  // Operational parameters
  'manual_upload': __WEBPACK_IMPORTED_MODULE_0_prop_types__["bool"],
  'rerecordable': __WEBPACK_IMPORTED_MODULE_0_prop_types__["bool"],
  'allowupload': __WEBPACK_IMPORTED_MODULE_0_prop_types__["bool"],
  'allowrecord': __WEBPACK_IMPORTED_MODULE_0_prop_types__["bool"],
  'display-timer': __WEBPACK_IMPORTED_MODULE_0_prop_types__["bool"],
  'force-overwrite': __WEBPACK_IMPORTED_MODULE_0_prop_types__["bool"],
  'autoplay': __WEBPACK_IMPORTED_MODULE_0_prop_types__["bool"],
  'recordings': __WEBPACK_IMPORTED_MODULE_0_prop_types__["number"],
  'allowedextensions': __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_prop_types__["arrayOf"])(__WEBPACK_IMPORTED_MODULE_0_prop_types__["string"]),
  'application': __WEBPACK_IMPORTED_MODULE_0_prop_types__["string"],
  //	oneOfType([object, string]),
  'filesizelimit': __WEBPACK_IMPORTED_MODULE_0_prop_types__["number"],
  'simulate': __WEBPACK_IMPORTED_MODULE_0_prop_types__["bool"],
  'allowcustomupload': __WEBPACK_IMPORTED_MODULE_0_prop_types__["bool"],
  'manual-upload': __WEBPACK_IMPORTED_MODULE_0_prop_types__["bool"],
  'skipseconds': __WEBPACK_IMPORTED_MODULE_0_prop_types__["number"],
  'showsettingsmenu': __WEBPACK_IMPORTED_MODULE_0_prop_types__["bool"],
  // As a property show/hide from users
  'hidevolumebar': __WEBPACK_IMPORTED_MODULE_0_prop_types__["bool"],
  'recordermode': __WEBPACK_IMPORTED_MODULE_0_prop_types__["bool"],
  'manualsubmit': __WEBPACK_IMPORTED_MODULE_0_prop_types__["bool"],
  'initialseek': __WEBPACK_IMPORTED_MODULE_0_prop_types__["number"],
  'playwhenvisible': __WEBPACK_IMPORTED_MODULE_0_prop_types__["bool"],
  'playonclick': __WEBPACK_IMPORTED_MODULE_0_prop_types__["bool"],
  'disableseeking': __WEBPACK_IMPORTED_MODULE_0_prop_types__["bool"],
  'disablepause': __WEBPACK_IMPORTED_MODULE_0_prop_types__["bool"],
  'pauseonplay': __WEBPACK_IMPORTED_MODULE_0_prop_types__["bool"],
  'airplay': __WEBPACK_IMPORTED_MODULE_0_prop_types__["bool"],
  'chromecast': __WEBPACK_IMPORTED_MODULE_0_prop_types__["bool"],
  'preload': __WEBPACK_IMPORTED_MODULE_0_prop_types__["bool"],
  'delete-old-streams': __WEBPACK_IMPORTED_MODULE_0_prop_types__["bool"],
  'lazy-application': __WEBPACK_IMPORTED_MODULE_0_prop_types__["bool"],
  'allowcancel': __WEBPACK_IMPORTED_MODULE_0_prop_types__["bool"],
  'popup': __WEBPACK_IMPORTED_MODULE_0_prop_types__["bool"],
  // Form and HTML parameters
  'input-bind': __WEBPACK_IMPORTED_MODULE_0_prop_types__["string"],
  'form-accept': __WEBPACK_IMPORTED_MODULE_0_prop_types__["string"]
};
var ziggeoAudioPlayerAttributesPropTypes = {
  // Presentational parameters
  'width': __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_prop_types__["oneOfType"])([__WEBPACK_IMPORTED_MODULE_0_prop_types__["number"], __WEBPACK_IMPORTED_MODULE_0_prop_types__["string"]]),
  'height': __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_prop_types__["oneOfType"])([__WEBPACK_IMPORTED_MODULE_0_prop_types__["number"], __WEBPACK_IMPORTED_MODULE_0_prop_types__["string"]]),
  'skipinitial': __WEBPACK_IMPORTED_MODULE_0_prop_types__["bool"],
  'countdown': __WEBPACK_IMPORTED_MODULE_0_prop_types__["number"],
  'localplayback': __WEBPACK_IMPORTED_MODULE_0_prop_types__["bool"],
  'theme': __WEBPACK_IMPORTED_MODULE_0_prop_types__["string"],
  'themecolor': __WEBPACK_IMPORTED_MODULE_0_prop_types__["string"],
  'loop': __WEBPACK_IMPORTED_MODULE_0_prop_types__["bool"],
  'loopall': __WEBPACK_IMPORTED_MODULE_0_prop_types__["bool"],
  'volume': __WEBPACK_IMPORTED_MODULE_0_prop_types__["number"],
  'showduration': __WEBPACK_IMPORTED_MODULE_0_prop_types__["bool"],
  'uploadlocales': __WEBPACK_IMPORTED_MODULE_0_prop_types__["array"],
  'allowtexttrackupload': __WEBPACK_IMPORTED_MODULE_0_prop_types__["bool"],
  'audio-transcription-as-subtitles': __WEBPACK_IMPORTED_MODULE_0_prop_types__["bool"],
  'playlist': __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_prop_types__["oneOfType"])([__WEBPACK_IMPORTED_MODULE_0_prop_types__["array"], __WEBPACK_IMPORTED_MODULE_0_prop_types__["string"]]),
  'popup': __WEBPACK_IMPORTED_MODULE_0_prop_types__["bool"],
  'popup-width': __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_prop_types__["oneOfType"])([__WEBPACK_IMPORTED_MODULE_0_prop_types__["number"], __WEBPACK_IMPORTED_MODULE_0_prop_types__["string"]]),
  'popup-height': __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_prop_types__["oneOfType"])([__WEBPACK_IMPORTED_MODULE_0_prop_types__["number"], __WEBPACK_IMPORTED_MODULE_0_prop_types__["string"]]),
  // Security parameters
  'server-auth': __WEBPACK_IMPORTED_MODULE_0_prop_types__["string"],
  'client-auth': __WEBPACK_IMPORTED_MODULE_0_prop_types__["string"],
  'hideoninactivity': __WEBPACK_IMPORTED_MODULE_0_prop_types__["bool"],
  'hidebarafter': __WEBPACK_IMPORTED_MODULE_0_prop_types__["number"],
  // in milliseconds
  'preventinteraction': __WEBPACK_IMPORTED_MODULE_0_prop_types__["bool"],
  // Audio management parameters
  'audio': __WEBPACK_IMPORTED_MODULE_0_prop_types__["string"].isRequired,
  '_key': __WEBPACK_IMPORTED_MODULE_0_prop_types__["string"],
  'effect-profile': __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_prop_types__["oneOfType"])([__WEBPACK_IMPORTED_MODULE_0_prop_types__["string"], __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_prop_types__["arrayOf"])(__WEBPACK_IMPORTED_MODULE_0_prop_types__["string"])]),
  'source': __WEBPACK_IMPORTED_MODULE_0_prop_types__["string"],
  'audiobitrate': __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_prop_types__["oneOfType"])([__WEBPACK_IMPORTED_MODULE_0_prop_types__["number"], __WEBPACK_IMPORTED_MODULE_0_prop_types__["string"]]),
  // Data parameters
  'tags': __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_prop_types__["arrayOf"])(__WEBPACK_IMPORTED_MODULE_0_prop_types__["string"]),
  'custom-data': __WEBPACK_IMPORTED_MODULE_0_prop_types__["object"],
  'title': __WEBPACK_IMPORTED_MODULE_0_prop_types__["string"],
  'description': __WEBPACK_IMPORTED_MODULE_0_prop_types__["string"],
  // Operational parameters
  'autoplay': __WEBPACK_IMPORTED_MODULE_0_prop_types__["bool"],
  'application': __WEBPACK_IMPORTED_MODULE_0_prop_types__["string"],
  // oneOfType([object, string]),
  'flashincognitosupport': __WEBPACK_IMPORTED_MODULE_0_prop_types__["bool"],
  'forceflash': __WEBPACK_IMPORTED_MODULE_0_prop_types__["bool"],
  'noflash': __WEBPACK_IMPORTED_MODULE_0_prop_types__["bool"],
  'initialseek': __WEBPACK_IMPORTED_MODULE_0_prop_types__["number"],
  'playwhenvisible': __WEBPACK_IMPORTED_MODULE_0_prop_types__["bool"],
  'playonclick': __WEBPACK_IMPORTED_MODULE_0_prop_types__["bool"],
  'disableseeking': __WEBPACK_IMPORTED_MODULE_0_prop_types__["bool"],
  'disablepause': __WEBPACK_IMPORTED_MODULE_0_prop_types__["bool"],
  'pauseonplay': __WEBPACK_IMPORTED_MODULE_0_prop_types__["bool"],
  'airplay': __WEBPACK_IMPORTED_MODULE_0_prop_types__["bool"],
  'chromecast': __WEBPACK_IMPORTED_MODULE_0_prop_types__["bool"],
  'preload': __WEBPACK_IMPORTED_MODULE_0_prop_types__["bool"],
  'lazy-application': __WEBPACK_IMPORTED_MODULE_0_prop_types__["bool"],
  'preroll': __WEBPACK_IMPORTED_MODULE_0_prop_types__["bool"],
  'vast': __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_prop_types__["arrayOf"])(__WEBPACK_IMPORTED_MODULE_0_prop_types__["object"]),
  // Form and HTML parameters
  'input-bind': __WEBPACK_IMPORTED_MODULE_0_prop_types__["string"],
  'form-accept': __WEBPACK_IMPORTED_MODULE_0_prop_types__["string"]
}; // #######################  DEFAULTS  ##################################
// #######################  EMBEDDING EVENTS #############################
// Javascript Embed Recorder Events
// https://ziggeo.com/docs/sdks/javascript/browser-interaction/application-embedding-events#javascript-revision=v1-r29
// application.embed_event.on..

var ziggeoRecorderEmbeddingEventsPropTypes = {
  onPlaying: __WEBPACK_IMPORTED_MODULE_0_prop_types__["func"],
  onPaused: __WEBPACK_IMPORTED_MODULE_0_prop_types__["func"],
  onEnded: __WEBPACK_IMPORTED_MODULE_0_prop_types__["func"],
  onSeek: __WEBPACK_IMPORTED_MODULE_0_prop_types__["func"],
  onManuallySubmitted: __WEBPACK_IMPORTED_MODULE_0_prop_types__["func"],
  onRecordingProgress: __WEBPACK_IMPORTED_MODULE_0_prop_types__["func"],
  onUploaded: __WEBPACK_IMPORTED_MODULE_0_prop_types__["func"],
  onUploadSelected: __WEBPACK_IMPORTED_MODULE_0_prop_types__["func"],
  onUploading: __WEBPACK_IMPORTED_MODULE_0_prop_types__["func"],
  onRerecord: __WEBPACK_IMPORTED_MODULE_0_prop_types__["func"],
  onCountdown: __WEBPACK_IMPORTED_MODULE_0_prop_types__["func"],
  onProgress: __WEBPACK_IMPORTED_MODULE_0_prop_types__["func"],
  onUploadProgress: __WEBPACK_IMPORTED_MODULE_0_prop_types__["func"],
  onProcessing: __WEBPACK_IMPORTED_MODULE_0_prop_types__["func"],
  onProcessed: __WEBPACK_IMPORTED_MODULE_0_prop_types__["func"],
  onAccessForbidden: __WEBPACK_IMPORTED_MODULE_0_prop_types__["func"],
  onAccessGranted: __WEBPACK_IMPORTED_MODULE_0_prop_types__["func"],
  onCameraUnresponsive: __WEBPACK_IMPORTED_MODULE_0_prop_types__["func"],
  onVerified: __WEBPACK_IMPORTED_MODULE_0_prop_types__["func"],
  onNoCamera: __WEBPACK_IMPORTED_MODULE_0_prop_types__["func"],
  onNoMicrophone: __WEBPACK_IMPORTED_MODULE_0_prop_types__["func"],
  onMicrophonehealth: __WEBPACK_IMPORTED_MODULE_0_prop_types__["func"],
  onCamerahealth: __WEBPACK_IMPORTED_MODULE_0_prop_types__["func"],
  onCameraSignal: __WEBPACK_IMPORTED_MODULE_0_prop_types__["func"],
  onBound: __WEBPACK_IMPORTED_MODULE_0_prop_types__["func"],
  onHasCamera: __WEBPACK_IMPORTED_MODULE_0_prop_types__["func"],
  onHasMicrophone: __WEBPACK_IMPORTED_MODULE_0_prop_types__["func"],
  onRecordingStopped: __WEBPACK_IMPORTED_MODULE_0_prop_types__["func"],
  onStopped: __WEBPACK_IMPORTED_MODULE_0_prop_types__["func"],
  onReadyToRecord: __WEBPACK_IMPORTED_MODULE_0_prop_types__["func"],
  onRef: __WEBPACK_IMPORTED_MODULE_0_prop_types__["func"]
};
var ziggeoPlayerEmbeddingEventsPropTypes = {
  onPlaying: __WEBPACK_IMPORTED_MODULE_0_prop_types__["func"],
  onPaused: __WEBPACK_IMPORTED_MODULE_0_prop_types__["func"],
  onEnded: __WEBPACK_IMPORTED_MODULE_0_prop_types__["func"],
  onSeek: __WEBPACK_IMPORTED_MODULE_0_prop_types__["func"],
  onReadyToPlay: __WEBPACK_IMPORTED_MODULE_0_prop_types__["func"],
  onRef: __WEBPACK_IMPORTED_MODULE_0_prop_types__["func"]
};
var ziggeoCommonEmbeddingEventsPropTypes = {
  onAttached: __WEBPACK_IMPORTED_MODULE_0_prop_types__["func"],
  onRecording: __WEBPACK_IMPORTED_MODULE_0_prop_types__["func"],
  onLoaded: __WEBPACK_IMPORTED_MODULE_0_prop_types__["func"],
  onError: __WEBPACK_IMPORTED_MODULE_0_prop_types__["func"]
}; // #######################  ZIGGEO METHODS  ##############################
// Methods
// https://ziggeo.com/docs/sdks/javascript/browser-interaction/methods#javascript-revision=v1-r29&javascript-version=v2

var ziggeoMethods = {
  play: __WEBPACK_IMPORTED_MODULE_0_prop_types__["func"],
  record: __WEBPACK_IMPORTED_MODULE_0_prop_types__["func"],
  upload: __WEBPACK_IMPORTED_MODULE_0_prop_types__["func"],
  rerecord: __WEBPACK_IMPORTED_MODULE_0_prop_types__["func"],
  stop: __WEBPACK_IMPORTED_MODULE_0_prop_types__["func"],
  stopRecord: __WEBPACK_IMPORTED_MODULE_0_prop_types__["func"],
  hidePopup: __WEBPACK_IMPORTED_MODULE_0_prop_types__["func"],
  reset: __WEBPACK_IMPORTED_MODULE_0_prop_types__["func"],
  lightLevel: __WEBPACK_IMPORTED_MODULE_0_prop_types__["func"],
  soundLevel: __WEBPACK_IMPORTED_MODULE_0_prop_types__["func"],
  averageFrameRate: __WEBPACK_IMPORTED_MODULE_0_prop_types__["func"],
  isRecording: __WEBPACK_IMPORTED_MODULE_0_prop_types__["func"],
  width: __WEBPACK_IMPORTED_MODULE_0_prop_types__["func"],
  height: __WEBPACK_IMPORTED_MODULE_0_prop_types__["func"],
  isFlash: __WEBPACK_IMPORTED_MODULE_0_prop_types__["func"],
  videoWidth: __WEBPACK_IMPORTED_MODULE_0_prop_types__["func"],
  videoHeight: __WEBPACK_IMPORTED_MODULE_0_prop_types__["func"],
  destroy: __WEBPACK_IMPORTED_MODULE_0_prop_types__["func"]
}; // #######################    ##############################
// Common Events
// https://ziggeo.com/docs/sdks/javascript/browser-interaction/events#javascript-revision=v1-r29&javascript-version=v2

var ziggeoApiEventsPropTypes = {
  onEventPlay: __WEBPACK_IMPORTED_MODULE_0_prop_types__["func"],
  onEventPause: __WEBPACK_IMPORTED_MODULE_0_prop_types__["func"],
  onEventStop: __WEBPACK_IMPORTED_MODULE_0_prop_types__["func"],
  onEventErrorPlayer: __WEBPACK_IMPORTED_MODULE_0_prop_types__["func"],
  onEventSubmitted: __WEBPACK_IMPORTED_MODULE_0_prop_types__["func"],
  onEventPlayerSeek: __WEBPACK_IMPORTED_MODULE_0_prop_types__["func"],
  onEventManuallySubmitted: __WEBPACK_IMPORTED_MODULE_0_prop_types__["func"],
  onEventUploaded: __WEBPACK_IMPORTED_MODULE_0_prop_types__["func"],
  onEventUploadSelected: __WEBPACK_IMPORTED_MODULE_0_prop_types__["func"],
  onEventRecording: __WEBPACK_IMPORTED_MODULE_0_prop_types__["func"],
  onEventUploading: __WEBPACK_IMPORTED_MODULE_0_prop_types__["func"],
  onEventFinished: __WEBPACK_IMPORTED_MODULE_0_prop_types__["func"],
  onEventDiscarded: __WEBPACK_IMPORTED_MODULE_0_prop_types__["func"],
  onEventErrorRecorder: __WEBPACK_IMPORTED_MODULE_0_prop_types__["func"],
  onEventCountdown: __WEBPACK_IMPORTED_MODULE_0_prop_types__["func"],
  onEventElapsed: __WEBPACK_IMPORTED_MODULE_0_prop_types__["func"],
  onEventUploadProgress: __WEBPACK_IMPORTED_MODULE_0_prop_types__["func"],
  onEventProcessingProgress: __WEBPACK_IMPORTED_MODULE_0_prop_types__["func"],
  onEventReadyToRecord: __WEBPACK_IMPORTED_MODULE_0_prop_types__["func"],
  onEventReadyToPlay: __WEBPACK_IMPORTED_MODULE_0_prop_types__["func"],
  onEventAccessForbidden: __WEBPACK_IMPORTED_MODULE_0_prop_types__["func"],
  onEventAccessGranted: __WEBPACK_IMPORTED_MODULE_0_prop_types__["func"],
  onEventAccessRevoked: __WEBPACK_IMPORTED_MODULE_0_prop_types__["func"],
  onEventRecorderProcessed: __WEBPACK_IMPORTED_MODULE_0_prop_types__["func"]
}; // #######################  React Common Options  ##############################

var reactCustomOptions = {
  preventReRenderOnUpdate: __WEBPACK_IMPORTED_MODULE_0_prop_types__["bool"],
  updateInstance: __WEBPACK_IMPORTED_MODULE_0_prop_types__["any"]
}; // ####################### Application Events #############################
// application.embed_event.on..

var ziggeoApplicationEvents = {
  onError: __WEBPACK_IMPORTED_MODULE_0_prop_types__["func"],
  onReady: __WEBPACK_IMPORTED_MODULE_0_prop_types__["func"]
};
var ziggeoRecorderApplicationOptions = {
  // application options
  webrtc_streaming: __WEBPACK_IMPORTED_MODULE_0_prop_types__["bool"],
  webrtc_streaming_if_necessary: __WEBPACK_IMPORTED_MODULE_0_prop_types__["bool"],
  webrtc_on_mobile: __WEBPACK_IMPORTED_MODULE_0_prop_types__["bool"],
  auth: __WEBPACK_IMPORTED_MODULE_0_prop_types__["bool"],
  debug: __WEBPACK_IMPORTED_MODULE_0_prop_types__["bool"],
  testing_application: __WEBPACK_IMPORTED_MODULE_0_prop_types__["bool"],
  // screenoptions
  chrome_extension_id: __WEBPACK_IMPORTED_MODULE_0_prop_types__["string"],
  chrome_extension_install_link: __WEBPACK_IMPORTED_MODULE_0_prop_types__["string"],
  opera_extension_id: __WEBPACK_IMPORTED_MODULE_0_prop_types__["string"],
  opera_extension_install_link: __WEBPACK_IMPORTED_MODULE_0_prop_types__["string"]
};
var ziggeoPlayerApplicationOptions = {
  // application options
  debug: __WEBPACK_IMPORTED_MODULE_0_prop_types__["bool"],
  testing_application: __WEBPACK_IMPORTED_MODULE_0_prop_types__["bool"],
  auth: __WEBPACK_IMPORTED_MODULE_0_prop_types__["bool"]
};
var screenRecorderOptions = {};

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(23);
var TAG = __webpack_require__(5)('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(23);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),
/* 47 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject = __webpack_require__(1);
var aFunction = __webpack_require__(17);
var SPECIES = __webpack_require__(5)('species');
module.exports = function (O, D) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};


/***/ }),
/* 49 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 50 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_50__;

/***/ }),
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





var withZiggeoApplication = function withZiggeoApplication(WrappedComponent) {
  return function (_ref) {
    var apiKey = _ref.apiKey,
        flashUrl = _ref.flashUrl,
        locale = _ref.locale,
        mediaLocales = _ref.mediaLocales,
        restProps = _objectWithoutProperties(_ref, ["apiKey", "flashUrl", "locale", "mediaLocales"]);

    var _useState = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react__["useState"])(null),
        _useState2 = _slicedToArray(_useState, 2),
        app = _useState2[0],
        setApp = _useState2[1];

    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react__["useEffect"])(function () {
      try {
        if (!app) initApplication();
      } catch (e) {
        console.error(e);
      }

      return function () {// NOTE: DON'T DESTROY APPLICATION ITSELF
        // Will receive error 'Cannot read property 'urls' of undefined'
        // if (app) app.destroy();
      };
    }, [app]);

    var initApplication = function initApplication() {
      // Set locale
      if (typeof locale !== "undefined") ZiggeoApi.V2.Locale.setLocale(locale);

      if (mediaLocales) {
        if (Array.isArray(mediaLocales)) mediaLocales.map(function (config) {
          var register = config.register,
              languages = config.languages,
              priority = config.priority;

          if (register) {
            if (Array.isArray(languages)) {
              var language_args = [];
              languages.map(function (l, i) {
                language_args.push("language:".concat(l));

                if (i === languages.length - 1) {
                  return ZiggeoApi.V2.Locale.mediaLocale.register(register, language_args, priority || 10);
                }
              });
            } else {
              return ZiggeoApi.V2.Locale.mediaLocale.register(register, priority || 10);
            }
          }
        });else console.warn('mediaLocales has to be an Array, please read documentation for more details.');
      } // Set external flash player


      if (typeof flashUrl !== "undefined") ZiggeoApi.V2.Config.set("flash", flashUrl);
      setApp(ZiggeoApi.V2.Application.instanceByToken(apiKey, applicationOptions()));
    };

    var applicationOptions = function applicationOptions() {
      return Object.keys(restProps).filter(function (k) {
        return __WEBPACK_IMPORTED_MODULE_1__constants__["e" /* ziggeoRecorderApplicationOptions */][k];
      }).reduce(function (attr, k) {
        attr[k] = restProps[k];
        return attr;
      }, {});
    };

    return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(WrappedComponent, _extends({}, restProps, {
      app: app
    }));
  };
};

withZiggeoApplication.prototype = {
  apiKey: __WEBPACK_IMPORTED_MODULE_2_prop_types__["string"].isRequired
};
/* harmony default export */ __webpack_exports__["a"] = (withZiggeoApplication);

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(15);
var toLength = __webpack_require__(6);
var toAbsoluteIndex = __webpack_require__(35);
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(3);
var $export = __webpack_require__(0);
var redefine = __webpack_require__(11);
var redefineAll = __webpack_require__(40);
var meta = __webpack_require__(26);
var forOf = __webpack_require__(56);
var anInstance = __webpack_require__(38);
var isObject = __webpack_require__(4);
var fails = __webpack_require__(2);
var $iterDetect = __webpack_require__(58);
var setToStringTag = __webpack_require__(42);
var inheritIfRequired = __webpack_require__(74);

module.exports = function (NAME, wrapper, methods, common, IS_MAP, IS_WEAK) {
  var Base = global[NAME];
  var C = Base;
  var ADDER = IS_MAP ? 'set' : 'add';
  var proto = C && C.prototype;
  var O = {};
  var fixMethod = function (KEY) {
    var fn = proto[KEY];
    redefine(proto, KEY,
      KEY == 'delete' ? function (a) {
        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
      } : KEY == 'has' ? function has(a) {
        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
      } : KEY == 'get' ? function get(a) {
        return IS_WEAK && !isObject(a) ? undefined : fn.call(this, a === 0 ? 0 : a);
      } : KEY == 'add' ? function add(a) { fn.call(this, a === 0 ? 0 : a); return this; }
        : function set(a, b) { fn.call(this, a === 0 ? 0 : a, b); return this; }
    );
  };
  if (typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function () {
    new C().entries().next();
  }))) {
    // create collection constructor
    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
    redefineAll(C.prototype, methods);
    meta.NEED = true;
  } else {
    var instance = new C();
    // early implementations not supports chaining
    var HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance;
    // V8 ~  Chromium 40- weak-collections throws on primitives, but should return false
    var THROWS_ON_PRIMITIVES = fails(function () { instance.has(1); });
    // most early implementations doesn't supports iterables, most modern - not close it correctly
    var ACCEPT_ITERABLES = $iterDetect(function (iter) { new C(iter); }); // eslint-disable-line no-new
    // for early implementations -0 and +0 not the same
    var BUGGY_ZERO = !IS_WEAK && fails(function () {
      // V8 ~ Chromium 42- fails only with 5+ elements
      var $instance = new C();
      var index = 5;
      while (index--) $instance[ADDER](index, index);
      return !$instance.has(-0);
    });
    if (!ACCEPT_ITERABLES) {
      C = wrapper(function (target, iterable) {
        anInstance(target, C, NAME);
        var that = inheritIfRequired(new Base(), target, C);
        if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
        return that;
      });
      C.prototype = proto;
      proto.constructor = C;
    }
    if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {
      fixMethod('delete');
      fixMethod('has');
      IS_MAP && fixMethod('get');
    }
    if (BUGGY_ZERO || HASNT_CHAINING) fixMethod(ADDER);
    // weak collections should not contains .clear method
    if (IS_WEAK && proto.clear) delete proto.clear;
  }

  setToStringTag(C, NAME);

  O[NAME] = C;
  $export($export.G + $export.W + $export.F * (C != Base), O);

  if (!IS_WEAK) common.setStrong(C, NAME, IS_MAP);

  return C;
};


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

__webpack_require__(124);
var redefine = __webpack_require__(11);
var hide = __webpack_require__(14);
var fails = __webpack_require__(2);
var defined = __webpack_require__(24);
var wks = __webpack_require__(5);
var regexpExec = __webpack_require__(80);

var SPECIES = wks('species');

var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
  // #replace needs built-in support for named groups.
  // #match works fine because it just return the exec results, even if it has
  // a "grops" property.
  var re = /./;
  re.exec = function () {
    var result = [];
    result.groups = { a: '7' };
    return result;
  };
  return ''.replace(re, '$<a>') !== '7';
});

var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = (function () {
  // Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
  var re = /(?:)/;
  var originalExec = re.exec;
  re.exec = function () { return originalExec.apply(this, arguments); };
  var result = 'ab'.split(re);
  return result.length === 2 && result[0] === 'a' && result[1] === 'b';
})();

module.exports = function (KEY, length, exec) {
  var SYMBOL = wks(KEY);

  var DELEGATES_TO_SYMBOL = !fails(function () {
    // String methods call symbol-named RegEp methods
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
  });

  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL ? !fails(function () {
    // Symbol-named RegExp methods call .exec
    var execCalled = false;
    var re = /a/;
    re.exec = function () { execCalled = true; return null; };
    if (KEY === 'split') {
      // RegExp[@@split] doesn't call the regex's exec method, but first creates
      // a new one. We need to return the patched regex when creating the new one.
      re.constructor = {};
      re.constructor[SPECIES] = function () { return re; };
    }
    re[SYMBOL]('');
    return !execCalled;
  }) : undefined;

  if (
    !DELEGATES_TO_SYMBOL ||
    !DELEGATES_TO_EXEC ||
    (KEY === 'replace' && !REPLACE_SUPPORTS_NAMED_GROUPS) ||
    (KEY === 'split' && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC)
  ) {
    var nativeRegExpMethod = /./[SYMBOL];
    var fns = exec(
      defined,
      SYMBOL,
      ''[KEY],
      function maybeCallNative(nativeMethod, regexp, str, arg2, forceStringMethod) {
        if (regexp.exec === regexpExec) {
          if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
            // The native String method already delegates to @@method (this
            // polyfilled function), leasing to infinite recursion.
            // We avoid it by directly calling the native @@method method.
            return { done: true, value: nativeRegExpMethod.call(regexp, str, arg2) };
          }
          return { done: true, value: nativeMethod.call(str, regexp, arg2) };
        }
        return { done: false };
      }
    );
    var strfn = fns[0];
    var rxfn = fns[1];

    redefine(String.prototype, KEY, strfn);
    hide(RegExp.prototype, SYMBOL, length == 2
      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
      ? function (string, arg) { return rxfn.call(string, this, arg); }
      // 21.2.5.6 RegExp.prototype[@@match](string)
      // 21.2.5.9 RegExp.prototype[@@search](string)
      : function (string) { return rxfn.call(string, this); }
    );
  }
};


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 21.2.5.3 get RegExp.prototype.flags
var anObject = __webpack_require__(1);
module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(19);
var call = __webpack_require__(105);
var isArrayIter = __webpack_require__(75);
var anObject = __webpack_require__(1);
var toLength = __webpack_require__(6);
var getIterFn = __webpack_require__(90);
var BREAK = {};
var RETURN = {};
var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
  var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);
  var f = ctx(fn, that, entries ? 2 : 1);
  var index = 0;
  var length, step, iterator, result;
  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if (result === BREAK || result === RETURN) return result;
  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
    result = call(iterator, f, step.value, entries);
    if (result === BREAK || result === RETURN) return result;
  }
};
exports.BREAK = BREAK;
exports.RETURN = RETURN;


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(23);
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__(5)('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


/***/ }),
/* 59 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var classof = __webpack_require__(45);
var builtinExec = RegExp.prototype.exec;

 // `RegExpExec` abstract operation
// https://tc39.github.io/ecma262/#sec-regexpexec
module.exports = function (R, S) {
  var exec = R.exec;
  if (typeof exec === 'function') {
    var result = exec.call(R, S);
    if (typeof result !== 'object') {
      throw new TypeError('RegExp exec method returned something other than an Object or null');
    }
    return result;
  }
  if (classof(R) !== 'RegExp') {
    throw new TypeError('RegExp#exec called on incompatible receiver');
  }
  return builtinExec.call(R, S);
};


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(7);
var global = __webpack_require__(3);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(29) ? 'pure' : 'global',
  copyright: '© 2020 Denis Pushkarev (zloirock.ru)'
});


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(3);
var hide = __webpack_require__(14);
var uid = __webpack_require__(36);
var TYPED = uid('typed_array');
var VIEW = uid('view');
var ABV = !!(global.ArrayBuffer && global.DataView);
var CONSTR = ABV;
var i = 0;
var l = 9;
var Typed;

var TypedArrayConstructors = (
  'Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array'
).split(',');

while (i < l) {
  if (Typed = global[TypedArrayConstructors[i++]]) {
    hide(Typed.prototype, TYPED, true);
    hide(Typed.prototype, VIEW, true);
  } else CONSTR = false;
}

module.exports = {
  ABV: ABV,
  CONSTR: CONSTR,
  TYPED: TYPED,
  VIEW: VIEW
};


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(3);
var navigator = global.navigator;

module.exports = navigator && navigator.userAgent || '';


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(94)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 65 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 66 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var at = __webpack_require__(83)(true);

 // `AdvanceStringIndex` abstract operation
// https://tc39.github.io/ecma262/#sec-advancestringindex
module.exports = function (S, index, unicode) {
  return index + (unicode ? at(S, index).length : 1);
};


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)

var toObject = __webpack_require__(10);
var toAbsoluteIndex = __webpack_require__(35);
var toLength = __webpack_require__(6);
module.exports = function fill(value /* , start = 0, end = @length */) {
  var O = toObject(this);
  var length = toLength(O.length);
  var aLen = arguments.length;
  var index = toAbsoluteIndex(aLen > 1 ? arguments[1] : undefined, length);
  var end = aLen > 2 ? arguments[2] : undefined;
  var endPos = end === undefined ? length : toAbsoluteIndex(end, length);
  while (endPos > index) O[index++] = value;
  return O;
};


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $defineProperty = __webpack_require__(9);
var createDesc = __webpack_require__(34);

module.exports = function (object, index, value) {
  if (index in object) $defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(4);
var document = __webpack_require__(3).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 71 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

var MATCH = __webpack_require__(5)('match');
module.exports = function (KEY) {
  var re = /./;
  try {
    '/./'[KEY](re);
  } catch (e) {
    try {
      re[MATCH] = false;
      return !'/./'[KEY](re);
    } catch (f) { /* empty */ }
  } return true;
};


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(3).document;
module.exports = document && document.documentElement;


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(4);
var setPrototypeOf = __webpack_require__(81).set;
module.exports = function (that, target, C) {
  var S = target.constructor;
  var P;
  if (S !== C && typeof S == 'function' && (P = S.prototype) !== C.prototype && isObject(P) && setPrototypeOf) {
    setPrototypeOf(that, P);
  } return that;
};


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__(39);
var ITERATOR = __webpack_require__(5)('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.8 IsRegExp(argument)
var isObject = __webpack_require__(4);
var cof = __webpack_require__(23);
var MATCH = __webpack_require__(5)('match');
module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof(it) == 'RegExp');
};


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(29);
var $export = __webpack_require__(0);
var redefine = __webpack_require__(11);
var hide = __webpack_require__(14);
var Iterators = __webpack_require__(39);
var $iterCreate = __webpack_require__(106);
var setToStringTag = __webpack_require__(42);
var getPrototypeOf = __webpack_require__(32);
var ITERATOR = __webpack_require__(5)('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),
/* 78 */
/***/ (function(module, exports) {

// 20.2.2.14 Math.expm1(x)
var $expm1 = Math.expm1;
module.exports = (!$expm1
  // Old FF bug
  || $expm1(10) > 22025.465794806719 || $expm1(10) < 22025.4657948067165168
  // Tor Browser bug
  || $expm1(-2e-17) != -2e-17
) ? function expm1(x) {
  return (x = +x) == 0 ? x : x > -1e-6 && x < 1e-6 ? x + x * x / 2 : Math.exp(x) - 1;
} : $expm1;


/***/ }),
/* 79 */
/***/ (function(module, exports) {

// 20.2.2.28 Math.sign(x)
module.exports = Math.sign || function sign(x) {
  // eslint-disable-next-line no-self-compare
  return (x = +x) == 0 || x != x ? x : x < 0 ? -1 : 1;
};


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var regexpFlags = __webpack_require__(55);

var nativeExec = RegExp.prototype.exec;
// This always refers to the native implementation, because the
// String#replace polyfill uses ./fix-regexp-well-known-symbol-logic.js,
// which loads this file before patching the method.
var nativeReplace = String.prototype.replace;

var patchedExec = nativeExec;

var LAST_INDEX = 'lastIndex';

var UPDATES_LAST_INDEX_WRONG = (function () {
  var re1 = /a/,
      re2 = /b*/g;
  nativeExec.call(re1, 'a');
  nativeExec.call(re2, 'a');
  return re1[LAST_INDEX] !== 0 || re2[LAST_INDEX] !== 0;
})();

// nonparticipating capturing group, copied from es5-shim's String#split patch.
var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED;

if (PATCH) {
  patchedExec = function exec(str) {
    var re = this;
    var lastIndex, reCopy, match, i;

    if (NPCG_INCLUDED) {
      reCopy = new RegExp('^' + re.source + '$(?!\\s)', regexpFlags.call(re));
    }
    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re[LAST_INDEX];

    match = nativeExec.call(re, str);

    if (UPDATES_LAST_INDEX_WRONG && match) {
      re[LAST_INDEX] = re.global ? match.index + match[0].length : lastIndex;
    }
    if (NPCG_INCLUDED && match && match.length > 1) {
      // Fix browsers whose `exec` methods don't consistently return `undefined`
      // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
      // eslint-disable-next-line no-loop-func
      nativeReplace.call(match[0], reCopy, function () {
        for (i = 1; i < arguments.length - 2; i++) {
          if (arguments[i] === undefined) match[i] = undefined;
        }
      });
    }

    return match;
  };
}

module.exports = patchedExec;


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__(4);
var anObject = __webpack_require__(1);
var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = __webpack_require__(19)(Function.call, __webpack_require__(20).f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) { buggy = true; }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(61)('keys');
var uid = __webpack_require__(36);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(22);
var defined = __webpack_require__(24);
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

// helper for String#{startsWith, endsWith, includes}
var isRegExp = __webpack_require__(76);
var defined = __webpack_require__(24);

module.exports = function (that, searchString, NAME) {
  if (isRegExp(searchString)) throw TypeError('String#' + NAME + " doesn't accept regex!");
  return String(defined(that));
};


/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toInteger = __webpack_require__(22);
var defined = __webpack_require__(24);

module.exports = function repeat(count) {
  var str = String(defined(this));
  var res = '';
  var n = toInteger(count);
  if (n < 0 || n == Infinity) throw RangeError("Count can't be negative");
  for (;n > 0; (n >>>= 1) && (str += str)) if (n & 1) res += str;
  return res;
};


/***/ }),
/* 86 */
/***/ (function(module, exports) {

module.exports = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' +
  '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';


/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(19);
var invoke = __webpack_require__(103);
var html = __webpack_require__(73);
var cel = __webpack_require__(70);
var global = __webpack_require__(3);
var process = global.process;
var setTask = global.setImmediate;
var clearTask = global.clearImmediate;
var MessageChannel = global.MessageChannel;
var Dispatch = global.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer, channel, port;
var run = function () {
  var id = +this;
  // eslint-disable-next-line no-prototype-builtins
  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listener = function (event) {
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!setTask || !clearTask) {
  setTask = function setImmediate(fn) {
    var args = [];
    var i = 1;
    while (arguments.length > i) args.push(arguments[i++]);
    queue[++counter] = function () {
      // eslint-disable-next-line no-new-func
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (__webpack_require__(23)(process) == 'process') {
    defer = function (id) {
      process.nextTick(ctx(run, id, 1));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(ctx(run, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if (MessageChannel) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = ctx(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
    defer = function (id) {
      global.postMessage(id + '', '*');
    };
    global.addEventListener('message', listener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in cel('script')) {
    defer = function (id) {
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(ctx(run, id, 1), 0);
    };
  }
}
module.exports = {
  set: setTask,
  clear: clearTask
};


/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(3);
var DESCRIPTORS = __webpack_require__(8);
var LIBRARY = __webpack_require__(29);
var $typed = __webpack_require__(62);
var hide = __webpack_require__(14);
var redefineAll = __webpack_require__(40);
var fails = __webpack_require__(2);
var anInstance = __webpack_require__(38);
var toInteger = __webpack_require__(22);
var toLength = __webpack_require__(6);
var toIndex = __webpack_require__(121);
var gOPN = __webpack_require__(31).f;
var dP = __webpack_require__(9).f;
var arrayFill = __webpack_require__(68);
var setToStringTag = __webpack_require__(42);
var ARRAY_BUFFER = 'ArrayBuffer';
var DATA_VIEW = 'DataView';
var PROTOTYPE = 'prototype';
var WRONG_LENGTH = 'Wrong length!';
var WRONG_INDEX = 'Wrong index!';
var $ArrayBuffer = global[ARRAY_BUFFER];
var $DataView = global[DATA_VIEW];
var Math = global.Math;
var RangeError = global.RangeError;
// eslint-disable-next-line no-shadow-restricted-names
var Infinity = global.Infinity;
var BaseBuffer = $ArrayBuffer;
var abs = Math.abs;
var pow = Math.pow;
var floor = Math.floor;
var log = Math.log;
var LN2 = Math.LN2;
var BUFFER = 'buffer';
var BYTE_LENGTH = 'byteLength';
var BYTE_OFFSET = 'byteOffset';
var $BUFFER = DESCRIPTORS ? '_b' : BUFFER;
var $LENGTH = DESCRIPTORS ? '_l' : BYTE_LENGTH;
var $OFFSET = DESCRIPTORS ? '_o' : BYTE_OFFSET;

// IEEE754 conversions based on https://github.com/feross/ieee754
function packIEEE754(value, mLen, nBytes) {
  var buffer = new Array(nBytes);
  var eLen = nBytes * 8 - mLen - 1;
  var eMax = (1 << eLen) - 1;
  var eBias = eMax >> 1;
  var rt = mLen === 23 ? pow(2, -24) - pow(2, -77) : 0;
  var i = 0;
  var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
  var e, m, c;
  value = abs(value);
  // eslint-disable-next-line no-self-compare
  if (value != value || value === Infinity) {
    // eslint-disable-next-line no-self-compare
    m = value != value ? 1 : 0;
    e = eMax;
  } else {
    e = floor(log(value) / LN2);
    if (value * (c = pow(2, -e)) < 1) {
      e--;
      c *= 2;
    }
    if (e + eBias >= 1) {
      value += rt / c;
    } else {
      value += rt * pow(2, 1 - eBias);
    }
    if (value * c >= 2) {
      e++;
      c /= 2;
    }
    if (e + eBias >= eMax) {
      m = 0;
      e = eMax;
    } else if (e + eBias >= 1) {
      m = (value * c - 1) * pow(2, mLen);
      e = e + eBias;
    } else {
      m = value * pow(2, eBias - 1) * pow(2, mLen);
      e = 0;
    }
  }
  for (; mLen >= 8; buffer[i++] = m & 255, m /= 256, mLen -= 8);
  e = e << mLen | m;
  eLen += mLen;
  for (; eLen > 0; buffer[i++] = e & 255, e /= 256, eLen -= 8);
  buffer[--i] |= s * 128;
  return buffer;
}
function unpackIEEE754(buffer, mLen, nBytes) {
  var eLen = nBytes * 8 - mLen - 1;
  var eMax = (1 << eLen) - 1;
  var eBias = eMax >> 1;
  var nBits = eLen - 7;
  var i = nBytes - 1;
  var s = buffer[i--];
  var e = s & 127;
  var m;
  s >>= 7;
  for (; nBits > 0; e = e * 256 + buffer[i], i--, nBits -= 8);
  m = e & (1 << -nBits) - 1;
  e >>= -nBits;
  nBits += mLen;
  for (; nBits > 0; m = m * 256 + buffer[i], i--, nBits -= 8);
  if (e === 0) {
    e = 1 - eBias;
  } else if (e === eMax) {
    return m ? NaN : s ? -Infinity : Infinity;
  } else {
    m = m + pow(2, mLen);
    e = e - eBias;
  } return (s ? -1 : 1) * m * pow(2, e - mLen);
}

function unpackI32(bytes) {
  return bytes[3] << 24 | bytes[2] << 16 | bytes[1] << 8 | bytes[0];
}
function packI8(it) {
  return [it & 0xff];
}
function packI16(it) {
  return [it & 0xff, it >> 8 & 0xff];
}
function packI32(it) {
  return [it & 0xff, it >> 8 & 0xff, it >> 16 & 0xff, it >> 24 & 0xff];
}
function packF64(it) {
  return packIEEE754(it, 52, 8);
}
function packF32(it) {
  return packIEEE754(it, 23, 4);
}

function addGetter(C, key, internal) {
  dP(C[PROTOTYPE], key, { get: function () { return this[internal]; } });
}

function get(view, bytes, index, isLittleEndian) {
  var numIndex = +index;
  var intIndex = toIndex(numIndex);
  if (intIndex + bytes > view[$LENGTH]) throw RangeError(WRONG_INDEX);
  var store = view[$BUFFER]._b;
  var start = intIndex + view[$OFFSET];
  var pack = store.slice(start, start + bytes);
  return isLittleEndian ? pack : pack.reverse();
}
function set(view, bytes, index, conversion, value, isLittleEndian) {
  var numIndex = +index;
  var intIndex = toIndex(numIndex);
  if (intIndex + bytes > view[$LENGTH]) throw RangeError(WRONG_INDEX);
  var store = view[$BUFFER]._b;
  var start = intIndex + view[$OFFSET];
  var pack = conversion(+value);
  for (var i = 0; i < bytes; i++) store[start + i] = pack[isLittleEndian ? i : bytes - i - 1];
}

if (!$typed.ABV) {
  $ArrayBuffer = function ArrayBuffer(length) {
    anInstance(this, $ArrayBuffer, ARRAY_BUFFER);
    var byteLength = toIndex(length);
    this._b = arrayFill.call(new Array(byteLength), 0);
    this[$LENGTH] = byteLength;
  };

  $DataView = function DataView(buffer, byteOffset, byteLength) {
    anInstance(this, $DataView, DATA_VIEW);
    anInstance(buffer, $ArrayBuffer, DATA_VIEW);
    var bufferLength = buffer[$LENGTH];
    var offset = toInteger(byteOffset);
    if (offset < 0 || offset > bufferLength) throw RangeError('Wrong offset!');
    byteLength = byteLength === undefined ? bufferLength - offset : toLength(byteLength);
    if (offset + byteLength > bufferLength) throw RangeError(WRONG_LENGTH);
    this[$BUFFER] = buffer;
    this[$OFFSET] = offset;
    this[$LENGTH] = byteLength;
  };

  if (DESCRIPTORS) {
    addGetter($ArrayBuffer, BYTE_LENGTH, '_l');
    addGetter($DataView, BUFFER, '_b');
    addGetter($DataView, BYTE_LENGTH, '_l');
    addGetter($DataView, BYTE_OFFSET, '_o');
  }

  redefineAll($DataView[PROTOTYPE], {
    getInt8: function getInt8(byteOffset) {
      return get(this, 1, byteOffset)[0] << 24 >> 24;
    },
    getUint8: function getUint8(byteOffset) {
      return get(this, 1, byteOffset)[0];
    },
    getInt16: function getInt16(byteOffset /* , littleEndian */) {
      var bytes = get(this, 2, byteOffset, arguments[1]);
      return (bytes[1] << 8 | bytes[0]) << 16 >> 16;
    },
    getUint16: function getUint16(byteOffset /* , littleEndian */) {
      var bytes = get(this, 2, byteOffset, arguments[1]);
      return bytes[1] << 8 | bytes[0];
    },
    getInt32: function getInt32(byteOffset /* , littleEndian */) {
      return unpackI32(get(this, 4, byteOffset, arguments[1]));
    },
    getUint32: function getUint32(byteOffset /* , littleEndian */) {
      return unpackI32(get(this, 4, byteOffset, arguments[1])) >>> 0;
    },
    getFloat32: function getFloat32(byteOffset /* , littleEndian */) {
      return unpackIEEE754(get(this, 4, byteOffset, arguments[1]), 23, 4);
    },
    getFloat64: function getFloat64(byteOffset /* , littleEndian */) {
      return unpackIEEE754(get(this, 8, byteOffset, arguments[1]), 52, 8);
    },
    setInt8: function setInt8(byteOffset, value) {
      set(this, 1, byteOffset, packI8, value);
    },
    setUint8: function setUint8(byteOffset, value) {
      set(this, 1, byteOffset, packI8, value);
    },
    setInt16: function setInt16(byteOffset, value /* , littleEndian */) {
      set(this, 2, byteOffset, packI16, value, arguments[2]);
    },
    setUint16: function setUint16(byteOffset, value /* , littleEndian */) {
      set(this, 2, byteOffset, packI16, value, arguments[2]);
    },
    setInt32: function setInt32(byteOffset, value /* , littleEndian */) {
      set(this, 4, byteOffset, packI32, value, arguments[2]);
    },
    setUint32: function setUint32(byteOffset, value /* , littleEndian */) {
      set(this, 4, byteOffset, packI32, value, arguments[2]);
    },
    setFloat32: function setFloat32(byteOffset, value /* , littleEndian */) {
      set(this, 4, byteOffset, packF32, value, arguments[2]);
    },
    setFloat64: function setFloat64(byteOffset, value /* , littleEndian */) {
      set(this, 8, byteOffset, packF64, value, arguments[2]);
    }
  });
} else {
  if (!fails(function () {
    $ArrayBuffer(1);
  }) || !fails(function () {
    new $ArrayBuffer(-1); // eslint-disable-line no-new
  }) || fails(function () {
    new $ArrayBuffer(); // eslint-disable-line no-new
    new $ArrayBuffer(1.5); // eslint-disable-line no-new
    new $ArrayBuffer(NaN); // eslint-disable-line no-new
    return $ArrayBuffer.name != ARRAY_BUFFER;
  })) {
    $ArrayBuffer = function ArrayBuffer(length) {
      anInstance(this, $ArrayBuffer);
      return new BaseBuffer(toIndex(length));
    };
    var ArrayBufferProto = $ArrayBuffer[PROTOTYPE] = BaseBuffer[PROTOTYPE];
    for (var keys = gOPN(BaseBuffer), j = 0, key; keys.length > j;) {
      if (!((key = keys[j++]) in $ArrayBuffer)) hide($ArrayBuffer, key, BaseBuffer[key]);
    }
    if (!LIBRARY) ArrayBufferProto.constructor = $ArrayBuffer;
  }
  // iOS Safari 7.x bug
  var view = new $DataView(new $ArrayBuffer(2));
  var $setInt8 = $DataView[PROTOTYPE].setInt8;
  view.setInt8(0, 2147483648);
  view.setInt8(1, 2147483649);
  if (view.getInt8(0) || !view.getInt8(1)) redefineAll($DataView[PROTOTYPE], {
    setInt8: function setInt8(byteOffset, value) {
      $setInt8.call(this, byteOffset, value << 24 >> 24);
    },
    setUint8: function setUint8(byteOffset, value) {
      $setInt8.call(this, byteOffset, value << 24 >> 24);
    }
  }, true);
}
setToStringTag($ArrayBuffer, ARRAY_BUFFER);
setToStringTag($DataView, DATA_VIEW);
hide($DataView[PROTOTYPE], $typed.VIEW, true);
exports[ARRAY_BUFFER] = $ArrayBuffer;
exports[DATA_VIEW] = $DataView;


/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(5);


/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(45);
var ITERATOR = __webpack_require__(5)('iterator');
var Iterators = __webpack_require__(39);
module.exports = __webpack_require__(7).getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(28);
var step = __webpack_require__(107);
var Iterators = __webpack_require__(39);
var toIObject = __webpack_require__(15);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(77)(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),
/* 93 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.12' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 94 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

var cof = __webpack_require__(23);
module.exports = function (it, msg) {
  if (typeof it != 'number' && cof(it) != 'Number') throw TypeError(msg);
  return +it;
};


/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)

var toObject = __webpack_require__(10);
var toAbsoluteIndex = __webpack_require__(35);
var toLength = __webpack_require__(6);

module.exports = [].copyWithin || function copyWithin(target /* = 0 */, start /* = 0, end = @length */) {
  var O = toObject(this);
  var len = toLength(O.length);
  var to = toAbsoluteIndex(target, len);
  var from = toAbsoluteIndex(start, len);
  var end = arguments.length > 2 ? arguments[2] : undefined;
  var count = Math.min((end === undefined ? len : toAbsoluteIndex(end, len)) - from, len - to);
  var inc = 1;
  if (from < to && to < from + count) {
    inc = -1;
    from += count - 1;
    to += count - 1;
  }
  while (count-- > 0) {
    if (from in O) O[to] = O[from];
    else delete O[to];
    to += inc;
    from += inc;
  } return O;
};


/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

var aFunction = __webpack_require__(17);
var toObject = __webpack_require__(10);
var IObject = __webpack_require__(46);
var toLength = __webpack_require__(6);

module.exports = function (that, callbackfn, aLen, memo, isRight) {
  aFunction(callbackfn);
  var O = toObject(that);
  var self = IObject(O);
  var length = toLength(O.length);
  var index = isRight ? length - 1 : 0;
  var i = isRight ? -1 : 1;
  if (aLen < 2) for (;;) {
    if (index in self) {
      memo = self[index];
      index += i;
      break;
    }
    index += i;
    if (isRight ? index < 0 : length <= index) {
      throw TypeError('Reduce of empty array with no initial value');
    }
  }
  for (;isRight ? index >= 0 : length > index; index += i) if (index in self) {
    memo = callbackfn(memo, self[index], index, O);
  }
  return memo;
};


/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
var speciesConstructor = __webpack_require__(162);

module.exports = function (original, length) {
  return new (speciesConstructor(original))(length);
};


/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var aFunction = __webpack_require__(17);
var isObject = __webpack_require__(4);
var invoke = __webpack_require__(103);
var arraySlice = [].slice;
var factories = {};

var construct = function (F, len, args) {
  if (!(len in factories)) {
    for (var n = [], i = 0; i < len; i++) n[i] = 'a[' + i + ']';
    // eslint-disable-next-line no-new-func
    factories[len] = Function('F,a', 'return new F(' + n.join(',') + ')');
  } return factories[len](F, args);
};

module.exports = Function.bind || function bind(that /* , ...args */) {
  var fn = aFunction(this);
  var partArgs = arraySlice.call(arguments, 1);
  var bound = function (/* args... */) {
    var args = partArgs.concat(arraySlice.call(arguments));
    return this instanceof bound ? construct(fn, args.length, args) : invoke(fn, args, that);
  };
  if (isObject(fn.prototype)) bound.prototype = fn.prototype;
  return bound;
};


/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var dP = __webpack_require__(9).f;
var create = __webpack_require__(30);
var redefineAll = __webpack_require__(40);
var ctx = __webpack_require__(19);
var anInstance = __webpack_require__(38);
var forOf = __webpack_require__(56);
var $iterDefine = __webpack_require__(77);
var step = __webpack_require__(107);
var setSpecies = __webpack_require__(41);
var DESCRIPTORS = __webpack_require__(8);
var fastKey = __webpack_require__(26).fastKey;
var validate = __webpack_require__(37);
var SIZE = DESCRIPTORS ? '_s' : 'size';

var getEntry = function (that, key) {
  // fast case
  var index = fastKey(key);
  var entry;
  if (index !== 'F') return that._i[index];
  // frozen object case
  for (entry = that._f; entry; entry = entry.n) {
    if (entry.k == key) return entry;
  }
};

module.exports = {
  getConstructor: function (wrapper, NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      anInstance(that, C, NAME, '_i');
      that._t = NAME;         // collection type
      that._i = create(null); // index
      that._f = undefined;    // first entry
      that._l = undefined;    // last entry
      that[SIZE] = 0;         // size
      if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
    });
    redefineAll(C.prototype, {
      // 23.1.3.1 Map.prototype.clear()
      // 23.2.3.2 Set.prototype.clear()
      clear: function clear() {
        for (var that = validate(this, NAME), data = that._i, entry = that._f; entry; entry = entry.n) {
          entry.r = true;
          if (entry.p) entry.p = entry.p.n = undefined;
          delete data[entry.i];
        }
        that._f = that._l = undefined;
        that[SIZE] = 0;
      },
      // 23.1.3.3 Map.prototype.delete(key)
      // 23.2.3.4 Set.prototype.delete(value)
      'delete': function (key) {
        var that = validate(this, NAME);
        var entry = getEntry(that, key);
        if (entry) {
          var next = entry.n;
          var prev = entry.p;
          delete that._i[entry.i];
          entry.r = true;
          if (prev) prev.n = next;
          if (next) next.p = prev;
          if (that._f == entry) that._f = next;
          if (that._l == entry) that._l = prev;
          that[SIZE]--;
        } return !!entry;
      },
      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
      forEach: function forEach(callbackfn /* , that = undefined */) {
        validate(this, NAME);
        var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
        var entry;
        while (entry = entry ? entry.n : this._f) {
          f(entry.v, entry.k, this);
          // revert to the last existing entry
          while (entry && entry.r) entry = entry.p;
        }
      },
      // 23.1.3.7 Map.prototype.has(key)
      // 23.2.3.7 Set.prototype.has(value)
      has: function has(key) {
        return !!getEntry(validate(this, NAME), key);
      }
    });
    if (DESCRIPTORS) dP(C.prototype, 'size', {
      get: function () {
        return validate(this, NAME)[SIZE];
      }
    });
    return C;
  },
  def: function (that, key, value) {
    var entry = getEntry(that, key);
    var prev, index;
    // change existing entry
    if (entry) {
      entry.v = value;
    // create new entry
    } else {
      that._l = entry = {
        i: index = fastKey(key, true), // <- index
        k: key,                        // <- key
        v: value,                      // <- value
        p: prev = that._l,             // <- previous entry
        n: undefined,                  // <- next entry
        r: false                       // <- removed
      };
      if (!that._f) that._f = entry;
      if (prev) prev.n = entry;
      that[SIZE]++;
      // add to index
      if (index !== 'F') that._i[index] = entry;
    } return that;
  },
  getEntry: getEntry,
  setStrong: function (C, NAME, IS_MAP) {
    // add .keys, .values, .entries, [@@iterator]
    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
    $iterDefine(C, NAME, function (iterated, kind) {
      this._t = validate(iterated, NAME); // target
      this._k = kind;                     // kind
      this._l = undefined;                // previous
    }, function () {
      var that = this;
      var kind = that._k;
      var entry = that._l;
      // revert to the last existing entry
      while (entry && entry.r) entry = entry.p;
      // get next entry
      if (!that._t || !(that._l = entry = entry ? entry.n : that._t._f)) {
        // or finish the iteration
        that._t = undefined;
        return step(1);
      }
      // return step by kind
      if (kind == 'keys') return step(0, entry.k);
      if (kind == 'values') return step(0, entry.v);
      return step(0, [entry.k, entry.v]);
    }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);

    // add [@@species], 23.1.2.2, 23.2.2.2
    setSpecies(NAME);
  }
};


/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var redefineAll = __webpack_require__(40);
var getWeak = __webpack_require__(26).getWeak;
var anObject = __webpack_require__(1);
var isObject = __webpack_require__(4);
var anInstance = __webpack_require__(38);
var forOf = __webpack_require__(56);
var createArrayMethod = __webpack_require__(18);
var $has = __webpack_require__(13);
var validate = __webpack_require__(37);
var arrayFind = createArrayMethod(5);
var arrayFindIndex = createArrayMethod(6);
var id = 0;

// fallback for uncaught frozen keys
var uncaughtFrozenStore = function (that) {
  return that._l || (that._l = new UncaughtFrozenStore());
};
var UncaughtFrozenStore = function () {
  this.a = [];
};
var findUncaughtFrozen = function (store, key) {
  return arrayFind(store.a, function (it) {
    return it[0] === key;
  });
};
UncaughtFrozenStore.prototype = {
  get: function (key) {
    var entry = findUncaughtFrozen(this, key);
    if (entry) return entry[1];
  },
  has: function (key) {
    return !!findUncaughtFrozen(this, key);
  },
  set: function (key, value) {
    var entry = findUncaughtFrozen(this, key);
    if (entry) entry[1] = value;
    else this.a.push([key, value]);
  },
  'delete': function (key) {
    var index = arrayFindIndex(this.a, function (it) {
      return it[0] === key;
    });
    if (~index) this.a.splice(index, 1);
    return !!~index;
  }
};

module.exports = {
  getConstructor: function (wrapper, NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      anInstance(that, C, NAME, '_i');
      that._t = NAME;      // collection type
      that._i = id++;      // collection id
      that._l = undefined; // leak store for uncaught frozen objects
      if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
    });
    redefineAll(C.prototype, {
      // 23.3.3.2 WeakMap.prototype.delete(key)
      // 23.4.3.3 WeakSet.prototype.delete(value)
      'delete': function (key) {
        if (!isObject(key)) return false;
        var data = getWeak(key);
        if (data === true) return uncaughtFrozenStore(validate(this, NAME))['delete'](key);
        return data && $has(data, this._i) && delete data[this._i];
      },
      // 23.3.3.4 WeakMap.prototype.has(key)
      // 23.4.3.4 WeakSet.prototype.has(value)
      has: function has(key) {
        if (!isObject(key)) return false;
        var data = getWeak(key);
        if (data === true) return uncaughtFrozenStore(validate(this, NAME)).has(key);
        return data && $has(data, this._i);
      }
    });
    return C;
  },
  def: function (that, key, value) {
    var data = getWeak(anObject(key), true);
    if (data === true) uncaughtFrozenStore(that).set(key, value);
    else data[that._i] = value;
    return that;
  },
  ufstore: uncaughtFrozenStore
};


/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(8) && !__webpack_require__(2)(function () {
  return Object.defineProperty(__webpack_require__(70)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 103 */
/***/ (function(module, exports) {

// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function (fn, args, that) {
  var un = that === undefined;
  switch (args.length) {
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return fn.apply(that, args);
};


/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.3 Number.isInteger(number)
var isObject = __webpack_require__(4);
var floor = Math.floor;
module.exports = function isInteger(it) {
  return !isObject(it) && isFinite(it) && floor(it) === it;
};


/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(1);
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(30);
var descriptor = __webpack_require__(34);
var setToStringTag = __webpack_require__(42);
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(14)(IteratorPrototype, __webpack_require__(5)('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),
/* 107 */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),
/* 108 */
/***/ (function(module, exports) {

// 20.2.2.20 Math.log1p(x)
module.exports = Math.log1p || function log1p(x) {
  return (x = +x) > -1e-8 && x < 1e-8 ? x - x * x / 2 : Math.log(1 + x);
};


/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 25.4.1.5 NewPromiseCapability(C)
var aFunction = __webpack_require__(17);

function PromiseCapability(C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject = aFunction(reject);
}

module.exports.f = function (C) {
  return new PromiseCapability(C);
};


/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var DESCRIPTORS = __webpack_require__(8);
var getKeys = __webpack_require__(33);
var gOPS = __webpack_require__(59);
var pIE = __webpack_require__(47);
var toObject = __webpack_require__(10);
var IObject = __webpack_require__(46);
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(2)(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) {
      key = keys[j++];
      if (!DESCRIPTORS || isEnum.call(S, key)) T[key] = S[key];
    }
  } return T;
} : $assign;


/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(9);
var anObject = __webpack_require__(1);
var getKeys = __webpack_require__(33);

module.exports = __webpack_require__(8) ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(15);
var gOPN = __webpack_require__(31).f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(13);
var toIObject = __webpack_require__(15);
var arrayIndexOf = __webpack_require__(52)(false);
var IE_PROTO = __webpack_require__(82)('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(8);
var getKeys = __webpack_require__(33);
var toIObject = __webpack_require__(15);
var isEnum = __webpack_require__(47).f;
module.exports = function (isEntries) {
  return function (it) {
    var O = toIObject(it);
    var keys = getKeys(O);
    var length = keys.length;
    var i = 0;
    var result = [];
    var key;
    while (length > i) {
      key = keys[i++];
      if (!DESCRIPTORS || isEnum.call(O, key)) {
        result.push(isEntries ? [key, O[key]] : O[key]);
      }
    }
    return result;
  };
};


/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

// all object keys, includes non-enumerable and symbols
var gOPN = __webpack_require__(31);
var gOPS = __webpack_require__(59);
var anObject = __webpack_require__(1);
var Reflect = __webpack_require__(3).Reflect;
module.exports = Reflect && Reflect.ownKeys || function ownKeys(it) {
  var keys = gOPN.f(anObject(it));
  var getSymbols = gOPS.f;
  return getSymbols ? keys.concat(getSymbols(it)) : keys;
};


/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

var $parseFloat = __webpack_require__(3).parseFloat;
var $trim = __webpack_require__(43).trim;

module.exports = 1 / $parseFloat(__webpack_require__(86) + '-0') !== -Infinity ? function parseFloat(str) {
  var string = $trim(String(str), 3);
  var result = $parseFloat(string);
  return result === 0 && string.charAt(0) == '-' ? -0 : result;
} : $parseFloat;


/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

var $parseInt = __webpack_require__(3).parseInt;
var $trim = __webpack_require__(43).trim;
var ws = __webpack_require__(86);
var hex = /^[-+]?0[xX]/;

module.exports = $parseInt(ws + '08') !== 8 || $parseInt(ws + '0x16') !== 22 ? function parseInt(str, radix) {
  var string = $trim(String(str), 3);
  return $parseInt(string, (radix >>> 0) || (hex.test(string) ? 16 : 10));
} : $parseInt;


/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(1);
var isObject = __webpack_require__(4);
var newPromiseCapability = __webpack_require__(109);

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};


/***/ }),
/* 119 */
/***/ (function(module, exports) {

// 7.2.9 SameValue(x, y)
module.exports = Object.is || function is(x, y) {
  // eslint-disable-next-line no-self-compare
  return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
};


/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/tc39/proposal-string-pad-start-end
var toLength = __webpack_require__(6);
var repeat = __webpack_require__(85);
var defined = __webpack_require__(24);

module.exports = function (that, maxLength, fillString, left) {
  var S = String(defined(that));
  var stringLength = S.length;
  var fillStr = fillString === undefined ? ' ' : String(fillString);
  var intMaxLength = toLength(maxLength);
  if (intMaxLength <= stringLength || fillStr == '') return S;
  var fillLen = intMaxLength - stringLength;
  var stringFiller = repeat.call(fillStr, Math.ceil(fillLen / fillStr.length));
  if (stringFiller.length > fillLen) stringFiller = stringFiller.slice(0, fillLen);
  return left ? stringFiller + S : S + stringFiller;
};


/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/ecma262/#sec-toindex
var toInteger = __webpack_require__(22);
var toLength = __webpack_require__(6);
module.exports = function (it) {
  if (it === undefined) return 0;
  var number = toInteger(it);
  var length = toLength(number);
  if (number !== length) throw RangeError('Wrong length!');
  return length;
};


/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(3);
var core = __webpack_require__(7);
var LIBRARY = __webpack_require__(29);
var wksExt = __webpack_require__(89);
var defineProperty = __webpack_require__(9).f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(29);
var global = __webpack_require__(3);
var ctx = __webpack_require__(19);
var classof = __webpack_require__(45);
var $export = __webpack_require__(0);
var isObject = __webpack_require__(4);
var aFunction = __webpack_require__(17);
var anInstance = __webpack_require__(38);
var forOf = __webpack_require__(56);
var speciesConstructor = __webpack_require__(48);
var task = __webpack_require__(87).set;
var microtask = __webpack_require__(169)();
var newPromiseCapabilityModule = __webpack_require__(109);
var perform = __webpack_require__(170);
var userAgent = __webpack_require__(63);
var promiseResolve = __webpack_require__(118);
var PROMISE = 'Promise';
var TypeError = global.TypeError;
var process = global.process;
var versions = process && process.versions;
var v8 = versions && versions.v8 || '';
var $Promise = global[PROMISE];
var isNode = classof(process) == 'process';
var empty = function () { /* empty */ };
var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
var newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;

var USE_NATIVE = !!function () {
  try {
    // correct subclassing with @@species support
    var promise = $Promise.resolve(1);
    var FakePromise = (promise.constructor = {})[__webpack_require__(5)('species')] = function (exec) {
      exec(empty, empty);
    };
    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return (isNode || typeof PromiseRejectionEvent == 'function')
      && promise.then(empty) instanceof FakePromise
      // v8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
      // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
      // we can't detect it synchronously, so just check versions
      && v8.indexOf('6.6') !== 0
      && userAgent.indexOf('Chrome/66') === -1;
  } catch (e) { /* empty */ }
}();

// helpers
var isThenable = function (it) {
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};
var notify = function (promise, isReject) {
  if (promise._n) return;
  promise._n = true;
  var chain = promise._c;
  microtask(function () {
    var value = promise._v;
    var ok = promise._s == 1;
    var i = 0;
    var run = function (reaction) {
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then, exited;
      try {
        if (handler) {
          if (!ok) {
            if (promise._h == 2) onHandleUnhandled(promise);
            promise._h = 1;
          }
          if (handler === true) result = value;
          else {
            if (domain) domain.enter();
            result = handler(value); // may throw
            if (domain) {
              domain.exit();
              exited = true;
            }
          }
          if (result === reaction.promise) {
            reject(TypeError('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (e) {
        if (domain && !exited) domain.exit();
        reject(e);
      }
    };
    while (chain.length > i) run(chain[i++]); // variable length - can't use forEach
    promise._c = [];
    promise._n = false;
    if (isReject && !promise._h) onUnhandled(promise);
  });
};
var onUnhandled = function (promise) {
  task.call(global, function () {
    var value = promise._v;
    var unhandled = isUnhandled(promise);
    var result, handler, console;
    if (unhandled) {
      result = perform(function () {
        if (isNode) {
          process.emit('unhandledRejection', value, promise);
        } else if (handler = global.onunhandledrejection) {
          handler({ promise: promise, reason: value });
        } else if ((console = global.console) && console.error) {
          console.error('Unhandled promise rejection', value);
        }
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
    } promise._a = undefined;
    if (unhandled && result.e) throw result.v;
  });
};
var isUnhandled = function (promise) {
  return promise._h !== 1 && (promise._a || promise._c).length === 0;
};
var onHandleUnhandled = function (promise) {
  task.call(global, function () {
    var handler;
    if (isNode) {
      process.emit('rejectionHandled', promise);
    } else if (handler = global.onrejectionhandled) {
      handler({ promise: promise, reason: promise._v });
    }
  });
};
var $reject = function (value) {
  var promise = this;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  promise._v = value;
  promise._s = 2;
  if (!promise._a) promise._a = promise._c.slice();
  notify(promise, true);
};
var $resolve = function (value) {
  var promise = this;
  var then;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  try {
    if (promise === value) throw TypeError("Promise can't be resolved itself");
    if (then = isThenable(value)) {
      microtask(function () {
        var wrapper = { _w: promise, _d: false }; // wrap
        try {
          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
        } catch (e) {
          $reject.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch (e) {
    $reject.call({ _w: promise, _d: false }, e); // wrap
  }
};

// constructor polyfill
if (!USE_NATIVE) {
  // 25.4.3.1 Promise(executor)
  $Promise = function Promise(executor) {
    anInstance(this, $Promise, PROMISE, '_h');
    aFunction(executor);
    Internal.call(this);
    try {
      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
    } catch (err) {
      $reject.call(this, err);
    }
  };
  // eslint-disable-next-line no-unused-vars
  Internal = function Promise(executor) {
    this._c = [];             // <- awaiting reactions
    this._a = undefined;      // <- checked in isUnhandled reactions
    this._s = 0;              // <- state
    this._d = false;          // <- done
    this._v = undefined;      // <- value
    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
    this._n = false;          // <- notify
  };
  Internal.prototype = __webpack_require__(40)($Promise.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected) {
      var reaction = newPromiseCapability(speciesConstructor(this, $Promise));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode ? process.domain : undefined;
      this._c.push(reaction);
      if (this._a) this._a.push(reaction);
      if (this._s) notify(this, false);
      return reaction.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability = function () {
    var promise = new Internal();
    this.promise = promise;
    this.resolve = ctx($resolve, promise, 1);
    this.reject = ctx($reject, promise, 1);
  };
  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
    return C === $Promise || C === Wrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: $Promise });
__webpack_require__(42)($Promise, PROMISE);
__webpack_require__(41)(PROMISE);
Wrapper = __webpack_require__(7)[PROMISE];

// statics
$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    var $$reject = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x) {
    return promiseResolve(LIBRARY && this === Wrapper ? $Promise : this, x);
  }
});
$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(58)(function (iter) {
  $Promise.all(iter)['catch'](empty);
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var values = [];
      var index = 0;
      var remaining = 1;
      forOf(iterable, false, function (promise) {
        var $index = index++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.e) reject(result.v);
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = perform(function () {
      forOf(iterable, false, function (promise) {
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if (result.e) reject(result.v);
    return capability.promise;
  }
});


/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var regexpExec = __webpack_require__(80);
__webpack_require__(0)({
  target: 'RegExp',
  proto: true,
  forced: regexpExec !== /./.exec
}, {
  exec: regexpExec
});


/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

// 21.2.5.3 get RegExp.prototype.flags()
if (__webpack_require__(8) && /./g.flags != 'g') __webpack_require__(9).f(RegExp.prototype, 'flags', {
  configurable: true,
  get: __webpack_require__(55)
});


/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (process.env.NODE_ENV !== 'production') {
  var ReactIs = __webpack_require__(127);

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(325)(ReactIs.isElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(324)();
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(49)))

/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

if (process.env.NODE_ENV === 'production') {
  module.exports = __webpack_require__(327);
} else {
  module.exports = __webpack_require__(326);
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(49)))

/***/ }),
/* 128 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 129 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__require_babel_polyfill__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ziggeo_client_sdk_build_ziggeo_css__ = __webpack_require__(330);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ziggeo_client_sdk_build_ziggeo_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ziggeo_client_sdk_build_ziggeo_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ziggeo_client_sdk_build_ziggeo_js__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ziggeo_client_sdk_build_ziggeo_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ziggeo_client_sdk_build_ziggeo_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_ZiggeoPlayer__ = __webpack_require__(134);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "ZiggeoPlayer", function() { return __WEBPACK_IMPORTED_MODULE_3__components_ZiggeoPlayer__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_ZiggeoAudioPlayer__ = __webpack_require__(132);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "ZiggeoAudioPlayer", function() { return __WEBPACK_IMPORTED_MODULE_4__components_ZiggeoAudioPlayer__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_ZiggeoRecorder__ = __webpack_require__(135);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "ZiggeoRecorder", function() { return __WEBPACK_IMPORTED_MODULE_5__components_ZiggeoRecorder__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_ZiggeoAudioRecorder__ = __webpack_require__(133);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "ZiggeoAudioRecorder", function() { return __WEBPACK_IMPORTED_MODULE_6__components_ZiggeoAudioRecorder__["a"]; });












/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(131);

var _global = _interopRequireDefault(__webpack_require__(149));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

if (_global["default"]._babelPolyfill && typeof console !== "undefined" && console.warn) {
  console.warn("@babel/polyfill is loaded more than once on this page. This is probably not desirable/intended " + "and may have consequences if different versions of the polyfills are applied sequentially. " + "If you do need to load the polyfill more than once, use @babel/polyfill/noConflict " + "instead to bypass the warning.");
}

_global["default"]._babelPolyfill = true;

/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(137);

__webpack_require__(139);

__webpack_require__(138);

__webpack_require__(145);

__webpack_require__(144);

__webpack_require__(147);

__webpack_require__(146);

__webpack_require__(148);

__webpack_require__(141);

__webpack_require__(142);

__webpack_require__(140);

__webpack_require__(143);

__webpack_require__(319);

__webpack_require__(328);

/***/ }),
/* 132 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__withZiggeoApplication__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants__ = __webpack_require__(44);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





var ZiggeoAudioPlayer = function ZiggeoAudioPlayer(_ref) {
  var app = _ref.app,
      props = _objectWithoutProperties(_ref, ["app"]);

  var updateInstance = props.updateInstance;

  var _useState = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react__["useState"])(null),
      _useState2 = _slicedToArray(_useState, 2),
      player = _useState2[0],
      setPlayer = _useState2[1];

  var _useState3 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react__["useState"])(null),
      _useState4 = _slicedToArray(_useState3, 2),
      attributes = _useState4[0],
      setAttributes = _useState4[1];

  var _useState5 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react__["useState"])(null),
      _useState6 = _slicedToArray(_useState5, 2),
      elementProps = _useState6[0],
      setElementProps = _useState6[1];

  var playerElement = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react__["useRef"])(null);
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react__["useEffect"])(function () {
    if (attributes && player && updateInstance) {
      setAttributes(null);
    }
  }, [updateInstance]);
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react__["useEffect"])(function () {
    if (!attributes) {
      setAttributes(ziggeoAttributes());
      setElementProps(ziggeoElementProps());
    }

    if (playerElement && attributes) {
      setPlayer(new ZiggeoApi.V2.AudioPlayer({
        element: playerElement.current,
        attrs: attributes
      }));
    }
  }, [attributes]);
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react__["useEffect"])(function () {
    if (player) {
      player.activate();
      Object.entries(ziggeoEvents).forEach(function (_ref2) {
        var _ref3 = _slicedToArray(_ref2, 2),
            event = _ref3[0],
            func = _ref3[1];

        player.on(event, func.bind(ZiggeoAudioPlayer, player.get()));
      });
      props.onRef(player);
    }

    return function () {
      if (player) {
        props.onRef(null);
        player.destroy();
      }
    };
  }, [player]);
  /**
   * Set all props defined by user
   * @returns {{}}
   */

  var ziggeoAttributes = function ziggeoAttributes() {
    return Object.keys(props).filter(function (k) {
      return __WEBPACK_IMPORTED_MODULE_2__constants__["h" /* ziggeoAudioPlayerAttributesPropTypes */][k];
    }).reduce(function (attr, k) {
      attr[k.replace(/^_/g, '')] = props[k];
      return attr;
    }, {});
  };
  /**
   * Include props which are not related to Ziggeo
   * @returns {{}}
   */


  var ziggeoElementProps = function ziggeoElementProps() {
    return Object.keys(props).filter(function (k) {
      return !ZiggeoAudioPlayer.propTypes[k];
    }).reduce(function (attr, k) {
      attr[k] = props[k];
      return attr;
    }, {});
  };
  /**
   * Add Related Events
   * @type {{}}
   */


  var ziggeoEvents = Object.keys(Object.assign(__WEBPACK_IMPORTED_MODULE_2__constants__["i" /* ziggeoPlayerEmbeddingEventsPropTypes */], __WEBPACK_IMPORTED_MODULE_2__constants__["d" /* ziggeoCommonEmbeddingEventsPropTypes */])).reduce(function (memo, propName) {
    var eventName = propName.replace(/([A-Z])/g, '_$1').toLowerCase().slice(3).replace(/(recorder_|player_)/g, '');

    memo[eventName] = function () {
      props[propName].apply(props, arguments);
    };

    return memo;
  }, {}); // Delegate ziggeo attrs to the player

  var playerInstance = function playerInstance() {
    return player;
  };

  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", _extends({
    ref: playerElement,
    app: app
  }, elementProps));
};

ZiggeoAudioPlayer.propTypes = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, __WEBPACK_IMPORTED_MODULE_2__constants__["h" /* ziggeoAudioPlayerAttributesPropTypes */]), __WEBPACK_IMPORTED_MODULE_2__constants__["i" /* ziggeoPlayerEmbeddingEventsPropTypes */]), __WEBPACK_IMPORTED_MODULE_2__constants__["d" /* ziggeoCommonEmbeddingEventsPropTypes */]), __WEBPACK_IMPORTED_MODULE_2__constants__["b" /* ziggeoPlayerApplicationOptions */]), __WEBPACK_IMPORTED_MODULE_2__constants__["f" /* reactCustomOptions */]);
ZiggeoAudioPlayer.defaultProps = _objectSpread({
  // Presentational parameters
  'width': 640,
  'height': 480,
  'theme': 'default',
  'themecolor': 'default',
  'hidebarafter': 5000,
  // in milliseconds
  'skipseconds': 5,
  // in seconds
  // only react related options
  'preventReRenderOnUpdate': true
}, Object.keys(Object.assign(__WEBPACK_IMPORTED_MODULE_2__constants__["i" /* ziggeoPlayerEmbeddingEventsPropTypes */], __WEBPACK_IMPORTED_MODULE_2__constants__["d" /* ziggeoCommonEmbeddingEventsPropTypes */])).reduce(function (defaults, event) {
  defaults[event] = function () {};

  return defaults;
}, {}));
/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__withZiggeoApplication__["a" /* default */])(ZiggeoAudioPlayer));

/***/ }),
/* 133 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__withZiggeoApplication__ = __webpack_require__(51);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/* globals ZiggeoApi */




var ZiggeoAudioRecorder = function ZiggeoAudioRecorder(_ref) {
  var app = _ref.app,
      props = _objectWithoutProperties(_ref, ["app"]);

  var updateInstance = props.updateInstance;

  var _useState = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react__["useState"])(null),
      _useState2 = _slicedToArray(_useState, 2),
      recorder = _useState2[0],
      setRecorder = _useState2[1];

  var _useState3 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react__["useState"])(null),
      _useState4 = _slicedToArray(_useState3, 2),
      attributes = _useState4[0],
      setAttributes = _useState4[1];

  var _useState5 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react__["useState"])(null),
      _useState6 = _slicedToArray(_useState5, 2),
      elementProps = _useState6[0],
      setElementProps = _useState6[1];

  var recorderElement = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react__["useRef"])(null);
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react__["useEffect"])(function () {
    if (attributes && recorder && updateInstance) {
      setAttributes(null);
    }
  }, [updateInstance]);
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react__["useEffect"])(function () {
    if (!attributes) {
      setAttributes(ziggeoAttributes());
      setElementProps(ziggeoElementProps());
    }

    if (recorderElement && attributes) {
      setRecorder(new ZiggeoApi.V2.AudioRecorder({
        element: recorderElement.current,
        attrs: attributes
      }));
    }
  }, [attributes, recorderElement]);
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react__["useEffect"])(function () {
    if (recorder) {
      recorder.activate();
      Object.entries(ziggeoEvents).forEach(function (_ref2) {
        var _ref3 = _slicedToArray(_ref2, 2),
            event = _ref3[0],
            func = _ref3[1];

        recorder.on(event, func.bind(ZiggeoAudioRecorder, recorder.get()));
      });
      props.onRef(recorder);
    }

    return function () {
      if (recorder) {
        props.onRef(null);
        recorder.destroy();
      }
    };
  }, [recorder]);
  /**
   * Set all props defined by user
   * @returns {{}}
   */

  var ziggeoAttributes = function ziggeoAttributes() {
    return Object.keys(props).filter(function (k) {
      return Object.assign(__WEBPACK_IMPORTED_MODULE_1__constants__["a" /* ziggeoAudioRecorderAttributesPropTypes */], __WEBPACK_IMPORTED_MODULE_1__constants__["b" /* ziggeoPlayerApplicationOptions */])[k];
    }).reduce(function (attr, k) {
      attr[k.replace(/^_/g, '')] = props[k];
      return attr;
    }, {});
  };
  /**
   * Include props which are not related to Ziggeo
   * @returns {{}}
   */


  var ziggeoElementProps = function ziggeoElementProps() {
    return Object.keys(props).filter(function (k) {
      return !ZiggeoAudioRecorder.propTypes[k];
    }).reduce(function (attr, k) {
      attr[k] = props[k];
      return attr;
    }, {});
  };
  /**
   * Add Related Events
   * @type {{}}
   */


  var ziggeoEvents = Object.keys(Object.assign(__WEBPACK_IMPORTED_MODULE_1__constants__["c" /* ziggeoRecorderEmbeddingEventsPropTypes */], __WEBPACK_IMPORTED_MODULE_1__constants__["d" /* ziggeoCommonEmbeddingEventsPropTypes */])).reduce(function (memo, propName) {
    var eventName = propName.replace(/([A-Z])/g, '_$1').toLowerCase().slice(3).replace(/(recorder_|player_)/g, '');

    memo[eventName] = function () {
      props[propName].apply(props, arguments);
    };

    return memo;
  }, {});
  /**
   *
   * @returns AudioPlayer Instance
   */

  var recorderInstance = function recorderInstance() {
    return recorder;
  };

  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", _extends({
    ref: recorderElement,
    app: app
  }, elementProps));
};

ZiggeoAudioRecorder.propTypes = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, __WEBPACK_IMPORTED_MODULE_1__constants__["a" /* ziggeoAudioRecorderAttributesPropTypes */]), __WEBPACK_IMPORTED_MODULE_1__constants__["c" /* ziggeoRecorderEmbeddingEventsPropTypes */]), __WEBPACK_IMPORTED_MODULE_1__constants__["d" /* ziggeoCommonEmbeddingEventsPropTypes */]), __WEBPACK_IMPORTED_MODULE_1__constants__["e" /* ziggeoRecorderApplicationOptions */]), __WEBPACK_IMPORTED_MODULE_1__constants__["f" /* reactCustomOptions */]);
ZiggeoAudioRecorder.defaultProps = _objectSpread({
  // Presentational parameters
  'width': 640,
  'height': 480,
  'countdown': 3,
  'theme': 'default',
  'themecolor': 'default',
  'primaryrecord': true,
  // Video management parameters
  'audiobitrate': 'auto',
  'microphone-volume': 1,
  // Operational parameters
  'allowupload': true,
  'allowrecord': true,
  'force-overwrite': true,
  'allowcustomupload': true,
  'recordermode': true,
  // only react related options
  'preventReRenderOnUpdate': true,
  'display-timer': true,
  'rtmpmicrophonecodec': 'speex',
  'transcript-language': 'en-US',
  // application settings
  webrtc_streaming: false,
  webrtc_streaming_if_necessary: false,
  webrtc_on_mobile: false,
  auth: false,
  debug: false,
  testing_application: false
}, Object.keys(Object.assign(__WEBPACK_IMPORTED_MODULE_1__constants__["c" /* ziggeoRecorderEmbeddingEventsPropTypes */], __WEBPACK_IMPORTED_MODULE_1__constants__["d" /* ziggeoCommonEmbeddingEventsPropTypes */])).reduce(function (defaults, event) {
  defaults[event] = function () {};

  return defaults;
}, {}));
/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__withZiggeoApplication__["a" /* default */])(ZiggeoAudioRecorder));

/***/ }),
/* 134 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__withZiggeoApplication__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants__ = __webpack_require__(44);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





var ZiggeoPlayer = function ZiggeoPlayer(_ref) {
  var app = _ref.app,
      props = _objectWithoutProperties(_ref, ["app"]);

  var updateInstance = props.updateInstance;

  var _useState = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react__["useState"])(null),
      _useState2 = _slicedToArray(_useState, 2),
      player = _useState2[0],
      setPlayer = _useState2[1];

  var _useState3 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react__["useState"])(null),
      _useState4 = _slicedToArray(_useState3, 2),
      attributes = _useState4[0],
      setAttributes = _useState4[1];

  var _useState5 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react__["useState"])(null),
      _useState6 = _slicedToArray(_useState5, 2),
      elementProps = _useState6[0],
      setElementProps = _useState6[1];

  var playerElement = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react__["useRef"])(null);
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react__["useEffect"])(function () {
    if (attributes && player && updateInstance) {
      setAttributes(null);
    }
  }, [updateInstance]);
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react__["useEffect"])(function () {
    if (!attributes) {
      setAttributes(ziggeoAttributes());
      setElementProps(ziggeoElementProps());
    }

    if (playerElement && attributes) {
      setPlayer(new ZiggeoApi.V2.Player({
        element: playerElement.current,
        attrs: attributes
      }));
    }
  }, [attributes]);
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react__["useEffect"])(function () {
    if (player) {
      player.activate();
      Object.entries(ziggeoEvents).forEach(function (_ref2) {
        var _ref3 = _slicedToArray(_ref2, 2),
            event = _ref3[0],
            func = _ref3[1];

        player.on(event, func.bind(ZiggeoPlayer, player.get()));
      });
      props.onRef(player);
    }

    return function () {
      if (player) {
        props.onRef(null);
        player.destroy();
      }
    };
  }, [player]);
  /**
   * Set all props defined by user
   * @returns {{}}
   */

  var ziggeoAttributes = function ziggeoAttributes() {
    return Object.keys(props).filter(function (k) {
      return __WEBPACK_IMPORTED_MODULE_2__constants__["j" /* ziggeoPlayerAttributesPropTypes */][k];
    }).reduce(function (attr, k) {
      attr[k.replace(/^_/g, '')] = props[k];
      return attr;
    }, {});
  };
  /**
   * Include props which are not related to Ziggeo
   * @returns {{}}
   */


  var ziggeoElementProps = function ziggeoElementProps() {
    return Object.keys(props).filter(function (k) {
      return !ZiggeoPlayer.propTypes[k];
    }).reduce(function (attr, k) {
      attr[k] = props[k];
      return attr;
    }, {});
  };
  /**
   * Add Related Events
   * @type {{}}
   */


  var ziggeoEvents = Object.keys(Object.assign(__WEBPACK_IMPORTED_MODULE_2__constants__["i" /* ziggeoPlayerEmbeddingEventsPropTypes */], __WEBPACK_IMPORTED_MODULE_2__constants__["d" /* ziggeoCommonEmbeddingEventsPropTypes */])).reduce(function (memo, propName) {
    var eventName = propName.replace(/([A-Z])/g, '_$1').toLowerCase().slice(3).replace(/(recorder_|player_)/g, '');

    memo[eventName] = function () {
      props[propName].apply(props, arguments);
    };

    return memo;
  }, {}); // Delegate ziggeo attrs to the player

  var playerInstance = function playerInstance() {
    return player;
  };

  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", _extends({
    ref: playerElement,
    app: app
  }, elementProps));
};

ZiggeoPlayer.propTypes = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, __WEBPACK_IMPORTED_MODULE_2__constants__["j" /* ziggeoPlayerAttributesPropTypes */]), __WEBPACK_IMPORTED_MODULE_2__constants__["i" /* ziggeoPlayerEmbeddingEventsPropTypes */]), __WEBPACK_IMPORTED_MODULE_2__constants__["d" /* ziggeoCommonEmbeddingEventsPropTypes */]), __WEBPACK_IMPORTED_MODULE_2__constants__["b" /* ziggeoPlayerApplicationOptions */]), __WEBPACK_IMPORTED_MODULE_2__constants__["f" /* reactCustomOptions */]);
ZiggeoPlayer.defaultProps = _objectSpread({
  // Presentational parameters
  'width': 640,
  'height': 480,
  'picksnapshots': true,
  'theme': 'default',
  'themecolor': 'default',
  'hidebarafter': 5000,
  // in milliseconds
  'skipseconds': 5,
  // in seconds
  'videofitstrategy': 'pad',
  'posterfitstrategy': 'crop',
  // only react related options
  'preventReRenderOnUpdate': true
}, Object.keys(Object.assign(__WEBPACK_IMPORTED_MODULE_2__constants__["i" /* ziggeoPlayerEmbeddingEventsPropTypes */], __WEBPACK_IMPORTED_MODULE_2__constants__["d" /* ziggeoCommonEmbeddingEventsPropTypes */])).reduce(function (defaults, event) {
  defaults[event] = function () {};

  return defaults;
}, {}));
/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__withZiggeoApplication__["a" /* default */])(ZiggeoPlayer));

/***/ }),
/* 135 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__withZiggeoApplication__ = __webpack_require__(51);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/* globals ZiggeoApi */




var ZiggeoRecorder = function ZiggeoRecorder(_ref) {
  var app = _ref.app,
      props = _objectWithoutProperties(_ref, ["app"]);

  var updateInstance = props.updateInstance;

  var _useState = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react__["useState"])(null),
      _useState2 = _slicedToArray(_useState, 2),
      recorder = _useState2[0],
      setRecorder = _useState2[1];

  var _useState3 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react__["useState"])(null),
      _useState4 = _slicedToArray(_useState3, 2),
      attributes = _useState4[0],
      setAttributes = _useState4[1];

  var _useState5 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react__["useState"])(null),
      _useState6 = _slicedToArray(_useState5, 2),
      elementProps = _useState6[0],
      setElementProps = _useState6[1];

  var recorderElement = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react__["useRef"])(null);
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react__["useEffect"])(function () {
    if (attributes && recorder && updateInstance) {
      setAttributes(null);
    }
  }, [updateInstance]);
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react__["useEffect"])(function () {
    if (!attributes) {
      setAttributes(ziggeoAttributes());
      setElementProps(ziggeoElementProps());
    }

    if (recorderElement && attributes) {
      setRecorder(new ZiggeoApi.V2.Recorder({
        element: recorderElement.current,
        attrs: attributes
      }));
    }
  }, [attributes, recorderElement]);
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react__["useEffect"])(function () {
    if (recorder) {
      recorder.activate();
      Object.entries(ziggeoEvents).forEach(function (_ref2) {
        var _ref3 = _slicedToArray(_ref2, 2),
            event = _ref3[0],
            func = _ref3[1];

        recorder.on(event, func.bind(ZiggeoRecorder, recorder.get()));
      });
      props.onRef(recorder);
    }

    return function () {
      if (recorder) {
        props.onRef(null);
        recorder.destroy();
      }
    };
  }, [recorder]);
  /**
   * Set all props defined by user
   * @returns {{}}
   */

  var ziggeoAttributes = function ziggeoAttributes() {
    return Object.keys(props).filter(function (k) {
      return Object.assign(__WEBPACK_IMPORTED_MODULE_1__constants__["g" /* ziggeoRecorderAttributesPropTypes */], __WEBPACK_IMPORTED_MODULE_1__constants__["b" /* ziggeoPlayerApplicationOptions */])[k];
    }).reduce(function (attr, k) {
      attr[k.replace(/^_/g, '')] = props[k];
      return attr;
    }, {});
  };
  /**
   * Include props which are not related to Ziggeo
   * @returns {{}}
   */


  var ziggeoElementProps = function ziggeoElementProps() {
    return Object.keys(props).filter(function (k) {
      return !ZiggeoRecorder.propTypes[k];
    }).reduce(function (attr, k) {
      attr[k] = props[k];
      return attr;
    }, {});
  };
  /**
   * Add Related Events
   * @type {{}}
   */


  var ziggeoEvents = Object.keys(Object.assign(__WEBPACK_IMPORTED_MODULE_1__constants__["c" /* ziggeoRecorderEmbeddingEventsPropTypes */], __WEBPACK_IMPORTED_MODULE_1__constants__["d" /* ziggeoCommonEmbeddingEventsPropTypes */])).reduce(function (memo, propName) {
    var eventName = propName.replace(/([A-Z])/g, '_$1').toLowerCase().slice(3).replace(/(recorder_|player_)/g, '');

    memo[eventName] = function () {
      props[propName].apply(props, arguments);
    };

    return memo;
  }, {});
  /**
   *
   * @returns Player Instance
   */

  var recorderInstance = function recorderInstance() {
    return recorder;
  };

  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", _extends({
    ref: recorderElement,
    app: app
  }, elementProps));
};

ZiggeoRecorder.propTypes = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, __WEBPACK_IMPORTED_MODULE_1__constants__["g" /* ziggeoRecorderAttributesPropTypes */]), __WEBPACK_IMPORTED_MODULE_1__constants__["c" /* ziggeoRecorderEmbeddingEventsPropTypes */]), __WEBPACK_IMPORTED_MODULE_1__constants__["d" /* ziggeoCommonEmbeddingEventsPropTypes */]), __WEBPACK_IMPORTED_MODULE_1__constants__["e" /* ziggeoRecorderApplicationOptions */]), __WEBPACK_IMPORTED_MODULE_1__constants__["f" /* reactCustomOptions */]);
ZiggeoRecorder.defaultProps = _objectSpread({
  // Presentational parameters
  'width': 640,
  'height': 480,
  'picksnapshots': true,
  'countdown': 3,
  'snapshotmax': 15,
  'gallerysnapshots': 3,
  'theme': 'default',
  'themecolor': 'default',
  'primaryrecord': true,
  // Video management parameters
  'recordingwidth': 640,
  'recordingheight': 480,
  'framerate': 25,
  'videobitrate': 'auto',
  'audiobitrate': 'auto',
  'microphone-volume': 1,
  // Operational parameters
  'allowupload': true,
  'allowrecord': true,
  'force-overwrite': true,
  'allowcustomupload': true,
  'recordermode': true,
  'cpu-friendly': false,
  'trimoverlay': true,
  'pauseonclick': true,
  // only react related options
  'preventReRenderOnUpdate': true,
  'display-timer': true,
  'rtmpstreamtype': 'mp4',
  'rtmpmicrophonecodec': 'speex',
  'transcript-language': 'en-US',
  'multistreamreversable': true,
  'multistreamdraggable': true,
  'addstreamproportional': true,
  'addstreampositionx': 5,
  'addstreampositiony': 5,
  'addstreampositionwidth': 120,
  'addstreampositionheight': 95,
  'addstreamminwidth': 120,
  'addstreamminheight': 95,
  // application settings
  webrtc_streaming: false,
  webrtc_streaming_if_necessary: false,
  webrtc_on_mobile: false,
  auth: false,
  debug: false,
  testing_application: false,
  // screen configuration for Ziggeo extension
  "allowscreen": false,
  chrome_extension_id: "meoefjkcilgjlkibnjjlfdgphacbeglk",
  chrome_extension_install_link: "https://chrome.google.com/webstore/detail/meoefjkcilgjlkibnjjlfdgphacbeglk",
  opera_extension_id: "dnnolmnenehhgplebjhbcmfdbaabkepm",
  opera_extension_install_link: "https://addons.opera.com/en/extensions/details/3d46d4c36fefe97e76622c54b2eb6ea1d5406767"
}, Object.keys(Object.assign(__WEBPACK_IMPORTED_MODULE_1__constants__["c" /* ziggeoRecorderEmbeddingEventsPropTypes */], __WEBPACK_IMPORTED_MODULE_1__constants__["d" /* ziggeoCommonEmbeddingEventsPropTypes */])).reduce(function (defaults, event) {
  defaults[event] = function () {};

  return defaults;
}, {}));
/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__withZiggeoApplication__["a" /* default */])(ZiggeoRecorder)); // const doesUpdateRequire = (prevProps, nextProps) => {
//   // const oldApiKey = prevProps['apiKey'];
//   // const { apiKey } = nextProps;
//   const { preventReRenderOnUpdate } = nextProps || true;
//   return !preventReRenderOnUpdate;
// };
// export default withZiggeoApplication(React.memo(ZiggeoRecorder, doesUpdateRequire));

/***/ }),
/* 136 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* unused harmony default export */ var _unused_webpack_default_export = ((function () {
  if (typeof window !== 'undefined' && !window._babelPolyfill || typeof global !== 'undefined' && !global._babelPolyfill) {
    __webpack_require__(130);
  }
})());
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(128)))

/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(291);
__webpack_require__(230);
__webpack_require__(232);
__webpack_require__(231);
__webpack_require__(234);
__webpack_require__(236);
__webpack_require__(241);
__webpack_require__(235);
__webpack_require__(233);
__webpack_require__(243);
__webpack_require__(242);
__webpack_require__(238);
__webpack_require__(239);
__webpack_require__(237);
__webpack_require__(229);
__webpack_require__(240);
__webpack_require__(244);
__webpack_require__(245);
__webpack_require__(196);
__webpack_require__(198);
__webpack_require__(197);
__webpack_require__(247);
__webpack_require__(246);
__webpack_require__(217);
__webpack_require__(227);
__webpack_require__(228);
__webpack_require__(218);
__webpack_require__(219);
__webpack_require__(220);
__webpack_require__(221);
__webpack_require__(222);
__webpack_require__(223);
__webpack_require__(224);
__webpack_require__(225);
__webpack_require__(226);
__webpack_require__(200);
__webpack_require__(201);
__webpack_require__(202);
__webpack_require__(203);
__webpack_require__(204);
__webpack_require__(205);
__webpack_require__(206);
__webpack_require__(207);
__webpack_require__(208);
__webpack_require__(209);
__webpack_require__(210);
__webpack_require__(211);
__webpack_require__(212);
__webpack_require__(213);
__webpack_require__(214);
__webpack_require__(215);
__webpack_require__(216);
__webpack_require__(278);
__webpack_require__(283);
__webpack_require__(290);
__webpack_require__(281);
__webpack_require__(273);
__webpack_require__(274);
__webpack_require__(279);
__webpack_require__(284);
__webpack_require__(286);
__webpack_require__(269);
__webpack_require__(270);
__webpack_require__(271);
__webpack_require__(272);
__webpack_require__(275);
__webpack_require__(276);
__webpack_require__(277);
__webpack_require__(280);
__webpack_require__(282);
__webpack_require__(285);
__webpack_require__(287);
__webpack_require__(288);
__webpack_require__(289);
__webpack_require__(191);
__webpack_require__(193);
__webpack_require__(192);
__webpack_require__(195);
__webpack_require__(194);
__webpack_require__(180);
__webpack_require__(178);
__webpack_require__(184);
__webpack_require__(181);
__webpack_require__(187);
__webpack_require__(189);
__webpack_require__(177);
__webpack_require__(183);
__webpack_require__(174);
__webpack_require__(188);
__webpack_require__(172);
__webpack_require__(186);
__webpack_require__(185);
__webpack_require__(179);
__webpack_require__(182);
__webpack_require__(171);
__webpack_require__(173);
__webpack_require__(176);
__webpack_require__(175);
__webpack_require__(190);
__webpack_require__(91);
__webpack_require__(262);
__webpack_require__(124);
__webpack_require__(267);
__webpack_require__(125);
__webpack_require__(263);
__webpack_require__(264);
__webpack_require__(265);
__webpack_require__(266);
__webpack_require__(123);
__webpack_require__(199);
__webpack_require__(268);
__webpack_require__(303);
__webpack_require__(304);
__webpack_require__(292);
__webpack_require__(293);
__webpack_require__(298);
__webpack_require__(301);
__webpack_require__(302);
__webpack_require__(296);
__webpack_require__(299);
__webpack_require__(297);
__webpack_require__(300);
__webpack_require__(294);
__webpack_require__(295);
__webpack_require__(248);
__webpack_require__(249);
__webpack_require__(250);
__webpack_require__(251);
__webpack_require__(252);
__webpack_require__(255);
__webpack_require__(253);
__webpack_require__(254);
__webpack_require__(256);
__webpack_require__(257);
__webpack_require__(258);
__webpack_require__(259);
__webpack_require__(261);
__webpack_require__(260);
module.exports = __webpack_require__(7);


/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(305);
module.exports = __webpack_require__(7).Array.flatMap;


/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(306);
module.exports = __webpack_require__(7).Array.includes;


/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(307);
module.exports = __webpack_require__(7).Object.entries;


/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(308);
module.exports = __webpack_require__(7).Object.getOwnPropertyDescriptors;


/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(309);
module.exports = __webpack_require__(7).Object.values;


/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

__webpack_require__(123);
__webpack_require__(310);
module.exports = __webpack_require__(7).Promise['finally'];


/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(311);
module.exports = __webpack_require__(7).String.padEnd;


/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(312);
module.exports = __webpack_require__(7).String.padStart;


/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(314);
module.exports = __webpack_require__(7).String.trimRight;


/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(313);
module.exports = __webpack_require__(7).String.trimLeft;


/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(315);
module.exports = __webpack_require__(89).f('asyncIterator');


/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(161);
module.exports = __webpack_require__(93).global;


/***/ }),
/* 150 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(66);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(150);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(66);
var document = __webpack_require__(65).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(65);
var core = __webpack_require__(93);
var ctx = __webpack_require__(152);
var hide = __webpack_require__(156);
var has = __webpack_require__(155);
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && has(exports, key)) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),
/* 155 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 156 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(158);
var createDesc = __webpack_require__(159);
module.exports = __webpack_require__(64) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(64) && !__webpack_require__(94)(function () {
  return Object.defineProperty(__webpack_require__(153)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(151);
var IE8_DOM_DEFINE = __webpack_require__(157);
var toPrimitive = __webpack_require__(160);
var dP = Object.defineProperty;

exports.f = __webpack_require__(64) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 159 */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(66);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/tc39/proposal-global
var $export = __webpack_require__(154);

$export($export.G, { global: __webpack_require__(65) });


/***/ }),
/* 162 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(4);
var isArray = __webpack_require__(57);
var SPECIES = __webpack_require__(5)('species');

module.exports = function (original) {
  var C;
  if (isArray(original)) {
    C = original.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return C === undefined ? Array : C;
};


/***/ }),
/* 163 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 20.3.4.36 / 15.9.5.43 Date.prototype.toISOString()
var fails = __webpack_require__(2);
var getTime = Date.prototype.getTime;
var $toISOString = Date.prototype.toISOString;

var lz = function (num) {
  return num > 9 ? num : '0' + num;
};

// PhantomJS / old WebKit has a broken implementations
module.exports = (fails(function () {
  return $toISOString.call(new Date(-5e13 - 1)) != '0385-07-25T07:06:39.999Z';
}) || !fails(function () {
  $toISOString.call(new Date(NaN));
})) ? function toISOString() {
  if (!isFinite(getTime.call(this))) throw RangeError('Invalid time value');
  var d = this;
  var y = d.getUTCFullYear();
  var m = d.getUTCMilliseconds();
  var s = y < 0 ? '-' : y > 9999 ? '+' : '';
  return s + ('00000' + Math.abs(y)).slice(s ? -6 : -4) +
    '-' + lz(d.getUTCMonth() + 1) + '-' + lz(d.getUTCDate()) +
    'T' + lz(d.getUTCHours()) + ':' + lz(d.getUTCMinutes()) +
    ':' + lz(d.getUTCSeconds()) + '.' + (m > 99 ? m : '0' + lz(m)) + 'Z';
} : $toISOString;


/***/ }),
/* 164 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var anObject = __webpack_require__(1);
var toPrimitive = __webpack_require__(27);
var NUMBER = 'number';

module.exports = function (hint) {
  if (hint !== 'string' && hint !== NUMBER && hint !== 'default') throw TypeError('Incorrect hint');
  return toPrimitive(anObject(this), hint != NUMBER);
};


/***/ }),
/* 165 */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(33);
var gOPS = __webpack_require__(59);
var pIE = __webpack_require__(47);
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),
/* 166 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://tc39.github.io/proposal-flatMap/#sec-FlattenIntoArray
var isArray = __webpack_require__(57);
var isObject = __webpack_require__(4);
var toLength = __webpack_require__(6);
var ctx = __webpack_require__(19);
var IS_CONCAT_SPREADABLE = __webpack_require__(5)('isConcatSpreadable');

function flattenIntoArray(target, original, source, sourceLen, start, depth, mapper, thisArg) {
  var targetIndex = start;
  var sourceIndex = 0;
  var mapFn = mapper ? ctx(mapper, thisArg, 3) : false;
  var element, spreadable;

  while (sourceIndex < sourceLen) {
    if (sourceIndex in source) {
      element = mapFn ? mapFn(source[sourceIndex], sourceIndex, original) : source[sourceIndex];

      spreadable = false;
      if (isObject(element)) {
        spreadable = element[IS_CONCAT_SPREADABLE];
        spreadable = spreadable !== undefined ? !!spreadable : isArray(element);
      }

      if (spreadable && depth > 0) {
        targetIndex = flattenIntoArray(target, original, element, toLength(element.length), targetIndex, depth - 1) - 1;
      } else {
        if (targetIndex >= 0x1fffffffffffff) throw TypeError();
        target[targetIndex] = element;
      }

      targetIndex++;
    }
    sourceIndex++;
  }
  return targetIndex;
}

module.exports = flattenIntoArray;


/***/ }),
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(61)('native-function-to-string', Function.toString);


/***/ }),
/* 168 */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.16 Math.fround(x)
var sign = __webpack_require__(79);
var pow = Math.pow;
var EPSILON = pow(2, -52);
var EPSILON32 = pow(2, -23);
var MAX32 = pow(2, 127) * (2 - EPSILON32);
var MIN32 = pow(2, -126);

var roundTiesToEven = function (n) {
  return n + 1 / EPSILON - 1 / EPSILON;
};

module.exports = Math.fround || function fround(x) {
  var $abs = Math.abs(x);
  var $sign = sign(x);
  var a, result;
  if ($abs < MIN32) return $sign * roundTiesToEven($abs / MIN32 / EPSILON32) * MIN32 * EPSILON32;
  a = (1 + EPSILON32 / EPSILON) * $abs;
  result = a - (a - $abs);
  // eslint-disable-next-line no-self-compare
  if (result > MAX32 || result != result) return $sign * Infinity;
  return $sign * result;
};


/***/ }),
/* 169 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(3);
var macrotask = __webpack_require__(87).set;
var Observer = global.MutationObserver || global.WebKitMutationObserver;
var process = global.process;
var Promise = global.Promise;
var isNode = __webpack_require__(23)(process) == 'process';

module.exports = function () {
  var head, last, notify;

  var flush = function () {
    var parent, fn;
    if (isNode && (parent = process.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (e) {
        if (head) notify();
        else last = undefined;
        throw e;
      }
    } last = undefined;
    if (parent) parent.enter();
  };

  // Node.js
  if (isNode) {
    notify = function () {
      process.nextTick(flush);
    };
  // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339
  } else if (Observer && !(global.navigator && global.navigator.standalone)) {
    var toggle = true;
    var node = document.createTextNode('');
    new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (Promise && Promise.resolve) {
    // Promise.resolve without an argument throws an error in LG WebOS 2
    var promise = Promise.resolve(undefined);
    notify = function () {
      promise.then(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function () {
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }

  return function (fn) {
    var task = { fn: fn, next: undefined };
    if (last) last.next = task;
    if (!head) {
      head = task;
      notify();
    } last = task;
  };
};


/***/ }),
/* 170 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return { e: false, v: exec() };
  } catch (e) {
    return { e: true, v: e };
  }
};


/***/ }),
/* 171 */
/***/ (function(module, exports, __webpack_require__) {

// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)
var $export = __webpack_require__(0);

$export($export.P, 'Array', { copyWithin: __webpack_require__(96) });

__webpack_require__(28)('copyWithin');


/***/ }),
/* 172 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(0);
var $every = __webpack_require__(18)(4);

$export($export.P + $export.F * !__webpack_require__(16)([].every, true), 'Array', {
  // 22.1.3.5 / 15.4.4.16 Array.prototype.every(callbackfn [, thisArg])
  every: function every(callbackfn /* , thisArg */) {
    return $every(this, callbackfn, arguments[1]);
  }
});


/***/ }),
/* 173 */
/***/ (function(module, exports, __webpack_require__) {

// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
var $export = __webpack_require__(0);

$export($export.P, 'Array', { fill: __webpack_require__(68) });

__webpack_require__(28)('fill');


/***/ }),
/* 174 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(0);
var $filter = __webpack_require__(18)(2);

$export($export.P + $export.F * !__webpack_require__(16)([].filter, true), 'Array', {
  // 22.1.3.7 / 15.4.4.20 Array.prototype.filter(callbackfn [, thisArg])
  filter: function filter(callbackfn /* , thisArg */) {
    return $filter(this, callbackfn, arguments[1]);
  }
});


/***/ }),
/* 175 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 22.1.3.9 Array.prototype.findIndex(predicate, thisArg = undefined)
var $export = __webpack_require__(0);
var $find = __webpack_require__(18)(6);
var KEY = 'findIndex';
var forced = true;
// Shouldn't skip holes
if (KEY in []) Array(1)[KEY](function () { forced = false; });
$export($export.P + $export.F * forced, 'Array', {
  findIndex: function findIndex(callbackfn /* , that = undefined */) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});
__webpack_require__(28)(KEY);


/***/ }),
/* 176 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 22.1.3.8 Array.prototype.find(predicate, thisArg = undefined)
var $export = __webpack_require__(0);
var $find = __webpack_require__(18)(5);
var KEY = 'find';
var forced = true;
// Shouldn't skip holes
if (KEY in []) Array(1)[KEY](function () { forced = false; });
$export($export.P + $export.F * forced, 'Array', {
  find: function find(callbackfn /* , that = undefined */) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});
__webpack_require__(28)(KEY);


/***/ }),
/* 177 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(0);
var $forEach = __webpack_require__(18)(0);
var STRICT = __webpack_require__(16)([].forEach, true);

$export($export.P + $export.F * !STRICT, 'Array', {
  // 22.1.3.10 / 15.4.4.18 Array.prototype.forEach(callbackfn [, thisArg])
  forEach: function forEach(callbackfn /* , thisArg */) {
    return $forEach(this, callbackfn, arguments[1]);
  }
});


/***/ }),
/* 178 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ctx = __webpack_require__(19);
var $export = __webpack_require__(0);
var toObject = __webpack_require__(10);
var call = __webpack_require__(105);
var isArrayIter = __webpack_require__(75);
var toLength = __webpack_require__(6);
var createProperty = __webpack_require__(69);
var getIterFn = __webpack_require__(90);

$export($export.S + $export.F * !__webpack_require__(58)(function (iter) { Array.from(iter); }), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
    var O = toObject(arrayLike);
    var C = typeof this == 'function' ? this : Array;
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var index = 0;
    var iterFn = getIterFn(O);
    var length, result, step, iterator;
    if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = toLength(O.length);
      for (result = new C(length); length > index; index++) {
        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }
    result.length = index;
    return result;
  }
});


/***/ }),
/* 179 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(0);
var $indexOf = __webpack_require__(52)(false);
var $native = [].indexOf;
var NEGATIVE_ZERO = !!$native && 1 / [1].indexOf(1, -0) < 0;

$export($export.P + $export.F * (NEGATIVE_ZERO || !__webpack_require__(16)($native)), 'Array', {
  // 22.1.3.11 / 15.4.4.14 Array.prototype.indexOf(searchElement [, fromIndex])
  indexOf: function indexOf(searchElement /* , fromIndex = 0 */) {
    return NEGATIVE_ZERO
      // convert -0 to +0
      ? $native.apply(this, arguments) || 0
      : $indexOf(this, searchElement, arguments[1]);
  }
});


/***/ }),
/* 180 */
/***/ (function(module, exports, __webpack_require__) {

// 22.1.2.2 / 15.4.3.2 Array.isArray(arg)
var $export = __webpack_require__(0);

$export($export.S, 'Array', { isArray: __webpack_require__(57) });


/***/ }),
/* 181 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 22.1.3.13 Array.prototype.join(separator)
var $export = __webpack_require__(0);
var toIObject = __webpack_require__(15);
var arrayJoin = [].join;

// fallback for not array-like strings
$export($export.P + $export.F * (__webpack_require__(46) != Object || !__webpack_require__(16)(arrayJoin)), 'Array', {
  join: function join(separator) {
    return arrayJoin.call(toIObject(this), separator === undefined ? ',' : separator);
  }
});


/***/ }),
/* 182 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(0);
var toIObject = __webpack_require__(15);
var toInteger = __webpack_require__(22);
var toLength = __webpack_require__(6);
var $native = [].lastIndexOf;
var NEGATIVE_ZERO = !!$native && 1 / [1].lastIndexOf(1, -0) < 0;

$export($export.P + $export.F * (NEGATIVE_ZERO || !__webpack_require__(16)($native)), 'Array', {
  // 22.1.3.14 / 15.4.4.15 Array.prototype.lastIndexOf(searchElement [, fromIndex])
  lastIndexOf: function lastIndexOf(searchElement /* , fromIndex = @[*-1] */) {
    // convert -0 to +0
    if (NEGATIVE_ZERO) return $native.apply(this, arguments) || 0;
    var O = toIObject(this);
    var length = toLength(O.length);
    var index = length - 1;
    if (arguments.length > 1) index = Math.min(index, toInteger(arguments[1]));
    if (index < 0) index = length + index;
    for (;index >= 0; index--) if (index in O) if (O[index] === searchElement) return index || 0;
    return -1;
  }
});


/***/ }),
/* 183 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(0);
var $map = __webpack_require__(18)(1);

$export($export.P + $export.F * !__webpack_require__(16)([].map, true), 'Array', {
  // 22.1.3.15 / 15.4.4.19 Array.prototype.map(callbackfn [, thisArg])
  map: function map(callbackfn /* , thisArg */) {
    return $map(this, callbackfn, arguments[1]);
  }
});


/***/ }),
/* 184 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(0);
var createProperty = __webpack_require__(69);

// WebKit Array.of isn't generic
$export($export.S + $export.F * __webpack_require__(2)(function () {
  function F() { /* empty */ }
  return !(Array.of.call(F) instanceof F);
}), 'Array', {
  // 22.1.2.3 Array.of( ...items)
  of: function of(/* ...args */) {
    var index = 0;
    var aLen = arguments.length;
    var result = new (typeof this == 'function' ? this : Array)(aLen);
    while (aLen > index) createProperty(result, index, arguments[index++]);
    result.length = aLen;
    return result;
  }
});


/***/ }),
/* 185 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(0);
var $reduce = __webpack_require__(97);

$export($export.P + $export.F * !__webpack_require__(16)([].reduceRight, true), 'Array', {
  // 22.1.3.19 / 15.4.4.22 Array.prototype.reduceRight(callbackfn [, initialValue])
  reduceRight: function reduceRight(callbackfn /* , initialValue */) {
    return $reduce(this, callbackfn, arguments.length, arguments[1], true);
  }
});


/***/ }),
/* 186 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(0);
var $reduce = __webpack_require__(97);

$export($export.P + $export.F * !__webpack_require__(16)([].reduce, true), 'Array', {
  // 22.1.3.18 / 15.4.4.21 Array.prototype.reduce(callbackfn [, initialValue])
  reduce: function reduce(callbackfn /* , initialValue */) {
    return $reduce(this, callbackfn, arguments.length, arguments[1], false);
  }
});


/***/ }),
/* 187 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(0);
var html = __webpack_require__(73);
var cof = __webpack_require__(23);
var toAbsoluteIndex = __webpack_require__(35);
var toLength = __webpack_require__(6);
var arraySlice = [].slice;

// fallback for not array-like ES3 strings and DOM objects
$export($export.P + $export.F * __webpack_require__(2)(function () {
  if (html) arraySlice.call(html);
}), 'Array', {
  slice: function slice(begin, end) {
    var len = toLength(this.length);
    var klass = cof(this);
    end = end === undefined ? len : end;
    if (klass == 'Array') return arraySlice.call(this, begin, end);
    var start = toAbsoluteIndex(begin, len);
    var upTo = toAbsoluteIndex(end, len);
    var size = toLength(upTo - start);
    var cloned = new Array(size);
    var i = 0;
    for (; i < size; i++) cloned[i] = klass == 'String'
      ? this.charAt(start + i)
      : this[start + i];
    return cloned;
  }
});


/***/ }),
/* 188 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(0);
var $some = __webpack_require__(18)(3);

$export($export.P + $export.F * !__webpack_require__(16)([].some, true), 'Array', {
  // 22.1.3.23 / 15.4.4.17 Array.prototype.some(callbackfn [, thisArg])
  some: function some(callbackfn /* , thisArg */) {
    return $some(this, callbackfn, arguments[1]);
  }
});


/***/ }),
/* 189 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(0);
var aFunction = __webpack_require__(17);
var toObject = __webpack_require__(10);
var fails = __webpack_require__(2);
var $sort = [].sort;
var test = [1, 2, 3];

$export($export.P + $export.F * (fails(function () {
  // IE8-
  test.sort(undefined);
}) || !fails(function () {
  // V8 bug
  test.sort(null);
  // Old WebKit
}) || !__webpack_require__(16)($sort)), 'Array', {
  // 22.1.3.25 Array.prototype.sort(comparefn)
  sort: function sort(comparefn) {
    return comparefn === undefined
      ? $sort.call(toObject(this))
      : $sort.call(toObject(this), aFunction(comparefn));
  }
});


/***/ }),
/* 190 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(41)('Array');


/***/ }),
/* 191 */
/***/ (function(module, exports, __webpack_require__) {

// 20.3.3.1 / 15.9.4.4 Date.now()
var $export = __webpack_require__(0);

$export($export.S, 'Date', { now: function () { return new Date().getTime(); } });


/***/ }),
/* 192 */
/***/ (function(module, exports, __webpack_require__) {

// 20.3.4.36 / 15.9.5.43 Date.prototype.toISOString()
var $export = __webpack_require__(0);
var toISOString = __webpack_require__(163);

// PhantomJS / old WebKit has a broken implementations
$export($export.P + $export.F * (Date.prototype.toISOString !== toISOString), 'Date', {
  toISOString: toISOString
});


/***/ }),
/* 193 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(0);
var toObject = __webpack_require__(10);
var toPrimitive = __webpack_require__(27);

$export($export.P + $export.F * __webpack_require__(2)(function () {
  return new Date(NaN).toJSON() !== null
    || Date.prototype.toJSON.call({ toISOString: function () { return 1; } }) !== 1;
}), 'Date', {
  // eslint-disable-next-line no-unused-vars
  toJSON: function toJSON(key) {
    var O = toObject(this);
    var pv = toPrimitive(O);
    return typeof pv == 'number' && !isFinite(pv) ? null : O.toISOString();
  }
});


/***/ }),
/* 194 */
/***/ (function(module, exports, __webpack_require__) {

var TO_PRIMITIVE = __webpack_require__(5)('toPrimitive');
var proto = Date.prototype;

if (!(TO_PRIMITIVE in proto)) __webpack_require__(14)(proto, TO_PRIMITIVE, __webpack_require__(164));


/***/ }),
/* 195 */
/***/ (function(module, exports, __webpack_require__) {

var DateProto = Date.prototype;
var INVALID_DATE = 'Invalid Date';
var TO_STRING = 'toString';
var $toString = DateProto[TO_STRING];
var getTime = DateProto.getTime;
if (new Date(NaN) + '' != INVALID_DATE) {
  __webpack_require__(11)(DateProto, TO_STRING, function toString() {
    var value = getTime.call(this);
    // eslint-disable-next-line no-self-compare
    return value === value ? $toString.call(this) : INVALID_DATE;
  });
}


/***/ }),
/* 196 */
/***/ (function(module, exports, __webpack_require__) {

// 19.2.3.2 / 15.3.4.5 Function.prototype.bind(thisArg, args...)
var $export = __webpack_require__(0);

$export($export.P, 'Function', { bind: __webpack_require__(99) });


/***/ }),
/* 197 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var isObject = __webpack_require__(4);
var getPrototypeOf = __webpack_require__(32);
var HAS_INSTANCE = __webpack_require__(5)('hasInstance');
var FunctionProto = Function.prototype;
// 19.2.3.6 Function.prototype[@@hasInstance](V)
if (!(HAS_INSTANCE in FunctionProto)) __webpack_require__(9).f(FunctionProto, HAS_INSTANCE, { value: function (O) {
  if (typeof this != 'function' || !isObject(O)) return false;
  if (!isObject(this.prototype)) return O instanceof this;
  // for environment w/o native `@@hasInstance` logic enough `instanceof`, but add this:
  while (O = getPrototypeOf(O)) if (this.prototype === O) return true;
  return false;
} });


/***/ }),
/* 198 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(9).f;
var FProto = Function.prototype;
var nameRE = /^\s*function ([^ (]*)/;
var NAME = 'name';

// 19.2.4.2 name
NAME in FProto || __webpack_require__(8) && dP(FProto, NAME, {
  configurable: true,
  get: function () {
    try {
      return ('' + this).match(nameRE)[1];
    } catch (e) {
      return '';
    }
  }
});


/***/ }),
/* 199 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var strong = __webpack_require__(100);
var validate = __webpack_require__(37);
var MAP = 'Map';

// 23.1 Map Objects
module.exports = __webpack_require__(53)(MAP, function (get) {
  return function Map() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.1.3.6 Map.prototype.get(key)
  get: function get(key) {
    var entry = strong.getEntry(validate(this, MAP), key);
    return entry && entry.v;
  },
  // 23.1.3.9 Map.prototype.set(key, value)
  set: function set(key, value) {
    return strong.def(validate(this, MAP), key === 0 ? 0 : key, value);
  }
}, strong, true);


/***/ }),
/* 200 */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.3 Math.acosh(x)
var $export = __webpack_require__(0);
var log1p = __webpack_require__(108);
var sqrt = Math.sqrt;
var $acosh = Math.acosh;

$export($export.S + $export.F * !($acosh
  // V8 bug: https://code.google.com/p/v8/issues/detail?id=3509
  && Math.floor($acosh(Number.MAX_VALUE)) == 710
  // Tor Browser bug: Math.acosh(Infinity) -> NaN
  && $acosh(Infinity) == Infinity
), 'Math', {
  acosh: function acosh(x) {
    return (x = +x) < 1 ? NaN : x > 94906265.62425156
      ? Math.log(x) + Math.LN2
      : log1p(x - 1 + sqrt(x - 1) * sqrt(x + 1));
  }
});


/***/ }),
/* 201 */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.5 Math.asinh(x)
var $export = __webpack_require__(0);
var $asinh = Math.asinh;

function asinh(x) {
  return !isFinite(x = +x) || x == 0 ? x : x < 0 ? -asinh(-x) : Math.log(x + Math.sqrt(x * x + 1));
}

// Tor Browser bug: Math.asinh(0) -> -0
$export($export.S + $export.F * !($asinh && 1 / $asinh(0) > 0), 'Math', { asinh: asinh });


/***/ }),
/* 202 */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.7 Math.atanh(x)
var $export = __webpack_require__(0);
var $atanh = Math.atanh;

// Tor Browser bug: Math.atanh(-0) -> 0
$export($export.S + $export.F * !($atanh && 1 / $atanh(-0) < 0), 'Math', {
  atanh: function atanh(x) {
    return (x = +x) == 0 ? x : Math.log((1 + x) / (1 - x)) / 2;
  }
});


/***/ }),
/* 203 */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.9 Math.cbrt(x)
var $export = __webpack_require__(0);
var sign = __webpack_require__(79);

$export($export.S, 'Math', {
  cbrt: function cbrt(x) {
    return sign(x = +x) * Math.pow(Math.abs(x), 1 / 3);
  }
});


/***/ }),
/* 204 */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.11 Math.clz32(x)
var $export = __webpack_require__(0);

$export($export.S, 'Math', {
  clz32: function clz32(x) {
    return (x >>>= 0) ? 31 - Math.floor(Math.log(x + 0.5) * Math.LOG2E) : 32;
  }
});


/***/ }),
/* 205 */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.12 Math.cosh(x)
var $export = __webpack_require__(0);
var exp = Math.exp;

$export($export.S, 'Math', {
  cosh: function cosh(x) {
    return (exp(x = +x) + exp(-x)) / 2;
  }
});


/***/ }),
/* 206 */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.14 Math.expm1(x)
var $export = __webpack_require__(0);
var $expm1 = __webpack_require__(78);

$export($export.S + $export.F * ($expm1 != Math.expm1), 'Math', { expm1: $expm1 });


/***/ }),
/* 207 */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.16 Math.fround(x)
var $export = __webpack_require__(0);

$export($export.S, 'Math', { fround: __webpack_require__(168) });


/***/ }),
/* 208 */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.17 Math.hypot([value1[, value2[, … ]]])
var $export = __webpack_require__(0);
var abs = Math.abs;

$export($export.S, 'Math', {
  hypot: function hypot(value1, value2) { // eslint-disable-line no-unused-vars
    var sum = 0;
    var i = 0;
    var aLen = arguments.length;
    var larg = 0;
    var arg, div;
    while (i < aLen) {
      arg = abs(arguments[i++]);
      if (larg < arg) {
        div = larg / arg;
        sum = sum * div * div + 1;
        larg = arg;
      } else if (arg > 0) {
        div = arg / larg;
        sum += div * div;
      } else sum += arg;
    }
    return larg === Infinity ? Infinity : larg * Math.sqrt(sum);
  }
});


/***/ }),
/* 209 */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.18 Math.imul(x, y)
var $export = __webpack_require__(0);
var $imul = Math.imul;

// some WebKit versions fails with big numbers, some has wrong arity
$export($export.S + $export.F * __webpack_require__(2)(function () {
  return $imul(0xffffffff, 5) != -5 || $imul.length != 2;
}), 'Math', {
  imul: function imul(x, y) {
    var UINT16 = 0xffff;
    var xn = +x;
    var yn = +y;
    var xl = UINT16 & xn;
    var yl = UINT16 & yn;
    return 0 | xl * yl + ((UINT16 & xn >>> 16) * yl + xl * (UINT16 & yn >>> 16) << 16 >>> 0);
  }
});


/***/ }),
/* 210 */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.21 Math.log10(x)
var $export = __webpack_require__(0);

$export($export.S, 'Math', {
  log10: function log10(x) {
    return Math.log(x) * Math.LOG10E;
  }
});


/***/ }),
/* 211 */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.20 Math.log1p(x)
var $export = __webpack_require__(0);

$export($export.S, 'Math', { log1p: __webpack_require__(108) });


/***/ }),
/* 212 */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.22 Math.log2(x)
var $export = __webpack_require__(0);

$export($export.S, 'Math', {
  log2: function log2(x) {
    return Math.log(x) / Math.LN2;
  }
});


/***/ }),
/* 213 */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.28 Math.sign(x)
var $export = __webpack_require__(0);

$export($export.S, 'Math', { sign: __webpack_require__(79) });


/***/ }),
/* 214 */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.30 Math.sinh(x)
var $export = __webpack_require__(0);
var expm1 = __webpack_require__(78);
var exp = Math.exp;

// V8 near Chromium 38 has a problem with very small numbers
$export($export.S + $export.F * __webpack_require__(2)(function () {
  return !Math.sinh(-2e-17) != -2e-17;
}), 'Math', {
  sinh: function sinh(x) {
    return Math.abs(x = +x) < 1
      ? (expm1(x) - expm1(-x)) / 2
      : (exp(x - 1) - exp(-x - 1)) * (Math.E / 2);
  }
});


/***/ }),
/* 215 */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.33 Math.tanh(x)
var $export = __webpack_require__(0);
var expm1 = __webpack_require__(78);
var exp = Math.exp;

$export($export.S, 'Math', {
  tanh: function tanh(x) {
    var a = expm1(x = +x);
    var b = expm1(-x);
    return a == Infinity ? 1 : b == Infinity ? -1 : (a - b) / (exp(x) + exp(-x));
  }
});


/***/ }),
/* 216 */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.34 Math.trunc(x)
var $export = __webpack_require__(0);

$export($export.S, 'Math', {
  trunc: function trunc(it) {
    return (it > 0 ? Math.floor : Math.ceil)(it);
  }
});


/***/ }),
/* 217 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(3);
var has = __webpack_require__(13);
var cof = __webpack_require__(23);
var inheritIfRequired = __webpack_require__(74);
var toPrimitive = __webpack_require__(27);
var fails = __webpack_require__(2);
var gOPN = __webpack_require__(31).f;
var gOPD = __webpack_require__(20).f;
var dP = __webpack_require__(9).f;
var $trim = __webpack_require__(43).trim;
var NUMBER = 'Number';
var $Number = global[NUMBER];
var Base = $Number;
var proto = $Number.prototype;
// Opera ~12 has broken Object#toString
var BROKEN_COF = cof(__webpack_require__(30)(proto)) == NUMBER;
var TRIM = 'trim' in String.prototype;

// 7.1.3 ToNumber(argument)
var toNumber = function (argument) {
  var it = toPrimitive(argument, false);
  if (typeof it == 'string' && it.length > 2) {
    it = TRIM ? it.trim() : $trim(it, 3);
    var first = it.charCodeAt(0);
    var third, radix, maxCode;
    if (first === 43 || first === 45) {
      third = it.charCodeAt(2);
      if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
    } else if (first === 48) {
      switch (it.charCodeAt(1)) {
        case 66: case 98: radix = 2; maxCode = 49; break; // fast equal /^0b[01]+$/i
        case 79: case 111: radix = 8; maxCode = 55; break; // fast equal /^0o[0-7]+$/i
        default: return +it;
      }
      for (var digits = it.slice(2), i = 0, l = digits.length, code; i < l; i++) {
        code = digits.charCodeAt(i);
        // parseInt parses a string to a first unavailable symbol
        // but ToNumber should return NaN if a string contains unavailable symbols
        if (code < 48 || code > maxCode) return NaN;
      } return parseInt(digits, radix);
    }
  } return +it;
};

if (!$Number(' 0o1') || !$Number('0b1') || $Number('+0x1')) {
  $Number = function Number(value) {
    var it = arguments.length < 1 ? 0 : value;
    var that = this;
    return that instanceof $Number
      // check on 1..constructor(foo) case
      && (BROKEN_COF ? fails(function () { proto.valueOf.call(that); }) : cof(that) != NUMBER)
        ? inheritIfRequired(new Base(toNumber(it)), that, $Number) : toNumber(it);
  };
  for (var keys = __webpack_require__(8) ? gOPN(Base) : (
    // ES3:
    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
    // ES6 (in case, if modules with ES6 Number statics required before):
    'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' +
    'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger'
  ).split(','), j = 0, key; keys.length > j; j++) {
    if (has(Base, key = keys[j]) && !has($Number, key)) {
      dP($Number, key, gOPD(Base, key));
    }
  }
  $Number.prototype = proto;
  proto.constructor = $Number;
  __webpack_require__(11)(global, NUMBER, $Number);
}


/***/ }),
/* 218 */
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.1 Number.EPSILON
var $export = __webpack_require__(0);

$export($export.S, 'Number', { EPSILON: Math.pow(2, -52) });


/***/ }),
/* 219 */
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.2 Number.isFinite(number)
var $export = __webpack_require__(0);
var _isFinite = __webpack_require__(3).isFinite;

$export($export.S, 'Number', {
  isFinite: function isFinite(it) {
    return typeof it == 'number' && _isFinite(it);
  }
});


/***/ }),
/* 220 */
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.3 Number.isInteger(number)
var $export = __webpack_require__(0);

$export($export.S, 'Number', { isInteger: __webpack_require__(104) });


/***/ }),
/* 221 */
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.4 Number.isNaN(number)
var $export = __webpack_require__(0);

$export($export.S, 'Number', {
  isNaN: function isNaN(number) {
    // eslint-disable-next-line no-self-compare
    return number != number;
  }
});


/***/ }),
/* 222 */
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.5 Number.isSafeInteger(number)
var $export = __webpack_require__(0);
var isInteger = __webpack_require__(104);
var abs = Math.abs;

$export($export.S, 'Number', {
  isSafeInteger: function isSafeInteger(number) {
    return isInteger(number) && abs(number) <= 0x1fffffffffffff;
  }
});


/***/ }),
/* 223 */
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.6 Number.MAX_SAFE_INTEGER
var $export = __webpack_require__(0);

$export($export.S, 'Number', { MAX_SAFE_INTEGER: 0x1fffffffffffff });


/***/ }),
/* 224 */
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.10 Number.MIN_SAFE_INTEGER
var $export = __webpack_require__(0);

$export($export.S, 'Number', { MIN_SAFE_INTEGER: -0x1fffffffffffff });


/***/ }),
/* 225 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(0);
var $parseFloat = __webpack_require__(116);
// 20.1.2.12 Number.parseFloat(string)
$export($export.S + $export.F * (Number.parseFloat != $parseFloat), 'Number', { parseFloat: $parseFloat });


/***/ }),
/* 226 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(0);
var $parseInt = __webpack_require__(117);
// 20.1.2.13 Number.parseInt(string, radix)
$export($export.S + $export.F * (Number.parseInt != $parseInt), 'Number', { parseInt: $parseInt });


/***/ }),
/* 227 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(0);
var toInteger = __webpack_require__(22);
var aNumberValue = __webpack_require__(95);
var repeat = __webpack_require__(85);
var $toFixed = 1.0.toFixed;
var floor = Math.floor;
var data = [0, 0, 0, 0, 0, 0];
var ERROR = 'Number.toFixed: incorrect invocation!';
var ZERO = '0';

var multiply = function (n, c) {
  var i = -1;
  var c2 = c;
  while (++i < 6) {
    c2 += n * data[i];
    data[i] = c2 % 1e7;
    c2 = floor(c2 / 1e7);
  }
};
var divide = function (n) {
  var i = 6;
  var c = 0;
  while (--i >= 0) {
    c += data[i];
    data[i] = floor(c / n);
    c = (c % n) * 1e7;
  }
};
var numToString = function () {
  var i = 6;
  var s = '';
  while (--i >= 0) {
    if (s !== '' || i === 0 || data[i] !== 0) {
      var t = String(data[i]);
      s = s === '' ? t : s + repeat.call(ZERO, 7 - t.length) + t;
    }
  } return s;
};
var pow = function (x, n, acc) {
  return n === 0 ? acc : n % 2 === 1 ? pow(x, n - 1, acc * x) : pow(x * x, n / 2, acc);
};
var log = function (x) {
  var n = 0;
  var x2 = x;
  while (x2 >= 4096) {
    n += 12;
    x2 /= 4096;
  }
  while (x2 >= 2) {
    n += 1;
    x2 /= 2;
  } return n;
};

$export($export.P + $export.F * (!!$toFixed && (
  0.00008.toFixed(3) !== '0.000' ||
  0.9.toFixed(0) !== '1' ||
  1.255.toFixed(2) !== '1.25' ||
  1000000000000000128.0.toFixed(0) !== '1000000000000000128'
) || !__webpack_require__(2)(function () {
  // V8 ~ Android 4.3-
  $toFixed.call({});
})), 'Number', {
  toFixed: function toFixed(fractionDigits) {
    var x = aNumberValue(this, ERROR);
    var f = toInteger(fractionDigits);
    var s = '';
    var m = ZERO;
    var e, z, j, k;
    if (f < 0 || f > 20) throw RangeError(ERROR);
    // eslint-disable-next-line no-self-compare
    if (x != x) return 'NaN';
    if (x <= -1e21 || x >= 1e21) return String(x);
    if (x < 0) {
      s = '-';
      x = -x;
    }
    if (x > 1e-21) {
      e = log(x * pow(2, 69, 1)) - 69;
      z = e < 0 ? x * pow(2, -e, 1) : x / pow(2, e, 1);
      z *= 0x10000000000000;
      e = 52 - e;
      if (e > 0) {
        multiply(0, z);
        j = f;
        while (j >= 7) {
          multiply(1e7, 0);
          j -= 7;
        }
        multiply(pow(10, j, 1), 0);
        j = e - 1;
        while (j >= 23) {
          divide(1 << 23);
          j -= 23;
        }
        divide(1 << j);
        multiply(1, 1);
        divide(2);
        m = numToString();
      } else {
        multiply(0, z);
        multiply(1 << -e, 0);
        m = numToString() + repeat.call(ZERO, f);
      }
    }
    if (f > 0) {
      k = m.length;
      m = s + (k <= f ? '0.' + repeat.call(ZERO, f - k) + m : m.slice(0, k - f) + '.' + m.slice(k - f));
    } else {
      m = s + m;
    } return m;
  }
});


/***/ }),
/* 228 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(0);
var $fails = __webpack_require__(2);
var aNumberValue = __webpack_require__(95);
var $toPrecision = 1.0.toPrecision;

$export($export.P + $export.F * ($fails(function () {
  // IE7-
  return $toPrecision.call(1, undefined) !== '1';
}) || !$fails(function () {
  // V8 ~ Android 4.3-
  $toPrecision.call({});
})), 'Number', {
  toPrecision: function toPrecision(precision) {
    var that = aNumberValue(this, 'Number#toPrecision: incorrect invocation!');
    return precision === undefined ? $toPrecision.call(that) : $toPrecision.call(that, precision);
  }
});


/***/ }),
/* 229 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(0);

$export($export.S + $export.F, 'Object', { assign: __webpack_require__(110) });


/***/ }),
/* 230 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(0);
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, 'Object', { create: __webpack_require__(30) });


/***/ }),
/* 231 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(0);
// 19.1.2.3 / 15.2.3.7 Object.defineProperties(O, Properties)
$export($export.S + $export.F * !__webpack_require__(8), 'Object', { defineProperties: __webpack_require__(111) });


/***/ }),
/* 232 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(0);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(8), 'Object', { defineProperty: __webpack_require__(9).f });


/***/ }),
/* 233 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.5 Object.freeze(O)
var isObject = __webpack_require__(4);
var meta = __webpack_require__(26).onFreeze;

__webpack_require__(21)('freeze', function ($freeze) {
  return function freeze(it) {
    return $freeze && isObject(it) ? $freeze(meta(it)) : it;
  };
});


/***/ }),
/* 234 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
var toIObject = __webpack_require__(15);
var $getOwnPropertyDescriptor = __webpack_require__(20).f;

__webpack_require__(21)('getOwnPropertyDescriptor', function () {
  return function getOwnPropertyDescriptor(it, key) {
    return $getOwnPropertyDescriptor(toIObject(it), key);
  };
});


/***/ }),
/* 235 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 Object.getOwnPropertyNames(O)
__webpack_require__(21)('getOwnPropertyNames', function () {
  return __webpack_require__(112).f;
});


/***/ }),
/* 236 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 Object.getPrototypeOf(O)
var toObject = __webpack_require__(10);
var $getPrototypeOf = __webpack_require__(32);

__webpack_require__(21)('getPrototypeOf', function () {
  return function getPrototypeOf(it) {
    return $getPrototypeOf(toObject(it));
  };
});


/***/ }),
/* 237 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.11 Object.isExtensible(O)
var isObject = __webpack_require__(4);

__webpack_require__(21)('isExtensible', function ($isExtensible) {
  return function isExtensible(it) {
    return isObject(it) ? $isExtensible ? $isExtensible(it) : true : false;
  };
});


/***/ }),
/* 238 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.12 Object.isFrozen(O)
var isObject = __webpack_require__(4);

__webpack_require__(21)('isFrozen', function ($isFrozen) {
  return function isFrozen(it) {
    return isObject(it) ? $isFrozen ? $isFrozen(it) : false : true;
  };
});


/***/ }),
/* 239 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.13 Object.isSealed(O)
var isObject = __webpack_require__(4);

__webpack_require__(21)('isSealed', function ($isSealed) {
  return function isSealed(it) {
    return isObject(it) ? $isSealed ? $isSealed(it) : false : true;
  };
});


/***/ }),
/* 240 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.10 Object.is(value1, value2)
var $export = __webpack_require__(0);
$export($export.S, 'Object', { is: __webpack_require__(119) });


/***/ }),
/* 241 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__(10);
var $keys = __webpack_require__(33);

__webpack_require__(21)('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


/***/ }),
/* 242 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.15 Object.preventExtensions(O)
var isObject = __webpack_require__(4);
var meta = __webpack_require__(26).onFreeze;

__webpack_require__(21)('preventExtensions', function ($preventExtensions) {
  return function preventExtensions(it) {
    return $preventExtensions && isObject(it) ? $preventExtensions(meta(it)) : it;
  };
});


/***/ }),
/* 243 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.17 Object.seal(O)
var isObject = __webpack_require__(4);
var meta = __webpack_require__(26).onFreeze;

__webpack_require__(21)('seal', function ($seal) {
  return function seal(it) {
    return $seal && isObject(it) ? $seal(meta(it)) : it;
  };
});


/***/ }),
/* 244 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = __webpack_require__(0);
$export($export.S, 'Object', { setPrototypeOf: __webpack_require__(81).set });


/***/ }),
/* 245 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.3.6 Object.prototype.toString()
var classof = __webpack_require__(45);
var test = {};
test[__webpack_require__(5)('toStringTag')] = 'z';
if (test + '' != '[object z]') {
  __webpack_require__(11)(Object.prototype, 'toString', function toString() {
    return '[object ' + classof(this) + ']';
  }, true);
}


/***/ }),
/* 246 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(0);
var $parseFloat = __webpack_require__(116);
// 18.2.4 parseFloat(string)
$export($export.G + $export.F * (parseFloat != $parseFloat), { parseFloat: $parseFloat });


/***/ }),
/* 247 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(0);
var $parseInt = __webpack_require__(117);
// 18.2.5 parseInt(string, radix)
$export($export.G + $export.F * (parseInt != $parseInt), { parseInt: $parseInt });


/***/ }),
/* 248 */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.1 Reflect.apply(target, thisArgument, argumentsList)
var $export = __webpack_require__(0);
var aFunction = __webpack_require__(17);
var anObject = __webpack_require__(1);
var rApply = (__webpack_require__(3).Reflect || {}).apply;
var fApply = Function.apply;
// MS Edge argumentsList argument is optional
$export($export.S + $export.F * !__webpack_require__(2)(function () {
  rApply(function () { /* empty */ });
}), 'Reflect', {
  apply: function apply(target, thisArgument, argumentsList) {
    var T = aFunction(target);
    var L = anObject(argumentsList);
    return rApply ? rApply(T, thisArgument, L) : fApply.call(T, thisArgument, L);
  }
});


/***/ }),
/* 249 */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.2 Reflect.construct(target, argumentsList [, newTarget])
var $export = __webpack_require__(0);
var create = __webpack_require__(30);
var aFunction = __webpack_require__(17);
var anObject = __webpack_require__(1);
var isObject = __webpack_require__(4);
var fails = __webpack_require__(2);
var bind = __webpack_require__(99);
var rConstruct = (__webpack_require__(3).Reflect || {}).construct;

// MS Edge supports only 2 arguments and argumentsList argument is optional
// FF Nightly sets third argument as `new.target`, but does not create `this` from it
var NEW_TARGET_BUG = fails(function () {
  function F() { /* empty */ }
  return !(rConstruct(function () { /* empty */ }, [], F) instanceof F);
});
var ARGS_BUG = !fails(function () {
  rConstruct(function () { /* empty */ });
});

$export($export.S + $export.F * (NEW_TARGET_BUG || ARGS_BUG), 'Reflect', {
  construct: function construct(Target, args /* , newTarget */) {
    aFunction(Target);
    anObject(args);
    var newTarget = arguments.length < 3 ? Target : aFunction(arguments[2]);
    if (ARGS_BUG && !NEW_TARGET_BUG) return rConstruct(Target, args, newTarget);
    if (Target == newTarget) {
      // w/o altered newTarget, optimization for 0-4 arguments
      switch (args.length) {
        case 0: return new Target();
        case 1: return new Target(args[0]);
        case 2: return new Target(args[0], args[1]);
        case 3: return new Target(args[0], args[1], args[2]);
        case 4: return new Target(args[0], args[1], args[2], args[3]);
      }
      // w/o altered newTarget, lot of arguments case
      var $args = [null];
      $args.push.apply($args, args);
      return new (bind.apply(Target, $args))();
    }
    // with altered newTarget, not support built-in constructors
    var proto = newTarget.prototype;
    var instance = create(isObject(proto) ? proto : Object.prototype);
    var result = Function.apply.call(Target, instance, args);
    return isObject(result) ? result : instance;
  }
});


/***/ }),
/* 250 */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.3 Reflect.defineProperty(target, propertyKey, attributes)
var dP = __webpack_require__(9);
var $export = __webpack_require__(0);
var anObject = __webpack_require__(1);
var toPrimitive = __webpack_require__(27);

// MS Edge has broken Reflect.defineProperty - throwing instead of returning false
$export($export.S + $export.F * __webpack_require__(2)(function () {
  // eslint-disable-next-line no-undef
  Reflect.defineProperty(dP.f({}, 1, { value: 1 }), 1, { value: 2 });
}), 'Reflect', {
  defineProperty: function defineProperty(target, propertyKey, attributes) {
    anObject(target);
    propertyKey = toPrimitive(propertyKey, true);
    anObject(attributes);
    try {
      dP.f(target, propertyKey, attributes);
      return true;
    } catch (e) {
      return false;
    }
  }
});


/***/ }),
/* 251 */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.4 Reflect.deleteProperty(target, propertyKey)
var $export = __webpack_require__(0);
var gOPD = __webpack_require__(20).f;
var anObject = __webpack_require__(1);

$export($export.S, 'Reflect', {
  deleteProperty: function deleteProperty(target, propertyKey) {
    var desc = gOPD(anObject(target), propertyKey);
    return desc && !desc.configurable ? false : delete target[propertyKey];
  }
});


/***/ }),
/* 252 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 26.1.5 Reflect.enumerate(target)
var $export = __webpack_require__(0);
var anObject = __webpack_require__(1);
var Enumerate = function (iterated) {
  this._t = anObject(iterated); // target
  this._i = 0;                  // next index
  var keys = this._k = [];      // keys
  var key;
  for (key in iterated) keys.push(key);
};
__webpack_require__(106)(Enumerate, 'Object', function () {
  var that = this;
  var keys = that._k;
  var key;
  do {
    if (that._i >= keys.length) return { value: undefined, done: true };
  } while (!((key = keys[that._i++]) in that._t));
  return { value: key, done: false };
});

$export($export.S, 'Reflect', {
  enumerate: function enumerate(target) {
    return new Enumerate(target);
  }
});


/***/ }),
/* 253 */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.7 Reflect.getOwnPropertyDescriptor(target, propertyKey)
var gOPD = __webpack_require__(20);
var $export = __webpack_require__(0);
var anObject = __webpack_require__(1);

$export($export.S, 'Reflect', {
  getOwnPropertyDescriptor: function getOwnPropertyDescriptor(target, propertyKey) {
    return gOPD.f(anObject(target), propertyKey);
  }
});


/***/ }),
/* 254 */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.8 Reflect.getPrototypeOf(target)
var $export = __webpack_require__(0);
var getProto = __webpack_require__(32);
var anObject = __webpack_require__(1);

$export($export.S, 'Reflect', {
  getPrototypeOf: function getPrototypeOf(target) {
    return getProto(anObject(target));
  }
});


/***/ }),
/* 255 */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.6 Reflect.get(target, propertyKey [, receiver])
var gOPD = __webpack_require__(20);
var getPrototypeOf = __webpack_require__(32);
var has = __webpack_require__(13);
var $export = __webpack_require__(0);
var isObject = __webpack_require__(4);
var anObject = __webpack_require__(1);

function get(target, propertyKey /* , receiver */) {
  var receiver = arguments.length < 3 ? target : arguments[2];
  var desc, proto;
  if (anObject(target) === receiver) return target[propertyKey];
  if (desc = gOPD.f(target, propertyKey)) return has(desc, 'value')
    ? desc.value
    : desc.get !== undefined
      ? desc.get.call(receiver)
      : undefined;
  if (isObject(proto = getPrototypeOf(target))) return get(proto, propertyKey, receiver);
}

$export($export.S, 'Reflect', { get: get });


/***/ }),
/* 256 */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.9 Reflect.has(target, propertyKey)
var $export = __webpack_require__(0);

$export($export.S, 'Reflect', {
  has: function has(target, propertyKey) {
    return propertyKey in target;
  }
});


/***/ }),
/* 257 */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.10 Reflect.isExtensible(target)
var $export = __webpack_require__(0);
var anObject = __webpack_require__(1);
var $isExtensible = Object.isExtensible;

$export($export.S, 'Reflect', {
  isExtensible: function isExtensible(target) {
    anObject(target);
    return $isExtensible ? $isExtensible(target) : true;
  }
});


/***/ }),
/* 258 */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.11 Reflect.ownKeys(target)
var $export = __webpack_require__(0);

$export($export.S, 'Reflect', { ownKeys: __webpack_require__(115) });


/***/ }),
/* 259 */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.12 Reflect.preventExtensions(target)
var $export = __webpack_require__(0);
var anObject = __webpack_require__(1);
var $preventExtensions = Object.preventExtensions;

$export($export.S, 'Reflect', {
  preventExtensions: function preventExtensions(target) {
    anObject(target);
    try {
      if ($preventExtensions) $preventExtensions(target);
      return true;
    } catch (e) {
      return false;
    }
  }
});


/***/ }),
/* 260 */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.14 Reflect.setPrototypeOf(target, proto)
var $export = __webpack_require__(0);
var setProto = __webpack_require__(81);

if (setProto) $export($export.S, 'Reflect', {
  setPrototypeOf: function setPrototypeOf(target, proto) {
    setProto.check(target, proto);
    try {
      setProto.set(target, proto);
      return true;
    } catch (e) {
      return false;
    }
  }
});


/***/ }),
/* 261 */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.13 Reflect.set(target, propertyKey, V [, receiver])
var dP = __webpack_require__(9);
var gOPD = __webpack_require__(20);
var getPrototypeOf = __webpack_require__(32);
var has = __webpack_require__(13);
var $export = __webpack_require__(0);
var createDesc = __webpack_require__(34);
var anObject = __webpack_require__(1);
var isObject = __webpack_require__(4);

function set(target, propertyKey, V /* , receiver */) {
  var receiver = arguments.length < 4 ? target : arguments[3];
  var ownDesc = gOPD.f(anObject(target), propertyKey);
  var existingDescriptor, proto;
  if (!ownDesc) {
    if (isObject(proto = getPrototypeOf(target))) {
      return set(proto, propertyKey, V, receiver);
    }
    ownDesc = createDesc(0);
  }
  if (has(ownDesc, 'value')) {
    if (ownDesc.writable === false || !isObject(receiver)) return false;
    if (existingDescriptor = gOPD.f(receiver, propertyKey)) {
      if (existingDescriptor.get || existingDescriptor.set || existingDescriptor.writable === false) return false;
      existingDescriptor.value = V;
      dP.f(receiver, propertyKey, existingDescriptor);
    } else dP.f(receiver, propertyKey, createDesc(0, V));
    return true;
  }
  return ownDesc.set === undefined ? false : (ownDesc.set.call(receiver, V), true);
}

$export($export.S, 'Reflect', { set: set });


/***/ }),
/* 262 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(3);
var inheritIfRequired = __webpack_require__(74);
var dP = __webpack_require__(9).f;
var gOPN = __webpack_require__(31).f;
var isRegExp = __webpack_require__(76);
var $flags = __webpack_require__(55);
var $RegExp = global.RegExp;
var Base = $RegExp;
var proto = $RegExp.prototype;
var re1 = /a/g;
var re2 = /a/g;
// "new" creates a new object, old webkit buggy here
var CORRECT_NEW = new $RegExp(re1) !== re1;

if (__webpack_require__(8) && (!CORRECT_NEW || __webpack_require__(2)(function () {
  re2[__webpack_require__(5)('match')] = false;
  // RegExp constructor can alter flags and IsRegExp works correct with @@match
  return $RegExp(re1) != re1 || $RegExp(re2) == re2 || $RegExp(re1, 'i') != '/a/i';
}))) {
  $RegExp = function RegExp(p, f) {
    var tiRE = this instanceof $RegExp;
    var piRE = isRegExp(p);
    var fiU = f === undefined;
    return !tiRE && piRE && p.constructor === $RegExp && fiU ? p
      : inheritIfRequired(CORRECT_NEW
        ? new Base(piRE && !fiU ? p.source : p, f)
        : Base((piRE = p instanceof $RegExp) ? p.source : p, piRE && fiU ? $flags.call(p) : f)
      , tiRE ? this : proto, $RegExp);
  };
  var proxy = function (key) {
    key in $RegExp || dP($RegExp, key, {
      configurable: true,
      get: function () { return Base[key]; },
      set: function (it) { Base[key] = it; }
    });
  };
  for (var keys = gOPN(Base), i = 0; keys.length > i;) proxy(keys[i++]);
  proto.constructor = $RegExp;
  $RegExp.prototype = proto;
  __webpack_require__(11)(global, 'RegExp', $RegExp);
}

__webpack_require__(41)('RegExp');


/***/ }),
/* 263 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var anObject = __webpack_require__(1);
var toLength = __webpack_require__(6);
var advanceStringIndex = __webpack_require__(67);
var regExpExec = __webpack_require__(60);

// @@match logic
__webpack_require__(54)('match', 1, function (defined, MATCH, $match, maybeCallNative) {
  return [
    // `String.prototype.match` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.match
    function match(regexp) {
      var O = defined(this);
      var fn = regexp == undefined ? undefined : regexp[MATCH];
      return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
    },
    // `RegExp.prototype[@@match]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@match
    function (regexp) {
      var res = maybeCallNative($match, regexp, this);
      if (res.done) return res.value;
      var rx = anObject(regexp);
      var S = String(this);
      if (!rx.global) return regExpExec(rx, S);
      var fullUnicode = rx.unicode;
      rx.lastIndex = 0;
      var A = [];
      var n = 0;
      var result;
      while ((result = regExpExec(rx, S)) !== null) {
        var matchStr = String(result[0]);
        A[n] = matchStr;
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
        n++;
      }
      return n === 0 ? null : A;
    }
  ];
});


/***/ }),
/* 264 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var anObject = __webpack_require__(1);
var toObject = __webpack_require__(10);
var toLength = __webpack_require__(6);
var toInteger = __webpack_require__(22);
var advanceStringIndex = __webpack_require__(67);
var regExpExec = __webpack_require__(60);
var max = Math.max;
var min = Math.min;
var floor = Math.floor;
var SUBSTITUTION_SYMBOLS = /\$([$&`']|\d\d?|<[^>]*>)/g;
var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&`']|\d\d?)/g;

var maybeToString = function (it) {
  return it === undefined ? it : String(it);
};

// @@replace logic
__webpack_require__(54)('replace', 2, function (defined, REPLACE, $replace, maybeCallNative) {
  return [
    // `String.prototype.replace` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.replace
    function replace(searchValue, replaceValue) {
      var O = defined(this);
      var fn = searchValue == undefined ? undefined : searchValue[REPLACE];
      return fn !== undefined
        ? fn.call(searchValue, O, replaceValue)
        : $replace.call(String(O), searchValue, replaceValue);
    },
    // `RegExp.prototype[@@replace]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@replace
    function (regexp, replaceValue) {
      var res = maybeCallNative($replace, regexp, this, replaceValue);
      if (res.done) return res.value;

      var rx = anObject(regexp);
      var S = String(this);
      var functionalReplace = typeof replaceValue === 'function';
      if (!functionalReplace) replaceValue = String(replaceValue);
      var global = rx.global;
      if (global) {
        var fullUnicode = rx.unicode;
        rx.lastIndex = 0;
      }
      var results = [];
      while (true) {
        var result = regExpExec(rx, S);
        if (result === null) break;
        results.push(result);
        if (!global) break;
        var matchStr = String(result[0]);
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
      }
      var accumulatedResult = '';
      var nextSourcePosition = 0;
      for (var i = 0; i < results.length; i++) {
        result = results[i];
        var matched = String(result[0]);
        var position = max(min(toInteger(result.index), S.length), 0);
        var captures = [];
        // NOTE: This is equivalent to
        //   captures = result.slice(1).map(maybeToString)
        // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
        // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
        // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
        for (var j = 1; j < result.length; j++) captures.push(maybeToString(result[j]));
        var namedCaptures = result.groups;
        if (functionalReplace) {
          var replacerArgs = [matched].concat(captures, position, S);
          if (namedCaptures !== undefined) replacerArgs.push(namedCaptures);
          var replacement = String(replaceValue.apply(undefined, replacerArgs));
        } else {
          replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
        }
        if (position >= nextSourcePosition) {
          accumulatedResult += S.slice(nextSourcePosition, position) + replacement;
          nextSourcePosition = position + matched.length;
        }
      }
      return accumulatedResult + S.slice(nextSourcePosition);
    }
  ];

    // https://tc39.github.io/ecma262/#sec-getsubstitution
  function getSubstitution(matched, str, position, captures, namedCaptures, replacement) {
    var tailPos = position + matched.length;
    var m = captures.length;
    var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
    if (namedCaptures !== undefined) {
      namedCaptures = toObject(namedCaptures);
      symbols = SUBSTITUTION_SYMBOLS;
    }
    return $replace.call(replacement, symbols, function (match, ch) {
      var capture;
      switch (ch.charAt(0)) {
        case '$': return '$';
        case '&': return matched;
        case '`': return str.slice(0, position);
        case "'": return str.slice(tailPos);
        case '<':
          capture = namedCaptures[ch.slice(1, -1)];
          break;
        default: // \d\d?
          var n = +ch;
          if (n === 0) return match;
          if (n > m) {
            var f = floor(n / 10);
            if (f === 0) return match;
            if (f <= m) return captures[f - 1] === undefined ? ch.charAt(1) : captures[f - 1] + ch.charAt(1);
            return match;
          }
          capture = captures[n - 1];
      }
      return capture === undefined ? '' : capture;
    });
  }
});


/***/ }),
/* 265 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var anObject = __webpack_require__(1);
var sameValue = __webpack_require__(119);
var regExpExec = __webpack_require__(60);

// @@search logic
__webpack_require__(54)('search', 1, function (defined, SEARCH, $search, maybeCallNative) {
  return [
    // `String.prototype.search` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.search
    function search(regexp) {
      var O = defined(this);
      var fn = regexp == undefined ? undefined : regexp[SEARCH];
      return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[SEARCH](String(O));
    },
    // `RegExp.prototype[@@search]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@search
    function (regexp) {
      var res = maybeCallNative($search, regexp, this);
      if (res.done) return res.value;
      var rx = anObject(regexp);
      var S = String(this);
      var previousLastIndex = rx.lastIndex;
      if (!sameValue(previousLastIndex, 0)) rx.lastIndex = 0;
      var result = regExpExec(rx, S);
      if (!sameValue(rx.lastIndex, previousLastIndex)) rx.lastIndex = previousLastIndex;
      return result === null ? -1 : result.index;
    }
  ];
});


/***/ }),
/* 266 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isRegExp = __webpack_require__(76);
var anObject = __webpack_require__(1);
var speciesConstructor = __webpack_require__(48);
var advanceStringIndex = __webpack_require__(67);
var toLength = __webpack_require__(6);
var callRegExpExec = __webpack_require__(60);
var regexpExec = __webpack_require__(80);
var fails = __webpack_require__(2);
var $min = Math.min;
var $push = [].push;
var $SPLIT = 'split';
var LENGTH = 'length';
var LAST_INDEX = 'lastIndex';
var MAX_UINT32 = 0xffffffff;

// babel-minify transpiles RegExp('x', 'y') -> /x/y and it causes SyntaxError
var SUPPORTS_Y = !fails(function () { RegExp(MAX_UINT32, 'y'); });

// @@split logic
__webpack_require__(54)('split', 2, function (defined, SPLIT, $split, maybeCallNative) {
  var internalSplit;
  if (
    'abbc'[$SPLIT](/(b)*/)[1] == 'c' ||
    'test'[$SPLIT](/(?:)/, -1)[LENGTH] != 4 ||
    'ab'[$SPLIT](/(?:ab)*/)[LENGTH] != 2 ||
    '.'[$SPLIT](/(.?)(.?)/)[LENGTH] != 4 ||
    '.'[$SPLIT](/()()/)[LENGTH] > 1 ||
    ''[$SPLIT](/.?/)[LENGTH]
  ) {
    // based on es5-shim implementation, need to rework it
    internalSplit = function (separator, limit) {
      var string = String(this);
      if (separator === undefined && limit === 0) return [];
      // If `separator` is not a regex, use native split
      if (!isRegExp(separator)) return $split.call(string, separator, limit);
      var output = [];
      var flags = (separator.ignoreCase ? 'i' : '') +
                  (separator.multiline ? 'm' : '') +
                  (separator.unicode ? 'u' : '') +
                  (separator.sticky ? 'y' : '');
      var lastLastIndex = 0;
      var splitLimit = limit === undefined ? MAX_UINT32 : limit >>> 0;
      // Make `global` and avoid `lastIndex` issues by working with a copy
      var separatorCopy = new RegExp(separator.source, flags + 'g');
      var match, lastIndex, lastLength;
      while (match = regexpExec.call(separatorCopy, string)) {
        lastIndex = separatorCopy[LAST_INDEX];
        if (lastIndex > lastLastIndex) {
          output.push(string.slice(lastLastIndex, match.index));
          if (match[LENGTH] > 1 && match.index < string[LENGTH]) $push.apply(output, match.slice(1));
          lastLength = match[0][LENGTH];
          lastLastIndex = lastIndex;
          if (output[LENGTH] >= splitLimit) break;
        }
        if (separatorCopy[LAST_INDEX] === match.index) separatorCopy[LAST_INDEX]++; // Avoid an infinite loop
      }
      if (lastLastIndex === string[LENGTH]) {
        if (lastLength || !separatorCopy.test('')) output.push('');
      } else output.push(string.slice(lastLastIndex));
      return output[LENGTH] > splitLimit ? output.slice(0, splitLimit) : output;
    };
  // Chakra, V8
  } else if ('0'[$SPLIT](undefined, 0)[LENGTH]) {
    internalSplit = function (separator, limit) {
      return separator === undefined && limit === 0 ? [] : $split.call(this, separator, limit);
    };
  } else {
    internalSplit = $split;
  }

  return [
    // `String.prototype.split` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.split
    function split(separator, limit) {
      var O = defined(this);
      var splitter = separator == undefined ? undefined : separator[SPLIT];
      return splitter !== undefined
        ? splitter.call(separator, O, limit)
        : internalSplit.call(String(O), separator, limit);
    },
    // `RegExp.prototype[@@split]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@split
    //
    // NOTE: This cannot be properly polyfilled in engines that don't support
    // the 'y' flag.
    function (regexp, limit) {
      var res = maybeCallNative(internalSplit, regexp, this, limit, internalSplit !== $split);
      if (res.done) return res.value;

      var rx = anObject(regexp);
      var S = String(this);
      var C = speciesConstructor(rx, RegExp);

      var unicodeMatching = rx.unicode;
      var flags = (rx.ignoreCase ? 'i' : '') +
                  (rx.multiline ? 'm' : '') +
                  (rx.unicode ? 'u' : '') +
                  (SUPPORTS_Y ? 'y' : 'g');

      // ^(? + rx + ) is needed, in combination with some S slicing, to
      // simulate the 'y' flag.
      var splitter = new C(SUPPORTS_Y ? rx : '^(?:' + rx.source + ')', flags);
      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
      if (lim === 0) return [];
      if (S.length === 0) return callRegExpExec(splitter, S) === null ? [S] : [];
      var p = 0;
      var q = 0;
      var A = [];
      while (q < S.length) {
        splitter.lastIndex = SUPPORTS_Y ? q : 0;
        var z = callRegExpExec(splitter, SUPPORTS_Y ? S : S.slice(q));
        var e;
        if (
          z === null ||
          (e = $min(toLength(splitter.lastIndex + (SUPPORTS_Y ? 0 : q)), S.length)) === p
        ) {
          q = advanceStringIndex(S, q, unicodeMatching);
        } else {
          A.push(S.slice(p, q));
          if (A.length === lim) return A;
          for (var i = 1; i <= z.length - 1; i++) {
            A.push(z[i]);
            if (A.length === lim) return A;
          }
          q = p = e;
        }
      }
      A.push(S.slice(p));
      return A;
    }
  ];
});


/***/ }),
/* 267 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

__webpack_require__(125);
var anObject = __webpack_require__(1);
var $flags = __webpack_require__(55);
var DESCRIPTORS = __webpack_require__(8);
var TO_STRING = 'toString';
var $toString = /./[TO_STRING];

var define = function (fn) {
  __webpack_require__(11)(RegExp.prototype, TO_STRING, fn, true);
};

// 21.2.5.14 RegExp.prototype.toString()
if (__webpack_require__(2)(function () { return $toString.call({ source: 'a', flags: 'b' }) != '/a/b'; })) {
  define(function toString() {
    var R = anObject(this);
    return '/'.concat(R.source, '/',
      'flags' in R ? R.flags : !DESCRIPTORS && R instanceof RegExp ? $flags.call(R) : undefined);
  });
// FF44- RegExp#toString has a wrong name
} else if ($toString.name != TO_STRING) {
  define(function toString() {
    return $toString.call(this);
  });
}


/***/ }),
/* 268 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var strong = __webpack_require__(100);
var validate = __webpack_require__(37);
var SET = 'Set';

// 23.2 Set Objects
module.exports = __webpack_require__(53)(SET, function (get) {
  return function Set() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.2.3.1 Set.prototype.add(value)
  add: function add(value) {
    return strong.def(validate(this, SET), value = value === 0 ? 0 : value, value);
  }
}, strong);


/***/ }),
/* 269 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.2 String.prototype.anchor(name)
__webpack_require__(12)('anchor', function (createHTML) {
  return function anchor(name) {
    return createHTML(this, 'a', 'name', name);
  };
});


/***/ }),
/* 270 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.3 String.prototype.big()
__webpack_require__(12)('big', function (createHTML) {
  return function big() {
    return createHTML(this, 'big', '', '');
  };
});


/***/ }),
/* 271 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.4 String.prototype.blink()
__webpack_require__(12)('blink', function (createHTML) {
  return function blink() {
    return createHTML(this, 'blink', '', '');
  };
});


/***/ }),
/* 272 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.5 String.prototype.bold()
__webpack_require__(12)('bold', function (createHTML) {
  return function bold() {
    return createHTML(this, 'b', '', '');
  };
});


/***/ }),
/* 273 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(0);
var $at = __webpack_require__(83)(false);
$export($export.P, 'String', {
  // 21.1.3.3 String.prototype.codePointAt(pos)
  codePointAt: function codePointAt(pos) {
    return $at(this, pos);
  }
});


/***/ }),
/* 274 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 21.1.3.6 String.prototype.endsWith(searchString [, endPosition])

var $export = __webpack_require__(0);
var toLength = __webpack_require__(6);
var context = __webpack_require__(84);
var ENDS_WITH = 'endsWith';
var $endsWith = ''[ENDS_WITH];

$export($export.P + $export.F * __webpack_require__(72)(ENDS_WITH), 'String', {
  endsWith: function endsWith(searchString /* , endPosition = @length */) {
    var that = context(this, searchString, ENDS_WITH);
    var endPosition = arguments.length > 1 ? arguments[1] : undefined;
    var len = toLength(that.length);
    var end = endPosition === undefined ? len : Math.min(toLength(endPosition), len);
    var search = String(searchString);
    return $endsWith
      ? $endsWith.call(that, search, end)
      : that.slice(end - search.length, end) === search;
  }
});


/***/ }),
/* 275 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.6 String.prototype.fixed()
__webpack_require__(12)('fixed', function (createHTML) {
  return function fixed() {
    return createHTML(this, 'tt', '', '');
  };
});


/***/ }),
/* 276 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.7 String.prototype.fontcolor(color)
__webpack_require__(12)('fontcolor', function (createHTML) {
  return function fontcolor(color) {
    return createHTML(this, 'font', 'color', color);
  };
});


/***/ }),
/* 277 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.8 String.prototype.fontsize(size)
__webpack_require__(12)('fontsize', function (createHTML) {
  return function fontsize(size) {
    return createHTML(this, 'font', 'size', size);
  };
});


/***/ }),
/* 278 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(0);
var toAbsoluteIndex = __webpack_require__(35);
var fromCharCode = String.fromCharCode;
var $fromCodePoint = String.fromCodePoint;

// length should be 1, old FF problem
$export($export.S + $export.F * (!!$fromCodePoint && $fromCodePoint.length != 1), 'String', {
  // 21.1.2.2 String.fromCodePoint(...codePoints)
  fromCodePoint: function fromCodePoint(x) { // eslint-disable-line no-unused-vars
    var res = [];
    var aLen = arguments.length;
    var i = 0;
    var code;
    while (aLen > i) {
      code = +arguments[i++];
      if (toAbsoluteIndex(code, 0x10ffff) !== code) throw RangeError(code + ' is not a valid code point');
      res.push(code < 0x10000
        ? fromCharCode(code)
        : fromCharCode(((code -= 0x10000) >> 10) + 0xd800, code % 0x400 + 0xdc00)
      );
    } return res.join('');
  }
});


/***/ }),
/* 279 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 21.1.3.7 String.prototype.includes(searchString, position = 0)

var $export = __webpack_require__(0);
var context = __webpack_require__(84);
var INCLUDES = 'includes';

$export($export.P + $export.F * __webpack_require__(72)(INCLUDES), 'String', {
  includes: function includes(searchString /* , position = 0 */) {
    return !!~context(this, searchString, INCLUDES)
      .indexOf(searchString, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),
/* 280 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.9 String.prototype.italics()
__webpack_require__(12)('italics', function (createHTML) {
  return function italics() {
    return createHTML(this, 'i', '', '');
  };
});


/***/ }),
/* 281 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(83)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(77)(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),
/* 282 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.10 String.prototype.link(url)
__webpack_require__(12)('link', function (createHTML) {
  return function link(url) {
    return createHTML(this, 'a', 'href', url);
  };
});


/***/ }),
/* 283 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(0);
var toIObject = __webpack_require__(15);
var toLength = __webpack_require__(6);

$export($export.S, 'String', {
  // 21.1.2.4 String.raw(callSite, ...substitutions)
  raw: function raw(callSite) {
    var tpl = toIObject(callSite.raw);
    var len = toLength(tpl.length);
    var aLen = arguments.length;
    var res = [];
    var i = 0;
    while (len > i) {
      res.push(String(tpl[i++]));
      if (i < aLen) res.push(String(arguments[i]));
    } return res.join('');
  }
});


/***/ }),
/* 284 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(0);

$export($export.P, 'String', {
  // 21.1.3.13 String.prototype.repeat(count)
  repeat: __webpack_require__(85)
});


/***/ }),
/* 285 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.11 String.prototype.small()
__webpack_require__(12)('small', function (createHTML) {
  return function small() {
    return createHTML(this, 'small', '', '');
  };
});


/***/ }),
/* 286 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 21.1.3.18 String.prototype.startsWith(searchString [, position ])

var $export = __webpack_require__(0);
var toLength = __webpack_require__(6);
var context = __webpack_require__(84);
var STARTS_WITH = 'startsWith';
var $startsWith = ''[STARTS_WITH];

$export($export.P + $export.F * __webpack_require__(72)(STARTS_WITH), 'String', {
  startsWith: function startsWith(searchString /* , position = 0 */) {
    var that = context(this, searchString, STARTS_WITH);
    var index = toLength(Math.min(arguments.length > 1 ? arguments[1] : undefined, that.length));
    var search = String(searchString);
    return $startsWith
      ? $startsWith.call(that, search, index)
      : that.slice(index, index + search.length) === search;
  }
});


/***/ }),
/* 287 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.12 String.prototype.strike()
__webpack_require__(12)('strike', function (createHTML) {
  return function strike() {
    return createHTML(this, 'strike', '', '');
  };
});


/***/ }),
/* 288 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.13 String.prototype.sub()
__webpack_require__(12)('sub', function (createHTML) {
  return function sub() {
    return createHTML(this, 'sub', '', '');
  };
});


/***/ }),
/* 289 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.14 String.prototype.sup()
__webpack_require__(12)('sup', function (createHTML) {
  return function sup() {
    return createHTML(this, 'sup', '', '');
  };
});


/***/ }),
/* 290 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 21.1.3.25 String.prototype.trim()
__webpack_require__(43)('trim', function ($trim) {
  return function trim() {
    return $trim(this, 3);
  };
});


/***/ }),
/* 291 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__(3);
var has = __webpack_require__(13);
var DESCRIPTORS = __webpack_require__(8);
var $export = __webpack_require__(0);
var redefine = __webpack_require__(11);
var META = __webpack_require__(26).KEY;
var $fails = __webpack_require__(2);
var shared = __webpack_require__(61);
var setToStringTag = __webpack_require__(42);
var uid = __webpack_require__(36);
var wks = __webpack_require__(5);
var wksExt = __webpack_require__(89);
var wksDefine = __webpack_require__(122);
var enumKeys = __webpack_require__(165);
var isArray = __webpack_require__(57);
var anObject = __webpack_require__(1);
var isObject = __webpack_require__(4);
var toObject = __webpack_require__(10);
var toIObject = __webpack_require__(15);
var toPrimitive = __webpack_require__(27);
var createDesc = __webpack_require__(34);
var _create = __webpack_require__(30);
var gOPNExt = __webpack_require__(112);
var $GOPD = __webpack_require__(20);
var $GOPS = __webpack_require__(59);
var $DP = __webpack_require__(9);
var $keys = __webpack_require__(33);
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function' && !!$GOPS.f;
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__(31).f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(47).f = $propertyIsEnumerable;
  $GOPS.f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(29)) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
// https://bugs.chromium.org/p/v8/issues/detail?id=3443
var FAILS_ON_PRIMITIVES = $fails(function () { $GOPS.f(1); });

$export($export.S + $export.F * FAILS_ON_PRIMITIVES, 'Object', {
  getOwnPropertySymbols: function getOwnPropertySymbols(it) {
    return $GOPS.f(toObject(it));
  }
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(14)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),
/* 292 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(0);
var $typed = __webpack_require__(62);
var buffer = __webpack_require__(88);
var anObject = __webpack_require__(1);
var toAbsoluteIndex = __webpack_require__(35);
var toLength = __webpack_require__(6);
var isObject = __webpack_require__(4);
var ArrayBuffer = __webpack_require__(3).ArrayBuffer;
var speciesConstructor = __webpack_require__(48);
var $ArrayBuffer = buffer.ArrayBuffer;
var $DataView = buffer.DataView;
var $isView = $typed.ABV && ArrayBuffer.isView;
var $slice = $ArrayBuffer.prototype.slice;
var VIEW = $typed.VIEW;
var ARRAY_BUFFER = 'ArrayBuffer';

$export($export.G + $export.W + $export.F * (ArrayBuffer !== $ArrayBuffer), { ArrayBuffer: $ArrayBuffer });

$export($export.S + $export.F * !$typed.CONSTR, ARRAY_BUFFER, {
  // 24.1.3.1 ArrayBuffer.isView(arg)
  isView: function isView(it) {
    return $isView && $isView(it) || isObject(it) && VIEW in it;
  }
});

$export($export.P + $export.U + $export.F * __webpack_require__(2)(function () {
  return !new $ArrayBuffer(2).slice(1, undefined).byteLength;
}), ARRAY_BUFFER, {
  // 24.1.4.3 ArrayBuffer.prototype.slice(start, end)
  slice: function slice(start, end) {
    if ($slice !== undefined && end === undefined) return $slice.call(anObject(this), start); // FF fix
    var len = anObject(this).byteLength;
    var first = toAbsoluteIndex(start, len);
    var fin = toAbsoluteIndex(end === undefined ? len : end, len);
    var result = new (speciesConstructor(this, $ArrayBuffer))(toLength(fin - first));
    var viewS = new $DataView(this);
    var viewT = new $DataView(result);
    var index = 0;
    while (first < fin) {
      viewT.setUint8(index++, viewS.getUint8(first++));
    } return result;
  }
});

__webpack_require__(41)(ARRAY_BUFFER);


/***/ }),
/* 293 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(0);
$export($export.G + $export.W + $export.F * !__webpack_require__(62).ABV, {
  DataView: __webpack_require__(88).DataView
});


/***/ }),
/* 294 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(25)('Float32', 4, function (init) {
  return function Float32Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});


/***/ }),
/* 295 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(25)('Float64', 8, function (init) {
  return function Float64Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});


/***/ }),
/* 296 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(25)('Int16', 2, function (init) {
  return function Int16Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});


/***/ }),
/* 297 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(25)('Int32', 4, function (init) {
  return function Int32Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});


/***/ }),
/* 298 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(25)('Int8', 1, function (init) {
  return function Int8Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});


/***/ }),
/* 299 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(25)('Uint16', 2, function (init) {
  return function Uint16Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});


/***/ }),
/* 300 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(25)('Uint32', 4, function (init) {
  return function Uint32Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});


/***/ }),
/* 301 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(25)('Uint8', 1, function (init) {
  return function Uint8Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});


/***/ }),
/* 302 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(25)('Uint8', 1, function (init) {
  return function Uint8ClampedArray(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
}, true);


/***/ }),
/* 303 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(3);
var each = __webpack_require__(18)(0);
var redefine = __webpack_require__(11);
var meta = __webpack_require__(26);
var assign = __webpack_require__(110);
var weak = __webpack_require__(101);
var isObject = __webpack_require__(4);
var validate = __webpack_require__(37);
var NATIVE_WEAK_MAP = __webpack_require__(37);
var IS_IE11 = !global.ActiveXObject && 'ActiveXObject' in global;
var WEAK_MAP = 'WeakMap';
var getWeak = meta.getWeak;
var isExtensible = Object.isExtensible;
var uncaughtFrozenStore = weak.ufstore;
var InternalMap;

var wrapper = function (get) {
  return function WeakMap() {
    return get(this, arguments.length > 0 ? arguments[0] : undefined);
  };
};

var methods = {
  // 23.3.3.3 WeakMap.prototype.get(key)
  get: function get(key) {
    if (isObject(key)) {
      var data = getWeak(key);
      if (data === true) return uncaughtFrozenStore(validate(this, WEAK_MAP)).get(key);
      return data ? data[this._i] : undefined;
    }
  },
  // 23.3.3.5 WeakMap.prototype.set(key, value)
  set: function set(key, value) {
    return weak.def(validate(this, WEAK_MAP), key, value);
  }
};

// 23.3 WeakMap Objects
var $WeakMap = module.exports = __webpack_require__(53)(WEAK_MAP, wrapper, methods, weak, true, true);

// IE11 WeakMap frozen keys fix
if (NATIVE_WEAK_MAP && IS_IE11) {
  InternalMap = weak.getConstructor(wrapper, WEAK_MAP);
  assign(InternalMap.prototype, methods);
  meta.NEED = true;
  each(['delete', 'has', 'get', 'set'], function (key) {
    var proto = $WeakMap.prototype;
    var method = proto[key];
    redefine(proto, key, function (a, b) {
      // store frozen objects on internal weakmap shim
      if (isObject(a) && !isExtensible(a)) {
        if (!this._f) this._f = new InternalMap();
        var result = this._f[key](a, b);
        return key == 'set' ? this : result;
      // store all the rest on native weakmap
      } return method.call(this, a, b);
    });
  });
}


/***/ }),
/* 304 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var weak = __webpack_require__(101);
var validate = __webpack_require__(37);
var WEAK_SET = 'WeakSet';

// 23.4 WeakSet Objects
__webpack_require__(53)(WEAK_SET, function (get) {
  return function WeakSet() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.4.3.1 WeakSet.prototype.add(value)
  add: function add(value) {
    return weak.def(validate(this, WEAK_SET), value, true);
  }
}, weak, false, true);


/***/ }),
/* 305 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://tc39.github.io/proposal-flatMap/#sec-Array.prototype.flatMap
var $export = __webpack_require__(0);
var flattenIntoArray = __webpack_require__(166);
var toObject = __webpack_require__(10);
var toLength = __webpack_require__(6);
var aFunction = __webpack_require__(17);
var arraySpeciesCreate = __webpack_require__(98);

$export($export.P, 'Array', {
  flatMap: function flatMap(callbackfn /* , thisArg */) {
    var O = toObject(this);
    var sourceLen, A;
    aFunction(callbackfn);
    sourceLen = toLength(O.length);
    A = arraySpeciesCreate(O, 0);
    flattenIntoArray(A, O, O, sourceLen, 0, 1, callbackfn, arguments[1]);
    return A;
  }
});

__webpack_require__(28)('flatMap');


/***/ }),
/* 306 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/Array.prototype.includes
var $export = __webpack_require__(0);
var $includes = __webpack_require__(52)(true);

$export($export.P, 'Array', {
  includes: function includes(el /* , fromIndex = 0 */) {
    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
  }
});

__webpack_require__(28)('includes');


/***/ }),
/* 307 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/tc39/proposal-object-values-entries
var $export = __webpack_require__(0);
var $entries = __webpack_require__(114)(true);

$export($export.S, 'Object', {
  entries: function entries(it) {
    return $entries(it);
  }
});


/***/ }),
/* 308 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/tc39/proposal-object-getownpropertydescriptors
var $export = __webpack_require__(0);
var ownKeys = __webpack_require__(115);
var toIObject = __webpack_require__(15);
var gOPD = __webpack_require__(20);
var createProperty = __webpack_require__(69);

$export($export.S, 'Object', {
  getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object) {
    var O = toIObject(object);
    var getDesc = gOPD.f;
    var keys = ownKeys(O);
    var result = {};
    var i = 0;
    var key, desc;
    while (keys.length > i) {
      desc = getDesc(O, key = keys[i++]);
      if (desc !== undefined) createProperty(result, key, desc);
    }
    return result;
  }
});


/***/ }),
/* 309 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/tc39/proposal-object-values-entries
var $export = __webpack_require__(0);
var $values = __webpack_require__(114)(false);

$export($export.S, 'Object', {
  values: function values(it) {
    return $values(it);
  }
});


/***/ }),
/* 310 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// https://github.com/tc39/proposal-promise-finally

var $export = __webpack_require__(0);
var core = __webpack_require__(7);
var global = __webpack_require__(3);
var speciesConstructor = __webpack_require__(48);
var promiseResolve = __webpack_require__(118);

$export($export.P + $export.R, 'Promise', { 'finally': function (onFinally) {
  var C = speciesConstructor(this, core.Promise || global.Promise);
  var isFunction = typeof onFinally == 'function';
  return this.then(
    isFunction ? function (x) {
      return promiseResolve(C, onFinally()).then(function () { return x; });
    } : onFinally,
    isFunction ? function (e) {
      return promiseResolve(C, onFinally()).then(function () { throw e; });
    } : onFinally
  );
} });


/***/ }),
/* 311 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/proposal-string-pad-start-end
var $export = __webpack_require__(0);
var $pad = __webpack_require__(120);
var userAgent = __webpack_require__(63);

// https://github.com/zloirock/core-js/issues/280
var WEBKIT_BUG = /Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(userAgent);

$export($export.P + $export.F * WEBKIT_BUG, 'String', {
  padEnd: function padEnd(maxLength /* , fillString = ' ' */) {
    return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, false);
  }
});


/***/ }),
/* 312 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/proposal-string-pad-start-end
var $export = __webpack_require__(0);
var $pad = __webpack_require__(120);
var userAgent = __webpack_require__(63);

// https://github.com/zloirock/core-js/issues/280
var WEBKIT_BUG = /Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(userAgent);

$export($export.P + $export.F * WEBKIT_BUG, 'String', {
  padStart: function padStart(maxLength /* , fillString = ' ' */) {
    return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, true);
  }
});


/***/ }),
/* 313 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/sebmarkbage/ecmascript-string-left-right-trim
__webpack_require__(43)('trimLeft', function ($trim) {
  return function trimLeft() {
    return $trim(this, 1);
  };
}, 'trimStart');


/***/ }),
/* 314 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/sebmarkbage/ecmascript-string-left-right-trim
__webpack_require__(43)('trimRight', function ($trim) {
  return function trimRight() {
    return $trim(this, 2);
  };
}, 'trimEnd');


/***/ }),
/* 315 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(122)('asyncIterator');


/***/ }),
/* 316 */
/***/ (function(module, exports, __webpack_require__) {

var $iterators = __webpack_require__(91);
var getKeys = __webpack_require__(33);
var redefine = __webpack_require__(11);
var global = __webpack_require__(3);
var hide = __webpack_require__(14);
var Iterators = __webpack_require__(39);
var wks = __webpack_require__(5);
var ITERATOR = wks('iterator');
var TO_STRING_TAG = wks('toStringTag');
var ArrayValues = Iterators.Array;

var DOMIterables = {
  CSSRuleList: true, // TODO: Not spec compliant, should be false.
  CSSStyleDeclaration: false,
  CSSValueList: false,
  ClientRectList: false,
  DOMRectList: false,
  DOMStringList: false,
  DOMTokenList: true,
  DataTransferItemList: false,
  FileList: false,
  HTMLAllCollection: false,
  HTMLCollection: false,
  HTMLFormElement: false,
  HTMLSelectElement: false,
  MediaList: true, // TODO: Not spec compliant, should be false.
  MimeTypeArray: false,
  NamedNodeMap: false,
  NodeList: true,
  PaintRequestList: false,
  Plugin: false,
  PluginArray: false,
  SVGLengthList: false,
  SVGNumberList: false,
  SVGPathSegList: false,
  SVGPointList: false,
  SVGStringList: false,
  SVGTransformList: false,
  SourceBufferList: false,
  StyleSheetList: true, // TODO: Not spec compliant, should be false.
  TextTrackCueList: false,
  TextTrackList: false,
  TouchList: false
};

for (var collections = getKeys(DOMIterables), i = 0; i < collections.length; i++) {
  var NAME = collections[i];
  var explicit = DOMIterables[NAME];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  var key;
  if (proto) {
    if (!proto[ITERATOR]) hide(proto, ITERATOR, ArrayValues);
    if (!proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
    Iterators[NAME] = ArrayValues;
    if (explicit) for (key in $iterators) if (!proto[key]) redefine(proto, key, $iterators[key], true);
  }
}


/***/ }),
/* 317 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(0);
var $task = __webpack_require__(87);
$export($export.G + $export.B, {
  setImmediate: $task.set,
  clearImmediate: $task.clear
});


/***/ }),
/* 318 */
/***/ (function(module, exports, __webpack_require__) {

// ie9- setTimeout & setInterval additional parameters fix
var global = __webpack_require__(3);
var $export = __webpack_require__(0);
var userAgent = __webpack_require__(63);
var slice = [].slice;
var MSIE = /MSIE .\./.test(userAgent); // <- dirty ie9- check
var wrap = function (set) {
  return function (fn, time /* , ...args */) {
    var boundArgs = arguments.length > 2;
    var args = boundArgs ? slice.call(arguments, 2) : false;
    return set(boundArgs ? function () {
      // eslint-disable-next-line no-new-func
      (typeof fn == 'function' ? fn : Function(fn)).apply(this, args);
    } : fn, time);
  };
};
$export($export.G + $export.B + $export.F * MSIE, {
  setTimeout: wrap(global.setTimeout),
  setInterval: wrap(global.setInterval)
});


/***/ }),
/* 319 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(318);
__webpack_require__(317);
__webpack_require__(316);
module.exports = __webpack_require__(7);


/***/ }),
/* 320 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(321)();
// imports


// module
exports.push([module.i, "/*!\nziggeo-client-sdk - v2.39.16 - 2022-01-24\nCopyright (c) Ziggeo\nClosed Source Software License.\n*//*!\nbetajs-media-components - v0.0.291 - 2022-01-08\nCopyright (c) Ziggeo,Oliver Friedmann,Rashad Aliyev\nApache-2.0 Software License.\n*/@font-face{font-family:bjsmc;src:url(" + __webpack_require__(332) + ") format(\"eot\") local(\"bjsmc\")}@font-face{font-family:bjsmc;src:url(data:application/octet-stream;base64,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) format(\"embedded-opentype\"),url(data:application/octet-stream;base64,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) format(\"woff\"),url(data:application/octet-stream;base64,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AAAALAPoAAABrAAAAoIAAAOgAAADWQAAA1kAAAMRAAADWQAAA+gAAAOgAAACygAAAsoAAANZAAACgv//AxEAAAI7AAADWQAAA6AAAAPoAAACcf//Ajv//wMRAAAD6AAAA5gAAAKb//0D6AAAA6AAAAQv//8DoAAAAjsAAANZAAAFBQAAAWUAAAFlAAACggAAAoIAAAOgAAADIAAAA+gAAANZ//0EdgAAA1kAAAR2//8DWQAAAAAAAAAyAI4BUgG4AiICQAKEAsgDTAOAA7YEeAT6BbQGYgbGBxwHVAd2B5wH5giQCOYJFglyCaIKHAqMCsYLSgu+C/IMJgxcDJINDg1sDbgN+g76D1YPwhBQAAAAAQAAACwAbQAEAAAAAAACACIASwCNAAAAdw4MAAAAAAAAABIA3gABAAAAAAAAADUAAAABAAAAAAABAAgANQABAAAAAAACAAcAPQABAAAAAAADAAgARAABAAAAAAAEAAgATAABAAAAAAAFAAsAVAABAAAAAAAGAAgAXwABAAAAAAAKACsAZwABAAAAAAALABMAkgADAAEECQAAAGoApQADAAEECQABABABDwADAAEECQACAA4BHwADAAEECQADABABLQADAAEECQAEABABPQADAAEECQAFABYBTQADAAEECQAGABABYwADAAEECQAKAFYBcwADAAEECQALACYByUNvcHlyaWdodCAoQykgMjAyMSBieSBvcmlnaW5hbCBhdXRob3JzIEAgZm9udGVsbG8uY29tZm9udGVsbG9SZWd1bGFyZm9udGVsbG9mb250ZWxsb1ZlcnNpb24gMS4wZm9udGVsbG9HZW5lcmF0ZWQgYnkgc3ZnMnR0ZiBmcm9tIEZvbnRlbGxvIHByb2plY3QuaHR0cDovL2ZvbnRlbGxvLmNvbQBDAG8AcAB5AHIAaQBnAGgAdAAgACgAQwApACAAMgAwADIAMQAgAGIAeQAgAG8AcgBpAGcAaQBuAGEAbAAgAGEAdQB0AGgAbwByAHMAIABAACAAZgBvAG4AdABlAGwAbABvAC4AYwBvAG0AZgBvAG4AdABlAGwAbABvAFIAZQBnAHUAbABhAHIAZgBvAG4AdABlAGwAbABvAGYAbwBuAHQAZQBsAGwAbwBWAGUAcgBzAGkAbwBuACAAMQAuADAAZgBvAG4AdABlAGwAbABvAEcA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) format(\"truetype\")}.ba-commoncss-icon-volume-off:before{font-family:bjsmc;font-style:normal;font-weight:400;speak:none;display:inline-block;text-decoration:inherit;width:1em;margin-right:.2em;text-align:center;font-variant:normal;text-transform:none;line-height:1em;margin-left:.2em;content:\"\\E800\"}.ba-commoncss-icon-volume-down:before{font-family:bjsmc;font-style:normal;font-weight:400;speak:none;display:inline-block;text-decoration:inherit;width:1em;margin-right:.2em;text-align:center;font-variant:normal;text-transform:none;line-height:1em;margin-left:.2em;content:\"\\E801\"}.ba-commoncss-icon-volume-up:before{font-family:bjsmc;font-style:normal;font-weight:400;speak:none;display:inline-block;text-decoration:inherit;width:1em;margin-right:.2em;text-align:center;font-variant:normal;text-transform:none;line-height:1em;margin-left:.2em;content:\"\\E802\"}.ba-commoncss-icon-resize-full:before{font-family:bjsmc;font-style:normal;font-weight:400;speak:none;display:inline-block;text-decoration:inherit;width:1em;margin-right:.2em;text-align:center;font-variant:normal;text-transform:none;line-height:1em;margin-left:.2em;content:\"\\E803\"}.ba-commoncss-icon-ccw:before{font-family:bjsmc;font-style:normal;font-weight:400;speak:none;display:inline-block;text-decoration:inherit;width:1em;margin-right:.2em;text-align:center;font-variant:normal;text-transform:none;line-height:1em;margin-left:.2em;content:\"\\E804\"}.ba-commoncss-icon-play:before{font-family:bjsmc;font-style:normal;font-weight:400;speak:none;display:inline-block;text-decoration:inherit;width:1em;margin-right:.2em;text-align:center;font-variant:normal;text-transform:none;line-height:1em;margin-left:.2em;content:\"\\E805\"}.ba-commoncss-icon-pause:before{font-family:bjsmc;font-style:normal;font-weight:400;speak:none;display:inline-block;text-decoration:inherit;width:1em;margin-right:.2em;text-align:center;font-variant:normal;text-transform:none;line-height:1em;margin-left:.2em;content:\"\\E806\"}.ba-commoncss-icon-videocam:before{font-family:bjsmc;font-style:normal;font-weight:400;speak:none;display:inline-block;text-decoration:inherit;width:1em;margin-right:.2em;text-align:center;font-variant:normal;text-transform:none;line-height:1em;margin-left:.2em;content:\"\\E807\"}.ba-commoncss-icon-upload:before{font-family:bjsmc;font-style:normal;font-weight:400;speak:none;display:inline-block;text-decoration:inherit;width:1em;margin-right:.2em;text-align:center;font-variant:normal;text-transform:none;line-height:1em;margin-left:.2em;content:\"\\E808\"}.ba-commoncss-icon-left-open:before{font-family:bjsmc;font-style:normal;font-weight:400;speak:none;display:inline-block;text-decoration:inherit;width:1em;margin-right:.2em;text-align:center;font-variant:normal;text-transform:none;line-height:1em;margin-left:.2em;content:\"\\E809\"}.ba-commoncss-icon-right-open:before{font-family:bjsmc;font-style:normal;font-weight:400;speak:none;display:inline-block;text-decoration:inherit;width:1em;margin-right:.2em;text-align:center;font-variant:normal;text-transform:none;line-height:1em;margin-left:.2em;content:\"\\E80A\"}.ba-commoncss-icon-cog:before{font-family:bjsmc;font-style:normal;font-weight:400;speak:none;display:inline-block;text-decoration:inherit;width:1em;margin-right:.2em;text-align:center;font-variant:normal;text-transform:none;line-height:1em;margin-left:.2em;content:\"\\E80B\"}.ba-commoncss-icon-mic:before{font-family:bjsmc;font-style:normal;font-weight:400;speak:none;display:inline-block;text-decoration:inherit;width:1em;margin-right:.2em;text-align:center;font-variant:normal;text-transform:none;line-height:1em;margin-left:.2em;content:\"\\E80C\"}.ba-commoncss-icon-mute:before{font-family:bjsmc;font-style:normal;font-weight:400;speak:none;display:inline-block;text-decoration:inherit;width:1em;margin-right:.2em;text-align:center;font-variant:normal;text-transform:none;line-height:1em;margin-left:.2em;content:\"\\E80D\"}.ba-commoncss-icon-lightbulb:before{font-family:bjsmc;font-style:normal;font-weight:400;speak:none;display:inline-block;text-decoration:inherit;width:1em;margin-right:.2em;text-align:center;font-variant:normal;text-transform:none;line-height:1em;margin-left:.2em;content:\"\\E80E\"}.ba-commoncss-icon-resize-small:before{font-family:bjsmc;font-style:normal;font-weight:400;speak:none;display:inline-block;text-decoration:inherit;width:1em;margin-right:.2em;text-align:center;font-variant:normal;text-transform:none;line-height:1em;margin-left:.2em;content:\"\\E80F\"}.ba-commoncss-icon-resize-minimize:before{font-family:bjsmc;font-style:normal;font-weight:400;speak:none;display:inline-block;text-decoration:inherit;width:1em;margin-right:.2em;text-align:center;font-variant:normal;text-transform:none;line-height:1em;margin-left:.2em;content:\"\\E810\"}.ba-commoncss-icon-record:before{font-family:bjsmc;font-style:normal;font-weight:400;speak:none;display:inline-block;text-decoration:inherit;width:1em;margin-right:.2em;text-align:center;font-variant:normal;text-transform:none;line-height:1em;margin-left:.2em;content:\"\\E811\"}.ba-commoncss-icon-record-core:before{font-family:bjsmc;font-style:normal;font-weight:400;speak:none;display:inline-block;text-decoration:inherit;width:1em;margin-right:.2em;text-align:center;font-variant:normal;text-transform:none;line-height:1em;margin-left:.2em;content:\"\\E812\"}.ba-commoncss-icon-up-dir:before{font-family:bjsmc;font-style:normal;font-weight:400;speak:none;display:inline-block;text-decoration:inherit;width:1em;margin-right:.2em;text-align:center;font-variant:normal;text-transform:none;line-height:1em;margin-left:.2em;content:\"\\E813\"}.ba-commoncss-icon-cancel:before{font-family:bjsmc;font-style:normal;font-weight:400;speak:none;display:inline-block;text-decoration:inherit;width:1em;margin-right:.2em;text-align:center;font-variant:normal;text-transform:none;line-height:1em;margin-left:.2em;content:\"\\E814\"}.ba-commoncss-icon-cc:before{font-family:bjsmc;font-style:normal;font-weight:400;speak:none;display:inline-block;text-decoration:inherit;width:1em;margin-right:.2em;text-align:center;font-variant:normal;text-transform:none;line-height:1em;margin-left:.2em;content:\"\\E815\"}.ba-commoncss-icon-clock:before{font-family:bjsmc;font-style:normal;font-weight:400;speak:none;display:inline-block;text-decoration:inherit;width:1em;margin-right:.2em;text-align:center;font-variant:normal;text-transform:none;line-height:1em;margin-left:.2em;content:\"\\E816\"}.ba-commoncss-icon-check:before{font-family:bjsmc;font-style:normal;font-weight:400;speak:none;display:inline-block;text-decoration:inherit;width:1em;margin-right:.2em;text-align:center;font-variant:normal;text-transform:none;line-height:1em;margin-left:.2em;content:\"\\E817\"}.ba-commoncss-icon-arrows-cw:before{font-family:bjsmc;font-style:normal;font-weight:400;speak:none;display:inline-block;text-decoration:inherit;width:1em;margin-right:.2em;text-align:center;font-variant:normal;text-transform:none;line-height:1em;margin-left:.2em;content:\"\\E818\"}.ba-commoncss-icon-plus:before{font-family:bjsmc;font-style:normal;font-weight:400;speak:none;display:inline-block;text-decoration:inherit;width:1em;margin-right:.2em;text-align:center;font-variant:normal;text-transform:none;line-height:1em;margin-left:.2em;content:\"\\E819\"}.ba-commoncss-icon-picture:before{font-family:bjsmc;font-style:normal;font-weight:400;speak:none;display:inline-block;text-decoration:inherit;width:1em;margin-right:.2em;text-align:center;font-variant:normal;text-transform:none;line-height:1em;margin-left:.2em;content:\"\\E81A\"}.ba-commoncss-icon-twitter:before{font-family:bjsmc;font-style:normal;font-weight:400;speak:none;display:inline-block;text-decoration:inherit;width:1em;margin-right:.2em;text-align:center;font-variant:normal;text-transform:none;line-height:1em;margin-left:.2em;content:\"\\F099\"}.ba-commoncss-icon-facebook:before{font-family:bjsmc;font-style:normal;font-weight:400;speak:none;display:inline-block;text-decoration:inherit;width:1em;margin-right:.2em;text-align:center;font-variant:normal;text-transform:none;line-height:1em;margin-left:.2em;content:\"\\F09A\"}.ba-commoncss-icon-gplus-squared:before{font-family:bjsmc;font-style:normal;font-weight:400;speak:none;display:inline-block;text-decoration:inherit;width:1em;margin-right:.2em;text-align:center;font-variant:normal;text-transform:none;line-height:1em;margin-left:.2em;content:\"\\F0D4\"}.ba-commoncss-icon-gplus:before{font-family:bjsmc;font-style:normal;font-weight:400;speak:none;display:inline-block;text-decoration:inherit;width:1em;margin-right:.2em;text-align:center;font-variant:normal;text-transform:none;line-height:1em;margin-left:.2em;content:\"\\F0D5\"}.ba-commoncss-icon-angle-left:before{font-family:bjsmc;font-style:normal;font-weight:400;speak:none;display:inline-block;text-decoration:inherit;width:1em;margin-right:.2em;text-align:center;font-variant:normal;text-transform:none;line-height:1em;margin-left:.2em;content:\"\\F104\"}.ba-commoncss-icon-angle-right:before{font-family:bjsmc;font-style:normal;font-weight:400;speak:none;display:inline-block;text-decoration:inherit;width:1em;margin-right:.2em;text-align:center;font-variant:normal;text-transform:none;line-height:1em;margin-left:.2em;content:\"\\F105\"}.ba-commoncss-icon-angle-up:before{font-family:bjsmc;font-style:normal;font-weight:400;speak:none;display:inline-block;text-decoration:inherit;width:1em;margin-right:.2em;text-align:center;font-variant:normal;text-transform:none;line-height:1em;margin-left:.2em;content:\"\\F106\"}.ba-commoncss-icon-angle-down:before{font-family:bjsmc;font-style:normal;font-weight:400;speak:none;display:inline-block;text-decoration:inherit;width:1em;margin-right:.2em;text-align:center;font-variant:normal;text-transform:none;line-height:1em;margin-left:.2em;content:\"\\F107\"}.ba-commoncss-icon-crop:before{font-family:bjsmc;font-style:normal;font-weight:400;speak:none;display:inline-block;text-decoration:inherit;width:1em;margin-right:.2em;text-align:center;font-variant:normal;text-transform:none;line-height:1em;margin-left:.2em;content:\"\\F125\"}.ba-commoncss-icon-share:before{font-family:bjsmc;font-style:normal;font-weight:400;speak:none;display:inline-block;text-decoration:inherit;width:1em;margin-right:.2em;text-align:center;font-variant:normal;text-transform:none;line-height:1em;margin-left:.2em;content:\"\\F130\"}.ba-commoncss-icon-resize-full-alt:before{font-family:bjsmc;font-style:normal;font-weight:400;speak:none;display:inline-block;text-decoration:inherit;width:1em;margin-right:.2em;text-align:center;font-variant:normal;text-transform:none;line-height:1em;margin-left:.2em;content:\"\\F131\"}.ba-commoncss-icon-play-circled:before{font-family:bjsmc;font-style:normal;font-weight:400;speak:none;display:inline-block;text-decoration:inherit;width:1em;margin-right:.2em;text-align:center;font-variant:normal;text-transform:none;line-height:1em;margin-left:.2em;content:\"\\F144\"}.ba-commoncss-icon-subtitle:before{font-family:bjsmc;font-style:normal;font-weight:400;speak:none;display:inline-block;text-decoration:inherit;width:1em;margin-right:.2em;text-align:center;font-variant:normal;text-transform:none;line-height:1em;margin-left:.2em;content:\"\\F20A\"}.ba-commoncss-icon-facebook-official:before{font-family:bjsmc;font-style:normal;font-weight:400;speak:none;display:inline-block;text-decoration:inherit;width:1em;margin-right:.2em;text-align:center;font-variant:normal;text-transform:none;line-height:1em;margin-left:.2em;content:\"\\F230\"}.ba-commoncss-icon-television:before{font-family:bjsmc;font-style:normal;font-weight:400;speak:none;display:inline-block;text-decoration:inherit;width:1em;margin-right:.2em;text-align:center;font-variant:normal;text-transform:none;line-height:1em;margin-left:.2em;content:\"\\F26C\"}.ba-commoncss-icon-twitter-squared:before{font-family:bjsmc;font-style:normal;font-weight:400;speak:none;display:inline-block;text-decoration:inherit;width:1em;margin-right:.2em;text-align:center;font-variant:normal;text-transform:none;line-height:1em;margin-left:.2em;content:\"\\F304\"}.ba-commoncss-icon-facebook:before{color:#3b5998}.ba-commoncss-icon-facebook-official:before{color:#3b5998}.ba-commoncss-icon-twitter:before{color:#1da1f2}.ba-commoncss-icon-twitter-squared:before{color:#1da1f2}.ba-commoncss-icon-gplus:before{color:#dd4b39}.ba-commoncss-icon-gplus-squared:before{color:#dd4b39}.ba-imageviewer-overlay div[tabindex]{transition:all .3s ease-in-out;-moz-transition:all .3s ease-in-out;-webkit-transition:all .3s ease-in-out;-o-transition:all .3s ease-in-out;-ms-transition:all .3s ease-in-out}.ba-imageviewer-overlay div[tabindex]:focus{-moz-box-shadow:0 0 0 2px #1b8fcc;-webkit-box-shadow:0 0 0 2px #1b8fcc;box-shadow:0 0 0 2px #1b8fcc;outline:0;-moz-outline-style:none}.ba-imageviewer-overlay div[tabindex]:focus:hover,.ba-imageviewer-overlay div[tabindex]:hover{box-shadow:none}.ba-videoplayer-ie8 .ba-imageviewer-overlay{height:100%}.ba-imageviewer-image-viewer-wrapper{position:absolute;width:100%;height:100%;z-index:1005}.ba-imageviewer-image-viewer-expanded{-webkit-transform:translate(-50%,-50%);-moz-transform:translate(-50%,-50%);-o-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);left:50%;position:fixed;top:50%;width:100%;z-index:1003}.ba-imageviewer-close-button,.ba-imageviewer-title{background-color:#777;background-color:rgba(0,0,0,.7);-webkit-transform:translateX(-50%);-moz-transform:translateX(-50%);-o-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%);box-sizing:content-box;color:#eee;padding:8px;position:fixed;z-index:99999}.ba-imageviewer-title{bottom:3%;left:50%}.ba-imageviewer-close-button{-moz-border-radius:50%;-webkit-border-radius:50%;border-radius:50%;cursor:pointer;font-size:22px;right:3%}.ba-imageviewer-close-button:before{font-family:bjsmc;font-style:normal;font-weight:400;speak:none;display:inline-block;text-decoration:inherit;width:1em;margin-right:.2em;text-align:center;font-variant:normal;text-transform:none;line-height:1em;margin-left:.2em;content:\"\\E814\"}.ba-imageviewer-fullscreen-view .ba-imageviewer-overlay{background-color:#000;bottom:0;height:100%;position:fixed;top:0;width:100%;z-index:1001}.ba-player-adslot{left:0;right:0;top:0;bottom:0;background-color:#333;background-color:rgba(0,0,0,.8);color:#fff;position:absolute}.ba-player-ad-click-tracker{left:0;right:0;top:0;bottom:0}.ba-player-ad-dashboard{position:absolute;left:0;right:0;bottom:0;transition:opacity .5s ease-in-out;-moz-transition:opacity .5s ease-in-out;-webkit-transition:opacity .5s ease-in-out;-o-transition:opacity .5s ease-in-out;-ms-transition:opacity .5s ease-in-out;height:100%;opacity:.9;overflow:hidden}.ba-player-ad-controlbar{background-color:#333;background-color:rgba(0,0,0,.8);position:absolute;bottom:0;height:40px;width:100%}.ba-player-ad-leftbutton-container{float:left;width:40px;height:100%;cursor:pointer;box-sizing:content-box}.ba-videoplayer-noie8 .ba-player-ad-rightbutton-container{float:right;width:40px;height:100%;cursor:pointer;box-sizing:content-box}.ba-videoplayer-ie8 .ba-player-ad-rightbutton-container{float:right;width:40px;height:50%;cursor:pointer;box-sizing:content-box}.ba-videoplayer-noie8 .ba-player-ad-button-inner{-webkit-transform:translateY(-50%);-moz-transform:translateY(-50%);-o-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);top:50%;position:relative;text-align:center;color:#fff;font-size:13px}.ba-videoplayer-ie8 .ba-player-ad-button-inner{margin-top:12px;text-align:center;color:#fff;font-size:13px}.ba-player-ad-button-inner{cursor:pointer}.ba-player-ad-time-container{float:left;width:auto;height:100%;text-align:center;font-family:Helvetica Neue,Helvetica,Arial,sans-serif;font-size:13px;color:#fff;box-sizing:content-box}.ba-videoplayer-ie8 .ba-player-ad-time-container{margin-top:11px}.ba-player-ad-time-value{-webkit-transform:translateY(-50%);-moz-transform:translateY(-50%);-o-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);top:50%;position:relative;text-align:center;float:left;width:auto;padding:0 15px}.ba-videoplayer-noie8 .ba-player-ad-volumebar{float:right;width:60px;height:100%;margin-right:12px}.ba-videoplayer-ie8 .ba-player-ad-volumebar{float:right;width:60px;height:50%;margin-top:16px;margin-right:12px}.ba-player-ad-volumebar-inner{-webkit-transform:translateY(-50%);-moz-transform:translateY(-50%);-o-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);top:50%;position:relative;text-align:center;border-bottom-left-radius:3px;border-bottom-right-radius:3px;border-top-left-radius:3px;border-top-right-radius:3px;cursor:pointer;background-color:#878787;height:6px}.ba-player-ad-volumebar-position{border-bottom-left-radius:3px;border-bottom-right-radius:3px;border-top-left-radius:3px;border-top-right-radius:3px;position:absolute;left:0;background-color:#fff;height:100%}.ba-player-skipbutton-container{transition:all .3s ease-in-out .2s;-moz-transition:all .3s ease-in-out .2s;-webkit-transition:all .3s ease-in-out .2s;-o-transition:all .3s ease-in-out .2s;-ms-transition:all .3s ease-in-out .2s;-moz-opacity:.4;-khtml-opacity:.4;opacity:.4;background:#020202;font-size:12px;bottom:80px;color:#ececec;cursor:pointer;overflow:hidden;position:absolute;padding:10px 0;right:0;text-align:center;min-width:100px}.ba-player-skipbutton{text-align:center;margin:0;padding:0}.ba-player-skipbutton-container:hover{-moz-opacity:.7;-khtml-opacity:.7;opacity:.7;transition:all .3s ease-in-out .2s;-moz-transition:all .3s ease-in-out .2s;-webkit-transition:all .3s ease-in-out .2s;-o-transition:all .3s ease-in-out .2s;-ms-transition:all .3s ease-in-out .2s}.ba-player-red-color .ba-commoncss-icon-pause,.ba-player-red-color .ba-commoncss-icon-play,.ba-player-red-color .ba-commoncss-icon-resize-full,.ba-player-red-color .ba-commoncss-icon-resize-small,.ba-player-red-color .ba-commoncss-icon-share:before,.ba-player-red-color .ba-commoncss-icon-volume-down,.ba-player-red-color .ba-commoncss-icon-volume-up,.ba-player-red-color .ba-commoncss-options-popup .ba-commoncss-options-list .ba-commoncss-options-list-item,.ba-player-red-color .ba-player-button-inactive .ba-commoncss-icon-subtitle,.ba-player-red-color .ba-player-cue-content,.ba-player-red-color .ba-player-socials-list .ba-player-button-inner,.ba-player-red-color .ba-player-toggle-share-container,.ba-player-red-color .ba-settings-overlay-inner{color:#eb6a74}.ba-player-red-color .ba-player-button-active{background-color:#eb6a74}.ba-player-red-color .ba-player-airplay-container svg path{fill:#eb6a74}.ba-player-red-color.ba-videoplayer-noie8 .ba-player-playbutton-container{border-color:#eb6a74}.ba-player-red-color.ba-videoplayer-noie8 .ba-player-playbutton-button::after{color:#eb6a74}.ba-player-blue-color .ba-commoncss-icon-pause,.ba-player-blue-color .ba-commoncss-icon-play,.ba-player-blue-color .ba-commoncss-icon-resize-full,.ba-player-blue-color .ba-commoncss-icon-resize-small,.ba-player-blue-color .ba-commoncss-icon-share:before,.ba-player-blue-color .ba-commoncss-icon-volume-down,.ba-player-blue-color .ba-commoncss-icon-volume-up,.ba-player-blue-color .ba-commoncss-options-popup .ba-commoncss-options-list .ba-commoncss-options-list-item,.ba-player-blue-color .ba-player-button-inactive .ba-commoncss-icon-subtitle,.ba-player-blue-color .ba-player-cue-content,.ba-player-blue-color .ba-player-socials-list .ba-player-button-inner,.ba-player-blue-color .ba-player-toggle-share-container,.ba-player-blue-color .ba-settings-overlay-inner{color:#2a74eb}.ba-player-blue-color .ba-player-button-active{background-color:#2a74eb}.ba-player-blue-color .ba-player-airplay-container svg path{fill:#2a74eb}.ba-player-blue-color.ba-videoplayer-noie8 .ba-player-playbutton-container{border-color:#2a74eb}.ba-player-blue-color.ba-videoplayer-noie8 .ba-player-playbutton-button::after{color:#2a74eb}.ba-player-green-color .ba-commoncss-icon-pause,.ba-player-green-color .ba-commoncss-icon-play,.ba-player-green-color .ba-commoncss-icon-resize-full,.ba-player-green-color .ba-commoncss-icon-resize-small,.ba-player-green-color .ba-commoncss-icon-share:before,.ba-player-green-color .ba-commoncss-icon-volume-down,.ba-player-green-color .ba-commoncss-icon-volume-up,.ba-player-green-color .ba-commoncss-options-popup .ba-commoncss-options-list .ba-commoncss-options-list-item,.ba-player-green-color .ba-player-button-inactive .ba-commoncss-icon-subtitle,.ba-player-green-color .ba-player-cue-content,.ba-player-green-color .ba-player-socials-list .ba-player-button-inner,.ba-player-green-color .ba-player-toggle-share-container,.ba-player-green-color .ba-settings-overlay-inner{color:#5daa96}.ba-player-green-color .ba-player-button-active{background-color:#5daa96}.ba-player-green-color .ba-player-airplay-container svg path{fill:#5daa96}.ba-player-green-color.ba-videoplayer-noie8 .ba-player-playbutton-container{border-color:#5daa96}.ba-player-green-color.ba-videoplayer-noie8 .ba-player-playbutton-button::after{color:#5daa96}.ba-player-fullscreen-view video::-webkit-media-controls-overlay-enclosure{display:none}.ba-player-fullscreen-view video::-webkit-media-controls-enclosure{display:none}.ba-player-fullscreen-view video::-webkit-media-controls{display:none}.ba-player-fullscreen-view video::-webkit-media-controls-panel{display:none}.ba-player-fullscreen-view video::-webkit-media-controls-play-button{display:none}.ba-player-fullscreen-view video::-webkit-media-controls-current-time-display{display:none}.ba-player-fullscreen-view video::-webkit-media-controls-time-remaining-display{display:none}.ba-player-fullscreen-view video::-webkit-media-controls-timeline{display:none}.ba-player-fullscreen-view video::-webkit-media-controls-mute-button{display:none}.ba-player-fullscreen-view video::-webkit-media-controls-volume-slider{display:none}.ba-player-fullscreen-view video::-webkit-media-controls-fullscreen-button{display:none}.ba-player-fullscreen-view video::-internal-media-controls-download-button{display:none}.ba-player-fullscreen-view video::-moz-list-bullet,.ba-player-fullscreen-view video::-moz-list-number{display:none}.ba-player-fullscreen-view video::-moz-meter-bar{display:none}.ba-player-fullscreen-view video:fullscreen:not(:root){display:none}.ba-player-fullscreen-view.ba-player-common-browser .ba-videoplayer-overlay{z-index:2147483647}.ba-player-fullscreen-view.ba-player-firefox-browser video{position:relative;min-height:100%;min-width:100%;z-index:0}.ba-player-loader-container{-webkit-transform:translate(-50%,-50%);-moz-transform:translate(-50%,-50%);-o-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);position:absolute;top:50%;left:50%}.ba-player-loader-loader:before{content:\"\";display:block;padding-top:100%}.ba-player-loader-loader{-webkit-transform:translateZ(0);-moz-transform:translateZ(0);-o-transform:translateZ(0);-ms-transform:translateZ(0);transform:translateZ(0);position:relative;width:100%;font-size:5px;box-sizing:content-box;border-top:.6em solid;border-top-color:#999;border-top-color:rgba(255,255,255,.2);border-right:.6em solid;border-right-color:#999;border-right-color:rgba(255,255,255,.2);border-bottom:.6em solid;border-bottom-color:#999;border-bottom-color:rgba(255,255,255,.2);border-left:.6em solid #fff;-webkit-animation:ba-player-loader-load8 1.1s infinite linear;-moz-animation:ba-player-loader-load8 1.1s infinite linear;animation:ba-player-loader-load8 1.1s infinite linear}.ba-player-loader-loader,.ba-player-loader-loader:after{border-radius:50%;width:10em;height:10em}@-webkit-keyframes ba-player-loader-load8{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes ba-player-loader-load8{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}.ba-videoplayer-noie8 .ba-player-playbutton-container{-webkit-transform:translate(-50%,-50%);-moz-transform:translate(-50%,-50%);-o-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);border:.6em solid;border-color:#999;border-color:rgba(255,255,255,.6);position:absolute;top:50%;left:50%;transition:all .25s ease-in-out;-moz-transition:all .25s ease-in-out;-webkit-transition:all .25s ease-in-out;-o-transition:all .25s ease-in-out;-ms-transition:all .25s ease-in-out;-moz-box-shadow:0 0 22px #000;-webkit-box-shadow:0 0 22px #000;box-shadow:0 0 22px #000;border-radius:50%;box-sizing:content-box;cursor:pointer;font-size:5px;height:10em;text-align:center;width:10em}.ba-videoplayer-noie8 .ba-player-playbutton-container:focus{outline:0;border-radius:50%;border-color:#1b8fcc;-moz-box-shadow:0 0 0 2px #1b8fcc;-webkit-box-shadow:0 0 0 2px #1b8fcc;box-shadow:0 0 0 2px #1b8fcc}.ba-videoplayer-noie8 .ba-player-playbutton-container:focus:hover{border:none}.ba-videoplayer-noie8 .ba-player-playbutton-container:hover{-moz-box-shadow:0 0 22px #eee;-webkit-box-shadow:0 0 22px #eee;box-shadow:0 0 22px #eee}.ba-videoplayer-noie8 .ba-player-playbutton-container:hover .ba-player-playbutton-button::after{text-shadow:0 0 4px #eee}.ba-videoplayer-noie8 .ba-player-playbutton-button::after{font-family:bjsmc;font-style:normal;font-weight:400;speak:none;display:inline-block;text-decoration:inherit;width:1em;margin-right:.2em;text-align:center;font-variant:normal;text-transform:none;line-height:1em;margin-left:.2em;text-shadow:0 0 4px #000;transition:all .25s ease-in-out;-moz-transition:all .25s ease-in-out;-webkit-transition:all .25s ease-in-out;-o-transition:all .25s ease-in-out;-ms-transition:all .25s ease-in-out;content:\"\\E805\";color:#eee;font-size:4.6em}.ba-videoplayer-noie8 .ba-player-playbutton-button::after{line-height:2.3em;margin-left:.1em;width:100%}.ba-player-rerecord-bar{position:absolute;left:0;right:0;bottom:0;background-color:#979797;background-color:rgba(0,0,0,.4)}.ba-player-rerecord-backbar{position:absolute;left:0;right:0;bottom:0;height:48px;opacity:.5}.ba-player-rerecord-frontbar{position:relative;left:0;right:0;bottom:0;height:48px;overflow:hidden;padding-left:16px;padding-right:16px;text-align:center}.ba-player-rerecord-button-container{display:inline-block}.ba-player-rerecord-button{background-color:#000;border-radius:0;color:#eee;cursor:pointer;font-family:sans-serif;font-weight:300;font-size:12px;height:48px;padding:0;padding-left:16px;padding-right:16px;line-height:48px;letter-spacing:.1em}.ba-videoplayer-overlay div[tabindex]{transition:all .3s ease-in-out;-moz-transition:all .3s ease-in-out;-webkit-transition:all .3s ease-in-out;-o-transition:all .3s ease-in-out;-ms-transition:all .3s ease-in-out}.ba-videoplayer-overlay div[tabindex]:focus{-moz-box-shadow:0 0 0 2px #1b8fcc;-webkit-box-shadow:0 0 0 2px #1b8fcc;box-shadow:0 0 0 2px #1b8fcc;outline:0;-moz-outline-style:none}.ba-videoplayer-overlay div[tabindex]:focus:hover,.ba-videoplayer-overlay div[tabindex]:hover{box-shadow:none}.ba-videoplayer-container .ba-videoplayer-overlay .ba-player-dashboard-hidden{opacity:0}.ba-videoplayer-container .ba-videoplayer-overlay .ba-player-dashboard-hidden *{cursor:none}.ba-videoplayer-poster-container,.ba-videoplayer-video-container{background-color:#000}.ba-videoplayer-poster-container,.ba-videoplayer-poster-container img,.ba-videoplayer-video-container,.ba-videoplayer-video-container video{position:absolute;left:0;right:0;top:0;bottom:0;width:100%;height:100%}.ba-videoplayer-video-placeholder{background-color:#e9e9e9;background-image:linear-gradient(#ddd,#e9e9e9);position:absolute;height:100%;width:100%;top:0;left:0;z-index:10}.ba-videoplayer-video-placeholder::after{position:absolute;height:100%;width:100%;content:\"\";-webkit-transform:translateX(-100%);-moz-transform:translateX(-100%);-o-transform:translateX(-100%);-ms-transform:translateX(-100%);transform:translateX(-100%);background:linear-gradient(90deg,transparent,rgba(255,255,255,.6),transparent);animation:ba-videoplayer-loading 1.5s infinite}@keyframes ba-videoplayer-loading{100%{transform:translateX(100%)}}.ba-audioplayer-container .ba-audioplayer-overlay .ba-player-dashboard-hidden{opacity:0}.ba-audioplayer-container .ba-audioplayer-overlay .ba-player-dashboard-hidden *{cursor:none}.ba-videoplayer-overlay,.ba-videoplayer-player-toggle-overlay{position:absolute;left:0;right:0;top:0;bottom:0;overflow:hidden}.ba-player-airplay-container{cursor:pointer;padding-top:4px}.ba-player-airplay-container svg path{fill:#fff}.ba-player-button-inactive{background-color:transparent}.ba-player-button-inactive .ba-commoncss-icon-subtitle{color:#fff}.ba-player-button-active{background:#000}.ba-player-button-active .ba-commoncss-icon-subtitle{color:#eee}.ba-player-share-action-container{transition:all .3s ease-in-out .2s;-moz-transition:all .3s ease-in-out .2s;-webkit-transition:all .3s ease-in-out .2s;-o-transition:all .3s ease-in-out .2s;-ms-transition:all .3s ease-in-out .2s;position:absolute;right:-45px;top:50px;width:90px}.ba-player-share-action-container .ba-player-button-inner{-webkit-transform:translateY(0);-moz-transform:translateY(0);-o-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0);top:0}.ba-player-share-action-container:hover{-webkit-transform:translate(-45px,0);-moz-transform:translate(-45px,0);-o-transform:translate(-45px,0);-ms-transform:translate(-45px,0);transform:translate(-45px,0)}.ba-player-toggle-share-container{background-color:#979797;background-color:rgba(0,0,0,.3);border-bottom-left-radius:5px;border-top-left-radius:5px;color:#fff;float:left;font-size:14px;line-height:45px;text-align:center;width:45px}.ba-player-social-buttons-container{float:right;width:45px}.ba-player-socials-list{background-color:#979797;background-color:rgba(0,0,0,.3);list-style:none;margin:0;padding:0;text-align:center}.ba-player-socials-list>li{cursor:pointer;font-size:14px;width:45px;line-height:45px}.ba-player-socials-list .ba-player-button-inner{color:#eee}.ba-player-text-tracks-overlay{position:absolute;left:0;right:0;bottom:33px;transition:bottom .5s ease-in-out;-moz-transition:bottom .5s ease-in-out;-webkit-transition:bottom .5s ease-in-out;-o-transition:bottom .5s ease-in-out;-ms-transition:bottom .5s ease-in-out}.ba-player-back-arrow-pointer-container{margin-bottom:5px}.ba-player-back-arrow-pointer-container .ba-player-back-arrow-pointer{cursor:pointer;font-size:12px;margin:0 0 10px}.ba-player-cue-content{position:relative;margin:auto;background:#2c2c2c;color:#eee;text-align:center;padding-top:7px;padding-bottom:7px;width:60%}.ba-commoncss-tracks-selector-list-visible{visibility:visible;opacity:1;transition:visibility 0s,opacity .2s linear}.ba-commoncss-tracks-selector-list-hidden{visibility:hidden;opacity:0;transition:visibility 0s,opacity .2s linear}.ba-recorder-controlbar-right-section{float:right}.ba-recorder-controlbar-left-section{float:left}.ba-recorder-overlay .ba-commoncss-icon-state-good{color:#9f9}.ba-recorder-overlay .ba-commoncss-icon-state-bad{color:#f99}.ba-recorder-overlay .ba-videorecorder-settings li{padding:5px 8px}.ba-recorder-overlay .ba-videorecorder-settings li:last-child{padding-bottom:0}.ba-videorecorder-timer-container{cursor:default}.ba-videorecorder-add-stream{cursor:pointer}.ba-recorder-loader-container{-webkit-transform:translate(-50%,-50%);-moz-transform:translate(-50%,-50%);-o-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);position:absolute;top:50%;left:50%}.ba-recorder-loader-loader:before{content:\"\";display:block;padding-top:100%}.ba-recorder-loader-loader{-webkit-transform:translateZ(0);-moz-transform:translateZ(0);-o-transform:translateZ(0);-ms-transform:translateZ(0);transform:translateZ(0);position:relative;width:100%;font-size:5px;box-sizing:content-box;border-top:1.1em solid;border-top-color:#999;border-top-color:rgba(225,225,225,.2);border-right:1.1em solid;border-right-color:#999;border-right-color:rgba(225,225,225,.2);border-bottom:1.1em solid;border-bottom-color:#999;border-bottom-color:rgba(225,225,225,.2);border-left:1.1em solid #ddd;-webkit-animation:ba-recorder-loader-load8 1.1s infinite linear;-moz-animation:ba-recorder-loader-load8 1.1s infinite linear;animation:ba-recorder-loader-load8 1.1s infinite linear}.ba-recorder-loader-loader,.ba-recorder-loader-loader:after{border-radius:50%;width:10em;height:10em}.ba-recorder-loader-label{-webkit-transform:translate(-50%,-50%);-moz-transform:translate(-50%,-50%);-o-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);position:absolute;top:50%;left:50%;font-size:40px;color:#fff}@-webkit-keyframes ba-recorder-loader-load8{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes ba-recorder-loader-load8{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}.ba-recorder-message-container{opacity:1;display:table;height:100%;width:100%}.ba-recorder-message-container .ba-recorder-top-inner-message-container{display:table-cell;vertical-align:middle}.ba-recorder-message-container .ba-recorder-top-inner-message-container.ba-recorder-short-message .ba-recorder-first-inner-message-container{background-color:#7f7f7f;background-color:rgba(255,255,255,.3);-moz-border-radius:50%;-webkit-border-radius:50%;border-radius:50%;position:relative;margin:0 auto;height:162px;width:162px;z-index:4}.ba-recorder-message-container .ba-recorder-top-inner-message-container.ba-recorder-short-message .ba-recorder-first-inner-message-container .ba-recorder-second-inner-message-container{background-color:#b2b2b2;background-color:rgba(255,255,255,.5);-moz-border-radius:50%;-webkit-border-radius:50%;border-radius:50%;height:138px;position:relative;left:12px;top:12px;width:138px;z-index:6}.ba-recorder-message-container .ba-recorder-top-inner-message-container.ba-recorder-short-message .ba-recorder-first-inner-message-container .ba-recorder-second-inner-message-container .ba-recorder-third-inner-message-container{background-color:#e5e5e5;background-color:rgba(255,255,255,.7);-moz-border-radius:50%;-webkit-border-radius:50%;border-radius:50%;height:114px;position:relative;left:12px;top:12px;width:114px;z-index:8}.ba-recorder-message-container .ba-recorder-top-inner-message-container.ba-recorder-short-message .ba-recorder-first-inner-message-container .ba-recorder-second-inner-message-container .ba-recorder-third-inner-message-container .ba-recorder-fourth-inner-message-container{background-color:#eee;display:table;-moz-border-radius:50%;-webkit-border-radius:50%;border-radius:50%;height:90px;left:12px;position:relative;top:12px;width:90px;z-index:10}.ba-recorder-message-container .ba-recorder-top-inner-message-container.ba-recorder-long-message .ba-recorder-first-inner-message-container{background-color:#fff;background-color:rgba(255,255,255,.9);box-sizing:border-box;padding:5px;position:relative;margin:0 auto;width:80%;overflow:hidden}.ba-recorder-message-message{color:#000;display:table-cell;font-size:15px;font-weight:300;letter-spacing:.1em;text-align:center;vertical-align:middle}.ba-recorder-message-message ul{list-style:none;padding-left:0}.ba-recorder-message-message a{border-bottom-style:dashed;border-bottom-width:1px;color:#000;text-decoration:none}.ba-recorder-message-message a:hover{border-bottom-style:solid}.ba-recorder-overlay div[tabindex]{transition:all .3s ease-in-out;-moz-transition:all .3s ease-in-out;-webkit-transition:all .3s ease-in-out;-o-transition:all .3s ease-in-out;-ms-transition:all .3s ease-in-out}.ba-recorder-overlay div[tabindex]:focus{-moz-box-shadow:0 0 0 2px #1b8fcc;-webkit-box-shadow:0 0 0 2px #1b8fcc;box-shadow:0 0 0 2px #1b8fcc;outline:0;-moz-outline-style:none}.ba-recorder-overlay div[tabindex]:focus:hover,.ba-recorder-overlay div[tabindex]:hover{box-shadow:none}.ba-commoncss-settings-menu{background-color:#0a0a0a;background-color:rgba(28,28,28,.9);text-shadow:0 0 2px rgba(0,0,0,.5);border-radius:2px;min-width:150px;overflow:hidden;position:absolute;right:5px;bottom:43px}.ba-commoncss-settings-menu-overlay{display:table;width:100%}.ba-commoncss-settings-menu-item{box-sizing:content-box;cursor:pointer;display:table-row;line-height:1.3em;padding:0 4px;outline:0;height:32px}.ba-commoncss-settings-menu-item:hover{background-color:#777;background-color:rgba(255,255,255,.1)}.ba-commoncss-settings-menu-item>div{font-family:sans-serif,Arial;font-size:.9em;color:#fafafa;display:table-cell;vertical-align:middle;padding:0 15px}.ba-commoncss-settings-menu-item>.ba-commoncss-setting-option-value{text-align:right}.ba-commoncss-settings-menu-item .ba-commoncss-setting-menu-icon{font-size:.9em;width:100%;text-align:right}.ba-commoncss-settings-menu-item .ba-commoncss-setting-option-value:after{content:\"\\203A\";padding-left:2px}.ba-commoncss-setting-menu-options-title,.ba-commoncss-settings-menu-options-item{box-sizing:content-box;cursor:pointer;display:block;line-height:1.3em;padding:5px 10px;text-align:center}.ba-commoncss-setting-menu-options-title>div,.ba-commoncss-settings-menu-options-item>div{color:#fafafa;font-family:sans-serif,Arial;font-size:.8em;font-weight:100}.ba-commoncss-setting-menu-options-title:hover,.ba-commoncss-settings-menu-options-item:hover{background-color:#777;background-color:rgba(255,255,255,.1)}.ba-commoncss-setting-menu-options-title{border-bottom:1px solid;border-bottom-color:#ccc;border-bottom-color:rgba(255,255,255,.3)}.ba-commoncss-setting-menu-options-title:before{color:#fafafa;content:\"\\2039\";float:left;line-height:1.2em;padding-right:10px}@keyframes ba-commoncss-fade-in{0%{opacity:0}100%{opacity:1}}@keyframes ba-commoncss-fade-in-up{0%{opacity:0}100%{transform:translateY(0);opacity:1}}.ba-commoncss-sticky{position:fixed!important;height:auto!important;min-height:initial!important;max-width:360px;bottom:20px;right:20px;animation:ba-commoncss-fade-in .75s ease forwards}.ba-commoncss-fade-up{transform:translateY(100%);animation:ba-commoncss-fade-in-up .75s ease forwards}@media (max-width:980px){.ba-commoncss-sticky{max-width:50%}}.ba-commoncss-full-width{width:100%}.ba-commoncss-half-width{width:50%}.ba-commoncss-text-center{text-align:center}.ba-commoncss-text-right{text-align:right}.ba-commoncss-text-left{text-align:left}.ba-commoncss-pull-right{float:right}.ba-commoncss-disabled,.ba-commoncss-disabled *{cursor:not-allowed;-moz-opacity:.5;-khtml-opacity:.5;opacity:.5}.ba-commoncss-accent-color{color:#8cf}.ba-commoncss-accent-color-bg{background-color:#8cf}.ba-commoncss-accent-color-border{border-color:#8cf}.ba-commoncss-text-info{color:#5dbb96}.ba-commoncss-text-error{color:#dd4b39}.ba-commoncss-clickable{cursor:pointer}.ba-commoncss-crop-fit{object-fit:cover}.ba-commoncss-pad-fit{object-fit:contain}.ba-commoncss-original-fit{object-fit:none}.ba-commoncss-message-container{position:relative;margin:auto;margin-top:10px;max-width:90%;text-align:center}.ba-commoncss-message-container ul{list-style:none;padding:0;margin:0}.ba-commoncss-message-container ul li{padding:4px 10px;margin-bottom:2px}.ba-commoncss-message-warning{color:#0a0a0a;background-color:#f1d44f}.ba-commoncss-message-success{color:#0a0a0a;background-color:#9ebc9f}.ba-commoncss-message-error{color:#fff;background-color:#ff6256}.ba-commoncss-action-button{cursor:pointer;float:right;text-align:right}.ba-commoncss-open-next>.ba-commoncss-inner-icon,.ba-commoncss-open-next>.ba-commoncss-inner-text,.ba-commoncss-open-previous>.ba-commoncss-inner-icon,.ba-commoncss-open-previous>.ba-commoncss-inner-text{font-family:\"Open Sans\",\"Helvetica Neue\",Helvetica,Arial,sans-serif;font-size:14px;line-height:1.5em;display:inline-block;vertical-align:middle}.ba-commoncss-open-next>.ba-commoncss-inner-icon,.ba-commoncss-open-previous>.ba-commoncss-inner-icon{font-family:bjsmc;font-style:normal;font-weight:400;speak:none;display:inline-block;text-decoration:inherit;width:1em;margin-right:.2em;text-align:center;font-variant:normal;text-transform:none;line-height:1em;margin-left:.2em;color:#eee;position:relative}.ba-commoncss-open-next>.ba-commoncss-inner-icon:after{content:\"\\F105\";left:5px}.ba-commoncss-open-previous>.ba-commoncss-inner-icon{float:left;line-height:1.5}.ba-commoncss-open-previous>.ba-commoncss-inner-icon:before{content:\"\\F104\";right:5px}.ba-commoncss-button{color:#333;background-color:#fff;border-radius:0;padding:5px 10px;font-size:14px;line-height:1.42857143;text-align:center;white-space:nowrap;cursor:pointer}.ba-commoncss-form .ba-commoncss-form-input.ba-commoncss-select-field{border:1px solid #ccc;cursor:pointer;min-width:130px;min-height:25px;overflow:hidden}.ba-commoncss-form .ba-commoncss-form-input.ba-commoncss-select-field select{background-color:#555;background-color:rgba(0,0,0,.7);border:none;box-sizing:border-box;box-shadow:none;cursor:pointer;padding:5px 8px;position:relative;width:100%;z-index:1;-moz-appearance:none;-webkit-appearance:none}.ba-commoncss-form .ba-commoncss-form-input.ba-commoncss-select-field select:focus{outline:0}.ba-commoncss-form .ba-commoncss-form-input.ba-commoncss-select-field:after{font-family:bjsmc;font-style:normal;font-weight:400;speak:none;display:inline-block;text-decoration:inherit;width:1em;margin-right:.2em;text-align:center;font-variant:normal;text-transform:none;line-height:1em;margin-left:.2em;-webkit-transform:translateY(-50%);-moz-transform:translateY(-50%);-o-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);content:\"\\F107\";color:#eee;position:absolute;right:15px;top:50%}.ba-commoncss-form .ba-commoncss-form-input input[type=file]{-moz-opacity:0;-khtml-opacity:0;opacity:0;bottom:0;cursor:pointer;left:0;position:absolute;z-index:100}.ba-commoncss-form .ba-commoncss-form-input input[type=file]::-webkit-file-upload-button{cursor:pointer}.ba-commoncss-form .ba-commoncss-form-input.ba-commoncss-error{border:1px solid #dd4b39}.ba-commoncss-form .ba-commoncss-form-input input[type=submit]{background:#2c2c2c;color:#ccc}.ba-commoncss-form .ba-commoncss-form-input input{width:100%;box-sizing:border-box;padding:5px 10px}.ba-commoncss-options-popup{background-color:#555;background-color:rgba(0,0,0,.7);transition:opacity .2s ease-in-out;-moz-transition:opacity .2s ease-in-out;-webkit-transition:opacity .2s ease-in-out;-o-transition:opacity .2s ease-in-out;-ms-transition:opacity .2s ease-in-out;box-sizing:border-box;bottom:3px;min-width:140px;overflow:hidden;position:absolute;right:5px;z-index:10}.ba-commoncss-options-popup .ba-commoncss-options-list{padding:0;margin:0;width:100%}.ba-commoncss-options-popup .ba-commoncss-options-list .ba-commoncss-options-list-item{outline:0;-moz-outline-style:none;box-sizing:border-box;cursor:pointer;color:#eee;display:list-item;font-weight:200;letter-spacing:.03em;padding:5px 10px;white-space:nowrap;width:100%}.ba-commoncss-options-popup .ba-commoncss-options-list .ba-commoncss-options-list-item>.ba-commoncss-inner-text{font-family:\"Open Sans\",\"Helvetica Neue\",Helvetica,Arial,sans-serif;font-size:14px;float:left}.ba-commoncss-options-popup .ba-commoncss-options-list .ba-commoncss-options-list-item.ba-commoncss-inner-icon{margin:0;padding:5px 0 5px 10px}.ba-commoncss-options-popup .ba-commoncss-options-list .ba-commoncss-options-list-item:hover{background-color:#555;background-color:rgba(255,255,255,.1)}.ba-commoncss-options-list-visible{visibility:visible;opacity:1;transition:visibility 0s,opacity .5s linear}.ba-commoncss-options-list-visible.ba-commoncss-button{background-color:#979797;color:#eee;margin-top:5px}.ba-commoncss-options-list-hidden{visibility:hidden;opacity:0;transition:visibility 0s,opacity .5s linear;display:none}.ba-commoncss-options-list-hidden.ba-commoncss-button{background-color:#979797;color:#eee;margin-top:5px}.ba-commoncss-form .ba-commoncss-form-input.ba-commoncss-disabled input{cursor:not-allowed;-moz-opacity:.5;-khtml-opacity:.5;opacity:.5}.ba-commoncss-form .ba-commoncss-form-input.ba-commoncss-disabled input[type=file]{-moz-opacity:0;-khtml-opacity:0;opacity:0}.ba-commoncss-form .ba-commoncss-form-input.ba-commoncss-select-field{margin-bottom:7px}.ba-commoncss-form .ba-commoncss-form-input.ba-commoncss-select-field select{color:#eee}.ba-commoncss-form .ba-commoncss-form-input.ba-commoncss-select-field:after{position:relative;right:30px;top:10px}.ba-commoncss-icon-right-open:before{margin-right:0}.ba-commoncss-icon-left-open:before{margin-left:0}.ba-player-red-color .ba-videoplayer-button-inner,.ba-player-red-color .ba-videoplayer-title{color:#eb6a74}.ba-player-red-color .ba-videoplayer-playbutton-duration,.ba-player-red-color .ba-videoplayer-primary-button,.ba-player-red-color .ba-videoplayer-progressbar-position,.ba-player-red-color .ba-videoplayer-rerecord-button,.ba-player-red-color .ba-videoplayer-volumebar-position{background-color:#eb6a74}.ba-player-red-color .ba-videoplayer-volumebar-inner{background-color:#7f7f7f;background-color:rgba(255,255,255,.3)}.ba-player-blue-color .ba-videoplayer-button-inner,.ba-player-blue-color .ba-videoplayer-title{color:#2a74eb}.ba-player-blue-color .ba-videoplayer-playbutton-duration,.ba-player-blue-color .ba-videoplayer-primary-button,.ba-player-blue-color .ba-videoplayer-progressbar-position,.ba-player-blue-color .ba-videoplayer-rerecord-button,.ba-player-blue-color .ba-videoplayer-volumebar-position{background-color:#2a74eb}.ba-player-blue-color .ba-videoplayer-volumebar-inner{background-color:#7f7f7f;background-color:rgba(255,255,255,.3)}.ba-player-green-color .ba-videoplayer-button-inner,.ba-player-green-color .ba-videoplayer-title{color:#5daa96}.ba-player-green-color .ba-videoplayer-playbutton-duration,.ba-player-green-color .ba-videoplayer-primary-button,.ba-player-green-color .ba-videoplayer-progressbar-position,.ba-player-green-color .ba-videoplayer-rerecord-button,.ba-player-green-color .ba-videoplayer-volumebar-position{background-color:#5daa96}.ba-player-green-color .ba-videoplayer-volumebar-inner{background-color:#7f7f7f;background-color:rgba(255,255,255,.3)}.ba-player-dashboard{position:absolute;left:0;right:0;bottom:0;transition:opacity .5s ease-in-out;-moz-transition:opacity .5s ease-in-out;-webkit-transition:opacity .5s ease-in-out;-o-transition:opacity .5s ease-in-out;-ms-transition:opacity .5s ease-in-out}.ba-videoplayer-progressbar{cursor:pointer;transition:height .1s ease-in-out;-moz-transition:height .1s ease-in-out;-webkit-transition:height .1s ease-in-out;-o-transition:height .1s ease-in-out;-ms-transition:height .1s ease-in-out;height:9px;background-color:#999}.ba-videoplayer-progressbar-chapters .ba-videoplayer-chapters-list-container{display:block;list-style:none;margin:0;padding:0;position:absolute;width:100%}.ba-videoplayer-progressbar-chapters .ba-videoplayer-chapters-list-item{background:#0f0f0f;cursor:pointer;height:10px;position:absolute;top:-.5px;width:3px;z-index:10}.ba-videoplayer-progressbar-chapters .ba-videoplayer-chapters-item-text{background:#ccc;bottom:15px;font-size:11px;left:-60px;min-width:120px;opacity:.7;padding:3px;position:absolute;text-align:center}.ba-videoplayer-progressbar.ba-player-disabled,.ba-videoplayer-progressbar.ba-player-disabled .ba-videoplayer-progressbar-cache,.ba-videoplayer-progressbar.ba-player-disabled .ba-videoplayer-progressbar-inner,.ba-videoplayer-progressbar.ba-player-disabled .ba-videoplayer-progressbar-position{cursor:not-allowed}.ba-videoplayer-progressbar-small{height:3px}.ba-videoplayer-progressbar-small .ba-videoplayer-progressbar-chapters .ba-videoplayer-chapters-list-item{height:3.5px;top:-.25px}.ba-videoplayer-progressbar-position{transition:height .1s ease-in-out;-moz-transition:height .1s ease-in-out;-webkit-transition:height .1s ease-in-out;-o-transition:height .1s ease-in-out;-ms-transition:height .1s ease-in-out;position:absolute;background-color:#8cf;height:9px}.ba-videoplayer-progressbar-small .ba-videoplayer-progressbar-position{height:3px;left:-7px}.ba-videoplayer-progressbar-cache{position:absolute;left:0;transition:height .1s ease-in-out;-moz-transition:height .1s ease-in-out;-webkit-transition:height .1s ease-in-out;-o-transition:height .1s ease-in-out;-ms-transition:height .1s ease-in-out;background-color:#eee;height:9px}.ba-videoplayer-progressbar-small .ba-videoplayer-progressbar-cache{height:3px}.ba-videoplayer-progressbar-button{-moz-border-radius:5px;-webkit-border-radius:5px;border-radius:5px;background-color:#fff;box-sizing:content-box;border:1px solid #999;position:absolute;right:-5px;top:-2px;width:11px;height:11px;z-index:20}.ba-videoplayer-progressbar-marker{background-color:#fff;border:1px solid #999;box-sizing:content-box;position:absolute;width:6.75px;top:-4px;height:17px}.ba-videoplayer-progressbar-small .ba-videoplayer-progressbar-button{display:none}.ba-videoplayer-backbar{position:absolute;left:0;right:0;bottom:0;height:30px;background-color:#000;opacity:.7}.ba-videoplayer-controlbar{position:relative;left:0;right:0;bottom:0;height:30px;overflow:hidden}.ba-videoplayer-leftbutton-container{float:left;width:50px;height:100%;cursor:pointer}.ba-videoplayer-rightbutton-container{cursor:pointer;padding:0 8px}.ba-videoplayer-noie8 .ba-videoplayer-rightbutton-container{float:right;width:auto;height:100%}.ba-videoplayer-ie8 .ba-videoplayer-rightbutton-container{float:right;width:auto;height:1px}.ba-videoplayer-noie8 .ba-videoplayer-cast-button-container{line-height:40px;width:auto}.ba-videoplayer-cast-button-container button{-moz-opacity:.7;-khtml-opacity:.7;opacity:.7;background:0 0;border:none;cursor:pointer;width:32px}.ba-player-airplay-container,.ba-videoplayer-button-inner{-webkit-transform:translateY(-50%);-moz-transform:translateY(-50%);-o-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);top:50%;position:relative;text-align:center;cursor:pointer;color:#fff;font-size:14px}.ba-videoplayer-button-text{font-family:Arial;font-weight:700}.ba-videoplayer-ie8 .ba-videoplayer-button-inner{margin-top:6px}.ba-videoplayer-noie8 .ba-videoplayer-time-container{float:left;width:95px;height:100%;text-align:center;font-family:Arial,sans-serif;font-size:13px;color:#fff}.ba-videoplayer-ie8 .ba-videoplayer-time-container{float:left;width:95px;height:50%;text-align:center;font-family:Arial,sans-serif;font-size:13px;color:#fff;margin-top:6px}.ba-videoplayer-time-value{-webkit-transform:translateY(-50%);-moz-transform:translateY(-50%);-o-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);top:50%;position:relative;text-align:center;float:left;width:40px}.ba-videoplayer-time-sep{-webkit-transform:translateY(-50%);-moz-transform:translateY(-50%);-o-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);top:50%;position:relative;text-align:center;float:left;width:15px}.ba-videoplayer-noie8 .ba-videoplayer-volumebar{float:right;width:100px;height:100%;margin-left:8px;margin-right:13px}.ba-videoplayer-ie8 .ba-videoplayer-volumebar{float:right;width:100px;height:50%;margin-top:10px;margin-right:15px}.ba-videoplayer-volumebar-inner{-webkit-transform:translateY(-50%);-moz-transform:translateY(-50%);-o-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);top:50%;position:relative;text-align:center;border-bottom-left-radius:4px;border-bottom-right-radius:4px;border-top-left-radius:4px;border-top-right-radius:4px;cursor:pointer;background-color:#999;height:8px}.ba-videoplayer-volumebar-position{border-bottom-left-radius:4px;border-bottom-right-radius:4px;border-top-left-radius:4px;border-top-right-radius:4px;position:absolute;left:0;background-color:#8cf;height:100%}.ba-videoplayer-volumebar-button{-moz-border-radius:6px;-webkit-border-radius:6px;border-radius:6px;cursor:pointer;background-color:#fff;box-sizing:content-box;border:1px solid #999;position:absolute;right:-6px;top:-2px;z-index:1;width:11px;height:11px}.ba-videoplayer-title{color:#fff;font-family:sans-serif,Arial;font-weight:300;font-size:12px;float:left;letter-spacing:.1em;line-height:30px;margin:0 0 0 10px}.ba-videoplayer-seeking-thumb-container{position:absolute;padding:3px 4px;background-color:#fff;bottom:45px;left:5px;text-align:center}.ba-videoplayer-seeking-thumb-container>span{font-size:.6em;color:#2c2c2c}.ba-player-device-type-mobile .ba-videoplayer-leftbutton-container{float:left;width:40px;height:100%}.ba-player-size-medium .ba-videoplayer-time-sep{width:5px}.ba-player-size-medium.ba-videoplayer-noie8 .ba-videoplayer-time-container{float:left;width:85px;height:100%}.ba-player-size-medium.ba-videoplayer-noie8 .ba-videoplayer-volumebar{float:right;width:60px;height:100%}.ba-player-size-small.ba-videoplayer-noie8 .ba-videoplayer-time-container{float:left;width:40px;height:100%}.ba-player-size-small .ba-videoplayer-time-sep,.ba-player-size-small .ba-videoplayer-time-total-duration{display:none}.ba-player-size-small.ba-videoplayer-noie8 .ba-videoplayer-volumebar{float:right;width:45px;height:100%}.ba-player-fullscreen-view video::-webkit-media-controls-overlay-enclosure{display:none}.ba-player-fullscreen-view video::-webkit-media-controls-enclosure{display:none}.ba-player-fullscreen-view video::-webkit-media-controls{display:none}.ba-player-fullscreen-view video::-webkit-media-controls-panel{display:none}.ba-player-fullscreen-view video::-webkit-media-controls-play-button{display:none}.ba-player-fullscreen-view video::-webkit-media-controls-current-time-display{display:none}.ba-player-fullscreen-view video::-webkit-media-controls-time-remaining-display{display:none}.ba-player-fullscreen-view video::-webkit-media-controls-timeline{display:none}.ba-player-fullscreen-view video::-webkit-media-controls-mute-button{display:none}.ba-player-fullscreen-view video::-webkit-media-controls-volume-slider{display:none}.ba-player-fullscreen-view video::-webkit-media-controls-fullscreen-button{display:none}.ba-player-fullscreen-view video::-internal-media-controls-download-button{display:none}.ba-player-fullscreen-view video::-moz-list-bullet,.ba-player-fullscreen-view video::-moz-list-number{display:none}.ba-player-fullscreen-view video::-moz-meter-bar{display:none}.ba-player-fullscreen-view video:fullscreen:not(:root){display:none}.ba-player-fullscreen-view video,.ba-player-fullscreen-view>div{height:100%}.ba-player-fullscreen-view .ba-videoplayer-dashboard{bottom:0}.ba-player-fullscreen-view .ba-videoplayer-title-block{top:0}.ba-player-fullscreen-view.ba-player-firefox-browser .ba-videoplayer-dashboard,.ba-player-fullscreen-view.ba-player-firefox-browser .ba-videoplayer-title-block{position:fixed;z-index:100}.ba-videoplayer-container.ba-player-fullscreen-view{min-width:100%;position:absolute;min-height:fit-content}.ba-videoplayer-container.ba-player-fullscreen-view>.ba-videoplayer-overlay{position:fixed}.ba-videoplayer-message-container{position:absolute;left:0;right:0;top:0;bottom:0;background-color:#000;opacity:.75}.ba-videoplayer-message-message{-webkit-transform:translateY(-50%);-moz-transform:translateY(-50%);-o-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);color:#fff;position:absolute;left:5px;right:5px;top:50%;text-align:center}.ba-videoplayer-noie8 .ba-videoplayer-playbutton-container{position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);-moz-transform:translate(-50%,-50%);-o-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);width:15%}.ba-videoplayer-noie8 .ba-videoplayer-playbutton-container:focus{outline:0;border-radius:50%;border-color:#1b8fcc;-moz-box-shadow:0 0 0 2px #1b8fcc;-webkit-box-shadow:0 0 0 2px #1b8fcc;box-shadow:0 0 0 2px #1b8fcc}.ba-videoplayer-noie8 .ba-videoplayer-playbutton-container:focus:active,.ba-videoplayer-noie8 .ba-videoplayer-playbutton-container:focus:hover{border:none}.ba-videoplayer-noie8 .ba-videoplayer-playbutton-button{transition:opacity .25 ease-in-out;-moz-transition:opacity .25 ease-in-out;-webkit-transition:opacity .25 ease-in-out;-o-transition:opacity .25 ease-in-out;-ms-transition:opacity .25 ease-in-out;background-color:transparent;background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbDpzcGFjZT0icHJlc2VydmUiIHZpZXdCb3g9IjAgMCA0MCA0MCIgdmVyc2lvbj0iMS4xIiB5PSIwcHgiIHg9IjBweCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDQwIDQwIj48Zz48cGF0aCBmaWxsPSJncmF5IiBkPSJtMzcuMyAxMGMtNS41LTkuNi0xNy43LTEyLjgtMjcuMy03LjNzLTEyLjggMTcuNy03LjMgMjcuMyAxNy44IDEyLjggMjcuMyA3LjNjOS42LTUuNSAxMi44LTE3LjcgNy4zLTI3LjN6IiAvPjxwYXRoIGZpbGw9IndoaXRlIiBkPSJtMzcuMyAxMGMtNS41LTkuNi0xNy43LTEyLjgtMjcuMy03LjNzLTEyLjggMTcuNy03LjMgMjcuMyAxNy44IDEyLjggMjcuMyA3LjNjOS42LTUuNSAxMi44LTE3LjcgNy4zLTI3LjN6bS05LjMgMjMuOWMtNy43IDQuNC0xNy40IDEuOC0yMS45LTUuOS00LjQtNy42LTEuNy0xNy40IDUuOS0yMS45IDcuNy00LjQgMTcuNC0xLjggMjEuOSA1LjkgNC40IDcuNyAxLjggMTcuNC01LjkgMjEuOXptLTAuOC0xNC43bC0xMC41LTYuMWMtMS4yLTAuNC0xLjQtMC4yLTEuNyAxbDAuMSAxMi4xYzAuMiAxLjIgMC42IDEuNCAxLjcgMWwxMC40LTZjMC45LTAuNyAwLjktMS4zIDAtMnoiLz48L2c+PC9zdmc+Cg==);background-origin:padding-box;background-repeat:no-repeat;background-size:contain;cursor:pointer;display:block;opacity:.75;padding-top:100%;position:relative;width:100%}.ba-videoplayer-noie8 .ba-videoplayer-playbutton-button:hover{opacity:.9}.ba-videoplayer-ie8 .ba-videoplayer-playbutton-button{position:absolute;left:0;right:0;top:0;bottom:0;background-color:transparent;background-image:url(data:image/png;base64,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);background-repeat:no-repeat;cursor:pointer;height:64px;margin:auto;width:64px}.ba-videoplayer-rerecord-bar{position:absolute;left:0;right:0;bottom:0}.ba-videoplayer-rerecord-backbar{position:absolute;left:0;right:0;bottom:0;height:32px;background-color:#000;opacity:.1}.ba-videoplayer-rerecord-frontbar{position:relative;left:0;right:0;bottom:0;height:32px;overflow:hidden;padding-left:16px;padding-right:16px;display:flex;justify-content:center}.ba-videoplayer-rerecord-button-container{height:100%;cursor:pointer;padding-left:8px;padding-right:8px;display:inline-block;position:relative}.ba-videoplayer-rerecord-button{-webkit-transform:translateY(-50%);-moz-transform:translateY(-50%);-o-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);top:50%;position:relative;text-align:center;cursor:pointer;border-radius:2px;padding:4px;padding-left:8px;padding-right:8px;background-color:#8cf;color:#fff;font-family:Arial,sans-serif;font-weight:400;font-size:14px}.ba-videoplayer-playbutton-duration{background-color:gray;color:#fff;font-family:Arial,sans-serif;font-weight:400;font-size:14px;float:right;margin:5px;padding:2px}.ba-videoplayer-container{display:inline-block;position:relative;overflow:hidden;z-index:1}.ba-videoplayer-video{background-color:#000;display:block}.ba-videoplayer-container video::-webkit-media-controls-start-playback-button{display:none;-webkit-appearance:none;-moz-appearance:none}.ba-player-disabled{cursor:not-allowed;-moz-opacity:.5;-khtml-opacity:.5;opacity:.5}.ba-player-disabled *{cursor:not-allowed}.ba-videoplayer-primary-button{-webkit-transform:translateY(-50%);-moz-transform:translateY(-50%);-o-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);top:50%;position:relative;text-align:center;cursor:pointer;border-radius:2px;padding:4px;padding-left:8px;padding-right:8px;background-color:#8cf;color:#fff;font-family:Arial,sans-serif;font-weight:400;font-size:14px}.ba-videoplayer-topmessage-container{position:absolute;left:0;right:0;top:0}.ba-videoplayer-topmessage-message{position:absolute;left:0;right:0;top:0;font-family:Arial,sans-serif;font-size:16px;font-weight:400;color:#fff;padding:8px;text-align:center}.ba-videoplayer-topmessage-background{background-color:#000;height:32px;opacity:.1;position:absolute;width:100%}.ba-videoplayer-container .ba-player-text-tracks-overlay{position:absolute;left:0;right:0;bottom:39px;transition:bottom .5s ease-in-out;-moz-transition:bottom .5s ease-in-out;-webkit-transition:bottom .5s ease-in-out;-o-transition:bottom .5s ease-in-out;-ms-transition:bottom .5s ease-in-out}.ba-videoplayer-container .ba-player-text-tracks-overlay .ba-commoncss-options-popup{bottom:2px;right:0}.ba-videoplayer-container .ba-player-track-dashboard-hidden.ba-player-text-tracks-overlay{bottom:5px}.ba-videorecorder-chooser-container{position:absolute;left:0;right:0;top:0;bottom:0;background-color:#fdfdfd}.ba-videorecorder-chooser-file{position:absolute;-moz-opacity:0;-khtml-opacity:0;opacity:0;width:100%;height:100%;cursor:pointer;left:0;top:0;z-index:100}.ba-videorecorder-chooser-file::-webkit-file-upload-button{cursor:pointer}.ba-videorecorder-chooser-button-container{position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);-moz-transform:translate(-50%,-50%);-o-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);text-align:center}.ba-videorecorder-chooser-button-0,.ba-videorecorder-chooser-button-2{cursor:pointer;-moz-border-radius:4px;-webkit-border-radius:4px;border-radius:4px;background-color:#8cf;color:#fff;padding:12px;padding-left:32px;padding-right:32px;font-family:Arial,sans-serif;font-size:14px;text-align:center;position:relative;white-space:nowrap}.ba-videorecorder-chooser-button-1,.ba-videorecorder-chooser-button-3{cursor:pointer;color:#8cf;font-family:Arial,sans-serif;font-size:14px;text-align:center;padding:8px;position:relative;white-space:nowrap}.ba-recorder-red-color .ba-commoncss-accent-color,.ba-recorder-red-color .ba-videorecorder-button-inner,.ba-recorder-red-color .ba-videorecorder-chooser-button-1,.ba-recorder-red-color .ba-videorecorder-chooser-button-3,.ba-recorder-red-color .ba-videorecorder-loader-label{color:#eb6a74}.ba-recorder-red-color .ba-commoncss-accent-color-bg,.ba-recorder-red-color .ba-videorecorder-button-primary,.ba-recorder-red-color .ba-videorecorder-chooser-button-0,.ba-recorder-red-color .ba-videorecorder-chooser-button-2,.ba-recorder-red-color .ba-videorecorder-imagegallery-leftbutton,.ba-recorder-red-color .ba-videorecorder-imagegallery-rightbutton{background-color:#eb6a74}.ba-recorder-red-color .ba-commoncss-accent-color-border,.ba-recorder-red-color .ba-videorecorder-imagegallery-image:hover,.ba-recorder-red-color .ba-videorecorder-settings input[type=radio]:checked+span{border-color:#eb6a74}.ba-recorder-red-color .ba-videorecorder-message-message a{color:#eb6a74}.ba-recorder-red-color .ba-videorecorder-imagegallery-button-inner{color:#fff}.ba-recorder-blue-color .ba-commoncss-accent-color,.ba-recorder-blue-color .ba-videorecorder-button-inner,.ba-recorder-blue-color .ba-videorecorder-chooser-button-1,.ba-recorder-blue-color .ba-videorecorder-chooser-button-3,.ba-recorder-blue-color .ba-videorecorder-loader-label{color:#2a74eb}.ba-recorder-blue-color .ba-commoncss-accent-color-bg,.ba-recorder-blue-color .ba-videorecorder-button-primary,.ba-recorder-blue-color .ba-videorecorder-chooser-button-0,.ba-recorder-blue-color .ba-videorecorder-chooser-button-2,.ba-recorder-blue-color .ba-videorecorder-imagegallery-leftbutton,.ba-recorder-blue-color .ba-videorecorder-imagegallery-rightbutton{background-color:#2a74eb}.ba-recorder-blue-color .ba-commoncss-accent-color-border,.ba-recorder-blue-color .ba-videorecorder-imagegallery-image:hover,.ba-recorder-blue-color .ba-videorecorder-settings input[type=radio]:checked+span{border-color:#2a74eb}.ba-recorder-blue-color .ba-videorecorder-message-message a{color:#2a74eb}.ba-recorder-blue-color .ba-videorecorder-imagegallery-button-inner{color:#fff}.ba-recorder-green-color .ba-commoncss-accent-color,.ba-recorder-green-color .ba-videorecorder-button-inner,.ba-recorder-green-color .ba-videorecorder-chooser-button-1,.ba-recorder-green-color .ba-videorecorder-chooser-button-3,.ba-recorder-green-color .ba-videorecorder-loader-label{color:#5daa96}.ba-recorder-green-color .ba-commoncss-accent-color-bg,.ba-recorder-green-color .ba-videorecorder-button-primary,.ba-recorder-green-color .ba-videorecorder-chooser-button-0,.ba-recorder-green-color .ba-videorecorder-chooser-button-2,.ba-recorder-green-color .ba-videorecorder-imagegallery-leftbutton,.ba-recorder-green-color .ba-videorecorder-imagegallery-rightbutton{background-color:#5daa96}.ba-recorder-green-color .ba-commoncss-accent-color-border,.ba-recorder-green-color .ba-videorecorder-imagegallery-image:hover,.ba-recorder-green-color .ba-videorecorder-settings input[type=radio]:checked+span{border-color:#5daa96}.ba-recorder-green-color .ba-videorecorder-message-message a{color:#5daa96}.ba-recorder-green-color .ba-videorecorder-imagegallery-button-inner{color:#fff}.ba-videorecorder-dashboard{position:absolute;left:0;right:0;bottom:0}.ba-videorecorder-dashboard .ba-commoncss-icon-state-good{color:#0f0}.ba-videorecorder-dashboard .ba-commoncss-icon-state-bad{color:red}.ba-videorecorder-backbar{position:absolute;left:0;right:0;bottom:0;height:32px;background-color:#000;opacity:.1}.ba-videorecorder-controlbar{position:relative;left:0;right:0;bottom:0;height:32px;overflow:hidden;padding-left:16px;padding-right:16px}.ba-videorecorder-label-container{position:absolute;left:0;right:0;top:0}.ba-videorecorder-label-label{position:absolute;left:0;right:0;top:0;font-family:Arial,sans-serif;font-size:16px;font-weight:400;color:#fff;padding:7px;text-align:center}.ba-videorecorder-recording-indication{-webkit-transform:translateY(-50%);-moz-transform:translateY(-50%);-o-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);top:50%;position:relative;text-align:center;background:red;width:12px;height:12px;margin-left:12px;margin-right:12px;border-radius:12px}.ba-videorecorder-rightbutton-container{float:right;height:100%;cursor:pointer;padding-left:8px;padding-right:8px}.ba-videorecorder-centerbutton-container{-webkit-transform:translateX(-50%);-moz-transform:translateX(-50%);-o-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%);cursor:pointer;display:inline-block;position:relative;left:50%;height:100%;padding-left:8px;padding-right:8px;z-index:10}.ba-videorecorder-lefticon-container{float:left;height:100%}.ba-videorecorder-leftbutton-container{float:left;height:100%;cursor:pointer}.ba-videorecorder-button-primary{-webkit-transform:translateY(-50%);-moz-transform:translateY(-50%);-o-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);top:50%;position:relative;text-align:center;cursor:pointer;border-radius:2px;margin-left:10px;margin-right:10px;padding:4px;padding-left:8px;padding-right:8px;background-color:#8cf;color:#fff;font-family:Arial,sans-serif;font-weight:400;font-size:14px;border:none}.ba-videorecorder-button-inner{-webkit-transform:translateY(-50%);-moz-transform:translateY(-50%);-o-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);top:50%;position:relative;text-align:center;color:#fff;cursor:pointer;font-size:14px;margin-left:4px;margin-right:4px;padding:3px;border:1px solid #fff;border-radius:2px}.ba-commoncss-icon-inner{-webkit-transform:translateY(-50%);-moz-transform:translateY(-50%);-o-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);top:50%;position:relative;text-align:center;color:#fff;font-size:14px;margin-left:4px;margin-right:4px;padding:3px;padding-left:3px;padding-right:3px;border:1px solid #fff;border-radius:2px}.ba-videorecorder-button-selected{border:1px solid #8cf;color:#8cf;background-color:#fff}.ba-player-size-small .ba-videorecorder-lefticon-container{display:none}.ba-videorecorder-imagegallery-leftbutton{-webkit-transform:translateY(-50%);-moz-transform:translateY(-50%);-o-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);position:absolute;margin-left:10px;margin-right:10px;top:50%;left:0;width:20px;height:20px}.ba-videorecorder-imagegallery-rightbutton{-webkit-transform:translateY(-50%);-moz-transform:translateY(-50%);-o-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);position:absolute;margin-left:10px;margin-right:10px;top:50%;right:0;width:20px;height:20px}.ba-videorecorder-imagegallery-container{position:absolute;top:0;bottom:0;left:40px;right:40px}.ba-videorecorder-imagegallery-image{z-index:2;position:absolute;box-sizing:border-box;cursor:pointer;border:2px solid gray}.ba-videorecorder-imagegallery-image:hover{border:2px solid #fff}.ba-videorecorder-imagegallery-image-compat{cursor:pointer;background:#fff;opacity:.01;width:100%;height:100%}.ba-videorecorder-imagegallery-button-inner{-webkit-transform:translateY(-50%);-moz-transform:translateY(-50%);-o-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);top:50%;position:relative;text-align:center;cursor:pointer;color:#ccc;font-size:14px}.ba-videorecorder-message-container{position:absolute;left:0;right:0;top:0;bottom:0;background-color:#000;opacity:.75}ba-videorecorder-message[ba-message=\"\"],ba-videorecorder-message[ba-message=null]{display:none}.ba-videorecorder-message-message{-webkit-transform:translateY(-50%);-moz-transform:translateY(-50%);-o-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);color:#fff;position:absolute;left:5px;right:5px;top:50%;text-align:center}.ba-videorecorder-message-message ul{list-style:none;padding-left:0}.ba-videorecorder-message-message a{border-bottom-style:dashed;border-bottom-width:1px;color:#fff;text-decoration:none}.ba-videorecorder-message-message a:hover{border-bottom-style:solid}.ba-videorecorder-container{display:inline-block;position:relative;background-color:#000;overflow:hidden}.ba-recorder-overlay{position:absolute;left:0;right:0;top:0;bottom:0}.ba-videorecorder-video{width:100%;height:100%;display:block;background-color:#000}.ba-videorecorder-norecorder{background-color:#000}.ba-videorecorder-container video::-webkit-media-controls-start-playback-button{display:none;-webkit-appearance:none;-moz-appearance:none}.ba-videorecorder-videorecorder-player{display:block;width:100%;height:100%}div.ba-videorecorder-disabled{cursor:not-allowed;-moz-opacity:.5;-khtml-opacity:.5;opacity:.5}div.ba-videorecorder-disabled *{cursor:not-allowed}.ba-videorecorder-settings{position:absolute;left:0;bottom:32px;color:#fff;margin:4px;padding:4px}.ba-videorecorder-settings-backbar{position:absolute;left:0;right:0;top:0;bottom:0;border-radius:4px;background-color:#000;opacity:.25;border:1px solid #fff}.ba-videorecorder-settings-front{position:relative;left:0;right:0;top:0;bottom:0;font-family:Arial,sans-serif;font-size:12px;max-height:14em;overflow:scroll}.ba-videorecorder-settings hr{background-color:#fff;border:none;height:1px;margin:2px;margin-left:8px;margin-right:8px}.ba-videorecorder-settings ul{margin:0;padding:0}.ba-videorecorder-settings li{list-style-type:none;padding:2px;text-align:left}.ba-videorecorder-settings label{cursor:pointer}.ba-videorecorder-settings input[type=radio]{display:none}.ba-videorecorder-settings span{cursor:pointer;width:4px;height:4px;background-color:#fff;border:3px solid #fff;border-radius:4px;margin:1px;box-sizing:content-box;top:2px;display:inline-block;position:relative}.ba-videorecorder-settings input[type=radio]:checked+span{border:3px solid #8cf;margin-right:5px}.ba-videorecorder-topmessage-container{position:absolute;left:0;right:0;top:0}.ba-videorecorder-topmessage-message{position:absolute;left:0;right:0;top:0;font-family:Arial,sans-serif;font-size:16px;font-weight:400;color:#fff;padding:8px;text-align:center}.ba-videorecorder-topmessage-background{background-color:#000;opacity:.1;width:100%;height:32px;position:absolute}ba-videorecorder-trimmer .ba-videorecorder-trimmer-container .ba-commoncss-accent-color{color:#8cf}ba-videorecorder-trimmer{position:absolute;bottom:20px;left:20px;right:20px}.ba-videorecorder-trimmer-container{display:flex;justify-content:space-between;padding:5px;background-color:rgba(50,50,50,.5)}.ba-videorecorder-trimmer-container button{background:0 0;border:none;cursor:pointer}.ba-videorecorder-trimmer-container .ba-commoncss-disabled{cursor:not-allowed}.ba-videorecorder-trimmer-container .ba-videorecorder-trimmer-button{border-radius:3px;margin:2px}.ba-videorecorder-trimmer-button-play{font-size:19px}.ba-videorecorder-trimmer-container .ba-videorecorder-trimmer-button-play i:before{font-size:unset;margin:unset}.ba-videorecorder-trimmer-right-button-container{display:flex;flex-direction:column}.ba-videorecorder-trimmer-container .ba-videorecorder-trimmer-button-trim{background-color:#8cf;color:#fff}.ba-videorecorder-trimmer-button.ba-commoncss-disabled{background-color:#333;color:#555}.ba-videorecorder-trimmer-container .ba-videorecorder-trimmer-button-skip{background-color:#777;color:#fff}.ba-videorecorder-trimmer-progress-bar{flex:1;position:relative;background-color:#000;height:34px;margin:0 13px}.ba-videorecorder-trimmer-playhead{position:absolute;height:100%;width:1px;box-shadow:0 0 2px 0 rgba(0,0,0,.25);background-color:red}.ba-videorecorder-trimmer-selection{position:absolute;border-style:solid;border-width:2px 8px;border-radius:2px;top:-2px;height:100%;box-shadow:inset 2px 2px 2px rgba(0,0,0,.15),2px 2px 2px rgba(0,0,0,.15)}.ba-videorecorder-trimmer-snapshots{height:100%;width:100%;position:absolute;overflow:hidden;display:flex}.ba-imageviewer-red-color .ba-imageviewer-button-inner,.ba-imageviewer-red-color .ba-imageviewer-image-title{color:#eb6a74}.ba-imageviewer-red-color .ba-imageviewer-rerecord-button{background-color:#eb6a74}.ba-imageviewer-blue-color .ba-imageviewer-button-inner,.ba-imageviewer-blue-color .ba-imageviewer-image-title{color:#2a74eb}.ba-imageviewer-blue-color .ba-imageviewer-rerecord-button{background-color:#2a74eb}.ba-imageviewer-green-color .ba-imageviewer-button-inner,.ba-imageviewer-green-color .ba-imageviewer-image-title{color:#5daa96}.ba-imageviewer-green-color .ba-imageviewer-rerecord-button{background-color:#5daa96}.ba-imageviewer-dashboard{position:absolute;left:0;right:0;bottom:0;transition:opacity .5s ease-in-out;-moz-transition:opacity .5s ease-in-out;-webkit-transition:opacity .5s ease-in-out;-o-transition:opacity .5s ease-in-out;-ms-transition:opacity .5s ease-in-out}.ba-imageviewer-dashboard-hidden{opacity:0}.ba-imageviewer-backbar{position:absolute;left:0;right:0;bottom:0;height:30px;background-color:#000;opacity:.7}.ba-imageviewer-controlbar{position:relative;left:0;right:0;bottom:0;height:30px;overflow:hidden}.ba-imageviewer-leftbutton-container{float:left;width:50px;height:100%;cursor:pointer}.ba-imageviewer-rightbutton-container{cursor:pointer;padding:0 8px}.ba-imageviewer-noie8 .ba-imageviewer-rightbutton-container{float:right;width:auto;height:100%}.ba-imageviewer-ie8 .ba-imageviewer-rightbutton-container{float:right;width:auto;height:0}.ba-imageviewer-button-inner{-webkit-transform:translateY(-50%);-moz-transform:translateY(-50%);-o-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);top:50%;position:relative;text-align:center;cursor:pointer;color:#fff;font-size:14px}.ba-imageviewer-button-text{font-family:Arial;font-weight:700}.ba-imageviewer-ie8 .ba-imageviewer-button-inner{margin-top:6px}.ba-imageviewer-image-title{color:#fff;font-family:sans-serif,Arial;font-weight:300;font-size:12px;float:left;letter-spacing:.1em;line-height:30px;margin:0 0 0 10px}.ba-imageviewer-fullscreen-view .ba-imageviewer-controlbar{bottom:0;position:fixed;width:100%;z-index:1010}.ba-imageviewer-message-container{position:absolute;left:0;right:0;top:0;bottom:0;background-color:#000;opacity:.75}.ba-imageviewer-message-message{-webkit-transform:translateY(-50%);-moz-transform:translateY(-50%);-o-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);color:#fff;position:absolute;left:5px;right:5px;top:50%;text-align:center}.ba-imageviewer-topmessage-container{position:absolute;left:0;right:0;top:0}.ba-imageviewer-topmessage-message{position:absolute;left:0;right:0;top:0;font-family:Arial,sans-serif;font-size:16px;font-weight:400;color:#fff;padding:8px;text-align:center}.ba-imageviewer-topmessage-background{background-color:#000;height:32px;opacity:.1;position:absolute;width:100%}.ba-imageviewer-container{display:inline-block;position:relative;overflow:hidden}.ba-imageviewer-overlay{position:absolute;left:0;right:0;top:0;bottom:0}.ba-imageviewer-image{width:100%;display:block}.ba-imageviewer-stretch-height .ba-imageviewer-container,.ba-imageviewer-stretch-width .ba-imageviewer-container{height:100%;overflow:hidden;position:relative;max-width:100%;max-height:100%;width:100%}.ba-imageviewer-stretch-height .ba-imageviewer-image{position:absolute;transform:translate(-50%,-50%);top:50%;left:50%;min-height:100%;min-width:100%;width:auto}.ba-imageviewer-stretch-width .ba-imageviewer-image{position:absolute;transform:translate(-50%,-50%);top:50%;left:50%;min-height:100%;min-width:100%;width:auto}.ba-imageviewer-stretch-height,.ba-imageviewer-stretch-width{display:inline-block;height:100%;width:100%}.ba-imageviewer-disabled{cursor:not-allowed;-moz-opacity:.5;-khtml-opacity:.5;opacity:.5}.ba-imageviewer-disabled *{cursor:not-allowed}.ba-player-red-color .ba-audioplayer-button-inner>i,.ba-player-red-color .ba-audioplayer-dashboard,.ba-player-red-color .ba-audioplayer-title{color:#eb6a74}.ba-player-red-color .ba-audioplayer-progressbar-position,.ba-player-red-color .ba-audioplayer-rerecord-button,.ba-player-red-color .ba-audioplayer-volumebar-position{background-color:#eb6a74}.ba-player-red-color .ba-audioplayer-volumebar-inner{background-color:#979797;background-color:rgba(255,255,255,.3)}.ba-player-blue-color .ba-audioplayer-button-inner>i,.ba-player-blue-color .ba-audioplayer-dashboard,.ba-player-blue-color .ba-audioplayer-title{color:#2a74eb}.ba-player-blue-color .ba-audioplayer-progressbar-position,.ba-player-blue-color .ba-audioplayer-rerecord-button,.ba-player-blue-color .ba-audioplayer-volumebar-position{background-color:#2a74eb}.ba-player-blue-color .ba-audioplayer-volumebar-inner{background-color:#979797;background-color:rgba(255,255,255,.3)}.ba-player-green-color .ba-audioplayer-button-inner>i,.ba-player-green-color .ba-audioplayer-dashboard,.ba-player-green-color .ba-audioplayer-title{color:#5daa96}.ba-player-green-color .ba-audioplayer-progressbar-position,.ba-player-green-color .ba-audioplayer-rerecord-button,.ba-player-green-color .ba-audioplayer-volumebar-position{background-color:#5daa96}.ba-player-green-color .ba-audioplayer-volumebar-inner{background-color:#979797;background-color:rgba(255,255,255,.3)}.ba-audioplayer-container{box-sizing:border-box;height:45px;min-height:45px;min-width:320px}.ba-audioplayer-audio-canvas{display:none;position:absolute;bottom:30px;background-color:#000}.ba-audioplayer-dashboard{position:absolute;left:0;right:0;bottom:0;transition:opacity .5s ease-in-out;-moz-transition:opacity .5s ease-in-out;-webkit-transition:opacity .5s ease-in-out;-o-transition:opacity .5s ease-in-out;-ms-transition:opacity .5s ease-in-out}.ba-audioplayer-progressbar{cursor:pointer;transition:height .1s ease-in-out;-moz-transition:height .1s ease-in-out;-webkit-transition:height .1s ease-in-out;-o-transition:height .1s ease-in-out;-ms-transition:height .1s ease-in-out;height:9px;background-color:#999}.ba-audioplayer-progressbar-inner.ba-player-disabled,.ba-audioplayer-progressbar-inner.ba-player-disabled .ba-audioplayer-progressbar-cache,.ba-audioplayer-progressbar-inner.ba-player-disabled .ba-audioplayer-progressbar-position{cursor:not-allowed}.ba-audioplayer-progressbar-small{height:3px}.ba-audioplayer-progressbar-position{position:absolute;left:0;transition:height .1s ease-in-out;-moz-transition:height .1s ease-in-out;-webkit-transition:height .1s ease-in-out;-o-transition:height .1s ease-in-out;-ms-transition:height .1s ease-in-out;background-color:#8cf;height:9px}.ba-audioplayer-progressbar-small .ba-audioplayer-progressbar-position{height:3px}.ba-audioplayer-progressbar-cache{position:absolute;left:0;transition:height .1s ease-in-out;-moz-transition:height .1s ease-in-out;-webkit-transition:height .1s ease-in-out;-o-transition:height .1s ease-in-out;-ms-transition:height .1s ease-in-out;background-color:#eee;height:9px}.ba-audioplayer-progressbar-small .ba-audioplayer-progressbar-cache{height:3px}.ba-audioplayer-progressbar-button{-moz-border-radius:5px;-webkit-border-radius:5px;border-radius:5px;background-color:#fff;box-sizing:content-box;border:1px solid #999;position:absolute;right:-5px;top:-2px;z-index:1;width:11px;height:11px}.ba-audioplayer-progressbar-small .ba-audioplayer-progressbar-button{display:none}.ba-audioplayer-backbar{position:absolute;left:0;right:0;bottom:0;height:30px;background-color:#000;opacity:.7}.ba-audioplayer-controlbar{position:relative;left:0;right:0;bottom:0;height:30px;overflow:hidden}.ba-audioplayer-leftbutton-container{float:left;width:50px;height:100%;cursor:pointer}.ba-audioplayer-rightbutton-container{cursor:pointer;padding:0 8px}.ba-audioplayer-noie8 .ba-audioplayer-rightbutton-container{float:right;width:auto;height:100%}.ba-audioplayer-ie8 .ba-audioplayer-rightbutton-container{float:right;width:auto;height:0}.ba-audioplayer-button-inner{-webkit-transform:translateY(-50%);-moz-transform:translateY(-50%);-o-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);top:50%;position:relative;text-align:center;cursor:pointer;display:inline-flex;color:#fff;font-size:14px}.ba-audioplayer-leftbutton-container .ba-audioplayer-button-inner{left:25%}.ba-audioplayer-button-text{font-family:Arial;font-weight:700}.ba-audioplayer-ie8 .ba-audioplayer-button-inner{margin-top:6px}.ba-audioplayer-noie8 .ba-audioplayer-time-container{float:left;width:95px;height:100%;text-align:center;font-family:Arial,sans-serif;font-size:13px;color:#fff}.ba-audioplayer-ie8 .ba-audioplayer-time-container{float:left;width:95px;height:50%;text-align:center;font-family:Arial,sans-serif;font-size:13px;color:#fff;margin-top:6px}.ba-audioplayer-time-value{-webkit-transform:translateY(-50%);-moz-transform:translateY(-50%);-o-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);top:50%;position:relative;text-align:center;float:left;width:40px}.ba-audioplayer-time-sep{-webkit-transform:translateY(-50%);-moz-transform:translateY(-50%);-o-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);top:50%;position:relative;text-align:center;float:left;width:15px}.ba-audioplayer-noie8 .ba-audioplayer-volumebar{margin-left:8px;margin-right:13px}.ba-audioplayer-noie8 .ba-audioplayer-volumebar{float:right;width:100px;height:100%}.ba-audioplayer-ie8 .ba-audioplayer-volumebar{float:right;width:100px;height:50%;margin-top:10px;margin-right:15px}.ba-audioplayer-volumebar-inner{-webkit-transform:translateY(-50%);-moz-transform:translateY(-50%);-o-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);top:50%;position:relative;text-align:center;border-bottom-left-radius:4px;border-bottom-right-radius:4px;border-top-left-radius:4px;border-top-right-radius:4px;cursor:pointer;background-color:#999;height:8px}.ba-audioplayer-volumebar-position{border-bottom-left-radius:4px;border-bottom-right-radius:4px;border-top-left-radius:4px;border-top-right-radius:4px;position:absolute;left:0;background-color:#8cf;height:100%}.ba-audioplayer-volumebar-button{-moz-border-radius:6px;-webkit-border-radius:6px;border-radius:6px;cursor:pointer;background-color:#fff;box-sizing:content-box;border:1px solid #999;position:absolute;right:-6px;top:-2px;z-index:1;width:11px;height:11px}.ba-audioplayer-title{color:#fff;font-family:sans-serif,Arial;font-weight:300;font-size:12px;float:left;letter-spacing:.1em;line-height:30px;margin:0 0 0 10px}.ba-audioplayer-message-container{position:absolute;left:0;right:0;top:0;bottom:0;background-color:#000;opacity:.75}.ba-audioplayer-message-message{-webkit-transform:translateY(-50%);-moz-transform:translateY(-50%);-o-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);color:#fff;position:absolute;left:5px;right:5px;top:50%;text-align:center}.ba-audioplayer-container{background-color:#000;display:inline-block;padding-bottom:39px;position:relative;overflow:hidden}.ba-audioplayer-container canvas{position:absolute}.ba-audioplayer-audio{width:100%;display:block}.ba-audioplayer-container audio::-webkit-media-controls-start-playback-button{display:none;-webkit-appearance:none;-moz-appearance:none}.ba-player-disabled{cursor:not-allowed;-moz-opacity:.5;-khtml-opacity:.5;opacity:.5}.ba-player-disabled *{cursor:not-allowed}.ba-audiorecorder{padding-bottom:32px}.ba-popup-helper-overlay-background{background-color:#fff;opacity:.85;position:fixed;left:0;top:0;right:0;bottom:0;z-index:10000;cursor:default}.ba-popup-helper-overlay{background-color:#000;opacity:1;z-index:10001;padding:4px 4px 0 4px;left:50%;top:50%;-webkit-transform:translate(-50%,-50%);-moz-transform:translate(-50%,-50%);-o-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);margin-right:-50%;position:fixed}.ba-popup-helper-overlay-inner{width:100%;height:100%}.ba-popup-helper-overlay-body{overflow:hidden}/*!\nbetajs-media-components - v0.0.291 - 2022-01-08\nCopyright (c) Ziggeo,Oliver Friedmann,Rashad Aliyev\nApache-2.0 Software License.\n*/.ba-player-red-color.ba-player-theme-modern .ba-player-button-inactive .ba-commoncss-icon-subtitle{color:#eb6a74;background-color:transparent}.ba-player-red-color.ba-player-theme-modern .ba-player-theme-modern-rightbutton-container.ba-commoncss-settings-visible{background-color:#eb6a74}.ba-player-red-color .ba-player-theme-modern-button-inner,.ba-player-red-color .ba-player-theme-modern-title{color:#eb6a74}.ba-player-red-color.ba-videoplayer-noie8 .ba-player-theme-modern-button-inner,.ba-player-red-color.ba-videoplayer-noie8 .ba-player-theme-modern-playbutton-button::after{color:#eb6a74}.ba-player-red-color.ba-videoplayer-noie8 .ba-player-theme-modern-playbutton-container{border-color:#eb6a74}.ba-player-red-color .ba-player-button-active,.ba-player-red-color .ba-player-theme-modern-playbutton-duration,.ba-player-red-color .ba-player-theme-modern-progressbar-position,.ba-player-red-color .ba-player-theme-modern-rerecord-button,.ba-player-red-color .ba-player-theme-modern-volumebar-position{background-color:#eb6a74}.ba-player-red-color.ba-videoplayer-noie8 .ba-player-theme-modern-share-action-container .ba-player-theme-modern-button-inner{color:#eb6a74}.ba-player-red-color.ba-videoplayer-noie8 .ba-player-theme-modern-rightbutton-container.ba-player-airplay-container svg path{fill:#eb6a74}.ba-player-blue-color.ba-player-theme-modern .ba-player-button-inactive .ba-commoncss-icon-subtitle{color:#2a74eb;background-color:transparent}.ba-player-blue-color.ba-player-theme-modern .ba-player-theme-modern-rightbutton-container.ba-commoncss-settings-visible{background-color:#2a74eb}.ba-player-blue-color .ba-player-theme-modern-button-inner,.ba-player-blue-color .ba-player-theme-modern-title{color:#2a74eb}.ba-player-blue-color.ba-videoplayer-noie8 .ba-player-theme-modern-button-inner,.ba-player-blue-color.ba-videoplayer-noie8 .ba-player-theme-modern-playbutton-button::after{color:#2a74eb}.ba-player-blue-color.ba-videoplayer-noie8 .ba-player-theme-modern-playbutton-container{border-color:#2a74eb}.ba-player-blue-color .ba-player-button-active,.ba-player-blue-color .ba-player-theme-modern-playbutton-duration,.ba-player-blue-color .ba-player-theme-modern-progressbar-position,.ba-player-blue-color .ba-player-theme-modern-rerecord-button,.ba-player-blue-color .ba-player-theme-modern-volumebar-position{background-color:#2a74eb}.ba-player-blue-color.ba-videoplayer-noie8 .ba-player-theme-modern-share-action-container .ba-player-theme-modern-button-inner{color:#2a74eb}.ba-player-blue-color.ba-videoplayer-noie8 .ba-player-theme-modern-rightbutton-container.ba-player-airplay-container svg path{fill:#2a74eb}.ba-player-green-color.ba-player-theme-modern .ba-player-button-inactive .ba-commoncss-icon-subtitle{color:#5da894;background-color:transparent}.ba-player-green-color.ba-player-theme-modern .ba-player-theme-modern-rightbutton-container.ba-commoncss-settings-visible{background-color:#5da894}.ba-player-green-color .ba-player-theme-modern-button-inner,.ba-player-green-color .ba-player-theme-modern-title{color:#5da894}.ba-player-green-color.ba-videoplayer-noie8 .ba-player-theme-modern-button-inner,.ba-player-green-color.ba-videoplayer-noie8 .ba-player-theme-modern-playbutton-button::after{color:#5da894}.ba-player-green-color.ba-videoplayer-noie8 .ba-player-theme-modern-playbutton-container{border-color:#5da894}.ba-player-green-color .ba-player-button-active,.ba-player-green-color .ba-player-theme-modern-playbutton-duration,.ba-player-green-color .ba-player-theme-modern-progressbar-position,.ba-player-green-color .ba-player-theme-modern-rerecord-button,.ba-player-green-color .ba-player-theme-modern-volumebar-position{background-color:#5da894}.ba-player-green-color.ba-videoplayer-noie8 .ba-player-theme-modern-share-action-container .ba-player-theme-modern-button-inner{color:#5da894}.ba-player-green-color.ba-videoplayer-noie8 .ba-player-theme-modern-rightbutton-container.ba-player-airplay-container svg path{fill:#5da894}.ba-player-theme-modern-dashboard{position:absolute;left:0;right:0;bottom:0;transition:opacity .5s ease-in-out;-moz-transition:opacity .5s ease-in-out;-webkit-transition:opacity .5s ease-in-out;-o-transition:opacity .5s ease-in-out;-ms-transition:opacity .5s ease-in-out;background-color:#ecebed;height:40px;opacity:.9;overflow:hidden;font-family:Arial,sans-serif}.ba-player-theme-modern-dashboard .ba-player-theme-modern-rightbutton-container.ba-player-airplay-container{height:28px;padding:12px 10px 0 10px;width:auto;box-sizing:border-box}.ba-player-theme-modern-dashboard .ba-player-theme-modern-rightbutton-container.ba-player-airplay-container svg path{fill:#000}.ba-player-theme-modern-dashboard .ba-player-button-active .ba-player-theme-modern-settings-button{color:#ecebed}.ba-player-theme-modern-leftbutton-container{float:left;width:40px;height:100%;cursor:pointer;box-sizing:content-box;border-right:1px solid #dbdbdb}.ba-videoplayer-noie8 .ba-player-theme-modern-rightbutton-container{float:right;width:40px;height:100%;cursor:pointer;box-sizing:content-box;border-left:1px solid #dbdbdb}.ba-videoplayer-ie8 .ba-player-theme-modern-rightbutton-container{float:right;width:40px;height:50%;cursor:pointer;box-sizing:content-box;border-left:1px solid #dbdbdb}.ba-player-theme-modern .ba-player-button-inactive .ba-commoncss-icon-subtitle,.ba-videoplayer-noie8 .ba-player-theme-modern-button-inner{cursor:pointer;-webkit-transform:translateY(-50%);-moz-transform:translateY(-50%);-o-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);top:50%;position:relative;text-align:center;color:#000;font-size:13px}.ba-videoplayer-ie8 .ba-player-theme-modern-button-inner{cursor:pointer;margin-top:12px;text-align:center;color:#000;font-size:13px}.ba-player-theme-modern-time-container{float:left;width:100px;height:100%;text-align:center;font-family:Helvetica Neue,Helvetica,Arial,sans-serif;font-size:13px;color:#666;box-sizing:content-box;border-right:1px solid #dbdbdb}.ba-videoplayer-ie8 .ba-player-theme-modern-time-container{margin-top:11px}.ba-player-theme-modern-time-value{-webkit-transform:translateY(-50%);-moz-transform:translateY(-50%);-o-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);top:50%;position:relative;text-align:center;float:left;width:100px}.ba-videoplayer-noie8 .ba-player-theme-modern-volumebar{float:right;width:60px;height:100%;margin-right:12px}.ba-videoplayer-ie8 .ba-player-theme-modern-volumebar{float:right;width:60px;height:50%;margin-top:16px;margin-right:12px}.ba-player-theme-modern-volumebar-inner{-webkit-transform:translateY(-50%);-moz-transform:translateY(-50%);-o-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);top:50%;position:relative;text-align:center;border-bottom-left-radius:3px;border-bottom-right-radius:3px;border-top-left-radius:3px;border-top-right-radius:3px;cursor:pointer;background-color:#878787;height:6px}.ba-player-theme-modern-volumebar-position{border-bottom-left-radius:3px;border-bottom-right-radius:3px;border-top-left-radius:3px;border-top-right-radius:3px;position:absolute;left:0;background-color:#000;height:100%}.ba-videoplayer-noie8 .ba-player-theme-modern-progressbar{overflow:hidden;height:100%;padding-left:12px;padding-right:12px}.ba-videoplayer-ie8 .ba-player-theme-modern-progressbar{overflow:hidden;height:50%;padding-left:12px;padding-right:12px;margin-right:40px;margin-top:6px}.ba-player-theme-modern-progressbar-cache{position:absolute;left:0;border-bottom-left-radius:3px;border-bottom-right-radius:3px;border-top-left-radius:3px;border-top-right-radius:3px;cursor:pointer;background-color:#bbb;height:6px}.ba-player-theme-modern-progressbar-inner{-webkit-transform:translateY(-50%);-moz-transform:translateY(-50%);-o-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);top:50%;position:relative;text-align:center;border-bottom-left-radius:3px;border-bottom-right-radius:3px;border-top-left-radius:3px;border-top-right-radius:3px;cursor:pointer;background-color:#878787;height:6px;overflow:hidden}.ba-player-theme-modern-progressbar.ba-player-disabled,.ba-player-theme-modern-progressbar.ba-player-disabled .ba-player-theme-modern-progressbar-cache,.ba-player-theme-modern-progressbar.ba-player-disabled .ba-player-theme-modern-progressbar-inner,.ba-player-theme-modern-progressbar.ba-player-disabled .ba-player-theme-modern-progressbar-position{cursor:not-allowed}.ba-player-theme-modern-progressbar-position{border-bottom-left-radius:3px;border-bottom-right-radius:3px;border-top-left-radius:3px;border-top-right-radius:3px;background-color:#000;position:absolute;height:100%}.ba-player-theme-modern-progressbar-marker{position:absolute;background-color:#000;height:100%}.ba-player-theme-modern-button-text{font-family:Arial;font-weight:700}.ba-videoplayer-ie8 .ba-player-theme-modern-title-container{display:none}.ba-player-theme-modern-title-container{position:absolute;left:0;right:0;top:0;transition:opacity .5s ease-in-out;-moz-transition:opacity .5s ease-in-out;-webkit-transition:opacity .5s ease-in-out;-o-transition:opacity .5s ease-in-out;-ms-transition:opacity .5s ease-in-out;width:100%}.ba-player-theme-modern-title-container>p{color:#666;background-color:#ecebed;background-color:rgba(255,255,255,.7);position:relative;margin:auto;height:30px;line-height:30px;text-align:center}.ba-player-size-small .ba-player-theme-modern-time-container{display:none}.ba-player-size-small .ba-player-theme-modern-volumebar{display:none}.ba-player-theme-modern-cast-button-container button{-moz-opacity:.7;-khtml-opacity:.7;opacity:.7;background:0 0;border:none;cursor:pointer;padding:11px 10px 0 10px}.ba-settings-overlay-inner{bottom:41px}.ba-player-size-medium .ba-player-theme-modern-time-value>span,.ba-player-size-medium.ba-videoplayer-noie8 .ba-player-theme-modern-volumebar{display:none}.ba-player-size-medium .ba-player-theme-modern-time-container,.ba-player-size-medium .ba-player-theme-modern-time-value{width:50px}.ba-player-theme-modern-rightbutton-container.ba-player-theme-modern-primary-button-container{width:auto}.ba-player-theme-modern-primary-button{padding:0 10px}.ba-player-fullscreen-view video::-webkit-media-controls-overlay-enclosure{display:none}.ba-player-fullscreen-view video::-webkit-media-controls-enclosure{display:none}.ba-player-fullscreen-view video::-webkit-media-controls{display:none}.ba-player-fullscreen-view video::-webkit-media-controls-panel{display:none}.ba-player-fullscreen-view video::-webkit-media-controls-play-button{display:none}.ba-player-fullscreen-view video::-webkit-media-controls-current-time-display{display:none}.ba-player-fullscreen-view video::-webkit-media-controls-time-remaining-display{display:none}.ba-player-fullscreen-view video::-webkit-media-controls-timeline{display:none}.ba-player-fullscreen-view video::-webkit-media-controls-mute-button{display:none}.ba-player-fullscreen-view video::-webkit-media-controls-volume-slider{display:none}.ba-player-fullscreen-view video::-webkit-media-controls-fullscreen-button{display:none}.ba-player-fullscreen-view video::-internal-media-controls-download-button{display:none}.ba-player-fullscreen-view video::-moz-list-bullet,.ba-player-fullscreen-view video::-moz-list-number{display:none}.ba-player-fullscreen-view video::-moz-meter-bar{display:none}.ba-player-fullscreen-view video:fullscreen:not(:root){display:none}.ba-player-fullscreen-view .ba-videoplayer-dashboard{bottom:0}.ba-player-fullscreen-view .ba-videoplayer-title-block{top:0}.ba-player-fullscreen-view.ba-player-firefox-browser .ba-videoplayer-dashboard,.ba-player-fullscreen-view.ba-player-firefox-browser .ba-videoplayer-title-block{position:fixed;z-index:100}.ba-videoplayer-container.ba-player-fullscreen-view{min-width:100%;position:absolute;min-height:fit-content}.ba-videoplayer-container.ba-player-fullscreen-view>.ba-videoplayer-overlay{position:fixed}.ba-player-theme-modern.ba-videoplayer-container .ba-player-text-tracks-overlay{position:absolute;left:0;right:0;bottom:42px;transition:bottom .5s ease-in-out;-moz-transition:bottom .5s ease-in-out;-webkit-transition:bottom .5s ease-in-out;-o-transition:bottom .5s ease-in-out;-ms-transition:bottom .5s ease-in-out}.ba-player-theme-modern.ba-videoplayer-container .ba-player-text-tracks-overlay .ba-commoncss-options-popup{bottom:0}.ba-player-theme-modern.ba-videoplayer-container .ba-player-track-dashboard-hidden.ba-player-text-tracks-overlay{bottom:5px}.ba-recorder-theme-modern .ba-videorecorder-chooser-icon-container{margin:16px;color:#979797;font-size:32px}.ba-recorder-theme-modern .ba-videorecorder-chooser-button-0,.ba-recorder-theme-modern .ba-videorecorder-chooser-button-2{background-color:#979797}.ba-recorder-theme-modern .ba-videorecorder-chooser-button-1,.ba-recorder-theme-modern .ba-videorecorder-chooser-button-3{color:#979797}.ba-recorder-red-color.ba-recorder-theme-modern .ba-videorecorder-button-inner:hover,.ba-recorder-red-color.ba-recorder-theme-modern .ba-videorecorder-button-selected{color:#eb6a74}.ba-recorder-red-color.ba-recorder-theme-modern .ba-videorecorder-button-primary{background-color:#eb6a74}.ba-recorder-red-color.ba-recorder-theme-modern .ba-videorecorder-settings input[type=radio]:checked+span{border-color:#eb6a74}.ba-recorder-red-color .ba-recorder-loader-label,.ba-recorder-red-color .ba-videorecorder-chooser-button-1,.ba-recorder-red-color .ba-videorecorder-chooser-button-3,.ba-recorder-red-color .ba-videorecorder-chooser-icon-container{color:#eb6a74}.ba-recorder-red-color .ba-videorecorder-chooser-button-0,.ba-recorder-red-color .ba-videorecorder-chooser-button-2,.ba-recorder-red-color .ba-videorecorder-imagegallery-leftbutton,.ba-recorder-red-color .ba-videorecorder-imagegallery-rightbutton{background-color:#eb6a74}.ba-recorder-red-color .ba-videorecorder-button-selected,.ba-recorder-red-color .ba-videorecorder-imagegallery-image:hover{border-color:#eb6a74}.ba-recorder-red-color .ba-videorecorder-message-message a{color:#eb6a74}.ba-recorder-blue-color.ba-recorder-theme-modern .ba-videorecorder-button-inner:hover,.ba-recorder-blue-color.ba-recorder-theme-modern .ba-videorecorder-button-selected{color:#2a74eb}.ba-recorder-blue-color.ba-recorder-theme-modern .ba-videorecorder-button-primary{background-color:#2a74eb}.ba-recorder-blue-color.ba-recorder-theme-modern .ba-videorecorder-settings input[type=radio]:checked+span{border-color:#2a74eb}.ba-recorder-blue-color .ba-recorder-loader-label,.ba-recorder-blue-color .ba-videorecorder-chooser-button-1,.ba-recorder-blue-color .ba-videorecorder-chooser-button-3,.ba-recorder-blue-color .ba-videorecorder-chooser-icon-container{color:#2a74eb}.ba-recorder-blue-color .ba-videorecorder-chooser-button-0,.ba-recorder-blue-color .ba-videorecorder-chooser-button-2,.ba-recorder-blue-color .ba-videorecorder-imagegallery-leftbutton,.ba-recorder-blue-color .ba-videorecorder-imagegallery-rightbutton{background-color:#2a74eb}.ba-recorder-blue-color .ba-videorecorder-button-selected,.ba-recorder-blue-color .ba-videorecorder-imagegallery-image:hover{border-color:#2a74eb}.ba-recorder-blue-color .ba-videorecorder-message-message a{color:#2a74eb}.ba-recorder-green-color.ba-recorder-theme-modern .ba-videorecorder-button-inner:hover,.ba-recorder-green-color.ba-recorder-theme-modern .ba-videorecorder-button-selected{color:#5dbb96}.ba-recorder-green-color.ba-recorder-theme-modern .ba-videorecorder-button-primary{background-color:#5dbb96}.ba-recorder-green-color.ba-recorder-theme-modern .ba-videorecorder-settings input[type=radio]:checked+span{border-color:#5dbb96}.ba-recorder-green-color .ba-recorder-loader-label,.ba-recorder-green-color .ba-videorecorder-chooser-button-1,.ba-recorder-green-color .ba-videorecorder-chooser-button-3,.ba-recorder-green-color .ba-videorecorder-chooser-icon-container{color:#5dbb96}.ba-recorder-green-color .ba-videorecorder-chooser-button-0,.ba-recorder-green-color .ba-videorecorder-chooser-button-2,.ba-recorder-green-color .ba-videorecorder-imagegallery-leftbutton,.ba-recorder-green-color .ba-videorecorder-imagegallery-rightbutton{background-color:#5dbb96}.ba-recorder-green-color .ba-videorecorder-button-selected,.ba-recorder-green-color .ba-videorecorder-imagegallery-image:hover{border-color:#5dbb96}.ba-recorder-green-color .ba-videorecorder-message-message a{color:#5dbb96}.ba-recorder-theme-modern .ba-videorecorder-backbar{position:absolute;left:0;right:0;bottom:0;height:48px;background-color:#000;opacity:.5}.ba-recorder-theme-modern .ba-videorecorder-controlbar{position:relative;left:0;right:0;bottom:0;height:48px;overflow:hidden;padding-left:16px;padding-right:16px}.ba-recorder-theme-modern .ba-videorecorder-label-label{position:absolute;left:0;right:0;top:0;font-family:Arial,sans-serif;font-size:15px;font-weight:700;color:#fff;padding:15px;text-align:center}.ba-recorder-theme-modern .ba-videorecorder-button-primary{-webkit-transform:translateY(-50%);-moz-transform:translateY(-50%);-o-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);top:50%;position:relative;text-align:center;cursor:pointer;border-radius:3px;margin-left:5px;margin-right:5px;padding:8px;padding-left:16px;padding-right:16px;background-color:#979797;color:#fff;font-family:Arial,sans-serif;font-weight:700;font-size:14px;border:none}.ba-recorder-theme-modern .ba-videorecorder-button-inner{-webkit-transform:translateY(-50%);-moz-transform:translateY(-50%);-o-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);top:50%;position:relative;text-align:center;color:#fff;cursor:pointer;font-size:20px;margin-left:5px;margin-right:5px;padding:3px;border:1px solid #fff;border-radius:4px}.ba-recorder-theme-modern .ba-commoncss-icon-inner{-webkit-transform:translateY(-50%);-moz-transform:translateY(-50%);-o-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);top:50%;position:relative;text-align:center;color:#fff;font-size:20px;margin-left:5px;margin-right:5px;padding:3px;padding-left:6px;padding-right:6px;border:1px solid #fff;border-radius:4px}.ba-recorder-theme-modern .ba-videorecorder-button-selected{border:1px solid #979797;color:#979797;background-color:#fff}.ba-recorder-theme-modern.ba-videorecorder-size-small .ba-videorecorder-leftbutton-container{width:40px}.ba-recorder-theme-modern.ba-videorecorder-size-small .ba-videorecorder-leftbutton-container .ba-videorecorder-button-inner{font-size:17px}.ba-recorder-theme-modern.ba-videorecorder-size-small .ba-videorecorder-lefticon-container{width:45px}.ba-recorder-theme-modern.ba-videorecorder-size-small .ba-videorecorder-lefticon-container .ba-commoncss-icon-inner{font-size:17px}.ba-recorder-theme-modern .ba-videorecorder-imagegallery-button-inner{-webkit-transform:translateY(-50%);-moz-transform:translateY(-50%);-o-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);top:50%;position:relative;text-align:center;cursor:pointer;color:#fff;font-size:13px;background-color:#000;opacity:.5;padding:4px;border-radius:3px}.ba-recorder-theme-modern .ba-videorecorder-imagegallery-leftbutton .ba-videorecorder-imagegallery-button-inner{padding-left:2px}.ba-recorder-theme-modern .ba-videorecorder-imagegallery-leftbutton{-webkit-transform:translateY(-50%);-moz-transform:translateY(-50%);-o-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);position:absolute;margin-left:14px;margin-right:14px;top:50%;left:0;width:24px;height:24px}.ba-recorder-theme-modern .ba-videorecorder-imagegallery-rightbutton{-webkit-transform:translateY(-50%);-moz-transform:translateY(-50%);-o-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);position:absolute;margin-left:14px;margin-right:14px;top:50%;right:0;width:24px;height:24px}.ba-recorder-theme-modern .ba-videorecorder-imagegallery-container{position:absolute;top:0;bottom:0;left:52px;right:52px}.ba-recorder-theme-modern .ba-videorecorder-settings{position:absolute;left:0;bottom:48px;color:#fff;margin:4px;padding:4px}.ba-recorder-theme-modern .ba-videorecorder-settings-backbar{position:absolute;left:0;right:0;top:0;bottom:0;border-radius:3px;background-color:#000;opacity:.5;border:none}.ba-recorder-theme-modern .ba-videorecorder-settings hr{border-top:none;border-bottom-color:#fff;margin:2px;margin-left:48px;margin-right:48px}.ba-recorder-theme-modern .ba-videorecorder-settings li{list-style-type:none;padding:8px}.ba-recorder-theme-modern .ba-videorecorder-settings input[type=radio]:checked+span{border:3px solid #979797}.ba-recorder-theme-modern .ba-videorecorder-topmessage-message{position:absolute;left:0;right:0;top:0;font-family:Arial,sans-serif;font-size:15px;font-weight:700;color:#fff;padding:8.5px;text-align:center}.ba-recorder-theme-modern .ba-videorecorder-topmessage-background{background-color:#000;opacity:.3;width:100%;height:32px;position:absolute}.ba-imageviewer-theme-modern-red-color .ba-imageviewer-title,.ba-imageviewer-theme-modern-red-color.ba-imageviewer-ie8 .ba-imageviewer-button-inner,.ba-imageviewer-theme-modern-red-color.ba-imageviewer-noie8 .ba-imageviewer-button-inner{color:#eb6a74}.ba-imageviewer-theme-modern-red-color .ba-imageviewer-rerecord-button{background-color:#eb6a74}.ba-imageviewer-theme-modern-blue-color .ba-imageviewer-title,.ba-imageviewer-theme-modern-blue-color.ba-imageviewer-ie8 .ba-imageviewer-button-inner,.ba-imageviewer-theme-modern-blue-color.ba-imageviewer-noie8 .ba-imageviewer-button-inner{color:#2a74eb}.ba-imageviewer-theme-modern-blue-color .ba-imageviewer-rerecord-button{background-color:#2a74eb}.ba-imageviewer-theme-modern-green-color .ba-imageviewer-title,.ba-imageviewer-theme-modern-green-color.ba-imageviewer-ie8 .ba-imageviewer-button-inner,.ba-imageviewer-theme-modern-green-color.ba-imageviewer-noie8 .ba-imageviewer-button-inner{color:#5da894}.ba-imageviewer-theme-modern-green-color .ba-imageviewer-rerecord-button{background-color:#5da894}.ba-imageviewer-theme-modern .ba-imageviewer-dashboard{position:absolute;left:0;right:0;bottom:0;transition:opacity .5s ease-in-out;-moz-transition:opacity .5s ease-in-out;-webkit-transition:opacity .5s ease-in-out;-o-transition:opacity .5s ease-in-out;-ms-transition:opacity .5s ease-in-out;background-color:#ecebed;height:40px;opacity:.9;overflow:hidden}.ba-imageviewer-theme-modern .ba-imageviewer-dashboard-hidden{opacity:0}.ba-imageviewer-theme-modern .ba-imageviewer-leftbutton-container{float:left;width:40px;height:100%;cursor:pointer;box-sizing:content-box;border-right:1px solid #dbdbdb}.ba-imageviewer-theme-modern.ba-imageviewer-noie8 .ba-imageviewer-rightbutton-container{float:right;width:40px;height:100%;cursor:pointer;box-sizing:content-box;border-left:1px solid #dbdbdb}.ba-imageviewer-theme-modern.ba-imageviewer-ie8 .ba-imageviewer-rightbutton-container{float:right;width:40px;height:50%;cursor:pointer;box-sizing:content-box;border-left:1px solid #dbdbdb}.ba-imageviewer-theme-modern.ba-imageviewer-noie8 .ba-imageviewer-button-inner{-webkit-transform:translateY(-50%);-moz-transform:translateY(-50%);-o-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);top:50%;position:relative;text-align:center;color:#000;font-size:13px}.ba-imageviewer-theme-modern.ba-imageviewer-ie8 .ba-imageviewer-button-inner{margin-top:12px;text-align:center;color:#000;font-size:13px}.ba-imageviewer-theme-modern .ba-imageviewer-button-inner{cursor:pointer}.ba-imageviewer-theme-modern .ba-imageviewer-button-text{font-family:Arial;font-weight:700}.ba-imageviewer-theme-modern.ba-imageviewer-ie8 .ba-imageviewer-image-title-container{display:none}.ba-imageviewer-theme-modern .ba-imageviewer-image-title-container{position:absolute;left:0;right:0;top:0;transition:opacity .5s ease-in-out;-moz-transition:opacity .5s ease-in-out;-webkit-transition:opacity .5s ease-in-out;-o-transition:opacity .5s ease-in-out;-ms-transition:opacity .5s ease-in-out;width:100%}.ba-imageviewer-theme-modern .ba-imageviewer-image-title-container>p{color:#666;background-color:#ecebed;background-color:rgba(255,255,255,.7);position:relative;margin:auto;height:30px;line-height:30px;text-align:center}.ba-imageviewer-fullscreen-view.ba-imageviewer-theme-modern .ba-imageviewer-dashboard,.ba-imageviewer-fullscreen-view.ba-imageviewer-theme-modern .ba-imageviewer-image-title-container{position:fixed;width:100%;z-index:1005}.ba-imageviewer-fullscreen-view.ba-imageviewer-theme-modern .ba-imageviewer-dashboard{bottom:0}.ba-imageviewer-fullscreen-view.ba-imageviewer-theme-modern .ba-imageviewer-image-title-container{top:0}.ba-audioplayer-container{box-sizing:border-box;min-width:320px}.ba-audioplayer-container.ba-player-has-title{min-height:70px}.ba-audioplayer-container.ba-player-no-title{min-height:40px}.ba-audioplayer-container.ba-player-theme-modern.ba-player-size-small .ba-player-theme-modern-time-container{display:block}.ba-audioplayer-container.ba-player-theme-modern .ba-player-size-small .ba-player-theme-modern-volumebar,.ba-audioplayer-container.ba-player-theme-modern.ba-player-size-medium .ba-player-theme-modern-volumebar{display:block}.ba-audioplayer-container.ba-player-theme-modern .ba-player-size-small .ba-player-theme-modern-volume-button-container,.ba-audioplayer-container.ba-player-theme-modern.ba-player-size-medium .ba-player-theme-modern-volume-button-container{display:block}.ba-player-theme-modern-dashboard{position:absolute;left:0;right:0;bottom:0;transition:opacity .5s ease-in-out;-moz-transition:opacity .5s ease-in-out;-webkit-transition:opacity .5s ease-in-out;-o-transition:opacity .5s ease-in-out;-ms-transition:opacity .5s ease-in-out;background-color:#ecebed;border-top:1px solid #dbdbdb;box-sizing:content-box;height:40px;opacity:.9;overflow:hidden}.ba-audioplayer-noie8 .ba-player-theme-modern-rightbutton-container{float:right;width:40px;height:100%;cursor:pointer;box-sizing:content-box;border-left:1px solid #dbdbdb}.ba-audioplayer-ie8 .ba-player-theme-modern-rightbutton-container{float:right;width:40px;height:50%;cursor:pointer;box-sizing:content-box;border-left:1px solid #dbdbdb}.ba-audioplayer-noie8 .ba-player-theme-modern-button-inner{-webkit-transform:translateY(-50%);-moz-transform:translateY(-50%);-o-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);top:50%;position:relative;text-align:center;color:#000;font-size:13px}.ba-audioplayer-ie8 .ba-player-theme-modern-button-inner{margin-top:12px;text-align:center;color:#000;font-size:13px}.ba-audioplayer-ie8 .ba-player-theme-modern-time-container{margin-top:11px}.ba-audioplayer-noie8 .ba-player-theme-modern-volumebar{float:right;width:60px;height:100%;margin-right:12px}.ba-audioplayer-ie8 .ba-player-theme-modern-volumebar{float:right;width:60px;height:50%;margin-top:16px;margin-right:12px}.ba-audioplayer-noie8 .ba-player-theme-modern-progressbar{overflow:hidden;height:100%;padding-left:12px;padding-right:12px}.ba-audioplayer-ie8 .ba-player-theme-modern-progressbar{overflow:hidden;height:50%;padding-left:12px;padding-right:12px;margin-right:40px;margin-top:6px}.ba-audioplayer-ie8 .ba-player-theme-modern-title-container{display:none}/*!\nbetajs-media-components - v0.0.291 - 2022-01-08\nCopyright (c) Ziggeo,Oliver Friedmann,Rashad Aliyev\nApache-2.0 Software License.\n*/.ba-player-red-color .ba-player-cube-theme-button-inner>i,.ba-player-red-color .ba-player-cube-theme-dashboard,.ba-player-red-color .ba-player-cube-theme-title{color:#eb6a74}.ba-player-red-color .ba-player-button-active .ba-player-cube-theme-button-inner>i{color:#eee}.ba-player-red-color.ba-videoplayer-noie8 .ba-player-cube-theme-playbutton-container{border-color:#eb6a74}.ba-player-red-color.ba-videoplayer-noie8 .ba-player-cube-theme-playbutton-button::after{color:#eb6a74}.ba-player-red-color .ba-player-button-active,.ba-player-red-color .ba-player-cube-theme-playbutton-duration,.ba-player-red-color .ba-player-cube-theme-primary-button,.ba-player-red-color .ba-player-cube-theme-progressbar-position,.ba-player-red-color .ba-player-cube-theme-rerecord-button,.ba-player-red-color .ba-player-cube-theme-stream-label,.ba-player-red-color .ba-player-cube-theme-volumebar-position{background-color:#eb6a74}.ba-player-red-color .ba-player-cube-theme-playbutton-button{border-left-color:#eb6a74}.ba-player-red-color .ba-player-cube-theme-volumebar-inner{background-color:#979797;background-color:rgba(255,255,255,.3)}.ba-player-blue-color .ba-player-cube-theme-button-inner>i,.ba-player-blue-color .ba-player-cube-theme-dashboard,.ba-player-blue-color .ba-player-cube-theme-title{color:#2a74eb}.ba-player-blue-color .ba-player-button-active .ba-player-cube-theme-button-inner>i{color:#eee}.ba-player-blue-color.ba-videoplayer-noie8 .ba-player-cube-theme-playbutton-container{border-color:#2a74eb}.ba-player-blue-color.ba-videoplayer-noie8 .ba-player-cube-theme-playbutton-button::after{color:#2a74eb}.ba-player-blue-color .ba-player-button-active,.ba-player-blue-color .ba-player-cube-theme-playbutton-duration,.ba-player-blue-color .ba-player-cube-theme-primary-button,.ba-player-blue-color .ba-player-cube-theme-progressbar-position,.ba-player-blue-color .ba-player-cube-theme-rerecord-button,.ba-player-blue-color .ba-player-cube-theme-stream-label,.ba-player-blue-color .ba-player-cube-theme-volumebar-position{background-color:#2a74eb}.ba-player-blue-color .ba-player-cube-theme-playbutton-button{border-left-color:#2a74eb}.ba-player-blue-color .ba-player-cube-theme-volumebar-inner{background-color:#979797;background-color:rgba(255,255,255,.3)}.ba-player-green-color .ba-player-cube-theme-button-inner>i,.ba-player-green-color .ba-player-cube-theme-dashboard,.ba-player-green-color .ba-player-cube-theme-title{color:#5daa96}.ba-player-green-color .ba-player-button-active .ba-player-cube-theme-button-inner>i{color:#eee}.ba-player-green-color.ba-videoplayer-noie8 .ba-player-cube-theme-playbutton-container{border-color:#5daa96}.ba-player-green-color.ba-videoplayer-noie8 .ba-player-cube-theme-playbutton-button::after{color:#5daa96}.ba-player-green-color .ba-player-button-active,.ba-player-green-color .ba-player-cube-theme-playbutton-duration,.ba-player-green-color .ba-player-cube-theme-primary-button,.ba-player-green-color .ba-player-cube-theme-progressbar-position,.ba-player-green-color .ba-player-cube-theme-rerecord-button,.ba-player-green-color .ba-player-cube-theme-stream-label,.ba-player-green-color .ba-player-cube-theme-volumebar-position{background-color:#5daa96}.ba-player-green-color .ba-player-cube-theme-playbutton-button{border-left-color:#5daa96}.ba-player-green-color .ba-player-cube-theme-volumebar-inner{background-color:#979797;background-color:rgba(255,255,255,.3)}.ba-player-cube-theme .ba-settings-overlay-inner{bottom:40px}.ba-player-cube-theme-dashboard{position:absolute;left:0;right:0;bottom:0;transition:opacity .5s ease-in-out;-moz-transition:opacity .5s ease-in-out;-webkit-transition:opacity .5s ease-in-out;-o-transition:opacity .5s ease-in-out;-ms-transition:opacity .5s ease-in-out;background-color:#4f4f4f;background-color:rgba(0,0,0,.6);color:#eee;font-size:13px;height:40px;opacity:.9;overflow:hidden}.ba-player-cube-theme-dashboard .ba-player-airplay-container{padding-top:2px}.ba-videoplayer-ie8 .ba-player-cube-theme-title-block{display:none}.ba-videoplayer-noie8 .ba-player-cube-theme-title-block{position:absolute;left:0;right:0;top:0;background-color:#4f4f4f;background-color:rgba(0,0,0,.6);transition:opacity .5s ease-in-out;-moz-transition:opacity .5s ease-in-out;-webkit-transition:opacity .5s ease-in-out;-o-transition:opacity .5s ease-in-out;-ms-transition:opacity .5s ease-in-out}.ba-player-cube-theme-title{color:#eee;font-family:sans-serif;font-weight:300;font-size:12px;letter-spacing:.1em;margin:0;padding:10px 15px}.ba-player-airplay-container,.ba-player-cube-theme-button-inner{-webkit-transform:translateY(-50%);-moz-transform:translateY(-50%);-o-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);top:50%;position:relative;text-align:center;cursor:pointer;color:#eee;font-size:13px}.ba-player-cube-theme-volumebar{float:left;width:60px;height:40px;margin-right:10px}.ba-player-cube-theme-volumebar-inner{-webkit-transform:translateY(-50%);-moz-transform:translateY(-50%);-o-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);top:50%;position:relative;text-align:center;border-bottom-left-radius:3px;border-bottom-right-radius:3px;border-top-left-radius:3px;border-top-right-radius:3px;cursor:pointer;background-color:#979797;height:6px}.ba-videoplayer-ie8 .ba-player-cube-theme-volumebar-inner{margin-top:-2px}.ba-player-cube-theme-volumebar-position{border-bottom-left-radius:3px;border-bottom-right-radius:3px;border-top-left-radius:3px;border-top-right-radius:3px;position:absolute;left:0;background-color:#eee;height:100%}.ba-player-cube-theme-left-block{float:left}.ba-player-cube-theme-center-block{float:left}.ba-player-cube-theme-right-block{float:right}.ba-player-cube-theme-right-block .ba-commoncss-icon-resize-full,.ba-player-cube-theme-right-block .ba-commoncss-icon-volume-down,.ba-player-cube-theme-right-block .ba-commoncss-icon-volume-up{color:#979797}.ba-player-cube-theme-button-container{float:left;width:40px;height:40px;line-height:40px;text-align:center}.ba-player-cube-theme-timer-container{background-color:#b2b2b2;background-color:rgba(0,0,0,.35);color:#eee;letter-spacing:.1em;width:98px;font-weight:300;font-size:.9em}.ba-player-cube-theme-timer-container>div:first-child{margin-left:4px}.ba-player-cube-theme-timer-container>div{float:left;width:45px}.ba-player-cube-theme-timer-container>p{float:left;margin:0;width:4px}.ba-player-cube-theme-stream-label{background-color:#000;color:#eee;display:inline-block;font-weight:300;font-size:.8em;height:25px;letter-spacing:.1em;line-height:24px;padding:0 3px;text-align:center;width:auto}.ba-player-cube-theme-stream-label>span{display:inline-block;padding-left:2px;line-height:25px}.ba-videoplayer-noie8 .ba-player-cube-theme-progressbar{overflow:hidden;height:100%}.ba-videoplayer-ie8 .ba-player-cube-theme-progressbar{overflow:hidden}.ba-player-cube-theme-progressbar-cache{position:absolute;left:0;cursor:pointer;background-color:transparent;height:40px}.ba-player-cube-theme-progressbar-inner{-webkit-transform:translateY(-50%);-moz-transform:translateY(-50%);-o-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);top:50%;position:relative;text-align:center;cursor:pointer;background-color:transparent;height:40px}.ba-player-cube-theme-progressbar.ba-player-disabled,.ba-player-cube-theme-progressbar.ba-player-disabled .ba-player-cube-theme-progressbar-cache,.ba-player-cube-theme-progressbar.ba-player-disabled .ba-player-cube-theme-progressbar-inner,.ba-player-cube-theme-progressbar.ba-player-disabled .ba-player-cube-theme-progressbar-position{cursor:not-allowed}.ba-player-cube-theme-progressbar-position{background-color:#eee;position:absolute;height:100%}.ba-player-cube-theme-progressbar-button{display:none}.ba-player-cube-theme-progressbar-marker{position:absolute;height:40px;width:10px;background-color:#000}.ba-player-cube-theme-cast-button-container button{-moz-opacity:.7;-khtml-opacity:.7;opacity:.7;background:0 0;border:none;cursor:pointer;box-sizing:border-box;padding:11px 6px 0 5px;width:32px}.ba-player-cube-theme-primary-button{color:#eee;background-color:#979797}.ba-player-size-small .ba-player-cube-theme-button-container{width:35px}.ba-player-device-type-mobile .ba-player-cube-theme-timer-container{width:45px}.ba-player-device-type-mobile .ba-player-cube-theme-volumebar{width:40px}.ba-player-fullscreen-view video::-webkit-media-controls-overlay-enclosure{display:none}.ba-player-fullscreen-view video::-webkit-media-controls-enclosure{display:none}.ba-player-fullscreen-view video::-webkit-media-controls{display:none}.ba-player-fullscreen-view video::-webkit-media-controls-panel{display:none}.ba-player-fullscreen-view video::-webkit-media-controls-play-button{display:none}.ba-player-fullscreen-view video::-webkit-media-controls-current-time-display{display:none}.ba-player-fullscreen-view video::-webkit-media-controls-time-remaining-display{display:none}.ba-player-fullscreen-view video::-webkit-media-controls-timeline{display:none}.ba-player-fullscreen-view video::-webkit-media-controls-mute-button{display:none}.ba-player-fullscreen-view video::-webkit-media-controls-volume-slider{display:none}.ba-player-fullscreen-view video::-webkit-media-controls-fullscreen-button{display:none}.ba-player-fullscreen-view video::-internal-media-controls-download-button{display:none}.ba-player-fullscreen-view video::-moz-list-bullet,.ba-player-fullscreen-view video::-moz-list-number{display:none}.ba-player-fullscreen-view video::-moz-meter-bar{display:none}.ba-player-fullscreen-view video:fullscreen:not(:root){display:none}.ba-player-fullscreen-view .ba-player-cube-theme-dashboard{bottom:0}.ba-player-fullscreen-view .ba-videoplayer-title-block{top:0}.ba-player-fullscreen-view.ba-player-firefox-browser .ba-videoplayer-dashboard,.ba-player-fullscreen-view.ba-player-firefox-browser .ba-videoplayer-title-block{position:fixed;z-index:100}.ba-videoplayer-container.ba-player-fullscreen-view{min-width:100%;position:absolute;min-height:fit-content}.ba-videoplayer-container.ba-player-fullscreen-view>.ba-player-overlay{position:fixed}.ba-player-cube-theme.ba-videoplayer-container .ba-player-text-tracks-overlay{position:absolute;left:0;right:0;bottom:42px;transition:bottom .5s ease-in-out;-moz-transition:bottom .5s ease-in-out;-webkit-transition:bottom .5s ease-in-out;-o-transition:bottom .5s ease-in-out;-ms-transition:bottom .5s ease-in-out}.ba-player-cube-theme.ba-videoplayer-container .ba-player-text-tracks-overlay .ba-commoncss-options-popup{bottom:-2px;right:0}.ba-player-cube-theme.ba-videoplayer-container .ba-player-track-dashboard-hidden.ba-player-text-tracks-overlay{bottom:5px}.ba-recorder-theme-cube .ba-videorecorder-chooser-container{background-color:#eee;z-index:1}.ba-recorder-theme-cube .ba-videorecorder-chooser-icon-container{color:#000;font-size:32px;margin:16px}.ba-recorder-theme-cube .ba-videorecorder-chooser-button-0,.ba-recorder-theme-cube .ba-videorecorder-chooser-button-1,.ba-recorder-theme-cube .ba-videorecorder-chooser-button-2,.ba-recorder-theme-cube .ba-videorecorder-chooser-button-3{line-height:20px;min-width:10em;margin:2px 0;padding:6px 8px}.ba-recorder-theme-cube .ba-videorecorder-chooser-button-0,.ba-recorder-theme-cube .ba-videorecorder-chooser-button-2{-moz-border-radius:0;-webkit-border-radius:0;border-radius:0;background-color:#000}.ba-recorder-theme-cube .ba-videorecorder-chooser-button-1,.ba-recorder-theme-cube .ba-videorecorder-chooser-button-3{background-color:#666;color:#eee;margin-top:2px}.ba-recorder-red-color .ba-recorder-theme-cube-dashboard .ba-videorecorder-button-primary{background-color:#eb6a74}.ba-recorder-red-color .ba-recorder-theme-cube-dashboard .ba-videorecorder-button-inner:hover,.ba-recorder-red-color .ba-recorder-theme-cube-dashboard .ba-videorecorder-button-selected{color:#eb6a74}.ba-recorder-red-color .ba-recorder-theme-cube-dashboard .ba-videorecorder-settings input[type=radio]:checked+span{background-color:#eb6a74;border-color:#eb6a74}.ba-recorder-red-color .ba-recorder-loader-label,.ba-recorder-red-color .ba-videorecorder-chooser-icon-container{color:#eb6a74}.ba-recorder-red-color .ba-videorecorder-chooser-button-0,.ba-recorder-red-color .ba-videorecorder-chooser-button-2,.ba-recorder-red-color .ba-videorecorder-imagegallery-leftbutton,.ba-recorder-red-color .ba-videorecorder-imagegallery-rightbutton{background-color:#eb6a74}.ba-recorder-red-color .ba-videorecorder-imagegallery-image:hover{border-color:#eb6a74}.ba-recorder-red-color .ba-videorecorder-message-message a{color:#eb6a74}.ba-recorder-blue-color .ba-recorder-theme-cube-dashboard .ba-videorecorder-button-primary{background-color:#2a74eb}.ba-recorder-blue-color .ba-recorder-theme-cube-dashboard .ba-videorecorder-button-inner:hover,.ba-recorder-blue-color .ba-recorder-theme-cube-dashboard .ba-videorecorder-button-selected{color:#2a74eb}.ba-recorder-blue-color .ba-recorder-theme-cube-dashboard .ba-videorecorder-settings input[type=radio]:checked+span{background-color:#2a74eb;border-color:#2a74eb}.ba-recorder-blue-color .ba-recorder-loader-label,.ba-recorder-blue-color .ba-videorecorder-chooser-icon-container{color:#2a74eb}.ba-recorder-blue-color .ba-videorecorder-chooser-button-0,.ba-recorder-blue-color .ba-videorecorder-chooser-button-2,.ba-recorder-blue-color .ba-videorecorder-imagegallery-leftbutton,.ba-recorder-blue-color .ba-videorecorder-imagegallery-rightbutton{background-color:#2a74eb}.ba-recorder-blue-color .ba-videorecorder-imagegallery-image:hover{border-color:#2a74eb}.ba-recorder-blue-color .ba-videorecorder-message-message a{color:#2a74eb}.ba-recorder-green-color .ba-recorder-theme-cube-dashboard .ba-videorecorder-button-primary{background-color:#5daa96}.ba-recorder-green-color .ba-recorder-theme-cube-dashboard .ba-videorecorder-button-inner:hover,.ba-recorder-green-color .ba-recorder-theme-cube-dashboard .ba-videorecorder-button-selected{color:#5daa96}.ba-recorder-green-color .ba-recorder-theme-cube-dashboard .ba-videorecorder-settings input[type=radio]:checked+span{background-color:#5daa96;border-color:#5daa96}.ba-recorder-green-color .ba-recorder-loader-label,.ba-recorder-green-color .ba-videorecorder-chooser-icon-container{color:#5daa96}.ba-recorder-green-color .ba-videorecorder-chooser-button-0,.ba-recorder-green-color .ba-videorecorder-chooser-button-2,.ba-recorder-green-color .ba-videorecorder-imagegallery-leftbutton,.ba-recorder-green-color .ba-videorecorder-imagegallery-rightbutton{background-color:#5daa96}.ba-recorder-green-color .ba-videorecorder-imagegallery-image:hover{border-color:#5daa96}.ba-recorder-green-color .ba-videorecorder-message-message a{color:#5daa96}.ba-recorder-theme-cube.ba-videorecorder-container .ba-recorder-overlay{top:0}.ba-recorder-theme-cube-dashboard{position:absolute;left:0;right:0;top:0;bottom:0;height:100%}.ba-recorder-theme-cube-dashboard .ba-videorecorder-controlbar{background-color:#979797;background-color:rgba(0,0,0,.4);position:absolute;left:0;right:0;bottom:0;height:50px;padding:0}.ba-recorder-theme-cube-dashboard .ba-videorecorder-button{border:none;-moz-box-shadow:inset -1px 0 0 #666;-webkit-box-shadow:inset -1px 0 0 #666;box-shadow:inset -1px 0 0 #666;color:#eee;cursor:pointer;float:left;height:50px;line-height:50px;text-align:center;width:50px}.ba-recorder-theme-cube-dashboard .ba-videorecorder-button-inner{border:none;border-radius:50%;color:#eee;cursor:pointer;font-size:inherit;height:100%;margin:0;padding:0;width:100%}.ba-recorder-theme-cube-dashboard .ba-videorecorder-button-inner:hover,.ba-recorder-theme-cube-dashboard .ba-videorecorder-button-selected{color:#979797}.ba-recorder-theme-cube-dashboard .ba-videorecorder-indicator-container{border:none;color:#eee;cursor:pointer;float:left;height:50px;line-height:50px;text-align:center;width:50px}.ba-recorder-theme-cube-dashboard .ba-videorecorder-indicator-container .ba-videorecorder-recording-indication{margin:0;left:50%}.ba-recorder-theme-cube-dashboard .ba-videorecorder-rightbutton-container{padding:0}.ba-recorder-theme-cube-dashboard .ba-videorecorder-settings-front{position:absolute;left:0;right:0;bottom:0;max-height:initial;overflow:auto}.ba-recorder-theme-cube-dashboard .ba-videorecorder-settings{bottom:50px;max-height:14em;overflow:scroll;margin:5px;padding:0}.ba-recorder-theme-cube-dashboard .ba-videorecorder-settings .ba-videorecorder-add-stream,.ba-recorder-theme-cube-dashboard .ba-videorecorder-settings label{font-family:sans-serif;font-weight:300;font-size:12px}.ba-recorder-theme-cube-dashboard .ba-videorecorder-settings input[type=radio]:checked+span{border:3px solid #000}.ba-recorder-theme-cube-dashboard .ba-videorecorder-button-primary{background-color:#000;border:none;border-radius:0;color:#eee;display:inline-block;font-family:sans-serif;font-weight:300;font-size:12px;margin:0;padding:0 25px;min-width:3em;position:relative;left:0;right:0;top:0;bottom:0;-webkit-transform:translate(0,0);-moz-transform:translate(0,0);-o-transform:translate(0,0);-ms-transform:translate(0,0);transform:translate(0,0);z-index:10;height:50px;line-height:50px}.ba-recorder-theme-cube-dashboard .ba-videorecorder-settings-button{background-color:#eee;cursor:pointer;margin:15px 0 0 15px}.ba-recorder-theme-cube-dashboard .ba-videorecorder-settings label{color:#eee}.ba-recorder-theme-cube-dashboard .ba-videorecorder-bubble-info{background-color:#fff;background-color:rgba(0,0,0,.4);-moz-border-radius:4px;-webkit-border-radius:4px;border-radius:4px;display:inline-block;padding:12px 0;line-height:1.2;position:relative}.ba-recorder-theme-cube-dashboard .ba-videorecorder-bubble-info:before{border-top:9px solid;border-top-color:#fff;border-top-color:rgba(0,0,0,.4);border-left:6px solid transparent;border-right:6px solid transparent;content:\"\";height:0;left:10px;position:absolute;right:100%;top:100%;width:0}.ba-recorder-theme-cube-dashboard .ba-videorecorder-bubble-info{border-radius:0}.ba-recorder-theme-cube-dashboard .ba-videorecorder-controlbar-center-section{position:absolute;left:0;text-align:center;width:100%}.ba-recorder-theme-cube-dashboard .ba-videorecorder-button-container{display:inline-block}.ba-recorder-theme-cube-dashboard .ba-videorecorder-label-container{text-align:center;width:100%}.ba-recorder-theme-cube-dashboard .ba-videorecorder-label-container .ba-videorecorder-button-primary{background:0 0;border-right:1px solid;border-right-color:#191919;border-right-color:rgba(255,255,255,.1);border-left:1px solid;border-left-color:#191919;border-left-color:rgba(255,255,255,.1);color:#eee;cursor:default}.ba-recorder-theme-cube-dashboard .ba-videorecorder-stop-button-container{text-align:right;bottom:0;left:auto;position:absolute;right:0;top:auto}.ba-recorder-theme-cube.ba-videorecorder-container .ba-videorecorder-imagegallery-container{left:50px;right:50px}.ba-recorder-overlay img,.ba-videorecorder-imagegallery-image{border:none;border-radius:0}.ba-videorecorderimagegallery-image:hover{border:2px solid #fff}.ba-videorecorder-imagegallery-leftbutton,.ba-videorecorder-imagegallery-rightbutton{border-radius:0;background-color:#979797;background-color:rgba(0,0,0,.4);height:30px;width:30px;z-index:10}.ba-recorder-theme-cube .ba-videorecorder-topmessage-message{color:#eee;display:inline-block;font-family:sans-serif;font-size:12px;font-weight:300;padding:7px 15px;position:relative;margin:15px 0 3px}.ba-recorder-theme-cube .ba-videorecorder-topmessage-background{background:0 0}.ba-imageviewer-cube-theme-red-color .ba-imageviewer-button-inner,.ba-imageviewer-cube-theme-red-color .ba-imageviewer-dashboard,.ba-imageviewer-cube-theme-red-color .ba-imageviewer-image-title,.ba-imageviewer-cube-theme-red-color .ba-imageviewer-right-block .ba-commoncss-icon-resize-full,.ba-imageviewer-cube-theme-red-color .ba-imageviewer-right-block .ba-commoncss-icon-resize-small{color:#eb6a74}.ba-imageviewer-cube-theme-red-color .ba-imageviewer-rerecord-button{background-color:#eb6a74}.ba-imageviewer-cube-theme-blue-color .ba-imageviewer-button-inner,.ba-imageviewer-cube-theme-blue-color .ba-imageviewer-dashboard,.ba-imageviewer-cube-theme-blue-color .ba-imageviewer-image-title,.ba-imageviewer-cube-theme-blue-color .ba-imageviewer-right-block .ba-commoncss-icon-resize-full,.ba-imageviewer-cube-theme-blue-color .ba-imageviewer-right-block .ba-commoncss-icon-resize-small{color:#2a74eb}.ba-imageviewer-cube-theme-blue-color .ba-imageviewer-rerecord-button{background-color:#2a74eb}.ba-imageviewer-cube-theme-green-color .ba-imageviewer-button-inner,.ba-imageviewer-cube-theme-green-color .ba-imageviewer-dashboard,.ba-imageviewer-cube-theme-green-color .ba-imageviewer-image-title,.ba-imageviewer-cube-theme-green-color .ba-imageviewer-right-block .ba-commoncss-icon-resize-full,.ba-imageviewer-cube-theme-green-color .ba-imageviewer-right-block .ba-commoncss-icon-resize-small{color:#5daa96}.ba-imageviewer-cube-theme-green-color .ba-imageviewer-rerecord-button{background-color:#5daa96}.ba-imageviewer-cube-theme .ba-imageviewer-dashboard{position:absolute;left:0;right:0;bottom:0;transition:opacity .5s ease-in-out;-moz-transition:opacity .5s ease-in-out;-webkit-transition:opacity .5s ease-in-out;-o-transition:opacity .5s ease-in-out;-ms-transition:opacity .5s ease-in-out;background-color:#4f4f4f;background-color:rgba(0,0,0,.6);color:#eee;font-size:13px;height:40px;opacity:.9;overflow:hidden}.ba-imageviewer-cube-theme .ba-imageviewer-dashboard-hidden{opacity:0}.ba-imageviewer-cube-theme.ba-imageviewer-ie8 .ba-imageviewer-image-title-block{display:none}.ba-imageviewer-cube-theme.ba-imageviewer-noie8 .ba-imageviewer-image-title-block{position:absolute;left:0;right:0;top:0;background-color:#4f4f4f;background-color:rgba(0,0,0,.6);transition:opacity .5s ease-in-out;-moz-transition:opacity .5s ease-in-out;-webkit-transition:opacity .5s ease-in-out;-o-transition:opacity .5s ease-in-out;-ms-transition:opacity .5s ease-in-out}.ba-imageviewer-cube-theme .ba-imageviewer-image-title{color:#eee;font-family:sans-serif;font-weight:300;font-size:12px;letter-spacing:.1em;margin:0;padding:10px 15px}.ba-imageviewer-cube-theme .ba-imageviewer-button-inner{-webkit-transform:translateY(-50%);-moz-transform:translateY(-50%);-o-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);top:50%;position:relative;text-align:center;cursor:pointer;color:#eee;font-size:13px}.ba-imageviewer-cube-theme .ba-imageviewer-left-block{float:left}.ba-imageviewer-cube-theme .ba-imageviewer-center-block{float:left}.ba-imageviewer-cube-theme .ba-imageviewer-right-block{float:right}.ba-imageviewer-cube-theme .ba-imageviewer-right-block .ba-commoncss-icon-resize-full{color:#979797}.ba-imageviewer-cube-theme .ba-imageviewer-button-container{float:left;width:40px;height:40px;line-height:40px;text-align:center}.ba-imageviewer-cube-theme .ba-imageviewer-timer-container{background-color:#b2b2b2;background-color:rgba(0,0,0,.35);color:#eee;cursor:default;letter-spacing:.1em;width:90px;font-weight:300;font-size:.9em}.ba-imageviewer-cube-theme .ba-imageviewer-timer-container>div:first-child{margin-left:4px}.ba-imageviewer-cube-theme .ba-imageviewer-timer-container>div{float:left;width:40px}.ba-imageviewer-cube-theme .ba-imageviewer-timer-container>p{float:left;margin:0;width:4px}.ba-imageviewer-fullscreen-view.ba-imageviewer-cube-theme .ba-imageviewer-dashboard,.ba-imageviewer-fullscreen-view.ba-imageviewer-cube-theme .ba-imageviewer-image-title-block{position:fixed;width:100%;z-index:1005}.ba-imageviewer-fullscreen-view.ba-imageviewer-cube-theme .ba-imageviewer-dashboard{bottom:0}.ba-imageviewer-fullscreen-view.ba-imageviewer-cube-theme .ba-imageviewer-image-title-block{top:0}.ba-player-cube-theme-audio-canvas{display:none;position:absolute;bottom:40px;background-color:#000}.ba-audioplayer-container .ba-player-cube-theme-dashboard .ba-player-normal-view{background-color:#020202;border:1px solid #eee;box-sizing:border-box;min-height:70px;min-width:320px;height:70px}.ba-audioplayer-noie8 .ba-player-cube-theme-title-block{position:absolute;left:0;right:0;top:0;background-color:#4f4f4f;background-color:rgba(0,0,0,.6);transition:opacity .5s ease-in-out;-moz-transition:opacity .5s ease-in-out;-webkit-transition:opacity .5s ease-in-out;-o-transition:opacity .5s ease-in-out;-ms-transition:opacity .5s ease-in-out;min-height:30px}.ba-player-cube-theme-center-block{float:left}.ba-player-cube-theme-center-block .ba-player-cube-theme-progress-bar-container{position:absolute;width:100%}.ba-audioplayer-noie8 .ba-player-cube-theme-progressbar{overflow:hidden;height:100%}.ba-audioplayer-ie8 .ba-player-cube-theme-progressbar{overflow:hidden}.ba-player-cube-theme-progressbar.ba-player-disabled,.ba-player-cube-theme-progressbar.ba-player-disabled .ba-player-cube-theme-progressbar-cache,.ba-player-cube-theme-progressbar.ba-player-disabled .ba-player-cube-theme-progressbar-inner,.ba-player-cube-theme-progressbar.ba-player-disabled .ba-player-cube-theme-progressbar-position{cursor:not-allowed}/*!\nbetajs-media-components - v0.0.291 - 2022-01-08\nCopyright (c) Ziggeo,Oliver Friedmann,Rashad Aliyev\nApache-2.0 Software License.\n*/.ba-player-red-color .ba-player-elevate-theme-button-inner i,.ba-player-red-color .ba-player-elevate-theme-button-inner.ba-player-elevate-theme-primary-button,.ba-player-red-color .ba-player-elevate-theme-dashboard .ba-player-button-inactive .ba-commoncss-icon-subtitle{color:#eb6a74}.ba-player-red-color .ba-player-elevate-theme-dashboard .ba-player-button-active .ba-commoncss-icon-subtitle{color:#eee}.ba-player-red-color .ba-player-elevate-theme-playbutton-duration,.ba-player-red-color .ba-player-elevate-theme-progressbar-button,.ba-player-red-color .ba-player-elevate-theme-progressbar-position,.ba-player-red-color .ba-player-elevate-theme-rerecord-button,.ba-player-red-color .ba-player-elevate-theme-stream-label-container .ba-player-elevate-theme-stream-label,.ba-player-red-color .ba-player-elevate-theme-volumebar-position{background-color:#eb6a74}.ba-player-red-color.ba-videoplayer-noie8 .ba-player-elevate-theme-playbutton-container{border-color:#eb6a74}.ba-player-red-color.ba-videoplayer-noie8 .ba-player-elevate-theme-playbutton-button::after{color:#eb6a74}.ba-player-red-color .ba-player-elevate-theme-volumebar-inner{background-color:#cecece;background-color:rgba(0,0,0,.3)}.ba-player-blue-color .ba-player-elevate-theme-button-inner i,.ba-player-blue-color .ba-player-elevate-theme-button-inner.ba-player-elevate-theme-primary-button,.ba-player-blue-color .ba-player-elevate-theme-dashboard .ba-player-button-inactive .ba-commoncss-icon-subtitle{color:#2a74eb}.ba-player-blue-color .ba-player-elevate-theme-dashboard .ba-player-button-active .ba-commoncss-icon-subtitle{color:#eee}.ba-player-blue-color .ba-player-elevate-theme-playbutton-duration,.ba-player-blue-color .ba-player-elevate-theme-progressbar-button,.ba-player-blue-color .ba-player-elevate-theme-progressbar-position,.ba-player-blue-color .ba-player-elevate-theme-rerecord-button,.ba-player-blue-color .ba-player-elevate-theme-stream-label-container .ba-player-elevate-theme-stream-label,.ba-player-blue-color .ba-player-elevate-theme-volumebar-position{background-color:#2a74eb}.ba-player-blue-color.ba-videoplayer-noie8 .ba-player-elevate-theme-playbutton-container{border-color:#2a74eb}.ba-player-blue-color.ba-videoplayer-noie8 .ba-player-elevate-theme-playbutton-button::after{color:#2a74eb}.ba-player-blue-color .ba-player-elevate-theme-volumebar-inner{background-color:#cecece;background-color:rgba(0,0,0,.3)}.ba-player-green-color .ba-player-elevate-theme-button-inner i,.ba-player-green-color .ba-player-elevate-theme-button-inner.ba-player-elevate-theme-primary-button,.ba-player-green-color .ba-player-elevate-theme-dashboard .ba-player-button-inactive .ba-commoncss-icon-subtitle{color:#5daa96}.ba-player-green-color .ba-player-elevate-theme-dashboard .ba-player-button-active .ba-commoncss-icon-subtitle{color:#eee}.ba-player-green-color .ba-player-elevate-theme-playbutton-duration,.ba-player-green-color .ba-player-elevate-theme-progressbar-button,.ba-player-green-color .ba-player-elevate-theme-progressbar-position,.ba-player-green-color .ba-player-elevate-theme-rerecord-button,.ba-player-green-color .ba-player-elevate-theme-stream-label-container .ba-player-elevate-theme-stream-label,.ba-player-green-color .ba-player-elevate-theme-volumebar-position{background-color:#5daa96}.ba-player-green-color.ba-videoplayer-noie8 .ba-player-elevate-theme-playbutton-container{border-color:#5daa96}.ba-player-green-color.ba-videoplayer-noie8 .ba-player-elevate-theme-playbutton-button::after{color:#5daa96}.ba-player-green-color .ba-player-elevate-theme-volumebar-inner{background-color:#cecece;background-color:rgba(0,0,0,.3)}.ba-player-elevate-theme{font-family:Helvetica Neue,Helvetica,Arial,sans-serif}.ba-player-elevate-theme .ba-commoncss-icon-pause,.ba-player-elevate-theme .ba-commoncss-icon-play{color:#000}.ba-player-elevate-theme .ba-commoncss-icon-pause,.ba-player-elevate-theme .ba-commoncss-icon-play,.ba-player-elevate-theme .ba-commoncss-icon-resize-full,.ba-player-elevate-theme .ba-commoncss-icon-volume-down,.ba-player-elevate-theme .ba-commoncss-icon-volume-up{display:inline-block}.ba-player-elevate-theme .ba-commoncss-icon-pause:before,.ba-player-elevate-theme .ba-commoncss-icon-play:before,.ba-player-elevate-theme .ba-commoncss-icon-resize-full:before,.ba-player-elevate-theme .ba-commoncss-icon-volume-down:before,.ba-player-elevate-theme .ba-commoncss-icon-volume-up:before{font-size:11px;margin:0;line-height:inherit}.ba-player-elevate-theme .ba-commoncss-settings-menu{bottom:72px}.ba-player-elevate-theme.ba-videoplayer-ie8 .ba-commoncss-icon-volume-down:before{font-size:12px}.ba-player-elevate-theme .ba-settings-overlay-inner{bottom:50px;right:2.5%}.ba-player-elevate-theme .ba-commoncss-settings-visible .ba-player-elevate-theme-button-inner{color:#eee}.ba-player-elevate-theme .ba-commoncss-icon-volume-up{color:#666}.ba-player-elevate-theme .ba-commoncss-icon-resize-full{color:#666}.ba-player-elevate-theme .ba-videoplayer-seeking-thumb-container{bottom:70px}.ba-player-elevate-theme-dashboard{transition:opacity .5s ease-in-out;-moz-transition:opacity .5s ease-in-out;-webkit-transition:opacity .5s ease-in-out;-o-transition:opacity .5s ease-in-out;-ms-transition:opacity .5s ease-in-out;position:absolute;left:2.5%;bottom:10px;width:95%;opacity:.75;overflow:hidden;z-index:1}.ba-player-elevate-theme-dashboard .ba-player-airplay-container,.ba-player-elevate-theme-dashboard .ba-player-button-active .ba-player-elevate-theme-button-inner{padding-top:2px}.ba-player-elevate-theme-dashboard .ba-player-button-inactive .ba-commoncss-icon-subtitle{color:#000}.ba-player-elevate-theme-top-block{padding-top:15px;width:100%;clear:both}.ba-videoplayer-ie8 .ba-player-elevate-theme-top-block{padding-top:0;padding-bottom:5px}.ba-player-elevate-theme-bottom-block{background-color:#eee;clear:both;height:32px;overflow:hidden;width:100%}.ba-player-elevate-theme-left-block{float:left}.ba-player-elevate-theme-left-block>div{border-right:1px solid #666;box-sizing:content-box;float:left;font-size:13px;color:#000;line-height:31px;text-align:center;width:40px}.ba-player-elevate-theme-center-block{float:left;padding:0 10px}.ba-player-elevate-theme-right-block{float:right}.ba-player-elevate-theme-right-block>div{border-left:1px solid #666;box-sizing:content-box;float:right;line-height:32px;text-align:center}.ba-player-elevate-theme-right-block>div:first-child{float:left;line-height:31px}.ba-player-elevate-theme-top-right-block{float:right}.ba-player-elevate-theme-top-right-block .ba-player-elevate-theme-time-value{text-align:right}.ba-player-elevate-theme-button-container{width:40px;text-align:center}.ba-videoplayer-noie8 .ba-player-elevate-theme-button-inner{color:#000;font-size:13px}.ba-videoplayer-ie8 .ba-player-elevate-theme-button-inner{color:#000;font-size:13px;margin-left:3px}.ba-player-elevate-theme-button-inner{cursor:pointer}.ba-player-elevate-theme-time-container{float:left;width:40px;height:100%;position:relative;top:10px;text-align:center;font-size:11px;box-sizing:content-box;border:none}.ba-videoplayer-ie8 .ba-player-elevate-theme-time-container{top:7px}.ba-player-elevate-theme-time-value{color:#fff;text-shadow:0 0 4px #000;-webkit-transform:translateY(-50%);-moz-transform:translateY(-50%);-o-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);top:50%;position:relative;text-align:center;float:left;font-size:11px;width:40px;letter-spacing:.1em}.ba-videoplayer-noie8 .ba-player-elevate-theme-volumebar{float:right;width:60px;height:100%;margin-right:12px}.ba-videoplayer-ie8 .ba-player-elevate-theme-volumebar{float:right;width:60px;height:50%}.ba-player-elevate-theme-progressbar{overflow:hidden;height:100%}.ba-player-elevate-theme-progressbar{padding:10px 0 5px}.ba-player-elevate-theme-progressbar-inner{-webkit-transform:translateY(-50%);-moz-transform:translateY(-50%);-o-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);top:50%;position:relative;text-align:center;-moz-border-radius:2px;-webkit-border-radius:2px;border-radius:2px;cursor:pointer;background-color:#eee;box-sizing:border-box;height:8px}.ba-player-elevate-theme-progressbar.ba-player-disabled .ba-player-elevate-theme-progressbar-cache,.ba-player-elevate-theme-progressbar.ba-player-disabled .ba-player-elevate-theme-progressbar-inner,.ba-player-elevate-theme-progressbar.ba-player-disabled .ba-player-elevate-theme-progressbar-position{cursor:not-allowed}.ba-player-elevate-theme-progressbar-cache{position:absolute;left:0;border-bottom-left-radius:3px;border-bottom-right-radius:3px;border-top-left-radius:3px;border-top-right-radius:3px;cursor:pointer;background-color:#eee;height:8px}.ba-player-elevate-theme-progressbar-position{background-color:#000;left:-8px;position:absolute;height:100%}.ba-player-elevate-theme-progressbar-button{-moz-border-radius:50%;-webkit-border-radius:50%;border-radius:50%;box-sizing:content-box;display:inline-block;position:absolute;right:-15px;top:-4px;z-index:1;background-color:#000;border:4px solid #666;height:8px;width:8px}.ba-player-elevate-theme-progressbar-marker{box-sizing:content-box;display:inline-block;position:absolute;right:-15px;top:-4px;z-index:1;background-color:#000;height:16px;width:4px}.ba-player-elevate-theme-button-text{font-family:sans-serif;font-weight:400;font-size:10px}.ba-player-size-small .ba-player-elevate-theme-center-block,.ba-player-size-small .ba-player-elevate-theme-time-container{display:none}.ba-player-size-medium .ba-player-elevate-theme-volumebar{display:none}.ba-player-size-medium .ba-player-elevate-theme-right-time-container{display:none}.ba-player-elevate-theme-title-block>p{font-size:11px;color:#000;line-height:32px;margin:0}.ba-player-elevate-theme-title-block>p>span{color:#2c2c2c;font-weight:700;font-size:1em}.ba-player-elevate-theme-stream-label-container .ba-player-elevate-theme-stream-label{cursor:pointer;background-color:#000;color:#eee;padding:3px}.ba-player-elevate-theme-left-block .ba-player-elevate-theme-volumebar{float:left;height:32px;width:60px}.ba-player-elevate-theme-volumebar-inner{-webkit-transform:translateY(-50%);-moz-transform:translateY(-50%);-o-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);top:50%;position:relative;text-align:center;border-bottom-left-radius:3px;border-bottom-right-radius:3px;border-top-left-radius:3px;border-top-right-radius:3px;cursor:pointer;background-color:#666;height:6px;margin:0 5px}.ba-videoplayer-ie8 .ba-player-elevate-theme-volumebar-inner{margin-top:-3px}.ba-player-elevate-theme-volumebar-position{border-bottom-left-radius:3px;border-bottom-right-radius:3px;border-top-left-radius:3px;border-top-right-radius:3px;position:absolute;left:0;background-color:#000;height:100%}.ba-player-elevate-theme-top-left-block{float:left}.ba-player-size-small .ba-player-elevate-theme-volumebar{display:none}.ba-player-size-small .ba-player-elevate-theme-dashboard{width:100%;left:0}.ba-player-elevate-theme-button-inner,.ba-player-elevate-theme-left-block .ba-player-elevate-theme-volumebar,.ba-player-elevate-theme-title-block>p{padding-top:1px}.ba-player-elevate-theme-cast-button-container button{-moz-opacity:.7;-khtml-opacity:.7;opacity:.7;background:0 0;border:none;cursor:pointer;padding-top:7px;width:32px}.ba-player-elevate-theme-primary-button{padding:0 10px}.ba-player-elevate-theme-primary-button-container{width:auto}.ba-player-fullscreen-view .ba-videoplayer-dashboard{width:95%;bottom:0}.ba-player-fullscreen-view .ba-videoplayer-title-block{top:0}.ba-player-fullscreen-view.ba-player-firefox-browser .ba-videoplayer-dashboard,.ba-player-fullscreen-view.ba-player-firefox-browser .ba-videoplayer-title-block{position:fixed;z-index:100}.ba-player-elevate-theme.ba-videoplayer-container .ba-player-text-tracks-overlay{position:absolute;left:0;right:0;bottom:64px;transition:bottom .5s ease-in-out;-moz-transition:bottom .5s ease-in-out;-webkit-transition:bottom .5s ease-in-out;-o-transition:bottom .5s ease-in-out;-ms-transition:bottom .5s ease-in-out}.ba-player-elevate-theme.ba-videoplayer-container .ba-player-text-tracks-overlay .ba-commoncss-options-popup{bottom:-14px;right:2.5%}.ba-player-elevate-theme.ba-videoplayer-container .ba-player-track-dashboard-hidden.ba-player-text-tracks-overlay{bottom:5px}.ba-recorder-theme-elevate .ba-videorecorder-chooser-container{background-color:#eee;z-index:1}.ba-recorder-theme-elevate .ba-videorecorder-chooser-icon-container{color:#000;font-size:32px;margin:16px}.ba-recorder-theme-elevate .ba-videorecorder-chooser-button-0,.ba-recorder-theme-elevate .ba-videorecorder-chooser-button-2{background-color:#000}.ba-recorder-theme-elevate .ba-videorecorder-chooser-button-0,.ba-recorder-theme-elevate .ba-videorecorder-chooser-button-1,.ba-recorder-theme-elevate .ba-videorecorder-chooser-button-2,.ba-recorder-theme-elevate .ba-videorecorder-chooser-button-3{line-height:20px;min-width:10em;padding:6px 8px}.ba-recorder-theme-elevate .ba-videorecorder-chooser-button-0,.ba-recorder-theme-elevate .ba-videorecorder-chooser-button-2{-moz-border-radius:2px;-webkit-border-radius:2px;border-radius:2px;border:1px solid #000}.ba-recorder-theme-elevate .ba-videorecorder-chooser-button-1,.ba-recorder-theme-elevate .ba-videorecorder-chooser-button-3{-moz-border-radius:2px;-webkit-border-radius:2px;border-radius:2px;background-color:#eee;color:#666;border:1px solid #666;margin:2px 0}.ba-recorder-theme-elevate .ba-commoncss-icon-record:before{font-size:.8em}.ba-recorder-theme-elevate .ba-commoncss-icon-upload:before{font-size:.9em}.ba-recorder-red-color .ba-recorder-theme-elevate-dashboard .ba-videorecorder-button-circle-selected,.ba-recorder-red-color .ba-recorder-theme-elevate-dashboard .ba-videorecorder-button-inner:hover,.ba-recorder-red-color .ba-recorder-theme-elevate-dashboard .ba-videorecorder-button-selected{color:#eb6a74}.ba-recorder-red-color .ba-recorder-theme-elevate-dashboard .ba-videorecorder-button-primary{background-color:#eb6a74}.ba-recorder-red-color .ba-recorder-theme-elevate-dashboard .ba-videorecorder-settings span{border-color:#eb6a74}.ba-recorder-red-color .ba-recorder-theme-elevate-dashboard .ba-videorecorder-settings input[type=radio]:checked+span{border-color:#eb6a74;background-color:#000}.ba-recorder-red-color .ba-recorder-loader-label,.ba-recorder-red-color .ba-videorecorder-loader-label,.ba-recorder-red-color .ba-videorecorder-message-message{color:#eb6a74}.ba-recorder-red-color .ba-videorecorder-chooser-button-0,.ba-recorder-red-color .ba-videorecorder-chooser-button-2,.ba-recorder-red-color .ba-videorecorder-imagegallery-leftbutton,.ba-recorder-red-color .ba-videorecorder-imagegallery-rightbutton{background-color:#eb6a74}.ba-recorder-red-color .ba-videorecorder-chooser-button-0,.ba-recorder-red-color .ba-videorecorder-chooser-button-2,.ba-recorder-red-color .ba-videorecorder-imagegallery-image:hover{border-color:#eb6a74}.ba-recorder-red-color .ba-videorecorder-message-message a{color:#eb6a74}.ba-recorder-blue-color .ba-recorder-theme-elevate-dashboard .ba-videorecorder-button-circle-selected,.ba-recorder-blue-color .ba-recorder-theme-elevate-dashboard .ba-videorecorder-button-inner:hover,.ba-recorder-blue-color .ba-recorder-theme-elevate-dashboard .ba-videorecorder-button-selected{color:#2a74eb}.ba-recorder-blue-color .ba-recorder-theme-elevate-dashboard .ba-videorecorder-button-primary{background-color:#2a74eb}.ba-recorder-blue-color .ba-recorder-theme-elevate-dashboard .ba-videorecorder-settings span{border-color:#2a74eb}.ba-recorder-blue-color .ba-recorder-theme-elevate-dashboard .ba-videorecorder-settings input[type=radio]:checked+span{border-color:#2a74eb;background-color:#000}.ba-recorder-blue-color .ba-recorder-loader-label,.ba-recorder-blue-color .ba-videorecorder-loader-label,.ba-recorder-blue-color .ba-videorecorder-message-message{color:#2a74eb}.ba-recorder-blue-color .ba-videorecorder-chooser-button-0,.ba-recorder-blue-color .ba-videorecorder-chooser-button-2,.ba-recorder-blue-color .ba-videorecorder-imagegallery-leftbutton,.ba-recorder-blue-color .ba-videorecorder-imagegallery-rightbutton{background-color:#2a74eb}.ba-recorder-blue-color .ba-videorecorder-chooser-button-0,.ba-recorder-blue-color .ba-videorecorder-chooser-button-2,.ba-recorder-blue-color .ba-videorecorder-imagegallery-image:hover{border-color:#2a74eb}.ba-recorder-blue-color .ba-videorecorder-message-message a{color:#2a74eb}.ba-recorder-green-color .ba-recorder-theme-elevate-dashboard .ba-videorecorder-button-circle-selected,.ba-recorder-green-color .ba-recorder-theme-elevate-dashboard .ba-videorecorder-button-inner:hover,.ba-recorder-green-color .ba-recorder-theme-elevate-dashboard .ba-videorecorder-button-selected{color:#5daa96}.ba-recorder-green-color .ba-recorder-theme-elevate-dashboard .ba-videorecorder-button-primary{background-color:#5daa96}.ba-recorder-green-color .ba-recorder-theme-elevate-dashboard .ba-videorecorder-settings span{border-color:#5daa96}.ba-recorder-green-color .ba-recorder-theme-elevate-dashboard .ba-videorecorder-settings input[type=radio]:checked+span{border-color:#5daa96;background-color:#000}.ba-recorder-green-color .ba-recorder-loader-label,.ba-recorder-green-color .ba-videorecorder-loader-label,.ba-recorder-green-color .ba-videorecorder-message-message{color:#5daa96}.ba-recorder-green-color .ba-videorecorder-chooser-button-0,.ba-recorder-green-color .ba-videorecorder-chooser-button-2,.ba-recorder-green-color .ba-videorecorder-imagegallery-leftbutton,.ba-recorder-green-color .ba-videorecorder-imagegallery-rightbutton{background-color:#5daa96}.ba-recorder-green-color .ba-videorecorder-chooser-button-0,.ba-recorder-green-color .ba-videorecorder-chooser-button-2,.ba-recorder-green-color .ba-videorecorder-imagegallery-image:hover{border-color:#5daa96}.ba-recorder-green-color .ba-videorecorder-message-message a{color:#5daa96}.ba-recorder-theme-elevate.ba-videorecorder-container .ba-videorecorder-video{background-color:#000}.ba-recorder-theme-elevate-dashboard{position:absolute;left:0;right:0;top:0;bottom:0;height:100%}.ba-recorder-theme-elevate-dashboard .ba-videorecorder-settings-left-sidebar{display:table;height:100%;text-align:center;bottom:0;left:0;position:absolute;right:auto;top:0;width:55px}.ba-recorder-theme-elevate-dashboard .ba-videorecorder-settings-left-sidebar .ba-videorecorder-controlbar-left-section{display:table-cell;vertical-align:middle}.ba-recorder-theme-elevate-dashboard .ba-videorecorder-settings-left-sidebar .ba-videorecorder-controlbar-left-section .ba-videorecorder-circle-button-container{margin:2px auto}.ba-recorder-theme-elevate-dashboard .ba-videorecorder-controlbar-middle-section .ba-videorecorder-timer-container{display:table;cursor:default;height:100%;position:absolute;width:100%}.ba-recorder-theme-elevate-dashboard .ba-videorecorder-controlbar-middle-section .ba-videorecorder-timer-container .ba-videorecorder-label-container{display:table-cell;float:none;position:relative;text-align:center;vertical-align:middle;width:auto}.ba-recorder-theme-elevate-dashboard .ba-videorecorder-controlbar-middle-section .ba-videorecorder-timer-container .ba-videorecorder-label-container .ba-videorecorder-button-primary{margin:0;padding:7px 16px}.ba-recorder-theme-elevate-dashboard .ba-videorecorder-controlbar{position:absolute;left:0;right:0;bottom:0;height:55px;padding:0 10px}.ba-recorder-theme-elevate-dashboard .ba-videorecorder-long-rounded-button{-moz-border-radius:18px;-webkit-border-radius:18px;border-radius:18px;display:inline-block}.ba-recorder-theme-elevate-dashboard .ba-videorecorder-long-rounded-button>p{font-family:sans-serif;font-size:12px;padding:7px;margin:0}.ba-recorder-theme-elevate-dashboard .ba-videorecorder-circle-button{background-color:#979797;background-color:rgba(0,0,0,.4);-moz-border-radius:50%;-webkit-border-radius:50%;border-radius:50%;color:#eee;display:inline-block;height:40px;line-height:40px;text-align:center;width:40px}.ba-recorder-theme-elevate-dashboard .ba-videorecorder-button-circle-selected,.ba-recorder-theme-elevate-dashboard .ba-videorecorder-button-inner:hover,.ba-recorder-theme-elevate-dashboard .ba-videorecorder-button-selected{color:#000;cursor:pointer}.ba-recorder-theme-elevate-dashboard .ba-videorecorder-button-inner{background-color:#eee;border-radius:50%;color:#666;opacity:.65;cursor:pointer;border:none;font-size:inherit;margin:0;padding:0}.ba-recorder-theme-elevate-dashboard .ba-videorecorder-button-inner i:before{line-height:inherit}.ba-recorder-theme-elevate-dashboard .ba-videorecorder-indicator-container{position:absolute;top:50%}.ba-recorder-theme-elevate-dashboard .ba-videorecorder-settings{position:inherit}.ba-recorder-theme-elevate-dashboard .ba-videorecorder-settings .ba-videorecorder-add-stream,.ba-recorder-theme-elevate-dashboard .ba-videorecorder-settings label{font-family:sans-serif;font-weight:300;font-size:12px}.ba-recorder-theme-elevate-dashboard .ba-videorecorder-settings hr{border-bottom-color:#000}.ba-recorder-theme-elevate-dashboard .ba-videorecorder-settings input[type=radio]:checked+span{border:3px solid #000;background-color:#000}.ba-recorder-theme-elevate-dashboard .ba-videorecorder-settings span{background-color:#eee;border-color:#979797}.ba-recorder-theme-elevate-dashboard .ba-videorecorder-settings .ba-videorecorder-circle-button{margin:6px 0}.ba-recorder-theme-elevate-dashboard .ba-videorecorder-button-primary{-moz-border-radius:18px;-webkit-border-radius:18px;border-radius:18px;display:inline-block;background-color:#000;font-family:sans-serif;font-weight:300;font-size:12px;margin-top:6px;min-width:3em;padding:10px 16px;position:relative;left:0;right:0;top:0;bottom:0;-webkit-transform:translate(0,0);-moz-transform:translate(0,0);-o-transform:translate(0,0);-ms-transform:translate(0,0);transform:translate(0,0);z-index:10}.ba-recorder-theme-elevate-dashboard .ba-videorecorder-settings-button{background-color:#eee;cursor:pointer;margin:15px 0 0 15px}.ba-recorder-theme-elevate-dashboard .ba-videorecorder-settings-button>p{color:#666}.ba-recorder-theme-elevate-dashboard .ba-videorecorder-bubble-info{background-color:#fff;background-color:#fff;-moz-border-radius:16px;-webkit-border-radius:16px;border-radius:16px;display:inline-block;padding:9px 0;line-height:1.2;min-width:280px;position:relative;max-height:10em;overflow:scroll;left:60px}.ba-recorder-theme-elevate-dashboard .ba-videorecorder-bubble-info:before{border-right:9px solid;border-right-color:#fff;border-right-color:#fff;border-bottom:6px solid transparent;border-top:6px solid transparent;content:\"\";height:0;top:13px;position:absolute;left:-9px;width:0}.ba-recorder-theme-elevate-dashboard .ba-videorecorder-bubble-info li{color:#666;text-align:left}.ba-recorder-theme-elevate-dashboard .ba-videorecorder-bubble-info{position:absolute}.ba-recorder-theme-elevate-dashboard .ba-videorecorder-controlbar-center-section{position:absolute;left:0;text-align:center;width:100%}.ba-recorder-theme-elevate-dashboard .ba-videorecorder-button-container{display:inline-block}.ba-recorder-theme-elevate-dashboard .ba-videorecorder-label-container{float:left;text-align:right;width:50%;opacity:.25}.ba-recorder-theme-elevate-dashboard .ba-videorecorder-label-container .ba-videorecorder-button-primary{background-color:#eee;color:#666}.ba-recorder-theme-elevate-dashboard .ba-videorecorder-stop-button-container{text-align:center}.ba-recorder-theme-elevate.ba-videorecorder-container .ba-videorecorder-imagegallery-container{left:50px;right:50px}.ba-recorder-overlay img,.ba-videorecorder-imagegallery-image{border:none;-moz-border-radius:3px;-webkit-border-radius:3px;border-radius:3px}.ba-videorecorder-imagegallery-image:hover{border:2px solid #fff}.ba-videorecorder-imagegallery-leftbutton,.ba-videorecorder-imagegallery-rightbutton{border-radius:50%;background-color:#fff;height:30px;width:30px;z-index:10}.ba-videorecorder-imagegallery-button-inner{color:#666}.ba-recorder-theme-elevate .ba-videorecorder-topmessage-container{text-align:center}.ba-recorder-theme-elevate .ba-videorecorder-topmessage-message{color:#eee;display:inline-block;font-family:sans-serif;font-size:12px;font-weight:300;padding:7px;position:relative;top:12px}.ba-recorder-theme-elevate .ba-videorecorder-topmessage-background{background:0 0}.ba-imageviewer-elevate-theme-red-color .ba-commoncss-icon-resize-full,.ba-imageviewer-elevate-theme-red-color .ba-commoncss-icon-resize-small,.ba-imageviewer-elevate-theme-red-color .ba-imageviewer-button-inner,.ba-imageviewer-elevate-theme-red-color.ba-imageviewer-noie8 .ba-imageviewer-button-inner{color:#eb6a74}.ba-imageviewer-elevate-theme-red-color .ba-imageviewer-rerecord-button{background-color:#eb6a74}.ba-imageviewer-elevate-theme-blue-color .ba-commoncss-icon-resize-full,.ba-imageviewer-elevate-theme-blue-color .ba-commoncss-icon-resize-small,.ba-imageviewer-elevate-theme-blue-color .ba-imageviewer-button-inner,.ba-imageviewer-elevate-theme-blue-color.ba-imageviewer-noie8 .ba-imageviewer-button-inner{color:#2a74eb}.ba-imageviewer-elevate-theme-blue-color .ba-imageviewer-rerecord-button{background-color:#2a74eb}.ba-imageviewer-elevate-theme-green-color .ba-commoncss-icon-resize-full,.ba-imageviewer-elevate-theme-green-color .ba-commoncss-icon-resize-small,.ba-imageviewer-elevate-theme-green-color .ba-imageviewer-button-inner,.ba-imageviewer-elevate-theme-green-color.ba-imageviewer-noie8 .ba-imageviewer-button-inner{color:#5daa96}.ba-imageviewer-elevate-theme-green-color .ba-imageviewer-rerecord-button{background-color:#5daa96}.ba-imageviewer-elevate-theme .ba-commoncss-icon-resize-full{color:#666;display:inline-block}.ba-imageviewer-elevate-theme .ba-commoncss-icon-resize-full:before{font-size:11px;margin:0;line-height:inherit}.ba-imageviewer-elevate-theme .ba-imageviewer-dashboard{transition:opacity .5s ease-in-out;-moz-transition:opacity .5s ease-in-out;-webkit-transition:opacity .5s ease-in-out;-o-transition:opacity .5s ease-in-out;-ms-transition:opacity .5s ease-in-out;position:absolute;left:2.5%;bottom:10px;width:95%;opacity:.75;overflow:hidden;z-index:1}.ba-imageviewer-elevate-theme .ba-imageviewer-dashboard-hidden{opacity:0}.ba-imageviewer-elevate-theme .ba-imageviewer-top-block{padding-top:15px;width:100%;clear:both}.ba-imageviewer-elevate-theme.ba-imageviewer-ie8 .ba-imageviewer-top-block{padding-top:0;padding-bottom:5px}.ba-imageviewer-elevate-theme .ba-imageviewer-bottom-block{background-color:#eee;clear:both;height:32px;overflow:hidden;width:100%}.ba-imageviewer-elevate-theme .ba-imageviewer-left-block{float:left}.ba-imageviewer-elevate-theme .ba-imageviewer-left-block>div{-moz-box-shadow:inset -1px 0 0 #666;-webkit-box-shadow:inset -1px 0 0 #666;box-shadow:inset -1px 0 0 #666;float:left;font-size:13px;color:#000;line-height:31px;text-align:center;width:40px}.ba-imageviewer-elevate-theme .ba-imageviewer-center-block{float:left;padding:0 10px}.ba-imageviewer-elevate-theme .ba-imageviewer-right-block{float:right}.ba-imageviewer-elevate-theme .ba-imageviewer-right-block>div{-moz-box-shadow:inset 1px 0 0 #666;-webkit-box-shadow:inset 1px 0 0 #666;box-shadow:inset 1px 0 0 #666;float:right;line-height:32px;text-align:center}.ba-imageviewer-elevate-theme .ba-imageviewer-right-block>div:first-child{float:left;line-height:31px}.ba-imageviewer-elevate-theme .ba-imageviewer-top-right-block{float:right}.ba-imageviewer-elevate-theme .ba-imageviewer-top-right-block .ba-imageviewer-time-value{text-align:right}.ba-imageviewer-elevate-theme .ba-imageviewer-button-container{width:40px;text-align:center}.ba-imageviewer-elevate-theme.ba-imageviewer-noie8 .ba-imageviewer-button-inner{color:#000;font-size:13px}.ba-imageviewer-elevate-theme.ba-imageviewer-ie8 .ba-imageviewer-button-inner{color:#000;font-size:13px;margin-left:3px}.ba-imageviewer-elevate-theme .ba-imageviewer-button-inner{cursor:pointer}.ba-imageviewer-elevate-theme .ba-imageviewer-button-text{font-family:sans-serif;font-weight:400;font-size:10px}.ba-imageviewer-elevate-theme.ba-imageviewer-size-small .ba-imageviewer-center-block{display:none}.ba-imageviewer-elevate-theme .ba-imageviewer-image-title-block>p{font-size:11px;color:#000;line-height:32px;margin:0}.ba-imageviewer-elevate-theme .ba-imageviewer-image-title-block>p>span{color:#2c2c2c;font-weight:700;font-size:1em}.ba-imageviewer-elevate-theme .ba-imageviewer-top-left-block{float:left}.ba-imageviewer-elevate-theme.ba-imageviewer-noie8 .ba-imageviewer-full-screen-btn-inner{padding-left:4px}.ba-imageviewer-elevate-theme.ba-imageviewer-size-small .ba-imageviewer-dashboard{width:100%}.ba-imageviewer-elevate-theme .ba-imageviewer-button-inner,.ba-imageviewer-elevate-theme .ba-imageviewer-image-title-block>p{padding-top:1px}.ba-imageviewer-fullscreen-view.ba-imageviewer-elevate-theme .ba-imageviewer-dashboard{bottom:0;position:fixed;right:2.5%;width:95%;z-index:1010}.ba-audioplayer-container.ba-player-elevate-theme.ba-player-normal-view{border:1px solid;border-color:#555;border-color:transparent;min-height:80px;min-width:320px}.ba-audioplayer-container.ba-player-elevate-theme.ba-player-size-medium .ba-player-elevate-theme-right-time-container,.ba-audioplayer-container.ba-player-elevate-theme.ba-player-size-medium .ba-player-elevate-theme-volume-button-container,.ba-audioplayer-container.ba-player-elevate-theme.ba-player-size-small .ba-player-elevate-theme-center-block,.ba-audioplayer-container.ba-player-elevate-theme.ba-player-size-small .ba-player-elevate-theme-time-container,.ba-audioplayer-container.ba-player-elevate-theme.ba-player-size-small .ba-player-elevate-theme-volume-button-container,.ba-audioplayer-container.ba-player-elevate-theme.ba-player-size-small .ba-player-elevate-theme-volumebar{display:block}.ba-player-elevate-theme-dashboard{padding:3px;z-index:10}.ba-player-elevate-theme-visual-effect-applied .ba-player-elevate-theme-dashboard{position:absolute;bottom:0;width:95%}.ba-player-elevate-theme-audio-canvas{display:none;position:absolute;background-color:#000}.ba-player-elevate-theme-visual-effect-applied .ba-audioplayer-overlay{background:#000}.ba-player-elevate-theme-top-block{padding-top:8px}.ba-player-elevate-theme-bottom-block{border:1px solid;border-color:#555;border-color:rgba(0,0,0,.8);box-sizing:content-box}.ba-player-elevate-theme-title-block>p{font-size:11px;color:#000;line-height:32px;margin:0}.ba-player-elevate-theme-title-block>p>span{color:#2c2c2c;font-weight:700;font-size:1em}/*!\nbetajs-media-components - v0.0.291 - 2022-01-08\nCopyright (c) Ziggeo,Oliver Friedmann,Rashad Aliyev\nApache-2.0 Software License.\n*/.ba-player-red-color .ba-player-minimalist-theme-controlbar-top-block .ba-player-minimalist-theme-button-container .ba-player-minimalist-theme-button-inner,.ba-player-red-color .ba-player-minimalist-theme-title p{color:#eb6a74}.ba-player-red-color.ba-videoplayer-noie8 .ba-player-minimalist-theme-playbutton-container{border-color:#eb6a74}.ba-player-red-color.ba-videoplayer-noie8 .ba-player-minimalist-theme-playbutton-button::after{color:#eb6a74}.ba-player-red-color .ba-player-minimalist-theme-right-button-container.ba-commoncss-settings-visible .ba-commoncss-icon-cog,.ba-player-red-color .ba-player-minimalist-theme-right-button-container.ba-player-button-active .ba-commoncss-icon-subtitle{color:#eb6a74}.ba-player-red-color .ba-player-minimalist-theme-right-button-container .ba-player-minimalist-theme-primary-button,.ba-player-red-color .ba-player-minimalist-theme-right-button-container.ba-commoncss-settings-hidden,.ba-player-red-color .ba-player-minimalist-theme-right-button-container.ba-player-button-inactive{background-color:#eb6a74}.ba-player-red-color .ba-player-minimalist-theme-right-button-container.ba-player-button-inactive .ba-commoncss-icon-subtitle{color:#eee}.ba-player-red-color .ba-player-minimalist-theme-playbutton-duration,.ba-player-red-color .ba-player-minimalist-theme-progressbar-button,.ba-player-red-color .ba-player-minimalist-theme-progressbar-position,.ba-player-red-color .ba-player-minimalist-theme-rerecord-button,.ba-player-red-color .ba-player-minimalist-theme-stream-label,.ba-player-red-color .ba-player-minimalist-theme-time-container,.ba-player-red-color .ba-player-minimalist-theme-volumebar-position{background-color:#eb6a74}.ba-player-blue-color .ba-player-minimalist-theme-controlbar-top-block .ba-player-minimalist-theme-button-container .ba-player-minimalist-theme-button-inner,.ba-player-blue-color .ba-player-minimalist-theme-title p{color:#2a74eb}.ba-player-blue-color.ba-videoplayer-noie8 .ba-player-minimalist-theme-playbutton-container{border-color:#2a74eb}.ba-player-blue-color.ba-videoplayer-noie8 .ba-player-minimalist-theme-playbutton-button::after{color:#2a74eb}.ba-player-blue-color .ba-player-minimalist-theme-right-button-container.ba-commoncss-settings-visible .ba-commoncss-icon-cog,.ba-player-blue-color .ba-player-minimalist-theme-right-button-container.ba-player-button-active .ba-commoncss-icon-subtitle{color:#2a74eb}.ba-player-blue-color .ba-player-minimalist-theme-right-button-container .ba-player-minimalist-theme-primary-button,.ba-player-blue-color .ba-player-minimalist-theme-right-button-container.ba-commoncss-settings-hidden,.ba-player-blue-color .ba-player-minimalist-theme-right-button-container.ba-player-button-inactive{background-color:#2a74eb}.ba-player-blue-color .ba-player-minimalist-theme-right-button-container.ba-player-button-inactive .ba-commoncss-icon-subtitle{color:#eee}.ba-player-blue-color .ba-player-minimalist-theme-playbutton-duration,.ba-player-blue-color .ba-player-minimalist-theme-progressbar-button,.ba-player-blue-color .ba-player-minimalist-theme-progressbar-position,.ba-player-blue-color .ba-player-minimalist-theme-rerecord-button,.ba-player-blue-color .ba-player-minimalist-theme-stream-label,.ba-player-blue-color .ba-player-minimalist-theme-time-container,.ba-player-blue-color .ba-player-minimalist-theme-volumebar-position{background-color:#2a74eb}.ba-player-green-color .ba-player-minimalist-theme-controlbar-top-block .ba-player-minimalist-theme-button-container .ba-player-minimalist-theme-button-inner,.ba-player-green-color .ba-player-minimalist-theme-title p{color:#5daa96}.ba-player-green-color.ba-videoplayer-noie8 .ba-player-minimalist-theme-playbutton-container{border-color:#5daa96}.ba-player-green-color.ba-videoplayer-noie8 .ba-player-minimalist-theme-playbutton-button::after{color:#5daa96}.ba-player-green-color .ba-player-minimalist-theme-right-button-container.ba-commoncss-settings-visible .ba-commoncss-icon-cog,.ba-player-green-color .ba-player-minimalist-theme-right-button-container.ba-player-button-active .ba-commoncss-icon-subtitle{color:#5daa96}.ba-player-green-color .ba-player-minimalist-theme-right-button-container .ba-player-minimalist-theme-primary-button,.ba-player-green-color .ba-player-minimalist-theme-right-button-container.ba-commoncss-settings-hidden,.ba-player-green-color .ba-player-minimalist-theme-right-button-container.ba-player-button-inactive{background-color:#5daa96}.ba-player-green-color .ba-player-minimalist-theme-right-button-container.ba-player-button-inactive .ba-commoncss-icon-subtitle{color:#eee}.ba-player-green-color .ba-player-minimalist-theme-playbutton-duration,.ba-player-green-color .ba-player-minimalist-theme-progressbar-button,.ba-player-green-color .ba-player-minimalist-theme-progressbar-position,.ba-player-green-color .ba-player-minimalist-theme-rerecord-button,.ba-player-green-color .ba-player-minimalist-theme-stream-label,.ba-player-green-color .ba-player-minimalist-theme-time-container,.ba-player-green-color .ba-player-minimalist-theme-volumebar-position{background-color:#5daa96}.ba-player-minimalist-theme{font-family:sans-serif}.ba-player-minimalist-theme .ba-settings-overlay-inner{right:4%}.ba-player-minimalist-theme-dashboard{transition:opacity .5s ease-in-out;-moz-transition:opacity .5s ease-in-out;-webkit-transition:opacity .5s ease-in-out;-o-transition:opacity .5s ease-in-out;-ms-transition:opacity .5s ease-in-out;height:100%;overflow:hidden;padding:0 4%}.ba-player-minimalist-theme-dashboard .ba-player-airplay-container{bottom:13px;left:5px;padding-top:2px;position:relative}.ba-player-minimalist-theme-dashboard .ba-player-airplay-container svg path{text-shadow:0 0 4px #000}.ba-player-minimalist-theme-button-container{font-family:sans-serif;font-weight:300;display:inline-block;width:40px;color:#eee}.ba-player-minimalist-theme-button-container[data-selector=button-icon-pause]:focus i.ba-commoncss-icon-play,.ba-player-minimalist-theme-button-container[data-selector=button-icon-play]:focus i.ba-commoncss-icon-play{outline:1px solid #8bc2f9}.ba-player-minimalist-theme-button-container[data-selector=button-icon-pause]:focus i.ba-commoncss-icon-play:active,.ba-player-minimalist-theme-button-container[data-selector=button-icon-pause]:focus i.ba-commoncss-icon-play:hover,.ba-player-minimalist-theme-button-container[data-selector=button-icon-play]:focus i.ba-commoncss-icon-play:active,.ba-player-minimalist-theme-button-container[data-selector=button-icon-play]:focus i.ba-commoncss-icon-play:hover{border:none}.ba-player-minimalist-theme-controlbar-header{background-color:#ddd;background-color:rgba(0,0,0,.3);height:40px;left:0;letter-spacing:.05rem;line-height:25px;padding:0;position:absolute;text-align:left;width:100%}.ba-player-minimalist-theme-controlbar-header .ba-player-minimalist-theme-right-block{line-height:40px;position:absolute;right:4%;z-index:100}.ba-videoplayer-ie8 .ba-player-minimalist-theme-controlbar-header{display:none}.ba-player-minimalist-theme-controlbar-header-title-block{position:relative;width:100%;z-index:10}.ba-videoplayer-ie8 .ba-player-minimalist-theme-controlbar-header .ba-player-minimalist-theme-right-block{position:relative}.ba-videoplayer-ie8 .ba-player-minimalist-theme-controlbar-header-title-block{left:50px}.ba-player-minimalist-theme-title p{color:#eee;font-family:sans-serif;font-size:12px;font-weight:300;letter-spacing:.1em;line-height:40px;margin:0;padding:0 0 0 4%;text-align:left}.ba-videoplayer-noie8 .ba-player-minimalist-theme-controlbar-header .ba-player-minimalist-theme-button-inner{text-align:right;-webkit-transform:translateY(0);-moz-transform:translateY(0);-o-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0)}.ba-videoplayer-noie8 .ba-player-minimalist-theme-topmessage-container .ba-player-minimalist-theme-rightbutton-container{width:25px;padding-top:5px}.ba-player-minimalist-theme-controlbar-header .ba-player-minimalist-theme-button-container{width:20px}.ba-player-minimalist-theme-controlbar-footer{position:relative;height:100%}.ba-player-minimalist-theme-controlbar-top-block{height:100%}.ba-player-minimalist-theme-controlbar-top-block .ba-player-minimalist-theme-button-container{position:relative;margin:0 auto;height:100%;width:100%}.ba-player-minimalist-theme-controlbar-top-block .ba-player-minimalist-theme-button-container .ba-player-minimalist-theme-button-inner{color:#e5e5e5;color:rgba(255,255,255,.6);text-shadow:0 0 4px #000;font-size:2.5em}.ba-videoplayer-ie8 .ba-player-minimalist-theme-controlbar-top-block{height:100%}.ba-videoplayer-ie8 .ba-player-minimalist-theme-controlbar-top-block .ba-player-minimalist-theme-button-container{top:45%}.ba-videoplayer-noie8 .ba-videoplayer-overlay .ba-player-minimalist-theme-controlbar-top-block .ba-player-minimalist-theme-button-inner{transition:opacity .3s ease;-moz-transition:opacity .3s ease;-webkit-transition:opacity .3s ease;-o-transition:opacity .3s ease;-ms-transition:opacity .3s ease;opacity:0}.ba-videoplayer-noie8 .ba-videoplayer-overlay:hover .ba-player-minimalist-theme-controlbar-top-block .ba-player-minimalist-theme-button-inner{transition:opacity .2s ease;-moz-transition:opacity .2s ease;-webkit-transition:opacity .2s ease;-o-transition:opacity .2s ease;-ms-transition:opacity .2s ease;opacity:.6}.ba-videoplayer-ie8 .ba-videoplayer-overlay{height:100%}.ba-videoplayer-ie8 .ba-videoplayer-overlay .ba-player-minimalist-theme-controlbar-top-block .ba-player-minimalist-theme-button-inner{-moz-opacity:0;-khtml-opacity:0;opacity:0}.ba-videoplayer-ie8 .ba-videoplayer-overlay:hover .ba-player-minimalist-theme-controlbar-top-block .ba-player-minimalist-theme-button-inner{-moz-opacity:.6;-khtml-opacity:.6;opacity:.6}.ba-player-minimalist-theme-button-inner{cursor:pointer;z-index:100;position:relative}.ba-player-minimalist-theme-right-block{float:right}.ba-videoplayer-noie8 .ba-player-minimalist-theme-button-inner{-webkit-transform:translateY(-50%);-moz-transform:translateY(-50%);-o-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);top:50%;position:relative;text-align:center}.ba-videoplayer-ie8 .ba-player-minimalist-theme-button-inner{margin-top:12px;text-align:center;font-size:13px;margin-left:3px}.ba-player-minimalist-theme-button-inner{color:#eee;font-size:13px}.ba-player-minimalist-theme-controlbar-middle-block{position:relative;bottom:45px}.ba-player-minimalist-theme-progressbar{overflow:hidden;height:15px}.ba-player-minimalist-theme-progressbar-cache{position:absolute;left:0;cursor:pointer;background-color:#b2b2b2;background-color:rgba(255,255,255,.3);height:4px}.ba-player-minimalist-theme-progressbar-inner{-webkit-transform:translateY(-50%);-moz-transform:translateY(-50%);-o-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);top:50%;position:relative;text-align:center;cursor:pointer;background-color:#eee;height:4px}.ba-player-minimalist-theme-progressbar.ba-player-disabled.ba-player-minimalist-theme-progressbar-cache,.ba-player-minimalist-theme-progressbar.ba-player-disabled.ba-player-minimalist-theme-progressbar-inner,.ba-player-minimalist-theme-progressbar.ba-player-disabled.ba-player-minimalist-theme-progressbar-position{cursor:not-allowed}.ba-player-minimalist-theme-progressbar-position{background-color:#979797;position:absolute;left:-3px;height:100%}.ba-player-minimalist-theme-progressbar-button{-moz-border-radius:50%;-webkit-border-radius:50%;border-radius:50%;background-color:#979797;box-sizing:content-box;border:none;position:absolute;right:-7px;top:-2px;z-index:1;width:8px;height:8px}.ba-player-minimalist-theme-progressbar-marker{position:absolute;top:-2px;height:8px;width:4px;background-color:#000}.ba-player-minimalist-theme-controlbar-bottom-block{position:relative;bottom:40px}.ba-player-minimalist-theme-player-rerecord{position:relative;top:5px}.ba-player-minimalist-theme-time-container{color:#b2b2b2;color:rgba(255,255,255,.7);background-color:#676f76;float:left;font-size:.8em;letter-spacing:.1em;margin-right:15px;padding:1px 3px;margin-top:-1px;opacity:.75;width:auto}.ba-player-minimalist-theme-time-container>div{float:left}.ba-player-minimalist-theme-time-container>div:first-child{color:#eee}.ba-player-minimalist-theme-time-container>p{float:left;margin:0 3px}.ba-player-minimalist-theme-stream-label{margin-top:15px;font-size:.7em;display:inline-block;padding:4px 3px 3px 4px;background-color:#979797;color:#fff;opacity:.75}.csstheme-size-small .ba-player-minimalist-theme-controlbar-top-block .ba-player-minimalist-theme-button-container .ba-player-minimalist-theme-button-inner{font-size:1.25em}.ba-player-minimalist-theme-volumebar{float:right;height:40px;margin-left:10px;position:relative;width:60px;z-index:10}.ba-player-minimalist-theme-volumebar-inner{-webkit-transform:translateY(-50%);-moz-transform:translateY(-50%);-o-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);top:50%;position:relative;text-align:center;border-bottom-left-radius:3px;border-bottom-right-radius:3px;border-top-left-radius:3px;border-top-right-radius:3px;cursor:pointer;background-color:#979797;height:6px}.ba-player-minimalist-theme-volumebar-position{border-bottom-left-radius:3px;border-bottom-right-radius:3px;border-top-left-radius:3px;border-top-right-radius:3px;position:absolute;left:0;background-color:#eee;height:100%}.ba-player-size-medium .ba-player-minimalist-theme-controlbar-top-block .ba-player-minimalist-theme-button-container .ba-player-minimalist-theme-button-inner{font-size:2em}.ba-player-size-small .ba-player-minimalist-theme-volumebar{display:none}.ba-player-size-small .ba-player-minimalist-theme-controlbar-header{top:7px}.ba-player-size-small .ba-player-minimalist-theme-controlbar-top-block .ba-player-minimalist-theme-button-container .ba-player-minimalist-theme-button-inner{font-size:1.8em}.ba-player-size-small .ba-player-minimalist-theme-controlbar-middle-block{bottom:40px}.ba-player-size-small .ba-player-minimalist-theme-controlbar-bottom-block{bottom:38px}.ba-player-size-small .ba-player-minimalist-theme-time-container{font-size:.7em}.ba-player-minimalist-theme-cast-button-container button{text-shadow:0 0 4px #000;-moz-opacity:.7;-khtml-opacity:.7;opacity:.7;background:0 0;border:none;bottom:9px;cursor:pointer;left:5px;padding:0;position:relative;width:20px}.ba-player-minimalist-theme-right-button-container{cursor:pointer;bottom:4px;float:right;padding:1px 4px 2px;position:relative;margin-left:7px}.ba-player-minimalist-theme-right-button-container .ba-player-minimalist-theme-button-inner{line-height:40px;height:40px;width:40px}.ba-player-minimalist-theme-right-button-container .ba-commoncss-icon-cog,.ba-player-minimalist-theme-right-button-container .ba-commoncss-icon-subtitle{color:#eee;font-size:.8em}.ba-player-minimalist-theme-right-button-container.ba-commoncss-settings-visible,.ba-player-minimalist-theme-right-button-container.ba-player-button-active{background-color:#020202;opacity:.75}.ba-player-minimalist-theme-right-button-container.ba-commoncss-settings-hidden,.ba-player-minimalist-theme-right-button-container.ba-player-button-inactive{background-color:#979797;opacity:.75}.ba-player-minimalist-theme-primary-button-container{width:auto}.ba-player-minimalist-theme-primary-button-container>.ba-player-minimalist-theme-primary-button{height:auto;transform:none;padding:3px;line-height:normal;background-color:#979797}.ba-player-fullscreen-view video::-webkit-media-controls-overlay-enclosure{display:none}.ba-player-fullscreen-view video::-webkit-media-controls-enclosure{display:none}.ba-player-fullscreen-view video::-webkit-media-controls{display:none}.ba-player-fullscreen-view video::-webkit-media-controls-panel{display:none}.ba-player-fullscreen-view video::-webkit-media-controls-play-button{display:none}.ba-player-fullscreen-view video::-webkit-media-controls-current-time-display{display:none}.ba-player-fullscreen-view video::-webkit-media-controls-time-remaining-display{display:none}.ba-player-fullscreen-view video::-webkit-media-controls-timeline{display:none}.ba-player-fullscreen-view video::-webkit-media-controls-mute-button{display:none}.ba-player-fullscreen-view video::-webkit-media-controls-volume-slider{display:none}.ba-player-fullscreen-view video::-webkit-media-controls-fullscreen-button{display:none}.ba-player-fullscreen-view video::-internal-media-controls-download-button{display:none}.ba-player-fullscreen-view video::-moz-list-bullet,.ba-player-fullscreen-view video::-moz-list-number{display:none}.ba-player-fullscreen-view video::-moz-meter-bar{display:none}.ba-player-fullscreen-view video:fullscreen:not(:root){display:none}.ba-player-fullscreen-view .ba-videoplayer-dashboard{bottom:0}.ba-player-fullscreen-view .ba-videoplayer-title-block{top:0}.ba-player-fullscreen-view.ba-player-firefox-browser .ba-videoplayer-dashboard,.ba-player-fullscreen-view.ba-player-firefox-browser .ba-videoplayer-title-block{z-index:100}.ba-player-fullscreen-view.ba-player-size-small .ba-videoplayer-controlbar-header{top:0}.ba-player-fullscreen-view.ba-player-size-small .ba-videoplayer-volumebar{display:block}.ba-videoplayer-container.ba-player-fullscreen-view{min-width:100%;position:absolute;min-height:fit-content}.ba-videoplayer-container.ba-player-fullscreen-view>.ba-videoplayer-overlay{position:fixed}.ba-videoplayer-noie8 .ba-videoplayer-topmessage-message .css-rightbutton-container{width:21px}.ba-videoplayer-topmessage-background{background-color:transparent;position:relative;height:40px}.ba-videoplayer-topmessage-message{line-height:25px;padding:0;text-align:left;font-size:.65rem;letter-spacing:.05rem;font-weight:300}.ba-videoplayer-topmessage-message{margin:0 2.5%}.ba-videoplayer-topmessage-message .ba-videoplayer-right-block{height:50px;line-height:50px}.ba-videoplayer-noie8 .ba-videoplayer-topmessage-message .ba-videoplayer-button-inner{-webkit-transform:translateY(0);-moz-transform:translateY(0);-o-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0)}.ba-videoplayer-noie8 .ba-videoplayer-topmessage-container .ba-videoplayer-rightbutton-container{width:25px}.ba-videoplayer-topmessage-message .ba-videoplayer-button-container{width:20px}.ba-player-minimalist-theme.ba-videoplayer-container .ba-player-text-tracks-overlay{position:absolute;left:0;right:0;bottom:42px;transition:bottom .5s ease-in-out;-moz-transition:bottom .5s ease-in-out;-webkit-transition:bottom .5s ease-in-out;-o-transition:bottom .5s ease-in-out;-ms-transition:bottom .5s ease-in-out}.ba-player-minimalist-theme.ba-videoplayer-container .ba-player-text-tracks-overlay .ba-commoncss-options-popup{bottom:0;right:4%}.ba-player-minimalist-theme.ba-videoplayer-container .ba-player-track-dashboard-hidden.ba-player-text-tracks-overlay{bottom:5px}.ba-recorder-theme-minimalist .ba-commoncss-message-text{-moz-border-radius:50px;-webkit-border-radius:50px;border-radius:50px}.ba-recorder-theme-minimalist .ba-videorecorder-chooser-container{background-color:#eee;z-index:1}.ba-recorder-theme-minimalist .ba-videorecorder-chooser-icon-container{color:#000;font-size:32px;margin:16px}.ba-recorder-theme-minimalist .ba-videorecorder-chooser-button-0,.ba-recorder-theme-minimalist .ba-videorecorder-chooser-button-1,.ba-recorder-theme-minimalist .ba-videorecorder-chooser-button-2,.ba-recorder-theme-minimalist .ba-videorecorder-chooser-button-3{-moz-border-radius:50px;-webkit-border-radius:50px;border-radius:50px;line-height:20px;min-width:10em;padding:6px 8px}.ba-recorder-theme-minimalist .ba-videorecorder-chooser-button-0,.ba-recorder-theme-minimalist .ba-videorecorder-chooser-button-2{background-color:#000}.ba-recorder-theme-minimalist .ba-videorecorder-chooser-button-1,.ba-recorder-theme-minimalist .ba-videorecorder-chooser-button-3{background-color:#b2b2b2;background-color:rgba(255,255,255,.4);color:#666;margin-top:2px}.ba-recorder-theme-minimalist .ba-commoncss-icon-record:before{font-size:.8em}.ba-recorder-theme-minimalist .ba-commoncss-icon-upload:before{font-size:.9em}.ba-recorder-red-color .ba-recorder-theme-minimalist-dashboard .ba-videorecorder-button-primary{background-color:#eb6a74}.ba-recorder-red-color .ba-recorder-theme-minimalist-dashboard .ba-videorecorder-button-inner:hover,.ba-recorder-red-color .ba-recorder-theme-minimalist-dashboard .ba-videorecorder-button-selected{color:#eb6a74}.ba-recorder-red-color .ba-recorder-theme-minimalist-dashboard .ba-videorecorder-settings input[type=radio]:checked+span{border-color:#eb6a74;background-color:#eb6a74}.ba-recorder-red-color .ba-recorder-loader-label,.ba-recorder-red-color .ba-videorecorder-button-circle-selected{color:#eb6a74}.ba-recorder-red-color .ba-videorecorder-chooser-button-0,.ba-recorder-red-color .ba-videorecorder-chooser-button-2,.ba-recorder-red-color .ba-videorecorder-imagegallery-leftbutton,.ba-recorder-red-color .ba-videorecorder-imagegallery-rightbutton{background-color:#eb6a74}.ba-recorder-red-color .ba-videorecorder-imagegallery-image:hover{border-color:#eb6a74}.ba-recorder-red-color .ba-videorecorder-message-message a{color:#eb6a74}.ba-recorder-blue-color .ba-recorder-theme-minimalist-dashboard .ba-videorecorder-button-primary{background-color:#2a74eb}.ba-recorder-blue-color .ba-recorder-theme-minimalist-dashboard .ba-videorecorder-button-inner:hover,.ba-recorder-blue-color .ba-recorder-theme-minimalist-dashboard .ba-videorecorder-button-selected{color:#2a74eb}.ba-recorder-blue-color .ba-recorder-theme-minimalist-dashboard .ba-videorecorder-settings input[type=radio]:checked+span{border-color:#2a74eb;background-color:#2a74eb}.ba-recorder-blue-color .ba-recorder-loader-label,.ba-recorder-blue-color .ba-videorecorder-button-circle-selected{color:#2a74eb}.ba-recorder-blue-color .ba-videorecorder-chooser-button-0,.ba-recorder-blue-color .ba-videorecorder-chooser-button-2,.ba-recorder-blue-color .ba-videorecorder-imagegallery-leftbutton,.ba-recorder-blue-color .ba-videorecorder-imagegallery-rightbutton{background-color:#2a74eb}.ba-recorder-blue-color .ba-videorecorder-imagegallery-image:hover{border-color:#2a74eb}.ba-recorder-blue-color .ba-videorecorder-message-message a{color:#2a74eb}.ba-recorder-green-color .ba-recorder-theme-minimalist-dashboard .ba-videorecorder-button-primary{background-color:#5daa96}.ba-recorder-green-color .ba-recorder-theme-minimalist-dashboard .ba-videorecorder-button-inner:hover,.ba-recorder-green-color .ba-recorder-theme-minimalist-dashboard .ba-videorecorder-button-selected{color:#5daa96}.ba-recorder-green-color .ba-recorder-theme-minimalist-dashboard .ba-videorecorder-settings input[type=radio]:checked+span{border-color:#5daa96;background-color:#5daa96}.ba-recorder-green-color .ba-recorder-loader-label,.ba-recorder-green-color .ba-videorecorder-button-circle-selected{color:#5daa96}.ba-recorder-green-color .ba-videorecorder-chooser-button-0,.ba-recorder-green-color .ba-videorecorder-chooser-button-2,.ba-recorder-green-color .ba-videorecorder-imagegallery-leftbutton,.ba-recorder-green-color .ba-videorecorder-imagegallery-rightbutton{background-color:#5daa96}.ba-recorder-green-color .ba-videorecorder-imagegallery-image:hover{border-color:#5daa96}.ba-recorder-green-color .ba-videorecorder-message-message a{color:#5daa96}.ba-recorder-theme-minimalist.ba-videorecorder-container .ba-videorecorder-video{background-color:#000}.ba-recorder-theme-minimalist-dashboard{position:absolute;left:0;right:0;top:0;bottom:0;height:100%}.ba-recorder-theme-minimalist-dashboard .ba-videorecorder-settings-left-sidebar{display:table;height:100%;text-align:center;bottom:0;left:0;position:absolute;right:auto;top:0;width:55px}.ba-recorder-theme-minimalist-dashboard .ba-videorecorder-settings-left-sidebar .ba-videorecorder-controlbar-left-section{display:table-cell;vertical-align:middle}.ba-recorder-theme-minimalist-dashboard .ba-videorecorder-settings-left-sidebar .ba-videorecorder-controlbar-left-section .ba-videorecorder-circle-button-container{margin:2px auto}.ba-recorder-theme-minimalist-dashboard .ba-videorecorder-controlbar-middle-section .ba-videorecorder-timer-container{display:table;cursor:default;height:100%;position:absolute;width:100%}.ba-recorder-theme-minimalist-dashboard .ba-videorecorder-controlbar-middle-section .ba-videorecorder-timer-container .ba-videorecorder-label-container{display:table-cell;float:none;position:relative;text-align:center;vertical-align:middle;width:auto}.ba-recorder-theme-minimalist-dashboard .ba-videorecorder-controlbar-middle-section .ba-videorecorder-timer-container .ba-videorecorder-label-container .ba-videorecorder-button-primary{margin:0;padding:7px 16px}.ba-recorder-theme-minimalist-dashboard .ba-videorecorder-controlbar{position:absolute;left:0;right:0;bottom:0;height:55px;padding:0 10px}.ba-recorder-theme-minimalist-dashboard .ba-videorecorder-long-rounded-button{-moz-border-radius:18px;-webkit-border-radius:18px;border-radius:18px;display:inline-block}.ba-recorder-theme-minimalist-dashboard .ba-videorecorder-long-rounded-button>p{font-family:sans-serif;font-size:12px;padding:7px;margin:0}.ba-recorder-theme-minimalist-dashboard .ba-videorecorder-circle-button{background-color:#979797;background-color:rgba(0,0,0,.4);-moz-border-radius:50%;-webkit-border-radius:50%;border-radius:50%;color:#eee;display:inline-block;height:40px;line-height:40px;text-align:center;width:40px}.ba-recorder-theme-minimalist-dashboard .ba-videorecorder-button-circle-selected,.ba-recorder-theme-minimalist-dashboard .ba-videorecorder-button-inner:hover,.ba-recorder-theme-minimalist-dashboard .ba-videorecorder-button-selected{color:#000;cursor:pointer}.ba-recorder-theme-minimalist-dashboard .ba-videorecorder-button-inner{border:none;cursor:pointer;font-size:inherit;margin:0;padding:0;width:100%}.ba-recorder-theme-minimalist-dashboard .ba-videorecorder-button-inner i:before{line-height:inherit}.ba-recorder-theme-minimalist-dashboard .ba-videorecorder-settings{position:inherit}.ba-recorder-theme-minimalist-dashboard .ba-videorecorder-settings .ba-videorecorder-add-stream,.ba-recorder-theme-minimalist-dashboard .ba-videorecorder-settings label{font-family:sans-serif;font-weight:300;font-size:12px}.ba-recorder-theme-minimalist-dashboard .ba-videorecorder-settings input[type=radio]:checked+span{border:3px solid #eee;background-color:#000}.ba-recorder-theme-minimalist-dashboard .ba-videorecorder-settings .ba-videorecorder-circle-button{margin:6px 0}.ba-recorder-theme-minimalist-dashboard .ba-videorecorder-button-primary{-moz-border-radius:18px;-webkit-border-radius:18px;border-radius:18px;background-color:#000;display:inline-block;font-family:sans-serif;font-weight:300;font-size:12px;margin-top:6px;min-width:3em;padding:10px 16px;position:relative;left:0;right:0;top:0;bottom:0;-webkit-transform:translate(0,0);-moz-transform:translate(0,0);-o-transform:translate(0,0);-ms-transform:translate(0,0);transform:translate(0,0);z-index:10}.ba-recorder-theme-minimalist-dashboard .ba-videorecorder-settings-button{background:#eee;cursor:pointer;margin:15px 0 0 15px}.ba-recorder-theme-minimalist-dashboard .ba-videorecorder-settings-button>p{color:#979797}.ba-recorder-theme-minimalist-dashboard .ba-videorecorder-bubble-info-container{background-color:#7f7f7f;background-color:rgba(0,0,0,.5);-moz-border-radius:16px;-webkit-border-radius:16px;border-radius:16px;display:inline-block;padding:9px 0;line-height:1.2;min-width:280px;position:relative;left:60px}.ba-recorder-theme-minimalist-dashboard .ba-videorecorder-bubble-info-container:before{border-right:9px solid;border-right-color:#7f7f7f;border-right-color:rgba(0,0,0,.5);border-bottom:6px solid transparent;border-top:6px solid transparent;content:\"\";height:0;top:13px;position:absolute;left:-9px;width:0}.ba-recorder-theme-minimalist-dashboard .ba-videorecorder-bubble-info-container{position:absolute}.ba-recorder-theme-minimalist-dashboard .ba-videorecorder-bubble-info{max-height:10em;overflow:scroll}.ba-recorder-theme-minimalist-dashboard .ba-videorecorder-bubble-info li{text-align:left}.ba-recorder-theme-minimalist-dashboard .ba-videorecorder-controlbar-center-section{position:absolute;left:0;text-align:center;width:100%}.ba-recorder-theme-minimalist-dashboard .ba-videorecorder-button-container{display:inline-block}.ba-recorder-theme-minimalist-dashboard .ba-videorecorder-label-container{float:left;text-align:right;width:50%;opacity:.25}.ba-recorder-theme-minimalist-dashboard .ba-videorecorder-label-container .ba-videorecorder-button-primary{color:#eee;background-color:#979797;background-color:rgba(0,0,0,.4)}.ba-recorder-theme-minimalist-dashboard .ba-videorecorder-stop-button-container{text-align:center}.ba-recorder-theme-minimalist.ba-videorecorder-container .ba-videorecorder-imagegallery-container{left:50px;right:50px}.ba-recorder-overlay img,.ba-videorecorder-imagegallery-image{border:none;-moz-border-radius:3px;-webkit-border-radius:3px;border-radius:3px}.ba-videorecorder-imagegallery-image:hover{border:2px solid;border-color:#b2b2b2;border-color:rgba(0,0,0,.4)}.ba-videorecorder-imagegallery-leftbutton,.ba-videorecorder-imagegallery-rightbutton{border-radius:50%;background-color:#4c4c4c;height:30px;width:30px;z-index:10}.ba-recorder-theme-minimalist .ba-videorecorder-topmessage-container{text-align:center}.ba-recorder-theme-minimalist .ba-videorecorder-topmessage-message{background-color:#666;background-color:rgba(255,255,255,.4);-moz-border-radius:18px;-webkit-border-radius:18px;border-radius:18px;color:#eee;display:inline-block;font-family:sans-serif;font-size:12px;font-weight:300;padding:7px;position:relative;top:12px;z-index:10}.ba-recorder-theme-minimalist .ba-videorecorder-topmessage-background{background:0 0}.ba-imageviewer-minimalist-theme-red-color .ba-imageviewer-button-inner,.ba-imageviewer-minimalist-theme-red-color .ba-imageviewer-controlbar-top-block .ba-imageviewer-button-container .ba-imageviewer-button-inner,.ba-imageviewer-minimalist-theme-red-color .ba-imageviewer-right-block .ba-commoncss-icon-resize-full,.ba-imageviewer-minimalist-theme-red-color .ba-imageviewer-right-block .ba-commoncss-icon-resize-small,.ba-imageviewer-minimalist-theme-red-color .ba-imageviewer-title p{color:#eb6a74}.ba-imageviewer-minimalist-theme-red-color .ba-imageviewer-rerecord-button{background-color:#eb6a74}.ba-imageviewer-minimalist-theme-blue-color .ba-imageviewer-button-inner,.ba-imageviewer-minimalist-theme-blue-color .ba-imageviewer-controlbar-top-block .ba-imageviewer-button-container .ba-imageviewer-button-inner,.ba-imageviewer-minimalist-theme-blue-color .ba-imageviewer-right-block .ba-commoncss-icon-resize-full,.ba-imageviewer-minimalist-theme-blue-color .ba-imageviewer-right-block .ba-commoncss-icon-resize-small,.ba-imageviewer-minimalist-theme-blue-color .ba-imageviewer-title p{color:#2a74eb}.ba-imageviewer-minimalist-theme-blue-color .ba-imageviewer-rerecord-button{background-color:#2a74eb}.ba-imageviewer-minimalist-theme-green-color .ba-imageviewer-button-inner,.ba-imageviewer-minimalist-theme-green-color .ba-imageviewer-controlbar-top-block .ba-imageviewer-button-container .ba-imageviewer-button-inner,.ba-imageviewer-minimalist-theme-green-color .ba-imageviewer-right-block .ba-commoncss-icon-resize-full,.ba-imageviewer-minimalist-theme-green-color .ba-imageviewer-right-block .ba-commoncss-icon-resize-small,.ba-imageviewer-minimalist-theme-green-color .ba-imageviewer-title p{color:#5daa96}.ba-imageviewer-minimalist-theme-green-color .ba-imageviewer-rerecord-button{background-color:#5daa96}.ba-imageviewer-minimalist-theme{display:block}.ba-imageviewer-minimalist-theme .ba-imageviewer-dashboard{transition:opacity .5s ease-in-out;-moz-transition:opacity .5s ease-in-out;-webkit-transition:opacity .5s ease-in-out;-o-transition:opacity .5s ease-in-out;-ms-transition:opacity .5s ease-in-out;height:100%;overflow:hidden;padding:0 4%}.ba-imageviewer-minimalist-theme .ba-imageviewer-dashboard-hidden{opacity:0}.ba-imageviewer-minimalist-theme .ba-imageviewer-button-container{font-family:sans-serif;font-weight:300;display:inline-block;width:40px;color:#eee}.ba-imageviewer-minimalist-theme .ba-imageviewer-controlbar-header{background-color:#ddd;background-color:rgba(0,0,0,.3);height:40px;left:0;letter-spacing:.05rem;line-height:25px;padding:0;position:absolute;text-align:left;width:100%}.ba-imageviewer-minimalist-theme .ba-imageviewer-controlbar-header .ba-imageviewer-right-block{line-height:40px;position:absolute;right:4%;z-index:100}.ba-imageviewer-minimalist-theme.ba-imageviewer-ie8 .ba-imageviewer-controlbar-header{display:none}.ba-imageviewer-minimalist-theme .ba-imageviewer-controlbar-header-title-block{position:relative;width:100%;z-index:10}.ba-imageviewer-minimalist-theme.ba-imageviewer-ie8 .ba-imageviewer-controlbar-header .ba-imageviewer-right-block{position:relative}.ba-imageviewer-minimalist-theme.ba-imageviewer-ie8 .ba-imageviewer-controlbar-header-title-block{left:50px}.ba-imageviewer-minimalist-theme .ba-imageviewer-title p{color:#eee;font-family:sans-serif;font-size:12px;font-weight:300;letter-spacing:.1em;line-height:40px;margin:0;padding:0 0 0 15px;text-align:left}.ba-imageviewer-minimalist-theme.ba-imageviewer-noie8 .ba-imageviewer-controlbar-header .ba-imageviewer-button-inner{text-align:right;-webkit-transform:translateY(0);-moz-transform:translateY(0);-o-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0)}.ba-imageviewer-minimalist-theme.ba-imageviewer-noie8 .ba-imageviewer-topmessage-container .ba-imageviewer-rightbutton-container{width:25px;padding-top:5px}.ba-imageviewer-minimalist-theme .ba-imageviewer-controlbar-header .ba-imageviewer-button-container{width:20px}.ba-imageviewer-minimalist-theme .ba-imageviewer-controlbar-footer{position:relative;height:100%}.ba-imageviewer-minimalist-theme .ba-imageviewer-controlbar-top-block{height:100%}.ba-imageviewer-minimalist-theme .ba-imageviewer-controlbar-top-block .ba-imageviewer-button-container{position:relative;margin:0 auto;height:100%;width:100%}.ba-imageviewer-minimalist-theme .ba-imageviewer-controlbar-top-block .ba-imageviewer-button-container .ba-imageviewer-button-inner{color:#e5e5e5;color:rgba(255,255,255,.6);text-shadow:0 0 4px #000;font-size:2.5em}.ba-imageviewer-minimalist-theme.ba-imageviewer-ie8 .ba-imageviewer-controlbar-top-block{height:100%}.ba-imageviewer-minimalist-theme.ba-imageviewer-ie8 .ba-imageviewer-controlbar-top-block .ba-imageviewer-button-container{top:45%}.ba-imageviewer-minimalist-theme.ba-imageviewer-noie8 .ba-imageviewer-overlay .ba-imageviewer-controlbar-top-block .ba-imageviewer-button-inner{transition:opacity .3s ease;-moz-transition:opacity .3s ease;-webkit-transition:opacity .3s ease;-o-transition:opacity .3s ease;-ms-transition:opacity .3s ease;opacity:0}.ba-imageviewer-minimalist-theme.ba-imageviewer-noie8 .ba-imageviewer-overlay:hover .ba-imageviewer-controlbar-top-block .ba-imageviewer-button-inner{transition:opacity .2s ease;-moz-transition:opacity .2s ease;-webkit-transition:opacity .2s ease;-o-transition:opacity .2s ease;-ms-transition:opacity .2s ease;opacity:.6}.ba-imageviewer-minimalist-theme.ba-imageviewer-ie8 .ba-imageviewer-overlay{height:100%}.ba-imageviewer-minimalist-theme.ba-imageviewer-ie8 .ba-imageviewer-overlay .ba-imageviewer-controlbar-top-block .ba-imageviewer-button-inner{-moz-opacity:0;-khtml-opacity:0;opacity:0}.ba-imageviewer-minimalist-theme.ba-imageviewer-ie8 .ba-imageviewer-overlay:hover .ba-imageviewer-controlbar-top-block .ba-imageviewer-button-inner{-moz-opacity:.6;-khtml-opacity:.6;opacity:.6}.ba-imageviewer-minimalist-theme .ba-imageviewer-button-inner{cursor:pointer;z-index:100;position:relative}.ba-imageviewer-minimalist-theme .ba-imageviewer-right-block{float:right}.ba-imageviewer-minimalist-theme.ba-imageviewer-noie8 .ba-imageviewer-button-inner{-webkit-transform:translateY(-50%);-moz-transform:translateY(-50%);-o-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);top:50%;position:relative;text-align:center}.ba-imageviewer-minimalist-theme.ba-imageviewer-ie8 .ba-imageviewer-button-inner{margin-top:12px;text-align:center;font-size:13px;margin-left:3px}.ba-imageviewer-minimalist-theme .ba-imageviewer-button-inner{color:#eee;font-size:13px}.ba-imageviewer-minimalist-theme .ba-imageviewer-controlbar-middle-block{position:relative;bottom:45px}.ba-imageviewer-minimalist-theme .ba-imageviewer-controlbar-bottom-block{position:relative;bottom:40px}.ba-imageviewer-minimalist-theme .ba-imageviewer-player-rerecord{position:relative;top:5px}.ba-imageviewer-minimalist-theme.ba-imageviewer-size-small .ba-imageviewer-controlbar-top-block .ba-imageviewer-button-container .ba-imageviewer-button-inner{font-size:1.25em}.ba-imageviewer-minimalist-theme.ba-imageviewer-size-medium .ba-imageviewer-controlbar-top-block .ba-imageviewer-button-container .ba-imageviewer-button-inner{font-size:2em}.ba-imageviewer-minimalist-theme.ba-imageviewer-size-small .ba-imageviewer-controlbar-header{top:7px}.ba-imageviewer-minimalist-theme.ba-imageviewer-size-small .ba-imageviewer-controlbar-top-block .ba-imageviewer-button-container .ba-imageviewer-button-inner{font-size:1.8em}.ba-imageviewer-minimalist-theme.ba-imageviewer-size-small .ba-imageviewer-controlbar-middle-block{bottom:40px}.ba-imageviewer-minimalist-theme.ba-imageviewer-size-small .ba-imageviewer-controlbar-bottom-block{bottom:38px}.ba-imageviewer-minimalist-theme.ba-imageviewer-size-small .ba-imageviewer-time-container{font-size:.7em}.ba-imageviewer-fullscreen-view.ba-imageviewer-minimalist-theme .ba-imageviewer-controlbar-header{position:fixed;top:0;width:100%;z-index:1005}.ba-imageviewer-minimalist-theme.ba-imageviewer-noie8 .ba-imageviewer-topmessage-message .css-rightbutton-container{width:21px}.ba-imageviewer-minimalist-theme .ba-imageviewer-topmessage-background{background-color:transparent;position:relative;height:40px}.ba-imageviewer-minimalist-theme .ba-imageviewer-topmessage-message{line-height:25px;padding:0;text-align:left;font-size:.65rem;letter-spacing:.05rem;font-weight:300}.ba-imageviewer-minimalist-theme .ba-imageviewer-topmessage-message{margin:0 2.5%}.ba-imageviewer-minimalist-theme .ba-imageviewer-topmessage-message .ba-imageviewer-right-block{height:50px;line-height:50px}.ba-imageviewer-minimalist-theme.ba-imageviewer-noie8 .ba-imageviewer-topmessage-message .ba-imageviewer-button-inner{-webkit-transform:translateY(0);-moz-transform:translateY(0);-o-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0)}.ba-imageviewer-minimalist-theme.ba-imageviewer-noie8 .ba-imageviewer-topmessage-container .ba-imageviewer-rightbutton-container{width:25px}.ba-imageviewer-minimalist-theme .ba-imageviewer-topmessage-message .ba-imageviewer-button-container{width:20px}.ba-audioplayer-container{box-sizing:border-box;border:1px solid #eee;height:140px;min-height:140px;min-width:320px}.ba-player-minimalist-theme.ba-audioplayer-container .ba-audioplayer-overlay{z-index:10}.ba-player-minimalist-theme.ba-audioplayer-container .ba-player-size-medium .ba-player-minimalist-theme-controlbar-top-block .ba-player-minimalist-theme-button-container .ba-player-minimalist-theme-button-inner{font-size:2em}.ba-player-minimalist-theme.ba-audioplayer-container .ba-player-size-small .ba-player-minimalist-theme-controlbar-top-block .ba-player-minimalist-theme-button-container .ba-player-minimalist-theme-button-inner{font-size:1.25em}.ba-player-minimalist-theme.ba-audioplayer-container .ba-player-size-small .ba-player-minimalist-theme-volumebar{display:none}.ba-player-minimalist-theme.ba-audioplayer-container .ba-player-size-small .ba-player-minimalist-theme-controlbar-top-block .ba-player-minimalist-theme-button-container .ba-player-minimalist-theme-button-inner{font-size:1.8em}.ba-player-minimalist-theme.ba-audioplayer-container .ba-player-size-small .ba-player-minimalist-theme-controlbar-middle-block{bottom:40px}.ba-player-minimalist-theme.ba-audioplayer-container .ba-player-size-small .ba-player-minimalist-theme-controlbar-bottom-block{bottom:38px}.ba-player-minimalist-theme.ba-audioplayer-container .ba-player-size-small .ba-player-minimalist-theme-time-container{font-size:.7em}.ba-player-minimalist-theme-dashboard{position:absolute;left:0;right:0;bottom:0;transition:opacity .5s ease-in-out;-moz-transition:opacity .5s ease-in-out;-webkit-transition:opacity .5s ease-in-out;-o-transition:opacity .5s ease-in-out;-ms-transition:opacity .5s ease-in-out;opacity:.9;height:100%;overflow:hidden;padding:0 4%}.ba-player-minimalist-theme-audio-canvas{display:none;position:absolute;background-color:#000}.ba-player-minimalist-theme-visual-effect-applied .ba-audioplayer-overlay{background:#000}.ba-player-minimalist-theme-visual-effect-applied .ba-player-minimalist-theme-controlbar-middle-block{z-index:10}.ba-audioplayer-noie8 .ba-player-minimalist-theme-controlbar-header .ba-player-minimalist-theme-button-inner{text-align:right;-webkit-transform:translateY(0);-moz-transform:translateY(0);-o-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0)}.ba-audioplayer-ie8 .ba-player-minimalist-theme-controlbar-top-block{height:100%}.ba-audioplayer-ie8 .ba-player-minimalist-theme-controlbar-top-block .ba-player-minimalist-theme-button-container{top:45%}.ba-audioplayer-noie8 .ba-audioplayer-overlay .ba-player-minimalist-theme-controlbar-top-block .ba-player-minimalist-theme-button-inner{transition:opacity .3s ease;-moz-transition:opacity .3s ease;-webkit-transition:opacity .3s ease;-o-transition:opacity .3s ease;-ms-transition:opacity .3s ease;opacity:1}.ba-audioplayer-ie8 .ba-audioplayer-overlay{height:100%}.ba-audioplayer-ie8 .ba-audioplayer-overlay .ba-player-minimalist-theme-controlbar-top-block .ba-player-minimalist-theme-button-inner{-moz-opacity:0;-khtml-opacity:0;opacity:0}.ba-audioplayer-ie8 .ba-audioplayer-overlay:hover .ba-player-minimalist-theme-controlbar-top-block .ba-player-minimalist-theme-button-inner{-moz-opacity:.6;-khtml-opacity:.6;opacity:.6}.ba-audioplayer-noie8 .ba-player-minimalist-theme-button-inner{-webkit-transform:translateY(-50%);-moz-transform:translateY(-50%);-o-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);top:50%;position:relative;text-align:center}.ba-audioplayer-ie8 .ba-player-minimalist-theme-button-inner{margin-top:12px;text-align:center;font-size:13px;margin-left:3px}.ba-player-minimalist-theme-button-inner{color:#eee;font-size:13px}.ba-player-minimalist-theme-controlbar-middle-block{position:relative;bottom:45px}.ba-player-minimalist-theme-controlbar-bottom-block{position:relative;bottom:40px}.ba-player-minimalist-theme-player-rerecord{position:relative;top:5px}/*!\nbetajs-media-components - v0.0.291 - 2022-01-08\nCopyright (c) Ziggeo,Oliver Friedmann,Rashad Aliyev\nApache-2.0 Software License.\n*/.ba-player-red-color .ba-player-theatre-theme-button-inner i,.ba-player-red-color .ba-player-theatre-theme-button-inner.ba-player-theatre-theme-primary-button,.ba-player-red-color .ba-player-theatre-theme-title,.ba-player-red-color.ba-player-theatre-theme .ba-commoncss-settings-hidden i,.ba-player-red-color.ba-player-theatre-theme .ba-player-button-inactive i{color:#eb6a74}.ba-player-red-color .ba-commoncss-settings-visible,.ba-player-red-color .ba-player-button-active,.ba-player-red-color .ba-player-theatre-theme-playbutton-duration,.ba-player-red-color .ba-player-theatre-theme-progressbar-position,.ba-player-red-color .ba-player-theatre-theme-rerecord-button,.ba-player-red-color .ba-player-theatre-theme-stream-label-container .ba-player-theatre-theme-stream-label,.ba-player-red-color .ba-player-theatre-theme-volumebar-position{background-color:#eb6a74}.ba-player-red-color.ba-videoplayer-noie8 .ba-player-theatre-theme-playbutton-container{border-color:#eb6a74}.ba-player-red-color.ba-videoplayer-noie8 .ba-player-theatre-theme-playbutton-button::after{color:#eb6a74}.ba-player-red-color .ba-player-theatre-theme-volumebar-inner{background-color:#7f7f7f;background-color:rgba(255,255,255,.3)}.ba-player-red-color .ba-commoncss-accent-color,.ba-player-red-color .ba-commoncss-settings-visible i,.ba-player-red-color .ba-player-button-active i{color:#eee}.ba-player-blue-color .ba-player-theatre-theme-button-inner i,.ba-player-blue-color .ba-player-theatre-theme-button-inner.ba-player-theatre-theme-primary-button,.ba-player-blue-color .ba-player-theatre-theme-title,.ba-player-blue-color.ba-player-theatre-theme .ba-commoncss-settings-hidden i,.ba-player-blue-color.ba-player-theatre-theme .ba-player-button-inactive i{color:#2a74eb}.ba-player-blue-color .ba-commoncss-settings-visible,.ba-player-blue-color .ba-player-button-active,.ba-player-blue-color .ba-player-theatre-theme-playbutton-duration,.ba-player-blue-color .ba-player-theatre-theme-progressbar-position,.ba-player-blue-color .ba-player-theatre-theme-rerecord-button,.ba-player-blue-color .ba-player-theatre-theme-stream-label-container .ba-player-theatre-theme-stream-label,.ba-player-blue-color .ba-player-theatre-theme-volumebar-position{background-color:#2a74eb}.ba-player-blue-color.ba-videoplayer-noie8 .ba-player-theatre-theme-playbutton-container{border-color:#2a74eb}.ba-player-blue-color.ba-videoplayer-noie8 .ba-player-theatre-theme-playbutton-button::after{color:#2a74eb}.ba-player-blue-color .ba-player-theatre-theme-volumebar-inner{background-color:#7f7f7f;background-color:rgba(255,255,255,.3)}.ba-player-blue-color .ba-commoncss-accent-color,.ba-player-blue-color .ba-commoncss-settings-visible i,.ba-player-blue-color .ba-player-button-active i{color:#eee}.ba-player-green-color .ba-player-theatre-theme-button-inner i,.ba-player-green-color .ba-player-theatre-theme-button-inner.ba-player-theatre-theme-primary-button,.ba-player-green-color .ba-player-theatre-theme-title,.ba-player-green-color.ba-player-theatre-theme .ba-commoncss-settings-hidden i,.ba-player-green-color.ba-player-theatre-theme .ba-player-button-inactive i{color:#5daa96}.ba-player-green-color .ba-commoncss-settings-visible,.ba-player-green-color .ba-player-button-active,.ba-player-green-color .ba-player-theatre-theme-playbutton-duration,.ba-player-green-color .ba-player-theatre-theme-progressbar-position,.ba-player-green-color .ba-player-theatre-theme-rerecord-button,.ba-player-green-color .ba-player-theatre-theme-stream-label-container .ba-player-theatre-theme-stream-label,.ba-player-green-color .ba-player-theatre-theme-volumebar-position{background-color:#5daa96}.ba-player-green-color.ba-videoplayer-noie8 .ba-player-theatre-theme-playbutton-container{border-color:#5daa96}.ba-player-green-color.ba-videoplayer-noie8 .ba-player-theatre-theme-playbutton-button::after{color:#5daa96}.ba-player-green-color .ba-player-theatre-theme-volumebar-inner{background-color:#7f7f7f;background-color:rgba(255,255,255,.3)}.ba-player-green-color .ba-commoncss-accent-color,.ba-player-green-color .ba-commoncss-settings-visible i,.ba-player-green-color .ba-player-button-active i{color:#eee}.ba-player-theatre-theme{font-family:Arial,sans-serif}.ba-player-theatre-theme .ba-commoncss-icon-pause,.ba-player-theatre-theme .ba-commoncss-icon-play{color:#000}.ba-player-theatre-theme .ba-commoncss-icon-volume-down,.ba-player-theatre-theme .ba-commoncss-icon-volume-up{color:#666}.ba-player-theatre-theme .ba-commoncss-icon-volume-off{color:#000}.ba-player-theatre-theme .ba-commoncss-icon-resize-full{color:#666}.ba-player-theatre-theme .ba-commoncss-settings-hidden i,.ba-player-theatre-theme .ba-player-button-inactive i{color:#666}.ba-player-theatre-theme .ba-commoncss-settings-menu{right:12.5%}.ba-videoplayer-container .ba-player-theatre-theme-dashboard{transition:opacity .5s ease-in-out;-moz-transition:opacity .5s ease-in-out;-webkit-transition:opacity .5s ease-in-out;-o-transition:opacity .5s ease-in-out;-ms-transition:opacity .5s ease-in-out;background-color:#eee;box-sizing:border-box;bottom:15px;border:1px solid #666;height:28px;left:12.5%;opacity:.75;position:absolute;width:75%}.ba-videoplayer-container .ba-player-theatre-theme-dashboard .ba-player-airplay-container{padding:2px 7px 0 3px}.ba-videoplayer-container .ba-player-theatre-theme-dashboard .ba-player-airplay-container svg path{fill:#666}.ba-videoplayer-container .ba-player-dashboard-hidden{opacity:0}.ba-player-theatre-theme-left-block{float:left;padding-left:5px}.ba-player-theatre-theme-left-block>div{float:left;height:28px;line-height:29px}.ba-player-theatre-theme-left-block>div:last-child{float:right}.ba-videoplayer-ie8 .ba-player-theatre-theme-left-block>div{line-height:28px}.ba-player-theatre-theme-center-block{float:left}.ba-player-theatre-theme-right-block{float:right}.ba-player-theatre-theme-right-block>div{float:right;height:25px;line-height:25px;text-align:center}.ba-player-theatre-theme-right-block>div:first-child{line-height:25px;width:30px}.ba-player-theatre-theme-right-block>div:last-child{float:left;line-height:31px}.ba-player-theatre-theme-right-block .ba-player-theatre-theme-time-value{text-align:left}.ba-player-theatre-theme-title-container{position:absolute;left:0;right:0;top:0;transition:opacity .5s ease-in-out;-moz-transition:opacity .5s ease-in-out;-webkit-transition:opacity .5s ease-in-out;-o-transition:opacity .5s ease-in-out;-ms-transition:opacity .5s ease-in-out;width:100%}.ba-player-theatre-theme-title-container>p{background-color:#eee;background-color:rgba(255,255,255,.4);position:relative;margin:auto;height:28px;line-height:28px;top:15px;text-align:center;color:#020202;width:75%}.ba-player-theatre-theme-leftbutton-container{float:left;width:40px;height:100%;cursor:pointer;box-sizing:content-box;border:none;text-align:center;line-height:2}.ba-videoplayer-noie8 .ba-player-theatre-theme-rightbutton-container{float:right;width:40px;height:100%;cursor:pointer;box-sizing:content-box;border:none}.ba-videoplayer-ie8 .ba-player-theatre-theme-rightbutton-container{float:right;width:40px;height:50%;cursor:pointer;box-sizing:content-box;border:none}.ba-videoplayer-noie8 .ba-player-theatre-theme-button-inner{color:#666;font-size:13px}.ba-videoplayer-ie8 .ba-player-theatre-theme-button-inner{color:#000;font-size:13px;margin-left:3px}.ba-player-theatre-theme-button-inner{cursor:pointer;position:relative}.ba-player-theatre-theme-time-container{float:left;width:40px;height:100%;text-align:center;font-family:Helvetica Neue,Helvetica,Arial,sans-serif;font-size:11px;color:#666;box-sizing:content-box;border:none}.ba-player-theatre-theme-time-value{float:left;font-size:11px;width:40px;letter-spacing:.1em}.ba-videoplayer-noie8 .ba-player-theatre-theme-time-value{-webkit-transform:translateY(-50%);-moz-transform:translateY(-50%);-o-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);top:50%;position:relative;text-align:center}.ba-videoplayer-noie8 .ba-player-theatre-theme-volumebar{float:left;margin-right:120px;width:7px}.ba-player-theatre-theme-volumebar{visibility:hidden;opacity:0;transition:visibility 0s,opacity .5s linear;background-color:#eee;box-sizing:content-box;bottom:27px;height:60px;margin:0 auto;padding:5px;position:absolute;width:auto}.ba-player-theatre-theme-volume-icon-container:hover .ba-player-theatre-theme-volumebar,.ba-player-theatre-theme-volumebar:hover{visibility:visible;opacity:1;transition:visibility 0s,opacity .2s linear}.ba-player-theatre-theme-volume-icon-container{padding:0 2px}.ba-videoplayer-ie8 .ba-player-theatre-theme-volumebar{float:right;width:7px;height:50%;margin-right:120px}.ba-player-theatre-theme-volumebar-inner{-webkit-transform:translateY(-50%);-moz-transform:translateY(-50%);-o-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);top:50%;position:relative;text-align:center;border-bottom-left-radius:30px;border-bottom-right-radius:30px;border-top-left-radius:30px;border-top-right-radius:30px;cursor:pointer;background-color:#ccc;height:60px;width:7px}.ba-player-theatre-theme-volumebar-position{border-bottom-left-radius:30px;border-bottom-right-radius:30px;border-top-left-radius:30px;border-top-right-radius:30px;position:absolute;bottom:0;background-color:#000;width:100%}.ba-player-theatre-theme-progressbar{box-sizing:border-box;height:100%;overflow:hidden;position:relative;padding:0 13px 0 6px}.ba-player-theatre-theme-progressbar-inner{cursor:pointer;height:10px;background-color:#ccc}.ba-videoplayer-noie8 .ba-player-theatre-theme-progressbar-inner{-webkit-transform:translateY(-50%);-moz-transform:translateY(-50%);-o-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);top:50%;position:relative;text-align:center}.ba-videoplayer-ie8 .ba-player-theatre-theme-progressbar-inner{margin-top:9px}.ba-videoplayer-ie8 .ba-player-theatre-theme-progressbar-position{height:10px}.ba-player-theatre-theme-progressbar.ba-player-disabled .ba-player-theatre-theme-progressbar-cache,.ba-player-theatre-theme-progressbar.ba-player-disabled .ba-player-theatre-theme-progressbar-inner{cursor:not-allowed}.ba-player-theatre-theme-progressbar-cache{position:absolute;left:0;cursor:pointer;background-color:#ccc;height:10px}.ba-player-theatre-theme-progressbar-position{background-color:#000;position:absolute;height:100%}.ba-player-theatre-theme-progressbar-button{display:none}.ba-player-theatre-theme-progressbar-marker{position:absolute;top:-2px;height:15px;width:5px;background-color:#000}.ba-player-theatre-theme-button-text{font-weight:400;font-size:10px}.ba-videoplayer-ie8 .ba-player-theatre-theme-volumebar{display:none}.ba-player-size-small .ba-player-theatre-theme-time-container{display:none}.ba-player-size-small .ba-player-theatre-theme-right-time-container{display:none}.ba-player-theatre-theme-stream-label-container{text-align:right;margin-right:3px}.ba-player-theatre-theme-stream-label-container .ba-player-theatre-theme-stream-label{cursor:pointer;background-color:#000;color:#eee;padding:5px}.ba-videoplayer-noie8 .ba-player-theatre-theme-full-screen-btn-inner{text-align:left;padding:0 5px}.ba-player-theatre-theme-cast-button-container button{-moz-opacity:.7;-khtml-opacity:.7;opacity:.7;background:0 0;border:none;cursor:pointer;padding-top:4px;width:32px}.ba-videoplayer-noie8 .ba-player-theatre-theme-cc-button-container{width:30px}.ba-commoncss-settings-visible .ba-player-theatre-theme-settings-button-inner{color:#eee}.ba-player-theatre-theme-cc-button-container,.ba-player-theatre-theme-settings-button-container{padding:1px 1px 0 0}.ba-player-theatre-theme .ba-settings-overlay-inner{bottom:45px;right:12.5%}.ba-player-device-type-mobile.ba-videoplayer-container .ba-player-theatre-theme-dashboard{left:2.5%;width:95%}.ba-player-device-type-mobile.ba-player-theatre-theme .ba-settings-overlay-inner{right:2.5%}.ba-player-fullscreen-view .ba-videoplayer-dashboard{bottom:0}.ba-player-fullscreen-view .ba-videoplayer-title-block{top:0}.ba-player-fullscreen-view.ba-player-firefox-browser .ba-videoplayer-dashboard,.ba-player-fullscreen-view.ba-player-firefox-browser .ba-videoplayer-title-block{position:fixed;z-index:100}.ba-videoplayer-container.ba-player-fullscreen-view{min-width:100%;position:absolute;min-height:fit-content}.ba-videoplayer-container.ba-player-fullscreen-view>.ba-videoplayer-overlay{position:fixed}.ba-videoplayer-noie8 .ba-player-theatre-theme-playbutton-container{-webkit-transform:translate(-50%,-50%);-moz-transform:translate(-50%,-50%);-o-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);border:.6em solid;border-color:#999;border-color:rgba(255,255,255,.6);position:absolute;top:50%;left:50%;transition:all .25s ease-in-out;-moz-transition:all .25s ease-in-out;-webkit-transition:all .25s ease-in-out;-o-transition:all .25s ease-in-out;-ms-transition:all .25s ease-in-out;-moz-box-shadow:0 0 22px #000;-webkit-box-shadow:0 0 22px #000;box-shadow:0 0 22px #000;border-radius:50%;box-sizing:content-box;cursor:pointer;font-size:5px;height:10em;text-align:center;width:10em}.ba-videoplayer-noie8 .ba-player-theatre-theme-playbutton-container:focus{outline:0;border-radius:50%;border-color:#1b8fcc;-moz-box-shadow:0 0 0 2px #1b8fcc;-webkit-box-shadow:0 0 0 2px #1b8fcc;box-shadow:0 0 0 2px #1b8fcc}.ba-videoplayer-noie8 .ba-player-theatre-theme-playbutton-container:focus:active,.ba-videoplayer-noie8 .ba-player-theatre-theme-playbutton-container:focus:hover{border:none}.ba-videoplayer-noie8 .ba-player-theatre-theme-playbutton-container:hover{-moz-box-shadow:0 0 22px #eee;-webkit-box-shadow:0 0 22px #eee;box-shadow:0 0 22px #eee}.ba-videoplayer-noie8 .ba-player-theatre-theme-playbutton-container:hover .ba-player-theatre-theme-playbutton-button::after{text-shadow:0 0 4px #eee}.ba-videoplayer-noie8 .ba-player-theatre-theme-playbutton-button::after{font-family:bjsmc;font-style:normal;font-weight:400;speak:none;display:inline-block;text-decoration:inherit;width:1em;margin-right:.2em;text-align:center;font-variant:normal;text-transform:none;line-height:1em;margin-left:.2em;text-shadow:0 0 4px #000;transition:all .25s ease-in-out;-moz-transition:all .25s ease-in-out;-webkit-transition:all .25s ease-in-out;-o-transition:all .25s ease-in-out;-ms-transition:all .25s ease-in-out;content:\"\\E805\";color:#eee;font-size:4.6em}.ba-videoplayer-noie8 .ba-player-theatre-theme-playbutton-button::after{line-height:2.3em;margin-left:.1em;width:100%}.ba-player-theatre-theme-rerecord-bar{position:absolute;left:0;right:0;bottom:0;background-color:#eee}.ba-player-theatre-theme-rerecord-backbar{position:absolute;left:0;right:0;bottom:0;height:50px;background-color:#eee;opacity:1}.ba-player-theatre-theme-rerecord-frontbar{position:relative;left:0;right:0;bottom:0;height:50px;overflow:hidden;padding-left:16px;padding-right:16px;text-align:center}.ba-player-theatre-theme-rerecord-button-container{display:inline-block}.ba-player-theatre-theme-rerecord-button{background-color:#000;border-radius:0;color:#eee;cursor:pointer;font-family:sans-serif;font-weight:300;font-size:12px;height:50px;padding:0;padding-left:16px;padding-right:16px;line-height:50px;letter-spacing:.1em}.ba-player-theatre-theme.ba-videoplayer-container .ba-player-text-tracks-overlay{position:absolute;left:0;right:0;bottom:45px;transition:bottom .5s ease-in-out;-moz-transition:bottom .5s ease-in-out;-webkit-transition:bottom .5s ease-in-out;-o-transition:bottom .5s ease-in-out;-ms-transition:bottom .5s ease-in-out}.ba-player-theatre-theme.ba-videoplayer-container .ba-player-text-tracks-overlay .ba-commoncss-options-popup{bottom:0;right:12.5%}.ba-player-theatre-theme.ba-videoplayer-container .ba-player-track-dashboard-hidden.ba-player-text-tracks-overlay{bottom:5px}.ba-recorder-theme-theatre .ba-commoncss-message-text{-moz-border-radius:15px;-webkit-border-radius:15px;border-radius:15px}.ba-recorder-theme-theatre .ba-videorecorder-chooser-container{background-color:#eee}.ba-recorder-theme-theatre .ba-videorecorder-chooser-icon-container{color:#000;font-size:32px;margin:16px}.ba-recorder-theme-theatre .ba-videorecorder-chooser-button-0,.ba-recorder-theme-theatre .ba-videorecorder-chooser-button-1,.ba-recorder-theme-theatre .ba-videorecorder-chooser-button-2,.ba-recorder-theme-theatre .ba-videorecorder-chooser-button-3{-moz-border-radius:15px;-webkit-border-radius:15px;border-radius:15px;line-height:20px;min-width:10em;padding:6px 8px}.ba-recorder-theme-theatre .ba-videorecorder-chooser-button-0,.ba-recorder-theme-theatre .ba-videorecorder-chooser-button-2{background-color:#fff;color:#333;border:1px solid #333}.ba-recorder-theme-theatre .ba-videorecorder-chooser-button-1,.ba-recorder-theme-theatre .ba-videorecorder-chooser-button-3{border:1px solid #999;color:#979797;margin:2px 0}.ba-recorder-theme-theatre .ba-commoncss-icon-record:before{font-size:.8em}.ba-recorder-theme-theatre .ba-commoncss-icon-upload:before{font-size:.9em}.ba-recorder-red-color .ba-recorder-theme-theatre-dashboard .ba-commoncss-accent-color,.ba-recorder-red-color .ba-recorder-theme-theatre-dashboard .ba-videorecorder-button-inner,.ba-recorder-red-color .ba-recorder-theme-theatre-dashboard .ba-videorecorder-button-inner:hover,.ba-recorder-red-color .ba-recorder-theme-theatre-dashboard .ba-videorecorder-button-selected,.ba-recorder-red-color .ba-recorder-theme-theatre-dashboard .ba-videorecorder-stop-button-container .ba-videorecorder-button{color:#eb6a74}.ba-recorder-red-color .ba-recorder-theme-theatre-dashboard .ba-commoncss-accent-color-border,.ba-recorder-red-color .ba-recorder-theme-theatre-dashboard .ba-videorecorder-button-selected{border-color:#eb6a74}.ba-recorder-red-color .ba-recorder-theme-theatre-dashboard .ba-commoncss-accent-color-bg,.ba-recorder-red-color .ba-recorder-theme-theatre-dashboard .ba-videorecorder-button-primary{background-color:#eb6a74}.ba-recorder-red-color .ba-recorder-theme-theatre-dashboard .ba-videorecorder-settings input[type=radio]:checked+span{background-color:#eb6a74;border-color:#eb6a74}.ba-recorder-red-color.ba-recorder-theme-theatre .ba-videorecorder-chooser-button-0,.ba-recorder-red-color.ba-recorder-theme-theatre .ba-videorecorder-chooser-button-2{color:#fff}.ba-recorder-red-color.ba-recorder-theme-theatre .ba-videorecorder-chooser-button-1,.ba-recorder-red-color.ba-recorder-theme-theatre .ba-videorecorder-chooser-button-3{background-color:#fff}.ba-recorder-red-color .ba-recorder-loader-label{color:#eb6a74}.ba-recorder-red-color .ba-videorecorder-chooser-button-0,.ba-recorder-red-color .ba-videorecorder-chooser-button-2,.ba-recorder-red-color .ba-videorecorder-imagegallery-leftbutton,.ba-recorder-red-color .ba-videorecorder-imagegallery-rightbutton{background-color:#eb6a74}.ba-recorder-red-color .ba-videorecorder-chooser-button-0,.ba-recorder-red-color .ba-videorecorder-chooser-button-2,.ba-recorder-red-color .ba-videorecorder-imagegallery-image:hover{border-color:#eb6a74}.ba-recorder-red-color .ba-videorecorder-message-message a{color:#eb6a74}.ba-recorder-blue-color .ba-recorder-theme-theatre-dashboard .ba-commoncss-accent-color,.ba-recorder-blue-color .ba-recorder-theme-theatre-dashboard .ba-videorecorder-button-inner,.ba-recorder-blue-color .ba-recorder-theme-theatre-dashboard .ba-videorecorder-button-inner:hover,.ba-recorder-blue-color .ba-recorder-theme-theatre-dashboard .ba-videorecorder-button-selected,.ba-recorder-blue-color .ba-recorder-theme-theatre-dashboard .ba-videorecorder-stop-button-container .ba-videorecorder-button{color:#2a74eb}.ba-recorder-blue-color .ba-recorder-theme-theatre-dashboard .ba-commoncss-accent-color-border,.ba-recorder-blue-color .ba-recorder-theme-theatre-dashboard .ba-videorecorder-button-selected{border-color:#2a74eb}.ba-recorder-blue-color .ba-recorder-theme-theatre-dashboard .ba-commoncss-accent-color-bg,.ba-recorder-blue-color .ba-recorder-theme-theatre-dashboard .ba-videorecorder-button-primary{background-color:#2a74eb}.ba-recorder-blue-color .ba-recorder-theme-theatre-dashboard .ba-videorecorder-settings input[type=radio]:checked+span{background-color:#2a74eb;border-color:#2a74eb}.ba-recorder-blue-color.ba-recorder-theme-theatre .ba-videorecorder-chooser-button-0,.ba-recorder-blue-color.ba-recorder-theme-theatre .ba-videorecorder-chooser-button-2{color:#fff}.ba-recorder-blue-color.ba-recorder-theme-theatre .ba-videorecorder-chooser-button-1,.ba-recorder-blue-color.ba-recorder-theme-theatre .ba-videorecorder-chooser-button-3{background-color:#fff}.ba-recorder-blue-color .ba-recorder-loader-label{color:#2a74eb}.ba-recorder-blue-color .ba-videorecorder-chooser-button-0,.ba-recorder-blue-color .ba-videorecorder-chooser-button-2,.ba-recorder-blue-color .ba-videorecorder-imagegallery-leftbutton,.ba-recorder-blue-color .ba-videorecorder-imagegallery-rightbutton{background-color:#2a74eb}.ba-recorder-blue-color .ba-videorecorder-chooser-button-0,.ba-recorder-blue-color .ba-videorecorder-chooser-button-2,.ba-recorder-blue-color .ba-videorecorder-imagegallery-image:hover{border-color:#2a74eb}.ba-recorder-blue-color .ba-videorecorder-message-message a{color:#2a74eb}.ba-recorder-green-color .ba-recorder-theme-theatre-dashboard .ba-commoncss-accent-color,.ba-recorder-green-color .ba-recorder-theme-theatre-dashboard .ba-videorecorder-button-inner,.ba-recorder-green-color .ba-recorder-theme-theatre-dashboard .ba-videorecorder-button-inner:hover,.ba-recorder-green-color .ba-recorder-theme-theatre-dashboard .ba-videorecorder-button-selected,.ba-recorder-green-color .ba-recorder-theme-theatre-dashboard .ba-videorecorder-stop-button-container .ba-videorecorder-button{color:#5daa96}.ba-recorder-green-color .ba-recorder-theme-theatre-dashboard .ba-commoncss-accent-color-border,.ba-recorder-green-color .ba-recorder-theme-theatre-dashboard .ba-videorecorder-button-selected{border-color:#5daa96}.ba-recorder-green-color .ba-recorder-theme-theatre-dashboard .ba-commoncss-accent-color-bg,.ba-recorder-green-color .ba-recorder-theme-theatre-dashboard .ba-videorecorder-button-primary{background-color:#5daa96}.ba-recorder-green-color .ba-recorder-theme-theatre-dashboard .ba-videorecorder-settings input[type=radio]:checked+span{background-color:#5daa96;border-color:#5daa96}.ba-recorder-green-color.ba-recorder-theme-theatre .ba-videorecorder-chooser-button-0,.ba-recorder-green-color.ba-recorder-theme-theatre .ba-videorecorder-chooser-button-2{color:#fff}.ba-recorder-green-color.ba-recorder-theme-theatre .ba-videorecorder-chooser-button-1,.ba-recorder-green-color.ba-recorder-theme-theatre .ba-videorecorder-chooser-button-3{background-color:#fff}.ba-recorder-green-color .ba-recorder-loader-label{color:#5daa96}.ba-recorder-green-color .ba-videorecorder-chooser-button-0,.ba-recorder-green-color .ba-videorecorder-chooser-button-2,.ba-recorder-green-color .ba-videorecorder-imagegallery-leftbutton,.ba-recorder-green-color .ba-videorecorder-imagegallery-rightbutton{background-color:#5daa96}.ba-recorder-green-color .ba-videorecorder-chooser-button-0,.ba-recorder-green-color .ba-videorecorder-chooser-button-2,.ba-recorder-green-color .ba-videorecorder-imagegallery-image:hover{border-color:#5daa96}.ba-recorder-green-color .ba-videorecorder-message-message a{color:#5daa96}.ba-recorder-theme-theatre.ba-videorecorder-container .ba-videorecorder-video{background-color:#000}.ba-recorder-theme-theatre.ba-videorecorder-container .ba-recorder-overlay{top:0}.ba-recorder-theme-theatre-dashboard{position:absolute;left:0;right:0;top:0;bottom:0;height:100%;opacity:.75}.ba-recorder-theme-theatre-dashboard .ba-videorecorder-controlbar{background-color:#eee;position:absolute;left:0;right:0;bottom:0;height:50px;padding:0}.ba-recorder-theme-theatre-dashboard .ba-videorecorder-button{background-color:#fff;border:none;border-right:1px solid #979797;box-sizing:border-box;color:#eee;cursor:pointer;float:left;height:50px;line-height:50px;text-align:center;width:50px}.ba-recorder-theme-theatre-dashboard .ba-videorecorder-button-inner{border:none;cursor:pointer;color:#666;font-size:inherit;height:100%;margin:0;padding:0;width:100%}.ba-recorder-theme-theatre-dashboard .ba-videorecorder-button-inner:hover{background-color:#eee;color:#000}.ba-recorder-theme-theatre-dashboard .ba-videorecorder-button-selected{background-color:#000;color:#eee}.ba-recorder-theme-theatre-dashboard .ba-videorecorder-indicator-container{height:50px;line-height:50px;padding-left:10px}.ba-recorder-theme-theatre-dashboard .ba-videorecorder-rightbutton-container{padding:0}.ba-recorder-theme-theatre-dashboard .ba-videorecorder-settings-front{position:absolute;left:0;right:0;bottom:0;max-height:initial;overflow:auto}.ba-recorder-theme-theatre-dashboard .ba-videorecorder-settings{bottom:50px;max-height:14em;overflow:scroll;margin:5px;padding:0}.ba-recorder-theme-theatre-dashboard .ba-videorecorder-settings .ba-videorecorder-add-stream,.ba-recorder-theme-theatre-dashboard .ba-videorecorder-settings label{font-family:sans-serif;font-weight:300;font-size:12px;color:#979797}.ba-recorder-theme-theatre-dashboard .ba-videorecorder-settings hr{background-color:#979797;height:2px}.ba-recorder-theme-theatre-dashboard .ba-videorecorder-settings input[type=radio]:checked+span{border:3px solid #979797;background-color:#000}.ba-recorder-theme-theatre-dashboard .ba-videorecorder-settings span{border-color:#979797;background-color:#979797}.ba-recorder-theme-theatre-dashboard .ba-videorecorder-button-primary{background-color:#000;border:none;border-radius:0;color:#eee;display:inline-block;font-family:sans-serif;font-weight:300;font-size:12px;margin:0;padding:0 25px;min-width:3em;position:relative;left:0;right:0;top:0;bottom:0;-webkit-transform:translate(0,0);-moz-transform:translate(0,0);-o-transform:translate(0,0);-ms-transform:translate(0,0);transform:translate(0,0);z-index:10;height:50px;line-height:50px}.ba-recorder-theme-theatre-dashboard .ba-videorecorder-settings-button{background-color:#eee;cursor:pointer;margin:15px 0 0 15px}.ba-recorder-theme-theatre-dashboard .ba-videorecorder-settings label{color:#979797}.ba-recorder-theme-theatre-dashboard .ba-videorecorder-bubble-info{background-color:#fff;background-color:#fff;-moz-border-radius:4px;-webkit-border-radius:4px;border-radius:4px;display:inline-block;padding:12px 0;line-height:1.2;position:relative}.ba-recorder-theme-theatre-dashboard .ba-videorecorder-bubble-info:before{border-top:9px solid;border-top-color:#fff;border-top-color:#fff;border-left:6px solid transparent;border-right:6px solid transparent;content:\"\";height:0;left:10px;position:absolute;right:100%;top:100%;width:0}.ba-recorder-theme-theatre-dashboard .ba-videorecorder-controlbar-center-section{position:absolute;left:0;text-align:center;width:100%}.ba-recorder-theme-theatre-dashboard .ba-videorecorder-button-container{display:inline-block}.ba-recorder-theme-theatre-dashboard .ba-videorecorder-label-container{text-align:center;width:100%}.ba-recorder-theme-theatre-dashboard .ba-videorecorder-label-container .ba-videorecorder-button-primary{background-color:inherit;border-left:1px solid #979797;border-right:1px solid #979797;color:#979797;cursor:default}.ba-recorder-theme-theatre-dashboard .ba-videorecorder-stop-button-container{text-align:right;bottom:0;left:auto;position:absolute;right:0;top:auto}.ba-recorder-theme-theatre-dashboard .ba-videorecorder-stop-button-container .ba-videorecorder-button{color:#000}.ba-recorder-theme-theatre.ba-videorecorder-container .ba-videorecorder-imagegallery-container{left:50px;right:50px}.ba-videorecorder-imagegallery-image img{border:none;border-radius:0}.ba-videorecorderimagegallery-image:hover{border:2px solid #fff}.ba-videorecorder-imagegallery-leftbutton,.ba-videorecorder-imagegallery-rightbutton{border-radius:0;background-color:#979797;background-color:rgba(0,0,0,.4);height:30px;width:30px;z-index:10}.ba-recorder-theme-theatre .ba-videorecorder-topmessage-message{color:#eee;display:inline-block;font-family:sans-serif;font-size:12px;font-weight:300;padding:7px;position:relative;margin:15px 0 3px}.ba-recorder-theme-theatre .ba-videorecorder-topmessage-background{background:0 0}.ba-imageviewer-theatre-theme-red-color .ba-commoncss-icon-resize-full,.ba-imageviewer-theatre-theme-red-color .ba-imageviewer-button-inner,.ba-imageviewer-theatre-theme-red-color .ba-imageviewer-image-title,.ba-imageviewer-theatre-theme-red-color.ba-imageviewer-noie8 .ba-imageviewer-button-inner{color:#eb6a74}.ba-imageviewer-theatre-theme-red-color .ba-imageviewer-rerecord-button{background-color:#eb6a74}.ba-imageviewer-theatre-theme-blue-color .ba-commoncss-icon-resize-full,.ba-imageviewer-theatre-theme-blue-color .ba-imageviewer-button-inner,.ba-imageviewer-theatre-theme-blue-color .ba-imageviewer-image-title,.ba-imageviewer-theatre-theme-blue-color.ba-imageviewer-noie8 .ba-imageviewer-button-inner{color:#2a74eb}.ba-imageviewer-theatre-theme-blue-color .ba-imageviewer-rerecord-button{background-color:#2a74eb}.ba-imageviewer-theatre-theme-green-color .ba-commoncss-icon-resize-full,.ba-imageviewer-theatre-theme-green-color .ba-imageviewer-button-inner,.ba-imageviewer-theatre-theme-green-color .ba-imageviewer-image-title,.ba-imageviewer-theatre-theme-green-color.ba-imageviewer-noie8 .ba-imageviewer-button-inner{color:#5daa96}.ba-imageviewer-theatre-theme-green-color .ba-imageviewer-rerecord-button{background-color:#5daa96}.ba-imageviewer-container.ba-imageviewer-theatre-theme .ba-commoncss-icon-resize-full{color:#666}.ba-imageviewer-container.ba-imageviewer-theatre-theme .ba-imageviewer-dashboard{transition:opacity .5s ease-in-out;-moz-transition:opacity .5s ease-in-out;-webkit-transition:opacity .5s ease-in-out;-o-transition:opacity .5s ease-in-out;-ms-transition:opacity .5s ease-in-out;background-color:#eee;box-sizing:border-box;bottom:15px;border:1px solid #666;height:28px;left:12.5%;opacity:.75;position:absolute;width:75%}.ba-imageviewer-container.ba-imageviewer-theatre-theme .ba-imageviewer-dashboard-hidden{opacity:0}.ba-imageviewer-container.ba-imageviewer-theatre-theme .ba-imageviewer-left-block{float:left;padding-left:5px}.ba-imageviewer-container.ba-imageviewer-theatre-theme .ba-imageviewer-left-block>div{float:left;height:28px;line-height:29px}.ba-imageviewer-container.ba-imageviewer-theatre-theme .ba-imageviewer-left-block>div:last-child{float:right}.ba-imageviewer-container.ba-imageviewer-theatre-theme.ba-imageviewer-ie8 .ba-imageviewer-left-block>div{line-height:28px}.ba-imageviewer-container.ba-imageviewer-theatre-theme .ba-imageviewer-center-block{float:left}.ba-imageviewer-container.ba-imageviewer-theatre-theme .ba-imageviewer-right-block{float:right;padding-right:6px}.ba-imageviewer-container.ba-imageviewer-theatre-theme .ba-imageviewer-right-block>div{float:right;height:25px;line-height:25px;text-align:center}.ba-imageviewer-container.ba-imageviewer-theatre-theme .ba-imageviewer-right-block>div:first-child{line-height:28px}.ba-imageviewer-container.ba-imageviewer-theatre-theme .ba-imageviewer-right-block>div:last-child{float:left;line-height:31px}.ba-imageviewer-container.ba-imageviewer-theatre-theme .ba-imageviewer-right-block .ba-imageviewer-time-value{text-align:left}.ba-imageviewer-container.ba-imageviewer-theatre-theme .ba-imageviewer-image-title-container{position:absolute;left:0;right:0;top:0;transition:opacity .5s ease-in-out;-moz-transition:opacity .5s ease-in-out;-webkit-transition:opacity .5s ease-in-out;-o-transition:opacity .5s ease-in-out;-ms-transition:opacity .5s ease-in-out;width:100%}.ba-imageviewer-container.ba-imageviewer-theatre-theme .ba-imageviewer-image-title-container>p{background-color:#eee;background-color:rgba(255,255,255,.4);position:relative;margin:auto;height:28px;line-height:28px;top:15px;text-align:center;color:#020202;width:75%}.ba-imageviewer-container.ba-imageviewer-theatre-theme .ba-imageviewer-leftbutton-container{float:left;width:40px;height:100%;cursor:pointer;box-sizing:content-box;border:none;text-align:center;line-height:2}.ba-imageviewer-container.ba-imageviewer-theatre-theme.ba-imageviewer-noie8 .ba-imageviewer-rightbutton-container{float:right;width:40px;height:100%;cursor:pointer;box-sizing:content-box;border:none}.ba-imageviewer-container.ba-imageviewer-theatre-theme.ba-imageviewer-ie8 .ba-imageviewer-rightbutton-container{float:right;width:40px;height:50%;cursor:pointer;box-sizing:content-box;border:none}.ba-imageviewer-container.ba-imageviewer-theatre-theme.ba-imageviewer-noie8 .ba-imageviewer-button-inner{color:#000;font-size:13px}.ba-imageviewer-container.ba-imageviewer-theatre-theme.ba-imageviewer-ie8 .ba-imageviewer-button-inner{color:#000;font-size:13px;margin-left:3px}.ba-imageviewer-container.ba-imageviewer-theatre-theme .ba-imageviewer-button-inner{cursor:pointer;position:relative}.ba-imageviewer-container.ba-imageviewer-theatre-theme .ba-imageviewer-button-text{font-family:Arial,sans-serif;font-weight:400;font-size:10px}.ba-imageviewer-container.ba-imageviewer-theatre-theme.ba-imageviewer-noie8 .ba-imageviewer-full-screen-btn-inner{text-align:left}.ba-imageviewer-fullscreen-view.ba-imageviewer-theatre-theme .ba-imageviewer-dashboard,.ba-imageviewer-fullscreen-view.ba-imageviewer-theatre-theme .ba-imageviewer-image-title-container{position:fixed;right:12.5%;z-index:1005}.ba-imageviewer-fullscreen-view.ba-imageviewer-theatre-theme .ba-imageviewer-dashboard{bottom:0;width:75%}.ba-imageviewer-fullscreen-view.ba-imageviewer-theatre-theme .ba-imageviewer-image-title-container{top:0}.ba-audioplayer-container.ba-player-theatre-theme{box-sizing:border-box;border:1px solid #eee;height:58px;min-height:58px;min-width:320px}.ba-audioplayer-container.ba-player-theatre-theme.ba-player-no-title{height:28px;min-height:28px}.ba-audioplayer-container.ba-player-theatre-theme .ba-player-theatre-theme-dashboard{transition:opacity .5s ease-in-out;-moz-transition:opacity .5s ease-in-out;-webkit-transition:opacity .5s ease-in-out;-o-transition:opacity .5s ease-in-out;-ms-transition:opacity .5s ease-in-out;background-color:#eee;bottom:0;height:28px;position:absolute;width:100%}.ba-audioplayer-container.ba-player-theatre-theme .ba-player-theatre-theme-right-block>div{height:28px;line-height:28px;width:40px}.ba-audioplayer-container.ba-player-theatre-theme.ba-player-size-small .ba-player-theatre-theme-time-container{display:block}.ba-audioplayer-container.ba-player-theatre-theme.ba-audioplayer-ie8 .ba-player-theatre-theme-volumebar,.ba-audioplayer-container.ba-player-theatre-theme.ba-player-size-medium .ba-player-theatre-theme-volumebar,.ba-audioplayer-container.ba-player-theatre-theme.ba-player-size-small .ba-player-theatre-theme-volumebar{display:block}.ba-audioplayer-container.ba-player-theatre-theme.ba-player-size-medium .ba-player-theatre-theme-volume-button-container,.ba-audioplayer-container.ba-player-theatre-theme.ba-player-size-small .ba-player-theatre-theme-volume-button-container{display:block}.ba-audioplayer-container.ba-player-theatre-theme.ba-player-size-medium .ba-player-theatre-theme-right-time-container{display:block}.ba-audioplayer-ie8 .ba-player-theatre-theme-left-block>div{line-height:28px}.ba-player-theatre-theme-title-container{position:absolute;left:0;right:0;top:0;transition:opacity .5s ease-in-out;-moz-transition:opacity .5s ease-in-out;-webkit-transition:opacity .5s ease-in-out;-o-transition:opacity .5s ease-in-out;-ms-transition:opacity .5s ease-in-out;width:100%}.ba-player-theatre-theme-title-container>p{background-color:#eee;background-color:rgba(255,255,255,.4);position:relative;margin:auto;height:28px;line-height:28px;text-align:center;color:#979797}.ba-audioplayer-noie8 .ba-player-theatre-theme-rightbutton-container{float:right;width:40px;height:100%;cursor:pointer;box-sizing:content-box;border:none}.ba-audioplayer-ie8 .ba-player-theatre-theme-rightbutton-container{float:right;width:40px;height:50%;cursor:pointer;box-sizing:content-box;border:none}.ba-audioplayer-noie8 .ba-player-theatre-theme-button-inner{color:#000;font-size:13px}.ba-audioplayer-ie8 .ba-player-theatre-theme-button-inner{color:#000;font-size:13px;margin-left:3px}.ba-audioplayer-noie8 .ba-player-theatre-theme-time-value{-webkit-transform:translateY(-50%);-moz-transform:translateY(-50%);-o-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);top:50%;position:relative;text-align:center}.ba-audioplayer-noie8 .ba-player-theatre-theme-volumebar{float:left;margin-right:120px;width:7px}.ba-audioplayer-ie8 .ba-player-theatre-theme-volumebar{float:right;width:7px;height:50%;margin-right:120px}.ba-audioplayer-noie8 .ba-player-theatre-theme-progressbar-inner{-webkit-transform:translateY(-50%);-moz-transform:translateY(-50%);-o-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);top:50%;position:relative;text-align:center}.ba-audioplayer-ie8 .ba-player-theatre-theme-progressbar-inner{margin-top:9px}.ba-audioplayer-ie8 .ba-player-theatre-theme-progressbar-position{height:10px}/*!\nbetajs-media-components - v0.0.291 - 2022-01-08\nCopyright (c) Ziggeo,Oliver Friedmann,Rashad Aliyev\nApache-2.0 Software License.\n*/.ba-player-red-color .ba-player-space-theme-button-inner,.ba-player-red-color .ba-player-space-theme-title>p{color:#eb6a74}.ba-player-red-color .ba-player-button-active,.ba-player-red-color .ba-player-space-theme-primary-button,.ba-player-red-color.ba-videoplayer-ie8 .ba-player-space-theme-stream-label-container,.ba-player-red-color.ba-videoplayer-noie8 .ba-player-space-theme-stream-label-container{color:#eee;background-color:#eb6a74}.ba-player-red-color .ba-player-space-theme-playbutton-duration,.ba-player-red-color .ba-player-space-theme-progressbar-button,.ba-player-red-color .ba-player-space-theme-progressbar-position,.ba-player-red-color .ba-player-space-theme-rerecord-button,.ba-player-red-color .ba-player-space-theme-stream-label-container .ba-player-space-theme-stream-label,.ba-player-red-color .ba-player-space-theme-volumebar-position{background-color:#eb6a74}.ba-player-red-color.ba-videoplayer-noie8 .ba-player-space-theme-playbutton-container{border-color:#eb6a74}.ba-player-red-color.ba-videoplayer-noie8 .ba-player-space-theme-playbutton-button::after{color:#eb6a74}.ba-player-red-color .ba-player-space-theme-progressbar-cache{background-color:#4c4c4c;background-color:rgba(255,255,255,.6)}.ba-player-red-color .ba-player-space-theme-progressbar-inner,.ba-player-red-color .ba-player-space-theme-volumebar-inner{background-color:#7f7f7f;background-color:rgba(255,255,255,.3)}.ba-player-blue-color .ba-player-space-theme-button-inner,.ba-player-blue-color .ba-player-space-theme-title>p{color:#2a74eb}.ba-player-blue-color .ba-player-button-active,.ba-player-blue-color .ba-player-space-theme-primary-button,.ba-player-blue-color.ba-videoplayer-ie8 .ba-player-space-theme-stream-label-container,.ba-player-blue-color.ba-videoplayer-noie8 .ba-player-space-theme-stream-label-container{color:#eee;background-color:#2a74eb}.ba-player-blue-color .ba-player-space-theme-playbutton-duration,.ba-player-blue-color .ba-player-space-theme-progressbar-button,.ba-player-blue-color .ba-player-space-theme-progressbar-position,.ba-player-blue-color .ba-player-space-theme-rerecord-button,.ba-player-blue-color .ba-player-space-theme-stream-label-container .ba-player-space-theme-stream-label,.ba-player-blue-color .ba-player-space-theme-volumebar-position{background-color:#2a74eb}.ba-player-blue-color.ba-videoplayer-noie8 .ba-player-space-theme-playbutton-container{border-color:#2a74eb}.ba-player-blue-color.ba-videoplayer-noie8 .ba-player-space-theme-playbutton-button::after{color:#2a74eb}.ba-player-blue-color .ba-player-space-theme-progressbar-cache{background-color:#4c4c4c;background-color:rgba(255,255,255,.6)}.ba-player-blue-color .ba-player-space-theme-progressbar-inner,.ba-player-blue-color .ba-player-space-theme-volumebar-inner{background-color:#7f7f7f;background-color:rgba(255,255,255,.3)}.ba-player-green-color .ba-player-space-theme-button-inner,.ba-player-green-color .ba-player-space-theme-title>p{color:#5daa96}.ba-player-green-color .ba-player-button-active,.ba-player-green-color .ba-player-space-theme-primary-button,.ba-player-green-color.ba-videoplayer-ie8 .ba-player-space-theme-stream-label-container,.ba-player-green-color.ba-videoplayer-noie8 .ba-player-space-theme-stream-label-container{color:#eee;background-color:#5daa96}.ba-player-green-color .ba-player-space-theme-playbutton-duration,.ba-player-green-color .ba-player-space-theme-progressbar-button,.ba-player-green-color .ba-player-space-theme-progressbar-position,.ba-player-green-color .ba-player-space-theme-rerecord-button,.ba-player-green-color .ba-player-space-theme-stream-label-container .ba-player-space-theme-stream-label,.ba-player-green-color .ba-player-space-theme-volumebar-position{background-color:#5daa96}.ba-player-green-color.ba-videoplayer-noie8 .ba-player-space-theme-playbutton-container{border-color:#5daa96}.ba-player-green-color.ba-videoplayer-noie8 .ba-player-space-theme-playbutton-button::after{color:#5daa96}.ba-player-green-color .ba-player-space-theme-progressbar-cache{background-color:#4c4c4c;background-color:rgba(255,255,255,.6)}.ba-player-green-color .ba-player-space-theme-progressbar-inner,.ba-player-green-color .ba-player-space-theme-volumebar-inner{background-color:#7f7f7f;background-color:rgba(255,255,255,.3)}.ba-player-space-theme-dashboard{font-family:sans-serif}.ba-player-space-theme-dashboard .ba-player-airplay-container{box-sizing:content-box;padding:12px 0 0 6px}.ba-player-space-theme-title-container{position:absolute;left:0;right:0;top:0;background-color:#cecece;background-color:rgba(0,0,0,.2);transition:opacity .5s ease-in-out;-moz-transition:opacity .5s ease-in-out;-webkit-transition:opacity .5s ease-in-out;-o-transition:opacity .5s ease-in-out;-ms-transition:opacity .5s ease-in-out;box-sizing:border-box;font-size:.65rem;font-weight:300;height:32px;letter-spacing:.05rem;line-height:32px;padding:0 12px;text-align:center}.ba-videoplayer-ie8 .ba-player-space-theme-title-container .ba-player-space-theme-button-inner{margin-top:0}.ba-player-space-theme-controlbar-footer{position:absolute;left:0;right:0;bottom:0;background-color:#cecece;background-color:rgba(0,0,0,.4);transition:opacity .5s ease-in-out;-moz-transition:opacity .5s ease-in-out;-webkit-transition:opacity .5s ease-in-out;-o-transition:opacity .5s ease-in-out;-ms-transition:opacity .5s ease-in-out;box-sizing:content-box;height:40px;padding:0 0 0 5px}.ba-videoplayer-ie8 .ba-player-space-theme-controlbar-footer,.ba-videoplayer-ie8 .ba-player-space-theme-title-container{opacity:.8}.ba-videoplayer-noie8 .ba-player-space-theme-title-container .css-rightbutton-container{width:21px}.ba-player-space-theme-title-container-background{position:relative;height:40px}.ba-player-space-theme-title{float:left;color:#eee}.ba-player-space-theme-title>p{margin:0;font-size:12px}.ba-videoplayer-noie8 .ba-player-space-theme-title-container .ba-player-space-theme-button-inner{-webkit-transform:translateY(0);-moz-transform:translateY(0);-o-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0)}.ba-player-space-theme-leftbutton-container{float:left;width:30px;height:100%;cursor:pointer;box-sizing:content-box;border:none;margin-right:10px}.ba-videoplayer-noie8 .ba-player-space-theme-rightbutton-container{float:right;width:auto;height:100%;cursor:pointer;box-sizing:content-box;border:none}.ba-videoplayer-ie8 .ba-player-space-theme-rightbutton-container{float:right;width:auto;height:50%;cursor:pointer;box-sizing:content-box;border:none}.ba-player-space-theme-rightbutton-container{margin:0 5px}.ba-player-space-theme-right-time-container{padding-right:10px}.ba-player-space-theme-button-inner{cursor:pointer;color:#eee;font-size:13px;border-radius:3px}.ba-videoplayer-noie8 .ba-player-space-theme-controlbar-footer .ba-player-space-theme-button-inner{-webkit-transform:translateY(-50%);-moz-transform:translateY(-50%);-o-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);top:50%;position:relative;text-align:center}.ba-videoplayer-ie8 .ba-player-space-theme-button-inner{height:auto;margin-top:14px;margin-left:3px;text-align:center}.ba-player-space-theme-time-container{float:left;width:100px;height:100%;text-align:center;font-family:Helvetica Neue,Helvetica,Arial,sans-serif;font-size:13px;color:#eee;box-sizing:content-box;border:none}.ba-videoplayer-ie8 .ba-player-space-theme-time-container{height:auto;margin-top:15px}.ba-player-space-theme-time-value{-webkit-transform:translateY(-50%);-moz-transform:translateY(-50%);-o-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);top:50%;position:relative;text-align:center;float:left;width:100px;font-size:10px}.ba-videoplayer-noie8 .ba-player-space-theme-volumebar{float:right;width:60px;height:100%}.ba-videoplayer-ie8 .ba-player-space-theme-volumebar{float:right;width:60px;height:50%;margin-top:14px;margin-right:12px}.ba-player-space-theme-volumebar-inner{-webkit-transform:translateY(-50%);-moz-transform:translateY(-50%);-o-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);top:50%;position:relative;text-align:center;border-bottom-left-radius:3px;border-bottom-right-radius:3px;border-top-left-radius:3px;border-top-right-radius:3px;cursor:pointer;background-color:#666;height:6px}.ba-player-space-theme-volumebar-position{border-bottom-left-radius:3px;border-bottom-right-radius:3px;border-top-left-radius:3px;border-top-right-radius:3px;position:absolute;left:0;background-color:#eee;height:100%}.ba-videoplayer-noie8 .ba-player-space-theme-progressbar{overflow:hidden;height:100%;padding-left:6px;padding-right:6px}.ba-videoplayer-ie8 .ba-player-space-theme-progressbar{overflow:hidden;height:50%;padding-left:12px;padding-right:12px;margin-right:30px;margin-top:10px}.ba-player-space-theme-progressbar-cache{position:absolute;left:0;border-bottom-left-radius:3px;border-bottom-right-radius:3px;border-top-left-radius:3px;border-top-right-radius:3px;cursor:pointer;background-color:#eee;height:3px}.ba-player-space-theme-progressbar-inner{-webkit-transform:translateY(-50%);-moz-transform:translateY(-50%);-o-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);top:50%;position:relative;text-align:center;border-bottom-left-radius:3px;border-bottom-right-radius:3px;border-top-left-radius:3px;border-top-right-radius:3px;cursor:pointer;background-color:#979797;height:3px}.ba-player-space-theme-progressbar.ba-player-disabled .ba-player-space-theme-progressbar-cache,.ba-player-space-theme-progressbar.ba-player-disabled .ba-player-space-theme-progressbar-inner{cursor:not-allowed}.ba-player-space-theme-progressbar-position{border-bottom-left-radius:3px;border-bottom-right-radius:3px;border-top-left-radius:3px;border-top-right-radius:3px;background-color:#000;position:absolute;height:3px}.ba-player-space-theme-progressbar-button{-moz-border-radius:50%;-webkit-border-radius:50%;border-radius:50%;background-color:#000;box-sizing:content-box;border:none;position:absolute;top:-2px;z-index:1;width:10px;height:10px}.ba-player-space-theme-progressbar-marker{position:absolute;background-color:#000;top:-4px;height:12px;width:5px}.ba-player-space-theme-button-text{font-family:Arial;font-weight:400;font-size:10px}.ba-player-space-theme-time-container{font-size:.7rem;width:50px}.ba-player-space-theme-time-value{font-weight:300;letter-spacing:.2em;width:50px}.ba-player-size-small .ba-player-space-theme-time-container{display:none}.ba-player-size-small .ba-player-space-theme-volumebar{display:none}.ba-player-space-theme-stream-label-container{background-color:#979797;box-sizing:border-box;padding:2px 4px}.ba-player-space-theme-stream-label-container .ba-player-space-theme-stream-label{line-height:16px;background-color:#979797}.ba-videoplayer-noie8 .ba-player-space-theme-full-screen-btn-inner{text-align:left;padding-left:4px}.ba-videoplayer-noie8 .ba-player-space-theme-cast-button-container{margin:0}.ba-videoplayer-noie8 .ba-player-space-theme-cast-button-container button{-moz-opacity:.7;-khtml-opacity:.7;opacity:.7;background:0 0;border:none;cursor:pointer;box-sizing:border-box;padding:11px 2px 0 10px;width:32px}.ba-player-space-theme-cc-button-container,.ba-player-space-theme-settings-button-container{padding:0 10px;margin:0}.ba-settings-overlay-inner{bottom:40px}.ba-player-space-theme-primary-button{background-color:#fff;color:#000;padding:5px}.ba-player-fullscreen-view video::-webkit-media-controls-overlay-enclosure{display:none}.ba-player-fullscreen-view video::-webkit-media-controls-enclosure{display:none}.ba-player-fullscreen-view video::-webkit-media-controls{display:none}.ba-player-fullscreen-view video::-webkit-media-controls-panel{display:none}.ba-player-fullscreen-view video::-webkit-media-controls-play-button{display:none}.ba-player-fullscreen-view video::-webkit-media-controls-current-time-display{display:none}.ba-player-fullscreen-view video::-webkit-media-controls-time-remaining-display{display:none}.ba-player-fullscreen-view video::-webkit-media-controls-timeline{display:none}.ba-player-fullscreen-view video::-webkit-media-controls-mute-button{display:none}.ba-player-fullscreen-view video::-webkit-media-controls-volume-slider{display:none}.ba-player-fullscreen-view video::-webkit-media-controls-fullscreen-button{display:none}.ba-player-fullscreen-view video::-internal-media-controls-download-button{display:none}.ba-player-fullscreen-view video::-moz-list-bullet,.ba-player-fullscreen-view video::-moz-list-number{display:none}.ba-player-fullscreen-view video::-moz-meter-bar{display:none}.ba-player-fullscreen-view video:fullscreen:not(:root){display:none}.ba-player-fullscreen-view .ba-videoplayer-dashboard{bottom:0}.ba-player-fullscreen-view .ba-videoplayer-title-block{top:0}.ba-player-fullscreen-view.ba-player-firefox-browser .ba-videoplayer-dashboard,.ba-player-fullscreen-view.ba-player-firefox-browser .ba-videoplayer-title-block{position:fixed;z-index:100}.ba-videoplayer-container.ba-player-fullscreen-view{min-width:100%;position:absolute;min-height:fit-content}.ba-videoplayer-container.ba-player-fullscreen-view>.ba-videoplayer-overlay{position:fixed}.ba-videoplayer-noie8 .ba-player-space-theme-playbutton-container{-webkit-transform:translate(-50%,-50%);-moz-transform:translate(-50%,-50%);-o-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);border:.6em solid;border-color:#999;border-color:rgba(255,255,255,.6);position:absolute;top:50%;left:50%;transition:all .25s ease-in-out;-moz-transition:all .25s ease-in-out;-webkit-transition:all .25s ease-in-out;-o-transition:all .25s ease-in-out;-ms-transition:all .25s ease-in-out;-moz-box-shadow:0 0 22px #000;-webkit-box-shadow:0 0 22px #000;box-shadow:0 0 22px #000;border-radius:50%;box-sizing:content-box;cursor:pointer;font-size:5px;height:10em;text-align:center;width:10em}.ba-videoplayer-noie8 .ba-player-space-theme-playbutton-container:focus{outline:0;border-radius:50%;border-color:#1b8fcc;-moz-box-shadow:0 0 0 2px #1b8fcc;-webkit-box-shadow:0 0 0 2px #1b8fcc;box-shadow:0 0 0 2px #1b8fcc}.ba-videoplayer-noie8 .ba-player-space-theme-playbutton-container:focus:active,.ba-videoplayer-noie8 .ba-player-space-theme-playbutton-container:focus:hover{border:none}.ba-videoplayer-noie8 .ba-player-space-theme-playbutton-container:hover{-moz-box-shadow:0 0 22px #eee;-webkit-box-shadow:0 0 22px #eee;box-shadow:0 0 22px #eee}.ba-videoplayer-noie8 .ba-player-space-theme-playbutton-container:hover .ba-player-space-theme-playbutton-button::after{text-shadow:0 0 4px #eee}.ba-videoplayer-noie8 .ba-player-space-theme-playbutton-button::after{font-family:bjsmc;font-style:normal;font-weight:400;speak:none;display:inline-block;text-decoration:inherit;width:1em;margin-right:.2em;text-align:center;font-variant:normal;text-transform:none;line-height:1em;margin-left:.2em;text-shadow:0 0 4px #000;transition:all .25s ease-in-out;-moz-transition:all .25s ease-in-out;-webkit-transition:all .25s ease-in-out;-o-transition:all .25s ease-in-out;-ms-transition:all .25s ease-in-out;content:\"\\E805\";color:#eee;font-size:4.6em}.ba-videoplayer-noie8 .ba-player-space-theme-playbutton-button::after{line-height:2.3em;margin-left:.1em;width:100%}.ba-player-space-theme-rerecord-bar{position:absolute;left:0;right:0;bottom:0}.ba-player-space-theme-rerecord-backbar{position:absolute;left:0;right:0;bottom:0;height:48px;background-color:#000;opacity:.5}.ba-player-space-theme-rerecord-frontbar{position:relative;left:0;right:0;bottom:0;height:48px;overflow:hidden;padding-left:16px;padding-right:16px}.ba-player-space-theme-rerecord-button-container{height:100%;cursor:pointer;padding-left:8px;padding-right:8px;display:inline-block;position:relative;left:50%;transform:translateX(-50%)}.ba-player-space-theme-rerecord-button{background-color:#000;border-radius:18px;color:#eee;cursor:pointer;font-family:sans-serif;font-weight:300;font-size:11px;padding:8px;padding-left:16px;padding-right:16px;-webkit-transform:translateY(-50%);-moz-transform:translateY(-50%);-o-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);top:50%;position:relative;text-align:center;letter-spacing:.1em}.ba-player-space-theme.ba-videoplayer-noie8 .ba-videoplayer-topmessage-container .ba-player-space-theme-rightbutton-container{width:25px}.ba-player-space-theme.ba-videoplayer-noie8 .ba-videoplayer-topmessage-message .ba-videoplayer-button-inner{-webkit-transform:translateY(0);-moz-transform:translateY(0);-o-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0)}.ba-player-space-theme.ba-videoplayer-noie8 .ba-videoplayer-topmessage-container .ba-videoplayer-rightbutton-container{width:25px}.ba-player-space-theme .ba-videoplayer-topmessage-background{position:relative;height:40px}.ba-player-space-theme .ba-videoplayer-topmessage-message{padding:0;padding-left:20px;padding-right:15px;line-height:40px;text-align:left;font-size:.65rem;letter-spacing:.05rem;font-weight:300}.ba-player-space-theme .ba-videoplayer-title{float:left}.ba-player-space-theme .ba-videoplayer-share-button-container{margin-right:5px}.ba-player-space-theme.ba-videoplayer-container .ba-player-text-tracks-overlay{position:absolute;left:0;right:0;bottom:42px;transition:bottom .5s ease-in-out;-moz-transition:bottom .5s ease-in-out;-webkit-transition:bottom .5s ease-in-out;-o-transition:bottom .5s ease-in-out;-ms-transition:bottom .5s ease-in-out}.ba-player-space-theme.ba-videoplayer-container .ba-player-text-tracks-overlay .ba-commoncss-options-popup{right:0;bottom:1px}.ba-player-space-theme.ba-videoplayer-container .ba-player-track-dashboard-hidden.ba-player-text-tracks-overlay{bottom:5px}.ba-recorder-theme-space .ba-commoncss-message-text{-moz-border-radius:50px;-webkit-border-radius:50px;border-radius:50px}.ba-recorder-theme-space .ba-videorecorder-chooser-container{background-color:#eee;z-index:1}.ba-recorder-theme-space .ba-videorecorder-chooser-icon-container{color:#000;font-size:32px;margin:16px}.ba-recorder-theme-space .ba-videorecorder-chooser-button-0,.ba-recorder-theme-space .ba-videorecorder-chooser-button-1,.ba-recorder-theme-space .ba-videorecorder-chooser-button-2,.ba-recorder-theme-space .ba-videorecorder-chooser-button-3{-moz-border-radius:50px;-webkit-border-radius:50px;border-radius:50px;line-height:20px;min-width:10em;padding:6px 8px}.ba-recorder-theme-space .ba-videorecorder-chooser-button-0,.ba-recorder-theme-space .ba-videorecorder-chooser-button-2{background-color:#000;border:1px solid #000}.ba-recorder-theme-space .ba-videorecorder-chooser-button-1,.ba-recorder-theme-space .ba-videorecorder-chooser-button-3{border:1px solid #666;color:#666;font-size:14px;margin:2px 0}.ba-recorder-red-color .ba-recorder-theme-space-dashboard .ba-videorecorder-button-inner:hover,.ba-recorder-red-color .ba-recorder-theme-space-dashboard .ba-videorecorder-button-selected{color:#eb6a74}.ba-recorder-red-color .ba-recorder-theme-space-dashboard .ba-videorecorder-button-primary{background-color:#eb6a74}.ba-recorder-red-color .ba-recorder-theme-space-dashboard .ba-videorecorder-button-selected{border-color:#eb6a74}.ba-recorder-red-color .ba-recorder-theme-space-dashboard .ba-videorecorder-settings input[type=radio]:checked+span{background-color:#eb6a74;border-color:#eb6a74}.ba-recorder-red-color .ba-recorder-loader-label,.ba-recorder-red-color .ba-videorecorder-button-circle-selected,.ba-recorder-red-color .ba-videorecorder-button-inner:hover,.ba-recorder-red-color .ba-videorecorder-chooser-button-1,.ba-recorder-red-color .ba-videorecorder-chooser-button-3,.ba-recorder-red-color .ba-videorecorder-chooser-icon-container{color:#eb6a74}.ba-recorder-red-color .ba-videorecorder-chooser-button-0,.ba-recorder-red-color .ba-videorecorder-chooser-button-2,.ba-recorder-red-color .ba-videorecorder-imagegallery-leftbutton,.ba-recorder-red-color .ba-videorecorder-imagegallery-rightbutton{background-color:#eb6a74}.ba-recorder-red-color .ba-videorecorder-chooser-button-0,.ba-recorder-red-color .ba-videorecorder-chooser-button-2,.ba-recorder-red-color .ba-videorecorder-imagegallery-image:hover{border-color:#eb6a74}.ba-recorder-red-color .ba-videorecorder-message-message a{color:#eb6a74}.ba-recorder-blue-color .ba-recorder-theme-space-dashboard .ba-videorecorder-button-inner:hover,.ba-recorder-blue-color .ba-recorder-theme-space-dashboard .ba-videorecorder-button-selected{color:#2a74eb}.ba-recorder-blue-color .ba-recorder-theme-space-dashboard .ba-videorecorder-button-primary{background-color:#2a74eb}.ba-recorder-blue-color .ba-recorder-theme-space-dashboard .ba-videorecorder-button-selected{border-color:#2a74eb}.ba-recorder-blue-color .ba-recorder-theme-space-dashboard .ba-videorecorder-settings input[type=radio]:checked+span{background-color:#2a74eb;border-color:#2a74eb}.ba-recorder-blue-color .ba-recorder-loader-label,.ba-recorder-blue-color .ba-videorecorder-button-circle-selected,.ba-recorder-blue-color .ba-videorecorder-button-inner:hover,.ba-recorder-blue-color .ba-videorecorder-chooser-button-1,.ba-recorder-blue-color .ba-videorecorder-chooser-button-3,.ba-recorder-blue-color .ba-videorecorder-chooser-icon-container{color:#2a74eb}.ba-recorder-blue-color .ba-videorecorder-chooser-button-0,.ba-recorder-blue-color .ba-videorecorder-chooser-button-2,.ba-recorder-blue-color .ba-videorecorder-imagegallery-leftbutton,.ba-recorder-blue-color .ba-videorecorder-imagegallery-rightbutton{background-color:#2a74eb}.ba-recorder-blue-color .ba-videorecorder-chooser-button-0,.ba-recorder-blue-color .ba-videorecorder-chooser-button-2,.ba-recorder-blue-color .ba-videorecorder-imagegallery-image:hover{border-color:#2a74eb}.ba-recorder-blue-color .ba-videorecorder-message-message a{color:#2a74eb}.ba-recorder-green-color .ba-recorder-theme-space-dashboard .ba-videorecorder-button-inner:hover,.ba-recorder-green-color .ba-recorder-theme-space-dashboard .ba-videorecorder-button-selected{color:#5daa96}.ba-recorder-green-color .ba-recorder-theme-space-dashboard .ba-videorecorder-button-primary{background-color:#5daa96}.ba-recorder-green-color .ba-recorder-theme-space-dashboard .ba-videorecorder-button-selected{border-color:#5daa96}.ba-recorder-green-color .ba-recorder-theme-space-dashboard .ba-videorecorder-settings input[type=radio]:checked+span{background-color:#5daa96;border-color:#5daa96}.ba-recorder-green-color .ba-recorder-loader-label,.ba-recorder-green-color .ba-videorecorder-button-circle-selected,.ba-recorder-green-color .ba-videorecorder-button-inner:hover,.ba-recorder-green-color .ba-videorecorder-chooser-button-1,.ba-recorder-green-color .ba-videorecorder-chooser-button-3,.ba-recorder-green-color .ba-videorecorder-chooser-icon-container{color:#5daa96}.ba-recorder-green-color .ba-videorecorder-chooser-button-0,.ba-recorder-green-color .ba-videorecorder-chooser-button-2,.ba-recorder-green-color .ba-videorecorder-imagegallery-leftbutton,.ba-recorder-green-color .ba-videorecorder-imagegallery-rightbutton{background-color:#5daa96}.ba-recorder-green-color .ba-videorecorder-chooser-button-0,.ba-recorder-green-color .ba-videorecorder-chooser-button-2,.ba-recorder-green-color .ba-videorecorder-imagegallery-image:hover{border-color:#5daa96}.ba-recorder-green-color .ba-videorecorder-message-message a{color:#5daa96}.ba-recorder-theme-space.ba-videorecorder-container .ba-videorecorder-video{background-color:#000}.ba-recorder-theme-space-dashboard{position:absolute;left:0;right:0;top:0;bottom:0;height:100%}.ba-recorder-theme-space-dashboard .ba-videorecorder-controlbar{position:absolute;left:0;right:0;bottom:0;height:55px;padding:0 10px}.ba-recorder-theme-space-dashboard .ba-videorecorder-controlbar .ba-videorecorder-rightbutton-container.ba-videorecorder-pause-button-container{position:absolute;right:10px}.ba-recorder-theme-space-dashboard .ba-videorecorder-controlbar-left-section{float:left}.ba-recorder-theme-space-dashboard .ba-videorecorder-controlbar-left-section .ba-videorecorder-circle-button{margin-right:7px}.ba-recorder-theme-space-dashboard .ba-videorecorder-long-rounded-button{-moz-border-radius:18px;-webkit-border-radius:18px;border-radius:18px;display:inline-block}.ba-recorder-theme-space-dashboard .ba-videorecorder-long-rounded-button>p{font-family:sans-serif;font-size:12px;padding:15px;margin:0}.ba-recorder-theme-space-dashboard .ba-videorecorder-circle-button{background-color:#979797;background-color:rgba(0,0,0,.4);-moz-border-radius:50%;-webkit-border-radius:50%;border-radius:50%;color:#fff;float:left;height:40px;line-height:40px;text-align:center;width:40px}.ba-recorder-theme-space-dashboard .ba-videorecorder-button-circle-selected,.ba-recorder-theme-space-dashboard .ba-videorecorder-button-inner:hover,.ba-recorder-theme-space-dashboard .ba-videorecorder-button-selected{background-color:#eee;border-radius:50%;color:#000;cursor:pointer}.ba-recorder-theme-space-dashboard .ba-videorecorder-button-inner{border:none;cursor:pointer;font-size:inherit;height:100%;margin:0;padding:0;width:100%}.ba-recorder-theme-space-dashboard .ba-videorecorder-indicator-container{height:40px;line-height:40px}.ba-recorder-theme-space-dashboard .ba-videorecorder-settings-front{position:absolute;left:0;right:0;bottom:0;max-height:initial;overflow:auto}.ba-recorder-theme-space-dashboard .ba-videorecorder-settings{bottom:55px;max-height:14em;overflow:scroll;margin:5px;padding:0}.ba-recorder-theme-space-dashboard .ba-videorecorder-settings .ba-videorecorder-add-stream,.ba-recorder-theme-space-dashboard .ba-videorecorder-settings label{font-family:sans-serif;font-weight:300;font-size:12px}.ba-recorder-theme-space-dashboard .ba-videorecorder-settings input[type=radio]:checked+span{border:3px solid #fff;background-color:#000}.ba-recorder-theme-space-dashboard .ba-videorecorder-button-primary{-moz-border-radius:18px;-webkit-border-radius:18px;border-radius:18px;position:relative;left:0;right:0;top:0;bottom:0;-webkit-transform:translate(0,0);-moz-transform:translate(0,0);-o-transform:translate(0,0);-ms-transform:translate(0,0);transform:translate(0,0);background-color:#000;display:inline-block;font-family:sans-serif;font-weight:300;font-size:12px;margin:6px 5px 0;min-width:3em;padding:8px 16px;z-index:10}.ba-recorder-theme-space-dashboard .ba-videorecorder-settings-button{background-color:#eee;cursor:pointer;margin:15px 0 0 15px}.ba-recorder-theme-space-dashboard .ba-videorecorder-settings-button>p{color:#979797}.ba-recorder-theme-space-dashboard .ba-videorecorder-bubble-info{background-color:#7f7f7f;background-color:rgba(0,0,0,.5);-moz-border-radius:4px;-webkit-border-radius:4px;border-radius:4px;display:inline-block;padding:12px 0;line-height:1.2;position:relative}.ba-recorder-theme-space-dashboard .ba-videorecorder-bubble-info:before{border-top:9px solid;border-top-color:#7f7f7f;border-top-color:rgba(0,0,0,.5);border-left:6px solid transparent;border-right:6px solid transparent;content:\"\";height:0;left:16px;position:absolute;right:100%;top:100%;width:0}.ba-recorder-theme-space-dashboard .ba-videorecorder-controlbar-center-section{position:absolute;left:0;text-align:right;width:50%}.ba-recorder-theme-space-dashboard .ba-videorecorder-button-container{display:inline-block}.ba-recorder-theme-space-dashboard .ba-videorecorder-label-container{float:left;text-align:right;width:50%}.ba-recorder-theme-space-dashboard .ba-videorecorder-label-container .ba-videorecorder-button-primary{color:#fff;background-color:#979797;background-color:rgba(0,0,0,.4)}.ba-recorder-theme-space-dashboard .ba-videorecorder-stop-button-container{float:right;text-align:left;width:50%}.ba-recorder-theme-space-dashboard .ba-commoncss-icon-cog{position:relative;top:1px}.ba-recorder-theme-space.ba-videorecorder-container .ba-videorecorder-imagegallery-container{left:50px;right:50px}.ba-recorder-overlay img,.ba-videorecorder-imagegallery-image{border:none;-moz-border-radius:3px;-webkit-border-radius:3px;border-radius:3px}.ba-videorecorderimagegallery-image:hover{border:2px solid #fff}.ba-videorecorder-imagegallery-leftbutton,.ba-videorecorder-imagegallery-rightbutton{border-radius:50%;background-color:#979797;background-color:rgba(0,0,0,.4);height:30px;width:30px;z-index:10}.ba-recorder-theme-space .ba-videorecorder-topmessage-message{background-color:#eee;-moz-border-radius:18px;-webkit-border-radius:18px;border-radius:18px;color:#979797;opacity:.75;display:inline-block;font-family:sans-serif;font-size:12px;font-weight:300;padding:6px;position:relative;margin:15px 0 0 15px}.ba-recorder-theme-space .ba-videorecorder-topmessage-background{background:0 0}.ba-imageviewer-space-theme-red-color .ba-imageviewer-title>p,.ba-imageviewer-space-theme-red-color.ba-imageviewer-ie8 .ba-imageviewer-button-inner,.ba-imageviewer-space-theme-red-color.ba-imageviewer-noie8 .ba-imageviewer-button-inner{color:#eb6a74}.ba-imageviewer-space-theme-red-color .ba-imageviewer-rerecord-button{background-color:#eb6a74}.ba-imageviewer-space-theme-blue-color .ba-imageviewer-title>p,.ba-imageviewer-space-theme-blue-color.ba-imageviewer-ie8 .ba-imageviewer-button-inner,.ba-imageviewer-space-theme-blue-color.ba-imageviewer-noie8 .ba-imageviewer-button-inner{color:#2a74eb}.ba-imageviewer-space-theme-blue-color .ba-imageviewer-rerecord-button{background-color:#2a74eb}.ba-imageviewer-space-theme-green-color .ba-imageviewer-title>p,.ba-imageviewer-space-theme-green-color.ba-imageviewer-ie8 .ba-imageviewer-button-inner,.ba-imageviewer-space-theme-green-color.ba-imageviewer-noie8 .ba-imageviewer-button-inner{color:#5daa96}.ba-imageviewer-space-theme-green-color .ba-imageviewer-rerecord-button{background-color:#5daa96}.ba-imageviewer-space-theme .ba-imageviewer-image-title-container{position:absolute;left:0;right:0;top:0;background-color:#cecece;background-color:rgba(0,0,0,.2);transition:opacity .5s ease-in-out;-moz-transition:opacity .5s ease-in-out;-webkit-transition:opacity .5s ease-in-out;-o-transition:opacity .5s ease-in-out;-ms-transition:opacity .5s ease-in-out;box-sizing:border-box;font-size:.65rem;font-weight:300;height:32px;letter-spacing:.05rem;line-height:32px;padding:0 3px 0 12px;text-align:center}.ba-imageviewer-space-theme.ba-imageviewer-ie8 .ba-imageviewer-image-title-container .ba-imageviewer-button-inner{margin-top:0}.ba-imageviewer-space-theme .ba-imageviewer-controlbar-footer{position:absolute;left:0;right:0;bottom:0;background-color:#cecece;background-color:rgba(0,0,0,.4);transition:opacity .5s ease-in-out;-moz-transition:opacity .5s ease-in-out;-webkit-transition:opacity .5s ease-in-out;-o-transition:opacity .5s ease-in-out;-ms-transition:opacity .5s ease-in-out;height:40px;padding:0 5px}.ba-imageviewer-space-theme.ba-imageviewer-ie8 .ba-imageviewer-controlbar-footer,.ba-imageviewer-space-theme.ba-imageviewer-ie8 .ba-imageviewer-image-title-container{opacity:.8}.ba-imageviewer-space-theme .ba-imageviewer-dashboard-hidden{opacity:0}.ba-imageviewer-space-theme.ba-imageviewer-noie8 .ba-imageviewer-image-title-container .css-rightbutton-container{width:21px}.ba-imageviewer-space-theme .ba-imageviewer-image-title-container-background{position:relative;height:40px}.ba-imageviewer-space-theme .ba-imageviewer-title{float:left;color:#eee}.ba-imageviewer-space-theme .ba-imageviewer-title>p{margin:0;font-size:12px;font-family:sans-serif}.ba-imageviewer-space-theme.ba-imageviewer-noie8 .ba-imageviewer-image-title-container .ba-imageviewer-button-inner{-webkit-transform:translateY(0);-moz-transform:translateY(0);-o-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0)}.ba-imageviewer-space-theme.ba-imageviewer-noie8 .ba-imageviewer-topmessage-container .ba-imageviewer-rightbutton-container{width:25px}.ba-imageviewer-space-theme .ba-imageviewer-leftbutton-container{float:left;width:30px;height:100%;cursor:pointer;box-sizing:content-box;border:none;margin-right:10px}.ba-imageviewer-space-theme.ba-imageviewer-noie8 .ba-imageviewer-rightbutton-container{float:right;width:auto;height:100%;cursor:pointer;box-sizing:content-box;border:none}.ba-imageviewer-space-theme.ba-imageviewer-ie8 .ba-imageviewer-rightbutton-container{float:right;width:auto;height:50%;cursor:pointer;box-sizing:content-box;border:none}.ba-imageviewer-space-theme .ba-imageviewer-rightbutton-container{margin:0 5px}.ba-imageviewer-space-theme .ba-imageviewer-right-time-container{padding-right:10px}.ba-imageviewer-space-theme.ba-imageviewer-noie8 .ba-imageviewer-button-inner{color:#eee;font-size:13px}.ba-imageviewer-space-theme .ba-imageviewer-button-inner{cursor:pointer}.ba-imageviewer-space-theme.ba-imageviewer-noie8 .ba-imageviewer-controlbar-footer .ba-imageviewer-button-inner{-webkit-transform:translateY(-50%);-moz-transform:translateY(-50%);-o-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);top:50%;position:relative;text-align:center}.ba-imageviewer-space-theme.ba-imageviewer-ie8 .ba-imageviewer-button-inner{color:#eee;font-size:13px;height:auto;margin-top:14px;margin-left:3px;text-align:center}.ba-imageviewer-space-theme .ba-imageviewer-button-text{font-family:Arial,sans-serif;font-weight:400;font-size:10px}.ba-imageviewer-space-theme.ba-imageviewer-noie8 .ba-imageviewer-full-screen-btn-inner{text-align:left;padding-left:4px}.ba-imageviewer-fullscreen-view.ba-imageviewer-space-theme .ba-imageviewer-dashboard,.ba-imageviewer-fullscreen-view.ba-imageviewer-space-theme .ba-imageviewer-image-title-container{position:fixed;width:100%;z-index:1010}.ba-imageviewer-fullscreen-view.ba-imageviewer-space-theme .ba-imageviewer-dashboard{bottom:0}.ba-imageviewer-fullscreen-view.ba-imageviewer-space-theme .ba-imageviewer-image-title-container{top:0}.ba-imageviewer-space-theme.ba-imageviewer-noie8 .ba-imageviewer-topmessage-message .css-rightbutton-container{width:21px}.ba-imageviewer-space-theme .ba-imageviewer-topmessage-background{position:relative;height:40px}.ba-imageviewer-space-theme .ba-imageviewer-topmessage-message{padding:0;padding-left:20px;padding-right:15px;line-height:40px;text-align:left;font-size:.65rem;letter-spacing:.05rem;font-weight:300}.ba-imageviewer-space-theme .ba-imageviewer-title{float:left}.ba-imageviewer-space-theme.ba-imageviewer-noie8 .ba-imageviewer-topmessage-message .ba-imageviewer-button-inner{-webkit-transform:translateY(0);-moz-transform:translateY(0);-o-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0)}.ba-imageviewer-space-theme.ba-imageviewer-noie8 .ba-imageviewer-topmessage-container .ba-imageviewer-rightbutton-container{width:25px}.ba-audioplayer-container{box-sizing:border-box;border:1px solid #eee;height:73px;min-height:73px;min-width:320px}.ba-audioplayer-container.ba-player-space-theme .ba-player-space-theme-progressbar-button{-moz-border-radius:50%;-webkit-border-radius:50%;border-radius:50%;background-color:#eee;box-sizing:content-box;border:none;position:absolute;right:-5px;top:-2.5px;z-index:1;width:8px;height:8px}.ba-audioplayer-container.ba-player-space-theme.ba-player-size-medium .ba-player-space-theme-time-container,.ba-audioplayer-container.ba-player-space-theme.ba-player-size-small .ba-player-space-theme-time-container{display:block}.ba-audioplayer-container.ba-player-space-theme.ba-player-size-medium .ba-player-space-theme-volumebar,.ba-audioplayer-container.ba-player-space-theme.ba-player-size-small .ba-player-space-theme-volumebar{display:block}.ba-audioplayer-container.ba-player-space-theme.ba-player-size-medium .ba-player-space-theme-volume-button-container,.ba-audioplayer-container.ba-player-space-theme.ba-player-size-small .ba-player-space-theme-volume-button-container{display:block}.ba-audioplayer-ie8 .ba-player-space-theme-title-container .ba-player-space-theme-button-inner{margin-top:0}.ba-audioplayer-ie8 .ba-player-space-theme-controlbar-footer,.ba-audioplayer-ie8 .ba-player-space-theme-title-container{opacity:.8}.ba-audioplayer-noie8 .ba-player-space-theme-title-container .css-rightbutton-container{width:21px}.ba-audioplayer-noie8 .ba-player-space-theme-rightbutton-container{float:right;width:auto;height:100%;cursor:pointer;box-sizing:content-box;border:none}.ba-audioplayer-ie8 .ba-player-space-theme-rightbutton-container{float:right;width:auto;height:50%;cursor:pointer;box-sizing:content-box;border:none}.ba-audioplayer-noie8 .ba-player-space-theme-button-inner{color:#eee;font-size:13px}.ba-audioplayer-noie8 .ba-player-space-theme-controlbar-footer .ba-player-space-theme-button-inner{-webkit-transform:translateY(-50%);-moz-transform:translateY(-50%);-o-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);top:50%;position:relative;text-align:center}.ba-audioplayer-ie8 .ba-player-space-theme-button-inner{color:#eee;font-size:13px;height:auto;margin-top:14px;margin-left:3px;text-align:center}.ba-audioplayer-noie8 .ba-player-space-theme-volumebar{float:right;width:60px;height:100%;margin-right:12px}.ba-audioplayer-ie8 .ba-player-space-theme-volumebar{float:right;width:60px;height:50%;margin-top:14px;margin-right:12px}.ba-audioplayer-noie8 .ba-player-space-theme-progressbar{overflow:hidden;height:100%;padding-left:6px;padding-right:6px}.ba-audioplayer-ie8 .ba-player-space-theme-progressbar{overflow:hidden;height:50%;padding-left:12px;padding-right:12px;margin-right:30px;margin-top:10px}.ziggeo-v2-testing{height:24px;background-image:url(" + __webpack_require__(331) + ");background-size:contain;background-repeat:no-repeat;background-position:center center;position:absolute;bottom:46px;left:0;right:0}", ""]);

// exports


/***/ }),
/* 321 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function() {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		var result = [];
		for(var i = 0; i < this.length; i++) {
			var item = this[i];
			if(item[2]) {
				result.push("@media " + item[2] + "{" + item[1] + "}");
			} else {
				result.push(item[1]);
			}
		}
		return result.join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};


/***/ }),
/* 322 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),
/* 323 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var printWarning = function() {};

if (process.env.NODE_ENV !== 'production') {
  var ReactPropTypesSecret = __webpack_require__(92);
  var loggedTypeFailures = {};
  var has = Function.call.bind(Object.prototype.hasOwnProperty);

  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (process.env.NODE_ENV !== 'production') {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes.resetWarningCache = function() {
  if (process.env.NODE_ENV !== 'production') {
    loggedTypeFailures = {};
  }
}

module.exports = checkPropTypes;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(49)))

/***/ }),
/* 324 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = __webpack_require__(92);

function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,

    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };

  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),
/* 325 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactIs = __webpack_require__(127);
var assign = __webpack_require__(322);

var ReactPropTypesSecret = __webpack_require__(92);
var checkPropTypes = __webpack_require__(323);

var has = Function.call.bind(Object.prototype.hasOwnProperty);
var printWarning = function() {};

if (process.env.NODE_ENV !== 'production') {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (process.env.NODE_ENV !== 'production') {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!ReactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (process.env.NODE_ENV !== 'production') {
        if (arguments.length > 1) {
          printWarning(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
      process.env.NODE_ENV !== 'production' ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(49)))

/***/ }),
/* 326 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (process.env.NODE_ENV !== "production") {
  (function() {
'use strict';

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(49)))

/***/ }),
/* 327 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var b="function"===typeof Symbol&&Symbol.for,c=b?Symbol.for("react.element"):60103,d=b?Symbol.for("react.portal"):60106,e=b?Symbol.for("react.fragment"):60107,f=b?Symbol.for("react.strict_mode"):60108,g=b?Symbol.for("react.profiler"):60114,h=b?Symbol.for("react.provider"):60109,k=b?Symbol.for("react.context"):60110,l=b?Symbol.for("react.async_mode"):60111,m=b?Symbol.for("react.concurrent_mode"):60111,n=b?Symbol.for("react.forward_ref"):60112,p=b?Symbol.for("react.suspense"):60113,q=b?
Symbol.for("react.suspense_list"):60120,r=b?Symbol.for("react.memo"):60115,t=b?Symbol.for("react.lazy"):60116,v=b?Symbol.for("react.block"):60121,w=b?Symbol.for("react.fundamental"):60117,x=b?Symbol.for("react.responder"):60118,y=b?Symbol.for("react.scope"):60119;
function z(a){if("object"===typeof a&&null!==a){var u=a.$$typeof;switch(u){case c:switch(a=a.type,a){case l:case m:case e:case g:case f:case p:return a;default:switch(a=a&&a.$$typeof,a){case k:case n:case t:case r:case h:return a;default:return u}}case d:return u}}}function A(a){return z(a)===m}exports.AsyncMode=l;exports.ConcurrentMode=m;exports.ContextConsumer=k;exports.ContextProvider=h;exports.Element=c;exports.ForwardRef=n;exports.Fragment=e;exports.Lazy=t;exports.Memo=r;exports.Portal=d;
exports.Profiler=g;exports.StrictMode=f;exports.Suspense=p;exports.isAsyncMode=function(a){return A(a)||z(a)===l};exports.isConcurrentMode=A;exports.isContextConsumer=function(a){return z(a)===k};exports.isContextProvider=function(a){return z(a)===h};exports.isElement=function(a){return"object"===typeof a&&null!==a&&a.$$typeof===c};exports.isForwardRef=function(a){return z(a)===n};exports.isFragment=function(a){return z(a)===e};exports.isLazy=function(a){return z(a)===t};
exports.isMemo=function(a){return z(a)===r};exports.isPortal=function(a){return z(a)===d};exports.isProfiler=function(a){return z(a)===g};exports.isStrictMode=function(a){return z(a)===f};exports.isSuspense=function(a){return z(a)===p};
exports.isValidElementType=function(a){return"string"===typeof a||"function"===typeof a||a===e||a===m||a===g||a===f||a===p||a===q||"object"===typeof a&&null!==a&&(a.$$typeof===t||a.$$typeof===r||a.$$typeof===h||a.$$typeof===k||a.$$typeof===n||a.$$typeof===w||a.$$typeof===x||a.$$typeof===y||a.$$typeof===v)};exports.typeOf=z;


/***/ }),
/* 328 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : {}
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}


/***/ }),
/* 329 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var stylesInDom = {},
	memoize = function(fn) {
		var memo;
		return function () {
			if (typeof memo === "undefined") memo = fn.apply(this, arguments);
			return memo;
		};
	},
	isOldIE = memoize(function() {
		return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase());
	}),
	getHeadElement = memoize(function () {
		return document.head || document.getElementsByTagName("head")[0];
	}),
	singletonElement = null,
	singletonCounter = 0,
	styleElementsInsertedAtTop = [];

module.exports = function(list, options) {
	if(typeof DEBUG !== "undefined" && DEBUG) {
		if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};
	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (typeof options.singleton === "undefined") options.singleton = isOldIE();

	// By default, add <style> tags to the bottom of <head>.
	if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

	var styles = listToStyles(list);
	addStylesToDom(styles, options);

	return function update(newList) {
		var mayRemove = [];
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			domStyle.refs--;
			mayRemove.push(domStyle);
		}
		if(newList) {
			var newStyles = listToStyles(newList);
			addStylesToDom(newStyles, options);
		}
		for(var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];
			if(domStyle.refs === 0) {
				for(var j = 0; j < domStyle.parts.length; j++)
					domStyle.parts[j]();
				delete stylesInDom[domStyle.id];
			}
		}
	};
}

function addStylesToDom(styles, options) {
	for(var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];
		if(domStyle) {
			domStyle.refs++;
			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}
			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];
			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}
			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles(list) {
	var styles = [];
	var newStyles = {};
	for(var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};
		if(!newStyles[id])
			styles.push(newStyles[id] = {id: id, parts: [part]});
		else
			newStyles[id].parts.push(part);
	}
	return styles;
}

function insertStyleElement(options, styleElement) {
	var head = getHeadElement();
	var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
	if (options.insertAt === "top") {
		if(!lastStyleElementInsertedAtTop) {
			head.insertBefore(styleElement, head.firstChild);
		} else if(lastStyleElementInsertedAtTop.nextSibling) {
			head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			head.appendChild(styleElement);
		}
		styleElementsInsertedAtTop.push(styleElement);
	} else if (options.insertAt === "bottom") {
		head.appendChild(styleElement);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement(styleElement) {
	styleElement.parentNode.removeChild(styleElement);
	var idx = styleElementsInsertedAtTop.indexOf(styleElement);
	if(idx >= 0) {
		styleElementsInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement(options) {
	var styleElement = document.createElement("style");
	styleElement.type = "text/css";
	insertStyleElement(options, styleElement);
	return styleElement;
}

function createLinkElement(options) {
	var linkElement = document.createElement("link");
	linkElement.rel = "stylesheet";
	insertStyleElement(options, linkElement);
	return linkElement;
}

function addStyle(obj, options) {
	var styleElement, update, remove;

	if (options.singleton) {
		var styleIndex = singletonCounter++;
		styleElement = singletonElement || (singletonElement = createStyleElement(options));
		update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
		remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
	} else if(obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function") {
		styleElement = createLinkElement(options);
		update = updateLink.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
			if(styleElement.href)
				URL.revokeObjectURL(styleElement.href);
		};
	} else {
		styleElement = createStyleElement(options);
		update = applyToTag.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
		};
	}

	update(obj);

	return function updateStyle(newObj) {
		if(newObj) {
			if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
				return;
			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;
		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag(styleElement, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (styleElement.styleSheet) {
		styleElement.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = styleElement.childNodes;
		if (childNodes[index]) styleElement.removeChild(childNodes[index]);
		if (childNodes.length) {
			styleElement.insertBefore(cssNode, childNodes[index]);
		} else {
			styleElement.appendChild(cssNode);
		}
	}
}

function applyToTag(styleElement, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		styleElement.setAttribute("media", media)
	}

	if(styleElement.styleSheet) {
		styleElement.styleSheet.cssText = css;
	} else {
		while(styleElement.firstChild) {
			styleElement.removeChild(styleElement.firstChild);
		}
		styleElement.appendChild(document.createTextNode(css));
	}
}

function updateLink(linkElement, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	if(sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = linkElement.href;

	linkElement.href = URL.createObjectURL(blob);

	if(oldSrc)
		URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 330 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(320);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(329)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../css-loader/index.js!./ziggeo.css", function() {
			var newContent = require("!!../../css-loader/index.js!./ziggeo.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 331 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),
/* 332 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "7931a455ff01e1a2f95b669a9283c6a7.eot";

/***/ }),
/* 333 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 334 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, module) {/*!
ziggeo-client-sdk - v2.39.16 - 2022-01-24
Copyright (c) Ziggeo
Closed Source Software License.
*/

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(128), __webpack_require__(333)(module)))

/***/ }),
/* 335 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(129);


/***/ })
/******/ ]);
});
//# sourceMappingURL=index.js.map