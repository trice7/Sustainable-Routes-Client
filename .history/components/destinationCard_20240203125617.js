import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';

function DestinationCard({ location }) {
  return (
    <Link href={`/details/${location && location.id}`} passHref>
      <Card>
        {location && <Card.Img variant="top" src={location.image} alt={location.name} />}
        <Card.Body>
          <Card.Title>{location && location.name}</Card.Title>
          <p className="card-text bold">Description: {location && location.description}</p>
        </Card.Body>
      </Card>
    </Link>
  );
}

DestinationCard.propTypes = {
  location: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
    id: PropTypes.number,
  }).isRequired,
};

export default DestinationCard;
