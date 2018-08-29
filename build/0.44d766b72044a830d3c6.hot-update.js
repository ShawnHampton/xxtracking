webpackHotUpdate(0, {
	/***/ './src/client/modules/app/app.js':
		/*!***************************************!*\
  !*** ./src/client/modules/app/app.js ***!
  \***************************************/
		/*! exports provided: App, default */
		/*! exports used: default */
		/***/ function(module, __webpack_exports__, __webpack_require__) {
			'use strict';
			/* unused harmony export App */
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__(
				/*! babel-runtime/helpers/classCallCheck */ './node_modules/babel-runtime/helpers/classCallCheck.js'
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(
				__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__ = __webpack_require__(
				/*! babel-runtime/helpers/createClass */ './node_modules/babel-runtime/helpers/createClass.js'
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default = __webpack_require__.n(
				__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(
				/*! babel-runtime/helpers/possibleConstructorReturn */ './node_modules/babel-runtime/helpers/possibleConstructorReturn.js'
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(
				__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn__
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits__ = __webpack_require__(
				/*! babel-runtime/helpers/inherits */ './node_modules/babel-runtime/helpers/inherits.js'
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits___default = __webpack_require__.n(
				__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits__
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react__ = __webpack_require__(
				/*! react */ './node_modules/react/index.js'
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react___default = __webpack_require__.n(
				__WEBPACK_IMPORTED_MODULE_4_react__
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_router_dom__ = __webpack_require__(
				/*! react-router-dom */ './node_modules/react-router-dom/es/index.js'
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_redux__ = __webpack_require__(
				/*! react-redux */ './node_modules/react-redux/es/index.js'
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_modules_main_index__ = __webpack_require__(
				/*! modules/main/index */ './src/client/modules/main/index.js'
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__startup_actions__ = __webpack_require__(
				/*! ../startup/actions */ './src/client/modules/startup/actions.js'
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__index_scss__ = __webpack_require__(
				/*! ../../index.scss */ './src/client/index.scss'
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__index_scss___default = __webpack_require__.n(
				__WEBPACK_IMPORTED_MODULE_9__index_scss__
			);

			/**
			 * Application landing space
			 */
			var App = (function(_React$Component) {
				__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits___default()(
					App,
					_React$Component
				);

				function App() {
					__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(
						this,
						App
					);

					return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn___default()(
						this,
						(App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments)
					);
				}

				__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default()(
					App,
					[
						{
							key: 'componentDidMount',
							value: function componentDidMount() {
								this.props.startupInit();
							}
						},
						{
							key: 'render',
							value: function render() {
								return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
									__WEBPACK_IMPORTED_MODULE_5_react_router_dom__[
										'a' /* BrowserRouter */
									],
									null,
									__WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
										__WEBPACK_IMPORTED_MODULE_4_react__['Fragment'],
										null,
										__WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
											__WEBPACK_IMPORTED_MODULE_5_react_router_dom__[
												'd' /* Switch */
											],
											null,
											__WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
												__WEBPACK_IMPORTED_MODULE_5_react_router_dom__[
													'c' /* Route */
												],
												{
													exact: true,
													path: '/main',
													component:
														__WEBPACK_IMPORTED_MODULE_7_modules_main_index__[
															'a' /* default */
														]
												}
											),
											__WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
												__WEBPACK_IMPORTED_MODULE_5_react_router_dom__[
													'b' /* Redirect */
												],
												{ to: '/main' }
											)
										)
									)
								);
							}
						}
					]
				);

				return App;
			})(__WEBPACK_IMPORTED_MODULE_4_react___default.a.Component);

			var mapStateToProps = function mapStateToProps(state, props) {
				return {};
			};

			/* harmony default export */ __webpack_exports__['a'] = Object(
				__WEBPACK_IMPORTED_MODULE_6_react_redux__['b' /* connect */]
			)(mapStateToProps, {
				startupInit:
					__WEBPACK_IMPORTED_MODULE_8__startup_actions__['b' /* startupInit */]
			})(App);

			/***/
		}
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L21vZHVsZXMvYXBwL2FwcC5qcyJdLCJuYW1lcyI6WyJBcHAiLCJwcm9wcyIsInN0YXJ0dXBJbml0IiwiUmVhY3QiLCJDb21wb25lbnQiLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsImNvbm5lY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQU1BOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7OztBQUdBLElBQWFBLEdBQWI7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBLHNDQUNxQjtBQUNuQixRQUFLQyxLQUFMLENBQVdDLFdBQVg7QUFDQTtBQUhGO0FBQUE7QUFBQSwyQkFLVTtBQUNSLFVBQ0M7QUFBQywyRUFBRDtBQUFBO0FBQ0M7QUFBQyxvREFBRDtBQUFBO0FBQ0M7QUFBQyxzRUFBRDtBQUFBO0FBQ0Msa0VBQUMsK0RBQUQsSUFBTyxXQUFQLEVBQWEsTUFBSyxPQUFsQixFQUEwQixXQUFXLG1FQUFyQyxHQUREO0FBRUMsa0VBQUMsa0VBQUQsSUFBVSxJQUFHLE9BQWI7QUFGRDtBQUREO0FBREQsSUFERDtBQVVBO0FBaEJGOztBQUFBO0FBQUEsRUFBeUIsNkNBQUFDLENBQU1DLFNBQS9COztBQW1CQSxJQUFNQyxrQkFBa0IsU0FBbEJBLGVBQWtCLENBQUNDLEtBQUQsRUFBUUwsS0FBUjtBQUFBLFFBQW1CLEVBQW5CO0FBQUEsQ0FBeEI7O0FBRUEseURBQWUsb0VBQUFNLENBQ2RGLGVBRGMsRUFFZDtBQUNDSCxjQUFBLHFFQUFBQTtBQURELENBRmMsRUFLYkYsR0FMYSxDQUFmLEUiLCJmaWxlIjoiMC40NGQ3NjZiNzIwNDRhODMwZDNjNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7RnJhZ21lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7XG5cdEJyb3dzZXJSb3V0ZXIgYXMgUm91dGVyLFxuXHRSb3V0ZSxcblx0U3dpdGNoLFxuXHRSZWRpcmVjdFxufSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuXG5pbXBvcnQgTWFpbiBmcm9tICdtb2R1bGVzL21haW4vaW5kZXgnO1xuaW1wb3J0IHtzdGFydHVwSW5pdH0gZnJvbSAnLi4vc3RhcnR1cC9hY3Rpb25zJztcblxuaW1wb3J0ICcuLi8uLi9pbmRleC5zY3NzJztcblxuLyoqXG4gKiBBcHBsaWNhdGlvbiBsYW5kaW5nIHNwYWNlXG4gKi9cbmV4cG9ydCBjbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRjb21wb25lbnREaWRNb3VudCgpIHtcblx0XHR0aGlzLnByb3BzLnN0YXJ0dXBJbml0KCk7XG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxSb3V0ZXI+XG5cdFx0XHRcdDxGcmFnbWVudD5cblx0XHRcdFx0XHQ8U3dpdGNoPlxuXHRcdFx0XHRcdFx0PFJvdXRlIGV4YWN0IHBhdGg9XCIvbWFpblwiIGNvbXBvbmVudD17TWFpbn0vPlxuXHRcdFx0XHRcdFx0PFJlZGlyZWN0IHRvPVwiL21haW5cIi8+XG5cdFx0XHRcdFx0PC9Td2l0Y2g+XG5cdFx0XHRcdDwvRnJhZ21lbnQ+XG5cdFx0XHQ8L1JvdXRlcj5cblx0XHQpO1xuXHR9XG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSwgcHJvcHMpID0+ICh7fSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXG5cdG1hcFN0YXRlVG9Qcm9wcyxcblx0e1xuXHRcdHN0YXJ0dXBJbml0XG5cdH1cbikoQXBwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jbGllbnQvbW9kdWxlcy9hcHAvYXBwLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==
