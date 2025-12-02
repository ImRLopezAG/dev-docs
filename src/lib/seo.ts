export const seo = ({
	title = 'Docs dev',
	description = "The ultimate resource for developers to learn, build, and innovate with cutting-edge technologies.",
	keywords = 'Learn, Build, Innovate, Developer Resources, Coding Tutorials, Tech Guides, Programming Tips',
	image = 'https://docs.imrlopez.dev/og-image.png',
	url = 'https://docs.imrlopez.dev',
	siteName = 'dev-docs',
	twitterSite = '@ImR_Lopez',
	twitterCreator = '@ImR_Lopez',
}: {
	title?: string
	description?: string
	image?: string
	keywords?: string
	url?: string
	siteName?: string
	twitterSite?: string
	twitterCreator?: string
}) => {
	const tags = [
		{ title: `${title ?? 'TanstackStart Faster'} | TanstackStart Faster` },
		{ name: 'description', content: description },
		{ name: 'keywords', content: keywords },
		{ name: 'twitter:title', content: title },
		{ name: 'twitter:description', content: description },
		{ name: 'twitter:creator', content: twitterCreator },
		{ name: 'twitter:site', content: twitterSite },
		{ name: 'twitter:url', content: url },
		{ name: 'og:type', content: 'website' },
		{ name: 'og:title', content: title },
		{ name: 'og:description', content: description },
		{ name: 'og:url', content: url },
		{ name: 'og:site_name', content: siteName },
		...(image
			? [
					{ name: 'twitter:image', content: image },
					{ name: 'twitter:card', content: 'summary_large_image' },
					{ name: 'og:image', content: image },
				]
			: []),
	]

	return tags
}
