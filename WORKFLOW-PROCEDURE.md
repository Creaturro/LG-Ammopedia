# Procedura Workflow: Figma Design → Cursor → Figma Make

## Przegląd narzędzi

| Narzędzie | Rola |
|-----------|------|
| **Figma Design** | Projektowanie wizualne, style, layouty |
| **Figma MCP** | Przesyłanie danych z Figma do Cursor (przycisk "Copy Example Prompt") |
| **Cursor + Claude Code** | Edycja kodu, rozwój funkcjonalności |
| **GitHub** | Hosting obrazków (raw URLs) + backup kodu |
| **Figma Make** | Konwersja kodu na interaktywną stronę, publikacja |

## Przepływ danych

```
Figma Design ──(MCP)──► Cursor ──(paste code)──► Figma Make ──► Figma Servers
                           │                          ▲
                           └──(git push)──► GitHub ───┘
                                            (tylko obrazki - raw URLs)
```

**Kluczowe:**
- Kod idzie bezpośrednio z Cursor do Figma Make (wklejenie)
- GitHub służy tylko do hostowania obrazków (raw URLs)

---

## Faza 1: Przygotowanie w Figma Design

### Wyeksportuj obrazki do folderu lokalnego

```
public/images/
├── sidebar-bullets.png     # Tła sidebar
├── sidebar-casings.png
├── sidebar-primers.png
├── header_bg.png           # Tło headera
├── logo.svg                # Logo
└── freepik__*.png          # Obrazki produktów
```

**Eksport z Figma:**
1. Zaznacz element
2. Panel prawy → Export
3. Format: PNG/SVG
4. Zapisz do `public/images/`

---

## Faza 2: Transfer z Figma do Cursor

### Wymagania
- Projekt w trybie **DEV Mode** (`Shift + D`)
- Figma MCP skonfigurowany (patrz sekcja poniżej)

### Figma MCP - Konfiguracja

**MCP (Model Context Protocol)** pozwala Claude Code bezpośrednio pobierać dane z Figma przez wklejenie linku.

#### Jednorazowa konfiguracja (raz na komputer)

**Krok 1:** Znajdź plik konfiguracji Claude Code:
```
C:\Users\[TwójUser]\.claude.json
```

**Krok 2:** Dodaj sekcję `mcpServers` do pliku:
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

> **Uwaga:** Jeśli plik już istnieje i ma inne wpisy, dodaj tylko sekcję `mcpServers` (nie nadpisuj całego pliku).

**Krok 3:** Restart Cursor / Claude Code

#### Przy każdym użyciu

1. **Otwórz plik w Figma Desktop** (nie w przeglądarce!)
2. **Włącz Dev Mode:** `Shift + D`
3. **Wklej link do Claude Code**

#### Jak to działa

```
┌─────────────────────┐         ┌─────────────────────┐
│   Figma Desktop     │         │    Claude Code      │
│   (Dev Mode ON)     │         │                     │
│                     │         │  .claude.json:      │
│  Serwer MCP startuje│ ◄─────► │  mcpServers.Figma   │
│  na porcie 3845     │   SSE   │  → 127.0.0.1:3845   │
└─────────────────────┘         └─────────────────────┘
```

#### Użycie

Wklej link Figma do Claude Code:

```
@https://www.figma.com/design/eO8FTZS1l7XPK3cSqX8Ft9/LG-Ammopedia?node-id=215-79
```

Claude automatycznie:
1. Pobierze dane designu (layout, style, wymiary)
2. Wygeneruje kod React + Tailwind
3. Pobierze screenshot node'a dla kontekstu wizualnego

### Kroki (klasyczna metoda - Copy Example Prompt)

1. **Włącz DEV Mode** w Figma Design

2. **Zaznacz element do przesłania:**
   - Cała strona
   - Wybrany node/rama
   - Komponent

3. **W panelu Figma MCP kliknij "Copy Example Prompt"**

4. **Wklej prompt do Cursor** (Claude Code)

5. **Zainicjuj projekt:**
   ```bash
   npm create vite@latest project-name -- --template react-ts
   cd project-name
   npm install
   npm install -D tailwindcss postcss autoprefixer
   npx tailwindcss init -p
   ```

> **Rekomendacja:** Użyj `react-ts` (TypeScript) - Figma Make i tak konwertuje JS na TS.

---

## Faza 3: Rozwój w Cursor

### Struktura projektu

```
src/
├── App.tsx
├── main.tsx
├── index.css
├── components/
│   ├── Header.tsx
│   ├── HomePage.tsx
│   ├── CategoryPage.tsx
│   ├── CategorySidebar.tsx
│   └── ...
└── data/
    └── categories/
        ├── bulletTypes.ts
        ├── casingTypes.ts
        └── primerTypes.ts
```

### Testowanie
```bash
npm run dev
# Podgląd w wbudowanym Browser Cursor
```

---

## Faza 4: Upload obrazków do GitHub

