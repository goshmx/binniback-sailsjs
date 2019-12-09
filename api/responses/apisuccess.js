/**
 * ApiSuccess.js
 *
 * A custom response.
 *
 * Example usage:
 * ```
 *     return res.ApiSuccess();
 *     // -or-
 *     return res.ApiSuccess(optionalData);
 * ```
 *
 * Or with actions2:
 * ```
 *     exits: {
 *       somethingHappened: {
 *         responseType: 'ApiSuccess'
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

module.exports = function apisuccess(optionalData) {

  var req = this.req;
  var res = this.res;

  var statusCode = 200;
  var dataResponse = {
    status:true,
    message:'La operacion se realizo exitosamente',
    data:optionalData
  };
  if(optionalData){
    if(typeof optionalData.id != 'undefined'){
      dataResponse["id"]=optionalData.id;
    }
  }

  return res.status(statusCode).json(dataResponse);
};
