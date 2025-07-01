const Header = (props) =>{
  return (
    <h1>{props.course}</h1>
  )
} 

const Part = (props) =>{
  return(
    <p>{props.part} {props.exercises}</p>
  )
}
const Content = (props) =>{
  return (
    <div>
      <Part part = {props.list[0].part} exercises = {props.list[0].exercises}/>
      <Part part = {props.list[1].part} exercises = {props.list[1].exercises}/>
      <Part part = {props.list[2].part} exercises = {props.list[2].exercises}/>
    </div>
  )
} 

const Total = (props) =>{
  return (
    <p>Number of exercises {props.total}</p>
  )
} 
const App = () => {
  const course = 'Half Stack application development'
  const list = [
    {part :'Fundamentals of React', exercises:10},
    {part :'Using props to pass data', exercises:7},
    {part :'State of a component', exercises:14},
  ]

  return (
    <div>
      <Header course = {course}/>
      <Content list = {list} />
      <Total total = {list[0].exercises + list[1].exercises + list[2].exercises} />
    </div>
  )
}

export default App