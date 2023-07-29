import { Link, useLocation } from "react-router-dom";
import { Container,Grid,Box } from "@mui/material";
import TextField from '@mui/material/TextField';
import { Button } from "@mui/material";
import React, { useEffect, useState, useRef } from "react";
import Rating from '@mui/material/Rating';

function ReviewRate(props){
    const [ratingValue, setRatingValue] = React.useState(0);

    const location = useLocation();
    const bookData = location.state;
    const reviewFieldRef = useRef("");
    var reviewReqMetEmpty=false;
    const [textFieldErrorMessages, setTextFieldErrorMessages] = useState({
        reviewErrorMessage: "",
      }); // Use it like this because if the client wants more variables added later you can just add them here more easily. 


       // this controls whether or not to highlight the textbox and its colors in red to let the user know if their is an error. 
    const [textFieldErrorState, setTextFieldErrorState] = useState({
        reviewErrorColor: false,
      });

      const resetAllFields = ()=>{
        setTextFieldErrorMessages(previousState => {
          return { ...previousState, reviewErrorMessage: "" }
        });
  
        setTextFieldErrorState(previousState => {
          return { ...previousState, reviewErrorColor: false }
        });
  
      }
      const readTextFieldValue = () => {
      
    }


    return (
        <>
        <h1 style={{ fontWeight:'bold',  textAlign: 'center', fontSize:'30px', paddingBottom:'30px'}}> Review Book </h1>
        <Container maxWidth="lg"  sx={{ borderColor: 'black', borderStyle:'solid', borderRadius: '16px' , pb: 5, pt: 5, marginTop: -5}}>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        </Grid>
        <p>
        title: {bookData.title}
        </p>
           <p>
           author: {bookData.author}
           </p>
              <p>
              summary: {bookData.summary}
              </p>
       </Container>
       <Box style={{ width: 200, height: 55, margin: "10px", marginLeft: 'auto', marginRight: 'auto', }} >
       <TextField
          id="outlined-helperText"
          label="Review:"
          inputRef={reviewFieldRef}
          helperText={textFieldErrorMessages.reviewErrorMessage}
          error={textFieldErrorState.reviewErrorColor}
          inputProps={{
            style: {
              height: "250px",
              width: "300px"
            },
          }}
          />

<Rating name="half-rating" defaultValue={0} precision={0.5}   size="large" value={ratingValue}
        onChange={(event, newValue) => {
          setRatingValue(newValue);
        }} />

       <Button variant="contained" size="large" style={{ width: 200, height: 55, margin: "10px", marginLeft: 'auto', marginRight: 'auto', }} >Add Review</Button>
       </Box>

    
              </>
    )
}

export default ReviewRate;