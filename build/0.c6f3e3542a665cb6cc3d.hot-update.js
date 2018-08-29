webpackHotUpdate(0, {
	/***/ './src/client/modules/game/saga.js':
		/*!*****************************************!*\
  !*** ./src/client/modules/game/saga.js ***!
  \*****************************************/
		/*! exports provided: default */
		/*! exports used: default */
		/***/ function(module, __webpack_exports__, __webpack_require__) {
			'use strict';
			/* harmony export (immutable) */ __webpack_exports__['a'] = game;
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(
				/*! babel-runtime/regenerator */ './node_modules/babel-runtime/regenerator/index.js'
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(
				__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__ = __webpack_require__(
				/*! redux-saga/effects */ './node_modules/redux-saga/es/effects.js'
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__main_actions__ = __webpack_require__(
				/*! ../main/actions */ './src/client/modules/main/actions.js'
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__player_actions__ = __webpack_require__(
				/*! ../player/actions */ './src/client/modules/player/actions.js'
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__game_selectors__ = __webpack_require__(
				/*! ../game/selectors */ './src/client/modules/game/selectors.js'
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__actions__ = __webpack_require__(
				/*! ./actions */ './src/client/modules/game/actions.js'
			);
			/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__selectors__ = __webpack_require__(
				/*! ./selectors */ './src/client/modules/game/selectors.js'
			);

			var _marked = /*#__PURE__*/ __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(
					handleStartGame
				),
				_marked2 = /*#__PURE__*/ __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(
					handleNextRound
				),
				_marked3 = /*#__PURE__*/ __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(
					game
				);

			function handleStartGame(action) {
				var players, game, i;
				return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(
					function handleStartGame$(_context) {
						while (1) {
							switch ((_context.prev = _context.next)) {
								case 0:
									_context.next = 2;
									return Object(
										__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__[
											'c' /* select */
										]
									)(
										__WEBPACK_IMPORTED_MODULE_4__game_selectors__[
											'e' /* getPlayers */
										]
									);

								case 2:
									players = _context.sent;
									_context.next = 5;
									return Object(
										__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__[
											'c' /* select */
										]
									)(
										__WEBPACK_IMPORTED_MODULE_4__game_selectors__[
											'b' /* getGame */
										]
									);

								case 5:
									game = _context.sent;
									i = 0;

								case 7:
									if (!(i < players.length)) {
										_context.next = 13;
										break;
									}

									_context.next = 10;
									return Object(
										__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__[
											'b' /* put */
										]
									)(
										Object(
											__WEBPACK_IMPORTED_MODULE_3__player_actions__[
												'd' /* setPersonalMoney */
											]
										)(players[i].name, game.initialPlayerMoney[players.length])
									);

								case 10:
									i++;
									_context.next = 7;
									break;

								case 13:
								case 'end':
									return _context.stop();
							}
						}
					},
					_marked,
					this
				);
			}

			function handleNextRound(action) {
				var play;
				return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(
					function handleNextRound$(_context2) {
						while (1) {
							switch ((_context2.prev = _context2.next)) {
								case 0:
									_context2.next = 2;
									return Object(
										__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__[
											'c' /* select */
										]
									)(
										__WEBPACK_IMPORTED_MODULE_6__selectors__['d' /* getPlay */]
									);

								case 2:
									play = _context2.sent;

									if (!(play.currentPhase === 'OR')) {
										_context2.next = 18;
										break;
									}

									if (!(action.payload === 'OR')) {
										_context2.next = 9;
										break;
									}

									_context2.next = 7;
									return Object(
										__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__[
											'b' /* put */
										]
									)(
										Object(
											__WEBPACK_IMPORTED_MODULE_5__actions__[
												'b' /* changeCurrentOR */
											]
										)(play.currentOR + 1)
									);

								case 7:
									_context2.next = 16;
									break;

								case 9:
									if (!(action.payload === 'SR')) {
										_context2.next = 16;
										break;
									}

									_context2.next = 12;
									return Object(
										__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__[
											'b' /* put */
										]
									)(
										Object(
											__WEBPACK_IMPORTED_MODULE_5__actions__[
												'd' /* changePhase */
											]
										)(action.payload)
									);

								case 12:
									_context2.next = 14;
									return Object(
										__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__[
											'b' /* put */
										]
									)(
										Object(
											__WEBPACK_IMPORTED_MODULE_5__actions__[
												'b' /* changeCurrentOR */
											]
										)(1)
									);

								case 14:
									_context2.next = 16;
									return Object(
										__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__[
											'b' /* put */
										]
									)(
										Object(
											__WEBPACK_IMPORTED_MODULE_5__actions__[
												'c' /* changeCurrentRound */
											]
										)(play.currentRound + 1)
									);

								case 16:
									_context2.next = 22;
									break;

								case 18:
									if (!(play.currentPhase === 'SR')) {
										_context2.next = 22;
										break;
									}

									if (!(action.payload === 'OR')) {
										_context2.next = 22;
										break;
									}

									_context2.next = 22;
									return Object(
										__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__[
											'b' /* put */
										]
									)(
										Object(
											__WEBPACK_IMPORTED_MODULE_5__actions__[
												'd' /* changePhase */
											]
										)(action.payload)
									);

								case 22:
								case 'end':
									return _context2.stop();
							}
						}
					},
					_marked2,
					this
				);
			}

			function game() {
				return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(
					function game$(_context3) {
						while (1) {
							switch ((_context3.prev = _context3.next)) {
								case 0:
									_context3.next = 2;
									return Object(
										__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__[
											'e' /* takeLatest */
										]
									)(
										__WEBPACK_IMPORTED_MODULE_2__main_actions__['a' /* MAIN */]
											.START_GAME,
										handleStartGame
									);

								case 2:
									_context3.next = 4;
									return Object(
										__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__[
											'd' /* takeEvery */
										]
									)(
										__WEBPACK_IMPORTED_MODULE_5__actions__['a' /* GAME */]
											.NEXT_ROUND,
										handleNextRound
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L21vZHVsZXMvZ2FtZS9zYWdhLmpzIl0sIm5hbWVzIjpbImhhbmRsZVN0YXJ0R2FtZSIsImhhbmRsZU5leHRSb3VuZCIsImdhbWUiLCJhY3Rpb24iLCJzZWxlY3QiLCJwbGF5ZXJzIiwiaSIsImxlbmd0aCIsInB1dCIsInNldFBlcnNvbmFsTW9uZXkiLCJuYW1lIiwiaW5pdGlhbFBsYXllck1vbmV5IiwicGxheSIsImN1cnJlbnRQaGFzZSIsInBheWxvYWQiLCJjaGFuZ2VDdXJyZW50T1IiLCJjdXJyZW50T1IiLCJjaGFuZ2VQaGFzZSIsImNoYW5nZUN1cnJlbnRSb3VuZCIsImN1cnJlbnRSb3VuZCIsInRha2VMYXRlc3QiLCJNQUlOIiwiU1RBUlRfR0FNRSIsInRha2VFdmVyeSIsIkdBTUUiLCJORVhUX1JPVU5EIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tHQVlVQSxlO21HQVdBQyxlO21HQWtCZUMsSTs7QUF6Q3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFNQTs7QUFFQSxTQUFVRixlQUFWLENBQTBCRyxNQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQ3VCLDBFQUFBQyxDQUFPLG1FQUFQLENBRHZCOztBQUFBO0FBQ09DLFlBRFA7QUFBQTtBQUFBLFlBRW9CLDBFQUFBRCxDQUFPLGdFQUFQLENBRnBCOztBQUFBO0FBRU9GLFNBRlA7QUFJVUksTUFKVixHQUljLENBSmQ7O0FBQUE7QUFBQSxXQUlpQkEsSUFBSUQsUUFBUUUsTUFKN0I7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQSxZQUtRLHVFQUFBQyxDQUNMLGlGQUFBQyxDQUFpQkosUUFBUUMsQ0FBUixFQUFXSSxJQUE1QixFQUFrQ1IsS0FBS1Msa0JBQUwsQ0FBd0JOLFFBQVFFLE1BQWhDLENBQWxDLENBREssQ0FMUjs7QUFBQTtBQUlxQ0QsUUFKckM7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQVdBLFNBQVVMLGVBQVYsQ0FBMEJFLE1BQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFDb0IsMEVBQUFDLENBQU8sMkRBQVAsQ0FEcEI7O0FBQUE7QUFDT1EsU0FEUDs7QUFBQSxXQUdLQSxLQUFLQyxZQUFMLEtBQXNCLElBSDNCO0FBQUE7QUFBQTtBQUFBOztBQUFBLFdBSU1WLE9BQU9XLE9BQVAsS0FBbUIsSUFKekI7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQSxZQUtTLHVFQUFBTixDQUFJLHlFQUFBTyxDQUFnQkgsS0FBS0ksU0FBTCxHQUFpQixDQUFqQyxDQUFKLENBTFQ7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUEsV0FNYWIsT0FBT1csT0FBUCxLQUFtQixJQU5oQztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBLFlBT1MsdUVBQUFOLENBQUkscUVBQUFTLENBQVlkLE9BQU9XLE9BQW5CLENBQUosQ0FQVDs7QUFBQTtBQUFBO0FBQUEsWUFRUyx1RUFBQU4sQ0FBSSx5RUFBQU8sQ0FBZ0IsQ0FBaEIsQ0FBSixDQVJUOztBQUFBO0FBQUE7QUFBQSxZQVNTLHVFQUFBUCxDQUFJLDRFQUFBVSxDQUFtQk4sS0FBS08sWUFBTCxHQUFvQixDQUF2QyxDQUFKLENBVFQ7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUEsV0FXWVAsS0FBS0MsWUFBTCxLQUFzQixJQVhsQztBQUFBO0FBQUE7QUFBQTs7QUFBQSxXQVlNVixPQUFPVyxPQUFQLEtBQW1CLElBWnpCO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUEsWUFhUyx1RUFBQU4sQ0FBSSxxRUFBQVMsQ0FBWWQsT0FBT1csT0FBbkIsQ0FBSixDQWJUOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQWtCZSxTQUFVWixJQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQ1IsOEVBQUFrQixDQUFXLDJEQUFBQyxDQUFLQyxVQUFoQixFQUE0QnRCLGVBQTVCLENBRFE7O0FBQUE7QUFBQTtBQUFBLFlBRVIsNkVBQUF1QixDQUFVLHNEQUFBQyxDQUFLQyxVQUFmLEVBQTJCeEIsZUFBM0IsQ0FGUTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxDIiwiZmlsZSI6IjAuYzZmM2UzNTQyYTY2NWNiNmNjM2QuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHRha2VMYXRlc3QsIHRha2VFdmVyeSwgcHV0LCBzZWxlY3QgfSBmcm9tICdyZWR1eC1zYWdhL2VmZmVjdHMnO1xuaW1wb3J0IHsgTUFJTiB9IGZyb20gJy4uL21haW4vYWN0aW9ucyc7XG5pbXBvcnQgeyBzZXRQZXJzb25hbE1vbmV5IH0gZnJvbSAnLi4vcGxheWVyL2FjdGlvbnMnO1xuaW1wb3J0IHsgZ2V0R2FtZSwgZ2V0UGxheWVycyB9IGZyb20gJy4uL2dhbWUvc2VsZWN0b3JzJztcbmltcG9ydCB7XG5cdGNoYW5nZUN1cnJlbnRPUixcblx0Y2hhbmdlQ3VycmVudFJvdW5kLFxuXHRjaGFuZ2VQaGFzZSxcblx0R0FNRVxufSBmcm9tICcuL2FjdGlvbnMnO1xuaW1wb3J0IHsgZ2V0UGxheSB9IGZyb20gJy4vc2VsZWN0b3JzJztcblxuZnVuY3Rpb24qIGhhbmRsZVN0YXJ0R2FtZShhY3Rpb24pIHtcblx0Y29uc3QgcGxheWVycyA9IHlpZWxkIHNlbGVjdChnZXRQbGF5ZXJzKTtcblx0Y29uc3QgZ2FtZSA9IHlpZWxkIHNlbGVjdChnZXRHYW1lKTtcblxuXHRmb3IgKGxldCBpID0gMDsgaSA8IHBsYXllcnMubGVuZ3RoOyBpKyspIHtcblx0XHR5aWVsZCBwdXQoXG5cdFx0XHRzZXRQZXJzb25hbE1vbmV5KHBsYXllcnNbaV0ubmFtZSwgZ2FtZS5pbml0aWFsUGxheWVyTW9uZXlbcGxheWVycy5sZW5ndGhdKVxuXHRcdCk7XG5cdH1cbn1cblxuZnVuY3Rpb24qIGhhbmRsZU5leHRSb3VuZChhY3Rpb24pIHtcblx0Y29uc3QgcGxheSA9IHlpZWxkIHNlbGVjdChnZXRQbGF5KTtcblxuXHRpZiAocGxheS5jdXJyZW50UGhhc2UgPT09ICdPUicpIHtcblx0XHRpZiAoYWN0aW9uLnBheWxvYWQgPT09ICdPUicpIHtcblx0XHRcdHlpZWxkIHB1dChjaGFuZ2VDdXJyZW50T1IocGxheS5jdXJyZW50T1IgKyAxKSk7XG5cdFx0fSBlbHNlIGlmIChhY3Rpb24ucGF5bG9hZCA9PT0gJ1NSJykge1xuXHRcdFx0eWllbGQgcHV0KGNoYW5nZVBoYXNlKGFjdGlvbi5wYXlsb2FkKSk7XG5cdFx0XHR5aWVsZCBwdXQoY2hhbmdlQ3VycmVudE9SKDEpKTtcblx0XHRcdHlpZWxkIHB1dChjaGFuZ2VDdXJyZW50Um91bmQocGxheS5jdXJyZW50Um91bmQgKyAxKSk7XG5cdFx0fVxuXHR9IGVsc2UgaWYgKHBsYXkuY3VycmVudFBoYXNlID09PSAnU1InKSB7XG5cdFx0aWYgKGFjdGlvbi5wYXlsb2FkID09PSAnT1InKSB7XG5cdFx0XHR5aWVsZCBwdXQoY2hhbmdlUGhhc2UoYWN0aW9uLnBheWxvYWQpKTtcblx0XHR9XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIGdhbWUoKSB7XG5cdHlpZWxkIHRha2VMYXRlc3QoTUFJTi5TVEFSVF9HQU1FLCBoYW5kbGVTdGFydEdhbWUpO1xuXHR5aWVsZCB0YWtlRXZlcnkoR0FNRS5ORVhUX1JPVU5ELCBoYW5kbGVOZXh0Um91bmQpO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NsaWVudC9tb2R1bGVzL2dhbWUvc2FnYS5qcyJdLCJzb3VyY2VSb290IjoiIn0=
