// const isProd = process.env.NODE_ENV === 'production';

// const withPWA = require('next-pwa');

// module.exports = withPWA({
//   pwa: {
//     disable: !isProd,
//     dest: 'public',
//   },
// });

const { withPlugins } = require('next-compose-plugins');
const withOptimizedImages = require('next-optimized-images');

// next.js configuration
const nextConfig = {
    images: {
        domains: ['storage.googleapis.com/quiet-platform-317414.appspot.com', 'cdn1.ozone.ru']
    },
};

module.exports = withPlugins([withOptimizedImages], nextConfig);
