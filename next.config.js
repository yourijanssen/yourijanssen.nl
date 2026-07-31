const {i18n} = require("next-i18next");
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['en', 'nl'],
    defaultLocale: 'en',
    domains: [
      {
        domain: 'yourijanssen.online',
        defaultLocale: 'en',
      },
      {
        domain: 'yourijanssen.nl',
        defaultLocale: 'nl',
      },
    ],
	},
	images: {
		qualities: [75, 85],
	},
};

module.exports = nextConfig
