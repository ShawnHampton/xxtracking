webpackHotUpdate(0, {
	/***/ './src/client/modules/main/actions.js':
		/*!********************************************!*\
  !*** ./src/client/modules/main/actions.js ***!
  \********************************************/
		/*! exports provided: MAIN, playList, startGame, stopGame, chooseGame */
		/*! exports used: MAIN, chooseGame, startGame, stopGame */
		/***/ function(module, __webpack_exports__, __webpack_require__) {
			'use strict';
			/* harmony export (binding) */ __webpack_require__.d(
				__webpack_exports__,
				'a',
				function() {
					return MAIN;
				}
			);
			/* unused harmony export playList */
			/* harmony export (binding) */ __webpack_require__.d(
				__webpack_exports__,
				'c',
				function() {
					return startGame;
				}
			);
			/* harmony export (binding) */ __webpack_require__.d(
				__webpack_exports__,
				'd',
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
				CHOOSE_GAME: 'MAIN_CHOOSE_GAME'
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
					type: MAIN.CHOOSE_GAME,
					payload: game
				};
			};

			/***/
		}
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L21vZHVsZXMvbWFpbi9hY3Rpb25zLmpzIl0sIm5hbWVzIjpbIk1BSU4iLCJQTEFZX0xJU1QiLCJTVEFSVF9HQU1FIiwiU1RPUF9HQU1FIiwiQ0hPT1NFX0dBTUUiLCJwbGF5TGlzdCIsInBsYXlzIiwidHlwZSIsInBheWxvYWQiLCJzdGFydEdhbWUiLCJzdG9wR2FtZSIsImNob29zZUdhbWUiLCJnYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQU8sSUFBTUEsT0FBTztBQUNuQkMsWUFBVyxnQkFEUTtBQUVuQkMsYUFBWSxpQkFGTztBQUduQkMsWUFBVyxnQkFIUTtBQUluQkMsY0FBYTtBQUpNLENBQWI7O0FBT0EsSUFBTUMsV0FBVyxTQUFYQSxRQUFXLENBQUNDLEtBQUQsRUFBVztBQUNsQyxRQUFPO0FBQ05DLFFBQU1QLEtBQUtDLFNBREw7QUFFTk8sV0FBU0Y7QUFGSCxFQUFQO0FBSUEsQ0FMTTs7QUFPQSxJQUFNRyxZQUFZLFNBQVpBLFNBQVksR0FBTTtBQUM5QixRQUFPO0FBQ05GLFFBQU1QLEtBQUtFO0FBREwsRUFBUDtBQUdBLENBSk07O0FBTUEsSUFBTVEsV0FBVyxTQUFYQSxRQUFXLEdBQU07QUFDN0IsUUFBTztBQUNOSCxRQUFNUCxLQUFLRztBQURMLEVBQVA7QUFHQSxDQUpNOztBQU1BLElBQU1RLGFBQWEsU0FBYkEsVUFBYSxPQUFRO0FBQ2pDLFFBQU87QUFDTkosUUFBTVAsS0FBS0ksV0FETDtBQUVOSSxXQUFTSTtBQUZILEVBQVA7QUFJQSxDQUxNLEMiLCJmaWxlIjoiMC5hZTc4N2MxOTU5YjYyZTYwNDU5OC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IE1BSU4gPSB7XG5cdFBMQVlfTElTVDogJ01BSU5fUExBWV9MSVNUJyxcblx0U1RBUlRfR0FNRTogJ01BSU5fU1RBUlRfR0FNRScsXG5cdFNUT1BfR0FNRTogJ01BSU5fU1RPUF9HQU1FJyxcblx0Q0hPT1NFX0dBTUU6ICdNQUlOX0NIT09TRV9HQU1FJ1xufTtcblxuZXhwb3J0IGNvbnN0IHBsYXlMaXN0ID0gKHBsYXlzKSA9PiB7XG5cdHJldHVybiB7XG5cdFx0dHlwZTogTUFJTi5QTEFZX0xJU1QsXG5cdFx0cGF5bG9hZDogcGxheXNcblx0fVxufTtcblxuZXhwb3J0IGNvbnN0IHN0YXJ0R2FtZSA9ICgpID0+IHtcblx0cmV0dXJuIHtcblx0XHR0eXBlOiBNQUlOLlNUQVJUX0dBTUVcblx0fTtcbn07XG5cbmV4cG9ydCBjb25zdCBzdG9wR2FtZSA9ICgpID0+IHtcblx0cmV0dXJuIHtcblx0XHR0eXBlOiBNQUlOLlNUT1BfR0FNRVxuXHR9O1xufTtcblxuZXhwb3J0IGNvbnN0IGNob29zZUdhbWUgPSBnYW1lID0+IHtcblx0cmV0dXJuIHtcblx0XHR0eXBlOiBNQUlOLkNIT09TRV9HQU1FLFxuXHRcdHBheWxvYWQ6IGdhbWVcblx0fTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY2xpZW50L21vZHVsZXMvbWFpbi9hY3Rpb25zLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==
