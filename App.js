/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Link, Outlet, Route, Routes } from 'react-router-dom';
import './App.css';
import AddUser from './Components/AddUser';
import User from './Components/User';
import { PostScreen } from './Container/PostScreen';
import { UserScreen } from './Container/UserScreen';
import { useNavigate } from 'react-router-dom';

const App = () => {
  const navigate = useNavigate();

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 600 }}>

        <div style={{ height: 100, textAlign: 'center' }}>
          <h1 style={{ color: '#42a5f5', fontWeight: 'bold', fontFamily: 'fantasy', fontSize: 50 }}>Welcome to My Website</h1>

          <Link style={{ textAlign: 'center', color: 'blue' }} to="/user">Click to begin</Link>
        </div>

      </div>
    </>

  );
}

export default App;
