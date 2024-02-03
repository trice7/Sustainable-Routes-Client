
1 of 1 unhandled error

Unhandled Runtime Error
TypeError: Cannot read properties of undefined (reading 'name')

Source
components\destinationCard.js (12:30) @ DestinationCard

  10 | {location && <Card.Img variant="top" src={location.image} alt={location.name} />}
  11 | <Card.Body>
> 12 |   <Card.Title>{location.name}</Card.Title>
     |                        ^
  13 |   <p className="card-text bold">Description: {location && location.description}</p>
  14 | </Card.Body>
  15 | <Link href={`/activities/${location.id}`} passHref>
