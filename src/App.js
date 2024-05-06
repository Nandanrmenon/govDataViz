import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import 'react-material-symbols/rounded'; // Place in your root app file. There are also `sharp` and `outlined` variants.
import Home from './pages/Home';
import DataPage from './pages/DataPage';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function App() {

  return (

    <div className="App">
      {/* <NavBar /> */}
      <Container maxWidth="lg">
        <Routes >
          <Route path='/' element={<Home />} />
          <Route path='datapage' element={<DataPage />} />
        </Routes>
      </Container>
    </div>
  );
}
export default App;