'use strict';

module.exports = ({ strapi }) => ({
        async find(query) {
          return await strapi.entityService.findMany("plugin::order.orderr", query);
        },


        async create(data) {
            return await strapi.entityService.create("plugin::order.orderr", data);
          },

          async delete(id) {
            return await strapi.entityService.delete("plugin::order.orderr", id);
          },
});
