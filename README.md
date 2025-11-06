# ExtraHub – Vite + React (Working Starter)

This is a clean, **100% working** Vite + React starter you can run immediately.

## Quick Start

1. **Install Node.js 18+** (recommend Node 20 LTS).
2. Open this folder in VS Code.
3. Run these commands in the integrated terminal:
   ```bash
   npm install
   npm run dev
   ```
4. Your browser should open at `http://localhost:5173` showing "It works! 🎉".

## Building for production
```bash
npm run build
npm run preview
```

## Common Blank-Screen Fixes
- Make sure you run `npm install` **inside** this folder.
- If port 5173 is busy, change it in `vite.config.js`.
- Disable ad/script blockers that might block `main.jsx` from loading.
- Open DevTools → Console to see any errors.
- `window.__APP_OK__` should be `true` in the console when the app loads.

## Where to put your code
- Pages live in `src/pages/*`.
- Shared UI in `src/components/*`.
- Global styles in `src/styles.css`.

Happy hacking!

---

## Full-Stack Setup (MERN)

### 1) MongoDB Atlas
- Create a free cluster at MongoDB Atlas.
- Get your connection string (SRV) and put it into `server/.env`:
```
MONGO_URI=your_atlas_uri_here
JWT_SECRET=supersecret_change_me
PORT=5000
```

### 2) Install & run the API
```bash
cd server
npm install
# optional: create an admin user
npm run seed:admin
npm run dev
```
API runs at: `http://localhost:5000`

### 3) Run the React app
In a new terminal (project root):
```bash
npm install
npm run dev
```
Open: `http://localhost:5173`

### 4) Frontend pages
- Login: `/login`
- Signup: `/signup`
- Dashboard: `/dashboard` (protect these on client-side if needed)

The client reads `VITE_API_BASE` (default `http://localhost:5000`) from `.env`.
