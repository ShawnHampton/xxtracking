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
					handleSaveGame
				),
				_marked4 = /*#__PURE__*/ __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(
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

			function handleSaveGame(action) {
				return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(
					function handleSaveGame$(_context3) {
						while (1) {
							switch ((_context3.prev = _context3.next)) {
								case 0:
									_context3.next = 2;
									return Object(
										__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__[
											'a' /* call */
										]
									)(
										__WEBPACK_IMPORTED_MODULE_3__serverApi_utils__[
											'd' /* savePlay */
										],
										action.payload
									);

								case 2:
								case 'end':
									return _context3.stop();
							}
						}
					},
					_marked3,
					this
				);
			}

			function main() {
				return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(
					function main$(_context4) {
						while (1) {
							switch ((_context4.prev = _context4.next)) {
								case 0:
									_context4.next = 2;
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
									_context4.next = 4;
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
									_context4.next = 6;
									return Object(
										__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__[
											'e' /* takeLatest */
										]
									)(
										__WEBPACK_IMPORTED_MODULE_2__actions__['a' /* MAIN */]
											.SAVE_GAME,
										handleSaveGame
									);

								case 6:
								case 'end':
									return _context4.stop();
							}
						}
					},
					_marked4,
					this
				);
			}

			/***/
		}
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L21vZHVsZXMvbWFpbi9zYWdhLmpzIl0sIm5hbWVzIjpbImhhbmRsZUNyZWF0ZVBsYXkiLCJoYW5kbGVMb2FkU2F2ZWRHYW1lIiwiaGFuZGxlU2F2ZUdhbWUiLCJtYWluIiwiYWN0aW9uIiwiY2FsbCIsImdhbWUiLCJwYXlsb2FkIiwicGxheSIsInB1dCIsImdhbWVMb2FkZWQiLCJ0YWtlTGF0ZXN0IiwiTUFJTiIsIkNSRUFURV9ORVdfR0FNRSIsIkxPQURfU0FWRURfR0FNRSIsIlNBVkVfR0FNRSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrR0FJVUEsZ0I7bUdBS0FDLG1CO21HQUtBQyxjO21HQUllQyxJOztBQWxCekI7QUFDQTtBQUNBOztBQUVBLFNBQVVILGdCQUFWLENBQTJCSSxNQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQ29CLHdFQUFBQyxDQUFLLHVFQUFMLEVBQW9CLEVBQUNDLE1BQU1GLE9BQU9HLE9BQWQsRUFBcEIsQ0FEcEI7O0FBQUE7QUFDT0MsU0FEUDtBQUFBO0FBQUEsWUFFTyx1RUFBQUMsQ0FBSSxvRUFBQUMsQ0FBV0YsSUFBWCxDQUFKLENBRlA7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBS0EsU0FBVVAsbUJBQVYsQ0FBOEJHLE1BQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFDb0Isd0VBQUFDLENBQUssdUVBQUwsRUFBb0JELE9BQU9HLE9BQTNCLENBRHBCOztBQUFBO0FBQ09DLFNBRFA7QUFBQTtBQUFBLFlBRU8sdUVBQUFDLENBQUksb0VBQUFDLENBQVdGLElBQVgsQ0FBSixDQUZQOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUtBLFNBQVVOLGNBQVYsQ0FBeUJFLE1BQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQ08sd0VBQUFDLENBQUssa0VBQUwsRUFBZUQsT0FBT0csT0FBdEIsQ0FEUDs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFJZSxTQUFVSixJQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQ1IsOEVBQUFRLENBQVcsc0RBQUFDLENBQUtDLGVBQWhCLEVBQWlDYixnQkFBakMsQ0FEUTs7QUFBQTtBQUFBO0FBQUEsWUFFUiw4RUFBQVcsQ0FBVyxzREFBQUMsQ0FBS0UsZUFBaEIsRUFBaUNiLG1CQUFqQyxDQUZROztBQUFBO0FBQUE7QUFBQSxZQUdSLDhFQUFBVSxDQUFXLHNEQUFBQyxDQUFLRyxTQUFoQixFQUEyQmIsY0FBM0IsQ0FIUTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxDIiwiZmlsZSI6IjAuYTU5OGY2ZGFlMWJkZWQ3YWY0MzMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dGFrZUxhdGVzdCwgcHV0LCBjYWxsfSBmcm9tICdyZWR1eC1zYWdhL2VmZmVjdHMnO1xuaW1wb3J0IHtnYW1lTG9hZGVkLCBNQUlOfSBmcm9tICcuL2FjdGlvbnMnO1xuaW1wb3J0IHtjcmVhdGVOZXdQbGF5LCBsb2FkU2F2ZWRQbGF5LCBzYXZlUGxheX0gZnJvbSBcIi4uL3NlcnZlckFwaS91dGlsc1wiO1xuXG5mdW5jdGlvbiogaGFuZGxlQ3JlYXRlUGxheShhY3Rpb24pIHtcblx0Y29uc3QgcGxheSA9IHlpZWxkIGNhbGwoY3JlYXRlTmV3UGxheSwge2dhbWU6IGFjdGlvbi5wYXlsb2FkfSk7XG5cdHlpZWxkIHB1dChnYW1lTG9hZGVkKHBsYXkpKTtcbn1cblxuZnVuY3Rpb24qIGhhbmRsZUxvYWRTYXZlZEdhbWUoYWN0aW9uKSB7XG5cdGNvbnN0IHBsYXkgPSB5aWVsZCBjYWxsKGxvYWRTYXZlZFBsYXksIGFjdGlvbi5wYXlsb2FkKTtcblx0eWllbGQgcHV0KGdhbWVMb2FkZWQocGxheSkpO1xufVxuXG5mdW5jdGlvbiogaGFuZGxlU2F2ZUdhbWUoYWN0aW9uKSB7XG5cdHlpZWxkIGNhbGwoc2F2ZVBsYXksIGFjdGlvbi5wYXlsb2FkKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIG1haW4oKSB7XG5cdHlpZWxkIHRha2VMYXRlc3QoTUFJTi5DUkVBVEVfTkVXX0dBTUUsIGhhbmRsZUNyZWF0ZVBsYXkpO1xuXHR5aWVsZCB0YWtlTGF0ZXN0KE1BSU4uTE9BRF9TQVZFRF9HQU1FLCBoYW5kbGVMb2FkU2F2ZWRHYW1lKTtcblx0eWllbGQgdGFrZUxhdGVzdChNQUlOLlNBVkVfR0FNRSwgaGFuZGxlU2F2ZUdhbWUpO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NsaWVudC9tb2R1bGVzL21haW4vc2FnYS5qcyJdLCJzb3VyY2VSb290IjoiIn0=
