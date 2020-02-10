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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./server/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js?!./src/component/Header.css":
/*!**********************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-1!./src/component/Header.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".XcgydFadZ0AxtdnmudsRh{\r\n  background: green;\r\n}", ""]);
// Exports
exports.locals = {
	"bg": "XcgydFadZ0AxtdnmudsRh"
};
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./src/main.css":
/*!**********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-1!./src/main.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "body{\r\n  background: red;\r\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/isomorphic-style-loader/insertCss.js":
/*!***********************************************************!*\
  !*** ./node_modules/isomorphic-style-loader/insertCss.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*! Isomorphic Style Loader | MIT License | https://github.com/kriasoft/isomorphic-style-loader */



var inserted = {};

function b64EncodeUnicode(str) {
  return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function (match, p1) {
    return String.fromCharCode("0x" + p1);
  }));
}

function removeCss(ids) {
  ids.forEach(function (id) {
    if (--inserted[id] <= 0) {
      var elem = document.getElementById(id);

      if (elem) {
        elem.parentNode.removeChild(elem);
      }
    }
  });
}

function insertCss(styles, _temp) {
  var _ref = _temp === void 0 ? {} : _temp,
      _ref$replace = _ref.replace,
      replace = _ref$replace === void 0 ? false : _ref$replace,
      _ref$prepend = _ref.prepend,
      prepend = _ref$prepend === void 0 ? false : _ref$prepend,
      _ref$prefix = _ref.prefix,
      prefix = _ref$prefix === void 0 ? 's' : _ref$prefix;

  var ids = [];

  for (var i = 0; i < styles.length; i++) {
    var _styles$i = styles[i],
        moduleId = _styles$i[0],
        css = _styles$i[1],
        media = _styles$i[2],
        sourceMap = _styles$i[3];
    var id = "" + prefix + moduleId + "-" + i;
    ids.push(id);

    if (inserted[id]) {
      if (!replace) {
        inserted[id]++;
        continue;
      }
    }

    inserted[id] = 1;
    var elem = document.getElementById(id);
    var create = false;

    if (!elem) {
      create = true;
      elem = document.createElement('style');
      elem.setAttribute('type', 'text/css');
      elem.id = id;

      if (media) {
        elem.setAttribute('media', media);
      }
    }

    var cssText = css;

    if (sourceMap && typeof btoa === 'function') {
      cssText += "\n/*# sourceMappingURL=data:application/json;base64," + b64EncodeUnicode(JSON.stringify(sourceMap)) + "*/";
      cssText += "\n/*# sourceURL=" + sourceMap.file + "?" + id + "*/";
    }

    if ('textContent' in elem) {
      elem.textContent = cssText;
    } else {
      elem.styleSheet.cssText = cssText;
    }

    if (create) {
      if (prepend) {
        document.head.insertBefore(elem, document.head.childNodes[0]);
      } else {
        document.head.appendChild(elem);
      }
    }
  }

  return removeCss.bind(null, ids);
}

module.exports = insertCss;
//# sourceMappingURL=insertCss.js.map


/***/ }),

/***/ "./server/config.js":
/*!**************************!*\
  !*** ./server/config.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  csr: true
});

/***/ }),

/***/ "./server/index.js":
/*!*************************!*\
  !*** ./server/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/server */ "react-dom/server");
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! fs */ "fs");
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _src_App__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/App */ "./src/App.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _src_component_Header__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../src/component/Header */ "./src/component/Header.js");
/* harmony import */ var _src_store_store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../src/store/store */ "./src/store/store.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./config */ "./server/config.js");












var proxy = __webpack_require__(/*! http-proxy-middleware */ "http-proxy-middleware");

var store = Object(_src_store_store__WEBPACK_IMPORTED_MODULE_9__["getServerStore"])();
var app = express__WEBPACK_IMPORTED_MODULE_2___default()();
app.use(express__WEBPACK_IMPORTED_MODULE_2___default.a["static"]('public')); // 服务端对api做代理.
// 这样的话, api就不要设置跨域相关的配置了.

app.use('/api', proxy({
  target: 'http://localhost:8083',
  changeOrigin: true
}));

