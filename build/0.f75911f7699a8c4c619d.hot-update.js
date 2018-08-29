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
								fetch('/api/plays');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L21vZHVsZXMvYXBwL2FwcC5qcyJdLCJuYW1lcyI6WyJBcHAiLCJwcm9wcyIsInN0YXJ0dXBJbml0IiwiZmV0Y2giLCJSZWFjdCIsIkNvbXBvbmVudCIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIiwiY29ubmVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBTUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7O0FBR0EsSUFBYUEsR0FBYjtBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUEsc0NBQ3FCO0FBQ25CLFFBQUtDLEtBQUwsQ0FBV0MsV0FBWDtBQUNBQyxTQUFNLFlBQU47QUFDQTtBQUpGO0FBQUE7QUFBQSwyQkFNVTtBQUNSLFVBQ0M7QUFBQywyRUFBRDtBQUFBO0FBQ0M7QUFBQyxvREFBRDtBQUFBO0FBQ0M7QUFBQyxzRUFBRDtBQUFBO0FBQ0Msa0VBQUMsK0RBQUQsSUFBTyxXQUFQLEVBQWEsTUFBSyxPQUFsQixFQUEwQixXQUFXLG1FQUFyQyxHQUREO0FBRUMsa0VBQUMsa0VBQUQsSUFBVSxJQUFHLE9BQWI7QUFGRDtBQUREO0FBREQsSUFERDtBQVVBO0FBakJGOztBQUFBO0FBQUEsRUFBeUIsNkNBQUFDLENBQU1DLFNBQS9COztBQW9CQSxJQUFNQyxrQkFBa0IsU0FBbEJBLGVBQWtCLENBQUNDLEtBQUQsRUFBUU4sS0FBUjtBQUFBLFFBQW1CLEVBQW5CO0FBQUEsQ0FBeEI7O0FBRUEseURBQWUsb0VBQUFPLENBQ2RGLGVBRGMsRUFFZDtBQUNDSixjQUFBLHFFQUFBQTtBQURELENBRmMsRUFLYkYsR0FMYSxDQUFmLEUiLCJmaWxlIjoiMC5mNzU5MTFmNzY5OWE4YzRjNjE5ZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IEZyYWdtZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtcblx0QnJvd3NlclJvdXRlciBhcyBSb3V0ZXIsXG5cdFJvdXRlLFxuXHRTd2l0Y2gsXG5cdFJlZGlyZWN0XG59IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcblxuaW1wb3J0IE1haW4gZnJvbSAnbW9kdWxlcy9tYWluL2luZGV4JztcbmltcG9ydCB7IHN0YXJ0dXBJbml0IH0gZnJvbSAnLi4vc3RhcnR1cC9hY3Rpb25zJztcblxuaW1wb3J0ICcuLi8uLi9pbmRleC5zY3NzJztcblxuLyoqXG4gKiBBcHBsaWNhdGlvbiBsYW5kaW5nIHNwYWNlXG4gKi9cbmV4cG9ydCBjbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRjb21wb25lbnREaWRNb3VudCgpIHtcblx0XHR0aGlzLnByb3BzLnN0YXJ0dXBJbml0KCk7XG5cdFx0ZmV0Y2goXCIvYXBpL3BsYXlzXCIpXG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxSb3V0ZXI+XG5cdFx0XHRcdDxGcmFnbWVudD5cblx0XHRcdFx0XHQ8U3dpdGNoPlxuXHRcdFx0XHRcdFx0PFJvdXRlIGV4YWN0IHBhdGg9XCIvbWFpblwiIGNvbXBvbmVudD17TWFpbn0gLz5cblx0XHRcdFx0XHRcdDxSZWRpcmVjdCB0bz1cIi9tYWluXCIgLz5cblx0XHRcdFx0XHQ8L1N3aXRjaD5cblx0XHRcdFx0PC9GcmFnbWVudD5cblx0XHRcdDwvUm91dGVyPlxuXHRcdCk7XG5cdH1cbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlLCBwcm9wcykgPT4gKHt9KTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcblx0bWFwU3RhdGVUb1Byb3BzLFxuXHR7XG5cdFx0c3RhcnR1cEluaXRcblx0fVxuKShBcHApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NsaWVudC9tb2R1bGVzL2FwcC9hcHAuanMiXSwic291cmNlUm9vdCI6IiJ9
