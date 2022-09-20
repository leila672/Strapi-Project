"use strict";

module.exports = {
  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  bootstrap(/*{ strapi }*/) {},

  /*  An asynchronous register function that runs before your application is initialized.This gives you an opportunity to extend code. */

  register({ strapi }) {
    const extensionService = strapi.service("plugin::graphql.extension");
    extensionService.use(({ strapi }) => ({
      typeDefs: `
        type Query {
          product(name: String!): ProductEntityResponse
        }
      `,
      resolvers: {
        Query: {
          product: {
            resolve: async (parent, args, context) => {

              const { toEntityResponse } = strapi.service(
                "plugin::graphql.format"
              ).returnTypes;

              const data = await strapi.services["api::product.product"].find({
                filters: { name: args.name },
              });
              
              const response = toEntityResponse(data.results[0]);

              console.log("##################", response, "##################");

              return response;
            },
          },
        },
      },
    }));
  },

  // register({ strapi }) {
  //   const extensionService = strapi.service("plugin::graphql.extension");

  //   // Previous code from before
  //   extensionService.use(({ strapi }) => ({}));

  //   // Code we just added - custom graphql resolver
  //   extensionService.use(({ strapi }) => ({
  //     typeDefs: `
        
  //       type Query {
  //         authorsContacts: [AuthorContact]
  //       }

  //       type AuthorContact {
  //         id: ID
  //         name: String
  //         email: String
  //         articles: [Article]
  //       }
  //     `,

  //     resolvers: {
  //       Query: {
  //         authorsContacts: {
  //           resolve: async (parent, args, context) => {
  //             const data = await strapi.services["api::writer.writer"].find({
  //               populate: ["articles"],
  //             });

  //             return data.results.map((author) => ({
  //               id: author.id,
  //               name: author.name,
  //               email: author.email,
  //               articles: author.articles,
  //             }));
  //           },
  //         },
  //       },
  //     },

  //     resolversConfig: {
  //       "Query.authorsContacts": {
  //         auth: false,
  //       },
  //     },
  //   }));
  // },



};
