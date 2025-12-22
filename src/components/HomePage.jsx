const ChevronRight = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.6 12L8 7.4L9.4 6L15.4 12L9.4 18L8 16.6L12.6 12Z" fill="currentColor"/>
  </svg>
)

// Category Card Component
function CategoryCard({ title, subtitle, image, tags, href, variant = 'default' }) {
  return (
    <a
      href={href}
      className="relative block h-[365px] rounded-md overflow-hidden group cursor-pointer"
    >
      {/* Background Image */}
      <img
        src={image}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
      />

      {/* Overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

      {/* Content */}
      <div className="relative h-full flex flex-col justify-between p-4">
        {/* Title Section */}
        <div>
          <p
            className="text-[48px] leading-[0.978] text-white drop-shadow-lg"
            style={{ fontFamily: "'Open Sans Condensed', sans-serif", fontWeight: 300 }}
          >
            {subtitle}
          </p>
          <p
            className={`text-[68px] leading-[0.978] tracking-tight drop-shadow-lg ${variant === 'bullets' ? 'text-[#f6ec42]' : 'text-white'}`}
            style={{ fontFamily: "'Open Sans Condensed', sans-serif", fontWeight: 700 }}
          >
            {title}
          </p>
        </div>

        {/* Tags */}
        <div className="flex gap-1 flex-wrap">
          {tags.map((tag, index) => (
            <span
              key={index}
              className={`px-2.5 py-1 rounded text-white text-sm font-semibold ${
                tag.variant === 'knowledge' ? 'bg-[#d84520]' :
                tag.variant === 'usage' ? 'bg-[#e0a332]' :
                tag.variant === 'tips' ? 'bg-[#e0a332]' :
                'bg-[#e0a332]'
              }`}
              style={{ fontFamily: "'Open Sans', sans-serif" }}
            >
              {tag.label}
            </span>
          ))}
        </div>
      </div>
    </a>
  )
}

// More To Come Card
function MoreToComeCard() {
  return (
    <div className="h-[365px] rounded-md bg-[#f5f5f5] flex flex-col items-center justify-center">
      <p
        className="text-2xl text-black"
        style={{ fontFamily: "'Open Sans Condensed', sans-serif", fontWeight: 300 }}
      >
        More to come
      </p>
      <p
        className="text-[64px] text-[#bebebe] tracking-tight leading-[0.978]"
        style={{ fontFamily: "'Open Sans Condensed', sans-serif", fontWeight: 700 }}
      >
        stay tuned
      </p>
    </div>
  )
}

// Map Section
function MapSection() {
  return (
    <div className="relative h-[346px] rounded-md overflow-hidden">
      <img
        src="/images/21b48a90ae224a099ef40fdfb8da5aaff353807d.png"
        alt="Map"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/25" />

      {/* Map Labels */}
      <div className="absolute left-0 top-[100px]">
        <div className="bg-black px-8 py-2.5 flex items-center justify-center">
          <span
            className="text-[96px] text-white tracking-tight leading-[0.978]"
            style={{ fontFamily: "'Open Sans Condensed', sans-serif", fontWeight: 700 }}
          >
            Map
          </span>
        </div>
      </div>

      <div className="absolute left-[216px] top-[100px] flex flex-col">
        <div className="bg-black px-4 py-2">
          <span className="text-2xl text-white" style={{ fontFamily: "'Open Sans', sans-serif" }}>
            FFL DEALERS
          </span>
        </div>
        <div className="bg-black px-4 py-2">
          <span className="text-2xl text-white" style={{ fontFamily: "'Open Sans', sans-serif" }}>
            STATE GUN LAWS
          </span>
        </div>
        <div className="bg-black px-4 py-2">
          <span className="text-2xl text-white" style={{ fontFamily: "'Open Sans', sans-serif" }}>
            SHOOTING RANGE
          </span>
        </div>
      </div>

      {/* Tags */}
      <div className="absolute left-2 bottom-4 flex gap-1">
        <span className="px-2.5 py-1 rounded text-white text-sm font-semibold bg-[#d84520]">KNOWLEDGEBASE</span>
        <span className="px-2.5 py-1 rounded text-white text-sm font-semibold bg-[#d89120]">AMMO LAWS</span>
        <span className="px-2.5 py-1 rounded text-white text-sm font-semibold bg-[#e0b832]">LOCATIONS</span>
      </div>
    </div>
  )
}

// Reviews Section
function ReviewsSection() {
  return (
    <div className="relative h-[346px] rounded-md overflow-hidden">
      <img
        src="/images/706c08c0868f96ed0fd3102166fba8a1202d9645.png"
        alt="Ammo Reviews"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Content */}
      <div className="absolute left-6 top-10">
        <p
          className="text-[64px] text-white tracking-tight leading-[0.978]"
          style={{ fontFamily: "'Open Sans Condensed', sans-serif", fontWeight: 300 }}
        >
          Ammo
        </p>
        <p
          className="text-[80px] text-white leading-[0.978]"
          style={{ fontFamily: "'Open Sans Condensed', sans-serif", fontWeight: 700 }}
        >
          Manufacturer Reviews
        </p>
      </div>

      {/* Tags */}
      <div className="absolute left-2 bottom-4 flex gap-1">
        <span className="px-2.5 py-1 rounded text-white text-sm font-semibold bg-[#d84520]">KNOWLEDGEBASE</span>
        <span className="px-2.5 py-1 rounded text-white text-sm font-semibold bg-[#e0b832]">LOCATIONS</span>
      </div>
    </div>
  )
}

