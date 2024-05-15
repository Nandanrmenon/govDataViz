import React, { useState, useEffect } from 'react';
import { Chart } from "react-google-charts";
import Table from '@mui/joy/Table';

import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';

import Modal from '@mui/joy/Modal';
import ModalClose from '@mui/joy/ModalClose';
import ModalDialog from '@mui/joy/ModalDialog';
import DialogTitle from '@mui/joy/DialogTitle';
import DialogContent from '@mui/joy/DialogContent';
import { Button, Stack } from '@mui/joy';
function PollutionView({ data }) {
  const chartData = [['Year', 'Pollutant Avg']];
  const [layout, setLayout] = React.useState(undefined);

  data.forEach(record => {
    // const year = new Date(record.last_update).getFullYear();
    chartData.push([record.city, parseFloat(record.pollutant_avg)]);
  });
  return (<div className='container'>
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      spacing={2}>
      <h3>Real time Air Quality Index from various locations</h3>
      <Button
        variant="soft"
        onClick={() => {
          setLayout('fullscreen');
        }}>{'View Graph'}</Button>

    </Stack>
    <Table variant={'soft'}>
      <thead>
        <tr>
          <th>State</th>
          <th>City</th>
          <th>Station</th>
          <th>Last Updated</th>
          <th>Latitude</th>
          <th>Longitude</th>
          <th>Pollutant Id</th>
          <th>Pollutant - Min</th>
          <th>Pollutant - Max</th>
          <th>Pollutant - Avg</th>
        </tr>
      </thead>
      <tbody>
        {data.map((record, index) => (
          <tr
            key={index}>
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
    <Modal open={!!layout} onClose={() => setLayout(undefined)}>
      <ModalDialog layout={layout}>
        <ModalClose />
        <DialogTitle>Graph Viewer</DialogTitle>
        <DialogContent>
          <div>
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
          </div>
        </DialogContent>
      </ModalDialog>
    </Modal>
  </div>
  );
}

export default PollutionView
