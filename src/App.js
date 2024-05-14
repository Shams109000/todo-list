import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Navbar from './component/Navbar';
import { Routes,Route } from 'react-router-dom';
import Home from './component/Home';
import About from './component/About';
import Service from './component/Service';
<link
rel="stylesheet"
href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
integrity="..."
crossorigin="anonymous"
/>

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Service></Service>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/digtal clock' element={<Home></Home>}></Route>
      </Routes>
    </div>
  );
}

export default App;
