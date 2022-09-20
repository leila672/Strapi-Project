'use strict';

module.exports = ({ strapi }) => ({
  async find(ctx) {
    try{
      return await  strapi.plugin('order').service('OrderService').find(ctx.query);
    } 
    catch(error)
    {
        ctx.throw(500,error)
    }
  },

  async create(ctx) {
    try{
      return await  strapi.plugin('order').service('OrderService').create(ctx.request.body);
    } 
    catch(error)
    {
        ctx.throw(500,error)
    }
  },

  async update(ctx) {
    try{
      return await  strapi.plugin('order').service('OrderService').update(ctx.params.id,ctx.request.body);
    } 
    catch(error)
    {
        ctx.throw(500,error)
    }
  },

  async delete(ctx) {
    try{
      return await  strapi.plugin('order').service('OrderService').delete(ctx.params.id);
    } 
    catch(error)
    {
        ctx.throw(500,error)
    }
  },

  
});
