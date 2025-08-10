import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home/Home';
import Categories from './Pages/Categories/Categories';
import CategoryBooks from './Pages/CategoryBooks/CategoryBooks';
import ProductDetails from './Pages/Product/ProductDetails';
import Books from './Pages/Books';
import Carts from './Pages/Carts/Carts';
import Favorite from './Pages/Favorite/Favorite';
import Login from './Pages/Login/Login';
import Footer from './Components/Footer/Footer';

function ProtectedRoute({ children }) {
  const token = localStorage.getItem('token');
  if (!token) {
    return <Navigate to="/login" replace />;
  }
  return children;
}

function App() {
  return (
    <Router>
      <Navbar/>
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/category/:name" element={<CategoryBooks />} />
          <Route path="/books/:id" element={<ProductDetails />} />
          <Route path="/books/:name" element={<Books />} />

          <Route 
            path="/cart" 
            element={
              <ProtectedRoute>
                <Carts />
              </ProtectedRoute>
            } 
          />

          <Route path="/favorite" element={<Favorite />} />
          <Route path="/login" element={<Login />} /> 
          <Route path="/footer" element={<Footer />} />
        </Routes>
      </div>
      <Footer/>
    </Router>
  );
}

export default App;
