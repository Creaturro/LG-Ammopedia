import { useState, useEffect } from 'react'
import Header from './components/Header'
import CategoryPage from './components/CategoryPage'
import bulletTypesData from './data/categories/bulletTypes'
import casingTypesData from './data/categories/casingTypes'
import primerTypesData from './data/categories/primerTypes'

// Simple hash-based routing for demo
function useHashRoute() {
  const [route, setRoute] = useState(window.location.hash.slice(1) || 'bullet-types')

  useEffect(() => {
    const handleHashChange = () => {
      setRoute(window.location.hash.slice(1) || 'bullet-types')
    }
    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  return route
}

function App() {
  const route = useHashRoute()

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
      <main className="w-full max-w-[1170px] mx-auto px-4">
        {/* Breadcrumb Navigation */}
        <nav className="flex flex-wrap items-center gap-1 sm:gap-2 py-3 text-xs sm:text-sm">
          <a href="/ammopedia" className="text-[#0d7339] hover:underline">
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
        </nav>

        <CategoryPage data={getCategoryData()} />
      </main>
    </div>
  )
}

export default App
