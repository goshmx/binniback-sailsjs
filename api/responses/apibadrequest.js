/**
 * apibadrequest.js
 *
 * A custom response.
 *
 * Example usage:
 * ```
 *     return res.apibadrequest();
 *     // -or-
 *     return res.apibadrequest(optionalData);
 * ```
 *
 * Or with actions2:
 * ```
 *     exits: {
 *       somethingHappened: {
 *         responseType: 'apibadrequest'
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

module.exports = function apibadrequest(optionalData) {

  console.log(optionalData);
  var req = this.req;
  var res = this.res;

  var statusCode = 400;
  var dataResponse = {
    status:true,
    message:'Algunos campos deber ser ingresados o son requeridos.',
    data:[]
  };

  return res.status(statusCode).json(dataResponse);
};
