import React, { useState } from 'react'
import classes from './Counter.module.scss'

export const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      {count}
      <br />
      <button className={classes.btn} onClick={() => setCount(prev => ++prev)}>+++++++++++++</button>
    </>
  )
}
