# Task 7: Configure Cloudflare Workers Deployment

**Priority**: Medium
**Depends on**: Task 1

## Objective

Update the deployment configuration for Cloudflare Workers to support TanStack Start's SSR output instead of the current static SPA deployment.

## Steps

1. **Install Cloudflare Vite plugin**:
   ```bash
   bun add @cloudflare/vite-plugin
   ```

2. **Update `vite.config.ts`** — add the Cloudflare plugin:
   ```ts
   import { cloudflare } from '@cloudflare/vite-plugin'
   ```
   Configure with `viteEnvironment: { name: 'ssr' }`.

3. **Update `wrangler.jsonc`**:
   - Set `"main"` to `"@tanstack/react-start/server-entry"`
   - Add `"compatibility_flags": ["nodejs_compat"]`
   - Keep existing `routes` config for `shadcn-compose.site`
   - Remove `"assets"` static SPA config (SSR handles this now)

4. **Update `package.json` scripts**:
   ```json
   {
     "dev": "vite",
     "build": "vite build",
     "preview": "wrangler dev",
     "deploy": "bun run build && wrangler deploy"
   }
   ```

5. **Test locally** with `bun run preview` (runs wrangler dev) to verify SSR works on the Workers runtime

6. **Test build** with `bun run build` to verify the worker bundle is generated

## Acceptance Criteria

- `bun run build` produces a worker bundle (not just static files)
- `bun run preview` serves the site via wrangler's local Workers runtime
- SSR renders pages on the server (verify by viewing page source)
- All routes work including client-side navigation
- Static assets (images in `public/`) are served correctly

## Estimated Scope

~3 files modified (vite.config.ts, wrangler.jsonc, package.json)
