(function () {
  const l = document.createElement("link").relList;
  if (l && l.supports && l.supports("modulepreload")) return;
  for (const c of document.querySelectorAll('link[rel="modulepreload"]')) r(c);
  new MutationObserver((c) => {
    for (const h of c)
      if (h.type === "childList")
        for (const d of h.addedNodes)
          d.tagName === "LINK" && d.rel === "modulepreload" && r(d);
  }).observe(document, { childList: !0, subtree: !0 });
  function u(c) {
    const h = {};
    return (
      c.integrity && (h.integrity = c.integrity),
      c.referrerPolicy && (h.referrerPolicy = c.referrerPolicy),
      c.crossOrigin === "use-credentials"
        ? (h.credentials = "include")
        : c.crossOrigin === "anonymous"
        ? (h.credentials = "omit")
        : (h.credentials = "same-origin"),
      h
    );
  }
  function r(c) {
    if (c.ep) return;
    c.ep = !0;
    const h = u(c);
    fetch(c.href, h);
  }
})();
function Xg(f) {
  return f && f.__esModule && Object.prototype.hasOwnProperty.call(f, "default")
    ? f.default
    : f;
}
function Kg(f) {
  if (Object.prototype.hasOwnProperty.call(f, "__esModule")) return f;
  var l = f.default;
  if (typeof l == "function") {
    var u = function r() {
      var c = !1;
      try {
        c = this instanceof r;
      } catch {}
      return c
        ? Reflect.construct(l, arguments, this.constructor)
        : l.apply(this, arguments);
    };
    u.prototype = l.prototype;
  } else u = {};
  return (
    Object.defineProperty(u, "__esModule", { value: !0 }),
    Object.keys(f).forEach(function (r) {
      var c = Object.getOwnPropertyDescriptor(f, r);
      Object.defineProperty(
        u,
        r,
        c.get
          ? c
          : {
              enumerable: !0,
              get: function () {
                return f[r];
              },
            }
      );
    }),
    u
  );
}
var Iu = { exports: {} },
  nl = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ed;
function Zg() {
  if (Ed) return nl;
  Ed = 1;
  var f = Symbol.for("react.transitional.element"),
    l = Symbol.for("react.fragment");
  function u(r, c, h) {
    var d = null;
    if (
      (h !== void 0 && (d = "" + h),
      c.key !== void 0 && (d = "" + c.key),
      "key" in c)
    ) {
      h = {};
      for (var m in c) m !== "key" && (h[m] = c[m]);
    } else h = c;
    return (
      (c = h.ref),
      { $$typeof: f, type: r, key: d, ref: c !== void 0 ? c : null, props: h }
    );
  }
  return (nl.Fragment = l), (nl.jsx = u), (nl.jsxs = u), nl;
}
var Td;
function Jg() {
  return Td || ((Td = 1), (Iu.exports = Zg())), Iu.exports;
}
var H = Jg(),
  Fu = { exports: {} },
  ie = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ad;
function Wg() {
  if (Ad) return ie;
  Ad = 1;
  var f = Symbol.for("react.transitional.element"),
    l = Symbol.for("react.portal"),
    u = Symbol.for("react.fragment"),
    r = Symbol.for("react.strict_mode"),
    c = Symbol.for("react.profiler"),
    h = Symbol.for("react.consumer"),
    d = Symbol.for("react.context"),
    m = Symbol.for("react.forward_ref"),
    _ = Symbol.for("react.suspense"),
    g = Symbol.for("react.memo"),
    p = Symbol.for("react.lazy"),
    E = Symbol.iterator;
  function O(S) {
    return S === null || typeof S != "object"
      ? null
      : ((S = (E && S[E]) || S["@@iterator"]),
        typeof S == "function" ? S : null);
  }
  var z = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    k = Object.assign,
    q = {};
  function B(S, N, Y) {
    (this.props = S),
      (this.context = N),
      (this.refs = q),
      (this.updater = Y || z);
  }
  (B.prototype.isReactComponent = {}),
    (B.prototype.setState = function (S, N) {
      if (typeof S != "object" && typeof S != "function" && S != null)
        throw Error(
          "takes an object of state variables to update or a function which returns an object of state variables."
        );
      this.updater.enqueueSetState(this, S, N, "setState");
    }),
    (B.prototype.forceUpdate = function (S) {
      this.updater.enqueueForceUpdate(this, S, "forceUpdate");
    });
  function ae() {}
  ae.prototype = B.prototype;
  function Q(S, N, Y) {
    (this.props = S),
      (this.context = N),
      (this.refs = q),
      (this.updater = Y || z);
  }
  var L = (Q.prototype = new ae());
  (L.constructor = Q), k(L, B.prototype), (L.isPureReactComponent = !0);
  var I = Array.isArray,
    K = { H: null, A: null, T: null, S: null, V: null },
    ee = Object.prototype.hasOwnProperty;
  function fe(S, N, Y, G, Z, he) {
    return (
      (Y = he.ref),
      { $$typeof: f, type: S, key: N, ref: Y !== void 0 ? Y : null, props: he }
    );
  }
  function je(S, N) {
    return fe(S.type, N, void 0, void 0, void 0, S.props);
  }
  function Ce(S) {
    return typeof S == "object" && S !== null && S.$$typeof === f;
  }
  function ia(S) {
    var N = { "=": "=0", ":": "=2" };
    return (
      "$" +
      S.replace(/[=:]/g, function (Y) {
        return N[Y];
      })
    );
  }
  var Ht = /\/+/g;
  function Ze(S, N) {
    return typeof S == "object" && S !== null && S.key != null
      ? ia("" + S.key)
      : N.toString(36);
  }
  function Cn() {}
  function Mn(S) {
    switch (S.status) {
      case "fulfilled":
        return S.value;
      case "rejected":
        throw S.reason;
      default:
        switch (
          (typeof S.status == "string"
            ? S.then(Cn, Cn)
            : ((S.status = "pending"),
              S.then(
                function (N) {
                  S.status === "pending" &&
                    ((S.status = "fulfilled"), (S.value = N));
                },
                function (N) {
                  S.status === "pending" &&
                    ((S.status = "rejected"), (S.reason = N));
                }
              )),
          S.status)
        ) {
          case "fulfilled":
            return S.value;
          case "rejected":
            throw S.reason;
        }
    }
    throw S;
  }
  function Je(S, N, Y, G, Z) {
    var he = typeof S;
    (he === "undefined" || he === "boolean") && (S = null);
    var te = !1;
    if (S === null) te = !0;
    else
      switch (he) {
        case "bigint":
        case "string":
        case "number":
          te = !0;
          break;
        case "object":
          switch (S.$$typeof) {
            case f:
            case l:
              te = !0;
              break;
            case p:
              return (te = S._init), Je(te(S._payload), N, Y, G, Z);
          }
      }
    if (te)
      return (
        (Z = Z(S)),
        (te = G === "" ? "." + Ze(S, 0) : G),
        I(Z)
          ? ((Y = ""),
            te != null && (Y = te.replace(Ht, "$&/") + "/"),
            Je(Z, N, Y, "", function (nn) {
              return nn;
            }))
          : Z != null &&
            (Ce(Z) &&
              (Z = je(
                Z,
                Y +
                  (Z.key == null || (S && S.key === Z.key)
                    ? ""
                    : ("" + Z.key).replace(Ht, "$&/") + "/") +
                  te
              )),
            N.push(Z)),
        1
      );
    te = 0;
    var st = G === "" ? "." : G + ":";
    if (I(S))
      for (var Te = 0; Te < S.length; Te++)
        (G = S[Te]), (he = st + Ze(G, Te)), (te += Je(G, N, Y, he, Z));
    else if (((Te = O(S)), typeof Te == "function"))
      for (S = Te.call(S), Te = 0; !(G = S.next()).done; )
        (G = G.value), (he = st + Ze(G, Te++)), (te += Je(G, N, Y, he, Z));
    else if (he === "object") {
      if (typeof S.then == "function") return Je(Mn(S), N, Y, G, Z);
      throw (
        ((N = String(S)),
        Error(
          "Objects are not valid as a React child (found: " +
            (N === "[object Object]"
              ? "object with keys {" + Object.keys(S).join(", ") + "}"
              : N) +
            "). If you meant to render a collection of children, use an array instead."
        ))
      );
    }
    return te;
  }
  function D(S, N, Y) {
    if (S == null) return S;
    var G = [],
      Z = 0;
    return (
      Je(S, G, "", "", function (he) {
        return N.call(Y, he, Z++);
      }),
      G
    );
  }
  function $(S) {
    if (S._status === -1) {
      var N = S._result;
      (N = N()),
        N.then(
          function (Y) {
            (S._status === 0 || S._status === -1) &&
              ((S._status = 1), (S._result = Y));
          },
          function (Y) {
            (S._status === 0 || S._status === -1) &&
              ((S._status = 2), (S._result = Y));
          }
        ),
        S._status === -1 && ((S._status = 0), (S._result = N));
    }
    if (S._status === 1) return S._result.default;
    throw S._result;
  }
  var P =
    typeof reportError == "function"
      ? reportError
      : function (S) {
          if (
            typeof window == "object" &&
            typeof window.ErrorEvent == "function"
          ) {
            var N = new window.ErrorEvent("error", {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof S == "object" &&
                S !== null &&
                typeof S.message == "string"
                  ? String(S.message)
                  : String(S),
              error: S,
            });
            if (!window.dispatchEvent(N)) return;
          } else if (
            typeof process == "object" &&
            typeof process.emit == "function"
          ) {
            process.emit("uncaughtException", S);
            return;
          }
          console.error(S);
        };
  function be() {}
  return (
    (ie.Children = {
      map: D,
      forEach: function (S, N, Y) {
        D(
          S,
          function () {
            N.apply(this, arguments);
          },
          Y
        );
      },
      count: function (S) {
        var N = 0;
        return (
          D(S, function () {
            N++;
          }),
          N
        );
      },
      toArray: function (S) {
        return (
          D(S, function (N) {
            return N;
          }) || []
        );
      },
      only: function (S) {
        if (!Ce(S))
          throw Error(
            "React.Children.only expected to receive a single React element child."
          );
        return S;
      },
    }),
    (ie.Component = B),
    (ie.Fragment = u),
    (ie.Profiler = c),
    (ie.PureComponent = Q),
    (ie.StrictMode = r),
    (ie.Suspense = _),
    (ie.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = K),
    (ie.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function (S) {
        return K.H.useMemoCache(S);
      },
    }),
    (ie.cache = function (S) {
      return function () {
        return S.apply(null, arguments);
      };
    }),
    (ie.cloneElement = function (S, N, Y) {
      if (S == null)
        throw Error(
          "The argument must be a React element, but you passed " + S + "."
        );
      var G = k({}, S.props),
        Z = S.key,
        he = void 0;
      if (N != null)
        for (te in (N.ref !== void 0 && (he = void 0),
        N.key !== void 0 && (Z = "" + N.key),
        N))
          !ee.call(N, te) ||
            te === "key" ||
            te === "__self" ||
            te === "__source" ||
            (te === "ref" && N.ref === void 0) ||
            (G[te] = N[te]);
      var te = arguments.length - 2;
      if (te === 1) G.children = Y;
      else if (1 < te) {
        for (var st = Array(te), Te = 0; Te < te; Te++)
          st[Te] = arguments[Te + 2];
        G.children = st;
      }
      return fe(S.type, Z, void 0, void 0, he, G);
    }),
    (ie.createContext = function (S) {
      return (
        (S = {
          $$typeof: d,
          _currentValue: S,
          _currentValue2: S,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (S.Provider = S),
        (S.Consumer = { $$typeof: h, _context: S }),
        S
      );
    }),
    (ie.createElement = function (S, N, Y) {
      var G,
        Z = {},
        he = null;
      if (N != null)
        for (G in (N.key !== void 0 && (he = "" + N.key), N))
          ee.call(N, G) &&
            G !== "key" &&
            G !== "__self" &&
            G !== "__source" &&
            (Z[G] = N[G]);
      var te = arguments.length - 2;
      if (te === 1) Z.children = Y;
      else if (1 < te) {
        for (var st = Array(te), Te = 0; Te < te; Te++)
          st[Te] = arguments[Te + 2];
        Z.children = st;
      }
      if (S && S.defaultProps)
        for (G in ((te = S.defaultProps), te))
          Z[G] === void 0 && (Z[G] = te[G]);
      return fe(S, he, void 0, void 0, null, Z);
    }),
    (ie.createRef = function () {
      return { current: null };
    }),
    (ie.forwardRef = function (S) {
      return { $$typeof: m, render: S };
    }),
    (ie.isValidElement = Ce),
    (ie.lazy = function (S) {
      return { $$typeof: p, _payload: { _status: -1, _result: S }, _init: $ };
    }),
    (ie.memo = function (S, N) {
      return { $$typeof: g, type: S, compare: N === void 0 ? null : N };
    }),
    (ie.startTransition = function (S) {
      var N = K.T,
        Y = {};
      K.T = Y;
      try {
        var G = S(),
          Z = K.S;
        Z !== null && Z(Y, G),
          typeof G == "object" &&
            G !== null &&
            typeof G.then == "function" &&
            G.then(be, P);
      } catch (he) {
        P(he);
      } finally {
        K.T = N;
      }
    }),
    (ie.unstable_useCacheRefresh = function () {
      return K.H.useCacheRefresh();
    }),
    (ie.use = function (S) {
      return K.H.use(S);
    }),
    (ie.useActionState = function (S, N, Y) {
      return K.H.useActionState(S, N, Y);
    }),
    (ie.useCallback = function (S, N) {
      return K.H.useCallback(S, N);
    }),
    (ie.useContext = function (S) {
      return K.H.useContext(S);
    }),
    (ie.useDebugValue = function () {}),
    (ie.useDeferredValue = function (S, N) {
      return K.H.useDeferredValue(S, N);
    }),
    (ie.useEffect = function (S, N, Y) {
      var G = K.H;
      if (typeof Y == "function")
        throw Error(
          "useEffect CRUD overload is not enabled in this build of React."
        );
      return G.useEffect(S, N);
    }),
    (ie.useId = function () {
      return K.H.useId();
    }),
    (ie.useImperativeHandle = function (S, N, Y) {
      return K.H.useImperativeHandle(S, N, Y);
    }),
    (ie.useInsertionEffect = function (S, N) {
      return K.H.useInsertionEffect(S, N);
    }),
    (ie.useLayoutEffect = function (S, N) {
      return K.H.useLayoutEffect(S, N);
    }),
    (ie.useMemo = function (S, N) {
      return K.H.useMemo(S, N);
    }),
    (ie.useOptimistic = function (S, N) {
      return K.H.useOptimistic(S, N);
    }),
    (ie.useReducer = function (S, N, Y) {
      return K.H.useReducer(S, N, Y);
    }),
    (ie.useRef = function (S) {
      return K.H.useRef(S);
    }),
    (ie.useState = function (S) {
      return K.H.useState(S);
    }),
    (ie.useSyncExternalStore = function (S, N, Y) {
      return K.H.useSyncExternalStore(S, N, Y);
    }),
    (ie.useTransition = function () {
      return K.H.useTransition();
    }),
    (ie.version = "19.1.1"),
    ie
  );
}
var Od;
function To() {
  return Od || ((Od = 1), (Fu.exports = Wg())), Fu.exports;
}
var He = To(),
  eo = { exports: {} },
  al = {},
  to = { exports: {} },
  no = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var jd;
function Pg() {
  return (
    jd ||
      ((jd = 1),
      (function (f) {
        function l(D, $) {
          var P = D.length;
          D.push($);
          e: for (; 0 < P; ) {
            var be = (P - 1) >>> 1,
              S = D[be];
            if (0 < c(S, $)) (D[be] = $), (D[P] = S), (P = be);
            else break e;
          }
        }
        function u(D) {
          return D.length === 0 ? null : D[0];
        }
        function r(D) {
          if (D.length === 0) return null;
          var $ = D[0],
            P = D.pop();
          if (P !== $) {
            D[0] = P;
            e: for (var be = 0, S = D.length, N = S >>> 1; be < N; ) {
              var Y = 2 * (be + 1) - 1,
                G = D[Y],
                Z = Y + 1,
                he = D[Z];
              if (0 > c(G, P))
                Z < S && 0 > c(he, G)
                  ? ((D[be] = he), (D[Z] = P), (be = Z))
                  : ((D[be] = G), (D[Y] = P), (be = Y));
              else if (Z < S && 0 > c(he, P))
                (D[be] = he), (D[Z] = P), (be = Z);
              else break e;
            }
          }
          return $;
        }
        function c(D, $) {
          var P = D.sortIndex - $.sortIndex;
          return P !== 0 ? P : D.id - $.id;
        }
        if (
          ((f.unstable_now = void 0),
          typeof performance == "object" &&
            typeof performance.now == "function")
        ) {
          var h = performance;
          f.unstable_now = function () {
            return h.now();
          };
        } else {
          var d = Date,
            m = d.now();
          f.unstable_now = function () {
            return d.now() - m;
          };
        }
        var _ = [],
          g = [],
          p = 1,
          E = null,
          O = 3,
          z = !1,
          k = !1,
          q = !1,
          B = !1,
          ae = typeof setTimeout == "function" ? setTimeout : null,
          Q = typeof clearTimeout == "function" ? clearTimeout : null,
          L = typeof setImmediate < "u" ? setImmediate : null;
        function I(D) {
          for (var $ = u(g); $ !== null; ) {
            if ($.callback === null) r(g);
            else if ($.startTime <= D)
              r(g), ($.sortIndex = $.expirationTime), l(_, $);
            else break;
            $ = u(g);
          }
        }
        function K(D) {
          if (((q = !1), I(D), !k))
            if (u(_) !== null) (k = !0), ee || ((ee = !0), Ze());
            else {
              var $ = u(g);
              $ !== null && Je(K, $.startTime - D);
            }
        }
        var ee = !1,
          fe = -1,
          je = 5,
          Ce = -1;
        function ia() {
          return B ? !0 : !(f.unstable_now() - Ce < je);
        }
        function Ht() {
          if (((B = !1), ee)) {
            var D = f.unstable_now();
            Ce = D;
            var $ = !0;
            try {
              e: {
                (k = !1), q && ((q = !1), Q(fe), (fe = -1)), (z = !0);
                var P = O;
                try {
                  t: {
                    for (
                      I(D), E = u(_);
                      E !== null && !(E.expirationTime > D && ia());

                    ) {
                      var be = E.callback;
                      if (typeof be == "function") {
                        (E.callback = null), (O = E.priorityLevel);
                        var S = be(E.expirationTime <= D);
                        if (((D = f.unstable_now()), typeof S == "function")) {
                          (E.callback = S), I(D), ($ = !0);
                          break t;
                        }
                        E === u(_) && r(_), I(D);
                      } else r(_);
                      E = u(_);
                    }
                    if (E !== null) $ = !0;
                    else {
                      var N = u(g);
                      N !== null && Je(K, N.startTime - D), ($ = !1);
                    }
                  }
                  break e;
                } finally {
                  (E = null), (O = P), (z = !1);
                }
                $ = void 0;
              }
            } finally {
              $ ? Ze() : (ee = !1);
            }
          }
        }
        var Ze;
        if (typeof L == "function")
          Ze = function () {
            L(Ht);
          };
        else if (typeof MessageChannel < "u") {
          var Cn = new MessageChannel(),
            Mn = Cn.port2;
          (Cn.port1.onmessage = Ht),
            (Ze = function () {
              Mn.postMessage(null);
            });
        } else
          Ze = function () {
            ae(Ht, 0);
          };
        function Je(D, $) {
          fe = ae(function () {
            D(f.unstable_now());
          }, $);
        }
        (f.unstable_IdlePriority = 5),
          (f.unstable_ImmediatePriority = 1),
          (f.unstable_LowPriority = 4),
          (f.unstable_NormalPriority = 3),
          (f.unstable_Profiling = null),
          (f.unstable_UserBlockingPriority = 2),
          (f.unstable_cancelCallback = function (D) {
            D.callback = null;
          }),
          (f.unstable_forceFrameRate = function (D) {
            0 > D || 125 < D
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (je = 0 < D ? Math.floor(1e3 / D) : 5);
          }),
          (f.unstable_getCurrentPriorityLevel = function () {
            return O;
          }),
          (f.unstable_next = function (D) {
            switch (O) {
              case 1:
              case 2:
              case 3:
                var $ = 3;
                break;
              default:
                $ = O;
            }
            var P = O;
            O = $;
            try {
              return D();
            } finally {
              O = P;
            }
          }),
          (f.unstable_requestPaint = function () {
            B = !0;
          }),
          (f.unstable_runWithPriority = function (D, $) {
            switch (D) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                D = 3;
            }
            var P = O;
            O = D;
            try {
              return $();
            } finally {
              O = P;
            }
          }),
          (f.unstable_scheduleCallback = function (D, $, P) {
            var be = f.unstable_now();
            switch (
              (typeof P == "object" && P !== null
                ? ((P = P.delay),
                  (P = typeof P == "number" && 0 < P ? be + P : be))
                : (P = be),
              D)
            ) {
              case 1:
                var S = -1;
                break;
              case 2:
                S = 250;
                break;
              case 5:
                S = 1073741823;
                break;
              case 4:
                S = 1e4;
                break;
              default:
                S = 5e3;
            }
            return (
              (S = P + S),
              (D = {
                id: p++,
                callback: $,
                priorityLevel: D,
                startTime: P,
                expirationTime: S,
                sortIndex: -1,
              }),
              P > be
                ? ((D.sortIndex = P),
                  l(g, D),
                  u(_) === null &&
                    D === u(g) &&
                    (q ? (Q(fe), (fe = -1)) : (q = !0), Je(K, P - be)))
                : ((D.sortIndex = S),
                  l(_, D),
                  k || z || ((k = !0), ee || ((ee = !0), Ze()))),
              D
            );
          }),
          (f.unstable_shouldYield = ia),
          (f.unstable_wrapCallback = function (D) {
            var $ = O;
            return function () {
              var P = O;
              O = $;
              try {
                return D.apply(this, arguments);
              } finally {
                O = P;
              }
            };
          });
      })(no)),
    no
  );
}
var Rd;
function Ig() {
  return Rd || ((Rd = 1), (to.exports = Pg())), to.exports;
}
var ao = { exports: {} },
  Ie = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var xd;
function Fg() {
  if (xd) return Ie;
  xd = 1;
  var f = To();
  function l(_) {
    var g = "https://react.dev/errors/" + _;
    if (1 < arguments.length) {
      g += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var p = 2; p < arguments.length; p++)
        g += "&args[]=" + encodeURIComponent(arguments[p]);
    }
    return (
      "Minified React error #" +
      _ +
      "; visit " +
      g +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function u() {}
  var r = {
      d: {
        f: u,
        r: function () {
          throw Error(l(522));
        },
        D: u,
        C: u,
        L: u,
        m: u,
        X: u,
        S: u,
        M: u,
      },
      p: 0,
      findDOMNode: null,
    },
    c = Symbol.for("react.portal");
  function h(_, g, p) {
    var E =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: c,
      key: E == null ? null : "" + E,
      children: _,
      containerInfo: g,
      implementation: p,
    };
  }
  var d = f.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function m(_, g) {
    if (_ === "font") return "";
    if (typeof g == "string") return g === "use-credentials" ? g : "";
  }
  return (
    (Ie.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = r),
    (Ie.createPortal = function (_, g) {
      var p =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!g || (g.nodeType !== 1 && g.nodeType !== 9 && g.nodeType !== 11))
        throw Error(l(299));
      return h(_, g, null, p);
    }),
    (Ie.flushSync = function (_) {
      var g = d.T,
        p = r.p;
      try {
        if (((d.T = null), (r.p = 2), _)) return _();
      } finally {
        (d.T = g), (r.p = p), r.d.f();
      }
    }),
    (Ie.preconnect = function (_, g) {
      typeof _ == "string" &&
        (g
          ? ((g = g.crossOrigin),
            (g =
              typeof g == "string"
                ? g === "use-credentials"
                  ? g
                  : ""
                : void 0))
          : (g = null),
        r.d.C(_, g));
    }),
    (Ie.prefetchDNS = function (_) {
      typeof _ == "string" && r.d.D(_);
    }),
    (Ie.preinit = function (_, g) {
      if (typeof _ == "string" && g && typeof g.as == "string") {
        var p = g.as,
          E = m(p, g.crossOrigin),
          O = typeof g.integrity == "string" ? g.integrity : void 0,
          z = typeof g.fetchPriority == "string" ? g.fetchPriority : void 0;
        p === "style"
          ? r.d.S(_, typeof g.precedence == "string" ? g.precedence : void 0, {
              crossOrigin: E,
              integrity: O,
              fetchPriority: z,
            })
          : p === "script" &&
            r.d.X(_, {
              crossOrigin: E,
              integrity: O,
              fetchPriority: z,
              nonce: typeof g.nonce == "string" ? g.nonce : void 0,
            });
      }
    }),
    (Ie.preinitModule = function (_, g) {
      if (typeof _ == "string")
        if (typeof g == "object" && g !== null) {
          if (g.as == null || g.as === "script") {
            var p = m(g.as, g.crossOrigin);
            r.d.M(_, {
              crossOrigin: p,
              integrity: typeof g.integrity == "string" ? g.integrity : void 0,
              nonce: typeof g.nonce == "string" ? g.nonce : void 0,
            });
          }
        } else g == null && r.d.M(_);
    }),
    (Ie.preload = function (_, g) {
      if (
        typeof _ == "string" &&
        typeof g == "object" &&
        g !== null &&
        typeof g.as == "string"
      ) {
        var p = g.as,
          E = m(p, g.crossOrigin);
        r.d.L(_, p, {
          crossOrigin: E,
          integrity: typeof g.integrity == "string" ? g.integrity : void 0,
          nonce: typeof g.nonce == "string" ? g.nonce : void 0,
          type: typeof g.type == "string" ? g.type : void 0,
          fetchPriority:
            typeof g.fetchPriority == "string" ? g.fetchPriority : void 0,
          referrerPolicy:
            typeof g.referrerPolicy == "string" ? g.referrerPolicy : void 0,
          imageSrcSet:
            typeof g.imageSrcSet == "string" ? g.imageSrcSet : void 0,
          imageSizes: typeof g.imageSizes == "string" ? g.imageSizes : void 0,
          media: typeof g.media == "string" ? g.media : void 0,
        });
      }
    }),
    (Ie.preloadModule = function (_, g) {
      if (typeof _ == "string")
        if (g) {
          var p = m(g.as, g.crossOrigin);
          r.d.m(_, {
            as: typeof g.as == "string" && g.as !== "script" ? g.as : void 0,
            crossOrigin: p,
            integrity: typeof g.integrity == "string" ? g.integrity : void 0,
          });
        } else r.d.m(_);
    }),
    (Ie.requestFormReset = function (_) {
      r.d.r(_);
    }),
    (Ie.unstable_batchedUpdates = function (_, g) {
      return _(g);
    }),
    (Ie.useFormState = function (_, g, p) {
      return d.H.useFormState(_, g, p);
    }),
    (Ie.useFormStatus = function () {
      return d.H.useHostTransitionStatus();
    }),
    (Ie.version = "19.1.1"),
    Ie
  );
}
var Ud;
function ey() {
  if (Ud) return ao.exports;
  Ud = 1;
  function f() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(f);
      } catch (l) {
        console.error(l);
      }
  }
  return f(), (ao.exports = Fg()), ao.exports;
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Dd;
function ty() {
  if (Dd) return al;
  Dd = 1;
  var f = Ig(),
    l = To(),
    u = ey();
  function r(t) {
    var n = "https://react.dev/errors/" + t;
    if (1 < arguments.length) {
      n += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var a = 2; a < arguments.length; a++)
        n += "&args[]=" + encodeURIComponent(arguments[a]);
    }
    return (
      "Minified React error #" +
      t +
      "; visit " +
      n +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function c(t) {
    return !(!t || (t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11));
  }
  function h(t) {
    var n = t,
      a = t;
    if (t.alternate) for (; n.return; ) n = n.return;
    else {
      t = n;
      do (n = t), (n.flags & 4098) !== 0 && (a = n.return), (t = n.return);
      while (t);
    }
    return n.tag === 3 ? a : null;
  }
  function d(t) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        (n === null && ((t = t.alternate), t !== null && (n = t.memoizedState)),
        n !== null)
      )
        return n.dehydrated;
    }
    return null;
  }
  function m(t) {
    if (h(t) !== t) throw Error(r(188));
  }
  function _(t) {
    var n = t.alternate;
    if (!n) {
      if (((n = h(t)), n === null)) throw Error(r(188));
      return n !== t ? null : t;
    }
    for (var a = t, i = n; ; ) {
      var s = a.return;
      if (s === null) break;
      var o = s.alternate;
      if (o === null) {
        if (((i = s.return), i !== null)) {
          a = i;
          continue;
        }
        break;
      }
      if (s.child === o.child) {
        for (o = s.child; o; ) {
          if (o === a) return m(s), t;
          if (o === i) return m(s), n;
          o = o.sibling;
        }
        throw Error(r(188));
      }
      if (a.return !== i.return) (a = s), (i = o);
      else {
        for (var v = !1, y = s.child; y; ) {
          if (y === a) {
            (v = !0), (a = s), (i = o);
            break;
          }
          if (y === i) {
            (v = !0), (i = s), (a = o);
            break;
          }
          y = y.sibling;
        }
        if (!v) {
          for (y = o.child; y; ) {
            if (y === a) {
              (v = !0), (a = o), (i = s);
              break;
            }
            if (y === i) {
              (v = !0), (i = o), (a = s);
              break;
            }
            y = y.sibling;
          }
          if (!v) throw Error(r(189));
        }
      }
      if (a.alternate !== i) throw Error(r(190));
    }
    if (a.tag !== 3) throw Error(r(188));
    return a.stateNode.current === a ? t : n;
  }
  function g(t) {
    var n = t.tag;
    if (n === 5 || n === 26 || n === 27 || n === 6) return t;
    for (t = t.child; t !== null; ) {
      if (((n = g(t)), n !== null)) return n;
      t = t.sibling;
    }
    return null;
  }
  var p = Object.assign,
    E = Symbol.for("react.element"),
    O = Symbol.for("react.transitional.element"),
    z = Symbol.for("react.portal"),
    k = Symbol.for("react.fragment"),
    q = Symbol.for("react.strict_mode"),
    B = Symbol.for("react.profiler"),
    ae = Symbol.for("react.provider"),
    Q = Symbol.for("react.consumer"),
    L = Symbol.for("react.context"),
    I = Symbol.for("react.forward_ref"),
    K = Symbol.for("react.suspense"),
    ee = Symbol.for("react.suspense_list"),
    fe = Symbol.for("react.memo"),
    je = Symbol.for("react.lazy"),
    Ce = Symbol.for("react.activity"),
    ia = Symbol.for("react.memo_cache_sentinel"),
    Ht = Symbol.iterator;
  function Ze(t) {
    return t === null || typeof t != "object"
      ? null
      : ((t = (Ht && t[Ht]) || t["@@iterator"]),
        typeof t == "function" ? t : null);
  }
  var Cn = Symbol.for("react.client.reference");
  function Mn(t) {
    if (t == null) return null;
    if (typeof t == "function")
      return t.$$typeof === Cn ? null : t.displayName || t.name || null;
    if (typeof t == "string") return t;
    switch (t) {
      case k:
        return "Fragment";
      case B:
        return "Profiler";
      case q:
        return "StrictMode";
      case K:
        return "Suspense";
      case ee:
        return "SuspenseList";
      case Ce:
        return "Activity";
    }
    if (typeof t == "object")
      switch (t.$$typeof) {
        case z:
          return "Portal";
        case L:
          return (t.displayName || "Context") + ".Provider";
        case Q:
          return (t._context.displayName || "Context") + ".Consumer";
        case I:
          var n = t.render;
          return (
            (t = t.displayName),
            t ||
              ((t = n.displayName || n.name || ""),
              (t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef")),
            t
          );
        case fe:
          return (
            (n = t.displayName || null), n !== null ? n : Mn(t.type) || "Memo"
          );
        case je:
          (n = t._payload), (t = t._init);
          try {
            return Mn(t(n));
          } catch {}
      }
    return null;
  }
  var Je = Array.isArray,
    D = l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    $ = u.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    P = { pending: !1, data: null, method: null, action: null },
    be = [],
    S = -1;
  function N(t) {
    return { current: t };
  }
  function Y(t) {
    0 > S || ((t.current = be[S]), (be[S] = null), S--);
  }
  function G(t, n) {
    S++, (be[S] = t.current), (t.current = n);
  }
  var Z = N(null),
    he = N(null),
    te = N(null),
    st = N(null);
  function Te(t, n) {
    switch ((G(te, n), G(he, t), G(Z, null), n.nodeType)) {
      case 9:
      case 11:
        t = (t = n.documentElement) && (t = t.namespaceURI) ? Ph(t) : 0;
        break;
      default:
        if (((t = n.tagName), (n = n.namespaceURI)))
          (n = Ph(n)), (t = Ih(n, t));
        else
          switch (t) {
            case "svg":
              t = 1;
              break;
            case "math":
              t = 2;
              break;
            default:
              t = 0;
          }
    }
    Y(Z), G(Z, t);
  }
  function nn() {
    Y(Z), Y(he), Y(te);
  }
  function qs(t) {
    t.memoizedState !== null && G(st, t);
    var n = Z.current,
      a = Ih(n, t.type);
    n !== a && (G(he, t), G(Z, a));
  }
  function dl(t) {
    he.current === t && (Y(Z), Y(he)),
      st.current === t && (Y(st), (Pi._currentValue = P));
  }
  var Bs = Object.prototype.hasOwnProperty,
    Hs = f.unstable_scheduleCallback,
    Ls = f.unstable_cancelCallback,
    Tv = f.unstable_shouldYield,
    Av = f.unstable_requestPaint,
    Dt = f.unstable_now,
    Ov = f.unstable_getCurrentPriorityLevel,
    Uo = f.unstable_ImmediatePriority,
    Do = f.unstable_UserBlockingPriority,
    vl = f.unstable_NormalPriority,
    jv = f.unstable_LowPriority,
    Co = f.unstable_IdlePriority,
    Rv = f.log,
    xv = f.unstable_setDisableYieldValue,
    li = null,
    rt = null;
  function an(t) {
    if (
      (typeof Rv == "function" && xv(t),
      rt && typeof rt.setStrictMode == "function")
    )
      try {
        rt.setStrictMode(li, t);
      } catch {}
  }
  var ut = Math.clz32 ? Math.clz32 : Cv,
    Uv = Math.log,
    Dv = Math.LN2;
  function Cv(t) {
    return (t >>>= 0), t === 0 ? 32 : (31 - ((Uv(t) / Dv) | 0)) | 0;
  }
  var gl = 256,
    yl = 4194304;
  function Nn(t) {
    var n = t & 42;
    if (n !== 0) return n;
    switch (t & -t) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t & 4194048;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return t & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return t;
    }
  }
  function ml(t, n, a) {
    var i = t.pendingLanes;
    if (i === 0) return 0;
    var s = 0,
      o = t.suspendedLanes,
      v = t.pingedLanes;
    t = t.warmLanes;
    var y = i & 134217727;
    return (
      y !== 0
        ? ((i = y & ~o),
          i !== 0
            ? (s = Nn(i))
            : ((v &= y),
              v !== 0
                ? (s = Nn(v))
                : a || ((a = y & ~t), a !== 0 && (s = Nn(a)))))
        : ((y = i & ~o),
          y !== 0
            ? (s = Nn(y))
            : v !== 0
            ? (s = Nn(v))
            : a || ((a = i & ~t), a !== 0 && (s = Nn(a)))),
      s === 0
        ? 0
        : n !== 0 &&
          n !== s &&
          (n & o) === 0 &&
          ((o = s & -s),
          (a = n & -n),
          o >= a || (o === 32 && (a & 4194048) !== 0))
        ? n
        : s
    );
  }
  function si(t, n) {
    return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & n) === 0;
  }
  function Mv(t, n) {
    switch (t) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return n + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return n + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function Mo() {
    var t = gl;
    return (gl <<= 1), (gl & 4194048) === 0 && (gl = 256), t;
  }
  function No() {
    var t = yl;
    return (yl <<= 1), (yl & 62914560) === 0 && (yl = 4194304), t;
  }
  function Gs(t) {
    for (var n = [], a = 0; 31 > a; a++) n.push(t);
    return n;
  }
  function ri(t, n) {
    (t.pendingLanes |= n),
      n !== 268435456 &&
        ((t.suspendedLanes = 0), (t.pingedLanes = 0), (t.warmLanes = 0));
  }
  function Nv(t, n, a, i, s, o) {
    var v = t.pendingLanes;
    (t.pendingLanes = a),
      (t.suspendedLanes = 0),
      (t.pingedLanes = 0),
      (t.warmLanes = 0),
      (t.expiredLanes &= a),
      (t.entangledLanes &= a),
      (t.errorRecoveryDisabledLanes &= a),
      (t.shellSuspendCounter = 0);
    var y = t.entanglements,
      b = t.expirationTimes,
      j = t.hiddenUpdates;
    for (a = v & ~a; 0 < a; ) {
      var U = 31 - ut(a),
        M = 1 << U;
      (y[U] = 0), (b[U] = -1);
      var R = j[U];
      if (R !== null)
        for (j[U] = null, U = 0; U < R.length; U++) {
          var x = R[U];
          x !== null && (x.lane &= -536870913);
        }
      a &= ~M;
    }
    i !== 0 && zo(t, i, 0),
      o !== 0 && s === 0 && t.tag !== 0 && (t.suspendedLanes |= o & ~(v & ~n));
  }
  function zo(t, n, a) {
    (t.pendingLanes |= n), (t.suspendedLanes &= ~n);
    var i = 31 - ut(n);
    (t.entangledLanes |= n),
      (t.entanglements[i] = t.entanglements[i] | 1073741824 | (a & 4194090));
  }
  function ko(t, n) {
    var a = (t.entangledLanes |= n);
    for (t = t.entanglements; a; ) {
      var i = 31 - ut(a),
        s = 1 << i;
      (s & n) | (t[i] & n) && (t[i] |= n), (a &= ~s);
    }
  }
  function $s(t) {
    switch (t) {
      case 2:
        t = 1;
        break;
      case 8:
        t = 4;
        break;
      case 32:
        t = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        t = 128;
        break;
      case 268435456:
        t = 134217728;
        break;
      default:
        t = 0;
    }
    return t;
  }
  function Ys(t) {
    return (
      (t &= -t),
      2 < t ? (8 < t ? ((t & 134217727) !== 0 ? 32 : 268435456) : 8) : 2
    );
  }
  function qo() {
    var t = $.p;
    return t !== 0 ? t : ((t = window.event), t === void 0 ? 32 : md(t.type));
  }
  function zv(t, n) {
    var a = $.p;
    try {
      return ($.p = t), n();
    } finally {
      $.p = a;
    }
  }
  var ln = Math.random().toString(36).slice(2),
    We = "__reactFiber$" + ln,
    et = "__reactProps$" + ln,
    la = "__reactContainer$" + ln,
    Qs = "__reactEvents$" + ln,
    kv = "__reactListeners$" + ln,
    qv = "__reactHandles$" + ln,
    Bo = "__reactResources$" + ln,
    ui = "__reactMarker$" + ln;
  function Vs(t) {
    delete t[We], delete t[et], delete t[Qs], delete t[kv], delete t[qv];
  }
  function sa(t) {
    var n = t[We];
    if (n) return n;
    for (var a = t.parentNode; a; ) {
      if ((n = a[la] || a[We])) {
        if (
          ((a = n.alternate),
          n.child !== null || (a !== null && a.child !== null))
        )
          for (t = nd(t); t !== null; ) {
            if ((a = t[We])) return a;
            t = nd(t);
          }
        return n;
      }
      (t = a), (a = t.parentNode);
    }
    return null;
  }
  function ra(t) {
    if ((t = t[We] || t[la])) {
      var n = t.tag;
      if (n === 5 || n === 6 || n === 13 || n === 26 || n === 27 || n === 3)
        return t;
    }
    return null;
  }
  function oi(t) {
    var n = t.tag;
    if (n === 5 || n === 26 || n === 27 || n === 6) return t.stateNode;
    throw Error(r(33));
  }
  function ua(t) {
    var n = t[Bo];
    return (
      n ||
        (n = t[Bo] =
          { hoistableStyles: new Map(), hoistableScripts: new Map() }),
      n
    );
  }
  function Le(t) {
    t[ui] = !0;
  }
  var Ho = new Set(),
    Lo = {};
  function zn(t, n) {
    oa(t, n), oa(t + "Capture", n);
  }
  function oa(t, n) {
    for (Lo[t] = n, t = 0; t < n.length; t++) Ho.add(n[t]);
  }
  var Bv = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ),
    Go = {},
    $o = {};
  function Hv(t) {
    return Bs.call($o, t)
      ? !0
      : Bs.call(Go, t)
      ? !1
      : Bv.test(t)
      ? ($o[t] = !0)
      : ((Go[t] = !0), !1);
  }
  function _l(t, n, a) {
    if (Hv(n))
      if (a === null) t.removeAttribute(n);
      else {
        switch (typeof a) {
          case "undefined":
          case "function":
          case "symbol":
            t.removeAttribute(n);
            return;
          case "boolean":
            var i = n.toLowerCase().slice(0, 5);
            if (i !== "data-" && i !== "aria-") {
              t.removeAttribute(n);
              return;
            }
        }
        t.setAttribute(n, "" + a);
      }
  }
  function pl(t, n, a) {
    if (a === null) t.removeAttribute(n);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(n);
          return;
      }
      t.setAttribute(n, "" + a);
    }
  }
  function Lt(t, n, a, i) {
    if (i === null) t.removeAttribute(a);
    else {
      switch (typeof i) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(a);
          return;
      }
      t.setAttributeNS(n, a, "" + i);
    }
  }
  var Xs, Yo;
  function ca(t) {
    if (Xs === void 0)
      try {
        throw Error();
      } catch (a) {
        var n = a.stack.trim().match(/\n( *(at )?)/);
        (Xs = (n && n[1]) || ""),
          (Yo =
            -1 <
            a.stack.indexOf(`
    at`)
              ? " (<anonymous>)"
              : -1 < a.stack.indexOf("@")
              ? "@unknown:0:0"
              : "");
      }
    return (
      `
` +
      Xs +
      t +
      Yo
    );
  }
  var Ks = !1;
  function Zs(t, n) {
    if (!t || Ks) return "";
    Ks = !0;
    var a = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var i = {
        DetermineComponentFrameRoot: function () {
          try {
            if (n) {
              var M = function () {
                throw Error();
              };
              if (
                (Object.defineProperty(M.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                typeof Reflect == "object" && Reflect.construct)
              ) {
                try {
                  Reflect.construct(M, []);
                } catch (x) {
                  var R = x;
                }
                Reflect.construct(t, [], M);
              } else {
                try {
                  M.call();
                } catch (x) {
                  R = x;
                }
                t.call(M.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (x) {
                R = x;
              }
              (M = t()) &&
                typeof M.catch == "function" &&
                M.catch(function () {});
            }
          } catch (x) {
            if (x && R && typeof x.stack == "string") return [x.stack, R.stack];
          }
          return [null, null];
        },
      };
      i.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var s = Object.getOwnPropertyDescriptor(
        i.DetermineComponentFrameRoot,
        "name"
      );
      s &&
        s.configurable &&
        Object.defineProperty(i.DetermineComponentFrameRoot, "name", {
          value: "DetermineComponentFrameRoot",
        });
      var o = i.DetermineComponentFrameRoot(),
        v = o[0],
        y = o[1];
      if (v && y) {
        var b = v.split(`
`),
          j = y.split(`
`);
        for (
          s = i = 0;
          i < b.length && !b[i].includes("DetermineComponentFrameRoot");

        )
          i++;
        for (; s < j.length && !j[s].includes("DetermineComponentFrameRoot"); )
          s++;
        if (i === b.length || s === j.length)
          for (
            i = b.length - 1, s = j.length - 1;
            1 <= i && 0 <= s && b[i] !== j[s];

          )
            s--;
        for (; 1 <= i && 0 <= s; i--, s--)
          if (b[i] !== j[s]) {
            if (i !== 1 || s !== 1)
              do
                if ((i--, s--, 0 > s || b[i] !== j[s])) {
                  var U =
                    `
` + b[i].replace(" at new ", " at ");
                  return (
                    t.displayName &&
                      U.includes("<anonymous>") &&
                      (U = U.replace("<anonymous>", t.displayName)),
                    U
                  );
                }
              while (1 <= i && 0 <= s);
            break;
          }
      }
    } finally {
      (Ks = !1), (Error.prepareStackTrace = a);
    }
    return (a = t ? t.displayName || t.name : "") ? ca(a) : "";
  }
  function Lv(t) {
    switch (t.tag) {
      case 26:
      case 27:
      case 5:
        return ca(t.type);
      case 16:
        return ca("Lazy");
      case 13:
        return ca("Suspense");
      case 19:
        return ca("SuspenseList");
      case 0:
      case 15:
        return Zs(t.type, !1);
      case 11:
        return Zs(t.type.render, !1);
      case 1:
        return Zs(t.type, !0);
      case 31:
        return ca("Activity");
      default:
        return "";
    }
  }
  function Qo(t) {
    try {
      var n = "";
      do (n += Lv(t)), (t = t.return);
      while (t);
      return n;
    } catch (a) {
      return (
        `
Error generating stack: ` +
        a.message +
        `
` +
        a.stack
      );
    }
  }
  function yt(t) {
    switch (typeof t) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return t;
      case "object":
        return t;
      default:
        return "";
    }
  }
  function Vo(t) {
    var n = t.type;
    return (
      (t = t.nodeName) &&
      t.toLowerCase() === "input" &&
      (n === "checkbox" || n === "radio")
    );
  }
  function Gv(t) {
    var n = Vo(t) ? "checked" : "value",
      a = Object.getOwnPropertyDescriptor(t.constructor.prototype, n),
      i = "" + t[n];
    if (
      !t.hasOwnProperty(n) &&
      typeof a < "u" &&
      typeof a.get == "function" &&
      typeof a.set == "function"
    ) {
      var s = a.get,
        o = a.set;
      return (
        Object.defineProperty(t, n, {
          configurable: !0,
          get: function () {
            return s.call(this);
          },
          set: function (v) {
            (i = "" + v), o.call(this, v);
          },
        }),
        Object.defineProperty(t, n, { enumerable: a.enumerable }),
        {
          getValue: function () {
            return i;
          },
          setValue: function (v) {
            i = "" + v;
          },
          stopTracking: function () {
            (t._valueTracker = null), delete t[n];
          },
        }
      );
    }
  }
  function bl(t) {
    t._valueTracker || (t._valueTracker = Gv(t));
  }
  function Xo(t) {
    if (!t) return !1;
    var n = t._valueTracker;
    if (!n) return !0;
    var a = n.getValue(),
      i = "";
    return (
      t && (i = Vo(t) ? (t.checked ? "true" : "false") : t.value),
      (t = i),
      t !== a ? (n.setValue(t), !0) : !1
    );
  }
  function Sl(t) {
    if (
      ((t = t || (typeof document < "u" ? document : void 0)), typeof t > "u")
    )
      return null;
    try {
      return t.activeElement || t.body;
    } catch {
      return t.body;
    }
  }
  var $v = /[\n"\\]/g;
  function mt(t) {
    return t.replace($v, function (n) {
      return "\\" + n.charCodeAt(0).toString(16) + " ";
    });
  }
  function Js(t, n, a, i, s, o, v, y) {
    (t.name = ""),
      v != null &&
      typeof v != "function" &&
      typeof v != "symbol" &&
      typeof v != "boolean"
        ? (t.type = v)
        : t.removeAttribute("type"),
      n != null
        ? v === "number"
          ? ((n === 0 && t.value === "") || t.value != n) &&
            (t.value = "" + yt(n))
          : t.value !== "" + yt(n) && (t.value = "" + yt(n))
        : (v !== "submit" && v !== "reset") || t.removeAttribute("value"),
      n != null
        ? Ws(t, v, yt(n))
        : a != null
        ? Ws(t, v, yt(a))
        : i != null && t.removeAttribute("value"),
      s == null && o != null && (t.defaultChecked = !!o),
      s != null &&
        (t.checked = s && typeof s != "function" && typeof s != "symbol"),
      y != null &&
      typeof y != "function" &&
      typeof y != "symbol" &&
      typeof y != "boolean"
        ? (t.name = "" + yt(y))
        : t.removeAttribute("name");
  }
  function Ko(t, n, a, i, s, o, v, y) {
    if (
      (o != null &&
        typeof o != "function" &&
        typeof o != "symbol" &&
        typeof o != "boolean" &&
        (t.type = o),
      n != null || a != null)
    ) {
      if (!((o !== "submit" && o !== "reset") || n != null)) return;
      (a = a != null ? "" + yt(a) : ""),
        (n = n != null ? "" + yt(n) : a),
        y || n === t.value || (t.value = n),
        (t.defaultValue = n);
    }
    (i = i ?? s),
      (i = typeof i != "function" && typeof i != "symbol" && !!i),
      (t.checked = y ? t.checked : !!i),
      (t.defaultChecked = !!i),
      v != null &&
        typeof v != "function" &&
        typeof v != "symbol" &&
        typeof v != "boolean" &&
        (t.name = v);
  }
  function Ws(t, n, a) {
    (n === "number" && Sl(t.ownerDocument) === t) ||
      t.defaultValue === "" + a ||
      (t.defaultValue = "" + a);
  }
  function fa(t, n, a, i) {
    if (((t = t.options), n)) {
      n = {};
      for (var s = 0; s < a.length; s++) n["$" + a[s]] = !0;
      for (a = 0; a < t.length; a++)
        (s = n.hasOwnProperty("$" + t[a].value)),
          t[a].selected !== s && (t[a].selected = s),
          s && i && (t[a].defaultSelected = !0);
    } else {
      for (a = "" + yt(a), n = null, s = 0; s < t.length; s++) {
        if (t[s].value === a) {
          (t[s].selected = !0), i && (t[s].defaultSelected = !0);
          return;
        }
        n !== null || t[s].disabled || (n = t[s]);
      }
      n !== null && (n.selected = !0);
    }
  }
  function Zo(t, n, a) {
    if (
      n != null &&
      ((n = "" + yt(n)), n !== t.value && (t.value = n), a == null)
    ) {
      t.defaultValue !== n && (t.defaultValue = n);
      return;
    }
    t.defaultValue = a != null ? "" + yt(a) : "";
  }
  function Jo(t, n, a, i) {
    if (n == null) {
      if (i != null) {
        if (a != null) throw Error(r(92));
        if (Je(i)) {
          if (1 < i.length) throw Error(r(93));
          i = i[0];
        }
        a = i;
      }
      a == null && (a = ""), (n = a);
    }
    (a = yt(n)),
      (t.defaultValue = a),
      (i = t.textContent),
      i === a && i !== "" && i !== null && (t.value = i);
  }
  function ha(t, n) {
    if (n) {
      var a = t.firstChild;
      if (a && a === t.lastChild && a.nodeType === 3) {
        a.nodeValue = n;
        return;
      }
    }
    t.textContent = n;
  }
  var Yv = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function Wo(t, n, a) {
    var i = n.indexOf("--") === 0;
    a == null || typeof a == "boolean" || a === ""
      ? i
        ? t.setProperty(n, "")
        : n === "float"
        ? (t.cssFloat = "")
        : (t[n] = "")
      : i
      ? t.setProperty(n, a)
      : typeof a != "number" || a === 0 || Yv.has(n)
      ? n === "float"
        ? (t.cssFloat = a)
        : (t[n] = ("" + a).trim())
      : (t[n] = a + "px");
  }
  function Po(t, n, a) {
    if (n != null && typeof n != "object") throw Error(r(62));
    if (((t = t.style), a != null)) {
      for (var i in a)
        !a.hasOwnProperty(i) ||
          (n != null && n.hasOwnProperty(i)) ||
          (i.indexOf("--") === 0
            ? t.setProperty(i, "")
            : i === "float"
            ? (t.cssFloat = "")
            : (t[i] = ""));
      for (var s in n)
        (i = n[s]), n.hasOwnProperty(s) && a[s] !== i && Wo(t, s, i);
    } else for (var o in n) n.hasOwnProperty(o) && Wo(t, o, n[o]);
  }
  function Ps(t) {
    if (t.indexOf("-") === -1) return !1;
    switch (t) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var Qv = new Map([
      ["acceptCharset", "accept-charset"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
      ["crossOrigin", "crossorigin"],
      ["accentHeight", "accent-height"],
      ["alignmentBaseline", "alignment-baseline"],
      ["arabicForm", "arabic-form"],
      ["baselineShift", "baseline-shift"],
      ["capHeight", "cap-height"],
      ["clipPath", "clip-path"],
      ["clipRule", "clip-rule"],
      ["colorInterpolation", "color-interpolation"],
      ["colorInterpolationFilters", "color-interpolation-filters"],
      ["colorProfile", "color-profile"],
      ["colorRendering", "color-rendering"],
      ["dominantBaseline", "dominant-baseline"],
      ["enableBackground", "enable-background"],
      ["fillOpacity", "fill-opacity"],
      ["fillRule", "fill-rule"],
      ["floodColor", "flood-color"],
      ["floodOpacity", "flood-opacity"],
      ["fontFamily", "font-family"],
      ["fontSize", "font-size"],
      ["fontSizeAdjust", "font-size-adjust"],
      ["fontStretch", "font-stretch"],
      ["fontStyle", "font-style"],
      ["fontVariant", "font-variant"],
      ["fontWeight", "font-weight"],
      ["glyphName", "glyph-name"],
      ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
      ["glyphOrientationVertical", "glyph-orientation-vertical"],
      ["horizAdvX", "horiz-adv-x"],
      ["horizOriginX", "horiz-origin-x"],
      ["imageRendering", "image-rendering"],
      ["letterSpacing", "letter-spacing"],
      ["lightingColor", "lighting-color"],
      ["markerEnd", "marker-end"],
      ["markerMid", "marker-mid"],
      ["markerStart", "marker-start"],
      ["overlinePosition", "overline-position"],
      ["overlineThickness", "overline-thickness"],
      ["paintOrder", "paint-order"],
      ["panose-1", "panose-1"],
      ["pointerEvents", "pointer-events"],
      ["renderingIntent", "rendering-intent"],
      ["shapeRendering", "shape-rendering"],
      ["stopColor", "stop-color"],
      ["stopOpacity", "stop-opacity"],
      ["strikethroughPosition", "strikethrough-position"],
      ["strikethroughThickness", "strikethrough-thickness"],
      ["strokeDasharray", "stroke-dasharray"],
      ["strokeDashoffset", "stroke-dashoffset"],
      ["strokeLinecap", "stroke-linecap"],
      ["strokeLinejoin", "stroke-linejoin"],
      ["strokeMiterlimit", "stroke-miterlimit"],
      ["strokeOpacity", "stroke-opacity"],
      ["strokeWidth", "stroke-width"],
      ["textAnchor", "text-anchor"],
      ["textDecoration", "text-decoration"],
      ["textRendering", "text-rendering"],
      ["transformOrigin", "transform-origin"],
      ["underlinePosition", "underline-position"],
      ["underlineThickness", "underline-thickness"],
      ["unicodeBidi", "unicode-bidi"],
      ["unicodeRange", "unicode-range"],
      ["unitsPerEm", "units-per-em"],
      ["vAlphabetic", "v-alphabetic"],
      ["vHanging", "v-hanging"],
      ["vIdeographic", "v-ideographic"],
      ["vMathematical", "v-mathematical"],
      ["vectorEffect", "vector-effect"],
      ["vertAdvY", "vert-adv-y"],
      ["vertOriginX", "vert-origin-x"],
      ["vertOriginY", "vert-origin-y"],
      ["wordSpacing", "word-spacing"],
      ["writingMode", "writing-mode"],
      ["xmlnsXlink", "xmlns:xlink"],
      ["xHeight", "x-height"],
    ]),
    Vv =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function wl(t) {
    return Vv.test("" + t)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : t;
  }
  var Is = null;
  function Fs(t) {
    return (
      (t = t.target || t.srcElement || window),
      t.correspondingUseElement && (t = t.correspondingUseElement),
      t.nodeType === 3 ? t.parentNode : t
    );
  }
  var da = null,
    va = null;
  function Io(t) {
    var n = ra(t);
    if (n && (t = n.stateNode)) {
      var a = t[et] || null;
      e: switch (((t = n.stateNode), n.type)) {
        case "input":
          if (
            (Js(
              t,
              a.value,
              a.defaultValue,
              a.defaultValue,
              a.checked,
              a.defaultChecked,
              a.type,
              a.name
            ),
            (n = a.name),
            a.type === "radio" && n != null)
          ) {
            for (a = t; a.parentNode; ) a = a.parentNode;
            for (
              a = a.querySelectorAll(
                'input[name="' + mt("" + n) + '"][type="radio"]'
              ),
                n = 0;
              n < a.length;
              n++
            ) {
              var i = a[n];
              if (i !== t && i.form === t.form) {
                var s = i[et] || null;
                if (!s) throw Error(r(90));
                Js(
                  i,
                  s.value,
                  s.defaultValue,
                  s.defaultValue,
                  s.checked,
                  s.defaultChecked,
                  s.type,
                  s.name
                );
              }
            }
            for (n = 0; n < a.length; n++)
              (i = a[n]), i.form === t.form && Xo(i);
          }
          break e;
        case "textarea":
          Zo(t, a.value, a.defaultValue);
          break e;
        case "select":
          (n = a.value), n != null && fa(t, !!a.multiple, n, !1);
      }
    }
  }
  var er = !1;
  function Fo(t, n, a) {
    if (er) return t(n, a);
    er = !0;
    try {
      var i = t(n);
      return i;
    } finally {
      if (
        ((er = !1),
        (da !== null || va !== null) &&
          (rs(), da && ((n = da), (t = va), (va = da = null), Io(n), t)))
      )
        for (n = 0; n < t.length; n++) Io(t[n]);
    }
  }
  function ci(t, n) {
    var a = t.stateNode;
    if (a === null) return null;
    var i = a[et] || null;
    if (i === null) return null;
    a = i[n];
    e: switch (n) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (i = !i.disabled) ||
          ((t = t.type),
          (i = !(
            t === "button" ||
            t === "input" ||
            t === "select" ||
            t === "textarea"
          ))),
          (t = !i);
        break e;
      default:
        t = !1;
    }
    if (t) return null;
    if (a && typeof a != "function") throw Error(r(231, n, typeof a));
    return a;
  }
  var Gt = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    tr = !1;
  if (Gt)
    try {
      var fi = {};
      Object.defineProperty(fi, "passive", {
        get: function () {
          tr = !0;
        },
      }),
        window.addEventListener("test", fi, fi),
        window.removeEventListener("test", fi, fi);
    } catch {
      tr = !1;
    }
  var sn = null,
    nr = null,
    El = null;
  function ec() {
    if (El) return El;
    var t,
      n = nr,
      a = n.length,
      i,
      s = "value" in sn ? sn.value : sn.textContent,
      o = s.length;
    for (t = 0; t < a && n[t] === s[t]; t++);
    var v = a - t;
    for (i = 1; i <= v && n[a - i] === s[o - i]; i++);
    return (El = s.slice(t, 1 < i ? 1 - i : void 0));
  }
  function Tl(t) {
    var n = t.keyCode;
    return (
      "charCode" in t
        ? ((t = t.charCode), t === 0 && n === 13 && (t = 13))
        : (t = n),
      t === 10 && (t = 13),
      32 <= t || t === 13 ? t : 0
    );
  }
  function Al() {
    return !0;
  }
  function tc() {
    return !1;
  }
  function tt(t) {
    function n(a, i, s, o, v) {
      (this._reactName = a),
        (this._targetInst = s),
        (this.type = i),
        (this.nativeEvent = o),
        (this.target = v),
        (this.currentTarget = null);
      for (var y in t)
        t.hasOwnProperty(y) && ((a = t[y]), (this[y] = a ? a(o) : o[y]));
      return (
        (this.isDefaultPrevented = (
          o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
        )
          ? Al
          : tc),
        (this.isPropagationStopped = tc),
        this
      );
    }
    return (
      p(n.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var a = this.nativeEvent;
          a &&
            (a.preventDefault
              ? a.preventDefault()
              : typeof a.returnValue != "unknown" && (a.returnValue = !1),
            (this.isDefaultPrevented = Al));
        },
        stopPropagation: function () {
          var a = this.nativeEvent;
          a &&
            (a.stopPropagation
              ? a.stopPropagation()
              : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0),
            (this.isPropagationStopped = Al));
        },
        persist: function () {},
        isPersistent: Al,
      }),
      n
    );
  }
  var kn = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (t) {
        return t.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    Ol = tt(kn),
    hi = p({}, kn, { view: 0, detail: 0 }),
    Xv = tt(hi),
    ar,
    ir,
    di,
    jl = p({}, hi, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: sr,
      button: 0,
      buttons: 0,
      relatedTarget: function (t) {
        return t.relatedTarget === void 0
          ? t.fromElement === t.srcElement
            ? t.toElement
            : t.fromElement
          : t.relatedTarget;
      },
      movementX: function (t) {
        return "movementX" in t
          ? t.movementX
          : (t !== di &&
              (di && t.type === "mousemove"
                ? ((ar = t.screenX - di.screenX), (ir = t.screenY - di.screenY))
                : (ir = ar = 0),
              (di = t)),
            ar);
      },
      movementY: function (t) {
        return "movementY" in t ? t.movementY : ir;
      },
    }),
    nc = tt(jl),
    Kv = p({}, jl, { dataTransfer: 0 }),
    Zv = tt(Kv),
    Jv = p({}, hi, { relatedTarget: 0 }),
    lr = tt(Jv),
    Wv = p({}, kn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Pv = tt(Wv),
    Iv = p({}, kn, {
      clipboardData: function (t) {
        return "clipboardData" in t ? t.clipboardData : window.clipboardData;
      },
    }),
    Fv = tt(Iv),
    e0 = p({}, kn, { data: 0 }),
    ac = tt(e0),
    t0 = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified",
    },
    n0 = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta",
    },
    a0 = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function i0(t) {
    var n = this.nativeEvent;
    return n.getModifierState
      ? n.getModifierState(t)
      : (t = a0[t])
      ? !!n[t]
      : !1;
  }
  function sr() {
    return i0;
  }
  var l0 = p({}, hi, {
      key: function (t) {
        if (t.key) {
          var n = t0[t.key] || t.key;
          if (n !== "Unidentified") return n;
        }
        return t.type === "keypress"
          ? ((t = Tl(t)), t === 13 ? "Enter" : String.fromCharCode(t))
          : t.type === "keydown" || t.type === "keyup"
          ? n0[t.keyCode] || "Unidentified"
          : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: sr,
      charCode: function (t) {
        return t.type === "keypress" ? Tl(t) : 0;
      },
      keyCode: function (t) {
        return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
      },
      which: function (t) {
        return t.type === "keypress"
          ? Tl(t)
          : t.type === "keydown" || t.type === "keyup"
          ? t.keyCode
          : 0;
      },
    }),
    s0 = tt(l0),
    r0 = p({}, jl, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    ic = tt(r0),
    u0 = p({}, hi, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: sr,
    }),
    o0 = tt(u0),
    c0 = p({}, kn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    f0 = tt(c0),
    h0 = p({}, jl, {
      deltaX: function (t) {
        return "deltaX" in t
          ? t.deltaX
          : "wheelDeltaX" in t
          ? -t.wheelDeltaX
          : 0;
      },
      deltaY: function (t) {
        return "deltaY" in t
          ? t.deltaY
          : "wheelDeltaY" in t
          ? -t.wheelDeltaY
          : "wheelDelta" in t
          ? -t.wheelDelta
          : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    d0 = tt(h0),
    v0 = p({}, kn, { newState: 0, oldState: 0 }),
    g0 = tt(v0),
    y0 = [9, 13, 27, 32],
    rr = Gt && "CompositionEvent" in window,
    vi = null;
  Gt && "documentMode" in document && (vi = document.documentMode);
  var m0 = Gt && "TextEvent" in window && !vi,
    lc = Gt && (!rr || (vi && 8 < vi && 11 >= vi)),
    sc = " ",
    rc = !1;
  function uc(t, n) {
    switch (t) {
      case "keyup":
        return y0.indexOf(n.keyCode) !== -1;
      case "keydown":
        return n.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function oc(t) {
    return (t = t.detail), typeof t == "object" && "data" in t ? t.data : null;
  }
  var ga = !1;
  function _0(t, n) {
    switch (t) {
      case "compositionend":
        return oc(n);
      case "keypress":
        return n.which !== 32 ? null : ((rc = !0), sc);
      case "textInput":
        return (t = n.data), t === sc && rc ? null : t;
      default:
        return null;
    }
  }
  function p0(t, n) {
    if (ga)
      return t === "compositionend" || (!rr && uc(t, n))
        ? ((t = ec()), (El = nr = sn = null), (ga = !1), t)
        : null;
    switch (t) {
      case "paste":
        return null;
      case "keypress":
        if (!(n.ctrlKey || n.altKey || n.metaKey) || (n.ctrlKey && n.altKey)) {
          if (n.char && 1 < n.char.length) return n.char;
          if (n.which) return String.fromCharCode(n.which);
        }
        return null;
      case "compositionend":
        return lc && n.locale !== "ko" ? null : n.data;
      default:
        return null;
    }
  }
  var b0 = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function cc(t) {
    var n = t && t.nodeName && t.nodeName.toLowerCase();
    return n === "input" ? !!b0[t.type] : n === "textarea";
  }
  function fc(t, n, a, i) {
    da ? (va ? va.push(i) : (va = [i])) : (da = i),
      (n = ds(n, "onChange")),
      0 < n.length &&
        ((a = new Ol("onChange", "change", null, a, i)),
        t.push({ event: a, listeners: n }));
  }
  var gi = null,
    yi = null;
  function S0(t) {
    Xh(t, 0);
  }
  function Rl(t) {
    var n = oi(t);
    if (Xo(n)) return t;
  }
  function hc(t, n) {
    if (t === "change") return n;
  }
  var dc = !1;
  if (Gt) {
    var ur;
    if (Gt) {
      var or = "oninput" in document;
      if (!or) {
        var vc = document.createElement("div");
        vc.setAttribute("oninput", "return;"),
          (or = typeof vc.oninput == "function");
      }
      ur = or;
    } else ur = !1;
    dc = ur && (!document.documentMode || 9 < document.documentMode);
  }
  function gc() {
    gi && (gi.detachEvent("onpropertychange", yc), (yi = gi = null));
  }
  function yc(t) {
    if (t.propertyName === "value" && Rl(yi)) {
      var n = [];
      fc(n, yi, t, Fs(t)), Fo(S0, n);
    }
  }
  function w0(t, n, a) {
    t === "focusin"
      ? (gc(), (gi = n), (yi = a), gi.attachEvent("onpropertychange", yc))
      : t === "focusout" && gc();
  }
  function E0(t) {
    if (t === "selectionchange" || t === "keyup" || t === "keydown")
      return Rl(yi);
  }
  function T0(t, n) {
    if (t === "click") return Rl(n);
  }
  function A0(t, n) {
    if (t === "input" || t === "change") return Rl(n);
  }
  function O0(t, n) {
    return (t === n && (t !== 0 || 1 / t === 1 / n)) || (t !== t && n !== n);
  }
  var ot = typeof Object.is == "function" ? Object.is : O0;
  function mi(t, n) {
    if (ot(t, n)) return !0;
    if (
      typeof t != "object" ||
      t === null ||
      typeof n != "object" ||
      n === null
    )
      return !1;
    var a = Object.keys(t),
      i = Object.keys(n);
    if (a.length !== i.length) return !1;
    for (i = 0; i < a.length; i++) {
      var s = a[i];
      if (!Bs.call(n, s) || !ot(t[s], n[s])) return !1;
    }
    return !0;
  }
  function mc(t) {
    for (; t && t.firstChild; ) t = t.firstChild;
    return t;
  }
  function _c(t, n) {
    var a = mc(t);
    t = 0;
    for (var i; a; ) {
      if (a.nodeType === 3) {
        if (((i = t + a.textContent.length), t <= n && i >= n))
          return { node: a, offset: n - t };
        t = i;
      }
      e: {
        for (; a; ) {
          if (a.nextSibling) {
            a = a.nextSibling;
            break e;
          }
          a = a.parentNode;
        }
        a = void 0;
      }
      a = mc(a);
    }
  }
  function pc(t, n) {
    return t && n
      ? t === n
        ? !0
        : t && t.nodeType === 3
        ? !1
        : n && n.nodeType === 3
        ? pc(t, n.parentNode)
        : "contains" in t
        ? t.contains(n)
        : t.compareDocumentPosition
        ? !!(t.compareDocumentPosition(n) & 16)
        : !1
      : !1;
  }
  function bc(t) {
    t =
      t != null &&
      t.ownerDocument != null &&
      t.ownerDocument.defaultView != null
        ? t.ownerDocument.defaultView
        : window;
    for (var n = Sl(t.document); n instanceof t.HTMLIFrameElement; ) {
      try {
        var a = typeof n.contentWindow.location.href == "string";
      } catch {
        a = !1;
      }
      if (a) t = n.contentWindow;
      else break;
      n = Sl(t.document);
    }
    return n;
  }
  function cr(t) {
    var n = t && t.nodeName && t.nodeName.toLowerCase();
    return (
      n &&
      ((n === "input" &&
        (t.type === "text" ||
          t.type === "search" ||
          t.type === "tel" ||
          t.type === "url" ||
          t.type === "password")) ||
        n === "textarea" ||
        t.contentEditable === "true")
    );
  }
  var j0 = Gt && "documentMode" in document && 11 >= document.documentMode,
    ya = null,
    fr = null,
    _i = null,
    hr = !1;
  function Sc(t, n, a) {
    var i =
      a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
    hr ||
      ya == null ||
      ya !== Sl(i) ||
      ((i = ya),
      "selectionStart" in i && cr(i)
        ? (i = { start: i.selectionStart, end: i.selectionEnd })
        : ((i = (
            (i.ownerDocument && i.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (i = {
            anchorNode: i.anchorNode,
            anchorOffset: i.anchorOffset,
            focusNode: i.focusNode,
            focusOffset: i.focusOffset,
          })),
      (_i && mi(_i, i)) ||
        ((_i = i),
        (i = ds(fr, "onSelect")),
        0 < i.length &&
          ((n = new Ol("onSelect", "select", null, n, a)),
          t.push({ event: n, listeners: i }),
          (n.target = ya))));
  }
  function qn(t, n) {
    var a = {};
    return (
      (a[t.toLowerCase()] = n.toLowerCase()),
      (a["Webkit" + t] = "webkit" + n),
      (a["Moz" + t] = "moz" + n),
      a
    );
  }
  var ma = {
      animationend: qn("Animation", "AnimationEnd"),
      animationiteration: qn("Animation", "AnimationIteration"),
      animationstart: qn("Animation", "AnimationStart"),
      transitionrun: qn("Transition", "TransitionRun"),
      transitionstart: qn("Transition", "TransitionStart"),
      transitioncancel: qn("Transition", "TransitionCancel"),
      transitionend: qn("Transition", "TransitionEnd"),
    },
    dr = {},
    wc = {};
  Gt &&
    ((wc = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete ma.animationend.animation,
      delete ma.animationiteration.animation,
      delete ma.animationstart.animation),
    "TransitionEvent" in window || delete ma.transitionend.transition);
  function Bn(t) {
    if (dr[t]) return dr[t];
    if (!ma[t]) return t;
    var n = ma[t],
      a;
    for (a in n) if (n.hasOwnProperty(a) && a in wc) return (dr[t] = n[a]);
    return t;
  }
  var Ec = Bn("animationend"),
    Tc = Bn("animationiteration"),
    Ac = Bn("animationstart"),
    R0 = Bn("transitionrun"),
    x0 = Bn("transitionstart"),
    U0 = Bn("transitioncancel"),
    Oc = Bn("transitionend"),
    jc = new Map(),
    vr =
      "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " "
      );
  vr.push("scrollEnd");
  function Ot(t, n) {
    jc.set(t, n), zn(n, [t]);
  }
  var Rc = new WeakMap();
  function _t(t, n) {
    if (typeof t == "object" && t !== null) {
      var a = Rc.get(t);
      return a !== void 0
        ? a
        : ((n = { value: t, source: n, stack: Qo(n) }), Rc.set(t, n), n);
    }
    return { value: t, source: n, stack: Qo(n) };
  }
  var pt = [],
    _a = 0,
    gr = 0;
  function xl() {
    for (var t = _a, n = (gr = _a = 0); n < t; ) {
      var a = pt[n];
      pt[n++] = null;
      var i = pt[n];
      pt[n++] = null;
      var s = pt[n];
      pt[n++] = null;
      var o = pt[n];
      if (((pt[n++] = null), i !== null && s !== null)) {
        var v = i.pending;
        v === null ? (s.next = s) : ((s.next = v.next), (v.next = s)),
          (i.pending = s);
      }
      o !== 0 && xc(a, s, o);
    }
  }
  function Ul(t, n, a, i) {
    (pt[_a++] = t),
      (pt[_a++] = n),
      (pt[_a++] = a),
      (pt[_a++] = i),
      (gr |= i),
      (t.lanes |= i),
      (t = t.alternate),
      t !== null && (t.lanes |= i);
  }
  function yr(t, n, a, i) {
    return Ul(t, n, a, i), Dl(t);
  }
  function pa(t, n) {
    return Ul(t, null, null, n), Dl(t);
  }
  function xc(t, n, a) {
    t.lanes |= a;
    var i = t.alternate;
    i !== null && (i.lanes |= a);
    for (var s = !1, o = t.return; o !== null; )
      (o.childLanes |= a),
        (i = o.alternate),
        i !== null && (i.childLanes |= a),
        o.tag === 22 &&
          ((t = o.stateNode), t === null || t._visibility & 1 || (s = !0)),
        (t = o),
        (o = o.return);
    return t.tag === 3
      ? ((o = t.stateNode),
        s &&
          n !== null &&
          ((s = 31 - ut(a)),
          (t = o.hiddenUpdates),
          (i = t[s]),
          i === null ? (t[s] = [n]) : i.push(n),
          (n.lane = a | 536870912)),
        o)
      : null;
  }
  function Dl(t) {
    if (50 < Yi) throw ((Yi = 0), (wu = null), Error(r(185)));
    for (var n = t.return; n !== null; ) (t = n), (n = t.return);
    return t.tag === 3 ? t.stateNode : null;
  }
  var ba = {};
  function D0(t, n, a, i) {
    (this.tag = t),
      (this.key = a),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.refCleanup = this.ref = null),
      (this.pendingProps = n),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = i),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null);
  }
  function ct(t, n, a, i) {
    return new D0(t, n, a, i);
  }
  function mr(t) {
    return (t = t.prototype), !(!t || !t.isReactComponent);
  }
  function $t(t, n) {
    var a = t.alternate;
    return (
      a === null
        ? ((a = ct(t.tag, n, t.key, t.mode)),
          (a.elementType = t.elementType),
          (a.type = t.type),
          (a.stateNode = t.stateNode),
          (a.alternate = t),
          (t.alternate = a))
        : ((a.pendingProps = n),
          (a.type = t.type),
          (a.flags = 0),
          (a.subtreeFlags = 0),
          (a.deletions = null)),
      (a.flags = t.flags & 65011712),
      (a.childLanes = t.childLanes),
      (a.lanes = t.lanes),
      (a.child = t.child),
      (a.memoizedProps = t.memoizedProps),
      (a.memoizedState = t.memoizedState),
      (a.updateQueue = t.updateQueue),
      (n = t.dependencies),
      (a.dependencies =
        n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }),
      (a.sibling = t.sibling),
      (a.index = t.index),
      (a.ref = t.ref),
      (a.refCleanup = t.refCleanup),
      a
    );
  }
  function Uc(t, n) {
    t.flags &= 65011714;
    var a = t.alternate;
    return (
      a === null
        ? ((t.childLanes = 0),
          (t.lanes = n),
          (t.child = null),
          (t.subtreeFlags = 0),
          (t.memoizedProps = null),
          (t.memoizedState = null),
          (t.updateQueue = null),
          (t.dependencies = null),
          (t.stateNode = null))
        : ((t.childLanes = a.childLanes),
          (t.lanes = a.lanes),
          (t.child = a.child),
          (t.subtreeFlags = 0),
          (t.deletions = null),
          (t.memoizedProps = a.memoizedProps),
          (t.memoizedState = a.memoizedState),
          (t.updateQueue = a.updateQueue),
          (t.type = a.type),
          (n = a.dependencies),
          (t.dependencies =
            n === null
              ? null
              : { lanes: n.lanes, firstContext: n.firstContext })),
      t
    );
  }
  function Cl(t, n, a, i, s, o) {
    var v = 0;
    if (((i = t), typeof t == "function")) mr(t) && (v = 1);
    else if (typeof t == "string")
      v = Mg(t, a, Z.current)
        ? 26
        : t === "html" || t === "head" || t === "body"
        ? 27
        : 5;
    else
      e: switch (t) {
        case Ce:
          return (t = ct(31, a, n, s)), (t.elementType = Ce), (t.lanes = o), t;
        case k:
          return Hn(a.children, s, o, n);
        case q:
          (v = 8), (s |= 24);
          break;
        case B:
          return (
            (t = ct(12, a, n, s | 2)), (t.elementType = B), (t.lanes = o), t
          );
        case K:
          return (t = ct(13, a, n, s)), (t.elementType = K), (t.lanes = o), t;
        case ee:
          return (t = ct(19, a, n, s)), (t.elementType = ee), (t.lanes = o), t;
        default:
          if (typeof t == "object" && t !== null)
            switch (t.$$typeof) {
              case ae:
              case L:
                v = 10;
                break e;
              case Q:
                v = 9;
                break e;
              case I:
                v = 11;
                break e;
              case fe:
                v = 14;
                break e;
              case je:
                (v = 16), (i = null);
                break e;
            }
          (v = 29),
            (a = Error(r(130, t === null ? "null" : typeof t, ""))),
            (i = null);
      }
    return (
      (n = ct(v, a, n, s)), (n.elementType = t), (n.type = i), (n.lanes = o), n
    );
  }
  function Hn(t, n, a, i) {
    return (t = ct(7, t, i, n)), (t.lanes = a), t;
  }
  function _r(t, n, a) {
    return (t = ct(6, t, null, n)), (t.lanes = a), t;
  }
  function pr(t, n, a) {
    return (
      (n = ct(4, t.children !== null ? t.children : [], t.key, n)),
      (n.lanes = a),
      (n.stateNode = {
        containerInfo: t.containerInfo,
        pendingChildren: null,
        implementation: t.implementation,
      }),
      n
    );
  }
  var Sa = [],
    wa = 0,
    Ml = null,
    Nl = 0,
    bt = [],
    St = 0,
    Ln = null,
    Yt = 1,
    Qt = "";
  function Gn(t, n) {
    (Sa[wa++] = Nl), (Sa[wa++] = Ml), (Ml = t), (Nl = n);
  }
  function Dc(t, n, a) {
    (bt[St++] = Yt), (bt[St++] = Qt), (bt[St++] = Ln), (Ln = t);
    var i = Yt;
    t = Qt;
    var s = 32 - ut(i) - 1;
    (i &= ~(1 << s)), (a += 1);
    var o = 32 - ut(n) + s;
    if (30 < o) {
      var v = s - (s % 5);
      (o = (i & ((1 << v) - 1)).toString(32)),
        (i >>= v),
        (s -= v),
        (Yt = (1 << (32 - ut(n) + s)) | (a << s) | i),
        (Qt = o + t);
    } else (Yt = (1 << o) | (a << s) | i), (Qt = t);
  }
  function br(t) {
    t.return !== null && (Gn(t, 1), Dc(t, 1, 0));
  }
  function Sr(t) {
    for (; t === Ml; )
      (Ml = Sa[--wa]), (Sa[wa] = null), (Nl = Sa[--wa]), (Sa[wa] = null);
    for (; t === Ln; )
      (Ln = bt[--St]),
        (bt[St] = null),
        (Qt = bt[--St]),
        (bt[St] = null),
        (Yt = bt[--St]),
        (bt[St] = null);
  }
  var Fe = null,
    Re = null,
    ve = !1,
    $n = null,
    Ct = !1,
    wr = Error(r(519));
  function Yn(t) {
    var n = Error(r(418, ""));
    throw (Si(_t(n, t)), wr);
  }
  function Cc(t) {
    var n = t.stateNode,
      a = t.type,
      i = t.memoizedProps;
    switch (((n[We] = t), (n[et] = i), a)) {
      case "dialog":
        oe("cancel", n), oe("close", n);
        break;
      case "iframe":
      case "object":
      case "embed":
        oe("load", n);
        break;
      case "video":
      case "audio":
        for (a = 0; a < Vi.length; a++) oe(Vi[a], n);
        break;
      case "source":
        oe("error", n);
        break;
      case "img":
      case "image":
      case "link":
        oe("error", n), oe("load", n);
        break;
      case "details":
        oe("toggle", n);
        break;
      case "input":
        oe("invalid", n),
          Ko(
            n,
            i.value,
            i.defaultValue,
            i.checked,
            i.defaultChecked,
            i.type,
            i.name,
            !0
          ),
          bl(n);
        break;
      case "select":
        oe("invalid", n);
        break;
      case "textarea":
        oe("invalid", n), Jo(n, i.value, i.defaultValue, i.children), bl(n);
    }
    (a = i.children),
      (typeof a != "string" && typeof a != "number" && typeof a != "bigint") ||
      n.textContent === "" + a ||
      i.suppressHydrationWarning === !0 ||
      Wh(n.textContent, a)
        ? (i.popover != null && (oe("beforetoggle", n), oe("toggle", n)),
          i.onScroll != null && oe("scroll", n),
          i.onScrollEnd != null && oe("scrollend", n),
          i.onClick != null && (n.onclick = vs),
          (n = !0))
        : (n = !1),
      n || Yn(t);
  }
  function Mc(t) {
    for (Fe = t.return; Fe; )
      switch (Fe.tag) {
        case 5:
        case 13:
          Ct = !1;
          return;
        case 27:
        case 3:
          Ct = !0;
          return;
        default:
          Fe = Fe.return;
      }
  }
  function pi(t) {
    if (t !== Fe) return !1;
    if (!ve) return Mc(t), (ve = !0), !1;
    var n = t.tag,
      a;
    if (
      ((a = n !== 3 && n !== 27) &&
        ((a = n === 5) &&
          ((a = t.type),
          (a =
            !(a !== "form" && a !== "button") || Bu(t.type, t.memoizedProps))),
        (a = !a)),
      a && Re && Yn(t),
      Mc(t),
      n === 13)
    ) {
      if (((t = t.memoizedState), (t = t !== null ? t.dehydrated : null), !t))
        throw Error(r(317));
      e: {
        for (t = t.nextSibling, n = 0; t; ) {
          if (t.nodeType === 8)
            if (((a = t.data), a === "/$")) {
              if (n === 0) {
                Re = Rt(t.nextSibling);
                break e;
              }
              n--;
            } else (a !== "$" && a !== "$!" && a !== "$?") || n++;
          t = t.nextSibling;
        }
        Re = null;
      }
    } else
      n === 27
        ? ((n = Re), wn(t.type) ? ((t = $u), ($u = null), (Re = t)) : (Re = n))
        : (Re = Fe ? Rt(t.stateNode.nextSibling) : null);
    return !0;
  }
  function bi() {
    (Re = Fe = null), (ve = !1);
  }
  function Nc() {
    var t = $n;
    return (
      t !== null &&
        (it === null ? (it = t) : it.push.apply(it, t), ($n = null)),
      t
    );
  }
  function Si(t) {
    $n === null ? ($n = [t]) : $n.push(t);
  }
  var Er = N(null),
    Qn = null,
    Vt = null;
  function rn(t, n, a) {
    G(Er, n._currentValue), (n._currentValue = a);
  }
  function Xt(t) {
    (t._currentValue = Er.current), Y(Er);
  }
  function Tr(t, n, a) {
    for (; t !== null; ) {
      var i = t.alternate;
      if (
        ((t.childLanes & n) !== n
          ? ((t.childLanes |= n), i !== null && (i.childLanes |= n))
          : i !== null && (i.childLanes & n) !== n && (i.childLanes |= n),
        t === a)
      )
        break;
      t = t.return;
    }
  }
  function Ar(t, n, a, i) {
    var s = t.child;
    for (s !== null && (s.return = t); s !== null; ) {
      var o = s.dependencies;
      if (o !== null) {
        var v = s.child;
        o = o.firstContext;
        e: for (; o !== null; ) {
          var y = o;
          o = s;
          for (var b = 0; b < n.length; b++)
            if (y.context === n[b]) {
              (o.lanes |= a),
                (y = o.alternate),
                y !== null && (y.lanes |= a),
                Tr(o.return, a, t),
                i || (v = null);
              break e;
            }
          o = y.next;
        }
      } else if (s.tag === 18) {
        if (((v = s.return), v === null)) throw Error(r(341));
        (v.lanes |= a),
          (o = v.alternate),
          o !== null && (o.lanes |= a),
          Tr(v, a, t),
          (v = null);
      } else v = s.child;
      if (v !== null) v.return = s;
      else
        for (v = s; v !== null; ) {
          if (v === t) {
            v = null;
            break;
          }
          if (((s = v.sibling), s !== null)) {
            (s.return = v.return), (v = s);
            break;
          }
          v = v.return;
        }
      s = v;
    }
  }
  function wi(t, n, a, i) {
    t = null;
    for (var s = n, o = !1; s !== null; ) {
      if (!o) {
        if ((s.flags & 524288) !== 0) o = !0;
        else if ((s.flags & 262144) !== 0) break;
      }
      if (s.tag === 10) {
        var v = s.alternate;
        if (v === null) throw Error(r(387));
        if (((v = v.memoizedProps), v !== null)) {
          var y = s.type;
          ot(s.pendingProps.value, v.value) ||
            (t !== null ? t.push(y) : (t = [y]));
        }
      } else if (s === st.current) {
        if (((v = s.alternate), v === null)) throw Error(r(387));
        v.memoizedState.memoizedState !== s.memoizedState.memoizedState &&
          (t !== null ? t.push(Pi) : (t = [Pi]));
      }
      s = s.return;
    }
    t !== null && Ar(n, t, a, i), (n.flags |= 262144);
  }
  function zl(t) {
    for (t = t.firstContext; t !== null; ) {
      if (!ot(t.context._currentValue, t.memoizedValue)) return !0;
      t = t.next;
    }
    return !1;
  }
  function Vn(t) {
    (Qn = t),
      (Vt = null),
      (t = t.dependencies),
      t !== null && (t.firstContext = null);
  }
  function Pe(t) {
    return zc(Qn, t);
  }
  function kl(t, n) {
    return Qn === null && Vn(t), zc(t, n);
  }
  function zc(t, n) {
    var a = n._currentValue;
    if (((n = { context: n, memoizedValue: a, next: null }), Vt === null)) {
      if (t === null) throw Error(r(308));
      (Vt = n),
        (t.dependencies = { lanes: 0, firstContext: n }),
        (t.flags |= 524288);
    } else Vt = Vt.next = n;
    return a;
  }
  var C0 =
      typeof AbortController < "u"
        ? AbortController
        : function () {
            var t = [],
              n = (this.signal = {
                aborted: !1,
                addEventListener: function (a, i) {
                  t.push(i);
                },
              });
            this.abort = function () {
              (n.aborted = !0),
                t.forEach(function (a) {
                  return a();
                });
            };
          },
    M0 = f.unstable_scheduleCallback,
    N0 = f.unstable_NormalPriority,
    ke = {
      $$typeof: L,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function Or() {
    return { controller: new C0(), data: new Map(), refCount: 0 };
  }
  function Ei(t) {
    t.refCount--,
      t.refCount === 0 &&
        M0(N0, function () {
          t.controller.abort();
        });
  }
  var Ti = null,
    jr = 0,
    Ea = 0,
    Ta = null;
  function z0(t, n) {
    if (Ti === null) {
      var a = (Ti = []);
      (jr = 0),
        (Ea = xu()),
        (Ta = {
          status: "pending",
          value: void 0,
          then: function (i) {
            a.push(i);
          },
        });
    }
    return jr++, n.then(kc, kc), n;
  }
  function kc() {
    if (--jr === 0 && Ti !== null) {
      Ta !== null && (Ta.status = "fulfilled");
      var t = Ti;
      (Ti = null), (Ea = 0), (Ta = null);
      for (var n = 0; n < t.length; n++) (0, t[n])();
    }
  }
  function k0(t, n) {
    var a = [],
      i = {
        status: "pending",
        value: null,
        reason: null,
        then: function (s) {
          a.push(s);
        },
      };
    return (
      t.then(
        function () {
          (i.status = "fulfilled"), (i.value = n);
          for (var s = 0; s < a.length; s++) (0, a[s])(n);
        },
        function (s) {
          for (i.status = "rejected", i.reason = s, s = 0; s < a.length; s++)
            (0, a[s])(void 0);
        }
      ),
      i
    );
  }
  var qc = D.S;
  D.S = function (t, n) {
    typeof n == "object" &&
      n !== null &&
      typeof n.then == "function" &&
      z0(t, n),
      qc !== null && qc(t, n);
  };
  var Xn = N(null);
  function Rr() {
    var t = Xn.current;
    return t !== null ? t : we.pooledCache;
  }
  function ql(t, n) {
    n === null ? G(Xn, Xn.current) : G(Xn, n.pool);
  }
  function Bc() {
    var t = Rr();
    return t === null ? null : { parent: ke._currentValue, pool: t };
  }
  var Ai = Error(r(460)),
    Hc = Error(r(474)),
    Bl = Error(r(542)),
    xr = { then: function () {} };
  function Lc(t) {
    return (t = t.status), t === "fulfilled" || t === "rejected";
  }
  function Hl() {}
  function Gc(t, n, a) {
    switch (
      ((a = t[a]),
      a === void 0 ? t.push(n) : a !== n && (n.then(Hl, Hl), (n = a)),
      n.status)
    ) {
      case "fulfilled":
        return n.value;
      case "rejected":
        throw ((t = n.reason), Yc(t), t);
      default:
        if (typeof n.status == "string") n.then(Hl, Hl);
        else {
          if (((t = we), t !== null && 100 < t.shellSuspendCounter))
            throw Error(r(482));
          (t = n),
            (t.status = "pending"),
            t.then(
              function (i) {
                if (n.status === "pending") {
                  var s = n;
                  (s.status = "fulfilled"), (s.value = i);
                }
              },
              function (i) {
                if (n.status === "pending") {
                  var s = n;
                  (s.status = "rejected"), (s.reason = i);
                }
              }
            );
        }
        switch (n.status) {
          case "fulfilled":
            return n.value;
          case "rejected":
            throw ((t = n.reason), Yc(t), t);
        }
        throw ((Oi = n), Ai);
    }
  }
  var Oi = null;
  function $c() {
    if (Oi === null) throw Error(r(459));
    var t = Oi;
    return (Oi = null), t;
  }
  function Yc(t) {
    if (t === Ai || t === Bl) throw Error(r(483));
  }
  var un = !1;
  function Ur(t) {
    t.updateQueue = {
      baseState: t.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function Dr(t, n) {
    (t = t.updateQueue),
      n.updateQueue === t &&
        (n.updateQueue = {
          baseState: t.baseState,
          firstBaseUpdate: t.firstBaseUpdate,
          lastBaseUpdate: t.lastBaseUpdate,
          shared: t.shared,
          callbacks: null,
        });
  }
  function on(t) {
    return { lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function cn(t, n, a) {
    var i = t.updateQueue;
    if (i === null) return null;
    if (((i = i.shared), (ge & 2) !== 0)) {
      var s = i.pending;
      return (
        s === null ? (n.next = n) : ((n.next = s.next), (s.next = n)),
        (i.pending = n),
        (n = Dl(t)),
        xc(t, null, a),
        n
      );
    }
    return Ul(t, i, n, a), Dl(t);
  }
  function ji(t, n, a) {
    if (
      ((n = n.updateQueue), n !== null && ((n = n.shared), (a & 4194048) !== 0))
    ) {
      var i = n.lanes;
      (i &= t.pendingLanes), (a |= i), (n.lanes = a), ko(t, a);
    }
  }
  function Cr(t, n) {
    var a = t.updateQueue,
      i = t.alternate;
    if (i !== null && ((i = i.updateQueue), a === i)) {
      var s = null,
        o = null;
      if (((a = a.firstBaseUpdate), a !== null)) {
        do {
          var v = {
            lane: a.lane,
            tag: a.tag,
            payload: a.payload,
            callback: null,
            next: null,
          };
          o === null ? (s = o = v) : (o = o.next = v), (a = a.next);
        } while (a !== null);
        o === null ? (s = o = n) : (o = o.next = n);
      } else s = o = n;
      (a = {
        baseState: i.baseState,
        firstBaseUpdate: s,
        lastBaseUpdate: o,
        shared: i.shared,
        callbacks: i.callbacks,
      }),
        (t.updateQueue = a);
      return;
    }
    (t = a.lastBaseUpdate),
      t === null ? (a.firstBaseUpdate = n) : (t.next = n),
      (a.lastBaseUpdate = n);
  }
  var Mr = !1;
  function Ri() {
    if (Mr) {
      var t = Ta;
      if (t !== null) throw t;
    }
  }
  function xi(t, n, a, i) {
    Mr = !1;
    var s = t.updateQueue;
    un = !1;
    var o = s.firstBaseUpdate,
      v = s.lastBaseUpdate,
      y = s.shared.pending;
    if (y !== null) {
      s.shared.pending = null;
      var b = y,
        j = b.next;
      (b.next = null), v === null ? (o = j) : (v.next = j), (v = b);
      var U = t.alternate;
      U !== null &&
        ((U = U.updateQueue),
        (y = U.lastBaseUpdate),
        y !== v &&
          (y === null ? (U.firstBaseUpdate = j) : (y.next = j),
          (U.lastBaseUpdate = b)));
    }
    if (o !== null) {
      var M = s.baseState;
      (v = 0), (U = j = b = null), (y = o);
      do {
        var R = y.lane & -536870913,
          x = R !== y.lane;
        if (x ? (ce & R) === R : (i & R) === R) {
          R !== 0 && R === Ea && (Mr = !0),
            U !== null &&
              (U = U.next =
                {
                  lane: 0,
                  tag: y.tag,
                  payload: y.payload,
                  callback: null,
                  next: null,
                });
          e: {
            var F = t,
              J = y;
            R = n;
            var pe = a;
            switch (J.tag) {
              case 1:
                if (((F = J.payload), typeof F == "function")) {
                  M = F.call(pe, M, R);
                  break e;
                }
                M = F;
                break e;
              case 3:
                F.flags = (F.flags & -65537) | 128;
              case 0:
                if (
                  ((F = J.payload),
                  (R = typeof F == "function" ? F.call(pe, M, R) : F),
                  R == null)
                )
                  break e;
                M = p({}, M, R);
                break e;
              case 2:
                un = !0;
            }
          }
          (R = y.callback),
            R !== null &&
              ((t.flags |= 64),
              x && (t.flags |= 8192),
              (x = s.callbacks),
              x === null ? (s.callbacks = [R]) : x.push(R));
        } else
          (x = {
            lane: R,
            tag: y.tag,
            payload: y.payload,
            callback: y.callback,
            next: null,
          }),
            U === null ? ((j = U = x), (b = M)) : (U = U.next = x),
            (v |= R);
        if (((y = y.next), y === null)) {
          if (((y = s.shared.pending), y === null)) break;
          (x = y),
            (y = x.next),
            (x.next = null),
            (s.lastBaseUpdate = x),
            (s.shared.pending = null);
        }
      } while (!0);
      U === null && (b = M),
        (s.baseState = b),
        (s.firstBaseUpdate = j),
        (s.lastBaseUpdate = U),
        o === null && (s.shared.lanes = 0),
        (_n |= v),
        (t.lanes = v),
        (t.memoizedState = M);
    }
  }
  function Qc(t, n) {
    if (typeof t != "function") throw Error(r(191, t));
    t.call(n);
  }
  function Vc(t, n) {
    var a = t.callbacks;
    if (a !== null)
      for (t.callbacks = null, t = 0; t < a.length; t++) Qc(a[t], n);
  }
  var Aa = N(null),
    Ll = N(0);
  function Xc(t, n) {
    (t = Ft), G(Ll, t), G(Aa, n), (Ft = t | n.baseLanes);
  }
  function Nr() {
    G(Ll, Ft), G(Aa, Aa.current);
  }
  function zr() {
    (Ft = Ll.current), Y(Aa), Y(Ll);
  }
  var fn = 0,
    le = null,
    me = null,
    Me = null,
    Gl = !1,
    Oa = !1,
    Kn = !1,
    $l = 0,
    Ui = 0,
    ja = null,
    q0 = 0;
  function Ue() {
    throw Error(r(321));
  }
  function kr(t, n) {
    if (n === null) return !1;
    for (var a = 0; a < n.length && a < t.length; a++)
      if (!ot(t[a], n[a])) return !1;
    return !0;
  }
  function qr(t, n, a, i, s, o) {
    return (
      (fn = o),
      (le = n),
      (n.memoizedState = null),
      (n.updateQueue = null),
      (n.lanes = 0),
      (D.H = t === null || t.memoizedState === null ? Uf : Df),
      (Kn = !1),
      (o = a(i, s)),
      (Kn = !1),
      Oa && (o = Zc(n, a, i, s)),
      Kc(t),
      o
    );
  }
  function Kc(t) {
    D.H = Zl;
    var n = me !== null && me.next !== null;
    if (((fn = 0), (Me = me = le = null), (Gl = !1), (Ui = 0), (ja = null), n))
      throw Error(r(300));
    t === null ||
      Ge ||
      ((t = t.dependencies), t !== null && zl(t) && (Ge = !0));
  }
  function Zc(t, n, a, i) {
    le = t;
    var s = 0;
    do {
      if ((Oa && (ja = null), (Ui = 0), (Oa = !1), 25 <= s))
        throw Error(r(301));
      if (((s += 1), (Me = me = null), t.updateQueue != null)) {
        var o = t.updateQueue;
        (o.lastEffect = null),
          (o.events = null),
          (o.stores = null),
          o.memoCache != null && (o.memoCache.index = 0);
      }
      (D.H = Q0), (o = n(a, i));
    } while (Oa);
    return o;
  }
  function B0() {
    var t = D.H,
      n = t.useState()[0];
    return (
      (n = typeof n.then == "function" ? Di(n) : n),
      (t = t.useState()[0]),
      (me !== null ? me.memoizedState : null) !== t && (le.flags |= 1024),
      n
    );
  }
  function Br() {
    var t = $l !== 0;
    return ($l = 0), t;
  }
  function Hr(t, n, a) {
    (n.updateQueue = t.updateQueue), (n.flags &= -2053), (t.lanes &= ~a);
  }
  function Lr(t) {
    if (Gl) {
      for (t = t.memoizedState; t !== null; ) {
        var n = t.queue;
        n !== null && (n.pending = null), (t = t.next);
      }
      Gl = !1;
    }
    (fn = 0), (Me = me = le = null), (Oa = !1), (Ui = $l = 0), (ja = null);
  }
  function nt() {
    var t = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return Me === null ? (le.memoizedState = Me = t) : (Me = Me.next = t), Me;
  }
  function Ne() {
    if (me === null) {
      var t = le.alternate;
      t = t !== null ? t.memoizedState : null;
    } else t = me.next;
    var n = Me === null ? le.memoizedState : Me.next;
    if (n !== null) (Me = n), (me = t);
    else {
      if (t === null)
        throw le.alternate === null ? Error(r(467)) : Error(r(310));
      (me = t),
        (t = {
          memoizedState: me.memoizedState,
          baseState: me.baseState,
          baseQueue: me.baseQueue,
          queue: me.queue,
          next: null,
        }),
        Me === null ? (le.memoizedState = Me = t) : (Me = Me.next = t);
    }
    return Me;
  }
  function Gr() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Di(t) {
    var n = Ui;
    return (
      (Ui += 1),
      ja === null && (ja = []),
      (t = Gc(ja, t, n)),
      (n = le),
      (Me === null ? n.memoizedState : Me.next) === null &&
        ((n = n.alternate),
        (D.H = n === null || n.memoizedState === null ? Uf : Df)),
      t
    );
  }
  function Yl(t) {
    if (t !== null && typeof t == "object") {
      if (typeof t.then == "function") return Di(t);
      if (t.$$typeof === L) return Pe(t);
    }
    throw Error(r(438, String(t)));
  }
  function $r(t) {
    var n = null,
      a = le.updateQueue;
    if ((a !== null && (n = a.memoCache), n == null)) {
      var i = le.alternate;
      i !== null &&
        ((i = i.updateQueue),
        i !== null &&
          ((i = i.memoCache),
          i != null &&
            (n = {
              data: i.data.map(function (s) {
                return s.slice();
              }),
              index: 0,
            })));
    }
    if (
      (n == null && (n = { data: [], index: 0 }),
      a === null && ((a = Gr()), (le.updateQueue = a)),
      (a.memoCache = n),
      (a = n.data[n.index]),
      a === void 0)
    )
      for (a = n.data[n.index] = Array(t), i = 0; i < t; i++) a[i] = ia;
    return n.index++, a;
  }
  function Kt(t, n) {
    return typeof n == "function" ? n(t) : n;
  }
  function Ql(t) {
    var n = Ne();
    return Yr(n, me, t);
  }
  function Yr(t, n, a) {
    var i = t.queue;
    if (i === null) throw Error(r(311));
    i.lastRenderedReducer = a;
    var s = t.baseQueue,
      o = i.pending;
    if (o !== null) {
      if (s !== null) {
        var v = s.next;
        (s.next = o.next), (o.next = v);
      }
      (n.baseQueue = s = o), (i.pending = null);
    }
    if (((o = t.baseState), s === null)) t.memoizedState = o;
    else {
      n = s.next;
      var y = (v = null),
        b = null,
        j = n,
        U = !1;
      do {
        var M = j.lane & -536870913;
        if (M !== j.lane ? (ce & M) === M : (fn & M) === M) {
          var R = j.revertLane;
          if (R === 0)
            b !== null &&
              (b = b.next =
                {
                  lane: 0,
                  revertLane: 0,
                  action: j.action,
                  hasEagerState: j.hasEagerState,
                  eagerState: j.eagerState,
                  next: null,
                }),
              M === Ea && (U = !0);
          else if ((fn & R) === R) {
            (j = j.next), R === Ea && (U = !0);
            continue;
          } else
            (M = {
              lane: 0,
              revertLane: j.revertLane,
              action: j.action,
              hasEagerState: j.hasEagerState,
              eagerState: j.eagerState,
              next: null,
            }),
              b === null ? ((y = b = M), (v = o)) : (b = b.next = M),
              (le.lanes |= R),
              (_n |= R);
          (M = j.action),
            Kn && a(o, M),
            (o = j.hasEagerState ? j.eagerState : a(o, M));
        } else
          (R = {
            lane: M,
            revertLane: j.revertLane,
            action: j.action,
            hasEagerState: j.hasEagerState,
            eagerState: j.eagerState,
            next: null,
          }),
            b === null ? ((y = b = R), (v = o)) : (b = b.next = R),
            (le.lanes |= M),
            (_n |= M);
        j = j.next;
      } while (j !== null && j !== n);
      if (
        (b === null ? (v = o) : (b.next = y),
        !ot(o, t.memoizedState) && ((Ge = !0), U && ((a = Ta), a !== null)))
      )
        throw a;
      (t.memoizedState = o),
        (t.baseState = v),
        (t.baseQueue = b),
        (i.lastRenderedState = o);
    }
    return s === null && (i.lanes = 0), [t.memoizedState, i.dispatch];
  }
  function Qr(t) {
    var n = Ne(),
      a = n.queue;
    if (a === null) throw Error(r(311));
    a.lastRenderedReducer = t;
    var i = a.dispatch,
      s = a.pending,
      o = n.memoizedState;
    if (s !== null) {
      a.pending = null;
      var v = (s = s.next);
      do (o = t(o, v.action)), (v = v.next);
      while (v !== s);
      ot(o, n.memoizedState) || (Ge = !0),
        (n.memoizedState = o),
        n.baseQueue === null && (n.baseState = o),
        (a.lastRenderedState = o);
    }
    return [o, i];
  }
  function Jc(t, n, a) {
    var i = le,
      s = Ne(),
      o = ve;
    if (o) {
      if (a === void 0) throw Error(r(407));
      a = a();
    } else a = n();
    var v = !ot((me || s).memoizedState, a);
    v && ((s.memoizedState = a), (Ge = !0)), (s = s.queue);
    var y = Ic.bind(null, i, s, t);
    if (
      (Ci(2048, 8, y, [t]),
      s.getSnapshot !== n || v || (Me !== null && Me.memoizedState.tag & 1))
    ) {
      if (
        ((i.flags |= 2048),
        Ra(9, Vl(), Pc.bind(null, i, s, a, n), null),
        we === null)
      )
        throw Error(r(349));
      o || (fn & 124) !== 0 || Wc(i, n, a);
    }
    return a;
  }
  function Wc(t, n, a) {
    (t.flags |= 16384),
      (t = { getSnapshot: n, value: a }),
      (n = le.updateQueue),
      n === null
        ? ((n = Gr()), (le.updateQueue = n), (n.stores = [t]))
        : ((a = n.stores), a === null ? (n.stores = [t]) : a.push(t));
  }
  function Pc(t, n, a, i) {
    (n.value = a), (n.getSnapshot = i), Fc(n) && ef(t);
  }
  function Ic(t, n, a) {
    return a(function () {
      Fc(n) && ef(t);
    });
  }
  function Fc(t) {
    var n = t.getSnapshot;
    t = t.value;
    try {
      var a = n();
      return !ot(t, a);
    } catch {
      return !0;
    }
  }
  function ef(t) {
    var n = pa(t, 2);
    n !== null && gt(n, t, 2);
  }
  function Vr(t) {
    var n = nt();
    if (typeof t == "function") {
      var a = t;
      if (((t = a()), Kn)) {
        an(!0);
        try {
          a();
        } finally {
          an(!1);
        }
      }
    }
    return (
      (n.memoizedState = n.baseState = t),
      (n.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Kt,
        lastRenderedState: t,
      }),
      n
    );
  }
  function tf(t, n, a, i) {
    return (t.baseState = a), Yr(t, me, typeof i == "function" ? i : Kt);
  }
  function H0(t, n, a, i, s) {
    if (Kl(t)) throw Error(r(485));
    if (((t = n.action), t !== null)) {
      var o = {
        payload: s,
        action: t,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function (v) {
          o.listeners.push(v);
        },
      };
      D.T !== null ? a(!0) : (o.isTransition = !1),
        i(o),
        (a = n.pending),
        a === null
          ? ((o.next = n.pending = o), nf(n, o))
          : ((o.next = a.next), (n.pending = a.next = o));
    }
  }
  function nf(t, n) {
    var a = n.action,
      i = n.payload,
      s = t.state;
    if (n.isTransition) {
      var o = D.T,
        v = {};
      D.T = v;
      try {
        var y = a(s, i),
          b = D.S;
        b !== null && b(v, y), af(t, n, y);
      } catch (j) {
        Xr(t, n, j);
      } finally {
        D.T = o;
      }
    } else
      try {
        (o = a(s, i)), af(t, n, o);
      } catch (j) {
        Xr(t, n, j);
      }
  }
  function af(t, n, a) {
    a !== null && typeof a == "object" && typeof a.then == "function"
      ? a.then(
          function (i) {
            lf(t, n, i);
          },
          function (i) {
            return Xr(t, n, i);
          }
        )
      : lf(t, n, a);
  }
  function lf(t, n, a) {
    (n.status = "fulfilled"),
      (n.value = a),
      sf(n),
      (t.state = a),
      (n = t.pending),
      n !== null &&
        ((a = n.next),
        a === n ? (t.pending = null) : ((a = a.next), (n.next = a), nf(t, a)));
  }
  function Xr(t, n, a) {
    var i = t.pending;
    if (((t.pending = null), i !== null)) {
      i = i.next;
      do (n.status = "rejected"), (n.reason = a), sf(n), (n = n.next);
      while (n !== i);
    }
    t.action = null;
  }
  function sf(t) {
    t = t.listeners;
    for (var n = 0; n < t.length; n++) (0, t[n])();
  }
  function rf(t, n) {
    return n;
  }
  function uf(t, n) {
    if (ve) {
      var a = we.formState;
      if (a !== null) {
        e: {
          var i = le;
          if (ve) {
            if (Re) {
              t: {
                for (var s = Re, o = Ct; s.nodeType !== 8; ) {
                  if (!o) {
                    s = null;
                    break t;
                  }
                  if (((s = Rt(s.nextSibling)), s === null)) {
                    s = null;
                    break t;
                  }
                }
                (o = s.data), (s = o === "F!" || o === "F" ? s : null);
              }
              if (s) {
                (Re = Rt(s.nextSibling)), (i = s.data === "F!");
                break e;
              }
            }
            Yn(i);
          }
          i = !1;
        }
        i && (n = a[0]);
      }
    }
    return (
      (a = nt()),
      (a.memoizedState = a.baseState = n),
      (i = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: rf,
        lastRenderedState: n,
      }),
      (a.queue = i),
      (a = jf.bind(null, le, i)),
      (i.dispatch = a),
      (i = Vr(!1)),
      (o = Pr.bind(null, le, !1, i.queue)),
      (i = nt()),
      (s = { state: n, dispatch: null, action: t, pending: null }),
      (i.queue = s),
      (a = H0.bind(null, le, s, o, a)),
      (s.dispatch = a),
      (i.memoizedState = t),
      [n, a, !1]
    );
  }
  function of(t) {
    var n = Ne();
    return cf(n, me, t);
  }
  function cf(t, n, a) {
    if (
      ((n = Yr(t, n, rf)[0]),
      (t = Ql(Kt)[0]),
      typeof n == "object" && n !== null && typeof n.then == "function")
    )
      try {
        var i = Di(n);
      } catch (v) {
        throw v === Ai ? Bl : v;
      }
    else i = n;
    n = Ne();
    var s = n.queue,
      o = s.dispatch;
    return (
      a !== n.memoizedState &&
        ((le.flags |= 2048), Ra(9, Vl(), L0.bind(null, s, a), null)),
      [i, o, t]
    );
  }
  function L0(t, n) {
    t.action = n;
  }
  function ff(t) {
    var n = Ne(),
      a = me;
    if (a !== null) return cf(n, a, t);
    Ne(), (n = n.memoizedState), (a = Ne());
    var i = a.queue.dispatch;
    return (a.memoizedState = t), [n, i, !1];
  }
  function Ra(t, n, a, i) {
    return (
      (t = { tag: t, create: a, deps: i, inst: n, next: null }),
      (n = le.updateQueue),
      n === null && ((n = Gr()), (le.updateQueue = n)),
      (a = n.lastEffect),
      a === null
        ? (n.lastEffect = t.next = t)
        : ((i = a.next), (a.next = t), (t.next = i), (n.lastEffect = t)),
      t
    );
  }
  function Vl() {
    return { destroy: void 0, resource: void 0 };
  }
  function hf() {
    return Ne().memoizedState;
  }
  function Xl(t, n, a, i) {
    var s = nt();
    (i = i === void 0 ? null : i),
      (le.flags |= t),
      (s.memoizedState = Ra(1 | n, Vl(), a, i));
  }
  function Ci(t, n, a, i) {
    var s = Ne();
    i = i === void 0 ? null : i;
    var o = s.memoizedState.inst;
    me !== null && i !== null && kr(i, me.memoizedState.deps)
      ? (s.memoizedState = Ra(n, o, a, i))
      : ((le.flags |= t), (s.memoizedState = Ra(1 | n, o, a, i)));
  }
  function df(t, n) {
    Xl(8390656, 8, t, n);
  }
  function vf(t, n) {
    Ci(2048, 8, t, n);
  }
  function gf(t, n) {
    return Ci(4, 2, t, n);
  }
  function yf(t, n) {
    return Ci(4, 4, t, n);
  }
  function mf(t, n) {
    if (typeof n == "function") {
      t = t();
      var a = n(t);
      return function () {
        typeof a == "function" ? a() : n(null);
      };
    }
    if (n != null)
      return (
        (t = t()),
        (n.current = t),
        function () {
          n.current = null;
        }
      );
  }
  function _f(t, n, a) {
    (a = a != null ? a.concat([t]) : null), Ci(4, 4, mf.bind(null, n, t), a);
  }
  function Kr() {}
  function pf(t, n) {
    var a = Ne();
    n = n === void 0 ? null : n;
    var i = a.memoizedState;
    return n !== null && kr(n, i[1]) ? i[0] : ((a.memoizedState = [t, n]), t);
  }
  function bf(t, n) {
    var a = Ne();
    n = n === void 0 ? null : n;
    var i = a.memoizedState;
    if (n !== null && kr(n, i[1])) return i[0];
    if (((i = t()), Kn)) {
      an(!0);
      try {
        t();
      } finally {
        an(!1);
      }
    }
    return (a.memoizedState = [i, n]), i;
  }
  function Zr(t, n, a) {
    return a === void 0 || (fn & 1073741824) !== 0
      ? (t.memoizedState = n)
      : ((t.memoizedState = a), (t = Eh()), (le.lanes |= t), (_n |= t), a);
  }
  function Sf(t, n, a, i) {
    return ot(a, n)
      ? a
      : Aa.current !== null
      ? ((t = Zr(t, a, i)), ot(t, n) || (Ge = !0), t)
      : (fn & 42) === 0
      ? ((Ge = !0), (t.memoizedState = a))
      : ((t = Eh()), (le.lanes |= t), (_n |= t), n);
  }
  function wf(t, n, a, i, s) {
    var o = $.p;
    $.p = o !== 0 && 8 > o ? o : 8;
    var v = D.T,
      y = {};
    (D.T = y), Pr(t, !1, n, a);
    try {
      var b = s(),
        j = D.S;
      if (
        (j !== null && j(y, b),
        b !== null && typeof b == "object" && typeof b.then == "function")
      ) {
        var U = k0(b, i);
        Mi(t, n, U, vt(t));
      } else Mi(t, n, i, vt(t));
    } catch (M) {
      Mi(t, n, { then: function () {}, status: "rejected", reason: M }, vt());
    } finally {
      ($.p = o), (D.T = v);
    }
  }
  function G0() {}
  function Jr(t, n, a, i) {
    if (t.tag !== 5) throw Error(r(476));
    var s = Ef(t).queue;
    wf(
      t,
      s,
      n,
      P,
      a === null
        ? G0
        : function () {
            return Tf(t), a(i);
          }
    );
  }
  function Ef(t) {
    var n = t.memoizedState;
    if (n !== null) return n;
    n = {
      memoizedState: P,
      baseState: P,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Kt,
        lastRenderedState: P,
      },
      next: null,
    };
    var a = {};
    return (
      (n.next = {
        memoizedState: a,
        baseState: a,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: Kt,
          lastRenderedState: a,
        },
        next: null,
      }),
      (t.memoizedState = n),
      (t = t.alternate),
      t !== null && (t.memoizedState = n),
      n
    );
  }
  function Tf(t) {
    var n = Ef(t).next.queue;
    Mi(t, n, {}, vt());
  }
  function Wr() {
    return Pe(Pi);
  }
  function Af() {
    return Ne().memoizedState;
  }
  function Of() {
    return Ne().memoizedState;
  }
  function $0(t) {
    for (var n = t.return; n !== null; ) {
      switch (n.tag) {
        case 24:
        case 3:
          var a = vt();
          t = on(a);
          var i = cn(n, t, a);
          i !== null && (gt(i, n, a), ji(i, n, a)),
            (n = { cache: Or() }),
            (t.payload = n);
          return;
      }
      n = n.return;
    }
  }
  function Y0(t, n, a) {
    var i = vt();
    (a = {
      lane: i,
      revertLane: 0,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
      Kl(t)
        ? Rf(n, a)
        : ((a = yr(t, n, a, i)), a !== null && (gt(a, t, i), xf(a, n, i)));
  }
  function jf(t, n, a) {
    var i = vt();
    Mi(t, n, a, i);
  }
  function Mi(t, n, a, i) {
    var s = {
      lane: i,
      revertLane: 0,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
    if (Kl(t)) Rf(n, s);
    else {
      var o = t.alternate;
      if (
        t.lanes === 0 &&
        (o === null || o.lanes === 0) &&
        ((o = n.lastRenderedReducer), o !== null)
      )
        try {
          var v = n.lastRenderedState,
            y = o(v, a);
          if (((s.hasEagerState = !0), (s.eagerState = y), ot(y, v)))
            return Ul(t, n, s, 0), we === null && xl(), !1;
        } catch {
        } finally {
        }
      if (((a = yr(t, n, s, i)), a !== null))
        return gt(a, t, i), xf(a, n, i), !0;
    }
    return !1;
  }
  function Pr(t, n, a, i) {
    if (
      ((i = {
        lane: 2,
        revertLane: xu(),
        action: i,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      Kl(t))
    ) {
      if (n) throw Error(r(479));
    } else (n = yr(t, a, i, 2)), n !== null && gt(n, t, 2);
  }
  function Kl(t) {
    var n = t.alternate;
    return t === le || (n !== null && n === le);
  }
  function Rf(t, n) {
    Oa = Gl = !0;
    var a = t.pending;
    a === null ? (n.next = n) : ((n.next = a.next), (a.next = n)),
      (t.pending = n);
  }
  function xf(t, n, a) {
    if ((a & 4194048) !== 0) {
      var i = n.lanes;
      (i &= t.pendingLanes), (a |= i), (n.lanes = a), ko(t, a);
    }
  }
  var Zl = {
      readContext: Pe,
      use: Yl,
      useCallback: Ue,
      useContext: Ue,
      useEffect: Ue,
      useImperativeHandle: Ue,
      useLayoutEffect: Ue,
      useInsertionEffect: Ue,
      useMemo: Ue,
      useReducer: Ue,
      useRef: Ue,
      useState: Ue,
      useDebugValue: Ue,
      useDeferredValue: Ue,
      useTransition: Ue,
      useSyncExternalStore: Ue,
      useId: Ue,
      useHostTransitionStatus: Ue,
      useFormState: Ue,
      useActionState: Ue,
      useOptimistic: Ue,
      useMemoCache: Ue,
      useCacheRefresh: Ue,
    },
    Uf = {
      readContext: Pe,
      use: Yl,
      useCallback: function (t, n) {
        return (nt().memoizedState = [t, n === void 0 ? null : n]), t;
      },
      useContext: Pe,
      useEffect: df,
      useImperativeHandle: function (t, n, a) {
        (a = a != null ? a.concat([t]) : null),
          Xl(4194308, 4, mf.bind(null, n, t), a);
      },
      useLayoutEffect: function (t, n) {
        return Xl(4194308, 4, t, n);
      },
      useInsertionEffect: function (t, n) {
        Xl(4, 2, t, n);
      },
      useMemo: function (t, n) {
        var a = nt();
        n = n === void 0 ? null : n;
        var i = t();
        if (Kn) {
          an(!0);
          try {
            t();
          } finally {
            an(!1);
          }
        }
        return (a.memoizedState = [i, n]), i;
      },
      useReducer: function (t, n, a) {
        var i = nt();
        if (a !== void 0) {
          var s = a(n);
          if (Kn) {
            an(!0);
            try {
              a(n);
            } finally {
              an(!1);
            }
          }
        } else s = n;
        return (
          (i.memoizedState = i.baseState = s),
          (t = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: t,
            lastRenderedState: s,
          }),
          (i.queue = t),
          (t = t.dispatch = Y0.bind(null, le, t)),
          [i.memoizedState, t]
        );
      },
      useRef: function (t) {
        var n = nt();
        return (t = { current: t }), (n.memoizedState = t);
      },
      useState: function (t) {
        t = Vr(t);
        var n = t.queue,
          a = jf.bind(null, le, n);
        return (n.dispatch = a), [t.memoizedState, a];
      },
      useDebugValue: Kr,
      useDeferredValue: function (t, n) {
        var a = nt();
        return Zr(a, t, n);
      },
      useTransition: function () {
        var t = Vr(!1);
        return (
          (t = wf.bind(null, le, t.queue, !0, !1)),
          (nt().memoizedState = t),
          [!1, t]
        );
      },
      useSyncExternalStore: function (t, n, a) {
        var i = le,
          s = nt();
        if (ve) {
          if (a === void 0) throw Error(r(407));
          a = a();
        } else {
          if (((a = n()), we === null)) throw Error(r(349));
          (ce & 124) !== 0 || Wc(i, n, a);
        }
        s.memoizedState = a;
        var o = { value: a, getSnapshot: n };
        return (
          (s.queue = o),
          df(Ic.bind(null, i, o, t), [t]),
          (i.flags |= 2048),
          Ra(9, Vl(), Pc.bind(null, i, o, a, n), null),
          a
        );
      },
      useId: function () {
        var t = nt(),
          n = we.identifierPrefix;
        if (ve) {
          var a = Qt,
            i = Yt;
          (a = (i & ~(1 << (32 - ut(i) - 1))).toString(32) + a),
            (n = "«" + n + "R" + a),
            (a = $l++),
            0 < a && (n += "H" + a.toString(32)),
            (n += "»");
        } else (a = q0++), (n = "«" + n + "r" + a.toString(32) + "»");
        return (t.memoizedState = n);
      },
      useHostTransitionStatus: Wr,
      useFormState: uf,
      useActionState: uf,
      useOptimistic: function (t) {
        var n = nt();
        n.memoizedState = n.baseState = t;
        var a = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null,
        };
        return (
          (n.queue = a),
          (n = Pr.bind(null, le, !0, a)),
          (a.dispatch = n),
          [t, n]
        );
      },
      useMemoCache: $r,
      useCacheRefresh: function () {
        return (nt().memoizedState = $0.bind(null, le));
      },
    },
    Df = {
      readContext: Pe,
      use: Yl,
      useCallback: pf,
      useContext: Pe,
      useEffect: vf,
      useImperativeHandle: _f,
      useInsertionEffect: gf,
      useLayoutEffect: yf,
      useMemo: bf,
      useReducer: Ql,
      useRef: hf,
      useState: function () {
        return Ql(Kt);
      },
      useDebugValue: Kr,
      useDeferredValue: function (t, n) {
        var a = Ne();
        return Sf(a, me.memoizedState, t, n);
      },
      useTransition: function () {
        var t = Ql(Kt)[0],
          n = Ne().memoizedState;
        return [typeof t == "boolean" ? t : Di(t), n];
      },
      useSyncExternalStore: Jc,
      useId: Af,
      useHostTransitionStatus: Wr,
      useFormState: of,
      useActionState: of,
      useOptimistic: function (t, n) {
        var a = Ne();
        return tf(a, me, t, n);
      },
      useMemoCache: $r,
      useCacheRefresh: Of,
    },
    Q0 = {
      readContext: Pe,
      use: Yl,
      useCallback: pf,
      useContext: Pe,
      useEffect: vf,
      useImperativeHandle: _f,
      useInsertionEffect: gf,
      useLayoutEffect: yf,
      useMemo: bf,
      useReducer: Qr,
      useRef: hf,
      useState: function () {
        return Qr(Kt);
      },
      useDebugValue: Kr,
      useDeferredValue: function (t, n) {
        var a = Ne();
        return me === null ? Zr(a, t, n) : Sf(a, me.memoizedState, t, n);
      },
      useTransition: function () {
        var t = Qr(Kt)[0],
          n = Ne().memoizedState;
        return [typeof t == "boolean" ? t : Di(t), n];
      },
      useSyncExternalStore: Jc,
      useId: Af,
      useHostTransitionStatus: Wr,
      useFormState: ff,
      useActionState: ff,
      useOptimistic: function (t, n) {
        var a = Ne();
        return me !== null
          ? tf(a, me, t, n)
          : ((a.baseState = t), [t, a.queue.dispatch]);
      },
      useMemoCache: $r,
      useCacheRefresh: Of,
    },
    xa = null,
    Ni = 0;
  function Jl(t) {
    var n = Ni;
    return (Ni += 1), xa === null && (xa = []), Gc(xa, t, n);
  }
  function zi(t, n) {
    (n = n.props.ref), (t.ref = n !== void 0 ? n : null);
  }
  function Wl(t, n) {
    throw n.$$typeof === E
      ? Error(r(525))
      : ((t = Object.prototype.toString.call(n)),
        Error(
          r(
            31,
            t === "[object Object]"
              ? "object with keys {" + Object.keys(n).join(", ") + "}"
              : t
          )
        ));
  }
  function Cf(t) {
    var n = t._init;
    return n(t._payload);
  }
  function Mf(t) {
    function n(T, w) {
      if (t) {
        var A = T.deletions;
        A === null ? ((T.deletions = [w]), (T.flags |= 16)) : A.push(w);
      }
    }
    function a(T, w) {
      if (!t) return null;
      for (; w !== null; ) n(T, w), (w = w.sibling);
      return null;
    }
    function i(T) {
      for (var w = new Map(); T !== null; )
        T.key !== null ? w.set(T.key, T) : w.set(T.index, T), (T = T.sibling);
      return w;
    }
    function s(T, w) {
      return (T = $t(T, w)), (T.index = 0), (T.sibling = null), T;
    }
    function o(T, w, A) {
      return (
        (T.index = A),
        t
          ? ((A = T.alternate),
            A !== null
              ? ((A = A.index), A < w ? ((T.flags |= 67108866), w) : A)
              : ((T.flags |= 67108866), w))
          : ((T.flags |= 1048576), w)
      );
    }
    function v(T) {
      return t && T.alternate === null && (T.flags |= 67108866), T;
    }
    function y(T, w, A, C) {
      return w === null || w.tag !== 6
        ? ((w = _r(A, T.mode, C)), (w.return = T), w)
        : ((w = s(w, A)), (w.return = T), w);
    }
    function b(T, w, A, C) {
      var V = A.type;
      return V === k
        ? U(T, w, A.props.children, C, A.key)
        : w !== null &&
          (w.elementType === V ||
            (typeof V == "object" &&
              V !== null &&
              V.$$typeof === je &&
              Cf(V) === w.type))
        ? ((w = s(w, A.props)), zi(w, A), (w.return = T), w)
        : ((w = Cl(A.type, A.key, A.props, null, T.mode, C)),
          zi(w, A),
          (w.return = T),
          w);
    }
    function j(T, w, A, C) {
      return w === null ||
        w.tag !== 4 ||
        w.stateNode.containerInfo !== A.containerInfo ||
        w.stateNode.implementation !== A.implementation
        ? ((w = pr(A, T.mode, C)), (w.return = T), w)
        : ((w = s(w, A.children || [])), (w.return = T), w);
    }
    function U(T, w, A, C, V) {
      return w === null || w.tag !== 7
        ? ((w = Hn(A, T.mode, C, V)), (w.return = T), w)
        : ((w = s(w, A)), (w.return = T), w);
    }
    function M(T, w, A) {
      if (
        (typeof w == "string" && w !== "") ||
        typeof w == "number" ||
        typeof w == "bigint"
      )
        return (w = _r("" + w, T.mode, A)), (w.return = T), w;
      if (typeof w == "object" && w !== null) {
        switch (w.$$typeof) {
          case O:
            return (
              (A = Cl(w.type, w.key, w.props, null, T.mode, A)),
              zi(A, w),
              (A.return = T),
              A
            );
          case z:
            return (w = pr(w, T.mode, A)), (w.return = T), w;
          case je:
            var C = w._init;
            return (w = C(w._payload)), M(T, w, A);
        }
        if (Je(w) || Ze(w))
          return (w = Hn(w, T.mode, A, null)), (w.return = T), w;
        if (typeof w.then == "function") return M(T, Jl(w), A);
        if (w.$$typeof === L) return M(T, kl(T, w), A);
        Wl(T, w);
      }
      return null;
    }
    function R(T, w, A, C) {
      var V = w !== null ? w.key : null;
      if (
        (typeof A == "string" && A !== "") ||
        typeof A == "number" ||
        typeof A == "bigint"
      )
        return V !== null ? null : y(T, w, "" + A, C);
      if (typeof A == "object" && A !== null) {
        switch (A.$$typeof) {
          case O:
            return A.key === V ? b(T, w, A, C) : null;
          case z:
            return A.key === V ? j(T, w, A, C) : null;
          case je:
            return (V = A._init), (A = V(A._payload)), R(T, w, A, C);
        }
        if (Je(A) || Ze(A)) return V !== null ? null : U(T, w, A, C, null);
        if (typeof A.then == "function") return R(T, w, Jl(A), C);
        if (A.$$typeof === L) return R(T, w, kl(T, A), C);
        Wl(T, A);
      }
      return null;
    }
    function x(T, w, A, C, V) {
      if (
        (typeof C == "string" && C !== "") ||
        typeof C == "number" ||
        typeof C == "bigint"
      )
        return (T = T.get(A) || null), y(w, T, "" + C, V);
      if (typeof C == "object" && C !== null) {
        switch (C.$$typeof) {
          case O:
            return (
              (T = T.get(C.key === null ? A : C.key) || null), b(w, T, C, V)
            );
          case z:
            return (
              (T = T.get(C.key === null ? A : C.key) || null), j(w, T, C, V)
            );
          case je:
            var se = C._init;
            return (C = se(C._payload)), x(T, w, A, C, V);
        }
        if (Je(C) || Ze(C)) return (T = T.get(A) || null), U(w, T, C, V, null);
        if (typeof C.then == "function") return x(T, w, A, Jl(C), V);
        if (C.$$typeof === L) return x(T, w, A, kl(w, C), V);
        Wl(w, C);
      }
      return null;
    }
    function F(T, w, A, C) {
      for (
        var V = null, se = null, X = w, W = (w = 0), Ye = null;
        X !== null && W < A.length;
        W++
      ) {
        X.index > W ? ((Ye = X), (X = null)) : (Ye = X.sibling);
        var de = R(T, X, A[W], C);
        if (de === null) {
          X === null && (X = Ye);
          break;
        }
        t && X && de.alternate === null && n(T, X),
          (w = o(de, w, W)),
          se === null ? (V = de) : (se.sibling = de),
          (se = de),
          (X = Ye);
      }
      if (W === A.length) return a(T, X), ve && Gn(T, W), V;
      if (X === null) {
        for (; W < A.length; W++)
          (X = M(T, A[W], C)),
            X !== null &&
              ((w = o(X, w, W)),
              se === null ? (V = X) : (se.sibling = X),
              (se = X));
        return ve && Gn(T, W), V;
      }
      for (X = i(X); W < A.length; W++)
        (Ye = x(X, T, W, A[W], C)),
          Ye !== null &&
            (t &&
              Ye.alternate !== null &&
              X.delete(Ye.key === null ? W : Ye.key),
            (w = o(Ye, w, W)),
            se === null ? (V = Ye) : (se.sibling = Ye),
            (se = Ye));
      return (
        t &&
          X.forEach(function (jn) {
            return n(T, jn);
          }),
        ve && Gn(T, W),
        V
      );
    }
    function J(T, w, A, C) {
      if (A == null) throw Error(r(151));
      for (
        var V = null, se = null, X = w, W = (w = 0), Ye = null, de = A.next();
        X !== null && !de.done;
        W++, de = A.next()
      ) {
        X.index > W ? ((Ye = X), (X = null)) : (Ye = X.sibling);
        var jn = R(T, X, de.value, C);
        if (jn === null) {
          X === null && (X = Ye);
          break;
        }
        t && X && jn.alternate === null && n(T, X),
          (w = o(jn, w, W)),
          se === null ? (V = jn) : (se.sibling = jn),
          (se = jn),
          (X = Ye);
      }
      if (de.done) return a(T, X), ve && Gn(T, W), V;
      if (X === null) {
        for (; !de.done; W++, de = A.next())
          (de = M(T, de.value, C)),
            de !== null &&
              ((w = o(de, w, W)),
              se === null ? (V = de) : (se.sibling = de),
              (se = de));
        return ve && Gn(T, W), V;
      }
      for (X = i(X); !de.done; W++, de = A.next())
        (de = x(X, T, W, de.value, C)),
          de !== null &&
            (t &&
              de.alternate !== null &&
              X.delete(de.key === null ? W : de.key),
            (w = o(de, w, W)),
            se === null ? (V = de) : (se.sibling = de),
            (se = de));
      return (
        t &&
          X.forEach(function (Vg) {
            return n(T, Vg);
          }),
        ve && Gn(T, W),
        V
      );
    }
    function pe(T, w, A, C) {
      if (
        (typeof A == "object" &&
          A !== null &&
          A.type === k &&
          A.key === null &&
          (A = A.props.children),
        typeof A == "object" && A !== null)
      ) {
        switch (A.$$typeof) {
          case O:
            e: {
              for (var V = A.key; w !== null; ) {
                if (w.key === V) {
                  if (((V = A.type), V === k)) {
                    if (w.tag === 7) {
                      a(T, w.sibling),
                        (C = s(w, A.props.children)),
                        (C.return = T),
                        (T = C);
                      break e;
                    }
                  } else if (
                    w.elementType === V ||
                    (typeof V == "object" &&
                      V !== null &&
                      V.$$typeof === je &&
                      Cf(V) === w.type)
                  ) {
                    a(T, w.sibling),
                      (C = s(w, A.props)),
                      zi(C, A),
                      (C.return = T),
                      (T = C);
                    break e;
                  }
                  a(T, w);
                  break;
                } else n(T, w);
                w = w.sibling;
              }
              A.type === k
                ? ((C = Hn(A.props.children, T.mode, C, A.key)),
                  (C.return = T),
                  (T = C))
                : ((C = Cl(A.type, A.key, A.props, null, T.mode, C)),
                  zi(C, A),
                  (C.return = T),
                  (T = C));
            }
            return v(T);
          case z:
            e: {
              for (V = A.key; w !== null; ) {
                if (w.key === V)
                  if (
                    w.tag === 4 &&
                    w.stateNode.containerInfo === A.containerInfo &&
                    w.stateNode.implementation === A.implementation
                  ) {
                    a(T, w.sibling),
                      (C = s(w, A.children || [])),
                      (C.return = T),
                      (T = C);
                    break e;
                  } else {
                    a(T, w);
                    break;
                  }
                else n(T, w);
                w = w.sibling;
              }
              (C = pr(A, T.mode, C)), (C.return = T), (T = C);
            }
            return v(T);
          case je:
            return (V = A._init), (A = V(A._payload)), pe(T, w, A, C);
        }
        if (Je(A)) return F(T, w, A, C);
        if (Ze(A)) {
          if (((V = Ze(A)), typeof V != "function")) throw Error(r(150));
          return (A = V.call(A)), J(T, w, A, C);
        }
        if (typeof A.then == "function") return pe(T, w, Jl(A), C);
        if (A.$$typeof === L) return pe(T, w, kl(T, A), C);
        Wl(T, A);
      }
      return (typeof A == "string" && A !== "") ||
        typeof A == "number" ||
        typeof A == "bigint"
        ? ((A = "" + A),
          w !== null && w.tag === 6
            ? (a(T, w.sibling), (C = s(w, A)), (C.return = T), (T = C))
            : (a(T, w), (C = _r(A, T.mode, C)), (C.return = T), (T = C)),
          v(T))
        : a(T, w);
    }
    return function (T, w, A, C) {
      try {
        Ni = 0;
        var V = pe(T, w, A, C);
        return (xa = null), V;
      } catch (X) {
        if (X === Ai || X === Bl) throw X;
        var se = ct(29, X, null, T.mode);
        return (se.lanes = C), (se.return = T), se;
      } finally {
      }
    };
  }
  var Ua = Mf(!0),
    Nf = Mf(!1),
    wt = N(null),
    Mt = null;
  function hn(t) {
    var n = t.alternate;
    G(qe, qe.current & 1),
      G(wt, t),
      Mt === null &&
        (n === null || Aa.current !== null || n.memoizedState !== null) &&
        (Mt = t);
  }
  function zf(t) {
    if (t.tag === 22) {
      if ((G(qe, qe.current), G(wt, t), Mt === null)) {
        var n = t.alternate;
        n !== null && n.memoizedState !== null && (Mt = t);
      }
    } else dn();
  }
  function dn() {
    G(qe, qe.current), G(wt, wt.current);
  }
  function Zt(t) {
    Y(wt), Mt === t && (Mt = null), Y(qe);
  }
  var qe = N(0);
  function Pl(t) {
    for (var n = t; n !== null; ) {
      if (n.tag === 13) {
        var a = n.memoizedState;
        if (
          a !== null &&
          ((a = a.dehydrated), a === null || a.data === "$?" || Gu(a))
        )
          return n;
      } else if (n.tag === 19 && n.memoizedProps.revealOrder !== void 0) {
        if ((n.flags & 128) !== 0) return n;
      } else if (n.child !== null) {
        (n.child.return = n), (n = n.child);
        continue;
      }
      if (n === t) break;
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === t) return null;
        n = n.return;
      }
      (n.sibling.return = n.return), (n = n.sibling);
    }
    return null;
  }
  function Ir(t, n, a, i) {
    (n = t.memoizedState),
      (a = a(i, n)),
      (a = a == null ? n : p({}, n, a)),
      (t.memoizedState = a),
      t.lanes === 0 && (t.updateQueue.baseState = a);
  }
  var Fr = {
    enqueueSetState: function (t, n, a) {
      t = t._reactInternals;
      var i = vt(),
        s = on(i);
      (s.payload = n),
        a != null && (s.callback = a),
        (n = cn(t, s, i)),
        n !== null && (gt(n, t, i), ji(n, t, i));
    },
    enqueueReplaceState: function (t, n, a) {
      t = t._reactInternals;
      var i = vt(),
        s = on(i);
      (s.tag = 1),
        (s.payload = n),
        a != null && (s.callback = a),
        (n = cn(t, s, i)),
        n !== null && (gt(n, t, i), ji(n, t, i));
    },
    enqueueForceUpdate: function (t, n) {
      t = t._reactInternals;
      var a = vt(),
        i = on(a);
      (i.tag = 2),
        n != null && (i.callback = n),
        (n = cn(t, i, a)),
        n !== null && (gt(n, t, a), ji(n, t, a));
    },
  };
  function kf(t, n, a, i, s, o, v) {
    return (
      (t = t.stateNode),
      typeof t.shouldComponentUpdate == "function"
        ? t.shouldComponentUpdate(i, o, v)
        : n.prototype && n.prototype.isPureReactComponent
        ? !mi(a, i) || !mi(s, o)
        : !0
    );
  }
  function qf(t, n, a, i) {
    (t = n.state),
      typeof n.componentWillReceiveProps == "function" &&
        n.componentWillReceiveProps(a, i),
      typeof n.UNSAFE_componentWillReceiveProps == "function" &&
        n.UNSAFE_componentWillReceiveProps(a, i),
      n.state !== t && Fr.enqueueReplaceState(n, n.state, null);
  }
  function Zn(t, n) {
    var a = n;
    if ("ref" in n) {
      a = {};
      for (var i in n) i !== "ref" && (a[i] = n[i]);
    }
    if ((t = t.defaultProps)) {
      a === n && (a = p({}, a));
      for (var s in t) a[s] === void 0 && (a[s] = t[s]);
    }
    return a;
  }
  var Il =
    typeof reportError == "function"
      ? reportError
      : function (t) {
          if (
            typeof window == "object" &&
            typeof window.ErrorEvent == "function"
          ) {
            var n = new window.ErrorEvent("error", {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof t == "object" &&
                t !== null &&
                typeof t.message == "string"
                  ? String(t.message)
                  : String(t),
              error: t,
            });
            if (!window.dispatchEvent(n)) return;
          } else if (
            typeof process == "object" &&
            typeof process.emit == "function"
          ) {
            process.emit("uncaughtException", t);
            return;
          }
          console.error(t);
        };
  function Bf(t) {
    Il(t);
  }
  function Hf(t) {
    console.error(t);
  }
  function Lf(t) {
    Il(t);
  }
  function Fl(t, n) {
    try {
      var a = t.onUncaughtError;
      a(n.value, { componentStack: n.stack });
    } catch (i) {
      setTimeout(function () {
        throw i;
      });
    }
  }
  function Gf(t, n, a) {
    try {
      var i = t.onCaughtError;
      i(a.value, {
        componentStack: a.stack,
        errorBoundary: n.tag === 1 ? n.stateNode : null,
      });
    } catch (s) {
      setTimeout(function () {
        throw s;
      });
    }
  }
  function eu(t, n, a) {
    return (
      (a = on(a)),
      (a.tag = 3),
      (a.payload = { element: null }),
      (a.callback = function () {
        Fl(t, n);
      }),
      a
    );
  }
  function $f(t) {
    return (t = on(t)), (t.tag = 3), t;
  }
  function Yf(t, n, a, i) {
    var s = a.type.getDerivedStateFromError;
    if (typeof s == "function") {
      var o = i.value;
      (t.payload = function () {
        return s(o);
      }),
        (t.callback = function () {
          Gf(n, a, i);
        });
    }
    var v = a.stateNode;
    v !== null &&
      typeof v.componentDidCatch == "function" &&
      (t.callback = function () {
        Gf(n, a, i),
          typeof s != "function" &&
            (pn === null ? (pn = new Set([this])) : pn.add(this));
        var y = i.stack;
        this.componentDidCatch(i.value, {
          componentStack: y !== null ? y : "",
        });
      });
  }
  function V0(t, n, a, i, s) {
    if (
      ((a.flags |= 32768),
      i !== null && typeof i == "object" && typeof i.then == "function")
    ) {
      if (
        ((n = a.alternate),
        n !== null && wi(n, a, s, !0),
        (a = wt.current),
        a !== null)
      ) {
        switch (a.tag) {
          case 13:
            return (
              Mt === null ? Tu() : a.alternate === null && xe === 0 && (xe = 3),
              (a.flags &= -257),
              (a.flags |= 65536),
              (a.lanes = s),
              i === xr
                ? (a.flags |= 16384)
                : ((n = a.updateQueue),
                  n === null ? (a.updateQueue = new Set([i])) : n.add(i),
                  Ou(t, i, s)),
              !1
            );
          case 22:
            return (
              (a.flags |= 65536),
              i === xr
                ? (a.flags |= 16384)
                : ((n = a.updateQueue),
                  n === null
                    ? ((n = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([i]),
                      }),
                      (a.updateQueue = n))
                    : ((a = n.retryQueue),
                      a === null ? (n.retryQueue = new Set([i])) : a.add(i)),
                  Ou(t, i, s)),
              !1
            );
        }
        throw Error(r(435, a.tag));
      }
      return Ou(t, i, s), Tu(), !1;
    }
    if (ve)
      return (
        (n = wt.current),
        n !== null
          ? ((n.flags & 65536) === 0 && (n.flags |= 256),
            (n.flags |= 65536),
            (n.lanes = s),
            i !== wr && ((t = Error(r(422), { cause: i })), Si(_t(t, a))))
          : (i !== wr && ((n = Error(r(423), { cause: i })), Si(_t(n, a))),
            (t = t.current.alternate),
            (t.flags |= 65536),
            (s &= -s),
            (t.lanes |= s),
            (i = _t(i, a)),
            (s = eu(t.stateNode, i, s)),
            Cr(t, s),
            xe !== 4 && (xe = 2)),
        !1
      );
    var o = Error(r(520), { cause: i });
    if (
      ((o = _t(o, a)),
      $i === null ? ($i = [o]) : $i.push(o),
      xe !== 4 && (xe = 2),
      n === null)
    )
      return !0;
    (i = _t(i, a)), (a = n);
    do {
      switch (a.tag) {
        case 3:
          return (
            (a.flags |= 65536),
            (t = s & -s),
            (a.lanes |= t),
            (t = eu(a.stateNode, i, t)),
            Cr(a, t),
            !1
          );
        case 1:
          if (
            ((n = a.type),
            (o = a.stateNode),
            (a.flags & 128) === 0 &&
              (typeof n.getDerivedStateFromError == "function" ||
                (o !== null &&
                  typeof o.componentDidCatch == "function" &&
                  (pn === null || !pn.has(o)))))
          )
            return (
              (a.flags |= 65536),
              (s &= -s),
              (a.lanes |= s),
              (s = $f(s)),
              Yf(s, t, a, i),
              Cr(a, s),
              !1
            );
      }
      a = a.return;
    } while (a !== null);
    return !1;
  }
  var Qf = Error(r(461)),
    Ge = !1;
  function Ve(t, n, a, i) {
    n.child = t === null ? Nf(n, null, a, i) : Ua(n, t.child, a, i);
  }
  function Vf(t, n, a, i, s) {
    a = a.render;
    var o = n.ref;
    if ("ref" in i) {
      var v = {};
      for (var y in i) y !== "ref" && (v[y] = i[y]);
    } else v = i;
    return (
      Vn(n),
      (i = qr(t, n, a, v, o, s)),
      (y = Br()),
      t !== null && !Ge
        ? (Hr(t, n, s), Jt(t, n, s))
        : (ve && y && br(n), (n.flags |= 1), Ve(t, n, i, s), n.child)
    );
  }
  function Xf(t, n, a, i, s) {
    if (t === null) {
      var o = a.type;
      return typeof o == "function" &&
        !mr(o) &&
        o.defaultProps === void 0 &&
        a.compare === null
        ? ((n.tag = 15), (n.type = o), Kf(t, n, o, i, s))
        : ((t = Cl(a.type, null, i, n, n.mode, s)),
          (t.ref = n.ref),
          (t.return = n),
          (n.child = t));
    }
    if (((o = t.child), !uu(t, s))) {
      var v = o.memoizedProps;
      if (
        ((a = a.compare), (a = a !== null ? a : mi), a(v, i) && t.ref === n.ref)
      )
        return Jt(t, n, s);
    }
    return (
      (n.flags |= 1),
      (t = $t(o, i)),
      (t.ref = n.ref),
      (t.return = n),
      (n.child = t)
    );
  }
  function Kf(t, n, a, i, s) {
    if (t !== null) {
      var o = t.memoizedProps;
      if (mi(o, i) && t.ref === n.ref)
        if (((Ge = !1), (n.pendingProps = i = o), uu(t, s)))
          (t.flags & 131072) !== 0 && (Ge = !0);
        else return (n.lanes = t.lanes), Jt(t, n, s);
    }
    return tu(t, n, a, i, s);
  }
  function Zf(t, n, a) {
    var i = n.pendingProps,
      s = i.children,
      o = t !== null ? t.memoizedState : null;
    if (i.mode === "hidden") {
      if ((n.flags & 128) !== 0) {
        if (((i = o !== null ? o.baseLanes | a : a), t !== null)) {
          for (s = n.child = t.child, o = 0; s !== null; )
            (o = o | s.lanes | s.childLanes), (s = s.sibling);
          n.childLanes = o & ~i;
        } else (n.childLanes = 0), (n.child = null);
        return Jf(t, n, i, a);
      }
      if ((a & 536870912) !== 0)
        (n.memoizedState = { baseLanes: 0, cachePool: null }),
          t !== null && ql(n, o !== null ? o.cachePool : null),
          o !== null ? Xc(n, o) : Nr(),
          zf(n);
      else
        return (
          (n.lanes = n.childLanes = 536870912),
          Jf(t, n, o !== null ? o.baseLanes | a : a, a)
        );
    } else
      o !== null
        ? (ql(n, o.cachePool), Xc(n, o), dn(), (n.memoizedState = null))
        : (t !== null && ql(n, null), Nr(), dn());
    return Ve(t, n, s, a), n.child;
  }
  function Jf(t, n, a, i) {
    var s = Rr();
    return (
      (s = s === null ? null : { parent: ke._currentValue, pool: s }),
      (n.memoizedState = { baseLanes: a, cachePool: s }),
      t !== null && ql(n, null),
      Nr(),
      zf(n),
      t !== null && wi(t, n, i, !0),
      null
    );
  }
  function es(t, n) {
    var a = n.ref;
    if (a === null) t !== null && t.ref !== null && (n.flags |= 4194816);
    else {
      if (typeof a != "function" && typeof a != "object") throw Error(r(284));
      (t === null || t.ref !== a) && (n.flags |= 4194816);
    }
  }
  function tu(t, n, a, i, s) {
    return (
      Vn(n),
      (a = qr(t, n, a, i, void 0, s)),
      (i = Br()),
      t !== null && !Ge
        ? (Hr(t, n, s), Jt(t, n, s))
        : (ve && i && br(n), (n.flags |= 1), Ve(t, n, a, s), n.child)
    );
  }
  function Wf(t, n, a, i, s, o) {
    return (
      Vn(n),
      (n.updateQueue = null),
      (a = Zc(n, i, a, s)),
      Kc(t),
      (i = Br()),
      t !== null && !Ge
        ? (Hr(t, n, o), Jt(t, n, o))
        : (ve && i && br(n), (n.flags |= 1), Ve(t, n, a, o), n.child)
    );
  }
  function Pf(t, n, a, i, s) {
    if ((Vn(n), n.stateNode === null)) {
      var o = ba,
        v = a.contextType;
      typeof v == "object" && v !== null && (o = Pe(v)),
        (o = new a(i, o)),
        (n.memoizedState =
          o.state !== null && o.state !== void 0 ? o.state : null),
        (o.updater = Fr),
        (n.stateNode = o),
        (o._reactInternals = n),
        (o = n.stateNode),
        (o.props = i),
        (o.state = n.memoizedState),
        (o.refs = {}),
        Ur(n),
        (v = a.contextType),
        (o.context = typeof v == "object" && v !== null ? Pe(v) : ba),
        (o.state = n.memoizedState),
        (v = a.getDerivedStateFromProps),
        typeof v == "function" && (Ir(n, a, v, i), (o.state = n.memoizedState)),
        typeof a.getDerivedStateFromProps == "function" ||
          typeof o.getSnapshotBeforeUpdate == "function" ||
          (typeof o.UNSAFE_componentWillMount != "function" &&
            typeof o.componentWillMount != "function") ||
          ((v = o.state),
          typeof o.componentWillMount == "function" && o.componentWillMount(),
          typeof o.UNSAFE_componentWillMount == "function" &&
            o.UNSAFE_componentWillMount(),
          v !== o.state && Fr.enqueueReplaceState(o, o.state, null),
          xi(n, i, o, s),
          Ri(),
          (o.state = n.memoizedState)),
        typeof o.componentDidMount == "function" && (n.flags |= 4194308),
        (i = !0);
    } else if (t === null) {
      o = n.stateNode;
      var y = n.memoizedProps,
        b = Zn(a, y);
      o.props = b;
      var j = o.context,
        U = a.contextType;
      (v = ba), typeof U == "object" && U !== null && (v = Pe(U));
      var M = a.getDerivedStateFromProps;
      (U =
        typeof M == "function" ||
        typeof o.getSnapshotBeforeUpdate == "function"),
        (y = n.pendingProps !== y),
        U ||
          (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
            typeof o.componentWillReceiveProps != "function") ||
          ((y || j !== v) && qf(n, o, i, v)),
        (un = !1);
      var R = n.memoizedState;
      (o.state = R),
        xi(n, i, o, s),
        Ri(),
        (j = n.memoizedState),
        y || R !== j || un
          ? (typeof M == "function" && (Ir(n, a, M, i), (j = n.memoizedState)),
            (b = un || kf(n, a, b, i, R, j, v))
              ? (U ||
                  (typeof o.UNSAFE_componentWillMount != "function" &&
                    typeof o.componentWillMount != "function") ||
                  (typeof o.componentWillMount == "function" &&
                    o.componentWillMount(),
                  typeof o.UNSAFE_componentWillMount == "function" &&
                    o.UNSAFE_componentWillMount()),
                typeof o.componentDidMount == "function" &&
                  (n.flags |= 4194308))
              : (typeof o.componentDidMount == "function" &&
                  (n.flags |= 4194308),
                (n.memoizedProps = i),
                (n.memoizedState = j)),
            (o.props = i),
            (o.state = j),
            (o.context = v),
            (i = b))
          : (typeof o.componentDidMount == "function" && (n.flags |= 4194308),
            (i = !1));
    } else {
      (o = n.stateNode),
        Dr(t, n),
        (v = n.memoizedProps),
        (U = Zn(a, v)),
        (o.props = U),
        (M = n.pendingProps),
        (R = o.context),
        (j = a.contextType),
        (b = ba),
        typeof j == "object" && j !== null && (b = Pe(j)),
        (y = a.getDerivedStateFromProps),
        (j =
          typeof y == "function" ||
          typeof o.getSnapshotBeforeUpdate == "function") ||
          (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
            typeof o.componentWillReceiveProps != "function") ||
          ((v !== M || R !== b) && qf(n, o, i, b)),
        (un = !1),
        (R = n.memoizedState),
        (o.state = R),
        xi(n, i, o, s),
        Ri();
      var x = n.memoizedState;
      v !== M ||
      R !== x ||
      un ||
      (t !== null && t.dependencies !== null && zl(t.dependencies))
        ? (typeof y == "function" && (Ir(n, a, y, i), (x = n.memoizedState)),
          (U =
            un ||
            kf(n, a, U, i, R, x, b) ||
            (t !== null && t.dependencies !== null && zl(t.dependencies)))
            ? (j ||
                (typeof o.UNSAFE_componentWillUpdate != "function" &&
                  typeof o.componentWillUpdate != "function") ||
                (typeof o.componentWillUpdate == "function" &&
                  o.componentWillUpdate(i, x, b),
                typeof o.UNSAFE_componentWillUpdate == "function" &&
                  o.UNSAFE_componentWillUpdate(i, x, b)),
              typeof o.componentDidUpdate == "function" && (n.flags |= 4),
              typeof o.getSnapshotBeforeUpdate == "function" &&
                (n.flags |= 1024))
            : (typeof o.componentDidUpdate != "function" ||
                (v === t.memoizedProps && R === t.memoizedState) ||
                (n.flags |= 4),
              typeof o.getSnapshotBeforeUpdate != "function" ||
                (v === t.memoizedProps && R === t.memoizedState) ||
                (n.flags |= 1024),
              (n.memoizedProps = i),
              (n.memoizedState = x)),
          (o.props = i),
          (o.state = x),
          (o.context = b),
          (i = U))
        : (typeof o.componentDidUpdate != "function" ||
            (v === t.memoizedProps && R === t.memoizedState) ||
            (n.flags |= 4),
          typeof o.getSnapshotBeforeUpdate != "function" ||
            (v === t.memoizedProps && R === t.memoizedState) ||
            (n.flags |= 1024),
          (i = !1));
    }
    return (
      (o = i),
      es(t, n),
      (i = (n.flags & 128) !== 0),
      o || i
        ? ((o = n.stateNode),
          (a =
            i && typeof a.getDerivedStateFromError != "function"
              ? null
              : o.render()),
          (n.flags |= 1),
          t !== null && i
            ? ((n.child = Ua(n, t.child, null, s)),
              (n.child = Ua(n, null, a, s)))
            : Ve(t, n, a, s),
          (n.memoizedState = o.state),
          (t = n.child))
        : (t = Jt(t, n, s)),
      t
    );
  }
  function If(t, n, a, i) {
    return bi(), (n.flags |= 256), Ve(t, n, a, i), n.child;
  }
  var nu = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null,
  };
  function au(t) {
    return { baseLanes: t, cachePool: Bc() };
  }
  function iu(t, n, a) {
    return (t = t !== null ? t.childLanes & ~a : 0), n && (t |= Et), t;
  }
  function Ff(t, n, a) {
    var i = n.pendingProps,
      s = !1,
      o = (n.flags & 128) !== 0,
      v;
    if (
      ((v = o) ||
        (v =
          t !== null && t.memoizedState === null ? !1 : (qe.current & 2) !== 0),
      v && ((s = !0), (n.flags &= -129)),
      (v = (n.flags & 32) !== 0),
      (n.flags &= -33),
      t === null)
    ) {
      if (ve) {
        if ((s ? hn(n) : dn(), ve)) {
          var y = Re,
            b;
          if ((b = y)) {
            e: {
              for (b = y, y = Ct; b.nodeType !== 8; ) {
                if (!y) {
                  y = null;
                  break e;
                }
                if (((b = Rt(b.nextSibling)), b === null)) {
                  y = null;
                  break e;
                }
              }
              y = b;
            }
            y !== null
              ? ((n.memoizedState = {
                  dehydrated: y,
                  treeContext: Ln !== null ? { id: Yt, overflow: Qt } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (b = ct(18, null, null, 0)),
                (b.stateNode = y),
                (b.return = n),
                (n.child = b),
                (Fe = n),
                (Re = null),
                (b = !0))
              : (b = !1);
          }
          b || Yn(n);
        }
        if (
          ((y = n.memoizedState),
          y !== null && ((y = y.dehydrated), y !== null))
        )
          return Gu(y) ? (n.lanes = 32) : (n.lanes = 536870912), null;
        Zt(n);
      }
      return (
        (y = i.children),
        (i = i.fallback),
        s
          ? (dn(),
            (s = n.mode),
            (y = ts({ mode: "hidden", children: y }, s)),
            (i = Hn(i, s, a, null)),
            (y.return = n),
            (i.return = n),
            (y.sibling = i),
            (n.child = y),
            (s = n.child),
            (s.memoizedState = au(a)),
            (s.childLanes = iu(t, v, a)),
            (n.memoizedState = nu),
            i)
          : (hn(n), lu(n, y))
      );
    }
    if (
      ((b = t.memoizedState), b !== null && ((y = b.dehydrated), y !== null))
    ) {
      if (o)
        n.flags & 256
          ? (hn(n), (n.flags &= -257), (n = su(t, n, a)))
          : n.memoizedState !== null
          ? (dn(), (n.child = t.child), (n.flags |= 128), (n = null))
          : (dn(),
            (s = i.fallback),
            (y = n.mode),
            (i = ts({ mode: "visible", children: i.children }, y)),
            (s = Hn(s, y, a, null)),
            (s.flags |= 2),
            (i.return = n),
            (s.return = n),
            (i.sibling = s),
            (n.child = i),
            Ua(n, t.child, null, a),
            (i = n.child),
            (i.memoizedState = au(a)),
            (i.childLanes = iu(t, v, a)),
            (n.memoizedState = nu),
            (n = s));
      else if ((hn(n), Gu(y))) {
        if (((v = y.nextSibling && y.nextSibling.dataset), v)) var j = v.dgst;
        (v = j),
          (i = Error(r(419))),
          (i.stack = ""),
          (i.digest = v),
          Si({ value: i, source: null, stack: null }),
          (n = su(t, n, a));
      } else if (
        (Ge || wi(t, n, a, !1), (v = (a & t.childLanes) !== 0), Ge || v)
      ) {
        if (
          ((v = we),
          v !== null &&
            ((i = a & -a),
            (i = (i & 42) !== 0 ? 1 : $s(i)),
            (i = (i & (v.suspendedLanes | a)) !== 0 ? 0 : i),
            i !== 0 && i !== b.retryLane))
        )
          throw ((b.retryLane = i), pa(t, i), gt(v, t, i), Qf);
        y.data === "$?" || Tu(), (n = su(t, n, a));
      } else
        y.data === "$?"
          ? ((n.flags |= 192), (n.child = t.child), (n = null))
          : ((t = b.treeContext),
            (Re = Rt(y.nextSibling)),
            (Fe = n),
            (ve = !0),
            ($n = null),
            (Ct = !1),
            t !== null &&
              ((bt[St++] = Yt),
              (bt[St++] = Qt),
              (bt[St++] = Ln),
              (Yt = t.id),
              (Qt = t.overflow),
              (Ln = n)),
            (n = lu(n, i.children)),
            (n.flags |= 4096));
      return n;
    }
    return s
      ? (dn(),
        (s = i.fallback),
        (y = n.mode),
        (b = t.child),
        (j = b.sibling),
        (i = $t(b, { mode: "hidden", children: i.children })),
        (i.subtreeFlags = b.subtreeFlags & 65011712),
        j !== null ? (s = $t(j, s)) : ((s = Hn(s, y, a, null)), (s.flags |= 2)),
        (s.return = n),
        (i.return = n),
        (i.sibling = s),
        (n.child = i),
        (i = s),
        (s = n.child),
        (y = t.child.memoizedState),
        y === null
          ? (y = au(a))
          : ((b = y.cachePool),
            b !== null
              ? ((j = ke._currentValue),
                (b = b.parent !== j ? { parent: j, pool: j } : b))
              : (b = Bc()),
            (y = { baseLanes: y.baseLanes | a, cachePool: b })),
        (s.memoizedState = y),
        (s.childLanes = iu(t, v, a)),
        (n.memoizedState = nu),
        i)
      : (hn(n),
        (a = t.child),
        (t = a.sibling),
        (a = $t(a, { mode: "visible", children: i.children })),
        (a.return = n),
        (a.sibling = null),
        t !== null &&
          ((v = n.deletions),
          v === null ? ((n.deletions = [t]), (n.flags |= 16)) : v.push(t)),
        (n.child = a),
        (n.memoizedState = null),
        a);
  }
  function lu(t, n) {
    return (
      (n = ts({ mode: "visible", children: n }, t.mode)),
      (n.return = t),
      (t.child = n)
    );
  }
  function ts(t, n) {
    return (
      (t = ct(22, t, null, n)),
      (t.lanes = 0),
      (t.stateNode = {
        _visibility: 1,
        _pendingMarkers: null,
        _retryCache: null,
        _transitions: null,
      }),
      t
    );
  }
  function su(t, n, a) {
    return (
      Ua(n, t.child, null, a),
      (t = lu(n, n.pendingProps.children)),
      (t.flags |= 2),
      (n.memoizedState = null),
      t
    );
  }
  function eh(t, n, a) {
    t.lanes |= n;
    var i = t.alternate;
    i !== null && (i.lanes |= n), Tr(t.return, n, a);
  }
  function ru(t, n, a, i, s) {
    var o = t.memoizedState;
    o === null
      ? (t.memoizedState = {
          isBackwards: n,
          rendering: null,
          renderingStartTime: 0,
          last: i,
          tail: a,
          tailMode: s,
        })
      : ((o.isBackwards = n),
        (o.rendering = null),
        (o.renderingStartTime = 0),
        (o.last = i),
        (o.tail = a),
        (o.tailMode = s));
  }
  function th(t, n, a) {
    var i = n.pendingProps,
      s = i.revealOrder,
      o = i.tail;
    if ((Ve(t, n, i.children, a), (i = qe.current), (i & 2) !== 0))
      (i = (i & 1) | 2), (n.flags |= 128);
    else {
      if (t !== null && (t.flags & 128) !== 0)
        e: for (t = n.child; t !== null; ) {
          if (t.tag === 13) t.memoizedState !== null && eh(t, a, n);
          else if (t.tag === 19) eh(t, a, n);
          else if (t.child !== null) {
            (t.child.return = t), (t = t.child);
            continue;
          }
          if (t === n) break e;
          for (; t.sibling === null; ) {
            if (t.return === null || t.return === n) break e;
            t = t.return;
          }
          (t.sibling.return = t.return), (t = t.sibling);
        }
      i &= 1;
    }
    switch ((G(qe, i), s)) {
      case "forwards":
        for (a = n.child, s = null; a !== null; )
          (t = a.alternate),
            t !== null && Pl(t) === null && (s = a),
            (a = a.sibling);
        (a = s),
          a === null
            ? ((s = n.child), (n.child = null))
            : ((s = a.sibling), (a.sibling = null)),
          ru(n, !1, s, a, o);
        break;
      case "backwards":
        for (a = null, s = n.child, n.child = null; s !== null; ) {
          if (((t = s.alternate), t !== null && Pl(t) === null)) {
            n.child = s;
            break;
          }
          (t = s.sibling), (s.sibling = a), (a = s), (s = t);
        }
        ru(n, !0, a, null, o);
        break;
      case "together":
        ru(n, !1, null, null, void 0);
        break;
      default:
        n.memoizedState = null;
    }
    return n.child;
  }
  function Jt(t, n, a) {
    if (
      (t !== null && (n.dependencies = t.dependencies),
      (_n |= n.lanes),
      (a & n.childLanes) === 0)
    )
      if (t !== null) {
        if ((wi(t, n, a, !1), (a & n.childLanes) === 0)) return null;
      } else return null;
    if (t !== null && n.child !== t.child) throw Error(r(153));
    if (n.child !== null) {
      for (
        t = n.child, a = $t(t, t.pendingProps), n.child = a, a.return = n;
        t.sibling !== null;

      )
        (t = t.sibling),
          (a = a.sibling = $t(t, t.pendingProps)),
          (a.return = n);
      a.sibling = null;
    }
    return n.child;
  }
  function uu(t, n) {
    return (t.lanes & n) !== 0
      ? !0
      : ((t = t.dependencies), !!(t !== null && zl(t)));
  }
  function X0(t, n, a) {
    switch (n.tag) {
      case 3:
        Te(n, n.stateNode.containerInfo),
          rn(n, ke, t.memoizedState.cache),
          bi();
        break;
      case 27:
      case 5:
        qs(n);
        break;
      case 4:
        Te(n, n.stateNode.containerInfo);
        break;
      case 10:
        rn(n, n.type, n.memoizedProps.value);
        break;
      case 13:
        var i = n.memoizedState;
        if (i !== null)
          return i.dehydrated !== null
            ? (hn(n), (n.flags |= 128), null)
            : (a & n.child.childLanes) !== 0
            ? Ff(t, n, a)
            : (hn(n), (t = Jt(t, n, a)), t !== null ? t.sibling : null);
        hn(n);
        break;
      case 19:
        var s = (t.flags & 128) !== 0;
        if (
          ((i = (a & n.childLanes) !== 0),
          i || (wi(t, n, a, !1), (i = (a & n.childLanes) !== 0)),
          s)
        ) {
          if (i) return th(t, n, a);
          n.flags |= 128;
        }
        if (
          ((s = n.memoizedState),
          s !== null &&
            ((s.rendering = null), (s.tail = null), (s.lastEffect = null)),
          G(qe, qe.current),
          i)
        )
          break;
        return null;
      case 22:
      case 23:
        return (n.lanes = 0), Zf(t, n, a);
      case 24:
        rn(n, ke, t.memoizedState.cache);
    }
    return Jt(t, n, a);
  }
  function nh(t, n, a) {
    if (t !== null)
      if (t.memoizedProps !== n.pendingProps) Ge = !0;
      else {
        if (!uu(t, a) && (n.flags & 128) === 0) return (Ge = !1), X0(t, n, a);
        Ge = (t.flags & 131072) !== 0;
      }
    else (Ge = !1), ve && (n.flags & 1048576) !== 0 && Dc(n, Nl, n.index);
    switch (((n.lanes = 0), n.tag)) {
      case 16:
        e: {
          t = n.pendingProps;
          var i = n.elementType,
            s = i._init;
          if (((i = s(i._payload)), (n.type = i), typeof i == "function"))
            mr(i)
              ? ((t = Zn(i, t)), (n.tag = 1), (n = Pf(null, n, i, t, a)))
              : ((n.tag = 0), (n = tu(null, n, i, t, a)));
          else {
            if (i != null) {
              if (((s = i.$$typeof), s === I)) {
                (n.tag = 11), (n = Vf(null, n, i, t, a));
                break e;
              } else if (s === fe) {
                (n.tag = 14), (n = Xf(null, n, i, t, a));
                break e;
              }
            }
            throw ((n = Mn(i) || i), Error(r(306, n, "")));
          }
        }
        return n;
      case 0:
        return tu(t, n, n.type, n.pendingProps, a);
      case 1:
        return (i = n.type), (s = Zn(i, n.pendingProps)), Pf(t, n, i, s, a);
      case 3:
        e: {
          if ((Te(n, n.stateNode.containerInfo), t === null))
            throw Error(r(387));
          i = n.pendingProps;
          var o = n.memoizedState;
          (s = o.element), Dr(t, n), xi(n, i, null, a);
          var v = n.memoizedState;
          if (
            ((i = v.cache),
            rn(n, ke, i),
            i !== o.cache && Ar(n, [ke], a, !0),
            Ri(),
            (i = v.element),
            o.isDehydrated)
          )
            if (
              ((o = { element: i, isDehydrated: !1, cache: v.cache }),
              (n.updateQueue.baseState = o),
              (n.memoizedState = o),
              n.flags & 256)
            ) {
              n = If(t, n, i, a);
              break e;
            } else if (i !== s) {
              (s = _t(Error(r(424)), n)), Si(s), (n = If(t, n, i, a));
              break e;
            } else {
              switch (((t = n.stateNode.containerInfo), t.nodeType)) {
                case 9:
                  t = t.body;
                  break;
                default:
                  t = t.nodeName === "HTML" ? t.ownerDocument.body : t;
              }
              for (
                Re = Rt(t.firstChild),
                  Fe = n,
                  ve = !0,
                  $n = null,
                  Ct = !0,
                  a = Nf(n, null, i, a),
                  n.child = a;
                a;

              )
                (a.flags = (a.flags & -3) | 4096), (a = a.sibling);
            }
          else {
            if ((bi(), i === s)) {
              n = Jt(t, n, a);
              break e;
            }
            Ve(t, n, i, a);
          }
          n = n.child;
        }
        return n;
      case 26:
        return (
          es(t, n),
          t === null
            ? (a = sd(n.type, null, n.pendingProps, null))
              ? (n.memoizedState = a)
              : ve ||
                ((a = n.type),
                (t = n.pendingProps),
                (i = gs(te.current).createElement(a)),
                (i[We] = n),
                (i[et] = t),
                Ke(i, a, t),
                Le(i),
                (n.stateNode = i))
            : (n.memoizedState = sd(
                n.type,
                t.memoizedProps,
                n.pendingProps,
                t.memoizedState
              )),
          null
        );
      case 27:
        return (
          qs(n),
          t === null &&
            ve &&
            ((i = n.stateNode = ad(n.type, n.pendingProps, te.current)),
            (Fe = n),
            (Ct = !0),
            (s = Re),
            wn(n.type) ? (($u = s), (Re = Rt(i.firstChild))) : (Re = s)),
          Ve(t, n, n.pendingProps.children, a),
          es(t, n),
          t === null && (n.flags |= 4194304),
          n.child
        );
      case 5:
        return (
          t === null &&
            ve &&
            ((s = i = Re) &&
              ((i = bg(i, n.type, n.pendingProps, Ct)),
              i !== null
                ? ((n.stateNode = i),
                  (Fe = n),
                  (Re = Rt(i.firstChild)),
                  (Ct = !1),
                  (s = !0))
                : (s = !1)),
            s || Yn(n)),
          qs(n),
          (s = n.type),
          (o = n.pendingProps),
          (v = t !== null ? t.memoizedProps : null),
          (i = o.children),
          Bu(s, o) ? (i = null) : v !== null && Bu(s, v) && (n.flags |= 32),
          n.memoizedState !== null &&
            ((s = qr(t, n, B0, null, null, a)), (Pi._currentValue = s)),
          es(t, n),
          Ve(t, n, i, a),
          n.child
        );
      case 6:
        return (
          t === null &&
            ve &&
            ((t = a = Re) &&
              ((a = Sg(a, n.pendingProps, Ct)),
              a !== null
                ? ((n.stateNode = a), (Fe = n), (Re = null), (t = !0))
                : (t = !1)),
            t || Yn(n)),
          null
        );
      case 13:
        return Ff(t, n, a);
      case 4:
        return (
          Te(n, n.stateNode.containerInfo),
          (i = n.pendingProps),
          t === null ? (n.child = Ua(n, null, i, a)) : Ve(t, n, i, a),
          n.child
        );
      case 11:
        return Vf(t, n, n.type, n.pendingProps, a);
      case 7:
        return Ve(t, n, n.pendingProps, a), n.child;
      case 8:
        return Ve(t, n, n.pendingProps.children, a), n.child;
      case 12:
        return Ve(t, n, n.pendingProps.children, a), n.child;
      case 10:
        return (
          (i = n.pendingProps),
          rn(n, n.type, i.value),
          Ve(t, n, i.children, a),
          n.child
        );
      case 9:
        return (
          (s = n.type._context),
          (i = n.pendingProps.children),
          Vn(n),
          (s = Pe(s)),
          (i = i(s)),
          (n.flags |= 1),
          Ve(t, n, i, a),
          n.child
        );
      case 14:
        return Xf(t, n, n.type, n.pendingProps, a);
      case 15:
        return Kf(t, n, n.type, n.pendingProps, a);
      case 19:
        return th(t, n, a);
      case 31:
        return (
          (i = n.pendingProps),
          (a = n.mode),
          (i = { mode: i.mode, children: i.children }),
          t === null
            ? ((a = ts(i, a)),
              (a.ref = n.ref),
              (n.child = a),
              (a.return = n),
              (n = a))
            : ((a = $t(t.child, i)),
              (a.ref = n.ref),
              (n.child = a),
              (a.return = n),
              (n = a)),
          n
        );
      case 22:
        return Zf(t, n, a);
      case 24:
        return (
          Vn(n),
          (i = Pe(ke)),
          t === null
            ? ((s = Rr()),
              s === null &&
                ((s = we),
                (o = Or()),
                (s.pooledCache = o),
                o.refCount++,
                o !== null && (s.pooledCacheLanes |= a),
                (s = o)),
              (n.memoizedState = { parent: i, cache: s }),
              Ur(n),
              rn(n, ke, s))
            : ((t.lanes & a) !== 0 && (Dr(t, n), xi(n, null, null, a), Ri()),
              (s = t.memoizedState),
              (o = n.memoizedState),
              s.parent !== i
                ? ((s = { parent: i, cache: i }),
                  (n.memoizedState = s),
                  n.lanes === 0 &&
                    (n.memoizedState = n.updateQueue.baseState = s),
                  rn(n, ke, i))
                : ((i = o.cache),
                  rn(n, ke, i),
                  i !== s.cache && Ar(n, [ke], a, !0))),
          Ve(t, n, n.pendingProps.children, a),
          n.child
        );
      case 29:
        throw n.pendingProps;
    }
    throw Error(r(156, n.tag));
  }
  function Wt(t) {
    t.flags |= 4;
  }
  function ah(t, n) {
    if (n.type !== "stylesheet" || (n.state.loading & 4) !== 0)
      t.flags &= -16777217;
    else if (((t.flags |= 16777216), !fd(n))) {
      if (
        ((n = wt.current),
        n !== null &&
          ((ce & 4194048) === ce
            ? Mt !== null
            : ((ce & 62914560) !== ce && (ce & 536870912) === 0) || n !== Mt))
      )
        throw ((Oi = xr), Hc);
      t.flags |= 8192;
    }
  }
  function ns(t, n) {
    n !== null && (t.flags |= 4),
      t.flags & 16384 &&
        ((n = t.tag !== 22 ? No() : 536870912), (t.lanes |= n), (Na |= n));
  }
  function ki(t, n) {
    if (!ve)
      switch (t.tailMode) {
        case "hidden":
          n = t.tail;
          for (var a = null; n !== null; )
            n.alternate !== null && (a = n), (n = n.sibling);
          a === null ? (t.tail = null) : (a.sibling = null);
          break;
        case "collapsed":
          a = t.tail;
          for (var i = null; a !== null; )
            a.alternate !== null && (i = a), (a = a.sibling);
          i === null
            ? n || t.tail === null
              ? (t.tail = null)
              : (t.tail.sibling = null)
            : (i.sibling = null);
      }
  }
  function Oe(t) {
    var n = t.alternate !== null && t.alternate.child === t.child,
      a = 0,
      i = 0;
    if (n)
      for (var s = t.child; s !== null; )
        (a |= s.lanes | s.childLanes),
          (i |= s.subtreeFlags & 65011712),
          (i |= s.flags & 65011712),
          (s.return = t),
          (s = s.sibling);
    else
      for (s = t.child; s !== null; )
        (a |= s.lanes | s.childLanes),
          (i |= s.subtreeFlags),
          (i |= s.flags),
          (s.return = t),
          (s = s.sibling);
    return (t.subtreeFlags |= i), (t.childLanes = a), n;
  }
  function K0(t, n, a) {
    var i = n.pendingProps;
    switch ((Sr(n), n.tag)) {
      case 31:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Oe(n), null;
      case 1:
        return Oe(n), null;
      case 3:
        return (
          (a = n.stateNode),
          (i = null),
          t !== null && (i = t.memoizedState.cache),
          n.memoizedState.cache !== i && (n.flags |= 2048),
          Xt(ke),
          nn(),
          a.pendingContext &&
            ((a.context = a.pendingContext), (a.pendingContext = null)),
          (t === null || t.child === null) &&
            (pi(n)
              ? Wt(n)
              : t === null ||
                (t.memoizedState.isDehydrated && (n.flags & 256) === 0) ||
                ((n.flags |= 1024), Nc())),
          Oe(n),
          null
        );
      case 26:
        return (
          (a = n.memoizedState),
          t === null
            ? (Wt(n),
              a !== null ? (Oe(n), ah(n, a)) : (Oe(n), (n.flags &= -16777217)))
            : a
            ? a !== t.memoizedState
              ? (Wt(n), Oe(n), ah(n, a))
              : (Oe(n), (n.flags &= -16777217))
            : (t.memoizedProps !== i && Wt(n), Oe(n), (n.flags &= -16777217)),
          null
        );
      case 27:
        dl(n), (a = te.current);
        var s = n.type;
        if (t !== null && n.stateNode != null) t.memoizedProps !== i && Wt(n);
        else {
          if (!i) {
            if (n.stateNode === null) throw Error(r(166));
            return Oe(n), null;
          }
          (t = Z.current),
            pi(n) ? Cc(n) : ((t = ad(s, i, a)), (n.stateNode = t), Wt(n));
        }
        return Oe(n), null;
      case 5:
        if ((dl(n), (a = n.type), t !== null && n.stateNode != null))
          t.memoizedProps !== i && Wt(n);
        else {
          if (!i) {
            if (n.stateNode === null) throw Error(r(166));
            return Oe(n), null;
          }
          if (((t = Z.current), pi(n))) Cc(n);
          else {
            switch (((s = gs(te.current)), t)) {
              case 1:
                t = s.createElementNS("http://www.w3.org/2000/svg", a);
                break;
              case 2:
                t = s.createElementNS("http://www.w3.org/1998/Math/MathML", a);
                break;
              default:
                switch (a) {
                  case "svg":
                    t = s.createElementNS("http://www.w3.org/2000/svg", a);
                    break;
                  case "math":
                    t = s.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      a
                    );
                    break;
                  case "script":
                    (t = s.createElement("div")),
                      (t.innerHTML = "<script></script>"),
                      (t = t.removeChild(t.firstChild));
                    break;
                  case "select":
                    (t =
                      typeof i.is == "string"
                        ? s.createElement("select", { is: i.is })
                        : s.createElement("select")),
                      i.multiple
                        ? (t.multiple = !0)
                        : i.size && (t.size = i.size);
                    break;
                  default:
                    t =
                      typeof i.is == "string"
                        ? s.createElement(a, { is: i.is })
                        : s.createElement(a);
                }
            }
            (t[We] = n), (t[et] = i);
            e: for (s = n.child; s !== null; ) {
              if (s.tag === 5 || s.tag === 6) t.appendChild(s.stateNode);
              else if (s.tag !== 4 && s.tag !== 27 && s.child !== null) {
                (s.child.return = s), (s = s.child);
                continue;
              }
              if (s === n) break e;
              for (; s.sibling === null; ) {
                if (s.return === null || s.return === n) break e;
                s = s.return;
              }
              (s.sibling.return = s.return), (s = s.sibling);
            }
            n.stateNode = t;
            e: switch ((Ke(t, a, i), a)) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                t = !!i.autoFocus;
                break e;
              case "img":
                t = !0;
                break e;
              default:
                t = !1;
            }
            t && Wt(n);
          }
        }
        return Oe(n), (n.flags &= -16777217), null;
      case 6:
        if (t && n.stateNode != null) t.memoizedProps !== i && Wt(n);
        else {
          if (typeof i != "string" && n.stateNode === null) throw Error(r(166));
          if (((t = te.current), pi(n))) {
            if (
              ((t = n.stateNode),
              (a = n.memoizedProps),
              (i = null),
              (s = Fe),
              s !== null)
            )
              switch (s.tag) {
                case 27:
                case 5:
                  i = s.memoizedProps;
              }
            (t[We] = n),
              (t = !!(
                t.nodeValue === a ||
                (i !== null && i.suppressHydrationWarning === !0) ||
                Wh(t.nodeValue, a)
              )),
              t || Yn(n);
          } else (t = gs(t).createTextNode(i)), (t[We] = n), (n.stateNode = t);
        }
        return Oe(n), null;
      case 13:
        if (
          ((i = n.memoizedState),
          t === null ||
            (t.memoizedState !== null && t.memoizedState.dehydrated !== null))
        ) {
          if (((s = pi(n)), i !== null && i.dehydrated !== null)) {
            if (t === null) {
              if (!s) throw Error(r(318));
              if (
                ((s = n.memoizedState),
                (s = s !== null ? s.dehydrated : null),
                !s)
              )
                throw Error(r(317));
              s[We] = n;
            } else
              bi(),
                (n.flags & 128) === 0 && (n.memoizedState = null),
                (n.flags |= 4);
            Oe(n), (s = !1);
          } else
            (s = Nc()),
              t !== null &&
                t.memoizedState !== null &&
                (t.memoizedState.hydrationErrors = s),
              (s = !0);
          if (!s) return n.flags & 256 ? (Zt(n), n) : (Zt(n), null);
        }
        if ((Zt(n), (n.flags & 128) !== 0)) return (n.lanes = a), n;
        if (
          ((a = i !== null), (t = t !== null && t.memoizedState !== null), a)
        ) {
          (i = n.child),
            (s = null),
            i.alternate !== null &&
              i.alternate.memoizedState !== null &&
              i.alternate.memoizedState.cachePool !== null &&
              (s = i.alternate.memoizedState.cachePool.pool);
          var o = null;
          i.memoizedState !== null &&
            i.memoizedState.cachePool !== null &&
            (o = i.memoizedState.cachePool.pool),
            o !== s && (i.flags |= 2048);
        }
        return (
          a !== t && a && (n.child.flags |= 8192),
          ns(n, n.updateQueue),
          Oe(n),
          null
        );
      case 4:
        return nn(), t === null && Mu(n.stateNode.containerInfo), Oe(n), null;
      case 10:
        return Xt(n.type), Oe(n), null;
      case 19:
        if ((Y(qe), (s = n.memoizedState), s === null)) return Oe(n), null;
        if (((i = (n.flags & 128) !== 0), (o = s.rendering), o === null))
          if (i) ki(s, !1);
          else {
            if (xe !== 0 || (t !== null && (t.flags & 128) !== 0))
              for (t = n.child; t !== null; ) {
                if (((o = Pl(t)), o !== null)) {
                  for (
                    n.flags |= 128,
                      ki(s, !1),
                      t = o.updateQueue,
                      n.updateQueue = t,
                      ns(n, t),
                      n.subtreeFlags = 0,
                      t = a,
                      a = n.child;
                    a !== null;

                  )
                    Uc(a, t), (a = a.sibling);
                  return G(qe, (qe.current & 1) | 2), n.child;
                }
                t = t.sibling;
              }
            s.tail !== null &&
              Dt() > ls &&
              ((n.flags |= 128), (i = !0), ki(s, !1), (n.lanes = 4194304));
          }
        else {
          if (!i)
            if (((t = Pl(o)), t !== null)) {
              if (
                ((n.flags |= 128),
                (i = !0),
                (t = t.updateQueue),
                (n.updateQueue = t),
                ns(n, t),
                ki(s, !0),
                s.tail === null &&
                  s.tailMode === "hidden" &&
                  !o.alternate &&
                  !ve)
              )
                return Oe(n), null;
            } else
              2 * Dt() - s.renderingStartTime > ls &&
                a !== 536870912 &&
                ((n.flags |= 128), (i = !0), ki(s, !1), (n.lanes = 4194304));
          s.isBackwards
            ? ((o.sibling = n.child), (n.child = o))
            : ((t = s.last),
              t !== null ? (t.sibling = o) : (n.child = o),
              (s.last = o));
        }
        return s.tail !== null
          ? ((n = s.tail),
            (s.rendering = n),
            (s.tail = n.sibling),
            (s.renderingStartTime = Dt()),
            (n.sibling = null),
            (t = qe.current),
            G(qe, i ? (t & 1) | 2 : t & 1),
            n)
          : (Oe(n), null);
      case 22:
      case 23:
        return (
          Zt(n),
          zr(),
          (i = n.memoizedState !== null),
          t !== null
            ? (t.memoizedState !== null) !== i && (n.flags |= 8192)
            : i && (n.flags |= 8192),
          i
            ? (a & 536870912) !== 0 &&
              (n.flags & 128) === 0 &&
              (Oe(n), n.subtreeFlags & 6 && (n.flags |= 8192))
            : Oe(n),
          (a = n.updateQueue),
          a !== null && ns(n, a.retryQueue),
          (a = null),
          t !== null &&
            t.memoizedState !== null &&
            t.memoizedState.cachePool !== null &&
            (a = t.memoizedState.cachePool.pool),
          (i = null),
          n.memoizedState !== null &&
            n.memoizedState.cachePool !== null &&
            (i = n.memoizedState.cachePool.pool),
          i !== a && (n.flags |= 2048),
          t !== null && Y(Xn),
          null
        );
      case 24:
        return (
          (a = null),
          t !== null && (a = t.memoizedState.cache),
          n.memoizedState.cache !== a && (n.flags |= 2048),
          Xt(ke),
          Oe(n),
          null
        );
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(r(156, n.tag));
  }
  function Z0(t, n) {
    switch ((Sr(n), n.tag)) {
      case 1:
        return (
          (t = n.flags), t & 65536 ? ((n.flags = (t & -65537) | 128), n) : null
        );
      case 3:
        return (
          Xt(ke),
          nn(),
          (t = n.flags),
          (t & 65536) !== 0 && (t & 128) === 0
            ? ((n.flags = (t & -65537) | 128), n)
            : null
        );
      case 26:
      case 27:
      case 5:
        return dl(n), null;
      case 13:
        if (
          (Zt(n), (t = n.memoizedState), t !== null && t.dehydrated !== null)
        ) {
          if (n.alternate === null) throw Error(r(340));
          bi();
        }
        return (
          (t = n.flags), t & 65536 ? ((n.flags = (t & -65537) | 128), n) : null
        );
      case 19:
        return Y(qe), null;
      case 4:
        return nn(), null;
      case 10:
        return Xt(n.type), null;
      case 22:
      case 23:
        return (
          Zt(n),
          zr(),
          t !== null && Y(Xn),
          (t = n.flags),
          t & 65536 ? ((n.flags = (t & -65537) | 128), n) : null
        );
      case 24:
        return Xt(ke), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function ih(t, n) {
    switch ((Sr(n), n.tag)) {
      case 3:
        Xt(ke), nn();
        break;
      case 26:
      case 27:
      case 5:
        dl(n);
        break;
      case 4:
        nn();
        break;
      case 13:
        Zt(n);
        break;
      case 19:
        Y(qe);
        break;
      case 10:
        Xt(n.type);
        break;
      case 22:
      case 23:
        Zt(n), zr(), t !== null && Y(Xn);
        break;
      case 24:
        Xt(ke);
    }
  }
  function qi(t, n) {
    try {
      var a = n.updateQueue,
        i = a !== null ? a.lastEffect : null;
      if (i !== null) {
        var s = i.next;
        a = s;
        do {
          if ((a.tag & t) === t) {
            i = void 0;
            var o = a.create,
              v = a.inst;
            (i = o()), (v.destroy = i);
          }
          a = a.next;
        } while (a !== s);
      }
    } catch (y) {
      Se(n, n.return, y);
    }
  }
  function vn(t, n, a) {
    try {
      var i = n.updateQueue,
        s = i !== null ? i.lastEffect : null;
      if (s !== null) {
        var o = s.next;
        i = o;
        do {
          if ((i.tag & t) === t) {
            var v = i.inst,
              y = v.destroy;
            if (y !== void 0) {
              (v.destroy = void 0), (s = n);
              var b = a,
                j = y;
              try {
                j();
              } catch (U) {
                Se(s, b, U);
              }
            }
          }
          i = i.next;
        } while (i !== o);
      }
    } catch (U) {
      Se(n, n.return, U);
    }
  }
  function lh(t) {
    var n = t.updateQueue;
    if (n !== null) {
      var a = t.stateNode;
      try {
        Vc(n, a);
      } catch (i) {
        Se(t, t.return, i);
      }
    }
  }
  function sh(t, n, a) {
    (a.props = Zn(t.type, t.memoizedProps)), (a.state = t.memoizedState);
    try {
      a.componentWillUnmount();
    } catch (i) {
      Se(t, n, i);
    }
  }
  function Bi(t, n) {
    try {
      var a = t.ref;
      if (a !== null) {
        switch (t.tag) {
          case 26:
          case 27:
          case 5:
            var i = t.stateNode;
            break;
          case 30:
            i = t.stateNode;
            break;
          default:
            i = t.stateNode;
        }
        typeof a == "function" ? (t.refCleanup = a(i)) : (a.current = i);
      }
    } catch (s) {
      Se(t, n, s);
    }
  }
  function Nt(t, n) {
    var a = t.ref,
      i = t.refCleanup;
    if (a !== null)
      if (typeof i == "function")
        try {
          i();
        } catch (s) {
          Se(t, n, s);
        } finally {
          (t.refCleanup = null),
            (t = t.alternate),
            t != null && (t.refCleanup = null);
        }
      else if (typeof a == "function")
        try {
          a(null);
        } catch (s) {
          Se(t, n, s);
        }
      else a.current = null;
  }
  function rh(t) {
    var n = t.type,
      a = t.memoizedProps,
      i = t.stateNode;
    try {
      e: switch (n) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          a.autoFocus && i.focus();
          break e;
        case "img":
          a.src ? (i.src = a.src) : a.srcSet && (i.srcset = a.srcSet);
      }
    } catch (s) {
      Se(t, t.return, s);
    }
  }
  function ou(t, n, a) {
    try {
      var i = t.stateNode;
      gg(i, t.type, a, n), (i[et] = n);
    } catch (s) {
      Se(t, t.return, s);
    }
  }
  function uh(t) {
    return (
      t.tag === 5 ||
      t.tag === 3 ||
      t.tag === 26 ||
      (t.tag === 27 && wn(t.type)) ||
      t.tag === 4
    );
  }
  function cu(t) {
    e: for (;;) {
      for (; t.sibling === null; ) {
        if (t.return === null || uh(t.return)) return null;
        t = t.return;
      }
      for (
        t.sibling.return = t.return, t = t.sibling;
        t.tag !== 5 && t.tag !== 6 && t.tag !== 18;

      ) {
        if (
          (t.tag === 27 && wn(t.type)) ||
          t.flags & 2 ||
          t.child === null ||
          t.tag === 4
        )
          continue e;
        (t.child.return = t), (t = t.child);
      }
      if (!(t.flags & 2)) return t.stateNode;
    }
  }
  function fu(t, n, a) {
    var i = t.tag;
    if (i === 5 || i === 6)
      (t = t.stateNode),
        n
          ? (a.nodeType === 9
              ? a.body
              : a.nodeName === "HTML"
              ? a.ownerDocument.body
              : a
            ).insertBefore(t, n)
          : ((n =
              a.nodeType === 9
                ? a.body
                : a.nodeName === "HTML"
                ? a.ownerDocument.body
                : a),
            n.appendChild(t),
            (a = a._reactRootContainer),
            a != null || n.onclick !== null || (n.onclick = vs));
    else if (
      i !== 4 &&
      (i === 27 && wn(t.type) && ((a = t.stateNode), (n = null)),
      (t = t.child),
      t !== null)
    )
      for (fu(t, n, a), t = t.sibling; t !== null; )
        fu(t, n, a), (t = t.sibling);
  }
  function as(t, n, a) {
    var i = t.tag;
    if (i === 5 || i === 6)
      (t = t.stateNode), n ? a.insertBefore(t, n) : a.appendChild(t);
    else if (
      i !== 4 &&
      (i === 27 && wn(t.type) && (a = t.stateNode), (t = t.child), t !== null)
    )
      for (as(t, n, a), t = t.sibling; t !== null; )
        as(t, n, a), (t = t.sibling);
  }
  function oh(t) {
    var n = t.stateNode,
      a = t.memoizedProps;
    try {
      for (var i = t.type, s = n.attributes; s.length; )
        n.removeAttributeNode(s[0]);
      Ke(n, i, a), (n[We] = t), (n[et] = a);
    } catch (o) {
      Se(t, t.return, o);
    }
  }
  var Pt = !1,
    De = !1,
    hu = !1,
    ch = typeof WeakSet == "function" ? WeakSet : Set,
    $e = null;
  function J0(t, n) {
    if (((t = t.containerInfo), (ku = Ss), (t = bc(t)), cr(t))) {
      if ("selectionStart" in t)
        var a = { start: t.selectionStart, end: t.selectionEnd };
      else
        e: {
          a = ((a = t.ownerDocument) && a.defaultView) || window;
          var i = a.getSelection && a.getSelection();
          if (i && i.rangeCount !== 0) {
            a = i.anchorNode;
            var s = i.anchorOffset,
              o = i.focusNode;
            i = i.focusOffset;
            try {
              a.nodeType, o.nodeType;
            } catch {
              a = null;
              break e;
            }
            var v = 0,
              y = -1,
              b = -1,
              j = 0,
              U = 0,
              M = t,
              R = null;
            t: for (;;) {
              for (
                var x;
                M !== a || (s !== 0 && M.nodeType !== 3) || (y = v + s),
                  M !== o || (i !== 0 && M.nodeType !== 3) || (b = v + i),
                  M.nodeType === 3 && (v += M.nodeValue.length),
                  (x = M.firstChild) !== null;

              )
                (R = M), (M = x);
              for (;;) {
                if (M === t) break t;
                if (
                  (R === a && ++j === s && (y = v),
                  R === o && ++U === i && (b = v),
                  (x = M.nextSibling) !== null)
                )
                  break;
                (M = R), (R = M.parentNode);
              }
              M = x;
            }
            a = y === -1 || b === -1 ? null : { start: y, end: b };
          } else a = null;
        }
      a = a || { start: 0, end: 0 };
    } else a = null;
    for (
      qu = { focusedElem: t, selectionRange: a }, Ss = !1, $e = n;
      $e !== null;

    )
      if (
        ((n = $e), (t = n.child), (n.subtreeFlags & 1024) !== 0 && t !== null)
      )
        (t.return = n), ($e = t);
      else
        for (; $e !== null; ) {
          switch (((n = $e), (o = n.alternate), (t = n.flags), n.tag)) {
            case 0:
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((t & 1024) !== 0 && o !== null) {
                (t = void 0),
                  (a = n),
                  (s = o.memoizedProps),
                  (o = o.memoizedState),
                  (i = a.stateNode);
                try {
                  var F = Zn(a.type, s, a.elementType === a.type);
                  (t = i.getSnapshotBeforeUpdate(F, o)),
                    (i.__reactInternalSnapshotBeforeUpdate = t);
                } catch (J) {
                  Se(a, a.return, J);
                }
              }
              break;
            case 3:
              if ((t & 1024) !== 0) {
                if (
                  ((t = n.stateNode.containerInfo), (a = t.nodeType), a === 9)
                )
                  Lu(t);
                else if (a === 1)
                  switch (t.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      Lu(t);
                      break;
                    default:
                      t.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((t & 1024) !== 0) throw Error(r(163));
          }
          if (((t = n.sibling), t !== null)) {
            (t.return = n.return), ($e = t);
            break;
          }
          $e = n.return;
        }
  }
  function fh(t, n, a) {
    var i = a.flags;
    switch (a.tag) {
      case 0:
      case 11:
      case 15:
        gn(t, a), i & 4 && qi(5, a);
        break;
      case 1:
        if ((gn(t, a), i & 4))
          if (((t = a.stateNode), n === null))
            try {
              t.componentDidMount();
            } catch (v) {
              Se(a, a.return, v);
            }
          else {
            var s = Zn(a.type, n.memoizedProps);
            n = n.memoizedState;
            try {
              t.componentDidUpdate(s, n, t.__reactInternalSnapshotBeforeUpdate);
            } catch (v) {
              Se(a, a.return, v);
            }
          }
        i & 64 && lh(a), i & 512 && Bi(a, a.return);
        break;
      case 3:
        if ((gn(t, a), i & 64 && ((t = a.updateQueue), t !== null))) {
          if (((n = null), a.child !== null))
            switch (a.child.tag) {
              case 27:
              case 5:
                n = a.child.stateNode;
                break;
              case 1:
                n = a.child.stateNode;
            }
          try {
            Vc(t, n);
          } catch (v) {
            Se(a, a.return, v);
          }
        }
        break;
      case 27:
        n === null && i & 4 && oh(a);
      case 26:
      case 5:
        gn(t, a), n === null && i & 4 && rh(a), i & 512 && Bi(a, a.return);
        break;
      case 12:
        gn(t, a);
        break;
      case 13:
        gn(t, a),
          i & 4 && vh(t, a),
          i & 64 &&
            ((t = a.memoizedState),
            t !== null &&
              ((t = t.dehydrated),
              t !== null && ((a = ig.bind(null, a)), wg(t, a))));
        break;
      case 22:
        if (((i = a.memoizedState !== null || Pt), !i)) {
          (n = (n !== null && n.memoizedState !== null) || De), (s = Pt);
          var o = De;
          (Pt = i),
            (De = n) && !o ? yn(t, a, (a.subtreeFlags & 8772) !== 0) : gn(t, a),
            (Pt = s),
            (De = o);
        }
        break;
      case 30:
        break;
      default:
        gn(t, a);
    }
  }
  function hh(t) {
    var n = t.alternate;
    n !== null && ((t.alternate = null), hh(n)),
      (t.child = null),
      (t.deletions = null),
      (t.sibling = null),
      t.tag === 5 && ((n = t.stateNode), n !== null && Vs(n)),
      (t.stateNode = null),
      (t.return = null),
      (t.dependencies = null),
      (t.memoizedProps = null),
      (t.memoizedState = null),
      (t.pendingProps = null),
      (t.stateNode = null),
      (t.updateQueue = null);
  }
  var Ae = null,
    at = !1;
  function It(t, n, a) {
    for (a = a.child; a !== null; ) dh(t, n, a), (a = a.sibling);
  }
  function dh(t, n, a) {
    if (rt && typeof rt.onCommitFiberUnmount == "function")
      try {
        rt.onCommitFiberUnmount(li, a);
      } catch {}
    switch (a.tag) {
      case 26:
        De || Nt(a, n),
          It(t, n, a),
          a.memoizedState
            ? a.memoizedState.count--
            : a.stateNode && ((a = a.stateNode), a.parentNode.removeChild(a));
        break;
      case 27:
        De || Nt(a, n);
        var i = Ae,
          s = at;
        wn(a.type) && ((Ae = a.stateNode), (at = !1)),
          It(t, n, a),
          Ki(a.stateNode),
          (Ae = i),
          (at = s);
        break;
      case 5:
        De || Nt(a, n);
      case 6:
        if (
          ((i = Ae),
          (s = at),
          (Ae = null),
          It(t, n, a),
          (Ae = i),
          (at = s),
          Ae !== null)
        )
          if (at)
            try {
              (Ae.nodeType === 9
                ? Ae.body
                : Ae.nodeName === "HTML"
                ? Ae.ownerDocument.body
                : Ae
              ).removeChild(a.stateNode);
            } catch (o) {
              Se(a, n, o);
            }
          else
            try {
              Ae.removeChild(a.stateNode);
            } catch (o) {
              Se(a, n, o);
            }
        break;
      case 18:
        Ae !== null &&
          (at
            ? ((t = Ae),
              td(
                t.nodeType === 9
                  ? t.body
                  : t.nodeName === "HTML"
                  ? t.ownerDocument.body
                  : t,
                a.stateNode
              ),
              tl(t))
            : td(Ae, a.stateNode));
        break;
      case 4:
        (i = Ae),
          (s = at),
          (Ae = a.stateNode.containerInfo),
          (at = !0),
          It(t, n, a),
          (Ae = i),
          (at = s);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        De || vn(2, a, n), De || vn(4, a, n), It(t, n, a);
        break;
      case 1:
        De ||
          (Nt(a, n),
          (i = a.stateNode),
          typeof i.componentWillUnmount == "function" && sh(a, n, i)),
          It(t, n, a);
        break;
      case 21:
        It(t, n, a);
        break;
      case 22:
        (De = (i = De) || a.memoizedState !== null), It(t, n, a), (De = i);
        break;
      default:
        It(t, n, a);
    }
  }
  function vh(t, n) {
    if (
      n.memoizedState === null &&
      ((t = n.alternate),
      t !== null &&
        ((t = t.memoizedState), t !== null && ((t = t.dehydrated), t !== null)))
    )
      try {
        tl(t);
      } catch (a) {
        Se(n, n.return, a);
      }
  }
  function W0(t) {
    switch (t.tag) {
      case 13:
      case 19:
        var n = t.stateNode;
        return n === null && (n = t.stateNode = new ch()), n;
      case 22:
        return (
          (t = t.stateNode),
          (n = t._retryCache),
          n === null && (n = t._retryCache = new ch()),
          n
        );
      default:
        throw Error(r(435, t.tag));
    }
  }
  function du(t, n) {
    var a = W0(t);
    n.forEach(function (i) {
      var s = lg.bind(null, t, i);
      a.has(i) || (a.add(i), i.then(s, s));
    });
  }
  function ft(t, n) {
    var a = n.deletions;
    if (a !== null)
      for (var i = 0; i < a.length; i++) {
        var s = a[i],
          o = t,
          v = n,
          y = v;
        e: for (; y !== null; ) {
          switch (y.tag) {
            case 27:
              if (wn(y.type)) {
                (Ae = y.stateNode), (at = !1);
                break e;
              }
              break;
            case 5:
              (Ae = y.stateNode), (at = !1);
              break e;
            case 3:
            case 4:
              (Ae = y.stateNode.containerInfo), (at = !0);
              break e;
          }
          y = y.return;
        }
        if (Ae === null) throw Error(r(160));
        dh(o, v, s),
          (Ae = null),
          (at = !1),
          (o = s.alternate),
          o !== null && (o.return = null),
          (s.return = null);
      }
    if (n.subtreeFlags & 13878)
      for (n = n.child; n !== null; ) gh(n, t), (n = n.sibling);
  }
  var jt = null;
  function gh(t, n) {
    var a = t.alternate,
      i = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        ft(n, t),
          ht(t),
          i & 4 && (vn(3, t, t.return), qi(3, t), vn(5, t, t.return));
        break;
      case 1:
        ft(n, t),
          ht(t),
          i & 512 && (De || a === null || Nt(a, a.return)),
          i & 64 &&
            Pt &&
            ((t = t.updateQueue),
            t !== null &&
              ((i = t.callbacks),
              i !== null &&
                ((a = t.shared.hiddenCallbacks),
                (t.shared.hiddenCallbacks = a === null ? i : a.concat(i)))));
        break;
      case 26:
        var s = jt;
        if (
          (ft(n, t),
          ht(t),
          i & 512 && (De || a === null || Nt(a, a.return)),
          i & 4)
        ) {
          var o = a !== null ? a.memoizedState : null;
          if (((i = t.memoizedState), a === null))
            if (i === null)
              if (t.stateNode === null) {
                e: {
                  (i = t.type),
                    (a = t.memoizedProps),
                    (s = s.ownerDocument || s);
                  t: switch (i) {
                    case "title":
                      (o = s.getElementsByTagName("title")[0]),
                        (!o ||
                          o[ui] ||
                          o[We] ||
                          o.namespaceURI === "http://www.w3.org/2000/svg" ||
                          o.hasAttribute("itemprop")) &&
                          ((o = s.createElement(i)),
                          s.head.insertBefore(
                            o,
                            s.querySelector("head > title")
                          )),
                        Ke(o, i, a),
                        (o[We] = t),
                        Le(o),
                        (i = o);
                      break e;
                    case "link":
                      var v = od("link", "href", s).get(i + (a.href || ""));
                      if (v) {
                        for (var y = 0; y < v.length; y++)
                          if (
                            ((o = v[y]),
                            o.getAttribute("href") ===
                              (a.href == null || a.href === ""
                                ? null
                                : a.href) &&
                              o.getAttribute("rel") ===
                                (a.rel == null ? null : a.rel) &&
                              o.getAttribute("title") ===
                                (a.title == null ? null : a.title) &&
                              o.getAttribute("crossorigin") ===
                                (a.crossOrigin == null ? null : a.crossOrigin))
                          ) {
                            v.splice(y, 1);
                            break t;
                          }
                      }
                      (o = s.createElement(i)),
                        Ke(o, i, a),
                        s.head.appendChild(o);
                      break;
                    case "meta":
                      if (
                        (v = od("meta", "content", s).get(
                          i + (a.content || "")
                        ))
                      ) {
                        for (y = 0; y < v.length; y++)
                          if (
                            ((o = v[y]),
                            o.getAttribute("content") ===
                              (a.content == null ? null : "" + a.content) &&
                              o.getAttribute("name") ===
                                (a.name == null ? null : a.name) &&
                              o.getAttribute("property") ===
                                (a.property == null ? null : a.property) &&
                              o.getAttribute("http-equiv") ===
                                (a.httpEquiv == null ? null : a.httpEquiv) &&
                              o.getAttribute("charset") ===
                                (a.charSet == null ? null : a.charSet))
                          ) {
                            v.splice(y, 1);
                            break t;
                          }
                      }
                      (o = s.createElement(i)),
                        Ke(o, i, a),
                        s.head.appendChild(o);
                      break;
                    default:
                      throw Error(r(468, i));
                  }
                  (o[We] = t), Le(o), (i = o);
                }
                t.stateNode = i;
              } else cd(s, t.type, t.stateNode);
            else t.stateNode = ud(s, i, t.memoizedProps);
          else
            o !== i
              ? (o === null
                  ? a.stateNode !== null &&
                    ((a = a.stateNode), a.parentNode.removeChild(a))
                  : o.count--,
                i === null
                  ? cd(s, t.type, t.stateNode)
                  : ud(s, i, t.memoizedProps))
              : i === null &&
                t.stateNode !== null &&
                ou(t, t.memoizedProps, a.memoizedProps);
        }
        break;
      case 27:
        ft(n, t),
          ht(t),
          i & 512 && (De || a === null || Nt(a, a.return)),
          a !== null && i & 4 && ou(t, t.memoizedProps, a.memoizedProps);
        break;
      case 5:
        if (
          (ft(n, t),
          ht(t),
          i & 512 && (De || a === null || Nt(a, a.return)),
          t.flags & 32)
        ) {
          s = t.stateNode;
          try {
            ha(s, "");
          } catch (x) {
            Se(t, t.return, x);
          }
        }
        i & 4 &&
          t.stateNode != null &&
          ((s = t.memoizedProps), ou(t, s, a !== null ? a.memoizedProps : s)),
          i & 1024 && (hu = !0);
        break;
      case 6:
        if ((ft(n, t), ht(t), i & 4)) {
          if (t.stateNode === null) throw Error(r(162));
          (i = t.memoizedProps), (a = t.stateNode);
          try {
            a.nodeValue = i;
          } catch (x) {
            Se(t, t.return, x);
          }
        }
        break;
      case 3:
        if (
          ((_s = null),
          (s = jt),
          (jt = ys(n.containerInfo)),
          ft(n, t),
          (jt = s),
          ht(t),
          i & 4 && a !== null && a.memoizedState.isDehydrated)
        )
          try {
            tl(n.containerInfo);
          } catch (x) {
            Se(t, t.return, x);
          }
        hu && ((hu = !1), yh(t));
        break;
      case 4:
        (i = jt),
          (jt = ys(t.stateNode.containerInfo)),
          ft(n, t),
          ht(t),
          (jt = i);
        break;
      case 12:
        ft(n, t), ht(t);
        break;
      case 13:
        ft(n, t),
          ht(t),
          t.child.flags & 8192 &&
            (t.memoizedState !== null) !=
              (a !== null && a.memoizedState !== null) &&
            (pu = Dt()),
          i & 4 &&
            ((i = t.updateQueue),
            i !== null && ((t.updateQueue = null), du(t, i)));
        break;
      case 22:
        s = t.memoizedState !== null;
        var b = a !== null && a.memoizedState !== null,
          j = Pt,
          U = De;
        if (
          ((Pt = j || s),
          (De = U || b),
          ft(n, t),
          (De = U),
          (Pt = j),
          ht(t),
          i & 8192)
        )
          e: for (
            n = t.stateNode,
              n._visibility = s ? n._visibility & -2 : n._visibility | 1,
              s && (a === null || b || Pt || De || Jn(t)),
              a = null,
              n = t;
            ;

          ) {
            if (n.tag === 5 || n.tag === 26) {
              if (a === null) {
                b = a = n;
                try {
                  if (((o = b.stateNode), s))
                    (v = o.style),
                      typeof v.setProperty == "function"
                        ? v.setProperty("display", "none", "important")
                        : (v.display = "none");
                  else {
                    y = b.stateNode;
                    var M = b.memoizedProps.style,
                      R =
                        M != null && M.hasOwnProperty("display")
                          ? M.display
                          : null;
                    y.style.display =
                      R == null || typeof R == "boolean" ? "" : ("" + R).trim();
                  }
                } catch (x) {
                  Se(b, b.return, x);
                }
              }
            } else if (n.tag === 6) {
              if (a === null) {
                b = n;
                try {
                  b.stateNode.nodeValue = s ? "" : b.memoizedProps;
                } catch (x) {
                  Se(b, b.return, x);
                }
              }
            } else if (
              ((n.tag !== 22 && n.tag !== 23) ||
                n.memoizedState === null ||
                n === t) &&
              n.child !== null
            ) {
              (n.child.return = n), (n = n.child);
              continue;
            }
            if (n === t) break e;
            for (; n.sibling === null; ) {
              if (n.return === null || n.return === t) break e;
              a === n && (a = null), (n = n.return);
            }
            a === n && (a = null),
              (n.sibling.return = n.return),
              (n = n.sibling);
          }
        i & 4 &&
          ((i = t.updateQueue),
          i !== null &&
            ((a = i.retryQueue),
            a !== null && ((i.retryQueue = null), du(t, a))));
        break;
      case 19:
        ft(n, t),
          ht(t),
          i & 4 &&
            ((i = t.updateQueue),
            i !== null && ((t.updateQueue = null), du(t, i)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        ft(n, t), ht(t);
    }
  }
  function ht(t) {
    var n = t.flags;
    if (n & 2) {
      try {
        for (var a, i = t.return; i !== null; ) {
          if (uh(i)) {
            a = i;
            break;
          }
          i = i.return;
        }
        if (a == null) throw Error(r(160));
        switch (a.tag) {
          case 27:
            var s = a.stateNode,
              o = cu(t);
            as(t, o, s);
            break;
          case 5:
            var v = a.stateNode;
            a.flags & 32 && (ha(v, ""), (a.flags &= -33));
            var y = cu(t);
            as(t, y, v);
            break;
          case 3:
          case 4:
            var b = a.stateNode.containerInfo,
              j = cu(t);
            fu(t, j, b);
            break;
          default:
            throw Error(r(161));
        }
      } catch (U) {
        Se(t, t.return, U);
      }
      t.flags &= -3;
    }
    n & 4096 && (t.flags &= -4097);
  }
  function yh(t) {
    if (t.subtreeFlags & 1024)
      for (t = t.child; t !== null; ) {
        var n = t;
        yh(n),
          n.tag === 5 && n.flags & 1024 && n.stateNode.reset(),
          (t = t.sibling);
      }
  }
  function gn(t, n) {
    if (n.subtreeFlags & 8772)
      for (n = n.child; n !== null; ) fh(t, n.alternate, n), (n = n.sibling);
  }
  function Jn(t) {
    for (t = t.child; t !== null; ) {
      var n = t;
      switch (n.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          vn(4, n, n.return), Jn(n);
          break;
        case 1:
          Nt(n, n.return);
          var a = n.stateNode;
          typeof a.componentWillUnmount == "function" && sh(n, n.return, a),
            Jn(n);
          break;
        case 27:
          Ki(n.stateNode);
        case 26:
        case 5:
          Nt(n, n.return), Jn(n);
          break;
        case 22:
          n.memoizedState === null && Jn(n);
          break;
        case 30:
          Jn(n);
          break;
        default:
          Jn(n);
      }
      t = t.sibling;
    }
  }
  function yn(t, n, a) {
    for (a = a && (n.subtreeFlags & 8772) !== 0, n = n.child; n !== null; ) {
      var i = n.alternate,
        s = t,
        o = n,
        v = o.flags;
      switch (o.tag) {
        case 0:
        case 11:
        case 15:
          yn(s, o, a), qi(4, o);
          break;
        case 1:
          if (
            (yn(s, o, a),
            (i = o),
            (s = i.stateNode),
            typeof s.componentDidMount == "function")
          )
            try {
              s.componentDidMount();
            } catch (j) {
              Se(i, i.return, j);
            }
          if (((i = o), (s = i.updateQueue), s !== null)) {
            var y = i.stateNode;
            try {
              var b = s.shared.hiddenCallbacks;
              if (b !== null)
                for (s.shared.hiddenCallbacks = null, s = 0; s < b.length; s++)
                  Qc(b[s], y);
            } catch (j) {
              Se(i, i.return, j);
            }
          }
          a && v & 64 && lh(o), Bi(o, o.return);
          break;
        case 27:
          oh(o);
        case 26:
        case 5:
          yn(s, o, a), a && i === null && v & 4 && rh(o), Bi(o, o.return);
          break;
        case 12:
          yn(s, o, a);
          break;
        case 13:
          yn(s, o, a), a && v & 4 && vh(s, o);
          break;
        case 22:
          o.memoizedState === null && yn(s, o, a), Bi(o, o.return);
          break;
        case 30:
          break;
        default:
          yn(s, o, a);
      }
      n = n.sibling;
    }
  }
  function vu(t, n) {
    var a = null;
    t !== null &&
      t.memoizedState !== null &&
      t.memoizedState.cachePool !== null &&
      (a = t.memoizedState.cachePool.pool),
      (t = null),
      n.memoizedState !== null &&
        n.memoizedState.cachePool !== null &&
        (t = n.memoizedState.cachePool.pool),
      t !== a && (t != null && t.refCount++, a != null && Ei(a));
  }
  function gu(t, n) {
    (t = null),
      n.alternate !== null && (t = n.alternate.memoizedState.cache),
      (n = n.memoizedState.cache),
      n !== t && (n.refCount++, t != null && Ei(t));
  }
  function zt(t, n, a, i) {
    if (n.subtreeFlags & 10256)
      for (n = n.child; n !== null; ) mh(t, n, a, i), (n = n.sibling);
  }
  function mh(t, n, a, i) {
    var s = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        zt(t, n, a, i), s & 2048 && qi(9, n);
        break;
      case 1:
        zt(t, n, a, i);
        break;
      case 3:
        zt(t, n, a, i),
          s & 2048 &&
            ((t = null),
            n.alternate !== null && (t = n.alternate.memoizedState.cache),
            (n = n.memoizedState.cache),
            n !== t && (n.refCount++, t != null && Ei(t)));
        break;
      case 12:
        if (s & 2048) {
          zt(t, n, a, i), (t = n.stateNode);
          try {
            var o = n.memoizedProps,
              v = o.id,
              y = o.onPostCommit;
            typeof y == "function" &&
              y(
                v,
                n.alternate === null ? "mount" : "update",
                t.passiveEffectDuration,
                -0
              );
          } catch (b) {
            Se(n, n.return, b);
          }
        } else zt(t, n, a, i);
        break;
      case 13:
        zt(t, n, a, i);
        break;
      case 23:
        break;
      case 22:
        (o = n.stateNode),
          (v = n.alternate),
          n.memoizedState !== null
            ? o._visibility & 2
              ? zt(t, n, a, i)
              : Hi(t, n)
            : o._visibility & 2
            ? zt(t, n, a, i)
            : ((o._visibility |= 2),
              Da(t, n, a, i, (n.subtreeFlags & 10256) !== 0)),
          s & 2048 && vu(v, n);
        break;
      case 24:
        zt(t, n, a, i), s & 2048 && gu(n.alternate, n);
        break;
      default:
        zt(t, n, a, i);
    }
  }
  function Da(t, n, a, i, s) {
    for (s = s && (n.subtreeFlags & 10256) !== 0, n = n.child; n !== null; ) {
      var o = t,
        v = n,
        y = a,
        b = i,
        j = v.flags;
      switch (v.tag) {
        case 0:
        case 11:
        case 15:
          Da(o, v, y, b, s), qi(8, v);
          break;
        case 23:
          break;
        case 22:
          var U = v.stateNode;
          v.memoizedState !== null
            ? U._visibility & 2
              ? Da(o, v, y, b, s)
              : Hi(o, v)
            : ((U._visibility |= 2), Da(o, v, y, b, s)),
            s && j & 2048 && vu(v.alternate, v);
          break;
        case 24:
          Da(o, v, y, b, s), s && j & 2048 && gu(v.alternate, v);
          break;
        default:
          Da(o, v, y, b, s);
      }
      n = n.sibling;
    }
  }
  function Hi(t, n) {
    if (n.subtreeFlags & 10256)
      for (n = n.child; n !== null; ) {
        var a = t,
          i = n,
          s = i.flags;
        switch (i.tag) {
          case 22:
            Hi(a, i), s & 2048 && vu(i.alternate, i);
            break;
          case 24:
            Hi(a, i), s & 2048 && gu(i.alternate, i);
            break;
          default:
            Hi(a, i);
        }
        n = n.sibling;
      }
  }
  var Li = 8192;
  function Ca(t) {
    if (t.subtreeFlags & Li)
      for (t = t.child; t !== null; ) _h(t), (t = t.sibling);
  }
  function _h(t) {
    switch (t.tag) {
      case 26:
        Ca(t),
          t.flags & Li &&
            t.memoizedState !== null &&
            zg(jt, t.memoizedState, t.memoizedProps);
        break;
      case 5:
        Ca(t);
        break;
      case 3:
      case 4:
        var n = jt;
        (jt = ys(t.stateNode.containerInfo)), Ca(t), (jt = n);
        break;
      case 22:
        t.memoizedState === null &&
          ((n = t.alternate),
          n !== null && n.memoizedState !== null
            ? ((n = Li), (Li = 16777216), Ca(t), (Li = n))
            : Ca(t));
        break;
      default:
        Ca(t);
    }
  }
  function ph(t) {
    var n = t.alternate;
    if (n !== null && ((t = n.child), t !== null)) {
      n.child = null;
      do (n = t.sibling), (t.sibling = null), (t = n);
      while (t !== null);
    }
  }
  function Gi(t) {
    var n = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (n !== null)
        for (var a = 0; a < n.length; a++) {
          var i = n[a];
          ($e = i), Sh(i, t);
        }
      ph(t);
    }
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) bh(t), (t = t.sibling);
  }
  function bh(t) {
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        Gi(t), t.flags & 2048 && vn(9, t, t.return);
        break;
      case 3:
        Gi(t);
        break;
      case 12:
        Gi(t);
        break;
      case 22:
        var n = t.stateNode;
        t.memoizedState !== null &&
        n._visibility & 2 &&
        (t.return === null || t.return.tag !== 13)
          ? ((n._visibility &= -3), is(t))
          : Gi(t);
        break;
      default:
        Gi(t);
    }
  }
  function is(t) {
    var n = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (n !== null)
        for (var a = 0; a < n.length; a++) {
          var i = n[a];
          ($e = i), Sh(i, t);
        }
      ph(t);
    }
    for (t = t.child; t !== null; ) {
      switch (((n = t), n.tag)) {
        case 0:
        case 11:
        case 15:
          vn(8, n, n.return), is(n);
          break;
        case 22:
          (a = n.stateNode),
            a._visibility & 2 && ((a._visibility &= -3), is(n));
          break;
        default:
          is(n);
      }
      t = t.sibling;
    }
  }
  function Sh(t, n) {
    for (; $e !== null; ) {
      var a = $e;
      switch (a.tag) {
        case 0:
        case 11:
        case 15:
          vn(8, a, n);
          break;
        case 23:
        case 22:
          if (a.memoizedState !== null && a.memoizedState.cachePool !== null) {
            var i = a.memoizedState.cachePool.pool;
            i != null && i.refCount++;
          }
          break;
        case 24:
          Ei(a.memoizedState.cache);
      }
      if (((i = a.child), i !== null)) (i.return = a), ($e = i);
      else
        e: for (a = t; $e !== null; ) {
          i = $e;
          var s = i.sibling,
            o = i.return;
          if ((hh(i), i === a)) {
            $e = null;
            break e;
          }
          if (s !== null) {
            (s.return = o), ($e = s);
            break e;
          }
          $e = o;
        }
    }
  }
  var P0 = {
      getCacheForType: function (t) {
        var n = Pe(ke),
          a = n.data.get(t);
        return a === void 0 && ((a = t()), n.data.set(t, a)), a;
      },
    },
    I0 = typeof WeakMap == "function" ? WeakMap : Map,
    ge = 0,
    we = null,
    ue = null,
    ce = 0,
    ye = 0,
    dt = null,
    mn = !1,
    Ma = !1,
    yu = !1,
    Ft = 0,
    xe = 0,
    _n = 0,
    Wn = 0,
    mu = 0,
    Et = 0,
    Na = 0,
    $i = null,
    it = null,
    _u = !1,
    pu = 0,
    ls = 1 / 0,
    ss = null,
    pn = null,
    Xe = 0,
    bn = null,
    za = null,
    ka = 0,
    bu = 0,
    Su = null,
    wh = null,
    Yi = 0,
    wu = null;
  function vt() {
    if ((ge & 2) !== 0 && ce !== 0) return ce & -ce;
    if (D.T !== null) {
      var t = Ea;
      return t !== 0 ? t : xu();
    }
    return qo();
  }
  function Eh() {
    Et === 0 && (Et = (ce & 536870912) === 0 || ve ? Mo() : 536870912);
    var t = wt.current;
    return t !== null && (t.flags |= 32), Et;
  }
  function gt(t, n, a) {
    ((t === we && (ye === 2 || ye === 9)) || t.cancelPendingCommit !== null) &&
      (qa(t, 0), Sn(t, ce, Et, !1)),
      ri(t, a),
      ((ge & 2) === 0 || t !== we) &&
        (t === we &&
          ((ge & 2) === 0 && (Wn |= a), xe === 4 && Sn(t, ce, Et, !1)),
        kt(t));
  }
  function Th(t, n, a) {
    if ((ge & 6) !== 0) throw Error(r(327));
    var i = (!a && (n & 124) === 0 && (n & t.expiredLanes) === 0) || si(t, n),
      s = i ? tg(t, n) : Au(t, n, !0),
      o = i;
    do {
      if (s === 0) {
        Ma && !i && Sn(t, n, 0, !1);
        break;
      } else {
        if (((a = t.current.alternate), o && !F0(a))) {
          (s = Au(t, n, !1)), (o = !1);
          continue;
        }
        if (s === 2) {
          if (((o = n), t.errorRecoveryDisabledLanes & o)) var v = 0;
          else
            (v = t.pendingLanes & -536870913),
              (v = v !== 0 ? v : v & 536870912 ? 536870912 : 0);
          if (v !== 0) {
            n = v;
            e: {
              var y = t;
              s = $i;
              var b = y.current.memoizedState.isDehydrated;
              if ((b && (qa(y, v).flags |= 256), (v = Au(y, v, !1)), v !== 2)) {
                if (yu && !b) {
                  (y.errorRecoveryDisabledLanes |= o), (Wn |= o), (s = 4);
                  break e;
                }
                (o = it),
                  (it = s),
                  o !== null && (it === null ? (it = o) : it.push.apply(it, o));
              }
              s = v;
            }
            if (((o = !1), s !== 2)) continue;
          }
        }
        if (s === 1) {
          qa(t, 0), Sn(t, n, 0, !0);
          break;
        }
        e: {
          switch (((i = t), (o = s), o)) {
            case 0:
            case 1:
              throw Error(r(345));
            case 4:
              if ((n & 4194048) !== n) break;
            case 6:
              Sn(i, n, Et, !mn);
              break e;
            case 2:
              it = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(r(329));
          }
          if ((n & 62914560) === n && ((s = pu + 300 - Dt()), 10 < s)) {
            if ((Sn(i, n, Et, !mn), ml(i, 0, !0) !== 0)) break e;
            i.timeoutHandle = Fh(
              Ah.bind(null, i, a, it, ss, _u, n, Et, Wn, Na, mn, o, 2, -0, 0),
              s
            );
            break e;
          }
          Ah(i, a, it, ss, _u, n, Et, Wn, Na, mn, o, 0, -0, 0);
        }
      }
      break;
    } while (!0);
    kt(t);
  }
  function Ah(t, n, a, i, s, o, v, y, b, j, U, M, R, x) {
    if (
      ((t.timeoutHandle = -1),
      (M = n.subtreeFlags),
      (M & 8192 || (M & 16785408) === 16785408) &&
        ((Wi = { stylesheets: null, count: 0, unsuspend: Ng }),
        _h(n),
        (M = kg()),
        M !== null))
    ) {
      (t.cancelPendingCommit = M(
        Ch.bind(null, t, n, o, a, i, s, v, y, b, U, 1, R, x)
      )),
        Sn(t, o, v, !j);
      return;
    }
    Ch(t, n, o, a, i, s, v, y, b);
  }
  function F0(t) {
    for (var n = t; ; ) {
      var a = n.tag;
      if (
        (a === 0 || a === 11 || a === 15) &&
        n.flags & 16384 &&
        ((a = n.updateQueue), a !== null && ((a = a.stores), a !== null))
      )
        for (var i = 0; i < a.length; i++) {
          var s = a[i],
            o = s.getSnapshot;
          s = s.value;
          try {
            if (!ot(o(), s)) return !1;
          } catch {
            return !1;
          }
        }
      if (((a = n.child), n.subtreeFlags & 16384 && a !== null))
        (a.return = n), (n = a);
      else {
        if (n === t) break;
        for (; n.sibling === null; ) {
          if (n.return === null || n.return === t) return !0;
          n = n.return;
        }
        (n.sibling.return = n.return), (n = n.sibling);
      }
    }
    return !0;
  }
  function Sn(t, n, a, i) {
    (n &= ~mu),
      (n &= ~Wn),
      (t.suspendedLanes |= n),
      (t.pingedLanes &= ~n),
      i && (t.warmLanes |= n),
      (i = t.expirationTimes);
    for (var s = n; 0 < s; ) {
      var o = 31 - ut(s),
        v = 1 << o;
      (i[o] = -1), (s &= ~v);
    }
    a !== 0 && zo(t, a, n);
  }
  function rs() {
    return (ge & 6) === 0 ? (Qi(0), !1) : !0;
  }
  function Eu() {
    if (ue !== null) {
      if (ye === 0) var t = ue.return;
      else (t = ue), (Vt = Qn = null), Lr(t), (xa = null), (Ni = 0), (t = ue);
      for (; t !== null; ) ih(t.alternate, t), (t = t.return);
      ue = null;
    }
  }
  function qa(t, n) {
    var a = t.timeoutHandle;
    a !== -1 && ((t.timeoutHandle = -1), mg(a)),
      (a = t.cancelPendingCommit),
      a !== null && ((t.cancelPendingCommit = null), a()),
      Eu(),
      (we = t),
      (ue = a = $t(t.current, null)),
      (ce = n),
      (ye = 0),
      (dt = null),
      (mn = !1),
      (Ma = si(t, n)),
      (yu = !1),
      (Na = Et = mu = Wn = _n = xe = 0),
      (it = $i = null),
      (_u = !1),
      (n & 8) !== 0 && (n |= n & 32);
    var i = t.entangledLanes;
    if (i !== 0)
      for (t = t.entanglements, i &= n; 0 < i; ) {
        var s = 31 - ut(i),
          o = 1 << s;
        (n |= t[s]), (i &= ~o);
      }
    return (Ft = n), xl(), a;
  }
  function Oh(t, n) {
    (le = null),
      (D.H = Zl),
      n === Ai || n === Bl
        ? ((n = $c()), (ye = 3))
        : n === Hc
        ? ((n = $c()), (ye = 4))
        : (ye =
            n === Qf
              ? 8
              : n !== null &&
                typeof n == "object" &&
                typeof n.then == "function"
              ? 6
              : 1),
      (dt = n),
      ue === null && ((xe = 1), Fl(t, _t(n, t.current)));
  }
  function jh() {
    var t = D.H;
    return (D.H = Zl), t === null ? Zl : t;
  }
  function Rh() {
    var t = D.A;
    return (D.A = P0), t;
  }
  function Tu() {
    (xe = 4),
      mn || ((ce & 4194048) !== ce && wt.current !== null) || (Ma = !0),
      ((_n & 134217727) === 0 && (Wn & 134217727) === 0) ||
        we === null ||
        Sn(we, ce, Et, !1);
  }
  function Au(t, n, a) {
    var i = ge;
    ge |= 2;
    var s = jh(),
      o = Rh();
    (we !== t || ce !== n) && ((ss = null), qa(t, n)), (n = !1);
    var v = xe;
    e: do
      try {
        if (ye !== 0 && ue !== null) {
          var y = ue,
            b = dt;
          switch (ye) {
            case 8:
              Eu(), (v = 6);
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              wt.current === null && (n = !0);
              var j = ye;
              if (((ye = 0), (dt = null), Ba(t, y, b, j), a && Ma)) {
                v = 0;
                break e;
              }
              break;
            default:
              (j = ye), (ye = 0), (dt = null), Ba(t, y, b, j);
          }
        }
        eg(), (v = xe);
        break;
      } catch (U) {
        Oh(t, U);
      }
    while (!0);
    return (
      n && t.shellSuspendCounter++,
      (Vt = Qn = null),
      (ge = i),
      (D.H = s),
      (D.A = o),
      ue === null && ((we = null), (ce = 0), xl()),
      v
    );
  }
  function eg() {
    for (; ue !== null; ) xh(ue);
  }
  function tg(t, n) {
    var a = ge;
    ge |= 2;
    var i = jh(),
      s = Rh();
    we !== t || ce !== n
      ? ((ss = null), (ls = Dt() + 500), qa(t, n))
      : (Ma = si(t, n));
    e: do
      try {
        if (ye !== 0 && ue !== null) {
          n = ue;
          var o = dt;
          t: switch (ye) {
            case 1:
              (ye = 0), (dt = null), Ba(t, n, o, 1);
              break;
            case 2:
            case 9:
              if (Lc(o)) {
                (ye = 0), (dt = null), Uh(n);
                break;
              }
              (n = function () {
                (ye !== 2 && ye !== 9) || we !== t || (ye = 7), kt(t);
              }),
                o.then(n, n);
              break e;
            case 3:
              ye = 7;
              break e;
            case 4:
              ye = 5;
              break e;
            case 7:
              Lc(o)
                ? ((ye = 0), (dt = null), Uh(n))
                : ((ye = 0), (dt = null), Ba(t, n, o, 7));
              break;
            case 5:
              var v = null;
              switch (ue.tag) {
                case 26:
                  v = ue.memoizedState;
                case 5:
                case 27:
                  var y = ue;
                  if (!v || fd(v)) {
                    (ye = 0), (dt = null);
                    var b = y.sibling;
                    if (b !== null) ue = b;
                    else {
                      var j = y.return;
                      j !== null ? ((ue = j), us(j)) : (ue = null);
                    }
                    break t;
                  }
              }
              (ye = 0), (dt = null), Ba(t, n, o, 5);
              break;
            case 6:
              (ye = 0), (dt = null), Ba(t, n, o, 6);
              break;
            case 8:
              Eu(), (xe = 6);
              break e;
            default:
              throw Error(r(462));
          }
        }
        ng();
        break;
      } catch (U) {
        Oh(t, U);
      }
    while (!0);
    return (
      (Vt = Qn = null),
      (D.H = i),
      (D.A = s),
      (ge = a),
      ue !== null ? 0 : ((we = null), (ce = 0), xl(), xe)
    );
  }
  function ng() {
    for (; ue !== null && !Tv(); ) xh(ue);
  }
  function xh(t) {
    var n = nh(t.alternate, t, Ft);
    (t.memoizedProps = t.pendingProps), n === null ? us(t) : (ue = n);
  }
  function Uh(t) {
    var n = t,
      a = n.alternate;
    switch (n.tag) {
      case 15:
      case 0:
        n = Wf(a, n, n.pendingProps, n.type, void 0, ce);
        break;
      case 11:
        n = Wf(a, n, n.pendingProps, n.type.render, n.ref, ce);
        break;
      case 5:
        Lr(n);
      default:
        ih(a, n), (n = ue = Uc(n, Ft)), (n = nh(a, n, Ft));
    }
    (t.memoizedProps = t.pendingProps), n === null ? us(t) : (ue = n);
  }
  function Ba(t, n, a, i) {
    (Vt = Qn = null), Lr(n), (xa = null), (Ni = 0);
    var s = n.return;
    try {
      if (V0(t, s, n, a, ce)) {
        (xe = 1), Fl(t, _t(a, t.current)), (ue = null);
        return;
      }
    } catch (o) {
      if (s !== null) throw ((ue = s), o);
      (xe = 1), Fl(t, _t(a, t.current)), (ue = null);
      return;
    }
    n.flags & 32768
      ? (ve || i === 1
          ? (t = !0)
          : Ma || (ce & 536870912) !== 0
          ? (t = !1)
          : ((mn = t = !0),
            (i === 2 || i === 9 || i === 3 || i === 6) &&
              ((i = wt.current),
              i !== null && i.tag === 13 && (i.flags |= 16384))),
        Dh(n, t))
      : us(n);
  }
  function us(t) {
    var n = t;
    do {
      if ((n.flags & 32768) !== 0) {
        Dh(n, mn);
        return;
      }
      t = n.return;
      var a = K0(n.alternate, n, Ft);
      if (a !== null) {
        ue = a;
        return;
      }
      if (((n = n.sibling), n !== null)) {
        ue = n;
        return;
      }
      ue = n = t;
    } while (n !== null);
    xe === 0 && (xe = 5);
  }
  function Dh(t, n) {
    do {
      var a = Z0(t.alternate, t);
      if (a !== null) {
        (a.flags &= 32767), (ue = a);
        return;
      }
      if (
        ((a = t.return),
        a !== null &&
          ((a.flags |= 32768), (a.subtreeFlags = 0), (a.deletions = null)),
        !n && ((t = t.sibling), t !== null))
      ) {
        ue = t;
        return;
      }
      ue = t = a;
    } while (t !== null);
    (xe = 6), (ue = null);
  }
  function Ch(t, n, a, i, s, o, v, y, b) {
    t.cancelPendingCommit = null;
    do os();
    while (Xe !== 0);
    if ((ge & 6) !== 0) throw Error(r(327));
    if (n !== null) {
      if (n === t.current) throw Error(r(177));
      if (
        ((o = n.lanes | n.childLanes),
        (o |= gr),
        Nv(t, a, o, v, y, b),
        t === we && ((ue = we = null), (ce = 0)),
        (za = n),
        (bn = t),
        (ka = a),
        (bu = o),
        (Su = s),
        (wh = i),
        (n.subtreeFlags & 10256) !== 0 || (n.flags & 10256) !== 0
          ? ((t.callbackNode = null),
            (t.callbackPriority = 0),
            sg(vl, function () {
              return qh(), null;
            }))
          : ((t.callbackNode = null), (t.callbackPriority = 0)),
        (i = (n.flags & 13878) !== 0),
        (n.subtreeFlags & 13878) !== 0 || i)
      ) {
        (i = D.T), (D.T = null), (s = $.p), ($.p = 2), (v = ge), (ge |= 4);
        try {
          J0(t, n, a);
        } finally {
          (ge = v), ($.p = s), (D.T = i);
        }
      }
      (Xe = 1), Mh(), Nh(), zh();
    }
  }
  function Mh() {
    if (Xe === 1) {
      Xe = 0;
      var t = bn,
        n = za,
        a = (n.flags & 13878) !== 0;
      if ((n.subtreeFlags & 13878) !== 0 || a) {
        (a = D.T), (D.T = null);
        var i = $.p;
        $.p = 2;
        var s = ge;
        ge |= 4;
        try {
          gh(n, t);
          var o = qu,
            v = bc(t.containerInfo),
            y = o.focusedElem,
            b = o.selectionRange;
          if (
            v !== y &&
            y &&
            y.ownerDocument &&
            pc(y.ownerDocument.documentElement, y)
          ) {
            if (b !== null && cr(y)) {
              var j = b.start,
                U = b.end;
              if ((U === void 0 && (U = j), "selectionStart" in y))
                (y.selectionStart = j),
                  (y.selectionEnd = Math.min(U, y.value.length));
              else {
                var M = y.ownerDocument || document,
                  R = (M && M.defaultView) || window;
                if (R.getSelection) {
                  var x = R.getSelection(),
                    F = y.textContent.length,
                    J = Math.min(b.start, F),
                    pe = b.end === void 0 ? J : Math.min(b.end, F);
                  !x.extend && J > pe && ((v = pe), (pe = J), (J = v));
                  var T = _c(y, J),
                    w = _c(y, pe);
                  if (
                    T &&
                    w &&
                    (x.rangeCount !== 1 ||
                      x.anchorNode !== T.node ||
                      x.anchorOffset !== T.offset ||
                      x.focusNode !== w.node ||
                      x.focusOffset !== w.offset)
                  ) {
                    var A = M.createRange();
                    A.setStart(T.node, T.offset),
                      x.removeAllRanges(),
                      J > pe
                        ? (x.addRange(A), x.extend(w.node, w.offset))
                        : (A.setEnd(w.node, w.offset), x.addRange(A));
                  }
                }
              }
            }
            for (M = [], x = y; (x = x.parentNode); )
              x.nodeType === 1 &&
                M.push({ element: x, left: x.scrollLeft, top: x.scrollTop });
            for (
              typeof y.focus == "function" && y.focus(), y = 0;
              y < M.length;
              y++
            ) {
              var C = M[y];
              (C.element.scrollLeft = C.left), (C.element.scrollTop = C.top);
            }
          }
          (Ss = !!ku), (qu = ku = null);
        } finally {
          (ge = s), ($.p = i), (D.T = a);
        }
      }
      (t.current = n), (Xe = 2);
    }
  }
  function Nh() {
    if (Xe === 2) {
      Xe = 0;
      var t = bn,
        n = za,
        a = (n.flags & 8772) !== 0;
      if ((n.subtreeFlags & 8772) !== 0 || a) {
        (a = D.T), (D.T = null);
        var i = $.p;
        $.p = 2;
        var s = ge;
        ge |= 4;
        try {
          fh(t, n.alternate, n);
        } finally {
          (ge = s), ($.p = i), (D.T = a);
        }
      }
      Xe = 3;
    }
  }
  function zh() {
    if (Xe === 4 || Xe === 3) {
      (Xe = 0), Av();
      var t = bn,
        n = za,
        a = ka,
        i = wh;
      (n.subtreeFlags & 10256) !== 0 || (n.flags & 10256) !== 0
        ? (Xe = 5)
        : ((Xe = 0), (za = bn = null), kh(t, t.pendingLanes));
      var s = t.pendingLanes;
      if (
        (s === 0 && (pn = null),
        Ys(a),
        (n = n.stateNode),
        rt && typeof rt.onCommitFiberRoot == "function")
      )
        try {
          rt.onCommitFiberRoot(li, n, void 0, (n.current.flags & 128) === 128);
        } catch {}
      if (i !== null) {
        (n = D.T), (s = $.p), ($.p = 2), (D.T = null);
        try {
          for (var o = t.onRecoverableError, v = 0; v < i.length; v++) {
            var y = i[v];
            o(y.value, { componentStack: y.stack });
          }
        } finally {
          (D.T = n), ($.p = s);
        }
      }
      (ka & 3) !== 0 && os(),
        kt(t),
        (s = t.pendingLanes),
        (a & 4194090) !== 0 && (s & 42) !== 0
          ? t === wu
            ? Yi++
            : ((Yi = 0), (wu = t))
          : (Yi = 0),
        Qi(0);
    }
  }
  function kh(t, n) {
    (t.pooledCacheLanes &= n) === 0 &&
      ((n = t.pooledCache), n != null && ((t.pooledCache = null), Ei(n)));
  }
  function os(t) {
    return Mh(), Nh(), zh(), qh();
  }
  function qh() {
    if (Xe !== 5) return !1;
    var t = bn,
      n = bu;
    bu = 0;
    var a = Ys(ka),
      i = D.T,
      s = $.p;
    try {
      ($.p = 32 > a ? 32 : a), (D.T = null), (a = Su), (Su = null);
      var o = bn,
        v = ka;
      if (((Xe = 0), (za = bn = null), (ka = 0), (ge & 6) !== 0))
        throw Error(r(331));
      var y = ge;
      if (
        ((ge |= 4),
        bh(o.current),
        mh(o, o.current, v, a),
        (ge = y),
        Qi(0, !1),
        rt && typeof rt.onPostCommitFiberRoot == "function")
      )
        try {
          rt.onPostCommitFiberRoot(li, o);
        } catch {}
      return !0;
    } finally {
      ($.p = s), (D.T = i), kh(t, n);
    }
  }
  function Bh(t, n, a) {
    (n = _t(a, n)),
      (n = eu(t.stateNode, n, 2)),
      (t = cn(t, n, 2)),
      t !== null && (ri(t, 2), kt(t));
  }
  function Se(t, n, a) {
    if (t.tag === 3) Bh(t, t, a);
    else
      for (; n !== null; ) {
        if (n.tag === 3) {
          Bh(n, t, a);
          break;
        } else if (n.tag === 1) {
          var i = n.stateNode;
          if (
            typeof n.type.getDerivedStateFromError == "function" ||
            (typeof i.componentDidCatch == "function" &&
              (pn === null || !pn.has(i)))
          ) {
            (t = _t(a, t)),
              (a = $f(2)),
              (i = cn(n, a, 2)),
              i !== null && (Yf(a, i, n, t), ri(i, 2), kt(i));
            break;
          }
        }
        n = n.return;
      }
  }
  function Ou(t, n, a) {
    var i = t.pingCache;
    if (i === null) {
      i = t.pingCache = new I0();
      var s = new Set();
      i.set(n, s);
    } else (s = i.get(n)), s === void 0 && ((s = new Set()), i.set(n, s));
    s.has(a) ||
      ((yu = !0), s.add(a), (t = ag.bind(null, t, n, a)), n.then(t, t));
  }
  function ag(t, n, a) {
    var i = t.pingCache;
    i !== null && i.delete(n),
      (t.pingedLanes |= t.suspendedLanes & a),
      (t.warmLanes &= ~a),
      we === t &&
        (ce & a) === a &&
        (xe === 4 || (xe === 3 && (ce & 62914560) === ce && 300 > Dt() - pu)
          ? (ge & 2) === 0 && qa(t, 0)
          : (mu |= a),
        Na === ce && (Na = 0)),
      kt(t);
  }
  function Hh(t, n) {
    n === 0 && (n = No()), (t = pa(t, n)), t !== null && (ri(t, n), kt(t));
  }
  function ig(t) {
    var n = t.memoizedState,
      a = 0;
    n !== null && (a = n.retryLane), Hh(t, a);
  }
  function lg(t, n) {
    var a = 0;
    switch (t.tag) {
      case 13:
        var i = t.stateNode,
          s = t.memoizedState;
        s !== null && (a = s.retryLane);
        break;
      case 19:
        i = t.stateNode;
        break;
      case 22:
        i = t.stateNode._retryCache;
        break;
      default:
        throw Error(r(314));
    }
    i !== null && i.delete(n), Hh(t, a);
  }
  function sg(t, n) {
    return Hs(t, n);
  }
  var cs = null,
    Ha = null,
    ju = !1,
    fs = !1,
    Ru = !1,
    Pn = 0;
  function kt(t) {
    t !== Ha &&
      t.next === null &&
      (Ha === null ? (cs = Ha = t) : (Ha = Ha.next = t)),
      (fs = !0),
      ju || ((ju = !0), ug());
  }
  function Qi(t, n) {
    if (!Ru && fs) {
      Ru = !0;
      do
        for (var a = !1, i = cs; i !== null; ) {
          if (t !== 0) {
            var s = i.pendingLanes;
            if (s === 0) var o = 0;
            else {
              var v = i.suspendedLanes,
                y = i.pingedLanes;
              (o = (1 << (31 - ut(42 | t) + 1)) - 1),
                (o &= s & ~(v & ~y)),
                (o = o & 201326741 ? (o & 201326741) | 1 : o ? o | 2 : 0);
            }
            o !== 0 && ((a = !0), Yh(i, o));
          } else
            (o = ce),
              (o = ml(
                i,
                i === we ? o : 0,
                i.cancelPendingCommit !== null || i.timeoutHandle !== -1
              )),
              (o & 3) === 0 || si(i, o) || ((a = !0), Yh(i, o));
          i = i.next;
        }
      while (a);
      Ru = !1;
    }
  }
  function rg() {
    Lh();
  }
  function Lh() {
    fs = ju = !1;
    var t = 0;
    Pn !== 0 && (yg() && (t = Pn), (Pn = 0));
    for (var n = Dt(), a = null, i = cs; i !== null; ) {
      var s = i.next,
        o = Gh(i, n);
      o === 0
        ? ((i.next = null),
          a === null ? (cs = s) : (a.next = s),
          s === null && (Ha = a))
        : ((a = i), (t !== 0 || (o & 3) !== 0) && (fs = !0)),
        (i = s);
    }
    Qi(t);
  }
  function Gh(t, n) {
    for (
      var a = t.suspendedLanes,
        i = t.pingedLanes,
        s = t.expirationTimes,
        o = t.pendingLanes & -62914561;
      0 < o;

    ) {
      var v = 31 - ut(o),
        y = 1 << v,
        b = s[v];
      b === -1
        ? ((y & a) === 0 || (y & i) !== 0) && (s[v] = Mv(y, n))
        : b <= n && (t.expiredLanes |= y),
        (o &= ~y);
    }
    if (
      ((n = we),
      (a = ce),
      (a = ml(
        t,
        t === n ? a : 0,
        t.cancelPendingCommit !== null || t.timeoutHandle !== -1
      )),
      (i = t.callbackNode),
      a === 0 ||
        (t === n && (ye === 2 || ye === 9)) ||
        t.cancelPendingCommit !== null)
    )
      return (
        i !== null && i !== null && Ls(i),
        (t.callbackNode = null),
        (t.callbackPriority = 0)
      );
    if ((a & 3) === 0 || si(t, a)) {
      if (((n = a & -a), n === t.callbackPriority)) return n;
      switch ((i !== null && Ls(i), Ys(a))) {
        case 2:
        case 8:
          a = Do;
          break;
        case 32:
          a = vl;
          break;
        case 268435456:
          a = Co;
          break;
        default:
          a = vl;
      }
      return (
        (i = $h.bind(null, t)),
        (a = Hs(a, i)),
        (t.callbackPriority = n),
        (t.callbackNode = a),
        n
      );
    }
    return (
      i !== null && i !== null && Ls(i),
      (t.callbackPriority = 2),
      (t.callbackNode = null),
      2
    );
  }
  function $h(t, n) {
    if (Xe !== 0 && Xe !== 5)
      return (t.callbackNode = null), (t.callbackPriority = 0), null;
    var a = t.callbackNode;
    if (os() && t.callbackNode !== a) return null;
    var i = ce;
    return (
      (i = ml(
        t,
        t === we ? i : 0,
        t.cancelPendingCommit !== null || t.timeoutHandle !== -1
      )),
      i === 0
        ? null
        : (Th(t, i, n),
          Gh(t, Dt()),
          t.callbackNode != null && t.callbackNode === a
            ? $h.bind(null, t)
            : null)
    );
  }
  function Yh(t, n) {
    if (os()) return null;
    Th(t, n, !0);
  }
  function ug() {
    _g(function () {
      (ge & 6) !== 0 ? Hs(Uo, rg) : Lh();
    });
  }
  function xu() {
    return Pn === 0 && (Pn = Mo()), Pn;
  }
  function Qh(t) {
    return t == null || typeof t == "symbol" || typeof t == "boolean"
      ? null
      : typeof t == "function"
      ? t
      : wl("" + t);
  }
  function Vh(t, n) {
    var a = n.ownerDocument.createElement("input");
    return (
      (a.name = n.name),
      (a.value = n.value),
      t.id && a.setAttribute("form", t.id),
      n.parentNode.insertBefore(a, n),
      (t = new FormData(t)),
      a.parentNode.removeChild(a),
      t
    );
  }
  function og(t, n, a, i, s) {
    if (n === "submit" && a && a.stateNode === s) {
      var o = Qh((s[et] || null).action),
        v = i.submitter;
      v &&
        ((n = (n = v[et] || null)
          ? Qh(n.formAction)
          : v.getAttribute("formAction")),
        n !== null && ((o = n), (v = null)));
      var y = new Ol("action", "action", null, i, s);
      t.push({
        event: y,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (i.defaultPrevented) {
                if (Pn !== 0) {
                  var b = v ? Vh(s, v) : new FormData(s);
                  Jr(
                    a,
                    { pending: !0, data: b, method: s.method, action: o },
                    null,
                    b
                  );
                }
              } else
                typeof o == "function" &&
                  (y.preventDefault(),
                  (b = v ? Vh(s, v) : new FormData(s)),
                  Jr(
                    a,
                    { pending: !0, data: b, method: s.method, action: o },
                    o,
                    b
                  ));
            },
            currentTarget: s,
          },
        ],
      });
    }
  }
  for (var Uu = 0; Uu < vr.length; Uu++) {
    var Du = vr[Uu],
      cg = Du.toLowerCase(),
      fg = Du[0].toUpperCase() + Du.slice(1);
    Ot(cg, "on" + fg);
  }
  Ot(Ec, "onAnimationEnd"),
    Ot(Tc, "onAnimationIteration"),
    Ot(Ac, "onAnimationStart"),
    Ot("dblclick", "onDoubleClick"),
    Ot("focusin", "onFocus"),
    Ot("focusout", "onBlur"),
    Ot(R0, "onTransitionRun"),
    Ot(x0, "onTransitionStart"),
    Ot(U0, "onTransitionCancel"),
    Ot(Oc, "onTransitionEnd"),
    oa("onMouseEnter", ["mouseout", "mouseover"]),
    oa("onMouseLeave", ["mouseout", "mouseover"]),
    oa("onPointerEnter", ["pointerout", "pointerover"]),
    oa("onPointerLeave", ["pointerout", "pointerover"]),
    zn(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " "
      )
    ),
    zn(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " "
      )
    ),
    zn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    zn(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" ")
    ),
    zn(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" ")
    ),
    zn(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
    );
  var Vi =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " "
      ),
    hg = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle"
        .split(" ")
        .concat(Vi)
    );
  function Xh(t, n) {
    n = (n & 4) !== 0;
    for (var a = 0; a < t.length; a++) {
      var i = t[a],
        s = i.event;
      i = i.listeners;
      e: {
        var o = void 0;
        if (n)
          for (var v = i.length - 1; 0 <= v; v--) {
            var y = i[v],
              b = y.instance,
              j = y.currentTarget;
            if (((y = y.listener), b !== o && s.isPropagationStopped()))
              break e;
            (o = y), (s.currentTarget = j);
            try {
              o(s);
            } catch (U) {
              Il(U);
            }
            (s.currentTarget = null), (o = b);
          }
        else
          for (v = 0; v < i.length; v++) {
            if (
              ((y = i[v]),
              (b = y.instance),
              (j = y.currentTarget),
              (y = y.listener),
              b !== o && s.isPropagationStopped())
            )
              break e;
            (o = y), (s.currentTarget = j);
            try {
              o(s);
            } catch (U) {
              Il(U);
            }
            (s.currentTarget = null), (o = b);
          }
      }
    }
  }
  function oe(t, n) {
    var a = n[Qs];
    a === void 0 && (a = n[Qs] = new Set());
    var i = t + "__bubble";
    a.has(i) || (Kh(n, t, 2, !1), a.add(i));
  }
  function Cu(t, n, a) {
    var i = 0;
    n && (i |= 4), Kh(a, t, i, n);
  }
  var hs = "_reactListening" + Math.random().toString(36).slice(2);
  function Mu(t) {
    if (!t[hs]) {
      (t[hs] = !0),
        Ho.forEach(function (a) {
          a !== "selectionchange" && (hg.has(a) || Cu(a, !1, t), Cu(a, !0, t));
        });
      var n = t.nodeType === 9 ? t : t.ownerDocument;
      n === null || n[hs] || ((n[hs] = !0), Cu("selectionchange", !1, n));
    }
  }
  function Kh(t, n, a, i) {
    switch (md(n)) {
      case 2:
        var s = Hg;
        break;
      case 8:
        s = Lg;
        break;
      default:
        s = Ku;
    }
    (a = s.bind(null, n, a, t)),
      (s = void 0),
      !tr ||
        (n !== "touchstart" && n !== "touchmove" && n !== "wheel") ||
        (s = !0),
      i
        ? s !== void 0
          ? t.addEventListener(n, a, { capture: !0, passive: s })
          : t.addEventListener(n, a, !0)
        : s !== void 0
        ? t.addEventListener(n, a, { passive: s })
        : t.addEventListener(n, a, !1);
  }
  function Nu(t, n, a, i, s) {
    var o = i;
    if ((n & 1) === 0 && (n & 2) === 0 && i !== null)
      e: for (;;) {
        if (i === null) return;
        var v = i.tag;
        if (v === 3 || v === 4) {
          var y = i.stateNode.containerInfo;
          if (y === s) break;
          if (v === 4)
            for (v = i.return; v !== null; ) {
              var b = v.tag;
              if ((b === 3 || b === 4) && v.stateNode.containerInfo === s)
                return;
              v = v.return;
            }
          for (; y !== null; ) {
            if (((v = sa(y)), v === null)) return;
            if (((b = v.tag), b === 5 || b === 6 || b === 26 || b === 27)) {
              i = o = v;
              continue e;
            }
            y = y.parentNode;
          }
        }
        i = i.return;
      }
    Fo(function () {
      var j = o,
        U = Fs(a),
        M = [];
      e: {
        var R = jc.get(t);
        if (R !== void 0) {
          var x = Ol,
            F = t;
          switch (t) {
            case "keypress":
              if (Tl(a) === 0) break e;
            case "keydown":
            case "keyup":
              x = s0;
              break;
            case "focusin":
              (F = "focus"), (x = lr);
              break;
            case "focusout":
              (F = "blur"), (x = lr);
              break;
            case "beforeblur":
            case "afterblur":
              x = lr;
              break;
            case "click":
              if (a.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              x = nc;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              x = Zv;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              x = o0;
              break;
            case Ec:
            case Tc:
            case Ac:
              x = Pv;
              break;
            case Oc:
              x = f0;
              break;
            case "scroll":
            case "scrollend":
              x = Xv;
              break;
            case "wheel":
              x = d0;
              break;
            case "copy":
            case "cut":
            case "paste":
              x = Fv;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              x = ic;
              break;
            case "toggle":
            case "beforetoggle":
              x = g0;
          }
          var J = (n & 4) !== 0,
            pe = !J && (t === "scroll" || t === "scrollend"),
            T = J ? (R !== null ? R + "Capture" : null) : R;
          J = [];
          for (var w = j, A; w !== null; ) {
            var C = w;
            if (
              ((A = C.stateNode),
              (C = C.tag),
              (C !== 5 && C !== 26 && C !== 27) ||
                A === null ||
                T === null ||
                ((C = ci(w, T)), C != null && J.push(Xi(w, C, A))),
              pe)
            )
              break;
            w = w.return;
          }
          0 < J.length &&
            ((R = new x(R, F, null, a, U)), M.push({ event: R, listeners: J }));
        }
      }
      if ((n & 7) === 0) {
        e: {
          if (
            ((R = t === "mouseover" || t === "pointerover"),
            (x = t === "mouseout" || t === "pointerout"),
            R &&
              a !== Is &&
              (F = a.relatedTarget || a.fromElement) &&
              (sa(F) || F[la]))
          )
            break e;
          if (
            (x || R) &&
            ((R =
              U.window === U
                ? U
                : (R = U.ownerDocument)
                ? R.defaultView || R.parentWindow
                : window),
            x
              ? ((F = a.relatedTarget || a.toElement),
                (x = j),
                (F = F ? sa(F) : null),
                F !== null &&
                  ((pe = h(F)),
                  (J = F.tag),
                  F !== pe || (J !== 5 && J !== 27 && J !== 6)) &&
                  (F = null))
              : ((x = null), (F = j)),
            x !== F)
          ) {
            if (
              ((J = nc),
              (C = "onMouseLeave"),
              (T = "onMouseEnter"),
              (w = "mouse"),
              (t === "pointerout" || t === "pointerover") &&
                ((J = ic),
                (C = "onPointerLeave"),
                (T = "onPointerEnter"),
                (w = "pointer")),
              (pe = x == null ? R : oi(x)),
              (A = F == null ? R : oi(F)),
              (R = new J(C, w + "leave", x, a, U)),
              (R.target = pe),
              (R.relatedTarget = A),
              (C = null),
              sa(U) === j &&
                ((J = new J(T, w + "enter", F, a, U)),
                (J.target = A),
                (J.relatedTarget = pe),
                (C = J)),
              (pe = C),
              x && F)
            )
              t: {
                for (J = x, T = F, w = 0, A = J; A; A = La(A)) w++;
                for (A = 0, C = T; C; C = La(C)) A++;
                for (; 0 < w - A; ) (J = La(J)), w--;
                for (; 0 < A - w; ) (T = La(T)), A--;
                for (; w--; ) {
                  if (J === T || (T !== null && J === T.alternate)) break t;
                  (J = La(J)), (T = La(T));
                }
                J = null;
              }
            else J = null;
            x !== null && Zh(M, R, x, J, !1),
              F !== null && pe !== null && Zh(M, pe, F, J, !0);
          }
        }
        e: {
          if (
            ((R = j ? oi(j) : window),
            (x = R.nodeName && R.nodeName.toLowerCase()),
            x === "select" || (x === "input" && R.type === "file"))
          )
            var V = hc;
          else if (cc(R))
            if (dc) V = A0;
            else {
              V = E0;
              var se = w0;
            }
          else
            (x = R.nodeName),
              !x ||
              x.toLowerCase() !== "input" ||
              (R.type !== "checkbox" && R.type !== "radio")
                ? j && Ps(j.elementType) && (V = hc)
                : (V = T0);
          if (V && (V = V(t, j))) {
            fc(M, V, a, U);
            break e;
          }
          se && se(t, R, j),
            t === "focusout" &&
              j &&
              R.type === "number" &&
              j.memoizedProps.value != null &&
              Ws(R, "number", R.value);
        }
        switch (((se = j ? oi(j) : window), t)) {
          case "focusin":
            (cc(se) || se.contentEditable === "true") &&
              ((ya = se), (fr = j), (_i = null));
            break;
          case "focusout":
            _i = fr = ya = null;
            break;
          case "mousedown":
            hr = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            (hr = !1), Sc(M, a, U);
            break;
          case "selectionchange":
            if (j0) break;
          case "keydown":
          case "keyup":
            Sc(M, a, U);
        }
        var X;
        if (rr)
          e: {
            switch (t) {
              case "compositionstart":
                var W = "onCompositionStart";
                break e;
              case "compositionend":
                W = "onCompositionEnd";
                break e;
              case "compositionupdate":
                W = "onCompositionUpdate";
                break e;
            }
            W = void 0;
          }
        else
          ga
            ? uc(t, a) && (W = "onCompositionEnd")
            : t === "keydown" &&
              a.keyCode === 229 &&
              (W = "onCompositionStart");
        W &&
          (lc &&
            a.locale !== "ko" &&
            (ga || W !== "onCompositionStart"
              ? W === "onCompositionEnd" && ga && (X = ec())
              : ((sn = U),
                (nr = "value" in sn ? sn.value : sn.textContent),
                (ga = !0))),
          (se = ds(j, W)),
          0 < se.length &&
            ((W = new ac(W, t, null, a, U)),
            M.push({ event: W, listeners: se }),
            X ? (W.data = X) : ((X = oc(a)), X !== null && (W.data = X)))),
          (X = m0 ? _0(t, a) : p0(t, a)) &&
            ((W = ds(j, "onBeforeInput")),
            0 < W.length &&
              ((se = new ac("onBeforeInput", "beforeinput", null, a, U)),
              M.push({ event: se, listeners: W }),
              (se.data = X))),
          og(M, t, j, a, U);
      }
      Xh(M, n);
    });
  }
  function Xi(t, n, a) {
    return { instance: t, listener: n, currentTarget: a };
  }
  function ds(t, n) {
    for (var a = n + "Capture", i = []; t !== null; ) {
      var s = t,
        o = s.stateNode;
      if (
        ((s = s.tag),
        (s !== 5 && s !== 26 && s !== 27) ||
          o === null ||
          ((s = ci(t, a)),
          s != null && i.unshift(Xi(t, s, o)),
          (s = ci(t, n)),
          s != null && i.push(Xi(t, s, o))),
        t.tag === 3)
      )
        return i;
      t = t.return;
    }
    return [];
  }
  function La(t) {
    if (t === null) return null;
    do t = t.return;
    while (t && t.tag !== 5 && t.tag !== 27);
    return t || null;
  }
  function Zh(t, n, a, i, s) {
    for (var o = n._reactName, v = []; a !== null && a !== i; ) {
      var y = a,
        b = y.alternate,
        j = y.stateNode;
      if (((y = y.tag), b !== null && b === i)) break;
      (y !== 5 && y !== 26 && y !== 27) ||
        j === null ||
        ((b = j),
        s
          ? ((j = ci(a, o)), j != null && v.unshift(Xi(a, j, b)))
          : s || ((j = ci(a, o)), j != null && v.push(Xi(a, j, b)))),
        (a = a.return);
    }
    v.length !== 0 && t.push({ event: n, listeners: v });
  }
  var dg = /\r\n?/g,
    vg = /\u0000|\uFFFD/g;
  function Jh(t) {
    return (typeof t == "string" ? t : "" + t)
      .replace(
        dg,
        `
`
      )
      .replace(vg, "");
  }
  function Wh(t, n) {
    return (n = Jh(n)), Jh(t) === n;
  }
  function vs() {}
  function _e(t, n, a, i, s, o) {
    switch (a) {
      case "children":
        typeof i == "string"
          ? n === "body" || (n === "textarea" && i === "") || ha(t, i)
          : (typeof i == "number" || typeof i == "bigint") &&
            n !== "body" &&
            ha(t, "" + i);
        break;
      case "className":
        pl(t, "class", i);
        break;
      case "tabIndex":
        pl(t, "tabindex", i);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        pl(t, a, i);
        break;
      case "style":
        Po(t, i, o);
        break;
      case "data":
        if (n !== "object") {
          pl(t, "data", i);
          break;
        }
      case "src":
      case "href":
        if (i === "" && (n !== "a" || a !== "href")) {
          t.removeAttribute(a);
          break;
        }
        if (
          i == null ||
          typeof i == "function" ||
          typeof i == "symbol" ||
          typeof i == "boolean"
        ) {
          t.removeAttribute(a);
          break;
        }
        (i = wl("" + i)), t.setAttribute(a, i);
        break;
      case "action":
      case "formAction":
        if (typeof i == "function") {
          t.setAttribute(
            a,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof o == "function" &&
            (a === "formAction"
              ? (n !== "input" && _e(t, n, "name", s.name, s, null),
                _e(t, n, "formEncType", s.formEncType, s, null),
                _e(t, n, "formMethod", s.formMethod, s, null),
                _e(t, n, "formTarget", s.formTarget, s, null))
              : (_e(t, n, "encType", s.encType, s, null),
                _e(t, n, "method", s.method, s, null),
                _e(t, n, "target", s.target, s, null)));
        if (i == null || typeof i == "symbol" || typeof i == "boolean") {
          t.removeAttribute(a);
          break;
        }
        (i = wl("" + i)), t.setAttribute(a, i);
        break;
      case "onClick":
        i != null && (t.onclick = vs);
        break;
      case "onScroll":
        i != null && oe("scroll", t);
        break;
      case "onScrollEnd":
        i != null && oe("scrollend", t);
        break;
      case "dangerouslySetInnerHTML":
        if (i != null) {
          if (typeof i != "object" || !("__html" in i)) throw Error(r(61));
          if (((a = i.__html), a != null)) {
            if (s.children != null) throw Error(r(60));
            t.innerHTML = a;
          }
        }
        break;
      case "multiple":
        t.multiple = i && typeof i != "function" && typeof i != "symbol";
        break;
      case "muted":
        t.muted = i && typeof i != "function" && typeof i != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (
          i == null ||
          typeof i == "function" ||
          typeof i == "boolean" ||
          typeof i == "symbol"
        ) {
          t.removeAttribute("xlink:href");
          break;
        }
        (a = wl("" + i)),
          t.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", a);
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        i != null && typeof i != "function" && typeof i != "symbol"
          ? t.setAttribute(a, "" + i)
          : t.removeAttribute(a);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        i && typeof i != "function" && typeof i != "symbol"
          ? t.setAttribute(a, "")
          : t.removeAttribute(a);
        break;
      case "capture":
      case "download":
        i === !0
          ? t.setAttribute(a, "")
          : i !== !1 &&
            i != null &&
            typeof i != "function" &&
            typeof i != "symbol"
          ? t.setAttribute(a, i)
          : t.removeAttribute(a);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        i != null &&
        typeof i != "function" &&
        typeof i != "symbol" &&
        !isNaN(i) &&
        1 <= i
          ? t.setAttribute(a, i)
          : t.removeAttribute(a);
        break;
      case "rowSpan":
      case "start":
        i == null || typeof i == "function" || typeof i == "symbol" || isNaN(i)
          ? t.removeAttribute(a)
          : t.setAttribute(a, i);
        break;
      case "popover":
        oe("beforetoggle", t), oe("toggle", t), _l(t, "popover", i);
        break;
      case "xlinkActuate":
        Lt(t, "http://www.w3.org/1999/xlink", "xlink:actuate", i);
        break;
      case "xlinkArcrole":
        Lt(t, "http://www.w3.org/1999/xlink", "xlink:arcrole", i);
        break;
      case "xlinkRole":
        Lt(t, "http://www.w3.org/1999/xlink", "xlink:role", i);
        break;
      case "xlinkShow":
        Lt(t, "http://www.w3.org/1999/xlink", "xlink:show", i);
        break;
      case "xlinkTitle":
        Lt(t, "http://www.w3.org/1999/xlink", "xlink:title", i);
        break;
      case "xlinkType":
        Lt(t, "http://www.w3.org/1999/xlink", "xlink:type", i);
        break;
      case "xmlBase":
        Lt(t, "http://www.w3.org/XML/1998/namespace", "xml:base", i);
        break;
      case "xmlLang":
        Lt(t, "http://www.w3.org/XML/1998/namespace", "xml:lang", i);
        break;
      case "xmlSpace":
        Lt(t, "http://www.w3.org/XML/1998/namespace", "xml:space", i);
        break;
      case "is":
        _l(t, "is", i);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < a.length) ||
          (a[0] !== "o" && a[0] !== "O") ||
          (a[1] !== "n" && a[1] !== "N")) &&
          ((a = Qv.get(a) || a), _l(t, a, i));
    }
  }
  function zu(t, n, a, i, s, o) {
    switch (a) {
      case "style":
        Po(t, i, o);
        break;
      case "dangerouslySetInnerHTML":
        if (i != null) {
          if (typeof i != "object" || !("__html" in i)) throw Error(r(61));
          if (((a = i.__html), a != null)) {
            if (s.children != null) throw Error(r(60));
            t.innerHTML = a;
          }
        }
        break;
      case "children":
        typeof i == "string"
          ? ha(t, i)
          : (typeof i == "number" || typeof i == "bigint") && ha(t, "" + i);
        break;
      case "onScroll":
        i != null && oe("scroll", t);
        break;
      case "onScrollEnd":
        i != null && oe("scrollend", t);
        break;
      case "onClick":
        i != null && (t.onclick = vs);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!Lo.hasOwnProperty(a))
          e: {
            if (
              a[0] === "o" &&
              a[1] === "n" &&
              ((s = a.endsWith("Capture")),
              (n = a.slice(2, s ? a.length - 7 : void 0)),
              (o = t[et] || null),
              (o = o != null ? o[a] : null),
              typeof o == "function" && t.removeEventListener(n, o, s),
              typeof i == "function")
            ) {
              typeof o != "function" &&
                o !== null &&
                (a in t
                  ? (t[a] = null)
                  : t.hasAttribute(a) && t.removeAttribute(a)),
                t.addEventListener(n, i, s);
              break e;
            }
            a in t
              ? (t[a] = i)
              : i === !0
              ? t.setAttribute(a, "")
              : _l(t, a, i);
          }
    }
  }
  function Ke(t, n, a) {
    switch (n) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        oe("error", t), oe("load", t);
        var i = !1,
          s = !1,
          o;
        for (o in a)
          if (a.hasOwnProperty(o)) {
            var v = a[o];
            if (v != null)
              switch (o) {
                case "src":
                  i = !0;
                  break;
                case "srcSet":
                  s = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(r(137, n));
                default:
                  _e(t, n, o, v, a, null);
              }
          }
        s && _e(t, n, "srcSet", a.srcSet, a, null),
          i && _e(t, n, "src", a.src, a, null);
        return;
      case "input":
        oe("invalid", t);
        var y = (o = v = s = null),
          b = null,
          j = null;
        for (i in a)
          if (a.hasOwnProperty(i)) {
            var U = a[i];
            if (U != null)
              switch (i) {
                case "name":
                  s = U;
                  break;
                case "type":
                  v = U;
                  break;
                case "checked":
                  b = U;
                  break;
                case "defaultChecked":
                  j = U;
                  break;
                case "value":
                  o = U;
                  break;
                case "defaultValue":
                  y = U;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (U != null) throw Error(r(137, n));
                  break;
                default:
                  _e(t, n, i, U, a, null);
              }
          }
        Ko(t, o, y, b, j, v, s, !1), bl(t);
        return;
      case "select":
        oe("invalid", t), (i = v = o = null);
        for (s in a)
          if (a.hasOwnProperty(s) && ((y = a[s]), y != null))
            switch (s) {
              case "value":
                o = y;
                break;
              case "defaultValue":
                v = y;
                break;
              case "multiple":
                i = y;
              default:
                _e(t, n, s, y, a, null);
            }
        (n = o),
          (a = v),
          (t.multiple = !!i),
          n != null ? fa(t, !!i, n, !1) : a != null && fa(t, !!i, a, !0);
        return;
      case "textarea":
        oe("invalid", t), (o = s = i = null);
        for (v in a)
          if (a.hasOwnProperty(v) && ((y = a[v]), y != null))
            switch (v) {
              case "value":
                i = y;
                break;
              case "defaultValue":
                s = y;
                break;
              case "children":
                o = y;
                break;
              case "dangerouslySetInnerHTML":
                if (y != null) throw Error(r(91));
                break;
              default:
                _e(t, n, v, y, a, null);
            }
        Jo(t, i, s, o), bl(t);
        return;
      case "option":
        for (b in a)
          if (a.hasOwnProperty(b) && ((i = a[b]), i != null))
            switch (b) {
              case "selected":
                t.selected =
                  i && typeof i != "function" && typeof i != "symbol";
                break;
              default:
                _e(t, n, b, i, a, null);
            }
        return;
      case "dialog":
        oe("beforetoggle", t), oe("toggle", t), oe("cancel", t), oe("close", t);
        break;
      case "iframe":
      case "object":
        oe("load", t);
        break;
      case "video":
      case "audio":
        for (i = 0; i < Vi.length; i++) oe(Vi[i], t);
        break;
      case "image":
        oe("error", t), oe("load", t);
        break;
      case "details":
        oe("toggle", t);
        break;
      case "embed":
      case "source":
      case "link":
        oe("error", t), oe("load", t);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (j in a)
          if (a.hasOwnProperty(j) && ((i = a[j]), i != null))
            switch (j) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(r(137, n));
              default:
                _e(t, n, j, i, a, null);
            }
        return;
      default:
        if (Ps(n)) {
          for (U in a)
            a.hasOwnProperty(U) &&
              ((i = a[U]), i !== void 0 && zu(t, n, U, i, a, void 0));
          return;
        }
    }
    for (y in a)
      a.hasOwnProperty(y) && ((i = a[y]), i != null && _e(t, n, y, i, a, null));
  }
  function gg(t, n, a, i) {
    switch (n) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var s = null,
          o = null,
          v = null,
          y = null,
          b = null,
          j = null,
          U = null;
        for (x in a) {
          var M = a[x];
          if (a.hasOwnProperty(x) && M != null)
            switch (x) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                b = M;
              default:
                i.hasOwnProperty(x) || _e(t, n, x, null, i, M);
            }
        }
        for (var R in i) {
          var x = i[R];
          if (((M = a[R]), i.hasOwnProperty(R) && (x != null || M != null)))
            switch (R) {
              case "type":
                o = x;
                break;
              case "name":
                s = x;
                break;
              case "checked":
                j = x;
                break;
              case "defaultChecked":
                U = x;
                break;
              case "value":
                v = x;
                break;
              case "defaultValue":
                y = x;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (x != null) throw Error(r(137, n));
                break;
              default:
                x !== M && _e(t, n, R, x, i, M);
            }
        }
        Js(t, v, y, b, j, U, o, s);
        return;
      case "select":
        x = v = y = R = null;
        for (o in a)
          if (((b = a[o]), a.hasOwnProperty(o) && b != null))
            switch (o) {
              case "value":
                break;
              case "multiple":
                x = b;
              default:
                i.hasOwnProperty(o) || _e(t, n, o, null, i, b);
            }
        for (s in i)
          if (
            ((o = i[s]),
            (b = a[s]),
            i.hasOwnProperty(s) && (o != null || b != null))
          )
            switch (s) {
              case "value":
                R = o;
                break;
              case "defaultValue":
                y = o;
                break;
              case "multiple":
                v = o;
              default:
                o !== b && _e(t, n, s, o, i, b);
            }
        (n = y),
          (a = v),
          (i = x),
          R != null
            ? fa(t, !!a, R, !1)
            : !!i != !!a &&
              (n != null ? fa(t, !!a, n, !0) : fa(t, !!a, a ? [] : "", !1));
        return;
      case "textarea":
        x = R = null;
        for (y in a)
          if (
            ((s = a[y]),
            a.hasOwnProperty(y) && s != null && !i.hasOwnProperty(y))
          )
            switch (y) {
              case "value":
                break;
              case "children":
                break;
              default:
                _e(t, n, y, null, i, s);
            }
        for (v in i)
          if (
            ((s = i[v]),
            (o = a[v]),
            i.hasOwnProperty(v) && (s != null || o != null))
          )
            switch (v) {
              case "value":
                R = s;
                break;
              case "defaultValue":
                x = s;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (s != null) throw Error(r(91));
                break;
              default:
                s !== o && _e(t, n, v, s, i, o);
            }
        Zo(t, R, x);
        return;
      case "option":
        for (var F in a)
          if (
            ((R = a[F]),
            a.hasOwnProperty(F) && R != null && !i.hasOwnProperty(F))
          )
            switch (F) {
              case "selected":
                t.selected = !1;
                break;
              default:
                _e(t, n, F, null, i, R);
            }
        for (b in i)
          if (
            ((R = i[b]),
            (x = a[b]),
            i.hasOwnProperty(b) && R !== x && (R != null || x != null))
          )
            switch (b) {
              case "selected":
                t.selected =
                  R && typeof R != "function" && typeof R != "symbol";
                break;
              default:
                _e(t, n, b, R, i, x);
            }
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var J in a)
          (R = a[J]),
            a.hasOwnProperty(J) &&
              R != null &&
              !i.hasOwnProperty(J) &&
              _e(t, n, J, null, i, R);
        for (j in i)
          if (
            ((R = i[j]),
            (x = a[j]),
            i.hasOwnProperty(j) && R !== x && (R != null || x != null))
          )
            switch (j) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (R != null) throw Error(r(137, n));
                break;
              default:
                _e(t, n, j, R, i, x);
            }
        return;
      default:
        if (Ps(n)) {
          for (var pe in a)
            (R = a[pe]),
              a.hasOwnProperty(pe) &&
                R !== void 0 &&
                !i.hasOwnProperty(pe) &&
                zu(t, n, pe, void 0, i, R);
          for (U in i)
            (R = i[U]),
              (x = a[U]),
              !i.hasOwnProperty(U) ||
                R === x ||
                (R === void 0 && x === void 0) ||
                zu(t, n, U, R, i, x);
          return;
        }
    }
    for (var T in a)
      (R = a[T]),
        a.hasOwnProperty(T) &&
          R != null &&
          !i.hasOwnProperty(T) &&
          _e(t, n, T, null, i, R);
    for (M in i)
      (R = i[M]),
        (x = a[M]),
        !i.hasOwnProperty(M) ||
          R === x ||
          (R == null && x == null) ||
          _e(t, n, M, R, i, x);
  }
  var ku = null,
    qu = null;
  function gs(t) {
    return t.nodeType === 9 ? t : t.ownerDocument;
  }
  function Ph(t) {
    switch (t) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Ih(t, n) {
    if (t === 0)
      switch (n) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return t === 1 && n === "foreignObject" ? 0 : t;
  }
  function Bu(t, n) {
    return (
      t === "textarea" ||
      t === "noscript" ||
      typeof n.children == "string" ||
      typeof n.children == "number" ||
      typeof n.children == "bigint" ||
      (typeof n.dangerouslySetInnerHTML == "object" &&
        n.dangerouslySetInnerHTML !== null &&
        n.dangerouslySetInnerHTML.__html != null)
    );
  }
  var Hu = null;
  function yg() {
    var t = window.event;
    return t && t.type === "popstate"
      ? t === Hu
        ? !1
        : ((Hu = t), !0)
      : ((Hu = null), !1);
  }
  var Fh = typeof setTimeout == "function" ? setTimeout : void 0,
    mg = typeof clearTimeout == "function" ? clearTimeout : void 0,
    ed = typeof Promise == "function" ? Promise : void 0,
    _g =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof ed < "u"
        ? function (t) {
            return ed.resolve(null).then(t).catch(pg);
          }
        : Fh;
  function pg(t) {
    setTimeout(function () {
      throw t;
    });
  }
  function wn(t) {
    return t === "head";
  }
  function td(t, n) {
    var a = n,
      i = 0,
      s = 0;
    do {
      var o = a.nextSibling;
      if ((t.removeChild(a), o && o.nodeType === 8))
        if (((a = o.data), a === "/$")) {
          if (0 < i && 8 > i) {
            a = i;
            var v = t.ownerDocument;
            if ((a & 1 && Ki(v.documentElement), a & 2 && Ki(v.body), a & 4))
              for (a = v.head, Ki(a), v = a.firstChild; v; ) {
                var y = v.nextSibling,
                  b = v.nodeName;
                v[ui] ||
                  b === "SCRIPT" ||
                  b === "STYLE" ||
                  (b === "LINK" && v.rel.toLowerCase() === "stylesheet") ||
                  a.removeChild(v),
                  (v = y);
              }
          }
          if (s === 0) {
            t.removeChild(o), tl(n);
            return;
          }
          s--;
        } else
          a === "$" || a === "$?" || a === "$!"
            ? s++
            : (i = a.charCodeAt(0) - 48);
      else i = 0;
      a = o;
    } while (a);
    tl(n);
  }
  function Lu(t) {
    var n = t.firstChild;
    for (n && n.nodeType === 10 && (n = n.nextSibling); n; ) {
      var a = n;
      switch (((n = n.nextSibling), a.nodeName)) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Lu(a), Vs(a);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (a.rel.toLowerCase() === "stylesheet") continue;
      }
      t.removeChild(a);
    }
  }
  function bg(t, n, a, i) {
    for (; t.nodeType === 1; ) {
      var s = a;
      if (t.nodeName.toLowerCase() !== n.toLowerCase()) {
        if (!i && (t.nodeName !== "INPUT" || t.type !== "hidden")) break;
      } else if (i) {
        if (!t[ui])
          switch (n) {
            case "meta":
              if (!t.hasAttribute("itemprop")) break;
              return t;
            case "link":
              if (
                ((o = t.getAttribute("rel")),
                o === "stylesheet" && t.hasAttribute("data-precedence"))
              )
                break;
              if (
                o !== s.rel ||
                t.getAttribute("href") !==
                  (s.href == null || s.href === "" ? null : s.href) ||
                t.getAttribute("crossorigin") !==
                  (s.crossOrigin == null ? null : s.crossOrigin) ||
                t.getAttribute("title") !== (s.title == null ? null : s.title)
              )
                break;
              return t;
            case "style":
              if (t.hasAttribute("data-precedence")) break;
              return t;
            case "script":
              if (
                ((o = t.getAttribute("src")),
                (o !== (s.src == null ? null : s.src) ||
                  t.getAttribute("type") !== (s.type == null ? null : s.type) ||
                  t.getAttribute("crossorigin") !==
                    (s.crossOrigin == null ? null : s.crossOrigin)) &&
                  o &&
                  t.hasAttribute("async") &&
                  !t.hasAttribute("itemprop"))
              )
                break;
              return t;
            default:
              return t;
          }
      } else if (n === "input" && t.type === "hidden") {
        var o = s.name == null ? null : "" + s.name;
        if (s.type === "hidden" && t.getAttribute("name") === o) return t;
      } else return t;
      if (((t = Rt(t.nextSibling)), t === null)) break;
    }
    return null;
  }
  function Sg(t, n, a) {
    if (n === "") return null;
    for (; t.nodeType !== 3; )
      if (
        ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") &&
          !a) ||
        ((t = Rt(t.nextSibling)), t === null)
      )
        return null;
    return t;
  }
  function Gu(t) {
    return (
      t.data === "$!" ||
      (t.data === "$?" && t.ownerDocument.readyState === "complete")
    );
  }
  function wg(t, n) {
    var a = t.ownerDocument;
    if (t.data !== "$?" || a.readyState === "complete") n();
    else {
      var i = function () {
        n(), a.removeEventListener("DOMContentLoaded", i);
      };
      a.addEventListener("DOMContentLoaded", i), (t._reactRetry = i);
    }
  }
  function Rt(t) {
    for (; t != null; t = t.nextSibling) {
      var n = t.nodeType;
      if (n === 1 || n === 3) break;
      if (n === 8) {
        if (
          ((n = t.data),
          n === "$" || n === "$!" || n === "$?" || n === "F!" || n === "F")
        )
          break;
        if (n === "/$") return null;
      }
    }
    return t;
  }
  var $u = null;
  function nd(t) {
    t = t.previousSibling;
    for (var n = 0; t; ) {
      if (t.nodeType === 8) {
        var a = t.data;
        if (a === "$" || a === "$!" || a === "$?") {
          if (n === 0) return t;
          n--;
        } else a === "/$" && n++;
      }
      t = t.previousSibling;
    }
    return null;
  }
  function ad(t, n, a) {
    switch (((n = gs(a)), t)) {
      case "html":
        if (((t = n.documentElement), !t)) throw Error(r(452));
        return t;
      case "head":
        if (((t = n.head), !t)) throw Error(r(453));
        return t;
      case "body":
        if (((t = n.body), !t)) throw Error(r(454));
        return t;
      default:
        throw Error(r(451));
    }
  }
  function Ki(t) {
    for (var n = t.attributes; n.length; ) t.removeAttributeNode(n[0]);
    Vs(t);
  }
  var Tt = new Map(),
    id = new Set();
  function ys(t) {
    return typeof t.getRootNode == "function"
      ? t.getRootNode()
      : t.nodeType === 9
      ? t
      : t.ownerDocument;
  }
  var en = $.d;
  $.d = { f: Eg, r: Tg, D: Ag, C: Og, L: jg, m: Rg, X: Ug, S: xg, M: Dg };
  function Eg() {
    var t = en.f(),
      n = rs();
    return t || n;
  }
  function Tg(t) {
    var n = ra(t);
    n !== null && n.tag === 5 && n.type === "form" ? Tf(n) : en.r(t);
  }
  var Ga = typeof document > "u" ? null : document;
  function ld(t, n, a) {
    var i = Ga;
    if (i && typeof n == "string" && n) {
      var s = mt(n);
      (s = 'link[rel="' + t + '"][href="' + s + '"]'),
        typeof a == "string" && (s += '[crossorigin="' + a + '"]'),
        id.has(s) ||
          (id.add(s),
          (t = { rel: t, crossOrigin: a, href: n }),
          i.querySelector(s) === null &&
            ((n = i.createElement("link")),
            Ke(n, "link", t),
            Le(n),
            i.head.appendChild(n)));
    }
  }
  function Ag(t) {
    en.D(t), ld("dns-prefetch", t, null);
  }
  function Og(t, n) {
    en.C(t, n), ld("preconnect", t, n);
  }
  function jg(t, n, a) {
    en.L(t, n, a);
    var i = Ga;
    if (i && t && n) {
      var s = 'link[rel="preload"][as="' + mt(n) + '"]';
      n === "image" && a && a.imageSrcSet
        ? ((s += '[imagesrcset="' + mt(a.imageSrcSet) + '"]'),
          typeof a.imageSizes == "string" &&
            (s += '[imagesizes="' + mt(a.imageSizes) + '"]'))
        : (s += '[href="' + mt(t) + '"]');
      var o = s;
      switch (n) {
        case "style":
          o = $a(t);
          break;
        case "script":
          o = Ya(t);
      }
      Tt.has(o) ||
        ((t = p(
          {
            rel: "preload",
            href: n === "image" && a && a.imageSrcSet ? void 0 : t,
            as: n,
          },
          a
        )),
        Tt.set(o, t),
        i.querySelector(s) !== null ||
          (n === "style" && i.querySelector(Zi(o))) ||
          (n === "script" && i.querySelector(Ji(o))) ||
          ((n = i.createElement("link")),
          Ke(n, "link", t),
          Le(n),
          i.head.appendChild(n)));
    }
  }
  function Rg(t, n) {
    en.m(t, n);
    var a = Ga;
    if (a && t) {
      var i = n && typeof n.as == "string" ? n.as : "script",
        s =
          'link[rel="modulepreload"][as="' + mt(i) + '"][href="' + mt(t) + '"]',
        o = s;
      switch (i) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          o = Ya(t);
      }
      if (
        !Tt.has(o) &&
        ((t = p({ rel: "modulepreload", href: t }, n)),
        Tt.set(o, t),
        a.querySelector(s) === null)
      ) {
        switch (i) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (a.querySelector(Ji(o))) return;
        }
        (i = a.createElement("link")),
          Ke(i, "link", t),
          Le(i),
          a.head.appendChild(i);
      }
    }
  }
  function xg(t, n, a) {
    en.S(t, n, a);
    var i = Ga;
    if (i && t) {
      var s = ua(i).hoistableStyles,
        o = $a(t);
      n = n || "default";
      var v = s.get(o);
      if (!v) {
        var y = { loading: 0, preload: null };
        if ((v = i.querySelector(Zi(o)))) y.loading = 5;
        else {
          (t = p({ rel: "stylesheet", href: t, "data-precedence": n }, a)),
            (a = Tt.get(o)) && Yu(t, a);
          var b = (v = i.createElement("link"));
          Le(b),
            Ke(b, "link", t),
            (b._p = new Promise(function (j, U) {
              (b.onload = j), (b.onerror = U);
            })),
            b.addEventListener("load", function () {
              y.loading |= 1;
            }),
            b.addEventListener("error", function () {
              y.loading |= 2;
            }),
            (y.loading |= 4),
            ms(v, n, i);
        }
        (v = { type: "stylesheet", instance: v, count: 1, state: y }),
          s.set(o, v);
      }
    }
  }
  function Ug(t, n) {
    en.X(t, n);
    var a = Ga;
    if (a && t) {
      var i = ua(a).hoistableScripts,
        s = Ya(t),
        o = i.get(s);
      o ||
        ((o = a.querySelector(Ji(s))),
        o ||
          ((t = p({ src: t, async: !0 }, n)),
          (n = Tt.get(s)) && Qu(t, n),
          (o = a.createElement("script")),
          Le(o),
          Ke(o, "link", t),
          a.head.appendChild(o)),
        (o = { type: "script", instance: o, count: 1, state: null }),
        i.set(s, o));
    }
  }
  function Dg(t, n) {
    en.M(t, n);
    var a = Ga;
    if (a && t) {
      var i = ua(a).hoistableScripts,
        s = Ya(t),
        o = i.get(s);
      o ||
        ((o = a.querySelector(Ji(s))),
        o ||
          ((t = p({ src: t, async: !0, type: "module" }, n)),
          (n = Tt.get(s)) && Qu(t, n),
          (o = a.createElement("script")),
          Le(o),
          Ke(o, "link", t),
          a.head.appendChild(o)),
        (o = { type: "script", instance: o, count: 1, state: null }),
        i.set(s, o));
    }
  }
  function sd(t, n, a, i) {
    var s = (s = te.current) ? ys(s) : null;
    if (!s) throw Error(r(446));
    switch (t) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof a.precedence == "string" && typeof a.href == "string"
          ? ((n = $a(a.href)),
            (a = ua(s).hoistableStyles),
            (i = a.get(n)),
            i ||
              ((i = { type: "style", instance: null, count: 0, state: null }),
              a.set(n, i)),
            i)
          : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (
          a.rel === "stylesheet" &&
          typeof a.href == "string" &&
          typeof a.precedence == "string"
        ) {
          t = $a(a.href);
          var o = ua(s).hoistableStyles,
            v = o.get(t);
          if (
            (v ||
              ((s = s.ownerDocument || s),
              (v = {
                type: "stylesheet",
                instance: null,
                count: 0,
                state: { loading: 0, preload: null },
              }),
              o.set(t, v),
              (o = s.querySelector(Zi(t))) &&
                !o._p &&
                ((v.instance = o), (v.state.loading = 5)),
              Tt.has(t) ||
                ((a = {
                  rel: "preload",
                  as: "style",
                  href: a.href,
                  crossOrigin: a.crossOrigin,
                  integrity: a.integrity,
                  media: a.media,
                  hrefLang: a.hrefLang,
                  referrerPolicy: a.referrerPolicy,
                }),
                Tt.set(t, a),
                o || Cg(s, t, a, v.state))),
            n && i === null)
          )
            throw Error(r(528, ""));
          return v;
        }
        if (n && i !== null) throw Error(r(529, ""));
        return null;
      case "script":
        return (
          (n = a.async),
          (a = a.src),
          typeof a == "string" &&
          n &&
          typeof n != "function" &&
          typeof n != "symbol"
            ? ((n = Ya(a)),
              (a = ua(s).hoistableScripts),
              (i = a.get(n)),
              i ||
                ((i = {
                  type: "script",
                  instance: null,
                  count: 0,
                  state: null,
                }),
                a.set(n, i)),
              i)
            : { type: "void", instance: null, count: 0, state: null }
        );
      default:
        throw Error(r(444, t));
    }
  }
  function $a(t) {
    return 'href="' + mt(t) + '"';
  }
  function Zi(t) {
    return 'link[rel="stylesheet"][' + t + "]";
  }
  function rd(t) {
    return p({}, t, { "data-precedence": t.precedence, precedence: null });
  }
  function Cg(t, n, a, i) {
    t.querySelector('link[rel="preload"][as="style"][' + n + "]")
      ? (i.loading = 1)
      : ((n = t.createElement("link")),
        (i.preload = n),
        n.addEventListener("load", function () {
          return (i.loading |= 1);
        }),
        n.addEventListener("error", function () {
          return (i.loading |= 2);
        }),
        Ke(n, "link", a),
        Le(n),
        t.head.appendChild(n));
  }
  function Ya(t) {
    return '[src="' + mt(t) + '"]';
  }
  function Ji(t) {
    return "script[async]" + t;
  }
  function ud(t, n, a) {
    if ((n.count++, n.instance === null))
      switch (n.type) {
        case "style":
          var i = t.querySelector('style[data-href~="' + mt(a.href) + '"]');
          if (i) return (n.instance = i), Le(i), i;
          var s = p({}, a, {
            "data-href": a.href,
            "data-precedence": a.precedence,
            href: null,
            precedence: null,
          });
          return (
            (i = (t.ownerDocument || t).createElement("style")),
            Le(i),
            Ke(i, "style", s),
            ms(i, a.precedence, t),
            (n.instance = i)
          );
        case "stylesheet":
          s = $a(a.href);
          var o = t.querySelector(Zi(s));
          if (o) return (n.state.loading |= 4), (n.instance = o), Le(o), o;
          (i = rd(a)),
            (s = Tt.get(s)) && Yu(i, s),
            (o = (t.ownerDocument || t).createElement("link")),
            Le(o);
          var v = o;
          return (
            (v._p = new Promise(function (y, b) {
              (v.onload = y), (v.onerror = b);
            })),
            Ke(o, "link", i),
            (n.state.loading |= 4),
            ms(o, a.precedence, t),
            (n.instance = o)
          );
        case "script":
          return (
            (o = Ya(a.src)),
            (s = t.querySelector(Ji(o)))
              ? ((n.instance = s), Le(s), s)
              : ((i = a),
                (s = Tt.get(o)) && ((i = p({}, a)), Qu(i, s)),
                (t = t.ownerDocument || t),
                (s = t.createElement("script")),
                Le(s),
                Ke(s, "link", i),
                t.head.appendChild(s),
                (n.instance = s))
          );
        case "void":
          return null;
        default:
          throw Error(r(443, n.type));
      }
    else
      n.type === "stylesheet" &&
        (n.state.loading & 4) === 0 &&
        ((i = n.instance), (n.state.loading |= 4), ms(i, a.precedence, t));
    return n.instance;
  }
  function ms(t, n, a) {
    for (
      var i = a.querySelectorAll(
          'link[rel="stylesheet"][data-precedence],style[data-precedence]'
        ),
        s = i.length ? i[i.length - 1] : null,
        o = s,
        v = 0;
      v < i.length;
      v++
    ) {
      var y = i[v];
      if (y.dataset.precedence === n) o = y;
      else if (o !== s) break;
    }
    o
      ? o.parentNode.insertBefore(t, o.nextSibling)
      : ((n = a.nodeType === 9 ? a.head : a), n.insertBefore(t, n.firstChild));
  }
  function Yu(t, n) {
    t.crossOrigin == null && (t.crossOrigin = n.crossOrigin),
      t.referrerPolicy == null && (t.referrerPolicy = n.referrerPolicy),
      t.title == null && (t.title = n.title);
  }
  function Qu(t, n) {
    t.crossOrigin == null && (t.crossOrigin = n.crossOrigin),
      t.referrerPolicy == null && (t.referrerPolicy = n.referrerPolicy),
      t.integrity == null && (t.integrity = n.integrity);
  }
  var _s = null;
  function od(t, n, a) {
    if (_s === null) {
      var i = new Map(),
        s = (_s = new Map());
      s.set(a, i);
    } else (s = _s), (i = s.get(a)), i || ((i = new Map()), s.set(a, i));
    if (i.has(t)) return i;
    for (
      i.set(t, null), a = a.getElementsByTagName(t), s = 0;
      s < a.length;
      s++
    ) {
      var o = a[s];
      if (
        !(
          o[ui] ||
          o[We] ||
          (t === "link" && o.getAttribute("rel") === "stylesheet")
        ) &&
        o.namespaceURI !== "http://www.w3.org/2000/svg"
      ) {
        var v = o.getAttribute(n) || "";
        v = t + v;
        var y = i.get(v);
        y ? y.push(o) : i.set(v, [o]);
      }
    }
    return i;
  }
  function cd(t, n, a) {
    (t = t.ownerDocument || t),
      t.head.insertBefore(
        a,
        n === "title" ? t.querySelector("head > title") : null
      );
  }
  function Mg(t, n, a) {
    if (a === 1 || n.itemProp != null) return !1;
    switch (t) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (
          typeof n.precedence != "string" ||
          typeof n.href != "string" ||
          n.href === ""
        )
          break;
        return !0;
      case "link":
        if (
          typeof n.rel != "string" ||
          typeof n.href != "string" ||
          n.href === "" ||
          n.onLoad ||
          n.onError
        )
          break;
        switch (n.rel) {
          case "stylesheet":
            return (
              (t = n.disabled), typeof n.precedence == "string" && t == null
            );
          default:
            return !0;
        }
      case "script":
        if (
          n.async &&
          typeof n.async != "function" &&
          typeof n.async != "symbol" &&
          !n.onLoad &&
          !n.onError &&
          n.src &&
          typeof n.src == "string"
        )
          return !0;
    }
    return !1;
  }
  function fd(t) {
    return !(t.type === "stylesheet" && (t.state.loading & 3) === 0);
  }
  var Wi = null;
  function Ng() {}
  function zg(t, n, a) {
    if (Wi === null) throw Error(r(475));
    var i = Wi;
    if (
      n.type === "stylesheet" &&
      (typeof a.media != "string" || matchMedia(a.media).matches !== !1) &&
      (n.state.loading & 4) === 0
    ) {
      if (n.instance === null) {
        var s = $a(a.href),
          o = t.querySelector(Zi(s));
        if (o) {
          (t = o._p),
            t !== null &&
              typeof t == "object" &&
              typeof t.then == "function" &&
              (i.count++, (i = ps.bind(i)), t.then(i, i)),
            (n.state.loading |= 4),
            (n.instance = o),
            Le(o);
          return;
        }
        (o = t.ownerDocument || t),
          (a = rd(a)),
          (s = Tt.get(s)) && Yu(a, s),
          (o = o.createElement("link")),
          Le(o);
        var v = o;
        (v._p = new Promise(function (y, b) {
          (v.onload = y), (v.onerror = b);
        })),
          Ke(o, "link", a),
          (n.instance = o);
      }
      i.stylesheets === null && (i.stylesheets = new Map()),
        i.stylesheets.set(n, t),
        (t = n.state.preload) &&
          (n.state.loading & 3) === 0 &&
          (i.count++,
          (n = ps.bind(i)),
          t.addEventListener("load", n),
          t.addEventListener("error", n));
    }
  }
  function kg() {
    if (Wi === null) throw Error(r(475));
    var t = Wi;
    return (
      t.stylesheets && t.count === 0 && Vu(t, t.stylesheets),
      0 < t.count
        ? function (n) {
            var a = setTimeout(function () {
              if ((t.stylesheets && Vu(t, t.stylesheets), t.unsuspend)) {
                var i = t.unsuspend;
                (t.unsuspend = null), i();
              }
            }, 6e4);
            return (
              (t.unsuspend = n),
              function () {
                (t.unsuspend = null), clearTimeout(a);
              }
            );
          }
        : null
    );
  }
  function ps() {
    if ((this.count--, this.count === 0)) {
      if (this.stylesheets) Vu(this, this.stylesheets);
      else if (this.unsuspend) {
        var t = this.unsuspend;
        (this.unsuspend = null), t();
      }
    }
  }
  var bs = null;
  function Vu(t, n) {
    (t.stylesheets = null),
      t.unsuspend !== null &&
        (t.count++,
        (bs = new Map()),
        n.forEach(qg, t),
        (bs = null),
        ps.call(t));
  }
  function qg(t, n) {
    if (!(n.state.loading & 4)) {
      var a = bs.get(t);
      if (a) var i = a.get(null);
      else {
        (a = new Map()), bs.set(t, a);
        for (
          var s = t.querySelectorAll(
              "link[data-precedence],style[data-precedence]"
            ),
            o = 0;
          o < s.length;
          o++
        ) {
          var v = s[o];
          (v.nodeName === "LINK" || v.getAttribute("media") !== "not all") &&
            (a.set(v.dataset.precedence, v), (i = v));
        }
        i && a.set(null, i);
      }
      (s = n.instance),
        (v = s.getAttribute("data-precedence")),
        (o = a.get(v) || i),
        o === i && a.set(null, s),
        a.set(v, s),
        this.count++,
        (i = ps.bind(this)),
        s.addEventListener("load", i),
        s.addEventListener("error", i),
        o
          ? o.parentNode.insertBefore(s, o.nextSibling)
          : ((t = t.nodeType === 9 ? t.head : t),
            t.insertBefore(s, t.firstChild)),
        (n.state.loading |= 4);
    }
  }
  var Pi = {
    $$typeof: L,
    Provider: null,
    Consumer: null,
    _currentValue: P,
    _currentValue2: P,
    _threadCount: 0,
  };
  function Bg(t, n, a, i, s, o, v, y) {
    (this.tag = 1),
      (this.containerInfo = t),
      (this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode =
        this.next =
        this.pendingContext =
        this.context =
        this.cancelPendingCommit =
          null),
      (this.callbackPriority = 0),
      (this.expirationTimes = Gs(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = Gs(0)),
      (this.hiddenUpdates = Gs(null)),
      (this.identifierPrefix = i),
      (this.onUncaughtError = s),
      (this.onCaughtError = o),
      (this.onRecoverableError = v),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = y),
      (this.incompleteTransitions = new Map());
  }
  function hd(t, n, a, i, s, o, v, y, b, j, U, M) {
    return (
      (t = new Bg(t, n, a, v, y, b, j, M)),
      (n = 1),
      o === !0 && (n |= 24),
      (o = ct(3, null, null, n)),
      (t.current = o),
      (o.stateNode = t),
      (n = Or()),
      n.refCount++,
      (t.pooledCache = n),
      n.refCount++,
      (o.memoizedState = { element: i, isDehydrated: a, cache: n }),
      Ur(o),
      t
    );
  }
  function dd(t) {
    return t ? ((t = ba), t) : ba;
  }
  function vd(t, n, a, i, s, o) {
    (s = dd(s)),
      i.context === null ? (i.context = s) : (i.pendingContext = s),
      (i = on(n)),
      (i.payload = { element: a }),
      (o = o === void 0 ? null : o),
      o !== null && (i.callback = o),
      (a = cn(t, i, n)),
      a !== null && (gt(a, t, n), ji(a, t, n));
  }
  function gd(t, n) {
    if (((t = t.memoizedState), t !== null && t.dehydrated !== null)) {
      var a = t.retryLane;
      t.retryLane = a !== 0 && a < n ? a : n;
    }
  }
  function Xu(t, n) {
    gd(t, n), (t = t.alternate) && gd(t, n);
  }
  function yd(t) {
    if (t.tag === 13) {
      var n = pa(t, 67108864);
      n !== null && gt(n, t, 67108864), Xu(t, 67108864);
    }
  }
  var Ss = !0;
  function Hg(t, n, a, i) {
    var s = D.T;
    D.T = null;
    var o = $.p;
    try {
      ($.p = 2), Ku(t, n, a, i);
    } finally {
      ($.p = o), (D.T = s);
    }
  }
  function Lg(t, n, a, i) {
    var s = D.T;
    D.T = null;
    var o = $.p;
    try {
      ($.p = 8), Ku(t, n, a, i);
    } finally {
      ($.p = o), (D.T = s);
    }
  }
  function Ku(t, n, a, i) {
    if (Ss) {
      var s = Zu(i);
      if (s === null) Nu(t, n, i, ws, a), _d(t, i);
      else if ($g(s, t, n, a, i)) i.stopPropagation();
      else if ((_d(t, i), n & 4 && -1 < Gg.indexOf(t))) {
        for (; s !== null; ) {
          var o = ra(s);
          if (o !== null)
            switch (o.tag) {
              case 3:
                if (((o = o.stateNode), o.current.memoizedState.isDehydrated)) {
                  var v = Nn(o.pendingLanes);
                  if (v !== 0) {
                    var y = o;
                    for (y.pendingLanes |= 2, y.entangledLanes |= 2; v; ) {
                      var b = 1 << (31 - ut(v));
                      (y.entanglements[1] |= b), (v &= ~b);
                    }
                    kt(o), (ge & 6) === 0 && ((ls = Dt() + 500), Qi(0));
                  }
                }
                break;
              case 13:
                (y = pa(o, 2)), y !== null && gt(y, o, 2), rs(), Xu(o, 2);
            }
          if (((o = Zu(i)), o === null && Nu(t, n, i, ws, a), o === s)) break;
          s = o;
        }
        s !== null && i.stopPropagation();
      } else Nu(t, n, i, null, a);
    }
  }
  function Zu(t) {
    return (t = Fs(t)), Ju(t);
  }
  var ws = null;
  function Ju(t) {
    if (((ws = null), (t = sa(t)), t !== null)) {
      var n = h(t);
      if (n === null) t = null;
      else {
        var a = n.tag;
        if (a === 13) {
          if (((t = d(n)), t !== null)) return t;
          t = null;
        } else if (a === 3) {
          if (n.stateNode.current.memoizedState.isDehydrated)
            return n.tag === 3 ? n.stateNode.containerInfo : null;
          t = null;
        } else n !== t && (t = null);
      }
    }
    return (ws = t), null;
  }
  function md(t) {
    switch (t) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (Ov()) {
          case Uo:
            return 2;
          case Do:
            return 8;
          case vl:
          case jv:
            return 32;
          case Co:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Wu = !1,
    En = null,
    Tn = null,
    An = null,
    Ii = new Map(),
    Fi = new Map(),
    On = [],
    Gg =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
        " "
      );
  function _d(t, n) {
    switch (t) {
      case "focusin":
      case "focusout":
        En = null;
        break;
      case "dragenter":
      case "dragleave":
        Tn = null;
        break;
      case "mouseover":
      case "mouseout":
        An = null;
        break;
      case "pointerover":
      case "pointerout":
        Ii.delete(n.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Fi.delete(n.pointerId);
    }
  }
  function el(t, n, a, i, s, o) {
    return t === null || t.nativeEvent !== o
      ? ((t = {
          blockedOn: n,
          domEventName: a,
          eventSystemFlags: i,
          nativeEvent: o,
          targetContainers: [s],
        }),
        n !== null && ((n = ra(n)), n !== null && yd(n)),
        t)
      : ((t.eventSystemFlags |= i),
        (n = t.targetContainers),
        s !== null && n.indexOf(s) === -1 && n.push(s),
        t);
  }
  function $g(t, n, a, i, s) {
    switch (n) {
      case "focusin":
        return (En = el(En, t, n, a, i, s)), !0;
      case "dragenter":
        return (Tn = el(Tn, t, n, a, i, s)), !0;
      case "mouseover":
        return (An = el(An, t, n, a, i, s)), !0;
      case "pointerover":
        var o = s.pointerId;
        return Ii.set(o, el(Ii.get(o) || null, t, n, a, i, s)), !0;
      case "gotpointercapture":
        return (
          (o = s.pointerId), Fi.set(o, el(Fi.get(o) || null, t, n, a, i, s)), !0
        );
    }
    return !1;
  }
  function pd(t) {
    var n = sa(t.target);
    if (n !== null) {
      var a = h(n);
      if (a !== null) {
        if (((n = a.tag), n === 13)) {
          if (((n = d(a)), n !== null)) {
            (t.blockedOn = n),
              zv(t.priority, function () {
                if (a.tag === 13) {
                  var i = vt();
                  i = $s(i);
                  var s = pa(a, i);
                  s !== null && gt(s, a, i), Xu(a, i);
                }
              });
            return;
          }
        } else if (n === 3 && a.stateNode.current.memoizedState.isDehydrated) {
          t.blockedOn = a.tag === 3 ? a.stateNode.containerInfo : null;
          return;
        }
      }
    }
    t.blockedOn = null;
  }
  function Es(t) {
    if (t.blockedOn !== null) return !1;
    for (var n = t.targetContainers; 0 < n.length; ) {
      var a = Zu(t.nativeEvent);
      if (a === null) {
        a = t.nativeEvent;
        var i = new a.constructor(a.type, a);
        (Is = i), a.target.dispatchEvent(i), (Is = null);
      } else return (n = ra(a)), n !== null && yd(n), (t.blockedOn = a), !1;
      n.shift();
    }
    return !0;
  }
  function bd(t, n, a) {
    Es(t) && a.delete(n);
  }
  function Yg() {
    (Wu = !1),
      En !== null && Es(En) && (En = null),
      Tn !== null && Es(Tn) && (Tn = null),
      An !== null && Es(An) && (An = null),
      Ii.forEach(bd),
      Fi.forEach(bd);
  }
  function Ts(t, n) {
    t.blockedOn === n &&
      ((t.blockedOn = null),
      Wu ||
        ((Wu = !0),
        f.unstable_scheduleCallback(f.unstable_NormalPriority, Yg)));
  }
  var As = null;
  function Sd(t) {
    As !== t &&
      ((As = t),
      f.unstable_scheduleCallback(f.unstable_NormalPriority, function () {
        As === t && (As = null);
        for (var n = 0; n < t.length; n += 3) {
          var a = t[n],
            i = t[n + 1],
            s = t[n + 2];
          if (typeof i != "function") {
            if (Ju(i || a) === null) continue;
            break;
          }
          var o = ra(a);
          o !== null &&
            (t.splice(n, 3),
            (n -= 3),
            Jr(o, { pending: !0, data: s, method: a.method, action: i }, i, s));
        }
      }));
  }
  function tl(t) {
    function n(b) {
      return Ts(b, t);
    }
    En !== null && Ts(En, t),
      Tn !== null && Ts(Tn, t),
      An !== null && Ts(An, t),
      Ii.forEach(n),
      Fi.forEach(n);
    for (var a = 0; a < On.length; a++) {
      var i = On[a];
      i.blockedOn === t && (i.blockedOn = null);
    }
    for (; 0 < On.length && ((a = On[0]), a.blockedOn === null); )
      pd(a), a.blockedOn === null && On.shift();
    if (((a = (t.ownerDocument || t).$$reactFormReplay), a != null))
      for (i = 0; i < a.length; i += 3) {
        var s = a[i],
          o = a[i + 1],
          v = s[et] || null;
        if (typeof o == "function") v || Sd(a);
        else if (v) {
          var y = null;
          if (o && o.hasAttribute("formAction")) {
            if (((s = o), (v = o[et] || null))) y = v.formAction;
            else if (Ju(s) !== null) continue;
          } else y = v.action;
          typeof y == "function" ? (a[i + 1] = y) : (a.splice(i, 3), (i -= 3)),
            Sd(a);
        }
      }
  }
  function Pu(t) {
    this._internalRoot = t;
  }
  (Os.prototype.render = Pu.prototype.render =
    function (t) {
      var n = this._internalRoot;
      if (n === null) throw Error(r(409));
      var a = n.current,
        i = vt();
      vd(a, i, t, n, null, null);
    }),
    (Os.prototype.unmount = Pu.prototype.unmount =
      function () {
        var t = this._internalRoot;
        if (t !== null) {
          this._internalRoot = null;
          var n = t.containerInfo;
          vd(t.current, 2, null, t, null, null), rs(), (n[la] = null);
        }
      });
  function Os(t) {
    this._internalRoot = t;
  }
  Os.prototype.unstable_scheduleHydration = function (t) {
    if (t) {
      var n = qo();
      t = { blockedOn: null, target: t, priority: n };
      for (var a = 0; a < On.length && n !== 0 && n < On[a].priority; a++);
      On.splice(a, 0, t), a === 0 && pd(t);
    }
  };
  var wd = l.version;
  if (wd !== "19.1.1") throw Error(r(527, wd, "19.1.1"));
  $.findDOMNode = function (t) {
    var n = t._reactInternals;
    if (n === void 0)
      throw typeof t.render == "function"
        ? Error(r(188))
        : ((t = Object.keys(t).join(",")), Error(r(268, t)));
    return (
      (t = _(n)),
      (t = t !== null ? g(t) : null),
      (t = t === null ? null : t.stateNode),
      t
    );
  };
  var Qg = {
    bundleType: 0,
    version: "19.1.1",
    rendererPackageName: "react-dom",
    currentDispatcherRef: D,
    reconcilerVersion: "19.1.1",
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var js = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!js.isDisabled && js.supportsFiber)
      try {
        (li = js.inject(Qg)), (rt = js);
      } catch {}
  }
  return (
    (al.createRoot = function (t, n) {
      if (!c(t)) throw Error(r(299));
      var a = !1,
        i = "",
        s = Bf,
        o = Hf,
        v = Lf,
        y = null;
      return (
        n != null &&
          (n.unstable_strictMode === !0 && (a = !0),
          n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
          n.onUncaughtError !== void 0 && (s = n.onUncaughtError),
          n.onCaughtError !== void 0 && (o = n.onCaughtError),
          n.onRecoverableError !== void 0 && (v = n.onRecoverableError),
          n.unstable_transitionCallbacks !== void 0 &&
            (y = n.unstable_transitionCallbacks)),
        (n = hd(t, 1, !1, null, null, a, i, s, o, v, y, null)),
        (t[la] = n.current),
        Mu(t),
        new Pu(n)
      );
    }),
    (al.hydrateRoot = function (t, n, a) {
      if (!c(t)) throw Error(r(299));
      var i = !1,
        s = "",
        o = Bf,
        v = Hf,
        y = Lf,
        b = null,
        j = null;
      return (
        a != null &&
          (a.unstable_strictMode === !0 && (i = !0),
          a.identifierPrefix !== void 0 && (s = a.identifierPrefix),
          a.onUncaughtError !== void 0 && (o = a.onUncaughtError),
          a.onCaughtError !== void 0 && (v = a.onCaughtError),
          a.onRecoverableError !== void 0 && (y = a.onRecoverableError),
          a.unstable_transitionCallbacks !== void 0 &&
            (b = a.unstable_transitionCallbacks),
          a.formState !== void 0 && (j = a.formState)),
        (n = hd(t, 1, !0, n, a ?? null, i, s, o, v, y, b, j)),
        (n.context = dd(null)),
        (a = n.current),
        (i = vt()),
        (i = $s(i)),
        (s = on(i)),
        (s.callback = null),
        cn(a, s, i),
        (a = i),
        (n.current.lanes = a),
        ri(n, a),
        kt(n),
        (t[la] = n.current),
        Mu(t),
        new Os(n)
      );
    }),
    (al.version = "19.1.1"),
    al
  );
}
var Cd;
function ny() {
  if (Cd) return eo.exports;
  Cd = 1;
  function f() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(f);
      } catch (l) {
        console.error(l);
      }
  }
  return f(), (eo.exports = ty()), eo.exports;
}
var ay = ny();
const iy = "_icon_nd9yl_5",
  ly = "_titulo_nd9yl_29",
  sy = "_subtitulo_nd9yl_45",
  ry = "_cabecalho_nd9yl_63",
  Rs = { icon: iy, titulo: ly, subtitulo: sy, cabecalho: ry };
function uy() {
  return H.jsx(H.Fragment, {
    children: H.jsxs("header", {
      className: Rs.cabecalho,
      children: [
        H.jsxs("h1", {
          className: Rs.titulo,
          children: [
            H.jsx("svg", {
              className: Rs.icon,
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 16 16",
              role: "img",
              "aria-hidden": "true",
              children: H.jsx("path", {
                d: "M2.678 11.894a1 1 0 0 1 .287.801 11 11 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8 8 0 0 0 8 14c3.996 0 7-2.807 7-6s-3.004-6-7-6-7 2.808-7 6c0 1.468.617 2.83 1.678 3.894m-.493 3.905a22 22 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a10 10 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9 9 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105",
              }),
            }),
            "WhatsHub",
          ],
        }),
        H.jsxs("h5", {
          className: Rs.subtitulo,
          children: [
            "O jeito mais rápido de iniciar conversas pelo Whatsapp. Gere links instantâneos e",
            H.jsx("br", {}),
            "mantenha seus contatos organizados",
          ],
        }),
      ],
    }),
  });
}
const oy = "_container_1l0wo_3",
  cy = "_secaoum_1l0wo_25",
  Md = { container: oy, secaoum: cy },
  fy = "_agenda_container_2iwv2_3",
  hy = "_salvar_na_agenda_2iwv2_17",
  dy = "_numero_2iwv2_43",
  vy = "_nome_2iwv2_107",
  gy = "_botao_2iwv2_123",
  yy = "_agenda_2iwv2_3",
  In = {
    agenda_container: fy,
    salvar_na_agenda: hy,
    numero: dy,
    nome: vy,
    botao: gy,
    agenda: yy,
  },
  my = "modulepreload",
  _y = function (f, l) {
    return new URL(f, l).href;
  },
  Nd = {},
  fl = function (l, u, r) {
    let c = Promise.resolve();
    if (u && u.length > 0) {
      let g = function (p) {
        return Promise.all(
          p.map((E) =>
            Promise.resolve(E).then(
              (O) => ({ status: "fulfilled", value: O }),
              (O) => ({ status: "rejected", reason: O })
            )
          )
        );
      };
      const d = document.getElementsByTagName("link"),
        m = document.querySelector("meta[property=csp-nonce]"),
        _ = m?.nonce || m?.getAttribute("nonce");
      c = g(
        u.map((p) => {
          if (((p = _y(p, r)), p in Nd)) return;
          Nd[p] = !0;
          const E = p.endsWith(".css"),
            O = E ? '[rel="stylesheet"]' : "";
          if (!!r)
            for (let q = d.length - 1; q >= 0; q--) {
              const B = d[q];
              if (B.href === p && (!E || B.rel === "stylesheet")) return;
            }
          else if (document.querySelector(`link[href="${p}"]${O}`)) return;
          const k = document.createElement("link");
          if (
            ((k.rel = E ? "stylesheet" : my),
            E || (k.as = "script"),
            (k.crossOrigin = ""),
            (k.href = p),
            _ && k.setAttribute("nonce", _),
            document.head.appendChild(k),
            E)
          )
            return new Promise((q, B) => {
              k.addEventListener("load", q),
                k.addEventListener("error", () =>
                  B(new Error(`Unable to preload CSS for ${p}`))
                );
            });
        })
      );
    }
    function h(d) {
      const m = new Event("vite:preloadError", { cancelable: !0 });
      if (((m.payload = d), window.dispatchEvent(m), !m.defaultPrevented))
        throw d;
    }
    return c.then((d) => {
      for (const m of d || []) m.status === "rejected" && h(m.reason);
      return l().catch(h);
    });
  },
  py = (f) => {
    let l;
    return (
      f
        ? (l = f)
        : typeof fetch > "u"
        ? (l = (...u) =>
            fl(
              async () => {
                const { default: r } = await Promise.resolve().then(() => ii);
                return { default: r };
              },
              void 0,
              import.meta.url
            ).then(({ default: r }) => r(...u)))
        : (l = fetch),
      (...u) => l(...u)
    );
  };
class Ao extends Error {
  constructor(l, u = "FunctionsError", r) {
    super(l), (this.name = u), (this.context = r);
  }
}
class zd extends Ao {
  constructor(l) {
    super(
      "Failed to send a request to the Edge Function",
      "FunctionsFetchError",
      l
    );
  }
}
class kd extends Ao {
  constructor(l) {
    super("Relay Error invoking the Edge Function", "FunctionsRelayError", l);
  }
}
class qd extends Ao {
  constructor(l) {
    super(
      "Edge Function returned a non-2xx status code",
      "FunctionsHttpError",
      l
    );
  }
}
var ho;
(function (f) {
  (f.Any = "any"),
    (f.ApNortheast1 = "ap-northeast-1"),
    (f.ApNortheast2 = "ap-northeast-2"),
    (f.ApSouth1 = "ap-south-1"),
    (f.ApSoutheast1 = "ap-southeast-1"),
    (f.ApSoutheast2 = "ap-southeast-2"),
    (f.CaCentral1 = "ca-central-1"),
    (f.EuCentral1 = "eu-central-1"),
    (f.EuWest1 = "eu-west-1"),
    (f.EuWest2 = "eu-west-2"),
    (f.EuWest3 = "eu-west-3"),
    (f.SaEast1 = "sa-east-1"),
    (f.UsEast1 = "us-east-1"),
    (f.UsWest1 = "us-west-1"),
    (f.UsWest2 = "us-west-2");
})(ho || (ho = {}));
var by = function (f, l, u, r) {
  function c(h) {
    return h instanceof u
      ? h
      : new u(function (d) {
          d(h);
        });
  }
  return new (u || (u = Promise))(function (h, d) {
    function m(p) {
      try {
        g(r.next(p));
      } catch (E) {
        d(E);
      }
    }
    function _(p) {
      try {
        g(r.throw(p));
      } catch (E) {
        d(E);
      }
    }
    function g(p) {
      p.done ? h(p.value) : c(p.value).then(m, _);
    }
    g((r = r.apply(f, l || [])).next());
  });
};
class Sy {
  constructor(l, { headers: u = {}, customFetch: r, region: c = ho.Any } = {}) {
    (this.url = l), (this.headers = u), (this.region = c), (this.fetch = py(r));
  }
  setAuth(l) {
    this.headers.Authorization = `Bearer ${l}`;
  }
  invoke(l, u = {}) {
    var r;
    return by(this, void 0, void 0, function* () {
      try {
        const { headers: c, method: h, body: d, signal: m } = u;
        let _ = {},
          { region: g } = u;
        g || (g = this.region);
        const p = new URL(`${this.url}/${l}`);
        g &&
          g !== "any" &&
          ((_["x-region"] = g), p.searchParams.set("forceFunctionRegion", g));
        let E;
        d &&
          ((c && !Object.prototype.hasOwnProperty.call(c, "Content-Type")) ||
            !c) &&
          ((typeof Blob < "u" && d instanceof Blob) || d instanceof ArrayBuffer
            ? ((_["Content-Type"] = "application/octet-stream"), (E = d))
            : typeof d == "string"
            ? ((_["Content-Type"] = "text/plain"), (E = d))
            : typeof FormData < "u" && d instanceof FormData
            ? (E = d)
            : ((_["Content-Type"] = "application/json"),
              (E = JSON.stringify(d))));
        const O = yield this.fetch(p.toString(), {
            method: h || "POST",
            headers: Object.assign(
              Object.assign(Object.assign({}, _), this.headers),
              c
            ),
            body: E,
            signal: m,
          }).catch((B) => {
            throw B.name === "AbortError" ? B : new zd(B);
          }),
          z = O.headers.get("x-relay-error");
        if (z && z === "true") throw new kd(O);
        if (!O.ok) throw new qd(O);
        let k = (
            (r = O.headers.get("Content-Type")) !== null && r !== void 0
              ? r
              : "text/plain"
          )
            .split(";")[0]
            .trim(),
          q;
        return (
          k === "application/json"
            ? (q = yield O.json())
            : k === "application/octet-stream"
            ? (q = yield O.blob())
            : k === "text/event-stream"
            ? (q = O)
            : k === "multipart/form-data"
            ? (q = yield O.formData())
            : (q = yield O.text()),
          { data: q, error: null, response: O }
        );
      } catch (c) {
        return c instanceof Error && c.name === "AbortError"
          ? { data: null, error: new zd(c) }
          : {
              data: null,
              error: c,
              response: c instanceof qd || c instanceof kd ? c.context : void 0,
            };
      }
    });
  }
}
var Qe = {},
  Qa = {},
  Va = {},
  Xa = {},
  Ka = {},
  Za = {},
  wy = function () {
    if (typeof self < "u") return self;
    if (typeof window < "u") return window;
    if (typeof global < "u") return global;
    throw new Error("unable to locate global object");
  },
  ai = wy();
const Ey = ai.fetch,
  lv = ai.fetch.bind(ai),
  sv = ai.Headers,
  Ty = ai.Request,
  Ay = ai.Response,
  ii = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        Headers: sv,
        Request: Ty,
        Response: Ay,
        default: lv,
        fetch: Ey,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  Oy = Kg(ii);
var xs = {},
  Bd;
function rv() {
  if (Bd) return xs;
  (Bd = 1), Object.defineProperty(xs, "__esModule", { value: !0 });
  class f extends Error {
    constructor(u) {
      super(u.message),
        (this.name = "PostgrestError"),
        (this.details = u.details),
        (this.hint = u.hint),
        (this.code = u.code);
    }
  }
  return (xs.default = f), xs;
}
var Hd;
function uv() {
  if (Hd) return Za;
  Hd = 1;
  var f =
    (Za && Za.__importDefault) ||
    function (c) {
      return c && c.__esModule ? c : { default: c };
    };
  Object.defineProperty(Za, "__esModule", { value: !0 });
  const l = f(Oy),
    u = f(rv());
  class r {
    constructor(h) {
      var d, m;
      (this.shouldThrowOnError = !1),
        (this.method = h.method),
        (this.url = h.url),
        (this.headers = new Headers(h.headers)),
        (this.schema = h.schema),
        (this.body = h.body),
        (this.shouldThrowOnError =
          (d = h.shouldThrowOnError) !== null && d !== void 0 ? d : !1),
        (this.signal = h.signal),
        (this.isMaybeSingle =
          (m = h.isMaybeSingle) !== null && m !== void 0 ? m : !1),
        h.fetch
          ? (this.fetch = h.fetch)
          : typeof fetch > "u"
          ? (this.fetch = l.default)
          : (this.fetch = fetch);
    }
    throwOnError() {
      return (this.shouldThrowOnError = !0), this;
    }
    setHeader(h, d) {
      return (
        (this.headers = new Headers(this.headers)), this.headers.set(h, d), this
      );
    }
    then(h, d) {
      this.schema === void 0 ||
        (["GET", "HEAD"].includes(this.method)
          ? this.headers.set("Accept-Profile", this.schema)
          : this.headers.set("Content-Profile", this.schema)),
        this.method !== "GET" &&
          this.method !== "HEAD" &&
          this.headers.set("Content-Type", "application/json");
      const m = this.fetch;
      let _ = m(this.url.toString(), {
        method: this.method,
        headers: this.headers,
        body: JSON.stringify(this.body),
        signal: this.signal,
      }).then(async (g) => {
        var p, E, O, z;
        let k = null,
          q = null,
          B = null,
          ae = g.status,
          Q = g.statusText;
        if (g.ok) {
          if (this.method !== "HEAD") {
            const ee = await g.text();
            ee === "" ||
              (this.headers.get("Accept") === "text/csv" ||
              (this.headers.get("Accept") &&
                !((p = this.headers.get("Accept")) === null || p === void 0) &&
                p.includes("application/vnd.pgrst.plan+text"))
                ? (q = ee)
                : (q = JSON.parse(ee)));
          }
          const I =
              (E = this.headers.get("Prefer")) === null || E === void 0
                ? void 0
                : E.match(/count=(exact|planned|estimated)/),
            K =
              (O = g.headers.get("content-range")) === null || O === void 0
                ? void 0
                : O.split("/");
          I && K && K.length > 1 && (B = parseInt(K[1])),
            this.isMaybeSingle &&
              this.method === "GET" &&
              Array.isArray(q) &&
              (q.length > 1
                ? ((k = {
                    code: "PGRST116",
                    details: `Results contain ${q.length} rows, application/vnd.pgrst.object+json requires 1 row`,
                    hint: null,
                    message:
                      "JSON object requested, multiple (or no) rows returned",
                  }),
                  (q = null),
                  (B = null),
                  (ae = 406),
                  (Q = "Not Acceptable"))
                : q.length === 1
                ? (q = q[0])
                : (q = null));
        } else {
          const I = await g.text();
          try {
            (k = JSON.parse(I)),
              Array.isArray(k) &&
                g.status === 404 &&
                ((q = []), (k = null), (ae = 200), (Q = "OK"));
          } catch {
            g.status === 404 && I === ""
              ? ((ae = 204), (Q = "No Content"))
              : (k = { message: I });
          }
          if (
            (k &&
              this.isMaybeSingle &&
              !((z = k?.details) === null || z === void 0) &&
              z.includes("0 rows") &&
              ((k = null), (ae = 200), (Q = "OK")),
            k && this.shouldThrowOnError)
          )
            throw new u.default(k);
        }
        return { error: k, data: q, count: B, status: ae, statusText: Q };
      });
      return (
        this.shouldThrowOnError ||
          (_ = _.catch((g) => {
            var p, E, O;
            return {
              error: {
                message: `${
                  (p = g?.name) !== null && p !== void 0 ? p : "FetchError"
                }: ${g?.message}`,
                details: `${(E = g?.stack) !== null && E !== void 0 ? E : ""}`,
                hint: "",
                code: `${(O = g?.code) !== null && O !== void 0 ? O : ""}`,
              },
              data: null,
              count: null,
              status: 0,
              statusText: "",
            };
          })),
        _.then(h, d)
      );
    }
    returns() {
      return this;
    }
    overrideTypes() {
      return this;
    }
  }
  return (Za.default = r), Za;
}
var Ld;
function ov() {
  if (Ld) return Ka;
  Ld = 1;
  var f =
    (Ka && Ka.__importDefault) ||
    function (r) {
      return r && r.__esModule ? r : { default: r };
    };
  Object.defineProperty(Ka, "__esModule", { value: !0 });
  const l = f(uv());
  class u extends l.default {
    select(c) {
      let h = !1;
      const d = (c ?? "*")
        .split("")
        .map((m) => (/\s/.test(m) && !h ? "" : (m === '"' && (h = !h), m)))
        .join("");
      return (
        this.url.searchParams.set("select", d),
        this.headers.append("Prefer", "return=representation"),
        this
      );
    }
    order(
      c,
      {
        ascending: h = !0,
        nullsFirst: d,
        foreignTable: m,
        referencedTable: _ = m,
      } = {}
    ) {
      const g = _ ? `${_}.order` : "order",
        p = this.url.searchParams.get(g);
      return (
        this.url.searchParams.set(
          g,
          `${p ? `${p},` : ""}${c}.${h ? "asc" : "desc"}${
            d === void 0 ? "" : d ? ".nullsfirst" : ".nullslast"
          }`
        ),
        this
      );
    }
    limit(c, { foreignTable: h, referencedTable: d = h } = {}) {
      const m = typeof d > "u" ? "limit" : `${d}.limit`;
      return this.url.searchParams.set(m, `${c}`), this;
    }
    range(c, h, { foreignTable: d, referencedTable: m = d } = {}) {
      const _ = typeof m > "u" ? "offset" : `${m}.offset`,
        g = typeof m > "u" ? "limit" : `${m}.limit`;
      return (
        this.url.searchParams.set(_, `${c}`),
        this.url.searchParams.set(g, `${h - c + 1}`),
        this
      );
    }
    abortSignal(c) {
      return (this.signal = c), this;
    }
    single() {
      return (
        this.headers.set("Accept", "application/vnd.pgrst.object+json"), this
      );
    }
    maybeSingle() {
      return (
        this.method === "GET"
          ? this.headers.set("Accept", "application/json")
          : this.headers.set("Accept", "application/vnd.pgrst.object+json"),
        (this.isMaybeSingle = !0),
        this
      );
    }
    csv() {
      return this.headers.set("Accept", "text/csv"), this;
    }
    geojson() {
      return this.headers.set("Accept", "application/geo+json"), this;
    }
    explain({
      analyze: c = !1,
      verbose: h = !1,
      settings: d = !1,
      buffers: m = !1,
      wal: _ = !1,
      format: g = "text",
    } = {}) {
      var p;
      const E = [
          c ? "analyze" : null,
          h ? "verbose" : null,
          d ? "settings" : null,
          m ? "buffers" : null,
          _ ? "wal" : null,
        ]
          .filter(Boolean)
          .join("|"),
        O =
          (p = this.headers.get("Accept")) !== null && p !== void 0
            ? p
            : "application/json";
      return (
        this.headers.set(
          "Accept",
          `application/vnd.pgrst.plan+${g}; for="${O}"; options=${E};`
        ),
        g === "json" ? this : this
      );
    }
    rollback() {
      return this.headers.append("Prefer", "tx=rollback"), this;
    }
    returns() {
      return this;
    }
    maxAffected(c) {
      return (
        this.headers.append("Prefer", "handling=strict"),
        this.headers.append("Prefer", `max-affected=${c}`),
        this
      );
    }
  }
  return (Ka.default = u), Ka;
}
var Gd;
function Oo() {
  if (Gd) return Xa;
  Gd = 1;
  var f =
    (Xa && Xa.__importDefault) ||
    function (r) {
      return r && r.__esModule ? r : { default: r };
    };
  Object.defineProperty(Xa, "__esModule", { value: !0 });
  const l = f(ov());
  class u extends l.default {
    eq(c, h) {
      return this.url.searchParams.append(c, `eq.${h}`), this;
    }
    neq(c, h) {
      return this.url.searchParams.append(c, `neq.${h}`), this;
    }
    gt(c, h) {
      return this.url.searchParams.append(c, `gt.${h}`), this;
    }
    gte(c, h) {
      return this.url.searchParams.append(c, `gte.${h}`), this;
    }
    lt(c, h) {
      return this.url.searchParams.append(c, `lt.${h}`), this;
    }
    lte(c, h) {
      return this.url.searchParams.append(c, `lte.${h}`), this;
    }
    like(c, h) {
      return this.url.searchParams.append(c, `like.${h}`), this;
    }
    likeAllOf(c, h) {
      return (
        this.url.searchParams.append(c, `like(all).{${h.join(",")}}`), this
      );
    }
    likeAnyOf(c, h) {
      return (
        this.url.searchParams.append(c, `like(any).{${h.join(",")}}`), this
      );
    }
    ilike(c, h) {
      return this.url.searchParams.append(c, `ilike.${h}`), this;
    }
    ilikeAllOf(c, h) {
      return (
        this.url.searchParams.append(c, `ilike(all).{${h.join(",")}}`), this
      );
    }
    ilikeAnyOf(c, h) {
      return (
        this.url.searchParams.append(c, `ilike(any).{${h.join(",")}}`), this
      );
    }
    is(c, h) {
      return this.url.searchParams.append(c, `is.${h}`), this;
    }
    in(c, h) {
      const d = Array.from(new Set(h))
        .map((m) =>
          typeof m == "string" && new RegExp("[,()]").test(m)
            ? `"${m}"`
            : `${m}`
        )
        .join(",");
      return this.url.searchParams.append(c, `in.(${d})`), this;
    }
    contains(c, h) {
      return (
        typeof h == "string"
          ? this.url.searchParams.append(c, `cs.${h}`)
          : Array.isArray(h)
          ? this.url.searchParams.append(c, `cs.{${h.join(",")}}`)
          : this.url.searchParams.append(c, `cs.${JSON.stringify(h)}`),
        this
      );
    }
    containedBy(c, h) {
      return (
        typeof h == "string"
          ? this.url.searchParams.append(c, `cd.${h}`)
          : Array.isArray(h)
          ? this.url.searchParams.append(c, `cd.{${h.join(",")}}`)
          : this.url.searchParams.append(c, `cd.${JSON.stringify(h)}`),
        this
      );
    }
    rangeGt(c, h) {
      return this.url.searchParams.append(c, `sr.${h}`), this;
    }
    rangeGte(c, h) {
      return this.url.searchParams.append(c, `nxl.${h}`), this;
    }
    rangeLt(c, h) {
      return this.url.searchParams.append(c, `sl.${h}`), this;
    }
    rangeLte(c, h) {
      return this.url.searchParams.append(c, `nxr.${h}`), this;
    }
    rangeAdjacent(c, h) {
      return this.url.searchParams.append(c, `adj.${h}`), this;
    }
    overlaps(c, h) {
      return (
        typeof h == "string"
          ? this.url.searchParams.append(c, `ov.${h}`)
          : this.url.searchParams.append(c, `ov.{${h.join(",")}}`),
        this
      );
    }
    textSearch(c, h, { config: d, type: m } = {}) {
      let _ = "";
      m === "plain"
        ? (_ = "pl")
        : m === "phrase"
        ? (_ = "ph")
        : m === "websearch" && (_ = "w");
      const g = d === void 0 ? "" : `(${d})`;
      return this.url.searchParams.append(c, `${_}fts${g}.${h}`), this;
    }
    match(c) {
      return (
        Object.entries(c).forEach(([h, d]) => {
          this.url.searchParams.append(h, `eq.${d}`);
        }),
        this
      );
    }
    not(c, h, d) {
      return this.url.searchParams.append(c, `not.${h}.${d}`), this;
    }
    or(c, { foreignTable: h, referencedTable: d = h } = {}) {
      const m = d ? `${d}.or` : "or";
      return this.url.searchParams.append(m, `(${c})`), this;
    }
    filter(c, h, d) {
      return this.url.searchParams.append(c, `${h}.${d}`), this;
    }
  }
  return (Xa.default = u), Xa;
}
var $d;
function cv() {
  if ($d) return Va;
  $d = 1;
  var f =
    (Va && Va.__importDefault) ||
    function (r) {
      return r && r.__esModule ? r : { default: r };
    };
  Object.defineProperty(Va, "__esModule", { value: !0 });
  const l = f(Oo());
  class u {
    constructor(c, { headers: h = {}, schema: d, fetch: m }) {
      (this.url = c),
        (this.headers = new Headers(h)),
        (this.schema = d),
        (this.fetch = m);
    }
    select(c, { head: h = !1, count: d } = {}) {
      const m = h ? "HEAD" : "GET";
      let _ = !1;
      const g = (c ?? "*")
        .split("")
        .map((p) => (/\s/.test(p) && !_ ? "" : (p === '"' && (_ = !_), p)))
        .join("");
      return (
        this.url.searchParams.set("select", g),
        d && this.headers.append("Prefer", `count=${d}`),
        new l.default({
          method: m,
          url: this.url,
          headers: this.headers,
          schema: this.schema,
          fetch: this.fetch,
        })
      );
    }
    insert(c, { count: h, defaultToNull: d = !0 } = {}) {
      var m;
      const _ = "POST";
      if (
        (h && this.headers.append("Prefer", `count=${h}`),
        d || this.headers.append("Prefer", "missing=default"),
        Array.isArray(c))
      ) {
        const g = c.reduce((p, E) => p.concat(Object.keys(E)), []);
        if (g.length > 0) {
          const p = [...new Set(g)].map((E) => `"${E}"`);
          this.url.searchParams.set("columns", p.join(","));
        }
      }
      return new l.default({
        method: _,
        url: this.url,
        headers: this.headers,
        schema: this.schema,
        body: c,
        fetch: (m = this.fetch) !== null && m !== void 0 ? m : fetch,
      });
    }
    upsert(
      c,
      {
        onConflict: h,
        ignoreDuplicates: d = !1,
        count: m,
        defaultToNull: _ = !0,
      } = {}
    ) {
      var g;
      const p = "POST";
      if (
        (this.headers.append(
          "Prefer",
          `resolution=${d ? "ignore" : "merge"}-duplicates`
        ),
        h !== void 0 && this.url.searchParams.set("on_conflict", h),
        m && this.headers.append("Prefer", `count=${m}`),
        _ || this.headers.append("Prefer", "missing=default"),
        Array.isArray(c))
      ) {
        const E = c.reduce((O, z) => O.concat(Object.keys(z)), []);
        if (E.length > 0) {
          const O = [...new Set(E)].map((z) => `"${z}"`);
          this.url.searchParams.set("columns", O.join(","));
        }
      }
      return new l.default({
        method: p,
        url: this.url,
        headers: this.headers,
        schema: this.schema,
        body: c,
        fetch: (g = this.fetch) !== null && g !== void 0 ? g : fetch,
      });
    }
    update(c, { count: h } = {}) {
      var d;
      const m = "PATCH";
      return (
        h && this.headers.append("Prefer", `count=${h}`),
        new l.default({
          method: m,
          url: this.url,
          headers: this.headers,
          schema: this.schema,
          body: c,
          fetch: (d = this.fetch) !== null && d !== void 0 ? d : fetch,
        })
      );
    }
    delete({ count: c } = {}) {
      var h;
      const d = "DELETE";
      return (
        c && this.headers.append("Prefer", `count=${c}`),
        new l.default({
          method: d,
          url: this.url,
          headers: this.headers,
          schema: this.schema,
          fetch: (h = this.fetch) !== null && h !== void 0 ? h : fetch,
        })
      );
    }
  }
  return (Va.default = u), Va;
}
var Yd;
function jy() {
  if (Yd) return Qa;
  Yd = 1;
  var f =
    (Qa && Qa.__importDefault) ||
    function (c) {
      return c && c.__esModule ? c : { default: c };
    };
  Object.defineProperty(Qa, "__esModule", { value: !0 });
  const l = f(cv()),
    u = f(Oo());
  class r {
    constructor(h, { headers: d = {}, schema: m, fetch: _ } = {}) {
      (this.url = h),
        (this.headers = new Headers(d)),
        (this.schemaName = m),
        (this.fetch = _);
    }
    from(h) {
      const d = new URL(`${this.url}/${h}`);
      return new l.default(d, {
        headers: new Headers(this.headers),
        schema: this.schemaName,
        fetch: this.fetch,
      });
    }
    schema(h) {
      return new r(this.url, {
        headers: this.headers,
        schema: h,
        fetch: this.fetch,
      });
    }
    rpc(h, d = {}, { head: m = !1, get: _ = !1, count: g } = {}) {
      var p;
      let E;
      const O = new URL(`${this.url}/rpc/${h}`);
      let z;
      m || _
        ? ((E = m ? "HEAD" : "GET"),
          Object.entries(d)
            .filter(([q, B]) => B !== void 0)
            .map(([q, B]) => [
              q,
              Array.isArray(B) ? `{${B.join(",")}}` : `${B}`,
            ])
            .forEach(([q, B]) => {
              O.searchParams.append(q, B);
            }))
        : ((E = "POST"), (z = d));
      const k = new Headers(this.headers);
      return (
        g && k.set("Prefer", `count=${g}`),
        new u.default({
          method: E,
          url: O,
          headers: k,
          schema: this.schemaName,
          body: z,
          fetch: (p = this.fetch) !== null && p !== void 0 ? p : fetch,
        })
      );
    }
  }
  return (Qa.default = r), Qa;
}
var Qd;
function Ry() {
  if (Qd) return Qe;
  Qd = 1;
  var f =
    (Qe && Qe.__importDefault) ||
    function (m) {
      return m && m.__esModule ? m : { default: m };
    };
  Object.defineProperty(Qe, "__esModule", { value: !0 }),
    (Qe.PostgrestError =
      Qe.PostgrestBuilder =
      Qe.PostgrestTransformBuilder =
      Qe.PostgrestFilterBuilder =
      Qe.PostgrestQueryBuilder =
      Qe.PostgrestClient =
        void 0);
  const l = f(jy());
  Qe.PostgrestClient = l.default;
  const u = f(cv());
  Qe.PostgrestQueryBuilder = u.default;
  const r = f(Oo());
  Qe.PostgrestFilterBuilder = r.default;
  const c = f(ov());
  Qe.PostgrestTransformBuilder = c.default;
  const h = f(uv());
  Qe.PostgrestBuilder = h.default;
  const d = f(rv());
  return (
    (Qe.PostgrestError = d.default),
    (Qe.default = {
      PostgrestClient: l.default,
      PostgrestQueryBuilder: u.default,
      PostgrestFilterBuilder: r.default,
      PostgrestTransformBuilder: c.default,
      PostgrestBuilder: h.default,
      PostgrestError: d.default,
    }),
    Qe
  );
}
var xy = Ry();
const Uy = Xg(xy),
  {
    PostgrestClient: Dy,
    PostgrestQueryBuilder: I_,
    PostgrestFilterBuilder: F_,
    PostgrestTransformBuilder: ep,
    PostgrestBuilder: tp,
    PostgrestError: np,
  } = Uy;
class Cy {
  static detectEnvironment() {
    var l;
    if (typeof WebSocket < "u")
      return { type: "native", constructor: WebSocket };
    if (typeof globalThis < "u" && typeof globalThis.WebSocket < "u")
      return { type: "native", constructor: globalThis.WebSocket };
    if (typeof global < "u" && typeof global.WebSocket < "u")
      return { type: "native", constructor: global.WebSocket };
    if (
      typeof globalThis < "u" &&
      typeof globalThis.WebSocketPair < "u" &&
      typeof globalThis.WebSocket > "u"
    )
      return {
        type: "cloudflare",
        error:
          "Cloudflare Workers detected. WebSocket clients are not supported in Cloudflare Workers.",
        workaround:
          "Use Cloudflare Workers WebSocket API for server-side WebSocket handling, or deploy to a different runtime.",
      };
    if (
      (typeof globalThis < "u" && globalThis.EdgeRuntime) ||
      (typeof navigator < "u" &&
        !((l = navigator.userAgent) === null || l === void 0) &&
        l.includes("Vercel-Edge"))
    )
      return {
        type: "unsupported",
        error:
          "Edge runtime detected (Vercel Edge/Netlify Edge). WebSockets are not supported in edge functions.",
        workaround:
          "Use serverless functions or a different deployment target for WebSocket functionality.",
      };
    if (typeof process < "u") {
      const u = process.versions;
      if (u && u.node) {
        const r = u.node,
          c = parseInt(r.replace(/^v/, "").split(".")[0]);
        return c >= 22
          ? typeof globalThis.WebSocket < "u"
            ? { type: "native", constructor: globalThis.WebSocket }
            : {
                type: "unsupported",
                error: `Node.js ${c} detected but native WebSocket not found.`,
                workaround:
                  "Provide a WebSocket implementation via the transport option.",
              }
          : {
              type: "unsupported",
              error: `Node.js ${c} detected without native WebSocket support.`,
              workaround: `For Node.js < 22, install "ws" package and provide it via the transport option:
import ws from "ws"
new RealtimeClient(url, { transport: ws })`,
            };
      }
    }
    return {
      type: "unsupported",
      error: "Unknown JavaScript runtime without WebSocket support.",
      workaround:
        "Ensure you're running in a supported environment (browser, Node.js, Deno) or provide a custom WebSocket implementation.",
    };
  }
  static getWebSocketConstructor() {
    const l = this.detectEnvironment();
    if (l.constructor) return l.constructor;
    let u = l.error || "WebSocket not supported in this environment.";
    throw (
      (l.workaround &&
        (u += `

Suggested solution: ${l.workaround}`),
      new Error(u))
    );
  }
  static createWebSocket(l, u) {
    const r = this.getWebSocketConstructor();
    return new r(l, u);
  }
  static isWebSocketSupported() {
    try {
      const l = this.detectEnvironment();
      return l.type === "native" || l.type === "ws";
    } catch {
      return !1;
    }
  }
}
const My = "2.15.5",
  Ny = `realtime-js/${My}`,
  zy = "1.0.0",
  vo = 1e4,
  ky = 1e3,
  qy = 100;
var sl;
(function (f) {
  (f[(f.connecting = 0)] = "connecting"),
    (f[(f.open = 1)] = "open"),
    (f[(f.closing = 2)] = "closing"),
    (f[(f.closed = 3)] = "closed");
})(sl || (sl = {}));
var Be;
(function (f) {
  (f.closed = "closed"),
    (f.errored = "errored"),
    (f.joined = "joined"),
    (f.joining = "joining"),
    (f.leaving = "leaving");
})(Be || (Be = {}));
var Ut;
(function (f) {
  (f.close = "phx_close"),
    (f.error = "phx_error"),
    (f.join = "phx_join"),
    (f.reply = "phx_reply"),
    (f.leave = "phx_leave"),
    (f.access_token = "access_token");
})(Ut || (Ut = {}));
var go;
(function (f) {
  f.websocket = "websocket";
})(go || (go = {}));
var na;
(function (f) {
  (f.Connecting = "connecting"),
    (f.Open = "open"),
    (f.Closing = "closing"),
    (f.Closed = "closed");
})(na || (na = {}));
class By {
  constructor() {
    this.HEADER_LENGTH = 1;
  }
  decode(l, u) {
    return l.constructor === ArrayBuffer
      ? u(this._binaryDecode(l))
      : u(typeof l == "string" ? JSON.parse(l) : {});
  }
  _binaryDecode(l) {
    const u = new DataView(l),
      r = new TextDecoder();
    return this._decodeBroadcast(l, u, r);
  }
  _decodeBroadcast(l, u, r) {
    const c = u.getUint8(1),
      h = u.getUint8(2);
    let d = this.HEADER_LENGTH + 2;
    const m = r.decode(l.slice(d, d + c));
    d = d + c;
    const _ = r.decode(l.slice(d, d + h));
    d = d + h;
    const g = JSON.parse(r.decode(l.slice(d, l.byteLength)));
    return { ref: null, topic: m, event: _, payload: g };
  }
}
class fv {
  constructor(l, u) {
    (this.callback = l),
      (this.timerCalc = u),
      (this.timer = void 0),
      (this.tries = 0),
      (this.callback = l),
      (this.timerCalc = u);
  }
  reset() {
    (this.tries = 0), clearTimeout(this.timer), (this.timer = void 0);
  }
  scheduleTimeout() {
    clearTimeout(this.timer),
      (this.timer = setTimeout(() => {
        (this.tries = this.tries + 1), this.callback();
      }, this.timerCalc(this.tries + 1)));
  }
}
var Ee;
(function (f) {
  (f.abstime = "abstime"),
    (f.bool = "bool"),
    (f.date = "date"),
    (f.daterange = "daterange"),
    (f.float4 = "float4"),
    (f.float8 = "float8"),
    (f.int2 = "int2"),
    (f.int4 = "int4"),
    (f.int4range = "int4range"),
    (f.int8 = "int8"),
    (f.int8range = "int8range"),
    (f.json = "json"),
    (f.jsonb = "jsonb"),
    (f.money = "money"),
    (f.numeric = "numeric"),
    (f.oid = "oid"),
    (f.reltime = "reltime"),
    (f.text = "text"),
    (f.time = "time"),
    (f.timestamp = "timestamp"),
    (f.timestamptz = "timestamptz"),
    (f.timetz = "timetz"),
    (f.tsrange = "tsrange"),
    (f.tstzrange = "tstzrange");
})(Ee || (Ee = {}));
const Vd = (f, l, u = {}) => {
    var r;
    const c = (r = u.skipTypes) !== null && r !== void 0 ? r : [];
    return Object.keys(l).reduce((h, d) => ((h[d] = Hy(d, f, l, c)), h), {});
  },
  Hy = (f, l, u, r) => {
    const c = l.find((m) => m.name === f),
      h = c?.type,
      d = u[f];
    return h && !r.includes(h) ? hv(h, d) : yo(d);
  },
  hv = (f, l) => {
    if (f.charAt(0) === "_") {
      const u = f.slice(1, f.length);
      return Yy(l, u);
    }
    switch (f) {
      case Ee.bool:
        return Ly(l);
      case Ee.float4:
      case Ee.float8:
      case Ee.int2:
      case Ee.int4:
      case Ee.int8:
      case Ee.numeric:
      case Ee.oid:
        return Gy(l);
      case Ee.json:
      case Ee.jsonb:
        return $y(l);
      case Ee.timestamp:
        return Qy(l);
      case Ee.abstime:
      case Ee.date:
      case Ee.daterange:
      case Ee.int4range:
      case Ee.int8range:
      case Ee.money:
      case Ee.reltime:
      case Ee.text:
      case Ee.time:
      case Ee.timestamptz:
      case Ee.timetz:
      case Ee.tsrange:
      case Ee.tstzrange:
        return yo(l);
      default:
        return yo(l);
    }
  },
  yo = (f) => f,
  Ly = (f) => {
    switch (f) {
      case "t":
        return !0;
      case "f":
        return !1;
      default:
        return f;
    }
  },
  Gy = (f) => {
    if (typeof f == "string") {
      const l = parseFloat(f);
      if (!Number.isNaN(l)) return l;
    }
    return f;
  },
  $y = (f) => {
    if (typeof f == "string")
      try {
        return JSON.parse(f);
      } catch (l) {
        return console.log(`JSON parse error: ${l}`), f;
      }
    return f;
  },
  Yy = (f, l) => {
    if (typeof f != "string") return f;
    const u = f.length - 1,
      r = f[u];
    if (f[0] === "{" && r === "}") {
      let h;
      const d = f.slice(1, u);
      try {
        h = JSON.parse("[" + d + "]");
      } catch {
        h = d ? d.split(",") : [];
      }
      return h.map((m) => hv(l, m));
    }
    return f;
  },
  Qy = (f) => (typeof f == "string" ? f.replace(" ", "T") : f),
  dv = (f) => {
    let l = f;
    return (
      (l = l.replace(/^ws/i, "http")),
      (l = l.replace(/(\/socket\/websocket|\/socket|\/websocket)\/?$/i, "")),
      l.replace(/\/+$/, "") + "/api/broadcast"
    );
  };
class io {
  constructor(l, u, r = {}, c = vo) {
    (this.channel = l),
      (this.event = u),
      (this.payload = r),
      (this.timeout = c),
      (this.sent = !1),
      (this.timeoutTimer = void 0),
      (this.ref = ""),
      (this.receivedResp = null),
      (this.recHooks = []),
      (this.refEvent = null);
  }
  resend(l) {
    (this.timeout = l),
      this._cancelRefEvent(),
      (this.ref = ""),
      (this.refEvent = null),
      (this.receivedResp = null),
      (this.sent = !1),
      this.send();
  }
  send() {
    this._hasReceived("timeout") ||
      (this.startTimeout(),
      (this.sent = !0),
      this.channel.socket.push({
        topic: this.channel.topic,
        event: this.event,
        payload: this.payload,
        ref: this.ref,
        join_ref: this.channel._joinRef(),
      }));
  }
  updatePayload(l) {
    this.payload = Object.assign(Object.assign({}, this.payload), l);
  }
  receive(l, u) {
    var r;
    return (
      this._hasReceived(l) &&
        u(
          (r = this.receivedResp) === null || r === void 0 ? void 0 : r.response
        ),
      this.recHooks.push({ status: l, callback: u }),
      this
    );
  }
  startTimeout() {
    if (this.timeoutTimer) return;
    (this.ref = this.channel.socket._makeRef()),
      (this.refEvent = this.channel._replyEventName(this.ref));
    const l = (u) => {
      this._cancelRefEvent(),
        this._cancelTimeout(),
        (this.receivedResp = u),
        this._matchReceive(u);
    };
    this.channel._on(this.refEvent, {}, l),
      (this.timeoutTimer = setTimeout(() => {
        this.trigger("timeout", {});
      }, this.timeout));
  }
  trigger(l, u) {
    this.refEvent &&
      this.channel._trigger(this.refEvent, { status: l, response: u });
  }
  destroy() {
    this._cancelRefEvent(), this._cancelTimeout();
  }
  _cancelRefEvent() {
    this.refEvent && this.channel._off(this.refEvent, {});
  }
  _cancelTimeout() {
    clearTimeout(this.timeoutTimer), (this.timeoutTimer = void 0);
  }
  _matchReceive({ status: l, response: u }) {
    this.recHooks.filter((r) => r.status === l).forEach((r) => r.callback(u));
  }
  _hasReceived(l) {
    return this.receivedResp && this.receivedResp.status === l;
  }
}
var Xd;
(function (f) {
  (f.SYNC = "sync"), (f.JOIN = "join"), (f.LEAVE = "leave");
})(Xd || (Xd = {}));
class rl {
  constructor(l, u) {
    (this.channel = l),
      (this.state = {}),
      (this.pendingDiffs = []),
      (this.joinRef = null),
      (this.enabled = !1),
      (this.caller = { onJoin: () => {}, onLeave: () => {}, onSync: () => {} });
    const r = u?.events || { state: "presence_state", diff: "presence_diff" };
    this.channel._on(r.state, {}, (c) => {
      const { onJoin: h, onLeave: d, onSync: m } = this.caller;
      (this.joinRef = this.channel._joinRef()),
        (this.state = rl.syncState(this.state, c, h, d)),
        this.pendingDiffs.forEach((_) => {
          this.state = rl.syncDiff(this.state, _, h, d);
        }),
        (this.pendingDiffs = []),
        m();
    }),
      this.channel._on(r.diff, {}, (c) => {
        const { onJoin: h, onLeave: d, onSync: m } = this.caller;
        this.inPendingSyncState()
          ? this.pendingDiffs.push(c)
          : ((this.state = rl.syncDiff(this.state, c, h, d)), m());
      }),
      this.onJoin((c, h, d) => {
        this.channel._trigger("presence", {
          event: "join",
          key: c,
          currentPresences: h,
          newPresences: d,
        });
      }),
      this.onLeave((c, h, d) => {
        this.channel._trigger("presence", {
          event: "leave",
          key: c,
          currentPresences: h,
          leftPresences: d,
        });
      }),
      this.onSync(() => {
        this.channel._trigger("presence", { event: "sync" });
      });
  }
  static syncState(l, u, r, c) {
    const h = this.cloneDeep(l),
      d = this.transformState(u),
      m = {},
      _ = {};
    return (
      this.map(h, (g, p) => {
        d[g] || (_[g] = p);
      }),
      this.map(d, (g, p) => {
        const E = h[g];
        if (E) {
          const O = p.map((B) => B.presence_ref),
            z = E.map((B) => B.presence_ref),
            k = p.filter((B) => z.indexOf(B.presence_ref) < 0),
            q = E.filter((B) => O.indexOf(B.presence_ref) < 0);
          k.length > 0 && (m[g] = k), q.length > 0 && (_[g] = q);
        } else m[g] = p;
      }),
      this.syncDiff(h, { joins: m, leaves: _ }, r, c)
    );
  }
  static syncDiff(l, u, r, c) {
    const { joins: h, leaves: d } = {
      joins: this.transformState(u.joins),
      leaves: this.transformState(u.leaves),
    };
    return (
      r || (r = () => {}),
      c || (c = () => {}),
      this.map(h, (m, _) => {
        var g;
        const p = (g = l[m]) !== null && g !== void 0 ? g : [];
        if (((l[m] = this.cloneDeep(_)), p.length > 0)) {
          const E = l[m].map((z) => z.presence_ref),
            O = p.filter((z) => E.indexOf(z.presence_ref) < 0);
          l[m].unshift(...O);
        }
        r(m, p, _);
      }),
      this.map(d, (m, _) => {
        let g = l[m];
        if (!g) return;
        const p = _.map((E) => E.presence_ref);
        (g = g.filter((E) => p.indexOf(E.presence_ref) < 0)),
          (l[m] = g),
          c(m, g, _),
          g.length === 0 && delete l[m];
      }),
      l
    );
  }
  static map(l, u) {
    return Object.getOwnPropertyNames(l).map((r) => u(r, l[r]));
  }
  static transformState(l) {
    return (
      (l = this.cloneDeep(l)),
      Object.getOwnPropertyNames(l).reduce((u, r) => {
        const c = l[r];
        return (
          "metas" in c
            ? (u[r] = c.metas.map(
                (h) => (
                  (h.presence_ref = h.phx_ref),
                  delete h.phx_ref,
                  delete h.phx_ref_prev,
                  h
                )
              ))
            : (u[r] = c),
          u
        );
      }, {})
    );
  }
  static cloneDeep(l) {
    return JSON.parse(JSON.stringify(l));
  }
  onJoin(l) {
    this.caller.onJoin = l;
  }
  onLeave(l) {
    this.caller.onLeave = l;
  }
  onSync(l) {
    this.caller.onSync = l;
  }
  inPendingSyncState() {
    return !this.joinRef || this.joinRef !== this.channel._joinRef();
  }
}
var Kd;
(function (f) {
  (f.ALL = "*"),
    (f.INSERT = "INSERT"),
    (f.UPDATE = "UPDATE"),
    (f.DELETE = "DELETE");
})(Kd || (Kd = {}));
var ul;
(function (f) {
  (f.BROADCAST = "broadcast"),
    (f.PRESENCE = "presence"),
    (f.POSTGRES_CHANGES = "postgres_changes"),
    (f.SYSTEM = "system");
})(ul || (ul = {}));
var tn;
(function (f) {
  (f.SUBSCRIBED = "SUBSCRIBED"),
    (f.TIMED_OUT = "TIMED_OUT"),
    (f.CLOSED = "CLOSED"),
    (f.CHANNEL_ERROR = "CHANNEL_ERROR");
})(tn || (tn = {}));
class jo {
  constructor(l, u = { config: {} }, r) {
    (this.topic = l),
      (this.params = u),
      (this.socket = r),
      (this.bindings = {}),
      (this.state = Be.closed),
      (this.joinedOnce = !1),
      (this.pushBuffer = []),
      (this.subTopic = l.replace(/^realtime:/i, "")),
      (this.params.config = Object.assign(
        {
          broadcast: { ack: !1, self: !1 },
          presence: { key: "", enabled: !1 },
          private: !1,
        },
        u.config
      )),
      (this.timeout = this.socket.timeout),
      (this.joinPush = new io(this, Ut.join, this.params, this.timeout)),
      (this.rejoinTimer = new fv(
        () => this._rejoinUntilConnected(),
        this.socket.reconnectAfterMs
      )),
      this.joinPush.receive("ok", () => {
        (this.state = Be.joined),
          this.rejoinTimer.reset(),
          this.pushBuffer.forEach((c) => c.send()),
          (this.pushBuffer = []);
      }),
      this._onClose(() => {
        this.rejoinTimer.reset(),
          this.socket.log("channel", `close ${this.topic} ${this._joinRef()}`),
          (this.state = Be.closed),
          this.socket._remove(this);
      }),
      this._onError((c) => {
        this._isLeaving() ||
          this._isClosed() ||
          (this.socket.log("channel", `error ${this.topic}`, c),
          (this.state = Be.errored),
          this.rejoinTimer.scheduleTimeout());
      }),
      this.joinPush.receive("timeout", () => {
        this._isJoining() &&
          (this.socket.log(
            "channel",
            `timeout ${this.topic}`,
            this.joinPush.timeout
          ),
          (this.state = Be.errored),
          this.rejoinTimer.scheduleTimeout());
      }),
      this.joinPush.receive("error", (c) => {
        this._isLeaving() ||
          this._isClosed() ||
          (this.socket.log("channel", `error ${this.topic}`, c),
          (this.state = Be.errored),
          this.rejoinTimer.scheduleTimeout());
      }),
      this._on(Ut.reply, {}, (c, h) => {
        this._trigger(this._replyEventName(h), c);
      }),
      (this.presence = new rl(this)),
      (this.broadcastEndpointURL = dv(this.socket.endPoint)),
      (this.private = this.params.config.private || !1);
  }
  subscribe(l, u = this.timeout) {
    var r, c, h;
    if (
      (this.socket.isConnected() || this.socket.connect(),
      this.state == Be.closed)
    ) {
      const {
          config: { broadcast: d, presence: m, private: _ },
        } = this.params,
        g =
          (c =
            (r = this.bindings.postgres_changes) === null || r === void 0
              ? void 0
              : r.map((z) => z.filter)) !== null && c !== void 0
            ? c
            : [],
        p =
          (!!this.bindings[ul.PRESENCE] &&
            this.bindings[ul.PRESENCE].length > 0) ||
          ((h = this.params.config.presence) === null || h === void 0
            ? void 0
            : h.enabled) === !0,
        E = {},
        O = {
          broadcast: d,
          presence: Object.assign(Object.assign({}, m), { enabled: p }),
          postgres_changes: g,
          private: _,
        };
      this.socket.accessTokenValue &&
        (E.access_token = this.socket.accessTokenValue),
        this._onError((z) => l?.(tn.CHANNEL_ERROR, z)),
        this._onClose(() => l?.(tn.CLOSED)),
        this.updateJoinPayload(Object.assign({ config: O }, E)),
        (this.joinedOnce = !0),
        this._rejoin(u),
        this.joinPush
          .receive("ok", async ({ postgres_changes: z }) => {
            var k;
            if ((this.socket.setAuth(), z === void 0)) {
              l?.(tn.SUBSCRIBED);
              return;
            } else {
              const q = this.bindings.postgres_changes,
                B = (k = q?.length) !== null && k !== void 0 ? k : 0,
                ae = [];
              for (let Q = 0; Q < B; Q++) {
                const L = q[Q],
                  {
                    filter: { event: I, schema: K, table: ee, filter: fe },
                  } = L,
                  je = z && z[Q];
                if (
                  je &&
                  je.event === I &&
                  je.schema === K &&
                  je.table === ee &&
                  je.filter === fe
                )
                  ae.push(Object.assign(Object.assign({}, L), { id: je.id }));
                else {
                  this.unsubscribe(),
                    (this.state = Be.errored),
                    l?.(
                      tn.CHANNEL_ERROR,
                      new Error(
                        "mismatch between server and client bindings for postgres changes"
                      )
                    );
                  return;
                }
              }
              (this.bindings.postgres_changes = ae), l && l(tn.SUBSCRIBED);
              return;
            }
          })
          .receive("error", (z) => {
            (this.state = Be.errored),
              l?.(
                tn.CHANNEL_ERROR,
                new Error(
                  JSON.stringify(Object.values(z).join(", ") || "error")
                )
              );
          })
          .receive("timeout", () => {
            l?.(tn.TIMED_OUT);
          });
    }
    return this;
  }
  presenceState() {
    return this.presence.state;
  }
  async track(l, u = {}) {
    return await this.send(
      { type: "presence", event: "track", payload: l },
      u.timeout || this.timeout
    );
  }
  async untrack(l = {}) {
    return await this.send({ type: "presence", event: "untrack" }, l);
  }
  on(l, u, r) {
    return (
      this.state === Be.joined &&
        l === ul.PRESENCE &&
        (this.socket.log(
          "channel",
          `resubscribe to ${this.topic} due to change in presence callbacks on joined channel`
        ),
        this.unsubscribe().then(() => this.subscribe())),
      this._on(l, u, r)
    );
  }
  async send(l, u = {}) {
    var r, c;
    if (!this._canPush() && l.type === "broadcast") {
      const { event: h, payload: d } = l,
        _ = {
          method: "POST",
          headers: {
            Authorization: this.socket.accessTokenValue
              ? `Bearer ${this.socket.accessTokenValue}`
              : "",
            apikey: this.socket.apiKey ? this.socket.apiKey : "",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            messages: [
              {
                topic: this.subTopic,
                event: h,
                payload: d,
                private: this.private,
              },
            ],
          }),
        };
      try {
        const g = await this._fetchWithTimeout(
          this.broadcastEndpointURL,
          _,
          (r = u.timeout) !== null && r !== void 0 ? r : this.timeout
        );
        return (
          await ((c = g.body) === null || c === void 0 ? void 0 : c.cancel()),
          g.ok ? "ok" : "error"
        );
      } catch (g) {
        return g.name === "AbortError" ? "timed out" : "error";
      }
    } else
      return new Promise((h) => {
        var d, m, _;
        const g = this._push(l.type, l, u.timeout || this.timeout);
        l.type === "broadcast" &&
          !(
            !(
              (_ =
                (m =
                  (d = this.params) === null || d === void 0
                    ? void 0
                    : d.config) === null || m === void 0
                  ? void 0
                  : m.broadcast) === null || _ === void 0
            ) && _.ack
          ) &&
          h("ok"),
          g.receive("ok", () => h("ok")),
          g.receive("error", () => h("error")),
          g.receive("timeout", () => h("timed out"));
      });
  }
  updateJoinPayload(l) {
    this.joinPush.updatePayload(l);
  }
  unsubscribe(l = this.timeout) {
    this.state = Be.leaving;
    const u = () => {
      this.socket.log("channel", `leave ${this.topic}`),
        this._trigger(Ut.close, "leave", this._joinRef());
    };
    this.joinPush.destroy();
    let r = null;
    return new Promise((c) => {
      (r = new io(this, Ut.leave, {}, l)),
        r
          .receive("ok", () => {
            u(), c("ok");
          })
          .receive("timeout", () => {
            u(), c("timed out");
          })
          .receive("error", () => {
            c("error");
          }),
        r.send(),
        this._canPush() || r.trigger("ok", {});
    }).finally(() => {
      r?.destroy();
    });
  }
  teardown() {
    this.pushBuffer.forEach((l) => l.destroy()),
      (this.pushBuffer = []),
      this.rejoinTimer.reset(),
      this.joinPush.destroy(),
      (this.state = Be.closed),
      (this.bindings = {});
  }
  async _fetchWithTimeout(l, u, r) {
    const c = new AbortController(),
      h = setTimeout(() => c.abort(), r),
      d = await this.socket.fetch(
        l,
        Object.assign(Object.assign({}, u), { signal: c.signal })
      );
    return clearTimeout(h), d;
  }
  _push(l, u, r = this.timeout) {
    if (!this.joinedOnce)
      throw `tried to push '${l}' to '${this.topic}' before joining. Use channel.subscribe() before pushing events`;
    let c = new io(this, l, u, r);
    return this._canPush() ? c.send() : this._addToPushBuffer(c), c;
  }
  _addToPushBuffer(l) {
    if (
      (l.startTimeout(), this.pushBuffer.push(l), this.pushBuffer.length > qy)
    ) {
      const u = this.pushBuffer.shift();
      u &&
        (u.destroy(),
        this.socket.log(
          "channel",
          `discarded push due to buffer overflow: ${u.event}`,
          u.payload
        ));
    }
  }
  _onMessage(l, u, r) {
    return u;
  }
  _isMember(l) {
    return this.topic === l;
  }
  _joinRef() {
    return this.joinPush.ref;
  }
  _trigger(l, u, r) {
    var c, h;
    const d = l.toLocaleLowerCase(),
      { close: m, error: _, leave: g, join: p } = Ut;
    if (r && [m, _, g, p].indexOf(d) >= 0 && r !== this._joinRef()) return;
    let O = this._onMessage(d, u, r);
    if (u && !O)
      throw "channel onMessage callbacks must return the payload, modified or unmodified";
    ["insert", "update", "delete"].includes(d)
      ? (c = this.bindings.postgres_changes) === null ||
        c === void 0 ||
        c
          .filter((z) => {
            var k, q, B;
            return (
              ((k = z.filter) === null || k === void 0 ? void 0 : k.event) ===
                "*" ||
              ((B =
                (q = z.filter) === null || q === void 0 ? void 0 : q.event) ===
                null || B === void 0
                ? void 0
                : B.toLocaleLowerCase()) === d
            );
          })
          .map((z) => z.callback(O, r))
      : (h = this.bindings[d]) === null ||
        h === void 0 ||
        h
          .filter((z) => {
            var k, q, B, ae, Q, L;
            if (["broadcast", "presence", "postgres_changes"].includes(d))
              if ("id" in z) {
                const I = z.id,
                  K =
                    (k = z.filter) === null || k === void 0 ? void 0 : k.event;
                return (
                  I &&
                  ((q = u.ids) === null || q === void 0
                    ? void 0
                    : q.includes(I)) &&
                  (K === "*" ||
                    K?.toLocaleLowerCase() ===
                      ((B = u.data) === null || B === void 0
                        ? void 0
                        : B.type.toLocaleLowerCase()))
                );
              } else {
                const I =
                  (Q =
                    (ae = z?.filter) === null || ae === void 0
                      ? void 0
                      : ae.event) === null || Q === void 0
                    ? void 0
                    : Q.toLocaleLowerCase();
                return (
                  I === "*" ||
                  I ===
                    ((L = u?.event) === null || L === void 0
                      ? void 0
                      : L.toLocaleLowerCase())
                );
              }
            else return z.type.toLocaleLowerCase() === d;
          })
          .map((z) => {
            if (typeof O == "object" && "ids" in O) {
              const k = O.data,
                {
                  schema: q,
                  table: B,
                  commit_timestamp: ae,
                  type: Q,
                  errors: L,
                } = k;
              O = Object.assign(
                Object.assign(
                  {},
                  {
                    schema: q,
                    table: B,
                    commit_timestamp: ae,
                    eventType: Q,
                    new: {},
                    old: {},
                    errors: L,
                  }
                ),
                this._getPayloadRecords(k)
              );
            }
            z.callback(O, r);
          });
  }
  _isClosed() {
    return this.state === Be.closed;
  }
  _isJoined() {
    return this.state === Be.joined;
  }
  _isJoining() {
    return this.state === Be.joining;
  }
  _isLeaving() {
    return this.state === Be.leaving;
  }
  _replyEventName(l) {
    return `chan_reply_${l}`;
  }
  _on(l, u, r) {
    const c = l.toLocaleLowerCase(),
      h = { type: c, filter: u, callback: r };
    return (
      this.bindings[c] ? this.bindings[c].push(h) : (this.bindings[c] = [h]),
      this
    );
  }
  _off(l, u) {
    const r = l.toLocaleLowerCase();
    return (
      this.bindings[r] &&
        (this.bindings[r] = this.bindings[r].filter((c) => {
          var h;
          return !(
            ((h = c.type) === null || h === void 0
              ? void 0
              : h.toLocaleLowerCase()) === r && jo.isEqual(c.filter, u)
          );
        })),
      this
    );
  }
  static isEqual(l, u) {
    if (Object.keys(l).length !== Object.keys(u).length) return !1;
    for (const r in l) if (l[r] !== u[r]) return !1;
    return !0;
  }
  _rejoinUntilConnected() {
    this.rejoinTimer.scheduleTimeout(),
      this.socket.isConnected() && this._rejoin();
  }
  _onClose(l) {
    this._on(Ut.close, {}, l);
  }
  _onError(l) {
    this._on(Ut.error, {}, (u) => l(u));
  }
  _canPush() {
    return this.socket.isConnected() && this._isJoined();
  }
  _rejoin(l = this.timeout) {
    this._isLeaving() ||
      (this.socket._leaveOpenTopic(this.topic),
      (this.state = Be.joining),
      this.joinPush.resend(l));
  }
  _getPayloadRecords(l) {
    const u = { new: {}, old: {} };
    return (
      (l.type === "INSERT" || l.type === "UPDATE") &&
        (u.new = Vd(l.columns, l.record)),
      (l.type === "UPDATE" || l.type === "DELETE") &&
        (u.old = Vd(l.columns, l.old_record)),
      u
    );
  }
}
const lo = () => {},
  Us = {
    HEARTBEAT_INTERVAL: 25e3,
    RECONNECT_DELAY: 10,
    HEARTBEAT_TIMEOUT_FALLBACK: 100,
  },
  Vy = [1e3, 2e3, 5e3, 1e4],
  Xy = 1e4,
  Ky = `
  addEventListener("message", (e) => {
    if (e.data.event === "start") {
      setInterval(() => postMessage({ event: "keepAlive" }), e.data.interval);
    }
  });`;
class Zy {
  constructor(l, u) {
    var r;
    if (
      ((this.accessTokenValue = null),
      (this.apiKey = null),
      (this.channels = new Array()),
      (this.endPoint = ""),
      (this.httpEndpoint = ""),
      (this.headers = {}),
      (this.params = {}),
      (this.timeout = vo),
      (this.transport = null),
      (this.heartbeatIntervalMs = Us.HEARTBEAT_INTERVAL),
      (this.heartbeatTimer = void 0),
      (this.pendingHeartbeatRef = null),
      (this.heartbeatCallback = lo),
      (this.ref = 0),
      (this.reconnectTimer = null),
      (this.logger = lo),
      (this.conn = null),
      (this.sendBuffer = []),
      (this.serializer = new By()),
      (this.stateChangeCallbacks = {
        open: [],
        close: [],
        error: [],
        message: [],
      }),
      (this.accessToken = null),
      (this._connectionState = "disconnected"),
      (this._wasManualDisconnect = !1),
      (this._authPromise = null),
      (this._resolveFetch = (c) => {
        let h;
        return (
          c
            ? (h = c)
            : typeof fetch > "u"
            ? (h = (...d) =>
                fl(
                  async () => {
                    const { default: m } = await Promise.resolve().then(
                      () => ii
                    );
                    return { default: m };
                  },
                  void 0,
                  import.meta.url
                )
                  .then(({ default: m }) => m(...d))
                  .catch((m) => {
                    throw new Error(
                      `Failed to load @supabase/node-fetch: ${m.message}. This is required for HTTP requests in Node.js environments without native fetch.`
                    );
                  }))
            : (h = fetch),
          (...d) => h(...d)
        );
      }),
      !(!((r = u?.params) === null || r === void 0) && r.apikey))
    )
      throw new Error("API key is required to connect to Realtime");
    (this.apiKey = u.params.apikey),
      (this.endPoint = `${l}/${go.websocket}`),
      (this.httpEndpoint = dv(l)),
      this._initializeOptions(u),
      this._setupReconnectionTimer(),
      (this.fetch = this._resolveFetch(u?.fetch));
  }
  connect() {
    if (
      !(
        this.isConnecting() ||
        this.isDisconnecting() ||
        (this.conn !== null && this.isConnected())
      )
    ) {
      if (
        (this._setConnectionState("connecting"),
        this._setAuthSafely("connect"),
        this.transport)
      )
        this.conn = new this.transport(this.endpointURL());
      else
        try {
          this.conn = Cy.createWebSocket(this.endpointURL());
        } catch (l) {
          this._setConnectionState("disconnected");
          const u = l.message;
          throw u.includes("Node.js")
            ? new Error(`${u}

To use Realtime in Node.js, you need to provide a WebSocket implementation:

Option 1: Use Node.js 22+ which has native WebSocket support
Option 2: Install and provide the "ws" package:

  npm install ws

  import ws from "ws"
  const client = new RealtimeClient(url, {
    ...options,
    transport: ws
  })`)
            : new Error(`WebSocket not available: ${u}`);
        }
      this._setupConnectionHandlers();
    }
  }
  endpointURL() {
    return this._appendParams(
      this.endPoint,
      Object.assign({}, this.params, { vsn: zy })
    );
  }
  disconnect(l, u) {
    if (!this.isDisconnecting())
      if ((this._setConnectionState("disconnecting", !0), this.conn)) {
        const r = setTimeout(() => {
          this._setConnectionState("disconnected");
        }, 100);
        (this.conn.onclose = () => {
          clearTimeout(r), this._setConnectionState("disconnected");
        }),
          l ? this.conn.close(l, u ?? "") : this.conn.close(),
          this._teardownConnection();
      } else this._setConnectionState("disconnected");
  }
  getChannels() {
    return this.channels;
  }
  async removeChannel(l) {
    const u = await l.unsubscribe();
    return this.channels.length === 0 && this.disconnect(), u;
  }
  async removeAllChannels() {
    const l = await Promise.all(this.channels.map((u) => u.unsubscribe()));
    return (this.channels = []), this.disconnect(), l;
  }
  log(l, u, r) {
    this.logger(l, u, r);
  }
  connectionState() {
    switch (this.conn && this.conn.readyState) {
      case sl.connecting:
        return na.Connecting;
      case sl.open:
        return na.Open;
      case sl.closing:
        return na.Closing;
      default:
        return na.Closed;
    }
  }
  isConnected() {
    return this.connectionState() === na.Open;
  }
  isConnecting() {
    return this._connectionState === "connecting";
  }
  isDisconnecting() {
    return this._connectionState === "disconnecting";
  }
  channel(l, u = { config: {} }) {
    const r = `realtime:${l}`,
      c = this.getChannels().find((h) => h.topic === r);
    if (c) return c;
    {
      const h = new jo(`realtime:${l}`, u, this);
      return this.channels.push(h), h;
    }
  }
  push(l) {
    const { topic: u, event: r, payload: c, ref: h } = l,
      d = () => {
        this.encode(l, (m) => {
          var _;
          (_ = this.conn) === null || _ === void 0 || _.send(m);
        });
      };
    this.log("push", `${u} ${r} (${h})`, c),
      this.isConnected() ? d() : this.sendBuffer.push(d);
  }
  async setAuth(l = null) {
    this._authPromise = this._performAuth(l);
    try {
      await this._authPromise;
    } finally {
      this._authPromise = null;
    }
  }
  async sendHeartbeat() {
    var l;
    if (!this.isConnected()) {
      try {
        this.heartbeatCallback("disconnected");
      } catch (u) {
        this.log("error", "error in heartbeat callback", u);
      }
      return;
    }
    if (this.pendingHeartbeatRef) {
      (this.pendingHeartbeatRef = null),
        this.log(
          "transport",
          "heartbeat timeout. Attempting to re-establish connection"
        );
      try {
        this.heartbeatCallback("timeout");
      } catch (u) {
        this.log("error", "error in heartbeat callback", u);
      }
      (this._wasManualDisconnect = !1),
        (l = this.conn) === null ||
          l === void 0 ||
          l.close(ky, "heartbeat timeout"),
        setTimeout(() => {
          var u;
          this.isConnected() ||
            (u = this.reconnectTimer) === null ||
            u === void 0 ||
            u.scheduleTimeout();
        }, Us.HEARTBEAT_TIMEOUT_FALLBACK);
      return;
    }
    (this.pendingHeartbeatRef = this._makeRef()),
      this.push({
        topic: "phoenix",
        event: "heartbeat",
        payload: {},
        ref: this.pendingHeartbeatRef,
      });
    try {
      this.heartbeatCallback("sent");
    } catch (u) {
      this.log("error", "error in heartbeat callback", u);
    }
    this._setAuthSafely("heartbeat");
  }
  onHeartbeat(l) {
    this.heartbeatCallback = l;
  }
  flushSendBuffer() {
    this.isConnected() &&
      this.sendBuffer.length > 0 &&
      (this.sendBuffer.forEach((l) => l()), (this.sendBuffer = []));
  }
  _makeRef() {
    let l = this.ref + 1;
    return (
      l === this.ref ? (this.ref = 0) : (this.ref = l), this.ref.toString()
    );
  }
  _leaveOpenTopic(l) {
    let u = this.channels.find(
      (r) => r.topic === l && (r._isJoined() || r._isJoining())
    );
    u &&
      (this.log("transport", `leaving duplicate topic "${l}"`),
      u.unsubscribe());
  }
  _remove(l) {
    this.channels = this.channels.filter((u) => u.topic !== l.topic);
  }
  _onConnMessage(l) {
    this.decode(l.data, (u) => {
      if (u.topic === "phoenix" && u.event === "phx_reply")
        try {
          this.heartbeatCallback(u.payload.status === "ok" ? "ok" : "error");
        } catch (g) {
          this.log("error", "error in heartbeat callback", g);
        }
      u.ref &&
        u.ref === this.pendingHeartbeatRef &&
        (this.pendingHeartbeatRef = null);
      const { topic: r, event: c, payload: h, ref: d } = u,
        m = d ? `(${d})` : "",
        _ = h.status || "";
      this.log("receive", `${_} ${r} ${c} ${m}`.trim(), h),
        this.channels
          .filter((g) => g._isMember(r))
          .forEach((g) => g._trigger(c, h, d)),
        this._triggerStateCallbacks("message", u);
    });
  }
  _clearTimer(l) {
    var u;
    l === "heartbeat" && this.heartbeatTimer
      ? (clearInterval(this.heartbeatTimer), (this.heartbeatTimer = void 0))
      : l === "reconnect" &&
        ((u = this.reconnectTimer) === null || u === void 0 || u.reset());
  }
  _clearAllTimers() {
    this._clearTimer("heartbeat"), this._clearTimer("reconnect");
  }
  _setupConnectionHandlers() {
    this.conn &&
      ("binaryType" in this.conn && (this.conn.binaryType = "arraybuffer"),
      (this.conn.onopen = () => this._onConnOpen()),
      (this.conn.onerror = (l) => this._onConnError(l)),
      (this.conn.onmessage = (l) => this._onConnMessage(l)),
      (this.conn.onclose = (l) => this._onConnClose(l)));
  }
  _teardownConnection() {
    this.conn &&
      ((this.conn.onopen = null),
      (this.conn.onerror = null),
      (this.conn.onmessage = null),
      (this.conn.onclose = null),
      (this.conn = null)),
      this._clearAllTimers(),
      this.channels.forEach((l) => l.teardown());
  }
  _onConnOpen() {
    this._setConnectionState("connected"),
      this.log("transport", `connected to ${this.endpointURL()}`),
      this.flushSendBuffer(),
      this._clearTimer("reconnect"),
      this.worker
        ? this.workerRef || this._startWorkerHeartbeat()
        : this._startHeartbeat(),
      this._triggerStateCallbacks("open");
  }
  _startHeartbeat() {
    this.heartbeatTimer && clearInterval(this.heartbeatTimer),
      (this.heartbeatTimer = setInterval(
        () => this.sendHeartbeat(),
        this.heartbeatIntervalMs
      ));
  }
  _startWorkerHeartbeat() {
    this.workerUrl
      ? this.log("worker", `starting worker for from ${this.workerUrl}`)
      : this.log("worker", "starting default worker");
    const l = this._workerObjectUrl(this.workerUrl);
    (this.workerRef = new Worker(l)),
      (this.workerRef.onerror = (u) => {
        this.log("worker", "worker error", u.message),
          this.workerRef.terminate();
      }),
      (this.workerRef.onmessage = (u) => {
        u.data.event === "keepAlive" && this.sendHeartbeat();
      }),
      this.workerRef.postMessage({
        event: "start",
        interval: this.heartbeatIntervalMs,
      });
  }
  _onConnClose(l) {
    var u;
    this._setConnectionState("disconnected"),
      this.log("transport", "close", l),
      this._triggerChanError(),
      this._clearTimer("heartbeat"),
      this._wasManualDisconnect ||
        (u = this.reconnectTimer) === null ||
        u === void 0 ||
        u.scheduleTimeout(),
      this._triggerStateCallbacks("close", l);
  }
  _onConnError(l) {
    this._setConnectionState("disconnected"),
      this.log("transport", `${l}`),
      this._triggerChanError(),
      this._triggerStateCallbacks("error", l);
  }
  _triggerChanError() {
    this.channels.forEach((l) => l._trigger(Ut.error));
  }
  _appendParams(l, u) {
    if (Object.keys(u).length === 0) return l;
    const r = l.match(/\?/) ? "&" : "?",
      c = new URLSearchParams(u);
    return `${l}${r}${c}`;
  }
  _workerObjectUrl(l) {
    let u;
    if (l) u = l;
    else {
      const r = new Blob([Ky], { type: "application/javascript" });
      u = URL.createObjectURL(r);
    }
    return u;
  }
  _setConnectionState(l, u = !1) {
    (this._connectionState = l),
      l === "connecting"
        ? (this._wasManualDisconnect = !1)
        : l === "disconnecting" && (this._wasManualDisconnect = u);
  }
  async _performAuth(l = null) {
    let u;
    l
      ? (u = l)
      : this.accessToken
      ? (u = await this.accessToken())
      : (u = this.accessTokenValue),
      this.accessTokenValue != u &&
        ((this.accessTokenValue = u),
        this.channels.forEach((r) => {
          const c = { access_token: u, version: Ny };
          u && r.updateJoinPayload(c),
            r.joinedOnce &&
              r._isJoined() &&
              r._push(Ut.access_token, { access_token: u });
        }));
  }
  async _waitForAuthIfNeeded() {
    this._authPromise && (await this._authPromise);
  }
  _setAuthSafely(l = "general") {
    this.setAuth().catch((u) => {
      this.log("error", `error setting auth in ${l}`, u);
    });
  }
  _triggerStateCallbacks(l, u) {
    try {
      this.stateChangeCallbacks[l].forEach((r) => {
        try {
          r(u);
        } catch (c) {
          this.log("error", `error in ${l} callback`, c);
        }
      });
    } catch (r) {
      this.log("error", `error triggering ${l} callbacks`, r);
    }
  }
  _setupReconnectionTimer() {
    this.reconnectTimer = new fv(async () => {
      setTimeout(async () => {
        await this._waitForAuthIfNeeded(), this.isConnected() || this.connect();
      }, Us.RECONNECT_DELAY);
    }, this.reconnectAfterMs);
  }
  _initializeOptions(l) {
    var u, r, c, h, d, m, _, g, p;
    if (
      ((this.transport =
        (u = l?.transport) !== null && u !== void 0 ? u : null),
      (this.timeout = (r = l?.timeout) !== null && r !== void 0 ? r : vo),
      (this.heartbeatIntervalMs =
        (c = l?.heartbeatIntervalMs) !== null && c !== void 0
          ? c
          : Us.HEARTBEAT_INTERVAL),
      (this.worker = (h = l?.worker) !== null && h !== void 0 ? h : !1),
      (this.accessToken =
        (d = l?.accessToken) !== null && d !== void 0 ? d : null),
      (this.heartbeatCallback =
        (m = l?.heartbeatCallback) !== null && m !== void 0 ? m : lo),
      l?.params && (this.params = l.params),
      l?.logger && (this.logger = l.logger),
      (l?.logLevel || l?.log_level) &&
        ((this.logLevel = l.logLevel || l.log_level),
        (this.params = Object.assign(Object.assign({}, this.params), {
          log_level: this.logLevel,
        }))),
      (this.reconnectAfterMs =
        (_ = l?.reconnectAfterMs) !== null && _ !== void 0
          ? _
          : (E) => Vy[E - 1] || Xy),
      (this.encode =
        (g = l?.encode) !== null && g !== void 0
          ? g
          : (E, O) => O(JSON.stringify(E))),
      (this.decode =
        (p = l?.decode) !== null && p !== void 0
          ? p
          : this.serializer.decode.bind(this.serializer)),
      this.worker)
    ) {
      if (typeof window < "u" && !window.Worker)
        throw new Error("Web Worker is not supported");
      this.workerUrl = l?.workerUrl;
    }
  }
}
class Ro extends Error {
  constructor(l) {
    super(l), (this.__isStorageError = !0), (this.name = "StorageError");
  }
}
function ze(f) {
  return typeof f == "object" && f !== null && "__isStorageError" in f;
}
class Jy extends Ro {
  constructor(l, u, r) {
    super(l),
      (this.name = "StorageApiError"),
      (this.status = u),
      (this.statusCode = r);
  }
  toJSON() {
    return {
      name: this.name,
      message: this.message,
      status: this.status,
      statusCode: this.statusCode,
    };
  }
}
class mo extends Ro {
  constructor(l, u) {
    super(l), (this.name = "StorageUnknownError"), (this.originalError = u);
  }
}
var Wy = function (f, l, u, r) {
  function c(h) {
    return h instanceof u
      ? h
      : new u(function (d) {
          d(h);
        });
  }
  return new (u || (u = Promise))(function (h, d) {
    function m(p) {
      try {
        g(r.next(p));
      } catch (E) {
        d(E);
      }
    }
    function _(p) {
      try {
        g(r.throw(p));
      } catch (E) {
        d(E);
      }
    }
    function g(p) {
      p.done ? h(p.value) : c(p.value).then(m, _);
    }
    g((r = r.apply(f, l || [])).next());
  });
};
const vv = (f) => {
    let l;
    return (
      f
        ? (l = f)
        : typeof fetch > "u"
        ? (l = (...u) =>
            fl(
              async () => {
                const { default: r } = await Promise.resolve().then(() => ii);
                return { default: r };
              },
              void 0,
              import.meta.url
            ).then(({ default: r }) => r(...u)))
        : (l = fetch),
      (...u) => l(...u)
    );
  },
  Py = () =>
    Wy(void 0, void 0, void 0, function* () {
      return typeof Response > "u"
        ? (yield fl(
            () => Promise.resolve().then(() => ii),
            void 0,
            import.meta.url
          )).Response
        : Response;
    }),
  _o = (f) => {
    if (Array.isArray(f)) return f.map((u) => _o(u));
    if (typeof f == "function" || f !== Object(f)) return f;
    const l = {};
    return (
      Object.entries(f).forEach(([u, r]) => {
        const c = u.replace(/([-_][a-z])/gi, (h) =>
          h.toUpperCase().replace(/[-_]/g, "")
        );
        l[c] = _o(r);
      }),
      l
    );
  },
  Iy = (f) => {
    if (typeof f != "object" || f === null) return !1;
    const l = Object.getPrototypeOf(f);
    return (
      (l === null ||
        l === Object.prototype ||
        Object.getPrototypeOf(l) === null) &&
      !(Symbol.toStringTag in f) &&
      !(Symbol.iterator in f)
    );
  };
var aa = function (f, l, u, r) {
  function c(h) {
    return h instanceof u
      ? h
      : new u(function (d) {
          d(h);
        });
  }
  return new (u || (u = Promise))(function (h, d) {
    function m(p) {
      try {
        g(r.next(p));
      } catch (E) {
        d(E);
      }
    }
    function _(p) {
      try {
        g(r.throw(p));
      } catch (E) {
        d(E);
      }
    }
    function g(p) {
      p.done ? h(p.value) : c(p.value).then(m, _);
    }
    g((r = r.apply(f, l || [])).next());
  });
};
const so = (f) =>
    f.msg || f.message || f.error_description || f.error || JSON.stringify(f),
  Fy = (f, l, u) =>
    aa(void 0, void 0, void 0, function* () {
      const r = yield Py();
      f instanceof r && !u?.noResolveJson
        ? f
            .json()
            .then((c) => {
              const h = f.status || 500,
                d = c?.statusCode || h + "";
              l(new Jy(so(c), h, d));
            })
            .catch((c) => {
              l(new mo(so(c), c));
            })
        : l(new mo(so(f), f));
    }),
  em = (f, l, u, r) => {
    const c = { method: f, headers: l?.headers || {} };
    return f === "GET" || !r
      ? c
      : (Iy(r)
          ? ((c.headers = Object.assign(
              { "Content-Type": "application/json" },
              l?.headers
            )),
            (c.body = JSON.stringify(r)))
          : (c.body = r),
        l?.duplex && (c.duplex = l.duplex),
        Object.assign(Object.assign({}, c), u));
  };
function hl(f, l, u, r, c, h) {
  return aa(this, void 0, void 0, function* () {
    return new Promise((d, m) => {
      f(u, em(l, r, c, h))
        .then((_) => {
          if (!_.ok) throw _;
          return r?.noResolveJson ? _ : _.json();
        })
        .then((_) => d(_))
        .catch((_) => Fy(_, m, r));
    });
  });
}
function Ns(f, l, u, r) {
  return aa(this, void 0, void 0, function* () {
    return hl(f, "GET", l, u, r);
  });
}
function Bt(f, l, u, r, c) {
  return aa(this, void 0, void 0, function* () {
    return hl(f, "POST", l, r, c, u);
  });
}
function po(f, l, u, r, c) {
  return aa(this, void 0, void 0, function* () {
    return hl(f, "PUT", l, r, c, u);
  });
}
function tm(f, l, u, r) {
  return aa(this, void 0, void 0, function* () {
    return hl(
      f,
      "HEAD",
      l,
      Object.assign(Object.assign({}, u), { noResolveJson: !0 }),
      r
    );
  });
}
function gv(f, l, u, r, c) {
  return aa(this, void 0, void 0, function* () {
    return hl(f, "DELETE", l, r, c, u);
  });
}
var nm = function (f, l, u, r) {
  function c(h) {
    return h instanceof u
      ? h
      : new u(function (d) {
          d(h);
        });
  }
  return new (u || (u = Promise))(function (h, d) {
    function m(p) {
      try {
        g(r.next(p));
      } catch (E) {
        d(E);
      }
    }
    function _(p) {
      try {
        g(r.throw(p));
      } catch (E) {
        d(E);
      }
    }
    function g(p) {
      p.done ? h(p.value) : c(p.value).then(m, _);
    }
    g((r = r.apply(f, l || [])).next());
  });
};
class am {
  constructor(l, u) {
    (this.downloadFn = l), (this.shouldThrowOnError = u);
  }
  then(l, u) {
    return this.execute().then(l, u);
  }
  execute() {
    return nm(this, void 0, void 0, function* () {
      try {
        return { data: (yield this.downloadFn()).body, error: null };
      } catch (l) {
        if (this.shouldThrowOnError) throw l;
        if (ze(l)) return { data: null, error: l };
        throw l;
      }
    });
  }
}
var im = function (f, l, u, r) {
  function c(h) {
    return h instanceof u
      ? h
      : new u(function (d) {
          d(h);
        });
  }
  return new (u || (u = Promise))(function (h, d) {
    function m(p) {
      try {
        g(r.next(p));
      } catch (E) {
        d(E);
      }
    }
    function _(p) {
      try {
        g(r.throw(p));
      } catch (E) {
        d(E);
      }
    }
    function g(p) {
      p.done ? h(p.value) : c(p.value).then(m, _);
    }
    g((r = r.apply(f, l || [])).next());
  });
};
class lm {
  constructor(l, u) {
    (this.downloadFn = l), (this.shouldThrowOnError = u);
  }
  asStream() {
    return new am(this.downloadFn, this.shouldThrowOnError);
  }
  then(l, u) {
    return this.execute().then(l, u);
  }
  execute() {
    return im(this, void 0, void 0, function* () {
      try {
        return { data: yield (yield this.downloadFn()).blob(), error: null };
      } catch (l) {
        if (this.shouldThrowOnError) throw l;
        if (ze(l)) return { data: null, error: l };
        throw l;
      }
    });
  }
}
var lt = function (f, l, u, r) {
  function c(h) {
    return h instanceof u
      ? h
      : new u(function (d) {
          d(h);
        });
  }
  return new (u || (u = Promise))(function (h, d) {
    function m(p) {
      try {
        g(r.next(p));
      } catch (E) {
        d(E);
      }
    }
    function _(p) {
      try {
        g(r.throw(p));
      } catch (E) {
        d(E);
      }
    }
    function g(p) {
      p.done ? h(p.value) : c(p.value).then(m, _);
    }
    g((r = r.apply(f, l || [])).next());
  });
};
const sm = { limit: 100, offset: 0, sortBy: { column: "name", order: "asc" } },
  Zd = {
    cacheControl: "3600",
    contentType: "text/plain;charset=UTF-8",
    upsert: !1,
  };
class rm {
  constructor(l, u = {}, r, c) {
    (this.shouldThrowOnError = !1),
      (this.url = l),
      (this.headers = u),
      (this.bucketId = r),
      (this.fetch = vv(c));
  }
  throwOnError() {
    return (this.shouldThrowOnError = !0), this;
  }
  uploadOrUpdate(l, u, r, c) {
    return lt(this, void 0, void 0, function* () {
      try {
        let h;
        const d = Object.assign(Object.assign({}, Zd), c);
        let m = Object.assign(
          Object.assign({}, this.headers),
          l === "POST" && { "x-upsert": String(d.upsert) }
        );
        const _ = d.metadata;
        typeof Blob < "u" && r instanceof Blob
          ? ((h = new FormData()),
            h.append("cacheControl", d.cacheControl),
            _ && h.append("metadata", this.encodeMetadata(_)),
            h.append("", r))
          : typeof FormData < "u" && r instanceof FormData
          ? ((h = r),
            h.append("cacheControl", d.cacheControl),
            _ && h.append("metadata", this.encodeMetadata(_)))
          : ((h = r),
            (m["cache-control"] = `max-age=${d.cacheControl}`),
            (m["content-type"] = d.contentType),
            _ && (m["x-metadata"] = this.toBase64(this.encodeMetadata(_)))),
          c?.headers && (m = Object.assign(Object.assign({}, m), c.headers));
        const g = this._removeEmptyFolders(u),
          p = this._getFinalPath(g),
          E = yield (l == "PUT" ? po : Bt)(
            this.fetch,
            `${this.url}/object/${p}`,
            h,
            Object.assign({ headers: m }, d?.duplex ? { duplex: d.duplex } : {})
          );
        return { data: { path: g, id: E.Id, fullPath: E.Key }, error: null };
      } catch (h) {
        if (this.shouldThrowOnError) throw h;
        if (ze(h)) return { data: null, error: h };
        throw h;
      }
    });
  }
  upload(l, u, r) {
    return lt(this, void 0, void 0, function* () {
      return this.uploadOrUpdate("POST", l, u, r);
    });
  }
  uploadToSignedUrl(l, u, r, c) {
    return lt(this, void 0, void 0, function* () {
      const h = this._removeEmptyFolders(l),
        d = this._getFinalPath(h),
        m = new URL(this.url + `/object/upload/sign/${d}`);
      m.searchParams.set("token", u);
      try {
        let _;
        const g = Object.assign({ upsert: Zd.upsert }, c),
          p = Object.assign(Object.assign({}, this.headers), {
            "x-upsert": String(g.upsert),
          });
        typeof Blob < "u" && r instanceof Blob
          ? ((_ = new FormData()),
            _.append("cacheControl", g.cacheControl),
            _.append("", r))
          : typeof FormData < "u" && r instanceof FormData
          ? ((_ = r), _.append("cacheControl", g.cacheControl))
          : ((_ = r),
            (p["cache-control"] = `max-age=${g.cacheControl}`),
            (p["content-type"] = g.contentType));
        const E = yield po(this.fetch, m.toString(), _, { headers: p });
        return { data: { path: h, fullPath: E.Key }, error: null };
      } catch (_) {
        if (this.shouldThrowOnError) throw _;
        if (ze(_)) return { data: null, error: _ };
        throw _;
      }
    });
  }
  createSignedUploadUrl(l, u) {
    return lt(this, void 0, void 0, function* () {
      try {
        let r = this._getFinalPath(l);
        const c = Object.assign({}, this.headers);
        u?.upsert && (c["x-upsert"] = "true");
        const h = yield Bt(
            this.fetch,
            `${this.url}/object/upload/sign/${r}`,
            {},
            { headers: c }
          ),
          d = new URL(this.url + h.url),
          m = d.searchParams.get("token");
        if (!m) throw new Ro("No token returned by API");
        return {
          data: { signedUrl: d.toString(), path: l, token: m },
          error: null,
        };
      } catch (r) {
        if (this.shouldThrowOnError) throw r;
        if (ze(r)) return { data: null, error: r };
        throw r;
      }
    });
  }
  update(l, u, r) {
    return lt(this, void 0, void 0, function* () {
      return this.uploadOrUpdate("PUT", l, u, r);
    });
  }
  move(l, u, r) {
    return lt(this, void 0, void 0, function* () {
      try {
        return {
          data: yield Bt(
            this.fetch,
            `${this.url}/object/move`,
            {
              bucketId: this.bucketId,
              sourceKey: l,
              destinationKey: u,
              destinationBucket: r?.destinationBucket,
            },
            { headers: this.headers }
          ),
          error: null,
        };
      } catch (c) {
        if (this.shouldThrowOnError) throw c;
        if (ze(c)) return { data: null, error: c };
        throw c;
      }
    });
  }
  copy(l, u, r) {
    return lt(this, void 0, void 0, function* () {
      try {
        return {
          data: {
            path: (yield Bt(
              this.fetch,
              `${this.url}/object/copy`,
              {
                bucketId: this.bucketId,
                sourceKey: l,
                destinationKey: u,
                destinationBucket: r?.destinationBucket,
              },
              { headers: this.headers }
            )).Key,
          },
          error: null,
        };
      } catch (c) {
        if (this.shouldThrowOnError) throw c;
        if (ze(c)) return { data: null, error: c };
        throw c;
      }
    });
  }
  createSignedUrl(l, u, r) {
    return lt(this, void 0, void 0, function* () {
      try {
        let c = this._getFinalPath(l),
          h = yield Bt(
            this.fetch,
            `${this.url}/object/sign/${c}`,
            Object.assign(
              { expiresIn: u },
              r?.transform ? { transform: r.transform } : {}
            ),
            { headers: this.headers }
          );
        const d = r?.download
          ? `&download=${r.download === !0 ? "" : r.download}`
          : "";
        return (
          (h = { signedUrl: encodeURI(`${this.url}${h.signedURL}${d}`) }),
          { data: h, error: null }
        );
      } catch (c) {
        if (this.shouldThrowOnError) throw c;
        if (ze(c)) return { data: null, error: c };
        throw c;
      }
    });
  }
  createSignedUrls(l, u, r) {
    return lt(this, void 0, void 0, function* () {
      try {
        const c = yield Bt(
            this.fetch,
            `${this.url}/object/sign/${this.bucketId}`,
            { expiresIn: u, paths: l },
            { headers: this.headers }
          ),
          h = r?.download
            ? `&download=${r.download === !0 ? "" : r.download}`
            : "";
        return {
          data: c.map((d) =>
            Object.assign(Object.assign({}, d), {
              signedUrl: d.signedURL
                ? encodeURI(`${this.url}${d.signedURL}${h}`)
                : null,
            })
          ),
          error: null,
        };
      } catch (c) {
        if (this.shouldThrowOnError) throw c;
        if (ze(c)) return { data: null, error: c };
        throw c;
      }
    });
  }
  download(l, u) {
    const c =
        typeof u?.transform < "u" ? "render/image/authenticated" : "object",
      h = this.transformOptsToQueryString(u?.transform || {}),
      d = h ? `?${h}` : "",
      m = this._getFinalPath(l),
      _ = () =>
        Ns(this.fetch, `${this.url}/${c}/${m}${d}`, {
          headers: this.headers,
          noResolveJson: !0,
        });
    return new lm(_, this.shouldThrowOnError);
  }
  info(l) {
    return lt(this, void 0, void 0, function* () {
      const u = this._getFinalPath(l);
      try {
        const r = yield Ns(this.fetch, `${this.url}/object/info/${u}`, {
          headers: this.headers,
        });
        return { data: _o(r), error: null };
      } catch (r) {
        if (this.shouldThrowOnError) throw r;
        if (ze(r)) return { data: null, error: r };
        throw r;
      }
    });
  }
  exists(l) {
    return lt(this, void 0, void 0, function* () {
      const u = this._getFinalPath(l);
      try {
        return (
          yield tm(this.fetch, `${this.url}/object/${u}`, {
            headers: this.headers,
          }),
          { data: !0, error: null }
        );
      } catch (r) {
        if (this.shouldThrowOnError) throw r;
        if (ze(r) && r instanceof mo) {
          const c = r.originalError;
          if ([400, 404].includes(c?.status)) return { data: !1, error: r };
        }
        throw r;
      }
    });
  }
  getPublicUrl(l, u) {
    const r = this._getFinalPath(l),
      c = [],
      h = u?.download ? `download=${u.download === !0 ? "" : u.download}` : "";
    h !== "" && c.push(h);
    const m = typeof u?.transform < "u" ? "render/image" : "object",
      _ = this.transformOptsToQueryString(u?.transform || {});
    _ !== "" && c.push(_);
    let g = c.join("&");
    return (
      g !== "" && (g = `?${g}`),
      { data: { publicUrl: encodeURI(`${this.url}/${m}/public/${r}${g}`) } }
    );
  }
  remove(l) {
    return lt(this, void 0, void 0, function* () {
      try {
        return {
          data: yield gv(
            this.fetch,
            `${this.url}/object/${this.bucketId}`,
            { prefixes: l },
            { headers: this.headers }
          ),
          error: null,
        };
      } catch (u) {
        if (this.shouldThrowOnError) throw u;
        if (ze(u)) return { data: null, error: u };
        throw u;
      }
    });
  }
  list(l, u, r) {
    return lt(this, void 0, void 0, function* () {
      try {
        const c = Object.assign(Object.assign(Object.assign({}, sm), u), {
          prefix: l || "",
        });
        return {
          data: yield Bt(
            this.fetch,
            `${this.url}/object/list/${this.bucketId}`,
            c,
            { headers: this.headers },
            r
          ),
          error: null,
        };
      } catch (c) {
        if (this.shouldThrowOnError) throw c;
        if (ze(c)) return { data: null, error: c };
        throw c;
      }
    });
  }
  listV2(l, u) {
    return lt(this, void 0, void 0, function* () {
      try {
        const r = Object.assign({}, l);
        return {
          data: yield Bt(
            this.fetch,
            `${this.url}/object/list-v2/${this.bucketId}`,
            r,
            { headers: this.headers },
            u
          ),
          error: null,
        };
      } catch (r) {
        if (this.shouldThrowOnError) throw r;
        if (ze(r)) return { data: null, error: r };
        throw r;
      }
    });
  }
  encodeMetadata(l) {
    return JSON.stringify(l);
  }
  toBase64(l) {
    return typeof Buffer < "u" ? Buffer.from(l).toString("base64") : btoa(l);
  }
  _getFinalPath(l) {
    return `${this.bucketId}/${l.replace(/^\/+/, "")}`;
  }
  _removeEmptyFolders(l) {
    return l.replace(/^\/|\/$/g, "").replace(/\/+/g, "/");
  }
  transformOptsToQueryString(l) {
    const u = [];
    return (
      l.width && u.push(`width=${l.width}`),
      l.height && u.push(`height=${l.height}`),
      l.resize && u.push(`resize=${l.resize}`),
      l.format && u.push(`format=${l.format}`),
      l.quality && u.push(`quality=${l.quality}`),
      u.join("&")
    );
  }
}
const um = "2.12.2",
  om = { "X-Client-Info": `storage-js/${um}` };
var Ja = function (f, l, u, r) {
  function c(h) {
    return h instanceof u
      ? h
      : new u(function (d) {
          d(h);
        });
  }
  return new (u || (u = Promise))(function (h, d) {
    function m(p) {
      try {
        g(r.next(p));
      } catch (E) {
        d(E);
      }
    }
    function _(p) {
      try {
        g(r.throw(p));
      } catch (E) {
        d(E);
      }
    }
    function g(p) {
      p.done ? h(p.value) : c(p.value).then(m, _);
    }
    g((r = r.apply(f, l || [])).next());
  });
};
class cm {
  constructor(l, u = {}, r, c) {
    this.shouldThrowOnError = !1;
    const h = new URL(l);
    c?.useNewHostname &&
      /supabase\.(co|in|red)$/.test(h.hostname) &&
      !h.hostname.includes("storage.supabase.") &&
      (h.hostname = h.hostname.replace("supabase.", "storage.supabase.")),
      (this.url = h.href),
      (this.headers = Object.assign(Object.assign({}, om), u)),
      (this.fetch = vv(r));
  }
  throwOnError() {
    return (this.shouldThrowOnError = !0), this;
  }
  listBuckets() {
    return Ja(this, void 0, void 0, function* () {
      try {
        return {
          data: yield Ns(this.fetch, `${this.url}/bucket`, {
            headers: this.headers,
          }),
          error: null,
        };
      } catch (l) {
        if (this.shouldThrowOnError) throw l;
        if (ze(l)) return { data: null, error: l };
        throw l;
      }
    });
  }
  getBucket(l) {
    return Ja(this, void 0, void 0, function* () {
      try {
        return {
          data: yield Ns(this.fetch, `${this.url}/bucket/${l}`, {
            headers: this.headers,
          }),
          error: null,
        };
      } catch (u) {
        if (this.shouldThrowOnError) throw u;
        if (ze(u)) return { data: null, error: u };
        throw u;
      }
    });
  }
  createBucket(l, u = { public: !1 }) {
    return Ja(this, void 0, void 0, function* () {
      try {
        return {
          data: yield Bt(
            this.fetch,
            `${this.url}/bucket`,
            {
              id: l,
              name: l,
              type: u.type,
              public: u.public,
              file_size_limit: u.fileSizeLimit,
              allowed_mime_types: u.allowedMimeTypes,
            },
            { headers: this.headers }
          ),
          error: null,
        };
      } catch (r) {
        if (this.shouldThrowOnError) throw r;
        if (ze(r)) return { data: null, error: r };
        throw r;
      }
    });
  }
  updateBucket(l, u) {
    return Ja(this, void 0, void 0, function* () {
      try {
        return {
          data: yield po(
            this.fetch,
            `${this.url}/bucket/${l}`,
            {
              id: l,
              name: l,
              public: u.public,
              file_size_limit: u.fileSizeLimit,
              allowed_mime_types: u.allowedMimeTypes,
            },
            { headers: this.headers }
          ),
          error: null,
        };
      } catch (r) {
        if (this.shouldThrowOnError) throw r;
        if (ze(r)) return { data: null, error: r };
        throw r;
      }
    });
  }
  emptyBucket(l) {
    return Ja(this, void 0, void 0, function* () {
      try {
        return {
          data: yield Bt(
            this.fetch,
            `${this.url}/bucket/${l}/empty`,
            {},
            { headers: this.headers }
          ),
          error: null,
        };
      } catch (u) {
        if (this.shouldThrowOnError) throw u;
        if (ze(u)) return { data: null, error: u };
        throw u;
      }
    });
  }
  deleteBucket(l) {
    return Ja(this, void 0, void 0, function* () {
      try {
        return {
          data: yield gv(
            this.fetch,
            `${this.url}/bucket/${l}`,
            {},
            { headers: this.headers }
          ),
          error: null,
        };
      } catch (u) {
        if (this.shouldThrowOnError) throw u;
        if (ze(u)) return { data: null, error: u };
        throw u;
      }
    });
  }
}
class fm extends cm {
  constructor(l, u = {}, r, c) {
    super(l, u, r, c);
  }
  from(l) {
    return new rm(this.url, this.headers, l, this.fetch);
  }
}
const hm = "2.58.0";
let ll = "";
typeof Deno < "u"
  ? (ll = "deno")
  : typeof document < "u"
  ? (ll = "web")
  : typeof navigator < "u" && navigator.product === "ReactNative"
  ? (ll = "react-native")
  : (ll = "node");
const dm = { "X-Client-Info": `supabase-js-${ll}/${hm}` },
  vm = { headers: dm },
  gm = { schema: "public" },
  ym = {
    autoRefreshToken: !0,
    persistSession: !0,
    detectSessionInUrl: !0,
    flowType: "implicit",
  },
  mm = {};
var _m = function (f, l, u, r) {
  function c(h) {
    return h instanceof u
      ? h
      : new u(function (d) {
          d(h);
        });
  }
  return new (u || (u = Promise))(function (h, d) {
    function m(p) {
      try {
        g(r.next(p));
      } catch (E) {
        d(E);
      }
    }
    function _(p) {
      try {
        g(r.throw(p));
      } catch (E) {
        d(E);
      }
    }
    function g(p) {
      p.done ? h(p.value) : c(p.value).then(m, _);
    }
    g((r = r.apply(f, l || [])).next());
  });
};
const pm = (f) => {
    let l;
    return (
      f ? (l = f) : typeof fetch > "u" ? (l = lv) : (l = fetch),
      (...u) => l(...u)
    );
  },
  bm = () => (typeof Headers > "u" ? sv : Headers),
  Sm = (f, l, u) => {
    const r = pm(u),
      c = bm();
    return (h, d) =>
      _m(void 0, void 0, void 0, function* () {
        var m;
        const _ = (m = yield l()) !== null && m !== void 0 ? m : f;
        let g = new c(d?.headers);
        return (
          g.has("apikey") || g.set("apikey", f),
          g.has("Authorization") || g.set("Authorization", `Bearer ${_}`),
          r(h, Object.assign(Object.assign({}, d), { headers: g }))
        );
      });
  };
var wm = function (f, l, u, r) {
  function c(h) {
    return h instanceof u
      ? h
      : new u(function (d) {
          d(h);
        });
  }
  return new (u || (u = Promise))(function (h, d) {
    function m(p) {
      try {
        g(r.next(p));
      } catch (E) {
        d(E);
      }
    }
    function _(p) {
      try {
        g(r.throw(p));
      } catch (E) {
        d(E);
      }
    }
    function g(p) {
      p.done ? h(p.value) : c(p.value).then(m, _);
    }
    g((r = r.apply(f, l || [])).next());
  });
};
function Em(f) {
  return f.endsWith("/") ? f : f + "/";
}
function Tm(f, l) {
  var u, r;
  const { db: c, auth: h, realtime: d, global: m } = f,
    { db: _, auth: g, realtime: p, global: E } = l,
    O = {
      db: Object.assign(Object.assign({}, _), c),
      auth: Object.assign(Object.assign({}, g), h),
      realtime: Object.assign(Object.assign({}, p), d),
      storage: {},
      global: Object.assign(Object.assign(Object.assign({}, E), m), {
        headers: Object.assign(
          Object.assign({}, (u = E?.headers) !== null && u !== void 0 ? u : {}),
          (r = m?.headers) !== null && r !== void 0 ? r : {}
        ),
      }),
      accessToken: () =>
        wm(this, void 0, void 0, function* () {
          return "";
        }),
    };
  return (
    f.accessToken ? (O.accessToken = f.accessToken) : delete O.accessToken, O
  );
}
function Am(f) {
  const l = f?.trim();
  if (!l) throw new Error("supabaseUrl is required.");
  if (!l.match(/^https?:\/\//i))
    throw new Error("Invalid supabaseUrl: Must be a valid HTTP or HTTPS URL.");
  try {
    return new URL(Em(l));
  } catch {
    throw Error("Invalid supabaseUrl: Provided URL is malformed.");
  }
}
const yv = "2.72.0",
  ti = 30 * 1e3,
  bo = 3,
  ro = bo * ti,
  Om = "http://localhost:9999",
  jm = "supabase.auth.token",
  Rm = { "X-Client-Info": `gotrue-js/${yv}` },
  So = "X-Supabase-Api-Version",
  mv = {
    "2024-01-01": {
      timestamp: Date.parse("2024-01-01T00:00:00.0Z"),
      name: "2024-01-01",
    },
  },
  xm = /^([a-z0-9_-]{4})*($|[a-z0-9_-]{3}$|[a-z0-9_-]{2}$)$/i,
  Um = 600 * 1e3;
class xo extends Error {
  constructor(l, u, r) {
    super(l),
      (this.__isAuthError = !0),
      (this.name = "AuthError"),
      (this.status = u),
      (this.code = r);
  }
}
function ne(f) {
  return typeof f == "object" && f !== null && "__isAuthError" in f;
}
class Dm extends xo {
  constructor(l, u, r) {
    super(l, u, r),
      (this.name = "AuthApiError"),
      (this.status = u),
      (this.code = r);
  }
}
function Cm(f) {
  return ne(f) && f.name === "AuthApiError";
}
class _v extends xo {
  constructor(l, u) {
    super(l), (this.name = "AuthUnknownError"), (this.originalError = u);
  }
}
class Dn extends xo {
  constructor(l, u, r, c) {
    super(l, r, c), (this.name = u), (this.status = r);
  }
}
class xn extends Dn {
  constructor() {
    super("Auth session missing!", "AuthSessionMissingError", 400, void 0);
  }
}
function Mm(f) {
  return ne(f) && f.name === "AuthSessionMissingError";
}
class il extends Dn {
  constructor() {
    super(
      "Auth session or user missing",
      "AuthInvalidTokenResponseError",
      500,
      void 0
    );
  }
}
class Ds extends Dn {
  constructor(l) {
    super(l, "AuthInvalidCredentialsError", 400, void 0);
  }
}
class Cs extends Dn {
  constructor(l, u = null) {
    super(l, "AuthImplicitGrantRedirectError", 500, void 0),
      (this.details = null),
      (this.details = u);
  }
  toJSON() {
    return {
      name: this.name,
      message: this.message,
      status: this.status,
      details: this.details,
    };
  }
}
function Nm(f) {
  return ne(f) && f.name === "AuthImplicitGrantRedirectError";
}
class Jd extends Dn {
  constructor(l, u = null) {
    super(l, "AuthPKCEGrantCodeExchangeError", 500, void 0),
      (this.details = null),
      (this.details = u);
  }
  toJSON() {
    return {
      name: this.name,
      message: this.message,
      status: this.status,
      details: this.details,
    };
  }
}
class wo extends Dn {
  constructor(l, u) {
    super(l, "AuthRetryableFetchError", u, void 0);
  }
}
function uo(f) {
  return ne(f) && f.name === "AuthRetryableFetchError";
}
class Wd extends Dn {
  constructor(l, u, r) {
    super(l, "AuthWeakPasswordError", u, "weak_password"), (this.reasons = r);
  }
}
class Eo extends Dn {
  constructor(l) {
    super(l, "AuthInvalidJwtError", 400, "invalid_jwt");
  }
}
const zs =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".split(
      ""
    ),
  Pd = ` 	
\r=`.split(""),
  zm = (() => {
    const f = new Array(128);
    for (let l = 0; l < f.length; l += 1) f[l] = -1;
    for (let l = 0; l < Pd.length; l += 1) f[Pd[l].charCodeAt(0)] = -2;
    for (let l = 0; l < zs.length; l += 1) f[zs[l].charCodeAt(0)] = l;
    return f;
  })();
function Id(f, l, u) {
  if (f !== null)
    for (l.queue = (l.queue << 8) | f, l.queuedBits += 8; l.queuedBits >= 6; ) {
      const r = (l.queue >> (l.queuedBits - 6)) & 63;
      u(zs[r]), (l.queuedBits -= 6);
    }
  else if (l.queuedBits > 0)
    for (
      l.queue = l.queue << (6 - l.queuedBits), l.queuedBits = 6;
      l.queuedBits >= 6;

    ) {
      const r = (l.queue >> (l.queuedBits - 6)) & 63;
      u(zs[r]), (l.queuedBits -= 6);
    }
}
function pv(f, l, u) {
  const r = zm[f];
  if (r > -1)
    for (l.queue = (l.queue << 6) | r, l.queuedBits += 6; l.queuedBits >= 8; )
      u((l.queue >> (l.queuedBits - 8)) & 255), (l.queuedBits -= 8);
  else {
    if (r === -2) return;
    throw new Error(`Invalid Base64-URL character "${String.fromCharCode(f)}"`);
  }
}
function Fd(f) {
  const l = [],
    u = (d) => {
      l.push(String.fromCodePoint(d));
    },
    r = { utf8seq: 0, codepoint: 0 },
    c = { queue: 0, queuedBits: 0 },
    h = (d) => {
      Bm(d, r, u);
    };
  for (let d = 0; d < f.length; d += 1) pv(f.charCodeAt(d), c, h);
  return l.join("");
}
function km(f, l) {
  if (f <= 127) {
    l(f);
    return;
  } else if (f <= 2047) {
    l(192 | (f >> 6)), l(128 | (f & 63));
    return;
  } else if (f <= 65535) {
    l(224 | (f >> 12)), l(128 | ((f >> 6) & 63)), l(128 | (f & 63));
    return;
  } else if (f <= 1114111) {
    l(240 | (f >> 18)),
      l(128 | ((f >> 12) & 63)),
      l(128 | ((f >> 6) & 63)),
      l(128 | (f & 63));
    return;
  }
  throw new Error(`Unrecognized Unicode codepoint: ${f.toString(16)}`);
}
function qm(f, l) {
  for (let u = 0; u < f.length; u += 1) {
    let r = f.charCodeAt(u);
    if (r > 55295 && r <= 56319) {
      const c = ((r - 55296) * 1024) & 65535;
      (r = (((f.charCodeAt(u + 1) - 56320) & 65535) | c) + 65536), (u += 1);
    }
    km(r, l);
  }
}
function Bm(f, l, u) {
  if (l.utf8seq === 0) {
    if (f <= 127) {
      u(f);
      return;
    }
    for (let r = 1; r < 6; r += 1)
      if (((f >> (7 - r)) & 1) === 0) {
        l.utf8seq = r;
        break;
      }
    if (l.utf8seq === 2) l.codepoint = f & 31;
    else if (l.utf8seq === 3) l.codepoint = f & 15;
    else if (l.utf8seq === 4) l.codepoint = f & 7;
    else throw new Error("Invalid UTF-8 sequence");
    l.utf8seq -= 1;
  } else if (l.utf8seq > 0) {
    if (f <= 127) throw new Error("Invalid UTF-8 sequence");
    (l.codepoint = (l.codepoint << 6) | (f & 63)),
      (l.utf8seq -= 1),
      l.utf8seq === 0 && u(l.codepoint);
  }
}
function Hm(f) {
  const l = [],
    u = { queue: 0, queuedBits: 0 },
    r = (c) => {
      l.push(c);
    };
  for (let c = 0; c < f.length; c += 1) pv(f.charCodeAt(c), u, r);
  return new Uint8Array(l);
}
function Lm(f) {
  const l = [];
  return qm(f, (u) => l.push(u)), new Uint8Array(l);
}
function Gm(f) {
  const l = [],
    u = { queue: 0, queuedBits: 0 },
    r = (c) => {
      l.push(c);
    };
  return f.forEach((c) => Id(c, u, r)), Id(null, u, r), l.join("");
}
function $m(f) {
  return Math.round(Date.now() / 1e3) + f;
}
function Ym() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (f) {
    const l = (Math.random() * 16) | 0;
    return (f == "x" ? l : (l & 3) | 8).toString(16);
  });
}
const At = () => typeof window < "u" && typeof document < "u",
  Fn = { tested: !1, writable: !1 },
  bv = () => {
    if (!At()) return !1;
    try {
      if (typeof globalThis.localStorage != "object") return !1;
    } catch {
      return !1;
    }
    if (Fn.tested) return Fn.writable;
    const f = `lswt-${Math.random()}${Math.random()}`;
    try {
      globalThis.localStorage.setItem(f, f),
        globalThis.localStorage.removeItem(f),
        (Fn.tested = !0),
        (Fn.writable = !0);
    } catch {
      (Fn.tested = !0), (Fn.writable = !1);
    }
    return Fn.writable;
  };
function Qm(f) {
  const l = {},
    u = new URL(f);
  if (u.hash && u.hash[0] === "#")
    try {
      new URLSearchParams(u.hash.substring(1)).forEach((c, h) => {
        l[h] = c;
      });
    } catch {}
  return (
    u.searchParams.forEach((r, c) => {
      l[c] = r;
    }),
    l
  );
}
const Sv = (f) => {
    let l;
    return (
      f
        ? (l = f)
        : typeof fetch > "u"
        ? (l = (...u) =>
            fl(
              async () => {
                const { default: r } = await Promise.resolve().then(() => ii);
                return { default: r };
              },
              void 0,
              import.meta.url
            ).then(({ default: r }) => r(...u)))
        : (l = fetch),
      (...u) => l(...u)
    );
  },
  Vm = (f) =>
    typeof f == "object" &&
    f !== null &&
    "status" in f &&
    "ok" in f &&
    "json" in f &&
    typeof f.json == "function",
  ni = async (f, l, u) => {
    await f.setItem(l, JSON.stringify(u));
  },
  ea = async (f, l) => {
    const u = await f.getItem(l);
    if (!u) return null;
    try {
      return JSON.parse(u);
    } catch {
      return u;
    }
  },
  Rn = async (f, l) => {
    await f.removeItem(l);
  };
class ks {
  constructor() {
    this.promise = new ks.promiseConstructor((l, u) => {
      (this.resolve = l), (this.reject = u);
    });
  }
}
ks.promiseConstructor = Promise;
function oo(f) {
  const l = f.split(".");
  if (l.length !== 3) throw new Eo("Invalid JWT structure");
  for (let r = 0; r < l.length; r++)
    if (!xm.test(l[r])) throw new Eo("JWT not in base64url format");
  return {
    header: JSON.parse(Fd(l[0])),
    payload: JSON.parse(Fd(l[1])),
    signature: Hm(l[2]),
    raw: { header: l[0], payload: l[1] },
  };
}
async function Xm(f) {
  return await new Promise((l) => {
    setTimeout(() => l(null), f);
  });
}
function Km(f, l) {
  return new Promise((r, c) => {
    (async () => {
      for (let h = 0; h < 1 / 0; h++)
        try {
          const d = await f(h);
          if (!l(h, null, d)) {
            r(d);
            return;
          }
        } catch (d) {
          if (!l(h, d)) {
            c(d);
            return;
          }
        }
    })();
  });
}
function Zm(f) {
  return ("0" + f.toString(16)).substr(-2);
}
function Jm() {
  const l = new Uint32Array(56);
  if (typeof crypto > "u") {
    const u =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~",
      r = u.length;
    let c = "";
    for (let h = 0; h < 56; h++) c += u.charAt(Math.floor(Math.random() * r));
    return c;
  }
  return crypto.getRandomValues(l), Array.from(l, Zm).join("");
}
async function Wm(f) {
  const u = new TextEncoder().encode(f),
    r = await crypto.subtle.digest("SHA-256", u),
    c = new Uint8Array(r);
  return Array.from(c)
    .map((h) => String.fromCharCode(h))
    .join("");
}
async function Pm(f) {
  if (
    !(
      typeof crypto < "u" &&
      typeof crypto.subtle < "u" &&
      typeof TextEncoder < "u"
    )
  )
    return (
      console.warn(
        "WebCrypto API is not supported. Code challenge method will default to use plain instead of sha256."
      ),
      f
    );
  const u = await Wm(f);
  return btoa(u).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}
async function Wa(f, l, u = !1) {
  const r = Jm();
  let c = r;
  u && (c += "/PASSWORD_RECOVERY"), await ni(f, `${l}-code-verifier`, c);
  const h = await Pm(r);
  return [h, r === h ? "plain" : "s256"];
}
const Im = /^2[0-9]{3}-(0[1-9]|1[0-2])-(0[1-9]|1[0-9]|2[0-9]|3[0-1])$/i;
function Fm(f) {
  const l = f.headers.get(So);
  if (!l || !l.match(Im)) return null;
  try {
    return new Date(`${l}T00:00:00.0Z`);
  } catch {
    return null;
  }
}
function e_(f) {
  if (!f) throw new Error("Missing exp claim");
  const l = Math.floor(Date.now() / 1e3);
  if (f <= l) throw new Error("JWT has expired");
}
function t_(f) {
  switch (f) {
    case "RS256":
      return { name: "RSASSA-PKCS1-v1_5", hash: { name: "SHA-256" } };
    case "ES256":
      return { name: "ECDSA", namedCurve: "P-256", hash: { name: "SHA-256" } };
    default:
      throw new Error("Invalid alg claim");
  }
}
const n_ = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/;
function Pa(f) {
  if (!n_.test(f))
    throw new Error(
      "@supabase/auth-js: Expected parameter to be UUID but is not"
    );
}
function co() {
  const f = {};
  return new Proxy(f, {
    get: (l, u) => {
      if (u === "__isUserNotAvailableProxy") return !0;
      if (typeof u == "symbol") {
        const r = u.toString();
        if (
          r === "Symbol(Symbol.toPrimitive)" ||
          r === "Symbol(Symbol.toStringTag)" ||
          r === "Symbol(util.inspect.custom)"
        )
          return;
      }
      throw new Error(
        `@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Accessing the "${u}" property of the session object is not supported. Please use getUser() instead.`
      );
    },
    set: (l, u) => {
      throw new Error(
        `@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Setting the "${u}" property of the session object is not supported. Please use getUser() to fetch a user object you can manipulate.`
      );
    },
    deleteProperty: (l, u) => {
      throw new Error(
        `@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Deleting the "${u}" property of the session object is not supported. Please use getUser() to fetch a user object you can manipulate.`
      );
    },
  });
}
function ev(f) {
  return JSON.parse(JSON.stringify(f));
}
var a_ = function (f, l) {
  var u = {};
  for (var r in f)
    Object.prototype.hasOwnProperty.call(f, r) &&
      l.indexOf(r) < 0 &&
      (u[r] = f[r]);
  if (f != null && typeof Object.getOwnPropertySymbols == "function")
    for (var c = 0, r = Object.getOwnPropertySymbols(f); c < r.length; c++)
      l.indexOf(r[c]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(f, r[c]) &&
        (u[r[c]] = f[r[c]]);
  return u;
};
const ta = (f) =>
    f.msg || f.message || f.error_description || f.error || JSON.stringify(f),
  i_ = [502, 503, 504];
async function tv(f) {
  var l;
  if (!Vm(f)) throw new wo(ta(f), 0);
  if (i_.includes(f.status)) throw new wo(ta(f), f.status);
  let u;
  try {
    u = await f.json();
  } catch (h) {
    throw new _v(ta(h), h);
  }
  let r;
  const c = Fm(f);
  if (
    (c &&
    c.getTime() >= mv["2024-01-01"].timestamp &&
    typeof u == "object" &&
    u &&
    typeof u.code == "string"
      ? (r = u.code)
      : typeof u == "object" &&
        u &&
        typeof u.error_code == "string" &&
        (r = u.error_code),
    r)
  ) {
    if (r === "weak_password")
      throw new Wd(
        ta(u),
        f.status,
        ((l = u.weak_password) === null || l === void 0 ? void 0 : l.reasons) ||
          []
      );
    if (r === "session_not_found") throw new xn();
  } else if (
    typeof u == "object" &&
    u &&
    typeof u.weak_password == "object" &&
    u.weak_password &&
    Array.isArray(u.weak_password.reasons) &&
    u.weak_password.reasons.length &&
    u.weak_password.reasons.reduce((h, d) => h && typeof d == "string", !0)
  )
    throw new Wd(ta(u), f.status, u.weak_password.reasons);
  throw new Dm(ta(u), f.status || 500, r);
}
const l_ = (f, l, u, r) => {
  const c = { method: f, headers: l?.headers || {} };
  return f === "GET"
    ? c
    : ((c.headers = Object.assign(
        { "Content-Type": "application/json;charset=UTF-8" },
        l?.headers
      )),
      (c.body = JSON.stringify(r)),
      Object.assign(Object.assign({}, c), u));
};
async function re(f, l, u, r) {
  var c;
  const h = Object.assign({}, r?.headers);
  h[So] || (h[So] = mv["2024-01-01"].name),
    r?.jwt && (h.Authorization = `Bearer ${r.jwt}`);
  const d = (c = r?.query) !== null && c !== void 0 ? c : {};
  r?.redirectTo && (d.redirect_to = r.redirectTo);
  const m = Object.keys(d).length
      ? "?" + new URLSearchParams(d).toString()
      : "",
    _ = await s_(
      f,
      l,
      u + m,
      { headers: h, noResolveJson: r?.noResolveJson },
      {},
      r?.body
    );
  return r?.xform ? r?.xform(_) : { data: Object.assign({}, _), error: null };
}
async function s_(f, l, u, r, c, h) {
  const d = l_(l, r, c, h);
  let m;
  try {
    m = await f(u, Object.assign({}, d));
  } catch (_) {
    throw (console.error(_), new wo(ta(_), 0));
  }
  if ((m.ok || (await tv(m)), r?.noResolveJson)) return m;
  try {
    return await m.json();
  } catch (_) {
    await tv(_);
  }
}
function qt(f) {
  var l;
  let u = null;
  c_(f) &&
    ((u = Object.assign({}, f)),
    f.expires_at || (u.expires_at = $m(f.expires_in)));
  const r = (l = f.user) !== null && l !== void 0 ? l : f;
  return { data: { session: u, user: r }, error: null };
}
function nv(f) {
  const l = qt(f);
  return (
    !l.error &&
      f.weak_password &&
      typeof f.weak_password == "object" &&
      Array.isArray(f.weak_password.reasons) &&
      f.weak_password.reasons.length &&
      f.weak_password.message &&
      typeof f.weak_password.message == "string" &&
      f.weak_password.reasons.reduce((u, r) => u && typeof r == "string", !0) &&
      (l.data.weak_password = f.weak_password),
    l
  );
}
function Un(f) {
  var l;
  return {
    data: { user: (l = f.user) !== null && l !== void 0 ? l : f },
    error: null,
  };
}
function r_(f) {
  return { data: f, error: null };
}
function u_(f) {
  const {
      action_link: l,
      email_otp: u,
      hashed_token: r,
      redirect_to: c,
      verification_type: h,
    } = f,
    d = a_(f, [
      "action_link",
      "email_otp",
      "hashed_token",
      "redirect_to",
      "verification_type",
    ]),
    m = {
      action_link: l,
      email_otp: u,
      hashed_token: r,
      redirect_to: c,
      verification_type: h,
    },
    _ = Object.assign({}, d);
  return { data: { properties: m, user: _ }, error: null };
}
function o_(f) {
  return f;
}
function c_(f) {
  return f.access_token && f.refresh_token && f.expires_in;
}
const fo = ["global", "local", "others"];
var f_ = function (f, l) {
  var u = {};
  for (var r in f)
    Object.prototype.hasOwnProperty.call(f, r) &&
      l.indexOf(r) < 0 &&
      (u[r] = f[r]);
  if (f != null && typeof Object.getOwnPropertySymbols == "function")
    for (var c = 0, r = Object.getOwnPropertySymbols(f); c < r.length; c++)
      l.indexOf(r[c]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(f, r[c]) &&
        (u[r[c]] = f[r[c]]);
  return u;
};
class h_ {
  constructor({ url: l = "", headers: u = {}, fetch: r }) {
    (this.url = l),
      (this.headers = u),
      (this.fetch = Sv(r)),
      (this.mfa = {
        listFactors: this._listFactors.bind(this),
        deleteFactor: this._deleteFactor.bind(this),
      });
  }
  async signOut(l, u = fo[0]) {
    if (fo.indexOf(u) < 0)
      throw new Error(
        `@supabase/auth-js: Parameter scope must be one of ${fo.join(", ")}`
      );
    try {
      return (
        await re(this.fetch, "POST", `${this.url}/logout?scope=${u}`, {
          headers: this.headers,
          jwt: l,
          noResolveJson: !0,
        }),
        { data: null, error: null }
      );
    } catch (r) {
      if (ne(r)) return { data: null, error: r };
      throw r;
    }
  }
  async inviteUserByEmail(l, u = {}) {
    try {
      return await re(this.fetch, "POST", `${this.url}/invite`, {
        body: { email: l, data: u.data },
        headers: this.headers,
        redirectTo: u.redirectTo,
        xform: Un,
      });
    } catch (r) {
      if (ne(r)) return { data: { user: null }, error: r };
      throw r;
    }
  }
  async generateLink(l) {
    try {
      const { options: u } = l,
        r = f_(l, ["options"]),
        c = Object.assign(Object.assign({}, r), u);
      return (
        "newEmail" in r && ((c.new_email = r?.newEmail), delete c.newEmail),
        await re(this.fetch, "POST", `${this.url}/admin/generate_link`, {
          body: c,
          headers: this.headers,
          xform: u_,
          redirectTo: u?.redirectTo,
        })
      );
    } catch (u) {
      if (ne(u)) return { data: { properties: null, user: null }, error: u };
      throw u;
    }
  }
  async createUser(l) {
    try {
      return await re(this.fetch, "POST", `${this.url}/admin/users`, {
        body: l,
        headers: this.headers,
        xform: Un,
      });
    } catch (u) {
      if (ne(u)) return { data: { user: null }, error: u };
      throw u;
    }
  }
  async listUsers(l) {
    var u, r, c, h, d, m, _;
    try {
      const g = { nextPage: null, lastPage: 0, total: 0 },
        p = await re(this.fetch, "GET", `${this.url}/admin/users`, {
          headers: this.headers,
          noResolveJson: !0,
          query: {
            page:
              (r =
                (u = l?.page) === null || u === void 0
                  ? void 0
                  : u.toString()) !== null && r !== void 0
                ? r
                : "",
            per_page:
              (h =
                (c = l?.perPage) === null || c === void 0
                  ? void 0
                  : c.toString()) !== null && h !== void 0
                ? h
                : "",
          },
          xform: o_,
        });
      if (p.error) throw p.error;
      const E = await p.json(),
        O =
          (d = p.headers.get("x-total-count")) !== null && d !== void 0 ? d : 0,
        z =
          (_ =
            (m = p.headers.get("link")) === null || m === void 0
              ? void 0
              : m.split(",")) !== null && _ !== void 0
            ? _
            : [];
      return (
        z.length > 0 &&
          (z.forEach((k) => {
            const q = parseInt(k.split(";")[0].split("=")[1].substring(0, 1)),
              B = JSON.parse(k.split(";")[1].split("=")[1]);
            g[`${B}Page`] = q;
          }),
          (g.total = parseInt(O))),
        { data: Object.assign(Object.assign({}, E), g), error: null }
      );
    } catch (g) {
      if (ne(g)) return { data: { users: [] }, error: g };
      throw g;
    }
  }
  async getUserById(l) {
    Pa(l);
    try {
      return await re(this.fetch, "GET", `${this.url}/admin/users/${l}`, {
        headers: this.headers,
        xform: Un,
      });
    } catch (u) {
      if (ne(u)) return { data: { user: null }, error: u };
      throw u;
    }
  }
  async updateUserById(l, u) {
    Pa(l);
    try {
      return await re(this.fetch, "PUT", `${this.url}/admin/users/${l}`, {
        body: u,
        headers: this.headers,
        xform: Un,
      });
    } catch (r) {
      if (ne(r)) return { data: { user: null }, error: r };
      throw r;
    }
  }
  async deleteUser(l, u = !1) {
    Pa(l);
    try {
      return await re(this.fetch, "DELETE", `${this.url}/admin/users/${l}`, {
        headers: this.headers,
        body: { should_soft_delete: u },
        xform: Un,
      });
    } catch (r) {
      if (ne(r)) return { data: { user: null }, error: r };
      throw r;
    }
  }
  async _listFactors(l) {
    Pa(l.userId);
    try {
      const { data: u, error: r } = await re(
        this.fetch,
        "GET",
        `${this.url}/admin/users/${l.userId}/factors`,
        {
          headers: this.headers,
          xform: (c) => ({ data: { factors: c }, error: null }),
        }
      );
      return { data: u, error: r };
    } catch (u) {
      if (ne(u)) return { data: null, error: u };
      throw u;
    }
  }
  async _deleteFactor(l) {
    Pa(l.userId), Pa(l.id);
    try {
      return {
        data: await re(
          this.fetch,
          "DELETE",
          `${this.url}/admin/users/${l.userId}/factors/${l.id}`,
          { headers: this.headers }
        ),
        error: null,
      };
    } catch (u) {
      if (ne(u)) return { data: null, error: u };
      throw u;
    }
  }
}
function av(f = {}) {
  return {
    getItem: (l) => f[l] || null,
    setItem: (l, u) => {
      f[l] = u;
    },
    removeItem: (l) => {
      delete f[l];
    },
  };
}
function d_() {
  if (typeof globalThis != "object")
    try {
      Object.defineProperty(Object.prototype, "__magic__", {
        get: function () {
          return this;
        },
        configurable: !0,
      }),
        (__magic__.globalThis = __magic__),
        delete Object.prototype.__magic__;
    } catch {
      typeof self < "u" && (self.globalThis = self);
    }
}
const Ia = {
  debug: !!(
    globalThis &&
    bv() &&
    globalThis.localStorage &&
    globalThis.localStorage.getItem("supabase.gotrue-js.locks.debug") === "true"
  ),
};
class wv extends Error {
  constructor(l) {
    super(l), (this.isAcquireTimeout = !0);
  }
}
class v_ extends wv {}
async function g_(f, l, u) {
  Ia.debug &&
    console.log("@supabase/gotrue-js: navigatorLock: acquire lock", f, l);
  const r = new globalThis.AbortController();
  return (
    l > 0 &&
      setTimeout(() => {
        r.abort(),
          Ia.debug &&
            console.log(
              "@supabase/gotrue-js: navigatorLock acquire timed out",
              f
            );
      }, l),
    await Promise.resolve().then(() =>
      globalThis.navigator.locks.request(
        f,
        l === 0
          ? { mode: "exclusive", ifAvailable: !0 }
          : { mode: "exclusive", signal: r.signal },
        async (c) => {
          if (c) {
            Ia.debug &&
              console.log(
                "@supabase/gotrue-js: navigatorLock: acquired",
                f,
                c.name
              );
            try {
              return await u();
            } finally {
              Ia.debug &&
                console.log(
                  "@supabase/gotrue-js: navigatorLock: released",
                  f,
                  c.name
                );
            }
          } else {
            if (l === 0)
              throw (
                (Ia.debug &&
                  console.log(
                    "@supabase/gotrue-js: navigatorLock: not immediately available",
                    f
                  ),
                new v_(
                  `Acquiring an exclusive Navigator LockManager lock "${f}" immediately failed`
                ))
              );
            if (Ia.debug)
              try {
                const h = await globalThis.navigator.locks.query();
                console.log(
                  "@supabase/gotrue-js: Navigator LockManager state",
                  JSON.stringify(h, null, "  ")
                );
              } catch (h) {
                console.warn(
                  "@supabase/gotrue-js: Error when querying Navigator LockManager state",
                  h
                );
              }
            return (
              console.warn(
                "@supabase/gotrue-js: Navigator LockManager returned a null lock when using #request without ifAvailable set to true, it appears this browser is not following the LockManager spec https://developer.mozilla.org/en-US/docs/Web/API/LockManager/request"
              ),
              await u()
            );
          }
        }
      )
    )
  );
}
function Ev(f) {
  if (!/^0x[a-fA-F0-9]{40}$/.test(f))
    throw new Error(`@supabase/auth-js: Address "${f}" is invalid.`);
  return f.toLowerCase();
}
function y_(f) {
  return parseInt(f, 16);
}
function m_(f) {
  const l = new TextEncoder().encode(f);
  return "0x" + Array.from(l, (r) => r.toString(16).padStart(2, "0")).join("");
}
function __(f) {
  var l;
  const {
    chainId: u,
    domain: r,
    expirationTime: c,
    issuedAt: h = new Date(),
    nonce: d,
    notBefore: m,
    requestId: _,
    resources: g,
    scheme: p,
    uri: E,
    version: O,
  } = f;
  {
    if (!Number.isInteger(u))
      throw new Error(
        `@supabase/auth-js: Invalid SIWE message field "chainId". Chain ID must be a EIP-155 chain ID. Provided value: ${u}`
      );
    if (!r)
      throw new Error(
        '@supabase/auth-js: Invalid SIWE message field "domain". Domain must be provided.'
      );
    if (d && d.length < 8)
      throw new Error(
        `@supabase/auth-js: Invalid SIWE message field "nonce". Nonce must be at least 8 characters. Provided value: ${d}`
      );
    if (!E)
      throw new Error(
        '@supabase/auth-js: Invalid SIWE message field "uri". URI must be provided.'
      );
    if (O !== "1")
      throw new Error(
        `@supabase/auth-js: Invalid SIWE message field "version". Version must be '1'. Provided value: ${O}`
      );
    if (
      !((l = f.statement) === null || l === void 0) &&
      l.includes(`
`)
    )
      throw new Error(
        `@supabase/auth-js: Invalid SIWE message field "statement". Statement must not include '\\n'. Provided value: ${f.statement}`
      );
  }
  const z = Ev(f.address),
    k = p ? `${p}://${r}` : r,
    q = f.statement
      ? `${f.statement}
`
      : "",
    B = `${k} wants you to sign in with your Ethereum account:
${z}

${q}`;
  let ae = `URI: ${E}
Version: ${O}
Chain ID: ${u}${
    d
      ? `
Nonce: ${d}`
      : ""
  }
Issued At: ${h.toISOString()}`;
  if (
    (c &&
      (ae += `
Expiration Time: ${c.toISOString()}`),
    m &&
      (ae += `
Not Before: ${m.toISOString()}`),
    _ &&
      (ae += `
Request ID: ${_}`),
    g)
  ) {
    let Q = `
Resources:`;
    for (const L of g) {
      if (!L || typeof L != "string")
        throw new Error(
          `@supabase/auth-js: Invalid SIWE message field "resources". Every resource must be a valid string. Provided value: ${L}`
        );
      Q += `
- ${L}`;
    }
    ae += Q;
  }
  return `${B}
${ae}`;
}
d_();
const p_ = {
  url: Om,
  storageKey: jm,
  autoRefreshToken: !0,
  persistSession: !0,
  detectSessionInUrl: !0,
  headers: Rm,
  flowType: "implicit",
  debug: !1,
  hasCustomAuthorizationHeader: !1,
};
async function iv(f, l, u) {
  return await u();
}
const Fa = {};
class cl {
  constructor(l) {
    var u, r;
    (this.userStorage = null),
      (this.memoryStorage = null),
      (this.stateChangeEmitters = new Map()),
      (this.autoRefreshTicker = null),
      (this.visibilityChangedCallback = null),
      (this.refreshingDeferred = null),
      (this.initializePromise = null),
      (this.detectSessionInUrl = !0),
      (this.hasCustomAuthorizationHeader = !1),
      (this.suppressGetSessionWarning = !1),
      (this.lockAcquired = !1),
      (this.pendingInLock = []),
      (this.broadcastChannel = null),
      (this.logger = console.log),
      (this.instanceID = cl.nextInstanceID),
      (cl.nextInstanceID += 1),
      this.instanceID > 0 &&
        At() &&
        console.warn(
          "Multiple GoTrueClient instances detected in the same browser context. It is not an error, but this should be avoided as it may produce undefined behavior when used concurrently under the same storage key."
        );
    const c = Object.assign(Object.assign({}, p_), l);
    if (
      ((this.logDebugMessages = !!c.debug),
      typeof c.debug == "function" && (this.logger = c.debug),
      (this.persistSession = c.persistSession),
      (this.storageKey = c.storageKey),
      (this.autoRefreshToken = c.autoRefreshToken),
      (this.admin = new h_({ url: c.url, headers: c.headers, fetch: c.fetch })),
      (this.url = c.url),
      (this.headers = c.headers),
      (this.fetch = Sv(c.fetch)),
      (this.lock = c.lock || iv),
      (this.detectSessionInUrl = c.detectSessionInUrl),
      (this.flowType = c.flowType),
      (this.hasCustomAuthorizationHeader = c.hasCustomAuthorizationHeader),
      c.lock
        ? (this.lock = c.lock)
        : At() &&
          !((u = globalThis?.navigator) === null || u === void 0) &&
          u.locks
        ? (this.lock = g_)
        : (this.lock = iv),
      this.jwks ||
        ((this.jwks = { keys: [] }),
        (this.jwks_cached_at = Number.MIN_SAFE_INTEGER)),
      (this.mfa = {
        verify: this._verify.bind(this),
        enroll: this._enroll.bind(this),
        unenroll: this._unenroll.bind(this),
        challenge: this._challenge.bind(this),
        listFactors: this._listFactors.bind(this),
        challengeAndVerify: this._challengeAndVerify.bind(this),
        getAuthenticatorAssuranceLevel:
          this._getAuthenticatorAssuranceLevel.bind(this),
      }),
      this.persistSession
        ? (c.storage
            ? (this.storage = c.storage)
            : bv()
            ? (this.storage = globalThis.localStorage)
            : ((this.memoryStorage = {}),
              (this.storage = av(this.memoryStorage))),
          c.userStorage && (this.userStorage = c.userStorage))
        : ((this.memoryStorage = {}), (this.storage = av(this.memoryStorage))),
      At() &&
        globalThis.BroadcastChannel &&
        this.persistSession &&
        this.storageKey)
    ) {
      try {
        this.broadcastChannel = new globalThis.BroadcastChannel(
          this.storageKey
        );
      } catch (h) {
        console.error(
          "Failed to create a new BroadcastChannel, multi-tab state changes will not be available",
          h
        );
      }
      (r = this.broadcastChannel) === null ||
        r === void 0 ||
        r.addEventListener("message", async (h) => {
          this._debug(
            "received broadcast notification from other tab or client",
            h
          ),
            await this._notifyAllSubscribers(h.data.event, h.data.session, !1);
        });
    }
    this.initialize();
  }
  get jwks() {
    var l, u;
    return (u =
      (l = Fa[this.storageKey]) === null || l === void 0 ? void 0 : l.jwks) !==
      null && u !== void 0
      ? u
      : { keys: [] };
  }
  set jwks(l) {
    Fa[this.storageKey] = Object.assign(
      Object.assign({}, Fa[this.storageKey]),
      { jwks: l }
    );
  }
  get jwks_cached_at() {
    var l, u;
    return (u =
      (l = Fa[this.storageKey]) === null || l === void 0
        ? void 0
        : l.cachedAt) !== null && u !== void 0
      ? u
      : Number.MIN_SAFE_INTEGER;
  }
  set jwks_cached_at(l) {
    Fa[this.storageKey] = Object.assign(
      Object.assign({}, Fa[this.storageKey]),
      { cachedAt: l }
    );
  }
  _debug(...l) {
    return (
      this.logDebugMessages &&
        this.logger(
          `GoTrueClient@${this.instanceID} (${yv}) ${new Date().toISOString()}`,
          ...l
        ),
      this
    );
  }
  async initialize() {
    return this.initializePromise
      ? await this.initializePromise
      : ((this.initializePromise = (async () =>
          await this._acquireLock(-1, async () => await this._initialize()))()),
        await this.initializePromise);
  }
  async _initialize() {
    var l;
    try {
      const u = Qm(window.location.href);
      let r = "none";
      if (
        (this._isImplicitGrantCallback(u)
          ? (r = "implicit")
          : (await this._isPKCECallback(u)) && (r = "pkce"),
        At() && this.detectSessionInUrl && r !== "none")
      ) {
        const { data: c, error: h } = await this._getSessionFromURL(u, r);
        if (h) {
          if (
            (this._debug(
              "#_initialize()",
              "error detecting session from URL",
              h
            ),
            Nm(h))
          ) {
            const _ =
              (l = h.details) === null || l === void 0 ? void 0 : l.code;
            if (
              _ === "identity_already_exists" ||
              _ === "identity_not_found" ||
              _ === "single_identity_not_deletable"
            )
              return { error: h };
          }
          return await this._removeSession(), { error: h };
        }
        const { session: d, redirectType: m } = c;
        return (
          this._debug(
            "#_initialize()",
            "detected session in URL",
            d,
            "redirect type",
            m
          ),
          await this._saveSession(d),
          setTimeout(async () => {
            m === "recovery"
              ? await this._notifyAllSubscribers("PASSWORD_RECOVERY", d)
              : await this._notifyAllSubscribers("SIGNED_IN", d);
          }, 0),
          { error: null }
        );
      }
      return await this._recoverAndRefresh(), { error: null };
    } catch (u) {
      return ne(u)
        ? { error: u }
        : { error: new _v("Unexpected error during initialization", u) };
    } finally {
      await this._handleVisibilityChange(),
        this._debug("#_initialize()", "end");
    }
  }
  async signInAnonymously(l) {
    var u, r, c;
    try {
      const h = await re(this.fetch, "POST", `${this.url}/signup`, {
          headers: this.headers,
          body: {
            data:
              (r =
                (u = l?.options) === null || u === void 0 ? void 0 : u.data) !==
                null && r !== void 0
                ? r
                : {},
            gotrue_meta_security: {
              captcha_token:
                (c = l?.options) === null || c === void 0
                  ? void 0
                  : c.captchaToken,
            },
          },
          xform: qt,
        }),
        { data: d, error: m } = h;
      if (m || !d) return { data: { user: null, session: null }, error: m };
      const _ = d.session,
        g = d.user;
      return (
        d.session &&
          (await this._saveSession(d.session),
          await this._notifyAllSubscribers("SIGNED_IN", _)),
        { data: { user: g, session: _ }, error: null }
      );
    } catch (h) {
      if (ne(h)) return { data: { user: null, session: null }, error: h };
      throw h;
    }
  }
  async signUp(l) {
    var u, r, c;
    try {
      let h;
      if ("email" in l) {
        const { email: p, password: E, options: O } = l;
        let z = null,
          k = null;
        this.flowType === "pkce" &&
          ([z, k] = await Wa(this.storage, this.storageKey)),
          (h = await re(this.fetch, "POST", `${this.url}/signup`, {
            headers: this.headers,
            redirectTo: O?.emailRedirectTo,
            body: {
              email: p,
              password: E,
              data: (u = O?.data) !== null && u !== void 0 ? u : {},
              gotrue_meta_security: { captcha_token: O?.captchaToken },
              code_challenge: z,
              code_challenge_method: k,
            },
            xform: qt,
          }));
      } else if ("phone" in l) {
        const { phone: p, password: E, options: O } = l;
        h = await re(this.fetch, "POST", `${this.url}/signup`, {
          headers: this.headers,
          body: {
            phone: p,
            password: E,
            data: (r = O?.data) !== null && r !== void 0 ? r : {},
            channel: (c = O?.channel) !== null && c !== void 0 ? c : "sms",
            gotrue_meta_security: { captcha_token: O?.captchaToken },
          },
          xform: qt,
        });
      } else
        throw new Ds(
          "You must provide either an email or phone number and a password"
        );
      const { data: d, error: m } = h;
      if (m || !d) return { data: { user: null, session: null }, error: m };
      const _ = d.session,
        g = d.user;
      return (
        d.session &&
          (await this._saveSession(d.session),
          await this._notifyAllSubscribers("SIGNED_IN", _)),
        { data: { user: g, session: _ }, error: null }
      );
    } catch (h) {
      if (ne(h)) return { data: { user: null, session: null }, error: h };
      throw h;
    }
  }
  async signInWithPassword(l) {
    try {
      let u;
      if ("email" in l) {
        const { email: h, password: d, options: m } = l;
        u = await re(
          this.fetch,
          "POST",
          `${this.url}/token?grant_type=password`,
          {
            headers: this.headers,
            body: {
              email: h,
              password: d,
              gotrue_meta_security: { captcha_token: m?.captchaToken },
            },
            xform: nv,
          }
        );
      } else if ("phone" in l) {
        const { phone: h, password: d, options: m } = l;
        u = await re(
          this.fetch,
          "POST",
          `${this.url}/token?grant_type=password`,
          {
            headers: this.headers,
            body: {
              phone: h,
              password: d,
              gotrue_meta_security: { captcha_token: m?.captchaToken },
            },
            xform: nv,
          }
        );
      } else
        throw new Ds(
          "You must provide either an email or phone number and a password"
        );
      const { data: r, error: c } = u;
      return c
        ? { data: { user: null, session: null }, error: c }
        : !r || !r.session || !r.user
        ? { data: { user: null, session: null }, error: new il() }
        : (r.session &&
            (await this._saveSession(r.session),
            await this._notifyAllSubscribers("SIGNED_IN", r.session)),
          {
            data: Object.assign(
              { user: r.user, session: r.session },
              r.weak_password ? { weakPassword: r.weak_password } : null
            ),
            error: c,
          });
    } catch (u) {
      if (ne(u)) return { data: { user: null, session: null }, error: u };
      throw u;
    }
  }
  async signInWithOAuth(l) {
    var u, r, c, h;
    return await this._handleProviderSignIn(l.provider, {
      redirectTo:
        (u = l.options) === null || u === void 0 ? void 0 : u.redirectTo,
      scopes: (r = l.options) === null || r === void 0 ? void 0 : r.scopes,
      queryParams:
        (c = l.options) === null || c === void 0 ? void 0 : c.queryParams,
      skipBrowserRedirect:
        (h = l.options) === null || h === void 0
          ? void 0
          : h.skipBrowserRedirect,
    });
  }
  async exchangeCodeForSession(l) {
    return (
      await this.initializePromise,
      this._acquireLock(-1, async () => this._exchangeCodeForSession(l))
    );
  }
  async signInWithWeb3(l) {
    const { chain: u } = l;
    switch (u) {
      case "ethereum":
        return await this.signInWithEthereum(l);
      case "solana":
        return await this.signInWithSolana(l);
      default:
        throw new Error(`@supabase/auth-js: Unsupported chain "${u}"`);
    }
  }
  async signInWithEthereum(l) {
    var u, r, c, h, d, m, _, g, p, E, O;
    let z, k;
    if ("message" in l) (z = l.message), (k = l.signature);
    else {
      const { chain: q, wallet: B, statement: ae, options: Q } = l;
      let L;
      if (At())
        if (typeof B == "object") L = B;
        else {
          const Ce = window;
          if (
            "ethereum" in Ce &&
            typeof Ce.ethereum == "object" &&
            "request" in Ce.ethereum &&
            typeof Ce.ethereum.request == "function"
          )
            L = Ce.ethereum;
          else
            throw new Error(
              "@supabase/auth-js: No compatible Ethereum wallet interface on the window object (window.ethereum) detected. Make sure the user already has a wallet installed and connected for this app. Prefer passing the wallet interface object directly to signInWithWeb3({ chain: 'ethereum', wallet: resolvedUserWallet }) instead."
            );
        }
      else {
        if (typeof B != "object" || !Q?.url)
          throw new Error(
            "@supabase/auth-js: Both wallet and url must be specified in non-browser environments."
          );
        L = B;
      }
      const I = new URL(
          (u = Q?.url) !== null && u !== void 0 ? u : window.location.href
        ),
        K = await L.request({ method: "eth_requestAccounts" })
          .then((Ce) => Ce)
          .catch(() => {
            throw new Error(
              "@supabase/auth-js: Wallet method eth_requestAccounts is missing or invalid"
            );
          });
      if (!K || K.length === 0)
        throw new Error(
          "@supabase/auth-js: No accounts available. Please ensure the wallet is connected."
        );
      const ee = Ev(K[0]);
      let fe =
        (r = Q?.signInWithEthereum) === null || r === void 0
          ? void 0
          : r.chainId;
      if (!fe) {
        const Ce = await L.request({ method: "eth_chainId" });
        fe = y_(Ce);
      }
      const je = {
        domain: I.host,
        address: ee,
        statement: ae,
        uri: I.href,
        version: "1",
        chainId: fe,
        nonce:
          (c = Q?.signInWithEthereum) === null || c === void 0
            ? void 0
            : c.nonce,
        issuedAt:
          (d =
            (h = Q?.signInWithEthereum) === null || h === void 0
              ? void 0
              : h.issuedAt) !== null && d !== void 0
            ? d
            : new Date(),
        expirationTime:
          (m = Q?.signInWithEthereum) === null || m === void 0
            ? void 0
            : m.expirationTime,
        notBefore:
          (_ = Q?.signInWithEthereum) === null || _ === void 0
            ? void 0
            : _.notBefore,
        requestId:
          (g = Q?.signInWithEthereum) === null || g === void 0
            ? void 0
            : g.requestId,
        resources:
          (p = Q?.signInWithEthereum) === null || p === void 0
            ? void 0
            : p.resources,
      };
      (z = __(je)),
        (k = await L.request({ method: "personal_sign", params: [m_(z), ee] }));
    }
    try {
      const { data: q, error: B } = await re(
        this.fetch,
        "POST",
        `${this.url}/token?grant_type=web3`,
        {
          headers: this.headers,
          body: Object.assign(
            { chain: "ethereum", message: z, signature: k },
            !((E = l.options) === null || E === void 0) && E.captchaToken
              ? {
                  gotrue_meta_security: {
                    captcha_token:
                      (O = l.options) === null || O === void 0
                        ? void 0
                        : O.captchaToken,
                  },
                }
              : null
          ),
          xform: qt,
        }
      );
      if (B) throw B;
      return !q || !q.session || !q.user
        ? { data: { user: null, session: null }, error: new il() }
        : (q.session &&
            (await this._saveSession(q.session),
            await this._notifyAllSubscribers("SIGNED_IN", q.session)),
          { data: Object.assign({}, q), error: B });
    } catch (q) {
      if (ne(q)) return { data: { user: null, session: null }, error: q };
      throw q;
    }
  }
  async signInWithSolana(l) {
    var u, r, c, h, d, m, _, g, p, E, O, z;
    let k, q;
    if ("message" in l) (k = l.message), (q = l.signature);
    else {
      const { chain: B, wallet: ae, statement: Q, options: L } = l;
      let I;
      if (At())
        if (typeof ae == "object") I = ae;
        else {
          const ee = window;
          if (
            "solana" in ee &&
            typeof ee.solana == "object" &&
            (("signIn" in ee.solana && typeof ee.solana.signIn == "function") ||
              ("signMessage" in ee.solana &&
                typeof ee.solana.signMessage == "function"))
          )
            I = ee.solana;
          else
            throw new Error(
              "@supabase/auth-js: No compatible Solana wallet interface on the window object (window.solana) detected. Make sure the user already has a wallet installed and connected for this app. Prefer passing the wallet interface object directly to signInWithWeb3({ chain: 'solana', wallet: resolvedUserWallet }) instead."
            );
        }
      else {
        if (typeof ae != "object" || !L?.url)
          throw new Error(
            "@supabase/auth-js: Both wallet and url must be specified in non-browser environments."
          );
        I = ae;
      }
      const K = new URL(
        (u = L?.url) !== null && u !== void 0 ? u : window.location.href
      );
      if ("signIn" in I && I.signIn) {
        const ee = await I.signIn(
          Object.assign(
            Object.assign(
              Object.assign(
                { issuedAt: new Date().toISOString() },
                L?.signInWithSolana
              ),
              { version: "1", domain: K.host, uri: K.href }
            ),
            Q ? { statement: Q } : null
          )
        );
        let fe;
        if (Array.isArray(ee) && ee[0] && typeof ee[0] == "object") fe = ee[0];
        else if (
          ee &&
          typeof ee == "object" &&
          "signedMessage" in ee &&
          "signature" in ee
        )
          fe = ee;
        else
          throw new Error(
            "@supabase/auth-js: Wallet method signIn() returned unrecognized value"
          );
        if (
          "signedMessage" in fe &&
          "signature" in fe &&
          (typeof fe.signedMessage == "string" ||
            fe.signedMessage instanceof Uint8Array) &&
          fe.signature instanceof Uint8Array
        )
          (k =
            typeof fe.signedMessage == "string"
              ? fe.signedMessage
              : new TextDecoder().decode(fe.signedMessage)),
            (q = fe.signature);
        else
          throw new Error(
            "@supabase/auth-js: Wallet method signIn() API returned object without signedMessage and signature fields"
          );
      } else {
        if (
          !("signMessage" in I) ||
          typeof I.signMessage != "function" ||
          !("publicKey" in I) ||
          typeof I != "object" ||
          !I.publicKey ||
          !("toBase58" in I.publicKey) ||
          typeof I.publicKey.toBase58 != "function"
        )
          throw new Error(
            "@supabase/auth-js: Wallet does not have a compatible signMessage() and publicKey.toBase58() API"
          );
        k = [
          `${K.host} wants you to sign in with your Solana account:`,
          I.publicKey.toBase58(),
          ...(Q ? ["", Q, ""] : [""]),
          "Version: 1",
          `URI: ${K.href}`,
          `Issued At: ${
            (c =
              (r = L?.signInWithSolana) === null || r === void 0
                ? void 0
                : r.issuedAt) !== null && c !== void 0
              ? c
              : new Date().toISOString()
          }`,
          ...(!((h = L?.signInWithSolana) === null || h === void 0) &&
          h.notBefore
            ? [`Not Before: ${L.signInWithSolana.notBefore}`]
            : []),
          ...(!((d = L?.signInWithSolana) === null || d === void 0) &&
          d.expirationTime
            ? [`Expiration Time: ${L.signInWithSolana.expirationTime}`]
            : []),
          ...(!((m = L?.signInWithSolana) === null || m === void 0) && m.chainId
            ? [`Chain ID: ${L.signInWithSolana.chainId}`]
            : []),
          ...(!((_ = L?.signInWithSolana) === null || _ === void 0) && _.nonce
            ? [`Nonce: ${L.signInWithSolana.nonce}`]
            : []),
          ...(!((g = L?.signInWithSolana) === null || g === void 0) &&
          g.requestId
            ? [`Request ID: ${L.signInWithSolana.requestId}`]
            : []),
          ...(!(
            (E =
              (p = L?.signInWithSolana) === null || p === void 0
                ? void 0
                : p.resources) === null || E === void 0
          ) && E.length
            ? [
                "Resources",
                ...L.signInWithSolana.resources.map((fe) => `- ${fe}`),
              ]
            : []),
        ].join(`
`);
        const ee = await I.signMessage(new TextEncoder().encode(k), "utf8");
        if (!ee || !(ee instanceof Uint8Array))
          throw new Error(
            "@supabase/auth-js: Wallet signMessage() API returned an recognized value"
          );
        q = ee;
      }
    }
    try {
      const { data: B, error: ae } = await re(
        this.fetch,
        "POST",
        `${this.url}/token?grant_type=web3`,
        {
          headers: this.headers,
          body: Object.assign(
            { chain: "solana", message: k, signature: Gm(q) },
            !((O = l.options) === null || O === void 0) && O.captchaToken
              ? {
                  gotrue_meta_security: {
                    captcha_token:
                      (z = l.options) === null || z === void 0
                        ? void 0
                        : z.captchaToken,
                  },
                }
              : null
          ),
          xform: qt,
        }
      );
      if (ae) throw ae;
      return !B || !B.session || !B.user
        ? { data: { user: null, session: null }, error: new il() }
        : (B.session &&
            (await this._saveSession(B.session),
            await this._notifyAllSubscribers("SIGNED_IN", B.session)),
          { data: Object.assign({}, B), error: ae });
    } catch (B) {
      if (ne(B)) return { data: { user: null, session: null }, error: B };
      throw B;
    }
  }
  async _exchangeCodeForSession(l) {
    const u = await ea(this.storage, `${this.storageKey}-code-verifier`),
      [r, c] = (u ?? "").split("/");
    try {
      const { data: h, error: d } = await re(
        this.fetch,
        "POST",
        `${this.url}/token?grant_type=pkce`,
        {
          headers: this.headers,
          body: { auth_code: l, code_verifier: r },
          xform: qt,
        }
      );
      if ((await Rn(this.storage, `${this.storageKey}-code-verifier`), d))
        throw d;
      return !h || !h.session || !h.user
        ? {
            data: { user: null, session: null, redirectType: null },
            error: new il(),
          }
        : (h.session &&
            (await this._saveSession(h.session),
            await this._notifyAllSubscribers("SIGNED_IN", h.session)),
          {
            data: Object.assign(Object.assign({}, h), {
              redirectType: c ?? null,
            }),
            error: d,
          });
    } catch (h) {
      if (ne(h))
        return {
          data: { user: null, session: null, redirectType: null },
          error: h,
        };
      throw h;
    }
  }
  async signInWithIdToken(l) {
    try {
      const {
          options: u,
          provider: r,
          token: c,
          access_token: h,
          nonce: d,
        } = l,
        m = await re(
          this.fetch,
          "POST",
          `${this.url}/token?grant_type=id_token`,
          {
            headers: this.headers,
            body: {
              provider: r,
              id_token: c,
              access_token: h,
              nonce: d,
              gotrue_meta_security: { captcha_token: u?.captchaToken },
            },
            xform: qt,
          }
        ),
        { data: _, error: g } = m;
      return g
        ? { data: { user: null, session: null }, error: g }
        : !_ || !_.session || !_.user
        ? { data: { user: null, session: null }, error: new il() }
        : (_.session &&
            (await this._saveSession(_.session),
            await this._notifyAllSubscribers("SIGNED_IN", _.session)),
          { data: _, error: g });
    } catch (u) {
      if (ne(u)) return { data: { user: null, session: null }, error: u };
      throw u;
    }
  }
  async signInWithOtp(l) {
    var u, r, c, h, d;
    try {
      if ("email" in l) {
        const { email: m, options: _ } = l;
        let g = null,
          p = null;
        this.flowType === "pkce" &&
          ([g, p] = await Wa(this.storage, this.storageKey));
        const { error: E } = await re(this.fetch, "POST", `${this.url}/otp`, {
          headers: this.headers,
          body: {
            email: m,
            data: (u = _?.data) !== null && u !== void 0 ? u : {},
            create_user:
              (r = _?.shouldCreateUser) !== null && r !== void 0 ? r : !0,
            gotrue_meta_security: { captcha_token: _?.captchaToken },
            code_challenge: g,
            code_challenge_method: p,
          },
          redirectTo: _?.emailRedirectTo,
        });
        return { data: { user: null, session: null }, error: E };
      }
      if ("phone" in l) {
        const { phone: m, options: _ } = l,
          { data: g, error: p } = await re(
            this.fetch,
            "POST",
            `${this.url}/otp`,
            {
              headers: this.headers,
              body: {
                phone: m,
                data: (c = _?.data) !== null && c !== void 0 ? c : {},
                create_user:
                  (h = _?.shouldCreateUser) !== null && h !== void 0 ? h : !0,
                gotrue_meta_security: { captcha_token: _?.captchaToken },
                channel: (d = _?.channel) !== null && d !== void 0 ? d : "sms",
              },
            }
          );
        return {
          data: { user: null, session: null, messageId: g?.message_id },
          error: p,
        };
      }
      throw new Ds("You must provide either an email or phone number.");
    } catch (m) {
      if (ne(m)) return { data: { user: null, session: null }, error: m };
      throw m;
    }
  }
  async verifyOtp(l) {
    var u, r;
    try {
      let c, h;
      "options" in l &&
        ((c = (u = l.options) === null || u === void 0 ? void 0 : u.redirectTo),
        (h =
          (r = l.options) === null || r === void 0 ? void 0 : r.captchaToken));
      const { data: d, error: m } = await re(
        this.fetch,
        "POST",
        `${this.url}/verify`,
        {
          headers: this.headers,
          body: Object.assign(Object.assign({}, l), {
            gotrue_meta_security: { captcha_token: h },
          }),
          redirectTo: c,
          xform: qt,
        }
      );
      if (m) throw m;
      if (!d) throw new Error("An error occurred on token verification.");
      const _ = d.session,
        g = d.user;
      return (
        _?.access_token &&
          (await this._saveSession(_),
          await this._notifyAllSubscribers(
            l.type == "recovery" ? "PASSWORD_RECOVERY" : "SIGNED_IN",
            _
          )),
        { data: { user: g, session: _ }, error: null }
      );
    } catch (c) {
      if (ne(c)) return { data: { user: null, session: null }, error: c };
      throw c;
    }
  }
  async signInWithSSO(l) {
    var u, r, c;
    try {
      let h = null,
        d = null;
      return (
        this.flowType === "pkce" &&
          ([h, d] = await Wa(this.storage, this.storageKey)),
        await re(this.fetch, "POST", `${this.url}/sso`, {
          body: Object.assign(
            Object.assign(
              Object.assign(
                Object.assign(
                  Object.assign(
                    {},
                    "providerId" in l ? { provider_id: l.providerId } : null
                  ),
                  "domain" in l ? { domain: l.domain } : null
                ),
                {
                  redirect_to:
                    (r =
                      (u = l.options) === null || u === void 0
                        ? void 0
                        : u.redirectTo) !== null && r !== void 0
                      ? r
                      : void 0,
                }
              ),
              !((c = l?.options) === null || c === void 0) && c.captchaToken
                ? {
                    gotrue_meta_security: {
                      captcha_token: l.options.captchaToken,
                    },
                  }
                : null
            ),
            {
              skip_http_redirect: !0,
              code_challenge: h,
              code_challenge_method: d,
            }
          ),
          headers: this.headers,
          xform: r_,
        })
      );
    } catch (h) {
      if (ne(h)) return { data: null, error: h };
      throw h;
    }
  }
  async reauthenticate() {
    return (
      await this.initializePromise,
      await this._acquireLock(-1, async () => await this._reauthenticate())
    );
  }
  async _reauthenticate() {
    try {
      return await this._useSession(async (l) => {
        const {
          data: { session: u },
          error: r,
        } = l;
        if (r) throw r;
        if (!u) throw new xn();
        const { error: c } = await re(
          this.fetch,
          "GET",
          `${this.url}/reauthenticate`,
          { headers: this.headers, jwt: u.access_token }
        );
        return { data: { user: null, session: null }, error: c };
      });
    } catch (l) {
      if (ne(l)) return { data: { user: null, session: null }, error: l };
      throw l;
    }
  }
  async resend(l) {
    try {
      const u = `${this.url}/resend`;
      if ("email" in l) {
        const { email: r, type: c, options: h } = l,
          { error: d } = await re(this.fetch, "POST", u, {
            headers: this.headers,
            body: {
              email: r,
              type: c,
              gotrue_meta_security: { captcha_token: h?.captchaToken },
            },
            redirectTo: h?.emailRedirectTo,
          });
        return { data: { user: null, session: null }, error: d };
      } else if ("phone" in l) {
        const { phone: r, type: c, options: h } = l,
          { data: d, error: m } = await re(this.fetch, "POST", u, {
            headers: this.headers,
            body: {
              phone: r,
              type: c,
              gotrue_meta_security: { captcha_token: h?.captchaToken },
            },
          });
        return {
          data: { user: null, session: null, messageId: d?.message_id },
          error: m,
        };
      }
      throw new Ds(
        "You must provide either an email or phone number and a type"
      );
    } catch (u) {
      if (ne(u)) return { data: { user: null, session: null }, error: u };
      throw u;
    }
  }
  async getSession() {
    return (
      await this.initializePromise,
      await this._acquireLock(-1, async () => this._useSession(async (u) => u))
    );
  }
  async _acquireLock(l, u) {
    this._debug("#_acquireLock", "begin", l);
    try {
      if (this.lockAcquired) {
        const r = this.pendingInLock.length
            ? this.pendingInLock[this.pendingInLock.length - 1]
            : Promise.resolve(),
          c = (async () => (await r, await u()))();
        return (
          this.pendingInLock.push(
            (async () => {
              try {
                await c;
              } catch {}
            })()
          ),
          c
        );
      }
      return await this.lock(`lock:${this.storageKey}`, l, async () => {
        this._debug(
          "#_acquireLock",
          "lock acquired for storage key",
          this.storageKey
        );
        try {
          this.lockAcquired = !0;
          const r = u();
          for (
            this.pendingInLock.push(
              (async () => {
                try {
                  await r;
                } catch {}
              })()
            ),
              await r;
            this.pendingInLock.length;

          ) {
            const c = [...this.pendingInLock];
            await Promise.all(c), this.pendingInLock.splice(0, c.length);
          }
          return await r;
        } finally {
          this._debug(
            "#_acquireLock",
            "lock released for storage key",
            this.storageKey
          ),
            (this.lockAcquired = !1);
        }
      });
    } finally {
      this._debug("#_acquireLock", "end");
    }
  }
  async _useSession(l) {
    this._debug("#_useSession", "begin");
    try {
      const u = await this.__loadSession();
      return await l(u);
    } finally {
      this._debug("#_useSession", "end");
    }
  }
  async __loadSession() {
    this._debug("#__loadSession()", "begin"),
      this.lockAcquired ||
        this._debug(
          "#__loadSession()",
          "used outside of an acquired lock!",
          new Error().stack
        );
    try {
      let l = null;
      const u = await ea(this.storage, this.storageKey);
      if (
        (this._debug("#getSession()", "session from storage", u),
        u !== null &&
          (this._isValidSession(u)
            ? (l = u)
            : (this._debug(
                "#getSession()",
                "session from storage is not valid"
              ),
              await this._removeSession())),
        !l)
      )
        return { data: { session: null }, error: null };
      const r = l.expires_at ? l.expires_at * 1e3 - Date.now() < ro : !1;
      if (
        (this._debug(
          "#__loadSession()",
          `session has${r ? "" : " not"} expired`,
          "expires_at",
          l.expires_at
        ),
        !r)
      ) {
        if (this.userStorage) {
          const d = await ea(this.userStorage, this.storageKey + "-user");
          d?.user ? (l.user = d.user) : (l.user = co());
        }
        if (this.storage.isServer && l.user) {
          let d = this.suppressGetSessionWarning;
          l = new Proxy(l, {
            get: (_, g, p) => (
              !d &&
                g === "user" &&
                (console.warn(
                  "Using the user object as returned from supabase.auth.getSession() or from some supabase.auth.onAuthStateChange() events could be insecure! This value comes directly from the storage medium (usually cookies on the server) and may not be authentic. Use supabase.auth.getUser() instead which authenticates the data by contacting the Supabase Auth server."
                ),
                (d = !0),
                (this.suppressGetSessionWarning = !0)),
              Reflect.get(_, g, p)
            ),
          });
        }
        return { data: { session: l }, error: null };
      }
      const { session: c, error: h } = await this._callRefreshToken(
        l.refresh_token
      );
      return h
        ? { data: { session: null }, error: h }
        : { data: { session: c }, error: null };
    } finally {
      this._debug("#__loadSession()", "end");
    }
  }
  async getUser(l) {
    return l
      ? await this._getUser(l)
      : (await this.initializePromise,
        await this._acquireLock(-1, async () => await this._getUser()));
  }
  async _getUser(l) {
    try {
      return l
        ? await re(this.fetch, "GET", `${this.url}/user`, {
            headers: this.headers,
            jwt: l,
            xform: Un,
          })
        : await this._useSession(async (u) => {
            var r, c, h;
            const { data: d, error: m } = u;
            if (m) throw m;
            return !(
              !((r = d.session) === null || r === void 0) && r.access_token
            ) && !this.hasCustomAuthorizationHeader
              ? { data: { user: null }, error: new xn() }
              : await re(this.fetch, "GET", `${this.url}/user`, {
                  headers: this.headers,
                  jwt:
                    (h =
                      (c = d.session) === null || c === void 0
                        ? void 0
                        : c.access_token) !== null && h !== void 0
                      ? h
                      : void 0,
                  xform: Un,
                });
          });
    } catch (u) {
      if (ne(u))
        return (
          Mm(u) &&
            (await this._removeSession(),
            await Rn(this.storage, `${this.storageKey}-code-verifier`)),
          { data: { user: null }, error: u }
        );
      throw u;
    }
  }
  async updateUser(l, u = {}) {
    return (
      await this.initializePromise,
      await this._acquireLock(-1, async () => await this._updateUser(l, u))
    );
  }
  async _updateUser(l, u = {}) {
    try {
      return await this._useSession(async (r) => {
        const { data: c, error: h } = r;
        if (h) throw h;
        if (!c.session) throw new xn();
        const d = c.session;
        let m = null,
          _ = null;
        this.flowType === "pkce" &&
          l.email != null &&
          ([m, _] = await Wa(this.storage, this.storageKey));
        const { data: g, error: p } = await re(
          this.fetch,
          "PUT",
          `${this.url}/user`,
          {
            headers: this.headers,
            redirectTo: u?.emailRedirectTo,
            body: Object.assign(Object.assign({}, l), {
              code_challenge: m,
              code_challenge_method: _,
            }),
            jwt: d.access_token,
            xform: Un,
          }
        );
        if (p) throw p;
        return (
          (d.user = g.user),
          await this._saveSession(d),
          await this._notifyAllSubscribers("USER_UPDATED", d),
          { data: { user: d.user }, error: null }
        );
      });
    } catch (r) {
      if (ne(r)) return { data: { user: null }, error: r };
      throw r;
    }
  }
  async setSession(l) {
    return (
      await this.initializePromise,
      await this._acquireLock(-1, async () => await this._setSession(l))
    );
  }
  async _setSession(l) {
    try {
      if (!l.access_token || !l.refresh_token) throw new xn();
      const u = Date.now() / 1e3;
      let r = u,
        c = !0,
        h = null;
      const { payload: d } = oo(l.access_token);
      if ((d.exp && ((r = d.exp), (c = r <= u)), c)) {
        const { session: m, error: _ } = await this._callRefreshToken(
          l.refresh_token
        );
        if (_) return { data: { user: null, session: null }, error: _ };
        if (!m) return { data: { user: null, session: null }, error: null };
        h = m;
      } else {
        const { data: m, error: _ } = await this._getUser(l.access_token);
        if (_) throw _;
        (h = {
          access_token: l.access_token,
          refresh_token: l.refresh_token,
          user: m.user,
          token_type: "bearer",
          expires_in: r - u,
          expires_at: r,
        }),
          await this._saveSession(h),
          await this._notifyAllSubscribers("SIGNED_IN", h);
      }
      return { data: { user: h.user, session: h }, error: null };
    } catch (u) {
      if (ne(u)) return { data: { session: null, user: null }, error: u };
      throw u;
    }
  }
  async refreshSession(l) {
    return (
      await this.initializePromise,
      await this._acquireLock(-1, async () => await this._refreshSession(l))
    );
  }
  async _refreshSession(l) {
    try {
      return await this._useSession(async (u) => {
        var r;
        if (!l) {
          const { data: d, error: m } = u;
          if (m) throw m;
          l = (r = d.session) !== null && r !== void 0 ? r : void 0;
        }
        if (!l?.refresh_token) throw new xn();
        const { session: c, error: h } = await this._callRefreshToken(
          l.refresh_token
        );
        return h
          ? { data: { user: null, session: null }, error: h }
          : c
          ? { data: { user: c.user, session: c }, error: null }
          : { data: { user: null, session: null }, error: null };
      });
    } catch (u) {
      if (ne(u)) return { data: { user: null, session: null }, error: u };
      throw u;
    }
  }
  async _getSessionFromURL(l, u) {
    try {
      if (!At()) throw new Cs("No browser detected.");
      if (l.error || l.error_description || l.error_code)
        throw new Cs(
          l.error_description ||
            "Error in URL with unspecified error_description",
          {
            error: l.error || "unspecified_error",
            code: l.error_code || "unspecified_code",
          }
        );
      switch (u) {
        case "implicit":
          if (this.flowType === "pkce")
            throw new Jd("Not a valid PKCE flow url.");
          break;
        case "pkce":
          if (this.flowType === "implicit")
            throw new Cs("Not a valid implicit grant flow url.");
          break;
        default:
      }
      if (u === "pkce") {
        if (
          (this._debug("#_initialize()", "begin", "is PKCE flow", !0), !l.code)
        )
          throw new Jd("No code detected.");
        const { data: Q, error: L } = await this._exchangeCodeForSession(
          l.code
        );
        if (L) throw L;
        const I = new URL(window.location.href);
        return (
          I.searchParams.delete("code"),
          window.history.replaceState(window.history.state, "", I.toString()),
          { data: { session: Q.session, redirectType: null }, error: null }
        );
      }
      const {
        provider_token: r,
        provider_refresh_token: c,
        access_token: h,
        refresh_token: d,
        expires_in: m,
        expires_at: _,
        token_type: g,
      } = l;
      if (!h || !m || !d || !g) throw new Cs("No session defined in URL");
      const p = Math.round(Date.now() / 1e3),
        E = parseInt(m);
      let O = p + E;
      _ && (O = parseInt(_));
      const z = O - p;
      z * 1e3 <= ti &&
        console.warn(
          `@supabase/gotrue-js: Session as retrieved from URL expires in ${z}s, should have been closer to ${E}s`
        );
      const k = O - E;
      p - k >= 120
        ? console.warn(
            "@supabase/gotrue-js: Session as retrieved from URL was issued over 120s ago, URL could be stale",
            k,
            O,
            p
          )
        : p - k < 0 &&
          console.warn(
            "@supabase/gotrue-js: Session as retrieved from URL was issued in the future? Check the device clock for skew",
            k,
            O,
            p
          );
      const { data: q, error: B } = await this._getUser(h);
      if (B) throw B;
      const ae = {
        provider_token: r,
        provider_refresh_token: c,
        access_token: h,
        expires_in: E,
        expires_at: O,
        refresh_token: d,
        token_type: g,
        user: q.user,
      };
      return (
        (window.location.hash = ""),
        this._debug("#_getSessionFromURL()", "clearing window.location.hash"),
        { data: { session: ae, redirectType: l.type }, error: null }
      );
    } catch (r) {
      if (ne(r))
        return { data: { session: null, redirectType: null }, error: r };
      throw r;
    }
  }
  _isImplicitGrantCallback(l) {
    return !!(l.access_token || l.error_description);
  }
  async _isPKCECallback(l) {
    const u = await ea(this.storage, `${this.storageKey}-code-verifier`);
    return !!(l.code && u);
  }
  async signOut(l = { scope: "global" }) {
    return (
      await this.initializePromise,
      await this._acquireLock(-1, async () => await this._signOut(l))
    );
  }
  async _signOut({ scope: l } = { scope: "global" }) {
    return await this._useSession(async (u) => {
      var r;
      const { data: c, error: h } = u;
      if (h) return { error: h };
      const d =
        (r = c.session) === null || r === void 0 ? void 0 : r.access_token;
      if (d) {
        const { error: m } = await this.admin.signOut(d, l);
        if (
          m &&
          !(Cm(m) && (m.status === 404 || m.status === 401 || m.status === 403))
        )
          return { error: m };
      }
      return (
        l !== "others" &&
          (await this._removeSession(),
          await Rn(this.storage, `${this.storageKey}-code-verifier`)),
        { error: null }
      );
    });
  }
  onAuthStateChange(l) {
    const u = Ym(),
      r = {
        id: u,
        callback: l,
        unsubscribe: () => {
          this._debug(
            "#unsubscribe()",
            "state change callback with id removed",
            u
          ),
            this.stateChangeEmitters.delete(u);
        },
      };
    return (
      this._debug("#onAuthStateChange()", "registered callback with id", u),
      this.stateChangeEmitters.set(u, r),
      (async () => (
        await this.initializePromise,
        await this._acquireLock(-1, async () => {
          this._emitInitialSession(u);
        })
      ))(),
      { data: { subscription: r } }
    );
  }
  async _emitInitialSession(l) {
    return await this._useSession(async (u) => {
      var r, c;
      try {
        const {
          data: { session: h },
          error: d,
        } = u;
        if (d) throw d;
        await ((r = this.stateChangeEmitters.get(l)) === null || r === void 0
          ? void 0
          : r.callback("INITIAL_SESSION", h)),
          this._debug("INITIAL_SESSION", "callback id", l, "session", h);
      } catch (h) {
        await ((c = this.stateChangeEmitters.get(l)) === null || c === void 0
          ? void 0
          : c.callback("INITIAL_SESSION", null)),
          this._debug("INITIAL_SESSION", "callback id", l, "error", h),
          console.error(h);
      }
    });
  }
  async resetPasswordForEmail(l, u = {}) {
    let r = null,
      c = null;
    this.flowType === "pkce" &&
      ([r, c] = await Wa(this.storage, this.storageKey, !0));
    try {
      return await re(this.fetch, "POST", `${this.url}/recover`, {
        body: {
          email: l,
          code_challenge: r,
          code_challenge_method: c,
          gotrue_meta_security: { captcha_token: u.captchaToken },
        },
        headers: this.headers,
        redirectTo: u.redirectTo,
      });
    } catch (h) {
      if (ne(h)) return { data: null, error: h };
      throw h;
    }
  }
  async getUserIdentities() {
    var l;
    try {
      const { data: u, error: r } = await this.getUser();
      if (r) throw r;
      return {
        data: {
          identities: (l = u.user.identities) !== null && l !== void 0 ? l : [],
        },
        error: null,
      };
    } catch (u) {
      if (ne(u)) return { data: null, error: u };
      throw u;
    }
  }
  async linkIdentity(l) {
    var u;
    try {
      const { data: r, error: c } = await this._useSession(async (h) => {
        var d, m, _, g, p;
        const { data: E, error: O } = h;
        if (O) throw O;
        const z = await this._getUrlForProvider(
          `${this.url}/user/identities/authorize`,
          l.provider,
          {
            redirectTo:
              (d = l.options) === null || d === void 0 ? void 0 : d.redirectTo,
            scopes:
              (m = l.options) === null || m === void 0 ? void 0 : m.scopes,
            queryParams:
              (_ = l.options) === null || _ === void 0 ? void 0 : _.queryParams,
            skipBrowserRedirect: !0,
          }
        );
        return await re(this.fetch, "GET", z, {
          headers: this.headers,
          jwt:
            (p =
              (g = E.session) === null || g === void 0
                ? void 0
                : g.access_token) !== null && p !== void 0
              ? p
              : void 0,
        });
      });
      if (c) throw c;
      return (
        At() &&
          !(
            !((u = l.options) === null || u === void 0) && u.skipBrowserRedirect
          ) &&
          window.location.assign(r?.url),
        { data: { provider: l.provider, url: r?.url }, error: null }
      );
    } catch (r) {
      if (ne(r)) return { data: { provider: l.provider, url: null }, error: r };
      throw r;
    }
  }
  async unlinkIdentity(l) {
    try {
      return await this._useSession(async (u) => {
        var r, c;
        const { data: h, error: d } = u;
        if (d) throw d;
        return await re(
          this.fetch,
          "DELETE",
          `${this.url}/user/identities/${l.identity_id}`,
          {
            headers: this.headers,
            jwt:
              (c =
                (r = h.session) === null || r === void 0
                  ? void 0
                  : r.access_token) !== null && c !== void 0
                ? c
                : void 0,
          }
        );
      });
    } catch (u) {
      if (ne(u)) return { data: null, error: u };
      throw u;
    }
  }
  async _refreshAccessToken(l) {
    const u = `#_refreshAccessToken(${l.substring(0, 5)}...)`;
    this._debug(u, "begin");
    try {
      const r = Date.now();
      return await Km(
        async (c) => (
          c > 0 && (await Xm(200 * Math.pow(2, c - 1))),
          this._debug(u, "refreshing attempt", c),
          await re(
            this.fetch,
            "POST",
            `${this.url}/token?grant_type=refresh_token`,
            { body: { refresh_token: l }, headers: this.headers, xform: qt }
          )
        ),
        (c, h) => {
          const d = 200 * Math.pow(2, c);
          return h && uo(h) && Date.now() + d - r < ti;
        }
      );
    } catch (r) {
      if ((this._debug(u, "error", r), ne(r)))
        return { data: { session: null, user: null }, error: r };
      throw r;
    } finally {
      this._debug(u, "end");
    }
  }
  _isValidSession(l) {
    return (
      typeof l == "object" &&
      l !== null &&
      "access_token" in l &&
      "refresh_token" in l &&
      "expires_at" in l
    );
  }
  async _handleProviderSignIn(l, u) {
    const r = await this._getUrlForProvider(`${this.url}/authorize`, l, {
      redirectTo: u.redirectTo,
      scopes: u.scopes,
      queryParams: u.queryParams,
    });
    return (
      this._debug(
        "#_handleProviderSignIn()",
        "provider",
        l,
        "options",
        u,
        "url",
        r
      ),
      At() && !u.skipBrowserRedirect && window.location.assign(r),
      { data: { provider: l, url: r }, error: null }
    );
  }
  async _recoverAndRefresh() {
    var l, u;
    const r = "#_recoverAndRefresh()";
    this._debug(r, "begin");
    try {
      const c = await ea(this.storage, this.storageKey);
      if (c && this.userStorage) {
        let d = await ea(this.userStorage, this.storageKey + "-user");
        !this.storage.isServer &&
          Object.is(this.storage, this.userStorage) &&
          !d &&
          ((d = { user: c.user }),
          await ni(this.userStorage, this.storageKey + "-user", d)),
          (c.user = (l = d?.user) !== null && l !== void 0 ? l : co());
      } else if (c && !c.user && !c.user) {
        const d = await ea(this.storage, this.storageKey + "-user");
        d && d?.user
          ? ((c.user = d.user),
            await Rn(this.storage, this.storageKey + "-user"),
            await ni(this.storage, this.storageKey, c))
          : (c.user = co());
      }
      if (
        (this._debug(r, "session from storage", c), !this._isValidSession(c))
      ) {
        this._debug(r, "session is not valid"),
          c !== null && (await this._removeSession());
        return;
      }
      const h =
        ((u = c.expires_at) !== null && u !== void 0 ? u : 1 / 0) * 1e3 -
          Date.now() <
        ro;
      if (
        (this._debug(
          r,
          `session has${h ? "" : " not"} expired with margin of ${ro}s`
        ),
        h)
      ) {
        if (this.autoRefreshToken && c.refresh_token) {
          const { error: d } = await this._callRefreshToken(c.refresh_token);
          d &&
            (console.error(d),
            uo(d) ||
              (this._debug(
                r,
                "refresh failed with a non-retryable error, removing the session",
                d
              ),
              await this._removeSession()));
        }
      } else if (c.user && c.user.__isUserNotAvailableProxy === !0)
        try {
          const { data: d, error: m } = await this._getUser(c.access_token);
          !m && d?.user
            ? ((c.user = d.user),
              await this._saveSession(c),
              await this._notifyAllSubscribers("SIGNED_IN", c))
            : this._debug(
                r,
                "could not get user data, skipping SIGNED_IN notification"
              );
        } catch (d) {
          console.error("Error getting user data:", d),
            this._debug(
              r,
              "error getting user data, skipping SIGNED_IN notification",
              d
            );
        }
      else await this._notifyAllSubscribers("SIGNED_IN", c);
    } catch (c) {
      this._debug(r, "error", c), console.error(c);
      return;
    } finally {
      this._debug(r, "end");
    }
  }
  async _callRefreshToken(l) {
    var u, r;
    if (!l) throw new xn();
    if (this.refreshingDeferred) return this.refreshingDeferred.promise;
    const c = `#_callRefreshToken(${l.substring(0, 5)}...)`;
    this._debug(c, "begin");
    try {
      this.refreshingDeferred = new ks();
      const { data: h, error: d } = await this._refreshAccessToken(l);
      if (d) throw d;
      if (!h.session) throw new xn();
      await this._saveSession(h.session),
        await this._notifyAllSubscribers("TOKEN_REFRESHED", h.session);
      const m = { session: h.session, error: null };
      return this.refreshingDeferred.resolve(m), m;
    } catch (h) {
      if ((this._debug(c, "error", h), ne(h))) {
        const d = { session: null, error: h };
        return (
          uo(h) || (await this._removeSession()),
          (u = this.refreshingDeferred) === null ||
            u === void 0 ||
            u.resolve(d),
          d
        );
      }
      throw (
        ((r = this.refreshingDeferred) === null || r === void 0 || r.reject(h),
        h)
      );
    } finally {
      (this.refreshingDeferred = null), this._debug(c, "end");
    }
  }
  async _notifyAllSubscribers(l, u, r = !0) {
    const c = `#_notifyAllSubscribers(${l})`;
    this._debug(c, "begin", u, `broadcast = ${r}`);
    try {
      this.broadcastChannel &&
        r &&
        this.broadcastChannel.postMessage({ event: l, session: u });
      const h = [],
        d = Array.from(this.stateChangeEmitters.values()).map(async (m) => {
          try {
            await m.callback(l, u);
          } catch (_) {
            h.push(_);
          }
        });
      if ((await Promise.all(d), h.length > 0)) {
        for (let m = 0; m < h.length; m += 1) console.error(h[m]);
        throw h[0];
      }
    } finally {
      this._debug(c, "end");
    }
  }
  async _saveSession(l) {
    this._debug("#_saveSession()", l), (this.suppressGetSessionWarning = !0);
    const u = Object.assign({}, l),
      r = u.user && u.user.__isUserNotAvailableProxy === !0;
    if (this.userStorage) {
      !r &&
        u.user &&
        (await ni(this.userStorage, this.storageKey + "-user", {
          user: u.user,
        }));
      const c = Object.assign({}, u);
      delete c.user;
      const h = ev(c);
      await ni(this.storage, this.storageKey, h);
    } else {
      const c = ev(u);
      await ni(this.storage, this.storageKey, c);
    }
  }
  async _removeSession() {
    this._debug("#_removeSession()"),
      await Rn(this.storage, this.storageKey),
      await Rn(this.storage, this.storageKey + "-code-verifier"),
      await Rn(this.storage, this.storageKey + "-user"),
      this.userStorage &&
        (await Rn(this.userStorage, this.storageKey + "-user")),
      await this._notifyAllSubscribers("SIGNED_OUT", null);
  }
  _removeVisibilityChangedCallback() {
    this._debug("#_removeVisibilityChangedCallback()");
    const l = this.visibilityChangedCallback;
    this.visibilityChangedCallback = null;
    try {
      l &&
        At() &&
        window?.removeEventListener &&
        window.removeEventListener("visibilitychange", l);
    } catch (u) {
      console.error("removing visibilitychange callback failed", u);
    }
  }
  async _startAutoRefresh() {
    await this._stopAutoRefresh(), this._debug("#_startAutoRefresh()");
    const l = setInterval(() => this._autoRefreshTokenTick(), ti);
    (this.autoRefreshTicker = l),
      l && typeof l == "object" && typeof l.unref == "function"
        ? l.unref()
        : typeof Deno < "u" &&
          typeof Deno.unrefTimer == "function" &&
          Deno.unrefTimer(l),
      setTimeout(async () => {
        await this.initializePromise, await this._autoRefreshTokenTick();
      }, 0);
  }
  async _stopAutoRefresh() {
    this._debug("#_stopAutoRefresh()");
    const l = this.autoRefreshTicker;
    (this.autoRefreshTicker = null), l && clearInterval(l);
  }
  async startAutoRefresh() {
    this._removeVisibilityChangedCallback(), await this._startAutoRefresh();
  }
  async stopAutoRefresh() {
    this._removeVisibilityChangedCallback(), await this._stopAutoRefresh();
  }
  async _autoRefreshTokenTick() {
    this._debug("#_autoRefreshTokenTick()", "begin");
    try {
      await this._acquireLock(0, async () => {
        try {
          const l = Date.now();
          try {
            return await this._useSession(async (u) => {
              const {
                data: { session: r },
              } = u;
              if (!r || !r.refresh_token || !r.expires_at) {
                this._debug("#_autoRefreshTokenTick()", "no session");
                return;
              }
              const c = Math.floor((r.expires_at * 1e3 - l) / ti);
              this._debug(
                "#_autoRefreshTokenTick()",
                `access token expires in ${c} ticks, a tick lasts ${ti}ms, refresh threshold is ${bo} ticks`
              ),
                c <= bo && (await this._callRefreshToken(r.refresh_token));
            });
          } catch (u) {
            console.error(
              "Auto refresh tick failed with error. This is likely a transient error.",
              u
            );
          }
        } finally {
          this._debug("#_autoRefreshTokenTick()", "end");
        }
      });
    } catch (l) {
      if (l.isAcquireTimeout || l instanceof wv)
        this._debug("auto refresh token tick lock not available");
      else throw l;
    }
  }
  async _handleVisibilityChange() {
    if (
      (this._debug("#_handleVisibilityChange()"),
      !At() || !window?.addEventListener)
    )
      return this.autoRefreshToken && this.startAutoRefresh(), !1;
    try {
      (this.visibilityChangedCallback = async () =>
        await this._onVisibilityChanged(!1)),
        window?.addEventListener(
          "visibilitychange",
          this.visibilityChangedCallback
        ),
        await this._onVisibilityChanged(!0);
    } catch (l) {
      console.error("_handleVisibilityChange", l);
    }
  }
  async _onVisibilityChanged(l) {
    const u = `#_onVisibilityChanged(${l})`;
    this._debug(u, "visibilityState", document.visibilityState),
      document.visibilityState === "visible"
        ? (this.autoRefreshToken && this._startAutoRefresh(),
          l ||
            (await this.initializePromise,
            await this._acquireLock(-1, async () => {
              if (document.visibilityState !== "visible") {
                this._debug(
                  u,
                  "acquired the lock to recover the session, but the browser visibilityState is no longer visible, aborting"
                );
                return;
              }
              await this._recoverAndRefresh();
            })))
        : document.visibilityState === "hidden" &&
          this.autoRefreshToken &&
          this._stopAutoRefresh();
  }
  async _getUrlForProvider(l, u, r) {
    const c = [`provider=${encodeURIComponent(u)}`];
    if (
      (r?.redirectTo &&
        c.push(`redirect_to=${encodeURIComponent(r.redirectTo)}`),
      r?.scopes && c.push(`scopes=${encodeURIComponent(r.scopes)}`),
      this.flowType === "pkce")
    ) {
      const [h, d] = await Wa(this.storage, this.storageKey),
        m = new URLSearchParams({
          code_challenge: `${encodeURIComponent(h)}`,
          code_challenge_method: `${encodeURIComponent(d)}`,
        });
      c.push(m.toString());
    }
    if (r?.queryParams) {
      const h = new URLSearchParams(r.queryParams);
      c.push(h.toString());
    }
    return (
      r?.skipBrowserRedirect &&
        c.push(`skip_http_redirect=${r.skipBrowserRedirect}`),
      `${l}?${c.join("&")}`
    );
  }
  async _unenroll(l) {
    try {
      return await this._useSession(async (u) => {
        var r;
        const { data: c, error: h } = u;
        return h
          ? { data: null, error: h }
          : await re(
              this.fetch,
              "DELETE",
              `${this.url}/factors/${l.factorId}`,
              {
                headers: this.headers,
                jwt:
                  (r = c?.session) === null || r === void 0
                    ? void 0
                    : r.access_token,
              }
            );
      });
    } catch (u) {
      if (ne(u)) return { data: null, error: u };
      throw u;
    }
  }
  async _enroll(l) {
    try {
      return await this._useSession(async (u) => {
        var r, c;
        const { data: h, error: d } = u;
        if (d) return { data: null, error: d };
        const m = Object.assign(
            { friendly_name: l.friendlyName, factor_type: l.factorType },
            l.factorType === "phone" ? { phone: l.phone } : { issuer: l.issuer }
          ),
          { data: _, error: g } = await re(
            this.fetch,
            "POST",
            `${this.url}/factors`,
            {
              body: m,
              headers: this.headers,
              jwt:
                (r = h?.session) === null || r === void 0
                  ? void 0
                  : r.access_token,
            }
          );
        return g
          ? { data: null, error: g }
          : (l.factorType === "totp" &&
              !((c = _?.totp) === null || c === void 0) &&
              c.qr_code &&
              (_.totp.qr_code = `data:image/svg+xml;utf-8,${_.totp.qr_code}`),
            { data: _, error: null });
      });
    } catch (u) {
      if (ne(u)) return { data: null, error: u };
      throw u;
    }
  }
  async _verify(l) {
    return this._acquireLock(-1, async () => {
      try {
        return await this._useSession(async (u) => {
          var r;
          const { data: c, error: h } = u;
          if (h) return { data: null, error: h };
          const { data: d, error: m } = await re(
            this.fetch,
            "POST",
            `${this.url}/factors/${l.factorId}/verify`,
            {
              body: { code: l.code, challenge_id: l.challengeId },
              headers: this.headers,
              jwt:
                (r = c?.session) === null || r === void 0
                  ? void 0
                  : r.access_token,
            }
          );
          return m
            ? { data: null, error: m }
            : (await this._saveSession(
                Object.assign(
                  { expires_at: Math.round(Date.now() / 1e3) + d.expires_in },
                  d
                )
              ),
              await this._notifyAllSubscribers("MFA_CHALLENGE_VERIFIED", d),
              { data: d, error: m });
        });
      } catch (u) {
        if (ne(u)) return { data: null, error: u };
        throw u;
      }
    });
  }
  async _challenge(l) {
    return this._acquireLock(-1, async () => {
      try {
        return await this._useSession(async (u) => {
          var r;
          const { data: c, error: h } = u;
          return h
            ? { data: null, error: h }
            : await re(
                this.fetch,
                "POST",
                `${this.url}/factors/${l.factorId}/challenge`,
                {
                  body: { channel: l.channel },
                  headers: this.headers,
                  jwt:
                    (r = c?.session) === null || r === void 0
                      ? void 0
                      : r.access_token,
                }
              );
        });
      } catch (u) {
        if (ne(u)) return { data: null, error: u };
        throw u;
      }
    });
  }
  async _challengeAndVerify(l) {
    const { data: u, error: r } = await this._challenge({
      factorId: l.factorId,
    });
    return r
      ? { data: null, error: r }
      : await this._verify({
          factorId: l.factorId,
          challengeId: u.id,
          code: l.code,
        });
  }
  async _listFactors() {
    const {
      data: { user: l },
      error: u,
    } = await this.getUser();
    if (u) return { data: null, error: u };
    const r = l?.factors || [],
      c = r.filter((d) => d.factor_type === "totp" && d.status === "verified"),
      h = r.filter((d) => d.factor_type === "phone" && d.status === "verified");
    return { data: { all: r, totp: c, phone: h }, error: null };
  }
  async _getAuthenticatorAssuranceLevel() {
    return this._acquireLock(
      -1,
      async () =>
        await this._useSession(async (l) => {
          var u, r;
          const {
            data: { session: c },
            error: h,
          } = l;
          if (h) return { data: null, error: h };
          if (!c)
            return {
              data: {
                currentLevel: null,
                nextLevel: null,
                currentAuthenticationMethods: [],
              },
              error: null,
            };
          const { payload: d } = oo(c.access_token);
          let m = null;
          d.aal && (m = d.aal);
          let _ = m;
          ((r =
            (u = c.user.factors) === null || u === void 0
              ? void 0
              : u.filter((E) => E.status === "verified")) !== null &&
          r !== void 0
            ? r
            : []
          ).length > 0 && (_ = "aal2");
          const p = d.amr || [];
          return {
            data: {
              currentLevel: m,
              nextLevel: _,
              currentAuthenticationMethods: p,
            },
            error: null,
          };
        })
    );
  }
  async fetchJwk(l, u = { keys: [] }) {
    let r = u.keys.find((m) => m.kid === l);
    if (r) return r;
    const c = Date.now();
    if (
      ((r = this.jwks.keys.find((m) => m.kid === l)),
      r && this.jwks_cached_at + Um > c)
    )
      return r;
    const { data: h, error: d } = await re(
      this.fetch,
      "GET",
      `${this.url}/.well-known/jwks.json`,
      { headers: this.headers }
    );
    if (d) throw d;
    return !h.keys ||
      h.keys.length === 0 ||
      ((this.jwks = h),
      (this.jwks_cached_at = c),
      (r = h.keys.find((m) => m.kid === l)),
      !r)
      ? null
      : r;
  }
  async getClaims(l, u = {}) {
    try {
      let r = l;
      if (!r) {
        const { data: z, error: k } = await this.getSession();
        if (k || !z.session) return { data: null, error: k };
        r = z.session.access_token;
      }
      const {
        header: c,
        payload: h,
        signature: d,
        raw: { header: m, payload: _ },
      } = oo(r);
      u?.allowExpired || e_(h.exp);
      const g =
        !c.alg ||
        c.alg.startsWith("HS") ||
        !c.kid ||
        !("crypto" in globalThis && "subtle" in globalThis.crypto)
          ? null
          : await this.fetchJwk(c.kid, u?.keys ? { keys: u.keys } : u?.jwks);
      if (!g) {
        const { error: z } = await this.getUser(r);
        if (z) throw z;
        return { data: { claims: h, header: c, signature: d }, error: null };
      }
      const p = t_(c.alg),
        E = await crypto.subtle.importKey("jwk", g, p, !0, ["verify"]);
      if (!(await crypto.subtle.verify(p, E, d, Lm(`${m}.${_}`))))
        throw new Eo("Invalid JWT signature");
      return { data: { claims: h, header: c, signature: d }, error: null };
    } catch (r) {
      if (ne(r)) return { data: null, error: r };
      throw r;
    }
  }
}
cl.nextInstanceID = 0;
const b_ = cl;
class S_ extends b_ {
  constructor(l) {
    super(l);
  }
}
var w_ = function (f, l, u, r) {
  function c(h) {
    return h instanceof u
      ? h
      : new u(function (d) {
          d(h);
        });
  }
  return new (u || (u = Promise))(function (h, d) {
    function m(p) {
      try {
        g(r.next(p));
      } catch (E) {
        d(E);
      }
    }
    function _(p) {
      try {
        g(r.throw(p));
      } catch (E) {
        d(E);
      }
    }
    function g(p) {
      p.done ? h(p.value) : c(p.value).then(m, _);
    }
    g((r = r.apply(f, l || [])).next());
  });
};
class E_ {
  constructor(l, u, r) {
    var c, h, d;
    (this.supabaseUrl = l), (this.supabaseKey = u);
    const m = Am(l);
    if (!u) throw new Error("supabaseKey is required.");
    (this.realtimeUrl = new URL("realtime/v1", m)),
      (this.realtimeUrl.protocol = this.realtimeUrl.protocol.replace(
        "http",
        "ws"
      )),
      (this.authUrl = new URL("auth/v1", m)),
      (this.storageUrl = new URL("storage/v1", m)),
      (this.functionsUrl = new URL("functions/v1", m));
    const _ = `sb-${m.hostname.split(".")[0]}-auth-token`,
      g = {
        db: gm,
        realtime: mm,
        auth: Object.assign(Object.assign({}, ym), { storageKey: _ }),
        global: vm,
      },
      p = Tm(r ?? {}, g);
    (this.storageKey =
      (c = p.auth.storageKey) !== null && c !== void 0 ? c : ""),
      (this.headers = (h = p.global.headers) !== null && h !== void 0 ? h : {}),
      p.accessToken
        ? ((this.accessToken = p.accessToken),
          (this.auth = new Proxy(
            {},
            {
              get: (E, O) => {
                throw new Error(
                  `@supabase/supabase-js: Supabase Client is configured with the accessToken option, accessing supabase.auth.${String(
                    O
                  )} is not possible`
                );
              },
            }
          )))
        : (this.auth = this._initSupabaseAuthClient(
            (d = p.auth) !== null && d !== void 0 ? d : {},
            this.headers,
            p.global.fetch
          )),
      (this.fetch = Sm(u, this._getAccessToken.bind(this), p.global.fetch)),
      (this.realtime = this._initRealtimeClient(
        Object.assign(
          {
            headers: this.headers,
            accessToken: this._getAccessToken.bind(this),
          },
          p.realtime
        )
      )),
      (this.rest = new Dy(new URL("rest/v1", m).href, {
        headers: this.headers,
        schema: p.db.schema,
        fetch: this.fetch,
      })),
      (this.storage = new fm(
        this.storageUrl.href,
        this.headers,
        this.fetch,
        r?.storage
      )),
      p.accessToken || this._listenForAuthEvents();
  }
  get functions() {
    return new Sy(this.functionsUrl.href, {
      headers: this.headers,
      customFetch: this.fetch,
    });
  }
  from(l) {
    return this.rest.from(l);
  }
  schema(l) {
    return this.rest.schema(l);
  }
  rpc(l, u = {}, r = {}) {
    return this.rest.rpc(l, u, r);
  }
  channel(l, u = { config: {} }) {
    return this.realtime.channel(l, u);
  }
  getChannels() {
    return this.realtime.getChannels();
  }
  removeChannel(l) {
    return this.realtime.removeChannel(l);
  }
  removeAllChannels() {
    return this.realtime.removeAllChannels();
  }
  _getAccessToken() {
    var l, u;
    return w_(this, void 0, void 0, function* () {
      if (this.accessToken) return yield this.accessToken();
      const { data: r } = yield this.auth.getSession();
      return (u =
        (l = r.session) === null || l === void 0 ? void 0 : l.access_token) !==
        null && u !== void 0
        ? u
        : this.supabaseKey;
    });
  }
  _initSupabaseAuthClient(
    {
      autoRefreshToken: l,
      persistSession: u,
      detectSessionInUrl: r,
      storage: c,
      userStorage: h,
      storageKey: d,
      flowType: m,
      lock: _,
      debug: g,
    },
    p,
    E
  ) {
    const O = {
      Authorization: `Bearer ${this.supabaseKey}`,
      apikey: `${this.supabaseKey}`,
    };
    return new S_({
      url: this.authUrl.href,
      headers: Object.assign(Object.assign({}, O), p),
      storageKey: d,
      autoRefreshToken: l,
      persistSession: u,
      detectSessionInUrl: r,
      storage: c,
      userStorage: h,
      flowType: m,
      lock: _,
      debug: g,
      fetch: E,
      hasCustomAuthorizationHeader: Object.keys(this.headers).some(
        (z) => z.toLowerCase() === "authorization"
      ),
    });
  }
  _initRealtimeClient(l) {
    return new Zy(
      this.realtimeUrl.href,
      Object.assign(Object.assign({}, l), {
        params: Object.assign({ apikey: this.supabaseKey }, l?.params),
      })
    );
  }
  _listenForAuthEvents() {
    return this.auth.onAuthStateChange((u, r) => {
      this._handleTokenChanged(u, "CLIENT", r?.access_token);
    });
  }
  _handleTokenChanged(l, u, r) {
    (l === "TOKEN_REFRESHED" || l === "SIGNED_IN") &&
    this.changedAccessToken !== r
      ? ((this.changedAccessToken = r), this.realtime.setAuth(r))
      : l === "SIGNED_OUT" &&
        (this.realtime.setAuth(),
        u == "STORAGE" && this.auth.signOut(),
        (this.changedAccessToken = void 0));
  }
}
const T_ = (f, l, u) => new E_(f, l, u);
function A_() {
  if (typeof window < "u" || typeof process > "u") return !1;
  const f = process.version;
  if (f == null) return !1;
  const l = f.match(/^v(\d+)\./);
  return l ? parseInt(l[1], 10) <= 18 : !1;
}
A_() &&
  console.warn(
    "⚠️  Node.js 18 and below are deprecated and will no longer be supported in future versions of @supabase/supabase-js. Please upgrade to Node.js 20 or later. For more information, visit: https://github.com/orgs/supabase/discussions/37217"
  );
const O_ = "https://cmiqfrksphslfqcfwaar.supabase.co",
  j_ =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNtaXFmcmtzcGhzbGZxY2Z3YWFyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc5NTkxNDQsImV4cCI6MjA3MzUzNTE0NH0.ZTFyBe2NEP9-VPp4zp9UU3coy1PM1FnCc_gKsuxkbac",
  ol = T_(O_, j_);
function R_(f) {
  const [l, u] = He.useState({ nome: "", numero: "", pais: "" }),
    [r, c] = He.useState("Salvar na Agenda"),
    [h, d] = He.useState("Salvar Contato"),
    m = () => {
      if (f.triggerEdit) {
        c("Salvar Edição"), d("Editar Contato");
        return;
      }
      d("Salvar Contato"), c("Salvar na Agenda");
    },
    _ = async () => {
      if (f.triggerEdit) {
        try {
          const { data: E, error: O } = await ol
            .from("contatos")
            .select("*")
            .single()
            .eq("id", f.editId);
          if (O) throw O;
          u({ nome: E.nome, numero: E.numero, pais: E.pais });
        } catch (E) {
          alert(E.message);
        }
        return;
      }
      u({ nome: "", numero: "", pais: "" });
    },
    g = () => {
      _(), m();
    };
  He.useEffect(g, [f.triggerEdit]);
  const p = async (E) => {
    if (
      (E.preventDefault(), !l.nome.trim() || !l.numero.trim() || !l.pais.trim())
    ) {
      alert("Preencha todos os campos");
      return;
    }
    if (l.numero.length < 9 || l.numero.length >= 12) {
      alert("Preencha com um número válido");
      return;
    }
    if (f.triggerEdit) {
      try {
        const { data: O, error: z } = await ol
          .from("contatos")
          .update([{ nome: l.nome, numero: l.numero, pais: l.pais }])
          .eq("id", f.editId)
          .select()
          .single();
        if (z) throw z;
        u({ nome: "", numero: "", pais: "" }),
          f.setContatos((k) => {
            const q = k.filter((B) => B.id !== f.editId);
            return [O, ...q];
          });
      } catch (O) {
        alert(O.message);
      } finally {
        f.setTriggerEdit(!1);
      }
      return;
    }
    try {
      const { data: O, error: z } = await ol
        .from("contatos")
        .insert([{ nome: l.nome, numero: l.numero, pais: l.pais }])
        .select()
        .single();
      if (z) throw z;
      u({ nome: "", numero: "", pais: "" }), f.setContatos([O, ...f.contatos]);
    } catch (O) {
      alert(O.message);
    }
  };
  return H.jsxs("div", {
    className: In.agenda,
    children: [
      H.jsx("h2", { children: h }),
      H.jsxs("form", {
        onSubmit: p,
        children: [
          H.jsxs("section", {
            className: In.agenda_container,
            children: [
              H.jsxs("div", {
                className: In.nome,
                children: [
                  H.jsx("p", { children: "Nome" }),
                  H.jsx("input", {
                    type: "text",
                    placeholder: "Nome do contato",
                    value: l.nome,
                    onChange: (E) => u({ ...l, nome: E.target.value }),
                  }),
                ],
              }),
              H.jsxs("div", {
                className: In.pais,
                children: [
                  H.jsx("p", { children: "País" }),
                  H.jsxs("select", {
                    value: l.pais,
                    onChange: (E) => u({ ...l, pais: E.target.value }),
                    children: [
                      H.jsx("option", { value: "", children: "-" }),
                      H.jsx("option", { value: "55", children: "🇧🇷" }),
                      H.jsx("option", { value: "1", children: "🇺🇸" }),
                      H.jsx("option", { value: "33", children: "🇫🇷" }),
                    ],
                  }),
                ],
              }),
              H.jsxs("div", {
                className: In.numero,
                children: [
                  H.jsx("p", { children: "Número" }),
                  H.jsx("input", {
                    type: "text",
                    placeholder: "Número",
                    value: f.formatacao(l.numero),
                    onChange: (E) => {
                      const O = E.target.value.replace(/\D/g, "");
                      u({ ...l, numero: O });
                    },
                  }),
                ],
              }),
            ],
          }),
          H.jsx("div", {
            className: In.botao,
            children: H.jsx("button", {
              className: In.salvar_na_agenda,
              type: "submit",
              children: r,
            }),
          }),
        ],
      }),
    ],
  });
}
const x_ = "_contatos_1sxmb_3",
  U_ = "_dados_1sxmb_43",
  D_ = "_info_1sxmb_81",
  C_ = "_icons_1sxmb_103",
  M_ = "_icon_1sxmb_103",
  N_ = "_container_1sxmb_187",
  z_ = "_lista_1sxmb_209",
  k_ = "_pesquisa_1sxmb_293",
  xt = {
    contatos: x_,
    dados: U_,
    info: D_,
    icons: C_,
    icon: M_,
    container: N_,
    lista: z_,
    pesquisa: k_,
  };
function q_(f) {
  const [l, u] = He.useState(!0),
    [r, c] = He.useState("");
  He.useEffect(() => {
    h();
  }, []);
  const h = async () => {
      try {
        u(!0);
        let { data: g, error: p } = await ol.from("contatos").select("*");
        if (p) throw p;
        f.setContatos(g);
      } catch (g) {
        alert(g.message);
      } finally {
        u(!1);
      }
    },
    d = async (g) => {
      if (confirm("Tem certeza que deseja deletar este contato?"))
        try {
          const { error: p } = await ol.from("contatos").delete().eq("id", g);
          if (p) throw p;
          f.setContatos((E) => E.filter((O) => O.id !== g));
        } catch (p) {
          alert(p.message);
        }
    },
    m = (g) => c(g.target.value),
    _ = He.useMemo(() => {
      const g = (r || "").trim().toLowerCase();
      return g
        ? (f.contatos || []).filter((p) =>
            (p.nome || "").toLowerCase().includes(g)
          )
        : f.contatos || [];
    }, [f.contatos, r]);
  return H.jsxs("div", {
    className: xt.lista,
    children: [
      H.jsx("h2", { className: xt.titulo, children: "Agenda de contatos" }),
      H.jsxs("h4", { children: ["Seus contatos (", f.contatos.length, ")"] }),
      H.jsx("div", {
        children: H.jsx("input", {
          type: "text",
          className: xt.pesquisa,
          placeholder: "Pesquisar contato pelo nome",
          value: r,
          onChange: m,
        }),
      }),
      H.jsx("section", {
        className: xt.contatos,
        children: l
          ? H.jsx("p", { children: "Carregando contatos..." })
          : H.jsx("div", {
              className: xt.dados,
              children: _.map((g) =>
                H.jsxs(
                  "div",
                  {
                    className: xt.container,
                    children: [
                      H.jsxs("div", {
                        className: xt.info,
                        children: [
                          H.jsx("span", { children: g.nome }),
                          H.jsxs("p", {
                            children: [g.pais, `${f.formatacao(g.numero)}`],
                          }),
                        ],
                      }),
                      H.jsxs("div", {
                        className: xt.icons,
                        children: [
                          H.jsx("svg", {
                            className: xt.icon,
                            xmlns: "http://www.w3.org/2000/svg",
                            onClick: () => {
                              f.setNumeroContato(g.numero),
                                f.setClicouMensagem(!0);
                            },
                            children: H.jsx("path", {
                              d: "M8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6-.097 1.016-.417 2.13-.771 2.966-.079.186.074.394.273.362 2.256-.37 3.597-.938 4.18-1.234A9 9 0 0 0 8 15",
                            }),
                          }),
                          H.jsxs("svg", {
                            className: xt.icon,
                            xmlns: "http://www.w3.org/2000/svg",
                            onClick: () => {
                              f.setTriggerEdit(!0), f.setEditId(g.id);
                            },
                            children: [
                              H.jsx("path", {
                                d: "M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z",
                              }),
                              H.jsx("path", {
                                fillRule: "evenodd",
                                d: "M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z",
                              }),
                            ],
                          }),
                          H.jsx("svg", {
                            className: xt.icon,
                            xmlns: "http://www.w3.org/2000/svg",
                            onClick: () => d(g.id),
                            children: H.jsx("path", {
                              d: "M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5",
                            }),
                          }),
                        ],
                      }),
                    ],
                  },
                  g.id
                )
              ),
            }),
      }),
    ],
  });
}
const B_ = "_titulo_nun8b_5",
  H_ = "_svg_nun8b_15",
  L_ = "_msg_nun8b_73",
  G_ = "_enviar_nun8b_85",
  $_ = "_gerador_nun8b_105",
  Y_ = "_padrao_nun8b_185",
  ei = { titulo: B_, svg: H_, msg: L_, enviar: G_, gerador: $_, padrao: Y_ },
  Q_ = "_link_container_1o52j_1",
  V_ = "_copiar_1o52j_17",
  X_ = "_final_link_1o52j_39",
  K_ = "_abrir_whatsapp_1o52j_83",
  Ms = { link_container: Q_, copiar: V_, final_link: X_, abrir_whatsapp: K_ };
function Z_({ link: f }) {
  const l = () => {
      navigator.clipboard.writeText(f), e.preventDefault();
    },
    u = (c) => {
      window.open(`${f}`, "_blank"), c.preventDefault();
    },
    r = (c) => {
      c.preventDefault(), alert("Link copiado!");
    };
  return H.jsx("div", {
    children: H.jsxs("section", {
      className: Ms.link_container,
      children: [
        H.jsx("p", { children: "Link gerado:" }),
        H.jsxs("div", {
          className: Ms.final_link,
          children: [
            H.jsx("input", { type: "text", placeholder: "", defaultValue: f }),
            H.jsx("button", {
              className: Ms.copiar,
              onClick: l,
              onMouseUp: r,
              children: H.jsx("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: "16",
                height: "16",
                fill: "currentColor",
                className: "bi bi-copy",
                viewBox: "0 0 16 16",
                children: H.jsx("path", {
                  fillRule: "evenodd",
                  d: "M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1z",
                }),
              }),
            }),
          ],
        }),
        H.jsx("button", {
          className: Ms.abrir_whatsapp,
          onClick: u,
          children: "Abrir Whatsapp",
        }),
      ],
    }),
  });
}
function J_(f) {
  const [l, u] = He.useState(""),
    [r, c] = He.useState(""),
    [h, d] = He.useState(""),
    m = [
      "Olá! Tudo bem?",
      "Oi, posso falar com você sobre uma oportunidade rápida?",
      "Olá, gostaria de compartilhar um link importante com você.",
    ],
    [_, g] = He.useState(""),
    p = () => {
      f.clicouMensagem && (u(f.numeroContato), f.setClicouMensagem(!1));
    };
  He.useEffect(p, [f.clicouMensagem]);
  const E = () => {
    if (l == "") {
      alert("forneça um número");
      return;
    }
    if (l.length < 9 || l.length >= 12) {
      alert("numero invalido");
      return;
    }
    if (l.length == 9) {
      g(`https://wa.me/33${l}?text=${r.replace(/ /g, "%20")}`);
      return;
    }
    if (l.length == 10) {
      g(`https://wa.me/1${l}?text=${r.replace(/ /g, "%20")}`);
      return;
    }
    g(`https://wa.me/55${l}?text=${r.replace(/ /g, "%20")}`);
  };
  return H.jsxs("div", {
    className: ei.gerador,
    children: [
      H.jsxs("div", {
        children: [
          H.jsxs("h2", {
            className: ei.titulo,
            children: [
              " ",
              H.jsx("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                className: ei.svg,
                viewBox: "0 0 16 16",
                role: "img",
                "aria-label": "Chat icon",
                children: H.jsx("path", {
                  d: "M2.678 11.894a1 1 0 0 1 .287.801 11 11 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8 8 0 0 0 8 14c3.996 0 7-2.807 7-6s-3.004-6-7-6-7 2.808-7 6c0 1.468.617 2.83 1.678 3.894m-.493 3.905a22 22 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a10 10 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9 9 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105",
                }),
              }),
              " ",
              "Gerador de Links",
            ],
          }),
          H.jsxs("div", {
            children: [
              H.jsx("p", { children: "Numero do Whatsapp" }),
              H.jsx("input", {
                type: "text",
                placeholder: "Número",
                value: f.formatacao(l),
                onChange: (O) => {
                  u(O.target.value.replace(/\D/g, ""));
                },
              }),
            ],
          }),
          H.jsxs("div", {
            children: [
              H.jsx("p", { children: "Mensagem(opcional)" }),
              H.jsx("textarea", {
                name: "",
                id: "",
                value: r,
                onChange: (O) => {
                  d(""), c(O.target.value);
                },
                className: ei.msg,
                placeholder: "Digite sua mensagem aqui...",
              }),
              H.jsxs("select", {
                className: ei.padrao,
                value: h,
                onChange: (O) => {
                  d(O.target.value), c(O.target.value);
                },
                children: [
                  H.jsx("option", {
                    value: "",
                    children: "escolher mensagem padrão",
                  }),
                  m.map((O, z) =>
                    H.jsx("option", { value: O, children: O }, z)
                  ),
                ],
              }),
            ],
          }),
          H.jsxs("button", {
            className: ei.enviar,
            onClick: E,
            children: ["Preparar mensagem", " "],
          }),
        ],
      }),
      H.jsx(Z_, { link: _ }),
    ],
  });
}
function W_() {
  const [f, l] = He.useState([]),
    [u, r] = He.useState(""),
    [c, h] = He.useState(!1),
    [d, m] = He.useState(!1),
    [_, g] = He.useState(""),
    p = (E) => {
      const O = E;
      return O.length == 9
        ? O.replace(/(\d{1})(\d{2})(\d{2})(\d{2})(\d{2})/, "($1) $2 $3 $4 $5")
        : O.length == 10
        ? O.replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3")
        : O.length == 11
        ? O.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3")
        : O;
    };
  return H.jsx(H.Fragment, {
    children: H.jsxs("div", {
      className: Md.container,
      children: [
        H.jsxs("div", {
          className: Md.secaoum,
          children: [
            H.jsx(J_, {
              contatos: f,
              formatacao: p,
              numeroContato: u,
              setClicouMensagem: h,
              clicouMensagem: c,
            }),
            H.jsx(R_, {
              setContatos: l,
              contatos: f,
              formatacao: p,
              setNumeroContato: r,
              setClicouMensagem: h,
              editId: _,
              setEditId: g,
              triggerEdit: d,
              setTriggerEdit: m,
            }),
          ],
        }),
        H.jsx(q_, {
          setContatos: l,
          contatos: f,
          formatacao: p,
          setNumeroContato: r,
          setClicouMensagem: h,
          editId: _,
          setEditId: g,
          triggerEdit: d,
          setTriggerEdit: m,
        }),
      ],
    }),
  });
}
function P_() {
  return H.jsx(H.Fragment, {
    children: H.jsxs("div", {
      className: "container-app",
      children: [H.jsx(uy, {}), H.jsx(W_, {})],
    }),
  });
}
ay.createRoot(document.getElementById("root")).render(
  H.jsx(He.StrictMode, { children: H.jsx(P_, {}) })
);
