import { useState, useEffect } from 'react'

export default function CategorySidebar({
  groups = [],
  showSidebar = true,
  title = 'Bullets',
  subtitle = 'Types of',
  sidebarImage = '/images/sidebar-bullets.png'
}) {
  const [activeGroup, setActiveGroup] = useState('')

  // Track scroll position to highlight active group
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200

      for (const group of groups) {
        const element = document.getElementById(group.slug)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveGroup(group.slug)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Initial check

    return () => window.removeEventListener('scroll', handleScroll)
  }, [groups])

  const scrollToGroup = (slug) => {
    const element = document.getElementById(slug)
    if (element) {
      const offset = 150 // Account for header
      const elementPosition = element.offsetTop - offset
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      })
    }
  }

  if (!showSidebar) return null

  return (
    <aside className="hidden lg:block w-[260px] flex-shrink-0">
      <div
        className="sticky top-4 rounded-md overflow-hidden"
        style={{
          backgroundColor: '#1a2a1a',
          backgroundImage: `url(${sidebarImage})`,
          backgroundPosition: 'top center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      >
        {/* Title Section */}
        <div className="relative px-[17px] pt-6 pb-[150px]">
          <div className="relative z-10">
            <p
              className="text-[#f9fafb] text-[40px] leading-[0.98] font-light"
              style={{ fontFamily: "'Open Sans Condensed', sans-serif" }}
            >
              {subtitle}
            </p>
            <p
              className="text-[#f9fafb] text-[65px] leading-[0.98] font-bold tracking-[-3px]"
              style={{ fontFamily: "'Open Sans Condensed', sans-serif" }}
            >
              {title}
            </p>
          </div>
        </div>

        {/* Navigation Section - transparent background, image shows through */}
        <div className="px-[17px] pt-[21px] pb-5">
          {/* Jump To Header */}
          <h4
            className="text-white text-[40px] leading-[0.98] font-light mb-[21px]"
            style={{ fontFamily: "'Open Sans Condensed', sans-serif" }}
          >
            JUMP TO
          </h4>

          {/* Navigation Links */}
          <nav>
            <ul className="space-y-[12px]">
              {groups.map((group) => (
                <li key={group.slug}>
                  <button
                    onClick={() => scrollToGroup(group.slug)}
                    className={`w-full text-left px-2 py-2 rounded-md transition-colors flex items-end gap-[7px] whitespace-nowrap ${
                      activeGroup === group.slug
                        ? 'bg-[#0d7339]'
                        : 'hover:bg-white/10'
                    }`}
                  >
                    <span className="text-white text-[16px] leading-[0.98]" style={{ fontFamily: "'Open Sans', sans-serif" }}>
                      {group.name}
                    </span>
                    <span className="text-white/65 text-[14px] leading-[0.98]">
                      ({group.items?.length || 0})
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </aside>
  )
}
