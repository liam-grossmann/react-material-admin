import { useState } from 'react'
import { MuiTypography } from './components/MuiTypography';

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <MuiTypography></MuiTypography>
    </div>
  )
}

export default App
