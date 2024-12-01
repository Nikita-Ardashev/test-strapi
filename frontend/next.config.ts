import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	/* config options here */
	reactStrictMode: true,
	async redirects() {
		return [
			{
				source: '/',
				destination: '/pages',
				permanent: true,
			},
		];
	},
	images: {
		remotePatterns: [
			{
				protocol: 'http',
				hostname: 'localhost',
				port: '1337',
				pathname: '/uploads/**',
			},
		],
	},
	sassOptions: {
		implementation: 'sass-embedded',
		api: 'modern-compiler',
	},
};

export default nextConfig;
