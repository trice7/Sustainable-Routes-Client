import React, { useEffect, useState } from 'react';
import { useAuth } from '../utils/context/authContext';
import destinationDetailsCard from '../components/destinationCard';
import getDestination from '../api/destinationData';

function Home() {
  const [location, setLocation] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    getDestination().then((data) => {
      console.log(data);
      setLocation(data);
    });
  }, []);

  const handleUpdate = () => {
    getDestination().then(setLocation);
  };

  return (
    <div>

      <div className="content">
        <h1>Hello {user.fbUser.displayName}, your next adventure awaits!</h1>
        <div className="card-container">
          {location && destinationDetailsCard.map((p) => (
            <destinationDetailsCard className="destination-card" key={p.id} location={p.location} onUpdate={handleUpdate} />
          ))}
        </div>
      </div>
    </div>
  );
}
export default Home;
