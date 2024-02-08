import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';
import Link from 'next/link';
import ActivityCard from './activityCard';


function DestinationDetailsCard({ activity }) {
  return (
    <Card>
      {activity && <Card.Img variant="top" src={activity.image} alt={activity.name} />}
      <Card.Body>
        <Card.Title>{activity && activity.name}</Card.Title>
        <p className="card-text bold">Description: {activity && activity.description}</p>
        <h5 className="activities-header">Activities</h5>
        <CardGroup className="d-flex align-items-center activity-cards">
          {activity.activities?.map((taco) => (
            <ActivityCard key={taco.id} activity={taco} />
          ))}
        </CardGroup>
        <div className="d-flex justify-content-center align-items-center">
          <Link href="/activities/new">
          <Button className="add-activity">Add Activity</Button>
          </Link>
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
    activities: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        favorite: PropTypes.bool,
        description: PropTypes.string,
      }),
    ),
  }).isRequired,
};

export default DestinationDetailsCard;
