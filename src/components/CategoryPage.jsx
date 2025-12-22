import FeaturedSection from './FeaturedSection'
import CategorySidebar from './CategorySidebar'
import GroupSection from './GroupSection'
import SubcategoryCard from './SubcategoryCard'

// Helper to find item by slug across all groups
function findItemBySlug(groups, slug) {
  for (const group of groups) {
    const item = group.items?.find(i => i.slug === slug)
    if (item) return item
  }
  return null
}

// Helper to count total items
function countTotalItems(groups) {
  return groups.reduce((total, group) => total + (group.items?.length || 0), 0)
}

export default function CategoryPage({ data }) {
  const {
    title,
    subtitle,
    description,
    featured = {},
    groups = [],
    sidebarImage,
    showSidebar: forceSidebar,
  } = data

  const totalItems = countTotalItems(groups)
  // Show sidebar if forced via data config OR if 20+ items
  const showSidebar = forceSidebar === true || totalItems >= 20

  // Get featured items
  const heroItem = featured.hero ? findItemBySlug(groups, featured.hero) : null
  const popularItems = (featured.popular || [])
    .map(slug => findItemBySlug(groups, slug))
    .filter(Boolean)

  return (
    <div className="pb-12">
      {/* Page Header - shown when no sidebar OR on mobile (lg:hidden) when sidebar exists */}
      {!showSidebar ? (
        <header className="text-center mb-6 sm:mb-8 px-2">
          <h1
            className="font-bold text-gray-900 mb-3 text-3xl sm:text-4xl lg:text-5xl break-words"
            style={{ fontFamily: "'Open Sans Condensed', sans-serif" }}
          >
            {subtitle && <span>{subtitle} </span>}
            {title}
          </h1>
          {description && (
            <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
              {description}
            </p>
          )}
        </header>
      ) : (
        /* Mobile-only header when sidebar exists (sidebar hidden on mobile) */
        <header className="lg:hidden text-center mb-6 px-2">
          <h1
            className="font-bold text-gray-900 mb-3 text-3xl sm:text-4xl break-words"
            style={{ fontFamily: "'Open Sans Condensed', sans-serif" }}
          >
            {subtitle && <span>{subtitle} </span>}
            {title}
          </h1>
          {description && (
            <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
              {description}
            </p>
          )}
        </header>
      )}

      {/* Main Content Area */}
      <div className={`flex flex-col lg:flex-row gap-4 lg:gap-6 ${showSidebar ? '' : ''}`}>
        {/* Sidebar - only for large item counts, hidden on mobile */}
        {showSidebar && (
          <CategorySidebar
            groups={groups}
            showSidebar={showSidebar}
            title={title}
            subtitle={subtitle}
            sidebarImage={sidebarImage}
          />
        )}

        {/* Content */}
        <div className="flex-1 min-w-0 overflow-hidden">
          {/* Featured Section */}
          {(heroItem || popularItems.length > 0) && (
            <FeaturedSection
              heroItem={heroItem}
              popularItems={popularItems}
              subtitle={`Explore our curated selection of ${title.toLowerCase()}`}
              categoryTitle={subtitle ? `${subtitle} ${title}` : title}
            />
          )}

          {/* Groups */}
          {groups.length === 1 && groups[0].items ? (
            // Single group - just show items without group header
            <div className={`grid ${showSidebar ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'} gap-4`}>
              {groups[0].items.map((item, index) => (
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
          ) : (
            // Multiple groups
            groups.map((group) => (
              <GroupSection
                key={group.slug}
                name={group.name}
                slug={group.slug}
                items={group.items}
                hasSidebar={showSidebar}
                maxItems={showSidebar ? 6 : 8}
                categoryTitle={subtitle ? `${subtitle} ${title}` : title}
              />
            ))
          )}
        </div>
      </div>
    </div>
  )
}
