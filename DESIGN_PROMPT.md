# Design prompt — Dani & Benji wedding website

> Paste everything below (from "You are…" to the end) into Claude to have it design and build the site.

---

You are a senior web designer and front-end developer. Design and build a **wedding website** for Dani & Benji, whose wedding is on **Sunday 3rd January 2027** at Luca, Kibbutz Mishmar HaSharon, Israel. Most guests are travelling internationally (UK, Australia, and elsewhere) to Israel, so the site doubles as a warm, practical travel guide to Tel Aviv.

## Tech & output
- Build with **plain HTML, CSS and vanilla JavaScript only** — no framework, no build step. It must be hostable as static files (e.g. GitHub Pages / Netlify).
- **Multi-page site** with shared, consistent header/nav and footer across pages. Pages:
  1. **Home** — hero, intro, countdown, quick links to everything.
  2. **Travelling to Israel** — flying, getting around, safety, where to stay.
  3. **What to do** — Tel Aviv recommendations (attractions, areas, cafés, restaurants, further afield).
  4. **The wedding weekend** — Fri / Sat / Sun schedule and dress codes.
  5. **RSVP** — embedded form.
  6. **Gifts** — registry link and payment details (see privacy rules).
  - A **"Watching from afar" / livestream** block belongs on the Home page (and/or its own small page): show the livestream times with a clearly-marked slot for the link ("coming soon").
- Clean, well-organized, commented code. Separate `index.html` + one page per section, a shared `styles.css`, and a small `main.js`. Use semantic HTML and make it fully **responsive (mobile-first)** and accessible (good contrast, alt text, keyboard-navigable nav and accordions).
- Use a small set of Google Fonts (or system fallbacks) — see typography.

## Aesthetic
- **Warm Mediterranean / Tel Aviv** feel: sun-washed, relaxed, inviting, celebratory — matching the couple's fun, casual voice.
- You have latitude to choose a **cohesive warm-Mediterranean palette** (think warm sandy neutrals, a clay/terracotta or warm accent, and a Mediterranean sea blue or olive — pick what feels elegant and photo-friendly). Define it as CSS custom properties so it's easy to retune. Support a tasteful light theme; a subtle dark mode is a nice-to-have, not required.
- **Typography:** a characterful, elegant **serif for headings** (names, page titles, section headers) paired with a **clean, highly readable sans-serif for body text**.
- Subtle **Hebrew / RTL accents** as decorative flourishes (e.g. a small Hebrew word or motif in section dividers, tasteful use of Israeli/Mediterranean motifs like tiles, citrus, waves, or the TLV coastline). English is the primary language throughout. Keep it elegant, never kitschy.
- **Photography:** the couple will supply real photos. Design around a strong hero image on the Home page and use photos elsewhere; where a photo isn't available yet, leave a clearly-marked, correctly-sized placeholder (e.g. `<!-- PHOTO: couple hero, landscape -->`) so they're easy to swap in.

## Branding
- Primary branding is **"Dani & Benji"**. Feature it prominently in the hero and header.
- Reinforce with the date **Sunday 3rd January 2027** and the venue line **Luca, Kibbutz Mishmar HaSharon, Israel**.

## Key features
- **Countdown timer** to the wedding (3 Jan 2027, 6:30 PM Israel time) on the Home page — live, in vanilla JS.
- **Maps / directions:** link (or lightweight embed) to the venue Luca, the recommended hotel, and Ben Gurion Airport; consider a map or clear links for the recommended TLV spots.
- **RSVP via embedded Google Form:** on the RSVP page, embed a Google Form in a styled `<iframe>` (leave the `src` as a clearly-marked TODO for the couple to paste in), with a fallback "open in new tab" link. The form should collect: name(s), attending yes/no, number of guests, **bus sign-up (Tel Aviv → venue and back; note possible Jerusalem pickup)**, dietary requirements, and a free-text message.
- **Streamlined, scannable travel content:** include all the detail below, but keep it tight. Use **cards, small icons/labels, and expandable accordions** for the long lists (restaurants, cafés, "what to do"). Show must-knows up front; tuck exhaustive lists behind accordions/tabs.

## Privacy (important)
- Design and build this as a **private site** — assume it will be password-protected / unlisted and not indexed. Add `<meta name="robots" content="noindex, nofollow">` and note in a code comment that the couple should password-protect hosting.
- The **Gifts** page contains real bank details, an IBAN/BSB/sort code, and a personal WhatsApp number. Do **not** display bank/account/phone details openly — put them behind a **"Show payment details" reveal (click to expand)**, and add a code comment recommending the couple keep the site access-controlled.

