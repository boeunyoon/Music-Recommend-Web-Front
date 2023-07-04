import React from 'react'
import MainLayout from '../layout/MainLayout'
import { useLocation } from 'react-router-dom'
const SearchResultPage = () => {
  const location = useLocation();
  const searchResults = location.state;
  console.log("searchResults",searchResults)
  return (
    <MainLayout>
      <h1>검색 결과</h1>
    </MainLayout>
  )
}

export default SearchResultPage