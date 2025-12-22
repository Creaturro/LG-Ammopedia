# Procedura Workflow: Figma Design → Cursor → Figma Make

## Przegląd narzędzi

### Środowisko pracy

| Narzędzie | Rola | Kluczowe możliwości |
|-----------|------|---------------------|
| **Figma Design** | Projektowanie wizualne | Tworzenie layoutów, style guide, komponenty UI |
| **Figma MCP** | Most danych | Plugin VSCode - przesyła dane projektowe z Figma do IDE |
| **Cursor** | IDE z AI | Edycja kodu z Claude Code, podgląd w wbudowanym Browser |
| **GitHub** | Repozytorium | Hosting kodu i obrazków (raw URLs jako CDN) |
| **Figma Make** | Konwersja do kodu | Zamiana designu na interaktywny kod, publikacja |

### Przepływ danych

```
┌─────────────────┐     Figma MCP      ┌─────────────────┐
│  Figma Design   │ ─────────────────► │     Cursor      │
│  (style guide)  │                    │  (Claude Code)  │
└─────────────────┘                    └────────┬────────┘
                                                │
                                                │ git push
                                                ▼
                                       ┌─────────────────┐
                                       │     GitHub      │
                                       │  (repo + imgs)  │
                                       └────────┬────────┘
                                                │
                                   paste code   │   raw URLs
                                       ▼        │        │
                               ┌─────────────────┐       │
                               │   Figma Make    │◄──────┘
                               │  (integration)  │
                               └────────┬────────┘
                                        │
                                        │ publish
                                        ▼
                               ┌─────────────────┐
                               │  Figma Servers  │
                               │ (live website)  │
                               └─────────────────┘
```

---

## Faza 1: Przygotowanie w Figma Design

### Cel
Stworzenie wizualnego projektu z określonymi stylami, kolorami i layoutem.

### Kroki

1. **Zaprojektuj interfejs** w Figma Design
   - Określ paletę kolorów
   - Zdefiniuj typografię
   - Stwórz komponenty UI (karty, przyciski, nawigacja)
   - Zaprojektuj responsywne layouty

2. **Przygotuj assets**
   - Wyeksportuj obrazki tła (sidebar backgrounds)
   - Przygotuj logo i ikony
   - Nazwij warstwy sensownie (ułatwi to późniejszą integrację)

3. **Udokumentuj style guide**
   - Kolory: primary, secondary, accent
   - Fonty: nagłówki, body text
   - Spacing: marginesy, paddingi
   - Breakpoints dla responsywności

### Output
- Projekt Figma gotowy do przekazania
- Wyeksportowane assety graficzne

---

## Faza 2: Transfer do Cursor via Figma MCP

### Cel
Przesłanie danych projektowych z Figma do środowiska deweloperskiego.

### Wymagania
- Cursor IDE z zainstalowanym Claude Code
- Plugin Figma MCP dla VSCode/Cursor
- Dostęp do projektu w Figma
- **Projekt w trybie DEV MODE w Figma**

### ⚠️ Tryb DEV w Figma

> **WYMAGANE:** Aby Figma MCP mógł przesłać dane projektowe, projekt musi być w trybie DEV (Developer Mode).

**Włączanie DEV Mode:**
1. Otwórz projekt w Figma Design
2. Kliknij przełącznik "Dev Mode" w prawym górnym rogu
3. Lub użyj skrótu `Shift + D`

**Opcje przesyłania przez MCP:**
| Zakres | Użycie |
|--------|--------|
| Cała strona | Pełny projekt z wszystkimi elementami |
| Wybrany node | Pojedynczy element/rama |
| Komponent | Reużywalny komponent z wariantami |

### Kroki

1. **Włącz DEV Mode i skonfiguruj Figma MCP**
   ```
   - Przełącz projekt w tryb DEV w Figma
   - Zainstaluj plugin Figma MCP w Cursor
   - Połącz z kontem Figma (API token)
   - Wybierz projekt/node do synchronizacji
   ```

2. **Pobierz dane projektowe**
   ```
   - Użyj komendy MCP do pobrania struktury
   - Możesz pobrać całą stronę lub wybrany element
   - Zaimportuj style (kolory, fonty)
   - Pobierz informacje o komponentach
   ```

3. **Zainicjuj projekt lokalny**
   ```bash
   npm create vite@latest project-name -- --template react
   cd project-name
   npm install
   npm install -D tailwindcss postcss autoprefixer
   npx tailwindcss init -p
   ```

### Output
- Lokalny projekt React/Vite
- Dane stylów z Figma dostępne w Cursor
- Gotowość do rozwoju z Claude Code

---

