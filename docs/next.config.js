const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.jsx',
});

module.exports = withNextra({
  basePath: '/notifications-webhook-demo',
  images: {
    unoptimized: true,
  },
});
