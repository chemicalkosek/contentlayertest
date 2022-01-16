const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const { withContentlayer } = require('next-contentlayer');

module.exports = withContentlayer()(
  withBundleAnalyzer({
    images: {
      deviceSizes: [320, 420, 768, 1024, 1200, 1400, 1600],
    },
  })
);
