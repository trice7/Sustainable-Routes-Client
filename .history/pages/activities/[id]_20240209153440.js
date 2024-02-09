import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import ActivityDetailsCard from '../../components/activityDetailsCard';
import { getSingleActivity } from '../../api/activityData';

function ViewActivityDetails() {
  const router = useRouter();
  const { id } = router.query;
  const [activity, setActivity] = useState(null);
  const [change, setChange] = useState(true);

  useEffect(() => {
    const isMounted = true;
    if (id) {
      getSingleActivity(id).then((fetchedActivity) => {
        if (isMounted && fetchedActivity) {
          setActivity(fetchedActivity);
        }
      });
    
    }
  }, [id, change]);

  const handleUpdate = () => {
    let isMounted = true;
    getSingleActivity(id).then(setActivity);
  };

  return (
    isMounted = false
    <div>
      <div className="content">
        <div className="card-container">
          {activity && (
            <div>
              <ActivityDetailsCard className="destination-card-details" key={activity.id} activity={activity} setChange={setChange} onUpdate={handleUpdate} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ViewActivityDetails;
