import React from 'react'
import { Chart } from "react-google-charts";
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

function PetroleumView({ data }) {
  const chartData = [['Year', 'Pollutant Avg']];
  data.forEach(record => {
    const year = new Date(record.year).getFullYear();
    chartData.push([year, parseFloat(record.quantity_000_metric_tonnes_)]);
  });
  return (<div className='container'>
    <h3>Monthly Consumption of Petroleum Products</h3>

    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 450 }} aria-label="sticky table" stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell>Month</TableCell>
            <TableCell align="right">Year</TableCell>
            <TableCell align="right">Products</TableCell>
            <TableCell align="right">Quantity Metric Tonnes</TableCell>
            <TableCell align="right">Updated Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((record, index) => (
            <TableRow
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">{record._month_}</TableCell>
              <TableCell align="right">{record.year}</TableCell>
              <TableCell align="right">{record.products}</TableCell>
              <TableCell align="right">{record.quantity_000_metric_tonnes_}</TableCell>
              <TableCell align="right">{record.updated_date}</TableCell>
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
          title: 'Pollutant Average Over Time',
          hAxis: { title: 'Year', minValue: '2017', maxValue: '2021' },
          vAxis: { title: 'Pollutant Avg' },
        }}
      />
    </Box>
  </div>
  );
}

export default PetroleumView
