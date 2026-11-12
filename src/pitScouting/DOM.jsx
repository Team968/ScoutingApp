import { useState } from 'react'
import '../global.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Pit Scouting</h1>
      <div id="container"></div>
      <button id="submitDataBtn">Submit</button>
    </>
  )
}

export default App
