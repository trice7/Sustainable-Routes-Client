import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '../../utils/context/authContext';
import DestinationDetailsCard from '../../components/destinationDetailsCard';
import { getSingleDestination } from '../../api/destinationData';

function ViewSingleDestination() {
  const router = useRouter();
  const { id } = router.query;
  const [destination, setDestination] = useState(null);
  const { user } = useAuth();

  useEffect(() => {
    if (id) {
      getSingleDestination(id).then((fetchedDestination) => {
        setDestination(fetchedDestination);
      });
    }
  }, [id]);

  const handleUpdate = () => {
    getSingleDestination(id).then(setDestination);
  };
  console.warn(location.Name)
  return (
    <div>
      <div className="content">
        <h1>Hello {user.fbUser.displayName}, your next adventure awaits at {Location.name}!</h1>
        <div className="card-container">
          {destination && (
            <div>
              <DestinationDetailsCard className="destination-card-details" key={destination.id} activity={destination} onUpdate={handleUpdate} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ViewSingleDestination;
