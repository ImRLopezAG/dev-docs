import { Link } from '@tanstack/react-router'
import { ArrowRight } from 'lucide-react'
import { LandingSection } from './section'

export function PopularGuidesSection() {
	return (
		<LandingSection borders>
			<div className='mx-auto max-w-7xl'>
				<div className='mb-12 flex items-center justify-between'>
					<div>
						<h2 className='mb-2 font-semibold text-2xl tracking-tight'>
							Popular Guides
						</h2>
						<p className='text-neutral-600 text-sm dark:text-neutral-400'>
							Most read articles this week
						</p>
					</div>
					<Link
						to='.'
						className='hidden items-center gap-2 text-neutral-600 text-sm transition-colors hover:text-neutral-900 sm:flex dark:text-neutral-400 dark:hover:text-white'
					>
						View all guides
						<ArrowRight className='h-4 w-4' />
					</Link>
				</div>

				<div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
					{/* Guide 1 */}
					<article className='group'>
						<Link
							to='.'
							className='block rounded-xl border border-neutral-200 bg-white p-5 shadow-sm transition-colors hover:border-neutral-300 dark:border-neutral-800/50 dark:bg-neutral-900/30 dark:shadow-none dark:hover:border-neutral-700'
						>
							<div className='mb-3 flex items-center gap-2'>
								<span className='rounded bg-blue-500/10 px-2 py-0.5 font-medium text-blue-600 text-xs dark:text-blue-400'>
									Docker
								</span>
								<span className='text-neutral-500 text-xs'>12 min read</span>
							</div>
							<h3 className='mb-2 font-medium transition-colors group-hover:text-blue-500 dark:group-hover:text-blue-400'>
								Multi-stage Docker builds for production
							</h3>
							<p className='line-clamp-2 text-neutral-600 text-sm dark:text-neutral-400'>
								Learn how to optimize your Docker images using multi-stage
								builds for smaller, more secure containers.
							</p>
						</Link>
					</article>

					{/* Guide 2 */}
					<article className='group'>
						<Link
							to='.'
							className='block rounded-xl border border-neutral-200 bg-white p-5 shadow-sm transition-colors hover:border-neutral-300 dark:border-neutral-800/50 dark:bg-neutral-900/30 dark:shadow-none dark:hover:border-neutral-700'
						>
							<div className='mb-3 flex items-center gap-2'>
								<span className='rounded bg-emerald-500/10 px-2 py-0.5 font-medium text-emerald-600 text-xs dark:text-emerald-400'>
									SQL
								</span>
								<span className='text-neutral-500 text-xs'>8 min read</span>
							</div>
							<h3 className='mb-2 font-medium transition-colors group-hover:text-emerald-500 dark:group-hover:text-emerald-400'>
								PostgreSQL indexing strategies
							</h3>
							<p className='line-clamp-2 text-neutral-600 text-sm dark:text-neutral-400'>
								Deep dive into B-tree, GIN, and GiST indexes. When to use each
								type for optimal query performance.
							</p>
						</Link>
					</article>

					{/* Guide 3 */}
					<article className='group'>
						<Link
							to='.'
							className='block rounded-xl border border-neutral-200 bg-white p-5 shadow-sm transition-colors hover:border-neutral-300 dark:border-neutral-800/50 dark:bg-neutral-900/30 dark:shadow-none dark:hover:border-neutral-700'
						>
							<div className='mb-3 flex items-center gap-2'>
								<span className='rounded bg-orange-500/10 px-2 py-0.5 font-medium text-orange-600 text-xs dark:text-orange-400'>
									AWS
								</span>
								<span className='text-neutral-500 text-xs'>15 min read</span>
							</div>
							<h3 className='mb-2 font-medium transition-colors group-hover:text-orange-500 dark:group-hover:text-orange-400'>
								Serverless architecture with Lambda
							</h3>
							<p className='line-clamp-2 text-neutral-600 text-sm dark:text-neutral-400'>
								Build scalable, cost-effective applications using AWS Lambda,
								API Gateway, and DynamoDB.
							</p>
						</Link>
					</article>

					{/* Guide 4 */}
					<article className='group'>
						<Link
							to='.'
							className='block rounded-xl border border-neutral-200 bg-white p-5 shadow-sm transition-colors hover:border-neutral-300 dark:border-neutral-800/50 dark:bg-neutral-900/30 dark:shadow-none dark:hover:border-neutral-700'
						>
							<div className='mb-3 flex items-center gap-2'>
								<span className='rounded bg-purple-500/10 px-2 py-0.5 font-medium text-purple-600 text-xs dark:text-purple-400'>
									Architecture
								</span>
								<span className='text-neutral-500 text-xs'>20 min read</span>
							</div>
							<h3 className='mb-2 font-medium transition-colors group-hover:text-purple-500 dark:group-hover:text-purple-400'>
								Clean Architecture in practice
							</h3>
							<p className='line-clamp-2 text-neutral-600 text-sm dark:text-neutral-400'>
								Implement Uncle Bob's Clean Architecture with practical examples
								in TypeScript and Node.js.
							</p>
						</Link>
					</article>

					{/* Guide 5 */}
					<article className='group'>
						<Link
							to='.'
							className='block rounded-xl border border-neutral-200 bg-white p-5 shadow-sm transition-colors hover:border-neutral-300 dark:border-neutral-800/50 dark:bg-neutral-900/30 dark:shadow-none dark:hover:border-neutral-700'
						>
							<div className='mb-3 flex items-center gap-2'>
								<span className='rounded bg-blue-500/10 px-2 py-0.5 font-medium text-blue-600 text-xs dark:text-blue-400'>
									Docker
								</span>
								<span className='text-neutral-500 text-xs'>10 min read</span>
							</div>
							<h3 className='mb-2 font-medium transition-colors group-hover:text-blue-500 dark:group-hover:text-blue-400'>
								Docker Compose for local development
							</h3>
							<p className='line-clamp-2 text-neutral-600 text-sm dark:text-neutral-400'>
								Set up a complete development environment with Docker Compose,
								including hot reloading and debugging.
							</p>
						</Link>
					</article>

					{/* Guide 6 */}
					<article className='group'>
						<Link
							to='.'
							className='block rounded-xl border border-neutral-200 bg-white p-5 shadow-sm transition-colors hover:border-neutral-300 dark:border-neutral-800/50 dark:bg-neutral-900/30 dark:shadow-none dark:hover:border-neutral-700'
						>
							<div className='mb-3 flex items-center gap-2'>
								<span className='rounded bg-orange-500/10 px-2 py-0.5 font-medium text-orange-600 text-xs dark:text-orange-400'>
									AWS
								</span>
								<span className='text-neutral-500 text-xs'>18 min read</span>
							</div>
							<h3 className='mb-2 font-medium transition-colors group-hover:text-orange-500 dark:group-hover:text-orange-400'>
								IAM best practices and security
							</h3>
							<p className='line-clamp-2 text-neutral-600 text-sm dark:text-neutral-400'>
								Secure your AWS infrastructure with proper IAM policies, roles,
								and least privilege principles.
							</p>
						</Link>
					</article>
				</div>
			</div>
		</LandingSection>
	)
}
