export function getFavorites() {
  return JSON.parse(localStorage.getItem("favorites")) || [];
}

export function addFavorite(book) {
  const favorites = getFavorites();
  if (!favorites.find(b => b.id === book.id)) {
    favorites.push(book);
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }
}

export function removeFavorite(id) {
  const updated = getFavorites().filter(b => b.id !== id);
  localStorage.setItem("favorites", JSON.stringify(updated));
}
