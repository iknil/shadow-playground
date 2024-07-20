var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
  get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
}) : x)(function(x) {
  if (typeof require !== "undefined")
    return require.apply(this, arguments);
  throw new Error('Dynamic require of "' + x + '" is not supported');
});
var __commonJS = (cb, mod) => function __require2() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};

// ../../../node_modules/js-middleware/dist/middleware.js
var require_middleware = __commonJS({
  "../../../node_modules/js-middleware/dist/middleware.js"(exports, module) {
    (function(f) {
      if (typeof exports === "object" && typeof module !== "undefined") {
        module.exports = f();
      } else if (typeof define === "function" && define.amd) {
        define([], f);
      } else {
        var g;
        if (typeof window !== "undefined") {
          g = window;
        } else if (typeof global !== "undefined") {
          g = global;
        } else if (typeof self !== "undefined") {
          g = self;
        } else {
          g = this;
        }
        g.jsMiddleware = f();
      }
    })(function() {
      var define2, module2, exports2;
      return function e(t, n, r) {
        function s(o2, u) {
          if (!n[o2]) {
            if (!t[o2]) {
              var a = typeof __require == "function" && __require;
              if (!u && a)
                return a(o2, true);
              if (i)
                return i(o2, true);
              var f = new Error("Cannot find module '" + o2 + "'");
              throw f.code = "MODULE_NOT_FOUND", f;
            }
            var l = n[o2] = { exports: {} };
            t[o2][0].call(l.exports, function(e2) {
              var n2 = t[o2][1][e2];
              return s(n2 ? n2 : e2);
            }, l, l.exports, e, t, n, r);
          }
          return n[o2].exports;
        }
        var i = typeof __require == "function" && __require;
        for (var o = 0; o < r.length; o++)
          s(r[o]);
        return s;
      }({ 1: [function(_dereq_, module3, exports3) {
        "use strict";
        Object.defineProperty(exports3, "__esModule", {
          value: true
        });
        var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
          return typeof obj;
        } : function(obj) {
          return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
        };
        var _createClass = function() {
          function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
              var descriptor = props[i];
              descriptor.enumerable = descriptor.enumerable || false;
              descriptor.configurable = true;
              if ("value" in descriptor)
                descriptor.writable = true;
              Object.defineProperty(target, descriptor.key, descriptor);
            }
          }
          return function(Constructor, protoProps, staticProps) {
            if (protoProps)
              defineProperties(Constructor.prototype, protoProps);
            if (staticProps)
              defineProperties(Constructor, staticProps);
            return Constructor;
          };
        }();
        exports3.compose = compose;
        function _toConsumableArray(arr) {
          if (Array.isArray(arr)) {
            for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
              arr2[i] = arr[i];
            }
            return arr2;
          } else {
            return Array.from(arr);
          }
        }
        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }
        var middlewareManagerHash = [];
        function compose() {
          for (var _len = arguments.length, funcs = Array(_len), _key = 0; _key < _len; _key++) {
            funcs[_key] = arguments[_key];
          }
          if (funcs.length === 0) {
            return function(arg) {
              return arg;
            };
          }
          funcs = funcs.filter(function(func) {
            return typeof func === "function";
          });
          if (funcs.length === 1) {
            return funcs[0];
          }
          var last = funcs[funcs.length - 1];
          var rest = funcs.slice(0, -1);
          return function() {
            return rest.reduceRight(function(composed, f) {
              return f(composed);
            }, last.apply(void 0, arguments));
          };
        }
        var MiddlewareManager3 = exports3.MiddlewareManager = function() {
          function MiddlewareManager4(target) {
            var _instance;
            _classCallCheck(this, MiddlewareManager4);
            var instance = middlewareManagerHash.find(function(key) {
              return key._target === target;
            });
            if (instance === void 0) {
              this._target = target;
              this._methods = {};
              this._methodMiddlewares = {};
              middlewareManagerHash.push(this);
              instance = this;
            }
            for (var _len2 = arguments.length, middlewareObjects = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
              middlewareObjects[_key2 - 1] = arguments[_key2];
            }
            (_instance = instance).use.apply(_instance, middlewareObjects);
            return instance;
          }
          _createClass(MiddlewareManager4, [{
            key: "_methodIsValid",
            value: function _methodIsValid(methodName) {
              return !/^_+|_+$|constructor/g.test(methodName);
            }
            // Apply middleware to method
          }, {
            key: "_applyToMethod",
            value: function _applyToMethod(methodName) {
              var _this = this;
              if (typeof methodName === "string" && this._methodIsValid(methodName)) {
                var method = this._methods[methodName] || this._target[methodName];
                if (typeof method === "function") {
                  this._methods[methodName] = method;
                  if (this._methodMiddlewares[methodName] === void 0) {
                    this._methodMiddlewares[methodName] = [];
                  }
                  for (var _len3 = arguments.length, middlewares = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
                    middlewares[_key3 - 1] = arguments[_key3];
                  }
                  middlewares.forEach(function(middleware) {
                    return typeof middleware === "function" && _this._methodMiddlewares[methodName].push(middleware(_this._target));
                  });
                  this._target[methodName] = compose.apply(void 0, _toConsumableArray(this._methodMiddlewares[methodName]))(method.bind(this._target));
                }
              }
            }
            /**
             * Apply (register) middleware functions to the target function or apply (register) middleware objects.
             * If the first argument is a middleware object, the rest arguments must be middleware objects.
             *
             * @param {string|object} methodName String for target function name, object for a middleware object.
             * @param {...function|...object} middlewares The middleware chain to be applied.
             * @return {object} this
             */
          }, {
            key: "use",
            value: function use2(methodName) {
              var _this2 = this;
              for (var _len4 = arguments.length, middlewares = Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
                middlewares[_key4 - 1] = arguments[_key4];
              }
              if ((typeof methodName === "undefined" ? "undefined" : _typeof(methodName)) === "object") {
                Array.prototype.slice.call(arguments).forEach(function(arg) {
                  (typeof arg === "undefined" ? "undefined" : _typeof(arg)) === "object" && (arg.middlewareMethods || (Object.keys(arg).length ? Object.keys(arg) : Object.getOwnPropertyNames(Object.getPrototypeOf(arg)))).forEach(function(key) {
                    typeof arg[key] === "function" && _this2._methodIsValid(key) && _this2._applyToMethod(key, arg[key].bind(arg));
                  });
                });
              } else {
                this._applyToMethod.apply(this, [methodName].concat(middlewares));
              }
              return this;
            }
          }]);
          return MiddlewareManager4;
        }();
        if (typeof window !== "undefined") {
          window["MiddlewareManager"] = MiddlewareManager3;
        }
      }, {}] }, {}, [1])(1);
    });
  }
});

// ../../../libs/loader/src/manifest.ts
var ManifestRegistry = class {
  itemMap = /* @__PURE__ */ new Map();
  constructor(manifestItems) {
    manifestItems.forEach((manifestItem) => {
      this.itemMap.set(manifestItem.key || manifestItem.configName, manifestItem);
    });
  }
  updateManifestItems(manifestItems) {
    manifestItems.forEach((manifestItem) => {
      const itemKey = manifestItem.key || manifestItem.configName;
      if (this.itemMap.has(itemKey)) {
        console.warn("Manifest item already exists, will be replaced. key:", itemKey);
      }
      this.itemMap.set(itemKey, manifestItem);
    });
  }
  getItem(modName) {
    return this.itemMap.get(modName);
  }
  getModNames() {
    return Array.from(this.itemMap.keys());
  }
};

// ../../../libs/utils/src/id.ts
function generateId() {
  return Math.random().toString().slice(2);
}

// ../../../libs/utils/src/effect.ts
var EffectRunner = class {
  effects = /* @__PURE__ */ new Map();
  /**
   * @description 立即执行并收集副作用
   * @param effect 立即执行的函数，返回清理副作用的函数
   * @returns id，用于 cleanEffect 调用
   */
  runEffect(effect) {
    const id = generateId();
    this.effects.set(id, effect());
    return id;
  }
  /**
   * @description 绑定子Runner
   * @param sub 子Runner
   * @returns id，用于 cleanEffect 调用
   */
  attachEffectRunner(sub) {
    return this.runEffect(() => () => sub.clean());
  }
  /**
   * @description 通过副作用的 id 清理副作用
   * @param id 副作用的 id
   * @returns 是否存在该副作用id
   */
  cleanEffect(id) {
    const teardown = this.effects.get(id);
    if (teardown) {
      teardown();
      this.effects.delete(id);
    }
    return Boolean(teardown);
  }
  /**
   * @description 弹出 cleanup，需手动执行
   * @param id
   * @returns 销毁副作用的函数，可能为空
   */
  popEffect(id) {
    const teardown = this.effects.get(id);
    if (teardown) {
      this.effects.delete(id);
      return teardown;
    }
    return null;
  }
  /**
   * @description 执行全部 cleanup
   */
  clean() {
    [...this.effects.values()].forEach((teardown) => teardown());
    this.effects.clear();
  }
};

// ../../../libs/utils/src/index.ts
var HASH_CONST = 2147483647;
function transformRumtimeOptions(rawConfig) {
  const { runtimeUrl, runtimeConfig } = rawConfig;
  if (!runtimeUrl)
    return {};
  const config = {};
  runtimeConfig?.split(",").forEach((auth) => {
    auth && (config[auth] = true);
  });
  return {
    runtimeUrl,
    runtimeConfig: config
  };
}
function time33(str) {
  let hash = 5381;
  for (let i = 0, len = str.length; i < len; ++i) {
    hash += (hash << 5) + str.charCodeAt(i);
  }
  return hash & HASH_CONST;
}

// ../../../libs/loader/src/resolver.ts
var ModuleLoader = class {
  manifestRegistry;
  runtimeMap = /* @__PURE__ */ new Map();
  extractorMap = /* @__PURE__ */ new Map();
  resolveModCache = /* @__PURE__ */ new Map();
  constructor(manifestRegistry) {
    this.manifestRegistry = manifestRegistry;
  }
  /**
   * 更新manifest
   * @param manifestItems 待更新manifestItem
   */
  updateManifestRegistry(manifestItems) {
    this.manifestRegistry.updateManifestItems(manifestItems);
  }
  /**
   * 注册 Runtime
   * @param type 对应 Manifest 的 runtimeType
   * @param cls Runtime 的实现
   */
  registerRuntime(type, cls) {
    this.runtimeMap.set(type, cls);
  }
  /**
   * 注册 Extractor
   * @param type 对应 Manifest 的 exportTypes 值
   * @param cls Extractor 的实现
   */
  registerExtractor(type, cls) {
    this.extractorMap.set(type, cls);
  }
  /**
   * 获取已注册runtime
   * @param {string} type runtime类型
   * @returns {RuntimeConstructor}
   */
  getRuntime(type) {
    return this.runtimeMap.get(type);
  }
  /**
   * 解析、加载模块
   * @param modPath - {modName}/{subPath}
   * @returns - 模块导出
   */
  resolve(modPath, exportType) {
    const { modName, subPath, manifestItem, runtimeOptions, ExtractorClass } = this.ensureModPath(modPath, exportType);
    const extractor = new ExtractorClass();
    return extractor.resolve(async () => {
      manifestItem.deps && await Promise.all(manifestItem.deps.map((dep) => this.resolve(dep.modPath)));
      const runtime = await this.resolveMod(modName);
      const typeOrObject = exportType ?? manifestItem.exportTypes[subPath];
      extractor.setRuntime(runtime, runtimeOptions);
      extractor.setOptions(typeof typeOrObject === "string" ? {} : typeOrObject.options);
      return extractor.get(subPath);
    });
  }
  /**
   * 确认模块是否存在于 Manifest 中
   * @param modName
   * @returns
   */
  ensureMod(modName) {
    const manifestItem = this.manifestRegistry.getItem(modName);
    if (!manifestItem) {
      throw new Error(`Can't resolve module '${modName}', because it's not found in manifest`);
    }
    const RuntimeClass = this.runtimeMap.get(manifestItem.runtimeType);
    if (!RuntimeClass) {
      throw new Error(`No implement for runtimeType('${manifestItem.runtimeType}') in module '${modName}'`);
    }
    return {
      manifestItem,
      RuntimeClass
    };
  }
  /**
   * 解析、确认导出是否存在
   * @param modPath
   * @returns
   */
  ensureModPath(modPath, exportType) {
    const [modName, ...subPaths] = modPath.split("/");
    const { manifestItem, RuntimeClass } = this.ensureMod(modName);
    const runtimeOptions = transformRumtimeOptions({
      runtimeUrl: manifestItem.runtimeUrl,
      runtimeConfig: manifestItem.runtimeConfig
    });
    let subPath = subPaths.join("/");
    const typeOrObject = exportType ?? manifestItem.exportTypes?.[subPath];
    const type = typeof typeOrObject === "string" ? typeOrObject : typeOrObject?.type;
    const ExtractorClass = this.extractorMap.get(type);
    if (!ExtractorClass) {
      throw new Error(`No implement for exportType('${typeOrObject}') in module '${modName}'`);
    }
    return {
      modName,
      subPath,
      manifestItem,
      runtimeOptions,
      RuntimeClass,
      ExtractorClass
    };
  }
  /**
   * 加载模块
   * @param modName
   * @returns
   */
  async resolveMod(modName) {
    const { manifestItem, RuntimeClass } = this.ensureMod(modName);
    const cacheKey = `${modName}${manifestItem.entry}`;
    const cacheRuntime = this.resolveModCache.get(cacheKey);
    if (cacheRuntime) {
      return cacheRuntime;
    }
    const runtime = new RuntimeClass();
    runtime.expose = manifestItem.key || manifestItem.configName;
    this.resolveModCache.set(cacheKey, runtime);
    manifestItem.deps && await Promise.all(
      manifestItem.deps.map(async (dep) => {
        const { modName: modName2, subPath, ExtractorClass, manifestItem: subManifestItem } = this.ensureModPath(dep.modPath);
        const depRuntime = await this.resolveMod(modName2);
        const typeOrObject = subManifestItem.exportTypes[subPath];
        const extractor = new ExtractorClass();
        extractor.setRuntime(depRuntime);
        extractor.setOptions(typeof typeOrObject === "string" ? {} : typeOrObject.options);
        const exportItem = extractor.get(subPath);
        runtime.injectShare(dep.alias || subPath, exportItem);
      })
    );
    await runtime.evaluate(manifestItem.entry);
    return runtime;
  }
};

// ../../../libs/loader/src/interface/extractor.ts
var Extractor = class {
  runtime;
  runtimeOptions;
  options;
  resolve(loadMod) {
    return loadMod();
  }
  get(_) {
    throw new Error('"get" shoule be implemented in extractor');
  }
  setRuntime(runtime, options) {
    this.runtime = runtime;
    this.runtimeOptions = options;
  }
  setOptions(options) {
    this.options = options;
  }
};

