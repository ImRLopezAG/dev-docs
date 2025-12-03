import { CategoriesSection } from './sections/categories'
import { FooterSection } from './sections/footer'
import { HeroSection } from './sections/hero'
import { PopularGuidesSection } from './sections/popular'
import { QuickStartSection } from './sections/quick-start'

export default function HomePage() {
	return (
		<div className='min-h-screen bg-neutral-50 font-sans text-neutral-900 antialiased transition-colors duration-300 dark:bg-neutral-950 dark:text-neutral-100'>
			<HeroSection />
			<CategoriesSection />
			<PopularGuidesSection />
			<QuickStartSection />
			<FooterSection />
		</div>
	)
}
