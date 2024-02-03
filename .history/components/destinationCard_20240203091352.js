import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';

function DestinationCard({ destination }) {
  console.warn('locations', location);
  return (
    <Card>
      {destination && <Card.Img variant="top" src={destination.image} alt={destination.name} />}
      <Card.Body>
        <Card.Title>{destination.name}</Card.Title>
        <p className="card-text bold">Description: {location && location.description}</p>
      </Card.Body>
    </Card>
  );
}

DestinationCard.propTypes = {
  location: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
    id: PropTypes.string,
  }).isRequired,
};

export default DestinationCard;
