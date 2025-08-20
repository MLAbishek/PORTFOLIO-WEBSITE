## Portfolio Website – Render Deployment

This is a static portfolio website ready to deploy on Render as a Static Site.

### Deploy on Render
1. Push this repository to GitHub.
2. Go to `https://render.com` and click New → Static Site.
3. Connect your repo and use these settings:
   - Build Command: (leave empty)
   - Publish Directory: `.`
4. Click Create Static Site.

Alternatively, use New → Blueprint to deploy from `render.yaml`.

### Local development
Open `index.html` directly in the browser or serve locally:

```bash
# Python 3
python -m http.server 8080
# or Node
npx serve -l 8080
```

### Notes
- Dark theme is default; user choice is stored in localStorage.
- Cache headers for static assets are configured in `render.yaml`.
