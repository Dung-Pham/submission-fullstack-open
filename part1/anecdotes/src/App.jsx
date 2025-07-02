import { useState } from 'react'

const Statistics = ({all, average, positive}) => {
  return (
    <>
      <p>all {all}</p>
      <p>average {average.toFixed(13)}</p>
      <p>positive {positive.toFixed(13)} %</p>
    </>
  )
}
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  const [average, setAverage] = useState(0.0)
  const [positive, setPositive] = useState(0.0)
  

  
  const calculator = (good, neutral, bad) => {
    const newAll = good + neutral + bad
    setAll(newAll)
    setAverage((good*1 + neutral*0 + bad * -1)/newAll)
    setPositive(good/newAll * 100)
      
  }
  const setToGood = ()  => {
    const newGood = good + 1
    setGood(newGood)
    calculator(newGood, neutral, bad)
  }

  const setToNeutral = () => {
    const newNeutral = neutral + 1
    setNeutral(newNeutral)
    calculator(good, newNeutral, bad)
  }

  const setToBad = ()  => {
    const newBad = bad + 1
    setBad(newBad)
    calculator(good, neutral, newBad)
  }

  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={setToGood}>good</button>
      <button onClick={setToNeutral}>neutral</button>
      <button onClick={setToBad}>bad</button>
      <h1>statistics</h1>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <Statistics all = {all} average = {average} positive = {positive}/>

    </div>
  )
}


export default App