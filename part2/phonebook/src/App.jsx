import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const handleSubmit = (event) =>{
    event.preventDefault()
    const newPerson = { name: newName}
    const checkExist = persons.filter(person => person.name === newPerson.name)

    if (checkExist.length > 0 ) {
      alert(`${newName} is already added to phonebook`)
    }
    else {
      setPersons(persons.concat(newPerson))
      setNewName('')
    }
    
  }
  const handleChangeInput = (e) =>{
    setNewName(e.target.value)
  }
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input  value = {newName} onChange={handleChangeInput}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((person, i) => <p key={i}>{person.name}</p>) }
    </div>
  )
}

export default App