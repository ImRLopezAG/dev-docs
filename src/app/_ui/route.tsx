import { createFileRoute, Outlet } from '@tanstack/react-router'
import { HomeLayout } from 'fumadocs-ui/layouts/home'
import { baseOptions } from '@/lib/layout.shared'
export const Route = createFileRoute('/_ui')({
	component: Home,
})

function Home() {
	return (
		<HomeLayout {...baseOptions()} className='justify-center text-center'>
			<Outlet />
		</HomeLayout>
	)
}
