/******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "build/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/babel/index.js):\\nError: The node API for `babel` has been moved to `babel-core`.\\n    at Object.<anonymous> (/home/akpp/projects/react-learning/03-first-app/node_modules/babel/index.js:1:69)\\n    at Module._compile (/home/akpp/projects/react-learning/03-first-app/node_modules/v8-compile-cache/v8-compile-cache.js:178:30)\\n    at Object.Module._extensions..js (module.js:663:10)\\n    at Module.load (module.js:565:32)\\n    at tryModuleLoad (module.js:505:12)\\n    at Function.Module._load (module.js:497:3)\\n    at Module.require (module.js:596:17)\\n    at require (/home/akpp/projects/react-learning/03-first-app/node_modules/v8-compile-cache/v8-compile-cache.js:159:20)\\n    at loadLoader (/home/akpp/projects/react-learning/03-first-app/node_modules/loader-runner/lib/loadLoader.js:13:17)\\n    at iteratePitchingLoaders (/home/akpp/projects/react-learning/03-first-app/node_modules/loader-runner/lib/LoaderRunner.js:169:2)\\n    at runLoaders (/home/akpp/projects/react-learning/03-first-app/node_modules/loader-runner/lib/LoaderRunner.js:362:2)\\n    at NormalModule.doBuild (/home/akpp/projects/react-learning/03-first-app/node_modules/webpack/lib/NormalModule.js:265:3)\\n    at NormalModule.build (/home/akpp/projects/react-learning/03-first-app/node_modules/webpack/lib/NormalModule.js:412:15)\\n    at Compilation.buildModule (/home/akpp/projects/react-learning/03-first-app/node_modules/webpack/lib/Compilation.js:633:10)\\n    at moduleFactory.create (/home/akpp/projects/react-learning/03-first-app/node_modules/webpack/lib/Compilation.js:1019:12)\\n    at factory (/home/akpp/projects/react-learning/03-first-app/node_modules/webpack/lib/NormalModuleFactory.js:405:6)\\n    at hooks.afterResolve.callAsync (/home/akpp/projects/react-learning/03-first-app/node_modules/webpack/lib/NormalModuleFactory.js:155:13)\\n    at AsyncSeriesWaterfallHook.eval [as callAsync] (eval at create (/home/akpp/projects/react-learning/03-first-app/node_modules/tapable/lib/HookCodeFactory.js:32:10), <anonymous>:6:1)\\n    at AsyncSeriesWaterfallHook.lazyCompileHook (/home/akpp/projects/react-learning/03-first-app/node_modules/tapable/lib/Hook.js:154:20)\\n    at resolver (/home/akpp/projects/react-learning/03-first-app/node_modules/webpack/lib/NormalModuleFactory.js:138:29)\\n    at process.nextTick (/home/akpp/projects/react-learning/03-first-app/node_modules/webpack/lib/NormalModuleFactory.js:342:9)\\n    at _combinedTickCallback (internal/process/next_tick.js:131:7)\\n    at process._tickCallback (internal/process/next_tick.js:180:9)\");\n\n//# sourceURL=webpack:///./src/main.js?");

/***/ })

/******/ });