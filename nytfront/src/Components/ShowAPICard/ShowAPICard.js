import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {
  Link as RRLink, // the RRLink is because material UI also uses link this clears up any confusion.
   } from "react-router-dom";
   import axios from 'axios';
   import { useState } from 'react';

function ShowAPICard(props) {

  const bookData = {
    title: props.title,
    author: props.author,
    summary: props.summary
  };    /* Normally I would send in an ID but the NYT API UUID and URI are broken */
  

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
           
        </Typography>
      </CardContent>
      <CardActions>
      <Button size="small" component={RRLink}   to={'/reviewrate/'} state={bookData}>Review and Rate</Button>
     

      
      </CardActions>
    </Card>
        </>
    
      );
    }
    
    export default ShowAPICard;