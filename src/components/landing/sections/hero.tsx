import { Link } from '@tanstack/react-router'
import { BookOpen, Github, Sparkles } from 'lucide-react'
import { LandingSection } from './section'
export function HeroSection() {
	return (
		<LandingSection className='px-6 pt-32 pb-20'>
			<div className='mx-auto max-w-4xl text-center'>
				<div className='mb-6 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-blue-600 text-sm dark:text-blue-400'>
					<Sparkles className='h-4 w-4' />
					<span>New: AWS Lambda tutorials added</span>
				</div>
				<h1 className='mb-6 bg-linear-to-b from-neutral-900 to-neutral-500 bg-clip-text font-semibold text-4xl text-transparent tracking-tight sm:text-5xl lg:text-6xl dark:from-white dark:to-neutral-400'>
					Everything you need to build modern applications
				</h1>
				<p className='mx-auto mb-10 max-w-2xl text-lg text-neutral-600 dark:text-neutral-400'>
					Comprehensive documentation for Docker, SQL, AWS, and code
					architecture. From beginner guides to advanced patterns.
				</p>
				<div className='flex flex-col items-center justify-center gap-4 sm:flex-row'>
					<Link
						href='/docs'
						className='flex w-full items-center justify-center gap-2 rounded-lg bg-neutral-900 px-6 py-3 font-medium text-white transition-colors hover:bg-neutral-700 sm:w-auto dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200'
					>
						<BookOpen className='h-5 w-5' />
						Browse Documentation
					</Link>
					<Link
						to='.'
						className='flex w-full items-center justify-center gap-2 rounded-lg border border-neutral-200 bg-white px-6 py-3 font-medium text-neutral-900 transition-colors hover:bg-neutral-100 sm:w-auto dark:border-neutral-800 dark:bg-neutral-900 dark:text-white dark:hover:bg-neutral-800'
					>
						<Github className='h-5 w-5' />
						View on GitHub
					</Link>
				</div>
			</div>
		</LandingSection>
	)
}
