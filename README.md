
QA Testing Static Site
----------------------

Files included:
- index.html, about.html, products.html, contact.html
- css/style.css
- js/script.js
- images/product1.svg (real)
- intentionally referenced: images/missing.jpg (NOT included) and broken-page.html (NOT included)

How to run locally:
1. Unzip the package (if zipped).
2. In the site's root folder run:
   python -m http.server 8000
3. Open http://localhost:8000 in your browser.

Deploy to GitHub Pages:
- Push repo to GitHub, enable GitHub Pages from main branch (root) in repo settings.

Purpose:
- Designed for QA tests: visual checks, broken link detection, missing assets, API fetch behavior, form handling.
