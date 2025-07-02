import { useState } from 'react'
import './App.css'
import NpCalc from "./component/npCalc"

// 1 NP = 약 7.90원

function App() {
  const [np, setNp] = useState();

  return (
    <div className="App">
      <div className="container">
        <NpCalc />
      </div>
    </div>
  )
}

export default App
