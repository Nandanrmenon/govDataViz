import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import 'react-material-symbols/rounded'; // Place in your root app file. There are also `sharp` and `outlined` variants.
import Home from './pages/Home';
import DataPage from './pages/DataPage';
import Container from '@mui/material/Container';
import Login from './pages/Login';

function App() {

  return (
    <div className="App">
      {/* <NavBar /> */}
      
        <Routes >
          <Route path='/' element={<Login />} />
          <Route path='datapage' element={<DataPage />} />
          {/* <Route path='login' element={<Login />} /> */}
        </Routes>
    </div>
  );
}
export default App;