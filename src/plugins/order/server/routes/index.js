module.exports = [
  {
    method: 'GET',
    path: '/',
    handler: 'myController.index',
    config: {
      policies: [],
      auth: false,
    },
  },

  {
    method: 'GET',
    path: '/find',
    handler: 'OrderController.find',
    config: {
      policies: [],
      auth: false,
    },
  },
 
  {
    method: 'POST',
    path: '/add',
    handler: 'OrderController.create',
    config: {
      policies: [],
      auth: false,
    },
  },

  {
    method: 'PUT',
    path: '/update/:id',
    handler: 'OrderController.update',
    config: {
      policies: [],
      auth: false,
    },
  },

  {
    method: 'DELETE',
    path: '/delete/:id',
    handler: 'OrderController.delete',
    config: {
      policies: [],
      auth: false,
    },
  },


];
