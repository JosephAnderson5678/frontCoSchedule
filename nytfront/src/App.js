import './App.css';
import axios from 'axios';
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SearchAuthorNYT from './Components/SearchAuthor/SearchAuthorNYT';
import ShowByAuthorNYT from './Components/SearchAuthor/ShowByAuthorNYT/ShowByAuthorNYT';
import ReviewRate from './Components/ReviewRate/ReviewRate';
import ResponsiveAppBar from './Components/Navbar/ResponseiveAppBar';
import GetAllReviews from './Components/GetAllReviews/GetAllReviews';
import UpdateReview from './Components/UpdateReview/UpdateReview';
import DeleteReview from './Components/DeleteReview/DeleteReview';
import SearchTitleNYT from './Components/SearchTitleNYT/SearchTitleNYT';
import ShowByTitleNYT from './Components/SearchTitleNYT/ShowByTitleNYT/ShowByTitleNYT';
function App() {

  return (
    <>
    <Router>
    <ResponsiveAppBar></ResponsiveAppBar>


      <Routes>      
        <Route path="/searchauthorNYT/" element={<SearchAuthorNYT />} />
        <Route path="/showbyauthorNYT/:author" element={<ShowByAuthorNYT />} />
        <Route path="/searchtitleNYT/" element={<SearchTitleNYT />} />
        <Route path="/showbytitleNYT/:title" element={<ShowByTitleNYT />} />
        <Route path="/reviewrate/" element={<ReviewRate />} />
        <Route path="/getallreviews/" element={<GetAllReviews/>}/>
        <Route path="/updatereview/" element={<UpdateReview/>}/>
        <Route path="/deletereview/" element={<DeleteReview />} />


      </Routes>
    </Router>

    </>
  );
}

export default App;