var wrapPromise = function wrapPromise(fn) {
  return new Promise(function (resolve) {
    fn().then(resolve)["catch"](function (ex) {
      console.log(ex.message);
      resolve(ex);
    });
  });
};

var csrRender = function csrRender(res) {
  var fileName = path__WEBPACK_IMPORTED_MODULE_4___default.a.resolve(process.cwd(), 'public/index.csr.html');
  var html = fs__WEBPACK_IMPORTED_MODULE_3___default.a.readFileSync(fileName, 'utf-8');
  res.send(html);
};

app.get('*', function (req, res) {
  // url开启csr降级处理方案.
  if (_config__WEBPACK_IMPORTED_MODULE_10__["default"].csr || req.query._mode === 'csr') {
    console.log('开启csr渲染');
    return csrRender(res);
  }

  var promises = [];
  _src_App__WEBPACK_IMPORTED_MODULE_6__["default"].some(function (route) {
    var match = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["matchPath"])(req.path, route);

    if (match) {
      var loadData = route.component.loadData;

      if (loadData) {
        // 当有其中的某些api出错时, 采取降级的方案. 
        // 避免整个页面无法显示.
        promises.push(wrapPromise(function () {
          return loadData(store);
        })); // promises.push(loadData(store));
      }
    }
  }); // Promise.all
  // Promise.allSettled

  Promise.all(promises).then(function () {
    var context = {
      css: []
    }; // 将react组件, 解析成html.

    var content = react_dom_server__WEBPACK_IMPORTED_MODULE_1___default.a.renderToString(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_7__["Provider"], {
      store: store
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["StaticRouter"], {
      location: req.url,
      context: context
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_component_Header__WEBPACK_IMPORTED_MODULE_8__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["Switch"], null, _src_App__WEBPACK_IMPORTED_MODULE_6__["default"].map(function (route) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["Route"], {
        path: route.path,
        exact: route.exact,
        component: route.component
      });
    })))));

    if (context.code) {
      res.status(context.code);
    } // 跳转.


    if (context.action === 'REPLACE') {
      res.redirect(301, context.url);
    }

    var css = context.css.join('\n');
    res.send("\n    <!DOCTYPE html>\n    <html lang=\"en\">\n    <head>\n      <meta charset=\"UTF-8\">\n      <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n      <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\n      <title>Document</title>\n      <style>".concat(css, "</style>\n    </head>\n    <body>\n      <div id=\"app\">").concat(content, "</div>\n      <script>window.__context=").concat(JSON.stringify(store.getState()), "</script>\n      <script src=\"/bundle.js\"></script>\n    </body>\n    </html>\n  "));
  })["catch"](function (ex) {
    res.send('error');
  });
});
app.listen(8082, function () {
  console.log('监听端口8082');
});

/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _container_Home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./container/Home */ "./src/container/Home.js");
/* harmony import */ var _container_About__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./container/About */ "./src/container/About.js");
/* harmony import */ var _container_User__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./container/User */ "./src/container/User.js");
/* harmony import */ var _container_NotFound__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./container/NotFound */ "./src/container/NotFound.js");
/* harmony import */ var _main_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./main.css */ "./src/main.css");
/* harmony import */ var _main_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_main_css__WEBPACK_IMPORTED_MODULE_6__);






 // export default (
//   <div>
//     <Route path="/" exact component={Home}/>
//     <Route path="/about" exact component={About}/>
//   </div>
// );

/* harmony default export */ __webpack_exports__["default"] = ([{
  path: '/',
  component: _container_Home__WEBPACK_IMPORTED_MODULE_2__["default"],
  exact: true,
  key: 'home'
}, {
  path: '/user',
  component: _container_User__WEBPACK_IMPORTED_MODULE_4__["default"],
  exact: true,
  key: 'user'
}, {
  path: '/about',
  component: _container_About__WEBPACK_IMPORTED_MODULE_3__["default"],
  exact: true,
  key: 'about'
}, {
  component: _container_NotFound__WEBPACK_IMPORTED_MODULE_5__["default"],
  key: 'notfound'
}]);

/***/ }),

