// Bullet Types Category Data
// Items with hasDetailPage: true have existing detail pages
// Items with hasDetailPage: false are displayed but not clickable

// Reusable product templates
const productTemplates = {
  shotgun: [
    {
      name: "410 Gauge - 3\" 3/4 oz. #6 Shot - Winchester Super-X - 25 Rounds",
      price: "$22.00",
      quantity: "25 Rounds",
      costPerRound: "$0.88 per round",
      manufacturer: "Winchester",
      load: "3\" #6 Shot",
      image: "/images/b56109ab9ec02a518a829abe6225ec3d_6.jpg",
      href: "#",
      rating: 5,
      reviewCount: 4
    },
    {
      name: "410 Bore - 2-1/2\" 1/2oz. #9 Shot - Fiocchi - 250 Rounds",
      price: "$145.00",
      quantity: "250 Rounds",
      costPerRound: "$0.58 per round",
      manufacturer: "Fiocchi",
      load: "2-1/2\" #9 Shot",
      image: "/images/d6aa64d6a5c10e47deaf610f1299fa42_5.jpg",
      href: "#",
      rating: 4,
      reviewCount: 12
    },
    {
      name: "410 Bore - 3\" 3/8oz. #6 Steel Shot - Winchester Xpert - 250 Rounds",
      price: "$175.00",
      quantity: "250 Rounds",
      costPerRound: "$0.70 per round",
      manufacturer: "Winchester",
      load: "3\" #6 Steel Shot",
      image: "/images/21aa2ef49ca4948e94a5c31ea98fd8cd.jpg",
      href: "#",
      rating: 4,
      reviewCount: 8
    }
  ],
  rifle: [
    {
      name: "9mm Luger - 147gr Bonded HP - Speer Gold Dot G2 - 1000 Rounds",
      price: "$549.00",
      quantity: "1000 rounds per box",
      manufacturer: "Speer Gold Dot G2",
      bullets: "147 grain Bonded HP",
      casings: "Boxer-primed nickel-plated brass",
      image: "/images/b56109ab9ec02a518a829abe6225ec3d_6.jpg",
      href: "#",
      rating: 5,
      reviewCount: 23
    },
    {
      name: ".308 Win - 150gr FMJ - Federal American Eagle - 500 Rounds",
      price: "$425.00",
      quantity: "500 Rounds",
      costPerRound: "$0.85 per round",
      manufacturer: "Federal",
      bullets: "150 grain FMJ",
      image: "/images/d6aa64d6a5c10e47deaf610f1299fa42_5.jpg",
      href: "#",
      rating: 4,
      reviewCount: 15
    }
  ],
  pistol: [
    {
      name: "9mm Luger - 115gr FMJ - Winchester White Box - 1000 Rounds",
      price: "$289.00",
      quantity: "1000 Rounds",
      costPerRound: "$0.29 per round",
      manufacturer: "Winchester",
      bullets: "115 grain FMJ",
      image: "/images/b56109ab9ec02a518a829abe6225ec3d_6.jpg",
      href: "#",
      rating: 5,
      reviewCount: 156
    },
    {
      name: ".45 ACP - 230gr FMJ - Federal American Eagle - 500 Rounds",
      price: "$275.00",
      quantity: "500 Rounds",
      costPerRound: "$0.55 per round",
      manufacturer: "Federal",
      bullets: "230 grain FMJ",
      image: "/images/d6aa64d6a5c10e47deaf610f1299fa42_5.jpg",
      href: "#",
      rating: 4,
      reviewCount: 42
    },
    {
      name: ".40 S&W - 180gr JHP - Hornady Critical Defense - 200 Rounds",
      price: "$189.00",
      quantity: "200 Rounds",
      costPerRound: "$0.95 per round",
      manufacturer: "Hornady",
      bullets: "180 grain JHP",
      image: "/images/21aa2ef49ca4948e94a5c31ea98fd8cd.jpg",
      href: "#",
      rating: 5,
      reviewCount: 28
    }
  ]
}

