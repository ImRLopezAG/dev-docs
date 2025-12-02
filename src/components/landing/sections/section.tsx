import { cn } from 'fumadocs-ui/utils/cn'
import type React from 'react'

interface LandingSectionProps extends React.HTMLAttributes<HTMLElement> {
	children: React.ReactNode
	borders?: boolean
}
export function LandingSection(props: LandingSectionProps) {
	const { children, className, borders, ...rest } = props
	return (
		<section
			className={cn(
				'px-6 py-20 md:px-4',
				borders && 'border-neutral-200 border-t dark:border-neutral-800/50',
				className,
			)}
			{...rest}
		>
			{children}
		</section>
	)
}
