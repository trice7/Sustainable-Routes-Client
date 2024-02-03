import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';

function DestinationCard({ location }) {
  return (
    <Card>
      {location && <Card.Img variant="top" src={location.image} alt={location.name} />}
      <Card.Body>
        <Card.Title>{location.name}</Card.Title>
        <p className="card-text bold">Description: {location && location.description}</p>
      </Card.Body>
      <Link href={`/book/${bookObj.firebaseKey}`} passHref>
            <Button variant="primary" className="m-2">VIEW</Button>
          </Link>
    </Card>
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
