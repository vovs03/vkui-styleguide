(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("prop-types"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "prop-types"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("react"), require("prop-types")) : factory(root["react"], root["prop-types"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_1__) {
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 82);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getClassname;

var _platform = __webpack_require__(4);

var _classnames2 = __webpack_require__(3);

var _classnames3 = _interopRequireDefault(_classnames2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var osname = (0, _platform.platform)();

function getClassname(base) {
  var _classnames;

  return (0, _classnames3.default)(base, (_classnames = {}, _defineProperty(_classnames, base + '--ios', osname === _platform.IOS), _defineProperty(_classnames, base + '--android', osname === _platform.ANDROID), _classnames));
}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = classNames;
function classNames() {
  var result = [];

  [].concat(Array.prototype.slice.call(arguments)).forEach(function (item) {
    if (!item) {
      return;
    }
    switch (typeof item === 'undefined' ? 'undefined' : _typeof(item)) {
      case 'string':
        result.push(item);
        break;
      case 'object':
        Object.keys(item).forEach(function (key) {
          if (item[key]) {
            result.push(key);
          }
        });
        break;
      default:
        result.push('' + item);
    }
  });

  return result.join(' ');
}

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.platform = platform;
var ANDROID = exports.ANDROID = 'android';
var IOS = exports.IOS = 'ios';

var ua = void 0;
var platformName = void 0;

function platform(useragent) {
  if (!ua) {
    ua = useragent || navigator && navigator.userAgent || '';
  }
  if (!platformName) {
    platformName = /android/i.test(ua) ? ANDROID : IOS;
  }

  return platformName;
}

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = removeObjectKeys;
function removeObjectKeys() {
  var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var keys = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

  var newObj = Object.assign({}, obj);

  keys.forEach(function (key) {
    return delete newObj[key];
  });

  return newObj;
}

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {(function (global, factory) {
	 true ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.BrowserSpriteSymbol = factory());
}(this, (function () { 'use strict';

var SpriteSymbol = function SpriteSymbol(ref) {
  var id = ref.id;
  var viewBox = ref.viewBox;
  var content = ref.content;

  this.id = id;
  this.viewBox = viewBox;
  this.content = content;
};

/**
 * @return {string}
 */
SpriteSymbol.prototype.stringify = function stringify () {
  return this.content;
};

/**
 * @return {string}
 */
SpriteSymbol.prototype.toString = function toString () {
  return this.stringify();
};

SpriteSymbol.prototype.destroy = function destroy () {
    var this$1 = this;

  ['id', 'viewBox', 'content'].forEach(function (prop) { return delete this$1[prop]; });
};

/**
 * @param {string} content
 * @return {Element}
 */
var parse = function (content) {
  var hasImportNode = !!document.importNode;
  var doc = new DOMParser().parseFromString(content, 'image/svg+xml').documentElement;

  /**
   * Fix for browser which are throwing WrongDocumentError
   * if you insert an element which is not part of the document
   * @see http://stackoverflow.com/a/7986519/4624403
   */
  if (hasImportNode) {
    return document.importNode(doc, true);
  }

  return doc;
};

var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};





function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var index = createCommonjsModule(function (module, exports) {
(function (root, factory) {
    if (false) {
        undefined(factory);
    } else {
        module.exports = factory();
    }
}(commonjsGlobal, function () {

function isMergeableObject(val) {
    var nonNullObject = val && typeof val === 'object';

    return nonNullObject
        && Object.prototype.toString.call(val) !== '[object RegExp]'
        && Object.prototype.toString.call(val) !== '[object Date]'
}

function emptyTarget(val) {
    return Array.isArray(val) ? [] : {}
}

function cloneIfNecessary(value, optionsArgument) {
    var clone = optionsArgument && optionsArgument.clone === true;
    return (clone && isMergeableObject(value)) ? deepmerge(emptyTarget(value), value, optionsArgument) : value
}

function defaultArrayMerge(target, source, optionsArgument) {
    var destination = target.slice();
    source.forEach(function(e, i) {
        if (typeof destination[i] === 'undefined') {
            destination[i] = cloneIfNecessary(e, optionsArgument);
        } else if (isMergeableObject(e)) {
            destination[i] = deepmerge(target[i], e, optionsArgument);
        } else if (target.indexOf(e) === -1) {
            destination.push(cloneIfNecessary(e, optionsArgument));
        }
    });
    return destination
}

function mergeObject(target, source, optionsArgument) {
    var destination = {};
    if (isMergeableObject(target)) {
        Object.keys(target).forEach(function (key) {
            destination[key] = cloneIfNecessary(target[key], optionsArgument);
        });
    }
    Object.keys(source).forEach(function (key) {
        if (!isMergeableObject(source[key]) || !target[key]) {
            destination[key] = cloneIfNecessary(source[key], optionsArgument);
        } else {
            destination[key] = deepmerge(target[key], source[key], optionsArgument);
        }
    });
    return destination
}

function deepmerge(target, source, optionsArgument) {
    var array = Array.isArray(source);
    var options = optionsArgument || { arrayMerge: defaultArrayMerge };
    var arrayMerge = options.arrayMerge || defaultArrayMerge;

    if (array) {
        return Array.isArray(target) ? arrayMerge(target, source, optionsArgument) : cloneIfNecessary(source, optionsArgument)
    } else {
        return mergeObject(target, source, optionsArgument)
    }
}

deepmerge.all = function deepmergeAll(array, optionsArgument) {
    if (!Array.isArray(array) || array.length < 2) {
        throw new Error('first argument should be an array with at least two elements')
    }

    // we are sure there are at least 2 values, so it is safe to have no initial value
    return array.reduce(function(prev, next) {
        return deepmerge(prev, next, optionsArgument)
    })
};

return deepmerge

}));
});

var namespaces_1 = createCommonjsModule(function (module, exports) {
var namespaces = {
  svg: {
    name: 'xmlns',
    uri: 'http://www.w3.org/2000/svg'
  },
  xlink: {
    name: 'xmlns:xlink',
    uri: 'http://www.w3.org/1999/xlink'
  }
};

exports.default = namespaces;
module.exports = exports.default;
});

/**
 * @param {Object} attrs
 * @return {string}
 */
var objectToAttrsString = function (attrs) {
  return Object.keys(attrs).map(function (attr) {
    var value = attrs[attr].toString().replace(/"/g, '&quot;');
    return (attr + "=\"" + value + "\"");
  }).join(' ');
};

var svg = namespaces_1.svg;
var xlink = namespaces_1.xlink;

var defaultAttrs = {};
defaultAttrs[svg.name] = svg.uri;
defaultAttrs[xlink.name] = xlink.uri;

/**
 * @param {string} [content]
 * @param {Object} [attributes]
 * @return {string}
 */
var wrapInSvgString = function (content, attributes) {
  if ( content === void 0 ) content = '';

  var attrs = index(defaultAttrs, attributes || {});
  var attrsRendered = objectToAttrsString(attrs);
  return ("<svg " + attrsRendered + ">" + content + "</svg>");
};

var BrowserSpriteSymbol = (function (SpriteSymbol$$1) {
  function BrowserSpriteSymbol () {
    SpriteSymbol$$1.apply(this, arguments);
  }

  if ( SpriteSymbol$$1 ) BrowserSpriteSymbol.__proto__ = SpriteSymbol$$1;
  BrowserSpriteSymbol.prototype = Object.create( SpriteSymbol$$1 && SpriteSymbol$$1.prototype );
  BrowserSpriteSymbol.prototype.constructor = BrowserSpriteSymbol;

  var prototypeAccessors = { isMounted: {} };

  prototypeAccessors.isMounted.get = function () {
    return !!this.node;
  };

  /**
   * @param {Element} node
   * @return {BrowserSpriteSymbol}
   */
  BrowserSpriteSymbol.createFromExistingNode = function createFromExistingNode (node) {
    return new BrowserSpriteSymbol({
      id: node.getAttribute('id'),
      viewBox: node.getAttribute('viewBox'),
      content: node.outerHTML
    });
  };

  BrowserSpriteSymbol.prototype.destroy = function destroy () {
    if (this.isMounted) {
      this.unmount();
    }
    SpriteSymbol$$1.prototype.destroy.call(this);
  };

  /**
   * @param {Element|string} target
   * @return {Element}
   */
  BrowserSpriteSymbol.prototype.mount = function mount (target) {
    if (this.isMounted) {
      return this.node;
    }

    var mountTarget = typeof target === 'string' ? document.querySelector(target) : target;
    var node = this.render();
    this.node = node;

    mountTarget.appendChild(node);

    return node;
  };

  /**
   * @return {Element}
   */
  BrowserSpriteSymbol.prototype.render = function render () {
    var content = this.stringify();
    return parse(wrapInSvgString(content)).childNodes[0];
  };

  BrowserSpriteSymbol.prototype.unmount = function unmount () {
    this.node.parentNode.removeChild(this.node);
  };

  Object.defineProperties( BrowserSpriteSymbol.prototype, prototypeAccessors );

  return BrowserSpriteSymbol;
}(SpriteSymbol));

return BrowserSpriteSymbol;

})));

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(35)))

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {(function (global, factory) {
	 true ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.BrowserSprite = factory());
}(this, (function () { 'use strict';

var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};





function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var index = createCommonjsModule(function (module, exports) {
(function (root, factory) {
    if (false) {
        undefined(factory);
    } else {
        module.exports = factory();
    }
}(commonjsGlobal, function () {

function isMergeableObject(val) {
    var nonNullObject = val && typeof val === 'object';

    return nonNullObject
        && Object.prototype.toString.call(val) !== '[object RegExp]'
        && Object.prototype.toString.call(val) !== '[object Date]'
}

function emptyTarget(val) {
    return Array.isArray(val) ? [] : {}
}

function cloneIfNecessary(value, optionsArgument) {
    var clone = optionsArgument && optionsArgument.clone === true;
    return (clone && isMergeableObject(value)) ? deepmerge(emptyTarget(value), value, optionsArgument) : value
}

function defaultArrayMerge(target, source, optionsArgument) {
    var destination = target.slice();
    source.forEach(function(e, i) {
        if (typeof destination[i] === 'undefined') {
            destination[i] = cloneIfNecessary(e, optionsArgument);
        } else if (isMergeableObject(e)) {
            destination[i] = deepmerge(target[i], e, optionsArgument);
        } else if (target.indexOf(e) === -1) {
            destination.push(cloneIfNecessary(e, optionsArgument));
        }
    });
    return destination
}

function mergeObject(target, source, optionsArgument) {
    var destination = {};
    if (isMergeableObject(target)) {
        Object.keys(target).forEach(function (key) {
            destination[key] = cloneIfNecessary(target[key], optionsArgument);
        });
    }
    Object.keys(source).forEach(function (key) {
        if (!isMergeableObject(source[key]) || !target[key]) {
            destination[key] = cloneIfNecessary(source[key], optionsArgument);
        } else {
            destination[key] = deepmerge(target[key], source[key], optionsArgument);
        }
    });
    return destination
}

function deepmerge(target, source, optionsArgument) {
    var array = Array.isArray(source);
    var options = optionsArgument || { arrayMerge: defaultArrayMerge };
    var arrayMerge = options.arrayMerge || defaultArrayMerge;

    if (array) {
        return Array.isArray(target) ? arrayMerge(target, source, optionsArgument) : cloneIfNecessary(source, optionsArgument)
    } else {
        return mergeObject(target, source, optionsArgument)
    }
}

deepmerge.all = function deepmergeAll(array, optionsArgument) {
    if (!Array.isArray(array) || array.length < 2) {
        throw new Error('first argument should be an array with at least two elements')
    }

    // we are sure there are at least 2 values, so it is safe to have no initial value
    return array.reduce(function(prev, next) {
        return deepmerge(prev, next, optionsArgument)
    })
};

return deepmerge

}));
});

//      
// An event handler can take an optional event argument
// and should not return a value
                                          
// An array of all currently registered event handlers for a type
                                            
// A map of event types and their corresponding event handlers.
                        
                                   
  

/** Mitt: Tiny (~200b) functional event emitter / pubsub.
 *  @name mitt
 *  @returns {Mitt}
 */
function mitt(all                 ) {
	all = all || Object.create(null);

	return {
		/**
		 * Register an event handler for the given type.
		 *
		 * @param  {String} type	Type of event to listen for, or `"*"` for all events
		 * @param  {Function} handler Function to call in response to given event
		 * @memberOf mitt
		 */
		on: function on(type        , handler              ) {
			(all[type] || (all[type] = [])).push(handler);
		},

		/**
		 * Remove an event handler for the given type.
		 *
		 * @param  {String} type	Type of event to unregister `handler` from, or `"*"`
		 * @param  {Function} handler Handler function to remove
		 * @memberOf mitt
		 */
		off: function off(type        , handler              ) {
			if (all[type]) {
				all[type].splice(all[type].indexOf(handler) >>> 0, 1);
			}
		},

		/**
		 * Invoke all handlers for the given type.
		 * If present, `"*"` handlers are invoked after type-matched handlers.
		 *
		 * @param {String} type  The event type to invoke
		 * @param {Any} [evt]  Any value (object is recommended and powerful), passed to each handler
		 * @memberof mitt
		 */
		emit: function emit(type        , evt     ) {
			(all[type] || []).map(function (handler) { handler(evt); });
			(all['*'] || []).map(function (handler) { handler(type, evt); });
		}
	};
}

var namespaces_1 = createCommonjsModule(function (module, exports) {
var namespaces = {
  svg: {
    name: 'xmlns',
    uri: 'http://www.w3.org/2000/svg'
  },
  xlink: {
    name: 'xmlns:xlink',
    uri: 'http://www.w3.org/1999/xlink'
  }
};

exports.default = namespaces;
module.exports = exports.default;
});

/**
 * @param {Object} attrs
 * @return {string}
 */
var objectToAttrsString = function (attrs) {
  return Object.keys(attrs).map(function (attr) {
    var value = attrs[attr].toString().replace(/"/g, '&quot;');
    return (attr + "=\"" + value + "\"");
  }).join(' ');
};

var svg = namespaces_1.svg;
var xlink = namespaces_1.xlink;

var defaultAttrs = {};
defaultAttrs[svg.name] = svg.uri;
defaultAttrs[xlink.name] = xlink.uri;

/**
 * @param {string} [content]
 * @param {Object} [attributes]
 * @return {string}
 */
var wrapInSvgString = function (content, attributes) {
  if ( content === void 0 ) content = '';

  var attrs = index(defaultAttrs, attributes || {});
  var attrsRendered = objectToAttrsString(attrs);
  return ("<svg " + attrsRendered + ">" + content + "</svg>");
};

var svg$1 = namespaces_1.svg;
var xlink$1 = namespaces_1.xlink;

var defaultConfig = {
  attrs: ( obj = {
    style: ['position: absolute', 'width: 0', 'height: 0'].join('; ')
  }, obj[svg$1.name] = svg$1.uri, obj[xlink$1.name] = xlink$1.uri, obj )
};
var obj;

var Sprite = function Sprite(config) {
  this.config = index(defaultConfig, config || {});
  this.symbols = [];
};

/**
 * Add new symbol. If symbol with the same id exists it will be replaced.
 * @param {SpriteSymbol} symbol
 * @return {boolean} `true` - symbol was added, `false` - replaced
 */
Sprite.prototype.add = function add (symbol) {
  var ref = this;
    var symbols = ref.symbols;
  var existing = this.find(symbol.id);

  if (existing) {
    symbols[symbols.indexOf(existing)] = symbol;
    return false;
  }

  symbols.push(symbol);
  return true;
};

/**
 * Remove symbol & destroy it
 * @param {string} id
 * @return {boolean} `true` - symbol was found & successfully destroyed, `false` - otherwise
 */
Sprite.prototype.remove = function remove (id) {
  var ref = this;
    var symbols = ref.symbols;
  var symbol = this.find(id);

  if (symbol) {
    symbols.splice(symbols.indexOf(symbol), 1);
    symbol.destroy();
    return true;
  }

  return false;
};

/**
 * @param {string} id
 * @return {SpriteSymbol|null}
 */
Sprite.prototype.find = function find (id) {
  return this.symbols.filter(function (s) { return s.id === id; })[0] || null;
};

/**
 * @param {string} id
 * @return {boolean}
 */
Sprite.prototype.has = function has (id) {
  return this.find(id) !== null;
};

/**
 * @return {string}
 */
Sprite.prototype.stringify = function stringify () {
  var ref = this.config;
    var attrs = ref.attrs;
  var stringifiedSymbols = this.symbols.map(function (s) { return s.stringify(); }).join('');
  return wrapInSvgString(stringifiedSymbols, attrs);
};

/**
 * @return {string}
 */
Sprite.prototype.toString = function toString () {
  return this.stringify();
};

Sprite.prototype.destroy = function destroy () {
  this.symbols.forEach(function (s) { return s.destroy(); });
};

var SpriteSymbol = function SpriteSymbol(ref) {
  var id = ref.id;
  var viewBox = ref.viewBox;
  var content = ref.content;

  this.id = id;
  this.viewBox = viewBox;
  this.content = content;
};

/**
 * @return {string}
 */
SpriteSymbol.prototype.stringify = function stringify () {
  return this.content;
};

/**
 * @return {string}
 */
SpriteSymbol.prototype.toString = function toString () {
  return this.stringify();
};

SpriteSymbol.prototype.destroy = function destroy () {
    var this$1 = this;

  ['id', 'viewBox', 'content'].forEach(function (prop) { return delete this$1[prop]; });
};

/**
 * @param {string} content
 * @return {Element}
 */
var parse = function (content) {
  var hasImportNode = !!document.importNode;
  var doc = new DOMParser().parseFromString(content, 'image/svg+xml').documentElement;

  /**
   * Fix for browser which are throwing WrongDocumentError
   * if you insert an element which is not part of the document
   * @see http://stackoverflow.com/a/7986519/4624403
   */
  if (hasImportNode) {
    return document.importNode(doc, true);
  }

  return doc;
};

var BrowserSpriteSymbol = (function (SpriteSymbol$$1) {
  function BrowserSpriteSymbol () {
    SpriteSymbol$$1.apply(this, arguments);
  }

  if ( SpriteSymbol$$1 ) BrowserSpriteSymbol.__proto__ = SpriteSymbol$$1;
  BrowserSpriteSymbol.prototype = Object.create( SpriteSymbol$$1 && SpriteSymbol$$1.prototype );
  BrowserSpriteSymbol.prototype.constructor = BrowserSpriteSymbol;

  var prototypeAccessors = { isMounted: {} };

  prototypeAccessors.isMounted.get = function () {
    return !!this.node;
  };

  /**
   * @param {Element} node
   * @return {BrowserSpriteSymbol}
   */
  BrowserSpriteSymbol.createFromExistingNode = function createFromExistingNode (node) {
    return new BrowserSpriteSymbol({
      id: node.getAttribute('id'),
      viewBox: node.getAttribute('viewBox'),
      content: node.outerHTML
    });
  };

  BrowserSpriteSymbol.prototype.destroy = function destroy () {
    if (this.isMounted) {
      this.unmount();
    }
    SpriteSymbol$$1.prototype.destroy.call(this);
  };

  /**
   * @param {Element|string} target
   * @return {Element}
   */
  BrowserSpriteSymbol.prototype.mount = function mount (target) {
    if (this.isMounted) {
      return this.node;
    }

    var mountTarget = typeof target === 'string' ? document.querySelector(target) : target;
    var node = this.render();
    this.node = node;

    mountTarget.appendChild(node);

    return node;
  };

  /**
   * @return {Element}
   */
  BrowserSpriteSymbol.prototype.render = function render () {
    var content = this.stringify();
    return parse(wrapInSvgString(content)).childNodes[0];
  };

  BrowserSpriteSymbol.prototype.unmount = function unmount () {
    this.node.parentNode.removeChild(this.node);
  };

  Object.defineProperties( BrowserSpriteSymbol.prototype, prototypeAccessors );

  return BrowserSpriteSymbol;
}(SpriteSymbol));

var defaultConfig$1 = {
  /**
   * Should following options be automatically configured:
   * - `syncUrlsWithBaseTag`
   * - `locationChangeAngularEmitter`
   * - `moveGradientsOutsideSymbol`
   * @type {boolean}
   */
  autoConfigure: true,

  /**
   * Default mounting selector
   * @type {string}
   */
  mountTo: 'body',

  /**
   * Fix disappearing SVG elements when <base href> exists.
   * Executes when sprite mounted.
   * @see http://stackoverflow.com/a/18265336/796152
   * @see https://github.com/everdimension/angular-svg-base-fix
   * @see https://github.com/angular/angular.js/issues/8934#issuecomment-56568466
   * @type {boolean}
   */
  syncUrlsWithBaseTag: false,

  /**
   * Should sprite listen custom location change event
   * @type {boolean}
   */
  listenLocationChangeEvent: true,

  /**
   * Custom window event name which should be emitted to update sprite urls
   * @type {string}
   */
  locationChangeEvent: 'locationChange',

  /**
   * Emit location change event in Angular automatically
   * @type {boolean}
   */
  locationChangeAngularEmitter: false,

  /**
   * Selector to find symbols usages when updating sprite urls
   * @type {string}
   */
  usagesToUpdate: 'use[*|href]',

  /**
   * Fix Firefox bug when gradients and patterns don't work if they are within a symbol.
   * Executes when sprite is rendered, but not mounted.
   * @see https://bugzilla.mozilla.org/show_bug.cgi?id=306674
   * @see https://bugzilla.mozilla.org/show_bug.cgi?id=353575
   * @see https://bugzilla.mozilla.org/show_bug.cgi?id=1235364
   * @type {boolean}
   */
  moveGradientsOutsideSymbol: false
};

/**
 * @param {*} arrayLike
 * @return {Array}
 */
var arrayFrom = function (arrayLike) {
  return Array.prototype.slice.call(arrayLike, 0);
};

var ua = navigator.userAgent;

var browser = {
  isChrome: /chrome/i.test(ua),
  isFirefox: /firefox/i.test(ua),

  // https://msdn.microsoft.com/en-us/library/ms537503(v=vs.85).aspx
  isIE: /msie/i.test(ua) || /trident/i.test(ua),
  isEdge: /edge/i.test(ua)
};

/**
 * @param {string} name
 * @param {*} data
 */
var dispatchEvent = function (name, data) {
  var event = document.createEvent('CustomEvent');
  event.initCustomEvent(name, false, false, data);
  window.dispatchEvent(event);
};

/**
 * IE doesn't evaluate <style> tags in SVGs that are dynamically added to the page.
 * This trick will trigger IE to read and use any existing SVG <style> tags.
 * @see https://github.com/iconic/SVGInjector/issues/23
 * @see https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/10898469/
 *
 * @param {Element} node DOM Element to search <style> tags in
 * @return {Array<HTMLStyleElement>}
 */
var evalStylesIEWorkaround = function (node) {
  var updatedNodes = [];

  arrayFrom(node.querySelectorAll('style'))
    .forEach(function (style) {
      style.textContent += '';
      updatedNodes.push(style);
    });

  return updatedNodes;
};

/**
 * @param {string} [url] If not provided - current URL will be used
 * @return {string}
 */
var getUrlWithoutFragment = function (url) {
  return (url || window.location.href).split('#')[0];
};

/* global angular */
/**
 * @param {string} eventName
 */
var locationChangeAngularEmitter = function (eventName) {
  angular.module('ng').run(['$rootScope', function ($rootScope) {
    $rootScope.$on('$locationChangeSuccess', function (e, newUrl, oldUrl) {
      dispatchEvent(eventName, { oldUrl: oldUrl, newUrl: newUrl });
    });
  }]);
};

var defaultSelector = 'linearGradient, radialGradient, pattern';

/**
 * @param {Element} svg
 * @param {string} [selector]
 * @return {Element}
 */
var moveGradientsOutsideSymbol = function (svg, selector) {
  if ( selector === void 0 ) selector = defaultSelector;

  arrayFrom(svg.querySelectorAll('symbol')).forEach(function (symbol) {
    arrayFrom(symbol.querySelectorAll(selector)).forEach(function (node) {
      symbol.parentNode.insertBefore(node, symbol);
    });
  });
  return svg;
};

/**
 * @param {NodeList} nodes
 * @param {Function} [matcher]
 * @return {Attr[]}
 */
function selectAttributes(nodes, matcher) {
  var attrs = arrayFrom(nodes).reduce(function (acc, node) {
    if (!node.attributes) {
      return acc;
    }

    var arrayfied = arrayFrom(node.attributes);
    var matched = matcher ? arrayfied.filter(matcher) : arrayfied;
    return acc.concat(matched);
  }, []);

  return attrs;
}

/**
 * @param {NodeList|Node} nodes
 * @param {boolean} [clone=true]
 * @return {string}
 */

var xLinkNS = namespaces_1.xlink.uri;
var xLinkAttrName = 'xlink:href';

// eslint-disable-next-line no-useless-escape
var specialUrlCharsPattern = /[{}|\\\^\[\]`"<>]/g;

function encoder(url) {
  return url.replace(specialUrlCharsPattern, function (match) {
    return ("%" + (match[0].charCodeAt(0).toString(16).toUpperCase()));
  });
}

/**
 * @param {NodeList} nodes
 * @param {string} startsWith
 * @param {string} replaceWith
 * @return {NodeList}
 */
function updateReferences(nodes, startsWith, replaceWith) {
  arrayFrom(nodes).forEach(function (node) {
    var href = node.getAttribute(xLinkAttrName);
    if (href && href.indexOf(startsWith) === 0) {
      var newUrl = href.replace(startsWith, replaceWith);
      node.setAttributeNS(xLinkNS, xLinkAttrName, newUrl);
    }
  });

  return nodes;
}

/**
 * List of SVG attributes to update url() target in them
 */
var attList = [
  'clipPath',
  'colorProfile',
  'src',
  'cursor',
  'fill',
  'filter',
  'marker',
  'markerStart',
  'markerMid',
  'markerEnd',
  'mask',
  'stroke',
  'style'
];

var attSelector = attList.map(function (attr) { return ("[" + attr + "]"); }).join(',');

/**
 * Update URLs in svg image (like `fill="url(...)"`) and update referencing elements
 * @param {Element} svg
 * @param {NodeList} references
 * @param {string|RegExp} startsWith
 * @param {string} replaceWith
 * @return {void}
 *
 * @example
 * const sprite = document.querySelector('svg.sprite');
 * const usages = document.querySelectorAll('use');
 * updateUrls(sprite, usages, '#', 'prefix#');
 */
var updateUrls = function (svg, references, startsWith, replaceWith) {
  var startsWithEncoded = encoder(startsWith);
  var replaceWithEncoded = encoder(replaceWith);

  var nodes = svg.querySelectorAll(attSelector);
  var attrs = selectAttributes(nodes, function (ref) {
    var localName = ref.localName;
    var value = ref.value;

    return attList.indexOf(localName) !== -1 && value.indexOf(("url(" + startsWithEncoded)) !== -1;
  });

  attrs.forEach(function (attr) { return attr.value = attr.value.replace(startsWithEncoded, replaceWithEncoded); });
  updateReferences(references, startsWithEncoded, replaceWithEncoded);
};

/**
 * Internal emitter events
 * @enum
 * @private
 */
var Events = {
  MOUNT: 'mount',
  SYMBOL_MOUNT: 'symbol_mount'
};

var BrowserSprite = (function (Sprite$$1) {
  function BrowserSprite(cfg) {
    var this$1 = this;
    if ( cfg === void 0 ) cfg = {};

    Sprite$$1.call(this, index(defaultConfig$1, cfg));

    var emitter = mitt();
    this._emitter = emitter;
    this.node = null;

    var ref = this;
    var config = ref.config;

    if (config.autoConfigure) {
      this._autoConfigure(cfg);
    }

    if (config.syncUrlsWithBaseTag) {
      var baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');
      emitter.on(Events.MOUNT, function () { return this$1.updateUrls('#', baseUrl); });
    }

    var handleLocationChange = this._handleLocationChange.bind(this);
    this._handleLocationChange = handleLocationChange;

    // Provide way to update sprite urls externally via dispatching custom window event
    if (config.listenLocationChangeEvent) {
      window.addEventListener(config.locationChangeEvent, handleLocationChange);
    }

    // Emit location change event in Angular automatically
    if (config.locationChangeAngularEmitter) {
      locationChangeAngularEmitter(config.locationChangeEvent);
    }

    // After sprite mounted
    emitter.on(Events.MOUNT, function (spriteNode) {
      if (config.moveGradientsOutsideSymbol) {
        moveGradientsOutsideSymbol(spriteNode);
      }
    });

    // After symbol mounted into sprite
    emitter.on(Events.SYMBOL_MOUNT, function (symbolNode) {
      if (config.moveGradientsOutsideSymbol) {
        moveGradientsOutsideSymbol(symbolNode.parentNode);
      }

      if (browser.isIE || browser.isEdge) {
        evalStylesIEWorkaround(symbolNode);
      }
    });
  }

  if ( Sprite$$1 ) BrowserSprite.__proto__ = Sprite$$1;
  BrowserSprite.prototype = Object.create( Sprite$$1 && Sprite$$1.prototype );
  BrowserSprite.prototype.constructor = BrowserSprite;

  var prototypeAccessors = { isMounted: {} };

  /**
   * @return {boolean}
   */
  prototypeAccessors.isMounted.get = function () {
    return !!this.node;
  };

  /**
   * Automatically configure following options
   * - `syncUrlsWithBaseTag`
   * - `locationChangeAngularEmitter`
   * - `moveGradientsOutsideSymbol`
   * @param {Object} cfg
   * @private
   */
  BrowserSprite.prototype._autoConfigure = function _autoConfigure (cfg) {
    var ref = this;
    var config = ref.config;

    if (typeof cfg.syncUrlsWithBaseTag === 'undefined') {
      config.syncUrlsWithBaseTag = typeof document.getElementsByTagName('base')[0] !== 'undefined';
    }

    if (typeof cfg.locationChangeAngularEmitter === 'undefined') {
      config.locationChangeAngularEmitter = 'angular' in window;
    }

    if (typeof cfg.moveGradientsOutsideSymbol === 'undefined') {
      config.moveGradientsOutsideSymbol = browser.isFirefox;
    }
  };

  /**
   * @param {Event} event
   * @param {Object} event.detail
   * @param {string} event.detail.oldUrl
   * @param {string} event.detail.newUrl
   * @private
   */
  BrowserSprite.prototype._handleLocationChange = function _handleLocationChange (event) {
    var ref = event.detail;
    var oldUrl = ref.oldUrl;
    var newUrl = ref.newUrl;
    this.updateUrls(oldUrl, newUrl);
  };

  /**
   * Add new symbol. If symbol with the same id exists it will be replaced.
   * If sprite already mounted - `symbol.mount(sprite.node)` will be called.
   * @fires Events#SYMBOL_MOUNT
   * @param {BrowserSpriteSymbol} symbol
   * @return {boolean} `true` - symbol was added, `false` - replaced
   */
  BrowserSprite.prototype.add = function add (symbol) {
    var sprite = this;
    var isNewSymbol = Sprite$$1.prototype.add.call(this, symbol);

    if (this.isMounted && isNewSymbol) {
      symbol.mount(sprite.node);
      this._emitter.emit(Events.SYMBOL_MOUNT, symbol.node);
    }

    return isNewSymbol;
  };

  /**
   * Attach to existing DOM node
   * @param {string|Element} target
   * @return {Element|null} attached DOM Element. null if node to attach not found.
   */
  BrowserSprite.prototype.attach = function attach (target) {
    var this$1 = this;

    var sprite = this;

    if (sprite.isMounted) {
      return sprite.node;
    }

    /** @type Element */
    var node = typeof target === 'string' ? document.querySelector(target) : target;
    sprite.node = node;

    // Already added symbols needs to be mounted
    this.symbols.forEach(function (symbol) {
      symbol.mount(sprite.node);
      this$1._emitter.emit(Events.SYMBOL_MOUNT, symbol.node);
    });

    // Create symbols from existing DOM nodes, add and mount them
    arrayFrom(node.querySelectorAll('symbol'))
      .forEach(function (symbolNode) {
        var symbol = BrowserSpriteSymbol.createFromExistingNode(symbolNode);
        symbol.node = symbolNode; // hack to prevent symbol mounting to sprite when adding
        sprite.add(symbol);
      });

    this._emitter.emit(Events.MOUNT, node);

    return node;
  };

  BrowserSprite.prototype.destroy = function destroy () {
    var ref = this;
    var config = ref.config;
    var symbols = ref.symbols;
    var _emitter = ref._emitter;

    symbols.forEach(function (s) { return s.destroy(); });

    _emitter.off('*');
    window.removeEventListener(config.locationChangeEvent, this._handleLocationChange);

    if (this.isMounted) {
      this.unmount();
    }
  };

  /**
   * @fires Events#MOUNT
   * @param {string|Element} [target]
   * @param {boolean} [prepend=false]
   * @return {Element|null} rendered sprite node. null if mount node not found.
   */
  BrowserSprite.prototype.mount = function mount (target, prepend) {
    if ( target === void 0 ) target = this.config.mountTo;
    if ( prepend === void 0 ) prepend = false;

    var sprite = this;

    if (sprite.isMounted) {
      return sprite.node;
    }

    var mountNode = typeof target === 'string' ? document.querySelector(target) : target;
    var node = sprite.render();
    this.node = node;

    if (prepend && mountNode.childNodes[0]) {
      mountNode.insertBefore(node, mountNode.childNodes[0]);
    } else {
      mountNode.appendChild(node);
    }

    this._emitter.emit(Events.MOUNT, node);

    return node;
  };

  /**
   * @return {Element}
   */
  BrowserSprite.prototype.render = function render () {
    return parse(this.stringify());
  };

  /**
   * Detach sprite from the DOM
   */
  BrowserSprite.prototype.unmount = function unmount () {
    this.node.parentNode.removeChild(this.node);
  };

  /**
   * Update URLs in sprite and usage elements
   * @param {string} oldUrl
   * @param {string} newUrl
   * @return {boolean} `true` - URLs was updated, `false` - sprite is not mounted
   */
  BrowserSprite.prototype.updateUrls = function updateUrls$1 (oldUrl, newUrl) {
    if (!this.isMounted) {
      return false;
    }

    var usages = document.querySelectorAll(this.config.usagesToUpdate);

    updateUrls(
      this.node,
      usages,
      ((getUrlWithoutFragment(oldUrl)) + "#"),
      ((getUrlWithoutFragment(newUrl)) + "#")
    );

    return true;
  };

  Object.defineProperties( BrowserSprite.prototype, prototypeAccessors );

  return BrowserSprite;
}(Sprite));

var ready$1 = createCommonjsModule(function (module) {
/*!
  * domready (c) Dustin Diaz 2014 - License MIT
  */
!function (name, definition) {

  { module.exports = definition(); }

}('domready', function () {

  var fns = [], listener
    , doc = document
    , hack = doc.documentElement.doScroll
    , domContentLoaded = 'DOMContentLoaded'
    , loaded = (hack ? /^loaded|^c/ : /^loaded|^i|^c/).test(doc.readyState);


  if (!loaded)
  { doc.addEventListener(domContentLoaded, listener = function () {
    doc.removeEventListener(domContentLoaded, listener);
    loaded = 1;
    while (listener = fns.shift()) { listener(); }
  }); }

  return function (fn) {
    loaded ? setTimeout(fn, 0) : fns.push(fn);
  }

});
});

var spriteNodeId = '__SVG_SPRITE_NODE__';
var spriteGlobalVarName = '__SVG_SPRITE__';
var isSpriteExists = !!window[spriteGlobalVarName];

// eslint-disable-next-line import/no-mutable-exports
var sprite;

if (isSpriteExists) {
  sprite = window[spriteGlobalVarName];
} else {
  sprite = new BrowserSprite({ attrs: { id: spriteNodeId } });
  window[spriteGlobalVarName] = sprite;
}

var loadSprite = function () {
  /**
   * Check for page already contains sprite node
   * If found - attach to and reuse it's content
   * If not - render and mount the new sprite
   */
  var existing = document.getElementById(spriteNodeId);

  if (existing) {
    sprite.attach(existing);
  } else {
    sprite.mount(document.body, true);
  }
};

if (document.body) {
  loadSprite();
} else {
  ready$1(loadSprite);
}

var sprite$1 = sprite;

return sprite$1;

})));

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(35)))

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ACTIVE_EFFECT_DELAY = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(126);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Touch = __webpack_require__(9);

var _Touch2 = _interopRequireDefault(_Touch);

var _classnames = __webpack_require__(3);

var _classnames2 = _interopRequireDefault(_classnames);

var _getClassName = __webpack_require__(2);

var _getClassName2 = _interopRequireDefault(_getClassName);

var _removeObjectKeys = __webpack_require__(5);

var _removeObjectKeys2 = _interopRequireDefault(_removeObjectKeys);

var _platform = __webpack_require__(4);

var _offset = __webpack_require__(30);

var _touch = __webpack_require__(34);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ts = function ts() {
  return +Date.now();
};
var baseClassNames = (0, _getClassName2.default)('Tappable');
var osname = (0, _platform.platform)();

var ACTIVE_DELAY = 70;
var ACTIVE_EFFECT_DELAY = exports.ACTIVE_EFFECT_DELAY = 600;

var storage = {};

/**
 * Очищает таймауты и хранилище для всех экземпляров компонента, кроме переданного
 *
 * @param {String} exclude ID экземпляра-исключения
 * @returns {void}
 */
function deactivateOtherInstances(exclude) {
  Object.keys(storage).filter(function (id) {
    return id !== exclude;
  }).forEach(function (id) {
    clearTimeout(storage[id].activeTimeout);
    clearTimeout(storage[id].timeout);
    storage[id].stop();

    delete storage[id];
  });
}

var Tappable = function (_Component) {
  _inherits(Tappable, _Component);

  function Tappable(props) {
    _classCallCheck(this, Tappable);

    var _this = _possibleConstructorReturn(this, (Tappable.__proto__ || Object.getPrototypeOf(Tappable)).call(this, props));

    _this.isSlide = false;

    _this.onStart = function (_ref) {
      var originalEvent = _ref.originalEvent;

      if (originalEvent.touches && originalEvent.touches.length > 1) {
        return deactivateOtherInstances();
      }

      if (osname === _platform.ANDROID) {
        _this.onDown(originalEvent);
      }

      storage[_this.id] = {};
      _this.getStorage().stop = _this.stop;
      _this.getStorage().activeTimeout = setTimeout(_this.start, ACTIVE_DELAY);
    };

    _this.onMove = function (e) {
      if (e.shiftXAbs > 20 || e.shiftYAbs > 20) {
        _this.isSlide = true;
        _this.stop();
      }
    };

    _this.onEnd = function (_ref2) {
      var originalEvent = _ref2.originalEvent;

      var now = ts();

      if (originalEvent.touches && originalEvent.touches.length > 0) {
        _this.isSlide = false;
        return;
      }

      if (_this.state.active) {
        if (now - _this.state.ts >= 100) {
          // Долгий тап, выключаем подсветку
          _this.stop();
        } else {
          // Короткий тап, оставляем подсветку
          var timeout = setTimeout(_this.stop, _this.props.activeEffectDelay - now + _this.state.ts);
          var store = _this.getStorage();

          if (store) {
            store.timeout = timeout;
          }
        }
      } else if (!_this.isSlide) {
        // Очень короткий тап, включаем подсветку
        _this.start();

        var _timeout = setTimeout(_this.stop, _this.props.activeEffectDelay);

        if (_this.getStorage()) {
          clearTimeout(_this.getStorage().activeTimeout);
          _this.getStorage().timeout = _timeout;
        } else {
          _this.timeout = _timeout;
        }
      }

      _this.isSlide = false;
    };

    _this.onDown = function (e) {
      var _getOffsetRect = (0, _offset.getOffsetRect)(_this.container),
          top = _getOffsetRect.top,
          left = _getOffsetRect.left;

      var x = (0, _touch.coordX)(e);
      var y = (0, _touch.coordY)(e);
      var key = 'wave' + Date.now().toString();

      _this.setState(function (state) {
        return {
          clicks: Object.assign({}, state.clicks, _defineProperty({}, key, {
            x: Math.round(x - left),
            y: Math.round(y - top)
          }))
        };
      });

      _this.wavesTimeout = setTimeout(function () {
        _this.setState(function (state) {
          var clicks = Object.assign({}, state.clicks);
          delete clicks[key];
          return { clicks: clicks };
        });
      }, 225);
    };

    _this.onClick = function (e) {
      _this.props.onClick && _this.props.onClick(e);
    };

    _this.start = function () {
      if (!_this.state.active) {
        _this.setState({
          active: true,
          ts: ts()
        });
      }
      deactivateOtherInstances(_this.id);
    };

    _this.stop = function () {
      if (_this.state.active) {
        _this.setState({
          active: false,
          ts: null
        });
      }
      if (_this.getStorage()) {
        clearTimeout(_this.getStorage().activeTimeout);
        delete storage[_this.id];
      }
    };

    _this.getStorage = function () {
      return storage[_this.id];
    };

    _this.getContainer = function (container) {
      if (container) {
        _this.container = container.container || container;
      }
    };

    _this.id = Math.round(Math.random() * 1e8).toString(16);
    _this.state = {
      clicks: {},
      active: false,
      ts: null
    };
    return _this;
  }

  /**
   * Обрабатывает событие touchstart
   *
   * @returns {void}
   */


  /**
   * Обрабатывает событие touchmove
   *
   * @returns {void}
   */


  /**
   * Обрабатывает событие touchend
   *
   * @returns {void}
   */


  /**
   * Реализует эффект при тапе для Андроида
   *
   * @returns {void}
   */


  /**
   * Устанавливает активное выделение
   *
   * @returns {void}
   */


  /**
   * Снимает активное выделение
   *
   * @returns {void}
   */


  /**
   * Возвращает хранилище для экземпляра компонента
   *
   * @returns {Object} Хранилище для текущего экземпляра компонента
   */


  /**
   * Берет ref на DOM-ноду из экземпляра Touch
   *
   * @param {React.Component} container Touch component instance
   * @returns {void}
   */


  _createClass(Tappable, [{
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (storage[this.id]) {
        clearTimeout(storage[this.id].timeout);
        clearTimeout(storage[this.id].activeTimeout);

        delete storage[this.id];
      }

      clearTimeout(this.wavesTimeout);
    }
  }, {
    key: 'render',
    value: function render() {
      var _state = this.state,
          clicks = _state.clicks,
          active = _state.active;

      var Component = this.props.onClick ? _Touch2.default : this.props.component;
      var classes = (0, _classnames2.default)(baseClassNames, this.props.className, {
        'Tappable--active': active,
        'Tappable--inactive': !active
      });

      var props = {};

      if (this.props.onClick) {
        props.component = this.props.component;
        props.onStart = this.onStart;
        props.onMove = this.onMove;
        props.onEnd = this.onEnd;
        props.ref = this.getContainer;
      }

      var nativeProps = (0, _removeObjectKeys2.default)(Object.assign({}, this.props), ['onClick', 'children', 'className', 'propagation', 'component', 'activeEffectDelay']);

      return _react2.default.createElement(
        Component,
        _extends({ className: classes }, props, nativeProps, { onClick: this.onClick }),
        osname === _platform.ANDROID && _react2.default.createElement(
          'span',
          { className: 'Tappable__waves', ref: this.getContainer },
          Object.keys(clicks).map(function (k) {
            return _react2.default.createElement('span', { className: 'Tappable__wave', style: { top: clicks[k].y, left: clicks[k].x }, key: k });
          })
        ),
        this.props.children
      );
    }
  }]);

  return Tappable;
}(_react.Component);

Tappable.propTypes = {
  onClick: _propTypes2.default.func,
  className: _propTypes2.default.string,
  children: _propTypes2.default.node,
  component: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.element]),
  role: _propTypes2.default.string,
  activeEffectDelay: _propTypes2.default.number
};
Tappable.defaultProps = {
  component: 'div',
  role: 'button',
  activeEffectDelay: ACTIVE_EFFECT_DELAY
};
exports.default = Tappable;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _touch = __webpack_require__(34);

var _removeObjectKeys = __webpack_require__(5);

var _removeObjectKeys2 = _interopRequireDefault(_removeObjectKeys);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var events = (0, _touch.getSupportedEvents)();

var Touch = function (_Component) {
  _inherits(Touch, _Component);

  function Touch() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Touch);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Touch.__proto__ || Object.getPrototypeOf(Touch)).call.apply(_ref, [this].concat(args))), _this), _this.cancelClick = false, _this.gesture = {}, _this.onStart = function (e) {
      _this.gesture = {
        startX: (0, _touch.coordX)(e),
        startY: (0, _touch.coordY)(e),
        startT: new Date(),
        isPressed: true
      };

      // Вызываем нужные колбеки из props
      var outputEvent = Object.assign({}, _this.gesture, {
        originalEvent: e
      });

      if (_this.props.onStart) {
        _this.props.onStart(outputEvent);
      }

      if (_this.props.onStartX) {
        _this.props.onStartX(outputEvent);
      }

      if (_this.props.onStartY) {
        _this.props.onStartY(outputEvent);
      }

      !_touch.touchEnabled && _this.subscribe(_this.document);
    }, _this.onMove = function (e) {
      var _this$gesture = _this.gesture,
          isPressed = _this$gesture.isPressed,
          isX = _this$gesture.isX,
          isY = _this$gesture.isY,
          startX = _this$gesture.startX,
          startY = _this$gesture.startY;


      if (isPressed) {
        // смещения
        var shiftX = (0, _touch.coordX)(e) - startX;
        var shiftY = (0, _touch.coordY)(e) - startY;

        // абсолютные значения смещений
        var shiftXAbs = Math.abs(shiftX);
        var shiftYAbs = Math.abs(shiftY);

        // Если определяем мультитач, то прерываем жест
        if (!!e.touches && e.touches.length > 1) {
          return _this.onEnd(e);
        }

        // если мы ещё не определились
        if (!isX && !isY) {
          var willBeX = shiftXAbs >= 5 && shiftXAbs > shiftYAbs;
          var willBeY = shiftYAbs >= 5 && shiftYAbs > shiftXAbs;
          var willBeSlidedX = willBeX && !!_this.props.onMoveX || !!_this.props.onMove;
          var willBeSlidedY = willBeY && !!_this.props.onMoveY || !!_this.props.onMove;

          _this.gesture.isY = willBeY;
          _this.gesture.isX = willBeX;
          _this.gesture.isSlideX = willBeSlidedX;
          _this.gesture.isSlideY = willBeSlidedY;
          _this.gesture.isSlide = willBeSlidedX || willBeSlidedY;
        }

        if (_this.gesture.isSlide) {
          _this.gesture.shiftX = shiftX;
          _this.gesture.shiftY = shiftY;
          _this.gesture.shiftXAbs = shiftXAbs;
          _this.gesture.shiftYAbs = shiftYAbs;

          // Вызываем нужные колбеки из props
          var outputEvent = Object.assign({}, _this.gesture, {
            originalEvent: e
          });

          if (_this.props.onMove) {
            _this.props.onMove(outputEvent);
          }

          if (_this.gesture.isSlideX && _this.props.onMoveX) {
            _this.props.onMoveX(outputEvent);
          }

          if (_this.gesture.isSlideY && _this.props.onMoveY) {
            _this.props.onMoveY(outputEvent);
          }
        }
      }
    }, _this.onEnd = function (e) {
      var _this$gesture2 = _this.gesture,
          isPressed = _this$gesture2.isPressed,
          isSlide = _this$gesture2.isSlide,
          isSlideX = _this$gesture2.isSlideX,
          isSlideY = _this$gesture2.isSlideY;


      if (isPressed) {
        // Вызываем нужные колбеки из props
        var outputEvent = Object.assign({}, _this.gesture, {
          originalEvent: e
        });

        if (_this.props.onEnd) {
          _this.props.onEnd(outputEvent);
        }

        if (isSlideY && _this.props.onEndY) {
          _this.props.onEndY(outputEvent);
        }

        if (isSlideX && _this.props.onEndX) {
          _this.props.onEndX(outputEvent);
        }
      }

      // Если закончили жест на ссылке, выставляем флаг для отмены перехода
      _this.cancelClick = e.target.tagName === 'A' && isSlide;
      _this.gesture = {};

      !_touch.touchEnabled && _this.unsubscribe(_this.document);
    }, _this.onDragStart = function (e) {
      if (e.target.tagName === 'A' || e.target.tagName === 'IMG') {
        return e.preventDefault();
      } else return;
    }, _this.onClick = function (e) {
      if (_this.cancelClick) {
        _this.cancelClick = false;

        return e.preventDefault();
      }
      _this.props.onClick && _this.props.onClick(e);
    }, _this.getRef = function (container) {
      return _this.container = container;
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Touch, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.container.addEventListener(events[0], this.onStart, { capture: this.props.useCapture, passive: false });
      _touch.touchEnabled && this.subscribe(this.container);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.container.removeEventListener(events[0], this.onStart, { capture: this.props.useCapture, passive: false });
      _touch.touchEnabled && this.unsubscribe(this.container);
    }

    /**
     * Обработчик событий touchstart
     *
     * @param {Object} e Браузерное событие
     * @param {Object} props Component props
     * @returns {void}
     */


    /**
     * Обработчик событий touchmove
     *
     * @param {Object} e Браузерное событие
     * @param {Object} props Component props
     * @returns {void}
     */


    /**
     * Обработчик событий touchend, touchcancel
     *
     * @param {Object} e Браузерное событие
     * @param {Object} props Component props
     * @returns {void}
     */

  }, {
    key: 'subscribe',
    value: function subscribe(element) {
      element.addEventListener(events[1], this.onMove, { capture: this.props.useCapture, passive: false });
      element.addEventListener(events[2], this.onEnd, { capture: this.props.useCapture, passive: false });
      element.addEventListener(events[3], this.onEnd, { capture: this.props.useCapture, passive: false });
    }
  }, {
    key: 'unsubscribe',
    value: function unsubscribe(element) {
      element.removeEventListener(events[1], this.onMove, { capture: this.props.useCapture, passive: false });
      element.removeEventListener(events[2], this.onEnd, { capture: this.props.useCapture, passive: false });
      element.removeEventListener(events[3], this.onEnd, { capture: this.props.useCapture, passive: false });
    }

    /**
     * Обработчик событий dragstart
     * Отменяет нативное браузерное поведение для вложенных ссылок и изображений
     *
     * @param {Object} e Браузерное событие
     * @returns {void}
     */


    /**
     * Обработчик клика по компоненту
     * Отменяет переход по вложенной ссылке, если был зафиксирован свайп
     *
     * @param {Object} e Браузерное событие
     * @returns {void}
     */

  }, {
    key: 'render',
    value: function render() {
      var handlers = {
        onDragStart: this.onDragStart,
        onClick: this.onClick
      };
      var ComponentName = this.props.component;
      var nativeProps = (0, _removeObjectKeys2.default)(Object.assign({}, this.props), ['onStart', 'onStartX', 'onStartY', 'onMove', 'onMoveX', 'onMoveY', 'onEnd', 'onEndX', 'onEndY', 'useCapture', 'component']);

      return _react2.default.createElement(
        ComponentName,
        _extends({}, handlers, nativeProps, { ref: this.getRef }),
        this.props.children
      );
    }
  }, {
    key: 'document',
    get: function get() {
      return this.context.document || document;
    }
  }]);

  return Touch;
}(_react.Component);

Touch.propTypes = {
  onStart: _propTypes2.default.func,
  onStartX: _propTypes2.default.func,
  onStartY: _propTypes2.default.func,
  onMove: _propTypes2.default.func,
  onMoveX: _propTypes2.default.func,
  onMoveY: _propTypes2.default.func,
  onEnd: _propTypes2.default.func,
  onEndX: _propTypes2.default.func,
  onEndY: _propTypes2.default.func,
  useCapture: _propTypes2.default.bool,
  component: _propTypes2.default.string,
  children: _propTypes2.default.node,
  onClick: _propTypes2.default.func
};
Touch.defaultProps = {
  component: 'div',
  children: '',
  useCapture: false
};
Touch.contextTypes = {
  document: _propTypes2.default.any
};
exports.default = Touch;

/***/ }),
/* 10 */
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
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var requestAnimationFrame = typeof window !== 'undefined' && window.requestAnimationFrame ? window.requestAnimationFrame : function (cb) {
  return setTimeout(cb, 1000 / 60);
};

exports.default = requestAnimationFrame;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames2 = __webpack_require__(3);

var _classnames3 = _interopRequireDefault(_classnames2);

var _getClassName = __webpack_require__(2);

var _getClassName2 = _interopRequireDefault(_getClassName);

var _Tappable = __webpack_require__(8);

var _Tappable2 = _interopRequireDefault(_Tappable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var baseClassNames = (0, _getClassName2.default)('ActionSheet-Item');

var ActionSheetItem = function (_React$Component) {
  _inherits(ActionSheetItem, _React$Component);

  function ActionSheetItem() {
    _classCallCheck(this, ActionSheetItem);

    return _possibleConstructorReturn(this, (ActionSheetItem.__proto__ || Object.getPrototypeOf(ActionSheetItem)).apply(this, arguments));
  }

  _createClass(ActionSheetItem, [{
    key: 'render',
    value: function render() {
      var classNames = (0, _classnames3.default)(baseClassNames, _defineProperty({}, 'ActionSheet-Item--' + this.props.theme, this.props.theme));
      return _react2.default.createElement(
        _Tappable2.default,
        {
          onClick: this.props.onClick,
          className: classNames,
          style: this.props.style
        },
        this.props.children
      );
    }
  }]);

  return ActionSheetItem;
}(_react2.default.Component);

ActionSheetItem.propTypes = {
  theme: _propTypes2.default.oneOf(['default', 'destructive', 'cancel']),
  children: _propTypes2.default.node,
  style: _propTypes2.default.object,
  onClick: _propTypes2.default.func,
  autoclose: _propTypes2.default.bool
};
ActionSheetItem.defaultProps = {
  theme: 'default'
};
exports.default = ActionSheetItem;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _getClassName = __webpack_require__(2);

var _getClassName2 = _interopRequireDefault(_getClassName);

var _classnames2 = __webpack_require__(3);

var _classnames3 = _interopRequireDefault(_classnames2);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _removeObjectKeys = __webpack_require__(5);

var _removeObjectKeys2 = _interopRequireDefault(_removeObjectKeys);

__webpack_require__(110);

var _platform = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var osname = (0, _platform.platform)();

var baseClassNames = (0, _getClassName2.default)('PopoutWrapper');

var PopoutWrapper = function (_React$Component) {
  _inherits(PopoutWrapper, _React$Component);

  function PopoutWrapper() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, PopoutWrapper);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = PopoutWrapper.__proto__ || Object.getPrototypeOf(PopoutWrapper)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      opened: false
    }, _this.preventTouch = function (e) {
      return e.preventDefault();
    }, _this.onClick = function (e) {
      if (_this.state.opened) {
        _this.props.onClick && _this.props.onClick(e);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(PopoutWrapper, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      // TODO add "animationend" event instead of setTimeout
      window.addEventListener('touchmove', this.preventTouch, { passive: false });
      console.log('sth');
      this.openTimeout = setTimeout(function () {
        return _this2.setState({ opened: true });
      }, osname === _platform.ANDROID ? 200 : 300);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      clearTimeout(this.openTimeout);
      window.removeEventListener('touchmove', this.preventTouch, { passive: false });
    }
  }, {
    key: 'render',
    value: function render() {
      var _classnames;

      var containerClassNames = (0, _classnames3.default)('PopoutWrapper__container', (_classnames = {}, _defineProperty(_classnames, 'PopoutWrapper__container--v-' + this.props.v, true), _defineProperty(_classnames, 'PopoutWrapper__container--h-' + this.props.h, true), _classnames));

      var classNames = (0, _classnames3.default)(baseClassNames, {
        'PopoutWrapper--closing': this.props.closing
      });

      return _react2.default.createElement(
        'div',
        _extends({ className: classNames, onClick: this.onClick }, (0, _removeObjectKeys2.default)(this.props, ['hasMask', 'v', 'h', 'closing', 'style', 'onClick'])),
        this.props.hasMask && _react2.default.createElement('div', { className: 'PopoutWrapper__mask' }),
        _react2.default.createElement(
          'div',
          { className: containerClassNames, style: this.props.style },
          this.props.children
        )
      );
    }
  }]);

  return PopoutWrapper;
}(_react2.default.Component);

PopoutWrapper.propTypes = {
  hasMask: _propTypes2.default.bool,
  v: _propTypes2.default.oneOf(['top', 'center', 'bottom']),
  h: _propTypes2.default.oneOf(['left', 'center', 'right']),
  closing: _propTypes2.default.bool,
  onClick: _propTypes2.default.func,
  style: _propTypes2.default.object,
  children: _propTypes2.default.node
};
PopoutWrapper.defaultProps = {
  hasMask: true,
  v: 'center',
  h: 'center',
  closing: false
};
exports.default = PopoutWrapper;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var supported = void 0,
    prefix = void 0;

if (typeof document !== 'undefined' && document.createElement) {
  var d = document.createElement('div');

  for (var i in d.style) {
    var m = i.match(/^(moz|webkit|ms|)(transition|animation)$/i);
    if (m) supported = true;
    if (m && m[1]) prefix = m[1];
  }
}

exports.default = { supported: supported, prefix: prefix };

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _PopoutWrapper = __webpack_require__(13);

var _PopoutWrapper2 = _interopRequireDefault(_PopoutWrapper);

var _getClassName = __webpack_require__(2);

var _getClassName2 = _interopRequireDefault(_getClassName);

var _classnames = __webpack_require__(3);

var _classnames2 = _interopRequireDefault(_classnames);

__webpack_require__(85);

var _platform = __webpack_require__(4);

var _transitionEvents = __webpack_require__(14);

var _transitionEvents2 = _interopRequireDefault(_transitionEvents);

var _ActionSheetItem = __webpack_require__(12);

var _ActionSheetItem2 = _interopRequireDefault(_ActionSheetItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var osname = (0, _platform.platform)();

var baseClassNames = (0, _getClassName2.default)('ActionSheet');

var ActionSheet = function (_React$Component) {
  _inherits(ActionSheet, _React$Component);

  function ActionSheet() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, ActionSheet);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ActionSheet.__proto__ || Object.getPrototypeOf(ActionSheet)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      closing: false
    }, _this.onClose = function () {
      _this.setState({ closing: true });
      _this.waitTransitionFinish(_this.props.onClose);
    }, _this.onItemClick = function (action, autoclose) {
      return function () {
        if (autoclose) {
          _this.setState({ closing: true });
          _this.waitTransitionFinish(function () {
            autoclose && _this.props.onClose();
            action && action();
          });
        } else {
          action && action();
        }
      };
    }, _this.stopPropagation = function (e) {
      return e.stopPropagation();
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ActionSheet, [{
    key: 'waitTransitionFinish',
    value: function waitTransitionFinish(eventHandler) {
      if (_transitionEvents2.default.supported) {
        var eventName = _transitionEvents2.default.prefix ? _transitionEvents2.default.prefix + 'TransitionEnd' : 'transitionend';

        this.el.removeEventListener(eventName, eventHandler);
        this.el.addEventListener(eventName, eventHandler);
      } else {
        setTimeout(eventHandler.bind(this), osname === _platform.ANDROID ? 200 : 300);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var style = this.props.style;

      var children = [];
      var hasHeader = osname === _platform.IOS && (this.props.title || this.props.text);
      var classNames = (0, _classnames2.default)(baseClassNames, {
        'ActionSheet--closing': this.state.closing
      });

      var Actions = _react2.default.Children.toArray(this.props.children).filter(function (Child) {
        return Child.props.theme !== 'cancel';
      });

      Actions.forEach(function (Child, index) {
        children.push(_react2.default.cloneElement(Child, {
          onClick: _this2.onItemClick(Child.props.onClick, Child.props.autoclose)
        }));
        if (osname === _platform.IOS && index < Actions.length - 1) children.push(_react2.default.createElement('div', { key: 'separator-' + index, className: 'ActionSheet__separator' }));
      });

      var CancelItem = _react2.default.Children.toArray(this.props.children).find(function (Child) {
        return Child.props.theme === 'cancel';
      }) || _react2.default.createElement(
        _ActionSheetItem2.default,
        { onClick: this.props.onClose, theme: 'cancel' },
        '\u041E\u0442\u043C\u0435\u043D\u0430'
      );

      return _react2.default.createElement(
        _PopoutWrapper2.default,
        {
          closing: this.state.closing,
          v: osname === _platform.IOS ? 'bottom' : 'center',
          h: 'center',
          onClick: this.onClose
        },
        _react2.default.createElement(
          'div',
          { className: classNames, style: style, ref: function ref(el) {
              return _this2.el = el;
            }, onClick: this.stopPropagation },
          _react2.default.createElement(
            'div',
            { className: 'ActionSheet__section' },
            _react2.default.createElement(
              'div',
              { className: 'ActionSheet__list' },
              hasHeader && _react2.default.createElement(
                'div',
                { className: 'ActionSheet__header' },
                this.props.title && _react2.default.createElement(
                  'div',
                  { className: 'ActionSheet__title' },
                  this.props.title
                ),
                this.props.text && _react2.default.createElement(
                  'div',
                  { className: 'ActionSheet__text' },
                  this.props.text
                )
              ),
              hasHeader && _react2.default.createElement('div', { className: 'ActionSheet__separator' }),
              children
            )
          ),
          osname === _platform.IOS && _react2.default.createElement(
            'div',
            { className: 'ActionSheet__section' },
            _react2.default.cloneElement(CancelItem, {
              onClick: this.onItemClick(CancelItem.props.onClick, true)
            })
          )
        )
      );
    }
  }]);

  return ActionSheet;
}(_react2.default.Component);

ActionSheet.propTypes = {
  title: _propTypes2.default.node,
  text: _propTypes2.default.node,
  onClose: _propTypes2.default.func.isRequired,
  style: _propTypes2.default.object,
  children: _propTypes2.default.node
};
exports.default = ActionSheet;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(86);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Tappable = __webpack_require__(8);

var _Tappable2 = _interopRequireDefault(_Tappable);

var _PopoutWrapper = __webpack_require__(13);

var _PopoutWrapper2 = _interopRequireDefault(_PopoutWrapper);

var _getClassName = __webpack_require__(2);

var _getClassName2 = _interopRequireDefault(_getClassName);

var _classnames2 = __webpack_require__(3);

var _classnames3 = _interopRequireDefault(_classnames2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var baseClassNames = (0, _getClassName2.default)('Alert');

var Alert = function (_Component) {
  _inherits(Alert, _Component);

  function Alert() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Alert);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Alert.__proto__ || Object.getPrototypeOf(Alert)).call.apply(_ref, [this].concat(args))), _this), _this.onItemClick = function (item) {
      return function () {
        item.autoclose && _this.props.onClose();
        item.action && item.action();
      };
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Alert, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          style = _props.style,
          actions = _props.actions,
          actionsLayout = _props.actionsLayout;

      var modifiers = {
        'Alert--v': actionsLayout === 'vertical',
        'Alert--h': actionsLayout === 'horizontal'
      };

      return _react2.default.createElement(
        _PopoutWrapper2.default,
        null,
        _react2.default.createElement(
          'div',
          { className: (0, _classnames3.default)(baseClassNames, modifiers), style: style },
          _react2.default.createElement(
            'div',
            { className: 'Alert__content' },
            this.props.children
          ),
          _react2.default.createElement(
            'footer',
            { className: 'Alert__footer' },
            actions.map(function (button, i) {
              return _react2.default.createElement(
                _Tappable2.default,
                {
                  component: 'button',
                  className: (0, _classnames3.default)('Alert__btn', _defineProperty({}, 'Alert__btn--' + (button.style || button.modifier), true)),
                  onClick: _this2.onItemClick(button),
                  key: 'alert-action-' + i
                },
                _react2.default.createElement('span', { dangerouslySetInnerHTML: { __html: button.title } })
              );
            })
          )
        )
      );
    }
  }]);

  return Alert;
}(_react.Component);

Alert.propTypes = {
  style: _propTypes2.default.object,
  children: _propTypes2.default.node,
  actionsLayout: _propTypes2.default.oneOf(['vertical', 'horizontal']),
  actions: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    title: _propTypes2.default.string.isRequired,
    action: _propTypes2.default.func.isRequired,
    style: _propTypes2.default.oneOf(['primary', 'cancel', 'destructive', 'default'])
  })),
  onClose: _propTypes2.default.func
};
Alert.defaultProps = {
  style: {},
  children: '',
  actionsLayout: 'horizontal'
};
exports.default = Alert;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sizes = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _getClassName = __webpack_require__(2);

var _getClassName2 = _interopRequireDefault(_getClassName);

var _classnames = __webpack_require__(3);

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

__webpack_require__(88);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var baseClassName = (0, _getClassName2.default)('Avatar');

var sizes = exports.sizes = [80, 72, 64, 56, 48, 40, 36, 32, 28];

var Avatar = function Avatar(_ref) {
  var src = _ref.src,
      size = _ref.size,
      style = _ref.style,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, ['src', 'size', 'style', 'className']);

  var Component = src ? 'img' : 'div';

  return _react2.default.createElement(
    'div',
    { className: (0, _classnames2.default)(baseClassName, className) },
    _react2.default.createElement(Component, _extends({
      className: 'Avatar__img',
      src: src,
      style: _extends({
        width: size,
        height: size
      }, style)
    }, props))
  );
};

Avatar.propTypes = {
  size: _propTypes2.default.oneOf([80, 72, 64, 56, 48, 40, 36, 32, 28]),
  src: _propTypes2.default.string,
  style: _propTypes2.default.object,
  className: _propTypes2.default.string
};

Avatar.defaultProps = {
  size: 48
};

exports.default = Avatar;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _ButtonNew = __webpack_require__(74);

var _ButtonNew2 = _interopRequireDefault(_ButtonNew);

var _ButtonOld = __webpack_require__(75);

var _ButtonOld2 = _interopRequireDefault(_ButtonOld);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Button = function (_Component) {
  _inherits(Button, _Component);

  function Button() {
    _classCallCheck(this, Button);

    return _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).apply(this, arguments));
  }

  _createClass(Button, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          v = _props.v,
          restProps = _objectWithoutProperties(_props, ['v']);

      switch (v) {
        case 'old':
          return _react2.default.createElement(_ButtonOld2.default, restProps);
        case 'new':
          return _react2.default.createElement(_ButtonNew2.default, restProps);
      }
    }
  }]);

  return Button;
}(_react.Component);

Button.propTypes = {
  v: _propTypes2.default.oneOf(['old', 'new'])
};
Button.defaultProps = {
  v: 'old'
};
exports.default = Button;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(92);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(3);

var _classnames2 = _interopRequireDefault(_classnames);

var _getClassName = __webpack_require__(2);

var _getClassName2 = _interopRequireDefault(_getClassName);

var _Avatar = __webpack_require__(17);

var _Avatar2 = _interopRequireDefault(_Avatar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var baseClassNames = (0, _getClassName2.default)('Entity');

// @TODO Try to load photo

var Entity = function (_Component) {
  _inherits(Entity, _Component);

  function Entity() {
    _classCallCheck(this, Entity);

    return _possibleConstructorReturn(this, (Entity.__proto__ || Object.getPrototypeOf(Entity)).apply(this, arguments));
  }

  _createClass(Entity, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          style = _props.style,
          photo = _props.photo,
          title = _props.title,
          description = _props.description,
          avatarProps = _props.avatarProps,
          children = _props.children;


      return _react2.default.createElement(
        'div',
        {
          className: (0, _classnames2.default)(baseClassNames, className),
          style: style
        },
        _react2.default.createElement(
          'div',
          { className: 'Entity__aside' },
          _react2.default.createElement(_Avatar2.default, _extends({ src: photo, alt: title, size: this.avatarSize }, avatarProps))
        ),
        _react2.default.createElement(
          'div',
          { className: 'Entity__main' },
          title && _react2.default.createElement(
            'div',
            { className: 'Entity__title' },
            title
          ),
          description && _react2.default.createElement(
            'div',
            { className: 'Entity__description' },
            description
          ),
          children && _react2.default.createElement(
            'div',
            { className: 'Entity__content' },
            children
          )
        )
      );
    }
  }, {
    key: 'avatarSize',
    get: function get() {
      switch (this.props.size) {
        case 'm':
          console.warn('size m is deprecated. Use 64 instead');
          return 64;
        case 's':
          console.warn('size m is deprecated. Use 48 instead');
          return 48;
        default:
          return this.props.size;
      }
    }
  }]);

  return Entity;
}(_react.Component);

Entity.propTypes = {
  style: _propTypes2.default.object,
  size: _propTypes2.default.oneOf(['s', 'm'].concat(_toConsumableArray(_Avatar.sizes))),
  photo: _propTypes2.default.string,
  title: _propTypes2.default.node,
  description: _propTypes2.default.node,
  className: _propTypes2.default.string,
  avatarProps: _propTypes2.default.shape(_Avatar2.default.propTypes),
  children: _propTypes2.default.node
};
Entity.defaultProps = {
  size: 48,
  photo: '',
  title: '',
  description: ''
};
exports.default = Entity;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _getClassName = __webpack_require__(2);

var _getClassName2 = _interopRequireDefault(_getClassName);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

__webpack_require__(94);

var _classnames2 = __webpack_require__(3);

var _classnames3 = _interopRequireDefault(_classnames2);

var _View = __webpack_require__(27);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var baseClassNames = (0, _getClassName2.default)('FixedLayout');

var FixedLayout = function (_React$Component) {
  _inherits(FixedLayout, _React$Component);

  function FixedLayout() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, FixedLayout);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = FixedLayout.__proto__ || Object.getPrototypeOf(FixedLayout)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      transition: false,
      topOffset: null,
      paddings: {}
    }, _this.onViewTransitionStart = function (e) {
      var panelScroll = e.detail.scrolls[_this.context.panel] || 0;
      _this.setPaddings(function () {
        _this.setState({ transition: true, topOffset: _this.el.offsetTop + panelScroll });
      });
    }, _this.onViewTransitionEnd = function () {
      _this.setState({ transition: false, topOffset: null });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(FixedLayout, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.document.addEventListener(_View.transitionStartEventName, this.onViewTransitionStart);
      this.document.addEventListener(_View.transitionEndEventName, this.onViewTransitionEnd);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.document.removeEventListener(_View.transitionStartEventName, this.onViewTransitionStart);
      this.document.removeEventListener(_View.transitionEndEventName, this.onViewTransitionEnd);
    }
  }, {
    key: 'setPaddings',
    value: function setPaddings(callback) {
      if (this.props.vertical === 'bottom') {
        var paddingBottom = parseInt(window.getComputedStyle(this.el).padding);

        this.setState({
          paddings: { paddingBottom: paddingBottom + (this.insets.bottom || 0) }
        }, function () {
          return callback && callback();
        });
      } else {
        callback && callback();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          className = _props.className,
          children = _props.children,
          style = _props.style,
          vertical = _props.vertical,
          restProps = _objectWithoutProperties(_props, ['className', 'children', 'style', 'vertical']);

      return _react2.default.createElement(
        'div',
        _extends({
          ref: function ref(el) {
            return _this2.el = el;
          },
          className: (0, _classnames3.default)(baseClassNames, _defineProperty({}, 'FixedLayout--' + vertical, true), className),
          style: Object.assign({}, style, this.state.paddings, this.state.transition ? { position: 'absolute', top: this.state.topOffset } : {})
        }, restProps),
        _react2.default.createElement(
          'div',
          { className: 'FixedLayout__in' },
          children
        )
      );
    }
  }, {
    key: 'document',
    get: function get() {
      return this.context.document || document;
    }
  }, {
    key: 'insets',
    get: function get() {
      return this.context.insets || {};
    }
  }]);

  return FixedLayout;
}(_react2.default.Component);

FixedLayout.propTypes = {
  children: _propTypes2.default.node,
  style: _propTypes2.default.object,
  className: _propTypes2.default.string,
  vertical: _propTypes2.default.oneOf(['top', 'bottom'])
};
FixedLayout.contextTypes = {
  insets: _propTypes2.default.shape({
    top: _propTypes2.default.number,
    right: _propTypes2.default.number,
    bottom: _propTypes2.default.number,
    left: _propTypes2.default.number
  }),
  panel: _propTypes2.default.string,
  document: _propTypes2.default.any
};
exports.default = FixedLayout;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _FormLayoutNew = __webpack_require__(76);

var _FormLayoutNew2 = _interopRequireDefault(_FormLayoutNew);

var _FormLayoutOld = __webpack_require__(77);

var _FormLayoutOld2 = _interopRequireDefault(_FormLayoutOld);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FormLayout = function (_React$Component) {
  _inherits(FormLayout, _React$Component);

  function FormLayout() {
    _classCallCheck(this, FormLayout);

    return _possibleConstructorReturn(this, (FormLayout.__proto__ || Object.getPrototypeOf(FormLayout)).apply(this, arguments));
  }

  _createClass(FormLayout, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          v = _props.v,
          restProps = _objectWithoutProperties(_props, ['v']);

      switch (v) {
        case 'old':
          return _react2.default.createElement(_FormLayoutOld2.default, restProps);
        case 'new':
          return _react2.default.createElement(_FormLayoutNew2.default, restProps);
      }
    }
  }]);

  return FormLayout;
}(_react2.default.Component);

FormLayout.propTypes = {
  v: _propTypes2.default.oneOf(['old', 'new'])
};
FormLayout.defaultProps = {
  v: 'old'
};
exports.default = FormLayout;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Tappable = __webpack_require__(8);

var _Tappable2 = _interopRequireDefault(_Tappable);

var _getClassName = __webpack_require__(2);

var _getClassName2 = _interopRequireDefault(_getClassName);

var _classnames = __webpack_require__(3);

var _classnames2 = _interopRequireDefault(_classnames);

__webpack_require__(102);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var baseClassName = (0, _getClassName2.default)('HeaderButton');

var HeaderButton = function HeaderButton(_ref) {
  var className = _ref.className,
      children = _ref.children,
      primary = _ref.primary,
      restProps = _objectWithoutProperties(_ref, ['className', 'children', 'primary']);

  var displayName = children.type && children.type.displayName ? children.type.displayName : undefined;

  var resultClassName = (0, _classnames2.default)(baseClassName, className, {
    'HeaderButton--text': typeof children === 'string',
    'HeaderButton--primary': primary,
    'HeaderButton--icon': displayName && displayName.indexOf('icon-') > -1,
    'HeaderButton--ios-back': displayName === 'icon-chevron_back_28'
  });

  return _react2.default.createElement(
    _Tappable2.default,
    _extends({ className: resultClassName }, restProps),
    _react2.default.createElement('div', { className: 'HeaderButton__tap-area' }),
    children
  );
};

HeaderButton.propTypes = {
  children: function children(props, propName, componentName) {
    var children = props[propName];

    var displayName = children.type && children.type.displayName ? children.type.displayName : undefined;

    if (_react2.default.Children.count(children) > 1) {
      return new Error(componentName + ' accepts only single child');
    }

    if (typeof children === 'string' || displayName.indexOf('icon-') > -1) {
      return null;
    } else {
      return new Error(componentName + ' child accepts either string or instance of Icon');
    }
  },
  className: _propTypes2.default.string,
  primary: _propTypes2.default.bool
};

HeaderButton.defaultProps = {
  primary: false
};

exports.default = HeaderButton;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(104);

__webpack_require__(105);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _getClassName = __webpack_require__(2);

var _getClassName2 = _interopRequireDefault(_getClassName);

var _classnames = __webpack_require__(3);

var _classnames2 = _interopRequireDefault(_classnames);

var _requestAnimationFrame = __webpack_require__(11);

var _requestAnimationFrame2 = _interopRequireDefault(_requestAnimationFrame);

var _platform = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var osname = (0, _platform.platform)();

var Input = function (_Component) {
  _inherits(Input, _Component);

  function Input(props) {
    _classCallCheck(this, Input);

    var _this = _possibleConstructorReturn(this, (Input.__proto__ || Object.getPrototypeOf(Input)).call(this, props));

    _this.onChange = function (e) {
      if (!_this.isControlledOutside) {
        _this.setState({ value: e.target.value });
      }
      if (_this.props.onChange) {
        _this.props.onChange(e);
      }
    };

    _this.getRef = function (element) {
      _this.props.getRef && _this.props.getRef(element);
      _this.element = element;
    };

    if (typeof props.value !== 'undefined') {
      _this.isControlledOutside = true;
    } else {
      _this.state = {
        value: props.defaultValue || props.initialValue || ''
      };
    }
    return _this;
  }

  _createClass(Input, [{
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      var _this2 = this;

      if (prevProps.value && this.props.value === '') {
        // Fix iOS extra indent on removing content
        (0, _requestAnimationFrame2.default)(function () {
          _this2.element.value = '';
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _modifiers;

      var _props = this.props,
          onChange = _props.onChange,
          initialValue = _props.initialValue,
          defaultValue = _props.defaultValue,
          alignment = _props.alignment,
          placeholder = _props.placeholder,
          v = _props.v,
          value = _props.value,
          status = _props.status,
          getRef = _props.getRef,
          className = _props.className,
          restProps = _objectWithoutProperties(_props, ['onChange', 'initialValue', 'defaultValue', 'alignment', 'placeholder', 'v', 'value', 'status', 'getRef', 'className']);

      var modifiers = (_modifiers = {}, _defineProperty(_modifiers, this.baseClass + '--left', alignment === 'left'), _defineProperty(_modifiers, this.baseClass + '--center', alignment === 'center'), _defineProperty(_modifiers, this.baseClass + '--right', alignment === 'right'), _defineProperty(_modifiers, this.baseClass + '--s-' + this.props.status, true), _modifiers);

      var customPlaceolder = ['date', 'datetime-local', 'time', 'month'].indexOf(this.props.type) > -1 && this.context.isWebView ? this.props.placeholder : null;

      return _react2.default.createElement(
        'div',
        { className: (0, _classnames2.default)((0, _getClassName2.default)(this.baseClass), modifiers, className) },
        _react2.default.createElement('input', _extends({
          style: { transition: 'transform ' },
          className: this.baseClass + '__el',
          ref: this.getRef,
          value: this.value,
          onChange: this.onChange,
          placeholder: customPlaceolder ? null : this.props.placeholder
        }, restProps)),
        osname === _platform.ANDROID && _react2.default.createElement('div', { className: this.baseClass + '-underline' }),
        customPlaceolder && !this.value && _react2.default.createElement(
          'div',
          { className: this.baseClass + '__placeholder' },
          this.props.placeholder
        )
      );
    }
  }, {
    key: 'baseClass',
    get: function get() {
      return this.props.v === 'old' ? 'Input' : 'InputNew';
    }
  }, {
    key: 'value',
    get: function get() {
      return this.isControlledOutside ? this.props.value : this.state.value;
    }
  }]);

  return Input;
}(_react.Component);

Input.propTypes = {
  type: _propTypes2.default.oneOf(['text', 'password', 'date', 'datetime-local', 'time', 'month', 'email', 'number', 'tel', 'url']),
  alignment: _propTypes2.default.oneOf(['left', 'center', 'right']),
  value: _propTypes2.default.string,
  defaultValue: _propTypes2.default.string,
  onChange: _propTypes2.default.func,
  placeholder: _propTypes2.default.string,
  v: _propTypes2.default.oneOf(['old', 'new']),
  status: _propTypes2.default.oneOf(['default', 'error', 'verified']),
  getRef: _propTypes2.default.func,
  className: _propTypes2.default.string,

  /**
   * @deprecated since v1.5.0 Use defaultValue prop instead
   */
  initialValue: _propTypes2.default.string
};
Input.defaultProps = {
  type: 'text',
  alignment: 'left',
  v: 'old',
  defaultValue: '',
  status: 'default'
};
Input.contextTypes = {
  isWebView: _propTypes2.default.bool
};
exports.default = Input;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(121);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Touch = __webpack_require__(9);

var _Touch2 = _interopRequireDefault(_Touch);

var _classnames = __webpack_require__(3);

var _classnames2 = _interopRequireDefault(_classnames);

var _getClassName = __webpack_require__(2);

var _getClassName2 = _interopRequireDefault(_getClassName);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var baseClassNames = (0, _getClassName2.default)('Slider');

function precisionRound(number, precision) {
  var factor = Math.pow(10, precision || 1);
  return Math.round(number * factor) / factor;
}

var Slider = function (_Component) {
  _inherits(Slider, _Component);

  function Slider(props) {
    _classCallCheck(this, Slider);

    var _this = _possibleConstructorReturn(this, (Slider.__proto__ || Object.getPrototypeOf(Slider)).call(this, props));

    _this.onStart = function (e) {
      var absolutePosition = _this.validateAbsolute(e.startX - _this.state.containerLeft);
      var percentPosition = _this.absoluteToPecent(absolutePosition);

      _this.onChange(_this.percentToValue(percentPosition));

      if (_this.isControlledOutside) {
        _this.setState({ startX: absolutePosition });
      } else {
        _this.setState({
          startX: absolutePosition,
          percentPosition: percentPosition
        });
      }

      _this.setState({ active: !!e.originalEvent.target.closest('.Slider__thumb') });
    };

    _this.onMoveX = function (e) {
      var absolutePosition = _this.validateAbsolute(_this.state.startX + (e.shiftX || 0));
      var percentPosition = _this.absoluteToPecent(absolutePosition);

      _this.onChange(_this.percentToValue(percentPosition));

      if (!_this.isControlledOutside) {
        _this.setState({ percentPosition: percentPosition });
      }

      e.originalEvent.preventDefault();
    };

    _this.onEnd = function () {
      _this.setState({
        active: false
      });
    };

    _this.onResize = function (callback) {
      _this.setState({
        containerLeft: _this.container.offsetLeft,
        containerWidth: _this.container.offsetWidth
      }, function () {
        typeof callback === 'function' && callback();
      });
    };

    _this.getRef = function (container) {
      _this.container = container;
    };

    _this.state = {
      startX: 0
    };

    _this.isControlledOutside = _this.props.hasOwnProperty('value');
    return _this;
  }

  _createClass(Slider, [{
    key: 'onChange',
    value: function onChange(value) {
      this.props.onChange && this.props.onChange(value);
    }
  }, {
    key: 'validateAbsolute',
    value: function validateAbsolute(absolute) {
      var res = Math.max(0, Math.min(absolute, this.state.containerWidth));

      if (this.props.step > 0) {
        var stepCount = (this.props.max - this.props.min) / this.props.step;
        var absStep = this.state.containerWidth / stepCount;

        res = Math.round(res / absStep) * absStep;
      }

      return res;
    }
  }, {
    key: 'validatePercent',
    value: function validatePercent(percent) {
      return Math.max(0, Math.min(percent, 100));
    }
  }, {
    key: 'absoluteToPecent',
    value: function absoluteToPecent(absolute) {
      return absolute * 100 / this.state.containerWidth;
    }
  }, {
    key: 'percentToValue',
    value: function percentToValue(percent) {
      var res = percent * (this.props.max - this.props.min) / 100 + this.props.min;
      if (this.props.step > 0) {
        var stepFloatPart = ('' + this.props.step).split('.')[1] || '';
        return precisionRound(res, stepFloatPart.length);
      }
      return res;
    }
  }, {
    key: 'valueToPercent',
    value: function valueToPercent(value) {
      return (value - this.props.min) * 100 / (this.props.max - this.props.min);
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      window.addEventListener('resize', this.onResize);
      this.onResize(function () {
        _this2.setState({ percentPosition: _this2.validatePercent(_this2.valueToPercent(_this2.value)) });
      });
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (this.isControlledOutside && nextProps.value !== this.props.value) {
        this.setState({ percentPosition: this.validatePercent(this.valueToPercent(nextProps.value)) });
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      window.removeEventListener('resize', this.onResize);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: (0, _classnames2.default)(baseClassNames, this.props.className), ref: this.getRef, style: this.props.style },
        _react2.default.createElement(
          _Touch2.default,
          { onStart: this.onStart, onMoveX: this.onMoveX, onEnd: this.onEnd, className: 'Slider__in' },
          _react2.default.createElement(
            'div',
            { className: 'Slider__dragger', style: { width: this.state.percentPosition + '%' } },
            _react2.default.createElement('span', {
              className: (0, _classnames2.default)('Slider__thumb', 'Slider__thumb--end', {
                'Slider__thumb--active': this.state.active
              })
            })
          )
        )
      );
    }
  }, {
    key: 'value',
    get: function get() {
      if (this.isControlledOutside) {
        return this.props.value;
      } else if (this.props.hasOwnProperty('defaultValue')) {
        return this.props.defaultValue;
      } else {
        return this.props.min;
      }
    }
  }]);

  return Slider;
}(_react.Component);

Slider.propTypes = {
  min: _propTypes2.default.number,
  max: _propTypes2.default.number,
  value: _propTypes2.default.number,
  step: _propTypes2.default.number,
  onChange: _propTypes2.default.func,
  defaultValue: _propTypes2.default.number,
  className: _propTypes2.default.string,
  style: _propTypes2.default.object
};
Slider.defaultProps = {
  min: 0,
  max: 100,
  step: 0
};
exports.default = Slider;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(122);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _getClassName = __webpack_require__(2);

var _getClassName2 = _interopRequireDefault(_getClassName);

var _platform = __webpack_require__(4);

var _classnames = __webpack_require__(3);

var _classnames2 = _interopRequireDefault(_classnames);

var _AndroidSpinner = __webpack_require__(80);

var _AndroidSpinner2 = _interopRequireDefault(_AndroidSpinner);

var _IosSpinner = __webpack_require__(81);

var _IosSpinner2 = _interopRequireDefault(_IosSpinner);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var osname = (0, _platform.platform)();
var baseClassNames = (0, _getClassName2.default)('Spinner');

var Spinner = function (_Component) {
  _inherits(Spinner, _Component);

  function Spinner() {
    _classCallCheck(this, Spinner);

    return _possibleConstructorReturn(this, (Spinner.__proto__ || Object.getPrototypeOf(Spinner)).apply(this, arguments));
  }

  _createClass(Spinner, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          on = _props.on,
          progress = _props.progress,
          size = _props.size,
          style = _props.style,
          className = _props.className;

      var isAnimated = on && progress === null;
      var modifiers = {
        'Spinner--on': isAnimated
      };

      var Component = osname === _platform.IOS ? _IosSpinner2.default : _AndroidSpinner2.default;

      return _react2.default.createElement(
        'div',
        { className: (0, _classnames2.default)(baseClassNames, modifiers, className), style: style },
        _react2.default.createElement(
          'svg',
          {
            className: 'Spinner__self',
            style: { width: size, height: size },
            viewBox: '0 0 ' + size + ' ' + size,
            xmlns: 'http://www.w3.org/2000/svg'
          },
          _react2.default.createElement(Component, this.props)
        )
      );
    }
  }]);

  return Spinner;
}(_react.Component);

Spinner.propTypes = {
  style: _propTypes2.default.object,
  color: _propTypes2.default.string,
  size: _propTypes2.default.number,
  androidStrokeWidth: _propTypes2.default.number,
  on: _propTypes2.default.bool,
  progress: _propTypes2.default.number,
  className: _propTypes2.default.string
};
Spinner.defaultProps = {
  color: osname === _platform.ANDROID ? '#5181b8' : '#262626',
  androidStrokeWidth: 4,
  size: osname === _platform.ANDROID ? 38 : 20,
  animated: true,
  on: true,
  progress: null
};
exports.default = Spinner;

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _getClassName = __webpack_require__(2);

var _getClassName2 = _interopRequireDefault(_getClassName);

var _classnames = __webpack_require__(3);

var _classnames2 = _interopRequireDefault(_classnames);

__webpack_require__(124);

var _platform = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var osname = (0, _platform.platform)();

var baseClassName = (0, _getClassName2.default)('Tabs');

var Tabs = function (_React$Component) {
  _inherits(Tabs, _React$Component);

  function Tabs() {
    _classCallCheck(this, Tabs);

    return _possibleConstructorReturn(this, (Tabs.__proto__ || Object.getPrototypeOf(Tabs)).apply(this, arguments));
  }

  _createClass(Tabs, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          children = _props.children,
          theme = _props.theme,
          style = _props.style;


      return _react2.default.createElement(
        'div',
        { className: (0, _classnames2.default)(baseClassName, className), style: style },
        _react2.default.Children.map(children, function (Child) {
          return _react2.default.cloneElement(Child, { theme: theme });
        })
      );
    }
  }]);

  return Tabs;
}(_react2.default.Component);

Tabs.propTypes = {
  children: _propTypes2.default.node,
  className: _propTypes2.default.string,
  theme: osname === _platform.IOS ? _propTypes2.default.oneOf(['white', 'gray']) : _propTypes2.default.oneOf(['white']),
  style: _propTypes2.default.object
};
exports.default = Tabs;

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.transitionEndEventName = exports.transitionStartEventName = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(130);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames2 = __webpack_require__(3);

var _classnames3 = _interopRequireDefault(_classnames2);

var _animate = __webpack_require__(83);

var _animate2 = _interopRequireDefault(_animate);

var _transitionEvents = __webpack_require__(14);

var _transitionEvents2 = _interopRequireDefault(_transitionEvents);

var _getClassName = __webpack_require__(2);

var _getClassName2 = _interopRequireDefault(_getClassName);

var _platform = __webpack_require__(4);

var _Touch = __webpack_require__(9);

var _Touch2 = _interopRequireDefault(_Touch);

var _removeObjectKeys = __webpack_require__(5);

var _removeObjectKeys2 = _interopRequireDefault(_removeObjectKeys);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var osname = (0, _platform.platform)();
var baseClassNames = (0, _getClassName2.default)('View');

var transitionStartEventName = exports.transitionStartEventName = 'VKUI:View:transition-start';
var transitionEndEventName = exports.transitionEndEventName = 'VKUI:View:transition-end';

var View = function (_Component) {
  _inherits(View, _Component);

  function View(props) {
    _classCallCheck(this, View);

    var _this = _possibleConstructorReturn(this, (View.__proto__ || Object.getPrototypeOf(View)).call(this, props));

    _this.refsStore = {};

    _this.transitionEndHandler = function () {
      var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { manual: true };

      if (['animation-ios-next-forward', 'animation-ios-next-back', 'animation-ios-prev-forward', 'animation-ios-prev-back', 'animation-android-next-forward', 'animation-android-prev-back'].indexOf(e.animationName) > -1 || e.manual) {
        var activePanel = _this.props.activePanel;
        var isBack = _this.state.isBack;
        var prevPanel = _this.state.prevPanel;
        _this.document.dispatchEvent(new _this.window.CustomEvent(transitionEndEventName));
        _this.setState({
          prevPanel: null,
          nextPanel: null,
          visiblePanels: [activePanel],
          activePanel: activePanel,
          animated: false,
          isBack: undefined,
          scrolls: isBack ? (0, _removeObjectKeys2.default)(_this.state.scrolls, [prevPanel]) : _this.state.scrolls
        }, function () {
          isBack && this.window.scrollTo(0, this.state.scrolls[activePanel]);
          this.props.onTransition && this.props.onTransition();
        });
      }
    };

    _this.swipingBackTransitionEndHandler = function (e) {
      // indexOf because of vendor prefixes in old browsers
      if (e.propertyName.indexOf('transform') >= 0 && e.target.classList.contains('View__panel--swipe-back-next')) {
        _this.state.swipingBackFinish ? _this.onSwipeBackSuccess() : _this.onSwipeBackCancel();
      }
    };

    _this.onScrollTop = function () {
      var activePanel = _this.state.activePanel;


      if (activePanel) {
        var scrollTop = _this.document.body.scrollTop || _this.document.this.documentElement.scrollTop;

        if (scrollTop) {
          (0, _animate2.default)({
            duration: 200,
            timing: function timing(n) {
              return Math.sqrt(n);
            },
            draw: function draw(val) {
              _this.window.scrollTo(0, scrollTop - val * scrollTop);
            }
          });
        }
      }
    };

    _this.onMove = function (e) {
      if (osname === _platform.IOS && !_this.context.isWebView && (e.startX <= 70 || e.startX >= _this.window.innerWidth - 70) && !_this.state.browserSwipe) {
        _this.setState({ browserSwipe: true });
      }

      if (osname === _platform.IOS && _this.context.isWebView && _this.props.onSwipeBack && !View.swipeBackPrevented(e.originalEvent.target)) {
        if (_this.state.animated && e.startX <= 70) {
          e.originalEvent.preventDefault();
          return false;
        }

        if (e.startX <= 70 && !_this.state.swipingBack && _this.props.history.length > 1) {
          _this.setState({
            swipingBack: true,
            swipebackStartX: e.startX,
            startT: e.startT,
            swipeBackPrevPanel: _this.state.activePanel,
            swipeBackNextPanel: _this.props.history.slice(-2)[0],
            scrolls: Object.assign({}, _this.state.scrolls, _defineProperty({}, _this.state.activePanel, _this.window.pageYOffset))
          }, function () {
            _this.props.onSwipeBackStart && _this.props.onSwipeBackStart();
          });
        }
        if (_this.state.swipingBack) {
          var swipeBackShift = void 0;
          if (e.shiftX < 0) {
            swipeBackShift = 0;
          } else if (e.shiftX > _this.window.innerWidth - _this.state.swipebackStartX) {
            swipeBackShift = _this.window.innerWidth;
          } else {
            swipeBackShift = e.shiftX;
          }
          _this.setState({ swipeBackShift: swipeBackShift });
        }
      }
    };

    _this.onEnd = function () {
      if (_this.state.swipingBack) {
        var speed = _this.state.swipeBackShift / (new Date() - _this.state.startT) * 1000;
        if (_this.state.swipeBackShift === 0) {
          _this.onSwipeBackCancel();
        } else if (_this.state.swipeBackShift >= _this.window.innerWidth) {
          _this.onSwipeBackSuccess();
        } else {
          _this.setState({ swipingBackFinish: speed > 250 || _this.state.swipebackStartX + _this.state.swipeBackShift > _this.window.innerWidth / 2 });
        }
      }
    };

    _this.getRef = function (c) {
      if (c && c.container && c.id) {
        var el = c;

        while (el.container) {
          el = el.container;
        }

        _this.refsStore[c.id] = el;
      }
    };

    _this.getPanels = function (panels) {
      return [].concat(panels).map(function (item) {
        return Object.assign({}, item, {
          id: item.props.id || item.key
        });
      });
    };

    _this.state = {
      scrolls: {},

      visiblePanels: [props.activePanel],
      activePanel: props.activePanel,
      isBack: undefined,
      prevPanel: null,
      nextPanel: null,

      swipingBack: false,
      swipebackStartX: 0,
      swipeBackShift: 0,
      swipeBackNextPanel: null,
      swipeBackPrevPanel: null,
      swipingBackFinish: null,

      browserSwipe: false
    };
    _this.panels = _this.getPanels(props.children);
    return _this;
  }

  _createClass(View, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.setPanelBg(this.props.activePanel);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var _this2 = this;

      if (this.props.children !== nextProps.children) {
        this.panels = this.getPanels(nextProps.children);
      }

      if (this.props.activePanel !== nextProps.activePanel) {
        this.setPanelBg(nextProps.activePanel);
      }

      if (nextProps.popout && !this.props.popout) {
        this.blurActiveElement();
      }

      // Нужен переход
      if (this.props.activePanel !== nextProps.activePanel && !this.state.swipingBack && !this.state.browserSwipe) {
        var firstLayer = this.panels.find(function (panel) {
          return panel.id === _this2.props.activePanel || panel.id === nextProps.activePanel;
        });
        var isBack = firstLayer && firstLayer.id === nextProps.activePanel;

        this.blurActiveElement();

        this.setState({
          visiblePanels: [this.props.activePanel, nextProps.activePanel],
          prevPanel: this.props.activePanel,
          nextPanel: nextProps.activePanel,
          activePanel: null,
          animated: true,
          scrolls: Object.assign({}, this.state.scrolls, _defineProperty({}, this.props.activePanel, this.window.pageYOffset)),
          isBack: isBack
        });
      }

      // Закончилась анимация свайпа назад
      if (this.props.activePanel !== nextProps.activePanel && this.state.swipingBack) {
        this.setState({
          swipeBackPrevPanel: null,
          swipeBackNextPanel: null,
          swipingBack: false,
          swipingBackFinish: null,
          swipebackStartX: 0,
          swipeBackShift: 0,
          activePanel: nextProps.activePanel,
          visiblePanels: [nextProps.activePanel],
          scrolls: (0, _removeObjectKeys2.default)(this.state.scrolls, [this.state.swipeBackPrevPanel])
        }, function () {
          _this2.document.dispatchEvent(new _this2.window.CustomEvent(transitionEndEventName));
          window.scrollTo(0, _this2.state.scrolls[_this2.state.activePanel]);
          _this2.props.onTransition && _this2.props.onTransition();
        });
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      var scrolls = this.state.scrolls;

      // Начался переход
      if (!prevState.animated && this.state.animated) {
        this.document.dispatchEvent(new this.window.CustomEvent(transitionStartEventName, { detail: { scrolls: scrolls } }));
        var nextPanelElement = this.pickPanel(this.state.nextPanel);
        var prevPanelElement = this.pickPanel(this.state.prevPanel);

        prevPanelElement.scrollTop = scrolls[this.state.prevPanel];
        if (this.state.isBack) {
          nextPanelElement.scrollTop = scrolls[this.state.nextPanel];
        }
        this.waitAnimationFinish(this.pickPanel(this.state.isBack ? this.state.prevPanel : this.state.nextPanel), this.transitionEndHandler);
      }

      // Начался свайп назад
      if (!prevState.swipingBack && this.state.swipingBack) {
        this.document.dispatchEvent(new this.window.CustomEvent(transitionStartEventName, { detail: { scrolls: scrolls } }));
        var _nextPanelElement = this.pickPanel(this.state.swipeBackNextPanel);
        var _prevPanelElement = this.pickPanel(this.state.swipeBackPrevPanel);

        _nextPanelElement.scrollTop = scrolls[this.state.swipeBackNextPanel];
        _prevPanelElement.scrollTop = scrolls[this.state.swipeBackPrevPanel];
      }

      // Началась анимация завершения свайпа назад.
      if (prevState.swipingBackFinish === null && this.state.swipingBackFinish !== null) {
        this.waitTransitionFinish(this.pickPanel(this.state.swipeBackNextPanel), this.swipingBackTransitionEndHandler);
      }

      // Если свайп назад отменился (когда пользователь недостаточно сильно свайпнул)
      if (prevState.swipingBackFinish === false && this.state.swipingBackFinish === null) {
        this.window.scrollTo(0, scrolls[this.state.activePanel]);
      }

      // Закончился Safari свайп
      if (prevProps.activePanel !== this.props.activePanel && this.state.browserSwipe) {
        this.setState({
          browserSwipe: false,
          nextPanel: null,
          prevPanel: null,
          animated: false,
          visiblePanels: [this.props.activePanel],
          activePanel: this.props.activePanel
        });
      }
    }
  }, {
    key: 'waitTransitionFinish',
    value: function waitTransitionFinish(elem, eventHandler) {
      if (_transitionEvents2.default.supported) {
        var eventName = _transitionEvents2.default.prefix ? _transitionEvents2.default.prefix + 'TransitionEnd' : 'transitionend';

        elem.removeEventListener(eventName, eventHandler);
        elem.addEventListener(eventName, eventHandler);
      } else {
        setTimeout(eventHandler.bind(this), osname === _platform.ANDROID ? 300 : 600);
      }
    }
  }, {
    key: 'waitAnimationFinish',
    value: function waitAnimationFinish(elem, eventHandler) {
      if (_transitionEvents2.default.supported) {
        var eventName = _transitionEvents2.default.prefix ? _transitionEvents2.default.prefix + 'AnimationEnd' : 'animationend';

        elem.removeEventListener(eventName, eventHandler);
        elem.addEventListener(eventName, eventHandler);
      } else {
        setTimeout(eventHandler.bind(this), osname === _platform.ANDROID ? 300 : 600);
      }
    }
  }, {
    key: 'blurActiveElement',
    value: function blurActiveElement() {
      if (typeof this.window !== 'undefined' && this.document.activeElement) {
        this.document.activeElement.blur();
      }
    }
  }, {
    key: 'setPanelBg',
    value: function setPanelBg(panelId) {
      var panel = this.panels.find(function (panel) {
        return panel.id === panelId;
      });
      if (panel) {
        this.document.documentElement.setAttribute('theme', panel.props.theme);
      } else {
        this.document.documentElement.removeAttribute('theme');
      }
    }
  }, {
    key: 'pickPanel',
    value: function pickPanel(id) {
      var elem = this.document.querySelector('#' + id);

      if (!elem) {
        console.warn('Element #' + id + ' not found');
      }

      return elem && elem.parentNode.parentNode;
    }
  }, {
    key: 'onSwipeBackSuccess',
    value: function onSwipeBackSuccess() {
      this.props.onSwipeBack && this.props.onSwipeBack();
    }
  }, {
    key: 'onSwipeBackCancel',
    value: function onSwipeBackCancel() {
      var _this3 = this;

      this.setState({
        swipeBackPrevPanel: null,
        swipeBackNextPanel: null,
        swipingBack: false,
        swipingBackFinish: null,
        swipebackStartX: 0,
        swipeBackShift: 0
      }, function () {
        _this3.document.dispatchEvent(new _this3.window.CustomEvent(transitionEndEventName));
      });
    }
  }, {
    key: 'calcPanelSwipeStyles',
    value: function calcPanelSwipeStyles(panelId) {
      var isPrev = panelId === this.state.swipeBackPrevPanel;
      var isNext = panelId === this.state.swipeBackNextPanel;

      var prevPanelTranslate = this.state.swipeBackShift + 'px';
      var nextPanelTranslate = -50 + this.state.swipeBackShift * 100 / this.window.innerWidth / 2 + '%';
      var prevPanelShadow = 0.3 * (this.window.innerWidth - this.state.swipeBackShift) / this.window.innerWidth;

      if (this.state.swipingBackFinish !== null) {
        return isPrev ? { boxShadow: '-2px 0 12px rgba(0, 0, 0, ' + prevPanelShadow + ')' } : {};
      }

      if (isNext) {
        return {
          transform: 'translate3d(' + nextPanelTranslate + ', 0, 0)',
          WebkitTransform: 'translate3d(' + nextPanelTranslate + ', 0, 0)'
        };
      }
      if (isPrev) {
        return {
          transform: 'translate3d(' + prevPanelTranslate + ', 0, 0)',
          WebkitTransform: 'translate3d(' + prevPanelTranslate + ', 0, 0)',
          boxShadow: '-2px 0 12px rgba(0, 0, 0, ' + prevPanelShadow + ')'
        };
      }

      return {};
    }
  }, {
    key: 'calcHeaderSwipeStyles',
    value: function calcHeaderSwipeStyles(panelId) {
      var isPrev = panelId === this.state.swipeBackPrevPanel;
      var isNext = panelId === this.state.swipeBackNextPanel;

      if (!isPrev && !isNext || this.state.swipingBackFinish !== null) {
        return {
          title: {},
          item: {},
          leftIn: {},
          leftIcon: {},
          right: {}
        };
      }

      var opacity = this.state.swipeBackShift / this.window.innerWidth;
      var titleTransform = this.state.swipeBackShift / this.window.innerWidth * 60;
      var leftTransform = this.state.swipeBackShift / this.window.innerWidth * 60;

      if (isNext) {
        return {
          title: {
            transform: 'translate3d(' + (-60 + titleTransform) + '%, 0, 0)',
            WebkitTransform: 'translate3d(' + (-60 + titleTransform) + '%, 0, 0)',
            opacity: opacity
          },
          item: { opacity: opacity },
          leftIn: {
            transform: 'translate3d(' + (-60 + leftTransform) + '%, 0, 0)',
            WebkitTransform: 'translate3d(' + (-60 + leftTransform) + '%, 0, 0)',
            opacity: opacity
          },
          leftIcon: { opacity: 1 },
          right: { opacity: 1 }
        };
      }
      if (isPrev) {
        return {
          title: {
            transform: 'translate3d(' + titleTransform + '%, 0, 0)',
            WebkitTransform: 'translate3d(' + titleTransform + '%, 0, 0)'
          },
          item: { opacity: 1 - opacity },
          leftIn: {
            transform: 'translate3d(' + leftTransform + '%, 0, 0)',
            WebkitTransform: 'translate3d(' + leftTransform + '%, 0, 0)'
          }
        };
      }
    }
  }, {
    key: 'renderHeaderLeft',
    value: function renderHeaderLeft(panel) {
      return _react2.default.createElement(
        'div',
        { className: 'View__header-left-container' },
        panel.props.header.icon && _react2.default.createElement(
          'div',
          {
            className: 'View__header-icon',
            style: this.calcHeaderSwipeStyles(panel.id).leftIcon
          },
          panel.props.header.icon
        ),
        panel.props.header.left && _react2.default.createElement(
          'div',
          {
            className: 'View__header-left-in',
            style: this.calcHeaderSwipeStyles(panel.id).leftIn
          },
          panel.props.header.left
        )
      );
    }
  }, {
    key: 'renderHeaderRight',
    value: function renderHeaderRight(panel) {
      return _react2.default.createElement(
        'div',
        { className: 'View__header-right-container' },
        panel.props.header.right
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var _this4 = this;

      var _props = this.props,
          style = _props.style,
          popout = _props.popout,
          header = _props.header;
      var _state = this.state,
          prevPanel = _state.prevPanel,
          nextPanel = _state.nextPanel,
          activePanel = _state.activePanel;

      var hasPopout = !!popout;
      var hasHeader = header !== null;
      var panels = this.panels.filter(function (panel) {
        return _this4.state.visiblePanels.indexOf(panel.id) > -1 || panel.id === _this4.state.swipeBackPrevPanel || panel.id === _this4.state.swipeBackNextPanel;
      });

      var modifiers = {
        'View--header': hasHeader,
        'View--animated': this.state.animated,
        'View--swiping-back': this.state.swipingBack
      };

      return _react2.default.createElement(
        _Touch2.default,
        {
          component: 'section',
          className: (0, _classnames3.default)(baseClassNames, modifiers),
          style: style,
          onMoveX: this.onMove,
          onEnd: this.onEnd
        },
        hasHeader && _react2.default.createElement(
          'div',
          { className: 'View__header' },
          osname === _platform.IOS && _react2.default.createElement('div', { className: 'View__header-scrolltop', onClick: this.onScrollTop }),
          _react2.default.createElement(
            'div',
            { className: 'View__header-in' },
            panels.map(function (panel, i) {
              return _react2.default.createElement(
                'div',
                {
                  className: (0, _classnames3.default)('View__header-item', {
                    'View__header-item--active': panel.id === activePanel,
                    'View__header-item--prev': panel.id === prevPanel,
                    'View__header-item--next': panel.id === nextPanel,
                    'View__header-item--swipe-back-prev': panel.id === _this4.state.swipeBackPrevPanel,
                    'View__header-item--swipe-back-next': panel.id === _this4.state.swipeBackNextPanel,
                    'View__header-item--swipe-back-success': _this4.state.swipingBackFinish === true,
                    'View__header-item--swipe-back-failed': _this4.state.swipingBackFinish === false,
                    'View__header-item--no-shadow': panel.props.header.noShadow
                  }, panel.props.header.className),
                  style: _this4.calcHeaderSwipeStyles(panel.id).item,
                  key: panel.key || panel.id || 'panel-header-' + i
                },
                panel.props.header.search && _react2.default.createElement(
                  'div',
                  { className: 'View__header-search' },
                  panel.props.header.search
                ),
                !panel.props.header.search && _react2.default.createElement(
                  'div',
                  { className: 'View__header-left' },
                  osname === _platform.IOS && panel.props.header.right && _react2.default.createElement(
                    'div',
                    { style: { overflow: 'hidden', height: 0, visibility: 'hidden' } },
                    _this4.renderHeaderRight(panel)
                  ),
                  (panel.props.header.left || panel.props.header.icon) && _this4.renderHeaderLeft(panel)
                ),
                !panel.props.header.search && _react2.default.createElement(
                  'div',
                  {
                    className: 'View__header-title',
                    style: _this4.calcHeaderSwipeStyles(panel.id).title
                  },
                  panel.props.header.title
                ),
                !panel.props.header.search && _react2.default.createElement(
                  'div',
                  {
                    className: 'View__header-right',
                    style: _this4.calcHeaderSwipeStyles(panel.id).right
                  },
                  osname === _platform.IOS && (panel.props.header.left || panel.props.header.icon) && _react2.default.createElement(
                    'div',
                    { style: { overflow: 'hidden', height: 0, visibility: 'hidden' } },
                    _this4.renderHeaderLeft(panel)
                  ),
                  panel.props.header.right && _this4.renderHeaderRight(panel)
                )
              );
            })
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'View__panels' },
          panels.map(function (panel, i) {
            return _react2.default.createElement(
              'div',
              {
                className: (0, _classnames3.default)('View__panel', _defineProperty({
                  'View__panel--active': panel.id === activePanel,
                  'View__panel--prev': panel.id === prevPanel,
                  'View__panel--next': panel.id === nextPanel,
                  'View__panel--swipe-back-prev': panel.id === _this4.state.swipeBackPrevPanel,
                  'View__panel--swipe-back-next': panel.id === _this4.state.swipeBackNextPanel,
                  'View__panel--swipe-back-success': _this4.state.swipingBackFinish === true,
                  'View__panel--swipe-back-failed': _this4.state.swipingBackFinish === false
                }, 'View__panel--theme-' + panel.props.theme, true)),
                style: _this4.calcPanelSwipeStyles(panel.id),
                key: panel.key || panel.id || 'panel-' + i
              },
              _react2.default.createElement(
                'div',
                { className: 'View__panel-in' },
                _react2.default.cloneElement(panel, { ref: _this4.getRef, activePanel: activePanel, nextPanel: nextPanel })
              )
            );
          })
        ),
        hasPopout && _react2.default.createElement(
          'div',
          { className: 'View__popout' },
          popout
        )
      );
    }
  }, {
    key: 'document',
    get: function get() {
      return this.context.document || document;
    }
  }, {
    key: 'window',
    get: function get() {
      return this.context.window || window;
    }
  }], [{
    key: 'swipeBackPrevented',
    value: function swipeBackPrevented(target) {
      return target && target.closest('.Gallery, .Slider') !== null;
    }
  }]);

  return View;
}(_react.Component);

View.propTypes = {
  style: _propTypes2.default.object,
  activePanel: _propTypes2.default.string,
  header: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.bool]),
  children: _propTypes2.default.node,
  popout: _propTypes2.default.node,
  onTransition: _propTypes2.default.func,
  onSwipeBack: _propTypes2.default.func,
  onSwipeBackStart: _propTypes2.default.func,
  history: _propTypes2.default.arrayOf(_propTypes2.default.string)
};
View.defaultProps = {
  style: {},
  children: null,
  popout: null,
  header: null,
  history: []
};
View.contextTypes = {
  isWebView: _propTypes2.default.bool,
  window: _propTypes2.default.any,
  document: _propTypes2.default.any
};
exports.default = View;

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _titles, _values;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var keys = {
  black: 'black',
  mutedBlack: 'mutedBlack',
  subheadGray: 'subheadGray',
  captionGray: 'captionGray',
  lightGray: 'lightGray',
  backgroundBlue: 'backgroundBlue',

  mediumBlueGray: 'mediumBlueGray',
  lightBlueGray: 'lightBlueGray',

  mutedBlue: 'mutedBlue',
  headerBlue: 'headerBlue',
  accentBlue: 'accentBlue',
  lightBlue: 'lightBlue',

  niceRed: 'niceRed',
  red: 'red',
  fireOrange: 'fireOrange',
  orange: 'orange',
  green: 'green',
  blue: 'blue',

  separator: 'separator',
  placeholderBackground: 'placeholderBackground',
  placeholderForeground: 'placeholderForeground'
};

var titles = (_titles = {}, _defineProperty(_titles, keys.black, 'Текст'), _defineProperty(_titles, keys.mutedBlack, 'Заголовки, текст'), _defineProperty(_titles, keys.subheadGray, 'Подзаголовки, надписи'), _defineProperty(_titles, keys.captionGray, 'Подписи'), _defineProperty(_titles, keys.lightGray, 'Иконки'), _defineProperty(_titles, keys.backgroundBlue, 'Фон'), _defineProperty(_titles, keys.mediumBlueGray, 'Средний голубо-серый'), _defineProperty(_titles, keys.lightBlueGray, 'Контурные иконки'), _defineProperty(_titles, keys.mutedBlue, 'Вторичные кнопки'), _defineProperty(_titles, keys.headerBlue, 'Шапки, кнопки'), _defineProperty(_titles, keys.accentBlue, 'Ссылки, акценты'), _defineProperty(_titles, keys.lightBlue, 'Верификации'), _defineProperty(_titles, keys.niceRed, 'Лайки'), _defineProperty(_titles, keys.red, 'Красный'), _defineProperty(_titles, keys.fireOrange, 'Огненный'), _defineProperty(_titles, keys.orange, 'Оранжевый'), _defineProperty(_titles, keys.green, 'Зеленый'), _defineProperty(_titles, keys.blue, 'Голубой'), _defineProperty(_titles, keys.separator, 'Разделители'), _defineProperty(_titles, keys.placeholderBackground, 'Фон плейсхолдеров'), _defineProperty(_titles, keys.placeholderForeground, 'Заливка плейсхолдеров'), _titles);

var values = (_values = {}, _defineProperty(_values, keys.black, '#000'), _defineProperty(_values, keys.mutedBlack, '#2C2D2E'), _defineProperty(_values, keys.subheadGray, '#71757A'), _defineProperty(_values, keys.captionGray, '#909499'), _defineProperty(_values, keys.lightGray, '#AAAEB3'), _defineProperty(_values, keys.backgroundBlue, '#EBEDF0'), _defineProperty(_values, keys.mediumBlueGray, '#818C99'), _defineProperty(_values, keys.lightBlueGray, '#99A2AD'), _defineProperty(_values, keys.mutedBlue, '#45678F'), _defineProperty(_values, keys.headerBlue, '#5181B8'), _defineProperty(_values, keys.accentBlue, '#528BCC'), _defineProperty(_values, keys.lightBlue, '#74A2D6'), _defineProperty(_values, keys.niceRed, '#FF3347'), _defineProperty(_values, keys.red, '#E64646'), _defineProperty(_values, keys.fireOrange, '#F05C44'), _defineProperty(_values, keys.orange, '#FFA000'), _defineProperty(_values, keys.green, '#4BB34B'), _defineProperty(_values, keys.blue, '#5C9CE6'), _defineProperty(_values, keys.separator, 'rgba(0, 0, 0, .12)'), _defineProperty(_values, keys.placeholderBackground, 'rgba(0, 28, 61, .08)'), _defineProperty(_values, keys.placeholderForeground, 'rgba(0, 36, 77, .25)'), _values);

module.exports = {
  titles: titles, values: values, keys: keys
};

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = keyframes;
function keyframes(name, obj) {
  if (!name || !obj) {
    return '';
  }

  var selectors = Object.keys(obj).map(function (key) {
    return key + ' {' + Object.keys(obj[key]).map(function (k) {
      return k + ':' + obj[key][k];
    }).join(';') + '}';
  }).join('');

  return '@-webkit-keyframes ' + name + ' {' + selectors + '} @keyframes ' + name + ' {' + selectors + '}';
}

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getOffsetRect = getOffsetRect;
function getOffsetRect(elem) {
  var box = elem.getBoundingClientRect();
  var body = document.body;
  var doc = document.documentElement;
  var scrollTop = window.pageYOffset || doc.scrollTop || body.scrollTop;
  var scrollLeft = window.pageXOffset || doc.scrollLeft || body.scrollLeft;
  var clientTop = doc.clientTop || body.clientTop || 0;
  var clientLeft = doc.clientLeft || body.clientLeft || 0;

  return {
    top: Math.round(box.top + scrollTop - clientTop),
    left: Math.round(box.left + scrollLeft - clientLeft),
    width: elem.offsetWidth,
    height: elem.offsetHeight
  };
}

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var querystring = {
  parse: function parse() {
    var string = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

    if (typeof string !== 'string') return {};

    var matches = /\?(.+)$/ig.exec(string);
    var str = matches ? matches[1] : string;

    return str.split('&').reduce(function (acc, item) {
      var param = item.split('=');

      if (param[1]) {
        acc[param[0]] = decodeURIComponent(param[1]);
      }

      return acc;
    }, {});
  },
  create: function create() {
    var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var opts = arguments[1];

    if ((typeof data === 'undefined' ? 'undefined' : _typeof(data)) !== 'object' || data === null) return '';

    var options = _extends({ encode: true }, opts);

    return Object.keys(data).reduce(function (acc, item) {
      var type = _typeof(data[item]);

      if (type === 'string' || type === 'number' || type === 'boolean') {
        acc.push(item + '=' + (options.encode ? encodeURIComponent(data[item]) : data[item]));
      }

      if (Array.isArray(data[item])) {
        data[item].forEach(function (value) {
          acc.push(item + '[]=' + (options.encode ? encodeURIComponent(value) : value));
        });
      }

      return acc;
    }, []).join('&');
  }
};

exports.default = querystring;

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var isWebView = exports.isWebView = !!(window && (window.AndroidBridge || window.webkit && window.webkit.messageHandlers));

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

!function (e, r) {
  if ("object" == ( false ? "undefined" : _typeof(exports)) && "object" == ( false ? "undefined" : _typeof(module))) module.exports = r(__webpack_require__(1), __webpack_require__(0), __webpack_require__(6), __webpack_require__(7));else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(1), __webpack_require__(0), __webpack_require__(6), __webpack_require__(7)], __WEBPACK_AMD_DEFINE_FACTORY__ = (r),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else {
    var t = "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) ? r(require("prop-types"), require("react"), require("svg-baker-runtime/browser-symbol"), require("svg-sprite-loader/runtime/browser-sprite.build")) : r(e["prop-types"], e.react, e["svg-baker-runtime/browser-symbol"], e["svg-sprite-loader/runtime/browser-sprite.build"]);for (var o in t) {
      ("object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) ? exports : e)[o] = t[o];
    }
  }
}(undefined, function (e, r, t, o) {
  return function (e) {
    function r(o) {
      if (t[o]) return t[o].exports;var i = t[o] = { i: o, l: !1, exports: {} };return e[o].call(i.exports, i, i.exports, r), i.l = !0, i.exports;
    }var t = {};return r.m = e, r.c = t, r.i = function (e) {
      return e;
    }, r.d = function (e, t, o) {
      r.o(e, t) || Object.defineProperty(e, t, { configurable: !1, enumerable: !0, get: o });
    }, r.n = function (e) {
      var t = e && e.__esModule ? function () {
        return e.default;
      } : function () {
        return e;
      };return r.d(t, "a", t), t;
    }, r.o = function (e, r) {
      return Object.prototype.hasOwnProperty.call(e, r);
    }, r.p = "", r(r.s = 46);
  }({ 0: function _(r, t) {
      r.exports = e;
    }, 1: function _(e, t) {
      e.exports = r;
    }, 2: function _(e, r) {
      e.exports = t;
    }, 3: function _(e, r) {
      e.exports = o;
    }, 46: function _(e, r, t) {
      "use strict";
      function o(e) {
        return e && e.__esModule ? e : { default: e };
      }function i(e) {
        var r = "Icon Icon--" + y + " Icon--" + d.id + " " + (e.className || "");return p.default.createElement("div", { className: r, style: n({ width: b + "px", height: v + "px" }, e.style), onClick: e.onClick }, p.default.createElement("svg", { viewBox: d.viewBox, width: b, height: v, style: { display: "block" } }, p.default.createElement("use", { xlinkHref: "#" + d.id, style: { fill: "currentColor", color: e.fill } })));
      }Object.defineProperty(r, "__esModule", { value: !0 });var n = Object.assign || function (e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = arguments[r];for (var o in t) {
            Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
          }
        }return e;
      },
          s = t(2),
          u = o(s),
          l = t(3),
          a = o(l),
          c = t(1),
          p = o(c),
          f = t(0),
          d = (o(f), new u.default({ id: "cancel_24", use: "cancel_24-usage", viewBox: "0 0 24 24", content: '<symbol viewBox="0 0 24 24" id="cancel_24"><path d="M18.3,5.7 L18.3,5.7 C17.9134007,5.31340068 17.2865993,5.31340068 16.9,5.7 L12,10.6 L7.1,5.7 C6.71340068,5.31340068 6.08659932,5.31340068 5.7,5.7 L5.7,5.7 C5.31340068,6.08659932 5.31340068,6.71340068 5.7,7.1 L10.6,12 L5.7,16.9 C5.31340068,17.2865993 5.31340068,17.9134007 5.7,18.3 L5.7,18.3 C6.08659932,18.6865993 6.71340068,18.6865993 7.1,18.3 L12,13.4 L16.9,18.3 C17.2865993,18.6865993 17.9134007,18.6865993 18.3,18.3 L18.3,18.3 C18.6865993,17.9134007 18.6865993,17.2865993 18.3,16.9 L13.4,12 L18.3,7.1 C18.6865993,6.71340068 18.6865993,6.08659932 18.3,5.7 Z" /></symbol>' })),
          b = (a.default.add(d), d.viewBox.split(" ")[2]),
          v = d.viewBox.split(" ")[3],
          y = Math.max(b, v);i.displayName = "icon-" + d.id, r.default = i;
    } });
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(10)(module)))

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

/**
 * Получает кординату по оси абсцисс из touch- или mouse-события
 *
 * @param {Object} e Бразуерное событие
 * @returns {Number} Координата взаимодействия по оси абсцисс
 */
var coordX = function coordX(e) {
  return e.clientX || e.touches && e.touches[0].clientX;
};

/**
 * Получает кординату по оси ординат из touch- или mouse-события
 *
 * @param {Object} e Бразуерное событие
 * @returns {Number} Координата взаимодействия по оси ординат
 */
var coordY = function coordY(e) {
  return e.clientY || e.touches && e.touches[0].clientY;
};

var isClient = typeof window !== 'undefined';
var touchEnabled = isClient && 'ontouchstart' in window;

/**
 * Возвращает массив поддерживаемых событий
 * Если браузер поддерживает pointer events или подключена handjs, вернет события указателя.
 * Если нет, используем события мыши
 *
 * @returns {Array} Массив с названиями событий
 */
function getSupportedEvents() {
  if (touchEnabled) {
    return ['touchstart', 'touchmove', 'touchend', 'touchcancel'];
  }

  return ['mousedown', 'mousemove', 'mouseup', 'mouseleave'];
}

exports.getSupportedEvents = getSupportedEvents;
exports.coordX = coordX;
exports.coordY = coordY;
exports.touchEnabled = touchEnabled;

/***/ }),
/* 35 */
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
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(87);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _platform = __webpack_require__(4);

var _classnames = __webpack_require__(3);

var _classnames2 = _interopRequireDefault(_classnames);

var _getClassName = __webpack_require__(2);

var _getClassName2 = _interopRequireDefault(_getClassName);

var _removeObjectKeys = __webpack_require__(5);

var _removeObjectKeys2 = _interopRequireDefault(_removeObjectKeys);

var _FormLayout = __webpack_require__(21);

var _FormLayout2 = _interopRequireDefault(_FormLayout);

var _Input = __webpack_require__(23);

var _Input2 = _interopRequireDefault(_Input);

var _IosAlertInput = __webpack_require__(73);

var _IosAlertInput2 = _interopRequireDefault(_IosAlertInput);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var osname = (0, _platform.platform)();
var baseClassNames = (0, _getClassName2.default)('AlertInput');

var AlertInput = function (_Component) {
  _inherits(AlertInput, _Component);

  function AlertInput() {
    _classCallCheck(this, AlertInput);

    return _possibleConstructorReturn(this, (AlertInput.__proto__ || Object.getPrototypeOf(AlertInput)).apply(this, arguments));
  }

  _createClass(AlertInput, [{
    key: 'render',
    value: function render() {
      var className = this.props.className;


      if (osname === _platform.ANDROID) {
        return _react2.default.createElement(
          'div',
          { className: (0, _classnames2.default)(baseClassNames, className) },
          _react2.default.createElement(
            _FormLayout2.default,
            null,
            _react2.default.createElement(_Input2.default, (0, _removeObjectKeys2.default)(this.props, ['className']))
          )
        );
      }

      return _react2.default.createElement(_IosAlertInput2.default, _extends({
        className: (0, _classnames2.default)(baseClassNames, className)
      }, (0, _removeObjectKeys2.default)(this.props, ['className'])));
    }
  }]);

  return AlertInput;
}(_react.Component);

AlertInput.propTypes = {
  className: _propTypes2.default.string
};
exports.default = AlertInput;

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _webview = __webpack_require__(32);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ConfigProvider = function (_React$Component) {
  _inherits(ConfigProvider, _React$Component);

  function ConfigProvider() {
    _classCallCheck(this, ConfigProvider);

    return _possibleConstructorReturn(this, (ConfigProvider.__proto__ || Object.getPrototypeOf(ConfigProvider)).apply(this, arguments));
  }

  _createClass(ConfigProvider, [{
    key: 'getChildContext',
    value: function getChildContext() {
      var insets = Object.assign({ top: 0, right: 0, bottom: 0, left: 0 }, this.props.insets, { bottom: !parseInt(this.props.insets.bottom) || this.props.insets.bottom > 100 ? 0 : this.props.insets.bottom });
      return {
        insets: insets,
        isWebView: this.props.isWebView
      };
    }
  }, {
    key: 'render',
    value: function render() {
      return this.props.children;
    }
  }]);

  return ConfigProvider;
}(_react2.default.Component);

ConfigProvider.childContextTypes = {
  insets: _propTypes2.default.shape({
    top: _propTypes2.default.number,
    right: _propTypes2.default.number,
    bottom: _propTypes2.default.number,
    left: _propTypes2.default.number
  }),
  isWebView: _propTypes2.default.bool
};
ConfigProvider.propTypes = {
  insets: _propTypes2.default.shape({
    top: _propTypes2.default.number,
    right: _propTypes2.default.number,
    bottom: _propTypes2.default.number,
    left: _propTypes2.default.number
  }),
  isWebView: _propTypes2.default.bool,
  children: _propTypes2.default.node
};
ConfigProvider.defaultProps = {
  insets: {},
  isWebView: _webview.isWebView
};
exports.default = ConfigProvider;

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = Div;

__webpack_require__(91);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _platform = __webpack_require__(4);

var _classnames = __webpack_require__(3);

var _classnames2 = _interopRequireDefault(_classnames);

var _getClassName = __webpack_require__(2);

var _getClassName2 = _interopRequireDefault(_getClassName);

var _removeObjectKeys = __webpack_require__(5);

var _removeObjectKeys2 = _interopRequireDefault(_removeObjectKeys);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var osname = (0, _platform.platform)();
var baseClassNames = (0, _getClassName2.default)('Div');

function Div(props) {
  var modifiers = {
    'Div--shadow': osname === _platform.ANDROID && props.androidShadow,
    'Div--border': osname === _platform.IOS && props.iosBorder
  };

  return _react2.default.createElement(
    'div',
    _extends({
      className: (0, _classnames2.default)(baseClassNames, modifiers, props.className),
      style: props.style
    }, (0, _removeObjectKeys2.default)(props, ['className', 'style', 'iosBorder', 'androidShadow'])),
    props.children
  );
}

Div.propTypes = {
  style: _propTypes2.default.object,
  children: _propTypes2.default.node,
  androidShadow: _propTypes2.default.bool,
  iosBorder: _propTypes2.default.bool,
  className: _propTypes2.default.string
};

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(93);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _removeObjectKeys = __webpack_require__(5);

var _removeObjectKeys2 = _interopRequireDefault(_removeObjectKeys);

var _getClassName = __webpack_require__(2);

var _getClassName2 = _interopRequireDefault(_getClassName);

var _Button = __webpack_require__(18);

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var baseClassNames = (0, _getClassName2.default)('File');

var File = function (_Component) {
  _inherits(File, _Component);

  function File(props) {
    _classCallCheck(this, File);

    var _this = _possibleConstructorReturn(this, (File.__proto__ || Object.getPrototypeOf(File)).call(this, props));

    _this.changeHandler = function (e) {
      _this.setState({ value: e.target.value });
      if (_this.props.onChange) {
        _this.props.onChange(e);
      }
    };

    _this.state = {
      value: null
    };
    return _this;
  }

  _createClass(File, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          style = _props.style,
          label = _props.label,
          alignment = _props.alignment,
          appearance = _props.appearance;


      return _react2.default.createElement(
        _Button2.default,
        {
          alignment: alignment,
          appearance: appearance,
          onClick: function onClick() {},
          className: baseClassNames,
          style: style,
          component: 'div'
        },
        _react2.default.createElement(
          'label',
          { className: 'File__in' },
          _react2.default.createElement('input', _extends({
            className: 'File__self',
            type: 'file',
            onChange: this.changeHandler
          }, (0, _removeObjectKeys2.default)(this.props, ['onChange', 'style', 'label', 'alignment', 'appearance'])))
        ),
        label
      );
    }
  }]);

  return File;
}(_react.Component);

File.propTypes = {
  style: _propTypes2.default.object,
  label: _propTypes2.default.string,
  alignment: _propTypes2.default.oneOf(['left', 'center', 'right']),
  appearance: _propTypes2.default.oneOf(['primary', 'default', 'danger']),
  onChange: _propTypes2.default.func
};
File.defaultProps = {
  style: {},
  label: 'Choose file',
  alignment: 'left',
  appearance: 'default',
  onChange: function onChange() {}
};
exports.default = File;

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _getClassName = __webpack_require__(2);

var _getClassName2 = _interopRequireDefault(_getClassName);

__webpack_require__(95);

var _FixedLayout = __webpack_require__(20);

var _FixedLayout2 = _interopRequireDefault(_FixedLayout);

var _Tabs = __webpack_require__(26);

var _Tabs2 = _interopRequireDefault(_Tabs);

var _platform = __webpack_require__(4);

var _classnames2 = __webpack_require__(3);

var _classnames3 = _interopRequireDefault(_classnames2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var osname = (0, _platform.platform)();
var baseClassName = (0, _getClassName2.default)('FixedTabs');

var FixedTabs = function (_React$Component) {
  _inherits(FixedTabs, _React$Component);

  function FixedTabs() {
    _classCallCheck(this, FixedTabs);

    return _possibleConstructorReturn(this, (FixedTabs.__proto__ || Object.getPrototypeOf(FixedTabs)).apply(this, arguments));
  }

  _createClass(FixedTabs, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _FixedLayout2.default,
        { vertical: this.props.vertical, className: (0, _classnames3.default)(baseClassName, _defineProperty({}, 'FixedTabs--' + this.props.background, true), this.props.className), style: this.props.style },
        _react2.default.createElement(
          _Tabs2.default,
          { theme: this.props.theme },
          this.props.children
        )
      );
    }
  }]);

  return FixedTabs;
}(_react2.default.Component);

FixedTabs.propTypes = {
  children: _propTypes2.default.node.isRequired,
  className: _propTypes2.default.string,
  vertical: _propTypes2.default.oneOf(['top', 'bottom']),
  style: _propTypes2.default.object,
  theme: osname === _platform.IOS ? _propTypes2.default.oneOf(['white', 'gray']) : _propTypes2.default.oneOf(['white']),
  background: osname === _platform.IOS ? _propTypes2.default.oneOf(['transparent', 'gray', 'white']) : _propTypes2.default.oneOf(['blue'])
};
FixedTabs.defaultProps = {
  background: osname === _platform.IOS ? 'gray' : 'blue',
  theme: osname === _platform.IOS ? 'gray' : 'white',
  vertical: 'top'
};
exports.default = FixedTabs;

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = Flex;

__webpack_require__(96);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(3);

var _classnames2 = _interopRequireDefault(_classnames);

var _getClassName = __webpack_require__(2);

var _getClassName2 = _interopRequireDefault(_getClassName);

var _removeObjectKeys = __webpack_require__(5);

var _removeObjectKeys2 = _interopRequireDefault(_removeObjectKeys);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var baseClassNames = (0, _getClassName2.default)('Flex');

function Flex(props) {
  var items = [].concat(props.children).filter(function (a) {
    return !!a;
  });

  return _react2.default.createElement(
    'div',
    _extends({
      className: (0, _classnames2.default)(baseClassNames, props.className),
      style: _extends({}, props.style, {
        alignItems: props.align,
        justifyContent: props.justify
      })
    }, (0, _removeObjectKeys2.default)(props, ['className', 'style', 'alignment', 'align', 'justify'])),
    items.map(function (item, i) {
      return _react2.default.createElement(
        'div',
        { className: 'Flex__item', key: item.key || item.props.id || 'flex-item-' + i },
        item
      );
    })
  );
}

Flex.propTypes = {
  style: _propTypes2.default.object,
  children: _propTypes2.default.node,
  className: _propTypes2.default.string,
  align: _propTypes2.default.string,
  justify: _propTypes2.default.string
};

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(99);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _getClassName = __webpack_require__(2);

var _getClassName2 = _interopRequireDefault(_getClassName);

var _Touch = __webpack_require__(9);

var _Touch2 = _interopRequireDefault(_Touch);

var _classnames3 = __webpack_require__(3);

var _classnames4 = _interopRequireDefault(_classnames3);

var _requestAnimationFrame = __webpack_require__(11);

var _requestAnimationFrame2 = _interopRequireDefault(_requestAnimationFrame);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var baseClassNames = (0, _getClassName2.default)('Gallery');

var Gallery = function (_Component) {
  _inherits(Gallery, _Component);

  function Gallery(props) {
    _classCallCheck(this, Gallery);

    var _this = _possibleConstructorReturn(this, (Gallery.__proto__ || Object.getPrototypeOf(Gallery)).call(this, props));

    _initialiseProps.call(_this);

    var current = typeof props.slideIndex === 'number' ? props.slideIndex : props.initialSlideIndex;

    _this.state = {
      containerWidth: 0,
      current: current,
      deltaX: 0,
      shiftX: 0,
      slides: [],
      animation: false,
      duration: 0.24
    };

    _this.slides = _this.getChildren(props.children);
    return _this;
  }

  _createClass(Gallery, [{
    key: 'initializeSlides',
    value: function initializeSlides() {
      var callback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function () {};

      var slides = this.getSlidesCoords();
      var containerWidth = this.container.offsetWidth;
      var viewportWidth = this.viewport.offsetWidth;
      var layerWidth = slides.reduce(function (val, slide) {
        return slide.width + val;
      }, 0);
      var min = this.calcMin({ containerWidth: containerWidth, layerWidth: layerWidth, viewportWidth: viewportWidth });
      var max = 0;

      this.setState({ min: min, max: max, layerWidth: layerWidth, containerWidth: containerWidth, slides: slides }, callback);
    }
  }, {
    key: 'calcMin',
    value: function calcMin(_ref) {
      var containerWidth = _ref.containerWidth,
          layerWidth = _ref.layerWidth,
          viewportWidth = _ref.viewportWidth;

      switch (this.props.align) {
        case 'left':
          return containerWidth - layerWidth;
        case 'right':
          return viewportWidth - layerWidth;
        case 'center':
          return viewportWidth - (containerWidth - viewportWidth) / 2 - layerWidth;
      }
    }

    /**
     * Получает координаты и размеры каждого слайда
      * @returns {Array} Массив с объектами, описывающими габариты слайда
     */

  }, {
    key: 'getSlidesCoords',
    value: function getSlidesCoords() {
      var _this2 = this;

      return [].concat(this.props.children).reduce(function (acc, item, i) {
        if (item) {
          var elem = _this2.slidesStore['slide-' + i];
          var res = {
            coordX: elem.offsetLeft,
            width: elem.offsetWidth,
            id: item.props.id
          };

          acc.push(res);
        }

        return acc;
      }, []);
    }

    /**
     * Считает отступ слоя галереи во время драга
     *
     * @returns {Number} Значения отступа
     */

  }, {
    key: 'calculateDragIndent',
    value: function calculateDragIndent() {
      var _state = this.state,
          shiftX = _state.shiftX,
          deltaX = _state.deltaX,
          min = _state.min,
          max = _state.max;

      var indent = shiftX + deltaX;
      if (indent > max) {
        return max + Number((indent - max) / 3);
      } else if (indent < min) {
        return min + Number((indent - min) / 3);
      }

      return indent;
    }

    /**
     * Считает отступ слоя галереи
     *
     * @param {Number} targetIndex ID целевого слайда
     * @returns {Number} Значения отступа
     */

  }, {
    key: 'calculateIndent',
    value: function calculateIndent(targetIndex) {
      var slides = this.state.slides;


      if (!this.isDraggable()) {
        return 0;
      }

      var coordX = slides.length ? slides[targetIndex].coordX : 0;
      return this.validateIndent(-1 * coordX);
    }
  }, {
    key: 'validateIndent',
    value: function validateIndent(value) {
      var _state2 = this.state,
          min = _state2.min,
          max = _state2.max;


      if (value < min) {
        return min;
      } else if (value > max) {
        return max;
      }

      return value;
    }
  }, {
    key: 'isDraggable',
    value: function isDraggable() {
      return this.state.layerWidth > this.state.containerWidth;
    }

    /**
     * Получает индекс слайда, к которому будет осуществлен переход
     *
     * @returns {Number} Индекс слайда
     */

  }, {
    key: 'getTarget',
    value: function getTarget() {
      var _state3 = this.state,
          slides = _state3.slides,
          current = _state3.current,
          deltaX = _state3.deltaX,
          shiftX = _state3.shiftX,
          startT = _state3.startT;

      var expectDeltaX = deltaX / (new Date() - startT) * 240 * 0.6;
      var shift = shiftX + deltaX + expectDeltaX;
      var direction = deltaX < 0 ? 1 : -1;

      // Находим ближайшую границу слайда к текущему отступу
      var targetIndex = slides.reduce(function (val, item, index) {
        var previousValue = Math.abs(slides[val].coordX + shift);
        var currentValue = Math.abs(item.coordX + shift);

        return previousValue < currentValue ? val : index;
      }, current);

      if (targetIndex === current) {
        var targetSlide = current + direction;

        if (targetSlide >= 0 && targetSlide < slides.length) {
          if (Math.abs(deltaX) > slides[targetSlide].width * 0.05) {
            targetIndex = targetSlide;
          }
        }
      }

      return targetIndex;
    }
  }, {
    key: 'getChildren',
    value: function getChildren(children) {
      return [].concat(children || this.props.children).reduce(this.reduceChildren, []);
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this3 = this;

      this.initializeSlides(function () {
        _this3.setState({
          shiftX: _this3.calculateIndent(_this3.state.current)
        });
      });
      window.addEventListener('resize', this.onResize);

      if (this.props.autoplay) {
        this.setTimeout(this.props.autoplay);
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      if (this.isChildrenDirty) {
        this.isChildrenDirty = false;
        this.initializeSlides();
      }
      if (prevState.current !== this.state.current && this.props.onChange) {
        this.props.onChange(this.state.current);
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      this.slides = this.getChildren(nextProps.children);
      this.isChildrenDirty = true;

      if (nextProps.autoplay && !this.props.autoplay) {
        if (nextProps.autoplay) {
          this.setTimeout(nextProps.autoplay);
        }
      }
      if (!nextProps.autoplay && this.props.autoplay) {
        this.clearTimeout();
      }
      if (nextProps.slideIndex !== this.props.slideIndex && typeof nextProps.slideIndex === 'number') {
        this.go(nextProps.slideIndex);
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      window.removeEventListener('resize', this.onResize);

      this.clearTimeout();
    }
  }, {
    key: 'render',
    value: function render() {
      var _state4 = this.state,
          animation = _state4.animation,
          duration = _state4.duration,
          current = _state4.current,
          dragging = _state4.dragging;
      var _props = this.props,
          className = _props.className,
          style = _props.style,
          slideWidth = _props.slideWidth;

      var indent = dragging ? this.calculateDragIndent() : this.calculateIndent(current);
      var classname = (0, _classnames4.default)(baseClassNames, className, _defineProperty({
        'Gallery--dragging': dragging
      }, 'Gallery--' + this.props.align, true));

      var layerStyle = {
        WebkitTransform: 'translateX(' + indent + 'px)',
        transform: 'translateX(' + indent + 'px)',
        WebkitTransition: animation ? '-webkit-transform ' + duration + 's cubic-bezier(.1, 0, .25, 1)' : 'none',
        transition: animation ? 'transform ' + duration + 's cubic-bezier(.1, 0, .25, 1)' : 'none'
      };

      return _react2.default.createElement(
        'div',
        { className: classname, style: style, ref: this.getContainerRef },
        _react2.default.createElement(
          _Touch2.default,
          {
            className: 'Gallery__viewport',
            onStartX: this.onStart,
            onMoveX: this.onMoveX,
            onEnd: this.onEnd,
            style: { width: slideWidth },
            ref: this.getViewportRef
          },
          _react2.default.createElement(
            'div',
            { className: 'Gallery__layer', style: layerStyle },
            this.slides
          )
        ),
        this.props.bullets && _react2.default.createElement(
          'div',
          { className: (0, _classnames4.default)('Gallery__bullets', _defineProperty({}, 'Gallery__bullets--' + this.props.bullets, true)) },
          this.slides.map(function (item, index) {
            return _react2.default.createElement('div', { className: (0, _classnames4.default)('Gallery__bullet', {
                'Gallery__bullet--active': index === current
              }), key: index });
          })
        )
      );
    }
  }]);

  return Gallery;
}(_react.Component);

Gallery.propTypes = {
  children: _propTypes2.default.node,
  className: _propTypes2.default.string,
  style: _propTypes2.default.object,
  slideWidth: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  autoplay: _propTypes2.default.number,
  initialSlideIndex: _propTypes2.default.number,
  slideIndex: _propTypes2.default.number,
  onDragStart: _propTypes2.default.func,
  onDragEnd: _propTypes2.default.func,
  onChange: _propTypes2.default.func,
  onEnd: _propTypes2.default.func,
  align: _propTypes2.default.oneOf(['left', 'center', 'right']),
  bullets: _propTypes2.default.oneOf(['dark', 'light', false])
};
Gallery.defaultProps = {
  slideWidth: '100%',
  children: '',
  autoplay: 0,
  initialSlideIndex: 0,
  align: 'left',
  bullets: false
};

var _initialiseProps = function _initialiseProps() {
  var _this4 = this;

  this.slidesStore = {};

  this.go = function (targetIndex) {
    _this4.setState({
      animation: true,
      shiftX: _this4.calculateIndent(targetIndex),
      current: targetIndex
    });

    if (_this4.timeout) {
      _this4.clearTimeout();
      _this4.setTimeout(_this4.props.autoplay);
    }
  };

  this.onStart = function (e) {
    _this4.setState({
      animation: false,
      startT: e.startT
    });
  };

  this.onMoveX = function (e) {
    if (!_this4.isDraggable()) {
      return;
    }

    e.originalEvent.preventDefault();

    if (e.isSlideX) {
      _this4.props.onDragStart && _this4.props.onDragStart();
      if (_this4.state.deltaX !== e.shiftX || _this4.state.dragging !== e.isSlideX) {
        _this4.setState({
          deltaX: e.shiftX,
          dragging: e.isSlideX
        });
      }

      return true;
    }
  };

  this.onEnd = function (e) {
    var targetIndex = e.isSlide ? _this4.getTarget() : _this4.state.current;
    _this4.props.onDragEnd && _this4.props.onDragEnd();

    _this4.setState({
      shiftX: _this4.calculateIndent(targetIndex),
      deltaX: 0,
      animation: true,
      current: targetIndex,
      duration: '.24'
    });

    if (_this4.props.onEnd) {
      _this4.props.onEnd({
        targetIndex: targetIndex
      });
    }

    if (_this4.timeout) {
      _this4.clearTimeout();
      _this4.setTimeout(_this4.props.autoplay);
    }

    return true;
  };

  this.onResize = function () {
    _this4.initializeSlides();

    var layerWidth = _this4.state.layerWidth;

    var containerWidth = _this4.container.offsetWidth;
    var viewportWidth = _this4.viewport.offsetWidth;

    _this4.setState({
      shiftX: _this4.calculateIndent(_this4.state.current),
      containerWidth: containerWidth,
      min: _this4.calcMin({ layerWidth: layerWidth, containerWidth: containerWidth, viewportWidth: viewportWidth }),
      animation: false
    }, function () {
      (0, _requestAnimationFrame2.default)(function () {
        return _this4.setState({ animation: true });
      });
    });
  };

  this.setTimeout = function (duration) {
    _this4.timeout = setTimeout(function () {
      var _state5 = _this4.state,
          slides = _state5.slides,
          current = _state5.current;

      var targetIndex = current < slides.length - 1 ? current + 1 : 0;

      _this4.go(targetIndex);
    }, duration);
  };

  this.clearTimeout = function () {
    clearTimeout(_this4.timeout);
  };

  this.reduceChildren = function (acc, item, i) {
    if (item) {
      var key = item.props.key || item.props.id || 'slide-' + i;
      var ref = _this4.getSlideRef(i);

      acc.push(_react2.default.createElement(
        'div',
        { className: 'Gallery__slide', key: key, ref: ref },
        item
      ));
    }

    return acc;
  };

  this.getContainerRef = function (container) {
    _this4.container = container;
  };

  this.getViewportRef = function (viewport) {
    _this4.viewport = viewport ? viewport.container : {};
  };

  this.getSlideRef = function (id) {
    return function (slide) {
      _this4.slidesStore['slide-' + id] = slide;
    };
  };
};

exports.default = Gallery;

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(100);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _getClassName = __webpack_require__(2);

var _getClassName2 = _interopRequireDefault(_getClassName);

var _classnames = __webpack_require__(3);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var baseClassNames = (0, _getClassName2.default)('Group');

var Group = function (_Component) {
  _inherits(Group, _Component);

  function Group() {
    _classCallCheck(this, Group);

    return _possibleConstructorReturn(this, (Group.__proto__ || Object.getPrototypeOf(Group)).apply(this, arguments));
  }

  _createClass(Group, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          style = _props.style,
          title = _props.title,
          description = _props.description,
          className = _props.className;


      return _react2.default.createElement(
        'div',
        { className: (0, _classnames2.default)(baseClassNames, className), style: style },
        title && _react2.default.createElement(
          'h3',
          { className: 'Group__title' },
          title
        ),
        _react2.default.createElement(
          'div',
          { className: 'Group__content' },
          this.props.children
        ),
        description && _react2.default.createElement(
          'div',
          { className: 'Group__description' },
          description
        )
      );
    }
  }]);

  return Group;
}(_react.Component);

Group.propTypes = {
  style: _propTypes2.default.object,
  title: _propTypes2.default.node,
  description: _propTypes2.default.node,
  children: _propTypes2.default.node,
  className: _propTypes2.default.string
};
Group.defaultProps = {
  style: {},
  title: '',
  description: '',
  children: ''
};
exports.default = Group;

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _getClassName = __webpack_require__(2);

var _getClassName2 = _interopRequireDefault(_getClassName);

var _classnames2 = __webpack_require__(3);

var _classnames3 = _interopRequireDefault(_classnames2);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

__webpack_require__(101);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var baseClassNames = (0, _getClassName2.default)('Header');

var Header = function Header(_ref) {
  var className = _ref.className,
      level = _ref.level,
      children = _ref.children,
      aside = _ref.aside;

  return _react2.default.createElement(
    'div',
    { className: (0, _classnames3.default)(baseClassNames, className, _defineProperty({}, 'Header--level-' + level, true)) },
    _react2.default.createElement(
      'div',
      { className: 'Header__in' },
      _react2.default.createElement(
        'div',
        { className: 'Header__content' },
        children
      ),
      aside && _react2.default.createElement(
        'div',
        { className: 'Header__aside' },
        aside
      )
    )
  );
};

Header.propTypes = {
  className: _propTypes2.default.string,
  level: _propTypes2.default.oneOf(['1', '2']),
  aside: _propTypes2.default.node,
  children: _propTypes2.default.node
};

Header.defaultProps = {
  level: '1'
};

exports.default = Header;

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _getClassName = __webpack_require__(2);

var _getClassName2 = _interopRequireDefault(_getClassName);

var _classnames = __webpack_require__(3);

var _classnames2 = _interopRequireDefault(_classnames);

__webpack_require__(103);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var baseClassName = (0, _getClassName2.default)('InfoRow');

var InfoRow = function InfoRow(_ref) {
  var title = _ref.title,
      className = _ref.className,
      children = _ref.children,
      style = _ref.style;
  return _react2.default.createElement(
    'div',
    { className: (0, _classnames2.default)(baseClassName, className), style: style },
    _react2.default.createElement(
      'div',
      { className: 'InfoRow__title' },
      title
    ),
    _react2.default.createElement(
      'div',
      null,
      children
    )
  );
};

InfoRow.propTypes = {
  title: _propTypes2.default.node.isRequired,
  children: _propTypes2.default.node,
  className: _propTypes2.default.string,
  style: _propTypes2.default.object
};

exports.default = InfoRow;

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _getClassName = __webpack_require__(2);

var _getClassName2 = _interopRequireDefault(_getClassName);

var _classnames = __webpack_require__(3);

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

__webpack_require__(106);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var baseClassName = (0, _getClassName2.default)('Link');

var Link = function Link(_ref) {
  var children = _ref.children,
      className = _ref.className,
      Component = _ref.Component,
      restProps = _objectWithoutProperties(_ref, ['children', 'className', 'Component']);

  return _react2.default.createElement(
    Component,
    _extends({ className: (0, _classnames2.default)(baseClassName, className) }, restProps),
    children
  );
};

Link.propTypes = {
  children: _propTypes2.default.node,
  className: _propTypes2.default.string,
  Component: _propTypes2.default.any
};

Link.defaultProps = {
  Component: 'a'
};

exports.default = Link;

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(107);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(3);

var _classnames2 = _interopRequireDefault(_classnames);

var _getClassName = __webpack_require__(2);

var _getClassName2 = _interopRequireDefault(_getClassName);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var baseClassNames = (0, _getClassName2.default)('List');

var List = function (_Component) {
  _inherits(List, _Component);

  function List() {
    _classCallCheck(this, List);

    return _possibleConstructorReturn(this, (List.__proto__ || Object.getPrototypeOf(List)).apply(this, arguments));
  }

  _createClass(List, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          style = _props.style,
          className = _props.className,
          children = _props.children;


      return _react2.default.createElement(
        'ul',
        { className: (0, _classnames2.default)(baseClassNames, className), style: style },
        children
      );
    }
  }]);

  return List;
}(_react.Component);

List.propTypes = {
  style: _propTypes2.default.object,
  children: _propTypes2.default.node,
  className: _propTypes2.default.string
};
List.defaultProps = {
  style: {},
  children: ''
};
exports.default = List;

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(108);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(3);

var _classnames2 = _interopRequireDefault(_classnames);

var _getClassName = __webpack_require__(2);

var _getClassName2 = _interopRequireDefault(_getClassName);

var _Tappable = __webpack_require__(8);

var _Tappable2 = _interopRequireDefault(_Tappable);

var _platform = __webpack_require__(4);

var _chevron = __webpack_require__(71);

var _chevron2 = _interopRequireDefault(_chevron);

var _done = __webpack_require__(68);

var _done2 = _interopRequireDefault(_done);

var _cancel = __webpack_require__(33);

var _cancel2 = _interopRequireDefault(_cancel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var osname = (0, _platform.platform)();

var baseClassNames = (0, _getClassName2.default)('ListItem');

var ListItem = function (_Component) {
  _inherits(ListItem, _Component);

  function ListItem() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, ListItem);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ListItem.__proto__ || Object.getPrototypeOf(ListItem)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      isRemoveActivated: false,
      height: null,
      removeOffset: 0
    }, _this.activateRemove = function () {
      _this.setState({ isRemoveActivated: true, height: _this.rootEl.offsetHeight });
      _this.document.addEventListener('click', _this.deactivateRemove);
    }, _this.deactivateRemove = function () {
      _this.setState({ isRemoveActivated: false, removeOffset: 0, height: null });
      _this.document.removeEventListener('click', _this.deactivateRemove);
    }, _this.onRemoveClick = function (e) {
      e.nativeEvent.stopImmediatePropagation();
      e.preventDefault();
      if (!_this.state.removing) {
        _this.rootEl.addEventListener('transitionend', _this.onRemoveFinish);
        _this.setState({ removing: true, height: 0 });
      }
    }, _this.onRemoveFinish = function () {
      _this.rootEl.removeEventListener('transitionend', _this.onRemoveFinish);
      _this.props.onRemove();
    }, _this.getRemoveRef = function (el) {
      return _this.removeButton = el;
    }, _this.getRootRef = function (el) {
      return _this.rootEl = el;
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ListItem, [{
    key: 'emptyClickHandler',
    value: function emptyClickHandler() {}
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.rootEl.removeEventListener('transitionend', this.onRemoveFinish);
      this.document.removeEventListener('click', this.deactivateRemove);
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      if (prevState.isRemoveActivated !== this.state.isRemoveActivated && this.state.isRemoveActivated) {
        this.setState({ removeOffset: this.removeButton.offsetWidth });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          before = _props.before,
          indicator = _props.indicator,
          asideContent = _props.asideContent,
          expandable = _props.expandable,
          onClick = _props.onClick,
          children = _props.children,
          description = _props.description,
          selectable = _props.selectable,
          multiline = _props.multiline,
          className = _props.className,
          onRemove = _props.onRemove,
          removable = _props.removable,
          removePlaceholder = _props.removePlaceholder,
          restProps = _objectWithoutProperties(_props, ['before', 'indicator', 'asideContent', 'expandable', 'onClick', 'children', 'description', 'selectable', 'multiline', 'className', 'onRemove', 'removable', 'removePlaceholder']);

      var modifiers = {
        'ListItem--expandable': expandable,
        'ListItem--multiline': multiline || description,
        'ListItem--removing': this.state.removing
      };

      var rootProps = selectable ? {} : restProps;
      var inputProps = selectable ? rootProps : {};

      return _react2.default.createElement(
        'li',
        _extends({
          className: (0, _classnames2.default)(baseClassNames, modifiers, className)
        }, rootProps, {
          ref: this.getRootRef,
          style: { height: this.state.height }
        }),
        _react2.default.createElement(
          _Tappable2.default,
          {
            component: selectable ? 'label' : 'div',
            className: 'ListItem__in',
            onClick: selectable ? this.emptyClickHandler : onClick,
            style: { transform: 'translateX(-' + this.state.removeOffset + 'px)' }
          },
          selectable && _react2.default.createElement('input', _extends({
            type: 'checkbox',
            className: 'ListItem__checkbox'
          }, inputProps)),
          _react2.default.createElement(
            'div',
            { className: 'ListItem__before' },
            selectable && osname === _platform.IOS && _react2.default.createElement(
              'div',
              { className: 'ListItem__checkbox-marker' },
              _react2.default.createElement(_done2.default, null)
            ),
            removable && osname === _platform.IOS && _react2.default.createElement('div', { className: 'ListItem__remove-marker', onClick: this.activateRemove }),
            before && _react2.default.createElement(
              'div',
              { className: 'ListItem__before-in' },
              before
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'ListItem__main' },
            children,
            _react2.default.createElement(
              'div',
              { className: 'ListItem__description' },
              description
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'ListItem__indicator' },
            indicator
          ),
          _react2.default.createElement(
            'div',
            { className: 'ListItem__aside' },
            asideContent,
            selectable && osname === _platform.ANDROID && _react2.default.createElement(
              'div',
              { className: 'ListItem__checkbox-marker' },
              _react2.default.createElement(_done2.default, null)
            ),
            removable && osname === _platform.ANDROID && _react2.default.createElement(
              'div',
              { className: 'ListItem__remove-marker', onClick: onRemove },
              _react2.default.createElement(_cancel2.default, null)
            )
          ),
          osname === _platform.IOS && expandable && _react2.default.createElement(_chevron2.default, { className: 'ListItem__chevron' })
        ),
        removable && osname === _platform.IOS && _react2.default.createElement(
          'div',
          {
            ref: this.getRemoveRef,
            className: 'ListItem__remove',
            onClick: this.onRemoveClick,
            style: { transform: 'translateX(-' + this.state.removeOffset + 'px)' }
          },
          removePlaceholder
        )
      );
    }
  }, {
    key: 'document',
    get: function get() {
      return this.context.document || document;
    }
  }]);

  return ListItem;
}(_react.Component);

ListItem.propTypes = {
  before: _propTypes2.default.node,
  indicator: _propTypes2.default.node,
  asideContent: _propTypes2.default.node,
  expandable: _propTypes2.default.bool,
  children: _propTypes2.default.node,
  onClick: _propTypes2.default.func,
  multiline: _propTypes2.default.bool,
  description: _propTypes2.default.node,
  className: _propTypes2.default.string,
  selectable: _propTypes2.default.bool,
  removable: _propTypes2.default.bool,
  onRemove: _propTypes2.default.func,
  removePlaceholder: _propTypes2.default.node
};
ListItem.defaultProps = {
  before: null,
  indicator: '',
  asideContent: '',
  expandable: false,
  children: '',
  selectable: false,
  multiline: false,
  removable: false,
  removePlaceholder: 'Удалить'
};
ListItem.contextTypes = {
  document: _propTypes2.default.any
};
exports.default = ListItem;

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _removeObjectKeys = __webpack_require__(5);

var _removeObjectKeys2 = _interopRequireDefault(_removeObjectKeys);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Alert = __webpack_require__(16);

var _Alert2 = _interopRequireDefault(_Alert);

var _ActionSheet = __webpack_require__(15);

var _ActionSheet2 = _interopRequireDefault(_ActionSheet);

var _ActionSheetItem = __webpack_require__(12);

var _ActionSheetItem2 = _interopRequireDefault(_ActionSheetItem);

var _string = __webpack_require__(84);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var actionId = 1;

var NativePopouts = function (_React$Component) {
  _inherits(NativePopouts, _React$Component);

  function NativePopouts() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, NativePopouts);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = NativePopouts.__proto__ || Object.getPrototypeOf(NativePopouts)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      popout: null
    }, _this.actions = [], _this.actionsStore = {}, _this.vkuiListener = function (e) {
      if (e.type === 'VKWebAppEvent' && e.detail && e.detail.action) {
        if (_this.actionsStore.hasOwnProperty(e.detail.action)) {
          _this.actionsStore[e.detail.action](e.detail);
          _this.props.popout && _this.props.popout.onClose && _this.props.popout.onClose();
        }
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(NativePopouts, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.vkuiConnect.subscribe(this.vkuiListener);
      if (this.props.popout) {
        this.renderPopout(this.props);
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.props.vkuiConnect.unsubscribe(this.vkuiListener);
    }
  }, {
    key: 'renderNativeAlert',
    value: function renderNativeAlert(popout) {
      var style = popout.style,
          title = popout.title,
          message = popout.text;

      this.props.vkuiConnect.send('VKWebAppAlert', {
        style: style,
        title: (0, _string.brToNl)(title),
        message: (0, _string.brToNl)(message),
        actions: this.actions.map(function (item) {
          return (0, _removeObjectKeys2.default)(item, ['action']);
        })
      });
    }
  }, {
    key: 'renderUIAlert',
    value: function renderUIAlert(popout) {
      var title = popout.title,
          text = popout.text,
          onClose = popout.onClose,
          actionsLayout = popout.actionsLayout;

      this.setState({
        popout: _react2.default.createElement(
          _Alert2.default,
          {
            actions: this.actions.map(function (item) {
              return (0, _removeObjectKeys2.default)(item, ['params']);
            }),
            onClose: onClose,
            actionsLayout: actionsLayout
          },
          title && _react2.default.createElement(
            'h2',
            null,
            title
          ),
          text && _react2.default.createElement(
            'p',
            null,
            text
          )
        )
      });
    }
  }, {
    key: 'renderNativeSheet',
    value: function renderNativeSheet(popout) {
      var style = popout.style;

      this.props.vkuiConnect.send('VKWebAppAlert', {
        style: style,
        actions: this.actions.map(function (item) {
          return (0, _removeObjectKeys2.default)(item, ['action']);
        })
      });
    }
  }, {
    key: 'renderUISheet',
    value: function renderUISheet(popout) {
      var title = popout.title,
          text = popout.text,
          onClose = popout.onClose;

      this.setState({
        popout: _react2.default.createElement(
          _ActionSheet2.default,
          {
            title: title,
            text: text,
            onClose: onClose
          },
          this.actions.map(function (item, index) {
            return _react2.default.createElement(
              _ActionSheetItem2.default,
              { autoclose: item.autoclose, theme: item.style, onClick: item.action, key: '' + index },
              item.title
            );
          })
        )
      });
    }
  }, {
    key: 'closeUIPopout',
    value: function closeUIPopout() {
      this.setState({ popout: null });
    }
  }, {
    key: 'renderPopout',
    value: function renderPopout(props) {
      if (props.popout.style) {
        this.actions = props.popout.actions.map(function (item) {
          return Object.assign({}, item, {
            autoclose: item.hasOwnProperty('autoclose') ? item.autoclose : true,
            action: item.action || props.popout.onClose,
            handler: Object.assign({}, item.params, { action: 'action-' + actionId++ })
          });
        });

        this.actionsStore = this.actions.reduce(function (res, item) {
          res[item.handler.action] = item.action;return res;
        }, {});

        switch (props.popout.style) {
          case 'alert':
            this.context.isWebView ? this.renderNativeAlert(props.popout) : this.renderUIAlert(props.popout);
            break;
          case 'actionSheet':
            this.context.isWebView ? this.renderNativeSheet(props.popout) : this.renderUISheet(props.popout);
            break;
        }
      } else {
        this.setState({ popout: props.popout });
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (!nextProps.popout && this.props.popout) {
        this.closeUIPopout();
      }
      if (nextProps.popout && nextProps.popout !== this.props.popout) {
        this.context.isWebView && this.closeUIPopout();
        this.renderPopout(nextProps);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var Component = this.props.component;
      return _react2.default.createElement(Component, _extends({}, (0, _removeObjectKeys2.default)(this.props, ['popout']), { popout: this.state.popout }));
    }
  }]);

  return NativePopouts;
}(_react2.default.Component);

NativePopouts.propTypes = {
  popout: _propTypes2.default.oneOfType([_propTypes2.default.shape({
    style: _propTypes2.default.oneOf(['alert', 'actionSheet']).isRequired,
    title: _propTypes2.default.string,
    text: _propTypes2.default.string,
    onClose: _propTypes2.default.func.isRequired,
    actions: _propTypes2.default.arrayOf(_propTypes2.default.shape({
      style: _propTypes2.default.oneOf(['cancel', 'default', 'destructive']),
      title: _propTypes2.default.string,
      action: _propTypes2.default.func
    }))
  }), _propTypes2.default.element]),
  vkuiConnect: _propTypes2.default.shape({
    send: _propTypes2.default.func.isRequired,
    subscribe: _propTypes2.default.func.isRequired,
    unsubscribe: _propTypes2.default.func.isRequired
  }).isRequired,
  // Root or View
  component: _propTypes2.default.func.isRequired
};
NativePopouts.contextTypes = {
  isWebView: _propTypes2.default.bool
};
exports.default = NativePopouts;

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _getClassName = __webpack_require__(2);

var _getClassName2 = _interopRequireDefault(_getClassName);

var _classnames = __webpack_require__(3);

var _classnames2 = _interopRequireDefault(_classnames);

var _Entity = __webpack_require__(19);

var _Entity2 = _interopRequireDefault(_Entity);

__webpack_require__(109);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var baseClassName = (0, _getClassName2.default)('NewPane');

var Pane = function Pane(_ref) {
  var children = _ref.children,
      className = _ref.className;

  return _react2.default.createElement(
    'div',
    { className: (0, _classnames2.default)(baseClassName, { 'NewPane--entity': children && children.type === _Entity2.default }, className) },
    children
  );
};

Pane.propTypes = {
  children: _propTypes2.default.node,
  className: _propTypes2.default.string
};

exports.default = Pane;

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _getClassName = __webpack_require__(2);

var _getClassName2 = _interopRequireDefault(_getClassName);

var _classnames = __webpack_require__(3);

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

__webpack_require__(111);

var _colors = __webpack_require__(28);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var baseClassName = (0, _getClassName2.default)('Progress');

var Progress = function Progress(_ref) {
  var value = _ref.value,
      className = _ref.className,
      color = _ref.color,
      restProps = _objectWithoutProperties(_ref, ['value', 'className', 'color']);

  return _react2.default.createElement(
    'div',
    _extends({
      className: (0, _classnames2.default)(baseClassName, className)
    }, restProps),
    _react2.default.createElement('div', {
      className: 'Progress__in',
      style: { width: value + '%', backgroundColor: color }
    })
  );
};

Progress.propTypes = {
  color: _propTypes2.default.oneOf(Object.values(_colors.values)),
  style: _propTypes2.default.object,
  className: _propTypes2.default.string,
  value: _propTypes2.default.number
};

Progress.defaultProps = {
  color: _colors.values[_colors.keys.headerBlue],
  value: 0
};

exports.default = Progress;

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

__webpack_require__(112);

__webpack_require__(113);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Tappable = __webpack_require__(8);

var _Tappable2 = _interopRequireDefault(_Tappable);

var _getClassName = __webpack_require__(2);

var _getClassName2 = _interopRequireDefault(_getClassName);

var _classnames = __webpack_require__(3);

var _classnames2 = _interopRequireDefault(_classnames);

var _platform = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var osname = (0, _platform.platform)();

var Radio = function Radio(_ref) {
  var v = _ref.v,
      children = _ref.children,
      description = _ref.description,
      className = _ref.className,
      restProps = _objectWithoutProperties(_ref, ['v', 'children', 'description', 'className']);

  var name = v === 'new' ? 'RadioNew' : 'Radio';

  return _react2.default.createElement(
    _Tappable2.default,
    {
      component: 'label',
      onClick: function onClick() {},
      className: (0, _classnames2.default)((0, _getClassName2.default)(name), className),
      activeEffectDelay: osname === _platform.IOS ? 100 : _Tappable.ACTIVE_EFFECT_DELAY
    },
    _react2.default.createElement('input', _extends({
      type: 'radio',
      className: name + '__self'
    }, restProps)),
    _react2.default.createElement(
      'div',
      { className: name + '__wrapper' },
      v === 'new' && _react2.default.createElement('div', { className: name + '__icon' }),
      _react2.default.createElement(
        'div',
        { className: name + '__container' },
        children,
        _react2.default.createElement(
          'div',
          { className: name + '__description' },
          description
        )
      ),
      v === 'old' && _react2.default.createElement('div', { className: name + '__icon' })
    )
  );
};

Radio.propTypes = {
  children: _propTypes2.default.node,
  description: _propTypes2.default.node,
  className: _propTypes2.default.string,
  v: _propTypes2.default.oneOf(['new', 'old'])
};

Radio.defaultProps = {
  v: 'old'
};

exports.default = Radio;

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Touch = __webpack_require__(9);

var _Touch2 = _interopRequireDefault(_Touch);

var _getClassName = __webpack_require__(2);

var _getClassName2 = _interopRequireDefault(_getClassName);

var _Slider2 = __webpack_require__(24);

var _Slider3 = _interopRequireDefault(_Slider2);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(3);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var baseClassNames = (0, _getClassName2.default)('Slider');

var RangeSlider = function (_Slider) {
  _inherits(RangeSlider, _Slider);

  function RangeSlider() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, RangeSlider);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = RangeSlider.__proto__ || Object.getPrototypeOf(RangeSlider)).call.apply(_ref, [this].concat(args))), _this), _this.onStart = function (e) {
      var absolutePosition = _this.validateAbsolute(e.startX - _this.state.containerLeft);
      var percentPosition = _this.absoluteToPecent(absolutePosition);
      var percentRange = _this.calcPercentRange(percentPosition);

      _this.onChange(_this.percentToValue(percentRange));

      if (_this.isControlledOutside) {
        _this.setState({ startX: absolutePosition });
      } else {
        _this.setState(_extends({
          startX: absolutePosition
        }, percentRange));
      }

      var thumb = e.originalEvent.target.closest('.Slider__thumb');

      if (thumb === _this.thumbStart) {
        _this.setState({ active: 'start' });
      } else if (thumb === _this.thumbEnd) {
        _this.setState({ active: 'end' });
      }
    }, _this.onMoveX = function (e) {
      var absolutePosition = _this.validateAbsolute(_this.state.startX + (e.shiftX || 0));
      var percentPosition = _this.absoluteToPecent(absolutePosition);
      var percentRange = _this.calcPercentRange(percentPosition);

      _this.onChange(_this.percentToValue(percentRange));

      if (!_this.isControlledOutside) {
        _this.setState(percentRange);
      }

      e.originalEvent.preventDefault();
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(RangeSlider, [{
    key: 'calcPercentRange',
    value: function calcPercentRange(percent) {
      var _state = this.state,
          percentStart = _state.percentStart,
          percentEnd = _state.percentEnd;


      if (percentStart === 100) {
        return { percentStart: percent, percentEnd: percentEnd };
      } else if (percentEnd === 0) {
        return { percentEnd: percent, percentStart: percentStart };
      } else if (Math.abs(percentStart - percent) <= Math.abs(percentEnd - percent)) {
        return { percentStart: percent, percentEnd: percentEnd };
      } else {
        return { percentEnd: percent, percentStart: percentStart };
      }
    }
  }, {
    key: 'validatePercent',
    value: function validatePercent(_ref2) {
      var percentStart = _ref2.percentStart,
          percentEnd = _ref2.percentEnd;

      return {
        percentStart: _get(RangeSlider.prototype.__proto__ || Object.getPrototypeOf(RangeSlider.prototype), 'validatePercent', this).call(this, percentStart),
        percentEnd: _get(RangeSlider.prototype.__proto__ || Object.getPrototypeOf(RangeSlider.prototype), 'validatePercent', this).call(this, percentEnd)
      };
    }
  }, {
    key: 'percentToValue',
    value: function percentToValue(_ref3) {
      var percentStart = _ref3.percentStart,
          percentEnd = _ref3.percentEnd;

      return [_get(RangeSlider.prototype.__proto__ || Object.getPrototypeOf(RangeSlider.prototype), 'percentToValue', this).call(this, percentStart), _get(RangeSlider.prototype.__proto__ || Object.getPrototypeOf(RangeSlider.prototype), 'percentToValue', this).call(this, percentEnd)];
    }
  }, {
    key: 'valueToPercent',
    value: function valueToPercent(_ref4) {
      var _ref5 = _slicedToArray(_ref4, 2),
          valueStart = _ref5[0],
          valueEnd = _ref5[1];

      return {
        percentStart: _get(RangeSlider.prototype.__proto__ || Object.getPrototypeOf(RangeSlider.prototype), 'valueToPercent', this).call(this, valueStart),
        percentEnd: _get(RangeSlider.prototype.__proto__ || Object.getPrototypeOf(RangeSlider.prototype), 'valueToPercent', this).call(this, valueEnd)
      };
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      window.addEventListener('resize', this.onResize);
      this.onResize(function () {
        _this2.setState(_this2.validatePercent(_this2.valueToPercent(_this2.value)));
      });
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (this.isControlledOutside && nextProps.value !== this.props.value) {
        this.setState(this.validatePercent(this.valueToPercent(nextProps.value)));
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      return _react2.default.createElement(
        'div',
        { className: (0, _classnames2.default)(baseClassNames, this.props.className), ref: this.getRef, style: this.props.style },
        _react2.default.createElement(
          _Touch2.default,
          { onStart: this.onStart, onMoveX: this.onMoveX, onEnd: this.onEnd, className: 'Slider__in' },
          _react2.default.createElement(
            'div',
            {
              className: 'Slider__dragger',
              style: {
                width: this.state.percentEnd - this.state.percentStart + '%',
                left: this.state.percentStart + '%'
              }
            },
            _react2.default.createElement('span', {
              className: (0, _classnames2.default)('Slider__thumb', 'Slider__thumb--start', {
                'Slider__thumb--active': this.state.active === 'start'
              }),
              ref: function ref(el) {
                return _this3.thumbStart = el;
              }
            }),
            _react2.default.createElement('span', {
              className: (0, _classnames2.default)('Slider__thumb', 'Slider__thumb--end', {
                'Slider__thumb--active': this.state.active === 'end'
              }),
              ref: function ref(el) {
                return _this3.thumbEnd = el;
              }
            })
          )
        )
      );
    }
  }, {
    key: 'value',
    get: function get() {
      if (this.isControlledOutside) {
        return this.props.value;
      } else if (this.props.hasOwnProperty('defaultValue')) {
        return this.props.defaultValue;
      } else {
        return [this.props.min, this.props.max];
      }
    }
  }]);

  return RangeSlider;
}(_Slider3.default);

RangeSlider.propTypes = _extends({}, _Slider3.default.propTypes, {
  value: _propTypes2.default.arrayOf(_propTypes2.default.number),
  defaultValue: _propTypes2.default.arrayOf(_propTypes2.default.number)
});
RangeSlider.defaultProps = _Slider3.default.defaultProps;
exports.default = RangeSlider;

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(3);

var _classnames2 = _interopRequireDefault(_classnames);

var _getClassName = __webpack_require__(2);

var _getClassName2 = _interopRequireDefault(_getClassName);

__webpack_require__(114);

var _transitionEvents = __webpack_require__(14);

var _transitionEvents2 = _interopRequireDefault(_transitionEvents);

var _platform = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var osname = (0, _platform.platform)();
var baseClassName = (0, _getClassName2.default)('Root');

var Root = function (_React$Component) {
  _inherits(Root, _React$Component);

  function Root(props) {
    _classCallCheck(this, Root);

    var _this = _possibleConstructorReturn(this, (Root.__proto__ || Object.getPrototypeOf(Root)).call(this));

    _this.onAnimationEnd = function () {
      var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { manual: true };

      if (['root-android-animation-hide-back', 'root-android-animation-show-forward', 'root-ios-animation-hide-back', 'root-ios-animation-show-forward'].indexOf(e.animationName) > -1 || e.manual) {
        var isBack = _this.state.isBack;
        _this.setState({
          activeView: _this.state.nextView,
          prevView: null,
          nextView: null,
          visibleViews: [_this.state.nextView],
          transition: false,
          isBack: undefined
        }, function () {
          isBack ? _this.window.scrollTo(0, _this.state.scrolls[_this.state.activeView]) : _this.window.scrollTo(0, 0);
          _this.props.onTransition && _this.props.onTransition(_this.state.isBack);
        });
      }
    };

    _this.state = {
      activeView: props.activeView,
      prevView: null,
      nextView: null,
      visibleViews: [props.activeView],
      isBack: undefined,
      scrolls: {}
    };
    return _this;
  }

  _createClass(Root, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var _this2 = this;

      if (nextProps.popout && !this.props.popout) {
        this.blurActiveElement();
      }

      if (nextProps.activeView !== this.props.activeView) {
        var pageYOffset = this.window.pageYOffset;
        var firstLayerId = this.props.children.find(function (view) {
          return view.props.id === _this2.props.activeView || view.props.id === nextProps.activeView;
        }).props.id;
        var isBack = firstLayerId === nextProps.activeView;

        this.blurActiveElement();

        var nextView = nextProps.activeView;
        var prevView = this.props.activeView;

        this.setState({
          scrolls: Object.assign({}, this.state.scrolls, _defineProperty({}, this.props.activeView, pageYOffset)),
          transition: true,
          activeView: null,
          nextView: nextView,
          prevView: prevView,
          visibleViews: [nextView, prevView],
          isBack: isBack
        });
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      if (!prevState.transition && this.state.transition) {
        this.prevViewEl.querySelector('.View__panel').scrollTop = this.state.scrolls[this.state.prevView];

        if (this.state.isBack) {
          this.nextViewEl.querySelector('.View__panel').scrollTop = this.state.scrolls[this.state.nextView];
        }
        this.waitAnimationFinish(this.state.isBack ? this.prevViewEl : this.nextViewEl, this.onAnimationEnd);
      }
    }
  }, {
    key: 'waitAnimationFinish',
    value: function waitAnimationFinish(elem, eventHandler) {
      if (_transitionEvents2.default.supported) {
        var eventName = _transitionEvents2.default.prefix ? _transitionEvents2.default.prefix + 'AnimationEnd' : 'animationend';

        elem.removeEventListener(eventName, eventHandler);
        elem.addEventListener(eventName, eventHandler);
      } else {
        setTimeout(eventHandler.bind(this), osname === _platform.ANDROID ? 300 : 600);
      }
    }
  }, {
    key: 'blurActiveElement',
    value: function blurActiveElement() {
      if (typeof this.window !== 'undefined' && this.document.activeElement) {
        this.document.activeElement.blur();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var Views = _react2.default.Children.toArray(this.props.children).filter(function (View) {
        return _this3.state.visibleViews.indexOf(View.props.id) >= 0;
      });
      return _react2.default.createElement(
        'div',
        { className: (0, _classnames2.default)(baseClassName, {
            'Root--transition': this.state.transition
          }) },
        Views.map(function (View) {
          return _react2.default.createElement(
            'div',
            { key: View.props.id, className: (0, _classnames2.default)('Root__view', {
                'Root__view--hide-back': View.props.id === _this3.state.prevView && _this3.state.isBack,
                'Root__view--hide-forward': View.props.id === _this3.state.prevView && !_this3.state.isBack,
                'Root__view--show-back': View.props.id === _this3.state.nextView && _this3.state.isBack,
                'Root__view--show-forward': View.props.id === _this3.state.nextView && !_this3.state.isBack,
                'Root__view--active': View.props.id === _this3.state.activeView
              }), ref: function ref(el) {
                if (View.props.id === _this3.state.prevView) _this3.prevViewEl = el;
                if (View.props.id === _this3.state.nextView) _this3.nextViewEl = el;
              } },
            View
          );
        }),
        this.props.popout && _react2.default.createElement(
          'div',
          { className: 'Root__popout' },
          this.props.popout
        )
      );
    }
  }, {
    key: 'document',
    get: function get() {
      return this.context.document || document;
    }
  }, {
    key: 'window',
    get: function get() {
      return this.context.window || window;
    }
  }]);

  return Root;
}(_react2.default.Component);

Root.propTypes = {
  activeView: _propTypes2.default.string.isRequired,
  popout: _propTypes2.default.node,
  onTransition: _propTypes2.default.func,
  children: _propTypes2.default.node
};
Root.defaultProps = {
  popout: null
};
Root.contextTypes = {
  window: _propTypes2.default.any,
  document: _propTypes2.default.any
};
exports.default = Root;

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = ScreenSpinner;

__webpack_require__(115);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Spinner = __webpack_require__(25);

var _Spinner2 = _interopRequireDefault(_Spinner);

var _getClassName = __webpack_require__(2);

var _getClassName2 = _interopRequireDefault(_getClassName);

var _classnames = __webpack_require__(3);

var _classnames2 = _interopRequireDefault(_classnames);

var _removeObjectKeys = __webpack_require__(5);

var _removeObjectKeys2 = _interopRequireDefault(_removeObjectKeys);

var _PopoutWrapper = __webpack_require__(13);

var _PopoutWrapper2 = _interopRequireDefault(_PopoutWrapper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var baseClassNames = (0, _getClassName2.default)('ScreenSpinner');

function ScreenSpinner(props) {
  return _react2.default.createElement(
    _PopoutWrapper2.default,
    { onClick: props.onClick },
    _react2.default.createElement(
      'div',
      _extends({
        className: (0, _classnames2.default)(baseClassNames, props.className)
      }, (0, _removeObjectKeys2.default)(props, ['className', 'onClick'])),
      _react2.default.createElement(_Spinner2.default, { color: '#fff' })
    )
  );
}

ScreenSpinner.propTypes = {
  className: _propTypes2.default.string,
  onClick: _propTypes2.default.func
};

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(116);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _getClassName = __webpack_require__(2);

var _getClassName2 = _interopRequireDefault(_getClassName);

var _removeObjectKeys = __webpack_require__(5);

var _removeObjectKeys2 = _interopRequireDefault(_removeObjectKeys);

var _classnames = __webpack_require__(3);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var baseClassNames = (0, _getClassName2.default)('ScrollView');

var ScrollView = function (_Component) {
  _inherits(ScrollView, _Component);

  function ScrollView(props) {
    _classCallCheck(this, ScrollView);

    var _this = _possibleConstructorReturn(this, (ScrollView.__proto__ || Object.getPrototypeOf(ScrollView)).call(this, props));

    _this.state = {};
    return _this;
  }

  _createClass(ScrollView, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        panel: this.props.id
      };
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(_ref) {
      var id = _ref.id,
          activePanel = _ref.activePanel,
          nextPanel = _ref.nextPanel;

      return id === activePanel || id === nextPanel;
    }
  }, {
    key: 'render',
    value: function render() {
      var className = this.props.className;


      return _react2.default.createElement(
        'div',
        _extends({
          className: (0, _classnames2.default)(baseClassNames, className, {
            'ScrollView--centered': this.props.centered
          })
        }, (0, _removeObjectKeys2.default)(this.props, ['header', 'onPull', 'className', 'activePanel', 'prevPanel', 'nextPanel', 'fixedLayout', 'theme', 'centered']), {
          ref: this.getRef
        }),
        _react2.default.createElement(
          'div',
          { className: 'ScrollView__in', style: { paddingBottom: this.insets.bottom || null } },
          this.props.children
        )
      );
    }
  }, {
    key: 'insets',
    get: function get() {
      return this.context.insets || {};
    }
  }]);

  return ScrollView;
}(_react.Component);

ScrollView.childContextTypes = {
  panel: _propTypes2.default.string
};
ScrollView.propTypes = {
  /**
   * @ignore
   */
  activePanel: _propTypes2.default.string,
  /**
   * @ignore
   */
  prevPanel: _propTypes2.default.string,
  /**
   * @ignore
   */
  nextPanel: _propTypes2.default.string,
  /**
   * @ignore
   */
  children: _propTypes2.default.node,
  className: _propTypes2.default.string,
  theme: _propTypes2.default.oneOf(['white', 'gray']),
  id: _propTypes2.default.string.isRequired,
  header: _propTypes2.default.shape({
    left: _propTypes2.default.node,
    right: _propTypes2.default.node,
    title: _propTypes2.default.node
  }),
  centered: _propTypes2.default.bool
};
ScrollView.contextTypes = {
  insets: _propTypes2.default.shape({
    top: _propTypes2.default.number,
    right: _propTypes2.default.number,
    bottom: _propTypes2.default.number,
    left: _propTypes2.default.number
  })
};
ScrollView.defaultProps = {
  children: '',
  theme: 'gray',
  centered: false
};
exports.default = ScrollView;

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _platform = __webpack_require__(4);

var _SearchIOS = __webpack_require__(79);

var _SearchIOS2 = _interopRequireDefault(_SearchIOS);

var _SearchAndroid = __webpack_require__(78);

var _SearchAndroid2 = _interopRequireDefault(_SearchAndroid);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var osname = (0, _platform.platform)();

var Search = function (_React$Component) {
  _inherits(Search, _React$Component);

  function Search() {
    _classCallCheck(this, Search);

    return _possibleConstructorReturn(this, (Search.__proto__ || Object.getPrototypeOf(Search)).apply(this, arguments));
  }

  _createClass(Search, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          onClose = _props.onClose,
          iosProps = _objectWithoutProperties(_props, ['onClose']);

      var _props2 = this.props,
          after = _props2.after,
          before = _props2.before,
          theme = _props2.theme,
          androidProps = _objectWithoutProperties(_props2, ['after', 'before', 'theme']);

      if (osname === _platform.IOS) {
        return _react2.default.createElement(_SearchIOS2.default, iosProps);
      } else {
        return _react2.default.createElement(_SearchAndroid2.default, androidProps);
      }
    }
  }]);

  return Search;
}(_react2.default.Component);

Search.propTypes = {
  onClose: _propTypes2.default.func,
  after: _propTypes2.default.node,
  before: _propTypes2.default.node,
  className: _propTypes2.default.string,
  defaultValue: _propTypes2.default.string,
  value: _propTypes2.default.string,
  onChange: _propTypes2.default.func,
  onFocus: _propTypes2.default.func,
  onBlur: _propTypes2.default.func,
  placeholder: _propTypes2.default.node,
  theme: _propTypes2.default.oneOf(['header', 'default'])
};
exports.default = Search;

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(119);

__webpack_require__(120);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _getClassName = __webpack_require__(2);

var _getClassName2 = _interopRequireDefault(_getClassName);

var _classnames2 = __webpack_require__(3);

var _classnames3 = _interopRequireDefault(_classnames2);

var _dropdown = __webpack_require__(72);

var _dropdown2 = _interopRequireDefault(_dropdown);

var _platform = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var osname = (0, _platform.platform)();

var Select = function (_Component) {
  _inherits(Select, _Component);

  function Select(props) {
    _classCallCheck(this, Select);

    var _this = _possibleConstructorReturn(this, (Select.__proto__ || Object.getPrototypeOf(Select)).call(this, props));

    _this.onChange = function (e) {
      if (!_this.isControlledOutside) {
        _this.setState({ value: e.target.value });
      }
      if (_this.props.onChange) {
        _this.props.onChange(e);
      }
    };

    _this.getRef = function (el) {
      _this.props.getRef && _this.props.getRef(el);
    };

    if (typeof props.value !== 'undefined') {
      _this.isControlledOutside = true;
    } else {
      _this.state = {
        value: _this.props.defaultValue || ''
      };
    }
    return _this;
  }

  _createClass(Select, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          style = _props.style,
          label = _props.label,
          onChange = _props.onChange,
          options = _props.options,
          value = _props.value,
          defaultValue = _props.defaultValue,
          placeholder = _props.placeholder,
          children = _props.children,
          className = _props.className,
          v = _props.v,
          getRef = _props.getRef,
          restProps = _objectWithoutProperties(_props, ['style', 'label', 'onChange', 'options', 'value', 'defaultValue', 'placeholder', 'children', 'className', 'v', 'getRef']);

      return _react2.default.createElement(
        'label',
        {
          className: (0, _classnames3.default)((0, _getClassName2.default)(this.baseClass), _defineProperty({}, this.baseClass + '--not-selected', this.value === ''), className),
          style: style
        },
        _react2.default.createElement(
          'select',
          _extends({
            onChange: this.onChange,
            value: this.value,
            ref: this.getRef
          }, restProps),
          Array.isArray(this.options) && this.options.length && this.options.map(function (option, i) {
            var isString = typeof option === 'string';
            var value = isString ? option : typeof option.value === 'string' ? option.value : option.text;
            var key = !isString && option.id;

            return _react2.default.createElement(
              'option',
              { value: value, key: key || 'option-' + i },
              isString ? option : option.text
            );
          }),
          placeholder && !this.options && _react2.default.createElement(
            'option',
            { value: '' },
            placeholder
          ),
          children
        ),
        v === 'new' && osname === _platform.ANDROID && _react2.default.createElement('div', { className: this.baseClass + '-underline' }),
        v === 'new' && _react2.default.createElement(_dropdown2.default, null)
      );
    }
  }, {
    key: 'baseClass',
    get: function get() {
      return this.props.v === 'old' ? 'Select' : 'SelectNew';
    }
  }, {
    key: 'value',
    get: function get() {
      return this.isControlledOutside ? this.props.value : this.state.value;
    }
  }, {
    key: 'options',
    get: function get() {
      var _props2 = this.props,
          options = _props2.options,
          placeholder = _props2.placeholder;

      if (!options) return options;
      return placeholder ? [{ text: placeholder, value: '' }].concat(_toConsumableArray(options)) : options;
    }
  }]);

  return Select;
}(_react.Component);

Select.propTypes = {
  style: _propTypes2.default.object,
  className: _propTypes2.default.string,
  label: _propTypes2.default.string,
  options: _propTypes2.default.array,
  name: _propTypes2.default.string,
  onChange: _propTypes2.default.func,
  value: _propTypes2.default.any,
  defaultValue: _propTypes2.default.any,
  children: _propTypes2.default.node,
  v: _propTypes2.default.oneOf(['old', 'new']),
  placeholder: _propTypes2.default.string,
  getRef: _propTypes2.default.func
};
Select.defaultProps = {
  style: {},
  label: '',
  options: null,
  name: '',
  v: 'old'
};
exports.default = Select;

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

__webpack_require__(123);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _getClassName = __webpack_require__(2);

var _getClassName2 = _interopRequireDefault(_getClassName);

var _classnames = __webpack_require__(3);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var baseClassNames = (0, _getClassName2.default)('Switch');

var Switch = function Switch(_ref) {
  var style = _ref.style,
      className = _ref.className,
      restProps = _objectWithoutProperties(_ref, ['style', 'className']);

  return _react2.default.createElement(
    'label',
    { className: (0, _classnames2.default)(baseClassNames, className), style: style },
    _react2.default.createElement('input', _extends({ type: 'checkbox', className: 'Switch__self' }, restProps)),
    _react2.default.createElement('span', { className: 'Switch__pseudo' })
  );
};

Switch.propTypes = {
  style: _propTypes2.default.object,
  onChange: _propTypes2.default.func,
  className: _propTypes2.default.string
};

exports.default = Switch;

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _getClassName = __webpack_require__(2);

var _getClassName2 = _interopRequireDefault(_getClassName);

var _Tappable = __webpack_require__(8);

var _Tappable2 = _interopRequireDefault(_Tappable);

__webpack_require__(125);

var _classnames2 = __webpack_require__(3);

var _classnames3 = _interopRequireDefault(_classnames2);

var _platform = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var osname = (0, _platform.platform)();
var baseClassName = (0, _getClassName2.default)('TabsItem');

var TabsItem = function (_React$Component) {
  _inherits(TabsItem, _React$Component);

  function TabsItem() {
    _classCallCheck(this, TabsItem);

    return _possibleConstructorReturn(this, (TabsItem.__proto__ || Object.getPrototypeOf(TabsItem)).apply(this, arguments));
  }

  _createClass(TabsItem, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          onClick = _props.onClick,
          children = _props.children,
          selected = _props.selected,
          className = _props.className,
          theme = _props.theme;


      return _react2.default.createElement(
        _Tappable2.default,
        {
          className: (0, _classnames3.default)(baseClassName, _defineProperty({
            'TabsItem--selected': selected
          }, 'TabsItem--' + theme, true), className),
          onClick: onClick,
          activeEffectDelay: osname === _platform.IOS ? 0 : _Tappable.ACTIVE_EFFECT_DELAY
        },
        children
      );
    }
  }]);

  return TabsItem;
}(_react2.default.Component);

TabsItem.propTypes = {
  onClick: _propTypes2.default.func.isRequired,
  children: _propTypes2.default.node.isRequired,
  selected: _propTypes2.default.bool,
  className: _propTypes2.default.string,
  theme: osname === _platform.IOS ? _propTypes2.default.oneOf(['white', 'gray']) : _propTypes2.default.oneOf(['white'])
};
TabsItem.defaultProps = {
  selected: false
};
exports.default = TabsItem;

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(127);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(3);

var _classnames2 = _interopRequireDefault(_classnames);

var _getClassName = __webpack_require__(2);

var _getClassName2 = _interopRequireDefault(_getClassName);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var baseClassNames = (0, _getClassName2.default)('Text');

var Text = function (_Component) {
  _inherits(Text, _Component);

  function Text() {
    _classCallCheck(this, Text);

    return _possibleConstructorReturn(this, (Text.__proto__ || Object.getPrototypeOf(Text)).apply(this, arguments));
  }

  _createClass(Text, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          alignment = _props.alignment,
          className = _props.className,
          style = _props.style;

      var modifiers = {
        'Text--left': alignment === 'left',
        'Text--center': alignment === 'center',
        'Text--right': alignment === 'right'
      };

      return _react2.default.createElement(
        'div',
        {
          className: (0, _classnames2.default)(baseClassNames, modifiers, className),
          style: style
        },
        this.props.children
      );
    }
  }]);

  return Text;
}(_react.Component);

Text.propTypes = {
  style: _propTypes2.default.object,
  className: _propTypes2.default.string,
  alignment: _propTypes2.default.oneOf(['left', 'center', 'right']),
  children: _propTypes2.default.node
};
Text.defaultProps = {
  style: {},
  alignment: 'left'
};
exports.default = Text;

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(128);

__webpack_require__(129);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _getClassName = __webpack_require__(2);

var _getClassName2 = _interopRequireDefault(_getClassName);

var _requestAnimationFrame = __webpack_require__(11);

var _requestAnimationFrame2 = _interopRequireDefault(_requestAnimationFrame);

var _platform = __webpack_require__(4);

var _classnames = __webpack_require__(3);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var osname = (0, _platform.platform)();

var Textarea = function (_Component) {
  _inherits(Textarea, _Component);

  function Textarea(props) {
    _classCallCheck(this, Textarea);

    var _this = _possibleConstructorReturn(this, (Textarea.__proto__ || Object.getPrototypeOf(Textarea)).call(this, props));

    _this.getRef = function (element) {
      _this.element = element;
      _this.props.getRef && _this.props.getRef(element);
    };

    _this.resize = function () {
      var el = _this.element;

      if (el) {
        var offsetHeight = el.offsetHeight,
            scrollHeight = el.scrollHeight;

        var style = window.getComputedStyle(el);
        var paddingTop = parseInt(style.paddingTop);
        var paddingBottom = parseInt(style.paddingBottom);

        var diff = paddingTop + paddingBottom;

        if (scrollHeight + diff <= offsetHeight) {
          diff = 0;
        }

        if (el.value) {
          _this.setState({ height: scrollHeight - diff });
        }

        // const top = document.body.scrollTop;

        _this.setState({ height: 0 }, function () {
          var height = el.scrollHeight - diff;

          _this.setState({ height: height });
          // TODO fix problem with scroll to top
          // document.body.scrollTop = top;

          _this.props.onResize(el);
        });
      }
    };

    _this.onChange = function (e) {
      if (_this.props.grow) {
        _this.resize();
      }

      if (!_this.isControlledOutside) {
        _this.setState({ value: e.target.value });
      }

      if (_this.props.onChange) {
        _this.props.onChange(e);
      }
    };

    if (typeof props.value !== 'undefined') {
      _this.isControlledOutside = true;
    } else {
      _this.state = {
        value: props.defaultValue || props.initialValue || ''
      };
    }
    return _this;
  }

  _createClass(Textarea, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.props.grow) {
        this.resize();
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      var _this2 = this;

      if (prevProps.value && this.props.value === '') {
        // Fix iOS extra indent on removing content
        (0, _requestAnimationFrame2.default)(function () {
          _this2.element.value = '';
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          initialValue = _props.initialValue,
          defaultValue = _props.defaultValue,
          grow = _props.grow,
          style = _props.style,
          onResize = _props.onResize,
          v = _props.v,
          className = _props.className,
          restProps = _objectWithoutProperties(_props, ['initialValue', 'defaultValue', 'grow', 'style', 'onResize', 'v', 'className']);

      var height = this.state.height || style.height || 66;

      return _react2.default.createElement(
        'div',
        { className: (0, _classnames2.default)((0, _getClassName2.default)(this.baseClass), className) },
        _react2.default.createElement('textarea', _extends({
          value: this.value,
          onChange: this.onChange,
          ref: this.getRef,
          style: Object.assign({}, style, { height: height })
        }, restProps)),
        osname === _platform.ANDROID && _react2.default.createElement('div', { className: this.baseClass + '-underline' })
      );
    }
  }, {
    key: 'baseClass',
    get: function get() {
      return this.props.v === 'old' ? 'Textarea' : 'TextareaNew';
    }
  }, {
    key: 'value',
    get: function get() {
      return this.isControlledOutside ? this.props.value : this.state.value;
    }
  }]);

  return Textarea;
}(_react.Component);

Textarea.propTypes = {
  style: _propTypes2.default.object,
  value: _propTypes2.default.string,
  defaultValue: _propTypes2.default.string,
  grow: _propTypes2.default.bool,
  onChange: _propTypes2.default.func,
  onResize: _propTypes2.default.func,
  v: _propTypes2.default.oneOf(['old', 'new']),
  className: _propTypes2.default.string,
  getRef: _propTypes2.default.func,

  /**
   * @deprecated since v1.5.0 Use defaultValue prop instead
   */
  initialValue: _propTypes2.default.string
};
Textarea.defaultProps = {
  style: {},
  defaultValue: '',
  grow: true,
  v: 'old',
  onResize: function onResize() {}
};
exports.default = Textarea;

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  families: {
    ios: "-apple-system, 'Helvetica Neue', Helvetica, sans-serif",
    android: "Roboto, Droid, 'Open Sans', sans-serif"
  }
};

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = wrapTextNode;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function wrapTextNode(node, props) {
  var TagName = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'div';

  if (!node) {
    return null;
  }

  if (typeof node === 'string') {
    return _react2.default.createElement(
      TagName,
      props,
      node
    );
  }

  return node;
}

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// CustomEvent
if (window && !window.CustomEvent) {
  var CustomEvent = function CustomEvent(event, params) {
    params = params || { bubbles: false, cancelable: false, detail: undefined };
    var evt = document.createEvent('CustomEvent');
    evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
    return evt;
  };

  CustomEvent.prototype = window.Event.prototype;

  window.CustomEvent = CustomEvent;
}

// Element.prototype.closest
if (window) {
  window.Element.prototype.closest = window.Element.prototype.closest || function (css) {
    var node = this;
    while (node) {
      if (node.matches(css)) return node;else node = node.parentElement;
    }
    return null;
  };
}

// Array.prototype.find
Array.prototype.find = Array.prototype.find || function (callback) {
  if (this === null) {
    throw new TypeError('Array.prototype.find called on null or undefined');
  } else if (typeof callback !== 'function') {
    throw new TypeError('callback must be a function');
  }

  var list = Object(this);
  var length = list.length >>> 0;
  var thisArg = arguments[1];

  for (var i = 0; i < length; i++) {
    var element = list[i];
    if (callback.call(thisArg, element, i, list)) {
      return element;
    }
  }
};

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _querystring = __webpack_require__(31);

var _querystring2 = _interopRequireDefault(_querystring);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultOptions = {
  method: 'GET',
  data: null
};

function getXMLHttpRequest() {
  if (typeof XMLHttpRequest !== 'undefined') {
    // eslint-disable-next-line
    return new XMLHttpRequest();
  }
}

function makeRequest(url, options) {
  var isCanceled = void 0;

  var error = new Error('Request was aborted');
  var request = getXMLHttpRequest();
  var opts = Object.assign({}, defaultOptions, options);

  if (opts.data && opts.method.toLowerCase() === 'get') {
    url += '?' + _querystring2.default.create(opts.data);
  }

  var requestPromise = new Promise(function (resolve, reject) {
    if (!request) {
      reject(new Error('XMLHttpRequest not supported'));
    }

    if (opts.timeout) {
      request.timeout = opts.timeout;
    }

    request.open(opts.method, url, true);

    if (opts.headers) {
      Object.keys(opts.headers).forEach(function (key) {
        request.setRequestHeader(key, opts.headers[key]);
      });
    }

    request.onreadystatechange = function () {
      if (request.readyState === 4) {
        if (request.status === 200) {
          resolve(request.responseText);
        } else {
          reject(new Error(request.status));
        }
      }
    };

    request.ontimeout = function () {
      reject(new Error('XMLHttpRequest timeout expires'));
    };

    request.send(opts.data);
  });

  return {

    promise: new Promise(function (resolve, reject) {
      requestPromise.then(function (res) {
        return isCanceled ? reject(error) : resolve(res);
      }).catch(function (e) {
        return isCanceled ? console.log(error) || reject(error) : reject(e);
      });
    }),

    abort: function abort() {
      isCanceled = true;
      if (request) {
        request.abort();
      }
    }
  };
}

exports.default = function (url, options) {
  return makeRequest(url, options);
};

/***/ }),
/* 67 */
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
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

!function (e, r) {
  if ("object" == ( false ? "undefined" : _typeof(exports)) && "object" == ( false ? "undefined" : _typeof(module))) module.exports = r(__webpack_require__(1), __webpack_require__(0), __webpack_require__(6), __webpack_require__(7));else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(1), __webpack_require__(0), __webpack_require__(6), __webpack_require__(7)], __WEBPACK_AMD_DEFINE_FACTORY__ = (r),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else {
    var t = "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) ? r(require("prop-types"), require("react"), require("svg-baker-runtime/browser-symbol"), require("svg-sprite-loader/runtime/browser-sprite.build")) : r(e["prop-types"], e.react, e["svg-baker-runtime/browser-symbol"], e["svg-sprite-loader/runtime/browser-sprite.build"]);for (var o in t) {
      ("object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) ? exports : e)[o] = t[o];
    }
  }
}(undefined, function (e, r, t, o) {
  return function (e) {
    function r(o) {
      if (t[o]) return t[o].exports;var i = t[o] = { i: o, l: !1, exports: {} };return e[o].call(i.exports, i, i.exports, r), i.l = !0, i.exports;
    }var t = {};return r.m = e, r.c = t, r.i = function (e) {
      return e;
    }, r.d = function (e, t, o) {
      r.o(e, t) || Object.defineProperty(e, t, { configurable: !1, enumerable: !0, get: o });
    }, r.n = function (e) {
      var t = e && e.__esModule ? function () {
        return e.default;
      } : function () {
        return e;
      };return r.d(t, "a", t), t;
    }, r.o = function (e, r) {
      return Object.prototype.hasOwnProperty.call(e, r);
    }, r.p = "", r(r.s = 13);
  }([function (r, t) {
    r.exports = e;
  }, function (e, t) {
    e.exports = r;
  }, function (e, r) {
    e.exports = t;
  }, function (e, r) {
    e.exports = o;
  },,,,,,,,,, function (e, r, t) {
    "use strict";
    function o(e) {
      return e && e.__esModule ? e : { default: e };
    }function i(e) {
      var r = "Icon Icon--" + y + " Icon--" + d.id + " " + (e.className || "");return c.default.createElement("div", { className: r, style: n({ width: b + "px", height: v + "px" }, e.style), onClick: e.onClick }, c.default.createElement("svg", { viewBox: d.viewBox, width: b, height: v, style: { display: "block" } }, c.default.createElement("use", { xlinkHref: "#" + d.id, style: { fill: "currentColor", color: e.fill } })));
    }Object.defineProperty(r, "__esModule", { value: !0 });var n = Object.assign || function (e) {
      for (var r = 1; r < arguments.length; r++) {
        var t = arguments[r];for (var o in t) {
          Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
        }
      }return e;
    },
        s = t(2),
        u = o(s),
        l = t(3),
        a = o(l),
        p = t(1),
        c = o(p),
        f = t(0),
        d = (o(f), new u.default({ id: "done_16", use: "done_16-usage", viewBox: "0 0 16 16", content: '<symbol viewBox="0 0 16 16" id="done_16"><path d="M5.9999939,10.2 L3.4999939,7.7 C3.11339457,7.31340068 2.48659322,7.31340068 2.0999939,7.7 L2.0999939,7.7 C1.71339457,8.08659932 1.71339457,8.71340068 2.0999939,9.1 L5.29288712,12.2928932 C5.68341141,12.6834175 6.31657639,12.6834175 6.70710068,12.2928932 L14.2999939,4.7 C14.6865932,4.31340068 14.6865932,3.68659932 14.2999939,3.3 L14.2999939,3.3 C13.9133946,2.91340068 13.2865932,2.91340068 12.8999939,3.3 L5.9999939,10.2 Z" /></symbol>' })),
        b = (a.default.add(d), d.viewBox.split(" ")[2]),
        v = d.viewBox.split(" ")[3],
        y = Math.max(b, v);i.displayName = "icon-" + d.id, r.default = i;
  }]);
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(10)(module)))

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

!function (e, r) {
  if ("object" == ( false ? "undefined" : _typeof(exports)) && "object" == ( false ? "undefined" : _typeof(module))) module.exports = r(__webpack_require__(1), __webpack_require__(0), __webpack_require__(6), __webpack_require__(7));else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(1), __webpack_require__(0), __webpack_require__(6), __webpack_require__(7)], __WEBPACK_AMD_DEFINE_FACTORY__ = (r),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else {
    var t = "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) ? r(require("prop-types"), require("react"), require("svg-baker-runtime/browser-symbol"), require("svg-sprite-loader/runtime/browser-sprite.build")) : r(e["prop-types"], e.react, e["svg-baker-runtime/browser-symbol"], e["svg-sprite-loader/runtime/browser-sprite.build"]);for (var o in t) {
      ("object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) ? exports : e)[o] = t[o];
    }
  }
}(undefined, function (e, r, t, o) {
  return function (e) {
    function r(o) {
      if (t[o]) return t[o].exports;var i = t[o] = { i: o, l: !1, exports: {} };return e[o].call(i.exports, i, i.exports, r), i.l = !0, i.exports;
    }var t = {};return r.m = e, r.c = t, r.i = function (e) {
      return e;
    }, r.d = function (e, t, o) {
      r.o(e, t) || Object.defineProperty(e, t, { configurable: !1, enumerable: !0, get: o });
    }, r.n = function (e) {
      var t = e && e.__esModule ? function () {
        return e.default;
      } : function () {
        return e;
      };return r.d(t, "a", t), t;
    }, r.o = function (e, r) {
      return Object.prototype.hasOwnProperty.call(e, r);
    }, r.p = "", r(r.s = 29);
  }({ 0: function _(r, t) {
      r.exports = e;
    }, 1: function _(e, t) {
      e.exports = r;
    }, 2: function _(e, r) {
      e.exports = t;
    }, 29: function _(e, r, t) {
      "use strict";
      function o(e) {
        return e && e.__esModule ? e : { default: e };
      }function i(e) {
        var r = "Icon Icon--" + y + " Icon--" + d.id + " " + (e.className || "");return p.default.createElement("div", { className: r, style: n({ width: b + "px", height: v + "px" }, e.style), onClick: e.onClick }, p.default.createElement("svg", { viewBox: d.viewBox, width: b, height: v, style: { display: "block" } }, p.default.createElement("use", { xlinkHref: "#" + d.id, style: { fill: "currentColor", color: e.fill } })));
      }Object.defineProperty(r, "__esModule", { value: !0 });var n = Object.assign || function (e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = arguments[r];for (var o in t) {
            Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
          }
        }return e;
      },
          s = t(2),
          u = o(s),
          l = t(3),
          a = o(l),
          c = t(1),
          p = o(c),
          f = t(0),
          d = (o(f), new u.default({ id: "search_16", use: "search_16-usage", viewBox: "0 0 16 16", content: '<symbol viewBox="0 0 16 16" id="search_16"><path d="M14.7430947,13.5740557 L10.9100947,9.73955572 C11.5971654,8.80245935 11.9652265,7.66953223 11.9600947,6.50755572 C11.946985,3.47441147 9.49371664,1.01757444 6.46059465,1.00005572 C5.00907481,0.993488427 3.61521603,1.56771229 2.58953064,2.59480646 C1.56384524,3.62190064 0.991535071,5.01654626 1.00009465,6.46805572 C1.01320436,9.50147611 3.46669652,11.958537 6.50009465,11.9760557 C7.66680484,11.9811124 8.80387114,11.6087552 9.74159465,10.9145557 L9.74559465,10.9115557 L13.5750947,14.7430557 C13.7821435,14.9602692 14.0906604,15.0481921 14.3811096,14.9727584 C14.6715587,14.8973248 14.898302,14.6703873 14.9734871,14.3798737 C15.0486722,14.0893602 14.9604853,13.7809186 14.7430947,13.5740557 L14.7430947,13.5740557 Z M6.49609465,10.8780557 C4.06950871,10.8640967 2.1067469,8.89865842 2.09609465,6.47205572 C2.08954524,5.31099854 2.54743104,4.19550612 3.36782487,3.37389147 C4.1882187,2.55227681 5.30302902,2.09273279 6.46409465,2.09755572 C8.89068059,2.1115147 10.8534424,4.07695301 10.8640947,6.50355572 C10.8706441,7.6646129 10.4127583,8.78010532 9.59236443,9.60171997 C8.7719706,10.4233346 7.65716028,10.8828786 6.49609465,10.8780557 Z" /></symbol>' })),
          b = (a.default.add(d), d.viewBox.split(" ")[2]),
          v = d.viewBox.split(" ")[3],
          y = Math.max(b, v);i.displayName = "icon-" + d.id, r.default = i;
    }, 3: function _(e, r) {
      e.exports = o;
    } });
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(10)(module)))

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

!function (e, r) {
  if ("object" == ( false ? "undefined" : _typeof(exports)) && "object" == ( false ? "undefined" : _typeof(module))) module.exports = r(__webpack_require__(1), __webpack_require__(0), __webpack_require__(6), __webpack_require__(7));else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(1), __webpack_require__(0), __webpack_require__(6), __webpack_require__(7)], __WEBPACK_AMD_DEFINE_FACTORY__ = (r),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else {
    var t = "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) ? r(require("prop-types"), require("react"), require("svg-baker-runtime/browser-symbol"), require("svg-sprite-loader/runtime/browser-sprite.build")) : r(e["prop-types"], e.react, e["svg-baker-runtime/browser-symbol"], e["svg-sprite-loader/runtime/browser-sprite.build"]);for (var o in t) {
      ("object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) ? exports : e)[o] = t[o];
    }
  }
}(undefined, function (e, r, t, o) {
  return function (e) {
    function r(o) {
      if (t[o]) return t[o].exports;var i = t[o] = { i: o, l: !1, exports: {} };return e[o].call(i.exports, i, i.exports, r), i.l = !0, i.exports;
    }var t = {};return r.m = e, r.c = t, r.i = function (e) {
      return e;
    }, r.d = function (e, t, o) {
      r.o(e, t) || Object.defineProperty(e, t, { configurable: !1, enumerable: !0, get: o });
    }, r.n = function (e) {
      var t = e && e.__esModule ? function () {
        return e.default;
      } : function () {
        return e;
      };return r.d(t, "a", t), t;
    }, r.o = function (e, r) {
      return Object.prototype.hasOwnProperty.call(e, r);
    }, r.p = "", r(r.s = 43);
  }({ 0: function _(r, t) {
      r.exports = e;
    }, 1: function _(e, t) {
      e.exports = r;
    }, 2: function _(e, r) {
      e.exports = t;
    }, 3: function _(e, r) {
      e.exports = o;
    }, 43: function _(e, r, t) {
      "use strict";
      function o(e) {
        return e && e.__esModule ? e : { default: e };
      }function i(e) {
        var r = "Icon Icon--" + y + " Icon--" + d.id + " " + (e.className || "");return p.default.createElement("div", { className: r, style: n({ width: b + "px", height: v + "px" }, e.style), onClick: e.onClick }, p.default.createElement("svg", { viewBox: d.viewBox, width: b, height: v, style: { display: "block" } }, p.default.createElement("use", { xlinkHref: "#" + d.id, style: { fill: "currentColor", color: e.fill } })));
      }Object.defineProperty(r, "__esModule", { value: !0 });var n = Object.assign || function (e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = arguments[r];for (var o in t) {
            Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
          }
        }return e;
      },
          s = t(2),
          u = o(s),
          l = t(3),
          a = o(l),
          c = t(1),
          p = o(c),
          f = t(0),
          d = (o(f), new u.default({ id: "back_24", use: "back_24-usage", viewBox: "0 0 24 24", content: '<symbol viewBox="0 0 24 24" id="back_24"><path d="M7.8,11 L12.7,6.1 C13.0865993,5.71340068 13.0865993,5.08659932 12.7,4.7 L12.7,4.7 C12.3134007,4.31340068 11.6865993,4.31340068 11.3,4.7 L4.70710678,11.2928932 C4.31658249,11.6834175 4.31658249,12.3165825 4.70710678,12.7071068 L11.3,19.3 C11.6865993,19.6865993 12.3134007,19.6865993 12.7,19.3 L12.7,19.3 C13.0865993,18.9134007 13.0865993,18.2865993 12.7,17.9 L7.8,13 L20,13 C20.5522847,13 21,12.5522847 21,12 L21,12 C21,11.4477153 20.5522847,11 20,11 L7.8,11 Z" /></symbol>' })),
          b = (a.default.add(d), d.viewBox.split(" ")[2]),
          v = d.viewBox.split(" ")[3],
          y = Math.max(b, v);i.displayName = "icon-" + d.id, r.default = i;
    } });
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(10)(module)))

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

!function (e, r) {
  if ("object" == ( false ? "undefined" : _typeof(exports)) && "object" == ( false ? "undefined" : _typeof(module))) module.exports = r(__webpack_require__(1), __webpack_require__(0), __webpack_require__(6), __webpack_require__(7));else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(1), __webpack_require__(0), __webpack_require__(6), __webpack_require__(7)], __WEBPACK_AMD_DEFINE_FACTORY__ = (r),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else {
    var t = "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) ? r(require("prop-types"), require("react"), require("svg-baker-runtime/browser-symbol"), require("svg-sprite-loader/runtime/browser-sprite.build")) : r(e["prop-types"], e.react, e["svg-baker-runtime/browser-symbol"], e["svg-sprite-loader/runtime/browser-sprite.build"]);for (var o in t) {
      ("object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) ? exports : e)[o] = t[o];
    }
  }
}(undefined, function (e, r, t, o) {
  return function (e) {
    function r(o) {
      if (t[o]) return t[o].exports;var i = t[o] = { i: o, l: !1, exports: {} };return e[o].call(i.exports, i, i.exports, r), i.l = !0, i.exports;
    }var t = {};return r.m = e, r.c = t, r.i = function (e) {
      return e;
    }, r.d = function (e, t, o) {
      r.o(e, t) || Object.defineProperty(e, t, { configurable: !1, enumerable: !0, get: o });
    }, r.n = function (e) {
      var t = e && e.__esModule ? function () {
        return e.default;
      } : function () {
        return e;
      };return r.d(t, "a", t), t;
    }, r.o = function (e, r) {
      return Object.prototype.hasOwnProperty.call(e, r);
    }, r.p = "", r(r.s = 47);
  }({ 0: function _(r, t) {
      r.exports = e;
    }, 1: function _(e, t) {
      e.exports = r;
    }, 2: function _(e, r) {
      e.exports = t;
    }, 3: function _(e, r) {
      e.exports = o;
    }, 47: function _(e, r, t) {
      "use strict";
      function o(e) {
        return e && e.__esModule ? e : { default: e };
      }function i(e) {
        var r = "Icon Icon--" + y + " Icon--" + d.id + " " + (e.className || "");return p.default.createElement("div", { className: r, style: n({ width: b + "px", height: v + "px" }, e.style), onClick: e.onClick }, p.default.createElement("svg", { viewBox: d.viewBox, width: b, height: v, style: { display: "block" } }, p.default.createElement("use", { xlinkHref: "#" + d.id, style: { fill: "currentColor", color: e.fill } })));
      }Object.defineProperty(r, "__esModule", { value: !0 });var n = Object.assign || function (e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = arguments[r];for (var o in t) {
            Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
          }
        }return e;
      },
          s = t(2),
          u = o(s),
          l = t(3),
          a = o(l),
          c = t(1),
          p = o(c),
          f = t(0),
          d = (o(f), new u.default({ id: "chevron_24", use: "chevron_24-usage", viewBox: "0 0 16 24", content: '<symbol viewBox="0 0 16 24" id="chevron_24"><path d="M4.70577316,7.70577316 C4.31598541,7.31598541 4.31811142,6.68188858 4.70607704,6.29392296 L4.79392296,6.20607704 C5.18387854,5.81612146 5.81350851,5.81350851 6.20798751,6.20798751 L11.2920125,11.2920125 C11.6830232,11.6830232 11.6864915,12.3135085 11.2920125,12.7079875 L6.20798751,17.7920125 C5.81697681,18.1830232 5.18188858,18.1818886 4.79392296,17.793923 L4.70607704,17.706077 C4.31612146,17.3161215 4.31277239,16.6872276 4.70577316,16.2942268 L9,12 L4.70577316,7.70577316 Z" /></symbol>' })),
          b = (a.default.add(d), d.viewBox.split(" ")[2]),
          v = d.viewBox.split(" ")[3],
          y = Math.max(b, v);i.displayName = "icon-" + d.id, r.default = i;
    } });
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(10)(module)))

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

!function (e, r) {
  if ("object" == ( false ? "undefined" : _typeof(exports)) && "object" == ( false ? "undefined" : _typeof(module))) module.exports = r(__webpack_require__(1), __webpack_require__(0), __webpack_require__(6), __webpack_require__(7));else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(1), __webpack_require__(0), __webpack_require__(6), __webpack_require__(7)], __WEBPACK_AMD_DEFINE_FACTORY__ = (r),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else {
    var t = "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) ? r(require("prop-types"), require("react"), require("svg-baker-runtime/browser-symbol"), require("svg-sprite-loader/runtime/browser-sprite.build")) : r(e["prop-types"], e.react, e["svg-baker-runtime/browser-symbol"], e["svg-sprite-loader/runtime/browser-sprite.build"]);for (var o in t) {
      ("object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) ? exports : e)[o] = t[o];
    }
  }
}(undefined, function (e, r, t, o) {
  return function (e) {
    function r(o) {
      if (t[o]) return t[o].exports;var i = t[o] = { i: o, l: !1, exports: {} };return e[o].call(i.exports, i, i.exports, r), i.l = !0, i.exports;
    }var t = {};return r.m = e, r.c = t, r.i = function (e) {
      return e;
    }, r.d = function (e, t, o) {
      r.o(e, t) || Object.defineProperty(e, t, { configurable: !1, enumerable: !0, get: o });
    }, r.n = function (e) {
      var t = e && e.__esModule ? function () {
        return e.default;
      } : function () {
        return e;
      };return r.d(t, "a", t), t;
    }, r.o = function (e, r) {
      return Object.prototype.hasOwnProperty.call(e, r);
    }, r.p = "", r(r.s = 59);
  }({ 0: function _(r, t) {
      r.exports = e;
    }, 1: function _(e, t) {
      e.exports = r;
    }, 2: function _(e, r) {
      e.exports = t;
    }, 3: function _(e, r) {
      e.exports = o;
    }, 59: function _(e, r, t) {
      "use strict";
      function o(e) {
        return e && e.__esModule ? e : { default: e };
      }function i(e) {
        var r = "Icon Icon--" + y + " Icon--" + f.id + " " + (e.className || "");return c.default.createElement("div", { className: r, style: n({ width: b + "px", height: v + "px" }, e.style), onClick: e.onClick }, c.default.createElement("svg", { viewBox: f.viewBox, width: b, height: v, style: { display: "block" } }, c.default.createElement("use", { xlinkHref: "#" + f.id, style: { fill: "currentColor", color: e.fill } })));
      }Object.defineProperty(r, "__esModule", { value: !0 });var n = Object.assign || function (e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = arguments[r];for (var o in t) {
            Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
          }
        }return e;
      },
          s = t(2),
          u = o(s),
          l = t(3),
          p = o(l),
          a = t(1),
          c = o(a),
          d = t(0),
          f = (o(d), new u.default({ id: "dropdown_24", use: "dropdown_24-usage", viewBox: "0 0 24 24", content: '<symbol viewBox="0 0 24 24" id="dropdown_24"><path d="M12,14.1982917 L6.6401844,9.73177872 C6.2159075,9.37821464 5.5853428,9.4355387 5.23177872,9.8598156 C4.87821464,10.2840925 4.9355387,10.9146572 5.3598156,11.2682213 L11.3598156,16.2682213 C11.7306616,16.5772596 12.2693384,16.5772596 12.6401844,16.2682213 L18.6401844,11.2682213 C19.0644613,10.9146572 19.1217854,10.2840925 18.7682213,9.8598156 C18.4146572,9.4355387 17.7840925,9.37821464 17.3598156,9.73177872 L12,14.1982917 Z" /></symbol>' })),
          b = (p.default.add(f), f.viewBox.split(" ")[2]),
          v = f.viewBox.split(" ")[3],
          y = Math.max(b, v);i.displayName = "icon-" + f.id, r.default = i;
    } });
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(10)(module)))

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _removeObjectKeys = __webpack_require__(5);

var _removeObjectKeys2 = _interopRequireDefault(_removeObjectKeys);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IosAlertInput = function (_Component) {
  _inherits(IosAlertInput, _Component);

  function IosAlertInput(props) {
    _classCallCheck(this, IosAlertInput);

    var _this = _possibleConstructorReturn(this, (IosAlertInput.__proto__ || Object.getPrototypeOf(IosAlertInput)).call(this, props));

    _this.onChange = function (e) {
      _this.setState({ value: e.target.value });
      if (_this.props.onChange) {
        _this.props.onChange(e);
      }
    };

    _this.state = {
      value: props.initialValue || ''
    };
    return _this;
  }

  _createClass(IosAlertInput, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: this.props.className },
        _react2.default.createElement('input', _extends({
          className: 'AlertInput__self'
        }, (0, _removeObjectKeys2.default)(this.props, ['className', 'initialValue', 'onChange']), {
          value: this.state.value,
          onChange: this.onChange
        }))
      );
    }
  }]);

  return IosAlertInput;
}(_react.Component);

IosAlertInput.propTypes = {
  type: _propTypes2.default.oneOf(['text', 'password', 'date', 'datetime-local', 'time', 'month', 'email', 'number', 'tel', 'url']),
  initialValue: _propTypes2.default.string,
  onChange: _propTypes2.default.func,
  style: _propTypes2.default.object,
  children: _propTypes2.default.node,
  className: _propTypes2.default.string
};
IosAlertInput.defaultProps = {
  type: 'text',
  initialValue: ''
};
exports.default = IosAlertInput;

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Tappable = __webpack_require__(8);

var _Tappable2 = _interopRequireDefault(_Tappable);

var _getClassName = __webpack_require__(2);

var _getClassName2 = _interopRequireDefault(_getClassName);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames2 = __webpack_require__(3);

var _classnames3 = _interopRequireDefault(_classnames2);

__webpack_require__(89);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var baseClassName = (0, _getClassName2.default)('ButtonNew');

var ButtonNew = function (_React$Component) {
  _inherits(ButtonNew, _React$Component);

  function ButtonNew() {
    _classCallCheck(this, ButtonNew);

    return _possibleConstructorReturn(this, (ButtonNew.__proto__ || Object.getPrototypeOf(ButtonNew)).apply(this, arguments));
  }

  _createClass(ButtonNew, [{
    key: 'render',
    value: function render() {
      var _classnames;

      var _props = this.props,
          className = _props.className,
          size = _props.size,
          level = _props.level,
          type = _props.type,
          stretched = _props.stretched,
          children = _props.children,
          before = _props.before,
          restProps = _objectWithoutProperties(_props, ['className', 'size', 'level', 'type', 'stretched', 'children', 'before']);

      switch (type) {
        case 'default':
          size = size || 'm';
          level = level || '1';
          stretched = stretched || false;
          break;
        case 'cell':
          level = level || 'primary';
      }

      var classNames = (0, _classnames3.default)(baseClassName, className, (_classnames = {}, _defineProperty(_classnames, 'ButtonNew--size-' + size, size), _defineProperty(_classnames, 'ButtonNew--level-' + level, level), _defineProperty(_classnames, 'ButtonNew--type-' + type, type), _defineProperty(_classnames, 'ButtonNew--stretched', stretched), _classnames));

      return _react2.default.createElement(
        _Tappable2.default,
        _extends({ className: classNames }, restProps),
        _react2.default.createElement(
          'div',
          { className: 'ButtonNew__in' },
          before && _react2.default.createElement(
            'div',
            { className: 'ButtonNew__before' },
            before
          ),
          children && _react2.default.createElement(
            'div',
            { className: 'ButtonNew__content' },
            children
          )
        )
      );
    }
  }]);

  return ButtonNew;
}(_react2.default.Component);

ButtonNew.propTypes = {
  level: _propTypes2.default.oneOf(['1', '2', '3', 'sell', 'buy', 'primary', 'danger']),
  size: _propTypes2.default.oneOf(['m', 'l', 'xl']),
  type: _propTypes2.default.oneOf(['default', 'cell']),
  stretched: _propTypes2.default.bool,

  children: _propTypes2.default.node,
  before: _propTypes2.default.node,
  className: _propTypes2.default.string
};
ButtonNew.defaultProps = {
  type: 'default'
};
exports.default = ButtonNew;

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(90);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(3);

var _classnames2 = _interopRequireDefault(_classnames);

var _removeObjectKeys = __webpack_require__(5);

var _removeObjectKeys2 = _interopRequireDefault(_removeObjectKeys);

var _Tappable = __webpack_require__(8);

var _Tappable2 = _interopRequireDefault(_Tappable);

var _getClassName = __webpack_require__(2);

var _getClassName2 = _interopRequireDefault(_getClassName);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var baseClassNames = (0, _getClassName2.default)('Button');

var ButtonOld = function (_Component) {
  _inherits(ButtonOld, _Component);

  function ButtonOld() {
    _classCallCheck(this, ButtonOld);

    return _possibleConstructorReturn(this, (ButtonOld.__proto__ || Object.getPrototypeOf(ButtonOld)).apply(this, arguments));
  }

  _createClass(ButtonOld, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          style = _props.style,
          children = _props.children,
          alignment = _props.alignment,
          appearance = _props.appearance,
          wide = _props.wide,
          className = _props.className,
          component = _props.component;

      var modifiers = {
        'Button--left': alignment === 'left',
        'Button--center': alignment === 'center',
        'Button--right': alignment === 'right',
        'Button--primary': appearance === 'primary',
        'Button--default': appearance === 'default',
        'Button--danger': appearance === 'danger',
        'Button--vk-wide': appearance === 'vk-wide',
        'Button--vk-wide-primary': appearance === 'vk-wide-primary',
        'Button--vk-rich': appearance === 'vk-rich',
        'Button--vk-primary': appearance === 'vk-primary',
        'Button--vk-secondary': appearance === 'vk-secondary',
        'Button--vk-tertiary': appearance === 'vk-tertiary',
        'Button--wide': wide
      };
      var nativeProps = (0, _removeObjectKeys2.default)(this.props, ['alignment', 'appearance', 'wide', 'className', 'component']);

      return _react2.default.createElement(
        _Tappable2.default,
        _extends({
          component: component,
          className: (0, _classnames2.default)(baseClassNames, className, modifiers),
          style: style
        }, nativeProps),
        children
      );
    }
  }]);

  return ButtonOld;
}(_react.Component);

ButtonOld.propTypes = {
  style: _propTypes2.default.object,
  alignment: _propTypes2.default.oneOf(['left', 'center', 'right']),
  appearance: _propTypes2.default.oneOf(['primary', 'default', 'danger', 'vk-wide-primary', 'vk-wide', 'vk-rich', 'vk-primary', 'vk-secondary', 'vk-tertiary']),
  wide: _propTypes2.default.bool,
  children: _propTypes2.default.node,
  className: _propTypes2.default.string,
  component: _propTypes2.default.string
};
ButtonOld.defaultProps = {
  style: {},
  alignment: 'left',
  appearance: 'default',
  type: 'default',
  wide: true,
  children: '',
  component: 'button'
};
exports.default = ButtonOld;

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(97);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _getClassName = __webpack_require__(2);

var _getClassName2 = _interopRequireDefault(_getClassName);

var _classnames2 = __webpack_require__(3);

var _classnames3 = _interopRequireDefault(_classnames2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FormLayoutNew = function (_React$Component) {
  _inherits(FormLayoutNew, _React$Component);

  function FormLayoutNew() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, FormLayoutNew);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = FormLayoutNew.__proto__ || Object.getPrototypeOf(FormLayoutNew)).call.apply(_ref, [this].concat(args))), _this), _this.baseClass = 'FormLayoutNew', _this.onSubmit = function (e) {
      if (!_this.props.allowSubmit) {
        e.preventDefault();
      } else {
        _this.props.onSubmit && _this.props.onSubmit(e);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(FormLayoutNew, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          children = _props.children,
          tagName = _props.tagName,
          status = _props.status,
          allowSubmit = _props.allowSubmit,
          onSubmit = _props.onSubmit,
          className = _props.className,
          top = _props.top,
          bottom = _props.bottom,
          restProps = _objectWithoutProperties(_props, ['children', 'tagName', 'status', 'allowSubmit', 'onSubmit', 'className', 'top', 'bottom']);

      var arrayChildren = Array.isArray(children) ? children : [children];
      var TagName = tagName;

      return _react2.default.createElement(
        TagName,
        _extends({
          className: (0, _classnames3.default)((0, _getClassName2.default)(this.baseClass), _defineProperty({}, this.baseClass + '--s-' + status, true), className),
          onSubmit: this.onSubmit
        }, restProps),
        _react2.default.createElement(
          'div',
          { className: this.baseClass + '__container' },
          top && _react2.default.createElement(
            'div',
            { className: this.baseClass + '__addon ' + this.baseClass + '__addon--top' },
            top
          ),
          arrayChildren.map(function (field, i) {
            return _react2.default.createElement(
              'label',
              { className: _this2.baseClass + '__row', key: field.key || 'row-' + i },
              _react2.default.createElement(
                'div',
                { className: _this2.baseClass + '__field' },
                _react2.default.cloneElement(field, { v: 'new' })
              )
            );
          }),
          bottom && _react2.default.createElement(
            'div',
            { className: this.baseClass + '__addon ' + this.baseClass + '__addon--bottom' },
            bottom
          )
        ),
        TagName === 'form' && allowSubmit && _react2.default.createElement('input', { type: 'submit', style: { position: 'absolute', visibility: 'hidden' } })
      );
    }
  }]);

  return FormLayoutNew;
}(_react2.default.Component);

FormLayoutNew.propTypes = {
  children: _propTypes2.default.node,
  style: _propTypes2.default.object,
  className: _propTypes2.default.string,
  tagName: _propTypes2.default.string,
  allowSubmit: _propTypes2.default.bool,
  onSubmit: _propTypes2.default.func,
  top: _propTypes2.default.node,
  bottom: _propTypes2.default.node,
  status: _propTypes2.default.oneOf(['default', 'error', 'verified'])
};
FormLayoutNew.defaultProps = {
  allowSubmit: true,
  status: 'default',
  tagName: 'form'
};
exports.default = FormLayoutNew;

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(98);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _getClassName = __webpack_require__(2);

var _getClassName2 = _interopRequireDefault(_getClassName);

var _classnames2 = __webpack_require__(3);

var _classnames3 = _interopRequireDefault(_classnames2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FormLayoutOld = function (_React$Component) {
  _inherits(FormLayoutOld, _React$Component);

  function FormLayoutOld() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, FormLayoutOld);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = FormLayoutOld.__proto__ || Object.getPrototypeOf(FormLayoutOld)).call.apply(_ref, [this].concat(args))), _this), _this.baseClass = 'FormLayout', _this.onSubmit = function (e) {
      if (!_this.props.allowSubmit) {
        e.preventDefault();
      } else {
        _this.props.onSubmit && _this.props.onSubmit(e);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(FormLayoutOld, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          children = _props.children,
          tagName = _props.tagName,
          mod = _props.mod,
          allowSubmit = _props.allowSubmit,
          onSubmit = _props.onSubmit,
          className = _props.className,
          restProps = _objectWithoutProperties(_props, ['children', 'tagName', 'mod', 'allowSubmit', 'onSubmit', 'className']);

      var arrayChildren = Array.isArray(children) ? children : [children];
      var TagName = tagName;

      return _react2.default.createElement(
        TagName,
        _extends({
          className: (0, _classnames3.default)((0, _getClassName2.default)(this.baseClass), _defineProperty({}, this.baseClass + '--web', mod === 'web'), className),
          onSubmit: this.onSubmit
        }, restProps),
        _react2.default.createElement(
          'div',
          { className: this.baseClass + '__container' },
          arrayChildren.map(function (field, i) {
            return _react2.default.createElement(
              'label',
              { className: _this2.baseClass + '__row', key: field.key || 'row-' + i },
              !field.props.label && _react2.default.createElement('div', { className: _this2.baseClass + '__separator' }),
              !!field.props.label && _react2.default.createElement(
                'div',
                { className: _this2.baseClass + '__label' },
                _react2.default.createElement(
                  'div',
                  { className: _this2.baseClass + '__label-in' },
                  field.props.label
                )
              ),
              _react2.default.createElement(
                'div',
                { className: _this2.baseClass + '__field' },
                field
              )
            );
          })
        ),
        TagName === 'form' && allowSubmit && _react2.default.createElement('input', { type: 'submit', style: { position: 'absolute', visibility: 'hidden' } })
      );
    }
  }]);

  return FormLayoutOld;
}(_react2.default.Component);

FormLayoutOld.propTypes = {
  children: _propTypes2.default.node,
  style: _propTypes2.default.object,
  className: _propTypes2.default.string,
  tagName: _propTypes2.default.string,
  mod: _propTypes2.default.string,
  allowSubmit: _propTypes2.default.bool,
  onSubmit: _propTypes2.default.func
};
FormLayoutOld.defaultProps = {
  allowSubmit: true,
  tagName: 'form'
};
exports.default = FormLayoutOld;

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _getClassName = __webpack_require__(2);

var _getClassName2 = _interopRequireDefault(_getClassName);

var _classnames = __webpack_require__(3);

var _classnames2 = _interopRequireDefault(_classnames);

__webpack_require__(117);

var _HeaderButton = __webpack_require__(22);

var _HeaderButton2 = _interopRequireDefault(_HeaderButton);

var _back = __webpack_require__(70);

var _back2 = _interopRequireDefault(_back);

var _cancel = __webpack_require__(33);

var _cancel2 = _interopRequireDefault(_cancel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var baseClassName = (0, _getClassName2.default)('Search');

var SearchAndroid = function (_React$Component) {
  _inherits(SearchAndroid, _React$Component);

  function SearchAndroid(props) {
    _classCallCheck(this, SearchAndroid);

    var _this = _possibleConstructorReturn(this, (SearchAndroid.__proto__ || Object.getPrototypeOf(SearchAndroid)).call(this, props));

    _this.onCancel = function () {
      if (_this.isControlledOutside) {
        _this.props.onChange('');
      } else {
        _this.setState({ value: '' });
      }
      _this.inputEl.focus();
    };

    _this.onChange = function (e) {
      if (_this.isControlledOutside) {
        _this.props.onChange(e.target.value, e);
      } else {
        _this.setState({ value: e.target.value });
      }
    };

    _this.onFocus = function (e) {
      _this.props.onFocus && _this.props.onFocus(e);
    };

    _this.onBlur = function (e) {
      _this.props.onBlur && _this.props.onBlur(e);
    };

    _this.onClose = function () {
      _this.props.onClose && _this.props.onClose();
    };

    var state = {};

    if (props.hasOwnProperty('value')) {
      _this.isControlledOutside = true;
    } else {
      state.value = props.defaultValue || '';
    }

    _this.state = state;
    return _this;
  }

  _createClass(SearchAndroid, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.inputEl.focus();
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var className = (0, _classnames2.default)(baseClassName, {
        'Search--focused': this.state.focused,
        'Search--has-value': !!this.value
      }, this.props.className);

      return _react2.default.createElement(
        'div',
        { className: className },
        _react2.default.createElement(
          'div',
          { className: 'Search__before' },
          _react2.default.createElement(
            _HeaderButton2.default,
            { onClick: this.onClose },
            _react2.default.createElement(_back2.default, null)
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'Search__control' },
          _react2.default.createElement('input', {
            className: 'Search__input',
            placeholder: this.props.placeholder,
            ref: function ref(el) {
              return _this2.inputEl = el;
            },
            value: this.value,
            onChange: this.onChange,
            onFocus: this.onFocus,
            onBlur: this.onBlur
          })
        ),
        _react2.default.createElement(
          'div',
          { className: 'Search__after' },
          _react2.default.createElement(
            _HeaderButton2.default,
            { onClick: this.onCancel },
            _react2.default.createElement(_cancel2.default, null)
          )
        )
      );
    }
  }, {
    key: 'value',
    get: function get() {
      return this.isControlledOutside ? this.props.value : this.state.value;
    }
  }]);

  return SearchAndroid;
}(_react2.default.Component);

SearchAndroid.propTypes = {
  className: _propTypes2.default.string,
  defaultValue: _propTypes2.default.string,
  value: _propTypes2.default.string,
  onChange: _propTypes2.default.func,
  onFocus: _propTypes2.default.func,
  onBlur: _propTypes2.default.func,
  onClose: _propTypes2.default.func,
  placeholder: _propTypes2.default.node
};
SearchAndroid.defaultProps = {
  placeholder: 'Поиск'
};
exports.default = SearchAndroid;

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _getClassName = __webpack_require__(2);

var _getClassName2 = _interopRequireDefault(_getClassName);

var _classnames2 = __webpack_require__(3);

var _classnames3 = _interopRequireDefault(_classnames2);

__webpack_require__(118);

var _search = __webpack_require__(69);

var _search2 = _interopRequireDefault(_search);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var baseClassName = (0, _getClassName2.default)('Search');

var SearchIOS = function (_React$Component) {
  _inherits(SearchIOS, _React$Component);

  function SearchIOS(props) {
    _classCallCheck(this, SearchIOS);

    var _this = _possibleConstructorReturn(this, (SearchIOS.__proto__ || Object.getPrototypeOf(SearchIOS)).call(this, props));

    _this.calcSizes = function () {
      _this.setState({
        afterWidth: _this.afterEl.offsetWidth,
        placeholderWidth: _this.placeholderEl.offsetWidth,
        controlWidth: _this.controlEl.offsetWidth,
        placeholderOffset: (_this.controlEl.offsetWidth - (_this.state.showAfter ? _this.afterEl.offsetWidth + 12 : 0) - _this.placeholderEl.offsetWidth) / 2
      });
    };

    _this.onFocus = function (e) {
      _this.setState({ focused: true, showAfter: true }, function () {
        return _this.props.onFocus && _this.props.onFocus(e);
      });
    };

    _this.onBlur = function (e) {
      _this.setState({ focused: false, showAfter: _this.value || _this.props.theme === 'header' }, function () {
        return _this.props.onBlur && _this.props.onBlur(e);
      });
    };

    _this.onChange = function (e) {
      if (_this.isControlledOutside) {
        _this.props.onChange(e.target.value, e);
      } else {
        _this.setState({ value: e.target.value });
      }
    };

    _this.onCancel = function () {
      if (_this.isControlledOutside) {
        _this.props.onChange('');
      } else {
        _this.setState({ value: '' });
      }
      _this.setState({ showAfter: false });
    };

    var state = {
      showAfter: props.theme === 'header',
      focused: false,
      placeholderOffset: null,
      afterWidth: null
    };

    if (props.hasOwnProperty('value')) {
      _this.isControlledOutside = true;
    } else {
      state.value = props.defaultValue || '';
    }

    _this.state = state;
    return _this;
  }

  _createClass(SearchIOS, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.calcSizes();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      if (this.state.afterWidth !== this.afterEl.offsetWidth) {
        this.calcSizes();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _classnames,
          _this2 = this;

      var _props = this.props,
          className = _props.className,
          theme = _props.theme,
          onFocus = _props.onFocus,
          onBlur = _props.onBlur,
          onChange = _props.onChange,
          defaultValue = _props.defaultValue,
          value = _props.value,
          placeholder = _props.placeholder,
          before = _props.before,
          after = _props.after,
          inputProps = _objectWithoutProperties(_props, ['className', 'theme', 'onFocus', 'onBlur', 'onChange', 'defaultValue', 'value', 'placeholder', 'before', 'after']);

      return _react2.default.createElement(
        'div',
        { className: (0, _classnames3.default)(baseClassName, (_classnames = {}, _defineProperty(_classnames, 'Search--' + theme, true), _defineProperty(_classnames, 'Search--focused', this.state.focused), _defineProperty(_classnames, 'Search--has-value', !!this.value), _classnames), className) },
        before && _react2.default.createElement(
          'div',
          { className: 'Search__before' },
          before
        ),
        _react2.default.createElement(
          'div',
          {
            className: 'Search__control',
            ref: function ref(el) {
              return _this2.controlEl = el;
            },
            style: {
              width: this.state.controlWidth - (this.state.showAfter ? this.state.afterWidth + 12 : 0) + 'px'
            }
          },
          _react2.default.createElement(
            'div',
            {
              className: 'Search__placeholder',
              onClick: function onClick() {
                return _this2.inputEl.focus();
              },
              ref: function ref(el) {
                return _this2.placeholderEl = el;
              },
              style: {
                transform: 'translateX(' + (this.state.focused || this.value ? 0 : this.state.placeholderOffset + 'px') + ')'
              }
            },
            _react2.default.createElement(_search2.default, null),
            !this.value && _react2.default.createElement('div', { className: 'Search__placeholder-text', dangerouslySetInnerHTML: { __html: placeholder } })
          ),
          _react2.default.createElement('input', _extends({
            ref: function ref(el) {
              return _this2.inputEl = el;
            },
            type: 'text',
            className: 'Search__input',
            onFocus: this.onFocus,
            onBlur: this.onBlur,
            onChange: this.onChange,
            value: this.value
          }, inputProps))
        ),
        _react2.default.createElement(
          'div',
          {
            ref: function ref(el) {
              return _this2.afterEl = el;
            },
            className: 'Search__after',
            onClick: this.onCancel,
            style: { marginLeft: 12 }
          },
          after
        )
      );
    }
  }, {
    key: 'value',
    get: function get() {
      return this.isControlledOutside ? this.props.value : this.state.value;
    }
  }]);

  return SearchIOS;
}(_react2.default.Component);

SearchIOS.propTypes = {
  className: _propTypes2.default.string,
  before: _propTypes2.default.node,
  after: _propTypes2.default.node,
  defaultValue: _propTypes2.default.string,
  value: _propTypes2.default.string,
  onChange: _propTypes2.default.func,
  onFocus: _propTypes2.default.func,
  onBlur: _propTypes2.default.func,
  placeholder: _propTypes2.default.node,
  theme: _propTypes2.default.oneOf(['header', 'default'])
};
SearchIOS.defaultProps = {
  after: 'Отменить',
  theme: 'default',
  placeholder: 'Поиск'
};
exports.default = SearchIOS;

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _keyframes = __webpack_require__(29);

var _keyframes2 = _interopRequireDefault(_keyframes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AndroidSpinner = function (_Component) {
  _inherits(AndroidSpinner, _Component);

  function AndroidSpinner(props) {
    _classCallCheck(this, AndroidSpinner);

    var _this = _possibleConstructorReturn(this, (AndroidSpinner.__proto__ || Object.getPrototypeOf(AndroidSpinner)).call(this, props));

    var id = Math.round(Math.random() * 1e6).toString(16);
    var offset = Math.round(Math.PI * props.size);
    var c = 0.5 * props.size;

    _this.state = {
      c: c,
      id: id,
      offset: offset,
      animation: (0, _keyframes2.default)('dash' + id, {
        '0%': {
          'stroke-dashoffset': offset
        },
        '50%': {
          'stroke-dashoffset': Math.round(0.25 * offset),
          'transform': 'rotate(135deg)'
        },
        '100%': {
          'stroke-dashoffset': offset,
          'transform': 'rotate(360deg)'
        }
      })
    };
    return _this;
  }

  _createClass(AndroidSpinner, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          color = _props.color,
          size = _props.size,
          on = _props.on,
          progress = _props.progress,
          duration = _props.duration,
          strokeWidth = _props.strokeWidth;
      var _state = this.state,
          id = _state.id,
          offset = _state.offset,
          animation = _state.animation;


      var dashoffset = offset;
      var transform = '';

      if (!on) {
        dashoffset = Math.abs(0.02 * (progress - 50) * 0.75 * offset) + 0.25 * offset;

        if (progress <= 50) {
          transform = 'rotate(' + Math.round(progress * 135 / 50) + 'deg)';
        } else {
          transform = 'rotate(' + (135 + Math.round((progress - 50) * 360 / 50)) + 'deg)';
        }
      }

      return _react2.default.createElement(
        'g',
        {
          style: {
            width: size,
            height: size,
            transformOrigin: 0.5 * size + 'px ' + 0.5 * size + 'px',
            transform: transform
          }
        },
        _react2.default.createElement('style', { dangerouslySetInnerHTML: { __html: animation } }),
        _react2.default.createElement('circle', {
          className: 'Spinner__path',
          fill: 'none',
          stroke: color,
          strokeDasharray: offset,
          strokeDashoffset: dashoffset,
          strokeWidth: strokeWidth,
          style: {
            animationName: on ? 'dash' + id : 'none',
            animationTimingFunction: 'ease-in-out',
            animationDuration: duration + 's',
            animationIterationCount: 'infinite'
          },
          cx: 0.5 * size,
          cy: 0.5 * size,
          r: 0.5 * size - 0.5 * strokeWidth
        })
      );
    }
  }]);

  return AndroidSpinner;
}(_react.Component);

AndroidSpinner.propTypes = {
  color: _propTypes2.default.string,
  size: _propTypes2.default.number,
  strokeWidth: _propTypes2.default.number,
  duration: _propTypes2.default.number,
  on: _propTypes2.default.bool,
  progress: _propTypes2.default.number
};
AndroidSpinner.defaultProps = {
  color: '#5181b8',
  size: 38,
  strokeWidth: 4,
  duration: 1.4,
  on: true,
  progress: null
};
exports.default = AndroidSpinner;

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IOS_PART_HEIGHT = 0.275;

var IosSpinner = function (_Component) {
  _inherits(IosSpinner, _Component);

  function IosSpinner(props) {
    _classCallCheck(this, IosSpinner);

    var _this = _possibleConstructorReturn(this, (IosSpinner.__proto__ || Object.getPrototypeOf(IosSpinner)).call(this, props));

    var c = 0.5 * props.size;
    var r = Math.max(Math.floor(props.size * 0.075), 2);
    var ty = Math.ceil(-0.5 * (1 - IOS_PART_HEIGHT) * props.size);

    var iosStyles = [];

    for (var i = 0; i < 12; i++) {
      iosStyles.push({
        transform: 'rotate(' + i * 30 + ', ' + c + ', ' + c + ') translate(0 ' + ty + ')',
        rx: r,
        ry: r,
        style: {
          fill: props.color,
          animationDelay: Math.round(props.duration / 12 * 100 * (-11 + i)) / 100 + 's'
        }
      });
    }

    _this.state = { iosStyles: iosStyles };
    return _this;
  }

  _createClass(IosSpinner, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          on = _props.on,
          progress = _props.progress;
      var iosStyles = this.state.iosStyles;


      var parts = iosStyles;

      if (!on) {
        parts = iosStyles.slice(0, Math.round(progress / (100 / 12)));
      }

      return _react2.default.createElement(
        'g',
        null,
        parts.map(function (item, i) {
          return _react2.default.createElement('rect', _extends({ className: 'Spinner__part' }, item, { key: 'spinner-part-' + i }));
        })
      );
    }
  }]);

  return IosSpinner;
}(_react.Component);

IosSpinner.propTypes = {
  color: _propTypes2.default.string,
  size: _propTypes2.default.number,
  duration: _propTypes2.default.number,
  on: _propTypes2.default.bool,
  progress: _propTypes2.default.number
};
IosSpinner.defaultProps = {
  color: '#262626',
  size: 20,
  duration: 1.4,
  on: true,
  progress: null
};
exports.default = IosSpinner;

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.v = exports.fontFamilies = exports.colors = exports.isWebView = exports.requestAnimationFrame = exports.wrapTextNode = exports.getClassName = exports.querystring = exports.request = exports.removeObjectKeys = exports.IOS = exports.ANDROID = exports.platform = exports.getOffsetRect = exports.keyframes = exports.classnames = exports.ConfigProvider = exports.Touch = exports.Tappable = exports.Flex = exports.Div = exports.Text = exports.Select = exports.Radio = exports.Textarea = exports.RangeSlider = exports.Slider = exports.Input = exports.File = exports.Switch = exports.FormLayout = exports.Link = exports.Spinner = exports.FixedTabs = exports.TabsItem = exports.Tabs = exports.Search = exports.Progress = exports.Avatar = exports.Gallery = exports.Entity = exports.InfoRow = exports.ListItem = exports.List = exports.Pane = exports.Group = exports.Header = exports.Button = exports.ScreenSpinner = exports.ActionSheetItem = exports.ActionSheet = exports.AlertInput = exports.Alert = exports.NativePopouts = exports.FixedLayout = exports.HeaderButton = exports.ScrollView = exports.View = exports.Root = undefined;

var _Root = __webpack_require__(54);

Object.defineProperty(exports, 'Root', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Root).default;
  }
});

var _View = __webpack_require__(27);

Object.defineProperty(exports, 'View', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_View).default;
  }
});

var _ScrollView = __webpack_require__(56);

Object.defineProperty(exports, 'ScrollView', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_ScrollView).default;
  }
});

var _HeaderButton = __webpack_require__(22);

Object.defineProperty(exports, 'HeaderButton', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_HeaderButton).default;
  }
});

var _FixedLayout = __webpack_require__(20);

Object.defineProperty(exports, 'FixedLayout', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_FixedLayout).default;
  }
});

var _NativePopouts = __webpack_require__(49);

Object.defineProperty(exports, 'NativePopouts', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_NativePopouts).default;
  }
});

var _Alert = __webpack_require__(16);

Object.defineProperty(exports, 'Alert', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Alert).default;
  }
});

var _AlertInput = __webpack_require__(36);

Object.defineProperty(exports, 'AlertInput', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_AlertInput).default;
  }
});

var _ActionSheet = __webpack_require__(15);

Object.defineProperty(exports, 'ActionSheet', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_ActionSheet).default;
  }
});

var _ActionSheetItem = __webpack_require__(12);

Object.defineProperty(exports, 'ActionSheetItem', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_ActionSheetItem).default;
  }
});

var _ScreenSpinner = __webpack_require__(55);

Object.defineProperty(exports, 'ScreenSpinner', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_ScreenSpinner).default;
  }
});

var _Button = __webpack_require__(18);

Object.defineProperty(exports, 'Button', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Button).default;
  }
});

var _Header = __webpack_require__(44);

Object.defineProperty(exports, 'Header', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Header).default;
  }
});

var _Group = __webpack_require__(43);

Object.defineProperty(exports, 'Group', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Group).default;
  }
});

var _Pane = __webpack_require__(50);

Object.defineProperty(exports, 'Pane', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Pane).default;
  }
});

var _List = __webpack_require__(47);

Object.defineProperty(exports, 'List', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_List).default;
  }
});

var _ListItem = __webpack_require__(48);

Object.defineProperty(exports, 'ListItem', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_ListItem).default;
  }
});

var _InfoRow = __webpack_require__(45);

Object.defineProperty(exports, 'InfoRow', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_InfoRow).default;
  }
});

var _Entity = __webpack_require__(19);

Object.defineProperty(exports, 'Entity', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Entity).default;
  }
});

var _Gallery = __webpack_require__(42);

Object.defineProperty(exports, 'Gallery', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Gallery).default;
  }
});

var _Avatar = __webpack_require__(17);

Object.defineProperty(exports, 'Avatar', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Avatar).default;
  }
});

var _Progress = __webpack_require__(51);

Object.defineProperty(exports, 'Progress', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Progress).default;
  }
});

var _Search = __webpack_require__(57);

Object.defineProperty(exports, 'Search', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Search).default;
  }
});

var _Tabs = __webpack_require__(26);

Object.defineProperty(exports, 'Tabs', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Tabs).default;
  }
});

var _TabsItem = __webpack_require__(60);

Object.defineProperty(exports, 'TabsItem', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_TabsItem).default;
  }
});

var _FixedTabs = __webpack_require__(40);

Object.defineProperty(exports, 'FixedTabs', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_FixedTabs).default;
  }
});

var _Spinner = __webpack_require__(25);

Object.defineProperty(exports, 'Spinner', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Spinner).default;
  }
});

var _Link = __webpack_require__(46);

Object.defineProperty(exports, 'Link', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Link).default;
  }
});

var _FormLayout = __webpack_require__(21);

Object.defineProperty(exports, 'FormLayout', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_FormLayout).default;
  }
});

var _Switch = __webpack_require__(59);

Object.defineProperty(exports, 'Switch', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Switch).default;
  }
});

var _File = __webpack_require__(39);

Object.defineProperty(exports, 'File', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_File).default;
  }
});

var _Input = __webpack_require__(23);

Object.defineProperty(exports, 'Input', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Input).default;
  }
});

var _Slider = __webpack_require__(24);

Object.defineProperty(exports, 'Slider', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Slider).default;
  }
});

var _RangeSlider = __webpack_require__(53);

Object.defineProperty(exports, 'RangeSlider', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_RangeSlider).default;
  }
});

var _Textarea = __webpack_require__(62);

Object.defineProperty(exports, 'Textarea', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Textarea).default;
  }
});

var _Radio = __webpack_require__(52);

Object.defineProperty(exports, 'Radio', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Radio).default;
  }
});

var _Select = __webpack_require__(58);

Object.defineProperty(exports, 'Select', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Select).default;
  }
});

var _Text = __webpack_require__(61);

Object.defineProperty(exports, 'Text', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Text).default;
  }
});

var _Div = __webpack_require__(38);

Object.defineProperty(exports, 'Div', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Div).default;
  }
});

var _Flex = __webpack_require__(41);

Object.defineProperty(exports, 'Flex', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Flex).default;
  }
});

var _Tappable = __webpack_require__(8);

Object.defineProperty(exports, 'Tappable', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Tappable).default;
  }
});

var _Touch = __webpack_require__(9);

Object.defineProperty(exports, 'Touch', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Touch).default;
  }
});

var _ConfigProvider = __webpack_require__(37);

Object.defineProperty(exports, 'ConfigProvider', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_ConfigProvider).default;
  }
});

var _classnames = __webpack_require__(3);

Object.defineProperty(exports, 'classnames', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_classnames).default;
  }
});

var _keyframes = __webpack_require__(29);

Object.defineProperty(exports, 'keyframes', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_keyframes).default;
  }
});

var _offset = __webpack_require__(30);

Object.defineProperty(exports, 'getOffsetRect', {
  enumerable: true,
  get: function get() {
    return _offset.getOffsetRect;
  }
});

var _platform = __webpack_require__(4);

Object.defineProperty(exports, 'platform', {
  enumerable: true,
  get: function get() {
    return _platform.platform;
  }
});
Object.defineProperty(exports, 'ANDROID', {
  enumerable: true,
  get: function get() {
    return _platform.ANDROID;
  }
});
Object.defineProperty(exports, 'IOS', {
  enumerable: true,
  get: function get() {
    return _platform.IOS;
  }
});

var _removeObjectKeys = __webpack_require__(5);

Object.defineProperty(exports, 'removeObjectKeys', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_removeObjectKeys).default;
  }
});

var _request = __webpack_require__(66);

Object.defineProperty(exports, 'request', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_request).default;
  }
});

var _querystring = __webpack_require__(31);

Object.defineProperty(exports, 'querystring', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_querystring).default;
  }
});

var _getClassName = __webpack_require__(2);

Object.defineProperty(exports, 'getClassName', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_getClassName).default;
  }
});

var _wrapTextNode = __webpack_require__(64);

Object.defineProperty(exports, 'wrapTextNode', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_wrapTextNode).default;
  }
});

var _requestAnimationFrame = __webpack_require__(11);

Object.defineProperty(exports, 'requestAnimationFrame', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_requestAnimationFrame).default;
  }
});

var _webview = __webpack_require__(32);

Object.defineProperty(exports, 'isWebView', {
  enumerable: true,
  get: function get() {
    return _webview.isWebView;
  }
});

__webpack_require__(65);

var _colors = __webpack_require__(28);

var _fonts = __webpack_require__(63);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.colors = _colors.values;
exports.fontFamilies = _fonts.families;
var v = exports.v = process.env.VKUI_VERSION;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(67)))

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = animate;

var _requestAnimationFrame = __webpack_require__(11);

var _requestAnimationFrame2 = _interopRequireDefault(_requestAnimationFrame);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function animate(options) {
  if (typeof window === 'undefined') {
    return;
  }

  var start = window.performance.now();

  (0, _requestAnimationFrame2.default)(function animate(time) {
    var timeFraction = (time - start) / options.duration;

    if (timeFraction > 1) {
      timeFraction = 1;
    }

    var progress = options.timing(timeFraction);

    options.draw(progress);

    if (timeFraction < 1) {
      (0, _requestAnimationFrame2.default)(animate);
    }
  });
}

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.brToNl = brToNl;
function brToNl() {
  var str = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

  var regex = /<br\s*\/?>/gi;

  return str.replace(regex, '\n');
}

/***/ }),
/* 85 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 86 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 87 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 88 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 89 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 90 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 91 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 92 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 93 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 94 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 95 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 96 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 97 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 98 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 99 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 100 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 101 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 102 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 103 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 104 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 105 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 106 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 107 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 108 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 109 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 110 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 111 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 112 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 113 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 114 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 115 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 116 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 117 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 118 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 119 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 120 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 121 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 122 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 123 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 124 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 125 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 126 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 127 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 128 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 129 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 130 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);
});
//# sourceMappingURL=vkui.js.map