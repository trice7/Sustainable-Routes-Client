import React, { useEffect, useState } from 'react';
import { useAuth } from '../utils/context/authContext';
import destinationCardDetails from '../components/destinationCard';
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
    <div>
      <div>
        {/* Your content goes here */}
        <div className="card-container">
          {location && location.map((p) => (
            <destinationCardDetails className="destination-card" key={p.id} location={p} onUpdate={handleUpdate} />
          ))}
        </div>
      </div>
    </div>
  );
}
export default Home;
