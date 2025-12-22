import { useState, useEffect } from 'react'
import Header from './components/Header'
import HomePage from './components/HomePage'
import CategoryPage from './components/CategoryPage'
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

function App() {
  const route = useHashRoute()

  // Check if we're on a category page
  const isHomePage = !route || route === 'home'
  const isCategoryPage = ['bullet-types', 'casings', 'primers'].includes(route)

  // Select data based on route
  const getCategoryData = () => {
    switch (route) {
      case 'casings':
        return casingTypesData
      case 'primers':
        return primerTypesData
      case 'bullet-types':
      default:
        return bulletTypesData
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {isHomePage ? (
        <HomePage />
      ) : isCategoryPage ? (
        <main className="w-full max-w-[1170px] mx-auto px-4">
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center justify-between py-3">
            {/* Breadcrumb Links - Left Side */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-xs sm:text-sm">
              <a href="#" className="text-[#0d7339] hover:underline font-medium">
                Ammopedia
              </a>
              <span className="text-gray-400">/</span>
              <a href="#bullet-types" className={`${route === 'bullet-types' ? 'text-gray-900 font-semibold' : 'text-gray-500 hover:text-gray-700'}`}>
                Bullets
              </a>
              <span className="text-gray-400">|</span>
              <a href="#casings" className={`${route === 'casings' ? 'text-gray-900 font-semibold' : 'text-gray-500 hover:text-gray-700'}`}>
                Casings
              </a>
              <span className="text-gray-400">|</span>
              <a href="#primers" className={`${route === 'primers' ? 'text-gray-900 font-semibold' : 'text-gray-500 hover:text-gray-700'}`}>
                Primers
              </a>
            </div>

            {/* Back to Ammopedia Button - Right Side */}
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

          <CategoryPage data={getCategoryData()} />
        </main>
      ) : (
        <HomePage />
      )}
    </div>
  )
}

export default App
