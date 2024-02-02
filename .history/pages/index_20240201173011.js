import React, { useEffect, useState } from 'react';
import { useAuth } from '../utils/context/authContext';
import DestinationCard from '../components/destinationCard';
import getDestination from '../api/destinationData';

function Home() {
  const [activities, setActivityState] = useState([]);
  const { user } = useAuth();
  const currentUserUid = user.id;

  useEffect(() => {
    if (user && user.id) {
      getDestination(user.id).then((data) => {
        setActivityState(data);
      });
    }
  }, [user]);

  const handleUpdate = () => {
    getDestination().then(setActivityState);
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
      <h1>Hello {user.fbUser.displayName}, your next adventure awaits!  </h1>
      <div className="card-container">
        {activities && activities.filter((p) => p.uid === currentUserUid).map((p) => (
          <DestinationCard key={p.firebaseKey} activities={p} onUpdate={handleUpdate} />
        ))}
      </div>
    </div>
  );
}
export default Home;
