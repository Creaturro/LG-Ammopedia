<!--
LLM CONTEXT: Ten plik to instrukcja workflow Figma → Claude Code → Publikacja.
Użyj jako kontekst gdy user:
- Pyta o połączenie Figma z Claude/Cursor
- Chce opublikować stronę (Figma Make)
- Ma problem z obrazkami (GitHub raw URLs)
- Potrzebuje konfiguracji MCP (.claude.json)
- Pyta o setup nowego projektu (TypeScript + Tailwind)
-->

# Figma MCP → Claude Code - Uniwersalny Workflow

## Co to daje?

**Tradycyjnie:** Designer eksportuje → developer ręcznie koduje → poprawki → tygodnie

**Z tym workflow:** Wklejasz link z Figma → Claude generuje kod → publikacja → **minuty**

### Jak to działa:

```
📐 Figma Design  →  💻 Claude Code  →  🖼️ GitHub  →  🌐 Figma Make
   (wklej link)      (React+TS+Tailwind)  (obrazki)    (publikacja)
                                                            ↓
                                              ✅ [twoja-strona].figma.site
```

### Co zyskujesz:

- **Połączenie Figma ↔ Claude** — wklejasz link, dostajesz kod z dokładnymi wartościami
- **TypeScript od startu** — pełna kompatybilność z Figma Make, bez konwersji
- **Hosting obrazków** — GitHub raw URLs działają wszędzie za darmo
- **Publikacja bez serwera** — Figma Make hostuje na figma.site

---

## Spis treści