// ../../../libs/loader/src/extractor/module.ts
var ModuleExtractor = class extends Extractor {
  get(variable) {
    let value, release;
    const predefinedMethods = {
      $load: async (tag, loadOptions) => {
        if (!this.runtime)
          throw new Error("runtime is not ready");
        ({ variable: value, release } = await this.runtime.getRawVariable(variable, {
          tag,
          runtimeOptions: this.runtimeOptions,
          onPreEntryLoad: loadOptions?.onPreEntryLoad
        }));
        return value;
      },
      $destroy: async () => {
        release?.();
      }
    };
    return new Proxy(function() {
    }, {
      getOwnPropertyDescriptor(o, p) {
        return Object.getOwnPropertyDescriptor(o, p);
      },
      ownKeys(o) {
        return Reflect.ownKeys(value || {});
      },
      apply: (_, thisArg, argumentsList) => value.apply(thisArg, argumentsList),
      get: (_o, k) => {
        if (predefinedMethods[k]) {
          return predefinedMethods[k];
        }
        const rawValue = value?.[k];
        if (typeof rawValue === "undefined") {
          return;
        }
        if (typeof rawValue !== "function") {
          return rawValue;
        }
        const bindValue = _o[k];
        if (bindValue) {
          return bindValue;
        }
        _o[k] = rawValue.bind(value);
        _o[k].prototype = rawValue.prototype;
        return _o[k];
      }
    });
  }
};

// ../../../libs/sandbox/src/sandbox/reporter.ts
import { Subject } from "rxjs";
var setoEvent = new Subject();
var setoError = new Subject();

// ../../../libs/sandbox/src/sandbox/utils.ts
var import_js_middleware2 = __toESM(require_middleware());

// ../../../libs/sandbox/src/sandbox/use.ts
var import_js_middleware = __toESM(require_middleware());
var use = (apiKey, cb, options, extraParams) => {
  const { apiOverrides, middlewareManager, variable, externals } = extraParams;
  const apiName = `${apiKey}${options?.get ? "@get" : ""}${options?.set ? "@set" : ""}`;
  if (!apiOverrides[apiName]) {
    if (options?.get) {
      apiOverrides[apiName] = function({ args, externals: externals2 }) {
        const { changed, value } = externals2;
        if (changed)
          return value;
        return getTargetValue(externals2.globalVariable, apiKey);
      };
    } else if (options?.set) {
      apiOverrides[apiName] = function({ args, externals: externals2 }) {
        return true;
      };
    } else {
      const api = variable[apiKey];
      apiOverrides[apiName] = function({ args }) {
        return api.apply(variable, args);
      };
      variable[apiName] = function(...args) {
        return apiOverrides[apiName].call(variable, { args, externals });
      };
      apiOverrides[`${apiName}@method`] = variable[apiName];
    }
  }
  middlewareManager.use(
    apiName,
    (_) => (next) => function(ctx) {
      return cb.call(this, ctx, next);
    }
  );
};
var doDeepUse = function(raw, apiPath, cb, deepRewriteContextCache) {
  const { parent, api, apiKey } = resolveApiWithParent(raw, apiPath);
  if (!api) {
    console.warn(`No api named '${apiPath}' in ${raw}`);
  }
  let deepRewriteContext = deepRewriteContextCache.get(raw);
  if (!deepRewriteContext) {
    const overrides2 = {};
    deepRewriteContext = {
      overrides: overrides2,
      middlewareManager: new import_js_middleware.MiddlewareManager(overrides2)
    };
    deepRewriteContextCache.set(raw, deepRewriteContext);
  }
  const { overrides, middlewareManager } = deepRewriteContext;
  if (!overrides[apiPath]) {
    (function(parent2, apiKey2, api2) {
      overrides[apiPath] = function({ args }) {
        return api2.apply(parent2, args);
      };
      parent2[apiKey2] = function(...args) {
        return overrides[apiPath].call(parent2, { args });
      };
    })(parent, apiKey, api);
  }
  middlewareManager.use(
    apiPath,
    (_) => (next) => function(ctx) {
      return cb.call(this, ctx, next);
    }
  );
};
var resolveApiWithParent = (o, apiPath) => {
  const paths = apiPath.split(".");
  let api = o;
  let apiKey = "";
  let parent;
  while (paths.length > 0) {
    const p = paths.shift();
    parent = api;
    api = api?.[p];
    apiKey = p;
  }
  return {
    parent,
    api,
    apiKey
  };
};
var createUseApi = () => {
  const winUseArray = [];
  const docUseArray = [];
  const deepUseArray = [];
  const winUse = (apiName, cb, options) => {
    winUseArray.unshift([apiName, cb, options]);
  };
  const docUse = (apiName, cb, options) => {
    docUseArray.unshift([apiName, cb, options]);
  };
  const deepUse = (raw, apiPath, cb) => {
    deepUseArray.unshift([raw, apiPath, cb]);
  };
  return {
    useApis: {
      winUse,
      docUse,
      deepUse
    },
    useArrays: {
      winUseArray,
      docUseArray,
      deepUseArray
    }
  };
};
var runDeepUse = (iframeWin, sandbox, deepUseArray) => {
  const deepRewriteContextCache = /* @__PURE__ */ new WeakMap();
  deepUseArray.forEach(([raw, apiPath, cb]) => {
    doDeepUse(raw, apiPath, cb, deepRewriteContextCache);
  });
};

// ../../../libs/sandbox/src/sandbox/utils.ts
function generateId2() {
  return Math.random().toString().slice(2);
}
function makeLookup(dictStr = "") {
  const dictMap = {};
  dictStr.split(/[,\s\n]+/).forEach((a) => a && (dictMap[a] = true));
  return dictMap;
}
var { hasOwnProperty } = Object.prototype;
var has = (o, k) => hasOwnProperty.call(o, k) || Boolean(o?.[k]);
function isFunction(value) {
  return typeof value === "function";
}
function isHijackingTag(tagName) {
  return tagName?.toUpperCase() === "LINK" || tagName?.toUpperCase() === "STYLE" || tagName?.toUpperCase() === "SCRIPT";
}
var isCallable = (fn) => typeof fn === "function";
function isBoundedFunction(fn) {
  if (has(fn, "__b")) {
    return fn.__b;
  }
  const bounded = fn.name.indexOf("bound ") === 0 && !has(fn, "prototype");
  fn.__b = bounded;
  return bounded;
}
function isConstructable(fn) {
  if (has(fn, "__c")) {
    return fn.__c;
  }
  const hasPrototypeMethods = fn.prototype && fn.prototype.constructor === fn && Object.getOwnPropertyNames(fn.prototype).length > 1;
  const constructable = hasPrototypeMethods;
  if (!hasPrototypeMethods) {
    let constructable2 = hasPrototypeMethods;
    const fnString = fn.toString();
    const constructableFunctionRegex = /^function\b\s[A-Z].*/;
    const classRegex = /^class\b/;
    constructable2 = constructableFunctionRegex.test(fnString) || classRegex.test(fnString);
  }
  fn.__c = constructable;
  return constructable;
}
var apiMap = /* @__PURE__ */ new Map();
function getTargetValue(target, p, ctx) {
  const value = target[p];
  if (isCallable(value) && !isBoundedFunction(value) && !isConstructable(value)) {
    let fnMap = apiMap.get(p);
    if (!fnMap) {
      fnMap = /* @__PURE__ */ new WeakMap();
      apiMap.set(p, fnMap);
    }
    let boundValue = fnMap.get(target);
    if (boundValue) {
      return boundValue;
    }
    boundValue = Function.prototype.bind.call(value, ctx || target);
    Object.setPrototypeOf(boundValue, value);
    if (has(value, "prototype") && !has(boundValue, "prototype")) {
      Object.defineProperty(boundValue, "prototype", {
        value: value.prototype,
        enumerable: false,
        writable: true
      });
    }
    fnMap?.set(target, boundValue);
    return boundValue;
  }
  return value;
}
var logGroupEnable = makeLookup("default,");
function nextTick(cb) {
  Promise.resolve().then(cb);
}
function patchCustomEvent(e, elementGetter) {
  Object.defineProperties(e, {
    srcElement: {
      get: elementGetter
    },
    target: {
      get: elementGetter
    }
  });
  return e;
}
function manualInvokeElementEvent(element, event, options) {
  const customEvent = new CustomEvent(event, options);
  const patchedEvent = patchCustomEvent(customEvent, () => element);
  if (isFunction(element[`on${event}`])) {
    element[`on${event}`](patchedEvent);
  } else {
    element.dispatchEvent(patchedEvent);
  }
}
function PromiseSetable() {
  const binderSetter = (f) => (e) => {
    p.value = e;
    f(e);
  };
  const binderError = (f) => (e) => {
    p.error = e;
    f(e);
  };
  let setter, throwErr;
  const p = new Promise((res, rej) => {
    setter = binderSetter(res);
    throwErr = binderError(rej);
  });
  p.set = setter;
  p.throw = throwErr;
  return p;
}
function isRunnableScript(scriptElement) {
  return scriptElement.type === "module" || scriptElement.type?.includes("javascript") || !scriptElement.type;
}
function copyAttributes(from, element) {
  const attrs = from.getAttributeNames();
  attrs.forEach((n) => {
    const attr = from.getAttribute(n);
    if (attr) {
      element.setAttribute(n, attr);
    }
  });
}
function initIframeDom(iframeWindow) {
  const iframeDocument = iframeWindow.document;
  const newDoc = window.document.implementation.createHTMLDocument("");
  const newDocumentElement = iframeDocument.importNode(newDoc.documentElement, true);
  iframeDocument.documentElement ? iframeDocument.replaceChild(newDocumentElement, iframeDocument.documentElement) : iframeDocument.appendChild(newDocumentElement);
}
function stopIframeLoading(iframeWindow, urlSubStr) {
  if (!iframeWindow) {
    return Promise.reject(new Error("stopIframeLoading with empty window"));
  }
  const oldDoc = iframeWindow.document;
  const begin = Date.now();
  return new Promise((resolve2, reject) => {
    function loop() {
      const now = Date.now();
      if (now - begin > 5 * 1e3) {
        setoEvent.next({ name: "SETO_IFRAME_LOADING_TIMEOUT" });
        reject(new Error("iframe loading timeout"));
        return;
      }
      setTimeout(() => {
        let newDoc = null;
        try {
          newDoc = iframeWindow.document;
        } catch (err) {
          newDoc = null;
        }
        if (newDoc && (newDoc !== oldDoc || newDoc.location?.href.includes(urlSubStr || "----"))) {
          iframeWindow.stop ? iframeWindow.stop() : iframeWindow.document.execCommand("Stop");
          setoEvent.next({ name: "SETO_IFRAME_LOADED" });
          resolve2();
        } else {
          loop();
        }
      }, 1);
    }
    loop();
  });
}
function createOverrides(variable, useArray, externals) {
  const apiOverrides = {};
  const middlewareManager = new import_js_middleware2.MiddlewareManager(apiOverrides);
  useArray?.forEach(([apiName, cb, options]) => {
    use(apiName, cb, options, {
      apiOverrides,
      middlewareManager,
      variable,
      externals
    });
  });
  return apiOverrides;
}

// ../../../libs/sandbox/src/sandbox/const.ts
var globalWindow = window;
var globalDocument = globalWindow.document;
var useRawIframeVar = makeLookup(
  [
    // 变量、方法
    "globalThis",
    "self",
    "undefined",
    "eval",
    "NaN",
    "atob",
    "btoa",
    "JSON",
    "console",
    "Infinity",
    "Math",
    "setTimeout",
    "clearTimeout",
    "setInterval",
    "clearInterval",
    "queueMicrotask",
    "MessageChannel",
    // 'Reflect',
    "isFinite",
    "isNaN",
    "parseFloat",
    "parseInt",
    "decodeURI",
    "decodeURIComponent",
    "encodeURI",
    "encodeURIComponent",
    "FinalizationRegistry",
    // 构造器
    "Array",
    "ArrayBuffer",
    "BigInt",
    "BigInt64Array",
    "BigUint64Array",
    "Boolean",
    "DataView",
    "Date",
    "Error",
    "EvalError",
    "Float32Array",
    "Float64Array",
    "Function",
    "Int16Array",
    "Int32Array",
    "Int8Array",
    "Map",
    "Number",
    "Object",
    "Promise",
    "Proxy",
    "RangeError",
    "ReferenceError",
    "RegExp",
    "Set",
    "String",
    "Symbol",
    "SyntaxError",
    "TypeError",
    "Uint16Array",
    "Uint32Array",
    "Uint8Array",
    "Uint8ClampedArray",
    "URIError",
    "WeakMap",
    "WeakRef",
    "WeakSet",
    // 'history',
    //
    "WebSocket",
    "Worker",
    "SharedWorker"
  ].join(",")
);
var globalConstructors = [
  // 'Function',
  // 'RegExp',
  // 'Number',
  // 'String',
  // 'Promise',
  "Array",
  "ArrayBuffer",
  "BigInt",
  "BigInt64Array",
  "BigUint64Array",
  "Boolean",
  "DataView",
  "Date",
  "Error",
  "EvalError",
  "Float32Array",
  "Float64Array",
  "Int16Array",
  "Int32Array",
  "Int8Array",
  "Map",
  "Object",
  "Proxy",
  "RangeError",
  "ReferenceError",
  "Set",
  "Symbol",
  "SyntaxError",
  "TypeError",
  "Uint16Array",
  "Uint32Array",
  "Uint8Array",
  "Uint8ClampedArray",
  "URIError",
  "WeakMap",
  "WeakRef",
  "WeakSet"
];
var SETO_CREATE_ELEMENT_TAG = Symbol();

// ../../../libs/sandbox/src/utils/common.ts
function makeLookup2(dictStr = "") {
  const dictMap = {};
  dictStr.split(/[,\s\n]+/).forEach((a) => a && (dictMap[a] = true));
  return dictMap;
}
var { hasOwnProperty: hasOwnProperty2 } = Object.prototype;
var has2 = (o, k) => hasOwnProperty2.call(o, k) || Boolean(o?.[k]);
var isCallable2 = (fn) => typeof fn === "function";
function isBoundedFunction2(fn) {
  if (has2(fn, "__b")) {
    return fn.__b;
  }
  const bounded = fn.name.indexOf("bound ") === 0 && !has2(fn, "prototype");
  fn.__b = bounded;
  return bounded;
}
function isConstructable2(fn) {
  if (has2(fn, "__c")) {
    return fn.__c;
  }
  const hasPrototypeMethods = fn.prototype && fn.prototype.constructor === fn && Object.getOwnPropertyNames(fn.prototype).length > 1;
  let constructable = hasPrototypeMethods;
  if (!hasPrototypeMethods) {
    let constructable2 = hasPrototypeMethods;
    const fnString = fn.toString();
    const constructableFunctionRegex = /^function\b\s[A-Z].*/;
    const classRegex = /^class\b/;
    constructable2 = constructableFunctionRegex.test(fnString) || classRegex.test(fnString);
  }
  fn.__c = constructable;
  return constructable;
}
var apiMap2 = /* @__PURE__ */ new Map();
function getTargetValue2(target, p, ctx) {
  const value = target[p];
  if (isCallable2(value) && !isBoundedFunction2(value) && !isConstructable2(value)) {
    let fnMap = apiMap2.get(p);
    if (!fnMap) {
      fnMap = /* @__PURE__ */ new WeakMap();
      apiMap2.set(p, fnMap);
    }
    let boundValue = fnMap.get(target);
    if (boundValue) {
      return boundValue;
    }
    boundValue = Function.prototype.bind.call(value, ctx || target);
    Object.setPrototypeOf(boundValue, value);
    if (has2(value, "prototype") && !has2(boundValue, "prototype")) {
      Object.defineProperty(boundValue, "prototype", {
        value: value.prototype,
        enumerable: false,
        writable: true
      });
    }
    fnMap?.set(target, boundValue);
    return boundValue;
  }
  return value;
}
var logGroupEnable2 = makeLookup2("default,");

