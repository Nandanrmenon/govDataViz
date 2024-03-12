import React from 'react'
import '../styles/NavBar.css';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

function NavBar() {
  // return (
  //     <div className='navBar'>
  //         <div><span></span>NavBar</div>
  //         <div className='navBarItems'>
  //             <a href='/'><MaterialSymbol icon="home" size={24} grade={-25} />Home</a>
  //             <a href='datapage'><MaterialSymbol icon="inventory_2" size={24} grade={-25} />Data</a>
  //             <a href='' className='loginButton'><FetchUser/></a>
  //         </div>
  //     </div>
  // )
  return (<Box sx={{ flexGrow: 1 }}>
    <AppBar position="static" color="primary" enableColorOnDark>
      <Toolbar>
        {/* <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton> */}
        <Typography variant="h6" component="div">
          Gov. Data
        </Typography>
        <Button color="inherit" href='/'>Home</Button>
        <Button color="inherit" href='datapage'>Data</Button>
      </Toolbar>
    </AppBar>
  </Box>);
}

export default NavBar
