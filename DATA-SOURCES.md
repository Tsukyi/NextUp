# Catalogue sources and attribution

The original 94 editorial entries are supplemented with imported records. Imported moods are inferred from genre metadata, not editorial reviews. Missing runtimes and languages remain unknown, and are excluded when a user sets a strict runtime or language filter.

## TVmaze

Television metadata, synopses, and image links: [TVmaze](https://www.tvmaze.com/api). Each imported title links to its TVmaze page. Metadata is adapted under [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/); the TVmaze-derived catalogue records are distributed under the same licence. Adaptations include normalized genres, shortened plain-text descriptions, and inferred moods. Images remain subject to their respective owners’ rights.

The snapshot samples early, distributed, and recent index pages. It is not the complete TVmaze database. Live title search queries the provider beyond this snapshot.

## Wikipedia film archive

Film metadata from [Peter Rust’s Wikipedia movie dataset, now maintained under servant-42](https://github.com/servant-42/wikipedia-movie-data), primarily American films through 2023. The archive is no longer actively updated. It supplements the live movie search and should not be described as a current list of all worldwide releases. NextUp imports entries from 1950 onward. Each title links to its source Wikipedia article, where contributors and revision history can be found.

Wikipedia-derived text is adapted under [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/). The Wikipedia-derived catalogue records are distributed under that licence. Descriptions are shortened and plain-text normalized. Artwork belongs to its respective rights holders and its file page gives licensing information.

The dataset repository also includes the following MIT licence:

Copyright (c) 2016 Peter Rust

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

## Anime

The anime snapshot uses [Manami’s anime-offline-database](https://github.com/manami-project/anime-offline-database), an archived dataset last updated in July 2026, distributed under its [Open Database License](https://github.com/manami-project/anime-offline-database/blob/master/LICENSE). The adapted anime records retain this licence; metadata has been normalized, restricted to supported formats, and filtered for adult-only tags. Up to 10,000 entries are selected by the source’s aggregated score. Images remain the property of their respective rights holders. Source URLs and known alternate titles are retained.

Live anime search uses [MyAnimeList](https://myanimelist.net/) through [Jikan](https://jikan.moe/). Each anime title links to its metadata source. Descriptions are generated from basic metadata, not copied synopses. Some entries may appear under different localized names despite alias deduplication. Language stays unknown unless a matching source supplies it; anime does not imply the language of every release or dub.

## Live movie search

[Apple iTunes Search API](https://developer.apple.com/library/archive/documentation/AudioVideo/Conceptual/iTuneSearchAPI/Searching.html) supplies live film title, genre, release-year, runtime and source links from the US storefront. No Apple synopsis or artwork is copied. A source listing is not a guarantee that a title is available to stream in Singapore. Movie search results can be saved and used as similar-title recommendation seeds.

## Privacy and refreshes

The main catalogue is served from this repository in JSON chunks. A read-only GitHub Actions job builds refreshed snapshots for review and publishing. It has no repository write permissions, no schedule and does not publish automatically. Live search supplements the published snapshot between updates. Live search sends only the entered title query to the chosen source(s). Chat preferences stay in the browser. Saved imported title details are kept locally so they survive reloads and temporary provider outages. No API key is required.
