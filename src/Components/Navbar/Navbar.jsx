import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faHeart } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';

function Navbar() {
  const [cartCount, setCartCount] = useState(0);
  const [favoriteCount, setFavoriteCount] = useState(0);

  useEffect(() => {
    const updateCounts = () => {
      const cart = JSON.parse(localStorage.getItem('cart')) || [];
      const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
      setCartCount(cart.length);
      setFavoriteCount(favorites.length);
    };

    updateCounts();
    window.addEventListener("cartUpdated", updateCounts);
    window.addEventListener("favoritesUpdated", updateCounts);

    return () => {
      window.removeEventListener("cartUpdated", updateCounts);
      window.removeEventListener("favoritesUpdated", updateCounts);
    };
  }, []);

  return (
    <nav className="navbar custom-navbar navbar-expand-lg">
      <div className="container">
        <Link className="navbar-brand" to="/">Folio</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/categories">Categories</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/login">
                Login
              </Link>
            </li>

            <li className="nav-item position-relative">
              <Link className="nav-link cart-icon" to="/cart">
                <FontAwesomeIcon icon={faShoppingCart} />
                {cartCount > 0 && (
                  <span className="position-absolute top-0 start-55 translate-middle badge rounded-pill bg-danger">
                    {cartCount}
                  </span>
                )}
              </Link>
            </li>

            <li className="nav-item position-relative">
              <Link className="nav-link favorite-icon" to="/Favorite">
                <FontAwesomeIcon icon={faHeart} />
                {favoriteCount > 0 && (
                  <span className="position-absolute top-0 start-55 translate-middle badge rounded-pill bg-danger">
                    {favoriteCount}
                  </span>
                )}
              </Link>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
