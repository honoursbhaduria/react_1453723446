import React from 'react'

const h2Element = React.createElement('h2', null, 'Learn JSX');


const LearnJSX = () => {
    let price = 10;
  return (
    // <div>
    //   <h2>Learn JSX</h2>
    // </div>
    // <div>{h2Element}</div>
    <>
      <h2>jsx</h2>
      <h2>price :  {price}</h2>
      <h3>stock name : {"Apple"}</h3>

      <h4 className='bg-success'>stock status: success</h4>
    </>
  )
}

export default LearnJSX
