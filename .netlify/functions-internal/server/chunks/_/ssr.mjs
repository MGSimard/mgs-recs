import { createRootRoute, createFileRoute, lazyRouteComponent, RouterProvider, Outlet, HeadContent, Scripts, ErrorComponent, Link, useLocation, useMatches, createRouter as createRouter$1 } from '@tanstack/react-router';
import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import { c } from 'react/compiler-runtime';
import { ThemeProvider as ThemeProvider$1 } from 'next-themes';
import * as React from 'react';
import { useState, useEffect } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva } from 'class-variance-authority';
import { Code, BookType, Layers, ArrowLeftRight, LayoutGrid, Paintbrush, Shapes, Database, DatabaseZap, Table, KeyRound, DollarSign, Mail, FileUp, MonitorCog, GitBranch, Workflow, Check, Server, ChartLine, Activity, BookOpen, Lightbulb, FileImage, PenTool, Clapperboard, XIcon, PanelLeftIcon, ChevronRight } from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import * as SheetPrimitive from '@radix-ui/react-dialog';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';
import * as CollapsiblePrimitive from '@radix-ui/react-collapsible';
import { AsyncLocalStorage } from 'node:async_hooks';
import { defineHandlerCallback, renderRouterToStream } from '@tanstack/react-router/ssr/server';

