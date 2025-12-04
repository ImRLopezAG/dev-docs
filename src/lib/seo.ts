import type { Metadata } from 'next'
export const seo = ({
	title = 'Docs dev',
	description = 'The ultimate resource for developers to learn, build, and innovate with cutting-edge technologies.',
	keywords = 'Learn, Build, Innovate, Developer Resources, Coding Tutorials, Tech Guides, Programming Tips',
	image = 'https://docs.imrlopez.dev/og-image.png',
	url = 'https://docs.imrlopez.dev',
	twitterCreator = '@ImR_Lopez',
	meta
}: {
	title?: string
	description?: string
	image?: string
	keywords?: string
	url?: string
	siteName?: string
	twitterSite?: string
	twitterCreator?: string
	meta?: Partial<Metadata>
}): Metadata => {
	return {
		metadataBase: new URL(url),
		title: {
			absolute: title || 'Docs dev',
			template: `%s | ${title || 'My Portfolio'}`,
			default: title || 'My Portfolio',
		},
		description: description,
		category: 'Portfolio',
		keywords: [
			'Documentation',
			'Development',
			'Guides',
			'Tutorials',
			'Programming',
			'Tech Articles',
			'Coding Tips',
			'API References',
			'Software Development',
			'Dev Resources',
			keywords || '',
		],
		openGraph: {
			title: title || 'Docs dev',
			description: description,
			type: 'website',
			url: url,
			images: image ? [image] : undefined,
		},
		twitter: {
			card: 'summary_large_image',
			title: title || 'Docs dev',
			description: description,
			images: image ? [image] : undefined,
			creator: twitterCreator || undefined,
		},
		generator: 'Next.js',
		authors: [
			{
				name: 'Angel Gabriel Lopez',
				url: url,
			},
		],
		...meta,
	}
}
