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
      <NavBar />
      <Container maxWidth="lg">
        <Routes >
          <Route path='/' element={<Home />} />
          <Route path='datapage' element={<DataPage />} />
        </Routes>
      </Container>
      {/* <IncrBtn /> */}
      {/* <FetchUser />
      <FetchList /> */}
    </div>
  );
}
export default App;

// function FetchUser() {
//   const user = {
//     uname: 'Nandan Menon',
//     uImgUrl: 'https://i.imgur.com/yXOvdOSs.jpg'
//   };

//   return (
//     <div>
//       <img src={user.uImgUrl} />
//       <h1>{user.uname}</h1>
//     </div>
//   );
// }

// function FetchList() {
//   const product = [
//     { title: 'Cab', id: 1 },
//     { title: 'Bac', id: 2 },
//     { title: 'Abc', id: 3 },
//     { title: 'ccc', id: 4 },
//     { title: 'aksjhdias', id: 5 },
//   ]
//   const listItems = product.map(product =>
//     <li key={product.id}>{product.title}</li>
//   );
//   return (
//     <ul>{listItems}</ul>
//   );
// }

// function IncrBtn() {
//   var [count, setCount] = useState(0);
//   var [text, setData] = useState("hello");
//   var [formState, setState] = useState("hello");
//   // var formState= document.getElementById('formField').style.display='none';

//   function handleDecr() {
//     setCount(count - 1);
//   }
//   function handleIncr() {
//     setCount(count + 1);
//   }

//   function changeText() {
//     setData(text = "world")
//   }
//   function showForm() {
//     // let window = document.getElementById("formField");
//     // if(formState === "none"){
//     //   window.style.display = "block";
//     // }
//     // else{
//     //   window.style.display = "none";
//     // }
//     // formState ==='block' ? setState(formState = 'block') :setState(formState = 'none')
//     setState(formState = 'none')
//   }
//   return (
//     <div>

//       <h1>{count}</h1>
//       <button onClick={handleDecr}>Decr</button>
//       <button onClick={handleIncr}>Incr</button>

//       <h1>{text}</h1>
//       <button onClick={changeText}>Incr</button>

//       <button onClick={showForm}>Show Form</button>
//       <form id='formField' style={{ display: { formState } }}>
//         <label>Email</label>
//         <input type='text' placeholder='email' />
//       </form>
//     </div>
//   );
// }

// export default App;