## Faza 3: Rozwój w Cursor z Claude Code

### Cel
Implementacja funkcjonalności, interakcji i logiki aplikacji.

### Możliwości Claude Code
- Generowanie komponentów React
- Implementacja routingu
- Tworzenie struktur danych
- Stylowanie z Tailwind CSS
- Debugging i refaktoryzacja

### Kroki rozwoju

1. **Stwórz strukturę komponentów**
   ```
   src/
   ├── components/
   │   ├── Header.jsx
   │   ├── HomePage.jsx
   │   ├── CategoryPage.jsx
   │   └── ...
   └── data/
       └── categories/
           └── *.js
   ```

2. **Implementuj routing**
   ```javascript
   // Hash-based routing (prosty, bez React Router)
   function useHashRoute() {
     const [route, setRoute] = useState(window.location.hash.slice(1) || '')
     // ... obsługa hashchange
   }
   ```

3. **Dodaj interakcje**
   - Nawigacja między stronami
   - Scroll spy dla sidebar
   - Smooth scrolling
   - Hover effects

4. **Testuj lokalnie**
   ```bash
   npm run dev
   # Podgląd w wbudowanym Browser Cursor
   ```

5. **Iteruj z Claude Code**
   - Opisz wymagane zmiany
   - Poproś o modyfikacje stylu
   - Debuguj problemy
   - Optymalizuj kod

### Output
- W pełni funkcjonalna aplikacja lokalna
- Przetestowane interakcje
- Gotowy kod do synchronizacji

---

## Faza 4: Synchronizacja z GitHub

### Cel
Wersjonowanie kodu i hosting assetów dla Figma Make.

### Kroki

1. **Zainicjuj repozytorium**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   ```

2. **Utwórz repo na GitHub**
   ```bash
   # Przez GitHub CLI lub interfejs web
   gh repo create project-name --public
   git remote add origin https://github.com/user/project-name.git
   git push -u origin main
   ```

3. **Struktura dla obrazków**
   ```
   public/
   └── images/
       ├── sidebar-*.png      # Tła sidebar
       ├── header_bg.png      # Tło headera
       ├── logo.svg           # Logo
       └── freepik__*.png     # Obrazki produktów
   ```

4. **GitHub Raw URLs**

   Format URL dla obrazków:
   ```
   https://raw.githubusercontent.com/{user}/{repo}/main/public/images/{filename}
   ```

   Przykład:
   ```
   https://raw.githubusercontent.com/Creaturro/LG-Ammopedia/main/public/images/sidebar-bullets-new.png
   ```

### Output
- Publiczne repozytorium GitHub
- Obrazki dostępne przez raw URLs
- Historia wersji kodu

---

## Faza 5: Przygotowanie dla Figma Make

### Cel
Skonsolidowanie kodu w format akceptowany przez Figma Make.

### Ograniczenie Figma Make
> **WAŻNE:** Figma Make nie przyjmuje paczek wielu plików. Wymaga wklejenia kodu w jednej wiadomości.

### Format wklejania

```
=== src/App.jsx ===
[zawartość pliku]

=== src/components/Header.jsx ===
[zawartość pliku]

=== src/components/CategoryPage.jsx ===
[zawartość pliku]

=== src/data/categories/bulletTypes.js ===
[zawartość pliku]

