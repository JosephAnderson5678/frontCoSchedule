import TextField from '@mui/material/TextField';
import { Button } from "@mui/material";
import React, {  useState, useRef } from "react";
import { Container } from "@mui/material";
import axios from 'axios';
import Grid from '@mui/material/Unstable_Grid2';
import ShowAPICard from '../ShowAPICard/ShowAPICard';
import APIURLS from "../../Constants/APIURLs";

function SearchReviewByTitle() {
    const textFieldRef = useRef("");
    const [books,getBooks]=useState();
    const fromSearchReviewByTitle=true;
    const readTextFieldValue = () => {
  
      axios.get(APIURLS.searchReviewByTitle+ textFieldRef.current.value)
      .then(response => {
       const allBooks= response.data.book;
       getBooks(allBooks);
       })
   }
      

    return (
    <>
      <header style={{ fontWeight:'bold',  textAlign: 'center', fontSize:'30px', paddingBottom:'30px'}}> Title Review to Search for:</header>
      <Container maxWidth="sm" style={{display:"flex", alignItems:"center"}} >
        <TextField
        id="outlined-helperText"
        label="Title To Search For"
        inputRef={textFieldRef}
        style={{padding:'10px'}}
        />
        <Button variant="contained" style={{ width: 200, height: 55 }} onClick={readTextFieldValue} >Search</Button>
      </Container>
      <h1 style={{textAlign: 'center'}} >Book results:</h1>
        <Grid container spacing={{ xs: 0, md: 0 }} columns={{ xs: 4, sm: 8, md: 12 }}  rowSpacing={3} >
          {books?.map(book => ( 
            <Grid xs={2} sm={4} md={4} key={book.id}>
              <ShowAPICard 
              author= {book.author}
              title= {book.title}
              summary= {book.NYTSummary} 
              review={book.review}
              stars= {book.stars} 
              fromSearchReviewByTitle={fromSearchReviewByTitle}
              IDFromReviews={book.id}
            ></ShowAPICard>
            </Grid>
       ))}
       </Grid>
        </>
    )
}

export default SearchReviewByTitle;