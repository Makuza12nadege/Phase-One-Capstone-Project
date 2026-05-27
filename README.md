# 📚 Book Explorer

A responsive, interactive book browsing app built with HTML, Tailwind CSS, and vanilla JavaScript.

## Features
- Browse books fetched from the Open Library API
- Search books by title
- Add / remove favorites (saved in localStorage)
- Responsive on mobile, tablet, and desktop
- 3 pages: Home, Favorites, About

## How to Run
Open with **VS Code Live Server** (required for ES6 modules to work).

---

## Lab 4: GitHub Collaboration

### Exercise 4.1 – Task Tracking (GitHub Projects)
Create a GitHub Project board with these tasks:
| Task | Status |
|------|--------|
| Build homepage layout | Done |
| Add book grid | Done |
| Fetch books from API | Done |
| Search functionality | Done |
| Favorites page | Done |
| About page | Done |

### Exercise 4.2 – Branching
```bash
# Start from main
git checkout -b feature/search       # search feature branch
git checkout -b feature/favorites    # favorites feature branch
git checkout -b feature/about        # about page branch

# After making changes on a branch
git add .
git commit -m "add search functionality"
git push -u origin feature/search

# Then open a Pull Request on GitHub to merge into main
```

### Exercise 4.3 – Bug Tracking (GitHub Issues)
Example issues to create on GitHub:
- **Bug:** No results message not showing on empty search
- **Improvement:** Show book cover on favorites page
- **Feature:** Add a loading spinner instead of plain text

---

## File Structure
```
book-explorer/
├── index.html       # Home page
├── favorites.html   # Favorites page
├── about.html       # About page
├── fetchBooks.js    # API module (Open Library)
├── favorites.js     # Favorites module (localStorage)
└── README.md
```
