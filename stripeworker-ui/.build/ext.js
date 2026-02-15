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
  var BUILD_TIME = "2026-02-15 12:59:12.8088861 +0100 CET m=+0.044014801";
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
          "https://api.stripeworker.com/export",
          "https://api.stripeworker.com/import",
          "https://api.stripeworker.com/jobs"
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
    "version": "1.0.0"
  };
  return __toCommonJS(manifest_exports);
})();
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL0BzdHJpcGUvc3JjL3ZlcnNpb24udHMiLCAiLi4vbm9kZV9tb2R1bGVzL0BzdHJpcGUvc3JjL3VpL2luZGV4LnRzeCIsICIuLi9ub2RlX21vZHVsZXMvaW52YXJpYW50L2Jyb3dzZXIuanMiLCAiLi4vbm9kZV9tb2R1bGVzL0BzdHJpcGUvc3JjL3V0aWxzL19lbmRwb2ludC50cyIsICIuLi9ub2RlX21vZHVsZXMvQHN0cmlwZS9zcmMvdXRpbHMvYXBpRmV0Y2gudHMiLCAiLi4vbm9kZV9tb2R1bGVzL0BzdHJpcGUvc3JjL3V0aWxzL2NsaXBib2FyZC50cyIsICIuLi9ub2RlX21vZHVsZXMvQHN0cmlwZS9zcmMvdXRpbHMvY29udGV4dC50cyIsICIuLi9ub2RlX21vZHVsZXMvQHN0cmlwZS9zcmMvdXRpbHMvaHR0cENsaWVudC50cyIsICIuLi9ub2RlX21vZHVsZXMvQHN0cmlwZS9zcmMvdXRpbHMvZ2V0RGFzaGJvYXJkVXNlckVtYWlsLnRzIiwgIi4uL25vZGVfbW9kdWxlcy9Ac3RyaXBlL3NyYy91dGlscy9nZXRVc2VyQXV0aG9yaXplZFBlcm1pc3Npb25zLnRzIiwgIi4uL25vZGVfbW9kdWxlcy9Ac3RyaXBlL3NyYy91dGlscy9pc1Blcm1pc3Npb25BdXRob3JpemVkLnRzIiwgIi4uL25vZGVfbW9kdWxlcy9Ac3RyaXBlL3NyYy91dGlscy9pc1NvdXJjZUluQXV0aG9yaXplZENTUC50cyIsICIuLi9ub2RlX21vZHVsZXMvQHN0cmlwZS9zcmMvdXRpbHMvb2F1dGgudHMiLCAiLi4vbm9kZV9tb2R1bGVzL0BzdHJpcGUvdWktZXh0ZW5zaW9uLXNkay91dGlscy9wbGF0Zm9ybVJwY3MuanMiLCAiLi4vbm9kZV9tb2R1bGVzL0BzdHJpcGUvc3JjL3V0aWxzL3NpZ25hdHVyZS50cyIsICIuLi9ub2RlX21vZHVsZXMvQHN0cmlwZS9zcmMvdXRpbHMvdG9hc3QudHMiLCAiLi4vbm9kZV9tb2R1bGVzL0BzdHJpcGUvc3JjL3V0aWxzL2luZGV4LnRzIiwgIm1hbmlmZXN0LmpzIiwgIi4uL3NyYy92aWV3cy9Qcm9kdWN0TGlzdFZpZXcudHN4IiwgIi4uL3NyYy9hcGkudHMiLCAiLi4vc3JjL2NvbXBvbmVudHMvSW1wb3J0VXBsb2FkLnRzeCJdLAogICJzb3VyY2VzQ29udGVudCI6IFtudWxsLCBudWxsLCAiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbi8qKlxuICogVXNlIGludmFyaWFudCgpIHRvIGFzc2VydCBzdGF0ZSB3aGljaCB5b3VyIHByb2dyYW0gYXNzdW1lcyB0byBiZSB0cnVlLlxuICpcbiAqIFByb3ZpZGUgc3ByaW50Zi1zdHlsZSBmb3JtYXQgKG9ubHkgJXMgaXMgc3VwcG9ydGVkKSBhbmQgYXJndW1lbnRzXG4gKiB0byBwcm92aWRlIGluZm9ybWF0aW9uIGFib3V0IHdoYXQgYnJva2UgYW5kIHdoYXQgeW91IHdlcmVcbiAqIGV4cGVjdGluZy5cbiAqXG4gKiBUaGUgaW52YXJpYW50IG1lc3NhZ2Ugd2lsbCBiZSBzdHJpcHBlZCBpbiBwcm9kdWN0aW9uLCBidXQgdGhlIGludmFyaWFudFxuICogd2lsbCByZW1haW4gdG8gZW5zdXJlIGxvZ2ljIGRvZXMgbm90IGRpZmZlciBpbiBwcm9kdWN0aW9uLlxuICovXG5cbnZhciBpbnZhcmlhbnQgPSBmdW5jdGlvbihjb25kaXRpb24sIGZvcm1hdCwgYSwgYiwgYywgZCwgZSwgZikge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmIChmb3JtYXQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdpbnZhcmlhbnQgcmVxdWlyZXMgYW4gZXJyb3IgbWVzc2FnZSBhcmd1bWVudCcpO1xuICAgIH1cbiAgfVxuXG4gIGlmICghY29uZGl0aW9uKSB7XG4gICAgdmFyIGVycm9yO1xuICAgIGlmIChmb3JtYXQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgZXJyb3IgPSBuZXcgRXJyb3IoXG4gICAgICAgICdNaW5pZmllZCBleGNlcHRpb24gb2NjdXJyZWQ7IHVzZSB0aGUgbm9uLW1pbmlmaWVkIGRldiBlbnZpcm9ubWVudCAnICtcbiAgICAgICAgJ2ZvciB0aGUgZnVsbCBlcnJvciBtZXNzYWdlIGFuZCBhZGRpdGlvbmFsIGhlbHBmdWwgd2FybmluZ3MuJ1xuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGFyZ3MgPSBbYSwgYiwgYywgZCwgZSwgZl07XG4gICAgICB2YXIgYXJnSW5kZXggPSAwO1xuICAgICAgZXJyb3IgPSBuZXcgRXJyb3IoXG4gICAgICAgIGZvcm1hdC5yZXBsYWNlKC8lcy9nLCBmdW5jdGlvbigpIHsgcmV0dXJuIGFyZ3NbYXJnSW5kZXgrK107IH0pXG4gICAgICApO1xuICAgICAgZXJyb3IubmFtZSA9ICdJbnZhcmlhbnQgVmlvbGF0aW9uJztcbiAgICB9XG5cbiAgICBlcnJvci5mcmFtZXNUb1BvcCA9IDE7IC8vIHdlIGRvbid0IGNhcmUgYWJvdXQgaW52YXJpYW50J3Mgb3duIGZyYW1lXG4gICAgdGhyb3cgZXJyb3I7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gaW52YXJpYW50O1xuIiwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cGxhdGZvcm1ScGNzLmpzLm1hcCIsIG51bGwsIG51bGwsIG51bGwsICIvLyBBVVRPR0VORVJBVEVEIC0gRE8gTk9UIE1PRElGWVxuaW1wb3J0IFByb2R1Y3RMaXN0VmlldyBmcm9tICcuLi9zcmMvdmlld3MvUHJvZHVjdExpc3RWaWV3JztcblxuZXhwb3J0ICogZnJvbSAnQHN0cmlwZS91aS1leHRlbnNpb24tc2RrL3ZlcnNpb24nO1xuZXhwb3J0IGNvbnN0IEJVSUxEX1RJTUUgPSAnMjAyNi0wMi0xNSAxMjo1OToxMi44MDg4ODYxICswMTAwIENFVCBtPSswLjA0NDAxNDgwMSc7XG5cbmV4cG9ydCB7IFxuICBQcm9kdWN0TGlzdFZpZXdcdFxuIH07XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgXCJjb25uZWN0X3Blcm1pc3Npb25zXCI6IG51bGwsXG4gIFwiZGlzdHJpYnV0aW9uX3R5cGVcIjogXCJwcml2YXRlXCIsXG4gIFwiaWNvblwiOiBcIi4vc3JjL2ljb24ucG5nXCIsXG4gIFwiaWRcIjogXCJzdHJpcGV3b3JrZXIuY29tXCIsXG4gIFwibmFtZVwiOiBcIlN0cmlwZXdvcmtlclwiLFxuICBcInBlcm1pc3Npb25zXCI6IFtcbiAgICB7XG4gICAgICBcInBlcm1pc3Npb25cIjogXCJwcm9kdWN0X3JlYWRcIixcbiAgICAgIFwicHVycG9zZVwiOiBcIkV4cG9ydCBwcm9kdWN0cyB0byBDU1ZcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJwZXJtaXNzaW9uXCI6IFwicHJvZHVjdF93cml0ZVwiLFxuICAgICAgXCJwdXJwb3NlXCI6IFwiSW1wb3J0IHByb2R1Y3RzIGZyb20gQ1NWXCJcbiAgICB9XG4gIF0sXG4gIFwicG9zdF9pbnN0YWxsX2FjdGlvblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiZXh0ZXJuYWxcIixcbiAgICBcInVybFwiOiBcImh0dHBzOi8vc3RyaXBld29ya2VyLmNvbVwiXG4gIH0sXG4gIFwic3RyaXBlX2FwaV9hY2Nlc3NfdHlwZVwiOiBcInBsYXRmb3JtXCIsXG4gIFwidWlfZXh0ZW5zaW9uXCI6IHtcbiAgICBcImNvbnRlbnRfc2VjdXJpdHlfcG9saWN5XCI6IHtcbiAgICAgIFwiY29ubmVjdC1zcmNcIjogW1xuICAgICAgICBcImh0dHBzOi8vYXBpLnN0cmlwZXdvcmtlci5jb20vZXhwb3J0XCIsXG4gICAgICAgIFwiaHR0cHM6Ly9hcGkuc3RyaXBld29ya2VyLmNvbS9pbXBvcnRcIixcbiAgICAgICAgXCJodHRwczovL2FwaS5zdHJpcGV3b3JrZXIuY29tL2pvYnNcIlxuICAgICAgXSxcbiAgICAgIFwiaW1hZ2Utc3JjXCI6IG51bGwsXG4gICAgICBcInB1cnBvc2VcIjogXCJDb25uZWN0IHRvIGJhY2tlbmQgQVBJIGZvciBDU1YgaW1wb3J0L2V4cG9ydCBvcGVyYXRpb25zXCJcbiAgICB9LFxuICAgIFwidmlld3NcIjogW1xuICAgICAge1xuICAgICAgICBcImNvbXBvbmVudFwiOiBcIlByb2R1Y3RMaXN0Vmlld1wiLFxuICAgICAgICBcInZpZXdwb3J0XCI6IFwic3RyaXBlLmRhc2hib2FyZC5wcm9kdWN0Lmxpc3RcIlxuICAgICAgfVxuICAgIF1cbiAgfSxcbiAgXCJ2ZXJzaW9uXCI6IFwiMS4wLjBcIlxufTtcbiIsICIvKipcclxuICogUHJvZHVjdExpc3RWaWV3IC0gTWFpbiBhcHAgdmlldyBlbWJlZGRlZCBpbiBTdHJpcGUgRGFzaGJvYXJkIHByb2R1Y3QgbGlzdFxyXG4gKiBGb2xsb3dpbmcgU3RyaXBlIEFwcHMgU0RLIGRvY3VtZW50YXRpb24gc3RydWN0dXJlIGV4YWN0bHlcclxuICovXHJcblxyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7XHJcbiAgQm94LFxyXG4gIENvbnRleHRWaWV3LFxyXG4gIEJ1dHRvbixcclxuICBMaW5rLFxyXG4gIEljb24sXHJcbn0gZnJvbSAnQHN0cmlwZS91aS1leHRlbnNpb24tc2RrL3VpJztcclxuaW1wb3J0IHR5cGUgeyBFeHRlbnNpb25Db250ZXh0VmFsdWUgfSBmcm9tICdAc3RyaXBlL3VpLWV4dGVuc2lvbi1zZGsvY29udGV4dCc7XHJcbmltcG9ydCB7IGNyZWF0ZUFwaUNsaWVudCwgSm9iIH0gZnJvbSAnLi4vYXBpJztcclxuaW1wb3J0IEltcG9ydFVwbG9hZCBmcm9tICcuLi9jb21wb25lbnRzL0ltcG9ydFVwbG9hZCc7XHJcbmltcG9ydCBicmFuZEljb24gZnJvbSAnLi4vaWNvbi5zdmcnO1xyXG5cclxudHlwZSBWaWV3U3RhdGUgPSAnaG9tZScgfCAncHJvZHVjdHMnO1xyXG5cclxuY29uc3QgUHJvZHVjdExpc3RWaWV3ID0gKHsgdXNlckNvbnRleHQgfTogRXh0ZW5zaW9uQ29udGV4dFZhbHVlKSA9PiB7XHJcbiAgY29uc3QgW3ZpZXdTdGF0ZSwgc2V0Vmlld1N0YXRlXSA9IHVzZVN0YXRlPFZpZXdTdGF0ZT4oJ2hvbWUnKTtcclxuICBjb25zdCBbZXhwb3J0U3RhdHVzLCBzZXRFeHBvcnRTdGF0dXNdID0gdXNlU3RhdGU8c3RyaW5nPignJyk7XHJcbiAgY29uc3QgW2Rvd25sb2FkVXJsLCBzZXREb3dubG9hZFVybF0gPSB1c2VTdGF0ZTxzdHJpbmcgfCBudWxsPihudWxsKTtcclxuICBjb25zdCBbaXNFeHBvcnRpbmcsIHNldElzRXhwb3J0aW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgLy8gQ2hlY2sgZm9yIHJlcXVpcmVkIGNvbnRleHRcclxuICBpZiAoIXVzZXJDb250ZXh0Py5pZCB8fCAhdXNlckNvbnRleHQ/LmFjY291bnQ/LmlkKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8Q29udGV4dFZpZXcgXHJcbiAgICAgICAgdGl0bGU9XCJQcm9kdWN0c1wiIFxyXG4gICAgICAgIGJyYW5kQ29sb3I9XCIjNjM1YmZmXCIgXHJcbiAgICAgICAgYnJhbmRJY29uPXticmFuZEljb259XHJcbiAgICAgID5cclxuICAgICAgICA8Qm94IGNzcz17eyBwYWRkaW5nOiAnbWVkaXVtJyB9fT5cclxuICAgICAgICAgIExvYWRpbmcuLi5cclxuICAgICAgICA8L0JveD5cclxuICAgICAgPC9Db250ZXh0Vmlldz5cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBhcGkgPSBjcmVhdGVBcGlDbGllbnQoe1xyXG4gICAgdXNlcklkOiB1c2VyQ29udGV4dC5pZCxcclxuICAgIGFjY291bnRJZDogdXNlckNvbnRleHQuYWNjb3VudC5pZCxcclxuICB9KTtcclxuXHJcbiAgY29uc3QgaGFuZGxlRXhwb3J0ID0gdXNlQ2FsbGJhY2soYXN5bmMgKCkgPT4ge1xyXG4gICAgc2V0SXNFeHBvcnRpbmcodHJ1ZSk7XHJcbiAgICBzZXRFeHBvcnRTdGF0dXMoJ1N0YXJ0aW5nIGV4cG9ydC4uLicpO1xyXG4gICAgc2V0RG93bmxvYWRVcmwobnVsbCk7XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3Qgam9iID0gYXdhaXQgYXBpLnBvc3Q8Sm9iPignL2V4cG9ydC9zdGFydCcpO1xyXG4gICAgICBzZXRFeHBvcnRTdGF0dXMoYEV4cG9ydGluZyBwcm9kdWN0cy4uLmApO1xyXG5cclxuICAgICAgLy8gUG9sbCBmb3IgY29tcGxldGlvblxyXG4gICAgICBsZXQgYXR0ZW1wdHMgPSAwO1xyXG4gICAgICB3aGlsZSAoYXR0ZW1wdHMgPCA2MCkge1xyXG4gICAgICAgIGF3YWl0IG5ldyBQcm9taXNlKHJlc29sdmUgPT4gc2V0VGltZW91dChyZXNvbHZlLCAzMDAwKSk7XHJcbiAgICAgICAgY29uc3Qgc3RhdHVzID0gYXdhaXQgYXBpLmdldDxKb2I+KGAvam9icy8ke2pvYi5pZH1gKTtcclxuICAgICAgICBcclxuICAgICAgICBpZiAoc3RhdHVzLnN0YXR1cyA9PT0gJ2NvbXBsZXRlZCcpIHtcclxuICAgICAgICAgIGNvbnN0IGRvd25sb2FkID0gYXdhaXQgYXBpLmdldDx7IGRvd25sb2FkVXJsOiBzdHJpbmcgfT4oYC9leHBvcnQvJHtqb2IuaWR9L2Rvd25sb2FkYCk7XHJcbiAgICAgICAgICBzZXREb3dubG9hZFVybChkb3dubG9hZC5kb3dubG9hZFVybCk7XHJcbiAgICAgICAgICBzZXRFeHBvcnRTdGF0dXMoYEV4cG9ydCBjb21wbGV0ZSEgJHtzdGF0dXMudG90YWxSb3dzfSBwcm9kdWN0cyBleHBvcnRlZC5gKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoc3RhdHVzLnN0YXR1cyA9PT0gJ2ZhaWxlZCcpIHtcclxuICAgICAgICAgIHNldEV4cG9ydFN0YXR1cygnRXhwb3J0IGZhaWxlZCcpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHNldEV4cG9ydFN0YXR1cyhgRXhwb3J0aW5nLi4uICR7c3RhdHVzLnByb2Nlc3NlZFJvd3N9IHByb2R1Y3RzYCk7XHJcbiAgICAgICAgYXR0ZW1wdHMrKztcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIHNldEV4cG9ydFN0YXR1cyhgRXJyb3I6ICR7ZXJyIGluc3RhbmNlb2YgRXJyb3IgPyBlcnIubWVzc2FnZSA6ICdFeHBvcnQgZmFpbGVkJ31gKTtcclxuICAgIH0gZmluYWxseSB7XHJcbiAgICAgIHNldElzRXhwb3J0aW5nKGZhbHNlKTtcclxuICAgIH1cclxuICB9LCBbYXBpXSk7XHJcblxyXG4gIC8vIEhvbWUgdmlldyAtIHNlbGVjdCByZXNvdXJjZSB0eXBlXHJcbiAgaWYgKHZpZXdTdGF0ZSA9PT0gJ2hvbWUnKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8Q29udGV4dFZpZXcgXHJcbiAgICAgICAgdGl0bGU9XCJTdHJpcGV3b3JrZXJcIiBcclxuICAgICAgICBkZXNjcmlwdGlvbj1cIkltcG9ydCBhbmQgZXhwb3J0IFN0cmlwZSByZXNvdXJjZXMgdG8gYW5kIGZyb20gQ1NWXCJcclxuICAgICAgICBicmFuZENvbG9yPVwiIzYzNWJmZlwiIFxyXG4gICAgICAgIGJyYW5kSWNvbj17YnJhbmRJY29ufVxyXG4gICAgICA+XHJcbiAgICAgICAgPEJveCBjc3M9e3sgcGFkZGluZzogJ21lZGl1bScsIHN0YWNrOiAneScsIGdhcDogJ21lZGl1bScgfX0+XHJcbiAgICAgICAgICA8Qm94IGNzcz17eyBmb250V2VpZ2h0OiAnc2VtaWJvbGQnIH19PlNlbGVjdCBSZXNvdXJjZSBUeXBlPC9Cb3g+XHJcbiAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJwcmltYXJ5XCIgb25QcmVzcz17KCkgPT4gc2V0Vmlld1N0YXRlKCdwcm9kdWN0cycpfT5cclxuICAgICAgICAgICAgPEljb24gbmFtZT1cInByb2R1Y3RcIiBzaXplPVwieHNtYWxsXCIgLz4gUHJvZHVjdHNcclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8L0NvbnRleHRWaWV3PlxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIC8vIFByb2R1Y3RzIHZpZXcgLSBpbXBvcnQvZXhwb3J0IHByb2R1Y3RzXHJcbiAgcmV0dXJuIChcclxuICAgIDxDb250ZXh0VmlldyBcclxuICAgICAgdGl0bGU9XCJQcm9kdWN0c1wiIFxyXG4gICAgICBkZXNjcmlwdGlvbj1cIkltcG9ydCBhbmQgZXhwb3J0IHByb2R1Y3RzIHRvIGFuZCBmcm9tIENTVlwiXHJcbiAgICAgIGJyYW5kQ29sb3I9XCIjNjM1YmZmXCIgXHJcbiAgICAgIGJyYW5kSWNvbj17YnJhbmRJY29ufVxyXG4gICAgPlxyXG4gICAgICA8Qm94IGNzcz17eyBwYWRkaW5nOiAnbWVkaXVtJywgc3RhY2s6ICd5JywgZ2FwOiAnbGFyZ2UnIH19PlxyXG4gICAgICAgIDxMaW5rIHR5cGU9XCJzZWNvbmRhcnlcIiBvblByZXNzPXsoKSA9PiBzZXRWaWV3U3RhdGUoJ2hvbWUnKX0+XHJcbiAgICAgICAgICA8SWNvbiBuYW1lPVwiYXJyb3dMZWZ0XCIgc2l6ZT1cInhzbWFsbFwiIC8+IEJhY2tcclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPEJveCBjc3M9e3sgc3RhY2s6ICd5JywgZ2FwOiAnc21hbGwnIH19PlxyXG4gICAgICAgICAgPEJveCBjc3M9e3sgZm9udFdlaWdodDogJ3NlbWlib2xkJyB9fT5FeHBvcnQgUHJvZHVjdHM8L0JveD5cclxuICAgICAgICAgIDxCb3g+RG93bmxvYWQgYWxsIHlvdXIgcHJvZHVjdHMgYXMgYSBDU1YgZmlsZS48L0JveD5cclxuICAgICAgICAgIFxyXG4gICAgICAgICAge2V4cG9ydFN0YXR1cyAmJiA8Qm94PntleHBvcnRTdGF0dXN9PC9Cb3g+fVxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICA8Qm94IGNzcz17eyBzdGFjazogJ3gnLCBnYXA6ICdzbWFsbCcgfX0+XHJcbiAgICAgICAgICAgIDxCdXR0b24gXHJcbiAgICAgICAgICAgICAgdHlwZT1cInByaW1hcnlcIiBcclxuICAgICAgICAgICAgICBvblByZXNzPXtoYW5kbGVFeHBvcnR9XHJcbiAgICAgICAgICAgICAgZGlzYWJsZWQ9e2lzRXhwb3J0aW5nfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAge2lzRXhwb3J0aW5nID8gJ0V4cG9ydGluZy4uLicgOiAnRXhwb3J0IFByb2R1Y3RzIHRvIENTVid9XHJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIHtkb3dubG9hZFVybCAmJiAoXHJcbiAgICAgICAgICAgIDxCb3ggY3NzPXt7IHN0YWNrOiAneScsIGdhcDogJ3hzbWFsbCcgfX0+XHJcbiAgICAgICAgICAgICAgPExpbmsgaHJlZj17ZG93bmxvYWRVcmx9IHRhcmdldD1cIl9ibGFua1wiPlxyXG4gICAgICAgICAgICAgICAgQ2xpY2sgaGVyZSB0byBkb3dubG9hZCB5b3VyIENTViBmaWxlXHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9Cb3g+XHJcblxyXG4gICAgICAgIDxCb3ggY3NzPXt7IHN0YWNrOiAneScsIGdhcDogJ3NtYWxsJyB9fT5cclxuICAgICAgICAgIDxCb3ggY3NzPXt7IGZvbnRXZWlnaHQ6ICdzZW1pYm9sZCcgfX0+SW1wb3J0IFByb2R1Y3RzPC9Cb3g+XHJcbiAgICAgICAgICA8Qm94PlBhc3RlIENTViBjb250ZW50IHRvIGNyZWF0ZSBvciB1cGRhdGUgcHJvZHVjdHMuPC9Cb3g+XHJcbiAgICAgICAgICA8SW1wb3J0VXBsb2FkIGFwaT17YXBpfSAvPlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8L0JveD5cclxuICAgIDwvQ29udGV4dFZpZXc+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RMaXN0VmlldztcclxuIiwgIi8qKlxyXG4gKiBTaWduZWQgQVBJIGNsaWVudCBoZWxwZXIgd2l0aCBmZXRjaFN0cmlwZVNpZ25hdHVyZSBmb3IgU3RyaXBlIEFwcHMgVUlcclxuICovXHJcblxyXG5pbXBvcnQgeyBmZXRjaFN0cmlwZVNpZ25hdHVyZSB9IGZyb20gJ0BzdHJpcGUvdWktZXh0ZW5zaW9uLXNkay91dGlscyc7XHJcblxyXG4vLyBCYWNrZW5kIEFQSSBiYXNlIFVSTCAtIGNvbmZpZ3VyZSBiYXNlZCBvbiBlbnZpcm9ubWVudFxyXG5jb25zdCBBUElfQkFTRV9VUkwgPSBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50J1xyXG4gID8gJ2h0dHA6Ly9sb2NhbGhvc3Q6ODc4NydcclxuICA6ICdodHRwczovL2FwaS5zdHJpcGV3b3JrZXIuY29tJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU2lnbmVkUmVxdWVzdEJvZHkge1xyXG4gIHVzZXJfaWQ6IHN0cmluZztcclxuICBhY2NvdW50X2lkOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQXBpQ2xpZW50T3B0aW9ucyB7XHJcbiAgdXNlcklkOiBzdHJpbmc7XHJcbiAgYWNjb3VudElkOiBzdHJpbmc7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDcmVhdGUgYW4gQVBJIGNsaWVudCB3aXRoIGF1dG9tYXRpYyBzaWduYXR1cmUgZ2VuZXJhdGlvblxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUFwaUNsaWVudChvcHRpb25zOiBBcGlDbGllbnRPcHRpb25zKSB7XHJcbiAgY29uc3QgYmFzZUJvZHk6IFNpZ25lZFJlcXVlc3RCb2R5ID0ge1xyXG4gICAgdXNlcl9pZDogb3B0aW9ucy51c2VySWQsXHJcbiAgICBhY2NvdW50X2lkOiBvcHRpb25zLmFjY291bnRJZCxcclxuICB9O1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgLyoqXHJcbiAgICAgKiBNYWtlIGEgc2lnbmVkIFBPU1QgcmVxdWVzdFxyXG4gICAgICovXHJcbiAgICBhc3luYyBwb3N0PFQ+KHBhdGg6IHN0cmluZywgYm9keTogUmVjb3JkPHN0cmluZywgdW5rbm93bj4gPSB7fSk6IFByb21pc2U8VD4ge1xyXG4gICAgICBjb25zdCByZXF1ZXN0Qm9keSA9IHsgLi4uYmFzZUJvZHksIC4uLmJvZHkgfTtcclxuICAgICAgY29uc3Qgc2lnbmF0dXJlID0gYXdhaXQgZmV0Y2hTdHJpcGVTaWduYXR1cmUoKTtcclxuXHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7QVBJX0JBU0VfVVJMfSR7cGF0aH1gLCB7XHJcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICdTdHJpcGUtU2lnbmF0dXJlJzogc2lnbmF0dXJlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkocmVxdWVzdEJvZHkpLFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcclxuICAgICAgICBjb25zdCBlcnJvciA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKS5jYXRjaCgoKSA9PiAoeyBlcnJvcjogJ1JlcXVlc3QgZmFpbGVkJyB9KSk7XHJcbiAgICAgICAgdGhyb3cgbmV3IEFwaUVycm9yKHJlc3BvbnNlLnN0YXR1cywgKGVycm9yIGFzIHsgZXJyb3I/OiBzdHJpbmcgfSkuZXJyb3IgPz8gJ1JlcXVlc3QgZmFpbGVkJyk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCkgYXMgUHJvbWlzZTxUPjtcclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBNYWtlIGEgc2lnbmVkIEdFVCByZXF1ZXN0IChzaWduYXR1cmUgaW4gaGVhZGVyLCBhY2NvdW50IGluIHF1ZXJ5KVxyXG4gICAgICovXHJcbiAgICBhc3luYyBnZXQ8VD4ocGF0aDogc3RyaW5nLCBwYXJhbXM6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4gPSB7fSk6IFByb21pc2U8VD4ge1xyXG4gICAgICBjb25zdCBzaWduYXR1cmUgPSBhd2FpdCBmZXRjaFN0cmlwZVNpZ25hdHVyZSgpO1xyXG4gICAgICBjb25zdCBzZWFyY2hQYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHtcclxuICAgICAgICAuLi5wYXJhbXMsXHJcbiAgICAgICAgYWNjb3VudF9pZDogb3B0aW9ucy5hY2NvdW50SWQsXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHtBUElfQkFTRV9VUkx9JHtwYXRofT8ke3NlYXJjaFBhcmFtc31gLCB7XHJcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAnU3RyaXBlLVNpZ25hdHVyZSc6IHNpZ25hdHVyZSxcclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcclxuICAgICAgICBjb25zdCBlcnJvciA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKS5jYXRjaCgoKSA9PiAoeyBlcnJvcjogJ1JlcXVlc3QgZmFpbGVkJyB9KSk7XHJcbiAgICAgICAgdGhyb3cgbmV3IEFwaUVycm9yKHJlc3BvbnNlLnN0YXR1cywgKGVycm9yIGFzIHsgZXJyb3I/OiBzdHJpbmcgfSkuZXJyb3IgPz8gJ1JlcXVlc3QgZmFpbGVkJyk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCkgYXMgUHJvbWlzZTxUPjtcclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBNYWtlIGEgc2lnbmVkIERFTEVURSByZXF1ZXN0XHJcbiAgICAgKi9cclxuICAgIGFzeW5jIGRlbGV0ZTxUPihwYXRoOiBzdHJpbmcpOiBQcm9taXNlPFQ+IHtcclxuICAgICAgY29uc3Qgc2lnbmF0dXJlID0gYXdhaXQgZmV0Y2hTdHJpcGVTaWduYXR1cmUoKTtcclxuXHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7QVBJX0JBU0VfVVJMfSR7cGF0aH0/YWNjb3VudF9pZD0ke29wdGlvbnMuYWNjb3VudElkfWAsIHtcclxuICAgICAgICBtZXRob2Q6ICdERUxFVEUnLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICdTdHJpcGUtU2lnbmF0dXJlJzogc2lnbmF0dXJlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xyXG4gICAgICAgIGNvbnN0IGVycm9yID0gYXdhaXQgcmVzcG9uc2UuanNvbigpLmNhdGNoKCgpID0+ICh7IGVycm9yOiAnUmVxdWVzdCBmYWlsZWQnIH0pKTtcclxuICAgICAgICB0aHJvdyBuZXcgQXBpRXJyb3IocmVzcG9uc2Uuc3RhdHVzLCAoZXJyb3IgYXMgeyBlcnJvcj86IHN0cmluZyB9KS5lcnJvciA/PyAnUmVxdWVzdCBmYWlsZWQnKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKSBhcyBQcm9taXNlPFQ+O1xyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIFVwbG9hZCBhIGZpbGUgdG8gYSBwcmVzaWduZWQgVVJMXHJcbiAgICAgKi9cclxuICAgIGFzeW5jIHVwbG9hZEZpbGUodXBsb2FkVXJsOiBzdHJpbmcsIGZpbGU6IEZpbGUpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cGxvYWRVcmwsIHtcclxuICAgICAgICBtZXRob2Q6ICdQVVQnLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICdDb250ZW50LVR5cGUnOiBmaWxlLnR5cGUgfHwgJ3RleHQvY3N2JyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGJvZHk6IGZpbGUsXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xyXG4gICAgICAgIHRocm93IG5ldyBBcGlFcnJvcihyZXNwb25zZS5zdGF0dXMsICdGaWxlIHVwbG9hZCBmYWlsZWQnKTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIFVwbG9hZCBDU1YgdGV4dCBjb250ZW50IHRvIGEgcHJlc2lnbmVkIFVSTFxyXG4gICAgICovXHJcbiAgICBhc3luYyB1cGxvYWRDc3ZDb250ZW50KHVwbG9hZFVybDogc3RyaW5nLCBjb250ZW50OiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cGxvYWRVcmwsIHtcclxuICAgICAgICBtZXRob2Q6ICdQVVQnLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICdDb250ZW50LVR5cGUnOiAndGV4dC9jc3YnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYm9keTogY29udGVudCxcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEFwaUVycm9yKHJlc3BvbnNlLnN0YXR1cywgJ0NTViB1cGxvYWQgZmFpbGVkJyk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgfTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEFQSSBlcnJvciBjbGFzc1xyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEFwaUVycm9yIGV4dGVuZHMgRXJyb3Ige1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHVibGljIHJlYWRvbmx5IHN0YXR1czogbnVtYmVyLFxyXG4gICAgbWVzc2FnZTogc3RyaW5nXHJcbiAgKSB7XHJcbiAgICBzdXBlcihtZXNzYWdlKTtcclxuICAgIHRoaXMubmFtZSA9ICdBcGlFcnJvcic7XHJcbiAgfVxyXG59XHJcblxyXG4vLyBKb2IgdHlwZXMgZm9yIEFQSSByZXNwb25zZXNcclxuZXhwb3J0IGludGVyZmFjZSBKb2Ige1xyXG4gIGlkOiBzdHJpbmc7XHJcbiAgdHlwZTogJ2ltcG9ydCcgfCAnZXhwb3J0JztcclxuICBzdGF0dXM6ICdwZW5kaW5nJyB8ICdwcm9jZXNzaW5nJyB8ICdjb21wbGV0ZWQnIHwgJ2ZhaWxlZCcgfCAnY2FuY2VsbGVkJztcclxuICB0b3RhbFJvd3M6IG51bWJlcjtcclxuICBwcm9jZXNzZWRSb3dzOiBudW1iZXI7XHJcbiAgY3JlYXRlZENvdW50PzogbnVtYmVyO1xyXG4gIHVwZGF0ZWRDb3VudD86IG51bWJlcjtcclxuICBza2lwcGVkQ291bnQ/OiBudW1iZXI7XHJcbiAgZXJyb3JDb3VudDogbnVtYmVyO1xyXG4gIGRyeVJ1bj86IGJvb2xlYW47XHJcbiAgaW5wdXRGaWxlS2V5Pzogc3RyaW5nO1xyXG4gIGNyZWF0ZWRBdDogc3RyaW5nO1xyXG4gIHVwZGF0ZWRBdDogc3RyaW5nO1xyXG4gIGNvbXBsZXRlZEF0Pzogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFVwbG9hZFVybFJlc3BvbnNlIHtcclxuICB1cGxvYWRVcmw6IHN0cmluZztcclxuICBqb2JJZDogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIERvd25sb2FkVXJsUmVzcG9uc2Uge1xyXG4gIGRvd25sb2FkVXJsOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRXJyb3JzUmVzcG9uc2Uge1xyXG4gIGRvd25sb2FkVXJsOiBzdHJpbmc7XHJcbiAgZXJyb3JDb3VudDogbnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEpvYkxpc3RSZXNwb25zZSB7XHJcbiAgam9iczogSm9iW107XHJcbn1cclxuIiwgIi8qKlxyXG4gKiBJbXBvcnRVcGxvYWQgY29tcG9uZW50IC0gQ1NWIGltcG9ydCB2aWEgdGV4dCBwYXN0ZSAoU3RyaXBlIEFwcHMgY29tcGF0aWJsZSlcclxuICovXHJcblxyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtcclxuICBCb3gsXHJcbiAgQnV0dG9uLFxyXG4gIFNwaW5uZXIsXHJcbiAgQmFubmVyLFxyXG4gIENoZWNrYm94LFxyXG4gIFRleHRBcmVhLFxyXG59IGZyb20gJ0BzdHJpcGUvdWktZXh0ZW5zaW9uLXNkay91aSc7XHJcbmltcG9ydCB0eXBlIHsgY3JlYXRlQXBpQ2xpZW50LCBKb2IgfSBmcm9tICcuLi9hcGknO1xyXG5cclxuaW50ZXJmYWNlIEltcG9ydFVwbG9hZFByb3BzIHtcclxuICBhcGk6IFJldHVyblR5cGU8dHlwZW9mIGNyZWF0ZUFwaUNsaWVudD47XHJcbn1cclxuXHJcbmNvbnN0IEltcG9ydFVwbG9hZCA9ICh7IGFwaSB9OiBJbXBvcnRVcGxvYWRQcm9wcykgPT4ge1xyXG4gIGNvbnN0IFtjc3ZDb250ZW50LCBzZXRDc3ZDb250ZW50XSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbaXNVcGxvYWRpbmcsIHNldElzVXBsb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbaXNQcm9jZXNzaW5nLCBzZXRJc1Byb2Nlc3NpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtjdXJyZW50Sm9iLCBzZXRDdXJyZW50Sm9iXSA9IHVzZVN0YXRlPEpvYiB8IG51bGw+KG51bGwpO1xyXG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGU8c3RyaW5nIHwgbnVsbD4obnVsbCk7XHJcbiAgY29uc3QgW2RyeVJ1biwgc2V0RHJ5UnVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlVXBsb2FkID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgaWYgKCFjc3ZDb250ZW50LnRyaW0oKSkge1xyXG4gICAgICBzZXRFcnJvcignUGxlYXNlIHBhc3RlIENTViBjb250ZW50Jyk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICAvLyBCYXNpYyB2YWxpZGF0aW9uOiBjaGVjayBmb3IgaGVhZGVyIHJvd1xyXG4gICAgY29uc3QgbGluZXMgPSBjc3ZDb250ZW50LnRyaW0oKS5zcGxpdCgnXFxuJyk7XHJcbiAgICBpZiAobGluZXMubGVuZ3RoIDwgMikge1xyXG4gICAgICBzZXRFcnJvcignQ1NWIG11c3QgaGF2ZSBhIGhlYWRlciByb3cgYW5kIGF0IGxlYXN0IG9uZSBkYXRhIHJvdycpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgc2V0SXNVcGxvYWRpbmcodHJ1ZSk7XHJcbiAgICBzZXRFcnJvcihudWxsKTtcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAvLyBTdGFydCBpbXBvcnQgd2l0aCBDU1YgY29udGVudCBzZW50IGRpcmVjdGx5IHRvIGJhY2tlbmRcclxuICAgICAgY29uc3Qgam9iID0gYXdhaXQgYXBpLnBvc3Q8Sm9iPignL2ltcG9ydC9mcm9tLWNzdi1jb250ZW50Jywge1xyXG4gICAgICAgIGNzdkNvbnRlbnQsXHJcbiAgICAgICAgZHJ5UnVuLFxyXG4gICAgICB9KTtcclxuICAgICAgc2V0Q3VycmVudEpvYihqb2IpO1xyXG4gICAgICBzZXRJc1Byb2Nlc3NpbmcodHJ1ZSk7XHJcblxyXG4gICAgICAvLyBQb2xsIGZvciBjaHVuayBwcm9jZXNzaW5nXHJcbiAgICAgIGF3YWl0IHByb2Nlc3NDaHVua3Moam9iLmlkKTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICBzZXRFcnJvcihlcnIgaW5zdGFuY2VvZiBFcnJvciA/IGVyci5tZXNzYWdlIDogJ1VwbG9hZCBmYWlsZWQnKTtcclxuICAgIH0gZmluYWxseSB7XHJcbiAgICAgIHNldElzVXBsb2FkaW5nKGZhbHNlKTtcclxuICAgICAgc2V0SXNQcm9jZXNzaW5nKGZhbHNlKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBwcm9jZXNzQ2h1bmtzID0gYXN5bmMgKGpvYklkOiBzdHJpbmcpID0+IHtcclxuICAgIGNvbnN0IG1heEF0dGVtcHRzID0gNjAwO1xyXG4gICAgbGV0IGF0dGVtcHRzID0gMDtcclxuXHJcbiAgICB3aGlsZSAoYXR0ZW1wdHMgPCBtYXhBdHRlbXB0cykge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGpvYiA9IGF3YWl0IGFwaS5wb3N0PEpvYj4oYC9pbXBvcnQvJHtqb2JJZH0vcHJvY2Vzc2AsIHtcclxuICAgICAgICAgIGJhdGNoU2l6ZTogMTAwLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHNldEN1cnJlbnRKb2Ioam9iKTtcclxuXHJcbiAgICAgICAgaWYgKGpvYi5zdGF0dXMgPT09ICdjb21wbGV0ZWQnIHx8IGpvYi5zdGF0dXMgPT09ICdmYWlsZWQnIHx8IGpvYi5zdGF0dXMgPT09ICdjYW5jZWxsZWQnKSB7XHJcbiAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBhd2FpdCBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgMTAwKSk7XHJcbiAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0NodW5rIHByb2Nlc3NpbmcgZXJyb3I6JywgZXJyKTtcclxuICAgICAgICBhd2FpdCBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgMzAwMCkpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBhdHRlbXB0cysrO1xyXG4gICAgfVxyXG5cclxuICAgIHNldEVycm9yKCdJbXBvcnQgdGltZWQgb3V0Jyk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2FuY2VsID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgaWYgKCFjdXJyZW50Sm9iIHx8IGN1cnJlbnRKb2Iuc3RhdHVzICE9PSAncHJvY2Vzc2luZycpIHJldHVybjtcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICBhd2FpdCBhcGkuZGVsZXRlKGAvam9icy8ke2N1cnJlbnRKb2IuaWR9YCk7XHJcbiAgICAgIHNldEN1cnJlbnRKb2IocHJldiA9PiBwcmV2ID8geyAuLi5wcmV2LCBzdGF0dXM6ICdjYW5jZWxsZWQnIH0gOiBudWxsKTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdDYW5jZWwgZXJyb3I6JywgZXJyKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVSZXNldCA9ICgpID0+IHtcclxuICAgIHNldENzdkNvbnRlbnQoJycpO1xyXG4gICAgc2V0Q3VycmVudEpvYihudWxsKTtcclxuICAgIHNldEVycm9yKG51bGwpO1xyXG4gICAgc2V0RHJ5UnVuKGZhbHNlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBnZXRQcm9ncmVzcyA9ICgpID0+IHtcclxuICAgIGlmICghY3VycmVudEpvYiB8fCBjdXJyZW50Sm9iLnRvdGFsUm93cyA9PT0gMCkgcmV0dXJuIDA7XHJcbiAgICByZXR1cm4gTWF0aC5yb3VuZCgoY3VycmVudEpvYi5wcm9jZXNzZWRSb3dzIC8gY3VycmVudEpvYi50b3RhbFJvd3MpICogMTAwKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBnZXRSb3dDb3VudCA9ICgpID0+IHtcclxuICAgIGlmICghY3N2Q29udGVudC50cmltKCkpIHJldHVybiAwO1xyXG4gICAgcmV0dXJuIE1hdGgubWF4KDAsIGNzdkNvbnRlbnQudHJpbSgpLnNwbGl0KCdcXG4nKS5sZW5ndGggLSAxKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEJveCBjc3M9e3sgc3RhY2s6ICd5JywgZ2FwOiAnc21hbGwnIH19PlxyXG4gICAgICB7ZXJyb3IgJiYgKFxyXG4gICAgICAgIDxCYW5uZXJcclxuICAgICAgICAgIHR5cGU9XCJjcml0aWNhbFwiXHJcbiAgICAgICAgICB0aXRsZT1cIkltcG9ydCBFcnJvclwiXHJcbiAgICAgICAgICBkZXNjcmlwdGlvbj17ZXJyb3J9XHJcbiAgICAgICAgICBvbkRpc21pc3M9eygpID0+IHNldEVycm9yKG51bGwpfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICl9XHJcblxyXG4gICAgICB7LyogQ1NWIGNvbnRlbnQgaW5wdXQgKi99XHJcbiAgICAgIHshaXNQcm9jZXNzaW5nICYmICFjdXJyZW50Sm9iICYmIChcclxuICAgICAgICA8Qm94IGNzcz17eyBzdGFjazogJ3knLCBnYXA6ICdzbWFsbCcgfX0+XHJcbiAgICAgICAgICA8VGV4dEFyZWFcclxuICAgICAgICAgICAgbGFiZWw9XCJQYXN0ZSBDU1YgY29udGVudFwiXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiaWQsbmFtZSxkZXNjcmlwdGlvbixhY3RpdmUmIzEwO3Byb2RfeHh4LE15IFByb2R1Y3QsRGVzY3JpcHRpb24sdHJ1ZSYjMTA7Li4uXCJcclxuICAgICAgICAgICAgdmFsdWU9e2NzdkNvbnRlbnR9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0Q3N2Q29udGVudChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgIHJvd3M9ezh9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICB7Y3N2Q29udGVudC50cmltKCkgJiYgKFxyXG4gICAgICAgICAgICA8Qm94IGNzcz17eyBjb2xvcjogJ3NlY29uZGFyeScgfX0+XHJcbiAgICAgICAgICAgICAge2dldFJvd0NvdW50KCl9IGRhdGEgcm93KHMpIGRldGVjdGVkXHJcbiAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICB7Y3N2Q29udGVudC50cmltKCkgJiYgKFxyXG4gICAgICAgICAgICA8Qm94IGNzcz17eyBzdGFjazogJ3knLCBnYXA6ICdzbWFsbCcgfX0+XHJcbiAgICAgICAgICAgICAgPENoZWNrYm94XHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIkRyeSBydW4gKHByZXZpZXcgY2hhbmdlcyB3aXRob3V0IGFwcGx5aW5nKVwiXHJcbiAgICAgICAgICAgICAgICBjaGVja2VkPXtkcnlSdW59XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldERyeVJ1bihlLnRhcmdldC5jaGVja2VkKX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgIHR5cGU9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgIG9uUHJlc3M9e2hhbmRsZVVwbG9hZH1cclxuICAgICAgICAgICAgICAgIGRpc2FibGVkPXtpc1VwbG9hZGluZ31cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7aXNVcGxvYWRpbmcgPyAnVXBsb2FkaW5nLi4uJyA6IChkcnlSdW4gPyAnUHJldmlldyBJbXBvcnQnIDogJ0ltcG9ydCBQcm9kdWN0cycpfVxyXG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgICl9XHJcblxyXG4gICAgICB7LyogUHJvY2Vzc2luZyBwcm9ncmVzcyAqL31cclxuICAgICAge2lzUHJvY2Vzc2luZyAmJiBjdXJyZW50Sm9iICYmIChcclxuICAgICAgICA8Qm94IGNzcz17eyBzdGFjazogJ3knLCBnYXA6ICdzbWFsbCcgfX0+XHJcbiAgICAgICAgICA8Qm94IGNzcz17eyBzdGFjazogJ3gnLCBnYXA6ICdzbWFsbCcsIGFsaWduWTogJ2NlbnRlcicgfX0+XHJcbiAgICAgICAgICAgIDxTcGlubmVyIHNpemU9XCJzbWFsbFwiIC8+XHJcbiAgICAgICAgICAgIDxCb3g+XHJcbiAgICAgICAgICAgICAge2RyeVJ1biA/ICdQcmV2aWV3aW5nJyA6ICdJbXBvcnRpbmcnfToge2dldFByb2dyZXNzKCl9JSAoe2N1cnJlbnRKb2IucHJvY2Vzc2VkUm93c30ve2N1cnJlbnRKb2IudG90YWxSb3dzfSByb3dzKVxyXG4gICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICB7Y3VycmVudEpvYi50eXBlID09PSAnaW1wb3J0JyAmJiAoXHJcbiAgICAgICAgICAgIDxCb3g+XHJcbiAgICAgICAgICAgICAgQ3JlYXRlZDoge2N1cnJlbnRKb2IuY3JlYXRlZENvdW50ID8/IDB9IHwgXHJcbiAgICAgICAgICAgICAgVXBkYXRlZDoge2N1cnJlbnRKb2IudXBkYXRlZENvdW50ID8/IDB9IHwgXHJcbiAgICAgICAgICAgICAgU2tpcHBlZDoge2N1cnJlbnRKb2Iuc2tpcHBlZENvdW50ID8/IDB9XHJcbiAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJkZXN0cnVjdGl2ZVwiIG9uUHJlc3M9e2hhbmRsZUNhbmNlbH0+XHJcbiAgICAgICAgICAgIENhbmNlbFxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgICl9XHJcblxyXG4gICAgICB7LyogQ29tcGxldGlvbiByZXN1bHQgKi99XHJcbiAgICAgIHtjdXJyZW50Sm9iICYmIGN1cnJlbnRKb2Iuc3RhdHVzID09PSAnY29tcGxldGVkJyAmJiAhaXNQcm9jZXNzaW5nICYmIChcclxuICAgICAgICA8Qm94IGNzcz17eyBzdGFjazogJ3knLCBnYXA6ICdzbWFsbCcgfX0+XHJcbiAgICAgICAgICA8QmFubmVyXHJcbiAgICAgICAgICAgIHR5cGU9XCJkZWZhdWx0XCJcclxuICAgICAgICAgICAgdGl0bGU9e2RyeVJ1biA/ICdEcnkgUnVuIENvbXBsZXRlJyA6ICdJbXBvcnQgQ29tcGxldGUnfVxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbj17XHJcbiAgICAgICAgICAgICAgZHJ5UnVuXHJcbiAgICAgICAgICAgICAgICA/IGBQcmV2aWV3OiBXb3VsZCBjcmVhdGUgJHtjdXJyZW50Sm9iLmNyZWF0ZWRDb3VudCA/PyAwfSwgdXBkYXRlICR7Y3VycmVudEpvYi51cGRhdGVkQ291bnQgPz8gMH0sIHNraXAgJHtjdXJyZW50Sm9iLnNraXBwZWRDb3VudCA/PyAwfSBwcm9kdWN0cy5gXHJcbiAgICAgICAgICAgICAgICA6IGBTdWNjZXNzZnVsbHkgY3JlYXRlZCAke2N1cnJlbnRKb2IuY3JlYXRlZENvdW50ID8/IDB9LCB1cGRhdGVkICR7Y3VycmVudEpvYi51cGRhdGVkQ291bnQgPz8gMH0gcHJvZHVjdHMuICR7Y3VycmVudEpvYi5za2lwcGVkQ291bnQgPz8gMH0gc2tpcHBlZC5gXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICB7ZHJ5UnVuID8gKFxyXG4gICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJwcmltYXJ5XCIgb25QcmVzcz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgIHNldERyeVJ1bihmYWxzZSk7XHJcbiAgICAgICAgICAgICAgc2V0Q3VycmVudEpvYihudWxsKTtcclxuICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgICAgUHJvY2VlZCB3aXRoIEltcG9ydFxyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInNlY29uZGFyeVwiIG9uUHJlc3M9e2hhbmRsZVJlc2V0fT5cclxuICAgICAgICAgICAgICBJbXBvcnQgQW5vdGhlciBGaWxlXHJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L0JveD5cclxuICAgICAgKX1cclxuXHJcbiAgICAgIHsvKiBGYWlsZWQgc3RhdGUgKi99XHJcbiAgICAgIHtjdXJyZW50Sm9iICYmIGN1cnJlbnRKb2Iuc3RhdHVzID09PSAnZmFpbGVkJyAmJiAhaXNQcm9jZXNzaW5nICYmIChcclxuICAgICAgICA8Qm94IGNzcz17eyBzdGFjazogJ3knLCBnYXA6ICdzbWFsbCcgfX0+XHJcbiAgICAgICAgICA8QmFubmVyXHJcbiAgICAgICAgICAgIHR5cGU9XCJjcml0aWNhbFwiXHJcbiAgICAgICAgICAgIHRpdGxlPVwiSW1wb3J0IEZhaWxlZFwiXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uPVwiVGhlIGltcG9ydCBlbmNvdW50ZXJlZCBhbiBlcnJvciBhbmQgY291bGQgbm90IGNvbXBsZXRlLlwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPEJ1dHRvbiB0eXBlPVwic2Vjb25kYXJ5XCIgb25QcmVzcz17aGFuZGxlUmVzZXR9PlxyXG4gICAgICAgICAgICBUcnkgQWdhaW5cclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICApfVxyXG4gICAgPC9Cb3g+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEltcG9ydFVwbG9hZDtcclxuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBYSxjQUFBLGNBQWM7Ozs7Ozs7Ozs7O0FDVTNCLFVBQUEsVUFBQSxVQUFBO0FBQ0EsVUFBQSxZQUFBO0FBRUEsVUFBTSxlQUFlLENBQ25CLGNBQ0U7QUFDRixjQUFNLHVCQUF1QixVQUFVLGVBQWUsVUFBVSxTQUFRO0FBQ3hFLGNBQU0sZUFFRixDQUFDLFdBQ0gsR0FBQSxjQUFBLEtBQUMsV0FBUyxPQUFBLE9BQUEsQ0FBQSxHQUNKLE9BQUssRUFDVCxzQkFDQSxZQUFZLFVBQUEsYUFDWixlQUFjLEtBQUksQ0FBQSxDQUFB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
