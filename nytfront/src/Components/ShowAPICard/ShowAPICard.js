import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {
  Link as RRLink, // the RRLink is because material UI also uses link this clears up any confusion.
   } from "react-router-dom";
   import React, { useEffect, useState, useRef } from "react";
   import Rating from '@mui/material/Rating';


function ShowAPICard(props) {

  const bookData = {
    title: props.title,
    author: props.author,
    summary: props.summary,
    fromShowByAuthorNYT: props.fromShowByAuthorNYT,
    fromGetAllReviews: props.fromGetAllReviews,
    IDFromReviews: props.IDFromReviews,
    review: props.review,
    stars: props.stars,

  };    /* Normally I would send in an ID but the NYT API UUID and URI are broken */
  const [ratingValue, setRatingValue] = React.useState(props.stars);


      return (
        <>
     

        <Card sx={{ maxWidth: 345 }}>
      
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Title: {props.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
            <p>
            Author: {props.author}
            </p>
           <div>
            Summary: {props.summary}
           </div>
           {props.fromGetAllReviews &&  <div>Review: {props.review}</div>}
           {props.fromGetAllReviews &&  <Rating name="half-rating" defaultValue={0} precision={0.5}   size="large" value={ratingValue} readOnly/>}

        </Typography>
      </CardContent>
      <CardActions>

      {props.fromShowByAuthorNYT &&  <Button size="small" component={RRLink}   to={'/reviewrate/'} state={bookData}>Review and Rate</Button>}
      {props.fromGetAllReviews &&  <Button size="small" component={RRLink}   to={'/updatereview/'} state={bookData}>Update Review and Rating</Button>}
      {props.fromGetAllReviews &&  <Button size="small" component={RRLink}   to={'/deletereview/'} state={bookData}>Delete Review</Button>}

     
     

      
      </CardActions>
    </Card>
        </>
    
      );
    }
    
    export default ShowAPICard;