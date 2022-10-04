import React from 'react'
import { usePeopleStore } from '../store'

export const People = () => {
    const people = usePeopleStore(state => state.people)
  return (
    <div>
        <p>
            We have {people?.length} people in our DB
        </p>
        <>
            <ul>
                {people?.map((person) => {
                    return <li>{person}</li>
                })}
            </ul>
        </>
        </div>
  )
}
