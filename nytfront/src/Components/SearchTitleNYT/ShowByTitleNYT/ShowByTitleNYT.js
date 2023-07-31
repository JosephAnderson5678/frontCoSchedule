import { useParams } from "react-router-dom";
import React, { useEffect, useState, useRef } from "react";
import axios from 'axios';
import Button from '@mui/material/Button';
import APIURLS from '../../../Constants/APIURLs'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import ShowAPICard from "../../ShowAPICard/ShowAPICard";
function ShowByTitleNYT(props){
    const [books,getBooks]=useState();
    const [showData,getShowData]= useState(true);
    let { title } = useParams(); 


 
    
    useEffect(() => {
   
        axios.get(APIURLS.searchTitleAPIURL + title)
       .then(response => {
        console.log(response.data);
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
            fromShowByAuthorNYT= {true} // {/* DO NOT REMOVE: This is title not author but keep it this way it is used to configure some stuff in ShowAPICard */}
            ></ShowAPICard>
          </Grid>
))}

      </Grid>
    </>

    );
}

export default ShowByTitleNYT