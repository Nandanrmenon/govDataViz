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
import Modal from '@mui/joy/Modal';
import ModalClose from '@mui/joy/ModalClose';
import ModalDialog from '@mui/joy/ModalDialog';
import DialogTitle from '@mui/joy/DialogTitle';
import DialogContent from '@mui/joy/DialogContent';
import { Button } from '@mui/joy';

function CrimeOne({ data }) {
  const chartData = [['Year', 'Pollutant Avg']];
  const [layout, setLayout] = React.useState(undefined);
  data.forEach(record => {
    chartData.push([record.city, parseFloat(record.murder__sec_302_ipc____col__3_)]);
  });
  return (<div className='container'>
    <h3>Monthly Consumption of Petroleum Products</h3>
    <Button
      variant="outlined"
      color="neutral"
      onClick={() => {
        setLayout('fullscreen');
      }}>{'View Graph'}</Button>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 450 }} aria-label="sticky table" stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell>City</TableCell>
            <TableCell align="right">Murder sec 302 IPC</TableCell>
            <TableCell align="right">Culpable Homicide Not Amounting to Murder Sec 304 IPC</TableCell>
            <TableCell align="right">Infanticide Sec 315 IPC</TableCell>
            <TableCell align="right">Foeticide Sec 316 IPC</TableCell>
            <TableCell align="right">Dowry Deaths Sec 304b IPC</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((record, index) => (
            <TableRow
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">{record.city}</TableCell>
              <TableCell align="right">{record.murder__sec_302_ipc____col__3_}</TableCell>
              <TableCell align="right">{record.culpable_homicide_not_amounting_to_murder__sec_304_ipc____col__4_}</TableCell>
              <TableCell align="right">{record.infanticide__sec_315_ipc____col__5_}</TableCell>
              <TableCell align="right">{record.foeticide__sec_316_ipc____col__6_}</TableCell>
              <TableCell align="right">{record.dowry_deaths__sec_304b_ipc____col__7_}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <Divider />
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
