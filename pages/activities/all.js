/* eslint-disable react-hooks/exhaustive-deps */
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import ActivityCard from '../../components/ActivityCard';
import { getActivities } from '../../api/activityData';

function ViewAllActivities() {
  // TODO: Set a state for books
  const [activities, setActivities] = useState([]);

  // TODO: create a function that makes the API call to get all the books
  const getAllTheActivities = () => {
    getActivities().then(setActivities);
  };

  // TODO: make the call to the API to get all the books on component render
  useEffect(() => {
    getAllTheActivities();
  }, []);

  return (
    <div className="text-center my-4">
      <Link href="/activities/new" passHref>
        <Button>Add An Activity</Button>
      </Link>
      <div className="d-flex flex-wrap">
        {/* TODO: map over activities here using ActivityCard component */}
        {activities.map((activity) => (
          <ActivityCard key={activity.firebaseKey} activityObj={activity} />
        ))}
      </div>

    </div>
  );
}

export default ViewAllActivities;
