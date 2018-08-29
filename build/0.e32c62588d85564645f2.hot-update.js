webpackHotUpdate(0, {
	/***/ './src/client/modules/main/saga.js':
		/*!*****************************************!*\
  !*** ./src/client/modules/main/saga.js ***!
  \*****************************************/
		/*! exports provided: default */
		/*! exports used: default */
		/***/ function(module, __webpack_exports__, __webpack_require__) {
			'use strict';
			/* harmony export (immutable) */ __webpack_exports__['a'] = main;
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(
				/*! babel-runtime/regenerator */ './node_modules/babel-runtime/regenerator/index.js'
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(
				__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__ = __webpack_require__(
				/*! redux-saga/effects */ './node_modules/redux-saga/es/effects.js'
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actions__ = __webpack_require__(
				/*! ./actions */ './src/client/modules/main/actions.js'
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__serverApi_utils__ = __webpack_require__(
				/*! ../serverApi/utils */ './src/client/modules/serverApi/utils.js'
			);

			var _marked = /*#__PURE__*/ __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(
					handleCreatePlay
				),
				_marked2 = /*#__PURE__*/ __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(
					handleLoadSavedGame
				),
				_marked3 = /*#__PURE__*/ __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(
					main
				);

			function handleCreatePlay(action) {
				var playId;
				return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(
					function handleCreatePlay$(_context) {
						while (1) {
							switch ((_context.prev = _context.next)) {
								case 0:
									_context.next = 2;
									return Object(
										__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__[
											'a' /* call */
										]
									)(
										__WEBPACK_IMPORTED_MODULE_3__serverApi_utils__[
											'a' /* createNewPlay */
										],
										{ game: action.payload }
									);

								case 2:
									playId = _context.sent;

								case 3:
								case 'end':
									return _context.stop();
							}
						}
					},
					_marked,
					this
				);
			}

			function handleLoadSavedGame(action) {
				var playId;
				return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(
					function handleLoadSavedGame$(_context2) {
						while (1) {
							switch ((_context2.prev = _context2.next)) {
								case 0:
									_context2.next = 2;
									return Object(
										__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__[
											'a' /* call */
										]
									)(
										__WEBPACK_IMPORTED_MODULE_3__serverApi_utils__[
											'a' /* createNewPlay */
										],
										{ game: action.payload }
									);

								case 2:
									playId = _context2.sent;

								case 3:
								case 'end':
									return _context2.stop();
							}
						}
					},
					_marked2,
					this
				);
			}

			function main() {
				return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(
					function main$(_context3) {
						while (1) {
							switch ((_context3.prev = _context3.next)) {
								case 0:
									_context3.next = 2;
									return Object(
										__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__[
											'e' /* takeLatest */
										]
									)(
										__WEBPACK_IMPORTED_MODULE_2__actions__['a' /* MAIN */]
											.CREATE_NEW_GAME,
										handleCreatePlay
									);

								case 2:
									_context3.next = 4;
									return Object(
										__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__[
											'e' /* takeLatest */
										]
									)(
										__WEBPACK_IMPORTED_MODULE_2__actions__['a' /* MAIN */]
											.LOAD_SAVED_GAME,
										handleLoadSavedGame
									);

								case 4:
								case 'end':
									return _context3.stop();
							}
						}
					},
					_marked3,
					this
				);
			}

			/***/
		}
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L21vZHVsZXMvbWFpbi9zYWdhLmpzIl0sIm5hbWVzIjpbImhhbmRsZUNyZWF0ZVBsYXkiLCJoYW5kbGVMb2FkU2F2ZWRHYW1lIiwibWFpbiIsImFjdGlvbiIsImNhbGwiLCJnYW1lIiwicGF5bG9hZCIsInBsYXlJZCIsInRha2VMYXRlc3QiLCJNQUlOIiwiQ1JFQVRFX05FV19HQU1FIiwiTE9BRF9TQVZFRF9HQU1FIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tHQUlVQSxnQjttR0FJQUMsbUI7bUdBSWVDLEk7O0FBWnpCO0FBQ0E7QUFDQTs7QUFFQSxTQUFVRixnQkFBVixDQUEyQkcsTUFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUNzQix3RUFBQUMsQ0FBSyx1RUFBTCxFQUFvQixFQUFDQyxNQUFNRixPQUFPRyxPQUFkLEVBQXBCLENBRHRCOztBQUFBO0FBQ09DLFdBRFA7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBSUEsU0FBVU4sbUJBQVYsQ0FBOEJFLE1BQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFDc0Isd0VBQUFDLENBQUssdUVBQUwsRUFBb0IsRUFBQ0MsTUFBTUYsT0FBT0csT0FBZCxFQUFwQixDQUR0Qjs7QUFBQTtBQUNPQyxXQURQOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUllLFNBQVVMLElBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFDUiw4RUFBQU0sQ0FBVyxzREFBQUMsQ0FBS0MsZUFBaEIsRUFBaUNWLGdCQUFqQyxDQURROztBQUFBO0FBQUE7QUFBQSxZQUVSLDhFQUFBUSxDQUFXLHNEQUFBQyxDQUFLRSxlQUFoQixFQUFpQ1YsbUJBQWpDLENBRlE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsQyIsImZpbGUiOiIwLmUzMmM2MjU4OGQ4NTU2NDY0NWYyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3Rha2VMYXRlc3QsIHB1dCwgY2FsbH0gZnJvbSAncmVkdXgtc2FnYS9lZmZlY3RzJztcbmltcG9ydCB7TUFJTn0gZnJvbSAnLi9hY3Rpb25zJztcbmltcG9ydCB7Y3JlYXRlTmV3UGxheX0gZnJvbSBcIi4uL3NlcnZlckFwaS91dGlsc1wiO1xuXG5mdW5jdGlvbiogaGFuZGxlQ3JlYXRlUGxheShhY3Rpb24pIHtcblx0Y29uc3QgcGxheUlkID0geWllbGQgY2FsbChjcmVhdGVOZXdQbGF5LCB7Z2FtZTogYWN0aW9uLnBheWxvYWR9KTtcbn1cblxuZnVuY3Rpb24qIGhhbmRsZUxvYWRTYXZlZEdhbWUoYWN0aW9uKSB7XG5cdGNvbnN0IHBsYXlJZCA9IHlpZWxkIGNhbGwoY3JlYXRlTmV3UGxheSwge2dhbWU6IGFjdGlvbi5wYXlsb2FkfSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiBtYWluKCkge1xuXHR5aWVsZCB0YWtlTGF0ZXN0KE1BSU4uQ1JFQVRFX05FV19HQU1FLCBoYW5kbGVDcmVhdGVQbGF5KTtcblx0eWllbGQgdGFrZUxhdGVzdChNQUlOLkxPQURfU0FWRURfR0FNRSwgaGFuZGxlTG9hZFNhdmVkR2FtZSk7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY2xpZW50L21vZHVsZXMvbWFpbi9zYWdhLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==
