import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Link from 'next/link';
import { deletePlayer } from '../api/teamData';

function TeamMemberCard({ teamMemberObj, onUpdate }) {
  const deleteThisPlayer = () => {
    if (window.confirm(`Delete ${teamMemberObj.name}?`)) {
      deletePlayer(teamMemberObj.firebaseKey).then(() => onUpdate());
    }
  };

  return (
    <Card>
      {teamMemberObj && <Card.Img variant="top" src={teamMemberObj.image} alt={teamMemberObj.name} />}
      <Card.Body>
        <Card.Title>{teamMemberObj.name}</Card.Title>
        <p className="card-text bold">Position: {teamMemberObj && teamMemberObj.position}</p>
        <Link href={`/team/edit/${teamMemberObj.firebaseKey}`} passHref>
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
  teamMemberObj: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string,
    position: PropTypes.string,
    firebaseKey: PropTypes.string,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default TeamMemberCard;
