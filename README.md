# Jayapriya Singh Portfolio v2 — Immersive 3D (Angular + Three.js)

## What's new vs v1
- Full-screen Three.js background (torus knot + icosahedron + octahedron + torus + 2000 particles)
- Mouse-reactive camera parallax across the entire page
- Scroll-reveal animations on every section (IntersectionObserver)
- Glassmorphism cards with neon hover glow
- Resume download button in navbar + hero + contact
- Avatar support (drop profile.svg into src/assets/)

## Setup
```bash
npm install
npm start
# open http://localhost:4200
```

## Add your avatar
1. Go to https://api.dicebear.com/7.x/avataaars/svg?seed=Jayapriya&top=longHairStraight&hairColor=black&skinColor=fdbcb4&clotheType=blazerShirt
2. Save as profile.svg
3. Drop into src/assets/profile.svg

## Add your resume
Drop Jayapriya_Singh_Resume.pdf into src/assets/

## Theme colors (tailwind.config.js)
- accent:  #3B82F6 (blue)
- accent2: #06B6D4 (cyan)
- bg:      #0a0e27 (deep navy)
- surface: rgba(255,255,255,0.04) (glass)

## Deploy
```bash
npm run build
# upload dist/jayapriya-v2 to Vercel / Netlify
```
