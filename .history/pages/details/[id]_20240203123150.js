import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { getSingleDestination from '../../api/destinationData';

export default function DestinationPage() {
  const router = useRouter();
  const { id } = router.query;
  const [destination, setDestination] = useState(null);

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
          {location && location.map((loc) => (
            loc.activity && loc.activity.map((activity) => (
              <DestinationDetailsCard className="destination-card-details" key={activity.id} activity={activity} onUpdate={handleUpdate} />
            ))
          ))}
        </div>
      </div>
    </div>
  );
}
