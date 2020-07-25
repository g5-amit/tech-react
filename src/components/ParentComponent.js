import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

class ParentComponent extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             parentName: 'Parent',
             isLoggedIn: false
        }

        this.greetParent = this.greetParent.bind(this)
    }
    
    greetParent = (childName)=>{
        alert(`Hello ${this.state.parentName} greetings from ${childName}`)
    }

    render() {
        let message
        if(this.state.isLoggedIn){
            message = <div>Hello Amit</div> 
        }else{
            message = <div>Hello Duggu</div>
        }
        return (
            <div>
                <div>{message}</div>
                <div>
                    <ChildComponent greetHandler = {this.greetParent}></ChildComponent>
                </div>
            </div>  
        )
    }
}

export default ParentComponent
