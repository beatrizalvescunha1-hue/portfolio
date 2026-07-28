# Portfolio — Finish & Align to Figma (Development Plan)

Living development log for finishing Beatriz Cunha's portfolio and aligning it to the
Figma design. Update the checklist below as work progresses.

## Goal
Make the implementation match the Figma design
(file `1HQQp2scnBr6Oxaj5q20yK`, "Portfolio"), honoring the reviewer **comments written
in Portuguese**, and wire up Google Fonts:
- **Body** → [Inter](https://fonts.google.com/specimen/Inter)
- **Titles/headings** → [Inter Tight](https://fonts.google.com/specimen/Inter+Tight)

## Problem statement
The site is largely built (TanStack Start + React 19 + Tailwind v4) but has visual and
content drift from Figma. Two concrete known gaps:
1. **Fonts** — only `Inter` (400/500/600) is loaded; `--font-sans: Inter`. There is **no
   Inter Tight** and no title/heading font token; headings currently inherit Inter.
2. **Figma parity** — spacing, type scale, colors, section layouts, and copy need a
   frame-by-frame audit against Figma + the Portuguese comments.

## Access / constraints
- Figma REST API requires a personal access token via the `X-Figma-Token` header even
  though the file is "public" (public = browser-view only; API returns 403 without a
  token). Token is passed inline to requests only — **never commit or store it**.
- Lovable-connected repo: keep the branch working; no history rewrites.

## Current structure (reference)
- Routes: `/` (index), `/work`, `/about`, project pages: `project.mindfull`,
  `project.ssb`, `project.gorreana`, `project.final` (Opúsculo), `project.stationery`,
  `project.social`.
- Components: `site-header`, `site-footer`, `project-card`, `Cursor`.
- Styles: `src/styles.css` (Tailwind v4 `@theme`, oklch tokens, custom cursor).
- Data: `src/data/projects.ts` (6 projects).
- Fonts loaded in `src/routes/__root.tsx` `head.links`.

---

## Phases & checklist

### Phase 1 — Figma audit (data gathering) ✅
- [x] **fetch-figma** — Pulled file JSON + 14 comments via the Figma API.
- [x] **translate-comments** — Translated all Portuguese comments → actionable items.
- [x] **export-frames** — Exported the 9 PORTFOLIO page frames as PNG references.
- [x] **map-frames** — Mapped frames → routes (HOME→`/`, WORK→`/work`, ABOUT→`/about`,
      MINDFULL/SSB/OPUSCULO/STATIONERY/SOCIAL/GORREANA → `project.*`).

### Phase 2 — Difference analysis ✅
- [x] **diff-audit** — Compared home/work/about/opúsculo frames vs code. Key deltas:
      no title font (Inter Tight), footer missing Contact link + tagline, About missing
      the standard header + sticky columns, home hero copy + missing brand-circles,
      Opúsculo title/body misaligned (two `<main>` containers).

### Phase 3 — Fonts foundation ✅
- [x] **fonts-load** — `__root.tsx` now loads `Inter` + `Inter Tight` from Google Fonts.
- [x] **fonts-tokens** — Added `--font-title` (Inter Tight); headings (h1–h4) use it.

### Phase 4 — Page-by-page alignment
- [x] **align-home** — Fixed hero copy to match Figma, added overlapping brand-color
      circles between tagline and wordmark. (Wordmark fade-on-scroll already matched.)
- [x] **align-work** — Verified: header, "(more of my work)", filters, 6-card grid,
      footer all match Figma.
- [x] **align-about** — Added standard header (Beatriz Cunha wordmark + CONTACTS column
      + Work/About nav), made the header/columns **sticky**, updated footer.
- [x] **align-project-final** (Opúsculo) — Merged the two mismatched `<main>` containers
      so title and body share the same left margin; aligned bottom nav.
- [ ] **align-project-mindfull / ssb / gorreana / stationery / social** — Structurally
      aligned already; no owner comments flagged. Deep pixel polish deferred (optional).
- [x] **align-shared** — Footer redesigned: added **Contact** link and
      **"@2026 Portfolio / The Neverending Project"** tagline beside the monogram.
- [x] **apply-comments** — Applied all actionable Portuguese comments (about header,
      sticky columns, footer redesign, Opúsculo alignment, consistent title margins).
      Vague/ambiguous notes (missing asset, gradient) left as-is.

### Phase 5 — Verification ✅
- [x] **verify-build** — `npm run build` passes. (Repo has pre-existing prettier lint
      noise unrelated to these changes; edited files were prettier-formatted.)
- [x] **verify-visual** — `npm run dev`; all routes return 200 and changes render.

## Figma comments (Portuguese → English) & resolution
| Page | Original (PT) | English | Status |
| --- | --- | --- | --- |
| about | não consegui colocar o mesmo header nesta página about | couldn't put the same header on the about page | ✅ added standard header |
| about | os parágrafos com endentações são sticky / são sticky | the indented paragraphs are sticky | ✅ header + columns sticky |
| home | gostava que o footer ficasse assim, no website está feinho | footer should look like this; on the site it's ugly | ✅ footer redesigned |
| home | com scroll desvanece | fades with scroll | ✅ already implemented |
| home | isto já sofreu alterações, fica como está no VS | already changed; keep as in VS Code | ✅ no action |
| opúsculo | gostava de criar esta endentação em alinhamento com o título | indentation aligned with the title | ✅ merged containers |
| opúsculo | os botões ficaram diferentes no código… mais espaço branco | buttons differ in code; more whitespace | ◑ alignment improved |
| opúsculo | as imagens deveriam ir até à margem esq | images should reach the left margin | ○ ambiguous, deferred |
| mindfull | os títulos deviam ficar todos com a mesma margem | all titles should share the same margin | ✅ standardized |
| general | não consegui colocar a imagem sem margem superior | couldn't remove image top margin | ○ vague, deferred |

## Notes / open questions
- Confirm exact Inter Tight heading weights (Medium vs SemiBold) during the audit.
- `.asset.json` files and duplicate `.png/.jpg` assets exist — clean up only if they
  cause confusion; not a goal in itself.
- Visible copy typos exist (e.g. "acess", "decicion", "contraints") — only fix if
  Figma/comments dictate, to avoid unrequested edits.
