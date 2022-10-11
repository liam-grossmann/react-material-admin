import { useState } from 'react'
import { MuiTypography } from './components/MuiTypography';
import { MuiButton } from './components/MuiButton';

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <MuiButton></MuiButton>
    </div>
  )
}

export default App