// ../../../libs/sandbox/src/proxy/proxyKeys.ts
function proxyKeys(obj, keys) {
  const override = {};
  const keySet = new Set(keys);
  return new Proxy(obj, {
    get(t, p) {
      return has2(override, p) ? getTargetValue2(override, p, t) : getTargetValue2(t, p);
    },
    set(t, p, v) {
      if (keySet.has(p)) {
        override[p] = v;
      } else {
        t[p] = v;
      }
      return true;
    }
  });
}

// ../../../libs/sandbox/src/sandbox/ls.ts
import { once } from "lodash-es";
function createLocalStorageWithPrefix(lsPrefix) {
  const { localStorage } = window;
  const getKeys = (stopFn) => {
    const keys = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key?.startsWith(lsPrefix)) {
        keys.push(key);
      }
      if (stopFn?.(keys)) {
        break;
      }
    }
    return keys;
  };
  const overrides = {
    rawStorage: localStorage,
    prefix: lsPrefix,
    clear() {
      getKeys().forEach((key) => localStorage.removeItem(key));
    },
    getItem(key) {
      return localStorage.getItem(`${lsPrefix}${key}`);
    },
    key(index) {
      return getKeys((keys) => keys.length > index)[index] || null;
    },
    removeItem(key) {
      return localStorage.removeItem(`${lsPrefix}${key}`);
    },
    setItem(key, value) {
      return localStorage.setItem(`${lsPrefix}${key}`, value);
    }
  };
  const warnUsage = once(() => {
    setoEvent.next({ name: "SETO_LOCALSTORAGE_WARN" });
    console.warn(
      "Please use `localStorage.length` + `localStorage.key` to implement key traversal instead of `Object.keys` or `for in`"
    );
  });
  return new Proxy(localStorage, {
    ownKeys() {
      warnUsage();
      return getKeys();
    },
    getOwnPropertyDescriptor(t, p) {
      return { configurable: true, enumerable: true };
    },
    get(_t, prop) {
      if (overrides[prop]) {
        return overrides[prop];
      }
      if (prop === "length") {
        return getKeys().length;
      }
      if (typeof prop === "string") {
        return localStorage.getItem(`${lsPrefix}${prop}`);
      }
      return localStorage[prop];
    }
  });
}

// ../../../libs/sandbox/src/sandbox/hooks.ts
function createHook() {
  return function hookCallback(_ctx) {
    return null;
  };
}
var globalHooks = {
  // 获取
  getEmptyPageUrl: () => "/nettest/emptyPage",
  // 变量 patch 前的回调，用于保存一些变量
  beforeIframePatch: createHook(),
  // 运行全局镜像
  globalRuntime: createHook(),
  // 完成变量 patch 之后的回调，用于自定义再修改一些 API
  afterIframeInit: createHook()
};
function setGlobalHooks(hooks) {
  Object.assign(globalHooks, hooks);
}

// ../../../libs/sandbox/src/proxy/overridable.ts
import { isFunction as isFunction2, isNil } from "lodash-es";
function isObject(arg) {
  let type = typeof arg;
  return arg != null && (type === "object" || type === "function");
}
function createOverridableProxyFactory() {
  const proxyObjectPool2 = /* @__PURE__ */ new WeakMap();
  function ensureCtxMap2(ctx) {
    let temp;
    const proxyInCtx = proxyObjectPool2.get(ctx) || (temp = /* @__PURE__ */ new WeakMap(), proxyObjectPool2.set(ctx, temp), temp);
    return proxyInCtx;
  }
  const defultContext2 = {};
  return function overridableProxy(obj, ctx = defultContext2) {
    if (!isObject(obj)) {
      return obj;
    }
    const proxyInCtx = ensureCtxMap2(ctx);
    const proxyInPool = proxyInCtx.get(obj);
    if (proxyInPool) {
      return proxyInPool;
    }
    const overrides = {};
    const newProxy = new Proxy(
      obj,
      {
        get(target, prop, receiver) {
          let finalTarget = has2(overrides, prop) ? overrides : target;
          let value = Reflect.get(finalTarget, prop, receiver === newProxy ? finalTarget : receiver);
          if (isFunction2(value)) {
            const ctxMap = ensureCtxMap2(finalTarget);
            let boundValue = ctxMap.get(value);
            if (!isNil(boundValue))
              return boundValue;
            boundValue = getTargetValue2(finalTarget, prop);
            ctxMap.set(value, boundValue);
            return boundValue;
          }
          return overridableProxy(value, finalTarget);
        },
        has(target, prop) {
          return has2(overrides, prop) || has2(target, prop);
        },
        deleteProperty(target, prop) {
          delete overrides[prop];
          return true;
        },
        getOwnPropertyDescriptor(target, prop) {
          return Reflect.getOwnPropertyDescriptor(has2(overrides, prop) ? overrides : target, prop);
        },
        defineProperty(target, prop, descriptor) {
          Reflect.defineProperty(overrides, prop, descriptor);
          return true;
        },
        set(target, prop, value) {
          let finalTarget = has2(overrides, prop) ? overrides : target;
          const ctxMap = ensureCtxMap2(finalTarget);
          if (isFunction2(finalTarget[prop])) {
            let boundValue = ctxMap.get(value);
            ctxMap.delete(boundValue);
          }
          overrides[prop] = value;
          return true;
        }
      }
    );
    proxyInCtx.set(obj, newProxy);
    return newProxy;
  };
}

// ../../../libs/sandbox/src/sandbox/patchWindow.ts
import { difference, forEach, isNaN } from "lodash-es";

// ../../../libs/sandbox/src/proxy/event.ts
import { isBoolean, isFunction as isFunction3, pick } from "lodash-es";
function proxyEventEffect(ctx) {
  let cleared = false;
  const eventMap = /* @__PURE__ */ new Map();
  const keys = ["capture", "once", "passive"];
  const callbackWrapMap = /* @__PURE__ */ new WeakMap();
  const removeEventListener = (name, callback, options) => {
    const normalizedOption = {
      capture: false,
      once: false,
      passive: false
    };
    if (isBoolean(options)) {
      normalizedOption.capture = options;
    } else {
      Object.assign(normalizedOption, options);
    }
    let normalizedCallback;
    if (callback && callbackWrapMap.get(callback)) {
      normalizedCallback = callbackWrapMap.get(callback) || null;
    } else {
      normalizedCallback = callback;
    }
    const hash = `${name}@${JSON.stringify(pick(normalizedOption, keys))}`;
    ctx.removeEventListener(name, normalizedCallback, normalizedOption);
    const eventSet = eventMap.get(hash);
    if (eventSet) {
      eventSet.delete(normalizedCallback);
      if (eventSet.size === 0) {
        eventMap.delete(hash);
      }
    }
  };
  const addEventListener = (name, callback, options) => {
    if (cleared) {
      return;
    }
    const normalizedOption = {
      capture: false,
      once: false,
      passive: false
    };
    if (isBoolean(options)) {
      normalizedOption.capture = options;
    } else {
      Object.assign(normalizedOption, options);
    }
    let normalizedCallback = null;
    if (normalizedOption.once && callback) {
      normalizedCallback = callbackWrapMap.get(callback) || (() => {
        const callbackWrap = function(...args) {
          removeEventListener(name, callback, normalizedOption);
          if (isFunction3(callback)) {
            callback.apply(this, args);
          } else {
            callback.handleEvent.apply(callback, args);
          }
        };
        callbackWrapMap.set(callback, callbackWrap);
        return callbackWrap;
      })();
    } else {
      normalizedCallback = callback;
    }
    ctx.addEventListener(name, normalizedCallback, normalizedOption);
    const hash = `${name}@${JSON.stringify(pick(normalizedOption, keys))}`;
    if (!eventMap.has(hash)) {
      eventMap.set(hash, /* @__PURE__ */ new Set());
    }
    const eventSet = eventMap.get(hash);
    eventSet && eventSet.add(normalizedCallback);
  };
  const stopAndClear = () => {
    cleared = true;
    eventMap.forEach((eventSet, k) => {
      const [name, optionStr] = k.split("@");
      const option = JSON.parse(optionStr);
      eventSet.forEach((callback) => {
        ctx.removeEventListener(name, callback, true);
        ctx.removeEventListener(name, callback, false);
      });
    });
    eventMap.clear();
  };
  return {
    dispatchEvent: ctx.dispatchEvent.bind(ctx),
    addEventListener,
    removeEventListener,
    stopAndClear
  };
}

// ../../../libs/sandbox/src/sandbox/patchWindow.ts
var globalPatched = false;
var ObjectSymbol = Symbol();
var FuncSymbol = Symbol();
var RegSymbol = Symbol();
var PromiseSymbol = Symbol();
var originInsOf = Object[Symbol.hasInstance];
var protoMap = /* @__PURE__ */ new WeakMap();
function patchWindowGlobalConstructor(iframeWin) {
  protoMap.set(iframeWin.Object.prototype, true);
  globalConstructors.forEach((apiName) => {
    try {
      const keys = Reflect.ownKeys(globalWindow[apiName].prototype);
      if (["Object", "Array"].includes(apiName)) {
        const obj = keys.reduce((acc, k) => {
          if ((typeof k !== "string" || !(k.startsWith("__") || k === "constructor")) && typeof globalWindow[apiName].prototype[k] === "function") {
            try {
              return { ...acc, [k]: globalWindow[apiName].prototype[k] };
            } catch (e) {
              return acc;
            }
          }
          return acc;
        }, {});
        Object.assign(iframeWin[apiName].prototype, obj);
      }
      if (apiName === "Object") {
        iframeWin.Object[ObjectSymbol] = true;
      }
      Object.setPrototypeOf(iframeWin[apiName].prototype, globalWindow[apiName].prototype);
    } catch (e) {
    }
    iframeWin[apiName] = globalWindow[apiName];
  });
  iframeWin.Function[FuncSymbol] = true;
  iframeWin.Function[ObjectSymbol] = true;
  Object.defineProperty(iframeWin.Function, Symbol.hasInstance, {
    value(obj) {
      return originInsOf.call(Function, obj) || originInsOf.call(iframeWin.Function, obj);
    }
  });
  iframeWin.RegExp[RegSymbol] = true;
  Object.defineProperty(iframeWin.RegExp, Symbol.hasInstance, {
    value(obj) {
      return originInsOf.call(RegExp, obj) || obj?.constructor?.[RegSymbol];
    }
  });
  iframeWin.Promise[PromiseSymbol] = true;
  Object.defineProperty(iframeWin.Promise, Symbol.hasInstance, {
    value(obj) {
      return originInsOf.call(Promise, obj) || obj?.constructor?.[PromiseSymbol];
    }
  });
  if (globalPatched) {
    return;
  }
  globalPatched = true;
  const rawGetPrototypeof = globalWindow.Object.getPrototypeOf;
  globalWindow.Object.getPrototypeOf = function(obj) {
    if (protoMap.get(rawGetPrototypeof(obj))) {
      return globalWindow.Object.prototype;
    }
    return rawGetPrototypeof.call(globalWindow.Object, obj);
  };
  Object.defineProperty(Object, Symbol.hasInstance, {
    value(obj) {
      return originInsOf.call(Object, obj) || obj?.constructor?.[ObjectSymbol];
    }
  });
  Object.defineProperty(RegExp, Symbol.hasInstance, {
    value(obj) {
      return originInsOf.call(RegExp, obj) || obj?.constructor?.[RegSymbol];
    }
  });
  Object.defineProperty(Function, Symbol.hasInstance, {
    value(obj) {
      return originInsOf.call(Function, obj) || obj?.constructor?.[FuncSymbol];
    }
  });
  Object.defineProperty(Promise, Symbol.hasInstance, {
    value(obj) {
      return originInsOf.call(Promise, obj) || obj?.constructor?.[PromiseSymbol];
    }
  });
}
function patchWindowEvents(iframeWin, windowEventsKeys) {
  const eventMap = {};
  windowEventsKeys.forEach((eventName) => {
    Object.defineProperty(iframeWin, eventName, {
      set(v) {
        eventMap[eventName] = v;
        window[eventName] = v;
      },
      get() {
        return window[eventName];
      }
    });
  });
  const clearAll = () => {
    forEach(eventMap, (f, eventName) => {
      if (window[eventName] === f) {
        window[eventName] = null;
      }
    });
  };
  return clearAll;
}
function patchWindowAssignableKeys(iframeWin, windowConfigurableKeys, apiOverrides, externals) {
  windowConfigurableKeys.filter((e) => typeof e === "symbol" || e && isNaN(Number(e))).forEach((varName) => {
    if (varName === "postMessage") {
      Object.defineProperty(iframeWin, varName, {
        configurable: true,
        get() {
          return (...args) => window.postMessage(...args);
        }
      });
      return;
    }
    let changed = false;
    let value = getTargetValue(window, varName);
    Object.defineProperty(iframeWin, varName, {
      configurable: true,
      get() {
        if (typeof varName === "string") {
          const methodKey = `${varName}@method`;
          const api = apiOverrides?.[methodKey];
          if (api) {
            return api;
          }
          const getterApi = apiOverrides[`${varName}@get`];
          if (getterApi) {
            return getterApi({
              args: [],
              externals: {
                changed,
                value,
                ...externals
              }
            });
          }
        }
        if (changed) {
          return value;
        }
        return getTargetValue(window, varName);
      },
      set(v) {
        if (typeof varName === "string") {
          const methodKey = `${varName}@method`;
          const api = apiOverrides?.[methodKey];
          if (typeof api === "function") {
            apiOverrides[methodKey] = v;
            return true;
          }
          const setterApi = apiOverrides[`${varName}@set`];
          if (setterApi) {
            const ctx = {
              args: [v],
              externals
            };
            let shouldSet = setterApi(ctx);
            if (shouldSet) {
              changed = true;
              value = v;
            }
            return shouldSet;
          }
        }
        changed = true;
        value = v;
        return true;
      }
    });
  });
}
function saveWindowGlobals(iframeWin) {
  iframeWin.RAW_ADDEVENTLISTENER = iframeWin.addEventListener;
  iframeWin.RAW_REMOVEEVENTLISTENER = iframeWin.removeEventListener;
  iframeWin.RAW_DISPATCHEVENT = iframeWin.dispatchEvent;
  iframeWin.RAW_HISTORY = iframeWin.history;
  iframeWin.RAW_PERFORMANCE = iframeWin.performance;
}
function rethrowError(iframeWin) {
  iframeWin.RAW_ADDEVENTLISTENER.call(iframeWin, "error", (event) => {
    const curError = event.error ?? new Error(event.message);
    setTimeout(() => {
      throw curError;
    });
  });
  iframeWin.RAW_ADDEVENTLISTENER.call(iframeWin, "unhandledrejection", (event) => {
    Promise.reject(event.reason);
  });
}
var performancePatched = false;
function patchPerformance() {
  if (performancePatched)
    return;
  ["getEntriesByType", "getEntries", "getEntriesByName"].forEach((apiName) => {
    const api = window.performance?.[apiName];
    api && Object.defineProperty(window.performance, apiName, {
      writable: true,
      configurable: true,
      value(...args) {
        let result = api.apply(window.performance, args) || [];
        const resultMap = /* @__PURE__ */ new Map();
        result.forEach((item) => {
          resultMap.set(item?.name, item);
        });
        try {
          BaseSandbox.sandboxMap?.forEach((value) => {
            const rawPerformance = value?.raw?.win?.RAW_PERFORMANCE;
            if (!rawPerformance)
              return;
            const sandboxResult = rawPerformance[apiName]?.(...args) || [];
            result = result.concat(sandboxResult.filter((sandBoxItem) => !resultMap.has(sandBoxItem?.name)));
          });
        } catch (e) {
        }
        return result;
      }
    });
  });
  performancePatched = true;
}
function patchWindow(iframeWin, sandbox, winUseArray) {
  const windowKeys = Reflect.ownKeys(window);
  const windowEventsKeys = windowKeys.filter((k) => typeof k === "string" && k.startsWith("on"));
  const windowNoneEventKeys = difference(windowKeys, windowEventsKeys);
  const dontChangeKeys = useRawIframeVar;
  const windowConfigurableKeys = windowNoneEventKeys.filter(
    (k) => Object.getOwnPropertyDescriptor(window, k)?.configurable === true && !dontChangeKeys[k]
  );
  const externals = {
    sandbox,
    globalVariable: globalWindow
  };
  const apiOverrides = createOverrides(iframeWin, winUseArray, externals);
  const { dispatchEvent, addEventListener, removeEventListener, stopAndClear } = proxyEventEffect(globalWindow);
  saveWindowGlobals(iframeWin);
  patchWindowGlobalConstructor(iframeWin);
  patchWindowAssignableKeys(iframeWin, windowConfigurableKeys, apiOverrides, externals);
  patchPerformance();
  const clearEventEffect = patchWindowEvents(iframeWin, windowEventsKeys);
  Object.assign(iframeWin, { dispatchEvent, addEventListener, removeEventListener });
  iframeWin.DocumentFragment = class extends globalWindow.DocumentFragment {
    constructor() {
      super();
      this[SETO_CREATE_ELEMENT_TAG] = sandbox;
    }
    /**
     * document.createFragmentElement() instanceof DocumentFragment // 预期为true
     */
    static [Symbol.hasInstance](obj) {
      try {
        const result = obj?.nodeType === Node.DOCUMENT_FRAGMENT_NODE;
        return result;
      } catch (e) {
        return false;
      }
    }
  };
  rethrowError(iframeWin);
  return () => {
    clearEventEffect();
    stopAndClear();
  };
}

