import React, { useState } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'

function App() {
  const [color, setColor] = useState([])
  const [error, setError] = useState(false)
  const handleSumbit = (e)=>{
    e.preventDefault()
    console.log('Thsi is il')
  }
  return (
    <>
    <section className="container">
      <h3>Color Generator</h3>
      <form onSubmit={handleSumbit}>
        <input placeholder='#f634b6' type="text" value={color} onChange={(e)=>setColor(e.target.value)}></input>
        <button className='btn' type='submit'>Create</button>
      </form>
      <h3>This is a empty list</h3>
    </section>
    <section className='color'>

    </section>
    </>
  )
}

export default App
