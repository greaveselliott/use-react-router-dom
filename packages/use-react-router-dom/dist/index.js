(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("react-router"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "react-router"], factory);
	else if(typeof exports === 'object')
		exports["UseReactRouterDom"] = factory(require("react"), require("react-router"));
	else
		root["UseReactRouterDom"] = factory(root["react"], root["react-router"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE_react__, __WEBPACK_EXTERNAL_MODULE_react_router__) {
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/decode-uri-component/index.js":
/*!****************************************************!*\
  !*** ./node_modules/decode-uri-component/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar token = '%[a-f0-9]{2}';\nvar singleMatcher = new RegExp(token, 'gi');\nvar multiMatcher = new RegExp('(' + token + ')+', 'gi');\n\nfunction decodeComponents(components, split) {\n\ttry {\n\t\t// Try to decode the entire string first\n\t\treturn decodeURIComponent(components.join(''));\n\t} catch (err) {\n\t\t// Do nothing\n\t}\n\n\tif (components.length === 1) {\n\t\treturn components;\n\t}\n\n\tsplit = split || 1;\n\n\t// Split the array in 2 parts\n\tvar left = components.slice(0, split);\n\tvar right = components.slice(split);\n\n\treturn Array.prototype.concat.call([], decodeComponents(left), decodeComponents(right));\n}\n\nfunction decode(input) {\n\ttry {\n\t\treturn decodeURIComponent(input);\n\t} catch (err) {\n\t\tvar tokens = input.match(singleMatcher);\n\n\t\tfor (var i = 1; i < tokens.length; i++) {\n\t\t\tinput = decodeComponents(tokens, i).join('');\n\n\t\t\ttokens = input.match(singleMatcher);\n\t\t}\n\n\t\treturn input;\n\t}\n}\n\nfunction customDecodeURIComponent(input) {\n\t// Keep track of all the replacements and prefill the map with the `BOM`\n\tvar replaceMap = {\n\t\t'%FE%FF': '\\uFFFD\\uFFFD',\n\t\t'%FF%FE': '\\uFFFD\\uFFFD'\n\t};\n\n\tvar match = multiMatcher.exec(input);\n\twhile (match) {\n\t\ttry {\n\t\t\t// Decode as big chunks as possible\n\t\t\treplaceMap[match[0]] = decodeURIComponent(match[0]);\n\t\t} catch (err) {\n\t\t\tvar result = decode(match[0]);\n\n\t\t\tif (result !== match[0]) {\n\t\t\t\treplaceMap[match[0]] = result;\n\t\t\t}\n\t\t}\n\n\t\tmatch = multiMatcher.exec(input);\n\t}\n\n\t// Add `%C2` at the end of the map to make sure it does not replace the combinator before everything else\n\treplaceMap['%C2'] = '\\uFFFD';\n\n\tvar entries = Object.keys(replaceMap);\n\n\tfor (var i = 0; i < entries.length; i++) {\n\t\t// Replace all decoded components\n\t\tvar key = entries[i];\n\t\tinput = input.replace(new RegExp(key, 'g'), replaceMap[key]);\n\t}\n\n\treturn input;\n}\n\nmodule.exports = function (encodedURI) {\n\tif (typeof encodedURI !== 'string') {\n\t\tthrow new TypeError('Expected `encodedURI` to be of type `string`, got `' + typeof encodedURI + '`');\n\t}\n\n\ttry {\n\t\tencodedURI = encodedURI.replace(/\\+/g, ' ');\n\n\t\t// Try the built in decoder first\n\t\treturn decodeURIComponent(encodedURI);\n\t} catch (err) {\n\t\t// Fallback to a more advanced decoder\n\t\treturn customDecodeURIComponent(encodedURI);\n\t}\n};\n\n\n//# sourceURL=webpack://UseReactRouterDom/./node_modules/decode-uri-component/index.js?");

/***/ }),

