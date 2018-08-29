webpackHotUpdate(0, {
	/***/ './src/client/modules/main/actions.js':
		/*!********************************************!*\
  !*** ./src/client/modules/main/actions.js ***!
  \********************************************/
		/*! exports provided: MAIN, playList, startGame, stopGame, chooseGame */
		/*! exports used: MAIN, chooseGame, playList, startGame, stopGame */
		/***/ function(module, __webpack_exports__, __webpack_require__) {
			'use strict';
			/* harmony export (binding) */ __webpack_require__.d(
				__webpack_exports__,
				'a',
				function() {
					return MAIN;
				}
			);
			/* harmony export (binding) */ __webpack_require__.d(
				__webpack_exports__,
				'c',
				function() {
					return playList;
				}
			);
			/* harmony export (binding) */ __webpack_require__.d(
				__webpack_exports__,
				'd',
				function() {
					return startGame;
				}
			);
			/* harmony export (binding) */ __webpack_require__.d(
				__webpack_exports__,
				'e',
				function() {
					return stopGame;
				}
			);
			/* harmony export (binding) */ __webpack_require__.d(
				__webpack_exports__,
				'b',
				function() {
					return chooseGame;
				}
			);
			var MAIN = {
				PLAY_LIST: 'MAIN_PLAY_LIST',
				START_GAME: 'MAIN_START_GAME',
				STOP_GAME: 'MAIN_STOP_GAME',
				CREATE_NEW_GAME: 'MAIN_CREATE_NEW_GAME'
			};

			var playList = function playList(plays) {
				return {
					type: MAIN.PLAY_LIST,
					payload: plays
				};
			};

			var startGame = function startGame() {
				return {
					type: MAIN.START_GAME
				};
			};

			var stopGame = function stopGame() {
				return {
					type: MAIN.STOP_GAME
				};
			};

			var chooseGame = function chooseGame(game) {
				return {
					type: MAIN.CREATE_NEW_GAME,
					payload: game
				};
			};

			/***/
		},

	/***/ './src/client/modules/main/reducer.jsx':
		/*!*********************************************!*\
  !*** ./src/client/modules/main/reducer.jsx ***!
  \*********************************************/
		/*! exports provided: default */
		/*! exports used: default */
		/***/ function(module, __webpack_exports__, __webpack_require__) {
			'use strict';
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_immutable__ = __webpack_require__(
				/*! immutable */ './node_modules/immutable/dist/immutable.js'
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_immutable___default = __webpack_require__.n(
				__WEBPACK_IMPORTED_MODULE_0_immutable__
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__actions__ = __webpack_require__(
				/*! ./actions */ './src/client/modules/main/actions.js'
			);

			/* harmony default export */ __webpack_exports__['a'] = function() {
				var state =
					arguments.length > 0 && arguments[0] !== undefined
						? arguments[0]
						: Object(__WEBPACK_IMPORTED_MODULE_0_immutable__['fromJS'])({
								status: {
									state: 'new'
								},
								plays: []
						  });
				var action = arguments[1];

				var s = state;
				switch (action.type) {
					case __WEBPACK_IMPORTED_MODULE_1__actions__['a' /* MAIN */].PLAY_LIST:
						s = state.set(
							'plays',
							Object(__WEBPACK_IMPORTED_MODULE_0_immutable__['fromJS'])(
								action.payload.plays
							)
						);
						return s;
					case __WEBPACK_IMPORTED_MODULE_1__actions__['a' /* MAIN */]
						.CREATE_NEW_GAME:
						s = state.setIn(['status', 'state'], 'ready');
						return s;
					case __WEBPACK_IMPORTED_MODULE_1__actions__['a' /* MAIN */]
						.START_GAME:
						s = state.setIn(['status', 'state'], 'started');
						return s;
					case __WEBPACK_IMPORTED_MODULE_1__actions__['a' /* MAIN */].STOP_GAME:
						s = state.setIn(['status', 'state'], 'finished');
						return s;
					default:
				}

				return state;
			};

			/***/
		},

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
					main
				);

			function handleCreatePlay(action) {
				var playId;
				return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(
					function handleCreatePlay$(_context) {
						while (1) {
							switch ((_context.prev = _context.next)) {
								case 0:
									console.log('Chose game', action.payload);
									_context.next = 3;
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

								case 3:
									playId = _context.sent;

								case 4:
								case 'end':
									return _context.stop();
							}
						}
					},
					_marked,
					this
				);
			}

			function main() {
				return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(
					function main$(_context2) {
						while (1) {
							switch ((_context2.prev = _context2.next)) {
								case 0:
									_context2.next = 2;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L21vZHVsZXMvbWFpbi9hY3Rpb25zLmpzIiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvbW9kdWxlcy9tYWluL3JlZHVjZXIuanN4Iiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvbW9kdWxlcy9tYWluL3NhZ2EuanMiXSwibmFtZXMiOlsiTUFJTiIsIlBMQVlfTElTVCIsIlNUQVJUX0dBTUUiLCJTVE9QX0dBTUUiLCJDUkVBVEVfTkVXX0dBTUUiLCJwbGF5TGlzdCIsInBsYXlzIiwidHlwZSIsInBheWxvYWQiLCJzdGFydEdhbWUiLCJzdG9wR2FtZSIsImNob29zZUdhbWUiLCJnYW1lIiwic3RhdGUiLCJmcm9tSlMiLCJzdGF0dXMiLCJhY3Rpb24iLCJzIiwic2V0Iiwic2V0SW4iLCJoYW5kbGVDcmVhdGVQbGF5IiwibWFpbiIsImNvbnNvbGUiLCJsb2ciLCJjYWxsIiwicGxheUlkIiwidGFrZUxhdGVzdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFPLElBQU1BLE9BQU87QUFDbkJDLFlBQVcsZ0JBRFE7QUFFbkJDLGFBQVksaUJBRk87QUFHbkJDLFlBQVcsZ0JBSFE7QUFJbkJDLGtCQUFpQjtBQUpFLENBQWI7O0FBT0EsSUFBTUMsV0FBVyxTQUFYQSxRQUFXLENBQUNDLEtBQUQsRUFBVztBQUNsQyxRQUFPO0FBQ05DLFFBQU1QLEtBQUtDLFNBREw7QUFFTk8sV0FBU0Y7QUFGSCxFQUFQO0FBSUEsQ0FMTTs7QUFPQSxJQUFNRyxZQUFZLFNBQVpBLFNBQVksR0FBTTtBQUM5QixRQUFPO0FBQ05GLFFBQU1QLEtBQUtFO0FBREwsRUFBUDtBQUdBLENBSk07O0FBTUEsSUFBTVEsV0FBVyxTQUFYQSxRQUFXLEdBQU07QUFDN0IsUUFBTztBQUNOSCxRQUFNUCxLQUFLRztBQURMLEVBQVA7QUFHQSxDQUpNOztBQU1BLElBQU1RLGFBQWEsU0FBYkEsVUFBYSxPQUFRO0FBQ2pDLFFBQU87QUFDTkosUUFBTVAsS0FBS0ksZUFETDtBQUVOSSxXQUFTSTtBQUZILEVBQVA7QUFJQSxDQUxNLEM7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxQlA7QUFDQTs7QUFFQSx5REFBZSxZQUtIO0FBQUEsS0FMYUMsS0FLYix1RUFMcUIseURBQUFDLENBQU87QUFDdkNDLFVBQVE7QUFDUEYsVUFBTztBQURBLEdBRCtCO0FBSXZDUCxTQUFPO0FBSmdDLEVBQVAsQ0FLckI7QUFBQSxLQUFSVSxNQUFROztBQUNYLEtBQUlDLElBQUlKLEtBQVI7QUFDQSxTQUFRRyxPQUFPVCxJQUFmO0FBQ0MsT0FBSyxzREFBQVAsQ0FBS0MsU0FBVjtBQUNDZ0IsT0FBSUosTUFBTUssR0FBTixDQUFVLE9BQVYsRUFBbUIseURBQUFKLENBQU9FLE9BQU9SLE9BQVAsQ0FBZUYsS0FBdEIsQ0FBbkIsQ0FBSjtBQUNBLFVBQU9XLENBQVA7QUFDRCxPQUFLLHNEQUFBakIsQ0FBS0ksZUFBVjtBQUNDYSxPQUFJSixNQUFNTSxLQUFOLENBQVksQ0FBQyxRQUFELEVBQVcsT0FBWCxDQUFaLEVBQWlDLE9BQWpDLENBQUo7QUFDQSxVQUFPRixDQUFQO0FBQ0QsT0FBSyxzREFBQWpCLENBQUtFLFVBQVY7QUFDQ2UsT0FBSUosTUFBTU0sS0FBTixDQUFZLENBQUMsUUFBRCxFQUFXLE9BQVgsQ0FBWixFQUFpQyxTQUFqQyxDQUFKO0FBQ0EsVUFBT0YsQ0FBUDtBQUNELE9BQUssc0RBQUFqQixDQUFLRyxTQUFWO0FBQ0NjLE9BQUlKLE1BQU1NLEtBQU4sQ0FBWSxDQUFDLFFBQUQsRUFBVyxPQUFYLENBQVosRUFBaUMsVUFBakMsQ0FBSjtBQUNBLFVBQU9GLENBQVA7QUFDRDtBQWJEOztBQWdCQSxRQUFPSixLQUFQO0FBQ0EsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tHQ3ZCU08sZ0I7bUdBS2VDLEk7O0FBVHpCO0FBQ0E7QUFDQTs7QUFFQSxTQUFVRCxnQkFBVixDQUEyQkosTUFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0NNLGFBQVFDLEdBQVIsQ0FBWSxZQUFaLEVBQTBCUCxPQUFPUixPQUFqQztBQUREO0FBQUEsWUFFc0Isd0VBQUFnQixDQUFLLHVFQUFMLEVBQW9CLEVBQUNaLE1BQU1JLE9BQU9SLE9BQWQsRUFBcEIsQ0FGdEI7O0FBQUE7QUFFT2lCLFdBRlA7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBS2UsU0FBVUosSUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUNSLDhFQUFBSyxDQUFXLHNEQUFBMUIsQ0FBS0ksZUFBaEIsRUFBaUNnQixnQkFBakMsQ0FEUTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxDIiwiZmlsZSI6IjAuZGQxMzg3ZTFhOTA2MjFmYzZiZTUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBNQUlOID0ge1xuXHRQTEFZX0xJU1Q6ICdNQUlOX1BMQVlfTElTVCcsXG5cdFNUQVJUX0dBTUU6ICdNQUlOX1NUQVJUX0dBTUUnLFxuXHRTVE9QX0dBTUU6ICdNQUlOX1NUT1BfR0FNRScsXG5cdENSRUFURV9ORVdfR0FNRTogJ01BSU5fQ1JFQVRFX05FV19HQU1FJ1xufTtcblxuZXhwb3J0IGNvbnN0IHBsYXlMaXN0ID0gKHBsYXlzKSA9PiB7XG5cdHJldHVybiB7XG5cdFx0dHlwZTogTUFJTi5QTEFZX0xJU1QsXG5cdFx0cGF5bG9hZDogcGxheXNcblx0fVxufTtcblxuZXhwb3J0IGNvbnN0IHN0YXJ0R2FtZSA9ICgpID0+IHtcblx0cmV0dXJuIHtcblx0XHR0eXBlOiBNQUlOLlNUQVJUX0dBTUVcblx0fTtcbn07XG5cbmV4cG9ydCBjb25zdCBzdG9wR2FtZSA9ICgpID0+IHtcblx0cmV0dXJuIHtcblx0XHR0eXBlOiBNQUlOLlNUT1BfR0FNRVxuXHR9O1xufTtcblxuZXhwb3J0IGNvbnN0IGNob29zZUdhbWUgPSBnYW1lID0+IHtcblx0cmV0dXJuIHtcblx0XHR0eXBlOiBNQUlOLkNSRUFURV9ORVdfR0FNRSxcblx0XHRwYXlsb2FkOiBnYW1lXG5cdH07XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NsaWVudC9tb2R1bGVzL21haW4vYWN0aW9ucy5qcyIsImltcG9ydCB7ZnJvbUpTfSBmcm9tIFwiaW1tdXRhYmxlXCI7XG5pbXBvcnQge01BSU59IGZyb20gXCIuL2FjdGlvbnNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHN0YXRlID0gZnJvbUpTKHtcblx0c3RhdHVzOiB7XG5cdFx0c3RhdGU6IFwibmV3XCIsXG5cdH0sXG5cdHBsYXlzOiBbXVxufSksIGFjdGlvbikge1xuXHRsZXQgcyA9IHN0YXRlO1xuXHRzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG5cdFx0Y2FzZSBNQUlOLlBMQVlfTElTVDpcblx0XHRcdHMgPSBzdGF0ZS5zZXQoJ3BsYXlzJywgZnJvbUpTKGFjdGlvbi5wYXlsb2FkLnBsYXlzKSk7XG5cdFx0XHRyZXR1cm4gcztcblx0XHRjYXNlIE1BSU4uQ1JFQVRFX05FV19HQU1FOlxuXHRcdFx0cyA9IHN0YXRlLnNldEluKFsnc3RhdHVzJywgJ3N0YXRlJ10sIFwicmVhZHlcIik7XG5cdFx0XHRyZXR1cm4gcztcblx0XHRjYXNlIE1BSU4uU1RBUlRfR0FNRTpcblx0XHRcdHMgPSBzdGF0ZS5zZXRJbihbJ3N0YXR1cycsICdzdGF0ZSddLCBcInN0YXJ0ZWRcIik7XG5cdFx0XHRyZXR1cm4gcztcblx0XHRjYXNlIE1BSU4uU1RPUF9HQU1FOlxuXHRcdFx0cyA9IHN0YXRlLnNldEluKFsnc3RhdHVzJywgJ3N0YXRlJ10sIFwiZmluaXNoZWRcIik7XG5cdFx0XHRyZXR1cm4gcztcblx0XHRkZWZhdWx0OlxuXHR9XG5cblx0cmV0dXJuIHN0YXRlO1xufVxuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY2xpZW50L21vZHVsZXMvbWFpbi9yZWR1Y2VyLmpzeCIsImltcG9ydCB7dGFrZUxhdGVzdCwgcHV0LCBjYWxsfSBmcm9tICdyZWR1eC1zYWdhL2VmZmVjdHMnO1xuaW1wb3J0IHtNQUlOfSBmcm9tICcuL2FjdGlvbnMnO1xuaW1wb3J0IHtjcmVhdGVOZXdQbGF5LCBsaXN0UGxheXN9IGZyb20gXCIuLi9zZXJ2ZXJBcGkvdXRpbHNcIjtcblxuZnVuY3Rpb24qIGhhbmRsZUNyZWF0ZVBsYXkoYWN0aW9uKSB7XG5cdGNvbnNvbGUubG9nKFwiQ2hvc2UgZ2FtZVwiLCBhY3Rpb24ucGF5bG9hZCk7XG5cdGNvbnN0IHBsYXlJZCA9IHlpZWxkIGNhbGwoY3JlYXRlTmV3UGxheSwge2dhbWU6IGFjdGlvbi5wYXlsb2FkfSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiBtYWluKCkge1xuXHR5aWVsZCB0YWtlTGF0ZXN0KE1BSU4uQ1JFQVRFX05FV19HQU1FLCBoYW5kbGVDcmVhdGVQbGF5KTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jbGllbnQvbW9kdWxlcy9tYWluL3NhZ2EuanMiXSwic291cmNlUm9vdCI6IiJ9
