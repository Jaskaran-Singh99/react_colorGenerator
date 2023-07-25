import React, { useState, useEffect } from 'react'

const SingleColor = ({rgb, weight, index, hex}) => {
  const hexValue = `#${hex}`
  const [alert, setAlert] = useState(false)
  const backgroundColor = rgb.toString()
   
  useEffect(()=>{
    const timeOut = setTimeout(()=>{
        setAlert(false)
    }, 2000)   
    return ()=> clearTimeout(timeOut)        
  }, [alert])
  return(
    <article style={{backgroundColor:`rgb(${backgroundColor})`}} className={`'color' ${index > 10 ? 'color-light': null}`}
    onClick={()=>{
      setAlert(true)
      navigator.clipboard.writeText(hexValue)
    }}>
      <p className='percent-value' >{weight}%</p>
      <p className='color-value' >{hexValue}</p>
      {alert ? <p className='alert'>Copied To Clipboard</p> : null}
        
    </article>
  )
}

export default SingleColor