/***/ "./node_modules/query-string/index.js":
/*!********************************************!*\
  !*** ./node_modules/query-string/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nconst strictUriEncode = __webpack_require__(/*! strict-uri-encode */ \"./node_modules/strict-uri-encode/index.js\");\nconst decodeComponent = __webpack_require__(/*! decode-uri-component */ \"./node_modules/decode-uri-component/index.js\");\nconst splitOnFirst = __webpack_require__(/*! split-on-first */ \"./node_modules/split-on-first/index.js\");\n\nfunction encoderForArrayFormat(options) {\n\tswitch (options.arrayFormat) {\n\t\tcase 'index':\n\t\t\treturn key => (result, value) => {\n\t\t\t\tconst index = result.length;\n\t\t\t\tif (value === undefined) {\n\t\t\t\t\treturn result;\n\t\t\t\t}\n\n\t\t\t\tif (value === null) {\n\t\t\t\t\treturn [...result, [encode(key, options), '[', index, ']'].join('')];\n\t\t\t\t}\n\n\t\t\t\treturn [\n\t\t\t\t\t...result,\n\t\t\t\t\t[encode(key, options), '[', encode(index, options), ']=', encode(value, options)].join('')\n\t\t\t\t];\n\t\t\t};\n\n\t\tcase 'bracket':\n\t\t\treturn key => (result, value) => {\n\t\t\t\tif (value === undefined) {\n\t\t\t\t\treturn result;\n\t\t\t\t}\n\n\t\t\t\tif (value === null) {\n\t\t\t\t\treturn [...result, [encode(key, options), '[]'].join('')];\n\t\t\t\t}\n\n\t\t\t\treturn [...result, [encode(key, options), '[]=', encode(value, options)].join('')];\n\t\t\t};\n\n\t\tcase 'comma':\n\t\t\treturn key => (result, value, index) => {\n\t\t\t\tif (value === null || value === undefined || value.length === 0) {\n\t\t\t\t\treturn result;\n\t\t\t\t}\n\n\t\t\t\tif (index === 0) {\n\t\t\t\t\treturn [[encode(key, options), '=', encode(value, options)].join('')];\n\t\t\t\t}\n\n\t\t\t\treturn [[result, encode(value, options)].join(',')];\n\t\t\t};\n\n\t\tdefault:\n\t\t\treturn key => (result, value) => {\n\t\t\t\tif (value === undefined) {\n\t\t\t\t\treturn result;\n\t\t\t\t}\n\n\t\t\t\tif (value === null) {\n\t\t\t\t\treturn [...result, encode(key, options)];\n\t\t\t\t}\n\n\t\t\t\treturn [...result, [encode(key, options), '=', encode(value, options)].join('')];\n\t\t\t};\n\t}\n}\n\nfunction parserForArrayFormat(options) {\n\tlet result;\n\n\tswitch (options.arrayFormat) {\n\t\tcase 'index':\n\t\t\treturn (key, value, accumulator) => {\n\t\t\t\tresult = /\\[(\\d*)\\]$/.exec(key);\n\n\t\t\t\tkey = key.replace(/\\[\\d*\\]$/, '');\n\n\t\t\t\tif (!result) {\n\t\t\t\t\taccumulator[key] = value;\n\t\t\t\t\treturn;\n\t\t\t\t}\n\n\t\t\t\tif (accumulator[key] === undefined) {\n\t\t\t\t\taccumulator[key] = {};\n\t\t\t\t}\n\n\t\t\t\taccumulator[key][result[1]] = value;\n\t\t\t};\n\n\t\tcase 'bracket':\n\t\t\treturn (key, value, accumulator) => {\n\t\t\t\tresult = /(\\[\\])$/.exec(key);\n\t\t\t\tkey = key.replace(/\\[\\]$/, '');\n\n\t\t\t\tif (!result) {\n\t\t\t\t\taccumulator[key] = value;\n\t\t\t\t\treturn;\n\t\t\t\t}\n\n\t\t\t\tif (accumulator[key] === undefined) {\n\t\t\t\t\taccumulator[key] = [value];\n\t\t\t\t\treturn;\n\t\t\t\t}\n\n\t\t\t\taccumulator[key] = [].concat(accumulator[key], value);\n\t\t\t};\n\n\t\tcase 'comma':\n\t\t\treturn (key, value, accumulator) => {\n\t\t\t\tconst isArray = typeof value === 'string' && value.split('').indexOf(',') > -1;\n\t\t\t\tconst newValue = isArray ? value.split(',') : value;\n\t\t\t\taccumulator[key] = newValue;\n\t\t\t};\n\n\t\tdefault:\n\t\t\treturn (key, value, accumulator) => {\n\t\t\t\tif (accumulator[key] === undefined) {\n\t\t\t\t\taccumulator[key] = value;\n\t\t\t\t\treturn;\n\t\t\t\t}\n\n\t\t\t\taccumulator[key] = [].concat(accumulator[key], value);\n\t\t\t};\n\t}\n}\n\nfunction encode(value, options) {\n\tif (options.encode) {\n\t\treturn options.strict ? strictUriEncode(value) : encodeURIComponent(value);\n\t}\n\n\treturn value;\n}\n\nfunction decode(value, options) {\n\tif (options.decode) {\n\t\treturn decodeComponent(value);\n\t}\n\n\treturn value;\n}\n\nfunction keysSorter(input) {\n\tif (Array.isArray(input)) {\n\t\treturn input.sort();\n\t}\n\n\tif (typeof input === 'object') {\n\t\treturn keysSorter(Object.keys(input))\n\t\t\t.sort((a, b) => Number(a) - Number(b))\n\t\t\t.map(key => input[key]);\n\t}\n\n\treturn input;\n}\n\nfunction removeHash(input) {\n\tconst hashStart = input.indexOf('#');\n\tif (hashStart !== -1) {\n\t\tinput = input.slice(0, hashStart);\n\t}\n\n\treturn input;\n}\n\nfunction extract(input) {\n\tinput = removeHash(input);\n\tconst queryStart = input.indexOf('?');\n\tif (queryStart === -1) {\n\t\treturn '';\n\t}\n\n\treturn input.slice(queryStart + 1);\n}\n\nfunction parse(input, options) {\n\toptions = Object.assign({\n\t\tdecode: true,\n\t\tsort: true,\n\t\tarrayFormat: 'none',\n\t\tparseNumbers: false,\n\t\tparseBooleans: false\n\t}, options);\n\n\tconst formatter = parserForArrayFormat(options);\n\n\t// Create an object with no prototype\n\tconst ret = Object.create(null);\n\n\tif (typeof input !== 'string') {\n\t\treturn ret;\n\t}\n\n\tinput = input.trim().replace(/^[?#&]/, '');\n\n\tif (!input) {\n\t\treturn ret;\n\t}\n\n\tfor (const param of input.split('&')) {\n\t\tlet [key, value] = splitOnFirst(param.replace(/\\+/g, ' '), '=');\n\n\t\t// Missing `=` should be `null`:\n\t\t// http://w3.org/TR/2012/WD-url-20120524/#collect-url-parameters\n\t\tvalue = value === undefined ? null : decode(value, options);\n\n\t\tif (options.parseNumbers && !Number.isNaN(Number(value)) && (typeof value === 'string' && value.trim() !== '')) {\n\t\t\tvalue = Number(value);\n\t\t} else if (options.parseBooleans && value !== null && (value.toLowerCase() === 'true' || value.toLowerCase() === 'false')) {\n\t\t\tvalue = value.toLowerCase() === 'true';\n\t\t}\n\n\t\tformatter(decode(key, options), value, ret);\n\t}\n\n\tif (options.sort === false) {\n\t\treturn ret;\n\t}\n\n\treturn (options.sort === true ? Object.keys(ret).sort() : Object.keys(ret).sort(options.sort)).reduce((result, key) => {\n\t\tconst value = ret[key];\n\t\tif (Boolean(value) && typeof value === 'object' && !Array.isArray(value)) {\n\t\t\t// Sort object keys, not values\n\t\t\tresult[key] = keysSorter(value);\n\t\t} else {\n\t\t\tresult[key] = value;\n\t\t}\n\n\t\treturn result;\n\t}, Object.create(null));\n}\n\nexports.extract = extract;\nexports.parse = parse;\n\nexports.stringify = (object, options) => {\n\tif (!object) {\n\t\treturn '';\n\t}\n\n\toptions = Object.assign({\n\t\tencode: true,\n\t\tstrict: true,\n\t\tarrayFormat: 'none'\n\t}, options);\n\n\tconst formatter = encoderForArrayFormat(options);\n\tconst keys = Object.keys(object);\n\n\tif (options.sort !== false) {\n\t\tkeys.sort(options.sort);\n\t}\n\n\treturn keys.map(key => {\n\t\tconst value = object[key];\n\n\t\tif (value === undefined) {\n\t\t\treturn '';\n\t\t}\n\n\t\tif (value === null) {\n\t\t\treturn encode(key, options);\n\t\t}\n\n\t\tif (Array.isArray(value)) {\n\t\t\treturn value\n\t\t\t\t.reduce(formatter(key), [])\n\t\t\t\t.join('&');\n\t\t}\n\n\t\treturn encode(key, options) + '=' + encode(value, options);\n\t}).filter(x => x.length > 0).join('&');\n};\n\nexports.parseUrl = (input, options) => {\n\treturn {\n\t\turl: removeHash(input).split('?')[0] || '',\n\t\tquery: parse(extract(input), options)\n\t};\n};\n\n\n//# sourceURL=webpack://UseReactRouterDom/./node_modules/query-string/index.js?");

