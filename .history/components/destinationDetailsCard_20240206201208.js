import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';
import Link from 'next/link';

// import onUpdate from '../api/destinationData';
// import deleteActivity from '../api/activityData';

function DestinationDetailsCard({ activity, destinations }) {
  // const deleteThisActivity = () => {
  //   if (window.confirm(`Delete ${activity.description}?`)) {
  //     deleteActivity(activity.id).then(() => onUpdate());
  //   }
  // };

  return (
    <Card>
      {activity && <Card.Img variant="top" src={destinations.image} alt={destinations.name} />}
      <Card.Body>
        <Card.Title>{activity && activity.name}</Card.Title>
        <p className="card-text bold">Description: {activity && activity.description}</p>
        <h5 className="activities-header">Activities</h5>
        <CardGroup className="d-flex align-items-center activity-cards">
          {activities && activities.name}
          <Link href={`/activities/${activity.id}`} passHref>
            <Button variant="primary" className="view-destination-details-btn">VIEW ACTIVITY DETAILS</Button>
          </Link>
          {/* <Button variant="danger" onClick={deleteThisActivity} className="m-2">
            DELETE
          </Button> */}
        </CardGroup>
        <div className="d-flex justify-content-center align-items-center">
          <Button className="add-activity">Add Activity</Button>
        </div>
      </Card.Body>
    </Card>
  );
}

DestinationDetailsCard.propTypes = {
  activity: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
    id: PropTypes.number,
    activities: PropTypes.shape({
      favorite: PropTypes.bool,
      description: PropTypes.string,
    }),
  }).isRequired,
};

export default DestinationDetailsCard;
