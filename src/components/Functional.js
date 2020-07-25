import React from 'react'

// function Greet() {
//     return <h1>Hello Amit</h1>
// }

// const Functional = ({name , heroName})=>{}
const Functional = props => {
    return (
        <div>
            <h1>Hello {props.name} is {props.heroName}</h1>
            {props.children}
        </div>
    )
}

export default Functional