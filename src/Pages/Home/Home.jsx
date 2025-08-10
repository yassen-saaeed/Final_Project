import { Link } from 'react-router-dom';
import './Home.css';
import libraryImage from './assets/logo.jpg';

function Home() {
  return (
    <div className="online-library-section">
      <div className="online-library-content">
        <div className="image-content">
          <img src={libraryImage} alt="Online Library Illustration" />
        </div>
        <div className="text-content">
          <h2 className="title">Welcome to Folio!</h2>
          <p className="description">
            Discover worlds between the covers
          </p>
          <Link to="/Categories" className="btn btn-outline-secondary btn-lg px-4 shadow mt-3">
            View Categories
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;