> GitHub służy do hostowania obrazków. Figma Make nie może pobrać lokalnych plików, ale może użyć GitHub raw URLs.

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/user/project-name.git
git push -u origin main
```

### Format GitHub Raw URL:
```
https://raw.githubusercontent.com/{user}/{repo}/main/public/images/{filename}
```

Figma Make użyje tych URLs do wyświetlania obrazków produktów.

---

## Faza 5: Przygotowanie dla Figma Make

### Ograniczenie Figma Make
> Figma Make nie przyjmuje paczek plików. Wymaga wklejenia kodu w jednej wiadomości.

### Format wklejania kodu

Poproś Claude Code:
```
"Przygotuj wszystkie pliki projektu w formacie do Figma Make
z separatorami === ścieżka/plik ==="
```

Output:
```
=== src/App.tsx ===
[zawartość]

=== src/components/Header.tsx ===
[zawartość]

=== src/data/categories/bulletTypes.ts ===
[zawartość]
```

### Format mapowania obrazków

```
KATEGORIA: [Nazwa Grupy]
---
slug-produktu-1 -> nazwa_pliku_1.png
slug-produktu-2 -> nazwa_pliku_2.jpg

KATEGORIA: [Następna Grupa]
---
inny-slug -> inny_plik.png
```

Przykład:
```
KATEGORIA: FMJ Variants
---
fmj -> freepik__fmj-full-metal-jacket.png
fmj-bt -> freepik__fmjbt-boat-tail.png
tmj -> freepik__tmj-total-metal-jacket.png
```

### Checklist przed wklejeniem

```
☐ Kod skonsolidowany (format === path/file ===)
☐ Obrazki pushowane do GitHub
☐ Lista mapowań obrazków (slug -> filename)
☐ Sidebar image uploadowany do Figma (dla figma:asset)
☐ Route/hash określony (np. #bullets)
☐ Featured hero i popular items określone
```

---

## Faza 6: Integracja w Figma Make

### Szablon żądania dla Make

```markdown
## Integracja kategorii "[NAZWA]"

### Kod
[wklej skonsolidowany kod]

### Obrazki produktów
Bazowy URL: https://raw.githubusercontent.com/user/repo/main/public/images/

KATEGORIA: [Grupa 1]
---
slug-1 -> filename_1.png
slug-2 -> filename_2.png

### Konfiguracja
- Route: #[hash-name]
- Sidebar: TAK/NIE
- Featured hero: "[slug]"
- Featured popular: ["slug1", "slug2"]
```

### Jak Make przetwarza obrazki

1. **Obrazki sidebar** - używa `figma:asset`:
   ```typescript
   import sidebarImg from "figma:asset/55c77bb6...png"
   ```

2. **Obrazki produktów** - zamienia na GitHub raw URLs:
   ```typescript
   image: "https://raw.githubusercontent.com/user/repo/main/public/images/product.png"
   ```

---

## Faza 7: Publikacja

1. Kliknij "Publish" w Figma Make
2. Skonfiguruj domenę (*.figma.site)
3. Opublikuj

---

## Synchronizacja zmian

### Zmiany kodu (Cursor → Figma Make)
```
1. Edytuj w Cursor
2. Przygotuj skonsolidowany output
3. Wklej do Figma Make
4. Re-publikuj
```

### Nowe obrazki
```
1. Dodaj do public/images/
2. git push do GitHub
3. Wygeneruj listę obrazków z nowymi raw URLs
4. Wklej listę do Figma Make
```

---

## Częste problemy

| Problem | Rozwiązanie |
|---------|-------------|
| Figma MCP nie widzi projektu | Włącz DEV Mode (`Shift + D`) w Figma Desktop |
| Port 3845 nie nasłuchuje | Otwórz Figma Desktop (nie przeglądarkę) i włącz Dev Mode |
| Claude nie widzi MCP serwera | Sprawdź `C:\Users\[User]\.claude.json` - musi mieć sekcję `mcpServers` |
| Brak pliku .claude.json | Utwórz go ręcznie z konfiguracją MCP (patrz Faza 2) |
| Claude nie rozpoznaje linku Figma | Wklej link z `@` lub bez - oba działają |
| Figma Make nie widzi obrazków | Użyj GitHub raw URLs |
| figma:asset nie działa w CSS | Import jako moduł ES6 |

---

## Optymalizacja na przyszłość

| Standardowo | Zoptymalizowany |
|-------------|-----------------|
| JavaScript (JSX) | **TypeScript (TSX)** |
| Obrazki lokalne → GitHub później | GitHub od początku |
| Ścieżki `/images/*.png` | `raw.githubusercontent.com/...` |

**Dlaczego TypeScript:** Figma Make konwertuje JS→TS. Zaczynając od TS unikasz różnic między lokalnym kodem a Figma Make.

---

*Procedura: 2025-01-05 | Projekt: LG Ammopedia*
