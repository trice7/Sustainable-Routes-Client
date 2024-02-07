import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';

function ActivityDetailsCard({ activity }) {
  console.warn(activity);
  return (
    <Card>
      <Card.Body>
        <Card.Title>{activity && activity.name}</Card.Title>
        <Button variant="primary" className="m-2">✏️</Button>
        <Button variant="primary" className="m-2">✏️</Button>
        <p className="card-text bold">Description: {activity && activity.description}</p>
      </Card.Body>
    </Card>
  );
}

ActivityDetailsCard.propTypes = {
  activity: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
    id: PropTypes.number,
  }).isRequired,
};
export default ActivityDetailsCard;
