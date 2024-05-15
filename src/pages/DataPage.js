import React, { useState, useEffect } from 'react';

import axios from 'axios';
// import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
// import Select from '@mui/material/Select';
import '../styles/Products.css'

import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';

import PollutionView from './Pollution';
import PetroleumView from './Petroleum';
import CrimeOne from './Crime';
import CrimeTwo from './CrimeTwo';
import NavBar from '../components/NavBar';
import { Box, FormControl, FormLabel, MenuItem } from '@mui/joy';

import { useNavigate } from 'react-router-dom';
import CrimeThree from './CrimeThree';

const DataPage = () => {
  const [data, setData] = useState([]);
  const [selectedView, setSelectedView] = useState(null);
  const kPollution = 'https://api.data.gov.in/resource/3b01bcb8-0b14-4abf-b6f2-c1bfd384ba69?api-key=579b464db66ec23bdd000001cdd3946e44ce4aad7209ff7b23ac571b&format=json';
  const kPetroluem = 'https://api.data.gov.in/resource/7b624b4a-1456-4945-80d0-dfb5e40ddcff?api-key=579b464db66ec23bdd000001cdd3946e44ce4aad7209ff7b23ac571b&format=json';
  const kCrimeOne = 'https://api.data.gov.in/resource/f1011105-a719-426e-80bc-b1c734b59948?api-key=579b464db66ec23bdd000001cdd3946e44ce4aad7209ff7b23ac571b&format=json';
  const kCrimeTwo = 'https://api.data.gov.in/resource/54e2499e-23e9-450b-8a82-4050319bd970?api-key=579b464db66ec23bdd000001cdd3946e44ce4aad7209ff7b23ac571b&format=json';
  const kCrimeThree = 'https://api.data.gov.in/resource/2da3c64c-fea4-4bb0-ac7f-3a55648b82fc?api-key=579b464db66ec23bdd000001cdd3946e44ce4aad7209ff7b23ac571b&format=json';
  const [kApi, setKApi] = useState(null);
  const navigate = useNavigate();


  useEffect(() => {
    if (!localStorage.getItem('isLoggedIn')) {
      navigate('/');
    }
  }, [localStorage.getItem('isLoggedIn'), navigate]);

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
      case 'crimethree':
        return setKApi(kCrimeThree);
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
  const handleChange = (event, newValue) => {
    if (event && event.target) {
      setSelectedView(newValue);
      console.log(newValue);
      switch (newValue) {
        case 'pollution':
          setKApi(kPollution);
          break;
        case 'petroleum':
          setKApi(kPetroluem);
          break;
        case 'crimeone':
          setKApi(kCrimeOne);
          break;
        case 'crimetwo':
          setKApi(kCrimeTwo);
          break;
        case 'crimethree':
          return setKApi(kCrimeThree);
        default:
          setKApi(null);
      }
    }
  };

  return (
    <Box
      sx={{

        padding: 2
      }}
    >
      <NavBar />
      <FormControl sx={{ width: 500, margin: 'auto' }}>
        <FormLabel id="select-field-demo-label" htmlFor="select-field-demo-button">
          Select a data
        </FormLabel>
        <Select
          slotProps={{
            button: {
              id: 'select-field-demo-button',
              // TODO: Material UI set aria-labelledby correctly & automatically
              // but Base UI and Joy UI don't yet.
              'aria-labelledby': 'select-field-demo-label select-field-demo-button',
            },
          }}
          placeholder={'Choose here'}
          defaultValue={''}
          onChange={handleChange}
        >
          {/* <Option value={''}>Select</Option> */}
          <Option value={"pollution"}>Real time Air Quality Index from various locations</Option>
          <Option value={'petroleum'}>Monthly Consumption of Petroleum Products</Option>
          <Option value={'crimeone'}>Crime Head-wise Number of Voilent Crimes in Metropolitan Cities during 2022</Option>
          <Option value={'crimetwo'}>State/UT-wise Number of Crime against Women (IPC+SLL) from 2020 to 2022</Option>
          {/* <Option value={'crimethree'}>asd (IPC+SLL) from 2020 to 2022</Option> */}
        </Select>
      </FormControl>
      {/* <select className="custom-select" onChange={handleChange}>
        <option value={''}>Select a view</option>
        <option value={'pollution'}>Real time Air Quality Index from various locations</option>
        <option value={'petroleum'}>Monthly Consumption of Petroleum Products</option>
        <option value={'crimeone'}>Crime Head-wise Number of Voilent Crimes in Metropolitan Cities during 2022</option>
        <option value={'crimetwo'}>State/UT-wise Number of Crime against Women (IPC+SLL) from 2020 to 2022</option>
      </select> */}


      {selectedView === "pollution" && kApi === kPollution && <PollutionView data={data} />}
      {selectedView === "petroleum" && kApi === kPetroluem && <PetroleumView data={data} />}
      {selectedView === "crimeone" && kApi === kCrimeOne && <CrimeOne data={data} />}
      {selectedView === "crimetwo" && kApi === kCrimeTwo && <CrimeTwo data={data} />}
      {selectedView === "crimethree" && kApi === kCrimeThree && <CrimeThree data={data} />}
    </Box>
  );
};

export default DataPage;
