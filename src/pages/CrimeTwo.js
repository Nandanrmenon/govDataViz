import React from 'react';
import { Chart } from 'react-google-charts';
import '../App.css';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';

function CrimeTwo({ data }) {
  const chartData = [['Year', 'Crime Against Women Rate', 'Chargesheeting Rate']];
  data.forEach(record => {
    const year = record.year; // Assuming 'year' field is available in the data
    const crimeRate = parseFloat(record.rate_of_total_crime_against_women__2022_); // Assuming this field is available in the data
    const chargesheetingRate = parseFloat(record.chargesheeting_rate__2022_); // Assuming this field is available in the data
    chartData.push([year, crimeRate, chargesheetingRate]);
  });

  return (
    <div className='container'>
      <h3>Crime Rates Over Time</h3>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 450 }} aria-label="sticky table" stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell>State/UT</TableCell>
              <TableCell align="right">2020</TableCell>
              <TableCell align="right">2021</TableCell>
              <TableCell align="right">2022</TableCell>
              <TableCell align="right">Mid year projected population -inlakhs - 2022</TableCell>
              <TableCell align="right">Rate of total crime against women - 2022</TableCell>
              <TableCell align="right">Chargesheeting rate - 2022</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((record, index) => (
              <TableRow
                key={index}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">{record.state_ut}</TableCell>
                <TableCell align="right">{record._2020}</TableCell>
                <TableCell align="right">{record._2021}</TableCell>
                <TableCell align="right">{record._2022}</TableCell>
                <TableCell align="right">{record.mid_year_projected_population__in_lakhs___2022_}</TableCell>
                <TableCell align="right">{record.rate_of_total_crime_against_women__2022_}</TableCell>
                <TableCell align="right">{record.chargesheeting_rate__2022_}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Divider />
      <Box sx={{ p: 4 }}>
        <Chart
          chartType="LineChart"
          data={chartData}
          width="100%"
          height="400px"
          options={{
            title: 'Crime Rates Over Time',
            hAxis: { title: 'Year' },
            vAxis: { title: 'Rate' },
          }}
        />
      </Box>
    </div>
  );
}

export default CrimeTwo;
