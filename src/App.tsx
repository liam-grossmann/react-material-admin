import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


import { useState } from 'react'
//import { Header } from './components/header/header';
import { SidePanel } from "./components/navigation/sidePanel";

//import './App.css'
import 'normalize.css';


function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <SidePanel></SidePanel>
    </Router>
  )
}

export default App
