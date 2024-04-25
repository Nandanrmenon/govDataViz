import React from 'react'
import { Chart } from "react-google-charts";
import Table from '@mui/joy/Table';

import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';

function PollutionView({ data }) {
  const chartData = [['Year', 'Pollutant Avg']];
  data.forEach(record => {
    // const year = new Date(record.last_update).getFullYear();
    chartData.push([record.city, parseFloat(record.pollutant_avg)]);
  });
  return (<div className='container'>
    <h3>Real time Air Quality Index from various locations</h3> 
    <Table sx={{ '& thead th:nth-child(1)': { width: '40%' } }}>
        <thead>
          <tr>
            <td>State</td>
            <td>City</td>
            <td>Station</td>
            <td>Last Updated</td>
            <td>Latitude</td>
            <td>Longitude</td>
            <td>Pollutant Id</td>
            <td>Pollutant - Min</td>
            <td>Pollutant - Max</td>
            <td>Pollutant - Avg</td>
          </tr>
        </thead>
        <tbody>
          {data.map((record, index) => (
            <tr
              key={index}
              // sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <td>{record.state}</td>
              <td>{record.city}</td>
              <td>{record.station}</td>
              <td>{record.last_update}</td>
              <td>{record.latitude}</td>
              <td>{record.longitude}</td>
              <td>{record.pollutant_id}</td>
              <td>{record.pollutant_min}</td>
              <td>{record.pollutant_max}</td>
              <td>{record.pollutant_avg}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    <Divider />
    <Box sx={{ p: 4 }}>
      <Chart
        chartType="PieChart"
        data={chartData}
        width="100%"
        height="400px"
        options={{
          title: 'Pollutant Average Over Time',
          hAxis: { title: 'City', minValue: 2017, maxValue: 2021 },
          vAxis: { title: 'Pollutant Avg' },
        }}
      />
    </Box>
  </div>
  );
}

export default PollutionView
