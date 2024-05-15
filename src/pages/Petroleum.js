import React from 'react'
import { Chart } from "react-google-charts";
import '../App.css';

import Table from '@mui/joy/Table';
import Divider from '@mui/material/Divider';
import { Button, Stack } from '@mui/joy';
import Modal from '@mui/joy/Modal';
import ModalClose from '@mui/joy/ModalClose';
import ModalDialog from '@mui/joy/ModalDialog';
import DialogTitle from '@mui/joy/DialogTitle';
import DialogContent from '@mui/joy/DialogContent';

function PetroleumView({ data }) {
  const chartData = [['Year', 'Pollutant Avg']];
  const [layout, setLayout] = React.useState(undefined);
  data.forEach(record => {
    const year = new Date(record.year).getFullYear();
    chartData.push([year, parseFloat(record.quantity_000_metric_tonnes_)]);
  });
  return (<div className='container'>
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      spacing={2}>
      <h3>Monthly Consumption of Petroleum Products</h3>
      <Button
        variant="soft"
        onClick={() => {
          setLayout('fullscreen');
        }}>{'View Graph'}</Button>

    </Stack>
    <Table variant={'soft'}>
      <thead>
        <tr>
          <th>Month</th>
          <th>Year</th>
          <th>Products</th>
          <th>Quantity Metric Tonnes</th>
          <th>Updated Date</th>
        </tr>
      </thead>
      <tbody>
        {data.map((record, index) => (
          <tr key={index}>
            <td>{record._month_}</td>
            <td>{record.year}</td>
            <td>{record.products}</td>
            <td>{record.quantity_000_metric_tonnes_}</td>
            <td>{record.updated_date}</td>
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
              chartType="LineChart"
              data={chartData}
              width="100%"
              height="400px"
              options={{
                title: 'Pollutant Average Over Time',
                hAxis: { title: 'Year', minValue: '2021', maxValue: '2021' },
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

export default PetroleumView
