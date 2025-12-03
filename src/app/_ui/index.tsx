import { createFileRoute } from '@tanstack/react-router'
import HomePage from '@/components/landing'

export const Route = createFileRoute('/_ui/')({
	component: HomePage,
})
