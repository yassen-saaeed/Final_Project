import { useState, useEffect } from 'react';
import './Favorite.css';

function Favorite() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(storedFavorites);

    const handleStorageUpdate = () => {
      const updatedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
      setFavorites(updatedFavorites);
    };

    window.addEventListener("favoritesUpdated", handleStorageUpdate);
    return () => window.removeEventListener("favoritesUpdated", handleStorageUpdate);
  }, []);

  const handleRemove = (key) => {
    const updated = favorites.filter(item => item.key !== key);
    setFavorites(updated);
    localStorage.setItem('favorites', JSON.stringify(updated));
    window.dispatchEvent(new Event("favoritesUpdated"));
  };

  const handleClearFavorites = () => {
    localStorage.removeItem('favorites');
    setFavorites([]);
    window.dispatchEvent(new Event("favoritesUpdated"));
  };

  return (
    <div className="container py-4">
      <h2 className="mb-4 fw-bold text-center text-dark">❤ Your Favorites</h2>

      {favorites.length === 0 ? (
        <p className="text-dark text-center"><b>No books in favorites.</b></p>
      ) : (
        <>
          <div className="mb-3 text-end">
            <button
              className="btn btn-outline-dark btn-sm px-3"
              onClick={handleClearFavorites}
            >
              🗑 Clear All
            </button>
          </div>

          <div className="row justify-content-center g-4">
            {favorites.map((item) => (
              <div className="col-6 col-sm-4 col-md-3 col-lg-2" key={item.key}>
                <div className="d-flex flex-column align-items-center">
                  <div className="book-rectangle shadow-sm mb-3">
                    <div className="book-img-container">
                      {item.cover ? (
                        <img
                          src={`https://covers.openlibrary.org/b/id/${item.cover}-M.jpg`}
                          className="book-img"
                          alt={item.title}
                        />
                      ) : (
                        <div className="no-cover">No Image</div>
                      )}
                    </div>
                  </div>
                  <h5 className="mb-2 text-center">{item.title}</h5>
                  <button
                    className="btn btn-outline-dark btn-sm mt-1"
                    onClick={() => handleRemove(item.key)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default Favorite;