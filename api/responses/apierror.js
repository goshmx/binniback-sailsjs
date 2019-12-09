/**
 * apierror.js
 *
 * A custom response.
 *
 * Example usage:
 * ```
 *     return res.apierror();
 *     // -or-
 *     return res.apierror(optionalData);
 * ```
 *
 * Or with actions2:
 * ```
 *     exits: {
 *       somethingHappened: {
 *         responseType: 'apierror'
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

module.exports = function apierror(optionalData) {

  var req = this.req;
  var res = this.res;

  var statusCode = (typeof optionalData.code != 'undefined')?optionalData.code:400;
  var dataResponse = {
    status:false,
    message:(typeof optionalData.msg != 'undefined')?optionalData.msg:'Ha ocurrido un error',
  };
  if(optionalData){
    if(typeof optionalData.id != 'undefined'){
      dataResponse["id"]=optionalData.id;
    }
    if(typeof optionalData.data != 'undefined'){
      dataResponse["data"]=optionalData.data;
    }
  }

  return res.status(statusCode).json(dataResponse);

};
