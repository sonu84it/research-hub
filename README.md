# Research Hub


A modern blogging website built with Create React App. It showcases curated research topics with links to detailed GitHub Wiki articles.


## Development

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm start
   ```

3. Build the project:
   ```bash
   npm run build
   ```
4. Deploy to GitHub Pages:
   ```bash
   npm run deploy
   ```
   This publishes the `build` folder to the `gh-pages` branch. In your
   repository settings, set GitHub Pages to serve from the `gh-pages` branch
   so that `index.html` is used instead of the repository's `README.md`.

   Ensure the `homepage` field in `package.json` points to
   `https://yourusername.github.io/research-hub` (replace `yourusername` with
   your GitHub username) so that asset paths resolve correctly.

The site uses React, Tailwind CSS, and React Router. Blog data is defined in `src/pages/Home.jsx`.
Tailwind CSS is compiled via PostCSS using the configuration in `postcss.config.js`.

