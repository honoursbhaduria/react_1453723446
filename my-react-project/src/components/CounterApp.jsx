import React from 'react'

const CounterApp = () => {
    const [count , setcount] = React.useState(0);

    const increaseCount = () => {
        setcount(count + 1);
    }
    const decreaseCount = () => {
        setcount(count - 1);
    }
    const resetCount = () => {
        setcount(0);
    }
  return (
    <>
      <h2>CounterApp</h2>
      <h3>Counter: {count}</h3>
      <button onClick={increaseCount}>Increment</button>
      <br />
      <button onClick={decreaseCount}>Decrement</button>
      <br />
      <button onClick={resetCount}>Reset</button>
    </>
  )
}

export default CounterApp
