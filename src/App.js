import React, { useState, useEffect, useContext } from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css'; 
import Layout from './Components/Layout';
import Home from './Components/Home';
import data from './Components/Data/data.json'
import GlobalStyle from './Components/GlobalStyle';



export default function App() {


  return (data?<>
   <GlobalStyle />
    <Router>
      <Routes>

        <Route path="/" element={<Layout><Home /></Layout>} />


      </Routes>
    </Router>


  </>:'')
    ;
}


