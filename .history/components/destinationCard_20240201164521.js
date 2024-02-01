import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';

function destinationCard({ destination }) {
  return (
    <Card>
      {destination && <Card.Img variant="top" src={activities.image} alt={destination.name} />}
      <Card.Body>
        <Card.Title>{destination.name}</Card.Title>
        <p className="card-text bold">Description: {destination && destination.description}</p>
      </Card.Body>
    </Card>
  );
}

destinationCard.propTypes = {
  destination: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
    id: PropTypes.string,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default destinationCard;
