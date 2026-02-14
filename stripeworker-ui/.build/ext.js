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
  var import_react2 = __require("react");
  var import_ui2 = __toESM(require_ui());

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

  // src/components/ImportUpload.tsx
  var import_react = __require("react");
  var import_ui = __toESM(require_ui());
  var import_jsx_runtime = __require("react/jsx-runtime");
  var ImportUpload = ({ api }) => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i;
    const [selectedFile, setSelectedFile] = (0, import_react.useState)(null);
    const [isUploading, setIsUploading] = (0, import_react.useState)(false);
    const [isProcessing, setIsProcessing] = (0, import_react.useState)(false);
    const [currentJob, setCurrentJob] = (0, import_react.useState)(null);
    const [error, setError] = (0, import_react.useState)(null);
    const [dryRun, setDryRun] = (0, import_react.useState)(false);
    const fileInputRef = (0, import_react.useRef)(null);
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
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_ui.Box, {
      css: { stack: "y", gap: "small" },
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
          ref: fileInputRef,
          type: "file",
          accept: ".csv",
          style: { display: "none" },
          onChange: handleFileChange
        }),
        error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_ui.Banner, {
          type: "critical",
          title: "Import Error",
          description: error,
          onDismiss: () => setError(null)
        }),
        !isProcessing && !currentJob && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_ui.Box, {
          css: { stack: "y", gap: "small" },
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_ui.Box, {
              css: { stack: "x", gap: "small", alignY: "center" },
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_ui.Button, {
                  type: "secondary",
                  onPress: handleFileSelect,
                  children: "Select CSV File"
                }),
                selectedFile && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_ui.Box, {
                  children: [
                    selectedFile.name,
                    " (",
                    Math.round(selectedFile.size / 1024),
                    " KB)"
                  ]
                })
              ]
            }),
            selectedFile && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_ui.Box, {
              css: { stack: "y", gap: "small" },
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_ui.Checkbox, {
                  label: "Dry run (preview changes without applying)",
                  checked: dryRun,
                  onChange: (e) => setDryRun(e.target.checked)
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_ui.Button, {
                  type: "primary",
                  onPress: handleUpload,
                  disabled: isUploading,
                  children: isUploading ? "Uploading..." : dryRun ? "Preview Import" : "Import Products"
                })
              ]
            })
          ]
        }),
        isProcessing && currentJob && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_ui.Box, {
          css: { stack: "y", gap: "small" },
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_ui.Box, {
              css: { stack: "x", gap: "small", alignY: "center" },
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_ui.Spinner, {
                  size: "small"
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_ui.Box, {
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
            currentJob.type === "import" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_ui.Box, {
              children: [
                "Created: ",
                (_a = currentJob.createdCount) != null ? _a : 0,
                " | Updated: ",
                (_b = currentJob.updatedCount) != null ? _b : 0,
                " | Skipped: ",
                (_c = currentJob.skippedCount) != null ? _c : 0
              ]
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_ui.Button, {
              type: "destructive",
              onPress: handleCancel,
              children: "Cancel"
            })
          ]
        }),
        currentJob && currentJob.status === "completed" && !isProcessing && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_ui.Banner, {
          type: "default",
          title: dryRun ? "Dry Run Complete" : "Import Complete",
          description: dryRun ? `Preview: Would create ${(_d = currentJob.createdCount) != null ? _d : 0}, update ${(_e = currentJob.updatedCount) != null ? _e : 0}, skip ${(_f = currentJob.skippedCount) != null ? _f : 0} products.` : `Successfully created ${(_g = currentJob.createdCount) != null ? _g : 0}, updated ${(_h = currentJob.updatedCount) != null ? _h : 0} products. ${(_i = currentJob.skippedCount) != null ? _i : 0} skipped.`,
          actions: dryRun ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_ui.Button, {
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

  // src/views/ProductListView.tsx
  var import_jsx_runtime2 = __require("react/jsx-runtime");
  var ProductListView = ({ userContext }) => {
    var _a;
    const [exportStatus, setExportStatus] = (0, import_react2.useState)("");
    const [downloadUrl, setDownloadUrl] = (0, import_react2.useState)(null);
    const [isExporting, setIsExporting] = (0, import_react2.useState)(false);
    if (!(userContext == null ? void 0 : userContext.id) || !((_a = userContext == null ? void 0 : userContext.account) == null ? void 0 : _a.id)) {
      return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_ui2.ContextView, {
        title: "Product CSV Tools",
        children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_ui2.Box, {
          css: { padding: "medium" },
          children: "Loading..."
        })
      });
    }
    const api = createApiClient({
      userId: userContext.id,
      accountId: userContext.account.id
    });
    const handleExport = (0, import_react2.useCallback)(() => __async(void 0, null, function* () {
      setIsExporting(true);
      setExportStatus("Starting export...");
      setDownloadUrl(null);
      try {
        const job = yield api.post("/export/start");
        setExportStatus(`Exporting products...`);
        let attempts = 0;
        while (attempts < 60) {
          yield new Promise((resolve) => setTimeout(resolve, 3e3));
          const status = yield api.get(`/jobs/${job.id}`);
          if (status.status === "completed") {
            const download = yield api.get(`/export/${job.id}/download`);
            setDownloadUrl(download.downloadUrl);
            setExportStatus(`Export complete! ${status.totalRows} products exported.`);
            break;
          } else if (status.status === "failed") {
            setExportStatus("Export failed");
            break;
          }
          setExportStatus(`Exporting... ${status.processedRows} products`);
          attempts++;
        }
      } catch (err) {
        setExportStatus(`Error: ${err instanceof Error ? err.message : "Export failed"}`);
      } finally {
        setIsExporting(false);
      }
    }), [api]);
    return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_ui2.ContextView, {
      title: "Product CSV Import/Export",
      children: /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(import_ui2.Box, {
        css: { padding: "medium", stack: "y", gap: "large" },
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(import_ui2.Box, {
            css: { stack: "y", gap: "small" },
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_ui2.Box, {
                css: { fontWeight: "semibold" },
                children: "Export Products"
              }),
              /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_ui2.Box, {
                children: "Download all your products as a CSV file."
              }),
              exportStatus && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_ui2.Box, {
                children: exportStatus
              }),
              /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_ui2.Box, {
                css: { stack: "x", gap: "small" },
                children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_ui2.Button, {
                  type: "primary",
                  onPress: handleExport,
                  disabled: isExporting,
                  children: isExporting ? "Exporting..." : "Export Products to CSV"
                })
              }),
              downloadUrl && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_ui2.Box, {
                css: { stack: "y", gap: "xsmall" },
                children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_ui2.Link, {
                  href: downloadUrl,
                  target: "_blank",
                  children: "Click here to download your CSV file"
                })
              })
            ]
          }),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(import_ui2.Box, {
            css: { stack: "y", gap: "small" },
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_ui2.Box, {
                css: { fontWeight: "semibold" },
                children: "Import Products"
              }),
              /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_ui2.Box, {
                children: "Upload a CSV file to create or update products."
              }),
              /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(ImportUpload_default, {
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
  var BUILD_TIME = "2026-02-14 21:36:42.6540874 +0100 CET m=+0.064810501";
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
      "content_security_policy": {
        "connect-src": [
          "http://localhost:8787/"
        ],
        "image-src": null,
        "purpose": "Connect to local development backend for CSV import/export operations"
      },
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL0BzdHJpcGUvc3JjL3ZlcnNpb24udHMiLCAiLi4vbm9kZV9tb2R1bGVzL0BzdHJpcGUvc3JjL3VpL2luZGV4LnRzeCIsICIuLi9ub2RlX21vZHVsZXMvaW52YXJpYW50L2Jyb3dzZXIuanMiLCAiLi4vbm9kZV9tb2R1bGVzL0BzdHJpcGUvc3JjL3V0aWxzL19lbmRwb2ludC50cyIsICIuLi9ub2RlX21vZHVsZXMvQHN0cmlwZS9zcmMvdXRpbHMvYXBpRmV0Y2gudHMiLCAiLi4vbm9kZV9tb2R1bGVzL0BzdHJpcGUvc3JjL3V0aWxzL2NsaXBib2FyZC50cyIsICIuLi9ub2RlX21vZHVsZXMvQHN0cmlwZS9zcmMvdXRpbHMvY29udGV4dC50cyIsICIuLi9ub2RlX21vZHVsZXMvQHN0cmlwZS9zcmMvdXRpbHMvaHR0cENsaWVudC50cyIsICIuLi9ub2RlX21vZHVsZXMvQHN0cmlwZS9zcmMvdXRpbHMvZ2V0RGFzaGJvYXJkVXNlckVtYWlsLnRzIiwgIi4uL25vZGVfbW9kdWxlcy9Ac3RyaXBlL3NyYy91dGlscy9nZXRVc2VyQXV0aG9yaXplZFBlcm1pc3Npb25zLnRzIiwgIi4uL25vZGVfbW9kdWxlcy9Ac3RyaXBlL3NyYy91dGlscy9pc1Blcm1pc3Npb25BdXRob3JpemVkLnRzIiwgIi4uL25vZGVfbW9kdWxlcy9Ac3RyaXBlL3NyYy91dGlscy9pc1NvdXJjZUluQXV0aG9yaXplZENTUC50cyIsICIuLi9ub2RlX21vZHVsZXMvQHN0cmlwZS9zcmMvdXRpbHMvb2F1dGgudHMiLCAiLi4vbm9kZV9tb2R1bGVzL0BzdHJpcGUvdWktZXh0ZW5zaW9uLXNkay91dGlscy9wbGF0Zm9ybVJwY3MuanMiLCAiLi4vbm9kZV9tb2R1bGVzL0BzdHJpcGUvc3JjL3V0aWxzL3NpZ25hdHVyZS50cyIsICIuLi9ub2RlX21vZHVsZXMvQHN0cmlwZS9zcmMvdXRpbHMvdG9hc3QudHMiLCAiLi4vbm9kZV9tb2R1bGVzL0BzdHJpcGUvc3JjL3V0aWxzL2luZGV4LnRzIiwgIm1hbmlmZXN0LmpzIiwgIi4uL3NyYy92aWV3cy9Qcm9kdWN0TGlzdFZpZXcudHN4IiwgIi4uL3NyYy9hcGkudHMiLCAiLi4vc3JjL2NvbXBvbmVudHMvSW1wb3J0VXBsb2FkLnRzeCJdLAogICJzb3VyY2VzQ29udGVudCI6IFtudWxsLCBudWxsLCAiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbi8qKlxuICogVXNlIGludmFyaWFudCgpIHRvIGFzc2VydCBzdGF0ZSB3aGljaCB5b3VyIHByb2dyYW0gYXNzdW1lcyB0byBiZSB0cnVlLlxuICpcbiAqIFByb3ZpZGUgc3ByaW50Zi1zdHlsZSBmb3JtYXQgKG9ubHkgJXMgaXMgc3VwcG9ydGVkKSBhbmQgYXJndW1lbnRzXG4gKiB0byBwcm92aWRlIGluZm9ybWF0aW9uIGFib3V0IHdoYXQgYnJva2UgYW5kIHdoYXQgeW91IHdlcmVcbiAqIGV4cGVjdGluZy5cbiAqXG4gKiBUaGUgaW52YXJpYW50IG1lc3NhZ2Ugd2lsbCBiZSBzdHJpcHBlZCBpbiBwcm9kdWN0aW9uLCBidXQgdGhlIGludmFyaWFudFxuICogd2lsbCByZW1haW4gdG8gZW5zdXJlIGxvZ2ljIGRvZXMgbm90IGRpZmZlciBpbiBwcm9kdWN0aW9uLlxuICovXG5cbnZhciBpbnZhcmlhbnQgPSBmdW5jdGlvbihjb25kaXRpb24sIGZvcm1hdCwgYSwgYiwgYywgZCwgZSwgZikge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmIChmb3JtYXQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdpbnZhcmlhbnQgcmVxdWlyZXMgYW4gZXJyb3IgbWVzc2FnZSBhcmd1bWVudCcpO1xuICAgIH1cbiAgfVxuXG4gIGlmICghY29uZGl0aW9uKSB7XG4gICAgdmFyIGVycm9yO1xuICAgIGlmIChmb3JtYXQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgZXJyb3IgPSBuZXcgRXJyb3IoXG4gICAgICAgICdNaW5pZmllZCBleGNlcHRpb24gb2NjdXJyZWQ7IHVzZSB0aGUgbm9uLW1pbmlmaWVkIGRldiBlbnZpcm9ubWVudCAnICtcbiAgICAgICAgJ2ZvciB0aGUgZnVsbCBlcnJvciBtZXNzYWdlIGFuZCBhZGRpdGlvbmFsIGhlbHBmdWwgd2FybmluZ3MuJ1xuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGFyZ3MgPSBbYSwgYiwgYywgZCwgZSwgZl07XG4gICAgICB2YXIgYXJnSW5kZXggPSAwO1xuICAgICAgZXJyb3IgPSBuZXcgRXJyb3IoXG4gICAgICAgIGZvcm1hdC5yZXBsYWNlKC8lcy9nLCBmdW5jdGlvbigpIHsgcmV0dXJuIGFyZ3NbYXJnSW5kZXgrK107IH0pXG4gICAgICApO1xuICAgICAgZXJyb3IubmFtZSA9ICdJbnZhcmlhbnQgVmlvbGF0aW9uJztcbiAgICB9XG5cbiAgICBlcnJvci5mcmFtZXNUb1BvcCA9IDE7IC8vIHdlIGRvbid0IGNhcmUgYWJvdXQgaW52YXJpYW50J3Mgb3duIGZyYW1lXG4gICAgdGhyb3cgZXJyb3I7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gaW52YXJpYW50O1xuIiwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cGxhdGZvcm1ScGNzLmpzLm1hcCIsIG51bGwsIG51bGwsIG51bGwsICIvLyBBVVRPR0VORVJBVEVEIC0gRE8gTk9UIE1PRElGWVxuaW1wb3J0IFByb2R1Y3RMaXN0VmlldyBmcm9tICcuLi9zcmMvdmlld3MvUHJvZHVjdExpc3RWaWV3JztcblxuZXhwb3J0ICogZnJvbSAnQHN0cmlwZS91aS1leHRlbnNpb24tc2RrL3ZlcnNpb24nO1xuZXhwb3J0IGNvbnN0IEJVSUxEX1RJTUUgPSAnMjAyNi0wMi0xNCAyMTozNjo0Mi42NTQwODc0ICswMTAwIENFVCBtPSswLjA2NDgxMDUwMSc7XG5cbmV4cG9ydCB7IFxuICBQcm9kdWN0TGlzdFZpZXdcdFxuIH07XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgXCJjb25uZWN0X3Blcm1pc3Npb25zXCI6IG51bGwsXG4gIFwiaWNvblwiOiBcIi4vaWNvbi5wbmdcIixcbiAgXCJpZFwiOiBcImNvbS5leGFtcGxlLnN0cmlwZXdvcmtlci1jc3ZcIixcbiAgXCJuYW1lXCI6IFwiUHJvZHVjdCBDU1YgSW1wb3J0LUV4cG9ydFwiLFxuICBcInBlcm1pc3Npb25zXCI6IFtcbiAgICB7XG4gICAgICBcInBlcm1pc3Npb25cIjogXCJwcm9kdWN0X3JlYWRcIixcbiAgICAgIFwicHVycG9zZVwiOiBcIkV4cG9ydCBwcm9kdWN0cyB0byBDU1ZcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJwZXJtaXNzaW9uXCI6IFwicHJvZHVjdF93cml0ZVwiLFxuICAgICAgXCJwdXJwb3NlXCI6IFwiSW1wb3J0IHByb2R1Y3RzIGZyb20gQ1NWXCJcbiAgICB9XG4gIF0sXG4gIFwicG9zdF9pbnN0YWxsX2FjdGlvblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiZXh0ZXJuYWxcIixcbiAgICBcInVybFwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS95b3VyLW9yZy9zdHJpcGV3b3JrZXIjcmVhZG1lXCJcbiAgfSxcbiAgXCJzdHJpcGVfYXBpX2FjY2Vzc190eXBlXCI6IFwicGxhdGZvcm1cIixcbiAgXCJ1aV9leHRlbnNpb25cIjoge1xuICAgIFwiY29udGVudF9zZWN1cml0eV9wb2xpY3lcIjoge1xuICAgICAgXCJjb25uZWN0LXNyY1wiOiBbXG4gICAgICAgIFwiaHR0cDovL2xvY2FsaG9zdDo4Nzg3L1wiXG4gICAgICBdLFxuICAgICAgXCJpbWFnZS1zcmNcIjogbnVsbCxcbiAgICAgIFwicHVycG9zZVwiOiBcIkNvbm5lY3QgdG8gbG9jYWwgZGV2ZWxvcG1lbnQgYmFja2VuZCBmb3IgQ1NWIGltcG9ydC9leHBvcnQgb3BlcmF0aW9uc1wiXG4gICAgfSxcbiAgICBcInZpZXdzXCI6IFtcbiAgICAgIHtcbiAgICAgICAgXCJjb21wb25lbnRcIjogXCJQcm9kdWN0TGlzdFZpZXdcIixcbiAgICAgICAgXCJ2aWV3cG9ydFwiOiBcInN0cmlwZS5kYXNoYm9hcmQucHJvZHVjdC5saXN0XCJcbiAgICAgIH1cbiAgICBdXG4gIH0sXG4gIFwidmVyc2lvblwiOiBcIjAuMC4xXCJcbn07XG4iLCAiLyoqXHJcbiAqIFByb2R1Y3RMaXN0VmlldyAtIE1haW4gYXBwIHZpZXcgZW1iZWRkZWQgaW4gU3RyaXBlIERhc2hib2FyZCBwcm9kdWN0IGxpc3RcclxuICogRm9sbG93aW5nIFN0cmlwZSBBcHBzIFNESyBkb2N1bWVudGF0aW9uIHN0cnVjdHVyZSBleGFjdGx5XHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge1xyXG4gIEJveCxcclxuICBDb250ZXh0VmlldyxcclxuICBCdXR0b24sXHJcbiAgTGluayxcclxufSBmcm9tICdAc3RyaXBlL3VpLWV4dGVuc2lvbi1zZGsvdWknO1xyXG5pbXBvcnQgdHlwZSB7IEV4dGVuc2lvbkNvbnRleHRWYWx1ZSB9IGZyb20gJ0BzdHJpcGUvdWktZXh0ZW5zaW9uLXNkay9jb250ZXh0JztcclxuaW1wb3J0IHsgY3JlYXRlQXBpQ2xpZW50LCBKb2IgfSBmcm9tICcuLi9hcGknO1xyXG5pbXBvcnQgSW1wb3J0VXBsb2FkIGZyb20gJy4uL2NvbXBvbmVudHMvSW1wb3J0VXBsb2FkJztcclxuXHJcbmNvbnN0IFByb2R1Y3RMaXN0VmlldyA9ICh7IHVzZXJDb250ZXh0IH06IEV4dGVuc2lvbkNvbnRleHRWYWx1ZSkgPT4ge1xyXG4gIGNvbnN0IFtleHBvcnRTdGF0dXMsIHNldEV4cG9ydFN0YXR1c10gPSB1c2VTdGF0ZTxzdHJpbmc+KCcnKTtcclxuICBjb25zdCBbZG93bmxvYWRVcmwsIHNldERvd25sb2FkVXJsXSA9IHVzZVN0YXRlPHN0cmluZyB8IG51bGw+KG51bGwpO1xyXG4gIGNvbnN0IFtpc0V4cG9ydGluZywgc2V0SXNFeHBvcnRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICAvLyBDaGVjayBmb3IgcmVxdWlyZWQgY29udGV4dFxyXG4gIGlmICghdXNlckNvbnRleHQ/LmlkIHx8ICF1c2VyQ29udGV4dD8uYWNjb3VudD8uaWQpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxDb250ZXh0VmlldyB0aXRsZT1cIlByb2R1Y3QgQ1NWIFRvb2xzXCI+XHJcbiAgICAgICAgPEJveCBjc3M9e3sgcGFkZGluZzogJ21lZGl1bScgfX0+XHJcbiAgICAgICAgICBMb2FkaW5nLi4uXHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgIDwvQ29udGV4dFZpZXc+XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgYXBpID0gY3JlYXRlQXBpQ2xpZW50KHtcclxuICAgIHVzZXJJZDogdXNlckNvbnRleHQuaWQsXHJcbiAgICBhY2NvdW50SWQ6IHVzZXJDb250ZXh0LmFjY291bnQuaWQsXHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUV4cG9ydCA9IHVzZUNhbGxiYWNrKGFzeW5jICgpID0+IHtcclxuICAgIHNldElzRXhwb3J0aW5nKHRydWUpO1xyXG4gICAgc2V0RXhwb3J0U3RhdHVzKCdTdGFydGluZyBleHBvcnQuLi4nKTtcclxuICAgIHNldERvd25sb2FkVXJsKG51bGwpO1xyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IGpvYiA9IGF3YWl0IGFwaS5wb3N0PEpvYj4oJy9leHBvcnQvc3RhcnQnKTtcclxuICAgICAgc2V0RXhwb3J0U3RhdHVzKGBFeHBvcnRpbmcgcHJvZHVjdHMuLi5gKTtcclxuXHJcbiAgICAgIC8vIFBvbGwgZm9yIGNvbXBsZXRpb25cclxuICAgICAgbGV0IGF0dGVtcHRzID0gMDtcclxuICAgICAgd2hpbGUgKGF0dGVtcHRzIDwgNjApIHtcclxuICAgICAgICBhd2FpdCBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgMzAwMCkpO1xyXG4gICAgICAgIGNvbnN0IHN0YXR1cyA9IGF3YWl0IGFwaS5nZXQ8Sm9iPihgL2pvYnMvJHtqb2IuaWR9YCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKHN0YXR1cy5zdGF0dXMgPT09ICdjb21wbGV0ZWQnKSB7XHJcbiAgICAgICAgICBjb25zdCBkb3dubG9hZCA9IGF3YWl0IGFwaS5nZXQ8eyBkb3dubG9hZFVybDogc3RyaW5nIH0+KGAvZXhwb3J0LyR7am9iLmlkfS9kb3dubG9hZGApO1xyXG4gICAgICAgICAgc2V0RG93bmxvYWRVcmwoZG93bmxvYWQuZG93bmxvYWRVcmwpO1xyXG4gICAgICAgICAgc2V0RXhwb3J0U3RhdHVzKGBFeHBvcnQgY29tcGxldGUhICR7c3RhdHVzLnRvdGFsUm93c30gcHJvZHVjdHMgZXhwb3J0ZWQuYCk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICB9IGVsc2UgaWYgKHN0YXR1cy5zdGF0dXMgPT09ICdmYWlsZWQnKSB7XHJcbiAgICAgICAgICBzZXRFeHBvcnRTdGF0dXMoJ0V4cG9ydCBmYWlsZWQnKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBzZXRFeHBvcnRTdGF0dXMoYEV4cG9ydGluZy4uLiAke3N0YXR1cy5wcm9jZXNzZWRSb3dzfSBwcm9kdWN0c2ApO1xyXG4gICAgICAgIGF0dGVtcHRzKys7XHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICBzZXRFeHBvcnRTdGF0dXMoYEVycm9yOiAke2VyciBpbnN0YW5jZW9mIEVycm9yID8gZXJyLm1lc3NhZ2UgOiAnRXhwb3J0IGZhaWxlZCd9YCk7XHJcbiAgICB9IGZpbmFsbHkge1xyXG4gICAgICBzZXRJc0V4cG9ydGluZyhmYWxzZSk7XHJcbiAgICB9XHJcbiAgfSwgW2FwaV0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPENvbnRleHRWaWV3IHRpdGxlPVwiUHJvZHVjdCBDU1YgSW1wb3J0L0V4cG9ydFwiPlxyXG4gICAgICA8Qm94IGNzcz17eyBwYWRkaW5nOiAnbWVkaXVtJywgc3RhY2s6ICd5JywgZ2FwOiAnbGFyZ2UnIH19PlxyXG4gICAgICAgIDxCb3ggY3NzPXt7IHN0YWNrOiAneScsIGdhcDogJ3NtYWxsJyB9fT5cclxuICAgICAgICAgIDxCb3ggY3NzPXt7IGZvbnRXZWlnaHQ6ICdzZW1pYm9sZCcgfX0+RXhwb3J0IFByb2R1Y3RzPC9Cb3g+XHJcbiAgICAgICAgICA8Qm94PkRvd25sb2FkIGFsbCB5b3VyIHByb2R1Y3RzIGFzIGEgQ1NWIGZpbGUuPC9Cb3g+XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIHtleHBvcnRTdGF0dXMgJiYgPEJveD57ZXhwb3J0U3RhdHVzfTwvQm94Pn1cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgPEJveCBjc3M9e3sgc3RhY2s6ICd4JywgZ2FwOiAnc21hbGwnIH19PlxyXG4gICAgICAgICAgICA8QnV0dG9uIFxyXG4gICAgICAgICAgICAgIHR5cGU9XCJwcmltYXJ5XCIgXHJcbiAgICAgICAgICAgICAgb25QcmVzcz17aGFuZGxlRXhwb3J0fVxyXG4gICAgICAgICAgICAgIGRpc2FibGVkPXtpc0V4cG9ydGluZ31cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIHtpc0V4cG9ydGluZyA/ICdFeHBvcnRpbmcuLi4nIDogJ0V4cG9ydCBQcm9kdWN0cyB0byBDU1YnfVxyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICB7ZG93bmxvYWRVcmwgJiYgKFxyXG4gICAgICAgICAgICA8Qm94IGNzcz17eyBzdGFjazogJ3knLCBnYXA6ICd4c21hbGwnIH19PlxyXG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2Rvd25sb2FkVXJsfSB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuICAgICAgICAgICAgICAgIENsaWNrIGhlcmUgdG8gZG93bmxvYWQgeW91ciBDU1YgZmlsZVxyXG4gICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvQm94PlxyXG5cclxuICAgICAgICA8Qm94IGNzcz17eyBzdGFjazogJ3knLCBnYXA6ICdzbWFsbCcgfX0+XHJcbiAgICAgICAgICA8Qm94IGNzcz17eyBmb250V2VpZ2h0OiAnc2VtaWJvbGQnIH19PkltcG9ydCBQcm9kdWN0czwvQm94PlxyXG4gICAgICAgICAgPEJveD5VcGxvYWQgYSBDU1YgZmlsZSB0byBjcmVhdGUgb3IgdXBkYXRlIHByb2R1Y3RzLjwvQm94PlxyXG4gICAgICAgICAgPEltcG9ydFVwbG9hZCBhcGk9e2FwaX0gLz5cclxuICAgICAgICA8L0JveD5cclxuICAgICAgPC9Cb3g+XHJcbiAgICA8L0NvbnRleHRWaWV3PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0TGlzdFZpZXc7XHJcbiIsICIvKipcclxuICogU2lnbmVkIEFQSSBjbGllbnQgaGVscGVyIHdpdGggZmV0Y2hTdHJpcGVTaWduYXR1cmUgZm9yIFN0cmlwZSBBcHBzIFVJXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgZmV0Y2hTdHJpcGVTaWduYXR1cmUgfSBmcm9tICdAc3RyaXBlL3VpLWV4dGVuc2lvbi1zZGsvdXRpbHMnO1xyXG5cclxuLy8gQmFja2VuZCBBUEkgYmFzZSBVUkwgLSBjb25maWd1cmUgYmFzZWQgb24gZW52aXJvbm1lbnRcclxuY29uc3QgQVBJX0JBU0VfVVJMID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCdcclxuICA/ICdodHRwOi8vbG9jYWxob3N0Ojg3ODcnXHJcbiAgOiAnaHR0cHM6Ly9zdHJpcGV3b3JrZXIud29ya2Vycy5kZXYnOyAvLyBSZXBsYWNlIHdpdGggYWN0dWFsIGRlcGxveW1lbnQgVVJMXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFNpZ25lZFJlcXVlc3RCb2R5IHtcclxuICB1c2VyX2lkOiBzdHJpbmc7XHJcbiAgYWNjb3VudF9pZDogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEFwaUNsaWVudE9wdGlvbnMge1xyXG4gIHVzZXJJZDogc3RyaW5nO1xyXG4gIGFjY291bnRJZDogc3RyaW5nO1xyXG59XHJcblxyXG4vKipcclxuICogQ3JlYXRlIGFuIEFQSSBjbGllbnQgd2l0aCBhdXRvbWF0aWMgc2lnbmF0dXJlIGdlbmVyYXRpb25cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVBcGlDbGllbnQob3B0aW9uczogQXBpQ2xpZW50T3B0aW9ucykge1xyXG4gIGNvbnN0IGJhc2VCb2R5OiBTaWduZWRSZXF1ZXN0Qm9keSA9IHtcclxuICAgIHVzZXJfaWQ6IG9wdGlvbnMudXNlcklkLFxyXG4gICAgYWNjb3VudF9pZDogb3B0aW9ucy5hY2NvdW50SWQsXHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIC8qKlxyXG4gICAgICogTWFrZSBhIHNpZ25lZCBQT1NUIHJlcXVlc3RcclxuICAgICAqL1xyXG4gICAgYXN5bmMgcG9zdDxUPihwYXRoOiBzdHJpbmcsIGJvZHk6IFJlY29yZDxzdHJpbmcsIHVua25vd24+ID0ge30pOiBQcm9taXNlPFQ+IHtcclxuICAgICAgY29uc3QgcmVxdWVzdEJvZHkgPSB7IC4uLmJhc2VCb2R5LCAuLi5ib2R5IH07XHJcbiAgICAgIGNvbnN0IHNpZ25hdHVyZSA9IGF3YWl0IGZldGNoU3RyaXBlU2lnbmF0dXJlKCk7XHJcblxyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke0FQSV9CQVNFX1VSTH0ke3BhdGh9YCwge1xyXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAnU3RyaXBlLVNpZ25hdHVyZSc6IHNpZ25hdHVyZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHJlcXVlc3RCb2R5KSxcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgY29uc3QgZXJyb3IgPSBhd2FpdCByZXNwb25zZS5qc29uKCkuY2F0Y2goKCkgPT4gKHsgZXJyb3I6ICdSZXF1ZXN0IGZhaWxlZCcgfSkpO1xyXG4gICAgICAgIHRocm93IG5ldyBBcGlFcnJvcihyZXNwb25zZS5zdGF0dXMsIChlcnJvciBhcyB7IGVycm9yPzogc3RyaW5nIH0pLmVycm9yID8/ICdSZXF1ZXN0IGZhaWxlZCcpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpIGFzIFByb21pc2U8VD47XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogTWFrZSBhIHNpZ25lZCBHRVQgcmVxdWVzdCAoc2lnbmF0dXJlIGluIGhlYWRlciwgYWNjb3VudCBpbiBxdWVyeSlcclxuICAgICAqL1xyXG4gICAgYXN5bmMgZ2V0PFQ+KHBhdGg6IHN0cmluZywgcGFyYW1zOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+ID0ge30pOiBQcm9taXNlPFQ+IHtcclxuICAgICAgY29uc3Qgc2lnbmF0dXJlID0gYXdhaXQgZmV0Y2hTdHJpcGVTaWduYXR1cmUoKTtcclxuICAgICAgY29uc3Qgc2VhcmNoUGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyh7XHJcbiAgICAgICAgLi4ucGFyYW1zLFxyXG4gICAgICAgIGFjY291bnRfaWQ6IG9wdGlvbnMuYWNjb3VudElkLFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7QVBJX0JBU0VfVVJMfSR7cGF0aH0/JHtzZWFyY2hQYXJhbXN9YCwge1xyXG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgJ1N0cmlwZS1TaWduYXR1cmUnOiBzaWduYXR1cmUsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgY29uc3QgZXJyb3IgPSBhd2FpdCByZXNwb25zZS5qc29uKCkuY2F0Y2goKCkgPT4gKHsgZXJyb3I6ICdSZXF1ZXN0IGZhaWxlZCcgfSkpO1xyXG4gICAgICAgIHRocm93IG5ldyBBcGlFcnJvcihyZXNwb25zZS5zdGF0dXMsIChlcnJvciBhcyB7IGVycm9yPzogc3RyaW5nIH0pLmVycm9yID8/ICdSZXF1ZXN0IGZhaWxlZCcpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpIGFzIFByb21pc2U8VD47XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogTWFrZSBhIHNpZ25lZCBERUxFVEUgcmVxdWVzdFxyXG4gICAgICovXHJcbiAgICBhc3luYyBkZWxldGU8VD4ocGF0aDogc3RyaW5nKTogUHJvbWlzZTxUPiB7XHJcbiAgICAgIGNvbnN0IHNpZ25hdHVyZSA9IGF3YWl0IGZldGNoU3RyaXBlU2lnbmF0dXJlKCk7XHJcblxyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke0FQSV9CQVNFX1VSTH0ke3BhdGh9P2FjY291bnRfaWQ9JHtvcHRpb25zLmFjY291bnRJZH1gLCB7XHJcbiAgICAgICAgbWV0aG9kOiAnREVMRVRFJyxcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAnU3RyaXBlLVNpZ25hdHVyZSc6IHNpZ25hdHVyZSxcclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcclxuICAgICAgICBjb25zdCBlcnJvciA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKS5jYXRjaCgoKSA9PiAoeyBlcnJvcjogJ1JlcXVlc3QgZmFpbGVkJyB9KSk7XHJcbiAgICAgICAgdGhyb3cgbmV3IEFwaUVycm9yKHJlc3BvbnNlLnN0YXR1cywgKGVycm9yIGFzIHsgZXJyb3I/OiBzdHJpbmcgfSkuZXJyb3IgPz8gJ1JlcXVlc3QgZmFpbGVkJyk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCkgYXMgUHJvbWlzZTxUPjtcclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBVcGxvYWQgYSBmaWxlIHRvIGEgcHJlc2lnbmVkIFVSTFxyXG4gICAgICovXHJcbiAgICBhc3luYyB1cGxvYWRGaWxlKHVwbG9hZFVybDogc3RyaW5nLCBmaWxlOiBGaWxlKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXBsb2FkVXJsLCB7XHJcbiAgICAgICAgbWV0aG9kOiAnUFVUJyxcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAnQ29udGVudC1UeXBlJzogZmlsZS50eXBlIHx8ICd0ZXh0L2NzdicsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBib2R5OiBmaWxlLFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcclxuICAgICAgICB0aHJvdyBuZXcgQXBpRXJyb3IocmVzcG9uc2Uuc3RhdHVzLCAnRmlsZSB1cGxvYWQgZmFpbGVkJyk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgfTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEFQSSBlcnJvciBjbGFzc1xyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEFwaUVycm9yIGV4dGVuZHMgRXJyb3Ige1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHVibGljIHJlYWRvbmx5IHN0YXR1czogbnVtYmVyLFxyXG4gICAgbWVzc2FnZTogc3RyaW5nXHJcbiAgKSB7XHJcbiAgICBzdXBlcihtZXNzYWdlKTtcclxuICAgIHRoaXMubmFtZSA9ICdBcGlFcnJvcic7XHJcbiAgfVxyXG59XHJcblxyXG4vLyBKb2IgdHlwZXMgZm9yIEFQSSByZXNwb25zZXNcclxuZXhwb3J0IGludGVyZmFjZSBKb2Ige1xyXG4gIGlkOiBzdHJpbmc7XHJcbiAgdHlwZTogJ2ltcG9ydCcgfCAnZXhwb3J0JztcclxuICBzdGF0dXM6ICdwZW5kaW5nJyB8ICdwcm9jZXNzaW5nJyB8ICdjb21wbGV0ZWQnIHwgJ2ZhaWxlZCcgfCAnY2FuY2VsbGVkJztcclxuICB0b3RhbFJvd3M6IG51bWJlcjtcclxuICBwcm9jZXNzZWRSb3dzOiBudW1iZXI7XHJcbiAgY3JlYXRlZENvdW50PzogbnVtYmVyO1xyXG4gIHVwZGF0ZWRDb3VudD86IG51bWJlcjtcclxuICBza2lwcGVkQ291bnQ/OiBudW1iZXI7XHJcbiAgZXJyb3JDb3VudDogbnVtYmVyO1xyXG4gIGRyeVJ1bj86IGJvb2xlYW47XHJcbiAgY3JlYXRlZEF0OiBzdHJpbmc7XHJcbiAgdXBkYXRlZEF0OiBzdHJpbmc7XHJcbiAgY29tcGxldGVkQXQ/OiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgVXBsb2FkVXJsUmVzcG9uc2Uge1xyXG4gIHVwbG9hZFVybDogc3RyaW5nO1xyXG4gIGpvYklkOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRG93bmxvYWRVcmxSZXNwb25zZSB7XHJcbiAgZG93bmxvYWRVcmw6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBFcnJvcnNSZXNwb25zZSB7XHJcbiAgZG93bmxvYWRVcmw6IHN0cmluZztcclxuICBlcnJvckNvdW50OiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSm9iTGlzdFJlc3BvbnNlIHtcclxuICBqb2JzOiBKb2JbXTtcclxufVxyXG4iLCAiLyoqXHJcbiAqIEltcG9ydFVwbG9hZCBjb21wb25lbnQgLSBmaWxlIHNlbGVjdGlvbiBhbmQgdXBsb2FkIGZvciBDU1YgaW1wb3J0XHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtcclxuICBCb3gsXHJcbiAgQnV0dG9uLFxyXG4gIFNwaW5uZXIsXHJcbiAgQmFubmVyLFxyXG4gIENoZWNrYm94LFxyXG59IGZyb20gJ0BzdHJpcGUvdWktZXh0ZW5zaW9uLXNkay91aSc7XHJcbmltcG9ydCB0eXBlIHsgY3JlYXRlQXBpQ2xpZW50LCBKb2IsIFVwbG9hZFVybFJlc3BvbnNlIH0gZnJvbSAnLi4vYXBpJztcclxuXHJcbmludGVyZmFjZSBJbXBvcnRVcGxvYWRQcm9wcyB7XHJcbiAgYXBpOiBSZXR1cm5UeXBlPHR5cGVvZiBjcmVhdGVBcGlDbGllbnQ+O1xyXG59XHJcblxyXG5jb25zdCBJbXBvcnRVcGxvYWQgPSAoeyBhcGkgfTogSW1wb3J0VXBsb2FkUHJvcHMpID0+IHtcclxuICBjb25zdCBbc2VsZWN0ZWRGaWxlLCBzZXRTZWxlY3RlZEZpbGVdID0gdXNlU3RhdGU8RmlsZSB8IG51bGw+KG51bGwpO1xyXG4gIGNvbnN0IFtpc1VwbG9hZGluZywgc2V0SXNVcGxvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtpc1Byb2Nlc3NpbmcsIHNldElzUHJvY2Vzc2luZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2N1cnJlbnRKb2IsIHNldEN1cnJlbnRKb2JdID0gdXNlU3RhdGU8Sm9iIHwgbnVsbD4obnVsbCk7XHJcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZTxzdHJpbmcgfCBudWxsPihudWxsKTtcclxuICBjb25zdCBbZHJ5UnVuLCBzZXREcnlSdW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IGZpbGVJbnB1dFJlZiA9IHVzZVJlZjxIVE1MSW5wdXRFbGVtZW50PihudWxsKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlRmlsZVNlbGVjdCA9ICgpID0+IHtcclxuICAgIGZpbGVJbnB1dFJlZi5jdXJyZW50Py5jbGljaygpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUZpbGVDaGFuZ2UgPSAoZXZlbnQ6IEV2ZW50KSA9PiB7XHJcbiAgICBjb25zdCBpbnB1dCA9IGV2ZW50LnRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG4gICAgY29uc3QgZmlsZSA9IGlucHV0LmZpbGVzPy5bMF07XHJcbiAgICBpZiAoZmlsZSkge1xyXG4gICAgICBpZiAoIWZpbGUubmFtZS50b0xvd2VyQ2FzZSgpLmVuZHNXaXRoKCcuY3N2JykpIHtcclxuICAgICAgICBzZXRFcnJvcignUGxlYXNlIHNlbGVjdCBhIENTViBmaWxlJyk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIHNldFNlbGVjdGVkRmlsZShmaWxlKTtcclxuICAgICAgc2V0RXJyb3IobnVsbCk7XHJcbiAgICAgIHNldEN1cnJlbnRKb2IobnVsbCk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlVXBsb2FkID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgaWYgKCFzZWxlY3RlZEZpbGUpIHJldHVybjtcclxuXHJcbiAgICBzZXRJc1VwbG9hZGluZyh0cnVlKTtcclxuICAgIHNldEVycm9yKG51bGwpO1xyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgIC8vIFN0ZXAgMTogR2V0IHByZXNpZ25lZCB1cGxvYWQgVVJMXHJcbiAgICAgIGNvbnN0IHVwbG9hZFJlc3BvbnNlID0gYXdhaXQgYXBpLnBvc3Q8VXBsb2FkVXJsUmVzcG9uc2U+KCcvaW1wb3J0L3VwbG9hZC11cmwnLCB7XHJcbiAgICAgICAgZmlsZW5hbWU6IHNlbGVjdGVkRmlsZS5uYW1lLFxyXG4gICAgICAgIGNvbnRlbnRUeXBlOiBzZWxlY3RlZEZpbGUudHlwZSB8fCAndGV4dC9jc3YnLFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIC8vIFN0ZXAgMjogVXBsb2FkIGZpbGUgdG8gcHJlc2lnbmVkIFVSTFxyXG4gICAgICBhd2FpdCBhcGkudXBsb2FkRmlsZSh1cGxvYWRSZXNwb25zZS51cGxvYWRVcmwsIHNlbGVjdGVkRmlsZSk7XHJcblxyXG4gICAgICAvLyBTdGVwIDM6IFN0YXJ0IGltcG9ydCBqb2JcclxuICAgICAgc2V0SXNQcm9jZXNzaW5nKHRydWUpO1xyXG4gICAgICBjb25zdCBqb2IgPSBhd2FpdCBhcGkucG9zdDxKb2I+KGAvaW1wb3J0LyR7dXBsb2FkUmVzcG9uc2Uuam9iSWR9L3N0YXJ0YCwge1xyXG4gICAgICAgIGRyeVJ1bixcclxuICAgICAgfSk7XHJcbiAgICAgIHNldEN1cnJlbnRKb2Ioam9iKTtcclxuXHJcbiAgICAgIC8vIFN0ZXAgNDogUG9sbCBmb3IgY2h1bmsgcHJvY2Vzc2luZ1xyXG4gICAgICBhd2FpdCBwcm9jZXNzQ2h1bmtzKHVwbG9hZFJlc3BvbnNlLmpvYklkKTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICBzZXRFcnJvcihlcnIgaW5zdGFuY2VvZiBFcnJvciA/IGVyci5tZXNzYWdlIDogJ1VwbG9hZCBmYWlsZWQnKTtcclxuICAgIH0gZmluYWxseSB7XHJcbiAgICAgIHNldElzVXBsb2FkaW5nKGZhbHNlKTtcclxuICAgICAgc2V0SXNQcm9jZXNzaW5nKGZhbHNlKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBwcm9jZXNzQ2h1bmtzID0gYXN5bmMgKGpvYklkOiBzdHJpbmcpID0+IHtcclxuICAgIGNvbnN0IG1heEF0dGVtcHRzID0gNjAwOyAvLyAzMCBtaW51dGVzIG1heCAoYXQgMyBzZWNvbmQgaW50ZXJ2YWxzKVxyXG4gICAgbGV0IGF0dGVtcHRzID0gMDtcclxuXHJcbiAgICB3aGlsZSAoYXR0ZW1wdHMgPCBtYXhBdHRlbXB0cykge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIC8vIFByb2Nlc3MgbmV4dCBjaHVua1xyXG4gICAgICAgIGNvbnN0IGpvYiA9IGF3YWl0IGFwaS5wb3N0PEpvYj4oYC9pbXBvcnQvJHtqb2JJZH0vcHJvY2Vzc2AsIHtcclxuICAgICAgICAgIGJhdGNoU2l6ZTogMTAwLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHNldEN1cnJlbnRKb2Ioam9iKTtcclxuXHJcbiAgICAgICAgaWYgKGpvYi5zdGF0dXMgPT09ICdjb21wbGV0ZWQnIHx8IGpvYi5zdGF0dXMgPT09ICdmYWlsZWQnIHx8IGpvYi5zdGF0dXMgPT09ICdjYW5jZWxsZWQnKSB7XHJcbiAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBCcmllZiBwYXVzZSBiZXR3ZWVuIGNodW5rc1xyXG4gICAgICAgIGF3YWl0IG5ldyBQcm9taXNlKHJlc29sdmUgPT4gc2V0VGltZW91dChyZXNvbHZlLCAxMDApKTtcclxuICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignQ2h1bmsgcHJvY2Vzc2luZyBlcnJvcjonLCBlcnIpO1xyXG4gICAgICAgIGF3YWl0IG5ldyBQcm9taXNlKHJlc29sdmUgPT4gc2V0VGltZW91dChyZXNvbHZlLCAzMDAwKSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGF0dGVtcHRzKys7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0RXJyb3IoJ0ltcG9ydCB0aW1lZCBvdXQnKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVDYW5jZWwgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBpZiAoIWN1cnJlbnRKb2IgfHwgY3VycmVudEpvYi5zdGF0dXMgIT09ICdwcm9jZXNzaW5nJykgcmV0dXJuO1xyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgIGF3YWl0IGFwaS5kZWxldGUoYC9qb2JzLyR7Y3VycmVudEpvYi5pZH1gKTtcclxuICAgICAgc2V0Q3VycmVudEpvYihwcmV2ID0+IHByZXYgPyB7IC4uLnByZXYsIHN0YXR1czogJ2NhbmNlbGxlZCcgfSA6IG51bGwpO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0NhbmNlbCBlcnJvcjonLCBlcnIpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGdldFByb2dyZXNzID0gKCkgPT4ge1xyXG4gICAgaWYgKCFjdXJyZW50Sm9iIHx8IGN1cnJlbnRKb2IudG90YWxSb3dzID09PSAwKSByZXR1cm4gMDtcclxuICAgIHJldHVybiBNYXRoLnJvdW5kKChjdXJyZW50Sm9iLnByb2Nlc3NlZFJvd3MgLyBjdXJyZW50Sm9iLnRvdGFsUm93cykgKiAxMDApO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Qm94IGNzcz17eyBzdGFjazogJ3knLCBnYXA6ICdzbWFsbCcgfX0+XHJcbiAgICAgIHsvKiBIaWRkZW4gZmlsZSBpbnB1dCAqL31cclxuICAgICAgPGlucHV0XHJcbiAgICAgICAgcmVmPXtmaWxlSW5wdXRSZWZ9XHJcbiAgICAgICAgdHlwZT1cImZpbGVcIlxyXG4gICAgICAgIGFjY2VwdD1cIi5jc3ZcIlxyXG4gICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6ICdub25lJyB9fVxyXG4gICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVGaWxlQ2hhbmdlIGFzIHVua25vd24gYXMgUmVhY3QuQ2hhbmdlRXZlbnRIYW5kbGVyPEhUTUxJbnB1dEVsZW1lbnQ+fVxyXG4gICAgICAvPlxyXG5cclxuICAgICAge2Vycm9yICYmIChcclxuICAgICAgICA8QmFubmVyXHJcbiAgICAgICAgICB0eXBlPVwiY3JpdGljYWxcIlxyXG4gICAgICAgICAgdGl0bGU9XCJJbXBvcnQgRXJyb3JcIlxyXG4gICAgICAgICAgZGVzY3JpcHRpb249e2Vycm9yfVxyXG4gICAgICAgICAgb25EaXNtaXNzPXsoKSA9PiBzZXRFcnJvcihudWxsKX1cclxuICAgICAgICAvPlxyXG4gICAgICApfVxyXG5cclxuICAgICAgey8qIEZpbGUgc2VsZWN0aW9uICovfVxyXG4gICAgICB7IWlzUHJvY2Vzc2luZyAmJiAhY3VycmVudEpvYiAmJiAoXHJcbiAgICAgICAgPEJveCBjc3M9e3sgc3RhY2s6ICd5JywgZ2FwOiAnc21hbGwnIH19PlxyXG4gICAgICAgICAgPEJveCBjc3M9e3sgc3RhY2s6ICd4JywgZ2FwOiAnc21hbGwnLCBhbGlnblk6ICdjZW50ZXInIH19PlxyXG4gICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJzZWNvbmRhcnlcIiBvblByZXNzPXtoYW5kbGVGaWxlU2VsZWN0fT5cclxuICAgICAgICAgICAgICBTZWxlY3QgQ1NWIEZpbGVcclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgIHtzZWxlY3RlZEZpbGUgJiYgKFxyXG4gICAgICAgICAgICAgIDxCb3g+XHJcbiAgICAgICAgICAgICAgICB7c2VsZWN0ZWRGaWxlLm5hbWV9ICh7TWF0aC5yb3VuZChzZWxlY3RlZEZpbGUuc2l6ZSAvIDEwMjQpfSBLQilcclxuICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIDwvQm94PlxyXG5cclxuICAgICAgICAgIHtzZWxlY3RlZEZpbGUgJiYgKFxyXG4gICAgICAgICAgICA8Qm94IGNzcz17eyBzdGFjazogJ3knLCBnYXA6ICdzbWFsbCcgfX0+XHJcbiAgICAgICAgICAgICAgPENoZWNrYm94XHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIkRyeSBydW4gKHByZXZpZXcgY2hhbmdlcyB3aXRob3V0IGFwcGx5aW5nKVwiXHJcbiAgICAgICAgICAgICAgICBjaGVja2VkPXtkcnlSdW59XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldERyeVJ1bihlLnRhcmdldC5jaGVja2VkKX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgIHR5cGU9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgIG9uUHJlc3M9e2hhbmRsZVVwbG9hZH1cclxuICAgICAgICAgICAgICAgIGRpc2FibGVkPXtpc1VwbG9hZGluZ31cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7aXNVcGxvYWRpbmcgPyAnVXBsb2FkaW5nLi4uJyA6IChkcnlSdW4gPyAnUHJldmlldyBJbXBvcnQnIDogJ0ltcG9ydCBQcm9kdWN0cycpfVxyXG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgICl9XHJcblxyXG4gICAgICB7LyogUHJvY2Vzc2luZyBwcm9ncmVzcyAqL31cclxuICAgICAge2lzUHJvY2Vzc2luZyAmJiBjdXJyZW50Sm9iICYmIChcclxuICAgICAgICA8Qm94IGNzcz17eyBzdGFjazogJ3knLCBnYXA6ICdzbWFsbCcgfX0+XHJcbiAgICAgICAgICA8Qm94IGNzcz17eyBzdGFjazogJ3gnLCBnYXA6ICdzbWFsbCcsIGFsaWduWTogJ2NlbnRlcicgfX0+XHJcbiAgICAgICAgICAgIDxTcGlubmVyIHNpemU9XCJzbWFsbFwiIC8+XHJcbiAgICAgICAgICAgIDxCb3g+XHJcbiAgICAgICAgICAgICAge2RyeVJ1biA/ICdQcmV2aWV3aW5nJyA6ICdJbXBvcnRpbmcnfToge2dldFByb2dyZXNzKCl9JSAoe2N1cnJlbnRKb2IucHJvY2Vzc2VkUm93c30ve2N1cnJlbnRKb2IudG90YWxSb3dzfSByb3dzKVxyXG4gICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICB7Y3VycmVudEpvYi50eXBlID09PSAnaW1wb3J0JyAmJiAoXHJcbiAgICAgICAgICAgIDxCb3g+XHJcbiAgICAgICAgICAgICAgQ3JlYXRlZDoge2N1cnJlbnRKb2IuY3JlYXRlZENvdW50ID8/IDB9IHwgXHJcbiAgICAgICAgICAgICAgVXBkYXRlZDoge2N1cnJlbnRKb2IudXBkYXRlZENvdW50ID8/IDB9IHwgXHJcbiAgICAgICAgICAgICAgU2tpcHBlZDoge2N1cnJlbnRKb2Iuc2tpcHBlZENvdW50ID8/IDB9XHJcbiAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJkZXN0cnVjdGl2ZVwiIG9uUHJlc3M9e2hhbmRsZUNhbmNlbH0+XHJcbiAgICAgICAgICAgIENhbmNlbFxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgICl9XHJcblxyXG4gICAgICB7LyogQ29tcGxldGlvbiByZXN1bHQgKi99XHJcbiAgICAgIHtjdXJyZW50Sm9iICYmIGN1cnJlbnRKb2Iuc3RhdHVzID09PSAnY29tcGxldGVkJyAmJiAhaXNQcm9jZXNzaW5nICYmIChcclxuICAgICAgICA8QmFubmVyXHJcbiAgICAgICAgICB0eXBlPVwiZGVmYXVsdFwiXHJcbiAgICAgICAgICB0aXRsZT17ZHJ5UnVuID8gJ0RyeSBSdW4gQ29tcGxldGUnIDogJ0ltcG9ydCBDb21wbGV0ZSd9XHJcbiAgICAgICAgICBkZXNjcmlwdGlvbj17XHJcbiAgICAgICAgICAgIGRyeVJ1blxyXG4gICAgICAgICAgICAgID8gYFByZXZpZXc6IFdvdWxkIGNyZWF0ZSAke2N1cnJlbnRKb2IuY3JlYXRlZENvdW50ID8/IDB9LCB1cGRhdGUgJHtjdXJyZW50Sm9iLnVwZGF0ZWRDb3VudCA/PyAwfSwgc2tpcCAke2N1cnJlbnRKb2Iuc2tpcHBlZENvdW50ID8/IDB9IHByb2R1Y3RzLmBcclxuICAgICAgICAgICAgICA6IGBTdWNjZXNzZnVsbHkgY3JlYXRlZCAke2N1cnJlbnRKb2IuY3JlYXRlZENvdW50ID8/IDB9LCB1cGRhdGVkICR7Y3VycmVudEpvYi51cGRhdGVkQ291bnQgPz8gMH0gcHJvZHVjdHMuICR7Y3VycmVudEpvYi5za2lwcGVkQ291bnQgPz8gMH0gc2tpcHBlZC5gXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBhY3Rpb25zPXtcclxuICAgICAgICAgICAgZHJ5UnVuID8gKFxyXG4gICAgICAgICAgICAgIDxCdXR0b24gb25QcmVzcz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgc2V0RHJ5UnVuKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIHNldEN1cnJlbnRKb2IobnVsbCk7XHJcbiAgICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgICAgICBQcm9jZWVkIHdpdGggSW1wb3J0XHJcbiAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICkgOiB1bmRlZmluZWRcclxuICAgICAgICAgIH1cclxuICAgICAgICAvPlxyXG4gICAgICApfVxyXG4gICAgPC9Cb3g+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEltcG9ydFVwbG9hZDtcclxuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBYSxjQUFBLGNBQWM7Ozs7Ozs7Ozs7O0FDVTNCLFVBQUEsVUFBQSxVQUFBO0FBQ0EsVUFBQSxZQUFBO0FBRUEsVUFBTSxlQUFlLENBQ25CLGNBQ0U7QUFDRixjQUFNLHVCQUF1QixVQUFVLGVBQWUsVUFBVSxTQUFRO0FBQ3hFLGNBQU0sZUFFRixDQUFDLFdBQ0gsR0FBQSxjQUFBLEtBQUMsV0FBUyxPQUFBLE9BQUEsQ0FBQSxHQUNKLE9BQUssRUFDVCxzQkFDQSxZQUFZLFVBQUEsYUFDWixlQUFjLEtBQUksQ0FBQSxDQUFBO0FBSXRCLHFCQUFhLHVCQUF1QjtBQUVwQyxlQUFPO01BQ1Q7QUFFQSxVQUFNLGtCQUFrQixDQUl0QixNQUNBLGVBQ0EscUJBQ0U7QUFDRixjQUFNLG1CQUFrQixHQUFBLFFBQUEsNEJB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QUEsT0FDRjtBQUFBLEtBQ0Y7QUFBQSxFQUVKO0FBRUEsTUFBTywwQkFBUTs7O0FEM0dmLCtCQUFjO0FBQ1AsTUFBTSxhQUFhO0FBTTFCLE1BQU8sbUJBQVE7QUFBQSxJQUNiLHVCQUF1QjtBQUFBLElBQ3ZCLFFBQVE7QUFBQSxJQUNSLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLGVBQWU7QUFBQSxNQUNiO0FBQUEsUUFDRSxjQUFjO0FBQUEsUUFDZCxXQUFXO0FBQUEsTUFDYjtBQUFBLE1BQ0E7QUFBQSxRQUNFLGNBQWM7QUFBQSxRQUNkLFdBQVc7QUFBQSxNQUNiO0FBQUEsSUFDRjtBQUFBLElBQ0EsdUJBQXVCO0FBQUEsTUFDckIsUUFBUTtBQUFBLE1BQ1IsT0FBTztBQUFBLElBQ1Q7QUFBQSxJQUNBLDBCQUEwQjtBQUFBLElBQzFCLGdCQUFnQjtBQUFBLE1BQ2QsMkJBQTJCO0FBQUEsUUFDekIsZUFBZTtBQUFBLFVBQ2I7QUFBQSxRQUNGO0FBQUEsUUFDQSxhQUFhO0FBQUEsUUFDYixXQUFXO0FBQUEsTUFDYjtBQUFBLE1BQ0EsU0FBUztBQUFBLFFBQ1A7QUFBQSxVQUNFLGFBQWE7QUFBQSxVQUNiLFlBQVk7QUFBQSxRQUNkO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxJQUNBLFdBQVc7QUFBQSxFQUNiOyIsCiAgIm5hbWVzIjogWyJmZXRjaCIsICJmZXRjaFN0cmlwZVNpZ25hdHVyZSIsICJpbXBvcnRfcmVhY3QiLCAiaW1wb3J0X3VpIiwgIl9hIiwgIl9hIiwgImltcG9ydF9qc3hfcnVudGltZSJdCn0K
