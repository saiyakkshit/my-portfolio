(globalThis.webpackChunkportfolio = globalThis.webpackChunkportfolio || []).push([
  [179],
  {
    './.storybook/StoryContainer.js': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      'use strict';
      __webpack_require__.d(__webpack_exports__, {
        y: () => StoryContainer_StoryContainer,
      });
      var injectStylesIntoStyleTag = __webpack_require__(
          './node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js'
        ),
        injectStylesIntoStyleTag_default = __webpack_require__.n(
          injectStylesIntoStyleTag
        ),
        StoryContainer = __webpack_require__(
          './node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./node_modules/postcss-loader/dist/cjs.js!./.storybook/StoryContainer.css'
        ),
        options = { insert: 'head', singleton: !1 };
      injectStylesIntoStyleTag_default()(StoryContainer.Z, options);
      StoryContainer.Z.locals;
      var jsx_runtime = __webpack_require__('./node_modules/react/jsx-runtime.js'),
        StoryContainer_StoryContainer = function (_ref) {
          var _ref$padding = _ref.padding,
            padding = void 0 === _ref$padding ? 32 : _ref$padding,
            stretch = _ref.stretch,
            _ref$gutter = _ref.gutter,
            gutter = void 0 === _ref$gutter ? 32 : _ref$gutter,
            vertical = _ref.vertical,
            children = _ref.children,
            style = _ref.style;
          return (0, jsx_runtime.jsx)('div', {
            className: 'storyContainer',
            style: Object.assign(
              {
                padding,
                gap: gutter,
                flexDirection: vertical ? 'column' : 'row',
                alignItems: stretch ? 'stretch' : 'flex-start',
                justifyContent: stretch ? 'stretch' : 'flex-start',
              },
              style
            ),
            children,
          });
        };
      StoryContainer_StoryContainer.displayName = 'StoryContainer';
      (StoryContainer_StoryContainer.__docgenInfo = {
        description: '',
        methods: [],
        displayName: 'StoryContainer',
        props: {
          padding: { defaultValue: { value: '32', computed: !1 }, required: !1 },
          gutter: { defaultValue: { value: '32', computed: !1 }, required: !1 },
        },
      }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES['.storybook/StoryContainer.js'] = {
            name: 'StoryContainer',
            docgenInfo: StoryContainer_StoryContainer.__docgenInfo,
            path: '.storybook/StoryContainer.js',
          });
    },
    './.storybook/preview.js-generated-config-entry.js': (
      __unused_webpack_module,
      __unused_webpack___webpack_exports__,
      __webpack_require__
    ) => {
      'use strict';
      var _storybook_preview_namespaceObject = {};
      __webpack_require__.r(_storybook_preview_namespaceObject),
        __webpack_require__.d(_storybook_preview_namespaceObject, {
          __namedExportsOrder: () => __namedExportsOrder,
          decorators: () => decorators,
          globalTypes: () => globalTypes,
          parameters: () => parameters,
        });
      var ClientApi = __webpack_require__(
          './node_modules/@storybook/client-api/dist/esm/ClientApi.js'
        ),
        injectStylesIntoStyleTag =
          (__webpack_require__('./src/layouts/App/reset.css'),
          __webpack_require__('./src/layouts/App/global.css'),
          __webpack_require__(
            './node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js'
          )),
        injectStylesIntoStyleTag_default = __webpack_require__.n(
          injectStylesIntoStyleTag
        ),
        preview = __webpack_require__(
          './node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./node_modules/postcss-loader/dist/cjs.js!./.storybook/preview.css'
        ),
        options = { insert: 'head', singleton: !1 };
      injectStylesIntoStyleTag_default()(preview.Z, options);
      preview.Z.locals;
      var react = __webpack_require__('./node_modules/react/index.js'),
        ThemeProvider = __webpack_require__('./src/components/ThemeProvider/index.js'),
        jsx_runtime = __webpack_require__('./node_modules/react/jsx-runtime.js'),
        decorators = [
          function (Story, context) {
            var theme = context.globals.theme;
            return (
              (0, react.useEffect)(
                function () {
                  document.body.dataset.theme = theme;
                },
                [theme]
              ),
              (0, jsx_runtime.jsxs)(ThemeProvider.f6, {
                themeId: theme,
                children: [
                  (0, jsx_runtime.jsx)('style', { children: ThemeProvider.g6 }),
                  (0, jsx_runtime.jsx)('style', { children: ThemeProvider.yB }),
                  (0, jsx_runtime.jsxs)('div', {
                    id: 'story-root',
                    className: 'storyRoot',
                    children: [
                      (0, jsx_runtime.jsx)(Story, {}),
                      (0, jsx_runtime.jsx)('div', { id: 'portal-root' }),
                    ],
                  }),
                ],
              })
            );
          },
        ],
        globalTypes = {
          theme: {
            name: 'Theme',
            description: 'Global theme for components',
            defaultValue: 'dark',
            toolbar: { icon: 'paintbrush', items: ['light', 'dark'] },
          },
        },
        parameters = { layout: 'fullscreen', controls: { hideNoControlsWarning: !0 } },
        __namedExportsOrder = ['decorators', 'globalTypes', 'parameters'];
      function ownKeys(object, enumerableOnly) {
        var keys = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var symbols = Object.getOwnPropertySymbols(object);
          enumerableOnly &&
            (symbols = symbols.filter(function (sym) {
              return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            })),
            keys.push.apply(keys, symbols);
        }
        return keys;
      }
      function _defineProperty(obj, key, value) {
        return (
          key in obj
            ? Object.defineProperty(obj, key, {
                value,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (obj[key] = value),
          obj
        );
      }
      Object.keys(_storybook_preview_namespaceObject).forEach(function (key) {
        var value = _storybook_preview_namespaceObject[key];
        switch (key) {
          case 'args':
            return (0, ClientApi.uc)(value);
          case 'argTypes':
            return (0, ClientApi.v9)(value);
          case 'decorators':
            return value.forEach(function (decorator) {
              return (0, ClientApi.$9)(decorator, !1);
            });
          case 'loaders':
            return value.forEach(function (loader) {
              return (0, ClientApi.HZ)(loader, !1);
            });
          case 'parameters':
            return (0, ClientApi.h1)(
              (function _objectSpread(target) {
                for (var i = 1; i < arguments.length; i++) {
                  var source = null != arguments[i] ? arguments[i] : {};
                  i % 2
                    ? ownKeys(Object(source), !0).forEach(function (key) {
                        _defineProperty(target, key, source[key]);
                      })
                    : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(
                        target,
                        Object.getOwnPropertyDescriptors(source)
                      )
                    : ownKeys(Object(source)).forEach(function (key) {
                        Object.defineProperty(
                          target,
                          key,
                          Object.getOwnPropertyDescriptor(source, key)
                        );
                      });
                }
                return target;
              })({}, value),
              !1
            );
          case 'argTypesEnhancers':
            return value.forEach(function (enhancer) {
              return (0, ClientApi.My)(enhancer);
            });
          case 'argsEnhancers':
            return value.forEach(function (enhancer) {
              return (0, ClientApi._C)(enhancer);
            });
          case 'render':
            return (0, ClientApi.$P)(value);
          case 'globals':
          case 'globalTypes':
            var v = {};
            return (v[key] = value), (0, ClientApi.h1)(v, !1);
          case '__namedExportsOrder':
          case 'decorateStory':
          case 'renderToDOM':
            return null;
          default:
            return console.log(key + ' was not supported :( !');
        }
      });
    },
    './src/components/Button/Button.stories.js': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          IconOnly: () => IconOnly,
          Loader: () => Loader,
          Primary: () => Primary,
          Secondary: () => Secondary,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => __WEBPACK_DEFAULT_EXPORT__,
        });
      var components_Button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          './src/components/Button/index.js'
        ),
        react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          './node_modules/react/index.js'
        ),
        _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          './node_modules/@storybook/addon-actions/dist/esm/index.js'
        ),
        _storybook_StoryContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          './.storybook/StoryContainer.js'
        ),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          './node_modules/react/jsx-runtime.js'
        );
      function _slicedToArray(arr, i) {
        return (
          (function _arrayWithHoles(arr) {
            if (Array.isArray(arr)) return arr;
          })(arr) ||
          (function _iterableToArrayLimit(arr, i) {
            var _i =
              null == arr
                ? null
                : ('undefined' != typeof Symbol && arr[Symbol.iterator]) ||
                  arr['@@iterator'];
            if (null == _i) return;
            var _s,
              _e,
              _arr = [],
              _n = !0,
              _d = !1;
            try {
              for (
                _i = _i.call(arr);
                !(_n = (_s = _i.next()).done) &&
                (_arr.push(_s.value), !i || _arr.length !== i);
                _n = !0
              );
            } catch (err) {
              (_d = !0), (_e = err);
            } finally {
              try {
                _n || null == _i.return || _i.return();
              } finally {
                if (_d) throw _e;
              }
            }
            return _arr;
          })(arr, i) ||
          (function _unsupportedIterableToArray(o, minLen) {
            if (!o) return;
            if ('string' == typeof o) return _arrayLikeToArray(o, minLen);
            var n = Object.prototype.toString.call(o).slice(8, -1);
            'Object' === n && o.constructor && (n = o.constructor.name);
            if ('Map' === n || 'Set' === n) return Array.from(o);
            if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
              return _arrayLikeToArray(o, minLen);
          })(arr, i) ||
          (function _nonIterableRest() {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      function _arrayLikeToArray(arr, len) {
        (null == len || len > arr.length) && (len = arr.length);
        for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
        return arr2;
      }
      const __WEBPACK_DEFAULT_EXPORT__ = { title: 'Button' };
      var LoadableButton = function (props) {
        var _useState2 = _slicedToArray(
            (0, react__WEBPACK_IMPORTED_MODULE_1__.useState)(!1),
            2
          ),
          loading = _useState2[0],
          setLoading = _useState2[1];
        return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(
          components_Button__WEBPACK_IMPORTED_MODULE_0__.z,
          Object.assign(
            {
              loading,
              onClick: function () {
                return setLoading(!loading);
              },
            },
            props
          )
        );
      };
      LoadableButton.displayName = 'LoadableButton';
      var Primary = function () {
        return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(
          _storybook_StoryContainer__WEBPACK_IMPORTED_MODULE_3__.y,
          {
            children: [
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(
                components_Button__WEBPACK_IMPORTED_MODULE_0__.z,
                {
                  onClick: (0,
                  _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__.action)(
                    'clicked'
                  ),
                  children: 'Text only',
                }
              ),
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(
                components_Button__WEBPACK_IMPORTED_MODULE_0__.z,
                {
                  icon: 'send',
                  onClick: (0,
                  _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__.action)(
                    'clicked'
                  ),
                  children: 'Icon left',
                }
              ),
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(
                components_Button__WEBPACK_IMPORTED_MODULE_0__.z,
                {
                  iconEnd: 'arrowRight',
                  onClick: (0,
                  _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__.action)(
                    'clicked'
                  ),
                  children: 'Icon right',
                }
              ),
            ],
          }
        );
      };
      Primary.displayName = 'Primary';
      var Secondary = function () {
        return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(
          _storybook_StoryContainer__WEBPACK_IMPORTED_MODULE_3__.y,
          {
            children: [
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(
                components_Button__WEBPACK_IMPORTED_MODULE_0__.z,
                {
                  secondary: !0,
                  onClick: (0,
                  _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__.action)(
                    'clicked'
                  ),
                  children: 'Text only',
                }
              ),
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(
                components_Button__WEBPACK_IMPORTED_MODULE_0__.z,
                {
                  secondary: !0,
                  icon: 'arrowRight',
                  onClick: (0,
                  _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__.action)(
                    'clicked'
                  ),
                  children: 'Icon left',
                }
              ),
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(
                components_Button__WEBPACK_IMPORTED_MODULE_0__.z,
                {
                  secondary: !0,
                  iconEnd: 'arrowRight',
                  onClick: (0,
                  _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__.action)(
                    'clicked'
                  ),
                  children: 'Icon right',
                }
              ),
            ],
          }
        );
      };
      Secondary.displayName = 'Secondary';
      var IconOnly = function () {
        return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(
          _storybook_StoryContainer__WEBPACK_IMPORTED_MODULE_3__.y,
          {
            gutter: 20,
            children: [
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(
                components_Button__WEBPACK_IMPORTED_MODULE_0__.z,
                {
                  iconOnly: !0,
                  'aria-label': 'Send',
                  icon: 'send',
                  onClick: (0,
                  _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__.action)(
                    'clicked'
                  ),
                }
              ),
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(
                components_Button__WEBPACK_IMPORTED_MODULE_0__.z,
                {
                  iconOnly: !0,
                  'aria-label': 'Figma',
                  icon: 'figma',
                  onClick: (0,
                  _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__.action)(
                    'clicked'
                  ),
                }
              ),
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(
                components_Button__WEBPACK_IMPORTED_MODULE_0__.z,
                {
                  iconOnly: !0,
                  'aria-label': 'Close',
                  icon: 'close',
                  onClick: (0,
                  _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__.action)(
                    'clicked'
                  ),
                }
              ),
            ],
          }
        );
      };
      IconOnly.displayName = 'IconOnly';
      var Loader = function () {
        return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(
          _storybook_StoryContainer__WEBPACK_IMPORTED_MODULE_3__.y,
          {
            children: [
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(LoadableButton, {
                children: 'Click to load',
              }),
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(LoadableButton, {
                icon: 'send',
                children: 'Click to load',
              }),
            ],
          }
        );
      };
      Loader.displayName = 'Loader';
      var __namedExportsOrder = ['Primary', 'Secondary', 'IconOnly', 'Loader'];
      (Primary.__docgenInfo = { description: '', methods: [], displayName: 'Primary' }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES['src/components/Button/Button.stories.js'] = {
            name: 'Primary',
            docgenInfo: Primary.__docgenInfo,
            path: 'src/components/Button/Button.stories.js',
          }),
        (Secondary.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'Secondary',
        }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES['src/components/Button/Button.stories.js'] = {
            name: 'Secondary',
            docgenInfo: Secondary.__docgenInfo,
            path: 'src/components/Button/Button.stories.js',
          }),
        (IconOnly.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'IconOnly',
        }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES['src/components/Button/Button.stories.js'] = {
            name: 'IconOnly',
            docgenInfo: IconOnly.__docgenInfo,
            path: 'src/components/Button/Button.stories.js',
          }),
        (Loader.__docgenInfo = { description: '', methods: [], displayName: 'Loader' }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES['src/components/Button/Button.stories.js'] = {
            name: 'Loader',
            docgenInfo: Loader.__docgenInfo,
            path: 'src/components/Button/Button.stories.js',
          });
    },
    './src/components/Button/index.js': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      'use strict';
      __webpack_require__.d(__webpack_exports__, { z: () => Button });
      var Icon = __webpack_require__('./src/components/Icon/index.js'),
        Loader = __webpack_require__('./src/components/Loader/index.js'),
        Transition = __webpack_require__('./src/components/Transition/index.js'),
        next_link = __webpack_require__('./node_modules/next/link.js'),
        link_default = __webpack_require__.n(next_link),
        react = __webpack_require__('./node_modules/react/index.js'),
        style = __webpack_require__('./src/utils/style.js'),
        injectStylesIntoStyleTag = __webpack_require__(
          './node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js'
        ),
        injectStylesIntoStyleTag_default = __webpack_require__.n(
          injectStylesIntoStyleTag
        ),
        Button_module = __webpack_require__(
          './node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./node_modules/postcss-loader/dist/cjs.js!./src/components/Button/Button.module.css'
        ),
        options = { insert: 'head', singleton: !1 };
      injectStylesIntoStyleTag_default()(Button_module.Z, options);
      const Button_Button_module = Button_module.Z.locals || {};
      var jsx_runtime = __webpack_require__('./node_modules/react/jsx-runtime.js'),
        _excluded = ['href'],
        _excluded2 = [
          'className',
          'as',
          'secondary',
          'loading',
          'loadingText',
          'icon',
          'iconEnd',
          'iconHoverShift',
          'iconOnly',
          'children',
          'rel',
          'target',
          'href',
          'disabled',
        ];
      function _objectWithoutProperties(source, excluded) {
        if (null == source) return {};
        var key,
          i,
          target = (function _objectWithoutPropertiesLoose(source, excluded) {
            if (null == source) return {};
            var key,
              i,
              target = {},
              sourceKeys = Object.keys(source);
            for (i = 0; i < sourceKeys.length; i++)
              (key = sourceKeys[i]),
                excluded.indexOf(key) >= 0 || (target[key] = source[key]);
            return target;
          })(source, excluded);
        if (Object.getOwnPropertySymbols) {
          var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
          for (i = 0; i < sourceSymbolKeys.length; i++)
            (key = sourceSymbolKeys[i]),
              excluded.indexOf(key) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(source, key) &&
                  (target[key] = source[key]));
        }
        return target;
      }
      function isExternalLink(href) {
        return null == href ? void 0 : href.includes('://');
      }
      var Button = (0, react.forwardRef)(function (_ref, ref) {
          var href = _ref.href,
            rest = _objectWithoutProperties(_ref, _excluded);
          return isExternalLink(href) || !href
            ? (0, jsx_runtime.jsx)(ButtonContent, Object.assign({ href, ref }, rest))
            : (0, jsx_runtime.jsx)(link_default(), {
                passHref: !0,
                href,
                scroll: !1,
                children: (0, jsx_runtime.jsx)(
                  ButtonContent,
                  Object.assign({ href, ref }, rest)
                ),
              });
        }),
        ButtonContent = (0, react.forwardRef)(function (_ref2, ref) {
          var className = _ref2.className,
            as = _ref2.as,
            secondary = _ref2.secondary,
            loading = _ref2.loading,
            _ref2$loadingText = _ref2.loadingText,
            loadingText = void 0 === _ref2$loadingText ? 'loading' : _ref2$loadingText,
            icon = _ref2.icon,
            iconEnd = _ref2.iconEnd,
            iconHoverShift = _ref2.iconHoverShift,
            iconOnly = _ref2.iconOnly,
            children = _ref2.children,
            rel = _ref2.rel,
            target = _ref2.target,
            href = _ref2.href,
            disabled = _ref2.disabled,
            rest = _objectWithoutProperties(_ref2, _excluded2),
            isExternal = isExternalLink(href),
            Component = as || (href ? 'a' : 'button');
          return (0, jsx_runtime.jsxs)(
            Component,
            Object.assign(
              {
                className: (0, style.Sh)(Button_Button_module.button, className),
                'data-loading': loading,
                'data-icon-only': iconOnly,
                'data-secondary': secondary,
                'data-icon': icon,
                href,
                rel: rel || isExternal ? 'noopener noreferrer' : void 0,
                target: target || isExternal ? '_blank' : void 0,
                disabled,
                ref,
              },
              rest,
              {
                children: [
                  !!icon &&
                    (0, jsx_runtime.jsx)(Icon.J, {
                      className: Button_Button_module.icon,
                      'data-start': !iconOnly,
                      'data-shift': iconHoverShift,
                      icon,
                    }),
                  !!children &&
                    (0, jsx_runtime.jsx)('span', {
                      className: Button_Button_module.text,
                      children,
                    }),
                  !!iconEnd &&
                    (0, jsx_runtime.jsx)(Icon.J, {
                      className: Button_Button_module.icon,
                      'data-end': !iconOnly,
                      'data-shift': iconHoverShift,
                      icon: iconEnd,
                    }),
                  (0, jsx_runtime.jsx)(Transition.u, {
                    unmount: !0,
                    in: loading,
                    children: function (visible) {
                      return (0, jsx_runtime.jsx)(Loader.a, {
                        className: Button_Button_module.loader,
                        size: 32,
                        text: loadingText,
                        'data-visible': visible,
                      });
                    },
                  }),
                ],
              }
            )
          );
        });
      (Button.__docgenInfo = { description: '', methods: [], displayName: 'Button' }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES['src/components/Button/Button.js'] = {
            name: 'Button',
            docgenInfo: Button.__docgenInfo,
            path: 'src/components/Button/Button.js',
          });
    },
    './src/components/Carousel/Carousel.stories.js': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Images: () => Images,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => Carousel_stories,
        });
      var _path,
        react = __webpack_require__('./node_modules/react/index.js');
      function _extends() {
        return (
          (_extends = Object.assign
            ? Object.assign.bind()
            : function (target) {
                for (var i = 1; i < arguments.length; i++) {
                  var source = arguments[i];
                  for (var key in source)
                    Object.prototype.hasOwnProperty.call(source, key) &&
                      (target[key] = source[key]);
                }
                return target;
              }),
          _extends.apply(this, arguments)
        );
      }
      const arrow_left = props =>
        react.createElement(
          'svg',
          _extends(
            { fill: 'currentColor', width: 18, height: 42, viewBox: '0 0 18 42' },
            props
          ),
          _path ||
            (_path = react.createElement('path', {
              d: 'M18.03 1.375L16.47.125-.031 20.75l16.5 20.625 1.562-1.25L2.53 20.75z',
            }))
        );
      var arrow_right_path;
      function arrow_right_extends() {
        return (
          (arrow_right_extends = Object.assign
            ? Object.assign.bind()
            : function (target) {
                for (var i = 1; i < arguments.length; i++) {
                  var source = arguments[i];
                  for (var key in source)
                    Object.prototype.hasOwnProperty.call(source, key) &&
                      (target[key] = source[key]);
                }
                return target;
              }),
          arrow_right_extends.apply(this, arguments)
        );
      }
      const arrow_right = props =>
        react.createElement(
          'svg',
          arrow_right_extends(
            { fill: 'currentColor', width: 18, height: 42, viewBox: '0 0 18 42' },
            props
          ),
          arrow_right_path ||
            (arrow_right_path = react.createElement('path', {
              d: 'M-.03 1.375L1.53.125l16.5 20.625-16.5 20.625-1.562-1.25 15.5-19.375z',
            }))
        );
      var use_reduced_motion = __webpack_require__(
          './node_modules/framer-motion/dist/es/utils/use-reduced-motion.mjs'
        ),
        animate = __webpack_require__(
          './node_modules/framer-motion/dist/es/animation/animate.mjs'
        ),
        hooks = __webpack_require__('./src/hooks/index.js'),
        three_module = __webpack_require__('./node_modules/three/build/three.module.js'),
        utils_image = __webpack_require__('./src/utils/image.js'),
        style = __webpack_require__('./src/utils/style.js'),
        three = __webpack_require__('./src/utils/three.js'),
        injectStylesIntoStyleTag = __webpack_require__(
          './node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js'
        ),
        injectStylesIntoStyleTag_default = __webpack_require__.n(
          injectStylesIntoStyleTag
        ),
        Carousel_module = __webpack_require__(
          './node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./node_modules/postcss-loader/dist/cjs.js!./src/components/Carousel/Carousel.module.css'
        ),
        options = { insert: 'head', singleton: !1 };
      injectStylesIntoStyleTag_default()(Carousel_module.Z, options);
      const Carousel_Carousel_module = Carousel_module.Z.locals || {};
      var jsx_runtime = __webpack_require__('./node_modules/react/jsx-runtime.js'),
        _excluded = ['width', 'height', 'images', 'placeholder'],
        _excluded2 = ['direction', 'index'];
      function _construct(Parent, args, Class) {
        return (
          (_construct = _isNativeReflectConstruct()
            ? Reflect.construct.bind()
            : function _construct(Parent, args, Class) {
                var a = [null];
                a.push.apply(a, args);
                var instance = new (Function.bind.apply(Parent, a))();
                return Class && _setPrototypeOf(instance, Class.prototype), instance;
              }),
          _construct.apply(null, arguments)
        );
      }
      function _isNativeReflectConstruct() {
        if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ('function' == typeof Proxy) return !0;
        try {
          return (
            Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {})
            ),
            !0
          );
        } catch (e) {
          return !1;
        }
      }
      function _setPrototypeOf(o, p) {
        return (
          (_setPrototypeOf = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function _setPrototypeOf(o, p) {
                return (o.__proto__ = p), o;
              }),
          _setPrototypeOf(o, p)
        );
      }
      function _slicedToArray(arr, i) {
        return (
          (function _arrayWithHoles(arr) {
            if (Array.isArray(arr)) return arr;
          })(arr) ||
          (function _iterableToArrayLimit(arr, i) {
            var _i =
              null == arr
                ? null
                : ('undefined' != typeof Symbol && arr[Symbol.iterator]) ||
                  arr['@@iterator'];
            if (null == _i) return;
            var _s,
              _e,
              _arr = [],
              _n = !0,
              _d = !1;
            try {
              for (
                _i = _i.call(arr);
                !(_n = (_s = _i.next()).done) &&
                (_arr.push(_s.value), !i || _arr.length !== i);
                _n = !0
              );
            } catch (err) {
              (_d = !0), (_e = err);
            } finally {
              try {
                _n || null == _i.return || _i.return();
              } finally {
                if (_d) throw _e;
              }
            }
            return _arr;
          })(arr, i) ||
          (function _unsupportedIterableToArray(o, minLen) {
            if (!o) return;
            if ('string' == typeof o) return _arrayLikeToArray(o, minLen);
            var n = Object.prototype.toString.call(o).slice(8, -1);
            'Object' === n && o.constructor && (n = o.constructor.name);
            if ('Map' === n || 'Set' === n) return Array.from(o);
            if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
              return _arrayLikeToArray(o, minLen);
          })(arr, i) ||
          (function _nonIterableRest() {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      function _arrayLikeToArray(arr, len) {
        (null == len || len > arr.length) && (len = arr.length);
        for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
        return arr2;
      }
      function _objectWithoutProperties(source, excluded) {
        if (null == source) return {};
        var key,
          i,
          target = (function _objectWithoutPropertiesLoose(source, excluded) {
            if (null == source) return {};
            var key,
              i,
              target = {},
              sourceKeys = Object.keys(source);
            for (i = 0; i < sourceKeys.length; i++)
              (key = sourceKeys[i]),
                excluded.indexOf(key) >= 0 || (target[key] = source[key]);
            return target;
          })(source, excluded);
        if (Object.getOwnPropertySymbols) {
          var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
          for (i = 0; i < sourceSymbolKeys.length; i++)
            (key = sourceSymbolKeys[i]),
              excluded.indexOf(key) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(source, key) &&
                  (target[key] = source[key]));
        }
        return target;
      }
      function determineIndex(imageIndex, index, images, direction) {
        if (null !== index) return index;
        var length = images.length;
        return direction > 0
          ? (imageIndex + 1) % length
          : (imageIndex - 1 + length) % length;
      }
      var Carousel = function (_ref) {
        var width = _ref.width,
          height = _ref.height,
          images = _ref.images,
          placeholder = _ref.placeholder,
          rest = _objectWithoutProperties(_ref, _excluded),
          _useState2 = _slicedToArray((0, react.useState)(!1), 2),
          dragging = _useState2[0],
          setDragging = _useState2[1],
          _useState4 = _slicedToArray((0, react.useState)(0), 2),
          imageIndex = _useState4[0],
          setImageIndex = _useState4[1],
          _useState6 = _slicedToArray((0, react.useState)(!1), 2),
          loaded = _useState6[0],
          setLoaded = _useState6[1],
          _useState8 = _slicedToArray((0, react.useState)(!0), 2),
          showPlaceholder = _useState8[0],
          setShowPlaceholder = _useState8[1],
          _useState10 = _slicedToArray((0, react.useState)(), 2),
          textures = _useState10[0],
          setTextures = _useState10[1],
          _useState12 = _slicedToArray((0, react.useState)(), 2),
          canvasRect = _useState12[0],
          setCanvasRect = _useState12[1],
          canvas = (0, react.useRef)(),
          imagePlane = (0, react.useRef)(),
          geometry = (0, react.useRef)(),
          material = (0, react.useRef)(),
          scene = (0, react.useRef)(),
          camera = (0, react.useRef)(),
          renderer = (0, react.useRef)(),
          animating = (0, react.useRef)(!1),
          swipeDirection = (0, react.useRef)(),
          lastSwipePosition = (0, react.useRef)(),
          scheduledAnimationFrame = (0, react.useRef)(),
          reduceMotion = (0, use_reduced_motion.J)(),
          inViewport = (0, hooks.NM)(canvas, !0),
          placeholderRef = (0, react.useRef)(),
          initSwipeX = (0, react.useRef)(),
          currentImageAlt = `Slide ${imageIndex + 1} of ${images.length}. ${
            images[imageIndex].alt
          }`;
        (0, react.useEffect)(
          function () {
            return (
              dragging && (document.body.style.cursor = 'grabbing'),
              function () {
                document.body.style.cursor = '';
              }
            );
          },
          [dragging]
        ),
          (0, react.useEffect)(
            function () {
              var cameraOptions = [
                width / -2,
                width / 2,
                height / 2,
                height / -2,
                1,
                1e3,
              ];
              return (
                (renderer.current = new three_module.CP7({
                  canvas: canvas.current,
                  antialias: !1,
                  alpha: !0,
                  powerPreference: 'high-performance',
                  failIfMajorPerformanceCaveat: !0,
                })),
                (camera.current = _construct(three_module.iKG, cameraOptions)),
                (scene.current = new three_module.xsS()),
                renderer.current.setPixelRatio(2),
                renderer.current.setClearColor(1118481, 1),
                renderer.current.setSize(width, height),
                (renderer.current.domElement.style.width = '100%'),
                (renderer.current.domElement.style.height = 'auto'),
                (scene.current.background = new three_module.Ilk(1118481)),
                (camera.current.position.z = 1),
                function () {
                  (animating.current = !1),
                    (0, three.in)(scene.current),
                    (0, three.e8)(renderer.current);
                }
              );
            },
            [height, width]
          ),
          (0, react.useEffect)(
            function () {
              var mounted = !0;
              return (
                inViewport &&
                  !loaded &&
                  (async function () {
                    var anisotropy = renderer.current.capabilities.getMaxAnisotropy(),
                      texturePromises = images.map(async function (image) {
                        var imageSrc = image.srcSet
                            ? await (0, utils_image.Ro)(image)
                            : image.src.src,
                          imageTexture = await three.Et.loadAsync(imageSrc);
                        return (
                          await renderer.current.initTexture(imageTexture),
                          (imageTexture.encoding = three_module.knz),
                          (imageTexture.minFilter = three_module.wem),
                          (imageTexture.magFilter = three_module.wem),
                          (imageTexture.anisotropy = anisotropy),
                          (imageTexture.generateMipmaps = !1),
                          imageTexture
                        );
                      }),
                      textures = await Promise.all(texturePromises);
                    mounted &&
                      ((material.current = new three_module.jyz({
                        uniforms: {
                          dispFactor: { type: 'f', value: 0 },
                          direction: { type: 'f', value: 1 },
                          currentImage: { type: 't', value: textures[0] },
                          nextImage: { type: 't', value: textures[1] },
                          reduceMotion: { type: 'b', value: reduceMotion },
                        },
                        vertexShader:
                          'varying vec2 vUv;\n\nvoid main() {\n  vUv = uv;\n  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n}\n',
                        fragmentShader:
                          'varying vec2 vUv;\nuniform sampler2D currentImage;\nuniform sampler2D nextImage;\nuniform float dispFactor;\nuniform float direction;\nuniform bool reduceMotion;\n\nvoid main() {\n  if (reduceMotion) {\n    // Simple crossfade\n    vec4 _currentImage = texture2D(currentImage, vUv);\n    vec4 _nextImage = texture2D(nextImage, vUv);\n    vec4 finalTexture = mix(_currentImage, _nextImage, dispFactor);\n    gl_FragColor = finalTexture;\n  } else {\n    // Liquid distortion effect\n    vec2 uv = vUv;\n    vec4 _currentImage;\n    vec4 _nextImage;\n    float intensity = 0.6;\n\n    vec4 orig1 = texture2D(currentImage, uv);\n    vec4 orig2 = texture2D(nextImage, uv);\n\n    vec2 distortedPosition = vec2(\n      uv.x + direction * (dispFactor * (orig2.r * intensity)),\n      uv.y + direction * (dispFactor * (orig2 * intensity))\n    );\n\n    vec2 distortedPosition2 = vec2(\n      uv.x - direction * ((1.0 - dispFactor) * (orig1.r * intensity)),\n      uv.y - direction * ((1.0 - dispFactor) * (orig1 * intensity))\n    );\n\n    _currentImage = texture2D(currentImage, distortedPosition);\n    _nextImage = texture2D(nextImage, distortedPosition2);\n\n    vec4 finalTexture = mix(_currentImage, _nextImage, dispFactor);\n    gl_FragColor = finalTexture;\n  }\n}\n',
                        transparent: !1,
                        opacity: 1,
                      })),
                      (geometry.current = new three_module.BKK(width, height, 1)),
                      (imagePlane.current = new three_module.Kj0(
                        geometry.current,
                        material.current
                      )),
                      imagePlane.current.position.set(0, 0, 0),
                      scene.current.add(imagePlane.current),
                      setLoaded(!0),
                      setTextures(textures),
                      requestAnimationFrame(function () {
                        renderer.current.render(scene.current, camera.current);
                      }));
                  })(),
                function () {
                  mounted = !1;
                }
              );
            },
            [height, images, inViewport, loaded, reduceMotion, width]
          );
        var goToIndex = (0, react.useCallback)(
            function (_ref2) {
              var index = _ref2.index,
                _ref2$direction = _ref2.direction,
                direction = void 0 === _ref2$direction ? 1 : _ref2$direction;
              if (textures) {
                setImageIndex(index);
                var uniforms = material.current.uniforms;
                (uniforms.nextImage.value = textures[index]),
                  (uniforms.direction.value = direction);
                1 !== uniforms.dispFactor.value &&
                  ((animating.current = !0),
                  (0, animate.j)(uniforms.dispFactor.value, 1, {
                    type: 'spring',
                    stiffness: 100,
                    damping: 20,
                    restSpeed: 0.001,
                    restDelta: 0.001,
                    onUpdate: function (value) {
                      uniforms.dispFactor.value = value;
                    },
                    onComplete: function () {
                      (uniforms.currentImage.value = textures[index]),
                        (uniforms.dispFactor.value = 0),
                        (animating.current = !1);
                    },
                  }));
              }
            },
            [textures]
          ),
          navigate = (0, react.useCallback)(
            function (_ref3) {
              var direction = _ref3.direction,
                _ref3$index = _ref3.index,
                index = void 0 === _ref3$index ? null : _ref3$index,
                rest = _objectWithoutProperties(_ref3, _excluded2);
              if (loaded) {
                if (animating.current)
                  return (
                    cancelAnimationFrame(scheduledAnimationFrame.current),
                    void (scheduledAnimationFrame.current = requestAnimationFrame(
                      function () {
                        return navigate(Object.assign({ direction, index }, rest));
                      }
                    ))
                  );
                var finalIndex = determineIndex(imageIndex, index, textures, direction);
                goToIndex(Object.assign({ index: finalIndex, direction }, rest));
              }
            },
            [goToIndex, imageIndex, loaded, textures]
          ),
          onNavClick = (0, react.useCallback)(
            function (index) {
              index !== imageIndex &&
                navigate({ direction: index > imageIndex ? 1 : -1, index });
            },
            [imageIndex, navigate]
          );
        (0, react.useEffect)(function () {
          var handleResize = function () {
            var rect = canvas.current.getBoundingClientRect();
            setCanvasRect(rect);
          };
          return (
            window.addEventListener('resize', handleResize),
            handleResize(),
            function () {
              window.removeEventListener('resize', handleResize);
            }
          );
        }, []),
          (0, react.useEffect)(function () {
            var animation,
              animate = function () {
                (animation = requestAnimationFrame(animate)),
                  animating.current &&
                    renderer.current.render(scene.current, camera.current);
              };
            return (
              (animation = requestAnimationFrame(animate)),
              function () {
                cancelAnimationFrame(animation);
              }
            );
          }, []),
          (0, react.useEffect)(
            function () {
              if (placeholder) {
                var purgePlaceholder = function () {
                    setShowPlaceholder(!1);
                  },
                  placeholderElement = placeholderRef.current;
                return (
                  placeholderElement.addEventListener('transitionend', purgePlaceholder),
                  function () {
                    placeholderElement &&
                      placeholderElement.removeEventListener(
                        'transitionend',
                        purgePlaceholder
                      );
                  }
                );
              }
            },
            [placeholder]
          );
        var onSwipeMove = (0, react.useCallback)(
            function (x) {
              if (!animating.current && material.current && textures) {
                lastSwipePosition.current = x;
                var absoluteX = Math.abs(x),
                  containerWidth = canvasRect.width;
                swipeDirection.current = x > 0 ? -1 : 1;
                var swipePercentage =
                    1 - ((absoluteX - containerWidth) / containerWidth) * -1,
                  nextIndex = determineIndex(
                    imageIndex,
                    null,
                    images,
                    swipeDirection.current
                  ),
                  uniforms = material.current.uniforms,
                  displacementClamp = Math.min(Math.max(swipePercentage, 0), 1);
                (uniforms.currentImage.value = textures[imageIndex]),
                  (uniforms.nextImage.value = textures[nextIndex]),
                  (uniforms.direction.value = swipeDirection.current),
                  (uniforms.dispFactor.value = displacementClamp),
                  requestAnimationFrame(function () {
                    renderer.current.render(scene.current, camera.current);
                  });
              }
            },
            [canvasRect, imageIndex, images, textures]
          ),
          onSwipeEnd = (0, react.useCallback)(
            function () {
              if (material.current) {
                var uniforms = material.current.uniforms,
                  duration = 1e3 * (1 - uniforms.dispFactor.value),
                  position = Math.abs(lastSwipePosition.current),
                  minSwipeDistance = 0.2 * canvasRect.width;
                (lastSwipePosition.current = 0),
                  animating.current ||
                    (0 !== position &&
                      position &&
                      (position > minSwipeDistance
                        ? navigate({ duration, direction: swipeDirection.current })
                        : ((uniforms.currentImage.value = uniforms.nextImage.value),
                          (uniforms.nextImage.value = uniforms.currentImage.value),
                          (uniforms.dispFactor.value = 1 - uniforms.dispFactor.value),
                          navigate({
                            direction: -1 * swipeDirection.current,
                            index: imageIndex,
                          }))));
              }
            },
            [canvasRect, imageIndex, navigate]
          ),
          handlePointerMove = (0, react.useCallback)(
            function (event) {
              onSwipeMove(event.clientX - initSwipeX.current);
            },
            [onSwipeMove]
          ),
          handlePointerUp = (0, react.useCallback)(
            function () {
              setDragging(!1),
                onSwipeEnd(),
                document.removeEventListener('pointerup', handlePointerUp),
                document.removeEventListener('pointermove', handlePointerMove);
            },
            [handlePointerMove, onSwipeEnd]
          ),
          handlePointerDown = (0, react.useCallback)(
            function (event) {
              (initSwipeX.current = event.clientX),
                setDragging(!0),
                document.addEventListener('pointermove', handlePointerMove),
                document.addEventListener('pointerup', handlePointerUp);
            },
            [handlePointerMove, handlePointerUp]
          );
        return (0, jsx_runtime.jsxs)(
          'div',
          Object.assign(
            {
              className: Carousel_Carousel_module.carousel,
              onKeyDown: function (event) {
                switch (event.key) {
                  case 'ArrowRight':
                    navigate({ direction: 1 });
                    break;
                  case 'ArrowLeft':
                    navigate({ direction: -1 });
                }
              },
            },
            rest,
            {
              children: [
                (0, jsx_runtime.jsxs)('div', {
                  className: Carousel_Carousel_module.content,
                  children: [
                    (0, jsx_runtime.jsxs)('div', {
                      className: Carousel_Carousel_module.imageWrapper,
                      'data-dragging': dragging,
                      onPointerDown: handlePointerDown,
                      style: (0, style.Fh)({ aspectRatio: `${width} / ${height}` }),
                      children: [
                        (0, jsx_runtime.jsx)('div', {
                          'aria-atomic': !0,
                          className: Carousel_Carousel_module.canvasWrapper,
                          'aria-live': 'polite',
                          'aria-label': currentImageAlt,
                          role: 'img',
                          children: (0, jsx_runtime.jsx)('canvas', {
                            'aria-hidden': !0,
                            className: Carousel_Carousel_module.canvas,
                            ref: canvas,
                          }),
                        }),
                        showPlaceholder &&
                          placeholder &&
                          (0, jsx_runtime.jsx)('img', {
                            'aria-hidden': !0,
                            className: Carousel_Carousel_module.placeholder,
                            'data-loaded': loaded && !!textures,
                            src: placeholder.src,
                            ref: placeholderRef,
                            alt: '',
                            role: 'presentation',
                          }),
                      ],
                    }),
                    (0, jsx_runtime.jsx)('button', {
                      className: Carousel_Carousel_module.button,
                      'data-prev': !0,
                      'aria-label': 'Previous slide',
                      onClick: function () {
                        return navigate({ direction: -1 });
                      },
                      children: (0, jsx_runtime.jsx)(arrow_left, {}),
                    }),
                    (0, jsx_runtime.jsx)('button', {
                      className: Carousel_Carousel_module.button,
                      'data-next': !0,
                      'aria-label': 'Next slide',
                      onClick: function () {
                        return navigate({ direction: 1 });
                      },
                      children: (0, jsx_runtime.jsx)(arrow_right, {}),
                    }),
                  ],
                }),
                (0, jsx_runtime.jsx)('div', {
                  className: Carousel_Carousel_module.nav,
                  children: images.map(function (image, index) {
                    return (0, jsx_runtime.jsx)(
                      'button',
                      {
                        className: Carousel_Carousel_module.navButton,
                        onClick: function () {
                          return onNavClick(index);
                        },
                        'aria-label': `Jump to slide ${index + 1}`,
                        'aria-pressed': index === imageIndex,
                      },
                      image.alt
                    );
                  }),
                }),
              ],
            }
          )
        );
      };
      (Carousel.displayName = 'Carousel'),
        (Carousel.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'Carousel',
        }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES['src/components/Carousel/Carousel.js'] = {
            name: 'Carousel',
            docgenInfo: Carousel.__docgenInfo,
            path: 'src/components/Carousel/Carousel.js',
          });
      var StoryContainer = __webpack_require__('./.storybook/StoryContainer.js');
      const Carousel_stories = { title: 'Carousel' };
      var Images = function () {
        return (0, jsx_runtime.jsx)(StoryContainer.y, {
          children: (0, jsx_runtime.jsx)(Carousel, {
            style: { maxWidth: 800, width: '100%' },
            placeholder: {
              src: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAICAgICAQICAgIDAgIDAwYEAwMDAwcFBQQGCAcJCAgHCAgJCg0LCQoMCggICw8LDA0ODg8OCQsQERAOEQ0ODg7/2wBDAQIDAwMDAwcEBAcOCQgJDg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg7/wgARCAASACADAREAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAABAUHBgn/xAAZAQEAAwEBAAAAAAAAAAAAAAAFAwQGAgj/2gAMAwEAAhADEAAAAOanpHEuRHdAjSk8GcqnLA1RdO5nscBYolLViNGLY7CLKMf/xAAjEAABBAEDBAMAAAAAAAAAAAABAAIDBAUSFFETJTIzNILB/9oACAEBAAE/AIYbMngCVRZJXnDpAsndbNhXNPCezuTtPKw23ZS1PaFfmjfaIjCyU5Zj3KkepkTq5VX4CPvKynoKxwG6+w/V/8QAGxEAAwADAQEAAAAAAAAAAAAAAAECAwQRMhL/2gAIAQIBAT8AzpRBirtDxfSJxSmbGwrniNaX0u5xwVtLpJgNryyvR//EABwRAAMAAwEBAQAAAAAAAAAAAAABAgMEESEyE//aAAgBAwEBPwDXzu74U0kXsJTwzW6fhp6lRXWZ/nwvFdMxaN0Sl+Y/sSRrpcP/2Q==',
            },
            images: [
              {
                src: {
                  src: 'https://source.unsplash.com/ANJHXftvvJ8/1280x720',
                  width: 1280,
                },
                alt: 'A neon sign with kanji',
              },
              {
                src: {
                  src: 'https://source.unsplash.com/qEWEz-U5p8Q/1280x720',
                  width: 1280,
                },
                alt: 'Tokyo at night',
              },
              {
                src: {
                  src: 'https://source.unsplash.com/lx9RWIg1Rdg/1280x720',
                  width: 1280,
                },
                alt: 'A rad cyberpunk dude',
              },
            ],
            width: 1920,
            height: 1080,
          }),
        });
      };
      Images.displayName = 'Images';
      var __namedExportsOrder = ['Images'];
      (Images.__docgenInfo = { description: '', methods: [], displayName: 'Images' }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES['src/components/Carousel/Carousel.stories.js'] = {
            name: 'Images',
            docgenInfo: Images.__docgenInfo,
            path: 'src/components/Carousel/Carousel.stories.js',
          });
    },
    './src/components/DecoderText/DecoderText.stories.js': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Text: () => Text,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => DecoderText_stories,
        });
      var VisuallyHidden = __webpack_require__(
          './src/components/VisuallyHidden/index.js'
        ),
        use_reduced_motion = __webpack_require__(
          './node_modules/framer-motion/dist/es/utils/use-reduced-motion.mjs'
        ),
        use_spring = __webpack_require__(
          './node_modules/framer-motion/dist/es/value/use-spring.mjs'
        ),
        react = __webpack_require__('./node_modules/react/index.js');
      var style = __webpack_require__('./src/utils/style.js'),
        injectStylesIntoStyleTag = __webpack_require__(
          './node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js'
        ),
        injectStylesIntoStyleTag_default = __webpack_require__.n(
          injectStylesIntoStyleTag
        ),
        DecoderText_module = __webpack_require__(
          './node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./node_modules/postcss-loader/dist/cjs.js!./src/components/DecoderText/DecoderText.module.css'
        ),
        options = { insert: 'head', singleton: !1 };
      injectStylesIntoStyleTag_default()(DecoderText_module.Z, options);
      const DecoderText_DecoderText_module = DecoderText_module.Z.locals || {};
      var jsx_runtime = __webpack_require__('./node_modules/react/jsx-runtime.js'),
        _excluded = ['text', 'start', 'delay', 'className'];
      function _objectWithoutProperties(source, excluded) {
        if (null == source) return {};
        var key,
          i,
          target = (function _objectWithoutPropertiesLoose(source, excluded) {
            if (null == source) return {};
            var key,
              i,
              target = {},
              sourceKeys = Object.keys(source);
            for (i = 0; i < sourceKeys.length; i++)
              (key = sourceKeys[i]),
                excluded.indexOf(key) >= 0 || (target[key] = source[key]);
            return target;
          })(source, excluded);
        if (Object.getOwnPropertySymbols) {
          var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
          for (i = 0; i < sourceSymbolKeys.length; i++)
            (key = sourceSymbolKeys[i]),
              excluded.indexOf(key) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(source, key) &&
                  (target[key] = source[key]));
        }
        return target;
      }
      var glyphs = [
          'ア',
          'イ',
          'ウ',
          'エ',
          'オ',
          'カ',
          'キ',
          'ク',
          'ケ',
          'コ',
          'サ',
          'シ',
          'ス',
          'セ',
          'ソ',
          'タ',
          'チ',
          'ツ',
          'テ',
          'ト',
          'ナ',
          'ニ',
          'ヌ',
          'ネ',
          'ノ',
          'ハ',
          'ヒ',
          'フ',
          'ヘ',
          'ホ',
          'マ',
          'ミ',
          'ム',
          'メ',
          'モ',
          'ヤ',
          'ユ',
          'ヨ',
          'ー',
          'ラ',
          'リ',
          'ル',
          'レ',
          'ロ',
          'ワ',
          'ヰ',
          'ヱ',
          'ヲ',
          'ン',
          'ガ',
          'ギ',
          'グ',
          'ゲ',
          'ゴ',
          'ザ',
          'ジ',
          'ズ',
          'ゼ',
          'ゾ',
          'ダ',
          'ヂ',
          'ヅ',
          'デ',
          'ド',
          'バ',
          'ビ',
          'ブ',
          'ベ',
          'ボ',
          'パ',
          'ピ',
          'プ',
          'ペ',
          'ポ',
        ],
        CharType_Glyph = 'glyph',
        CharType_Value = 'value';
      var DecoderText = (0, react.memo)(function (_ref) {
          var text = _ref.text,
            _ref$start = _ref.start,
            start = void 0 === _ref$start || _ref$start,
            _ref$delay = _ref.delay,
            startDelay = void 0 === _ref$delay ? 0 : _ref$delay,
            className = _ref.className,
            rest = _objectWithoutProperties(_ref, _excluded),
            output = (0, react.useRef)([{ type: CharType_Glyph, value: '' }]),
            container = (0, react.useRef)(),
            reduceMotion = (0, use_reduced_motion.J)(),
            decoderSpring = (0, use_spring.q)(0, { stiffness: 8, damping: 5 });
          return (
            (0, react.useEffect)(
              function () {
                var containerInstance = container.current,
                  content = text.split(''),
                  renderOutput = function () {
                    var characterMap = output.current.map(function (item) {
                      return `<span class="${
                        DecoderText_DecoderText_module[item.type]
                      }">${item.value}</span>`;
                    });
                    containerInstance.innerHTML = characterMap.join('');
                  },
                  unsubscribeSpring = decoderSpring.onChange(function (value) {
                    (output.current = (function shuffle(content, output, position) {
                      return content.map(function (value, index) {
                        if (index < position) return { type: CharType_Value, value };
                        if (position % 1 < 0.5) {
                          var rand = Math.floor(Math.random() * glyphs.length);
                          return { type: CharType_Glyph, value: glyphs[rand] };
                        }
                        return { type: CharType_Glyph, value: output[index].value };
                      });
                    })(content, output.current, value)),
                      renderOutput();
                  });
                return (
                  start &&
                    !reduceMotion &&
                    (async function () {
                      await (async function delay(ms) {
                        return new Promise(function (resolve) {
                          return setTimeout(resolve, ms);
                        });
                      })(startDelay),
                        decoderSpring.set(content.length);
                    })(),
                  reduceMotion &&
                    ((output.current = content.map(function (value, index) {
                      return { type: CharType_Value, value: content[index] };
                    })),
                    renderOutput()),
                  function () {
                    null == unsubscribeSpring || unsubscribeSpring();
                  }
                );
              },
              [decoderSpring, reduceMotion, start, startDelay, text]
            ),
            (0, jsx_runtime.jsxs)(
              'span',
              Object.assign(
                {
                  className: (0, style.Sh)(
                    DecoderText_DecoderText_module.text,
                    className
                  ),
                },
                rest,
                {
                  children: [
                    (0, jsx_runtime.jsx)(VisuallyHidden.T, {
                      className: DecoderText_DecoderText_module.label,
                      children: text,
                    }),
                    (0, jsx_runtime.jsx)('span', {
                      'aria-hidden': !0,
                      className: DecoderText_DecoderText_module.content,
                      ref: container,
                    }),
                  ],
                }
              )
            )
          );
        }),
        Heading = __webpack_require__('./src/components/Heading/index.js'),
        StoryContainer = __webpack_require__('./.storybook/StoryContainer.js');
      const DecoderText_stories = {
        title: 'DecoderText',
        args: { text: 'Slick cyberpunk text' },
      };
      var Text = function (_ref) {
        var text = _ref.text;
        return (0, jsx_runtime.jsx)(StoryContainer.y, {
          children: (0, jsx_runtime.jsx)(Heading.X, {
            level: 3,
            children: (0, jsx_runtime.jsx)(DecoderText, { delay: 0, text }),
          }),
        });
      };
      Text.displayName = 'Text';
      var __namedExportsOrder = ['Text'];
      (Text.__docgenInfo = { description: '', methods: [], displayName: 'Text' }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES['src/components/DecoderText/DecoderText.stories.js'] =
            {
              name: 'Text',
              docgenInfo: Text.__docgenInfo,
              path: 'src/components/DecoderText/DecoderText.stories.js',
            });
    },
    './src/components/Heading/Heading.stories.js': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Align: () => Align,
          Level: () => Level,
          Weight: () => Weight,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => __WEBPACK_DEFAULT_EXPORT__,
        });
      var components_Heading__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          './src/components/Heading/index.js'
        ),
        _storybook_StoryContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          './.storybook/StoryContainer.js'
        ),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          './node_modules/react/jsx-runtime.js'
        );
      const __WEBPACK_DEFAULT_EXPORT__ = { title: 'Heading' };
      var Level = function () {
        return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(
          _storybook_StoryContainer__WEBPACK_IMPORTED_MODULE_1__.y,
          {
            vertical: !0,
            children: [
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                components_Heading__WEBPACK_IMPORTED_MODULE_0__.X,
                { level: 0, children: 'Heading 0' }
              ),
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                components_Heading__WEBPACK_IMPORTED_MODULE_0__.X,
                { level: 1, children: 'Heading 1' }
              ),
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                components_Heading__WEBPACK_IMPORTED_MODULE_0__.X,
                { level: 2, children: 'Heading 2' }
              ),
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                components_Heading__WEBPACK_IMPORTED_MODULE_0__.X,
                { level: 3, children: 'Heading 3' }
              ),
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                components_Heading__WEBPACK_IMPORTED_MODULE_0__.X,
                { level: 4, children: 'Heading 4' }
              ),
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                components_Heading__WEBPACK_IMPORTED_MODULE_0__.X,
                { level: 5, children: 'Heading 5' }
              ),
            ],
          }
        );
      };
      Level.displayName = 'Level';
      var Weight = function () {
        return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(
          _storybook_StoryContainer__WEBPACK_IMPORTED_MODULE_1__.y,
          {
            vertical: !0,
            children: [
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                components_Heading__WEBPACK_IMPORTED_MODULE_0__.X,
                { level: 3, weight: 'regular', children: 'Regular' }
              ),
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                components_Heading__WEBPACK_IMPORTED_MODULE_0__.X,
                { level: 3, weight: 'medium', children: 'Medium' }
              ),
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                components_Heading__WEBPACK_IMPORTED_MODULE_0__.X,
                { level: 3, weight: 'bold', children: 'Bold' }
              ),
            ],
          }
        );
      };
      Weight.displayName = 'Weight';
      var Align = function () {
        return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(
          _storybook_StoryContainer__WEBPACK_IMPORTED_MODULE_1__.y,
          {
            vertical: !0,
            stretch: !0,
            children: [
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                components_Heading__WEBPACK_IMPORTED_MODULE_0__.X,
                { level: 3, align: 'start', children: 'Start' }
              ),
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                components_Heading__WEBPACK_IMPORTED_MODULE_0__.X,
                { level: 3, align: 'center', children: 'Center' }
              ),
            ],
          }
        );
      };
      Align.displayName = 'Align';
      var __namedExportsOrder = ['Level', 'Weight', 'Align'];
      (Level.__docgenInfo = { description: '', methods: [], displayName: 'Level' }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES['src/components/Heading/Heading.stories.js'] = {
            name: 'Level',
            docgenInfo: Level.__docgenInfo,
            path: 'src/components/Heading/Heading.stories.js',
          }),
        (Weight.__docgenInfo = { description: '', methods: [], displayName: 'Weight' }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES['src/components/Heading/Heading.stories.js'] = {
            name: 'Weight',
            docgenInfo: Weight.__docgenInfo,
            path: 'src/components/Heading/Heading.stories.js',
          }),
        (Align.__docgenInfo = { description: '', methods: [], displayName: 'Align' }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES['src/components/Heading/Heading.stories.js'] = {
            name: 'Align',
            docgenInfo: Align.__docgenInfo,
            path: 'src/components/Heading/Heading.stories.js',
          });
    },
    './src/components/Heading/index.js': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      'use strict';
      __webpack_require__.d(__webpack_exports__, { X: () => Heading });
      var react = __webpack_require__('./node_modules/react/index.js'),
        style = __webpack_require__('./src/utils/style.js'),
        injectStylesIntoStyleTag = __webpack_require__(
          './node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js'
        ),
        injectStylesIntoStyleTag_default = __webpack_require__.n(
          injectStylesIntoStyleTag
        ),
        Heading_module = __webpack_require__(
          './node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./node_modules/postcss-loader/dist/cjs.js!./src/components/Heading/Heading.module.css'
        ),
        options = { insert: 'head', singleton: !1 };
      injectStylesIntoStyleTag_default()(Heading_module.Z, options);
      const Heading_Heading_module = Heading_module.Z.locals || {};
      var jsx_runtime = __webpack_require__('./node_modules/react/jsx-runtime.js'),
        _excluded = ['children', 'level', 'as', 'align', 'weight', 'className'];
      function _objectWithoutProperties(source, excluded) {
        if (null == source) return {};
        var key,
          i,
          target = (function _objectWithoutPropertiesLoose(source, excluded) {
            if (null == source) return {};
            var key,
              i,
              target = {},
              sourceKeys = Object.keys(source);
            for (i = 0; i < sourceKeys.length; i++)
              (key = sourceKeys[i]),
                excluded.indexOf(key) >= 0 || (target[key] = source[key]);
            return target;
          })(source, excluded);
        if (Object.getOwnPropertySymbols) {
          var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
          for (i = 0; i < sourceSymbolKeys.length; i++)
            (key = sourceSymbolKeys[i]),
              excluded.indexOf(key) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(source, key) &&
                  (target[key] = source[key]));
        }
        return target;
      }
      var Heading = function (_ref) {
        var children = _ref.children,
          _ref$level = _ref.level,
          level = void 0 === _ref$level ? 1 : _ref$level,
          as = _ref.as,
          _ref$align = _ref.align,
          align = void 0 === _ref$align ? 'auto' : _ref$align,
          _ref$weight = _ref.weight,
          weight = void 0 === _ref$weight ? 'medium' : _ref$weight,
          className = _ref.className,
          rest = _objectWithoutProperties(_ref, _excluded),
          clampedLevel = Math.min(Math.max(level, 0), 5),
          Component = as || `h${Math.max(clampedLevel, 1)}`;
        return (0, jsx_runtime.jsx)(react.Fragment, {
          children: (0, jsx_runtime.jsx)(
            Component,
            Object.assign(
              {
                className: (0, style.Sh)(Heading_Heading_module.heading, className),
                'data-align': align,
                'data-weight': weight,
                'data-level': clampedLevel,
              },
              rest,
              { children }
            )
          ),
        });
      };
      (Heading.displayName = 'Heading'),
        (Heading.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'Heading',
          props: {
            level: { defaultValue: { value: '1', computed: !1 }, required: !1 },
            align: { defaultValue: { value: "'auto'", computed: !1 }, required: !1 },
            weight: { defaultValue: { value: "'medium'", computed: !1 }, required: !1 },
          },
        }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES['src/components/Heading/Heading.js'] = {
            name: 'Heading',
            docgenInfo: Heading.__docgenInfo,
            path: 'src/components/Heading/Heading.js',
          });
    },
    './src/components/Icon/Icon.stories.js': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Icons: () => Icons,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => __WEBPACK_DEFAULT_EXPORT__,
        });
      var components_Icon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          './src/components/Icon/index.js'
        ),
        _storybook_StoryContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          './.storybook/StoryContainer.js'
        ),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          './node_modules/react/jsx-runtime.js'
        );
      const __WEBPACK_DEFAULT_EXPORT__ = { title: 'Icon' };
      var Icons = function () {
        return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
          _storybook_StoryContainer__WEBPACK_IMPORTED_MODULE_1__.y,
          {
            children: Object.keys(components_Icon__WEBPACK_IMPORTED_MODULE_0__.c).map(
              function (key) {
                return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                  components_Icon__WEBPACK_IMPORTED_MODULE_0__.J,
                  { icon: key },
                  key
                );
              }
            ),
          }
        );
      };
      Icons.displayName = 'Icons';
      var __namedExportsOrder = ['Icons'];
      (Icons.__docgenInfo = { description: '', methods: [], displayName: 'Icons' }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES['src/components/Icon/Icon.stories.js'] = {
            name: 'Icons',
            docgenInfo: Icons.__docgenInfo,
            path: 'src/components/Icon/Icon.stories.js',
          });
    },
    './src/components/Icon/index.js': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      'use strict';
      __webpack_require__.d(__webpack_exports__, { J: () => Icon, c: () => icons });
      var style = __webpack_require__('./src/utils/style.js'),
        injectStylesIntoStyleTag = __webpack_require__(
          './node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js'
        ),
        injectStylesIntoStyleTag_default = __webpack_require__.n(
          injectStylesIntoStyleTag
        ),
        Icon_module = __webpack_require__(
          './node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./node_modules/postcss-loader/dist/cjs.js!./src/components/Icon/Icon.module.css'
        ),
        options = { insert: 'head', singleton: !1 };
      injectStylesIntoStyleTag_default()(Icon_module.Z, options);
      const Icon_Icon_module = Icon_module.Z.locals || {};
      var _path,
        react = __webpack_require__('./node_modules/react/index.js');
      function _extends() {
        return (
          (_extends = Object.assign
            ? Object.assign.bind()
            : function (target) {
                for (var i = 1; i < arguments.length; i++) {
                  var source = arguments[i];
                  for (var key in source)
                    Object.prototype.hasOwnProperty.call(source, key) &&
                      (target[key] = source[key]);
                }
                return target;
              }),
          _extends.apply(this, arguments)
        );
      }
      const arrow_left = props =>
        react.createElement(
          'svg',
          _extends({ width: 24, height: 24, viewBox: '0 0 24 24' }, props),
          _path ||
            (_path = react.createElement('path', {
              d: 'm9.793 19.207-6.5-6.5L2.586 12l.707-.707 6.5-6.5 1.414 1.414L6.414 11H21v2H6.414l4.793 4.793-1.414 1.414Z',
            }))
        );
      var arrow_right_path;
      function arrow_right_extends() {
        return (
          (arrow_right_extends = Object.assign
            ? Object.assign.bind()
            : function (target) {
                for (var i = 1; i < arguments.length; i++) {
                  var source = arguments[i];
                  for (var key in source)
                    Object.prototype.hasOwnProperty.call(source, key) &&
                      (target[key] = source[key]);
                }
                return target;
              }),
          arrow_right_extends.apply(this, arguments)
        );
      }
      const arrow_right = props =>
        react.createElement(
          'svg',
          arrow_right_extends({ width: 24, height: 24, viewBox: '0 0 24 24' }, props),
          arrow_right_path ||
            (arrow_right_path = react.createElement('path', {
              d: 'M14.207 4.793l6.5 6.5.707.707-.707.707-6.5 6.5-1.414-1.414L17.586 13H3v-2h14.586l-4.793-4.793 1.414-1.414z',
            }))
        );
      var check_path;
      function check_extends() {
        return (
          (check_extends = Object.assign
            ? Object.assign.bind()
            : function (target) {
                for (var i = 1; i < arguments.length; i++) {
                  var source = arguments[i];
                  for (var key in source)
                    Object.prototype.hasOwnProperty.call(source, key) &&
                      (target[key] = source[key]);
                }
                return target;
              }),
          check_extends.apply(this, arguments)
        );
      }
      const check = props =>
        react.createElement(
          'svg',
          check_extends({ width: 24, height: 24, viewBox: '0 0 24 24' }, props),
          check_path ||
            (check_path = react.createElement('path', {
              d: 'm20.207 7.207-10 10-.707.707-.707-.707-5-5 1.414-1.414L9.5 15.086l9.293-9.293 1.414 1.414Z',
            }))
        );
      var chevron_right_path;
      function chevron_right_extends() {
        return (
          (chevron_right_extends = Object.assign
            ? Object.assign.bind()
            : function (target) {
                for (var i = 1; i < arguments.length; i++) {
                  var source = arguments[i];
                  for (var key in source)
                    Object.prototype.hasOwnProperty.call(source, key) &&
                      (target[key] = source[key]);
                }
                return target;
              }),
          chevron_right_extends.apply(this, arguments)
        );
      }
      const chevron_right = props =>
        react.createElement(
          'svg',
          chevron_right_extends({ width: 24, height: 24, viewBox: '0 0 24 24' }, props),
          chevron_right_path ||
            (chevron_right_path = react.createElement('path', {
              d: 'M13.586 12L7.793 6.207l1.414-1.414 6.5 6.5.707.707-.707.707-6.5 6.5-1.414-1.414L13.586 12z',
            }))
        );
      var close_path;
      function close_extends() {
        return (
          (close_extends = Object.assign
            ? Object.assign.bind()
            : function (target) {
                for (var i = 1; i < arguments.length; i++) {
                  var source = arguments[i];
                  for (var key in source)
                    Object.prototype.hasOwnProperty.call(source, key) &&
                      (target[key] = source[key]);
                }
                return target;
              }),
          close_extends.apply(this, arguments)
        );
      }
      const svg_close = props =>
        react.createElement(
          'svg',
          close_extends({ width: 24, height: 24, viewBox: '0 0 24 24' }, props),
          close_path ||
            (close_path = react.createElement('path', {
              d: 'M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z',
            }))
        );
      var copy_path;
      function copy_extends() {
        return (
          (copy_extends = Object.assign
            ? Object.assign.bind()
            : function (target) {
                for (var i = 1; i < arguments.length; i++) {
                  var source = arguments[i];
                  for (var key in source)
                    Object.prototype.hasOwnProperty.call(source, key) &&
                      (target[key] = source[key]);
                }
                return target;
              }),
          copy_extends.apply(this, arguments)
        );
      }
      const copy = props =>
        react.createElement(
          'svg',
          copy_extends({ width: 24, height: 24, viewBox: '0 0 24 24' }, props),
          copy_path ||
            (copy_path = react.createElement('path', {
              d: 'M3 1H2v16h4v-2H4V3h10v2h2V1H3Zm5 6h14v12.414l-.293.293-3 3-.293.293H8V7Zm2 14h7.586L20 18.586V9H10v12Z',
            }))
        );
      var error_path;
      function error_extends() {
        return (
          (error_extends = Object.assign
            ? Object.assign.bind()
            : function (target) {
                for (var i = 1; i < arguments.length; i++) {
                  var source = arguments[i];
                  for (var key in source)
                    Object.prototype.hasOwnProperty.call(source, key) &&
                      (target[key] = source[key]);
                }
                return target;
              }),
          error_extends.apply(this, arguments)
        );
      }
      const error = props =>
        react.createElement(
          'svg',
          error_extends({ width: 24, height: 24, viewBox: '0 0 24 24' }, props),
          error_path ||
            (error_path = react.createElement('path', {
              d: 'M12 5.068 19.697 19H4.302L12 5.068Zm-.876-2.552-9.392 17L2.607 21h18.785l.875-1.484-9.392-17h-1.75ZM11 14v-4h2v4h-2Zm0 3v-2h2v2h-2Z',
            }))
        );
      var figma_path;
      function figma_extends() {
        return (
          (figma_extends = Object.assign
            ? Object.assign.bind()
            : function (target) {
                for (var i = 1; i < arguments.length; i++) {
                  var source = arguments[i];
                  for (var key in source)
                    Object.prototype.hasOwnProperty.call(source, key) &&
                      (target[key] = source[key]);
                }
                return target;
              }),
          figma_extends.apply(this, arguments)
        );
      }
      const figma = props =>
        react.createElement(
          'svg',
          figma_extends(
            {
              xmlns: 'http://www.w3.org/2000/svg',
              width: 24,
              height: 24,
              viewBox: '0 0 24 24',
            },
            props
          ),
          figma_path ||
            (figma_path = react.createElement('path', {
              d: 'M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z',
            }))
        );
      var github_path;
      function github_extends() {
        return (
          (github_extends = Object.assign
            ? Object.assign.bind()
            : function (target) {
                for (var i = 1; i < arguments.length; i++) {
                  var source = arguments[i];
                  for (var key in source)
                    Object.prototype.hasOwnProperty.call(source, key) &&
                      (target[key] = source[key]);
                }
                return target;
              }),
          github_extends.apply(this, arguments)
        );
      }
      const github = props =>
        react.createElement(
          'svg',
          github_extends({ width: 24, height: 24, viewBox: '0 0 24 24' }, props),
          github_path ||
            (github_path = react.createElement('path', {
              d: 'M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z',
            }))
        );
      var link_path;
      function link_extends() {
        return (
          (link_extends = Object.assign
            ? Object.assign.bind()
            : function (target) {
                for (var i = 1; i < arguments.length; i++) {
                  var source = arguments[i];
                  for (var key in source)
                    Object.prototype.hasOwnProperty.call(source, key) &&
                      (target[key] = source[key]);
                }
                return target;
              }),
          link_extends.apply(this, arguments)
        );
      }
      const svg_link = props =>
        react.createElement(
          'svg',
          link_extends({ width: 24, height: 24, viewBox: '0 0 24 24' }, props),
          link_path ||
            (link_path = react.createElement('path', {
              d: 'M9 4 8 5v2h2V6h10v7H10v-2H8v3l1 1h12l1-1V5l-1-1H9Zm2 4H3L2 9v9l1 1h12l1-1v-2h-2v1H4v-7h10v2h2V9l-1-1h-4Z',
            }))
        );
      var menu_path;
      function menu_extends() {
        return (
          (menu_extends = Object.assign
            ? Object.assign.bind()
            : function (target) {
                for (var i = 1; i < arguments.length; i++) {
                  var source = arguments[i];
                  for (var key in source)
                    Object.prototype.hasOwnProperty.call(source, key) &&
                      (target[key] = source[key]);
                }
                return target;
              }),
          menu_extends.apply(this, arguments)
        );
      }
      const menu = props =>
        react.createElement(
          'svg',
          menu_extends({ width: 24, height: 24, viewBox: '0 0 24 24' }, props),
          menu_path ||
            (menu_path = react.createElement('path', {
              d: 'M22 6H2V4h20v2zM2 13h16v-2H2v2zm0 7h20v-2H2v2z',
            }))
        );
      var pause_path;
      function pause_extends() {
        return (
          (pause_extends = Object.assign
            ? Object.assign.bind()
            : function (target) {
                for (var i = 1; i < arguments.length; i++) {
                  var source = arguments[i];
                  for (var key in source)
                    Object.prototype.hasOwnProperty.call(source, key) &&
                      (target[key] = source[key]);
                }
                return target;
              }),
          pause_extends.apply(this, arguments)
        );
      }
      const pause = props =>
        react.createElement(
          'svg',
          pause_extends({ width: 24, height: 24, viewBox: '0 0 24 24' }, props),
          pause_path ||
            (pause_path = react.createElement('path', {
              d: 'M6 19h4V5H6v14zm8-14v14h4V5h-4z',
            }))
        );
      var play_path;
      function play_extends() {
        return (
          (play_extends = Object.assign
            ? Object.assign.bind()
            : function (target) {
                for (var i = 1; i < arguments.length; i++) {
                  var source = arguments[i];
                  for (var key in source)
                    Object.prototype.hasOwnProperty.call(source, key) &&
                      (target[key] = source[key]);
                }
                return target;
              }),
          play_extends.apply(this, arguments)
        );
      }
      const play = props =>
        react.createElement(
          'svg',
          play_extends({ width: 24, height: 24, viewBox: '0 0 24 24' }, props),
          play_path || (play_path = react.createElement('path', { d: 'M8 5v14l11-7z' }))
        );
      var send_path;
      function send_extends() {
        return (
          (send_extends = Object.assign
            ? Object.assign.bind()
            : function (target) {
                for (var i = 1; i < arguments.length; i++) {
                  var source = arguments[i];
                  for (var key in source)
                    Object.prototype.hasOwnProperty.call(source, key) &&
                      (target[key] = source[key]);
                }
                return target;
              }),
          send_extends.apply(this, arguments)
        );
      }
      const send = props =>
        react.createElement(
          'svg',
          send_extends({ width: 24, height: 24, viewBox: '0 0 24 24' }, props),
          send_path ||
            (send_path = react.createElement('path', {
              d: 'M2.01 21L23 12 2.01 3 2 10l15 2-15 2 .01 7z',
            }))
        );
      var twitter_path;
      function twitter_extends() {
        return (
          (twitter_extends = Object.assign
            ? Object.assign.bind()
            : function (target) {
                for (var i = 1; i < arguments.length; i++) {
                  var source = arguments[i];
                  for (var key in source)
                    Object.prototype.hasOwnProperty.call(source, key) &&
                      (target[key] = source[key]);
                }
                return target;
              }),
          twitter_extends.apply(this, arguments)
        );
      }
      const twitter = props =>
        react.createElement(
          'svg',
          twitter_extends({ width: 24, height: 24, viewBox: '0 0 24 24' }, props),
          twitter_path ||
            (twitter_path = react.createElement('path', {
              d: 'M22.92 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.83 4.5 17.72 4 16.46 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98-3.56-.18-6.73-1.89-8.84-4.48-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 01-1.93.07 4.28 4.28 0 004 2.98 8.521 8.521 0 01-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.9 20.29 6.16 21 8.58 21c7.88 0 12.21-6.54 12.21-12.21 0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z',
            }))
        );
      var jsx_runtime = __webpack_require__('./node_modules/react/jsx-runtime.js'),
        _excluded = ['icon', 'className'];
      function _objectWithoutProperties(source, excluded) {
        if (null == source) return {};
        var key,
          i,
          target = (function _objectWithoutPropertiesLoose(source, excluded) {
            if (null == source) return {};
            var key,
              i,
              target = {},
              sourceKeys = Object.keys(source);
            for (i = 0; i < sourceKeys.length; i++)
              (key = sourceKeys[i]),
                excluded.indexOf(key) >= 0 || (target[key] = source[key]);
            return target;
          })(source, excluded);
        if (Object.getOwnPropertySymbols) {
          var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
          for (i = 0; i < sourceSymbolKeys.length; i++)
            (key = sourceSymbolKeys[i]),
              excluded.indexOf(key) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(source, key) &&
                  (target[key] = source[key]));
        }
        return target;
      }
      var icons = {
          arrowLeft: arrow_left,
          arrowRight: arrow_right,
          check,
          chevronRight: chevron_right,
          close: svg_close,
          copy,
          error,
          figma,
          github,
          link: svg_link,
          menu,
          pause,
          play,
          send,
          twitter,
        },
        Icon = function (_ref) {
          var icon = _ref.icon,
            className = _ref.className,
            rest = _objectWithoutProperties(_ref, _excluded),
            IconComponent = icons[icon];
          return (0, jsx_runtime.jsx)(
            IconComponent,
            Object.assign(
              {
                'aria-hidden': !0,
                className: (0, style.Sh)(Icon_Icon_module.icon, className),
              },
              rest
            )
          );
        };
      (Icon.displayName = 'Icon'),
        (Icon.__docgenInfo = { description: '', methods: [], displayName: 'Icon' }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES['src/components/Icon/Icon.js'] = {
            name: 'Icon',
            docgenInfo: Icon.__docgenInfo,
            path: 'src/components/Icon/Icon.js',
          });
    },
    './src/components/Image/Image.stories.js': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Default: () => Default,
          Reveal: () => Reveal,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => Image_stories,
        });
      var Button = __webpack_require__('./src/components/Button/index.js'),
        Icon = __webpack_require__('./src/components/Icon/index.js'),
        ThemeProvider = __webpack_require__('./src/components/ThemeProvider/index.js'),
        use_reduced_motion = __webpack_require__(
          './node_modules/framer-motion/dist/es/utils/use-reduced-motion.mjs'
        ),
        hooks = __webpack_require__('./src/hooks/index.js'),
        react = __webpack_require__('./node_modules/react/index.js'),
        utils_image = __webpack_require__('./src/utils/image.js'),
        utils_style = __webpack_require__('./src/utils/style.js'),
        injectStylesIntoStyleTag = __webpack_require__(
          './node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js'
        ),
        injectStylesIntoStyleTag_default = __webpack_require__.n(
          injectStylesIntoStyleTag
        ),
        Image_module = __webpack_require__(
          './node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./node_modules/postcss-loader/dist/cjs.js!./src/components/Image/Image.module.css'
        ),
        options = { insert: 'head', singleton: !1 };
      injectStylesIntoStyleTag_default()(Image_module.Z, options);
      const Image_Image_module = Image_module.Z.locals || {};
      var jsx_runtime = __webpack_require__('./node_modules/react/jsx-runtime.js'),
        _excluded = [
          'className',
          'style',
          'reveal',
          'delay',
          'raised',
          'src',
          'srcSet',
          'placeholder',
        ],
        _excluded2 = [
          'onLoad',
          'loaded',
          'inViewport',
          'srcSet',
          'placeholder',
          'delay',
          'src',
          'alt',
          'play',
          'restartOnPause',
          'reveal',
          'sizes',
          'noPauseButton',
        ];
      function _slicedToArray(arr, i) {
        return (
          (function _arrayWithHoles(arr) {
            if (Array.isArray(arr)) return arr;
          })(arr) ||
          (function _iterableToArrayLimit(arr, i) {
            var _i =
              null == arr
                ? null
                : ('undefined' != typeof Symbol && arr[Symbol.iterator]) ||
                  arr['@@iterator'];
            if (null == _i) return;
            var _s,
              _e,
              _arr = [],
              _n = !0,
              _d = !1;
            try {
              for (
                _i = _i.call(arr);
                !(_n = (_s = _i.next()).done) &&
                (_arr.push(_s.value), !i || _arr.length !== i);
                _n = !0
              );
            } catch (err) {
              (_d = !0), (_e = err);
            } finally {
              try {
                _n || null == _i.return || _i.return();
              } finally {
                if (_d) throw _e;
              }
            }
            return _arr;
          })(arr, i) ||
          (function _unsupportedIterableToArray(o, minLen) {
            if (!o) return;
            if ('string' == typeof o) return _arrayLikeToArray(o, minLen);
            var n = Object.prototype.toString.call(o).slice(8, -1);
            'Object' === n && o.constructor && (n = o.constructor.name);
            if ('Map' === n || 'Set' === n) return Array.from(o);
            if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
              return _arrayLikeToArray(o, minLen);
          })(arr, i) ||
          (function _nonIterableRest() {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      function _arrayLikeToArray(arr, len) {
        (null == len || len > arr.length) && (len = arr.length);
        for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
        return arr2;
      }
      function _objectWithoutProperties(source, excluded) {
        if (null == source) return {};
        var key,
          i,
          target = (function _objectWithoutPropertiesLoose(source, excluded) {
            if (null == source) return {};
            var key,
              i,
              target = {},
              sourceKeys = Object.keys(source);
            for (i = 0; i < sourceKeys.length; i++)
              (key = sourceKeys[i]),
                excluded.indexOf(key) >= 0 || (target[key] = source[key]);
            return target;
          })(source, excluded);
        if (Object.getOwnPropertySymbols) {
          var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
          for (i = 0; i < sourceSymbolKeys.length; i++)
            (key = sourceSymbolKeys[i]),
              excluded.indexOf(key) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(source, key) &&
                  (target[key] = source[key]));
        }
        return target;
      }
      var Image = function (_ref) {
        var className = _ref.className,
          style = _ref.style,
          reveal = _ref.reveal,
          _ref$delay = _ref.delay,
          delay = void 0 === _ref$delay ? 0 : _ref$delay,
          raised = _ref.raised,
          baseSrc = _ref.src,
          srcSet = _ref.srcSet,
          placeholder = _ref.placeholder,
          rest = _objectWithoutProperties(_ref, _excluded),
          _useState2 = _slicedToArray((0, react.useState)(!1), 2),
          loaded = _useState2[0],
          setLoaded = _useState2[1],
          themeId = (0, ThemeProvider.Fg)().themeId,
          containerRef = (0, react.useRef)(),
          src = baseSrc || (null == srcSet ? void 0 : srcSet[0]),
          inViewport = (0, hooks.NM)(containerRef, !getIsVideo(src)),
          onLoad = (0, react.useCallback)(function () {
            setLoaded(!0);
          }, []);
        return (0, jsx_runtime.jsx)('div', {
          className: (0, utils_style.Sh)(Image_Image_module.image, className),
          'data-visible': inViewport || loaded,
          'data-reveal': reveal,
          'data-raised': raised,
          'data-theme': themeId,
          style: (0, utils_style.Fh)({ delay: (0, utils_style.aU)(delay) }, style),
          ref: containerRef,
          children: (0, jsx_runtime.jsx)(
            ImageElements,
            Object.assign(
              { delay, onLoad, loaded, inViewport, reveal, src, srcSet, placeholder },
              rest
            )
          ),
        });
      };
      Image.displayName = 'Image';
      var ImageElements = function (_ref2) {
        var onLoad = _ref2.onLoad,
          loaded = _ref2.loaded,
          inViewport = _ref2.inViewport,
          srcSet = _ref2.srcSet,
          placeholder = _ref2.placeholder,
          delay = _ref2.delay,
          src = _ref2.src,
          alt = _ref2.alt,
          _ref2$play = _ref2.play,
          play = void 0 === _ref2$play || _ref2$play,
          restartOnPause = _ref2.restartOnPause,
          reveal = _ref2.reveal,
          sizes = _ref2.sizes,
          noPauseButton = _ref2.noPauseButton,
          rest = _objectWithoutProperties(_ref2, _excluded2),
          reduceMotion = (0, use_reduced_motion.J)(),
          _useState4 = _slicedToArray((0, react.useState)(!0), 2),
          showPlaceholder = _useState4[0],
          setShowPlaceholder = _useState4[1],
          _useState6 = _slicedToArray((0, react.useState)(!reduceMotion), 2),
          playing = _useState6[0],
          setPlaying = _useState6[1],
          _useState8 = _slicedToArray((0, react.useState)(), 2),
          videoSrc = _useState8[0],
          setVideoSrc = _useState8[1],
          _useState10 = _slicedToArray((0, react.useState)(!1), 2),
          videoInteracted = _useState10[0],
          setVideoInteracted = _useState10[1],
          placeholderRef = (0, react.useRef)(),
          videoRef = (0, react.useRef)(),
          isVideo = getIsVideo(src),
          showFullRes = inViewport,
          srcSetString = (0, utils_image.A2)(srcSet),
          hasMounted = (0, hooks.f3)();
        (0, react.useEffect)(
          function () {
            isVideo && srcSet
              ? (async function () {
                  var resolvedVideoSrc = await (0, utils_image.Ro)({ srcSet, sizes });
                  setVideoSrc(resolvedVideoSrc);
                })()
              : isVideo && setVideoSrc(src.src);
          },
          [isVideo, sizes, src, srcSet]
        ),
          (0, react.useEffect)(
            function () {
              if (videoRef.current && videoSrc) {
                var pauseVideo = function () {
                  setPlaying(!1), videoRef.current.pause();
                };
                play ||
                  (pauseVideo(), restartOnPause && (videoRef.current.currentTime = 0)),
                  videoInteracted ||
                    (inViewport
                      ? inViewport &&
                        !reduceMotion &&
                        play &&
                        (setPlaying(!0), videoRef.current.play())
                      : pauseVideo());
              }
            },
            [inViewport, play, reduceMotion, restartOnPause, videoInteracted, videoSrc]
          );
        return (0, jsx_runtime.jsxs)('div', {
          className: Image_Image_module.elementWrapper,
          'data-reveal': reveal,
          'data-visible': inViewport || loaded,
          style: (0, utils_style.Fh)({ delay: (0, utils_style.aU)(delay + 1e3) }),
          children: [
            isVideo &&
              hasMounted &&
              (0, jsx_runtime.jsxs)(react.Fragment, {
                children: [
                  (0, jsx_runtime.jsx)(
                    'video',
                    Object.assign(
                      {
                        muted: !0,
                        loop: !0,
                        playsInline: !0,
                        className: Image_Image_module.element,
                        'data-loaded': loaded,
                        autoPlay: !reduceMotion,
                        role: 'img',
                        onLoadStart: onLoad,
                        src: videoSrc,
                        'aria-label': alt,
                        ref: videoRef,
                      },
                      rest
                    )
                  ),
                  !noPauseButton &&
                    (0, jsx_runtime.jsxs)(Button.z, {
                      className: Image_Image_module.button,
                      onClick: function (event) {
                        event.preventDefault(),
                          setVideoInteracted(!0),
                          videoRef.current.paused
                            ? (setPlaying(!0), videoRef.current.play())
                            : (setPlaying(!1), videoRef.current.pause());
                      },
                      children: [
                        (0, jsx_runtime.jsx)(Icon.J, {
                          icon: playing ? 'pause' : 'play',
                        }),
                        playing ? 'Pause' : 'Play',
                      ],
                    }),
                ],
              }),
            !isVideo &&
              (0, jsx_runtime.jsx)(
                'img',
                Object.assign(
                  {
                    className: Image_Image_module.element,
                    'data-loaded': loaded,
                    onLoad,
                    decoding: 'async',
                    src: showFullRes ? src.src : void 0,
                    srcSet: showFullRes ? srcSetString : void 0,
                    width: src.width,
                    height: src.height,
                    alt,
                    sizes,
                  },
                  rest
                )
              ),
            showPlaceholder &&
              (0, jsx_runtime.jsx)('img', {
                'aria-hidden': !0,
                className: Image_Image_module.placeholder,
                'data-loaded': loaded,
                style: (0, utils_style.Fh)({ delay: (0, utils_style.aU)(delay) }),
                ref: placeholderRef,
                src: placeholder.src,
                width: placeholder.width,
                height: placeholder.height,
                onTransitionEnd: function () {
                  return setShowPlaceholder(!1);
                },
                decoding: 'async',
                alt: '',
                role: 'presentation',
              }),
          ],
        });
      };
      function getIsVideo(src) {
        return 'string' == typeof src.src && src.src.endsWith('.mp4');
      }
      (ImageElements.displayName = 'ImageElements'),
        (Image.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'Image',
          props: { delay: { defaultValue: { value: '0', computed: !1 }, required: !1 } },
        }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES['src/components/Image/Image.js'] = {
            name: 'Image',
            docgenInfo: Image.__docgenInfo,
            path: 'src/components/Image/Image.js',
          });
      var StoryContainer = __webpack_require__('./.storybook/StoryContainer.js');
      const Image_stories = { title: 'Image' };
      var imageData = {
          alt: 'An abstract purple and pink neon thing',
          src: {
            src: 'https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&w=960&h=540&q=80',
            width: 960,
            height: 540,
          },
          placeholder: {
            src: 'https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&w=64&h=36&q=0',
            width: 64,
            height: 36,
          },
        },
        Story = function (args) {
          return (0, jsx_runtime.jsx)(StoryContainer.y, {
            children: (0, jsx_runtime.jsx)('div', {
              style: { display: 'grid', gridTemplateColumns: 'minmax(0px, 960px)' },
              children: (0, jsx_runtime.jsx)(
                Image,
                Object.assign(
                  { alt: 'An abstract purple and pink neon thing' },
                  imageData,
                  args
                )
              ),
            }),
          });
        };
      Story.displayName = 'Story';
      var Default = Story.bind({});
      Default.args = Object.assign({}, imageData);
      var Reveal = Story.bind({});
      Reveal.args = Object.assign({}, imageData, { reveal: !0 });
      var __namedExportsOrder = ['Default', 'Reveal'];
    },
    './src/components/Input/Input.stories.js': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Multiline: () => Multiline,
          Text: () => Text,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => Input_stories,
        });
      var Icon = __webpack_require__('./src/components/Icon/index.js'),
        theme = __webpack_require__('./src/components/ThemeProvider/theme.js'),
        Transition = __webpack_require__('./src/components/Transition/index.js'),
        react = __webpack_require__('./node_modules/react/index.js'),
        utils_style = __webpack_require__('./src/utils/style.js'),
        injectStylesIntoStyleTag = __webpack_require__(
          './node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js'
        ),
        injectStylesIntoStyleTag_default = __webpack_require__.n(
          injectStylesIntoStyleTag
        ),
        Input_module = __webpack_require__(
          './node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./node_modules/postcss-loader/dist/cjs.js!./src/components/Input/Input.module.css'
        ),
        options = { insert: 'head', singleton: !1 };
      injectStylesIntoStyleTag_default()(Input_module.Z, options);
      const Input_Input_module = Input_module.Z.locals || {};
      var TextArea_module = __webpack_require__(
          './node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./node_modules/postcss-loader/dist/cjs.js!./src/components/Input/TextArea.module.css'
        ),
        TextArea_module_options = { insert: 'head', singleton: !1 };
      injectStylesIntoStyleTag_default()(TextArea_module.Z, TextArea_module_options);
      const Input_TextArea_module = TextArea_module.Z.locals || {};
      var jsx_runtime = __webpack_require__('./node_modules/react/jsx-runtime.js'),
        _excluded = ['className', 'resize', 'value', 'onChange', 'minRows', 'maxRows'];
      function _slicedToArray(arr, i) {
        return (
          (function _arrayWithHoles(arr) {
            if (Array.isArray(arr)) return arr;
          })(arr) ||
          (function _iterableToArrayLimit(arr, i) {
            var _i =
              null == arr
                ? null
                : ('undefined' != typeof Symbol && arr[Symbol.iterator]) ||
                  arr['@@iterator'];
            if (null == _i) return;
            var _s,
              _e,
              _arr = [],
              _n = !0,
              _d = !1;
            try {
              for (
                _i = _i.call(arr);
                !(_n = (_s = _i.next()).done) &&
                (_arr.push(_s.value), !i || _arr.length !== i);
                _n = !0
              );
            } catch (err) {
              (_d = !0), (_e = err);
            } finally {
              try {
                _n || null == _i.return || _i.return();
              } finally {
                if (_d) throw _e;
              }
            }
            return _arr;
          })(arr, i) ||
          (function _unsupportedIterableToArray(o, minLen) {
            if (!o) return;
            if ('string' == typeof o) return _arrayLikeToArray(o, minLen);
            var n = Object.prototype.toString.call(o).slice(8, -1);
            'Object' === n && o.constructor && (n = o.constructor.name);
            if ('Map' === n || 'Set' === n) return Array.from(o);
            if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
              return _arrayLikeToArray(o, minLen);
          })(arr, i) ||
          (function _nonIterableRest() {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      function _arrayLikeToArray(arr, len) {
        (null == len || len > arr.length) && (len = arr.length);
        for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
        return arr2;
      }
      function _objectWithoutProperties(source, excluded) {
        if (null == source) return {};
        var key,
          i,
          target = (function _objectWithoutPropertiesLoose(source, excluded) {
            if (null == source) return {};
            var key,
              i,
              target = {},
              sourceKeys = Object.keys(source);
            for (i = 0; i < sourceKeys.length; i++)
              (key = sourceKeys[i]),
                excluded.indexOf(key) >= 0 || (target[key] = source[key]);
            return target;
          })(source, excluded);
        if (Object.getOwnPropertySymbols) {
          var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
          for (i = 0; i < sourceSymbolKeys.length; i++)
            (key = sourceSymbolKeys[i]),
              excluded.indexOf(key) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(source, key) &&
                  (target[key] = source[key]));
        }
        return target;
      }
      var TextArea = function (_ref) {
        var className = _ref.className,
          _ref$resize = _ref.resize,
          resize = void 0 === _ref$resize ? 'none' : _ref$resize,
          value = _ref.value,
          onChange = _ref.onChange,
          _ref$minRows = _ref.minRows,
          minRows = void 0 === _ref$minRows ? 1 : _ref$minRows,
          maxRows = _ref.maxRows,
          rest = _objectWithoutProperties(_ref, _excluded),
          _useState2 = _slicedToArray((0, react.useState)(minRows), 2),
          rows = _useState2[0],
          setRows = _useState2[1],
          _useState4 = _slicedToArray((0, react.useState)(), 2),
          textareaDimensions = _useState4[0],
          setTextareaDimensions = _useState4[1],
          textareaRef = (0, react.useRef)();
        (0, react.useEffect)(function () {
          var style = getComputedStyle(textareaRef.current),
            lineHeight = parseInt(style.lineHeight, 10),
            paddingHeight =
              parseInt(style.paddingTop, 10) + parseInt(style.paddingBottom, 10);
          setTextareaDimensions({ lineHeight, paddingHeight });
        }, []);
        return (0, jsx_runtime.jsx)(
          'textarea',
          Object.assign(
            {
              className: (0, utils_style.Sh)(Input_TextArea_module.textarea, className),
              ref: textareaRef,
              onChange: function (event) {
                onChange(event);
                var lineHeight = textareaDimensions.lineHeight,
                  paddingHeight = textareaDimensions.paddingHeight,
                  previousRows = event.target.rows;
                event.target.rows = minRows;
                var currentRows = ~~(
                  (event.target.scrollHeight - paddingHeight) /
                  lineHeight
                );
                currentRows === previousRows && (event.target.rows = currentRows),
                  maxRows &&
                    currentRows >= maxRows &&
                    ((event.target.rows = maxRows),
                    (event.target.scrollTop = event.target.scrollHeight)),
                  setRows(maxRows && currentRows > maxRows ? maxRows : currentRows);
              },
              style: (0, utils_style.Fh)({ resize }),
              rows,
              value,
            },
            rest
          )
        );
      };
      (TextArea.displayName = 'TextArea'),
        (TextArea.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'TextArea',
          props: {
            resize: { defaultValue: { value: "'none'", computed: !1 }, required: !1 },
            minRows: { defaultValue: { value: '1', computed: !1 }, required: !1 },
          },
        }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES['src/components/Input/TextArea.js'] = {
            name: 'TextArea',
            docgenInfo: TextArea.__docgenInfo,
            path: 'src/components/Input/TextArea.js',
          });
      var Input_excluded = [
        'id',
        'label',
        'value',
        'multiline',
        'className',
        'style',
        'error',
        'onBlur',
        'autoComplete',
        'required',
        'maxLength',
        'type',
        'onChange',
      ];
      function Input_slicedToArray(arr, i) {
        return (
          (function Input_arrayWithHoles(arr) {
            if (Array.isArray(arr)) return arr;
          })(arr) ||
          (function Input_iterableToArrayLimit(arr, i) {
            var _i =
              null == arr
                ? null
                : ('undefined' != typeof Symbol && arr[Symbol.iterator]) ||
                  arr['@@iterator'];
            if (null == _i) return;
            var _s,
              _e,
              _arr = [],
              _n = !0,
              _d = !1;
            try {
              for (
                _i = _i.call(arr);
                !(_n = (_s = _i.next()).done) &&
                (_arr.push(_s.value), !i || _arr.length !== i);
                _n = !0
              );
            } catch (err) {
              (_d = !0), (_e = err);
            } finally {
              try {
                _n || null == _i.return || _i.return();
              } finally {
                if (_d) throw _e;
              }
            }
            return _arr;
          })(arr, i) ||
          (function Input_unsupportedIterableToArray(o, minLen) {
            if (!o) return;
            if ('string' == typeof o) return Input_arrayLikeToArray(o, minLen);
            var n = Object.prototype.toString.call(o).slice(8, -1);
            'Object' === n && o.constructor && (n = o.constructor.name);
            if ('Map' === n || 'Set' === n) return Array.from(o);
            if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
              return Input_arrayLikeToArray(o, minLen);
          })(arr, i) ||
          (function Input_nonIterableRest() {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      function Input_arrayLikeToArray(arr, len) {
        (null == len || len > arr.length) && (len = arr.length);
        for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
        return arr2;
      }
      function Input_objectWithoutProperties(source, excluded) {
        if (null == source) return {};
        var key,
          i,
          target = (function Input_objectWithoutPropertiesLoose(source, excluded) {
            if (null == source) return {};
            var key,
              i,
              target = {},
              sourceKeys = Object.keys(source);
            for (i = 0; i < sourceKeys.length; i++)
              (key = sourceKeys[i]),
                excluded.indexOf(key) >= 0 || (target[key] = source[key]);
            return target;
          })(source, excluded);
        if (Object.getOwnPropertySymbols) {
          var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
          for (i = 0; i < sourceSymbolKeys.length; i++)
            (key = sourceSymbolKeys[i]),
              excluded.indexOf(key) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(source, key) &&
                  (target[key] = source[key]));
        }
        return target;
      }
      var Input = function (_ref) {
        var id = _ref.id,
          label = _ref.label,
          value = _ref.value,
          multiline = _ref.multiline,
          className = _ref.className,
          style = _ref.style,
          error = _ref.error,
          onBlur = _ref.onBlur,
          autoComplete = _ref.autoComplete,
          required = _ref.required,
          maxLength = _ref.maxLength,
          type = _ref.type,
          onChange = _ref.onChange,
          rest = Input_objectWithoutProperties(_ref, Input_excluded),
          _useState2 = Input_slicedToArray((0, react.useState)(!1), 2),
          focused = _useState2[0],
          setFocused = _useState2[1],
          generatedId = (0, react.useId)(),
          errorRef = (0, react.useRef)(),
          inputId = id || `${generatedId}input`,
          labelId = `${inputId}-label`,
          errorId = `${inputId}-error`,
          InputElement = multiline ? TextArea : 'input';
        return (0, jsx_runtime.jsxs)(
          'div',
          Object.assign(
            {
              className: (0, utils_style.Sh)(Input_Input_module.container, className),
              'data-error': !!error,
              style,
            },
            rest,
            {
              children: [
                (0, jsx_runtime.jsxs)('div', {
                  className: Input_Input_module.content,
                  children: [
                    (0, jsx_runtime.jsx)('label', {
                      className: Input_Input_module.label,
                      'data-focused': focused,
                      'data-filled': !!value,
                      id: labelId,
                      htmlFor: inputId,
                      children: label,
                    }),
                    (0, jsx_runtime.jsx)(InputElement, {
                      className: Input_Input_module.input,
                      id: inputId,
                      'aria-labelledby': labelId,
                      'aria-describedby': error ? errorId : void 0,
                      onFocus: function () {
                        return setFocused(!0);
                      },
                      onBlur: function (event) {
                        setFocused(!1), onBlur && onBlur(event);
                      },
                      value,
                      onChange,
                      autoComplete,
                      required,
                      maxLength,
                      type,
                    }),
                    (0, jsx_runtime.jsx)('div', {
                      className: Input_Input_module.underline,
                      'data-focused': focused,
                    }),
                  ],
                }),
                (0, jsx_runtime.jsx)(Transition.u, {
                  unmount: !0,
                  in: error,
                  timeout: (0, utils_style.zG)(theme.T.base.durationM),
                  children: function (visible) {
                    var _errorRef$current;
                    return (0, jsx_runtime.jsx)('div', {
                      className: Input_Input_module.error,
                      'data-visible': visible,
                      id: errorId,
                      role: 'alert',
                      style: (0, utils_style.Fh)({
                        height: visible
                          ? null === (_errorRef$current = errorRef.current) ||
                            void 0 === _errorRef$current
                            ? void 0
                            : _errorRef$current.getBoundingClientRect().height
                          : 0,
                      }),
                      children: (0, jsx_runtime.jsxs)('div', {
                        className: Input_Input_module.errorMessage,
                        ref: errorRef,
                        children: [
                          (0, jsx_runtime.jsx)(Icon.J, { icon: 'error' }),
                          error,
                        ],
                      }),
                    });
                  },
                }),
              ],
            }
          )
        );
      };
      (Input.displayName = 'Input'),
        (Input.__docgenInfo = { description: '', methods: [], displayName: 'Input' }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES['src/components/Input/Input.js'] = {
            name: 'Input',
            docgenInfo: Input.__docgenInfo,
            path: 'src/components/Input/Input.js',
          });
      var hooks = __webpack_require__('./src/hooks/index.js');
      const Input_stories = { title: 'Input' };
      var Story = function (args) {
        var exampleValue = (0, hooks.pJ)('');
        return (0, jsx_runtime.jsx)('div', {
          style: { maxWidth: 400, width: '100%', padding: 30 },
          children: (0, jsx_runtime.jsx)(Input, Object.assign({}, exampleValue, args)),
        });
      };
      Story.displayName = 'Story';
      var Text = Story.bind({});
      Text.args = { label: 'Your name', type: 'text' };
      var Multiline = Story.bind({});
      Multiline.args = { label: 'Type a message', type: 'text', multiline: !0 };
      var __namedExportsOrder = ['Text', 'Multiline'];
    },
    './src/components/Link/Link.stories.js': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Default: () => Default,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => Link_stories,
        });
      var next_link = __webpack_require__('./node_modules/next/link.js'),
        link_default = __webpack_require__.n(next_link),
        react = __webpack_require__('./node_modules/react/index.js'),
        style = __webpack_require__('./src/utils/style.js'),
        injectStylesIntoStyleTag = __webpack_require__(
          './node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js'
        ),
        injectStylesIntoStyleTag_default = __webpack_require__.n(
          injectStylesIntoStyleTag
        ),
        Link_module = __webpack_require__(
          './node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./node_modules/postcss-loader/dist/cjs.js!./src/components/Link/Link.module.css'
        ),
        options = { insert: 'head', singleton: !1 };
      injectStylesIntoStyleTag_default()(Link_module.Z, options);
      const Link_Link_module = Link_module.Z.locals || {};
      var jsx_runtime = __webpack_require__('./node_modules/react/jsx-runtime.js'),
        _excluded = ['href'],
        _excluded2 = ['rel', 'target', 'children', 'secondary', 'className', 'href'];
      function _objectWithoutProperties(source, excluded) {
        if (null == source) return {};
        var key,
          i,
          target = (function _objectWithoutPropertiesLoose(source, excluded) {
            if (null == source) return {};
            var key,
              i,
              target = {},
              sourceKeys = Object.keys(source);
            for (i = 0; i < sourceKeys.length; i++)
              (key = sourceKeys[i]),
                excluded.indexOf(key) >= 0 || (target[key] = source[key]);
            return target;
          })(source, excluded);
        if (Object.getOwnPropertySymbols) {
          var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
          for (i = 0; i < sourceSymbolKeys.length; i++)
            (key = sourceSymbolKeys[i]),
              excluded.indexOf(key) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(source, key) &&
                  (target[key] = source[key]));
        }
        return target;
      }
      var VALID_EXT = ['txt', 'png', 'jpg'];
      var Link = (0, react.forwardRef)(function (_ref, ref) {
          var href = _ref.href,
            rest = _objectWithoutProperties(_ref, _excluded);
          return (function isAnchor(href) {
            var isValidExtension = VALID_EXT.includes(
              null == href ? void 0 : href.split('.').pop()
            );
            return (
              (null == href ? void 0 : href.includes('://')) ||
              '#' === (null == href ? void 0 : href[0]) ||
              isValidExtension
            );
          })(href)
            ? (0, jsx_runtime.jsx)(LinkContent, Object.assign({ href, ref }, rest))
            : (0, jsx_runtime.jsx)(link_default(), {
                passHref: !0,
                href,
                scroll: !1,
                children: (0, jsx_runtime.jsx)(LinkContent, Object.assign({ ref }, rest)),
              });
        }),
        LinkContent = (0, react.forwardRef)(function (_ref2, ref) {
          var rel = _ref2.rel,
            target = _ref2.target,
            children = _ref2.children,
            secondary = _ref2.secondary,
            className = _ref2.className,
            href = _ref2.href,
            rest = _objectWithoutProperties(_ref2, _excluded2),
            isExternal = null == href ? void 0 : href.includes('://'),
            relValue = rel || (isExternal ? 'noreferrer noopener' : void 0),
            targetValue = target || (isExternal ? '_blank' : void 0);
          return (0,
          jsx_runtime.jsx)('a', Object.assign({ className: (0, style.Sh)(Link_Link_module.link, className), 'data-secondary': secondary, rel: relValue, href, target: targetValue, ref }, rest, { children }));
        });
      (Link.__docgenInfo = { description: '', methods: [], displayName: 'Link' }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES['src/components/Link/Link.js'] = {
            name: 'Link',
            docgenInfo: Link.__docgenInfo,
            path: 'src/components/Link/Link.js',
          }),
        (LinkContent.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'LinkContent',
        }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES['src/components/Link/Link.js'] = {
            name: 'LinkContent',
            docgenInfo: LinkContent.__docgenInfo,
            path: 'src/components/Link/Link.js',
          });
      var StoryContainer = __webpack_require__('./.storybook/StoryContainer.js');
      const Link_stories = { title: 'Link' };
      var Default = function () {
        return (0, jsx_runtime.jsxs)(StoryContainer.y, {
          style: { fontSize: 18 },
          children: [
            (0, jsx_runtime.jsx)(Link, {
              href: 'https://yakkshitw.com',
              children: 'Primary link',
            }),
            (0, jsx_runtime.jsx)(Link, {
              secondary: !0,
              href: 'https://yakkshitw.com',
              children: 'Secondary link',
            }),
          ],
        });
      };
      Default.displayName = 'Default';
      var __namedExportsOrder = ['Default'];
      (Default.__docgenInfo = { description: '', methods: [], displayName: 'Default' }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES['src/components/Link/Link.stories.js'] = {
            name: 'Default',
            docgenInfo: Default.__docgenInfo,
            path: 'src/components/Link/Link.stories.js',
          });
    },
    './src/components/List/List.stories.js': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Ordered: () => Ordered,
          Unordered: () => Unordered,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => List_stories,
        });
      var style = __webpack_require__('./src/utils/style.js'),
        injectStylesIntoStyleTag = __webpack_require__(
          './node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js'
        ),
        injectStylesIntoStyleTag_default = __webpack_require__.n(
          injectStylesIntoStyleTag
        ),
        List_module = __webpack_require__(
          './node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./node_modules/postcss-loader/dist/cjs.js!./src/components/List/List.module.css'
        ),
        options = { insert: 'head', singleton: !1 };
      injectStylesIntoStyleTag_default()(List_module.Z, options);
      const List_List_module = List_module.Z.locals || {};
      var jsx_runtime = __webpack_require__('./node_modules/react/jsx-runtime.js'),
        _excluded = ['ordered', 'children', 'className'],
        _excluded2 = ['children'];
      function _objectWithoutProperties(source, excluded) {
        if (null == source) return {};
        var key,
          i,
          target = (function _objectWithoutPropertiesLoose(source, excluded) {
            if (null == source) return {};
            var key,
              i,
              target = {},
              sourceKeys = Object.keys(source);
            for (i = 0; i < sourceKeys.length; i++)
              (key = sourceKeys[i]),
                excluded.indexOf(key) >= 0 || (target[key] = source[key]);
            return target;
          })(source, excluded);
        if (Object.getOwnPropertySymbols) {
          var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
          for (i = 0; i < sourceSymbolKeys.length; i++)
            (key = sourceSymbolKeys[i]),
              excluded.indexOf(key) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(source, key) &&
                  (target[key] = source[key]));
        }
        return target;
      }
      var List = function (_ref) {
        var ordered = _ref.ordered,
          children = _ref.children,
          className = _ref.className,
          rest = _objectWithoutProperties(_ref, _excluded),
          Element = ordered ? 'ol' : 'ul';
        return (0, jsx_runtime.jsx)(
          Element,
          Object.assign(
            { className: (0, style.Sh)(List_List_module.list, className) },
            rest,
            { children }
          )
        );
      };
      List.displayName = 'List';
      var ListItem = function (_ref2) {
        var children = _ref2.children,
          rest = _objectWithoutProperties(_ref2, _excluded2);
        return (0, jsx_runtime.jsx)(
          'li',
          Object.assign({ className: List_List_module.item }, rest, { children })
        );
      };
      (ListItem.displayName = 'ListItem'),
        (List.__docgenInfo = { description: '', methods: [], displayName: 'List' }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES['src/components/List/List.js'] = {
            name: 'List',
            docgenInfo: List.__docgenInfo,
            path: 'src/components/List/List.js',
          }),
        (ListItem.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'ListItem',
        }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES['src/components/List/List.js'] = {
            name: 'ListItem',
            docgenInfo: ListItem.__docgenInfo,
            path: 'src/components/List/List.js',
          });
      var StoryContainer = __webpack_require__('./.storybook/StoryContainer.js');
      const List_stories = { title: 'List' };
      var Story = function (args) {
        return (0, jsx_runtime.jsx)(StoryContainer.y, {
          children: (0, jsx_runtime.jsxs)(
            List,
            Object.assign({}, args, {
              children: [
                (0, jsx_runtime.jsx)(ListItem, { children: 'List item 1' }),
                (0, jsx_runtime.jsx)(ListItem, { children: 'List item 2' }),
                (0, jsx_runtime.jsx)(ListItem, { children: 'List item 3' }),
              ],
            })
          ),
        });
      };
      Story.displayName = 'Story';
      var Unordered = Story.bind({});
      Unordered.args = { ordered: !1 };
      var Ordered = Story.bind({});
      Ordered.args = { ordered: !0 };
      var __namedExportsOrder = ['Unordered', 'Ordered'];
    },
    './src/components/Loader/Loader.stories.js': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Default: () => Default,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => __WEBPACK_DEFAULT_EXPORT__,
        });
      var components_Loader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          './src/components/Loader/index.js'
        ),
        _storybook_StoryContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          './.storybook/StoryContainer.js'
        ),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          './node_modules/react/jsx-runtime.js'
        );
      const __WEBPACK_DEFAULT_EXPORT__ = { title: 'Loader' };
      var Default = function () {
        return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
          _storybook_StoryContainer__WEBPACK_IMPORTED_MODULE_1__.y,
          {
            children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
              components_Loader__WEBPACK_IMPORTED_MODULE_0__.a,
              { size: 48 }
            ),
          }
        );
      };
      Default.displayName = 'Default';
      var __namedExportsOrder = ['Default'];
      (Default.__docgenInfo = { description: '', methods: [], displayName: 'Default' }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES['src/components/Loader/Loader.stories.js'] = {
            name: 'Default',
            docgenInfo: Default.__docgenInfo,
            path: 'src/components/Loader/Loader.stories.js',
          });
    },
    './src/components/Loader/index.js': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      'use strict';
      __webpack_require__.d(__webpack_exports__, { a: () => Loader });
      var Text = __webpack_require__('./src/components/Text/index.js'),
        VisuallyHidden = __webpack_require__('./src/components/VisuallyHidden/index.js'),
        use_reduced_motion = __webpack_require__(
          './node_modules/framer-motion/dist/es/utils/use-reduced-motion.mjs'
        ),
        hooks = __webpack_require__('./src/hooks/index.js'),
        react_dom = __webpack_require__('./node_modules/react-dom/index.js'),
        utils_style = __webpack_require__('./src/utils/style.js'),
        injectStylesIntoStyleTag = __webpack_require__(
          './node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js'
        ),
        injectStylesIntoStyleTag_default = __webpack_require__.n(
          injectStylesIntoStyleTag
        ),
        Loader_module = __webpack_require__(
          './node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./node_modules/postcss-loader/dist/cjs.js!./src/components/Loader/Loader.module.css'
        ),
        options = { insert: 'head', singleton: !1 };
      injectStylesIntoStyleTag_default()(Loader_module.Z, options);
      const Loader_Loader_module = Loader_module.Z.locals || {};
      var jsx_runtime = __webpack_require__('./node_modules/react/jsx-runtime.js'),
        _excluded = ['className', 'style', 'size', 'text'];
      function _objectWithoutProperties(source, excluded) {
        if (null == source) return {};
        var key,
          i,
          target = (function _objectWithoutPropertiesLoose(source, excluded) {
            if (null == source) return {};
            var key,
              i,
              target = {},
              sourceKeys = Object.keys(source);
            for (i = 0; i < sourceKeys.length; i++)
              (key = sourceKeys[i]),
                excluded.indexOf(key) >= 0 || (target[key] = source[key]);
            return target;
          })(source, excluded);
        if (Object.getOwnPropertySymbols) {
          var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
          for (i = 0; i < sourceSymbolKeys.length; i++)
            (key = sourceSymbolKeys[i]),
              excluded.indexOf(key) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(source, key) &&
                  (target[key] = source[key]));
        }
        return target;
      }
      var Loader = function (_ref) {
        var className = _ref.className,
          style = _ref.style,
          _ref$size = _ref.size,
          size = void 0 === _ref$size ? 32 : _ref$size,
          _ref$text = _ref.text,
          text = void 0 === _ref$text ? 'Loading...' : _ref$text,
          rest = _objectWithoutProperties(_ref, _excluded),
          reduceMotion = (0, use_reduced_motion.J)(),
          hasMounted = (0, hooks.f3)(),
          renderScreenReaderTextPortal = function () {
            if (hasMounted)
              return (0, react_dom.createPortal)(
                (0, jsx_runtime.jsx)(VisuallyHidden.T, {
                  className: 'loader-announcement',
                  'aria-live': 'assertive',
                  children: text,
                }),
                document.getElementById('portal-root')
              );
          };
        if (reduceMotion)
          return (0, jsx_runtime.jsxs)(
            Text.x,
            Object.assign(
              {
                className: (0, utils_style.Sh)(Loader_Loader_module.text, className),
                weight: 'medium',
              },
              rest,
              { children: [text, renderScreenReaderTextPortal()] }
            )
          );
        var gapSize = Math.round((size / 3) * 0.2),
          spanSize = Math.round(size / 3 - 2 * gapSize - 1);
        return (0, jsx_runtime.jsxs)(
          'div',
          Object.assign(
            {
              className: (0, utils_style.Sh)(Loader_Loader_module.loader, className),
              style: (0, utils_style.Fh)({ size, spanSize, gapSize }, style),
            },
            rest,
            {
              children: [
                (0, jsx_runtime.jsxs)('div', {
                  className: Loader_Loader_module.content,
                  children: [
                    (0, jsx_runtime.jsx)('div', { className: Loader_Loader_module.span }),
                    (0, jsx_runtime.jsx)('div', { className: Loader_Loader_module.span }),
                    (0, jsx_runtime.jsx)('div', { className: Loader_Loader_module.span }),
                  ],
                }),
                renderScreenReaderTextPortal(),
              ],
            }
          )
        );
      };
      (Loader.displayName = 'Loader'),
        (Loader.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'Loader',
          props: {
            size: { defaultValue: { value: '32', computed: !1 }, required: !1 },
            text: { defaultValue: { value: "'Loading...'", computed: !1 }, required: !1 },
          },
        }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES['src/components/Loader/Loader.js'] = {
            name: 'Loader',
            docgenInfo: Loader.__docgenInfo,
            path: 'src/components/Loader/Loader.js',
          });
    },
    './src/components/Model/Model.stories.js': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Laptop: () => Laptop,
          Phone: () => Phone,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => Model_stories,
        });
      const gamestack_list_large = {
          src: 'static/media/gamestack-list-large.3ad53003.jpg',
          height: 1624,
          width: 750,
          blurDataURL: 'static/media/gamestack-list-large.3ad53003.jpg',
        },
        gamestack_list_placeholder = {
          src: 'static/media/gamestack-list-placeholder.6f38a1ad.jpg',
          height: 69,
          width: 32,
          blurDataURL: 'static/media/gamestack-list-placeholder.6f38a1ad.jpg',
        },
        gamestack_list = {
          src: 'static/media/gamestack-list.42ee35ee.jpg',
          height: 812,
          width: 375,
          blurDataURL: 'static/media/gamestack-list.42ee35ee.jpg',
        },
        gamestack_login_large = {
          src: 'static/media/gamestack-login-large.e7ae2cc6.jpg',
          height: 1624,
          width: 750,
          blurDataURL: 'static/media/gamestack-login-large.e7ae2cc6.jpg',
        },
        gamestack_login_placeholder = {
          src: 'static/media/gamestack-login-placeholder.ed7dfb90.jpg',
          height: 69,
          width: 32,
          blurDataURL: 'static/media/gamestack-login-placeholder.ed7dfb90.jpg',
        },
        gamestack_login = {
          src: 'static/media/gamestack-login.4ef67fc8.jpg',
          height: 812,
          width: 375,
          blurDataURL: 'static/media/gamestack-login.4ef67fc8.jpg',
        },
        spr_lesson_builder_dark_large = {
          src: 'static/media/spr-lesson-builder-dark-large.61fac4f6.jpg',
          height: 1600,
          width: 2560,
          blurDataURL: 'static/media/spr-lesson-builder-dark-large.61fac4f6.jpg',
        },
        spr_lesson_builder_dark_placeholder = {
          src: 'static/media/spr-lesson-builder-dark-placeholder.444f4000.jpg',
          height: 20,
          width: 32,
          blurDataURL: 'static/media/spr-lesson-builder-dark-placeholder.444f4000.jpg',
        };
      var use_reduced_motion = __webpack_require__(
          './node_modules/framer-motion/dist/es/utils/use-reduced-motion.mjs'
        ),
        use_spring = __webpack_require__(
          './node_modules/framer-motion/dist/es/value/use-spring.mjs'
        ),
        animate = __webpack_require__(
          './node_modules/framer-motion/dist/es/animation/animate.mjs'
        ),
        hooks = __webpack_require__('./src/hooks/index.js'),
        react = __webpack_require__('./node_modules/react/index.js'),
        three_module = __webpack_require__('./node_modules/three/build/three.module.js'),
        HorizontalBlurShader = __webpack_require__(
          './node_modules/three-stdlib/shaders/HorizontalBlurShader.js'
        ),
        VerticalBlurShader = __webpack_require__(
          './node_modules/three-stdlib/shaders/VerticalBlurShader.js'
        ),
        utils_image = __webpack_require__('./src/utils/image.js'),
        utils_style = __webpack_require__('./src/utils/style.js'),
        three = __webpack_require__('./src/utils/three.js'),
        injectStylesIntoStyleTag = __webpack_require__(
          './node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js'
        ),
        injectStylesIntoStyleTag_default = __webpack_require__.n(
          injectStylesIntoStyleTag
        ),
        Model_module = __webpack_require__(
          './node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./node_modules/postcss-loader/dist/cjs.js!./src/components/Model/Model.module.css'
        ),
        options = { insert: 'head', singleton: !1 };
      injectStylesIntoStyleTag_default()(Model_module.Z, options);
      const Model_Model_module = Model_module.Z.locals || {},
        iphone_11_namespaceObject = __webpack_require__.p + 'c65fb73abfcdd270a2b5.glb',
        macbook_pro_namespaceObject = __webpack_require__.p + '56181f6726582fd878a2.glb';
      var ModelAnimationType_SpringUp = 'spring-up',
        ModelAnimationType_LaptopOpen = 'laptop-open',
        deviceModels = {
          phone: {
            url: iphone_11_namespaceObject,
            width: 374,
            height: 512,
            position: { x: 0, y: 0, z: 0 },
            animation: ModelAnimationType_SpringUp,
          },
          laptop: {
            url: macbook_pro_namespaceObject,
            width: 1280,
            height: 800,
            position: { x: 0, y: 0, z: 0 },
            animation: ModelAnimationType_LaptopOpen,
          },
        },
        jsx_runtime = __webpack_require__('./node_modules/react/jsx-runtime.js'),
        _excluded = [
          'models',
          'show',
          'showDelay',
          'cameraPosition',
          'style',
          'className',
          'alt',
        ];
      function _toConsumableArray(arr) {
        return (
          (function _arrayWithoutHoles(arr) {
            if (Array.isArray(arr)) return _arrayLikeToArray(arr);
          })(arr) ||
          (function _iterableToArray(iter) {
            if (
              ('undefined' != typeof Symbol && null != iter[Symbol.iterator]) ||
              null != iter['@@iterator']
            )
              return Array.from(iter);
          })(arr) ||
          _unsupportedIterableToArray(arr) ||
          (function _nonIterableSpread() {
            throw new TypeError(
              'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      function _slicedToArray(arr, i) {
        return (
          (function _arrayWithHoles(arr) {
            if (Array.isArray(arr)) return arr;
          })(arr) ||
          (function _iterableToArrayLimit(arr, i) {
            var _i =
              null == arr
                ? null
                : ('undefined' != typeof Symbol && arr[Symbol.iterator]) ||
                  arr['@@iterator'];
            if (null == _i) return;
            var _s,
              _e,
              _arr = [],
              _n = !0,
              _d = !1;
            try {
              for (
                _i = _i.call(arr);
                !(_n = (_s = _i.next()).done) &&
                (_arr.push(_s.value), !i || _arr.length !== i);
                _n = !0
              );
            } catch (err) {
              (_d = !0), (_e = err);
            } finally {
              try {
                _n || null == _i.return || _i.return();
              } finally {
                if (_d) throw _e;
              }
            }
            return _arr;
          })(arr, i) ||
          _unsupportedIterableToArray(arr, i) ||
          (function _nonIterableRest() {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      function _unsupportedIterableToArray(o, minLen) {
        if (o) {
          if ('string' == typeof o) return _arrayLikeToArray(o, minLen);
          var n = Object.prototype.toString.call(o).slice(8, -1);
          return (
            'Object' === n && o.constructor && (n = o.constructor.name),
            'Map' === n || 'Set' === n
              ? Array.from(o)
              : 'Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              ? _arrayLikeToArray(o, minLen)
              : void 0
          );
        }
      }
      function _arrayLikeToArray(arr, len) {
        (null == len || len > arr.length) && (len = arr.length);
        for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
        return arr2;
      }
      function _objectWithoutProperties(source, excluded) {
        if (null == source) return {};
        var key,
          i,
          target = (function _objectWithoutPropertiesLoose(source, excluded) {
            if (null == source) return {};
            var key,
              i,
              target = {},
              sourceKeys = Object.keys(source);
            for (i = 0; i < sourceKeys.length; i++)
              (key = sourceKeys[i]),
                excluded.indexOf(key) >= 0 || (target[key] = source[key]);
            return target;
          })(source, excluded);
        if (Object.getOwnPropertySymbols) {
          var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
          for (i = 0; i < sourceSymbolKeys.length; i++)
            (key = sourceSymbolKeys[i]),
              excluded.indexOf(key) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(source, key) &&
                  (target[key] = source[key]));
        }
        return target;
      }
      var MeshType_Frame = 'Frame',
        MeshType_Screen = 'Screen',
        rotationSpringConfig = {
          stiffness: 40,
          damping: 20,
          mass: 1.4,
          restSpeed: 0.001,
        },
        Model = function (_ref) {
          var models = _ref.models,
            _ref$show = _ref.show,
            show = void 0 === _ref$show || _ref$show,
            _ref$showDelay = _ref.showDelay,
            showDelay = void 0 === _ref$showDelay ? 0 : _ref$showDelay,
            _ref$cameraPosition = _ref.cameraPosition,
            cameraPosition =
              void 0 === _ref$cameraPosition ? { x: 0, y: 0, z: 8 } : _ref$cameraPosition,
            style = _ref.style,
            className = _ref.className,
            alt = _ref.alt,
            rest = _objectWithoutProperties(_ref, _excluded),
            _useState2 = _slicedToArray((0, react.useState)(!1), 2),
            loaded = _useState2[0],
            setLoaded = _useState2[1],
            container = (0, react.useRef)(),
            canvas = (0, react.useRef)(),
            camera = (0, react.useRef)(),
            modelGroup = (0, react.useRef)(),
            scene = (0, react.useRef)(),
            renderer = (0, react.useRef)(),
            shadowGroup = (0, react.useRef)(),
            renderTarget = (0, react.useRef)(),
            renderTargetBlur = (0, react.useRef)(),
            shadowCamera = (0, react.useRef)(),
            depthMaterial = (0, react.useRef)(),
            horizontalBlurMaterial = (0, react.useRef)(),
            verticalBlurMaterial = (0, react.useRef)(),
            plane = (0, react.useRef)(),
            lights = (0, react.useRef)(),
            blurPlane = (0, react.useRef)(),
            fillPlane = (0, react.useRef)(),
            isInViewport = (0, hooks.NM)(container, !1, { threshold: 0.2 }),
            reduceMotion = (0, use_reduced_motion.J)(),
            rotationX = (0, use_spring.q)(0, rotationSpringConfig),
            rotationY = (0, use_spring.q)(0, rotationSpringConfig);
          (0, react.useEffect)(function () {
            var _container$current = container.current,
              clientWidth = _container$current.clientWidth,
              clientHeight = _container$current.clientHeight;
            (renderer.current = new three_module.CP7({
              canvas: canvas.current,
              alpha: !0,
              antialias: !1,
              powerPreference: 'high-performance',
              failIfMajorPerformanceCaveat: !0,
            })),
              renderer.current.setPixelRatio(2),
              renderer.current.setSize(clientWidth, clientHeight),
              (renderer.current.outputEncoding = three_module.knz),
              (renderer.current.physicallyCorrectLights = !0),
              (camera.current = new three_module.cPb(
                36,
                clientWidth / clientHeight,
                0.1,
                100
              )),
              camera.current.position.set(
                cameraPosition.x,
                cameraPosition.y,
                cameraPosition.z
              ),
              (scene.current = new three_module.xsS()),
              (modelGroup.current = new three_module.ZAu()),
              scene.current.add(modelGroup.current);
            var ambientLight = new three_module.Mig(16777215, 1.2),
              keyLight = new three_module.Ox3(16777215, 1.1),
              fillLight = new three_module.Ox3(16777215, 0.8);
            fillLight.position.set(-6, 2, 2),
              keyLight.position.set(0.5, 0, 0.866),
              (lights.current = [ambientLight, keyLight, fillLight]),
              lights.current.forEach(function (light) {
                return scene.current.add(light);
              }),
              (shadowGroup.current = new three_module.ZAu()),
              scene.current.add(shadowGroup.current),
              shadowGroup.current.position.set(0, 0, -0.8),
              shadowGroup.current.rotateX(Math.PI / 2);
            (renderTarget.current = new three_module.dd2(512, 512)),
              (renderTarget.current.texture.generateMipmaps = !1),
              (renderTargetBlur.current = new three_module.dd2(512, 512)),
              (renderTargetBlur.current.texture.generateMipmaps = !1);
            var planeGeometry = new three_module.BKK(8, 8).rotateX(Math.PI / 2),
              planeMaterial = new three_module.vBJ({
                map: renderTarget.current.texture,
                opacity: 0.8,
                transparent: !0,
              });
            (plane.current = new three_module.Kj0(planeGeometry, planeMaterial)),
              (plane.current.scale.y = -1),
              shadowGroup.current.add(plane.current),
              (blurPlane.current = new three_module.Kj0(planeGeometry)),
              (blurPlane.current.visible = !1),
              shadowGroup.current.add(blurPlane.current);
            var fillMaterial = new three_module.vBJ({
              color: 16777215,
              opacity: 0,
              transparent: !0,
            });
            (fillPlane.current = new three_module.Kj0(planeGeometry, fillMaterial)),
              fillPlane.current.rotateX(Math.PI),
              (fillPlane.current.position.y -= 1e-5),
              shadowGroup.current.add(fillPlane.current),
              (shadowCamera.current = new three_module.iKG(-4, 4, 4, -4, 0, 1.5)),
              (shadowCamera.current.rotation.x = Math.PI / 2),
              shadowGroup.current.add(shadowCamera.current),
              (depthMaterial.current = new three_module.lRF()),
              (depthMaterial.current.userData.darkness = { value: 3 }),
              (depthMaterial.current.onBeforeCompile = function (shader) {
                (shader.uniforms.darkness = depthMaterial.current.userData.darkness),
                  (shader.fragmentShader = `\n        uniform float darkness;\n        ${shader.fragmentShader.replace(
                    'gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );',
                    'gl_FragColor = vec4( vec3( 0.0 ), ( 1.0 - fragCoordZ ) * darkness );'
                  )}\n      `);
              }),
              (depthMaterial.current.depthTest = !1),
              (depthMaterial.current.depthWrite = !1),
              (horizontalBlurMaterial.current = new three_module.jyz(
                HorizontalBlurShader.P
              )),
              (horizontalBlurMaterial.current.depthTest = !1),
              (verticalBlurMaterial.current = new three_module.jyz(VerticalBlurShader.Z)),
              (verticalBlurMaterial.current.depthTest = !1);
            var unsubscribeX = rotationX.onChange(renderFrame),
              unsubscribeY = rotationY.onChange(renderFrame);
            return function () {
              renderTarget.current.dispose(),
                renderTargetBlur.current.dispose(),
                (0, three.Ji)(lights.current),
                (0, three.in)(scene.current),
                (0, three.e8)(renderer.current),
                unsubscribeX(),
                unsubscribeY();
            };
          }, []);
          var blurShadow = (0, react.useCallback)(function (amount) {
              (blurPlane.current.visible = !0),
                (blurPlane.current.material = horizontalBlurMaterial.current),
                (blurPlane.current.material.uniforms.tDiffuse.value =
                  renderTarget.current.texture),
                (horizontalBlurMaterial.current.uniforms.h.value = amount * (1 / 256)),
                renderer.current.setRenderTarget(renderTargetBlur.current),
                renderer.current.render(blurPlane.current, shadowCamera.current),
                (blurPlane.current.material = verticalBlurMaterial.current),
                (blurPlane.current.material.uniforms.tDiffuse.value =
                  renderTargetBlur.current.texture),
                (verticalBlurMaterial.current.uniforms.v.value = amount * (1 / 256)),
                renderer.current.setRenderTarget(renderTarget.current),
                renderer.current.render(blurPlane.current, shadowCamera.current),
                (blurPlane.current.visible = !1);
            }, []),
            renderFrame = (0, react.useCallback)(
              function () {
                var initialBackground = scene.current.background;
                (scene.current.background = null),
                  (scene.current.overrideMaterial = depthMaterial.current),
                  renderer.current.setRenderTarget(renderTarget.current),
                  renderer.current.render(scene.current, shadowCamera.current),
                  (scene.current.overrideMaterial = null),
                  blurShadow(5),
                  blurShadow(2),
                  renderer.current.setRenderTarget(null),
                  (scene.current.background = initialBackground),
                  (modelGroup.current.rotation.x = rotationX.get()),
                  (modelGroup.current.rotation.y = rotationY.get()),
                  renderer.current.render(scene.current, camera.current);
              },
              [blurShadow, rotationX, rotationY]
            );
          return (
            (0, react.useEffect)(
              function () {
                var onMouseMove = function (event) {
                  var _window = window,
                    innerWidth = _window.innerWidth,
                    innerHeight = _window.innerHeight,
                    position_x = (event.clientX - innerWidth / 2) / innerWidth,
                    position_y = (event.clientY - innerHeight / 2) / innerHeight;
                  rotationY.set(position_x / 2), rotationX.set(position_y / 2);
                };
                return (
                  isInViewport &&
                    !reduceMotion &&
                    window.addEventListener('mousemove', onMouseMove),
                  function () {
                    window.removeEventListener('mousemove', onMouseMove);
                  }
                );
              },
              [isInViewport, reduceMotion, rotationX, rotationY]
            ),
            (0, react.useEffect)(
              function () {
                var handleResize = function () {
                  if (container.current) {
                    var _container$current2 = container.current,
                      clientWidth = _container$current2.clientWidth,
                      clientHeight = _container$current2.clientHeight;
                    renderer.current.setSize(clientWidth, clientHeight),
                      (camera.current.aspect = clientWidth / clientHeight),
                      camera.current.updateProjectionMatrix(),
                      renderFrame();
                  }
                };
                return (
                  window.addEventListener('resize', handleResize),
                  handleResize(),
                  function () {
                    window.removeEventListener('resize', handleResize);
                  }
                );
              },
              [renderFrame]
            ),
            (0, jsx_runtime.jsxs)(
              'div',
              Object.assign(
                {
                  className: (0, utils_style.Sh)(Model_Model_module.model, className),
                  'data-loaded': loaded,
                  style: (0, utils_style.Fh)(
                    { delay: (0, utils_style.aU)(showDelay) },
                    style
                  ),
                  ref: container,
                  role: 'img',
                  'aria-label': alt,
                },
                rest,
                {
                  children: [
                    (0, jsx_runtime.jsx)('canvas', {
                      className: Model_Model_module.canvas,
                      ref: canvas,
                    }),
                    models.map(function (model, index) {
                      return (0,
                      jsx_runtime.jsx)(Device, { renderer, modelGroup, show, showDelay, renderFrame, index, setLoaded, model }, JSON.stringify(model.position));
                    }),
                  ],
                }
              )
            )
          );
        };
      Model.displayName = 'Model';
      var Device = function (_ref2) {
        var renderer = _ref2.renderer,
          model = _ref2.model,
          modelGroup = _ref2.modelGroup,
          renderFrame = _ref2.renderFrame,
          index = _ref2.index,
          showDelay = _ref2.showDelay,
          setLoaded = _ref2.setLoaded,
          show = _ref2.show,
          _useState4 = _slicedToArray((0, react.useState)(), 2),
          loadDevice = _useState4[0],
          setLoadDevice = _useState4[1],
          reduceMotion = (0, use_reduced_motion.J)(),
          placeholderScreen = (0, react.createRef)();
        (0, react.useEffect)(function () {
          var applyScreenTexture = async function (texture, node) {
            (texture.encoding = three_module.knz),
              (texture.flipY = !1),
              (texture.anisotropy = renderer.current.capabilities.getMaxAnisotropy()),
              (texture.generateMipmaps = !1),
              await renderer.current.initTexture(texture),
              (node.material.color = new three_module.Ilk(16777215)),
              (node.material.transparent = !0),
              (node.material.map = texture);
          };
          setLoadDevice({
            start: async function () {
              var loadFullResTexture,
                playAnimation,
                texture = model.texture,
                position = model.position,
                url = model.url,
                _await$Promise$all2 = _slicedToArray(
                  await Promise.all([
                    await three.Et.loadAsync(texture.placeholder.src),
                    await three.Zf.loadAsync(url),
                  ]),
                  2
                ),
                placeholder = _await$Promise$all2[0],
                gltf = _await$Promise$all2[1];
              modelGroup.current.add(gltf.scene),
                gltf.scene.traverse(async function (node) {
                  node.material &&
                    ((node.material.color = new three_module.Ilk(2039845)),
                    node.material.color.convertSRGBToLinear()),
                    node.name === MeshType_Screen &&
                      ((placeholderScreen.current = node.clone()),
                      (placeholderScreen.current.material = node.material.clone()),
                      node.parent.add(placeholderScreen.current),
                      (placeholderScreen.current.material.opacity = 1),
                      (placeholderScreen.current.position.z += 0.001),
                      applyScreenTexture(placeholder, placeholderScreen.current),
                      (loadFullResTexture = async function () {
                        var image = await (0, utils_image.Ro)(texture),
                          fullSize = await three.Et.loadAsync(image);
                        await applyScreenTexture(fullSize, node),
                          (0, animate.j)(1, 0, {
                            onUpdate: function (value) {
                              (placeholderScreen.current.material.opacity = value),
                                renderFrame();
                            },
                          });
                      }));
                });
              var _gltf$scene$position,
                targetPosition = new three_module.Pa4(position.x, position.y, position.z);
              reduceMotion &&
                (_gltf$scene$position = gltf.scene.position).set.apply(
                  _gltf$scene$position,
                  _toConsumableArray(targetPosition.toArray())
                );
              return (
                model.animation === ModelAnimationType_SpringUp &&
                  (playAnimation = function () {
                    var _gltf$scene$position2,
                      startPosition = new three_module.Pa4(
                        targetPosition.x,
                        targetPosition.y - 1,
                        targetPosition.z
                      );
                    (_gltf$scene$position2 = gltf.scene.position).set.apply(
                      _gltf$scene$position2,
                      _toConsumableArray(startPosition.toArray())
                    ),
                      (0, animate.j)(startPosition.y, targetPosition.y, {
                        type: 'spring',
                        delay: (300 * index + showDelay) / 1e3,
                        stiffness: 60,
                        damping: 20,
                        mass: 1,
                        restSpeed: 1e-4,
                        restDelta: 1e-4,
                        onUpdate: function (value) {
                          (gltf.scene.position.y = value), renderFrame();
                        },
                      });
                  }),
                model.animation === ModelAnimationType_LaptopOpen &&
                  (playAnimation = function () {
                    var _gltf$scene$position3,
                      _frameNode$rotation,
                      frameNode = gltf.scene.children.find(function (node) {
                        return node.name === MeshType_Frame;
                      }),
                      startRotation = new three_module.Pa4(
                        three_module.M8C.degToRad(90),
                        0,
                        0
                      ),
                      endRotation = new three_module.Pa4(0, 0, 0);
                    return (
                      (_gltf$scene$position3 = gltf.scene.position).set.apply(
                        _gltf$scene$position3,
                        _toConsumableArray(targetPosition.toArray())
                      ),
                      (_frameNode$rotation = frameNode.rotation).set.apply(
                        _frameNode$rotation,
                        _toConsumableArray(startRotation.toArray())
                      ),
                      (0, animate.j)(startRotation.x, endRotation.x, {
                        type: 'spring',
                        delay: (300 * index + showDelay + 300) / 1e3,
                        stiffness: 80,
                        damping: 20,
                        restSpeed: 1e-4,
                        restDelta: 1e-4,
                        onUpdate: function (value) {
                          (frameNode.rotation.x = value), renderFrame();
                        },
                      })
                    );
                  }),
                { loadFullResTexture, playAnimation }
              );
            },
          });
        }, []),
          (0, react.useEffect)(
            function () {
              if (loadDevice && show) {
                var animation;
                return (
                  (0, react.startTransition)(function () {
                    !(async function () {
                      var _await$loadDevice$sta = await loadDevice.start(),
                        loadFullResTexture = _await$loadDevice$sta.loadFullResTexture,
                        playAnimation = _await$loadDevice$sta.playAnimation;
                      setLoaded(!0),
                        reduceMotion || (animation = playAnimation()),
                        await loadFullResTexture(),
                        reduceMotion && renderFrame();
                    })();
                  }),
                  function () {
                    var _animation;
                    null === (_animation = animation) ||
                      void 0 === _animation ||
                      _animation.stop();
                  }
                );
              }
            },
            [loadDevice, show]
          );
      };
      (Model.__docgenInfo = {
        description: '',
        methods: [],
        displayName: 'Model',
        props: {
          show: { defaultValue: { value: 'true', computed: !1 }, required: !1 },
          showDelay: { defaultValue: { value: '0', computed: !1 }, required: !1 },
          cameraPosition: {
            defaultValue: { value: '{ x: 0, y: 0, z: 8 }', computed: !1 },
            required: !1,
          },
        },
      }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES['src/components/Model/Model.js'] = {
            name: 'Model',
            docgenInfo: Model.__docgenInfo,
            path: 'src/components/Model/Model.js',
          });
      var StoryContainer = __webpack_require__('./.storybook/StoryContainer.js');
      const Model_stories = { title: 'Model' };
      var modelStyle = { position: 'absolute', top: 0, right: 0, bottom: 0, left: 0 },
        Phone = function () {
          return (0, jsx_runtime.jsx)(StoryContainer.y, {
            padding: 0,
            children: (0, jsx_runtime.jsx)(Model, {
              style: modelStyle,
              cameraPosition: { x: 0, y: 0, z: 11.5 },
              alt: 'Phone models',
              models: [
                Object.assign({}, deviceModels.phone, {
                  position: { x: -0.6, y: 0.8, z: 0.1 },
                  texture: {
                    srcSet: [gamestack_login, gamestack_login_large],
                    placeholder: gamestack_login_placeholder,
                  },
                }),
                Object.assign({}, deviceModels.phone, {
                  position: { x: 0.6, y: -0.8, z: 0.4 },
                  texture: {
                    srcSet: [gamestack_list, gamestack_list_large],
                    placeholder: gamestack_list_placeholder,
                  },
                }),
              ],
            }),
          });
        };
      Phone.displayName = 'Phone';
      var Laptop = function () {
        return (0, jsx_runtime.jsx)(StoryContainer.y, {
          padding: 0,
          children: (0, jsx_runtime.jsx)(Model, {
            style: modelStyle,
            cameraPosition: { x: 0, y: 0, z: 8 },
            alt: 'Laptop model',
            models: [
              Object.assign({}, deviceModels.laptop, {
                position: { x: 0, y: 0, z: 0 },
                texture: {
                  srcSet: [spr_lesson_builder_dark_large, spr_lesson_builder_dark_large],
                  placeholder: spr_lesson_builder_dark_placeholder,
                },
              }),
            ],
          }),
        });
      };
      Laptop.displayName = 'Laptop';
      var __namedExportsOrder = ['Phone', 'Laptop'];
      (Phone.__docgenInfo = { description: '', methods: [], displayName: 'Phone' }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES['src/components/Model/Model.stories.js'] = {
            name: 'Phone',
            docgenInfo: Phone.__docgenInfo,
            path: 'src/components/Model/Model.stories.js',
          }),
        (Laptop.__docgenInfo = { description: '', methods: [], displayName: 'Laptop' }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES['src/components/Model/Model.stories.js'] = {
            name: 'Laptop',
            docgenInfo: Laptop.__docgenInfo,
            path: 'src/components/Model/Model.stories.js',
          });
    },
    './src/components/Monogram/Monogram.stories.js': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Default: () => Default,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => __WEBPACK_DEFAULT_EXPORT__,
        });
      var components_Monogram__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          './src/components/Monogram/index.js'
        ),
        _storybook_StoryContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          './.storybook/StoryContainer.js'
        ),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          './node_modules/react/jsx-runtime.js'
        );
      const __WEBPACK_DEFAULT_EXPORT__ = { title: 'Monogram' };
      var Default = function () {
        return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
          _storybook_StoryContainer__WEBPACK_IMPORTED_MODULE_1__.y,
          {
            children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
              components_Monogram__WEBPACK_IMPORTED_MODULE_0__.Y,
              { highlight: !0 }
            ),
          }
        );
      };
      Default.displayName = 'Default';
      var __namedExportsOrder = ['Default'];
      (Default.__docgenInfo = { description: '', methods: [], displayName: 'Default' }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES['src/components/Monogram/Monogram.stories.js'] = {
            name: 'Default',
            docgenInfo: Default.__docgenInfo,
            path: 'src/components/Monogram/Monogram.stories.js',
          });
    },
    './src/components/Monogram/index.js': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      'use strict';
      __webpack_require__.d(__webpack_exports__, { Y: () => Monogram });
      var react = __webpack_require__('./node_modules/react/index.js'),
        style = __webpack_require__('./src/utils/style.js'),
        injectStylesIntoStyleTag = __webpack_require__(
          './node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js'
        ),
        injectStylesIntoStyleTag_default = __webpack_require__.n(
          injectStylesIntoStyleTag
        ),
        Monogram_module = __webpack_require__(
          './node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./node_modules/postcss-loader/dist/cjs.js!./src/components/Monogram/Monogram.module.css'
        ),
        options = { insert: 'head', singleton: !1 };
      injectStylesIntoStyleTag_default()(Monogram_module.Z, options);
      const Monogram_Monogram_module = Monogram_module.Z.locals || {};
      var jsx_runtime = __webpack_require__('./node_modules/react/jsx-runtime.js'),
        _excluded = ['highlight', 'className'];
      function _objectWithoutProperties(source, excluded) {
        if (null == source) return {};
        var key,
          i,
          target = (function _objectWithoutPropertiesLoose(source, excluded) {
            if (null == source) return {};
            var key,
              i,
              target = {},
              sourceKeys = Object.keys(source);
            for (i = 0; i < sourceKeys.length; i++)
              (key = sourceKeys[i]),
                excluded.indexOf(key) >= 0 || (target[key] = source[key]);
            return target;
          })(source, excluded);
        if (Object.getOwnPropertySymbols) {
          var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
          for (i = 0; i < sourceSymbolKeys.length; i++)
            (key = sourceSymbolKeys[i]),
              excluded.indexOf(key) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(source, key) &&
                  (target[key] = source[key]));
        }
        return target;
      }
      var Monogram = (0, react.forwardRef)(function (_ref, ref) {
        var highlight = _ref.highlight,
          className = _ref.className,
          props = _objectWithoutProperties(_ref, _excluded),
          clipId = `${(0, react.useId)()}monogram-clip`;
        return (0,
        jsx_runtime.jsxs)('svg', Object.assign({ 'aria-hidden': !0, className: (0, style.Sh)(Monogram_Monogram_module.monogram, className), width: '46', height: '29', viewBox: '0 0 46 29', ref }, props, { children: [(0, jsx_runtime.jsx)('defs', { children: (0, jsx_runtime.jsx)('clipPath', { id: clipId, children: (0, jsx_runtime.jsx)('path', { d: 'M16.525 28.462l7.18-18.35.003-.001 9.72 18.442a.838.838 0 001.524-.093l3.39-8.824a.846.846 0 00-.04-.686L30.307 3.605A6.698 6.698 0 0024.367 0h-4.6a.84.84 0 00-.74 1.23l3.63 6.887-3.655 9.15-7.12-13.662A6.698 6.698 0 005.942 0h-4.6a.842.842 0 00-.748 1.23L15 28.554a.839.839 0 001.524-.092zM42.392 8.806a.835.835 0 00.387-.446v.001l2.67-7.23a.838.838 0 00-.785-1.129h-6.578a.837.837 0 00-.736 1.238l3.907 7.226c.22.41.729.56 1.135.34z' }) }) }), (0, jsx_runtime.jsx)('rect', { clipPath: `url(#${clipId})`, width: '100%', height: '100%' }), highlight && (0, jsx_runtime.jsx)('g', { clipPath: `url(#${clipId})`, children: (0, jsx_runtime.jsx)('rect', { className: Monogram_Monogram_module.highlight, width: '100%', height: '100%' }) })] }));
      });
      (Monogram.__docgenInfo = { description: '', methods: [], displayName: 'Monogram' }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES['src/components/Monogram/Monogram.js'] = {
            name: 'Monogram',
            docgenInfo: Monogram.__docgenInfo,
            path: 'src/components/Monogram/Monogram.js',
          });
    },
    './src/components/SegmentedControl/SegmentedControl.stories.js': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Default: () => Default,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => SegmentedControl_stories,
        });
      var VisuallyHidden = __webpack_require__(
          './src/components/VisuallyHidden/index.js'
        ),
        react = __webpack_require__('./node_modules/react/index.js'),
        style = __webpack_require__('./src/utils/style.js'),
        injectStylesIntoStyleTag = __webpack_require__(
          './node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js'
        ),
        injectStylesIntoStyleTag_default = __webpack_require__.n(
          injectStylesIntoStyleTag
        ),
        SegmentedControl_module = __webpack_require__(
          './node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./node_modules/postcss-loader/dist/cjs.js!./src/components/SegmentedControl/SegmentedControl.module.css'
        ),
        options = { insert: 'head', singleton: !1 };
      injectStylesIntoStyleTag_default()(SegmentedControl_module.Z, options);
      const SegmentedControl_SegmentedControl_module =
        SegmentedControl_module.Z.locals || {};
      var jsx_runtime = __webpack_require__('./node_modules/react/jsx-runtime.js'),
        _excluded = ['children', 'currentIndex', 'onChange', 'label'],
        _excluded2 = ['children'];
      function _toConsumableArray(arr) {
        return (
          (function _arrayWithoutHoles(arr) {
            if (Array.isArray(arr)) return _arrayLikeToArray(arr);
          })(arr) ||
          (function _iterableToArray(iter) {
            if (
              ('undefined' != typeof Symbol && null != iter[Symbol.iterator]) ||
              null != iter['@@iterator']
            )
              return Array.from(iter);
          })(arr) ||
          _unsupportedIterableToArray(arr) ||
          (function _nonIterableSpread() {
            throw new TypeError(
              'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      function _slicedToArray(arr, i) {
        return (
          (function _arrayWithHoles(arr) {
            if (Array.isArray(arr)) return arr;
          })(arr) ||
          (function _iterableToArrayLimit(arr, i) {
            var _i =
              null == arr
                ? null
                : ('undefined' != typeof Symbol && arr[Symbol.iterator]) ||
                  arr['@@iterator'];
            if (null == _i) return;
            var _s,
              _e,
              _arr = [],
              _n = !0,
              _d = !1;
            try {
              for (
                _i = _i.call(arr);
                !(_n = (_s = _i.next()).done) &&
                (_arr.push(_s.value), !i || _arr.length !== i);
                _n = !0
              );
            } catch (err) {
              (_d = !0), (_e = err);
            } finally {
              try {
                _n || null == _i.return || _i.return();
              } finally {
                if (_d) throw _e;
              }
            }
            return _arr;
          })(arr, i) ||
          _unsupportedIterableToArray(arr, i) ||
          (function _nonIterableRest() {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      function _unsupportedIterableToArray(o, minLen) {
        if (o) {
          if ('string' == typeof o) return _arrayLikeToArray(o, minLen);
          var n = Object.prototype.toString.call(o).slice(8, -1);
          return (
            'Object' === n && o.constructor && (n = o.constructor.name),
            'Map' === n || 'Set' === n
              ? Array.from(o)
              : 'Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              ? _arrayLikeToArray(o, minLen)
              : void 0
          );
        }
      }
      function _arrayLikeToArray(arr, len) {
        (null == len || len > arr.length) && (len = arr.length);
        for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
        return arr2;
      }
      function _objectWithoutProperties(source, excluded) {
        if (null == source) return {};
        var key,
          i,
          target = (function _objectWithoutPropertiesLoose(source, excluded) {
            if (null == source) return {};
            var key,
              i,
              target = {},
              sourceKeys = Object.keys(source);
            for (i = 0; i < sourceKeys.length; i++)
              (key = sourceKeys[i]),
                excluded.indexOf(key) >= 0 || (target[key] = source[key]);
            return target;
          })(source, excluded);
        if (Object.getOwnPropertySymbols) {
          var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
          for (i = 0; i < sourceSymbolKeys.length; i++)
            (key = sourceSymbolKeys[i]),
              excluded.indexOf(key) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(source, key) &&
                  (target[key] = source[key]));
        }
        return target;
      }
      var SegmentedControlContext = (0, react.createContext)({}),
        SegmentedControl = function (_ref) {
          var children = _ref.children,
            currentIndex = _ref.currentIndex,
            onChange = _ref.onChange,
            label = _ref.label,
            props = _objectWithoutProperties(_ref, _excluded),
            labelId = `${(0, react.useId)()}segmented-control-label`,
            optionRefs = (0, react.useRef)([]),
            _useState2 = _slicedToArray((0, react.useState)(), 2),
            indicator = _useState2[0],
            setIndicator = _useState2[1],
            registerOption = (0, react.useCallback)(function (optionRef) {
              optionRefs.current = [].concat(_toConsumableArray(optionRefs.current), [
                optionRef,
              ]);
            }, []),
            unRegisterOption = (0, react.useCallback)(function (optionRef) {
              optionRefs.current = optionRefs.current.filter(function (ref) {
                return ref !== optionRef;
              });
            }, []);
          return (
            (0, react.useEffect)(
              function () {
                var _optionRefs$current$c,
                  currentOption =
                    null === (_optionRefs$current$c = optionRefs.current[currentIndex]) ||
                    void 0 === _optionRefs$current$c
                      ? void 0
                      : _optionRefs$current$c.current,
                  resizeObserver = new ResizeObserver(function () {
                    var rect =
                        null == currentOption
                          ? void 0
                          : currentOption.getBoundingClientRect(),
                      left = null == currentOption ? void 0 : currentOption.offsetLeft;
                    setIndicator({ width: null == rect ? void 0 : rect.width, left });
                  });
                return (
                  resizeObserver.observe(currentOption),
                  function () {
                    resizeObserver.disconnect();
                  }
                );
              },
              [currentIndex]
            ),
            (0, jsx_runtime.jsx)(SegmentedControlContext.Provider, {
              value: {
                optionRefs,
                currentIndex,
                onChange,
                registerOption,
                unRegisterOption,
              },
              children: (0, jsx_runtime.jsxs)(
                'div',
                Object.assign(
                  {
                    className: SegmentedControl_SegmentedControl_module.container,
                    role: 'radiogroup',
                    'aria-labelledby': labelId,
                    onKeyDown: function (event) {
                      var length = optionRefs.current.length,
                        prevIndex = (currentIndex - 1 + length) % length,
                        nextIndex = (currentIndex + 1) % length;
                      ['ArrowLeft', 'ArrowUp'].includes(event.key)
                        ? (onChange(prevIndex),
                          optionRefs.current[prevIndex].current.focus())
                        : ['ArrowRight', 'ArrowDown'].includes(event.key) &&
                          (onChange(nextIndex),
                          optionRefs.current[nextIndex].current.focus());
                    },
                  },
                  props,
                  {
                    children: [
                      (0, jsx_runtime.jsx)(VisuallyHidden.T, {
                        as: 'label',
                        id: labelId,
                        children: label,
                      }),
                      (0, jsx_runtime.jsxs)('div', {
                        className: SegmentedControl_SegmentedControl_module.options,
                        children: [
                          !!indicator &&
                            (0, jsx_runtime.jsx)('div', {
                              className:
                                SegmentedControl_SegmentedControl_module.indicator,
                              'data-last': currentIndex === optionRefs.current.length - 1,
                              style: (0, style.Fh)(indicator),
                            }),
                          children,
                        ],
                      }),
                    ],
                  }
                )
              ),
            })
          );
        };
      SegmentedControl.displayName = 'SegmentedControl';
      var SegmentedControlOption = function (_ref2) {
        var children = _ref2.children,
          props = _objectWithoutProperties(_ref2, _excluded2),
          _useContext = (0, react.useContext)(SegmentedControlContext),
          optionRefs = _useContext.optionRefs,
          currentIndex = _useContext.currentIndex,
          onChange = _useContext.onChange,
          registerOption = _useContext.registerOption,
          unRegisterOption = _useContext.unRegisterOption,
          optionRef = (0, react.useRef)(),
          index = optionRefs.current.indexOf(optionRef),
          isSelected = currentIndex === index;
        return (
          (0, react.useEffect)(
            function () {
              return (
                registerOption(optionRef),
                function () {
                  unRegisterOption(optionRef);
                }
              );
            },
            [registerOption, unRegisterOption]
          ),
          (0, jsx_runtime.jsx)(
            'button',
            Object.assign(
              {
                className: SegmentedControl_SegmentedControl_module.button,
                tabIndex: isSelected ? 0 : -1,
                role: 'radio',
                'aria-checked': isSelected,
                onClick: function () {
                  return onChange(index);
                },
                ref: optionRef,
              },
              props,
              { children }
            )
          )
        );
      };
      (SegmentedControlOption.displayName = 'SegmentedControlOption'),
        (SegmentedControl.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'SegmentedControl',
        }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES[
            'src/components/SegmentedControl/SegmentedControl.js'
          ] = {
            name: 'SegmentedControl',
            docgenInfo: SegmentedControl.__docgenInfo,
            path: 'src/components/SegmentedControl/SegmentedControl.js',
          }),
        (SegmentedControlOption.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'SegmentedControlOption',
        }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES[
            'src/components/SegmentedControl/SegmentedControl.js'
          ] = {
            name: 'SegmentedControlOption',
            docgenInfo: SegmentedControlOption.__docgenInfo,
            path: 'src/components/SegmentedControl/SegmentedControl.js',
          });
      var StoryContainer = __webpack_require__('./.storybook/StoryContainer.js'),
        SegmentedControl_stories_excluded = ['options'];
      function SegmentedControl_stories_slicedToArray(arr, i) {
        return (
          (function SegmentedControl_stories_arrayWithHoles(arr) {
            if (Array.isArray(arr)) return arr;
          })(arr) ||
          (function SegmentedControl_stories_iterableToArrayLimit(arr, i) {
            var _i =
              null == arr
                ? null
                : ('undefined' != typeof Symbol && arr[Symbol.iterator]) ||
                  arr['@@iterator'];
            if (null == _i) return;
            var _s,
              _e,
              _arr = [],
              _n = !0,
              _d = !1;
            try {
              for (
                _i = _i.call(arr);
                !(_n = (_s = _i.next()).done) &&
                (_arr.push(_s.value), !i || _arr.length !== i);
                _n = !0
              );
            } catch (err) {
              (_d = !0), (_e = err);
            } finally {
              try {
                _n || null == _i.return || _i.return();
              } finally {
                if (_d) throw _e;
              }
            }
            return _arr;
          })(arr, i) ||
          (function SegmentedControl_stories_unsupportedIterableToArray(o, minLen) {
            if (!o) return;
            if ('string' == typeof o)
              return SegmentedControl_stories_arrayLikeToArray(o, minLen);
            var n = Object.prototype.toString.call(o).slice(8, -1);
            'Object' === n && o.constructor && (n = o.constructor.name);
            if ('Map' === n || 'Set' === n) return Array.from(o);
            if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
              return SegmentedControl_stories_arrayLikeToArray(o, minLen);
          })(arr, i) ||
          (function SegmentedControl_stories_nonIterableRest() {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      function SegmentedControl_stories_arrayLikeToArray(arr, len) {
        (null == len || len > arr.length) && (len = arr.length);
        for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
        return arr2;
      }
      function SegmentedControl_stories_objectWithoutProperties(source, excluded) {
        if (null == source) return {};
        var key,
          i,
          target = (function SegmentedControl_stories_objectWithoutPropertiesLoose(
            source,
            excluded
          ) {
            if (null == source) return {};
            var key,
              i,
              target = {},
              sourceKeys = Object.keys(source);
            for (i = 0; i < sourceKeys.length; i++)
              (key = sourceKeys[i]),
                excluded.indexOf(key) >= 0 || (target[key] = source[key]);
            return target;
          })(source, excluded);
        if (Object.getOwnPropertySymbols) {
          var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
          for (i = 0; i < sourceSymbolKeys.length; i++)
            (key = sourceSymbolKeys[i]),
              excluded.indexOf(key) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(source, key) &&
                  (target[key] = source[key]));
        }
        return target;
      }
      const SegmentedControl_stories = {
        title: 'SegmentedControl',
        args: { options: ['Option 1', 'Option 2', 'Option 3'] },
      };
      function Story(_ref) {
        var options = _ref.options,
          args = SegmentedControl_stories_objectWithoutProperties(
            _ref,
            SegmentedControl_stories_excluded
          ),
          _useState2 = SegmentedControl_stories_slicedToArray((0, react.useState)(0), 2),
          currentIndex = _useState2[0],
          setCurrentIndex = _useState2[1];
        return (0, jsx_runtime.jsx)(StoryContainer.y, {
          children: (0, jsx_runtime.jsx)(
            SegmentedControl,
            Object.assign({ currentIndex, onChange: setCurrentIndex }, args, {
              children:
                null == options
                  ? void 0
                  : options.map(function (option, index) {
                      return (0,
                      jsx_runtime.jsx)(SegmentedControlOption, { children: option }, `${option}-${index}`);
                    }),
            })
          ),
        });
      }
      Story.displayName = 'Story';
      var Default = Story.bind({}),
        __namedExportsOrder = ['Default'];
    },
    './src/components/Table/Table.stories.js': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Default: () => Default,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => Table_stories,
        });
      var injectStylesIntoStyleTag = __webpack_require__(
          './node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js'
        ),
        injectStylesIntoStyleTag_default = __webpack_require__.n(
          injectStylesIntoStyleTag
        ),
        Table_module = __webpack_require__(
          './node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./node_modules/postcss-loader/dist/cjs.js!./src/components/Table/Table.module.css'
        ),
        options = { insert: 'head', singleton: !1 };
      injectStylesIntoStyleTag_default()(Table_module.Z, options);
      const Table_Table_module = Table_module.Z.locals || {};
      var jsx_runtime = __webpack_require__('./node_modules/react/jsx-runtime.js'),
        Table = function (_ref) {
          var children = _ref.children;
          return (0, jsx_runtime.jsx)('table', {
            className: Table_Table_module.table,
            children,
          });
        };
      Table.displayName = 'Table';
      var TableRow = function (_ref2) {
        var children = _ref2.children;
        return (0, jsx_runtime.jsx)('tr', {
          className: Table_Table_module.row,
          children,
        });
      };
      TableRow.displayName = 'TableRow';
      var TableHead = function (_ref3) {
        var children = _ref3.children;
        return (0, jsx_runtime.jsx)('thead', {
          className: Table_Table_module.head,
          children,
        });
      };
      TableHead.displayName = 'TableHead';
      var TableBody = function (_ref4) {
        var children = _ref4.children;
        return (0, jsx_runtime.jsx)('tbody', {
          className: Table_Table_module.body,
          children,
        });
      };
      TableBody.displayName = 'TableBody';
      var TableHeadCell = function (_ref5) {
        var children = _ref5.children;
        return (0, jsx_runtime.jsx)('th', {
          className: Table_Table_module.headCell,
          children,
        });
      };
      TableHeadCell.displayName = 'TableHeadCell';
      var TableCell = function (_ref6) {
        var children = _ref6.children;
        return (0, jsx_runtime.jsx)('td', {
          className: Table_Table_module.cell,
          children,
        });
      };
      (TableCell.displayName = 'TableCell'),
        (Table.__docgenInfo = { description: '', methods: [], displayName: 'Table' }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES['src/components/Table/Table.js'] = {
            name: 'Table',
            docgenInfo: Table.__docgenInfo,
            path: 'src/components/Table/Table.js',
          }),
        (TableRow.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'TableRow',
        }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES['src/components/Table/Table.js'] = {
            name: 'TableRow',
            docgenInfo: TableRow.__docgenInfo,
            path: 'src/components/Table/Table.js',
          }),
        (TableHead.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'TableHead',
        }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES['src/components/Table/Table.js'] = {
            name: 'TableHead',
            docgenInfo: TableHead.__docgenInfo,
            path: 'src/components/Table/Table.js',
          }),
        (TableBody.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'TableBody',
        }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES['src/components/Table/Table.js'] = {
            name: 'TableBody',
            docgenInfo: TableBody.__docgenInfo,
            path: 'src/components/Table/Table.js',
          }),
        (TableHeadCell.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'TableHeadCell',
        }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES['src/components/Table/Table.js'] = {
            name: 'TableHeadCell',
            docgenInfo: TableHeadCell.__docgenInfo,
            path: 'src/components/Table/Table.js',
          }),
        (TableCell.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'TableCell',
        }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES['src/components/Table/Table.js'] = {
            name: 'TableCell',
            docgenInfo: TableCell.__docgenInfo,
            path: 'src/components/Table/Table.js',
          });
      var StoryContainer = __webpack_require__('./.storybook/StoryContainer.js');
      const Table_stories = { title: 'Table' };
      var Default = function () {
        return (0, jsx_runtime.jsx)(StoryContainer.y, {
          children: (0, jsx_runtime.jsxs)(Table, {
            children: [
              (0, jsx_runtime.jsx)(TableHead, {
                children: (0, jsx_runtime.jsxs)(TableRow, {
                  children: [
                    (0, jsx_runtime.jsx)(TableHeadCell, { children: 'Country' }),
                    (0, jsx_runtime.jsx)(TableHeadCell, { children: 'Capital' }),
                    (0, jsx_runtime.jsx)(TableHeadCell, { children: 'Population' }),
                  ],
                }),
              }),
              (0, jsx_runtime.jsxs)(TableBody, {
                children: [
                  (0, jsx_runtime.jsxs)(TableRow, {
                    children: [
                      (0, jsx_runtime.jsx)(TableCell, { children: 'USA' }),
                      (0, jsx_runtime.jsx)(TableCell, { children: 'Washington, D.C.' }),
                      (0, jsx_runtime.jsx)(TableCell, { children: '309 million' }),
                    ],
                  }),
                  (0, jsx_runtime.jsxs)(TableRow, {
                    children: [
                      (0, jsx_runtime.jsx)(TableCell, { children: 'Sweden' }),
                      (0, jsx_runtime.jsx)(TableCell, { children: 'Stockholm' }),
                      (0, jsx_runtime.jsx)(TableCell, { children: '9 million' }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        });
      };
      Default.displayName = 'Default';
      var __namedExportsOrder = ['Default'];
      (Default.__docgenInfo = { description: '', methods: [], displayName: 'Default' }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES['src/components/Table/Table.stories.js'] = {
            name: 'Default',
            docgenInfo: Default.__docgenInfo,
            path: 'src/components/Table/Table.stories.js',
          });
    },
    './src/components/Text/Text.stories.js': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          __namedExportsOrder: () => __namedExportsOrder,
          align: () => align,
          default: () => __WEBPACK_DEFAULT_EXPORT__,
          size: () => size,
          weight: () => weight,
        });
      var components_Text__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          './src/components/Text/index.js'
        ),
        _storybook_StoryContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          './.storybook/StoryContainer.js'
        ),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          './node_modules/react/jsx-runtime.js'
        );
      const __WEBPACK_DEFAULT_EXPORT__ = { title: 'Text' };
      var size = function () {
        return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(
          _storybook_StoryContainer__WEBPACK_IMPORTED_MODULE_1__.y,
          {
            vertical: !0,
            children: [
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                components_Text__WEBPACK_IMPORTED_MODULE_0__.x,
                { size: 'xl', children: 'XLarge' }
              ),
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                components_Text__WEBPACK_IMPORTED_MODULE_0__.x,
                { size: 'l', children: 'Large' }
              ),
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                components_Text__WEBPACK_IMPORTED_MODULE_0__.x,
                { size: 'm', children: 'Medium' }
              ),
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                components_Text__WEBPACK_IMPORTED_MODULE_0__.x,
                { size: 's', children: 'Small' }
              ),
            ],
          }
        );
      };
      size.displayName = 'size';
      var weight = function () {
        return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(
          _storybook_StoryContainer__WEBPACK_IMPORTED_MODULE_1__.y,
          {
            vertical: !0,
            children: [
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                components_Text__WEBPACK_IMPORTED_MODULE_0__.x,
                { weight: 'regular', children: 'Regular' }
              ),
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                components_Text__WEBPACK_IMPORTED_MODULE_0__.x,
                { weight: 'medium', children: 'Medium' }
              ),
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                components_Text__WEBPACK_IMPORTED_MODULE_0__.x,
                { weight: 'bold', children: 'Bold' }
              ),
            ],
          }
        );
      };
      weight.displayName = 'weight';
      var align = function () {
        return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(
          _storybook_StoryContainer__WEBPACK_IMPORTED_MODULE_1__.y,
          {
            vertical: !0,
            stretch: !0,
            children: [
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                components_Text__WEBPACK_IMPORTED_MODULE_0__.x,
                { align: 'start', children: 'Start' }
              ),
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                components_Text__WEBPACK_IMPORTED_MODULE_0__.x,
                { align: 'center', children: 'Center' }
              ),
            ],
          }
        );
      };
      align.displayName = 'align';
      var __namedExportsOrder = ['size', 'weight', 'align'];
      (size.__docgenInfo = { description: '', methods: [], displayName: 'size' }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES['src/components/Text/Text.stories.js'] = {
            name: 'size',
            docgenInfo: size.__docgenInfo,
            path: 'src/components/Text/Text.stories.js',
          }),
        (weight.__docgenInfo = { description: '', methods: [], displayName: 'weight' }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES['src/components/Text/Text.stories.js'] = {
            name: 'weight',
            docgenInfo: weight.__docgenInfo,
            path: 'src/components/Text/Text.stories.js',
          }),
        (align.__docgenInfo = { description: '', methods: [], displayName: 'align' }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES['src/components/Text/Text.stories.js'] = {
            name: 'align',
            docgenInfo: align.__docgenInfo,
            path: 'src/components/Text/Text.stories.js',
          });
    },
    './src/components/Text/index.js': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      'use strict';
      __webpack_require__.d(__webpack_exports__, { x: () => Text });
      var style = __webpack_require__('./src/utils/style.js'),
        injectStylesIntoStyleTag = __webpack_require__(
          './node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js'
        ),
        injectStylesIntoStyleTag_default = __webpack_require__.n(
          injectStylesIntoStyleTag
        ),
        Text_module = __webpack_require__(
          './node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./node_modules/postcss-loader/dist/cjs.js!./src/components/Text/Text.module.css'
        ),
        options = { insert: 'head', singleton: !1 };
      injectStylesIntoStyleTag_default()(Text_module.Z, options);
      const Text_Text_module = Text_module.Z.locals || {};
      var jsx_runtime = __webpack_require__('./node_modules/react/jsx-runtime.js'),
        _excluded = [
          'children',
          'size',
          'as',
          'align',
          'weight',
          'secondary',
          'className',
        ];
      function _objectWithoutProperties(source, excluded) {
        if (null == source) return {};
        var key,
          i,
          target = (function _objectWithoutPropertiesLoose(source, excluded) {
            if (null == source) return {};
            var key,
              i,
              target = {},
              sourceKeys = Object.keys(source);
            for (i = 0; i < sourceKeys.length; i++)
              (key = sourceKeys[i]),
                excluded.indexOf(key) >= 0 || (target[key] = source[key]);
            return target;
          })(source, excluded);
        if (Object.getOwnPropertySymbols) {
          var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
          for (i = 0; i < sourceSymbolKeys.length; i++)
            (key = sourceSymbolKeys[i]),
              excluded.indexOf(key) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(source, key) &&
                  (target[key] = source[key]));
        }
        return target;
      }
      var Text = function (_ref) {
        var children = _ref.children,
          _ref$size = _ref.size,
          size = void 0 === _ref$size ? 'm' : _ref$size,
          _ref$as = _ref.as,
          Component = void 0 === _ref$as ? 'span' : _ref$as,
          _ref$align = _ref.align,
          align = void 0 === _ref$align ? 'auto' : _ref$align,
          _ref$weight = _ref.weight,
          weight = void 0 === _ref$weight ? 'auto' : _ref$weight,
          secondary = _ref.secondary,
          className = _ref.className,
          rest = _objectWithoutProperties(_ref, _excluded);
        return (0, jsx_runtime.jsx)(
          Component,
          Object.assign(
            {
              className: (0, style.Sh)(Text_Text_module.text, className),
              'data-align': align,
              'data-size': size,
              'data-weight': weight,
              'data-secondary': secondary,
            },
            rest,
            { children }
          )
        );
      };
      (Text.displayName = 'Text'),
        (Text.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'Text',
          props: {
            size: { defaultValue: { value: "'m'", computed: !1 }, required: !1 },
            as: { defaultValue: { value: "'span'", computed: !1 }, required: !1 },
            align: { defaultValue: { value: "'auto'", computed: !1 }, required: !1 },
            weight: { defaultValue: { value: "'auto'", computed: !1 }, required: !1 },
          },
        }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES['src/components/Text/Text.js'] = {
            name: 'Text',
            docgenInfo: Text.__docgenInfo,
            path: 'src/components/Text/Text.js',
          });
    },
    './src/components/ThemeProvider/index.js': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      'use strict';
      __webpack_require__.d(__webpack_exports__, {
        Ni: () => ThemeContext,
        f6: () => ThemeProvider,
        g6: () => fontStyles,
        yB: () => tokenStyles,
        Fg: () => useTheme,
      });
      const gotham_bold_italic_woff2_namespaceObject =
          __webpack_require__.p + 'static/media/gotham-bold-italic.f2025590.woff2',
        gotham_bold_woff2_namespaceObject =
          __webpack_require__.p + 'static/media/gotham-bold.06f6a140.woff2',
        gotham_book_italic_woff2_namespaceObject =
          __webpack_require__.p + 'static/media/gotham-book-italic.7cb4935c.woff2',
        gotham_book_woff2_namespaceObject =
          __webpack_require__.p + 'static/media/gotham-book.87157097.woff2',
        gotham_medium_italic_woff2_namespaceObject =
          __webpack_require__.p + 'static/media/gotham-medium-italic.8673c051.woff2',
        gotham_medium_woff2_namespaceObject =
          __webpack_require__.p + 'static/media/gotham-medium.e1f85789.woff2';
      var hooks = __webpack_require__('./src/hooks/index.js'),
        head = __webpack_require__('./node_modules/next/head.js'),
        head_default = __webpack_require__.n(head),
        react = __webpack_require__('./node_modules/react/index.js'),
        style = __webpack_require__('./src/utils/style.js'),
        theme = __webpack_require__('./src/components/ThemeProvider/theme.js');
      function useTheme() {
        return (0, react.useContext)(ThemeContext);
      }
      var jsx_runtime = __webpack_require__('./node_modules/react/jsx-runtime.js'),
        _excluded = ['themeId', 'theme', 'children', 'className', 'as'];
      function _objectWithoutProperties(source, excluded) {
        if (null == source) return {};
        var key,
          i,
          target = (function _objectWithoutPropertiesLoose(source, excluded) {
            if (null == source) return {};
            var key,
              i,
              target = {},
              sourceKeys = Object.keys(source);
            for (i = 0; i < sourceKeys.length; i++)
              (key = sourceKeys[i]),
                excluded.indexOf(key) >= 0 || (target[key] = source[key]);
            return target;
          })(source, excluded);
        if (Object.getOwnPropertySymbols) {
          var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
          for (i = 0; i < sourceSymbolKeys.length; i++)
            (key = sourceSymbolKeys[i]),
              excluded.indexOf(key) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(source, key) &&
                  (target[key] = source[key]));
        }
        return target;
      }
      var ThemeContext = (0, react.createContext)({}),
        ThemeProvider = function (_ref) {
          var _ref$themeId = _ref.themeId,
            themeId = void 0 === _ref$themeId ? 'dark' : _ref$themeId,
            themeOverrides = _ref.theme,
            children = _ref.children,
            className = _ref.className,
            _ref$as = _ref.as,
            Component = void 0 === _ref$as ? 'div' : _ref$as,
            rest = _objectWithoutProperties(_ref, _excluded),
            currentTheme = Object.assign({}, theme.r[themeId], themeOverrides),
            isRootProvider = !useTheme().themeId,
            hasMounted = (0, hooks.f3)();
          return (
            (0, react.useEffect)(
              function () {
                isRootProvider &&
                  hasMounted &&
                  (window.localStorage.setItem('theme', JSON.stringify(themeId)),
                  (document.body.dataset.theme = themeId));
              },
              [themeId, isRootProvider, hasMounted]
            ),
            (0, jsx_runtime.jsxs)(ThemeContext.Provider, {
              value: currentTheme,
              children: [
                isRootProvider &&
                  (0, jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                    children: [
                      (0, jsx_runtime.jsx)(head_default(), {
                        children: (0, jsx_runtime.jsx)('meta', {
                          name: 'theme-color',
                          content: `rgb(${currentTheme.rgbBackground})`,
                        }),
                      }),
                      children,
                    ],
                  }),
                !isRootProvider &&
                  (0, jsx_runtime.jsx)(
                    Component,
                    Object.assign(
                      {
                        className: (0, style.Sh)('theme-provider', className),
                        'data-theme': themeId,
                      },
                      rest,
                      { children }
                    )
                  ),
              ],
            })
          );
        };
      function squish(styles) {
        return styles.replace(/\s\s+/g, ' ');
      }
      function createThemeProperties(theme) {
        return squish(
          Object.keys(theme)
            .filter(function (key) {
              return 'themeId' !== key;
            })
            .map(function (key) {
              return `--${key}: ${theme[key]};`;
            })
            .join('\n\n')
        );
      }
      ThemeProvider.displayName = 'ThemeProvider';
      var tokenStyles = squish(
          `\n  :root {\n    ${createThemeProperties(
            theme.T.base
          )}\n  }\n\n  ${(function createMediaTokenProperties() {
            return squish(
              Object.keys(style.BC)
                .map(function (key) {
                  return `\n        @media (max-width: ${
                    style.BC[key]
                  }px) {\n          :root {\n            ${createThemeProperties(theme.T[key])}\n          }\n        }\n      `;
                })
                .join('\n')
            );
          })()}\n\n  [data-theme='dark'] {\n    ${createThemeProperties(
            theme.r.dark
          )}\n  }\n\n  [data-theme='light'] {\n    ${createThemeProperties(
            theme.r.light
          )}\n  }\n`
        ),
        fontStyles = squish(
          `\n  @font-face {\n    font-family: Gotham;\n    font-weight: 400;\n    src: url(${gotham_book_woff2_namespaceObject}) format('woff2');\n    font-display: block;\n    font-style: normal;\n  }\n\n  @font-face {\n    font-family: Gotham;\n    font-weight: 400;\n    src: url(${gotham_book_italic_woff2_namespaceObject}) format('woff2');\n    font-display: block;\n    font-style: italic;\n  }\n\n  @font-face {\n    font-family: Gotham;\n    font-weight: 500;\n    src: url(${gotham_medium_woff2_namespaceObject}) format('woff2');\n    font-display: block;\n    font-style: normal;\n  }\n\n  @font-face {\n    font-family: Gotham;\n    font-weight: 500;\n    src: url(${gotham_medium_italic_woff2_namespaceObject}) format('woff2');\n    font-display: block;\n    font-style: italic;\n  }\n\n  @font-face {\n    font-family: Gotham;\n    font-weight: 700;\n    src: url(${gotham_bold_woff2_namespaceObject}) format('woff2');\n    font-display: block;\n    font-style: normal;\n  }\n\n  @font-face {\n    font-family: Gotham;\n    font-weight: 700;\n    src: url(${gotham_bold_italic_woff2_namespaceObject}) format('woff2');\n    font-display: block;\n    font-style: italic;\n  }\n`
        );
      (ThemeProvider.__docgenInfo = {
        description: '',
        methods: [],
        displayName: 'ThemeProvider',
        props: {
          themeId: { defaultValue: { value: "'dark'", computed: !1 }, required: !1 },
          as: { defaultValue: { value: "'div'", computed: !1 }, required: !1 },
        },
      }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES['src/components/ThemeProvider/ThemeProvider.js'] = {
            name: 'ThemeProvider',
            docgenInfo: ThemeProvider.__docgenInfo,
            path: 'src/components/ThemeProvider/ThemeProvider.js',
          });
    },
    './src/components/ThemeProvider/theme.js': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      'use strict';
      __webpack_require__.d(__webpack_exports__, { T: () => tokens, r: () => theme });
      var utils_style__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__('./src/utils/style.js'),
        tokens = {
          base: {
            rgbBlack: '0 0 0',
            rgbWhite: '255 255 255',
            bezierFastoutSlowin: 'cubic-bezier(0.4, 0.0, 0.2, 1)',
            durationXS: '200ms',
            durationS: '300ms',
            durationM: '400ms',
            durationL: '600ms',
            durationXL: '800ms',
            systemFontStack:
              'system-ui, -apple-system, BlinkMacSystemFont, San Francisco, Roboto, Segoe UI, Ubuntu, Helvetica Neue, sans-serif',
            fontStack: 'Gotham, var(--systemFontStack)',
            monoFontStack:
              'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace',
            japaneseFontStack:
              'ヒラギノ角ゴ Pro W3, Hiragino Kaku Gothic Pro, Hiragino Sans, Osaka, メイリオ, Meiryo, Segoe UI, sans-serif',
            fontWeightRegular: 400,
            fontWeightMedium: 500,
            fontWeightBold: 700,
            fontSizeH0: (0, utils_style__WEBPACK_IMPORTED_MODULE_0__.Q1)(140),
            fontSizeH1: (0, utils_style__WEBPACK_IMPORTED_MODULE_0__.Q1)(100),
            fontSizeH2: (0, utils_style__WEBPACK_IMPORTED_MODULE_0__.Q1)(58),
            fontSizeH3: (0, utils_style__WEBPACK_IMPORTED_MODULE_0__.Q1)(38),
            fontSizeH4: (0, utils_style__WEBPACK_IMPORTED_MODULE_0__.Q1)(28),
            fontSizeH5: (0, utils_style__WEBPACK_IMPORTED_MODULE_0__.Q1)(24),
            fontSizeBodyXL: (0, utils_style__WEBPACK_IMPORTED_MODULE_0__.Q1)(22),
            fontSizeBodyL: (0, utils_style__WEBPACK_IMPORTED_MODULE_0__.Q1)(20),
            fontSizeBodyM: (0, utils_style__WEBPACK_IMPORTED_MODULE_0__.Q1)(18),
            fontSizeBodyS: (0, utils_style__WEBPACK_IMPORTED_MODULE_0__.Q1)(16),
            fontSizeBodyXS: (0, utils_style__WEBPACK_IMPORTED_MODULE_0__.Q1)(14),
            lineHeightTitle: '1.1',
            lineHeightBody: '1.6',
            maxWidthS: '540px',
            maxWidthM: '720px',
            maxWidthL: '1096px',
            maxWidthXL: '1680px',
            spaceOuter: '64px',
            spaceXS: '4px',
            spaceS: '8px',
            spaceM: '16px',
            spaceL: '24px',
            spaceXL: '32px',
            space2XL: '48px',
            space3XL: '64px',
            space4XL: '96px',
            space5XL: '128px',
            zIndex0: 0,
            zIndex1: 4,
            zIndex2: 8,
            zIndex3: 16,
            zIndex4: 32,
            zIndex5: 64,
          },
          desktop: {
            fontSizeH0: (0, utils_style__WEBPACK_IMPORTED_MODULE_0__.Q1)(120),
            fontSizeH1: (0, utils_style__WEBPACK_IMPORTED_MODULE_0__.Q1)(80),
          },
          laptop: {
            maxWidthS: '480px',
            maxWidthM: '640px',
            maxWidthL: '1000px',
            maxWidthXL: '1100px',
            spaceOuter: '48px',
            fontSizeH0: (0, utils_style__WEBPACK_IMPORTED_MODULE_0__.Q1)(100),
            fontSizeH1: (0, utils_style__WEBPACK_IMPORTED_MODULE_0__.Q1)(70),
            fontSizeH2: (0, utils_style__WEBPACK_IMPORTED_MODULE_0__.Q1)(50),
            fontSizeH3: (0, utils_style__WEBPACK_IMPORTED_MODULE_0__.Q1)(36),
            fontSizeH4: (0, utils_style__WEBPACK_IMPORTED_MODULE_0__.Q1)(26),
            fontSizeH5: (0, utils_style__WEBPACK_IMPORTED_MODULE_0__.Q1)(22),
          },
          tablet: {
            fontSizeH0: (0, utils_style__WEBPACK_IMPORTED_MODULE_0__.Q1)(80),
            fontSizeH1: (0, utils_style__WEBPACK_IMPORTED_MODULE_0__.Q1)(60),
            fontSizeH2: (0, utils_style__WEBPACK_IMPORTED_MODULE_0__.Q1)(48),
            fontSizeH3: (0, utils_style__WEBPACK_IMPORTED_MODULE_0__.Q1)(32),
            fontSizeH4: (0, utils_style__WEBPACK_IMPORTED_MODULE_0__.Q1)(24),
            fontSizeH5: (0, utils_style__WEBPACK_IMPORTED_MODULE_0__.Q1)(20),
          },
          mobile: {
            spaceOuter: '24px',
            fontSizeH0: (0, utils_style__WEBPACK_IMPORTED_MODULE_0__.Q1)(56),
            fontSizeH1: (0, utils_style__WEBPACK_IMPORTED_MODULE_0__.Q1)(40),
            fontSizeH2: (0, utils_style__WEBPACK_IMPORTED_MODULE_0__.Q1)(34),
            fontSizeH3: (0, utils_style__WEBPACK_IMPORTED_MODULE_0__.Q1)(28),
            fontSizeH4: (0, utils_style__WEBPACK_IMPORTED_MODULE_0__.Q1)(22),
            fontSizeH5: (0, utils_style__WEBPACK_IMPORTED_MODULE_0__.Q1)(18),
            fontSizeBodyL: (0, utils_style__WEBPACK_IMPORTED_MODULE_0__.Q1)(17),
            fontSizeBodyM: (0, utils_style__WEBPACK_IMPORTED_MODULE_0__.Q1)(16),
            fontSizeBodyS: (0, utils_style__WEBPACK_IMPORTED_MODULE_0__.Q1)(14),
          },
          mobileS: {
            spaceOuter: '16px',
            fontSizeH0: (0, utils_style__WEBPACK_IMPORTED_MODULE_0__.Q1)(42),
            fontSizeH1: (0, utils_style__WEBPACK_IMPORTED_MODULE_0__.Q1)(38),
            fontSizeH2: (0, utils_style__WEBPACK_IMPORTED_MODULE_0__.Q1)(28),
            fontSizeH3: (0, utils_style__WEBPACK_IMPORTED_MODULE_0__.Q1)(24),
            fontSizeH4: (0, utils_style__WEBPACK_IMPORTED_MODULE_0__.Q1)(20),
          },
        },
        theme = {
          dark: {
            themeId: 'dark',
            rgbBackground: '17 17 17',
            rgbBackgroundLight: '26 26 26',
            rgbPrimary: '0 229 255',
            rgbAccent: '0 229 255',
            rgbText: '255 255 255',
            rgbError: '255 55 102',
            colorTextTitle: 'rgb(var(--rgbText) / 1)',
            colorTextBody: 'rgb(var(--rgbText) / 0.8)',
            colorTextLight: 'rgb(var(--rgbText) / 0.6)',
          },
          light: {
            themeId: 'light',
            rgbBackground: '242 242 242',
            rgbBackgroundLight: '255 255 255',
            rgbPrimary: '0 0 0',
            rgbAccent: '0 229 255',
            rgbText: '0 0 0',
            rgbError: '255 0 60',
            colorTextTitle: 'rgb(var(--rgbText) / 1)',
            colorTextBody: 'rgb(var(--rgbText) / 0.8)',
            colorTextLight: 'rgb(var(--rgbText) / 0.6)',
          },
        };
    },
    './src/components/Transition/index.js': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      'use strict';
      __webpack_require__.d(__webpack_exports__, { u: () => Transition });
      var AnimatePresence = __webpack_require__(
          './node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs'
        ),
        use_presence = __webpack_require__(
          './node_modules/framer-motion/dist/es/components/AnimatePresence/use-presence.mjs'
        ),
        react = __webpack_require__('./node_modules/react/index.js'),
        jsx_runtime = __webpack_require__('./node_modules/react/jsx-runtime.js');
      function _slicedToArray(arr, i) {
        return (
          (function _arrayWithHoles(arr) {
            if (Array.isArray(arr)) return arr;
          })(arr) ||
          (function _iterableToArrayLimit(arr, i) {
            var _i =
              null == arr
                ? null
                : ('undefined' != typeof Symbol && arr[Symbol.iterator]) ||
                  arr['@@iterator'];
            if (null == _i) return;
            var _s,
              _e,
              _arr = [],
              _n = !0,
              _d = !1;
            try {
              for (
                _i = _i.call(arr);
                !(_n = (_s = _i.next()).done) &&
                (_arr.push(_s.value), !i || _arr.length !== i);
                _n = !0
              );
            } catch (err) {
              (_d = !0), (_e = err);
            } finally {
              try {
                _n || null == _i.return || _i.return();
              } finally {
                if (_d) throw _e;
              }
            }
            return _arr;
          })(arr, i) ||
          (function _unsupportedIterableToArray(o, minLen) {
            if (!o) return;
            if ('string' == typeof o) return _arrayLikeToArray(o, minLen);
            var n = Object.prototype.toString.call(o).slice(8, -1);
            'Object' === n && o.constructor && (n = o.constructor.name);
            if ('Map' === n || 'Set' === n) return Array.from(o);
            if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
              return _arrayLikeToArray(o, minLen);
          })(arr, i) ||
          (function _nonIterableRest() {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      function _arrayLikeToArray(arr, len) {
        (null == len || len > arr.length) && (len = arr.length);
        for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
        return arr2;
      }
      var Transition = function (_ref) {
        var children = _ref.children,
          _ref$timeout = _ref.timeout,
          timeout = void 0 === _ref$timeout ? 0 : _ref$timeout,
          onEnter = _ref.onEnter,
          onEntered = _ref.onEntered,
          onExit = _ref.onExit,
          onExited = _ref.onExited,
          show = _ref.in,
          unmount = _ref.unmount,
          enterTimeout = (0, react.useRef)(),
          exitTimeout = (0, react.useRef)();
        return (
          (0, react.useEffect)(
            function () {
              show
                ? clearTimeout(exitTimeout.current)
                : clearTimeout(enterTimeout.current);
            },
            [show]
          ),
          (0, jsx_runtime.jsx)(AnimatePresence.M, {
            children:
              (show || !unmount) &&
              (0, jsx_runtime.jsx)(TransitionContent, {
                timeout,
                enterTimeout,
                exitTimeout,
                onEnter,
                onEntered,
                onExit,
                onExited,
                show,
                children,
              }),
          })
        );
      };
      Transition.displayName = 'Transition';
      var TransitionContent = function (_ref2) {
        var children = _ref2.children,
          timeout = _ref2.timeout,
          enterTimeout = _ref2.enterTimeout,
          exitTimeout = _ref2.exitTimeout,
          onEnter = _ref2.onEnter,
          onEntered = _ref2.onEntered,
          onExit = _ref2.onExit,
          onExited = _ref2.onExited,
          show = _ref2.show,
          _useState2 = _slicedToArray((0, react.useState)('exited'), 2),
          status = _useState2[0],
          setStatus = _useState2[1],
          _usePresence2 = _slicedToArray((0, use_presence.oO)(), 2),
          isPresent = _usePresence2[0],
          safeToRemove = _usePresence2[1],
          _useState4 = _slicedToArray((0, react.useState)(!1), 2),
          hasEntered = _useState4[0],
          setHasEntered = _useState4[1],
          splitTimeout = 'object' == typeof timeout;
        return (
          (0, react.useEffect)(
            function () {
              if (!hasEntered && show) {
                var actualTimeout = splitTimeout ? timeout.enter : timeout;
                clearTimeout(enterTimeout.current),
                  clearTimeout(exitTimeout.current),
                  setHasEntered(!0),
                  setStatus('entering'),
                  null == onEnter || onEnter(),
                  (enterTimeout.current = setTimeout(function () {
                    setStatus('entered'), null == onEntered || onEntered();
                  }, actualTimeout));
              }
            },
            [onEnter, onEntered, timeout, status, show]
          ),
          (0, react.useEffect)(
            function () {
              if (!isPresent || !show) {
                var actualTimeout = splitTimeout ? timeout.exit : timeout;
                clearTimeout(enterTimeout.current),
                  clearTimeout(exitTimeout.current),
                  setStatus('exiting'),
                  null == onExit || onExit(),
                  (exitTimeout.current = setTimeout(function () {
                    setStatus('exited'),
                      null == safeToRemove || safeToRemove(),
                      null == onExited || onExited();
                  }, actualTimeout));
              }
            },
            [isPresent, onExit, safeToRemove, timeout, onExited, show]
          ),
          children(!(!hasEntered || !show) && isPresent, status)
        );
      };
      (Transition.__docgenInfo = {
        description:
          'A Framer Motion AnimatePresence implementation of `react-transition-group`\nto be used for vanilla css transitions',
        methods: [],
        displayName: 'Transition',
        props: { timeout: { defaultValue: { value: '0', computed: !1 }, required: !1 } },
      }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES['src/components/Transition/Transition.js'] = {
            name: 'Transition',
            docgenInfo: Transition.__docgenInfo,
            path: 'src/components/Transition/Transition.js',
          });
    },
    './src/components/VisuallyHidden/index.js': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      'use strict';
      __webpack_require__.d(__webpack_exports__, { T: () => VisuallyHidden });
      var react = __webpack_require__('./node_modules/react/index.js'),
        style = __webpack_require__('./src/utils/style.js'),
        injectStylesIntoStyleTag = __webpack_require__(
          './node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js'
        ),
        injectStylesIntoStyleTag_default = __webpack_require__.n(
          injectStylesIntoStyleTag
        ),
        VisuallyHidden_module = __webpack_require__(
          './node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./node_modules/postcss-loader/dist/cjs.js!./src/components/VisuallyHidden/VisuallyHidden.module.css'
        ),
        options = { insert: 'head', singleton: !1 };
      injectStylesIntoStyleTag_default()(VisuallyHidden_module.Z, options);
      const VisuallyHidden_VisuallyHidden_module = VisuallyHidden_module.Z.locals || {};
      var jsx_runtime = __webpack_require__('./node_modules/react/jsx-runtime.js'),
        _excluded = ['className', 'showOnFocus', 'as', 'children', 'visible'];
      function _objectWithoutProperties(source, excluded) {
        if (null == source) return {};
        var key,
          i,
          target = (function _objectWithoutPropertiesLoose(source, excluded) {
            if (null == source) return {};
            var key,
              i,
              target = {},
              sourceKeys = Object.keys(source);
            for (i = 0; i < sourceKeys.length; i++)
              (key = sourceKeys[i]),
                excluded.indexOf(key) >= 0 || (target[key] = source[key]);
            return target;
          })(source, excluded);
        if (Object.getOwnPropertySymbols) {
          var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
          for (i = 0; i < sourceSymbolKeys.length; i++)
            (key = sourceSymbolKeys[i]),
              excluded.indexOf(key) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(source, key) &&
                  (target[key] = source[key]));
        }
        return target;
      }
      var VisuallyHidden = (0, react.forwardRef)(function (_ref, ref) {
        var className = _ref.className,
          showOnFocus = _ref.showOnFocus,
          _ref$as = _ref.as,
          Component = void 0 === _ref$as ? 'span' : _ref$as,
          children = _ref.children,
          visible = _ref.visible,
          rest = _objectWithoutProperties(_ref, _excluded);
        return (0,
        jsx_runtime.jsx)(Component, Object.assign({ className: (0, style.Sh)(VisuallyHidden_VisuallyHidden_module.hidden, className), 'data-hidden': !visible && !showOnFocus, 'data-show-on-focus': showOnFocus, ref }, rest, { children }));
      });
      (VisuallyHidden.__docgenInfo = {
        description: '',
        methods: [],
        displayName: 'VisuallyHidden',
        props: { as: { defaultValue: { value: "'span'", computed: !1 }, required: !1 } },
      }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES['src/components/VisuallyHidden/VisuallyHidden.js'] = {
            name: 'VisuallyHidden',
            docgenInfo: VisuallyHidden.__docgenInfo,
            path: 'src/components/VisuallyHidden/VisuallyHidden.js',
          });
    },
    './src/hooks/index.js': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      'use strict';
      __webpack_require__.d(__webpack_exports__, {
        bp: () => useAppContext,
        pJ: () => useFormInput,
        S2: () => useFoucFix,
        f3: () => useHasMounted,
        NM: () => useInViewport,
        _: () => useLocalStorage,
        jh: () => useScrollToHash,
        iP: () => useWindowSize,
      });
      __webpack_require__('./src/layouts/App/reset.css'),
        __webpack_require__('./src/layouts/App/global.css');
      var Icon = __webpack_require__('./src/components/Icon/index.js'),
        Monogram = __webpack_require__('./src/components/Monogram/index.js'),
        ThemeProvider = __webpack_require__('./src/components/ThemeProvider/index.js'),
        theme = __webpack_require__('./src/components/ThemeProvider/theme.js'),
        Transition = __webpack_require__('./src/components/Transition/index.js'),
        next_link = __webpack_require__('./node_modules/next/link.js'),
        link_default = __webpack_require__.n(next_link),
        router = __webpack_require__('./node_modules/next/router.js'),
        react = __webpack_require__('./node_modules/react/index.js'),
        style = __webpack_require__('./src/utils/style.js'),
        Button = __webpack_require__('./src/components/Button/index.js'),
        injectStylesIntoStyleTag = __webpack_require__(
          './node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js'
        ),
        injectStylesIntoStyleTag_default = __webpack_require__.n(
          injectStylesIntoStyleTag
        ),
        NavToggle_module = __webpack_require__(
          './node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./node_modules/postcss-loader/dist/cjs.js!./src/components/Navbar/NavToggle.module.css'
        ),
        options = { insert: 'head', singleton: !1 };
      injectStylesIntoStyleTag_default()(NavToggle_module.Z, options);
      const Navbar_NavToggle_module = NavToggle_module.Z.locals || {};
      var jsx_runtime = __webpack_require__('./node_modules/react/jsx-runtime.js'),
        _excluded = ['menuOpen'];
      function _objectWithoutProperties(source, excluded) {
        if (null == source) return {};
        var key,
          i,
          target = (function _objectWithoutPropertiesLoose(source, excluded) {
            if (null == source) return {};
            var key,
              i,
              target = {},
              sourceKeys = Object.keys(source);
            for (i = 0; i < sourceKeys.length; i++)
              (key = sourceKeys[i]),
                excluded.indexOf(key) >= 0 || (target[key] = source[key]);
            return target;
          })(source, excluded);
        if (Object.getOwnPropertySymbols) {
          var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
          for (i = 0; i < sourceSymbolKeys.length; i++)
            (key = sourceSymbolKeys[i]),
              excluded.indexOf(key) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(source, key) &&
                  (target[key] = source[key]));
        }
        return target;
      }
      var NavToggle = function (_ref) {
        var menuOpen = _ref.menuOpen,
          rest = _objectWithoutProperties(_ref, _excluded);
        return (0, jsx_runtime.jsx)(
          Button.z,
          Object.assign(
            {
              iconOnly: !0,
              className: Navbar_NavToggle_module.toggle,
              'aria-label': 'Menu',
              'aria-expanded': menuOpen,
            },
            rest,
            {
              children: (0, jsx_runtime.jsxs)('div', {
                className: Navbar_NavToggle_module.inner,
                children: [
                  (0, jsx_runtime.jsx)(Icon.J, {
                    className: Navbar_NavToggle_module.icon,
                    'data-menu': !0,
                    'data-open': menuOpen,
                    icon: 'menu',
                  }),
                  (0, jsx_runtime.jsx)(Icon.J, {
                    className: Navbar_NavToggle_module.icon,
                    'data-close': !0,
                    'data-open': menuOpen,
                    icon: 'close',
                  }),
                ],
              }),
            }
          )
        );
      };
      (NavToggle.displayName = 'NavToggle'),
        (NavToggle.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'NavToggle',
        }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES['src/components/Navbar/NavToggle.js'] = {
            name: 'NavToggle',
            docgenInfo: NavToggle.__docgenInfo,
            path: 'src/components/Navbar/NavToggle.js',
          });
      var Navbar_module = __webpack_require__(
          './node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./node_modules/postcss-loader/dist/cjs.js!./src/components/Navbar/Navbar.module.css'
        ),
        Navbar_module_options = { insert: 'head', singleton: !1 };
      injectStylesIntoStyleTag_default()(Navbar_module.Z, Navbar_module_options);
      const Navbar_Navbar_module = Navbar_module.Z.locals || {};
      var ThemeToggle_module = __webpack_require__(
          './node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./node_modules/postcss-loader/dist/cjs.js!./src/components/Navbar/ThemeToggle.module.css'
        ),
        ThemeToggle_module_options = { insert: 'head', singleton: !1 };
      injectStylesIntoStyleTag_default()(
        ThemeToggle_module.Z,
        ThemeToggle_module_options
      );
      const Navbar_ThemeToggle_module = ThemeToggle_module.Z.locals || {};
      var ThemeToggle_excluded = ['isMobile'];
      function ThemeToggle_objectWithoutProperties(source, excluded) {
        if (null == source) return {};
        var key,
          i,
          target = (function ThemeToggle_objectWithoutPropertiesLoose(source, excluded) {
            if (null == source) return {};
            var key,
              i,
              target = {},
              sourceKeys = Object.keys(source);
            for (i = 0; i < sourceKeys.length; i++)
              (key = sourceKeys[i]),
                excluded.indexOf(key) >= 0 || (target[key] = source[key]);
            return target;
          })(source, excluded);
        if (Object.getOwnPropertySymbols) {
          var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
          for (i = 0; i < sourceSymbolKeys.length; i++)
            (key = sourceSymbolKeys[i]),
              excluded.indexOf(key) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(source, key) &&
                  (target[key] = source[key]));
        }
        return target;
      }
      var ThemeToggle = function (_ref) {
        var isMobile = _ref.isMobile,
          rest = ThemeToggle_objectWithoutProperties(_ref, ThemeToggle_excluded),
          dispatch = useAppContext().dispatch,
          maskId = `${(0, react.useId)()}theme-toggle-mask`;
        return (0, jsx_runtime.jsx)(
          Button.z,
          Object.assign(
            {
              iconOnly: !0,
              className: Navbar_ThemeToggle_module.toggle,
              'data-mobile': isMobile,
              'aria-label': 'Toggle theme',
              onClick: function () {
                dispatch({ type: 'toggleTheme' });
              },
            },
            rest,
            {
              children: (0, jsx_runtime.jsxs)('svg', {
                'aria-hidden': !0,
                className: Navbar_ThemeToggle_module.svg,
                width: '38',
                height: '38',
                viewBox: '0 0 38 38',
                children: [
                  (0, jsx_runtime.jsx)('defs', {
                    children: (0, jsx_runtime.jsxs)('mask', {
                      id: maskId,
                      children: [
                        (0, jsx_runtime.jsx)('circle', {
                          className: Navbar_ThemeToggle_module.circle,
                          'data-mask': !0,
                          cx: '19',
                          cy: '19',
                          r: '13',
                        }),
                        (0, jsx_runtime.jsx)('circle', {
                          className: Navbar_ThemeToggle_module.mask,
                          cx: '25',
                          cy: '14',
                          r: '9',
                        }),
                      ],
                    }),
                  }),
                  (0, jsx_runtime.jsx)('path', {
                    className: Navbar_ThemeToggle_module.path,
                    d: 'M19 3v7M19 35v-7M32.856 11l-6.062 3.5M5.144 27l6.062-3.5M5.144 11l6.062 3.5M32.856 27l-6.062-3.5',
                  }),
                  (0, jsx_runtime.jsx)('circle', {
                    className: Navbar_ThemeToggle_module.circle,
                    mask: `url(#${maskId})`,
                    cx: '19',
                    cy: '19',
                    r: '12',
                  }),
                ],
              }),
            }
          )
        );
      };
      (ThemeToggle.displayName = 'ThemeToggle'),
        (ThemeToggle.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'ThemeToggle',
        }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES['src/components/Navbar/ThemeToggle.js'] = {
            name: 'ThemeToggle',
            docgenInfo: ThemeToggle.__docgenInfo,
            path: 'src/components/Navbar/ThemeToggle.js',
          });
      var navLinks = [
          { label: 'Projects', pathname: '/#project-1' },
          { label: 'Details', pathname: '/#details' },
          { label: 'Articles', pathname: '/articles' },
          {
            label: 'CV',
            pathname:
              'https://storage.googleapis.com/brandify-usercontent-dev/e684577e-8d97-45ba-bfa7-64ca9c608077?Expires=1702209599&GoogleAccessId=GOOG1EQYYUCN45RGYHGLHRS57FY5LN3ZFJOZEUIRTNHTBDZURLXQ4KVCAN4BI&Signature=%2BGJYQ4slK1YQSfLzFh%2FlBNImAyM%3D%0A',
          },
          { label: 'Contact', pathname: '/contact' },
        ],
        socialLinks = [
          { label: 'Twitter', url: 'https://twitter.com/yakkshit', icon: 'twitter' },
          { label: 'Figma', url: 'https://www.linkedin.com/in/yakkshit', icon: 'figma' },
          { label: 'Github', url: 'https://github.com/yakkshit', icon: 'github' },
        ];
      function _createForOfIteratorHelper(o, allowArrayLike) {
        var it = ('undefined' != typeof Symbol && o[Symbol.iterator]) || o['@@iterator'];
        if (!it) {
          if (
            Array.isArray(o) ||
            (it = _unsupportedIterableToArray(o)) ||
            (allowArrayLike && o && 'number' == typeof o.length)
          ) {
            it && (o = it);
            var i = 0,
              F = function () {};
            return {
              s: F,
              n: function () {
                return i >= o.length ? { done: !0 } : { done: !1, value: o[i++] };
              },
              e: function (e) {
                throw e;
              },
              f: F,
            };
          }
          throw new TypeError(
            'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
          );
        }
        var err,
          normalCompletion = !0,
          didErr = !1;
        return {
          s: function () {
            it = it.call(o);
          },
          n: function () {
            var step = it.next();
            return (normalCompletion = step.done), step;
          },
          e: function (e) {
            (didErr = !0), (err = e);
          },
          f: function () {
            try {
              normalCompletion || null == it.return || it.return();
            } finally {
              if (didErr) throw err;
            }
          },
        };
      }
      function _slicedToArray(arr, i) {
        return (
          (function _arrayWithHoles(arr) {
            if (Array.isArray(arr)) return arr;
          })(arr) ||
          (function _iterableToArrayLimit(arr, i) {
            var _i =
              null == arr
                ? null
                : ('undefined' != typeof Symbol && arr[Symbol.iterator]) ||
                  arr['@@iterator'];
            if (null == _i) return;
            var _s,
              _e,
              _arr = [],
              _n = !0,
              _d = !1;
            try {
              for (
                _i = _i.call(arr);
                !(_n = (_s = _i.next()).done) &&
                (_arr.push(_s.value), !i || _arr.length !== i);
                _n = !0
              );
            } catch (err) {
              (_d = !0), (_e = err);
            } finally {
              try {
                _n || null == _i.return || _i.return();
              } finally {
                if (_d) throw _e;
              }
            }
            return _arr;
          })(arr, i) ||
          _unsupportedIterableToArray(arr, i) ||
          (function _nonIterableRest() {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      function _unsupportedIterableToArray(o, minLen) {
        if (o) {
          if ('string' == typeof o) return _arrayLikeToArray(o, minLen);
          var n = Object.prototype.toString.call(o).slice(8, -1);
          return (
            'Object' === n && o.constructor && (n = o.constructor.name),
            'Map' === n || 'Set' === n
              ? Array.from(o)
              : 'Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              ? _arrayLikeToArray(o, minLen)
              : void 0
          );
        }
      }
      function _arrayLikeToArray(arr, len) {
        (null == len || len > arr.length) && (len = arr.length);
        for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
        return arr2;
      }
      var Navbar = function () {
        var _useState2 = _slicedToArray((0, react.useState)(), 2),
          current = _useState2[0],
          setCurrent = _useState2[1],
          _useState4 = _slicedToArray((0, react.useState)(), 2),
          target = _useState4[0],
          setTarget = _useState4[1],
          themeId = (0, ThemeProvider.Fg)().themeId,
          _useAppContext = useAppContext(),
          menuOpen = _useAppContext.menuOpen,
          dispatch = _useAppContext.dispatch,
          _useRouter = (0, router.useRouter)(),
          route = _useRouter.route,
          asPath = _useRouter.asPath,
          windowSize = useWindowSize(),
          headerRef = (0, react.useRef)(),
          isMobile = windowSize.width <= style.BC.mobile || windowSize.height <= 696,
          scrollToHash = useScrollToHash();
        (0, react.useEffect)(
          function () {
            setCurrent(asPath);
          },
          [asPath]
        ),
          (0, react.useEffect)(
            function () {
              target &&
                '/' === route &&
                (setCurrent(`${route}${target}`),
                scrollToHash(target, function () {
                  return setTarget(null);
                }));
            },
            [route, scrollToHash, target]
          ),
          (0, react.useEffect)(
            function () {
              var navItems = document.querySelectorAll('[data-navbar-item]'),
                inverseTheme = 'dark' === themeId ? 'light' : 'dark',
                innerHeight = window.innerHeight,
                inverseMeasurements = [],
                navItemMeasurements = [],
                isOverlap = function (rect1, rect2, scrollY) {
                  return !(
                    rect1.bottom - scrollY < rect2.top ||
                    rect1.top - scrollY > rect2.bottom
                  );
                },
                resetNavTheme = function () {
                  var _step,
                    _iterator = _createForOfIteratorHelper(navItemMeasurements);
                  try {
                    for (_iterator.s(); !(_step = _iterator.n()).done; ) {
                      _step.value.element.dataset.theme = '';
                    }
                  } catch (err) {
                    _iterator.e(err);
                  } finally {
                    _iterator.f();
                  }
                },
                handleInversion = function () {
                  var invertedElements = document.querySelectorAll(
                    `[data-theme='${inverseTheme}'][data-invert]`
                  );
                  if (invertedElements) {
                    inverseMeasurements = Array.from(invertedElements).map(function (
                      item
                    ) {
                      return {
                        element: item,
                        top: item.offsetTop,
                        bottom: item.offsetTop + item.offsetHeight,
                      };
                    });
                    var scrollY = window.scrollY;
                    resetNavTheme();
                    var _step2,
                      _iterator2 = _createForOfIteratorHelper(inverseMeasurements);
                    try {
                      for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
                        var inverseMeasurement = _step2.value;
                        if (
                          !(
                            inverseMeasurement.top - scrollY > innerHeight ||
                            inverseMeasurement.bottom - scrollY < 0
                          )
                        ) {
                          var _step3,
                            _iterator3 = _createForOfIteratorHelper(navItemMeasurements);
                          try {
                            for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
                              var measurement = _step3.value;
                              isOverlap(inverseMeasurement, measurement, scrollY)
                                ? (measurement.element.dataset.theme = inverseTheme)
                                : (measurement.element.dataset.theme = '');
                            }
                          } catch (err) {
                            _iterator3.e(err);
                          } finally {
                            _iterator3.f();
                          }
                        }
                      }
                    } catch (err) {
                      _iterator2.e(err);
                    } finally {
                      _iterator2.f();
                    }
                  }
                };
              return (
                'light' === themeId &&
                  ((navItemMeasurements = Array.from(navItems).map(function (item) {
                    var rect = item.getBoundingClientRect();
                    return { element: item, top: rect.top, bottom: rect.bottom };
                  })),
                  document.addEventListener('scroll', handleInversion),
                  handleInversion()),
                function () {
                  document.removeEventListener('scroll', handleInversion),
                    resetNavTheme();
                }
              );
            },
            [themeId, windowSize, asPath]
          );
        var getCurrent = function () {
            var url = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : '',
              nonTrailing =
                null != current && current.endsWith('/')
                  ? null == current
                    ? void 0
                    : current.slice(0, -1)
                  : current;
            return url === nonTrailing ? 'page' : '';
          },
          handleNavItemClick = function (event) {
            var hash = event.currentTarget.href.split('#')[1];
            setTarget(null),
              hash && '/' === route && (setTarget(`#${hash}`), event.preventDefault());
          },
          handleMobileNavClick = function (event) {
            handleNavItemClick(event), menuOpen && dispatch({ type: 'toggleMenu' });
          };
        return (0, jsx_runtime.jsxs)('header', {
          className: Navbar_Navbar_module.navbar,
          ref: headerRef,
          children: [
            (0, jsx_runtime.jsx)(link_default(), {
              href: '/' === route ? '/#intro' : '/',
              scroll: !1,
              children: (0, jsx_runtime.jsx)('a', {
                'data-navbar-item': !0,
                className: Navbar_Navbar_module.logo,
                'aria-label': 'Yakkshit Reddy, Designer',
                onClick: handleMobileNavClick,
                children: (0, jsx_runtime.jsx)(Monogram.Y, { highlight: !0 }),
              }),
            }),
            (0, jsx_runtime.jsx)(NavToggle, {
              onClick: function () {
                return dispatch({ type: 'toggleMenu' });
              },
              menuOpen,
            }),
            (0, jsx_runtime.jsxs)('nav', {
              className: Navbar_Navbar_module.nav,
              children: [
                (0, jsx_runtime.jsx)('div', {
                  className: Navbar_Navbar_module.navList,
                  children: navLinks.map(function (_ref) {
                    var label = _ref.label,
                      pathname = _ref.pathname;
                    return (0,
                    jsx_runtime.jsx)(link_default(), { href: pathname, scroll: !1, children: (0, jsx_runtime.jsx)('a', { 'data-navbar-item': !0, className: Navbar_Navbar_module.navLink, 'aria-current': getCurrent(pathname), onClick: handleNavItemClick, children: label }) }, label);
                  }),
                }),
                (0, jsx_runtime.jsx)(NavbarIcons, { desktop: !0 }),
              ],
            }),
            (0, jsx_runtime.jsx)(Transition.u, {
              unmount: !0,
              in: menuOpen,
              timeout: (0, style.zG)(theme.T.base.durationL),
              children: function (visible) {
                return (0, jsx_runtime.jsxs)('nav', {
                  className: Navbar_Navbar_module.mobileNav,
                  'data-visible': visible,
                  children: [
                    navLinks.map(function (_ref2, index) {
                      var label = _ref2.label,
                        pathname = _ref2.pathname;
                      return (0,
                      jsx_runtime.jsx)(link_default(), { href: pathname, scroll: !1, children: (0, jsx_runtime.jsx)('a', { className: Navbar_Navbar_module.mobileNavLink, 'data-visible': visible, 'aria-current': getCurrent(pathname), onClick: handleMobileNavClick, style: (0, style.Fh)({ transitionDelay: (0, style.aU)(Number((0, style.zG)(theme.T.base.durationS)) + 50 * index) }), children: label }) }, label);
                    }),
                    (0, jsx_runtime.jsx)(NavbarIcons, {}),
                    (0, jsx_runtime.jsx)(ThemeToggle, { isMobile: !0 }),
                  ],
                });
              },
            }),
            !isMobile && (0, jsx_runtime.jsx)(ThemeToggle, { 'data-navbar-item': !0 }),
          ],
        });
      };
      Navbar.displayName = 'Navbar';
      var NavbarIcons = function (_ref3) {
        var desktop = _ref3.desktop;
        return (0, jsx_runtime.jsx)('div', {
          className: Navbar_Navbar_module.navIcons,
          children: socialLinks.map(function (_ref4) {
            var label = _ref4.label,
              url = _ref4.url,
              icon = _ref4.icon;
            return (0,
            jsx_runtime.jsx)('a', { 'data-navbar-item': desktop || void 0, className: Navbar_Navbar_module.navIconLink, 'aria-label': label, href: url, target: '_blank', rel: 'noopener noreferrer', children: (0, jsx_runtime.jsx)(Icon.J, { className: Navbar_Navbar_module.navIcon, icon }) }, label);
          }),
        });
      };
      (NavbarIcons.displayName = 'NavbarIcons'),
        (Navbar.__docgenInfo = { description: '', methods: [], displayName: 'Navbar' }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES['src/components/Navbar/Navbar.js'] = {
            name: 'Navbar',
            docgenInfo: Navbar.__docgenInfo,
            path: 'src/components/Navbar/Navbar.js',
          });
      var VisuallyHidden = __webpack_require__(
          './src/components/VisuallyHidden/index.js'
        ),
        LazyMotion = __webpack_require__(
          './node_modules/framer-motion/dist/es/components/LazyMotion/index.mjs'
        ),
        features_animation = __webpack_require__(
          './node_modules/framer-motion/dist/es/render/dom/features-animation.mjs'
        ),
        AnimatePresence = __webpack_require__(
          './node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs'
        ),
        motion_minimal = __webpack_require__(
          './node_modules/framer-motion/dist/es/render/dom/motion-minimal.mjs'
        ),
        App_module = __webpack_require__(
          './node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./node_modules/postcss-loader/dist/cjs.js!./src/layouts/App/App.module.css'
        ),
        App_module_options = { insert: 'head', singleton: !1 };
      injectStylesIntoStyleTag_default()(App_module.Z, App_module_options);
      const App_App_module = App_module.Z.locals || {};
      var initialState = { menuOpen: !1 };
      function reducer(state, action) {
        var type = action.type,
          value = action.value;
        switch (type) {
          case 'setTheme':
            return Object.assign({}, state, { theme: value });
          case 'toggleTheme':
            var newThemeId = 'dark' === state.theme ? 'light' : 'dark';
            return Object.assign({}, state, { theme: newThemeId });
          case 'toggleMenu':
            return Object.assign({}, state, { menuOpen: !state.menuOpen });
          default:
            throw new Error();
        }
      }
      var head = __webpack_require__('./node_modules/next/head.js'),
        head_default = __webpack_require__.n(head),
        use_presence = __webpack_require__(
          './node_modules/framer-motion/dist/es/components/AnimatePresence/use-presence.mjs'
        ),
        ScrollRestore = function () {
          var isPresent = (0, use_presence.hO)(),
            _useRouter = (0, router.useRouter)(),
            asPath = _useRouter.asPath,
            beforePopState = _useRouter.beforePopState;
          (0, react.useEffect)(function () {
            window.history.scrollRestoration = 'manual';
          }, []),
            (0, react.useEffect)(function () {
              beforePopState(function (state) {
                return (state.options.scroll = !1), !0;
              });
            }, []),
            (0, react.useEffect)(
              function () {
                if (isPresent) {
                  var hash = asPath.split('#')[1],
                    targetElement = document.getElementById(hash);
                  hash && targetElement
                    ? (window.scrollTo(0, targetElement.offsetTop),
                      targetElement.focus({ preventScroll: !0 }))
                    : (window.scrollTo(0, 0), document.body.focus({ preventScroll: !0 }));
                }
              },
              [asPath, isPresent]
            );
        };
      function _app_page_slicedToArray(arr, i) {
        return (
          (function _app_page_arrayWithHoles(arr) {
            if (Array.isArray(arr)) return arr;
          })(arr) ||
          (function _app_page_iterableToArrayLimit(arr, i) {
            var _i =
              null == arr
                ? null
                : ('undefined' != typeof Symbol && arr[Symbol.iterator]) ||
                  arr['@@iterator'];
            if (null == _i) return;
            var _s,
              _e,
              _arr = [],
              _n = !0,
              _d = !1;
            try {
              for (
                _i = _i.call(arr);
                !(_n = (_s = _i.next()).done) &&
                (_arr.push(_s.value), !i || _arr.length !== i);
                _n = !0
              );
            } catch (err) {
              (_d = !0), (_e = err);
            } finally {
              try {
                _n || null == _i.return || _i.return();
              } finally {
                if (_d) throw _e;
              }
            }
            return _arr;
          })(arr, i) ||
          (function _app_page_unsupportedIterableToArray(o, minLen) {
            if (!o) return;
            if ('string' == typeof o) return _app_page_arrayLikeToArray(o, minLen);
            var n = Object.prototype.toString.call(o).slice(8, -1);
            'Object' === n && o.constructor && (n = o.constructor.name);
            if ('Map' === n || 'Set' === n) return Array.from(o);
            if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
              return _app_page_arrayLikeToArray(o, minLen);
          })(arr, i) ||
          (function _app_page_nonIterableRest() {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      function _app_page_arrayLikeToArray(arr, len) {
        (null == len || len > arr.length) && (len = arr.length);
        for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
        return arr2;
      }
      var AppContext = (0, react.createContext)({}),
        App = function (_ref) {
          var Component = _ref.Component,
            pageProps = _ref.pageProps,
            storedTheme = _app_page_slicedToArray(useLocalStorage('theme', 'dark'), 1)[0],
            _useReducer2 = _app_page_slicedToArray(
              (0, react.useReducer)(reducer, initialState),
              2
            ),
            state = _useReducer2[0],
            dispatch = _useReducer2[1],
            _useRouter = (0, router.useRouter)(),
            route = _useRouter.route,
            asPath = _useRouter.asPath,
            canonicalRoute = '/' === route ? '' : `${asPath}`;
          return (
            useFoucFix(),
            (0, react.useEffect)(function () {
              console.info(
                '\n__  __  __\n\\ \\ \\ \\ \\∕\n \\ \\∕\\ \\\n  \\∕  \\∕\n\n\nTaking a peek huh? Check out the source code: https://github.com/yakkshit/my-portfolio\n\n\n'
              );
            }, []),
            (0, react.useEffect)(
              function () {
                dispatch({ type: 'setTheme', value: storedTheme || 'dark' });
              },
              [storedTheme]
            ),
            (0, jsx_runtime.jsx)(AppContext.Provider, {
              value: Object.assign({}, state, { dispatch }),
              children: (0, jsx_runtime.jsx)(ThemeProvider.f6, {
                themeId: state.theme,
                children: (0, jsx_runtime.jsx)(LazyMotion.X, {
                  features: features_animation.H,
                  children: (0, jsx_runtime.jsxs)(react.Fragment, {
                    children: [
                      (0, jsx_runtime.jsx)(head_default(), {
                        children: (0, jsx_runtime.jsx)('link', {
                          rel: 'canonical',
                          href: `https://yakkshit.com${canonicalRoute}`,
                        }),
                      }),
                      (0, jsx_runtime.jsx)(VisuallyHidden.T, {
                        showOnFocus: !0,
                        as: 'a',
                        className: App_App_module.skip,
                        href: '#MainContent',
                        children: 'Skip to main content',
                      }),
                      (0, jsx_runtime.jsx)(Navbar, {}),
                      (0, jsx_runtime.jsx)('main', {
                        className: App_App_module.app,
                        tabIndex: -1,
                        id: 'MainContent',
                        children: (0, jsx_runtime.jsx)(AnimatePresence.M, {
                          exitBeforeEnter: !0,
                          children: (0, jsx_runtime.jsxs)(
                            motion_minimal.m.div,
                            {
                              className: App_App_module.page,
                              initial: { opacity: 0 },
                              animate: { opacity: 1 },
                              exit: { opacity: 0 },
                              transition: {
                                type: 'tween',
                                ease: 'linear',
                                duration: (0, style.zG)(theme.T.base.durationS) / 1e3,
                                delay: 0.1,
                              },
                              children: [
                                (0, jsx_runtime.jsx)(ScrollRestore, {}),
                                (0, jsx_runtime.jsx)(
                                  Component,
                                  Object.assign({}, pageProps)
                                ),
                              ],
                            },
                            route
                          ),
                        }),
                      }),
                    ],
                  }),
                }),
              }),
            })
          );
        };
      (App.displayName = 'App'),
        (App.__docgenInfo = { description: '', methods: [], displayName: 'App' });
      function useAppContext() {
        return (0, react.useContext)(AppContext);
      }
      function useFormInput_slicedToArray(arr, i) {
        return (
          (function useFormInput_arrayWithHoles(arr) {
            if (Array.isArray(arr)) return arr;
          })(arr) ||
          (function useFormInput_iterableToArrayLimit(arr, i) {
            var _i =
              null == arr
                ? null
                : ('undefined' != typeof Symbol && arr[Symbol.iterator]) ||
                  arr['@@iterator'];
            if (null == _i) return;
            var _s,
              _e,
              _arr = [],
              _n = !0,
              _d = !1;
            try {
              for (
                _i = _i.call(arr);
                !(_n = (_s = _i.next()).done) &&
                (_arr.push(_s.value), !i || _arr.length !== i);
                _n = !0
              );
            } catch (err) {
              (_d = !0), (_e = err);
            } finally {
              try {
                _n || null == _i.return || _i.return();
              } finally {
                if (_d) throw _e;
              }
            }
            return _arr;
          })(arr, i) ||
          (function useFormInput_unsupportedIterableToArray(o, minLen) {
            if (!o) return;
            if ('string' == typeof o) return useFormInput_arrayLikeToArray(o, minLen);
            var n = Object.prototype.toString.call(o).slice(8, -1);
            'Object' === n && o.constructor && (n = o.constructor.name);
            if ('Map' === n || 'Set' === n) return Array.from(o);
            if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
              return useFormInput_arrayLikeToArray(o, minLen);
          })(arr, i) ||
          (function useFormInput_nonIterableRest() {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      function useFormInput_arrayLikeToArray(arr, len) {
        (null == len || len > arr.length) && (len = arr.length);
        for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
        return arr2;
      }
      function useFormInput() {
        var initialValue =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : '',
          _useState = (0, react.useState)(initialValue),
          _useState2 = useFormInput_slicedToArray(_useState, 2),
          value = _useState2[0],
          setValue = _useState2[1],
          _useState3 = (0, react.useState)(),
          _useState4 = useFormInput_slicedToArray(_useState3, 2),
          error = _useState4[0],
          setError = _useState4[1],
          _useState5 = (0, react.useState)(!1),
          _useState6 = useFormInput_slicedToArray(_useState5, 2),
          isDirty = _useState6[0],
          setIsDirty = _useState6[1],
          handleChange = function (event) {
            setValue(event.target.value),
              setIsDirty(!0),
              error && event.target.checkValidity() && setError(null);
          },
          handleInvalid = function (event) {
            event.preventDefault(), setError(event.target.validationMessage);
          },
          handleBlur = function (event) {
            isDirty && event.target.checkValidity();
          };
        return {
          value,
          error,
          onChange: handleChange,
          onBlur: handleBlur,
          onInvalid: handleInvalid,
        };
      }
      'undefined' != typeof STORYBOOK_REACT_CLASSES &&
        (STORYBOOK_REACT_CLASSES['src/pages/_app.page.js'] = {
          name: 'App',
          docgenInfo: App.__docgenInfo,
          path: 'src/pages/_app.page.js',
        });
      var useFoucFix = function () {
        (0, react.useEffect)(function () {
          var ssrPageStyleSheetsEntries = Array.from(
            document.querySelectorAll('link[rel="stylesheet"][data-n-p]')
          ).map(function (element) {
            return { element, href: element.getAttribute('href') };
          });
          ssrPageStyleSheetsEntries.forEach(function (_ref) {
            return _ref.element.removeAttribute('data-n-p');
          });
          var fixedStyleHrefs = [],
            observer = new MutationObserver(function (mutations) {
              mutations
                .filter(function (_ref2) {
                  var target = _ref2.target;
                  return (
                    'STYLE' === target.nodeName && target.hasAttribute('data-n-href')
                  );
                })
                .map(function (_ref3) {
                  var target = _ref3.target;
                  return { element: target, href: target.getAttribute('data-n-href') };
                })
                .forEach(function (_ref4) {
                  var element = _ref4.element,
                    href = _ref4.href;
                  fixedStyleHrefs.includes(href)
                    ? element.remove()
                    : (element.setAttribute('data-fouc-fix-n-href', href),
                      element.removeAttribute('data-n-href'),
                      fixedStyleHrefs.push(href));
                }),
                (ssrPageStyleSheetsEntries = ssrPageStyleSheetsEntries.reduce(function (
                  entries,
                  entry
                ) {
                  var element = entry.element,
                    href = entry.href;
                  return (
                    fixedStyleHrefs.includes(href)
                      ? element.remove()
                      : entries.push(entry),
                    entries
                  );
                },
                []));
            });
          return (
            observer.observe(document.head, { subtree: !0, attributeFilter: ['media'] }),
            function () {
              return observer.disconnect();
            }
          );
        }, []);
      };
      function useHasMounted_slicedToArray(arr, i) {
        return (
          (function useHasMounted_arrayWithHoles(arr) {
            if (Array.isArray(arr)) return arr;
          })(arr) ||
          (function useHasMounted_iterableToArrayLimit(arr, i) {
            var _i =
              null == arr
                ? null
                : ('undefined' != typeof Symbol && arr[Symbol.iterator]) ||
                  arr['@@iterator'];
            if (null == _i) return;
            var _s,
              _e,
              _arr = [],
              _n = !0,
              _d = !1;
            try {
              for (
                _i = _i.call(arr);
                !(_n = (_s = _i.next()).done) &&
                (_arr.push(_s.value), !i || _arr.length !== i);
                _n = !0
              );
            } catch (err) {
              (_d = !0), (_e = err);
            } finally {
              try {
                _n || null == _i.return || _i.return();
              } finally {
                if (_d) throw _e;
              }
            }
            return _arr;
          })(arr, i) ||
          (function useHasMounted_unsupportedIterableToArray(o, minLen) {
            if (!o) return;
            if ('string' == typeof o) return useHasMounted_arrayLikeToArray(o, minLen);
            var n = Object.prototype.toString.call(o).slice(8, -1);
            'Object' === n && o.constructor && (n = o.constructor.name);
            if ('Map' === n || 'Set' === n) return Array.from(o);
            if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
              return useHasMounted_arrayLikeToArray(o, minLen);
          })(arr, i) ||
          (function useHasMounted_nonIterableRest() {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      function useHasMounted_arrayLikeToArray(arr, len) {
        (null == len || len > arr.length) && (len = arr.length);
        for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
        return arr2;
      }
      function useHasMounted() {
        var _useState2 = useHasMounted_slicedToArray((0, react.useState)(!1), 2),
          mounted = _useState2[0],
          setMounted = _useState2[1];
        return (
          (0, react.useEffect)(function () {
            setMounted(!0);
          }, []),
          mounted
        );
      }
      function useInViewport_slicedToArray(arr, i) {
        return (
          (function useInViewport_arrayWithHoles(arr) {
            if (Array.isArray(arr)) return arr;
          })(arr) ||
          (function useInViewport_iterableToArrayLimit(arr, i) {
            var _i =
              null == arr
                ? null
                : ('undefined' != typeof Symbol && arr[Symbol.iterator]) ||
                  arr['@@iterator'];
            if (null == _i) return;
            var _s,
              _e,
              _arr = [],
              _n = !0,
              _d = !1;
            try {
              for (
                _i = _i.call(arr);
                !(_n = (_s = _i.next()).done) &&
                (_arr.push(_s.value), !i || _arr.length !== i);
                _n = !0
              );
            } catch (err) {
              (_d = !0), (_e = err);
            } finally {
              try {
                _n || null == _i.return || _i.return();
              } finally {
                if (_d) throw _e;
              }
            }
            return _arr;
          })(arr, i) ||
          (function useInViewport_unsupportedIterableToArray(o, minLen) {
            if (!o) return;
            if ('string' == typeof o) return useInViewport_arrayLikeToArray(o, minLen);
            var n = Object.prototype.toString.call(o).slice(8, -1);
            'Object' === n && o.constructor && (n = o.constructor.name);
            if ('Map' === n || 'Set' === n) return Array.from(o);
            if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
              return useInViewport_arrayLikeToArray(o, minLen);
          })(arr, i) ||
          (function useInViewport_nonIterableRest() {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      function useInViewport_arrayLikeToArray(arr, len) {
        (null == len || len > arr.length) && (len = arr.length);
        for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
        return arr2;
      }
      function useInViewport(elementRef, unobserveOnIntersect) {
        var options = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          shouldObserve =
            !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
          _useState = (0, react.useState)(!1),
          _useState2 = useInViewport_slicedToArray(_useState, 2),
          intersect = _useState2[0],
          setIntersect = _useState2[1],
          _useState3 = (0, react.useState)(!1),
          _useState4 = useInViewport_slicedToArray(_useState3, 2),
          isUnobserved = _useState4[0],
          setIsUnobserved = _useState4[1];
        return (
          (0, react.useEffect)(
            function () {
              if (null != elementRef && elementRef.current) {
                var observer = new IntersectionObserver(function (_ref) {
                  var entry = useInViewport_slicedToArray(_ref, 1)[0],
                    isIntersecting = entry.isIntersecting,
                    target = entry.target;
                  setIntersect(isIntersecting),
                    isIntersecting &&
                      unobserveOnIntersect &&
                      (observer.unobserve(target), setIsUnobserved(!0));
                }, options);
                return (
                  !isUnobserved && shouldObserve && observer.observe(elementRef.current),
                  function () {
                    return observer.disconnect();
                  }
                );
              }
            },
            [elementRef, unobserveOnIntersect, options, isUnobserved, shouldObserve]
          ),
          intersect
        );
      }
      function useLocalStorage_slicedToArray(arr, i) {
        return (
          (function useLocalStorage_arrayWithHoles(arr) {
            if (Array.isArray(arr)) return arr;
          })(arr) ||
          (function useLocalStorage_iterableToArrayLimit(arr, i) {
            var _i =
              null == arr
                ? null
                : ('undefined' != typeof Symbol && arr[Symbol.iterator]) ||
                  arr['@@iterator'];
            if (null == _i) return;
            var _s,
              _e,
              _arr = [],
              _n = !0,
              _d = !1;
            try {
              for (
                _i = _i.call(arr);
                !(_n = (_s = _i.next()).done) &&
                (_arr.push(_s.value), !i || _arr.length !== i);
                _n = !0
              );
            } catch (err) {
              (_d = !0), (_e = err);
            } finally {
              try {
                _n || null == _i.return || _i.return();
              } finally {
                if (_d) throw _e;
              }
            }
            return _arr;
          })(arr, i) ||
          (function useLocalStorage_unsupportedIterableToArray(o, minLen) {
            if (!o) return;
            if ('string' == typeof o) return useLocalStorage_arrayLikeToArray(o, minLen);
            var n = Object.prototype.toString.call(o).slice(8, -1);
            'Object' === n && o.constructor && (n = o.constructor.name);
            if ('Map' === n || 'Set' === n) return Array.from(o);
            if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
              return useLocalStorage_arrayLikeToArray(o, minLen);
          })(arr, i) ||
          (function useLocalStorage_nonIterableRest() {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      function useLocalStorage_arrayLikeToArray(arr, len) {
        (null == len || len > arr.length) && (len = arr.length);
        for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
        return arr2;
      }
      function useLocalStorage(key, initialValue) {
        var _useState2 = useLocalStorage_slicedToArray(
            (0, react.useState)(function () {
              if ('undefined' != typeof window)
                try {
                  var item = window.localStorage.getItem(key);
                  return item ? JSON.parse(item) : initialValue;
                } catch (error) {
                  return console.error(error), initialValue;
                }
            }),
            2
          ),
          storedValue = _useState2[0],
          setStoredValue = _useState2[1];
        return [
          storedValue,
          function (value) {
            try {
              var valueToStore = value instanceof Function ? value(storedValue) : value;
              setStoredValue(valueToStore),
                window.localStorage.setItem(key, JSON.stringify(valueToStore));
            } catch (error) {
              console.error(error);
            }
          },
        ];
      }
      var use_reduced_motion = __webpack_require__(
        './node_modules/framer-motion/dist/es/utils/use-reduced-motion.mjs'
      );
      function useScrollToHash() {
        var scrollTimeout = (0, react.useRef)(),
          _useRouter = (0, router.useRouter)(),
          asPath = _useRouter.asPath,
          push = _useRouter.push,
          reduceMotion = (0, use_reduced_motion.J)();
        return (0, react.useCallback)(
          function (hash, onDone) {
            var id = hash.split('#')[1],
              targetElement = document.getElementById(id),
              route = asPath.split('#')[0],
              newPath = `${route}#${id}`;
            targetElement.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth' });
            var handleScroll = function () {
              clearTimeout(scrollTimeout.current),
                (scrollTimeout.current = setTimeout(function () {
                  window.removeEventListener('scroll', handleScroll),
                    window.location.pathname === route &&
                      (null == onDone || onDone(), push(newPath, null, { scroll: !1 }));
                }, 50));
            };
            return (
              window.addEventListener('scroll', handleScroll),
              function () {
                window.removeEventListener('scroll', handleScroll),
                  clearTimeout(scrollTimeout.current);
              }
            );
          },
          [push, reduceMotion, asPath]
        );
      }
      function useWindowSize_slicedToArray(arr, i) {
        return (
          (function useWindowSize_arrayWithHoles(arr) {
            if (Array.isArray(arr)) return arr;
          })(arr) ||
          (function useWindowSize_iterableToArrayLimit(arr, i) {
            var _i =
              null == arr
                ? null
                : ('undefined' != typeof Symbol && arr[Symbol.iterator]) ||
                  arr['@@iterator'];
            if (null == _i) return;
            var _s,
              _e,
              _arr = [],
              _n = !0,
              _d = !1;
            try {
              for (
                _i = _i.call(arr);
                !(_n = (_s = _i.next()).done) &&
                (_arr.push(_s.value), !i || _arr.length !== i);
                _n = !0
              );
            } catch (err) {
              (_d = !0), (_e = err);
            } finally {
              try {
                _n || null == _i.return || _i.return();
              } finally {
                if (_d) throw _e;
              }
            }
            return _arr;
          })(arr, i) ||
          (function useWindowSize_unsupportedIterableToArray(o, minLen) {
            if (!o) return;
            if ('string' == typeof o) return useWindowSize_arrayLikeToArray(o, minLen);
            var n = Object.prototype.toString.call(o).slice(8, -1);
            'Object' === n && o.constructor && (n = o.constructor.name);
            if ('Map' === n || 'Set' === n) return Array.from(o);
            if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
              return useWindowSize_arrayLikeToArray(o, minLen);
          })(arr, i) ||
          (function useWindowSize_nonIterableRest() {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      function useWindowSize_arrayLikeToArray(arr, len) {
        (null == len || len > arr.length) && (len = arr.length);
        for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
        return arr2;
      }
      function useWindowSize() {
        var dimensions = (0, react.useRef)(function () {
            return { w: 1280, h: 800 };
          }),
          createRuler = (0, react.useCallback)(function () {
            var ruler = document.createElement('div');
            (ruler.style.position = 'fixed'),
              (ruler.style.height = '100vh'),
              (ruler.style.width = 0),
              (ruler.style.top = 0),
              document.documentElement.appendChild(ruler),
              (dimensions.current.w = window.innerWidth),
              (dimensions.current.h = ruler.offsetHeight),
              document.documentElement.removeChild(ruler),
              (ruler = null);
          }, []),
          getHeight = (0, react.useCallback)(
            function () {
              var _navigator;
              return (
                null === (_navigator = navigator) || void 0 === _navigator
                  ? void 0
                  : _navigator.userAgent.match(/iphone|ipod|ipad/i)
              )
                ? (createRuler(), dimensions.current.h)
                : window.innerHeight;
            },
            [createRuler]
          ),
          getSize = (0, react.useCallback)(
            function () {
              return { width: window.innerWidth, height: getHeight() };
            },
            [getHeight]
          ),
          _useState2 = useWindowSize_slicedToArray(
            (0, react.useState)(dimensions.current),
            2
          ),
          windowSize = _useState2[0],
          setWindowSize = _useState2[1];
        return (
          (0, react.useEffect)(
            function () {
              var handleResize = function () {
                setWindowSize(getSize());
              };
              return (
                window.addEventListener('resize', handleResize),
                handleResize(),
                function () {
                  window.removeEventListener('resize', handleResize);
                }
              );
            },
            [getSize]
          ),
          windowSize
        );
      }
    },
    './src/utils/image.js': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      'use strict';
      function _slicedToArray(arr, i) {
        return (
          (function _arrayWithHoles(arr) {
            if (Array.isArray(arr)) return arr;
          })(arr) ||
          (function _iterableToArrayLimit(arr, i) {
            var _i =
              null == arr
                ? null
                : ('undefined' != typeof Symbol && arr[Symbol.iterator]) ||
                  arr['@@iterator'];
            if (null == _i) return;
            var _s,
              _e,
              _arr = [],
              _n = !0,
              _d = !1;
            try {
              for (
                _i = _i.call(arr);
                !(_n = (_s = _i.next()).done) &&
                (_arr.push(_s.value), !i || _arr.length !== i);
                _n = !0
              );
            } catch (err) {
              (_d = !0), (_e = err);
            } finally {
              try {
                _n || null == _i.return || _i.return();
              } finally {
                if (_d) throw _e;
              }
            }
            return _arr;
          })(arr, i) ||
          (function _unsupportedIterableToArray(o, minLen) {
            if (!o) return;
            if ('string' == typeof o) return _arrayLikeToArray(o, minLen);
            var n = Object.prototype.toString.call(o).slice(8, -1);
            'Object' === n && o.constructor && (n = o.constructor.name);
            if ('Map' === n || 'Set' === n) return Array.from(o);
            if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
              return _arrayLikeToArray(o, minLen);
          })(arr, i) ||
          (function _nonIterableRest() {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      function _arrayLikeToArray(arr, len) {
        (null == len || len > arr.length) && (len = arr.length);
        for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
        return arr2;
      }
      function srcSetToString() {
        var srcSet = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        return 'string' == typeof srcSet
          ? srcSet
          : srcSet
              .map(function (item) {
                return `${item.src} ${item.width}w`;
              })
              .join(', ');
      }
      async function resolveSrcFromSrcSet(_ref2) {
        var srcSet = _ref2.srcSet,
          sizes = _ref2.sizes,
          stringSrcSet = srcSetToString(srcSet),
          sources = await Promise.all(
            stringSrcSet.split(', ').map(async function (srcString) {
              var _srcString$split2 = _slicedToArray(srcString.split(' '), 2),
                src = _srcString$split2[0],
                width = _srcString$split2[1],
                size = Number(width.replace('w', '')),
                image = await (async function generateImage() {
                  var width =
                      arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
                    height =
                      arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
                  return new Promise(function (resolve) {
                    var canvas = document.createElement('canvas'),
                      ctx = canvas.getContext('2d');
                    (canvas.width = width),
                      (canvas.height = height),
                      (ctx.fillStyle = 'rgba(0, 0, 0, 0)'),
                      ctx.fillRect(0, 0, width, height),
                      canvas.toBlob(async function (blob) {
                        if (!blob) throw new Error('Video thumbnail failed to load');
                        var image = URL.createObjectURL(blob);
                        canvas.remove(), resolve(image);
                      });
                  });
                })(size);
              return { src, image, width };
            })
          ),
          fakeSrcSet = sources
            .map(function (_ref3) {
              return `${_ref3.image} ${_ref3.width}`;
            })
            .join(', '),
          fakeSrc = await (async function loadImageFromSrcSet(_ref) {
            var src = _ref.src,
              srcSet = _ref.srcSet,
              sizes = _ref.sizes;
            return new Promise(function (resolve, reject) {
              var srcSetString = srcSetToString(srcSet);
              try {
                if (!src && !srcSet) throw new Error('No image src or srcSet provided');
                var tempImage = new Image();
                src && (tempImage.src = src),
                  srcSetString && (tempImage.srcset = srcSetString),
                  sizes && (tempImage.sizes = sizes);
                var onLoad = function () {
                  tempImage.removeEventListener('load', onLoad);
                  var source = tempImage.currentSrc;
                  (tempImage = null), resolve(source);
                };
                tempImage.addEventListener('load', onLoad);
              } catch (error) {
                reject(`Error loading ${srcSetString}: ${error}`);
              }
            });
          })({ srcSet: fakeSrcSet, sizes });
        return sources.find(function (src) {
          return src.image === fakeSrc;
        }).src;
      }
      __webpack_require__.d(__webpack_exports__, {
        A2: () => srcSetToString,
        Ro: () => resolveSrcFromSrcSet,
      });
    },
    './src/utils/style.js': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      'use strict';
      __webpack_require__.d(__webpack_exports__, {
        BC: () => media,
        Fh: () => cssProps,
        Q1: () => pxToRem,
        Sh: () => classes,
        aU: () => numToMs,
        zG: () => msToNum,
      });
      var media = {
          desktop: 2080,
          laptop: 1680,
          tablet: 1040,
          mobile: 696,
          mobileS: 400,
        },
        numToPx = function (num) {
          return `${num}px`;
        },
        pxToRem = function (px) {
          return px / 16 + 'rem';
        },
        msToNum = function (msString) {
          return Number(msString.replace('ms', ''));
        },
        numToMs = function (num) {
          return `${num}ms`;
        };
      function cssProps(props) {
        for (
          var style = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            result = {},
            keys = Object.keys(props),
            _i = 0,
            _keys = keys;
          _i < _keys.length;
          _i++
        ) {
          var key = _keys[_i],
            value = props[key];
          'number' == typeof value && 'delay' === key && (value = numToMs(value)),
            'number' == typeof value && 'opacity' !== key && (value = numToPx(value)),
            (result[`--${key}`] = value);
        }
        return Object.assign({}, result, style);
      }
      function classes() {
        for (
          var _len = arguments.length, classes = new Array(_len), _key = 0;
          _key < _len;
          _key++
        )
          classes[_key] = arguments[_key];
        return classes.filter(Boolean).join(' ');
      }
    },
    './src/utils/three.js': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      'use strict';
      __webpack_require__.d(__webpack_exports__, {
        Et: () => textureLoader,
        Ji: () => removeLights,
        Zf: () => modelLoader,
        e8: () => cleanRenderer,
        in: () => cleanScene,
      });
      var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          './node_modules/three/build/three.module.js'
        ),
        three_stdlib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          './node_modules/three-stdlib/loaders/DRACOLoader.js'
        ),
        three_stdlib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          './node_modules/three-stdlib/loaders/GLTFLoader.js'
        );
      function _createForOfIteratorHelper(o, allowArrayLike) {
        var it = ('undefined' != typeof Symbol && o[Symbol.iterator]) || o['@@iterator'];
        if (!it) {
          if (
            Array.isArray(o) ||
            (it = (function _unsupportedIterableToArray(o, minLen) {
              if (!o) return;
              if ('string' == typeof o) return _arrayLikeToArray(o, minLen);
              var n = Object.prototype.toString.call(o).slice(8, -1);
              'Object' === n && o.constructor && (n = o.constructor.name);
              if ('Map' === n || 'Set' === n) return Array.from(o);
              if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                return _arrayLikeToArray(o, minLen);
            })(o)) ||
            (allowArrayLike && o && 'number' == typeof o.length)
          ) {
            it && (o = it);
            var i = 0,
              F = function () {};
            return {
              s: F,
              n: function () {
                return i >= o.length ? { done: !0 } : { done: !1, value: o[i++] };
              },
              e: function (e) {
                throw e;
              },
              f: F,
            };
          }
          throw new TypeError(
            'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
          );
        }
        var err,
          normalCompletion = !0,
          didErr = !1;
        return {
          s: function () {
            it = it.call(o);
          },
          n: function () {
            var step = it.next();
            return (normalCompletion = step.done), step;
          },
          e: function (e) {
            (didErr = !0), (err = e);
          },
          f: function () {
            try {
              normalCompletion || null == it.return || it.return();
            } finally {
              if (didErr) throw err;
            }
          },
        };
      }
      function _arrayLikeToArray(arr, len) {
        (null == len || len > arr.length) && (len = arr.length);
        for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
        return arr2;
      }
      three__WEBPACK_IMPORTED_MODULE_0__.CtF.enabled = !0;
      var dracoLoader = new three_stdlib__WEBPACK_IMPORTED_MODULE_1__._(),
        gltfLoader = new three_stdlib__WEBPACK_IMPORTED_MODULE_2__.E();
      dracoLoader.setDecoderPath('/draco/'), gltfLoader.setDRACOLoader(dracoLoader);
      var modelLoader = gltfLoader,
        textureLoader = new three__WEBPACK_IMPORTED_MODULE_0__.dpR(),
        cleanScene = function (scene) {
          null == scene ||
            scene.traverse(function (object) {
              if (object.isMesh)
                if ((object.geometry.dispose(), object.material.isMaterial))
                  cleanMaterial(object.material);
                else {
                  var _step,
                    _iterator = _createForOfIteratorHelper(object.material);
                  try {
                    for (_iterator.s(); !(_step = _iterator.n()).done; ) {
                      var material = _step.value;
                      cleanMaterial(material);
                    }
                  } catch (err) {
                    _iterator.e(err);
                  } finally {
                    _iterator.f();
                  }
                }
            });
        },
        cleanMaterial = function (material) {
          material.dispose();
          for (
            var _i = 0, _Object$keys = Object.keys(material);
            _i < _Object$keys.length;
            _i++
          ) {
            var _value$source,
              _value$source$data,
              _value$source$data$cl,
              value = material[_Object$keys[_i]];
            if (value && 'object' == typeof value && 'minFilter' in value)
              value.dispose(),
                null === (_value$source = value.source) ||
                  void 0 === _value$source ||
                  null === (_value$source$data = _value$source.data) ||
                  void 0 === _value$source$data ||
                  null === (_value$source$data$cl = _value$source$data.close) ||
                  void 0 === _value$source$data$cl ||
                  _value$source$data$cl.call(_value$source$data);
          }
        },
        cleanRenderer = function (renderer) {
          renderer.dispose(), (renderer = null);
        },
        removeLights = function (lights) {
          var _step2,
            _iterator2 = _createForOfIteratorHelper(lights);
          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
              var light = _step2.value;
              light.parent.remove(light);
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
        };
    },
    './storybook-init-framework-entry.js': (
      __unused_webpack_module,
      __unused_webpack___webpack_exports__,
      __webpack_require__
    ) => {
      'use strict';
      __webpack_require__('./node_modules/@storybook/react/dist/esm/client/index.js');
    },
    './node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./node_modules/postcss-loader/dist/cjs.js!./.storybook/StoryContainer.css':
      (module, __webpack_exports__, __webpack_require__) => {
        'use strict';
        __webpack_require__.d(__webpack_exports__, {
          Z: () => __WEBPACK_DEFAULT_EXPORT__,
        });
        var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(
              './node_modules/css-loader/dist/runtime/cssWithMappingToString.js'
            ),
          _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default =
            __webpack_require__.n(
              _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__
            ),
          _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__('./node_modules/css-loader/dist/runtime/api.js'),
          ___CSS_LOADER_EXPORT___ = __webpack_require__.n(
            _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__
          )()(
            _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()
          );
        ___CSS_LOADER_EXPORT___.push([
          module.id,
          '.storyContainer {\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  align-items: flex-start;\n  justify-content: flex-start;\n}\n',
          '',
          {
            version: 3,
            sources: ['webpack://./.storybook/StoryContainer.css'],
            names: [],
            mappings: 'AAAA;EACE,YAAY;EACZ,aAAa;EACb,aAAa;EACb,uBAAuB;EACvB,2BAA2B;AAC7B',
            sourcesContent: [
              '.storyContainer {\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  align-items: flex-start;\n  justify-content: flex-start;\n}\n',
            ],
            sourceRoot: '',
          },
        ]);
        const __WEBPACK_DEFAULT_EXPORT__ = ___CSS_LOADER_EXPORT___;
      },
    './node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./node_modules/postcss-loader/dist/cjs.js!./.storybook/preview.css':
      (module, __webpack_exports__, __webpack_require__) => {
        'use strict';
        __webpack_require__.d(__webpack_exports__, {
          Z: () => __WEBPACK_DEFAULT_EXPORT__,
        });
        var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(
              './node_modules/css-loader/dist/runtime/cssWithMappingToString.js'
            ),
          _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default =
            __webpack_require__.n(
              _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__
            ),
          _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__('./node_modules/css-loader/dist/runtime/api.js'),
          ___CSS_LOADER_EXPORT___ = __webpack_require__.n(
            _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__
          )()(
            _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()
          );
        ___CSS_LOADER_EXPORT___.push([
          module.id,
          '.storyRoot {\n  position: absolute;\n  inset: 0;\n}\n',
          '',
          {
            version: 3,
            sources: ['webpack://./.storybook/preview.css'],
            names: [],
            mappings: 'AAAA;EACE,kBAAkB;EAClB,QAAQ;AACV',
            sourcesContent: ['.storyRoot {\n  position: absolute;\n  inset: 0;\n}\n'],
            sourceRoot: '',
          },
        ]);
        const __WEBPACK_DEFAULT_EXPORT__ = ___CSS_LOADER_EXPORT___;
      },
    './node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./node_modules/postcss-loader/dist/cjs.js!./src/components/Button/Button.module.css':
      (module, __webpack_exports__, __webpack_require__) => {
        'use strict';
        __webpack_require__.d(__webpack_exports__, {
          Z: () => __WEBPACK_DEFAULT_EXPORT__,
        });
        var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(
              './node_modules/css-loader/dist/runtime/cssWithMappingToString.js'
            ),
          _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default =
            __webpack_require__.n(
              _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__
            ),
          _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__('./node_modules/css-loader/dist/runtime/api.js'),
          ___CSS_LOADER_EXPORT___ = __webpack_require__.n(
            _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__
          )()(
            _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()
          );
        ___CSS_LOADER_EXPORT___.push([
          module.id,
          ".Button_button__L2wUb {\n  --buttonSize: calc((56 / 16) * 1rem);\n  --buttonFontSize: calc((18 / 16) * 1rem);\n  --buttonFocusWidth: 4px;\n  --buttonPadding: 0 var(--spaceL);\n  --buttonTextColor: rgb(var(--rgbBackground));\n  --buttonTextOpacity: 1;\n  --buttonLoaderDelay: 0s;\n\n  height: var(--buttonSize);\n  padding: var(--buttonPadding);\n  cursor: pointer;\n  transition-property: opacity, color, background;\n  transition-duration: var(--durationS);\n  transition-timing-function: var(--bezierFastoutSlowin);\n  display: inline-flex;\n  align-items: center;\n  color: var(--buttonTextColor);\n  position: relative;\n  isolation: isolate;\n}\n\n.Button_button__L2wUb:active {\n    transition-duration: calc(var(--durationXS) / 2);\n  }\n\n.Button_button__L2wUb::after {\n    content: '';\n    transition-property: opacity, color, background;\n    transition-duration: var(--durationM);\n    transition-timing-function: var(--bezierFastoutSlowin);\n    background: rgb(var(--rgbPrimary));\n    position: absolute;\n    inset: 0;\n    z-index: -1;\n    clip-path: polygon(0 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%);\n  }\n\n@media (prefers-reduced-motion: no-preference) {\n\n.Button_button__L2wUb {\n    transition-property: transform, opacity, color, background;\n}\n\n    .Button_button__L2wUb:hover {\n      transform: scale(1.05);\n    }\n\n    .Button_button__L2wUb:active {\n      transform: scale(1);\n    }\n  }\n\n.Button_button__L2wUb[data-secondary='true'] {\n    --buttonSpace: 10px;\n    --buttonTextColor: rgb(var(--rgbPrimary));\n\n    background: none;\n    padding-left: var(--buttonSpace);\n    padding-right: var(--buttonSpace);\n    position: relative;\n    left: calc(var(--buttonSpace) * -1);\n    height: calc((32 / 16) * 1rem);\n  }\n\n.Button_button__L2wUb[data-secondary='true']::after {\n      content: '';\n      height: calc((32 / 16) * 1rem);\n      position: absolute;\n      inset: 0;\n      background-color: rgb(var(--rgbPrimary) / 0.2);\n      transform: scale3d(0, 1, 1);\n      transform-origin: right;\n      clip-path: none;\n    }\n\n.Button_button__L2wUb[data-secondary='true']:hover {\n      transform: none;\n      background: transparent;\n    }\n\n.Button_button__L2wUb[data-secondary='true']:hover::after {\n      transform: scale3d(1, 1, 1);\n      transform-origin: left;\n    }\n\n.Button_button__L2wUb[data-secondary='true'][data-icon='chevronRight'] {\n      padding-left: calc(var(--buttonSpace) / 2);\n    }\n\n@media (prefers-reduced-motion: no-preference) {\n      .Button_button__L2wUb[data-secondary='true']::after {\n        transition: transform var(--durationM) var(--bezierFastoutSlowin);\n      }\n    }\n\n.Button_button__L2wUb[data-loading='true'] {\n    --buttonTextOpacity: 0;\n  }\n\n.Button_button__L2wUb[data-icon-only='true'] {\n    --buttonPadding: 0;\n    --buttonTextColor: var(--colorTextBody);\n\n    width: var(--buttonSize);\n    align-items: center;\n    justify-content: center;\n    padding: 0;\n  }\n\n.Button_button__L2wUb[data-icon-only='true']:hover {\n      transform: none;\n    }\n\n.Button_button__L2wUb[data-icon-only='true']::after {\n      background: rgb(var(--rgbText) / 0);\n    }\n\n.Button_button__L2wUb[data-icon-only='true']:hover::after {\n      background: rgb(var(--rgbText) / 0.1);\n    }\n\n.Button_button__L2wUb[disabled] {\n    pointer-events: none;\n    opacity: 0.4;\n  }\n\n.Button_text__t2U9w {\n  font-size: var(--buttonFontSize);\n  font-weight: var(--fontWeightMedium);\n  opacity: var(--buttonTextOpacity);\n  position: relative;\n  line-height: 1;\n  flex: 1 1 auto;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: opacity var(--durationM) var(--bezierFastoutSlowin);\n}\n\n.Button_loader__aTo2D {\n  position: absolute;\n  left: 50%;\n  transform: translateX(-50%);\n  color: rgb(var(--rgbBackground));\n  opacity: 0;\n  transition: opacity var(--durationM) ease var(--buttonLoaderDelay);\n}\n\n.Button_loader__aTo2D[data-visible='true'] {\n    opacity: 1;\n  }\n\n.Button_icon__mSIRG {\n  transition-property: opacity, fill;\n  transition-duration: var(--durationS);\n  transition-timing-function: var(--bezierFastoutSlowin);\n}\n\n@media (prefers-reduced-motion: no-preference) {\n\n.Button_icon__mSIRG {\n    transition-property: transform, opacity, fill;\n}\n  }\n\n.Button_icon__mSIRG[data-start='true'] {\n    margin-right: var(--spaceS);\n  }\n\n.Button_icon__mSIRG[data-end='true'] {\n    margin-left: var(--spaceS);\n  }\n\n@media (prefers-reduced-motion: no-preference) {\n\n.Button_button__L2wUb:hover .Button_icon__mSIRG[data-shift='true'] {\n      transform: translate3d(var(--spaceXS), 0, 0);\n}\n  }\n\n.Button_button__L2wUb[data-loading='true'] .Button_icon__mSIRG {\n    opacity: 0;\n}\n",
          '',
          {
            version: 3,
            sources: ['webpack://./src/components/Button/Button.module.css'],
            names: [],
            mappings:
              'AAAA;EACE,oCAAoC;EACpC,wCAAwC;EACxC,uBAAuB;EACvB,gCAAgC;EAChC,4CAA4C;EAC5C,sBAAsB;EACtB,uBAAuB;;EAEvB,yBAAyB;EACzB,6BAA6B;EAC7B,eAAe;EACf,+CAA+C;EAC/C,qCAAqC;EACrC,sDAAsD;EACtD,oBAAoB;EACpB,mBAAmB;EACnB,6BAA6B;EAC7B,kBAAkB;EAClB,kBAAkB;AAuGpB;;AArGE;IACE,gDAAgD;EAClD;;AAEA;IACE,WAAW;IACX,+CAA+C;IAC/C,qCAAqC;IACrC,sDAAsD;IACtD,kCAAkC;IAClC,kBAAkB;IAClB,QAAQ;IACR,WAAW;IACX,qFAAqF;EACvF;;AAEA;;AArCF;IAsCI,0DAA0D;AAoF9D;;IAlFI;MACE,sBAAsB;IACxB;;IAEA;MACE,mBAAmB;IACrB;EACF;;AAEA;IACE,mBAAmB;IACnB,yCAAyC;;IAEzC,gBAAgB;IAChB,gCAAgC;IAChC,iCAAiC;IACjC,kBAAkB;IAClB,mCAAmC;IACnC,8BAA8B;EAgChC;;AA9BE;MACE,WAAW;MACX,8BAA8B;MAC9B,kBAAkB;MAClB,QAAQ;MACR,8CAA8C;MAC9C,2BAA2B;MAC3B,uBAAuB;MACvB,eAAe;IACjB;;AAEA;MACE,eAAe;MACf,uBAAuB;IACzB;;AAEA;MACE,2BAA2B;MAC3B,sBAAsB;IACxB;;AAEA;MACE,0CAA0C;IAC5C;;AAEA;MACE;QACE,iEAAiE;MACnE;IACF;;AAGF;IACE,sBAAsB;EACxB;;AAEA;IACE,kBAAkB;IAClB,uCAAuC;;IAEvC,wBAAwB;IACxB,mBAAmB;IACnB,uBAAuB;IACvB,UAAU;EAaZ;;AAXE;MACE,eAAe;IACjB;;AAEA;MACE,mCAAmC;IACrC;;AAEA;MACE,qCAAqC;IACvC;;AAGF;IACE,oBAAoB;IACpB,YAAY;EACd;;AAGF;EACE,gCAAgC;EAChC,oCAAoC;EACpC,iCAAiC;EACjC,kBAAkB;EAClB,cAAc;EACd,cAAc;EACd,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,+DAA+D;AACjE;;AAEA;EACE,kBAAkB;EAClB,SAAS;EACT,2BAA2B;EAC3B,gCAAgC;EAChC,UAAU;EACV,kEAAkE;AAKpE;;AAHE;IACE,UAAU;EACZ;;AAGF;EACE,kCAAkC;EAClC,qCAAqC;EACrC,sDAAsD;AAuBxD;;AArBE;;AALF;IAMI,6CAA6C;AAoBjD;EAnBE;;AAEA;IACE,2BAA2B;EAC7B;;AAEA;IACE,0BAA0B;EAC5B;;AAEA;;AAjBF;MAmBM,4CAA4C;AAOlD;EALE;;AArBF;IAwBI,UAAU;AAEd',
            sourcesContent: [
              ".button {\n  --buttonSize: calc((56 / 16) * 1rem);\n  --buttonFontSize: calc((18 / 16) * 1rem);\n  --buttonFocusWidth: 4px;\n  --buttonPadding: 0 var(--spaceL);\n  --buttonTextColor: rgb(var(--rgbBackground));\n  --buttonTextOpacity: 1;\n  --buttonLoaderDelay: 0s;\n\n  height: var(--buttonSize);\n  padding: var(--buttonPadding);\n  cursor: pointer;\n  transition-property: opacity, color, background;\n  transition-duration: var(--durationS);\n  transition-timing-function: var(--bezierFastoutSlowin);\n  display: inline-flex;\n  align-items: center;\n  color: var(--buttonTextColor);\n  position: relative;\n  isolation: isolate;\n\n  &:active {\n    transition-duration: calc(var(--durationXS) / 2);\n  }\n\n  &::after {\n    content: '';\n    transition-property: opacity, color, background;\n    transition-duration: var(--durationM);\n    transition-timing-function: var(--bezierFastoutSlowin);\n    background: rgb(var(--rgbPrimary));\n    position: absolute;\n    inset: 0;\n    z-index: -1;\n    clip-path: polygon(0 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%);\n  }\n\n  @media (--mediaUseMotion) {\n    transition-property: transform, opacity, color, background;\n\n    &:hover {\n      transform: scale(1.05);\n    }\n\n    &:active {\n      transform: scale(1);\n    }\n  }\n\n  &[data-secondary='true'] {\n    --buttonSpace: 10px;\n    --buttonTextColor: rgb(var(--rgbPrimary));\n\n    background: none;\n    padding-left: var(--buttonSpace);\n    padding-right: var(--buttonSpace);\n    position: relative;\n    left: calc(var(--buttonSpace) * -1);\n    height: calc((32 / 16) * 1rem);\n\n    &::after {\n      content: '';\n      height: calc((32 / 16) * 1rem);\n      position: absolute;\n      inset: 0;\n      background-color: rgb(var(--rgbPrimary) / 0.2);\n      transform: scale3d(0, 1, 1);\n      transform-origin: right;\n      clip-path: none;\n    }\n\n    &:hover {\n      transform: none;\n      background: transparent;\n    }\n\n    &:hover::after {\n      transform: scale3d(1, 1, 1);\n      transform-origin: left;\n    }\n\n    &[data-icon='chevronRight'] {\n      padding-left: calc(var(--buttonSpace) / 2);\n    }\n\n    @media (--mediaUseMotion) {\n      &::after {\n        transition: transform var(--durationM) var(--bezierFastoutSlowin);\n      }\n    }\n  }\n\n  &[data-loading='true'] {\n    --buttonTextOpacity: 0;\n  }\n\n  &[data-icon-only='true'] {\n    --buttonPadding: 0;\n    --buttonTextColor: var(--colorTextBody);\n\n    width: var(--buttonSize);\n    align-items: center;\n    justify-content: center;\n    padding: 0;\n\n    &:hover {\n      transform: none;\n    }\n\n    &::after {\n      background: rgb(var(--rgbText) / 0);\n    }\n\n    &:hover::after {\n      background: rgb(var(--rgbText) / 0.1);\n    }\n  }\n\n  &[disabled] {\n    pointer-events: none;\n    opacity: 0.4;\n  }\n}\n\n.text {\n  font-size: var(--buttonFontSize);\n  font-weight: var(--fontWeightMedium);\n  opacity: var(--buttonTextOpacity);\n  position: relative;\n  line-height: 1;\n  flex: 1 1 auto;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: opacity var(--durationM) var(--bezierFastoutSlowin);\n}\n\n.loader {\n  position: absolute;\n  left: 50%;\n  transform: translateX(-50%);\n  color: rgb(var(--rgbBackground));\n  opacity: 0;\n  transition: opacity var(--durationM) ease var(--buttonLoaderDelay);\n\n  &[data-visible='true'] {\n    opacity: 1;\n  }\n}\n\n.icon {\n  transition-property: opacity, fill;\n  transition-duration: var(--durationS);\n  transition-timing-function: var(--bezierFastoutSlowin);\n\n  @media (--mediaUseMotion) {\n    transition-property: transform, opacity, fill;\n  }\n\n  &[data-start='true'] {\n    margin-right: var(--spaceS);\n  }\n\n  &[data-end='true'] {\n    margin-left: var(--spaceS);\n  }\n\n  @media (--mediaUseMotion) {\n    @nest .button:hover &[data-shift='true'] {\n      transform: translate3d(var(--spaceXS), 0, 0);\n    }\n  }\n\n  @nest .button[data-loading='true'] & {\n    opacity: 0;\n  }\n}\n",
            ],
            sourceRoot: '',
          },
        ]),
          (___CSS_LOADER_EXPORT___.locals = {
            button: 'Button_button__L2wUb',
            text: 'Button_text__t2U9w',
            loader: 'Button_loader__aTo2D',
            icon: 'Button_icon__mSIRG',
          });
        const __WEBPACK_DEFAULT_EXPORT__ = ___CSS_LOADER_EXPORT___;
      },
    './node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./node_modules/postcss-loader/dist/cjs.js!./src/components/Carousel/Carousel.module.css':
      (module, __webpack_exports__, __webpack_require__) => {
        'use strict';
        __webpack_require__.d(__webpack_exports__, {
          Z: () => __WEBPACK_DEFAULT_EXPORT__,
        });
        var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(
              './node_modules/css-loader/dist/runtime/cssWithMappingToString.js'
            ),
          _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default =
            __webpack_require__.n(
              _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__
            ),
          _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__('./node_modules/css-loader/dist/runtime/api.js'),
          ___CSS_LOADER_EXPORT___ = __webpack_require__.n(
            _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__
          )()(
            _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()
          );
        ___CSS_LOADER_EXPORT___.push([
          module.id,
          ".Carousel_carousel__Sspl_ {\n  position: relative;\n}\n\n.Carousel_content__gQHGr {\n  position: relative;\n  display: grid;\n  align-items: center;\n}\n\n.Carousel_imageWrapper__qTCVg {\n  position: relative;\n  display: grid;\n  grid-template-columns: 100%;\n  cursor: grab;\n  touch-action: none;\n}\n\n.Carousel_imageWrapper__qTCVg[data-dragging='true'] {\n    cursor: grabbing;\n  }\n\n.Carousel_canvasWrapper__fJ9wa {\n  position: relative;\n  grid-column: 1;\n  grid-row: 1;\n  user-select: none;\n  aspect-ratio: var(--aspectRatio);\n  isolation: isolate;\n}\n\n.Carousel_canvas__M9q1k {\n  position: relative;\n}\n\n.Carousel_placeholder__9B_u0 {\n  grid-column: 1;\n  grid-row: 1;\n  width: 100%;\n  transition: opacity 1s ease;\n  opacity: 1;\n  pointer-events: none;\n  position: relative;\n  z-index: var(--zIndex1);\n}\n\n.Carousel_placeholder__9B_u0[data-loaded='true'] {\n    opacity: 0;\n  }\n\n.Carousel_button___Co_K {\n  border: 0;\n  margin: 0;\n  background: none;\n  width: 70px;\n  aspect-ratio: 1 / 1;\n  grid-area: 1 / 1;\n  position: absolute;\n  z-index: var(--zIndex3);\n  cursor: pointer;\n  display: grid;\n  place-items: center;\n}\n\n.Carousel_button___Co_K::before {\n    content: '';\n    position: absolute;\n    inset: 0;\n    transition-property: background, box-shadow;\n    transition-duration: var(--durationM);\n    transition-timing-function: var(--bezierFastoutSlowin);\n    clip-path: polygon(\n      0 0,\n      100% 0,\n      100% calc(100% - 12px),\n      calc(100% - 12px) 100%,\n      0 100%\n    );\n  }\n\n.Carousel_button___Co_K:hover::before {\n    background: rgb(var(--rgbWhite) / 0.1);\n  }\n\n.Carousel_button___Co_K svg {\n    position: relative;\n    left: var(--offset);\n    fill: rgb(var(--rgbWhite));\n  }\n\n@media (max-width: 696px) {\n\n.Carousel_button___Co_K {\n    display: none;\n}\n  }\n\n.Carousel_button___Co_K[data-prev='true'] {\n    --offset: -2px;\n\n    left: var(--spaceM);\n  }\n\n.Carousel_button___Co_K[data-next='true'] {\n    --offset: 2px;\n\n    right: var(--spaceM);\n  }\n\n.Carousel_nav__aYsww {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-top: var(--spaceS);\n}\n\n.Carousel_navButton__Fq3pI {\n  --navButtonSize: 10px;\n  --buttonColor: rgb(var(--rgbText) / 0.2);\n\n  background: none;\n  border: 0;\n  margin: 0;\n  padding: var(--spaceM);\n  cursor: pointer;\n}\n\n.Carousel_navButton__Fq3pI[aria-pressed='true'] {\n    --buttonColor: var(--colorTextBody);\n  }\n\n.Carousel_navButton__Fq3pI::after {\n    content: '';\n    display: block;\n    border-radius: 50%;\n    width: var(--navButtonSize);\n    height: var(--navButtonSize);\n    background: var(--buttonColor);\n    transition-property: background, box-shadow;\n    transition-duration: var(--durationL);\n    transition-timing-function: var(--bezierFastoutSlowin);\n  }\n",
          '',
          {
            version: 3,
            sources: ['webpack://./src/components/Carousel/Carousel.module.css'],
            names: [],
            mappings:
              'AAAA;EACE,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;EAClB,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;EAClB,aAAa;EACb,2BAA2B;EAC3B,YAAY;EACZ,kBAAkB;AAKpB;;AAHE;IACE,gBAAgB;EAClB;;AAGF;EACE,kBAAkB;EAClB,cAAc;EACd,WAAW;EACX,iBAAiB;EACjB,gCAAgC;EAChC,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,cAAc;EACd,WAAW;EACX,WAAW;EACX,2BAA2B;EAC3B,UAAU;EACV,oBAAoB;EACpB,kBAAkB;EAClB,uBAAuB;AAKzB;;AAHE;IACE,UAAU;EACZ;;AAGF;EACE,SAAS;EACT,SAAS;EACT,gBAAgB;EAChB,WAAW;EACX,mBAAmB;EACnB,gBAAgB;EAChB,kBAAkB;EAClB,uBAAuB;EACvB,eAAe;EACf,aAAa;EACb,mBAAmB;AA2CrB;;AAzCE;IACE,WAAW;IACX,kBAAkB;IAClB,QAAQ;IACR,2CAA2C;IAC3C,qCAAqC;IACrC,sDAAsD;IACtD;;;;;;KAMC;EACH;;AAEA;IACE,sCAAsC;EACxC;;AAEA;IACE,kBAAkB;IAClB,mBAAmB;IACnB,0BAA0B;EAC5B;;AAEA;;AAvCF;IAwCI,aAAa;AAcjB;EAbE;;AAEA;IACE,cAAc;;IAEd,mBAAmB;EACrB;;AAEA;IACE,aAAa;;IAEb,oBAAoB;EACtB;;AAGF;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,yBAAyB;AAC3B;;AAEA;EACE,qBAAqB;EACrB,wCAAwC;;EAExC,gBAAgB;EAChB,SAAS;EACT,SAAS;EACT,sBAAsB;EACtB,eAAe;AAiBjB;;AAfE;IACE,mCAAmC;EACrC;;AAEA;IACE,WAAW;IACX,cAAc;IACd,kBAAkB;IAClB,2BAA2B;IAC3B,4BAA4B;IAC5B,8BAA8B;IAC9B,2CAA2C;IAC3C,qCAAqC;IACrC,sDAAsD;EACxD',
            sourcesContent: [
              ".carousel {\n  position: relative;\n}\n\n.content {\n  position: relative;\n  display: grid;\n  align-items: center;\n}\n\n.imageWrapper {\n  position: relative;\n  display: grid;\n  grid-template-columns: 100%;\n  cursor: grab;\n  touch-action: none;\n\n  &[data-dragging='true'] {\n    cursor: grabbing;\n  }\n}\n\n.canvasWrapper {\n  position: relative;\n  grid-column: 1;\n  grid-row: 1;\n  user-select: none;\n  aspect-ratio: var(--aspectRatio);\n  isolation: isolate;\n}\n\n.canvas {\n  position: relative;\n}\n\n.placeholder {\n  grid-column: 1;\n  grid-row: 1;\n  width: 100%;\n  transition: opacity 1s ease;\n  opacity: 1;\n  pointer-events: none;\n  position: relative;\n  z-index: var(--zIndex1);\n\n  &[data-loaded='true'] {\n    opacity: 0;\n  }\n}\n\n.button {\n  border: 0;\n  margin: 0;\n  background: none;\n  width: 70px;\n  aspect-ratio: 1 / 1;\n  grid-area: 1 / 1;\n  position: absolute;\n  z-index: var(--zIndex3);\n  cursor: pointer;\n  display: grid;\n  place-items: center;\n\n  &::before {\n    content: '';\n    position: absolute;\n    inset: 0;\n    transition-property: background, box-shadow;\n    transition-duration: var(--durationM);\n    transition-timing-function: var(--bezierFastoutSlowin);\n    clip-path: polygon(\n      0 0,\n      100% 0,\n      100% calc(100% - 12px),\n      calc(100% - 12px) 100%,\n      0 100%\n    );\n  }\n\n  &:hover::before {\n    background: rgb(var(--rgbWhite) / 0.1);\n  }\n\n  & svg {\n    position: relative;\n    left: var(--offset);\n    fill: rgb(var(--rgbWhite));\n  }\n\n  @media (--mediaMobile) {\n    display: none;\n  }\n\n  &[data-prev='true'] {\n    --offset: -2px;\n\n    left: var(--spaceM);\n  }\n\n  &[data-next='true'] {\n    --offset: 2px;\n\n    right: var(--spaceM);\n  }\n}\n\n.nav {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-top: var(--spaceS);\n}\n\n.navButton {\n  --navButtonSize: 10px;\n  --buttonColor: rgb(var(--rgbText) / 0.2);\n\n  background: none;\n  border: 0;\n  margin: 0;\n  padding: var(--spaceM);\n  cursor: pointer;\n\n  &[aria-pressed='true'] {\n    --buttonColor: var(--colorTextBody);\n  }\n\n  &::after {\n    content: '';\n    display: block;\n    border-radius: 50%;\n    width: var(--navButtonSize);\n    height: var(--navButtonSize);\n    background: var(--buttonColor);\n    transition-property: background, box-shadow;\n    transition-duration: var(--durationL);\n    transition-timing-function: var(--bezierFastoutSlowin);\n  }\n}\n",
            ],
            sourceRoot: '',
          },
        ]),
          (___CSS_LOADER_EXPORT___.locals = {
            carousel: 'Carousel_carousel__Sspl_',
            content: 'Carousel_content__gQHGr',
            imageWrapper: 'Carousel_imageWrapper__qTCVg',
            canvasWrapper: 'Carousel_canvasWrapper__fJ9wa',
            canvas: 'Carousel_canvas__M9q1k',
            placeholder: 'Carousel_placeholder__9B_u0',
            button: 'Carousel_button___Co_K',
            nav: 'Carousel_nav__aYsww',
            navButton: 'Carousel_navButton__Fq3pI',
          });
        const __WEBPACK_DEFAULT_EXPORT__ = ___CSS_LOADER_EXPORT___;
      },
    './node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./node_modules/postcss-loader/dist/cjs.js!./src/components/DecoderText/DecoderText.module.css':
      (module, __webpack_exports__, __webpack_require__) => {
        'use strict';
        __webpack_require__.d(__webpack_exports__, {
          Z: () => __WEBPACK_DEFAULT_EXPORT__,
        });
        var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(
              './node_modules/css-loader/dist/runtime/cssWithMappingToString.js'
            ),
          _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default =
            __webpack_require__.n(
              _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__
            ),
          _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__('./node_modules/css-loader/dist/runtime/api.js'),
          ___CSS_LOADER_EXPORT___ = __webpack_require__.n(
            _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__
          )()(
            _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()
          );
        ___CSS_LOADER_EXPORT___.push([
          module.id,
          "\n  .DecoderText_text__ZFBnw::after {\n    content: '_';\n    visibility: hidden;\n  }\n\n.DecoderText_glyph__vCP7h {\n  opacity: 0.8;\n  font-weight: var(--fontWeightRegular);\n  font-family: var(--japaneseFontStack);\n  line-height: 0;\n}\n\n.DecoderText_value__DIA5G {\n  opacity: 1;\n}\n",
          '',
          {
            version: 3,
            sources: ['webpack://./src/components/DecoderText/DecoderText.module.css'],
            names: [],
            mappings:
              ';EACE;IACE,YAAY;IACZ,kBAAkB;EACpB;;AAGF;EACE,YAAY;EACZ,qCAAqC;EACrC,qCAAqC;EACrC,cAAc;AAChB;;AAEA;EACE,UAAU;AACZ',
            sourcesContent: [
              ".text {\n  &::after {\n    content: '_';\n    visibility: hidden;\n  }\n}\n\n.glyph {\n  opacity: 0.8;\n  font-weight: var(--fontWeightRegular);\n  font-family: var(--japaneseFontStack);\n  line-height: 0;\n}\n\n.value {\n  opacity: 1;\n}\n",
            ],
            sourceRoot: '',
          },
        ]),
          (___CSS_LOADER_EXPORT___.locals = {
            text: 'DecoderText_text__ZFBnw',
            glyph: 'DecoderText_glyph__vCP7h',
            value: 'DecoderText_value__DIA5G',
          });
        const __WEBPACK_DEFAULT_EXPORT__ = ___CSS_LOADER_EXPORT___;
      },
    './node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./node_modules/postcss-loader/dist/cjs.js!./src/components/Heading/Heading.module.css':
      (module, __webpack_exports__, __webpack_require__) => {
        'use strict';
        __webpack_require__.d(__webpack_exports__, {
          Z: () => __WEBPACK_DEFAULT_EXPORT__,
        });
        var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(
              './node_modules/css-loader/dist/runtime/cssWithMappingToString.js'
            ),
          _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default =
            __webpack_require__.n(
              _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__
            ),
          _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__('./node_modules/css-loader/dist/runtime/api.js'),
          ___CSS_LOADER_EXPORT___ = __webpack_require__.n(
            _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__
          )()(
            _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()
          );
        ___CSS_LOADER_EXPORT___.push([
          module.id,
          ".Heading_heading__209rB {\n  line-height: var(--lineHeightTitle);\n  color: var(--colorTextTitle);\n}\n.Heading_heading__209rB[data-level='0'] {\n    letter-spacing: -0.05em;\n    font-size: var(--fontSizeH0);\n  }\n.Heading_heading__209rB[data-level='1'] {\n    letter-spacing: -0.05em;\n    font-size: var(--fontSizeH1);\n  }\n.Heading_heading__209rB[data-level='2'] {\n    font-size: var(--fontSizeH2);\n    letter-spacing: -0.04em;\n  }\n.Heading_heading__209rB[data-level='3'] {\n    font-size: var(--fontSizeH3);\n    letter-spacing: -0.02em;\n  }\n.Heading_heading__209rB[data-level='4'] {\n    font-size: var(--fontSizeH4);\n    letter-spacing: -0.01em;\n  }\n.Heading_heading__209rB[data-level='5'] {\n    font-size: var(--fontSizeH5);\n  }\n.Heading_heading__209rB[data-align='auto'] {\n    text-align: inherit;\n  }\n.Heading_heading__209rB[data-align='start'] {\n    text-align: start;\n  }\n.Heading_heading__209rB[data-align='center'] {\n    text-align: center;\n  }\n.Heading_heading__209rB[data-weight='regular'] {\n    font-weight: var(--fontWeightRegular);\n  }\n.Heading_heading__209rB[data-weight='medium'] {\n    font-weight: var(--fontWeightMedium);\n  }\n.Heading_heading__209rB[data-weight='bold'] {\n    font-weight: var(--fontWeightBold);\n  }\n",
          '',
          {
            version: 3,
            sources: ['webpack://./src/components/Heading/Heading.module.css'],
            names: [],
            mappings:
              'AAAA;EACE,mCAAmC;EACnC,4BAA4B;AAsD9B;AApDE;IACE,uBAAuB;IACvB,4BAA4B;EAC9B;AAEA;IACE,uBAAuB;IACvB,4BAA4B;EAC9B;AAEA;IACE,4BAA4B;IAC5B,uBAAuB;EACzB;AAEA;IACE,4BAA4B;IAC5B,uBAAuB;EACzB;AAEA;IACE,4BAA4B;IAC5B,uBAAuB;EACzB;AAEA;IACE,4BAA4B;EAC9B;AAEA;IACE,mBAAmB;EACrB;AAEA;IACE,iBAAiB;EACnB;AAEA;IACE,kBAAkB;EACpB;AAEA;IACE,qCAAqC;EACvC;AAEA;IACE,oCAAoC;EACtC;AAEA;IACE,kCAAkC;EACpC',
            sourcesContent: [
              ".heading {\n  line-height: var(--lineHeightTitle);\n  color: var(--colorTextTitle);\n\n  &[data-level='0'] {\n    letter-spacing: -0.05em;\n    font-size: var(--fontSizeH0);\n  }\n\n  &[data-level='1'] {\n    letter-spacing: -0.05em;\n    font-size: var(--fontSizeH1);\n  }\n\n  &[data-level='2'] {\n    font-size: var(--fontSizeH2);\n    letter-spacing: -0.04em;\n  }\n\n  &[data-level='3'] {\n    font-size: var(--fontSizeH3);\n    letter-spacing: -0.02em;\n  }\n\n  &[data-level='4'] {\n    font-size: var(--fontSizeH4);\n    letter-spacing: -0.01em;\n  }\n\n  &[data-level='5'] {\n    font-size: var(--fontSizeH5);\n  }\n\n  &[data-align='auto'] {\n    text-align: inherit;\n  }\n\n  &[data-align='start'] {\n    text-align: start;\n  }\n\n  &[data-align='center'] {\n    text-align: center;\n  }\n\n  &[data-weight='regular'] {\n    font-weight: var(--fontWeightRegular);\n  }\n\n  &[data-weight='medium'] {\n    font-weight: var(--fontWeightMedium);\n  }\n\n  &[data-weight='bold'] {\n    font-weight: var(--fontWeightBold);\n  }\n}\n",
            ],
            sourceRoot: '',
          },
        ]),
          (___CSS_LOADER_EXPORT___.locals = { heading: 'Heading_heading__209rB' });
        const __WEBPACK_DEFAULT_EXPORT__ = ___CSS_LOADER_EXPORT___;
      },
    './node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./node_modules/postcss-loader/dist/cjs.js!./src/components/Icon/Icon.module.css':
      (module, __webpack_exports__, __webpack_require__) => {
        'use strict';
        __webpack_require__.d(__webpack_exports__, {
          Z: () => __WEBPACK_DEFAULT_EXPORT__,
        });
        var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(
              './node_modules/css-loader/dist/runtime/cssWithMappingToString.js'
            ),
          _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default =
            __webpack_require__.n(
              _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__
            ),
          _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__('./node_modules/css-loader/dist/runtime/api.js'),
          ___CSS_LOADER_EXPORT___ = __webpack_require__.n(
            _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__
          )()(
            _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()
          );
        ___CSS_LOADER_EXPORT___.push([
          module.id,
          '.Icon_icon__t_YgI {\n  fill: currentColor;\n}\n',
          '',
          {
            version: 3,
            sources: ['webpack://./src/components/Icon/Icon.module.css'],
            names: [],
            mappings: 'AAAA;EACE,kBAAkB;AACpB',
            sourcesContent: ['.icon {\n  fill: currentColor;\n}\n'],
            sourceRoot: '',
          },
        ]),
          (___CSS_LOADER_EXPORT___.locals = { icon: 'Icon_icon__t_YgI' });
        const __WEBPACK_DEFAULT_EXPORT__ = ___CSS_LOADER_EXPORT___;
      },
    './node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./node_modules/postcss-loader/dist/cjs.js!./src/components/Image/Image.module.css':
      (module, __webpack_exports__, __webpack_require__) => {
        'use strict';
        __webpack_require__.d(__webpack_exports__, {
          Z: () => __WEBPACK_DEFAULT_EXPORT__,
        });
        var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(
              './node_modules/css-loader/dist/runtime/cssWithMappingToString.js'
            ),
          _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default =
            __webpack_require__.n(
              _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__
            ),
          _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__('./node_modules/css-loader/dist/runtime/api.js'),
          ___CSS_LOADER_EXPORT___ = __webpack_require__.n(
            _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__
          )()(
            _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()
          );
        ___CSS_LOADER_EXPORT___.push([
          module.id,
          ".Image_image__fhfXL {\n  position: relative;\n  transform: translate3d(0, 0, 0);\n  display: grid;\n  grid-template-columns: 100%;\n  isolation: isolate;\n}\n\n.Image_image__fhfXL[data-raised='true'] {\n    box-shadow: 0 50px 100px -20px rgb(var(--rgbBlack) / 0.25),\n      0 30px 60px -30px rgb(var(--rgbBlack) / 0.3);\n  }\n\n.Image_image__fhfXL[data-reveal='true'] {\n    --revealDuration: 1.8s;\n\n    transition: box-shadow var(--durationL) ease calc(var(--revealDuration) / 2);\n  }\n\n.Image_image__fhfXL[data-reveal='true']:not([data-visible='true']) {\n      box-shadow: none;\n    }\n\n.Image_image__fhfXL[data-reveal='true']::before {\n      content: '';\n      background-color: rgb(var(--rgbAccent));\n      position: absolute;\n      inset: 0;\n      transform: scale3d(0, 1, 1);\n      transform-origin: left;\n      will-change: transform;\n      z-index: var(--zIndex2);\n    }\n\n@media (prefers-reduced-motion: no-preference) {\n      .Image_image__fhfXL[data-reveal='true'][data-visible='true']::before {\n        animation: reveal var(--revealDuration) var(--bezierFastoutSlowin) var(--delay);\n      }\n    }\n\n.Image_container__9ry6H {\n  position: relative;\n  transform: none;\n  display: grid;\n  grid-template-columns: 100%;\n}\n\n.Image_elementWrapper__dY5KC {\n  opacity: 0;\n  transition: none;\n  transform: none;\n  position: relative;\n  display: grid;\n  grid-template-columns: 100%;\n}\n\n.Image_elementWrapper__dY5KC[data-reveal='true'] {\n    opacity: 0;\n    transition: opacity var(--durationM) ease var(--delay);\n  }\n\n@media (prefers-reduced-motion: reduce) {\n\n.Image_elementWrapper__dY5KC[data-reveal='true'] {\n      transition-delay: calc(var(--delay) - 1s);\n  }\n    }\n\n.Image_elementWrapper__dY5KC[data-visible='true'] {\n    opacity: 1;\n  }\n\n.Image_placeholder__rZeKX {\n  width: 100%;\n  height: auto;\n  transition: opacity var(--durationM) ease var(--delay);\n  pointer-events: none;\n  position: relative;\n  z-index: var(--zIndex1);\n  opacity: 1;\n  grid-column: 1;\n  grid-row: 1;\n}\n\n.Image_placeholder__rZeKX[data-loaded='true'] {\n    opacity: 0;\n  }\n\n.Image_element__EpM9I {\n  width: 100%;\n  height: auto;\n  opacity: 0;\n  grid-column: 1;\n  grid-row: 1;\n  /* stylelint-disable-next-line value-no-vendor-prefix */\n  image-rendering: -webkit-optimize-contrast;\n}\n\n.Image_element__EpM9I[data-loaded='true'] {\n    opacity: 1;\n  }\n\n.Image_button__S1k_J {\n  opacity: 0;\n  position: absolute;\n  top: var(--spaceM);\n  left: var(--spaceM);\n  height: 32px;\n  color: rgb(var(--rgbWhite));\n  padding: 0 8px 0 2px;\n}\n\n.Image_button__S1k_J::after {\n    background-color: rgb(var(--rgbBlack) / 0.8);\n  }\n\n.Image_elementWrapper__dY5KC:hover .Image_button__S1k_J, .Image_button__S1k_J:focus {\n    opacity: 1;\n}\n",
          '',
          {
            version: 3,
            sources: ['webpack://./src/components/Image/Image.module.css'],
            names: [],
            mappings:
              'AAAA;EACE,kBAAkB;EAClB,+BAA+B;EAC/B,aAAa;EACb,2BAA2B;EAC3B,kBAAkB;AAiCpB;;AA/BE;IACE;kDAC8C;EAChD;;AAEA;IACE,sBAAsB;;IAEtB,4EAA4E;EAsB9E;;AApBE;MACE,gBAAgB;IAClB;;AAEA;MACE,WAAW;MACX,uCAAuC;MACvC,kBAAkB;MAClB,QAAQ;MACR,2BAA2B;MAC3B,sBAAsB;MACtB,sBAAsB;MACtB,uBAAuB;IACzB;;AAEA;MACE;QACE,+EAA+E;MACjF;IACF;;AAIJ;EACE,kBAAkB;EAClB,eAAe;EACf,aAAa;EACb,2BAA2B;AAC7B;;AAEA;EACE,UAAU;EACV,gBAAgB;EAChB,eAAe;EACf,kBAAkB;EAClB,aAAa;EACb,2BAA2B;AAc7B;;AAZE;IACE,UAAU;IACV,sDAAsD;EAKxD;;AAHE;;AAJF;MAKI,yCAAyC;EAE7C;IADE;;AAGF;IACE,UAAU;EACZ;;AAGF;EACE,WAAW;EACX,YAAY;EACZ,sDAAsD;EACtD,oBAAoB;EACpB,kBAAkB;EAClB,uBAAuB;EACvB,UAAU;EACV,cAAc;EACd,WAAW;AAKb;;AAHE;IACE,UAAU;EACZ;;AAGF;EACE,WAAW;EACX,YAAY;EACZ,UAAU;EACV,cAAc;EACd,WAAW;EACX,uDAAuD;EACvD,0CAA0C;AAK5C;;AAHE;IACE,UAAU;EACZ;;AAGF;EACE,UAAU;EACV,kBAAkB;EAClB,kBAAkB;EAClB,mBAAmB;EACnB,YAAY;EACZ,2BAA2B;EAC3B,oBAAoB;AAStB;;AAPE;IACE,4CAA4C;EAC9C;;AAXF;IAcI,UAAU;AAEd',
            sourcesContent: [
              ".image {\n  position: relative;\n  transform: translate3d(0, 0, 0);\n  display: grid;\n  grid-template-columns: 100%;\n  isolation: isolate;\n\n  &[data-raised='true'] {\n    box-shadow: 0 50px 100px -20px rgb(var(--rgbBlack) / 0.25),\n      0 30px 60px -30px rgb(var(--rgbBlack) / 0.3);\n  }\n\n  &[data-reveal='true'] {\n    --revealDuration: 1.8s;\n\n    transition: box-shadow var(--durationL) ease calc(var(--revealDuration) / 2);\n\n    &:not([data-visible='true']) {\n      box-shadow: none;\n    }\n\n    &::before {\n      content: '';\n      background-color: rgb(var(--rgbAccent));\n      position: absolute;\n      inset: 0;\n      transform: scale3d(0, 1, 1);\n      transform-origin: left;\n      will-change: transform;\n      z-index: var(--zIndex2);\n    }\n\n    @media (--mediaUseMotion) {\n      &[data-visible='true']::before:global {\n        animation: reveal var(--revealDuration) var(--bezierFastoutSlowin) var(--delay);\n      }\n    }\n  }\n}\n\n.container {\n  position: relative;\n  transform: none;\n  display: grid;\n  grid-template-columns: 100%;\n}\n\n.elementWrapper {\n  opacity: 0;\n  transition: none;\n  transform: none;\n  position: relative;\n  display: grid;\n  grid-template-columns: 100%;\n\n  &[data-reveal='true'] {\n    opacity: 0;\n    transition: opacity var(--durationM) ease var(--delay);\n\n    @media (--mediaReduceMotion) {\n      transition-delay: calc(var(--delay) - 1s);\n    }\n  }\n\n  &[data-visible='true'] {\n    opacity: 1;\n  }\n}\n\n.placeholder {\n  width: 100%;\n  height: auto;\n  transition: opacity var(--durationM) ease var(--delay);\n  pointer-events: none;\n  position: relative;\n  z-index: var(--zIndex1);\n  opacity: 1;\n  grid-column: 1;\n  grid-row: 1;\n\n  &[data-loaded='true'] {\n    opacity: 0;\n  }\n}\n\n.element {\n  width: 100%;\n  height: auto;\n  opacity: 0;\n  grid-column: 1;\n  grid-row: 1;\n  /* stylelint-disable-next-line value-no-vendor-prefix */\n  image-rendering: -webkit-optimize-contrast;\n\n  &[data-loaded='true'] {\n    opacity: 1;\n  }\n}\n\n.button {\n  opacity: 0;\n  position: absolute;\n  top: var(--spaceM);\n  left: var(--spaceM);\n  height: 32px;\n  color: rgb(var(--rgbWhite));\n  padding: 0 8px 0 2px;\n\n  &::after {\n    background-color: rgb(var(--rgbBlack) / 0.8);\n  }\n\n  @nest .elementWrapper:hover &, &:focus {\n    opacity: 1;\n  }\n}\n",
            ],
            sourceRoot: '',
          },
        ]),
          (___CSS_LOADER_EXPORT___.locals = {
            image: 'Image_image__fhfXL',
            container: 'Image_container__9ry6H',
            elementWrapper: 'Image_elementWrapper__dY5KC',
            placeholder: 'Image_placeholder__rZeKX',
            element: 'Image_element__EpM9I',
            button: 'Image_button__S1k_J',
          });
        const __WEBPACK_DEFAULT_EXPORT__ = ___CSS_LOADER_EXPORT___;
      },
    './node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./node_modules/postcss-loader/dist/cjs.js!./src/components/Input/Input.module.css':
      (module, __webpack_exports__, __webpack_require__) => {
        'use strict';
        __webpack_require__.d(__webpack_exports__, {
          Z: () => __WEBPACK_DEFAULT_EXPORT__,
        });
        var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(
              './node_modules/css-loader/dist/runtime/cssWithMappingToString.js'
            ),
          _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default =
            __webpack_require__.n(
              _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__
            ),
          _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__('./node_modules/css-loader/dist/runtime/api.js'),
          ___CSS_LOADER_EXPORT___ = __webpack_require__.n(
            _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__
          )()(
            _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()
          );
        ___CSS_LOADER_EXPORT___.push([
          module.id,
          ".Input_container__7Goxk {\n  --inputFontSize: calc((16 / 16) * 1rem);\n  --inputFocusColor: rgb(var(--rgbPrimary));\n  --inputUnderlineColor: rgb(var(--rgbText) / 0.2);\n\n  position: relative;\n  display: flex;\n  flex-direction: column;\n}\n\n.Input_container__7Goxk[data-error='true'] {\n    --inputUnderlineColor: rgb(var(--rgbError));\n  }\n\n.Input_content__uzVSn {\n  position: relative;\n  display: flex;\n}\n\n.Input_input__7s5ug {\n  display: block;\n  color: var(--colorTextBody);\n  box-shadow: inset 0 -2px 0 0 var(--inputUnderlineColor);\n  transition: background-color 5000s linear 0s;\n  width: 100%;\n  font-size: var(--inputFontSize);\n  line-height: var(--lineHeightBody);\n  padding: var(--spaceL) 0 var(--spaceM);\n  overflow-x: hidden;\n  outline: none;\n}\n\n.Input_input__7s5ug:-internal-autofill-selected {\n    -webkit-text-fill-color: var(--colorTextBody);\n    box-shadow: 0 0 0 1000px rgb(var(--rgbText) / 0.1) inset;\n  }\n\n/* Needs to be a single selector to work in safari */\n\n.Input_input__7s5ug:-webkit-autofill {\n    -webkit-text-fill-color: var(--colorTextBody);\n    box-shadow: 0 0 0 1000px rgb(var(--rgbText) / 0.1) inset;\n  }\n\n.Input_input__7s5ug::-webkit-contacts-auto-fill-button:hover {\n    background-color: rgb(var(--rgbPrimary));\n  }\n\n@media (prefers-reduced-motion: reduce) {\n\n#Input_root__JGHFS .Input_input__7s5ug {\n      transition: background-color 5000s linear 0s;\n}\n  }\n\n.Input_underline__NozM9 {\n  background: var(--inputFocusColor);\n  transform: scale3d(0, 1, 1);\n  width: 100%;\n  height: 2px;\n  position: absolute;\n  bottom: 0;\n  transform-origin: left;\n}\n\n@media (prefers-reduced-motion: no-preference) {\n\n.Input_underline__NozM9 {\n    transition: transform var(--durationM) var(--bezierFastoutSlowin);\n}\n  }\n\n.Input_underline__NozM9[data-focused='true'] {\n    transform: scale3d(1, 1, 1);\n  }\n\n.Input_label__mcV2a {\n  color: rgb(var(--rgbText) / 0.8);\n  position: absolute;\n  top: var(--spaceL);\n  left: 0;\n  display: block;\n  cursor: text;\n  transform-origin: top left;\n  transition: color var(--durationM) ease;\n}\n\n@media (prefers-reduced-motion: no-preference) {\n\n.Input_label__mcV2a {\n    transition: transform var(--durationM) var(--bezierFastoutSlowin),\n      color var(--durationM) ease;\n}\n  }\n\n.Input_label__mcV2a[data-filled='true'],\n  .Input_label__mcV2a[data-focused='true'] {\n    color: rgb(var(--rgbText) / 0.54);\n    transform: scale(0.8) translateY(calc(var(--spaceL) * -1));\n  }\n\n.Input_error___w1d4 {\n  transition-property: opacity;\n  transition-duration: var(--durationM);\n  transition-timing-function: var(--bezierFastoutSlowin);\n  height: var(--height);\n  opacity: 0;\n}\n\n@media (prefers-reduced-motion: no-preference) {\n\n.Input_error___w1d4 {\n    transition-property: height, opacity;\n}\n  }\n\n.Input_error___w1d4[data-visible='true'] {\n    opacity: 1;\n  }\n\n.Input_errorMessage__wTzme {\n  display: grid;\n  grid-template-columns: auto 1fr;\n  align-items: center;\n  gap: var(--spaceXS);\n  padding-top: var(--spaceS);\n  color: rgb(var(--rgbError));\n}\n",
          '',
          {
            version: 3,
            sources: ['webpack://./src/components/Input/Input.module.css'],
            names: [],
            mappings:
              'AAAA;EACE,uCAAuC;EACvC,yCAAyC;EACzC,gDAAgD;;EAEhD,kBAAkB;EAClB,aAAa;EACb,sBAAsB;AAKxB;;AAHE;IACE,2CAA2C;EAC7C;;AAGF;EACE,kBAAkB;EAClB,aAAa;AACf;;AAEA;EACE,cAAc;EACd,2BAA2B;EAC3B,uDAAuD;EACvD,4CAA4C;EAC5C,WAAW;EACX,+BAA+B;EAC/B,kCAAkC;EAClC,sCAAsC;EACtC,kBAAkB;EAClB,aAAa;AAsBf;;AApBE;IACE,6CAA6C;IAC7C,wDAAwD;EAC1D;;AAEA,oDAAoD;;AACpD;IACE,6CAA6C;IAC7C,wDAAwD;EAC1D;;AAEA;IACE,wCAAwC;EAC1C;;AAEA;;AA3BF;MA6BM,4CAA4C;AAGlD;EADE;;AAGF;EACE,kCAAkC;EAClC,2BAA2B;EAC3B,WAAW;EACX,WAAW;EACX,kBAAkB;EAClB,SAAS;EACT,sBAAsB;AASxB;;AAPE;;AATF;IAUI,iEAAiE;AAMrE;EALE;;AAEA;IACE,2BAA2B;EAC7B;;AAGF;EACE,gCAAgC;EAChC,kBAAkB;EAClB,kBAAkB;EAClB,OAAO;EACP,cAAc;EACd,YAAY;EACZ,0BAA0B;EAC1B,uCAAuC;AAYzC;;AAVE;;AAVF;IAWI;iCAC6B;AAQjC;EAPE;;AAEA;;IAEE,iCAAiC;IACjC,0DAA0D;EAC5D;;AAGF;EACE,4BAA4B;EAC5B,qCAAqC;EACrC,sDAAsD;EACtD,qBAAqB;EACrB,UAAU;AASZ;;AAPE;;AAPF;IAQI,oCAAoC;AAMxC;EALE;;AAEA;IACE,UAAU;EACZ;;AAGF;EACE,aAAa;EACb,+BAA+B;EAC/B,mBAAmB;EACnB,mBAAmB;EACnB,0BAA0B;EAC1B,2BAA2B;AAC7B',
            sourcesContent: [
              ".container {\n  --inputFontSize: calc((16 / 16) * 1rem);\n  --inputFocusColor: rgb(var(--rgbPrimary));\n  --inputUnderlineColor: rgb(var(--rgbText) / 0.2);\n\n  position: relative;\n  display: flex;\n  flex-direction: column;\n\n  &[data-error='true'] {\n    --inputUnderlineColor: rgb(var(--rgbError));\n  }\n}\n\n.content {\n  position: relative;\n  display: flex;\n}\n\n.input {\n  display: block;\n  color: var(--colorTextBody);\n  box-shadow: inset 0 -2px 0 0 var(--inputUnderlineColor);\n  transition: background-color 5000s linear 0s;\n  width: 100%;\n  font-size: var(--inputFontSize);\n  line-height: var(--lineHeightBody);\n  padding: var(--spaceL) 0 var(--spaceM);\n  overflow-x: hidden;\n  outline: none;\n\n  &:-internal-autofill-selected {\n    -webkit-text-fill-color: var(--colorTextBody);\n    box-shadow: 0 0 0 1000px rgb(var(--rgbText) / 0.1) inset;\n  }\n\n  /* Needs to be a single selector to work in safari */\n  &:-webkit-autofill {\n    -webkit-text-fill-color: var(--colorTextBody);\n    box-shadow: 0 0 0 1000px rgb(var(--rgbText) / 0.1) inset;\n  }\n\n  &::-webkit-contacts-auto-fill-button:hover {\n    background-color: rgb(var(--rgbPrimary));\n  }\n\n  @media (--mediaReduceMotion) {\n    @nest #root & {\n      transition: background-color 5000s linear 0s;\n    }\n  }\n}\n\n.underline {\n  background: var(--inputFocusColor);\n  transform: scale3d(0, 1, 1);\n  width: 100%;\n  height: 2px;\n  position: absolute;\n  bottom: 0;\n  transform-origin: left;\n\n  @media (--mediaUseMotion) {\n    transition: transform var(--durationM) var(--bezierFastoutSlowin);\n  }\n\n  &[data-focused='true'] {\n    transform: scale3d(1, 1, 1);\n  }\n}\n\n.label {\n  color: rgb(var(--rgbText) / 0.8);\n  position: absolute;\n  top: var(--spaceL);\n  left: 0;\n  display: block;\n  cursor: text;\n  transform-origin: top left;\n  transition: color var(--durationM) ease;\n\n  @media (--mediaUseMotion) {\n    transition: transform var(--durationM) var(--bezierFastoutSlowin),\n      color var(--durationM) ease;\n  }\n\n  &[data-filled='true'],\n  &[data-focused='true'] {\n    color: rgb(var(--rgbText) / 0.54);\n    transform: scale(0.8) translateY(calc(var(--spaceL) * -1));\n  }\n}\n\n.error {\n  transition-property: opacity;\n  transition-duration: var(--durationM);\n  transition-timing-function: var(--bezierFastoutSlowin);\n  height: var(--height);\n  opacity: 0;\n\n  @media (--mediaUseMotion) {\n    transition-property: height, opacity;\n  }\n\n  &[data-visible='true'] {\n    opacity: 1;\n  }\n}\n\n.errorMessage {\n  display: grid;\n  grid-template-columns: auto 1fr;\n  align-items: center;\n  gap: var(--spaceXS);\n  padding-top: var(--spaceS);\n  color: rgb(var(--rgbError));\n}\n",
            ],
            sourceRoot: '',
          },
        ]),
          (___CSS_LOADER_EXPORT___.locals = {
            container: 'Input_container__7Goxk',
            content: 'Input_content__uzVSn',
            input: 'Input_input__7s5ug',
            root: 'Input_root__JGHFS',
            underline: 'Input_underline__NozM9',
            label: 'Input_label__mcV2a',
            error: 'Input_error___w1d4',
            errorMessage: 'Input_errorMessage__wTzme',
          });
        const __WEBPACK_DEFAULT_EXPORT__ = ___CSS_LOADER_EXPORT___;
      },
    './node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./node_modules/postcss-loader/dist/cjs.js!./src/components/Input/TextArea.module.css':
      (module, __webpack_exports__, __webpack_require__) => {
        'use strict';
        __webpack_require__.d(__webpack_exports__, {
          Z: () => __WEBPACK_DEFAULT_EXPORT__,
        });
        var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(
              './node_modules/css-loader/dist/runtime/cssWithMappingToString.js'
            ),
          _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default =
            __webpack_require__.n(
              _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__
            ),
          _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__('./node_modules/css-loader/dist/runtime/api.js'),
          ___CSS_LOADER_EXPORT___ = __webpack_require__.n(
            _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__
          )()(
            _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()
          );
        ___CSS_LOADER_EXPORT___.push([
          module.id,
          '.TextArea_textarea__7ccmD {\n  resize: var(--resize);\n}\n',
          '',
          {
            version: 3,
            sources: ['webpack://./src/components/Input/TextArea.module.css'],
            names: [],
            mappings: 'AAAA;EACE,qBAAqB;AACvB',
            sourcesContent: ['.textarea {\n  resize: var(--resize);\n}\n'],
            sourceRoot: '',
          },
        ]),
          (___CSS_LOADER_EXPORT___.locals = { textarea: 'TextArea_textarea__7ccmD' });
        const __WEBPACK_DEFAULT_EXPORT__ = ___CSS_LOADER_EXPORT___;
      },
    './node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./node_modules/postcss-loader/dist/cjs.js!./src/components/Link/Link.module.css':
      (module, __webpack_exports__, __webpack_require__) => {
        'use strict';
        __webpack_require__.d(__webpack_exports__, {
          Z: () => __WEBPACK_DEFAULT_EXPORT__,
        });
        var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(
              './node_modules/css-loader/dist/runtime/cssWithMappingToString.js'
            ),
          _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default =
            __webpack_require__.n(
              _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__
            ),
          _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__('./node_modules/css-loader/dist/runtime/api.js'),
          ___CSS_LOADER_EXPORT___ = __webpack_require__.n(
            _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__
          )()(
            _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()
          );
        ___CSS_LOADER_EXPORT___.push([
          module.id,
          ".Link_link__1F_mp {\n  --lineStrokeWidth: 2px;\n  --linkColor: var(--rgbPrimary);\n  --lineOpacity: 0.3;\n  --filledLineGradient: linear-gradient(rgb(var(--linkColor)), rgb(var(--linkColor)));\n  --unfilledLineGradient: linear-gradient(\n    rgb(var(--linkColor) / var(--lineOpacity)),\n    rgb(var(--linkColor) / var(--lineOpacity))\n  );\n\n  cursor: pointer;\n  display: inline;\n  color: rgb(var(--linkColor));\n  background: var(--filledLineGradient) no-repeat 100% 100% / 0 var(--lineStrokeWidth),\n    var(--unfilledLineGradient) no-repeat 0 100% / 100% var(--lineStrokeWidth);\n  padding-bottom: var(--lineStrokeWidth);\n}\n.Link_link__1F_mp:hover,\n  .Link_link__1F_mp:focus {\n    background: var(--filledLineGradient) no-repeat 0 100% / 100% var(--lineStrokeWidth),\n      var(--unfilledLineGradient) no-repeat 0 100% / 100% var(--lineStrokeWidth);\n  }\n@media (prefers-reduced-motion: no-preference) {\n  .Link_link__1F_mp {\n    transition-duration: var(--durationM);\n    transition-timing-function: var(--bezierFastoutSlowin);\n    transition-property: background-size;\n}\n  }\n.Link_link__1F_mp[data-secondary='true'] {\n    --linkColor: var(--rgbText);\n  }\n",
          '',
          {
            version: 3,
            sources: ['webpack://./src/components/Link/Link.module.css'],
            names: [],
            mappings:
              'AAAA;EACE,sBAAsB;EACtB,8BAA8B;EAC9B,kBAAkB;EAClB,mFAAmF;EACnF;;;GAGC;;EAED,eAAe;EACf,eAAe;EACf,4BAA4B;EAC5B;8EAC4E;EAC5E,sCAAsC;AAiBxC;AAfE;;IAEE;gFAC4E;EAC9E;AAEA;EAvBF;IAwBI,qCAAqC;IACrC,sDAAsD;IACtD,oCAAoC;AAMxC;EALE;AAEA;IACE,2BAA2B;EAC7B',
            sourcesContent: [
              ".link {\n  --lineStrokeWidth: 2px;\n  --linkColor: var(--rgbPrimary);\n  --lineOpacity: 0.3;\n  --filledLineGradient: linear-gradient(rgb(var(--linkColor)), rgb(var(--linkColor)));\n  --unfilledLineGradient: linear-gradient(\n    rgb(var(--linkColor) / var(--lineOpacity)),\n    rgb(var(--linkColor) / var(--lineOpacity))\n  );\n\n  cursor: pointer;\n  display: inline;\n  color: rgb(var(--linkColor));\n  background: var(--filledLineGradient) no-repeat 100% 100% / 0 var(--lineStrokeWidth),\n    var(--unfilledLineGradient) no-repeat 0 100% / 100% var(--lineStrokeWidth);\n  padding-bottom: var(--lineStrokeWidth);\n\n  &:hover,\n  &:focus {\n    background: var(--filledLineGradient) no-repeat 0 100% / 100% var(--lineStrokeWidth),\n      var(--unfilledLineGradient) no-repeat 0 100% / 100% var(--lineStrokeWidth);\n  }\n\n  @media (--mediaUseMotion) {\n    transition-duration: var(--durationM);\n    transition-timing-function: var(--bezierFastoutSlowin);\n    transition-property: background-size;\n  }\n\n  &[data-secondary='true'] {\n    --linkColor: var(--rgbText);\n  }\n}\n",
            ],
            sourceRoot: '',
          },
        ]),
          (___CSS_LOADER_EXPORT___.locals = { link: 'Link_link__1F_mp' });
        const __WEBPACK_DEFAULT_EXPORT__ = ___CSS_LOADER_EXPORT___;
      },
    './node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./node_modules/postcss-loader/dist/cjs.js!./src/components/List/List.module.css':
      (module, __webpack_exports__, __webpack_require__) => {
        'use strict';
        __webpack_require__.d(__webpack_exports__, {
          Z: () => __WEBPACK_DEFAULT_EXPORT__,
        });
        var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(
              './node_modules/css-loader/dist/runtime/cssWithMappingToString.js'
            ),
          _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default =
            __webpack_require__.n(
              _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__
            ),
          _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__('./node_modules/css-loader/dist/runtime/api.js'),
          ___CSS_LOADER_EXPORT___ = __webpack_require__.n(
            _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__
          )()(
            _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()
          );
        ___CSS_LOADER_EXPORT___.push([
          module.id,
          '.List_list__0oF1W {\n  padding-left: 1.7em;\n  line-height: var(--lineHeightBody);\n}\n\nol.List_list__0oF1W {\n    list-style-type: decimal-leading-zero;\n}\n\nul.List_list__0oF1W {\n    list-style-type: none;\n}\n\n.List_item__t5SQz {\n  --bulletSize: min(1.2em, 24px);\n  --markerGap: var(--spaceS);\n\n  margin-bottom: 0.6em;\n}\n\nol .List_item__t5SQz::marker {\n    color: rgb(var(--rgbPrimary));\n    font-feature-settings: "ordn";\n    font-variant-numeric: ordinal;\n    font-size: min(1.2em, 16px);\n    font-weight: var(--fontWeightMedium);\n    font-family: var(--monoFontStack);\n}\n\nul .List_item__t5SQz::before {\n    content: \'\';\n    position: relative;\n    display: inline-block;\n    vertical-align: middle;\n    left: calc(var(--markerGap) * -1);\n    margin-left: calc(var(--bulletSize) * -1);\n    width: var(--bulletSize);\n    height: var(--bulletSize);\n    background-color: rgb(var(--rgbPrimary));\n    -webkit-mask-image: url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13.586 12L7.793 6.207l1.414-1.414 6.5 6.5.707.707-.707.707-6.5 6.5-1.414-1.414L13.586 12z"/></svg>\');\n            mask-image: url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13.586 12L7.793 6.207l1.414-1.414 6.5 6.5.707.707-.707.707-6.5 6.5-1.414-1.414L13.586 12z"/></svg>\');\n}\n',
          '',
          {
            version: 3,
            sources: ['webpack://./src/components/List/List.module.css'],
            names: [],
            mappings:
              'AAAA;EACE,mBAAmB;EACnB,kCAAkC;AASpC;;AAXA;IAKI,qCAAqC;AAMzC;;AAXA;IASI,qBAAqB;AAEzB;;AAEA;EACE,8BAA8B;EAC9B,0BAA0B;;EAE1B,oBAAoB;AAsBtB;;AA1BA;IAOI,6BAA6B;IAC7B,6BAA6B;IAA7B,6BAA6B;IAC7B,2BAA2B;IAC3B,oCAAoC;IACpC,iCAAiC;AAerC;;AA1BA;IAeI,WAAW;IACX,kBAAkB;IAClB,qBAAqB;IACrB,sBAAsB;IACtB,iCAAiC;IACjC,yCAAyC;IACzC,wBAAwB;IACxB,yBAAyB;IACzB,wCAAwC;IACxC,2NAAmN;YAAnN,mNAAmN;AAEvN',
            sourcesContent: [
              '.list {\n  padding-left: 1.7em;\n  line-height: var(--lineHeightBody);\n\n  @nest ol& {\n    list-style-type: decimal-leading-zero;\n  }\n\n  @nest ul& {\n    list-style-type: none;\n  }\n}\n\n.item {\n  --bulletSize: min(1.2em, 24px);\n  --markerGap: var(--spaceS);\n\n  margin-bottom: 0.6em;\n\n  @nest ol &::marker {\n    color: rgb(var(--rgbPrimary));\n    font-variant-numeric: ordinal;\n    font-size: min(1.2em, 16px);\n    font-weight: var(--fontWeightMedium);\n    font-family: var(--monoFontStack);\n  }\n\n  @nest ul &::before {\n    content: \'\';\n    position: relative;\n    display: inline-block;\n    vertical-align: middle;\n    left: calc(var(--markerGap) * -1);\n    margin-left: calc(var(--bulletSize) * -1);\n    width: var(--bulletSize);\n    height: var(--bulletSize);\n    background-color: rgb(var(--rgbPrimary));\n    mask-image: url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13.586 12L7.793 6.207l1.414-1.414 6.5 6.5.707.707-.707.707-6.5 6.5-1.414-1.414L13.586 12z"/></svg>\');\n  }\n}\n',
            ],
            sourceRoot: '',
          },
        ]),
          (___CSS_LOADER_EXPORT___.locals = {
            list: 'List_list__0oF1W',
            item: 'List_item__t5SQz',
          });
        const __WEBPACK_DEFAULT_EXPORT__ = ___CSS_LOADER_EXPORT___;
      },
    './node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./node_modules/postcss-loader/dist/cjs.js!./src/components/Loader/Loader.module.css':
      (module, __webpack_exports__, __webpack_require__) => {
        'use strict';
        __webpack_require__.d(__webpack_exports__, {
          Z: () => __WEBPACK_DEFAULT_EXPORT__,
        });
        var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(
              './node_modules/css-loader/dist/runtime/cssWithMappingToString.js'
            ),
          _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default =
            __webpack_require__.n(
              _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__
            ),
          _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__('./node_modules/css-loader/dist/runtime/api.js'),
          ___CSS_LOADER_EXPORT___ = __webpack_require__.n(
            _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__
          )()(
            _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()
          );
        ___CSS_LOADER_EXPORT___.push([
          module.id,
          '.Loader_loader__3yamk {\n  display: flex;\n  justify-content: center;\n  width: var(--size);\n  height: var(--size);\n}\n\n.Loader_text__uupzy {\n  color: inherit;\n}\n\n.Loader_content__rvat_ {\n  display: grid;\n  grid-template-columns: repeat(3, var(--spanSize));\n  gap: var(--gapSize);\n  align-items: center;\n  justify-content: center;\n  transform: skewX(22deg);\n}\n\n@keyframes Loader_loaderSpan__hIbqq {\n  0% {\n    transform: scaleY(0);\n    opacity: 0.5;\n    transform-origin: top;\n  }\n\n  40% {\n    transform: scaleY(1);\n    opacity: 1;\n    transform-origin: top;\n  }\n\n  60% {\n    transform: scaleY(1);\n    opacity: 1;\n    transform-origin: bottom;\n  }\n\n  100% {\n    transform: scaleY(0);\n    opacity: 0.5;\n    transform-origin: bottom;\n  }\n}\n\n.Loader_span__qI8wq {\n  height: 60%;\n  background: currentColor;\n  animation: Loader_loaderSpan__hIbqq 1s var(--bezierFastoutSlowin) infinite;\n  transform: scaleY(0);\n  transform-origin: top left;\n}\n\n.Loader_span__qI8wq:nth-child(2) {\n    animation-delay: 0.1s;\n  }\n\n.Loader_span__qI8wq:nth-child(3) {\n    animation-delay: 0.2s;\n  }\n',
          '',
          {
            version: 3,
            sources: ['webpack://./src/components/Loader/Loader.module.css'],
            names: [],
            mappings:
              'AAAA;EACE,aAAa;EACb,uBAAuB;EACvB,kBAAkB;EAClB,mBAAmB;AACrB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,iDAAiD;EACjD,mBAAmB;EACnB,mBAAmB;EACnB,uBAAuB;EACvB,uBAAuB;AACzB;;AAEA;EACE;IACE,oBAAoB;IACpB,YAAY;IACZ,qBAAqB;EACvB;;EAEA;IACE,oBAAoB;IACpB,UAAU;IACV,qBAAqB;EACvB;;EAEA;IACE,oBAAoB;IACpB,UAAU;IACV,wBAAwB;EAC1B;;EAEA;IACE,oBAAoB;IACpB,YAAY;IACZ,wBAAwB;EAC1B;AACF;;AAEA;EACE,WAAW;EACX,wBAAwB;EACxB,0EAA4D;EAC5D,oBAAoB;EACpB,0BAA0B;AAS5B;;AAPE;IACE,qBAAqB;EACvB;;AAEA;IACE,qBAAqB;EACvB',
            sourcesContent: [
              '.loader {\n  display: flex;\n  justify-content: center;\n  width: var(--size);\n  height: var(--size);\n}\n\n.text {\n  color: inherit;\n}\n\n.content {\n  display: grid;\n  grid-template-columns: repeat(3, var(--spanSize));\n  gap: var(--gapSize);\n  align-items: center;\n  justify-content: center;\n  transform: skewX(22deg);\n}\n\n@keyframes loaderSpan {\n  0% {\n    transform: scaleY(0);\n    opacity: 0.5;\n    transform-origin: top;\n  }\n\n  40% {\n    transform: scaleY(1);\n    opacity: 1;\n    transform-origin: top;\n  }\n\n  60% {\n    transform: scaleY(1);\n    opacity: 1;\n    transform-origin: bottom;\n  }\n\n  100% {\n    transform: scaleY(0);\n    opacity: 0.5;\n    transform-origin: bottom;\n  }\n}\n\n.span {\n  height: 60%;\n  background: currentColor;\n  animation: loaderSpan 1s var(--bezierFastoutSlowin) infinite;\n  transform: scaleY(0);\n  transform-origin: top left;\n\n  &:nth-child(2) {\n    animation-delay: 0.1s;\n  }\n\n  &:nth-child(3) {\n    animation-delay: 0.2s;\n  }\n}\n',
            ],
            sourceRoot: '',
          },
        ]),
          (___CSS_LOADER_EXPORT___.locals = {
            loader: 'Loader_loader__3yamk',
            text: 'Loader_text__uupzy',
            content: 'Loader_content__rvat_',
            span: 'Loader_span__qI8wq',
            loaderSpan: 'Loader_loaderSpan__hIbqq',
          });
        const __WEBPACK_DEFAULT_EXPORT__ = ___CSS_LOADER_EXPORT___;
      },
    './node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./node_modules/postcss-loader/dist/cjs.js!./src/components/Model/Model.module.css':
      (module, __webpack_exports__, __webpack_require__) => {
        'use strict';
        __webpack_require__.d(__webpack_exports__, {
          Z: () => __WEBPACK_DEFAULT_EXPORT__,
        });
        var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(
              './node_modules/css-loader/dist/runtime/cssWithMappingToString.js'
            ),
          _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default =
            __webpack_require__.n(
              _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__
            ),
          _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__('./node_modules/css-loader/dist/runtime/api.js'),
          ___CSS_LOADER_EXPORT___ = __webpack_require__.n(
            _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__
          )()(
            _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()
          );
        ___CSS_LOADER_EXPORT___.push([
          module.id,
          ".Model_model__228ej {\n  position: relative;\n  opacity: 0;\n}\n\n.Model_model__228ej[data-loaded='true'] {\n    animation: fadeIn 1s ease forwards var(--delay);\n  }\n\n.Model_canvas__kaLjL {\n  position: absolute;\n  inset: 0;\n}\n",
          '',
          {
            version: 3,
            sources: ['webpack://./src/components/Model/Model.module.css'],
            names: [],
            mappings:
              'AAAA;EACE,kBAAkB;EAClB,UAAU;AAKZ;;AAHE;IACE,+CAA+C;EACjD;;AAGF;EACE,kBAAkB;EAClB,QAAQ;AACV',
            sourcesContent: [
              ".model {\n  position: relative;\n  opacity: 0;\n\n  &[data-loaded='true']:global {\n    animation: fadeIn 1s ease forwards var(--delay);\n  }\n}\n\n.canvas {\n  position: absolute;\n  inset: 0;\n}\n",
            ],
            sourceRoot: '',
          },
        ]),
          (___CSS_LOADER_EXPORT___.locals = {
            model: 'Model_model__228ej',
            canvas: 'Model_canvas__kaLjL',
          });
        const __WEBPACK_DEFAULT_EXPORT__ = ___CSS_LOADER_EXPORT___;
      },
    './node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./node_modules/postcss-loader/dist/cjs.js!./src/components/Monogram/Monogram.module.css':
      (module, __webpack_exports__, __webpack_require__) => {
        'use strict';
        __webpack_require__.d(__webpack_exports__, {
          Z: () => __WEBPACK_DEFAULT_EXPORT__,
        });
        var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(
              './node_modules/css-loader/dist/runtime/cssWithMappingToString.js'
            ),
          _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default =
            __webpack_require__.n(
              _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__
            ),
          _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__('./node_modules/css-loader/dist/runtime/api.js'),
          ___CSS_LOADER_EXPORT___ = __webpack_require__.n(
            _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__
          )()(
            _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()
          );
        ___CSS_LOADER_EXPORT___.push([
          module.id,
          '.Monogram_monogram__tnGpV {\n  fill: var(--colorTextTitle);\n  transition: fill var(--durationL) ease;\n}\n\n.Monogram_highlight__ly_rQ {\n  fill: rgb(var(--rgbAccent));\n  opacity: 0;\n  transform: scale3d(1, 0, 1);\n  transform-origin: top;\n  transition: opacity 0.1s ease var(--durationM);\n}\n\n@media (prefers-reduced-motion: no-preference) {\n\n.Monogram_highlight__ly_rQ {\n    transition: transform var(--durationM) var(--bezierFastoutSlowin),\n      opacity 0.1s ease var(--durationM);\n}\n  }\n\n:is(a:focus, a:hover, .Monogram_monogram__tnGpV:hover) .Monogram_highlight__ly_rQ {\n    opacity: 1;\n    transform: scale3d(1, 1, 1);\n    transform-origin: bottom;\n    transition: opacity 0.1s ease;\n}\n\n@media (prefers-reduced-motion: no-preference) {\n\n:is(a:focus, a:hover, .Monogram_monogram__tnGpV:hover) .Monogram_highlight__ly_rQ {\n      transition: transform var(--durationM) var(--bezierFastoutSlowin), opacity 0.1s ease;\n}\n    }\n',
          '',
          {
            version: 3,
            sources: ['webpack://./src/components/Monogram/Monogram.module.css'],
            names: [],
            mappings:
              'AAAA;EACE,2BAA2B;EAC3B,sCAAsC;AACxC;;AAEA;EACE,2BAA2B;EAC3B,UAAU;EACV,2BAA2B;EAC3B,qBAAqB;EACrB,8CAA8C;AAiBhD;;AAfE;;AAPF;IAQI;wCACoC;AAaxC;EAZE;;AAVF;IAaI,UAAU;IACV,2BAA2B;IAC3B,wBAAwB;IACxB,6BAA6B;AAMjC;;AAJI;;AAlBJ;MAmBM,oFAAoF;AAG1F;IAFI',
            sourcesContent: [
              '.monogram {\n  fill: var(--colorTextTitle);\n  transition: fill var(--durationL) ease;\n}\n\n.highlight {\n  fill: rgb(var(--rgbAccent));\n  opacity: 0;\n  transform: scale3d(1, 0, 1);\n  transform-origin: top;\n  transition: opacity 0.1s ease var(--durationM);\n\n  @media (--mediaUseMotion) {\n    transition: transform var(--durationM) var(--bezierFastoutSlowin),\n      opacity 0.1s ease var(--durationM);\n  }\n\n  @nest :is(a:focus, a:hover, .monogram:hover) & {\n    opacity: 1;\n    transform: scale3d(1, 1, 1);\n    transform-origin: bottom;\n    transition: opacity 0.1s ease;\n\n    @media (--mediaUseMotion) {\n      transition: transform var(--durationM) var(--bezierFastoutSlowin), opacity 0.1s ease;\n    }\n  }\n}\n',
            ],
            sourceRoot: '',
          },
        ]),
          (___CSS_LOADER_EXPORT___.locals = {
            monogram: 'Monogram_monogram__tnGpV',
            highlight: 'Monogram_highlight__ly_rQ',
          });
        const __WEBPACK_DEFAULT_EXPORT__ = ___CSS_LOADER_EXPORT___;
      },
    './node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./node_modules/postcss-loader/dist/cjs.js!./src/components/Navbar/NavToggle.module.css':
      (module, __webpack_exports__, __webpack_require__) => {
        'use strict';
        __webpack_require__.d(__webpack_exports__, {
          Z: () => __WEBPACK_DEFAULT_EXPORT__,
        });
        var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(
              './node_modules/css-loader/dist/runtime/cssWithMappingToString.js'
            ),
          _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default =
            __webpack_require__.n(
              _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__
            ),
          _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__('./node_modules/css-loader/dist/runtime/api.js'),
          ___CSS_LOADER_EXPORT___ = __webpack_require__.n(
            _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__
          )()(
            _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()
          );
        ___CSS_LOADER_EXPORT___.push([
          module.id,
          "button.NavToggle_toggle__gmiZu {\n  --offset: var(--spaceXS);\n  --inset: calc(var(--spaceOuter) - var(--offset));\n\n  position: fixed;\n  top: var(--inset);\n  right: var(--inset);\n  z-index: var(--zIndex4);\n  display: none;\n}\n\n@media (max-width: 696px), (max-height: 696px) {\n\nbutton.NavToggle_toggle__gmiZu {\n    display: flex;\n}\n  }\n\n.NavToggle_inner__0uerT {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n  width: 100%;\n}\n\n.NavToggle_icon__aG8yu {\n  --iconSize: var(--spaceXL);\n\n  position: absolute;\n  transition-property: opacity, fill;\n  transition-duration: var(--durationM);\n  transition-timing-function: var(--bezierFastoutSlowin);\n  opacity: 1;\n  transform: rotate(0deg);\n  fill: var(--colorTextBody);\n  width: var(--iconSize);\n  height: var(--iconSize);\n}\n\n@media (prefers-reduced-motion: no-preference) {\n\n.NavToggle_icon__aG8yu {\n    transition-delay: 0.1s;\n    transition-property: opacity, transform, fill;\n}\n  }\n\n.NavToggle_icon__aG8yu[data-open='true'] {\n    opacity: 0;\n  }\n\n@media (prefers-reduced-motion: no-preference) {\n\n.NavToggle_icon__aG8yu[data-open='true'] {\n      transition-delay: 0s;\n      transform: rotate(45deg);\n  }\n    }\n\n.NavToggle_icon__aG8yu[data-close='true'] {\n    opacity: 0;\n  }\n\n@media (prefers-reduced-motion: no-preference) {\n\n.NavToggle_icon__aG8yu[data-close='true'] {\n      transition-delay: 0s;\n      transform: rotate(-45deg);\n  }\n    }\n\n.NavToggle_icon__aG8yu.NavToggle_icon__aG8yu[data-open='true'][data-close='true'] {\n    opacity: 1;\n  }\n\n@media (prefers-reduced-motion: no-preference) {\n\n.NavToggle_icon__aG8yu.NavToggle_icon__aG8yu[data-open='true'][data-close='true'] {\n      transition-delay: 0.1s;\n      transform: rotate(0deg);\n  }\n    }\n",
          '',
          {
            version: 3,
            sources: ['webpack://./src/components/Navbar/NavToggle.module.css'],
            names: [],
            mappings:
              'AAAA;EACE,wBAAwB;EACxB,gDAAgD;;EAEhD,eAAe;EACf,iBAAiB;EACjB,mBAAmB;EACnB,uBAAuB;EACvB,aAAa;AAKf;;AAHE;;AAVF;IAWI,aAAa;AAEjB;EADE;;AAGF;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,YAAY;EACZ,WAAW;AACb;;AAEA;EACE,0BAA0B;;EAE1B,kBAAkB;EAClB,kCAAkC;EAClC,qCAAqC;EACrC,sDAAsD;EACtD,UAAU;EACV,uBAAuB;EACvB,0BAA0B;EAC1B,sBAAsB;EACtB,uBAAuB;AAiCzB;;AA/BE;;AAbF;IAcI,sBAAsB;IACtB,6CAA6C;AA6BjD;EA5BE;;AAEA;IACE,UAAU;EAMZ;;AAJE;;AAHF;MAII,oBAAoB;MACpB,wBAAwB;EAE5B;IADE;;AAGF;IACE,UAAU;EAMZ;;AAJE;;AAHF;MAII,oBAAoB;MACpB,yBAAyB;EAE7B;IADE;;AAGF;IACE,UAAU;EAMZ;;AAJE;;AAHF;MAII,sBAAsB;MACtB,uBAAuB;EAE3B;IADE',
            sourcesContent: [
              "button.toggle {\n  --offset: var(--spaceXS);\n  --inset: calc(var(--spaceOuter) - var(--offset));\n\n  position: fixed;\n  top: var(--inset);\n  right: var(--inset);\n  z-index: var(--zIndex4);\n  display: none;\n\n  @media (--mediaMobile), (--mediaMobileLS) {\n    display: flex;\n  }\n}\n\n.inner {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n  width: 100%;\n}\n\n.icon {\n  --iconSize: var(--spaceXL);\n\n  position: absolute;\n  transition-property: opacity, fill;\n  transition-duration: var(--durationM);\n  transition-timing-function: var(--bezierFastoutSlowin);\n  opacity: 1;\n  transform: rotate(0deg);\n  fill: var(--colorTextBody);\n  width: var(--iconSize);\n  height: var(--iconSize);\n\n  @media (--mediaUseMotion) {\n    transition-delay: 0.1s;\n    transition-property: opacity, transform, fill;\n  }\n\n  &[data-open='true'] {\n    opacity: 0;\n\n    @media (--mediaUseMotion) {\n      transition-delay: 0s;\n      transform: rotate(45deg);\n    }\n  }\n\n  &[data-close='true'] {\n    opacity: 0;\n\n    @media (--mediaUseMotion) {\n      transition-delay: 0s;\n      transform: rotate(-45deg);\n    }\n  }\n\n  &[data-open='true']&[data-close='true'] {\n    opacity: 1;\n\n    @media (--mediaUseMotion) {\n      transition-delay: 0.1s;\n      transform: rotate(0deg);\n    }\n  }\n}\n",
            ],
            sourceRoot: '',
          },
        ]),
          (___CSS_LOADER_EXPORT___.locals = {
            toggle: 'NavToggle_toggle__gmiZu',
            inner: 'NavToggle_inner__0uerT',
            icon: 'NavToggle_icon__aG8yu',
          });
        const __WEBPACK_DEFAULT_EXPORT__ = ___CSS_LOADER_EXPORT___;
      },
    './node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./node_modules/postcss-loader/dist/cjs.js!./src/components/Navbar/Navbar.module.css':
      (module, __webpack_exports__, __webpack_require__) => {
        'use strict';
        __webpack_require__.d(__webpack_exports__, {
          Z: () => __WEBPACK_DEFAULT_EXPORT__,
        });
        var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(
              './node_modules/css-loader/dist/runtime/cssWithMappingToString.js'
            ),
          _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default =
            __webpack_require__.n(
              _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__
            ),
          _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__('./node_modules/css-loader/dist/runtime/api.js'),
          ___CSS_LOADER_EXPORT___ = __webpack_require__.n(
            _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__
          )()(
            _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()
          );
        ___CSS_LOADER_EXPORT___.push([
          module.id,
          ".Navbar_navbar__7Exjr {\n  --headerNavFontSize: calc((16 / 16) * 1rem);\n\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: flex-start;\n  padding: 0;\n  width: var(--space2XL);\n  position: fixed;\n  top: var(--spaceOuter);\n  left: var(--spaceOuter);\n  bottom: var(--spaceOuter);\n  z-index: var(--zIndex4);\n  isolation: isolate;\n}\n\n@media (max-width: 696px) {\n\n.Navbar_navbar__7Exjr {\n    --headerNavFontSize: calc((22 / 16) * 1rem);\n}\n  }\n\n@media (max-width: 696px), (max-height: 696px) {\n\n.Navbar_navbar__7Exjr {\n    bottom: auto;\n}\n  }\n\n.Navbar_logo__keI4H {\n  display: flex;\n  position: relative;\n  padding: var(--spaceS) var(--spaceS) var(--spaceL);\n  z-index: var(--zIndex2);\n}\n\n@media (max-width: 696px) {\n\n.Navbar_logo__keI4H {\n    padding-bottom: var(--spaceS);\n}\n  }\n\n.Navbar_nav__Ymaux {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n  flex: 1 1 auto;\n  max-width: var(--space2XL);\n}\n\n@media (max-width: 696px), (max-height: 696px) {\n\n.Navbar_nav__Ymaux {\n    display: none;\n}\n  }\n\n.Navbar_navList__mg4Oa {\n  transform: rotate(-90deg) translate3d(-50%, 0, 0);\n  display: flex;\n  flex-direction: row-reverse;\n  position: relative;\n  top: calc(var(--spaceM) * -1);\n}\n\n.Navbar_navLink__Havgb {\n  padding: var(--spaceM);\n  color: rgb(var(--rgbText) / 0.8);\n  font-weight: var(--fontWeightMedium);\n  font-size: var(--headerNavFontSize);\n  text-decoration: none;\n  position: relative;\n  transition: color var(--durationS) ease 0.1s;\n  line-height: 1;\n  display: inline-flex;\n  align-items: center;\n}\n\n.Navbar_navLink__Havgb:hover,\n  .Navbar_navLink__Havgb:active,\n  .Navbar_navLink__Havgb:focus,\n  .Navbar_navLink__Havgb[aria-current='page'] {\n    color: var(--colorTextBody);\n  }\n\n.Navbar_navLink__Havgb::after {\n    content: '';\n    position: absolute;\n    right: var(--spaceS);\n    left: var(--spaceS);\n    height: 4px;\n    background: rgb(var(--rgbAccent));\n    transform: scaleX(0);\n    transform-origin: right;\n  }\n\n@media (prefers-reduced-motion: no-preference) {\n    .Navbar_navLink__Havgb::after {\n      transition: transform var(--durationM) var(--bezierFastoutSlowin);\n    }\n  }\n\n.Navbar_navLink__Havgb:hover::after,\n  .Navbar_navLink__Havgb:active::after,\n  .Navbar_navLink__Havgb:focus::after,\n  .Navbar_navLink__Havgb[aria-current='page']::after {\n    transform: scaleX(1);\n    transform-origin: left;\n  }\n\n.Navbar_navIcons__KC2a8 {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  z-index: var(--zIndex2);\n}\n\n@media (max-width: 696px), (max-height: 696px) {\n\n.Navbar_navIcons__KC2a8 {\n    flex-direction: row;\n    position: absolute;\n    bottom: var(--spaceXL);\n    left: var(--spaceXL);\n}\n  }\n\n@media (max-width: 820px) and (max-height: 420px) {\n\n.Navbar_navIcons__KC2a8 {\n    left: var(--spaceL);\n    transform: none;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n}\n  }\n\n.Navbar_navIconLink__W8ZFX {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: var(--spaceS);\n  width: var(--space2XL);\n  height: var(--space2XL);\n  color: var(--colorTextLight);\n  transition: color var(--durationM) var(--bezierFastoutSlowin);\n}\n\n.Navbar_navIconLink__W8ZFX:hover,\n  .Navbar_navIconLink__W8ZFX:focus,\n  .Navbar_navIconLink__W8ZFX:active {\n    color: rgb(var(--rgbAccent));\n  }\n\n.Navbar_navIcon__lI_cE {\n  fill: currentColor;\n  transition: fill var(--durationM) ease;\n}\n\n.Navbar_mobileNav__oBcFx {\n  position: fixed;\n  inset: 0;\n  background: rgb(var(--rgbBackground) / 0.9);\n  transform: translate3d(0, -100%, 0);\n  transition-property: background;\n  transition-duration: var(--durationL);\n  transition-timing-function: var(--bezierFastoutSlowin);\n  display: none;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  backdrop-filter: blur(16px);\n}\n\n@media (max-width: 696px), (max-height: 696px) {\n\n.Navbar_mobileNav__oBcFx {\n    display: flex;\n}\n  }\n\n@media (prefers-reduced-motion: no-preference) {\n\n.Navbar_mobileNav__oBcFx {\n    transition-property: transform, background;\n    transform: translate3d(0, -100%, 0);\n}\n  }\n\n.Navbar_mobileNav__oBcFx[data-visible='true'] {\n    transform: none;\n  }\n\n.Navbar_mobileNavLink__7KN69 {\n  width: 100%;\n  font-size: var(--headerNavFontSize);\n  text-align: center;\n  text-decoration: none;\n  color: var(--colorTextBody);\n  padding: var(--spaceL);\n  opacity: 0;\n  transition-property: opacity;\n  transition-duration: var(--durationS);\n  transition-timing-function: var(--bezierFastoutSlowin);\n  transition-delay: var(--transitionDelay);\n  position: relative;\n  top: calc(var(--spaceM) * -1);\n}\n\n@media (prefers-reduced-motion: no-preference) {\n\n.Navbar_mobileNavLink__7KN69 {\n    transition-property: transform, opacity;\n    transform: translate3d(0, calc(var(--spaceXL) * -1), 0);\n}\n  }\n\n@media (max-width: 820px) and (max-height: 420px) {\n\n.Navbar_mobileNavLink__7KN69 {\n    top: auto;\n}\n  }\n\n@media (max-width: 400px), (max-height: 360px) {\n\n.Navbar_mobileNavLink__7KN69 {\n    --headerNavFontSize: calc((18 / 16) * 1rem);\n}\n  }\n\n.Navbar_mobileNavLink__7KN69::after {\n    content: '';\n    position: absolute;\n    top: 50%;\n    right: var(--space3XL);\n    left: var(--space3XL);\n    height: 4px;\n    background: rgb(var(--rgbAccent));\n    transform: scaleX(0) translateY(-1px);\n    transform-origin: right;\n  }\n\n@media (prefers-reduced-motion: no-preference) {\n    .Navbar_mobileNavLink__7KN69::after {\n      transition: transform var(--durationM) var(--bezierFastoutSlowin);\n    }\n  }\n\n.Navbar_mobileNavLink__7KN69:hover::after,\n  .Navbar_mobileNavLink__7KN69:active::after,\n  .Navbar_mobileNavLink__7KN69:focus::after {\n    transform: scaleX(1) translateY(-1px);\n    transform-origin: left;\n  }\n\n.Navbar_mobileNavLink__7KN69[data-visible='true'] {\n    opacity: 1;\n    transform: none;\n  }\n",
          '',
          {
            version: 3,
            sources: ['webpack://./src/components/Navbar/Navbar.module.css'],
            names: [],
            mappings:
              'AAAA;EACE,2CAA2C;;EAE3C,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,2BAA2B;EAC3B,UAAU;EACV,sBAAsB;EACtB,eAAe;EACf,sBAAsB;EACtB,uBAAuB;EACvB,yBAAyB;EACzB,uBAAuB;EACvB,kBAAkB;AASpB;;AAPE;;AAhBF;IAiBI,2CAA2C;AAM/C;EALE;;AAEA;;AApBF;IAqBI,YAAY;AAEhB;EADE;;AAGF;EACE,aAAa;EACb,kBAAkB;EAClB,kDAAkD;EAClD,uBAAuB;AAKzB;;AAHE;;AANF;IAOI,6BAA6B;AAEjC;EADE;;AAGF;EACE,aAAa;EACb,sBAAsB;EACtB,8BAA8B;EAC9B,mBAAmB;EACnB,cAAc;EACd,0BAA0B;AAK5B;;AAHE;;AARF;IASI,aAAa;AAEjB;EADE;;AAGF;EACE,iDAAiD;EACjD,aAAa;EACb,2BAA2B;EAC3B,kBAAkB;EAClB,6BAA6B;AAC/B;;AAEA;EACE,sBAAsB;EACtB,gCAAgC;EAChC,oCAAoC;EACpC,mCAAmC;EACnC,qBAAqB;EACrB,kBAAkB;EAClB,4CAA4C;EAC5C,cAAc;EACd,oBAAoB;EACpB,mBAAmB;AAiCrB;;AA/BE;;;;IAIE,2BAA2B;EAC7B;;AAEA;IACE,WAAW;IACX,kBAAkB;IAClB,oBAAoB;IACpB,mBAAmB;IACnB,WAAW;IACX,iCAAiC;IACjC,oBAAoB;IACpB,uBAAuB;EACzB;;AAEA;IACE;MACE,iEAAiE;IACnE;EACF;;AAEA;;;;IAIE,oBAAoB;IACpB,sBAAsB;EACxB;;AAGF;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;EACvB,kBAAkB;EAClB,uBAAuB;AAgBzB;;AAdE;;AARF;IASI,mBAAmB;IACnB,kBAAkB;IAClB,sBAAsB;IACtB,oBAAoB;AAUxB;EATE;;AAEA;;AAfF;IAgBI,mBAAmB;IACnB,eAAe;IACf,sBAAsB;IACtB,mBAAmB;IACnB,uBAAuB;AAE3B;EADE;;AAGF;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,sBAAsB;EACtB,sBAAsB;EACtB,uBAAuB;EACvB,4BAA4B;EAC5B,6DAA6D;AAO/D;;AALE;;;IAGE,4BAA4B;EAC9B;;AAGF;EACE,kBAAkB;EAClB,sCAAsC;AACxC;;AAEA;EACE,eAAe;EACf,QAAQ;EACR,2CAA2C;EAC3C,mCAAmC;EACnC,+BAA+B;EAC/B,qCAAqC;EACrC,sDAAsD;EACtD,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;EACvB,2BAA2B;AAc7B;;AAZE;;AAdF;IAeI,aAAa;AAWjB;EAVE;;AAEA;;AAlBF;IAmBI,0CAA0C;IAC1C,mCAAmC;AAMvC;EALE;;AAEA;IACE,eAAe;EACjB;;AAGF;EACE,WAAW;EACX,mCAAmC;EACnC,kBAAkB;EAClB,qBAAqB;EACrB,2BAA2B;EAC3B,sBAAsB;EACtB,UAAU;EACV,4BAA4B;EAC5B,qCAAqC;EACrC,sDAAsD;EACtD,wCAAwC;EACxC,kBAAkB;EAClB,6BAA6B;AA4C/B;;AA1CE;;AAfF;IAgBI,uCAAuC;IACvC,uDAAuD;AAwC3D;EAvCE;;AAEA;;AApBF;IAqBI,SAAS;AAoCb;EAnCE;;AAEA;;AAxBF;IAyBI,2CAA2C;AAgC/C;EA/BE;;AAEA;IACE,WAAW;IACX,kBAAkB;IAClB,QAAQ;IACR,sBAAsB;IACtB,qBAAqB;IACrB,WAAW;IACX,iCAAiC;IACjC,qCAAqC;IACrC,uBAAuB;EACzB;;AAEA;IACE;MACE,iEAAiE;IACnE;EACF;;AAEA;;;IAGE,qCAAqC;IACrC,sBAAsB;EACxB;;AAEA;IACE,UAAU;IACV,eAAe;EACjB',
            sourcesContent: [
              ".navbar {\n  --headerNavFontSize: calc((16 / 16) * 1rem);\n\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: flex-start;\n  padding: 0;\n  width: var(--space2XL);\n  position: fixed;\n  top: var(--spaceOuter);\n  left: var(--spaceOuter);\n  bottom: var(--spaceOuter);\n  z-index: var(--zIndex4);\n  isolation: isolate;\n\n  @media (--mediaMobile) {\n    --headerNavFontSize: calc((22 / 16) * 1rem);\n  }\n\n  @media (--mediaMobile), (--mediaMobileLS) {\n    bottom: auto;\n  }\n}\n\n.logo {\n  display: flex;\n  position: relative;\n  padding: var(--spaceS) var(--spaceS) var(--spaceL);\n  z-index: var(--zIndex2);\n\n  @media (--mediaMobile) {\n    padding-bottom: var(--spaceS);\n  }\n}\n\n.nav {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n  flex: 1 1 auto;\n  max-width: var(--space2XL);\n\n  @media (--mediaMobile), (--mediaMobileLS) {\n    display: none;\n  }\n}\n\n.navList {\n  transform: rotate(-90deg) translate3d(-50%, 0, 0);\n  display: flex;\n  flex-direction: row-reverse;\n  position: relative;\n  top: calc(var(--spaceM) * -1);\n}\n\n.navLink {\n  padding: var(--spaceM);\n  color: rgb(var(--rgbText) / 0.8);\n  font-weight: var(--fontWeightMedium);\n  font-size: var(--headerNavFontSize);\n  text-decoration: none;\n  position: relative;\n  transition: color var(--durationS) ease 0.1s;\n  line-height: 1;\n  display: inline-flex;\n  align-items: center;\n\n  &:hover,\n  &:active,\n  &:focus,\n  &[aria-current='page'] {\n    color: var(--colorTextBody);\n  }\n\n  &::after {\n    content: '';\n    position: absolute;\n    right: var(--spaceS);\n    left: var(--spaceS);\n    height: 4px;\n    background: rgb(var(--rgbAccent));\n    transform: scaleX(0);\n    transform-origin: right;\n  }\n\n  @media (--mediaUseMotion) {\n    &::after {\n      transition: transform var(--durationM) var(--bezierFastoutSlowin);\n    }\n  }\n\n  &:hover::after,\n  &:active::after,\n  &:focus::after,\n  &[aria-current='page']::after {\n    transform: scaleX(1);\n    transform-origin: left;\n  }\n}\n\n.navIcons {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  z-index: var(--zIndex2);\n\n  @media (--mediaMobile), (--mediaMobileLS) {\n    flex-direction: row;\n    position: absolute;\n    bottom: var(--spaceXL);\n    left: var(--spaceXL);\n  }\n\n  @media (max-width: 820px) and (max-height: 420px) {\n    left: var(--spaceL);\n    transform: none;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n  }\n}\n\n.navIconLink {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: var(--spaceS);\n  width: var(--space2XL);\n  height: var(--space2XL);\n  color: var(--colorTextLight);\n  transition: color var(--durationM) var(--bezierFastoutSlowin);\n\n  &:hover,\n  &:focus,\n  &:active {\n    color: rgb(var(--rgbAccent));\n  }\n}\n\n.navIcon {\n  fill: currentColor;\n  transition: fill var(--durationM) ease;\n}\n\n.mobileNav {\n  position: fixed;\n  inset: 0;\n  background: rgb(var(--rgbBackground) / 0.9);\n  transform: translate3d(0, -100%, 0);\n  transition-property: background;\n  transition-duration: var(--durationL);\n  transition-timing-function: var(--bezierFastoutSlowin);\n  display: none;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  backdrop-filter: blur(16px);\n\n  @media (--mediaMobile), (--mediaMobileLS) {\n    display: flex;\n  }\n\n  @media (--mediaUseMotion) {\n    transition-property: transform, background;\n    transform: translate3d(0, -100%, 0);\n  }\n\n  &[data-visible='true'] {\n    transform: none;\n  }\n}\n\n.mobileNavLink {\n  width: 100%;\n  font-size: var(--headerNavFontSize);\n  text-align: center;\n  text-decoration: none;\n  color: var(--colorTextBody);\n  padding: var(--spaceL);\n  opacity: 0;\n  transition-property: opacity;\n  transition-duration: var(--durationS);\n  transition-timing-function: var(--bezierFastoutSlowin);\n  transition-delay: var(--transitionDelay);\n  position: relative;\n  top: calc(var(--spaceM) * -1);\n\n  @media (--mediaUseMotion) {\n    transition-property: transform, opacity;\n    transform: translate3d(0, calc(var(--spaceXL) * -1), 0);\n  }\n\n  @media (max-width: 820px) and (max-height: 420px) {\n    top: auto;\n  }\n\n  @media (--mediaMobileS), (max-height: 360px) {\n    --headerNavFontSize: calc((18 / 16) * 1rem);\n  }\n\n  &::after {\n    content: '';\n    position: absolute;\n    top: 50%;\n    right: var(--space3XL);\n    left: var(--space3XL);\n    height: 4px;\n    background: rgb(var(--rgbAccent));\n    transform: scaleX(0) translateY(-1px);\n    transform-origin: right;\n  }\n\n  @media (--mediaUseMotion) {\n    &::after {\n      transition: transform var(--durationM) var(--bezierFastoutSlowin);\n    }\n  }\n\n  &:hover::after,\n  &:active::after,\n  &:focus::after {\n    transform: scaleX(1) translateY(-1px);\n    transform-origin: left;\n  }\n\n  &[data-visible='true'] {\n    opacity: 1;\n    transform: none;\n  }\n}\n",
            ],
            sourceRoot: '',
          },
        ]),
          (___CSS_LOADER_EXPORT___.locals = {
            navbar: 'Navbar_navbar__7Exjr',
            logo: 'Navbar_logo__keI4H',
            nav: 'Navbar_nav__Ymaux',
            navList: 'Navbar_navList__mg4Oa',
            navLink: 'Navbar_navLink__Havgb',
            navIcons: 'Navbar_navIcons__KC2a8',
            navIconLink: 'Navbar_navIconLink__W8ZFX',
            navIcon: 'Navbar_navIcon__lI_cE',
            mobileNav: 'Navbar_mobileNav__oBcFx',
            mobileNavLink: 'Navbar_mobileNavLink__7KN69',
          });
        const __WEBPACK_DEFAULT_EXPORT__ = ___CSS_LOADER_EXPORT___;
      },
    './node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./node_modules/postcss-loader/dist/cjs.js!./src/components/Navbar/ThemeToggle.module.css':
      (module, __webpack_exports__, __webpack_require__) => {
        'use strict';
        __webpack_require__.d(__webpack_exports__, {
          Z: () => __WEBPACK_DEFAULT_EXPORT__,
        });
        var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(
              './node_modules/css-loader/dist/runtime/cssWithMappingToString.js'
            ),
          _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default =
            __webpack_require__.n(
              _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__
            ),
          _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__('./node_modules/css-loader/dist/runtime/api.js'),
          ___CSS_LOADER_EXPORT___ = __webpack_require__.n(
            _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__
          )()(
            _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()
          );
        ___CSS_LOADER_EXPORT___.push([
          module.id,
          ".ThemeToggle_toggle__w8LEU {\n  --offset: 6px;\n  --inset: calc(var(--spaceOuter) - var(--offset));\n\n  position: fixed;\n  z-index: var(--zIndex4);\n  top: var(--inset);\n  right: var(--inset);\n  transform: translate3d(0, 0, 0);\n}\n\n@media (max-width: 696px), (max-height: 696px) {\n    .ThemeToggle_toggle__w8LEU:not([data-mobile='true']) {\n      display: none;\n    }\n  }\n\n.ThemeToggle_toggle__w8LEU[data-mobile='true'] {\n    --offset: var(--spaceXS);\n    --inset: calc(var(--spaceXL) - var(--offset));\n\n    top: unset;\n    bottom: var(--inset);\n    margin-top: 0;\n    margin-right: 0;\n  }\n\n.ThemeToggle_circle__qVSRK {\n  fill: currentColor;\n  transform: scale(0.6);\n  transform-origin: center;\n}\n\n@media (prefers-reduced-motion: no-preference) {\n\n.ThemeToggle_circle__qVSRK {\n    transition-property: transform, fill;\n    transition-duration: var(--durationL);\n    transition-delay: 0s;\n    transition-timing-function: var(--bezierFastoutSlowin);\n}\n  }\n\n.ThemeToggle_circle__qVSRK[data-mask='true'] {\n    fill: white;\n  }\n\nbody[data-theme='dark'] .ThemeToggle_circle__qVSRK {\n    transform: none;\n}\n\n@media (prefers-reduced-motion: no-preference) {\n\nbody[data-theme='dark'] .ThemeToggle_circle__qVSRK {\n      transition-delay: 0.3s;\n}\n    }\n\n.ThemeToggle_mask__Y09BP {\n  fill: black;\n  transform: translate3d(100%, -100%, 0);\n}\n\n@media (prefers-reduced-motion: no-preference) {\n\n.ThemeToggle_mask__Y09BP {\n    transition: transform var(--durationL) var(--bezierFastoutSlowin);\n    transition-delay: 0s;\n}\n  }\n\nbody[data-theme='dark'] .ThemeToggle_mask__Y09BP {\n    transform: none;\n}\n\n@media (prefers-reduced-motion: no-preference) {\n\nbody[data-theme='dark'] .ThemeToggle_mask__Y09BP {\n      transition-delay: 0.3s;\n}\n    }\n\n.ThemeToggle_path__9hTG0 {\n  stroke: currentColor;\n  fill: none;\n  stroke-linecap: round;\n  stroke-width: 3;\n  stroke-dasharray: 7 7;\n  stroke-dashoffset: 0;\n  opacity: 1;\n}\n\n@media (prefers-reduced-motion: no-preference) {\n\n.ThemeToggle_path__9hTG0 {\n    transition-property: stroke-dashoffset, opacity;\n    transition-duration: var(--durationL);\n    transition-timing-function: var(--bezierFastoutSlowin);\n    transition-delay: 0.3s;\n}\n  }\n\nbody[data-theme='dark'] .ThemeToggle_path__9hTG0 {\n    stroke-dashoffset: 7;\n    opacity: 0;\n}\n\n@media (prefers-reduced-motion: no-preference) {\n\nbody[data-theme='dark'] .ThemeToggle_path__9hTG0 {\n      transition-delay: 0s;\n}\n    }\n",
          '',
          {
            version: 3,
            sources: ['webpack://./src/components/Navbar/ThemeToggle.module.css'],
            names: [],
            mappings:
              'AAAA;EACE,aAAa;EACb,gDAAgD;;EAEhD,eAAe;EACf,uBAAuB;EACvB,iBAAiB;EACjB,mBAAmB;EACnB,+BAA+B;AAiBjC;;AAfE;IACE;MACE,aAAa;IACf;EACF;;AAEA;IACE,wBAAwB;IACxB,6CAA6C;;IAE7C,UAAU;IACV,oBAAoB;IACpB,aAAa;IACb,eAAe;EACjB;;AAGF;EACE,kBAAkB;EAClB,qBAAqB;EACrB,wBAAwB;AAoB1B;;AAlBE;;AALF;IAMI,oCAAoC;IACpC,qCAAqC;IACrC,oBAAoB;IACpB,sDAAsD;AAc1D;EAbE;;AAEA;IACE,WAAW;EACb;;AAdF;IAiBI,eAAe;AAMnB;;AAJI;;AAnBJ;MAoBM,sBAAsB;AAG5B;IAFI;;AAIJ;EACE,WAAW;EACX,sCAAsC;AAcxC;;AAZE;;AAJF;IAKI,iEAAiE;IACjE,oBAAoB;AAUxB;EATE;;AAPF;IAUI,eAAe;AAMnB;;AAJI;;AAZJ;MAaM,sBAAsB;AAG5B;IAFI;;AAIJ;EACE,oBAAoB;EACpB,UAAU;EACV,qBAAqB;EACrB,eAAe;EACf,qBAAqB;EACrB,oBAAoB;EACpB,UAAU;AAiBZ;;AAfE;;AATF;IAUI,+CAA+C;IAC/C,qCAAqC;IACrC,sDAAsD;IACtD,sBAAsB;AAW1B;EAVE;;AAdF;IAiBI,oBAAoB;IACpB,UAAU;AAMd;;AAJI;;AApBJ;MAqBM,oBAAoB;AAG1B;IAFI',
            sourcesContent: [
              ".toggle {\n  --offset: 6px;\n  --inset: calc(var(--spaceOuter) - var(--offset));\n\n  position: fixed;\n  z-index: var(--zIndex4);\n  top: var(--inset);\n  right: var(--inset);\n  transform: translate3d(0, 0, 0);\n\n  @media (--mediaMobile), (--mediaMobileLS) {\n    &:not([data-mobile='true']) {\n      display: none;\n    }\n  }\n\n  &[data-mobile='true'] {\n    --offset: var(--spaceXS);\n    --inset: calc(var(--spaceXL) - var(--offset));\n\n    top: unset;\n    bottom: var(--inset);\n    margin-top: 0;\n    margin-right: 0;\n  }\n}\n\n.circle {\n  fill: currentColor;\n  transform: scale(0.6);\n  transform-origin: center;\n\n  @media (--mediaUseMotion) {\n    transition-property: transform, fill;\n    transition-duration: var(--durationL);\n    transition-delay: 0s;\n    transition-timing-function: var(--bezierFastoutSlowin);\n  }\n\n  &[data-mask='true'] {\n    fill: white;\n  }\n\n  @nest body[data-theme='dark'] & {\n    transform: none;\n\n    @media (--mediaUseMotion) {\n      transition-delay: 0.3s;\n    }\n  }\n}\n\n.mask {\n  fill: black;\n  transform: translate3d(100%, -100%, 0);\n\n  @media (--mediaUseMotion) {\n    transition: transform var(--durationL) var(--bezierFastoutSlowin);\n    transition-delay: 0s;\n  }\n\n  @nest body[data-theme='dark'] & {\n    transform: none;\n\n    @media (--mediaUseMotion) {\n      transition-delay: 0.3s;\n    }\n  }\n}\n\n.path {\n  stroke: currentColor;\n  fill: none;\n  stroke-linecap: round;\n  stroke-width: 3;\n  stroke-dasharray: 7 7;\n  stroke-dashoffset: 0;\n  opacity: 1;\n\n  @media (--mediaUseMotion) {\n    transition-property: stroke-dashoffset, opacity;\n    transition-duration: var(--durationL);\n    transition-timing-function: var(--bezierFastoutSlowin);\n    transition-delay: 0.3s;\n  }\n\n  @nest body[data-theme='dark'] & {\n    stroke-dashoffset: 7;\n    opacity: 0;\n\n    @media (--mediaUseMotion) {\n      transition-delay: 0s;\n    }\n  }\n}\n",
            ],
            sourceRoot: '',
          },
        ]),
          (___CSS_LOADER_EXPORT___.locals = {
            toggle: 'ThemeToggle_toggle__w8LEU',
            circle: 'ThemeToggle_circle__qVSRK',
            mask: 'ThemeToggle_mask__Y09BP',
            path: 'ThemeToggle_path__9hTG0',
          });
        const __WEBPACK_DEFAULT_EXPORT__ = ___CSS_LOADER_EXPORT___;
      },
    './node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./node_modules/postcss-loader/dist/cjs.js!./src/components/SegmentedControl/SegmentedControl.module.css':
      (module, __webpack_exports__, __webpack_require__) => {
        'use strict';
        __webpack_require__.d(__webpack_exports__, {
          Z: () => __WEBPACK_DEFAULT_EXPORT__,
        });
        var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(
              './node_modules/css-loader/dist/runtime/cssWithMappingToString.js'
            ),
          _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default =
            __webpack_require__.n(
              _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__
            ),
          _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__('./node_modules/css-loader/dist/runtime/api.js'),
          ___CSS_LOADER_EXPORT___ = __webpack_require__.n(
            _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__
          )()(
            _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()
          );
        ___CSS_LOADER_EXPORT___.push([
          module.id,
          ".SegmentedControl_container__cFBtq {\n  --inset: 4px;\n}\n\n.SegmentedControl_options__w2xJa {\n  position: relative;\n  display: flex;\n  padding: var(--inset);\n}\n\n.SegmentedControl_options__w2xJa::before {\n    content: '';\n    background-color: rgb(var(--rgbText) / 0.05);\n    position: absolute;\n    inset: 0;\n    clip-path: polygon(\n      0 0,\n      100% 0,\n      100% calc(100% - 10px),\n      calc(100% - 10px) 100%,\n      0 100%\n    );\n  }\n\n.SegmentedControl_button__jq7gQ {\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: transparent;\n  color: var(--colorTextLight);\n  transition-property: color, background;\n  transition-duration: var(--durationM);\n  transition-timing-function: ease;\n  border: 0;\n  padding: 0 24px;\n  height: 56px;\n  font-size: inherit;\n  font-family: inherit;\n  font-weight: var(--fontWeightMedium);\n  cursor: pointer;\n}\n\n.SegmentedControl_button__jq7gQ[aria-checked='true'] {\n    color: var(--colorTextBody);\n  }\n\n.SegmentedControl_button__jq7gQ::before {\n    --inset: 12px;\n\n    content: '';\n    position: absolute;\n    top: var(--inset);\n    bottom: var(--inset);\n    left: 0;\n    width: 1px;\n    background-color: rgb(var(--rgbText) / 0.1);\n    transition: opacity var(--durationM) var(--bezierFastoutSlowin);\n    opacity: 0;\n  }\n\n.SegmentedControl_button__jq7gQ:not([aria-checked='true']) + .SegmentedControl_button__jq7gQ:not([aria-checked='true'])::before {\n    opacity: 1;\n  }\n\n.SegmentedControl_indicator__qC6bu {\n  position: absolute;\n  top: var(--inset);\n  bottom: var(--inset);\n  left: 0;\n  filter: drop-shadow(0 6px 12px rgb(var(--rgbBlack) / 0.2));\n  transform: translate3d(var(--left), 0, 0);\n  width: var(--width);\n}\n\n@media (prefers-reduced-motion: no-preference) {\n\n.SegmentedControl_indicator__qC6bu {\n    transition-property: width, transform;\n    transition-duration: var(--durationM);\n    transition-timing-function: var(--bezierFastoutSlowin);\n}\n  }\n\n.SegmentedControl_indicator__qC6bu::before {\n    content: '';\n    position: absolute;\n    inset: 0;\n    background-color: rgb(var(--rgbBackgroundLight));\n    filter: brightness(2.2);\n    clip-path: polygon(0 0, 100% 0, 100% 100%, 100% 100%, 0 100%);\n  }\n\n@media (prefers-reduced-motion: no-preference) {\n\n.SegmentedControl_indicator__qC6bu::before {\n      transition: clip-path var(--durationM) var(--bezierFastoutSlowin);\n  }\n    }\n\n.SegmentedControl_indicator__qC6bu[data-last='true']::before {\n    clip-path: polygon(0 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%);\n  }\n",
          '',
          {
            version: 3,
            sources: [
              'webpack://./src/components/SegmentedControl/SegmentedControl.module.css',
            ],
            names: [],
            mappings:
              'AAAA;EACE,YAAY;AACd;;AAEA;EACE,kBAAkB;EAClB,aAAa;EACb,qBAAqB;AAevB;;AAbE;IACE,WAAW;IACX,4CAA4C;IAC5C,kBAAkB;IAClB,QAAQ;IACR;;;;;;KAMC;EACH;;AAGF;EACE,kBAAkB;EAClB,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,6BAA6B;EAC7B,4BAA4B;EAC5B,sCAAsC;EACtC,qCAAqC;EACrC,gCAAgC;EAChC,SAAS;EACT,eAAe;EACf,YAAY;EACZ,kBAAkB;EAClB,oBAAoB;EACpB,oCAAoC;EACpC,eAAe;AAuBjB;;AArBE;IACE,2BAA2B;EAC7B;;AAEA;IACE,aAAa;;IAEb,WAAW;IACX,kBAAkB;IAClB,iBAAiB;IACjB,oBAAoB;IACpB,OAAO;IACP,UAAU;IACV,2CAA2C;IAC3C,+DAA+D;IAC/D,UAAU;EACZ;;AAEA;IACE,UAAU;EACZ;;AAGF;EACE,kBAAkB;EAClB,iBAAiB;EACjB,oBAAoB;EACpB,OAAO;EACP,0DAA0D;EAC1D,yCAAyC;EACzC,mBAAmB;AAwBrB;;AAtBE;;AATF;IAUI,qCAAqC;IACrC,qCAAqC;IACrC,sDAAsD;AAmB1D;EAlBE;;AAEA;IACE,WAAW;IACX,kBAAkB;IAClB,QAAQ;IACR,gDAAgD;IAChD,uBAAuB;IACvB,6DAA6D;EAK/D;;AAHE;;AARF;MASI,iEAAiE;EAErE;IADE;;AAGF;IACE,qFAAqF;EACvF',
            sourcesContent: [
              ".container {\n  --inset: 4px;\n}\n\n.options {\n  position: relative;\n  display: flex;\n  padding: var(--inset);\n\n  &::before {\n    content: '';\n    background-color: rgb(var(--rgbText) / 0.05);\n    position: absolute;\n    inset: 0;\n    clip-path: polygon(\n      0 0,\n      100% 0,\n      100% calc(100% - 10px),\n      calc(100% - 10px) 100%,\n      0 100%\n    );\n  }\n}\n\n.button {\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: transparent;\n  color: var(--colorTextLight);\n  transition-property: color, background;\n  transition-duration: var(--durationM);\n  transition-timing-function: ease;\n  border: 0;\n  padding: 0 24px;\n  height: 56px;\n  font-size: inherit;\n  font-family: inherit;\n  font-weight: var(--fontWeightMedium);\n  cursor: pointer;\n\n  &[aria-checked='true'] {\n    color: var(--colorTextBody);\n  }\n\n  &::before {\n    --inset: 12px;\n\n    content: '';\n    position: absolute;\n    top: var(--inset);\n    bottom: var(--inset);\n    left: 0;\n    width: 1px;\n    background-color: rgb(var(--rgbText) / 0.1);\n    transition: opacity var(--durationM) var(--bezierFastoutSlowin);\n    opacity: 0;\n  }\n\n  &:not([aria-checked='true']) + &:not([aria-checked='true'])::before {\n    opacity: 1;\n  }\n}\n\n.indicator {\n  position: absolute;\n  top: var(--inset);\n  bottom: var(--inset);\n  left: 0;\n  filter: drop-shadow(0 6px 12px rgb(var(--rgbBlack) / 0.2));\n  transform: translate3d(var(--left), 0, 0);\n  width: var(--width);\n\n  @media (--mediaUseMotion) {\n    transition-property: width, transform;\n    transition-duration: var(--durationM);\n    transition-timing-function: var(--bezierFastoutSlowin);\n  }\n\n  &::before {\n    content: '';\n    position: absolute;\n    inset: 0;\n    background-color: rgb(var(--rgbBackgroundLight));\n    filter: brightness(2.2);\n    clip-path: polygon(0 0, 100% 0, 100% 100%, 100% 100%, 0 100%);\n\n    @media (--mediaUseMotion) {\n      transition: clip-path var(--durationM) var(--bezierFastoutSlowin);\n    }\n  }\n\n  &[data-last='true']::before {\n    clip-path: polygon(0 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%);\n  }\n}\n",
            ],
            sourceRoot: '',
          },
        ]),
          (___CSS_LOADER_EXPORT___.locals = {
            container: 'SegmentedControl_container__cFBtq',
            options: 'SegmentedControl_options__w2xJa',
            button: 'SegmentedControl_button__jq7gQ',
            indicator: 'SegmentedControl_indicator__qC6bu',
          });
        const __WEBPACK_DEFAULT_EXPORT__ = ___CSS_LOADER_EXPORT___;
      },
    './node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./node_modules/postcss-loader/dist/cjs.js!./src/components/Table/Table.module.css':
      (module, __webpack_exports__, __webpack_require__) => {
        'use strict';
        __webpack_require__.d(__webpack_exports__, {
          Z: () => __WEBPACK_DEFAULT_EXPORT__,
        });
        var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(
              './node_modules/css-loader/dist/runtime/cssWithMappingToString.js'
            ),
          _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default =
            __webpack_require__.n(
              _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__
            ),
          _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__('./node_modules/css-loader/dist/runtime/api.js'),
          ___CSS_LOADER_EXPORT___ = __webpack_require__.n(
            _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__
          )()(
            _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()
          );
        ___CSS_LOADER_EXPORT___.push([
          module.id,
          '.Table_table__uGVrB {\n  border-collapse: collapse;\n  width: 100%;\n}\n\n.Table_row__l1i1q {\n  --rowBorder: 1px solid rgb(var(--rgbText) / 0.2);\n\n  border-top: var(--rowBorder);\n}\n\n.Table_row__l1i1q:last-child {\n    border-bottom: var(--rowBorder);\n  }\n\n.Table_head__WjsZe .Table_row__l1i1q {\n    border-top: 0;\n}\n\n.Table_headCell__KFzz0 {\n  font-weight: var(--fontWeightMedium);\n  text-align: left;\n}\n\n.Table_cell__aU5Fy,\n.Table_headCell__KFzz0 {\n  padding-right: var(--spaceXL);\n  padding-top: var(--spaceM);\n  padding-bottom: var(--spaceM);\n}\n\n.Table_cell__aU5Fy:last-child, .Table_headCell__KFzz0:last-child {\n    padding-right: 0;\n  }\n',
          '',
          {
            version: 3,
            sources: ['webpack://./src/components/Table/Table.module.css'],
            names: [],
            mappings:
              'AAAA;EACE,yBAAyB;EACzB,WAAW;AACb;;AAEA;EACE,gDAAgD;;EAEhD,4BAA4B;AAS9B;;AAPE;IACE,+BAA+B;EACjC;;AAPF;IAUI,aAAa;AAEjB;;AAEA;EACE,oCAAoC;EACpC,gBAAgB;AAClB;;AAEA;;EAEE,6BAA6B;EAC7B,0BAA0B;EAC1B,6BAA6B;AAK/B;;AAHE;IACE,gBAAgB;EAClB',
            sourcesContent: [
              '.table {\n  border-collapse: collapse;\n  width: 100%;\n}\n\n.row {\n  --rowBorder: 1px solid rgb(var(--rgbText) / 0.2);\n\n  border-top: var(--rowBorder);\n\n  &:last-child {\n    border-bottom: var(--rowBorder);\n  }\n\n  @nest .head & {\n    border-top: 0;\n  }\n}\n\n.headCell {\n  font-weight: var(--fontWeightMedium);\n  text-align: left;\n}\n\n.cell,\n.headCell {\n  padding-right: var(--spaceXL);\n  padding-top: var(--spaceM);\n  padding-bottom: var(--spaceM);\n\n  &:last-child {\n    padding-right: 0;\n  }\n}\n',
            ],
            sourceRoot: '',
          },
        ]),
          (___CSS_LOADER_EXPORT___.locals = {
            table: 'Table_table__uGVrB',
            row: 'Table_row__l1i1q',
            head: 'Table_head__WjsZe',
            headCell: 'Table_headCell__KFzz0',
            cell: 'Table_cell__aU5Fy',
          });
        const __WEBPACK_DEFAULT_EXPORT__ = ___CSS_LOADER_EXPORT___;
      },
    './node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./node_modules/postcss-loader/dist/cjs.js!./src/components/Text/Text.module.css':
      (module, __webpack_exports__, __webpack_require__) => {
        'use strict';
        __webpack_require__.d(__webpack_exports__, {
          Z: () => __WEBPACK_DEFAULT_EXPORT__,
        });
        var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(
              './node_modules/css-loader/dist/runtime/cssWithMappingToString.js'
            ),
          _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default =
            __webpack_require__.n(
              _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__
            ),
          _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__('./node_modules/css-loader/dist/runtime/api.js'),
          ___CSS_LOADER_EXPORT___ = __webpack_require__.n(
            _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__
          )()(
            _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()
          );
        ___CSS_LOADER_EXPORT___.push([
          module.id,
          ".Text_text__I2GnQ {\n  line-height: var(--lineHeightBody);\n  color: var(--colorTextBody);\n}\n.Text_text__I2GnQ[data-size='s'] {\n    font-size: var(--fontSizeBodyS);\n  }\n.Text_text__I2GnQ[data-size='m'] {\n    font-size: var(--fontSizeBodyM);\n  }\n.Text_text__I2GnQ[data-size='l'] {\n    font-size: var(--fontSizeBodyL);\n  }\n.Text_text__I2GnQ[data-size='xl'] {\n    font-size: var(--fontSizeBodyXL);\n  }\n.Text_text__I2GnQ[data-align='auto'] {\n    text-align: inherit;\n  }\n.Text_text__I2GnQ[data-align='start'] {\n    text-align: start;\n  }\n.Text_text__I2GnQ[data-align='center'] {\n    text-align: center;\n  }\n.Text_text__I2GnQ[data-weight='auto'] {\n    font-weight: inherit;\n  }\n.Text_text__I2GnQ[data-weight='regular'] {\n    font-weight: var(--fontWeightRegular);\n  }\n.Text_text__I2GnQ[data-weight='medium'] {\n    font-weight: var(--fontWeightMedium);\n  }\n.Text_text__I2GnQ[data-weight='bold'] {\n    font-weight: var(--fontWeightBold);\n  }\n.Text_text__I2GnQ[data-secondary='true'] {\n    color: var(--colorTextLight);\n  }\n",
          '',
          {
            version: 3,
            sources: ['webpack://./src/components/Text/Text.module.css'],
            names: [],
            mappings:
              'AAAA;EACE,kCAAkC;EAClC,2BAA2B;AAiD7B;AA/CE;IACE,+BAA+B;EACjC;AAEA;IACE,+BAA+B;EACjC;AAEA;IACE,+BAA+B;EACjC;AAEA;IACE,gCAAgC;EAClC;AAEA;IACE,mBAAmB;EACrB;AAEA;IACE,iBAAiB;EACnB;AAEA;IACE,kBAAkB;EACpB;AAEA;IACE,oBAAoB;EACtB;AAEA;IACE,qCAAqC;EACvC;AAEA;IACE,oCAAoC;EACtC;AAEA;IACE,kCAAkC;EACpC;AAEA;IACE,4BAA4B;EAC9B',
            sourcesContent: [
              ".text {\n  line-height: var(--lineHeightBody);\n  color: var(--colorTextBody);\n\n  &[data-size='s'] {\n    font-size: var(--fontSizeBodyS);\n  }\n\n  &[data-size='m'] {\n    font-size: var(--fontSizeBodyM);\n  }\n\n  &[data-size='l'] {\n    font-size: var(--fontSizeBodyL);\n  }\n\n  &[data-size='xl'] {\n    font-size: var(--fontSizeBodyXL);\n  }\n\n  &[data-align='auto'] {\n    text-align: inherit;\n  }\n\n  &[data-align='start'] {\n    text-align: start;\n  }\n\n  &[data-align='center'] {\n    text-align: center;\n  }\n\n  &[data-weight='auto'] {\n    font-weight: inherit;\n  }\n\n  &[data-weight='regular'] {\n    font-weight: var(--fontWeightRegular);\n  }\n\n  &[data-weight='medium'] {\n    font-weight: var(--fontWeightMedium);\n  }\n\n  &[data-weight='bold'] {\n    font-weight: var(--fontWeightBold);\n  }\n\n  &[data-secondary='true'] {\n    color: var(--colorTextLight);\n  }\n}\n",
            ],
            sourceRoot: '',
          },
        ]),
          (___CSS_LOADER_EXPORT___.locals = { text: 'Text_text__I2GnQ' });
        const __WEBPACK_DEFAULT_EXPORT__ = ___CSS_LOADER_EXPORT___;
      },
    './node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./node_modules/postcss-loader/dist/cjs.js!./src/components/VisuallyHidden/VisuallyHidden.module.css':
      (module, __webpack_exports__, __webpack_require__) => {
        'use strict';
        __webpack_require__.d(__webpack_exports__, {
          Z: () => __WEBPACK_DEFAULT_EXPORT__,
        });
        var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(
              './node_modules/css-loader/dist/runtime/cssWithMappingToString.js'
            ),
          _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default =
            __webpack_require__.n(
              _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__
            ),
          _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__('./node_modules/css-loader/dist/runtime/api.js'),
          ___CSS_LOADER_EXPORT___ = __webpack_require__.n(
            _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__
          )()(
            _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()
          );
        ___CSS_LOADER_EXPORT___.push([
          module.id,
          ".VisuallyHidden_hidden__D_ZwH {\n  position: absolute;\n}\n.VisuallyHidden_hidden__D_ZwH[data-hidden='true'],\n  .VisuallyHidden_hidden__D_ZwH[data-show-on-focus='true']:not(:focus) {\n    border: 0;\n    clip: rect(0 0 0 0);\n    height: 1px;\n    width: 1px;\n    margin: -1px;\n    padding: 0;\n    overflow: hidden;\n    position: absolute;\n    white-space: nowrap;\n    word-wrap: normal;\n  }\n",
          '',
          {
            version: 3,
            sources: [
              'webpack://./src/components/VisuallyHidden/VisuallyHidden.module.css',
            ],
            names: [],
            mappings:
              'AAAA;EACE,kBAAkB;AAepB;AAbE;;IAEE,SAAS;IACT,mBAAmB;IACnB,WAAW;IACX,UAAU;IACV,YAAY;IACZ,UAAU;IACV,gBAAgB;IAChB,kBAAkB;IAClB,mBAAmB;IACnB,iBAAiB;EACnB',
            sourcesContent: [
              ".hidden {\n  position: absolute;\n\n  &[data-hidden='true'],\n  &[data-show-on-focus='true']:not(:focus) {\n    border: 0;\n    clip: rect(0 0 0 0);\n    height: 1px;\n    width: 1px;\n    margin: -1px;\n    padding: 0;\n    overflow: hidden;\n    position: absolute;\n    white-space: nowrap;\n    word-wrap: normal;\n  }\n}\n",
            ],
            sourceRoot: '',
          },
        ]),
          (___CSS_LOADER_EXPORT___.locals = { hidden: 'VisuallyHidden_hidden__D_ZwH' });
        const __WEBPACK_DEFAULT_EXPORT__ = ___CSS_LOADER_EXPORT___;
      },
    './node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./node_modules/postcss-loader/dist/cjs.js!./src/layouts/App/App.module.css':
      (module, __webpack_exports__, __webpack_require__) => {
        'use strict';
        __webpack_require__.d(__webpack_exports__, {
          Z: () => __WEBPACK_DEFAULT_EXPORT__,
        });
        var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(
              './node_modules/css-loader/dist/runtime/cssWithMappingToString.js'
            ),
          _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default =
            __webpack_require__.n(
              _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__
            ),
          _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__('./node_modules/css-loader/dist/runtime/api.js'),
          ___CSS_LOADER_EXPORT___ = __webpack_require__.n(
            _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__
          )()(
            _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()
          );
        ___CSS_LOADER_EXPORT___.push([
          module.id,
          ".App_app__x2qc1 {\n  width: 100%;\n  position: relative;\n  display: grid;\n  grid-template: 100% / 100%;\n}\n\n.App_page__ZYUk8 {\n  grid-area: 1 / 1;\n  min-height: 100lvh;\n}\n\n.App_skip__Hmpeg {\n  isolation: isolate;\n  color: rgb(var(--rgbBackground));\n  z-index: var(--zIndex4);\n}\n\n.App_skip__Hmpeg:focus {\n    padding: var(--spaceS) var(--spaceM);\n    position: fixed;\n    top: var(--spaceM);\n    left: var(--spaceM);\n    text-decoration: none;\n    font-weight: var(--fontWeightMedium);\n    line-height: 1;\n    box-shadow: 0 0 0 4px rgb(var(--rgbBackground)), 0 0 0 8px rgb(var(--rgbText));\n  }\n\n.App_skip__Hmpeg::before {\n    content: '';\n    position: absolute;\n    inset: 0;\n    background-color: rgb(var(--rgbPrimary));\n    clip-path: polygon(0 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%);\n    z-index: -1;\n  }\n",
          '',
          {
            version: 3,
            sources: ['webpack://./src/layouts/App/App.module.css'],
            names: [],
            mappings:
              'AAAA;EACE,WAAW;EACX,kBAAkB;EAClB,aAAa;EACb,0BAA0B;AAC5B;;AAEA;EACE,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;EAClB,gCAAgC;EAChC,uBAAuB;AAqBzB;;AAnBE;IACE,oCAAoC;IACpC,eAAe;IACf,kBAAkB;IAClB,mBAAmB;IACnB,qBAAqB;IACrB,oCAAoC;IACpC,cAAc;IACd,8EAA8E;EAChF;;AAEA;IACE,WAAW;IACX,kBAAkB;IAClB,QAAQ;IACR,wCAAwC;IACxC,qFAAqF;IACrF,WAAW;EACb',
            sourcesContent: [
              ".app {\n  width: 100%;\n  position: relative;\n  display: grid;\n  grid-template: 100% / 100%;\n}\n\n.page {\n  grid-area: 1 / 1;\n  min-height: 100lvh;\n}\n\n.skip {\n  isolation: isolate;\n  color: rgb(var(--rgbBackground));\n  z-index: var(--zIndex4);\n\n  &:focus {\n    padding: var(--spaceS) var(--spaceM);\n    position: fixed;\n    top: var(--spaceM);\n    left: var(--spaceM);\n    text-decoration: none;\n    font-weight: var(--fontWeightMedium);\n    line-height: 1;\n    box-shadow: 0 0 0 4px rgb(var(--rgbBackground)), 0 0 0 8px rgb(var(--rgbText));\n  }\n\n  &::before {\n    content: '';\n    position: absolute;\n    inset: 0;\n    background-color: rgb(var(--rgbPrimary));\n    clip-path: polygon(0 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%);\n    z-index: -1;\n  }\n}\n",
            ],
            sourceRoot: '',
          },
        ]),
          (___CSS_LOADER_EXPORT___.locals = {
            app: 'App_app__x2qc1',
            page: 'App_page__ZYUk8',
            skip: 'App_skip__Hmpeg',
          });
        const __WEBPACK_DEFAULT_EXPORT__ = ___CSS_LOADER_EXPORT___;
      },
    './node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./node_modules/postcss-loader/dist/cjs.js!./src/layouts/App/global.css':
      (module, __webpack_exports__, __webpack_require__) => {
        'use strict';
        __webpack_require__.d(__webpack_exports__, {
          Z: () => __WEBPACK_DEFAULT_EXPORT__,
        });
        var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(
              './node_modules/css-loader/dist/runtime/cssWithMappingToString.js'
            ),
          _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default =
            __webpack_require__.n(
              _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__
            ),
          _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__('./node_modules/css-loader/dist/runtime/api.js'),
          ___CSS_LOADER_EXPORT___ = __webpack_require__.n(
            _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__
          )()(
            _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()
          );
        ___CSS_LOADER_EXPORT___.push([
          module.id,
          ':root {\n  --mobileNavOffset: calc(var(--spaceOuter) * 2 + var(--space2XL));\n}\n\nbody {\n  font-family: var(--fontStack);\n  font-weight: var(--fontWeightRegular);\n  background-color: rgb(var(--rgbBackground));\n  transition: background var(--durationM) ease;\n  color: var(--colorTextBody);\n  width: 100vw;\n  overflow-x: hidden;\n}\n\nbody:focus {\n    outline: none;\n  }\n\n:where(code, pre) {\n  font-family: var(--monoFontStack);\n}\n\n::selection {\n  background: rgb(var(--rgbAccent));\n  color: rgb(var(--rgbBlack));\n}\n\n:focus {\n  outline: 4px solid rgb(var(--rgbText));\n  outline-offset: 4px;\n}\n\n:focus:not(:focus-visible) {\n  outline: none;\n}\n\n@keyframes fadeIn {\n  0% {\n    opacity: 0;\n  }\n\n  100% {\n    opacity: 1;\n  }\n}\n\n@keyframes reveal {\n  0% {\n    transform: scale3d(0, 1, 1);\n    transform-origin: left;\n  }\n\n  50% {\n    transform: scale3d(1, 1, 1);\n    transform-origin: left;\n  }\n\n  51% {\n    transform: scale3d(1, 1, 1);\n    transform-origin: right;\n  }\n\n  100% {\n    transform: scale3d(0, 1, 1);\n    transform-origin: right;\n  }\n}\n',
          '',
          {
            version: 3,
            sources: ['webpack://./src/layouts/App/global.css'],
            names: [],
            mappings:
              'AAWA;EACE,gEAAgE;AAClE;;AAEA;EACE,6BAA6B;EAC7B,qCAAqC;EACrC,2CAA2C;EAC3C,4CAA4C;EAC5C,2BAA2B;EAC3B,YAAY;EACZ,kBAAkB;AAKpB;;AAHE;IACE,aAAa;EACf;;AAGF;EACE,iCAAiC;AACnC;;AAEA;EACE,iCAAiC;EACjC,2BAA2B;AAC7B;;AAEA;EACE,sCAAsC;EACtC,mBAAmB;AACrB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE;IACE,UAAU;EACZ;;EAEA;IACE,UAAU;EACZ;AACF;;AAEA;EACE;IACE,2BAA2B;IAC3B,sBAAsB;EACxB;;EAEA;IACE,2BAA2B;IAC3B,sBAAsB;EACxB;;EAEA;IACE,2BAA2B;IAC3B,uBAAuB;EACzB;;EAEA;IACE,2BAA2B;IAC3B,uBAAuB;EACzB;AACF',
            sourcesContent: [
              '@custom-media --mediaDesktop (max-width: 2080px);\n@custom-media --mediaLaptop (max-width: 1680px);\n@custom-media --mediaTablet (max-width: 1040px);\n@custom-media --mediaMobile (max-width: 696px);\n@custom-media --mediaMobileLS (max-height: 696px);\n@custom-media --mediaMobileS (max-width: 400px);\n@custom-media --mediaUseMotion (prefers-reduced-motion: no-preference);\n@custom-media --mediaReduceMotion (prefers-reduced-motion: reduce);\n@custom-media --mediaTouch (pointer: coarse);\n@custom-media --mediaNoTouch (pointer: fine);\n\n:root {\n  --mobileNavOffset: calc(var(--spaceOuter) * 2 + var(--space2XL));\n}\n\nbody {\n  font-family: var(--fontStack);\n  font-weight: var(--fontWeightRegular);\n  background-color: rgb(var(--rgbBackground));\n  transition: background var(--durationM) ease;\n  color: var(--colorTextBody);\n  width: 100vw;\n  overflow-x: hidden;\n\n  &:focus {\n    outline: none;\n  }\n}\n\n:where(code, pre) {\n  font-family: var(--monoFontStack);\n}\n\n::selection {\n  background: rgb(var(--rgbAccent));\n  color: rgb(var(--rgbBlack));\n}\n\n:focus {\n  outline: 4px solid rgb(var(--rgbText));\n  outline-offset: 4px;\n}\n\n:focus:not(:focus-visible) {\n  outline: none;\n}\n\n@keyframes fadeIn {\n  0% {\n    opacity: 0;\n  }\n\n  100% {\n    opacity: 1;\n  }\n}\n\n@keyframes reveal {\n  0% {\n    transform: scale3d(0, 1, 1);\n    transform-origin: left;\n  }\n\n  50% {\n    transform: scale3d(1, 1, 1);\n    transform-origin: left;\n  }\n\n  51% {\n    transform: scale3d(1, 1, 1);\n    transform-origin: right;\n  }\n\n  100% {\n    transform: scale3d(0, 1, 1);\n    transform-origin: right;\n  }\n}\n',
            ],
            sourceRoot: '',
          },
        ]);
        const __WEBPACK_DEFAULT_EXPORT__ = ___CSS_LOADER_EXPORT___;
      },
    './node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./node_modules/postcss-loader/dist/cjs.js!./src/layouts/App/reset.css':
      (module, __webpack_exports__, __webpack_require__) => {
        'use strict';
        __webpack_require__.d(__webpack_exports__, {
          Z: () => __WEBPACK_DEFAULT_EXPORT__,
        });
        var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(
              './node_modules/css-loader/dist/runtime/cssWithMappingToString.js'
            ),
          _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default =
            __webpack_require__.n(
              _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__
            ),
          _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__('./node_modules/css-loader/dist/runtime/api.js'),
          ___CSS_LOADER_EXPORT___ = __webpack_require__.n(
            _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__
          )()(
            _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()
          );
        ___CSS_LOADER_EXPORT___.push([
          module.id,
          ':root {\n  color-scheme: dark light;\n  font-synthesis: none;\n  text-rendering: optimizeLegibility;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n}\n\n:where(html, body, #__next) {\n  min-height: 100%;\n  width: 100%;\n}\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\n* {\n  margin: 0;\n}\n\n:where(input, textarea, select, button) {\n  font: inherit;\n  color: inherit;\n  border: 0;\n  padding: 0;\n  background-color: transparent;\n  border-radius: 0;\n  appearance: none;\n}\n\n:where(svg, img, picture, video, iframe, canvas) {\n  display: block;\n}\n\n:any-link {\n  text-decoration: none;\n}\n\nul {\n  padding: 0;\n}\n',
          '',
          {
            version: 3,
            sources: ['webpack://./src/layouts/App/reset.css'],
            names: [],
            mappings:
              'AAAA;EACE,wBAAwB;EACxB,oBAAoB;EACpB,kCAAkC;EAClC,kCAAkC;EAClC,mCAAmC;AACrC;;AAEA;EACE,gBAAgB;EAChB,WAAW;AACb;;AAEA;;;EAGE,sBAAsB;AACxB;;AAEA;EACE,SAAS;AACX;;AAEA;EACE,aAAa;EACb,cAAc;EACd,SAAS;EACT,UAAU;EACV,6BAA6B;EAC7B,gBAAgB;EAChB,gBAAgB;AAClB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,UAAU;AACZ',
            sourcesContent: [
              ':root {\n  color-scheme: dark light;\n  font-synthesis: none;\n  text-rendering: optimizeLegibility;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n}\n\n:where(html, body, #__next) {\n  min-height: 100%;\n  width: 100%;\n}\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\n* {\n  margin: 0;\n}\n\n:where(input, textarea, select, button) {\n  font: inherit;\n  color: inherit;\n  border: 0;\n  padding: 0;\n  background-color: transparent;\n  border-radius: 0;\n  appearance: none;\n}\n\n:where(svg, img, picture, video, iframe, canvas) {\n  display: block;\n}\n\n:any-link {\n  text-decoration: none;\n}\n\nul {\n  padding: 0;\n}\n',
            ],
            sourceRoot: '',
          },
        ]);
        const __WEBPACK_DEFAULT_EXPORT__ = ___CSS_LOADER_EXPORT___;
      },
    './src/layouts/App/global.css': (
      __unused_webpack_module,
      __unused_webpack___webpack_exports__,
      __webpack_require__
    ) => {
      'use strict';
      var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            './node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js'
          ),
        _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default =
          __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__
          ),
        _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_postcss_loader_dist_cjs_js_global_css__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            './node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./node_modules/postcss-loader/dist/cjs.js!./src/layouts/App/global.css'
          ),
        options = { insert: 'head', singleton: !1 };
      _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(
        _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_postcss_loader_dist_cjs_js_global_css__WEBPACK_IMPORTED_MODULE_1__.Z,
        options
      ),
        _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_postcss_loader_dist_cjs_js_global_css__WEBPACK_IMPORTED_MODULE_1__
          .Z.locals;
    },
    './src/layouts/App/reset.css': (
      __unused_webpack_module,
      __unused_webpack___webpack_exports__,
      __webpack_require__
    ) => {
      'use strict';
      var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            './node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js'
          ),
        _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default =
          __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__
          ),
        _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_postcss_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            './node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./node_modules/postcss-loader/dist/cjs.js!./src/layouts/App/reset.css'
          ),
        options = { insert: 'head', singleton: !1 };
      _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(
        _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_postcss_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_1__.Z,
        options
      ),
        _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_postcss_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_1__
          .Z.locals;
    },
    './src sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$':
      (module, __unused_webpack_exports, __webpack_require__) => {
        var map = {
          './components/Button/Button.stories.js':
            './src/components/Button/Button.stories.js',
          './components/Carousel/Carousel.stories.js':
            './src/components/Carousel/Carousel.stories.js',
          './components/DecoderText/DecoderText.stories.js':
            './src/components/DecoderText/DecoderText.stories.js',
          './components/Heading/Heading.stories.js':
            './src/components/Heading/Heading.stories.js',
          './components/Icon/Icon.stories.js': './src/components/Icon/Icon.stories.js',
          './components/Image/Image.stories.js':
            './src/components/Image/Image.stories.js',
          './components/Input/Input.stories.js':
            './src/components/Input/Input.stories.js',
          './components/Link/Link.stories.js': './src/components/Link/Link.stories.js',
          './components/List/List.stories.js': './src/components/List/List.stories.js',
          './components/Loader/Loader.stories.js':
            './src/components/Loader/Loader.stories.js',
          './components/Model/Model.stories.js':
            './src/components/Model/Model.stories.js',
          './components/Monogram/Monogram.stories.js':
            './src/components/Monogram/Monogram.stories.js',
          './components/SegmentedControl/SegmentedControl.stories.js':
            './src/components/SegmentedControl/SegmentedControl.stories.js',
          './components/Table/Table.stories.js':
            './src/components/Table/Table.stories.js',
          './components/Text/Text.stories.js': './src/components/Text/Text.stories.js',
        };
        function webpackContext(req) {
          var id = webpackContextResolve(req);
          return __webpack_require__(id);
        }
        function webpackContextResolve(req) {
          if (!__webpack_require__.o(map, req)) {
            var e = new Error("Cannot find module '" + req + "'");
            throw ((e.code = 'MODULE_NOT_FOUND'), e);
          }
          return map[req];
        }
        (webpackContext.keys = function webpackContextKeys() {
          return Object.keys(map);
        }),
          (webpackContext.resolve = webpackContextResolve),
          (module.exports = webpackContext),
          (webpackContext.id =
            './src sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$');
      },
    './src sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.mdx)$':
      module => {
        function webpackEmptyContext(req) {
          var e = new Error("Cannot find module '" + req + "'");
          throw ((e.code = 'MODULE_NOT_FOUND'), e);
        }
        (webpackEmptyContext.keys = () => []),
          (webpackEmptyContext.resolve = webpackEmptyContext),
          (webpackEmptyContext.id =
            './src sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.mdx)$'),
          (module.exports = webpackEmptyContext);
      },
    '?4f7e': () => {},
    './generated-stories-entry.cjs': (
      module,
      __unused_webpack_exports,
      __webpack_require__
    ) => {
      'use strict';
      (module = __webpack_require__.nmd(module)),
        (0,
        __webpack_require__('./node_modules/@storybook/react/dist/esm/client/index.js')
          .configure)(
          [
            __webpack_require__(
              './src sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.mdx)$'
            ),
            __webpack_require__(
              './src sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$'
            ),
          ],
          module,
          !1
        );
    },
  },
  __webpack_require__ => {
    var __webpack_exec__ = moduleId =>
      __webpack_require__((__webpack_require__.s = moduleId));
    __webpack_require__.O(
      0,
      [747],
      () => (
        __webpack_exec__(
          './node_modules/@storybook/core-client/dist/esm/globals/polyfills.js'
        ),
        __webpack_exec__(
          './node_modules/@storybook/core-client/dist/esm/globals/globals.js'
        ),
        __webpack_exec__('./storybook-init-framework-entry.js'),
        __webpack_exec__(
          './node_modules/@storybook/react/dist/esm/client/docs/config-generated-config-entry.js'
        ),
        __webpack_exec__(
          './node_modules/@storybook/react/dist/esm/client/preview/config-generated-config-entry.js'
        ),
        __webpack_exec__(
          './node_modules/@storybook/addon-actions/preview.js-generated-config-entry.js'
        ),
        __webpack_exec__(
          './node_modules/@storybook/addon-a11y/preview.js-generated-config-entry.js'
        ),
        __webpack_exec__(
          './node_modules/storybook-addon-next/dist/preview.js-generated-config-entry.js'
        ),
        __webpack_exec__('./.storybook/preview.js-generated-config-entry.js'),
        __webpack_exec__('./generated-stories-entry.cjs')
      )
    );
    __webpack_require__.O();
  },
]);
