// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Static (GitHub Pages) build is opted into via env vars so the default
// Lovable/Cloudflare SSR build stays completely unchanged.
//   STATIC_BUILD=true  -> emit a client-hydrated SPA shell (no Nitro server)
//   BASE_PATH=/portfolio/ -> serve under a GitHub Pages project subpath
const isStatic = process.env.STATIC_BUILD === "true";
const basePath = process.env.BASE_PATH ?? "/";

export default defineConfig({
  vite: {
    base: basePath,
  },
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
    ...(isStatic
      ? {
          // SPA mode emits a client-hydrated shell HTML we can host statically.
          spa: { enabled: true },
        }
      : {}),
  },
  // Skip nitro for the static build so TanStack Start emits its standard
  // dist/ layout (client + server) that the SPA prerenderer expects.
  ...(isStatic ? { nitro: false } : {}),
});

