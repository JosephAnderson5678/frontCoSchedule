import './App.css';
import axios from 'axios';
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SearchAuthor from './Components/SearchAuthor/SearchAuthor';
import ShowByAuthor from './Components/ShowByAuthor/ShowByAuthor';
import ReviewRate from './Components/ReviewRate/ReviewRate';

function App() {

  return (
    <>
    <Router>
   

      <Routes>
      <Route path="/searchauthor/" element={<SearchAuthor />} />
      <Route path="/showbyauthor/:author" element={<ShowByAuthor />} />
      <Route path="/reviewrate/" element={<ReviewRate />} />

      </Routes>
    </Router>

    </>
  );
}

export default App;
