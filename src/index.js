import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter,Route, Routes } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

//Components
import OperacionList from './components/Operacion/OperacionList';
import Navbar from './components/Navbar/Navbar';
import OperacionForm from './components/Operacion/OperacionForm';

import 'bootstrap/dist/css/bootstrap.min.css'; 
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Navbar/>
    <div>
      <Routes>
        <Route exact path="/" element={<OperacionList/>}/>
        <Route path="/OperacionForm" element={<OperacionForm/>}/>
      </Routes>
    </div>
</BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
