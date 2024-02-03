import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';

function destinationCard({ activities }) {
  return (
    <Card>
      {activities && <Card.Img variant="top" src={activities.image} alt={activities.name} />}
      <Card.Body>
        <Card.Title>{activities.name}</Card.Title>
        <p className="card-text bold">Description: {activities && activities.description}</p>
      </Card.Body>
    </Card>
  );
}

destinationCard.propTypes = {
  activities: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
    id: PropTypes.string,
  }).isRequired,
};

export default DestinationCard;
