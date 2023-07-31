import {
    Link as RRLink, // the RRLink is because material UI also uses link this clears up any confusion.
     } from "react-router-dom";
     import TextField from '@mui/material/TextField';
     import { Button } from "@mui/material";
     import React, { useEffect, useState, useRef } from "react";
     import { useNavigate } from 'react-router-dom';
     import { Container } from "@mui/material";

function SearchAuthorNYT() {
    const textFieldRef = useRef("");
    const navigate = useNavigate();

    const readTextFieldValue = () => {
        console.log(textFieldRef.current.value);
        navigate('/showbyauthorNYT/'+textFieldRef.current.value);
      }

    return (
        <>
        <header style={{ fontWeight:'bold',  textAlign: 'center', fontSize:'30px', paddingBottom:'30px'}}> Author to Search for:</header>
        <Container maxWidth="sm" style={{display:"flex", alignItems:"center"}} >
            <TextField
            id="outlined-helperText"
            label="Author To Search For"
            inputRef={textFieldRef}
            style={{padding:'10px'}}
            />
            <Button variant="contained" style={{ width: 200, height: 55 }} onClick={readTextFieldValue} >Search</Button>
        </Container>
        </>
    )
}

export default SearchAuthorNYT;