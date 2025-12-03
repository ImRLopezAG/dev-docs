import { docs } from 'fumadocs-mdx:collections/server'
import { type InferPageType, loader } from 'fumadocs-core/source'
import * as icons from 'lucide-static'

export const source = loader({
	source: docs.toFumadocsSource(),
	baseUrl: '/docs',
	icon(icon) {
		if (!icon) {
			return
		}

		if (icon in icons) return icons[icon as keyof typeof icons]
	},
})

export function getPageImage(page: InferPageType<typeof source>) {
	const segments = [...page.slugs, 'image.png']

	return {
		segments,
		url: `/og/docs/${segments.join('/')}`,
	}
}

export async function getLLMText(page: InferPageType<typeof source>) {
	const processed = await page.data.getText('processed')

	return `# ${page.data.title}

${processed}`
}
