import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>
        Books website 
      </h1>
      <div>
        <input type="text" placeholder='Book title....' />
        <br />
        <input type="number" placeholder='Release Date....' />
        <br />
        <button>Add Book</button>
      </div>
    </>
  )
}

export default App
