import React, { useEffect, useState } from 'react';
import { useAuth } from '../utils/context/authContext';
import DestinationCard from '../components/destinationCard';
import getDestination from '../api/destinationData';

function Home() {
  const [location, setLocationState] = useState([]);
  const { user } = useAuth();
  // const currentUserUid = user.id;

  useEffect(() => {
    if (user && user.id) {
      getDestination(user.id).then((data) => {
        setLocationState(data);
      });
    }
  }, [user]);

  const handleUpdate = () => {
    getDestination().then(setLocationState);
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
      <div className="content"></div>
      <h1>Hello {user.fbUser.displayName}, your next adventure awaits!</h1>
      <div className="card-container">
        {location && location.map((p) => (
          <DestinationCard key={p.firebaseKey} location={p.location} onUpdate={handleUpdate} />
        ))}
      </div>
    </div>
   );
     </div>
}
export default Home;
