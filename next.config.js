const withPWA = require('next-pwa');
const runtimeCaching = require('next-pwa/cache');

module.exports = withPWA({
	pwa: {
		disable: process.env.NODE_ENV === 'development',
		// dest: 'public', // comment out this line
		register: true,
		sw: '/sw.js',
	},
});
