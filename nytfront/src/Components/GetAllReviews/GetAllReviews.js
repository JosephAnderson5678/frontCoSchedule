import Grid from '@mui/material/Unstable_Grid2';
import APIURLS from '../../Constants/APIURLs'
import axios from 'axios';
import React, { useEffect, useState, useRef } from "react";
import ShowAPICard from '../ShowAPICard/ShowAPICard';

function GetAllReviews(props){

    const [books,getBooks]=useState();
    const fromGetAllReviews=true;
   
       
    useEffect(() => {
        axios.get(APIURLS.getAllReviews)
        .then(response => {
            console.log(response.data.books);
            const allBooks= response.data.books;
            getBooks(allBooks);
        })}, []);
        
        return (
     

            <>
             <h1 style={{textAlign: 'center'}} >Book results.</h1>
          <Grid container spacing={{ xs: 0, md: 0 }} columns={{ xs: 4, sm: 8, md: 12 }}  rowSpacing={3} >
           {books?.map(book => ( 
             <Grid xs={2} sm={4} md={4} key={book.id}>
             <ShowAPICard 
             author= {book.author}
             title= {book.title}
             summary= {book.NYTSummary} 
             review={book.review}
             stars= {book.stars} 
             fromGetAllReviews={fromGetAllReviews}
             IDFromReviews={book.id}
             ></ShowAPICard>
       
         </Grid>
       ))}
       
       </Grid>
       
             
        
       
               </>
       
           );
       }
      

export default GetAllReviews