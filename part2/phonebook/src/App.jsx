import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' , number: '040-123456'}
  ]) 
  const [newName, setNewName] = useState('')
  const [numberInput, setNumberInput] = useState('')

  const handleSubmit = (event) =>{
    event.preventDefault()
    const newPerson = { name: newName , number: numberInput}
    const checkExist = persons.filter(person => person.name === newPerson.name)

    if (checkExist.length > 0 ) {
      alert(`${newName} is already added to phonebook`)
    }
    else {
      setPersons(persons.concat(newPerson))
      setNewName('')
      setNumberInput('')
    }
    
  }
  const handleChangeName = (e) =>{
    setNewName(e.target.value)
  }
  const handleChangeNumber = (e) =>{
    setNumberInput(e.target.value)
  }
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input  value = {newName} onChange={handleChangeName}/>
        </div>
        <div>
          number: <input value = {numberInput} onChange={handleChangeNumber}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((person, i) => <p key={i}>{person.name} {person.number}</p>) }
    </div>
  )
}

export default App