// Lounge Article Card
function LoungeCard({ title, tag, link }) {
  return (
    <div className="bg-[#10331f] rounded-md p-4 h-[355px] flex flex-col">
      <img
        src="/images/e5c036b478cd67d895860ab1ce0ccc08ee2b01ea.png"
        alt="Lucky Gunner Lounge"
        className="h-[72px] object-contain object-left mb-4"
      />

      <div className="flex-1 flex flex-col justify-between">
        <div>
          <p className="text-white font-semibold text-base leading-7 mb-3">{title}</p>
          <span className="px-2 py-0.5 rounded text-white text-sm font-semibold bg-[#2fb44b] uppercase">
            {tag}
          </span>
        </div>

        <a
          href={link}
          className="flex items-center text-[#f6ec42] font-semibold text-base hover:underline"
        >
          <span>read article</span>
          <ChevronRight />
        </a>
      </div>
    </div>
  )
}

// Read More Container
function ReadMoreContainer() {
  return (
    <div className="bg-[#f5f5f5] rounded-md h-[355px] flex flex-col items-center justify-center p-6">
      <p
        className="text-2xl text-black text-center mb-2"
        style={{ fontFamily: "'Open Sans Condensed', sans-serif", fontWeight: 300 }}
      >
        Visit our hub designed for education, entertainment, and discussion
      </p>
      <p
        className="text-[64px] text-[#bebebe] tracking-tight leading-[0.978]"
        style={{ fontFamily: "'Open Sans Condensed', sans-serif", fontWeight: 700 }}
      >
        read more
      </p>
    </div>
  )
}

// Article Card
function ArticleCard({ title, link }) {
  return (
    <div className="bg-[#f5f5f5] border border-[#e2e2e2] rounded-md p-5 h-[203px] flex flex-col justify-between">
      <p className="font-semibold text-base text-black leading-7">{title}</p>
      <a
        href={link}
        className="flex items-center text-black font-semibold text-base hover:underline"
      >
        <span>read more</span>
        <ChevronRight />
      </a>
    </div>
  )
}

export default function HomePage() {
  const categories = [
    {
      title: 'Bullets',
      subtitle: 'Types of',
      image: '/images/60cc1e4806bed741fbfd719f6502a296694db319.png',
      href: '#bullet-types',
      variant: 'bullets',
      tags: [
        { label: 'KNOWLEDGEBASE', variant: 'knowledge' },
        { label: 'USAGE', variant: 'usage' }
      ]
    },
    {
      title: 'Casings',
      subtitle: 'Types of',
      image: '/images/08e8b370620fd01f48598536a5b10a3844d4b77c.png',
      href: '#casings',
      tags: [
        { label: 'KNOWLEDGEBASE', variant: 'knowledge' },
        { label: 'SELECTION TIPS', variant: 'tips' }
      ]
    },
    {
      title: 'Primers',
      subtitle: 'Types of',
      image: '/images/09ddf6bac5711a663067e1ebb110beaaae66deb0.png',
      href: '#primers',
      tags: [
        { label: 'KNOWLEDGEBASE', variant: 'knowledge' },
        { label: 'HINTS', variant: 'tips' }
      ]
    }
  ]

  const loungeArticles = [
    {
      title: 'General Aviation Guide to Flying with Guns and Ammo',
      tag: 'How To Guides',
      link: 'https://www.luckygunner.com/labs/flying-general-aviation-with-firearms-guns-ammo/'
    },
    {
      title: 'How Recoil Affects Handgun Accuracy',
      tag: 'Toolbox',
      link: 'https://www.luckygunner.com/lounge/how-recoil-affects-handgun-accuracy/'
    },
    {
      title: 'Do You Really Have to Clean Your Guns?',
      tag: 'Toolbox',
      link: 'https://www.luckygunner.com/lounge/do-you-really-have-to-clean-your-guns/'
    }
  ]

  const articles = [
    {
      title: "How To Carry A Concealed Weapon With A Men's Suit, Sport Jacket Or Blazer",
      link: 'https://www.luckygunner.com/how-to-carry-a-concealed-weapon-with-a-suit-blazer-sport-coat'
    },
    {
      title: 'Remington New Product Line- Nickel Plated UMC Target Ammunition',
      link: 'https://www.luckygunner.com/remington-nickel-plated-umc-target-ammo-review/'
    }
  ]

  return (
    <main className="w-full max-w-[1170px] mx-auto px-4 py-12">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1
          className="text-[64px] text-black mb-4"
          style={{ fontFamily: "'Open Sans Condensed', sans-serif", fontWeight: 700 }}
        >
          AmmoPedia
        </h1>
        <p className="text-base text-black max-w-2xl mx-auto">
          Welcome to LuckyGunner.com's Ammopedia! This is a knowledge-sharing section of our site dedicated to explaining different topics related to ammunition
        </p>
      </div>

      {/* Category Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0.5 mb-0.5">
        {categories.map((category, index) => (
          <CategoryCard key={index} {...category} />
        ))}
        <MoreToComeCard />
      </div>

      {/* Map and Reviews Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0.5 mb-12">
        <MapSection />
        <ReviewsSection />
      </div>

      {/* Lounge Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0.5 mb-16">
        {loungeArticles.map((article, index) => (
          <LoungeCard key={index} {...article} />
        ))}
        <ReadMoreContainer />
      </div>

      {/* Articles Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 max-w-xl">
        {articles.map((article, index) => (
          <ArticleCard key={index} {...article} />
        ))}
      </div>
    </main>
  )
}
