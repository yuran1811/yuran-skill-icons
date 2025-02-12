export default {
  multipass: false,
  datauri: "base64",
  plugins: [
    {
      name: "preset-default",
      params: {
        overrides: {
          removeViewBox: false,
          removeTitle: false,
          removeDesc: false,
        },
      },
    },
    {
      // Better for accessibility
      name: "removeUnknownsAndDefaults",
      params: {
        keepRoleAttr: true,
      },
    },

    "prefixIds",
    // prevents conflicts with inline SVGs on the same page by prefixing with the name of the file
    // see: https://github.com/svg/svgo/issues/674
  ],
};