// ../../../libs/sandbox/src/sandbox/patchDocument.ts
import { difference as difference2, forEach as forEach2, uniq } from "lodash-es";
import { firstValueFrom, fromEvent } from "rxjs";
var DocumentProtoKeys = uniq(
  Reflect.ownKeys(Node.prototype).concat(Reflect.ownKeys(Document.prototype)).filter((e) => typeof e !== "symbol")
);
var DocumentEventKeys = DocumentProtoKeys.filter((e) => e.startsWith("on"));
var DocumentNotEventKeys = difference2(DocumentProtoKeys, DocumentEventKeys);
function patchDocumentEvents(iframeWin) {
  const eventMap = {};
  DocumentEventKeys.forEach((eventName) => {
    Object.defineProperty(iframeWin.document, eventName, {
      set(v) {
        eventMap[eventName] = v;
        window.document[eventName] = v;
      },
      get() {
        return window.document[eventName];
      }
    });
  });
  const clearAll = () => {
    forEach2(eventMap, (f, eventName) => {
      if (window.document[eventName] === f) {
        window.document[eventName] = null;
      }
    });
  };
  return clearAll;
}
function patchDocumentAssignable(iframeWin, sandbox, options) {
  const { onDocumentActive, apiOverrides, externals } = options ?? {};
  DocumentNotEventKeys.forEach((keyName) => {
    Object.defineProperty(iframeWin.document, keyName, {
      configurable: true,
      get() {
        onDocumentActive?.();
        const methodKey = `${keyName}@method`;
        const api = apiOverrides?.[methodKey];
        if (api) {
          return api;
        }
        const getterApi = apiOverrides?.[`${keyName}@get`];
        if (getterApi) {
          return getterApi({
            args: [],
            externals: {
              ...externals
            }
          });
        }
        return getTargetValue(document, keyName);
      },
      set(v) {
        const methodKey = `${keyName}@method`;
        const api = apiOverrides?.[methodKey];
        if (typeof api === "function") {
          apiOverrides[methodKey] = v;
          return true;
        }
        const setterApi = apiOverrides?.[`${keyName}@set`];
        if (setterApi) {
          const ctx = {
            args: [v],
            externals
          };
          let shouldSet = setterApi(ctx);
          if (shouldSet) {
            document[keyName] = v;
          }
        }
        document[keyName] = v;
      }
    });
  });
  Object.defineProperty(iframeWin.document, "createElement", {
    configurable: true,
    writable: true,
    value(tagName, options2) {
      const elem = document.createElement(tagName, options2);
      if (tagName.toUpperCase() === "LINK" || tagName.toUpperCase() === "STYLE") {
        elem[SETO_CREATE_ELEMENT_TAG] = sandbox.cssOrigin;
      } else {
        elem[SETO_CREATE_ELEMENT_TAG] = sandbox;
      }
      return elem;
    }
  });
  Object.defineProperty(iframeWin.document, "createDocumentFragment", {
    configurable: true,
    writable: true,
    value() {
      const elem = document.createDocumentFragment();
      elem[SETO_CREATE_ELEMENT_TAG] = sandbox;
      return elem;
    }
  });
  Object.defineProperty(iframeWin.document, "getElementsByTagName", {
    configurable: true,
    writable: true,
    value(tagName) {
      if (tagName.toUpperCase() === "SCRIPT") {
        const iframeElem = iframeWin.RAW_GETELEMENTSBYTAGNAME.call(iframeWin.document, tagName);
        const elem = document.getElementsByTagName(tagName);
        return Array.from(iframeElem).concat(Array.from(elem));
      } else {
        return document.getElementsByTagName(tagName);
      }
    }
  });
}
function saveDocumentMethods(iframeWin) {
  const idoc = iframeWin.document;
  iframeWin.RAW_CREATE_ELEMENT = idoc.createElement;
  iframeWin.RAW_QUERYSELECTOR = idoc.querySelector;
  iframeWin.RAW_QUERYSELECTORALL = idoc.querySelectorAll;
  iframeWin.RAW_GETELEMENTSBYTAGNAME = idoc.getElementsByTagName;
  iframeWin.RAW_BODY = idoc.body;
  iframeWin.RAW_HEAD = idoc.head;
}
function rewriteAppendOrInsertChild({
  rawDOMAppendOrInsertBefore
}) {
  const { body, head } = document;
  return function appendChildOrInsertBefore(newChild, refChild) {
    const sandbox = newChild[SETO_CREATE_ELEMENT_TAG];
    if (!sandbox || this !== body && this !== head) {
      return rawDOMAppendOrInsertBefore.call(this, newChild, refChild);
    }
    const element = newChild;
    const processElement = (element2) => {
      if (!isHijackingTag(element2?.tagName)) {
        const res = rawDOMAppendOrInsertBefore.call(this, element2, refChild);
        return res;
      }
      if (element2.tagName) {
        switch (element2.tagName?.toUpperCase()) {
          case "LINK": {
            const linkElement = element2;
            linkElement.dataset.fromSetoId = sandbox.id;
            const res = rawDOMAppendOrInsertBefore.call(this, linkElement, refChild);
            return res;
          }
          case "STYLE": {
            const stylesheetElement = element2;
            stylesheetElement.dataset.fromSetoId = sandbox.id;
            const res = rawDOMAppendOrInsertBefore.call(this, stylesheetElement, refChild);
            return res;
          }
          case "SCRIPT": {
            const scriptElement = element2;
            if (!isRunnableScript(scriptElement)) {
              rawDOMAppendOrInsertBefore.call(this, scriptElement, refChild);
            } else {
              const { src, text } = scriptElement;
              const { RAW_BODY, RAW_CREATE_ELEMENT } = sandbox.raw.win;
              const iscript = RAW_CREATE_ELEMENT.call(sandbox.raw.doc, "script");
              copyAttributes(scriptElement, iscript);
              const inlineId = generateId2();
              if (text) {
                iscript.text = text;
                iscript.dataset.inlineId = inlineId;
              }
              iscript.onload = () => {
                manualInvokeElementEvent(scriptElement, "load");
              };
              iscript.onerror = () => {
                manualInvokeElementEvent(scriptElement, "error");
              };
              RAW_BODY.appendChild(iscript);
              const comment = document.createComment(
                `script run into seto ${sandbox.id}: ${src ?? `inlineId#${inlineId}`}`
              );
              comment[SETO_CREATE_ELEMENT_TAG] = sandbox;
              return rawDOMAppendOrInsertBefore.call(this, comment, refChild);
            }
          }
          default:
        }
      }
    };
    if (element.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
      const stack = Array.from(element.children);
      const scripts = [];
      while (stack.length > 0) {
        const ele = stack.shift();
        if (ele?.tagName === "SCRIPT") {
          scripts.push(ele);
          ele.remove();
        }
        if (ele?.children) {
          stack.unshift(...Array.from(ele.children));
        }
      }
      const res = processElement(element);
      scripts.forEach(processElement);
      return res;
    } else {
      return processElement(element);
    }
  };
}
function rewriteRemoveChild({
  rawRemoveChild
}) {
  return function removeChild(child) {
    if (child?.tagName?.toUpperCase() === "SCRIPT" && child[SETO_CREATE_ELEMENT_TAG] && isRunnableScript(child) && child.parentNode !== this) {
      return child;
    }
    return rawRemoveChild.call(this, child);
  };
}
var appendChildPatched = false;
function patchAppendChild() {
  if (appendChildPatched) {
    return;
  }
  appendChildPatched = true;
  const { insertBefore, appendChild } = Node.prototype;
  const rewrittenAppendChild = rewriteAppendOrInsertChild({ rawDOMAppendOrInsertBefore: appendChild });
  const rewrittenInsertBefore = rewriteAppendOrInsertChild({ rawDOMAppendOrInsertBefore: insertBefore });
  Node.prototype.appendChild = rewrittenAppendChild;
  Node.prototype.insertBefore = rewrittenInsertBefore;
  const rewrittenAppend = function(...args) {
    if (args.every((node) => node?.nodeType === Node.ELEMENT_NODE || node?.nodeType === Node.DOCUMENT_FRAGMENT_NODE)) {
      args.forEach((node) => {
        rewrittenAppendChild.call(this, node);
      });
      return;
    }
    return Element.prototype.append.apply(this, args);
  };
  document.head.append = rewrittenAppend;
  document.body.append = rewrittenAppend;
}
function patchRemoveChild() {
  const { removeChild } = Node.prototype;
  const rewrittenRemoveChild = rewriteRemoveChild({ rawRemoveChild: removeChild });
  Node.prototype.removeChild = rewrittenRemoveChild;
}
if (document.readyState === "loading") {
  firstValueFrom(fromEvent(document, "DOMContentLoaded")).then(() => {
    patchAppendChild();
    patchRemoveChild();
  });
} else {
  patchAppendChild();
  patchRemoveChild();
}
function removeSandboxAppendElements(sandbox) {
  let root = document.documentElement;
  removeWithDFS(root);
  function removeWithDFS(ele) {
    Array.from(ele.childNodes).forEach((child) => {
      if (child[SETO_CREATE_ELEMENT_TAG] === sandbox) {
        child.remove();
      } else {
        removeWithDFS(child);
      }
    });
  }
}
function patchDocument(iframeWin, sandbox, docUseArray) {
  const idoc = iframeWin.document;
  const externals = {
    sandbox,
    globalVariable: globalDocument
  };
  const apiOverrides = createOverrides(idoc, docUseArray, externals);
  const { addEventListener, removeEventListener, dispatchEvent, stopAndClear } = proxyEventEffect(document);
  saveDocumentMethods(iframeWin);
  const eventEffect = patchDocumentEvents(iframeWin);
  patchDocumentAssignable(iframeWin, sandbox, {
    onDocumentActive() {
      const htmlEle = document.documentElement;
      if (htmlEle.parentNode !== idoc) {
        Object.defineProperty(htmlEle, "parentNode", {
          configurable: true,
          value: idoc
        });
        nextTick(() => {
          Object.defineProperty(htmlEle, "parentNode", {
            configurable: true,
            value: document
          });
        });
      }
    },
    apiOverrides,
    externals
  });
  patchAppendChild();
  Object.assign(idoc, { addEventListener, removeEventListener, dispatchEvent });
  return () => {
    removeSandboxAppendElements(sandbox);
    eventEffect();
    stopAndClear();
  };
}

// ../../../libs/sandbox/src/sandbox/syncHistory.ts
import { Subject as Subject2, Subscription, fromEvent as fromEvent2, share } from "rxjs";
var $popstate = fromEvent2(window, "popstate").pipe(share());
var $hashChange = fromEvent2(window, "hashchange").pipe(share());
var $pushState = new Subject2();
var $replaceState = new Subject2();
var historyRewrote = false;
var getPathAndHash = (location2) => location2.href.slice(location2.origin.length);
function rewriteHistory() {
  if (historyRewrote) {
    return;
  }
  const oldPush = history.pushState;
  const oldReplace = history.replaceState;
  history.pushState = (data, unused, url) => {
    $pushState.next([data, unused, url]);
    oldPush.call(history, data, unused, url);
  };
  history.replaceState = (data, unused, url) => {
    $replaceState.next([data, unused, url]);
    oldReplace.call(history, data, unused, url);
  };
  historyRewrote = true;
}
var runWithCatch = (fn) => {
  try {
    fn();
  } catch (e) {
    setoError.next(e);
  }
};
function syncHistory(iframeWin) {
  rewriteHistory();
  const iHistory = iframeWin.RAW_HISTORY;
  iHistory.replaceState({}, "", getPathAndHash(location));
  const s1 = $popstate.subscribe(() => {
    runWithCatch(() => iHistory.replaceState(history.state, "", getPathAndHash(location)));
  });
  const s2 = $hashChange.subscribe(() => {
    runWithCatch(() => iHistory.replaceState(history.state, "", getPathAndHash(location)));
  });
  const s3 = $pushState.subscribe((args) => {
    runWithCatch(() => iHistory.replaceState(...args));
  });
  const s4 = $replaceState.subscribe((args) => {
    runWithCatch(() => iHistory.replaceState(...args));
  });
  const jumpHandle = () => {
    setoEvent.next({ name: "IFRAME_UNLOAD" });
    stopIframeLoading(iframeWin).then(() => {
      setoEvent.next({ name: "IFRAME_UNLOAD_JUMP" });
      location.href = iframeWin.location.href;
    }).catch((e) => {
      setoError.next(e);
      setoEvent.next({ name: "IFRAME_UNLOAD_JUMP_ERROR" });
    });
  };
  iframeWin.RAW_ADDEVENTLISTENER.call(iframeWin, "beforeunload", jumpHandle);
  const removeJump = () => iframeWin.RAW_REMOVEEVENTLISTENER.call(iframeWin, "beforeunload", jumpHandle);
  const hashChangHandle = () => {
    history.pushState({}, "", getPathAndHash(iframeWin.location));
  };
  iframeWin.RAW_ADDEVENTLISTENER.call(iframeWin, "hashchange", hashChangHandle);
  const removeHashHandle = () => iframeWin.RAW_REMOVEEVENTLISTENER.call(iframeWin, "hashchange", hashChangHandle);
  const effects = new Subscription();
  [s1, s2, s3, s4, removeJump, removeHashHandle].forEach((s) => effects.add(s));
  return () => effects.unsubscribe();
}

