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
								})
									.then(function(response) {
										console.log('response', response);
										return response.json();
									})
									.then(function(json) {
										console.log('json', json);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L21vZHVsZXMvYXBwL2FwcC5qcyJdLCJuYW1lcyI6WyJBcHAiLCJwcm9wcyIsInN0YXJ0dXBJbml0IiwiZmV0Y2giLCJtZXRob2QiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInBsYXkiLCJ0aGVuIiwicmVzcG9uc2UiLCJjb25zb2xlIiwibG9nIiwianNvbiIsIlJlYWN0IiwiQ29tcG9uZW50IiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJjb25uZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFNQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOzs7QUFHQSxJQUFhQSxHQUFiO0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQSxzQ0FDcUI7QUFDbkIsUUFBS0MsS0FBTCxDQUFXQyxXQUFYO0FBQ0FDLFNBQU0sWUFBTixFQUFvQjtBQUNuQkMsWUFBUSxNQURXO0FBRW5CQyxVQUFNQyxLQUFLQyxTQUFMLENBQWUsRUFBQ0MsTUFBTSxLQUFQLEVBQWY7QUFGYSxJQUFwQixFQUdHQyxJQUhILENBR1EsVUFBQ0MsUUFBRCxFQUFjO0FBQ3JCQyxZQUFRQyxHQUFSLENBQVksVUFBWixFQUF3QkYsUUFBeEI7QUFDQSxXQUFPQSxTQUFTRyxJQUFULEVBQVA7QUFDQSxJQU5ELEVBTUdKLElBTkgsQ0FNUSxVQUFDSSxJQUFELEVBQVU7QUFDakJGLFlBQVFDLEdBQVIsQ0FBWSxNQUFaLEVBQW9CQyxJQUFwQjtBQUNBLElBUkQ7QUFTQTtBQVpGO0FBQUE7QUFBQSwyQkFjVTtBQUNSLFVBQ0M7QUFBQywyRUFBRDtBQUFBO0FBQ0M7QUFBQyxvREFBRDtBQUFBO0FBQ0M7QUFBQyxzRUFBRDtBQUFBO0FBQ0Msa0VBQUMsK0RBQUQsSUFBTyxXQUFQLEVBQWEsTUFBSyxPQUFsQixFQUEwQixXQUFXLG1FQUFyQyxHQUREO0FBRUMsa0VBQUMsa0VBQUQsSUFBVSxJQUFHLE9BQWI7QUFGRDtBQUREO0FBREQsSUFERDtBQVVBO0FBekJGOztBQUFBO0FBQUEsRUFBeUIsNkNBQUFDLENBQU1DLFNBQS9COztBQTRCQSxJQUFNQyxrQkFBa0IsU0FBbEJBLGVBQWtCLENBQUNDLEtBQUQsRUFBUWhCLEtBQVI7QUFBQSxRQUFtQixFQUFuQjtBQUFBLENBQXhCOztBQUVBLHlEQUFlLG9FQUFBaUIsQ0FDZEYsZUFEYyxFQUVkO0FBQ0NkLGNBQUEscUVBQUFBO0FBREQsQ0FGYyxFQUtiRixHQUxhLENBQWYsRSIsImZpbGUiOiIwLjkxYjZlOTBiMDY5ZWY3Zjk1NTU1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtGcmFnbWVudH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtcblx0QnJvd3NlclJvdXRlciBhcyBSb3V0ZXIsXG5cdFJvdXRlLFxuXHRTd2l0Y2gsXG5cdFJlZGlyZWN0XG59IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCc7XG5cbmltcG9ydCBNYWluIGZyb20gJ21vZHVsZXMvbWFpbi9pbmRleCc7XG5pbXBvcnQge3N0YXJ0dXBJbml0fSBmcm9tICcuLi9zdGFydHVwL2FjdGlvbnMnO1xuXG5pbXBvcnQgJy4uLy4uL2luZGV4LnNjc3MnO1xuXG4vKipcbiAqIEFwcGxpY2F0aW9uIGxhbmRpbmcgc3BhY2VcbiAqL1xuZXhwb3J0IGNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdGNvbXBvbmVudERpZE1vdW50KCkge1xuXHRcdHRoaXMucHJvcHMuc3RhcnR1cEluaXQoKTtcblx0XHRmZXRjaCgnL2FwaS9wbGF5cycsIHtcblx0XHRcdG1ldGhvZDogJ3Bvc3QnLFxuXHRcdFx0Ym9keTogSlNPTi5zdHJpbmdpZnkoe3BsYXk6IFwiZm9vXCJ9KVxuXHRcdH0pLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG5cdFx0XHRjb25zb2xlLmxvZyhcInJlc3BvbnNlXCIsIHJlc3BvbnNlKTtcblx0XHRcdHJldHVybiByZXNwb25zZS5qc29uKCk7XG5cdFx0fSkudGhlbigoanNvbikgPT4ge1xuXHRcdFx0Y29uc29sZS5sb2coXCJqc29uXCIsIGpzb24pO1xuXHRcdH0pO1xuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8Um91dGVyPlxuXHRcdFx0XHQ8RnJhZ21lbnQ+XG5cdFx0XHRcdFx0PFN3aXRjaD5cblx0XHRcdFx0XHRcdDxSb3V0ZSBleGFjdCBwYXRoPVwiL21haW5cIiBjb21wb25lbnQ9e01haW59Lz5cblx0XHRcdFx0XHRcdDxSZWRpcmVjdCB0bz1cIi9tYWluXCIvPlxuXHRcdFx0XHRcdDwvU3dpdGNoPlxuXHRcdFx0XHQ8L0ZyYWdtZW50PlxuXHRcdFx0PC9Sb3V0ZXI+XG5cdFx0KTtcblx0fVxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUsIHByb3BzKSA9PiAoe30pO1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxuXHRtYXBTdGF0ZVRvUHJvcHMsXG5cdHtcblx0XHRzdGFydHVwSW5pdFxuXHR9XG4pKEFwcCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY2xpZW50L21vZHVsZXMvYXBwL2FwcC5qcyJdLCJzb3VyY2VSb290IjoiIn0=
