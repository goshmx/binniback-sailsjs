/**
 * exito.js
 *
 * A custom response.
 *
 * Example usage:
 * ```
 *     return res.exito();
 *     // -or-
 *     return res.exito(optionalData);
 * ```
 *
 * Or with actions2:
 * ```
 *     exits: {
 *       somethingHappened: {
 *         responseType: 'exito'
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

module.exports = function exito(optionalData) {

  var req = this.req;
  var res = this.res;

  var statusCode = 200;
  var dataResponse = {
    status:true,
    message:'La operacion se realizo exitosamente',
    data:[],
    id:0
  };

  return res.status(statusCode).json(dataResponse)
};
