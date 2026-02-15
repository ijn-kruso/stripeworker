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
  var API_BASE_URL = true ? "http://localhost:8787" : "https://api.stripeworker.com";
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
      },
      uploadCsvContent(uploadUrl, content) {
        return __async(this, null, function* () {
          const response = yield fetch(uploadUrl, {
            method: "PUT",
            headers: {
              "Content-Type": "text/csv"
            },
            body: content
          });
          if (!response.ok) {
            throw new ApiError(response.status, "CSV upload failed");
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
    const [csvContent, setCsvContent] = (0, import_react.useState)("");
    const [isUploading, setIsUploading] = (0, import_react.useState)(false);
    const [isProcessing, setIsProcessing] = (0, import_react.useState)(false);
    const [currentJob, setCurrentJob] = (0, import_react.useState)(null);
    const [error, setError] = (0, import_react.useState)(null);
    const [dryRun, setDryRun] = (0, import_react.useState)(false);
    const handleUpload = () => __async(void 0, null, function* () {
      if (!csvContent.trim()) {
        setError("Please paste CSV content");
        return;
      }
      const lines = csvContent.trim().split("\n");
      if (lines.length < 2) {
        setError("CSV must have a header row and at least one data row");
        return;
      }
      setIsUploading(true);
      setError(null);
      try {
        const job = yield api.post("/import/from-csv-content", {
          csvContent,
          dryRun
        });
        setCurrentJob(job);
        setIsProcessing(true);
        yield processChunks(job.id);
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
    const handleReset = () => {
      setCsvContent("");
      setCurrentJob(null);
      setError(null);
      setDryRun(false);
    };
    const getProgress = () => {
      if (!currentJob || currentJob.totalRows === 0)
        return 0;
      return Math.round(currentJob.processedRows / currentJob.totalRows * 100);
    };
    const getRowCount = () => {
      if (!csvContent.trim())
        return 0;
      return Math.max(0, csvContent.trim().split("\n").length - 1);
    };
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_ui.Box, {
      css: { stack: "y", gap: "small" },
      children: [
        error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_ui.Banner, {
          type: "critical",
          title: "Import Error",
          description: error,
          onDismiss: () => setError(null)
        }),
        !isProcessing && !currentJob && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_ui.Box, {
          css: { stack: "y", gap: "small" },
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_ui.TextArea, {
              label: "Paste CSV content",
              placeholder: "id,name,description,active\nprod_xxx,My Product,Description,true\n...",
              value: csvContent,
              onChange: (e) => setCsvContent(e.target.value),
              rows: 8
            }),
            csvContent.trim() && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_ui.Box, {
              css: { color: "secondary" },
              children: [
                getRowCount(),
                " data row(s) detected"
              ]
            }),
            csvContent.trim() && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_ui.Box, {
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
        currentJob && currentJob.status === "completed" && !isProcessing && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_ui.Box, {
          css: { stack: "y", gap: "small" },
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_ui.Banner, {
              type: "default",
              title: dryRun ? "Dry Run Complete" : "Import Complete",
              description: dryRun ? `Preview: Would create ${(_d = currentJob.createdCount) != null ? _d : 0}, update ${(_e = currentJob.updatedCount) != null ? _e : 0}, skip ${(_f = currentJob.skippedCount) != null ? _f : 0} products.` : `Successfully created ${(_g = currentJob.createdCount) != null ? _g : 0}, updated ${(_h = currentJob.updatedCount) != null ? _h : 0} products. ${(_i = currentJob.skippedCount) != null ? _i : 0} skipped.`
            }),
            dryRun ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_ui.Button, {
              type: "primary",
              onPress: () => {
                setDryRun(false);
                setCurrentJob(null);
              },
              children: "Proceed with Import"
            }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_ui.Button, {
              type: "secondary",
              onPress: handleReset,
              children: "Import Another File"
            })
          ]
        }),
        currentJob && currentJob.status === "failed" && !isProcessing && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_ui.Box, {
          css: { stack: "y", gap: "small" },
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_ui.Banner, {
              type: "critical",
              title: "Import Failed",
              description: "The import encountered an error and could not complete."
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_ui.Button, {
              type: "secondary",
              onPress: handleReset,
              children: "Try Again"
            })
          ]
        })
      ]
    });
  };
  var ImportUpload_default = ImportUpload;

  // src/icon.svg
  var icon_default = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0iI2ZmZmZmZiI+DQogIDwhLS0gU3ByZWFkc2hlZXQvdGFibGUgaWNvbiAtLT4NCiAgPHJlY3QgeD0iNCIgeT0iNCIgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0IiByeD0iMiIgcnk9IjIiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIyIi8+DQogIDwhLS0gSGVhZGVyIHJvdyAtLT4NCiAgPHJlY3QgeD0iNCIgeT0iNCIgd2lkdGg9IjI0IiBoZWlnaHQ9IjYiIHJ4PSIyIiByeT0iMiIvPg0KICA8IS0tIFZlcnRpY2FsIGRpdmlkZXJzIC0tPg0KICA8bGluZSB4MT0iMTIiIHkxPSIxMCIgeDI9IjEyIiB5Mj0iMjgiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIxLjUiLz4NCiAgPGxpbmUgeDE9IjIwIiB5MT0iMTAiIHgyPSIyMCIgeTI9IjI4IiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMS41Ii8+DQogIDwhLS0gSG9yaXpvbnRhbCBkaXZpZGVycyAtLT4NCiAgPGxpbmUgeDE9IjQiIHkxPSIxNiIgeDI9IjI4IiB5Mj0iMTYiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIxLjUiLz4NCiAgPGxpbmUgeDE9IjQiIHkxPSIyMiIgeDI9IjI4IiB5Mj0iMjIiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIxLjUiLz4NCjwvc3ZnPg0K";

  // src/views/ProductListView.tsx
  var import_jsx_runtime2 = __require("react/jsx-runtime");
  var ProductListView = ({ userContext }) => {
    var _a;
    const [viewState, setViewState] = (0, import_react2.useState)("home");
    const [exportStatus, setExportStatus] = (0, import_react2.useState)("");
    const [downloadUrl, setDownloadUrl] = (0, import_react2.useState)(null);
    const [isExporting, setIsExporting] = (0, import_react2.useState)(false);
    if (!(userContext == null ? void 0 : userContext.id) || !((_a = userContext == null ? void 0 : userContext.account) == null ? void 0 : _a.id)) {
      return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_ui2.ContextView, {
        title: "Products",
        brandColor: "#635bff",
        brandIcon: icon_default,
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
    if (viewState === "home") {
      return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_ui2.ContextView, {
        title: "Stripeworker",
        description: "Import and export Stripe resources to and from CSV",
        brandColor: "#635bff",
        brandIcon: icon_default,
        children: /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(import_ui2.Box, {
          css: { padding: "medium", stack: "y", gap: "medium" },
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_ui2.Box, {
              css: { fontWeight: "semibold" },
              children: "Select Resource Type"
            }),
            /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(import_ui2.Button, {
              type: "primary",
              onPress: () => setViewState("products"),
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_ui2.Icon, {
                  name: "product",
                  size: "xsmall"
                }),
                " Products"
              ]
            })
          ]
        })
      });
    }
    return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_ui2.ContextView, {
      title: "Products",
      description: "Import and export products to and from CSV",
      brandColor: "#635bff",
      brandIcon: icon_default,
      children: /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(import_ui2.Box, {
        css: { padding: "medium", stack: "y", gap: "large" },
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(import_ui2.Link, {
            type: "secondary",
            onPress: () => setViewState("home"),
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_ui2.Icon, {
                name: "arrowLeft",
                size: "xsmall"
              }),
              " Back"
            ]
          }),
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
                children: "Paste CSV content to create or update products."
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
  var BUILD_TIME = "2026-02-15 16:05:34.2310028 +0100 CET m=+5.020100101";
  var manifest_default = {
    "connect_permissions": null,
    "distribution_type": "private",
    "icon": "./src/icon.png",
    "id": "stripeworker.com",
    "name": "Stripeworker",
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
      "url": "https://stripeworker.com"
    },
    "stripe_api_access_type": "platform",
    "ui_extension": {
      "content_security_policy": {
        "connect-src": [
          "https://api.stripeworker.com/health",
          "https://api.stripeworker.com/export/start",
          "https://api.stripeworker.com/export/",
          "https://api.stripeworker.com/import/from-stripe-file",
          "https://api.stripeworker.com/import/from-csv-content",
          "https://api.stripeworker.com/import/upload-url",
          "https://api.stripeworker.com/import/",
          "https://api.stripeworker.com/jobs",
          "https://api.stripeworker.com/jobs/",
          "https://api.stripeworker.com/mappings",
          "https://api.stripeworker.com/mappings/",
          "https://api.stripeworker.com/storage/upload",
          "https://api.stripeworker.com/storage/download"
        ],
        "image-src": null,
        "purpose": "Connect to backend API for CSV import/export operations"
      },
      "views": [
        {
          "component": "ProductListView",
          "viewport": "stripe.dashboard.product.list"
        }
      ]
    },
    "version": "1.0.2"
  };
  return __toCommonJS(manifest_exports);
})();
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL0BzdHJpcGUvc3JjL3ZlcnNpb24udHMiLCAiLi4vbm9kZV9tb2R1bGVzL0BzdHJpcGUvc3JjL3VpL2luZGV4LnRzeCIsICIuLi9ub2RlX21vZHVsZXMvaW52YXJpYW50L2Jyb3dzZXIuanMiLCAiLi4vbm9kZV9tb2R1bGVzL0BzdHJpcGUvc3JjL3V0aWxzL19lbmRwb2ludC50cyIsICIuLi9ub2RlX21vZHVsZXMvQHN0cmlwZS9zcmMvdXRpbHMvYXBpRmV0Y2gudHMiLCAiLi4vbm9kZV9tb2R1bGVzL0BzdHJpcGUvc3JjL3V0aWxzL2NsaXBib2FyZC50cyIsICIuLi9ub2RlX21vZHVsZXMvQHN0cmlwZS9zcmMvdXRpbHMvY29udGV4dC50cyIsICIuLi9ub2RlX21vZHVsZXMvQHN0cmlwZS9zcmMvdXRpbHMvaHR0cENsaWVudC50cyIsICIuLi9ub2RlX21vZHVsZXMvQHN0cmlwZS9zcmMvdXRpbHMvZ2V0RGFzaGJvYXJkVXNlckVtYWlsLnRzIiwgIi4uL25vZGVfbW9kdWxlcy9Ac3RyaXBlL3NyYy91dGlscy9nZXRVc2VyQXV0aG9yaXplZFBlcm1pc3Npb25zLnRzIiwgIi4uL25vZGVfbW9kdWxlcy9Ac3RyaXBlL3NyYy91dGlscy9pc1Blcm1pc3Npb25BdXRob3JpemVkLnRzIiwgIi4uL25vZGVfbW9kdWxlcy9Ac3RyaXBlL3NyYy91dGlscy9pc1NvdXJjZUluQXV0aG9yaXplZENTUC50cyIsICIuLi9ub2RlX21vZHVsZXMvQHN0cmlwZS9zcmMvdXRpbHMvb2F1dGgudHMiLCAiLi4vbm9kZV9tb2R1bGVzL0BzdHJpcGUvdWktZXh0ZW5zaW9uLXNkay91dGlscy9wbGF0Zm9ybVJwY3MuanMiLCAiLi4vbm9kZV9tb2R1bGVzL0BzdHJpcGUvc3JjL3V0aWxzL3NpZ25hdHVyZS50cyIsICIuLi9ub2RlX21vZHVsZXMvQHN0cmlwZS9zcmMvdXRpbHMvdG9hc3QudHMiLCAiLi4vbm9kZV9tb2R1bGVzL0BzdHJpcGUvc3JjL3V0aWxzL2luZGV4LnRzIiwgIm1hbmlmZXN0LmpzIiwgIi4uL3NyYy92aWV3cy9Qcm9kdWN0TGlzdFZpZXcudHN4IiwgIi4uL3NyYy9hcGkudHMiLCAiLi4vc3JjL2NvbXBvbmVudHMvSW1wb3J0VXBsb2FkLnRzeCJdLAogICJzb3VyY2VzQ29udGVudCI6IFtudWxsLCBudWxsLCAiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbi8qKlxuICogVXNlIGludmFyaWFudCgpIHRvIGFzc2VydCBzdGF0ZSB3aGljaCB5b3VyIHByb2dyYW0gYXNzdW1lcyB0byBiZSB0cnVlLlxuICpcbiAqIFByb3ZpZGUgc3ByaW50Zi1zdHlsZSBmb3JtYXQgKG9ubHkgJXMgaXMgc3VwcG9ydGVkKSBhbmQgYXJndW1lbnRzXG4gKiB0byBwcm92aWRlIGluZm9ybWF0aW9uIGFib3V0IHdoYXQgYnJva2UgYW5kIHdoYXQgeW91IHdlcmVcbiAqIGV4cGVjdGluZy5cbiAqXG4gKiBUaGUgaW52YXJpYW50IG1lc3NhZ2Ugd2lsbCBiZSBzdHJpcHBlZCBpbiBwcm9kdWN0aW9uLCBidXQgdGhlIGludmFyaWFudFxuICogd2lsbCByZW1haW4gdG8gZW5zdXJlIGxvZ2ljIGRvZXMgbm90IGRpZmZlciBpbiBwcm9kdWN0aW9uLlxuICovXG5cbnZhciBpbnZhcmlhbnQgPSBmdW5jdGlvbihjb25kaXRpb24sIGZvcm1hdCwgYSwgYiwgYywgZCwgZSwgZikge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmIChmb3JtYXQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdpbnZhcmlhbnQgcmVxdWlyZXMgYW4gZXJyb3IgbWVzc2FnZSBhcmd1bWVudCcpO1xuICAgIH1cbiAgfVxuXG4gIGlmICghY29uZGl0aW9uKSB7XG4gICAgdmFyIGVycm9yO1xuICAgIGlmIChmb3JtYXQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgZXJyb3IgPSBuZXcgRXJyb3IoXG4gICAgICAgICdNaW5pZmllZCBleGNlcHRpb24gb2NjdXJyZWQ7IHVzZSB0aGUgbm9uLW1pbmlmaWVkIGRldiBlbnZpcm9ubWVudCAnICtcbiAgICAgICAgJ2ZvciB0aGUgZnVsbCBlcnJvciBtZXNzYWdlIGFuZCBhZGRpdGlvbmFsIGhlbHBmdWwgd2FybmluZ3MuJ1xuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGFyZ3MgPSBbYSwgYiwgYywgZCwgZSwgZl07XG4gICAgICB2YXIgYXJnSW5kZXggPSAwO1xuICAgICAgZXJyb3IgPSBuZXcgRXJyb3IoXG4gICAgICAgIGZvcm1hdC5yZXBsYWNlKC8lcy9nLCBmdW5jdGlvbigpIHsgcmV0dXJuIGFyZ3NbYXJnSW5kZXgrK107IH0pXG4gICAgICApO1xuICAgICAgZXJyb3IubmFtZSA9ICdJbnZhcmlhbnQgVmlvbGF0aW9uJztcbiAgICB9XG5cbiAgICBlcnJvci5mcmFtZXNUb1BvcCA9IDE7IC8vIHdlIGRvbid0IGNhcmUgYWJvdXQgaW52YXJpYW50J3Mgb3duIGZyYW1lXG4gICAgdGhyb3cgZXJyb3I7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gaW52YXJpYW50O1xuIiwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cGxhdGZvcm1ScGNzLmpzLm1hcCIsIG51bGwsIG51bGwsIG51bGwsICIvLyBBVVRPR0VORVJBVEVEIC0gRE8gTk9UIE1PRElGWVxuaW1wb3J0IFByb2R1Y3RMaXN0VmlldyBmcm9tICcuLi9zcmMvdmlld3MvUHJvZHVjdExpc3RWaWV3JztcblxuZXhwb3J0ICogZnJvbSAnQHN0cmlwZS91aS1leHRlbnNpb24tc2RrL3ZlcnNpb24nO1xuZXhwb3J0IGNvbnN0IEJVSUxEX1RJTUUgPSAnMjAyNi0wMi0xNSAxNjowNTozNC4yMzEwMDI4ICswMTAwIENFVCBtPSs1LjAyMDEwMDEwMSc7XG5cbmV4cG9ydCB7IFxuICBQcm9kdWN0TGlzdFZpZXdcdFxuIH07XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgXCJjb25uZWN0X3Blcm1pc3Npb25zXCI6IG51bGwsXG4gIFwiZGlzdHJpYnV0aW9uX3R5cGVcIjogXCJwcml2YXRlXCIsXG4gIFwiaWNvblwiOiBcIi4vc3JjL2ljb24ucG5nXCIsXG4gIFwiaWRcIjogXCJzdHJpcGV3b3JrZXIuY29tXCIsXG4gIFwibmFtZVwiOiBcIlN0cmlwZXdvcmtlclwiLFxuICBcInBlcm1pc3Npb25zXCI6IFtcbiAgICB7XG4gICAgICBcInBlcm1pc3Npb25cIjogXCJwcm9kdWN0X3JlYWRcIixcbiAgICAgIFwicHVycG9zZVwiOiBcIkV4cG9ydCBwcm9kdWN0cyB0byBDU1ZcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJwZXJtaXNzaW9uXCI6IFwicHJvZHVjdF93cml0ZVwiLFxuICAgICAgXCJwdXJwb3NlXCI6IFwiSW1wb3J0IHByb2R1Y3RzIGZyb20gQ1NWXCJcbiAgICB9XG4gIF0sXG4gIFwicG9zdF9pbnN0YWxsX2FjdGlvblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiZXh0ZXJuYWxcIixcbiAgICBcInVybFwiOiBcImh0dHBzOi8vc3RyaXBld29ya2VyLmNvbVwiXG4gIH0sXG4gIFwic3RyaXBlX2FwaV9hY2Nlc3NfdHlwZVwiOiBcInBsYXRmb3JtXCIsXG4gIFwidWlfZXh0ZW5zaW9uXCI6IHtcbiAgICBcImNvbnRlbnRfc2VjdXJpdHlfcG9saWN5XCI6IHtcbiAgICAgIFwiY29ubmVjdC1zcmNcIjogW1xuICAgICAgICBcImh0dHBzOi8vYXBpLnN0cmlwZXdvcmtlci5jb20vaGVhbHRoXCIsXG4gICAgICAgIFwiaHR0cHM6Ly9hcGkuc3RyaXBld29ya2VyLmNvbS9leHBvcnQvc3RhcnRcIixcbiAgICAgICAgXCJodHRwczovL2FwaS5zdHJpcGV3b3JrZXIuY29tL2V4cG9ydC9cIixcbiAgICAgICAgXCJodHRwczovL2FwaS5zdHJpcGV3b3JrZXIuY29tL2ltcG9ydC9mcm9tLXN0cmlwZS1maWxlXCIsXG4gICAgICAgIFwiaHR0cHM6Ly9hcGkuc3RyaXBld29ya2VyLmNvbS9pbXBvcnQvZnJvbS1jc3YtY29udGVudFwiLFxuICAgICAgICBcImh0dHBzOi8vYXBpLnN0cmlwZXdvcmtlci5jb20vaW1wb3J0L3VwbG9hZC11cmxcIixcbiAgICAgICAgXCJodHRwczovL2FwaS5zdHJpcGV3b3JrZXIuY29tL2ltcG9ydC9cIixcbiAgICAgICAgXCJodHRwczovL2FwaS5zdHJpcGV3b3JrZXIuY29tL2pvYnNcIixcbiAgICAgICAgXCJodHRwczovL2FwaS5zdHJpcGV3b3JrZXIuY29tL2pvYnMvXCIsXG4gICAgICAgIFwiaHR0cHM6Ly9hcGkuc3RyaXBld29ya2VyLmNvbS9tYXBwaW5nc1wiLFxuICAgICAgICBcImh0dHBzOi8vYXBpLnN0cmlwZXdvcmtlci5jb20vbWFwcGluZ3MvXCIsXG4gICAgICAgIFwiaHR0cHM6Ly9hcGkuc3RyaXBld29ya2VyLmNvbS9zdG9yYWdlL3VwbG9hZFwiLFxuICAgICAgICBcImh0dHBzOi8vYXBpLnN0cmlwZXdvcmtlci5jb20vc3RvcmFnZS9kb3dubG9hZFwiXG4gICAgICBdLFxuICAgICAgXCJpbWFnZS1zcmNcIjogbnVsbCxcbiAgICAgIFwicHVycG9zZVwiOiBcIkNvbm5lY3QgdG8gYmFja2VuZCBBUEkgZm9yIENTViBpbXBvcnQvZXhwb3J0IG9wZXJhdGlvbnNcIlxuICAgIH0sXG4gICAgXCJ2aWV3c1wiOiBbXG4gICAgICB7XG4gICAgICAgIFwiY29tcG9uZW50XCI6IFwiUHJvZHVjdExpc3RWaWV3XCIsXG4gICAgICAgIFwidmlld3BvcnRcIjogXCJzdHJpcGUuZGFzaGJvYXJkLnByb2R1Y3QubGlzdFwiXG4gICAgICB9XG4gICAgXVxuICB9LFxuICBcInZlcnNpb25cIjogXCIxLjAuMlwiXG59O1xuIiwgIi8qKlxyXG4gKiBQcm9kdWN0TGlzdFZpZXcgLSBNYWluIGFwcCB2aWV3IGVtYmVkZGVkIGluIFN0cmlwZSBEYXNoYm9hcmQgcHJvZHVjdCBsaXN0XHJcbiAqIEZvbGxvd2luZyBTdHJpcGUgQXBwcyBTREsgZG9jdW1lbnRhdGlvbiBzdHJ1Y3R1cmUgZXhhY3RseVxyXG4gKi9cclxuXHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtcclxuICBCb3gsXHJcbiAgQ29udGV4dFZpZXcsXHJcbiAgQnV0dG9uLFxyXG4gIExpbmssXHJcbiAgSWNvbixcclxufSBmcm9tICdAc3RyaXBlL3VpLWV4dGVuc2lvbi1zZGsvdWknO1xyXG5pbXBvcnQgdHlwZSB7IEV4dGVuc2lvbkNvbnRleHRWYWx1ZSB9IGZyb20gJ0BzdHJpcGUvdWktZXh0ZW5zaW9uLXNkay9jb250ZXh0JztcclxuaW1wb3J0IHsgY3JlYXRlQXBpQ2xpZW50LCBKb2IgfSBmcm9tICcuLi9hcGknO1xyXG5pbXBvcnQgSW1wb3J0VXBsb2FkIGZyb20gJy4uL2NvbXBvbmVudHMvSW1wb3J0VXBsb2FkJztcclxuaW1wb3J0IGJyYW5kSWNvbiBmcm9tICcuLi9pY29uLnN2Zyc7XHJcblxyXG50eXBlIFZpZXdTdGF0ZSA9ICdob21lJyB8ICdwcm9kdWN0cyc7XHJcblxyXG5jb25zdCBQcm9kdWN0TGlzdFZpZXcgPSAoeyB1c2VyQ29udGV4dCB9OiBFeHRlbnNpb25Db250ZXh0VmFsdWUpID0+IHtcclxuICBjb25zdCBbdmlld1N0YXRlLCBzZXRWaWV3U3RhdGVdID0gdXNlU3RhdGU8Vmlld1N0YXRlPignaG9tZScpO1xyXG4gIGNvbnN0IFtleHBvcnRTdGF0dXMsIHNldEV4cG9ydFN0YXR1c10gPSB1c2VTdGF0ZTxzdHJpbmc+KCcnKTtcclxuICBjb25zdCBbZG93bmxvYWRVcmwsIHNldERvd25sb2FkVXJsXSA9IHVzZVN0YXRlPHN0cmluZyB8IG51bGw+KG51bGwpO1xyXG4gIGNvbnN0IFtpc0V4cG9ydGluZywgc2V0SXNFeHBvcnRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICAvLyBDaGVjayBmb3IgcmVxdWlyZWQgY29udGV4dFxyXG4gIGlmICghdXNlckNvbnRleHQ/LmlkIHx8ICF1c2VyQ29udGV4dD8uYWNjb3VudD8uaWQpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxDb250ZXh0VmlldyBcclxuICAgICAgICB0aXRsZT1cIlByb2R1Y3RzXCIgXHJcbiAgICAgICAgYnJhbmRDb2xvcj1cIiM2MzViZmZcIiBcclxuICAgICAgICBicmFuZEljb249e2JyYW5kSWNvbn1cclxuICAgICAgPlxyXG4gICAgICAgIDxCb3ggY3NzPXt7IHBhZGRpbmc6ICdtZWRpdW0nIH19PlxyXG4gICAgICAgICAgTG9hZGluZy4uLlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8L0NvbnRleHRWaWV3PlxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGFwaSA9IGNyZWF0ZUFwaUNsaWVudCh7XHJcbiAgICB1c2VySWQ6IHVzZXJDb250ZXh0LmlkLFxyXG4gICAgYWNjb3VudElkOiB1c2VyQ29udGV4dC5hY2NvdW50LmlkLFxyXG4gIH0pO1xyXG5cclxuICBjb25zdCBoYW5kbGVFeHBvcnQgPSB1c2VDYWxsYmFjayhhc3luYyAoKSA9PiB7XHJcbiAgICBzZXRJc0V4cG9ydGluZyh0cnVlKTtcclxuICAgIHNldEV4cG9ydFN0YXR1cygnU3RhcnRpbmcgZXhwb3J0Li4uJyk7XHJcbiAgICBzZXREb3dubG9hZFVybChudWxsKTtcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBqb2IgPSBhd2FpdCBhcGkucG9zdDxKb2I+KCcvZXhwb3J0L3N0YXJ0Jyk7XHJcbiAgICAgIHNldEV4cG9ydFN0YXR1cyhgRXhwb3J0aW5nIHByb2R1Y3RzLi4uYCk7XHJcblxyXG4gICAgICAvLyBQb2xsIGZvciBjb21wbGV0aW9uXHJcbiAgICAgIGxldCBhdHRlbXB0cyA9IDA7XHJcbiAgICAgIHdoaWxlIChhdHRlbXB0cyA8IDYwKSB7XHJcbiAgICAgICAgYXdhaXQgbmV3IFByb21pc2UocmVzb2x2ZSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIDMwMDApKTtcclxuICAgICAgICBjb25zdCBzdGF0dXMgPSBhd2FpdCBhcGkuZ2V0PEpvYj4oYC9qb2JzLyR7am9iLmlkfWApO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmIChzdGF0dXMuc3RhdHVzID09PSAnY29tcGxldGVkJykge1xyXG4gICAgICAgICAgY29uc3QgZG93bmxvYWQgPSBhd2FpdCBhcGkuZ2V0PHsgZG93bmxvYWRVcmw6IHN0cmluZyB9PihgL2V4cG9ydC8ke2pvYi5pZH0vZG93bmxvYWRgKTtcclxuICAgICAgICAgIHNldERvd25sb2FkVXJsKGRvd25sb2FkLmRvd25sb2FkVXJsKTtcclxuICAgICAgICAgIHNldEV4cG9ydFN0YXR1cyhgRXhwb3J0IGNvbXBsZXRlISAke3N0YXR1cy50b3RhbFJvd3N9IHByb2R1Y3RzIGV4cG9ydGVkLmApO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfSBlbHNlIGlmIChzdGF0dXMuc3RhdHVzID09PSAnZmFpbGVkJykge1xyXG4gICAgICAgICAgc2V0RXhwb3J0U3RhdHVzKCdFeHBvcnQgZmFpbGVkJyk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgc2V0RXhwb3J0U3RhdHVzKGBFeHBvcnRpbmcuLi4gJHtzdGF0dXMucHJvY2Vzc2VkUm93c30gcHJvZHVjdHNgKTtcclxuICAgICAgICBhdHRlbXB0cysrO1xyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgc2V0RXhwb3J0U3RhdHVzKGBFcnJvcjogJHtlcnIgaW5zdGFuY2VvZiBFcnJvciA/IGVyci5tZXNzYWdlIDogJ0V4cG9ydCBmYWlsZWQnfWApO1xyXG4gICAgfSBmaW5hbGx5IHtcclxuICAgICAgc2V0SXNFeHBvcnRpbmcoZmFsc2UpO1xyXG4gICAgfVxyXG4gIH0sIFthcGldKTtcclxuXHJcbiAgLy8gSG9tZSB2aWV3IC0gc2VsZWN0IHJlc291cmNlIHR5cGVcclxuICBpZiAodmlld1N0YXRlID09PSAnaG9tZScpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxDb250ZXh0VmlldyBcclxuICAgICAgICB0aXRsZT1cIlN0cmlwZXdvcmtlclwiIFxyXG4gICAgICAgIGRlc2NyaXB0aW9uPVwiSW1wb3J0IGFuZCBleHBvcnQgU3RyaXBlIHJlc291cmNlcyB0byBhbmQgZnJvbSBDU1ZcIlxyXG4gICAgICAgIGJyYW5kQ29sb3I9XCIjNjM1YmZmXCIgXHJcbiAgICAgICAgYnJhbmRJY29uPXticmFuZEljb259XHJcbiAgICAgID5cclxuICAgICAgICA8Qm94IGNzcz17eyBwYWRkaW5nOiAnbWVkaXVtJywgc3RhY2s6ICd5JywgZ2FwOiAnbWVkaXVtJyB9fT5cclxuICAgICAgICAgIDxCb3ggY3NzPXt7IGZvbnRXZWlnaHQ6ICdzZW1pYm9sZCcgfX0+U2VsZWN0IFJlc291cmNlIFR5cGU8L0JveD5cclxuICAgICAgICAgIDxCdXR0b24gdHlwZT1cInByaW1hcnlcIiBvblByZXNzPXsoKSA9PiBzZXRWaWV3U3RhdGUoJ3Byb2R1Y3RzJyl9PlxyXG4gICAgICAgICAgICA8SWNvbiBuYW1lPVwicHJvZHVjdFwiIHNpemU9XCJ4c21hbGxcIiAvPiBQcm9kdWN0c1xyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgIDwvQ29udGV4dFZpZXc+XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgLy8gUHJvZHVjdHMgdmlldyAtIGltcG9ydC9leHBvcnQgcHJvZHVjdHNcclxuICByZXR1cm4gKFxyXG4gICAgPENvbnRleHRWaWV3IFxyXG4gICAgICB0aXRsZT1cIlByb2R1Y3RzXCIgXHJcbiAgICAgIGRlc2NyaXB0aW9uPVwiSW1wb3J0IGFuZCBleHBvcnQgcHJvZHVjdHMgdG8gYW5kIGZyb20gQ1NWXCJcclxuICAgICAgYnJhbmRDb2xvcj1cIiM2MzViZmZcIiBcclxuICAgICAgYnJhbmRJY29uPXticmFuZEljb259XHJcbiAgICA+XHJcbiAgICAgIDxCb3ggY3NzPXt7IHBhZGRpbmc6ICdtZWRpdW0nLCBzdGFjazogJ3knLCBnYXA6ICdsYXJnZScgfX0+XHJcbiAgICAgICAgPExpbmsgdHlwZT1cInNlY29uZGFyeVwiIG9uUHJlc3M9eygpID0+IHNldFZpZXdTdGF0ZSgnaG9tZScpfT5cclxuICAgICAgICAgIDxJY29uIG5hbWU9XCJhcnJvd0xlZnRcIiBzaXplPVwieHNtYWxsXCIgLz4gQmFja1xyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgICA8Qm94IGNzcz17eyBzdGFjazogJ3knLCBnYXA6ICdzbWFsbCcgfX0+XHJcbiAgICAgICAgICA8Qm94IGNzcz17eyBmb250V2VpZ2h0OiAnc2VtaWJvbGQnIH19PkV4cG9ydCBQcm9kdWN0czwvQm94PlxyXG4gICAgICAgICAgPEJveD5Eb3dubG9hZCBhbGwgeW91ciBwcm9kdWN0cyBhcyBhIENTViBmaWxlLjwvQm94PlxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICB7ZXhwb3J0U3RhdHVzICYmIDxCb3g+e2V4cG9ydFN0YXR1c308L0JveD59XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIDxCb3ggY3NzPXt7IHN0YWNrOiAneCcsIGdhcDogJ3NtYWxsJyB9fT5cclxuICAgICAgICAgICAgPEJ1dHRvbiBcclxuICAgICAgICAgICAgICB0eXBlPVwicHJpbWFyeVwiIFxyXG4gICAgICAgICAgICAgIG9uUHJlc3M9e2hhbmRsZUV4cG9ydH1cclxuICAgICAgICAgICAgICBkaXNhYmxlZD17aXNFeHBvcnRpbmd9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICB7aXNFeHBvcnRpbmcgPyAnRXhwb3J0aW5nLi4uJyA6ICdFeHBvcnQgUHJvZHVjdHMgdG8gQ1NWJ31cclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgIFxyXG4gICAgICAgICAge2Rvd25sb2FkVXJsICYmIChcclxuICAgICAgICAgICAgPEJveCBjc3M9e3sgc3RhY2s6ICd5JywgZ2FwOiAneHNtYWxsJyB9fT5cclxuICAgICAgICAgICAgICA8TGluayBocmVmPXtkb3dubG9hZFVybH0gdGFyZ2V0PVwiX2JsYW5rXCI+XHJcbiAgICAgICAgICAgICAgICBDbGljayBoZXJlIHRvIGRvd25sb2FkIHlvdXIgQ1NWIGZpbGVcclxuICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L0JveD5cclxuXHJcbiAgICAgICAgPEJveCBjc3M9e3sgc3RhY2s6ICd5JywgZ2FwOiAnc21hbGwnIH19PlxyXG4gICAgICAgICAgPEJveCBjc3M9e3sgZm9udFdlaWdodDogJ3NlbWlib2xkJyB9fT5JbXBvcnQgUHJvZHVjdHM8L0JveD5cclxuICAgICAgICAgIDxCb3g+UGFzdGUgQ1NWIGNvbnRlbnQgdG8gY3JlYXRlIG9yIHVwZGF0ZSBwcm9kdWN0cy48L0JveD5cclxuICAgICAgICAgIDxJbXBvcnRVcGxvYWQgYXBpPXthcGl9IC8+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgIDwvQm94PlxyXG4gICAgPC9Db250ZXh0Vmlldz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdExpc3RWaWV3O1xyXG4iLCAiLyoqXHJcbiAqIFNpZ25lZCBBUEkgY2xpZW50IGhlbHBlciB3aXRoIGZldGNoU3RyaXBlU2lnbmF0dXJlIGZvciBTdHJpcGUgQXBwcyBVSVxyXG4gKi9cclxuXHJcbmltcG9ydCB7IGZldGNoU3RyaXBlU2lnbmF0dXJlIH0gZnJvbSAnQHN0cmlwZS91aS1leHRlbnNpb24tc2RrL3V0aWxzJztcclxuXHJcbi8vIEJhY2tlbmQgQVBJIGJhc2UgVVJMIC0gY29uZmlndXJlIGJhc2VkIG9uIGVudmlyb25tZW50XHJcbmNvbnN0IEFQSV9CQVNFX1VSTCA9IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnXHJcbiAgPyAnaHR0cDovL2xvY2FsaG9zdDo4Nzg3J1xyXG4gIDogJ2h0dHBzOi8vYXBpLnN0cmlwZXdvcmtlci5jb20nO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTaWduZWRSZXF1ZXN0Qm9keSB7XHJcbiAgdXNlcl9pZDogc3RyaW5nO1xyXG4gIGFjY291bnRfaWQ6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBBcGlDbGllbnRPcHRpb25zIHtcclxuICB1c2VySWQ6IHN0cmluZztcclxuICBhY2NvdW50SWQ6IHN0cmluZztcclxufVxyXG5cclxuLyoqXHJcbiAqIENyZWF0ZSBhbiBBUEkgY2xpZW50IHdpdGggYXV0b21hdGljIHNpZ25hdHVyZSBnZW5lcmF0aW9uXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQXBpQ2xpZW50KG9wdGlvbnM6IEFwaUNsaWVudE9wdGlvbnMpIHtcclxuICBjb25zdCBiYXNlQm9keTogU2lnbmVkUmVxdWVzdEJvZHkgPSB7XHJcbiAgICB1c2VyX2lkOiBvcHRpb25zLnVzZXJJZCxcclxuICAgIGFjY291bnRfaWQ6IG9wdGlvbnMuYWNjb3VudElkLFxyXG4gIH07XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICAvKipcclxuICAgICAqIE1ha2UgYSBzaWduZWQgUE9TVCByZXF1ZXN0XHJcbiAgICAgKi9cclxuICAgIGFzeW5jIHBvc3Q8VD4ocGF0aDogc3RyaW5nLCBib2R5OiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPiA9IHt9KTogUHJvbWlzZTxUPiB7XHJcbiAgICAgIGNvbnN0IHJlcXVlc3RCb2R5ID0geyAuLi5iYXNlQm9keSwgLi4uYm9keSB9O1xyXG4gICAgICBjb25zdCBzaWduYXR1cmUgPSBhd2FpdCBmZXRjaFN0cmlwZVNpZ25hdHVyZSgpO1xyXG5cclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHtBUElfQkFTRV9VUkx9JHtwYXRofWAsIHtcclxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgJ1N0cmlwZS1TaWduYXR1cmUnOiBzaWduYXR1cmUsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShyZXF1ZXN0Qm9keSksXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xyXG4gICAgICAgIGNvbnN0IGVycm9yID0gYXdhaXQgcmVzcG9uc2UuanNvbigpLmNhdGNoKCgpID0+ICh7IGVycm9yOiAnUmVxdWVzdCBmYWlsZWQnIH0pKTtcclxuICAgICAgICB0aHJvdyBuZXcgQXBpRXJyb3IocmVzcG9uc2Uuc3RhdHVzLCAoZXJyb3IgYXMgeyBlcnJvcj86IHN0cmluZyB9KS5lcnJvciA/PyAnUmVxdWVzdCBmYWlsZWQnKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKSBhcyBQcm9taXNlPFQ+O1xyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIE1ha2UgYSBzaWduZWQgR0VUIHJlcXVlc3QgKHNpZ25hdHVyZSBpbiBoZWFkZXIsIGFjY291bnQgaW4gcXVlcnkpXHJcbiAgICAgKi9cclxuICAgIGFzeW5jIGdldDxUPihwYXRoOiBzdHJpbmcsIHBhcmFtczogUmVjb3JkPHN0cmluZywgc3RyaW5nPiA9IHt9KTogUHJvbWlzZTxUPiB7XHJcbiAgICAgIGNvbnN0IHNpZ25hdHVyZSA9IGF3YWl0IGZldGNoU3RyaXBlU2lnbmF0dXJlKCk7XHJcbiAgICAgIGNvbnN0IHNlYXJjaFBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoe1xyXG4gICAgICAgIC4uLnBhcmFtcyxcclxuICAgICAgICBhY2NvdW50X2lkOiBvcHRpb25zLmFjY291bnRJZCxcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke0FQSV9CQVNFX1VSTH0ke3BhdGh9PyR7c2VhcmNoUGFyYW1zfWAsIHtcclxuICAgICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICdTdHJpcGUtU2lnbmF0dXJlJzogc2lnbmF0dXJlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xyXG4gICAgICAgIGNvbnN0IGVycm9yID0gYXdhaXQgcmVzcG9uc2UuanNvbigpLmNhdGNoKCgpID0+ICh7IGVycm9yOiAnUmVxdWVzdCBmYWlsZWQnIH0pKTtcclxuICAgICAgICB0aHJvdyBuZXcgQXBpRXJyb3IocmVzcG9uc2Uuc3RhdHVzLCAoZXJyb3IgYXMgeyBlcnJvcj86IHN0cmluZyB9KS5lcnJvciA/PyAnUmVxdWVzdCBmYWlsZWQnKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKSBhcyBQcm9taXNlPFQ+O1xyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIE1ha2UgYSBzaWduZWQgREVMRVRFIHJlcXVlc3RcclxuICAgICAqL1xyXG4gICAgYXN5bmMgZGVsZXRlPFQ+KHBhdGg6IHN0cmluZyk6IFByb21pc2U8VD4ge1xyXG4gICAgICBjb25zdCBzaWduYXR1cmUgPSBhd2FpdCBmZXRjaFN0cmlwZVNpZ25hdHVyZSgpO1xyXG5cclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHtBUElfQkFTRV9VUkx9JHtwYXRofT9hY2NvdW50X2lkPSR7b3B0aW9ucy5hY2NvdW50SWR9YCwge1xyXG4gICAgICAgIG1ldGhvZDogJ0RFTEVURScsXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgJ1N0cmlwZS1TaWduYXR1cmUnOiBzaWduYXR1cmUsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgY29uc3QgZXJyb3IgPSBhd2FpdCByZXNwb25zZS5qc29uKCkuY2F0Y2goKCkgPT4gKHsgZXJyb3I6ICdSZXF1ZXN0IGZhaWxlZCcgfSkpO1xyXG4gICAgICAgIHRocm93IG5ldyBBcGlFcnJvcihyZXNwb25zZS5zdGF0dXMsIChlcnJvciBhcyB7IGVycm9yPzogc3RyaW5nIH0pLmVycm9yID8/ICdSZXF1ZXN0IGZhaWxlZCcpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpIGFzIFByb21pc2U8VD47XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVXBsb2FkIGEgZmlsZSB0byBhIHByZXNpZ25lZCBVUkxcclxuICAgICAqL1xyXG4gICAgYXN5bmMgdXBsb2FkRmlsZSh1cGxvYWRVcmw6IHN0cmluZywgZmlsZTogRmlsZSk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVwbG9hZFVybCwge1xyXG4gICAgICAgIG1ldGhvZDogJ1BVVCcsXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6IGZpbGUudHlwZSB8fCAndGV4dC9jc3YnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYm9keTogZmlsZSxcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEFwaUVycm9yKHJlc3BvbnNlLnN0YXR1cywgJ0ZpbGUgdXBsb2FkIGZhaWxlZCcpO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVXBsb2FkIENTViB0ZXh0IGNvbnRlbnQgdG8gYSBwcmVzaWduZWQgVVJMXHJcbiAgICAgKi9cclxuICAgIGFzeW5jIHVwbG9hZENzdkNvbnRlbnQodXBsb2FkVXJsOiBzdHJpbmcsIGNvbnRlbnQ6IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVwbG9hZFVybCwge1xyXG4gICAgICAgIG1ldGhvZDogJ1BVVCcsXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICd0ZXh0L2NzdicsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBib2R5OiBjb250ZW50LFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcclxuICAgICAgICB0aHJvdyBuZXcgQXBpRXJyb3IocmVzcG9uc2Uuc3RhdHVzLCAnQ1NWIHVwbG9hZCBmYWlsZWQnKTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICB9O1xyXG59XHJcblxyXG4vKipcclxuICogQVBJIGVycm9yIGNsYXNzXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgQXBpRXJyb3IgZXh0ZW5kcyBFcnJvciB7XHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgc3RhdHVzOiBudW1iZXIsXHJcbiAgICBtZXNzYWdlOiBzdHJpbmdcclxuICApIHtcclxuICAgIHN1cGVyKG1lc3NhZ2UpO1xyXG4gICAgdGhpcy5uYW1lID0gJ0FwaUVycm9yJztcclxuICB9XHJcbn1cclxuXHJcbi8vIEpvYiB0eXBlcyBmb3IgQVBJIHJlc3BvbnNlc1xyXG5leHBvcnQgaW50ZXJmYWNlIEpvYiB7XHJcbiAgaWQ6IHN0cmluZztcclxuICB0eXBlOiAnaW1wb3J0JyB8ICdleHBvcnQnO1xyXG4gIHN0YXR1czogJ3BlbmRpbmcnIHwgJ3Byb2Nlc3NpbmcnIHwgJ2NvbXBsZXRlZCcgfCAnZmFpbGVkJyB8ICdjYW5jZWxsZWQnO1xyXG4gIHRvdGFsUm93czogbnVtYmVyO1xyXG4gIHByb2Nlc3NlZFJvd3M6IG51bWJlcjtcclxuICBjcmVhdGVkQ291bnQ/OiBudW1iZXI7XHJcbiAgdXBkYXRlZENvdW50PzogbnVtYmVyO1xyXG4gIHNraXBwZWRDb3VudD86IG51bWJlcjtcclxuICBlcnJvckNvdW50OiBudW1iZXI7XHJcbiAgZHJ5UnVuPzogYm9vbGVhbjtcclxuICBpbnB1dEZpbGVLZXk/OiBzdHJpbmc7XHJcbiAgY3JlYXRlZEF0OiBzdHJpbmc7XHJcbiAgdXBkYXRlZEF0OiBzdHJpbmc7XHJcbiAgY29tcGxldGVkQXQ/OiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgVXBsb2FkVXJsUmVzcG9uc2Uge1xyXG4gIHVwbG9hZFVybDogc3RyaW5nO1xyXG4gIGpvYklkOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRG93bmxvYWRVcmxSZXNwb25zZSB7XHJcbiAgZG93bmxvYWRVcmw6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBFcnJvcnNSZXNwb25zZSB7XHJcbiAgZG93bmxvYWRVcmw6IHN0cmluZztcclxuICBlcnJvckNvdW50OiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSm9iTGlzdFJlc3BvbnNlIHtcclxuICBqb2JzOiBKb2JbXTtcclxufVxyXG4iLCAiLyoqXHJcbiAqIEltcG9ydFVwbG9hZCBjb21wb25lbnQgLSBDU1YgaW1wb3J0IHZpYSB0ZXh0IHBhc3RlIChTdHJpcGUgQXBwcyBjb21wYXRpYmxlKVxyXG4gKi9cclxuXHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge1xyXG4gIEJveCxcclxuICBCdXR0b24sXHJcbiAgU3Bpbm5lcixcclxuICBCYW5uZXIsXHJcbiAgQ2hlY2tib3gsXHJcbiAgVGV4dEFyZWEsXHJcbn0gZnJvbSAnQHN0cmlwZS91aS1leHRlbnNpb24tc2RrL3VpJztcclxuaW1wb3J0IHR5cGUgeyBjcmVhdGVBcGlDbGllbnQsIEpvYiB9IGZyb20gJy4uL2FwaSc7XHJcblxyXG5pbnRlcmZhY2UgSW1wb3J0VXBsb2FkUHJvcHMge1xyXG4gIGFwaTogUmV0dXJuVHlwZTx0eXBlb2YgY3JlYXRlQXBpQ2xpZW50PjtcclxufVxyXG5cclxuY29uc3QgSW1wb3J0VXBsb2FkID0gKHsgYXBpIH06IEltcG9ydFVwbG9hZFByb3BzKSA9PiB7XHJcbiAgY29uc3QgW2NzdkNvbnRlbnQsIHNldENzdkNvbnRlbnRdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtpc1VwbG9hZGluZywgc2V0SXNVcGxvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtpc1Byb2Nlc3NpbmcsIHNldElzUHJvY2Vzc2luZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2N1cnJlbnRKb2IsIHNldEN1cnJlbnRKb2JdID0gdXNlU3RhdGU8Sm9iIHwgbnVsbD4obnVsbCk7XHJcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZTxzdHJpbmcgfCBudWxsPihudWxsKTtcclxuICBjb25zdCBbZHJ5UnVuLCBzZXREcnlSdW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBoYW5kbGVVcGxvYWQgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBpZiAoIWNzdkNvbnRlbnQudHJpbSgpKSB7XHJcbiAgICAgIHNldEVycm9yKCdQbGVhc2UgcGFzdGUgQ1NWIGNvbnRlbnQnKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEJhc2ljIHZhbGlkYXRpb246IGNoZWNrIGZvciBoZWFkZXIgcm93XHJcbiAgICBjb25zdCBsaW5lcyA9IGNzdkNvbnRlbnQudHJpbSgpLnNwbGl0KCdcXG4nKTtcclxuICAgIGlmIChsaW5lcy5sZW5ndGggPCAyKSB7XHJcbiAgICAgIHNldEVycm9yKCdDU1YgbXVzdCBoYXZlIGEgaGVhZGVyIHJvdyBhbmQgYXQgbGVhc3Qgb25lIGRhdGEgcm93Jyk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBzZXRJc1VwbG9hZGluZyh0cnVlKTtcclxuICAgIHNldEVycm9yKG51bGwpO1xyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgIC8vIFN0YXJ0IGltcG9ydCB3aXRoIENTViBjb250ZW50IHNlbnQgZGlyZWN0bHkgdG8gYmFja2VuZFxyXG4gICAgICBjb25zdCBqb2IgPSBhd2FpdCBhcGkucG9zdDxKb2I+KCcvaW1wb3J0L2Zyb20tY3N2LWNvbnRlbnQnLCB7XHJcbiAgICAgICAgY3N2Q29udGVudCxcclxuICAgICAgICBkcnlSdW4sXHJcbiAgICAgIH0pO1xyXG4gICAgICBzZXRDdXJyZW50Sm9iKGpvYik7XHJcbiAgICAgIHNldElzUHJvY2Vzc2luZyh0cnVlKTtcclxuXHJcbiAgICAgIC8vIFBvbGwgZm9yIGNodW5rIHByb2Nlc3NpbmdcclxuICAgICAgYXdhaXQgcHJvY2Vzc0NodW5rcyhqb2IuaWQpO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIHNldEVycm9yKGVyciBpbnN0YW5jZW9mIEVycm9yID8gZXJyLm1lc3NhZ2UgOiAnVXBsb2FkIGZhaWxlZCcpO1xyXG4gICAgfSBmaW5hbGx5IHtcclxuICAgICAgc2V0SXNVcGxvYWRpbmcoZmFsc2UpO1xyXG4gICAgICBzZXRJc1Byb2Nlc3NpbmcoZmFsc2UpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IHByb2Nlc3NDaHVua3MgPSBhc3luYyAoam9iSWQ6IHN0cmluZykgPT4ge1xyXG4gICAgY29uc3QgbWF4QXR0ZW1wdHMgPSA2MDA7XHJcbiAgICBsZXQgYXR0ZW1wdHMgPSAwO1xyXG5cclxuICAgIHdoaWxlIChhdHRlbXB0cyA8IG1heEF0dGVtcHRzKSB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3Qgam9iID0gYXdhaXQgYXBpLnBvc3Q8Sm9iPihgL2ltcG9ydC8ke2pvYklkfS9wcm9jZXNzYCwge1xyXG4gICAgICAgICAgYmF0Y2hTaXplOiAxMDAsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgc2V0Q3VycmVudEpvYihqb2IpO1xyXG5cclxuICAgICAgICBpZiAoam9iLnN0YXR1cyA9PT0gJ2NvbXBsZXRlZCcgfHwgam9iLnN0YXR1cyA9PT0gJ2ZhaWxlZCcgfHwgam9iLnN0YXR1cyA9PT0gJ2NhbmNlbGxlZCcpIHtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGF3YWl0IG5ldyBQcm9taXNlKHJlc29sdmUgPT4gc2V0VGltZW91dChyZXNvbHZlLCAxMDApKTtcclxuICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignQ2h1bmsgcHJvY2Vzc2luZyBlcnJvcjonLCBlcnIpO1xyXG4gICAgICAgIGF3YWl0IG5ldyBQcm9taXNlKHJlc29sdmUgPT4gc2V0VGltZW91dChyZXNvbHZlLCAzMDAwKSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGF0dGVtcHRzKys7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0RXJyb3IoJ0ltcG9ydCB0aW1lZCBvdXQnKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVDYW5jZWwgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBpZiAoIWN1cnJlbnRKb2IgfHwgY3VycmVudEpvYi5zdGF0dXMgIT09ICdwcm9jZXNzaW5nJykgcmV0dXJuO1xyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgIGF3YWl0IGFwaS5kZWxldGUoYC9qb2JzLyR7Y3VycmVudEpvYi5pZH1gKTtcclxuICAgICAgc2V0Q3VycmVudEpvYihwcmV2ID0+IHByZXYgPyB7IC4uLnByZXYsIHN0YXR1czogJ2NhbmNlbGxlZCcgfSA6IG51bGwpO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0NhbmNlbCBlcnJvcjonLCBlcnIpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZVJlc2V0ID0gKCkgPT4ge1xyXG4gICAgc2V0Q3N2Q29udGVudCgnJyk7XHJcbiAgICBzZXRDdXJyZW50Sm9iKG51bGwpO1xyXG4gICAgc2V0RXJyb3IobnVsbCk7XHJcbiAgICBzZXREcnlSdW4oZmFsc2UpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGdldFByb2dyZXNzID0gKCkgPT4ge1xyXG4gICAgaWYgKCFjdXJyZW50Sm9iIHx8IGN1cnJlbnRKb2IudG90YWxSb3dzID09PSAwKSByZXR1cm4gMDtcclxuICAgIHJldHVybiBNYXRoLnJvdW5kKChjdXJyZW50Sm9iLnByb2Nlc3NlZFJvd3MgLyBjdXJyZW50Sm9iLnRvdGFsUm93cykgKiAxMDApO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGdldFJvd0NvdW50ID0gKCkgPT4ge1xyXG4gICAgaWYgKCFjc3ZDb250ZW50LnRyaW0oKSkgcmV0dXJuIDA7XHJcbiAgICByZXR1cm4gTWF0aC5tYXgoMCwgY3N2Q29udGVudC50cmltKCkuc3BsaXQoJ1xcbicpLmxlbmd0aCAtIDEpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Qm94IGNzcz17eyBzdGFjazogJ3knLCBnYXA6ICdzbWFsbCcgfX0+XHJcbiAgICAgIHtlcnJvciAmJiAoXHJcbiAgICAgICAgPEJhbm5lclxyXG4gICAgICAgICAgdHlwZT1cImNyaXRpY2FsXCJcclxuICAgICAgICAgIHRpdGxlPVwiSW1wb3J0IEVycm9yXCJcclxuICAgICAgICAgIGRlc2NyaXB0aW9uPXtlcnJvcn1cclxuICAgICAgICAgIG9uRGlzbWlzcz17KCkgPT4gc2V0RXJyb3IobnVsbCl9XHJcbiAgICAgICAgLz5cclxuICAgICAgKX1cclxuXHJcbiAgICAgIHsvKiBDU1YgY29udGVudCBpbnB1dCAqL31cclxuICAgICAgeyFpc1Byb2Nlc3NpbmcgJiYgIWN1cnJlbnRKb2IgJiYgKFxyXG4gICAgICAgIDxCb3ggY3NzPXt7IHN0YWNrOiAneScsIGdhcDogJ3NtYWxsJyB9fT5cclxuICAgICAgICAgIDxUZXh0QXJlYVxyXG4gICAgICAgICAgICBsYWJlbD1cIlBhc3RlIENTViBjb250ZW50XCJcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJpZCxuYW1lLGRlc2NyaXB0aW9uLGFjdGl2ZSYjMTA7cHJvZF94eHgsTXkgUHJvZHVjdCxEZXNjcmlwdGlvbix0cnVlJiMxMDsuLi5cIlxyXG4gICAgICAgICAgICB2YWx1ZT17Y3N2Q29udGVudH1cclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRDc3ZDb250ZW50KGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgcm93cz17OH1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIHtjc3ZDb250ZW50LnRyaW0oKSAmJiAoXHJcbiAgICAgICAgICAgIDxCb3ggY3NzPXt7IGNvbG9yOiAnc2Vjb25kYXJ5JyB9fT5cclxuICAgICAgICAgICAgICB7Z2V0Um93Q291bnQoKX0gZGF0YSByb3cocykgZGV0ZWN0ZWRcclxuICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgIHtjc3ZDb250ZW50LnRyaW0oKSAmJiAoXHJcbiAgICAgICAgICAgIDxCb3ggY3NzPXt7IHN0YWNrOiAneScsIGdhcDogJ3NtYWxsJyB9fT5cclxuICAgICAgICAgICAgICA8Q2hlY2tib3hcclxuICAgICAgICAgICAgICAgIGxhYmVsPVwiRHJ5IHJ1biAocHJldmlldyBjaGFuZ2VzIHdpdGhvdXQgYXBwbHlpbmcpXCJcclxuICAgICAgICAgICAgICAgIGNoZWNrZWQ9e2RyeVJ1bn1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0RHJ5UnVuKGUudGFyZ2V0LmNoZWNrZWQpfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgb25QcmVzcz17aGFuZGxlVXBsb2FkfVxyXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2lzVXBsb2FkaW5nfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHtpc1VwbG9hZGluZyA/ICdVcGxvYWRpbmcuLi4nIDogKGRyeVJ1biA/ICdQcmV2aWV3IEltcG9ydCcgOiAnSW1wb3J0IFByb2R1Y3RzJyl9XHJcbiAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L0JveD5cclxuICAgICAgKX1cclxuXHJcbiAgICAgIHsvKiBQcm9jZXNzaW5nIHByb2dyZXNzICovfVxyXG4gICAgICB7aXNQcm9jZXNzaW5nICYmIGN1cnJlbnRKb2IgJiYgKFxyXG4gICAgICAgIDxCb3ggY3NzPXt7IHN0YWNrOiAneScsIGdhcDogJ3NtYWxsJyB9fT5cclxuICAgICAgICAgIDxCb3ggY3NzPXt7IHN0YWNrOiAneCcsIGdhcDogJ3NtYWxsJywgYWxpZ25ZOiAnY2VudGVyJyB9fT5cclxuICAgICAgICAgICAgPFNwaW5uZXIgc2l6ZT1cInNtYWxsXCIgLz5cclxuICAgICAgICAgICAgPEJveD5cclxuICAgICAgICAgICAgICB7ZHJ5UnVuID8gJ1ByZXZpZXdpbmcnIDogJ0ltcG9ydGluZyd9OiB7Z2V0UHJvZ3Jlc3MoKX0lICh7Y3VycmVudEpvYi5wcm9jZXNzZWRSb3dzfS97Y3VycmVudEpvYi50b3RhbFJvd3N9IHJvd3MpXHJcbiAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIHtjdXJyZW50Sm9iLnR5cGUgPT09ICdpbXBvcnQnICYmIChcclxuICAgICAgICAgICAgPEJveD5cclxuICAgICAgICAgICAgICBDcmVhdGVkOiB7Y3VycmVudEpvYi5jcmVhdGVkQ291bnQgPz8gMH0gfCBcclxuICAgICAgICAgICAgICBVcGRhdGVkOiB7Y3VycmVudEpvYi51cGRhdGVkQ291bnQgPz8gMH0gfCBcclxuICAgICAgICAgICAgICBTa2lwcGVkOiB7Y3VycmVudEpvYi5za2lwcGVkQ291bnQgPz8gMH1cclxuICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgIDxCdXR0b24gdHlwZT1cImRlc3RydWN0aXZlXCIgb25QcmVzcz17aGFuZGxlQ2FuY2VsfT5cclxuICAgICAgICAgICAgQ2FuY2VsXHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8L0JveD5cclxuICAgICAgKX1cclxuXHJcbiAgICAgIHsvKiBDb21wbGV0aW9uIHJlc3VsdCAqL31cclxuICAgICAge2N1cnJlbnRKb2IgJiYgY3VycmVudEpvYi5zdGF0dXMgPT09ICdjb21wbGV0ZWQnICYmICFpc1Byb2Nlc3NpbmcgJiYgKFxyXG4gICAgICAgIDxCb3ggY3NzPXt7IHN0YWNrOiAneScsIGdhcDogJ3NtYWxsJyB9fT5cclxuICAgICAgICAgIDxCYW5uZXJcclxuICAgICAgICAgICAgdHlwZT1cImRlZmF1bHRcIlxyXG4gICAgICAgICAgICB0aXRsZT17ZHJ5UnVuID8gJ0RyeSBSdW4gQ29tcGxldGUnIDogJ0ltcG9ydCBDb21wbGV0ZSd9XHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uPXtcclxuICAgICAgICAgICAgICBkcnlSdW5cclxuICAgICAgICAgICAgICAgID8gYFByZXZpZXc6IFdvdWxkIGNyZWF0ZSAke2N1cnJlbnRKb2IuY3JlYXRlZENvdW50ID8/IDB9LCB1cGRhdGUgJHtjdXJyZW50Sm9iLnVwZGF0ZWRDb3VudCA/PyAwfSwgc2tpcCAke2N1cnJlbnRKb2Iuc2tpcHBlZENvdW50ID8/IDB9IHByb2R1Y3RzLmBcclxuICAgICAgICAgICAgICAgIDogYFN1Y2Nlc3NmdWxseSBjcmVhdGVkICR7Y3VycmVudEpvYi5jcmVhdGVkQ291bnQgPz8gMH0sIHVwZGF0ZWQgJHtjdXJyZW50Sm9iLnVwZGF0ZWRDb3VudCA/PyAwfSBwcm9kdWN0cy4gJHtjdXJyZW50Sm9iLnNraXBwZWRDb3VudCA/PyAwfSBza2lwcGVkLmBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIHtkcnlSdW4gPyAoXHJcbiAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInByaW1hcnlcIiBvblByZXNzPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgc2V0RHJ5UnVuKGZhbHNlKTtcclxuICAgICAgICAgICAgICBzZXRDdXJyZW50Sm9iKG51bGwpO1xyXG4gICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICBQcm9jZWVkIHdpdGggSW1wb3J0XHJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwic2Vjb25kYXJ5XCIgb25QcmVzcz17aGFuZGxlUmVzZXR9PlxyXG4gICAgICAgICAgICAgIEltcG9ydCBBbm90aGVyIEZpbGVcclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICApfVxyXG5cclxuICAgICAgey8qIEZhaWxlZCBzdGF0ZSAqL31cclxuICAgICAge2N1cnJlbnRKb2IgJiYgY3VycmVudEpvYi5zdGF0dXMgPT09ICdmYWlsZWQnICYmICFpc1Byb2Nlc3NpbmcgJiYgKFxyXG4gICAgICAgIDxCb3ggY3NzPXt7IHN0YWNrOiAneScsIGdhcDogJ3NtYWxsJyB9fT5cclxuICAgICAgICAgIDxCYW5uZXJcclxuICAgICAgICAgICAgdHlwZT1cImNyaXRpY2FsXCJcclxuICAgICAgICAgICAgdGl0bGU9XCJJbXBvcnQgRmFpbGVkXCJcclxuICAgICAgICAgICAgZGVzY3JpcHRpb249XCJUaGUgaW1wb3J0IGVuY291bnRlcmVkIGFuIGVycm9yIGFuZCBjb3VsZCBub3QgY29tcGxldGUuXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJzZWNvbmRhcnlcIiBvblByZXNzPXtoYW5kbGVSZXNldH0+XHJcbiAgICAgICAgICAgIFRyeSBBZ2FpblxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgICl9XHJcbiAgICA8L0JveD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW1wb3J0VXBsb2FkO1xyXG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFhLGNBQUEsY0FBYzs7Ozs7Ozs7Ozs7QUNVM0IsVUFBQSxVQUFBLFVBQUE7QUFDQSxVQUFBLFlBQUE7QUFFQSxVQUFNLGVBQWUsQ0FDbkIsY0FDRTtBQUNGLGNBQU0sdUJBQXVCLFVBQVUsZUFBZSxVQUFVLFNBQVE7QUFDeEUsY0FBTSxlQUVGLENBQUMsV0FDSCxHQUFBLGNBQUEsS0FBQyxXQUFTLE9BQUEsT0FBQSxDQUFBLEdBQ0osT0FBSyxFQUNULHNCQUNBLFlBQVksVUFBQSxhQUNaLGVBQWMsS0FBSSxDQUFBLENBQUE7QUFJdEIscUJBQWEsdUJBQXVCO0FBRXBDLGVBQU87TUFDVDtBQUVBLFVBQU0sa0JBQWtCLENBSXRCLE1BQ0EsZUFDQSxxQkFDRTtBQUNGLGNBQU0sbUJBQWtCLEdBQUEsUUFBQSw0QkFBaUMsTUFBTTtVQUM3RDtTQUNEO0FBRUQsWUFBSSxDQUFDLGtCQUFrQjtBQUNyQixpQkFBTztRQUNUO0FBRUEsZUFBTyxhQUFhLGVBQWU7TUFHckM7QUFvV2EsY0FBQSxnQkFBZ0IsZ0JBRzNCLGlCQUFpQixDQUFDLFNBQVMsV0FBVyxTQUFTLFVBQVUsR0FBRyxJQUFJO0FBVXJELGNBQUEsWUFBWSxnQkFDdkIsYUFDQSxDQUFBLEdBQ0EsSUFBSTtBQVdPLGNBQUEsUUFBUSxnQkFBcUMsU0FB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O0FBQUEsSUFDYix1QkFBdUI7QUFBQSxJQUN2QixxQkFBcUI7QUFBQSxJQUNyQixRQUFRO0FBQUEsSUFDUixNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixlQUFlO0FBQUEsTUFDYjtBQUFBLFFBQ0UsY0FBYztBQUFBLFFBQ2QsV0FBVztBQUFBLE1BQ2I7QUFBQSxNQUNBO0FBQUEsUUFDRSxjQUFjO0FBQUEsUUFDZCxXQUFXO0FBQUEsTUFDYjtBQUFBLElBQ0Y7QUFBQSxJQUNBLHVCQUF1QjtBQUFBLE1BQ3JCLFFBQVE7QUFBQSxNQUNSLE9BQU87QUFBQSxJQUNUO0FBQUEsSUFDQSwwQkFBMEI7QUFBQSxJQUMxQixnQkFBZ0I7QUFBQSxNQUNkLDJCQUEyQjtBQUFBLFFBQ3pCLGVBQWU7QUFBQSxVQUNiO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsUUFDRjtBQUFBLFFBQ0EsYUFBYTtBQUFBLFFBQ2IsV0FBVztBQUFBLE1BQ2I7QUFBQSxNQUNBLFNBQVM7QUFBQSxRQUNQO0FBQUEsVUFDRSxhQUFhO0FBQUEsVUFDYixZQUFZO0FBQUEsUUFDZDtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsSUFDQSxXQUFXO0FBQUEsRUFDYjsiLAogICJuYW1lcyI6IFsiZmV0Y2giLCAiZmV0Y2hTdHJpcGVTaWduYXR1cmUiLCAiaW1wb3J0X3JlYWN0IiwgImltcG9ydF91aSIsICJfYSIsICJpbXBvcnRfanN4X3J1bnRpbWUiXQp9Cg==
