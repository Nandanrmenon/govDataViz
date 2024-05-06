import React from 'react'
import '../App.css';
import { Button } from '@mui/joy';
import Card from '@mui/joy/Card';
import SearchComponent from '../components/SearchComponent';


function Home() {
  return (
    <div>
      <Card sx={{ mt: 2, }}>
        <img className="mt-1" width={"100%"} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAgpvUAHqCv265xTq0lrWLgyQsQxOdIwVP3980c7bjTw&s' loading="lazy" alt=''></img>
        <center>
          <h1 className="text-3xl font-bold underline">Visualizing data from api.data.gov.in</h1>
          <a href='datapage'><Button>Go here</Button></a>
          {/* <SearchComponent/> */}
        </center>
      </Card>
    </div>
  )
}

export default Home
