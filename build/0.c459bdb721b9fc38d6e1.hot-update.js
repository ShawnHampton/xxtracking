webpackHotUpdate(0, {
	/***/ './src/client/modules/main/gameChooser.js':
		/*!************************************************!*\
  !*** ./src/client/modules/main/gameChooser.js ***!
  \************************************************/
		/*! exports provided: GameChooser, default */
		/*! exports used: default */
		/***/ function(module, __webpack_exports__, __webpack_require__) {
			'use strict';
			/* unused harmony export GameChooser */
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
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_redux__ = __webpack_require__(
				/*! react-redux */ './node_modules/react-redux/es/index.js'
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__material_ui_core_Button__ = __webpack_require__(
				/*! @material-ui/core/Button */ './node_modules/@material-ui/core/Button/index.js'
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__material_ui_core_Button___default = __webpack_require__.n(
				__WEBPACK_IMPORTED_MODULE_6__material_ui_core_Button__
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__material_ui_core_MenuItem__ = __webpack_require__(
				/*! @material-ui/core/MenuItem */ './node_modules/@material-ui/core/MenuItem/index.js'
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__material_ui_core_MenuItem___default = __webpack_require__.n(
				__WEBPACK_IMPORTED_MODULE_7__material_ui_core_MenuItem__
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__material_ui_core_Menu__ = __webpack_require__(
				/*! @material-ui/core/Menu */ './node_modules/@material-ui/core/Menu/index.js'
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__material_ui_core_Menu___default = __webpack_require__.n(
				__WEBPACK_IMPORTED_MODULE_8__material_ui_core_Menu__
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__selectors__ = __webpack_require__(
				/*! ./selectors */ './src/client/modules/main/selectors.js'
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__actions__ = __webpack_require__(
				/*! ./actions */ './src/client/modules/main/actions.js'
			);

			var GameChooser = (function(_React$PureComponent) {
				__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits___default()(
					GameChooser,
					_React$PureComponent
				);

				function GameChooser() {
					var _ref;

					var _temp, _this, _ret;

					__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(
						this,
						GameChooser
					);

					for (
						var _len = arguments.length, args = Array(_len), _key = 0;
						_key < _len;
						_key++
					) {
						args[_key] = arguments[_key];
					}

					return (
						(_ret = ((_temp = ((_this = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn___default()(
							this,
							(_ref =
								GameChooser.__proto__ ||
								Object.getPrototypeOf(GameChooser)).call.apply(
								_ref,
								[this].concat(args)
							)
						)),
						_this)),
						(_this.state = {
							anchorEl: null
						}),
						(_this.handleMenu = function(event) {
							_this.setState({ anchorEl: event.currentTarget });
						}),
						(_this.handleClose = function() {
							_this.setState({ anchorEl: null });
						}),
						(_this.handleChooseGameMenu = function(game) {
							_this.props.chooseGame(game);
							_this.setState({ anchorEl: null });
						}),
						_temp)),
						__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn___default()(
							_this,
							_ret
						)
					);
				}

				__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default()(
					GameChooser,
					[
						{
							key: 'render',
							value: function render() {
								var _this2 = this;

								var anchorEl = this.state.anchorEl;

								return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
									__WEBPACK_IMPORTED_MODULE_4_react__['Fragment'],
									null,
									__WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
										__WEBPACK_IMPORTED_MODULE_6__material_ui_core_Button___default.a,
										{
											'aria-owns': anchorEl ? 'menu-choosegame' : null,
											'aria-haspopup': 'true',
											onClick: this.handleMenu,
											color: 'inherit'
										},
										'Create New Game'
									),
									__WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
										__WEBPACK_IMPORTED_MODULE_8__material_ui_core_Menu___default.a,
										{
											id: 'menu-choosegame',
											anchorEl: anchorEl,
											open: Boolean(anchorEl),
											onClose: this.handleChooseGameMenu
										},
										__WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
											__WEBPACK_IMPORTED_MODULE_7__material_ui_core_MenuItem___default.a,
											{
												onClick: function onClick() {
													return _this2.handleChooseGameMenu('1846');
												}
											},
											'1846'
										)
									)
								);
							}
						}
					]
				);

				return GameChooser;
			})(__WEBPACK_IMPORTED_MODULE_4_react___default.a.PureComponent);

			var mapStateToProps = function mapStateToProps(state, props) {
				return {
					gameStatus: Object(
						__WEBPACK_IMPORTED_MODULE_9__selectors__['a' /* getGameStatus */]
					)(state)
				};
			};

			/* harmony default export */ __webpack_exports__['a'] = Object(
				__WEBPACK_IMPORTED_MODULE_5_react_redux__['b' /* connect */]
			)(mapStateToProps, {
				chooseGame:
					__WEBPACK_IMPORTED_MODULE_10__actions__['b' /* createNewGame */]
			})(GameChooser);

			/***/
		}
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L21vZHVsZXMvbWFpbi9nYW1lQ2hvb3Nlci5qcyJdLCJuYW1lcyI6WyJHYW1lQ2hvb3NlciIsInN0YXRlIiwiYW5jaG9yRWwiLCJoYW5kbGVNZW51Iiwic2V0U3RhdGUiLCJldmVudCIsImN1cnJlbnRUYXJnZXQiLCJoYW5kbGVDbG9zZSIsImhhbmRsZUNob29zZUdhbWVNZW51IiwicHJvcHMiLCJjaG9vc2VHYW1lIiwiZ2FtZSIsIkJvb2xlYW4iLCJSZWFjdCIsIlB1cmVDb21wb25lbnQiLCJtYXBTdGF0ZVRvUHJvcHMiLCJnYW1lU3RhdHVzIiwiZ2V0R2FtZVN0YXR1cyIsImNvbm5lY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxJQUFhQSxXQUFiO0FBQUE7O0FBQUE7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUEsMlBBQ0NDLEtBREQsR0FDUztBQUNQQyxhQUFVO0FBREgsR0FEVCxRQUtDQyxVQUxELEdBS2MsaUJBQVM7QUFDckIsU0FBS0MsUUFBTCxDQUFjLEVBQUVGLFVBQVVHLE1BQU1DLGFBQWxCLEVBQWQ7QUFDQSxHQVBGLFFBU0NDLFdBVEQsR0FTZSxZQUFNO0FBQ25CLFNBQUtILFFBQUwsQ0FBYyxFQUFFRixVQUFVLElBQVosRUFBZDtBQUNBLEdBWEYsUUFhQ00sb0JBYkQsR0Fhd0IsZ0JBQVE7QUFDOUIsU0FBS0MsS0FBTCxDQUFXQyxVQUFYLENBQXNCQyxJQUF0QjtBQUNBLFNBQUtQLFFBQUwsQ0FBYyxFQUFFRixVQUFVLElBQVosRUFBZDtBQUNBLEdBaEJGO0FBQUE7O0FBQUE7QUFBQTtBQUFBLDJCQWtCVTtBQUFBOztBQUFBLE9BQ0FBLFFBREEsR0FDYSxLQUFLRCxLQURsQixDQUNBQyxRQURBOzs7QUFHUixVQUNDO0FBQUMsbURBQUQ7QUFBQTtBQUNDO0FBQUMscUVBQUQ7QUFBQTtBQUNDLG1CQUFXQSxXQUFXLGlCQUFYLEdBQStCLElBRDNDO0FBRUMsdUJBQWMsTUFGZjtBQUdDLGVBQVMsS0FBS0MsVUFIZjtBQUlDLGFBQU07QUFKUDtBQUFBO0FBQUEsS0FERDtBQVNDO0FBQUMsbUVBQUQ7QUFBQTtBQUNDLFVBQUksaUJBREw7QUFFQyxnQkFBVUQsUUFGWDtBQUdDLFlBQU1VLFFBQVFWLFFBQVIsQ0FIUDtBQUlDLGVBQVMsS0FBS007QUFKZjtBQU1DO0FBQUMsd0VBQUQ7QUFBQSxRQUFVLFNBQVM7QUFBQSxlQUFNLE9BQUtBLG9CQUFMLENBQTBCLE1BQTFCLENBQU47QUFBQSxRQUFuQjtBQUFBO0FBQUE7QUFORDtBQVRELElBREQ7QUFzQkE7QUEzQ0Y7O0FBQUE7QUFBQSxFQUFpQyw2Q0FBQUssQ0FBTUMsYUFBdkM7O0FBOENBLElBQU1DLGtCQUFrQixTQUFsQkEsZUFBa0IsQ0FBQ2QsS0FBRCxFQUFRUSxLQUFSO0FBQUEsUUFBbUI7QUFDMUNPLGNBQVkseUVBQUFDLENBQWNoQixLQUFkO0FBRDhCLEVBQW5CO0FBQUEsQ0FBeEI7O0FBSUEseURBQWUsb0VBQUFpQixDQUNkSCxlQURjLEVBRWQsRUFBRUwsWUFBWSxnRUFBZCxFQUZjLEVBR2JWLFdBSGEsQ0FBZixFIiwiZmlsZSI6IjAuYzQ1OWJkYjcyMWI5ZmMzOGQ2ZTEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBGcmFnbWVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5cbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcbmltcG9ydCBNZW51SXRlbSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9NZW51SXRlbSc7XG5pbXBvcnQgTWVudSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9NZW51JztcblxuaW1wb3J0IHsgZ2V0R2FtZVN0YXR1cyB9IGZyb20gJy4vc2VsZWN0b3JzJztcbmltcG9ydCB7IGNyZWF0ZU5ld0dhbWUgfSBmcm9tICcuL2FjdGlvbnMnO1xuXG5leHBvcnQgY2xhc3MgR2FtZUNob29zZXIgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50IHtcblx0c3RhdGUgPSB7XG5cdFx0YW5jaG9yRWw6IG51bGxcblx0fTtcblxuXHRoYW5kbGVNZW51ID0gZXZlbnQgPT4ge1xuXHRcdHRoaXMuc2V0U3RhdGUoeyBhbmNob3JFbDogZXZlbnQuY3VycmVudFRhcmdldCB9KTtcblx0fTtcblxuXHRoYW5kbGVDbG9zZSA9ICgpID0+IHtcblx0XHR0aGlzLnNldFN0YXRlKHsgYW5jaG9yRWw6IG51bGwgfSk7XG5cdH07XG5cblx0aGFuZGxlQ2hvb3NlR2FtZU1lbnUgPSBnYW1lID0+IHtcblx0XHR0aGlzLnByb3BzLmNob29zZUdhbWUoZ2FtZSk7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7IGFuY2hvckVsOiBudWxsIH0pO1xuXHR9O1xuXG5cdHJlbmRlcigpIHtcblx0XHRjb25zdCB7IGFuY2hvckVsIH0gPSB0aGlzLnN0YXRlO1xuXG5cdFx0cmV0dXJuIChcblx0XHRcdDxGcmFnbWVudD5cblx0XHRcdFx0PEJ1dHRvblxuXHRcdFx0XHRcdGFyaWEtb3ducz17YW5jaG9yRWwgPyAnbWVudS1jaG9vc2VnYW1lJyA6IG51bGx9XG5cdFx0XHRcdFx0YXJpYS1oYXNwb3B1cD1cInRydWVcIlxuXHRcdFx0XHRcdG9uQ2xpY2s9e3RoaXMuaGFuZGxlTWVudX1cblx0XHRcdFx0XHRjb2xvcj1cImluaGVyaXRcIlxuXHRcdFx0XHQ+XG5cdFx0XHRcdFx0Q3JlYXRlIE5ldyBHYW1lXG5cdFx0XHRcdDwvQnV0dG9uPlxuXHRcdFx0XHQ8TWVudVxuXHRcdFx0XHRcdGlkPXsnbWVudS1jaG9vc2VnYW1lJ31cblx0XHRcdFx0XHRhbmNob3JFbD17YW5jaG9yRWx9XG5cdFx0XHRcdFx0b3Blbj17Qm9vbGVhbihhbmNob3JFbCl9XG5cdFx0XHRcdFx0b25DbG9zZT17dGhpcy5oYW5kbGVDaG9vc2VHYW1lTWVudX1cblx0XHRcdFx0PlxuXHRcdFx0XHRcdDxNZW51SXRlbSBvbkNsaWNrPXsoKSA9PiB0aGlzLmhhbmRsZUNob29zZUdhbWVNZW51KCcxODQ2Jyl9PlxuXHRcdFx0XHRcdFx0MTg0NlxuXHRcdFx0XHRcdDwvTWVudUl0ZW0+XG5cdFx0XHRcdDwvTWVudT5cblx0XHRcdDwvRnJhZ21lbnQ+XG5cdFx0KTtcblx0fVxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUsIHByb3BzKSA9PiAoe1xuXHRnYW1lU3RhdHVzOiBnZXRHYW1lU3RhdHVzKHN0YXRlKVxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXG5cdG1hcFN0YXRlVG9Qcm9wcyxcblx0eyBjaG9vc2VHYW1lOiBjcmVhdGVOZXdHYW1lIH1cbikoR2FtZUNob29zZXIpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NsaWVudC9tb2R1bGVzL21haW4vZ2FtZUNob29zZXIuanMiXSwic291cmNlUm9vdCI6IiJ9
