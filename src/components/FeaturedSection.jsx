import Tag from './Tag'

const ChevronRight = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

function HeroCard({ item, categoryRoute }) {
  if (!item) return null
  const detailUrl = categoryRoute && item.slug ? `#${categoryRoute}/${item.slug}` : item.href

  return (
    <a
      href={detailUrl}
      className="bg-[#10331f] rounded-md overflow-hidden flex flex-col h-full hover:shadow-xl transition-shadow min-w-0"
    >
      {/* Image */}
      <div className="h-36 sm:h-48 bg-gradient-to-br from-[#163322] to-[#0d7339] flex items-center justify-center flex-shrink-0">
        {item.image ? (
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="text-[#7ad9ab] text-4xl sm:text-6xl font-bold opacity-30">
            {item.title.charAt(0)}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4 sm:p-5 flex flex-col flex-1 min-w-0">
        <div className="flex gap-1 mb-2 sm:mb-3 flex-wrap">
          <Tag variant="featured">Featured</Tag>
          {item.tags?.[0] && <Tag variant={item.tags[0].toLowerCase()}>{item.tags[0]}</Tag>}
        </div>

        <h3 className="text-white font-bold text-lg sm:text-xl mb-2 break-words">
          {item.title}
        </h3>

        <p className="text-gray-300 text-xs sm:text-sm line-clamp-3 mb-3 sm:mb-4 flex-1 break-words">
          {item.description}
        </p>

        <div className="flex items-center text-[#f6ec42] font-semibold text-sm sm:text-base">
          <span>Explore this topic</span>
          <ChevronRight />
        </div>
      </div>
    </a>
  )
}

function PopularCard({ item, categoryRoute }) {
  if (!item) return null
  const detailUrl = categoryRoute && item.slug ? `#${categoryRoute}/${item.slug}` : item.href

  return (
    <a
      href={detailUrl}
      className="bg-[#10331f] rounded-md overflow-hidden flex flex-col hover:ring-1 hover:ring-[#0d7339] hover:shadow-lg transition-all duration-200 min-w-0"
    >
      {/* Image - larger and prominent */}
      <div className="h-20 sm:h-28 bg-gradient-to-br from-[#163322] to-[#0d7339] flex items-center justify-center overflow-hidden flex-shrink-0">
        {item.image ? (
          <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
        ) : (
          <span className="text-[#7ad9ab] text-2xl sm:text-3xl font-bold">{item.title.charAt(0)}</span>
        )}
      </div>

      {/* Content */}
      <div className="p-2 sm:p-3 flex flex-col flex-1 min-w-0">
        <h4 className="font-semibold text-xs sm:text-sm text-white line-clamp-2 mb-1 break-words">
          {item.title}
        </h4>
        <div className="mt-auto pt-1 sm:pt-2 flex gap-1 flex-wrap">
          <Tag variant="featured">Featured</Tag>
          {item.tags?.[0] && (
            <Tag variant={item.tags[0].toLowerCase()}>{item.tags[0]}</Tag>
          )}
        </div>
      </div>
    </a>
  )
}

export default function FeaturedSection({ heroItem, popularItems = [], title = "Editor's Picks", subtitle = "Explore our curated selection of essential ammunition knowledge", categoryTitle = "", categoryRoute = "" }) {
  if (!heroItem && popularItems.length === 0) return null

  return (
    <section
      className="mb-8 bg-[#f9f9f9] rounded-lg px-4 sm:px-6 py-6"
      style={{
        color: 'rgba(255, 255, 255, 1)',
        borderWidth: '1px',
        borderColor: 'rgba(237, 237, 237, 1)',
        borderStyle: 'solid'
      }}
    >
      {/* Header - stacked on mobile, inline on desktop */}
      <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6 pb-4 border-b border-gray-200 mb-4">
        <div className="flex items-baseline gap-3">
          {categoryTitle && (
            <span
              className="text-xl font-bold text-gray-400 whitespace-nowrap"
              style={{ fontFamily: "'Open Sans Condensed', sans-serif" }}
            >
              {categoryTitle}
            </span>
          )}
          <h2
            className="text-xl font-bold text-gray-900 whitespace-nowrap"
            style={{ fontFamily: "'Open Sans Condensed', sans-serif" }}
          >
            {title}
          </h2>
        </div>
        <p className="text-gray-500 text-sm">
          {subtitle}
        </p>
      </div>

      {/* Content Grid */}
      <div className="flex flex-col lg:flex-row gap-2 lg:gap-[2px]">
        {/* Hero Card - full width on mobile, half on desktop */}
        <div className="w-full lg:w-1/2">
          <HeroCard item={heroItem} categoryRoute={categoryRoute} />
        </div>

        {/* Popular Items Grid - 2x2 */}
        <div className="w-full lg:w-1/2 grid grid-cols-2 gap-2 lg:gap-[2px] mt-2 lg:mt-0">
          {popularItems.slice(0, 4).map((item, index) => (
            <PopularCard key={index} item={item} categoryRoute={categoryRoute} />
          ))}
        </div>
      </div>
    </section>
  )
}
