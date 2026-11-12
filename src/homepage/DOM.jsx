import { useState } from 'react'
import '../global.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Scouting App</h1>
      <div id="siteMenuButtons">
        <button>——————</button>
        <button>——————</button>
        <button>——————</button>
      </div>
      <div id="nameInputDiv">
        <p>First Name & Last Initial</p><br></br>
        <h3>Name: </h3>
        <input id="nameInput" type="text"></input>
      </div>
      <dialog id="menuPopup">
          <div id="menuPopupDiv">
              <button id="pitButton">Pit</button>
              <button id="liveButton">Live</button>
              <button id="myDataButton">My Data</button>
              <button id="exitMenuButton">Exit</button>
          </div>
      </dialog>
    </>
  )
}

export default App