// ../../../libs/sandbox/src/sandbox/index.ts
import { firstValueFrom as firstValueFrom2, fromEvent as fromEvent3, race, tap, timer } from "rxjs";

// ../../../libs/sandbox/src/sandbox/initRuntime.ts
var initRuntime = async (sandbox, runtimeUrl) => sandbox.loadScript(runtimeUrl);

// ../../../libs/sandbox/src/sandbox/index.ts
var prepareIframe = async ({
  retry = 3,
  error = null,
  wait = null
}) => {
  if (retry === 0) {
    throw error || new Error("prepareIframe retry");
  }
  if (wait) {
    await wait;
  }
  try {
    const iframe = document.createElement("iframe");
    iframe.style.display = "none";
    const pageUrl = globalHooks.getEmptyPageUrl();
    iframe.src = pageUrl;
    if (document.readyState === "loading") {
      setoEvent.next({ name: "SETO_MAINDOC_LOADING" });
      await firstValueFrom2(
        race(
          fromEvent3(document, "DOMContentLoaded"),
          timer(3 * 1e3).pipe(
            tap(() => {
              setoEvent.next({ name: "SETO_DOMContentLoaded_TIMEOUT" });
            })
          )
        )
      );
    }
    document.body.appendChild(iframe);
    if (iframe.contentWindow) {
      try {
        await stopIframeLoading(iframe.contentWindow, pageUrl);
      } catch (e) {
        iframe.remove();
        throw e;
      }
    } else {
      setoEvent.next({ name: "SETO_IFRAME_EMPTY" });
      iframe.remove();
      throw Error("iframe empty");
    }
    return iframe;
  } catch (e) {
    return prepareIframe({
      retry: retry - 1,
      error: e
    });
  }
};
var _BaseSandbox = class extends EffectRunner {
  id;
  runtimeUrl;
  rumtimeConfig;
  meta = {};
  sandboxOptions;
  iframe;
  raw;
  hasPendingInit = false;
  ready = PromiseSetable();
  createReady = PromiseSetable();
  cssOrigin = this;
  // 默认css挂载来源沙箱为本身
  constructor(sandboxOptions) {
    super();
    this.sandboxOptions = sandboxOptions;
    this._init();
  }
  static prepareIframe(wait = true) {
    if (!_BaseSandbox.candidateIframe) {
      const candidateWait = PromiseSetable();
      _BaseSandbox.candidateWait = candidateWait;
      if (!wait) {
        candidateWait.set(true);
      } else {
        setTimeout(() => {
          candidateWait.set(true);
        }, 1e3);
      }
      _BaseSandbox.candidateIframe = prepareIframe({ wait: candidateWait }).catch(() => null);
      return _BaseSandbox.candidateIframe;
    }
    return _BaseSandbox.candidateIframe;
  }
  _init() {
    this.id = generateId2();
    _BaseSandbox.sandboxMap.set(this.id, this);
    this.attachEffectRunner({
      clean: () => {
        _BaseSandbox.sandboxMap.delete(this.id);
      }
    });
    this.createIframe().then(() => {
      setoEvent.next({ name: "SETO_CREATEIFRAME_DONE" });
    }).catch((e) => {
      setoEvent.next({ name: "SETO_CREATEIFRAME_ERROR" });
      setoError.next(e);
    });
  }
  eval(code) {
    return this.raw.win.eval(code);
  }
  loadScript(urlOrScript) {
    if (!urlOrScript) {
      throw new Error("can not load empty url");
    }
    const sc = this.raw.doc.createElement("script");
    if (typeof urlOrScript === "string") {
      sc.src = urlOrScript;
    } else if (urlOrScript.tagName?.toUpperCase() === "SCRIPT") {
      copyAttributes(urlOrScript, sc);
      sc.textContent = urlOrScript.textContent;
    } else {
      throw new Error("invalid urlOrScript");
    }
    return new Promise((res, rej) => {
      if (sc.src) {
        const timer2 = setTimeout(() => {
          rej(new Error(" iframe js load timeout"));
        }, 10 * 1e3);
        sc.onload = (e) => {
          clearTimeout(timer2);
          res(e);
        };
        sc.onerror = (e, s, l, c, error) => rej(new Error(`seto frame js load error ${error?.message || ""}`));
      }
      this.raw.doc.body.appendChild(sc);
      if (!sc.src) {
        res(new CustomEvent("load"));
      }
    });
  }
  runCode(scriptInfo, __external = {}) {
    if (!this._init) {
      return;
    }
    this.raw.win.__external = __external;
    if (scriptInfo.content) {
      this.eval(scriptInfo.content);
      scriptInfo.onload?.();
    }
  }
  async createIframe() {
    const pIframe = _BaseSandbox.candidateIframe || _BaseSandbox.prepareIframe(false).catch(() => null);
    _BaseSandbox.candidateWait.set(true);
    _BaseSandbox.candidateIframe = null;
    _BaseSandbox.candidateIframe = _BaseSandbox.prepareIframe(true).catch(() => null);
    let iframe;
    try {
      iframe = await pIframe;
      if (!iframe) {
        throw new Error("prepareIframe fail");
      }
    } catch (e) {
      this.ready.throw(e);
      throw e;
    }
    iframe.dataset.setoId = this.id;
    this.iframe = iframe;
    this.raw = {
      win: iframe.contentWindow,
      doc: iframe.contentDocument
    };
    this.raw.win.__SETO_SANDBOX__ = this;
    this.createReady.set(true);
  }
  async initIframe(runtimeOptions) {
    if (this.ready.value || this.hasPendingInit)
      return;
    this.hasPendingInit = true;
    const { runtimeUrl, runtimeConfig } = runtimeOptions ?? {};
    initIframeDom(this.raw.win);
    globalHooks.beforeIframePatch({ sandbox: this });
    const { useApis, useArrays } = createUseApi();
    globalHooks.globalRuntime({ sandbox: this });
    this.raw.win.__external = {
      ...useApis,
      ...useArrays,
      runtimeConfig
    };
    if (runtimeUrl && runtimeConfig) {
      try {
        await initRuntime(this, runtimeUrl);
      } catch (e) {
        this.ready.throw(e);
        this.hasPendingInit = false;
        throw e;
      }
    }
    const { winUseArray, docUseArray, deepUseArray } = this.raw.win.__external;
    const {
      winUseArray: pluginWinUseArray = [],
      docUseArray: pluginDocUseArray = [],
      deepUseArray: pluginDeepUseArray = []
    } = window.__SETO_PLUGIN_USE_ARRAYS__ ?? {};
    const windowEffect = patchWindow(this.raw.win, this, winUseArray?.concat(pluginWinUseArray));
    this.raw.win.__proxy = this.raw.win;
    const domEffect = patchDocument(this.raw.win, this, docUseArray?.concat(pluginDocUseArray));
    const historyEffect = syncHistory(this.raw.win);
    const mergedDeepUseArray = deepUseArray?.concat(pluginDeepUseArray);
    mergedDeepUseArray && mergedDeepUseArray.length > 0 && runDeepUse(this.raw.win, this, mergedDeepUseArray);
    globalHooks.afterIframeInit({ sandbox: this });
    this.ready.set(true);
    this.attachEffectRunner({
      clean: () => {
        windowEffect();
        domEffect();
        historyEffect();
      }
    });
  }
  clean() {
    this.createReady.then(async () => {
      super.clean();
      await new Promise((res) => setTimeout(res, 1e3));
      this.iframe?.remove();
      setoEvent.next({ name: "SETO_IFRAME_REMOVE" });
      Object.assign(this, {
        proxys: null,
        iframe: null,
        raw: null
      });
    });
  }
  destroy() {
    this.clean();
  }
};
var BaseSandbox = _BaseSandbox;
__publicField(BaseSandbox, "sandboxMap", /* @__PURE__ */ new Map());
__publicField(BaseSandbox, "candidateIframe", null);
__publicField(BaseSandbox, "candidateWait", PromiseSetable());

// ../../../libs/pool/src/pool.ts
var INIT_CAPACITY = 5;
var Pool = class {
  factory;
  strategy;
  initCapacity;
  capacity;
  usedSize = 0;
  destroyed = false;
  defaultTag = `SETO_DEFAULT_TAG_${Date.now()}`;
  /** 每个对象对应一个 id */
  id2Item = /* @__PURE__ */ new Map();
  /** 引用计数 */
  id2Cnt = /* @__PURE__ */ new Map();
  /**
   * @param factory 对象工厂，负责创建和销毁对象
   * @param strategy 分配策略
   * @param initCapacity 初始化容量
   */
  constructor({ factory, strategy, initCapacity }) {
    this.factory = factory;
    this.strategy = strategy;
    this.capacity = initCapacity || INIT_CAPACITY;
    this.initCapacity = this.capacity;
    this.createItems(this.capacity);
  }
  getUsedSize() {
    return this.usedSize;
  }
  getCapacity() {
    return this.capacity;
  }
  /**
   * 借用对象
   * @param input 策略的参数
   * @returns value 和 return，调用 return 归还
   */
  borrow(input, runtimeOptions) {
    if (this.destroyed) {
      throw new Error("\u5BF9\u8C61\u6C60\u5DF2\u9500\u6BC1\uFF0C\u65E0\u6CD5\u7EE7\u7EED\u4F7F\u7528");
    }
    const processedTag = this.getProcessedTag(input, runtimeOptions);
    const id = this.strategy.allocate(processedTag, this.id2Cnt);
    const [_id, item] = this.reuseItem(id);
    this.adjustCapacity();
    let returned = false;
    const returnOnce = () => {
      if (!returned) {
        returned = true;
        this.return(id);
        this.adjustCapacity();
      }
    };
    return {
      value: item,
      return: returnOnce
    };
  }
  /** Pool 销毁 */
  destroy() {
    this.destroyed = true;
    [...this.id2Cnt.keys()].forEach((id) => {
      this.destroyItem(id, true);
    });
    this.capacity = 0;
    this.usedSize = 0;
  }
  /** 扩缩容 */
  adjustCapacity() {
    const newCap = this.strategy.adjustCapacity(this.id2Cnt, this.initCapacity);
    if (newCap > this.capacity) {
      const increase = newCap - this.capacity;
      this.createItems(increase);
      this.capacity += increase;
    } else if (newCap < this.capacity) {
      const idCntTuple = [...this.id2Cnt.entries()].filter(([, cnt]) => cnt === 0);
      const removeCnt = this.capacity - newCap;
      Array(removeCnt).fill(0).forEach((_v, i) => {
        if (idCntTuple[i]) {
          this.destroyItem(idCntTuple[i][0], true);
          this.capacity--;
        }
      });
    }
  }
  /**
   * 调用 factory 生成对象
   */
  createItem() {
    const id = generateId();
    const item = this.factory.create();
    this.id2Item.set(id, item);
    this.id2Cnt.set(id, 0);
    return [id, item];
  }
  createItems(times) {
    Array(times).fill(0).forEach(() => {
      this.createItem();
    });
  }
  /**
   * 销毁对象
   * @param id
   * @param inAdjust 扩缩容标识
   */
  destroyItem(id, inAdjust = false) {
    if (!this.id2Cnt.has(id)) {
      return;
    }
    const item = this.id2Item.get(id);
    this.id2Cnt.set(id, 0);
    this.strategy.recycle(id, this.id2Cnt);
    this.id2Cnt.delete(id);
    this.id2Item.delete(id);
    if (item) {
      this.factory.destroy(item);
    }
    if (!inAdjust) {
      this.usedSize--;
      this.createItem();
    }
  }
  /**
   * 返回重用对象，将计数+1
   * @param id
   */
  reuseItem(id) {
    const item = this.id2Item.get(id);
    const cnt = this.id2Cnt.get(id);
    if (typeof cnt !== "number" || !item) {
      throw new Error(`not exist pool item for id ${id}`);
    }
    if (cnt === 0) {
      this.usedSize++;
    }
    this.id2Cnt.set(id, cnt + 1);
    return [id, item];
  }
  /**
   * 归还对象，将计数-1
   * @param id ，对象 id
   * @returns void
   */
  return(id) {
    let cnt = this.id2Cnt.get(id) || 0;
    if (cnt === 0) {
      return;
    }
    cnt -= 1;
    this.id2Cnt.set(id, cnt);
    this.strategy.recycle(id, this.id2Cnt);
    if (cnt !== 0) {
      return;
    }
    this.destroyItem(id);
  }
  /**
   * 结合镜像选项获取tag
   * @param tag 传入的tag
   * @param runtimeOptions 镜像选项
   * @returns 容器唯一tag
   */
  getProcessedTag(tag, runtimeOptions) {
    const baseTag = tag ? tag : this.defaultTag;
    const generateHash = runtimeOptions?.runtimeUrl ? time33(`${runtimeOptions.runtimeUrl}${runtimeOptions.runtimeConfig}`).toString() : "";
    return `${baseTag}${generateHash}`;
  }
};

// ../../../libs/pool/src/tagStrategy.ts
var UP_FACTOR = 0.8;
var DOWN_FACTOR = 0.2;
var INCRE = 5;
var MAX_CAPACITY = 20;
var reachedMax = false;
var TagStrategy = class {
  options;
  /** 维护 Pool 中的对象 id 与 tag 的关联 */
  tag2Id = /* @__PURE__ */ new Map();
  id2Tag = /* @__PURE__ */ new Map();
  constructor(options = {}) {
    this.options = Object.assign(
      {},
      {
        adjustSize: INCRE,
        upFactor: UP_FACTOR,
        downFactor: DOWN_FACTOR
      },
      options
    );
    this.checkOptions();
  }
  allocate(tag, id2Cnt) {
    const id = this.tag2Id.get(tag);
    if (id) {
      return id;
    }
    let allocId = [...id2Cnt.keys()].find((id2) => id2Cnt.get(id2) === 0 && !this.id2Tag.get(id2));
    if (!allocId) {
      if (!reachedMax) {
        throw new Error("Allocate failed because container has no enough space");
      }
      [allocId] = [...id2Cnt.keys()].sort((a, b) => id2Cnt.get(a) || 0 - (id2Cnt.get(b) || 0));
      return allocId;
    }
    this.id2Tag.set(allocId, tag);
    this.tag2Id.set(tag, allocId);
    return allocId;
  }
  recycle(id, id2Cnt) {
    if (id2Cnt.get(id) === 0) {
      const tag = this.id2Tag.get(id);
      this.id2Tag.delete(id);
      if (tag) {
        this.tag2Id.delete(tag);
      }
    }
  }
  adjustCapacity(id2Cnt, initCapacity) {
    const { size } = id2Cnt;
    const idleCnt = [...id2Cnt.values()].filter((cnt) => cnt === 0).length;
    const usedSize = size - idleCnt;
    if (!reachedMax && usedSize / size > this.options.upFactor) {
      const newSize = size + this.options.adjustSize;
      reachedMax = newSize >= MAX_CAPACITY;
      return Math.min(newSize, MAX_CAPACITY);
    }
    if (usedSize / size < this.options.downFactor) {
      return Math.max(size - this.options.adjustSize, initCapacity, usedSize + 1);
    }
    return size;
  }
  checkOptions() {
    if (!(this.options.upFactor < 1 && this.options.downFactor > 0 && this.options.downFactor < this.options.upFactor)) {
      throw new Error("upFactor and downFactor should be in (0,1), while downFactor < upFactor");
    }
  }
};

