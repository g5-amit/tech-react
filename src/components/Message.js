import React , { Component } from 'react'

class Message extends Component{
    constructor(){
        super()
        this.state = {
            message: 'Subscribe Now'
        }
    }

    changeMessage(){
        this.setState(
            {
                message: 'Thank You for Subscibing Duggu'
            }
        )
    }

    render(){
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={()=> this.changeMessage()}>Subscribe</button>
            </div>

        )
        
    }
}

export default Message