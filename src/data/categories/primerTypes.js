// Primer Types Category Data
// All items have detail pages

const primerTypesData = {
  title: "Primers",
  subtitle: "Types of",
  description: "Primers are the ignition source that starts the firing sequence. Different primer types are designed for specific applications and cartridge sizes.",

  featured: {
    hero: "boxer",
    popular: ["berdan", "small-pistol", "large-rifle"]
  },

  groups: [
    {
      name: "Primer Systems",
      slug: "primer-systems",
      items: [
        {
          slug: "boxer",
          title: "Boxer Primers",
          description: "The most common primer type in the US. Features a single flash hole and is easily reloadable. Named after Edward Boxer.",
          image: "/images/freepik__candid-photography-with-natural-textures-and-highl__20310.png",
          tags: ["Common", "Reloadable"],
          href: "/ammopedia/primer-type/boxer",
          hasDetailPage: true
        },
        {
          slug: "berdan",
          title: "Berdan Primers",
          description: "Features multiple flash holes and a built-in anvil in the primer pocket. Common in military surplus ammo. Difficult to reload.",
          image: "/images/freepik__candid-photography-with-natural-textures-and-highl__20311.png",
          tags: ["Military"],
          href: "/ammopedia/primer-type/berdan",
          hasDetailPage: true
        },
        {
          slug: "rimfire",
          title: "Rimfire Primers",
          description: "Priming compound is contained in the rim of the cartridge. Used in .22 LR and similar calibers. Not reloadable.",
          image: "/images/freepik__candid-photography-with-natural-textures-and-highl__20312.png",
          tags: ["Rimfire"],
          href: "/ammopedia/primer-type/rimfire",
          hasDetailPage: true
        },
      ]
    },
    {
      name: "Pistol Primers",
      slug: "pistol-primers",
      items: [
        {
          slug: "small-pistol",
          title: "Small Pistol Primers",
          description: "Standard primers for small pistol cartridges like 9mm, .380 ACP, and .38 Special. 0.175\" diameter.",
          image: "/images/freepik__candid-photography-with-natural-textures-and-highl__20310.png",
          tags: ["Pistol"],
          href: "/ammopedia/primer-type/small-pistol",
          hasDetailPage: true
        },
        {
          slug: "small-pistol-magnum",
          title: "Small Pistol Magnum Primers",
          description: "Hotter primers for magnum small pistol loads or ball powder. Provides more reliable ignition.",
          image: "/images/freepik__candid-photography-with-natural-textures-and-highl__20311.png",
          tags: ["Pistol", "Magnum"],
          href: "/ammopedia/primer-type/small-pistol-magnum",
          hasDetailPage: true
        },
        {
          slug: "large-pistol",
          title: "Large Pistol Primers",
          description: "Standard primers for large pistol cartridges like .45 ACP and .44 Magnum. 0.210\" diameter.",
          image: "/images/freepik__candid-photography-with-natural-textures-and-highl__20312.png",
          tags: ["Pistol"],
          href: "/ammopedia/primer-type/large-pistol",
          hasDetailPage: true
        },
        {
          slug: "large-pistol-magnum",
          title: "Large Pistol Magnum Primers",
          description: "Hotter primers for magnum large pistol loads. Essential for reliable ignition with slower powders.",
          image: "/images/freepik__candid-photography-with-natural-textures-and-highl__20313.png",
          tags: ["Pistol", "Magnum"],
          href: "/ammopedia/primer-type/large-pistol-magnum",
          hasDetailPage: true
        },
      ]
    },
    {
      name: "Rifle Primers",
      slug: "rifle-primers",
      items: [
        {
          slug: "small-rifle",
          title: "Small Rifle Primers",
          description: "Standard primers for small rifle cartridges like .223 Remington. Harder cup than pistol primers.",
          image: "/images/freepik__candid-photography-with-natural-textures-and-highl__20310.png",
          tags: ["Rifle"],
          href: "/ammopedia/primer-type/small-rifle",
          hasDetailPage: true
        },
        {
          slug: "small-rifle-magnum",
          title: "Small Rifle Magnum Primers",
          description: "Hotter primers for small rifle magnum loads or large capacity cases.",
          image: "/images/freepik__candid-photography-with-natural-textures-and-highl__20311.png",
          tags: ["Rifle", "Magnum"],
          href: "/ammopedia/primer-type/small-rifle-magnum",
          hasDetailPage: true
        },
        {
          slug: "large-rifle",
          title: "Large Rifle Primers",
          description: "Standard primers for large rifle cartridges like .308 Winchester and .30-06. 0.210\" diameter.",
          image: "/images/freepik__candid-photography-with-natural-textures-and-highl__20312.png",
          tags: ["Rifle"],
          href: "/ammopedia/primer-type/large-rifle",
          hasDetailPage: true
        },
        {
          slug: "large-rifle-magnum",
          title: "Large Rifle Magnum Primers",
          description: "Hotter primers for magnum rifle cartridges. Essential for consistent ignition with slow powders.",
          image: "/images/freepik__candid-photography-with-natural-textures-and-highl__20313.png",
          tags: ["Rifle", "Magnum"],
          href: "/ammopedia/primer-type/large-rifle-magnum",
          hasDetailPage: true
        },
      ]
    }
  ]
}

export default primerTypesData
