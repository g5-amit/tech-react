import React from 'react'

function Person({person}) {
    return (
        <div>
            <h2>{person.name} has age {person.age}</h2>
        </div>
    )
}

export default Person
