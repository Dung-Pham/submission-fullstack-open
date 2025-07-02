import { useState } from 'react'


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)


  
  const updateFeedback = (setFunc, value) => () => {
    setFunc(value + 1)

  }

  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={updateFeedback(setGood, good)}>good</button>
      <button onClick={updateFeedback(setNeutral, neutral)}>neutral</button>
      <button onClick={updateFeedback(setBad, bad)}>bad</button>
      <h1>statistics</h1>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
    </div>
  )
}


export default App