import React, { useState, useEffect } from 'react'
import MainLayout from '../layout/MainLayout'
import { useLocation, useNavigate } from 'react-router-dom'
import { searchMusicKeyword } from '../api/musicService';
import { Row, Col } from 'react-bootstrap'
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { BsSearch, BsFillPlusCircleFill } from "react-icons/bs";
import "../css/page/SearchResultPage.css"
const SearchResultPage = () => {
  const location = useLocation();
  const searchResults = location.state || [];
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [searchInResult, setSearchInResult] = useState(searchResults);
  console.log("searchResult",searchInResult)
  useEffect(() => {
    setSearchInResult(searchResults);
  }, [searchResults]);
  const handleSearch = () => {
    // Perform the search again with the new search query
    searchMusicKeyword(searchQuery).then((response)=>{
      setSearchInResult(response.data);
      navigate('/search', { state: response.data });
    }).catch((err)=>{
      console.error(err);
    })
  };
  return (
    <MainLayout>
      <h1 className='search-result-title'>검색 결과</h1>
      <InputGroup className="mb-0">
        <Form.Control
          className='search-input'
          placeholder="search"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          value={searchQuery} 
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <Button variant="outline-secondary" id="button-addon2" onClick={handleSearch}>
          <BsSearch className='search-icon'/>
        </Button>
      </InputGroup>
      {searchInResult.length === 0 ? (
        <p>No results found.</p>
      ) : (
        searchInResult.map((result) => (
          <Row key={result.id} className="result-item">
            <Col><Image src={result.image64} rounded/></Col>
            <Col><p>{result.title}</p></Col>
            <Col><p>{result.artist}</p></Col>
            <Col><BsFillPlusCircleFill className='plus-icon'/></Col>
          </Row>
        ))
      )}
    </MainLayout>
  )
}

export default SearchResultPage