/**
 * ApiUnauthorized.js
 *
 * A custom response.
 *
 * Example usage:
 * ```
 *     return res.ApiUnauthorized();
 *     // -or-
 *     return res.ApiUnauthorized(optionalData);
 * ```
 *
 * Or with actions2:
 * ```
 *     exits: {
 *       somethingHappened: {
 *         responseType: 'ApiUnauthorized'
 *       }
 *     }
 * ```
 *
 * ```
 *     throw 'somethingHappened';
 *     // -or-
 *     throw { somethingHappened: optionalData }
 * ```
 */

module.exports = function apiunauthorized(optionalData) {

  var req = this.req;
  var res = this.res;

  var statusCode = 401;
  var dataResponse = {
    status:true,
    message:'No tienes acceso para realizar esta acción.',
    data:[]
  };

  return res.status(statusCode).json(dataResponse);

};
