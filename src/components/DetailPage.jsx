import { useState } from 'react'
import Tag from './Tag'

// Specs Table Component - Two column layout, full width, green labels
function SpecsTable({ specs }) {
  if (!specs || Object.keys(specs).length === 0) return null

  const entries = Object.entries(specs)
  const midpoint = Math.ceil(entries.length / 2)
  const leftColumn = entries.slice(0, midpoint)
  const rightColumn = entries.slice(midpoint)

  const renderRow = ([key, value]) => (
    <tr key={key}>
      <td
        className="px-4 py-2.5 text-sm text-gray-600 bg-[#f5faf5] border-b border-gray-200"
        style={{ width: '45%' }}
      >
        {key}
      </td>
      <td className="px-4 py-2.5 text-sm text-gray-900 bg-white border-b border-gray-200">
        {value}
      </td>
    </tr>
  )

  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-0 border border-gray-200">
      {/* Left Column */}
      <div className="border-r-0 lg:border-r border-gray-200">
        <table className="w-full">
          <tbody>
            {leftColumn.map((entry) => renderRow(entry))}
          </tbody>
        </table>
      </div>
      {/* Right Column */}
      <div>
        <table className="w-full">
          <tbody>
            {rightColumn.map((entry) => renderRow(entry))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

// Use Types Component - flexbox layout based on Figma design
function UseTypes({ items }) {
  if (!items || items.length === 0) return null

  return (
    <div className="border border-[#d3d3d3] flex items-center w-1/2">
      {/* Left label column - vertically centered */}
      <div className="border-r border-[#d3d3d3] flex items-center justify-center p-2.5 shrink-0 w-[120px] self-stretch">
        <span className="text-xs text-black text-center">Use Type</span>
      </div>
      {/* Right side with icon + label rows - flex-1 for full width lines */}
      <div className="flex flex-col flex-1">
        {items.map((item, index) => (
          <div
            key={index}
            className={`flex items-center ${index > 0 ? 'border-t border-[#d3d3d3]' : ''}`}
          >
            {/* Icon with 4px vertical padding */}
            <div className="w-[62px] py-1 shrink-0 flex items-center justify-center">
              <img
                src={item.icon}
                alt={item.label}
                className="max-w-full max-h-full object-contain"
              />
            </div>
            {/* Label */}
            <div className="flex items-center py-1 px-2.5">
              <span className="text-xs text-black">{item.label}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// Add to Cart Button Component
function AddToCartButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="relative w-full flex items-center justify-center cursor-pointer"
      style={{
        background: 'linear-gradient(#1a8444, #156a36)',
        border: '1px solid #0f552c',
        borderRadius: '5px',
        height: '43px',
        padding: '0',
        paddingLeft: '45px',
        paddingRight: '15px'
      }}
    >
      {/* Cart icon in dark green circle - positioned on left */}
      <div
        className="absolute left-[8px] top-1/2 -translate-y-1/2 flex items-center justify-center rounded-full"
        style={{
          width: '30px',
          height: '30px',
          backgroundColor: '#11592e',
          boxShadow: 'inset 0 2px 4px rgba(0, 0, 0, 0.4)'
        }}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="#f5c518" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 22C9.55228 22 10 21.5523 10 21C10 20.4477 9.55228 20 9 20C8.44772 20 8 20.4477 8 21C8 21.5523 8.44772 22 9 22Z"/>
          <path d="M20 22C20.5523 22 21 21.5523 21 21C21 20.4477 20.5523 20 20 20C19.4477 20 19 20.4477 19 21C19 21.5523 19.4477 22 20 22Z"/>
          <path d="M1 1H5L7.68 14.39C7.77144 14.8504 8.02191 15.264 8.38755 15.5583C8.75318 15.8526 9.2107 16.009 9.68 16H19.4C19.8693 16.009 20.3268 15.8526 20.6925 15.5583C21.0581 15.264 21.3086 14.8504 21.4 14.39L23 6H6"/>
        </svg>
      </div>
      {/* Text - no italic */}
      <span
        style={{
          color: '#fff',
          fontSize: '16px',
          lineHeight: '16px',
          fontWeight: 'bold',
          textShadow: '1px 1px 3px rgba(1, 2, 2, 0.44)'
        }}
      >
        Add to Cart
      </span>
    </button>
  )
}

// Star Rating Component - inline version for price row
function StarRating({ rating, reviewCount }) {
  if (!rating && !reviewCount) return null

  const fullStars = Math.floor(rating || 0)
  const hasHalfStar = (rating || 0) % 1 >= 0.5
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0)

  return (
    <div className="flex items-center gap-1 shrink-0">
      <div className="flex">
        {[...Array(fullStars)].map((_, i) => (
          <svg key={`full-${i}`} width="19" height="19" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="#f5c518" stroke="#8B4513" strokeWidth="1"/>
          </svg>
        ))}
        {hasHalfStar && (
          <svg width="19" height="19" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="halfStar">
                <stop offset="50%" stopColor="#f5c518"/>
                <stop offset="50%" stopColor="#d1d5db"/>
              </linearGradient>
            </defs>
            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="url(#halfStar)" stroke="#8B4513" strokeWidth="1"/>
          </svg>
        )}
        {[...Array(emptyStars)].map((_, i) => (
          <svg key={`empty-${i}`} width="19" height="19" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="#ffffff" stroke="#8B4513" strokeWidth="1"/>
          </svg>
        ))}
      </div>
      {reviewCount && (
        <a href="#" className="text-xs text-gray-500 underline hover:text-[#0d7339]">({reviewCount})</a>
      )}
    </div>
  )
}

// Product Card Component - Recommended similar products
function ProductCard({ product }) {
  // Build specs array for bullet list
  const specs = []
  if (product.quantity) specs.push(`Quantity - ${product.quantity}`)
  if (product.manufacturer) specs.push(`Manufacturer - ${product.manufacturer}`)
  if (product.bullets) specs.push(`Bullets - ${product.bullets}`)
  if (product.casings) specs.push(`Casings - ${product.casings}`)
  if (product.costPerRound) specs.push(`Cost Per Round - ${product.costPerRound}`)
  if (product.load) specs.push(`Load - ${product.load}`)

  return (
    <div className="flex flex-col h-full">
      {/* Product Image - 70% size, centered */}
      <div className="flex justify-center mb-4">
        <div className="w-[70%] aspect-square bg-white overflow-hidden">
          {product.image ? (
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-contain"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gray-100">
              <span className="text-gray-400 text-2xl font-bold">
                {product.manufacturer?.charAt(0) || '?'}
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Product Name - Link style, left aligned, min-height for 2 lines */}
      <a
        href={product.href || '#'}
        className="text-black hover:text-[#0d7339] hover:underline font-medium text-base mb-2 line-clamp-2 text-left min-h-[2.5rem]"
      >
        {product.name}
      </a>

      {/* Price + Star Rating - inline, reviews pushed to right */}
      <div className="flex items-center justify-between mb-3">
        <span className="text-gray-900 font-semibold text-lg">
          {product.price}
        </span>
        <StarRating rating={product.rating} reviewCount={product.reviewCount} />
      </div>

      {/* Specs Bullet List */}
      {specs.length > 0 && (
        <ul className="list-disc list-inside text-xs text-[#7d837e] space-y-0.5 mb-4">
          {specs.map((spec, index) => (
            <li key={index}>{spec}</li>
          ))}
        </ul>
      )}

      {/* Spacer to push button to bottom */}
      <div className="flex-1"></div>

      {/* Add to Cart Button */}
      <AddToCartButton onClick={() => console.log('Add to cart:', product.name)} />
    </div>
  )
}

// Products Section Component - Recommended similar products
function ProductsSection({ products, productType = "buckshot" }) {
  if (!products || products.length === 0) return null

  return (
    <section className="py-8">
      <h2
        className="text-2xl font-bold text-gray-900 mb-6"
        style={{ fontFamily: "'Open Sans Condensed', sans-serif" }}
      >
        You may also be interested in these {productType} products
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </section>
  )
}

// Comparison Table Component
function ComparisonTable({ data }) {
  if (!data || !data.headers || !data.rows) return null

  // Render cell content - supports text, icons array, or "N/A" for missing data
  const renderCell = (cell, cellIndex) => {
    // If cell is null/undefined, show N/A
    if (cell === null || cell === undefined || cell === '') {
      return <span className="text-gray-400 italic">N/A</span>
    }

    // If cell is an array of icons
    if (Array.isArray(cell)) {
      return (
        <div className="flex gap-2">
          {cell.map((icon, i) => (
            <img
              key={i}
              src={icon.icon}
              alt={icon.label}
              title={icon.label}
              className="w-8 h-8"
            />
          ))}
        </div>
      )
    }

    // Regular text
    return cell
  }

  return (
    <section className="py-8">
      <h2
        className="text-2xl font-bold text-gray-900 mb-6"
        style={{ fontFamily: "'Open Sans Condensed', sans-serif" }}
      >
        Comparison
      </h2>
      <div className="overflow-x-auto border border-gray-200">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-[#0d7339] text-white">
              {data.headers.map((header, index) => (
                <th
                  key={index}
                  className="px-4 py-3 text-left text-sm font-semibold border-b border-gray-200"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.rows.map((row, rowIndex) => (
              <tr
                key={rowIndex}
                className={rowIndex % 2 === 0 ? 'bg-gray-50' : 'bg-white'}
              >
                {row.map((cell, cellIndex) => (
                  <td
                    key={cellIndex}
                    className={`px-4 py-3 text-sm border-b border-gray-200 ${cellIndex === 0 ? 'font-medium text-gray-900' : 'text-gray-600'}`}
                  >
                    {renderCell(cell, cellIndex)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}

// FAQ Component
function FAQ({ items }) {
  const [openIndex, setOpenIndex] = useState(null)

  if (!items || items.length === 0) return null

  return (
    <section className="py-8">
      <h2
        className="text-2xl font-bold text-gray-900 mb-6"
        style={{ fontFamily: "'Open Sans Condensed', sans-serif" }}
      >
        FAQ
      </h2>
      <div className="space-y-3">
        {items.map((item, index) => (
          <div key={index} className="border border-gray-200 overflow-hidden">
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full flex items-center justify-between p-4 text-left bg-white hover:bg-gray-50 transition-colors"
            >
              <span className="font-medium text-gray-900 pr-4">{item.question}</span>
              <svg
                className={`w-5 h-5 flex-shrink-0 text-gray-500 transition-transform ${openIndex === index ? 'rotate-180' : ''}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {openIndex === index && (
              <div className="px-4 pb-4 bg-gray-50">
                <p className="text-gray-600 leading-relaxed">{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

// Main DetailPage Component
export default function DetailPage({ item, categoryTitle, categoryRoute }) {
  if (!item) {
    return (
      <div className="py-12 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Product not found</h2>
        <a href="#" className="text-[#0d7339] hover:underline">
          Back to Ammopedia
        </a>
      </div>
    )
  }

  return (
    <article className="py-6">
      {/* Hero Section - Image + Title + Specs */}
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 mb-8">
        {/* Image - Left Side (reduced by 30%) */}
        <div className="w-full lg:w-[28%] flex-shrink-0">
          <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
            {item.image ? (
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <span className="text-gray-400 text-6xl font-bold">
                  {item.title.charAt(0)}
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Content - Right Side */}
        <div className="flex-1">
          {/* Title */}
          <h1
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4"
            style={{ fontFamily: "'Open Sans Condensed', sans-serif" }}
          >
            {item.title}
          </h1>

          {/* Tags */}
          {item.tags && item.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              <Tag variant="knowledgebase">Knowledgebase</Tag>
              {item.tags.map((tag, index) => (
                <Tag key={index} variant={tag.toLowerCase()}>
                  {tag}
                </Tag>
              ))}
            </div>
          )}

          {/* Description */}
          <p className="text-gray-700 mb-6 leading-relaxed">
            {item.fullDescription || item.description}
          </p>

          {/* Use Types */}
          {item.useTypes && (
            <div className="mb-6">
              <UseTypes items={item.useTypes} />
            </div>
          )}
        </div>
      </div>

      {/* Specs Table - Full Width */}
      {item.specs && (
        <div className="mb-8">
          <h3
            className="text-2xl font-bold text-gray-900 mb-4"
            style={{ fontFamily: "'Open Sans Condensed', sans-serif" }}
          >
            Specifications
          </h3>
          <SpecsTable specs={item.specs} />
        </div>
      )}

      {/* Comparison Table */}
      {item.comparison && (
        <ComparisonTable data={item.comparison} />
      )}

      {/* FAQ */}
      {item.faq && (
        <FAQ items={item.faq} />
      )}

      {/* Recommended Products Section */}
      {item.products && (
        <ProductsSection products={item.products} productType={item.productType || "buckshot"} />
      )}

      {/* Back Link */}
      <div className="mt-12 pt-6">
        <a
          href="#"
          className="inline-flex items-center gap-2 text-[#0d7339] hover:underline font-semibold"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Back to Ammopedia
        </a>
      </div>
    </article>
  )
}
