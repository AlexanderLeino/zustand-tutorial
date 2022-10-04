import React, { useRef } from 'react'
import {usePeopleStore} from '../store'
export const Input = () => {
    const inputRef = useRef()
    const addPerson = usePeopleStore(state => state.addPerson)
    const deleteUser = usePeopleStore(state => state.deletePerson)

    const add = () => {
        addPerson(inputRef.current.value)
    }
    const deletePerson = () => {
        deleteUser()
    }

  return (
    <div>
        <input type='text' ref={inputRef}/>
        <button onClick={add}>Add Person</button>
        <button onClick={deletePerson}>Delete A Person</button>
    </div>
  )
}
