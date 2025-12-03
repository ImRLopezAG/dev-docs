import { existsSync, readFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { cwd } from 'node:process'
import tailwindcss from '@tailwindcss/vite'
import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import react from '@vitejs/plugin-react'
import mdx from 'fumadocs-mdx/vite'
import { nitro } from 'nitro/vite'
import { defineConfig, type Plugin } from 'vite'
import tsConfigPaths from 'vite-tsconfig-paths'
import * as MdxConfig from './source.config'

const FumadocsDeps = ['fumadocs-core', 'fumadocs-ui'];
export default defineConfig({
	json: {
		stringify: false,
	},
	server: {
		port: 3000,
	},
	plugins: [
		mdx(MdxConfig),
		nitro({}),
		jsonQueryPlugin(),
		tailwindcss(),
		tsConfigPaths({
			projects: ['./tsconfig.json'],
		}),
		tanstackStart({
			prerender: {
				enabled: false,
				crawlLinks: true,
				outputPath:'index.html'
			},
			

      pages: [
        {
          path: '/docs',
        },
        {
          path: '/api/search',
        },
      ],
			sitemap: {
				enabled: true,
				host: 'https://docs.imrlopez.dev',
			},
			router: {
				routesDirectory: 'app',
			},
		}),
		react(),
		jsonQueryFallbackPlugin(),
	],
	resolve: {
		noExternal: FumadocsDeps,
	},
	optimizeDeps: {
		exclude: FumadocsDeps,
	},
})

/**
 * Plugin to handle JSON files with query parameters for rolldown-vite compatibility.
 *
 * rolldown-vite doesn't properly handle JSON files with query parameters like
 * `./meta.json?collection=docs` - it tries to parse them as JavaScript.
 *
 * This plugin intercepts these files and ensures they're properly handled as JSON.
 */
function jsonQueryPlugin(): Plugin {
	const root = cwd()
	const fileStatus = new Map<string, string>()

	const logStatus = (fileName: string, status: string) => {
		fileStatus.set(fileName, status)
		console.log(`[query] ${fileName} - ${status}`)
	}

	return {
		name: 'json-query-handler',
		enforce: 'pre',
		resolveId(id, importer) {
			if (id.includes('.json?') && id.includes('collection=')) {
				const [relativePath, query] = id.split('?')

				let absolutePath: string
				if (relativePath.startsWith('/')) {
					absolutePath = relativePath
				} else if (importer) {
					absolutePath = resolve(dirname(importer), relativePath)
				} else {
					absolutePath = resolve(root, relativePath)
				}

				logStatus(absolutePath, 'resolved')
				return `${absolutePath}?${query}`
			}
			return null
		},
		load(id) {
			if (id.includes('.json?') && id.includes('collection=')) {
				const [filePath] = id.split('?')

				try {
					if (existsSync(filePath)) {
						const content = readFileSync(filePath, 'utf-8')
						logStatus(filePath, 'loaded')
						return content
					}
					logStatus(filePath, 'not-found')
				} catch {
					logStatus(filePath, 'load-error')
				}
				return null
			}
			return null
		},
	}
}

/**
 * Fallback plugin for SSR build - transforms raw JSON to JS module
 * This runs after fumadocs-mdx transform and catches any JSON that wasn't handled
 */
function jsonQueryFallbackPlugin(): Plugin {
	const logStatus = (fileName: string, status: string) => {
		console.log(`[fallback] ${fileName} - ${status}`)
	}

	return {
		name: 'json-query-fallback',
		enforce: 'post',
		transform(code, id) {
			if (id.includes('.json?') && id.includes('collection=')) {
				const trimmed = code.trim()
				if (trimmed.startsWith('{') && !trimmed.startsWith('export ')) {
					try {
						const json = JSON.parse(trimmed)
						logStatus(id, 'transformed')
						return `export default ${JSON.stringify(json)};`
					} catch {
						logStatus(id, 'parse-error')
					}
				} else {
					logStatus(id, 'skipped')
				}
			}
			return null
		},
	}
}
