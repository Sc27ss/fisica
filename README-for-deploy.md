# Energy Unlocked — Vite + React (TypeScript)

This repository is a Vite + React TypeScript project prepared for deployment on Vercel.

## What I changed / added
- Added `vercel.json` to help Vercel serve the single-page app and rewrite routes to `index.html`.
- Added this `README.md` with clear local-run and deploy instructions.

## Run locally (development)
1. Install dependencies:
```bash
npm install
```
2. Run dev server:
```bash
npm run dev
```
Open http://localhost:8080 (or the host/port shown by the console).

## Build (production)
```bash
npm run build
```
The production-ready files will be in `dist/`.

## Deploy to Vercel (recommended)
1. Push this repo to GitHub.
2. In Vercel dashboard, click **"New Project"** → import your GitHub repository.
3. Vercel should auto-detect the framework as Vite. Use:
   - Build command: `npm run build`
   - Output directory: `dist`
4. Environment: none required by default. If your app needs env vars, add them in Vercel dashboard.
5. Deploy.

## Git commands to publish
```bash
git init
git add .
git commit -m "Prepare project for Vercel: add vercel.json and README"
git branch -M main
# Create GitHub repo (use GitHub UI or gh cli), then:
git remote add origin <your-github-ssh-or-https-url>
git push -u origin main
```

## Notes about client-side routing
This project uses React Router. `vercel.json` contains a rewrite so any route is served with `index.html` — necessary for client-side routing to work on direct links/refresh.

If you want GitHub Pages instead, set `base` in `vite.config.ts` to the repo name path or follow GitHub Pages deployment docs.

## If something breaks
- If `npm run build` fails locally, copy the first error and paste it here; I can help troubleshoot specific build errors.
- If you prefer, I can prepare a single commit patch file (`.patch`) or a zip ready to push — tell me which.

