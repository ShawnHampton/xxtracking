webpackHotUpdate(0, {
	/***/ './src/client/modules/main/actions.js':
		/*!********************************************!*\
  !*** ./src/client/modules/main/actions.js ***!
  \********************************************/
		/*! exports provided: MAIN, saveGame, playList, loadSavedGame, gameLoaded, startGame, stopGame, createNewGame */
		/*! exports used: MAIN, createNewGame, gameLoaded, loadSavedGame, playList, startGame, stopGame */
		/***/ function(module, __webpack_exports__, __webpack_require__) {
			'use strict';
			/* harmony export (binding) */ __webpack_require__.d(
				__webpack_exports__,
				'a',
				function() {
					return MAIN;
				}
			);
			/* unused harmony export saveGame */
			/* harmony export (binding) */ __webpack_require__.d(
				__webpack_exports__,
				'e',
				function() {
					return playList;
				}
			);
			/* harmony export (binding) */ __webpack_require__.d(
				__webpack_exports__,
				'd',
				function() {
					return loadSavedGame;
				}
			);
			/* harmony export (binding) */ __webpack_require__.d(
				__webpack_exports__,
				'c',
				function() {
					return gameLoaded;
				}
			);
			/* harmony export (binding) */ __webpack_require__.d(
				__webpack_exports__,
				'f',
				function() {
					return startGame;
				}
			);
			/* harmony export (binding) */ __webpack_require__.d(
				__webpack_exports__,
				'g',
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
				SAVE_GAME: 'MAIN_SAVE_GAME',
				CREATE_NEW_GAME: 'MAIN_CREATE_NEW_GAME'
			};

			var saveGame = function saveGame(play) {
				return {
					type: MAIN.SAVE_GAME,
					payload: play
				};
			};

			var playList = function playList(plays) {
				return {
					type: MAIN.PLAY_LIST,
					payload: plays
				};
			};

			var loadSavedGame = function loadSavedGame(playId) {
				return {
					type: MAIN.LOAD_SAVED_GAME,
					payload: playId
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
		}
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L21vZHVsZXMvbWFpbi9hY3Rpb25zLmpzIl0sIm5hbWVzIjpbIk1BSU4iLCJQTEFZX0xJU1QiLCJTVEFSVF9HQU1FIiwiU1RPUF9HQU1FIiwiTE9BRF9TQVZFRF9HQU1FIiwiR0FNRV9MT0FERUQiLCJTQVZFX0dBTUUiLCJDUkVBVEVfTkVXX0dBTUUiLCJzYXZlR2FtZSIsInBsYXkiLCJ0eXBlIiwicGF5bG9hZCIsInBsYXlMaXN0IiwicGxheXMiLCJsb2FkU2F2ZWRHYW1lIiwicGxheUlkIiwiZ2FtZUxvYWRlZCIsInN0YXJ0R2FtZSIsInN0b3BHYW1lIiwiY3JlYXRlTmV3R2FtZSIsImdhbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTyxJQUFNQSxPQUFPO0FBQ25CQyxZQUFXLGdCQURRO0FBRW5CQyxhQUFZLGlCQUZPO0FBR25CQyxZQUFXLGdCQUhRO0FBSW5CQyxrQkFBaUIsc0JBSkU7QUFLbkJDLGNBQWEsa0JBTE07QUFNbkJDLFlBQVcsZ0JBTlE7QUFPbkJDLGtCQUFpQjtBQVBFLENBQWI7O0FBVUEsSUFBTUMsV0FBVyxTQUFYQSxRQUFXLENBQUNDLElBQUQsRUFBVTtBQUNqQyxRQUFPO0FBQ05DLFFBQU1WLEtBQUtNLFNBREw7QUFFTkssV0FBU0Y7QUFGSCxFQUFQO0FBSUEsQ0FMTTs7QUFPQSxJQUFNRyxXQUFXLFNBQVhBLFFBQVcsQ0FBQ0MsS0FBRCxFQUFXO0FBQ2xDLFFBQU87QUFDTkgsUUFBTVYsS0FBS0MsU0FETDtBQUVOVSxXQUFTRTtBQUZILEVBQVA7QUFJQSxDQUxNOztBQU9BLElBQU1DLGdCQUFnQixTQUFoQkEsYUFBZ0IsQ0FBQ0MsTUFBRCxFQUFZO0FBQ3hDLFFBQU87QUFDTkwsUUFBTVYsS0FBS0ksZUFETDtBQUVOTyxXQUFTSTtBQUZILEVBQVA7QUFJQSxDQUxNOztBQU9BLElBQU1DLGFBQWEsU0FBYkEsVUFBYSxDQUFDUCxJQUFELEVBQVU7QUFDbkMsUUFBTztBQUNOQyxRQUFNVixLQUFLSyxXQURMO0FBRU5NLFdBQVNGO0FBRkgsRUFBUDtBQUlBLENBTE07O0FBT0EsSUFBTVEsWUFBWSxTQUFaQSxTQUFZLEdBQU07QUFDOUIsUUFBTztBQUNOUCxRQUFNVixLQUFLRTtBQURMLEVBQVA7QUFHQSxDQUpNOztBQU1BLElBQU1nQixXQUFXLFNBQVhBLFFBQVcsR0FBTTtBQUM3QixRQUFPO0FBQ05SLFFBQU1WLEtBQUtHO0FBREwsRUFBUDtBQUdBLENBSk07O0FBTUEsSUFBTWdCLGdCQUFnQixTQUFoQkEsYUFBZ0IsT0FBUTtBQUNwQyxRQUFPO0FBQ05ULFFBQU1WLEtBQUtPLGVBREw7QUFFTkksV0FBU1M7QUFGSCxFQUFQO0FBSUEsQ0FMTSxDIiwiZmlsZSI6IjAuZWZmMzUwMDcyNGRmYmRkNTJlNWIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBNQUlOID0ge1xuXHRQTEFZX0xJU1Q6ICdNQUlOX1BMQVlfTElTVCcsXG5cdFNUQVJUX0dBTUU6ICdNQUlOX1NUQVJUX0dBTUUnLFxuXHRTVE9QX0dBTUU6ICdNQUlOX1NUT1BfR0FNRScsXG5cdExPQURfU0FWRURfR0FNRTogJ01BSU5fTE9BRF9TQVZFRF9HQU1FJyxcblx0R0FNRV9MT0FERUQ6ICdNQUlOX0dBTUVfTE9BREVEJyxcblx0U0FWRV9HQU1FOiAnTUFJTl9TQVZFX0dBTUUnLFxuXHRDUkVBVEVfTkVXX0dBTUU6ICdNQUlOX0NSRUFURV9ORVdfR0FNRSdcbn07XG5cbmV4cG9ydCBjb25zdCBzYXZlR2FtZSA9IChwbGF5KSA9PiB7XG5cdHJldHVybiB7XG5cdFx0dHlwZTogTUFJTi5TQVZFX0dBTUUsXG5cdFx0cGF5bG9hZDogcGxheVxuXHR9XG59O1xuXG5leHBvcnQgY29uc3QgcGxheUxpc3QgPSAocGxheXMpID0+IHtcblx0cmV0dXJuIHtcblx0XHR0eXBlOiBNQUlOLlBMQVlfTElTVCxcblx0XHRwYXlsb2FkOiBwbGF5c1xuXHR9XG59O1xuXG5leHBvcnQgY29uc3QgbG9hZFNhdmVkR2FtZSA9IChwbGF5SWQpID0+IHtcblx0cmV0dXJuIHtcblx0XHR0eXBlOiBNQUlOLkxPQURfU0FWRURfR0FNRSxcblx0XHRwYXlsb2FkOiBwbGF5SWRcblx0fVxufTtcblxuZXhwb3J0IGNvbnN0IGdhbWVMb2FkZWQgPSAocGxheSkgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdHR5cGU6IE1BSU4uR0FNRV9MT0FERUQsXG5cdFx0cGF5bG9hZDogcGxheVxuXHR9XG59O1xuXG5leHBvcnQgY29uc3Qgc3RhcnRHYW1lID0gKCkgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdHR5cGU6IE1BSU4uU1RBUlRfR0FNRVxuXHR9O1xufTtcblxuZXhwb3J0IGNvbnN0IHN0b3BHYW1lID0gKCkgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdHR5cGU6IE1BSU4uU1RPUF9HQU1FXG5cdH07XG59O1xuXG5leHBvcnQgY29uc3QgY3JlYXRlTmV3R2FtZSA9IGdhbWUgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdHR5cGU6IE1BSU4uQ1JFQVRFX05FV19HQU1FLFxuXHRcdHBheWxvYWQ6IGdhbWVcblx0fTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY2xpZW50L21vZHVsZXMvbWFpbi9hY3Rpb25zLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==
