import React from 'react';
import './App.css';
import './dist/styles.css';
import Navbar from './components/Navbar';
import Members from './components/Members'
import Home from './components/Home'
import Footer from './components/Footer'
import Recruitment from './components/Recruitment'
import Projects from './components/Projects'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/members' element={<Members/>}/>
        <Route path='/recruit' element={<Recruitment/>}/>
        <Route path='/projects' element={<Projects/>}/>
      </Routes>
      <Footer/>
    </Router>
    </>
  );
}

export default App;
