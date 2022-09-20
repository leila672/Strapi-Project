module.exports = {
    // ...
    'order': {
      enabled: true,
      resolve: './src/plugins/order'
    },
    // ...

    'preview-button': {
      config: {
        contentTypes: [
          {
            uid: 'api::project.project',
            targetField: 'slug',
          },
        ],
      },
    },
  }


 