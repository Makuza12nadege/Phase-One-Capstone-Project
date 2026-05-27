// Fetches books from Open Library API based on search query
export async function fetchBooks(query) {
  try {
    const response = await fetch(`https://openlibrary.org/search.json?q=${query}&limit=6`);
    const data = await response.json();
    return data.docs.map(book => ({
      id: book.key,
      title: book.title,
      author: book.author_name ? book.author_name[0] : "Unknown Author",
      cover: book.cover_i ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg` : null,
    }));
  } catch (error) {
    alert("Failed to load books. Check your internet connection.");
    return [];
  }
}
