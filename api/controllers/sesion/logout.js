module.exports = {


  friendlyName: 'Logout',


  description: 'Logout sesion.',

  exits: {
    success: {
      description: 'El usuario ha salido del sistema.',
      responseType: 'apisuccess',
    },
  },

  fn: async function (inputs, exits) {
  delete this.req.session.userId;
  return exits.success();
}


};