const bulletTypesData = {
  title: "Bullets",
  subtitle: "Types of",
  description: "Learn about different bullet types used in ammunition. Each bullet type is designed for specific purposes, from target practice to self-defense and hunting.",

  // Sidebar configuration
  sidebarImage: "/images/sidebar-bullets-new.png",

  featured: {
    hero: "fmj",
    popular: ["jhp", "sp", "lrn", "fmj-bt"]
  },

  groups: [
    {
      name: "Shot Types",
      slug: "shot-types",
      items: [
        {
          slug: "1-buck",
          title: "#1 Buck",
          description: "Large buckshot pellets commonly used for hunting medium game.",
          fullDescription: "Buckshot refers to shotgun ammo that uses pellets too large to simply pour into the shell casing. Pellet sizes are numbered - lower numbers mean larger diameter. #1 buckshot pellets measure .30\" in diameter, larger than #2 but smaller than 0 (single aught) and 00 (double aught).",
          tags: ["Hunting"],
          href: "/ammopedia/bullet-type/1-buck",
          hasDetailPage: true,
          image: "/images/freepik__1-buck-shotgun-shell-cutaway-showing-1-buckshot-pe__20238.jpeg",
          specs: {
            "Pellet Diameter": ".30\"",
            "Shot Weight": "3/4 - 1-1/8 oz",
            "Pellet Count": "16-24",
            "Muzzle Velocity": "1,200-1,325 fps",
            "Shot Material": "Lead / Steel",
            "Effective Range": "25-40 yards",
            "Shell Lengths": "2¾\", 3\", 3½\"",
            "Recommended Choke": "IC / Modified"
          },
          useTypes: [
            { label: "Buckshot", icon: "/images/Buckshot.svg" },
            { label: "Deer Hunting", icon: "/images/Deer-Hunting.svg" },
            { label: "Self Defence", icon: "/images/Self-defence.svg" }
          ],
          comparison: {
            headers: ["Size", "Diameter", "Pellets", "Weight", "Velocity", "Use Type"],
            rows: [
              ["#4 Buck", ".24\"", "27", "3/4 oz.", "1,250 fps", [{ label: "Self Defence", icon: "/images/Self-defence.svg" }, { label: "Varmint", icon: "/images/Varmint-Hunting.svg" }]],
              ["#3 Buck", ".25\"", "20", "7/8 oz.", null, [{ label: "Deer Hunting", icon: "/images/Deer-Hunting.svg" }]],
              ["#1 Buck", ".30\"", "16", "1 oz.", "1,200-1,325 fps", [{ label: "Deer Hunting", icon: "/images/Deer-Hunting.svg" }, { label: "Self Defence", icon: "/images/Self-defence.svg" }]],
              ["0 Buck", ".32\"", "12", "1 oz.", "1,275 fps", [{ label: "Deer Hunting", icon: "/images/Deer-Hunting.svg" }, { label: "Wild Boar", icon: "/images/Wild-Boar-Hunting.svg" }]],
              ["00 Buck", ".33\"", "9", "1-1/8 oz.", "1,325 fps", [{ label: "Deer Hunting", icon: "/images/Deer-Hunting.svg" }, { label: "Self Defence", icon: "/images/Self-defence.svg" }, { label: "Tactical", icon: "/images/Tactical-Steel-Target.svg" }]],
              ["000 Buck", ".36\"", "8", null, "1,225 fps", [{ label: "Heavy Game", icon: "/images/Heavy Game.svg" }, { label: "Wild Boar", icon: "/images/Wild-Boar-Hunting.svg" }]]
            ]
          },
          productType: "buckshot",
          products: productTemplates.shotgun.concat([{
            name: "12 Gauge - 2-3/4\" 00 Buck - Federal Power-Shok - 250 Rounds",
            price: "$199.00",
            quantity: "250 Rounds",
            costPerRound: "$0.80 per round",
            manufacturer: "Federal",
            load: "2-3/4\" 00 Buck",
            image: "/images/b56109ab9ec02a518a829abe6225ec3d_6.jpg",
            href: "#",
            rating: 5,
            reviewCount: 67
          }]),
          faq: [
            { question: "Is #1 Buck good for home defense?", answer: "Yes. More pellets than 00 Buck (16 vs 9) means higher hit probability, while still meeting FBI penetration standards. Reduced overpenetration risk compared to larger buckshot." },
            { question: "#1 Buck vs 00 Buck for deer?", answer: "#1 Buck: better pattern density, ideal under 35 yards in brush. 00 Buck: heavier pellets, better at longer range in open terrain." }
          ]
        },
        {
          slug: "12-shot",
          title: "#12 Shot",
          description: "Very fine shot used for pest control and small game.",
          fullDescription: "#12 shot is the smallest commercially available shotgun pellet size at .05\" diameter. Primarily used for pest control, snake loads, and close-range small game. The tiny pellets provide dense patterns but limited range and penetration.",
          tags: ["Hunting"],
          href: "/ammopedia/bullet-type/12-shot",
          hasDetailPage: true,
          image: "/images/freepik__12-shot-shotgun-shell-with-12-shot-size-pellets-ex__20250.png",
          specs: {
            "Pellet Diameter": ".05\"",
            "Shot Weight": "1/4 - 1/2 oz",
            "Pellet Count": "2,385+",
            "Muzzle Velocity": "1,000-1,200 fps",
            "Shot Material": "Lead",
            "Effective Range": "10-15 yards",
            "Shell Lengths": "2½\", 2¾\"",
            "Primary Use": "Pest Control"
          },
          useTypes: [
            { label: "Varmint", icon: "/images/Varmint-Hunting.svg" },
            { label: "Indoor Range", icon: "/images/Indoor-Range.svg" }
          ],
          comparison: {
            headers: ["Size", "Diameter", "Count/oz", "Best For"],
            rows: [
              ["#12", ".05\"", "2,385", [{ label: "Varmint", icon: "/images/Varmint-Hunting.svg" }]],
              ["#9", ".08\"", "585", [{ label: "Sporting Clays", icon: "/images/Sporting Clays.svg" }]],
              ["#8", ".09\"", "410", [{ label: "Target Loads", icon: "/images/Target Loads.svg" }]]
            ]
          },
          productType: "birdshot",
          products: productTemplates.shotgun.slice(0, 2),
          faq: [
            { question: "What is #12 shot used for?", answer: "Primarily pest control (rats, snakes), garden pests, and very close-range small game. Also used in specialty \"snake loads\" for revolvers." },
            { question: "Can #12 shot kill snakes?", answer: "Yes, at close range (under 10 feet). The dense pattern is effective against snakes while minimizing damage to surroundings." }
          ]
        },
        {
          slug: "2-shot",
          title: "#2 Shot",
          description: "Medium-sized shot popular for waterfowl hunting.",
          fullDescription: "#2 shot (.15\" diameter) is a versatile medium-sized pellet commonly used for waterfowl hunting, particularly ducks and geese. Available in both lead and steel, it offers a good balance of pattern density and individual pellet energy.",
          tags: ["Hunting"],
          href: "/ammopedia/bullet-type/2-shot",
          hasDetailPage: true,
          image: "/images/freepik__2-shot-shotgun-shell-with-only-2-shot-size-pellets__20242.png",
          specs: {
            "Pellet Diameter": ".15\"",
            "Shot Weight": "1 - 1-1/2 oz",
            "Pellet Count": "87-130",
            "Muzzle Velocity": "1,300-1,500 fps",
            "Shot Material": "Lead / Steel",
            "Effective Range": "35-50 yards",
            "Shell Lengths": "2¾\", 3\", 3½\"",
            "Recommended Choke": "Modified / Full"
          },
          useTypes: [
            { label: "Waterfowl", icon: "/images/Waterfowl.svg" },
            { label: "Upland Game", icon: "/images/Upland Game.svg" }
          ],
          comparison: {
            headers: ["Size", "Diameter", "Pellets/oz", "Use"],
            rows: [
              ["#4", ".13\"", "135", [{ label: "Waterfowl", icon: "/images/Waterfowl.svg" }, { label: "Pheasant", icon: "/images/Pheasant.svg" }]],
              ["#2", ".15\"", "87", [{ label: "Waterfowl", icon: "/images/Waterfowl.svg" }]],
              ["BB", ".18\"", "50", [{ label: "Waterfowl", icon: "/images/Waterfowl.svg" }, { label: "Varmint", icon: "/images/Varmint-Hunting.svg" }]]
            ]
          },
          productType: "waterfowl",
          products: productTemplates.shotgun.slice(0, 3),
          faq: [
            { question: "Is #2 shot good for geese?", answer: "Yes, especially steel #2. Provides adequate penetration for geese at typical hunting ranges (30-45 yards) while maintaining reasonable pattern density." },
            { question: "Steel vs lead #2 shot?", answer: "Steel #2 is required for waterfowl (federal law). Use two sizes larger in steel to match lead's energy - steel #2 roughly equals lead #4." }
          ]
        },
        {
          slug: "3-buck",
          title: "#3 Buck",
          description: "Medium buckshot for versatile hunting applications.",
          fullDescription: "#3 buckshot (.25\" diameter) offers a middle ground between smaller #4 buck and larger #1 buck. With approximately 20 pellets per shell, it provides good pattern density while still delivering adequate energy per pellet for medium game.",
          tags: ["Hunting"],
          href: "/ammopedia/bullet-type/3-buck",
          hasDetailPage: true,
          image: "/images/freepik__3-buck-shotgun-shell-cutaway-showing-only-3-bucksh__20241.png",
          specs: {
            "Pellet Diameter": ".25\"",
            "Shot Weight": "7/8 - 1 oz",
            "Pellet Count": "18-24",
            "Muzzle Velocity": "1,200-1,300 fps",
            "Shot Material": "Lead",
            "Effective Range": "25-35 yards",
            "Shell Lengths": "2¾\", 3\"",
            "Recommended Choke": "IC / Modified"
          },
          useTypes: [
            { label: "Buckshot", icon: "/images/Buckshot.svg" },
            { label: "Deer Hunting", icon: "/images/Deer-Hunting.svg" }
          ],
          comparison: {
            headers: ["Size", "Diameter", "Pellets", "Energy"],
            rows: [
              ["#4 Buck", ".24\"", "27", "Lower per pellet"],
              ["#3 Buck", ".25\"", "20", "Balanced"],
              ["#1 Buck", ".30\"", "16", "Higher per pellet"]
            ]
          },
          productType: "buckshot",
          products: productTemplates.shotgun.slice(0, 3),
          faq: [
            { question: "Why is #3 buck less common?", answer: "#3 buck occupies a niche between #4 and #1 buck. Many hunters prefer the extremes: more pellets (#4) or more energy per pellet (#1, 00)." }
          ]
        },
        {
          slug: "4-shot",
          title: "#4 Shot",
          description: "Versatile shot size for various game birds.",
          fullDescription: "#4 shot (.13\" diameter) is a versatile medium pellet excellent for pheasant, ducks, and other medium-sized birds. It offers good pattern density with adequate energy for clean kills at reasonable ranges.",
          tags: ["Hunting"],
          href: "/ammopedia/bullet-type/4-shot",
          hasDetailPage: true,
          image: "/images/freepik__4-shot-shotgun-shell-with-4-shot-size-pellets-vers__20243.png",
          specs: {
            "Pellet Diameter": ".13\"",
            "Shot Weight": "1 - 1-3/8 oz",
            "Pellet Count": "135-185",
            "Muzzle Velocity": "1,250-1,400 fps",
            "Shot Material": "Lead / Steel",
            "Effective Range": "30-45 yards",
            "Shell Lengths": "2¾\", 3\", 3½\"",
            "Recommended Choke": "Modified / IM"
          },
          useTypes: [
            { label: "Pheasant", icon: "/images/Pheasant.svg" },
            { label: "Waterfowl", icon: "/images/Waterfowl.svg" }
          ],
          comparison: {
            headers: ["Size", "Diameter", "Pellets/oz", "Range"],
            rows: [
              ["#6", ".11\"", "225", "25-35 yards"],
              ["#4", ".13\"", "135", "30-45 yards"],
              ["#2", ".15\"", "87", "35-50 yards"]
            ]
          },
          productType: "upland",
          products: productTemplates.shotgun.slice(0, 3),
          faq: [
            { question: "Is #4 shot good for pheasant?", answer: "Excellent choice. #4 provides enough penetration for pheasant's thick feathers while maintaining adequate pattern density at typical flushing distances." }
          ]
        },
        {
          slug: "5-shot",
          title: "#5 Shot",
          description: "Popular for pheasant and small game hunting.",
          fullDescription: "#5 shot (.12\" diameter) bridges the gap between dense #6 patterns and harder-hitting #4. Excellent for pheasant and other upland birds at moderate ranges, offering a good balance of pellet count and individual pellet energy.",
          tags: ["Hunting"],
          href: "/ammopedia/bullet-type/5-shot",
          hasDetailPage: true,
          image: "/images/freepik__5-shot-shotgun-shell-with-5-shot-size-pellets-upla__20245.png",
          specs: {
            "Pellet Diameter": ".12\"",
            "Shot Weight": "1 - 1-1/4 oz",
            "Pellet Count": "170-213",
            "Muzzle Velocity": "1,250-1,350 fps",
            "Shot Material": "Lead / Steel",
            "Effective Range": "30-40 yards",
            "Shell Lengths": "2¾\", 3\"",
            "Recommended Choke": "Modified"
          },
          useTypes: [
            { label: "Pheasant", icon: "/images/Pheasant.svg" },
            { label: "Upland Game", icon: "/images/Upland Game.svg" }
          ],
          comparison: {
            headers: ["Size", "Diameter", "Pellets/oz", "Best For"],
            rows: [
              ["#6", ".11\"", "225", [{ label: "Upland Game", icon: "/images/Upland Game.svg" }]],
              ["#5", ".12\"", "170", [{ label: "Pheasant", icon: "/images/Pheasant.svg" }]],
              ["#4", ".13\"", "135", [{ label: "Pheasant", icon: "/images/Pheasant.svg" }]]
            ]
          },
          productType: "upland",
          products: productTemplates.shotgun.slice(0, 2),
          faq: [
            { question: "#5 vs #6 for pheasant?", answer: "#5 offers better penetration for late-season birds with thick plumage. #6 works well early season when patterns matter more than penetration." }
          ]
        },
        {
          slug: "6-shot",
          title: "#6 Shot",
          description: "Common choice for upland bird hunting.",
          fullDescription: "#6 shot (.11\" diameter) is one of the most popular sizes for upland bird hunting. The high pellet count creates dense patterns ideal for fast-flying birds like dove, quail, and early-season pheasant.",
          tags: ["Hunting"],
          href: "/ammopedia/bullet-type/6-shot",
          hasDetailPage: true,
          image: "/images/freepik__6-shot-shotgun-shell-with-6-shot-size-pellets-smal__20246.png",
          specs: {
            "Pellet Diameter": ".11\"",
            "Shot Weight": "1 - 1-1/8 oz",
            "Pellet Count": "225-253",
            "Muzzle Velocity": "1,200-1,350 fps",
            "Shot Material": "Lead / Steel",
            "Effective Range": "25-35 yards",
            "Shell Lengths": "2¾\", 3\"",
            "Recommended Choke": "IC / Modified"
          },
          useTypes: [
            { label: "Upland Game", icon: "/images/Upland Game.svg" },
            { label: "Pheasant", icon: "/images/Pheasant.svg" }
          ],
          comparison: {
            headers: ["Size", "Diameter", "Pellets/oz", "Application"],
            rows: [
              ["#7.5", ".095\"", "350", [{ label: "Sporting Clays", icon: "/images/Sporting Clays.svg" }]],
              ["#6", ".11\"", "225", [{ label: "Upland Game", icon: "/images/Upland Game.svg" }]],
              ["#5", ".12\"", "170", [{ label: "Pheasant", icon: "/images/Pheasant.svg" }]]
            ]
          },
          productType: "upland",
          products: productTemplates.shotgun.slice(0, 3),
          faq: [
            { question: "Is #6 shot good for dove?", answer: "Excellent. The dense pattern compensates for the small, fast-moving targets. Most dove hunters prefer #6 or #7.5 shot." }
          ]
        },
        {
          slug: "7-shot",
          title: "#7 Shot",
          description: "Fine shot for small birds and clay targets.",
          fullDescription: "#7 shot (.10\" diameter) provides very dense patterns suitable for small, fast game birds and clay target shooting. Less common than #7.5, it offers a slight edge in penetration while maintaining excellent pattern density.",
          tags: ["Target"],
          href: "/ammopedia/bullet-type/7-shot",
          hasDetailPage: true,
          image: "/images/freepik__7-shot-shotgun-shell-with-7-shot-size-pellets-fine__20248.png",
          specs: {
            "Pellet Diameter": ".10\"",
            "Shot Weight": "7/8 - 1-1/8 oz",
            "Pellet Count": "300-340",
            "Muzzle Velocity": "1,200-1,300 fps",
            "Shot Material": "Lead",
            "Effective Range": "25-35 yards",
            "Shell Lengths": "2¾\"",
            "Recommended Choke": "IC / Modified"
          },
          useTypes: [
            { label: "Sporting Clays", icon: "/images/Sporting Clays.svg" },
            { label: "Upland Game", icon: "/images/Upland Game.svg" }
          ],
          comparison: {
            headers: ["Size", "Diameter", "Pellets/oz", "Use"],
            rows: [
              ["#8", ".09\"", "410", [{ label: "Target Loads", icon: "/images/Target Loads.svg" }]],
              ["#7.5", ".095\"", "350", [{ label: "Sporting Clays", icon: "/images/Sporting Clays.svg" }]],
              ["#7", ".10\"", "300", [{ label: "Sporting Clays", icon: "/images/Sporting Clays.svg" }, { label: "Upland Game", icon: "/images/Upland Game.svg" }]]
            ]
          },
          productType: "target",
          products: productTemplates.shotgun.slice(0, 2),
          faq: [
            { question: "#7 vs #7.5 shot?", answer: "#7 offers slightly more energy per pellet with fewer pellets. #7.5 is more common and provides denser patterns preferred for clay targets." }
          ]
        },
        {
          slug: "7-5-shot",
          title: "#7-1/2 Shot",
          description: "Popular for trap and skeet shooting.",
          fullDescription: "#7.5 shot (.095\" diameter) is the most popular size for clay target sports. It provides an ideal balance of pattern density and target-breaking energy, making it the standard for trap, skeet, and sporting clays.",
          tags: ["Target"],
          href: "/ammopedia/bullet-type/7-5-shot",
          hasDetailPage: true,
          image: "/images/freepik__75-shot-shotgun-shell-with-75-shot-size-pellets-cl__20247.png",
          specs: {
            "Pellet Diameter": ".095\"",
            "Shot Weight": "7/8 - 1-1/8 oz",
            "Pellet Count": "350-394",
            "Muzzle Velocity": "1,145-1,290 fps",
            "Shot Material": "Lead",
            "Effective Range": "25-40 yards",
            "Shell Lengths": "2¾\"",
            "Recommended Choke": "Varies by discipline"
          },
          useTypes: [
            { label: "Target Loads", icon: "/images/Target Loads.svg" },
            { label: "Sporting Clays", icon: "/images/Sporting Clays.svg" }
          ],
          comparison: {
            headers: ["Size", "Diameter", "Pellets/oz", "Discipline"],
            rows: [
              ["#9", ".08\"", "585", [{ label: "Target Loads", icon: "/images/Target Loads.svg" }]],
              ["#8", ".09\"", "410", [{ label: "Target Loads", icon: "/images/Target Loads.svg" }]],
              ["#7.5", ".095\"", "350", [{ label: "Sporting Clays", icon: "/images/Sporting Clays.svg" }]]
            ]
          },
          productType: "target",
          products: productTemplates.shotgun.slice(0, 3),
          faq: [
            { question: "Why is #7.5 popular for trap?", answer: "Optimal balance: enough pellets for reliable hits at trap distances (16-27 yards) with sufficient energy to break targets decisively." },
            { question: "#7.5 vs #8 for sporting clays?", answer: "#7.5 better for longer targets. #8 preferred for closer presentations. Many shooters carry both." }
          ]
        },
        {
          slug: "8-shot",
          title: "#8 Shot",
          description: "Standard clay target and small game shot.",
          fullDescription: "#8 shot (.09\" diameter) is a staple for skeet shooting and works well for close-range trap. The high pellet count creates dense, forgiving patterns ideal for fast-moving targets at moderate distances.",
          tags: ["Target"],
          href: "/ammopedia/bullet-type/8-shot",
          hasDetailPage: true,
          specs: {
            "Pellet Diameter": ".09\"",
            "Shot Weight": "7/8 - 1-1/8 oz",
            "Pellet Count": "410-461",
            "Muzzle Velocity": "1,145-1,235 fps",
            "Shot Material": "Lead",
            "Effective Range": "20-30 yards",
            "Shell Lengths": "2¾\"",
            "Recommended Choke": "Skeet / IC"
          },
          useTypes: [
            { label: "Target Loads", icon: "/images/Target Loads.svg" },
            { label: "Match Shooting", icon: "/images/Match-Shooting.svg" }
          ],
          comparison: {
            headers: ["Size", "Diameter", "Pellets/oz", "Best For"],
            rows: [
              ["#9", ".08\"", "585", [{ label: "Target Loads", icon: "/images/Target Loads.svg" }]],
              ["#8", ".09\"", "410", [{ label: "Target Loads", icon: "/images/Target Loads.svg" }]],
              ["#7.5", ".095\"", "350", [{ label: "Target Loads", icon: "/images/Target Loads.svg" }]]
            ]
          },
          productType: "target",
          products: productTemplates.shotgun.slice(0, 2),
          faq: [
            { question: "Is #8 shot good for skeet?", answer: "Excellent. #8 is the standard for skeet shooting - dense patterns break targets reliably at skeet's closer ranges (3-27 yards)." }
          ]
        },
        {
          slug: "9-shot",
          title: "#9 Shot",
          description: "Very fine shot for close-range targets.",
          fullDescription: "#9 shot (.08\" diameter) provides the densest patterns of common target loads. Ideal for close-range skeet stations and sporting clays presentations where pattern density matters more than individual pellet energy.",
          tags: ["Target"],
          href: "/ammopedia/bullet-type/9-shot",
          hasDetailPage: true,
          image: "/images/freepik__9-shot-shotgun-shell-with-9-shot-size-pellets-very__20249.png",
          specs: {
            "Pellet Diameter": ".08\"",
            "Shot Weight": "7/8 - 1 oz",
            "Pellet Count": "512-585",
            "Muzzle Velocity": "1,145-1,200 fps",
            "Shot Material": "Lead",
            "Effective Range": "15-25 yards",
            "Shell Lengths": "2¾\"",
            "Recommended Choke": "Skeet / Cylinder"
          },
          useTypes: [
            { label: "Target Loads", icon: "/images/Target Loads.svg" },
            { label: "Sporting Clays", icon: "/images/Sporting Clays.svg" }
          ],
          comparison: {
            headers: ["Size", "Diameter", "Pellets/oz", "Range"],
            rows: [
              ["#9", ".08\"", "585", "15-25 yards"],
              ["#8", ".09\"", "410", "20-30 yards"],
              ["#7.5", ".095\"", "350", "25-40 yards"]
            ]
          },
          productType: "target",
          products: productTemplates.shotgun.slice(0, 2),
          faq: [
            { question: "When to use #9 shot?", answer: "Best for very close targets: skeet station 8, close sporting clays presentations, and sub-gauge shooting where patterns need density help." }
          ]
        },
        {
          slug: "00-buck",
          title: "00 Buck",
          description: "The most popular buckshot size for home defense.",
          fullDescription: "00 (\"double-aught\") buckshot is the most widely used buckshot size, especially for home defense and law enforcement. Each .33\" pellet delivers significant energy, and the typical 9-pellet load balances stopping power with manageable recoil.",
          tags: ["Defense"],
          href: "/ammopedia/bullet-type/00-buck",
          hasDetailPage: true,
          image: "/images/freepik__00-buck-shotgun-shell-cutaway-showing-00-buckshot-__20239.png",
          specs: {
            "Pellet Diameter": ".33\"",
            "Shot Weight": "1 - 1-1/2 oz",
            "Pellet Count": "8-15",
            "Muzzle Velocity": "1,200-1,600 fps",
            "Shot Material": "Lead / Copper-plated",
            "Effective Range": "25-50 yards",
            "Shell Lengths": "2¾\", 3\", 3½\"",
            "Recommended Choke": "IC / Cylinder"
          },
          useTypes: [
            { label: "Self Defence", icon: "/images/Self-defence.svg" },
            { label: "Tactical", icon: "/images/Tactical-Steel-Target.svg" },
            { label: "Deer Hunting", icon: "/images/Deer-Hunting.svg" }
          ],
          comparison: {
            headers: ["Size", "Diameter", "Pellets (2¾\")", "Energy/Pellet"],
            rows: [
              ["#1 Buck", ".30\"", "16", "~120 ft-lbs"],
              ["0 Buck", ".32\"", "12", "~140 ft-lbs"],
              ["00 Buck", ".33\"", "9", "~170 ft-lbs"],
              ["000 Buck", ".36\"", "8", "~200 ft-lbs"]
            ]
          },
          productType: "buckshot",
          products: productTemplates.shotgun,
          faq: [
            { question: "Why is 00 Buck so popular for defense?", answer: "Proven stopping power, widely available, and extensively tested by law enforcement. Each pellet roughly equals a .32 caliber projectile." },
            { question: "00 Buck vs slugs for home defense?", answer: "00 Buck offers multiple wound channels with less over-penetration risk. Slugs penetrate deeper and are better for barriers/outdoors." }
          ]
        },
        {
          slug: "000-buck",
          title: "000 Buck",
          description: "Large buckshot pellets for maximum stopping power.",
          fullDescription: "000 (\"triple-aught\") buckshot uses .36\" diameter pellets, the largest common buckshot size. With fewer but heavier pellets than 00 Buck, it maximizes per-pellet energy for large game and extreme defense scenarios.",
          tags: ["Defense"],
          href: "/ammopedia/bullet-type/000-buck",
          hasDetailPage: true,
          image: "/images/freepik__000-buck-shotgun-shell-cutaway-showing-realistic-s__20240.png",
          specs: {
            "Pellet Diameter": ".36\"",
            "Shot Weight": "1 - 1-1/4 oz",
            "Pellet Count": "6-10",
            "Muzzle Velocity": "1,150-1,325 fps",
            "Shot Material": "Lead",
            "Effective Range": "30-50 yards",
            "Shell Lengths": "2¾\", 3\"",
            "Recommended Choke": "Cylinder / IC"
          },
          useTypes: [
            { label: "Heavy Game", icon: "/images/Heavy Game.svg" },
            { label: "Wild Boar", icon: "/images/Wild-Boar-Hunting.svg" },
            { label: "Self Defence", icon: "/images/Self-defence.svg" }
          ],
          comparison: {
            headers: ["Size", "Diameter", "Pellets", "Best For"],
            rows: [
              ["00 Buck", ".33\"", "9", [{ label: "Self Defence", icon: "/images/Self-defence.svg" }, { label: "Deer Hunting", icon: "/images/Deer-Hunting.svg" }]],
              ["000 Buck", ".36\"", "8", [{ label: "Heavy Game", icon: "/images/Heavy Game.svg" }, { label: "Wild Boar", icon: "/images/Wild-Boar-Hunting.svg" }]]
            ]
          },
          productType: "buckshot",
          products: productTemplates.shotgun.slice(0, 3),
          faq: [
            { question: "000 Buck vs 00 Buck?", answer: "000 delivers more energy per pellet but fewer pellets. Better for large/dangerous game. 00 preferred for defense due to pattern density." }
          ]
        }
      ]
    },
    {
      name: "Full Metal Jacket",
      slug: "fmj-variants",
      items: [
        {
          slug: "fmj",
          title: "Full Metal Jacket (FMJ)",
          description: "The most common bullet type, with a soft lead core encased in harder metal. Ideal for target practice and training.",
          fullDescription: "Full Metal Jacket (FMJ) bullets feature a soft lead core completely enclosed in a harder metal shell, typically copper or gilding metal. This design prevents lead fouling, improves feeding reliability, and is the worldwide standard for military and training ammunition.",
          tags: ["Target", "Range"],
          href: "/ammopedia/bullet-type/fmj",
          hasDetailPage: true,
          image: "/images/freepik__fmj-full-metal-jacket-fmj-bullet-copper-jacketed-r__20251.png",
          specs: {
            "Core Material": "Lead",
            "Jacket Material": "Copper / Gilding Metal",
            "Weight Range": "55-230 grain",
            "Typical Calibers": "All common calibers",
            "Expansion": "None (non-expanding)",
            "Penetration": "High - passes through",
            "Cost": "Low - economical",
            "Best Use": "Training / Target"
          },
          useTypes: [
            { label: "Range Training", icon: "/images/Range-Training.svg" },
            { label: "Match Shooting", icon: "/images/Match-Shooting.svg" }
          ],
          comparison: {
            headers: ["Type", "Expansion", "Penetration", "Cost", "Use"],
            rows: [
              ["FMJ", "None", "High", "Low", [{ label: "Range Training", icon: "/images/Range-Training.svg" }]],
              ["JHP", "Controlled", "Medium", "Medium", [{ label: "Self Defence", icon: "/images/Self-defence.svg" }]],
              ["SP", "Moderate", "Medium-High", "Medium", [{ label: "Deer Hunting", icon: "/images/Deer-Hunting.svg" }]]
            ]
          },
          productType: "FMJ",
          products: productTemplates.pistol,
          faq: [
            { question: "Why FMJ for training?", answer: "Low cost, reliable feeding, and reduced barrel fouling make FMJ ideal for high-volume practice. The consistent performance helps build shooting fundamentals." },
            { question: "FMJ for self-defense?", answer: "Not recommended. FMJ over-penetrates and doesn't expand, reducing stopping power and increasing risk of collateral damage. Use JHP for defense." }
          ]
        },
        {
          slug: "fmj-bt",
          title: "Full Metal Jacket Boat Tail (FMJ-BT)",
          description: "FMJ with a tapered base for improved aerodynamics and accuracy at long range.",
          fullDescription: "FMJ Boat Tail bullets feature a tapered rear section that reduces aerodynamic drag. This design improves ballistic coefficient, resulting in flatter trajectories and better accuracy at extended ranges. Popular for precision rifle shooting.",
          tags: ["Target"],
          href: "/ammopedia/bullet-type/fmj-bt",
          hasDetailPage: true,
          image: "/images/freepik__fmjbt-full-metal-jacket-boat-tail-fmjbt-bullet-cop__20252.png",
          specs: {
            "Core Material": "Lead",
            "Jacket Material": "Copper / Gilding Metal",
            "Base Design": "Tapered (Boat Tail)",
            "BC Improvement": "15-20% vs flat base",
            "Wind Drift": "Reduced",
            "Best Range": "300+ yards",
            "Typical Calibers": ".223, .308, .30-06",
            "Best Use": "Long-range target"
          },
          useTypes: [
            { label: "Match Shooting", icon: "/images/Match-Shooting.svg" },
            { label: "Range Training", icon: "/images/Range-Training.svg" }
          ],
          comparison: {
            headers: ["Type", "BC", "Wind Drift", "Accuracy at Range"],
            rows: [
              ["FMJ Flat Base", "Lower", "Higher", "Good to 200 yards"],
              ["FMJ Boat Tail", "Higher", "Lower", "Excellent to 500+ yards"]
            ]
          },
          productType: "FMJ",
          products: productTemplates.rifle,
          faq: [
            { question: "Boat tail vs flat base?", answer: "Boat tails excel beyond 200 yards where their superior BC reduces drop and drift. Under 200 yards, flat base bullets are equally accurate and often cheaper." }
          ]
        },
        { slug: "fmj-fn", title: "Full Metal Jacket Flat Nose (FMJ-FN)", description: "FMJ with a flat nose, common in lever-action rifles for safer feeding.", tags: ["Target"], href: "/ammopedia/bullet-type/fmj-fn", hasDetailPage: false, image: "/images/freepik__fmj-fn-full-metal-jacket-flat-nose-fmjfn-bullet-co__20253.png" },
        { slug: "fmj-tc", title: "Full Metal Jacket Truncated Cone (FMJ-TC)", description: "FMJ with a cone-shaped nose for reliable feeding in semi-automatics.", tags: ["Target"], href: "/ammopedia/bullet-type/fmj-tc", hasDetailPage: false, image: "/images/freepik__fmj-tc-full-metal-jacket-truncated-cone-bullet-cop__20254.png" },
        {
          slug: "fmc",
          title: "Full Metal Case (FMC)",
          description: "Similar to FMJ, fully encased in metal jacket.",
          fullDescription: "Full Metal Case (FMC) is essentially synonymous with FMJ, with the jacket fully enclosing the bullet except for the base. Some manufacturers use this term to distinguish their products, but performance is identical to standard FMJ.",
          tags: ["Target"],
          href: "/ammopedia/bullet-type/fmc",
          hasDetailPage: true,
          image: "/images/freepik__fmc-full-metal-case-fmc-bullet-completely-copper-e__20255.png",
          specs: {
            "Core Material": "Lead",
            "Jacket Material": "Copper",
            "Coverage": "Full (except base)",
            "Expansion": "None",
            "vs FMJ": "Essentially identical",
            "Common Use": "European manufacturers",
            "Typical Calibers": "9mm, .45 ACP",
            "Best Use": "Target / Training"
          },
          useTypes: [
            { label: "Range Training", icon: "/images/Range-Training.svg" },
            { label: "Indoor Range", icon: "/images/Indoor-Range.svg" }
          ],
          comparison: {
            headers: ["Type", "Coverage", "Base", "Performance"],
            rows: [
              ["FMJ", "Full jacket", "Exposed lead", "Standard"],
              ["FMC", "Full case", "Exposed lead", "Identical to FMJ"],
              ["TMJ", "Total enclosure", "Enclosed", "Reduced lead exposure"]
            ]
          },
          productType: "FMJ",
          products: productTemplates.pistol.slice(0, 2),
          faq: [
            { question: "FMC vs FMJ difference?", answer: "Practically none. FMC is a marketing term some manufacturers use. Both have fully jacketed bullets with exposed lead bases." }
          ]
        },
        {
          slug: "mc",
          title: "Metal Case (MC)",
          description: "Another term for full metal jacket ammunition.",
          fullDescription: "Metal Case (MC) is simply another term for FMJ ammunition, commonly used by Remington and other manufacturers. The bullet construction is identical - a lead core with a copper jacket covering everything except the base.",
          tags: ["Target"],
          href: "/ammopedia/bullet-type/mc",
          hasDetailPage: true,
          image: "/images/freepik__mc-metal-case-mc-bullet-copper-jacketed-projectile__20256.png",
          specs: {
            "Core Material": "Lead",
            "Jacket Material": "Copper",
            "Construction": "Same as FMJ",
            "Used By": "Remington, others",
            "Performance": "Identical to FMJ",
            "Price Point": "Budget-friendly",
            "Common Calibers": "9mm, .40, .45",
            "Best Use": "Range / Training"
          },
          useTypes: [
            { label: "Range Training", icon: "/images/Range-Training.svg" },
            { label: "Match Shooting", icon: "/images/Match-Shooting.svg" }
          ],
          comparison: {
            headers: ["Term", "Manufacturer", "Construction"],
            rows: [
              ["FMJ", "Most brands", "Lead core, copper jacket"],
              ["FMC", "European brands", "Lead core, copper jacket"],
              ["MC", "Remington", "Lead core, copper jacket"]
            ]
          },
          productType: "FMJ",
          products: productTemplates.pistol.slice(0, 2),
          faq: [
            { question: "Is MC the same as FMJ?", answer: "Yes, MC (Metal Case) is Remington's terminology for FMJ. Identical construction and performance." }
          ]
        },
        {
          slug: "tmj",
          title: "Total Metal Jacket (TMJ)",
          description: "Completely encased bullet that reduces lead exposure and barrel fouling.",
          fullDescription: "Total Metal Jacket (TMJ) bullets have the jacket fully enclosing the bullet including the base, completely preventing lead exposure. This makes TMJ ideal for indoor ranges where airborne lead is a health concern.",
          tags: ["Target", "Range"],
          href: "/ammopedia/bullet-type/tmj",
          hasDetailPage: true,
          image: "/images/freepik__tmj-total-metal-jacket-tmj-bullet-completely-enclo__20257.png",
          specs: {
            "Core Material": "Lead",
            "Jacket Material": "Copper / Brass",
            "Base Coverage": "Fully enclosed",
            "Lead Exposure": "Minimal",
            "Indoor Use": "Excellent",
            "Cost": "Slightly higher than FMJ",
            "Common Calibers": "9mm, .40, .45, .38",
            "Best Use": "Indoor ranges"
          },
          useTypes: [
            { label: "Indoor Range", icon: "/images/Indoor-Range.svg" },
            { label: "Range Training", icon: "/images/Range-Training.svg" }
          ],
          comparison: {
            headers: ["Type", "Base", "Lead Exposure", "Indoor Use"],
            rows: [
              ["FMJ", "Exposed", "Moderate", "OK"],
              ["TMJ", "Enclosed", "Minimal", "Excellent"],
              ["Frangible", "N/A", "None", "Best"]
            ]
          },
          productType: "TMJ",
          products: productTemplates.pistol.slice(0, 3),
          faq: [
            { question: "Why TMJ for indoor ranges?", answer: "The enclosed base prevents lead vaporization when fired, significantly reducing airborne lead. Many indoor ranges require or recommend TMJ or similar enclosed-base ammo." },
            { question: "TMJ vs FMJ performance?", answer: "Virtually identical ballistically. TMJ costs slightly more but offers health benefits for high-volume indoor shooting." }
          ]
        }
      ]
    },
    {
      name: "Hollow Point",
      slug: "hollow-point",
      items: [
        { slug: "hp", title: "Hollow-Point (HP)", description: "Bullet with a hollowed-out tip designed to expand on impact for maximum stopping power.", tags: ["Defense"], href: "/ammopedia/bullet-type/hp", hasDetailPage: false, image: "/images/freepik__hp-hollow-point-hp-bullet-visible-hollow-cavity-in__20258.png" },
        { slug: "hp-bt", title: "Hollow-Point Boat Tail (HP-BT)", description: "Hollow point with boat tail design for improved long-range accuracy.", tags: ["Hunting"], href: "/ammopedia/bullet-type/hp-bt", hasDetailPage: false, image: "/images/freepik__hp-bt-hollow-point-boat-tail-hpbt-bullet-hollow-ca__20259.png" },
        {
          slug: "jhp",
          title: "Jacketed Hollow-Point (JHP)",
          description: "Hollow point with metal jacket for controlled expansion. Popular for self-defense.",
          fullDescription: "Jacketed Hollow-Point (JHP) bullets combine the expansion characteristics of hollow points with a copper jacket for reliable feeding and controlled expansion. This is the standard for modern self-defense ammunition, engineered to expand reliably while penetrating to ideal depths.",
          tags: ["Defense"],
          href: "/ammopedia/bullet-type/jhp",
          hasDetailPage: true,
          image: "/images/freepik__jhp-jacketed-hollow-point-jhp-bullet-copper-jacket__20260.png",
          specs: {
            "Core Material": "Lead",
            "Jacket Material": "Copper",
            "Cavity Design": "Hollow point",
            "Expansion": "1.5x-2x diameter",
            "Penetration": "12-18\" (FBI spec)",
            "Feed Reliability": "Excellent",
            "Cost": "Higher than FMJ",
            "Best Use": "Self-defense"
          },
          useTypes: [
            { label: "Self Defence", icon: "/images/Self-defence.svg" },
            { label: "Tactical", icon: "/images/Tactical-Steel-Target.svg" }
          ],
          comparison: {
            headers: ["Type", "Expansion", "Penetration", "Cost", "Best For"],
            rows: [
              ["FMJ", "None", "Over-penetrates", "Low", [{ label: "Range Training", icon: "/images/Range-Training.svg" }]],
              ["JHP", "1.5-2x", "12-18\"", "Medium", [{ label: "Self Defence", icon: "/images/Self-defence.svg" }]],
              ["Bonded JHP", "1.5-2x", "14-18\"", "High", [{ label: "Tactical", icon: "/images/Tactical-Steel-Target.svg" }]]
            ]
          },
          productType: "JHP",
          products: productTemplates.pistol,
          faq: [
            { question: "Why JHP for self-defense?", answer: "JHP expands on impact, creating larger wound channels while reducing over-penetration risk. This transfers more energy to the target and reduces danger to bystanders." },
            { question: "Best JHP brands?", answer: "Federal HST, Speer Gold Dot, Hornady Critical Defense/Duty, and Winchester PDX1 are proven performers with extensive real-world and FBI testing." }
          ]
        },
        { slug: "sjhp", title: "Semi-Jacketed Hollow-Point (SJHP)", description: "Partial jacket hollow point for reliable expansion.", tags: ["Defense"], href: "/ammopedia/bullet-type/sjhp", hasDetailPage: false, image: "/images/freepik__sjhp-semijacketed-hollow-point-sjhp-bullet-partial__20261.png" },
        { slug: "lhp", title: "Lead Hollow Point (LHP)", description: "Unjacketed hollow point, typically for revolvers.", tags: ["Defense"], href: "/ammopedia/bullet-type/lhp", hasDetailPage: false, image: "/images/freepik__lhp-lead-hollow-point-lhp-bullet-alllead-construct__20262.png" },
        { slug: "lswchp", title: "Lead Semi-Wadcutter Hollow Point (LSWCHP)", description: "Wadcutter design with hollow point for target and defense.", tags: ["Defense"], href: "/ammopedia/bullet-type/lswchp", hasDetailPage: false, image: "/images/freepik__lswchp-lead-semiwadcutter-hollow-point-lswchp-bull__20263.png" },
        { slug: "cphp", title: "Copper-Plated Hollow-Point (CPHP)", description: "Copper plated hollow point for reduced fouling.", tags: ["Defense"], href: "/ammopedia/bullet-type/cphp", hasDetailPage: false, image: "/images/freepik__cphp-copper-plated-hollow-point-cphp-bullet-thin-c__20264.png" },
        { slug: "schp", title: "Solid Copper Hollow Point (SCHP)", description: "100% copper construction for lead-free performance.", tags: ["Defense", "Hunting"], href: "/ammopedia/bullet-type/schp", hasDetailPage: false, image: "/images/freepik__cchp-solid-copper-hollow-point-schp-bullet-monolit__20265.png" },
        { slug: "tchp", title: "Truncated Cone Hollow Point", description: "Truncated cone shape with hollow point cavity.", tags: ["Defense"], href: "/ammopedia/bullet-type/tchp", hasDetailPage: false, image: "/images/freepik__tchp-truncated-cone-hollow-point-bullet-cone-profi__20266.png" },
        { slug: "xpb-hp", title: "XPB Hollow Point", description: "Barnes XPB all-copper hollow point for deep penetration.", tags: ["Hunting"], href: "/ammopedia/bullet-type/xpb-hp", hasDetailPage: false, image: "/images/freepik__xpb-hp-barnes-xpb-hollow-point-bullet-solid-copper__20267.png" }
      ]
    },
    {
      name: "Soft Point",
      slug: "soft-point",
      items: [
        {
          slug: "sp",
          title: "Soft-Point (SP)",
          description: "Lead tip exposed through jacket for controlled expansion. Great for hunting.",
          fullDescription: "Soft-Point bullets feature an exposed lead tip with a copper jacket covering the sides and base. This design initiates expansion on impact while maintaining bullet integrity for adequate penetration. The classic hunting bullet design, proven effective on game for over a century.",
          tags: ["Hunting"],
          href: "/ammopedia/bullet-type/sp",
          hasDetailPage: true,
          image: "/images/freepik__sp-soft-point-sp-bullet-copper-jacket-with-exposed__20268.png",
          specs: {
            "Core Material": "Lead",
            "Jacket Material": "Copper",
            "Tip Design": "Exposed lead",
            "Expansion": "Moderate, controlled",
            "Weight Retention": "60-80%",
            "Penetration": "Medium-deep",
            "Best Game": "Deer-sized and up",
            "Cost": "Moderate"
          },
          useTypes: [
            { label: "Deer Hunting", icon: "/images/Deer-Hunting.svg" },
            { label: "Elk Hunting", icon: "/images/Elk-Hunting.svg" }
          ],
          comparison: {
            headers: ["Type", "Expansion", "Penetration", "Best For"],
            rows: [
              ["FMJ", "None", "Maximum", [{ label: "Range Training", icon: "/images/Range-Training.svg" }]],
              ["Soft Point", "Moderate", "Medium-deep", [{ label: "Deer Hunting", icon: "/images/Deer-Hunting.svg" }]],
              ["Hollow Point", "Maximum", "Medium", [{ label: "Self Defence", icon: "/images/Self-defence.svg" }]]
            ]
          },
          productType: "soft point",
          products: productTemplates.rifle,
          faq: [
            { question: "SP vs hollow point for hunting?", answer: "SP offers more penetration with moderate expansion - ideal for medium to large game. Hollow points expand more aggressively but may not penetrate enough on larger animals." },
            { question: "Best SP ammo for deer?", answer: "Remington Core-Lokt, Winchester Power-Point, and Federal Power-Shok are proven, affordable options. Premium options include Nosler Partition." }
          ]
        },
        { slug: "sp-bt", title: "Soft-Point Boat Tail (SP-BT)", description: "Soft point with boat tail for long-range hunting.", tags: ["Hunting"], href: "/ammopedia/bullet-type/sp-bt", hasDetailPage: false, image: "/images/freepik__sp-bt-soft-point-boat-tail-spbt-bullet-copper-jack__20269.png" },
        {
          slug: "jsp",
          title: "Jacketed Soft-Point (JSP)",
          description: "Jacketed bullet with exposed lead tip for reliable expansion.",
          fullDescription: "Jacketed Soft-Point (JSP) is essentially synonymous with standard soft point ammunition. The term emphasizes the jacketed construction that distinguishes it from plain lead bullets. Reliable expansion and deep penetration make it a hunting standard.",
          tags: ["Hunting"],
          href: "/ammopedia/bullet-type/jsp",
          hasDetailPage: true,
          image: "/images/freepik__jsp-jacketed-soft-point-jsp-bullet-copper-jacket-c__20270.png",
          specs: {
            "Core Material": "Lead",
            "Jacket Material": "Copper",
            "Tip Design": "Exposed soft lead",
            "Expansion": "Controlled",
            "Weight Retention": "60-80%",
            "Penetration": "Deep",
            "Best For": "Medium-large game",
            "Feed Reliability": "Good"
          },
          useTypes: [
            { label: "Deer Hunting", icon: "/images/Deer-Hunting.svg" },
            { label: "Wild Boar", icon: "/images/Wild-Boar-Hunting.svg" }
          ],
          comparison: {
            headers: ["Type", "Jacket", "Expansion Rate", "Penetration"],
            rows: [
              ["JSP", "Copper", "Moderate", "Deep"],
              ["SJSP", "Partial copper", "Faster", "Medium"]
            ]
          },
          productType: "soft point",
          products: productTemplates.rifle.slice(0, 2),
          faq: [
            { question: "JSP vs SP - any difference?", answer: "No practical difference. JSP is simply a more descriptive term emphasizing the jacketed construction. Performance is identical." }
          ]
        },
        { slug: "sjsp", title: "Semi-Jacketed Soft-Point (SJSP)", description: "Partial jacket soft point for game hunting.", tags: ["Hunting"], href: "/ammopedia/bullet-type/sjsp", hasDetailPage: false, image: "/images/freepik__sjsp-semijacketed-soft-point-sjsp-bullet-partial-c__20271.png" },
        { slug: "psp", title: "Pointed Soft-Point (PSP)", description: "Aerodynamic soft point for flat trajectories.", tags: ["Hunting"], href: "/ammopedia/bullet-type/psp", hasDetailPage: false, image: "/images/freepik__psp-pointed-soft-point-psp-bullet-aerodynamic-poin__20272.png" },
        { slug: "hsp", title: "Hollow Soft Point (HSP)", description: "Combination hollow point and soft point design.", tags: ["Hunting"], href: "/ammopedia/bullet-type/hsp", hasDetailPage: false, image: "/images/freepik__hsp-hollow-soft-point-hsp-bullet-soft-point-design__20273.png" },
        { slug: "pp", title: "Power-Point (PP)", description: "Winchester's soft point design for controlled expansion.", tags: ["Hunting"], href: "/ammopedia/bullet-type/pp", hasDetailPage: false, image: "/images/freepik__pp-winchester-power-point-bullet-notched-copper-ja__20274.png" },
        { slug: "spce", title: "Soft-Point Cutting Edge (SPCE)", description: "Soft point with enhanced cutting edge for game.", tags: ["Hunting"], href: "/ammopedia/bullet-type/spce", hasDetailPage: false, image: "/images/freepik__spce-soft-point-cutting-edge-spce-bullet-soft-poin__20275.png" }
      ]
    },
    {
      name: "Lead Bullets",
      slug: "lead-bullets",
      items: [
        {
          slug: "lrn",
          title: "Lead Round Nose (LRN)",
          description: "Classic all-lead bullet design, economical for target practice.",
          fullDescription: "Lead Round Nose (LRN) bullets are the original bullet design - solid lead with a rounded nose. While largely superseded by jacketed bullets, LRN remains popular for its low cost and effectiveness in revolvers. The soft lead deforms on impact but also leads barrel fouling.",
          tags: ["Target"],
          href: "/ammopedia/bullet-type/lrn",
          hasDetailPage: true,
          image: "/images/freepik__lrn-lead-round-nose-lrn-bullet-alllead-constructio__20276.png",
          specs: {
            "Material": "Pure lead / lead alloy",
            "Jacket": "None",
            "Lubrication": "Wax or grease",
            "Barrel Fouling": "Higher than jacketed",
            "Cost": "Lowest",
            "Velocity Limit": "~1,200 fps",
            "Best Firearms": "Revolvers",
            "Reloading": "Popular choice"
          },
          useTypes: [
            { label: "Range Training", icon: "/images/Range-Training.svg" },
            { label: "Match Shooting", icon: "/images/Match-Shooting.svg" }
          ],
          comparison: {
            headers: ["Type", "Material", "Cost", "Fouling", "Best For"],
            rows: [
              ["LRN", "Pure lead", "Lowest", "High", [{ label: "Range Training", icon: "/images/Range-Training.svg" }]],
              ["CPRN", "Lead + copper plate", "Low", "Medium", [{ label: "Range Training", icon: "/images/Range-Training.svg" }]],
              ["FMJ", "Lead + copper jacket", "Medium", "Low", [{ label: "Range Training", icon: "/images/Range-Training.svg" }]]
            ]
          },
          productType: "lead",
          products: productTemplates.pistol.slice(0, 2),
          faq: [
            { question: "Can I use LRN in semi-autos?", answer: "Generally not recommended. The soft lead and round nose can cause feeding issues, and barrel fouling accumulates faster without a jacket." },
            { question: "Why choose LRN?", answer: "Cost and tradition. LRN is the cheapest option and works excellently in revolvers. Popular with reloaders for its simplicity and low cost." }
          ]
        },
        {
          slug: "lead-solid",
          title: "Lead Solid",
          description: "Solid lead bullet without hollow point or soft point.",
          fullDescription: "Lead solid bullets are unjacketed lead projectiles without hollow cavities or soft points. They include various nose shapes (round, flat, truncated cone) and are popular for reloading and revolver use. Simple, affordable, and effective for target shooting.",
          tags: ["Target"],
          href: "/ammopedia/bullet-type/lead-solid",
          hasDetailPage: true,
          image: "/images/freepik__ls-lead-solid-bullet-pure-lead-construction-smooth__20277.png",
          specs: {
            "Material": "Lead / lead alloy",
            "Hardness": "Varies by alloy",
            "Nose Shapes": "RN, FN, TC, WC",
            "Jacket": "None",
            "Cost": "Very low",
            "Barrel Care": "Regular cleaning needed",
            "Best Velocity": "Under 1,200 fps",
            "Common Use": "Reloading, revolvers"
          },
          useTypes: [
            { label: "Range Training", icon: "/images/Range-Training.svg" }
          ],
          comparison: {
            headers: ["Shape", "Acronym", "Best For"],
            rows: [
              ["Round Nose", "LRN", [{ label: "Range Training", icon: "/images/Range-Training.svg" }]],
              ["Flat Nose", "LFN", [{ label: "M1 Garand", icon: "/images/M1-Garand.svg" }]],
              ["Wadcutter", "WC", [{ label: "Match Shooting", icon: "/images/Match-Shooting.svg" }]],
              ["Semi-Wadcutter", "SWC", [{ label: "Range Training", icon: "/images/Range-Training.svg" }]]
            ]
          },
          productType: "lead",
          products: productTemplates.pistol.slice(0, 2),
          faq: [
            { question: "Hard cast vs soft lead?", answer: "Hard cast (lead alloys with antimony/tin) resist leading at higher velocities. Pure soft lead is cheaper but limited to lower velocities." }
          ]
        },
        { slug: "lfn", title: "Lead Flat Nose", description: "Lead bullet with flat nose for lever-action rifles.", tags: ["Target"], href: "/ammopedia/bullet-type/lfn", hasDetailPage: false, image: "/images/freepik__lfn-lead-flat-nose-lfn-bullet-alllead-construction__20278.png" },
        { slug: "lrnfp", title: "Lead Round Nose Flat Point", description: "Round nose with flat point for safe tubular magazines.", tags: ["Target"], href: "/ammopedia/bullet-type/lrnfp", hasDetailPage: false, image: "/images/freepik__lrnfp-lead-round-nose-flat-point-lrnfp-bullet-lead__20279.png" },
        { slug: "cprn", title: "Copper-Plated Round Nose (CPRN)", description: "Lead round nose with copper plating to reduce fouling.", tags: ["Target"], href: "/ammopedia/bullet-type/cprn", hasDetailPage: false, image: "/images/freepik__cprn-copper-plated-round-nose-cprn-bullet-lead-cor__20280.png" }
      ]
    },
    {
      name: "Premium & Specialty",
      slug: "premium-specialty",
      items: [
        {
          slug: "nosler-accubond",
          title: "Nosler AccuBond",
          description: "Bonded core bullet for deep penetration and high weight retention.",
          fullDescription: "The Nosler AccuBond features a polymer tip over a bonded lead core, combining the flat trajectory of ballistic tip bullets with the deep penetration of bonded construction. Weight retention exceeds 60%, making it excellent for large game.",
          tags: ["Hunting"],
          href: "/ammopedia/bullet-type/nosler-accubond",
          hasDetailPage: true,
          image: "/images/freepik__nosleraccubond-nosler-accubond-bullet-white-polyme__20281.png",
          specs: {
            "Core": "Bonded lead",
            "Tip": "White polymer",
            "Weight Retention": "60-70%",
            "Expansion": "Controlled, 1.5-2x",
            "BC": "High (boat tail)",
            "Best Range": "All hunting ranges",
            "Best Game": "Deer to elk",
            "Price": "Premium"
          },
          useTypes: [
            { label: "Elk Hunting", icon: "/images/Elk-Hunting.svg" },
            { label: "Deer Hunting", icon: "/images/Deer-Hunting.svg" }
          ],
          comparison: {
            headers: ["Bullet", "Bonded", "Weight Ret.", "Best For"],
            rows: [
              ["AccuBond", "Yes", "60-70%", [{ label: "Elk Hunting", icon: "/images/Elk-Hunting.svg" }]],
              ["Ballistic Tip", "No", "40-50%", [{ label: "Deer Hunting", icon: "/images/Deer-Hunting.svg" }, { label: "Varmint", icon: "/images/Varmint-Hunting.svg" }]],
              ["Partition", "N/A (dual core)", "65-75%", [{ label: "Safari Hunting", icon: "/images/Safari-Hunting.svg" }]]
            ]
          },
          productType: "premium hunting",
          products: productTemplates.rifle,
          faq: [
            { question: "AccuBond vs Partition?", answer: "AccuBond: flatter trajectory, better BC. Partition: more reliable expansion at all velocities, time-proven on dangerous game. Both excellent for elk-sized game." }
          ]
        },
        {
          slug: "nosler-ballistic-tip",
          title: "Nosler Ballistic Tip",
          description: "Polymer tip for flat trajectory and rapid expansion.",
          fullDescription: "The Nosler Ballistic Tip pioneered polymer-tipped hunting bullets. The polycarbonate tip improves aerodynamics and initiates rapid expansion on impact. Ideal for deer-sized game and varmints where quick, decisive performance matters.",
          tags: ["Hunting"],
          href: "/ammopedia/bullet-type/nosler-ballistic-tip",
          hasDetailPage: true,
          image: "/images/freepik__nosler-ballistic-tip-bullet-colored-polymer-tip-ye__20303.png",
          specs: {
            "Core": "Lead",
            "Tip": "Colored polymer",
            "Weight Retention": "40-60%",
            "Expansion": "Rapid, explosive",
            "BC": "High",
            "Best Range": "50-400 yards",
            "Best Game": "Deer, varmints",
            "Penetration": "Medium"
          },
          useTypes: [
            { label: "Deer Hunting", icon: "/images/Deer-Hunting.svg" },
            { label: "Varmint", icon: "/images/Varmint-Hunting.svg" }
          ],
          comparison: {
            headers: ["Tip Color", "Caliber Range", "Application"],
            rows: [
              ["Yellow", ".224-.243", [{ label: "Varmint", icon: "/images/Varmint-Hunting.svg" }]],
              ["Red/Orange", ".257-.284", [{ label: "Deer Hunting", icon: "/images/Deer-Hunting.svg" }]],
              ["Green", ".308-.338", [{ label: "Deer Hunting", icon: "/images/Deer-Hunting.svg" }, { label: "Elk Hunting", icon: "/images/Elk-Hunting.svg" }]]
            ]
          },
          productType: "premium hunting",
          products: productTemplates.rifle.slice(0, 2),
          faq: [
            { question: "Ballistic Tip for elk?", answer: "Use larger calibers (.30+) and heavier weights. Works, but AccuBond or Partition provide more insurance for elk-sized game." }
          ]
        },
        {
          slug: "nosler-partition",
          title: "Nosler Partition",
          description: "Dual-core design for reliable expansion and penetration.",
          fullDescription: "The Nosler Partition, introduced in 1948, features a unique dual-core design separated by an internal partition. The front core expands while the rear core drives deep. This proven design has taken every species of game worldwide.",
          tags: ["Hunting"],
          href: "/ammopedia/bullet-type/nosler-partition",
          hasDetailPage: true,
          image: "/images/freepik__noslerpartition-nosler-partition-bullet-copper-jac__20282.png",
          specs: {
            "Core": "Dual lead cores",
            "Partition": "Copper H-partition",
            "Weight Retention": "65-75%",
            "Expansion": "Front core only",
            "Track Record": "75+ years proven",
            "Best Game": "All big game",
            "Velocity Range": "2,000-3,200 fps",
            "Price": "Premium"
          },
          useTypes: [
            { label: "Elk Hunting", icon: "/images/Elk-Hunting.svg" },
            { label: "Safari Hunting", icon: "/images/Safari-Hunting.svg" }
          ],
          comparison: {
            headers: ["Bullet", "Design", "Weight Ret.", "Track Record"],
            rows: [
              ["Partition", "Dual core", "65-75%", "75+ years"],
              ["AccuBond", "Bonded", "60-70%", "20+ years"],
              ["Swift A-Frame", "Bonded/partitioned", "90%+", "30+ years"]
            ]
          },
          productType: "premium hunting",
          products: productTemplates.rifle,
          faq: [
            { question: "Why trust the Partition?", answer: "75+ years of proven performance on every game animal worldwide. The dual-core design guarantees expansion AND penetration regardless of impact velocity or angle." }
          ]
        },
        { slug: "a-max", title: "A-MAX Match", description: "Hornady's precision match bullet with polymer tip.", tags: ["Target"], href: "/ammopedia/bullet-type/a-max", hasDetailPage: false, image: "/images/freepik__a-max-hornady-amax-match-bullet-red-polymer-tip-co__20283.png" },
        { slug: "v-max", title: "V-MAX", description: "Hornady varmint bullet with polymer tip for rapid expansion.", tags: ["Hunting"], href: "/ammopedia/bullet-type/v-max", hasDetailPage: false, image: "/images/freepik__v-max-hornady-vmax-varmint-bullet-red-polymer-tip-__20284.png" },
        {
          slug: "z-max",
          title: "Z-MAX",
          description: "Hornady's self-defense variant of the V-MAX design.",
          fullDescription: "The Z-MAX is Hornady's defensive ammunition featuring a green polymer tip. Ballistically identical to V-MAX, it's marketed for self-defense with the same rapid expansion characteristics. A fun marketing approach with serious performance.",
          tags: ["Defense"],
          href: "/ammopedia/bullet-type/z-max",
          hasDetailPage: true,
          image: "/images/freepik__z-max-hornady-zmax-bullet-green-polymer-tip-copper__20285.png",
          specs: {
            "Core": "Lead",
            "Tip": "Green polymer",
            "Expansion": "Rapid, V-MAX style",
            "Penetration": "12-14\"",
            "Based On": "V-MAX design",
            "Marketing": "Zombie defense theme",
            "Performance": "Identical to V-MAX",
            "Calibers": "9mm, .40, .45, .223"
          },
          useTypes: [
            { label: "Self Defence", icon: "/images/Self-defence.svg" },
            { label: "Tactical", icon: "/images/Tactical-Steel-Target.svg" }
          ],
          comparison: {
            headers: ["Bullet", "Tip Color", "Design", "Use"],
            rows: [
              ["V-MAX", "Red", "Varmint expansion", [{ label: "Varmint", icon: "/images/Varmint-Hunting.svg" }]],
              ["Z-MAX", "Green", "Same as V-MAX", [{ label: "Self Defence", icon: "/images/Self-defence.svg" }]],
              ["Critical Defense", "Red", "Flex Tip", [{ label: "Self Defence", icon: "/images/Self-defence.svg" }]]
            ]
          },
          productType: "defense",
          products: productTemplates.pistol.slice(0, 3),
          faq: [
            { question: "Z-MAX vs Critical Defense?", answer: "Z-MAX (V-MAX based) expands more aggressively. Critical Defense uses Flex Tip for barrier performance. Both work for defense; Critical Defense is more popular." }
          ]
        },
        { slug: "ftx", title: "Flex-Tip Technology (FTX)", description: "Hornady's elastomer tip for safe tubular magazine use.", tags: ["Defense", "Hunting"], href: "/ammopedia/bullet-type/ftx", hasDetailPage: false, image: "/images/freepik__ftx-hornady-ftx-flex-tip-bullet-red-elastomer-flex__20286.png" },
        { slug: "sst", title: "Super Shock Tip (SST)", description: "Hornady's polymer tip hunting bullet.", tags: ["Hunting"], href: "/ammopedia/bullet-type/sst", hasDetailPage: false, image: "/images/freepik__sst-hornady-sst-super-shock-tip-bullet-red-polymer__20287.png" },
        { slug: "accutip-v", title: "AccuTip-V", description: "Remington's polymer-tipped varmint bullet.", tags: ["Hunting"], href: "/ammopedia/bullet-type/accutip-v", hasDetailPage: false, image: "/images/freepik__accutipv-remington-accutipv-bullet-gold-polymer-ti__20288.png" },
        {
          slug: "fusion",
          title: "Fusion",
          description: "Federal's bonded hunting bullet for weight retention.",
          fullDescription: "Federal Fusion bullets feature a molecularly fused jacket and core - the copper is electrochemically applied to the lead core for a true metallurgical bond. This provides excellent weight retention at an affordable price point for hunting ammunition.",
          tags: ["Hunting"],
          href: "/ammopedia/bullet-type/fusion",
          hasDetailPage: true,
          image: "/images/freepik__fusion-federal-fusion-bullet-molecularly-fused-cop__20289.png",
          specs: {
            "Core": "Lead",
            "Jacket": "Electrochemically fused",
            "Bond Type": "Molecular fusion",
            "Weight Retention": "75-95%",
            "Expansion": "Controlled",
            "Skiving": "Pressure-formed tip",
            "Best Game": "Deer to moose",
            "Price": "Mid-range"
          },
          useTypes: [
            { label: "Deer Hunting", icon: "/images/Deer-Hunting.svg" },
            { label: "Elk Hunting", icon: "/images/Elk-Hunting.svg" }
          ],
          comparison: {
            headers: ["Bullet", "Bond Type", "Weight Ret.", "Price"],
            rows: [
              ["Fusion", "Molecular", "75-95%", "Mid-range"],
              ["AccuBond", "Adhesive bond", "60-70%", "Premium"],
              ["Core-Lokt", "None (cup-and-core)", "50-65%", "Budget"]
            ]
          },
          productType: "bonded hunting",
          products: productTemplates.rifle,
          faq: [
            { question: "Why Fusion is popular?", answer: "Bonded performance at affordable prices. The molecular bond prevents separation even on heavy bone, providing premium bullet performance without premium cost." }
          ]
        },
        { slug: "trophy-bonded", title: "Trophy Bonded Tip", description: "Federal's premium bonded bullet for big game.", tags: ["Hunting"], href: "/ammopedia/bullet-type/trophy-bonded", hasDetailPage: false, image: "/images/freepik__trophybonded-federal-trophy-bonded-tip-bullet-gold__20290.png" },
        {
          slug: "triple-shock-x",
          title: "Triple-Shock X",
          description: "Barnes all-copper bullet with three cutting petals.",
          fullDescription: "The Barnes Triple-Shock X (TSX) is a solid copper bullet featuring three relief grooves that reduce pressure and fouling. Upon impact, four razor-sharp petals deploy, creating devastating wound channels while the solid shank drives deep.",
          tags: ["Hunting"],
          href: "/ammopedia/bullet-type/triple-shock-x",
          hasDetailPage: true,
          image: "/images/freepik__tripleshockx-barnes-tripleshock-x-tsx-bullet-a-new__20301.png",
          specs: {
            "Material": "100% copper",
            "Core": "Solid (no lead)",
            "Weight Retention": "99%+",
            "Expansion": "4 petals, 2x diameter",
            "Grooves": "3 pressure-relief",
            "Lead-Free": "Yes",
            "Best Game": "All big game",
            "Penetration": "Deep"
          },
          useTypes: [
            { label: "Elk Hunting", icon: "/images/Elk-Hunting.svg" },
            { label: "Safari Hunting", icon: "/images/Safari-Hunting.svg" }
          ],
          comparison: {
            headers: ["Bullet", "Material", "Weight Ret.", "Lead-Free"],
            rows: [
              ["TSX", "Copper", "99%+", "Yes"],
              ["TTSX", "Copper + polymer tip", "99%+", "Yes"],
              ["E-Tip", "Copper + polymer tip", "95%+", "Yes"]
            ]
          },
          productType: "lead-free hunting",
          products: productTemplates.rifle,
          faq: [
            { question: "Why all-copper bullets?", answer: "100% weight retention means maximum penetration. Required in lead-free hunting zones (CA, etc.). Also popular for hunters wanting guaranteed performance on tough game." }
          ]
        },
        {
          slug: "ttsx",
          title: "Tipped Triple-Shock X",
          description: "Triple-Shock X with polymer tip for improved ballistics.",
          fullDescription: "The Tipped TSX (TTSX) adds a polymer tip to the proven TSX design, improving ballistic coefficient for flatter trajectories and initiating expansion at lower velocities. Same devastating terminal performance as TSX with better long-range capability.",
          tags: ["Hunting"],
          href: "/ammopedia/bullet-type/ttsx",
          hasDetailPage: true,
          image: "/images/freepik__ttsx-barnes-ttsx-tipped-tripleshock-x-bullet-blue-__20291.png",
          specs: {
            "Material": "Copper + polymer tip",
            "Core": "Solid copper",
            "Weight Retention": "99%+",
            "Expansion": "4 petals",
            "BC Improvement": "10-15% vs TSX",
            "Min Velocity": "Lower than TSX",
            "Best Range": "All hunting ranges",
            "Lead-Free": "Yes"
          },
          useTypes: [
            { label: "Deer Hunting", icon: "/images/Deer-Hunting.svg" },
            { label: "Elk Hunting", icon: "/images/Elk-Hunting.svg" }
          ],
          comparison: {
            headers: ["Bullet", "Tip", "BC", "Min Expansion Vel."],
            rows: [
              ["TSX", "Hollow point", "Good", "~1,800 fps"],
              ["TTSX", "Polymer", "Better", "~1,400 fps"]
            ]
          },
          productType: "lead-free hunting",
          products: productTemplates.rifle.slice(0, 2),
          faq: [
            { question: "TTSX vs TSX?", answer: "TTSX for longer range hunting - better BC and expansion at lower velocities. TSX works fine at normal hunting ranges and costs slightly less." }
          ]
        },
        { slug: "exergy", title: "Exergy (XRG)", description: "Lead-free expanding bullet for hunting.", tags: ["Hunting"], href: "/ammopedia/bullet-type/exergy", hasDetailPage: false, image: "/images/freepik__energy-exergy-xrg-leadfree-bullet-solid-copper-exp__20292.png" }
      ]
    },
    {
      name: "Specialty Construction",
      slug: "specialty-construction",
      items: [
        {
          slug: "frangible",
          title: "Frangible",
          description: "Bullets designed to disintegrate on impact with hard surfaces. Safe for steel targets.",
          fullDescription: "Frangible bullets are compressed from copper and tin powder, designed to disintegrate into powder upon hitting hard surfaces. This eliminates ricochet danger and allows safe shooting at steel targets at close range. Ideal for close-quarters training.",
          tags: ["Target", "Range"],
          href: "/ammopedia/bullet-type/frangible",
          hasDetailPage: true,
          image: "/images/freepik__frangible-bullet-compressed-coppertin-powder-const__20293.png",
          specs: {
            "Material": "Compressed copper/tin",
            "Lead Content": "None",
            "On Hard Surface": "Disintegrates",
            "Ricochet Risk": "Minimal",
            "Steel Targets": "Safe at close range",
            "Penetration": "Very low",
            "Best Use": "CQB training, indoor",
            "Cost": "Higher than FMJ"
          },
          useTypes: [
            { label: "Indoor Range", icon: "/images/Indoor-Range.svg" },
            { label: "Tactical", icon: "/images/Tactical-Steel-Target.svg" }
          ],
          comparison: {
            headers: ["Type", "Steel Safe", "Ricochet", "Lead-Free"],
            rows: [
              ["Frangible", "Yes (close range)", "Minimal", "Yes"],
              ["FMJ", "No", "High", "No"],
              ["TMJ", "No", "High", "No (enclosed)"]
            ]
          },
          productType: "frangible",
          products: productTemplates.pistol.slice(0, 2),
          faq: [
            { question: "Can frangible ammo be used for defense?", answer: "Not recommended. While it reduces overpenetration, the shallow penetration may not reach vital organs. Use JHP for defensive purposes." }
          ]
        },
        {
          slug: "rifled-slug",
          title: "Rifled Slug",
          description: "Large single projectile for shotguns with rifled grooves.",
          fullDescription: "Rifled slugs (Foster-type) are large, single projectiles with rifling grooves molded into the slug itself. Designed for smoothbore shotguns, the hollow base allows the slug to swage through various chokes. Effective for deer hunting with smoothbore guns.",
          tags: ["Hunting"],
          href: "/ammopedia/bullet-type/rifled-slug",
          hasDetailPage: true,
          image: "/images/freepik__rifled-shotgun-slug-large-lead-projectile-with-rif__20294.png",
          specs: {
            "Weight": "7/8 - 1-1/4 oz",
            "Material": "Lead (hollow base)",
            "For Barrel Type": "Smoothbore",
            "Rifling": "On slug surface",
            "Effective Range": "75-100 yards",
            "Energy": "2,500-3,000 ft-lbs",
            "Choke Compatible": "IC through Full",
            "Accuracy": "4-6\" at 100 yards"
          },
          useTypes: [
            { label: "Deer Hunting", icon: "/images/Deer-Hunting.svg" },
            { label: "Slug", icon: "/images/Slug.svg" }
          ],
          comparison: {
            headers: ["Type", "Barrel", "Range", "Accuracy"],
            rows: [
              ["Rifled Slug", "Smoothbore", "75-100 yards", "4-6\" @ 100"],
              ["Sabot Slug", "Rifled barrel", "150-200 yards", "2-3\" @ 100"],
              ["Brenneke", "Either", "75-100 yards", "4-5\" @ 100"]
            ]
          },
          productType: "slugs",
          products: productTemplates.shotgun.slice(0, 3),
          faq: [
            { question: "Rifled slugs in rifled barrel?", answer: "Works but not ideal. The slug's rifling can cause erratic spin. Use sabot slugs for rifled barrels, rifled slugs for smoothbores." }
          ]
        },
        {
          slug: "sabot-slug",
          title: "Sabot Slug",
          description: "Sub-caliber slug in plastic sabot for rifled shotgun barrels.",
          fullDescription: "Sabot slugs feature a smaller-diameter projectile (typically .50 caliber) enclosed in a plastic sabot that engages the rifling. The sabot separates after leaving the muzzle, allowing the aerodynamic slug to fly accurately. Designed exclusively for rifled shotgun barrels.",
          tags: ["Hunting"],
          href: "/ammopedia/bullet-type/sabot-slug",
          hasDetailPage: true,
          image: "/images/freepik__sabot-shotgun-slug-subcaliber-copper-or-lead-proje__20295.png",
          specs: {
            "Slug Diameter": ".50\" typical",
            "Weight": "260-385 grain",
            "Sabot Material": "Plastic",
            "For Barrel Type": "Rifled only",
            "Effective Range": "150-200 yards",
            "Velocity": "1,800-2,000 fps",
            "Accuracy": "2-3\" at 100 yards",
            "Cost": "Higher"
          },
          useTypes: [
            { label: "Deer Hunting", icon: "/images/Deer-Hunting.svg" },
            { label: "Slug", icon: "/images/Slug.svg" }
          ],
          comparison: {
            headers: ["Type", "Range", "Accuracy", "Barrel Needed"],
            rows: [
              ["Sabot", "150-200 yards", "Excellent", "Rifled"],
              ["Rifled Slug", "75-100 yards", "Good", "Smoothbore"],
              ["Brenneke", "75-100 yards", "Good", "Either"]
            ]
          },
          productType: "slugs",
          products: productTemplates.shotgun.slice(0, 2),
          faq: [
            { question: "Can I shoot sabot slugs in smoothbore?", answer: "Technically yes, but accuracy will be poor. Without rifling to spin the slug, groups will be very large. Rifled slugs are much better in smoothbores." }
          ]
        },
        {
          slug: "otm",
          title: "Open Tip Match",
          description: "Match-grade bullet with open tip for precision shooting.",
          fullDescription: "Open Tip Match (OTM) bullets have a small opening at the tip, a byproduct of manufacturing for precision. Unlike hollow points, the opening is NOT designed for expansion - it's simply where the jacket didn't close during core insertion. OTM is built purely for accuracy.",
          tags: ["Target"],
          href: "/ammopedia/bullet-type/otm",
          hasDetailPage: true,
          image: "/images/freepik__open-tip-match-otm-bullet-small-opening-at-tip-not__20302.png",
          specs: {
            "Core": "Lead",
            "Jacket": "Match-grade copper",
            "Tip Opening": "Manufacturing feature",
            "Expansion": "Minimal/inconsistent",
            "Primary Use": "Competition accuracy",
            "BC": "Very high",
            "Consistency": "Extreme",
            "Best Range": "100-1,000+ yards"
          },
          useTypes: [
            { label: "Match Shooting", icon: "/images/Match-Shooting.svg" },
            { label: "Range Training", icon: "/images/Range-Training.svg" }
          ],
          comparison: {
            headers: ["Type", "Tip", "Purpose", "Expansion"],
            rows: [
              ["OTM", "Open (manufacturing)", "Accuracy", "Minimal"],
              ["HP", "Open (designed)", "Expansion", "Designed to expand"],
              ["FMJ", "Closed", "Training", "None"]
            ]
          },
          productType: "match",
          products: productTemplates.rifle.slice(0, 2),
          faq: [
            { question: "OTM vs hollow point?", answer: "Different purposes. OTM's opening is small and for manufacturing; it doesn't reliably expand. HP is designed to expand. OTM = accuracy, HP = terminal performance." },
            { question: "Is OTM legal for hunting?", answer: "Varies by jurisdiction. Some areas prohibit \"hollow point\" ammo for hunting, but OTM isn't a true HP. Check local regulations." }
          ]
        },
        { slug: "efmj", title: "Expanding Full Metal Jacket", description: "FMJ designed to expand like a hollow point.", tags: ["Defense"], href: "/ammopedia/bullet-type/efmj", hasDetailPage: false, image: "/images/freepik__expanding-full-metal-jacket-efmj-bullet-fmj-appear__20296.png" },
        { slug: "emb", title: "Expansion Mono Block", description: "Monolithic expanding bullet from solid copper or brass.", tags: ["Hunting"], href: "/ammopedia/bullet-type/emb", hasDetailPage: false, image: "/images/freepik__expansion-mono-block-emb-bullet-solid-copper-or-br__20297.png" },
        { slug: "feb", title: "Fully Encapsulated Base", description: "Bullet with enclosed base to prevent lead exposure.", tags: ["Target"], href: "/ammopedia/bullet-type/feb", hasDetailPage: false, image: "/images/freepik__fully-encapsulated-base-feb-bullet-copper-jacket-c__20298.png" },
        { slug: "mpt", title: "Multi Purpose Tactical (MPT)", description: "Versatile bullet design for various tactical applications.", tags: ["Defense"], href: "/ammopedia/bullet-type/mpt", hasDetailPage: false, image: "/images/freepik__multi-purpose-tactical-mpt-bullet-versatile-design__20299.png" },
        { slug: "tcsb", title: "Truncated Cone Solid Bullet (TCSB)", description: "Solid bullet with truncated cone profile.", tags: ["Target"], href: "/ammopedia/bullet-type/tcsb", hasDetailPage: false, image: "/images/freepik__truncated-cone-solid-bullet-tcsb-solid-copper-or-b__20300.png" }
      ]
    }
  ]
}

export default bulletTypesData
