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
				var play;
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
									play = _context.sent;
									_context.next = 5;
									return Object(
										__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__[
											'b' /* put */
										]
									)(
										Object(
											__WEBPACK_IMPORTED_MODULE_2__actions__[
												'c' /* gameLoaded */
											]
										)(play)
									);

								case 5:
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
				var play;
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
											'c' /* loadSavedPlay */
										],
										action.payload
									);

								case 2:
									play = _context2.sent;
									_context2.next = 5;
									return Object(
										__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__[
											'b' /* put */
										]
									)(
										Object(
											__WEBPACK_IMPORTED_MODULE_2__actions__[
												'c' /* gameLoaded */
											]
										)(play)
									);

								case 5:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L21vZHVsZXMvbWFpbi9zYWdhLmpzIl0sIm5hbWVzIjpbImhhbmRsZUNyZWF0ZVBsYXkiLCJoYW5kbGVMb2FkU2F2ZWRHYW1lIiwibWFpbiIsImFjdGlvbiIsImNhbGwiLCJnYW1lIiwicGF5bG9hZCIsInBsYXkiLCJwdXQiLCJnYW1lTG9hZGVkIiwidGFrZUxhdGVzdCIsIk1BSU4iLCJDUkVBVEVfTkVXX0dBTUUiLCJMT0FEX1NBVkVEX0dBTUUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0dBSVVBLGdCO21HQUtBQyxtQjttR0FLZUMsSTs7QUFkekI7QUFDQTtBQUNBOztBQUVBLFNBQVVGLGdCQUFWLENBQTJCRyxNQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQ29CLHdFQUFBQyxDQUFLLHVFQUFMLEVBQW9CLEVBQUNDLE1BQU1GLE9BQU9HLE9BQWQsRUFBcEIsQ0FEcEI7O0FBQUE7QUFDT0MsU0FEUDtBQUFBO0FBQUEsWUFFTyx1RUFBQUMsQ0FBSSxvRUFBQUMsQ0FBV0YsSUFBWCxDQUFKLENBRlA7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBS0EsU0FBVU4sbUJBQVYsQ0FBOEJFLE1BQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFDb0Isd0VBQUFDLENBQUssdUVBQUwsRUFBb0JELE9BQU9HLE9BQTNCLENBRHBCOztBQUFBO0FBQ09DLFNBRFA7QUFBQTtBQUFBLFlBRU8sdUVBQUFDLENBQUksb0VBQUFDLENBQVdGLElBQVgsQ0FBSixDQUZQOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUtlLFNBQVVMLElBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFDUiw4RUFBQVEsQ0FBVyxzREFBQUMsQ0FBS0MsZUFBaEIsRUFBaUNaLGdCQUFqQyxDQURROztBQUFBO0FBQUE7QUFBQSxZQUVSLDhFQUFBVSxDQUFXLHNEQUFBQyxDQUFLRSxlQUFoQixFQUFpQ1osbUJBQWpDLENBRlE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsQyIsImZpbGUiOiIwLjk5ZmFkMDk1MTc1NGJmZWM3MDBkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3Rha2VMYXRlc3QsIHB1dCwgY2FsbH0gZnJvbSAncmVkdXgtc2FnYS9lZmZlY3RzJztcbmltcG9ydCB7Z2FtZUxvYWRlZCwgTUFJTn0gZnJvbSAnLi9hY3Rpb25zJztcbmltcG9ydCB7Y3JlYXRlTmV3UGxheSwgbG9hZFNhdmVkUGxheX0gZnJvbSBcIi4uL3NlcnZlckFwaS91dGlsc1wiO1xuXG5mdW5jdGlvbiogaGFuZGxlQ3JlYXRlUGxheShhY3Rpb24pIHtcblx0Y29uc3QgcGxheSA9IHlpZWxkIGNhbGwoY3JlYXRlTmV3UGxheSwge2dhbWU6IGFjdGlvbi5wYXlsb2FkfSk7XG5cdHlpZWxkIHB1dChnYW1lTG9hZGVkKHBsYXkpKTtcbn1cblxuZnVuY3Rpb24qIGhhbmRsZUxvYWRTYXZlZEdhbWUoYWN0aW9uKSB7XG5cdGNvbnN0IHBsYXkgPSB5aWVsZCBjYWxsKGxvYWRTYXZlZFBsYXksIGFjdGlvbi5wYXlsb2FkKTtcblx0eWllbGQgcHV0KGdhbWVMb2FkZWQocGxheSkpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogbWFpbigpIHtcblx0eWllbGQgdGFrZUxhdGVzdChNQUlOLkNSRUFURV9ORVdfR0FNRSwgaGFuZGxlQ3JlYXRlUGxheSk7XG5cdHlpZWxkIHRha2VMYXRlc3QoTUFJTi5MT0FEX1NBVkVEX0dBTUUsIGhhbmRsZUxvYWRTYXZlZEdhbWUpO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NsaWVudC9tb2R1bGVzL21haW4vc2FnYS5qcyJdLCJzb3VyY2VSb290IjoiIn0=
