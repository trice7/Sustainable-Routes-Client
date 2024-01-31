import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { signOut } from '../utils/auth';
import { useAuth } from '../utils/context/authContext';
import parkCard from '../components/parkCard';
import { getPark } from '../api/parkData';

function Home() {
  const [player, setPlayer] = useState([]);
  const { user } = useAuth();
  const currentUserUid = user.id;

  useEffect(() => {
    getPark().then(setPlayer);
  }, []);

  const handleUpdate = () => {
    getPlayer().then(setPlayer);
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
      <h1>Hello {user.fbUser.displayName}! </h1>
      <p>Your Bio: {user.bio}</p>
      <p>Click the button below to logout!</p>
      <Button variant="danger" type="button" size="lg" className="copy-btn" onClick={signOut}>
        Sign Out
      </Button>
      <div className="card-container">
        {player.filter((p) => p.uid === currentUserUid).map((p) => (
          <parkCard key={p.firebaseKey} teamMemberObj={p} onUpdate={handleUpdate} />
        ))}
      </div>
    </div>
  );
}

export default Home;
