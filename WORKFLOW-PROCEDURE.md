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
- Figma MCP skonfigurowany

### Kroki

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

### Format wklejania

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

### Lista obrazków

Poproś Claude Code:
```
"Wylistuj wszystkie obrazki z public/images/"
```

---

## Faza 6: Integracja w Figma Make

1. **Wklej kod** do Figma Make Assistant

2. **Obrazki sidebar** - Figma Make używa `figma:asset`:
   ```typescript
   import sidebarImg from "figma:asset/55c77bb6...png"
   ```

3. **Obrazki produktów** - zamień na GitHub raw URLs:
   ```typescript
   image: "https://raw.githubusercontent.com/user/repo/main/public/images/product.png"
   ```

4. **Wklej listę obrazków** - Figma Make zamieni ścieżki

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
| Figma MCP nie widzi projektu | Włącz DEV Mode (`Shift + D`) |
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

*Procedura: 2025-12-22 | Projekt: LG Ammopedia*
