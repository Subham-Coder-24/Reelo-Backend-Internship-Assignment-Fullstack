import React from 'react'
import './Question.css'

const Question = ({ data }) => {
  console.log(data);
  return (
    <div className='que'>
      <div className='top'>
        <h3>{data.question}</h3>
        <p>{data.difficulty}</p>
      </div>
      <div className='bottom'>
        <p>{data.subject}/{data.topic}</p>
        <p>score/{data.marks}</p>
      </div>
    </div>
  )
}

export default Question