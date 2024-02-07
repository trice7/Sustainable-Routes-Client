import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '../../utils/context/authContext';
import ActivityDetailsCard from '../../components/activityDetailsCard';
import ActivityCard from '../../components/activityCard';
import { getSingleActivity } from '../../api/activityData';

function ViewActivityDetails() {
  const router = useRouter();
  const { id } = router.query;
  const [activity, setActivity] = useState(null);
  const { user } = useAuth();

  useEffect(() => {
    if (id) {
      getSingleActivity(id).then((fetchedDestination) => {
        setActivity(fetchedDestination);
      });
    }
  }, [id]);

  const handleUpdate = () => {
    getSingleActivity(id).then(setDestination);
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

export default ViewActivityDetails;
