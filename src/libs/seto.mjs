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

// ../../../node_modules/rxjs/dist/cjs/internal/util/isFunction.js
var require_isFunction = __commonJS({
  "../../../node_modules/rxjs/dist/cjs/internal/util/isFunction.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.isFunction = void 0;
    function isFunction3(value) {
      return typeof value === "function";
    }
    exports2.isFunction = isFunction3;
  }
});

// ../../../node_modules/rxjs/dist/cjs/internal/util/createErrorClass.js
var require_createErrorClass = __commonJS({
  "../../../node_modules/rxjs/dist/cjs/internal/util/createErrorClass.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.createErrorClass = void 0;
    function createErrorClass(createImpl) {
      var _super = function(instance) {
        Error.call(instance);
        instance.stack = new Error().stack;
      };
      var ctorFunc = createImpl(_super);
      ctorFunc.prototype = Object.create(Error.prototype);
      ctorFunc.prototype.constructor = ctorFunc;
      return ctorFunc;
    }
    exports2.createErrorClass = createErrorClass;
  }
});

// ../../../node_modules/rxjs/dist/cjs/internal/util/UnsubscriptionError.js
var require_UnsubscriptionError = __commonJS({
  "../../../node_modules/rxjs/dist/cjs/internal/util/UnsubscriptionError.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.UnsubscriptionError = void 0;
    var createErrorClass_1 = require_createErrorClass();
    exports2.UnsubscriptionError = createErrorClass_1.createErrorClass(function(_super) {
      return function UnsubscriptionErrorImpl(errors) {
        _super(this);
        this.message = errors ? errors.length + " errors occurred during unsubscription:\n" + errors.map(function(err, i) {
          return i + 1 + ") " + err.toString();
        }).join("\n  ") : "";
        this.name = "UnsubscriptionError";
        this.errors = errors;
      };
    });
  }
});

// ../../../node_modules/rxjs/dist/cjs/internal/util/arrRemove.js
var require_arrRemove = __commonJS({
  "../../../node_modules/rxjs/dist/cjs/internal/util/arrRemove.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.arrRemove = void 0;
    function arrRemove(arr, item) {
      if (arr) {
        var index = arr.indexOf(item);
        0 <= index && arr.splice(index, 1);
      }
    }
    exports2.arrRemove = arrRemove;
  }
});

// ../../../node_modules/rxjs/dist/cjs/internal/Subscription.js
var require_Subscription = __commonJS({
  "../../../node_modules/rxjs/dist/cjs/internal/Subscription.js"(exports2) {
    "use strict";
    var __values = exports2 && exports2.__values || function(o) {
      var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
      if (m)
        return m.call(o);
      if (o && typeof o.length === "number")
        return {
          next: function() {
            if (o && i >= o.length)
              o = void 0;
            return { value: o && o[i++], done: !o };
          }
        };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    };
    var __read = exports2 && exports2.__read || function(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m)
        return o;
      var i = m.call(o), r, ar = [], e;
      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
          ar.push(r.value);
      } catch (error) {
        e = { error };
      } finally {
        try {
          if (r && !r.done && (m = i["return"]))
            m.call(i);
        } finally {
          if (e)
            throw e.error;
        }
      }
      return ar;
    };
    var __spreadArray = exports2 && exports2.__spreadArray || function(to, from) {
      for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
      return to;
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.isSubscription = exports2.EMPTY_SUBSCRIPTION = exports2.Subscription = void 0;
    var isFunction_1 = require_isFunction();
    var UnsubscriptionError_1 = require_UnsubscriptionError();
    var arrRemove_1 = require_arrRemove();
    var Subscription2 = function() {
      function Subscription3(initialTeardown) {
        this.initialTeardown = initialTeardown;
        this.closed = false;
        this._parentage = null;
        this._finalizers = null;
      }
      Subscription3.prototype.unsubscribe = function() {
        var e_1, _a, e_2, _b;
        var errors;
        if (!this.closed) {
          this.closed = true;
          var _parentage = this._parentage;
          if (_parentage) {
            this._parentage = null;
            if (Array.isArray(_parentage)) {
              try {
                for (var _parentage_1 = __values(_parentage), _parentage_1_1 = _parentage_1.next(); !_parentage_1_1.done; _parentage_1_1 = _parentage_1.next()) {
                  var parent_1 = _parentage_1_1.value;
                  parent_1.remove(this);
                }
              } catch (e_1_1) {
                e_1 = { error: e_1_1 };
              } finally {
                try {
                  if (_parentage_1_1 && !_parentage_1_1.done && (_a = _parentage_1.return))
                    _a.call(_parentage_1);
                } finally {
                  if (e_1)
                    throw e_1.error;
                }
              }
            } else {
              _parentage.remove(this);
            }
          }
          var initialFinalizer = this.initialTeardown;
          if (isFunction_1.isFunction(initialFinalizer)) {
            try {
              initialFinalizer();
            } catch (e) {
              errors = e instanceof UnsubscriptionError_1.UnsubscriptionError ? e.errors : [e];
            }
          }
          var _finalizers = this._finalizers;
          if (_finalizers) {
            this._finalizers = null;
            try {
              for (var _finalizers_1 = __values(_finalizers), _finalizers_1_1 = _finalizers_1.next(); !_finalizers_1_1.done; _finalizers_1_1 = _finalizers_1.next()) {
                var finalizer = _finalizers_1_1.value;
                try {
                  execFinalizer(finalizer);
                } catch (err) {
                  errors = errors !== null && errors !== void 0 ? errors : [];
                  if (err instanceof UnsubscriptionError_1.UnsubscriptionError) {
                    errors = __spreadArray(__spreadArray([], __read(errors)), __read(err.errors));
                  } else {
                    errors.push(err);
                  }
                }
              }
            } catch (e_2_1) {
              e_2 = { error: e_2_1 };
            } finally {
              try {
                if (_finalizers_1_1 && !_finalizers_1_1.done && (_b = _finalizers_1.return))
                  _b.call(_finalizers_1);
              } finally {
                if (e_2)
                  throw e_2.error;
              }
            }
          }
          if (errors) {
            throw new UnsubscriptionError_1.UnsubscriptionError(errors);
          }
        }
      };
      Subscription3.prototype.add = function(teardown) {
        var _a;
        if (teardown && teardown !== this) {
          if (this.closed) {
            execFinalizer(teardown);
          } else {
            if (teardown instanceof Subscription3) {
              if (teardown.closed || teardown._hasParent(this)) {
                return;
              }
              teardown._addParent(this);
            }
            (this._finalizers = (_a = this._finalizers) !== null && _a !== void 0 ? _a : []).push(teardown);
          }
        }
      };
      Subscription3.prototype._hasParent = function(parent) {
        var _parentage = this._parentage;
        return _parentage === parent || Array.isArray(_parentage) && _parentage.includes(parent);
      };
      Subscription3.prototype._addParent = function(parent) {
        var _parentage = this._parentage;
        this._parentage = Array.isArray(_parentage) ? (_parentage.push(parent), _parentage) : _parentage ? [_parentage, parent] : parent;
      };
      Subscription3.prototype._removeParent = function(parent) {
        var _parentage = this._parentage;
        if (_parentage === parent) {
          this._parentage = null;
        } else if (Array.isArray(_parentage)) {
          arrRemove_1.arrRemove(_parentage, parent);
        }
      };
      Subscription3.prototype.remove = function(teardown) {
        var _finalizers = this._finalizers;
        _finalizers && arrRemove_1.arrRemove(_finalizers, teardown);
        if (teardown instanceof Subscription3) {
          teardown._removeParent(this);
        }
      };
      Subscription3.EMPTY = function() {
        var empty = new Subscription3();
        empty.closed = true;
        return empty;
      }();
      return Subscription3;
    }();
    exports2.Subscription = Subscription2;
    exports2.EMPTY_SUBSCRIPTION = Subscription2.EMPTY;
    function isSubscription(value) {
      return value instanceof Subscription2 || value && "closed" in value && isFunction_1.isFunction(value.remove) && isFunction_1.isFunction(value.add) && isFunction_1.isFunction(value.unsubscribe);
    }
    exports2.isSubscription = isSubscription;
    function execFinalizer(finalizer) {
      if (isFunction_1.isFunction(finalizer)) {
        finalizer();
      } else {
        finalizer.unsubscribe();
      }
    }
  }
});

// ../../../node_modules/rxjs/dist/cjs/internal/config.js
var require_config = __commonJS({
  "../../../node_modules/rxjs/dist/cjs/internal/config.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.config = void 0;
    exports2.config = {
      onUnhandledError: null,
      onStoppedNotification: null,
      Promise: void 0,
      useDeprecatedSynchronousErrorHandling: false,
      useDeprecatedNextContext: false
    };
  }
});

// ../../../node_modules/rxjs/dist/cjs/internal/scheduler/timeoutProvider.js
var require_timeoutProvider = __commonJS({
  "../../../node_modules/rxjs/dist/cjs/internal/scheduler/timeoutProvider.js"(exports2) {
    "use strict";
    var __read = exports2 && exports2.__read || function(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m)
        return o;
      var i = m.call(o), r, ar = [], e;
      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
          ar.push(r.value);
      } catch (error) {
        e = { error };
      } finally {
        try {
          if (r && !r.done && (m = i["return"]))
            m.call(i);
        } finally {
          if (e)
            throw e.error;
        }
      }
      return ar;
    };
    var __spreadArray = exports2 && exports2.__spreadArray || function(to, from) {
      for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
      return to;
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.timeoutProvider = void 0;
    exports2.timeoutProvider = {
      setTimeout: function(handler, timeout) {
        var args = [];
        for (var _i = 2; _i < arguments.length; _i++) {
          args[_i - 2] = arguments[_i];
        }
        var delegate = exports2.timeoutProvider.delegate;
        if (delegate === null || delegate === void 0 ? void 0 : delegate.setTimeout) {
          return delegate.setTimeout.apply(delegate, __spreadArray([handler, timeout], __read(args)));
        }
        return setTimeout.apply(void 0, __spreadArray([handler, timeout], __read(args)));
      },
      clearTimeout: function(handle) {
        var delegate = exports2.timeoutProvider.delegate;
        return ((delegate === null || delegate === void 0 ? void 0 : delegate.clearTimeout) || clearTimeout)(handle);
      },
      delegate: void 0
    };
  }
});

// ../../../node_modules/rxjs/dist/cjs/internal/util/reportUnhandledError.js
var require_reportUnhandledError = __commonJS({
  "../../../node_modules/rxjs/dist/cjs/internal/util/reportUnhandledError.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.reportUnhandledError = void 0;
    var config_1 = require_config();
    var timeoutProvider_1 = require_timeoutProvider();
    function reportUnhandledError(err) {
      timeoutProvider_1.timeoutProvider.setTimeout(function() {
        var onUnhandledError = config_1.config.onUnhandledError;
        if (onUnhandledError) {
          onUnhandledError(err);
        } else {
          throw err;
        }
      });
    }
    exports2.reportUnhandledError = reportUnhandledError;
  }
});

// ../../../node_modules/rxjs/dist/cjs/internal/util/noop.js
var require_noop = __commonJS({
  "../../../node_modules/rxjs/dist/cjs/internal/util/noop.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.noop = void 0;
    function noop2() {
    }
    exports2.noop = noop2;
  }
});

// ../../../node_modules/rxjs/dist/cjs/internal/NotificationFactories.js
var require_NotificationFactories = __commonJS({
  "../../../node_modules/rxjs/dist/cjs/internal/NotificationFactories.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.createNotification = exports2.nextNotification = exports2.errorNotification = exports2.COMPLETE_NOTIFICATION = void 0;
    exports2.COMPLETE_NOTIFICATION = function() {
      return createNotification("C", void 0, void 0);
    }();
    function errorNotification(error) {
      return createNotification("E", void 0, error);
    }
    exports2.errorNotification = errorNotification;
    function nextNotification(value) {
      return createNotification("N", value, void 0);
    }
    exports2.nextNotification = nextNotification;
    function createNotification(kind, value, error) {
      return {
        kind,
        value,
        error
      };
    }
    exports2.createNotification = createNotification;
  }
});

// ../../../node_modules/rxjs/dist/cjs/internal/util/errorContext.js
var require_errorContext = __commonJS({
  "../../../node_modules/rxjs/dist/cjs/internal/util/errorContext.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.captureError = exports2.errorContext = void 0;
    var config_1 = require_config();
    var context = null;
    function errorContext(cb) {
      if (config_1.config.useDeprecatedSynchronousErrorHandling) {
        var isRoot = !context;
        if (isRoot) {
          context = { errorThrown: false, error: null };
        }
        cb();
        if (isRoot) {
          var _a = context, errorThrown = _a.errorThrown, error = _a.error;
          context = null;
          if (errorThrown) {
            throw error;
          }
        }
      } else {
        cb();
      }
    }
    exports2.errorContext = errorContext;
    function captureError(err) {
      if (config_1.config.useDeprecatedSynchronousErrorHandling && context) {
        context.errorThrown = true;
        context.error = err;
      }
    }
    exports2.captureError = captureError;
  }
});

// ../../../node_modules/rxjs/dist/cjs/internal/Subscriber.js
var require_Subscriber = __commonJS({
  "../../../node_modules/rxjs/dist/cjs/internal/Subscriber.js"(exports2) {
    "use strict";
    var __extends = exports2 && exports2.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2)
            if (Object.prototype.hasOwnProperty.call(b2, p))
              d2[p] = b2[p];
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        if (typeof b !== "function" && b !== null)
          throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.EMPTY_OBSERVER = exports2.SafeSubscriber = exports2.Subscriber = void 0;
    var isFunction_1 = require_isFunction();
    var Subscription_1 = require_Subscription();
    var config_1 = require_config();
    var reportUnhandledError_1 = require_reportUnhandledError();
    var noop_1 = require_noop();
    var NotificationFactories_1 = require_NotificationFactories();
    var timeoutProvider_1 = require_timeoutProvider();
    var errorContext_1 = require_errorContext();
    var Subscriber = function(_super) {
      __extends(Subscriber2, _super);
      function Subscriber2(destination) {
        var _this = _super.call(this) || this;
        _this.isStopped = false;
        if (destination) {
          _this.destination = destination;
          if (Subscription_1.isSubscription(destination)) {
            destination.add(_this);
          }
        } else {
          _this.destination = exports2.EMPTY_OBSERVER;
        }
        return _this;
      }
      Subscriber2.create = function(next, error, complete) {
        return new SafeSubscriber(next, error, complete);
      };
      Subscriber2.prototype.next = function(value) {
        if (this.isStopped) {
          handleStoppedNotification(NotificationFactories_1.nextNotification(value), this);
        } else {
          this._next(value);
        }
      };
      Subscriber2.prototype.error = function(err) {
        if (this.isStopped) {
          handleStoppedNotification(NotificationFactories_1.errorNotification(err), this);
        } else {
          this.isStopped = true;
          this._error(err);
        }
      };
      Subscriber2.prototype.complete = function() {
        if (this.isStopped) {
          handleStoppedNotification(NotificationFactories_1.COMPLETE_NOTIFICATION, this);
        } else {
          this.isStopped = true;
          this._complete();
        }
      };
      Subscriber2.prototype.unsubscribe = function() {
        if (!this.closed) {
          this.isStopped = true;
          _super.prototype.unsubscribe.call(this);
          this.destination = null;
        }
      };
      Subscriber2.prototype._next = function(value) {
        this.destination.next(value);
      };
      Subscriber2.prototype._error = function(err) {
        try {
          this.destination.error(err);
        } finally {
          this.unsubscribe();
        }
      };
      Subscriber2.prototype._complete = function() {
        try {
          this.destination.complete();
        } finally {
          this.unsubscribe();
        }
      };
      return Subscriber2;
    }(Subscription_1.Subscription);
    exports2.Subscriber = Subscriber;
    var _bind = Function.prototype.bind;
    function bind(fn, thisArg) {
      return _bind.call(fn, thisArg);
    }
    var ConsumerObserver = function() {
      function ConsumerObserver2(partialObserver) {
        this.partialObserver = partialObserver;
      }
      ConsumerObserver2.prototype.next = function(value) {
        var partialObserver = this.partialObserver;
        if (partialObserver.next) {
          try {
            partialObserver.next(value);
          } catch (error) {
            handleUnhandledError(error);
          }
        }
      };
      ConsumerObserver2.prototype.error = function(err) {
        var partialObserver = this.partialObserver;
        if (partialObserver.error) {
          try {
            partialObserver.error(err);
          } catch (error) {
            handleUnhandledError(error);
          }
        } else {
          handleUnhandledError(err);
        }
      };
      ConsumerObserver2.prototype.complete = function() {
        var partialObserver = this.partialObserver;
        if (partialObserver.complete) {
          try {
            partialObserver.complete();
          } catch (error) {
            handleUnhandledError(error);
          }
        }
      };
      return ConsumerObserver2;
    }();
    var SafeSubscriber = function(_super) {
      __extends(SafeSubscriber2, _super);
      function SafeSubscriber2(observerOrNext, error, complete) {
        var _this = _super.call(this) || this;
        var partialObserver;
        if (isFunction_1.isFunction(observerOrNext) || !observerOrNext) {
          partialObserver = {
            next: observerOrNext !== null && observerOrNext !== void 0 ? observerOrNext : void 0,
            error: error !== null && error !== void 0 ? error : void 0,
            complete: complete !== null && complete !== void 0 ? complete : void 0
          };
        } else {
          var context_1;
          if (_this && config_1.config.useDeprecatedNextContext) {
            context_1 = Object.create(observerOrNext);
            context_1.unsubscribe = function() {
              return _this.unsubscribe();
            };
            partialObserver = {
              next: observerOrNext.next && bind(observerOrNext.next, context_1),
              error: observerOrNext.error && bind(observerOrNext.error, context_1),
              complete: observerOrNext.complete && bind(observerOrNext.complete, context_1)
            };
          } else {
            partialObserver = observerOrNext;
          }
        }
        _this.destination = new ConsumerObserver(partialObserver);
        return _this;
      }
      return SafeSubscriber2;
    }(Subscriber);
    exports2.SafeSubscriber = SafeSubscriber;
    function handleUnhandledError(error) {
      if (config_1.config.useDeprecatedSynchronousErrorHandling) {
        errorContext_1.captureError(error);
      } else {
        reportUnhandledError_1.reportUnhandledError(error);
      }
    }
    function defaultErrorHandler(err) {
      throw err;
    }
    function handleStoppedNotification(notification, subscriber) {
      var onStoppedNotification = config_1.config.onStoppedNotification;
      onStoppedNotification && timeoutProvider_1.timeoutProvider.setTimeout(function() {
        return onStoppedNotification(notification, subscriber);
      });
    }
    exports2.EMPTY_OBSERVER = {
      closed: true,
      next: noop_1.noop,
      error: defaultErrorHandler,
      complete: noop_1.noop
    };
  }
});

// ../../../node_modules/rxjs/dist/cjs/internal/symbol/observable.js
var require_observable = __commonJS({
  "../../../node_modules/rxjs/dist/cjs/internal/symbol/observable.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.observable = void 0;
    exports2.observable = function() {
      return typeof Symbol === "function" && Symbol.observable || "@@observable";
    }();
  }
});

// ../../../node_modules/rxjs/dist/cjs/internal/util/identity.js
var require_identity = __commonJS({
  "../../../node_modules/rxjs/dist/cjs/internal/util/identity.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.identity = void 0;
    function identity2(x) {
      return x;
    }
    exports2.identity = identity2;
  }
});

// ../../../node_modules/rxjs/dist/cjs/internal/util/pipe.js
var require_pipe = __commonJS({
  "../../../node_modules/rxjs/dist/cjs/internal/util/pipe.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.pipeFromArray = exports2.pipe = void 0;
    var identity_1 = require_identity();
    function pipe() {
      var fns = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        fns[_i] = arguments[_i];
      }
      return pipeFromArray(fns);
    }
    exports2.pipe = pipe;
    function pipeFromArray(fns) {
      if (fns.length === 0) {
        return identity_1.identity;
      }
      if (fns.length === 1) {
        return fns[0];
      }
      return function piped(input) {
        return fns.reduce(function(prev, fn) {
          return fn(prev);
        }, input);
      };
    }
    exports2.pipeFromArray = pipeFromArray;
  }
});

// ../../../node_modules/rxjs/dist/cjs/internal/Observable.js
var require_Observable = __commonJS({
  "../../../node_modules/rxjs/dist/cjs/internal/Observable.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.Observable = void 0;
    var Subscriber_1 = require_Subscriber();
    var Subscription_1 = require_Subscription();
    var observable_1 = require_observable();
    var pipe_1 = require_pipe();
    var config_1 = require_config();
    var isFunction_1 = require_isFunction();
    var errorContext_1 = require_errorContext();
    var Observable = function() {
      function Observable2(subscribe) {
        if (subscribe) {
          this._subscribe = subscribe;
        }
      }
      Observable2.prototype.lift = function(operator) {
        var observable = new Observable2();
        observable.source = this;
        observable.operator = operator;
        return observable;
      };
      Observable2.prototype.subscribe = function(observerOrNext, error, complete) {
        var _this = this;
        var subscriber = isSubscriber(observerOrNext) ? observerOrNext : new Subscriber_1.SafeSubscriber(observerOrNext, error, complete);
        errorContext_1.errorContext(function() {
          var _a = _this, operator = _a.operator, source = _a.source;
          subscriber.add(operator ? operator.call(subscriber, source) : source ? _this._subscribe(subscriber) : _this._trySubscribe(subscriber));
        });
        return subscriber;
      };
      Observable2.prototype._trySubscribe = function(sink) {
        try {
          return this._subscribe(sink);
        } catch (err) {
          sink.error(err);
        }
      };
      Observable2.prototype.forEach = function(next, promiseCtor) {
        var _this = this;
        promiseCtor = getPromiseCtor(promiseCtor);
        return new promiseCtor(function(resolve2, reject) {
          var subscriber = new Subscriber_1.SafeSubscriber({
            next: function(value) {
              try {
                next(value);
              } catch (err) {
                reject(err);
                subscriber.unsubscribe();
              }
            },
            error: reject,
            complete: resolve2
          });
          _this.subscribe(subscriber);
        });
      };
      Observable2.prototype._subscribe = function(subscriber) {
        var _a;
        return (_a = this.source) === null || _a === void 0 ? void 0 : _a.subscribe(subscriber);
      };
      Observable2.prototype[observable_1.observable] = function() {
        return this;
      };
      Observable2.prototype.pipe = function() {
        var operations = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          operations[_i] = arguments[_i];
        }
        return pipe_1.pipeFromArray(operations)(this);
      };
      Observable2.prototype.toPromise = function(promiseCtor) {
        var _this = this;
        promiseCtor = getPromiseCtor(promiseCtor);
        return new promiseCtor(function(resolve2, reject) {
          var value;
          _this.subscribe(function(x) {
            return value = x;
          }, function(err) {
            return reject(err);
          }, function() {
            return resolve2(value);
          });
        });
      };
      Observable2.create = function(subscribe) {
        return new Observable2(subscribe);
      };
      return Observable2;
    }();
    exports2.Observable = Observable;
    function getPromiseCtor(promiseCtor) {
      var _a;
      return (_a = promiseCtor !== null && promiseCtor !== void 0 ? promiseCtor : config_1.config.Promise) !== null && _a !== void 0 ? _a : Promise;
    }
    function isObserver(value) {
      return value && isFunction_1.isFunction(value.next) && isFunction_1.isFunction(value.error) && isFunction_1.isFunction(value.complete);
    }
    function isSubscriber(value) {
      return value && value instanceof Subscriber_1.Subscriber || isObserver(value) && Subscription_1.isSubscription(value);
    }
  }
});

// ../../../node_modules/rxjs/dist/cjs/internal/util/lift.js
var require_lift = __commonJS({
  "../../../node_modules/rxjs/dist/cjs/internal/util/lift.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.operate = exports2.hasLift = void 0;
    var isFunction_1 = require_isFunction();
    function hasLift(source) {
      return isFunction_1.isFunction(source === null || source === void 0 ? void 0 : source.lift);
    }
    exports2.hasLift = hasLift;
    function operate(init3) {
      return function(source) {
        if (hasLift(source)) {
          return source.lift(function(liftedSource) {
            try {
              return init3(liftedSource, this);
            } catch (err) {
              this.error(err);
            }
          });
        }
        throw new TypeError("Unable to lift unknown Observable type");
      };
    }
    exports2.operate = operate;
  }
});

// ../../../node_modules/rxjs/dist/cjs/internal/operators/OperatorSubscriber.js
var require_OperatorSubscriber = __commonJS({
  "../../../node_modules/rxjs/dist/cjs/internal/operators/OperatorSubscriber.js"(exports2) {
    "use strict";
    var __extends = exports2 && exports2.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2)
            if (Object.prototype.hasOwnProperty.call(b2, p))
              d2[p] = b2[p];
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        if (typeof b !== "function" && b !== null)
          throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.OperatorSubscriber = exports2.createOperatorSubscriber = void 0;
    var Subscriber_1 = require_Subscriber();
    function createOperatorSubscriber(destination, onNext, onComplete, onError, onFinalize) {
      return new OperatorSubscriber(destination, onNext, onComplete, onError, onFinalize);
    }
    exports2.createOperatorSubscriber = createOperatorSubscriber;
    var OperatorSubscriber = function(_super) {
      __extends(OperatorSubscriber2, _super);
      function OperatorSubscriber2(destination, onNext, onComplete, onError, onFinalize, shouldUnsubscribe) {
        var _this = _super.call(this, destination) || this;
        _this.onFinalize = onFinalize;
        _this.shouldUnsubscribe = shouldUnsubscribe;
        _this._next = onNext ? function(value) {
          try {
            onNext(value);
          } catch (err) {
            destination.error(err);
          }
        } : _super.prototype._next;
        _this._error = onError ? function(err) {
          try {
            onError(err);
          } catch (err2) {
            destination.error(err2);
          } finally {
            this.unsubscribe();
          }
        } : _super.prototype._error;
        _this._complete = onComplete ? function() {
          try {
            onComplete();
          } catch (err) {
            destination.error(err);
          } finally {
            this.unsubscribe();
          }
        } : _super.prototype._complete;
        return _this;
      }
      OperatorSubscriber2.prototype.unsubscribe = function() {
        var _a;
        if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
          var closed_1 = this.closed;
          _super.prototype.unsubscribe.call(this);
          !closed_1 && ((_a = this.onFinalize) === null || _a === void 0 ? void 0 : _a.call(this));
        }
      };
      return OperatorSubscriber2;
    }(Subscriber_1.Subscriber);
    exports2.OperatorSubscriber = OperatorSubscriber;
  }
});

// ../../../node_modules/rxjs/dist/cjs/internal/operators/refCount.js
var require_refCount = __commonJS({
  "../../../node_modules/rxjs/dist/cjs/internal/operators/refCount.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.refCount = void 0;
    var lift_1 = require_lift();
    var OperatorSubscriber_1 = require_OperatorSubscriber();
    function refCount() {
      return lift_1.operate(function(source, subscriber) {
        var connection = null;
        source._refCount++;
        var refCounter = OperatorSubscriber_1.createOperatorSubscriber(subscriber, void 0, void 0, void 0, function() {
          if (!source || source._refCount <= 0 || 0 < --source._refCount) {
            connection = null;
            return;
          }
          var sharedConnection = source._connection;
          var conn = connection;
          connection = null;
          if (sharedConnection && (!conn || sharedConnection === conn)) {
            sharedConnection.unsubscribe();
          }
          subscriber.unsubscribe();
        });
        source.subscribe(refCounter);
        if (!refCounter.closed) {
          connection = source.connect();
        }
      });
    }
    exports2.refCount = refCount;
  }
});

// ../../../node_modules/rxjs/dist/cjs/internal/observable/ConnectableObservable.js
var require_ConnectableObservable = __commonJS({
  "../../../node_modules/rxjs/dist/cjs/internal/observable/ConnectableObservable.js"(exports2) {
    "use strict";
    var __extends = exports2 && exports2.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2)
            if (Object.prototype.hasOwnProperty.call(b2, p))
              d2[p] = b2[p];
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        if (typeof b !== "function" && b !== null)
          throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.ConnectableObservable = void 0;
    var Observable_1 = require_Observable();
    var Subscription_1 = require_Subscription();
    var refCount_1 = require_refCount();
    var OperatorSubscriber_1 = require_OperatorSubscriber();
    var lift_1 = require_lift();
    var ConnectableObservable = function(_super) {
      __extends(ConnectableObservable2, _super);
      function ConnectableObservable2(source, subjectFactory) {
        var _this = _super.call(this) || this;
        _this.source = source;
        _this.subjectFactory = subjectFactory;
        _this._subject = null;
        _this._refCount = 0;
        _this._connection = null;
        if (lift_1.hasLift(source)) {
          _this.lift = source.lift;
        }
        return _this;
      }
      ConnectableObservable2.prototype._subscribe = function(subscriber) {
        return this.getSubject().subscribe(subscriber);
      };
      ConnectableObservable2.prototype.getSubject = function() {
        var subject = this._subject;
        if (!subject || subject.isStopped) {
          this._subject = this.subjectFactory();
        }
        return this._subject;
      };
      ConnectableObservable2.prototype._teardown = function() {
        this._refCount = 0;
        var _connection = this._connection;
        this._subject = this._connection = null;
        _connection === null || _connection === void 0 ? void 0 : _connection.unsubscribe();
      };
      ConnectableObservable2.prototype.connect = function() {
        var _this = this;
        var connection = this._connection;
        if (!connection) {
          connection = this._connection = new Subscription_1.Subscription();
          var subject_1 = this.getSubject();
          connection.add(this.source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subject_1, void 0, function() {
            _this._teardown();
            subject_1.complete();
          }, function(err) {
            _this._teardown();
            subject_1.error(err);
          }, function() {
            return _this._teardown();
          })));
          if (connection.closed) {
            this._connection = null;
            connection = Subscription_1.Subscription.EMPTY;
          }
        }
        return connection;
      };
      ConnectableObservable2.prototype.refCount = function() {
        return refCount_1.refCount()(this);
      };
      return ConnectableObservable2;
    }(Observable_1.Observable);
    exports2.ConnectableObservable = ConnectableObservable;
  }
});

// ../../../node_modules/rxjs/dist/cjs/internal/scheduler/performanceTimestampProvider.js
var require_performanceTimestampProvider = __commonJS({
  "../../../node_modules/rxjs/dist/cjs/internal/scheduler/performanceTimestampProvider.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.performanceTimestampProvider = void 0;
    exports2.performanceTimestampProvider = {
      now: function() {
        return (exports2.performanceTimestampProvider.delegate || performance).now();
      },
      delegate: void 0
    };
  }
});

// ../../../node_modules/rxjs/dist/cjs/internal/scheduler/animationFrameProvider.js
var require_animationFrameProvider = __commonJS({
  "../../../node_modules/rxjs/dist/cjs/internal/scheduler/animationFrameProvider.js"(exports2) {
    "use strict";
    var __read = exports2 && exports2.__read || function(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m)
        return o;
      var i = m.call(o), r, ar = [], e;
      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
          ar.push(r.value);
      } catch (error) {
        e = { error };
      } finally {
        try {
          if (r && !r.done && (m = i["return"]))
            m.call(i);
        } finally {
          if (e)
            throw e.error;
        }
      }
      return ar;
    };
    var __spreadArray = exports2 && exports2.__spreadArray || function(to, from) {
      for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
      return to;
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.animationFrameProvider = void 0;
    var Subscription_1 = require_Subscription();
    exports2.animationFrameProvider = {
      schedule: function(callback) {
        var request = requestAnimationFrame;
        var cancel = cancelAnimationFrame;
        var delegate = exports2.animationFrameProvider.delegate;
        if (delegate) {
          request = delegate.requestAnimationFrame;
          cancel = delegate.cancelAnimationFrame;
        }
        var handle = request(function(timestamp) {
          cancel = void 0;
          callback(timestamp);
        });
        return new Subscription_1.Subscription(function() {
          return cancel === null || cancel === void 0 ? void 0 : cancel(handle);
        });
      },
      requestAnimationFrame: function() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }
        var delegate = exports2.animationFrameProvider.delegate;
        return ((delegate === null || delegate === void 0 ? void 0 : delegate.requestAnimationFrame) || requestAnimationFrame).apply(void 0, __spreadArray([], __read(args)));
      },
      cancelAnimationFrame: function() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }
        var delegate = exports2.animationFrameProvider.delegate;
        return ((delegate === null || delegate === void 0 ? void 0 : delegate.cancelAnimationFrame) || cancelAnimationFrame).apply(void 0, __spreadArray([], __read(args)));
      },
      delegate: void 0
    };
  }
});

// ../../../node_modules/rxjs/dist/cjs/internal/observable/dom/animationFrames.js
var require_animationFrames = __commonJS({
  "../../../node_modules/rxjs/dist/cjs/internal/observable/dom/animationFrames.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.animationFrames = void 0;
    var Observable_1 = require_Observable();
    var performanceTimestampProvider_1 = require_performanceTimestampProvider();
    var animationFrameProvider_1 = require_animationFrameProvider();
    function animationFrames(timestampProvider) {
      return timestampProvider ? animationFramesFactory(timestampProvider) : DEFAULT_ANIMATION_FRAMES;
    }
    exports2.animationFrames = animationFrames;
    function animationFramesFactory(timestampProvider) {
      return new Observable_1.Observable(function(subscriber) {
        var provider = timestampProvider || performanceTimestampProvider_1.performanceTimestampProvider;
        var start = provider.now();
        var id = 0;
        var run = function() {
          if (!subscriber.closed) {
            id = animationFrameProvider_1.animationFrameProvider.requestAnimationFrame(function(timestamp) {
              id = 0;
              var now = provider.now();
              subscriber.next({
                timestamp: timestampProvider ? now : timestamp,
                elapsed: now - start
              });
              run();
            });
          }
        };
        run();
        return function() {
          if (id) {
            animationFrameProvider_1.animationFrameProvider.cancelAnimationFrame(id);
          }
        };
      });
    }
    var DEFAULT_ANIMATION_FRAMES = animationFramesFactory();
  }
});

// ../../../node_modules/rxjs/dist/cjs/internal/util/ObjectUnsubscribedError.js
var require_ObjectUnsubscribedError = __commonJS({
  "../../../node_modules/rxjs/dist/cjs/internal/util/ObjectUnsubscribedError.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.ObjectUnsubscribedError = void 0;
    var createErrorClass_1 = require_createErrorClass();
    exports2.ObjectUnsubscribedError = createErrorClass_1.createErrorClass(function(_super) {
      return function ObjectUnsubscribedErrorImpl() {
        _super(this);
        this.name = "ObjectUnsubscribedError";
        this.message = "object unsubscribed";
      };
    });
  }
});

// ../../../node_modules/rxjs/dist/cjs/internal/Subject.js
var require_Subject = __commonJS({
  "../../../node_modules/rxjs/dist/cjs/internal/Subject.js"(exports2) {
    "use strict";
    var __extends = exports2 && exports2.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2)
            if (Object.prototype.hasOwnProperty.call(b2, p))
              d2[p] = b2[p];
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        if (typeof b !== "function" && b !== null)
          throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __values = exports2 && exports2.__values || function(o) {
      var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
      if (m)
        return m.call(o);
      if (o && typeof o.length === "number")
        return {
          next: function() {
            if (o && i >= o.length)
              o = void 0;
            return { value: o && o[i++], done: !o };
          }
        };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.AnonymousSubject = exports2.Subject = void 0;
    var Observable_1 = require_Observable();
    var Subscription_1 = require_Subscription();
    var ObjectUnsubscribedError_1 = require_ObjectUnsubscribedError();
    var arrRemove_1 = require_arrRemove();
    var errorContext_1 = require_errorContext();
    var Subject3 = function(_super) {
      __extends(Subject4, _super);
      function Subject4() {
        var _this = _super.call(this) || this;
        _this.closed = false;
        _this.currentObservers = null;
        _this.observers = [];
        _this.isStopped = false;
        _this.hasError = false;
        _this.thrownError = null;
        return _this;
      }
      Subject4.prototype.lift = function(operator) {
        var subject = new AnonymousSubject(this, this);
        subject.operator = operator;
        return subject;
      };
      Subject4.prototype._throwIfClosed = function() {
        if (this.closed) {
          throw new ObjectUnsubscribedError_1.ObjectUnsubscribedError();
        }
      };
      Subject4.prototype.next = function(value) {
        var _this = this;
        errorContext_1.errorContext(function() {
          var e_1, _a;
          _this._throwIfClosed();
          if (!_this.isStopped) {
            if (!_this.currentObservers) {
              _this.currentObservers = Array.from(_this.observers);
            }
            try {
              for (var _b = __values(_this.currentObservers), _c = _b.next(); !_c.done; _c = _b.next()) {
                var observer = _c.value;
                observer.next(value);
              }
            } catch (e_1_1) {
              e_1 = { error: e_1_1 };
            } finally {
              try {
                if (_c && !_c.done && (_a = _b.return))
                  _a.call(_b);
              } finally {
                if (e_1)
                  throw e_1.error;
              }
            }
          }
        });
      };
      Subject4.prototype.error = function(err) {
        var _this = this;
        errorContext_1.errorContext(function() {
          _this._throwIfClosed();
          if (!_this.isStopped) {
            _this.hasError = _this.isStopped = true;
            _this.thrownError = err;
            var observers = _this.observers;
            while (observers.length) {
              observers.shift().error(err);
            }
          }
        });
      };
      Subject4.prototype.complete = function() {
        var _this = this;
        errorContext_1.errorContext(function() {
          _this._throwIfClosed();
          if (!_this.isStopped) {
            _this.isStopped = true;
            var observers = _this.observers;
            while (observers.length) {
              observers.shift().complete();
            }
          }
        });
      };
      Subject4.prototype.unsubscribe = function() {
        this.isStopped = this.closed = true;
        this.observers = this.currentObservers = null;
      };
      Object.defineProperty(Subject4.prototype, "observed", {
        get: function() {
          var _a;
          return ((_a = this.observers) === null || _a === void 0 ? void 0 : _a.length) > 0;
        },
        enumerable: false,
        configurable: true
      });
      Subject4.prototype._trySubscribe = function(subscriber) {
        this._throwIfClosed();
        return _super.prototype._trySubscribe.call(this, subscriber);
      };
      Subject4.prototype._subscribe = function(subscriber) {
        this._throwIfClosed();
        this._checkFinalizedStatuses(subscriber);
        return this._innerSubscribe(subscriber);
      };
      Subject4.prototype._innerSubscribe = function(subscriber) {
        var _this = this;
        var _a = this, hasError = _a.hasError, isStopped = _a.isStopped, observers = _a.observers;
        if (hasError || isStopped) {
          return Subscription_1.EMPTY_SUBSCRIPTION;
        }
        this.currentObservers = null;
        observers.push(subscriber);
        return new Subscription_1.Subscription(function() {
          _this.currentObservers = null;
          arrRemove_1.arrRemove(observers, subscriber);
        });
      };
      Subject4.prototype._checkFinalizedStatuses = function(subscriber) {
        var _a = this, hasError = _a.hasError, thrownError = _a.thrownError, isStopped = _a.isStopped;
        if (hasError) {
          subscriber.error(thrownError);
        } else if (isStopped) {
          subscriber.complete();
        }
      };
      Subject4.prototype.asObservable = function() {
        var observable = new Observable_1.Observable();
        observable.source = this;
        return observable;
      };
      Subject4.create = function(destination, source) {
        return new AnonymousSubject(destination, source);
      };
      return Subject4;
    }(Observable_1.Observable);
    exports2.Subject = Subject3;
    var AnonymousSubject = function(_super) {
      __extends(AnonymousSubject2, _super);
      function AnonymousSubject2(destination, source) {
        var _this = _super.call(this) || this;
        _this.destination = destination;
        _this.source = source;
        return _this;
      }
      AnonymousSubject2.prototype.next = function(value) {
        var _a, _b;
        (_b = (_a = this.destination) === null || _a === void 0 ? void 0 : _a.next) === null || _b === void 0 ? void 0 : _b.call(_a, value);
      };
      AnonymousSubject2.prototype.error = function(err) {
        var _a, _b;
        (_b = (_a = this.destination) === null || _a === void 0 ? void 0 : _a.error) === null || _b === void 0 ? void 0 : _b.call(_a, err);
      };
      AnonymousSubject2.prototype.complete = function() {
        var _a, _b;
        (_b = (_a = this.destination) === null || _a === void 0 ? void 0 : _a.complete) === null || _b === void 0 ? void 0 : _b.call(_a);
      };
      AnonymousSubject2.prototype._subscribe = function(subscriber) {
        var _a, _b;
        return (_b = (_a = this.source) === null || _a === void 0 ? void 0 : _a.subscribe(subscriber)) !== null && _b !== void 0 ? _b : Subscription_1.EMPTY_SUBSCRIPTION;
      };
      return AnonymousSubject2;
    }(Subject3);
    exports2.AnonymousSubject = AnonymousSubject;
  }
});

// ../../../node_modules/rxjs/dist/cjs/internal/BehaviorSubject.js
var require_BehaviorSubject = __commonJS({
  "../../../node_modules/rxjs/dist/cjs/internal/BehaviorSubject.js"(exports2) {
    "use strict";
    var __extends = exports2 && exports2.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2)
            if (Object.prototype.hasOwnProperty.call(b2, p))
              d2[p] = b2[p];
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        if (typeof b !== "function" && b !== null)
          throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.BehaviorSubject = void 0;
    var Subject_1 = require_Subject();
    var BehaviorSubject = function(_super) {
      __extends(BehaviorSubject2, _super);
      function BehaviorSubject2(_value) {
        var _this = _super.call(this) || this;
        _this._value = _value;
        return _this;
      }
      Object.defineProperty(BehaviorSubject2.prototype, "value", {
        get: function() {
          return this.getValue();
        },
        enumerable: false,
        configurable: true
      });
      BehaviorSubject2.prototype._subscribe = function(subscriber) {
        var subscription = _super.prototype._subscribe.call(this, subscriber);
        !subscription.closed && subscriber.next(this._value);
        return subscription;
      };
      BehaviorSubject2.prototype.getValue = function() {
        var _a = this, hasError = _a.hasError, thrownError = _a.thrownError, _value = _a._value;
        if (hasError) {
          throw thrownError;
        }
        this._throwIfClosed();
        return _value;
      };
      BehaviorSubject2.prototype.next = function(value) {
        _super.prototype.next.call(this, this._value = value);
      };
      return BehaviorSubject2;
    }(Subject_1.Subject);
    exports2.BehaviorSubject = BehaviorSubject;
  }
});

// ../../../node_modules/rxjs/dist/cjs/internal/scheduler/dateTimestampProvider.js
var require_dateTimestampProvider = __commonJS({
  "../../../node_modules/rxjs/dist/cjs/internal/scheduler/dateTimestampProvider.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.dateTimestampProvider = void 0;
    exports2.dateTimestampProvider = {
      now: function() {
        return (exports2.dateTimestampProvider.delegate || Date).now();
      },
      delegate: void 0
    };
  }
});

// ../../../node_modules/rxjs/dist/cjs/internal/ReplaySubject.js
var require_ReplaySubject = __commonJS({
  "../../../node_modules/rxjs/dist/cjs/internal/ReplaySubject.js"(exports2) {
    "use strict";
    var __extends = exports2 && exports2.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2)
            if (Object.prototype.hasOwnProperty.call(b2, p))
              d2[p] = b2[p];
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        if (typeof b !== "function" && b !== null)
          throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.ReplaySubject = void 0;
    var Subject_1 = require_Subject();
    var dateTimestampProvider_1 = require_dateTimestampProvider();
    var ReplaySubject = function(_super) {
      __extends(ReplaySubject2, _super);
      function ReplaySubject2(_bufferSize, _windowTime, _timestampProvider) {
        if (_bufferSize === void 0) {
          _bufferSize = Infinity;
        }
        if (_windowTime === void 0) {
          _windowTime = Infinity;
        }
        if (_timestampProvider === void 0) {
          _timestampProvider = dateTimestampProvider_1.dateTimestampProvider;
        }
        var _this = _super.call(this) || this;
        _this._bufferSize = _bufferSize;
        _this._windowTime = _windowTime;
        _this._timestampProvider = _timestampProvider;
        _this._buffer = [];
        _this._infiniteTimeWindow = true;
        _this._infiniteTimeWindow = _windowTime === Infinity;
        _this._bufferSize = Math.max(1, _bufferSize);
        _this._windowTime = Math.max(1, _windowTime);
        return _this;
      }
      ReplaySubject2.prototype.next = function(value) {
        var _a = this, isStopped = _a.isStopped, _buffer = _a._buffer, _infiniteTimeWindow = _a._infiniteTimeWindow, _timestampProvider = _a._timestampProvider, _windowTime = _a._windowTime;
        if (!isStopped) {
          _buffer.push(value);
          !_infiniteTimeWindow && _buffer.push(_timestampProvider.now() + _windowTime);
        }
        this._trimBuffer();
        _super.prototype.next.call(this, value);
      };
      ReplaySubject2.prototype._subscribe = function(subscriber) {
        this._throwIfClosed();
        this._trimBuffer();
        var subscription = this._innerSubscribe(subscriber);
        var _a = this, _infiniteTimeWindow = _a._infiniteTimeWindow, _buffer = _a._buffer;
        var copy = _buffer.slice();
        for (var i = 0; i < copy.length && !subscriber.closed; i += _infiniteTimeWindow ? 1 : 2) {
          subscriber.next(copy[i]);
        }
        this._checkFinalizedStatuses(subscriber);
        return subscription;
      };
      ReplaySubject2.prototype._trimBuffer = function() {
        var _a = this, _bufferSize = _a._bufferSize, _timestampProvider = _a._timestampProvider, _buffer = _a._buffer, _infiniteTimeWindow = _a._infiniteTimeWindow;
        var adjustedBufferSize = (_infiniteTimeWindow ? 1 : 2) * _bufferSize;
        _bufferSize < Infinity && adjustedBufferSize < _buffer.length && _buffer.splice(0, _buffer.length - adjustedBufferSize);
        if (!_infiniteTimeWindow) {
          var now = _timestampProvider.now();
          var last = 0;
          for (var i = 1; i < _buffer.length && _buffer[i] <= now; i += 2) {
            last = i;
          }
          last && _buffer.splice(0, last + 1);
        }
      };
      return ReplaySubject2;
    }(Subject_1.Subject);
    exports2.ReplaySubject = ReplaySubject;
  }
});

// ../../../node_modules/rxjs/dist/cjs/internal/AsyncSubject.js
var require_AsyncSubject = __commonJS({
  "../../../node_modules/rxjs/dist/cjs/internal/AsyncSubject.js"(exports2) {
    "use strict";
    var __extends = exports2 && exports2.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2)
            if (Object.prototype.hasOwnProperty.call(b2, p))
              d2[p] = b2[p];
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        if (typeof b !== "function" && b !== null)
          throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.AsyncSubject = void 0;
    var Subject_1 = require_Subject();
    var AsyncSubject = function(_super) {
      __extends(AsyncSubject2, _super);
      function AsyncSubject2() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._value = null;
        _this._hasValue = false;
        _this._isComplete = false;
        return _this;
      }
      AsyncSubject2.prototype._checkFinalizedStatuses = function(subscriber) {
        var _a = this, hasError = _a.hasError, _hasValue = _a._hasValue, _value = _a._value, thrownError = _a.thrownError, isStopped = _a.isStopped, _isComplete = _a._isComplete;
        if (hasError) {
          subscriber.error(thrownError);
        } else if (isStopped || _isComplete) {
          _hasValue && subscriber.next(_value);
          subscriber.complete();
        }
      };
      AsyncSubject2.prototype.next = function(value) {
        if (!this.isStopped) {
          this._value = value;
          this._hasValue = true;
        }
      };
      AsyncSubject2.prototype.complete = function() {
        var _a = this, _hasValue = _a._hasValue, _value = _a._value, _isComplete = _a._isComplete;
        if (!_isComplete) {
          this._isComplete = true;
          _hasValue && _super.prototype.next.call(this, _value);
          _super.prototype.complete.call(this);
        }
      };
      return AsyncSubject2;
    }(Subject_1.Subject);
    exports2.AsyncSubject = AsyncSubject;
  }
});

// ../../../node_modules/rxjs/dist/cjs/internal/scheduler/Action.js
var require_Action = __commonJS({
  "../../../node_modules/rxjs/dist/cjs/internal/scheduler/Action.js"(exports2) {
    "use strict";
    var __extends = exports2 && exports2.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2)
            if (Object.prototype.hasOwnProperty.call(b2, p))
              d2[p] = b2[p];
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        if (typeof b !== "function" && b !== null)
          throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.Action = void 0;
    var Subscription_1 = require_Subscription();
    var Action = function(_super) {
      __extends(Action2, _super);
      function Action2(scheduler, work) {
        return _super.call(this) || this;
      }
      Action2.prototype.schedule = function(state, delay) {
        if (delay === void 0) {
          delay = 0;
        }
        return this;
      };
      return Action2;
    }(Subscription_1.Subscription);
    exports2.Action = Action;
  }
});

// ../../../node_modules/rxjs/dist/cjs/internal/scheduler/intervalProvider.js
var require_intervalProvider = __commonJS({
  "../../../node_modules/rxjs/dist/cjs/internal/scheduler/intervalProvider.js"(exports2) {
    "use strict";
    var __read = exports2 && exports2.__read || function(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m)
        return o;
      var i = m.call(o), r, ar = [], e;
      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
          ar.push(r.value);
      } catch (error) {
        e = { error };
      } finally {
        try {
          if (r && !r.done && (m = i["return"]))
            m.call(i);
        } finally {
          if (e)
            throw e.error;
        }
      }
      return ar;
    };
    var __spreadArray = exports2 && exports2.__spreadArray || function(to, from) {
      for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
      return to;
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.intervalProvider = void 0;
    exports2.intervalProvider = {
      setInterval: function(handler, timeout) {
        var args = [];
        for (var _i = 2; _i < arguments.length; _i++) {
          args[_i - 2] = arguments[_i];
        }
        var delegate = exports2.intervalProvider.delegate;
        if (delegate === null || delegate === void 0 ? void 0 : delegate.setInterval) {
          return delegate.setInterval.apply(delegate, __spreadArray([handler, timeout], __read(args)));
        }
        return setInterval.apply(void 0, __spreadArray([handler, timeout], __read(args)));
      },
      clearInterval: function(handle) {
        var delegate = exports2.intervalProvider.delegate;
        return ((delegate === null || delegate === void 0 ? void 0 : delegate.clearInterval) || clearInterval)(handle);
      },
      delegate: void 0
    };
  }
});

// ../../../node_modules/rxjs/dist/cjs/internal/scheduler/AsyncAction.js
var require_AsyncAction = __commonJS({
  "../../../node_modules/rxjs/dist/cjs/internal/scheduler/AsyncAction.js"(exports2) {
    "use strict";
    var __extends = exports2 && exports2.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2)
            if (Object.prototype.hasOwnProperty.call(b2, p))
              d2[p] = b2[p];
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        if (typeof b !== "function" && b !== null)
          throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.AsyncAction = void 0;
    var Action_1 = require_Action();
    var intervalProvider_1 = require_intervalProvider();
    var arrRemove_1 = require_arrRemove();
    var AsyncAction = function(_super) {
      __extends(AsyncAction2, _super);
      function AsyncAction2(scheduler, work) {
        var _this = _super.call(this, scheduler, work) || this;
        _this.scheduler = scheduler;
        _this.work = work;
        _this.pending = false;
        return _this;
      }
      AsyncAction2.prototype.schedule = function(state, delay) {
        var _a;
        if (delay === void 0) {
          delay = 0;
        }
        if (this.closed) {
          return this;
        }
        this.state = state;
        var id = this.id;
        var scheduler = this.scheduler;
        if (id != null) {
          this.id = this.recycleAsyncId(scheduler, id, delay);
        }
        this.pending = true;
        this.delay = delay;
        this.id = (_a = this.id) !== null && _a !== void 0 ? _a : this.requestAsyncId(scheduler, this.id, delay);
        return this;
      };
      AsyncAction2.prototype.requestAsyncId = function(scheduler, _id, delay) {
        if (delay === void 0) {
          delay = 0;
        }
        return intervalProvider_1.intervalProvider.setInterval(scheduler.flush.bind(scheduler, this), delay);
      };
      AsyncAction2.prototype.recycleAsyncId = function(_scheduler, id, delay) {
        if (delay === void 0) {
          delay = 0;
        }
        if (delay != null && this.delay === delay && this.pending === false) {
          return id;
        }
        if (id != null) {
          intervalProvider_1.intervalProvider.clearInterval(id);
        }
        return void 0;
      };
      AsyncAction2.prototype.execute = function(state, delay) {
        if (this.closed) {
          return new Error("executing a cancelled action");
        }
        this.pending = false;
        var error = this._execute(state, delay);
        if (error) {
          return error;
        } else if (this.pending === false && this.id != null) {
          this.id = this.recycleAsyncId(this.scheduler, this.id, null);
        }
      };
      AsyncAction2.prototype._execute = function(state, _delay) {
        var errored = false;
        var errorValue;
        try {
          this.work(state);
        } catch (e) {
          errored = true;
          errorValue = e ? e : new Error("Scheduled action threw falsy error");
        }
        if (errored) {
          this.unsubscribe();
          return errorValue;
        }
      };
      AsyncAction2.prototype.unsubscribe = function() {
        if (!this.closed) {
          var _a = this, id = _a.id, scheduler = _a.scheduler;
          var actions = scheduler.actions;
          this.work = this.state = this.scheduler = null;
          this.pending = false;
          arrRemove_1.arrRemove(actions, this);
          if (id != null) {
            this.id = this.recycleAsyncId(scheduler, id, null);
          }
          this.delay = null;
          _super.prototype.unsubscribe.call(this);
        }
      };
      return AsyncAction2;
    }(Action_1.Action);
    exports2.AsyncAction = AsyncAction;
  }
});

// ../../../node_modules/rxjs/dist/cjs/internal/util/Immediate.js
var require_Immediate = __commonJS({
  "../../../node_modules/rxjs/dist/cjs/internal/util/Immediate.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.TestTools = exports2.Immediate = void 0;
    var nextHandle = 1;
    var resolved;
    var activeHandles = {};
    function findAndClearHandle(handle) {
      if (handle in activeHandles) {
        delete activeHandles[handle];
        return true;
      }
      return false;
    }
    exports2.Immediate = {
      setImmediate: function(cb) {
        var handle = nextHandle++;
        activeHandles[handle] = true;
        if (!resolved) {
          resolved = Promise.resolve();
        }
        resolved.then(function() {
          return findAndClearHandle(handle) && cb();
        });
        return handle;
      },
      clearImmediate: function(handle) {
        findAndClearHandle(handle);
      }
    };
    exports2.TestTools = {
      pending: function() {
        return Object.keys(activeHandles).length;
      }
    };
  }
});

// ../../../node_modules/rxjs/dist/cjs/internal/scheduler/immediateProvider.js
var require_immediateProvider = __commonJS({
  "../../../node_modules/rxjs/dist/cjs/internal/scheduler/immediateProvider.js"(exports2) {
    "use strict";
    var __read = exports2 && exports2.__read || function(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m)
        return o;
      var i = m.call(o), r, ar = [], e;
      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
          ar.push(r.value);
      } catch (error) {
        e = { error };
      } finally {
        try {
          if (r && !r.done && (m = i["return"]))
            m.call(i);
        } finally {
          if (e)
            throw e.error;
        }
      }
      return ar;
    };
    var __spreadArray = exports2 && exports2.__spreadArray || function(to, from) {
      for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
      return to;
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.immediateProvider = void 0;
    var Immediate_1 = require_Immediate();
    var setImmediate = Immediate_1.Immediate.setImmediate;
    var clearImmediate = Immediate_1.Immediate.clearImmediate;
    exports2.immediateProvider = {
      setImmediate: function() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }
        var delegate = exports2.immediateProvider.delegate;
        return ((delegate === null || delegate === void 0 ? void 0 : delegate.setImmediate) || setImmediate).apply(void 0, __spreadArray([], __read(args)));
      },
      clearImmediate: function(handle) {
        var delegate = exports2.immediateProvider.delegate;
        return ((delegate === null || delegate === void 0 ? void 0 : delegate.clearImmediate) || clearImmediate)(handle);
      },
      delegate: void 0
    };
  }
});

// ../../../node_modules/rxjs/dist/cjs/internal/scheduler/AsapAction.js
var require_AsapAction = __commonJS({
  "../../../node_modules/rxjs/dist/cjs/internal/scheduler/AsapAction.js"(exports2) {
    "use strict";
    var __extends = exports2 && exports2.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2)
            if (Object.prototype.hasOwnProperty.call(b2, p))
              d2[p] = b2[p];
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        if (typeof b !== "function" && b !== null)
          throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.AsapAction = void 0;
    var AsyncAction_1 = require_AsyncAction();
    var immediateProvider_1 = require_immediateProvider();
    var AsapAction = function(_super) {
      __extends(AsapAction2, _super);
      function AsapAction2(scheduler, work) {
        var _this = _super.call(this, scheduler, work) || this;
        _this.scheduler = scheduler;
        _this.work = work;
        return _this;
      }
      AsapAction2.prototype.requestAsyncId = function(scheduler, id, delay) {
        if (delay === void 0) {
          delay = 0;
        }
        if (delay !== null && delay > 0) {
          return _super.prototype.requestAsyncId.call(this, scheduler, id, delay);
        }
        scheduler.actions.push(this);
        return scheduler._scheduled || (scheduler._scheduled = immediateProvider_1.immediateProvider.setImmediate(scheduler.flush.bind(scheduler, void 0)));
      };
      AsapAction2.prototype.recycleAsyncId = function(scheduler, id, delay) {
        var _a;
        if (delay === void 0) {
          delay = 0;
        }
        if (delay != null ? delay > 0 : this.delay > 0) {
          return _super.prototype.recycleAsyncId.call(this, scheduler, id, delay);
        }
        var actions = scheduler.actions;
        if (id != null && ((_a = actions[actions.length - 1]) === null || _a === void 0 ? void 0 : _a.id) !== id) {
          immediateProvider_1.immediateProvider.clearImmediate(id);
          if (scheduler._scheduled === id) {
            scheduler._scheduled = void 0;
          }
        }
        return void 0;
      };
      return AsapAction2;
    }(AsyncAction_1.AsyncAction);
    exports2.AsapAction = AsapAction;
  }
});

// ../../../node_modules/rxjs/dist/cjs/internal/Scheduler.js
var require_Scheduler = __commonJS({
  "../../../node_modules/rxjs/dist/cjs/internal/Scheduler.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.Scheduler = void 0;
    var dateTimestampProvider_1 = require_dateTimestampProvider();
    var Scheduler = function() {
      function Scheduler2(schedulerActionCtor, now) {
        if (now === void 0) {
          now = Scheduler2.now;
        }
        this.schedulerActionCtor = schedulerActionCtor;
        this.now = now;
      }
      Scheduler2.prototype.schedule = function(work, delay, state) {
        if (delay === void 0) {
          delay = 0;
        }
        return new this.schedulerActionCtor(this, work).schedule(state, delay);
      };
      Scheduler2.now = dateTimestampProvider_1.dateTimestampProvider.now;
      return Scheduler2;
    }();
    exports2.Scheduler = Scheduler;
  }
});

// ../../../node_modules/rxjs/dist/cjs/internal/scheduler/AsyncScheduler.js
var require_AsyncScheduler = __commonJS({
  "../../../node_modules/rxjs/dist/cjs/internal/scheduler/AsyncScheduler.js"(exports2) {
    "use strict";
    var __extends = exports2 && exports2.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2)
            if (Object.prototype.hasOwnProperty.call(b2, p))
              d2[p] = b2[p];
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        if (typeof b !== "function" && b !== null)
          throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.AsyncScheduler = void 0;
    var Scheduler_1 = require_Scheduler();
    var AsyncScheduler = function(_super) {
      __extends(AsyncScheduler2, _super);
      function AsyncScheduler2(SchedulerAction, now) {
        if (now === void 0) {
          now = Scheduler_1.Scheduler.now;
        }
        var _this = _super.call(this, SchedulerAction, now) || this;
        _this.actions = [];
        _this._active = false;
        return _this;
      }
      AsyncScheduler2.prototype.flush = function(action) {
        var actions = this.actions;
        if (this._active) {
          actions.push(action);
          return;
        }
        var error;
        this._active = true;
        do {
          if (error = action.execute(action.state, action.delay)) {
            break;
          }
        } while (action = actions.shift());
        this._active = false;
        if (error) {
          while (action = actions.shift()) {
            action.unsubscribe();
          }
          throw error;
        }
      };
      return AsyncScheduler2;
    }(Scheduler_1.Scheduler);
    exports2.AsyncScheduler = AsyncScheduler;
  }
});

// ../../../node_modules/rxjs/dist/cjs/internal/scheduler/AsapScheduler.js
var require_AsapScheduler = __commonJS({
  "../../../node_modules/rxjs/dist/cjs/internal/scheduler/AsapScheduler.js"(exports2) {
    "use strict";
    var __extends = exports2 && exports2.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2)
            if (Object.prototype.hasOwnProperty.call(b2, p))
              d2[p] = b2[p];
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        if (typeof b !== "function" && b !== null)
          throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.AsapScheduler = void 0;
    var AsyncScheduler_1 = require_AsyncScheduler();
    var AsapScheduler = function(_super) {
      __extends(AsapScheduler2, _super);
      function AsapScheduler2() {
        return _super !== null && _super.apply(this, arguments) || this;
      }
      AsapScheduler2.prototype.flush = function(action) {
        this._active = true;
        var flushId = this._scheduled;
        this._scheduled = void 0;
        var actions = this.actions;
        var error;
        action = action || actions.shift();
        do {
          if (error = action.execute(action.state, action.delay)) {
            break;
          }
        } while ((action = actions[0]) && action.id === flushId && actions.shift());
        this._active = false;
        if (error) {
          while ((action = actions[0]) && action.id === flushId && actions.shift()) {
            action.unsubscribe();
          }
          throw error;
        }
      };
      return AsapScheduler2;
    }(AsyncScheduler_1.AsyncScheduler);
    exports2.AsapScheduler = AsapScheduler;
  }
});

// ../../../node_modules/rxjs/dist/cjs/internal/scheduler/asap.js
var require_asap = __commonJS({
  "../../../node_modules/rxjs/dist/cjs/internal/scheduler/asap.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.asap = exports2.asapScheduler = void 0;
    var AsapAction_1 = require_AsapAction();
    var AsapScheduler_1 = require_AsapScheduler();
    exports2.asapScheduler = new AsapScheduler_1.AsapScheduler(AsapAction_1.AsapAction);
    exports2.asap = exports2.asapScheduler;
  }
});

// ../../../node_modules/rxjs/dist/cjs/internal/scheduler/async.js
var require_async = __commonJS({
  "../../../node_modules/rxjs/dist/cjs/internal/scheduler/async.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.async = exports2.asyncScheduler = void 0;
    var AsyncAction_1 = require_AsyncAction();
    var AsyncScheduler_1 = require_AsyncScheduler();
    exports2.asyncScheduler = new AsyncScheduler_1.AsyncScheduler(AsyncAction_1.AsyncAction);
    exports2.async = exports2.asyncScheduler;
  }
});

// ../../../node_modules/rxjs/dist/cjs/internal/scheduler/QueueAction.js
var require_QueueAction = __commonJS({
  "../../../node_modules/rxjs/dist/cjs/internal/scheduler/QueueAction.js"(exports2) {
    "use strict";
    var __extends = exports2 && exports2.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2)
            if (Object.prototype.hasOwnProperty.call(b2, p))
              d2[p] = b2[p];
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        if (typeof b !== "function" && b !== null)
          throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.QueueAction = void 0;
    var AsyncAction_1 = require_AsyncAction();
    var QueueAction = function(_super) {
      __extends(QueueAction2, _super);
      function QueueAction2(scheduler, work) {
        var _this = _super.call(this, scheduler, work) || this;
        _this.scheduler = scheduler;
        _this.work = work;
        return _this;
      }
      QueueAction2.prototype.schedule = function(state, delay) {
        if (delay === void 0) {
          delay = 0;
        }
        if (delay > 0) {
          return _super.prototype.schedule.call(this, state, delay);
        }
        this.delay = delay;
        this.state = state;
        this.scheduler.flush(this);
        return this;
      };
      QueueAction2.prototype.execute = function(state, delay) {
        return delay > 0 || this.closed ? _super.prototype.execute.call(this, state, delay) : this._execute(state, delay);
      };
      QueueAction2.prototype.requestAsyncId = function(scheduler, id, delay) {
        if (delay === void 0) {
          delay = 0;
        }
        if (delay != null && delay > 0 || delay == null && this.delay > 0) {
          return _super.prototype.requestAsyncId.call(this, scheduler, id, delay);
        }
        scheduler.flush(this);
        return 0;
      };
      return QueueAction2;
    }(AsyncAction_1.AsyncAction);
    exports2.QueueAction = QueueAction;
  }
});

// ../../../node_modules/rxjs/dist/cjs/internal/scheduler/QueueScheduler.js
var require_QueueScheduler = __commonJS({
  "../../../node_modules/rxjs/dist/cjs/internal/scheduler/QueueScheduler.js"(exports2) {
    "use strict";
    var __extends = exports2 && exports2.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2)
            if (Object.prototype.hasOwnProperty.call(b2, p))
              d2[p] = b2[p];
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        if (typeof b !== "function" && b !== null)
          throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.QueueScheduler = void 0;
    var AsyncScheduler_1 = require_AsyncScheduler();
    var QueueScheduler = function(_super) {
      __extends(QueueScheduler2, _super);
      function QueueScheduler2() {
        return _super !== null && _super.apply(this, arguments) || this;
      }
      return QueueScheduler2;
    }(AsyncScheduler_1.AsyncScheduler);
    exports2.QueueScheduler = QueueScheduler;
  }
});

// ../../../node_modules/rxjs/dist/cjs/internal/scheduler/queue.js
var require_queue = __commonJS({
  "../../../node_modules/rxjs/dist/cjs/internal/scheduler/queue.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.queue = exports2.queueScheduler = void 0;
    var QueueAction_1 = require_QueueAction();
    var QueueScheduler_1 = require_QueueScheduler();
    exports2.queueScheduler = new QueueScheduler_1.QueueScheduler(QueueAction_1.QueueAction);
    exports2.queue = exports2.queueScheduler;
  }
});

// ../../../node_modules/rxjs/dist/cjs/internal/scheduler/AnimationFrameAction.js
var require_AnimationFrameAction = __commonJS({
  "../../../node_modules/rxjs/dist/cjs/internal/scheduler/AnimationFrameAction.js"(exports2) {
    "use strict";
    var __extends = exports2 && exports2.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2)
            if (Object.prototype.hasOwnProperty.call(b2, p))
              d2[p] = b2[p];
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        if (typeof b !== "function" && b !== null)
          throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.AnimationFrameAction = void 0;
    var AsyncAction_1 = require_AsyncAction();
    var animationFrameProvider_1 = require_animationFrameProvider();
    var AnimationFrameAction = function(_super) {
      __extends(AnimationFrameAction2, _super);
      function AnimationFrameAction2(scheduler, work) {
        var _this = _super.call(this, scheduler, work) || this;
        _this.scheduler = scheduler;
        _this.work = work;
        return _this;
      }
      AnimationFrameAction2.prototype.requestAsyncId = function(scheduler, id, delay) {
        if (delay === void 0) {
          delay = 0;
        }
        if (delay !== null && delay > 0) {
          return _super.prototype.requestAsyncId.call(this, scheduler, id, delay);
        }
        scheduler.actions.push(this);
        return scheduler._scheduled || (scheduler._scheduled = animationFrameProvider_1.animationFrameProvider.requestAnimationFrame(function() {
          return scheduler.flush(void 0);
        }));
      };
      AnimationFrameAction2.prototype.recycleAsyncId = function(scheduler, id, delay) {
        var _a;
        if (delay === void 0) {
          delay = 0;
        }
        if (delay != null ? delay > 0 : this.delay > 0) {
          return _super.prototype.recycleAsyncId.call(this, scheduler, id, delay);
        }
        var actions = scheduler.actions;
        if (id != null && ((_a = actions[actions.length - 1]) === null || _a === void 0 ? void 0 : _a.id) !== id) {
          animationFrameProvider_1.animationFrameProvider.cancelAnimationFrame(id);
          scheduler._scheduled = void 0;
        }
        return void 0;
      };
      return AnimationFrameAction2;
    }(AsyncAction_1.AsyncAction);
    exports2.AnimationFrameAction = AnimationFrameAction;
  }
});

// ../../../node_modules/rxjs/dist/cjs/internal/scheduler/AnimationFrameScheduler.js
var require_AnimationFrameScheduler = __commonJS({
  "../../../node_modules/rxjs/dist/cjs/internal/scheduler/AnimationFrameScheduler.js"(exports2) {
    "use strict";
    var __extends = exports2 && exports2.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2)
            if (Object.prototype.hasOwnProperty.call(b2, p))
              d2[p] = b2[p];
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        if (typeof b !== "function" && b !== null)
          throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.AnimationFrameScheduler = void 0;
    var AsyncScheduler_1 = require_AsyncScheduler();
    var AnimationFrameScheduler = function(_super) {
      __extends(AnimationFrameScheduler2, _super);
      function AnimationFrameScheduler2() {
        return _super !== null && _super.apply(this, arguments) || this;
      }
      AnimationFrameScheduler2.prototype.flush = function(action) {
        this._active = true;
        var flushId = this._scheduled;
        this._scheduled = void 0;
        var actions = this.actions;
        var error;
        action = action || actions.shift();
        do {
          if (error = action.execute(action.state, action.delay)) {
            break;
          }
        } while ((action = actions[0]) && action.id === flushId && actions.shift());
        this._active = false;
        if (error) {
          while ((action = actions[0]) && action.id === flushId && actions.shift()) {
            action.unsubscribe();
          }
          throw error;
        }
      };
      return AnimationFrameScheduler2;
    }(AsyncScheduler_1.AsyncScheduler);
    exports2.AnimationFrameScheduler = AnimationFrameScheduler;
  }
});

// ../../../node_modules/rxjs/dist/cjs/internal/scheduler/animationFrame.js
var require_animationFrame = __commonJS({
  "../../../node_modules/rxjs/dist/cjs/internal/scheduler/animationFrame.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.animationFrame = exports2.animationFrameScheduler = void 0;
    var AnimationFrameAction_1 = require_AnimationFrameAction();
    var AnimationFrameScheduler_1 = require_AnimationFrameScheduler();
    exports2.animationFrameScheduler = new AnimationFrameScheduler_1.AnimationFrameScheduler(AnimationFrameAction_1.AnimationFrameAction);
    exports2.animationFrame = exports2.animationFrameScheduler;
  }
});

// ../../../node_modules/rxjs/dist/cjs/internal/scheduler/VirtualTimeScheduler.js
var require_VirtualTimeScheduler = __commonJS({
  "../../../node_modules/rxjs/dist/cjs/internal/scheduler/VirtualTimeScheduler.js"(exports2) {
    "use strict";
    var __extends = exports2 && exports2.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2)
            if (Object.prototype.hasOwnProperty.call(b2, p))
              d2[p] = b2[p];
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        if (typeof b !== "function" && b !== null)
          throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.VirtualAction = exports2.VirtualTimeScheduler = void 0;
    var AsyncAction_1 = require_AsyncAction();
    var Subscription_1 = require_Subscription();
    var AsyncScheduler_1 = require_AsyncScheduler();
    var VirtualTimeScheduler = function(_super) {
      __extends(VirtualTimeScheduler2, _super);
      function VirtualTimeScheduler2(schedulerActionCtor, maxFrames) {
        if (schedulerActionCtor === void 0) {
          schedulerActionCtor = VirtualAction;
        }
        if (maxFrames === void 0) {
          maxFrames = Infinity;
        }
        var _this = _super.call(this, schedulerActionCtor, function() {
          return _this.frame;
        }) || this;
        _this.maxFrames = maxFrames;
        _this.frame = 0;
        _this.index = -1;
        return _this;
      }
      VirtualTimeScheduler2.prototype.flush = function() {
        var _a = this, actions = _a.actions, maxFrames = _a.maxFrames;
        var error;
        var action;
        while ((action = actions[0]) && action.delay <= maxFrames) {
          actions.shift();
          this.frame = action.delay;
          if (error = action.execute(action.state, action.delay)) {
            break;
          }
        }
        if (error) {
          while (action = actions.shift()) {
            action.unsubscribe();
          }
          throw error;
        }
      };
      VirtualTimeScheduler2.frameTimeFactor = 10;
      return VirtualTimeScheduler2;
    }(AsyncScheduler_1.AsyncScheduler);
    exports2.VirtualTimeScheduler = VirtualTimeScheduler;
    var VirtualAction = function(_super) {
      __extends(VirtualAction2, _super);
      function VirtualAction2(scheduler, work, index) {
        if (index === void 0) {
          index = scheduler.index += 1;
        }
        var _this = _super.call(this, scheduler, work) || this;
        _this.scheduler = scheduler;
        _this.work = work;
        _this.index = index;
        _this.active = true;
        _this.index = scheduler.index = index;
        return _this;
      }
      VirtualAction2.prototype.schedule = function(state, delay) {
        if (delay === void 0) {
          delay = 0;
        }
        if (Number.isFinite(delay)) {
          if (!this.id) {
            return _super.prototype.schedule.call(this, state, delay);
          }
          this.active = false;
          var action = new VirtualAction2(this.scheduler, this.work);
          this.add(action);
          return action.schedule(state, delay);
        } else {
          return Subscription_1.Subscription.EMPTY;
        }
      };
      VirtualAction2.prototype.requestAsyncId = function(scheduler, id, delay) {
        if (delay === void 0) {
          delay = 0;
        }
        this.delay = scheduler.frame + delay;
        var actions = scheduler.actions;
        actions.push(this);
        actions.sort(VirtualAction2.sortActions);
        return 1;
      };
      VirtualAction2.prototype.recycleAsyncId = function(scheduler, id, delay) {
        if (delay === void 0) {
          delay = 0;
        }
        return void 0;
      };
      VirtualAction2.prototype._execute = function(state, delay) {
        if (this.active === true) {
          return _super.prototype._execute.call(this, state, delay);
        }
      };
      VirtualAction2.sortActions = function(a, b) {
        if (a.delay === b.delay) {
          if (a.index === b.index) {
            return 0;
          } else if (a.index > b.index) {
            return 1;
          } else {
            return -1;
          }
        } else if (a.delay > b.delay) {
          return 1;
        } else {
          return -1;
        }
      };
      return VirtualAction2;
    }(AsyncAction_1.AsyncAction);
    exports2.VirtualAction = VirtualAction;
  }
});

// ../../../node_modules/rxjs/dist/cjs/internal/observable/empty.js
var require_empty = __commonJS({
  "../../../node_modules/rxjs/dist/cjs/internal/observable/empty.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.empty = exports2.EMPTY = void 0;
    var Observable_1 = require_Observable();
    exports2.EMPTY = new Observable_1.Observable(function(subscriber) {
      return subscriber.complete();
    });
    function empty(scheduler) {
      return scheduler ? emptyScheduled(scheduler) : exports2.EMPTY;
    }
    exports2.empty = empty;
    function emptyScheduled(scheduler) {
      return new Observable_1.Observable(function(subscriber) {
        return scheduler.schedule(function() {
          return subscriber.complete();
        });
      });
    }
  }
});

// ../../../node_modules/rxjs/dist/cjs/internal/util/isScheduler.js
var require_isScheduler = __commonJS({
  "../../../node_modules/rxjs/dist/cjs/internal/util/isScheduler.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.isScheduler = void 0;
    var isFunction_1 = require_isFunction();
    function isScheduler(value) {
      return value && isFunction_1.isFunction(value.schedule);
    }
    exports2.isScheduler = isScheduler;
  }
});

// ../../../node_modules/rxjs/dist/cjs/internal/util/args.js
var require_args = __commonJS({
  "../../../node_modules/rxjs/dist/cjs/internal/util/args.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.popNumber = exports2.popScheduler = exports2.popResultSelector = void 0;
    var isFunction_1 = require_isFunction();
    var isScheduler_1 = require_isScheduler();
    function last(arr) {
      return arr[arr.length - 1];
    }
    function popResultSelector(args) {
      return isFunction_1.isFunction(last(args)) ? args.pop() : void 0;
    }
    exports2.popResultSelector = popResultSelector;
    function popScheduler(args) {
      return isScheduler_1.isScheduler(last(args)) ? args.pop() : void 0;
    }
    exports2.popScheduler = popScheduler;
    function popNumber(args, defaultValue) {
      return typeof last(args) === "number" ? args.pop() : defaultValue;
    }
    exports2.popNumber = popNumber;
  }
});

// ../../../node_modules/rxjs/dist/cjs/internal/util/isArrayLike.js
var require_isArrayLike = __commonJS({
  "../../../node_modules/rxjs/dist/cjs/internal/util/isArrayLike.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.isArrayLike = void 0;
    exports2.isArrayLike = function(x) {
      return x && typeof x.length === "number" && typeof x !== "function";
    };
  }
});

// ../../../node_modules/rxjs/dist/cjs/internal/util/isPromise.js
var require_isPromise = __commonJS({
  "../../../node_modules/rxjs/dist/cjs/internal/util/isPromise.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.isPromise = void 0;
    var isFunction_1 = require_isFunction();
    function isPromise(value) {
      return isFunction_1.isFunction(value === null || value === void 0 ? void 0 : value.then);
    }
    exports2.isPromise = isPromise;
  }
});

// ../../../node_modules/rxjs/dist/cjs/internal/util/isInteropObservable.js
var require_isInteropObservable = __commonJS({
  "../../../node_modules/rxjs/dist/cjs/internal/util/isInteropObservable.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.isInteropObservable = void 0;
    var observable_1 = require_observable();
    var isFunction_1 = require_isFunction();
    function isInteropObservable(input) {
      return isFunction_1.isFunction(input[observable_1.observable]);
    }
    exports2.isInteropObservable = isInteropObservable;
  }
});

// ../../../node_modules/rxjs/dist/cjs/internal/util/isAsyncIterable.js
var require_isAsyncIterable = __commonJS({
  "../../../node_modules/rxjs/dist/cjs/internal/util/isAsyncIterable.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.isAsyncIterable = void 0;
    var isFunction_1 = require_isFunction();
    function isAsyncIterable(obj) {
      return Symbol.asyncIterator && isFunction_1.isFunction(obj === null || obj === void 0 ? void 0 : obj[Symbol.asyncIterator]);
    }
    exports2.isAsyncIterable = isAsyncIterable;
  }
});

// ../../../node_modules/rxjs/dist/cjs/internal/util/throwUnobservableError.js
var require_throwUnobservableError = __commonJS({
  "../../../node_modules/rxjs/dist/cjs/internal/util/throwUnobservableError.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.createInvalidObservableTypeError = void 0;
    function createInvalidObservableTypeError(input) {
      return new TypeError("You provided " + (input !== null && typeof input === "object" ? "an invalid object" : "'" + input + "'") + " where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.");
    }
    exports2.createInvalidObservableTypeError = createInvalidObservableTypeError;
  }
});

// ../../../node_modules/rxjs/dist/cjs/internal/symbol/iterator.js
var require_iterator = __commonJS({
  "../../../node_modules/rxjs/dist/cjs/internal/symbol/iterator.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.iterator = exports2.getSymbolIterator = void 0;
    function getSymbolIterator() {
      if (typeof Symbol !== "function" || !Symbol.iterator) {
        return "@@iterator";
      }
      return Symbol.iterator;
    }
    exports2.getSymbolIterator = getSymbolIterator;
    exports2.iterator = getSymbolIterator();
  }
});

// ../../../node_modules/rxjs/dist/cjs/internal/util/isIterable.js
var require_isIterable = __commonJS({
  "../../../node_modules/rxjs/dist/cjs/internal/util/isIterable.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.isIterable = void 0;
    var iterator_1 = require_iterator();
    var isFunction_1 = require_isFunction();
    function isIterable(input) {
      return isFunction_1.isFunction(input === null || input === void 0 ? void 0 : input[iterator_1.iterator]);
    }
    exports2.isIterable = isIterable;
  }
});

// ../../../node_modules/rxjs/dist/cjs/internal/util/isReadableStreamLike.js
var require_isReadableStreamLike = __commonJS({
  "../../../node_modules/rxjs/dist/cjs/internal/util/isReadableStreamLike.js"(exports2) {
    "use strict";
    var __generator = exports2 && exports2.__generator || function(thisArg, body) {
      var _ = { label: 0, sent: function() {
        if (t[0] & 1)
          throw t[1];
        return t[1];
      }, trys: [], ops: [] }, f, y, t, g;
      return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
      }), g;
      function verb(n) {
        return function(v) {
          return step([n, v]);
        };
      }
      function step(op) {
        if (f)
          throw new TypeError("Generator is already executing.");
        while (_)
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
              return t;
            if (y = 0, t)
              op = [op[0] & 2, t.value];
            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;
              case 4:
                _.label++;
                return { value: op[1], done: false };
              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;
              case 7:
                op = _.ops.pop();
                _.trys.pop();
                continue;
              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }
                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }
                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }
                if (t && _.label < t[2]) {
                  _.label = t[2];
                  _.ops.push(op);
                  break;
                }
                if (t[2])
                  _.ops.pop();
                _.trys.pop();
                continue;
            }
            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        if (op[0] & 5)
          throw op[1];
        return { value: op[0] ? op[1] : void 0, done: true };
      }
    };
    var __await = exports2 && exports2.__await || function(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    };
    var __asyncGenerator = exports2 && exports2.__asyncGenerator || function(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator)
        throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []), i, q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
        return this;
      }, i;
      function verb(n) {
        if (g[n])
          i[n] = function(v) {
            return new Promise(function(a, b) {
              q.push([n, v, a, b]) > 1 || resume(n, v);
            });
          };
      }
      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }
      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }
      function fulfill(value) {
        resume("next", value);
      }
      function reject(value) {
        resume("throw", value);
      }
      function settle(f, v) {
        if (f(v), q.shift(), q.length)
          resume(q[0][0], q[0][1]);
      }
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.isReadableStreamLike = exports2.readableStreamLikeToAsyncGenerator = void 0;
    var isFunction_1 = require_isFunction();
    function readableStreamLikeToAsyncGenerator(readableStream) {
      return __asyncGenerator(this, arguments, function readableStreamLikeToAsyncGenerator_1() {
        var reader, _a, value, done;
        return __generator(this, function(_b) {
          switch (_b.label) {
            case 0:
              reader = readableStream.getReader();
              _b.label = 1;
            case 1:
              _b.trys.push([1, , 9, 10]);
              _b.label = 2;
            case 2:
              if (false)
                return [3, 8];
              return [4, __await(reader.read())];
            case 3:
              _a = _b.sent(), value = _a.value, done = _a.done;
              if (!done)
                return [3, 5];
              return [4, __await(void 0)];
            case 4:
              return [2, _b.sent()];
            case 5:
              return [4, __await(value)];
            case 6:
              return [4, _b.sent()];
            case 7:
              _b.sent();
              return [3, 2];
            case 8:
              return [3, 10];
            case 9:
              reader.releaseLock();
              return [7];
            case 10:
              return [2];
          }
        });
      });
    }
    exports2.readableStreamLikeToAsyncGenerator = readableStreamLikeToAsyncGenerator;
    function isReadableStreamLike(obj) {
      return isFunction_1.isFunction(obj === null || obj === void 0 ? void 0 : obj.getReader);
    }
    exports2.isReadableStreamLike = isReadableStreamLike;
  }
});

// ../../../node_modules/rxjs/dist/cjs/internal/observable/innerFrom.js
var require_innerFrom = __commonJS({
  "../../../node_modules/rxjs/dist/cjs/internal/observable/innerFrom.js"(exports2) {
    "use strict";
    var __awaiter = exports2 && exports2.__awaiter || function(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function(resolve2) {
          resolve2(value);
        });
      }
      return new (P || (P = Promise))(function(resolve2, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done ? resolve2(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
    var __generator = exports2 && exports2.__generator || function(thisArg, body) {
      var _ = { label: 0, sent: function() {
        if (t[0] & 1)
          throw t[1];
        return t[1];
      }, trys: [], ops: [] }, f, y, t, g;
      return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
      }), g;
      function verb(n) {
        return function(v) {
          return step([n, v]);
        };
      }
      function step(op) {
        if (f)
          throw new TypeError("Generator is already executing.");
        while (_)
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
              return t;
            if (y = 0, t)
              op = [op[0] & 2, t.value];
            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;
              case 4:
                _.label++;
                return { value: op[1], done: false };
              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;
              case 7:
                op = _.ops.pop();
                _.trys.pop();
                continue;
              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }
                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }
                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }
                if (t && _.label < t[2]) {
                  _.label = t[2];
                  _.ops.push(op);
                  break;
                }
                if (t[2])
                  _.ops.pop();
                _.trys.pop();
                continue;
            }
            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        if (op[0] & 5)
          throw op[1];
        return { value: op[0] ? op[1] : void 0, done: true };
      }
    };
    var __asyncValues = exports2 && exports2.__asyncValues || function(o) {
      if (!Symbol.asyncIterator)
        throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator], i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
        return this;
      }, i);
      function verb(n) {
        i[n] = o[n] && function(v) {
          return new Promise(function(resolve2, reject) {
            v = o[n](v), settle(resolve2, reject, v.done, v.value);
          });
        };
      }
      function settle(resolve2, reject, d, v) {
        Promise.resolve(v).then(function(v2) {
          resolve2({ value: v2, done: d });
        }, reject);
      }
    };
    var __values = exports2 && exports2.__values || function(o) {
      var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
      if (m)
        return m.call(o);
      if (o && typeof o.length === "number")
        return {
          next: function() {
            if (o && i >= o.length)
              o = void 0;
            return { value: o && o[i++], done: !o };
          }
        };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.fromReadableStreamLike = exports2.fromAsyncIterable = exports2.fromIterable = exports2.fromPromise = exports2.fromArrayLike = exports2.fromInteropObservable = exports2.innerFrom = void 0;
    var isArrayLike_1 = require_isArrayLike();
    var isPromise_1 = require_isPromise();
    var Observable_1 = require_Observable();
    var isInteropObservable_1 = require_isInteropObservable();
    var isAsyncIterable_1 = require_isAsyncIterable();
    var throwUnobservableError_1 = require_throwUnobservableError();
    var isIterable_1 = require_isIterable();
    var isReadableStreamLike_1 = require_isReadableStreamLike();
    var isFunction_1 = require_isFunction();
    var reportUnhandledError_1 = require_reportUnhandledError();
    var observable_1 = require_observable();
    function innerFrom(input) {
      if (input instanceof Observable_1.Observable) {
        return input;
      }
      if (input != null) {
        if (isInteropObservable_1.isInteropObservable(input)) {
          return fromInteropObservable(input);
        }
        if (isArrayLike_1.isArrayLike(input)) {
          return fromArrayLike(input);
        }
        if (isPromise_1.isPromise(input)) {
          return fromPromise(input);
        }
        if (isAsyncIterable_1.isAsyncIterable(input)) {
          return fromAsyncIterable(input);
        }
        if (isIterable_1.isIterable(input)) {
          return fromIterable(input);
        }
        if (isReadableStreamLike_1.isReadableStreamLike(input)) {
          return fromReadableStreamLike(input);
        }
      }
      throw throwUnobservableError_1.createInvalidObservableTypeError(input);
    }
    exports2.innerFrom = innerFrom;
    function fromInteropObservable(obj) {
      return new Observable_1.Observable(function(subscriber) {
        var obs = obj[observable_1.observable]();
        if (isFunction_1.isFunction(obs.subscribe)) {
          return obs.subscribe(subscriber);
        }
        throw new TypeError("Provided object does not correctly implement Symbol.observable");
      });
    }
    exports2.fromInteropObservable = fromInteropObservable;
    function fromArrayLike(array) {
      return new Observable_1.Observable(function(subscriber) {
        for (var i = 0; i < array.length && !subscriber.closed; i++) {
          subscriber.next(array[i]);
        }
        subscriber.complete();
      });
    }
    exports2.fromArrayLike = fromArrayLike;
    function fromPromise(promise) {
      return new Observable_1.Observable(function(subscriber) {
        promise.then(function(value) {
          if (!subscriber.closed) {
            subscriber.next(value);
            subscriber.complete();
          }
        }, function(err) {
          return subscriber.error(err);
        }).then(null, reportUnhandledError_1.reportUnhandledError);
      });
    }
    exports2.fromPromise = fromPromise;
    function fromIterable(iterable) {
      return new Observable_1.Observable(function(subscriber) {
        var e_1, _a;
        try {
          for (var iterable_1 = __values(iterable), iterable_1_1 = iterable_1.next(); !iterable_1_1.done; iterable_1_1 = iterable_1.next()) {
            var value = iterable_1_1.value;
            subscriber.next(value);
            if (subscriber.closed) {
              return;
            }
          }
        } catch (e_1_1) {
          e_1 = { error: e_1_1 };
        } finally {
          try {
            if (iterable_1_1 && !iterable_1_1.done && (_a = iterable_1.return))
              _a.call(iterable_1);
          } finally {
            if (e_1)
              throw e_1.error;
          }
        }
        subscriber.complete();
      });
    }
    exports2.fromIterable = fromIterable;
    function fromAsyncIterable(asyncIterable) {
      return new Observable_1.Observable(function(subscriber) {
        process(asyncIterable, subscriber).catch(function(err) {
          return subscriber.error(err);
        });
      });
    }
    exports2.fromAsyncIterable = fromAsyncIterable;
    function fromReadableStreamLike(readableStream) {
      return fromAsyncIterable(isReadableStreamLike_1.readableStreamLikeToAsyncGenerator(readableStream));
    }
    exports2.fromReadableStreamLike = fromReadableStreamLike;
    function process(asyncIterable, subscriber) {
      var asyncIterable_1, asyncIterable_1_1;
      var e_2, _a;
      return __awaiter(this, void 0, void 0, function() {
        var value, e_2_1;
        return __generator(this, function(_b) {
          switch (_b.label) {
            case 0:
              _b.trys.push([0, 5, 6, 11]);
              asyncIterable_1 = __asyncValues(asyncIterable);
              _b.label = 1;
            case 1:
              return [4, asyncIterable_1.next()];
            case 2:
              if (!(asyncIterable_1_1 = _b.sent(), !asyncIterable_1_1.done))
                return [3, 4];
              value = asyncIterable_1_1.value;
              subscriber.next(value);
              if (subscriber.closed) {
                return [2];
              }
              _b.label = 3;
            case 3:
              return [3, 1];
            case 4:
              return [3, 11];
            case 5:
              e_2_1 = _b.sent();
              e_2 = { error: e_2_1 };
              return [3, 11];
            case 6:
              _b.trys.push([6, , 9, 10]);
              if (!(asyncIterable_1_1 && !asyncIterable_1_1.done && (_a = asyncIterable_1.return)))
                return [3, 8];
              return [4, _a.call(asyncIterable_1)];
            case 7:
              _b.sent();
              _b.label = 8;
            case 8:
              return [3, 10];
            case 9:
              if (e_2)
                throw e_2.error;
              return [7];
            case 10:
              return [7];
            case 11:
              subscriber.complete();
              return [2];
          }
        });
      });
    }
  }
});

// ../../../node_modules/rxjs/dist/cjs/internal/util/executeSchedule.js
var require_executeSchedule = __commonJS({
  "../../../node_modules/rxjs/dist/cjs/internal/util/executeSchedule.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.executeSchedule = void 0;
    function executeSchedule(parentSubscription, scheduler, work, delay, repeat) {
      if (delay === void 0) {
        delay = 0;
      }
      if (repeat === void 0) {
        repeat = false;
      }
      var scheduleSubscription = scheduler.schedule(function() {
        work();
        if (repeat) {
          parentSubscription.add(this.schedule(null, delay));
        } else {
          this.unsubscribe();
        }
      }, delay);
      parentSubscription.add(scheduleSubscription);
      if (!repeat) {
        return scheduleSubscription;
      }
    }
    exports2.executeSchedule = executeSchedule;
  }
});

// ../../../node_modules/rxjs/dist/cjs/internal/operators/observeOn.js
var require_observeOn = __commonJS({
  "../../../node_modules/rxjs/dist/cjs/internal/operators/observeOn.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.observeOn = void 0;
    var executeSchedule_1 = require_executeSchedule();
    var lift_1 = require_lift();
    var OperatorSubscriber_1 = require_OperatorSubscriber();
    function observeOn(scheduler, delay) {
      if (delay === void 0) {
        delay = 0;
      }
      return lift_1.operate(function(source, subscriber) {
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
          return executeSchedule_1.executeSchedule(subscriber, scheduler, function() {
            return subscriber.next(value);
          }, delay);
        }, function() {
          return executeSchedule_1.executeSchedule(subscriber, scheduler, function() {
            return subscriber.complete();
          }, delay);
        }, function(err) {
          return executeSchedule_1.executeSchedule(subscriber, scheduler, function() {
            return subscriber.error(err);
          }, delay);
        }));
      });
    }
    exports2.observeOn = observeOn;
  }
});

// ../../../node_modules/rxjs/dist/cjs/internal/operators/subscribeOn.js
var require_subscribeOn = __commonJS({
  "../../../node_modules/rxjs/dist/cjs/internal/operators/subscribeOn.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.subscribeOn = void 0;
    var lift_1 = require_lift();
    function subscribeOn(scheduler, delay) {
      if (delay === void 0) {
        delay = 0;
      }
      return lift_1.operate(function(source, subscriber) {
        subscriber.add(scheduler.schedule(function() {
          return source.subscribe(subscriber);
        }, delay));
      });
    }
    exports2.subscribeOn = subscribeOn;
  }
});

// ../../../node_modules/rxjs/dist/cjs/internal/scheduled/scheduleObservable.js
var require_scheduleObservable = __commonJS({
  "../../../node_modules/rxjs/dist/cjs/internal/scheduled/scheduleObservable.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.scheduleObservable = void 0;
    var innerFrom_1 = require_innerFrom();
    var observeOn_1 = require_observeOn();
    var subscribeOn_1 = require_subscribeOn();
    function scheduleObservable(input, scheduler) {
      return innerFrom_1.innerFrom(input).pipe(subscribeOn_1.subscribeOn(scheduler), observeOn_1.observeOn(scheduler));
    }
    exports2.scheduleObservable = scheduleObservable;
  }
});

// ../../../node_modules/rxjs/dist/cjs/internal/scheduled/schedulePromise.js
var require_schedulePromise = __commonJS({
  "../../../node_modules/rxjs/dist/cjs/internal/scheduled/schedulePromise.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.schedulePromise = void 0;
    var innerFrom_1 = require_innerFrom();
    var observeOn_1 = require_observeOn();
    var subscribeOn_1 = require_subscribeOn();
    function schedulePromise(input, scheduler) {
      return innerFrom_1.innerFrom(input).pipe(subscribeOn_1.subscribeOn(scheduler), observeOn_1.observeOn(scheduler));
    }
    exports2.schedulePromise = schedulePromise;
  }
});

// ../../../node_modules/rxjs/dist/cjs/internal/scheduled/scheduleArray.js
var require_scheduleArray = __commonJS({
  "../../../node_modules/rxjs/dist/cjs/internal/scheduled/scheduleArray.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.scheduleArray = void 0;
    var Observable_1 = require_Observable();
    function scheduleArray(input, scheduler) {
      return new Observable_1.Observable(function(subscriber) {
        var i = 0;
        return scheduler.schedule(function() {
          if (i === input.length) {
            subscriber.complete();
          } else {
            subscriber.next(input[i++]);
            if (!subscriber.closed) {
              this.schedule();
            }
          }
        });
      });
    }
    exports2.scheduleArray = scheduleArray;
  }
});

// ../../../node_modules/rxjs/dist/cjs/internal/scheduled/scheduleIterable.js
var require_scheduleIterable = __commonJS({
  "../../../node_modules/rxjs/dist/cjs/internal/scheduled/scheduleIterable.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.scheduleIterable = void 0;
    var Observable_1 = require_Observable();
    var iterator_1 = require_iterator();
    var isFunction_1 = require_isFunction();
    var executeSchedule_1 = require_executeSchedule();
    function scheduleIterable(input, scheduler) {
      return new Observable_1.Observable(function(subscriber) {
        var iterator;
        executeSchedule_1.executeSchedule(subscriber, scheduler, function() {
          iterator = input[iterator_1.iterator]();
          executeSchedule_1.executeSchedule(subscriber, scheduler, function() {
            var _a;
            var value;
            var done;
            try {
              _a = iterator.next(), value = _a.value, done = _a.done;
            } catch (err) {
              subscriber.error(err);
              return;
            }
            if (done) {
              subscriber.complete();
            } else {
              subscriber.next(value);
            }
          }, 0, true);
        });
        return function() {
          return isFunction_1.isFunction(iterator === null || iterator === void 0 ? void 0 : iterator.return) && iterator.return();
        };
      });
    }
    exports2.scheduleIterable = scheduleIterable;
  }
});

// ../../../node_modules/rxjs/dist/cjs/internal/scheduled/scheduleAsyncIterable.js
var require_scheduleAsyncIterable = __commonJS({
  "../../../node_modules/rxjs/dist/cjs/internal/scheduled/scheduleAsyncIterable.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.scheduleAsyncIterable = void 0;
    var Observable_1 = require_Observable();
    var executeSchedule_1 = require_executeSchedule();
    function scheduleAsyncIterable(input, scheduler) {
      if (!input) {
        throw new Error("Iterable cannot be null");
      }
      return new Observable_1.Observable(function(subscriber) {
        executeSchedule_1.executeSchedule(subscriber, scheduler, function() {
          var iterator = input[Symbol.asyncIterator]();
          executeSchedule_1.executeSchedule(subscriber, scheduler, function() {
            iterator.next().then(function(result) {
              if (result.done) {
                subscriber.complete();
              } else {
                subscriber.next(result.value);
              }
            });
          }, 0, true);
        });
      });
    }
    exports2.scheduleAsyncIterable = scheduleAsyncIterable;
  }
});

// ../../../node_modules/rxjs/dist/cjs/internal/scheduled/scheduleReadableStreamLike.js
var require_scheduleReadableStreamLike = __commonJS({
  "../../../node_modules/rxjs/dist/cjs/internal/scheduled/scheduleReadableStreamLike.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.scheduleReadableStreamLike = void 0;
    var scheduleAsyncIterable_1 = require_scheduleAsyncIterable();
    var isReadableStreamLike_1 = require_isReadableStreamLike();
    function scheduleReadableStreamLike(input, scheduler) {
      return scheduleAsyncIterable_1.scheduleAsyncIterable(isReadableStreamLike_1.readableStreamLikeToAsyncGenerator(input), scheduler);
    }
    exports2.scheduleReadableStreamLike = scheduleReadableStreamLike;
  }
});

// ../../../node_modules/rxjs/dist/cjs/internal/scheduled/scheduled.js
var require_scheduled = __commonJS({
  "../../../node_modules/rxjs/dist/cjs/internal/scheduled/scheduled.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.scheduled = void 0;
    var scheduleObservable_1 = require_scheduleObservable();
    var schedulePromise_1 = require_schedulePromise();
    var scheduleArray_1 = require_scheduleArray();
    var scheduleIterable_1 = require_scheduleIterable();
    var scheduleAsyncIterable_1 = require_scheduleAsyncIterable();
    var isInteropObservable_1 = require_isInteropObservable();
    var isPromise_1 = require_isPromise();
    var isArrayLike_1 = require_isArrayLike();
    var isIterable_1 = require_isIterable();
    var isAsyncIterable_1 = require_isAsyncIterable();
    var throwUnobservableError_1 = require_throwUnobservableError();
    var isReadableStreamLike_1 = require_isReadableStreamLike();
    var scheduleReadableStreamLike_1 = require_scheduleReadableStreamLike();
    function scheduled(input, scheduler) {
      if (input != null) {
        if (isInteropObservable_1.isInteropObservable(input)) {
          return scheduleObservable_1.scheduleObservable(input, scheduler);
        }
        if (isArrayLike_1.isArrayLike(input)) {
          return scheduleArray_1.scheduleArray(input, scheduler);
        }
        if (isPromise_1.isPromise(input)) {
          return schedulePromise_1.schedulePromise(input, scheduler);
        }
        if (isAsyncIterable_1.isAsyncIterable(input)) {
          return scheduleAsyncIterable_1.scheduleAsyncIterable(input, scheduler);
        }
        if (isIterable_1.isIterable(input)) {
          return scheduleIterable_1.scheduleIterable(input, scheduler);
        }
        if (isReadableStreamLike_1.isReadableStreamLike(input)) {
          return scheduleReadableStreamLike_1.scheduleReadableStreamLike(input, scheduler);
        }
      }
      throw throwUnobservableError_1.createInvalidObservableTypeError(input);
    }
    exports2.scheduled = scheduled;
  }
});

// ../../../node_modules/rxjs/dist/cjs/internal/observable/from.js
var require_from = __commonJS({
  "../../../node_modules/rxjs/dist/cjs/internal/observable/from.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.from = void 0;
    var scheduled_1 = require_scheduled();
    var innerFrom_1 = require_innerFrom();
    function from(input, scheduler) {
      return scheduler ? scheduled_1.scheduled(input, scheduler) : innerFrom_1.innerFrom(input);
    }
    exports2.from = from;
  }
});

// ../../../node_modules/rxjs/dist/cjs/internal/observable/of.js
var require_of = __commonJS({
  "../../../node_modules/rxjs/dist/cjs/internal/observable/of.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.of = void 0;
    var args_1 = require_args();
    var from_1 = require_from();
    function of() {
      var args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }
      var scheduler = args_1.popScheduler(args);
      return from_1.from(args, scheduler);
    }
    exports2.of = of;
  }
});

// ../../../node_modules/rxjs/dist/cjs/internal/observable/throwError.js
var require_throwError = __commonJS({
  "../../../node_modules/rxjs/dist/cjs/internal/observable/throwError.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.throwError = void 0;
    var Observable_1 = require_Observable();
    var isFunction_1 = require_isFunction();
    function throwError(errorOrErrorFactory, scheduler) {
      var errorFactory = isFunction_1.isFunction(errorOrErrorFactory) ? errorOrErrorFactory : function() {
        return errorOrErrorFactory;
      };
      var init3 = function(subscriber) {
        return subscriber.error(errorFactory());
      };
      return new Observable_1.Observable(scheduler ? function(subscriber) {
        return scheduler.schedule(init3, 0, subscriber);
      } : init3);
    }
    exports2.throwError = throwError;
  }
});

// ../../../node_modules/rxjs/dist/cjs/internal/Notification.js
var require_Notification = __commonJS({
  "../../../node_modules/rxjs/dist/cjs/internal/Notification.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.observeNotification = exports2.Notification = exports2.NotificationKind = void 0;
    var empty_1 = require_empty();
    var of_1 = require_of();
    var throwError_1 = require_throwError();
    var isFunction_1 = require_isFunction();
    var NotificationKind;
    (function(NotificationKind2) {
      NotificationKind2["NEXT"] = "N";
      NotificationKind2["ERROR"] = "E";
      NotificationKind2["COMPLETE"] = "C";
    })(NotificationKind = exports2.NotificationKind || (exports2.NotificationKind = {}));
    var Notification = function() {
      function Notification2(kind, value, error) {
        this.kind = kind;
        this.value = value;
        this.error = error;
        this.hasValue = kind === "N";
      }
      Notification2.prototype.observe = function(observer) {
        return observeNotification(this, observer);
      };
      Notification2.prototype.do = function(nextHandler, errorHandler, completeHandler) {
        var _a = this, kind = _a.kind, value = _a.value, error = _a.error;
        return kind === "N" ? nextHandler === null || nextHandler === void 0 ? void 0 : nextHandler(value) : kind === "E" ? errorHandler === null || errorHandler === void 0 ? void 0 : errorHandler(error) : completeHandler === null || completeHandler === void 0 ? void 0 : completeHandler();
      };
      Notification2.prototype.accept = function(nextOrObserver, error, complete) {
        var _a;
        return isFunction_1.isFunction((_a = nextOrObserver) === null || _a === void 0 ? void 0 : _a.next) ? this.observe(nextOrObserver) : this.do(nextOrObserver, error, complete);
      };
      Notification2.prototype.toObservable = function() {
        var _a = this, kind = _a.kind, value = _a.value, error = _a.error;
        var result = kind === "N" ? of_1.of(value) : kind === "E" ? throwError_1.throwError(function() {
          return error;
        }) : kind === "C" ? empty_1.EMPTY : 0;
        if (!result) {
          throw new TypeError("Unexpected notification kind " + kind);
        }
        return result;
      };
      Notification2.createNext = function(value) {
        return new Notification2("N", value);
      };
      Notification2.createError = function(err) {
        return new Notification2("E", void 0, err);
      };
      Notification2.createComplete = function() {
        return Notification2.completeNotification;
      };
      Notification2.completeNotification = new Notification2("C");
      return Notification2;
    }();
    exports2.Notification = Notification;
    function observeNotification(notification, observer) {
      var _a, _b, _c;
      var _d = notification, kind = _d.kind, value = _d.value, error = _d.error;
      if (typeof kind !== "string") {
        throw new TypeError('Invalid notification, missing "kind"');
      }
      kind === "N" ? (_a = observer.next) === null || _a === void 0 ? void 0 : _a.call(observer, value) : kind === "E" ? (_b = observer.error) === null || _b === void 0 ? void 0 : _b.call(observer, error) : (_c = observer.complete) === null || _c === void 0 ? void 0 : _c.call(observer);
    }
    exports2.observeNotification = observeNotification;
  }
});

// ../../../node_modules/rxjs/dist/cjs/internal/util/isObservable.js
var require_isObservable = __commonJS({
  "../../../node_modules/rxjs/dist/cjs/internal/util/isObservable.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.isObservable = void 0;
    var Observable_1 = require_Observable();
    var isFunction_1 = require_isFunction();
    function isObservable(obj) {
      return !!obj && (obj instanceof Observable_1.Observable || isFunction_1.isFunction(obj.lift) && isFunction_1.isFunction(obj.subscribe));
    }
    exports2.isObservable = isObservable;
  }
});

// ../../../node_modules/rxjs/dist/cjs/internal/util/EmptyError.js
var require_EmptyError = __commonJS({
  "../../../node_modules/rxjs/dist/cjs/internal/util/EmptyError.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.EmptyError = void 0;
    var createErrorClass_1 = require_createErrorClass();
    exports2.EmptyError = createErrorClass_1.createErrorClass(function(_super) {
      return function EmptyErrorImpl() {
        _super(this);
        this.name = "EmptyError";
        this.message = "no elements in sequence";
      };
    });
  }
});

// ../../../node_modules/rxjs/dist/cjs/internal/lastValueFrom.js
var require_lastValueFrom = __commonJS({
  "../../../node_modules/rxjs/dist/cjs/internal/lastValueFrom.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.lastValueFrom = void 0;
    var EmptyError_1 = require_EmptyError();
    function lastValueFrom(source, config) {
      var hasConfig = typeof config === "object";
      return new Promise(function(resolve2, reject) {
        var _hasValue = false;
        var _value;
        source.subscribe({
          next: function(value) {
            _value = value;
            _hasValue = true;
          },
          error: reject,
          complete: function() {
            if (_hasValue) {
              resolve2(_value);
            } else if (hasConfig) {
              resolve2(config.defaultValue);
            } else {
              reject(new EmptyError_1.EmptyError());
            }
          }
        });
      });
    }
    exports2.lastValueFrom = lastValueFrom;
  }
});

// ../../../node_modules/rxjs/dist/cjs/internal/firstValueFrom.js
var require_firstValueFrom = __commonJS({
  "../../../node_modules/rxjs/dist/cjs/internal/firstValueFrom.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.firstValueFrom = void 0;
    var EmptyError_1 = require_EmptyError();
    var Subscriber_1 = require_Subscriber();
    function firstValueFrom3(source, config) {
      var hasConfig = typeof config === "object";
      return new Promise(function(resolve2, reject) {
        var subscriber = new Subscriber_1.SafeSubscriber({
          next: function(value) {
            resolve2(value);
            subscriber.unsubscribe();
          },
          error: reject,
          complete: function() {
            if (hasConfig) {
              resolve2(config.defaultValue);
            } else {
              reject(new EmptyError_1.EmptyError());
            }
          }
        });
        source.subscribe(subscriber);
      });
    }
    exports2.firstValueFrom = firstValueFrom3;
  }
});

// ../../../node_modules/rxjs/dist/cjs/internal/util/ArgumentOutOfRangeError.js
var require_ArgumentOutOfRangeError = __commonJS({
  "../../../node_modules/rxjs/dist/cjs/internal/util/ArgumentOutOfRangeError.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.ArgumentOutOfRangeError = void 0;
    var createErrorClass_1 = require_createErrorClass();
    exports2.ArgumentOutOfRangeError = createErrorClass_1.createErrorClass(function(_super) {
      return function ArgumentOutOfRangeErrorImpl() {
        _super(this);
        this.name = "ArgumentOutOfRangeError";
        this.message = "argument out of range";
      };
    });
  }
});

// ../../../node_modules/rxjs/dist/cjs/internal/util/NotFoundError.js
var require_NotFoundError = __commonJS({
  "../../../node_modules/rxjs/dist/cjs/internal/util/NotFoundError.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.NotFoundError = void 0;
    var createErrorClass_1 = require_createErrorClass();
    exports2.NotFoundError = createErrorClass_1.createErrorClass(function(_super) {
      return function NotFoundErrorImpl(message) {
        _super(this);
        this.name = "NotFoundError";
        this.message = message;
      };
    });
  }
});

// ../../../node_modules/rxjs/dist/cjs/internal/util/SequenceError.js
var require_SequenceError = __commonJS({
  "../../../node_modules/rxjs/dist/cjs/internal/util/SequenceError.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.SequenceError = void 0;
    var createErrorClass_1 = require_createErrorClass();
    exports2.SequenceError = createErrorClass_1.createErrorClass(function(_super) {
      return function SequenceErrorImpl(message) {
        _super(this);
        this.name = "SequenceError";
        this.message = message;
      };
    });
  }
});

// ../../../node_modules/rxjs/dist/cjs/internal/util/isDate.js
var require_isDate = __commonJS({
  "../../../node_modules/rxjs/dist/cjs/internal/util/isDate.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.isValidDate = void 0;
    function isValidDate(value) {
      return value instanceof Date && !isNaN(value);
    }
    exports2.isValidDate = isValidDate;
  }
});

// ../../../node_modules/rxjs/dist/cjs/internal/operators/timeout.js
var require_timeout = __commonJS({
  "../../../node_modules/rxjs/dist/cjs/internal/operators/timeout.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.timeout = exports2.TimeoutError = void 0;
    var async_1 = require_async();
    var isDate_1 = require_isDate();
    var lift_1 = require_lift();
    var innerFrom_1 = require_innerFrom();
    var createErrorClass_1 = require_createErrorClass();
    var OperatorSubscriber_1 = require_OperatorSubscriber();
    var executeSchedule_1 = require_executeSchedule();
    exports2.TimeoutError = createErrorClass_1.createErrorClass(function(_super) {
      return function TimeoutErrorImpl(info) {
        if (info === void 0) {
          info = null;
        }
        _super(this);
        this.message = "Timeout has occurred";
        this.name = "TimeoutError";
        this.info = info;
      };
    });
    function timeout(config, schedulerArg) {
      var _a = isDate_1.isValidDate(config) ? { first: config } : typeof config === "number" ? { each: config } : config, first = _a.first, each = _a.each, _b = _a.with, _with = _b === void 0 ? timeoutErrorFactory : _b, _c = _a.scheduler, scheduler = _c === void 0 ? schedulerArg !== null && schedulerArg !== void 0 ? schedulerArg : async_1.asyncScheduler : _c, _d = _a.meta, meta = _d === void 0 ? null : _d;
      if (first == null && each == null) {
        throw new TypeError("No timeout provided.");
      }
      return lift_1.operate(function(source, subscriber) {
        var originalSourceSubscription;
        var timerSubscription;
        var lastValue = null;
        var seen = 0;
        var startTimer = function(delay) {
          timerSubscription = executeSchedule_1.executeSchedule(subscriber, scheduler, function() {
            try {
              originalSourceSubscription.unsubscribe();
              innerFrom_1.innerFrom(_with({
                meta,
                lastValue,
                seen
              })).subscribe(subscriber);
            } catch (err) {
              subscriber.error(err);
            }
          }, delay);
        };
        originalSourceSubscription = source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
          timerSubscription === null || timerSubscription === void 0 ? void 0 : timerSubscription.unsubscribe();
          seen++;
          subscriber.next(lastValue = value);
          each > 0 && startTimer(each);
        }, void 0, void 0, function() {
          if (!(timerSubscription === null || timerSubscription === void 0 ? void 0 : timerSubscription.closed)) {
            timerSubscription === null || timerSubscription === void 0 ? void 0 : timerSubscription.unsubscribe();
          }
          lastValue = null;
        }));
        !seen && startTimer(first != null ? typeof first === "number" ? first : +first - scheduler.now() : each);
      });
    }
    exports2.timeout = timeout;
    function timeoutErrorFactory(info) {
      throw new exports2.TimeoutError(info);
    }
  }
});

// ../../../node_modules/rxjs/dist/cjs/internal/operators/map.js
var require_map = __commonJS({
  "../../../node_modules/rxjs/dist/cjs/internal/operators/map.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.map = void 0;
    var lift_1 = require_lift();
    var OperatorSubscriber_1 = require_OperatorSubscriber();
    function map(project, thisArg) {
      return lift_1.operate(function(source, subscriber) {
        var index = 0;
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
          subscriber.next(project.call(thisArg, value, index++));
        }));
      });
    }
    exports2.map = map;
  }
});

// ../../../node_modules/rxjs/dist/cjs/internal/util/mapOneOrManyArgs.js
var require_mapOneOrManyArgs = __commonJS({
  "../../../node_modules/rxjs/dist/cjs/internal/util/mapOneOrManyArgs.js"(exports2) {
    "use strict";
    var __read = exports2 && exports2.__read || function(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m)
        return o;
      var i = m.call(o), r, ar = [], e;
      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
          ar.push(r.value);
      } catch (error) {
        e = { error };
      } finally {
        try {
          if (r && !r.done && (m = i["return"]))
            m.call(i);
        } finally {
          if (e)
            throw e.error;
        }
      }
      return ar;
    };
    var __spreadArray = exports2 && exports2.__spreadArray || function(to, from) {
      for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
      return to;
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.mapOneOrManyArgs = void 0;
    var map_1 = require_map();
    var isArray2 = Array.isArray;
    function callOrApply(fn, args) {
      return isArray2(args) ? fn.apply(void 0, __spreadArray([], __read(args))) : fn(args);
    }
    function mapOneOrManyArgs(fn) {
      return map_1.map(function(args) {
        return callOrApply(fn, args);
      });
    }
    exports2.mapOneOrManyArgs = mapOneOrManyArgs;
  }
});

// ../../../node_modules/rxjs/dist/cjs/internal/observable/bindCallbackInternals.js
var require_bindCallbackInternals = __commonJS({
  "../../../node_modules/rxjs/dist/cjs/internal/observable/bindCallbackInternals.js"(exports2) {
    "use strict";
    var __read = exports2 && exports2.__read || function(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m)
        return o;
      var i = m.call(o), r, ar = [], e;
      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
          ar.push(r.value);
      } catch (error) {
        e = { error };
      } finally {
        try {
          if (r && !r.done && (m = i["return"]))
            m.call(i);
        } finally {
          if (e)
            throw e.error;
        }
      }
      return ar;
    };
    var __spreadArray = exports2 && exports2.__spreadArray || function(to, from) {
      for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
      return to;
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.bindCallbackInternals = void 0;
    var isScheduler_1 = require_isScheduler();
    var Observable_1 = require_Observable();
    var subscribeOn_1 = require_subscribeOn();
    var mapOneOrManyArgs_1 = require_mapOneOrManyArgs();
    var observeOn_1 = require_observeOn();
    var AsyncSubject_1 = require_AsyncSubject();
    function bindCallbackInternals(isNodeStyle, callbackFunc, resultSelector, scheduler) {
      if (resultSelector) {
        if (isScheduler_1.isScheduler(resultSelector)) {
          scheduler = resultSelector;
        } else {
          return function() {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
              args[_i] = arguments[_i];
            }
            return bindCallbackInternals(isNodeStyle, callbackFunc, scheduler).apply(this, args).pipe(mapOneOrManyArgs_1.mapOneOrManyArgs(resultSelector));
          };
        }
      }
      if (scheduler) {
        return function() {
          var args = [];
          for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
          }
          return bindCallbackInternals(isNodeStyle, callbackFunc).apply(this, args).pipe(subscribeOn_1.subscribeOn(scheduler), observeOn_1.observeOn(scheduler));
        };
      }
      return function() {
        var _this = this;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }
        var subject = new AsyncSubject_1.AsyncSubject();
        var uninitialized = true;
        return new Observable_1.Observable(function(subscriber) {
          var subs = subject.subscribe(subscriber);
          if (uninitialized) {
            uninitialized = false;
            var isAsync_1 = false;
            var isComplete_1 = false;
            callbackFunc.apply(_this, __spreadArray(__spreadArray([], __read(args)), [
              function() {
                var results = [];
                for (var _i2 = 0; _i2 < arguments.length; _i2++) {
                  results[_i2] = arguments[_i2];
                }
                if (isNodeStyle) {
                  var err = results.shift();
                  if (err != null) {
                    subject.error(err);
                    return;
                  }
                }
                subject.next(1 < results.length ? results : results[0]);
                isComplete_1 = true;
                if (isAsync_1) {
                  subject.complete();
                }
              }
            ]));
            if (isComplete_1) {
              subject.complete();
            }
            isAsync_1 = true;
          }
          return subs;
        });
      };
    }
    exports2.bindCallbackInternals = bindCallbackInternals;
  }
});

// ../../../node_modules/rxjs/dist/cjs/internal/observable/bindCallback.js
var require_bindCallback = __commonJS({
  "../../../node_modules/rxjs/dist/cjs/internal/observable/bindCallback.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.bindCallback = void 0;
    var bindCallbackInternals_1 = require_bindCallbackInternals();
    function bindCallback(callbackFunc, resultSelector, scheduler) {
      return bindCallbackInternals_1.bindCallbackInternals(false, callbackFunc, resultSelector, scheduler);
    }
    exports2.bindCallback = bindCallback;
  }
});

// ../../../node_modules/rxjs/dist/cjs/internal/observable/bindNodeCallback.js
var require_bindNodeCallback = __commonJS({
  "../../../node_modules/rxjs/dist/cjs/internal/observable/bindNodeCallback.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.bindNodeCallback = void 0;
    var bindCallbackInternals_1 = require_bindCallbackInternals();
    function bindNodeCallback(callbackFunc, resultSelector, scheduler) {
      return bindCallbackInternals_1.bindCallbackInternals(true, callbackFunc, resultSelector, scheduler);
    }
    exports2.bindNodeCallback = bindNodeCallback;
  }
});

// ../../../node_modules/rxjs/dist/cjs/internal/util/argsArgArrayOrObject.js
var require_argsArgArrayOrObject = __commonJS({
  "../../../node_modules/rxjs/dist/cjs/internal/util/argsArgArrayOrObject.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.argsArgArrayOrObject = void 0;
    var isArray2 = Array.isArray;
    var getPrototypeOf = Object.getPrototypeOf;
    var objectProto11 = Object.prototype;
    var getKeys = Object.keys;
    function argsArgArrayOrObject(args) {
      if (args.length === 1) {
        var first_1 = args[0];
        if (isArray2(first_1)) {
          return { args: first_1, keys: null };
        }
        if (isPOJO(first_1)) {
          var keys2 = getKeys(first_1);
          return {
            args: keys2.map(function(key) {
              return first_1[key];
            }),
            keys: keys2
          };
        }
      }
      return { args, keys: null };
    }
    exports2.argsArgArrayOrObject = argsArgArrayOrObject;
    function isPOJO(obj) {
      return obj && typeof obj === "object" && getPrototypeOf(obj) === objectProto11;
    }
  }
});

// ../../../node_modules/rxjs/dist/cjs/internal/util/createObject.js
var require_createObject = __commonJS({
  "../../../node_modules/rxjs/dist/cjs/internal/util/createObject.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.createObject = void 0;
    function createObject(keys2, values) {
      return keys2.reduce(function(result, key, i) {
        return result[key] = values[i], result;
      }, {});
    }
    exports2.createObject = createObject;
  }
});

// ../../../node_modules/rxjs/dist/cjs/internal/observable/combineLatest.js
var require_combineLatest = __commonJS({
  "../../../node_modules/rxjs/dist/cjs/internal/observable/combineLatest.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.combineLatestInit = exports2.combineLatest = void 0;
    var Observable_1 = require_Observable();
    var argsArgArrayOrObject_1 = require_argsArgArrayOrObject();
    var from_1 = require_from();
    var identity_1 = require_identity();
    var mapOneOrManyArgs_1 = require_mapOneOrManyArgs();
    var args_1 = require_args();
    var createObject_1 = require_createObject();
    var OperatorSubscriber_1 = require_OperatorSubscriber();
    var executeSchedule_1 = require_executeSchedule();
    function combineLatest() {
      var args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }
      var scheduler = args_1.popScheduler(args);
      var resultSelector = args_1.popResultSelector(args);
      var _a = argsArgArrayOrObject_1.argsArgArrayOrObject(args), observables = _a.args, keys2 = _a.keys;
      if (observables.length === 0) {
        return from_1.from([], scheduler);
      }
      var result = new Observable_1.Observable(combineLatestInit(observables, scheduler, keys2 ? function(values) {
        return createObject_1.createObject(keys2, values);
      } : identity_1.identity));
      return resultSelector ? result.pipe(mapOneOrManyArgs_1.mapOneOrManyArgs(resultSelector)) : result;
    }
    exports2.combineLatest = combineLatest;
    function combineLatestInit(observables, scheduler, valueTransform) {
      if (valueTransform === void 0) {
        valueTransform = identity_1.identity;
      }
      return function(subscriber) {
        maybeSchedule(scheduler, function() {
          var length = observables.length;
          var values = new Array(length);
          var active = length;
          var remainingFirstValues = length;
          var _loop_1 = function(i2) {
            maybeSchedule(scheduler, function() {
              var source = from_1.from(observables[i2], scheduler);
              var hasFirstValue = false;
              source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
                values[i2] = value;
                if (!hasFirstValue) {
                  hasFirstValue = true;
                  remainingFirstValues--;
                }
                if (!remainingFirstValues) {
                  subscriber.next(valueTransform(values.slice()));
                }
              }, function() {
                if (!--active) {
                  subscriber.complete();
                }
              }));
            }, subscriber);
          };
          for (var i = 0; i < length; i++) {
            _loop_1(i);
          }
        }, subscriber);
      };
    }
    exports2.combineLatestInit = combineLatestInit;
    function maybeSchedule(scheduler, execute, subscription) {
      if (scheduler) {
        executeSchedule_1.executeSchedule(subscription, scheduler, execute);
      } else {
        execute();
      }
    }
  }
});

// ../../../node_modules/rxjs/dist/cjs/internal/operators/mergeInternals.js
var require_mergeInternals = __commonJS({
  "../../../node_modules/rxjs/dist/cjs/internal/operators/mergeInternals.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.mergeInternals = void 0;
    var innerFrom_1 = require_innerFrom();
    var executeSchedule_1 = require_executeSchedule();
    var OperatorSubscriber_1 = require_OperatorSubscriber();
    function mergeInternals(source, subscriber, project, concurrent, onBeforeNext, expand, innerSubScheduler, additionalFinalizer) {
      var buffer = [];
      var active = 0;
      var index = 0;
      var isComplete = false;
      var checkComplete = function() {
        if (isComplete && !buffer.length && !active) {
          subscriber.complete();
        }
      };
      var outerNext = function(value) {
        return active < concurrent ? doInnerSub(value) : buffer.push(value);
      };
      var doInnerSub = function(value) {
        expand && subscriber.next(value);
        active++;
        var innerComplete = false;
        innerFrom_1.innerFrom(project(value, index++)).subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(innerValue) {
          onBeforeNext === null || onBeforeNext === void 0 ? void 0 : onBeforeNext(innerValue);
          if (expand) {
            outerNext(innerValue);
          } else {
            subscriber.next(innerValue);
          }
        }, function() {
          innerComplete = true;
        }, void 0, function() {
          if (innerComplete) {
            try {
              active--;
              var _loop_1 = function() {
                var bufferedValue = buffer.shift();
                if (innerSubScheduler) {
                  executeSchedule_1.executeSchedule(subscriber, innerSubScheduler, function() {
                    return doInnerSub(bufferedValue);
                  });
                } else {
                  doInnerSub(bufferedValue);
                }
              };
              while (buffer.length && active < concurrent) {
                _loop_1();
              }
              checkComplete();
            } catch (err) {
              subscriber.error(err);
            }
          }
        }));
      };
      source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, outerNext, function() {
        isComplete = true;
        checkComplete();
      }));
      return function() {
        additionalFinalizer === null || additionalFinalizer === void 0 ? void 0 : additionalFinalizer();
      };
    }
    exports2.mergeInternals = mergeInternals;
  }
});

// ../../../node_modules/rxjs/dist/cjs/internal/operators/mergeMap.js
var require_mergeMap = __commonJS({
  "../../../node_modules/rxjs/dist/cjs/internal/operators/mergeMap.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.mergeMap = void 0;
    var map_1 = require_map();
    var innerFrom_1 = require_innerFrom();
    var lift_1 = require_lift();
    var mergeInternals_1 = require_mergeInternals();
    var isFunction_1 = require_isFunction();
    function mergeMap(project, resultSelector, concurrent) {
      if (concurrent === void 0) {
        concurrent = Infinity;
      }
      if (isFunction_1.isFunction(resultSelector)) {
        return mergeMap(function(a, i) {
          return map_1.map(function(b, ii) {
            return resultSelector(a, b, i, ii);
          })(innerFrom_1.innerFrom(project(a, i)));
        }, concurrent);
      } else if (typeof resultSelector === "number") {
        concurrent = resultSelector;
      }
      return lift_1.operate(function(source, subscriber) {
        return mergeInternals_1.mergeInternals(source, subscriber, project, concurrent);
      });
    }
    exports2.mergeMap = mergeMap;
  }
});

// ../../../node_modules/rxjs/dist/cjs/internal/operators/mergeAll.js
var require_mergeAll = __commonJS({
  "../../../node_modules/rxjs/dist/cjs/internal/operators/mergeAll.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.mergeAll = void 0;
    var mergeMap_1 = require_mergeMap();
    var identity_1 = require_identity();
    function mergeAll(concurrent) {
      if (concurrent === void 0) {
        concurrent = Infinity;
      }
      return mergeMap_1.mergeMap(identity_1.identity, concurrent);
    }
    exports2.mergeAll = mergeAll;
  }
});

// ../../../node_modules/rxjs/dist/cjs/internal/operators/concatAll.js
var require_concatAll = __commonJS({
  "../../../node_modules/rxjs/dist/cjs/internal/operators/concatAll.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.concatAll = void 0;
    var mergeAll_1 = require_mergeAll();
    function concatAll() {
      return mergeAll_1.mergeAll(1);
    }
    exports2.concatAll = concatAll;
  }
});

// ../../../node_modules/rxjs/dist/cjs/internal/observable/concat.js
var require_concat = __commonJS({
  "../../../node_modules/rxjs/dist/cjs/internal/observable/concat.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.concat = void 0;
    var concatAll_1 = require_concatAll();
    var args_1 = require_args();
    var from_1 = require_from();
    function concat() {
      var args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }
      return concatAll_1.concatAll()(from_1.from(args, args_1.popScheduler(args)));
    }
    exports2.concat = concat;
  }
});

// ../../../node_modules/rxjs/dist/cjs/internal/observable/defer.js
var require_defer = __commonJS({
  "../../../node_modules/rxjs/dist/cjs/internal/observable/defer.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.defer = void 0;
    var Observable_1 = require_Observable();
    var innerFrom_1 = require_innerFrom();
    function defer(observableFactory) {
      return new Observable_1.Observable(function(subscriber) {
        innerFrom_1.innerFrom(observableFactory()).subscribe(subscriber);
      });
    }
    exports2.defer = defer;
  }
});

// ../../../node_modules/rxjs/dist/cjs/internal/observable/connectable.js
var require_connectable = __commonJS({
  "../../../node_modules/rxjs/dist/cjs/internal/observable/connectable.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.connectable = void 0;
    var Subject_1 = require_Subject();
    var Observable_1 = require_Observable();
    var defer_1 = require_defer();
    var DEFAULT_CONFIG = {
      connector: function() {
        return new Subject_1.Subject();
      },
      resetOnDisconnect: true
    };
    function connectable(source, config) {
      if (config === void 0) {
        config = DEFAULT_CONFIG;
      }
      var connection = null;
      var connector = config.connector, _a = config.resetOnDisconnect, resetOnDisconnect = _a === void 0 ? true : _a;
      var subject = connector();
      var result = new Observable_1.Observable(function(subscriber) {
        return subject.subscribe(subscriber);
      });
      result.connect = function() {
        if (!connection || connection.closed) {
          connection = defer_1.defer(function() {
            return source;
          }).subscribe(subject);
          if (resetOnDisconnect) {
            connection.add(function() {
              return subject = connector();
            });
          }
        }
        return connection;
      };
      return result;
    }
    exports2.connectable = connectable;
  }
});

// ../../../node_modules/rxjs/dist/cjs/internal/observable/forkJoin.js
var require_forkJoin = __commonJS({
  "../../../node_modules/rxjs/dist/cjs/internal/observable/forkJoin.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.forkJoin = void 0;
    var Observable_1 = require_Observable();
    var argsArgArrayOrObject_1 = require_argsArgArrayOrObject();
    var innerFrom_1 = require_innerFrom();
    var args_1 = require_args();
    var OperatorSubscriber_1 = require_OperatorSubscriber();
    var mapOneOrManyArgs_1 = require_mapOneOrManyArgs();
    var createObject_1 = require_createObject();
    function forkJoin() {
      var args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }
      var resultSelector = args_1.popResultSelector(args);
      var _a = argsArgArrayOrObject_1.argsArgArrayOrObject(args), sources = _a.args, keys2 = _a.keys;
      var result = new Observable_1.Observable(function(subscriber) {
        var length = sources.length;
        if (!length) {
          subscriber.complete();
          return;
        }
        var values = new Array(length);
        var remainingCompletions = length;
        var remainingEmissions = length;
        var _loop_1 = function(sourceIndex2) {
          var hasValue = false;
          innerFrom_1.innerFrom(sources[sourceIndex2]).subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
            if (!hasValue) {
              hasValue = true;
              remainingEmissions--;
            }
            values[sourceIndex2] = value;
          }, function() {
            return remainingCompletions--;
          }, void 0, function() {
            if (!remainingCompletions || !hasValue) {
              if (!remainingEmissions) {
                subscriber.next(keys2 ? createObject_1.createObject(keys2, values) : values);
              }
              subscriber.complete();
            }
          }));
        };
        for (var sourceIndex = 0; sourceIndex < length; sourceIndex++) {
          _loop_1(sourceIndex);
        }
      });
      return resultSelector ? result.pipe(mapOneOrManyArgs_1.mapOneOrManyArgs(resultSelector)) : result;
    }
    exports2.forkJoin = forkJoin;
  }
});

// ../../../node_modules/rxjs/dist/cjs/internal/observable/fromEvent.js
var require_fromEvent = __commonJS({
  "../../../node_modules/rxjs/dist/cjs/internal/observable/fromEvent.js"(exports2) {
    "use strict";
    var __read = exports2 && exports2.__read || function(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m)
        return o;
      var i = m.call(o), r, ar = [], e;
      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
          ar.push(r.value);
      } catch (error) {
        e = { error };
      } finally {
        try {
          if (r && !r.done && (m = i["return"]))
            m.call(i);
        } finally {
          if (e)
            throw e.error;
        }
      }
      return ar;
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.fromEvent = void 0;
    var innerFrom_1 = require_innerFrom();
    var Observable_1 = require_Observable();
    var mergeMap_1 = require_mergeMap();
    var isArrayLike_1 = require_isArrayLike();
    var isFunction_1 = require_isFunction();
    var mapOneOrManyArgs_1 = require_mapOneOrManyArgs();
    var nodeEventEmitterMethods = ["addListener", "removeListener"];
    var eventTargetMethods = ["addEventListener", "removeEventListener"];
    var jqueryMethods = ["on", "off"];
    function fromEvent4(target, eventName, options, resultSelector) {
      if (isFunction_1.isFunction(options)) {
        resultSelector = options;
        options = void 0;
      }
      if (resultSelector) {
        return fromEvent4(target, eventName, options).pipe(mapOneOrManyArgs_1.mapOneOrManyArgs(resultSelector));
      }
      var _a = __read(isEventTarget(target) ? eventTargetMethods.map(function(methodName) {
        return function(handler) {
          return target[methodName](eventName, handler, options);
        };
      }) : isNodeStyleEventEmitter(target) ? nodeEventEmitterMethods.map(toCommonHandlerRegistry(target, eventName)) : isJQueryStyleEventEmitter(target) ? jqueryMethods.map(toCommonHandlerRegistry(target, eventName)) : [], 2), add = _a[0], remove = _a[1];
      if (!add) {
        if (isArrayLike_1.isArrayLike(target)) {
          return mergeMap_1.mergeMap(function(subTarget) {
            return fromEvent4(subTarget, eventName, options);
          })(innerFrom_1.innerFrom(target));
        }
      }
      if (!add) {
        throw new TypeError("Invalid event target");
      }
      return new Observable_1.Observable(function(subscriber) {
        var handler = function() {
          var args = [];
          for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
          }
          return subscriber.next(1 < args.length ? args : args[0]);
        };
        add(handler);
        return function() {
          return remove(handler);
        };
      });
    }
    exports2.fromEvent = fromEvent4;
    function toCommonHandlerRegistry(target, eventName) {
      return function(methodName) {
        return function(handler) {
          return target[methodName](eventName, handler);
        };
      };
    }
    function isNodeStyleEventEmitter(target) {
      return isFunction_1.isFunction(target.addListener) && isFunction_1.isFunction(target.removeListener);
    }
    function isJQueryStyleEventEmitter(target) {
      return isFunction_1.isFunction(target.on) && isFunction_1.isFunction(target.off);
    }
    function isEventTarget(target) {
      return isFunction_1.isFunction(target.addEventListener) && isFunction_1.isFunction(target.removeEventListener);
    }
  }
});

// ../../../node_modules/rxjs/dist/cjs/internal/observable/fromEventPattern.js
var require_fromEventPattern = __commonJS({
  "../../../node_modules/rxjs/dist/cjs/internal/observable/fromEventPattern.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.fromEventPattern = void 0;
    var Observable_1 = require_Observable();
    var isFunction_1 = require_isFunction();
    var mapOneOrManyArgs_1 = require_mapOneOrManyArgs();
    function fromEventPattern(addHandler, removeHandler, resultSelector) {
      if (resultSelector) {
        return fromEventPattern(addHandler, removeHandler).pipe(mapOneOrManyArgs_1.mapOneOrManyArgs(resultSelector));
      }
      return new Observable_1.Observable(function(subscriber) {
        var handler = function() {
          var e = [];
          for (var _i = 0; _i < arguments.length; _i++) {
            e[_i] = arguments[_i];
          }
          return subscriber.next(e.length === 1 ? e[0] : e);
        };
        var retValue = addHandler(handler);
        return isFunction_1.isFunction(removeHandler) ? function() {
          return removeHandler(handler, retValue);
        } : void 0;
      });
    }
    exports2.fromEventPattern = fromEventPattern;
  }
});

// ../../../node_modules/rxjs/dist/cjs/internal/observable/generate.js
var require_generate = __commonJS({
  "../../../node_modules/rxjs/dist/cjs/internal/observable/generate.js"(exports2) {
    "use strict";
    var __generator = exports2 && exports2.__generator || function(thisArg, body) {
      var _ = { label: 0, sent: function() {
        if (t[0] & 1)
          throw t[1];
        return t[1];
      }, trys: [], ops: [] }, f, y, t, g;
      return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
      }), g;
      function verb(n) {
        return function(v) {
          return step([n, v]);
        };
      }
      function step(op) {
        if (f)
          throw new TypeError("Generator is already executing.");
        while (_)
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
              return t;
            if (y = 0, t)
              op = [op[0] & 2, t.value];
            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;
              case 4:
                _.label++;
                return { value: op[1], done: false };
              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;
              case 7:
                op = _.ops.pop();
                _.trys.pop();
                continue;
              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }
                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }
                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }
                if (t && _.label < t[2]) {
                  _.label = t[2];
                  _.ops.push(op);
                  break;
                }
                if (t[2])
                  _.ops.pop();
                _.trys.pop();
                continue;
            }
            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        if (op[0] & 5)
          throw op[1];
        return { value: op[0] ? op[1] : void 0, done: true };
      }
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.generate = void 0;
    var identity_1 = require_identity();
    var isScheduler_1 = require_isScheduler();
    var defer_1 = require_defer();
    var scheduleIterable_1 = require_scheduleIterable();
    function generate(initialStateOrOptions, condition, iterate, resultSelectorOrScheduler, scheduler) {
      var _a, _b;
      var resultSelector;
      var initialState;
      if (arguments.length === 1) {
        _a = initialStateOrOptions, initialState = _a.initialState, condition = _a.condition, iterate = _a.iterate, _b = _a.resultSelector, resultSelector = _b === void 0 ? identity_1.identity : _b, scheduler = _a.scheduler;
      } else {
        initialState = initialStateOrOptions;
        if (!resultSelectorOrScheduler || isScheduler_1.isScheduler(resultSelectorOrScheduler)) {
          resultSelector = identity_1.identity;
          scheduler = resultSelectorOrScheduler;
        } else {
          resultSelector = resultSelectorOrScheduler;
        }
      }
      function gen() {
        var state;
        return __generator(this, function(_a2) {
          switch (_a2.label) {
            case 0:
              state = initialState;
              _a2.label = 1;
            case 1:
              if (!(!condition || condition(state)))
                return [3, 4];
              return [4, resultSelector(state)];
            case 2:
              _a2.sent();
              _a2.label = 3;
            case 3:
              state = iterate(state);
              return [3, 1];
            case 4:
              return [2];
          }
        });
      }
      return defer_1.defer(scheduler ? function() {
        return scheduleIterable_1.scheduleIterable(gen(), scheduler);
      } : gen);
    }
    exports2.generate = generate;
  }
});

// ../../../node_modules/rxjs/dist/cjs/internal/observable/iif.js
var require_iif = __commonJS({
  "../../../node_modules/rxjs/dist/cjs/internal/observable/iif.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.iif = void 0;
    var defer_1 = require_defer();
    function iif(condition, trueResult, falseResult) {
      return defer_1.defer(function() {
        return condition() ? trueResult : falseResult;
      });
    }
    exports2.iif = iif;
  }
});

// ../../../node_modules/rxjs/dist/cjs/internal/observable/timer.js
var require_timer = __commonJS({
  "../../../node_modules/rxjs/dist/cjs/internal/observable/timer.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.timer = void 0;
    var Observable_1 = require_Observable();
    var async_1 = require_async();
    var isScheduler_1 = require_isScheduler();
    var isDate_1 = require_isDate();
    function timer2(dueTime, intervalOrScheduler, scheduler) {
      if (dueTime === void 0) {
        dueTime = 0;
      }
      if (scheduler === void 0) {
        scheduler = async_1.async;
      }
      var intervalDuration = -1;
      if (intervalOrScheduler != null) {
        if (isScheduler_1.isScheduler(intervalOrScheduler)) {
          scheduler = intervalOrScheduler;
        } else {
          intervalDuration = intervalOrScheduler;
        }
      }
      return new Observable_1.Observable(function(subscriber) {
        var due = isDate_1.isValidDate(dueTime) ? +dueTime - scheduler.now() : dueTime;
        if (due < 0) {
          due = 0;
        }
        var n = 0;
        return scheduler.schedule(function() {
          if (!subscriber.closed) {
            subscriber.next(n++);
            if (0 <= intervalDuration) {
              this.schedule(void 0, intervalDuration);
            } else {
              subscriber.complete();
            }
          }
        }, due);
      });
    }
    exports2.timer = timer2;
  }
});

// ../../../node_modules/rxjs/dist/cjs/internal/observable/interval.js
var require_interval = __commonJS({
  "../../../node_modules/rxjs/dist/cjs/internal/observable/interval.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.interval = void 0;
    var async_1 = require_async();
    var timer_1 = require_timer();
    function interval(period, scheduler) {
      if (period === void 0) {
        period = 0;
      }
      if (scheduler === void 0) {
        scheduler = async_1.asyncScheduler;
      }
      if (period < 0) {
        period = 0;
      }
      return timer_1.timer(period, period, scheduler);
    }
    exports2.interval = interval;
  }
});

// ../../../node_modules/rxjs/dist/cjs/internal/observable/merge.js
var require_merge = __commonJS({
  "../../../node_modules/rxjs/dist/cjs/internal/observable/merge.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.merge = void 0;
    var mergeAll_1 = require_mergeAll();
    var innerFrom_1 = require_innerFrom();
    var empty_1 = require_empty();
    var args_1 = require_args();
    var from_1 = require_from();
    function merge() {
      var args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }
      var scheduler = args_1.popScheduler(args);
      var concurrent = args_1.popNumber(args, Infinity);
      var sources = args;
      return !sources.length ? empty_1.EMPTY : sources.length === 1 ? innerFrom_1.innerFrom(sources[0]) : mergeAll_1.mergeAll(concurrent)(from_1.from(sources, scheduler));
    }
    exports2.merge = merge;
  }
});

// ../../../node_modules/rxjs/dist/cjs/internal/observable/never.js
var require_never = __commonJS({
  "../../../node_modules/rxjs/dist/cjs/internal/observable/never.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.never = exports2.NEVER = void 0;
    var Observable_1 = require_Observable();
    var noop_1 = require_noop();
    exports2.NEVER = new Observable_1.Observable(noop_1.noop);
    function never() {
      return exports2.NEVER;
    }
    exports2.never = never;
  }
});

// ../../../node_modules/rxjs/dist/cjs/internal/util/argsOrArgArray.js
var require_argsOrArgArray = __commonJS({
  "../../../node_modules/rxjs/dist/cjs/internal/util/argsOrArgArray.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.argsOrArgArray = void 0;
    var isArray2 = Array.isArray;
    function argsOrArgArray(args) {
      return args.length === 1 && isArray2(args[0]) ? args[0] : args;
    }
    exports2.argsOrArgArray = argsOrArgArray;
  }
});

// ../../../node_modules/rxjs/dist/cjs/internal/observable/onErrorResumeNext.js
var require_onErrorResumeNext = __commonJS({
  "../../../node_modules/rxjs/dist/cjs/internal/observable/onErrorResumeNext.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.onErrorResumeNext = void 0;
    var Observable_1 = require_Observable();
    var argsOrArgArray_1 = require_argsOrArgArray();
    var OperatorSubscriber_1 = require_OperatorSubscriber();
    var noop_1 = require_noop();
    var innerFrom_1 = require_innerFrom();
    function onErrorResumeNext() {
      var sources = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        sources[_i] = arguments[_i];
      }
      var nextSources = argsOrArgArray_1.argsOrArgArray(sources);
      return new Observable_1.Observable(function(subscriber) {
        var sourceIndex = 0;
        var subscribeNext = function() {
          if (sourceIndex < nextSources.length) {
            var nextSource = void 0;
            try {
              nextSource = innerFrom_1.innerFrom(nextSources[sourceIndex++]);
            } catch (err) {
              subscribeNext();
              return;
            }
            var innerSubscriber = new OperatorSubscriber_1.OperatorSubscriber(subscriber, void 0, noop_1.noop, noop_1.noop);
            nextSource.subscribe(innerSubscriber);
            innerSubscriber.add(subscribeNext);
          } else {
            subscriber.complete();
          }
        };
        subscribeNext();
      });
    }
    exports2.onErrorResumeNext = onErrorResumeNext;
  }
});

// ../../../node_modules/rxjs/dist/cjs/internal/observable/pairs.js
var require_pairs = __commonJS({
  "../../../node_modules/rxjs/dist/cjs/internal/observable/pairs.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.pairs = void 0;
    var from_1 = require_from();
    function pairs(obj, scheduler) {
      return from_1.from(Object.entries(obj), scheduler);
    }
    exports2.pairs = pairs;
  }
});

// ../../../node_modules/rxjs/dist/cjs/internal/util/not.js
var require_not = __commonJS({
  "../../../node_modules/rxjs/dist/cjs/internal/util/not.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.not = void 0;
    function not(pred, thisArg) {
      return function(value, index) {
        return !pred.call(thisArg, value, index);
      };
    }
    exports2.not = not;
  }
});

// ../../../node_modules/rxjs/dist/cjs/internal/operators/filter.js
var require_filter = __commonJS({
  "../../../node_modules/rxjs/dist/cjs/internal/operators/filter.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.filter = void 0;
    var lift_1 = require_lift();
    var OperatorSubscriber_1 = require_OperatorSubscriber();
    function filter(predicate, thisArg) {
      return lift_1.operate(function(source, subscriber) {
        var index = 0;
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
          return predicate.call(thisArg, value, index++) && subscriber.next(value);
        }));
      });
    }
    exports2.filter = filter;
  }
});

// ../../../node_modules/rxjs/dist/cjs/internal/observable/partition.js
var require_partition = __commonJS({
  "../../../node_modules/rxjs/dist/cjs/internal/observable/partition.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.partition = void 0;
    var not_1 = require_not();
    var filter_1 = require_filter();
    var innerFrom_1 = require_innerFrom();
    function partition(source, predicate, thisArg) {
      return [filter_1.filter(predicate, thisArg)(innerFrom_1.innerFrom(source)), filter_1.filter(not_1.not(predicate, thisArg))(innerFrom_1.innerFrom(source))];
    }
    exports2.partition = partition;
  }
});

// ../../../node_modules/rxjs/dist/cjs/internal/observable/race.js
var require_race = __commonJS({
  "../../../node_modules/rxjs/dist/cjs/internal/observable/race.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.raceInit = exports2.race = void 0;
    var Observable_1 = require_Observable();
    var innerFrom_1 = require_innerFrom();
    var argsOrArgArray_1 = require_argsOrArgArray();
    var OperatorSubscriber_1 = require_OperatorSubscriber();
    function race2() {
      var sources = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        sources[_i] = arguments[_i];
      }
      sources = argsOrArgArray_1.argsOrArgArray(sources);
      return sources.length === 1 ? innerFrom_1.innerFrom(sources[0]) : new Observable_1.Observable(raceInit(sources));
    }
    exports2.race = race2;
    function raceInit(sources) {
      return function(subscriber) {
        var subscriptions = [];
        var _loop_1 = function(i2) {
          subscriptions.push(innerFrom_1.innerFrom(sources[i2]).subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
            if (subscriptions) {
              for (var s = 0; s < subscriptions.length; s++) {
                s !== i2 && subscriptions[s].unsubscribe();
              }
              subscriptions = null;
            }
            subscriber.next(value);
          })));
        };
        for (var i = 0; subscriptions && !subscriber.closed && i < sources.length; i++) {
          _loop_1(i);
        }
      };
    }
    exports2.raceInit = raceInit;
  }
});

// ../../../node_modules/rxjs/dist/cjs/internal/observable/range.js
var require_range = __commonJS({
  "../../../node_modules/rxjs/dist/cjs/internal/observable/range.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.range = void 0;
    var Observable_1 = require_Observable();
    var empty_1 = require_empty();
    function range(start, count, scheduler) {
      if (count == null) {
        count = start;
        start = 0;
      }
      if (count <= 0) {
        return empty_1.EMPTY;
      }
      var end = count + start;
      return new Observable_1.Observable(scheduler ? function(subscriber) {
        var n = start;
        return scheduler.schedule(function() {
          if (n < end) {
            subscriber.next(n++);
            this.schedule();
          } else {
            subscriber.complete();
          }
        });
      } : function(subscriber) {
        var n = start;
        while (n < end && !subscriber.closed) {
          subscriber.next(n++);
        }
        subscriber.complete();
      });
    }
    exports2.range = range;
  }
});

// ../../../node_modules/rxjs/dist/cjs/internal/observable/using.js
var require_using = __commonJS({
  "../../../node_modules/rxjs/dist/cjs/internal/observable/using.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.using = void 0;
    var Observable_1 = require_Observable();
    var innerFrom_1 = require_innerFrom();
    var empty_1 = require_empty();
    function using(resourceFactory, observableFactory) {
      return new Observable_1.Observable(function(subscriber) {
        var resource = resourceFactory();
        var result = observableFactory(resource);
        var source = result ? innerFrom_1.innerFrom(result) : empty_1.EMPTY;
        source.subscribe(subscriber);
        return function() {
          if (resource) {
            resource.unsubscribe();
          }
        };
      });
    }
    exports2.using = using;
  }
});

// ../../../node_modules/rxjs/dist/cjs/internal/observable/zip.js
var require_zip = __commonJS({
  "../../../node_modules/rxjs/dist/cjs/internal/observable/zip.js"(exports2) {
    "use strict";
    var __read = exports2 && exports2.__read || function(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m)
        return o;
      var i = m.call(o), r, ar = [], e;
      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
          ar.push(r.value);
      } catch (error) {
        e = { error };
      } finally {
        try {
          if (r && !r.done && (m = i["return"]))
            m.call(i);
        } finally {
          if (e)
            throw e.error;
        }
      }
      return ar;
    };
    var __spreadArray = exports2 && exports2.__spreadArray || function(to, from) {
      for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
      return to;
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.zip = void 0;
    var Observable_1 = require_Observable();
    var innerFrom_1 = require_innerFrom();
    var argsOrArgArray_1 = require_argsOrArgArray();
    var empty_1 = require_empty();
    var OperatorSubscriber_1 = require_OperatorSubscriber();
    var args_1 = require_args();
    function zip() {
      var args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }
      var resultSelector = args_1.popResultSelector(args);
      var sources = argsOrArgArray_1.argsOrArgArray(args);
      return sources.length ? new Observable_1.Observable(function(subscriber) {
        var buffers = sources.map(function() {
          return [];
        });
        var completed = sources.map(function() {
          return false;
        });
        subscriber.add(function() {
          buffers = completed = null;
        });
        var _loop_1 = function(sourceIndex2) {
          innerFrom_1.innerFrom(sources[sourceIndex2]).subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
            buffers[sourceIndex2].push(value);
            if (buffers.every(function(buffer) {
              return buffer.length;
            })) {
              var result = buffers.map(function(buffer) {
                return buffer.shift();
              });
              subscriber.next(resultSelector ? resultSelector.apply(void 0, __spreadArray([], __read(result))) : result);
              if (buffers.some(function(buffer, i) {
                return !buffer.length && completed[i];
              })) {
                subscriber.complete();
              }
            }
          }, function() {
            completed[sourceIndex2] = true;
            !buffers[sourceIndex2].length && subscriber.complete();
          }));
        };
        for (var sourceIndex = 0; !subscriber.closed && sourceIndex < sources.length; sourceIndex++) {
          _loop_1(sourceIndex);
        }
        return function() {
          buffers = completed = null;
        };
      }) : empty_1.EMPTY;
    }
    exports2.zip = zip;
  }
});

// ../../../node_modules/rxjs/dist/cjs/internal/types.js
var require_types = __commonJS({
  "../../../node_modules/rxjs/dist/cjs/internal/types.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
  }
});

// ../../../node_modules/rxjs/dist/cjs/internal/operators/audit.js
var require_audit = __commonJS({
  "../../../node_modules/rxjs/dist/cjs/internal/operators/audit.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.audit = void 0;
    var lift_1 = require_lift();
    var innerFrom_1 = require_innerFrom();
    var OperatorSubscriber_1 = require_OperatorSubscriber();
    function audit(durationSelector) {
      return lift_1.operate(function(source, subscriber) {
        var hasValue = false;
        var lastValue = null;
        var durationSubscriber = null;
        var isComplete = false;
        var endDuration = function() {
          durationSubscriber === null || durationSubscriber === void 0 ? void 0 : durationSubscriber.unsubscribe();
          durationSubscriber = null;
          if (hasValue) {
            hasValue = false;
            var value = lastValue;
            lastValue = null;
            subscriber.next(value);
          }
          isComplete && subscriber.complete();
        };
        var cleanupDuration = function() {
          durationSubscriber = null;
          isComplete && subscriber.complete();
        };
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
          hasValue = true;
          lastValue = value;
          if (!durationSubscriber) {
            innerFrom_1.innerFrom(durationSelector(value)).subscribe(durationSubscriber = OperatorSubscriber_1.createOperatorSubscriber(subscriber, endDuration, cleanupDuration));
          }
        }, function() {
          isComplete = true;
          (!hasValue || !durationSubscriber || durationSubscriber.closed) && subscriber.complete();
        }));
      });
    }
    exports2.audit = audit;
  }
});

// ../../../node_modules/rxjs/dist/cjs/internal/operators/auditTime.js
var require_auditTime = __commonJS({
  "../../../node_modules/rxjs/dist/cjs/internal/operators/auditTime.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.auditTime = void 0;
    var async_1 = require_async();
    var audit_1 = require_audit();
    var timer_1 = require_timer();
    function auditTime(duration, scheduler) {
      if (scheduler === void 0) {
        scheduler = async_1.asyncScheduler;
      }
      return audit_1.audit(function() {
        return timer_1.timer(duration, scheduler);
      });
    }
    exports2.auditTime = auditTime;
  }
});

// ../../../node_modules/rxjs/dist/cjs/internal/operators/buffer.js
var require_buffer = __commonJS({
  "../../../node_modules/rxjs/dist/cjs/internal/operators/buffer.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.buffer = void 0;
    var lift_1 = require_lift();
    var noop_1 = require_noop();
    var OperatorSubscriber_1 = require_OperatorSubscriber();
    var innerFrom_1 = require_innerFrom();
    function buffer(closingNotifier) {
      return lift_1.operate(function(source, subscriber) {
        var currentBuffer = [];
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
          return currentBuffer.push(value);
        }, function() {
          subscriber.next(currentBuffer);
          subscriber.complete();
        }));
        innerFrom_1.innerFrom(closingNotifier).subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function() {
          var b = currentBuffer;
          currentBuffer = [];
          subscriber.next(b);
        }, noop_1.noop));
        return function() {
          currentBuffer = null;
        };
      });
    }
    exports2.buffer = buffer;
  }
});

// ../../../node_modules/rxjs/dist/cjs/internal/operators/bufferCount.js
var require_bufferCount = __commonJS({
  "../../../node_modules/rxjs/dist/cjs/internal/operators/bufferCount.js"(exports2) {
    "use strict";
    var __values = exports2 && exports2.__values || function(o) {
      var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
      if (m)
        return m.call(o);
      if (o && typeof o.length === "number")
        return {
          next: function() {
            if (o && i >= o.length)
              o = void 0;
            return { value: o && o[i++], done: !o };
          }
        };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.bufferCount = void 0;
    var lift_1 = require_lift();
    var OperatorSubscriber_1 = require_OperatorSubscriber();
    var arrRemove_1 = require_arrRemove();
    function bufferCount(bufferSize, startBufferEvery) {
      if (startBufferEvery === void 0) {
        startBufferEvery = null;
      }
      startBufferEvery = startBufferEvery !== null && startBufferEvery !== void 0 ? startBufferEvery : bufferSize;
      return lift_1.operate(function(source, subscriber) {
        var buffers = [];
        var count = 0;
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
          var e_1, _a, e_2, _b;
          var toEmit = null;
          if (count++ % startBufferEvery === 0) {
            buffers.push([]);
          }
          try {
            for (var buffers_1 = __values(buffers), buffers_1_1 = buffers_1.next(); !buffers_1_1.done; buffers_1_1 = buffers_1.next()) {
              var buffer = buffers_1_1.value;
              buffer.push(value);
              if (bufferSize <= buffer.length) {
                toEmit = toEmit !== null && toEmit !== void 0 ? toEmit : [];
                toEmit.push(buffer);
              }
            }
          } catch (e_1_1) {
            e_1 = { error: e_1_1 };
          } finally {
            try {
              if (buffers_1_1 && !buffers_1_1.done && (_a = buffers_1.return))
                _a.call(buffers_1);
            } finally {
              if (e_1)
                throw e_1.error;
            }
          }
          if (toEmit) {
            try {
              for (var toEmit_1 = __values(toEmit), toEmit_1_1 = toEmit_1.next(); !toEmit_1_1.done; toEmit_1_1 = toEmit_1.next()) {
                var buffer = toEmit_1_1.value;
                arrRemove_1.arrRemove(buffers, buffer);
                subscriber.next(buffer);
              }
            } catch (e_2_1) {
              e_2 = { error: e_2_1 };
            } finally {
              try {
                if (toEmit_1_1 && !toEmit_1_1.done && (_b = toEmit_1.return))
                  _b.call(toEmit_1);
              } finally {
                if (e_2)
                  throw e_2.error;
              }
            }
          }
        }, function() {
          var e_3, _a;
          try {
            for (var buffers_2 = __values(buffers), buffers_2_1 = buffers_2.next(); !buffers_2_1.done; buffers_2_1 = buffers_2.next()) {
              var buffer = buffers_2_1.value;
              subscriber.next(buffer);
            }
          } catch (e_3_1) {
            e_3 = { error: e_3_1 };
          } finally {
            try {
              if (buffers_2_1 && !buffers_2_1.done && (_a = buffers_2.return))
                _a.call(buffers_2);
            } finally {
              if (e_3)
                throw e_3.error;
            }
          }
          subscriber.complete();
        }, void 0, function() {
          buffers = null;
        }));
      });
    }
    exports2.bufferCount = bufferCount;
  }
});

// ../../../node_modules/rxjs/dist/cjs/internal/operators/bufferTime.js
var require_bufferTime = __commonJS({
  "../../../node_modules/rxjs/dist/cjs/internal/operators/bufferTime.js"(exports2) {
    "use strict";
    var __values = exports2 && exports2.__values || function(o) {
      var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
      if (m)
        return m.call(o);
      if (o && typeof o.length === "number")
        return {
          next: function() {
            if (o && i >= o.length)
              o = void 0;
            return { value: o && o[i++], done: !o };
          }
        };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.bufferTime = void 0;
    var Subscription_1 = require_Subscription();
    var lift_1 = require_lift();
    var OperatorSubscriber_1 = require_OperatorSubscriber();
    var arrRemove_1 = require_arrRemove();
    var async_1 = require_async();
    var args_1 = require_args();
    var executeSchedule_1 = require_executeSchedule();
    function bufferTime(bufferTimeSpan) {
      var _a, _b;
      var otherArgs = [];
      for (var _i = 1; _i < arguments.length; _i++) {
        otherArgs[_i - 1] = arguments[_i];
      }
      var scheduler = (_a = args_1.popScheduler(otherArgs)) !== null && _a !== void 0 ? _a : async_1.asyncScheduler;
      var bufferCreationInterval = (_b = otherArgs[0]) !== null && _b !== void 0 ? _b : null;
      var maxBufferSize = otherArgs[1] || Infinity;
      return lift_1.operate(function(source, subscriber) {
        var bufferRecords = [];
        var restartOnEmit = false;
        var emit = function(record) {
          var buffer = record.buffer, subs = record.subs;
          subs.unsubscribe();
          arrRemove_1.arrRemove(bufferRecords, record);
          subscriber.next(buffer);
          restartOnEmit && startBuffer();
        };
        var startBuffer = function() {
          if (bufferRecords) {
            var subs = new Subscription_1.Subscription();
            subscriber.add(subs);
            var buffer = [];
            var record_1 = {
              buffer,
              subs
            };
            bufferRecords.push(record_1);
            executeSchedule_1.executeSchedule(subs, scheduler, function() {
              return emit(record_1);
            }, bufferTimeSpan);
          }
        };
        if (bufferCreationInterval !== null && bufferCreationInterval >= 0) {
          executeSchedule_1.executeSchedule(subscriber, scheduler, startBuffer, bufferCreationInterval, true);
        } else {
          restartOnEmit = true;
        }
        startBuffer();
        var bufferTimeSubscriber = OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
          var e_1, _a2;
          var recordsCopy = bufferRecords.slice();
          try {
            for (var recordsCopy_1 = __values(recordsCopy), recordsCopy_1_1 = recordsCopy_1.next(); !recordsCopy_1_1.done; recordsCopy_1_1 = recordsCopy_1.next()) {
              var record = recordsCopy_1_1.value;
              var buffer = record.buffer;
              buffer.push(value);
              maxBufferSize <= buffer.length && emit(record);
            }
          } catch (e_1_1) {
            e_1 = { error: e_1_1 };
          } finally {
            try {
              if (recordsCopy_1_1 && !recordsCopy_1_1.done && (_a2 = recordsCopy_1.return))
                _a2.call(recordsCopy_1);
            } finally {
              if (e_1)
                throw e_1.error;
            }
          }
        }, function() {
          while (bufferRecords === null || bufferRecords === void 0 ? void 0 : bufferRecords.length) {
            subscriber.next(bufferRecords.shift().buffer);
          }
          bufferTimeSubscriber === null || bufferTimeSubscriber === void 0 ? void 0 : bufferTimeSubscriber.unsubscribe();
          subscriber.complete();
          subscriber.unsubscribe();
        }, void 0, function() {
          return bufferRecords = null;
        });
        source.subscribe(bufferTimeSubscriber);
      });
    }
    exports2.bufferTime = bufferTime;
  }
});

// ../../../node_modules/rxjs/dist/cjs/internal/operators/bufferToggle.js
var require_bufferToggle = __commonJS({
  "../../../node_modules/rxjs/dist/cjs/internal/operators/bufferToggle.js"(exports2) {
    "use strict";
    var __values = exports2 && exports2.__values || function(o) {
      var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
      if (m)
        return m.call(o);
      if (o && typeof o.length === "number")
        return {
          next: function() {
            if (o && i >= o.length)
              o = void 0;
            return { value: o && o[i++], done: !o };
          }
        };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.bufferToggle = void 0;
    var Subscription_1 = require_Subscription();
    var lift_1 = require_lift();
    var innerFrom_1 = require_innerFrom();
    var OperatorSubscriber_1 = require_OperatorSubscriber();
    var noop_1 = require_noop();
    var arrRemove_1 = require_arrRemove();
    function bufferToggle(openings, closingSelector) {
      return lift_1.operate(function(source, subscriber) {
        var buffers = [];
        innerFrom_1.innerFrom(openings).subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(openValue) {
          var buffer = [];
          buffers.push(buffer);
          var closingSubscription = new Subscription_1.Subscription();
          var emitBuffer = function() {
            arrRemove_1.arrRemove(buffers, buffer);
            subscriber.next(buffer);
            closingSubscription.unsubscribe();
          };
          closingSubscription.add(innerFrom_1.innerFrom(closingSelector(openValue)).subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, emitBuffer, noop_1.noop)));
        }, noop_1.noop));
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
          var e_1, _a;
          try {
            for (var buffers_1 = __values(buffers), buffers_1_1 = buffers_1.next(); !buffers_1_1.done; buffers_1_1 = buffers_1.next()) {
              var buffer = buffers_1_1.value;
              buffer.push(value);
            }
          } catch (e_1_1) {
            e_1 = { error: e_1_1 };
          } finally {
            try {
              if (buffers_1_1 && !buffers_1_1.done && (_a = buffers_1.return))
                _a.call(buffers_1);
            } finally {
              if (e_1)
                throw e_1.error;
            }
          }
        }, function() {
          while (buffers.length > 0) {
            subscriber.next(buffers.shift());
          }
          subscriber.complete();
        }));
      });
    }
    exports2.bufferToggle = bufferToggle;
  }
});

// ../../../node_modules/rxjs/dist/cjs/internal/operators/bufferWhen.js
var require_bufferWhen = __commonJS({
  "../../../node_modules/rxjs/dist/cjs/internal/operators/bufferWhen.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.bufferWhen = void 0;
    var lift_1 = require_lift();
    var noop_1 = require_noop();
    var OperatorSubscriber_1 = require_OperatorSubscriber();
    var innerFrom_1 = require_innerFrom();
    function bufferWhen(closingSelector) {
      return lift_1.operate(function(source, subscriber) {
        var buffer = null;
        var closingSubscriber = null;
        var openBuffer = function() {
          closingSubscriber === null || closingSubscriber === void 0 ? void 0 : closingSubscriber.unsubscribe();
          var b = buffer;
          buffer = [];
          b && subscriber.next(b);
          innerFrom_1.innerFrom(closingSelector()).subscribe(closingSubscriber = OperatorSubscriber_1.createOperatorSubscriber(subscriber, openBuffer, noop_1.noop));
        };
        openBuffer();
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
          return buffer === null || buffer === void 0 ? void 0 : buffer.push(value);
        }, function() {
          buffer && subscriber.next(buffer);
          subscriber.complete();
        }, void 0, function() {
          return buffer = closingSubscriber = null;
        }));
      });
    }
    exports2.bufferWhen = bufferWhen;
  }
});

// ../../../node_modules/rxjs/dist/cjs/internal/operators/catchError.js
var require_catchError = __commonJS({
  "../../../node_modules/rxjs/dist/cjs/internal/operators/catchError.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.catchError = void 0;
    var innerFrom_1 = require_innerFrom();
    var OperatorSubscriber_1 = require_OperatorSubscriber();
    var lift_1 = require_lift();
    function catchError(selector) {
      return lift_1.operate(function(source, subscriber) {
        var innerSub = null;
        var syncUnsub = false;
        var handledResult;
        innerSub = source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, void 0, void 0, function(err) {
          handledResult = innerFrom_1.innerFrom(selector(err, catchError(selector)(source)));
          if (innerSub) {
            innerSub.unsubscribe();
            innerSub = null;
            handledResult.subscribe(subscriber);
          } else {
            syncUnsub = true;
          }
        }));
        if (syncUnsub) {
          innerSub.unsubscribe();
          innerSub = null;
          handledResult.subscribe(subscriber);
        }
      });
    }
    exports2.catchError = catchError;
  }
});

// ../../../node_modules/rxjs/dist/cjs/internal/operators/scanInternals.js
var require_scanInternals = __commonJS({
  "../../../node_modules/rxjs/dist/cjs/internal/operators/scanInternals.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.scanInternals = void 0;
    var OperatorSubscriber_1 = require_OperatorSubscriber();
    function scanInternals(accumulator, seed, hasSeed, emitOnNext, emitBeforeComplete) {
      return function(source, subscriber) {
        var hasState = hasSeed;
        var state = seed;
        var index = 0;
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
          var i = index++;
          state = hasState ? accumulator(state, value, i) : (hasState = true, value);
          emitOnNext && subscriber.next(state);
        }, emitBeforeComplete && function() {
          hasState && subscriber.next(state);
          subscriber.complete();
        }));
      };
    }
    exports2.scanInternals = scanInternals;
  }
});

// ../../../node_modules/rxjs/dist/cjs/internal/operators/reduce.js
var require_reduce = __commonJS({
  "../../../node_modules/rxjs/dist/cjs/internal/operators/reduce.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.reduce = void 0;
    var scanInternals_1 = require_scanInternals();
    var lift_1 = require_lift();
    function reduce(accumulator, seed) {
      return lift_1.operate(scanInternals_1.scanInternals(accumulator, seed, arguments.length >= 2, false, true));
    }
    exports2.reduce = reduce;
  }
});

// ../../../node_modules/rxjs/dist/cjs/internal/operators/toArray.js
var require_toArray = __commonJS({
  "../../../node_modules/rxjs/dist/cjs/internal/operators/toArray.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.toArray = void 0;
    var reduce_1 = require_reduce();
    var lift_1 = require_lift();
    var arrReducer = function(arr, value) {
      return arr.push(value), arr;
    };
    function toArray() {
      return lift_1.operate(function(source, subscriber) {
        reduce_1.reduce(arrReducer, [])(source).subscribe(subscriber);
      });
    }
    exports2.toArray = toArray;
  }
});

// ../../../node_modules/rxjs/dist/cjs/internal/operators/joinAllInternals.js
var require_joinAllInternals = __commonJS({
  "../../../node_modules/rxjs/dist/cjs/internal/operators/joinAllInternals.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.joinAllInternals = void 0;
    var identity_1 = require_identity();
    var mapOneOrManyArgs_1 = require_mapOneOrManyArgs();
    var pipe_1 = require_pipe();
    var mergeMap_1 = require_mergeMap();
    var toArray_1 = require_toArray();
    function joinAllInternals(joinFn, project) {
      return pipe_1.pipe(toArray_1.toArray(), mergeMap_1.mergeMap(function(sources) {
        return joinFn(sources);
      }), project ? mapOneOrManyArgs_1.mapOneOrManyArgs(project) : identity_1.identity);
    }
    exports2.joinAllInternals = joinAllInternals;
  }
});

// ../../../node_modules/rxjs/dist/cjs/internal/operators/combineLatestAll.js
var require_combineLatestAll = __commonJS({
  "../../../node_modules/rxjs/dist/cjs/internal/operators/combineLatestAll.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.combineLatestAll = void 0;
    var combineLatest_1 = require_combineLatest();
    var joinAllInternals_1 = require_joinAllInternals();
    function combineLatestAll(project) {
      return joinAllInternals_1.joinAllInternals(combineLatest_1.combineLatest, project);
    }
    exports2.combineLatestAll = combineLatestAll;
  }
});

// ../../../node_modules/rxjs/dist/cjs/internal/operators/combineAll.js
var require_combineAll = __commonJS({
  "../../../node_modules/rxjs/dist/cjs/internal/operators/combineAll.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.combineAll = void 0;
    var combineLatestAll_1 = require_combineLatestAll();
    exports2.combineAll = combineLatestAll_1.combineLatestAll;
  }
});

// ../../../node_modules/rxjs/dist/cjs/internal/operators/combineLatest.js
var require_combineLatest2 = __commonJS({
  "../../../node_modules/rxjs/dist/cjs/internal/operators/combineLatest.js"(exports2) {
    "use strict";
    var __read = exports2 && exports2.__read || function(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m)
        return o;
      var i = m.call(o), r, ar = [], e;
      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
          ar.push(r.value);
      } catch (error) {
        e = { error };
      } finally {
        try {
          if (r && !r.done && (m = i["return"]))
            m.call(i);
        } finally {
          if (e)
            throw e.error;
        }
      }
      return ar;
    };
    var __spreadArray = exports2 && exports2.__spreadArray || function(to, from) {
      for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
      return to;
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.combineLatest = void 0;
    var combineLatest_1 = require_combineLatest();
    var lift_1 = require_lift();
    var argsOrArgArray_1 = require_argsOrArgArray();
    var mapOneOrManyArgs_1 = require_mapOneOrManyArgs();
    var pipe_1 = require_pipe();
    var args_1 = require_args();
    function combineLatest() {
      var args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }
      var resultSelector = args_1.popResultSelector(args);
      return resultSelector ? pipe_1.pipe(combineLatest.apply(void 0, __spreadArray([], __read(args))), mapOneOrManyArgs_1.mapOneOrManyArgs(resultSelector)) : lift_1.operate(function(source, subscriber) {
        combineLatest_1.combineLatestInit(__spreadArray([source], __read(argsOrArgArray_1.argsOrArgArray(args))))(subscriber);
      });
    }
    exports2.combineLatest = combineLatest;
  }
});

// ../../../node_modules/rxjs/dist/cjs/internal/operators/combineLatestWith.js
var require_combineLatestWith = __commonJS({
  "../../../node_modules/rxjs/dist/cjs/internal/operators/combineLatestWith.js"(exports2) {
    "use strict";
    var __read = exports2 && exports2.__read || function(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m)
        return o;
      var i = m.call(o), r, ar = [], e;
      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
          ar.push(r.value);
      } catch (error) {
        e = { error };
      } finally {
        try {
          if (r && !r.done && (m = i["return"]))
            m.call(i);
        } finally {
          if (e)
            throw e.error;
        }
      }
      return ar;
    };
    var __spreadArray = exports2 && exports2.__spreadArray || function(to, from) {
      for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
      return to;
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.combineLatestWith = void 0;
    var combineLatest_1 = require_combineLatest2();
    function combineLatestWith() {
      var otherSources = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        otherSources[_i] = arguments[_i];
      }
      return combineLatest_1.combineLatest.apply(void 0, __spreadArray([], __read(otherSources)));
    }
    exports2.combineLatestWith = combineLatestWith;
  }
});

// ../../../node_modules/rxjs/dist/cjs/internal/operators/concatMap.js
var require_concatMap = __commonJS({
  "../../../node_modules/rxjs/dist/cjs/internal/operators/concatMap.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.concatMap = void 0;
    var mergeMap_1 = require_mergeMap();
    var isFunction_1 = require_isFunction();
    function concatMap(project, resultSelector) {
      return isFunction_1.isFunction(resultSelector) ? mergeMap_1.mergeMap(project, resultSelector, 1) : mergeMap_1.mergeMap(project, 1);
    }
    exports2.concatMap = concatMap;
  }
});

// ../../../node_modules/rxjs/dist/cjs/internal/operators/concatMapTo.js
var require_concatMapTo = __commonJS({
  "../../../node_modules/rxjs/dist/cjs/internal/operators/concatMapTo.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.concatMapTo = void 0;
    var concatMap_1 = require_concatMap();
    var isFunction_1 = require_isFunction();
    function concatMapTo(innerObservable, resultSelector) {
      return isFunction_1.isFunction(resultSelector) ? concatMap_1.concatMap(function() {
        return innerObservable;
      }, resultSelector) : concatMap_1.concatMap(function() {
        return innerObservable;
      });
    }
    exports2.concatMapTo = concatMapTo;
  }
});

// ../../../node_modules/rxjs/dist/cjs/internal/operators/concat.js
var require_concat2 = __commonJS({
  "../../../node_modules/rxjs/dist/cjs/internal/operators/concat.js"(exports2) {
    "use strict";
    var __read = exports2 && exports2.__read || function(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m)
        return o;
      var i = m.call(o), r, ar = [], e;
      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
          ar.push(r.value);
      } catch (error) {
        e = { error };
      } finally {
        try {
          if (r && !r.done && (m = i["return"]))
            m.call(i);
        } finally {
          if (e)
            throw e.error;
        }
      }
      return ar;
    };
    var __spreadArray = exports2 && exports2.__spreadArray || function(to, from) {
      for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
      return to;
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.concat = void 0;
    var lift_1 = require_lift();
    var concatAll_1 = require_concatAll();
    var args_1 = require_args();
    var from_1 = require_from();
    function concat() {
      var args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }
      var scheduler = args_1.popScheduler(args);
      return lift_1.operate(function(source, subscriber) {
        concatAll_1.concatAll()(from_1.from(__spreadArray([source], __read(args)), scheduler)).subscribe(subscriber);
      });
    }
    exports2.concat = concat;
  }
});

// ../../../node_modules/rxjs/dist/cjs/internal/operators/concatWith.js
var require_concatWith = __commonJS({
  "../../../node_modules/rxjs/dist/cjs/internal/operators/concatWith.js"(exports2) {
    "use strict";
    var __read = exports2 && exports2.__read || function(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m)
        return o;
      var i = m.call(o), r, ar = [], e;
      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
          ar.push(r.value);
      } catch (error) {
        e = { error };
      } finally {
        try {
          if (r && !r.done && (m = i["return"]))
            m.call(i);
        } finally {
          if (e)
            throw e.error;
        }
      }
      return ar;
    };
    var __spreadArray = exports2 && exports2.__spreadArray || function(to, from) {
      for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
      return to;
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.concatWith = void 0;
    var concat_1 = require_concat2();
    function concatWith() {
      var otherSources = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        otherSources[_i] = arguments[_i];
      }
      return concat_1.concat.apply(void 0, __spreadArray([], __read(otherSources)));
    }
    exports2.concatWith = concatWith;
  }
});

// ../../../node_modules/rxjs/dist/cjs/internal/observable/fromSubscribable.js
var require_fromSubscribable = __commonJS({
  "../../../node_modules/rxjs/dist/cjs/internal/observable/fromSubscribable.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.fromSubscribable = void 0;
    var Observable_1 = require_Observable();
    function fromSubscribable(subscribable) {
      return new Observable_1.Observable(function(subscriber) {
        return subscribable.subscribe(subscriber);
      });
    }
    exports2.fromSubscribable = fromSubscribable;
  }
});

// ../../../node_modules/rxjs/dist/cjs/internal/operators/connect.js
var require_connect = __commonJS({
  "../../../node_modules/rxjs/dist/cjs/internal/operators/connect.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.connect = void 0;
    var Subject_1 = require_Subject();
    var innerFrom_1 = require_innerFrom();
    var lift_1 = require_lift();
    var fromSubscribable_1 = require_fromSubscribable();
    var DEFAULT_CONFIG = {
      connector: function() {
        return new Subject_1.Subject();
      }
    };
    function connect(selector, config) {
      if (config === void 0) {
        config = DEFAULT_CONFIG;
      }
      var connector = config.connector;
      return lift_1.operate(function(source, subscriber) {
        var subject = connector();
        innerFrom_1.innerFrom(selector(fromSubscribable_1.fromSubscribable(subject))).subscribe(subscriber);
        subscriber.add(source.subscribe(subject));
      });
    }
    exports2.connect = connect;
  }
});

// ../../../node_modules/rxjs/dist/cjs/internal/operators/count.js
var require_count = __commonJS({
  "../../../node_modules/rxjs/dist/cjs/internal/operators/count.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.count = void 0;
    var reduce_1 = require_reduce();
    function count(predicate) {
      return reduce_1.reduce(function(total, value, i) {
        return !predicate || predicate(value, i) ? total + 1 : total;
      }, 0);
    }
    exports2.count = count;
  }
});

// ../../../node_modules/rxjs/dist/cjs/internal/operators/debounce.js
var require_debounce = __commonJS({
  "../../../node_modules/rxjs/dist/cjs/internal/operators/debounce.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.debounce = void 0;
    var lift_1 = require_lift();
    var noop_1 = require_noop();
    var OperatorSubscriber_1 = require_OperatorSubscriber();
    var innerFrom_1 = require_innerFrom();
    function debounce(durationSelector) {
      return lift_1.operate(function(source, subscriber) {
        var hasValue = false;
        var lastValue = null;
        var durationSubscriber = null;
        var emit = function() {
          durationSubscriber === null || durationSubscriber === void 0 ? void 0 : durationSubscriber.unsubscribe();
          durationSubscriber = null;
          if (hasValue) {
            hasValue = false;
            var value = lastValue;
            lastValue = null;
            subscriber.next(value);
          }
        };
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
          durationSubscriber === null || durationSubscriber === void 0 ? void 0 : durationSubscriber.unsubscribe();
          hasValue = true;
          lastValue = value;
          durationSubscriber = OperatorSubscriber_1.createOperatorSubscriber(subscriber, emit, noop_1.noop);
          innerFrom_1.innerFrom(durationSelector(value)).subscribe(durationSubscriber);
        }, function() {
          emit();
          subscriber.complete();
        }, void 0, function() {
          lastValue = durationSubscriber = null;
        }));
      });
    }
    exports2.debounce = debounce;
  }
});

// ../../../node_modules/rxjs/dist/cjs/internal/operators/debounceTime.js
var require_debounceTime = __commonJS({
  "../../../node_modules/rxjs/dist/cjs/internal/operators/debounceTime.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.debounceTime = void 0;
    var async_1 = require_async();
    var lift_1 = require_lift();
    var OperatorSubscriber_1 = require_OperatorSubscriber();
    function debounceTime(dueTime, scheduler) {
      if (scheduler === void 0) {
        scheduler = async_1.asyncScheduler;
      }
      return lift_1.operate(function(source, subscriber) {
        var activeTask = null;
        var lastValue = null;
        var lastTime = null;
        var emit = function() {
          if (activeTask) {
            activeTask.unsubscribe();
            activeTask = null;
            var value = lastValue;
            lastValue = null;
            subscriber.next(value);
          }
        };
        function emitWhenIdle() {
          var targetTime = lastTime + dueTime;
          var now = scheduler.now();
          if (now < targetTime) {
            activeTask = this.schedule(void 0, targetTime - now);
            subscriber.add(activeTask);
            return;
          }
          emit();
        }
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
          lastValue = value;
          lastTime = scheduler.now();
          if (!activeTask) {
            activeTask = scheduler.schedule(emitWhenIdle, dueTime);
            subscriber.add(activeTask);
          }
        }, function() {
          emit();
          subscriber.complete();
        }, void 0, function() {
          lastValue = activeTask = null;
        }));
      });
    }
    exports2.debounceTime = debounceTime;
  }
});

// ../../../node_modules/rxjs/dist/cjs/internal/operators/defaultIfEmpty.js
var require_defaultIfEmpty = __commonJS({
  "../../../node_modules/rxjs/dist/cjs/internal/operators/defaultIfEmpty.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.defaultIfEmpty = void 0;
    var lift_1 = require_lift();
    var OperatorSubscriber_1 = require_OperatorSubscriber();
    function defaultIfEmpty(defaultValue) {
      return lift_1.operate(function(source, subscriber) {
        var hasValue = false;
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
          hasValue = true;
          subscriber.next(value);
        }, function() {
          if (!hasValue) {
            subscriber.next(defaultValue);
          }
          subscriber.complete();
        }));
      });
    }
    exports2.defaultIfEmpty = defaultIfEmpty;
  }
});

// ../../../node_modules/rxjs/dist/cjs/internal/operators/take.js
var require_take = __commonJS({
  "../../../node_modules/rxjs/dist/cjs/internal/operators/take.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.take = void 0;
    var empty_1 = require_empty();
    var lift_1 = require_lift();
    var OperatorSubscriber_1 = require_OperatorSubscriber();
    function take(count) {
      return count <= 0 ? function() {
        return empty_1.EMPTY;
      } : lift_1.operate(function(source, subscriber) {
        var seen = 0;
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
          if (++seen <= count) {
            subscriber.next(value);
            if (count <= seen) {
              subscriber.complete();
            }
          }
        }));
      });
    }
    exports2.take = take;
  }
});

// ../../../node_modules/rxjs/dist/cjs/internal/operators/ignoreElements.js
var require_ignoreElements = __commonJS({
  "../../../node_modules/rxjs/dist/cjs/internal/operators/ignoreElements.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.ignoreElements = void 0;
    var lift_1 = require_lift();
    var OperatorSubscriber_1 = require_OperatorSubscriber();
    var noop_1 = require_noop();
    function ignoreElements() {
      return lift_1.operate(function(source, subscriber) {
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, noop_1.noop));
      });
    }
    exports2.ignoreElements = ignoreElements;
  }
});

// ../../../node_modules/rxjs/dist/cjs/internal/operators/mapTo.js
var require_mapTo = __commonJS({
  "../../../node_modules/rxjs/dist/cjs/internal/operators/mapTo.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.mapTo = void 0;
    var map_1 = require_map();
    function mapTo(value) {
      return map_1.map(function() {
        return value;
      });
    }
    exports2.mapTo = mapTo;
  }
});

// ../../../node_modules/rxjs/dist/cjs/internal/operators/delayWhen.js
var require_delayWhen = __commonJS({
  "../../../node_modules/rxjs/dist/cjs/internal/operators/delayWhen.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.delayWhen = void 0;
    var concat_1 = require_concat();
    var take_1 = require_take();
    var ignoreElements_1 = require_ignoreElements();
    var mapTo_1 = require_mapTo();
    var mergeMap_1 = require_mergeMap();
    var innerFrom_1 = require_innerFrom();
    function delayWhen(delayDurationSelector, subscriptionDelay) {
      if (subscriptionDelay) {
        return function(source) {
          return concat_1.concat(subscriptionDelay.pipe(take_1.take(1), ignoreElements_1.ignoreElements()), source.pipe(delayWhen(delayDurationSelector)));
        };
      }
      return mergeMap_1.mergeMap(function(value, index) {
        return innerFrom_1.innerFrom(delayDurationSelector(value, index)).pipe(take_1.take(1), mapTo_1.mapTo(value));
      });
    }
    exports2.delayWhen = delayWhen;
  }
});

// ../../../node_modules/rxjs/dist/cjs/internal/operators/delay.js
var require_delay = __commonJS({
  "../../../node_modules/rxjs/dist/cjs/internal/operators/delay.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.delay = void 0;
    var async_1 = require_async();
    var delayWhen_1 = require_delayWhen();
    var timer_1 = require_timer();
    function delay(due, scheduler) {
      if (scheduler === void 0) {
        scheduler = async_1.asyncScheduler;
      }
      var duration = timer_1.timer(due, scheduler);
      return delayWhen_1.delayWhen(function() {
        return duration;
      });
    }
    exports2.delay = delay;
  }
});

// ../../../node_modules/rxjs/dist/cjs/internal/operators/dematerialize.js
var require_dematerialize = __commonJS({
  "../../../node_modules/rxjs/dist/cjs/internal/operators/dematerialize.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.dematerialize = void 0;
    var Notification_1 = require_Notification();
    var lift_1 = require_lift();
    var OperatorSubscriber_1 = require_OperatorSubscriber();
    function dematerialize() {
      return lift_1.operate(function(source, subscriber) {
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(notification) {
          return Notification_1.observeNotification(notification, subscriber);
        }));
      });
    }
    exports2.dematerialize = dematerialize;
  }
});

// ../../../node_modules/rxjs/dist/cjs/internal/operators/distinct.js
var require_distinct = __commonJS({
  "../../../node_modules/rxjs/dist/cjs/internal/operators/distinct.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.distinct = void 0;
    var lift_1 = require_lift();
    var OperatorSubscriber_1 = require_OperatorSubscriber();
    var noop_1 = require_noop();
    var innerFrom_1 = require_innerFrom();
    function distinct(keySelector, flushes) {
      return lift_1.operate(function(source, subscriber) {
        var distinctKeys = /* @__PURE__ */ new Set();
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
          var key = keySelector ? keySelector(value) : value;
          if (!distinctKeys.has(key)) {
            distinctKeys.add(key);
            subscriber.next(value);
          }
        }));
        flushes && innerFrom_1.innerFrom(flushes).subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function() {
          return distinctKeys.clear();
        }, noop_1.noop));
      });
    }
    exports2.distinct = distinct;
  }
});

// ../../../node_modules/rxjs/dist/cjs/internal/operators/distinctUntilChanged.js
var require_distinctUntilChanged = __commonJS({
  "../../../node_modules/rxjs/dist/cjs/internal/operators/distinctUntilChanged.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.distinctUntilChanged = void 0;
    var identity_1 = require_identity();
    var lift_1 = require_lift();
    var OperatorSubscriber_1 = require_OperatorSubscriber();
    function distinctUntilChanged(comparator, keySelector) {
      if (keySelector === void 0) {
        keySelector = identity_1.identity;
      }
      comparator = comparator !== null && comparator !== void 0 ? comparator : defaultCompare;
      return lift_1.operate(function(source, subscriber) {
        var previousKey;
        var first = true;
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
          var currentKey = keySelector(value);
          if (first || !comparator(previousKey, currentKey)) {
            first = false;
            previousKey = currentKey;
            subscriber.next(value);
          }
        }));
      });
    }
    exports2.distinctUntilChanged = distinctUntilChanged;
    function defaultCompare(a, b) {
      return a === b;
    }
  }
});

// ../../../node_modules/rxjs/dist/cjs/internal/operators/distinctUntilKeyChanged.js
var require_distinctUntilKeyChanged = __commonJS({
  "../../../node_modules/rxjs/dist/cjs/internal/operators/distinctUntilKeyChanged.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.distinctUntilKeyChanged = void 0;
    var distinctUntilChanged_1 = require_distinctUntilChanged();
    function distinctUntilKeyChanged(key, compare) {
      return distinctUntilChanged_1.distinctUntilChanged(function(x, y) {
        return compare ? compare(x[key], y[key]) : x[key] === y[key];
      });
    }
    exports2.distinctUntilKeyChanged = distinctUntilKeyChanged;
  }
});

// ../../../node_modules/rxjs/dist/cjs/internal/operators/throwIfEmpty.js
var require_throwIfEmpty = __commonJS({
  "../../../node_modules/rxjs/dist/cjs/internal/operators/throwIfEmpty.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.throwIfEmpty = void 0;
    var EmptyError_1 = require_EmptyError();
    var lift_1 = require_lift();
    var OperatorSubscriber_1 = require_OperatorSubscriber();
    function throwIfEmpty(errorFactory) {
      if (errorFactory === void 0) {
        errorFactory = defaultErrorFactory;
      }
      return lift_1.operate(function(source, subscriber) {
        var hasValue = false;
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
          hasValue = true;
          subscriber.next(value);
        }, function() {
          return hasValue ? subscriber.complete() : subscriber.error(errorFactory());
        }));
      });
    }
    exports2.throwIfEmpty = throwIfEmpty;
    function defaultErrorFactory() {
      return new EmptyError_1.EmptyError();
    }
  }
});

// ../../../node_modules/rxjs/dist/cjs/internal/operators/elementAt.js
var require_elementAt = __commonJS({
  "../../../node_modules/rxjs/dist/cjs/internal/operators/elementAt.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.elementAt = void 0;
    var ArgumentOutOfRangeError_1 = require_ArgumentOutOfRangeError();
    var filter_1 = require_filter();
    var throwIfEmpty_1 = require_throwIfEmpty();
    var defaultIfEmpty_1 = require_defaultIfEmpty();
    var take_1 = require_take();
    function elementAt(index, defaultValue) {
      if (index < 0) {
        throw new ArgumentOutOfRangeError_1.ArgumentOutOfRangeError();
      }
      var hasDefaultValue = arguments.length >= 2;
      return function(source) {
        return source.pipe(filter_1.filter(function(v, i) {
          return i === index;
        }), take_1.take(1), hasDefaultValue ? defaultIfEmpty_1.defaultIfEmpty(defaultValue) : throwIfEmpty_1.throwIfEmpty(function() {
          return new ArgumentOutOfRangeError_1.ArgumentOutOfRangeError();
        }));
      };
    }
    exports2.elementAt = elementAt;
  }
});

// ../../../node_modules/rxjs/dist/cjs/internal/operators/endWith.js
var require_endWith = __commonJS({
  "../../../node_modules/rxjs/dist/cjs/internal/operators/endWith.js"(exports2) {
    "use strict";
    var __read = exports2 && exports2.__read || function(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m)
        return o;
      var i = m.call(o), r, ar = [], e;
      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
          ar.push(r.value);
      } catch (error) {
        e = { error };
      } finally {
        try {
          if (r && !r.done && (m = i["return"]))
            m.call(i);
        } finally {
          if (e)
            throw e.error;
        }
      }
      return ar;
    };
    var __spreadArray = exports2 && exports2.__spreadArray || function(to, from) {
      for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
      return to;
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.endWith = void 0;
    var concat_1 = require_concat();
    var of_1 = require_of();
    function endWith() {
      var values = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        values[_i] = arguments[_i];
      }
      return function(source) {
        return concat_1.concat(source, of_1.of.apply(void 0, __spreadArray([], __read(values))));
      };
    }
    exports2.endWith = endWith;
  }
});

// ../../../node_modules/rxjs/dist/cjs/internal/operators/every.js
var require_every = __commonJS({
  "../../../node_modules/rxjs/dist/cjs/internal/operators/every.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.every = void 0;
    var lift_1 = require_lift();
    var OperatorSubscriber_1 = require_OperatorSubscriber();
    function every(predicate, thisArg) {
      return lift_1.operate(function(source, subscriber) {
        var index = 0;
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
          if (!predicate.call(thisArg, value, index++, source)) {
            subscriber.next(false);
            subscriber.complete();
          }
        }, function() {
          subscriber.next(true);
          subscriber.complete();
        }));
      });
    }
    exports2.every = every;
  }
});

// ../../../node_modules/rxjs/dist/cjs/internal/operators/exhaustMap.js
var require_exhaustMap = __commonJS({
  "../../../node_modules/rxjs/dist/cjs/internal/operators/exhaustMap.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.exhaustMap = void 0;
    var map_1 = require_map();
    var innerFrom_1 = require_innerFrom();
    var lift_1 = require_lift();
    var OperatorSubscriber_1 = require_OperatorSubscriber();
    function exhaustMap(project, resultSelector) {
      if (resultSelector) {
        return function(source) {
          return source.pipe(exhaustMap(function(a, i) {
            return innerFrom_1.innerFrom(project(a, i)).pipe(map_1.map(function(b, ii) {
              return resultSelector(a, b, i, ii);
            }));
          }));
        };
      }
      return lift_1.operate(function(source, subscriber) {
        var index = 0;
        var innerSub = null;
        var isComplete = false;
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(outerValue) {
          if (!innerSub) {
            innerSub = OperatorSubscriber_1.createOperatorSubscriber(subscriber, void 0, function() {
              innerSub = null;
              isComplete && subscriber.complete();
            });
            innerFrom_1.innerFrom(project(outerValue, index++)).subscribe(innerSub);
          }
        }, function() {
          isComplete = true;
          !innerSub && subscriber.complete();
        }));
      });
    }
    exports2.exhaustMap = exhaustMap;
  }
});

// ../../../node_modules/rxjs/dist/cjs/internal/operators/exhaustAll.js
var require_exhaustAll = __commonJS({
  "../../../node_modules/rxjs/dist/cjs/internal/operators/exhaustAll.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.exhaustAll = void 0;
    var exhaustMap_1 = require_exhaustMap();
    var identity_1 = require_identity();
    function exhaustAll() {
      return exhaustMap_1.exhaustMap(identity_1.identity);
    }
    exports2.exhaustAll = exhaustAll;
  }
});

// ../../../node_modules/rxjs/dist/cjs/internal/operators/exhaust.js
var require_exhaust = __commonJS({
  "../../../node_modules/rxjs/dist/cjs/internal/operators/exhaust.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.exhaust = void 0;
    var exhaustAll_1 = require_exhaustAll();
    exports2.exhaust = exhaustAll_1.exhaustAll;
  }
});

// ../../../node_modules/rxjs/dist/cjs/internal/operators/expand.js
var require_expand = __commonJS({
  "../../../node_modules/rxjs/dist/cjs/internal/operators/expand.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.expand = void 0;
    var lift_1 = require_lift();
    var mergeInternals_1 = require_mergeInternals();
    function expand(project, concurrent, scheduler) {
      if (concurrent === void 0) {
        concurrent = Infinity;
      }
      concurrent = (concurrent || 0) < 1 ? Infinity : concurrent;
      return lift_1.operate(function(source, subscriber) {
        return mergeInternals_1.mergeInternals(source, subscriber, project, concurrent, void 0, true, scheduler);
      });
    }
    exports2.expand = expand;
  }
});

// ../../../node_modules/rxjs/dist/cjs/internal/operators/finalize.js
var require_finalize = __commonJS({
  "../../../node_modules/rxjs/dist/cjs/internal/operators/finalize.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.finalize = void 0;
    var lift_1 = require_lift();
    function finalize(callback) {
      return lift_1.operate(function(source, subscriber) {
        try {
          source.subscribe(subscriber);
        } finally {
          subscriber.add(callback);
        }
      });
    }
    exports2.finalize = finalize;
  }
});

// ../../../node_modules/rxjs/dist/cjs/internal/operators/find.js
var require_find = __commonJS({
  "../../../node_modules/rxjs/dist/cjs/internal/operators/find.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.createFind = exports2.find = void 0;
    var lift_1 = require_lift();
    var OperatorSubscriber_1 = require_OperatorSubscriber();
    function find(predicate, thisArg) {
      return lift_1.operate(createFind(predicate, thisArg, "value"));
    }
    exports2.find = find;
    function createFind(predicate, thisArg, emit) {
      var findIndex = emit === "index";
      return function(source, subscriber) {
        var index = 0;
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
          var i = index++;
          if (predicate.call(thisArg, value, i, source)) {
            subscriber.next(findIndex ? i : value);
            subscriber.complete();
          }
        }, function() {
          subscriber.next(findIndex ? -1 : void 0);
          subscriber.complete();
        }));
      };
    }
    exports2.createFind = createFind;
  }
});

// ../../../node_modules/rxjs/dist/cjs/internal/operators/findIndex.js
var require_findIndex = __commonJS({
  "../../../node_modules/rxjs/dist/cjs/internal/operators/findIndex.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.findIndex = void 0;
    var lift_1 = require_lift();
    var find_1 = require_find();
    function findIndex(predicate, thisArg) {
      return lift_1.operate(find_1.createFind(predicate, thisArg, "index"));
    }
    exports2.findIndex = findIndex;
  }
});

// ../../../node_modules/rxjs/dist/cjs/internal/operators/first.js
var require_first = __commonJS({
  "../../../node_modules/rxjs/dist/cjs/internal/operators/first.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.first = void 0;
    var EmptyError_1 = require_EmptyError();
    var filter_1 = require_filter();
    var take_1 = require_take();
    var defaultIfEmpty_1 = require_defaultIfEmpty();
    var throwIfEmpty_1 = require_throwIfEmpty();
    var identity_1 = require_identity();
    function first(predicate, defaultValue) {
      var hasDefaultValue = arguments.length >= 2;
      return function(source) {
        return source.pipe(predicate ? filter_1.filter(function(v, i) {
          return predicate(v, i, source);
        }) : identity_1.identity, take_1.take(1), hasDefaultValue ? defaultIfEmpty_1.defaultIfEmpty(defaultValue) : throwIfEmpty_1.throwIfEmpty(function() {
          return new EmptyError_1.EmptyError();
        }));
      };
    }
    exports2.first = first;
  }
});

// ../../../node_modules/rxjs/dist/cjs/internal/operators/groupBy.js
var require_groupBy = __commonJS({
  "../../../node_modules/rxjs/dist/cjs/internal/operators/groupBy.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.groupBy = void 0;
    var Observable_1 = require_Observable();
    var innerFrom_1 = require_innerFrom();
    var Subject_1 = require_Subject();
    var lift_1 = require_lift();
    var OperatorSubscriber_1 = require_OperatorSubscriber();
    function groupBy(keySelector, elementOrOptions, duration, connector) {
      return lift_1.operate(function(source, subscriber) {
        var element;
        if (!elementOrOptions || typeof elementOrOptions === "function") {
          element = elementOrOptions;
        } else {
          duration = elementOrOptions.duration, element = elementOrOptions.element, connector = elementOrOptions.connector;
        }
        var groups = /* @__PURE__ */ new Map();
        var notify = function(cb) {
          groups.forEach(cb);
          cb(subscriber);
        };
        var handleError = function(err) {
          return notify(function(consumer) {
            return consumer.error(err);
          });
        };
        var activeGroups = 0;
        var teardownAttempted = false;
        var groupBySourceSubscriber = new OperatorSubscriber_1.OperatorSubscriber(subscriber, function(value) {
          try {
            var key_1 = keySelector(value);
            var group_1 = groups.get(key_1);
            if (!group_1) {
              groups.set(key_1, group_1 = connector ? connector() : new Subject_1.Subject());
              var grouped = createGroupedObservable(key_1, group_1);
              subscriber.next(grouped);
              if (duration) {
                var durationSubscriber_1 = OperatorSubscriber_1.createOperatorSubscriber(group_1, function() {
                  group_1.complete();
                  durationSubscriber_1 === null || durationSubscriber_1 === void 0 ? void 0 : durationSubscriber_1.unsubscribe();
                }, void 0, void 0, function() {
                  return groups.delete(key_1);
                });
                groupBySourceSubscriber.add(innerFrom_1.innerFrom(duration(grouped)).subscribe(durationSubscriber_1));
              }
            }
            group_1.next(element ? element(value) : value);
          } catch (err) {
            handleError(err);
          }
        }, function() {
          return notify(function(consumer) {
            return consumer.complete();
          });
        }, handleError, function() {
          return groups.clear();
        }, function() {
          teardownAttempted = true;
          return activeGroups === 0;
        });
        source.subscribe(groupBySourceSubscriber);
        function createGroupedObservable(key, groupSubject) {
          var result = new Observable_1.Observable(function(groupSubscriber) {
            activeGroups++;
            var innerSub = groupSubject.subscribe(groupSubscriber);
            return function() {
              innerSub.unsubscribe();
              --activeGroups === 0 && teardownAttempted && groupBySourceSubscriber.unsubscribe();
            };
          });
          result.key = key;
          return result;
        }
      });
    }
    exports2.groupBy = groupBy;
  }
});

// ../../../node_modules/rxjs/dist/cjs/internal/operators/isEmpty.js
var require_isEmpty = __commonJS({
  "../../../node_modules/rxjs/dist/cjs/internal/operators/isEmpty.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.isEmpty = void 0;
    var lift_1 = require_lift();
    var OperatorSubscriber_1 = require_OperatorSubscriber();
    function isEmpty() {
      return lift_1.operate(function(source, subscriber) {
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function() {
          subscriber.next(false);
          subscriber.complete();
        }, function() {
          subscriber.next(true);
          subscriber.complete();
        }));
      });
    }
    exports2.isEmpty = isEmpty;
  }
});

// ../../../node_modules/rxjs/dist/cjs/internal/operators/takeLast.js
var require_takeLast = __commonJS({
  "../../../node_modules/rxjs/dist/cjs/internal/operators/takeLast.js"(exports2) {
    "use strict";
    var __values = exports2 && exports2.__values || function(o) {
      var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
      if (m)
        return m.call(o);
      if (o && typeof o.length === "number")
        return {
          next: function() {
            if (o && i >= o.length)
              o = void 0;
            return { value: o && o[i++], done: !o };
          }
        };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.takeLast = void 0;
    var empty_1 = require_empty();
    var lift_1 = require_lift();
    var OperatorSubscriber_1 = require_OperatorSubscriber();
    function takeLast(count) {
      return count <= 0 ? function() {
        return empty_1.EMPTY;
      } : lift_1.operate(function(source, subscriber) {
        var buffer = [];
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
          buffer.push(value);
          count < buffer.length && buffer.shift();
        }, function() {
          var e_1, _a;
          try {
            for (var buffer_1 = __values(buffer), buffer_1_1 = buffer_1.next(); !buffer_1_1.done; buffer_1_1 = buffer_1.next()) {
              var value = buffer_1_1.value;
              subscriber.next(value);
            }
          } catch (e_1_1) {
            e_1 = { error: e_1_1 };
          } finally {
            try {
              if (buffer_1_1 && !buffer_1_1.done && (_a = buffer_1.return))
                _a.call(buffer_1);
            } finally {
              if (e_1)
                throw e_1.error;
            }
          }
          subscriber.complete();
        }, void 0, function() {
          buffer = null;
        }));
      });
    }
    exports2.takeLast = takeLast;
  }
});

// ../../../node_modules/rxjs/dist/cjs/internal/operators/last.js
var require_last = __commonJS({
  "../../../node_modules/rxjs/dist/cjs/internal/operators/last.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.last = void 0;
    var EmptyError_1 = require_EmptyError();
    var filter_1 = require_filter();
    var takeLast_1 = require_takeLast();
    var throwIfEmpty_1 = require_throwIfEmpty();
    var defaultIfEmpty_1 = require_defaultIfEmpty();
    var identity_1 = require_identity();
    function last(predicate, defaultValue) {
      var hasDefaultValue = arguments.length >= 2;
      return function(source) {
        return source.pipe(predicate ? filter_1.filter(function(v, i) {
          return predicate(v, i, source);
        }) : identity_1.identity, takeLast_1.takeLast(1), hasDefaultValue ? defaultIfEmpty_1.defaultIfEmpty(defaultValue) : throwIfEmpty_1.throwIfEmpty(function() {
          return new EmptyError_1.EmptyError();
        }));
      };
    }
    exports2.last = last;
  }
});

// ../../../node_modules/rxjs/dist/cjs/internal/operators/materialize.js
var require_materialize = __commonJS({
  "../../../node_modules/rxjs/dist/cjs/internal/operators/materialize.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.materialize = void 0;
    var Notification_1 = require_Notification();
    var lift_1 = require_lift();
    var OperatorSubscriber_1 = require_OperatorSubscriber();
    function materialize() {
      return lift_1.operate(function(source, subscriber) {
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
          subscriber.next(Notification_1.Notification.createNext(value));
        }, function() {
          subscriber.next(Notification_1.Notification.createComplete());
          subscriber.complete();
        }, function(err) {
          subscriber.next(Notification_1.Notification.createError(err));
          subscriber.complete();
        }));
      });
    }
    exports2.materialize = materialize;
  }
});

// ../../../node_modules/rxjs/dist/cjs/internal/operators/max.js
var require_max = __commonJS({
  "../../../node_modules/rxjs/dist/cjs/internal/operators/max.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.max = void 0;
    var reduce_1 = require_reduce();
    var isFunction_1 = require_isFunction();
    function max(comparer) {
      return reduce_1.reduce(isFunction_1.isFunction(comparer) ? function(x, y) {
        return comparer(x, y) > 0 ? x : y;
      } : function(x, y) {
        return x > y ? x : y;
      });
    }
    exports2.max = max;
  }
});

// ../../../node_modules/rxjs/dist/cjs/internal/operators/flatMap.js
var require_flatMap = __commonJS({
  "../../../node_modules/rxjs/dist/cjs/internal/operators/flatMap.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.flatMap = void 0;
    var mergeMap_1 = require_mergeMap();
    exports2.flatMap = mergeMap_1.mergeMap;
  }
});

// ../../../node_modules/rxjs/dist/cjs/internal/operators/mergeMapTo.js
var require_mergeMapTo = __commonJS({
  "../../../node_modules/rxjs/dist/cjs/internal/operators/mergeMapTo.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.mergeMapTo = void 0;
    var mergeMap_1 = require_mergeMap();
    var isFunction_1 = require_isFunction();
    function mergeMapTo(innerObservable, resultSelector, concurrent) {
      if (concurrent === void 0) {
        concurrent = Infinity;
      }
      if (isFunction_1.isFunction(resultSelector)) {
        return mergeMap_1.mergeMap(function() {
          return innerObservable;
        }, resultSelector, concurrent);
      }
      if (typeof resultSelector === "number") {
        concurrent = resultSelector;
      }
      return mergeMap_1.mergeMap(function() {
        return innerObservable;
      }, concurrent);
    }
    exports2.mergeMapTo = mergeMapTo;
  }
});

// ../../../node_modules/rxjs/dist/cjs/internal/operators/mergeScan.js
var require_mergeScan = __commonJS({
  "../../../node_modules/rxjs/dist/cjs/internal/operators/mergeScan.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.mergeScan = void 0;
    var lift_1 = require_lift();
    var mergeInternals_1 = require_mergeInternals();
    function mergeScan(accumulator, seed, concurrent) {
      if (concurrent === void 0) {
        concurrent = Infinity;
      }
      return lift_1.operate(function(source, subscriber) {
        var state = seed;
        return mergeInternals_1.mergeInternals(source, subscriber, function(value, index) {
          return accumulator(state, value, index);
        }, concurrent, function(value) {
          state = value;
        }, false, void 0, function() {
          return state = null;
        });
      });
    }
    exports2.mergeScan = mergeScan;
  }
});

// ../../../node_modules/rxjs/dist/cjs/internal/operators/merge.js
var require_merge2 = __commonJS({
  "../../../node_modules/rxjs/dist/cjs/internal/operators/merge.js"(exports2) {
    "use strict";
    var __read = exports2 && exports2.__read || function(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m)
        return o;
      var i = m.call(o), r, ar = [], e;
      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
          ar.push(r.value);
      } catch (error) {
        e = { error };
      } finally {
        try {
          if (r && !r.done && (m = i["return"]))
            m.call(i);
        } finally {
          if (e)
            throw e.error;
        }
      }
      return ar;
    };
    var __spreadArray = exports2 && exports2.__spreadArray || function(to, from) {
      for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
      return to;
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.merge = void 0;
    var lift_1 = require_lift();
    var argsOrArgArray_1 = require_argsOrArgArray();
    var mergeAll_1 = require_mergeAll();
    var args_1 = require_args();
    var from_1 = require_from();
    function merge() {
      var args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }
      var scheduler = args_1.popScheduler(args);
      var concurrent = args_1.popNumber(args, Infinity);
      args = argsOrArgArray_1.argsOrArgArray(args);
      return lift_1.operate(function(source, subscriber) {
        mergeAll_1.mergeAll(concurrent)(from_1.from(__spreadArray([source], __read(args)), scheduler)).subscribe(subscriber);
      });
    }
    exports2.merge = merge;
  }
});

// ../../../node_modules/rxjs/dist/cjs/internal/operators/mergeWith.js
var require_mergeWith = __commonJS({
  "../../../node_modules/rxjs/dist/cjs/internal/operators/mergeWith.js"(exports2) {
    "use strict";
    var __read = exports2 && exports2.__read || function(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m)
        return o;
      var i = m.call(o), r, ar = [], e;
      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
          ar.push(r.value);
      } catch (error) {
        e = { error };
      } finally {
        try {
          if (r && !r.done && (m = i["return"]))
            m.call(i);
        } finally {
          if (e)
            throw e.error;
        }
      }
      return ar;
    };
    var __spreadArray = exports2 && exports2.__spreadArray || function(to, from) {
      for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
      return to;
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.mergeWith = void 0;
    var merge_1 = require_merge2();
    function mergeWith() {
      var otherSources = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        otherSources[_i] = arguments[_i];
      }
      return merge_1.merge.apply(void 0, __spreadArray([], __read(otherSources)));
    }
    exports2.mergeWith = mergeWith;
  }
});

// ../../../node_modules/rxjs/dist/cjs/internal/operators/min.js
var require_min = __commonJS({
  "../../../node_modules/rxjs/dist/cjs/internal/operators/min.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.min = void 0;
    var reduce_1 = require_reduce();
    var isFunction_1 = require_isFunction();
    function min(comparer) {
      return reduce_1.reduce(isFunction_1.isFunction(comparer) ? function(x, y) {
        return comparer(x, y) < 0 ? x : y;
      } : function(x, y) {
        return x < y ? x : y;
      });
    }
    exports2.min = min;
  }
});

// ../../../node_modules/rxjs/dist/cjs/internal/operators/multicast.js
var require_multicast = __commonJS({
  "../../../node_modules/rxjs/dist/cjs/internal/operators/multicast.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.multicast = void 0;
    var ConnectableObservable_1 = require_ConnectableObservable();
    var isFunction_1 = require_isFunction();
    var connect_1 = require_connect();
    function multicast(subjectOrSubjectFactory, selector) {
      var subjectFactory = isFunction_1.isFunction(subjectOrSubjectFactory) ? subjectOrSubjectFactory : function() {
        return subjectOrSubjectFactory;
      };
      if (isFunction_1.isFunction(selector)) {
        return connect_1.connect(selector, {
          connector: subjectFactory
        });
      }
      return function(source) {
        return new ConnectableObservable_1.ConnectableObservable(source, subjectFactory);
      };
    }
    exports2.multicast = multicast;
  }
});

// ../../../node_modules/rxjs/dist/cjs/internal/operators/onErrorResumeNextWith.js
var require_onErrorResumeNextWith = __commonJS({
  "../../../node_modules/rxjs/dist/cjs/internal/operators/onErrorResumeNextWith.js"(exports2) {
    "use strict";
    var __read = exports2 && exports2.__read || function(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m)
        return o;
      var i = m.call(o), r, ar = [], e;
      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
          ar.push(r.value);
      } catch (error) {
        e = { error };
      } finally {
        try {
          if (r && !r.done && (m = i["return"]))
            m.call(i);
        } finally {
          if (e)
            throw e.error;
        }
      }
      return ar;
    };
    var __spreadArray = exports2 && exports2.__spreadArray || function(to, from) {
      for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
      return to;
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.onErrorResumeNext = exports2.onErrorResumeNextWith = void 0;
    var argsOrArgArray_1 = require_argsOrArgArray();
    var onErrorResumeNext_1 = require_onErrorResumeNext();
    function onErrorResumeNextWith() {
      var sources = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        sources[_i] = arguments[_i];
      }
      var nextSources = argsOrArgArray_1.argsOrArgArray(sources);
      return function(source) {
        return onErrorResumeNext_1.onErrorResumeNext.apply(void 0, __spreadArray([source], __read(nextSources)));
      };
    }
    exports2.onErrorResumeNextWith = onErrorResumeNextWith;
    exports2.onErrorResumeNext = onErrorResumeNextWith;
  }
});

// ../../../node_modules/rxjs/dist/cjs/internal/operators/pairwise.js
var require_pairwise = __commonJS({
  "../../../node_modules/rxjs/dist/cjs/internal/operators/pairwise.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.pairwise = void 0;
    var lift_1 = require_lift();
    var OperatorSubscriber_1 = require_OperatorSubscriber();
    function pairwise() {
      return lift_1.operate(function(source, subscriber) {
        var prev;
        var hasPrev = false;
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
          var p = prev;
          prev = value;
          hasPrev && subscriber.next([p, value]);
          hasPrev = true;
        }));
      });
    }
    exports2.pairwise = pairwise;
  }
});

// ../../../node_modules/rxjs/dist/cjs/internal/operators/pluck.js
var require_pluck = __commonJS({
  "../../../node_modules/rxjs/dist/cjs/internal/operators/pluck.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.pluck = void 0;
    var map_1 = require_map();
    function pluck() {
      var properties = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        properties[_i] = arguments[_i];
      }
      var length = properties.length;
      if (length === 0) {
        throw new Error("list of properties cannot be empty.");
      }
      return map_1.map(function(x) {
        var currentProp = x;
        for (var i = 0; i < length; i++) {
          var p = currentProp === null || currentProp === void 0 ? void 0 : currentProp[properties[i]];
          if (typeof p !== "undefined") {
            currentProp = p;
          } else {
            return void 0;
          }
        }
        return currentProp;
      });
    }
    exports2.pluck = pluck;
  }
});

// ../../../node_modules/rxjs/dist/cjs/internal/operators/publish.js
var require_publish = __commonJS({
  "../../../node_modules/rxjs/dist/cjs/internal/operators/publish.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.publish = void 0;
    var Subject_1 = require_Subject();
    var multicast_1 = require_multicast();
    var connect_1 = require_connect();
    function publish(selector) {
      return selector ? function(source) {
        return connect_1.connect(selector)(source);
      } : function(source) {
        return multicast_1.multicast(new Subject_1.Subject())(source);
      };
    }
    exports2.publish = publish;
  }
});

// ../../../node_modules/rxjs/dist/cjs/internal/operators/publishBehavior.js
var require_publishBehavior = __commonJS({
  "../../../node_modules/rxjs/dist/cjs/internal/operators/publishBehavior.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.publishBehavior = void 0;
    var BehaviorSubject_1 = require_BehaviorSubject();
    var ConnectableObservable_1 = require_ConnectableObservable();
    function publishBehavior(initialValue) {
      return function(source) {
        var subject = new BehaviorSubject_1.BehaviorSubject(initialValue);
        return new ConnectableObservable_1.ConnectableObservable(source, function() {
          return subject;
        });
      };
    }
    exports2.publishBehavior = publishBehavior;
  }
});

// ../../../node_modules/rxjs/dist/cjs/internal/operators/publishLast.js
var require_publishLast = __commonJS({
  "../../../node_modules/rxjs/dist/cjs/internal/operators/publishLast.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.publishLast = void 0;
    var AsyncSubject_1 = require_AsyncSubject();
    var ConnectableObservable_1 = require_ConnectableObservable();
    function publishLast() {
      return function(source) {
        var subject = new AsyncSubject_1.AsyncSubject();
        return new ConnectableObservable_1.ConnectableObservable(source, function() {
          return subject;
        });
      };
    }
    exports2.publishLast = publishLast;
  }
});

// ../../../node_modules/rxjs/dist/cjs/internal/operators/publishReplay.js
var require_publishReplay = __commonJS({
  "../../../node_modules/rxjs/dist/cjs/internal/operators/publishReplay.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.publishReplay = void 0;
    var ReplaySubject_1 = require_ReplaySubject();
    var multicast_1 = require_multicast();
    var isFunction_1 = require_isFunction();
    function publishReplay(bufferSize, windowTime, selectorOrScheduler, timestampProvider) {
      if (selectorOrScheduler && !isFunction_1.isFunction(selectorOrScheduler)) {
        timestampProvider = selectorOrScheduler;
      }
      var selector = isFunction_1.isFunction(selectorOrScheduler) ? selectorOrScheduler : void 0;
      return function(source) {
        return multicast_1.multicast(new ReplaySubject_1.ReplaySubject(bufferSize, windowTime, timestampProvider), selector)(source);
      };
    }
    exports2.publishReplay = publishReplay;
  }
});

// ../../../node_modules/rxjs/dist/cjs/internal/operators/raceWith.js
var require_raceWith = __commonJS({
  "../../../node_modules/rxjs/dist/cjs/internal/operators/raceWith.js"(exports2) {
    "use strict";
    var __read = exports2 && exports2.__read || function(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m)
        return o;
      var i = m.call(o), r, ar = [], e;
      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
          ar.push(r.value);
      } catch (error) {
        e = { error };
      } finally {
        try {
          if (r && !r.done && (m = i["return"]))
            m.call(i);
        } finally {
          if (e)
            throw e.error;
        }
      }
      return ar;
    };
    var __spreadArray = exports2 && exports2.__spreadArray || function(to, from) {
      for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
      return to;
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.raceWith = void 0;
    var race_1 = require_race();
    var lift_1 = require_lift();
    var identity_1 = require_identity();
    function raceWith() {
      var otherSources = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        otherSources[_i] = arguments[_i];
      }
      return !otherSources.length ? identity_1.identity : lift_1.operate(function(source, subscriber) {
        race_1.raceInit(__spreadArray([source], __read(otherSources)))(subscriber);
      });
    }
    exports2.raceWith = raceWith;
  }
});

// ../../../node_modules/rxjs/dist/cjs/internal/operators/repeat.js
var require_repeat = __commonJS({
  "../../../node_modules/rxjs/dist/cjs/internal/operators/repeat.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.repeat = void 0;
    var empty_1 = require_empty();
    var lift_1 = require_lift();
    var OperatorSubscriber_1 = require_OperatorSubscriber();
    var innerFrom_1 = require_innerFrom();
    var timer_1 = require_timer();
    function repeat(countOrConfig) {
      var _a;
      var count = Infinity;
      var delay;
      if (countOrConfig != null) {
        if (typeof countOrConfig === "object") {
          _a = countOrConfig.count, count = _a === void 0 ? Infinity : _a, delay = countOrConfig.delay;
        } else {
          count = countOrConfig;
        }
      }
      return count <= 0 ? function() {
        return empty_1.EMPTY;
      } : lift_1.operate(function(source, subscriber) {
        var soFar = 0;
        var sourceSub;
        var resubscribe = function() {
          sourceSub === null || sourceSub === void 0 ? void 0 : sourceSub.unsubscribe();
          sourceSub = null;
          if (delay != null) {
            var notifier = typeof delay === "number" ? timer_1.timer(delay) : innerFrom_1.innerFrom(delay(soFar));
            var notifierSubscriber_1 = OperatorSubscriber_1.createOperatorSubscriber(subscriber, function() {
              notifierSubscriber_1.unsubscribe();
              subscribeToSource();
            });
            notifier.subscribe(notifierSubscriber_1);
          } else {
            subscribeToSource();
          }
        };
        var subscribeToSource = function() {
          var syncUnsub = false;
          sourceSub = source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, void 0, function() {
            if (++soFar < count) {
              if (sourceSub) {
                resubscribe();
              } else {
                syncUnsub = true;
              }
            } else {
              subscriber.complete();
            }
          }));
          if (syncUnsub) {
            resubscribe();
          }
        };
        subscribeToSource();
      });
    }
    exports2.repeat = repeat;
  }
});

// ../../../node_modules/rxjs/dist/cjs/internal/operators/repeatWhen.js
var require_repeatWhen = __commonJS({
  "../../../node_modules/rxjs/dist/cjs/internal/operators/repeatWhen.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.repeatWhen = void 0;
    var innerFrom_1 = require_innerFrom();
    var Subject_1 = require_Subject();
    var lift_1 = require_lift();
    var OperatorSubscriber_1 = require_OperatorSubscriber();
    function repeatWhen(notifier) {
      return lift_1.operate(function(source, subscriber) {
        var innerSub;
        var syncResub = false;
        var completions$;
        var isNotifierComplete = false;
        var isMainComplete = false;
        var checkComplete = function() {
          return isMainComplete && isNotifierComplete && (subscriber.complete(), true);
        };
        var getCompletionSubject = function() {
          if (!completions$) {
            completions$ = new Subject_1.Subject();
            innerFrom_1.innerFrom(notifier(completions$)).subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function() {
              if (innerSub) {
                subscribeForRepeatWhen();
              } else {
                syncResub = true;
              }
            }, function() {
              isNotifierComplete = true;
              checkComplete();
            }));
          }
          return completions$;
        };
        var subscribeForRepeatWhen = function() {
          isMainComplete = false;
          innerSub = source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, void 0, function() {
            isMainComplete = true;
            !checkComplete() && getCompletionSubject().next();
          }));
          if (syncResub) {
            innerSub.unsubscribe();
            innerSub = null;
            syncResub = false;
            subscribeForRepeatWhen();
          }
        };
        subscribeForRepeatWhen();
      });
    }
    exports2.repeatWhen = repeatWhen;
  }
});

// ../../../node_modules/rxjs/dist/cjs/internal/operators/retry.js
var require_retry = __commonJS({
  "../../../node_modules/rxjs/dist/cjs/internal/operators/retry.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.retry = void 0;
    var lift_1 = require_lift();
    var OperatorSubscriber_1 = require_OperatorSubscriber();
    var identity_1 = require_identity();
    var timer_1 = require_timer();
    var innerFrom_1 = require_innerFrom();
    function retry(configOrCount) {
      if (configOrCount === void 0) {
        configOrCount = Infinity;
      }
      var config;
      if (configOrCount && typeof configOrCount === "object") {
        config = configOrCount;
      } else {
        config = {
          count: configOrCount
        };
      }
      var _a = config.count, count = _a === void 0 ? Infinity : _a, delay = config.delay, _b = config.resetOnSuccess, resetOnSuccess = _b === void 0 ? false : _b;
      return count <= 0 ? identity_1.identity : lift_1.operate(function(source, subscriber) {
        var soFar = 0;
        var innerSub;
        var subscribeForRetry = function() {
          var syncUnsub = false;
          innerSub = source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
            if (resetOnSuccess) {
              soFar = 0;
            }
            subscriber.next(value);
          }, void 0, function(err) {
            if (soFar++ < count) {
              var resub_1 = function() {
                if (innerSub) {
                  innerSub.unsubscribe();
                  innerSub = null;
                  subscribeForRetry();
                } else {
                  syncUnsub = true;
                }
              };
              if (delay != null) {
                var notifier = typeof delay === "number" ? timer_1.timer(delay) : innerFrom_1.innerFrom(delay(err, soFar));
                var notifierSubscriber_1 = OperatorSubscriber_1.createOperatorSubscriber(subscriber, function() {
                  notifierSubscriber_1.unsubscribe();
                  resub_1();
                }, function() {
                  subscriber.complete();
                });
                notifier.subscribe(notifierSubscriber_1);
              } else {
                resub_1();
              }
            } else {
              subscriber.error(err);
            }
          }));
          if (syncUnsub) {
            innerSub.unsubscribe();
            innerSub = null;
            subscribeForRetry();
          }
        };
        subscribeForRetry();
      });
    }
    exports2.retry = retry;
  }
});

// ../../../node_modules/rxjs/dist/cjs/internal/operators/retryWhen.js
var require_retryWhen = __commonJS({
  "../../../node_modules/rxjs/dist/cjs/internal/operators/retryWhen.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.retryWhen = void 0;
    var innerFrom_1 = require_innerFrom();
    var Subject_1 = require_Subject();
    var lift_1 = require_lift();
    var OperatorSubscriber_1 = require_OperatorSubscriber();
    function retryWhen(notifier) {
      return lift_1.operate(function(source, subscriber) {
        var innerSub;
        var syncResub = false;
        var errors$;
        var subscribeForRetryWhen = function() {
          innerSub = source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, void 0, void 0, function(err) {
            if (!errors$) {
              errors$ = new Subject_1.Subject();
              innerFrom_1.innerFrom(notifier(errors$)).subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function() {
                return innerSub ? subscribeForRetryWhen() : syncResub = true;
              }));
            }
            if (errors$) {
              errors$.next(err);
            }
          }));
          if (syncResub) {
            innerSub.unsubscribe();
            innerSub = null;
            syncResub = false;
            subscribeForRetryWhen();
          }
        };
        subscribeForRetryWhen();
      });
    }
    exports2.retryWhen = retryWhen;
  }
});

// ../../../node_modules/rxjs/dist/cjs/internal/operators/sample.js
var require_sample = __commonJS({
  "../../../node_modules/rxjs/dist/cjs/internal/operators/sample.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.sample = void 0;
    var innerFrom_1 = require_innerFrom();
    var lift_1 = require_lift();
    var noop_1 = require_noop();
    var OperatorSubscriber_1 = require_OperatorSubscriber();
    function sample(notifier) {
      return lift_1.operate(function(source, subscriber) {
        var hasValue = false;
        var lastValue = null;
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
          hasValue = true;
          lastValue = value;
        }));
        innerFrom_1.innerFrom(notifier).subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function() {
          if (hasValue) {
            hasValue = false;
            var value = lastValue;
            lastValue = null;
            subscriber.next(value);
          }
        }, noop_1.noop));
      });
    }
    exports2.sample = sample;
  }
});

// ../../../node_modules/rxjs/dist/cjs/internal/operators/sampleTime.js
var require_sampleTime = __commonJS({
  "../../../node_modules/rxjs/dist/cjs/internal/operators/sampleTime.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.sampleTime = void 0;
    var async_1 = require_async();
    var sample_1 = require_sample();
    var interval_1 = require_interval();
    function sampleTime(period, scheduler) {
      if (scheduler === void 0) {
        scheduler = async_1.asyncScheduler;
      }
      return sample_1.sample(interval_1.interval(period, scheduler));
    }
    exports2.sampleTime = sampleTime;
  }
});

// ../../../node_modules/rxjs/dist/cjs/internal/operators/scan.js
var require_scan = __commonJS({
  "../../../node_modules/rxjs/dist/cjs/internal/operators/scan.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.scan = void 0;
    var lift_1 = require_lift();
    var scanInternals_1 = require_scanInternals();
    function scan(accumulator, seed) {
      return lift_1.operate(scanInternals_1.scanInternals(accumulator, seed, arguments.length >= 2, true));
    }
    exports2.scan = scan;
  }
});

// ../../../node_modules/rxjs/dist/cjs/internal/operators/sequenceEqual.js
var require_sequenceEqual = __commonJS({
  "../../../node_modules/rxjs/dist/cjs/internal/operators/sequenceEqual.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.sequenceEqual = void 0;
    var lift_1 = require_lift();
    var OperatorSubscriber_1 = require_OperatorSubscriber();
    var innerFrom_1 = require_innerFrom();
    function sequenceEqual(compareTo, comparator) {
      if (comparator === void 0) {
        comparator = function(a, b) {
          return a === b;
        };
      }
      return lift_1.operate(function(source, subscriber) {
        var aState = createState();
        var bState = createState();
        var emit = function(isEqual) {
          subscriber.next(isEqual);
          subscriber.complete();
        };
        var createSubscriber = function(selfState, otherState) {
          var sequenceEqualSubscriber = OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(a) {
            var buffer = otherState.buffer, complete = otherState.complete;
            if (buffer.length === 0) {
              complete ? emit(false) : selfState.buffer.push(a);
            } else {
              !comparator(a, buffer.shift()) && emit(false);
            }
          }, function() {
            selfState.complete = true;
            var complete = otherState.complete, buffer = otherState.buffer;
            complete && emit(buffer.length === 0);
            sequenceEqualSubscriber === null || sequenceEqualSubscriber === void 0 ? void 0 : sequenceEqualSubscriber.unsubscribe();
          });
          return sequenceEqualSubscriber;
        };
        source.subscribe(createSubscriber(aState, bState));
        innerFrom_1.innerFrom(compareTo).subscribe(createSubscriber(bState, aState));
      });
    }
    exports2.sequenceEqual = sequenceEqual;
    function createState() {
      return {
        buffer: [],
        complete: false
      };
    }
  }
});

// ../../../node_modules/rxjs/dist/cjs/internal/operators/share.js
var require_share = __commonJS({
  "../../../node_modules/rxjs/dist/cjs/internal/operators/share.js"(exports2) {
    "use strict";
    var __read = exports2 && exports2.__read || function(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m)
        return o;
      var i = m.call(o), r, ar = [], e;
      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
          ar.push(r.value);
      } catch (error) {
        e = { error };
      } finally {
        try {
          if (r && !r.done && (m = i["return"]))
            m.call(i);
        } finally {
          if (e)
            throw e.error;
        }
      }
      return ar;
    };
    var __spreadArray = exports2 && exports2.__spreadArray || function(to, from) {
      for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
      return to;
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.share = void 0;
    var innerFrom_1 = require_innerFrom();
    var Subject_1 = require_Subject();
    var Subscriber_1 = require_Subscriber();
    var lift_1 = require_lift();
    function share2(options) {
      if (options === void 0) {
        options = {};
      }
      var _a = options.connector, connector = _a === void 0 ? function() {
        return new Subject_1.Subject();
      } : _a, _b = options.resetOnError, resetOnError = _b === void 0 ? true : _b, _c = options.resetOnComplete, resetOnComplete = _c === void 0 ? true : _c, _d = options.resetOnRefCountZero, resetOnRefCountZero = _d === void 0 ? true : _d;
      return function(wrapperSource) {
        var connection;
        var resetConnection;
        var subject;
        var refCount = 0;
        var hasCompleted = false;
        var hasErrored = false;
        var cancelReset = function() {
          resetConnection === null || resetConnection === void 0 ? void 0 : resetConnection.unsubscribe();
          resetConnection = void 0;
        };
        var reset = function() {
          cancelReset();
          connection = subject = void 0;
          hasCompleted = hasErrored = false;
        };
        var resetAndUnsubscribe = function() {
          var conn = connection;
          reset();
          conn === null || conn === void 0 ? void 0 : conn.unsubscribe();
        };
        return lift_1.operate(function(source, subscriber) {
          refCount++;
          if (!hasErrored && !hasCompleted) {
            cancelReset();
          }
          var dest = subject = subject !== null && subject !== void 0 ? subject : connector();
          subscriber.add(function() {
            refCount--;
            if (refCount === 0 && !hasErrored && !hasCompleted) {
              resetConnection = handleReset(resetAndUnsubscribe, resetOnRefCountZero);
            }
          });
          dest.subscribe(subscriber);
          if (!connection && refCount > 0) {
            connection = new Subscriber_1.SafeSubscriber({
              next: function(value) {
                return dest.next(value);
              },
              error: function(err) {
                hasErrored = true;
                cancelReset();
                resetConnection = handleReset(reset, resetOnError, err);
                dest.error(err);
              },
              complete: function() {
                hasCompleted = true;
                cancelReset();
                resetConnection = handleReset(reset, resetOnComplete);
                dest.complete();
              }
            });
            innerFrom_1.innerFrom(source).subscribe(connection);
          }
        })(wrapperSource);
      };
    }
    exports2.share = share2;
    function handleReset(reset, on) {
      var args = [];
      for (var _i = 2; _i < arguments.length; _i++) {
        args[_i - 2] = arguments[_i];
      }
      if (on === true) {
        reset();
        return;
      }
      if (on === false) {
        return;
      }
      var onSubscriber = new Subscriber_1.SafeSubscriber({
        next: function() {
          onSubscriber.unsubscribe();
          reset();
        }
      });
      return innerFrom_1.innerFrom(on.apply(void 0, __spreadArray([], __read(args)))).subscribe(onSubscriber);
    }
  }
});

// ../../../node_modules/rxjs/dist/cjs/internal/operators/shareReplay.js
var require_shareReplay = __commonJS({
  "../../../node_modules/rxjs/dist/cjs/internal/operators/shareReplay.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.shareReplay = void 0;
    var ReplaySubject_1 = require_ReplaySubject();
    var share_1 = require_share();
    function shareReplay(configOrBufferSize, windowTime, scheduler) {
      var _a, _b, _c;
      var bufferSize;
      var refCount = false;
      if (configOrBufferSize && typeof configOrBufferSize === "object") {
        _a = configOrBufferSize.bufferSize, bufferSize = _a === void 0 ? Infinity : _a, _b = configOrBufferSize.windowTime, windowTime = _b === void 0 ? Infinity : _b, _c = configOrBufferSize.refCount, refCount = _c === void 0 ? false : _c, scheduler = configOrBufferSize.scheduler;
      } else {
        bufferSize = configOrBufferSize !== null && configOrBufferSize !== void 0 ? configOrBufferSize : Infinity;
      }
      return share_1.share({
        connector: function() {
          return new ReplaySubject_1.ReplaySubject(bufferSize, windowTime, scheduler);
        },
        resetOnError: true,
        resetOnComplete: false,
        resetOnRefCountZero: refCount
      });
    }
    exports2.shareReplay = shareReplay;
  }
});

// ../../../node_modules/rxjs/dist/cjs/internal/operators/single.js
var require_single = __commonJS({
  "../../../node_modules/rxjs/dist/cjs/internal/operators/single.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.single = void 0;
    var EmptyError_1 = require_EmptyError();
    var SequenceError_1 = require_SequenceError();
    var NotFoundError_1 = require_NotFoundError();
    var lift_1 = require_lift();
    var OperatorSubscriber_1 = require_OperatorSubscriber();
    function single(predicate) {
      return lift_1.operate(function(source, subscriber) {
        var hasValue = false;
        var singleValue;
        var seenValue = false;
        var index = 0;
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
          seenValue = true;
          if (!predicate || predicate(value, index++, source)) {
            hasValue && subscriber.error(new SequenceError_1.SequenceError("Too many matching values"));
            hasValue = true;
            singleValue = value;
          }
        }, function() {
          if (hasValue) {
            subscriber.next(singleValue);
            subscriber.complete();
          } else {
            subscriber.error(seenValue ? new NotFoundError_1.NotFoundError("No matching values") : new EmptyError_1.EmptyError());
          }
        }));
      });
    }
    exports2.single = single;
  }
});

// ../../../node_modules/rxjs/dist/cjs/internal/operators/skip.js
var require_skip = __commonJS({
  "../../../node_modules/rxjs/dist/cjs/internal/operators/skip.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.skip = void 0;
    var filter_1 = require_filter();
    function skip(count) {
      return filter_1.filter(function(_, index) {
        return count <= index;
      });
    }
    exports2.skip = skip;
  }
});

// ../../../node_modules/rxjs/dist/cjs/internal/operators/skipLast.js
var require_skipLast = __commonJS({
  "../../../node_modules/rxjs/dist/cjs/internal/operators/skipLast.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.skipLast = void 0;
    var identity_1 = require_identity();
    var lift_1 = require_lift();
    var OperatorSubscriber_1 = require_OperatorSubscriber();
    function skipLast(skipCount) {
      return skipCount <= 0 ? identity_1.identity : lift_1.operate(function(source, subscriber) {
        var ring = new Array(skipCount);
        var seen = 0;
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
          var valueIndex = seen++;
          if (valueIndex < skipCount) {
            ring[valueIndex] = value;
          } else {
            var index = valueIndex % skipCount;
            var oldValue = ring[index];
            ring[index] = value;
            subscriber.next(oldValue);
          }
        }));
        return function() {
          ring = null;
        };
      });
    }
    exports2.skipLast = skipLast;
  }
});

// ../../../node_modules/rxjs/dist/cjs/internal/operators/skipUntil.js
var require_skipUntil = __commonJS({
  "../../../node_modules/rxjs/dist/cjs/internal/operators/skipUntil.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.skipUntil = void 0;
    var lift_1 = require_lift();
    var OperatorSubscriber_1 = require_OperatorSubscriber();
    var innerFrom_1 = require_innerFrom();
    var noop_1 = require_noop();
    function skipUntil(notifier) {
      return lift_1.operate(function(source, subscriber) {
        var taking = false;
        var skipSubscriber = OperatorSubscriber_1.createOperatorSubscriber(subscriber, function() {
          skipSubscriber === null || skipSubscriber === void 0 ? void 0 : skipSubscriber.unsubscribe();
          taking = true;
        }, noop_1.noop);
        innerFrom_1.innerFrom(notifier).subscribe(skipSubscriber);
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
          return taking && subscriber.next(value);
        }));
      });
    }
    exports2.skipUntil = skipUntil;
  }
});

// ../../../node_modules/rxjs/dist/cjs/internal/operators/skipWhile.js
var require_skipWhile = __commonJS({
  "../../../node_modules/rxjs/dist/cjs/internal/operators/skipWhile.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.skipWhile = void 0;
    var lift_1 = require_lift();
    var OperatorSubscriber_1 = require_OperatorSubscriber();
    function skipWhile(predicate) {
      return lift_1.operate(function(source, subscriber) {
        var taking = false;
        var index = 0;
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
          return (taking || (taking = !predicate(value, index++))) && subscriber.next(value);
        }));
      });
    }
    exports2.skipWhile = skipWhile;
  }
});

// ../../../node_modules/rxjs/dist/cjs/internal/operators/startWith.js
var require_startWith = __commonJS({
  "../../../node_modules/rxjs/dist/cjs/internal/operators/startWith.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.startWith = void 0;
    var concat_1 = require_concat();
    var args_1 = require_args();
    var lift_1 = require_lift();
    function startWith() {
      var values = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        values[_i] = arguments[_i];
      }
      var scheduler = args_1.popScheduler(values);
      return lift_1.operate(function(source, subscriber) {
        (scheduler ? concat_1.concat(values, source, scheduler) : concat_1.concat(values, source)).subscribe(subscriber);
      });
    }
    exports2.startWith = startWith;
  }
});

// ../../../node_modules/rxjs/dist/cjs/internal/operators/switchMap.js
var require_switchMap = __commonJS({
  "../../../node_modules/rxjs/dist/cjs/internal/operators/switchMap.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.switchMap = void 0;
    var innerFrom_1 = require_innerFrom();
    var lift_1 = require_lift();
    var OperatorSubscriber_1 = require_OperatorSubscriber();
    function switchMap(project, resultSelector) {
      return lift_1.operate(function(source, subscriber) {
        var innerSubscriber = null;
        var index = 0;
        var isComplete = false;
        var checkComplete = function() {
          return isComplete && !innerSubscriber && subscriber.complete();
        };
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
          innerSubscriber === null || innerSubscriber === void 0 ? void 0 : innerSubscriber.unsubscribe();
          var innerIndex = 0;
          var outerIndex = index++;
          innerFrom_1.innerFrom(project(value, outerIndex)).subscribe(innerSubscriber = OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(innerValue) {
            return subscriber.next(resultSelector ? resultSelector(value, innerValue, outerIndex, innerIndex++) : innerValue);
          }, function() {
            innerSubscriber = null;
            checkComplete();
          }));
        }, function() {
          isComplete = true;
          checkComplete();
        }));
      });
    }
    exports2.switchMap = switchMap;
  }
});

// ../../../node_modules/rxjs/dist/cjs/internal/operators/switchAll.js
var require_switchAll = __commonJS({
  "../../../node_modules/rxjs/dist/cjs/internal/operators/switchAll.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.switchAll = void 0;
    var switchMap_1 = require_switchMap();
    var identity_1 = require_identity();
    function switchAll() {
      return switchMap_1.switchMap(identity_1.identity);
    }
    exports2.switchAll = switchAll;
  }
});

// ../../../node_modules/rxjs/dist/cjs/internal/operators/switchMapTo.js
var require_switchMapTo = __commonJS({
  "../../../node_modules/rxjs/dist/cjs/internal/operators/switchMapTo.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.switchMapTo = void 0;
    var switchMap_1 = require_switchMap();
    var isFunction_1 = require_isFunction();
    function switchMapTo(innerObservable, resultSelector) {
      return isFunction_1.isFunction(resultSelector) ? switchMap_1.switchMap(function() {
        return innerObservable;
      }, resultSelector) : switchMap_1.switchMap(function() {
        return innerObservable;
      });
    }
    exports2.switchMapTo = switchMapTo;
  }
});

// ../../../node_modules/rxjs/dist/cjs/internal/operators/switchScan.js
var require_switchScan = __commonJS({
  "../../../node_modules/rxjs/dist/cjs/internal/operators/switchScan.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.switchScan = void 0;
    var switchMap_1 = require_switchMap();
    var lift_1 = require_lift();
    function switchScan(accumulator, seed) {
      return lift_1.operate(function(source, subscriber) {
        var state = seed;
        switchMap_1.switchMap(function(value, index) {
          return accumulator(state, value, index);
        }, function(_, innerValue) {
          return state = innerValue, innerValue;
        })(source).subscribe(subscriber);
        return function() {
          state = null;
        };
      });
    }
    exports2.switchScan = switchScan;
  }
});

// ../../../node_modules/rxjs/dist/cjs/internal/operators/takeUntil.js
var require_takeUntil = __commonJS({
  "../../../node_modules/rxjs/dist/cjs/internal/operators/takeUntil.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.takeUntil = void 0;
    var lift_1 = require_lift();
    var OperatorSubscriber_1 = require_OperatorSubscriber();
    var innerFrom_1 = require_innerFrom();
    var noop_1 = require_noop();
    function takeUntil(notifier) {
      return lift_1.operate(function(source, subscriber) {
        innerFrom_1.innerFrom(notifier).subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function() {
          return subscriber.complete();
        }, noop_1.noop));
        !subscriber.closed && source.subscribe(subscriber);
      });
    }
    exports2.takeUntil = takeUntil;
  }
});

// ../../../node_modules/rxjs/dist/cjs/internal/operators/takeWhile.js
var require_takeWhile = __commonJS({
  "../../../node_modules/rxjs/dist/cjs/internal/operators/takeWhile.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.takeWhile = void 0;
    var lift_1 = require_lift();
    var OperatorSubscriber_1 = require_OperatorSubscriber();
    function takeWhile(predicate, inclusive) {
      if (inclusive === void 0) {
        inclusive = false;
      }
      return lift_1.operate(function(source, subscriber) {
        var index = 0;
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
          var result = predicate(value, index++);
          (result || inclusive) && subscriber.next(value);
          !result && subscriber.complete();
        }));
      });
    }
    exports2.takeWhile = takeWhile;
  }
});

// ../../../node_modules/rxjs/dist/cjs/internal/operators/tap.js
var require_tap = __commonJS({
  "../../../node_modules/rxjs/dist/cjs/internal/operators/tap.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.tap = void 0;
    var isFunction_1 = require_isFunction();
    var lift_1 = require_lift();
    var OperatorSubscriber_1 = require_OperatorSubscriber();
    var identity_1 = require_identity();
    function tap2(observerOrNext, error, complete) {
      var tapObserver = isFunction_1.isFunction(observerOrNext) || error || complete ? { next: observerOrNext, error, complete } : observerOrNext;
      return tapObserver ? lift_1.operate(function(source, subscriber) {
        var _a;
        (_a = tapObserver.subscribe) === null || _a === void 0 ? void 0 : _a.call(tapObserver);
        var isUnsub = true;
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
          var _a2;
          (_a2 = tapObserver.next) === null || _a2 === void 0 ? void 0 : _a2.call(tapObserver, value);
          subscriber.next(value);
        }, function() {
          var _a2;
          isUnsub = false;
          (_a2 = tapObserver.complete) === null || _a2 === void 0 ? void 0 : _a2.call(tapObserver);
          subscriber.complete();
        }, function(err) {
          var _a2;
          isUnsub = false;
          (_a2 = tapObserver.error) === null || _a2 === void 0 ? void 0 : _a2.call(tapObserver, err);
          subscriber.error(err);
        }, function() {
          var _a2, _b;
          if (isUnsub) {
            (_a2 = tapObserver.unsubscribe) === null || _a2 === void 0 ? void 0 : _a2.call(tapObserver);
          }
          (_b = tapObserver.finalize) === null || _b === void 0 ? void 0 : _b.call(tapObserver);
        }));
      }) : identity_1.identity;
    }
    exports2.tap = tap2;
  }
});

// ../../../node_modules/rxjs/dist/cjs/internal/operators/throttle.js
var require_throttle = __commonJS({
  "../../../node_modules/rxjs/dist/cjs/internal/operators/throttle.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.throttle = void 0;
    var lift_1 = require_lift();
    var OperatorSubscriber_1 = require_OperatorSubscriber();
    var innerFrom_1 = require_innerFrom();
    function throttle(durationSelector, config) {
      return lift_1.operate(function(source, subscriber) {
        var _a = config !== null && config !== void 0 ? config : {}, _b = _a.leading, leading = _b === void 0 ? true : _b, _c = _a.trailing, trailing = _c === void 0 ? false : _c;
        var hasValue = false;
        var sendValue = null;
        var throttled = null;
        var isComplete = false;
        var endThrottling = function() {
          throttled === null || throttled === void 0 ? void 0 : throttled.unsubscribe();
          throttled = null;
          if (trailing) {
            send();
            isComplete && subscriber.complete();
          }
        };
        var cleanupThrottling = function() {
          throttled = null;
          isComplete && subscriber.complete();
        };
        var startThrottle = function(value) {
          return throttled = innerFrom_1.innerFrom(durationSelector(value)).subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, endThrottling, cleanupThrottling));
        };
        var send = function() {
          if (hasValue) {
            hasValue = false;
            var value = sendValue;
            sendValue = null;
            subscriber.next(value);
            !isComplete && startThrottle(value);
          }
        };
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
          hasValue = true;
          sendValue = value;
          !(throttled && !throttled.closed) && (leading ? send() : startThrottle(value));
        }, function() {
          isComplete = true;
          !(trailing && hasValue && throttled && !throttled.closed) && subscriber.complete();
        }));
      });
    }
    exports2.throttle = throttle;
  }
});

// ../../../node_modules/rxjs/dist/cjs/internal/operators/throttleTime.js
var require_throttleTime = __commonJS({
  "../../../node_modules/rxjs/dist/cjs/internal/operators/throttleTime.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.throttleTime = void 0;
    var async_1 = require_async();
    var throttle_1 = require_throttle();
    var timer_1 = require_timer();
    function throttleTime(duration, scheduler, config) {
      if (scheduler === void 0) {
        scheduler = async_1.asyncScheduler;
      }
      var duration$ = timer_1.timer(duration, scheduler);
      return throttle_1.throttle(function() {
        return duration$;
      }, config);
    }
    exports2.throttleTime = throttleTime;
  }
});

// ../../../node_modules/rxjs/dist/cjs/internal/operators/timeInterval.js
var require_timeInterval = __commonJS({
  "../../../node_modules/rxjs/dist/cjs/internal/operators/timeInterval.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.TimeInterval = exports2.timeInterval = void 0;
    var async_1 = require_async();
    var lift_1 = require_lift();
    var OperatorSubscriber_1 = require_OperatorSubscriber();
    function timeInterval(scheduler) {
      if (scheduler === void 0) {
        scheduler = async_1.asyncScheduler;
      }
      return lift_1.operate(function(source, subscriber) {
        var last = scheduler.now();
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
          var now = scheduler.now();
          var interval = now - last;
          last = now;
          subscriber.next(new TimeInterval(value, interval));
        }));
      });
    }
    exports2.timeInterval = timeInterval;
    var TimeInterval = function() {
      function TimeInterval2(value, interval) {
        this.value = value;
        this.interval = interval;
      }
      return TimeInterval2;
    }();
    exports2.TimeInterval = TimeInterval;
  }
});

// ../../../node_modules/rxjs/dist/cjs/internal/operators/timeoutWith.js
var require_timeoutWith = __commonJS({
  "../../../node_modules/rxjs/dist/cjs/internal/operators/timeoutWith.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.timeoutWith = void 0;
    var async_1 = require_async();
    var isDate_1 = require_isDate();
    var timeout_1 = require_timeout();
    function timeoutWith(due, withObservable, scheduler) {
      var first;
      var each;
      var _with;
      scheduler = scheduler !== null && scheduler !== void 0 ? scheduler : async_1.async;
      if (isDate_1.isValidDate(due)) {
        first = due;
      } else if (typeof due === "number") {
        each = due;
      }
      if (withObservable) {
        _with = function() {
          return withObservable;
        };
      } else {
        throw new TypeError("No observable provided to switch to");
      }
      if (first == null && each == null) {
        throw new TypeError("No timeout provided.");
      }
      return timeout_1.timeout({
        first,
        each,
        scheduler,
        with: _with
      });
    }
    exports2.timeoutWith = timeoutWith;
  }
});

// ../../../node_modules/rxjs/dist/cjs/internal/operators/timestamp.js
var require_timestamp = __commonJS({
  "../../../node_modules/rxjs/dist/cjs/internal/operators/timestamp.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.timestamp = void 0;
    var dateTimestampProvider_1 = require_dateTimestampProvider();
    var map_1 = require_map();
    function timestamp(timestampProvider) {
      if (timestampProvider === void 0) {
        timestampProvider = dateTimestampProvider_1.dateTimestampProvider;
      }
      return map_1.map(function(value) {
        return { value, timestamp: timestampProvider.now() };
      });
    }
    exports2.timestamp = timestamp;
  }
});

// ../../../node_modules/rxjs/dist/cjs/internal/operators/window.js
var require_window = __commonJS({
  "../../../node_modules/rxjs/dist/cjs/internal/operators/window.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.window = void 0;
    var Subject_1 = require_Subject();
    var lift_1 = require_lift();
    var OperatorSubscriber_1 = require_OperatorSubscriber();
    var noop_1 = require_noop();
    var innerFrom_1 = require_innerFrom();
    function window2(windowBoundaries) {
      return lift_1.operate(function(source, subscriber) {
        var windowSubject = new Subject_1.Subject();
        subscriber.next(windowSubject.asObservable());
        var errorHandler = function(err) {
          windowSubject.error(err);
          subscriber.error(err);
        };
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
          return windowSubject === null || windowSubject === void 0 ? void 0 : windowSubject.next(value);
        }, function() {
          windowSubject.complete();
          subscriber.complete();
        }, errorHandler));
        innerFrom_1.innerFrom(windowBoundaries).subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function() {
          windowSubject.complete();
          subscriber.next(windowSubject = new Subject_1.Subject());
        }, noop_1.noop, errorHandler));
        return function() {
          windowSubject === null || windowSubject === void 0 ? void 0 : windowSubject.unsubscribe();
          windowSubject = null;
        };
      });
    }
    exports2.window = window2;
  }
});

// ../../../node_modules/rxjs/dist/cjs/internal/operators/windowCount.js
var require_windowCount = __commonJS({
  "../../../node_modules/rxjs/dist/cjs/internal/operators/windowCount.js"(exports2) {
    "use strict";
    var __values = exports2 && exports2.__values || function(o) {
      var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
      if (m)
        return m.call(o);
      if (o && typeof o.length === "number")
        return {
          next: function() {
            if (o && i >= o.length)
              o = void 0;
            return { value: o && o[i++], done: !o };
          }
        };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.windowCount = void 0;
    var Subject_1 = require_Subject();
    var lift_1 = require_lift();
    var OperatorSubscriber_1 = require_OperatorSubscriber();
    function windowCount(windowSize, startWindowEvery) {
      if (startWindowEvery === void 0) {
        startWindowEvery = 0;
      }
      var startEvery = startWindowEvery > 0 ? startWindowEvery : windowSize;
      return lift_1.operate(function(source, subscriber) {
        var windows = [new Subject_1.Subject()];
        var starts = [];
        var count = 0;
        subscriber.next(windows[0].asObservable());
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
          var e_1, _a;
          try {
            for (var windows_1 = __values(windows), windows_1_1 = windows_1.next(); !windows_1_1.done; windows_1_1 = windows_1.next()) {
              var window_1 = windows_1_1.value;
              window_1.next(value);
            }
          } catch (e_1_1) {
            e_1 = { error: e_1_1 };
          } finally {
            try {
              if (windows_1_1 && !windows_1_1.done && (_a = windows_1.return))
                _a.call(windows_1);
            } finally {
              if (e_1)
                throw e_1.error;
            }
          }
          var c = count - windowSize + 1;
          if (c >= 0 && c % startEvery === 0) {
            windows.shift().complete();
          }
          if (++count % startEvery === 0) {
            var window_2 = new Subject_1.Subject();
            windows.push(window_2);
            subscriber.next(window_2.asObservable());
          }
        }, function() {
          while (windows.length > 0) {
            windows.shift().complete();
          }
          subscriber.complete();
        }, function(err) {
          while (windows.length > 0) {
            windows.shift().error(err);
          }
          subscriber.error(err);
        }, function() {
          starts = null;
          windows = null;
        }));
      });
    }
    exports2.windowCount = windowCount;
  }
});

// ../../../node_modules/rxjs/dist/cjs/internal/operators/windowTime.js
var require_windowTime = __commonJS({
  "../../../node_modules/rxjs/dist/cjs/internal/operators/windowTime.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.windowTime = void 0;
    var Subject_1 = require_Subject();
    var async_1 = require_async();
    var Subscription_1 = require_Subscription();
    var lift_1 = require_lift();
    var OperatorSubscriber_1 = require_OperatorSubscriber();
    var arrRemove_1 = require_arrRemove();
    var args_1 = require_args();
    var executeSchedule_1 = require_executeSchedule();
    function windowTime(windowTimeSpan) {
      var _a, _b;
      var otherArgs = [];
      for (var _i = 1; _i < arguments.length; _i++) {
        otherArgs[_i - 1] = arguments[_i];
      }
      var scheduler = (_a = args_1.popScheduler(otherArgs)) !== null && _a !== void 0 ? _a : async_1.asyncScheduler;
      var windowCreationInterval = (_b = otherArgs[0]) !== null && _b !== void 0 ? _b : null;
      var maxWindowSize = otherArgs[1] || Infinity;
      return lift_1.operate(function(source, subscriber) {
        var windowRecords = [];
        var restartOnClose = false;
        var closeWindow = function(record) {
          var window2 = record.window, subs = record.subs;
          window2.complete();
          subs.unsubscribe();
          arrRemove_1.arrRemove(windowRecords, record);
          restartOnClose && startWindow();
        };
        var startWindow = function() {
          if (windowRecords) {
            var subs = new Subscription_1.Subscription();
            subscriber.add(subs);
            var window_1 = new Subject_1.Subject();
            var record_1 = {
              window: window_1,
              subs,
              seen: 0
            };
            windowRecords.push(record_1);
            subscriber.next(window_1.asObservable());
            executeSchedule_1.executeSchedule(subs, scheduler, function() {
              return closeWindow(record_1);
            }, windowTimeSpan);
          }
        };
        if (windowCreationInterval !== null && windowCreationInterval >= 0) {
          executeSchedule_1.executeSchedule(subscriber, scheduler, startWindow, windowCreationInterval, true);
        } else {
          restartOnClose = true;
        }
        startWindow();
        var loop = function(cb) {
          return windowRecords.slice().forEach(cb);
        };
        var terminate = function(cb) {
          loop(function(_a2) {
            var window2 = _a2.window;
            return cb(window2);
          });
          cb(subscriber);
          subscriber.unsubscribe();
        };
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
          loop(function(record) {
            record.window.next(value);
            maxWindowSize <= ++record.seen && closeWindow(record);
          });
        }, function() {
          return terminate(function(consumer) {
            return consumer.complete();
          });
        }, function(err) {
          return terminate(function(consumer) {
            return consumer.error(err);
          });
        }));
        return function() {
          windowRecords = null;
        };
      });
    }
    exports2.windowTime = windowTime;
  }
});

// ../../../node_modules/rxjs/dist/cjs/internal/operators/windowToggle.js
var require_windowToggle = __commonJS({
  "../../../node_modules/rxjs/dist/cjs/internal/operators/windowToggle.js"(exports2) {
    "use strict";
    var __values = exports2 && exports2.__values || function(o) {
      var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
      if (m)
        return m.call(o);
      if (o && typeof o.length === "number")
        return {
          next: function() {
            if (o && i >= o.length)
              o = void 0;
            return { value: o && o[i++], done: !o };
          }
        };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.windowToggle = void 0;
    var Subject_1 = require_Subject();
    var Subscription_1 = require_Subscription();
    var lift_1 = require_lift();
    var innerFrom_1 = require_innerFrom();
    var OperatorSubscriber_1 = require_OperatorSubscriber();
    var noop_1 = require_noop();
    var arrRemove_1 = require_arrRemove();
    function windowToggle(openings, closingSelector) {
      return lift_1.operate(function(source, subscriber) {
        var windows = [];
        var handleError = function(err) {
          while (0 < windows.length) {
            windows.shift().error(err);
          }
          subscriber.error(err);
        };
        innerFrom_1.innerFrom(openings).subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(openValue) {
          var window2 = new Subject_1.Subject();
          windows.push(window2);
          var closingSubscription = new Subscription_1.Subscription();
          var closeWindow = function() {
            arrRemove_1.arrRemove(windows, window2);
            window2.complete();
            closingSubscription.unsubscribe();
          };
          var closingNotifier;
          try {
            closingNotifier = innerFrom_1.innerFrom(closingSelector(openValue));
          } catch (err) {
            handleError(err);
            return;
          }
          subscriber.next(window2.asObservable());
          closingSubscription.add(closingNotifier.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, closeWindow, noop_1.noop, handleError)));
        }, noop_1.noop));
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
          var e_1, _a;
          var windowsCopy = windows.slice();
          try {
            for (var windowsCopy_1 = __values(windowsCopy), windowsCopy_1_1 = windowsCopy_1.next(); !windowsCopy_1_1.done; windowsCopy_1_1 = windowsCopy_1.next()) {
              var window_1 = windowsCopy_1_1.value;
              window_1.next(value);
            }
          } catch (e_1_1) {
            e_1 = { error: e_1_1 };
          } finally {
            try {
              if (windowsCopy_1_1 && !windowsCopy_1_1.done && (_a = windowsCopy_1.return))
                _a.call(windowsCopy_1);
            } finally {
              if (e_1)
                throw e_1.error;
            }
          }
        }, function() {
          while (0 < windows.length) {
            windows.shift().complete();
          }
          subscriber.complete();
        }, handleError, function() {
          while (0 < windows.length) {
            windows.shift().unsubscribe();
          }
        }));
      });
    }
    exports2.windowToggle = windowToggle;
  }
});

// ../../../node_modules/rxjs/dist/cjs/internal/operators/windowWhen.js
var require_windowWhen = __commonJS({
  "../../../node_modules/rxjs/dist/cjs/internal/operators/windowWhen.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.windowWhen = void 0;
    var Subject_1 = require_Subject();
    var lift_1 = require_lift();
    var OperatorSubscriber_1 = require_OperatorSubscriber();
    var innerFrom_1 = require_innerFrom();
    function windowWhen(closingSelector) {
      return lift_1.operate(function(source, subscriber) {
        var window2;
        var closingSubscriber;
        var handleError = function(err) {
          window2.error(err);
          subscriber.error(err);
        };
        var openWindow = function() {
          closingSubscriber === null || closingSubscriber === void 0 ? void 0 : closingSubscriber.unsubscribe();
          window2 === null || window2 === void 0 ? void 0 : window2.complete();
          window2 = new Subject_1.Subject();
          subscriber.next(window2.asObservable());
          var closingNotifier;
          try {
            closingNotifier = innerFrom_1.innerFrom(closingSelector());
          } catch (err) {
            handleError(err);
            return;
          }
          closingNotifier.subscribe(closingSubscriber = OperatorSubscriber_1.createOperatorSubscriber(subscriber, openWindow, openWindow, handleError));
        };
        openWindow();
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
          return window2.next(value);
        }, function() {
          window2.complete();
          subscriber.complete();
        }, handleError, function() {
          closingSubscriber === null || closingSubscriber === void 0 ? void 0 : closingSubscriber.unsubscribe();
          window2 = null;
        }));
      });
    }
    exports2.windowWhen = windowWhen;
  }
});

// ../../../node_modules/rxjs/dist/cjs/internal/operators/withLatestFrom.js
var require_withLatestFrom = __commonJS({
  "../../../node_modules/rxjs/dist/cjs/internal/operators/withLatestFrom.js"(exports2) {
    "use strict";
    var __read = exports2 && exports2.__read || function(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m)
        return o;
      var i = m.call(o), r, ar = [], e;
      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
          ar.push(r.value);
      } catch (error) {
        e = { error };
      } finally {
        try {
          if (r && !r.done && (m = i["return"]))
            m.call(i);
        } finally {
          if (e)
            throw e.error;
        }
      }
      return ar;
    };
    var __spreadArray = exports2 && exports2.__spreadArray || function(to, from) {
      for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
      return to;
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.withLatestFrom = void 0;
    var lift_1 = require_lift();
    var OperatorSubscriber_1 = require_OperatorSubscriber();
    var innerFrom_1 = require_innerFrom();
    var identity_1 = require_identity();
    var noop_1 = require_noop();
    var args_1 = require_args();
    function withLatestFrom() {
      var inputs = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        inputs[_i] = arguments[_i];
      }
      var project = args_1.popResultSelector(inputs);
      return lift_1.operate(function(source, subscriber) {
        var len = inputs.length;
        var otherValues = new Array(len);
        var hasValue = inputs.map(function() {
          return false;
        });
        var ready = false;
        var _loop_1 = function(i2) {
          innerFrom_1.innerFrom(inputs[i2]).subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
            otherValues[i2] = value;
            if (!ready && !hasValue[i2]) {
              hasValue[i2] = true;
              (ready = hasValue.every(identity_1.identity)) && (hasValue = null);
            }
          }, noop_1.noop));
        };
        for (var i = 0; i < len; i++) {
          _loop_1(i);
        }
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
          if (ready) {
            var values = __spreadArray([value], __read(otherValues));
            subscriber.next(project ? project.apply(void 0, __spreadArray([], __read(values))) : values);
          }
        }));
      });
    }
    exports2.withLatestFrom = withLatestFrom;
  }
});

// ../../../node_modules/rxjs/dist/cjs/internal/operators/zipAll.js
var require_zipAll = __commonJS({
  "../../../node_modules/rxjs/dist/cjs/internal/operators/zipAll.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.zipAll = void 0;
    var zip_1 = require_zip();
    var joinAllInternals_1 = require_joinAllInternals();
    function zipAll(project) {
      return joinAllInternals_1.joinAllInternals(zip_1.zip, project);
    }
    exports2.zipAll = zipAll;
  }
});

// ../../../node_modules/rxjs/dist/cjs/internal/operators/zip.js
var require_zip2 = __commonJS({
  "../../../node_modules/rxjs/dist/cjs/internal/operators/zip.js"(exports2) {
    "use strict";
    var __read = exports2 && exports2.__read || function(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m)
        return o;
      var i = m.call(o), r, ar = [], e;
      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
          ar.push(r.value);
      } catch (error) {
        e = { error };
      } finally {
        try {
          if (r && !r.done && (m = i["return"]))
            m.call(i);
        } finally {
          if (e)
            throw e.error;
        }
      }
      return ar;
    };
    var __spreadArray = exports2 && exports2.__spreadArray || function(to, from) {
      for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
      return to;
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.zip = void 0;
    var zip_1 = require_zip();
    var lift_1 = require_lift();
    function zip() {
      var sources = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        sources[_i] = arguments[_i];
      }
      return lift_1.operate(function(source, subscriber) {
        zip_1.zip.apply(void 0, __spreadArray([source], __read(sources))).subscribe(subscriber);
      });
    }
    exports2.zip = zip;
  }
});

// ../../../node_modules/rxjs/dist/cjs/internal/operators/zipWith.js
var require_zipWith = __commonJS({
  "../../../node_modules/rxjs/dist/cjs/internal/operators/zipWith.js"(exports2) {
    "use strict";
    var __read = exports2 && exports2.__read || function(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m)
        return o;
      var i = m.call(o), r, ar = [], e;
      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
          ar.push(r.value);
      } catch (error) {
        e = { error };
      } finally {
        try {
          if (r && !r.done && (m = i["return"]))
            m.call(i);
        } finally {
          if (e)
            throw e.error;
        }
      }
      return ar;
    };
    var __spreadArray = exports2 && exports2.__spreadArray || function(to, from) {
      for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
      return to;
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.zipWith = void 0;
    var zip_1 = require_zip2();
    function zipWith() {
      var otherInputs = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        otherInputs[_i] = arguments[_i];
      }
      return zip_1.zip.apply(void 0, __spreadArray([], __read(otherInputs)));
    }
    exports2.zipWith = zipWith;
  }
});

// ../../../node_modules/rxjs/dist/cjs/index.js
var require_cjs = __commonJS({
  "../../../node_modules/rxjs/dist/cjs/index.js"(exports2) {
    "use strict";
    var __createBinding = exports2 && exports2.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      Object.defineProperty(o, k2, { enumerable: true, get: function() {
        return m[k];
      } });
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports2 && exports2.__exportStar || function(m, exports3) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports3, p))
          __createBinding(exports3, m, p);
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.interval = exports2.iif = exports2.generate = exports2.fromEventPattern = exports2.fromEvent = exports2.from = exports2.forkJoin = exports2.empty = exports2.defer = exports2.connectable = exports2.concat = exports2.combineLatest = exports2.bindNodeCallback = exports2.bindCallback = exports2.UnsubscriptionError = exports2.TimeoutError = exports2.SequenceError = exports2.ObjectUnsubscribedError = exports2.NotFoundError = exports2.EmptyError = exports2.ArgumentOutOfRangeError = exports2.firstValueFrom = exports2.lastValueFrom = exports2.isObservable = exports2.identity = exports2.noop = exports2.pipe = exports2.NotificationKind = exports2.Notification = exports2.Subscriber = exports2.Subscription = exports2.Scheduler = exports2.VirtualAction = exports2.VirtualTimeScheduler = exports2.animationFrameScheduler = exports2.animationFrame = exports2.queueScheduler = exports2.queue = exports2.asyncScheduler = exports2.async = exports2.asapScheduler = exports2.asap = exports2.AsyncSubject = exports2.ReplaySubject = exports2.BehaviorSubject = exports2.Subject = exports2.animationFrames = exports2.observable = exports2.ConnectableObservable = exports2.Observable = void 0;
    exports2.filter = exports2.expand = exports2.exhaustMap = exports2.exhaustAll = exports2.exhaust = exports2.every = exports2.endWith = exports2.elementAt = exports2.distinctUntilKeyChanged = exports2.distinctUntilChanged = exports2.distinct = exports2.dematerialize = exports2.delayWhen = exports2.delay = exports2.defaultIfEmpty = exports2.debounceTime = exports2.debounce = exports2.count = exports2.connect = exports2.concatWith = exports2.concatMapTo = exports2.concatMap = exports2.concatAll = exports2.combineLatestWith = exports2.combineLatestAll = exports2.combineAll = exports2.catchError = exports2.bufferWhen = exports2.bufferToggle = exports2.bufferTime = exports2.bufferCount = exports2.buffer = exports2.auditTime = exports2.audit = exports2.config = exports2.NEVER = exports2.EMPTY = exports2.scheduled = exports2.zip = exports2.using = exports2.timer = exports2.throwError = exports2.range = exports2.race = exports2.partition = exports2.pairs = exports2.onErrorResumeNext = exports2.of = exports2.never = exports2.merge = void 0;
    exports2.switchMap = exports2.switchAll = exports2.subscribeOn = exports2.startWith = exports2.skipWhile = exports2.skipUntil = exports2.skipLast = exports2.skip = exports2.single = exports2.shareReplay = exports2.share = exports2.sequenceEqual = exports2.scan = exports2.sampleTime = exports2.sample = exports2.refCount = exports2.retryWhen = exports2.retry = exports2.repeatWhen = exports2.repeat = exports2.reduce = exports2.raceWith = exports2.publishReplay = exports2.publishLast = exports2.publishBehavior = exports2.publish = exports2.pluck = exports2.pairwise = exports2.onErrorResumeNextWith = exports2.observeOn = exports2.multicast = exports2.min = exports2.mergeWith = exports2.mergeScan = exports2.mergeMapTo = exports2.mergeMap = exports2.flatMap = exports2.mergeAll = exports2.max = exports2.materialize = exports2.mapTo = exports2.map = exports2.last = exports2.isEmpty = exports2.ignoreElements = exports2.groupBy = exports2.first = exports2.findIndex = exports2.find = exports2.finalize = void 0;
    exports2.zipWith = exports2.zipAll = exports2.withLatestFrom = exports2.windowWhen = exports2.windowToggle = exports2.windowTime = exports2.windowCount = exports2.window = exports2.toArray = exports2.timestamp = exports2.timeoutWith = exports2.timeout = exports2.timeInterval = exports2.throwIfEmpty = exports2.throttleTime = exports2.throttle = exports2.tap = exports2.takeWhile = exports2.takeUntil = exports2.takeLast = exports2.take = exports2.switchScan = exports2.switchMapTo = void 0;
    var Observable_1 = require_Observable();
    Object.defineProperty(exports2, "Observable", { enumerable: true, get: function() {
      return Observable_1.Observable;
    } });
    var ConnectableObservable_1 = require_ConnectableObservable();
    Object.defineProperty(exports2, "ConnectableObservable", { enumerable: true, get: function() {
      return ConnectableObservable_1.ConnectableObservable;
    } });
    var observable_1 = require_observable();
    Object.defineProperty(exports2, "observable", { enumerable: true, get: function() {
      return observable_1.observable;
    } });
    var animationFrames_1 = require_animationFrames();
    Object.defineProperty(exports2, "animationFrames", { enumerable: true, get: function() {
      return animationFrames_1.animationFrames;
    } });
    var Subject_1 = require_Subject();
    Object.defineProperty(exports2, "Subject", { enumerable: true, get: function() {
      return Subject_1.Subject;
    } });
    var BehaviorSubject_1 = require_BehaviorSubject();
    Object.defineProperty(exports2, "BehaviorSubject", { enumerable: true, get: function() {
      return BehaviorSubject_1.BehaviorSubject;
    } });
    var ReplaySubject_1 = require_ReplaySubject();
    Object.defineProperty(exports2, "ReplaySubject", { enumerable: true, get: function() {
      return ReplaySubject_1.ReplaySubject;
    } });
    var AsyncSubject_1 = require_AsyncSubject();
    Object.defineProperty(exports2, "AsyncSubject", { enumerable: true, get: function() {
      return AsyncSubject_1.AsyncSubject;
    } });
    var asap_1 = require_asap();
    Object.defineProperty(exports2, "asap", { enumerable: true, get: function() {
      return asap_1.asap;
    } });
    Object.defineProperty(exports2, "asapScheduler", { enumerable: true, get: function() {
      return asap_1.asapScheduler;
    } });
    var async_1 = require_async();
    Object.defineProperty(exports2, "async", { enumerable: true, get: function() {
      return async_1.async;
    } });
    Object.defineProperty(exports2, "asyncScheduler", { enumerable: true, get: function() {
      return async_1.asyncScheduler;
    } });
    var queue_1 = require_queue();
    Object.defineProperty(exports2, "queue", { enumerable: true, get: function() {
      return queue_1.queue;
    } });
    Object.defineProperty(exports2, "queueScheduler", { enumerable: true, get: function() {
      return queue_1.queueScheduler;
    } });
    var animationFrame_1 = require_animationFrame();
    Object.defineProperty(exports2, "animationFrame", { enumerable: true, get: function() {
      return animationFrame_1.animationFrame;
    } });
    Object.defineProperty(exports2, "animationFrameScheduler", { enumerable: true, get: function() {
      return animationFrame_1.animationFrameScheduler;
    } });
    var VirtualTimeScheduler_1 = require_VirtualTimeScheduler();
    Object.defineProperty(exports2, "VirtualTimeScheduler", { enumerable: true, get: function() {
      return VirtualTimeScheduler_1.VirtualTimeScheduler;
    } });
    Object.defineProperty(exports2, "VirtualAction", { enumerable: true, get: function() {
      return VirtualTimeScheduler_1.VirtualAction;
    } });
    var Scheduler_1 = require_Scheduler();
    Object.defineProperty(exports2, "Scheduler", { enumerable: true, get: function() {
      return Scheduler_1.Scheduler;
    } });
    var Subscription_1 = require_Subscription();
    Object.defineProperty(exports2, "Subscription", { enumerable: true, get: function() {
      return Subscription_1.Subscription;
    } });
    var Subscriber_1 = require_Subscriber();
    Object.defineProperty(exports2, "Subscriber", { enumerable: true, get: function() {
      return Subscriber_1.Subscriber;
    } });
    var Notification_1 = require_Notification();
    Object.defineProperty(exports2, "Notification", { enumerable: true, get: function() {
      return Notification_1.Notification;
    } });
    Object.defineProperty(exports2, "NotificationKind", { enumerable: true, get: function() {
      return Notification_1.NotificationKind;
    } });
    var pipe_1 = require_pipe();
    Object.defineProperty(exports2, "pipe", { enumerable: true, get: function() {
      return pipe_1.pipe;
    } });
    var noop_1 = require_noop();
    Object.defineProperty(exports2, "noop", { enumerable: true, get: function() {
      return noop_1.noop;
    } });
    var identity_1 = require_identity();
    Object.defineProperty(exports2, "identity", { enumerable: true, get: function() {
      return identity_1.identity;
    } });
    var isObservable_1 = require_isObservable();
    Object.defineProperty(exports2, "isObservable", { enumerable: true, get: function() {
      return isObservable_1.isObservable;
    } });
    var lastValueFrom_1 = require_lastValueFrom();
    Object.defineProperty(exports2, "lastValueFrom", { enumerable: true, get: function() {
      return lastValueFrom_1.lastValueFrom;
    } });
    var firstValueFrom_1 = require_firstValueFrom();
    Object.defineProperty(exports2, "firstValueFrom", { enumerable: true, get: function() {
      return firstValueFrom_1.firstValueFrom;
    } });
    var ArgumentOutOfRangeError_1 = require_ArgumentOutOfRangeError();
    Object.defineProperty(exports2, "ArgumentOutOfRangeError", { enumerable: true, get: function() {
      return ArgumentOutOfRangeError_1.ArgumentOutOfRangeError;
    } });
    var EmptyError_1 = require_EmptyError();
    Object.defineProperty(exports2, "EmptyError", { enumerable: true, get: function() {
      return EmptyError_1.EmptyError;
    } });
    var NotFoundError_1 = require_NotFoundError();
    Object.defineProperty(exports2, "NotFoundError", { enumerable: true, get: function() {
      return NotFoundError_1.NotFoundError;
    } });
    var ObjectUnsubscribedError_1 = require_ObjectUnsubscribedError();
    Object.defineProperty(exports2, "ObjectUnsubscribedError", { enumerable: true, get: function() {
      return ObjectUnsubscribedError_1.ObjectUnsubscribedError;
    } });
    var SequenceError_1 = require_SequenceError();
    Object.defineProperty(exports2, "SequenceError", { enumerable: true, get: function() {
      return SequenceError_1.SequenceError;
    } });
    var timeout_1 = require_timeout();
    Object.defineProperty(exports2, "TimeoutError", { enumerable: true, get: function() {
      return timeout_1.TimeoutError;
    } });
    var UnsubscriptionError_1 = require_UnsubscriptionError();
    Object.defineProperty(exports2, "UnsubscriptionError", { enumerable: true, get: function() {
      return UnsubscriptionError_1.UnsubscriptionError;
    } });
    var bindCallback_1 = require_bindCallback();
    Object.defineProperty(exports2, "bindCallback", { enumerable: true, get: function() {
      return bindCallback_1.bindCallback;
    } });
    var bindNodeCallback_1 = require_bindNodeCallback();
    Object.defineProperty(exports2, "bindNodeCallback", { enumerable: true, get: function() {
      return bindNodeCallback_1.bindNodeCallback;
    } });
    var combineLatest_1 = require_combineLatest();
    Object.defineProperty(exports2, "combineLatest", { enumerable: true, get: function() {
      return combineLatest_1.combineLatest;
    } });
    var concat_1 = require_concat();
    Object.defineProperty(exports2, "concat", { enumerable: true, get: function() {
      return concat_1.concat;
    } });
    var connectable_1 = require_connectable();
    Object.defineProperty(exports2, "connectable", { enumerable: true, get: function() {
      return connectable_1.connectable;
    } });
    var defer_1 = require_defer();
    Object.defineProperty(exports2, "defer", { enumerable: true, get: function() {
      return defer_1.defer;
    } });
    var empty_1 = require_empty();
    Object.defineProperty(exports2, "empty", { enumerable: true, get: function() {
      return empty_1.empty;
    } });
    var forkJoin_1 = require_forkJoin();
    Object.defineProperty(exports2, "forkJoin", { enumerable: true, get: function() {
      return forkJoin_1.forkJoin;
    } });
    var from_1 = require_from();
    Object.defineProperty(exports2, "from", { enumerable: true, get: function() {
      return from_1.from;
    } });
    var fromEvent_1 = require_fromEvent();
    Object.defineProperty(exports2, "fromEvent", { enumerable: true, get: function() {
      return fromEvent_1.fromEvent;
    } });
    var fromEventPattern_1 = require_fromEventPattern();
    Object.defineProperty(exports2, "fromEventPattern", { enumerable: true, get: function() {
      return fromEventPattern_1.fromEventPattern;
    } });
    var generate_1 = require_generate();
    Object.defineProperty(exports2, "generate", { enumerable: true, get: function() {
      return generate_1.generate;
    } });
    var iif_1 = require_iif();
    Object.defineProperty(exports2, "iif", { enumerable: true, get: function() {
      return iif_1.iif;
    } });
    var interval_1 = require_interval();
    Object.defineProperty(exports2, "interval", { enumerable: true, get: function() {
      return interval_1.interval;
    } });
    var merge_1 = require_merge();
    Object.defineProperty(exports2, "merge", { enumerable: true, get: function() {
      return merge_1.merge;
    } });
    var never_1 = require_never();
    Object.defineProperty(exports2, "never", { enumerable: true, get: function() {
      return never_1.never;
    } });
    var of_1 = require_of();
    Object.defineProperty(exports2, "of", { enumerable: true, get: function() {
      return of_1.of;
    } });
    var onErrorResumeNext_1 = require_onErrorResumeNext();
    Object.defineProperty(exports2, "onErrorResumeNext", { enumerable: true, get: function() {
      return onErrorResumeNext_1.onErrorResumeNext;
    } });
    var pairs_1 = require_pairs();
    Object.defineProperty(exports2, "pairs", { enumerable: true, get: function() {
      return pairs_1.pairs;
    } });
    var partition_1 = require_partition();
    Object.defineProperty(exports2, "partition", { enumerable: true, get: function() {
      return partition_1.partition;
    } });
    var race_1 = require_race();
    Object.defineProperty(exports2, "race", { enumerable: true, get: function() {
      return race_1.race;
    } });
    var range_1 = require_range();
    Object.defineProperty(exports2, "range", { enumerable: true, get: function() {
      return range_1.range;
    } });
    var throwError_1 = require_throwError();
    Object.defineProperty(exports2, "throwError", { enumerable: true, get: function() {
      return throwError_1.throwError;
    } });
    var timer_1 = require_timer();
    Object.defineProperty(exports2, "timer", { enumerable: true, get: function() {
      return timer_1.timer;
    } });
    var using_1 = require_using();
    Object.defineProperty(exports2, "using", { enumerable: true, get: function() {
      return using_1.using;
    } });
    var zip_1 = require_zip();
    Object.defineProperty(exports2, "zip", { enumerable: true, get: function() {
      return zip_1.zip;
    } });
    var scheduled_1 = require_scheduled();
    Object.defineProperty(exports2, "scheduled", { enumerable: true, get: function() {
      return scheduled_1.scheduled;
    } });
    var empty_2 = require_empty();
    Object.defineProperty(exports2, "EMPTY", { enumerable: true, get: function() {
      return empty_2.EMPTY;
    } });
    var never_2 = require_never();
    Object.defineProperty(exports2, "NEVER", { enumerable: true, get: function() {
      return never_2.NEVER;
    } });
    __exportStar(require_types(), exports2);
    var config_1 = require_config();
    Object.defineProperty(exports2, "config", { enumerable: true, get: function() {
      return config_1.config;
    } });
    var audit_1 = require_audit();
    Object.defineProperty(exports2, "audit", { enumerable: true, get: function() {
      return audit_1.audit;
    } });
    var auditTime_1 = require_auditTime();
    Object.defineProperty(exports2, "auditTime", { enumerable: true, get: function() {
      return auditTime_1.auditTime;
    } });
    var buffer_1 = require_buffer();
    Object.defineProperty(exports2, "buffer", { enumerable: true, get: function() {
      return buffer_1.buffer;
    } });
    var bufferCount_1 = require_bufferCount();
    Object.defineProperty(exports2, "bufferCount", { enumerable: true, get: function() {
      return bufferCount_1.bufferCount;
    } });
    var bufferTime_1 = require_bufferTime();
    Object.defineProperty(exports2, "bufferTime", { enumerable: true, get: function() {
      return bufferTime_1.bufferTime;
    } });
    var bufferToggle_1 = require_bufferToggle();
    Object.defineProperty(exports2, "bufferToggle", { enumerable: true, get: function() {
      return bufferToggle_1.bufferToggle;
    } });
    var bufferWhen_1 = require_bufferWhen();
    Object.defineProperty(exports2, "bufferWhen", { enumerable: true, get: function() {
      return bufferWhen_1.bufferWhen;
    } });
    var catchError_1 = require_catchError();
    Object.defineProperty(exports2, "catchError", { enumerable: true, get: function() {
      return catchError_1.catchError;
    } });
    var combineAll_1 = require_combineAll();
    Object.defineProperty(exports2, "combineAll", { enumerable: true, get: function() {
      return combineAll_1.combineAll;
    } });
    var combineLatestAll_1 = require_combineLatestAll();
    Object.defineProperty(exports2, "combineLatestAll", { enumerable: true, get: function() {
      return combineLatestAll_1.combineLatestAll;
    } });
    var combineLatestWith_1 = require_combineLatestWith();
    Object.defineProperty(exports2, "combineLatestWith", { enumerable: true, get: function() {
      return combineLatestWith_1.combineLatestWith;
    } });
    var concatAll_1 = require_concatAll();
    Object.defineProperty(exports2, "concatAll", { enumerable: true, get: function() {
      return concatAll_1.concatAll;
    } });
    var concatMap_1 = require_concatMap();
    Object.defineProperty(exports2, "concatMap", { enumerable: true, get: function() {
      return concatMap_1.concatMap;
    } });
    var concatMapTo_1 = require_concatMapTo();
    Object.defineProperty(exports2, "concatMapTo", { enumerable: true, get: function() {
      return concatMapTo_1.concatMapTo;
    } });
    var concatWith_1 = require_concatWith();
    Object.defineProperty(exports2, "concatWith", { enumerable: true, get: function() {
      return concatWith_1.concatWith;
    } });
    var connect_1 = require_connect();
    Object.defineProperty(exports2, "connect", { enumerable: true, get: function() {
      return connect_1.connect;
    } });
    var count_1 = require_count();
    Object.defineProperty(exports2, "count", { enumerable: true, get: function() {
      return count_1.count;
    } });
    var debounce_1 = require_debounce();
    Object.defineProperty(exports2, "debounce", { enumerable: true, get: function() {
      return debounce_1.debounce;
    } });
    var debounceTime_1 = require_debounceTime();
    Object.defineProperty(exports2, "debounceTime", { enumerable: true, get: function() {
      return debounceTime_1.debounceTime;
    } });
    var defaultIfEmpty_1 = require_defaultIfEmpty();
    Object.defineProperty(exports2, "defaultIfEmpty", { enumerable: true, get: function() {
      return defaultIfEmpty_1.defaultIfEmpty;
    } });
    var delay_1 = require_delay();
    Object.defineProperty(exports2, "delay", { enumerable: true, get: function() {
      return delay_1.delay;
    } });
    var delayWhen_1 = require_delayWhen();
    Object.defineProperty(exports2, "delayWhen", { enumerable: true, get: function() {
      return delayWhen_1.delayWhen;
    } });
    var dematerialize_1 = require_dematerialize();
    Object.defineProperty(exports2, "dematerialize", { enumerable: true, get: function() {
      return dematerialize_1.dematerialize;
    } });
    var distinct_1 = require_distinct();
    Object.defineProperty(exports2, "distinct", { enumerable: true, get: function() {
      return distinct_1.distinct;
    } });
    var distinctUntilChanged_1 = require_distinctUntilChanged();
    Object.defineProperty(exports2, "distinctUntilChanged", { enumerable: true, get: function() {
      return distinctUntilChanged_1.distinctUntilChanged;
    } });
    var distinctUntilKeyChanged_1 = require_distinctUntilKeyChanged();
    Object.defineProperty(exports2, "distinctUntilKeyChanged", { enumerable: true, get: function() {
      return distinctUntilKeyChanged_1.distinctUntilKeyChanged;
    } });
    var elementAt_1 = require_elementAt();
    Object.defineProperty(exports2, "elementAt", { enumerable: true, get: function() {
      return elementAt_1.elementAt;
    } });
    var endWith_1 = require_endWith();
    Object.defineProperty(exports2, "endWith", { enumerable: true, get: function() {
      return endWith_1.endWith;
    } });
    var every_1 = require_every();
    Object.defineProperty(exports2, "every", { enumerable: true, get: function() {
      return every_1.every;
    } });
    var exhaust_1 = require_exhaust();
    Object.defineProperty(exports2, "exhaust", { enumerable: true, get: function() {
      return exhaust_1.exhaust;
    } });
    var exhaustAll_1 = require_exhaustAll();
    Object.defineProperty(exports2, "exhaustAll", { enumerable: true, get: function() {
      return exhaustAll_1.exhaustAll;
    } });
    var exhaustMap_1 = require_exhaustMap();
    Object.defineProperty(exports2, "exhaustMap", { enumerable: true, get: function() {
      return exhaustMap_1.exhaustMap;
    } });
    var expand_1 = require_expand();
    Object.defineProperty(exports2, "expand", { enumerable: true, get: function() {
      return expand_1.expand;
    } });
    var filter_1 = require_filter();
    Object.defineProperty(exports2, "filter", { enumerable: true, get: function() {
      return filter_1.filter;
    } });
    var finalize_1 = require_finalize();
    Object.defineProperty(exports2, "finalize", { enumerable: true, get: function() {
      return finalize_1.finalize;
    } });
    var find_1 = require_find();
    Object.defineProperty(exports2, "find", { enumerable: true, get: function() {
      return find_1.find;
    } });
    var findIndex_1 = require_findIndex();
    Object.defineProperty(exports2, "findIndex", { enumerable: true, get: function() {
      return findIndex_1.findIndex;
    } });
    var first_1 = require_first();
    Object.defineProperty(exports2, "first", { enumerable: true, get: function() {
      return first_1.first;
    } });
    var groupBy_1 = require_groupBy();
    Object.defineProperty(exports2, "groupBy", { enumerable: true, get: function() {
      return groupBy_1.groupBy;
    } });
    var ignoreElements_1 = require_ignoreElements();
    Object.defineProperty(exports2, "ignoreElements", { enumerable: true, get: function() {
      return ignoreElements_1.ignoreElements;
    } });
    var isEmpty_1 = require_isEmpty();
    Object.defineProperty(exports2, "isEmpty", { enumerable: true, get: function() {
      return isEmpty_1.isEmpty;
    } });
    var last_1 = require_last();
    Object.defineProperty(exports2, "last", { enumerable: true, get: function() {
      return last_1.last;
    } });
    var map_1 = require_map();
    Object.defineProperty(exports2, "map", { enumerable: true, get: function() {
      return map_1.map;
    } });
    var mapTo_1 = require_mapTo();
    Object.defineProperty(exports2, "mapTo", { enumerable: true, get: function() {
      return mapTo_1.mapTo;
    } });
    var materialize_1 = require_materialize();
    Object.defineProperty(exports2, "materialize", { enumerable: true, get: function() {
      return materialize_1.materialize;
    } });
    var max_1 = require_max();
    Object.defineProperty(exports2, "max", { enumerable: true, get: function() {
      return max_1.max;
    } });
    var mergeAll_1 = require_mergeAll();
    Object.defineProperty(exports2, "mergeAll", { enumerable: true, get: function() {
      return mergeAll_1.mergeAll;
    } });
    var flatMap_1 = require_flatMap();
    Object.defineProperty(exports2, "flatMap", { enumerable: true, get: function() {
      return flatMap_1.flatMap;
    } });
    var mergeMap_1 = require_mergeMap();
    Object.defineProperty(exports2, "mergeMap", { enumerable: true, get: function() {
      return mergeMap_1.mergeMap;
    } });
    var mergeMapTo_1 = require_mergeMapTo();
    Object.defineProperty(exports2, "mergeMapTo", { enumerable: true, get: function() {
      return mergeMapTo_1.mergeMapTo;
    } });
    var mergeScan_1 = require_mergeScan();
    Object.defineProperty(exports2, "mergeScan", { enumerable: true, get: function() {
      return mergeScan_1.mergeScan;
    } });
    var mergeWith_1 = require_mergeWith();
    Object.defineProperty(exports2, "mergeWith", { enumerable: true, get: function() {
      return mergeWith_1.mergeWith;
    } });
    var min_1 = require_min();
    Object.defineProperty(exports2, "min", { enumerable: true, get: function() {
      return min_1.min;
    } });
    var multicast_1 = require_multicast();
    Object.defineProperty(exports2, "multicast", { enumerable: true, get: function() {
      return multicast_1.multicast;
    } });
    var observeOn_1 = require_observeOn();
    Object.defineProperty(exports2, "observeOn", { enumerable: true, get: function() {
      return observeOn_1.observeOn;
    } });
    var onErrorResumeNextWith_1 = require_onErrorResumeNextWith();
    Object.defineProperty(exports2, "onErrorResumeNextWith", { enumerable: true, get: function() {
      return onErrorResumeNextWith_1.onErrorResumeNextWith;
    } });
    var pairwise_1 = require_pairwise();
    Object.defineProperty(exports2, "pairwise", { enumerable: true, get: function() {
      return pairwise_1.pairwise;
    } });
    var pluck_1 = require_pluck();
    Object.defineProperty(exports2, "pluck", { enumerable: true, get: function() {
      return pluck_1.pluck;
    } });
    var publish_1 = require_publish();
    Object.defineProperty(exports2, "publish", { enumerable: true, get: function() {
      return publish_1.publish;
    } });
    var publishBehavior_1 = require_publishBehavior();
    Object.defineProperty(exports2, "publishBehavior", { enumerable: true, get: function() {
      return publishBehavior_1.publishBehavior;
    } });
    var publishLast_1 = require_publishLast();
    Object.defineProperty(exports2, "publishLast", { enumerable: true, get: function() {
      return publishLast_1.publishLast;
    } });
    var publishReplay_1 = require_publishReplay();
    Object.defineProperty(exports2, "publishReplay", { enumerable: true, get: function() {
      return publishReplay_1.publishReplay;
    } });
    var raceWith_1 = require_raceWith();
    Object.defineProperty(exports2, "raceWith", { enumerable: true, get: function() {
      return raceWith_1.raceWith;
    } });
    var reduce_1 = require_reduce();
    Object.defineProperty(exports2, "reduce", { enumerable: true, get: function() {
      return reduce_1.reduce;
    } });
    var repeat_1 = require_repeat();
    Object.defineProperty(exports2, "repeat", { enumerable: true, get: function() {
      return repeat_1.repeat;
    } });
    var repeatWhen_1 = require_repeatWhen();
    Object.defineProperty(exports2, "repeatWhen", { enumerable: true, get: function() {
      return repeatWhen_1.repeatWhen;
    } });
    var retry_1 = require_retry();
    Object.defineProperty(exports2, "retry", { enumerable: true, get: function() {
      return retry_1.retry;
    } });
    var retryWhen_1 = require_retryWhen();
    Object.defineProperty(exports2, "retryWhen", { enumerable: true, get: function() {
      return retryWhen_1.retryWhen;
    } });
    var refCount_1 = require_refCount();
    Object.defineProperty(exports2, "refCount", { enumerable: true, get: function() {
      return refCount_1.refCount;
    } });
    var sample_1 = require_sample();
    Object.defineProperty(exports2, "sample", { enumerable: true, get: function() {
      return sample_1.sample;
    } });
    var sampleTime_1 = require_sampleTime();
    Object.defineProperty(exports2, "sampleTime", { enumerable: true, get: function() {
      return sampleTime_1.sampleTime;
    } });
    var scan_1 = require_scan();
    Object.defineProperty(exports2, "scan", { enumerable: true, get: function() {
      return scan_1.scan;
    } });
    var sequenceEqual_1 = require_sequenceEqual();
    Object.defineProperty(exports2, "sequenceEqual", { enumerable: true, get: function() {
      return sequenceEqual_1.sequenceEqual;
    } });
    var share_1 = require_share();
    Object.defineProperty(exports2, "share", { enumerable: true, get: function() {
      return share_1.share;
    } });
    var shareReplay_1 = require_shareReplay();
    Object.defineProperty(exports2, "shareReplay", { enumerable: true, get: function() {
      return shareReplay_1.shareReplay;
    } });
    var single_1 = require_single();
    Object.defineProperty(exports2, "single", { enumerable: true, get: function() {
      return single_1.single;
    } });
    var skip_1 = require_skip();
    Object.defineProperty(exports2, "skip", { enumerable: true, get: function() {
      return skip_1.skip;
    } });
    var skipLast_1 = require_skipLast();
    Object.defineProperty(exports2, "skipLast", { enumerable: true, get: function() {
      return skipLast_1.skipLast;
    } });
    var skipUntil_1 = require_skipUntil();
    Object.defineProperty(exports2, "skipUntil", { enumerable: true, get: function() {
      return skipUntil_1.skipUntil;
    } });
    var skipWhile_1 = require_skipWhile();
    Object.defineProperty(exports2, "skipWhile", { enumerable: true, get: function() {
      return skipWhile_1.skipWhile;
    } });
    var startWith_1 = require_startWith();
    Object.defineProperty(exports2, "startWith", { enumerable: true, get: function() {
      return startWith_1.startWith;
    } });
    var subscribeOn_1 = require_subscribeOn();
    Object.defineProperty(exports2, "subscribeOn", { enumerable: true, get: function() {
      return subscribeOn_1.subscribeOn;
    } });
    var switchAll_1 = require_switchAll();
    Object.defineProperty(exports2, "switchAll", { enumerable: true, get: function() {
      return switchAll_1.switchAll;
    } });
    var switchMap_1 = require_switchMap();
    Object.defineProperty(exports2, "switchMap", { enumerable: true, get: function() {
      return switchMap_1.switchMap;
    } });
    var switchMapTo_1 = require_switchMapTo();
    Object.defineProperty(exports2, "switchMapTo", { enumerable: true, get: function() {
      return switchMapTo_1.switchMapTo;
    } });
    var switchScan_1 = require_switchScan();
    Object.defineProperty(exports2, "switchScan", { enumerable: true, get: function() {
      return switchScan_1.switchScan;
    } });
    var take_1 = require_take();
    Object.defineProperty(exports2, "take", { enumerable: true, get: function() {
      return take_1.take;
    } });
    var takeLast_1 = require_takeLast();
    Object.defineProperty(exports2, "takeLast", { enumerable: true, get: function() {
      return takeLast_1.takeLast;
    } });
    var takeUntil_1 = require_takeUntil();
    Object.defineProperty(exports2, "takeUntil", { enumerable: true, get: function() {
      return takeUntil_1.takeUntil;
    } });
    var takeWhile_1 = require_takeWhile();
    Object.defineProperty(exports2, "takeWhile", { enumerable: true, get: function() {
      return takeWhile_1.takeWhile;
    } });
    var tap_1 = require_tap();
    Object.defineProperty(exports2, "tap", { enumerable: true, get: function() {
      return tap_1.tap;
    } });
    var throttle_1 = require_throttle();
    Object.defineProperty(exports2, "throttle", { enumerable: true, get: function() {
      return throttle_1.throttle;
    } });
    var throttleTime_1 = require_throttleTime();
    Object.defineProperty(exports2, "throttleTime", { enumerable: true, get: function() {
      return throttleTime_1.throttleTime;
    } });
    var throwIfEmpty_1 = require_throwIfEmpty();
    Object.defineProperty(exports2, "throwIfEmpty", { enumerable: true, get: function() {
      return throwIfEmpty_1.throwIfEmpty;
    } });
    var timeInterval_1 = require_timeInterval();
    Object.defineProperty(exports2, "timeInterval", { enumerable: true, get: function() {
      return timeInterval_1.timeInterval;
    } });
    var timeout_2 = require_timeout();
    Object.defineProperty(exports2, "timeout", { enumerable: true, get: function() {
      return timeout_2.timeout;
    } });
    var timeoutWith_1 = require_timeoutWith();
    Object.defineProperty(exports2, "timeoutWith", { enumerable: true, get: function() {
      return timeoutWith_1.timeoutWith;
    } });
    var timestamp_1 = require_timestamp();
    Object.defineProperty(exports2, "timestamp", { enumerable: true, get: function() {
      return timestamp_1.timestamp;
    } });
    var toArray_1 = require_toArray();
    Object.defineProperty(exports2, "toArray", { enumerable: true, get: function() {
      return toArray_1.toArray;
    } });
    var window_1 = require_window();
    Object.defineProperty(exports2, "window", { enumerable: true, get: function() {
      return window_1.window;
    } });
    var windowCount_1 = require_windowCount();
    Object.defineProperty(exports2, "windowCount", { enumerable: true, get: function() {
      return windowCount_1.windowCount;
    } });
    var windowTime_1 = require_windowTime();
    Object.defineProperty(exports2, "windowTime", { enumerable: true, get: function() {
      return windowTime_1.windowTime;
    } });
    var windowToggle_1 = require_windowToggle();
    Object.defineProperty(exports2, "windowToggle", { enumerable: true, get: function() {
      return windowToggle_1.windowToggle;
    } });
    var windowWhen_1 = require_windowWhen();
    Object.defineProperty(exports2, "windowWhen", { enumerable: true, get: function() {
      return windowWhen_1.windowWhen;
    } });
    var withLatestFrom_1 = require_withLatestFrom();
    Object.defineProperty(exports2, "withLatestFrom", { enumerable: true, get: function() {
      return withLatestFrom_1.withLatestFrom;
    } });
    var zipAll_1 = require_zipAll();
    Object.defineProperty(exports2, "zipAll", { enumerable: true, get: function() {
      return zipAll_1.zipAll;
    } });
    var zipWith_1 = require_zipWith();
    Object.defineProperty(exports2, "zipWith", { enumerable: true, get: function() {
      return zipWith_1.zipWith;
    } });
  }
});

// ../../../node_modules/js-middleware/dist/middleware.js
var require_middleware = __commonJS({
  "../../../node_modules/js-middleware/dist/middleware.js"(exports2, module2) {
    (function(f) {
      if (typeof exports2 === "object" && typeof module2 !== "undefined") {
        module2.exports = f();
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
      var define2, module3, exports3;
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
      }({ 1: [function(_dereq_, module4, exports4) {
        "use strict";
        Object.defineProperty(exports4, "__esModule", {
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
        exports4.compose = compose;
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
        var MiddlewareManager3 = exports4.MiddlewareManager = function() {
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
var import_rxjs = __toESM(require_cjs());
var setoEvent = new import_rxjs.Subject();
var setoError = new import_rxjs.Subject();

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
function proxyKeys(obj, keys2) {
  const override = {};
  const keySet = new Set(keys2);
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

// ../../../node_modules/lodash-es/_freeGlobal.js
var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
var freeGlobal_default = freeGlobal;

// ../../../node_modules/lodash-es/_root.js
var freeSelf = typeof self == "object" && self && self.Object === Object && self;
var root = freeGlobal_default || freeSelf || Function("return this")();
var root_default = root;

// ../../../node_modules/lodash-es/_Symbol.js
var Symbol2 = root_default.Symbol;
var Symbol_default = Symbol2;

// ../../../node_modules/lodash-es/_getRawTag.js
var objectProto = Object.prototype;
var hasOwnProperty3 = objectProto.hasOwnProperty;
var nativeObjectToString = objectProto.toString;
var symToStringTag = Symbol_default ? Symbol_default.toStringTag : void 0;
function getRawTag(value) {
  var isOwn = hasOwnProperty3.call(value, symToStringTag), tag = value[symToStringTag];
  try {
    value[symToStringTag] = void 0;
    var unmasked = true;
  } catch (e) {
  }
  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}
var getRawTag_default = getRawTag;

// ../../../node_modules/lodash-es/_objectToString.js
var objectProto2 = Object.prototype;
var nativeObjectToString2 = objectProto2.toString;
function objectToString(value) {
  return nativeObjectToString2.call(value);
}
var objectToString_default = objectToString;

// ../../../node_modules/lodash-es/_baseGetTag.js
var nullTag = "[object Null]";
var undefinedTag = "[object Undefined]";
var symToStringTag2 = Symbol_default ? Symbol_default.toStringTag : void 0;
function baseGetTag(value) {
  if (value == null) {
    return value === void 0 ? undefinedTag : nullTag;
  }
  return symToStringTag2 && symToStringTag2 in Object(value) ? getRawTag_default(value) : objectToString_default(value);
}
var baseGetTag_default = baseGetTag;

// ../../../node_modules/lodash-es/isObjectLike.js
function isObjectLike(value) {
  return value != null && typeof value == "object";
}
var isObjectLike_default = isObjectLike;

// ../../../node_modules/lodash-es/isSymbol.js
var symbolTag = "[object Symbol]";
function isSymbol(value) {
  return typeof value == "symbol" || isObjectLike_default(value) && baseGetTag_default(value) == symbolTag;
}
var isSymbol_default = isSymbol;

// ../../../node_modules/lodash-es/_arrayMap.js
function arrayMap(array, iteratee) {
  var index = -1, length = array == null ? 0 : array.length, result = Array(length);
  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}
var arrayMap_default = arrayMap;

// ../../../node_modules/lodash-es/isArray.js
var isArray = Array.isArray;
var isArray_default = isArray;

// ../../../node_modules/lodash-es/_baseToString.js
var INFINITY = 1 / 0;
var symbolProto = Symbol_default ? Symbol_default.prototype : void 0;
var symbolToString = symbolProto ? symbolProto.toString : void 0;
function baseToString(value) {
  if (typeof value == "string") {
    return value;
  }
  if (isArray_default(value)) {
    return arrayMap_default(value, baseToString) + "";
  }
  if (isSymbol_default(value)) {
    return symbolToString ? symbolToString.call(value) : "";
  }
  var result = value + "";
  return result == "0" && 1 / value == -INFINITY ? "-0" : result;
}
var baseToString_default = baseToString;

// ../../../node_modules/lodash-es/_trimmedEndIndex.js
var reWhitespace = /\s/;
function trimmedEndIndex(string) {
  var index = string.length;
  while (index-- && reWhitespace.test(string.charAt(index))) {
  }
  return index;
}
var trimmedEndIndex_default = trimmedEndIndex;

// ../../../node_modules/lodash-es/_baseTrim.js
var reTrimStart = /^\s+/;
function baseTrim(string) {
  return string ? string.slice(0, trimmedEndIndex_default(string) + 1).replace(reTrimStart, "") : string;
}
var baseTrim_default = baseTrim;

// ../../../node_modules/lodash-es/isObject.js
function isObject(value) {
  var type = typeof value;
  return value != null && (type == "object" || type == "function");
}
var isObject_default = isObject;

// ../../../node_modules/lodash-es/toNumber.js
var NAN = 0 / 0;
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
var reIsBinary = /^0b[01]+$/i;
var reIsOctal = /^0o[0-7]+$/i;
var freeParseInt = parseInt;
function toNumber(value) {
  if (typeof value == "number") {
    return value;
  }
  if (isSymbol_default(value)) {
    return NAN;
  }
  if (isObject_default(value)) {
    var other = typeof value.valueOf == "function" ? value.valueOf() : value;
    value = isObject_default(other) ? other + "" : other;
  }
  if (typeof value != "string") {
    return value === 0 ? value : +value;
  }
  value = baseTrim_default(value);
  var isBinary = reIsBinary.test(value);
  return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
}
var toNumber_default = toNumber;

// ../../../node_modules/lodash-es/toFinite.js
var INFINITY2 = 1 / 0;
var MAX_INTEGER = 17976931348623157e292;
function toFinite(value) {
  if (!value) {
    return value === 0 ? value : 0;
  }
  value = toNumber_default(value);
  if (value === INFINITY2 || value === -INFINITY2) {
    var sign = value < 0 ? -1 : 1;
    return sign * MAX_INTEGER;
  }
  return value === value ? value : 0;
}
var toFinite_default = toFinite;

// ../../../node_modules/lodash-es/toInteger.js
function toInteger(value) {
  var result = toFinite_default(value), remainder = result % 1;
  return result === result ? remainder ? result - remainder : result : 0;
}
var toInteger_default = toInteger;

// ../../../node_modules/lodash-es/identity.js
function identity(value) {
  return value;
}
var identity_default = identity;

// ../../../node_modules/lodash-es/isFunction.js
var asyncTag = "[object AsyncFunction]";
var funcTag = "[object Function]";
var genTag = "[object GeneratorFunction]";
var proxyTag = "[object Proxy]";
function isFunction2(value) {
  if (!isObject_default(value)) {
    return false;
  }
  var tag = baseGetTag_default(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}
var isFunction_default = isFunction2;

// ../../../node_modules/lodash-es/_coreJsData.js
var coreJsData = root_default["__core-js_shared__"];
var coreJsData_default = coreJsData;

// ../../../node_modules/lodash-es/_isMasked.js
var maskSrcKey = function() {
  var uid = /[^.]+$/.exec(coreJsData_default && coreJsData_default.keys && coreJsData_default.keys.IE_PROTO || "");
  return uid ? "Symbol(src)_1." + uid : "";
}();
function isMasked(func) {
  return !!maskSrcKey && maskSrcKey in func;
}
var isMasked_default = isMasked;

// ../../../node_modules/lodash-es/_toSource.js
var funcProto = Function.prototype;
var funcToString = funcProto.toString;
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {
    }
    try {
      return func + "";
    } catch (e) {
    }
  }
  return "";
}
var toSource_default = toSource;

// ../../../node_modules/lodash-es/_baseIsNative.js
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
var reIsHostCtor = /^\[object .+?Constructor\]$/;
var funcProto2 = Function.prototype;
var objectProto3 = Object.prototype;
var funcToString2 = funcProto2.toString;
var hasOwnProperty4 = objectProto3.hasOwnProperty;
var reIsNative = RegExp(
  "^" + funcToString2.call(hasOwnProperty4).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function baseIsNative(value) {
  if (!isObject_default(value) || isMasked_default(value)) {
    return false;
  }
  var pattern = isFunction_default(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource_default(value));
}
var baseIsNative_default = baseIsNative;

// ../../../node_modules/lodash-es/_getValue.js
function getValue(object, key) {
  return object == null ? void 0 : object[key];
}
var getValue_default = getValue;

// ../../../node_modules/lodash-es/_getNative.js
function getNative(object, key) {
  var value = getValue_default(object, key);
  return baseIsNative_default(value) ? value : void 0;
}
var getNative_default = getNative;

// ../../../node_modules/lodash-es/_apply.js
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0:
      return func.call(thisArg);
    case 1:
      return func.call(thisArg, args[0]);
    case 2:
      return func.call(thisArg, args[0], args[1]);
    case 3:
      return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}
var apply_default = apply;

// ../../../node_modules/lodash-es/noop.js
function noop() {
}
var noop_default = noop;

// ../../../node_modules/lodash-es/_shortOut.js
var HOT_COUNT = 800;
var HOT_SPAN = 16;
var nativeNow = Date.now;
function shortOut(func) {
  var count = 0, lastCalled = 0;
  return function() {
    var stamp = nativeNow(), remaining = HOT_SPAN - (stamp - lastCalled);
    lastCalled = stamp;
    if (remaining > 0) {
      if (++count >= HOT_COUNT) {
        return arguments[0];
      }
    } else {
      count = 0;
    }
    return func.apply(void 0, arguments);
  };
}
var shortOut_default = shortOut;

// ../../../node_modules/lodash-es/constant.js
function constant(value) {
  return function() {
    return value;
  };
}
var constant_default = constant;

// ../../../node_modules/lodash-es/_defineProperty.js
var defineProperty = function() {
  try {
    var func = getNative_default(Object, "defineProperty");
    func({}, "", {});
    return func;
  } catch (e) {
  }
}();
var defineProperty_default = defineProperty;

// ../../../node_modules/lodash-es/_baseSetToString.js
var baseSetToString = !defineProperty_default ? identity_default : function(func, string) {
  return defineProperty_default(func, "toString", {
    "configurable": true,
    "enumerable": false,
    "value": constant_default(string),
    "writable": true
  });
};
var baseSetToString_default = baseSetToString;

// ../../../node_modules/lodash-es/_setToString.js
var setToString = shortOut_default(baseSetToString_default);
var setToString_default = setToString;

// ../../../node_modules/lodash-es/_arrayEach.js
function arrayEach(array, iteratee) {
  var index = -1, length = array == null ? 0 : array.length;
  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }
  return array;
}
var arrayEach_default = arrayEach;

// ../../../node_modules/lodash-es/_baseFindIndex.js
function baseFindIndex(array, predicate, fromIndex, fromRight) {
  var length = array.length, index = fromIndex + (fromRight ? 1 : -1);
  while (fromRight ? index-- : ++index < length) {
    if (predicate(array[index], index, array)) {
      return index;
    }
  }
  return -1;
}
var baseFindIndex_default = baseFindIndex;

// ../../../node_modules/lodash-es/_baseIsNaN.js
function baseIsNaN(value) {
  return value !== value;
}
var baseIsNaN_default = baseIsNaN;

// ../../../node_modules/lodash-es/_strictIndexOf.js
function strictIndexOf(array, value, fromIndex) {
  var index = fromIndex - 1, length = array.length;
  while (++index < length) {
    if (array[index] === value) {
      return index;
    }
  }
  return -1;
}
var strictIndexOf_default = strictIndexOf;

// ../../../node_modules/lodash-es/_baseIndexOf.js
function baseIndexOf(array, value, fromIndex) {
  return value === value ? strictIndexOf_default(array, value, fromIndex) : baseFindIndex_default(array, baseIsNaN_default, fromIndex);
}
var baseIndexOf_default = baseIndexOf;

// ../../../node_modules/lodash-es/_arrayIncludes.js
function arrayIncludes(array, value) {
  var length = array == null ? 0 : array.length;
  return !!length && baseIndexOf_default(array, value, 0) > -1;
}
var arrayIncludes_default = arrayIncludes;

// ../../../node_modules/lodash-es/_isIndex.js
var MAX_SAFE_INTEGER = 9007199254740991;
var reIsUint = /^(?:0|[1-9]\d*)$/;
function isIndex(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length && (type == "number" || type != "symbol" && reIsUint.test(value)) && (value > -1 && value % 1 == 0 && value < length);
}
var isIndex_default = isIndex;

// ../../../node_modules/lodash-es/_baseAssignValue.js
function baseAssignValue(object, key, value) {
  if (key == "__proto__" && defineProperty_default) {
    defineProperty_default(object, key, {
      "configurable": true,
      "enumerable": true,
      "value": value,
      "writable": true
    });
  } else {
    object[key] = value;
  }
}
var baseAssignValue_default = baseAssignValue;

// ../../../node_modules/lodash-es/eq.js
function eq(value, other) {
  return value === other || value !== value && other !== other;
}
var eq_default = eq;

// ../../../node_modules/lodash-es/_assignValue.js
var objectProto4 = Object.prototype;
var hasOwnProperty5 = objectProto4.hasOwnProperty;
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty5.call(object, key) && eq_default(objValue, value)) || value === void 0 && !(key in object)) {
    baseAssignValue_default(object, key, value);
  }
}
var assignValue_default = assignValue;

// ../../../node_modules/lodash-es/_overRest.js
var nativeMax = Math.max;
function overRest(func, start, transform) {
  start = nativeMax(start === void 0 ? func.length - 1 : start, 0);
  return function() {
    var args = arguments, index = -1, length = nativeMax(args.length - start, 0), array = Array(length);
    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = transform(array);
    return apply_default(func, this, otherArgs);
  };
}
var overRest_default = overRest;

// ../../../node_modules/lodash-es/_baseRest.js
function baseRest(func, start) {
  return setToString_default(overRest_default(func, start, identity_default), func + "");
}
var baseRest_default = baseRest;

// ../../../node_modules/lodash-es/isLength.js
var MAX_SAFE_INTEGER2 = 9007199254740991;
function isLength(value) {
  return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER2;
}
var isLength_default = isLength;

// ../../../node_modules/lodash-es/isArrayLike.js
function isArrayLike(value) {
  return value != null && isLength_default(value.length) && !isFunction_default(value);
}
var isArrayLike_default = isArrayLike;

// ../../../node_modules/lodash-es/_isPrototype.js
var objectProto5 = Object.prototype;
function isPrototype(value) {
  var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto5;
  return value === proto;
}
var isPrototype_default = isPrototype;

// ../../../node_modules/lodash-es/_baseTimes.js
function baseTimes(n, iteratee) {
  var index = -1, result = Array(n);
  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}
var baseTimes_default = baseTimes;

// ../../../node_modules/lodash-es/_baseIsArguments.js
var argsTag = "[object Arguments]";
function baseIsArguments(value) {
  return isObjectLike_default(value) && baseGetTag_default(value) == argsTag;
}
var baseIsArguments_default = baseIsArguments;

// ../../../node_modules/lodash-es/isArguments.js
var objectProto6 = Object.prototype;
var hasOwnProperty6 = objectProto6.hasOwnProperty;
var propertyIsEnumerable = objectProto6.propertyIsEnumerable;
var isArguments = baseIsArguments_default(function() {
  return arguments;
}()) ? baseIsArguments_default : function(value) {
  return isObjectLike_default(value) && hasOwnProperty6.call(value, "callee") && !propertyIsEnumerable.call(value, "callee");
};
var isArguments_default = isArguments;

// ../../../node_modules/lodash-es/stubFalse.js
function stubFalse() {
  return false;
}
var stubFalse_default = stubFalse;

// ../../../node_modules/lodash-es/isBuffer.js
var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
var freeModule = freeExports && typeof module == "object" && module && !module.nodeType && module;
var moduleExports = freeModule && freeModule.exports === freeExports;
var Buffer2 = moduleExports ? root_default.Buffer : void 0;
var nativeIsBuffer = Buffer2 ? Buffer2.isBuffer : void 0;
var isBuffer = nativeIsBuffer || stubFalse_default;
var isBuffer_default = isBuffer;

// ../../../node_modules/lodash-es/_baseIsTypedArray.js
var argsTag2 = "[object Arguments]";
var arrayTag = "[object Array]";
var boolTag = "[object Boolean]";
var dateTag = "[object Date]";
var errorTag = "[object Error]";
var funcTag2 = "[object Function]";
var mapTag = "[object Map]";
var numberTag = "[object Number]";
var objectTag = "[object Object]";
var regexpTag = "[object RegExp]";
var setTag = "[object Set]";
var stringTag = "[object String]";
var weakMapTag = "[object WeakMap]";
var arrayBufferTag = "[object ArrayBuffer]";
var dataViewTag = "[object DataView]";
var float32Tag = "[object Float32Array]";
var float64Tag = "[object Float64Array]";
var int8Tag = "[object Int8Array]";
var int16Tag = "[object Int16Array]";
var int32Tag = "[object Int32Array]";
var uint8Tag = "[object Uint8Array]";
var uint8ClampedTag = "[object Uint8ClampedArray]";
var uint16Tag = "[object Uint16Array]";
var uint32Tag = "[object Uint32Array]";
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag2] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag2] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
function baseIsTypedArray(value) {
  return isObjectLike_default(value) && isLength_default(value.length) && !!typedArrayTags[baseGetTag_default(value)];
}
var baseIsTypedArray_default = baseIsTypedArray;

// ../../../node_modules/lodash-es/_baseUnary.js
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}
var baseUnary_default = baseUnary;

// ../../../node_modules/lodash-es/_nodeUtil.js
var freeExports2 = typeof exports == "object" && exports && !exports.nodeType && exports;
var freeModule2 = freeExports2 && typeof module == "object" && module && !module.nodeType && module;
var moduleExports2 = freeModule2 && freeModule2.exports === freeExports2;
var freeProcess = moduleExports2 && freeGlobal_default.process;
var nodeUtil = function() {
  try {
    var types = freeModule2 && freeModule2.require && freeModule2.require("util").types;
    if (types) {
      return types;
    }
    return freeProcess && freeProcess.binding && freeProcess.binding("util");
  } catch (e) {
  }
}();
var nodeUtil_default = nodeUtil;

// ../../../node_modules/lodash-es/isTypedArray.js
var nodeIsTypedArray = nodeUtil_default && nodeUtil_default.isTypedArray;
var isTypedArray = nodeIsTypedArray ? baseUnary_default(nodeIsTypedArray) : baseIsTypedArray_default;
var isTypedArray_default = isTypedArray;

// ../../../node_modules/lodash-es/_arrayLikeKeys.js
var objectProto7 = Object.prototype;
var hasOwnProperty7 = objectProto7.hasOwnProperty;
function arrayLikeKeys(value, inherited) {
  var isArr = isArray_default(value), isArg = !isArr && isArguments_default(value), isBuff = !isArr && !isArg && isBuffer_default(value), isType = !isArr && !isArg && !isBuff && isTypedArray_default(value), skipIndexes = isArr || isArg || isBuff || isType, result = skipIndexes ? baseTimes_default(value.length, String) : [], length = result.length;
  for (var key in value) {
    if ((inherited || hasOwnProperty7.call(value, key)) && !(skipIndexes && // Safari 9 has enumerable `arguments.length` in strict mode.
    (key == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    isBuff && (key == "offset" || key == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") || // Skip index properties.
    isIndex_default(key, length)))) {
      result.push(key);
    }
  }
  return result;
}
var arrayLikeKeys_default = arrayLikeKeys;

// ../../../node_modules/lodash-es/_overArg.js
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}
var overArg_default = overArg;

// ../../../node_modules/lodash-es/_nativeKeys.js
var nativeKeys = overArg_default(Object.keys, Object);
var nativeKeys_default = nativeKeys;

// ../../../node_modules/lodash-es/_baseKeys.js
var objectProto8 = Object.prototype;
var hasOwnProperty8 = objectProto8.hasOwnProperty;
function baseKeys(object) {
  if (!isPrototype_default(object)) {
    return nativeKeys_default(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty8.call(object, key) && key != "constructor") {
      result.push(key);
    }
  }
  return result;
}
var baseKeys_default = baseKeys;

// ../../../node_modules/lodash-es/keys.js
function keys(object) {
  return isArrayLike_default(object) ? arrayLikeKeys_default(object) : baseKeys_default(object);
}
var keys_default = keys;

// ../../../node_modules/lodash-es/_isKey.js
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/;
var reIsPlainProp = /^\w*$/;
function isKey(value, object) {
  if (isArray_default(value)) {
    return false;
  }
  var type = typeof value;
  if (type == "number" || type == "symbol" || type == "boolean" || value == null || isSymbol_default(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object(object);
}
var isKey_default = isKey;

// ../../../node_modules/lodash-es/_nativeCreate.js
var nativeCreate = getNative_default(Object, "create");
var nativeCreate_default = nativeCreate;

// ../../../node_modules/lodash-es/_hashClear.js
function hashClear() {
  this.__data__ = nativeCreate_default ? nativeCreate_default(null) : {};
  this.size = 0;
}
var hashClear_default = hashClear;

// ../../../node_modules/lodash-es/_hashDelete.js
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}
var hashDelete_default = hashDelete;

// ../../../node_modules/lodash-es/_hashGet.js
var HASH_UNDEFINED = "__lodash_hash_undefined__";
var objectProto9 = Object.prototype;
var hasOwnProperty9 = objectProto9.hasOwnProperty;
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate_default) {
    var result = data[key];
    return result === HASH_UNDEFINED ? void 0 : result;
  }
  return hasOwnProperty9.call(data, key) ? data[key] : void 0;
}
var hashGet_default = hashGet;

// ../../../node_modules/lodash-es/_hashHas.js
var objectProto10 = Object.prototype;
var hasOwnProperty10 = objectProto10.hasOwnProperty;
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate_default ? data[key] !== void 0 : hasOwnProperty10.call(data, key);
}
var hashHas_default = hashHas;

// ../../../node_modules/lodash-es/_hashSet.js
var HASH_UNDEFINED2 = "__lodash_hash_undefined__";
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = nativeCreate_default && value === void 0 ? HASH_UNDEFINED2 : value;
  return this;
}
var hashSet_default = hashSet;

// ../../../node_modules/lodash-es/_Hash.js
function Hash(entries) {
  var index = -1, length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}
Hash.prototype.clear = hashClear_default;
Hash.prototype["delete"] = hashDelete_default;
Hash.prototype.get = hashGet_default;
Hash.prototype.has = hashHas_default;
Hash.prototype.set = hashSet_default;
var Hash_default = Hash;

// ../../../node_modules/lodash-es/_listCacheClear.js
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}
var listCacheClear_default = listCacheClear;

// ../../../node_modules/lodash-es/_assocIndexOf.js
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq_default(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}
var assocIndexOf_default = assocIndexOf;

// ../../../node_modules/lodash-es/_listCacheDelete.js
var arrayProto = Array.prototype;
var splice = arrayProto.splice;
function listCacheDelete(key) {
  var data = this.__data__, index = assocIndexOf_default(data, key);
  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}
var listCacheDelete_default = listCacheDelete;

// ../../../node_modules/lodash-es/_listCacheGet.js
function listCacheGet(key) {
  var data = this.__data__, index = assocIndexOf_default(data, key);
  return index < 0 ? void 0 : data[index][1];
}
var listCacheGet_default = listCacheGet;

// ../../../node_modules/lodash-es/_listCacheHas.js
function listCacheHas(key) {
  return assocIndexOf_default(this.__data__, key) > -1;
}
var listCacheHas_default = listCacheHas;

// ../../../node_modules/lodash-es/_listCacheSet.js
function listCacheSet(key, value) {
  var data = this.__data__, index = assocIndexOf_default(data, key);
  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}
var listCacheSet_default = listCacheSet;

// ../../../node_modules/lodash-es/_ListCache.js
function ListCache(entries) {
  var index = -1, length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}
ListCache.prototype.clear = listCacheClear_default;
ListCache.prototype["delete"] = listCacheDelete_default;
ListCache.prototype.get = listCacheGet_default;
ListCache.prototype.has = listCacheHas_default;
ListCache.prototype.set = listCacheSet_default;
var ListCache_default = ListCache;

// ../../../node_modules/lodash-es/_Map.js
var Map2 = getNative_default(root_default, "Map");
var Map_default = Map2;

// ../../../node_modules/lodash-es/_mapCacheClear.js
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    "hash": new Hash_default(),
    "map": new (Map_default || ListCache_default)(),
    "string": new Hash_default()
  };
}
var mapCacheClear_default = mapCacheClear;

// ../../../node_modules/lodash-es/_isKeyable.js
function isKeyable(value) {
  var type = typeof value;
  return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
}
var isKeyable_default = isKeyable;

// ../../../node_modules/lodash-es/_getMapData.js
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable_default(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
}
var getMapData_default = getMapData;

// ../../../node_modules/lodash-es/_mapCacheDelete.js
function mapCacheDelete(key) {
  var result = getMapData_default(this, key)["delete"](key);
  this.size -= result ? 1 : 0;
  return result;
}
var mapCacheDelete_default = mapCacheDelete;

// ../../../node_modules/lodash-es/_mapCacheGet.js
function mapCacheGet(key) {
  return getMapData_default(this, key).get(key);
}
var mapCacheGet_default = mapCacheGet;

// ../../../node_modules/lodash-es/_mapCacheHas.js
function mapCacheHas(key) {
  return getMapData_default(this, key).has(key);
}
var mapCacheHas_default = mapCacheHas;

// ../../../node_modules/lodash-es/_mapCacheSet.js
function mapCacheSet(key, value) {
  var data = getMapData_default(this, key), size = data.size;
  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}
var mapCacheSet_default = mapCacheSet;

// ../../../node_modules/lodash-es/_MapCache.js
function MapCache(entries) {
  var index = -1, length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}
MapCache.prototype.clear = mapCacheClear_default;
MapCache.prototype["delete"] = mapCacheDelete_default;
MapCache.prototype.get = mapCacheGet_default;
MapCache.prototype.has = mapCacheHas_default;
MapCache.prototype.set = mapCacheSet_default;
var MapCache_default = MapCache;

// ../../../node_modules/lodash-es/memoize.js
var FUNC_ERROR_TEXT = "Expected a function";
function memoize(func, resolver) {
  if (typeof func != "function" || resolver != null && typeof resolver != "function") {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments, key = resolver ? resolver.apply(this, args) : args[0], cache = memoized.cache;
    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };
  memoized.cache = new (memoize.Cache || MapCache_default)();
  return memoized;
}
memoize.Cache = MapCache_default;
var memoize_default = memoize;

// ../../../node_modules/lodash-es/_memoizeCapped.js
var MAX_MEMOIZE_SIZE = 500;
function memoizeCapped(func) {
  var result = memoize_default(func, function(key) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }
    return key;
  });
  var cache = result.cache;
  return result;
}
var memoizeCapped_default = memoizeCapped;

// ../../../node_modules/lodash-es/_stringToPath.js
var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
var reEscapeChar = /\\(\\)?/g;
var stringToPath = memoizeCapped_default(function(string) {
  var result = [];
  if (string.charCodeAt(0) === 46) {
    result.push("");
  }
  string.replace(rePropName, function(match, number, quote, subString) {
    result.push(quote ? subString.replace(reEscapeChar, "$1") : number || match);
  });
  return result;
});
var stringToPath_default = stringToPath;

// ../../../node_modules/lodash-es/toString.js
function toString(value) {
  return value == null ? "" : baseToString_default(value);
}
var toString_default = toString;

// ../../../node_modules/lodash-es/_castPath.js
function castPath(value, object) {
  if (isArray_default(value)) {
    return value;
  }
  return isKey_default(value, object) ? [value] : stringToPath_default(toString_default(value));
}
var castPath_default = castPath;

// ../../../node_modules/lodash-es/_toKey.js
var INFINITY3 = 1 / 0;
function toKey(value) {
  if (typeof value == "string" || isSymbol_default(value)) {
    return value;
  }
  var result = value + "";
  return result == "0" && 1 / value == -INFINITY3 ? "-0" : result;
}
var toKey_default = toKey;

// ../../../node_modules/lodash-es/_baseGet.js
function baseGet(object, path) {
  path = castPath_default(path, object);
  var index = 0, length = path.length;
  while (object != null && index < length) {
    object = object[toKey_default(path[index++])];
  }
  return index && index == length ? object : void 0;
}
var baseGet_default = baseGet;

// ../../../node_modules/lodash-es/_arrayPush.js
function arrayPush(array, values) {
  var index = -1, length = values.length, offset = array.length;
  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}
var arrayPush_default = arrayPush;

// ../../../node_modules/lodash-es/_isFlattenable.js
var spreadableSymbol = Symbol_default ? Symbol_default.isConcatSpreadable : void 0;
function isFlattenable(value) {
  return isArray_default(value) || isArguments_default(value) || !!(spreadableSymbol && value && value[spreadableSymbol]);
}
var isFlattenable_default = isFlattenable;

// ../../../node_modules/lodash-es/_baseFlatten.js
function baseFlatten(array, depth, predicate, isStrict, result) {
  var index = -1, length = array.length;
  predicate || (predicate = isFlattenable_default);
  result || (result = []);
  while (++index < length) {
    var value = array[index];
    if (depth > 0 && predicate(value)) {
      if (depth > 1) {
        baseFlatten(value, depth - 1, predicate, isStrict, result);
      } else {
        arrayPush_default(result, value);
      }
    } else if (!isStrict) {
      result[result.length] = value;
    }
  }
  return result;
}
var baseFlatten_default = baseFlatten;

// ../../../node_modules/lodash-es/flatten.js
function flatten(array) {
  var length = array == null ? 0 : array.length;
  return length ? baseFlatten_default(array, 1) : [];
}
var flatten_default = flatten;

// ../../../node_modules/lodash-es/_flatRest.js
function flatRest(func) {
  return setToString_default(overRest_default(func, void 0, flatten_default), func + "");
}
var flatRest_default = flatRest;

// ../../../node_modules/lodash-es/before.js
var FUNC_ERROR_TEXT2 = "Expected a function";
function before(n, func) {
  var result;
  if (typeof func != "function") {
    throw new TypeError(FUNC_ERROR_TEXT2);
  }
  n = toInteger_default(n);
  return function() {
    if (--n > 0) {
      result = func.apply(this, arguments);
    }
    if (n <= 1) {
      func = void 0;
    }
    return result;
  };
}
var before_default = before;

// ../../../node_modules/lodash-es/_Set.js
var Set2 = getNative_default(root_default, "Set");
var Set_default = Set2;

// ../../../node_modules/lodash-es/_setCacheAdd.js
var HASH_UNDEFINED3 = "__lodash_hash_undefined__";
function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED3);
  return this;
}
var setCacheAdd_default = setCacheAdd;

// ../../../node_modules/lodash-es/_setCacheHas.js
function setCacheHas(value) {
  return this.__data__.has(value);
}
var setCacheHas_default = setCacheHas;

// ../../../node_modules/lodash-es/_SetCache.js
function SetCache(values) {
  var index = -1, length = values == null ? 0 : values.length;
  this.__data__ = new MapCache_default();
  while (++index < length) {
    this.add(values[index]);
  }
}
SetCache.prototype.add = SetCache.prototype.push = setCacheAdd_default;
SetCache.prototype.has = setCacheHas_default;
var SetCache_default = SetCache;

// ../../../node_modules/lodash-es/_cacheHas.js
function cacheHas(cache, key) {
  return cache.has(key);
}
var cacheHas_default = cacheHas;

// ../../../node_modules/lodash-es/_setToArray.js
function setToArray(set) {
  var index = -1, result = Array(set.size);
  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}
var setToArray_default = setToArray;

// ../../../node_modules/lodash-es/_baseHasIn.js
function baseHasIn(object, key) {
  return object != null && key in Object(object);
}
var baseHasIn_default = baseHasIn;

// ../../../node_modules/lodash-es/_hasPath.js
function hasPath(object, path, hasFunc) {
  path = castPath_default(path, object);
  var index = -1, length = path.length, result = false;
  while (++index < length) {
    var key = toKey_default(path[index]);
    if (!(result = object != null && hasFunc(object, key))) {
      break;
    }
    object = object[key];
  }
  if (result || ++index != length) {
    return result;
  }
  length = object == null ? 0 : object.length;
  return !!length && isLength_default(length) && isIndex_default(key, length) && (isArray_default(object) || isArguments_default(object));
}
var hasPath_default = hasPath;

// ../../../node_modules/lodash-es/hasIn.js
function hasIn(object, path) {
  return object != null && hasPath_default(object, path, baseHasIn_default);
}
var hasIn_default = hasIn;

// ../../../node_modules/lodash-es/_createBaseFor.js
function createBaseFor(fromRight) {
  return function(object, iteratee, keysFunc) {
    var index = -1, iterable = Object(object), props = keysFunc(object), length = props.length;
    while (length--) {
      var key = props[fromRight ? length : ++index];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object;
  };
}
var createBaseFor_default = createBaseFor;

// ../../../node_modules/lodash-es/_baseFor.js
var baseFor = createBaseFor_default();
var baseFor_default = baseFor;

// ../../../node_modules/lodash-es/_baseForOwn.js
function baseForOwn(object, iteratee) {
  return object && baseFor_default(object, iteratee, keys_default);
}
var baseForOwn_default = baseForOwn;

// ../../../node_modules/lodash-es/_createBaseEach.js
function createBaseEach(eachFunc, fromRight) {
  return function(collection, iteratee) {
    if (collection == null) {
      return collection;
    }
    if (!isArrayLike_default(collection)) {
      return eachFunc(collection, iteratee);
    }
    var length = collection.length, index = fromRight ? length : -1, iterable = Object(collection);
    while (fromRight ? index-- : ++index < length) {
      if (iteratee(iterable[index], index, iterable) === false) {
        break;
      }
    }
    return collection;
  };
}
var createBaseEach_default = createBaseEach;

// ../../../node_modules/lodash-es/_baseEach.js
var baseEach = createBaseEach_default(baseForOwn_default);
var baseEach_default = baseEach;

// ../../../node_modules/lodash-es/isArrayLikeObject.js
function isArrayLikeObject(value) {
  return isObjectLike_default(value) && isArrayLike_default(value);
}
var isArrayLikeObject_default = isArrayLikeObject;

// ../../../node_modules/lodash-es/_arrayIncludesWith.js
function arrayIncludesWith(array, value, comparator) {
  var index = -1, length = array == null ? 0 : array.length;
  while (++index < length) {
    if (comparator(value, array[index])) {
      return true;
    }
  }
  return false;
}
var arrayIncludesWith_default = arrayIncludesWith;

// ../../../node_modules/lodash-es/_baseDifference.js
var LARGE_ARRAY_SIZE = 200;
function baseDifference(array, values, iteratee, comparator) {
  var index = -1, includes = arrayIncludes_default, isCommon = true, length = array.length, result = [], valuesLength = values.length;
  if (!length) {
    return result;
  }
  if (iteratee) {
    values = arrayMap_default(values, baseUnary_default(iteratee));
  }
  if (comparator) {
    includes = arrayIncludesWith_default;
    isCommon = false;
  } else if (values.length >= LARGE_ARRAY_SIZE) {
    includes = cacheHas_default;
    isCommon = false;
    values = new SetCache_default(values);
  }
  outer:
    while (++index < length) {
      var value = array[index], computed = iteratee == null ? value : iteratee(value);
      value = comparator || value !== 0 ? value : 0;
      if (isCommon && computed === computed) {
        var valuesIndex = valuesLength;
        while (valuesIndex--) {
          if (values[valuesIndex] === computed) {
            continue outer;
          }
        }
        result.push(value);
      } else if (!includes(values, computed, comparator)) {
        result.push(value);
      }
    }
  return result;
}
var baseDifference_default = baseDifference;

// ../../../node_modules/lodash-es/difference.js
var difference = baseRest_default(function(array, values) {
  return isArrayLikeObject_default(array) ? baseDifference_default(array, baseFlatten_default(values, 1, isArrayLikeObject_default, true)) : [];
});
var difference_default = difference;

// ../../../node_modules/lodash-es/_castFunction.js
function castFunction(value) {
  return typeof value == "function" ? value : identity_default;
}
var castFunction_default = castFunction;

// ../../../node_modules/lodash-es/forEach.js
function forEach(collection, iteratee) {
  var func = isArray_default(collection) ? arrayEach_default : baseEach_default;
  return func(collection, castFunction_default(iteratee));
}
var forEach_default = forEach;

// ../../../node_modules/lodash-es/isBoolean.js
var boolTag2 = "[object Boolean]";
function isBoolean(value) {
  return value === true || value === false || isObjectLike_default(value) && baseGetTag_default(value) == boolTag2;
}
var isBoolean_default = isBoolean;

// ../../../node_modules/lodash-es/isNumber.js
var numberTag2 = "[object Number]";
function isNumber(value) {
  return typeof value == "number" || isObjectLike_default(value) && baseGetTag_default(value) == numberTag2;
}
var isNumber_default = isNumber;

// ../../../node_modules/lodash-es/isNaN.js
function isNaN2(value) {
  return isNumber_default(value) && value != +value;
}
var isNaN_default = isNaN2;

// ../../../node_modules/lodash-es/isNil.js
function isNil(value) {
  return value == null;
}
var isNil_default = isNil;

// ../../../node_modules/lodash-es/_baseSet.js
function baseSet(object, path, value, customizer) {
  if (!isObject_default(object)) {
    return object;
  }
  path = castPath_default(path, object);
  var index = -1, length = path.length, lastIndex = length - 1, nested = object;
  while (nested != null && ++index < length) {
    var key = toKey_default(path[index]), newValue = value;
    if (key === "__proto__" || key === "constructor" || key === "prototype") {
      return object;
    }
    if (index != lastIndex) {
      var objValue = nested[key];
      newValue = customizer ? customizer(objValue, key, nested) : void 0;
      if (newValue === void 0) {
        newValue = isObject_default(objValue) ? objValue : isIndex_default(path[index + 1]) ? [] : {};
      }
    }
    assignValue_default(nested, key, newValue);
    nested = nested[key];
  }
  return object;
}
var baseSet_default = baseSet;

// ../../../node_modules/lodash-es/_basePickBy.js
function basePickBy(object, paths, predicate) {
  var index = -1, length = paths.length, result = {};
  while (++index < length) {
    var path = paths[index], value = baseGet_default(object, path);
    if (predicate(value, path)) {
      baseSet_default(result, castPath_default(path, object), value);
    }
  }
  return result;
}
var basePickBy_default = basePickBy;

// ../../../node_modules/lodash-es/once.js
function once(func) {
  return before_default(2, func);
}
var once_default = once;

// ../../../node_modules/lodash-es/_basePick.js
function basePick(object, paths) {
  return basePickBy_default(object, paths, function(value, path) {
    return hasIn_default(object, path);
  });
}
var basePick_default = basePick;

// ../../../node_modules/lodash-es/pick.js
var pick = flatRest_default(function(object, paths) {
  return object == null ? {} : basePick_default(object, paths);
});
var pick_default = pick;

// ../../../node_modules/lodash-es/_createSet.js
var INFINITY4 = 1 / 0;
var createSet = !(Set_default && 1 / setToArray_default(new Set_default([, -0]))[1] == INFINITY4) ? noop_default : function(values) {
  return new Set_default(values);
};
var createSet_default = createSet;

// ../../../node_modules/lodash-es/_baseUniq.js
var LARGE_ARRAY_SIZE2 = 200;
function baseUniq(array, iteratee, comparator) {
  var index = -1, includes = arrayIncludes_default, length = array.length, isCommon = true, result = [], seen = result;
  if (comparator) {
    isCommon = false;
    includes = arrayIncludesWith_default;
  } else if (length >= LARGE_ARRAY_SIZE2) {
    var set = iteratee ? null : createSet_default(array);
    if (set) {
      return setToArray_default(set);
    }
    isCommon = false;
    includes = cacheHas_default;
    seen = new SetCache_default();
  } else {
    seen = iteratee ? [] : result;
  }
  outer:
    while (++index < length) {
      var value = array[index], computed = iteratee ? iteratee(value) : value;
      value = comparator || value !== 0 ? value : 0;
      if (isCommon && computed === computed) {
        var seenIndex = seen.length;
        while (seenIndex--) {
          if (seen[seenIndex] === computed) {
            continue outer;
          }
        }
        if (iteratee) {
          seen.push(computed);
        }
        result.push(value);
      } else if (!includes(seen, computed, comparator)) {
        if (seen !== result) {
          seen.push(computed);
        }
        result.push(value);
      }
    }
  return result;
}
var baseUniq_default = baseUniq;

// ../../../node_modules/lodash-es/uniq.js
function uniq(array) {
  return array && array.length ? baseUniq_default(array) : [];
}
var uniq_default = uniq;

// ../../../libs/sandbox/src/sandbox/ls.ts
function createLocalStorageWithPrefix(lsPrefix) {
  const { localStorage } = window;
  const getKeys = (stopFn) => {
    const keys2 = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key?.startsWith(lsPrefix)) {
        keys2.push(key);
      }
      if (stopFn?.(keys2)) {
        break;
      }
    }
    return keys2;
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
      return getKeys((keys2) => keys2.length > index)[index] || null;
    },
    removeItem(key) {
      return localStorage.removeItem(`${lsPrefix}${key}`);
    },
    setItem(key, value) {
      return localStorage.setItem(`${lsPrefix}${key}`, value);
    }
  };
  const warnUsage = once_default(() => {
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
  getEmptyPageUrl: () => "/empty.html",
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
function isObject2(arg) {
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
    if (!isObject2(obj)) {
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
          if (isFunction_default(value)) {
            const ctxMap = ensureCtxMap2(finalTarget);
            let boundValue = ctxMap.get(value);
            if (!isNil_default(boundValue))
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
          if (isFunction_default(finalTarget[prop])) {
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

// ../../../libs/sandbox/src/proxy/event.ts
function proxyEventEffect(ctx) {
  let cleared = false;
  const eventMap = /* @__PURE__ */ new Map();
  const keys2 = ["capture", "once", "passive"];
  const callbackWrapMap = /* @__PURE__ */ new WeakMap();
  const removeEventListener = (name, callback, options) => {
    const normalizedOption = {
      capture: false,
      once: false,
      passive: false
    };
    if (isBoolean_default(options)) {
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
    const hash = `${name}@${JSON.stringify(pick_default(normalizedOption, keys2))}`;
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
    if (isBoolean_default(options)) {
      normalizedOption.capture = options;
    } else {
      Object.assign(normalizedOption, options);
    }
    let normalizedCallback = null;
    if (normalizedOption.once && callback) {
      normalizedCallback = callbackWrapMap.get(callback) || (() => {
        const callbackWrap = function(...args) {
          removeEventListener(name, callback, normalizedOption);
          if (isFunction_default(callback)) {
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
    const hash = `${name}@${JSON.stringify(pick_default(normalizedOption, keys2))}`;
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
      const keys2 = Reflect.ownKeys(globalWindow[apiName].prototype);
      if (["Object", "Array"].includes(apiName)) {
        const obj = keys2.reduce((acc, k) => {
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
    forEach_default(eventMap, (f, eventName) => {
      if (window[eventName] === f) {
        window[eventName] = null;
      }
    });
  };
  return clearAll;
}
function patchWindowAssignableKeys(iframeWin, windowConfigurableKeys, apiOverrides, externals) {
  windowConfigurableKeys.filter((e) => typeof e === "symbol" || e && isNaN_default(Number(e))).forEach((varName) => {
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
  const windowNoneEventKeys = difference_default(windowKeys, windowEventsKeys);
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
var import_rxjs2 = __toESM(require_cjs());
var DocumentProtoKeys = uniq_default(
  Reflect.ownKeys(Node.prototype).concat(Reflect.ownKeys(Document.prototype)).filter((e) => typeof e !== "symbol")
);
var DocumentEventKeys = DocumentProtoKeys.filter((e) => e.startsWith("on"));
var DocumentNotEventKeys = difference_default(DocumentProtoKeys, DocumentEventKeys);
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
    forEach_default(eventMap, (f, eventName) => {
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
  (0, import_rxjs2.firstValueFrom)((0, import_rxjs2.fromEvent)(document, "DOMContentLoaded")).then(() => {
    patchAppendChild();
    patchRemoveChild();
  });
} else {
  patchAppendChild();
  patchRemoveChild();
}
function removeSandboxAppendElements(sandbox) {
  let root2 = document.documentElement;
  removeWithDFS(root2);
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
var import_rxjs3 = __toESM(require_cjs());
var $popstate = (0, import_rxjs3.fromEvent)(window, "popstate").pipe((0, import_rxjs3.share)());
var $hashChange = (0, import_rxjs3.fromEvent)(window, "hashchange").pipe((0, import_rxjs3.share)());
var $pushState = new import_rxjs3.Subject();
var $replaceState = new import_rxjs3.Subject();
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
  const effects = new import_rxjs3.Subscription();
  [s1, s2, s3, s4, removeJump, removeHashHandle].forEach((s) => effects.add(s));
  return () => effects.unsubscribe();
}

// ../../../libs/sandbox/src/sandbox/index.ts
var import_rxjs4 = __toESM(require_cjs());

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
      await (0, import_rxjs4.firstValueFrom)(
        (0, import_rxjs4.race)(
          (0, import_rxjs4.fromEvent)(document, "DOMContentLoaded"),
          (0, import_rxjs4.timer)(3 * 1e3).pipe(
            (0, import_rxjs4.tap)(() => {
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
// import React2, { Suspense, useEffect, useState } from "react";
const React2 = React;
const { Suspense, useEffect, useState, isValidElement } = React2;

// ../../../libs/sdk/src/utils/error-boundary.tsx
// import React, { isValidElement } from "react";
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
// import React3, { Suspense as Suspense2, useEffect as useEffect3, useRef } from "react";
const React3 = React;
const { Suspense: Suspense2, useEffect: useEffect3, useRef, useEffect: useEffect2 } = React3;

// ../../../libs/sdk/src/rc/use-async-effect.ts
//import { useEffect as useEffect2 } from "react";
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
        clearEffect.current = once_default(async () => {
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

const { useRef: useRef2, useEffect: useEffect4 } = React;

// ../../../libs/sdk/src/extractor/module-ref-extractor.ts
// import { useRef as useRef2, useEffect as useEffect4 } from "react";
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

const React4 = React;
const { useEffect: useEffect5, useRef: useRef3, useState: useState2} = React;
// ../../../libs/sdk/src/rc/html-sandbox.tsx
// import React4, { useEffect as useEffect5, useRef as useRef3, useState as useState2 } from "react";
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
    clearEffect.current = once_default(async () => {
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


const React5 = React;
const { memo, useRef: useRef4, useState: useState3 } = React5;
// ../../../libs/sdk/src/rc/mf-sandbox.tsx
// import React5, { memo, useRef as useRef4, useState as useState3 } from "react";
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
var loadModule = (scope, module2) => new Promise(async (resolve2, reject) => {
  try {
    await __webpack_init_sharing__("default");
    const container = window[scope];
    try {
      await container.init(__webpack_share_scopes__.default);
    } catch (error) {
      console.error(`${scope} as container has been initialized`, error);
    }
    const factory = await container.get(`./${module2}`);
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
  let module2 = null;
  try {
    await downloadResourceByScript(document.head, remoteEntry, opts);
    step = "loadModule" /* LoadModule */;
    module2 = await loadModule(name, expose);
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
    module2 = null;
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
    return module2;
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

const { useMemo, useState: useState4 } = React;

// ../../../libs/resolver/src/hooks/useGetModule.ts
// import { useMemo, useState as useState4 } from "react";
var useGetModule = (params) => {
  const { remoteEntry, name, expose, ...restParams } = params;
  const [ready, setReady] = useState4(false);
  const [failed, setFailed] = useState4(false);
  const module2 = useMemo(
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
    module: module2,
    ready,
    failed
  };
};

const React6 = React;
const { forwardRef, Suspense: Suspense3, useMemo: useMemo2 } = React6

// ../../../libs/resolver/src/hoc/withDynamicLoadModefederation.tsx
// import React6, { forwardRef, Suspense as Suspense3, useMemo as useMemo2 } from "react";
function withDynamicLoadModeFederation(opts) {
  const { errorFallbackRender, loadingFallbackRender } = opts;
  const funcComponent = forwardRef((props, ref) => {
    const { module: module2, ready, failed } = useGetModule(opts);
    const RemoteComponent = useMemo2(() => {
      if (!module2) {
        return null;
      }
      return React6.lazy(() => module2);
    }, [module2]);
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

const React7 = React;
const { Suspense: Suspense4 } = React;

// ../../../libs/sdk/src/index.tsx
// import React7, { Suspense as Suspense4 } from "react";
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
  isObject2 as isObject,
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
/*! Bundled license information:

lodash-es/lodash.js:
  (**
   * @license
   * Lodash (Custom Build) <https://lodash.com/>
   * Build: `lodash modularize exports="es" -o ./`
   * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
   * Released under MIT license <https://lodash.com/license>
   * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
   * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
   *)
*/
