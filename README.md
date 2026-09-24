# NextUp

**Less scrolling. More watching.** A Netflix-inspired movie and show discovery site with a clean charcoal backdrop and red accents. Plain HTML, CSS, and JavaScript; no build step, account, backend, or API key required.

## Put it on GitHub Pages

1. In this repository, open **Settings → Pages**.
2. Set **Source** to **Deploy from a branch**.
3. Choose **main** and **/(root)**, then **Save**.

Once GitHub completes its Pages deployment, the site will be at **https://tsukyi.github.io/NextUp/**. The included workflow checks the app; GitHub's built-in Pages workflow publishes it after you enable Pages.

Official setup guide: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

## What’s included

- 94 curated films and series across nine catalogue languages, including Korean dramas, Japanese animation, Indian films, and Singaporean cinema.
- Four-step taste quiz: mood, format, time, and genre.
- Conversation-style recommendation matcher with follow-up refinements, similar-title matching, runtime and language constraints, and exclusions such as “no horror”.
- Random unseen picks that respect the current browse filters.
- Ten weekly curated picks, refreshed every Monday at 00:00 UTC. These are editorial selections, not live viewing charts.
- Daily trivia, rotating at 00:00 UTC through 31 questions, with a saved answer for the day.
- Search, format/genre/language filters, watchlist, and watched-title tracking.
- Trailer searches and JustWatch Singapore searches. Streaming availability is checked on the destination service.
- Responsive layouts, keyboard navigation, labelled controls, reduced-motion support, image fallbacks, and local storage resilience.

## Run locally

From the repository directory:

```sh
python3 -m http.server 8000
```

On Windows, `py -m http.server 8000` also works. Open http://localhost:8000. Runtime dependencies are not needed, and the core site also works by opening `index.html` directly; a local server gives the most consistent browser storage behaviour.

## How matching works

`engine.js` parses known moods, genres, languages, title references, and runtimes. Format, language, runtime, genre, and excluded preferences filter candidates. Shared moods, themes, and reference-title traits determine order. Results explain the shared traits. There are no fabricated ratings, popularity rankings, or match percentages.

Try:

- “A funny movie under 2 hours”
- “A show like Inception” → “under 30 minutes”
- “A Korean thriller, no horror”
- “Cosy Japanese animation”
- “A romantic movie” → “French” → “any length”

Say **reset** or use **Start fresh** to clear the chat’s accumulated preferences. The matcher is a local rule-based recommender, not a generative AI chatbot. It cannot answer arbitrary questions or recommend titles outside the catalogue. Unsupported requests prompt a clarification; impossible constraints return an empty state. Show runtimes are approximate episode lengths. Some multilingual titles have a single primary catalogue language.

## Data and privacy

- `data.js` is the editable catalogue and trivia bank. No remote movie database is fetched at runtime.
- Saved titles, watched titles, and daily trivia answers use this browser’s local storage. There is no account or cross-device sync.
- Chat messages stay in memory and clear on reload. They are not sent to a server.
- Posters load from TMDB where an image path is available. Other entries use designed typographic title cards; those cards also appear if remote artwork fails. Google Fonts is optional and falls back to system fonts.
- Artwork belongs to its respective rights holders. This independent project is not affiliated with Netflix, TMDB, or any streaming platform.
- Providers may change streaming availability, and age ratings vary by region. Follow the destination service for current details.

## Tests

Engine tests require only Node.js 22 or newer:

```sh
npm test
```

Browser integration checks:

```sh
npm install
npx playwright install chromium
npm run test:browser
```

The GitHub Actions workflow runs both sets of tests and uploads desktop/tablet/mobile screenshots as `layout-previews`. Browser checks deliberately block remote images and fonts to verify the fallback experience. Screenshots are in `test-results/` and are not committed.

## Files

| File | Purpose |
| --- | --- |
| `index.html` | App shell and accessible sections |
| `styles.css` | Responsive visual design |
| `data.js` | Catalogue, metadata, and trivia |
| `engine.js` | Matching and UTC rotation logic |
| `app.js` | UI, local state, quiz, chat, and discovery |
| `tests/` | Engine and browser integration checks |

To expand recommendations, add entries to `CATALOG` in `data.js`, with unique IDs and appropriate metadata. Keep poster paths optional. No API secrets should be added to this public static site.
