import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


import { useState } from 'react'
import { MuiTypography } from './components/MuiTypography';
import { MuiButton } from './components/MuiButton';

//import './App.css'
import 'normalize.css';
import { Typography } from "@mui/material";

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li> 
            <li>
              <Link to="/typography">Typography</Link>
            </li> 
            <li>
              <Link to="/buttons">Buttons</Link>
            </li> 
          </ul>
        </nav>

        <Routes>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/users" element={<Users />}></Route>
          <Route path="/typography" element={<MuiTypography />}></Route>
          <Route path="/buttons" element={<MuiButton/>}></Route>
          <Route path="/" element={<Home/>} ></Route>
        </Routes> 
      </div>
    </Router>
  )
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

export default App
