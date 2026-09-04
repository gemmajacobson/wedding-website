# Images

Drop your photos in this folder. The site already references these filenames —
just add the files with these exact names and they'll appear automatically.

## Required / recommended

| Filename              | Where it shows        | Notes |
|-----------------------|-----------------------|-------|
| `hero-proposal.jpg`   | Homepage hero (full-bleed background) | **The main proposal photo.** Export it **landscape** (approx 1920×1280 or wider). It's cropped to fill the screen and focused slightly above centre, so keep faces in the upper-middle. |
| `gallery-1.jpg` … `gallery-4.jpg` | Homepage "favourite moments" gallery | Portrait (4:5) looks best but any shape works — they're cropped to fill. Add as many as you like and copy the markup in `index.html`. |

## Tips
- Keep files reasonably small (aim for < 500 KB each) so the site loads fast —
  resize/compress before uploading (e.g. squoosh.app).
- `.jpg` is assumed above; if you use `.png`/`.webp`, update the references in
  `index.html` and in `assets/css/styles.css` (the `.hero__media` background).
- To change the hero crop, edit `.hero__media` in `assets/css/styles.css`
  (the `center 32%` value controls vertical focus).
