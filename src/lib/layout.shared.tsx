import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared'
import { Logo } from '@/components/logo'
export function baseOptions(): BaseLayoutProps {
	return {
		nav: {
			title: (
				<div className='flex items-center space-x-2'>
					<Logo className='h-8 w-8' />
					<span className='font-semibold'>Dev Docs</span>
				</div>
			),
			url: '/',
		},
	}
}