/***/ "./src/component/Header.css":
/*!**********************************!*\
  !*** ./src/component/Header.css ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    var refs = 0;
    var css = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--5-1!./Header.css */ "./node_modules/css-loader/dist/cjs.js?!./src/component/Header.css");
    var insertCss = __webpack_require__(/*! ../../node_modules/isomorphic-style-loader/insertCss.js */ "./node_modules/isomorphic-style-loader/insertCss.js");
    var content = typeof css === 'string' ? [[module.i, css, '']] : css;

    exports = module.exports = css.locals || {};
    exports._getContent = function() { return content; };
    exports._getCss = function() { return '' + css; };
    exports._insertCss = function(options) { return insertCss(content, options) };

    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) { var removeCss; }
  

/***/ }),

/***/ "./src/component/Header.js":
/*!*********************************!*\
  !*** ./src/component/Header.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Header_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header.css */ "./src/component/Header.css");
/* harmony import */ var _Header_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Header_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _withStyle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../withStyle */ "./src/withStyle.js");





var Header = function Header(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _Header_css__WEBPACK_IMPORTED_MODULE_2___default.a.bg
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "/"
  }, "Home"), " |", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "/about"
  }, "About"), " |", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "/user"
  }, "User"));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_withStyle__WEBPACK_IMPORTED_MODULE_3__["default"])(Header, _Header_css__WEBPACK_IMPORTED_MODULE_2___default.a));

/***/ }),

/***/ "./src/container/About.js":
/*!********************************!*\
  !*** ./src/container/About.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function About(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "About"));
}

/* harmony default export */ __webpack_exports__["default"] = (About);

/***/ }),

/***/ "./src/container/Home.js":
/*!*******************************!*\
  !*** ./src/container/Home.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _store_home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store/home */ "./src/store/home.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





function Home(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0),
      _useState2 = _slicedToArray(_useState, 2),
      count = _useState2[0],
      setCount = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    // 客户端获取
    if (!props.list || !props.list.length) {
      props.getHomeList();
    }
  }, []);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "Hi, ", props.title, " ", count), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    onClick: function onClick() {
      return setCount(count + 1);
    }
  }, "add"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, props.list ? props.list.map(function (item) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      key: item.id
    }, item.name);
  }) : null));
}
/**
 * 模仿next的做法.
 */


Home.loadData = function (store) {
  return store.dispatch(Object(_store_home__WEBPACK_IMPORTED_MODULE_2__["getHomeList"])());
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(function (state) {
  return {
    list: state.home.list
  };
}, {
  getHomeList: _store_home__WEBPACK_IMPORTED_MODULE_2__["getHomeList"]
})(Home));

/***/ }),

/***/ "./src/container/NotFound.js":
/*!***********************************!*\
  !*** ./src/container/NotFound.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);



var Status = function Status(_ref) {
  var code = _ref.code,
      children = _ref.children;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    render: function render(_ref2) {
      var staticContext = _ref2.staticContext;

      if (staticContext) {
        // 404
        staticContext.code = code;
      }

      return children;
    }
  });
};

var NotFound = function NotFound(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Status, {
    code: "404"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "404, the page is not found"));
};

/* harmony default export */ __webpack_exports__["default"] = (NotFound);

/***/ }),

/***/ "./src/container/User.js":
/*!*******************************!*\
  !*** ./src/container/User.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _store_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store/user */ "./src/store/user.js");




function User(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "Hi, ", props.user.name, " ", props.user.age));
}
/**
 * 模仿next的做法.
 */


User.loadData = function (store) {
  return store.dispatch(Object(_store_user__WEBPACK_IMPORTED_MODULE_2__["getUserInfo"])());
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(function (state) {
  return {
    user: state.user
  };
}, {
  getUserInfo: _store_user__WEBPACK_IMPORTED_MODULE_2__["getUserInfo"]
})(User));

/***/ }),

