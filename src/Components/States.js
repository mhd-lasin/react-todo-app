import React from 'react'
const States = ({states}) => {
  return (
    <div>
    {states.map((state)=>(
        <div className='bg-success text-white'>
        <h1>{state.name}</h1>
        <h3>Language:{state.anguage}</h3>
        <h4>population:{state.population}</h4>
    </div>
    ))}
  </div>
  )
}

export default States