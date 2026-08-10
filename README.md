# Rusty C. Carson — Portfolio

A recruiter-focused personal portfolio built with React + Vite and ready for Vercel.

## 1. Install

```bash
npm install
```

## 2. Run locally

```bash
npm run dev
```

## 3. Update personal information

Open `src/main.jsx` and edit the `profile` object:

- name
- email
- GitHub
- LinkedIn
- CV path

Also review the project descriptions and skills before publishing.

## 4. Add your CV

Put your resume at:

`public/cv.pdf`

The Download CV button will then work automatically.

## 5. Build

```bash
npm run build
```

## 6. Deploy to Vercel

### GitHub method
1. Create a new GitHub repository.
2. Upload all files from this project.
3. Open Vercel and import the GitHub repository.
4. Vercel should detect Vite automatically.
5. Build command: `npm run build`
6. Output directory: `dist`
7. Deploy.

### Vercel CLI method

```bash
npm install -g vercel
vercel
```

The included `vercel.json` supports SPA routing.
