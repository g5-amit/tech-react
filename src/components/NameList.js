import React from 'react'
import Person from './Person'

function NameList() {
    const persons = [
        {
            id:1,
            name:'Adit',
            age:'4'
        },
        {
            id:2,
            name:'Amit',
            age:'32'
        },
        {
            id:3,
            name:'Anvay',
            age:'2'
        },

        ]
    const nameList = persons.map(person => 
        <Person key = {person.id} person = {person}></Person>
    )
    return (
        <div>{nameList}</div>
    )
}

export default NameList
