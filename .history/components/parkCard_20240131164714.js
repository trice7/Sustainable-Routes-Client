import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Link from 'next/link';
import { deletePlayer } from '../api/teamData';

function TeamMemberCard({ destination, onUpdate }) {
  const deleteThisPlayer = () => {
    if (window.confirm(`Delete ${destination.name}?`)) {
      deletePlayer(destination.firebaseKey).then(() => onUpdate());
    }
  };

  return (
    <Card>
      {destination && <Card.Img variant="top" src={destination.image} alt={destination.name} />}
      <Card.Body>
        <Card.Title>{destination.name}</Card.Title>
        <p className="card-text bold">Description: {destination && destination.description}</p>
        <Link href={`/team/edit/${destination.id}`} passHref>
          <Button variant="info">EDIT</Button>
        </Link>
        <Button variant="danger" onClick={deleteThisPlayer} className="m-2">
          DELETE
        </Button>
      </Card.Body>
    </Card>
  );
}

TeamMemberCard.propTypes = {
  destination: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
    id: PropTypes.string,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default TeamMemberCard;
