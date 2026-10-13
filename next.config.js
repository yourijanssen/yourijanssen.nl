/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
	poweredByHeader: false,
  i18n: {
    locales: ['en', 'nl', 'el'],
    defaultLocale: 'en',
		// Domain-based locale routing is production-only; locally, path locales prevent hydration mismatches.
    domains: process.env.NODE_ENV === 'production' ? [
      {
        domain: 'yourijanssen.online',
        defaultLocale: 'en',
      },
      {
        domain: 'yourijanssen.nl',
        defaultLocale: 'nl',
      },
    ] : undefined,
	},
	images: {
		qualities: [75, 85],
	},
	// Preserve explicit language paths when consolidating public Vercel URLs.
	async redirects() {
		if (process.env.VERCEL_ENV === 'preview') return [];
		return [{
			source: '/en/:path*',
			has: [{type: 'host', value: '.*\\.vercel\\.app'}],
			destination: 'https://www.yourijanssen.nl/:path*',
			permanent: true,
			locale: false,
		}, {
			source: '/:path*',
			has: [{type: 'host', value: '.*\\.vercel\\.app'}],
			destination: 'https://www.yourijanssen.nl/:path*',
			permanent: true,
			locale: false,
		}];
	},
	// Exclude Vercel previews from search and preserve existing security headers.
	async headers() {
		return [
			{
				source: '/:path*',
				locale: false,
				has: [{type: 'host', value: '.*\\.vercel\\.app'}],
				headers: [{key: 'X-Robots-Tag', value: 'noindex'}],
			},
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
