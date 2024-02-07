import React from 'react';
import Link from 'next/link';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';

function ActivityCard({ activity }) {
  console.warn(activity);
  return (
    <Card>
      <Card.Body>

          {activity.activities?.map((taco) => (
            <ActivityCard key={taco.id} activity={taco} />
          ))}
          {/* <Button variant="danger" onClick={deleteThisActivity} className="m-2">
            DELETE
          </Button> */}
        </CardGroup>
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
  }).isRequired,
};
export default ActivityCard;
