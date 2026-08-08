# Campus Snacks Pass

A tiny front-end web app for managing snack passes on campus.

## Overview

Campus Snacks Pass is a minimal client-side application built with plain HTML, CSS, and JavaScript. It provides a simple UI to issue and track snack passes for students or staff during campus events.

## Files

- [index.html](index.html) — App shell and UI
- [styles.css](styles.css) — Visual styles
- [app.js](app.js) — Application logic

## Usage

Open `index.html` in a modern browser. For a local server (recommended), run a simple HTTP server from the project folder, for example:

```bash
# Python 3
python -m http.server 8000

# or using Node (http-server)
npx http-server . -p 8000
```

Then visit `http://localhost:8000` in your browser.

## Development

- No build step or dependencies are required — this is pure front-end code.
- Edit the files listed above and refresh the browser to see changes.

### New in this commit

- Added 12 new menu items and integrated local images stored in the `snackpics/` folder.
- Images are referenced using relative paths (e.g. `./snackpics/coldcoffee.jpg`) so they load locally — no external URLs used.
- Menu card images use `object-fit: cover` to preserve layout.

## Contributing

Feel free to open issues or submit pull requests for improvements, accessibility fixes, or new features.

## License

This project is provided under the MIT License. See LICENSE for details.
