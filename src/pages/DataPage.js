import React, { useState, useEffect } from 'react';

import axios from 'axios';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import '../styles/Products.css'

import PollutionView from './Pollution';
import PetroleumView from './Petroleum';
import CrimeOne from './Crime';
import CrimeTwo from './CrimeTwo';

const DataPage = () => {
  const [data, setData] = useState([]);
  const [selectedView, setSelectedView] = useState(null);
  const kPollution = 'https://api.data.gov.in/resource/3b01bcb8-0b14-4abf-b6f2-c1bfd384ba69?api-key=579b464db66ec23bdd000001cdd3946e44ce4aad7209ff7b23ac571b&format=json';
  const kPetroluem = 'https://api.data.gov.in/resource/7b624b4a-1456-4945-80d0-dfb5e40ddcff?api-key=579b464db66ec23bdd000001cdd3946e44ce4aad7209ff7b23ac571b&format=json';
  const kCrimeOne = 'https://api.data.gov.in/resource/f1011105-a719-426e-80bc-b1c734b59948?api-key=579b464db66ec23bdd000001cdd3946e44ce4aad7209ff7b23ac571b&format=json';
  const kCrimeTwo = 'https://api.data.gov.in/resource/54e2499e-23e9-450b-8a82-4050319bd970?api-key=579b464db66ec23bdd000001cdd3946e44ce4aad7209ff7b23ac571b&format=json';
  const [kApi, setKApi] = useState(null);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(kApi);
        setData(response.data.records);

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [kApi]);

  const handleSelectChange = (event) => {
    setSelectedView(event.target.value);
    if (event.target.value === 'pollution') {
      setKApi(kPollution);
    }

    else {
      setKApi(null);
    }
    switch (event.target.value) {
      case 'pollution':
        return setKApi(kPollution);
      case 'petroleum':
        return setKApi(kPetroluem);
      case 'crimeone':
        return setKApi(kCrimeOne);
      case 'crimetwo':
        return setKApi(kCrimeTwo);
      default:
        return null;
    }
  };

  // const chartData = [['Year', 'Pollutant Avg']];
  // data.forEach(record => {
  //   // const year = new Date(record.last_update).getFullYear();
  //   chartData.push([record.city, parseFloat(record.pollutant_avg)]);
  // });
  // // chartData.map((data.forEach(record => {
  // //   const year = new Date(record.last_update).getFullYear();
  // //   const pollutantAvg = parseFloat(record.pollutant_avg);
  // // })))
  // console.log(chartData);

  return (
    <div className='container'>
      <p>Select one to see the data</p>
      <FormControl sx={{ m: 1, minWidth: 200 }}>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selectedView}
          placeholder="Select data"
          autoWidth
          onChange={handleSelectChange}
        >
          <MenuItem value={'pollution'}>Real time Air Quality Index from various locations</MenuItem>
          <MenuItem value={'petroleum'}>Monthly Consumption of Petroleum Products</MenuItem>
          <MenuItem value={'crimeone'}>Crime Head-wise Number of Voilent Crimes in Metropolitan Cities during 2022</MenuItem>
          <MenuItem value={'crimetwo'}>State/UT-wise Number of Crime against Women (IPC+SLL) from 2020 to 2022</MenuItem>
          {/* <MenuItem value={30}>Thirty</MenuItem> */}
        </Select>
      </FormControl>


      {selectedView === "pollution" && kApi === kPollution && <PollutionView data={data} />}
      {selectedView === "petroleum" && kApi === kPetroluem && <PetroleumView data={data} />}
      {selectedView === "crimeone" && kApi === kCrimeOne && <CrimeOne data={data} />}
      {selectedView === "crimetwo" && kApi === kCrimeTwo && <CrimeTwo data={data} />}
    </div>
  );
};

export default DataPage;
