// Bullet Types Category Data
// Items with hasDetailPage: true have existing detail pages
// Items with hasDetailPage: false are displayed but not clickable

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
        { slug: "1-buck", title: "#1 Buck", description: "Large buckshot pellets commonly used for hunting medium game.", tags: ["Hunting"], href: "/ammopedia/bullet-type/1-buck", hasDetailPage: true, image: "/images/freepik__1-buck-shotgun-shell-cutaway-showing-1-buckshot-pe__20238.jpeg" },
        { slug: "12-shot", title: "#12 Shot", description: "Very fine shot used for pest control and small game.", tags: ["Hunting"], href: "/ammopedia/bullet-type/12-shot", hasDetailPage: true, image: "/images/freepik__12-shot-shotgun-shell-with-12-shot-size-pellets-ex__20250.png" },
        { slug: "2-shot", title: "#2 Shot", description: "Medium-sized shot popular for waterfowl hunting.", tags: ["Hunting"], href: "/ammopedia/bullet-type/2-shot", hasDetailPage: true, image: "/images/freepik__2-shot-shotgun-shell-with-only-2-shot-size-pellets__20242.png" },
        { slug: "3-buck", title: "#3 Buck", description: "Medium buckshot for versatile hunting applications.", tags: ["Hunting"], href: "/ammopedia/bullet-type/3-buck", hasDetailPage: true, image: "/images/freepik__3-buck-shotgun-shell-cutaway-showing-only-3-bucksh__20241.png" },
        { slug: "4-shot", title: "#4 Shot", description: "Versatile shot size for various game birds.", tags: ["Hunting"], href: "/ammopedia/bullet-type/4-shot", hasDetailPage: true, image: "/images/freepik__4-shot-shotgun-shell-with-4-shot-size-pellets-vers__20243.png" },
        { slug: "5-shot", title: "#5 Shot", description: "Popular for pheasant and small game hunting.", tags: ["Hunting"], href: "/ammopedia/bullet-type/5-shot", hasDetailPage: true, image: "/images/freepik__5-shot-shotgun-shell-with-5-shot-size-pellets-upla__20245.png" },
        { slug: "6-shot", title: "#6 Shot", description: "Common choice for upland bird hunting.", tags: ["Hunting"], href: "/ammopedia/bullet-type/6-shot", hasDetailPage: true, image: "/images/freepik__6-shot-shotgun-shell-with-6-shot-size-pellets-smal__20246.png" },
        { slug: "7-shot", title: "#7 Shot", description: "Fine shot for small birds and clay targets.", tags: ["Target"], href: "/ammopedia/bullet-type/7-shot", hasDetailPage: true, image: "/images/freepik__7-shot-shotgun-shell-with-7-shot-size-pellets-fine__20248.png" },
        { slug: "7-5-shot", title: "#7-1/2 Shot", description: "Popular for trap and skeet shooting.", tags: ["Target"], href: "/ammopedia/bullet-type/7-5-shot", hasDetailPage: true, image: "/images/freepik__75-shot-shotgun-shell-with-75-shot-size-pellets-cl__20247.png" },
        { slug: "8-shot", title: "#8 Shot", description: "Standard clay target and small game shot.", tags: ["Target"], href: "/ammopedia/bullet-type/8-shot", hasDetailPage: true },
        { slug: "9-shot", title: "#9 Shot", description: "Very fine shot for close-range targets.", tags: ["Target"], href: "/ammopedia/bullet-type/9-shot", hasDetailPage: true, image: "/images/freepik__9-shot-shotgun-shell-with-9-shot-size-pellets-very__20249.png" },
        { slug: "00-buck", title: "00 Buck", description: "The most popular buckshot size for home defense.", tags: ["Defense"], href: "/ammopedia/bullet-type/00-buck", hasDetailPage: true, image: "/images/freepik__00-buck-shotgun-shell-cutaway-showing-00-buckshot-__20239.png" },
        { slug: "000-buck", title: "000 Buck", description: "Large buckshot pellets for maximum stopping power.", tags: ["Defense"], href: "/ammopedia/bullet-type/000-buck", hasDetailPage: true, image: "/images/freepik__000-buck-shotgun-shell-cutaway-showing-realistic-s__20240.png" },
      ]
    },
    {
      name: "Full Metal Jacket",
      slug: "fmj-variants",
      items: [
        { slug: "fmj", title: "Full Metal Jacket (FMJ)", description: "The most common bullet type, with a soft lead core encased in harder metal. Ideal for target practice and training.", tags: ["Target", "Range"], href: "/ammopedia/bullet-type/fmj", hasDetailPage: true, image: "/images/freepik__fmj-full-metal-jacket-fmj-bullet-copper-jacketed-r__20251.png" },
        { slug: "fmj-bt", title: "Full Metal Jacket Boat Tail (FMJ-BT)", description: "FMJ with a tapered base for improved aerodynamics and accuracy at long range.", tags: ["Target"], href: "/ammopedia/bullet-type/fmj-bt", hasDetailPage: true, image: "/images/freepik__fmjbt-full-metal-jacket-boat-tail-fmjbt-bullet-cop__20252.png" },
        { slug: "fmj-fn", title: "Full Metal Jacket Flat Nose (FMJ-FN)", description: "FMJ with a flat nose, common in lever-action rifles for safer feeding.", tags: ["Target"], href: "/ammopedia/bullet-type/fmj-fn", hasDetailPage: false, image: "/images/freepik__fmj-fn-full-metal-jacket-flat-nose-fmjfn-bullet-co__20253.png" },
        { slug: "fmj-tc", title: "Full Metal Jacket Truncated Cone (FMJ-TC)", description: "FMJ with a cone-shaped nose for reliable feeding in semi-automatics.", tags: ["Target"], href: "/ammopedia/bullet-type/fmj-tc", hasDetailPage: false, image: "/images/freepik__fmj-tc-full-metal-jacket-truncated-cone-bullet-cop__20254.png" },
        { slug: "fmc", title: "Full Metal Case (FMC)", description: "Similar to FMJ, fully encased in metal jacket.", tags: ["Target"], href: "/ammopedia/bullet-type/fmc", hasDetailPage: true, image: "/images/freepik__fmc-full-metal-case-fmc-bullet-completely-copper-e__20255.png" },
        { slug: "mc", title: "Metal Case (MC)", description: "Another term for full metal jacket ammunition.", tags: ["Target"], href: "/ammopedia/bullet-type/mc", hasDetailPage: true, image: "/images/freepik__mc-metal-case-mc-bullet-copper-jacketed-projectile__20256.png" },
        { slug: "tmj", title: "Total Metal Jacket (TMJ)", description: "Completely encased bullet that reduces lead exposure and barrel fouling.", tags: ["Target", "Range"], href: "/ammopedia/bullet-type/tmj", hasDetailPage: true, image: "/images/freepik__tmj-total-metal-jacket-tmj-bullet-completely-enclo__20257.png" },
      ]
    },
    {
      name: "Hollow Point",
      slug: "hollow-point",
      items: [
        { slug: "hp", title: "Hollow-Point (HP)", description: "Bullet with a hollowed-out tip designed to expand on impact for maximum stopping power.", tags: ["Defense"], href: "/ammopedia/bullet-type/hp", hasDetailPage: false, image: "/images/freepik__hp-hollow-point-hp-bullet-visible-hollow-cavity-in__20258.png" },
        { slug: "hp-bt", title: "Hollow-Point Boat Tail (HP-BT)", description: "Hollow point with boat tail design for improved long-range accuracy.", tags: ["Hunting"], href: "/ammopedia/bullet-type/hp-bt", hasDetailPage: false, image: "/images/freepik__hp-bt-hollow-point-boat-tail-hpbt-bullet-hollow-ca__20259.png" },
        { slug: "jhp", title: "Jacketed Hollow-Point (JHP)", description: "Hollow point with metal jacket for controlled expansion. Popular for self-defense.", tags: ["Defense"], href: "/ammopedia/bullet-type/jhp", hasDetailPage: true, image: "/images/freepik__jhp-jacketed-hollow-point-jhp-bullet-copper-jacket__20260.png" },
        { slug: "sjhp", title: "Semi-Jacketed Hollow-Point (SJHP)", description: "Partial jacket hollow point for reliable expansion.", tags: ["Defense"], href: "/ammopedia/bullet-type/sjhp", hasDetailPage: false, image: "/images/freepik__sjhp-semijacketed-hollow-point-sjhp-bullet-partial__20261.png" },
        { slug: "lhp", title: "Lead Hollow Point (LHP)", description: "Unjacketed hollow point, typically for revolvers.", tags: ["Defense"], href: "/ammopedia/bullet-type/lhp", hasDetailPage: false, image: "/images/freepik__lhp-lead-hollow-point-lhp-bullet-alllead-construct__20262.png" },
        { slug: "lswchp", title: "Lead Semi-Wadcutter Hollow Point (LSWCHP)", description: "Wadcutter design with hollow point for target and defense.", tags: ["Defense"], href: "/ammopedia/bullet-type/lswchp", hasDetailPage: false, image: "/images/freepik__lswchp-lead-semiwadcutter-hollow-point-lswchp-bull__20263.png" },
        { slug: "cphp", title: "Copper-Plated Hollow-Point (CPHP)", description: "Copper plated hollow point for reduced fouling.", tags: ["Defense"], href: "/ammopedia/bullet-type/cphp", hasDetailPage: false, image: "/images/freepik__cphp-copper-plated-hollow-point-cphp-bullet-thin-c__20264.png" },
        { slug: "schp", title: "Solid Copper Hollow Point (SCHP)", description: "100% copper construction for lead-free performance.", tags: ["Defense", "Hunting"], href: "/ammopedia/bullet-type/schp", hasDetailPage: false, image: "/images/freepik__cchp-solid-copper-hollow-point-schp-bullet-monolit__20265.png" },
        { slug: "tchp", title: "Truncated Cone Hollow Point", description: "Truncated cone shape with hollow point cavity.", tags: ["Defense"], href: "/ammopedia/bullet-type/tchp", hasDetailPage: false, image: "/images/freepik__tchp-truncated-cone-hollow-point-bullet-cone-profi__20266.png" },
        { slug: "xpb-hp", title: "XPB Hollow Point", description: "Barnes XPB all-copper hollow point for deep penetration.", tags: ["Hunting"], href: "/ammopedia/bullet-type/xpb-hp", hasDetailPage: false, image: "/images/freepik__xpb-hp-barnes-xpb-hollow-point-bullet-solid-copper__20267.png" },
      ]
    },
    {
      name: "Soft Point",
      slug: "soft-point",
      items: [
        { slug: "sp", title: "Soft-Point (SP)", description: "Lead tip exposed through jacket for controlled expansion. Great for hunting.", tags: ["Hunting"], href: "/ammopedia/bullet-type/sp", hasDetailPage: true, image: "/images/freepik__sp-soft-point-sp-bullet-copper-jacket-with-exposed__20268.png" },
        { slug: "sp-bt", title: "Soft-Point Boat Tail (SP-BT)", description: "Soft point with boat tail for long-range hunting.", tags: ["Hunting"], href: "/ammopedia/bullet-type/sp-bt", hasDetailPage: false, image: "/images/freepik__sp-bt-soft-point-boat-tail-spbt-bullet-copper-jack__20269.png" },
        { slug: "jsp", title: "Jacketed Soft-Point (JSP)", description: "Jacketed bullet with exposed lead tip for reliable expansion.", tags: ["Hunting"], href: "/ammopedia/bullet-type/jsp", hasDetailPage: true, image: "/images/freepik__jsp-jacketed-soft-point-jsp-bullet-copper-jacket-c__20270.png" },
        { slug: "sjsp", title: "Semi-Jacketed Soft-Point (SJSP)", description: "Partial jacket soft point for game hunting.", tags: ["Hunting"], href: "/ammopedia/bullet-type/sjsp", hasDetailPage: false, image: "/images/freepik__sjsp-semijacketed-soft-point-sjsp-bullet-partial-c__20271.png" },
        { slug: "psp", title: "Pointed Soft-Point (PSP)", description: "Aerodynamic soft point for flat trajectories.", tags: ["Hunting"], href: "/ammopedia/bullet-type/psp", hasDetailPage: false, image: "/images/freepik__psp-pointed-soft-point-psp-bullet-aerodynamic-poin__20272.png" },
        { slug: "hsp", title: "Hollow Soft Point (HSP)", description: "Combination hollow point and soft point design.", tags: ["Hunting"], href: "/ammopedia/bullet-type/hsp", hasDetailPage: false, image: "/images/freepik__hsp-hollow-soft-point-hsp-bullet-soft-point-design__20273.png" },
        { slug: "pp", title: "Power-Point (PP)", description: "Winchester's soft point design for controlled expansion.", tags: ["Hunting"], href: "/ammopedia/bullet-type/pp", hasDetailPage: false, image: "/images/freepik__pp-winchester-power-point-bullet-notched-copper-ja__20274.png" },
        { slug: "spce", title: "Soft-Point Cutting Edge (SPCE)", description: "Soft point with enhanced cutting edge for game.", tags: ["Hunting"], href: "/ammopedia/bullet-type/spce", hasDetailPage: false, image: "/images/freepik__spce-soft-point-cutting-edge-spce-bullet-soft-poin__20275.png" },
      ]
    },
    {
      name: "Lead Bullets",
      slug: "lead-bullets",
      items: [
        { slug: "lrn", title: "Lead Round Nose (LRN)", description: "Classic all-lead bullet design, economical for target practice.", tags: ["Target"], href: "/ammopedia/bullet-type/lrn", hasDetailPage: true, image: "/images/freepik__lrn-lead-round-nose-lrn-bullet-alllead-constructio__20276.png" },
        { slug: "lead-solid", title: "Lead Solid", description: "Solid lead bullet without hollow point or soft point.", tags: ["Target"], href: "/ammopedia/bullet-type/lead-solid", hasDetailPage: true, image: "/images/freepik__ls-lead-solid-bullet-pure-lead-construction-smooth__20277.png" },
        { slug: "lfn", title: "Lead Flat Nose", description: "Lead bullet with flat nose for lever-action rifles.", tags: ["Target"], href: "/ammopedia/bullet-type/lfn", hasDetailPage: false, image: "/images/freepik__lfn-lead-flat-nose-lfn-bullet-alllead-construction__20278.png" },
        { slug: "lrnfp", title: "Lead Round Nose Flat Point", description: "Round nose with flat point for safe tubular magazines.", tags: ["Target"], href: "/ammopedia/bullet-type/lrnfp", hasDetailPage: false, image: "/images/freepik__lrnfp-lead-round-nose-flat-point-lrnfp-bullet-lead__20279.png" },
        { slug: "cprn", title: "Copper-Plated Round Nose (CPRN)", description: "Lead round nose with copper plating to reduce fouling.", tags: ["Target"], href: "/ammopedia/bullet-type/cprn", hasDetailPage: false, image: "/images/freepik__cprn-copper-plated-round-nose-cprn-bullet-lead-cor__20280.png" },
      ]
    },
    {
      name: "Premium & Specialty",
      slug: "premium-specialty",
      items: [
        { slug: "nosler-accubond", title: "Nosler AccuBond", description: "Bonded core bullet for deep penetration and high weight retention.", tags: ["Hunting"], href: "/ammopedia/bullet-type/nosler-accubond", hasDetailPage: true, image: "/images/freepik__nosleraccubond-nosler-accubond-bullet-white-polyme__20281.png" },
        { slug: "nosler-ballistic-tip", title: "Nosler Ballistic Tip", description: "Polymer tip for flat trajectory and rapid expansion.", tags: ["Hunting"], href: "/ammopedia/bullet-type/nosler-ballistic-tip", hasDetailPage: true, image: "/images/freepik__nosler-ballistic-tip-bullet-colored-polymer-tip-ye__20303.png" },
        { slug: "nosler-partition", title: "Nosler Partition", description: "Dual-core design for reliable expansion and penetration.", tags: ["Hunting"], href: "/ammopedia/bullet-type/nosler-partition", hasDetailPage: true, image: "/images/freepik__noslerpartition-nosler-partition-bullet-copper-jac__20282.png" },
        { slug: "a-max", title: "A-MAX Match", description: "Hornady's precision match bullet with polymer tip.", tags: ["Target"], href: "/ammopedia/bullet-type/a-max", hasDetailPage: false, image: "/images/freepik__a-max-hornady-amax-match-bullet-red-polymer-tip-co__20283.png" },
        { slug: "v-max", title: "V-MAX", description: "Hornady varmint bullet with polymer tip for rapid expansion.", tags: ["Hunting"], href: "/ammopedia/bullet-type/v-max", hasDetailPage: false, image: "/images/freepik__v-max-hornady-vmax-varmint-bullet-red-polymer-tip-__20284.png" },
        { slug: "z-max", title: "Z-MAX", description: "Hornady's self-defense variant of the V-MAX design.", tags: ["Defense"], href: "/ammopedia/bullet-type/z-max", hasDetailPage: true, image: "/images/freepik__z-max-hornady-zmax-bullet-green-polymer-tip-copper__20285.png" },
        { slug: "ftx", title: "Flex-Tip Technology (FTX)", description: "Hornady's elastomer tip for safe tubular magazine use.", tags: ["Defense", "Hunting"], href: "/ammopedia/bullet-type/ftx", hasDetailPage: false, image: "/images/freepik__ftx-hornady-ftx-flex-tip-bullet-red-elastomer-flex__20286.png" },
        { slug: "sst", title: "Super Shock Tip (SST)", description: "Hornady's polymer tip hunting bullet.", tags: ["Hunting"], href: "/ammopedia/bullet-type/sst", hasDetailPage: false, image: "/images/freepik__sst-hornady-sst-super-shock-tip-bullet-red-polymer__20287.png" },
        { slug: "accutip-v", title: "AccuTip-V", description: "Remington's polymer-tipped varmint bullet.", tags: ["Hunting"], href: "/ammopedia/bullet-type/accutip-v", hasDetailPage: false, image: "/images/freepik__accutipv-remington-accutipv-bullet-gold-polymer-ti__20288.png" },
        { slug: "fusion", title: "Fusion", description: "Federal's bonded hunting bullet for weight retention.", tags: ["Hunting"], href: "/ammopedia/bullet-type/fusion", hasDetailPage: true, image: "/images/freepik__fusion-federal-fusion-bullet-molecularly-fused-cop__20289.png" },
        { slug: "trophy-bonded", title: "Trophy Bonded Tip", description: "Federal's premium bonded bullet for big game.", tags: ["Hunting"], href: "/ammopedia/bullet-type/trophy-bonded", hasDetailPage: false, image: "/images/freepik__trophybonded-federal-trophy-bonded-tip-bullet-gold__20290.png" },
        { slug: "triple-shock-x", title: "Triple-Shock X", description: "Barnes all-copper bullet with three cutting petals.", tags: ["Hunting"], href: "/ammopedia/bullet-type/triple-shock-x", hasDetailPage: true, image: "/images/freepik__tripleshockx-barnes-tripleshock-x-tsx-bullet-a-new__20301.png" },
        { slug: "ttsx", title: "Tipped Triple-Shock X", description: "Triple-Shock X with polymer tip for improved ballistics.", tags: ["Hunting"], href: "/ammopedia/bullet-type/ttsx", hasDetailPage: true, image: "/images/freepik__ttsx-barnes-ttsx-tipped-tripleshock-x-bullet-blue-__20291.png" },
        { slug: "exergy", title: "Exergy (XRG)", description: "Lead-free expanding bullet for hunting.", tags: ["Hunting"], href: "/ammopedia/bullet-type/exergy", hasDetailPage: false, image: "/images/freepik__energy-exergy-xrg-leadfree-bullet-solid-copper-exp__20292.png" },
      ]
    },
    {
      name: "Specialty Construction",
      slug: "specialty-construction",
      items: [
        { slug: "frangible", title: "Frangible", description: "Bullets designed to disintegrate on impact with hard surfaces. Safe for steel targets.", tags: ["Target", "Range"], href: "/ammopedia/bullet-type/frangible", hasDetailPage: true, image: "/images/freepik__frangible-bullet-compressed-coppertin-powder-const__20293.png" },
        { slug: "rifled-slug", title: "Rifled Slug", description: "Large single projectile for shotguns with rifled grooves.", tags: ["Hunting"], href: "/ammopedia/bullet-type/rifled-slug", hasDetailPage: true, image: "/images/freepik__rifled-shotgun-slug-large-lead-projectile-with-rif__20294.png" },
        { slug: "sabot-slug", title: "Sabot Slug", description: "Sub-caliber slug in plastic sabot for rifled shotgun barrels.", tags: ["Hunting"], href: "/ammopedia/bullet-type/sabot-slug", hasDetailPage: true, image: "/images/freepik__sabot-shotgun-slug-subcaliber-copper-or-lead-proje__20295.png" },
        { slug: "otm", title: "Open Tip Match", description: "Match-grade bullet with open tip for precision shooting.", tags: ["Target"], href: "/ammopedia/bullet-type/otm", hasDetailPage: true, image: "/images/freepik__open-tip-match-otm-bullet-small-opening-at-tip-not__20302.png" },
        { slug: "efmj", title: "Expanding Full Metal Jacket", description: "FMJ designed to expand like a hollow point.", tags: ["Defense"], href: "/ammopedia/bullet-type/efmj", hasDetailPage: false, image: "/images/freepik__expanding-full-metal-jacket-efmj-bullet-fmj-appear__20296.png" },
        { slug: "emb", title: "Expansion Mono Block", description: "Monolithic expanding bullet from solid copper or brass.", tags: ["Hunting"], href: "/ammopedia/bullet-type/emb", hasDetailPage: false, image: "/images/freepik__expansion-mono-block-emb-bullet-solid-copper-or-br__20297.png" },
        { slug: "feb", title: "Fully Encapsulated Base", description: "Bullet with enclosed base to prevent lead exposure.", tags: ["Target"], href: "/ammopedia/bullet-type/feb", hasDetailPage: false, image: "/images/freepik__fully-encapsulated-base-feb-bullet-copper-jacket-c__20298.png" },
        { slug: "mpt", title: "Multi Purpose Tactical (MPT)", description: "Versatile bullet design for various tactical applications.", tags: ["Defense"], href: "/ammopedia/bullet-type/mpt", hasDetailPage: false, image: "/images/freepik__multi-purpose-tactical-mpt-bullet-versatile-design__20299.png" },
        { slug: "tcsb", title: "Truncated Cone Solid Bullet (TCSB)", description: "Solid bullet with truncated cone profile.", tags: ["Target"], href: "/ammopedia/bullet-type/tcsb", hasDetailPage: false, image: "/images/freepik__truncated-cone-solid-bullet-tcsb-solid-copper-or-b__20300.png" },
      ]
    },
  ]
}

export default bulletTypesData
