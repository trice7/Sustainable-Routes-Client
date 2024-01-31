import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import { deletePlayer } from '../api/teamData';

function TeamMemberCard({ destination, onUpdate }) {
  const deleteThisDestination = () => {
    if (window.confirm(`Delete ${destination.name}?`)) {
      deletePlayer(destination.id).then(() => onUpdate());
    }
  };

  return (
    <Card>
      {destination && <Card.Img variant="top" src={destination.image} alt={destination.name} />}
      <Card.Body>
        <Card.Title>{destination.name}</Card.Title>
        <p className="card-text bold">Description: {destination && destination.description}</p>
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
