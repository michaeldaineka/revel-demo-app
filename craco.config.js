const CracoLessPlugin = require('craco-less');

const isProd = process.env.NODE_ENV === 'production';

// TODO: Add craco-swc to boost the build speed

module.exports = {
  baseUrl: './src',
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            javascriptEnabled: true
          }
        }
      }
    },
    {
      plugin: CracoLessPlugin,
      options: {
        modifyLessRule(lessRule, _context) {
          lessRule.test = /\.(module)\.(less)$/;
          lessRule.exclude = /node_modules/;

          return lessRule;
        },
        cssLoaderOptions: {
          modules: {
            localIdentName: isProd ? '[hash:base64]' : '[path][name]__[local]--[hash:base64:5]'
          }
        },
        lessLoaderOptions: {
          lessOptions: {
            javascriptEnabled: true
          }
        }
      }
    }
  ]
};
