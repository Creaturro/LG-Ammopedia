import { useState } from 'react'
import SubcategoryCard from './SubcategoryCard'

const ChevronDown = ({ className = '' }) => (
  <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const ChevronRight = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

export default function GroupSection({
  name,
  slug,
  items = [],
  showViewAll = false,
  maxItems = 6, // Show max items before "View All"
  hasSidebar = false,
  categoryTitle = '',
}) {
  const [isExpanded, setIsExpanded] = useState(true)
  const [showAll, setShowAll] = useState(false)

  // Sort items: items with detail pages first
  const sortedItems = [...items].sort((a, b) => {
    const aHasPage = a.hasDetailPage !== false
    const bHasPage = b.hasDetailPage !== false
    if (aHasPage && !bHasPage) return -1
    if (!aHasPage && bHasPage) return 1
    return 0
  })

  const displayItems = showAll ? sortedItems : sortedItems.slice(0, maxItems)
  const hasMoreItems = sortedItems.length > maxItems

  // Grid columns: 3 if sidebar present, 4 if not
  const gridCols = hasSidebar
    ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
    : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'

  return (
    <section id={slug} className="mb-10 scroll-mt-40">
      {/* Group Header */}
      <div className="flex items-center justify-between mb-4 border-b border-gray-200 pb-3">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center gap-2 lg:cursor-default"
        >
          <ChevronDown
            className={`lg:hidden transition-transform ${isExpanded ? '' : '-rotate-90'}`}
          />
          <div className="flex items-baseline gap-3">
            {categoryTitle && (
              <span
                className="text-2xl font-bold text-gray-400"
                style={{ fontFamily: "'Open Sans Condensed', sans-serif" }}
              >
                {categoryTitle}
              </span>
            )}
            <h2 className="text-2xl font-bold text-gray-900" style={{ fontFamily: "'Open Sans Condensed', sans-serif" }}>
              {name}
            </h2>
          </div>
          <span className="text-sm text-gray-500 font-normal">
            ({items.length})
          </span>
        </button>

        {/* View All link - show if more items exist */}
        {hasMoreItems && !showAll && (
          <button
            onClick={() => setShowAll(true)}
            className="hidden lg:flex items-center text-[#0d7339] hover:text-[#086d33] font-semibold text-sm transition-colors"
          >
            <span>View All {name}</span>
            <ChevronRight />
          </button>
        )}
      </div>

      {/* Items Grid - collapsible on mobile */}
      <div className={`${isExpanded ? 'block' : 'hidden lg:block'}`}>
        <div className={`grid ${gridCols} gap-4`}>
          {displayItems.map((item, index) => (
            <SubcategoryCard
              key={item.slug || index}
              title={item.title}
              description={item.description}
              image={item.image}
              tags={item.tags}
              href={item.href}
              hasDetailPage={item.hasDetailPage !== false}
            />
          ))}
        </div>

        {/* View All button for mobile / Show more */}
        {hasMoreItems && !showAll && (
          <div className="mt-4 text-center lg:hidden">
            <button
              onClick={() => setShowAll(true)}
              className="inline-flex items-center px-4 py-2 bg-[#0d7339] text-white rounded-md hover:bg-[#086d33] transition-colors"
            >
              <span>View All {name} ({items.length})</span>
              <ChevronRight />
            </button>
          </div>
        )}

        {/* Show less button */}
        {showAll && hasMoreItems && (
          <div className="mt-4 text-center">
            <button
              onClick={() => setShowAll(false)}
              className="text-sm text-gray-500 hover:text-gray-700 underline"
            >
              Show Less
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
