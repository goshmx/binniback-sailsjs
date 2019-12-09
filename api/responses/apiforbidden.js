/**
 * ApiForbidden.js
 *
 * A custom response.
 *
 * Example usage:
 * ```
 *     return res.ApiForbidden();
 *     // -or-
 *     return res.ApiForbidden(optionalData);
 * ```
 *
 * Or with actions2:
 * ```
 *     exits: {
 *       somethingHappened: {
 *         responseType: 'ApiForbidden'
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

module.exports = function apiforbidden(optionalData) {

  var req = this.req;
  var res = this.res;

  var statusCode = 403;
  var dataResponse = {
    status:true,
    message:'No tienes los privilegios para realizar esta acción.',
    data:[]
  };

  return res.status(statusCode).json(dataResponse);

};