/***/ }),

/***/ "./node_modules/split-on-first/index.js":
/*!**********************************************!*\
  !*** ./node_modules/split-on-first/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = (string, separator) => {\n\tif (!(typeof string === 'string' && typeof separator === 'string')) {\n\t\tthrow new TypeError('Expected the arguments to be of type `string`');\n\t}\n\n\tif (separator === '') {\n\t\treturn [string];\n\t}\n\n\tconst separatorIndex = string.indexOf(separator);\n\n\tif (separatorIndex === -1) {\n\t\treturn [string];\n\t}\n\n\treturn [\n\t\tstring.slice(0, separatorIndex),\n\t\tstring.slice(separatorIndex + separator.length)\n\t];\n};\n\n\n//# sourceURL=webpack://UseReactRouterDom/./node_modules/split-on-first/index.js?");

/***/ }),

/***/ "./node_modules/strict-uri-encode/index.js":
/*!*************************************************!*\
  !*** ./node_modules/strict-uri-encode/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nmodule.exports = str => encodeURIComponent(str).replace(/[!'()*]/g, x => `%${x.charCodeAt(0).toString(16).toUpperCase()}`);\n\n\n//# sourceURL=webpack://UseReactRouterDom/./node_modules/strict-uri-encode/index.js?");

/***/ }),

