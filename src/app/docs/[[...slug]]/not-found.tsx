import {
	DocsBody,
	DocsDescription,
	DocsPage,
	DocsTitle,
} from 'fumadocs-ui/layouts/docs/page'
import Link from 'next/link'
import { seo } from '@/lib/seo'

export default async function Page() {
	return (
		<DocsPage
			toc={[]}
			full={false}
			tableOfContent={{
				style: 'clerk',
			}}
		>
			<DocsTitle>Not Found</DocsTitle>
			<DocsDescription>
				The requested document could not be found.
			</DocsDescription>
			<DocsBody>
				<div className='flex flex-col items-center gap-4'>
					<h1 className='font-bold text-6xl text-fd-muted-foreground'>404</h1>
					<h2 className='font-semibold text-2xl'>Page Not Found</h2>
					<p className='max-w-md text-fd-muted-foreground'>
						The page you are looking for might have been removed, had its name
						changed, or is temporarily unavailable.
					</p>
					<Link
						href='/'
						className='mt-4 rounded-lg bg-fd-primary px-4 py-2 font-medium text-fd-primary-foreground text-sm transition-opacity hover:opacity-90'
					>
						Back to Home
					</Link>
				</div>
			</DocsBody>
		</DocsPage>
	)
}

export async function generateMetadata() {
	return seo({
		title: 'Not Found',
		description: 'The requested document could not be found.',
		image: '/og-image.png',
	})
}
