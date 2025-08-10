import { Link } from 'react-router-dom';
import {
  FaHeart, FaRobot, FaLandmark, FaHatWizard, FaUserSecret,
  FaUser, FaPaintBrush, FaPlane, FaBookOpen
} from 'react-icons/fa';
import './Categories.css';

const categories = [
  { name: 'Romance', key: 'romance', icon: <FaHeart /> },
  { name: 'Science Fiction', key: 'science_fiction', icon: <FaRobot /> },
  { name: 'History', key: 'history', icon: <FaLandmark /> },
  { name: 'Fantasy', key: 'fantasy', icon: <FaHatWizard /> },
  { name: 'Mystery', key: 'mystery', icon: <FaUserSecret /> },
  { name: 'Biography', key: 'biography', icon: <FaUser /> },
  { name: 'Art', key: 'art', icon: <FaPaintBrush /> },
  { name: 'Travel', key: 'travel', icon: <FaPlane /> },
  { name: 'Philosophy', key: 'philosophy', icon: <FaBookOpen /> },
];

function Categories() {
  return (
    <div className="container py-5">
      <h2 className="mb-5 fw-bold text-center text-dark">Book Categories</h2>
      <div className="row justify-content-center g-4">
        {categories.map((cat) => (
          <div className="col-6 col-sm-4 col-md-3 col-lg-2" key={cat.key}>
            <div className="d-flex flex-column align-items-center">
              <div className="category-circle shadow-sm mb-3">
                <div className="icon-circle">
                  {cat.icon}
                </div>
              </div>
              <h5 className="mb-2 text-center">{cat.name}</h5>
              <Link 
                to={`/category/${cat.key}`} 
                className="btn btn-outline-dark btn-sm mt-1"
              >
                View Books
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Categories;