/***/ "./node_modules/uri-templates/uri-templates.js":
/*!*****************************************************!*\
  !*** ./node_modules/uri-templates/uri-templates.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {\n\tif (true) {\n\t\t!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?\n\t\t\t\t(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n\t} else {}\n})(this, function () {\n\tvar uriTemplateGlobalModifiers = {\n\t\t\"+\": true,\n\t\t\"#\": true,\n\t\t\".\": true,\n\t\t\"/\": true,\n\t\t\";\": true,\n\t\t\"?\": true,\n\t\t\"&\": true\n\t};\n\tvar uriTemplateSuffices = {\n\t\t\"*\": true\n\t};\n\tvar urlEscapedChars = /[:/&?#]/;\n\n\tfunction notReallyPercentEncode(string) {\n\t\treturn encodeURI(string).replace(/%25[0-9][0-9]/g, function (doubleEncoded) {\n\t\t\treturn \"%\" + doubleEncoded.substring(3);\n\t\t});\n\t}\n\n\tfunction isPercentEncoded(string) {\n\t\tstring = string.replace(/%../g, '');\n\t\treturn encodeURIComponent(string) === string;\n\t}\n\n\tfunction uriTemplateSubstitution(spec) {\n\t\tvar modifier = \"\";\n\t\tif (uriTemplateGlobalModifiers[spec.charAt(0)]) {\n\t\t\tmodifier = spec.charAt(0);\n\t\t\tspec = spec.substring(1);\n\t\t}\n\t\tvar separator = \"\";\n\t\tvar prefix = \"\";\n\t\tvar shouldEscape = true;\n\t\tvar showVariables = false;\n\t\tvar trimEmptyString = false;\n\t\tif (modifier == '+') {\n\t\t\tshouldEscape = false;\n\t\t} else if (modifier == \".\") {\n\t\t\tprefix = \".\";\n\t\t\tseparator = \".\";\n\t\t} else if (modifier == \"/\") {\n\t\t\tprefix = \"/\";\n\t\t\tseparator = \"/\";\n\t\t} else if (modifier == '#') {\n\t\t\tprefix = \"#\";\n\t\t\tshouldEscape = false;\n\t\t} else if (modifier == ';') {\n\t\t\tprefix = \";\";\n\t\t\tseparator = \";\",\n\t\t\tshowVariables = true;\n\t\t\ttrimEmptyString = true;\n\t\t} else if (modifier == '?') {\n\t\t\tprefix = \"?\";\n\t\t\tseparator = \"&\",\n\t\t\tshowVariables = true;\n\t\t} else if (modifier == '&') {\n\t\t\tprefix = \"&\";\n\t\t\tseparator = \"&\",\n\t\t\tshowVariables = true;\n\t\t}\n\n\t\tvar varNames = [];\n\t\tvar varList = spec.split(\",\");\n\t\tvar varSpecs = [];\n\t\tvar varSpecMap = {};\n\t\tfor (var i = 0; i < varList.length; i++) {\n\t\t\tvar varName = varList[i];\n\t\t\tvar truncate = null;\n\t\t\tif (varName.indexOf(\":\") != -1) {\n\t\t\t\tvar parts = varName.split(\":\");\n\t\t\t\tvarName = parts[0];\n\t\t\t\ttruncate = parseInt(parts[1]);\n\t\t\t}\n\t\t\tvar suffices = {};\n\t\t\twhile (uriTemplateSuffices[varName.charAt(varName.length - 1)]) {\n\t\t\t\tsuffices[varName.charAt(varName.length - 1)] = true;\n\t\t\t\tvarName = varName.substring(0, varName.length - 1);\n\t\t\t}\n\t\t\tvar varSpec = {\n\t\t\t\ttruncate: truncate,\n\t\t\t\tname: varName,\n\t\t\t\tsuffices: suffices\n\t\t\t};\n\t\t\tvarSpecs.push(varSpec);\n\t\t\tvarSpecMap[varName] = varSpec;\n\t\t\tvarNames.push(varName);\n\t\t}\n\t\tvar subFunction = function (valueFunction) {\n\t\t\tvar result = \"\";\n\t\t\tvar startIndex = 0;\n\t\t\tfor (var i = 0; i < varSpecs.length; i++) {\n\t\t\t\tvar varSpec = varSpecs[i];\n\t\t\t\tvar value = valueFunction(varSpec.name);\n\t\t\t\tif (value == null || (Array.isArray(value) && value.length == 0) || (typeof value == 'object' && Object.keys(value).length == 0)) {\n\t\t\t\t\tstartIndex++;\n\t\t\t\t\tcontinue;\n\t\t\t\t}\n\t\t\t\tif (i == startIndex) {\n\t\t\t\t\tresult += prefix;\n\t\t\t\t} else {\n\t\t\t\t\tresult += (separator || \",\");\n\t\t\t\t}\n\t\t\t\tif (Array.isArray(value)) {\n\t\t\t\t\tif (showVariables) {\n\t\t\t\t\t\tresult += varSpec.name + \"=\";\n\t\t\t\t\t}\n\t\t\t\t\tfor (var j = 0; j < value.length; j++) {\n\t\t\t\t\t\tif (j > 0) {\n\t\t\t\t\t\t\tresult += varSpec.suffices['*'] ? (separator || \",\") : \",\";\n\t\t\t\t\t\t\tif (varSpec.suffices['*'] && showVariables) {\n\t\t\t\t\t\t\t\tresult += varSpec.name + \"=\";\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t\tresult += shouldEscape ? encodeURIComponent(value[j]).replace(/!/g, \"%21\") : notReallyPercentEncode(value[j]);\n\t\t\t\t\t}\n\t\t\t\t} else if (typeof value == \"object\") {\n\t\t\t\t\tif (showVariables && !varSpec.suffices['*']) {\n\t\t\t\t\t\tresult += varSpec.name + \"=\";\n\t\t\t\t\t}\n\t\t\t\t\tvar first = true;\n\t\t\t\t\tfor (var key in value) {\n\t\t\t\t\t\tif (!first) {\n\t\t\t\t\t\t\tresult += varSpec.suffices['*'] ? (separator || \",\") : \",\";\n\t\t\t\t\t\t}\n\t\t\t\t\t\tfirst = false;\n\t\t\t\t\t\tresult += shouldEscape ? encodeURIComponent(key).replace(/!/g, \"%21\") : notReallyPercentEncode(key);\n\t\t\t\t\t\tresult += varSpec.suffices['*'] ? '=' : \",\";\n\t\t\t\t\t\tresult += shouldEscape ? encodeURIComponent(value[key]).replace(/!/g, \"%21\") : notReallyPercentEncode(value[key]);\n\t\t\t\t\t}\n\t\t\t\t} else {\n\t\t\t\t\tif (showVariables) {\n\t\t\t\t\t\tresult += varSpec.name;\n\t\t\t\t\t\tif (!trimEmptyString || value != \"\") {\n\t\t\t\t\t\t\tresult += \"=\";\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t\tif (varSpec.truncate != null) {\n\t\t\t\t\t\tvalue = value.substring(0, varSpec.truncate);\n\t\t\t\t\t}\n\t\t\t\t\tresult += shouldEscape ? encodeURIComponent(value).replace(/!/g, \"%21\"): notReallyPercentEncode(value);\n\t\t\t\t}\n\t\t\t}\n\t\t\treturn result;\n\t\t};\n\t\tvar guessFunction = function (stringValue, resultObj, strict) {\n\t\t\tif (prefix) {\n\t\t\t\tstringValue = stringValue.substring(prefix.length);\n\t\t\t}\n\t\t\tif (varSpecs.length == 1 && varSpecs[0].suffices['*']) {\n\t\t\t\tvar varSpec = varSpecs[0];\n\t\t\t\tvar varName = varSpec.name;\n\t\t\t\tvar arrayValue = varSpec.suffices['*'] ? stringValue.split(separator || \",\") : [stringValue];\n\t\t\t\tvar hasEquals = (shouldEscape && stringValue.indexOf('=') != -1);\t// There's otherwise no way to distinguish between \"{value*}\" for arrays and objects\n\t\t\t\tfor (var i = 1; i < arrayValue.length; i++) {\n\t\t\t\t\tvar stringValue = arrayValue[i];\n\t\t\t\t\tif (hasEquals && stringValue.indexOf('=') == -1) {\n\t\t\t\t\t\t// Bit of a hack - if we're expecting \"=\" for key/value pairs, and values can't contain \"=\", then assume a value has been accidentally split\n\t\t\t\t\t\tarrayValue[i - 1] += (separator || \",\") + stringValue;\n\t\t\t\t\t\tarrayValue.splice(i, 1);\n\t\t\t\t\t\ti--;\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\tfor (var i = 0; i < arrayValue.length; i++) {\n\t\t\t\t\tvar stringValue = arrayValue[i];\n\t\t\t\t\tif (shouldEscape && stringValue.indexOf('=') != -1) {\n\t\t\t\t\t\thasEquals = true;\n\t\t\t\t\t}\n\t\t\t\t\tvar innerArrayValue = stringValue.split(\",\");\n\t\t\t\t\tif (innerArrayValue.length == 1) {\n\t\t\t\t\t\tarrayValue[i] = innerArrayValue[0];\n\t\t\t\t\t} else {\n\t\t\t\t\t\tarrayValue[i] = innerArrayValue;\n\t\t\t\t\t}\n\t\t\t\t}\n\n\t\t\t\tif (showVariables || hasEquals) {\n\t\t\t\t\tvar objectValue = resultObj[varName] || {};\n\t\t\t\t\tfor (var j = 0; j < arrayValue.length; j++) {\n\t\t\t\t\t\tvar innerValue = stringValue;\n\t\t\t\t\t\tif (showVariables && !innerValue) {\n\t\t\t\t\t\t\t// The empty string isn't a valid variable, so if our value is zero-length we have nothing\n\t\t\t\t\t\t\tcontinue;\n\t\t\t\t\t\t}\n\t\t\t\t\t\tif (typeof arrayValue[j] == \"string\") {\n\t\t\t\t\t\t\tvar stringValue = arrayValue[j];\n\t\t\t\t\t\t\tvar innerVarName = stringValue.split(\"=\", 1)[0];\n\t\t\t\t\t\t\tvar stringValue = stringValue.substring(innerVarName.length + 1);\n\t\t\t\t\t\t\tif (shouldEscape) {\n\t\t\t\t\t\t\t\tif (strict && !isPercentEncoded(stringValue)) {\n\t\t\t\t\t\t\t\t\treturn;\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\tstringValue = decodeURIComponent(stringValue);\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\tinnerValue = stringValue;\n\t\t\t\t\t\t} else {\n\t\t\t\t\t\t\tvar stringValue = arrayValue[j][0];\n\t\t\t\t\t\t\tvar innerVarName = stringValue.split(\"=\", 1)[0];\n\t\t\t\t\t\t\tvar stringValue = stringValue.substring(innerVarName.length + 1);\n\t\t\t\t\t\t\tif (shouldEscape) {\n\t\t\t\t\t\t\t\tif (strict && !isPercentEncoded(stringValue)) {\n\t\t\t\t\t\t\t\t\treturn;\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\tstringValue = decodeURIComponent(stringValue);\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\tarrayValue[j][0] = stringValue;\n\t\t\t\t\t\t\tinnerValue = arrayValue[j];\n\t\t\t\t\t\t}\n\t\t\t\t\t\tif (shouldEscape) {\n\t\t\t\t\t\t\tif (strict && !isPercentEncoded(innerVarName)) {\n\t\t\t\t\t\t\t\treturn;\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\tinnerVarName = decodeURIComponent(innerVarName);\n\t\t\t\t\t\t}\n\n\t\t\t\t\t\tif (objectValue[innerVarName] !== undefined) {\n\t\t\t\t\t\t\tif (Array.isArray(objectValue[innerVarName])) {\n\t\t\t\t\t\t\t\tobjectValue[innerVarName].push(innerValue);\n\t\t\t\t\t\t\t} else {\n\t\t\t\t\t\t\t\tobjectValue[innerVarName] = [objectValue[innerVarName], innerValue];\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t} else {\n\t\t\t\t\t\t\tobjectValue[innerVarName] = innerValue;\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t\tif (Object.keys(objectValue).length == 1 && objectValue[varName] !== undefined) {\n\t\t\t\t\t\tresultObj[varName] = objectValue[varName];\n\t\t\t\t\t} else {\n\t\t\t\t\t\tresultObj[varName] = objectValue;\n\t\t\t\t\t}\n\t\t\t\t} else {\n\t\t\t\t\tif (shouldEscape) {\n\t\t\t\t\t\tfor (var j = 0; j < arrayValue.length; j++) {\n\t\t\t\t\t\t\tvar innerArrayValue = arrayValue[j];\n\t\t\t\t\t\t\tif (Array.isArray(innerArrayValue)) {\n\t\t\t\t\t\t\t\tfor (var k = 0; k < innerArrayValue.length; k++) {\n\t\t\t\t\t\t\t\t\tif (strict && !isPercentEncoded(innerArrayValue[k])) {\n\t\t\t\t\t\t\t\t\t\treturn;\n\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\tinnerArrayValue[k] = decodeURIComponent(innerArrayValue[k]);\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t} else {\n\t\t\t\t\t\t\t\tif (strict && !isPercentEncoded(innerArrayValue)) {\n\t\t\t\t\t\t\t\t\treturn;\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\tarrayValue[j] = decodeURIComponent(innerArrayValue);\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\n\t\t\t\t\tif (resultObj[varName] !== undefined) {\n\t\t\t\t\t\tif (Array.isArray(resultObj[varName])) {\n\t\t\t\t\t\t\tresultObj[varName] = resultObj[varName].concat(arrayValue);\n\t\t\t\t\t\t} else {\n\t\t\t\t\t\t\tresultObj[varName] = [resultObj[varName]].concat(arrayValue);\n\t\t\t\t\t\t}\n\t\t\t\t\t} else {\n\t\t\t\t\t\tif (arrayValue.length == 1 && !varSpec.suffices['*']) {\n\t\t\t\t\t\t\tresultObj[varName] = arrayValue[0];\n\t\t\t\t\t\t} else {\n\t\t\t\t\t\t\tresultObj[varName] = arrayValue;\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t} else {\n\t\t\t\tvar arrayValue = (varSpecs.length == 1) ? [stringValue] : stringValue.split(separator || \",\");\n\t\t\t\tvar specIndexMap = {};\n\t\t\t\tfor (var i = 0; i < arrayValue.length; i++) {\n\t\t\t\t\t// Try from beginning\n\t\t\t\t\tvar firstStarred = 0;\n\t\t\t\t\tfor (; firstStarred < varSpecs.length - 1 && firstStarred < i; firstStarred++) {\n\t\t\t\t\t\tif (varSpecs[firstStarred].suffices['*']) {\n\t\t\t\t\t\t\tbreak;\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t\tif (firstStarred == i) {\n\t\t\t\t\t\t// The first [i] of them have no \"*\" suffix\n\t\t\t\t\t\tspecIndexMap[i] = i;\n\t\t\t\t\t\tcontinue;\n\t\t\t\t\t} else {\n\t\t\t\t\t\t// Try from the end\n\t\t\t\t\t\tfor (var lastStarred = varSpecs.length - 1; lastStarred > 0 && (varSpecs.length - lastStarred) < (arrayValue.length - i); lastStarred--) {\n\t\t\t\t\t\t\tif (varSpecs[lastStarred].suffices['*']) {\n\t\t\t\t\t\t\t\tbreak;\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t\tif ((varSpecs.length - lastStarred) == (arrayValue.length - i)) {\n\t\t\t\t\t\t\t// The last [length - i] of them have no \"*\" suffix\n\t\t\t\t\t\t\tspecIndexMap[i] = lastStarred;\n\t\t\t\t\t\t\tcontinue;\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t\t// Just give up and use the first one\n\t\t\t\t\tspecIndexMap[i] = firstStarred;\n\t\t\t\t}\n\t\t\t\tfor (var i = 0; i < arrayValue.length; i++) {\n\t\t\t\t\tvar stringValue = arrayValue[i];\n\t\t\t\t\tif (!stringValue && showVariables) {\n\t\t\t\t\t\t// The empty string isn't a valid variable, so if our value is zero-length we have nothing\n\t\t\t\t\t\tcontinue;\n\t\t\t\t\t}\n\t\t\t\t\tvar innerArrayValue = stringValue.split(\",\");\n\t\t\t\t\tvar hasEquals = false;\n\n\t\t\t\t\tif (showVariables) {\n\t\t\t\t\t\tvar stringValue = innerArrayValue[0]; // using innerArrayValue\n\t\t\t\t\t\tvar varName = stringValue.split(\"=\", 1)[0];\n\t\t\t\t\t\tvar stringValue = stringValue.substring(varName.length + 1);\n\t\t\t\t\t\tinnerArrayValue[0] = stringValue;\n\t\t\t\t\t\tvar varSpec = varSpecMap[varName] || varSpecs[0];\n\t\t\t\t\t} else {\n\t\t\t\t\t\tvar varSpec = varSpecs[specIndexMap[i]];\n\t\t\t\t\t\tvar varName = varSpec.name;\n\t\t\t\t\t}\n\n\t\t\t\t\tfor (var j = 0; j < innerArrayValue.length; j++) {\n\t\t\t\t\t\tif (shouldEscape) {\n\t\t\t\t\t\t\tif (strict && !isPercentEncoded(innerArrayValue[j])) {\n\t\t\t\t\t\t\t\treturn;\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\tinnerArrayValue[j] = decodeURIComponent(innerArrayValue[j]);\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\n\t\t\t\t\tif ((showVariables || varSpec.suffices['*'])&& resultObj[varName] !== undefined) {\n\t\t\t\t\t\tif (Array.isArray(resultObj[varName])) {\n\t\t\t\t\t\t\tresultObj[varName] = resultObj[varName].concat(innerArrayValue);\n\t\t\t\t\t\t} else {\n\t\t\t\t\t\t\tresultObj[varName] = [resultObj[varName]].concat(innerArrayValue);\n\t\t\t\t\t\t}\n\t\t\t\t\t} else {\n\t\t\t\t\t\tif (innerArrayValue.length == 1 && !varSpec.suffices['*']) {\n\t\t\t\t\t\t\tresultObj[varName] = innerArrayValue[0];\n\t\t\t\t\t\t} else {\n\t\t\t\t\t\t\tresultObj[varName] = innerArrayValue;\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t\treturn 1;\n\t\t};\n\t\treturn {\n\t\t\tvarNames: varNames,\n\t\t\tprefix: prefix,\n\t\t\tsubstitution: subFunction,\n\t\t\tunSubstitution: guessFunction\n\t\t};\n\t}\n\n\tfunction UriTemplate(template) {\n\t\tif (!(this instanceof UriTemplate)) {\n\t\t\treturn new UriTemplate(template);\n\t\t}\n\t\tvar parts = template.split(\"{\");\n\t\tvar textParts = [parts.shift()];\n\t\tvar prefixes = [];\n\t\tvar substitutions = [];\n\t\tvar unSubstitutions = [];\n\t\tvar varNames = [];\n\t\twhile (parts.length > 0) {\n\t\t\tvar part = parts.shift();\n\t\t\tvar spec = part.split(\"}\")[0];\n\t\t\tvar remainder = part.substring(spec.length + 1);\n\t\t\tvar funcs = uriTemplateSubstitution(spec);\n\t\t\tsubstitutions.push(funcs.substitution);\n\t\t\tunSubstitutions.push(funcs.unSubstitution);\n\t\t\tprefixes.push(funcs.prefix);\n\t\t\ttextParts.push(remainder);\n\t\t\tvarNames = varNames.concat(funcs.varNames);\n\t\t}\n\t\tthis.fill = function (valueFunction) {\n\t\t\tif (valueFunction && typeof valueFunction !== 'function') {\n\t\t\t\tvar value = valueFunction;\n\t\t\t\tvalueFunction = function (varName) {\n\t\t\t\t\treturn value[varName];\n\t\t\t\t};\n\t\t\t}\n\n\t\t\tvar result = textParts[0];\n\t\t\tfor (var i = 0; i < substitutions.length; i++) {\n\t\t\t\tvar substitution = substitutions[i];\n\t\t\t\tresult += substitution(valueFunction);\n\t\t\t\tresult += textParts[i + 1];\n\t\t\t}\n\t\t\treturn result;\n\t\t};\n\t\tthis.fromUri = function (substituted, options) {\n\t\t\toptions = options || {};\n\t\t\tvar result = {};\n\t\t\tfor (var i = 0; i < textParts.length; i++) {\n\t\t\t\tvar part = textParts[i];\n\t\t\t\tif (substituted.substring(0, part.length) !== part) {\n\t\t\t\t\treturn /*undefined*/;\n\t\t\t\t}\n\t\t\t\tsubstituted = substituted.substring(part.length);\n\t\t\t\tif (i >= textParts.length - 1) {\n\t\t\t\t\t// We've run out of input - is there any template left?\n\t\t\t\t\tif (substituted == \"\") {\n\t\t\t\t\t\tbreak;\n\t\t\t\t\t} else {\n\t\t\t\t\t\treturn /*undefined*/;\n\t\t\t\t\t}\n\t\t\t\t}\n\n\t\t\t\tvar prefix = prefixes[i];\n\t\t\t\tif (prefix && substituted.substring(0, prefix.length) !== prefix) {\n\t\t\t\t\t// All values are optional - if we have a prefix and it doesn't match, move along\n\t\t\t\t\tcontinue;\n\t\t\t\t}\n\n\t\t\t\t// Find the next part to un-substitute\n\t\t\t\tvar nextPart = textParts[i + 1];\n\t\t\t\tvar offset = i;\n\t\t\t\twhile (true) {\n\t\t\t\t\tif (offset == textParts.length - 2) {\n\t\t\t\t\t\tvar endPart = substituted.substring(substituted.length - nextPart.length);\n\t\t\t\t\t\tif (endPart !== nextPart) {\n\t\t\t\t\t\t\treturn /*undefined*/;\n\t\t\t\t\t\t}\n\t\t\t\t\t\tvar stringValue = substituted.substring(0, substituted.length - nextPart.length);\n\t\t\t\t\t\tsubstituted = endPart;\n\t\t\t\t\t} else if (nextPart) {\n\t\t\t\t\t\tvar nextPartPos = substituted.indexOf(nextPart);\n\t\t\t\t\t\tvar stringValue = substituted.substring(0, nextPartPos);\n\t\t\t\t\t\tsubstituted = substituted.substring(nextPartPos);\n\t\t\t\t\t} else if (prefixes[offset + 1]) {\n\t\t\t\t\t\tvar nextPartPos = substituted.indexOf(prefixes[offset + 1]);\n\t\t\t\t\t\tif (nextPartPos === -1) nextPartPos = substituted.length;\n\t\t\t\t\t\tvar stringValue = substituted.substring(0, nextPartPos);\n\t\t\t\t\t\tsubstituted = substituted.substring(nextPartPos);\n\t\t\t\t\t} else if (textParts.length > offset + 2) {\n\t\t\t\t\t\t// If the separator between this variable and the next is blank (with no prefix), continue onwards\n\t\t\t\t\t\toffset++;\n\t\t\t\t\t\tnextPart = textParts[offset + 1];\n\t\t\t\t\t\tcontinue;\n\t\t\t\t\t} else {\n\t\t\t\t\t\tvar stringValue = substituted;\n\t\t\t\t\t\tsubstituted = \"\";\n\t\t\t\t\t}\n\t\t\t\t\tbreak;\n\t\t\t\t}\n\t\t\t\tif (!unSubstitutions[i](stringValue, result, options.strict)) {\n\t\t\t\t\treturn /*undefined*/;\n\t\t\t\t}\n\t\t\t}\n\t\t\treturn result;\n\t\t}\n\t\tthis.varNames = varNames;\n\t\tthis.template = template;\n\t}\n\tUriTemplate.prototype = {\n\t\ttoString: function () {\n\t\t\treturn this.template;\n\t\t},\n\t\tfillFromObject: function (obj) {\n\t\t\treturn this.fill(obj);\n\t\t},\n\t\ttest: function (uri, options) {\n\t\t\treturn !!this.fromUri(uri, options)\n\t\t}\n\t};\n\n\treturn UriTemplate;\n});\n\n\n//# sourceURL=webpack://UseReactRouterDom/./node_modules/uri-templates/uri-templates.js?");

/***/ }),

