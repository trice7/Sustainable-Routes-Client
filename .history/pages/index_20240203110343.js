import React, { useEffect, useState } from 'react';
import { useAuth } from '../utils/context/authContext';
import DestinationCard from '../components/destinationCard';
import getDestination from '../api/destinationData';

function Home() {
  const [location, setLocation] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    getDestination().then((data) => {
      setLocation(data);
    });
  }, []);

  const handleUpdate = () => {
    getDestination().then(setLocation);
  };

  return (
    <div
      className="text-center d-flex flex-column justify-content-center align-content-center"
      style={{
        height: '90vh',
        padding: '30px',
        maxWidth: '1200px',
        margin: '0 auto',
      }}
    >
      <div className="content">
        <h1>Hello {user.fbUser.displayName}, your next adventure awaits!</h1>
        <nav className="search">
          <div className="container-fluid">
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </nav>
        <div className="card-container">
          {location && location.map((p) => (
            <DestinationCard className="destination-card" key={p.id} location={p.location} onUpdate={handleUpdate} />
          ))}
        </div>
      </div>
    </div>
  );
}
export default Home;