function StartServer(props) {
  return /* @__PURE__ */ jsx(RouterProvider, { router: props.router });
}
const defaultStreamHandler = defineHandlerCallback(
  ({ request, router, responseHeaders }) => renderRouterToStream({
    request,
    router,
    responseHeaders,
    children: /* @__PURE__ */ jsx(StartServer, { router })
  })
);
const stateIndexKey = "__TSR_index";
function createHistory(opts) {
  let location = opts.getLocation();
  const subscribers = /* @__PURE__ */ new Set();
  const notify = (action) => {
    location = opts.getLocation();
    subscribers.forEach((subscriber) => subscriber({ location, action }));
  };
  const handleIndexChange = (action) => {
    if (opts.notifyOnIndexChange ?? true) notify(action);
    else location = opts.getLocation();
  };
  const tryNavigation = async ({
    task,
    navigateOpts,
    ...actionInfo
  }) => {
    var _a, _b;
    const ignoreBlocker = (navigateOpts == null ? void 0 : navigateOpts.ignoreBlocker) ?? false;
    if (ignoreBlocker) {
      task();
      return;
    }
    const blockers = ((_a = opts.getBlockers) == null ? void 0 : _a.call(opts)) ?? [];
    const isPushOrReplace = actionInfo.type === "PUSH" || actionInfo.type === "REPLACE";
    if (typeof document !== "undefined" && blockers.length && isPushOrReplace) {
      for (const blocker of blockers) {
        const nextLocation = parseHref(actionInfo.path, actionInfo.state);
        const isBlocked = await blocker.blockerFn({
          currentLocation: location,
          nextLocation,
          action: actionInfo.type
        });
        if (isBlocked) {
          (_b = opts.onBlocked) == null ? void 0 : _b.call(opts);
          return;
        }
      }
    }
    task();
  };
  return {
    get location() {
      return location;
    },
    get length() {
      return opts.getLength();
    },
    subscribers,
    subscribe: (cb) => {
      subscribers.add(cb);
      return () => {
        subscribers.delete(cb);
      };
    },
    push: (path, state, navigateOpts) => {
      const currentIndex = location.state[stateIndexKey];
      state = assignKeyAndIndex(currentIndex + 1, state);
      tryNavigation({
        task: () => {
          opts.pushState(path, state);
          notify({ type: "PUSH" });
        },
        navigateOpts,
        type: "PUSH",
        path,
        state
      });
    },
    replace: (path, state, navigateOpts) => {
      const currentIndex = location.state[stateIndexKey];
      state = assignKeyAndIndex(currentIndex, state);
      tryNavigation({
        task: () => {
          opts.replaceState(path, state);
          notify({ type: "REPLACE" });
        },
        navigateOpts,
        type: "REPLACE",
        path,
        state
      });
    },
    go: (index, navigateOpts) => {
      tryNavigation({
        task: () => {
          opts.go(index);
          handleIndexChange({ type: "GO", index });
        },
        navigateOpts,
        type: "GO"
      });
    },
    back: (navigateOpts) => {
      tryNavigation({
        task: () => {
          opts.back((navigateOpts == null ? void 0 : navigateOpts.ignoreBlocker) ?? false);
          handleIndexChange({ type: "BACK" });
        },
        navigateOpts,
        type: "BACK"
      });
    },
    forward: (navigateOpts) => {
      tryNavigation({
        task: () => {
          opts.forward((navigateOpts == null ? void 0 : navigateOpts.ignoreBlocker) ?? false);
          handleIndexChange({ type: "FORWARD" });
        },
        navigateOpts,
        type: "FORWARD"
      });
    },
    canGoBack: () => location.state[stateIndexKey] !== 0,
    createHref: (str) => opts.createHref(str),
    block: (blocker) => {
      var _a;
      if (!opts.setBlockers) return () => {
      };
      const blockers = ((_a = opts.getBlockers) == null ? void 0 : _a.call(opts)) ?? [];
      opts.setBlockers([...blockers, blocker]);
      return () => {
        var _a2, _b;
        const blockers2 = ((_a2 = opts.getBlockers) == null ? void 0 : _a2.call(opts)) ?? [];
        (_b = opts.setBlockers) == null ? void 0 : _b.call(opts, blockers2.filter((b) => b !== blocker));
      };
    },
    flush: () => {
      var _a;
      return (_a = opts.flush) == null ? void 0 : _a.call(opts);
    },
    destroy: () => {
      var _a;
      return (_a = opts.destroy) == null ? void 0 : _a.call(opts);
    },
    notify
  };
}
function assignKeyAndIndex(index, state) {
  if (!state) {
    state = {};
  }
  const key = createRandomKey();
  return {
    ...state,
    key,
    // TODO: Remove in v2 - use __TSR_key instead
    __TSR_key: key,
    [stateIndexKey]: index
  };
}
function createMemoryHistory(opts = {
  initialEntries: ["/"]
}) {
  const entries = opts.initialEntries;
  let index = opts.initialIndex ? Math.min(Math.max(opts.initialIndex, 0), entries.length - 1) : entries.length - 1;
  const states = entries.map(
    (_entry, index2) => assignKeyAndIndex(index2, void 0)
  );
  const getLocation = () => parseHref(entries[index], states[index]);
  return createHistory({
    getLocation,
    getLength: () => entries.length,
    pushState: (path, state) => {
      if (index < entries.length - 1) {
        entries.splice(index + 1);
        states.splice(index + 1);
      }
      states.push(state);
      entries.push(path);
      index = Math.max(entries.length - 1, 0);
    },
    replaceState: (path, state) => {
      states[index] = state;
      entries[index] = path;
    },
    back: () => {
      index = Math.max(index - 1, 0);
    },
    forward: () => {
      index = Math.min(index + 1, entries.length - 1);
    },
    go: (n) => {
      index = Math.min(Math.max(index + n, 0), entries.length - 1);
    },
    createHref: (path) => path
  });
}
function parseHref(href, state) {
  const hashIndex = href.indexOf("#");
  const searchIndex = href.indexOf("?");
  const addedKey = createRandomKey();
  return {
    href,
    pathname: href.substring(
      0,
      hashIndex > 0 ? searchIndex > 0 ? Math.min(hashIndex, searchIndex) : hashIndex : searchIndex > 0 ? searchIndex : href.length
    ),
    hash: hashIndex > -1 ? href.substring(hashIndex) : "",
    search: searchIndex > -1 ? href.slice(searchIndex, hashIndex === -1 ? void 0 : hashIndex) : "",
    state: state || { [stateIndexKey]: 0, key: addedKey, __TSR_key: addedKey }
  };
}
function createRandomKey() {
  return (Math.random() + 1).toString(36).substring(7);
}
function splitSetCookieString(cookiesString) {
  if (Array.isArray(cookiesString)) {
    return cookiesString.flatMap((c2) => splitSetCookieString(c2));
  }
  if (typeof cookiesString !== "string") {
    return [];
  }
  const cookiesStrings = [];
  let pos = 0;
  let start;
  let ch;
  let lastComma;
  let nextStart;
  let cookiesSeparatorFound;
  const skipWhitespace = () => {
    while (pos < cookiesString.length && /\s/.test(cookiesString.charAt(pos))) {
      pos += 1;
    }
    return pos < cookiesString.length;
  };
  const notSpecialChar = () => {
    ch = cookiesString.charAt(pos);
    return ch !== "=" && ch !== ";" && ch !== ",";
  };
  while (pos < cookiesString.length) {
    start = pos;
    cookiesSeparatorFound = false;
    while (skipWhitespace()) {
      ch = cookiesString.charAt(pos);
      if (ch === ",") {
        lastComma = pos;
        pos += 1;
        skipWhitespace();
        nextStart = pos;
        while (pos < cookiesString.length && notSpecialChar()) {
          pos += 1;
        }
        if (pos < cookiesString.length && cookiesString.charAt(pos) === "=") {
          cookiesSeparatorFound = true;
          pos = nextStart;
          cookiesStrings.push(cookiesString.slice(start, lastComma));
          start = pos;
        } else {
          pos = lastComma + 1;
        }
      } else {
        pos += 1;
      }
    }
    if (!cookiesSeparatorFound || pos >= cookiesString.length) {
      cookiesStrings.push(cookiesString.slice(start, cookiesString.length));
    }
  }
  return cookiesStrings;
}
function toHeadersInstance(init) {
  if (init instanceof Headers) {
    return new Headers(init);
  } else if (Array.isArray(init)) {
    return new Headers(init);
  } else if (typeof init === "object") {
    return new Headers(init);
  } else {
    return new Headers();
  }
}
function mergeHeaders(...headers) {
  return headers.reduce((acc, header) => {
    const headersInstance = toHeadersInstance(header);
    for (const [key, value] of headersInstance.entries()) {
      if (key === "set-cookie") {
        const splitCookies = splitSetCookieString(value);
        splitCookies.forEach((cookie) => acc.append("set-cookie", cookie));
      } else {
        acc.set(key, value);
      }
    }
    return acc;
  }, new Headers());
}
function json(payload, init) {
  return new Response(JSON.stringify(payload), {
    ...init,
    headers: mergeHeaders(
      { "content-type": "application/json" },
      init == null ? void 0 : init.headers
    )
  });
}
var prefix = "Invariant failed";
function invariant(condition, message) {
  if (condition) {
    return;
  }
  {
    throw new Error(prefix);
  }
}
function pick(parent, keys) {
  return keys.reduce((obj, key) => {
    obj[key] = parent[key];
    return obj;
  }, {});
}
function isPlainObject(o) {
  if (!hasObjectPrototype(o)) {
    return false;
  }
  const ctor = o.constructor;
  if (typeof ctor === "undefined") {
    return true;
  }
  const prot = ctor.prototype;
  if (!hasObjectPrototype(prot)) {
    return false;
  }
  if (!prot.hasOwnProperty("isPrototypeOf")) {
    return false;
  }
  return true;
}
function hasObjectPrototype(o) {
  return Object.prototype.toString.call(o) === "[object Object]";
}
function isPlainArray(value) {
  return Array.isArray(value) && value.length === Object.keys(value).length;
}
const tsrSerializer = {
  stringify: (value) => JSON.stringify(value, function replacer(key, val) {
    const ogVal = this[key];
    const serializer = serializers.find((t) => t.stringifyCondition(ogVal));
    if (serializer) {
      return serializer.stringify(ogVal);
    }
    return val;
  }),
  parse: (value) => JSON.parse(value, function parser(key, val) {
    const ogVal = this[key];
    if (isPlainObject(ogVal)) {
      const serializer = serializers.find((t) => t.parseCondition(ogVal));
      if (serializer) {
        return serializer.parse(ogVal);
      }
    }
    return val;
  }),
  encode: (value) => {
    if (Array.isArray(value)) {
      return value.map((v) => tsrSerializer.encode(v));
    }
    if (isPlainObject(value)) {
      return Object.fromEntries(
        Object.entries(value).map(([key, v]) => [key, tsrSerializer.encode(v)])
      );
    }
    const serializer = serializers.find((t) => t.stringifyCondition(value));
    if (serializer) {
      return serializer.stringify(value);
    }
    return value;
  },
  decode: (value) => {
    if (isPlainObject(value)) {
      const serializer = serializers.find((t) => t.parseCondition(value));
      if (serializer) {
        return serializer.parse(value);
      }
    }
    if (Array.isArray(value)) {
      return value.map((v) => tsrSerializer.decode(v));
    }
    if (isPlainObject(value)) {
      return Object.fromEntries(
        Object.entries(value).map(([key, v]) => [key, tsrSerializer.decode(v)])
      );
    }
    return value;
  }
};
const createSerializer = (key, check, toValue, fromValue) => ({
  key,
  stringifyCondition: check,
  stringify: (value) => ({ [`$${key}`]: toValue(value) }),
  parseCondition: (value) => Object.hasOwn(value, `$${key}`),
  parse: (value) => fromValue(value[`$${key}`])
});
const serializers = [
  createSerializer(
    // Key
    "undefined",
    // Check
    (v) => v === void 0,
    // To
    () => 0,
    // From
    () => void 0
  ),
  createSerializer(
    // Key
    "date",
    // Check
    (v) => v instanceof Date,
    // To
    (v) => v.toISOString(),
    // From
    (v) => new Date(v)
  ),
  createSerializer(
    // Key
    "error",
    // Check
    (v) => v instanceof Error,
    // To
    (v) => ({
      ...v,
      message: v.message,
      stack: void 0,
      cause: v.cause
    }),
    // From
    (v) => Object.assign(new Error(v.message), v)
  ),
  createSerializer(
    // Key
    "formData",
    // Check
    (v) => v instanceof FormData,
    // To
    (v) => {
      const entries = {};
      v.forEach((value, key) => {
        const entry = entries[key];
        if (entry !== void 0) {
          if (Array.isArray(entry)) {
            entry.push(value);
          } else {
            entries[key] = [entry, value];
          }
        } else {
          entries[key] = value;
        }
      });
      return entries;
    },
    // From
    (v) => {
      const formData = new FormData();
      Object.entries(v).forEach(([key, value]) => {
        if (Array.isArray(value)) {
          value.forEach((val) => formData.append(key, val));
        } else {
          formData.append(key, value);
        }
      });
      return formData;
    }
  ),
  createSerializer(
    // Key
    "bigint",
    // Check
    (v) => typeof v === "bigint",
    // To
    (v) => v.toString(),
    // From
    (v) => BigInt(v)
  )
];
function warning(condition, message) {
}
function joinPaths(paths) {
  return cleanPath(
    paths.filter((val) => {
      return val !== void 0;
    }).join("/")
  );
}
function cleanPath(path) {
  return path.replace(/\/{2,}/g, "/");
}
function trimPathLeft(path) {
  return path === "/" ? path : path.replace(/^\/{1,}/, "");
}
function trimPathRight(path) {
  return path === "/" ? path : path.replace(/\/{1,}$/, "");
}
function trimPath(path) {
  return trimPathRight(trimPathLeft(path));
}
const PARAM_RE = /^\$.{1,}$/;
const PARAM_W_CURLY_BRACES_RE = /^(.*?)\{(\$[a-zA-Z_$][a-zA-Z0-9_$]*)\}(.*)$/;
const WILDCARD_RE = /^\$$/;
const WILDCARD_W_CURLY_BRACES_RE = /^(.*?)\{\$\}(.*)$/;
function parsePathname(pathname) {
  if (!pathname) {
    return [];
  }
  pathname = cleanPath(pathname);
  const segments = [];
  if (pathname.slice(0, 1) === "/") {
    pathname = pathname.substring(1);
    segments.push({
      type: "pathname",
      value: "/"
    });
  }
  if (!pathname) {
    return segments;
  }
  const split = pathname.split("/").filter(Boolean);
  segments.push(
    ...split.map((part) => {
      const wildcardBracesMatch = part.match(WILDCARD_W_CURLY_BRACES_RE);
      if (wildcardBracesMatch) {
        const prefix2 = wildcardBracesMatch[1];
        const suffix = wildcardBracesMatch[2];
        return {
          type: "wildcard",
          value: "$",
          prefixSegment: prefix2 || void 0,
          suffixSegment: suffix || void 0
        };
      }
      const paramBracesMatch = part.match(PARAM_W_CURLY_BRACES_RE);
      if (paramBracesMatch) {
        const prefix2 = paramBracesMatch[1];
        const paramName = paramBracesMatch[2];
        const suffix = paramBracesMatch[3];
        return {
          type: "param",
          value: "" + paramName,
          prefixSegment: prefix2 || void 0,
          suffixSegment: suffix || void 0
        };
      }
      if (PARAM_RE.test(part)) {
        const paramName = part.substring(1);
        return {
          type: "param",
          value: "$" + paramName,
          prefixSegment: void 0,
          suffixSegment: void 0
        };
      }
      if (WILDCARD_RE.test(part)) {
        return {
          type: "wildcard",
          value: "$",
          prefixSegment: void 0,
          suffixSegment: void 0
        };
      }
      return {
        type: "pathname",
        value: part.includes("%25") ? part.split("%25").map((segment) => decodeURI(segment)).join("%25") : decodeURI(part)
      };
    })
  );
  if (pathname.slice(-1) === "/") {
    pathname = pathname.substring(1);
    segments.push({
      type: "pathname",
      value: "/"
    });
  }
  return segments;
}
function matchPathname(basepath, currentPathname, matchLocation) {
  const pathParams = matchByPath(basepath, currentPathname, matchLocation);
  if (matchLocation.to && !pathParams) {
    return;
  }
  return pathParams ?? {};
}
function removeBasepath(basepath, pathname, caseSensitive = false) {
  const normalizedBasepath = caseSensitive ? basepath : basepath.toLowerCase();
  const normalizedPathname = caseSensitive ? pathname : pathname.toLowerCase();
  switch (true) {
    // default behaviour is to serve app from the root - pathname
    // left untouched
    case normalizedBasepath === "/":
      return pathname;
    // shortcut for removing the basepath if it matches the pathname
    case normalizedPathname === normalizedBasepath:
      return "";
    // in case pathname is shorter than basepath - there is
    // nothing to remove
    case pathname.length < basepath.length:
      return pathname;
    // avoid matching partial segments - strict equality handled
    // earlier, otherwise, basepath separated from pathname with
    // separator, therefore lack of separator means partial
    // segment match (`/app` should not match `/application`)
    case normalizedPathname[normalizedBasepath.length] !== "/":
      return pathname;
    // remove the basepath from the pathname if it starts with it
    case normalizedPathname.startsWith(normalizedBasepath):
      return pathname.slice(basepath.length);
    // otherwise, return the pathname as is
    default:
      return pathname;
  }
}
function matchByPath(basepath, from, matchLocation) {
  if (basepath !== "/" && !from.startsWith(basepath)) {
    return void 0;
  }
  from = removeBasepath(basepath, from, matchLocation.caseSensitive);
  const to = removeBasepath(
    basepath,
    `${matchLocation.to ?? "$"}`,
    matchLocation.caseSensitive
  );
  const baseSegments = parsePathname(from);
  const routeSegments = parsePathname(to);
  if (!from.startsWith("/")) {
    baseSegments.unshift({
      type: "pathname",
      value: "/"
    });
  }
  if (!to.startsWith("/")) {
    routeSegments.unshift({
      type: "pathname",
      value: "/"
    });
  }
  const params = {};
  const isMatch = (() => {
    var _a;
    for (let i = 0; i < Math.max(baseSegments.length, routeSegments.length); i++) {
      const baseSegment = baseSegments[i];
      const routeSegment = routeSegments[i];
      const isLastBaseSegment = i >= baseSegments.length - 1;
      const isLastRouteSegment = i >= routeSegments.length - 1;
      if (routeSegment) {
        if (routeSegment.type === "wildcard") {
          const remainingBaseSegments = baseSegments.slice(i);
          let _splat;
          if (routeSegment.prefixSegment || routeSegment.suffixSegment) {
            if (!baseSegment) return false;
            const prefix2 = routeSegment.prefixSegment || "";
            const suffix = routeSegment.suffixSegment || "";
            const baseValue = baseSegment.value;
            if ("prefixSegment" in routeSegment) {
              if (!baseValue.startsWith(prefix2)) {
                return false;
              }
            }
            if ("suffixSegment" in routeSegment) {
              if (!((_a = baseSegments[baseSegments.length - 1]) == null ? void 0 : _a.value.endsWith(suffix))) {
                return false;
              }
            }
            let rejoinedSplat = decodeURI(
              joinPaths(remainingBaseSegments.map((d) => d.value))
            );
            if (prefix2 && rejoinedSplat.startsWith(prefix2)) {
              rejoinedSplat = rejoinedSplat.slice(prefix2.length);
            }
            if (suffix && rejoinedSplat.endsWith(suffix)) {
              rejoinedSplat = rejoinedSplat.slice(
                0,
                rejoinedSplat.length - suffix.length
              );
            }
            _splat = rejoinedSplat;
          } else {
            _splat = decodeURI(
              joinPaths(remainingBaseSegments.map((d) => d.value))
            );
          }
          params["*"] = _splat;
          params["_splat"] = _splat;
          return true;
        }
        if (routeSegment.type === "pathname") {
          if (routeSegment.value === "/" && !(baseSegment == null ? void 0 : baseSegment.value)) {
            return true;
          }
          if (baseSegment) {
            if (matchLocation.caseSensitive) {
              if (routeSegment.value !== baseSegment.value) {
                return false;
              }
            } else if (routeSegment.value.toLowerCase() !== baseSegment.value.toLowerCase()) {
              return false;
            }
          }
        }
        if (!baseSegment) {
          return false;
        }
        if (routeSegment.type === "param") {
          if (baseSegment.value === "/") {
            return false;
          }
          let _paramValue;
          if (routeSegment.prefixSegment || routeSegment.suffixSegment) {
            const prefix2 = routeSegment.prefixSegment || "";
            const suffix = routeSegment.suffixSegment || "";
            const baseValue = baseSegment.value;
            if (prefix2 && !baseValue.startsWith(prefix2)) {
              return false;
            }
            if (suffix && !baseValue.endsWith(suffix)) {
              return false;
            }
            let paramValue = baseValue;
            if (prefix2 && paramValue.startsWith(prefix2)) {
              paramValue = paramValue.slice(prefix2.length);
            }
            if (suffix && paramValue.endsWith(suffix)) {
              paramValue = paramValue.slice(
                0,
                paramValue.length - suffix.length
              );
            }
            _paramValue = decodeURIComponent(paramValue);
          } else {
            _paramValue = decodeURIComponent(baseSegment.value);
          }
          params[routeSegment.value.substring(1)] = _paramValue;
        }
      }
      if (!isLastBaseSegment && isLastRouteSegment) {
        params["**"] = joinPaths(baseSegments.slice(i + 1).map((d) => d.value));
        return (routeSegment == null ? void 0 : routeSegment.value) !== "/";
      }
    }
    return true;
  })();
  return isMatch ? params : void 0;
}
function isNotFound(obj) {
  return !!(obj == null ? void 0 : obj.isNotFound);
}
const rootRouteId = "__root__";
function isRedirect(obj) {
  return obj instanceof Response && !!obj.options;
}
function isResolvedRedirect(obj) {
  return isRedirect(obj) && !!obj.options.href;
}
function defaultSerializeError(err) {
  if (err instanceof Error) {
    const obj = {
      name: err.name,
      message: err.message
    };
    return obj;
  }
  return {
    data: err
  };
}
function processRouteTree({
  routeTree: routeTree2,
  initRoute
}) {
  const routesById = {};
  const routesByPath = {};
  const recurseRoutes = (childRoutes) => {
    childRoutes.forEach((childRoute, i) => {
      initRoute == null ? void 0 : initRoute(childRoute, i);
      const existingRoute = routesById[childRoute.id];
      invariant(
        !existingRoute,
        `Duplicate routes found with id: ${String(childRoute.id)}`
      );
      routesById[childRoute.id] = childRoute;
      if (!childRoute.isRoot && childRoute.path) {
        const trimmedFullPath = trimPathRight(childRoute.fullPath);
        if (!routesByPath[trimmedFullPath] || childRoute.fullPath.endsWith("/")) {
          routesByPath[trimmedFullPath] = childRoute;
        }
      }
      const children = childRoute.children;
      if (children == null ? void 0 : children.length) {
        recurseRoutes(children);
      }
    });
  };
  recurseRoutes([routeTree2]);
  const scoredRoutes = [];
  const routes = Object.values(routesById);
  routes.forEach((d, i) => {
    var _a;
    if (d.isRoot || !d.path) {
      return;
    }
    const trimmed = trimPathLeft(d.fullPath);
    const parsed = parsePathname(trimmed);
    while (parsed.length > 1 && ((_a = parsed[0]) == null ? void 0 : _a.value) === "/") {
      parsed.shift();
    }
    const scores = parsed.map((segment) => {
      if (segment.value === "/") {
        return 0.75;
      }
      if (segment.type === "param" && segment.prefixSegment && segment.suffixSegment) {
        return 0.55;
      }
      if (segment.type === "param" && segment.prefixSegment) {
        return 0.52;
      }
      if (segment.type === "param" && segment.suffixSegment) {
        return 0.51;
      }
      if (segment.type === "param") {
        return 0.5;
      }
      if (segment.type === "wildcard" && segment.prefixSegment && segment.suffixSegment) {
        return 0.3;
      }
      if (segment.type === "wildcard" && segment.prefixSegment) {
        return 0.27;
      }
      if (segment.type === "wildcard" && segment.suffixSegment) {
        return 0.26;
      }
      if (segment.type === "wildcard") {
        return 0.25;
      }
      return 1;
    });
    scoredRoutes.push({ child: d, trimmed, parsed, index: i, scores });
  });
  const flatRoutes = scoredRoutes.sort((a, b) => {
    const minLength = Math.min(a.scores.length, b.scores.length);
    for (let i = 0; i < minLength; i++) {
      if (a.scores[i] !== b.scores[i]) {
        return b.scores[i] - a.scores[i];
      }
    }
    if (a.scores.length !== b.scores.length) {
      return b.scores.length - a.scores.length;
    }
    for (let i = 0; i < minLength; i++) {
      if (a.parsed[i].value !== b.parsed[i].value) {
        return a.parsed[i].value > b.parsed[i].value ? 1 : -1;
      }
    }
    return a.index - b.index;
  }).map((d, i) => {
    d.child.rank = i;
    return d.child;
  });
  return { routesById, routesByPath, flatRoutes };
}
function getMatchedRoutes({
  pathname,
  routePathname,
  basepath,
  caseSensitive,
  routesByPath,
  routesById,
  flatRoutes
}) {
  let routeParams = {};
  const trimmedPath = trimPathRight(pathname);
  const getMatchedParams = (route) => {
    var _a;
    const result = matchPathname(basepath, trimmedPath, {
      to: route.fullPath,
      caseSensitive: ((_a = route.options) == null ? void 0 : _a.caseSensitive) ?? caseSensitive
    });
    return result;
  };
  let foundRoute = routePathname !== void 0 ? routesByPath[routePathname] : void 0;
  if (foundRoute) {
    routeParams = getMatchedParams(foundRoute);
  } else {
    foundRoute = flatRoutes.find((route) => {
      const matchedParams = getMatchedParams(route);
      if (matchedParams) {
        routeParams = matchedParams;
        return true;
      }
      return false;
    });
  }
  let routeCursor = foundRoute || routesById[rootRouteId];
  const matchedRoutes = [routeCursor];
  while (routeCursor.parentRoute) {
    routeCursor = routeCursor.parentRoute;
    matchedRoutes.unshift(routeCursor);
  }
  return { matchedRoutes, routeParams, foundRoute };
}
const TSR_DEFERRED_PROMISE = Symbol.for("TSR_DEFERRED_PROMISE");
function defer(_promise, options) {
  const promise = _promise;
  if (promise[TSR_DEFERRED_PROMISE]) {
    return promise;
  }
  promise[TSR_DEFERRED_PROMISE] = { status: "pending" };
  promise.then((data) => {
    promise[TSR_DEFERRED_PROMISE].status = "success";
    promise[TSR_DEFERRED_PROMISE].data = data;
  }).catch((error) => {
    promise[TSR_DEFERRED_PROMISE].status = "error";
    promise[TSR_DEFERRED_PROMISE].error = {
      data: defaultSerializeError(error),
      __isServerError: true
    };
  });
  return promise;
}
function flattenMiddlewares(middlewares) {
  const seen = /* @__PURE__ */ new Set();
  const flattened = [];
  const recurse = (middleware) => {
    middleware.forEach((m) => {
      if (m.options.middleware) {
        recurse(m.options.middleware);
      }
      if (!seen.has(m)) {
        seen.add(m);
        flattened.push(m);
      }
    });
  };
  recurse(middlewares);
  return flattened;
}
function getDefaultExportFromCjs(x) {
  return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x["default"] : x;
}
var jsesc_1;
var hasRequiredJsesc;
function requireJsesc() {
  if (hasRequiredJsesc) return jsesc_1;
  hasRequiredJsesc = 1;
  const object = {};
  const hasOwnProperty = object.hasOwnProperty;
  const forOwn = (object2, callback) => {
    for (const key in object2) {
      if (hasOwnProperty.call(object2, key)) {
        callback(key, object2[key]);
      }
    }
  };
  const extend = (destination, source) => {
    if (!source) {
      return destination;
    }
    forOwn(source, (key, value) => {
      destination[key] = value;
    });
    return destination;
  };
  const forEach = (array, callback) => {
    const length = array.length;
    let index = -1;
    while (++index < length) {
      callback(array[index]);
    }
  };
  const fourHexEscape = (hex) => {
    return "\\u" + ("0000" + hex).slice(-4);
  };
  const hexadecimal = (code, lowercase) => {
    let hexadecimal2 = code.toString(16);
    if (lowercase) return hexadecimal2;
    return hexadecimal2.toUpperCase();
  };
  const toString = object.toString;
  const isArray = Array.isArray;
  const isBuffer = (value) => {
    return typeof Buffer === "function" && Buffer.isBuffer(value);
  };
  const isObject = (value) => {
    return toString.call(value) == "[object Object]";
  };
  const isString = (value) => {
    return typeof value == "string" || toString.call(value) == "[object String]";
  };
  const isNumber = (value) => {
    return typeof value == "number" || toString.call(value) == "[object Number]";
  };
  const isBigInt = (value) => {
    return typeof value == "bigint";
  };
  const isFunction = (value) => {
    return typeof value == "function";
  };
  const isMap = (value) => {
    return toString.call(value) == "[object Map]";
  };
  const isSet = (value) => {
    return toString.call(value) == "[object Set]";
  };
  const singleEscapes = {
    "\\": "\\\\",
    "\b": "\\b",
    "\f": "\\f",
    "\n": "\\n",
    "\r": "\\r",
    "	": "\\t"
    // `\v` is omitted intentionally, because in IE < 9, '\v' == 'v'.
    // '\v': '\\x0B'
  };
  const regexSingleEscape = /[\\\b\f\n\r\t]/;
  const regexDigit = /[0-9]/;
  const regexWhitespace = /[\xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]/;
  const escapeEverythingRegex = /([\uD800-\uDBFF][\uDC00-\uDFFF])|([\uD800-\uDFFF])|(['"`])|[^]/g;
  const escapeNonAsciiRegex = /([\uD800-\uDBFF][\uDC00-\uDFFF])|([\uD800-\uDFFF])|(['"`])|[^ !#-&\(-\[\]-_a-~]/g;
  const jsesc2 = (argument, options) => {
    const increaseIndentation = () => {
      oldIndent = indent;
      ++options.indentLevel;
      indent = options.indent.repeat(options.indentLevel);
    };
    const defaults = {
      "escapeEverything": false,
      "minimal": false,
      "isScriptContext": false,
      "quotes": "single",
      "wrap": false,
      "es6": false,
      "json": false,
      "compact": true,
      "lowercaseHex": false,
      "numbers": "decimal",
      "indent": "	",
      "indentLevel": 0,
      "__inline1__": false,
      "__inline2__": false
    };
    const json2 = options && options.json;
    if (json2) {
      defaults.quotes = "double";
      defaults.wrap = true;
    }
    options = extend(defaults, options);
    if (options.quotes != "single" && options.quotes != "double" && options.quotes != "backtick") {
      options.quotes = "single";
    }
    const quote = options.quotes == "double" ? '"' : options.quotes == "backtick" ? "`" : "'";
    const compact = options.compact;
    const lowercaseHex = options.lowercaseHex;
    let indent = options.indent.repeat(options.indentLevel);
    let oldIndent = "";
    const inline1 = options.__inline1__;
    const inline2 = options.__inline2__;
    const newLine = compact ? "" : "\n";
    let result;
    let isEmpty = true;
    const useBinNumbers = options.numbers == "binary";
    const useOctNumbers = options.numbers == "octal";
    const useDecNumbers = options.numbers == "decimal";
    const useHexNumbers = options.numbers == "hexadecimal";
    if (json2 && argument && isFunction(argument.toJSON)) {
      argument = argument.toJSON();
    }
    if (!isString(argument)) {
      if (isMap(argument)) {
        if (argument.size == 0) {
          return "new Map()";
        }
        if (!compact) {
          options.__inline1__ = true;
          options.__inline2__ = false;
        }
        return "new Map(" + jsesc2(Array.from(argument), options) + ")";
      }
      if (isSet(argument)) {
        if (argument.size == 0) {
          return "new Set()";
        }
        return "new Set(" + jsesc2(Array.from(argument), options) + ")";
      }
      if (isBuffer(argument)) {
        if (argument.length == 0) {
          return "Buffer.from([])";
        }
        return "Buffer.from(" + jsesc2(Array.from(argument), options) + ")";
      }
      if (isArray(argument)) {
        result = [];
        options.wrap = true;
        if (inline1) {
          options.__inline1__ = false;
          options.__inline2__ = true;
        }
        if (!inline2) {
          increaseIndentation();
        }
        forEach(argument, (value) => {
          isEmpty = false;
          if (inline2) {
            options.__inline2__ = false;
          }
          result.push(
            (compact || inline2 ? "" : indent) + jsesc2(value, options)
          );
        });
        if (isEmpty) {
          return "[]";
        }
        if (inline2) {
          return "[" + result.join(", ") + "]";
        }
        return "[" + newLine + result.join("," + newLine) + newLine + (compact ? "" : oldIndent) + "]";
      } else if (isNumber(argument) || isBigInt(argument)) {
        if (json2) {
          return JSON.stringify(Number(argument));
        }
        let result2;
        if (useDecNumbers) {
          result2 = String(argument);
        } else if (useHexNumbers) {
          let hexadecimal2 = argument.toString(16);
          if (!lowercaseHex) {
            hexadecimal2 = hexadecimal2.toUpperCase();
          }
          result2 = "0x" + hexadecimal2;
        } else if (useBinNumbers) {
          result2 = "0b" + argument.toString(2);
        } else if (useOctNumbers) {
          result2 = "0o" + argument.toString(8);
        }
        if (isBigInt(argument)) {
          return result2 + "n";
        }
        return result2;
      } else if (isBigInt(argument)) {
        if (json2) {
          return JSON.stringify(Number(argument));
        }
        return argument + "n";
      } else if (!isObject(argument)) {
        if (json2) {
          return JSON.stringify(argument) || "null";
        }
        return String(argument);
      } else {
        result = [];
        options.wrap = true;
        increaseIndentation();
        forOwn(argument, (key, value) => {
          isEmpty = false;
          result.push(
            (compact ? "" : indent) + jsesc2(key, options) + ":" + (compact ? "" : " ") + jsesc2(value, options)
          );
        });
        if (isEmpty) {
          return "{}";
        }
        return "{" + newLine + result.join("," + newLine) + newLine + (compact ? "" : oldIndent) + "}";
      }
    }
    const regex = options.escapeEverything ? escapeEverythingRegex : escapeNonAsciiRegex;
    result = argument.replace(regex, (char, pair, lone, quoteChar, index, string) => {
      if (pair) {
        if (options.minimal) return pair;
        const first = pair.charCodeAt(0);
        const second = pair.charCodeAt(1);
        if (options.es6) {
          const codePoint = (first - 55296) * 1024 + second - 56320 + 65536;
          const hex2 = hexadecimal(codePoint, lowercaseHex);
          return "\\u{" + hex2 + "}";
        }
        return fourHexEscape(hexadecimal(first, lowercaseHex)) + fourHexEscape(hexadecimal(second, lowercaseHex));
      }
      if (lone) {
        return fourHexEscape(hexadecimal(lone.charCodeAt(0), lowercaseHex));
      }
      if (char == "\0" && !json2 && !regexDigit.test(string.charAt(index + 1))) {
        return "\\0";
      }
      if (quoteChar) {
        if (quoteChar == quote || options.escapeEverything) {
          return "\\" + quoteChar;
        }
        return quoteChar;
      }
      if (regexSingleEscape.test(char)) {
        return singleEscapes[char];
      }
      if (options.minimal && !regexWhitespace.test(char)) {
        return char;
      }
      const hex = hexadecimal(char.charCodeAt(0), lowercaseHex);
      if (json2 || hex.length > 2) {
        return fourHexEscape(hex);
      }
      return "\\x" + ("00" + hex).slice(-2);
    });
    if (quote == "`") {
      result = result.replace(/\$\{/g, "\\${");
    }
    if (options.isScriptContext) {
      result = result.replace(/<\/(script|style)/gi, "<\\/$1").replace(/<!--/g, json2 ? "\\u003C!--" : "\\x3C!--");
    }
    if (options.wrap) {
      result = quote + result + quote;
    }
    return result;
  };
  jsesc2.version = "3.0.2";
  jsesc_1 = jsesc2;
  return jsesc_1;
}
var jsescExports = requireJsesc();
const jsesc = /* @__PURE__ */ getDefaultExportFromCjs(jsescExports);
const minifiedTsrBootStrapScript = 'const __TSR_SSR__={matches:[],streamedValues:{},initMatch:o=>(__TSR_SSR__.matches.push(o),o.extracted?.forEach(l=>{if(l.type==="stream"){let r;l.value=new ReadableStream({start(e){r={enqueue:t=>{try{e.enqueue(t)}catch{}},close:()=>{try{e.close()}catch{}}}}}),l.value.controller=r}else{let r,e;l.value=new Promise((t,n)=>{e=n,r=t}),l.value.reject=e,l.value.resolve=r}}),!0),resolvePromise:({matchId:o,id:l,promiseState:r})=>{const e=__TSR_SSR__.matches.find(t=>t.id===o);if(e){const t=e.extracted?.[l];if(t&&t.type==="promise"&&t.value&&r.status==="success")return t.value.resolve(r.data),!0}return!1},injectChunk:({matchId:o,id:l,chunk:r})=>{const e=__TSR_SSR__.matches.find(t=>t.id===o);if(e){const t=e.extracted?.[l];if(t&&t.type==="stream"&&t.value?.controller)return t.value.controller.enqueue(new TextEncoder().encode(r.toString())),!0}return!1},closeStream:({matchId:o,id:l})=>{const r=__TSR_SSR__.matches.find(e=>e.id===o);if(r){const e=r.extracted?.[l];if(e&&e.type==="stream"&&e.value?.controller)return e.value.controller.close(),!0}return!1},cleanScripts:()=>{document.querySelectorAll(".tsr-once").forEach(o=>{o.remove()})}};window.__TSR_SSR__=__TSR_SSR__;\n';
function attachRouterServerSsrUtils(router, manifest) {
  router.ssr = {
    manifest,
    serializer: tsrSerializer
  };
  router.serverSsr = {
    injectedHtml: [],
    streamedKeys: /* @__PURE__ */ new Set(),
    injectHtml: (getHtml) => {
      const promise = Promise.resolve().then(getHtml);
      router.serverSsr.injectedHtml.push(promise);
      router.emit({
        type: "onInjectedHtml",
        promise
      });
      return promise.then(() => {
      });
    },
    injectScript: (getScript, opts) => {
      return router.serverSsr.injectHtml(async () => {
        const script = await getScript();
        return `<script class='tsr-once'>${script}${""}; if (typeof __TSR_SSR__ !== 'undefined') __TSR_SSR__.cleanScripts()<\/script>`;
      });
    },
    streamValue: (key, value) => {
      warning(
        !router.serverSsr.streamedKeys.has(key));
      router.serverSsr.streamedKeys.add(key);
      router.serverSsr.injectScript(
        () => `__TSR_SSR__.streamedValues['${key}'] = { value: ${jsesc(
          router.ssr.serializer.stringify(value),
          {
            isScriptContext: true,
            wrap: true,
            json: true
          }
        )}}`
      );
    },
    onMatchSettled
  };
  router.serverSsr.injectScript(() => minifiedTsrBootStrapScript, {
    logScript: false
  });
}
function dehydrateRouter(router) {
  var _a, _b, _c;
  const dehydratedRouter = {
    manifest: router.ssr.manifest,
    dehydratedData: (_b = (_a = router.options).dehydrate) == null ? void 0 : _b.call(_a),
    lastMatchId: ((_c = router.state.matches[router.state.matches.length - 1]) == null ? void 0 : _c.id) || ""
  };
  router.serverSsr.injectScript(
    () => `__TSR_SSR__.dehydrated = ${jsesc(
      router.ssr.serializer.stringify(dehydratedRouter),
      {
        isScriptContext: true,
        wrap: true,
        json: true
      }
    )}`
  );
}
function extractAsyncLoaderData(loaderData, ctx) {
  const extracted = [];
  const replaced = replaceBy(loaderData, (value, path) => {
    if (value instanceof ReadableStream) {
      const [copy1, copy2] = value.tee();
      const entry = {
        type: "stream",
        path,
        id: extracted.length,
        matchIndex: ctx.match.index,
        stream: copy2
      };
      extracted.push(entry);
      return copy1;
    } else if (value instanceof Promise) {
      const deferredPromise = defer(value);
      const entry = {
        type: "promise",
        path,
        id: extracted.length,
        matchIndex: ctx.match.index,
        promise: deferredPromise
      };
      extracted.push(entry);
    }
    return value;
  });
  return { replaced, extracted };
}
function onMatchSettled(opts) {
  const { router, match } = opts;
  let extracted = void 0;
  let serializedLoaderData = void 0;
  if (match.loaderData !== void 0) {
    const result = extractAsyncLoaderData(match.loaderData, {
      match
    });
    match.loaderData = result.replaced;
    extracted = result.extracted;
    serializedLoaderData = extracted.reduce(
      (acc, entry) => {
        return deepImmutableSetByPath(acc, ["temp", ...entry.path], void 0);
      },
      { temp: result.replaced }
    ).temp;
  }
  const initCode = `__TSR_SSR__.initMatch(${jsesc(
    {
      id: match.id,
      __beforeLoadContext: router.ssr.serializer.stringify(
        match.__beforeLoadContext
      ),
      loaderData: router.ssr.serializer.stringify(serializedLoaderData),
      error: router.ssr.serializer.stringify(match.error),
      extracted: extracted == null ? void 0 : extracted.map((entry) => pick(entry, ["type", "path"])),
      updatedAt: match.updatedAt,
      status: match.status
    },
    {
      isScriptContext: true,
      wrap: true,
      json: true
    }
  )})`;
  router.serverSsr.injectScript(() => initCode);
  if (extracted) {
    extracted.forEach((entry) => {
      if (entry.type === "promise") return injectPromise(entry);
      return injectStream(entry);
    });
  }
  function injectPromise(entry) {
    router.serverSsr.injectScript(async () => {
      await entry.promise;
      return `__TSR_SSR__.resolvePromise(${jsesc(
        {
          matchId: match.id,
          id: entry.id,
          promiseState: entry.promise[TSR_DEFERRED_PROMISE]
        },
        {
          isScriptContext: true,
          wrap: true,
          json: true
        }
      )})`;
    });
  }
  function injectStream(entry) {
    router.serverSsr.injectHtml(async () => {
      try {
        const reader = entry.stream.getReader();
        let chunk = null;
        while (!(chunk = await reader.read()).done) {
          if (chunk.value) {
            const code = `__TSR_SSR__.injectChunk(${jsesc(
              {
                matchId: match.id,
                id: entry.id,
                chunk: chunk.value
              },
              {
                isScriptContext: true,
                wrap: true,
                json: true
              }
            )})`;
            router.serverSsr.injectScript(() => code);
          }
        }
        router.serverSsr.injectScript(
          () => `__TSR_SSR__.closeStream(${jsesc(
            {
              matchId: match.id,
              id: entry.id
            },
            {
              isScriptContext: true,
              wrap: true,
              json: true
            }
          )})`
        );
      } catch (err) {
        console.error("stream read error", err);
      }
      return "";
    });
  }
}
function deepImmutableSetByPath(obj, path, value) {
  if (path.length === 0) {
    return value;
  }
  const [key, ...rest] = path;
  if (Array.isArray(obj)) {
    return obj.map((item, i) => {
      if (i === Number(key)) {
        return deepImmutableSetByPath(item, rest, value);
      }
      return item;
    });
  }
  if (isPlainObject(obj)) {
    return {
      ...obj,
      [key]: deepImmutableSetByPath(obj[key], rest, value)
    };
  }
  return obj;
}
function replaceBy(obj, cb, path = []) {
  if (isPlainArray(obj)) {
    return obj.map((value, i) => replaceBy(value, cb, [...path, `${i}`]));
  }
  if (isPlainObject(obj)) {
    const newObj2 = {};
    for (const key in obj) {
      newObj2[key] = replaceBy(obj[key], cb, [...path, key]);
    }
    return newObj2;
  }
  const newObj = cb(obj, path);
  if (newObj !== obj) {
    return newObj;
  }
  return obj;
}
function hasProp(obj, prop) {
  try {
    return prop in obj;
  } catch {
    return false;
  }
}
var __defProp$2 = Object.defineProperty;
var __defNormalProp$2 = (obj, key, value) => key in obj ? __defProp$2(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField$2 = (obj, key, value) => {
  __defNormalProp$2(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
class H3Error extends Error {
  constructor(message, opts = {}) {
    super(message, opts);
    __publicField$2(this, "statusCode", 500);
    __publicField$2(this, "fatal", false);
    __publicField$2(this, "unhandled", false);
    __publicField$2(this, "statusMessage");
    __publicField$2(this, "data");
    __publicField$2(this, "cause");
    if (opts.cause && !this.cause) {
      this.cause = opts.cause;
    }
  }
  toJSON() {
    const obj = {
      message: this.message,
      statusCode: sanitizeStatusCode(this.statusCode, 500)
    };
    if (this.statusMessage) {
      obj.statusMessage = sanitizeStatusMessage(this.statusMessage);
    }
    if (this.data !== void 0) {
      obj.data = this.data;
    }
    return obj;
  }
}
__publicField$2(H3Error, "__h3_error__", true);
function createError(input) {
  if (typeof input === "string") {
    return new H3Error(input);
  }
  if (isError(input)) {
    return input;
  }
  const err = new H3Error(input.message ?? input.statusMessage ?? "", {
    cause: input.cause || input
  });
  if (hasProp(input, "stack")) {
    try {
      Object.defineProperty(err, "stack", {
        get() {
          return input.stack;
        }
      });
    } catch {
      try {
        err.stack = input.stack;
      } catch {
      }
    }
  }
  if (input.data) {
    err.data = input.data;
  }
  if (input.statusCode) {
    err.statusCode = sanitizeStatusCode(input.statusCode, err.statusCode);
  } else if (input.status) {
    err.statusCode = sanitizeStatusCode(input.status, err.statusCode);
  }
  if (input.statusMessage) {
    err.statusMessage = input.statusMessage;
  } else if (input.statusText) {
    err.statusMessage = input.statusText;
  }
  if (err.statusMessage) {
    const originalMessage = err.statusMessage;
    const sanitizedMessage = sanitizeStatusMessage(err.statusMessage);
    if (sanitizedMessage !== originalMessage) {
      console.warn(
        "[h3] Please prefer using `message` for longer error messages instead of `statusMessage`. In the future, `statusMessage` will be sanitized by default."
      );
    }
  }
  if (input.fatal !== void 0) {
    err.fatal = input.fatal;
  }
  if (input.unhandled !== void 0) {
    err.unhandled = input.unhandled;
  }
  return err;
}
function isError(input) {
  return input?.constructor?.__h3_error__ === true;
}
function isMethod(event, expected, allowHead) {
  if (typeof expected === "string") {
    if (event.method === expected) {
      return true;
    }
  } else if (expected.includes(event.method)) {
    return true;
  }
  return false;
}
function assertMethod(event, expected, allowHead) {
  if (!isMethod(event, expected)) {
    throw createError({
      statusCode: 405,
      statusMessage: "HTTP method is not allowed."
    });
  }
}
function getRequestHost(event, opts = {}) {
  if (opts.xForwardedHost) {
    const xForwardedHost = event.node.req.headers["x-forwarded-host"];
    if (xForwardedHost) {
      return xForwardedHost;
    }
  }
  return event.node.req.headers.host || "localhost";
}
function getRequestProtocol(event, opts = {}) {
  if (opts.xForwardedProto !== false && event.node.req.headers["x-forwarded-proto"] === "https") {
    return "https";
  }
  return event.node.req.connection?.encrypted ? "https" : "http";
}
function getRequestURL(event, opts = {}) {
  const host = getRequestHost(event, opts);
  const protocol = getRequestProtocol(event, opts);
  const path = (event.node.req.originalUrl || event.path).replace(
    /^[/\\]+/g,
    "/"
  );
  return new URL(path, `${protocol}://${host}`);
}
function toWebRequest(event) {
  return event.web?.request || new Request(getRequestURL(event), {
    // @ts-ignore Undici option
    duplex: "half",
    method: event.method,
    headers: event.headers,
    body: getRequestWebStream(event)
  });
}
const RawBodySymbol = Symbol.for("h3RawBody");
const PayloadMethods$1 = ["PATCH", "POST", "PUT", "DELETE"];
function readRawBody(event, encoding = "utf8") {
  assertMethod(event, PayloadMethods$1);
  const _rawBody = event._requestBody || event.web?.request?.body || event.node.req[RawBodySymbol] || event.node.req.rawBody || event.node.req.body;
  if (_rawBody) {
    const promise2 = Promise.resolve(_rawBody).then((_resolved) => {
      if (Buffer.isBuffer(_resolved)) {
        return _resolved;
      }
      if (typeof _resolved.pipeTo === "function") {
        return new Promise((resolve, reject) => {
          const chunks = [];
          _resolved.pipeTo(
            new WritableStream({
              write(chunk) {
                chunks.push(chunk);
              },
              close() {
                resolve(Buffer.concat(chunks));
              },
              abort(reason) {
                reject(reason);
              }
            })
          ).catch(reject);
        });
      } else if (typeof _resolved.pipe === "function") {
        return new Promise((resolve, reject) => {
          const chunks = [];
          _resolved.on("data", (chunk) => {
            chunks.push(chunk);
          }).on("end", () => {
            resolve(Buffer.concat(chunks));
          }).on("error", reject);
        });
      }
      if (_resolved.constructor === Object) {
        return Buffer.from(JSON.stringify(_resolved));
      }
      if (_resolved instanceof URLSearchParams) {
        return Buffer.from(_resolved.toString());
      }
      return Buffer.from(_resolved);
    });
    return encoding ? promise2.then((buff) => buff.toString(encoding)) : promise2;
  }
  if (!Number.parseInt(event.node.req.headers["content-length"] || "") && !String(event.node.req.headers["transfer-encoding"] ?? "").split(",").map((e) => e.trim()).filter(Boolean).includes("chunked")) {
    return Promise.resolve(void 0);
  }
  const promise = event.node.req[RawBodySymbol] = new Promise(
    (resolve, reject) => {
      const bodyData = [];
      event.node.req.on("error", (err) => {
        reject(err);
      }).on("data", (chunk) => {
        bodyData.push(chunk);
      }).on("end", () => {
        resolve(Buffer.concat(bodyData));
      });
    }
  );
  const result = encoding ? promise.then((buff) => buff.toString(encoding)) : promise;
  return result;
}
function getRequestWebStream(event) {
  if (!PayloadMethods$1.includes(event.method)) {
    return;
  }
  const bodyStream = event.web?.request?.body || event._requestBody;
  if (bodyStream) {
    return bodyStream;
  }
  const _hasRawBody = RawBodySymbol in event.node.req || "rawBody" in event.node.req || "body" in event.node.req || "__unenv__" in event.node.req;
  if (_hasRawBody) {
    return new ReadableStream({
      async start(controller) {
        const _rawBody = await readRawBody(event, false);
        if (_rawBody) {
          controller.enqueue(_rawBody);
        }
        controller.close();
      }
    });
  }
  return new ReadableStream({
    start: (controller) => {
      event.node.req.on("data", (chunk) => {
        controller.enqueue(chunk);
      });
      event.node.req.on("end", () => {
        controller.close();
      });
      event.node.req.on("error", (err) => {
        controller.error(err);
      });
    }
  });
}
const DISALLOWED_STATUS_CHARS = /[^\u0009\u0020-\u007E]/g;
function sanitizeStatusMessage(statusMessage = "") {
  return statusMessage.replace(DISALLOWED_STATUS_CHARS, "");
}
function sanitizeStatusCode(statusCode, defaultStatusCode = 200) {
  if (!statusCode) {
    return defaultStatusCode;
  }
  if (typeof statusCode === "string") {
    statusCode = Number.parseInt(statusCode, 10);
  }
  if (statusCode < 100 || statusCode > 999) {
    return defaultStatusCode;
  }
  return statusCode;
}
function splitCookiesString(cookiesString) {
  if (Array.isArray(cookiesString)) {
    return cookiesString.flatMap((c2) => splitCookiesString(c2));
  }
  if (typeof cookiesString !== "string") {
    return [];
  }
  const cookiesStrings = [];
  let pos = 0;
  let start;
  let ch;
  let lastComma;
  let nextStart;
  let cookiesSeparatorFound;
  const skipWhitespace = () => {
    while (pos < cookiesString.length && /\s/.test(cookiesString.charAt(pos))) {
      pos += 1;
    }
    return pos < cookiesString.length;
  };
  const notSpecialChar = () => {
    ch = cookiesString.charAt(pos);
    return ch !== "=" && ch !== ";" && ch !== ",";
  };
  while (pos < cookiesString.length) {
    start = pos;
    cookiesSeparatorFound = false;
    while (skipWhitespace()) {
      ch = cookiesString.charAt(pos);
      if (ch === ",") {
        lastComma = pos;
        pos += 1;
        skipWhitespace();
        nextStart = pos;
        while (pos < cookiesString.length && notSpecialChar()) {
          pos += 1;
        }
        if (pos < cookiesString.length && cookiesString.charAt(pos) === "=") {
          cookiesSeparatorFound = true;
          pos = nextStart;
          cookiesStrings.push(cookiesString.slice(start, lastComma));
          start = pos;
        } else {
          pos = lastComma + 1;
        }
      } else {
        pos += 1;
      }
    }
    if (!cookiesSeparatorFound || pos >= cookiesString.length) {
      cookiesStrings.push(cookiesString.slice(start));
    }
  }
  return cookiesStrings;
}
typeof setImmediate === "undefined" ? (fn) => fn() : setImmediate;
function getResponseStatus$1(event) {
  return event.node.res.statusCode;
}
function getResponseHeaders$1(event) {
  return event.node.res.getHeaders();
}
function sendStream(event, stream) {
  if (!stream || typeof stream !== "object") {
    throw new Error("[h3] Invalid stream provided.");
  }
  event.node.res._data = stream;
  if (!event.node.res.socket) {
    event._handled = true;
    return Promise.resolve();
  }
  if (hasProp(stream, "pipeTo") && typeof stream.pipeTo === "function") {
    return stream.pipeTo(
      new WritableStream({
        write(chunk) {
          event.node.res.write(chunk);
        }
      })
    ).then(() => {
      event.node.res.end();
    });
  }
  if (hasProp(stream, "pipe") && typeof stream.pipe === "function") {
    return new Promise((resolve, reject) => {
      stream.pipe(event.node.res);
      if (stream.on) {
        stream.on("end", () => {
          event.node.res.end();
          resolve();
        });
        stream.on("error", (error) => {
          reject(error);
        });
      }
      event.node.res.on("close", () => {
        if (stream.abort) {
          stream.abort();
        }
      });
    });
  }
  throw new Error("[h3] Invalid or incompatible stream provided.");
}
function sendWebResponse(event, response) {
  for (const [key, value] of response.headers) {
    if (key === "set-cookie") {
      event.node.res.appendHeader(key, splitCookiesString(value));
    } else {
      event.node.res.setHeader(key, value);
    }
  }
  if (response.status) {
    event.node.res.statusCode = sanitizeStatusCode(
      response.status,
      event.node.res.statusCode
    );
  }
  if (response.statusText) {
    event.node.res.statusMessage = sanitizeStatusMessage(response.statusText);
  }
  if (response.redirected) {
    event.node.res.setHeader("location", response.url);
  }
  if (!response.body) {
    event.node.res.end();
    return;
  }
  return sendStream(event, response.body);
}
var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
class H3Event {
  constructor(req, res) {
    __publicField(this, "__is_event__", true);
    __publicField(this, "node");
    __publicField(this, "web");
    __publicField(this, "context", {});
    __publicField(this, "_method");
    __publicField(this, "_path");
    __publicField(this, "_headers");
    __publicField(this, "_requestBody");
    __publicField(this, "_handled", false);
    __publicField(this, "_onBeforeResponseCalled");
    __publicField(this, "_onAfterResponseCalled");
    this.node = { req, res };
  }
  // --- Request ---
  get method() {
    if (!this._method) {
      this._method = (this.node.req.method || "GET").toUpperCase();
    }
    return this._method;
  }
  get path() {
    return this._path || this.node.req.url || "/";
  }
  get headers() {
    if (!this._headers) {
      this._headers = _normalizeNodeHeaders(this.node.req.headers);
    }
    return this._headers;
  }
  // --- Respoonse ---
  get handled() {
    return this._handled || this.node.res.writableEnded || this.node.res.headersSent;
  }
  respondWith(response) {
    return Promise.resolve(response).then(
      (_response) => sendWebResponse(this, _response)
    );
  }
  // --- Utils ---
  toString() {
    return `[${this.method}] ${this.path}`;
  }
  toJSON() {
    return this.toString();
  }
  // --- Deprecated ---
  /** @deprecated Please use `event.node.req` instead. */
  get req() {
    return this.node.req;
  }
  /** @deprecated Please use `event.node.res` instead. */
  get res() {
    return this.node.res;
  }
}
function _normalizeNodeHeaders(nodeHeaders) {
  const headers = new Headers();
  for (const [name, value] of Object.entries(nodeHeaders)) {
    if (Array.isArray(value)) {
      for (const item of value) {
        headers.append(name, item);
      }
    } else if (value) {
      headers.set(name, value);
    }
  }
  return headers;
}
function defineEventHandler$1(handler) {
  if (typeof handler === "function") {
    handler.__is_handler__ = true;
    return handler;
  }
  const _hooks = {
    onRequest: _normalizeArray(handler.onRequest),
    onBeforeResponse: _normalizeArray(handler.onBeforeResponse)
  };
  const _handler = (event) => {
    return _callHandler(event, handler.handler, _hooks);
  };
  _handler.__is_handler__ = true;
  _handler.__resolve__ = handler.handler.__resolve__;
  _handler.__websocket__ = handler.websocket;
  return _handler;
}
function _normalizeArray(input) {
  return input ? Array.isArray(input) ? input : [input] : void 0;
}
async function _callHandler(event, handler, hooks) {
  if (hooks.onRequest) {
    for (const hook of hooks.onRequest) {
      await hook(event);
      if (event.handled) {
        return;
      }
    }
  }
  const body = await handler(event);
  const response = { body };
  if (hooks.onBeforeResponse) {
    for (const hook of hooks.onBeforeResponse) {
      await hook(event, response);
    }
  }
  return response.body;
}
const eventStorage = new AsyncLocalStorage();
function defineEventHandler(handler) {
  return defineEventHandler$1((event) => {
    return runWithEvent(event, () => handler(event));
  });
}
async function runWithEvent(event, fn) {
  return eventStorage.run(event, fn);
}
function getEvent() {
  const event = eventStorage.getStore();
  if (!event) {
    throw new Error(
      `No HTTPEvent found in AsyncLocalStorage. Make sure you are using the function within the server runtime.`
    );
  }
  return event;
}
const HTTPEventSymbol = Symbol("$HTTPEvent");
function isEvent(obj) {
  return typeof obj === "object" && (obj instanceof H3Event || (obj == null ? void 0 : obj[HTTPEventSymbol]) instanceof H3Event || (obj == null ? void 0 : obj.__is_event__) === true);
}
function createWrapperFunction(h3Function) {
  return function(...args) {
    const event = args[0];
    if (!isEvent(event)) {
      args.unshift(getEvent());
    } else {
      args[0] = event instanceof H3Event || event.__is_event__ ? event : event[HTTPEventSymbol];
    }
    return h3Function(...args);
  };
}
const getResponseStatus = createWrapperFunction(getResponseStatus$1);
const getResponseHeaders = createWrapperFunction(getResponseHeaders$1);
function requestHandler(handler) {
  return handler;
}
const VIRTUAL_MODULES = {
  routeTree: "tanstack-start-route-tree:v",
  startManifest: "tanstack-start-manifest:v",
  serverFnManifest: "tanstack-start-server-fn-manifest:v"
};
async function loadVirtualModule(id) {
  switch (id) {
    case VIRTUAL_MODULES.routeTree:
      return await Promise.resolve().then(() => routeTree_gen);
    case VIRTUAL_MODULES.startManifest:
      return await import('./_tanstack-start-manifest_v-dY2-Nyl7.mjs');
    case VIRTUAL_MODULES.serverFnManifest:
      return await import('./_tanstack-start-server-fn-manifest_v-DtgTK7xl.mjs');
    default:
      throw new Error(`Unknown virtual module: ${id}`);
  }
}
async function getStartManifest(opts) {
  const { tsrStartManifest } = await loadVirtualModule(
    VIRTUAL_MODULES.startManifest
  );
  const startManifest = tsrStartManifest();
  const rootRoute = startManifest.routes[rootRouteId] = startManifest.routes[rootRouteId] || {};
  rootRoute.assets = rootRoute.assets || [];
  let script = `import('${startManifest.clientEntry}')`;
  rootRoute.assets.push({
    tag: "script",
    attrs: {
      type: "module",
      suppressHydrationWarning: true,
      async: true
    },
    children: script
  });
  const manifest = {
    ...startManifest,
    routes: Object.fromEntries(
      Object.entries(startManifest.routes).map(([k, v]) => {
        const { preloads, assets } = v;
        return [
          k,
          {
            preloads,
            assets
          }
        ];
      })
    )
  };
  return manifest;
}
function sanitizeBase(base) {
  return base.replace(/^\/|\/$/g, "");
}
const handleServerAction = async ({
  request
}) => {
  const controller = new AbortController();
  const signal = controller.signal;
  const abort = () => controller.abort();
  request.signal.addEventListener("abort", abort);
  const method = request.method;
  const url = new URL(request.url, "http://localhost:3000");
  const regex = new RegExp(`${sanitizeBase("/_serverFn")}/([^/?#]+)`);
  const match = url.pathname.match(regex);
  const serverFnId = match ? match[1] : null;
  const search = Object.fromEntries(url.searchParams.entries());
  const isCreateServerFn = "createServerFn" in search;
  const isRaw = "raw" in search;
  if (typeof serverFnId !== "string") {
    throw new Error("Invalid server action param for serverFnId: " + serverFnId);
  }
  const {
    default: serverFnManifest
  } = await loadVirtualModule(VIRTUAL_MODULES.serverFnManifest);
  const serverFnInfo = serverFnManifest[serverFnId];
  if (!serverFnInfo) {
    console.info("serverFnManifest", serverFnManifest);
    throw new Error("Server function info not found for " + serverFnId);
  }
  const fnModule = await serverFnInfo.importer();
  if (!fnModule) {
    console.info("serverFnInfo", serverFnInfo);
    throw new Error("Server function module not resolved for " + serverFnId);
  }
  const action = fnModule[serverFnInfo.functionName];
  if (!action) {
    console.info("serverFnInfo", serverFnInfo);
    console.info("fnModule", fnModule);
    throw new Error(`Server function module export not resolved for serverFn ID: ${serverFnId}`);
  }
  const formDataContentTypes = ["multipart/form-data", "application/x-www-form-urlencoded"];
  const response = await (async () => {
    try {
      let result = await (async () => {
        if (request.headers.get("Content-Type") && formDataContentTypes.some((type) => {
          var _a;
          return (_a = request.headers.get("Content-Type")) == null ? void 0 : _a.includes(type);
        })) {
          invariant(method.toLowerCase() !== "get", "GET requests with FormData payloads are not supported");
          return await action(await request.formData(), signal);
        }
        if (method.toLowerCase() === "get") {
          let payload2 = search;
          if (isCreateServerFn) {
            payload2 = search.payload;
          }
          payload2 = payload2 ? tsrSerializer.parse(payload2) : payload2;
          return await action(payload2, signal);
        }
        const jsonPayloadAsString = await request.text();
        const payload = tsrSerializer.parse(jsonPayloadAsString);
        if (isCreateServerFn) {
          return await action(payload, signal);
        }
        return await action(...payload, signal);
      })();
      if (result.result instanceof Response) {
        return result.result;
      }
      if (!isCreateServerFn) {
        result = result.result;
        if (result instanceof Response) {
          return result;
        }
      }
      if (isNotFound(result)) {
        return isNotFoundResponse(result);
      }
      return new Response(result !== void 0 ? tsrSerializer.stringify(result) : void 0, {
        status: getResponseStatus(getEvent()),
        headers: {
          "Content-Type": "application/json"
        }
      });
    } catch (error) {
      if (error instanceof Response) {
        return error;
      }
      if (isNotFound(error)) {
        return isNotFoundResponse(error);
      }
      console.info();
      console.info("Server Fn Error!");
      console.info();
      console.error(error);
      console.info();
      return new Response(tsrSerializer.stringify(error), {
        status: 500,
        headers: {
          "Content-Type": "application/json"
        }
      });
    }
  })();
  request.signal.removeEventListener("abort", abort);
  if (isRaw) {
    return response;
  }
  return response;
};
function isNotFoundResponse(error) {
  const {
    headers,
    ...rest
  } = error;
  return new Response(JSON.stringify(rest), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
      ...headers || {}
    }
  });
}
function getStartResponseHeaders(opts) {
  const headers = mergeHeaders(
    getResponseHeaders(),
    {
      "Content-Type": "text/html; charset=UTF-8"
    },
    ...opts.router.state.matches.map((match) => {
      return match.headers;
    })
  );
  return headers;
}
function createStartHandler({
  createRouter: createRouter2
}) {
  let routeTreeModule = null;
  let startRoutesManifest = null;
  let processedServerRouteTree = void 0;
  return (cb) => {
    const originalFetch = globalThis.fetch;
    const startRequestResolver = async ({ request }) => {
      globalThis.fetch = async function(input, init) {
        function resolve(url2, requestOptions) {
          const fetchRequest = new Request(url2, requestOptions);
          return startRequestResolver({ request: fetchRequest });
        }
        function getOrigin() {
          return request.headers.get("Origin") || request.headers.get("Referer") || "http://localhost";
        }
        if (typeof input === "string" && input.startsWith("/")) {
          const url2 = new URL(input, getOrigin());
          return resolve(url2, init);
        } else if (typeof input === "object" && "url" in input && typeof input.url === "string" && input.url.startsWith("/")) {
          const url2 = new URL(input.url, getOrigin());
          return resolve(url2, init);
        }
        return originalFetch(input, init);
      };
      const url = new URL(request.url);
      const href = url.href.replace(url.origin, "");
      const APP_BASE = "/";
      const router = createRouter2();
      const history = createMemoryHistory({
        initialEntries: [href]
      });
      router.update({
        history
      });
      const response = await (async () => {
        try {
          if (false) ;
          const serverFnBase = joinPaths([
            APP_BASE,
            trimPath("/_serverFn"),
            "/"
          ]);
          if (href.startsWith(serverFnBase)) {
            return await handleServerAction({ request });
          }
          if (routeTreeModule === null) {
            try {
              routeTreeModule = await loadVirtualModule(
                VIRTUAL_MODULES.routeTree
              );
              if (routeTreeModule.serverRouteTree) {
                processedServerRouteTree = processRouteTree({
                  routeTree: routeTreeModule.serverRouteTree,
                  initRoute: (route, i) => {
                    route.init({
                      originalIndex: i
                    });
                  }
                });
              }
            } catch (e) {
              console.log(e);
            }
          }
          async function executeRouter() {
            const requestAcceptHeader = request.headers.get("Accept") || "*/*";
            const splitRequestAcceptHeader = requestAcceptHeader.split(",");
            const supportedMimeTypes = ["*/*", "text/html"];
            const isRouterAcceptSupported = supportedMimeTypes.some(
              (mimeType) => splitRequestAcceptHeader.some(
                (acceptedMimeType) => acceptedMimeType.trim().startsWith(mimeType)
              )
            );
            if (!isRouterAcceptSupported) {
              return json(
                {
                  error: "Only HTML requests are supported here"
                },
                {
                  status: 500
                }
              );
            }
            if (startRoutesManifest === null) {
              startRoutesManifest = await getStartManifest({
                basePath: APP_BASE
              });
            }
            attachRouterServerSsrUtils(router, startRoutesManifest);
            await router.load();
            if (router.state.redirect) {
              return router.state.redirect;
            }
            dehydrateRouter(router);
            const responseHeaders = getStartResponseHeaders({ router });
            const response2 = await cb({
              request,
              router,
              responseHeaders
            });
            return response2;
          }
          if (processedServerRouteTree) {
            const [_matchedRoutes, response2] = await handleServerRoutes({
              processedServerRouteTree,
              router,
              request,
              basePath: APP_BASE,
              executeRouter
            });
            if (response2) return response2;
          }
          const routerResponse = await executeRouter();
          return routerResponse;
        } catch (err) {
          if (err instanceof Response) {
            return err;
          }
          throw err;
        }
      })();
      if (isRedirect(response)) {
        if (isResolvedRedirect(response)) {
          if (request.headers.get("x-tsr-redirect") === "manual") {
            return json(
              {
                ...response.options,
                isSerializedRedirect: true
              },
              {
                headers: response.headers
              }
            );
          }
          return response;
        }
        if (response.options.to && typeof response.options.to === "string" && !response.options.to.startsWith("/")) {
          throw new Error(
            `Server side redirects must use absolute paths via the 'href' or 'to' options. Received: ${JSON.stringify(response.options)}`
          );
        }
        if (["params", "search", "hash"].some(
          (d) => typeof response.options[d] === "function"
        )) {
          throw new Error(
            `Server side redirects must use static search, params, and hash values and do not support functional values. Received functional values for: ${Object.keys(
              response.options
            ).filter((d) => typeof response.options[d] === "function").map((d) => `"${d}"`).join(", ")}`
          );
        }
        const redirect = router.resolveRedirect(response);
        if (request.headers.get("x-tsr-redirect") === "manual") {
          return json(
            {
              ...response.options,
              isSerializedRedirect: true
            },
            {
              headers: response.headers
            }
          );
        }
        return redirect;
      }
      return response;
    };
    return requestHandler(startRequestResolver);
  };
}
async function handleServerRoutes(opts) {
  var _a, _b;
  const url = new URL(opts.request.url);
  const pathname = url.pathname;
  const serverTreeResult = getMatchedRoutes({
    pathname,
    basepath: opts.basePath,
    caseSensitive: true,
    routesByPath: opts.processedServerRouteTree.routesByPath,
    routesById: opts.processedServerRouteTree.routesById,
    flatRoutes: opts.processedServerRouteTree.flatRoutes
  });
  const routeTreeResult = opts.router.getMatchedRoutes(pathname, void 0);
  let response;
  let matchedRoutes = [];
  matchedRoutes = serverTreeResult.matchedRoutes;
  if (routeTreeResult.foundRoute) {
    if (serverTreeResult.matchedRoutes.length < routeTreeResult.matchedRoutes.length) {
      const closestCommon = [...routeTreeResult.matchedRoutes].reverse().find((r) => {
        return opts.processedServerRouteTree.routesById[r.id] !== void 0;
      });
      if (closestCommon) {
        let routeId = closestCommon.id;
        matchedRoutes = [];
        do {
          const route = opts.processedServerRouteTree.routesById[routeId];
          if (!route) {
            break;
          }
          matchedRoutes.push(route);
          routeId = (_a = route.parentRoute) == null ? void 0 : _a.id;
        } while (routeId);
        matchedRoutes.reverse();
      }
    }
  }
  if (matchedRoutes.length) {
    const middlewares = flattenMiddlewares(
      matchedRoutes.flatMap((r) => r.options.middleware).filter(Boolean)
    ).map((d) => d.options.server);
    if ((_b = serverTreeResult.foundRoute) == null ? void 0 : _b.options.methods) {
      const method = Object.keys(
        serverTreeResult.foundRoute.options.methods
      ).find(
        (method2) => method2.toLowerCase() === opts.request.method.toLowerCase()
      );
      if (method) {
        const handler = serverTreeResult.foundRoute.options.methods[method];
        if (handler) {
          if (typeof handler === "function") {
            middlewares.push(handlerToMiddleware(handler));
          } else {
            if (handler._options.middlewares && handler._options.middlewares.length) {
              middlewares.push(
                ...flattenMiddlewares(handler._options.middlewares).map(
                  (d) => d.options.server
                )
              );
            }
            if (handler._options.handler) {
              middlewares.push(handlerToMiddleware(handler._options.handler));
            }
          }
        }
      }
    }
    middlewares.push(handlerToMiddleware(opts.executeRouter));
    const ctx = await executeMiddleware(middlewares, {
      request: opts.request,
      context: {},
      params: serverTreeResult.routeParams,
      pathname
    });
    response = ctx.response;
  }
  return [matchedRoutes, response];
}
function handlerToMiddleware(handler) {
  return async ({ next: _next, ...rest }) => {
    const response = await handler(rest);
    if (response) {
      return { response };
    }
    return _next(rest);
  };
}
function executeMiddleware(middlewares, ctx) {
  let index = -1;
  const next = async (ctx2) => {
    index++;
    const middleware = middlewares[index];
    if (!middleware) return ctx2;
    const result = await middleware({
      ...ctx2,
      // Allow the middleware to call the next middleware in the chain
      next: async (nextCtx) => {
        const nextResult = await next({ ...ctx2, ...nextCtx });
        return Object.assign(ctx2, handleCtxResult(nextResult));
      }
      // Allow the middleware result to extend the return context
    }).catch((err) => {
      if (isSpecialResponse(err)) {
        return {
          response: err
        };
      }
      throw err;
    });
    return Object.assign(ctx2, handleCtxResult(result));
  };
  return handleCtxResult(next(ctx));
}
function handleCtxResult(result) {
  if (isSpecialResponse(result)) {
    return {
      response: result
    };
  }
  return result;
}
function isSpecialResponse(err) {
  return isResponse(err) || isRedirect(err);
}
function isResponse(response) {
  return response instanceof Response;
}
function ThemeProvider(t0) {
  const $ = c(6);
  let children;
  let props;
  if ($[0] !== t0) {
    ({
      children,
      ...props
    } = t0);
    $[0] = t0;
    $[1] = children;
    $[2] = props;
  } else {
    children = $[1];
    props = $[2];
  }
  let t1;
  if ($[3] !== children || $[4] !== props) {
    t1 = /* @__PURE__ */ jsx(ThemeProvider$1, { ...props, children });
    $[3] = children;
    $[4] = props;
    $[5] = t1;
  } else {
    t1 = $[5];
  }
  return t1;
}
const MOBILE_BREAKPOINT = 768;
function useIsMobile() {
  const $ = c(2);
  const [isMobile, setIsMobile] = React.useState(void 0);
  let t0;
  let t1;
  if ($[0] === Symbol.for("react.memo_cache_sentinel")) {
    t0 = () => {
      const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
      const onChange = () => {
        setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
      };
      mql.addEventListener("change", onChange);
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
      return () => mql.removeEventListener("change", onChange);
    };
    t1 = [];
    $[0] = t0;
    $[1] = t1;
  } else {
    t0 = $[0];
    t1 = $[1];
  }
  React.useEffect(t0, t1);
  return !!isMobile;
}
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", {
  variants: {
    variant: {
      default: "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
      destructive: "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
      outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
      secondary: "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
      ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
      link: "text-primary underline-offset-4 hover:underline"
    },
    size: {
      default: "h-9 px-4 py-2 has-[>svg]:px-3",
      sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
      lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
      icon: "size-9"
    }
  },
  defaultVariants: {
    variant: "default",
    size: "default"
  }
});
function Button(t0) {
  const $ = c(14);
  let className;
  let props;
  let size;
  let t1;
  let variant;
  if ($[0] !== t0) {
    ({
      className,
      variant,
      size,
      asChild: t1,
      ...props
    } = t0);
    $[0] = t0;
    $[1] = className;
    $[2] = props;
    $[3] = size;
    $[4] = t1;
    $[5] = variant;
  } else {
    className = $[1];
    props = $[2];
    size = $[3];
    t1 = $[4];
    variant = $[5];
  }
  const asChild = t1 === void 0 ? false : t1;
  const Comp = asChild ? Slot : "button";
  let t2;
  if ($[6] !== className || $[7] !== size || $[8] !== variant) {
    t2 = cn(buttonVariants({
      variant,
      size,
      className
    }));
    $[6] = className;
    $[7] = size;
    $[8] = variant;
    $[9] = t2;
  } else {
    t2 = $[9];
  }
  let t3;
  if ($[10] !== Comp || $[11] !== props || $[12] !== t2) {
    t3 = /* @__PURE__ */ jsx(Comp, { "data-slot": "button", className: t2, ...props });
    $[10] = Comp;
    $[11] = props;
    $[12] = t2;
    $[13] = t3;
  } else {
    t3 = $[13];
  }
  return t3;
}
function Sheet(t0) {
  const $ = c(4);
  let props;
  if ($[0] !== t0) {
    ({
      ...props
    } = t0);
    $[0] = t0;
    $[1] = props;
  } else {
    props = $[1];
  }
  let t1;
  if ($[2] !== props) {
    t1 = /* @__PURE__ */ jsx(SheetPrimitive.Root, { "data-slot": "sheet", ...props });
    $[2] = props;
    $[3] = t1;
  } else {
    t1 = $[3];
  }
  return t1;
}
function SheetPortal(t0) {
  const $ = c(4);
  let props;
  if ($[0] !== t0) {
    ({
      ...props
    } = t0);
    $[0] = t0;
    $[1] = props;
  } else {
    props = $[1];
  }
  let t1;
  if ($[2] !== props) {
    t1 = /* @__PURE__ */ jsx(SheetPrimitive.Portal, { "data-slot": "sheet-portal", ...props });
    $[2] = props;
    $[3] = t1;
  } else {
    t1 = $[3];
  }
  return t1;
}
function SheetOverlay(t0) {
  const $ = c(8);
  let className;
  let props;
  if ($[0] !== t0) {
    ({
      className,
      ...props
    } = t0);
    $[0] = t0;
    $[1] = className;
    $[2] = props;
  } else {
    className = $[1];
    props = $[2];
  }
  let t1;
  if ($[3] !== className) {
    t1 = cn("data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50", className);
    $[3] = className;
    $[4] = t1;
  } else {
    t1 = $[4];
  }
  let t2;
  if ($[5] !== props || $[6] !== t1) {
    t2 = /* @__PURE__ */ jsx(SheetPrimitive.Overlay, { "data-slot": "sheet-overlay", className: t1, ...props });
    $[5] = props;
    $[6] = t1;
    $[7] = t2;
  } else {
    t2 = $[7];
  }
  return t2;
}
function SheetContent(t0) {
  const $ = c(17);
  let children;
  let className;
  let props;
  let t1;
  if ($[0] !== t0) {
    ({
      className,
      children,
      side: t1,
      ...props
    } = t0);
    $[0] = t0;
    $[1] = children;
    $[2] = className;
    $[3] = props;
    $[4] = t1;
  } else {
    children = $[1];
    className = $[2];
    props = $[3];
    t1 = $[4];
  }
  const side = t1 === void 0 ? "right" : t1;
  let t2;
  if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
    t2 = /* @__PURE__ */ jsx(SheetOverlay, {});
    $[5] = t2;
  } else {
    t2 = $[5];
  }
  const t3 = side === "right" && "data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm";
  const t4 = side === "left" && "data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm";
  const t5 = side === "top" && "data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top inset-x-0 top-0 h-auto border-b";
  const t6 = side === "bottom" && "data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom inset-x-0 bottom-0 h-auto border-t";
  let t7;
  if ($[6] !== className || $[7] !== t3 || $[8] !== t4 || $[9] !== t5 || $[10] !== t6) {
    t7 = cn("bg-background data-[state=open]:animate-in data-[state=closed]:animate-out fixed z-50 flex flex-col gap-4 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500", t3, t4, t5, t6, className);
    $[6] = className;
    $[7] = t3;
    $[8] = t4;
    $[9] = t5;
    $[10] = t6;
    $[11] = t7;
  } else {
    t7 = $[11];
  }
  let t8;
  if ($[12] === Symbol.for("react.memo_cache_sentinel")) {
    t8 = /* @__PURE__ */ jsxs(SheetPrimitive.Close, { className: "ring-offset-background focus:ring-ring data-[state=open]:bg-secondary absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none", children: [
      /* @__PURE__ */ jsx(XIcon, { className: "size-4" }),
      /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Close" })
    ] });
    $[12] = t8;
  } else {
    t8 = $[12];
  }
  let t9;
  if ($[13] !== children || $[14] !== props || $[15] !== t7) {
    t9 = /* @__PURE__ */ jsxs(SheetPortal, { children: [
      t2,
      /* @__PURE__ */ jsxs(SheetPrimitive.Content, { "data-slot": "sheet-content", className: t7, ...props, children: [
        children,
        t8
      ] })
    ] });
    $[13] = children;
    $[14] = props;
    $[15] = t7;
    $[16] = t9;
  } else {
    t9 = $[16];
  }
  return t9;
}
function SheetHeader(t0) {
  const $ = c(8);
  let className;
  let props;
  if ($[0] !== t0) {
    ({
      className,
      ...props
    } = t0);
    $[0] = t0;
    $[1] = className;
    $[2] = props;
  } else {
    className = $[1];
    props = $[2];
  }
  let t1;
  if ($[3] !== className) {
    t1 = cn("flex flex-col gap-1.5 p-4", className);
    $[3] = className;
    $[4] = t1;
  } else {
    t1 = $[4];
  }
  let t2;
  if ($[5] !== props || $[6] !== t1) {
    t2 = /* @__PURE__ */ jsx("div", { "data-slot": "sheet-header", className: t1, ...props });
    $[5] = props;
    $[6] = t1;
    $[7] = t2;
  } else {
    t2 = $[7];
  }
  return t2;
}
function SheetTitle(t0) {
  const $ = c(8);
  let className;
  let props;
  if ($[0] !== t0) {
    ({
      className,
      ...props
    } = t0);
    $[0] = t0;
    $[1] = className;
    $[2] = props;
  } else {
    className = $[1];
    props = $[2];
  }
  let t1;
  if ($[3] !== className) {
    t1 = cn("text-foreground font-semibold", className);
    $[3] = className;
    $[4] = t1;
  } else {
    t1 = $[4];
  }
  let t2;
  if ($[5] !== props || $[6] !== t1) {
    t2 = /* @__PURE__ */ jsx(SheetPrimitive.Title, { "data-slot": "sheet-title", className: t1, ...props });
    $[5] = props;
    $[6] = t1;
    $[7] = t2;
  } else {
    t2 = $[7];
  }
  return t2;
}
function SheetDescription(t0) {
  const $ = c(8);
  let className;
  let props;
  if ($[0] !== t0) {
    ({
      className,
      ...props
    } = t0);
    $[0] = t0;
    $[1] = className;
    $[2] = props;
  } else {
    className = $[1];
    props = $[2];
  }
  let t1;
  if ($[3] !== className) {
    t1 = cn("text-muted-foreground text-sm", className);
    $[3] = className;
    $[4] = t1;
  } else {
    t1 = $[4];
  }
  let t2;
  if ($[5] !== props || $[6] !== t1) {
    t2 = /* @__PURE__ */ jsx(SheetPrimitive.Description, { "data-slot": "sheet-description", className: t1, ...props });
    $[5] = props;
    $[6] = t1;
    $[7] = t2;
  } else {
    t2 = $[7];
  }
  return t2;
}
function TooltipProvider(t0) {
  const $ = c(6);
  let props;
  let t1;
  if ($[0] !== t0) {
    ({
      delayDuration: t1,
      ...props
    } = t0);
    $[0] = t0;
    $[1] = props;
    $[2] = t1;
  } else {
    props = $[1];
    t1 = $[2];
  }
  const delayDuration = t1 === void 0 ? 0 : t1;
  let t2;
  if ($[3] !== delayDuration || $[4] !== props) {
    t2 = /* @__PURE__ */ jsx(TooltipPrimitive.Provider, { "data-slot": "tooltip-provider", delayDuration, ...props });
    $[3] = delayDuration;
    $[4] = props;
    $[5] = t2;
  } else {
    t2 = $[5];
  }
  return t2;
}
function Tooltip(t0) {
  const $ = c(4);
  let props;
  if ($[0] !== t0) {
    ({
      ...props
    } = t0);
    $[0] = t0;
    $[1] = props;
  } else {
    props = $[1];
  }
  let t1;
  if ($[2] !== props) {
    t1 = /* @__PURE__ */ jsx(TooltipProvider, { children: /* @__PURE__ */ jsx(TooltipPrimitive.Root, { "data-slot": "tooltip", ...props }) });
    $[2] = props;
    $[3] = t1;
  } else {
    t1 = $[3];
  }
  return t1;
}
function TooltipTrigger(t0) {
  const $ = c(4);
  let props;
  if ($[0] !== t0) {
    ({
      ...props
    } = t0);
    $[0] = t0;
    $[1] = props;
  } else {
    props = $[1];
  }
  let t1;
  if ($[2] !== props) {
    t1 = /* @__PURE__ */ jsx(TooltipPrimitive.Trigger, { "data-slot": "tooltip-trigger", ...props });
    $[2] = props;
    $[3] = t1;
  } else {
    t1 = $[3];
  }
  return t1;
}
function TooltipContent(t0) {
  const $ = c(13);
  let children;
  let className;
  let props;
  let t1;
  if ($[0] !== t0) {
    ({
      className,
      sideOffset: t1,
      children,
      ...props
    } = t0);
    $[0] = t0;
    $[1] = children;
    $[2] = className;
    $[3] = props;
    $[4] = t1;
  } else {
    children = $[1];
    className = $[2];
    props = $[3];
    t1 = $[4];
  }
  const sideOffset = t1 === void 0 ? 0 : t1;
  let t2;
  if ($[5] !== className) {
    t2 = cn("bg-foreground text-primary-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-fit origin-(--radix-tooltip-content-transform-origin) rounded-md px-3 py-1.5 text-xs text-balance", className);
    $[5] = className;
    $[6] = t2;
  } else {
    t2 = $[6];
  }
  let t3;
  if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
    t3 = /* @__PURE__ */ jsx(TooltipPrimitive.Arrow, { className: "bg-foreground fill-foreground z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px]" });
    $[7] = t3;
  } else {
    t3 = $[7];
  }
  let t4;
  if ($[8] !== children || $[9] !== props || $[10] !== sideOffset || $[11] !== t2) {
    t4 = /* @__PURE__ */ jsx(TooltipPrimitive.Portal, { children: /* @__PURE__ */ jsxs(TooltipPrimitive.Content, { "data-slot": "tooltip-content", sideOffset, className: t2, ...props, children: [
      children,
      t3
    ] }) });
    $[8] = children;
    $[9] = props;
    $[10] = sideOffset;
    $[11] = t2;
    $[12] = t4;
  } else {
    t4 = $[12];
  }
  return t4;
}
const SIDEBAR_COOKIE_NAME = "sidebar_state";
const SIDEBAR_COOKIE_MAX_AGE = 60 * 60 * 24 * 7;
const SIDEBAR_WIDTH = "16rem";
const SIDEBAR_WIDTH_MOBILE = "18rem";
const SIDEBAR_WIDTH_ICON = "3rem";
const SIDEBAR_KEYBOARD_SHORTCUT = "b";
const SidebarContext = React.createContext(null);
function useSidebar() {
  const context = React.useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider.");
  }
  return context;
}
function SidebarProvider({
  defaultOpen = true,
  open: openProp,
  onOpenChange: setOpenProp,
  className,
  style,
  children,
  ...props
}) {
  const isMobile = useIsMobile();
  const [openMobile, setOpenMobile] = React.useState(false);
  const [_open, _setOpen] = React.useState(defaultOpen);
  const open = openProp ?? _open;
  const setOpen = React.useCallback((value) => {
    const openState = typeof value === "function" ? value(open) : value;
    if (setOpenProp) {
      setOpenProp(openState);
    } else {
      _setOpen(openState);
    }
    document.cookie = `${SIDEBAR_COOKIE_NAME}=${openState}; path=/; max-age=${SIDEBAR_COOKIE_MAX_AGE}`;
  }, [setOpenProp, open]);
  const toggleSidebar = React.useCallback(() => {
    return isMobile ? setOpenMobile((open_0) => !open_0) : setOpen((open_1) => !open_1);
  }, [isMobile, setOpen, setOpenMobile]);
  React.useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === SIDEBAR_KEYBOARD_SHORTCUT && (event.metaKey || event.ctrlKey)) {
        event.preventDefault();
        toggleSidebar();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [toggleSidebar]);
  const state = open ? "expanded" : "collapsed";
  const contextValue = React.useMemo(() => ({
    state,
    open,
    setOpen,
    isMobile,
    openMobile,
    setOpenMobile,
    toggleSidebar
  }), [state, open, setOpen, isMobile, openMobile, setOpenMobile, toggleSidebar]);
  return /* @__PURE__ */ jsx(SidebarContext.Provider, { value: contextValue, children: /* @__PURE__ */ jsx(TooltipProvider, { delayDuration: 0, children: /* @__PURE__ */ jsx("div", { "data-slot": "sidebar-wrapper", style: {
    "--sidebar-width": SIDEBAR_WIDTH,
    "--sidebar-width-icon": SIDEBAR_WIDTH_ICON,
    ...style
  }, className: cn("group/sidebar-wrapper has-data-[variant=inset]:bg-sidebar flex min-h-svh w-full", className), ...props, children }) }) });
}
function Sidebar(t0) {
  const $ = c(46);
  let children;
  let className;
  let props;
  let t1;
  let t2;
  let t3;
  if ($[0] !== t0) {
    ({
      side: t1,
      variant: t2,
      collapsible: t3,
      className,
      children,
      ...props
    } = t0);
    $[0] = t0;
    $[1] = children;
    $[2] = className;
    $[3] = props;
    $[4] = t1;
    $[5] = t2;
    $[6] = t3;
  } else {
    children = $[1];
    className = $[2];
    props = $[3];
    t1 = $[4];
    t2 = $[5];
    t3 = $[6];
  }
  const side = t1 === void 0 ? "left" : t1;
  const variant = t2 === void 0 ? "sidebar" : t2;
  const collapsible = t3 === void 0 ? "offcanvas" : t3;
  const {
    isMobile,
    state,
    openMobile,
    setOpenMobile
  } = useSidebar();
  if (collapsible === "none") {
    let t42;
    if ($[7] !== className) {
      t42 = cn("bg-sidebar text-sidebar-foreground flex h-full w-(--sidebar-width) flex-col", className);
      $[7] = className;
      $[8] = t42;
    } else {
      t42 = $[8];
    }
    let t52;
    if ($[9] !== children || $[10] !== props || $[11] !== t42) {
      t52 = /* @__PURE__ */ jsx("div", { "data-slot": "sidebar", className: t42, ...props, children });
      $[9] = children;
      $[10] = props;
      $[11] = t42;
      $[12] = t52;
    } else {
      t52 = $[12];
    }
    return t52;
  }
  if (isMobile) {
    let t42;
    if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
      t42 = {
        "--sidebar-width": SIDEBAR_WIDTH_MOBILE
      };
      $[13] = t42;
    } else {
      t42 = $[13];
    }
    let t52;
    if ($[14] === Symbol.for("react.memo_cache_sentinel")) {
      t52 = /* @__PURE__ */ jsxs(SheetHeader, { className: "sr-only", children: [
        /* @__PURE__ */ jsx(SheetTitle, { children: "Sidebar" }),
        /* @__PURE__ */ jsx(SheetDescription, { children: "Displays the mobile sidebar." })
      ] });
      $[14] = t52;
    } else {
      t52 = $[14];
    }
    let t62;
    if ($[15] !== children) {
      t62 = /* @__PURE__ */ jsx("div", { className: "flex h-full w-full flex-col", children });
      $[15] = children;
      $[16] = t62;
    } else {
      t62 = $[16];
    }
    let t72;
    if ($[17] !== side || $[18] !== t62) {
      t72 = /* @__PURE__ */ jsxs(SheetContent, { "data-sidebar": "sidebar", "data-slot": "sidebar", "data-mobile": "true", className: "bg-sidebar text-sidebar-foreground w-(--sidebar-width) p-0 [&>button]:hidden", style: t42, side, children: [
        t52,
        t62
      ] });
      $[17] = side;
      $[18] = t62;
      $[19] = t72;
    } else {
      t72 = $[19];
    }
    let t82;
    if ($[20] !== openMobile || $[21] !== props || $[22] !== setOpenMobile || $[23] !== t72) {
      t82 = /* @__PURE__ */ jsx(Sheet, { open: openMobile, onOpenChange: setOpenMobile, ...props, children: t72 });
      $[20] = openMobile;
      $[21] = props;
      $[22] = setOpenMobile;
      $[23] = t72;
      $[24] = t82;
    } else {
      t82 = $[24];
    }
    return t82;
  }
  const t4 = state === "collapsed" ? collapsible : "";
  const t5 = variant === "floating" || variant === "inset" ? "group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4)))]" : "group-data-[collapsible=icon]:w-(--sidebar-width-icon)";
  let t6;
  if ($[25] !== t5) {
    t6 = cn("relative w-(--sidebar-width) bg-transparent transition-[width] duration-200 ease-linear", "group-data-[collapsible=offcanvas]:w-0", "group-data-[side=right]:rotate-180", t5);
    $[25] = t5;
    $[26] = t6;
  } else {
    t6 = $[26];
  }
  let t7;
  if ($[27] !== t6) {
    t7 = /* @__PURE__ */ jsx("div", { "data-slot": "sidebar-gap", className: t6 });
    $[27] = t6;
    $[28] = t7;
  } else {
    t7 = $[28];
  }
  const t8 = side === "left" ? "left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]" : "right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]";
  const t9 = variant === "floating" || variant === "inset" ? "p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4))+2px)]" : "group-data-[collapsible=icon]:w-(--sidebar-width-icon) group-data-[side=left]:border-r group-data-[side=right]:border-l";
  let t10;
  if ($[29] !== className || $[30] !== t8 || $[31] !== t9) {
    t10 = cn("fixed inset-y-0 z-10 hidden h-svh w-(--sidebar-width) transition-[left,right,width] duration-200 ease-linear md:flex", t8, t9, className);
    $[29] = className;
    $[30] = t8;
    $[31] = t9;
    $[32] = t10;
  } else {
    t10 = $[32];
  }
  let t11;
  if ($[33] !== children) {
    t11 = /* @__PURE__ */ jsx("div", { "data-sidebar": "sidebar", "data-slot": "sidebar-inner", className: "bg-sidebar group-data-[variant=floating]:border-sidebar-border flex h-full w-full flex-col group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:shadow-sm", children });
    $[33] = children;
    $[34] = t11;
  } else {
    t11 = $[34];
  }
  let t12;
  if ($[35] !== props || $[36] !== t10 || $[37] !== t11) {
    t12 = /* @__PURE__ */ jsx("div", { "data-slot": "sidebar-container", className: t10, ...props, children: t11 });
    $[35] = props;
    $[36] = t10;
    $[37] = t11;
    $[38] = t12;
  } else {
    t12 = $[38];
  }
  let t13;
  if ($[39] !== side || $[40] !== state || $[41] !== t12 || $[42] !== t4 || $[43] !== t7 || $[44] !== variant) {
    t13 = /* @__PURE__ */ jsxs("div", { className: "group peer text-sidebar-foreground hidden md:block", "data-state": state, "data-collapsible": t4, "data-variant": variant, "data-side": side, "data-slot": "sidebar", children: [
      t7,
      t12
    ] });
    $[39] = side;
    $[40] = state;
    $[41] = t12;
    $[42] = t4;
    $[43] = t7;
    $[44] = variant;
    $[45] = t13;
  } else {
    t13 = $[45];
  }
  return t13;
}
function SidebarTrigger(t0) {
  const $ = c(15);
  let className;
  let onClick;
  let props;
  if ($[0] !== t0) {
    ({
      className,
      onClick,
      ...props
    } = t0);
    $[0] = t0;
    $[1] = className;
    $[2] = onClick;
    $[3] = props;
  } else {
    className = $[1];
    onClick = $[2];
    props = $[3];
  }
  const {
    toggleSidebar
  } = useSidebar();
  let t1;
  if ($[4] !== className) {
    t1 = cn("size-7", className);
    $[4] = className;
    $[5] = t1;
  } else {
    t1 = $[5];
  }
  let t2;
  if ($[6] !== onClick || $[7] !== toggleSidebar) {
    t2 = (event) => {
      onClick?.(event);
      toggleSidebar();
    };
    $[6] = onClick;
    $[7] = toggleSidebar;
    $[8] = t2;
  } else {
    t2 = $[8];
  }
  let t3;
  let t4;
  if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
    t3 = /* @__PURE__ */ jsx(PanelLeftIcon, {});
    t4 = /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Toggle Sidebar" });
    $[9] = t3;
    $[10] = t4;
  } else {
    t3 = $[9];
    t4 = $[10];
  }
  let t5;
  if ($[11] !== props || $[12] !== t1 || $[13] !== t2) {
    t5 = /* @__PURE__ */ jsxs(Button, { "data-sidebar": "trigger", "data-slot": "sidebar-trigger", variant: "ghost", size: "icon", className: t1, onClick: t2, ...props, children: [
      t3,
      t4
    ] });
    $[11] = props;
    $[12] = t1;
    $[13] = t2;
    $[14] = t5;
  } else {
    t5 = $[14];
  }
  return t5;
}
function SidebarInset(t0) {
  const $ = c(8);
  let className;
  let props;
  if ($[0] !== t0) {
    ({
      className,
      ...props
    } = t0);
    $[0] = t0;
    $[1] = className;
    $[2] = props;
  } else {
    className = $[1];
    props = $[2];
  }
  let t1;
  if ($[3] !== className) {
    t1 = cn("bg-background relative flex w-full flex-1 flex-col", "md:peer-data-[variant=inset]:m-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow-sm md:peer-data-[variant=inset]:peer-data-[state=collapsed]:ml-2", className);
    $[3] = className;
    $[4] = t1;
  } else {
    t1 = $[4];
  }
  let t2;
  if ($[5] !== props || $[6] !== t1) {
    t2 = /* @__PURE__ */ jsx("div", { "data-slot": "sidebar-inset", className: t1, ...props });
    $[5] = props;
    $[6] = t1;
    $[7] = t2;
  } else {
    t2 = $[7];
  }
  return t2;
}
function SidebarHeader(t0) {
  const $ = c(8);
  let className;
  let props;
  if ($[0] !== t0) {
    ({
      className,
      ...props
    } = t0);
    $[0] = t0;
    $[1] = className;
    $[2] = props;
  } else {
    className = $[1];
    props = $[2];
  }
  let t1;
  if ($[3] !== className) {
    t1 = cn("flex flex-col gap-2 p-2", className);
    $[3] = className;
    $[4] = t1;
  } else {
    t1 = $[4];
  }
  let t2;
  if ($[5] !== props || $[6] !== t1) {
    t2 = /* @__PURE__ */ jsx("div", { "data-slot": "sidebar-header", "data-sidebar": "header", className: t1, ...props });
    $[5] = props;
    $[6] = t1;
    $[7] = t2;
  } else {
    t2 = $[7];
  }
  return t2;
}
function SidebarContent(t0) {
  const $ = c(8);
  let className;
  let props;
  if ($[0] !== t0) {
    ({
      className,
      ...props
    } = t0);
    $[0] = t0;
    $[1] = className;
    $[2] = props;
  } else {
    className = $[1];
    props = $[2];
  }
  let t1;
  if ($[3] !== className) {
    t1 = cn("flex min-h-0 flex-1 flex-col gap-2 overflow-y-auto overflow-x-hidden", className);
    $[3] = className;
    $[4] = t1;
  } else {
    t1 = $[4];
  }
  let t2;
  if ($[5] !== props || $[6] !== t1) {
    t2 = /* @__PURE__ */ jsx("div", { id: "tailwind-sux", "data-slot": "sidebar-content", "data-sidebar": "content", className: t1, ...props });
    $[5] = props;
    $[6] = t1;
    $[7] = t2;
  } else {
    t2 = $[7];
  }
  return t2;
}
function SidebarGroup(t0) {
  const $ = c(8);
  let className;
  let props;
  if ($[0] !== t0) {
    ({
      className,
      ...props
    } = t0);
    $[0] = t0;
    $[1] = className;
    $[2] = props;
  } else {
    className = $[1];
    props = $[2];
  }
  let t1;
  if ($[3] !== className) {
    t1 = cn("relative flex w-full min-w-0 flex-col p-2", className);
    $[3] = className;
    $[4] = t1;
  } else {
    t1 = $[4];
  }
  let t2;
  if ($[5] !== props || $[6] !== t1) {
    t2 = /* @__PURE__ */ jsx("div", { "data-slot": "sidebar-group", "data-sidebar": "group", className: t1, ...props });
    $[5] = props;
    $[6] = t1;
    $[7] = t2;
  } else {
    t2 = $[7];
  }
  return t2;
}
function SidebarGroupLabel(t0) {
  const $ = c(10);
  let className;
  let props;
  let t1;
  if ($[0] !== t0) {
    ({
      className,
      asChild: t1,
      ...props
    } = t0);
    $[0] = t0;
    $[1] = className;
    $[2] = props;
    $[3] = t1;
  } else {
    className = $[1];
    props = $[2];
    t1 = $[3];
  }
  const asChild = t1 === void 0 ? false : t1;
  const Comp = asChild ? Slot : "div";
  let t2;
  if ($[4] !== className) {
    t2 = cn("text-sidebar-foreground/70 ring-sidebar-ring flex h-8 shrink-0 items-center rounded-xs px-2 text-xs font-medium outline-hidden transition-[margin,opacity] duration-200 ease-linear focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0", "group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0", className);
    $[4] = className;
    $[5] = t2;
  } else {
    t2 = $[5];
  }
  let t3;
  if ($[6] !== Comp || $[7] !== props || $[8] !== t2) {
    t3 = /* @__PURE__ */ jsx(Comp, { "data-slot": "sidebar-group-label", "data-sidebar": "group-label", className: t2, ...props });
    $[6] = Comp;
    $[7] = props;
    $[8] = t2;
    $[9] = t3;
  } else {
    t3 = $[9];
  }
  return t3;
}
function SidebarMenu(t0) {
  const $ = c(8);
  let className;
  let props;
  if ($[0] !== t0) {
    ({
      className,
      ...props
    } = t0);
    $[0] = t0;
    $[1] = className;
    $[2] = props;
  } else {
    className = $[1];
    props = $[2];
  }
  let t1;
  if ($[3] !== className) {
    t1 = cn("flex w-full min-w-0 flex-col gap-1", className);
    $[3] = className;
    $[4] = t1;
  } else {
    t1 = $[4];
  }
  let t2;
  if ($[5] !== props || $[6] !== t1) {
    t2 = /* @__PURE__ */ jsx("ul", { "data-slot": "sidebar-menu", "data-sidebar": "menu", className: t1, ...props });
    $[5] = props;
    $[6] = t1;
    $[7] = t2;
  } else {
    t2 = $[7];
  }
  return t2;
}
function SidebarMenuItem(t0) {
  const $ = c(8);
  let className;
  let props;
  if ($[0] !== t0) {
    ({
      className,
      ...props
    } = t0);
    $[0] = t0;
    $[1] = className;
    $[2] = props;
  } else {
    className = $[1];
    props = $[2];
  }
  let t1;
  if ($[3] !== className) {
    t1 = cn("group/menu-item relative", className);
    $[3] = className;
    $[4] = t1;
  } else {
    t1 = $[4];
  }
  let t2;
  if ($[5] !== props || $[6] !== t1) {
    t2 = /* @__PURE__ */ jsx("li", { "data-slot": "sidebar-menu-item", "data-sidebar": "menu-item", className: t1, ...props });
    $[5] = props;
    $[6] = t1;
    $[7] = t2;
  } else {
    t2 = $[7];
  }
  return t2;
}
const sidebarMenuButtonVariants = cva("peer/menu-button flex w-full items-center gap-2 overflow-hidden rounded-xs p-2 text-left text-sm outline-hidden ring-sidebar-ring transition-[width,height,padding] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 group-has-data-[sidebar=menu-action]/menu-item:pr-8 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[active=true]:bg-sidebar-accent data-[active=true]:font-semibold data-[active=true]:text-sidebar-primary group-data-[collapsible=icon]:size-8! group-data-[collapsible=icon]:p-2! [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0", {
  variants: {
    variant: {
      default: "hover:text-sidebar-accent-foreground",
      outline: "bg-background shadow-[0_0_0_1px_hsl(var(--sidebar-border))] hover:text-sidebar-accent-foreground hover:shadow-[0_0_0_1px_hsl(var(--sidebar-accent))]"
    },
    size: {
      default: "h-8 text-sm",
      sm: "h-7 text-xs",
      lg: "h-12 text-sm group-data-[collapsible=icon]:p-0!"
    }
  },
  defaultVariants: {
    variant: "default",
    size: "default"
  }
});
function SidebarMenuButton(t0) {
  const $ = c(28);
  let className;
  let props;
  let t1;
  let t2;
  let t3;
  let t4;
  let tooltip;
  if ($[0] !== t0) {
    ({
      asChild: t1,
      isActive: t2,
      variant: t3,
      size: t4,
      tooltip,
      className,
      ...props
    } = t0);
    $[0] = t0;
    $[1] = className;
    $[2] = props;
    $[3] = t1;
    $[4] = t2;
    $[5] = t3;
    $[6] = t4;
    $[7] = tooltip;
  } else {
    className = $[1];
    props = $[2];
    t1 = $[3];
    t2 = $[4];
    t3 = $[5];
    t4 = $[6];
    tooltip = $[7];
  }
  const asChild = t1 === void 0 ? false : t1;
  const isActive = t2 === void 0 ? false : t2;
  const variant = t3 === void 0 ? "default" : t3;
  const size = t4 === void 0 ? "default" : t4;
  const Comp = asChild ? Slot : "button";
  const {
    isMobile,
    state
  } = useSidebar();
  let t5;
  if ($[8] !== className || $[9] !== size || $[10] !== variant) {
    t5 = cn(sidebarMenuButtonVariants({
      variant,
      size
    }), className);
    $[8] = className;
    $[9] = size;
    $[10] = variant;
    $[11] = t5;
  } else {
    t5 = $[11];
  }
  let t6;
  if ($[12] !== Comp || $[13] !== isActive || $[14] !== props || $[15] !== size || $[16] !== t5) {
    t6 = /* @__PURE__ */ jsx(Comp, { "data-slot": "sidebar-menu-button", "data-sidebar": "menu-button", "data-size": size, "data-active": isActive, className: t5, ...props });
    $[12] = Comp;
    $[13] = isActive;
    $[14] = props;
    $[15] = size;
    $[16] = t5;
    $[17] = t6;
  } else {
    t6 = $[17];
  }
  const button = t6;
  if (!tooltip) {
    return button;
  }
  if (typeof tooltip === "string") {
    let t72;
    if ($[18] !== tooltip) {
      t72 = {
        children: tooltip
      };
      $[18] = tooltip;
      $[19] = t72;
    } else {
      t72 = $[19];
    }
    tooltip = t72;
  }
  let t7;
  if ($[20] !== button) {
    t7 = /* @__PURE__ */ jsx(TooltipTrigger, { asChild: true, children: button });
    $[20] = button;
    $[21] = t7;
  } else {
    t7 = $[21];
  }
  const t8 = state !== "collapsed" || isMobile;
  let t9;
  if ($[22] !== t8 || $[23] !== tooltip) {
    t9 = /* @__PURE__ */ jsx(TooltipContent, { side: "right", align: "center", hidden: t8, ...tooltip });
    $[22] = t8;
    $[23] = tooltip;
    $[24] = t9;
  } else {
    t9 = $[24];
  }
  let t10;
  if ($[25] !== t7 || $[26] !== t9) {
    t10 = /* @__PURE__ */ jsxs(Tooltip, { children: [
      t7,
      t9
    ] });
    $[25] = t7;
    $[26] = t9;
    $[27] = t10;
  } else {
    t10 = $[27];
  }
  return t10;
}
function SidebarMenuSub(t0) {
  const $ = c(8);
  let className;
  let props;
  if ($[0] !== t0) {
    ({
      className,
      ...props
    } = t0);
    $[0] = t0;
    $[1] = className;
    $[2] = props;
  } else {
    className = $[1];
    props = $[2];
  }
  let t1;
  if ($[3] !== className) {
    t1 = cn("border-sidebar-border mx-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-l px-2.5 py-0.5", "group-data-[collapsible=icon]:hidden", className);
    $[3] = className;
    $[4] = t1;
  } else {
    t1 = $[4];
  }
  let t2;
  if ($[5] !== props || $[6] !== t1) {
    t2 = /* @__PURE__ */ jsx("ul", { "data-slot": "sidebar-menu-sub", "data-sidebar": "menu-sub", className: t1, ...props });
    $[5] = props;
    $[6] = t1;
    $[7] = t2;
  } else {
    t2 = $[7];
  }
  return t2;
}
function SidebarMenuSubItem(t0) {
  const $ = c(8);
  let className;
  let props;
  if ($[0] !== t0) {
    ({
      className,
      ...props
    } = t0);
    $[0] = t0;
    $[1] = className;
    $[2] = props;
  } else {
    className = $[1];
    props = $[2];
  }
  let t1;
  if ($[3] !== className) {
    t1 = cn("group/menu-sub-item relative", className);
    $[3] = className;
    $[4] = t1;
  } else {
    t1 = $[4];
  }
  let t2;
  if ($[5] !== props || $[6] !== t1) {
    t2 = /* @__PURE__ */ jsx("li", { "data-slot": "sidebar-menu-sub-item", "data-sidebar": "menu-sub-item", className: t1, ...props });
    $[5] = props;
    $[6] = t1;
    $[7] = t2;
  } else {
    t2 = $[7];
  }
  return t2;
}
function SidebarMenuSubButton(t0) {
  const $ = c(16);
  let className;
  let props;
  let t1;
  let t2;
  let t3;
  if ($[0] !== t0) {
    ({
      asChild: t1,
      size: t2,
      isActive: t3,
      className,
      ...props
    } = t0);
    $[0] = t0;
    $[1] = className;
    $[2] = props;
    $[3] = t1;
    $[4] = t2;
    $[5] = t3;
  } else {
    className = $[1];
    props = $[2];
    t1 = $[3];
    t2 = $[4];
    t3 = $[5];
  }
  const asChild = t1 === void 0 ? false : t1;
  const size = t2 === void 0 ? "md" : t2;
  const isActive = t3 === void 0 ? false : t3;
  const Comp = asChild ? Slot : "a";
  const t4 = size === "sm" && "text-xs";
  const t5 = size === "md" && "text-sm";
  let t6;
  if ($[6] !== className || $[7] !== t4 || $[8] !== t5) {
    t6 = cn("text-sidebar-foreground ring-sidebar-ring hover:text-sidebar-accent-foreground active:text-sidebar-accent-foreground [&>svg]:text-sidebar-accent-foreground flex h-7 min-w-0 -translate-x-px items-center gap-2 overflow-hidden px-2 outline-hidden focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0", "data-[active=true]:text-sidebar-primary", t4, t5, "group-data-[collapsible=icon]:hidden", className);
    $[6] = className;
    $[7] = t4;
    $[8] = t5;
    $[9] = t6;
  } else {
    t6 = $[9];
  }
  let t7;
  if ($[10] !== Comp || $[11] !== isActive || $[12] !== props || $[13] !== size || $[14] !== t6) {
    t7 = /* @__PURE__ */ jsx(Comp, { "data-slot": "sidebar-menu-sub-button", "data-sidebar": "menu-sub-button", "data-size": size, "data-active": isActive, className: t6, ...props });
    $[10] = Comp;
    $[11] = isActive;
    $[12] = props;
    $[13] = size;
    $[14] = t6;
    $[15] = t7;
  } else {
    t7 = $[15];
  }
  return t7;
}
function Providers(t0) {
  const $ = c(2);
  const {
    children
  } = t0;
  let t1;
  if ($[0] !== children) {
    t1 = /* @__PURE__ */ jsx(ThemeProvider, { attribute: "class", defaultTheme: "system", enableSystem: true, disableTransitionOnChange: true, children: /* @__PURE__ */ jsx(SidebarProvider, { children }) });
    $[0] = children;
    $[1] = t1;
  } else {
    t1 = $[1];
  }
  return t1;
}
function NavMobileTrigger() {
  const $ = c(2);
  const {
    state,
    isMobile
  } = useSidebar();
  const mobileAndCollapsed = isMobile && state;
  let t0;
  if ($[0] !== mobileAndCollapsed) {
    t0 = mobileAndCollapsed ? /* @__PURE__ */ jsx(SidebarTrigger, { className: "hover:cursor-pointer fixed top-2 left-2 z-50" }) : null;
    $[0] = mobileAndCollapsed;
    $[1] = t0;
  } else {
    t0 = $[1];
  }
  return t0;
}
function Collapsible(t0) {
  const $ = c(4);
  let props;
  if ($[0] !== t0) {
    ({
      ...props
    } = t0);
    $[0] = t0;
    $[1] = props;
  } else {
    props = $[1];
  }
  let t1;
  if ($[2] !== props) {
    t1 = /* @__PURE__ */ jsx(CollapsiblePrimitive.Root, { "data-slot": "collapsible", ...props });
    $[2] = props;
    $[3] = t1;
  } else {
    t1 = $[3];
  }
  return t1;
}
function CollapsibleTrigger(t0) {
  const $ = c(4);
  let props;
  if ($[0] !== t0) {
    ({
      ...props
    } = t0);
    $[0] = t0;
    $[1] = props;
  } else {
    props = $[1];
  }
  let t1;
  if ($[2] !== props) {
    t1 = /* @__PURE__ */ jsx(CollapsiblePrimitive.CollapsibleTrigger, { "data-slot": "collapsible-trigger", ...props });
    $[2] = props;
    $[3] = t1;
  } else {
    t1 = $[3];
  }
  return t1;
}
function CollapsibleContent(t0) {
  const $ = c(4);
  let props;
  if ($[0] !== t0) {
    ({
      ...props
    } = t0);
    $[0] = t0;
    $[1] = props;
  } else {
    props = $[1];
  }
  let t1;
  if ($[2] !== props) {
    t1 = /* @__PURE__ */ jsx(CollapsiblePrimitive.CollapsibleContent, { "data-slot": "collapsible-content", ...props });
    $[2] = props;
    $[3] = t1;
  } else {
    t1 = $[3];
  }
  return t1;
}
const normalizePath = (path) => path.replace(/\/$/, "");
function NavSubItems(t0) {
  const $ = c(16);
  const {
    items,
    setOpenMobile
  } = t0;
  const location = useLocation();
  let t1;
  if ($[0] !== location.pathname) {
    t1 = normalizePath(location.pathname);
    $[0] = location.pathname;
    $[1] = t1;
  } else {
    t1 = $[1];
  }
  const currentPath = t1;
  const [currentHash, setCurrentHash] = useState("");
  let t2;
  let t3;
  if ($[2] !== location.hash) {
    t2 = () => {
      setCurrentHash((location.hash || "").replace(/^#/, ""));
    };
    t3 = [location.hash];
    $[2] = location.hash;
    $[3] = t2;
    $[4] = t3;
  } else {
    t2 = $[3];
    t3 = $[4];
  }
  useEffect(t2, t3);
  let t4;
  if ($[5] !== currentHash || $[6] !== currentPath || $[7] !== items || $[8] !== setOpenMobile) {
    let t52;
    if ($[10] !== currentHash || $[11] !== currentPath || $[12] !== setOpenMobile) {
      t52 = (subItem) => {
        const [subPathRaw, subHashRaw] = subItem.url.split("#");
        const subPath = normalizePath(subPathRaw || "");
        const subHash = decodeURIComponent(subHashRaw || "");
        const isActive = currentPath === subPath && (currentHash === "" && subHash === "" || currentHash === subHash);
        return /* @__PURE__ */ jsx(SidebarMenuSubItem, { children: /* @__PURE__ */ jsx(SidebarMenuSubButton, { asChild: true, className: "text-muted-foreground", isActive, children: /* @__PURE__ */ jsx(Link, { to: subItem.url, onClick: () => setOpenMobile(false), children: /* @__PURE__ */ jsx("span", { children: subItem.title }) }) }) }, subItem.title);
      };
      $[10] = currentHash;
      $[11] = currentPath;
      $[12] = setOpenMobile;
      $[13] = t52;
    } else {
      t52 = $[13];
    }
    t4 = items.map(t52);
    $[5] = currentHash;
    $[6] = currentPath;
    $[7] = items;
    $[8] = setOpenMobile;
    $[9] = t4;
  } else {
    t4 = $[9];
  }
  let t5;
  if ($[14] !== t4) {
    t5 = /* @__PURE__ */ jsx(Fragment, { children: t4 });
    $[14] = t4;
    $[15] = t5;
  } else {
    t5 = $[15];
  }
  return t5;
}
function NavItem(t0) {
  const $ = c(14);
  const {
    title,
    url,
    icon: Icon,
    isActive,
    isAnySubItemActive,
    setOpenMobile,
    items,
    state,
    isMobile
  } = t0;
  const t1 = isActive || isAnySubItemActive;
  let t2;
  if ($[0] !== Icon || $[1] !== isActive || $[2] !== isAnySubItemActive || $[3] !== isMobile || $[4] !== items || $[5] !== setOpenMobile || $[6] !== state || $[7] !== title || $[8] !== url) {
    t2 = /* @__PURE__ */ jsx(SidebarMenuItem, { children: state === "collapsed" && !isMobile ? /* @__PURE__ */ jsx(SidebarMenuButton, { tooltip: title, className: "hover:cursor-pointer", "data-active": isActive || isAnySubItemActive, asChild: true, children: /* @__PURE__ */ jsxs(Link, { to: url, children: [
      Icon && /* @__PURE__ */ jsx(Icon, {}),
      /* @__PURE__ */ jsx("span", { children: title })
    ] }) }) : /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx(CollapsibleTrigger, { asChild: true, children: /* @__PURE__ */ jsxs(SidebarMenuButton, { tooltip: title, className: "hover:cursor-pointer uppercase", "data-active": isActive || isAnySubItemActive, children: [
        Icon && /* @__PURE__ */ jsx(Icon, {}),
        /* @__PURE__ */ jsx("span", { children: title }),
        /* @__PURE__ */ jsx(ChevronRight, { className: "ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" })
      ] }) }),
      items && /* @__PURE__ */ jsx(CollapsibleContent, { className: "rdx-collapsible", children: /* @__PURE__ */ jsx(SidebarMenuSub, { children: /* @__PURE__ */ jsx(NavSubItems, { items, setOpenMobile }) }) })
    ] }) });
    $[0] = Icon;
    $[1] = isActive;
    $[2] = isAnySubItemActive;
    $[3] = isMobile;
    $[4] = items;
    $[5] = setOpenMobile;
    $[6] = state;
    $[7] = title;
    $[8] = url;
    $[9] = t2;
  } else {
    t2 = $[9];
  }
  let t3;
  if ($[10] !== t1 || $[11] !== t2 || $[12] !== title) {
    t3 = /* @__PURE__ */ jsx(Collapsible, { asChild: true, defaultOpen: t1, className: "group/collapsible", children: t2 }, title);
    $[10] = t1;
    $[11] = t2;
    $[12] = title;
    $[13] = t3;
  } else {
    t3 = $[13];
  }
  return t3;
}
function NavMain(t0) {
  const $ = c(11);
  const {
    label,
    items
  } = t0;
  const location = useLocation();
  const currentPath = location.pathname.replace(/\/$/, "");
  let t1;
  if ($[0] !== location.hash) {
    t1 = location.hash.replace(/^#/, "");
    $[0] = location.hash;
    $[1] = t1;
  } else {
    t1 = $[1];
  }
  const currentHash = t1;
  const {
    state,
    isMobile,
    setOpenMobile
  } = useSidebar();
  const T0 = SidebarGroup;
  let t2;
  if ($[2] !== label) {
    t2 = /* @__PURE__ */ jsx(SidebarGroupLabel, { children: label });
    $[2] = label;
    $[3] = t2;
  } else {
    t2 = $[3];
  }
  const T1 = SidebarMenu;
  const t3 = items.map((item) => {
    const normalizedItemUrl = item.url.replace(/\/$/, "");
    const isItemActive = currentPath === normalizedItemUrl || currentPath.startsWith(normalizedItemUrl + "/");
    const isAnySubItemActive = item.items?.some((subItem) => {
      const [subPathRaw, subHashRaw] = subItem.url.split("#");
      const subPath = (subPathRaw || "").replace(/\/$/, "");
      return currentPath === subPath.replace(/\/$/, "") && (subHashRaw ? currentHash === subHashRaw.replace(/^#/, "") : true);
    }) || false;
    return /* @__PURE__ */ jsx(NavItem, { isActive: isItemActive, isAnySubItemActive, state, isMobile, setOpenMobile, ...item }, item.title);
  });
  let t4;
  if ($[4] !== T1 || $[5] !== t3) {
    t4 = /* @__PURE__ */ jsx(T1, { children: t3 });
    $[4] = T1;
    $[5] = t3;
    $[6] = t4;
  } else {
    t4 = $[6];
  }
  let t5;
  if ($[7] !== T0 || $[8] !== t2 || $[9] !== t4) {
    t5 = /* @__PURE__ */ jsxs(T0, { children: [
      t2,
      t4
    ] });
    $[7] = T0;
    $[8] = t2;
    $[9] = t4;
    $[10] = t5;
  } else {
    t5 = $[10];
  }
  return t5;
}
const NavLinks = {
  navWebdev: {
    label: "Web Development",
    items: [{
      title: "Code Editors",
      url: "/code-editors",
      icon: Code,
      items: [{
        title: "Visual Studio Code",
        url: "/code-editors#visual-studio-code"
      }, {
        title: "Cursor",
        url: "/code-editors#cursor"
      }, {
        title: "Phoenix Code",
        url: "/code-editors#phoenix-code"
      }]
    }, {
      title: "Frontend Languages",
      url: "/frontend-languages",
      icon: BookType,
      items: [{
        title: "HTML5",
        url: "/frontend-languages#html"
      }, {
        title: "CSS3",
        url: "/frontend-languages#css"
      }, {
        title: "JavaScript (ES6+)",
        url: "/frontend-languages#javascript"
      }, {
        title: "TypeScript",
        url: "/frontend-languages#typescript"
      }]
    }, {
      title: "Frameworks",
      url: "/frameworks",
      icon: Layers,
      items: [{
        title: "Vite + TanStack Router",
        url: "/frameworks#vite-tanstack-router"
      }, {
        title: "TanStack Start",
        url: "/frameworks#tanstack-start"
      }, {
        title: "Next.js",
        url: "/frameworks#nextjs"
      }, {
        title: "Payload",
        url: "/frameworks#payload"
      }, {
        title: "Fumadocs",
        url: "/frameworks#fumadocs"
      }]
    }, {
      title: "State Management",
      url: "/state-management",
      icon: ArrowLeftRight,
      items: [{
        title: "React Defaults",
        url: "/state-management#react-defaults"
      }, {
        title: "Zustand",
        url: "/state-management#zustand"
      }, {
        title: "TanStack Query",
        url: "/state-management#tanstack-query"
      }]
    }, {
      title: "UI Libraries",
      url: "/ui-libraries",
      icon: LayoutGrid,
      items: [{
        title: "shadcn/ui",
        url: "/ui-libraries#shadcn-ui"
      }, {
        title: "Mantine",
        url: "/ui-libraries#mantine"
      }, {
        title: "Ant Design",
        url: "/ui-libraries#ant-design"
      }]
    }, {
      title: "CSS Libraries",
      url: "/css-libraries",
      icon: Paintbrush,
      items: [{
        title: "Tailwind CSS",
        url: "/css-libraries#tailwind-css"
      }, {
        title: "PostCSS",
        url: "/css-libraries#postcss"
      }]
    }, {
      title: "Icon Libraries",
      url: "/icon-libraries",
      icon: Shapes,
      items: [{
        title: "Lucide",
        url: "/icon-libraries#lucide"
      }, {
        title: "Heroicons",
        url: "/icon-libraries#heroicons"
      }, {
        title: "svgl",
        url: "/icon-libraries#svgl"
      }]
    }, {
      title: "Databases",
      url: "/databases",
      icon: Database,
      items: [{
        title: "PostgreSQL",
        url: "/databases#postgresql"
      }, {
        title: "MySQL",
        url: "/databases#mysql"
      }, {
        title: "Redis",
        url: "/databases#redis"
      }, {
        title: "Dexie.js",
        url: "/databases#dexiejs"
      }, {
        title: "localStorage",
        url: "/databases#localstorage"
      }, {
        title: "Google Sheets",
        url: "/databases#google-sheets"
      }]
    }, {
      title: "Database Providers",
      url: "/database-providers",
      icon: DatabaseZap,
      items: [{
        title: "Neon",
        url: "/database-providers#neon"
      }, {
        title: "Supabase",
        url: "/database-providers#supabase"
      }, {
        title: "PlanetScale",
        url: "/database-providers#planetscale"
      }]
    }, {
      title: "ORMs",
      url: "/orms",
      icon: Table,
      items: [{
        title: "Drizzle ORM",
        url: "/orms#drizzle-orm"
      }, {
        title: "Prisma ORM",
        url: "/orms#prisma"
      }]
    }, {
      title: "Auth",
      url: "/auth",
      icon: KeyRound,
      items: [{
        title: "Better Auth",
        url: "/auth#better-auth"
      }, {
        title: "Clerk",
        url: "/auth#clerk"
      }]
    }, {
      title: "Payments",
      url: "/payments",
      icon: DollarSign,
      items: [{
        title: "Polar",
        url: "/payments#polar"
      }, {
        title: "Stripe",
        url: "/payments#stripe"
      }]
    }, {
      title: "Mailing",
      url: "/mailing",
      icon: Mail,
      items: [{
        title: "Resend",
        url: "/mailing#resend"
      }]
    }, {
      title: "File Storage",
      url: "/file-storage",
      icon: FileUp,
      items: [{
        title: "UploadThing",
        url: "/file-storage#uploadthing"
      }]
    }, {
      title: "Environment",
      url: "/environment",
      icon: MonitorCog,
      items: [{
        title: "Node.js",
        url: "/environment#nodejs"
      }, {
        title: "pnpm",
        url: "/environment#pnpm"
      }, {
        title: "Prettier",
        url: "/environment#prettier"
      }, {
        title: "ESLint",
        url: "/environment#eslint"
      }]
    }, {
      title: "Version Control",
      url: "/version-control",
      icon: GitBranch,
      items: [{
        title: "Git",
        url: "/version-control#git"
      }, {
        title: "GitHub",
        url: "/version-control#github"
      }]
    }, {
      title: "CI/CD",
      url: "/ci-cd",
      icon: Workflow,
      items: [{
        title: "GitHub Actions",
        url: "/ci-cd#github-actions"
      }, {
        title: "CodeRabbit",
        url: "/ci-cd#coderabbit"
      }]
    }, {
      title: "Validation",
      url: "/validation",
      icon: Check,
      items: [{
        title: "Zod",
        url: "/validation#zod"
      }, {
        title: "T3 Env",
        url: "/validation#t3-env"
      }]
    }, {
      title: "Hosting",
      url: "/hosting",
      icon: Server,
      items: [{
        title: "Cloudflare Pages",
        url: "/hosting#cloudflare-pages"
      }, {
        title: "Vercel",
        url: "/hosting#vercel"
      }, {
        title: "Netlify",
        url: "/hosting#netlify"
      }, {
        title: "Coolify",
        url: "/hosting#coolify"
      }, {
        title: "Hetzner",
        url: "/hosting#hetzner"
      }]
    }, {
      title: "Analytics",
      url: "/analytics",
      icon: ChartLine,
      items: [{
        title: "PostHog",
        url: "/analytics#posthog"
      }, {
        title: "Plausible",
        url: "/analytics#plausible"
      }, {
        title: "Google Analytics",
        url: "/analytics#google-analytics"
      }]
    }, {
      title: "Diagnostics",
      url: "/diagnostics",
      icon: Activity,
      items: [{
        title: "React Scan",
        url: "/diagnostics#react-scan"
      }, {
        title: "Lighthouse",
        url: "/diagnostics#lighthouse"
      }, {
        title: "Sentry",
        url: "/diagnostics#sentry"
      }, {
        title: "check-site-meta",
        url: "/diagnostics#check-site-meta"
      }]
    }, {
      title: "Learning",
      url: "/learning",
      icon: BookOpen,
      items: [{
        title: "freeCodeCamp",
        url: "/learning#freecodecamp"
      }, {
        title: "Frontend Mentor",
        url: "/learning#frontend-mentor"
      }, {
        title: "Codevolution",
        url: "/learning#codevolution"
      }, {
        title: "Theo - t3.gg",
        url: "/learning#theo"
      }, {
        title: "Jack Herrington",
        url: "/learning#jack-herrington"
      }]
    }]
  },
  navCreative: {
    label: "Creative",
    items: [{
      title: "Design",
      url: "/design",
      icon: Lightbulb,
      items: [{
        title: "Excalidraw",
        url: "/design#excalidraw"
      }, {
        title: "Figma",
        url: "/design#figma"
      }, {
        title: "Canva",
        url: "/design#canva"
      }, {
        title: "PureRef",
        url: "/design#pureref"
      }, {
        title: "Image Color Picker",
        url: "/design#image-color-picker"
      }, {
        title: "OKLCH Color Picker & Converter",
        url: "/design#oklch-color-picker-converter"
      }]
    }, {
      title: "Graphic Design",
      url: "/graphic-design",
      icon: FileImage,
      items: [{
        title: "GIMP",
        url: "/graphic-design#gimp"
      }, {
        title: "Adobe Photoshop",
        url: "/graphic-design#adobe-photoshop"
      }]
    }, {
      title: "Vector Graphics",
      url: "/vector-graphics",
      icon: PenTool,
      items: [{
        title: "Adobe Illustrator",
        url: "/vector-graphics#adobe-illustrator"
      }, {
        title: "Inkscape",
        url: "/vector-graphics#inkscape"
      }]
    }, {
      title: "Video Editing",
      url: "/video-editing",
      icon: Clapperboard,
      items: [{
        title: "DaVinci Resolve",
        url: "/video-editing#davinci-resolve"
      }]
    }]
  }
};
function NavHead() {
  const $ = c(4);
  const {
    state,
    isMobile
  } = useSidebar();
  const collapsedAndNotMobile = state === "collapsed" && !isMobile;
  const t0 = `flex gap-2 p-2 items-center justify-between ${collapsedAndNotMobile ? "flex-col" : "flex-row px-4"}`;
  let t1;
  let t2;
  if ($[0] === Symbol.for("react.memo_cache_sentinel")) {
    t1 = /* @__PURE__ */ jsx(Link, { to: "/", className: "shrink-0", children: /* @__PURE__ */ jsx("img", { src: "/metadata/icon.svg", alt: "Logo", className: "overflow-hidden h-6 w-6" }) });
    t2 = /* @__PURE__ */ jsx(SidebarTrigger, { className: "hover:cursor-pointer shrink-0" });
    $[0] = t1;
    $[1] = t2;
  } else {
    t1 = $[0];
    t2 = $[1];
  }
  let t3;
  if ($[2] !== t0) {
    t3 = /* @__PURE__ */ jsxs(SidebarHeader, { className: t0, children: [
      t1,
      t2
    ] });
    $[2] = t0;
    $[3] = t3;
  } else {
    t3 = $[3];
  }
  return t3;
}
function AppSidebar(t0) {
  const $ = c(6);
  let props;
  if ($[0] !== t0) {
    ({
      ...props
    } = t0);
    $[0] = t0;
    $[1] = props;
  } else {
    props = $[1];
  }
  let t1;
  if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
    t1 = /* @__PURE__ */ jsx(NavHead, {});
    $[2] = t1;
  } else {
    t1 = $[2];
  }
  let t2;
  if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
    t2 = /* @__PURE__ */ jsxs(SidebarContent, { children: [
      /* @__PURE__ */ jsx(NavMain, { label: NavLinks.navWebdev.label, items: NavLinks.navWebdev.items }),
      /* @__PURE__ */ jsx(NavMain, { label: NavLinks.navCreative.label, items: NavLinks.navCreative.items })
    ] });
    $[3] = t2;
  } else {
    t2 = $[3];
  }
  let t3;
  if ($[4] !== props) {
    t3 = /* @__PURE__ */ jsxs(Sidebar, { collapsible: "icon", ...props, children: [
      t1,
      t2
    ] });
    $[4] = props;
    $[5] = t3;
  } else {
    t3 = $[5];
  }
  return t3;
}
function PageH1() {
  const $ = c(2);
  const matches = useMatches();
  const match = matches[matches.length - 1];
  const title = match?.loaderData?.title;
  let t0;
  if ($[0] !== title) {
    t0 = title ? /* @__PURE__ */ jsx("h1", { className: "text-sm font-normal text-muted-foreground", children: title }) : null;
    $[0] = title;
    $[1] = t0;
  } else {
    t0 = $[1];
  }
  return t0;
}
function Header() {
  const $ = c(1);
  let t0;
  if ($[0] === Symbol.for("react.memo_cache_sentinel")) {
    t0 = /* @__PURE__ */ jsx("header", { className: "flex h-16 shrink-0 items-center gap-2 px-4 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12", children: /* @__PURE__ */ jsx(PageH1, {}) });
    $[0] = t0;
  } else {
    t0 = $[0];
  }
  return t0;
}
function PageError(t0) {
  const $ = c(6);
  const {
    error
  } = t0;
  let t1;
  if ($[0] === Symbol.for("react.memo_cache_sentinel")) {
    t1 = /* @__PURE__ */ jsx("h1", { children: "ERROR" });
    $[0] = t1;
  } else {
    t1 = $[0];
  }
  let t2;
  if ($[1] !== error) {
    t2 = /* @__PURE__ */ jsx(ErrorComponent, { error });
    $[1] = error;
    $[2] = t2;
  } else {
    t2 = $[2];
  }
  let t3;
  if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
    t3 = /* @__PURE__ */ jsx(Link, { to: "/", children: /* @__PURE__ */ jsx("span", { children: "RETURN HOME" }) });
    $[3] = t3;
  } else {
    t3 = $[3];
  }
  let t4;
  if ($[4] !== t2) {
    t4 = /* @__PURE__ */ jsxs("main", { children: [
      t1,
      t2,
      t3
    ] });
    $[4] = t2;
    $[5] = t4;
  } else {
    t4 = $[5];
  }
  return t4;
}
function PageNotFound() {
  const $ = c(2);
  let t0;
  if ($[0] === Symbol.for("react.memo_cache_sentinel")) {
    t0 = /* @__PURE__ */ jsx("h1", { children: "NOT FOUND" });
    $[0] = t0;
  } else {
    t0 = $[0];
  }
  let t1;
  if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
    t1 = /* @__PURE__ */ jsxs("main", { children: [
      t0,
      /* @__PURE__ */ jsx(Link, { to: "/", children: /* @__PURE__ */ jsx("span", { children: "RETURN HOME" }) })
    ] });
    $[1] = t1;
  } else {
    t1 = $[1];
  }
  return t1;
}
const globalCss = "/assets/global-Cu-8BBf5.css";
const fontsCss = "/assets/fonts-Cnfqk-GA.css";
const Route$r = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: "utf-8"
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      },
      {
        author: "MGSimard"
      },
      {
        title: "MGS RECS"
      },
      {
        description: "MGS RECS - Collection of my recommended webdev things."
      },
      {
        name: "application-name",
        content: "MGS RECS"
      },
      {
        name: "apple-mobile-web-app-title",
        content: "MGS RECS"
      },
      {
        name: "mobile-web-app-capable",
        content: "yes"
      },
      {
        name: "apple-mobile-web-app-status-bar-style",
        content: "black-translucent"
      },
      {
        name: "theme-color",
        content: "#fa4242"
      },
      {
        name: "msapplication-TileColor",
        content: "#fa4242"
      },
      // Open Graph / Facebook
      {
        property: "og:type",
        content: "website"
      },
      {
        property: "og:url",
        content: "https://mgs-recs.pages.dev/"
      },
      {
        property: "og:title",
        content: "MGS RECS"
      },
      {
        property: "og:site_name",
        content: "MGS RECS"
      },
      {
        property: "og:description",
        content: "MGS RECS - Collection of my recommended webdev things."
      },
      {
        property: "og:image",
        content: "https://mgs-recs.pages.dev/metadata/opengraph-image.png"
      },
      {
        property: "og:image:width",
        content: "1200"
      },
      {
        property: "og:image:height",
        content: "600"
      },
      // Twitter
      {
        name: "twitter:card",
        content: "summary_large_image"
      },
      {
        name: "twitter:url",
        content: "https://mgs-recs.pages.dev/"
      },
      {
        name: "twitter:creator",
        content: "@MGSimard"
      },
      {
        name: "twitter:title",
        content: "MGS RECS"
      },
      {
        name: "twitter:description",
        content: "MGS RECS - Collection of my recommended webdev things."
      },
      {
        name: "twitter:image",
        content: "https://mgs-recs.pages.dev/metadata/twitter-image.png"
      }
    ],
    links: [{
      rel: "stylesheet",
      href: globalCss
    }, {
      rel: "stylesheet",
      href: fontsCss
    }, {
      rel: "canonical",
      href: "https://mgs-recs.pages.dev/"
    }, {
      rel: "manifest",
      href: "/metadata/manifest.webmanifest"
    }, {
      rel: "shortcut icon",
      href: "/metadata/favicon.ico"
    }, {
      rel: "icon",
      type: "image/png",
      sizes: "96x96",
      href: "/metadata/icon.png"
    }, {
      rel: "icon",
      type: "image/svg+xml",
      href: "/metadata/icon.svg"
    }, {
      rel: "apple-touch-icon",
      sizes: "180x180",
      href: "/metadata/apple-icon.png"
    }, {
      rel: "apple-touch-startup-image",
      href: "/metadata/apple-icon.png"
    }, {
      rel: "preload",
      href: "/fonts/rajdhani/Rajdhani-Regular.woff2",
      as: "font",
      type: "font/woff2",
      fetchPriority: "high",
      crossOrigin: "anonymous"
    }, {
      rel: "preload",
      href: "/fonts/rajdhani/Rajdhani-SemiBold.woff2",
      as: "font",
      type: "font/woff2",
      fetchPriority: "high",
      crossOrigin: "anonymous"
    }, {
      rel: "preload",
      href: "/fonts/rajdhani/Rajdhani-Bold.woff2",
      as: "font",
      type: "font/woff2",
      fetchPriority: "high",
      crossOrigin: "anonymous"
    }]
  }),
  component: RootComponent,
  notFoundComponent: () => /* @__PURE__ */ jsx(PageNotFound, {}),
  errorComponent: (props) => {
    return /* @__PURE__ */ jsx(RootDocument, { children: /* @__PURE__ */ jsx(PageError, { ...props }) });
  }
});
function RootComponent() {
  const $ = c(1);
  let t0;
  if ($[0] === Symbol.for("react.memo_cache_sentinel")) {
    t0 = /* @__PURE__ */ jsx(RootDocument, { children: /* @__PURE__ */ jsx(Outlet, {}) });
    $[0] = t0;
  } else {
    t0 = $[0];
  }
  return t0;
}
function RootDocument(t0) {
  const $ = c(9);
  const {
    children
  } = t0;
  let t1;
  if ($[0] === Symbol.for("react.memo_cache_sentinel")) {
    t1 = /* @__PURE__ */ jsx("head", { children: /* @__PURE__ */ jsx(HeadContent, {}) });
    $[0] = t1;
  } else {
    t1 = $[0];
  }
  let t2;
  let t3;
  if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
    t2 = /* @__PURE__ */ jsx(NavMobileTrigger, {});
    t3 = /* @__PURE__ */ jsx(AppSidebar, { className: "whitespace-nowrap" });
    $[1] = t2;
    $[2] = t3;
  } else {
    t2 = $[1];
    t3 = $[2];
  }
  let t4;
  if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
    t4 = /* @__PURE__ */ jsx(Header, {});
    $[3] = t4;
  } else {
    t4 = $[3];
  }
  let t5;
  if ($[4] !== children) {
    t5 = /* @__PURE__ */ jsxs(Providers, { children: [
      t2,
      t3,
      /* @__PURE__ */ jsxs(SidebarInset, { className: "max-w-screen-xl mx-auto", children: [
        t4,
        /* @__PURE__ */ jsx("main", { className: "flex flex-1 flex-col gap-12 p-4", children })
      ] })
    ] });
    $[4] = children;
    $[5] = t5;
  } else {
    t5 = $[5];
  }
  let t6;
  if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
    t6 = /* @__PURE__ */ jsx(Scripts, {});
    $[6] = t6;
  } else {
    t6 = $[6];
  }
  let t7;
  if ($[7] !== t5) {
    t7 = /* @__PURE__ */ jsxs("html", { lang: "en", suppressHydrationWarning: true, children: [
      t1,
      /* @__PURE__ */ jsxs("body", { children: [
        t5,
        t6
      ] })
    ] });
    $[7] = t5;
    $[8] = t7;
  } else {
    t7 = $[8];
  }
  return t7;
}
const $$splitComponentImporter$q = () => import('./index-CD8KhjIM.mjs');
const Route$q = createFileRoute("/")({
  component: lazyRouteComponent($$splitComponentImporter$q, "component", () => Route$q.ssr)
});
const $$splitComponentImporter$p = () => import('./index-D9_J_2hq.mjs');
const Route$p = createFileRoute("/video-editing/")({
  component: lazyRouteComponent($$splitComponentImporter$p, "component", () => Route$p.ssr),
  loader: () => ({
    title: "Video Editing"
  }),
  head: () => ({
    meta: [{
      title: "MGS RECS - Video Editing"
    }]
  })
});
const $$splitComponentImporter$o = () => import('./index-irFYwhrd.mjs');
const Route$o = createFileRoute("/version-control/")({
  component: lazyRouteComponent($$splitComponentImporter$o, "component", () => Route$o.ssr),
  loader: () => ({
    title: "Version Control"
  }),
  head: () => ({
    meta: [{
      title: "MGS RECS - Version Control"
    }]
  })
});
const $$splitComponentImporter$n = () => import('./index-BeUansET.mjs');
const Route$n = createFileRoute("/vector-graphics/")({
  component: lazyRouteComponent($$splitComponentImporter$n, "component", () => Route$n.ssr),
  loader: () => ({
    title: "Vector Graphics"
  }),
  head: () => ({
    meta: [{
      title: "MGS RECS - Vector Graphics"
    }]
  })
});
const $$splitComponentImporter$m = () => import('./index-RGTc0JYn.mjs');
const Route$m = createFileRoute("/validation/")({
  component: lazyRouteComponent($$splitComponentImporter$m, "component", () => Route$m.ssr),
  loader: () => ({
    title: "Validation"
  }),
  head: () => ({
    meta: [{
      title: "MGS RECS - Validation"
    }]
  })
});
const $$splitComponentImporter$l = () => import('./index-CpAhJOVK.mjs');
const Route$l = createFileRoute("/ui-libraries/")({
  component: lazyRouteComponent($$splitComponentImporter$l, "component", () => Route$l.ssr),
  loader: async () => ({
    title: "UI Libraries"
  }),
  head: () => ({
    meta: [{
      title: "MGS RECS - UI Libraries"
    }]
  })
});
const $$splitComponentImporter$k = () => import('./index-TXF9sjz2.mjs');
const Route$k = createFileRoute("/state-management/")({
  component: lazyRouteComponent($$splitComponentImporter$k, "component", () => Route$k.ssr),
  loader: () => ({
    title: "State Management"
  }),
  head: () => ({
    meta: [{
      title: "MGS RECS - State Management"
    }]
  })
});
const $$splitComponentImporter$j = () => import('./index-DylFmpkK.mjs');
const Route$j = createFileRoute("/payments/")({
  component: lazyRouteComponent($$splitComponentImporter$j, "component", () => Route$j.ssr),
  loader: () => ({
    title: "Payments"
  }),
  head: () => ({
    meta: [{
      title: "MGS RECS - Payments"
    }]
  })
});
const $$splitComponentImporter$i = () => import('./index-Cond_fOL.mjs');
const Route$i = createFileRoute("/orms/")({
  component: lazyRouteComponent($$splitComponentImporter$i, "component", () => Route$i.ssr),
  loader: () => ({
    title: "ORMs"
  }),
  head: () => ({
    meta: [{
      title: "MGS RECS - ORMs"
    }]
  })
});
const $$splitComponentImporter$h = () => import('./index-BOBBjwXf.mjs');
const Route$h = createFileRoute("/mailing/")({
  component: lazyRouteComponent($$splitComponentImporter$h, "component", () => Route$h.ssr),
  loader: () => ({
    title: "Mailing"
  }),
  head: () => ({
    meta: [{
      title: "MGS RECS - Mailing"
    }]
  })
});
const $$splitComponentImporter$g = () => import('./index-DVzTcMzF.mjs');
const Route$g = createFileRoute("/learning/")({
  component: lazyRouteComponent($$splitComponentImporter$g, "component", () => Route$g.ssr),
  loader: () => ({
    title: "Learning"
  }),
  head: () => ({
    meta: [{
      title: "MGS RECS - Learning"
    }]
  })
});
const $$splitComponentImporter$f = () => import('./index-C8oRjrsI.mjs');
const Route$f = createFileRoute("/icon-libraries/")({
  component: lazyRouteComponent($$splitComponentImporter$f, "component", () => Route$f.ssr),
  loader: () => ({
    title: "Icon Libraries"
  }),
  head: () => ({
    meta: [{
      title: "MGS RECS - Icon Libraries"
    }]
  })
});
const $$splitComponentImporter$e = () => import('./index-BF1_PZwq.mjs');
const Route$e = createFileRoute("/hosting/")({
  component: lazyRouteComponent($$splitComponentImporter$e, "component", () => Route$e.ssr),
  loader: () => ({
    title: "Hosting"
  }),
  head: () => ({
    meta: [{
      title: "MGS RECS - Hosting"
    }]
  })
});
const $$splitComponentImporter$d = () => import('./index-BOWqX5Tj.mjs');
const Route$d = createFileRoute("/graphic-design/")({
  component: lazyRouteComponent($$splitComponentImporter$d, "component", () => Route$d.ssr),
  loader: () => ({
    title: "Graphic Design"
  }),
  head: () => ({
    meta: [{
      title: "MGS RECS - Graphic Design"
    }]
  })
});
const $$splitComponentImporter$c = () => import('./index-DLbIqr1H.mjs');
const Route$c = createFileRoute("/frontend-languages/")({
  component: lazyRouteComponent($$splitComponentImporter$c, "component", () => Route$c.ssr),
  loader: () => ({
    title: "Frontend Languages"
  }),
  head: () => ({
    meta: [{
      title: "MGS RECS - Frontend Languages"
    }]
  })
});
const $$splitComponentImporter$b = () => import('./index-B5IYLpjJ.mjs');
const Route$b = createFileRoute("/frameworks/")({
  component: lazyRouteComponent($$splitComponentImporter$b, "component", () => Route$b.ssr),
  loader: () => ({
    title: "Frameworks"
  }),
  head: () => ({
    meta: [{
      title: "MGS RECS - Frameworks"
    }]
  })
});
const $$splitComponentImporter$a = () => import('./index-s3cIi6tS.mjs');
const Route$a = createFileRoute("/file-storage/")({
  component: lazyRouteComponent($$splitComponentImporter$a, "component", () => Route$a.ssr),
  loader: () => ({
    title: "File Storage"
  }),
  head: () => ({
    meta: [{
      title: "MGS RECS - File Storage"
    }]
  })
});
const $$splitComponentImporter$9 = () => import('./index-_5CdplF9.mjs');
const Route$9 = createFileRoute("/environment/")({
  component: lazyRouteComponent($$splitComponentImporter$9, "component", () => Route$9.ssr),
  loader: () => ({
    title: "Environment"
  }),
  head: () => ({
    meta: [{
      title: "MGS RECS - Environment"
    }]
  })
});
const $$splitComponentImporter$8 = () => import('./index-CjtDSEik.mjs');
const Route$8 = createFileRoute("/diagnostics/")({
  component: lazyRouteComponent($$splitComponentImporter$8, "component", () => Route$8.ssr),
  loader: () => ({
    title: "Diagnostics"
  }),
  head: () => ({
    meta: [{
      title: "MGS RECS - Diagnostics"
    }]
  })
});
const $$splitComponentImporter$7 = () => import('./index-C9foM9xq.mjs');
const Route$7 = createFileRoute("/design/")({
  component: lazyRouteComponent($$splitComponentImporter$7, "component", () => Route$7.ssr),
  loader: () => ({
    title: "Design"
  }),
  head: () => ({
    meta: [{
      title: "MGS RECS - Design"
    }]
  })
});
const $$splitComponentImporter$6 = () => import('./index-Z23DeAI_.mjs');
const Route$6 = createFileRoute("/databases/")({
  component: lazyRouteComponent($$splitComponentImporter$6, "component", () => Route$6.ssr),
  loader: () => ({
    title: "Databases"
  }),
  head: () => ({
    meta: [{
      title: "MGS RECS - Databases"
    }]
  })
});
const $$splitComponentImporter$5 = () => import('./index-CV_5r3-A.mjs');
const Route$5 = createFileRoute("/database-providers/")({
  component: lazyRouteComponent($$splitComponentImporter$5, "component", () => Route$5.ssr),
  loader: async () => ({
    title: "Database Providers"
  }),
  head: () => ({
    meta: [{
      title: "MGS RECS - Database Providers"
    }]
  })
});
const $$splitComponentImporter$4 = () => import('./index-DWokic3H.mjs');
const Route$4 = createFileRoute("/css-libraries/")({
  component: lazyRouteComponent($$splitComponentImporter$4, "component", () => Route$4.ssr),
  loader: () => ({
    title: "CSS Libraries"
  }),
  head: () => ({
    meta: [{
      title: "MGS RECS - CSS Libraries"
    }]
  })
});
const $$splitComponentImporter$3 = () => import('./index-DR4tPOtE.mjs');
const Route$3 = createFileRoute("/code-editors/")({
  component: lazyRouteComponent($$splitComponentImporter$3, "component", () => Route$3.ssr),
  loader: () => ({
    title: "Code Editors"
  }),
  head: () => ({
    meta: [{
      title: "MGS RECS - Code Editors"
    }]
  })
});
const $$splitComponentImporter$2 = () => import('./index-mjy43aIn.mjs');
const Route$2 = createFileRoute("/ci-cd/")({
  component: lazyRouteComponent($$splitComponentImporter$2, "component", () => Route$2.ssr),
  loader: () => ({
    title: "CI/CD"
  }),
  head: () => ({
    meta: [{
      title: "MGS RECS - CI/CD"
    }]
  })
});
const $$splitComponentImporter$1 = () => import('./index-ChuAg775.mjs');
const Route$1 = createFileRoute("/auth/")({
  component: lazyRouteComponent($$splitComponentImporter$1, "component", () => Route$1.ssr),
  loader: () => ({
    title: "Auth"
  }),
  head: () => ({
    meta: [{
      title: "MGS RECS - Auth"
    }]
  })
});
const $$splitComponentImporter = () => import('./index-B69jk1I1.mjs');
const Route = createFileRoute("/analytics/")({
  component: lazyRouteComponent($$splitComponentImporter, "component", () => Route.ssr),
  loader: () => ({
    title: "Analytics"
  }),
  head: () => ({
    meta: [{
      title: "MGS RECS - Analytics"
    }]
  })
});
const IndexRoute = Route$q.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$r
});
const VideoEditingIndexRoute = Route$p.update({
  id: "/video-editing/",
  path: "/video-editing/",
  getParentRoute: () => Route$r
});
const VersionControlIndexRoute = Route$o.update({
  id: "/version-control/",
  path: "/version-control/",
  getParentRoute: () => Route$r
});
const VectorGraphicsIndexRoute = Route$n.update({
  id: "/vector-graphics/",
  path: "/vector-graphics/",
  getParentRoute: () => Route$r
});
const ValidationIndexRoute = Route$m.update({
  id: "/validation/",
  path: "/validation/",
  getParentRoute: () => Route$r
});
const UiLibrariesIndexRoute = Route$l.update({
  id: "/ui-libraries/",
  path: "/ui-libraries/",
  getParentRoute: () => Route$r
});
const StateManagementIndexRoute = Route$k.update({
  id: "/state-management/",
  path: "/state-management/",
  getParentRoute: () => Route$r
});
const PaymentsIndexRoute = Route$j.update({
  id: "/payments/",
  path: "/payments/",
  getParentRoute: () => Route$r
});
const OrmsIndexRoute = Route$i.update({
  id: "/orms/",
  path: "/orms/",
  getParentRoute: () => Route$r
});
const MailingIndexRoute = Route$h.update({
  id: "/mailing/",
  path: "/mailing/",
  getParentRoute: () => Route$r
});
const LearningIndexRoute = Route$g.update({
  id: "/learning/",
  path: "/learning/",
  getParentRoute: () => Route$r
});
const IconLibrariesIndexRoute = Route$f.update({
  id: "/icon-libraries/",
  path: "/icon-libraries/",
  getParentRoute: () => Route$r
});
const HostingIndexRoute = Route$e.update({
  id: "/hosting/",
  path: "/hosting/",
  getParentRoute: () => Route$r
});
const GraphicDesignIndexRoute = Route$d.update({
  id: "/graphic-design/",
  path: "/graphic-design/",
  getParentRoute: () => Route$r
});
const FrontendLanguagesIndexRoute = Route$c.update({
  id: "/frontend-languages/",
  path: "/frontend-languages/",
  getParentRoute: () => Route$r
});
const FrameworksIndexRoute = Route$b.update({
  id: "/frameworks/",
  path: "/frameworks/",
  getParentRoute: () => Route$r
});
const FileStorageIndexRoute = Route$a.update({
  id: "/file-storage/",
  path: "/file-storage/",
  getParentRoute: () => Route$r
});
const EnvironmentIndexRoute = Route$9.update({
  id: "/environment/",
  path: "/environment/",
  getParentRoute: () => Route$r
});
const DiagnosticsIndexRoute = Route$8.update({
  id: "/diagnostics/",
  path: "/diagnostics/",
  getParentRoute: () => Route$r
});
const DesignIndexRoute = Route$7.update({
  id: "/design/",
  path: "/design/",
  getParentRoute: () => Route$r
});
const DatabasesIndexRoute = Route$6.update({
  id: "/databases/",
  path: "/databases/",
  getParentRoute: () => Route$r
});
const DatabaseProvidersIndexRoute = Route$5.update({
  id: "/database-providers/",
  path: "/database-providers/",
  getParentRoute: () => Route$r
});
const CssLibrariesIndexRoute = Route$4.update({
  id: "/css-libraries/",
  path: "/css-libraries/",
  getParentRoute: () => Route$r
});
const CodeEditorsIndexRoute = Route$3.update({
  id: "/code-editors/",
  path: "/code-editors/",
  getParentRoute: () => Route$r
});
const CiCdIndexRoute = Route$2.update({
  id: "/ci-cd/",
  path: "/ci-cd/",
  getParentRoute: () => Route$r
});
const AuthIndexRoute = Route$1.update({
  id: "/auth/",
  path: "/auth/",
  getParentRoute: () => Route$r
});
const AnalyticsIndexRoute = Route.update({
  id: "/analytics/",
  path: "/analytics/",
  getParentRoute: () => Route$r
});
const rootRouteChildren = {
  IndexRoute,
  AnalyticsIndexRoute,
  AuthIndexRoute,
  CiCdIndexRoute,
  CodeEditorsIndexRoute,
  CssLibrariesIndexRoute,
  DatabaseProvidersIndexRoute,
  DatabasesIndexRoute,
  DesignIndexRoute,
  DiagnosticsIndexRoute,
  EnvironmentIndexRoute,
  FileStorageIndexRoute,
  FrameworksIndexRoute,
  FrontendLanguagesIndexRoute,
  GraphicDesignIndexRoute,
  HostingIndexRoute,
  IconLibrariesIndexRoute,
  LearningIndexRoute,
  MailingIndexRoute,
  OrmsIndexRoute,
  PaymentsIndexRoute,
  StateManagementIndexRoute,
  UiLibrariesIndexRoute,
  ValidationIndexRoute,
  VectorGraphicsIndexRoute,
  VersionControlIndexRoute,
  VideoEditingIndexRoute
};
const routeTree = Route$r._addFileChildren(rootRouteChildren)._addFileTypes();
const routeTree_gen = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  routeTree
}, Symbol.toStringTag, { value: "Module" }));
function createRouter() {
  const router = createRouter$1({
    routeTree,
    scrollRestoration: true
  });
  return router;
}
const serverEntry$1 = createStartHandler({
  createRouter
})(defaultStreamHandler);
const serverEntry = defineEventHandler(function(event) {
  const request = toWebRequest(event);
  return serverEntry$1({
    request
  });
});

export { cn as c, serverEntry as default };
//# sourceMappingURL=ssr.mjs.map
