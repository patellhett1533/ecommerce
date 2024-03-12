import React from 'react';
import { BrowserRouter, Route, Routes, Link, Router } from 'react-router-dom';
import Home from '../../Component/Admin/Home';
import Login from '../../Component/Admin/Login';
import Navbar from '../../Component/Admin/Navbar';

const admin = (props) => {
  return (
    <>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default admin;
