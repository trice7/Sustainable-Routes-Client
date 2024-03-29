import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import ActivityDetailsCard from '../../components/activityDetailsCard';
import { getSingleActivity } from '../../api/activityData';

function ViewActivityDetails() {
  const router = useRouter();
  const { id } = router.query;
  const [activity, setActivity] = useState(null);
  const 

  useEffect(() => {
    if (id) {
      getSingleActivity(id).then((fetchedActivity) => {
        setActivity(fetchedActivity);
      });
    }
  }, [id]);

  const handleUpdate = () => {
    getSingleActivity(id).then(setActivity);
  };

  return (
    <div>
      <div className="content">
        <div className="card-container">
          {activity && (
            <div>
              <ActivityDetailsCard className="destination-card-details" key={activity.id} activity={activity} onUpdate={handleUpdate} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ViewActivityDetails;
