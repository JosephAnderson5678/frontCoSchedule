import { useLocation } from "react-router-dom";
import { Container,Box } from "@mui/material";
import { Button } from "@mui/material";
import React, { useState, } from "react";
import Rating from '@mui/material/Rating';
import ErrorSuccessAlerts from "../ErrorSuccessAlerts/ErrorSuccessAlerts";
import axios from 'axios';
import APIURLS from "../../Constants/APIURLs";

function DeleteReview(props){
    const location = useLocation();
    const bookData = location.state;
    const [ratingValue] = React.useState(bookData.stars);
    const [btnDisabled, setBtnDisabled] = useState(false)
    const [textFieldErrorMessages, setTextFieldErrorMessages] = useState({
        reviewErrorMessage: "",
      });  
    const [openError, setOpenError] = useState(false)
    const [openErrorMessage, setOpenErrorMessage] = useState("")
    const [openSuccess, setOpenSuccess] = useState(false)
    const [openSuccessMessage, setOpenSuccessMessage] = useState("");
        
    
       // this controls whether or not to highlight the textbox and its colors in red to let the user know if their is an error. 
    const [textFieldErrorState, setTextFieldErrorState] = useState({
        reviewErrorColor: false,
      });

      
    const DeleteReviewAxios = () => {
        axios.delete(APIURLS.deleteReview+bookData.IDFromReviews, {
          })
          .then(response => {
             //update the other components so they correctly display the updated data
             setOpenSuccess(true);
             setOpenError(false);
             setOpenErrorMessage("")
             setOpenSuccessMessage(" Review has been deleted from the database")
             setBtnDisabled(true); // disable button so they can't accidently try deleting the same review twice.
            })
          .catch(error => {
            if (error.response) {
              console.log(error.response.data);
              console.log(error.response.status);
              console.log(error.response.headers);
              setOpenError(true)  
              setOpenSuccess(false);
              setOpenErrorMessage("Error removing book from database please try again later.")
              setOpenSuccessMessage("")

            } else if (error.request) {
              console.log(error.request);
              setOpenError(true)  
              setOpenSuccess(false);
              setOpenErrorMessage("Error removing book from database please try again later.")
              setOpenSuccessMessage("")

            } else {
              console.log('Error', error.message);
            }
            console.log(error.config);
          });
        }
        
      
      
    


    return (
        <>
        <h1 style={{ fontWeight:'bold',  textAlign: 'center', fontSize:'30px', paddingBottom:'30px'}}> Delete Your Review of a Book </h1>
        <Container maxWidth="lg"  sx={{ borderColor: 'black', borderStyle:'solid', borderRadius: '16px' , pb: 5, pt: 5, marginTop: -5}}>
          <p>title: {bookData.title}</p>
          <p>author: {bookData.author}</p>
          <div>summary: {bookData.summary}</div>
          <div>Current review: {bookData.review}</div>
          {bookData.fromGetAllReviews &&  <p>Current Rating:  </p>}
          {bookData.fromGetAllReviews &&  <Rating name="half-rating" defaultValue={0} precision={0.5}   size="large" value={ratingValue} readOnly/>}
        </Container>

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

       <Box style={{ width: 200, height: 55, margin: "10px", marginLeft: 'auto', marginRight: 'auto', }} >
          <Button variant="contained" size="large" disabled={btnDisabled} style={{ width: 200, height: 55, margin: "10px", marginLeft: 'auto', marginRight: 'auto', }} onClick={DeleteReviewAxios} >Delete Review</Button>
       </Box>
      
    
              </>
    )
}

export default DeleteReview;