/***/ "./node_modules/use-force-update/use-force-update.js":
/*!***********************************************************!*\
  !*** ./node_modules/use-force-update/use-force-update.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __read = (this && this.__read) || function (o, n) {\n    var m = typeof Symbol === \"function\" && o[Symbol.iterator];\n    if (!m) return o;\n    var i = m.call(o), r, ar = [], e;\n    try {\n        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);\n    }\n    catch (error) { e = { error: error }; }\n    finally {\n        try {\n            if (r && !r.done && (m = i[\"return\"])) m.call(i);\n        }\n        finally { if (e) throw e.error; }\n    }\n    return ar;\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar react_1 = __webpack_require__(/*! react */ \"react\");\nfunction useForceUpdate() {\n    var _a = __read(react_1.useState(Object.create(null)), 2), dispatch = _a[1];\n    var memoizedDispatch = react_1.useCallback(function () {\n        dispatch(Object.create(null));\n    }, [dispatch]);\n    return memoizedDispatch;\n}\nexports.default = useForceUpdate;\n\n\n//# sourceURL=webpack://UseReactRouterDom/./node_modules/use-force-update/use-force-update.js?");

/***/ }),

/***/ "./src/RouterContext.ts":
/*!******************************!*\
  !*** ./src/RouterContext.ts ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-router */ \"react-router\");\n/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_router__WEBPACK_IMPORTED_MODULE_0__);\n\n\nif (!react_router__WEBPACK_IMPORTED_MODULE_0__[\"__RouterContext\"]) {\n  throw new Error(\"useReactRouter may only be called within a <Router /> context.\");\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (react_router__WEBPACK_IMPORTED_MODULE_0__[\"__RouterContext\"]);\n\n//# sourceURL=webpack://UseReactRouterDom/./src/RouterContext.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! exports provided: RouterContext, useRouter, useNavigate, useLocation, useQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _RouterContext__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RouterContext */ \"./src/RouterContext.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"RouterContext\", function() { return _RouterContext__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* harmony import */ var _useRouter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useRouter */ \"./src/useRouter.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"useRouter\", function() { return _useRouter__WEBPACK_IMPORTED_MODULE_1__[\"default\"]; });\n\n/* harmony import */ var _useNavigate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useNavigate */ \"./src/useNavigate.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"useNavigate\", function() { return _useNavigate__WEBPACK_IMPORTED_MODULE_2__[\"default\"]; });\n\n/* harmony import */ var _useLocation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./useLocation */ \"./src/useLocation.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"useLocation\", function() { return _useLocation__WEBPACK_IMPORTED_MODULE_3__[\"default\"]; });\n\n/* harmony import */ var _useQuery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./useQuery */ \"./src/useQuery.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"useQuery\", function() { return _useQuery__WEBPACK_IMPORTED_MODULE_4__[\"default\"]; });\n\n\n\n\n\n\n\n//# sourceURL=webpack://UseReactRouterDom/./src/index.ts?");

