import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from 'axios';
import APIURLS from '../../../../Constants/APIURLs'
import Grid from '@mui/material/Unstable_Grid2';
import ShowAPICard from "../../../ShowAPICard/ShowAPICard";
function ShowByAuthor(props){
    const [books,getBooks]=useState();
    let { author } = useParams(); 


 
    
    useEffect(() => {
        axios.get(APIURLS.searchAuthorAPIURL + author)
       .then(response => {
        const allBooks= response.data.APIResponse;
        getBooks(allBooks);
        })
    },[]);



    return (
     <>
      <h1 style={{textAlign: 'center'}} >Book results.</h1>
      <Grid container spacing={{ xs: 0, md: 0 }} columns={{ xs: 4, sm: 8, md: 12 }}  rowSpacing={3} >
        {books?.map(book => ( 
          <Grid xs={2} sm={4} md={4}>
          {/* Normally this ^^ uses a key, but because we have not assigned it one and the UUID and URI for the NYT API is broken I am skipping it */} 
            <ShowAPICard 
            author= {book.book_author}
            title= {book.book_title}
            summary= {book.summary}  
            fromShowByAuthorNYT= {true}
            ></ShowAPICard>
          </Grid>
))}
      </Grid>
    </>

    );
}

export default ShowByAuthor