// ../../../libs/sdk/src/runtime/sandbox-pool.ts
var _SandboxPoolRuntime = class {
  expose;
  strategy;
  pool;
  entry = "";
  tagScriptLoaded = /* @__PURE__ */ new Map();
  constructor() {
    if (!_SandboxPoolRuntime.strategy) {
      _SandboxPoolRuntime.strategy = new TagStrategy();
    }
    if (!_SandboxPoolRuntime.pool) {
      _SandboxPoolRuntime.pool = new Pool({
        initCapacity: 2,
        factory: {
          create() {
            return new BaseSandbox({});
          },
          destroy(sb) {
            sb.destroy();
          }
        },
        strategy: _SandboxPoolRuntime.strategy
      });
    }
    this.strategy = _SandboxPoolRuntime.strategy;
    this.pool = _SandboxPoolRuntime.pool;
  }
  async evaluate(url) {
    this.entry = url;
  }
  getRawVariable(variable, options) {
    return this.borrow(options).then((item) => ({
      variable: item.value,
      release() {
        item?.return();
      }
    }));
  }
  injectShare(name, value) {
  }
  async borrow(options) {
    const { tag, runtimeOptions, noEntryLoad, onPreEntryLoad } = options;
    const item = this.pool?.borrow(tag, runtimeOptions);
    if (!item) {
      throw new Error("Sandbox pool is empty");
    }
    const hash = tag + this.entry;
    if (this.tagScriptLoaded.get(hash)) {
      await this.tagScriptLoaded.get(hash);
    } else {
      await item.value.createReady;
      item.value.initIframe(runtimeOptions).then(() => {
        setoEvent.next({ name: "SETO_INITIFRAME_DONE" });
      }).catch((e) => {
        setoEvent.next({ name: "SETO_INITIFRAME_ERROR" });
        setoError.next(e);
      });
      await item.value.ready;
      onPreEntryLoad?.(item.value.raw.win);
      if (!noEntryLoad) {
        const scriptPromise = item.value.loadScript(this.entry);
        this.tagScriptLoaded.set(hash, scriptPromise);
        await scriptPromise;
        this.tagScriptLoaded.set(hash, true);
      }
      item.value.attachEffectRunner({
        clean: () => {
          this.tagScriptLoaded.delete(hash);
        }
      });
    }
    return item;
  }
};
var SandboxPoolRuntime = _SandboxPoolRuntime;
__publicField(SandboxPoolRuntime, "strategy");
__publicField(SandboxPoolRuntime, "pool");

// ../../../libs/sdk/src/extractor/react-comp-extractor.tsx
import React2, { Suspense, useEffect, useState } from "react";

// ../../../libs/sdk/src/utils/error-boundary.tsx
import React, { isValidElement } from "react";
var ErrorBoundary = class extends React.Component {
  state;
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      tag: props.tag,
      errorFallback: props.errorFallback,
      onError: props.onError
    };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error, info) {
    const { tag, onError } = this.state;
    onError && onError(tag, error, info);
  }
  render() {
    const { children } = this.props;
    const { errorFallback, hasError } = this.state;
    let childrenToRender = children;
    if (hasError) {
      if (isValidElement(errorFallback)) {
        childrenToRender = errorFallback;
      } else if (typeof errorFallback === "function") {
        childrenToRender = errorFallback();
      } else {
        childrenToRender = /* @__PURE__ */ React.createElement("div", null, "\u51FA\u9519\u5566");
      }
      return childrenToRender;
    }
    return children;
  }
};
var error_boundary_default = ErrorBoundary;

