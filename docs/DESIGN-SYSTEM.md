# businessQuest — Design System (v1)

> Źródło prawdy dla redesignu WWW. Wyciągnięty z prezentacji ofertowej
> „Twój pierwszy zespół HR" (slajdy 1–4 + język wizualny szablonu).
> Zasada nadrzędna: **light theme — białe tło, kolor tylko jako akcent.**

---

## 1. Kolory

### Tło i powierzchnie
| Token | Hex | Użycie |
|-------|-----|--------|
| `bg` | `#FFFFFF` | główne tło strony (białe — domyślne) |
| `bg-subtle` | `#F7F7F8` | delikatny szary dla sekcji naprzemiennych / tła zdjęć |
| `card` | `#FFFFFF` | karty (z subtelnym cieniem/borderem zamiast koloru) |

### Tekst
| Token | Hex | Użycie |
|-------|-----|--------|
| `text` | `#0E0E10` | nagłówki — niemal czarne, ciężkie |
| `text-body` | `#3F3F46` | tekst akapitowy |
| `text-muted` | `#71717A` | podpisy, metadane |

### Akcenty (kolor = akcent, nie tło!)
| Token | Hex | Użycie |
|-------|-----|--------|
| `magenta` (primary) | `#F7087F` | marka, linki, primary CTA, wordmark |
| `purple` | `#8B3FE8` | drugi biegun gradientu magenta→fiolet |
| `red` | `#FB3B2F` | biegun gradientu czerwony→pomarańcz |
| `orange` | `#FF6B2B` | odręczne strzałki, akcent ciepły |

### Gradienty (z prezentacji)
| Token | Wartość | Gdzie w decku |
|-------|---------|---------------|
| `gradient-magenta` | `linear-gradient(160deg, #F7087F 0%, #8B3FE8 100%)` | różowo-fioletowe koło (góra) |
| `gradient-orange` | `linear-gradient(160deg, #FB3B2F 0%, #FF8A3D 100%)` | koralowe koło / bloki (dół) |

> Gradientów używamy w **kołach, kwadratach-akcentach i text-gradient na 1–2 słowach** —
> nigdy jako pełnego tła sekcji.

---

## 2. Typografia

- **Font:** `Outfit` (już w projekcie) — geometryczny grotesk, zgodny z deckiem.
- **Nagłówki:** waga **800–900**, kolor `text` (#0E0E10), ciasny tracking, duże rozmiary.
  - h1: 3.5–5rem / leading-[0.95]
  - h2: 2.25–3rem
  - h3: 1.25–1.5rem (np. nagłówki kart „Co zyskujesz")
- **Body:** waga 400–500, kolor `text-body`, leading-relaxed.
- **Eyebrow / label:** uppercase, tracking-wide, mały, magenta lub muted.

---

## 3. Motywy dekoracyjne (sygnatura wizualna z decku)

Implementować jako komponenty w `src/components/decor/`:

1. **GradientCircle** — koło wypełnione gradientem + **cienki, czarny, przesunięty pierścień** (outline ring) w tle. Wariant: `magenta` / `orange`.
2. **DotGrid** — siatka małych kropek (`#0E0E10` @ ~12% opacity), tekstura w narożnikach.
3. **ColorBlock** — pełny kwadrat/prostokąt z gradientem, „bento" w narożnikach sekcji.
4. **HandArrow** — odręczna, markerowa strzałka SVG w `orange`, wskazująca element (jak w decku).

> Zmiana względem obecnego kodu: rezygnujemy z organicznych, morfujących „blobów"
> na rzecz **geometrycznych kół z pierścieniem** — to jest podpis z prezentacji.

---

## 4. Layout & przestrzeń

- Dużo światła (whitespace). Nagłówki wyrównane do lewej.
- Treść w kolumnach (deck: 3-kolumnowe bloki wartości).
- `section-py`: 6rem desktop / 4rem mobile (już zdefiniowane).
- Kontener: max-w ~1200px, padding boczny responsywny.
- Karty: zaokrąglenie ~1rem, cień miękki / border 1px `#ECECEE` — bez kolorowego tła.

---

## 5. Komponenty (mapa na istniejący kod)

| Element | Status |
|---------|--------|
| Paleta/tokeny | do refaktoru w `tailwind.config.ts` + `globals.css` (z warm-cream na white) |
| `GradientCircle` / `DotGrid` / `ColorBlock` / `HandArrow` | nowe, `src/components/decor/` |
| `Button` (primary magenta / secondary outline) | istnieje — dostroić do light |
| `HeroBlobs` (organiczne) | zastąpić geometrycznymi `GradientCircle` |

---

## 6. Co NIE pasuje do tego systemu

- Ciepłe, kremowo-różowe tło strony (`--gradient-warm-bg`) — **usunąć**, tło białe.
- Pełnokolorowe sekcje jako dominanta — kolor zostaje akcentem.
- Organiczne morfujące bloby — zamienić na koła z pierścieniem.