/***/ }),

/***/ "./src/useLocation.ts":
/*!****************************!*\
  !*** ./src/useLocation.ts ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ \"./src/index.ts\");\n\n\nvar useLocation = function useLocation() {\n  var _useRouter = Object(___WEBPACK_IMPORTED_MODULE_0__[\"useRouter\"])(),\n      location = _useRouter.location;\n\n  return location;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (useLocation);\n\n//# sourceURL=webpack://UseReactRouterDom/./src/useLocation.ts?");

/***/ }),

/***/ "./src/useNavigate.ts":
/*!****************************!*\
  !*** ./src/useNavigate.ts ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ */ \"./src/index.ts\");\n/* harmony import */ var uri_templates__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! uri-templates */ \"./node_modules/uri-templates/uri-templates.js\");\n/* harmony import */ var uri_templates__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(uri_templates__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nvar useNavigate = function useNavigate(to) {\n  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {\n    replace: false\n  };\n\n  var _useRouter = Object(___WEBPACK_IMPORTED_MODULE_1__[\"useRouter\"])(),\n      history = _useRouter.history;\n\n  var replace = options.replace;\n  var template = typeof to === \"string\" ? uri_templates__WEBPACK_IMPORTED_MODULE_2___default()(to) : to;\n  var visit = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useCallback\"])(function (params) {\n    var newLocation = template.fill(params);\n    if (history.location.pathname === newLocation) return;\n\n    if (replace) {\n      history.replace(newLocation);\n    } else {\n      history.push(newLocation);\n    }\n  }, [template, history, replace]);\n  return visit;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (useNavigate);\n\n//# sourceURL=webpack://UseReactRouterDom/./src/useNavigate.ts?");

