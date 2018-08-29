webpackHotUpdate(0, {
	/***/ './src/client/modules/main/actions.js':
		/*!********************************************!*\
  !*** ./src/client/modules/main/actions.js ***!
  \********************************************/
		/*! exports provided: MAIN, playList, loadSavedGame, gameLoaded, startGame, stopGame, createNewGame */
		/*! exports used: MAIN, createNewGame, playList, savedGameLoaded, startGame, stopGame */
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
			/* unused harmony export loadSavedGame */
			/* unused harmony export gameLoaded */
			/* harmony export (binding) */ __webpack_require__.d(
				__webpack_exports__,
				'e',
				function() {
					return startGame;
				}
			);
			/* harmony export (binding) */ __webpack_require__.d(
				__webpack_exports__,
				'f',
				function() {
					return stopGame;
				}
			);
			/* harmony export (binding) */ __webpack_require__.d(
				__webpack_exports__,
				'b',
				function() {
					return createNewGame;
				}
			);
			var MAIN = {
				PLAY_LIST: 'MAIN_PLAY_LIST',
				START_GAME: 'MAIN_START_GAME',
				STOP_GAME: 'MAIN_STOP_GAME',
				LOAD_SAVED_GAME: 'MAIN_LOAD_SAVED_GAME',
				GAME_LOADED: 'MAIN_GAME_LOADED',
				CREATE_NEW_GAME: 'MAIN_CREATE_NEW_GAME'
			};

			var playList = function playList(plays) {
				return {
					type: MAIN.PLAY_LIST,
					payload: plays
				};
			};

			var loadSavedGame = function loadSavedGame(play) {
				return {
					type: MAIN.LOAD_SAVED_GAME,
					payload: play
				};
			};

			var gameLoaded = function gameLoaded(play) {
				return {
					type: MAIN.GAME_LOADED,
					payload: play
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

			var createNewGame = function createNewGame(game) {
				return {
					type: MAIN.CREATE_NEW_GAME,
					payload: game
				};
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
										action.payload.id
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
											__WEBPACK_IMPORTED_MODULE_2__actions__['savedGameLoaded']
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L21vZHVsZXMvbWFpbi9hY3Rpb25zLmpzIiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvbW9kdWxlcy9tYWluL3NhZ2EuanMiXSwibmFtZXMiOlsiTUFJTiIsIlBMQVlfTElTVCIsIlNUQVJUX0dBTUUiLCJTVE9QX0dBTUUiLCJMT0FEX1NBVkVEX0dBTUUiLCJHQU1FX0xPQURFRCIsIkNSRUFURV9ORVdfR0FNRSIsInBsYXlMaXN0IiwicGxheXMiLCJ0eXBlIiwicGF5bG9hZCIsImxvYWRTYXZlZEdhbWUiLCJwbGF5IiwiZ2FtZUxvYWRlZCIsInN0YXJ0R2FtZSIsInN0b3BHYW1lIiwiY3JlYXRlTmV3R2FtZSIsImdhbWUiLCJoYW5kbGVDcmVhdGVQbGF5IiwiaGFuZGxlTG9hZFNhdmVkR2FtZSIsIm1haW4iLCJhY3Rpb24iLCJjYWxsIiwiaWQiLCJwdXQiLCJzYXZlZEdhbWVMb2FkZWQiLCJ0YWtlTGF0ZXN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTyxJQUFNQSxPQUFPO0FBQ25CQyxZQUFXLGdCQURRO0FBRW5CQyxhQUFZLGlCQUZPO0FBR25CQyxZQUFXLGdCQUhRO0FBSW5CQyxrQkFBaUIsc0JBSkU7QUFLbkJDLGNBQWEsa0JBTE07QUFNbkJDLGtCQUFpQjtBQU5FLENBQWI7O0FBU0EsSUFBTUMsV0FBVyxTQUFYQSxRQUFXLENBQUNDLEtBQUQsRUFBVztBQUNsQyxRQUFPO0FBQ05DLFFBQU1ULEtBQUtDLFNBREw7QUFFTlMsV0FBU0Y7QUFGSCxFQUFQO0FBSUEsQ0FMTTs7QUFPQSxJQUFNRyxnQkFBZ0IsU0FBaEJBLGFBQWdCLENBQUNDLElBQUQsRUFBVTtBQUN0QyxRQUFPO0FBQ05ILFFBQU1ULEtBQUtJLGVBREw7QUFFTk0sV0FBU0U7QUFGSCxFQUFQO0FBSUEsQ0FMTTs7QUFPQSxJQUFNQyxhQUFhLFNBQWJBLFVBQWEsQ0FBQ0QsSUFBRCxFQUFVO0FBQ25DLFFBQU87QUFDTkgsUUFBTVQsS0FBS0ssV0FETDtBQUVOSyxXQUFTRTtBQUZILEVBQVA7QUFJQSxDQUxNOztBQU9BLElBQU1FLFlBQVksU0FBWkEsU0FBWSxHQUFNO0FBQzlCLFFBQU87QUFDTkwsUUFBTVQsS0FBS0U7QUFETCxFQUFQO0FBR0EsQ0FKTTs7QUFNQSxJQUFNYSxXQUFXLFNBQVhBLFFBQVcsR0FBTTtBQUM3QixRQUFPO0FBQ05OLFFBQU1ULEtBQUtHO0FBREwsRUFBUDtBQUdBLENBSk07O0FBTUEsSUFBTWEsZ0JBQWdCLFNBQWhCQSxhQUFnQixPQUFRO0FBQ3BDLFFBQU87QUFDTlAsUUFBTVQsS0FBS00sZUFETDtBQUVOSSxXQUFTTztBQUZILEVBQVA7QUFJQSxDQUxNLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrR0N0Q0dDLGdCO21HQUlBQyxtQjttR0FLZUMsSTs7QUFiekI7QUFDQTtBQUNBOztBQUVBLFNBQVVGLGdCQUFWLENBQTJCRyxNQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQ29CLHdFQUFBQyxDQUFLLHVFQUFMLEVBQW9CLEVBQUNMLE1BQU1JLE9BQU9YLE9BQWQsRUFBcEIsQ0FEcEI7O0FBQUE7QUFDT0UsU0FEUDs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFJQSxTQUFVTyxtQkFBVixDQUE4QkUsTUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUNvQix3RUFBQUMsQ0FBSyx1RUFBTCxFQUFvQkQsT0FBT1gsT0FBUCxDQUFlYSxFQUFuQyxDQURwQjs7QUFBQTtBQUNPWCxTQURQO0FBQUE7QUFBQSxZQUVPLHVFQUFBWSxDQUFJLGlFQUFBQyxDQUFnQmIsSUFBaEIsQ0FBSixDQUZQOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUtlLFNBQVVRLElBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFDUiw4RUFBQU0sQ0FBVyxzREFBQTFCLENBQUtNLGVBQWhCLEVBQWlDWSxnQkFBakMsQ0FEUTs7QUFBQTtBQUFBO0FBQUEsWUFFUiw4RUFBQVEsQ0FBVyxzREFBQTFCLENBQUtJLGVBQWhCLEVBQWlDZSxtQkFBakMsQ0FGUTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxDIiwiZmlsZSI6IjAuNmIzYTA0MDE5OTVkZGI5ZDc5ODEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBNQUlOID0ge1xuXHRQTEFZX0xJU1Q6ICdNQUlOX1BMQVlfTElTVCcsXG5cdFNUQVJUX0dBTUU6ICdNQUlOX1NUQVJUX0dBTUUnLFxuXHRTVE9QX0dBTUU6ICdNQUlOX1NUT1BfR0FNRScsXG5cdExPQURfU0FWRURfR0FNRTogJ01BSU5fTE9BRF9TQVZFRF9HQU1FJyxcblx0R0FNRV9MT0FERUQ6ICdNQUlOX0dBTUVfTE9BREVEJyxcblx0Q1JFQVRFX05FV19HQU1FOiAnTUFJTl9DUkVBVEVfTkVXX0dBTUUnXG59O1xuXG5leHBvcnQgY29uc3QgcGxheUxpc3QgPSAocGxheXMpID0+IHtcblx0cmV0dXJuIHtcblx0XHR0eXBlOiBNQUlOLlBMQVlfTElTVCxcblx0XHRwYXlsb2FkOiBwbGF5c1xuXHR9XG59O1xuXG5leHBvcnQgY29uc3QgbG9hZFNhdmVkR2FtZSA9IChwbGF5KSA9PiB7XG5cdHJldHVybiB7XG5cdFx0dHlwZTogTUFJTi5MT0FEX1NBVkVEX0dBTUUsXG5cdFx0cGF5bG9hZDogcGxheVxuXHR9XG59O1xuXG5leHBvcnQgY29uc3QgZ2FtZUxvYWRlZCA9IChwbGF5KSA9PiB7XG5cdHJldHVybiB7XG5cdFx0dHlwZTogTUFJTi5HQU1FX0xPQURFRCxcblx0XHRwYXlsb2FkOiBwbGF5XG5cdH1cbn07XG5cbmV4cG9ydCBjb25zdCBzdGFydEdhbWUgPSAoKSA9PiB7XG5cdHJldHVybiB7XG5cdFx0dHlwZTogTUFJTi5TVEFSVF9HQU1FXG5cdH07XG59O1xuXG5leHBvcnQgY29uc3Qgc3RvcEdhbWUgPSAoKSA9PiB7XG5cdHJldHVybiB7XG5cdFx0dHlwZTogTUFJTi5TVE9QX0dBTUVcblx0fTtcbn07XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVOZXdHYW1lID0gZ2FtZSA9PiB7XG5cdHJldHVybiB7XG5cdFx0dHlwZTogTUFJTi5DUkVBVEVfTkVXX0dBTUUsXG5cdFx0cGF5bG9hZDogZ2FtZVxuXHR9O1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jbGllbnQvbW9kdWxlcy9tYWluL2FjdGlvbnMuanMiLCJpbXBvcnQge3Rha2VMYXRlc3QsIHB1dCwgY2FsbH0gZnJvbSAncmVkdXgtc2FnYS9lZmZlY3RzJztcbmltcG9ydCB7TUFJTiwgc2F2ZWRHYW1lTG9hZGVkfSBmcm9tICcuL2FjdGlvbnMnO1xuaW1wb3J0IHtjcmVhdGVOZXdQbGF5LCBsb2FkU2F2ZWRQbGF5fSBmcm9tIFwiLi4vc2VydmVyQXBpL3V0aWxzXCI7XG5cbmZ1bmN0aW9uKiBoYW5kbGVDcmVhdGVQbGF5KGFjdGlvbikge1xuXHRjb25zdCBwbGF5ID0geWllbGQgY2FsbChjcmVhdGVOZXdQbGF5LCB7Z2FtZTogYWN0aW9uLnBheWxvYWR9KTtcbn1cblxuZnVuY3Rpb24qIGhhbmRsZUxvYWRTYXZlZEdhbWUoYWN0aW9uKSB7XG5cdGNvbnN0IHBsYXkgPSB5aWVsZCBjYWxsKGxvYWRTYXZlZFBsYXksIGFjdGlvbi5wYXlsb2FkLmlkKTtcblx0eWllbGQgcHV0KHNhdmVkR2FtZUxvYWRlZChwbGF5KSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiBtYWluKCkge1xuXHR5aWVsZCB0YWtlTGF0ZXN0KE1BSU4uQ1JFQVRFX05FV19HQU1FLCBoYW5kbGVDcmVhdGVQbGF5KTtcblx0eWllbGQgdGFrZUxhdGVzdChNQUlOLkxPQURfU0FWRURfR0FNRSwgaGFuZGxlTG9hZFNhdmVkR2FtZSk7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY2xpZW50L21vZHVsZXMvbWFpbi9zYWdhLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==
