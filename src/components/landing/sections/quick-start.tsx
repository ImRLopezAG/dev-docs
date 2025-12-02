import { LandingSection } from './section'

export function QuickStartSection() {
	return (
		<LandingSection borders>
			<div className='mx-auto max-w-5xl'>
				<div className='mb-12 text-center'>
					<h2 className='mb-2 font-semibold text-2xl tracking-tight'>
						Quick Start
					</h2>
					<p className='text-neutral-600 text-sm dark:text-neutral-400'>
						Get up and running in minutes
					</p>
				</div>

				<div className='grid gap-8 md:grid-cols-2'>
					{/* Docker Quick Start */}
					<CodeCard
						title='Dockerfile'
						code={`FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
EXPOSE 3000
CMD ["node", "server.js"]`}
						keywords={['FROM', 'WORKDIR', 'COPY', 'RUN', 'EXPOSE', 'CMD']}
						colorClass='text-blue-600 dark:text-blue-400'
					/>
					{/* SQL Quick Start */}
					<CodeCard
						title='query.sql'
						code={`CREATE INDEX idx_users_email
ON users(email);

SELECT u.name, COUNT(o.id)
FROM users u
LEFT JOIN orders o ON u.id = o.user_id
GROUP BY u.id;`}
						keywords={[
							'CREATE',
							'INDEX',
							'ON',
							'SELECT',
							'FROM',
							'LEFT',
							'JOIN',
							'ON',
							'GROUP',
							'BY',
						]}
						colorClass='text-purple-600 dark:text-purple-400'
					/>
				</div>
			</div>
		</LandingSection>
	)
}

interface CodeCardProps {
	title: string
	code: string
	keywords: string[]
	colorClass?: string
}

function CodeCard(props: CodeCardProps) {
	const { title, code, keywords, colorClass } = props

	return (
		<div className='overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm dark:border-neutral-800 dark:bg-neutral-900/50 dark:shadow-none'>
			<div className='flex items-center gap-3 border-neutral-200 border-b bg-neutral-50 px-4 py-3 dark:border-neutral-800 dark:bg-neutral-900/50'>
				<div className='flex gap-1.5'>
					<div className='h-3 w-3 rounded-full bg-red-500/70'></div>
					<div className='h-3 w-3 rounded-full bg-yellow-500/70'></div>
					<div className='h-3 w-3 rounded-full bg-green-500/70'></div>
				</div>
				<span className='text-neutral-500 text-xs'>{title}</span>
			</div>
			<pre className='overflow-x-auto bg-neutral-50 p-4 text-neutral-700 text-sm dark:bg-transparent dark:text-neutral-300'>
				<code>
					{code.split('\n').map((line, index) => (
						<span key={line}>
							{line.split(' ').map((word, wIndex) => (
								<span
									key={`${index}-${wIndex}-${word}`}
									className={
										keywords.includes(word)
											? (colorClass ?? 'text-blue-600 dark:text-blue-400')
											: ''
									}
								>
									{word}{' '}
								</span>
							))}
							{'\n'}
						</span>
					))}
				</code>
			</pre>
		</div>
	)
}
