import React from 'react'
import { Chart } from "react-google-charts";
import '../App.css';

import { Button, DialogContent, DialogTitle, Modal, ModalClose, ModalDialog, Stack, Table } from '@mui/joy';

function CrimeThree({ data }) {
  const chartData = [['Year', 'Pollutant Avg']];
  const [layout, setLayout] = React.useState(undefined);

  data.forEach(record => {
    const year = new Date(record.year).getFullYear();
    chartData.push([year, parseFloat(record.quantity_000_metric_tonnes_)]);
  });
  
  return (
    <div className='container'>
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      spacing={2}>
      <h3>State/UT-wise Number of Crime against Women (IPC+SLL) from 2020 to 2022</h3>
      <Button
        variant="soft"
        onClick={() => {
          setLayout('fullscreen');
        }}>{'View Graph'}</Button>

    </Stack>
    <Table variant={'soft'}>
      <thead>
        <tr>
          <th>State/UT</th>
          <th>2020</th>
          <th>2021</th>
          <th align="right">2022</th>
          <th align="right">Mid year projected population -inlakhs - 2022</th>
          <th align="right">Rate of total crime against women - 2022</th>
          <th align="right">Chargesheeting rate - 2022</th>
        </tr>
      </thead>
      <tbody>
        {data.map((record, index) => (
          <tr
            key={index}

          >
            <td>{record.state_ut}</td>
            <td>{record._2020}</td>
            <td>{record._2021}</td>
            <td>{record._2022}</td>
            <td>{record.mid_year_projected_population__in_lakhs___2022_}</td>
            <td>{record.rate_of_total_crime_against_women__2022_}</td>
            <td>{record.chargesheeting_rate__2022_}</td>
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
                title: 'Crime Rates Over Time',
                hAxis: { title: 'Year' },
                vAxis: { title: 'Rate' },
              }}
            />
          </div>
        </DialogContent>
      </ModalDialog>
    </Modal>
  </div>
  );
}

export default CrimeThree