/***/ "./src/main.css":
/*!**********************!*\
  !*** ./src/main.css ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    var refs = 0;
    var css = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--5-1!./main.css */ "./node_modules/css-loader/dist/cjs.js?!./src/main.css");
    var insertCss = __webpack_require__(/*! ../node_modules/isomorphic-style-loader/insertCss.js */ "./node_modules/isomorphic-style-loader/insertCss.js");
    var content = typeof css === 'string' ? [[module.i, css, '']] : css;

    exports = module.exports = css.locals || {};
    exports._getContent = function() { return content; };
    exports._getCss = function() { return '' + css; };
    exports._insertCss = function(options) { return insertCss(content, options) };

    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) { var removeCss; }
  

/***/ }),

/***/ "./src/store/home.js":
/*!***************************!*\
  !*** ./src/store/home.js ***!
  \***************************/
/*! exports provided: getHomeList, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHomeList", function() { return getHomeList; });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var GET_LIST = 'HOME/GET_LIST';

var changeList = function changeList(list) {
  return {
    type: GET_LIST,
    list: list
  };
};

var getHomeList = function getHomeList() {
  return function (dispatch, getState, axios) {
    return axios.get('/api/course/list').then(function (res) {
      var list = res.data.list;
      dispatch(changeList(list));
    });
  };
};
var defaultState = {
  list: []
};
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case GET_LIST:
      {
        return _objectSpread({}, state, {
          list: action.list
        });
      }

    default:
      {
        return state;
      }
  }
});

/***/ }),

/***/ "./src/store/store.js":
/*!****************************!*\
  !*** ./src/store/store.js ***!
  \****************************/
/*! exports provided: getServerStore, getClientStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getServerStore", function() { return getServerStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getClientStore", function() { return getClientStore; });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-thunk */ "redux-thunk");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home */ "./src/store/home.js");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user */ "./src/store/user.js");





var reducer = Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  home: _home__WEBPACK_IMPORTED_MODULE_3__["default"],
  user: _user__WEBPACK_IMPORTED_MODULE_4__["default"]
});
var serverAxios = axios__WEBPACK_IMPORTED_MODULE_2___default.a.create({
  baseURL: 'http://localhost:8083/'
});
var clientAxios = axios__WEBPACK_IMPORTED_MODULE_2___default.a.create({
  baseURL: '/'
}); // export default store;

var getServerStore = function getServerStore() {
  return Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(reducer, Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(redux_thunk__WEBPACK_IMPORTED_MODULE_1___default.a.withExtraArgument(serverAxios)));
};
var getClientStore = function getClientStore() {
  var defaultStore = window.__context || {};
  return Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(reducer, defaultStore, Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(redux_thunk__WEBPACK_IMPORTED_MODULE_1___default.a.withExtraArgument(clientAxios)));
};

/***/ }),

/***/ "./src/store/user.js":
/*!***************************!*\
  !*** ./src/store/user.js ***!
  \***************************/
/*! exports provided: getUserInfo, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserInfo", function() { return getUserInfo; });
var GET_USER_DETAIL = 'USER/GET_DETAIL';

var updateUserInfo = function updateUserInfo(data) {
  return {
    type: GET_USER_DETAIL,
    data: data
  };
};

var getUserInfo = function getUserInfo() {
  return function (dispatch, getState, axios) {
    return axios.get('/api/user/detail').then(function (res) {
      var data = res.data.data;
      dispatch(updateUserInfo(data));
    });
  };
};
var defaultState = {};
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case GET_USER_DETAIL:
      {
        return action.data;
      }

    default:
      {
        return state;
      }
  }
});

/***/ }),

/***/ "./src/withStyle.js":
/*!**************************!*\
  !*** ./src/withStyle.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hoist-non-react-statics */ "hoist-non-react-statics");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = (function (Comp, styles) {
  var NewComp = function NewComp(props) {
    if (props.staticContext) {
      props.staticContext.css.push(styles._getCss());
    }

    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Comp, props);
  }; // 继承原始组件的静态方法.


  return hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_1___default()(NewComp, Comp);
});

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),

/***/ "hoist-non-react-statics":
/*!******************************************!*\
  !*** external "hoist-non-react-statics" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("hoist-non-react-statics");

/***/ }),

/***/ "http-proxy-middleware":
/*!****************************************!*\
  !*** external "http-proxy-middleware" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("http-proxy-middleware");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map