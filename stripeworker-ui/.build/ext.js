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
  var import_react = __require("react");
  var import_ui = __toESM(require_ui());

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

  // src/views/ProductListView.tsx
  var import_jsx_runtime = __require("react/jsx-runtime");
  var ProductListView = ({ userContext }) => {
    var _a;
    const [exportStatus, setExportStatus] = (0, import_react.useState)("");
    const [downloadUrl, setDownloadUrl] = (0, import_react.useState)(null);
    const [isExporting, setIsExporting] = (0, import_react.useState)(false);
    if (!(userContext == null ? void 0 : userContext.id) || !((_a = userContext == null ? void 0 : userContext.account) == null ? void 0 : _a.id)) {
      return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_ui.ContextView, {
        title: "Product CSV Tools",
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_ui.Box, {
          css: { padding: "medium" },
          children: "Loading..."
        })
      });
    }
    const api = createApiClient({
      userId: userContext.id,
      accountId: userContext.account.id
    });
    const handleExport = (0, import_react.useCallback)(() => __async(void 0, null, function* () {
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
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_ui.ContextView, {
      title: "Product CSV Import/Export",
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_ui.Box, {
        css: { padding: "medium", stack: "y", gap: "large" },
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_ui.Box, {
            css: { stack: "y", gap: "small" },
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_ui.Box, {
                css: { fontWeight: "semibold" },
                children: "Export Products"
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_ui.Box, {
                children: "Download all your products as a CSV file."
              }),
              exportStatus && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_ui.Box, {
                children: exportStatus
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_ui.Box, {
                css: { stack: "x", gap: "small" },
                children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_ui.Button, {
                  type: "primary",
                  onPress: handleExport,
                  disabled: isExporting,
                  children: isExporting ? "Exporting..." : "Export Products to CSV"
                })
              }),
              downloadUrl && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_ui.Box, {
                css: { stack: "y", gap: "xsmall" },
                children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_ui.Link, {
                  href: downloadUrl,
                  target: "_blank",
                  children: "Click here to download your CSV file"
                })
              })
            ]
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_ui.Box, {
            css: { stack: "y", gap: "small" },
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_ui.Box, {
                css: { fontWeight: "semibold" },
                children: "Import Products"
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_ui.Box, {
                children: "Upload a CSV file to create or update products."
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_ui.Box, {
                children: "Coming soon - use Export first to get the CSV format."
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL0BzdHJpcGUvc3JjL3ZlcnNpb24udHMiLCAiLi4vbm9kZV9tb2R1bGVzL0BzdHJpcGUvc3JjL3VpL2luZGV4LnRzeCIsICIuLi9ub2RlX21vZHVsZXMvaW52YXJpYW50L2Jyb3dzZXIuanMiLCAiLi4vbm9kZV9tb2R1bGVzL0BzdHJpcGUvc3JjL3V0aWxzL19lbmRwb2ludC50cyIsICIuLi9ub2RlX21vZHVsZXMvQHN0cmlwZS9zcmMvdXRpbHMvYXBpRmV0Y2gudHMiLCAiLi4vbm9kZV9tb2R1bGVzL0BzdHJpcGUvc3JjL3V0aWxzL2NsaXBib2FyZC50cyIsICIuLi9ub2RlX21vZHVsZXMvQHN0cmlwZS9zcmMvdXRpbHMvY29udGV4dC50cyIsICIuLi9ub2RlX21vZHVsZXMvQHN0cmlwZS9zcmMvdXRpbHMvaHR0cENsaWVudC50cyIsICIuLi9ub2RlX21vZHVsZXMvQHN0cmlwZS9zcmMvdXRpbHMvZ2V0RGFzaGJvYXJkVXNlckVtYWlsLnRzIiwgIi4uL25vZGVfbW9kdWxlcy9Ac3RyaXBlL3NyYy91dGlscy9nZXRVc2VyQXV0aG9yaXplZFBlcm1pc3Npb25zLnRzIiwgIi4uL25vZGVfbW9kdWxlcy9Ac3RyaXBlL3NyYy91dGlscy9pc1Blcm1pc3Npb25BdXRob3JpemVkLnRzIiwgIi4uL25vZGVfbW9kdWxlcy9Ac3RyaXBlL3NyYy91dGlscy9pc1NvdXJjZUluQXV0aG9yaXplZENTUC50cyIsICIuLi9ub2RlX21vZHVsZXMvQHN0cmlwZS9zcmMvdXRpbHMvb2F1dGgudHMiLCAiLi4vbm9kZV9tb2R1bGVzL0BzdHJpcGUvdWktZXh0ZW5zaW9uLXNkay91dGlscy9wbGF0Zm9ybVJwY3MuanMiLCAiLi4vbm9kZV9tb2R1bGVzL0BzdHJpcGUvc3JjL3V0aWxzL3NpZ25hdHVyZS50cyIsICIuLi9ub2RlX21vZHVsZXMvQHN0cmlwZS9zcmMvdXRpbHMvdG9hc3QudHMiLCAiLi4vbm9kZV9tb2R1bGVzL0BzdHJpcGUvc3JjL3V0aWxzL2luZGV4LnRzIiwgIm1hbmlmZXN0LmpzIiwgIi4uL3NyYy92aWV3cy9Qcm9kdWN0TGlzdFZpZXcudHN4IiwgIi4uL3NyYy9hcGkudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbbnVsbCwgbnVsbCwgIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIFVzZSBpbnZhcmlhbnQoKSB0byBhc3NlcnQgc3RhdGUgd2hpY2ggeW91ciBwcm9ncmFtIGFzc3VtZXMgdG8gYmUgdHJ1ZS5cbiAqXG4gKiBQcm92aWRlIHNwcmludGYtc3R5bGUgZm9ybWF0IChvbmx5ICVzIGlzIHN1cHBvcnRlZCkgYW5kIGFyZ3VtZW50c1xuICogdG8gcHJvdmlkZSBpbmZvcm1hdGlvbiBhYm91dCB3aGF0IGJyb2tlIGFuZCB3aGF0IHlvdSB3ZXJlXG4gKiBleHBlY3RpbmcuXG4gKlxuICogVGhlIGludmFyaWFudCBtZXNzYWdlIHdpbGwgYmUgc3RyaXBwZWQgaW4gcHJvZHVjdGlvbiwgYnV0IHRoZSBpbnZhcmlhbnRcbiAqIHdpbGwgcmVtYWluIHRvIGVuc3VyZSBsb2dpYyBkb2VzIG5vdCBkaWZmZXIgaW4gcHJvZHVjdGlvbi5cbiAqL1xuXG52YXIgaW52YXJpYW50ID0gZnVuY3Rpb24oY29uZGl0aW9uLCBmb3JtYXQsIGEsIGIsIGMsIGQsIGUsIGYpIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoZm9ybWF0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignaW52YXJpYW50IHJlcXVpcmVzIGFuIGVycm9yIG1lc3NhZ2UgYXJndW1lbnQnKTtcbiAgICB9XG4gIH1cblxuICBpZiAoIWNvbmRpdGlvbikge1xuICAgIHZhciBlcnJvcjtcbiAgICBpZiAoZm9ybWF0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGVycm9yID0gbmV3IEVycm9yKFxuICAgICAgICAnTWluaWZpZWQgZXhjZXB0aW9uIG9jY3VycmVkOyB1c2UgdGhlIG5vbi1taW5pZmllZCBkZXYgZW52aXJvbm1lbnQgJyArXG4gICAgICAgICdmb3IgdGhlIGZ1bGwgZXJyb3IgbWVzc2FnZSBhbmQgYWRkaXRpb25hbCBoZWxwZnVsIHdhcm5pbmdzLidcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBhcmdzID0gW2EsIGIsIGMsIGQsIGUsIGZdO1xuICAgICAgdmFyIGFyZ0luZGV4ID0gMDtcbiAgICAgIGVycm9yID0gbmV3IEVycm9yKFxuICAgICAgICBmb3JtYXQucmVwbGFjZSgvJXMvZywgZnVuY3Rpb24oKSB7IHJldHVybiBhcmdzW2FyZ0luZGV4KytdOyB9KVxuICAgICAgKTtcbiAgICAgIGVycm9yLm5hbWUgPSAnSW52YXJpYW50IFZpb2xhdGlvbic7XG4gICAgfVxuXG4gICAgZXJyb3IuZnJhbWVzVG9Qb3AgPSAxOyAvLyB3ZSBkb24ndCBjYXJlIGFib3V0IGludmFyaWFudCdzIG93biBmcmFtZVxuICAgIHRocm93IGVycm9yO1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGludmFyaWFudDtcbiIsIG51bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwsICJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXBsYXRmb3JtUnBjcy5qcy5tYXAiLCBudWxsLCBudWxsLCBudWxsLCAiLy8gQVVUT0dFTkVSQVRFRCAtIERPIE5PVCBNT0RJRllcbmltcG9ydCBQcm9kdWN0TGlzdFZpZXcgZnJvbSAnLi4vc3JjL3ZpZXdzL1Byb2R1Y3RMaXN0Vmlldyc7XG5cbmV4cG9ydCAqIGZyb20gJ0BzdHJpcGUvdWktZXh0ZW5zaW9uLXNkay92ZXJzaW9uJztcbmV4cG9ydCBjb25zdCBCVUlMRF9USU1FID0gJzIwMjYtMDItMTQgMjE6MzY6NDIuNjU0MDg3NCArMDEwMCBDRVQgbT0rMC4wNjQ4MTA1MDEnO1xuXG5leHBvcnQgeyBcbiAgUHJvZHVjdExpc3RWaWV3XHRcbiB9O1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIFwiY29ubmVjdF9wZXJtaXNzaW9uc1wiOiBudWxsLFxuICBcImljb25cIjogXCIuL2ljb24ucG5nXCIsXG4gIFwiaWRcIjogXCJjb20uZXhhbXBsZS5zdHJpcGV3b3JrZXItY3N2XCIsXG4gIFwibmFtZVwiOiBcIlByb2R1Y3QgQ1NWIEltcG9ydC1FeHBvcnRcIixcbiAgXCJwZXJtaXNzaW9uc1wiOiBbXG4gICAge1xuICAgICAgXCJwZXJtaXNzaW9uXCI6IFwicHJvZHVjdF9yZWFkXCIsXG4gICAgICBcInB1cnBvc2VcIjogXCJFeHBvcnQgcHJvZHVjdHMgdG8gQ1NWXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwicGVybWlzc2lvblwiOiBcInByb2R1Y3Rfd3JpdGVcIixcbiAgICAgIFwicHVycG9zZVwiOiBcIkltcG9ydCBwcm9kdWN0cyBmcm9tIENTVlwiXG4gICAgfVxuICBdLFxuICBcInBvc3RfaW5zdGFsbF9hY3Rpb25cIjoge1xuICAgIFwidHlwZVwiOiBcImV4dGVybmFsXCIsXG4gICAgXCJ1cmxcIjogXCJodHRwczovL2dpdGh1Yi5jb20veW91ci1vcmcvc3RyaXBld29ya2VyI3JlYWRtZVwiXG4gIH0sXG4gIFwic3RyaXBlX2FwaV9hY2Nlc3NfdHlwZVwiOiBcInBsYXRmb3JtXCIsXG4gIFwidWlfZXh0ZW5zaW9uXCI6IHtcbiAgICBcImNvbnRlbnRfc2VjdXJpdHlfcG9saWN5XCI6IHtcbiAgICAgIFwiY29ubmVjdC1zcmNcIjogW1xuICAgICAgICBcImh0dHA6Ly9sb2NhbGhvc3Q6ODc4Ny9cIlxuICAgICAgXSxcbiAgICAgIFwiaW1hZ2Utc3JjXCI6IG51bGwsXG4gICAgICBcInB1cnBvc2VcIjogXCJDb25uZWN0IHRvIGxvY2FsIGRldmVsb3BtZW50IGJhY2tlbmQgZm9yIENTViBpbXBvcnQvZXhwb3J0IG9wZXJhdGlvbnNcIlxuICAgIH0sXG4gICAgXCJ2aWV3c1wiOiBbXG4gICAgICB7XG4gICAgICAgIFwiY29tcG9uZW50XCI6IFwiUHJvZHVjdExpc3RWaWV3XCIsXG4gICAgICAgIFwidmlld3BvcnRcIjogXCJzdHJpcGUuZGFzaGJvYXJkLnByb2R1Y3QubGlzdFwiXG4gICAgICB9XG4gICAgXVxuICB9LFxuICBcInZlcnNpb25cIjogXCIwLjAuMVwiXG59O1xuIiwgIi8qKlxyXG4gKiBQcm9kdWN0TGlzdFZpZXcgLSBNYWluIGFwcCB2aWV3IGVtYmVkZGVkIGluIFN0cmlwZSBEYXNoYm9hcmQgcHJvZHVjdCBsaXN0XHJcbiAqIEZvbGxvd2luZyBTdHJpcGUgQXBwcyBTREsgZG9jdW1lbnRhdGlvbiBzdHJ1Y3R1cmUgZXhhY3RseVxyXG4gKi9cclxuXHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtcclxuICBCb3gsXHJcbiAgQ29udGV4dFZpZXcsXHJcbiAgQnV0dG9uLFxyXG4gIExpbmssXHJcbn0gZnJvbSAnQHN0cmlwZS91aS1leHRlbnNpb24tc2RrL3VpJztcclxuaW1wb3J0IHR5cGUgeyBFeHRlbnNpb25Db250ZXh0VmFsdWUgfSBmcm9tICdAc3RyaXBlL3VpLWV4dGVuc2lvbi1zZGsvY29udGV4dCc7XHJcbmltcG9ydCB7IGNyZWF0ZUFwaUNsaWVudCwgSm9iIH0gZnJvbSAnLi4vYXBpJztcclxuXHJcbmNvbnN0IFByb2R1Y3RMaXN0VmlldyA9ICh7IHVzZXJDb250ZXh0IH06IEV4dGVuc2lvbkNvbnRleHRWYWx1ZSkgPT4ge1xyXG4gIGNvbnN0IFtleHBvcnRTdGF0dXMsIHNldEV4cG9ydFN0YXR1c10gPSB1c2VTdGF0ZTxzdHJpbmc+KCcnKTtcclxuICBjb25zdCBbZG93bmxvYWRVcmwsIHNldERvd25sb2FkVXJsXSA9IHVzZVN0YXRlPHN0cmluZyB8IG51bGw+KG51bGwpO1xyXG4gIGNvbnN0IFtpc0V4cG9ydGluZywgc2V0SXNFeHBvcnRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICAvLyBDaGVjayBmb3IgcmVxdWlyZWQgY29udGV4dFxyXG4gIGlmICghdXNlckNvbnRleHQ/LmlkIHx8ICF1c2VyQ29udGV4dD8uYWNjb3VudD8uaWQpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxDb250ZXh0VmlldyB0aXRsZT1cIlByb2R1Y3QgQ1NWIFRvb2xzXCI+XHJcbiAgICAgICAgPEJveCBjc3M9e3sgcGFkZGluZzogJ21lZGl1bScgfX0+XHJcbiAgICAgICAgICBMb2FkaW5nLi4uXHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgIDwvQ29udGV4dFZpZXc+XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgYXBpID0gY3JlYXRlQXBpQ2xpZW50KHtcclxuICAgIHVzZXJJZDogdXNlckNvbnRleHQuaWQsXHJcbiAgICBhY2NvdW50SWQ6IHVzZXJDb250ZXh0LmFjY291bnQuaWQsXHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUV4cG9ydCA9IHVzZUNhbGxiYWNrKGFzeW5jICgpID0+IHtcclxuICAgIHNldElzRXhwb3J0aW5nKHRydWUpO1xyXG4gICAgc2V0RXhwb3J0U3RhdHVzKCdTdGFydGluZyBleHBvcnQuLi4nKTtcclxuICAgIHNldERvd25sb2FkVXJsKG51bGwpO1xyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IGpvYiA9IGF3YWl0IGFwaS5wb3N0PEpvYj4oJy9leHBvcnQvc3RhcnQnKTtcclxuICAgICAgc2V0RXhwb3J0U3RhdHVzKGBFeHBvcnRpbmcgcHJvZHVjdHMuLi5gKTtcclxuXHJcbiAgICAgIC8vIFBvbGwgZm9yIGNvbXBsZXRpb25cclxuICAgICAgbGV0IGF0dGVtcHRzID0gMDtcclxuICAgICAgd2hpbGUgKGF0dGVtcHRzIDwgNjApIHtcclxuICAgICAgICBhd2FpdCBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgMzAwMCkpO1xyXG4gICAgICAgIGNvbnN0IHN0YXR1cyA9IGF3YWl0IGFwaS5nZXQ8Sm9iPihgL2pvYnMvJHtqb2IuaWR9YCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKHN0YXR1cy5zdGF0dXMgPT09ICdjb21wbGV0ZWQnKSB7XHJcbiAgICAgICAgICBjb25zdCBkb3dubG9hZCA9IGF3YWl0IGFwaS5nZXQ8eyBkb3dubG9hZFVybDogc3RyaW5nIH0+KGAvZXhwb3J0LyR7am9iLmlkfS9kb3dubG9hZGApO1xyXG4gICAgICAgICAgc2V0RG93bmxvYWRVcmwoZG93bmxvYWQuZG93bmxvYWRVcmwpO1xyXG4gICAgICAgICAgc2V0RXhwb3J0U3RhdHVzKGBFeHBvcnQgY29tcGxldGUhICR7c3RhdHVzLnRvdGFsUm93c30gcHJvZHVjdHMgZXhwb3J0ZWQuYCk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICB9IGVsc2UgaWYgKHN0YXR1cy5zdGF0dXMgPT09ICdmYWlsZWQnKSB7XHJcbiAgICAgICAgICBzZXRFeHBvcnRTdGF0dXMoJ0V4cG9ydCBmYWlsZWQnKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBzZXRFeHBvcnRTdGF0dXMoYEV4cG9ydGluZy4uLiAke3N0YXR1cy5wcm9jZXNzZWRSb3dzfSBwcm9kdWN0c2ApO1xyXG4gICAgICAgIGF0dGVtcHRzKys7XHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICBzZXRFeHBvcnRTdGF0dXMoYEVycm9yOiAke2VyciBpbnN0YW5jZW9mIEVycm9yID8gZXJyLm1lc3NhZ2UgOiAnRXhwb3J0IGZhaWxlZCd9YCk7XHJcbiAgICB9IGZpbmFsbHkge1xyXG4gICAgICBzZXRJc0V4cG9ydGluZyhmYWxzZSk7XHJcbiAgICB9XHJcbiAgfSwgW2FwaV0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPENvbnRleHRWaWV3IHRpdGxlPVwiUHJvZHVjdCBDU1YgSW1wb3J0L0V4cG9ydFwiPlxyXG4gICAgICA8Qm94IGNzcz17eyBwYWRkaW5nOiAnbWVkaXVtJywgc3RhY2s6ICd5JywgZ2FwOiAnbGFyZ2UnIH19PlxyXG4gICAgICAgIDxCb3ggY3NzPXt7IHN0YWNrOiAneScsIGdhcDogJ3NtYWxsJyB9fT5cclxuICAgICAgICAgIDxCb3ggY3NzPXt7IGZvbnRXZWlnaHQ6ICdzZW1pYm9sZCcgfX0+RXhwb3J0IFByb2R1Y3RzPC9Cb3g+XHJcbiAgICAgICAgICA8Qm94PkRvd25sb2FkIGFsbCB5b3VyIHByb2R1Y3RzIGFzIGEgQ1NWIGZpbGUuPC9Cb3g+XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIHtleHBvcnRTdGF0dXMgJiYgPEJveD57ZXhwb3J0U3RhdHVzfTwvQm94Pn1cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgPEJveCBjc3M9e3sgc3RhY2s6ICd4JywgZ2FwOiAnc21hbGwnIH19PlxyXG4gICAgICAgICAgICA8QnV0dG9uIFxyXG4gICAgICAgICAgICAgIHR5cGU9XCJwcmltYXJ5XCIgXHJcbiAgICAgICAgICAgICAgb25QcmVzcz17aGFuZGxlRXhwb3J0fVxyXG4gICAgICAgICAgICAgIGRpc2FibGVkPXtpc0V4cG9ydGluZ31cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIHtpc0V4cG9ydGluZyA/ICdFeHBvcnRpbmcuLi4nIDogJ0V4cG9ydCBQcm9kdWN0cyB0byBDU1YnfVxyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICB7ZG93bmxvYWRVcmwgJiYgKFxyXG4gICAgICAgICAgICA8Qm94IGNzcz17eyBzdGFjazogJ3knLCBnYXA6ICd4c21hbGwnIH19PlxyXG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2Rvd25sb2FkVXJsfSB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuICAgICAgICAgICAgICAgIENsaWNrIGhlcmUgdG8gZG93bmxvYWQgeW91ciBDU1YgZmlsZVxyXG4gICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvQm94PlxyXG5cclxuICAgICAgICA8Qm94IGNzcz17eyBzdGFjazogJ3knLCBnYXA6ICdzbWFsbCcgfX0+XHJcbiAgICAgICAgICA8Qm94IGNzcz17eyBmb250V2VpZ2h0OiAnc2VtaWJvbGQnIH19PkltcG9ydCBQcm9kdWN0czwvQm94PlxyXG4gICAgICAgICAgPEJveD5VcGxvYWQgYSBDU1YgZmlsZSB0byBjcmVhdGUgb3IgdXBkYXRlIHByb2R1Y3RzLjwvQm94PlxyXG4gICAgICAgICAgPEJveD5Db21pbmcgc29vbiAtIHVzZSBFeHBvcnQgZmlyc3QgdG8gZ2V0IHRoZSBDU1YgZm9ybWF0LjwvQm94PlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8L0JveD5cclxuICAgIDwvQ29udGV4dFZpZXc+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RMaXN0VmlldztcclxuIiwgIi8qKlxyXG4gKiBTaWduZWQgQVBJIGNsaWVudCBoZWxwZXIgd2l0aCBmZXRjaFN0cmlwZVNpZ25hdHVyZSBmb3IgU3RyaXBlIEFwcHMgVUlcclxuICovXHJcblxyXG5pbXBvcnQgeyBmZXRjaFN0cmlwZVNpZ25hdHVyZSB9IGZyb20gJ0BzdHJpcGUvdWktZXh0ZW5zaW9uLXNkay91dGlscyc7XHJcblxyXG4vLyBCYWNrZW5kIEFQSSBiYXNlIFVSTCAtIGNvbmZpZ3VyZSBiYXNlZCBvbiBlbnZpcm9ubWVudFxyXG5jb25zdCBBUElfQkFTRV9VUkwgPSBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50J1xyXG4gID8gJ2h0dHA6Ly9sb2NhbGhvc3Q6ODc4NydcclxuICA6ICdodHRwczovL3N0cmlwZXdvcmtlci53b3JrZXJzLmRldic7IC8vIFJlcGxhY2Ugd2l0aCBhY3R1YWwgZGVwbG95bWVudCBVUkxcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU2lnbmVkUmVxdWVzdEJvZHkge1xyXG4gIHVzZXJfaWQ6IHN0cmluZztcclxuICBhY2NvdW50X2lkOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQXBpQ2xpZW50T3B0aW9ucyB7XHJcbiAgdXNlcklkOiBzdHJpbmc7XHJcbiAgYWNjb3VudElkOiBzdHJpbmc7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDcmVhdGUgYW4gQVBJIGNsaWVudCB3aXRoIGF1dG9tYXRpYyBzaWduYXR1cmUgZ2VuZXJhdGlvblxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUFwaUNsaWVudChvcHRpb25zOiBBcGlDbGllbnRPcHRpb25zKSB7XHJcbiAgY29uc3QgYmFzZUJvZHk6IFNpZ25lZFJlcXVlc3RCb2R5ID0ge1xyXG4gICAgdXNlcl9pZDogb3B0aW9ucy51c2VySWQsXHJcbiAgICBhY2NvdW50X2lkOiBvcHRpb25zLmFjY291bnRJZCxcclxuICB9O1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgLyoqXHJcbiAgICAgKiBNYWtlIGEgc2lnbmVkIFBPU1QgcmVxdWVzdFxyXG4gICAgICovXHJcbiAgICBhc3luYyBwb3N0PFQ+KHBhdGg6IHN0cmluZywgYm9keTogUmVjb3JkPHN0cmluZywgdW5rbm93bj4gPSB7fSk6IFByb21pc2U8VD4ge1xyXG4gICAgICBjb25zdCByZXF1ZXN0Qm9keSA9IHsgLi4uYmFzZUJvZHksIC4uLmJvZHkgfTtcclxuICAgICAgY29uc3Qgc2lnbmF0dXJlID0gYXdhaXQgZmV0Y2hTdHJpcGVTaWduYXR1cmUoKTtcclxuXHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7QVBJX0JBU0VfVVJMfSR7cGF0aH1gLCB7XHJcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICdTdHJpcGUtU2lnbmF0dXJlJzogc2lnbmF0dXJlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkocmVxdWVzdEJvZHkpLFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcclxuICAgICAgICBjb25zdCBlcnJvciA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKS5jYXRjaCgoKSA9PiAoeyBlcnJvcjogJ1JlcXVlc3QgZmFpbGVkJyB9KSk7XHJcbiAgICAgICAgdGhyb3cgbmV3IEFwaUVycm9yKHJlc3BvbnNlLnN0YXR1cywgKGVycm9yIGFzIHsgZXJyb3I/OiBzdHJpbmcgfSkuZXJyb3IgPz8gJ1JlcXVlc3QgZmFpbGVkJyk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCkgYXMgUHJvbWlzZTxUPjtcclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBNYWtlIGEgc2lnbmVkIEdFVCByZXF1ZXN0IChzaWduYXR1cmUgaW4gaGVhZGVyLCBhY2NvdW50IGluIHF1ZXJ5KVxyXG4gICAgICovXHJcbiAgICBhc3luYyBnZXQ8VD4ocGF0aDogc3RyaW5nLCBwYXJhbXM6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4gPSB7fSk6IFByb21pc2U8VD4ge1xyXG4gICAgICBjb25zdCBzaWduYXR1cmUgPSBhd2FpdCBmZXRjaFN0cmlwZVNpZ25hdHVyZSgpO1xyXG4gICAgICBjb25zdCBzZWFyY2hQYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHtcclxuICAgICAgICAuLi5wYXJhbXMsXHJcbiAgICAgICAgYWNjb3VudF9pZDogb3B0aW9ucy5hY2NvdW50SWQsXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHtBUElfQkFTRV9VUkx9JHtwYXRofT8ke3NlYXJjaFBhcmFtc31gLCB7XHJcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAnU3RyaXBlLVNpZ25hdHVyZSc6IHNpZ25hdHVyZSxcclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcclxuICAgICAgICBjb25zdCBlcnJvciA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKS5jYXRjaCgoKSA9PiAoeyBlcnJvcjogJ1JlcXVlc3QgZmFpbGVkJyB9KSk7XHJcbiAgICAgICAgdGhyb3cgbmV3IEFwaUVycm9yKHJlc3BvbnNlLnN0YXR1cywgKGVycm9yIGFzIHsgZXJyb3I/OiBzdHJpbmcgfSkuZXJyb3IgPz8gJ1JlcXVlc3QgZmFpbGVkJyk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCkgYXMgUHJvbWlzZTxUPjtcclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBNYWtlIGEgc2lnbmVkIERFTEVURSByZXF1ZXN0XHJcbiAgICAgKi9cclxuICAgIGFzeW5jIGRlbGV0ZTxUPihwYXRoOiBzdHJpbmcpOiBQcm9taXNlPFQ+IHtcclxuICAgICAgY29uc3Qgc2lnbmF0dXJlID0gYXdhaXQgZmV0Y2hTdHJpcGVTaWduYXR1cmUoKTtcclxuXHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7QVBJX0JBU0VfVVJMfSR7cGF0aH0/YWNjb3VudF9pZD0ke29wdGlvbnMuYWNjb3VudElkfWAsIHtcclxuICAgICAgICBtZXRob2Q6ICdERUxFVEUnLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICdTdHJpcGUtU2lnbmF0dXJlJzogc2lnbmF0dXJlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xyXG4gICAgICAgIGNvbnN0IGVycm9yID0gYXdhaXQgcmVzcG9uc2UuanNvbigpLmNhdGNoKCgpID0+ICh7IGVycm9yOiAnUmVxdWVzdCBmYWlsZWQnIH0pKTtcclxuICAgICAgICB0aHJvdyBuZXcgQXBpRXJyb3IocmVzcG9uc2Uuc3RhdHVzLCAoZXJyb3IgYXMgeyBlcnJvcj86IHN0cmluZyB9KS5lcnJvciA/PyAnUmVxdWVzdCBmYWlsZWQnKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKSBhcyBQcm9taXNlPFQ+O1xyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIFVwbG9hZCBhIGZpbGUgdG8gYSBwcmVzaWduZWQgVVJMXHJcbiAgICAgKi9cclxuICAgIGFzeW5jIHVwbG9hZEZpbGUodXBsb2FkVXJsOiBzdHJpbmcsIGZpbGU6IEZpbGUpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cGxvYWRVcmwsIHtcclxuICAgICAgICBtZXRob2Q6ICdQVVQnLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICdDb250ZW50LVR5cGUnOiBmaWxlLnR5cGUgfHwgJ3RleHQvY3N2JyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGJvZHk6IGZpbGUsXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xyXG4gICAgICAgIHRocm93IG5ldyBBcGlFcnJvcihyZXNwb25zZS5zdGF0dXMsICdGaWxlIHVwbG9hZCBmYWlsZWQnKTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICB9O1xyXG59XHJcblxyXG4vKipcclxuICogQVBJIGVycm9yIGNsYXNzXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgQXBpRXJyb3IgZXh0ZW5kcyBFcnJvciB7XHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgc3RhdHVzOiBudW1iZXIsXHJcbiAgICBtZXNzYWdlOiBzdHJpbmdcclxuICApIHtcclxuICAgIHN1cGVyKG1lc3NhZ2UpO1xyXG4gICAgdGhpcy5uYW1lID0gJ0FwaUVycm9yJztcclxuICB9XHJcbn1cclxuXHJcbi8vIEpvYiB0eXBlcyBmb3IgQVBJIHJlc3BvbnNlc1xyXG5leHBvcnQgaW50ZXJmYWNlIEpvYiB7XHJcbiAgaWQ6IHN0cmluZztcclxuICB0eXBlOiAnaW1wb3J0JyB8ICdleHBvcnQnO1xyXG4gIHN0YXR1czogJ3BlbmRpbmcnIHwgJ3Byb2Nlc3NpbmcnIHwgJ2NvbXBsZXRlZCcgfCAnZmFpbGVkJyB8ICdjYW5jZWxsZWQnO1xyXG4gIHRvdGFsUm93czogbnVtYmVyO1xyXG4gIHByb2Nlc3NlZFJvd3M6IG51bWJlcjtcclxuICBjcmVhdGVkQ291bnQ/OiBudW1iZXI7XHJcbiAgdXBkYXRlZENvdW50PzogbnVtYmVyO1xyXG4gIHNraXBwZWRDb3VudD86IG51bWJlcjtcclxuICBlcnJvckNvdW50OiBudW1iZXI7XHJcbiAgZHJ5UnVuPzogYm9vbGVhbjtcclxuICBjcmVhdGVkQXQ6IHN0cmluZztcclxuICB1cGRhdGVkQXQ6IHN0cmluZztcclxuICBjb21wbGV0ZWRBdD86IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBVcGxvYWRVcmxSZXNwb25zZSB7XHJcbiAgdXBsb2FkVXJsOiBzdHJpbmc7XHJcbiAgam9iSWQ6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBEb3dubG9hZFVybFJlc3BvbnNlIHtcclxuICBkb3dubG9hZFVybDogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEVycm9yc1Jlc3BvbnNlIHtcclxuICBkb3dubG9hZFVybDogc3RyaW5nO1xyXG4gIGVycm9yQ291bnQ6IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBK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
