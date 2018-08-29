webpackHotUpdate(0, {
	/***/ './src/client/modules/serverApi/utils.js':
		/*!***********************************************!*\
  !*** ./src/client/modules/serverApi/utils.js ***!
  \***********************************************/
		/*! exports provided: buildRoute, createNewPlay, listPlays, authenticateToServer */
		/*! exports used: createNewPlay, listPlays */
		/***/ function(module, __webpack_exports__, __webpack_require__) {
			'use strict';
			/* unused harmony export buildRoute */
			/* harmony export (binding) */ __webpack_require__.d(
				__webpack_exports__,
				'a',
				function() {
					return createNewPlay;
				}
			);
			/* harmony export (binding) */ __webpack_require__.d(
				__webpack_exports__,
				'b',
				function() {
					return listPlays;
				}
			);
			/* unused harmony export authenticateToServer */
			/**
			 * TODO: Need to figure out the right way to configure this
			 *
			 * @returns {string} The root route
			 */
			var getRootRoute = function getRootRoute() {
				return '/api';
			};

			/**
			 * TODO: Need to figure out the right way to configure this
			 *
			 * @param {string} route The rest of the path
			 * @returns {string} The root route
			 */
			var buildRoute = function buildRoute(route) {
				return getRootRoute() + '/' + route;
			};

			/**
			 * Helper method to make GET calls.
			 *
			 * @param {string} route The rest of the path
			 * @returns {Promise<any>} Promise to be run
			 */
			var fetchData = function fetchData(route) {
				var root = getRootRoute();

				return fetch(root + '/' + route, {
					method: 'GET',
					credentials: 'same-origin',
					headers: {
						'Content-Type': 'application/json'
					}
				}).then(function(response) {
					return response.json();
				});
			};

			/**
			 * Helper method to make POST calls
			 *
			 * @param {string} route The rest of the route
			 * @param {object} body The body of the call
			 * @returns {Promise<any>} Promise to be run
			 */
			var postData = function postData(route, body) {
				var root = getRootRoute();

				return fetch(root + '/' + route, {
					method: 'POST',
					credentials: 'same-origin',
					headers: {
						'Content-Type': 'application/json'
					},
					body: JSON.stringify(body)
				}).then(function(response) {
					return response.json();
				});
			};

			var createNewPlay = function createNewPlay(newPlay) {
				return new Promise(function(resolve) {
					var data = postData('plays', newPlay);
					resolve(data);
				});
			};

			var listPlays = function listPlays() {
				return new Promise(function(resolve) {
					var data = fetchData('plays');
					resolve(data);
				});
			};

			/**
			 * Causes a login attempt to the server
			 *
			 * @param {string} username the username
			 * @param {string} password the password
			 * @returns {Promise<any>} Promise to be run
			 */
			var authenticateToServer = function authenticateToServer(
				username,
				password
			) {
				var root = getRootRoute();

				return fetch(root + '/auth/login', {
					method: 'POST',
					credentials: 'same-origin',
					headers: {
						'Content-Type': 'application/json'
					},
					body: JSON.stringify({
						username: username,
						password: password
					})
				}).then(function(response) {
					if (response.ok) {
						return response.json().then(function(json) {
							console.log('json', json);
							return Promise.resolve({
								body: json,
								status: response.status,
								statusText: response.statusText
							});
						});
					}

					return Promise.reject({
						status: response.status,
						statusText: response.statusText
					});
				});
			};

			/***/
		}
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L21vZHVsZXMvc2VydmVyQXBpL3V0aWxzLmpzIl0sIm5hbWVzIjpbImdldFJvb3RSb3V0ZSIsImJ1aWxkUm91dGUiLCJyb3V0ZSIsImZldGNoRGF0YSIsInJvb3QiLCJmZXRjaCIsIm1ldGhvZCIsImNyZWRlbnRpYWxzIiwiaGVhZGVycyIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJwb3N0RGF0YSIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiY3JlYXRlTmV3UGxheSIsIm5ld1BsYXkiLCJQcm9taXNlIiwiZGF0YSIsInJlc29sdmUiLCJsaXN0UGxheXMiLCJhdXRoZW50aWNhdGVUb1NlcnZlciIsInVzZXJuYW1lIiwicGFzc3dvcmQiLCJvayIsImNvbnNvbGUiLCJsb2ciLCJzdGF0dXMiLCJzdGF0dXNUZXh0IiwicmVqZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUE7Ozs7O0FBS0EsSUFBTUEsZUFBZSxTQUFmQSxZQUFlLEdBQU07QUFDMUIsUUFBTyxNQUFQO0FBQ0EsQ0FGRDs7QUFJQTs7Ozs7O0FBTU8sSUFBTUMsYUFBYSxTQUFiQSxVQUFhLFFBQVM7QUFDbEMsUUFBVUQsY0FBVixTQUE0QkUsS0FBNUI7QUFDQSxDQUZNOztBQUlQOzs7Ozs7QUFNQSxJQUFNQyxZQUFZLFNBQVpBLFNBQVksQ0FBQ0QsS0FBRCxFQUFXO0FBQzVCLEtBQUlFLE9BQU9KLGNBQVg7O0FBRUEsUUFBT0ssTUFBU0QsSUFBVCxTQUFpQkYsS0FBakIsRUFBMEI7QUFDaENJLFVBQVEsS0FEd0I7QUFFaENDLGVBQWEsYUFGbUI7QUFHaENDLFdBQVM7QUFDUixtQkFBZ0I7QUFEUjtBQUh1QixFQUExQixFQU1KQyxJQU5JLENBTUMsb0JBQVk7QUFDbkIsU0FBT0MsU0FBU0MsSUFBVCxFQUFQO0FBQ0EsRUFSTSxDQUFQO0FBU0EsQ0FaRDs7QUFjQTs7Ozs7OztBQU9BLElBQU1DLFdBQVcsU0FBWEEsUUFBVyxDQUFDVixLQUFELEVBQVFXLElBQVIsRUFBaUI7QUFDakMsS0FBTVQsT0FBT0osY0FBYjs7QUFFQSxRQUFPSyxNQUFTRCxJQUFULFNBQWlCRixLQUFqQixFQUEwQjtBQUNoQ0ksVUFBUSxNQUR3QjtBQUVoQ0MsZUFBYSxhQUZtQjtBQUdoQ0MsV0FBUztBQUNSLG1CQUFnQjtBQURSLEdBSHVCO0FBTWhDSyxRQUFNQyxLQUFLQyxTQUFMLENBQWVGLElBQWY7QUFOMEIsRUFBMUIsRUFPSkosSUFQSSxDQU9DLG9CQUFZO0FBQ25CLFNBQU9DLFNBQVNDLElBQVQsRUFBUDtBQUNBLEVBVE0sQ0FBUDtBQVVBLENBYkQ7O0FBZU8sSUFBTUssZ0JBQWdCLFNBQWhCQSxhQUFnQixDQUFDQyxPQUFELEVBQWE7QUFDekMsUUFBTyxJQUFJQyxPQUFKLENBQVksbUJBQVc7QUFDN0IsTUFBTUMsT0FBT1AsU0FBUyxPQUFULEVBQWtCSyxPQUFsQixDQUFiO0FBQ0FHLFVBQVFELElBQVI7QUFDQSxFQUhNLENBQVA7QUFJQSxDQUxNOztBQU9BLElBQU1FLFlBQVksU0FBWkEsU0FBWSxHQUFNO0FBQzlCLFFBQU8sSUFBSUgsT0FBSixDQUFZLG1CQUFXO0FBQzdCLE1BQU1DLE9BQU9oQixVQUFVLE9BQVYsQ0FBYjtBQUNBaUIsVUFBUUQsSUFBUjtBQUNBLEVBSE0sQ0FBUDtBQUlBLENBTE07O0FBT1A7Ozs7Ozs7QUFPTyxJQUFNRyx1QkFBdUIsU0FBdkJBLG9CQUF1QixDQUFDQyxRQUFELEVBQVdDLFFBQVgsRUFBd0I7QUFDM0QsS0FBTXBCLE9BQU9KLGNBQWI7O0FBRUEsUUFBT0ssTUFBU0QsSUFBVCxrQkFBNEI7QUFDbENFLFVBQVEsTUFEMEI7QUFFbENDLGVBQWEsYUFGcUI7QUFHbENDLFdBQVM7QUFDUixtQkFBZ0I7QUFEUixHQUh5QjtBQU1sQ0ssUUFBTUMsS0FBS0MsU0FBTCxDQUFlO0FBQ3BCUSxxQkFEb0I7QUFFcEJDO0FBRm9CLEdBQWY7QUFONEIsRUFBNUIsRUFVSmYsSUFWSSxDQVVDLG9CQUFZO0FBQ25CLE1BQUlDLFNBQVNlLEVBQWIsRUFBaUI7QUFDaEIsVUFBT2YsU0FBU0MsSUFBVCxHQUFnQkYsSUFBaEIsQ0FBcUIsZ0JBQVE7QUFDbkNpQixZQUFRQyxHQUFSLENBQVksTUFBWixFQUFvQmhCLElBQXBCO0FBQ0EsV0FBT08sUUFBUUUsT0FBUixDQUFnQjtBQUN0QlAsV0FBTUYsSUFEZ0I7QUFFdEJpQixhQUFRbEIsU0FBU2tCLE1BRks7QUFHdEJDLGlCQUFZbkIsU0FBU21CO0FBSEMsS0FBaEIsQ0FBUDtBQUtBLElBUE0sQ0FBUDtBQVFBOztBQUVELFNBQU9YLFFBQVFZLE1BQVIsQ0FBZTtBQUNyQkYsV0FBUWxCLFNBQVNrQixNQURJO0FBRXJCQyxlQUFZbkIsU0FBU21CO0FBRkEsR0FBZixDQUFQO0FBSUEsRUExQk0sQ0FBUDtBQTJCQSxDQTlCTSxDIiwiZmlsZSI6IjAuNTMyNDVmYTIzMjllNzE2NjQzMGIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVE9ETzogTmVlZCB0byBmaWd1cmUgb3V0IHRoZSByaWdodCB3YXkgdG8gY29uZmlndXJlIHRoaXNcbiAqXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgcm9vdCByb3V0ZVxuICovXG5jb25zdCBnZXRSb290Um91dGUgPSAoKSA9PiB7XG5cdHJldHVybiAnL2FwaSc7XG59O1xuXG4vKipcbiAqIFRPRE86IE5lZWQgdG8gZmlndXJlIG91dCB0aGUgcmlnaHQgd2F5IHRvIGNvbmZpZ3VyZSB0aGlzXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHJvdXRlIFRoZSByZXN0IG9mIHRoZSBwYXRoXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgcm9vdCByb3V0ZVxuICovXG5leHBvcnQgY29uc3QgYnVpbGRSb3V0ZSA9IHJvdXRlID0+IHtcblx0cmV0dXJuIGAke2dldFJvb3RSb3V0ZSgpfS8ke3JvdXRlfWA7XG59O1xuXG4vKipcbiAqIEhlbHBlciBtZXRob2QgdG8gbWFrZSBHRVQgY2FsbHMuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHJvdXRlIFRoZSByZXN0IG9mIHRoZSBwYXRoXG4gKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSBQcm9taXNlIHRvIGJlIHJ1blxuICovXG5jb25zdCBmZXRjaERhdGEgPSAocm91dGUpID0+IHtcblx0bGV0IHJvb3QgPSBnZXRSb290Um91dGUoKTtcblxuXHRyZXR1cm4gZmV0Y2goYCR7cm9vdH0vJHtyb3V0ZX1gLCB7XG5cdFx0bWV0aG9kOiAnR0VUJyxcblx0XHRjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJyxcblx0XHRoZWFkZXJzOiB7XG5cdFx0XHQnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG5cdFx0fVxuXHR9KS50aGVuKHJlc3BvbnNlID0+IHtcblx0XHRyZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuXHR9KTtcbn07XG5cbi8qKlxuICogSGVscGVyIG1ldGhvZCB0byBtYWtlIFBPU1QgY2FsbHNcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gcm91dGUgVGhlIHJlc3Qgb2YgdGhlIHJvdXRlXG4gKiBAcGFyYW0ge29iamVjdH0gYm9keSBUaGUgYm9keSBvZiB0aGUgY2FsbFxuICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gUHJvbWlzZSB0byBiZSBydW5cbiAqL1xuY29uc3QgcG9zdERhdGEgPSAocm91dGUsIGJvZHkpID0+IHtcblx0Y29uc3Qgcm9vdCA9IGdldFJvb3RSb3V0ZSgpO1xuXG5cdHJldHVybiBmZXRjaChgJHtyb290fS8ke3JvdXRlfWAsIHtcblx0XHRtZXRob2Q6ICdQT1NUJyxcblx0XHRjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJyxcblx0XHRoZWFkZXJzOiB7XG5cdFx0XHQnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG5cdFx0fSxcblx0XHRib2R5OiBKU09OLnN0cmluZ2lmeShib2R5KVxuXHR9KS50aGVuKHJlc3BvbnNlID0+IHtcblx0XHRyZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuXHR9KTtcbn07XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVOZXdQbGF5ID0gKG5ld1BsYXkpID0+IHtcblx0cmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuXHRcdGNvbnN0IGRhdGEgPSBwb3N0RGF0YSgncGxheXMnLCBuZXdQbGF5KTtcblx0XHRyZXNvbHZlKGRhdGEpO1xuXHR9KTtcbn07XG5cbmV4cG9ydCBjb25zdCBsaXN0UGxheXMgPSAoKSA9PiB7XG5cdHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcblx0XHRjb25zdCBkYXRhID0gZmV0Y2hEYXRhKCdwbGF5cycpO1xuXHRcdHJlc29sdmUoZGF0YSk7XG5cdH0pO1xufTtcblxuLyoqXG4gKiBDYXVzZXMgYSBsb2dpbiBhdHRlbXB0IHRvIHRoZSBzZXJ2ZXJcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdXNlcm5hbWUgdGhlIHVzZXJuYW1lXG4gKiBAcGFyYW0ge3N0cmluZ30gcGFzc3dvcmQgdGhlIHBhc3N3b3JkXG4gKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSBQcm9taXNlIHRvIGJlIHJ1blxuICovXG5leHBvcnQgY29uc3QgYXV0aGVudGljYXRlVG9TZXJ2ZXIgPSAodXNlcm5hbWUsIHBhc3N3b3JkKSA9PiB7XG5cdGNvbnN0IHJvb3QgPSBnZXRSb290Um91dGUoKTtcblxuXHRyZXR1cm4gZmV0Y2goYCR7cm9vdH0vYXV0aC9sb2dpbmAsIHtcblx0XHRtZXRob2Q6ICdQT1NUJyxcblx0XHRjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJyxcblx0XHRoZWFkZXJzOiB7XG5cdFx0XHQnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG5cdFx0fSxcblx0XHRib2R5OiBKU09OLnN0cmluZ2lmeSh7XG5cdFx0XHR1c2VybmFtZSxcblx0XHRcdHBhc3N3b3JkXG5cdFx0fSlcblx0fSkudGhlbihyZXNwb25zZSA9PiB7XG5cdFx0aWYgKHJlc3BvbnNlLm9rKSB7XG5cdFx0XHRyZXR1cm4gcmVzcG9uc2UuanNvbigpLnRoZW4oanNvbiA9PiB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKCdqc29uJywganNvbik7XG5cdFx0XHRcdHJldHVybiBQcm9taXNlLnJlc29sdmUoe1xuXHRcdFx0XHRcdGJvZHk6IGpzb24sXG5cdFx0XHRcdFx0c3RhdHVzOiByZXNwb25zZS5zdGF0dXMsXG5cdFx0XHRcdFx0c3RhdHVzVGV4dDogcmVzcG9uc2Uuc3RhdHVzVGV4dFxuXHRcdFx0XHR9KTtcblx0XHRcdH0pO1xuXHRcdH1cblxuXHRcdHJldHVybiBQcm9taXNlLnJlamVjdCh7XG5cdFx0XHRzdGF0dXM6IHJlc3BvbnNlLnN0YXR1cyxcblx0XHRcdHN0YXR1c1RleHQ6IHJlc3BvbnNlLnN0YXR1c1RleHRcblx0XHR9KTtcblx0fSk7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NsaWVudC9tb2R1bGVzL3NlcnZlckFwaS91dGlscy5qcyJdLCJzb3VyY2VSb290IjoiIn0=
