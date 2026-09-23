const path = require('path');

module.exports = {
	i18n: {
		defaultLocale: 'en',
		locales: ['en', 'nl', 'el'],
	},
	localePath: path.resolve('./public/locales'),
	// Reload translation resources during development so edits appear without restarting Next.js.
	reloadOnPrerender: process.env.NODE_ENV === 'development',
};
