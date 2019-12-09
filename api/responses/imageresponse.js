/**
 * imageresponse.js
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

module.exports = function imageresponse(dataImage) {

  var req = this.req;
  var res = this.res;

  var SkipperDisk = require('skipper-disk');
  var fileAdapter = SkipperDisk(/* optional opts */);

  res.set("Content-disposition", "attachment; filename='" + dataImage.nombre + "'");


  // Stream the file down
  console.log(__dirname);
  fileAdapter.read(__dirname+"/"+dataImage.url)
    .on('error', function (err){
      return res.serverError(err);
    })
    .pipe(res);
  return res.status(200);
};
