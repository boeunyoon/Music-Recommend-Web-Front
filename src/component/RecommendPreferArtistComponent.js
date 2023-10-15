import React, { useEffect, useState } from 'react'
import { RecommendPreferArtist } from '../api/musicService'
import { Spinner } from 'react-bootstrap';
import PreferArtist from './Prefer/PreferArtist';
const RecommendPreferArtistComponent = () => {
    const [RecommendArtist, setRecommendArtist] = useState();
    const [Playlist, setPlaylist] = useState();
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        RecommendPreferArtist().then((response) => {
            console.log(response.data);
            setPlaylist(response.data.artist_playlist)
            setRecommendArtist(response.data.top_artist)
            setIsLoading(false)
        })
    }, [])
  if (isLoading) {
    return <div>
        <Spinner animation="border" variant="light" className='loading'/>
    </div>
  }
  return (
    <div>
        {RecommendArtist && RecommendArtist.map((artist, index) =>(
            <PreferArtist
                key={index}
                artist={artist}
                idx={index}
                playlist = {Playlist}
            />
        ))}
    </div>
  )
}

export default RecommendPreferArtistComponent