import React, { useEffect, useState } from 'react';
import { useAuth } from '../utils/context/authContext';
import DestinationDetailsCard from '../components/destinationCard';
import getSingleDestination from '../api/destinationData';

function Home() {
  const [location, setLocation] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    getSingleDestination().then((data) => {
      console.warn(data);
      setLocation(data);
    });
  }, []);

  const handleUpdate = () => {
    getSingleDestination().then(setLocation);
  };

  return (
    <div>

      <div className="content">
        <h1>Hello {user.fbUser.displayName}, your next adventure awaits!</h1>
        <div className="card-container">
          {location && (
            <DestinationDetailsCard className="destination-card" key={location.id} location={location} onUpdate={handleUpdate} />
          )}
        </div>
      </div>
    </div>
  );
}
export default Home;
