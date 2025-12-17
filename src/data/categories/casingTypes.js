// Casing Types Category Data
// All items have detail pages

const casingTypesData = {
  title: "Casings",
  subtitle: "Types of",
  description: "Ammunition casings hold all components together and are essential for proper firearm function. Learn about different casing materials and their characteristics.",

  featured: {
    hero: "brass",
    popular: ["nickel-plated-brass", "steel", "aluminum"]
  },

  groups: [
    {
      name: "All Casing Types",
      slug: "all-casings",
      items: [
        {
          slug: "aluminum",
          title: "Aluminum",
          description: "Lightweight, non-reloadable casings often used in budget ammunition. Corrosion resistant but not suitable for reloading.",
          image: "/images/freepik__aluminum-ammunition-casing-lightweight-silvergray-__20304.png",
          tags: ["Budget"],
          href: "/ammopedia/casing-type/aluminum",
          hasDetailPage: true
        },
        {
          slug: "brass",
          title: "Brass",
          description: "The most common and popular casing material. Excellent for reloading, corrosion resistant, and provides reliable extraction.",
          image: "/images/freepik__brass-ammunition-casing-polished-goldenyellow-meta__20305.png",
          tags: ["Premium", "Reloadable"],
          href: "/ammopedia/casing-type/brass",
          hasDetailPage: true
        },
        {
          slug: "brass-plated-steel",
          title: "Brass-Plated Steel",
          description: "Steel casings with brass coating for improved corrosion resistance. More affordable than solid brass.",
          image: "/images/freepik__candid-photography-with-natural-textures-and-highl__20309.png",
          tags: ["Budget"],
          href: "/ammopedia/casing-type/brass-plated-steel",
          hasDetailPage: true
        },
        {
          slug: "copper-plated-steel",
          title: "Copper-Plated Steel",
          description: "Steel casings with copper wash coating. Budget-friendly option with decent corrosion resistance.",
          image: "/images/freepik__candid-photography-with-natural-textures-and-highl__20308.png",
          tags: ["Budget"],
          href: "/ammopedia/casing-type/copper-plated-steel",
          hasDetailPage: true
        },
        {
          slug: "nickel-plated-brass",
          title: "Nickel-Plated Brass",
          description: "Brass casings with nickel coating for enhanced corrosion resistance and smoother feeding. Popular for defensive ammunition.",
          image: "/images/freepik__nickelplated-brass-ammunition-casing-bright-silver__20306.png",
          tags: ["Premium", "Defense"],
          href: "/ammopedia/casing-type/nickel-plated-brass",
          hasDetailPage: true
        },
        {
          slug: "steel",
          title: "Steel",
          description: "Affordable alternative to brass. Typically lacquered or polymer-coated. Not recommended for reloading.",
          image: "/images/freepik__candid-photography-with-natural-textures-and-highl__20307.png",
          tags: ["Budget"],
          href: "/ammopedia/casing-type/steel",
          hasDetailPage: true
        },
      ]
    }
  ]
}

export default casingTypesData
