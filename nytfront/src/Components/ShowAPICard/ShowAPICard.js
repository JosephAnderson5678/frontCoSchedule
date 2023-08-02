import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {
  Link as RRLink, // the RRLink is because material UI also uses link this clears up any confusion.
   } from "react-router-dom";
   import React, {} from "react";
   import Rating from '@mui/material/Rating';


function ShowAPICard(props) {

  const bookData = {
    title: props.title,
    author: props.author,
    summary: props.summary,
    fromShowByAuthorNYT: props.fromShowByAuthorNYT,
    fromShowByTitleNYT: props.fromShowByTitleNYT,
    fromGetAllReviews: props.fromGetAllReviews,
    fromSearchReviewByTitle: props.fromSearchReviewByTitle,
    fromSearchReviewByAuthor: props.fromSearchReviewByAuthor,
    IDFromReviews: props.IDFromReviews,
    review: props.review,
    stars: props.stars,
/* Normally I would send in an ID from the API but the NYT API UUID and URI are broken */
  };    
  const [ratingValue, ] = React.useState(bookData.stars);
  return (
  <>
  <Card sx={{ maxWidth: 345 }}>
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
      Title: {bookData.title}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        <p>Author: {bookData.author}</p>
        <div>Summary: {bookData.summary}</div>
        {(bookData.fromGetAllReviews || bookData.fromSearchReviewByTitle || bookData.fromSearchReviewByAuthor) &&  <div>Review: {bookData.review}</div>}
        {(bookData.fromGetAllReviews || bookData.fromSearchReviewByTitle || bookData.fromSearchReviewByAuthor) &&  <Rating name="half-rating" defaultValue={0} precision={0.5}   size="large" value={ratingValue} readOnly/>}
      </Typography>
    </CardContent>
    <CardActions>
      {(bookData.fromShowByAuthorNYT || bookData.fromShowByTitleNYT) &&  <Button size="small" component={RRLink}   to={'/reviewrate/'} state={bookData}>Review and Rate</Button>}
      {(bookData.fromGetAllReviews || bookData.fromSearchReviewByTitle || bookData.fromSearchReviewByAuthor) &&  <Button size="small" component={RRLink}   to={'/updatereview/'} state={bookData}>Update Review and Rating</Button>}
      {(bookData.fromGetAllReviews || bookData.fromSearchReviewByTitle || bookData.fromSearchReviewByAuthor) &&  <Button size="small" component={RRLink}   to={'/deletereview/'} state={bookData}>Delete Review</Button>}
    </CardActions>
    </Card>
        </>
    
      );
    }
    
    export default ShowAPICard;