/***/ }),

/***/ "./src/useQuery.ts":
/*!*************************!*\
  !*** ./src/useQuery.ts ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! query-string */ \"./node_modules/query-string/index.js\");\n/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(query_string__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! . */ \"./src/index.ts\");\n\n\n\n\nvar useQuery = function useQuery() {\n  var _useLocation = Object(___WEBPACK_IMPORTED_MODULE_2__[\"useLocation\"])(),\n      search = _useLocation.search;\n\n  var query = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useMemo\"])(function () {\n    return Object(query_string__WEBPACK_IMPORTED_MODULE_1__[\"parse\"])(search);\n  }, [search]);\n  return query;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (useQuery);\n\n//# sourceURL=webpack://UseReactRouterDom/./src/useQuery.ts?");

/***/ }),

/***/ "./src/useRouter.ts":
/*!**************************!*\
  !*** ./src/useRouter.ts ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var use_force_update__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! use-force-update */ \"./node_modules/use-force-update/use-force-update.js\");\n/* harmony import */ var use_force_update__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(use_force_update__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _RouterContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RouterContext */ \"./src/RouterContext.ts\");\n\n\n\n\nvar useRouter = function useRouter() {\n  if (react__WEBPACK_IMPORTED_MODULE_0__[\"useContext\"] === undefined) {\n    throw new Error(\"React >= 16.7 required\");\n  }\n\n  var forceUpdate = use_force_update__WEBPACK_IMPORTED_MODULE_1___default()();\n  var routerContext = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useContext\"])(_RouterContext__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n\n  if (!routerContext) {\n    throw new Error(\"useReactRouter may only be called within a <Router /> context.\");\n  }\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    return routerContext.history.listen(forceUpdate);\n  }, [routerContext]);\n  return routerContext;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (useRouter);\n\n//# sourceURL=webpack://UseReactRouterDom/./src/useRouter.ts?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_react__;\n\n//# sourceURL=webpack://UseReactRouterDom/external_%22react%22?");

/***/ }),

/***/ "react-router":
/*!*******************************!*\
  !*** external "react-router" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_react_router__;\n\n//# sourceURL=webpack://UseReactRouterDom/external_%22react-router%22?");

/***/ })

/******/ });
});