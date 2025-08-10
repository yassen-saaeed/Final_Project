import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import './CategoryBooks.css';

function CategoryBooks() {
  const { name } = useParams();
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBooks = async () => {
      const cached = localStorage.getItem(`books_${name}`);
      if (cached) {
        setBooks(JSON.parse(cached));
        setLoading(false);
        return;
      }

      try {
        const response = await axios.get(`https://openlibrary.org/subjects/${name}.json?limit=20`);
        setBooks(response.data.works);
        localStorage.setItem(`books_${name}`, JSON.stringify(response.data.works));
      } catch (error) {
        console.error("Error loading category:", error);
      }
      setLoading(false);
    };

    fetchBooks();
  }, [name]);

  if (loading) {
    return (
      <div className="d-flex justify-content-center mt-4">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="container py-5">
      <h2 className="mb-5 fw-bold text-center text-dark text-capitalize">
        {name.replace('_', ' ')} Books
      </h2>

      <div className="row justify-content-center g-4">
        {books.map((book) => {
          const workKey = book.key.startsWith("/works/") ? book.key.replace("/works/", "") : null;

          return (
            <div className="col-6 col-sm-4 col-md-3 col-lg-2" key={book.key}>
              <div className="d-flex flex-column align-items-center">
                <div className="book-rectangle shadow-sm mb-3">
  <div className="book-img-container">
    {book.cover_id ? (
      <img
        src={`https://covers.openlibrary.org/b/id/${book.cover_id}-M.jpg`}
        className="book-img"
        alt={book.title}
      />
    ) : (
      <div className="no-cover">No Image</div>
    )}
  </div>
</div>
                <h5 className="mb-2 text-center">{book.title}</h5>
                <p className="text-muted text-center small mb-2">
                  {book.authors?.[0]?.name || 'Unknown Author'}
                </p>
                {workKey ? (
                  <Link 
                    to={`/books/${workKey}`} 
                    className="btn btn-outline-dark btn-sm mt-1"
                  >
                    View Details
                  </Link>
                ) : (
                  <button className="btn btn-secondary btn-sm mt-1" disabled>
                    No Details
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CategoryBooks;