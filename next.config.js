const withPWA = require('next-pwa');
const runtimeCaching = require('next-pwa/cache');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
	enabled: process.env.ANALYZE === 'true',
});

module.exports = {
	crossOrigin: 'anonymous',
	pwa: withPWA({
		pwa: {
			dest: 'public',
			runtimeCaching,
		},
	}),
	analyzer: withBundleAnalyzer({}),
};
