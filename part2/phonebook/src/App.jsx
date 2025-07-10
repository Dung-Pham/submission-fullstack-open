import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [numberInput, setNumberInput] = useState('')
  const [searchName, setSearchName] = useState('')
  const [searchResults, setSearchResults] = useState([])
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
  const handleChangeSearch = (e) =>{
    setSearchName(e.target.value)
  }
  const handleClickSearch = () =>{
    setSearchResults(persons.filter(person => person.name.toLowerCase().includes(searchName)))
  }
  return (
    <div>
      <h2>Phonebook</h2>
      <div>filter shown with :  <input value = {searchName} onChange={handleChangeSearch}/> <button onClick={handleClickSearch}>search</button></div>
      {searchResults.map((result, i) => <p key = {i}>{result.name}</p>)}
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