## Tone of voice
Warm, personal, funny, and casual — like the couple talking to friends and family. Keep their phrasing and jokes (e.g. "Yallaaaa let's party!", "synagogue chic", "Congrats — you're officially a local"). Don't over-formalize the copy.

## Content (use verbatim; organize into the pages above)

### Home
- **DANI & BENJI**
- **SUNDAY 3RD JANUARY 2027**
- **LUCA, KIBBUTZ MISHMAR HASHARON, ISRAEL**
- WE'RE GETTING MARRIED and we can't wait to celebrate with you!
- We made this website to put all the information about our wedding in one place. For those who can't make it in person, we'll post a livestream link here closer to the time, and we know we'll feel your love as you follow along virtually.
- For those coming from around the world, we are so grateful and excited to celebrate together. We want to make your visit to Israel as easy as possible, so we tried to think of everything you might need — visa information, event details, local recommendations and more — but of course if you have further questions please get in touch with us or one of our trusted representatives (parents).
- Yallaaaa let's party! All our love, Dani and Benji x

### Watching from afar
- Link coming soon! Our wedding livestream will start on Sunday 3rd Jan at 6:30 PM Israel time (4:30 PM London / 3:30 AM Melbourne) and run for two hours.

### Travelling to Israel
Intro: First things first — a huge thank you. It means the world to us to have family and friends from abroad by our sides on our wedding day, and we are so touched that so many of you are planning to be there.

**Flying**
- Fly into and out of Ben Gurion International Airport in Tel Aviv. International travellers to Israel need a valid entry permit, so make sure to submit your Electronic Travel Authorisation form at least 72 hours before your flight.
- Keep the little blue paper you're given when you go through customs. You can show this to your hotel, airbnb, rental car etc. to avoid paying the tax required of Israeli citizens.
- From the airport you can easily get a taxi or train to wherever you're staying.
- If you're planning to cab, don't go with one of the men standing in the arrivals terminal offering to drive you unless you want to be massively overcharged. Instead, follow the signs to the official taxi rank (out and to the left), where you can order a car through the Gett Taxi app.
- If you want to take the train, follow signs to the platform. You can buy a paper ticket at a machine or pay on your phone through the Moovit app (see below). The nearest stations to central TLV are Tel Aviv HaShalom and Tel Aviv Savidor Merkaz.

**Getting around**
- Download Gett Taxi for easy cab ordering (Uber equivalent). You can also try hailing a taxi on the street, but make sure to have cash on you if so!
- The public transport network in Israel is pretty good, both within and between cities. Download Moovit for schedules and travel instructions — connect your credit card within the app, and scan the QR codes on buses or in train stations to pay.

**Safety**
- We appreciate that travelling to Israel these days isn't easy. We will continue to monitor the security situation as the wedding approaches and take all the necessary precautions, but if things remain calm, we anticipate that all events will go ahead as planned. We recommend downloading the Home Front Command app for location-based alerts.
- Hopefully this app stays quiet and unused! However, if there is a siren, stay calm and follow the people around you to the nearest safe room. Stay there until the app tells you the event is over (or for at least 10 minutes). Congrats — you're officially a local.
- In terms of getting around in general, Israel is pretty safe and we both feel at ease taking public transport and walking around at night. If you need directions or other assistance, most people speak basic English so feel free to ask for help (or be brave and practise your Hebrew!).

**Where to stay**
- We love being based in Tel Aviv and we recommend that you stay here too. It's a small city, so any hotel, airbnb, etc. in the city centre or Old North will be walkable (or a quick bus away) from all the main sites.
- We have discounted rates at the following hotels:
  - Best Western Regency Suites — HaYarkon Street 80. Contact Hilary Cohen on WhatsApp at +972504450175 and reference the Dani Jacobson wedding. *(Treat the phone number as sensitive — reveal-on-click.)*

### What to do
Intro: There's so much to see and do in TLV, but here are some of our favourite spots!

**City attractions**
- Beaches — we know it's winter, but a perk of the Middle East is the potential for gorgeous days all year round
- Markets — Shuk HaCarmel for the best souvenir haul, Shuk Levinsky for a more authentic experience (and the food tours at both are amazing!), Nachalat Binyamin for the craft market on Tuesday and Friday mornings
- Museums — so many to choose from, e.g. ANU Museum of the Jewish People (they have an exhibit dedicated to October 7th), the Yitzhak Rabin Centre, the Tel Aviv Art Museum
- Nightlife — also so many to choose from. Ask people cooler than us or just wander down Dizengoff or Nachalat Binyamin and see where you end up

