const withPWA = require('next-pwa');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
	enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer({});
module.exports = withPWA({
	pwa: {
		dest: 'public',
	},
});
module.exports = { crossOrigin: 'anonymous' };
