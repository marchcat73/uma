module.exports = {
  plugins: [
    'autoprefixer',
    'postcss-import',
    'postcss-flexbugs-fixes',
    'postcss-nested',
    [
      'postcss-preset-env',
      {
        autoprefixer: {
          flexbox: 'no-2009',
        },
        stage: 3,
        features: {
          'custom-properties': false,
        },
      },
    ],
  ],
};
