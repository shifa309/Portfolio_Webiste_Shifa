# Shifa Imran — Portfolio

Built with React + TypeScript + Vite + Tailwind CSS + Framer Motion.

## Run locally
```bash
npm install
npm run dev
```

## Build for production
```bash
npm run build
```
Output goes to `dist/`.

## Deploy
Push this folder to GitHub and connect it to **Vercel** or **Netlify** (both auto-detect Vite). Or run `npm run build` and drag the `dist/` folder into Netlify's manual deploy.

## Contact form
The contact form posts to Formspree. Before deploying:
1. Create a free form at https://formspree.io
2. Open `src/components/Contact.tsx`
3. Replace `FORMSPREE_ENDPOINT` with your form's endpoint URL

## Editing content
All your text (bio, projects, experience, skills, education, certifications) lives in one place:
`src/data/content.ts` — edit that file to update anything without touching components.
