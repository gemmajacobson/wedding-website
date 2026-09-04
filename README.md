# Dani & Benji — wedding website

A warm, Mediterranean-styled wedding website for **Dani & Benji**, getting
married on **Sunday 3rd January 2027** at Luca, Kibbutz Mishmar HaSharon, Israel.

Built as a plain static site — **HTML, CSS and vanilla JavaScript**, no build
step and no dependencies. Host it anywhere that serves static files.

## Pages
| File | Page |
|------|------|
| `index.html` | Home — hero, countdown, welcome letter, livestream, quick links, gallery |
| `travel.html` | Travelling to Israel — flights, getting around, safety, where to stay |
| `what-to-do.html` | What to do — Tel Aviv attractions, cafés, restaurants, day trips |
| `weekend.html` | The wedding weekend — Fri/Sat/Sun schedule and dress codes |
| `rsvp.html` | RSVP — embedded Google Form |
| `gifts.html` | Gifts — registry link and (reveal-on-click) payment details |

Shared styles live in `assets/css/styles.css` and shared behaviour in
`assets/js/main.js`. The colour palette and fonts are defined as CSS variables
at the top of the stylesheet (`:root`) — tweak them there.

## Things to fill in (search the code for `TODO`)
1. **Photos** — add `assets/images/hero-proposal.jpg` (landscape) and any
   `gallery-*.jpg` files. See `assets/images/README.md`.
2. **RSVP form** — paste your Google Form embed URL into the `<iframe src="">`
   in `rsvp.html`, and the shareable link into the fallback button.
3. **Registry link** — add the URL in `gifts.html`.
4. **Livestream link** — add it in the "Watching from afar" card in `index.html`.
5. **Confirm times/venues** — the `XX` times and `TBC` venue on `weekend.html`.

## Privacy ⚠️
This site contains **real bank details and a personal contact number**, so it is
built to be **private**:
- Every page has `<meta name="robots" content="noindex, nofollow">`.
- Bank details and the hotel WhatsApp number are hidden behind a click-to-reveal.
- **You should also password-protect the site at the host level** (e.g. Netlify
  password protection, a Cloudflare Access rule, or `.htpasswd`) and share the
  link only with guests. Don't post it publicly.

## Running locally
Just open `index.html` in a browser, or serve the folder:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Deploying
Upload the whole folder to any static host — Netlify (drag & drop), GitHub Pages,
Cloudflare Pages, Vercel, etc. Remember to enable password protection.
