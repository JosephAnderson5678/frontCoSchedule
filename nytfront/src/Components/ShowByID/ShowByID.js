import { useParams } from "react-router-dom";
import axios from 'axios';
import React, {  useState, useEffect } from "react";
import { Container } from "@mui/material";
import Rating from '@mui/material/Rating';
import APIURLS from "../../Constants/APIURLs";
import Button from '@mui/material/Button';
import {
    Link as RRLink, // the RRLink is because material UI also uses link this clears up any confusion.
     } from "react-router-dom";
function ShowByID(props){
    let { id } = useParams(); 
    const [bookData,getBookData]=useState();
    const [ratingValue, setRatingValue ] = React.useState(0);
    const fromSearchReviewByTitle=true;

    useEffect(() => {

    

            axios.get(APIURLS.getByID+id)
            .then(response => {
              const allBooks= response.data.book;
         getBookData(allBooks);
         
          const newCount = allBooks.stars
          setRatingValue(newCount)
       
            })
        
        
    },[]);



    return (
           <>
           <h1 style={{ fontWeight:'bold',  textAlign: 'center', fontSize:'30px', paddingBottom:'30px'}}> Review of Book: </h1>
           
        <Container maxWidth="lg"  sx={{ borderColor: 'black', borderStyle:'solid', borderRadius: '16px' , pb: 5, pt: 5, marginTop: -5}}>
        <p><strong>Title: </strong> {bookData?.title}</p>
          <p><strong>Author: </strong> {bookData?.author}</p>
          <div><strong>Summary: </strong> {bookData?.NYTSummary}</div>
          <div> <strong>Review: </strong> {bookData?.review}</div>
          <p><strong>Rating: </strong></p>
          <Rating name="half-rating" defaultValue={0} precision={0.5}   size="large" value={ratingValue} readOnly/>

        </Container>
        <Button size="small" component={RRLink}   to={'/updatereview/'} state={bookData} fromShowByID={fromSearchReviewByTitle}>Update Review and Rating</Button>
        <Button size="small" component={RRLink}   to={'/deletereview/'} state={bookData} fromShowByID={fromSearchReviewByTitle}>Delete Review</Button>
           </> 
    )

       
}

export default ShowByID;