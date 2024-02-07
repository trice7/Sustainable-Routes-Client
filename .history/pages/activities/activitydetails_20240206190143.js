import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '../../utils/context/authContext';
import ActivityDetailsCard from '../../components/ActivityDetailsCard';
import ActivityCard from '../../components/activityCard';
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

  return (
    <div>
      <div className="content">
        <h1>Hello {user.fbUser.displayName}, your next adventure awaits!</h1>
        <div className="card-container">
          {destination && (
            <div>
              <ActivityDetailsCard className="destination-card-details" key={destination.id} activity={destination} onUpdate={handleUpdate} />
              <ActivityCard activity={destination} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ViewSingleDestination;
