import { useState, useEffect } from 'react'
import Header from './components/Header'
import HomePage from './components/HomePage'
import CategoryPage from './components/CategoryPage'
import DetailPage from './components/DetailPage'
import bulletTypesData from './data/categories/bulletTypes'
import casingTypesData from './data/categories/casingTypes'
import primerTypesData from './data/categories/primerTypes'

// Simple hash-based routing
function useHashRoute() {
  const [route, setRoute] = useState(window.location.hash.slice(1) || '')

  useEffect(() => {
    const handleHashChange = () => {
      setRoute(window.location.hash.slice(1) || '')
    }
    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  return route
}

// Parse route to extract category and optional product slug
function parseRoute(route) {
  const parts = route.split('/')
  return {
    category: parts[0] || '',
    productSlug: parts[1] || null
  }
}

// Find item in category data by slug
function findItemBySlug(categoryData, slug) {
  for (const group of categoryData.groups) {
    const item = group.items.find(item => item.slug === slug)
    if (item) return item
  }
  return null
}

function App() {
  const route = useHashRoute()
  const { category, productSlug } = parseRoute(route)

  // Category routes mapping
  const categoryRoutes = {
    'bullet-types': { data: bulletTypesData, title: 'Bullets' },
    'casings': { data: casingTypesData, title: 'Casings' },
    'primers': { data: primerTypesData, title: 'Primers' }
  }

  // Determine page type
  const isHomePage = !route || route === 'home'
  const isCategoryPage = category in categoryRoutes && !productSlug
  const isDetailPage = category in categoryRoutes && productSlug

  // Get current category data
  const currentCategory = categoryRoutes[category]
  const categoryData = currentCategory?.data
  const categoryTitle = currentCategory?.title

  // Find product for detail page
  const currentItem = isDetailPage && categoryData
    ? findItemBySlug(categoryData, productSlug)
    : null

  // Breadcrumb for detail page
  const renderDetailBreadcrumb = () => (
    <nav className="flex items-center justify-between py-3">
      <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-xs sm:text-sm">
        <a href="#" className="text-[#0d7339] hover:underline font-medium">
          Ammopedia
        </a>
        <span className="text-gray-400">/</span>
        <a href={`#${category}`} className="text-[#0d7339] hover:underline font-medium">
          {categoryTitle}
        </a>
        <span className="text-gray-400">/</span>
        <span className="text-gray-900 font-semibold">
          {currentItem?.title || 'Product'}
        </span>
      </div>

      <a
        href="#"
        className="inline-flex items-center gap-2 bg-[#0d7339] hover:bg-[#0a5f2e] text-white font-semibold px-4 py-2 rounded-md transition-colors"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 11H7.83L13.42 5.41L12 4L4 12L12 20L13.41 18.59L7.83 13H20V11Z" fill="#f6ec42"/>
        </svg>
        <span>Back to Ammopedia</span>
      </a>
    </nav>
  )

  // Breadcrumb for category page
  const renderCategoryBreadcrumb = () => (
    <nav className="flex items-center justify-between py-3">
      <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-xs sm:text-sm">
        <a href="#" className="text-[#0d7339] hover:underline font-medium">
          Ammopedia
        </a>
        <span className="text-gray-400">/</span>
        <a href="#bullet-types" className={`${category === 'bullet-types' ? 'text-gray-900 font-semibold' : 'text-gray-500 hover:text-gray-700'}`}>
          Bullets
        </a>
        <span className="text-gray-400">|</span>
        <a href="#casings" className={`${category === 'casings' ? 'text-gray-900 font-semibold' : 'text-gray-500 hover:text-gray-700'}`}>
          Casings
        </a>
        <span className="text-gray-400">|</span>
        <a href="#primers" className={`${category === 'primers' ? 'text-gray-900 font-semibold' : 'text-gray-500 hover:text-gray-700'}`}>
          Primers
        </a>
      </div>

      <a
        href="#"
        className="inline-flex items-center gap-2 bg-[#0d7339] hover:bg-[#0a5f2e] text-white font-semibold px-4 py-2 rounded-md transition-colors"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 11H7.83L13.42 5.41L12 4L4 12L12 20L13.41 18.59L7.83 13H20V11Z" fill="#f6ec42"/>
        </svg>
        <span>Back to Ammopedia</span>
      </a>
    </nav>
  )

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {isHomePage ? (
        <HomePage />
      ) : isDetailPage ? (
        <main className="w-full max-w-[1170px] mx-auto px-4">
          {renderDetailBreadcrumb()}
          <DetailPage
            item={currentItem}
            categoryTitle={categoryTitle}
            categoryRoute={category}
          />
        </main>
      ) : isCategoryPage ? (
        <main className="w-full max-w-[1170px] mx-auto px-4">
          {renderCategoryBreadcrumb()}
          <CategoryPage data={categoryData} categoryRoute={category} />
        </main>
      ) : (
        <HomePage />
      )}
    </div>
  )
}

export default App
