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
      so title and body share the same left margin; aligned bottom nav; indented the
      title (`pl-12`) to line up with the body-text indentation; set the last two
      (block-indented) paragraphs to the `#51514F` gray used in Figma.
- [x] **align-project-mindfull / ssb / gorreana / stationery / social** — Unified the
      project-page structure to match Opúsculo: single `max-w-[1600px]` main, `pl-12`
      title header, and `#51514F` gray on the block-indented secondary paragraphs
      (gorreana, stationery). Fixed Social's mislabeled tag (`Social Media Design` →
      `Graphic Design`). Extracted a shared `ProjectNav` for the prev/next buttons.
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

Each comment has a stable **ID** (`C#`) so it can be individually validated. Status
legend: ✅ done · 🔎 in review · ◑ partial · ○ deferred (ambiguous/needs clarification) · — no action.

| ID | Page | Original (PT) | English | Resolution | Status |
| --- | --- | --- | --- | --- | --- |
| C1 | about | não consegui colocar o mesmo header nesta página about | couldn't put the same header on the about page | Reusable `SiteHeader` (dark variant) now used on About; EDUCATION/SKILLS/CONTACTS moved to a centered section below the header | 🔎 In review |
| C2 | about | os parágrafos com endentações são sticky | the indented paragraphs are sticky | Header + education/skills columns made `sticky top-0` | ✅ |
| C3 | about | são sticky | they are sticky | Same as C2 (confirms sticky behaviour) | ✅ |
| C4 | opúsculo | os botões ficaram diferentes no código… mais espaço branco | buttons differ in code; ideally like this; also more whitespace | Buttons centered & spaced closer; extracted shared `ProjectNav` component applied across all 6 project pages (also fixed stationery's broken next link) | ✅ |
| C5 | opúsculo | gostava de criar esta endentação em alinhamento com o título | indentation aligned with the title | Indented the title header (`pl-12`, 3rem) to match the body text's first-line/block indentation so the text start aligns with the title | ✅ |
| C6 | opúsculo | as imagens deveriam ir até à margem esq | images should reach the left margin | Ambiguous which image/edge; left as-is pending clarification | ○ |
| C7 | opúsculo | mesmo o asset não tenho nada | even the asset, I have nothing | Missing source asset — nothing to place | ○ |
| C8 | mindfull | não consegui colocar a imagem sem margem superior no código | couldn't place the image without a top margin | On the "Connecting general users with professionals" card, pulled the phone mockup up (`md:-mt-12`) to cancel the card's top padding so the image sits flush with the top grey border | ✅ |
| C9 | general | no que diz respeito ao gradiente | regarding the gradient | Note tied to C8; gradient footer already present | ○ |
| C10 | mindfull | os títulos deviam ficar todos com a mesma margem | all titles should share the same margin | Standardised title/body left margins (Opúsculo fixed; pages use consistent containers) | ✅ |
| C11 | home | entretanto isto já sofreu alterações, fica como está no VS | already changed; keep as in VS Code | Owner said keep current code | — |
| C12 | home | gostava que o footer ficasse assim, no website está feinho | footer should look like this; on the site it's ugly | Footer redesigned: added Contact link + "@2026 Portfolio / The Neverending Project" tagline | ✅ |
| C13 | home | com scroll desvanece | fades with scroll | Hero wordmark already fades on scroll (matches Figma) | ✅ |

## Notes / open questions
- Confirm exact Inter Tight heading weights (Medium vs SemiBold) during the audit.
- `.asset.json` files and duplicate `.png/.jpg` assets exist — clean up only if they
  cause confusion; not a goal in itself.
- Visible copy typos exist (e.g. "acess", "decicion", "contraints") — only fix if
  Figma/comments dictate, to avoid unrequested edits.
