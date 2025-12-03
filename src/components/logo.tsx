import type React from 'react'

export function Logo(props: React.SVGProps<SVGSVGElement>) {
	return (
		<svg
			width='32'
			height='32'
			viewBox='0 0 32 32'
			fill='none'
			className='shrink-0'
			{...props}
		>
			<title>DevDocs</title>
			<rect
				width='32'
				height='32'
				rx='8'
				className='fill-neutral-900 dark:fill-white'
			/>
			<path
				d='M8 10C8 9.44772 8.44772 9 9 9H15C15.5523 9 16 9.44772 16 10V22C16 22.5523 15.5523 23 15 23H9C8.44772 23 8 22.5523 8 22V10Z'
				className='fill-white dark:fill-neutral-900'
			/>
			<path
				d='M18 10C18 9.44772 18.4477 9 19 9H23C23.5523 9 24 9.44772 24 10V14C24 14.5523 23.5523 15 23 15H19C18.4477 15 18 14.5523 18 14V10Z'
				className='fill-blue-400 dark:fill-blue-500'
			/>
			<path
				d='M18 17C18 16.4477 18.4477 16 19 16H23C23.5523 16 24 16.4477 24 17V22C24 22.5523 23.5523 23 23 23H19C18.4477 23 18 22.5523 18 22V17Z'
				className='fill-white/60 dark:fill-neutral-900/60'
			/>
		</svg>
	)
}