1. [Setup projektu TypeScript](#1-setup-projektu-typescript)
2. [Jednorazowa konfiguracja MCP](#2-jednorazowa-konfiguracja-mcp)
3. [Użycie w projekcie](#3-użycie-w-projekcie)
4. [Co otrzymujesz z Figma](#4-co-otrzymujesz-z-figma)
5. [GitHub Raw URLs - hosting obrazków](#5-github-raw-urls---hosting-obrazków)
6. [Figma Make - publikacja](#6-figma-make---publikacja)
7. [Troubleshooting](#7-troubleshooting)

---

## 1. Setup projektu TypeScript

**WAŻNE:** Zawsze startuj nowe projekty z TypeScript. Figma Make natywnie obsługuje TypeScript - bez konwersji, bez problemów.

### Dlaczego TypeScript?

| Aspekt | JavaScript (JSX) | TypeScript (TSX) |
|--------|------------------|------------------|
| Figma Make | Wymaga konwersji | Natywna obsługa ✅ |
| Autocomplete | Podstawowy | Pełny z typami ✅ |
| Błędy | Runtime (produkcja) | Compile-time (dev) ✅ |
| Refactoring | Ryzykowny | Bezpieczny ✅ |

### Krok 1: Inicjalizacja projektu Vite + React + TypeScript

```bash
npm create vite@latest nazwa-projektu -- --template react-ts
cd nazwa-projektu
npm install
```

### Krok 2: Instalacja Tailwind CSS

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

### Krok 3: Konfiguracja Tailwind

**tailwind.config.js:**
```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

**src/index.css:**
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### Krok 4: Struktura projektu

```
projekt/
├── public/
│   └── images/           # Obrazki (później GitHub raw URLs)
├── src/
│   ├── components/       # Komponenty React (.tsx)
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── Card.tsx
│   ├── data/             # Dane (.ts)
│   │   └── products.ts
│   ├── types/            # Definicje typów (.ts)
│   │   └── index.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── tailwind.config.js
├── tsconfig.json         # Auto-generowany przez Vite
└── package.json
```

### Krok 5: Podstawowe typy (opcjonalnie, ale zalecane)

**src/types/index.ts:**
```typescript
// Przykładowe typy dla projektu
export interface Product {
  slug: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  hasDetailPage: boolean;
}

export interface Category {
  title: string;
  subtitle: string;
  description: string;
  groups: Group[];
}

export interface Group {
  name: string;
  slug: string;
  items: Product[];
}
```

### Krok 6: Przykładowy komponent TypeScript

**src/components/Card.tsx:**
```typescript
interface CardProps {
  title: string;
  description: string;
  image: string;
  tags?: string[];
  onClick?: () => void;
}

export default function Card({ title, description, image, tags = [], onClick }: CardProps) {
  return (
    <div
      className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
      onClick={onClick}
    >
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="font-bold text-lg mb-2">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
        {tags.length > 0 && (
          <div className="flex gap-2 mt-3">
            {tags.map((tag, i) => (
              <span key={i} className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
```

### Krok 7: Uruchomienie

```bash
npm run dev
```

Projekt gotowy pod Figma MCP i Make!

---

## 2. Jednorazowa konfiguracja MCP

Te kroki wykonujesz **raz na komputer**. Potem działa dla wszystkich projektów.

### Krok 1: Znajdź plik konfiguracji Claude Code

**Windows:**
```
C:\Users\[TwójUser]\.claude.json
```

**Mac/Linux:**
```
~/.claude.json
```

### Krok 2: Dodaj konfigurację MCP

Jeśli plik **nie istnieje** - utwórz go z zawartością:

```json
{
  "mcpServers": {
    "Figma": {
      "type": "sse",
      "url": "http://127.0.0.1:3845/sse"
    }
  }
}
```

Jeśli plik **już istnieje** - dodaj sekcję `mcpServers` do istniejącej struktury:

```json
{
  "mcpServers": {
    "Figma": {
      "type": "sse",
      "url": "http://127.0.0.1:3845/sse"
    }
  },
  ... inne istniejące wpisy ...
}
```

### Krok 3: Restart Claude Code / Cursor

Po zapisaniu pliku wymagany jest restart edytora.

### Weryfikacja konfiguracji

Po restarcie sprawdź czy MCP jest wykrywany:
- W Cursor: powinien pojawić się w liście dostępnych narzędzi
- Możesz też sprawdzić port: `netstat -ano | findstr "3845"`

---

## 3. Użycie w projekcie

### Przed każdą sesją:

| Krok | Akcja |
|------|-------|
| 1 | Otwórz projekt w **Figma Desktop** (nie przeglądarka!) |
| 2 | Włącz **Dev Mode**: `Shift + D` |
| 3 | Upewnij się że widzisz panel "Dev Mode" po prawej |

### Pobieranie designu:

1. **Skopiuj link do node'a z Figma:**
   - Kliknij prawym na element → "Copy link"
   - Lub skopiuj URL z paska adresu

2. **Wklej link do Claude Code:**
   ```
   https://www.figma.com/design/[fileKey]/[fileName]?node-id=123-456
   ```

   Lub z prefixem `@`:
   ```
   @https://www.figma.com/design/[fileKey]/[fileName]?node-id=123-456
   ```

3. **Claude automatycznie:**
   - Pobierze strukturę designu (layout, wymiary, style)
   - Wygeneruje kod React + Tailwind CSS
   - Pobierze screenshot dla wizualnego kontekstu

---

## 4. Co otrzymujesz z Figma

### Dane strukturalne:
- Hierarchia elementów (frames, groups, components)
- Wymiary i pozycje (width, height, padding, gap)
- Style (kolory, fonty, border-radius)
- Nazwy warstw (data-name)

### Wygenerowany kod:
```typescript
// Przykład output z Figma MCP (TypeScript)
const imgIcon = "http://localhost:3845/assets/abc123.svg";

interface ComponentProps {
  label?: string;
}

export default function Component({ label = "Label" }: ComponentProps) {
  return (
    <div className="flex items-center gap-4 p-6 bg-white border border-gray-200">
      <img src={imgIcon} alt="" className="w-8 h-8" />
      <span className="text-sm text-black">{label}</span>
    </div>
  );
}
```

### Obrazki:
- SVG i PNG są dostępne przez localhost podczas sesji
- URL: `http://localhost:3845/assets/[hash].[ext]`
- **Uwaga:** Te URLe działają tylko gdy Figma Desktop jest otwarta

---

## 5. GitHub Raw URLs - hosting obrazków

Obrazki z Figma MCP (`localhost:3845`) działają tylko podczas sesji. Dla produkcji użyj **GitHub Raw URLs**.

### Dlaczego GitHub?

| Źródło | Dev | Produkcja | Uwagi |
|--------|-----|-----------|-------|
| `localhost:3845` | ✅ | ❌ | Tylko gdy Figma Desktop otwarta |
| `/images/local.png` | ✅ | ❌ | Nie działa w Figma Make |
| GitHub Raw URL | ✅ | ✅ | Uniwersalne rozwiązanie |

### Format URL

```
https://raw.githubusercontent.com/[user]/[repo]/[branch]/[path]
```

**Przykład:**
```
https://raw.githubusercontent.com/creaturro/lg-ammopedia/main/public/images/bullet.png
```

### Workflow z GitHub

#### Krok 1: Struktura projektu

```
projekt/
├── public/
│   └── images/
│       ├── logo.svg
│       ├── product-1.png
│       └── icon-hunting.svg
└── src/
    └── ...
```

#### Krok 2: Push do GitHub

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/[user]/[repo].git
git push -u origin main
```

#### Krok 3: Użycie w kodzie

**Lokalny development:**
```typescript
// Działa lokalnie
<img src="/images/product-1.png" alt="Product" />
```

**Produkcja / Figma Make:**
```typescript
// Działa wszędzie
<img src="https://raw.githubusercontent.com/user/repo/main/public/images/product-1.png" alt="Product" />
```

### Generowanie listy URL

Poproś Claude Code:
```
Wygeneruj listę GitHub raw URLs dla wszystkich obrazków w public/images/
Base URL: https://raw.githubusercontent.com/[user]/[repo]/main
```

**Output:**
```
logo.svg -> https://raw.githubusercontent.com/user/repo/main/public/images/logo.svg
product-1.png -> https://raw.githubusercontent.com/user/repo/main/public/images/product-1.png
icon-hunting.svg -> https://raw.githubusercontent.com/user/repo/main/public/images/icon-hunting.svg
```

### Mapowanie slug → plik

Dla projektów z wieloma produktami, utrzymuj mapowanie:

```
KATEGORIA: [Nazwa grupy]
---
slug-produktu-1 -> filename_1.png
slug-produktu-2 -> filename_2.jpg

KATEGORIA: [Inna grupa]
---
inny-slug -> inny_plik.png
```

### Uwagi

- **Repo musi być publiczne** lub użyj GitHub token dla prywatnych
- **Cache:** GitHub cachuje pliki ~5 min, zmiany mogą nie być natychmiastowe
- **Limity:** Brak limitów dla normalnego użycia, ale nie używaj jako CDN dla heavy traffic
- **Alternatywy:** Cloudinary, Imgur, własny CDN

---

## 6. Figma Make - publikacja

Figma Make to narzędzie do konwersji kodu na interaktywną stronę hostowaną na serwerach Figma.

### Przepływ danych

```
Cursor (kod) ──(wklej)──► Figma Make ──(publikuj)──► figma.site
                              │
                              ▼
                    GitHub (obrazki via raw URLs)
```

### Ograniczenia Figma Make

| Ograniczenie | Rozwiązanie |
|--------------|-------------|
| Nie przyjmuje paczek plików | Skonsoliduj kod w jedną wiadomość |
| Nie widzi lokalnych obrazków | Użyj GitHub raw URLs |
| ~~Konwertuje JS → TypeScript~~ | ✅ Rozwiązane - startuj od TypeScript |

### Format wklejania kodu

Poproś Claude Code:
```
Przygotuj wszystkie pliki projektu w formacie do Figma Make
z separatorami === ścieżka/plik ===
```

**Output:**
```
=== src/App.tsx ===
import Header from './components/Header';
import Footer from './components/Footer';
// ... kod

=== src/components/Header.tsx ===
interface HeaderProps {
  title: string;
}
export default function Header({ title }: HeaderProps) {
  // ... kod
}

=== src/data/products.ts ===
import { Product } from '../types';
export const products: Product[] = [
  // ... dane
];

=== src/types/index.ts ===
export interface Product {
  slug: string;
  title: string;
  // ... typy
}
```

### Szablon żądania dla Figma Make

```markdown
## Nowy projekt: [NAZWA]

### Kod
[wklej skonsolidowany kod z separatorami]

### Obrazki
Bazowy URL: https://raw.githubusercontent.com/[user]/[repo]/main/public/images/

Lista mapowań:
logo.svg -> https://raw.githubusercontent.com/user/repo/main/public/images/logo.svg
product-1.png -> https://raw.githubusercontent.com/user/repo/main/public/images/product-1.png

### Konfiguracja
- Route: #[hash-name] (jeśli dotyczy)
- Framework: React + TypeScript + Tailwind CSS
```

### Obsługa obrazków w Figma Make

**1. Obrazki statyczne (logo, tła):**

Figma Make może użyć `figma:asset` dla obrazków uploadowanych bezpośrednio:
```typescript
import logoImg from "figma:asset/abc123...png"

<img src={logoImg} alt="Logo" />
```

**2. Obrazki dynamiczne (produkty):**

Użyj GitHub raw URLs:
```typescript
interface Product {
  name: string;
  image: string;
}

const products: Product[] = [
  {
    name: "Produkt 1",
    image: "https://raw.githubusercontent.com/user/repo/main/public/images/product-1.png"
  }
];
```

### Checklist przed publikacją

```
☐ Projekt utworzony z template react-ts (Vite)
☐ Kod skonsolidowany (format === path/file.tsx ===)
☐ Wszystkie pliki to .tsx / .ts (NIE .jsx / .js)
☐ Interfejsy zdefiniowane dla props komponentów
☐ Obrazki pushowane do GitHub
☐ GitHub raw URLs wygenerowane
☐ Brak błędów TypeScript (npm run build)
☐ Responsywność przetestowana
```

### Publikacja

1. Wklej kod do Figma Make
2. Poczekaj na przetworzenie
3. Kliknij **"Publish"**
4. Skonfiguruj domenę: `[nazwa].figma.site`
5. Gotowe!

### Aktualizacja opublikowanej strony

```
1. Wprowadź zmiany w Cursor
2. Przygotuj skonsolidowany output
3. Wklej do Figma Make (ta sama konwersacja lub nowa)
4. Re-publikuj
```

---

## 7. Troubleshooting

### Problem: Claude nie pobiera danych z linku Figma

| Sprawdź | Rozwiązanie |
|---------|-------------|
| Figma Desktop otwarta? | Otwórz aplikację desktop (nie przeglądarkę) |
| Dev Mode włączony? | `Shift + D` w Figma |
| Port 3845 nasłuchuje? | `netstat -ano \| findstr "3845"` |
| Plik .claude.json istnieje? | Utwórz w katalogu home użytkownika |
| Sekcja mcpServers dodana? | Sprawdź format JSON (patrz Krok 2) |
| Cursor zrestartowany? | Zamknij i otwórz ponownie po zmianie .claude.json |

### Problem: "MCP not connected" lub brak odpowiedzi

1. Zamknij Figma Desktop
2. Otwórz ponownie
3. Włącz Dev Mode (`Shift + D`)
4. Poczekaj 2-3 sekundy
5. Spróbuj ponownie wkleić link

### Problem: Obrazki nie ładują się

Obrazki z `localhost:3845` działają tylko gdy:
- Figma Desktop jest otwarta
- Ten sam plik jest otwarty w Figma

Dla produkcji użyj:
- GitHub raw URLs
- CDN
- Lokalne pliki w `public/images/`

---

## Diagram działania

```
┌─────────────────────────────────────────────────────────────────┐
│                         KONFIGURACJA                            │
│                      (raz na komputer)                          │
│                                                                 │
│   ~/.claude.json                                                │
│   {                                                             │
│     "mcpServers": {                                             │
│       "Figma": {                                                │
│         "type": "sse",                                          │
│         "url": "http://127.0.0.1:3845/sse"                      │
│       }                                                         │
│     }                                                           │
│   }                                                             │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│                          UŻYCIE                                 │
│                    (przy każdej sesji)                          │
│                                                                 │
│  ┌─────────────────┐              ┌─────────────────┐           │
│  │ Figma Desktop   │              │ Claude Code     │           │
│  │                 │              │ (Cursor/CLI)    │           │
│  │ 1. Otwórz plik  │              │                 │           │
│  │ 2. Dev Mode ON  │──── SSE ────▶│ Wklej link      │           │
│  │    (Shift+D)    │   port 3845  │ Figma           │           │
│  │                 │              │                 │           │
│  │ Serwer MCP      │◀─────────────│ Pobiera dane    │           │
│  │ startuje auto   │              │ + screenshot    │           │
│  └─────────────────┘              └─────────────────┘           │
│                                            │                    │
│                                            ▼                    │
│                                   ┌─────────────────┐           │
│                                   │ Kod React +     │           │
│                                   │ Tailwind CSS    │           │
│                                   └─────────────────┘           │
└─────────────────────────────────────────────────────────────────┘
```

---

## Szybka ściągawka

```bash
# 0. NOWY PROJEKT (TypeScript + Tailwind)
npm create vite@latest moj-projekt -- --template react-ts
cd moj-projekt
npm install
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
# Skonfiguruj tailwind.config.js i src/index.css (patrz sekcja 1)
npm run dev

# 1. Konfiguracja MCP (raz na komputer)
# Edytuj: C:\Users\[User]\.claude.json (Windows) lub ~/.claude.json (Mac)
# Dodaj: "mcpServers": { "Figma": { "type": "sse", "url": "http://127.0.0.1:3845/sse" } }
# Restart Cursor

# 2. Przed użyciem Figma MCP
# - Otwórz Figma Desktop
# - Shift + D (Dev Mode)

# 3. W Claude Code
# Wklej: https://www.figma.com/design/xxx/Project?node-id=123-456
# WAŻNE: Poproś o kod TypeScript (.tsx / .ts)

# 4. Weryfikacja MCP
netstat -ano | findstr "3845"   # Powinno pokazać LISTENING

# 5. GitHub Raw URLs (dla obrazków produkcyjnych)
# Format: https://raw.githubusercontent.com/[user]/[repo]/main/public/images/[plik]
# Push: git add . && git commit -m "Add images" && git push

# 6. Figma Make
# - Poproś Claude: "Skonsoliduj kod TypeScript z separatorami === path/file.tsx ==="
# - Wklej do Figma Make
# - Publish → [nazwa].figma.site

# 7. Weryfikacja TypeScript przed publikacją
npm run build   # Musi przejść bez błędów!
```

---

*Wersja: 2025-01-05*