... itd.
```

### Kroki przygotowania

1. **Zidentyfikuj wymagane pliki**
   - Komponenty React (*.jsx)
   - Pliki danych (*.js)
   - Style (index.css)
   - Entry point (main.jsx, App.jsx)

2. **Wygeneruj skonsolidowany output**

   Poproś Claude Code:
   ```
   "Przygotuj wszystkie pliki projektu w formacie do wklejenia
   do Figma Make, z separatorami === ścieżka/plik ==="
   ```

3. **Przygotuj listę obrazków**

   Poproś Claude Code:
   ```
   "Wylistuj wszystkie obrazki z public/images/
   z podziałem na kategorie"
   ```

### Output
- Jeden duży blok tekstu z całym kodem
- Lista obrazków z nazwami plików
- Gotowość do wklejenia w Figma Make

---

## Faza 6: Integracja w Figma Make

### Cel
Przetworzenie kodu i podpięcie assetów.

### Kroki

1. **Wklej kod do Figma Make**
   - Skopiuj skonsolidowany output
   - Wklej do Figma Make Assistant
   - Poczekaj na przetworzenie

2. **Obsłuż obrazki sidebar (figma:asset)**

   Problem: Figma Make używa własnego systemu `figma:asset` dla obrazków

   Rozwiązanie - wrapper komponent:
   ```typescript
   // CategoryPageWithImages.tsx
   import bulletsSidebarImg from "figma:asset/55c77bb6...png"

   const sidebarImageMap = {
     'Bullets': bulletsSidebarImg,
     // ...
   }
   ```

3. **Podpnij obrazki produktów przez GitHub**

   W plikach danych zmień ścieżki:
   ```javascript
   // Zamiast:
   image: "/images/product.png"

   // Użyj:
   image: "https://raw.githubusercontent.com/user/repo/main/public/images/product.png"
   ```

4. **Wklej listę obrazków**
   - Przekaż Figma Make listę obrazków
   - Assistant zamieni ścieżki na GitHub raw URLs
   - Zweryfikuj poprawność linków

5. **Przetestuj w Figma Make**
   - Sprawdź podgląd
   - Zweryfikuj obrazki
   - Przetestuj interakcje

### Output
- Działający projekt w Figma Make
- Wszystkie obrazki załadowane
- Gotowość do publikacji

---

## Faza 7: Publikacja

### Cel
Udostępnienie strony publicznie.

### Opcje publikacji z Figma Make

| Opcja | Opis | Użycie |
|-------|------|--------|
| **Figma Servers** | Hosting na serwerach Figma | Szybka publikacja, URL figma.site |
| **Export lokalny** | Pobranie kodu na dysk | Dalszy rozwój w Cursor |
| **Powrót do Figma Design** | Edycja wizualna | Zmiany bez kodowania |

### Publikacja na Figma Servers

1. Kliknij "Publish" w Figma Make
2. Skonfiguruj domenę (*.figma.site)
3. Ustaw opcje SEO (title, description)
4. Opublikuj

### Export do dalszego rozwoju

1. Wybierz "Export Code"
2. Pobierz paczkę plików
3. Rozpakuj do Cursor
4. Kontynuuj rozwój lokalnie

---

## Synchronizacja zmian

### Scenariusz: Zmiany w Cursor → Aktualizacja Figma Make

```
1. Edytuj kod w Cursor
2. Testuj lokalnie (npm run dev)
3. Commit & push do GitHub
4. Przygotuj skonsolidowany output
5. Wklej do Figma Make
6. Re-publikuj
```

### Scenariusz: Nowe obrazki

```
1. Dodaj obrazki do public/images/
2. Push do GitHub
3. Wygeneruj nową listę obrazków
4. Przekaż listę do Figma Make
5. Figma Make zaktualizuje URLs
```

### Scenariusz: Zmiany stylu w Figma Design

```
1. Edytuj style w Figma Design
2. Użyj Figma MCP do pobrania zmian
3. Zaktualizuj kod w Cursor
4. Push do GitHub
5. Zsynchronizuj z Figma Make
```

---

## Podsumowanie workflow

```
┌─────────────────────────────────────────────────────────────────┐
│                     PEŁNY CYKL PRACY                            │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  1. DESIGN        Figma Design → style guide, layouty           │
│        │                                                        │
│        ▼ (Figma MCP)                                           │
│                                                                 │
│  2. DEVELOP       Cursor + Claude Code → komponenty, logika     │
│        │                                                        │
│        ▼ (git push)                                            │
│                                                                 │
│  3. STORE         GitHub → wersjonowanie, hosting obrazków      │
│        │                                                        │
│        ▼ (paste code + image URLs)                             │
│                                                                 │
│  4. INTEGRATE     Figma Make → przetworzenie, podpięcie assets  │
│        │                                                        │
│        ▼ (publish)                                             │
│                                                                 │
│  5. DEPLOY        Figma Servers → live website                  │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

## Wskazówki dla LLM

### Przy pracy z tym workflow:

1. **Figma MCP** - używaj do pobierania stylów i struktury z Figma Design
2. **Cursor** - główne środowisko rozwoju, pełna kontrola nad kodem
3. **GitHub** - zawsze pushuj przed synchronizacją z Figma Make
4. **Figma Make** - wymaga skonsolidowanego kodu w jednej wiadomości
5. **Obrazki** - używaj GitHub raw URLs dla produktów, figma:asset dla UI

### Kluczowe komendy Claude Code:

```
"Przygotuj wszystkie pliki w formacie do Figma Make"
"Wylistuj obrazki z public/images/"
"Zaktualizuj ścieżki obrazków na GitHub raw URLs"
"Stwórz dokumentację projektu"
```

### Częste problemy:

| Problem | Rozwiązanie |
|---------|-------------|
| Figma Make nie widzi obrazków | Użyj GitHub raw URLs |
| figma:asset nie działa w CSS | Import jako moduł ES6, wrapper komponent |
| Sidebar nie pokazuje się | Dodaj `showSidebar: true` w danych |
| Zmiany nie widoczne | Sprawdź czy push do GitHub się powiódł |
| Figma MCP nie widzi projektu | Włącz DEV Mode w Figma Design |

