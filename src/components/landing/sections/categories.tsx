import { cn } from 'fumadocs-ui/utils/cn'
import { ArrowRight, Cloud, Container, Database, GitBranch } from 'lucide-react'
import Link from 'next/link'
import { source } from '@/lib/source'
import { LandingSection } from './section'

export function CategoriesSection() {
	const pages = source.getPages()
	const article = new Map<'aws' | 'docker' | 'sql' | 'architecture', number>()
	for (const {
		data: { info },
	} of pages) {
		switch (true) {
			case info.path.includes('aws'):
				article.set('aws', (article.get('aws') ?? 0) + 1)
				break
			case info.path.includes('docker'):
				article.set('docker', (article.get('docker') ?? 0) + 1)
				break
			case info.path.includes('sql'):
				article.set('sql', (article.get('sql') ?? 0) + 1)
				break
			case info.path.includes('code-quality'):
				article.set('architecture', (article.get('architecture') ?? 0) + 1)
				break
		}
	}
	console.log('Articles count:', Object.fromEntries(article))
	return (
		<LandingSection className='px-6 py-20'>
			<div className='mx-auto max-w-7xl'>
				<div className='mb-16 text-center'>
					<h2 className='mb-4 font-semibold text-3xl tracking-tight'>
						Documentation
					</h2>
					<p className='text-neutral-600 dark:text-neutral-400'>
						Choose a topic to get started
					</p>
				</div>

				<div className='grid gap-6 md:grid-cols-2 lg:grid-cols-4'>
					{/* Docker Card */}
					<CategoryCard
						icon={
							<Container className='h-6 w-6 text-blue-500 dark:text-blue-400' />
						}
						title='Docker'
						description='Containerization, Docker Compose, multi-stage builds, and orchestration.'
						articleCount={article.get('docker') ?? 0}
						colorClass='blue'
						href='#'
					/>

					{/* SQL Card */}
					<CategoryCard
						icon={
							<Database className='h-6 w-6 text-emerald-500 dark:text-emerald-400' />
						}
						title='SQL'
						description='Query optimization, indexing strategies, PostgreSQL, MySQL fundamentals.'
						articleCount={article.get('sql') ?? 0}
						colorClass='emerald'
						href='/docs/sql'
					/>

					{/* AWS Card */}
					<CategoryCard
						icon={
							<Cloud className='h-6 w-6 text-orange-500 dark:text-orange-400' />
						}
						title='AWS'
						description='EC2, Lambda, S3, RDS, IAM, CloudFormation, and serverless patterns.'
						articleCount={article.get('aws') ?? 0}
						colorClass='orange'
						href='/docs/aws'
					/>

					{/* Architecture Card */}
					<CategoryCard
						icon={
							<GitBranch className='h-6 w-6 text-purple-500 dark:text-purple-400' />
						}
						title='Architecture'
						description='Design patterns, microservices, clean architecture, and best practices.'
						articleCount={article.get('architecture') ?? 0}
						colorClass='purple'
						href='/docs/code-quality/patterns'
					/>
				</div>
			</div>
		</LandingSection>
	)
}
const colorStyles = {
	blue: {
		border: 'hover:border-blue-500/50',
		bg: 'bg-blue-500/10 group-hover:bg-blue-500/20',
		text: 'text-blue-500 dark:text-blue-400',
	},
	emerald: {
		border: 'hover:border-emerald-500/50',
		bg: 'bg-emerald-500/10 group-hover:bg-emerald-500/20',
		text: 'text-emerald-500 dark:text-emerald-400',
	},
	orange: {
		border: 'hover:border-orange-500/50',
		bg: 'bg-orange-500/10 group-hover:bg-orange-500/20',
		text: 'text-orange-500 dark:text-orange-400',
	},
	purple: {
		border: 'hover:border-purple-500/50',
		bg: 'bg-purple-500/10 group-hover:bg-purple-500/20',
		text: 'text-purple-500 dark:text-purple-400',
	},
} as const

function CategoryCard(props: {
	icon: React.ReactNode
	title: string
	description: string
	articleCount: number
	colorClass: keyof typeof colorStyles
	href: string
}) {
	const { icon, title, description, articleCount, colorClass, href } = props
	const colors = colorStyles[colorClass]

	return (
		<Link
			href={href}
			className={cn(
				'group flex flex-col rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition-all hover:bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-900/50 dark:shadow-none dark:hover:bg-neutral-900',
				colors.border,
			)}
		>
			<div
				className={cn(
					'mb-4 flex h-12 w-12 items-center justify-center rounded-xl transition-colors',
					colors.bg,
				)}
			>
				{icon}
			</div>
			<h3 className='mb-2 font-medium text-lg'>{title}</h3>
			<p className='mb-4 flex-1 text-neutral-600 text-sm dark:text-neutral-400'>
				{description}
			</p>
			<div className={cn('flex items-center gap-2 text-sm', colors.text)}>
				<span>{articleCount} articles</span>
				<ArrowRight className='h-4 w-4 transition-transform group-hover:translate-x-1' />
			</div>
		</Link>
	)
}
