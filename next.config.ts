import { createMDX } from 'fumadocs-mdx/next'
import type { NextConfig } from 'next'

const withMDX = createMDX()

const config: NextConfig = {
	reactStrictMode: true,
	cacheComponents: true,
	typescript: {
		ignoreBuildErrors: true,
	},
	experimental: {
		turbopackFileSystemCacheForDev: true,
		mdxRs: true,
		turbopackFileSystemCacheForBuild: true,
		turbopackMinify: true,
	},
}

export default withMDX(config)