// ../../../libs/sdk/src/extractor/react-comp-extractor.tsx
async function doPrefetch(options, { props, url }) {
  if (options?.method === "GET") {
    const fetchUrl = new Function("props", "url", `return ${`\`${options.prefetch}\``}`)(props, url);
    return (await fetch(fetchUrl)).json();
  }
  if (options?.method === "POST") {
    const urlObj = new URL(options.prefetch);
    const data = {};
    urlObj.searchParams.forEach((val, k) => {
      data[k] = new Function("props", "url", `return ${`\`${val}\``}`)(props, url);
    });
    return fetch(urlObj.origin + urlObj.pathname, {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(data)
    }).then((res) => res.json());
  }
  return null;
}
var ReactCompExtractor = class extends Extractor {
  resolve(loadMod) {
    const self2 = this;
    const Comp = (props) => {
      const [Comp2, setComp] = useState();
      const [preFetch, setPreFetch] = useState(null);
      const { fallback, suspenseFallback, errorFallback, onError, tag, props: compProps } = props;
      useEffect(() => {
        const url = new URL(location.href);
        if (self2.options?.prefetch) {
          const promise = doPrefetch(self2.options, {
            props,
            url
          });
          setPreFetch(promise);
        }
      }, [tag]);
      useEffect(() => {
        let maybeRelease;
        setComp(
          React2.lazy(async () => {
            const compLoader = await loadMod();
            const { Comp: Comp3, release } = await compLoader(props);
            maybeRelease = release;
            return {
              default: Comp3
            };
          })
        );
        return () => {
          maybeRelease?.();
        };
      }, [tag]);
      return /* @__PURE__ */ React2.createElement(error_boundary_default, { tag, errorFallback, onError }, /* @__PURE__ */ React2.createElement(Suspense, { fallback: suspenseFallback || fallback || null }, Comp2 && /* @__PURE__ */ React2.createElement(Comp2, { ...{ ...compProps, prefetchPromise: preFetch } })));
    };
    return Comp;
  }
  get(variable) {
    return async (props) => {
      if (!this.runtime)
        throw new Error("runtime is not ready");
      const rawRes = await this.runtime.getRawVariable(variable, {
        tag: props.tag,
        runtimeOptions: this.runtimeOptions,
        onPreEntryLoad: props.onPreEntryLoad
      });
      const Mod = rawRes.variable;
      const { release } = rawRes;
      return {
        Comp: Mod.default,
        release: () => {
          release?.();
        }
      };
    };
  }
};

// ../../../libs/sdk/src/singleton/context.ts
var cssOrigin;
var context_default = {
  getCssOrigin() {
    return cssOrigin;
  },
  setCssOrigin(origin) {
    cssOrigin = origin;
  }
};

// ../../../libs/sdk/src/runtime/sandbox-pool-mf.ts
function createInitCode(varName) {
  return `
    (async function({ webpackInitShare, webpackShareScopes, beforeInit, done, error }) {
      try{
        await webpackInitShare('default');
        beforeInit();
        const container = window.${varName};
        await container.init(webpackShareScopes.default);
        done()
      } catch(e){
        error(e)
      }
    })(__external);`;
}
function createGetCode(varName, expose) {
  return `
    (async function ({ done, error }) {
      try{
        const container = window.${varName};
        const factory = await container.get(${expose});
        done(await factory());
      } catch(e){
        error(e);
      }
    })(__external)`;
}
function convertWebpackScope(shareScopes, cb) {
  const currentScope = {};
  Object.keys(shareScopes?.default ?? []).forEach((pkgName) => {
    const pkgInfo = shareScopes.default[pkgName];
    Object.keys(pkgInfo).forEach((version) => {
      const versionConfig = pkgInfo[version];
      const key = `${pkgName}${version}${versionConfig.from}`;
      currentScope[key] = true;
      cb?.(key, [pkgName, version]);
    });
  });
  return currentScope;
}
function sandbox_pool_mf_default(S) {
  return class SandboxPoolMfRuntime extends S {
    async borrow(options) {
      const item = await super.borrow(options);
      const cssOrigin2 = context_default.getCssOrigin();
      item.value.cssOrigin = cssOrigin2 || item.value;
      await new Promise((res, rej) => {
        const shareScopes = __webpack_share_scopes__;
        let savedScopes;
        item.value.runCode(
          {
            content: createInitCode(this.expose)
          },
          {
            // eslint-disable-next-line camelcase
            webpackInitShare: __webpack_init_sharing__,
            webpackShareScopes: shareScopes,
            beforeInit: () => savedScopes = convertWebpackScope(shareScopes),
            done: () => {
              const scopeEffect = [];
              convertWebpackScope(shareScopes, (scopeKey, value) => {
                if (savedScopes && !savedScopes[scopeKey]) {
                  scopeEffect.push(value);
                }
              });
              item.value.attachEffectRunner({
                clean() {
                  scopeEffect.forEach((scope) => {
                    const [pkgName, version] = scope;
                    delete shareScopes.default[pkgName][version];
                  });
                }
              });
              res();
            },
            error: rej
          }
        );
      });
      return item;
    }
    async getRawVariable(variable, options) {
      return this.borrow(options).then(
        (item) => new Promise((resolve2, reject) => {
          item.value.runCode(
            {
              content: createGetCode(this.expose, JSON.stringify(`./${variable}`))
            },
            {
              done(Component) {
                resolve2({
                  sandbox: item.value,
                  variable: Component,
                  release() {
                    item?.return();
                  }
                });
              },
              error: reject
            }
          );
        })
      );
    }
  };
}

// ../../../libs/sdk/src/extractor/react-html-extractor.tsx
import React3, { Suspense as Suspense2, useEffect as useEffect3, useRef } from "react";
import { once as once2 } from "lodash-es";

// ../../../libs/sdk/src/rc/use-async-effect.ts
import { useEffect as useEffect2 } from "react";
var useAsyncEffect = (asyncCallback, deps) => {
  useEffect2(() => {
    const promiseResult = asyncCallback();
    return () => {
      promiseResult.then((cleanup) => {
        if (typeof cleanup === "function") {
          cleanup();
        }
      });
    };
  }, deps);
};
var use_async_effect_default = useAsyncEffect;

// ../../../libs/sdk/src/extractor/react-html-extractor.tsx
var ihtml = "innerHTML";
async function runHtmlIntoSandbox(sb, container, html, basename) {
  const { doc: sandboxDoc, win: sandboxWin } = sb.raw;
  const subDocEle = sandboxDoc.createElement("template");
  subDocEle[ihtml] = html.replace("<!DOCTYPE html>", "");
  const stack = Array.from(subDocEle.content.children);
  const scripts = [];
  const linkAndStyles = [];
  while (stack.length > 0) {
    const ele = stack.shift();
    if (["META", "TITLE"].includes(ele?.tagName)) {
      ele?.remove();
    } else if (ele?.tagName === "SCRIPT") {
      ele.remove();
      scripts.push(ele);
    } else if (ele?.tagName === "STYLE") {
      ele?.remove();
      linkAndStyles.push(ele);
    } else if (ele?.tagName === "LINK") {
      ele?.remove();
      const elem = ele;
      if (elem?.rel !== "icon") {
        linkAndStyles.push(elem);
      }
    }
    if (ele?.children) {
      stack.unshift(...Array.from(ele.children));
    }
  }
  linkAndStyles.forEach((ele) => {
    ele[SETO_CREATE_ELEMENT_TAG] = sb;
    document.head.appendChild(ele);
  });
  container.appendChild(subDocEle.content);
  const forPreload = scripts.filter((sc) => sc.src);
  forPreload.forEach((sc) => {
    const link = sb.raw.win.RAW_CREATE_ELEMENT.call(sb.raw.doc, "link");
    link.rel = "preload";
    link.href = sc.src;
    link.crossOrigin = sc.crossOrigin;
    link.as = "script";
    sb.raw.win.RAW_HEAD.appendChild(link);
  });
  const mockModule = {
    exports: {}
  };
  const attachModule = () => {
    sb.raw.win.__GARFISH_EXPORTS__ = mockModule.exports;
  };
  attachModule();
  while (scripts.length > 0) {
    const script = scripts.shift();
    try {
      if (isRunnableScript(script)) {
        await sb.loadScript(script);
        manualInvokeElementEvent(script, "load");
      } else {
        container.appendChild(script);
      }
    } catch (e) {
      manualInvokeElementEvent(script, "error", {
        detail: e
      });
    }
  }
  try {
    const provider = mockModule?.exports?.provider || sb.raw?.win?.provider || sb.raw?.win?.["lowcodeEngine"]?.provider;
    if (typeof provider === "function") {
      const { render, destroy } = await provider({ dom: container, basename });
      await render({ dom: container, basename });
      return destroy;
    } else {
      return () => {
      };
    }
  } catch (e) {
    setoError.next(e);
    throw e;
  } finally {
    sandboxDoc.dispatchEvent(new Event("load"));
    sandboxWin.dispatchEvent(new Event("load"));
  }
}
var ReactHTMLExtractor = class extends Extractor {
  resolve(loadMod) {
    const Comp = (props) => {
      const unmounted = useRef(false);
      const containerRef = useRef(void 0);
      const clearEffect = useRef(null);
      const {
        rawRuntimeOptions,
        getContainer,
        basename,
        entry,
        onLoad,
        onError,
        tag,
        errorFallback,
        suspenseFallback,
        fallback
      } = props;
      use_async_effect_default(async () => {
        let container = null;
        let destroy;
        const CompLoader = await loadMod();
        const { sandbox, release } = await CompLoader(props);
        clearEffect.current = once2(async () => {
          setoEvent.next({ name: "SETO_HTML_UNMOUNT" });
          await destroy?.({ dom: container, basename });
          while (container?.firstChild) {
            container.removeChild(container.firstChild);
          }
          release?.();
        });
        try {
          setoEvent.next({ name: "SETO_HTML_FETCH" });
          const htmlRes = await fetch(entry || "", {
            headers: {
              accept: "text/html"
            }
          });
          if (unmounted.current)
            throw new Error("unmount");
          if (htmlRes.ok) {
            const htmlContent = await htmlRes.text();
            container = getContainer?.() || containerRef.current;
            if (!container) {
              throw new Error("unmount: no container");
            }
            await sandbox.createReady;
            sandbox.initIframe(transformRumtimeOptions(rawRuntimeOptions || {})).then(() => {
              setoEvent.next({ name: "SETO_INITIFRAME_DONE" });
            }).catch((e) => {
              setoEvent.next({ name: "SETO_INITIFRAME_ERROR" });
              setoError.next(e);
            });
            await sandbox.ready;
            setoEvent.next({ name: "SETO_HTML_RUN_START" });
            if (unmounted.current)
              throw new Error("unmount");
            destroy = await runHtmlIntoSandbox(sandbox, container, htmlContent, basename || "");
          } else {
            setoEvent.next({ name: "SETO_HTML_FETCH_ERROR" });
            throw new Error(`html entry fetch error: ${htmlRes.status} ${htmlRes.statusText}`);
          }
          setoEvent.next({ name: "SETO_HTML_LOADED" });
          onLoad?.();
        } catch (e) {
          if (e?.message?.includes("unmount")) {
            setoEvent.next({ name: "SETO_HTML_UNMOUT_BEFORE_LOAD" });
          } else {
            setoEvent.next({
              name: "SETO_HTML_ERROR",
              param: {
                message: e?.message,
                stack: e?.stack,
                unmount: typeof unmounted !== "undefined" && unmounted?.current ? 1 /* UNMOUNTING */ : 0 /* MOUNTED */
              }
            });
            setoError.next(e);
            onError && onError(tag, e, {});
          }
        }
        return () => {
          clearEffect.current?.();
        };
      }, []);
      useEffect3(
        () => () => {
          clearEffect.current?.();
          unmounted.current = true;
        },
        []
      );
      return /* @__PURE__ */ React3.createElement(error_boundary_default, { tag, errorFallback, onError }, /* @__PURE__ */ React3.createElement(Suspense2, { fallback: suspenseFallback || fallback || null }, /* @__PURE__ */ React3.createElement(
        "div",
        {
          ref: containerRef,
          style: {
            display: "contents"
          }
        }
      )));
    };
    return Comp;
  }
  get(variable) {
    return async (props) => {
      if (!this.runtime)
        throw new Error("runtime is not ready");
      const rawRes = await this.runtime.getRawVariable(variable, {
        tag: props.tag,
        runtimeOptions: this.runtimeOptions,
        noEntryLoad: true
      });
      const { release } = rawRes;
      return {
        sandbox: rawRes.variable,
        release: () => {
          release?.();
        }
      };
    };
  }
};

// ../../../libs/sdk/src/extractor/module-ref-extractor.ts
import { useRef as useRef2, useEffect as useEffect4 } from "react";
var ModuleRefExtractor = class extends ModuleExtractor {
  resolve(loadMod) {
    return (input, loadOptions) => {
      const moduleRef = useRef2(null);
      useEffect4(() => {
        let remoteModule;
        loadMod().then((mod) => {
          remoteModule = mod;
          return mod.$load(input, loadOptions);
        }).then((api) => {
          moduleRef.current = api;
        });
        return () => {
          remoteModule?.$destroy();
        };
      });
      return moduleRef;
    };
  }
};

// ../../../libs/sdk/src/singleton/loader.ts
var registry = new ManifestRegistry([]);
var loader = new ModuleLoader(registry);
var SandboxPoolRuntimeConstructor = SandboxPoolRuntime;
if (window?.__SETO_BASE_LOADER__) {
  SandboxPoolRuntimeConstructor = window?.__SETO_BASE_LOADER__.getRuntime("sandbox-pool");
} else {
  window.__SETO_BASE_LOADER__ = loader;
}
loader.registerRuntime("sandbox-pool", SandboxPoolRuntimeConstructor);
loader.registerRuntime("sandbox-pool-mf", sandbox_pool_mf_default(SandboxPoolRuntimeConstructor));
loader.registerExtractor("react-comp", ReactCompExtractor);
loader.registerExtractor("react-html", ReactHTMLExtractor);
loader.registerExtractor("module", ModuleExtractor);
loader.registerExtractor("module-ref", ModuleRefExtractor);

// ../../../libs/sdk/src/plugin.ts
var registerPoolStrategy = (strategyType, cls, options) => {
  const SbpRuntime = options?.supportMf ? sandbox_pool_mf_default(SandboxPoolRuntime) : SandboxPoolRuntime;
  class CustomSandboxPoolRuntime extends SbpRuntime {
    static strategy;
    static pool;
    strategy;
    pool;
    constructor() {
      super();
      if (!CustomSandboxPoolRuntime.strategy) {
        CustomSandboxPoolRuntime.strategy = new cls();
      }
      if (!CustomSandboxPoolRuntime.pool) {
        SandboxPoolRuntime.pool = new Pool({
          initCapacity: options?.initCapacity || 2,
          factory: {
            create() {
              return new BaseSandbox({});
            },
            destroy(sb) {
              sb.destroy();
            }
          },
          strategy: CustomSandboxPoolRuntime.strategy
        });
      }
      this.strategy = CustomSandboxPoolRuntime.strategy;
      this.pool = CustomSandboxPoolRuntime.pool;
    }
  }
  loader.registerRuntime(`sandbox-pool${options?.supportMf ? "-mf" : ""}-${strategyType}`, CustomSandboxPoolRuntime);
};
var useArrayCreated = false;
function applyPlugin(cb) {
  if (!useArrayCreated) {
    const { useApis, useArrays } = createUseApi();
    window.__SETO_PLUGIN_USE_ARRAYS__ = useArrays;
    window.__SETO_PLUGIN_USE_APIS__ = useApis;
    useArrayCreated = true;
  }
  const { winUse, docUse, deepUse } = window.__SETO_PLUGIN_USE_APIS__;
  const cbArray = cb instanceof Array ? cb : [cb];
  cbArray.forEach((fn) => {
    fn({
      registerPoolStrategy,
      registerRuntime(t, cls) {
        loader.registerRuntime(t, cls);
      },
      registerExtractor(t, cls) {
        loader.registerExtractor(t, cls);
      },
      winUse,
      docUse,
      deepUse,
      loader
    });
  });
}

// ../../../libs/sdk/src/rc/html-sandbox.tsx
import React4, { useEffect as useEffect5, useRef as useRef3, useState as useState2 } from "react";
import { once as once3 } from "lodash-es";
function HTMLSandbox({
  basename,
  entry,
  rawRuntimeOptions = {},
  getContainer,
  onError,
  onLoad
}) {
  const [sandbox] = useState2(() => new BaseSandbox({}));
  const unmounted = useRef3(false);
  const [error, setError] = useState2(null);
  const containerRef = useRef3(void 0);
  const clearEffect = useRef3(null);
  use_async_effect_default(async () => {
    let container = null;
    let destroy;
    clearEffect.current = once3(async () => {
      setoEvent.next({ name: "SETO_HTML_UNMOUNT" });
      await destroy?.({ dom: container, basename });
      while (container?.firstChild) {
        container.removeChild(container.firstChild);
      }
      sandbox.destroy();
    });
    try {
      setoEvent.next({ name: "SETO_HTML_FETCH" });
      const htmlRes = await fetch(entry, {
        headers: {
          accept: "text/html"
        }
      });
      if (unmounted.current)
        throw new Error("unmount");
      if (htmlRes.ok) {
        const htmlContent = await htmlRes.text();
        container = getContainer?.() || containerRef.current;
        if (!container) {
          throw new Error("unmount: no container");
        }
        await sandbox.createReady;
        sandbox.initIframe(transformRumtimeOptions(rawRuntimeOptions)).then(() => {
          setoEvent.next({ name: "SETO_INITIFRAME_DONE" });
        }).catch((e) => {
          setoEvent.next({ name: "SETO_INITIFRAME_ERROR" });
          setoError.next(e);
        });
        await sandbox.ready;
        setoEvent.next({ name: "SETO_HTML_RUN_START" });
        if (unmounted.current)
          throw new Error("unmount");
        destroy = await runHtmlIntoSandbox(sandbox, container, htmlContent, basename);
      } else {
        setoEvent.next({ name: "SETO_HTML_FETCH_ERROR" });
        throw new Error(`html entry fetch error: ${htmlRes.status} ${htmlRes.statusText}`);
      }
      setoEvent.next({ name: "SETO_HTML_LOADED" });
      onLoad?.();
    } catch (e) {
      if (e?.message?.includes("unmount")) {
        setoEvent.next({ name: "SETO_HTML_UNMOUT_BEFORE_LOAD" });
      } else {
        setoEvent.next({
          name: "SETO_HTML_ERROR",
          param: {
            message: e?.message,
            stack: e?.stack,
            unmount: typeof unmounted !== "undefined" && unmounted?.current ? 1 /* UNMOUNTING */ : 0 /* MOUNTED */
          }
        });
        setoError.next(e);
        onError ? onError(e) : setError(e);
      }
    }
    return () => {
      clearEffect.current?.();
    };
  }, []);
  useEffect5(
    () => () => {
      clearEffect.current?.();
      unmounted.current = true;
    },
    []
  );
  if (error) {
    if (error instanceof Error) {
      throw error;
    } else {
      throw new Error(error);
    }
  }
  return /* @__PURE__ */ React4.createElement(
    "div",
    {
      ref: containerRef,
      style: {
        display: "contents"
      }
    }
  );
}

// ../../../libs/sdk/src/rc/mf-sandbox.tsx
import React5, { memo, useRef as useRef4, useState as useState3 } from "react";
function createInitCode2(varName) {
  return `
    (async function({ webpackInitShare, webpackShareScopes, done, error }) {
      try{
        await webpackInitShare('default');
        const container = window.${varName};
        await container.init(webpackShareScopes.default);
        done()
      } catch(e){
        error(e)
      }
    })(__external);`;
}
function createGetCode2(varName, expose) {
  return `
    (async function ({ done, error }) {
      try{
        const container = window.${varName};
        const factory = await container.get(${expose});
        done(await factory());
      } catch(e){
        error(e);
      }
    })(__external)`;
}
async function doPrefetch2(options, { props, url }) {
  if (options.method === "GET") {
    const fetchUrl = new Function("props", "url", `return ${`\`${options.prefetch}\``}`)(props, url);
    return (await fetch(fetchUrl)).json();
  }
  if (options.method === "POST") {
    const urlObj = new URL(options.prefetch);
    const data = {};
    urlObj.searchParams.forEach((val, k) => {
      data[k] = new Function("props", "url", `return ${`\`${val}\``}`)(props, url);
    });
    return fetch(urlObj.origin + urlObj.pathname, {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(data)
    }).then((res) => res.json());
  }
  return null;
}
function MFSandbox({
  entry,
  varName,
  expose,
  props,
  prefetchOption,
  rawRuntimeOptions = {},
  onLoad,
  onError
}) {
  const [sandbox] = useState3(() => new BaseSandbox({}));
  const [_ready, setReady] = useState3(false);
  const CompRef = useRef4(null);
  const [preFetch, setPreFetch] = useState3(null);
  const [error, setError] = useState3(null);
  const startTime = useRef4(0);
  if (error) {
    if (error instanceof Error) {
      throw error;
    } else {
      throw new Error(error);
    }
  }
  use_async_effect_default(async () => {
    try {
      const url = new URL(location.href);
      if (prefetchOption?.prefetch) {
        const promise = doPrefetch2(prefetchOption, {
          props,
          url
        });
        setPreFetch(promise);
      }
      await sandbox.createReady;
      sandbox.initIframe(transformRumtimeOptions(rawRuntimeOptions)).then(() => {
        setoEvent.next({ name: "SETO_INITIFRAME_DONE" });
      }).catch((e) => {
        setoEvent.next({ name: "SETO_INITIFRAME_ERROR" });
        setoError.next(e);
      });
      await sandbox.ready;
      setoEvent.next({ name: "SETO_MF_ENTRY_START" });
      startTime.current = performance.now();
      await sandbox.loadScript(entry);
      setoEvent.next({ name: "SETO_MF_ENTRY_DONE" });
      await new Promise((res, rej) => {
        sandbox.runCode(
          {
            content: createInitCode2(varName)
          },
          {
            // eslint-disable-next-line camelcase
            webpackInitShare: __webpack_init_sharing__,
            // eslint-disable-next-line camelcase
            webpackShareScopes: __webpack_share_scopes__,
            done: res,
            error: rej
          }
        );
      });
      setoEvent.next({ name: "SETO_MF_INIT_DONE" });
      const modExport = await new Promise((res, rej) => {
        sandbox.runCode(
          {
            content: createGetCode2(varName, JSON.stringify(expose))
          },
          {
            done: res,
            error: rej
          }
        );
      });
      setoEvent.next({ name: "SETO_MF_EXPOSE_DONE" });
      CompRef.current = memo(modExport.default);
      setReady(true);
      onLoad?.();
    } catch (e) {
      setoEvent.next({ name: "SETO_MF_ERROR", param: { message: e?.message, stack: e?.stack } });
      setoError.next(e);
      if (onError) {
        onError(e);
      } else {
        setError(e);
      }
    }
    return () => {
      setoEvent.next({ name: "SETO_MF_UNMOUNT" });
      sandbox.destroy();
    };
  }, []);
  return CompRef.current ? React5.createElement(CompRef.current, { ...props, prefetchPromise: preFetch, startTime: startTime.current }) : /* @__PURE__ */ React5.createElement(React5.Fragment, null);
}

// ../../../libs/resolver/src/utils/cache.ts
var cacheMap = /* @__PURE__ */ new Map();
var addScripeCache = (url, script) => {
  cacheMap.set(url, script);
};
var hasScripeCache = (url) => cacheMap.has(url);
var getScriptByCache = (url) => cacheMap.get(url);
var clearScriptCache = () => {
  cacheMap.clear();
};

// ../../../libs/resolver/src/consts/env.ts
var packageVersion = "2.0.0-beta.6";

// ../../../libs/resolver/src/utils/slardar.ts
var slardarCDNAddress = "https://sf16-short-va.bytedapm.com/slardar/fe/sdk-web/browser.maliva.js";
var slardarBid = "dynamic_load_mf_sdk";
var slardarGlobalName = "__loadMFSDK";
var getEnv = () => {
  if (globalInitParams?.idc.toLocaleLowerCase() === "cn") {
    return window.location.hostname.includes("boe") ? "boe" : "production";
  }
  return window.location.hostname.includes("bos") ? "boe" : "production";
};
var initSlardar = (params) => {
  const script = document.createElement("script");
  script.id = "@ies/dynamic_load_modefederation";
  script.text = `;(function (w, d, u, b, n, pc, ga, ae, po, s, p, e, t, pp) {pc = 'precollect';ga
    = 'getAttribute';ae = 'addEventListener';po = 'PerformanceObserver';s = function
    (m) {p = [].slice.call(arguments);p.push(Date.now(), location.href);(m == pc ?
    s.p.a : s.q).push(p)};s.q = [];s.p = { a: [] };w[n] = s;e =
    document.createElement('script');e.src = u + '?bid=' + b + '&globalName=' +
    n;e.crossOrigin = u.indexOf('sdk-web') > 0 ? 'anonymous' : 'use-credentials';
    d.head.appendChild(e);
    if (ae in w)
    {s.pcErr = function (e) {e = e || w.event;t = e.target || e.srcElement;if (t
    instanceof Element || t instanceof HTMLElement) {if (t[ga]('integrity'))
    {w[n](pc, 'sri', t[ga]('href') || t[ga]('src'))} else {w[n](pc, 'st', { tagName:
    t.tagName, url: t[ga]('href') || t[ga]('src') })}} else {w[n](pc, 'err', e.error)}};s.pcRej = function (e) {e = e || w.event;w[n](pc, 'reject',
    e.reason || (e.detail && e.detail.reason))};w[ae]('error', s.pcErr,
    true);w[ae]('unhandledrejection', s.pcRej,
    true);};if('PerformanceLongTaskTiming' in w) {pp = s.pp = { entries: []
    };pp.observer = new PerformanceObserver(function (l) {pp.entries =
    pp.entries.concat(l.getEntries())});pp.observer.observe({ entryTypes:
    ['longtask']
    })}})(window,document,'${slardarCDNAddress}','${slardarBid}','${slardarGlobalName}')`;
  document.head.append(script);
  const slardarConfig = {
    bid: slardarBid,
    release: packageVersion,
    env: getEnv()
  };
  window?.[slardarGlobalName]?.("init", slardarConfig);
  window?.[slardarGlobalName]?.("context.merge", { ...params, packageVersion });
  window?.[slardarGlobalName]?.("start");
};
var report = (eventName, params, metrics) => {
  const realParams = {};
  try {
    params && Object.keys(params).forEach((key) => {
      if (["object", "function"].includes(typeof params[key]) && params[key]) {
        realParams[key] = JSON.stringify(params[key]);
      } else {
        realParams[key] = params[key];
      }
    });
  } catch (error) {
  }
  window?.[slardarGlobalName]?.("sendEvent", {
    name: eventName,
    metrics,
    categories: realParams
    // psm在全局注册过，无需重复注入
  });
  globalInitParams?.psm && window?.[slardarGlobalName]?.("sendEvent", {
    name: globalInitParams?.psm,
    metrics,
    categories: { eventName, ...realParams || {} }
  });
  globalInitParams?.slardarInstance?.("sendEvent", {
    name: eventName,
    metrics,
    categories: realParams
  });
};

// ../../../libs/resolver/src/utils/index.ts
var prefixUrl = "/seto_manifest/app_id/";
var suffixUrl = "/mf_manifest.json";
function getManifestPath(appId) {
  return `${prefixUrl}${appId}${suffixUrl}`;
}
async function loadManifest(appId, domain = "", retry = 3) {
  if (retry === 0) {
    throw new Error(`Failed to load manifest for app ${appId}`);
  }
  const path = getManifestPath(appId);
  const url = !domain || /^\/|^http(s)?/.test(domain) ? `${domain}${path}` : `https://${domain}${path}`;
  try {
    const res = await fetchManifest(url);
    return res;
  } catch (e) {
    return loadManifest(appId, domain, retry - 1);
  }
}
async function fetchManifest(url) {
  return fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  }).then((res) => res.json()).then((resJson) => resJson.modules).catch((e) => {
    throw e;
  });
}
var createScriptV2 = (url, async = true) => {
  if (hasScripeCache(url)) {
    return getScriptByCache(url);
  }
  const element = document.createElement("script");
  element.src = url;
  element.type = "text/javascript";
  element.async = async;
  return element;
};
var replaceCDNDomain = (url, sep, domain) => {
  const arr = url.split(sep);
  return domain.includes("https") ? "" : `https://${domain}/${sep}${arr[1]}`;
};
var downloadResourceByScript = (parent, url, opts) => {
  const { cdnBackupConfig, async, onLoadBefore, onResourceDownloaded, onResourceDownFailed } = opts || {};
  return new Promise((resolve2, reject) => {
    if (hasScripeCache(url)) {
      onResourceDownloaded?.(true);
      return resolve2();
    }
    const _CDNRetryList = [...(cdnBackupConfig?.backupCDNList || []).reverse()];
    const retryLoadScript = (remoteEntry) => {
      if (!remoteEntry) {
        return reject?.(new Error("remoteEntry can not be empty!"));
      }
      let startDownloadTime = 0;
      const script = createScriptV2(remoteEntry, async);
      const handleReportResourceDownLoadTime = (type) => {
        report("resource_download_time", {
          remoteEntry,
          type,
          time: Date.now() - startDownloadTime
        });
      };
      script.addEventListener("load", () => {
        onResourceDownloaded?.(false);
        addScripeCache(script.src, script);
        report("resource_download_success", { remoteEntry });
        handleReportResourceDownLoadTime("success");
        if (script.src !== url) {
          try {
            report("switch_cdn_retry_success", {
              ...cdnBackupConfig || {},
              successfulCDN: script.src
            });
          } catch (error) {
          }
        }
        return resolve2();
      });
      script.addEventListener("error", (err) => {
        if (!_CDNRetryList.length) {
          onResourceDownFailed?.(err);
          handleReportResourceDownLoadTime("failed");
          report("resource_download_failed", {
            remoteEntry,
            errMsg: err.error || err.message
          });
          script.remove();
          return reject?.(err);
        }
        let newCDNDomain = _CDNRetryList.pop();
        while (newCDNDomain && _CDNRetryList.length >= 0 && script.src.includes(newCDNDomain)) {
          newCDNDomain = _CDNRetryList.pop();
        }
        retryLoadScript(
          replaceCDNDomain(script.src, cdnBackupConfig?.scmCustomPrefix, newCDNDomain)
        );
        script.remove();
      });
      onLoadBefore?.(remoteEntry);
      startDownloadTime = Date.now();
      parent.append(script);
    };
    retryLoadScript(url);
  });
};

