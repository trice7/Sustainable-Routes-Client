import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { signOut } from '../utils/auth';
import { useAuth } from '../utils/context/authContext';
import DestinationCard from '../components/destinationCard';
import getDestination from '../api/destinationData';

function Home() {
  const [destinationState, setDestinationState] = useState([]);
  const { user } = useAuth();
  const currentUserUid = user.id;

  useEffect(() => {
    if (user && user.id) {
      getDestination(user.id).then((data) => {
        console.warn('data', data);
        setDestinationState(data);
      });
    }
  }, [user]);

  const handleUpdate = () => {
    getDestination().then(setDestinationState);
  };

  return (
    <div
      className="text-center d-flex flex-column justify-content-center align-content-center"
      style={{
        height: '90vh',
        padding: '30px',
        maxWidth: '400px',
        margin: '0 auto',
      }}
    >
      <h1>Hello {user.fbUser.displayName}, your next adventure awa </h1>
      <p>Your Bio: {user.bio}</p>
      <p>Click the button below to logout!</p>
      <Button variant="danger" type="button" size="lg" className="copy-btn" onClick={signOut}>
        Sign Out
      </Button>
      <div className="card-container">
        {destinationState && destinationState.filter((p) => p.uid === currentUserUid).map((p) => (
          <DestinationCard key={p.firebaseKey} destination={p} onUpdate={handleUpdate} />
        ))}
      </div>
    </div>
  );
}
export default Home;
