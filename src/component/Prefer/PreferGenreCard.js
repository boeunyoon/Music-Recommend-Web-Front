import React from 'react'
import { Card, Button } from 'react-bootstrap'
const PreferGenreCard = (props) => {
  return (
    <div>
      <Card style={{ width: '15rem', backgroundColor: '#282c34', height: '385px', marginLeft:'10px'}}
        onClick={() => props.onClick()}
      >
        <Card.Img variant="top" src={props.trackInfo.image} />
        <Card.Body>
          <Card.Title>{props.trackInfo.name}</Card.Title>
        </Card.Body>
      </Card>
    </div>
  )
}

export default PreferGenreCard