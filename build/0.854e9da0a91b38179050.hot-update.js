webpackHotUpdate(0, {
	/***/ './src/client/modules/startup/saga.js':
		/*!********************************************!*\
  !*** ./src/client/modules/startup/saga.js ***!
  \********************************************/
		/*! exports provided: default */
		/*! exports used: default */
		/***/ function(module, __webpack_exports__, __webpack_require__) {
			'use strict';
			/* harmony export (immutable) */ __webpack_exports__['a'] = startup;
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
				/*! ./actions */ './src/client/modules/startup/actions.js'
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__serverApi_utils__ = __webpack_require__(
				/*! ../serverApi/utils */ './src/client/modules/serverApi/utils.js'
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__main_actions__ = __webpack_require__(
				/*! ../main/actions */ './src/client/modules/main/actions.js'
			);

			var _marked = /*#__PURE__*/ __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(
					handleStartupInit
				),
				_marked2 = /*#__PURE__*/ __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(
					startup
				);

			/**
			 * Processes startup requests (should only be one)
			 *
			 * @param {object} action The triggering action
			 * @returns {IterableIterator<*>} nothing
			 */
			function handleStartupInit(action) {
				var savedPlays;
				return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(
					function handleStartupInit$(_context) {
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
											'b' /* listPlays */
										]
									);

								case 2:
									savedPlays = _context.sent;
									_context.next = 5;
									return Object(
										__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__[
											'b' /* put */
										]
									)(
										Object(
											__WEBPACK_IMPORTED_MODULE_4__main_actions__[
												'c' /* playList */
											]
										)(savedPlays)
									);

								case 5:
									console.log('Saved Plays', savedPlays);

								case 6:
								case 'end':
									return _context.stop();
							}
						}
					},
					_marked,
					this
				);
			}

			function startup() {
				return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(
					function startup$(_context2) {
						while (1) {
							switch ((_context2.prev = _context2.next)) {
								case 0:
									_context2.next = 2;
									return Object(
										__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__[
											'e' /* takeLatest */
										]
									)(
										__WEBPACK_IMPORTED_MODULE_2__actions__['a' /* STARTUP */]
											.INIT,
										handleStartupInit
									);

								case 2:
								case 'end':
									return _context2.stop();
							}
						}
					},
					_marked2,
					this
				);
			}

			/***/
		}
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L21vZHVsZXMvc3RhcnR1cC9zYWdhLmpzIl0sIm5hbWVzIjpbImhhbmRsZVN0YXJ0dXBJbml0Iiwic3RhcnR1cCIsImFjdGlvbiIsImNhbGwiLCJzYXZlZFBsYXlzIiwicHV0IiwicGxheUxpc3QiLCJjb25zb2xlIiwibG9nIiwidGFrZUxhdGVzdCIsIlNUQVJUVVAiLCJJTklUIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrR0FXVUEsaUI7bUdBTWVDLE87O0FBakJ6QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7O0FBTUEsU0FBVUQsaUJBQVYsQ0FBNEJFLE1BQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQzBCLHdFQUFBQyxDQUFLLG1FQUFMLENBRDFCOztBQUFBO0FBQ09DLG9CQURQO0FBQUE7QUFBQSxpQkFFTyx1RUFBQUMsQ0FBSSx1RUFBQUMsQ0FBU0YsVUFBVCxDQUFKLENBRlA7O0FBQUE7QUFHQ0csa0JBQVFDLEdBQVIsQ0FBWSxhQUFaLEVBQTJCSixVQUEzQjs7QUFIRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFNZSxTQUFVSCxPQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUNSLDhFQUFBUSxDQUFXLHlEQUFBQyxDQUFRQyxJQUFuQixFQUF5QlgsaUJBQXpCLENBRFE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsQyIsImZpbGUiOiIwLjg1NGU5ZGEwYTkxYjM4MTc5MDUwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB0YWtlTGF0ZXN0LCBwdXQsIGNhbGwgfSBmcm9tICdyZWR1eC1zYWdhL2VmZmVjdHMnO1xuaW1wb3J0IHsgU1RBUlRVUCB9IGZyb20gJy4vYWN0aW9ucyc7XG5pbXBvcnQge2xpc3RQbGF5c30gZnJvbSBcIi4uL3NlcnZlckFwaS91dGlsc1wiO1xuaW1wb3J0IHtwbGF5TGlzdH0gZnJvbSBcIi4uL21haW4vYWN0aW9uc1wiO1xuXG4vKipcbiAqIFByb2Nlc3NlcyBzdGFydHVwIHJlcXVlc3RzIChzaG91bGQgb25seSBiZSBvbmUpXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IGFjdGlvbiBUaGUgdHJpZ2dlcmluZyBhY3Rpb25cbiAqIEByZXR1cm5zIHtJdGVyYWJsZUl0ZXJhdG9yPCo+fSBub3RoaW5nXG4gKi9cbmZ1bmN0aW9uKiBoYW5kbGVTdGFydHVwSW5pdChhY3Rpb24pIHtcblx0Y29uc3Qgc2F2ZWRQbGF5cyA9IHlpZWxkIGNhbGwobGlzdFBsYXlzKTtcblx0eWllbGQgcHV0KHBsYXlMaXN0KHNhdmVkUGxheXMpKTtcblx0Y29uc29sZS5sb2coXCJTYXZlZCBQbGF5c1wiLCBzYXZlZFBsYXlzKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIHN0YXJ0dXAoKSB7XG5cdHlpZWxkIHRha2VMYXRlc3QoU1RBUlRVUC5JTklULCBoYW5kbGVTdGFydHVwSW5pdCk7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY2xpZW50L21vZHVsZXMvc3RhcnR1cC9zYWdhLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==
