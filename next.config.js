/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
	poweredByHeader: false,
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
	async headers() {
		return [
			{
				source: '/:path*',
				headers: [
					{key: 'X-Content-Type-Options', value: 'nosniff'},
					{key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin'},
					{key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()'},
					{key: 'X-Frame-Options', value: 'DENY'},
				],
			},
		];
	},
};

module.exports = nextConfig
