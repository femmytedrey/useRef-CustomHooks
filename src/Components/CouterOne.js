import React from 'react'
import useCounter from '../Hooks/useCounter'

function CouterOne() {
    const [count, increment, decrement, reset] = useCounter(0, 1)
  return (
    <div>
        <h2>Count = {count}</h2>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>decrement</button>
        <button onClick={reset}>reset</button>
    </div>
  )
}

export default CouterOne