import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Link from 'next/link';

function ActivityCard({ activityObj }) {
  // FOR DELETE, WE NEED TO REMOVE THE BOOK AND HAVE THE VIEW RERENDER,
  // SO WE PASS THE FUNCTION FROM THE PARENT THAT GETS THE BOOKS
  // const deleteThisBook = () => {
  //   if (window.confirm(`Delete ${bookObj.title}?`)) {
  //     deleteBook(bookObj.firebaseKey).then(() => onUpdate());
  //   }
  // };

  return (
    <Card style={{ width: '18rem', margin: '10px' }}>
      <Card.Body>
        <Card.Title>{activityObj.name}</Card.Title>
        <p className="card-text bold">{activityObj.favorite && <span>Favorite<br /></span> }</p>
        {/* DYNAMIC LINK TO VIEW THE ACTIVITY DETAILS  */}
        <Link href={`/activities/${activityObj.firebaseKey}`} passHref>
          <Button variant="primary" className="m-2">VIEW</Button>
        </Link>
        {/* DYNAMIC LINK TO EDIT THE ACTIVITY DETAILS  */}
        <Link href={`/activities/edit/${activityObj.firebaseKey}`} passHref>
          <Button variant="info">EDIT</Button>
        </Link>
        {/* <Button variant="danger" onClick={deleteThisActivity} className="m-2">
          DELETE
        </Button> */}
      </Card.Body>
    </Card>
  );
}

ActivityCard.propTypes = {
  activityObj: PropTypes.shape({
    name: PropTypes.string,
    destination: PropTypes.string,
    favorite: PropTypes.bool,
    description: PropTypes.string,
    firebaseKey: PropTypes.string,
  }).isRequired,
  // onUpdate: PropTypes.func.isRequired,
};

export default ActivityCard;
