import { useState, useEffect } from 'react';
import './Carts.css'; 

function Carts() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(cart);
  }, []);

  const handleRemove = (key) => {
    const updated = cartItems.filter(item => item.key !== key);
    setCartItems(updated);
    localStorage.setItem('cart', JSON.stringify(updated));
    window.dispatchEvent(new Event("cartUpdated"));
  };

  const handleClearCart = () => {
    localStorage.removeItem('cart');
    setCartItems([]);
    window.dispatchEvent(new Event("cartUpdated"));
  };

  return (
    <div className="container py-4">
      <h2 className="mb-4 fw-bold text-center text-dark">🛒 Your Cart</h2>

      {cartItems.length === 0 ? (
        <p className="text-dark text-center"><b>No books in cart.</b></p>
      ) : (
        <>
          <div className="mb-3 text-end">
            <button 
              className="btn btn-outline-dark btn-sm px-3" 
              onClick={handleClearCart}
            >
              🗑 Clear All
            </button>
          </div>

          <div className="row justify-content-center g-4">
            {cartItems.map((item) => (
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

export default Carts;