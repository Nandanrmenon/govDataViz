import React from 'react'
import '../App.css';
import { Button } from '@mui/joy';

function Home() {
  return (
    <div>
      <h1 class="text-3xl font-bold underline">
        GovDataViz
      </h1>
      <p>Visualizing data from api.data.gov.in</p>
      <a href='datapage'><Button>Go here</Button></a>
    </div>
  )
}

export default Home
