import React from 'react';
import { Button, TextField, FormControl, InputLabel, Select, MenuItem, DialogContent} from '@mui/material';
import "./Styles.css";

const Appointment = () => {

  const [state, setState] = React.useState('');
  const [distance, setDistance] = React.useState('');
  const [type, setType] = React.useState('');
  var types = ["Driver and ID Card Services", "Learner's Permit / Knowledge Test", "Road Skills Testing", "Motorcyle Skills Testing", "Hazmat Fingerprint / Background Check", "E-ZPass"];
  
  const handleChangeState = (event) => {
    setState(event.target.value);
  };
  const handleChangeDistance = (event) => {
    setDistance(event.target.value);
  };
  const handleChangeType = (event) => {
    setType(event.target.value);
  };

  var typeList = types.map(function(type){
    return <MenuItem value={type}>{type}</MenuItem>;
  })


  const states = ['VA', 'MD', 'NC', 'DC']

  return (
    <div>
      <div className="text"><h1>Make Appointment</h1></div>

      <div class='row'>
      
        <div className='column'>
        
        <div style={{padding:'10px'}}>
        <FormControl sx={{ m: 1, minWidth: '25%' }}>
        <InputLabel id="demo-simple-select-label">State</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={state}
          label='State'
          onChange={handleChangeState}
        >
          <MenuItem value={'DC'}>DC</MenuItem>
          <MenuItem value={'MD'}>MD</MenuItem>
          <MenuItem value={'VA'}>VA</MenuItem>
          <MenuItem value={'NC'}>NC</MenuItem>
        </Select>
        </FormControl>
        </div>

        <div style={{padding:'10px'}}>
        <TextField id="standard-basic" label="ZIP Code" type="number" variant="standard" />
        </div>

        <div style={{padding:'10px'}}>
        <FormControl sx={{ m: 1, minWidth: '25%' }}>
        <InputLabel id="demo-simple-select-label">Distance(miles)</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={distance}
          label='State'
          onChange={handleChangeDistance}
        >
          <MenuItem value={'5'}>5</MenuItem>
          <MenuItem value={'10'}>10</MenuItem>
          <MenuItem value={'15'}>15</MenuItem>
          <MenuItem value={'30'}>30</MenuItem>
        </Select>
        </FormControl>
        </div>

        <div style={{padding:'10px'}}>
          <FormControl sx={{ m: 1, minWidth: '25%' }}>
          <InputLabel id="demo-simple-select-label">Type of Appointment</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={type}
            label='type'
            onChange={handleChangeType}
          >
            {typeList}
          </Select>
          </FormControl>
        </div>

        <div style={{padding:'10px'}}>
        <TextField id="standard-basic" label="Number" type="number" variant="standard" />
        </div>

        <div style={{padding:'10px'}}>
        <TextField id="standard-basic" label="Dealine(# of weeks from now)" type="number" variant="standard" />
        </div>

        <div className='text'><Button variant="contained" id="apptbtn">Submit</Button></div>
        
        </div>
        <div className='column'>
          <div className='text'><Button variant="contained" id="apptbtn">Filter</Button></div>
        </div>
      </div>
      
     
    </div>
  );
};
  
export default Appointment;