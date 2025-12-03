import { createRouter as createTanStackRouter } from '@tanstack/react-router'
import { NotFound } from '@/components/not-found'
import { routeTree } from './routeTree.gen'
import { ErrorBoundary } from '@/components/error-boundary'

export function getRouter() {
	return createTanStackRouter({
		routeTree,
		defaultPreload: 'viewport',
		scrollRestoration: true,
		defaultNotFoundComponent: NotFound,
		defaultErrorComponent: ErrorBoundary,
		defaultStructuralSharing: true,
		scrollRestorationBehavior: "smooth",
		defaultPreloadDelay: 10,
	})
}
