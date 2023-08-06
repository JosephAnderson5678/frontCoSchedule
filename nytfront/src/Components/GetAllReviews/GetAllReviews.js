import Grid from '@mui/material/Unstable_Grid2';
import APIURLS from '../../Constants/APIURLs'
import axios from 'axios';
import React, { useEffect, useState,  } from "react";
import { DataGrid } from '@mui/x-data-grid';
import {
    Link as RRLink, // the RRLink is because material UI also uses link this clears up any confusion.
     } from "react-router-dom";
import ShowAPICard from '../ShowAPICard/ShowAPICard';
import Rating from '@mui/material/Rating';
import { Button } from "@mui/material";

function GetAllReviews(props){

    const [books,getBooks]=useState();
    const fromGetAllReviews=true;
    const [showSummaryOrTable, setshowSummaryOrTable] = React.useState(true);
    const columns = [
   
        {
          field: 'title',
          headerName: 'Title',
          width: 150,
          editable: false,
          renderCell: (params) => {
            return (
            <RRLink to={'/showByID/'+params.row.id}>{params.value}</RRLink>
            );
          },
        },
        {
          field: 'author',
          headerName: 'Author',
          width: 150,
          editable:false ,
        },
        {
            field: 'stars',
            headerName: 'Stars',
            width: 200,
            editable: false,
            renderCell: (params) => {
              return (
              <Rating name="half-rating" defaultValue={0} precision={0.5}   size="large" value={params.row.stars} readOnly/>

              );
            },
          },
        {
            field: 'NYTSummary',
            headerName: 'Summary',
            width: 300,
            editable:false ,
          },
          {
            field: 'review',
            headerName: 'Review',
            width: 300,
            editable:false ,
          },
       
     
      ];
       
    useEffect(() => {
        axios.get(APIURLS.getAllReviews)
        .then(response => {
            const allBooks= response.data.books;
            getBooks(allBooks);
        })}, []);
        
        return (
        <>
        <h1 style={{textAlign: 'center'}} >Book results:</h1>
        <Button 
            type='submit'
            variant='contained'
            onClick={() =>  setshowSummaryOrTable(!showSummaryOrTable)}>
            {showSummaryOrTable ===true && <>Show Table</>}
            {showSummaryOrTable ===false && <>Show Cards</>}
            </Button>
            {showSummaryOrTable ===true &&  
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
}

       {showSummaryOrTable ===false && books &&
      <DataGrid
        rows={books}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        disableRowSelectionOnClick
      />
    }


       </>
       );
       }
      

export default GetAllReviews

