import React, from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';
import Link from 'next/link';
import { toggleFavorite } from '../api/activityData';

function ActivityDetailsCard({ activity }) {
  // const [favorites, setFavorites] = useState([]);

  // const handleFavorite = () => {
  //   setFavorites([...favorites, activity.id]);
  // };

  return (
    <Card>
      <Card.Body>
        <Card.Title>{activity && activity.name}</Card.Title>
        <Link href={`/activities/edit/${activity.id}`} passHref>
          <Button variant="primary" className="m-2">✏️</Button>
        </Link>
        <Button className="m-2">🗑️</Button>
        <Button className="m-2" onClick={toggleFavorite}>⭐</Button>
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
