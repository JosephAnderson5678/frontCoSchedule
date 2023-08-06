import './App.css';
import axios from 'axios';
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SearchAuthorNYT from './Components/NYTComponents/SearchAuthorNYT/SearchAuthorNYT';
import ShowByAuthorNYT from './Components/NYTComponents/SearchAuthorNYT/ShowByAuthorNYT/ShowByAuthorNYT';
import ReviewRate from './Components/ReviewRate/ReviewRate';
import ResponsiveAppBar from './Components/Navbar/ResponseiveAppBar';
import GetAllReviews from './Components/GetAllReviews/GetAllReviews';
import UpdateReview from './Components/UpdateReview/UpdateReview';
import DeleteReview from './Components/DeleteReview/DeleteReview';
import SearchTitleNYT from './Components/NYTComponents/SearchTitleNYT/SearchTitleNYT';
import ShowByTitleNYT from './Components/NYTComponents/SearchTitleNYT/ShowByTitleNYT/ShowByTitleNYT';
import SearchReviewByAuthor from './Components/SearchReviewByAuthor/SearchReviewByAuthor';
import SearchReviewByTitle from './Components/SearchReviewByTitle/SearchReviewByTitle';
import ShowByID from './Components/ShowByID/ShowByID';
import FourOhFourNotFound from './Components/FourOhFourNotFound/FourOhFourNotFound';
import HomePage from './Components/HomePage/HomePage';
function App() {

  return (
    <>
    <Router>
    <ResponsiveAppBar></ResponsiveAppBar>


      <Routes>
        {/* NYT Routes*/}      
        <Route path="/searchauthorNYT/" element={<SearchAuthorNYT />} />
        <Route path="/showbyauthorNYT/:author" element={<ShowByAuthorNYT />} />
        <Route path="/searchtitleNYT/" element={<SearchTitleNYT />} />
        <Route path="/showbytitleNYT/:title" element={<ShowByTitleNYT />} />
        {/* internal database/site routes*/}      
        <Route path="/reviewrate/" element={<ReviewRate />} />
        <Route path="/getallreviews/" element={<GetAllReviews/>}/>
        <Route path="/updatereview/" element={<UpdateReview/>}/>
        <Route path="/deletereview/" element={<DeleteReview />} />
        <Route path="/searchreviewbyauthor/" element={<SearchReviewByAuthor/>}/>
        <Route path="/searchreviewbytitle/" element={<SearchReviewByTitle/>}/>
        <Route path="/showbyid/:id" element={<ShowByID />} />

        <Route path='*' element={<FourOhFourNotFound />}/>
        <Route path="/" element={ <HomePage/> }/>



      </Routes>
    </Router>

    </>
  );
}

export default App;
