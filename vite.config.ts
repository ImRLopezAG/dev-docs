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

export default defineConfig({
	json: {
		stringify: false,
		namedExports: false,
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
			},

			router: {
				routesDirectory: 'app',
			},
		}),
		react(),
		jsonQueryFallbackPlugin(),
	],
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

	return {
		name: 'json-query-handler',
		enforce: 'pre',
		resolveId(id, importer) {
			// Handle JSON files with query parameters
			if (id.includes('.json?') && id.includes('collection=')) {
				const [relativePath, query] = id.split('?')

				// Resolve the path relative to the importer or root
				let absolutePath: string
				if (relativePath.startsWith('/')) {
					absolutePath = relativePath
				} else if (importer) {
					absolutePath = resolve(dirname(importer), relativePath)
				} else {
					absolutePath = resolve(root, relativePath)
				}

				// Return the absolute path with query - let fumadocs-mdx handle transformation
				return `${absolutePath}?${query}`
			}
			return null
		},
		load(id) {
			// Only handle JSON files with collection query params
			if (id.includes('.json?') && id.includes('collection=')) {
				const [filePath] = id.split('?')

				try {
					if (existsSync(filePath)) {
						// Return raw JSON content - fumadocs-mdx transform will handle it
						const content = readFileSync(filePath, 'utf-8')
						return content
					}
				} catch {
					// Fall through to return null
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
	return {
		name: 'json-query-fallback',
		enforce: 'post',
		transform(code, id) {
			// Only process JSON files with collection query that are still raw JSON
			if (id.includes('.json?') && id.includes('collection=')) {
				// Check if the code is still raw JSON (starts with { and isn't already a module)
				const trimmed = code.trim()
				if (trimmed.startsWith('{') && !trimmed.startsWith('export ')) {
					try {
						// Validate it's valid JSON
						const json = JSON.parse(trimmed)
						// Convert to ES module export
						return `export default ${JSON.stringify(json)};`
					} catch {
						// Not valid JSON, pass through
					}
				}
			}
			return null
		},
	}
}
