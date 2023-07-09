import React, { useEffect, useState } from 'react'
import MainLayout from '../layout/MainLayout'
import "../css/page/UserPlaylist.css"
import { getUserplaylist } from '../api/playlistService'
import { Col, Row } from 'react-bootstrap'
import Image from 'react-bootstrap/Image';
const UserPlaylist = () => {
  const [playlist, setPlaylist] = useState([]);
  useEffect(()=>{
    fetchPlaylist()
    console.log(playlist);
  },[])
  const fetchPlaylist=()=>{
    getUserplaylist().then((response)=>{
      // console.log(response.data)
      setPlaylist(response.data);
    }).catch((err)=>{
      console.error(err);
    })
  }
  console.log(playlist)
  return (
    <MainLayout>
        <h1 className='playlist-title'>Playlist</h1>
        <hr/>
        {playlist&&playlist.map((result)=>(
            <Row key={result.id} className='playlist-result'
              style={{marginTop: '5px', padding: '5px', alignItems:'center'}}
            >
              <Col><Image src={result.image64} rounded/></Col>
              <Col><p>{result.title}</p></Col>
              <Col><p>{result.artist}</p></Col>
            </Row>
        ))}
    </MainLayout>
  )
}

export default UserPlaylist