// ../../../libs/resolver/src/utils/mfModule.ts
var loadModule = (scope, module) => new Promise(async (resolve2, reject) => {
  try {
    await __webpack_init_sharing__("default");
    const container = window[scope];
    try {
      await container.init(__webpack_share_scopes__.default);
    } catch (error) {
      console.error(`${scope} as container has been initialized`, error);
    }
    const factory = await container.get(`./${module}`);
    const Module = factory();
    return resolve2(Module);
  } catch (error) {
    return reject(error);
  }
});
var getModule = async (remoteEntry, name, expose, opts) => {
  const { onError, onLoaded } = opts || {};
  let step = "downloadResource" /* DownloadResource */;
  const startTime = Date.now();
  let result = "";
  let module = null;
  try {
    await downloadResourceByScript(document.head, remoteEntry, opts);
    step = "loadModule" /* LoadModule */;
    module = await loadModule(name, expose);
    onLoaded?.();
    result = "success" /* Success */;
    report("mf_load_success", {
      remoteEntry,
      name,
      expose,
      async: opts?.async?.toString?.()
    });
  } catch (error) {
    onError?.(error, { step, remoteEntry, name, expose });
    report("mf_load_failed", {
      remoteEntry,
      name,
      expose,
      async: opts?.async?.toString?.(),
      step
    });
    result = "failed" /* failed */;
    module = null;
  } finally {
    report("mf_load_time", {
      remoteEntry,
      name,
      expose,
      async: opts?.async?.toString?.(),
      result,
      step,
      time: Date.now() - startTime
    });
    return module;
  }
};

// ../../../libs/resolver/src/utils/preload.ts
var preload = (resources, opt) => {
  const preloadSourceList = resources.filter((item) => item.remoteEntry);
  if (!preloadSourceList?.length) {
    return;
  }
  const { onPreloadSuccessCallback, onPreloadFailed, interval } = opt || {};
  const handleReportCommenPreloadEvent = (eventName, resource) => {
    report(eventName, {
      remoteEntry: resource.remoteEntry,
      name: resource.name,
      expose: resource.expose,
      async: resource?.async?.toString?.()
    });
  };
  const handlePreloadSuccess = (resource) => {
    onPreloadSuccessCallback?.(resource);
    handleReportCommenPreloadEvent("preload_success", resource);
  };
  const handlePreloadFailed = (resource, err) => {
    onPreloadFailed?.(resource, err);
    handleReportCommenPreloadEvent("preload_failed", resource);
  };
  const loadResource = (parent, resource) => {
    downloadResourceByScript(parent, resource.remoteEntry, {
      cdnBackupConfig: resource?.cdnBackupConfig,
      async: resource?.async,
      onResourceDownloaded: (isCache) => {
        resource?.onResourceDownloaded?.(isCache);
        loadModule(resource?.name, resource?.expose).then(() => handlePreloadSuccess?.(resource)).catch((err) => handlePreloadFailed(resource, err));
      },
      onResourceDownFailed: (err) => handlePreloadFailed(resource, err)
    });
  };
  if (interval) {
    let index = 0;
    const { length } = preloadSourceList;
    const preloadResource = () => {
      if (index >= length) {
        return;
      }
      const resource = preloadSourceList[index];
      requestIdleCallback(() => loadResource(document.head, resource));
      setTimeout(() => {
        index += 1;
        preloadResource();
      }, interval);
    };
    preloadResource();
  } else {
    const fragment = new DocumentFragment();
    preloadSourceList.forEach((resource) => loadResource(fragment, resource));
    requestIdleCallback(() => document.head.appendChild(fragment));
  }
};

// ../../../libs/resolver/src/hooks/useGetModule.ts
import { useMemo, useState as useState4 } from "react";
var useGetModule = (params) => {
  const { remoteEntry, name, expose, ...restParams } = params;
  const [ready, setReady] = useState4(false);
  const [failed, setFailed] = useState4(false);
  const module = useMemo(
    () => getModule(remoteEntry, name, expose, {
      ...restParams || {},
      onLoaded: () => {
        setReady(true);
        restParams?.onLoaded?.();
      },
      onError: (...args) => {
        setFailed(true);
        restParams?.onError?.(...args);
      }
    }),
    [remoteEntry, name, expose]
  );
  return {
    module,
    ready,
    failed
  };
};

// ../../../libs/resolver/src/hoc/withDynamicLoadModefederation.tsx
import React6, { forwardRef, Suspense as Suspense3, useMemo as useMemo2 } from "react";
function withDynamicLoadModeFederation(opts) {
  const { errorFallbackRender, loadingFallbackRender } = opts;
  const funcComponent = forwardRef((props, ref) => {
    const { module, ready, failed } = useGetModule(opts);
    const RemoteComponent = useMemo2(() => {
      if (!module) {
        return null;
      }
      return React6.lazy(() => module);
    }, [module]);
    if (failed) {
      return errorFallbackRender?.() || null;
    }
    if (!(ready && RemoteComponent)) {
      return loadingFallbackRender?.() || null;
    }
    return /* @__PURE__ */ React6.createElement(Suspense3, { fallback: loadingFallbackRender?.() || null }, /* @__PURE__ */ React6.createElement(RemoteComponent, { ...props, ref }));
  });
  funcComponent.displayName = "withDynamicLoadModeFederation";
  return funcComponent;
}

// ../../../libs/resolver/src/resolvers/mfResolver.ts
var globalInitParams;
var init = (params) => {
  globalInitParams = params;
  const { slardarInstance, ...restParams } = params;
  initSlardar(restParams);
  report("init", restParams);
};
var setExternalSlardarInstance = (slardarInstance) => {
  globalInitParams.slardarInstance = slardarInstance;
};
var destory = () => {
  clearScriptCache();
};
var mfResolver_default = {
  preload,
  getModule,
  useGetModule,
  withDynamicLoadModeFederation,
  init,
  setExternalSlardarInstance,
  destory
};

// ../../../libs/resolver/src/resolvers/index.tsx
var initPromise;
function createInitResolver(loader2) {
  window.__SETO_MANIFEST_MAP__ = window.__SETO_MANIFEST_MAP__ || {};
  return function initResolver(manifests, initOptions) {
    const { manifestDomain = "" } = initOptions || {};
    const cacheKey = `${manifests}${manifestDomain}`;
    if (typeof manifests === "string") {
      const cacheManifest = window.__SETO_MANIFEST_MAP__?.[cacheKey];
      if (cacheManifest instanceof Array) {
        initPromise = Promise.resolve(cacheManifest);
      } else if (cacheManifest instanceof Promise) {
        initPromise = cacheManifest;
      } else {
        initPromise = loadManifest(manifests, manifestDomain);
        window.__SETO_MANIFEST_MAP__[cacheKey] = initPromise;
      }
      initPromise.then((manifestItems) => {
        loader2.updateManifestRegistry(manifestItems);
        !(cacheManifest instanceof Array) && (window.__SETO_MANIFEST_MAP__[cacheKey] = manifestItems);
        return manifestItems;
      }).catch((e) => {
        console.log(e);
      });
    } else {
      initPromise = Promise.resolve(manifests);
      loader2.updateManifestRegistry(manifests);
    }
    return initPromise;
  };
}

// ../../../libs/sdk/src/index.tsx
import React7, { Suspense as Suspense4 } from "react";
var initial = createInitResolver(loader);
var init2 = (manifests, options) => {
  const { cssOrigin: cssOrigin2 } = window?.__SETO_SANDBOX__ || {};
  if (options?.attachCssToCurSandbox || cssOrigin2 !== window?.__SETO_SANDBOX__) {
    context_default.setCssOrigin(cssOrigin2);
  }
  return initial(manifests, options);
};
function loadManifest2(manifests) {
  updateManifest(manifests);
}
function updateManifest(manifests) {
  registry.updateManifestItems(manifests);
}
function resolve(path, exportType) {
  return loader.resolve(path, exportType);
}
function resolveReactComp(path, appId, domain, exportType = "react-comp") {
  const Comp = React7.lazy(async () => {
    await init2(appId, { manifestDomain: domain });
    return { default: await loader.resolve(path, exportType) };
  });
  const WrappedComp = (props) => {
    const { fallback, suspenseFallback } = props ?? {};
    return /* @__PURE__ */ React7.createElement(Suspense4, { fallback: suspenseFallback || fallback || null }, /* @__PURE__ */ React7.createElement(Comp, { ...props }));
  };
  return WrappedComp;
}
var src_default = new Proxy(
  {},
  {
    get(_wrapped, modName) {
      const manifestItem = registry.getItem(modName);
      if (manifestItem) {
        return new Proxy(
          {},
          {
            get(_mod, subPath) {
              const typeOrObject = manifestItem.exportTypes[subPath];
              const type = typeof typeOrObject === "string" ? typeOrObject : typeOrObject?.type;
              if (!type) {
                return;
              }
              const path = `${modName}/${subPath}`;
              return resolve(path);
            },
            ownKeys() {
              return Object.keys(manifestItem.exportTypes);
            },
            getOwnPropertyDescriptor(_k) {
              return {
                enumerable: true,
                configurable: true
              };
            }
          }
        );
      }
    },
    ownKeys() {
      return registry.getModNames();
    },
    getOwnPropertyDescriptor(_k) {
      return {
        enumerable: true,
        configurable: true
      };
    }
  }
);

// index.ts
var prebuilt_default = src_default;
export {
  BaseSandbox,
  EffectRunner,
  error_boundary_default as ErrorBoundary,
  Extractor,
  HTMLSandbox,
  MAX_CAPACITY,
  MFSandbox,
  ManifestRegistry,
  ModuleExtractor,
  ModuleLoader,
  Pool,
  ReactCompExtractor,
  SETO_CREATE_ELEMENT_TAG,
  SandboxPoolRuntime,
  TagStrategy,
  applyPlugin,
  createInitResolver,
  createLocalStorageWithPrefix,
  createOverridableProxyFactory,
  createUseApi,
  prebuilt_default as default,
  doPrefetch,
  generateId,
  sandbox_pool_mf_default as getSandboxPoolMfRuntime,
  globalHooks,
  init2 as init,
  isObject,
  loadManifest2 as loadManifest,
  loader,
  mfResolver_default as mfResolver,
  proxyKeys,
  resolve,
  resolveReactComp,
  setGlobalHooks,
  setoError,
  setoEvent,
  time33,
  transformRumtimeOptions,
  updateManifest
};