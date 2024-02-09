import React from 'react';
import Link from 'next/link';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import { propTypes } from 'react-bootstrap/esm/Image';

function ActivityCard({ activity }) {
  return (
    <Card>
      <Card.Body>
        <p className="card-text bold">Description: {activity && activity.description}</p>
        <Link href={`/activities/${activity.id}`} passHref>
          <p className="card-text bold">
            Tags: {activity && activity.tags && activity.tags.map((tagObj) => tagObj.tag.label).join(', ')}
          </p>
          <Button variant="primary" className="m-2">VIEW ACTIVITY INFO</Button>
        </Link>
      </Card.Body>
    </Card>
  );
}

ActivityCard.propTypes = {
  activity: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
    id: PropTypes.number,
    tags: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        tag: PropTypes.shape({
          id: PropTypes.number.isRequired,
          label: PropTypes.string.isRequired,
        }).isRequired,
      }),
    ).isRequired,
    location: PropTypes.shape({
      id: PropTypes.number,
    }),
  }).isRequired,
};
export default ActivityCard;
