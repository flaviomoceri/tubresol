const withCSS = require('@zeit/next-css')
const withPWA = require('next-pwa')

module.exports = withPWA(
  { pwa: { dest: 'public' } }, 
  withCSS({ cssLoaderOptions: { url: false } })
);