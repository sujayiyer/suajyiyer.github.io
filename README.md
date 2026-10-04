# Sujay Jairaman · portfolio

A fast, single-column personal site. Plain HTML + one small CSS file + ~20 lines of JS.
No frameworks, no build step, no web fonts. Works on phones, tablets and desktops, with light/dark mode.

```
index.html        home: intro, about, work, education, skills, contact
work/index.html   full experience details
404.html          not-found page
assets/           style.css, site.js, profile photo (webp + jpg)
favicon.svg
.nojekyll         tells GitHub Pages to serve files as-is
```

## Deploy on GitHub Pages (about 2 minutes)

**Recommended: a user site at `https://<username>.github.io`**

1. On GitHub, create a new **public** repository named exactly `<username>.github.io`
   (replace `<username>` with Sujay's GitHub username).
2. Upload every file in this folder to the root of that repo
   (drag-and-drop on github.com works: *Add file → Upload files*; include `.nojekyll`).
   Or from a terminal:
   ```bash
   cd sujay-portfolio
   git init && git add . && git commit -m "Portfolio site"
   git branch -M main
   git remote add origin https://github.com/<username>/<username>.github.io.git
   git push -u origin main
   ```
3. Repo **Settings → Pages → Build and deployment**: Source = *Deploy from a branch*,
   Branch = `main`, folder = `/ (root)`. Save.
4. After a minute the site is live at `https://<username>.github.io`.

**Also works as a project site** (e.g. repo `portfolio` → `https://<username>.github.io/portfolio/`).
All links are relative, so nothing needs changing.

**Custom domain (optional):** Settings → Pages → Custom domain, then add the DNS records GitHub shows.

## Editing

- Text lives directly in `index.html` and `work/index.html`. Edit on github.com and commit; the site updates in about a minute.
- "building vehicles for N years" and the footer year update themselves (`data-since="2017-06"` in the HTML).
- Colours are the variables at the top of `assets/style.css` (`--accent` etc.).
- Photo: replace `assets/sujay.webp` and `assets/sujay.jpg` (square, about 240×240).
- Link previews: once the URL is known, change `og:image` in both HTML files to the full URL,
  e.g. `https://<username>.github.io/assets/sujay.jpg`, so LinkedIn/WhatsApp show the photo.

## Preview locally

```bash
python3 -m http.server 8000   # then open http://localhost:8000
```
