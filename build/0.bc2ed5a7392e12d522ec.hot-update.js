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
								fetch('/api/plays', {
									method: 'post',
									body: JSON.stringify({ play: 'foo' })
								}).then(function(response) {
									return response.body();
								});
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L21vZHVsZXMvYXBwL2FwcC5qcyJdLCJuYW1lcyI6WyJBcHAiLCJwcm9wcyIsInN0YXJ0dXBJbml0IiwiZmV0Y2giLCJtZXRob2QiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInBsYXkiLCJ0aGVuIiwicmVzcG9uc2UiLCJSZWFjdCIsIkNvbXBvbmVudCIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIiwiY29ubmVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBTUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7O0FBR0EsSUFBYUEsR0FBYjtBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUEsc0NBQ3FCO0FBQ25CLFFBQUtDLEtBQUwsQ0FBV0MsV0FBWDtBQUNBQyxTQUFNLFlBQU4sRUFBb0I7QUFDbkJDLFlBQVEsTUFEVztBQUVuQkMsVUFBTUMsS0FBS0MsU0FBTCxDQUFlLEVBQUNDLE1BQU0sS0FBUCxFQUFmO0FBRmEsSUFBcEIsRUFHR0MsSUFISCxDQUdRLFVBQUNDLFFBQUQsRUFBYztBQUNyQixXQUFPQSxTQUFTTCxJQUFULEVBQVA7QUFDQSxJQUxEO0FBTUE7QUFURjtBQUFBO0FBQUEsMkJBV1U7QUFDUixVQUNDO0FBQUMsMkVBQUQ7QUFBQTtBQUNDO0FBQUMsb0RBQUQ7QUFBQTtBQUNDO0FBQUMsc0VBQUQ7QUFBQTtBQUNDLGtFQUFDLCtEQUFELElBQU8sV0FBUCxFQUFhLE1BQUssT0FBbEIsRUFBMEIsV0FBVyxtRUFBckMsR0FERDtBQUVDLGtFQUFDLGtFQUFELElBQVUsSUFBRyxPQUFiO0FBRkQ7QUFERDtBQURELElBREQ7QUFVQTtBQXRCRjs7QUFBQTtBQUFBLEVBQXlCLDZDQUFBTSxDQUFNQyxTQUEvQjs7QUF5QkEsSUFBTUMsa0JBQWtCLFNBQWxCQSxlQUFrQixDQUFDQyxLQUFELEVBQVFiLEtBQVI7QUFBQSxRQUFtQixFQUFuQjtBQUFBLENBQXhCOztBQUVBLHlEQUFlLG9FQUFBYyxDQUNkRixlQURjLEVBRWQ7QUFDQ1gsY0FBQSxxRUFBQUE7QUFERCxDQUZjLEVBS2JGLEdBTGEsQ0FBZixFIiwiZmlsZSI6IjAuYmMyZWQ1YTczOTJlMTJkNTIyZWMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge0ZyYWdtZW50fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge1xuXHRCcm93c2VyUm91dGVyIGFzIFJvdXRlcixcblx0Um91dGUsXG5cdFN3aXRjaCxcblx0UmVkaXJlY3Rcbn0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4JztcblxuaW1wb3J0IE1haW4gZnJvbSAnbW9kdWxlcy9tYWluL2luZGV4JztcbmltcG9ydCB7c3RhcnR1cEluaXR9IGZyb20gJy4uL3N0YXJ0dXAvYWN0aW9ucyc7XG5cbmltcG9ydCAnLi4vLi4vaW5kZXguc2Nzcyc7XG5cbi8qKlxuICogQXBwbGljYXRpb24gbGFuZGluZyBzcGFjZVxuICovXG5leHBvcnQgY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0Y29tcG9uZW50RGlkTW91bnQoKSB7XG5cdFx0dGhpcy5wcm9wcy5zdGFydHVwSW5pdCgpO1xuXHRcdGZldGNoKCcvYXBpL3BsYXlzJywge1xuXHRcdFx0bWV0aG9kOiAncG9zdCcsXG5cdFx0XHRib2R5OiBKU09OLnN0cmluZ2lmeSh7cGxheTogXCJmb29cIn0pXG5cdFx0fSkudGhlbigocmVzcG9uc2UpID0+IHtcblx0XHRcdHJldHVybiByZXNwb25zZS5ib2R5KCk7XG5cdFx0fSk7XG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxSb3V0ZXI+XG5cdFx0XHRcdDxGcmFnbWVudD5cblx0XHRcdFx0XHQ8U3dpdGNoPlxuXHRcdFx0XHRcdFx0PFJvdXRlIGV4YWN0IHBhdGg9XCIvbWFpblwiIGNvbXBvbmVudD17TWFpbn0vPlxuXHRcdFx0XHRcdFx0PFJlZGlyZWN0IHRvPVwiL21haW5cIi8+XG5cdFx0XHRcdFx0PC9Td2l0Y2g+XG5cdFx0XHRcdDwvRnJhZ21lbnQ+XG5cdFx0XHQ8L1JvdXRlcj5cblx0XHQpO1xuXHR9XG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSwgcHJvcHMpID0+ICh7fSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXG5cdG1hcFN0YXRlVG9Qcm9wcyxcblx0e1xuXHRcdHN0YXJ0dXBJbml0XG5cdH1cbikoQXBwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jbGllbnQvbW9kdWxlcy9hcHAvYXBwLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==
