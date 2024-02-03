import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Button from 'react-bootstrap/Button';
import { useAuth } from '../utils/context/authContext';
import DestinationCard from '../components/destinationCard';
import getDestination from '../api/destinationData';

function Home() {
  const [location, setLocation] = useState([]);
  const { user } = useAuth();
  // const currentUserUid = user.id;

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
            <div key={p.id}>
              <DestinationCard className="destination-card" location={p.location} onUpdate={handleUpdate} />
              {/* DYNAMIC LINK TO VIEW THE BOOK DETAILS  */}
              <Link href="/activities/destinationDetails/activities" passHref>
                <Button variant="primary" className="m-2">VIEW</Button>
              </Link>
            </div>
          ))}
  );
}
export default Home;
