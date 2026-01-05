import Tag from './Tag'

const ChevronRight = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

export default function SubcategoryCard({
  title,
  description,
  image,
  tags = [],
  slug,
  categoryRoute,
  hasDetailPage = true,
}) {
  // Construct hash-based URL for detail page
  const detailUrl = categoryRoute && slug ? `#${categoryRoute}/${slug}` : null
  const cardContent = (
    <>
      {/* Image */}
      <div className="h-24 bg-gradient-to-br from-gray-100 to-gray-200 rounded-t-md flex items-center justify-center overflow-hidden flex-shrink-0">
        {image ? (
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center">
            <span className="text-gray-500 text-2xl font-bold">
              {title.charAt(0)}
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-3 sm:p-4 flex flex-col flex-1 min-w-0">
        {/* Title */}
        <h3 className="font-semibold text-sm sm:text-base mb-2 line-clamp-2 text-gray-900 break-words">
          {title}
        </h3>

        {/* Description */}
        {description && (
          <p className="text-xs sm:text-sm text-gray-600 line-clamp-2 mb-3 flex-1 break-words">
            {description}
          </p>
        )}

        {/* Tags */}
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-1 mb-3">
            <Tag variant="knowledgebase">Knowledgebase</Tag>
            {tags.slice(0, 1).map((tag, index) => (
              <Tag key={index} variant={tag.toLowerCase()}>
                {tag}
              </Tag>
            ))}
          </div>
        )}

        {/* Read More Link */}
        {hasDetailPage ? (
          <div className="flex items-center text-[#0d7339] text-xs sm:text-sm font-semibold mt-auto">
            <span>read more</span>
            <ChevronRight />
          </div>
        ) : (
          <div className="flex items-center text-gray-400 text-xs sm:text-sm mt-auto">
            <span>Details coming soon</span>
          </div>
        )}
      </div>
    </>
  )

  // Wrapper - link if has detail page, div if not
  if (hasDetailPage && detailUrl) {
    return (
      <a
        href={detailUrl}
        className="bg-[#f5f5f5] rounded-md flex flex-col h-full border border-transparent hover:border-[#0d7339] transition-colors duration-200 min-w-0 overflow-hidden"
      >
        {cardContent}
      </a>
    )
  }

  return (
    <div className="bg-[#f5f5f5] rounded-md flex flex-col h-full border border-transparent min-w-0 overflow-hidden">
      {cardContent}
    </div>
  )
}