---

## Wybór języka i optymalizacja procesu

### Kontekst decyzji

Przy inicjalizacji projektu w Cursor, Claude Code zapytał o wybór języka/frameworka:

| Opcja | Opis |
|-------|------|
| **JavaScript + React** | Prostszy, szybszy start, mniej boilerplate |
| **TypeScript + React** | Type safety, lepsza dokumentacja kodu |
| **Vue.js** | Alternatywny framework |
| **Vanilla JS** | Bez frameworka |

### Co wybraliśmy
W tym projekcie wybraliśmy **JavaScript + React (JSX)** z Vite jako bundler.

### Co robi Figma Make
Figma Make automatycznie konwertuje kod do **TypeScript (TSX)**:
- `.jsx` → `.tsx`
- `.js` → `.ts`
- Dodaje podstawowe typy
- Dostosowuje importy do swojego systemu

### 🎯 Rekomendacja na przyszłość

> **OPTYMALIZACJA:** Jeśli wiesz, że kod trafi do Figma Make, **zacznij od TypeScript**.

**Zalety rozpoczęcia w TypeScript:**

| Aspekt | JavaScript → TS (konwersja) | TypeScript od początku |
|--------|----------------------------|------------------------|
| Typy | Dodawane automatycznie (podstawowe) | Pełna kontrola, dokładniejsze |
| Czas | Konwersja w Figma Make | Brak konwersji |
| Błędy | Mogą pojawić się przy konwersji | Wykrywane na bieżąco |
| Dokumentacja | Trzeba dodawać interfejsy | Interfejsy od początku |
| Spójność | Różnice między lokalnym a FM | Identyczny kod |

### Zoptymalizowany workflow

```bash
# Zamiast:
npm create vite@latest project-name -- --template react

# Użyj:
npm create vite@latest project-name -- --template react-ts
```

**Struktura plików TypeScript:**
```
src/
├── components/
│   ├── Header.tsx          # zamiast .jsx
│   ├── CategoryPage.tsx
│   └── ...
├── data/
│   └── categories/
│       ├── bulletTypes.ts  # zamiast .js
│       └── ...
└── types/
    └── index.ts            # współdzielone interfejsy
```

**Przykład interfejsów (types/index.ts):**
```typescript
export interface CategoryItem {
  slug: string
  title: string
  description: string
  tags: string[]
  href: string
  hasDetailPage: boolean
  image?: string
}

export interface CategoryGroup {
  name: string
  slug: string
  items: CategoryItem[]
}

export interface CategoryData {
  title: string
  subtitle: string
  description: string
  sidebarImage: string
  showSidebar?: boolean
  featured: {
    hero: string
    popular: string[]
  }
  groups: CategoryGroup[]
}
```

### Inne optymalizacje procesu

1. **Obrazki od razu na GitHub**
   - Uploaduj obrazki do repo przed rozpoczęciem kodowania
   - Używaj GitHub raw URLs od początku w danych
   - Unikasz późniejszej konwersji ścieżek

2. **Figma Make asset IDs**
   - Jeśli masz dostęp do Figma Make wcześniej, pobierz asset IDs dla obrazków UI
   - Użyj ich bezpośrednio w kodzie (figma:asset/...)

3. **Skonsolidowany format od początku**
   - Trzymaj kod w strukturze łatwej do eksportu
   - Unikaj głębokiego zagnieżdżenia katalogów
   - Mniej plików = łatwiejsze wklejanie

4. **Dokumentacja inline**
   - Dodawaj komentarze opisujące komponenty
   - Figma Make zachowuje komentarze
   - Ułatwia późniejszą pracę w obu środowiskach

---

## Podsumowanie optymalizacji

| Etap | Standardowo | Zoptymalizowany |
|------|-------------|-----------------|
| Język | JavaScript (JSX) | TypeScript (TSX) |
| Obrazki | Lokalne → GitHub później | GitHub od początku |
| Ścieżki obrazków | /images/*.png | raw.githubusercontent.com/... |
| Typy | Brak → dodane przez FM | Zdefiniowane od początku |
| Eksport | Ręczne łączenie plików | Przygotowany format |

**Oszczędność czasu:** ~30-40% mniej pracy przy synchronizacji z Figma Make.

---

*Procedura opracowana: 2025-12-22*
*Projekt referencyjny: LG Ammopedia*
*Narzędzia: Figma Design, Figma MCP, Cursor, Claude Code, GitHub, Figma Make*
