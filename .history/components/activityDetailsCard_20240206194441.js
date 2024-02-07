import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import { Button from 'bootstrap';

function ActivityDetailsCard({ activity }) {
  console.warn(activity);
  return (
    <Card>
      <Button variant="primary" className="edit-activity-btn">EDIT</Button>
      <Button variant="danger" className="delete-activity-btn">DELETE</Button>
      <Card.Body>
        <Card.Title>{activity && activity.name}</Card.Title>
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
