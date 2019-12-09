module.exports = {


  friendlyName: 'Me',


  description: 'Me sesion.',

  exits: {
    error: {
      responseType: 'apibadrequest',
      description: 'Ha ocurrido un error al realizar la petición.',
    },
    success: {
      responseType: 'apisuccess',
      description: 'Se ha creado exitosamente el usuario.',
    },
    paramError: {
      responseType: 'apibadrequest',
      description: 'Hacen falta parametros',
    },
    noAutorizado: {
      responseType: 'apiunauthorized',
      description: 'Se requiere iniciar sesión para realizar esta accion',
    },
    noAdmin: {
      responseType: 'apiforbidden',
      description: 'Se requiere tener privilegios de superadmin para realizar esta accion.',
    },
    noData: {
      responseType: 'apierror',
      description: 'No se encuentra el registro solicitado.',
    },
  },


  fn: async function (inputs, exits)
{
  if(!this.req.me){
    throw 'noAutorizado';
  }

  var userRecord = await User.findOne({
  id: this.req.me.id
}).populate('rol');

  var dataUser = {
    user:{
      id:userRecord.id,
      emailAddress:userRecord.emailAddress,
      fullName:userRecord.fullName,
      rol:userRecord.rol
    },
  };
  return exits.success(dataUser);
}


};
