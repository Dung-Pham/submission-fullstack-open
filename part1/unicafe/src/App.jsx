import { useState } from 'react'

const StatisticLine = ({text, value}) =>{
  return(
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}
const Statistics = (props) => {
  const list = props.statistics
  if (list[3] === 0) {
    return(
      <p>No feedback given</p>
    )
  }
  return (
    <table>
      <tbody>
        <StatisticLine text='good' value = {list[0]}/>
        <StatisticLine text='neutral' value = {list[1]}/>
        <StatisticLine text='bad' value = {list[2]}/>
        <StatisticLine text='all' value = {list[3]}/>
        <StatisticLine text='average' value = {list[4]}/>
        <StatisticLine text='positive' value = {`${list[5]} %`}/>
      </tbody>
    </table>
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
      <Statistics statistics = {[good, neutral, bad, all, average.toFixed(13), positive.toFixed(13)]}/>

    </div>
  )
}


export default App