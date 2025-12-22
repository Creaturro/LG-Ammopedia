# LG Ammopedia - Pełna Dokumentacja Projektu

## Spis treści
1. [Przegląd projektu](#przegląd-projektu)
2. [Architektura](#architektura)
3. [Struktura plików](#struktura-plików)
4. [Komponenty React](#komponenty-react)
5. [System danych](#system-danych)
6. [Routing i nawigacja](#routing-i-nawigacja)
7. [Stylowanie](#stylowanie)
8. [Integracja z Figma Make](#integracja-z-figma-make)
9. [Zarządzanie obrazkami](#zarządzanie-obrazkami)
10. [Rozwiązane problemy](#rozwiązane-problemy)
11. [Checklist dla przyszłych zmian](#checklist-dla-przyszłych-zmian)

---

## Przegląd projektu

### Cel
Stworzenie interaktywnej encyklopedii amunicji (Ammopedia) dla Lucky Gunner, zawierającej:
- **Stronę główną (Homepage)** - z kartami kategorii
- **Strony kategorii** - Bullets, Casings, Primers
- **System nawigacji** - breadcrumb + przycisk powrotu

### Stack technologiczny

| Warstwa | Technologia |
|---------|-------------|
| Framework | React 18 |
| Build tool | Vite |
| Styling | Tailwind CSS |
| Routing | Hash-based (bez React Router) |
| Deployment | Figma Make |

### Repozytorium
- **GitHub**: https://github.com/Creaturro/LG-Ammopedia
- **Branch główny**: main

---

## Architektura

```
┌─────────────────────────────────────────────────────────────┐
│                        App.jsx                               │
│  ┌─────────────────────────────────────────────────────────┐│
│  │                     Header                               ││
│  └─────────────────────────────────────────────────────────┘│
│                           │                                  │
│              ┌────────────┼────────────┐                    │
│              ▼            ▼            ▼                    │
│         HomePage    CategoryPage   CategoryPage            │
│         (# lub      (#bullet-     (#casings,               │
│          #home)      types)        #primers)               │
│              │            │                                  │
│              │    ┌───────┴───────┐                         │
│              │    ▼               ▼                         │
│              │  Sidebar      Content                        │
│              │    │          ┌─────┴─────┐                  │
│              │    │          ▼           ▼                  │
│              │    │    Featured    GroupSection             │
│              │    │    Section         │                    │
│              │    │                    ▼                    │
│              │    │            SubcategoryCard              │
│              │    │                                         │
└──────────────┴────┴─────────────────────────────────────────┘
```

---

## Struktura plików

### Lokalna struktura (Vite + React)

```
LG-Ammopedia/
├── public/
│   └── images/                    # Wszystkie obrazki (90 plików)
│       ├── header_bg.png          # Tło headera
│       ├── logo.svg               # Logo Lucky Gunner
│       ├── sidebar-bullets-new.png # Tło sidebar Bullets
│       ├── sidebar-casings.png    # Tło sidebar Casings
│       ├── sidebar-primers.png    # Tło sidebar Primers
│       └── freepik__*.png         # Obrazki produktów (76 plików)
│
├── src/
│   ├── App.jsx                    # Główny komponent z routingiem
│   ├── main.jsx                   # Entry point React
│   ├── index.css                  # Style Tailwind
│   │
│   ├── components/
│   │   ├── Header.jsx             # Nagłówek strony
│   │   ├── HomePage.jsx           # Strona główna z kartami
│   │   ├── CategoryPage.jsx       # Layout strony kategorii
│   │   ├── CategorySidebar.jsx    # Sidebar z nawigacją
│   │   ├── FeaturedSection.jsx    # Sekcja wyróżnionych
│   │   ├── GroupSection.jsx       # Sekcja grupy produktów
│   │   ├── SubcategoryCard.jsx    # Karta produktu
│   │   └── Tag.jsx                # Komponent tagu
│   │
│   └── data/
│       └── categories/
│           ├── bulletTypes.js     # 66 typów pocisków
│           ├── casingTypes.js     # 6 typów łusek
│           └── primerTypes.js     # 11 typów spłonek
│
├── index.html
├── vite.config.js
├── tailwind.config.js
└── package.json
```

### Struktura Figma Make

```
/src/app/
├── App.tsx                        # Routing z hash
├── components/
│   ├── CategoryPage.tsx
│   ├── CategoryPageWithImages.tsx # Wrapper dla obrazków Figma
│   ├── CategorySidebar.tsx
│   ├── FeaturedSection.tsx
│   ├── GroupSection.tsx
│   └── SubcategoryCard.tsx
│
├── data/categories/
│   ├── bulletTypes.ts
│   ├── casingTypes.ts
│   └── primerTypes.ts
│
└── imports/                       # Komponenty z Figma
    ├── MainHeader.tsx
    ├── Container.tsx              # Homepage
    └── LogoLg.tsx
```

---

## Komponenty React

### App.jsx - Główny komponent

```jsx
// Hash-based routing
function useHashRoute() {
  const [route, setRoute] = useState(window.location.hash.slice(1) || '')

  useEffect(() => {
    const handleHashChange = () => {
      setRoute(window.location.hash.slice(1) || '')
    }
    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  return route
}

// Routing logic
const isHomePage = !route || route === 'home'
const isCategoryPage = ['bullet-types', 'casings', 'primers'].includes(route)
```

**Odpowiedzialności:**
- Zarządzanie routingiem hash-based
- Renderowanie odpowiedniej strony
- Breadcrumb navigation z przyciskiem powrotu

### Header.jsx

**Zawiera:**
- Logo Lucky Gunner
- Features: "In Stock", "Fast Shipping", "$100 Guarantee"
- Przyciski: "My Account", "My Cart"
- Kontakt: telefon i email
- Nawigacja: Home, Bulk Ammo, Specials, Blog, Labs, About Us, FAQ
- Search bar

### CategoryPage.jsx

**Props:**
```jsx
{
  data: {
    title: string,           // "Bullets"
    subtitle: string,        // "Types of"
    description: string,
    sidebarImage: string,
    showSidebar: boolean,
    featured: { hero, popular },
    groups: Array
  }
}
```

**Logika sidebar:**
```jsx
const showSidebar = forceSidebar === true || totalItems >= 20
```

### CategorySidebar.jsx

**Features:**
- Sticky position (top-4)
- Background image z kategorii
- Tytuł kategorii (subtitle + title)
- "JUMP TO" navigation
- Scroll spy - podświetla aktywną sekcję
- Smooth scroll do sekcji

**Stylowanie tekstu:**
```jsx
// Subtitle "Types of"
className="text-[40px] leading-[0.98] font-light"

// Title "Bullets"
className="text-[65px] leading-[0.98] font-bold tracking-[-3px]"

// "JUMP TO"
className="text-[40px] leading-[0.98] font-light"
```

### FeaturedSection.jsx

**Zawiera:**
- HeroCard - główny wyróżniony produkt
- PopularCards - 4 mniejsze karty popularnych produktów
- Layout: 50/50 na desktop, stacked na mobile

### GroupSection.jsx

**Features:**
- Collapsible na mobile
- "View All" button gdy > maxItems
- Sortowanie: produkty z hasDetailPage najpierw
- Grid: 3 kolumny z sidebar, 4 bez

### SubcategoryCard.jsx

**Warianty:**
- `hasDetailPage: true` - klikalna karta z linkiem
- `hasDetailPage: false` - statyczna karta z "Details coming soon"

### Tag.jsx

**Warianty kolorów:**
```javascript
const tagColors = {
  knowledgebase: 'bg-[#d84520]',  // czerwony
  featured: 'bg-[#2fb44b]',       // zielony
  target: 'bg-[#e0a332]',         // żółty
  hunting: 'bg-[#d89120]',        // pomarańczowy
  defense: 'bg-[#d89120]',        // pomarańczowy
  range: 'bg-[#e0b832]',          // złoty
  default: 'bg-[#e0a332]'         // żółty
}
```

---

## System danych

### Struktura danych kategorii

```typescript
interface CategoryData {
  title: string              // "Bullets", "Casings", "Primers"
  subtitle: string           // "Types of"
  description: string        // Opis kategorii

  // Sidebar configuration
  showSidebar?: boolean      // Force sidebar display
  sidebarImage: string       // Ścieżka do obrazka tła

  featured: {
    hero: string             // slug głównego produktu
    popular: string[]        // slugi popularnych produktów (max 4)
  }

  groups: CategoryGroup[]
}

interface CategoryGroup {
  name: string               // "Shot Types", "FMJ Variants"
  slug: string               // "shot-types", "fmj-variants"
  items: CategoryItem[]
}

interface CategoryItem {
  slug: string               // "fmj", "jhp", "brass"
  title: string              // "Full Metal Jacket (FMJ)"
  description: string        // Szczegółowy opis
  tags: string[]             // ["Target", "Range"]
  href: string               // "/ammopedia/bullet-type/fmj"
  hasDetailPage: boolean     // czy ma stronę szczegółów
  image?: string             // URL lub ścieżka do obrazka
}
```

### Podsumowanie danych

| Kategoria | Grupy | Produkty | hasDetailPage: true |
|-----------|-------|----------|---------------------|
| Bullets   | 7     | 66       | 35                  |
| Casings   | 1     | 6        | 6                   |
| Primers   | 3     | 11       | 11                  |
| **Łącznie** | **11** | **83** | **52**             |

### Grupy Bullets

1. **Shot Types** (13 items) - #1 Buck, #12 Shot, 00 Buck, etc.
2. **Full Metal Jacket** (7 items) - FMJ, FMJ-BT, TMJ, etc.
3. **Hollow Point** (10 items) - HP, JHP, SJHP, etc.
4. **Soft Point** (8 items) - SP, JSP, PSP, etc.
5. **Lead Bullets** (5 items) - LRN, Lead Solid, etc.
6. **Premium & Specialty** (14 items) - Nosler, Hornady, Barnes, etc.
7. **Specialty Construction** (9 items) - Frangible, Slugs, OTM, etc.

---

## Routing i nawigacja

### Hash Routes

| Hash | Strona | Komponent |
|------|--------|-----------|
| `#` lub pusty | Homepage | HomePage |
| `#home` | Homepage | HomePage |
| `#bullet-types` | Bullets | CategoryPage |
| `#casings` | Casings | CategoryPage |
| `#primers` | Primers | CategoryPage |

### Breadcrumb Navigation

```jsx
<nav className="flex items-center justify-between py-3">
  {/* Left side - breadcrumb links */}
  <div className="flex items-center gap-2 sm:gap-4">
    <a href="#" className="text-[#0d7339]">Ammopedia</a>
    <span>/</span>
    <a href="#bullet-types">Bullets</a>
    <span>|</span>
    <a href="#casings">Casings</a>
    <span>|</span>
    <a href="#primers">Primers</a>
  </div>

  {/* Right side - back button */}
  <a href="#" className="bg-[#0d7339] text-white">
    ← Back to Ammopedia
  </a>
</nav>
```

### Flow nawigacji

```
Homepage (#)
    │
    ├─> Click "Bullets card" → #bullet-types
    ├─> Click "Casings card" → #casings
    └─> Click "Primers card" → #primers

Category Page (#bullet-types)
    │
    ├─> Breadcrumb "Ammopedia" → #
    ├─> Breadcrumb "Casings" → #casings
    ├─> Breadcrumb "Primers" → #primers
    ├─> "Back to Ammopedia" button → #
    └─> Sidebar "JUMP TO" → scroll to section
```

---

## Stylowanie

### Paleta kolorów

| Nazwa | Hex | Użycie |
|-------|-----|--------|
| Primary Green | `#0d7339` | Przyciski, linki, aktywna nawigacja |
| Primary Green Hover | `#0a5f2e` | Hover state przycisków |
| Dark Green (Header) | `#0e7f3f` | Gradient nawigacji |
| Sidebar Background | `#1a2a1a` | Tło sidebar |
| Dark Green (Cards) | `#10331f` | Tło featured cards |
| Yellow Accent | `#f6ec42` | Strzałki, akcenty |
| Light Green | `#7ad9ab` | Checkmarks, ikony |
| Cart Yellow | `#dad321` | Przycisk koszyka |

### Breakpoints (Tailwind)

| Breakpoint | Szerokość | Użycie |
|------------|-----------|--------|
| sm | 640px | Mobile landscape |
| md | 768px | Tablet |
| lg | 1024px | Desktop (sidebar visible) |

### Kluczowe style

```css
/* Sidebar */
.sidebar {
  width: 260px;
  position: sticky;
  top: 1rem;
  background-color: #1a2a1a;
  background-size: cover;
  background-position: top center;
}

/* Max width container */
.container {
  max-width: 1170px;
  margin: 0 auto;
  padding: 0 1rem;
}

/* Font family */
.heading {
  font-family: 'Open Sans Condensed', sans-serif;
}

.body {
  font-family: 'Open Sans', sans-serif;
}
```

---

## Integracja z Figma Make

### Kluczowe różnice

| Aspekt | Lokalne (Vite) | Figma Make |
|--------|----------------|------------|
| Rozszerzenia plików | `.jsx` | `.tsx` |
| Obrazki sidebar | `/images/sidebar-*.png` | `figma:asset/...` |
| Obrazki produktów | `/images/freepik__*.png` | GitHub raw URLs |
| Homepage | `HomePage.jsx` | `Container.tsx` (z Figma) |
| Header | `Header.jsx` | `MainHeader.tsx` (z Figma) |

### Obsługa obrazków Figma

**Problem:** `figma:asset` nie działa bezpośrednio w CSS `backgroundImage`

**Rozwiązanie:** Wrapper komponent z importami ES6

```typescript
// CategoryPageWithImages.tsx

import bulletsSidebarImg from "figma:asset/55c77bb6...png"
import casingsSidebarImg from "figma:asset/80da1521...png"
import primersSidebarImg from "figma:asset/be9cac40...png"

const sidebarImageMap: Record<string, string> = {
  'Bullets': bulletsSidebarImg,
  'Casings': casingsSidebarImg,
  'Primers': primersSidebarImg,
}

export default function CategoryPageWithImages({ data }) {
  const resolvedSidebarImage = sidebarImageMap[data.title] || data.sidebarImage

  return (
    <CategoryPage
      data={{ ...data, sidebarImage: resolvedSidebarImage }}
    />
  )
}
```

### GitHub Raw URLs dla obrazków

Format:
```
https://raw.githubusercontent.com/Creaturro/LG-Ammopedia/main/public/images/[filename]
```

Przykład:
```javascript
image: "https://raw.githubusercontent.com/Creaturro/LG-Ammopedia/main/public/images/freepik__fmj-full-metal-jacket-fmj-bullet-copper-jacketed-r__20251.png"
```

---

## Zarządzanie obrazkami

### Kategorie obrazków

#### 1. Systemowe (6 plików)
```
header_bg.png              # Tło headera
logo.svg                   # Logo Lucky Gunner
sidebar-bullets.png        # (stare) Tło sidebar Bullets
sidebar-bullets-new.png    # Tło sidebar Bullets
sidebar-casings.png        # Tło sidebar Casings
sidebar-primers.png        # Tło sidebar Primers
```

#### 2. HomePage (9 plików)
```
08e8b370620fd01f48598536a5b10a3844d4b77c.png
09ddf6bac5711a663067e1ebb110beaaae66deb0.png
21b48a90ae224a099ef40fdfb8da5aaff353807d.png
... (karty kategorii)
```

#### 3. Produkty - Shot Types (13 plików)
```
freepik__1-buck-shotgun-shell-cutaway-showing-1-buckshot-pe__20238.jpeg
freepik__00-buck-shotgun-shell-cutaway-showing-00-buckshot-__20239.png
freepik__000-buck-shotgun-shell-cutaway-showing-realistic-s__20240.png
... etc.
```

#### 4. Produkty - FMJ (7 plików)
```
freepik__fmj-full-metal-jacket-fmj-bullet-copper-jacketed-r__20251.png
freepik__fmjbt-full-metal-jacket-boat-tail-fmjbt-bullet-cop__20252.png
... etc.
```

#### 5. Produkty - Hollow Point (10 plików)
```
freepik__hp-hollow-point-hp-bullet-visible-hollow-cavity-in__20258.png
freepik__jhp-jacketed-hollow-point-jhp-bullet-copper-jacket__20260.png
... etc.
```

#### 6. Produkty - Soft Point (8 plików)
```
freepik__sp-soft-point-sp-bullet-copper-jacket-with-exposed__20268.png
... etc.
```

#### 7. Produkty - Lead (5 plików)
```
freepik__lrn-lead-round-nose-lrn-bullet-alllead-constructio__20276.png
... etc.
```

#### 8. Produkty - Premium (14 plików)
```
freepik__nosleraccubond-nosler-accubond-bullet-white-polyme__20281.png
... etc.
```

#### 9. Produkty - Specialty (9 plików)
```
freepik__frangible-bullet-compressed-coppertin-powder-const__20293.png
... etc.
```

#### 10. Produkty - Casings (6 plików)
```
freepik__aluminum-ammunition-casing-lightweight-silvergray-__20304.png
freepik__brass-ammunition-casing-polished-goldenyellow-meta__20305.png
freepik__nickelplated-brass-ammunition-casing-bright-silver__20306.png
freepik__candid-photography-with-natural-textures-and-highl__20307.png  # steel
freepik__candid-photography-with-natural-textures-and-highl__20308.png  # copper-plated
freepik__candid-photography-with-natural-textures-and-highl__20309.png  # brass-plated
```

#### 11. Produkty - Primers (4 pliki, reużywane)
```
freepik__candid-photography-with-natural-textures-and-highl__20310.png  # boxer, small-pistol, small-rifle
freepik__candid-photography-with-natural-textures-and-highl__20311.png  # berdan, magnum variants
freepik__candid-photography-with-natural-textures-and-highl__20312.png  # rimfire, large variants
freepik__candid-photography-with-natural-textures-and-highl__20313.png  # large magnum variants
```

**Łącznie: 90 plików obrazków**

---

## Rozwiązane problemy

### Problem 1: Obrazki Figma nie wyświetlają się w CSS

**Symptom:** `backgroundImage: url(figma:asset/...)` nie działa

**Przyczyna:** Figma asset URLs muszą być importowane jako moduły ES6

**Rozwiązanie:**
```typescript
// Zamiast:
sidebarImage: "figma:asset/55c77bb6..."

// Użyj:
import sidebarImg from "figma:asset/55c77bb6..."
// i przekaż jako prop
```

### Problem 2: Malutka czcionka w sidebar

**Symptom:** Tekst w sidebarze był za mały

**Rozwiązanie:** Explicit font sizes w klasach Tailwind:
```jsx
// Subtitle
className="text-[40px]"

// Title
className="text-[65px]"

// JUMP TO
className="text-[40px]"
```

### Problem 3: Przycisk "Back to Ammopedia" - pozycjonowanie

**Symptom:** Przycisk był po lewej, miał być po prawej

**Rozwiązanie:** Użycie `justify-between` w flex container:
```jsx
<nav className="flex items-center justify-between py-3">
  <div><!-- breadcrumb links --></div>
  <a><!-- back button --></a>
</nav>
```

### Problem 4: Sidebar nie pokazuje się dla małych kategorii

**Symptom:** Casings (6 items) nie miał sidebara

**Rozwiązanie:** Dodanie flagi `showSidebar: true` w danych kategorii:
```javascript
const casingTypesData = {
  showSidebar: true,  // Force sidebar
  sidebarImage: "/images/sidebar-casings.png",
  // ...
}
```

---

## Checklist dla przyszłych zmian

### Dodawanie nowej kategorii

- [ ] Stwórz plik danych w `/src/data/categories/newCategory.js`
- [ ] Dodaj obrazek sidebara do `/public/images/`
- [ ] Dodaj route w `App.jsx`:
  ```javascript
  case 'new-category':
    return newCategoryData
  ```
- [ ] Dodaj link w breadcrumb navigation
- [ ] Dodaj obrazki produktów do `/public/images/`
- [ ] **Figma Make:** Import obrazka sidebar jako `figma:asset`
- [ ] **Figma Make:** Dodaj mapping w `CategoryPageWithImages.tsx`

### Dodawanie nowego produktu

```javascript
{
  slug: "product-slug",
  title: "Product Name",
  description: "Detailed description...",
  tags: ["Tag1", "Tag2"],
  href: "/ammopedia/category-type/product-slug",
  hasDetailPage: true,  // lub false
  image: "/images/product-image.png"
}
```

### Aktualizacja obrazków

| Typ obrazka | Lokalne | Figma Make |
|-------------|---------|------------|
| Sidebar | `/public/images/sidebar-*.png` | Import `figma:asset` |
| Produkty | `/public/images/freepik__*.png` | GitHub raw URLs |
| Header/Logo | `/public/images/*.png` | Import z Figma |

### Build i deploy

```bash
# Lokalne development
npm run dev

# Build produkcyjny
npm run build

# Wynik w /dist
```

---

## Notatki końcowe

1. **Sidebar visibility:** Pokazuje się gdy `showSidebar: true` LUB gdy kategoria ma ≥20 elementów
2. **hasDetailPage: false** = produkt wyświetla się ale nie jest klikalny
3. **Featured Section** używa `hero` i `popular` slugs z danych kategorii
4. **Scroll spy** w sidebar podświetla aktywną sekcję podczas scrollowania
5. **Responsive:** Sidebar ukrywa się na mobilnych (< lg breakpoint, 1024px)
6. **Hash routing** - prosty sposób na routing bez React Router
7. **GitHub raw URLs** - świetne do hostowania obrazków (CDN)

---

*Dokumentacja wygenerowana: 2025-12-22*
*Projekt: LG Ammopedia*
*Repozytorium: https://github.com/Creaturro/LG-Ammopedia*
