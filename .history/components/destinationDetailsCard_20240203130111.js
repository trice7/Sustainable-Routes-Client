import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';

function DestinationDetailsCard({ activity }) {
  return (
    <Card>
      {activity && <Card.Img variant="top" src={activity.image} alt={activity.name} />}
      <Card.Body>
        <Card.Title>{activity && location.name}</Card.Title>
        <p className="card-text bold">Description: {location && location.description}</p>
      </Card.Body>
    </Card>
  );
}

DestinationDetailsCard.propTypes = {
  activity: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
    id: PropTypes.string,
  }).isRequired,
};

export default DestinationDetailsCard;
