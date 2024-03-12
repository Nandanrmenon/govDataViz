import React from 'react'
import { Chart } from "react-google-charts";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
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
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 450 }} aria-label="sticky table" stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell>State</TableCell>
            <TableCell align="">City</TableCell>
            <TableCell align="">Station</TableCell>
            <TableCell align="right">Last Updated</TableCell>
            <TableCell align="right">Latitude</TableCell>
            <TableCell align="right">Longitude</TableCell>
            <TableCell align="right">Pollutant Id</TableCell>
            <TableCell align="right">Pollutant - Min</TableCell>
            <TableCell align="right">Pollutant - Max</TableCell>
            <TableCell align="right">Pollutant - Avg</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((record, index) => (
            <TableRow
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">{record.state}</TableCell>
              <TableCell align="">{record.city}</TableCell>
              <TableCell align="">{record.station}</TableCell>
              <TableCell align="right">{record.last_update}</TableCell>
              <TableCell align="right">{record.latitude}</TableCell>
              <TableCell align="right">{record.longitude}</TableCell>
              <TableCell align="right">{record.pollutant_id}</TableCell>
              <TableCell align="right">{record.pollutant_min}</TableCell>
              <TableCell align="right">{record.pollutant_max}</TableCell>
              <TableCell align="right">{record.pollutant_avg}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
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
