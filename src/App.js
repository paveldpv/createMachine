import './App.css';
import Container from '@mui/material/Container';
import {  Route, Routes } from 'react-router-dom';
//=======import Componets=======//
import Depts from './pages/Depts';
import DrawingCatalog from './pages/DrawingCatalog';
import Layout from './Layout/Layout';
import About from './pages/About'
import AppWork from './pages/AppWork';

function App() {
  return (
    <div className='root'>
     
     <Routes>
        <Route path='/' element={<Layout/>}>
          <Route path="Depts" element={<Depts />} />
          <Route path="DrawingCatalog" element={<DrawingCatalog />} />
          <Route path="About" element={<About />} />
          <Route path="Info" element={<AppWork />} />
        </Route>
      </Routes>
     
    </div>
    
  );
}

export default App;
