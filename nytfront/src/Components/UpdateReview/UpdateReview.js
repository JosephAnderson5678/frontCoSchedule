import {  useLocation } from "react-router-dom";
import { Container,Box } from "@mui/material";
import TextField from '@mui/material/TextField';
import { Button } from "@mui/material";
import React, {  useState, useRef } from "react";
import Rating from '@mui/material/Rating';
import ErrorSuccessAlerts from "../ErrorSuccessAlerts/ErrorSuccessAlerts";
import axios from 'axios';
import Grid from '@mui/material/Unstable_Grid2';
import APIURLS from "../../Constants/APIURLs";

function UpdateReview(props){
    const location = useLocation();
    const bookData = location.state;
    const [ratingValue] = React.useState(bookData.stars);
    const [newRatingValue, setNewRatingValue] = React.useState(0);

    const reviewFieldRef = useRef("");
    const [textFieldErrorMessages, setTextFieldErrorMessages] = useState({
        reviewErrorMessage: "",
      }); // Use it like this because if the client wants more variables added later you can just add them here more easily. 
      const [openError, setOpenError] = useState(false)
      const [openErrorMessage, setOpenErrorMessage] = useState("")
      const [openSuccess, setOpenSuccess] = useState(false)
      const [openSuccessMessage, setOpenSuccessMessage] = useState("");
      const [btnDisabled, setBtnDisabled] = useState(false)

    
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
      /*validate the input and make sure it is not null. Their are simpler ways to do this, but I wanted to show I know how to use validator
      which is important when working with things more complicated than strings.  */
      const validator = require('validator')

      if (validator.isEmpty( reviewFieldRef.current.value) === true){ // true = empty string

        setOpenError(true)  
        setOpenSuccess(false);
        setOpenErrorMessage("Required information incorrect or empty please fix.")
        setOpenSuccessMessage("")
        setTextFieldErrorState(previousState => {
            return { ...previousState, reviewErrorColor: true }
          });
      }else{
        resetAllFields();  // resets the error message and colors once something is properly entered.
      

        axios.put(APIURLS.updateReview +bookData.IDFromReviews, {
          review: reviewFieldRef.current.value,
          stars:  newRatingValue,
          title: bookData.title,
          author: bookData.author,
          NYTSummary: bookData.summary,
      })
          .then((response) => {
              //update the other components so they correctly display the updated data
              setOpenSuccess(true);
              setOpenError(false);
              setOpenErrorMessage("")
              setOpenSuccessMessage(" Review has been updated in the database")
              setBtnDisabled(true); // disable button so they can't accidently try deleting the same review twice.

          })
            .catch((error) => {
              setOpenError(true)  
              setOpenSuccess(false);
              setOpenErrorMessage("Error updating database please try again later.")
              setOpenSuccessMessage("")

            });


        }
        
      }
      
    


    return (
        <>
        <h1 style={{ fontWeight:'bold',  textAlign: 'center', fontSize:'30px', paddingBottom:'30px'}}> Update Your Review of a Book </h1>
        <Container maxWidth="lg"  sx={{ borderColor: 'black', borderStyle:'solid', borderRadius: '16px' , pb: 5, pt: 5, marginTop: -5}}>
          <p>title: {bookData.title}</p>
          <p>author: {bookData.author}</p>
          <div>summary: {bookData.summary}</div>
          <div>Current review: {bookData.review}</div>
          {bookData.fromGetAllReviews &&  <p>Current Rating:  </p>}
          {bookData.fromGetAllReviews &&  <Rating name="half-rating" defaultValue={0} precision={0.5}   size="large" value={ratingValue} readOnly/>}
        </Container>
        <h1 style={{ fontWeight:'bold',  textAlign: 'center', fontSize:'30px', paddingBottom:'20px'}}> Updated Details: </h1>
       <ErrorSuccessAlerts
       openError={openError}
       setOpenError={setOpenError}
       openSuccess={openSuccess}
       setOpenSuccess={setOpenSuccess}
       openErrorMessage={openErrorMessage}
       setOpenErrorMessage={setOpenErrorMessage}
       openSuccessMessage={openSuccessMessage}
       setOpenSuccessMessage={setOpenSuccessMessage}
       ></ErrorSuccessAlerts>

       <Box style={{ width: 350, height: 55, margin: "10px", marginLeft: 'auto', marginRight: 'auto', }} >
       <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        >
        <TextField
          id="outlined-helperText"
          label="Review:"
          inputRef={reviewFieldRef}
          helperText={textFieldErrorMessages.reviewErrorMessage}
          error={textFieldErrorState.reviewErrorColor}
          multiline
          inputProps={{
            style: {
              height: "250px",
              width: "300px"
            },
          }}
          />

        <Rating name="half-rating" defaultValue={0} precision={0.5}   size="large" value={newRatingValue}
          onChange={(event, newValue) => {
            setNewRatingValue(newValue);
        }} />
        <Button variant="contained" size="large" disabled={btnDisabled} style={{ width: 200, height: 55, margin: "10px", marginLeft: 'auto', marginRight: 'auto', }} onClick={readTextFieldValue} >Add Review</Button>
      </Grid>
       </Box>
    
              </>
    )
}

export default UpdateReview;