**Areas to explore**
- Park Hayarkon — for some green space within the city
- Neve Tzedek — for trendy boutiques and hidden gems
- Yafo — for beautiful architecture and a great flea market

**Cafés** (Neither of us are big coffee snobs, but these are a few places our friends recommend! Note that the food served isn't certified kosher)
- Chachos
- Nahat
- Cafelix
- Chacoli — a restaurant at the watersports centre, but the café attached has cheap coffee subsidised by the city and the rocks here are the best spot for viewing the sunset

**Restaurants**
- Cafe Xoho — yummy bagels and other brunch staples, fills up early especially on Friday mornings (don't say we didn't warn you)
- HaKosem — more casual street food vibes, including great falafel and schwarma
- Falafel Gabay — also more casual, the schnitzel challah sandwiches here are a Dani and Benji pre-Shabbat favourite
- Florentina — pizza, pasta, and amazing salads
- Nini Hachi — the best sushi in town (although Benji will say nothing beats Nogga in Melbourne…) amongst other Asian cuisine
- Whiskey Bar — fancier, delicious meat and fish dishes and of course a great liquor selection
- Wine Garden — a wine bar with yummy tapas-style food. Famous (to us) for being the site of our first date!
- Malka / Dvora — two great restaurants with menus curated by renowned chef Eyal Shani. Recommend for bigger groups so you can order things to share and taste more of the menu
- You can reserve a table for dinner by calling the restaurants or through the app Ontopo. We recommend doing this just to be safe, especially on Thursday nights!

**Further afield** (Tel Aviv is wonderful, but if you have time, get out and see more of beautiful Israel!)
- Jerusalem — Western Wall and Old City, Machane Yehuda Market, Israel Museum, Yad Va'Shem
- Dead Sea and Masada
- Wineries?
- Hikes?

### The wedding weekend

**Friday 1st Jan**
- If you're travelling internationally and will be in Tel Aviv for Shabbat, we'd love you to join (one of) our families at Friday night dinner. Please let the relevant side know if they should count you in. If you'd rather make your own plans, we hope you enjoy and we'll see you at the wedding!
- Jones family and guests — North Central Synagogue, Ben Yehuda 126. Kabbalat Shabbat service at XX, meal (upstairs) at XX
- Jacobson family and guests — TBC. Kabbalat Shabbat service at XX, meal at XX
- Dress code for both: Dani says synagogue chic, Benji says he doesn't know what that means. Basically, smart casual ish, please be mindful of modesty.

**Saturday 2nd Jan**
- Benji's aufruf — North Central Synagogue (Ben Yehuda 126). Shacharit service at 9 AM, Torah reading at approx 9:45 AM, kiddush sponsored by the Jones family upstairs at approx 11:15 AM
- Dress code: synagogue chic

**Sunday 3rd Jan**
- Our wedding! 6:30 PM – 12:30 AM at Luca.
- We will organise buses from Tel Aviv to the venue and back again (and potentially from Jerusalem too, depending on demand), so make sure to sign up when you RSVP. We'll send more information about the meeting point and time closer to the wedding. You can also take a taxi to and from the venue if you'd prefer — it's about 40–60 minutes from central TLV.
- Dress code: party attire, wear something you feel great in! (We recommend bringing an extra layer in case it's cold and trainers for dancing.)

*(Note: "XX" times and "TBC" are intentional placeholders — style them as clearly editable.)*

### Gifts
- Having you all in our lives is more than enough of a present, especially those of you who've travelled across the world to celebrate with us. However, if you insist on spoiling us with a gift as well, we are very grateful!
- To buy something from our registry, please click here. *(registry link = TODO)*
- To send us money, please see details below: *(put ALL of the following behind a "Show payment details" click-to-reveal)*
  - **Israel** — Name: JACOBSON DANIELLA REBECCA · Bank: Bank HaPoalim (12) · Branch number: 681 · Account number: 14034 · IBAN: IL85-0126-8100-0000-0014-034 · Swift: POALILIT · Bit / Paybox: 0586772397 (Dani)
  - **Australia** — Name: Benjamin Jones · BSB: 083-781 · Account Number: 795624393
  - **UK** — Name: Daniella Rebecca Jacobson · Sort code: 40-11-60 · Account number: 70296104

## Deliverables
- A complete, working static site (all pages linked, nav functional, countdown live, form validated, accordions working, responsive).
- Clearly-marked TODO slots for: photos, livestream link, RSVP form endpoint, registry link, XX/TBC times, and any map embeds.
- A short `README.md` explaining how to run/host it and where to paste the TODO values.

Start by proposing the palette, font pairing, and Home-page layout, then build the full site.
