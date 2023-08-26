import React from 'react'
import { Card } from 'react-bootstrap'

const PlaylistCard = (props) => {
  return (
    <div>
        <Card style={{ width: '15rem', backgroundColor: '#282c34', height: '385px', marginLeft:'10px' }}
          onClick={() => props.onClick()}
        >
          <Card.Img variant="top" src={props.playlist.image} />
          <Card.Body>
            <Card.Title>{props.playlist.name}</Card.Title>
          </Card.Body>
        </Card>
    </div>
  )
}

export default PlaylistCard