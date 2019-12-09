module.exports = {


  friendlyName: 'Login',


  description: 'Login sesion.',


  inputs: {
    email: {
      description: 'El email del usuario, e.g. "irl@example.com".',
      type: 'string',
      required: true
    },

    password: {
      description: 'El password de inicio de la cuenta del usuario, e.g. "passwordlol".',
      type: 'string',
      required: true
    },

    rememberMe: {
      description: 'Parametro para extender la sesión del usuario.',
      type: 'boolean'
    }
  },


  exits: {
    success: {
      description: 'El inicio de sesión se ha efectuado correctamente.',
      responseType: 'apisuccess',
    },
    errorLogin:{
      description: 'El usuario no coincide con ningun registro en la base de datos.',
      responseType: 'apiunauthorized',
    }
  },


  fn: async function (inputs, exits) {

  inputs.emailAddress = inputs.email;
  delete inputs.email;
  var userRecord = await User.findOne({
    emailAddress: inputs.emailAddress.toLowerCase(),
  }).populate('rol');
  if(!userRecord) {
    throw 'errorLogin';
  }
  await sails.helpers.passwords.checkPassword(inputs.password, userRecord.password)
    .intercept('incorrect', 'errorLogin');

  if (inputs.rememberMe) {
    if (this.req.isSocket) {
      sails.log.warn(
        'Received `rememberMe: true` from a virtual request, but it was ignored\n'+
        'because a browser\'s session cookie cannot be reset over sockets.\n'+
        'Please use a traditional HTTP request instead.'
      );
    } else {
      this.req.session.cookie.maxAge = sails.config.custom.rememberMeCookieMaxAge;
    }
  }
  this.req.session.userId = userRecord.id;

  var dataUser = {
    id:userRecord.id,
    emailAddress:userRecord.emailAddress,
    fullName:userRecord.fullName,
    rol:userRecord.rol
  };
  return exits.success(dataUser);

}


};
