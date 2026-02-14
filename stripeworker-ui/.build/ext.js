"use strict";
var __StripeExtExports = (() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __defProps = Object.defineProperties;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getOwnPropSymbols = Object.getOwnPropertySymbols;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __propIsEnum = Object.prototype.propertyIsEnumerable;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __spreadValues = (a, b) => {
    for (var prop in b || (b = {}))
      if (__hasOwnProp.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    if (__getOwnPropSymbols)
      for (var prop of __getOwnPropSymbols(b)) {
        if (__propIsEnum.call(b, prop))
          __defNormalProp(a, prop, b[prop]);
      }
    return a;
  };
  var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
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
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __reExport = (target, mod, secondTarget) => (__copyProps(target, mod, "default"), secondTarget && __copyProps(secondTarget, mod, "default"));
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
  var __async = (__this, __arguments, generator) => {
    return new Promise((resolve, reject) => {
      var fulfilled = (value) => {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      };
      var rejected = (value) => {
        try {
          step(generator.throw(value));
        } catch (e) {
          reject(e);
        }
      };
      var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
      step((generator = generator.apply(__this, __arguments)).next());
    });
  };

  // node_modules/@stripe/ui-extension-sdk/version.js
  var require_version = __commonJS({
    "node_modules/@stripe/ui-extension-sdk/version.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.SDK_VERSION = void 0;
      exports.SDK_VERSION = "8.10.0";
    }
  });

  // node_modules/@stripe/ui-extension-sdk/ui/index.js
  var require_ui = __commonJS({
    "node_modules/@stripe/ui-extension-sdk/ui/index.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.Tooltip = exports.TextField = exports.TextArea = exports.Tabs = exports.TableRow = exports.Table = exports.TableHeaderCell = exports.TableHead = exports.TableFooter = exports.TableCell = exports.TableBody = exports.Tab = exports.TabPanels = exports.TabPanel = exports.TabList = exports.Switch = exports.StripeFileUploader = exports.Spinner = exports.Sparkline = exports.SignInView = exports.SettingsView = exports.Select = exports.Radio = exports.Menu = exports.MenuItem = exports.MenuGroup = exports.List = exports.ListItem = exports.Link = exports.LineChart = exports.Inline = exports.Img = exports.Icon = exports.FormFieldGroup = exports.FocusView = exports.Divider = exports.DateField = exports.ContextView = exports.Chip = exports.ChipList = exports.Checkbox = exports.Button = exports.ButtonGroup = exports.Box = exports.BarChart = exports.Banner = exports.Badge = exports.Accordion = exports.AccordionItem = void 0;
      var jsx_runtime_1 = __require("react/jsx-runtime");
      var react_1 = __require("@remote-ui/react");
      var version_1 = require_version();
      var withSdkProps = (Component) => {
        const wrappedComponentName = Component.displayName || Component.toString();
        const WithSdkProps = (props) => (0, jsx_runtime_1.jsx)(Component, Object.assign({}, props, { wrappedComponentName, sdkVersion: version_1.SDK_VERSION, schemaVersion: "v8" }));
        WithSdkProps.wrappedComponentName = wrappedComponentName;
        return WithSdkProps;
      };
      var defineComponent = (name, fragmentProps, wrapWithSdkProps) => {
        const remoteComponent = (0, react_1.createRemoteReactComponent)(name, {
          fragmentProps
        });
        if (!wrapWithSdkProps) {
          return remoteComponent;
        }
        return withSdkProps(remoteComponent);
      };
      exports.AccordionItem = defineComponent("AccordionItem", ["title", "actions", "media", "subtitle"], true);
      exports.Accordion = defineComponent("Accordion", [], true);
      exports.Badge = defineComponent("Badge", [], true);
      exports.Banner = defineComponent("Banner", ["actions", "description", "title"], true);
      exports.BarChart = defineComponent("BarChart", [], true);
      exports.Box = defineComponent("Box", [], true);
      exports.ButtonGroup = defineComponent("ButtonGroup", ["menuTrigger"], true);
      exports.Button = defineComponent("Button", [], true);
      exports.Checkbox = defineComponent("Checkbox", ["label"], true);
      exports.ChipList = defineComponent("ChipList", [], true);
      exports.Chip = defineComponent("Chip", [], true);
      exports.ContextView = defineComponent("ContextView", ["actions", "banner", "footerContent", "primaryAction", "secondaryAction"], true);
      exports.DateField = defineComponent("DateField", ["label"], true);
      exports.Divider = defineComponent("Divider", [], true);
      exports.FocusView = defineComponent("FocusView", ["footerContent", "primaryAction", "secondaryAction"], true);
      exports.FormFieldGroup = defineComponent("FormFieldGroup", [], true);
      exports.Icon = defineComponent("Icon", [], true);
      exports.Img = defineComponent("Img", [], true);
      exports.Inline = defineComponent("Inline", [], true);
      exports.LineChart = defineComponent("LineChart", [], true);
      exports.Link = defineComponent("Link", [], true);
      exports.ListItem = defineComponent("ListItem", ["icon", "image", "secondaryTitle", "title", "value"], true);
      exports.List = defineComponent("List", [], true);
      exports.MenuGroup = defineComponent("MenuGroup", ["title"], true);
      exports.MenuItem = defineComponent("MenuItem", [], true);
      exports.Menu = defineComponent("Menu", ["trigger"], true);
      exports.Radio = defineComponent("Radio", ["label"], true);
      exports.Select = defineComponent("Select", ["label"], true);
      exports.SettingsView = defineComponent("SettingsView", [], true);
      exports.SignInView = defineComponent("SignInView", ["descriptionActionContents", "footerContent"], true);
      exports.Sparkline = defineComponent("Sparkline", [], true);
      exports.Spinner = defineComponent("Spinner", [], true);
      exports.StripeFileUploader = defineComponent("StripeFileUploader", [], true);
      exports.Switch = defineComponent("Switch", ["label"], true);
      exports.TabList = defineComponent("TabList", [], true);
      exports.TabPanel = defineComponent("TabPanel", [], true);
      exports.TabPanels = defineComponent("TabPanels", [], true);
      exports.Tab = defineComponent("Tab", [], true);
      exports.TableBody = defineComponent("TableBody", [], true);
      exports.TableCell = defineComponent("TableCell", [], true);
      exports.TableFooter = defineComponent("TableFooter", [], true);
      exports.TableHead = defineComponent("TableHead", [], true);
      exports.TableHeaderCell = defineComponent("TableHeaderCell", [], true);
      exports.Table = defineComponent("Table", [], true);
      exports.TableRow = defineComponent("TableRow", [], true);
      exports.Tabs = defineComponent("Tabs", [], true);
      exports.TextArea = defineComponent("TextArea", ["label"], true);
      exports.TextField = defineComponent("TextField", ["label"], true);
      exports.Tooltip = defineComponent("Tooltip", ["trigger"], true);
    }
  });

  // node_modules/invariant/browser.js
  var require_browser = __commonJS({
    "node_modules/invariant/browser.js"(exports, module) {
      "use strict";
      var invariant = function(condition, format, a, b, c, d, e, f) {
        if (true) {
          if (format === void 0) {
            throw new Error("invariant requires an error message argument");
          }
        }
        if (!condition) {
          var error;
          if (format === void 0) {
            error = new Error(
              "Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings."
            );
          } else {
            var args = [a, b, c, d, e, f];
            var argIndex = 0;
            error = new Error(
              format.replace(/%s/g, function() {
                return args[argIndex++];
              })
            );
            error.name = "Invariant Violation";
          }
          error.framesToPop = 1;
          throw error;
        }
      };
      module.exports = invariant;
    }
  });

  // node_modules/@stripe/ui-extension-sdk/utils/_endpoint.js
  var require_endpoint = __commonJS({
    "node_modules/@stripe/ui-extension-sdk/utils/_endpoint.js"(exports) {
      "use strict";
      var __importDefault = exports && exports.__importDefault || function(mod) {
        return mod && mod.__esModule ? mod : { "default": mod };
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.getHostEndpoint = void 0;
      var invariant_1 = __importDefault(require_browser());
      var getHostEndpoint = () => {
        var _a;
        const hostEndpoint = (_a = globalThis.__StripeExtExports) === null || _a === void 0 ? void 0 : _a.endpoint;
        (0, invariant_1.default)(hostEndpoint, "hostEndpoint has not been initialized");
        return hostEndpoint;
      };
      exports.getHostEndpoint = getHostEndpoint;
    }
  });

  // node_modules/@stripe/ui-extension-sdk/utils/apiFetch.js
  var require_apiFetch = __commonJS({
    "node_modules/@stripe/ui-extension-sdk/utils/apiFetch.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.stripeApiFetch = void 0;
      var _endpoint_1 = require_endpoint();
      var stripeApiFetch = (path, req) => {
        try {
          return (0, _endpoint_1.getHostEndpoint)().call.stripeApiFetch(path, req);
        } catch (e) {
          console.error("error calling stripe fetch", e);
          throw e;
        }
      };
      exports.stripeApiFetch = stripeApiFetch;
    }
  });

  // node_modules/@stripe/ui-extension-sdk/utils/clipboard.js
  var require_clipboard = __commonJS({
    "node_modules/@stripe/ui-extension-sdk/utils/clipboard.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.clipboardWriteText = void 0;
      var _endpoint_1 = require_endpoint();
      var clipboardWriteText = (text = "") => {
        return (0, _endpoint_1.getHostEndpoint)().call.clipboardWriteText(text);
      };
      exports.clipboardWriteText = clipboardWriteText;
    }
  });

  // node_modules/@stripe/ui-extension-sdk/utils/context.js
  var require_context = __commonJS({
    "node_modules/@stripe/ui-extension-sdk/utils/context.js"(exports) {
      "use strict";
      var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
          desc = { enumerable: true, get: function() {
            return m[k];
          } };
        }
        Object.defineProperty(o, k2, desc);
      } : function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        o[k2] = m[k];
      });
      var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
      } : function(o, v) {
        o["default"] = v;
      });
      var __importStar = exports && exports.__importStar || function(mod) {
        if (mod && mod.__esModule)
          return mod;
        var result = {};
        if (mod != null) {
          for (var k in mod)
            if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
              __createBinding(result, mod, k);
        }
        __setModuleDefault(result, mod);
        return result;
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.useRefreshDashboardData = void 0;
      var React = __importStar(__require("react"));
      var _endpoint_1 = require_endpoint();
      var useRefreshDashboardData = () => {
        return React.useCallback(() => {
          return (0, _endpoint_1.getHostEndpoint)().call.refreshDashboardData();
        }, []);
      };
      exports.useRefreshDashboardData = useRefreshDashboardData;
    }
  });

  // node_modules/@stripe/ui-extension-sdk/utils/httpClient.js
  var require_httpClient = __commonJS({
    "node_modules/@stripe/ui-extension-sdk/utils/httpClient.js"(exports) {
      "use strict";
      var __awaiter = exports && exports.__awaiter || function(thisArg, _arguments, P, generator) {
        function adopt(value) {
          return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
          });
        }
        return new (P || (P = Promise))(function(resolve, reject) {
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
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
          }
          step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
      };
      var __importDefault = exports && exports.__importDefault || function(mod) {
        return mod && mod.__esModule ? mod : { "default": mod };
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.AUTHORIZATION_VALUE = exports.AUTHORIZATION_HEADER = exports.createHttpClient = exports.STRIPE_API_KEY = exports.StripeAppsHttpClient = void 0;
      var invariant_1 = __importDefault(require_browser());
      var apiFetch_1 = require_apiFetch();
      var matchesStripeKey = /[ps]k_(test|live)_[A-Za-z0-9]+/;
      var StripeAppsHttpResponse = class {
        constructor(resp) {
          this._resp = resp;
        }
        getHeaders() {
          return this._resp.headers;
        }
        getStatusCode() {
          return this._resp.status;
        }
        getRawResponse() {
          return this._resp;
        }
        toStream() {
          throw new Error("Streams have not been implemented in the Stripe HTTP client");
        }
        toJSON() {
          const { json } = this._resp;
          if (json === void 0) {
            return Promise.reject(new Error("Response body undefined"));
          } else {
            return Promise.resolve(json);
          }
        }
      };
      var StripeAppsHttpClient = class {
        constructor(fetch2) {
          this._fetch = fetch2;
        }
        getClientName() {
          return "stripe-ui-extension";
        }
        makeRequest(host, port, path, method, headers, requestData, protocol, timeout) {
          return __awaiter(this, void 0, void 0, function* () {
            (0, invariant_1.default)(protocol === "https", "Must use https connections in UI extensions");
            const fetchOptions = {
              method,
              headers
            };
            if (requestData) {
              fetchOptions.body = requestData;
            }
            const authHeader = headers.Authorization;
            if (authHeader && matchesStripeKey.test(authHeader)) {
              throw new Error("Do not use actual stripe keys when using the Stripe JS API client with UI extesions.\n\n Instead, use `STRIPE_API_KEY` from `@stripe/ui-extension-sdk/http_client` as a placeholder.");
            }
            const resp = yield this._fetch(path, fetchOptions);
            return new StripeAppsHttpResponse(resp);
          });
        }
      };
      exports.StripeAppsHttpClient = StripeAppsHttpClient;
      exports.STRIPE_API_KEY = "DO_NOT_PASS_A_REAL_API_KEY";
      var createHttpClient = () => new StripeAppsHttpClient(apiFetch_1.stripeApiFetch);
      exports.createHttpClient = createHttpClient;
      exports.AUTHORIZATION_HEADER = "Authorization";
      exports.AUTHORIZATION_VALUE = `Bearer ${exports.STRIPE_API_KEY}`;
    }
  });

  // node_modules/@stripe/ui-extension-sdk/utils/getDashboardUserEmail.js
  var require_getDashboardUserEmail = __commonJS({
    "node_modules/@stripe/ui-extension-sdk/utils/getDashboardUserEmail.js"(exports) {
      "use strict";
      var __awaiter = exports && exports.__awaiter || function(thisArg, _arguments, P, generator) {
        function adopt(value) {
          return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
          });
        }
        return new (P || (P = Promise))(function(resolve, reject) {
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
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
          }
          step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.getDashboardUserEmail = void 0;
      var _endpoint_1 = require_endpoint();
      var httpClient_1 = require_httpClient();
      var getDashboardUserEmail = () => __awaiter(void 0, void 0, void 0, function* () {
        try {
          const resp = yield (0, _endpoint_1.getHostEndpoint)().call.stripeApiFetch("/v1/user/email", {
            headers: {
              [httpClient_1.AUTHORIZATION_HEADER]: httpClient_1.AUTHORIZATION_VALUE
            }
          });
          if (resp.ok) {
            resp.email = resp.json.email;
            return resp;
          }
          return Promise.reject(resp);
        } catch (e) {
          console.error("Error getting dashboard user email", e);
          throw e;
        }
      });
      exports.getDashboardUserEmail = getDashboardUserEmail;
    }
  });

  // node_modules/@stripe/ui-extension-sdk/utils/getUserAuthorizedPermissions.js
  var require_getUserAuthorizedPermissions = __commonJS({
    "node_modules/@stripe/ui-extension-sdk/utils/getUserAuthorizedPermissions.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.getUserAuthorizedPermissions = void 0;
      var _endpoint_1 = require_endpoint();
      var getUserAuthorizedPermissions = () => {
        return (0, _endpoint_1.getHostEndpoint)().call.getUserAuthorizedPermissions();
      };
      exports.getUserAuthorizedPermissions = getUserAuthorizedPermissions;
    }
  });

  // node_modules/@stripe/ui-extension-sdk/utils/isPermissionAuthorized.js
  var require_isPermissionAuthorized = __commonJS({
    "node_modules/@stripe/ui-extension-sdk/utils/isPermissionAuthorized.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.isPermissionAuthorized = void 0;
      var _endpoint_1 = require_endpoint();
      var isPermissionAuthorized = (permission) => {
        return (0, _endpoint_1.getHostEndpoint)().call.isPermissionAuthorized(permission);
      };
      exports.isPermissionAuthorized = isPermissionAuthorized;
    }
  });

  // node_modules/@stripe/ui-extension-sdk/utils/isSourceInAuthorizedCSP.js
  var require_isSourceInAuthorizedCSP = __commonJS({
    "node_modules/@stripe/ui-extension-sdk/utils/isSourceInAuthorizedCSP.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.isSourceInAuthorizedCSP = void 0;
      var _endpoint_1 = require_endpoint();
      var isSourceInAuthorizedCSP = (source) => {
        return (0, _endpoint_1.getHostEndpoint)().call.isSourceInAuthorizedCSP(source);
      };
      exports.isSourceInAuthorizedCSP = isSourceInAuthorizedCSP;
    }
  });

  // node_modules/@stripe/ui-extension-sdk/utils/oauth.js
  var require_oauth = __commonJS({
    "node_modules/@stripe/ui-extension-sdk/utils/oauth.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.createOAuthState = void 0;
      var _endpoint_1 = require_endpoint();
      var createOAuthState = (state = "") => {
        return (0, _endpoint_1.getHostEndpoint)().call.createOAuthState(state);
      };
      exports.createOAuthState = createOAuthState;
    }
  });

  // node_modules/@stripe/ui-extension-sdk/utils/platformRpcs.js
  var require_platformRpcs = __commonJS({
    "node_modules/@stripe/ui-extension-sdk/utils/platformRpcs.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
    }
  });

  // node_modules/@stripe/ui-extension-sdk/utils/signature.js
  var require_signature = __commonJS({
    "node_modules/@stripe/ui-extension-sdk/utils/signature.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.fetchStripeSignature = void 0;
      var _endpoint_1 = require_endpoint();
      var fetchStripeSignature2 = (additionalPayload) => {
        return (0, _endpoint_1.getHostEndpoint)().call.fetchStripeSignature(additionalPayload);
      };
      exports.fetchStripeSignature = fetchStripeSignature2;
    }
  });

  // node_modules/@stripe/ui-extension-sdk/utils/toast.js
  var require_toast = __commonJS({
    "node_modules/@stripe/ui-extension-sdk/utils/toast.js"(exports) {
      "use strict";
      var __awaiter = exports && exports.__awaiter || function(thisArg, _arguments, P, generator) {
        function adopt(value) {
          return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
          });
        }
        return new (P || (P = Promise))(function(resolve, reject) {
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
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
          }
          step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.showToast = void 0;
      var _endpoint_1 = require_endpoint();
      var showToast = (message_1, ...args_1) => __awaiter(void 0, [message_1, ...args_1], void 0, function* (message, options = {}) {
        const endpoint = (0, _endpoint_1.getHostEndpoint)();
        return endpoint.call.showToast(message, options);
      });
      exports.showToast = showToast;
    }
  });

  // node_modules/@stripe/ui-extension-sdk/utils/index.js
  var require_utils = __commonJS({
    "node_modules/@stripe/ui-extension-sdk/utils/index.js"(exports) {
      "use strict";
      var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
          desc = { enumerable: true, get: function() {
            return m[k];
          } };
        }
        Object.defineProperty(o, k2, desc);
      } : function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        o[k2] = m[k];
      });
      var __exportStar = exports && exports.__exportStar || function(m, exports2) {
        for (var p in m)
          if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
            __createBinding(exports2, m, p);
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      __exportStar(require_endpoint(), exports);
      __exportStar(require_apiFetch(), exports);
      __exportStar(require_clipboard(), exports);
      __exportStar(require_context(), exports);
      __exportStar(require_getDashboardUserEmail(), exports);
      __exportStar(require_getUserAuthorizedPermissions(), exports);
      __exportStar(require_httpClient(), exports);
      __exportStar(require_isPermissionAuthorized(), exports);
      __exportStar(require_isSourceInAuthorizedCSP(), exports);
      __exportStar(require_oauth(), exports);
      __exportStar(require_platformRpcs(), exports);
      __exportStar(require_signature(), exports);
      __exportStar(require_toast(), exports);
    }
  });

  // .build/manifest.js
  var manifest_exports = {};
  __export(manifest_exports, {
    BUILD_TIME: () => BUILD_TIME,
    ProductListView: () => ProductListView_default,
    default: () => manifest_default
  });

  // src/views/ProductListView.tsx
  var import_ui4 = __toESM(require_ui());

  // src/api.ts
  var import_utils = __toESM(require_utils());
  var API_BASE_URL = true ? "http://localhost:8787" : "https://stripeworker.workers.dev";
  function createApiClient(options) {
    const baseBody = {
      user_id: options.userId,
      account_id: options.accountId
    };
    return {
      post(_0) {
        return __async(this, arguments, function* (path, body = {}) {
          var _a2;
          const requestBody = __spreadValues(__spreadValues({}, baseBody), body);
          const signature = yield (0, import_utils.fetchStripeSignature)();
          const response = yield fetch(`${API_BASE_URL}${path}`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Stripe-Signature": signature
            },
            body: JSON.stringify(requestBody)
          });
          if (!response.ok) {
            const error = yield response.json().catch(() => ({ error: "Request failed" }));
            throw new ApiError(response.status, (_a2 = error.error) != null ? _a2 : "Request failed");
          }
          return response.json();
        });
      },
      get(_0) {
        return __async(this, arguments, function* (path, params = {}) {
          var _a2;
          const signature = yield (0, import_utils.fetchStripeSignature)();
          const searchParams = new URLSearchParams(__spreadProps(__spreadValues({}, params), {
            account_id: options.accountId
          }));
          const response = yield fetch(`${API_BASE_URL}${path}?${searchParams}`, {
            method: "GET",
            headers: {
              "Stripe-Signature": signature
            }
          });
          if (!response.ok) {
            const error = yield response.json().catch(() => ({ error: "Request failed" }));
            throw new ApiError(response.status, (_a2 = error.error) != null ? _a2 : "Request failed");
          }
          return response.json();
        });
      },
      delete(path) {
        return __async(this, null, function* () {
          var _a2;
          const signature = yield (0, import_utils.fetchStripeSignature)();
          const response = yield fetch(`${API_BASE_URL}${path}?account_id=${options.accountId}`, {
            method: "DELETE",
            headers: {
              "Stripe-Signature": signature
            }
          });
          if (!response.ok) {
            const error = yield response.json().catch(() => ({ error: "Request failed" }));
            throw new ApiError(response.status, (_a2 = error.error) != null ? _a2 : "Request failed");
          }
          return response.json();
        });
      },
      uploadFile(uploadUrl, file) {
        return __async(this, null, function* () {
          const response = yield fetch(uploadUrl, {
            method: "PUT",
            headers: {
              "Content-Type": file.type || "text/csv"
            },
            body: file
          });
          if (!response.ok) {
            throw new ApiError(response.status, "File upload failed");
          }
        });
      }
    };
  }
  var ApiError = class extends Error {
    constructor(status, message) {
      super(message);
      this.status = status;
      this.name = "ApiError";
    }
  };

  // src/components/ExportButton.tsx
  var import_react = __require("react");
  var import_ui = __toESM(require_ui());
  var import_jsx_runtime = __require("react/jsx-runtime");
  var ExportButton = ({ api }) => {
    var _a;
    const [isExporting, setIsExporting] = (0, import_react.useState)(false);
    const [currentJob, setCurrentJob] = (0, import_react.useState)(null);
    const [error, setError] = (0, import_react.useState)(null);
    const [downloadUrl, setDownloadUrl] = (0, import_react.useState)(null);
    const handleExport = () => __async(void 0, null, function* () {
      setIsExporting(true);
      setError(null);
      setDownloadUrl(null);
      setCurrentJob(null);
      try {
        const job = yield api.post("/export/start");
        setCurrentJob(job);
        if (job.status === "processing") {
          yield pollJobCompletion(job.id);
        } else if (job.status === "completed") {
          yield fetchDownloadUrl(job.id);
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : "Export failed");
      } finally {
        setIsExporting(false);
      }
    });
    const pollJobCompletion = (jobId) => __async(void 0, null, function* () {
      const maxAttempts = 60;
      let attempts = 0;
      while (attempts < maxAttempts) {
        yield new Promise((resolve) => setTimeout(resolve, 5e3));
        try {
          const job = yield api.get(`/jobs/${jobId}`);
          setCurrentJob(job);
          if (job.status === "completed") {
            yield fetchDownloadUrl(jobId);
            return;
          } else if (job.status === "failed" || job.status === "cancelled") {
            setError(`Export ${job.status}`);
            return;
          }
        } catch (err) {
          console.error("Poll error:", err);
        }
        attempts++;
      }
      setError("Export timed out");
    });
    const fetchDownloadUrl = (jobId) => __async(void 0, null, function* () {
      try {
        const response = yield api.get(`/export/${jobId}/download`);
        setDownloadUrl(response.downloadUrl);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to get download link");
      }
    });
    const handleDownload = () => {
      if (downloadUrl) {
        window.open(downloadUrl, "_blank");
      }
    };
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_ui.Box, {
      css: { stack: "y", gap: "small" },
      children: [
        error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_ui.Banner, {
          type: "critical",
          title: "Export Error",
          description: error,
          onDismiss: () => setError(null)
        }),
        currentJob && currentJob.status === "processing" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_ui.Box, {
          css: { stack: "x", gap: "small", alignY: "center" },
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_ui.Spinner, {
              size: "small"
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_ui.Box, {
              css: { color: "secondary" },
              children: [
                "Exporting ",
                currentJob.processedRows,
                " products..."
              ]
            })
          ]
        }),
        downloadUrl && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_ui.Banner, {
          type: "default",
          title: "Export Complete",
          description: `Successfully exported ${(_a = currentJob == null ? void 0 : currentJob.totalRows) != null ? _a : 0} products.`,
          actions: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_ui.Button, {
            onPress: handleDownload,
            children: "Download CSV"
          })
        }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_ui.Button, {
          type: "primary",
          onPress: handleExport,
          disabled: isExporting,
          children: isExporting ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_ui.Box, {
            css: { stack: "x", gap: "xsmall", alignY: "center" },
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_ui.Spinner, {
                size: "small"
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                children: "Exporting..."
              })
            ]
          }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_ui.Box, {
            css: { stack: "x", gap: "xsmall", alignY: "center" },
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_ui.Icon, {
                name: "download"
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                children: "Export Products to CSV"
              })
            ]
          })
        })
      ]
    });
  };
  var ExportButton_default = ExportButton;

  // src/components/ImportUpload.tsx
  var import_react2 = __require("react");
  var import_ui2 = __toESM(require_ui());
  var import_jsx_runtime2 = __require("react/jsx-runtime");
  var ImportUpload = ({ api }) => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i;
    const [selectedFile, setSelectedFile] = (0, import_react2.useState)(null);
    const [isUploading, setIsUploading] = (0, import_react2.useState)(false);
    const [isProcessing, setIsProcessing] = (0, import_react2.useState)(false);
    const [currentJob, setCurrentJob] = (0, import_react2.useState)(null);
    const [error, setError] = (0, import_react2.useState)(null);
    const [dryRun, setDryRun] = (0, import_react2.useState)(false);
    const fileInputRef = (0, import_react2.useRef)(null);
    const handleFileSelect = () => {
      var _a2;
      (_a2 = fileInputRef.current) == null ? void 0 : _a2.click();
    };
    const handleFileChange = (event) => {
      var _a2;
      const input = event.target;
      const file = (_a2 = input.files) == null ? void 0 : _a2[0];
      if (file) {
        if (!file.name.toLowerCase().endsWith(".csv")) {
          setError("Please select a CSV file");
          return;
        }
        setSelectedFile(file);
        setError(null);
        setCurrentJob(null);
      }
    };
    const handleUpload = () => __async(void 0, null, function* () {
      if (!selectedFile)
        return;
      setIsUploading(true);
      setError(null);
      try {
        const uploadResponse = yield api.post("/import/upload-url", {
          filename: selectedFile.name,
          contentType: selectedFile.type || "text/csv"
        });
        yield api.uploadFile(uploadResponse.uploadUrl, selectedFile);
        setIsProcessing(true);
        const job = yield api.post(`/import/${uploadResponse.jobId}/start`, {
          dryRun
        });
        setCurrentJob(job);
        yield processChunks(uploadResponse.jobId);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Upload failed");
      } finally {
        setIsUploading(false);
        setIsProcessing(false);
      }
    });
    const processChunks = (jobId) => __async(void 0, null, function* () {
      const maxAttempts = 600;
      let attempts = 0;
      while (attempts < maxAttempts) {
        try {
          const job = yield api.post(`/import/${jobId}/process`, {
            batchSize: 100
          });
          setCurrentJob(job);
          if (job.status === "completed" || job.status === "failed" || job.status === "cancelled") {
            return;
          }
          yield new Promise((resolve) => setTimeout(resolve, 100));
        } catch (err) {
          console.error("Chunk processing error:", err);
          yield new Promise((resolve) => setTimeout(resolve, 3e3));
        }
        attempts++;
      }
      setError("Import timed out");
    });
    const handleCancel = () => __async(void 0, null, function* () {
      if (!currentJob || currentJob.status !== "processing")
        return;
      try {
        yield api.delete(`/jobs/${currentJob.id}`);
        setCurrentJob((prev) => prev ? __spreadProps(__spreadValues({}, prev), { status: "cancelled" }) : null);
      } catch (err) {
        console.error("Cancel error:", err);
      }
    });
    const getProgress = () => {
      if (!currentJob || currentJob.totalRows === 0)
        return 0;
      return Math.round(currentJob.processedRows / currentJob.totalRows * 100);
    };
    return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(import_ui2.Box, {
      css: { stack: "y", gap: "small" },
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("input", {
          ref: fileInputRef,
          type: "file",
          accept: ".csv",
          style: { display: "none" },
          onChange: handleFileChange
        }),
        error && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_ui2.Banner, {
          type: "critical",
          title: "Import Error",
          description: error,
          onDismiss: () => setError(null)
        }),
        !isProcessing && !currentJob && /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(import_ui2.Box, {
          css: { stack: "y", gap: "small" },
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(import_ui2.Box, {
              css: { stack: "x", gap: "small", alignY: "center" },
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(import_ui2.Button, {
                  type: "secondary",
                  onPress: handleFileSelect,
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_ui2.Icon, {
                      name: "document"
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", {
                      children: "Select CSV File"
                    })
                  ]
                }),
                selectedFile && /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(import_ui2.Box, {
                  css: { color: "secondary" },
                  children: [
                    selectedFile.name,
                    " (",
                    Math.round(selectedFile.size / 1024),
                    " KB)"
                  ]
                })
              ]
            }),
            selectedFile && /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(import_ui2.Box, {
              css: { stack: "y", gap: "small" },
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_ui2.Checkbox, {
                  label: "Dry run (preview changes without applying)",
                  checked: dryRun,
                  onChange: (e) => setDryRun(e.target.checked)
                }),
                /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_ui2.Button, {
                  type: "primary",
                  onPress: handleUpload,
                  disabled: isUploading,
                  children: isUploading ? /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(import_ui2.Box, {
                    css: { stack: "x", gap: "xsmall", alignY: "center" },
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_ui2.Spinner, {
                        size: "small"
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", {
                        children: "Uploading..."
                      })
                    ]
                  }) : /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(import_ui2.Box, {
                    css: { stack: "x", gap: "xsmall", alignY: "center" },
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_ui2.Icon, {
                        name: "upload"
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", {
                        children: dryRun ? "Preview Import" : "Import Products"
                      })
                    ]
                  })
                })
              ]
            })
          ]
        }),
        isProcessing && currentJob && /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(import_ui2.Box, {
          css: { stack: "y", gap: "small" },
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(import_ui2.Box, {
              css: { stack: "x", gap: "small", alignY: "center" },
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_ui2.Spinner, {
                  size: "small"
                }),
                /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(import_ui2.Box, {
                  children: [
                    dryRun ? "Previewing" : "Importing",
                    ": ",
                    getProgress(),
                    "% (",
                    currentJob.processedRows,
                    "/",
                    currentJob.totalRows,
                    " rows)"
                  ]
                })
              ]
            }),
            currentJob.type === "import" && /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(import_ui2.Box, {
              css: { color: "secondary", font: "caption" },
              children: [
                "Created: ",
                (_a = currentJob.createdCount) != null ? _a : 0,
                " | Updated: ",
                (_b = currentJob.updatedCount) != null ? _b : 0,
                " | Skipped: ",
                (_c = currentJob.skippedCount) != null ? _c : 0
              ]
            }),
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_ui2.Button, {
              type: "destructive",
              onPress: handleCancel,
              children: "Cancel"
            })
          ]
        }),
        currentJob && currentJob.status === "completed" && !isProcessing && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_ui2.Banner, {
          type: "default",
          title: dryRun ? "Dry Run Complete" : "Import Complete",
          description: dryRun ? `Preview: Would create ${(_d = currentJob.createdCount) != null ? _d : 0}, update ${(_e = currentJob.updatedCount) != null ? _e : 0}, skip ${(_f = currentJob.skippedCount) != null ? _f : 0} products.` : `Successfully created ${(_g = currentJob.createdCount) != null ? _g : 0}, updated ${(_h = currentJob.updatedCount) != null ? _h : 0} products. ${(_i = currentJob.skippedCount) != null ? _i : 0} skipped.`,
          actions: dryRun ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_ui2.Button, {
            onPress: () => {
              setDryRun(false);
              setCurrentJob(null);
            },
            children: "Proceed with Import"
          }) : void 0
        })
      ]
    });
  };
  var ImportUpload_default = ImportUpload;

  // src/components/JobProgress.tsx
  var import_react3 = __require("react");
  var import_ui3 = __toESM(require_ui());
  var import_jsx_runtime3 = __require("react/jsx-runtime");
  var JobProgress = ({ api }) => {
    const [jobs, setJobs] = (0, import_react3.useState)([]);
    const [isLoading, setIsLoading] = (0, import_react3.useState)(true);
    const [error, setError] = (0, import_react3.useState)(null);
    (0, import_react3.useEffect)(() => {
      let isMounted = true;
      let pollInterval = null;
      const fetchJobs = () => __async(void 0, null, function* () {
        try {
          const response = yield api.get("/jobs", { limit: "10" });
          if (isMounted) {
            setJobs(response.jobs);
            setIsLoading(false);
          }
        } catch (err) {
          if (isMounted) {
            setError(err instanceof Error ? err.message : "Failed to load jobs");
            setIsLoading(false);
          }
        }
      });
      fetchJobs();
      pollInterval = setInterval(() => {
        const hasActiveJobs = jobs.some(
          (j) => j.status === "pending" || j.status === "processing"
        );
        if (hasActiveJobs) {
          fetchJobs();
        }
      }, 5e3);
      return () => {
        isMounted = false;
        if (pollInterval) {
          clearInterval(pollInterval);
        }
      };
    }, [api]);
    const formatDate = (dateStr) => {
      const date = new Date(dateStr);
      return date.toLocaleString();
    };
    const getStatusBadge = (status) => {
      switch (status) {
        case "pending":
          return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_ui3.Badge, {
            type: "info",
            children: "Pending"
          });
        case "processing":
          return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_ui3.Badge, {
            type: "warning",
            children: "Processing"
          });
        case "completed":
          return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_ui3.Badge, {
            type: "positive",
            children: "Completed"
          });
        case "failed":
          return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_ui3.Badge, {
            type: "negative",
            children: "Failed"
          });
        case "cancelled":
          return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_ui3.Badge, {
            type: "info",
            children: "Cancelled"
          });
        default:
          return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_ui3.Badge, {
            type: "info",
            children: status
          });
      }
    };
    const getProgress = (job) => {
      if (job.totalRows === 0)
        return 0;
      return Math.round(job.processedRows / job.totalRows * 100);
    };
    if (isLoading) {
      return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(import_ui3.Box, {
        css: { stack: "x", gap: "small", alignY: "center" },
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_ui3.Spinner, {
            size: "small"
          }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_ui3.Box, {
            css: { color: "secondary" },
            children: "Loading jobs..."
          })
        ]
      });
    }
    if (error) {
      return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(import_ui3.Box, {
        css: { color: "critical" },
        children: [
          "Error: ",
          error
        ]
      });
    }
    if (jobs.length === 0) {
      return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_ui3.Box, {
        css: { color: "secondary" },
        children: "No recent jobs. Start an export or import to see progress here."
      });
    }
    return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_ui3.Box, {
      css: { stack: "y", gap: "small" },
      children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_ui3.List, {
        children: jobs.map((job) => {
          var _a, _b, _c;
          return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_ui3.ListItem, {
            id: job.id,
            title: /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(import_ui3.Box, {
              css: { stack: "x", gap: "small", alignY: "center" },
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_ui3.Icon, {
                  name: job.type === "export" ? "download" : "upload"
                }),
                /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", {
                  children: job.type === "export" ? "Export" : "Import"
                }),
                getStatusBadge(job.status)
              ]
            }),
            secondaryTitle: formatDate(job.createdAt),
            children: /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(import_ui3.Box, {
              css: { stack: "y", gap: "xsmall" },
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_ui3.Box, {
                  css: { color: "secondary", font: "caption" },
                  children: job.status === "processing" ? /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(import_ui3.Box, {
                    css: { stack: "x", gap: "xsmall", alignY: "center" },
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_ui3.Spinner, {
                        size: "small"
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("span", {
                        children: [
                          getProgress(job),
                          "% (",
                          job.processedRows,
                          "/",
                          job.totalRows,
                          " rows)"
                        ]
                      })
                    ]
                  }) : /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("span", {
                    children: [
                      job.processedRows,
                      " of ",
                      job.totalRows,
                      " rows"
                    ]
                  })
                }),
                job.type === "import" && job.status === "completed" && /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(import_ui3.Box, {
                  css: { color: "secondary", font: "caption" },
                  children: [
                    "Created: ",
                    (_a = job.createdCount) != null ? _a : 0,
                    ", Updated: ",
                    (_b = job.updatedCount) != null ? _b : 0,
                    ", Skipped: ",
                    (_c = job.skippedCount) != null ? _c : 0,
                    job.dryRun && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_ui3.Badge, {
                      type: "info",
                      children: "Dry Run"
                    })
                  ]
                }),
                job.errorCount > 0 && /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(import_ui3.Box, {
                  css: { color: "attention", font: "caption" },
                  children: [
                    job.errorCount,
                    " errors"
                  ]
                })
              ]
            })
          }, job.id);
        })
      })
    });
  };
  var JobProgress_default = JobProgress;

  // src/views/ProductListView.tsx
  var import_jsx_runtime4 = __require("react/jsx-runtime");
  var ProductListView = ({ userContext, environment: _environment }) => {
    var _a;
    if (!(userContext == null ? void 0 : userContext.id) || !((_a = userContext == null ? void 0 : userContext.account) == null ? void 0 : _a.id)) {
      return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_ui4.ContextView, {
        title: "Product CSV Import/Export",
        children: /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(import_ui4.Box, {
          css: { padding: "medium" },
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_ui4.Spinner, {
              size: "small"
            }),
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_ui4.Box, {
              css: { marginTop: "small" },
              children: "Loading user context..."
            })
          ]
        })
      });
    }
    const api = createApiClient({
      userId: userContext.id,
      accountId: userContext.account.id
    });
    return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_ui4.ContextView, {
      title: "Product CSV Import/Export",
      description: "Export products to CSV or import products from a CSV file",
      children: /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(import_ui4.Box, {
        css: { padding: "medium", stack: "y", gap: "large" },
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(import_ui4.Box, {
            css: { stack: "y", gap: "small" },
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_ui4.Box, {
                css: { font: "heading", fontWeight: "semibold" },
                children: "Export Products"
              }),
              /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_ui4.Box, {
                css: { color: "secondary" },
                children: "Download all your products as a CSV file for backup or editing."
              }),
              /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(ExportButton_default, {
                api
              })
            ]
          }),
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_ui4.Divider, {}),
          /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(import_ui4.Box, {
            css: { stack: "y", gap: "small" },
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_ui4.Box, {
                css: { font: "heading", fontWeight: "semibold" },
                children: "Import Products"
              }),
              /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_ui4.Box, {
                css: { color: "secondary" },
                children: "Upload a CSV file to create new products or update existing ones."
              }),
              /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(ImportUpload_default, {
                api
              })
            ]
          }),
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_ui4.Divider, {}),
          /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(import_ui4.Box, {
            css: { stack: "y", gap: "small" },
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_ui4.Box, {
                css: { font: "heading", fontWeight: "semibold" },
                children: "Recent Jobs"
              }),
              /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(JobProgress_default, {
                api
              })
            ]
          })
        ]
      })
    });
  };
  var ProductListView_default = ProductListView;

  // .build/manifest.js
  __reExport(manifest_exports, __toESM(require_version()));
  var BUILD_TIME = "2026-02-14 20:40:00.526044 +0100 CET m=+0.059735201";
  var manifest_default = {
    "connect_permissions": null,
    "icon": "./icon.png",
    "id": "com.example.stripeworker-csv",
    "name": "Product CSV Import-Export",
    "permissions": [
      {
        "permission": "product_read",
        "purpose": "Export products to CSV"
      },
      {
        "permission": "product_write",
        "purpose": "Import products from CSV"
      }
    ],
    "post_install_action": {
      "type": "external",
      "url": "https://github.com/your-org/stripeworker#readme"
    },
    "stripe_api_access_type": "platform",
    "ui_extension": {
      "views": [
        {
          "component": "ProductListView",
          "viewport": "stripe.dashboard.product.list"
        }
      ]
    },
    "version": "0.0.1"
  };
  return __toCommonJS(manifest_exports);
})();
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL0BzdHJpcGUvc3JjL3ZlcnNpb24udHMiLCAiLi4vbm9kZV9tb2R1bGVzL0BzdHJpcGUvc3JjL3VpL2luZGV4LnRzeCIsICIuLi9ub2RlX21vZHVsZXMvaW52YXJpYW50L2Jyb3dzZXIuanMiLCAiLi4vbm9kZV9tb2R1bGVzL0BzdHJpcGUvc3JjL3V0aWxzL19lbmRwb2ludC50cyIsICIuLi9ub2RlX21vZHVsZXMvQHN0cmlwZS9zcmMvdXRpbHMvYXBpRmV0Y2gudHMiLCAiLi4vbm9kZV9tb2R1bGVzL0BzdHJpcGUvc3JjL3V0aWxzL2NsaXBib2FyZC50cyIsICIuLi9ub2RlX21vZHVsZXMvQHN0cmlwZS9zcmMvdXRpbHMvY29udGV4dC50cyIsICIuLi9ub2RlX21vZHVsZXMvQHN0cmlwZS9zcmMvdXRpbHMvaHR0cENsaWVudC50cyIsICIuLi9ub2RlX21vZHVsZXMvQHN0cmlwZS9zcmMvdXRpbHMvZ2V0RGFzaGJvYXJkVXNlckVtYWlsLnRzIiwgIi4uL25vZGVfbW9kdWxlcy9Ac3RyaXBlL3NyYy91dGlscy9nZXRVc2VyQXV0aG9yaXplZFBlcm1pc3Npb25zLnRzIiwgIi4uL25vZGVfbW9kdWxlcy9Ac3RyaXBlL3NyYy91dGlscy9pc1Blcm1pc3Npb25BdXRob3JpemVkLnRzIiwgIi4uL25vZGVfbW9kdWxlcy9Ac3RyaXBlL3NyYy91dGlscy9pc1NvdXJjZUluQXV0aG9yaXplZENTUC50cyIsICIuLi9ub2RlX21vZHVsZXMvQHN0cmlwZS9zcmMvdXRpbHMvb2F1dGgudHMiLCAiLi4vbm9kZV9tb2R1bGVzL0BzdHJpcGUvdWktZXh0ZW5zaW9uLXNkay91dGlscy9wbGF0Zm9ybVJwY3MuanMiLCAiLi4vbm9kZV9tb2R1bGVzL0BzdHJpcGUvc3JjL3V0aWxzL3NpZ25hdHVyZS50cyIsICIuLi9ub2RlX21vZHVsZXMvQHN0cmlwZS9zcmMvdXRpbHMvdG9hc3QudHMiLCAiLi4vbm9kZV9tb2R1bGVzL0BzdHJpcGUvc3JjL3V0aWxzL2luZGV4LnRzIiwgIm1hbmlmZXN0LmpzIiwgIi4uL3NyYy92aWV3cy9Qcm9kdWN0TGlzdFZpZXcudHN4IiwgIi4uL3NyYy9hcGkudHMiLCAiLi4vc3JjL2NvbXBvbmVudHMvRXhwb3J0QnV0dG9uLnRzeCIsICIuLi9zcmMvY29tcG9uZW50cy9JbXBvcnRVcGxvYWQudHN4IiwgIi4uL3NyYy9jb21wb25lbnRzL0pvYlByb2dyZXNzLnRzeCJdLAogICJzb3VyY2VzQ29udGVudCI6IFtudWxsLCBudWxsLCAiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbi8qKlxuICogVXNlIGludmFyaWFudCgpIHRvIGFzc2VydCBzdGF0ZSB3aGljaCB5b3VyIHByb2dyYW0gYXNzdW1lcyB0byBiZSB0cnVlLlxuICpcbiAqIFByb3ZpZGUgc3ByaW50Zi1zdHlsZSBmb3JtYXQgKG9ubHkgJXMgaXMgc3VwcG9ydGVkKSBhbmQgYXJndW1lbnRzXG4gKiB0byBwcm92aWRlIGluZm9ybWF0aW9uIGFib3V0IHdoYXQgYnJva2UgYW5kIHdoYXQgeW91IHdlcmVcbiAqIGV4cGVjdGluZy5cbiAqXG4gKiBUaGUgaW52YXJpYW50IG1lc3NhZ2Ugd2lsbCBiZSBzdHJpcHBlZCBpbiBwcm9kdWN0aW9uLCBidXQgdGhlIGludmFyaWFudFxuICogd2lsbCByZW1haW4gdG8gZW5zdXJlIGxvZ2ljIGRvZXMgbm90IGRpZmZlciBpbiBwcm9kdWN0aW9uLlxuICovXG5cbnZhciBpbnZhcmlhbnQgPSBmdW5jdGlvbihjb25kaXRpb24sIGZvcm1hdCwgYSwgYiwgYywgZCwgZSwgZikge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmIChmb3JtYXQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdpbnZhcmlhbnQgcmVxdWlyZXMgYW4gZXJyb3IgbWVzc2FnZSBhcmd1bWVudCcpO1xuICAgIH1cbiAgfVxuXG4gIGlmICghY29uZGl0aW9uKSB7XG4gICAgdmFyIGVycm9yO1xuICAgIGlmIChmb3JtYXQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgZXJyb3IgPSBuZXcgRXJyb3IoXG4gICAgICAgICdNaW5pZmllZCBleGNlcHRpb24gb2NjdXJyZWQ7IHVzZSB0aGUgbm9uLW1pbmlmaWVkIGRldiBlbnZpcm9ubWVudCAnICtcbiAgICAgICAgJ2ZvciB0aGUgZnVsbCBlcnJvciBtZXNzYWdlIGFuZCBhZGRpdGlvbmFsIGhlbHBmdWwgd2FybmluZ3MuJ1xuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGFyZ3MgPSBbYSwgYiwgYywgZCwgZSwgZl07XG4gICAgICB2YXIgYXJnSW5kZXggPSAwO1xuICAgICAgZXJyb3IgPSBuZXcgRXJyb3IoXG4gICAgICAgIGZvcm1hdC5yZXBsYWNlKC8lcy9nLCBmdW5jdGlvbigpIHsgcmV0dXJuIGFyZ3NbYXJnSW5kZXgrK107IH0pXG4gICAgICApO1xuICAgICAgZXJyb3IubmFtZSA9ICdJbnZhcmlhbnQgVmlvbGF0aW9uJztcbiAgICB9XG5cbiAgICBlcnJvci5mcmFtZXNUb1BvcCA9IDE7IC8vIHdlIGRvbid0IGNhcmUgYWJvdXQgaW52YXJpYW50J3Mgb3duIGZyYW1lXG4gICAgdGhyb3cgZXJyb3I7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gaW52YXJpYW50O1xuIiwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cGxhdGZvcm1ScGNzLmpzLm1hcCIsIG51bGwsIG51bGwsIG51bGwsICIvLyBBVVRPR0VORVJBVEVEIC0gRE8gTk9UIE1PRElGWVxuaW1wb3J0IFByb2R1Y3RMaXN0VmlldyBmcm9tICcuLi9zcmMvdmlld3MvUHJvZHVjdExpc3RWaWV3JztcblxuZXhwb3J0ICogZnJvbSAnQHN0cmlwZS91aS1leHRlbnNpb24tc2RrL3ZlcnNpb24nO1xuZXhwb3J0IGNvbnN0IEJVSUxEX1RJTUUgPSAnMjAyNi0wMi0xNCAyMDo0MDowMC41MjYwNDQgKzAxMDAgQ0VUIG09KzAuMDU5NzM1MjAxJztcblxuZXhwb3J0IHsgXG4gIFByb2R1Y3RMaXN0Vmlld1x0XG4gfTtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBcImNvbm5lY3RfcGVybWlzc2lvbnNcIjogbnVsbCxcbiAgXCJpY29uXCI6IFwiLi9pY29uLnBuZ1wiLFxuICBcImlkXCI6IFwiY29tLmV4YW1wbGUuc3RyaXBld29ya2VyLWNzdlwiLFxuICBcIm5hbWVcIjogXCJQcm9kdWN0IENTViBJbXBvcnQtRXhwb3J0XCIsXG4gIFwicGVybWlzc2lvbnNcIjogW1xuICAgIHtcbiAgICAgIFwicGVybWlzc2lvblwiOiBcInByb2R1Y3RfcmVhZFwiLFxuICAgICAgXCJwdXJwb3NlXCI6IFwiRXhwb3J0IHByb2R1Y3RzIHRvIENTVlwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcInBlcm1pc3Npb25cIjogXCJwcm9kdWN0X3dyaXRlXCIsXG4gICAgICBcInB1cnBvc2VcIjogXCJJbXBvcnQgcHJvZHVjdHMgZnJvbSBDU1ZcIlxuICAgIH1cbiAgXSxcbiAgXCJwb3N0X2luc3RhbGxfYWN0aW9uXCI6IHtcbiAgICBcInR5cGVcIjogXCJleHRlcm5hbFwiLFxuICAgIFwidXJsXCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL3lvdXItb3JnL3N0cmlwZXdvcmtlciNyZWFkbWVcIlxuICB9LFxuICBcInN0cmlwZV9hcGlfYWNjZXNzX3R5cGVcIjogXCJwbGF0Zm9ybVwiLFxuICBcInVpX2V4dGVuc2lvblwiOiB7XG4gICAgXCJ2aWV3c1wiOiBbXG4gICAgICB7XG4gICAgICAgIFwiY29tcG9uZW50XCI6IFwiUHJvZHVjdExpc3RWaWV3XCIsXG4gICAgICAgIFwidmlld3BvcnRcIjogXCJzdHJpcGUuZGFzaGJvYXJkLnByb2R1Y3QubGlzdFwiXG4gICAgICB9XG4gICAgXVxuICB9LFxuICBcInZlcnNpb25cIjogXCIwLjAuMVwiXG59O1xuIiwgIi8qKlxyXG4gKiBQcm9kdWN0TGlzdFZpZXcgLSBNYWluIGFwcCB2aWV3IGVtYmVkZGVkIGluIFN0cmlwZSBEYXNoYm9hcmQgcHJvZHVjdCBsaXN0XHJcbiAqL1xyXG5cclxuaW1wb3J0IHtcclxuICBCb3gsXHJcbiAgQ29udGV4dFZpZXcsXHJcbiAgRGl2aWRlcixcclxuICBTcGlubmVyLFxyXG59IGZyb20gJ0BzdHJpcGUvdWktZXh0ZW5zaW9uLXNkay91aSc7XHJcbmltcG9ydCB0eXBlIHsgRXh0ZW5zaW9uQ29udGV4dFZhbHVlIH0gZnJvbSAnQHN0cmlwZS91aS1leHRlbnNpb24tc2RrL2NvbnRleHQnO1xyXG5cclxuaW1wb3J0IHsgY3JlYXRlQXBpQ2xpZW50IH0gZnJvbSAnLi4vYXBpJztcclxuaW1wb3J0IEV4cG9ydEJ1dHRvbiBmcm9tICcuLi9jb21wb25lbnRzL0V4cG9ydEJ1dHRvbic7XHJcbmltcG9ydCBJbXBvcnRVcGxvYWQgZnJvbSAnLi4vY29tcG9uZW50cy9JbXBvcnRVcGxvYWQnO1xyXG5pbXBvcnQgSm9iUHJvZ3Jlc3MgZnJvbSAnLi4vY29tcG9uZW50cy9Kb2JQcm9ncmVzcyc7XHJcblxyXG5pbnRlcmZhY2UgUHJvZHVjdExpc3RWaWV3UHJvcHMge1xyXG4gIHVzZXJDb250ZXh0OiBFeHRlbnNpb25Db250ZXh0VmFsdWVbJ3VzZXJDb250ZXh0J107XHJcbiAgZW52aXJvbm1lbnQ6IEV4dGVuc2lvbkNvbnRleHRWYWx1ZVsnZW52aXJvbm1lbnQnXTtcclxufVxyXG5cclxuY29uc3QgUHJvZHVjdExpc3RWaWV3ID0gKHsgdXNlckNvbnRleHQsIGVudmlyb25tZW50OiBfZW52aXJvbm1lbnQgfTogUHJvZHVjdExpc3RWaWV3UHJvcHMpID0+IHtcclxuICAvLyBFbnN1cmUgd2UgaGF2ZSByZXF1aXJlZCBjb250ZXh0XHJcbiAgaWYgKCF1c2VyQ29udGV4dD8uaWQgfHwgIXVzZXJDb250ZXh0Py5hY2NvdW50Py5pZCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPENvbnRleHRWaWV3IHRpdGxlPVwiUHJvZHVjdCBDU1YgSW1wb3J0L0V4cG9ydFwiPlxyXG4gICAgICAgIDxCb3ggY3NzPXt7IHBhZGRpbmc6ICdtZWRpdW0nIH19PlxyXG4gICAgICAgICAgPFNwaW5uZXIgc2l6ZT1cInNtYWxsXCIgLz5cclxuICAgICAgICAgIDxCb3ggY3NzPXt7IG1hcmdpblRvcDogJ3NtYWxsJyB9fT5Mb2FkaW5nIHVzZXIgY29udGV4dC4uLjwvQm94PlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8L0NvbnRleHRWaWV3PlxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIC8vIENyZWF0ZSBBUEkgY2xpZW50IHdpdGggdXNlciBjb250ZXh0XHJcbiAgY29uc3QgYXBpID0gY3JlYXRlQXBpQ2xpZW50KHtcclxuICAgIHVzZXJJZDogdXNlckNvbnRleHQuaWQsXHJcbiAgICBhY2NvdW50SWQ6IHVzZXJDb250ZXh0LmFjY291bnQuaWQsXHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Q29udGV4dFZpZXdcclxuICAgICAgdGl0bGU9XCJQcm9kdWN0IENTViBJbXBvcnQvRXhwb3J0XCJcclxuICAgICAgZGVzY3JpcHRpb249XCJFeHBvcnQgcHJvZHVjdHMgdG8gQ1NWIG9yIGltcG9ydCBwcm9kdWN0cyBmcm9tIGEgQ1NWIGZpbGVcIlxyXG4gICAgPlxyXG4gICAgICA8Qm94IGNzcz17eyBwYWRkaW5nOiAnbWVkaXVtJywgc3RhY2s6ICd5JywgZ2FwOiAnbGFyZ2UnIH19PlxyXG4gICAgICAgIHsvKiBFeHBvcnQgU2VjdGlvbiAqL31cclxuICAgICAgICA8Qm94IGNzcz17eyBzdGFjazogJ3knLCBnYXA6ICdzbWFsbCcgfX0+XHJcbiAgICAgICAgICA8Qm94IGNzcz17eyBmb250OiAnaGVhZGluZycsIGZvbnRXZWlnaHQ6ICdzZW1pYm9sZCcgfX0+XHJcbiAgICAgICAgICAgIEV4cG9ydCBQcm9kdWN0c1xyXG4gICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICA8Qm94IGNzcz17eyBjb2xvcjogJ3NlY29uZGFyeScgfX0+XHJcbiAgICAgICAgICAgIERvd25sb2FkIGFsbCB5b3VyIHByb2R1Y3RzIGFzIGEgQ1NWIGZpbGUgZm9yIGJhY2t1cCBvciBlZGl0aW5nLlxyXG4gICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICA8RXhwb3J0QnV0dG9uIGFwaT17YXBpfSAvPlxyXG4gICAgICAgIDwvQm94PlxyXG5cclxuICAgICAgICA8RGl2aWRlciAvPlxyXG5cclxuICAgICAgICB7LyogSW1wb3J0IFNlY3Rpb24gKi99XHJcbiAgICAgICAgPEJveCBjc3M9e3sgc3RhY2s6ICd5JywgZ2FwOiAnc21hbGwnIH19PlxyXG4gICAgICAgICAgPEJveCBjc3M9e3sgZm9udDogJ2hlYWRpbmcnLCBmb250V2VpZ2h0OiAnc2VtaWJvbGQnIH19PlxyXG4gICAgICAgICAgICBJbXBvcnQgUHJvZHVjdHNcclxuICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgPEJveCBjc3M9e3sgY29sb3I6ICdzZWNvbmRhcnknIH19PlxyXG4gICAgICAgICAgICBVcGxvYWQgYSBDU1YgZmlsZSB0byBjcmVhdGUgbmV3IHByb2R1Y3RzIG9yIHVwZGF0ZSBleGlzdGluZyBvbmVzLlxyXG4gICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICA8SW1wb3J0VXBsb2FkIGFwaT17YXBpfSAvPlxyXG4gICAgICAgIDwvQm94PlxyXG5cclxuICAgICAgICA8RGl2aWRlciAvPlxyXG5cclxuICAgICAgICB7LyogSm9iIFByb2dyZXNzIFNlY3Rpb24gKi99XHJcbiAgICAgICAgPEJveCBjc3M9e3sgc3RhY2s6ICd5JywgZ2FwOiAnc21hbGwnIH19PlxyXG4gICAgICAgICAgPEJveCBjc3M9e3sgZm9udDogJ2hlYWRpbmcnLCBmb250V2VpZ2h0OiAnc2VtaWJvbGQnIH19PlxyXG4gICAgICAgICAgICBSZWNlbnQgSm9ic1xyXG4gICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICA8Sm9iUHJvZ3Jlc3MgYXBpPXthcGl9IC8+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgIDwvQm94PlxyXG4gICAgPC9Db250ZXh0Vmlldz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdExpc3RWaWV3O1xyXG4iLCAiLyoqXHJcbiAqIFNpZ25lZCBBUEkgY2xpZW50IGhlbHBlciB3aXRoIGZldGNoU3RyaXBlU2lnbmF0dXJlIGZvciBTdHJpcGUgQXBwcyBVSVxyXG4gKi9cclxuXHJcbmltcG9ydCB7IGZldGNoU3RyaXBlU2lnbmF0dXJlIH0gZnJvbSAnQHN0cmlwZS91aS1leHRlbnNpb24tc2RrL3V0aWxzJztcclxuXHJcbi8vIEJhY2tlbmQgQVBJIGJhc2UgVVJMIC0gY29uZmlndXJlIGJhc2VkIG9uIGVudmlyb25tZW50XHJcbmNvbnN0IEFQSV9CQVNFX1VSTCA9IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnXHJcbiAgPyAnaHR0cDovL2xvY2FsaG9zdDo4Nzg3J1xyXG4gIDogJ2h0dHBzOi8vc3RyaXBld29ya2VyLndvcmtlcnMuZGV2JzsgLy8gUmVwbGFjZSB3aXRoIGFjdHVhbCBkZXBsb3ltZW50IFVSTFxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTaWduZWRSZXF1ZXN0Qm9keSB7XHJcbiAgdXNlcl9pZDogc3RyaW5nO1xyXG4gIGFjY291bnRfaWQ6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBBcGlDbGllbnRPcHRpb25zIHtcclxuICB1c2VySWQ6IHN0cmluZztcclxuICBhY2NvdW50SWQ6IHN0cmluZztcclxufVxyXG5cclxuLyoqXHJcbiAqIENyZWF0ZSBhbiBBUEkgY2xpZW50IHdpdGggYXV0b21hdGljIHNpZ25hdHVyZSBnZW5lcmF0aW9uXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQXBpQ2xpZW50KG9wdGlvbnM6IEFwaUNsaWVudE9wdGlvbnMpIHtcclxuICBjb25zdCBiYXNlQm9keTogU2lnbmVkUmVxdWVzdEJvZHkgPSB7XHJcbiAgICB1c2VyX2lkOiBvcHRpb25zLnVzZXJJZCxcclxuICAgIGFjY291bnRfaWQ6IG9wdGlvbnMuYWNjb3VudElkLFxyXG4gIH07XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICAvKipcclxuICAgICAqIE1ha2UgYSBzaWduZWQgUE9TVCByZXF1ZXN0XHJcbiAgICAgKi9cclxuICAgIGFzeW5jIHBvc3Q8VD4ocGF0aDogc3RyaW5nLCBib2R5OiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPiA9IHt9KTogUHJvbWlzZTxUPiB7XHJcbiAgICAgIGNvbnN0IHJlcXVlc3RCb2R5ID0geyAuLi5iYXNlQm9keSwgLi4uYm9keSB9O1xyXG4gICAgICBjb25zdCBzaWduYXR1cmUgPSBhd2FpdCBmZXRjaFN0cmlwZVNpZ25hdHVyZSgpO1xyXG5cclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHtBUElfQkFTRV9VUkx9JHtwYXRofWAsIHtcclxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgJ1N0cmlwZS1TaWduYXR1cmUnOiBzaWduYXR1cmUsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShyZXF1ZXN0Qm9keSksXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xyXG4gICAgICAgIGNvbnN0IGVycm9yID0gYXdhaXQgcmVzcG9uc2UuanNvbigpLmNhdGNoKCgpID0+ICh7IGVycm9yOiAnUmVxdWVzdCBmYWlsZWQnIH0pKTtcclxuICAgICAgICB0aHJvdyBuZXcgQXBpRXJyb3IocmVzcG9uc2Uuc3RhdHVzLCAoZXJyb3IgYXMgeyBlcnJvcj86IHN0cmluZyB9KS5lcnJvciA/PyAnUmVxdWVzdCBmYWlsZWQnKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKSBhcyBQcm9taXNlPFQ+O1xyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIE1ha2UgYSBzaWduZWQgR0VUIHJlcXVlc3QgKHNpZ25hdHVyZSBpbiBoZWFkZXIsIGFjY291bnQgaW4gcXVlcnkpXHJcbiAgICAgKi9cclxuICAgIGFzeW5jIGdldDxUPihwYXRoOiBzdHJpbmcsIHBhcmFtczogUmVjb3JkPHN0cmluZywgc3RyaW5nPiA9IHt9KTogUHJvbWlzZTxUPiB7XHJcbiAgICAgIGNvbnN0IHNpZ25hdHVyZSA9IGF3YWl0IGZldGNoU3RyaXBlU2lnbmF0dXJlKCk7XHJcbiAgICAgIGNvbnN0IHNlYXJjaFBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoe1xyXG4gICAgICAgIC4uLnBhcmFtcyxcclxuICAgICAgICBhY2NvdW50X2lkOiBvcHRpb25zLmFjY291bnRJZCxcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke0FQSV9CQVNFX1VSTH0ke3BhdGh9PyR7c2VhcmNoUGFyYW1zfWAsIHtcclxuICAgICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICdTdHJpcGUtU2lnbmF0dXJlJzogc2lnbmF0dXJlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xyXG4gICAgICAgIGNvbnN0IGVycm9yID0gYXdhaXQgcmVzcG9uc2UuanNvbigpLmNhdGNoKCgpID0+ICh7IGVycm9yOiAnUmVxdWVzdCBmYWlsZWQnIH0pKTtcclxuICAgICAgICB0aHJvdyBuZXcgQXBpRXJyb3IocmVzcG9uc2Uuc3RhdHVzLCAoZXJyb3IgYXMgeyBlcnJvcj86IHN0cmluZyB9KS5lcnJvciA/PyAnUmVxdWVzdCBmYWlsZWQnKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKSBhcyBQcm9taXNlPFQ+O1xyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIE1ha2UgYSBzaWduZWQgREVMRVRFIHJlcXVlc3RcclxuICAgICAqL1xyXG4gICAgYXN5bmMgZGVsZXRlPFQ+KHBhdGg6IHN0cmluZyk6IFByb21pc2U8VD4ge1xyXG4gICAgICBjb25zdCBzaWduYXR1cmUgPSBhd2FpdCBmZXRjaFN0cmlwZVNpZ25hdHVyZSgpO1xyXG5cclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHtBUElfQkFTRV9VUkx9JHtwYXRofT9hY2NvdW50X2lkPSR7b3B0aW9ucy5hY2NvdW50SWR9YCwge1xyXG4gICAgICAgIG1ldGhvZDogJ0RFTEVURScsXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgJ1N0cmlwZS1TaWduYXR1cmUnOiBzaWduYXR1cmUsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgY29uc3QgZXJyb3IgPSBhd2FpdCByZXNwb25zZS5qc29uKCkuY2F0Y2goKCkgPT4gKHsgZXJyb3I6ICdSZXF1ZXN0IGZhaWxlZCcgfSkpO1xyXG4gICAgICAgIHRocm93IG5ldyBBcGlFcnJvcihyZXNwb25zZS5zdGF0dXMsIChlcnJvciBhcyB7IGVycm9yPzogc3RyaW5nIH0pLmVycm9yID8/ICdSZXF1ZXN0IGZhaWxlZCcpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpIGFzIFByb21pc2U8VD47XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVXBsb2FkIGEgZmlsZSB0byBhIHByZXNpZ25lZCBVUkxcclxuICAgICAqL1xyXG4gICAgYXN5bmMgdXBsb2FkRmlsZSh1cGxvYWRVcmw6IHN0cmluZywgZmlsZTogRmlsZSk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVwbG9hZFVybCwge1xyXG4gICAgICAgIG1ldGhvZDogJ1BVVCcsXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6IGZpbGUudHlwZSB8fCAndGV4dC9jc3YnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYm9keTogZmlsZSxcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEFwaUVycm9yKHJlc3BvbnNlLnN0YXR1cywgJ0ZpbGUgdXBsb2FkIGZhaWxlZCcpO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gIH07XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBBUEkgZXJyb3IgY2xhc3NcclxuICovXHJcbmV4cG9ydCBjbGFzcyBBcGlFcnJvciBleHRlbmRzIEVycm9yIHtcclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHB1YmxpYyByZWFkb25seSBzdGF0dXM6IG51bWJlcixcclxuICAgIG1lc3NhZ2U6IHN0cmluZ1xyXG4gICkge1xyXG4gICAgc3VwZXIobWVzc2FnZSk7XHJcbiAgICB0aGlzLm5hbWUgPSAnQXBpRXJyb3InO1xyXG4gIH1cclxufVxyXG5cclxuLy8gSm9iIHR5cGVzIGZvciBBUEkgcmVzcG9uc2VzXHJcbmV4cG9ydCBpbnRlcmZhY2UgSm9iIHtcclxuICBpZDogc3RyaW5nO1xyXG4gIHR5cGU6ICdpbXBvcnQnIHwgJ2V4cG9ydCc7XHJcbiAgc3RhdHVzOiAncGVuZGluZycgfCAncHJvY2Vzc2luZycgfCAnY29tcGxldGVkJyB8ICdmYWlsZWQnIHwgJ2NhbmNlbGxlZCc7XHJcbiAgdG90YWxSb3dzOiBudW1iZXI7XHJcbiAgcHJvY2Vzc2VkUm93czogbnVtYmVyO1xyXG4gIGNyZWF0ZWRDb3VudD86IG51bWJlcjtcclxuICB1cGRhdGVkQ291bnQ/OiBudW1iZXI7XHJcbiAgc2tpcHBlZENvdW50PzogbnVtYmVyO1xyXG4gIGVycm9yQ291bnQ6IG51bWJlcjtcclxuICBkcnlSdW4/OiBib29sZWFuO1xyXG4gIGNyZWF0ZWRBdDogc3RyaW5nO1xyXG4gIHVwZGF0ZWRBdDogc3RyaW5nO1xyXG4gIGNvbXBsZXRlZEF0Pzogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFVwbG9hZFVybFJlc3BvbnNlIHtcclxuICB1cGxvYWRVcmw6IHN0cmluZztcclxuICBqb2JJZDogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIERvd25sb2FkVXJsUmVzcG9uc2Uge1xyXG4gIGRvd25sb2FkVXJsOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRXJyb3JzUmVzcG9uc2Uge1xyXG4gIGRvd25sb2FkVXJsOiBzdHJpbmc7XHJcbiAgZXJyb3JDb3VudDogbnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEpvYkxpc3RSZXNwb25zZSB7XHJcbiAgam9iczogSm9iW107XHJcbn1cclxuIiwgIi8qKlxyXG4gKiBFeHBvcnRCdXR0b24gY29tcG9uZW50IC0gdHJpZ2dlcnMgL2V4cG9ydC9zdGFydFxyXG4gKi9cclxuXHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge1xyXG4gIEJveCxcclxuICBCdXR0b24sXHJcbiAgSWNvbixcclxuICBTcGlubmVyLFxyXG4gIEJhbm5lcixcclxufSBmcm9tICdAc3RyaXBlL3VpLWV4dGVuc2lvbi1zZGsvdWknO1xyXG5pbXBvcnQgdHlwZSB7IGNyZWF0ZUFwaUNsaWVudCwgSm9iIH0gZnJvbSAnLi4vYXBpJztcclxuXHJcbmludGVyZmFjZSBFeHBvcnRCdXR0b25Qcm9wcyB7XHJcbiAgYXBpOiBSZXR1cm5UeXBlPHR5cGVvZiBjcmVhdGVBcGlDbGllbnQ+O1xyXG59XHJcblxyXG5jb25zdCBFeHBvcnRCdXR0b24gPSAoeyBhcGkgfTogRXhwb3J0QnV0dG9uUHJvcHMpID0+IHtcclxuICBjb25zdCBbaXNFeHBvcnRpbmcsIHNldElzRXhwb3J0aW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbY3VycmVudEpvYiwgc2V0Q3VycmVudEpvYl0gPSB1c2VTdGF0ZTxKb2IgfCBudWxsPihudWxsKTtcclxuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlPHN0cmluZyB8IG51bGw+KG51bGwpO1xyXG4gIGNvbnN0IFtkb3dubG9hZFVybCwgc2V0RG93bmxvYWRVcmxdID0gdXNlU3RhdGU8c3RyaW5nIHwgbnVsbD4obnVsbCk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUV4cG9ydCA9IGFzeW5jICgpID0+IHtcclxuICAgIHNldElzRXhwb3J0aW5nKHRydWUpO1xyXG4gICAgc2V0RXJyb3IobnVsbCk7XHJcbiAgICBzZXREb3dubG9hZFVybChudWxsKTtcclxuICAgIHNldEN1cnJlbnRKb2IobnVsbCk7XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgLy8gU3RhcnQgZXhwb3J0IGpvYlxyXG4gICAgICBjb25zdCBqb2IgPSBhd2FpdCBhcGkucG9zdDxKb2I+KCcvZXhwb3J0L3N0YXJ0Jyk7XHJcbiAgICAgIHNldEN1cnJlbnRKb2Ioam9iKTtcclxuXHJcbiAgICAgIC8vIFBvbGwgZm9yIGNvbXBsZXRpb24gaWYgbm90IGFscmVhZHkgY29tcGxldGVcclxuICAgICAgaWYgKGpvYi5zdGF0dXMgPT09ICdwcm9jZXNzaW5nJykge1xyXG4gICAgICAgIGF3YWl0IHBvbGxKb2JDb21wbGV0aW9uKGpvYi5pZCk7XHJcbiAgICAgIH0gZWxzZSBpZiAoam9iLnN0YXR1cyA9PT0gJ2NvbXBsZXRlZCcpIHtcclxuICAgICAgICBhd2FpdCBmZXRjaERvd25sb2FkVXJsKGpvYi5pZCk7XHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICBzZXRFcnJvcihlcnIgaW5zdGFuY2VvZiBFcnJvciA/IGVyci5tZXNzYWdlIDogJ0V4cG9ydCBmYWlsZWQnKTtcclxuICAgIH0gZmluYWxseSB7XHJcbiAgICAgIHNldElzRXhwb3J0aW5nKGZhbHNlKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBwb2xsSm9iQ29tcGxldGlvbiA9IGFzeW5jIChqb2JJZDogc3RyaW5nKSA9PiB7XHJcbiAgICBjb25zdCBtYXhBdHRlbXB0cyA9IDYwOyAvLyA1IG1pbnV0ZXMgbWF4IGF0IDUgc2Vjb25kIGludGVydmFsc1xyXG4gICAgbGV0IGF0dGVtcHRzID0gMDtcclxuXHJcbiAgICB3aGlsZSAoYXR0ZW1wdHMgPCBtYXhBdHRlbXB0cykge1xyXG4gICAgICBhd2FpdCBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgNTAwMCkpOyAvLyBXYWl0IDUgc2Vjb25kc1xyXG4gICAgICBcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBqb2IgPSBhd2FpdCBhcGkuZ2V0PEpvYj4oYC9qb2JzLyR7am9iSWR9YCk7XHJcbiAgICAgICAgc2V0Q3VycmVudEpvYihqb2IpO1xyXG5cclxuICAgICAgICBpZiAoam9iLnN0YXR1cyA9PT0gJ2NvbXBsZXRlZCcpIHtcclxuICAgICAgICAgIGF3YWl0IGZldGNoRG93bmxvYWRVcmwoam9iSWQpO1xyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoam9iLnN0YXR1cyA9PT0gJ2ZhaWxlZCcgfHwgam9iLnN0YXR1cyA9PT0gJ2NhbmNlbGxlZCcpIHtcclxuICAgICAgICAgIHNldEVycm9yKGBFeHBvcnQgJHtqb2Iuc3RhdHVzfWApO1xyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignUG9sbCBlcnJvcjonLCBlcnIpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBhdHRlbXB0cysrO1xyXG4gICAgfVxyXG5cclxuICAgIHNldEVycm9yKCdFeHBvcnQgdGltZWQgb3V0Jyk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZmV0Y2hEb3dubG9hZFVybCA9IGFzeW5jIChqb2JJZDogc3RyaW5nKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGFwaS5nZXQ8eyBkb3dubG9hZFVybDogc3RyaW5nIH0+KGAvZXhwb3J0LyR7am9iSWR9L2Rvd25sb2FkYCk7XHJcbiAgICAgIHNldERvd25sb2FkVXJsKHJlc3BvbnNlLmRvd25sb2FkVXJsKTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICBzZXRFcnJvcihlcnIgaW5zdGFuY2VvZiBFcnJvciA/IGVyci5tZXNzYWdlIDogJ0ZhaWxlZCB0byBnZXQgZG93bmxvYWQgbGluaycpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZURvd25sb2FkID0gKCkgPT4ge1xyXG4gICAgaWYgKGRvd25sb2FkVXJsKSB7XHJcbiAgICAgIHdpbmRvdy5vcGVuKGRvd25sb2FkVXJsLCAnX2JsYW5rJyk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxCb3ggY3NzPXt7IHN0YWNrOiAneScsIGdhcDogJ3NtYWxsJyB9fT5cclxuICAgICAge2Vycm9yICYmIChcclxuICAgICAgICA8QmFubmVyXHJcbiAgICAgICAgICB0eXBlPVwiY3JpdGljYWxcIlxyXG4gICAgICAgICAgdGl0bGU9XCJFeHBvcnQgRXJyb3JcIlxyXG4gICAgICAgICAgZGVzY3JpcHRpb249e2Vycm9yfVxyXG4gICAgICAgICAgb25EaXNtaXNzPXsoKSA9PiBzZXRFcnJvcihudWxsKX1cclxuICAgICAgICAvPlxyXG4gICAgICApfVxyXG5cclxuICAgICAge2N1cnJlbnRKb2IgJiYgY3VycmVudEpvYi5zdGF0dXMgPT09ICdwcm9jZXNzaW5nJyAmJiAoXHJcbiAgICAgICAgPEJveCBjc3M9e3sgc3RhY2s6ICd4JywgZ2FwOiAnc21hbGwnLCBhbGlnblk6ICdjZW50ZXInIH19PlxyXG4gICAgICAgICAgPFNwaW5uZXIgc2l6ZT1cInNtYWxsXCIgLz5cclxuICAgICAgICAgIDxCb3ggY3NzPXt7IGNvbG9yOiAnc2Vjb25kYXJ5JyB9fT5cclxuICAgICAgICAgICAgRXhwb3J0aW5nIHtjdXJyZW50Sm9iLnByb2Nlc3NlZFJvd3N9IHByb2R1Y3RzLi4uXHJcbiAgICAgICAgICA8L0JveD5cclxuICAgICAgICA8L0JveD5cclxuICAgICAgKX1cclxuXHJcbiAgICAgIHtkb3dubG9hZFVybCAmJiAoXHJcbiAgICAgICAgPEJhbm5lclxyXG4gICAgICAgICAgdHlwZT1cImRlZmF1bHRcIlxyXG4gICAgICAgICAgdGl0bGU9XCJFeHBvcnQgQ29tcGxldGVcIlxyXG4gICAgICAgICAgZGVzY3JpcHRpb249e2BTdWNjZXNzZnVsbHkgZXhwb3J0ZWQgJHtjdXJyZW50Sm9iPy50b3RhbFJvd3MgPz8gMH0gcHJvZHVjdHMuYH1cclxuICAgICAgICAgIGFjdGlvbnM9e1xyXG4gICAgICAgICAgICA8QnV0dG9uIG9uUHJlc3M9e2hhbmRsZURvd25sb2FkfT5cclxuICAgICAgICAgICAgICBEb3dubG9hZCBDU1ZcclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgLz5cclxuICAgICAgKX1cclxuXHJcbiAgICAgIDxCdXR0b25cclxuICAgICAgICB0eXBlPVwicHJpbWFyeVwiXHJcbiAgICAgICAgb25QcmVzcz17aGFuZGxlRXhwb3J0fVxyXG4gICAgICAgIGRpc2FibGVkPXtpc0V4cG9ydGluZ31cclxuICAgICAgPlxyXG4gICAgICAgIHtpc0V4cG9ydGluZyA/IChcclxuICAgICAgICAgIDxCb3ggY3NzPXt7IHN0YWNrOiAneCcsIGdhcDogJ3hzbWFsbCcsIGFsaWduWTogJ2NlbnRlcicgfX0+XHJcbiAgICAgICAgICAgIDxTcGlubmVyIHNpemU9XCJzbWFsbFwiIC8+XHJcbiAgICAgICAgICAgIDxzcGFuPkV4cG9ydGluZy4uLjwvc3Bhbj5cclxuICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICkgOiAoXHJcbiAgICAgICAgICA8Qm94IGNzcz17eyBzdGFjazogJ3gnLCBnYXA6ICd4c21hbGwnLCBhbGlnblk6ICdjZW50ZXInIH19PlxyXG4gICAgICAgICAgICA8SWNvbiBuYW1lPVwiZG93bmxvYWRcIiAvPlxyXG4gICAgICAgICAgICA8c3Bhbj5FeHBvcnQgUHJvZHVjdHMgdG8gQ1NWPC9zcGFuPlxyXG4gICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9CdXR0b24+XHJcbiAgICA8L0JveD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRXhwb3J0QnV0dG9uO1xyXG4iLCAiLyoqXHJcbiAqIEltcG9ydFVwbG9hZCBjb21wb25lbnQgLSBmaWxlIHNlbGVjdGlvbiBhbmQgdXBsb2FkIGZvciBDU1YgaW1wb3J0XHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtcclxuICBCb3gsXHJcbiAgQnV0dG9uLFxyXG4gIEljb24sXHJcbiAgU3Bpbm5lcixcclxuICBCYW5uZXIsXHJcbiAgQ2hlY2tib3gsXHJcbn0gZnJvbSAnQHN0cmlwZS91aS1leHRlbnNpb24tc2RrL3VpJztcclxuaW1wb3J0IHR5cGUgeyBjcmVhdGVBcGlDbGllbnQsIEpvYiwgVXBsb2FkVXJsUmVzcG9uc2UgfSBmcm9tICcuLi9hcGknO1xyXG5cclxuaW50ZXJmYWNlIEltcG9ydFVwbG9hZFByb3BzIHtcclxuICBhcGk6IFJldHVyblR5cGU8dHlwZW9mIGNyZWF0ZUFwaUNsaWVudD47XHJcbn1cclxuXHJcbmNvbnN0IEltcG9ydFVwbG9hZCA9ICh7IGFwaSB9OiBJbXBvcnRVcGxvYWRQcm9wcykgPT4ge1xyXG4gIGNvbnN0IFtzZWxlY3RlZEZpbGUsIHNldFNlbGVjdGVkRmlsZV0gPSB1c2VTdGF0ZTxGaWxlIHwgbnVsbD4obnVsbCk7XHJcbiAgY29uc3QgW2lzVXBsb2FkaW5nLCBzZXRJc1VwbG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2lzUHJvY2Vzc2luZywgc2V0SXNQcm9jZXNzaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbY3VycmVudEpvYiwgc2V0Q3VycmVudEpvYl0gPSB1c2VTdGF0ZTxKb2IgfCBudWxsPihudWxsKTtcclxuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlPHN0cmluZyB8IG51bGw+KG51bGwpO1xyXG4gIGNvbnN0IFtkcnlSdW4sIHNldERyeVJ1bl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgZmlsZUlucHV0UmVmID0gdXNlUmVmPEhUTUxJbnB1dEVsZW1lbnQ+KG51bGwpO1xyXG5cclxuICBjb25zdCBoYW5kbGVGaWxlU2VsZWN0ID0gKCkgPT4ge1xyXG4gICAgZmlsZUlucHV0UmVmLmN1cnJlbnQ/LmNsaWNrKCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlRmlsZUNoYW5nZSA9IChldmVudDogRXZlbnQpID0+IHtcclxuICAgIGNvbnN0IGlucHV0ID0gZXZlbnQudGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgICBjb25zdCBmaWxlID0gaW5wdXQuZmlsZXM/LlswXTtcclxuICAgIGlmIChmaWxlKSB7XHJcbiAgICAgIGlmICghZmlsZS5uYW1lLnRvTG93ZXJDYXNlKCkuZW5kc1dpdGgoJy5jc3YnKSkge1xyXG4gICAgICAgIHNldEVycm9yKCdQbGVhc2Ugc2VsZWN0IGEgQ1NWIGZpbGUnKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgc2V0U2VsZWN0ZWRGaWxlKGZpbGUpO1xyXG4gICAgICBzZXRFcnJvcihudWxsKTtcclxuICAgICAgc2V0Q3VycmVudEpvYihudWxsKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVVcGxvYWQgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBpZiAoIXNlbGVjdGVkRmlsZSkgcmV0dXJuO1xyXG5cclxuICAgIHNldElzVXBsb2FkaW5nKHRydWUpO1xyXG4gICAgc2V0RXJyb3IobnVsbCk7XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgLy8gU3RlcCAxOiBHZXQgcHJlc2lnbmVkIHVwbG9hZCBVUkxcclxuICAgICAgY29uc3QgdXBsb2FkUmVzcG9uc2UgPSBhd2FpdCBhcGkucG9zdDxVcGxvYWRVcmxSZXNwb25zZT4oJy9pbXBvcnQvdXBsb2FkLXVybCcsIHtcclxuICAgICAgICBmaWxlbmFtZTogc2VsZWN0ZWRGaWxlLm5hbWUsXHJcbiAgICAgICAgY29udGVudFR5cGU6IHNlbGVjdGVkRmlsZS50eXBlIHx8ICd0ZXh0L2NzdicsXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgLy8gU3RlcCAyOiBVcGxvYWQgZmlsZSB0byBwcmVzaWduZWQgVVJMXHJcbiAgICAgIGF3YWl0IGFwaS51cGxvYWRGaWxlKHVwbG9hZFJlc3BvbnNlLnVwbG9hZFVybCwgc2VsZWN0ZWRGaWxlKTtcclxuXHJcbiAgICAgIC8vIFN0ZXAgMzogU3RhcnQgaW1wb3J0IGpvYlxyXG4gICAgICBzZXRJc1Byb2Nlc3NpbmcodHJ1ZSk7XHJcbiAgICAgIGNvbnN0IGpvYiA9IGF3YWl0IGFwaS5wb3N0PEpvYj4oYC9pbXBvcnQvJHt1cGxvYWRSZXNwb25zZS5qb2JJZH0vc3RhcnRgLCB7XHJcbiAgICAgICAgZHJ5UnVuLFxyXG4gICAgICB9KTtcclxuICAgICAgc2V0Q3VycmVudEpvYihqb2IpO1xyXG5cclxuICAgICAgLy8gU3RlcCA0OiBQb2xsIGZvciBjaHVuayBwcm9jZXNzaW5nXHJcbiAgICAgIGF3YWl0IHByb2Nlc3NDaHVua3ModXBsb2FkUmVzcG9uc2Uuam9iSWQpO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIHNldEVycm9yKGVyciBpbnN0YW5jZW9mIEVycm9yID8gZXJyLm1lc3NhZ2UgOiAnVXBsb2FkIGZhaWxlZCcpO1xyXG4gICAgfSBmaW5hbGx5IHtcclxuICAgICAgc2V0SXNVcGxvYWRpbmcoZmFsc2UpO1xyXG4gICAgICBzZXRJc1Byb2Nlc3NpbmcoZmFsc2UpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IHByb2Nlc3NDaHVua3MgPSBhc3luYyAoam9iSWQ6IHN0cmluZykgPT4ge1xyXG4gICAgY29uc3QgbWF4QXR0ZW1wdHMgPSA2MDA7IC8vIDMwIG1pbnV0ZXMgbWF4IChhdCAzIHNlY29uZCBpbnRlcnZhbHMpXHJcbiAgICBsZXQgYXR0ZW1wdHMgPSAwO1xyXG5cclxuICAgIHdoaWxlIChhdHRlbXB0cyA8IG1heEF0dGVtcHRzKSB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgLy8gUHJvY2VzcyBuZXh0IGNodW5rXHJcbiAgICAgICAgY29uc3Qgam9iID0gYXdhaXQgYXBpLnBvc3Q8Sm9iPihgL2ltcG9ydC8ke2pvYklkfS9wcm9jZXNzYCwge1xyXG4gICAgICAgICAgYmF0Y2hTaXplOiAxMDAsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgc2V0Q3VycmVudEpvYihqb2IpO1xyXG5cclxuICAgICAgICBpZiAoam9iLnN0YXR1cyA9PT0gJ2NvbXBsZXRlZCcgfHwgam9iLnN0YXR1cyA9PT0gJ2ZhaWxlZCcgfHwgam9iLnN0YXR1cyA9PT0gJ2NhbmNlbGxlZCcpIHtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIEJyaWVmIHBhdXNlIGJldHdlZW4gY2h1bmtzXHJcbiAgICAgICAgYXdhaXQgbmV3IFByb21pc2UocmVzb2x2ZSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIDEwMCkpO1xyXG4gICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdDaHVuayBwcm9jZXNzaW5nIGVycm9yOicsIGVycik7XHJcbiAgICAgICAgYXdhaXQgbmV3IFByb21pc2UocmVzb2x2ZSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIDMwMDApKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgYXR0ZW1wdHMrKztcclxuICAgIH1cclxuXHJcbiAgICBzZXRFcnJvcignSW1wb3J0IHRpbWVkIG91dCcpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNhbmNlbCA9IGFzeW5jICgpID0+IHtcclxuICAgIGlmICghY3VycmVudEpvYiB8fCBjdXJyZW50Sm9iLnN0YXR1cyAhPT0gJ3Byb2Nlc3NpbmcnKSByZXR1cm47XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgYXdhaXQgYXBpLmRlbGV0ZShgL2pvYnMvJHtjdXJyZW50Sm9iLmlkfWApO1xyXG4gICAgICBzZXRDdXJyZW50Sm9iKHByZXYgPT4gcHJldiA/IHsgLi4ucHJldiwgc3RhdHVzOiAnY2FuY2VsbGVkJyB9IDogbnVsbCk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignQ2FuY2VsIGVycm9yOicsIGVycik7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZ2V0UHJvZ3Jlc3MgPSAoKSA9PiB7XHJcbiAgICBpZiAoIWN1cnJlbnRKb2IgfHwgY3VycmVudEpvYi50b3RhbFJvd3MgPT09IDApIHJldHVybiAwO1xyXG4gICAgcmV0dXJuIE1hdGgucm91bmQoKGN1cnJlbnRKb2IucHJvY2Vzc2VkUm93cyAvIGN1cnJlbnRKb2IudG90YWxSb3dzKSAqIDEwMCk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxCb3ggY3NzPXt7IHN0YWNrOiAneScsIGdhcDogJ3NtYWxsJyB9fT5cclxuICAgICAgey8qIEhpZGRlbiBmaWxlIGlucHV0ICovfVxyXG4gICAgICA8aW5wdXRcclxuICAgICAgICByZWY9e2ZpbGVJbnB1dFJlZn1cclxuICAgICAgICB0eXBlPVwiZmlsZVwiXHJcbiAgICAgICAgYWNjZXB0PVwiLmNzdlwiXHJcbiAgICAgICAgc3R5bGU9e3sgZGlzcGxheTogJ25vbmUnIH19XHJcbiAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUZpbGVDaGFuZ2UgYXMgdW5rbm93biBhcyBSZWFjdC5DaGFuZ2VFdmVudEhhbmRsZXI8SFRNTElucHV0RWxlbWVudD59XHJcbiAgICAgIC8+XHJcblxyXG4gICAgICB7ZXJyb3IgJiYgKFxyXG4gICAgICAgIDxCYW5uZXJcclxuICAgICAgICAgIHR5cGU9XCJjcml0aWNhbFwiXHJcbiAgICAgICAgICB0aXRsZT1cIkltcG9ydCBFcnJvclwiXHJcbiAgICAgICAgICBkZXNjcmlwdGlvbj17ZXJyb3J9XHJcbiAgICAgICAgICBvbkRpc21pc3M9eygpID0+IHNldEVycm9yKG51bGwpfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICl9XHJcblxyXG4gICAgICB7LyogRmlsZSBzZWxlY3Rpb24gKi99XHJcbiAgICAgIHshaXNQcm9jZXNzaW5nICYmICFjdXJyZW50Sm9iICYmIChcclxuICAgICAgICA8Qm94IGNzcz17eyBzdGFjazogJ3knLCBnYXA6ICdzbWFsbCcgfX0+XHJcbiAgICAgICAgICA8Qm94IGNzcz17eyBzdGFjazogJ3gnLCBnYXA6ICdzbWFsbCcsIGFsaWduWTogJ2NlbnRlcicgfX0+XHJcbiAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInNlY29uZGFyeVwiIG9uUHJlc3M9e2hhbmRsZUZpbGVTZWxlY3R9PlxyXG4gICAgICAgICAgICAgIDxJY29uIG5hbWU9XCJkb2N1bWVudFwiIC8+XHJcbiAgICAgICAgICAgICAgPHNwYW4+U2VsZWN0IENTViBGaWxlPC9zcGFuPlxyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAge3NlbGVjdGVkRmlsZSAmJiAoXHJcbiAgICAgICAgICAgICAgPEJveCBjc3M9e3sgY29sb3I6ICdzZWNvbmRhcnknIH19PlxyXG4gICAgICAgICAgICAgICAge3NlbGVjdGVkRmlsZS5uYW1lfSAoe01hdGgucm91bmQoc2VsZWN0ZWRGaWxlLnNpemUgLyAxMDI0KX0gS0IpXHJcbiAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L0JveD5cclxuXHJcbiAgICAgICAgICB7c2VsZWN0ZWRGaWxlICYmIChcclxuICAgICAgICAgICAgPEJveCBjc3M9e3sgc3RhY2s6ICd5JywgZ2FwOiAnc21hbGwnIH19PlxyXG4gICAgICAgICAgICAgIDxDaGVja2JveFxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJEcnkgcnVuIChwcmV2aWV3IGNoYW5nZXMgd2l0aG91dCBhcHBseWluZylcIlxyXG4gICAgICAgICAgICAgICAgY2hlY2tlZD17ZHJ5UnVufVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXREcnlSdW4oZS50YXJnZXQuY2hlY2tlZCl9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICBvblByZXNzPXtoYW5kbGVVcGxvYWR9XHJcbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17aXNVcGxvYWRpbmd9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge2lzVXBsb2FkaW5nID8gKFxyXG4gICAgICAgICAgICAgICAgICA8Qm94IGNzcz17eyBzdGFjazogJ3gnLCBnYXA6ICd4c21hbGwnLCBhbGlnblk6ICdjZW50ZXInIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxTcGlubmVyIHNpemU9XCJzbWFsbFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+VXBsb2FkaW5nLi4uPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgIDxCb3ggY3NzPXt7IHN0YWNrOiAneCcsIGdhcDogJ3hzbWFsbCcsIGFsaWduWTogJ2NlbnRlcicgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEljb24gbmFtZT1cInVwbG9hZFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2RyeVJ1biA/ICdQcmV2aWV3IEltcG9ydCcgOiAnSW1wb3J0IFByb2R1Y3RzJ308L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICApfVxyXG5cclxuICAgICAgey8qIFByb2Nlc3NpbmcgcHJvZ3Jlc3MgKi99XHJcbiAgICAgIHtpc1Byb2Nlc3NpbmcgJiYgY3VycmVudEpvYiAmJiAoXHJcbiAgICAgICAgPEJveCBjc3M9e3sgc3RhY2s6ICd5JywgZ2FwOiAnc21hbGwnIH19PlxyXG4gICAgICAgICAgPEJveCBjc3M9e3sgc3RhY2s6ICd4JywgZ2FwOiAnc21hbGwnLCBhbGlnblk6ICdjZW50ZXInIH19PlxyXG4gICAgICAgICAgICA8U3Bpbm5lciBzaXplPVwic21hbGxcIiAvPlxyXG4gICAgICAgICAgICA8Qm94PlxyXG4gICAgICAgICAgICAgIHtkcnlSdW4gPyAnUHJldmlld2luZycgOiAnSW1wb3J0aW5nJ306IHtnZXRQcm9ncmVzcygpfSUgKHtjdXJyZW50Sm9iLnByb2Nlc3NlZFJvd3N9L3tjdXJyZW50Sm9iLnRvdGFsUm93c30gcm93cylcclxuICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgIFxyXG4gICAgICAgICAge2N1cnJlbnRKb2IudHlwZSA9PT0gJ2ltcG9ydCcgJiYgKFxyXG4gICAgICAgICAgICA8Qm94IGNzcz17eyBjb2xvcjogJ3NlY29uZGFyeScsIGZvbnQ6ICdjYXB0aW9uJyB9fT5cclxuICAgICAgICAgICAgICBDcmVhdGVkOiB7Y3VycmVudEpvYi5jcmVhdGVkQ291bnQgPz8gMH0gfCBcclxuICAgICAgICAgICAgICBVcGRhdGVkOiB7Y3VycmVudEpvYi51cGRhdGVkQ291bnQgPz8gMH0gfCBcclxuICAgICAgICAgICAgICBTa2lwcGVkOiB7Y3VycmVudEpvYi5za2lwcGVkQ291bnQgPz8gMH1cclxuICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgIDxCdXR0b24gdHlwZT1cImRlc3RydWN0aXZlXCIgb25QcmVzcz17aGFuZGxlQ2FuY2VsfT5cclxuICAgICAgICAgICAgQ2FuY2VsXHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8L0JveD5cclxuICAgICAgKX1cclxuXHJcbiAgICAgIHsvKiBDb21wbGV0aW9uIHJlc3VsdCAqL31cclxuICAgICAge2N1cnJlbnRKb2IgJiYgY3VycmVudEpvYi5zdGF0dXMgPT09ICdjb21wbGV0ZWQnICYmICFpc1Byb2Nlc3NpbmcgJiYgKFxyXG4gICAgICAgIDxCYW5uZXJcclxuICAgICAgICAgIHR5cGU9XCJkZWZhdWx0XCJcclxuICAgICAgICAgIHRpdGxlPXtkcnlSdW4gPyAnRHJ5IFJ1biBDb21wbGV0ZScgOiAnSW1wb3J0IENvbXBsZXRlJ31cclxuICAgICAgICAgIGRlc2NyaXB0aW9uPXtcclxuICAgICAgICAgICAgZHJ5UnVuXHJcbiAgICAgICAgICAgICAgPyBgUHJldmlldzogV291bGQgY3JlYXRlICR7Y3VycmVudEpvYi5jcmVhdGVkQ291bnQgPz8gMH0sIHVwZGF0ZSAke2N1cnJlbnRKb2IudXBkYXRlZENvdW50ID8/IDB9LCBza2lwICR7Y3VycmVudEpvYi5za2lwcGVkQ291bnQgPz8gMH0gcHJvZHVjdHMuYFxyXG4gICAgICAgICAgICAgIDogYFN1Y2Nlc3NmdWxseSBjcmVhdGVkICR7Y3VycmVudEpvYi5jcmVhdGVkQ291bnQgPz8gMH0sIHVwZGF0ZWQgJHtjdXJyZW50Sm9iLnVwZGF0ZWRDb3VudCA/PyAwfSBwcm9kdWN0cy4gJHtjdXJyZW50Sm9iLnNraXBwZWRDb3VudCA/PyAwfSBza2lwcGVkLmBcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGFjdGlvbnM9e1xyXG4gICAgICAgICAgICBkcnlSdW4gPyAoXHJcbiAgICAgICAgICAgICAgPEJ1dHRvbiBvblByZXNzPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzZXREcnlSdW4oZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgc2V0Q3VycmVudEpvYihudWxsKTtcclxuICAgICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICAgIFByb2NlZWQgd2l0aCBJbXBvcnRcclxuICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgKSA6IHVuZGVmaW5lZFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICl9XHJcbiAgICA8L0JveD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW1wb3J0VXBsb2FkO1xyXG4iLCAiLyoqXHJcbiAqIEpvYlByb2dyZXNzIGNvbXBvbmVudCAtIGRpc3BsYXlzIGpvYiBzdGF0dXMgd2l0aCBwb2xsaW5nXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtcclxuICBCb3gsXHJcbiAgSWNvbixcclxuICBTcGlubmVyLFxyXG4gIEJhZGdlLFxyXG4gIExpc3QsXHJcbiAgTGlzdEl0ZW0sXHJcbn0gZnJvbSAnQHN0cmlwZS91aS1leHRlbnNpb24tc2RrL3VpJztcclxuaW1wb3J0IHR5cGUgeyBjcmVhdGVBcGlDbGllbnQsIEpvYiwgSm9iTGlzdFJlc3BvbnNlIH0gZnJvbSAnLi4vYXBpJztcclxuXHJcbmludGVyZmFjZSBKb2JQcm9ncmVzc1Byb3BzIHtcclxuICBhcGk6IFJldHVyblR5cGU8dHlwZW9mIGNyZWF0ZUFwaUNsaWVudD47XHJcbn1cclxuXHJcbmNvbnN0IEpvYlByb2dyZXNzID0gKHsgYXBpIH06IEpvYlByb2dyZXNzUHJvcHMpID0+IHtcclxuICBjb25zdCBbam9icywgc2V0Sm9ic10gPSB1c2VTdGF0ZTxKb2JbXT4oW10pO1xyXG4gIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlPHN0cmluZyB8IG51bGw+KG51bGwpO1xyXG5cclxuICAvLyBGZXRjaCBqb2JzIG9uIG1vdW50IGFuZCBwb2xsIGZvciB1cGRhdGVzXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGxldCBpc01vdW50ZWQgPSB0cnVlO1xyXG4gICAgbGV0IHBvbGxJbnRlcnZhbDogUmV0dXJuVHlwZTx0eXBlb2Ygc2V0SW50ZXJ2YWw+IHwgbnVsbCA9IG51bGw7XHJcblxyXG4gICAgY29uc3QgZmV0Y2hKb2JzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXBpLmdldDxKb2JMaXN0UmVzcG9uc2U+KCcvam9icycsIHsgbGltaXQ6ICcxMCcgfSk7XHJcbiAgICAgICAgaWYgKGlzTW91bnRlZCkge1xyXG4gICAgICAgICAgc2V0Sm9icyhyZXNwb25zZS5qb2JzKTtcclxuICAgICAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICBpZiAoaXNNb3VudGVkKSB7XHJcbiAgICAgICAgICBzZXRFcnJvcihlcnIgaW5zdGFuY2VvZiBFcnJvciA/IGVyci5tZXNzYWdlIDogJ0ZhaWxlZCB0byBsb2FkIGpvYnMnKTtcclxuICAgICAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGZldGNoSm9icygpO1xyXG5cclxuICAgIC8vIFBvbGwgZXZlcnkgNSBzZWNvbmRzIGlmIHRoZXJlIGFyZSBhY3RpdmUgam9ic1xyXG4gICAgcG9sbEludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICBjb25zdCBoYXNBY3RpdmVKb2JzID0gam9icy5zb21lKGogPT4gXHJcbiAgICAgICAgai5zdGF0dXMgPT09ICdwZW5kaW5nJyB8fCBqLnN0YXR1cyA9PT0gJ3Byb2Nlc3NpbmcnXHJcbiAgICAgICk7XHJcbiAgICAgIGlmIChoYXNBY3RpdmVKb2JzKSB7XHJcbiAgICAgICAgZmV0Y2hKb2JzKCk7XHJcbiAgICAgIH1cclxuICAgIH0sIDUwMDApO1xyXG5cclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIGlzTW91bnRlZCA9IGZhbHNlO1xyXG4gICAgICBpZiAocG9sbEludGVydmFsKSB7XHJcbiAgICAgICAgY2xlYXJJbnRlcnZhbChwb2xsSW50ZXJ2YWwpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gIH0sIFthcGldKTtcclxuXHJcbiAgY29uc3QgZm9ybWF0RGF0ZSA9IChkYXRlU3RyOiBzdHJpbmcpID0+IHtcclxuICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZShkYXRlU3RyKTtcclxuICAgIHJldHVybiBkYXRlLnRvTG9jYWxlU3RyaW5nKCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZ2V0U3RhdHVzQmFkZ2UgPSAoc3RhdHVzOiBKb2JbJ3N0YXR1cyddKSA9PiB7XHJcbiAgICBzd2l0Y2ggKHN0YXR1cykge1xyXG4gICAgICBjYXNlICdwZW5kaW5nJzpcclxuICAgICAgICByZXR1cm4gPEJhZGdlIHR5cGU9XCJpbmZvXCI+UGVuZGluZzwvQmFkZ2U+O1xyXG4gICAgICBjYXNlICdwcm9jZXNzaW5nJzpcclxuICAgICAgICByZXR1cm4gPEJhZGdlIHR5cGU9XCJ3YXJuaW5nXCI+UHJvY2Vzc2luZzwvQmFkZ2U+O1xyXG4gICAgICBjYXNlICdjb21wbGV0ZWQnOlxyXG4gICAgICAgIHJldHVybiA8QmFkZ2UgdHlwZT1cInBvc2l0aXZlXCI+Q29tcGxldGVkPC9CYWRnZT47XHJcbiAgICAgIGNhc2UgJ2ZhaWxlZCc6XHJcbiAgICAgICAgcmV0dXJuIDxCYWRnZSB0eXBlPVwibmVnYXRpdmVcIj5GYWlsZWQ8L0JhZGdlPjtcclxuICAgICAgY2FzZSAnY2FuY2VsbGVkJzpcclxuICAgICAgICByZXR1cm4gPEJhZGdlIHR5cGU9XCJpbmZvXCI+Q2FuY2VsbGVkPC9CYWRnZT47XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgcmV0dXJuIDxCYWRnZSB0eXBlPVwiaW5mb1wiPntzdGF0dXN9PC9CYWRnZT47XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZ2V0UHJvZ3Jlc3MgPSAoam9iOiBKb2IpID0+IHtcclxuICAgIGlmIChqb2IudG90YWxSb3dzID09PSAwKSByZXR1cm4gMDtcclxuICAgIHJldHVybiBNYXRoLnJvdW5kKChqb2IucHJvY2Vzc2VkUm93cyAvIGpvYi50b3RhbFJvd3MpICogMTAwKTtcclxuICB9O1xyXG5cclxuICBpZiAoaXNMb2FkaW5nKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8Qm94IGNzcz17eyBzdGFjazogJ3gnLCBnYXA6ICdzbWFsbCcsIGFsaWduWTogJ2NlbnRlcicgfX0+XHJcbiAgICAgICAgPFNwaW5uZXIgc2l6ZT1cInNtYWxsXCIgLz5cclxuICAgICAgICA8Qm94IGNzcz17eyBjb2xvcjogJ3NlY29uZGFyeScgfX0+TG9hZGluZyBqb2JzLi4uPC9Cb3g+XHJcbiAgICAgIDwvQm94PlxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGlmIChlcnJvcikge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPEJveCBjc3M9e3sgY29sb3I6ICdjcml0aWNhbCcgfX0+XHJcbiAgICAgICAgRXJyb3I6IHtlcnJvcn1cclxuICAgICAgPC9Cb3g+XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgaWYgKGpvYnMubGVuZ3RoID09PSAwKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8Qm94IGNzcz17eyBjb2xvcjogJ3NlY29uZGFyeScgfX0+XHJcbiAgICAgICAgTm8gcmVjZW50IGpvYnMuIFN0YXJ0IGFuIGV4cG9ydCBvciBpbXBvcnQgdG8gc2VlIHByb2dyZXNzIGhlcmUuXHJcbiAgICAgIDwvQm94PlxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Qm94IGNzcz17eyBzdGFjazogJ3knLCBnYXA6ICdzbWFsbCcgfX0+XHJcbiAgICAgIDxMaXN0PlxyXG4gICAgICAgIHtqb2JzLm1hcCgoam9iKSA9PiAoXHJcbiAgICAgICAgICA8TGlzdEl0ZW1cclxuICAgICAgICAgICAga2V5PXtqb2IuaWR9XHJcbiAgICAgICAgICAgIGlkPXtqb2IuaWR9XHJcbiAgICAgICAgICAgIHRpdGxlPXtcclxuICAgICAgICAgICAgICA8Qm94IGNzcz17eyBzdGFjazogJ3gnLCBnYXA6ICdzbWFsbCcsIGFsaWduWTogJ2NlbnRlcicgfX0+XHJcbiAgICAgICAgICAgICAgICA8SWNvbiBuYW1lPXtqb2IudHlwZSA9PT0gJ2V4cG9ydCcgPyAnZG93bmxvYWQnIDogJ3VwbG9hZCd9IC8+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj57am9iLnR5cGUgPT09ICdleHBvcnQnID8gJ0V4cG9ydCcgOiAnSW1wb3J0J308L3NwYW4+XHJcbiAgICAgICAgICAgICAgICB7Z2V0U3RhdHVzQmFkZ2Uoam9iLnN0YXR1cyl9XHJcbiAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2Vjb25kYXJ5VGl0bGU9e2Zvcm1hdERhdGUoam9iLmNyZWF0ZWRBdCl9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxCb3ggY3NzPXt7IHN0YWNrOiAneScsIGdhcDogJ3hzbWFsbCcgfX0+XHJcbiAgICAgICAgICAgICAgey8qIFByb2dyZXNzIGluZm8gKi99XHJcbiAgICAgICAgICAgICAgPEJveCBjc3M9e3sgY29sb3I6ICdzZWNvbmRhcnknLCBmb250OiAnY2FwdGlvbicgfX0+XHJcbiAgICAgICAgICAgICAgICB7am9iLnN0YXR1cyA9PT0gJ3Byb2Nlc3NpbmcnID8gKFxyXG4gICAgICAgICAgICAgICAgICA8Qm94IGNzcz17eyBzdGFjazogJ3gnLCBnYXA6ICd4c21hbGwnLCBhbGlnblk6ICdjZW50ZXInIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxTcGlubmVyIHNpemU9XCJzbWFsbFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2dldFByb2dyZXNzKGpvYil9JSAoe2pvYi5wcm9jZXNzZWRSb3dzfS97am9iLnRvdGFsUm93c30gcm93cyk8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgPHNwYW4+e2pvYi5wcm9jZXNzZWRSb3dzfSBvZiB7am9iLnRvdGFsUm93c30gcm93czwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgPC9Cb3g+XHJcblxyXG4gICAgICAgICAgICAgIHsvKiBJbXBvcnQtc3BlY2lmaWMgc3RhdHMgKi99XHJcbiAgICAgICAgICAgICAge2pvYi50eXBlID09PSAnaW1wb3J0JyAmJiBqb2Iuc3RhdHVzID09PSAnY29tcGxldGVkJyAmJiAoXHJcbiAgICAgICAgICAgICAgICA8Qm94IGNzcz17eyBjb2xvcjogJ3NlY29uZGFyeScsIGZvbnQ6ICdjYXB0aW9uJyB9fT5cclxuICAgICAgICAgICAgICAgICAgQ3JlYXRlZDoge2pvYi5jcmVhdGVkQ291bnQgPz8gMH0sIFxyXG4gICAgICAgICAgICAgICAgICBVcGRhdGVkOiB7am9iLnVwZGF0ZWRDb3VudCA/PyAwfSwgXHJcbiAgICAgICAgICAgICAgICAgIFNraXBwZWQ6IHtqb2Iuc2tpcHBlZENvdW50ID8/IDB9XHJcbiAgICAgICAgICAgICAgICAgIHtqb2IuZHJ5UnVuICYmIDxCYWRnZSB0eXBlPVwiaW5mb1wiPkRyeSBSdW48L0JhZGdlPn1cclxuICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICAgIHsvKiBFcnJvciBjb3VudCAqL31cclxuICAgICAgICAgICAgICB7am9iLmVycm9yQ291bnQgPiAwICYmIChcclxuICAgICAgICAgICAgICAgIDxCb3ggY3NzPXt7IGNvbG9yOiAnYXR0ZW50aW9uJywgZm9udDogJ2NhcHRpb24nIH19PlxyXG4gICAgICAgICAgICAgICAgICB7am9iLmVycm9yQ291bnR9IGVycm9yc1xyXG4gICAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L0xpc3Q+XHJcbiAgICA8L0JveD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSm9iUHJvZ3Jlc3M7XHJcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQWEsY0FBQSxjQUFjOzs7Ozs7Ozs7OztBQ1UzQixVQUFBLFVBQUEsVUFBQTtBQUNBLFVBQUEsWUFBQTtBQUVBLFVBQU0sZUFBZSxDQUNuQixjQUNFO0FBQ0YsY0FBTSx1QkFBdUIsVUFBVSxlQUFlLFVBQVUsU0FBUTtBQUN4RSxjQUFNLGVBRUYsQ0FBQyxXQUNILEdBQUEsY0FBQSxLQUFDLFdBQVMsT0FBQSxPQUFBLENBQUEsR0FDSixPQUFLLEVBQ1Qsc0JBQ0EsWUFBWSxVQUFBLGFBQ1osZUFBYyxLQUFJLENBQUEsQ0FBQTtBQUl0QixxQkFBYSx1QkFBdUI7QUFFcEMsZUFBTztNQUNUO0FBRUEsVUFBTSxr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QUFBLFVBRUEsNkNBQUMsc0JBQVE7QUFBQSxVQUdULDhDQUFDO0FBQUEsWUFBSSxLQUFLLEVBQUUsT0FBTyxLQUFLLEtBQUssUUFBUTtBQUFBLFlBQ25DO0FBQUEsMkRBQUM7QUFBQSxnQkFBSSxLQUFLLEVBQUUsTUFBTSxXQUFXLFlBQVksV0FBVztBQUFBLGdCQUFHO0FBQUEsZUFFdkQ7QUFBQSxjQUNBLDZDQUFDO0FBQUEsZ0JBQVk7QUFBQSxlQUFVO0FBQUE7QUFBQSxXQUN6QjtBQUFBO0FBQUEsT0FDRjtBQUFBLEtBQ0Y7QUFBQSxFQUVKO0FBRUEsTUFBTywwQkFBUTs7O0FEbEZmLCtCQUFjO0FBQ1AsTUFBTSxhQUFhO0FBTTFCLE1BQU8sbUJBQVE7QUFBQSxJQUNiLHVCQUF1QjtBQUFBLElBQ3ZCLFFBQVE7QUFBQSxJQUNSLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLGVBQWU7QUFBQSxNQUNiO0FBQUEsUUFDRSxjQUFjO0FBQUEsUUFDZCxXQUFXO0FBQUEsTUFDYjtBQUFBLE1BQ0E7QUFBQSxRQUNFLGNBQWM7QUFBQSxRQUNkLFdBQVc7QUFBQSxNQUNiO0FBQUEsSUFDRjtBQUFBLElBQ0EsdUJBQXVCO0FBQUEsTUFDckIsUUFBUTtBQUFBLE1BQ1IsT0FBTztBQUFBLElBQ1Q7QUFBQSxJQUNBLDBCQUEwQjtBQUFBLElBQzFCLGdCQUFnQjtBQUFBLE1BQ2QsU0FBUztBQUFBLFFBQ1A7QUFBQSxVQUNFLGFBQWE7QUFBQSxVQUNiLFlBQVk7QUFBQSxRQUNkO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxJQUNBLFdBQVc7QUFBQSxFQUNiOyIsCiAgIm5hbWVzIjogWyJmZXRjaCIsICJmZXRjaFN0cmlwZVNpZ25hdHVyZSIsICJpbXBvcnRfdWkiLCAiX2EiLCAiaW1wb3J0X3JlYWN0IiwgImltcG9ydF91aSIsICJpbXBvcnRfanN4X3J1bnRpbWUiLCAiX2EiLCAiaW1wb3J0X3JlYWN0IiwgImltcG9ydF91aSIsICJpbXBvcnRfanN4X3J1bnRpbWUiLCAiaW1wb3J0X2pzeF9ydW50aW1lIl0KfQo=
