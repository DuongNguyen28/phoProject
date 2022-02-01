import { CreateNewFolderOutlined } from '@mui/icons-material';
import React, {useState} from 'react';
import {TextField, Box} from '@mui/material';
import BasicDatePicker from './DatePicker';
import './css/TextField.css';

const NewFood = () =>{
return(
    <Box margin= '1rem'
      sx={{
        width: 300,
        height: 300,
        // backgroundColor: 'red',
        '&:hover': {
          backgroundColor: 'white',
          opacity: [0.9, 0.8, 0.7],
        },
      }}
    >
        <TextField id="outlined-basic" label="Search food" variant="outlined" /> 
        <BasicDatePicker  id="outlined-basic" />
        <TextField id="outlined-basic" label="Quantity" variant="outlined" /> 
        <TextField id="outlined-basic" label="Price" variant="outlined" /> 
    </Box>
)};
export default NewFood; 