import React from 'react'
import { Chart } from "react-google-charts";
import '../App.css';

import Table from '@mui/joy/Table';
import Modal from '@mui/joy/Modal';
import ModalClose from '@mui/joy/ModalClose';
import ModalDialog from '@mui/joy/ModalDialog';
import DialogTitle from '@mui/joy/DialogTitle';
import DialogContent from '@mui/joy/DialogContent';
import { Button } from '@mui/joy';

import Stack from '@mui/joy/Stack';

function CrimeOne({ data }) {
  const chartData = [['Year', 'Pollutant Avg']];
  const [layout, setLayout] = React.useState(undefined);
  data.forEach(record => {
    chartData.push([record.city, parseFloat(record.murder__sec_302_ipc____col__3_)]);
  });
  return (<div className='container'>

    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      spacing={2}>
      <h3>Crime Head-wise Number of Voilent Crimes in Metropolitan Cities during 2022</h3>
      <Button
        variant="soft"
        onClick={() => {
          setLayout('fullscreen');
        }}>{'View Graph'}</Button>

    </Stack>
    <Table variant={'soft'}>
      <thead>
        <tr>
          <th>City</th>
          <th>Murder sec 302 IPC</th>
          <th>Culpable Homicide Not Amounting to Murder Sec 304 IPC</th>
          <th>Infanticide Sec 315 IPC</th>
          <th>Foeticide Sec 316 IPC</th>
          <th>Dowry Deaths Sec 304b IPC</th>
        </tr>
      </thead>
      <tbody>
        {data.map((record, index) => (
          <tr key={index}>
            <td>{record.city}</td>
            <td>{record.murder__sec_302_ipc____col__3_}</td>
            <td>{record.culpable_homicide_not_amounting_to_murder__sec_304_ipc____col__4_}</td>
            <td>{record.infanticide__sec_315_ipc____col__5_}</td>
            <td>{record.foeticide__sec_316_ipc____col__6_}</td>
            <td>{record.dowry_deaths__sec_304b_ipc____col__7_}</td>
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
                title: 'Crime Head-wise Number of Voilent Crimes in Metropolitan Cities during 2022',
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

export default CrimeOne
