import React, { useEffect, useState } from 'react';
import { useAuth } from '../utils/context/authContext';
import DestinationCard from '../components/destinationCard';
import getDestination from '../api/destinationData';

function Home() {
  const [activity, setActivityState] = useState([]);
  const { user } = useAuth();
  // const currentUserUid = user.id;

  useEffect(() => {
    if (user && user.id) {
      getDestination(user.id).then((data) => {
        console.warn('data', data);
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
      <h1>Hello {user.fbUser.displayName}, your next adventure awaits! </h1>
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
        {destinationState && destinationState.filter((p) => p.uid === currentUserUid).map((p) => (
          <DestinationCard key={p.firebaseKey} destination={p} onUpdate={handleUpdate} />
        ))}
      </div>
    </div>
  );
}
export default Home;
