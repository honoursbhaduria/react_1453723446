import React from 'react'

const LearnHooks = () => {
    const [count, setCount] = React.useState(0);



    const [stockprice, setStockPrice] = React.useState({ stock: "Apple", price: 150 });
    console.log(stockprice);
  return (
    <div>
        <h2>Count: {count}</h2>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <hr />
        <h2>
            {stockprice.stock} - {stockprice.price}
        </h2>
        <button onClick={() => setStockPrice({ stock: "Google", price: 200 })}>
            Update Stock
        </button>
    </div>
  )
}

export default  LearnHooks
