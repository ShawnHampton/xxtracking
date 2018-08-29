webpackHotUpdate(0, {
	/***/ './src/client/modules/main/actions.js':
		/*!********************************************!*\
  !*** ./src/client/modules/main/actions.js ***!
  \********************************************/
		/*! exports provided: MAIN, playList, loadSavedGame, startGame, stopGame, createNewGame */
		/*! exports used: MAIN, createNewGame, playList, startGame, stopGame */
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
					return createNewGame;
				}
			);
			var MAIN = {
				PLAY_LIST: 'MAIN_PLAY_LIST',
				START_GAME: 'MAIN_START_GAME',
				STOP_GAME: 'MAIN_STOP_GAME',
				LOAD_SAVED_GAME: 'MAIN_LOAD_SAVED_GAME',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L21vZHVsZXMvbWFpbi9hY3Rpb25zLmpzIl0sIm5hbWVzIjpbIk1BSU4iLCJQTEFZX0xJU1QiLCJTVEFSVF9HQU1FIiwiU1RPUF9HQU1FIiwiTE9BRF9TQVZFRF9HQU1FIiwiQ1JFQVRFX05FV19HQU1FIiwicGxheUxpc3QiLCJwbGF5cyIsInR5cGUiLCJwYXlsb2FkIiwibG9hZFNhdmVkR2FtZSIsInBsYXkiLCJzdGFydEdhbWUiLCJzdG9wR2FtZSIsImNyZWF0ZU5ld0dhbWUiLCJnYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFPLElBQU1BLE9BQU87QUFDbkJDLFlBQVcsZ0JBRFE7QUFFbkJDLGFBQVksaUJBRk87QUFHbkJDLFlBQVcsZ0JBSFE7QUFJbkJDLGtCQUFpQixzQkFKRTtBQUtuQkMsa0JBQWlCO0FBTEUsQ0FBYjs7QUFRQSxJQUFNQyxXQUFXLFNBQVhBLFFBQVcsQ0FBQ0MsS0FBRCxFQUFXO0FBQ2xDLFFBQU87QUFDTkMsUUFBTVIsS0FBS0MsU0FETDtBQUVOUSxXQUFTRjtBQUZILEVBQVA7QUFJQSxDQUxNOztBQU9BLElBQU1HLGdCQUFnQixTQUFoQkEsYUFBZ0IsQ0FBQ0MsSUFBRCxFQUFVO0FBQ3RDLFFBQU87QUFDTkgsUUFBTVIsS0FBS0ksZUFETDtBQUVOSyxXQUFTRTtBQUZILEVBQVA7QUFJQSxDQUxNOztBQU9BLElBQU1DLFlBQVksU0FBWkEsU0FBWSxHQUFNO0FBQzlCLFFBQU87QUFDTkosUUFBTVIsS0FBS0U7QUFETCxFQUFQO0FBR0EsQ0FKTTs7QUFNQSxJQUFNVyxXQUFXLFNBQVhBLFFBQVcsR0FBTTtBQUM3QixRQUFPO0FBQ05MLFFBQU1SLEtBQUtHO0FBREwsRUFBUDtBQUdBLENBSk07O0FBTUEsSUFBTVcsZ0JBQWdCLFNBQWhCQSxhQUFnQixPQUFRO0FBQ3BDLFFBQU87QUFDTk4sUUFBTVIsS0FBS0ssZUFETDtBQUVOSSxXQUFTTTtBQUZILEVBQVA7QUFJQSxDQUxNLEMiLCJmaWxlIjoiMC4zMzdjZjg0OGJhNzYzNjIyZTkzOS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IE1BSU4gPSB7XG5cdFBMQVlfTElTVDogJ01BSU5fUExBWV9MSVNUJyxcblx0U1RBUlRfR0FNRTogJ01BSU5fU1RBUlRfR0FNRScsXG5cdFNUT1BfR0FNRTogJ01BSU5fU1RPUF9HQU1FJyxcblx0TE9BRF9TQVZFRF9HQU1FOiAnTUFJTl9MT0FEX1NBVkVEX0dBTUUnLFxuXHRDUkVBVEVfTkVXX0dBTUU6ICdNQUlOX0NSRUFURV9ORVdfR0FNRSdcbn07XG5cbmV4cG9ydCBjb25zdCBwbGF5TGlzdCA9IChwbGF5cykgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdHR5cGU6IE1BSU4uUExBWV9MSVNULFxuXHRcdHBheWxvYWQ6IHBsYXlzXG5cdH1cbn07XG5cbmV4cG9ydCBjb25zdCBsb2FkU2F2ZWRHYW1lID0gKHBsYXkpID0+IHtcblx0cmV0dXJuIHtcblx0XHR0eXBlOiBNQUlOLkxPQURfU0FWRURfR0FNRSxcblx0XHRwYXlsb2FkOiBwbGF5XG5cdH1cbn07XG5cbmV4cG9ydCBjb25zdCBzdGFydEdhbWUgPSAoKSA9PiB7XG5cdHJldHVybiB7XG5cdFx0dHlwZTogTUFJTi5TVEFSVF9HQU1FXG5cdH07XG59O1xuXG5leHBvcnQgY29uc3Qgc3RvcEdhbWUgPSAoKSA9PiB7XG5cdHJldHVybiB7XG5cdFx0dHlwZTogTUFJTi5TVE9QX0dBTUVcblx0fTtcbn07XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVOZXdHYW1lID0gZ2FtZSA9PiB7XG5cdHJldHVybiB7XG5cdFx0dHlwZTogTUFJTi5DUkVBVEVfTkVXX0dBTUUsXG5cdFx0cGF5bG9hZDogZ2FtZVxuXHR9O1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jbGllbnQvbW9kdWxlcy9tYWluL2FjdGlvbnMuanMiXSwic291cmNlUm9vdCI6IiJ9
