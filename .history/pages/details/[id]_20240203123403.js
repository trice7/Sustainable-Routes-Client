import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '../../utils/context/authContext';
import DestinationDetailsCard from '../../components/destinationCard';
import { getSingleDestination } from '../../api/destinationData';

function Home() {
  const router = useRouter();
  const { id } = router.query;
  const [destination, setDestination] = useState(null);
  const [location, setLocation] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    if (id) {
      getSingleDestination(id).then(setDestination);
    }
  }, [id]);

  const handleUpdate = () => {
    getSingleDestination().then(setLocation);
  };

  return (
    <div>

      <div className="content">
        <h1>Hello {user.fbUser.displayName}, your next adventure awaits!</h1>
        <div className="card-container">
          {destination && destination.map((activity) => (
            <DestinationDetailsCard className="destination-card-details" key={activity.id} activity={activity} onUpdate={handleUpdate} />
          ))}
        </div>
      </div>
    </div>
  );
}
export default Home;
