import TextField from '@mui/material/TextField';
import { Button } from "@mui/material";
import React, { useRef } from "react";
import { useNavigate } from 'react-router-dom';
import { Container } from "@mui/material";

function SearchTitleNYT() {
    const textFieldRef = useRef("");
    const navigate = useNavigate();

    const readTextFieldValue = () => {
        console.log(textFieldRef.current.value);
        navigate('/showbyTitleNYT/'+textFieldRef.current.value);
      }

    return (
        <>
        <header style={{ fontWeight:'bold',  textAlign: 'center', fontSize:'30px', paddingBottom:'30px'}}> Title to Search for (exact title only):</header>
        <Container maxWidth="sm" style={{display:"flex", alignItems:"center"}} >
            <TextField
            id="outlined-helperText"
            label="Title To Search For"
            inputRef={textFieldRef}
            style={{padding:'10px'}}
            />
            <Button variant="contained" style={{ width: 200, height: 55 }} onClick={readTextFieldValue} >Search</Button>
        </Container>
        </>
    )
}

export default SearchTitleNYT;