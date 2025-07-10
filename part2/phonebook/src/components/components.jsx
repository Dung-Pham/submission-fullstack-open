import { useState } from "react"
export const Filter = ({persons}) =>{
    const [searchResults, setSearchResults] = useState([])
    const [searchName, setSearchName] = useState('')

    const handleChangeSearch = (e) =>{
    setSearchName(e.target.value)
  }
  const handleClickSearch = () =>{
    setSearchResults(persons.filter(person => person.name.toLowerCase().includes(searchName.toLowerCase())))
  }
    return(
        <>
            <div>
                filter shown with :  
                <input value = {searchName} onChange={handleChangeSearch}/> 
                <button onClick={handleClickSearch}>search</button>
            </div>
            {searchResults.map((result, i) => <p key = {i}>{result.name}</p>)}
        </>
    )
} 

export const PersonForm = ({persons , setPersons}) =>{
    
    
    const [newName, setNewName] = useState('')
    const [numberInput, setNumberInput] = useState('')
  
  
    const handleChangeName = (e) =>{
        setNewName(e.target.value)
    }
    const handleChangeNumber = (e) =>{
        setNumberInput(e.target.value)
    }

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
  
    return(
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
    )
}

export const Person = ({persons}) =>{

    return(
        <>
            {persons.map((person, i) => <p key={i}>{person.name} {person.number}</p>) }
        </>
        
    )
}