import React, { useState } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'

function App() {
  const [color, setColor] = useState([])
  const [error, setError] = useState(false)
  const [list, setList] = useState(new Values('#5634b6').all())
  const handleSumbit = (e)=>{
    e.preventDefault()
    // console.log('Thsi is il')
    try{
     
        let colors = new Values(color).all()
        setList(colors)
        setError(false)
        console.log(colors)
    }
    catch(error){
        setError(true)
        console.log(error)
    }
  }
  return (
    <>
    <section className="container">
      <h3>Color Generator</h3>
      <form onSubmit={handleSumbit}>
        <input placeholder='#f634b6' type="text" value={color} onChange={(e)=>setColor(e.target.value)} className={error ? 'error':null}></input>
        <button className='btn' type='submit'>Create</button>
      </form>
      
    </section>
    <section className='colors'>
    {list.map((color, index)=>{
      const hex = color.hex        
      return <SingleColor key={index} {...color} index={index} hex={hex}></SingleColor>
    })}
    {/* {list} */}
    </section>
    </>
  )
}

export default App
